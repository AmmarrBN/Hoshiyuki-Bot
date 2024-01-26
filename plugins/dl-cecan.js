import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let api1 = `https://aemtme/${command}`
    let api2 = `https://aemtme/${command}`
    let buffer = await fetch(api1)
        .then(res => res.buffer())
        .catch(async (err) => {
            console.log(`API 1 failed with error: ${err}. Trying API 2...`)
            buffer = await fetch(api2).then(res => res.buffer())
            return buffer
        })
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `Random ${command}`, m)
}

handler.command = ['malaysia']
handler.tags = ['dl']

export default handler