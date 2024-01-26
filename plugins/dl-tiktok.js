import { tiktok, tiktokv2 } from '../lib/tiktok.js'
import db from '../lib/database.js'
let handler = async (m, { conn, args, command}) => {
  
if (command == "ttaudio" || command == "tiktokaudio") {
  if (!args[0]) throw 'Uhm...url nya mana?'
await conn.reply(m.chat, `Downloading media from Tiktok`, m)
let ros = await tiktokv2(args[0])
try {
if (!res) throw 'konten tidak ditemukan'
let res = await tiktok(args[0])
let { creator, title, author, noWM, wm, audio, thumbnail } = res
    await conn.sendFile(m.chat, audio, 'tiktok.mp3', '', m, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: db.data.chats[m.chat].useDocument })
    } catch (e) {
try {
if (ros.status === false) throw 'konten tidak ditemukan'
    let { music } = await ros.result.download
    await conn.sendFile(m.chat, music, 'tiktok.mp3', '', m, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: db.data.chats[m.chat].useDocument })
    } catch (e) {
    throw e
    }
  }
}

if (command == "tiktok" || command == "tt") {
if (!args[0]) throw 'Uhm...url nya mana?'
await conn.reply(m.chat, `Downloading media from Tiktok`, m)
let ros = await tiktokv2(args[0])
try {
if (!res) throw 'konten tidak ditemukan'
let res = await tiktok(args[0])
let { creator, title, author, noWM, wm, audio, thumbnail } = res
    await conn.sendFile(m.chat, noWm, 'tiktok.mp4', `▹ Title: ${title}\n▹ Author: ${author}\n▹ Creator: ${creator}`, m)
    } catch (e) {
    try {
    if (ros.status === false) throw 'konten tidak ditemukan'
    const { nowm } = ros.result.download
    await conn.sendFile(m.chat, nowm, 'tiktok.mp4', ros.result.desc, m)
      } catch (e) {
      throw e
      }
   }
  }
  
}
handler.help = ['tiktokaudio', 'tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttaudio|tiktokaudio|tt|tiktok)$/i

export default handler