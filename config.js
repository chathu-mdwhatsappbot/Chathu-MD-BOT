const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zMxUEaQQ#nOEPjKW8wjBwbvPXyoMU7mTEkGOV89ej2DIj1pTJNVo",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://image2url.com/r2/default/images/1775658502121-9ccec674-ba8c-400a-a298-d5ffe3e8b6af.png",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM CHATHU-MD CREATED BY CHATHUU <NOW ALIVE> "
};
