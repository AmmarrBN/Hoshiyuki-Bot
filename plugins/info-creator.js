function handler(m) {
  
  const kontak = {
	"displayName": 'Owner Ammar',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Owner Ammar\nitem1.TEL;waid=6287708773367:6287708773367\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://github.com/AmmarrBN\nEMAIL;Email Owner:nknoytsuba@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

  const kontak2 = {
	"displayName": 'Hoshiyuki-Bot',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: Hoshiyuki-Bot\nitem1.TEL;waid=62882296835613:62882296835613\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://github.com/AmmarrBN\nEMAIL;Email Owner:nknoytsuba@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
conn.sendMessage(m.chat, { contacts: { contacts: [kontak2] }}, { quoted: m })

let vn = "./vn/owner.mp3"
  conn.sendFile(m.chat, vn, 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}

handler.help = ['owner', 'creator']
handler.tags = ['main']

handler.command = /^(owner|creator)$/i

export default handler