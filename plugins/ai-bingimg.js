let handler = async (m, { conn, text, command }) => {
	
  if (!text) return m.reply("𝐢  . Where the text content?")
	    let link = `https://hoshiyuki-api.my.id/maker/bingimg?text=${text}&apikey=Hoshiyuki`
	    await conn.sendFile(m.chat, link, "ai.png", "*• Prompt*:\n" + text, m)
  
}
handler.help = ["text2img"]
handler.command = ["text2img", "tti"]
handler.tags = ['ai']

handler.limit = true
handler.register = true
export default handler