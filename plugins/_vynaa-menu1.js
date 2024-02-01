import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah menu di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/148864aa6c90c73f67fed.mp4"},
      gifPlayback: true,
      caption: '*ᴀsᴛʀᴏᴍᴅ* ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍᴇɴᴜʜɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇʀᴀꜱᴀ ʟᴇʟᴀʜ? *ᴠʏɴᴀᴀ* ꜱᴇʟᴀʟᴜ ᴅɪ ꜱɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ʜᴀʀɪ ᴀɴᴅᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴅᴀꜰᴛᴀʀᴋᴀɴ ᴅɪʀɪ ᴀɴᴅᴀ ᴅɪ *ᴅᴀᴛᴀʙᴀꜱᴇ* ᴠʏɴᴀᴀ ᴀɢᴀʀ ᴠʏɴᴀᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪɴɢᴀᴛ ᴀɴᴅᴀ ꜱᴇʟᴀᴍᴀ ᴠʏɴᴀᴀ ᴍᴀꜱɪʜ ᴀᴋᴛɪꜰ.\n\n*L I S T - M E N U*\n*.about*\n*.ᴀʟʟᴍᴇɴᴜ*\n*.ᴍᴇɴᴜʟɪꜱᴛ* (new!)',
      contextInfo: {
      externalAdReply: {
      title: `© AstroMD - Official`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/30ab63b8f670bebb2ffdf.jpg',
      sourceUrl: `https://chat.whatsapp.com/Fa2JxfqKnMO0qxsGme5NeW`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/chipi.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(menu1)$/i;

export default handler;