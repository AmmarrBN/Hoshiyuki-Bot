import fetch from 'node-fetch';
import util from 'util';
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var js = await fetch(`https://hoshiyuki-api.my.id/api/openai?text=${text}&apikey=Hoshiyuki`)
var json = await js.json()
try {
  await conn.sendMessage(m.chat, {
text: json.result,
contextInfo: {
externalAdReply: { 
title: 'Chat GPT',
body: '',
thumbnailUrl: "https://telegra.ph/fil e/7a385897829927b981dfa.jpg",
sourceUrl: "https://github.com/AmmarrBN",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
m.reply(util.format(js))
}}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['info'];
handler.limit = 3
export default handler;