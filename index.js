// GLE XMD - Main File by Charles Tech
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");
const config = require("./config.js");
const fs = require("fs");

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

    // Hapa sasa tunaita gle_commands zote kiotomatiki
    const commands = {};
    const files = fs.readdirSync("./gle_commands");
    for (let file of files) {
        const cmd = require(`./gle_commands/${file}`);
        commands[cmd.name] = cmd;
        console.log(`✅ Command loaded: ${cmd.name}`);
    }

    require("./menu.js")(sock, commands);
}
startGLE();
