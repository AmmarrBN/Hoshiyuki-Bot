let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Mau Dihack Berapa exp sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].exp -= 99999999999999999999999999999999999999999999999999999999999999999999999999999999
    conn.reply(m.chat, 'Sukses Hack Exp sebesar *99999999999999999999999999999999999999999999999999999999999999999999999999999999* Ayang!', m)
}
handler.help = ['hackexp']
handler.tags = ['owner']
handler.command = /^hackexp(user)?$/i
handler.rowner = true

export default handler