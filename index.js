// GLE XMD - Main File by Charles Tech
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");
const config = require("./config.js");

async function startGLE() {
    const { state, saveCreds } = await useMultiFileAuthState('session');
    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        auth: state,
        printQRInTerminal: true,
        browser: ["GLE XMD", "Chrome", "1.0.0"]
    });
    sock.ev.on('creds.update', saveCreds);
    sock.ev.on('connection.update', (u) => {
        if (u.connection === 'open') console.log('✅ GLE XMD IMEUNGANISHWA');
    });
    // Hapa ndipo menu.js na gle_comands zinaitwa
    require("./menu.js")(sock);
}
startGLE();
