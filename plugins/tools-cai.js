import fetch from 'node-fetch';

// Initialize an empty array to store chat history
let chatHistory = [];
let currentCharacter = null;

let handler = async (m, { args, usedPrefix, command }) => {
    let [char, text] = args.join(' ').split('|');

    // Check if the character name is changed
    if (currentCharacter !== char) {
        // If the character is changed, create a new chat history
        chatHistory = [];
        currentCharacter = char;
    }

    // Concatenate the user's text with the introductory text
    let zeltoria = await fetch(`https://beige-hermit-crab-hat.cyclic.app/api/c-ai?char=${char}&text=${text}&apikey=AmmarBN`);
    let hasil = await zeltoria.json();

    // Store the current interaction in the chat history
    chatHistory.push({ character: char, userText: text, aiResponse: hasil.result });

    // Construct the chat history string
    let chatHistoryString = chatHistory.map((item, index) =>
        `#${index + 1} - Character: ${item.character}\nAnda: ${item.userText}\n${char}: ${item.aiResponse}\n`
    ).join('\n');

    // Reply with the current interaction and chat history
    m.reply(`Character: ${char}\nAnda: ${text}\n${char}: ${hasil.result}\n\nChat History:\n${chatHistoryString}`.trim());
};

handler.help = ['cai'];
handler.tags = ['premium'];
handler.command = /^(cai)$/i;
handler.premium = false;
handler.limit = true;

export default handler;