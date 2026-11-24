// GLE_XMD - GLE AI
module.exports = {
  name: 'gleai',
  run: async (sock, m, { args, send }) => {
    const q = args.join(' ');
    if (!q) return await send(`🧠 ═══ GLE AI ═══\n\nUliza kitu:\n.gleai Nini maana ya maisha?\n.gleai Niambie joke\n\n╰── 🌐 GLE_XMD`);

    // AI Rahisi ya GLE - inajibu kulingana na swali
    const lower = q.toLowerCase();
    let reply = '';

    if (lower.includes('joke') || lower.includes('chekesha')) {
      reply = '😂 Mbona simu haikupenda kuogelea? Kwa sababu inaogopa kuingia kwenye maji na kupata virus! 😂';
    } else if (lower.includes('nani') && lower.includes('gle')) {
      reply = '🌐 GLE ni mtengenezaji wa GLE_XMD - Ghost Line Edition. Bot bora kabisa, Built Different!';
    } else if (lower.includes('habari') || lower.includes('mambo')) {
      reply = 'Poa sana! 🫡 Mimi ni GLE AI, niko Ghost Line, niko fast. Wewe uko aje?';
    } else if (lower.includes('love') || lower.includes('penzi')) {
      reply = '❤️ Penzi ni kama WiFi... ukiwa mbali na router, signal inapotea. Kaa karibu na mtu unayempenda!';
    } else {
      reply = `🧠 GLE AI: Umeuliza "${q}"\n\nHili ni swali zuri sana! Ghost Line AI bado inajifunza, lakini nakujibu hivi:\nFikiria kama GLE - kuwa tofauti, kuwa fast, kuwa Ghost Line! 🌐\n\nUliza swali lingine kwa .gleai`;
    }
    await send(reply + '\n\n╰── 🌐 GLE_XMD | GLE AI');
  }
}
