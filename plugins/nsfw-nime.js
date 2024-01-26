import fetch from 'node-fetch'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
    let waifu = await (await fetch ((await (await fetch("https://raw.githubusercontent.com/sadteams/database/main/nsfw/hentai.json")).json()).getRandom())).buffer()
    conn.sendFile(m.chat, waifu, null, "Sange Ama Gambar🥵~~",m)
}

handler.command = /^(nsfwhentai)$/i
handler.tags = ['nsfw']
handler.help = ['nsfwhentai']
handler.private = true
handler.register = true
handler.berlian = true
export default handler