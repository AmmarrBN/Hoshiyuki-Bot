//© Lisence.
// Feature by: github.com/HirooSy
// 6 . 10 . 2023

let handler = async (m, { conn, usedPrefix, command }) => {
    
    let q = m.quoted ? m.quoted : m
   if (!q) throw "reply medianya"
   let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
   if (!/image\/(png|jpe?g|gif)|video\/mp4|audio/.test(mime)) throw `mime tidak mendukung`
    let media = await q.download?.()
    if (!media) throw '❎ Kesalahan mengunduh media'
    conn.sendFile(m.chat, media, 'audio.mp3', '', m, null, { mimetype: q.mimetype, viewOnce: true })
   
}
handler.help = ['toviewonce']
handler.tags = ['fun']
handler.command = ['toviewonce', 'tovno'] 

export default handler