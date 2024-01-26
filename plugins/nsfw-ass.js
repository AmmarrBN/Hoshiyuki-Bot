import fetch from 'node-fetch'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
    let waifu = await (await fetch ((await (await fetch("https://raw.githubusercontent.com/AmmarrBN/dbbot/main/nsfw/nsfw-ass.json")).json()).getRandom())).buffer()
    conn.sendFile(m.chat, waifu, null, "Sange Ama gambar🥵",m)
    let vn = ucapan()
    conn.sendFile(m.chat, vn, "ehe.mp3", null, m, true, {
                type: "audioMessage",
                ptt: true,
        });
}

handler.command = /^(nsfwass|ass)$/i
handler.tags = ['nsfw']
handler.help = ['nsfwass']
handler.private = true
handler.register = false
handler.berlian = true
export default handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "./vn/ara.mp3"
    if (time >= 4) {
        res = "./vn/ara1.mp3"
    }
    if (time > 10) {
        res = "./vn/ara2.mp3"
    }
    if (time >= 15) {
        res = "./vn/ara3.mp3"
    }
    if (time >= 18) {
        res = "./vn/ara4.mp3"
    }
    return res
}