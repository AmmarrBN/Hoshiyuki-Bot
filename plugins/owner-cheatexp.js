let handler = async (m, { conn, command, text, args }) => {

    let who = m.sender

    let users = global.db.data.users

    users[who].exp += 9999999

    conn.reply(m.chat, '*Parah Owner Ngecheat Exp Bjir 😂*\nExp: *+9999999*', m)

}

handler.tags = ['main']

handler.help = ['cheatexp']

handler.command = /^(cheatexp)$/i

handler.rowner = true

export default handler