/*import { youtube } from '@xct007/frieren-scraper'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    conn.room = conn.room ? conn.room: {}
    let text = (args.length > 1 ? args.slice(1).join(' '): '') || ''
    if (!text) return m.reply(`Masukan Query!\n\nContoh:\n${usedPrefix + command} audio Grand Escape\n${usedPrefix + command} video Grand Escape Amv`)
    if (!/audio|video/i.test(args[0])) return m.reply(`Masukan Query!\n\nContoh:\n${usedPrefix + command} audio Grand Escape\n${usedPrefix + command} video Grand Escape Amv`)
    let id = 'youtube_' + m.sender
    try {
        conn.room[id] = true
        let { title, uploaded, duration, views, url, thumbnail } = (await youtube.search(text))[0]
        let caption = `*${decor.htki} Y T - P L A Y ${decor.htka}*

🎧 *Title:* ${title}
📤 *Published:* ${uploaded}
⏰ *Duration:* ${duration}
👁️ *Views:* ${views}

🔗 *Url:* ${url}

*L O A D I N G. . .*
`.trim()
        let { audio, video } = await youtubedl(url).catch(async _=> await youtubedlv2(url)) 
        if (isPrems ? (audio['128kbps'].fileSize > 100000 || video['360p'].fileSize > 100000): (audio['128kbps'].fileSize > 50000 || video['360p'].fileSize > 50000)) return m.reply('_Gagal Mendownload, Ukuran File Terlalu Besar!_')
        let msg = await conn.adReply(m.chat, caption, title, 'Playing 🔊', thumbnail, url, m)
        if (/play/i.test(command)) {
            switch (args[0]) {
                case 'audio':
                    conn.sendFile(m.chat, await audio['128kbps'].download(), title + '.mp3', '', msg, false, { mimetype: 'audio/mpeg' })
                    break
                case 'video':
                    conn.sendFile(m.chat, await video['360p'].download(), title + '.mp4', title, msg)
                    break
                default:
                    return
            }
        }
    } catch (e) {
        return m.reply('Failed :(')
    } finally {
        delete conn.room[id]
    }
}
handler.help = ['play'].map(v => v + ' <type> <query>')
handler.tags = ['sound']
handler.command = /^play$/i
handler.limit = true
export default handler*/



import ytdl from '@distube/ytdl-core'
import yts from 'yt-search'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} 7!! Orange`;

  let search = await yts(text);
  let vid = search.videos[0];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
  ⬡ Title: ${title}
  ⬡ Duration: ${timestamp}
  ⬡ Views: ${views}
  ⬡ Upload: ${ago}
  ⬡ Link: ${url}
╰────────⬣`;

  conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, viewOnce: true, footer: author }, { quoted: m });


  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`./tmp/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);
  let doc = {
    audio: {
      url: `./tmp/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: '',
        title: 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ - ᴘ ʟ ᴀ ʏ',
        body: 'ᴀ s ᴛ ʀ ᴏ - ᴍ ᴅ',
        sourceUrl: 'https://control.optiklink.com',
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`./tmp/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: tmp/${title}.mp3`);
    }
  });
}

handler.help = ['play'].map((v) => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play)$/i
handler.register = true

export default handler