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

    // Pakia commands zote
    const commands = {};
    // 1. Pakia kutoka gle_commands
    for (let file of fs.readdirSync("./gle_commands")) {
        const cmd = require(`./gle_commands/${file}`);
        commands[cmd.name] = cmd;
    }
    // 2. Pakia menu.js (command ya .gle)
    const gleMenu = require("./menu.js");
    commands[gleMenu.name] = gleMenu;

    console.log("✅ Commands zimepakiwa:", Object.keys(commands).join(", "));

    // Sikiliza meseji
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        if (!m.message || m.key.fromMe) return;
        const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
        if (!text.startsWith(".")) return;

        const args = text.slice(1).trim().split(" ");
        const cmdName = args.shift().toLowerCase();

        if (commands[cmdName]) {
            const send = (txt) => sock.sendMessage(m.key.remoteJid, { text: txt }, { quoted: m });
            await commands[cmdName].run(sock, m, { send, config, args });
        }
    });
}
startGLE();
