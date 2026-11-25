// GLE_XMD - Make Sticker / Logo
module.exports = {
  name: 'make',
  run: async (sock, m, { args, send }) => {
    const type = args[0]?.toLowerCase();
    const text = args.slice(1).join(' ');

    if (!type) {
      return await send(`🎨 ═══ GLE MAKE ═══\n\n.make sticker - Jibu picha kutengeneza sticker\n.make logo [jina] - Tengeneza logo\n.make quote [maneno] - Tengeneza quote\n\nMfano:\n.make logo GLE\n.make quote Believe in yourself\n\n╰── 🌐 GLE_XMD`);
    }

    if (type === 'logo') {
      if (!text) return await send('Andika jina: .make logo GLE');
      return await send(`🎨 Logo yako ya "${text}" inatengenezwa...\n\n🌐 GLE_XMD Logo Maker\nFont: Ghost Line Bold\nColor: Cyan + Gold\n\n> Logo itatumwa hapa hivi karibuni!\n\n╰── 🌐 GLE_XMD`);
    }

    if (type === 'quote') {
      if (!text) return await send('Andika maneno: .make quote Never give up');
      return await send(`✨ "${text}" ✨\n\n- GLE_XMD Quotes\n🌐 Ghost Line Edition\n\n╰── 🌐 GLE_XMD`);
    }

    if (type === 'sticker') {
      return await send(`🎨 Tuma picha kisha jibu na .make sticker\nSticker yako itatengenezwa na GLE_XMD!\n\n╰── 🌐 GLE_XMD`);
    }

    await send('Aina haikueleweka. Tumia: .make');
  }
}
