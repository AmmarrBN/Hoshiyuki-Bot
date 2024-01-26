import { susunkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let dm = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    const json = await susunkata()
    let caption = `
≡ _GAME SUSUNKATA_

┌─⊷ *SOAL*
▢ ${json.soal}
▢ Tipe: *${json.tipe}*
▢ Timeout *${(timeout / 1000).toFixed(2)} detik*
▢ Ketik ${usedPrefix}suska untuk bantuan

▢ Bonus: ${poin} XP
                 1 💎
└──────────────
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

export default handler