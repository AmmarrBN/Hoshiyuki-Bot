
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONASI*
Anda dapat menyumbang jika Anda ingin membantu menjaga bot tetap aktif

▢ *DANA*
• *Nomor :* ${dana}

▢ *QRIS*
• _Scan qris di atas, masukan donasi mu. besar kecilnya donasi anda, saya sangat berterima kasih._
`
let img = qris
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
