//© Lisence :
//github.com/hirooSy

import didyoumean from 'didyoumean'
import { plugins } from '../lib/plugins.js'

let handler = m => m
handler.before = async function (m, { match }) {
	
let usedPrefix
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(plugins).filter(v => v.dym && !v.disabled).map(v => v.dym).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		if (mean) this.reply(m.chat, `*𝗗𝗶𝗱 𝗬𝗼𝘂 𝗠𝗲𝗮𝗻 :* [ ${usedPrefix + mean} ] ?`, m)
	}
	

}
export default handler