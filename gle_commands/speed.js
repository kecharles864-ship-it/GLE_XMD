// GLE_XMD - Speed Test
module.exports = {
  name: 'speed',
  run: async (sock, m, { from, send }) => {
    const start = Date.now();
    await sock.sendMessage(from, { text: '🌐 Testing Ghost Line Speed...' });
    const latency = Date.now() - start;
    await send(`🌐 ═══ GLE SPEED ═══\n\n⚡ Latency: ${latency}ms\n🚀 Status: ${latency < 200 ? 'ULTRA FAST 🔥' : latency < 500 ? 'FAST ✅' : 'STABLE ⚡'}\n📡 Line: Ghost Line Stable\n\n╰── 🌐 GLE_XMD | Built Different`);
  }
}
