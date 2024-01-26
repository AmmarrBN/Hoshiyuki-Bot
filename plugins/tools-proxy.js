//* Proxy Tools By AmmarBN


import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Masukkan jumlah proxy`;
    
    // Convert async text to a number
    const numberOfProxies = parseInt(text);
    if (isNaN(numberOfProxies)) throw `Jumlah proxy harus berupa angka`;

    // Concatenate the user's text with the introductory text
    const userText = "In this hypothetical story, ..."; // Your existing userText code

    // Updated URL
    let zeltoria = await fetch(`https://hoshiyuki-api.my.id/proxy?jum=${numberOfProxies}&apikey=Hoshiyuki`);
    let hasil = await zeltoria.json();
    
    // Ensure the result has the "proxies" property and is an array
    const proxies = hasil.proxies || [];
    if (!Array.isArray(proxies)) throw `Respon tidak sesuai format`;

    // Send the proxies as a response
    m.reply(`Made By AmmarBN\nDaftar Proxy:\n${proxies.join('\n\n')}`);
};

handler.help = ['proxy'];
handler.tags = ['premium'];
handler.command = /^(proxy)$/i;
handler.premium = false;
handler.diamond = true;

export default handler;