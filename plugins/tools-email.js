//* Tools By Ammar Executed

import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
   try {
       if (!text) throw `Masukkan Command .email kontolodon@gmail.com`;

       const response = await fetch(`https://rest-api-flask-eosin.vercel.app/api/spam-gmail?email=${text}&apikey=AmmarBN`);
       if (!response.ok) {
           throw `Error: ${response.status} - ${response.statusText}`;
       }

       const result = await response.text();
       m.reply(result.trim());
   } catch (error) {
       const response = await fetch(`https://rest-api-flask-eosin.vercel.app/api/spam-gmail?email=${text}&apikey=AmmarBN`);
       const result2 = await response.text();
       m.reply(result2.trim());
   }
};

handler.help = ['spamemail', 'email'];
handler.tags = ['premium'];
handler.command = /^(spamemail|email)$/i;
handler.premium = true;
handler.diamond = true;

export default handler;