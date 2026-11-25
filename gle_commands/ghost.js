// GLE_XMD - Ghost Mode - Unique kwa GLE pekee!
let ghostOn = false;

module.exports = {
  name: 'ghost',
  run: async (sock, m, { args, send }) => {
    const action = args[0]?.toLowerCase();

    if (action === 'on') {
      ghostOn = true;
      return await send(`👻 GHOST MODE: ON\n\n🌐 Sasa GLE_XMD iko Ghost Line...\n- Haisomi status kwa sauti\n- Inafanya kazi kimya\n- Haionekani online\n\nTumia .ghost off kuizima\n\n╰── 🌐 GLE_XMD`);
    }
    if (action === 'off') {
      ghostOn = false;
      return await send(`🌐 GHOST MODE: OFF\n\nSasa GLE_XMD iko kawaida.\n\n╰── 🌐 GLE_XMD`);
    }
    await send(`👻 ═══ GHOST MODE ═══\n\nStatus: ${ghostOn ? 'ON 👻' : 'OFF 🌐'}\n\nTumia:\n.ghost on - Washa Ghost\n.ghost off - Zima Ghost\n\nGhost Mode ni feature ya kipekee ya GLE_XMD pekee!\n\n╰── 🌐 GLE_XMD | Built Different`);
  }
}
