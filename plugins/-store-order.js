let handler = async (m, { conn, text, usedPrefix, command }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    if (!text) throw `Hai kak👋 mau order ya\nsilahkan ketik orderan\ncontoh *.order min beli premium*`
    if (text.length < 10) throw `cotoh saya mau order premium!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Bot, Jika ${command.toLowerCase()} Hanya Main-Main Tidak Akan Ditanggapi._`)
}
handler.help = ['order']
handler.tags = ['store']
handler.command = /^(order)$/i
export default handler
