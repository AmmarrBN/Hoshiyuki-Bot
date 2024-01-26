let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Mau Dihack Berapa exp sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].exp -= Infinity
    conn.reply(m.chat, 'Sukses Hack Jebol *Infinity* Ayang!', m)
}
handler.help = ['hackinfi']
handler.tags = ['owner']
handler.command = /^hackinfi(user)?$/i
handler.rowner = true

export default handler