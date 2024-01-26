/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Letta
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6287708773367', 'AmmarBN', true],
  ['6285712420674', 'Hiroosy', true],
  ['6288229683561', 'Yuki', true],
  ['50661122222', 'AmmarBN', true]
] // Nomor Owner

global.mods = ['6287708773367'] 
global.prems = ['6287708773367', '6285712420674','27630902710','50661122222']

// apikey
global.lann = 'Kontolodon'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'Kontolodon'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = '© AmmarBN' // nama owner
global.nomor = '6287708773367' // nomor owner
global.nomorbot = '62882296835613' // nomor bot
global.nomorwa = '6287708773367' // nomor owner
global.nans = 'Hoshiyuki-Bot' // nama bot 
global.thumb = 'https://i.ibb.co/vPmpMLW/20230919-175841.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/HHKecyBuarkKN8JzN0VCtu' // link group yang ada di menu

// Sticker wm
global.packname = 'Hoshiyuki-Bot' 
global.author = '© AmmarBN' 
global.fgig = 'https://www.instagram.com/ammarbn27' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/AmmarrBN' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@AmmarExecuted?si=KVYlIUwRwH7i-VRk' // bebas tapi jangan kosong
global.fgpyp = 'https://youtube.com/@AmmarExecuted?si=KVYlIUwRwH7i-VRk' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/XCxdsyX/20230919-120138.jpg'

// Other
global.dana = '6287708773367'
global.qris = 'https://i.ibb.co/8jp9C34/Screenshot-2023-08-25-09-50-26-33-0a59110a7b15fa97a865118a0e58c69a.jpg'
global.web = 'https://github.com/AmmarrBN'
global.email = 'nknoytsuba@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})