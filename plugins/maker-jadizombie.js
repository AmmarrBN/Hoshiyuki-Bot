/*
Thanks To Botcahx
*/

import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js"
let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
	       await conn.reply(m.chat, wait, m)
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(API('lann', '/api/maker/jadizombie', { url: `${out}`, apikey: lann }))
			let convert = await res.json()
			let buff = await fetch(convert.result)
           .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
};
handler.help = ['jadizombie'];
handler.command = ['tozombie','jadizombe'];
handler.tags = ['maker'];
handler.premium = false;
handler.limit = 5;
export default handler;