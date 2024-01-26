let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Berapa Level Sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].level += 90
    conn.reply(m.chat, 'Sukses Ayang!', m)
}
handler.help = ['addlvl']
handler.tags = ['owner']
handler.command = /^addlvl(user)?$/i
handler.rowner = true

export default handler