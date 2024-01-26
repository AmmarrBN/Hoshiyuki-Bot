import { youtubedl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

//--------------------- VIDEO --------------
if (command === ("ytv" || "ytvideo" || "youtubevideo" || "youtubev") ) {
if (!text) throw "Contoh penggunaan :\n  • .ytv link"
  var [link, reso] = text.split`|`
  
  var search = await youtubedl(link)
  if (!reso == ("144" || "240" || "360" || "480" || "720" || "1080" )) return m.reply("Harap Masukan Resolusi yang benar!")
  if (!reso) {
let relay = `I N S T R U C T I O N

Pilih Resolusi Video
 • 1080p
 • 720p
 • 480p
 • 360p
 • 240p
 • 144p
 
 ${usedPrefix + command} ${link}|360p

`
    conn.relayMessage(m.chat,  { scheduledCallCreationMessage: {
	callType: 'VIDEO',
	scheduledTimestampMs: 0,
	title: relay}
	}, {})
 } else {
    let q = reso + 'p'
    var result = await search.video[q].download()
    await conn.sendFile(m.chat, result, 'youtubedl.mp4',null,m)
  }
}

//--------------------- AUDIO --------------
if (command === ("yta" || "ytaudio" || "youtubeaudio" || "youtubea") ) {
if (!text) throw "Contoh penggunaan :\n  • .yta <link>"
  var waiting = await youtubedl(args[0])
  
    var result2 = await waiting.audio['128kbps'].download()
    await conn.sendFile(m.chat, result2, 'yt.mp3','',m, { mimetype: 'audio/mp4' })
  }

}
handler.dym = ['ytv', 'yta']
handler.help = ['ytv', 'yta'].map(v => v + ' <link>')
handler.tags = ['internet', 'tool']
handler.command = /^y(outube|t)(v|video|a|audio)$/i

export default handler