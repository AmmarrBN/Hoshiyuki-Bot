import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
case 'waifu':
case 'megumin':
case 'neko':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random ${command}`, m)
   m.react(dmoji) 
break

default:
 }
}
handler.help = ['waifu', 'neko', 'megumin']
handler.tags = ['nime']
handler.command = ['waifu', 'neko', 'megumin'] 
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}