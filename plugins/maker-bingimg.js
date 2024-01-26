import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Mau Nanya Apa???`;

    const apiUrl = "https://vihangayt.me/tools/ai-bingimg?q=" + encodeURIComponent(text);

    try {
        let response = await fetch(apiUrl);

        if (!response.ok) {
            throw `Failed to fetch data from API. Status: ${response.status} - ${response.statusText}`;
        }

        let jsonData = await response.json();

        // Respond with the entire JSON response data
        m.reply('JSON Response:\n```json\n' + JSON.stringify(jsonData, null, 2) + '\n```');
    } catch (error) {
        console.error(error);
        throw 'Error fetching data from API.';
    }
}

handler.help = ['bingimg'];
handler.tags = ['maker'];
handler.command = /^(bingimg)$/i;
handler.premium = true;
handler.limit = false;

export default handler;