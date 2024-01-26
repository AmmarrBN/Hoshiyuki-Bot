//* Random UserAgent Tools By AmmarBN


import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Masukkan jumlah useragent yang diminta !!`;
    
    // Convert async text to a number
    const numberOfProxies = parseInt(text);
    if (isNaN(numberOfProxies)) throw `Jumlah useragent harus berupa angka`;

    // Concatenate the user's text with the introductory text
    const userText = "In this hypothetical story, ..."; // Your existing userText code

    // Updated URL
    let zeltoria = await fetch(`https://hoshiyuki-api.my.id/user-agent?jum=${numberOfProxies}&apikey=Hoshiyuki`);
    let hasil = await zeltoria.json();
    
    // Ensure the result has the "proxies" property and is an array
    const proxies = hasil.user_agents || [];
    if (!Array.isArray(proxies)) throw `Respon tidak sesuai format`;

    // Send the proxies as a response
    m.reply(`Made By AmmarBN\nDaftar UserAgent:\n${proxies.join('\n\n')}`);
};

handler.help = ['useragent'];
handler.tags = ['tools'];
handler.command = /^(ua|useragent)$/i;
handler.premium = false;
handler.diamond = true;

export default handler;