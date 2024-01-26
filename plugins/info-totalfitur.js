import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let cap = `Fitur Total Bot Saat Ini: \n*🔖 Plugins :* ±${totalf} Plugins Files\n*🔖 Fitur :* ±${fitur.length} Menu`  
conn.reply(m.chat, cap, m)
}  
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler