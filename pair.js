// 🌐 GLE_XMD - Pair Site - Ghost Line Hacker Edition
// Inspired by Jexploit-Pair, but ORIGINAL GLE Build
const express = require('express');
const { default: makeWASocket, useMultiFileAuthState, Browsers } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GLE_XMD | Pair Code</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@800&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; font-family:'JetBrains Mono',monospace; }
body {
  background:#000;
  background-image:
    linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px);
  background-size:30px 30px;
  min-height:100vh; display:flex; align-items:center; justify-content:center; padding:18px; color:#fff;
}
.terminal {
  width:100%; max-width:460px;
  background:#050505; border:1.5px solid #00E5FF; border-radius:16px;
  box-shadow:0 0 40px rgba(0,229,255,0.25), 0 0 80px rgba(255,215,0,0.08);
  overflow:hidden;
}
/* Top bar kama terminal ya hacker */
.topbar {
  background:#0A0A0A; padding:12px 16px; display:flex; align-items:center; gap:8px;
  border-bottom:1px solid #222;
}
.dot { width:12px; height:12px; border-radius:50%; }
.dot.r { background:#FF5F56; } .dot.y { background:#FFBD2E; } .dot.g { background:#27C93F; }
.topbar span { margin-left:8px; font-size:12px; color:#888; }
.topbar b { color:#00E5FF; }
.body { padding:28px 24px; text-align:center; }
.badge {
  display:inline-block; padding:5px 12px; border:1px solid #FFD700; color:#FFD700;
  font-size:10px; letter-spacing:2px; border-radius:20px; margin-bottom:16px;
}
.logo { font-size:52px; line-height:1; filter:drop-shadow(0 0 15px rgba(0,229,255,0.7)); }
h1 { font-family:'Orbitron',sans-serif; font-size:32px; letter-spacing:3px; margin:10px 0 4px; }
h1 span { color:#00E5FF; }
.sub { color:#FFD700; font-size:11px; letter-spacing:3px; margin-bottom:6px; }
.tagline { color:#777; font-size:12px; margin-bottom:22px; }
.tagline b { color:#00E5FF; }
.terminal-line {
  text-align:left; background:#000; border:1px solid #1A1A1A; border-radius:10px;
  padding:12px; font-size:12px; color:#00E5FF; margin-bottom:18px; line-height:1.8;
}
.terminal-line .gold { color:#FFD700; }
.terminal-line .gray { color:#666; }
label { display:block; text-align:left; font-size:11px; color:#00E5FF; letter-spacing:1px; margin-bottom:8px; }
label span { color:#FFD700; }
.input-wrap {
  display:flex; background:#000; border:1.5px solid #222; border-radius:12px; overflow:hidden; margin-bottom:14px;
}
.input-wrap:focus-within { border-color:#00E5FF; box-shadow:0 0 15px rgba(0,229,255,0.2); }
.input-wrap .plus { padding:15px 12px; color:#FFD700; font-weight:700; background:#0A0A0A; }
.input-wrap input { flex:1; background:transparent; border:none; outline:none; color:#fff; font-size:16px; padding:15px 10px; letter-spacing:1px; }
.btn {
  width:100%; padding:16px; border:none; border-radius:12px; cursor:pointer;
  background:#00E5FF; color:#000; font-size:14px; font-weight:700; letter-spacing:2px;
  box-shadow:0 0 20px rgba(0,229,255,0.4);
}
.btn:hover { background:#FFD700; box-shadow:0 0 20px rgba(255,215,0,0.4); }
.btn:disabled { opacity:0.6; }
.status { display:none; margin-top:14px; font-size:12px; color:#00E5FF; }
.status.show { display:block; }
.error { display:none; margin-top:12px; font-size:12px; color:#FF4444; background:rgba(255,0,0,0.08); padding:10px; border-radius:8px; border:1px solid #331111; }
.error.show { display:block; }
.output {
  display:none; margin-top:18px; border:1.5px dashed #FFD700; border-radius:14px; padding:18px; background:#000;
}
.output.show { display:block; animation:pop .3s ease; }
@keyframes pop { from { transform:scale(.95); opacity:0; } to { transform:scale(1); opacity:1; } }
.output .lbl { font-size:10px; color:#888; letter-spacing:2px; }
.output .code { font-family:'Orbitron',sans-serif; font-size:36px; letter-spacing:8px; color:#FFD700; margin:10px 0; font-weight:800; text-shadow:0 0 20px rgba(255,215,0,0.5); }
.copy { background:transparent; border:1px solid #00E5FF; color:#00E5FF; padding:9px 20px; border-radius:10px; cursor:pointer; font-weight:700; font-size:12px; letter-spacing:1px; }
.copy:hover { background:#00E5FF; color:#000; }
.timer { font-size:11px; color:#888; margin-top:8px; }
.how {
  margin-top:20px; text-align:left; background:#000; border:1px solid #1A1A1A; border-radius:12px; padding:16px;
}
.how h3 { font-size:12px; color:#FFD700; margin-bottom:10px; letter-spacing:1px; }
.how p { font-size:12px; color:#aaa; line-height:1.9; }
.how b { color:#fff; }
.how .cyan { color:#00E5FF; }
.footer { margin-top:18px; font-size:10px; color:#555; letter-spacing:1px; }
.footer b { color:#00E5FF; }
.footer .gold { color:#FFD700; }
</style>
</head>
<body>
<div class="terminal">
  <div class="topbar">
    <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
    <span>gle@xmd: <b>~/pair</b></span>
  </div>
  <div class="body">
    <div class="badge">● SYSTEM ONLINE - GHOST LINE</div>
    <div class="logo">🌐</div>
    <h1>GLE<span>_XMD</span></h1>
    <div class="sub">GHOST LINE EDITION</div>
    <p class="tagline">> <b>pair</b> your whatsapp bot in seconds_</p>

    <div class="terminal-line">
      <span class="gold">$</span> gle-xmd --pair<br>
      <span class="gray">> Initializing Ghost Line...</span><br>
      <span class="gray">> Secure connection: </span><span class="gold">ESTABLISHED ✓</span><br>
      <span class="gray">> Ready. Enter your number below.</span>
    </div>

    <label>ENTER WHATSAPP NUMBER <span>[2547XXXXXXXX]</span></label>
    <div class="input-wrap">
      <div class="plus">+</div>
      <input id="num" type="tel" placeholder="2547XXXXXXXX" autocomplete="off" />
    </div>

    <button class="btn" id="getBtn" onclick="getCode()">[ EXECUTE ] GET PAIR CODE</button>
    <div class="status" id="loading">> Connecting to WhatsApp servers... Please wait_</div>
    <div class="error" id="error"></div>

    <div class="output" id="codeBox">
      <div class="lbl">> PAIR CODE GENERATED</div>
      <div class="code" id="codeValue">---- ----</div>
      <button class="copy" onclick="copyCode()">[ COPY CODE ]</button>
      <div class="timer" id="timer">Expires in 60s</div>
    </div>

    <div class="how">
      <h3>// HOW TO LINK</h3>
      <p>
        <span class="cyan">01.</span> Copy Pair Code above<br>
        <span class="cyan">02.</span> WhatsApp > <b>Settings</b><br>
        <span class="cyan">03.</span> <b>Linked Devices</b> > Link a Device<br>
        <span class="cyan">04.</span> <b>Link with phone number</b> > Paste Code
      </p>
    </div>

    <div class="footer">🌐 <b>GLE_XMD</b> | <span class="gold">GHOST LINE</span> © 2026 - Built Different</div>
  </div>
</div>

<script>
let countdown;
async function getCode(){
  let num = document.getElementById('num').value.trim().replace(/[^0-9]/g,'');
  let err = document.getElementById('error');
  let loading = document.getElementById('loading');
  let btn = document.getElementById('getBtn');
  err.classList.remove('show');
  if(!num || num.length < 10){
    err.innerText = '❌ [ERROR] Weka namba sahihi: 2547XXXXXXXX';
    err.classList.add('show'); return;
  }
  btn.disabled = true; btn.innerText = '[ RUNNING... ] PLEASE WAIT';
  loading.classList.add('show');
  document.getElementById('codeBox').classList.remove('show');
  try{
    let r = await fetch('/code?number='+num);
    let d = await r.json();
    loading.classList.remove('show'); btn.disabled=false; btn.innerText='[ EXECUTE ] GET PAIR CODE';
    if(d.code){
      document.getElementById('codeValue').innerText = d.code;
      document.getElementById('codeBox').classList.add('show');
      startTimer();
    } else {
      err.innerText = '❌ ' + (d.error || 'Failed, try again');
      err.classList.add('show');
    }
  }catch(e){
    loading.classList.remove('show'); btn.disabled=false; btn.innerText='[ EXECUTE ] GET PAIR CODE';
    err.innerText='❌ Server error, try again'; err.classList.add('show');
  }
}
function startTimer(){
  let s = 60;
  clearInterval(countdown);
  countdown = setInterval(()=>{
    s--;
    document.getElementById('timer').innerText = 'Expires in '+s+'s';
    if(s<=0){ clearInterval(countdown); document.getElementById('timer').innerText='Code expired - Get new code'; }
  },1000);
}
function copyCode(){
  let code = document.getElementById('codeValue').innerText;
  navigator.clipboard.writeText(code);
  alert('✅ Code Copied: ' + code);
}
document.getElementById('num').addEventListener('keypress', e=>{ if(e.key==='Enter') getCode(); });
</script>
</body>
</html>
  `);
});

app.get('/code', async (req, res) => {
  let num = req.query.number?.replace(/[^0-9]/g, '');
  if (!num || num.length < 10) return res.json({ error: 'Weka namba sahihi 2547...' });

  const sessionPath = './gle_pair_' + num;
  try {
    if (fs.existsSync(sessionPath)) fs.rmSync(sessionPath, { recursive: true, force: true });
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const sock = makeWASocket({
      auth: state,
      logger: pino({ level: 'silent' }),
      browser: Browsers.macOS('Chrome'),
      printQRInTerminal: false
    });
    sock.ev.on('creds.update', saveCreds);
    if (!sock.authState.creds.registered) {
      await new Promise(r => setTimeout(r, 1200));
      let code = await sock.requestPairingCode(num);
      setTimeout(() => { try { if(fs.existsSync(sessionPath)) fs.rmSync(sessionPath, {recursive:true, force:true}); } catch{} }, 30000);
      return res.json({ code });
    } else {
      return res.json({ error: 'Namba hii tayari ime-pair.' });
    }
  } catch (e) {
    console.log('GLE Pair Error:', e.message);
    return res.json({ error: 'Jaribu tena baada ya sekunde 10.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('🌐 GLE_XMD PAIR RUNNING ON ' + PORT));
