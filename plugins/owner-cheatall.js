let handler = async (m, { conn, command, text, args }) => {
    if (m.isGroup) {
        let who = m.mentionedJid ? m.mentionedJid[0] : m.chat
        if (!who) {
            let user = global.db.data.users[m.sender]
            user.diamond += Infinity
            user.exp += Infinity
            user.level += Infinity
            user.umur += Infinity
            conn.reply(m.chat, 'Sukses Ayang!', m)
        } else {
            let users = global.db.data.users
            users[who].diamond += Infinity
            let userss = global.db.data.users
            users[who].exp += Infinity
            let usersss = global.db.data.users
            users[who].level += Infinity
            let userssss = global.db.data.users
            users[who].umur += Infinity
            conn.reply(m.chat, 'Sukses Ayang!', m)
        }
    } else {
        throw 'Command ini hanya bisa digunakan di grup.'
    }
}
handler.help = ['cheatall']
handler.tags = ['owner']
handler.command = /^cheatall(user)?$/i
handler.rowner = true

export default handler