let handler = async (m, { conn, usedPrefix, command }) => {

    let don = `
≡ *ISTRI ADMIN/OWNER*
Dih Napa lu pada liat istri gw
`
    let imgUrls = ['https://telegra.ph/file/e722b6e7be27a8cb759ea.jpg','https://telegra.ph/file/608e7886f6fa2fb3ff6f7.jpg','https://telegra.ph/file/e722b6e7be27a8cb759ea.jpg'
    ];

    // Randomly select an image URL
    let randomIndex = Math.floor(Math.random() * imgUrls.length);
    let img = imgUrls[randomIndex];

    conn.sendFile(m.chat, img, 'img.jpg', don, m);

}
handler.help = ['istriadmin'];
handler.tags = ['main'];
handler.command = ['istriadmin'];

export default handler;