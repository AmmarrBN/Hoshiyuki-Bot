let handler = async(m, { conn }) => {
  const asupan = [
    `https://aemt.me/asupandouyin`
  ]
  try {
    const url = pickRandom(asupan);
    await conn.sendFile(m.chat, url, 'asupan.mp4', '', m);
  } catch (e) {
    console.log(e);
    m.reply('Maaf, video asupan tidak ditemukan');
  }
}

handler.help = ['asupan']
handler.tags = ['dl']
handler.command = /^asupan$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

export default handler