let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Mau nge cheat siapa sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].diamond -= Infinity
    let userss = global.db.data.users
    users[who].exp -= Infinity
    let usersss = global.db.data.users
    users[who].level -= Infinity
    let userssss = global.db.data.users
    users[who].umur -= Infinity
    conn.reply(m.chat, 'Sukses Ayang!', m)
}
handler.help = ['resetall']
handler.tags = ['owner']
handler.command = /^resetall(user)?$/i
handler.rowner = true

export default handler