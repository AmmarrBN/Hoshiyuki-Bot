//* Update Feature By AmmarBN

import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
     if (!text) throw `✳️ _Kirim teks_\n\n📌Contoh *${usedPrefix + command}* AmmarBN`
    //let stiker = await sticker(null, global.API('https://aemt.me', '/attp', { file: '', text }), global.packname, global.author)
     let stiker = await sticker(null, global.API('https://aemt.me', '/attp', { text }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m )
    throw stiker.toString()
}
handler.help = ['attp <text>']
handler.tags = ['sticker']
handler.command = ['attp'] 

export default handler