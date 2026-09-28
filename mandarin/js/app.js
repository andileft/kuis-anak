/* ===== Kuis Mandarin — mesin generik (bab 1: Angka, bab 2: Salam) ===== */
(function () {
  "use strict";

  const LESSONS = window.KUIS.lessons;
  const byId = {};
  LESSONS.forEach(l => { byId[l.id] = l; });

  /* ---------- DOM helpers ---------- */
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  let actx = null;

  function show(id) {
    $$(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  /* ---------- HANZI STROKE DATA (offline) ---------- */
  function ord(c) { return c.codePointAt(0).toString(16); }
  HanziWriter.loadCharacterData = function (char) {
    return fetch("vendor/data/" + ord(char) + ".json").then(function (r) {
      if (!r.ok) throw new Error("no data for " + char);
      return r.json();
    });
  };

  /* ---------- AUDIO (WebAudio synth) ---------- */
  function ensureAudio() {
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (actx && actx.state === "suspended") actx.resume();
    return actx;
  }
  function tone(freq, t, dur, type, vol) {
    if (!actx) return;
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, actx.currentTime + t);
    g.gain.exponentialRampToValueAtTime(vol || 0.2, actx.currentTime + t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + t + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(actx.currentTime + t); o.stop(actx.currentTime + t + dur + 0.02);
  }
  const FX = {
    click() { ensureAudio(); tone(700, 0, 0.08, "triangle", 0.12); },
    correct() { ensureAudio(); [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.28, "sine", 0.22)); },
    wrong() { ensureAudio(); tone(180, 0, 0.22, "square", 0.16); tone(140, 0.12, 0.3, "square", 0.14); },
    fanfare() { ensureAudio(); [523, 523, 784, 1047, 1318, 1568].forEach((f, i) => tone(f, i * 0.13, 0.4, "triangle", 0.24)); }
  };

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN"; u.rate = 0.65; u.pitch = 1.15;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }
  function stopSpeak() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }

  /* ---------- CONFETTI ---------- */
  function confetti(n) {
    const colors = ["#ff5e7a", "#ffd166", "#06d6a0", "#4cc9f0", "#9d4edd", "#ff9f1c"];
    for (let i = 0; i < n; i++) {
      const el = document.createElement("div");
      el.className = "confetti piece";
      el.style.left = Math.random() * 100 + "vw";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = el.style.height = (7 + Math.random() * 8) + "px";
      const dur = 1.4 + Math.random() * 1.6;
      el.style.animationDuration = dur + "s";
      el.style.animationDelay = (Math.random() * 0.4) + "s";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000 + 600);
    }
  }

  /* ---------- HANZI WRITER ---------- */
  let writers = [];
  function makeWriter(targetEl, char, opts) {
    const o = Object.assign({
      width: 230, height: 230, padding: 12,
      showOutline: true, showCharacter: false, showHintAfterMisses: 3,
      strokeColor: "#3a86ff", highlightColor: "#ff5e7a",
      outlineColor: "#d5e3ff", hintColor: "#cde1ff",
      drawingColor: "#ff5e7a", drawingWidth: 12,
      delayBetweenStrokes: 240, delayBetweenLoops: 800,
      onLoadCharDataError() { targetEl.textContent = char; }
    }, opts || {});
    const w = HanziWriter.create(targetEl, char, o);
    writers.push(w);
    return w;
  }
  function destroyWriter() {
    writers.forEach(w => { if (w && w.destroy) { try { w.destroy(); } catch (e) {} } });
    writers = [];
  }
  // satu canvas per karakter; kata 2 karakter = 2 canvas, dianimasikan berurutan
  function canvasFor(char) {
    const d = document.createElement("div");
    d.className = "stroke-canvas";
    if (char) d.dataset.char = char;
    return d;
  }
  function animateSeq(ws, i, loop) {
    if (!ws.length) return;
    if (i >= ws.length) { if (loop) setTimeout(() => animateSeq(ws, 0, true), 800); return; }
    try {
      ws[i].animateCharacter({ onComplete() { animateSeq(ws, i + 1, loop); } });
    } catch (e) { animateSeq(ws, i + 1, loop); }
  }

  /* ======================================================= */
  /* ====================== STATE ========================== */
  /* ======================================================= */
  let lesson = byId["bab2"] || byId[LESSONS[0].id];   // default: bab 2 (Salam) — bab 1 tetap bisa dipilih
  let quizMode = "all";
  let quizCount = 10;
  let writeCount = 5;

  /* ======================================================= */
  /* ====================== HOME =========================== */
  /* ======================================================= */
  const modesFor = () => lesson.modes[quizMode] || lesson.modes.all;

  function renderChapters() {
    $("#chapterBtns").innerHTML = LESSONS.map(l =>
      `<button data-lesson="${l.id}"${l.id === lesson.id ? ' class="sel"' : ""}>${l.nama}</button>`
    ).join("");
    $$("#chapterBtns button").forEach(b => b.addEventListener("click", () => {
      lesson = byId[b.dataset.lesson];
      FX.click();
      renderChapters();
      renderHomeInfo();
    }));
  }
  function renderHomeInfo() {
    $("#homeSubtitle").innerHTML = lesson.judul + '<br><span class="zh">' + lesson.zh + "</span>";
    $("#writeCountWrap").classList.toggle("hidden", modesFor().indexOf("char2write") === -1);
  }
  $("#writeCountBtns").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    writeCount = parseInt(b.dataset.wn, 10);
    $$("#writeCountBtns button").forEach(x => x.classList.toggle("sel", x === b));
    FX.click();
  });

  $("#modeBtns").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    quizMode = b.dataset.mode;
    $$("#modeBtns button").forEach(x => x.classList.toggle("sel", x === b));
    renderHomeInfo();
    FX.click();
  });
  $("#countBtns").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    quizCount = parseInt(b.dataset.n, 10);
    $$("#countBtns button").forEach(x => x.classList.toggle("sel", x === b));
    FX.click();
  });
  $("#btnStart").addEventListener("click", () => { ensureAudio(); FX.click(); startQuiz(); });
  $("#btnLearn").addEventListener("click", () => { ensureAudio(); FX.click(); openLearn(); });

  /* ======================================================= */
  /* ====================== LEARN ========================== */
  /* ======================================================= */
  let learnIdx = 0;
  let learnTimer = null;
  let learnMode = "idle"; // 'anim' | 'write' | 'idle'

  const learnList = () => lesson.items;

  function setLearnBtn(mode) {
    learnMode = mode;
    const b = $("#learnStop");
    if (mode === "idle") { b.textContent = "▶️"; b.title = "Putar ulang animasi"; }
    else { b.textContent = "⏹️"; b.title = "Stop"; }
  }
  function clearLearnTimer() { if (learnTimer) { clearTimeout(learnTimer); learnTimer = null; } }

  function openLearn() {
    stopSpeak(); destroyWriter();
    $("#learnTitle").textContent = lesson.learnTitle;
    show("screen-learn");
    renderThumbs();
    renderLearnCard();
  }

  function renderThumbs() {
    const list = learnList();
    $("#thumbStrip").innerHTML = list.map((x, i) =>
      `<button class="thumb${x.char.length > 1 ? " wide" : ""}${i === learnIdx ? " sel" : ""}" data-i="${i}">${x.char}</button>`
    ).join("");
    $$("#thumbStrip .thumb").forEach(b =>
      b.addEventListener("click", () => { learnIdx = +b.dataset.i; FX.click(); renderThumbs(); renderLearnCard(); })
    );
  }

  function renderLearnCard() {
    clearLearnTimer(); destroyWriter();
    const list = learnList();
    const x = list[learnIdx];
    $("#learnChar").textContent = x.char;
    $("#learnChar").className = "learn-char" + (x.char.length > 1 ? " word" : "");
    // kalau LKPD tidak mencetak artinya, jangan dikarang: biarkan kosong
    $("#learnNum").textContent = x.noArti ? "" : x.arti;
    $("#learnNum").classList.toggle("hidden", !!x.noArti);
    $("#learnPinyin").textContent = x.pinyin;
    $("#learnHint").textContent = "▶️ Lihat urutan menulisnya";

    const box = $("#strokeCanvas");
    box.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "learn-canvases";
    box.appendChild(wrap);
    const chars = Array.from(x.char);
    const size = chars.length > 1 ? 126 : 176;   // canvas lebih kecil supaya tidak terpotong
    const els = chars.map((c) => { const el = canvasFor(c); wrap.appendChild(el); return el; });
    try {
      const ws = els.map((el, i) => makeWriter(el, chars[i], { showCharacter: true, width: size, height: size }));
      animateSeq(ws, 0, false);
      setLearnBtn("anim");
      learnTimer = setTimeout(() => {
        try { ws.forEach(w => w.loopCharacterAnimation()); } catch (e) {}
      }, 1500 + chars.length * 900);
    } catch (e) { box.textContent = x.char; }
  }

  function startWritePractice() {
    clearLearnTimer(); destroyWriter();
    const x = learnList()[learnIdx];
    const box = $("#strokeCanvas");
    box.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "learn-canvases";
    box.appendChild(wrap);
    const chars = Array.from(x.char);
    // bingkai 16px (border 3 + padding 5 tiap sisi) supaya total tetap seperti ukuran lama
    const size = chars.length > 1 ? 126 : 160;
    const els = chars.map((c) => {
      const el = canvasFor(c);
      el.classList.add("write-box");
      // ukuran kotak termasuk bingkai; area gambar tetap `size` seperti sebelumnya
      el.style.width = (size + 16) + "px";
      el.style.maxWidth = (size + 16) + "px";
      el.style.height = (size + 16) + "px";   // kotak tetap persegi walau karakternya belum giliran
      wrap.appendChild(el);
      return el;
    });
    setLearnBtn("write");
    let done = false;
    function quizChar(i) {
      if (i >= els.length) {
        if (done) return; done = true;
        confetti(26);
        $("#learnHint").textContent = "🎉 Hebat! Kamu menulis " + x.char + " (" + x.arti + ") dengan benar!";
        return;
      }
      try {
        const w = makeWriter(els[i], chars[i], { showCharacter: false, showOutline: false, width: size, height: size });
        w.quiz({
          onMistake() { FX.wrong(); },
          onComplete() { try { w.showCharacter(); } catch (e) {} FX.correct(); quizChar(i + 1); },
          showHintAfterMisses: 2
        });
      } catch (e) { els[i].textContent = chars[i]; quizChar(i + 1); }
    }
    quizChar(0);
    $("#learnHint").textContent = "✍️ Telusuri garis abu-abu sesuai urutan";
  }

  $("#learnPrev").addEventListener("click", () => { learnIdx = (learnIdx + learnList().length - 1) % learnList().length; FX.click(); renderThumbs(); renderLearnCard(); });
  $("#learnNext").addEventListener("click", () => { learnIdx = (learnIdx + 1) % learnList().length; FX.click(); renderThumbs(); renderLearnCard(); });
  $("#learnWrite").addEventListener("click", () => { ensureAudio(); FX.click(); startWritePractice(); });
  $("#learnStop").addEventListener("click", () => {
    FX.click();
    if (learnMode === "idle") { renderLearnCard(); return; }
    stopSpeak(); clearLearnTimer(); destroyWriter();
    const c = $("#strokeCanvas"); c.innerHTML = learnList()[learnIdx].char;
    $("#learnHint").textContent = "▶️ Tekan ▶️ untuk lihat lagi urutan menulisnya, atau ✍️ untuk menulis sendiri.";
    setLearnBtn("idle");
  });
  $("#learnListen").addEventListener("click", () => { ensureAudio(); speak(learnList()[learnIdx].char); });
  $("#learnBack").addEventListener("click", () => { stopSpeak(); clearLearnTimer(); destroyWriter(); FX.click(); show("screen-home"); });

  /* ======================================================= */
  /* ====================== QUIZ =========================== */
  /* ======================================================= */
  let quiz = null;
  const ANSWER_DELAY = 1100;
  // tipe soal yang jawabannya berupa ARTI kata (opsinya harus kata yang tercetak di bahan)
  const ANSWERS_ARTI = { char2arti: 1, stroke2arti: 1, gambar2arti: 1, audio2arti: 1 };

  // token gabungan "tipe|skema" supaya soal menjodohkan bisa punya beberapa variasi
  function parseType(tok) {
    const i = tok.indexOf("|");
    return i === -1 ? { type: tok, schemaId: null } : { type: tok.slice(0, i), schemaId: tok.slice(i + 1) };
  }
  function facetVal(item, facet) {
    if (facet === "char") return item.char;
    if (facet === "pinyin") return item.pinyin;
    if (facet === "arti") return item.arti;
    return "";
  }
  const FACET_LABEL = { char: "Tulisan", pinyin: "Cara baca", arti: "Arti", mix: "Campur" };
  function facetLabel(f) { return FACET_LABEL[f] || ""; }
  const ALL_FACETS = ["char", "pinyin", "arti"];
  // facet apa saja yang dipakai sebuah skema menjodohkan ("mix" = ketiganya)
  function schemaFacets(sch) {
    const out = {};
    [sch.l, sch.r].forEach(f => {
      if (f === "mix") ALL_FACETS.forEach(x => { out[x] = 1; });
      else if (f) out[f] = 1;
    });
    return Object.keys(out);
  }
  function sourceFor(tok) {
    const p = parseType(tok);
    const type = p.type;
    if (type === "char2write") return (lesson.writeItems || lesson.items).map(it => ({ type, item: it }));
    if (type === "dialog") return lesson.dialogs.map((d, i) => ({ type, dialog: d, dkey: "d" + i }));
    if (type === "match") {
      // tanpa skema tertentu -> semua skema masuk, biar variasinya muncul
      const list = lesson.matchSchemas || [];
      const one = p.schemaId ? list.filter(s => s.id === p.schemaId) : list;
      return one.map(s => ({ type: "match", schema: s, skey: s.id }));
    }
    // tipe yang menjawab "ARTI": soal memakai kosakata yang artinya tercetak di bahan
    if (ANSWERS_ARTI[type]) return lesson.items.filter(it => !it.noArti).map(it => ({ type, item: it }));
    return lesson.items.map(it => ({ type, item: it }));
  }
  // bahan untuk papan menjodohkan: buang kata yang facet-nya kosong (mis. 您 tidak punya arti di bahan)
  function matchPool(sch) {
    const need = sch ? schemaFacets(sch) : ["char"];
    return lesson.items.filter(it => need.every(f => (facetVal(it, f) || "").trim() !== ""));
  }
  // satu baris papan menjodohkan: tentukan facet kiri & kanan (untuk "mix" diacak, tapi tidak boleh sama)
  function matchRow(item, sch) {
    if (sch && sch.l === "mix") {
      const lf = ALL_FACETS[Math.floor(Math.random() * ALL_FACETS.length)];
      const rest = ALL_FACETS.filter(f => f !== lf);
      return { item, lf, rf: rest[Math.floor(Math.random() * rest.length)] };
    }
    return { item, lf: sch.l, rf: sch.r };
  }

  function startQuiz() {
    stopSpeak(); destroyWriter();
    const types = (lesson.modes[quizMode] || lesson.modes.all).filter(t => sourceFor(t).length);
    quiz = { qs: [], idx: 0, score: 0, correct: 0, total: quizCount, streak: 0, maxStreak: 0 };
    const master = {}, pools = {};
    types.forEach(t => { master[t] = shuffle(sourceFor(t).slice()); pools[t] = master[t].slice(); });
    const nonWrite = types.filter(t => t !== "char2write");
    const hasWrite = types.indexOf("char2write") !== -1 && master.char2write.length > 0;
    // kalau mode-nya HANYA menulis, jumlah karakter = panjang sesi; kalau campur, itu jatah soal menulis
    const writeOnly = hasWrite && !nonWrite.length;
    const sessionLen = writeOnly ? Math.min(writeCount, master.char2write.length) : quizCount;
    quiz.total = sessionLen;
    const nWrite = hasWrite ? Math.min(writeCount, sessionLen, writeOnly ? sessionLen : Math.floor(sessionLen / 2)) : 0;
    // jatah soal menjodohkan: maksimal 2 per sesi (kecuali mode-nya memang khusus matching)
    const matchToks = types.filter(t => parseType(t).type === "match");
    const onlyMatch = matchToks.length === types.length && types.length > 0;
    const nMatch = onlyMatch ? sessionLen : Math.min(2, matchToks.length ? 2 : 0);
    const slotWrite = [], slotMatch = [];
    if (nWrite && nonWrite.length) {
      const pos = shuffle(Array.from({ length: sessionLen }, (_, i) => i)).slice(0, nWrite);
      for (let i = 0; i < sessionLen; i++) slotWrite.push(pos.indexOf(i) !== -1);
    } else {
      for (let i = 0; i < sessionLen; i++) slotWrite.push(i < nWrite);
    }
    // jadwal match ditaruh di sisa slot (yang bukan slot menulis)
    const freeSlots = [];
    for (let i = 0; i < sessionLen; i++) if (!slotWrite[i]) freeSlots.push(i);
    const freeShuffled = shuffle(freeSlots.slice());
    for (let i = 0; i < sessionLen; i++) slotMatch.push(false);
    if (nMatch && matchToks.length) {
      const chosen = freeShuffled.slice(0, Math.min(nMatch, freeShuffled.length));
      chosen.forEach(i => { slotMatch[i] = true; });
    }

    let prevKey = null;
    for (let i = 0; i < sessionLen; i++) {
      const wantWrite = slotWrite[i] && hasWrite;
      const wantMatch = !wantWrite && slotMatch[i] && matchToks.length;
      let poolTypes = wantWrite ? ["char2write"] : (wantMatch ? matchToks.slice() : (nonWrite.length ? nonWrite.filter(t => parseType(t).type !== "match") : types));
      poolTypes = poolTypes.filter(t => master[t] && master[t].length);
      if (!poolTypes.length && matchToks.length) poolTypes = matchToks.slice();
      if (!poolTypes.length) poolTypes = types.filter(t => master[t] && master[t].length);
      if (!poolTypes.length) break;
      // pool tipe terpilih habis? isi ulang dari master
      poolTypes.forEach(t => { if (!pools[t].length) pools[t] = shuffle(master[t].slice()); });
      let t = pick(poolTypes.filter(x => pools[x] && pools[x].length));
      if (!t) break;
      let q = pools[t].pop();
      if (poolTypes.length > 1 && q.item && q.item.key === prevKey) {   // jangan sama dua kali berturut-turut
        pools[t].unshift(q);
        const others = poolTypes.filter(x => x !== t && pools[x] && pools[x].length);
        if (others.length) { t = pick(others); q = pools[t].pop(); }
      }
      if (!q) break;
      prevKey = q.item ? q.item.key : q.dkey;
      quiz.qs.push(q);
    }
    quiz.total = quiz.qs.length || sessionLen;
    $("#hudScore").textContent = "0";
    $("#hudStreak").textContent = "";
    renderQuestion();
    show("screen-quiz");
  }

  function distractorVals(correctVal, field, n) {
    // opsi arti hanya dari kosakata yang artinya tercetak di bahan (yang noArti dilewati);
    // untuk pilihan TULISAN, karakter tunggal dari halaman latihan menulis boleh ikut
    // supaya tidak muncul opsi aneh seperti "tua (bagian dari 老师)"
    let pool = lesson.items.filter(it => field !== "arti" || !it.noArti);
    if (field === "char") pool = pool.concat((lesson.writeItems || []).filter(it => it.char.length === 1));
    const uniq = Array.from(new Set(pool.map(it => it[field]).filter(v => v !== correctVal && v != null)));
    return shuffle(uniq).slice(0, n);
  }

  function speakButton(btn) {
    if (!btn) return;
    btn.innerHTML = "🔊 Ulangi suara";
    btn.onclick = () => {
      ensureAudio();
      const q = quiz.qs[quiz.idx];
      if (!q) return;
      if (q.type === "dialog") speak(q.dialog.bubble.replace(/[?？]/g, ""));
      else if (q.item) speak(q.item.char);
    };
  }

  function renderQuestion() {
    stopSpeak(); destroyWriter();
    const q = quiz.qs[quiz.idx];
    const it = q.item, dl = q.dialog;
    document.body.dataset.qtype = q.type;   // penanda tipe soal (untuk pengecekan)
    const main = $("#qMain"), prompt = $("#qPrompt"), fb = $("#feedback");
    const optEl = $("#options"), skipBtn = $("#btnSkip");
    let answered = false;

    main.style.display = "";   // reset (soal menjodohkan menyembunyikannya)

    $("#qNum").textContent = "Soal " + (quiz.idx + 1) + " / " + quiz.total;
    updateProgress();
    speakButton($("#btnRehear"));
    fb.innerHTML = "";
    optEl.innerHTML = "";
    optEl.className = "options";
    optEl.classList.remove("hidden");
    skipBtn.classList.add("hidden");
    skipBtn.onclick = null;

    let correctVal = null, optCls = "", optField = "char";

    // ---------- 1. tulisan → arti (angka: "angka berapa?") ----------
    if (q.type === "char2arti") {
      $("#qType").textContent = lesson.kind === "angka" ? "Angka berapa?" : "Artinya apa?";
      prompt.innerHTML = lesson.kind === "angka" ? "Tulisan ini angka berapa?" : "Tulisan ini artinya apa?";
      main.innerHTML = `<div class="big-char glow${it.char.length > 1 ? " word" : ""}">${it.char}</div>`;
      speak(it.char);
      correctVal = it.arti; optCls = "arti"; optField = "arti";
    }
    // ---------- 2. tulisan → pinyin ----------
    else if (q.type === "char2py") {
      $("#qType").textContent = "Cara baca?";
      prompt.innerHTML = lesson.kind === "angka" ? "Bagaimana bacaan angka ini?" : "Bagaimana bacaan tulisan ini?";
      main.innerHTML = `<div class="big-char glow${it.char.length > 1 ? " word" : ""}">${it.char}</div>`;
      speak(it.char);
      correctVal = it.pinyin; optCls = "pinyin"; optField = "pinyin";
    }
    // ---------- 3. arti (didengar) → pilih tulisan ----------
    else if (q.type === "arti2char") {
      $("#qType").textContent = "Pilih tulisan";
      prompt.innerHTML = `Dengarkan dan pilih tulisan <b>${it.arti}</b>`;
      main.innerHTML = `<div class="q-note">🔊 ${it.arti}</div>`;
      speak(it.char);
      correctVal = it.char; optCls = "char-opt"; optField = "char";
    }
    // ---------- 3b. pinyin → pilih tulisan ----------
    else if (q.type === "pinyin2char") {
      $("#qType").textContent = "Pilih tulisan";
      prompt.innerHTML = `Pinyin <b>${it.pinyin}</b> itu tulisan yang mana?`;
      main.innerHTML = `<div class="q-note">🔊 ${it.pinyin}</div>`;
      speak(it.char);
      correctVal = it.char; optCls = "char-opt"; optField = "char";
    }
    // ---------- 3c. arti → pilih pinyin ----------
    else if (q.type === "arti2pinyin") {
      $("#qType").textContent = "Cara baca?";
      prompt.innerHTML = `Kata <b>${it.arti}</b> dibaca bagaimana?`;
      main.innerHTML = `<div class="q-note">🔊 ${it.arti}</div>`;
      speak(it.char);
      correctVal = it.pinyin; optCls = "pinyin"; optField = "pinyin";
    }
    // ---------- 3d. dengar suara → pilih arti ----------
    else if (q.type === "audio2arti") {
      $("#qType").textContent = "Dengarkan";
      prompt.innerHTML = "Dengarkan baik-baik. Artinya apa?";
      main.innerHTML = `<div class="q-note">🔊 ...</div>`;
      speak(it.char);
      correctVal = it.arti; optCls = "arti"; optField = "arti";
    }
    // ---------- 4. animasi urutan goresan → pilih arti ----------
    else if (q.type === "stroke2arti") {
      $("#qType").textContent = "Urutan menulis";
      prompt.innerHTML = lesson.kind === "angka" ? "Perhatikan urutan goresan, angka berapa ini?" : "Perhatikan urutan goresan, tulisan apa ini?";
      main.innerHTML = `<div class="stroke-qs"></div>`;
      const holder = main.querySelector(".stroke-qs");
      const chars = Array.from(it.char);
      const els = chars.map(() => { const el = canvasFor(); holder.appendChild(el); return el; });
      try {
        const ws = els.map((el, i) => makeWriter(el, chars[i], { showCharacter: false, showOutline: false }));
        animateSeq(ws, 0, true);
      } catch (e) { main.innerHTML = `<div class="big-char">${it.char}</div>`; }
      speak(it.char);
      correctVal = it.arti; optCls = "arti"; optField = "arti";
    }
    // ---------- 5. lihat gambar → pilih tulisan ----------
    else if (q.type === "gambar2char") {
      $("#qType").textContent = lesson.kind === "angka" ? "Hitung gambar" : "Lihat gambar";
      if (lesson.kind === "angka") {
        prompt.innerHTML = "Hitung berapa banyak? Pilih tulisan Mandarin angkanya!";
        const n = Number(it.arti);
        main.innerHTML = `<div class="img-grid">${Array.from({ length: n }, () => `<span>${it.emoji}</span>`).join("")}</div>`;
      } else {
        prompt.innerHTML = `Gambar ini artinya <b>${it.arti}</b>. Pilih tulisannya!`;
        main.innerHTML = `<div class="scene-wrap"><div class="scene-emoji pop">${it.emoji}</div><div class="scene-arti">${it.arti}</div></div>`;
        speak(it.char);
      }
      correctVal = it.char; optCls = "char-opt"; optField = "char";
    }
    // ---------- 5b. lihat gambar → pilih arti ----------
    else if (q.type === "gambar2arti") {
      $("#qType").textContent = "Lihat gambar";
      prompt.innerHTML = "Gambar ini artinya apa?";
      main.innerHTML = `<div class="scene-wrap"><div class="scene-emoji pop">${it.emoji}</div></div>`;
      speak(it.char);
      correctVal = it.arti; optCls = "arti"; optField = "arti";
    }
    // ---------- 6. percakapan → pilih balasan ----------
    else if (q.type === "dialog") {
      $("#qType").textContent = "Percakapan";
      prompt.innerHTML = "Apa balasan yang tepat?";
      main.innerHTML = `<div class="dialog-wrap">
          <div class="dlg-scene">
            <div class="dlg-emoji">${dl.speaker}</div>
            <div class="dlg-bubble">${dl.bubble}</div>
            <div class="dlg-reply">?</div>
          </div>
          <div class="dlg-note">${dl.note}</div>
        </div>`;
      speak(dl.bubble.replace(/[?？]/g, ""));
      correctVal = dl.answer; optCls = "char-opt"; optField = "char";
    }
    // ---------- 7. latihan menulis ----------
    else if (q.type === "char2write") {
      const artiTxt = (it.arti || "").trim();
      $("#qType").textContent = "Tulis sendiri";
      prompt.innerHTML = artiTxt
        ? `Tulis <b>${it.char}</b> <span class="py-inline">(${it.pinyin})</span> — ${artiTxt}<br>dengan urutan coretan yang benar!`
        : `Tulis <b>${it.char}</b> <span class="py-inline">(${it.pinyin})</span><br>dengan urutan coretan yang benar!`;
      main.innerHTML = `<div class="trace-wrap"><div id="writeQCanvas" class="stroke-canvas write-box"></div><div class="trace-hint">✍️ Telusuri garis abu-abu sesuai urutan coretan</div></div>`;
      optEl.classList.add("hidden");
      const w = makeWriter($("#writeQCanvas"), it.char, { showCharacter: false, showOutline: false });
      skipBtn.classList.remove("hidden");
      skipBtn.onclick = () => {
        if (answered) return; answered = true;
        destroyWriter();
        main.innerHTML = `<div class="big-char">${it.char}</div>`;
        fb.innerHTML = "<span class='fb-sticker'>👀</span><span class='fb-bad'> Jawabannya " + it.char + (artiTxt ? " (" + artiTxt + ")" : "") + "</span>";
        speak(it.char);
        setTimeout(nextQuestion, ANSWER_DELAY + 300);
      };
      try {
        let done = false;
        w.quiz({
          onMistake() { FX.wrong(); },
          onComplete() {
            if (done) return; done = true;
            answered = true;
            scoreUp();
            fb.innerHTML = stickerGood() + "<span class='fb-good'> Coretanmu bagus! 🎉</span>";
            speak(it.char);
            setTimeout(nextQuestion, ANSWER_DELAY);
          }
        });
      } catch (e) { main.innerHTML = `<div class="big-char">${it.char}</div>`; }
      return; // tanpa pilihan ganda
    }

    // ---------- 8. menjodohkan (dua kolom: tap kiri lalu tap pasangannya) ----------
    else if (q.type === "match") {
      const sch = q.schema;
      $("#qType").textContent = "Menjodohkan";
      prompt.innerHTML = sch.label;
      main.style.display = "none";   // pakai seluruh area opsi
      optEl.className = "options match-opt";
      optEl.innerHTML = "<div class='match-info'>Tap satu kotak di kiri, lalu tap pasangannya di kanan.</div>";
      const wrap = document.createElement("div");
      wrap.className = "match-wrap";
      const colL = document.createElement("div");
      colL.className = "match-col match-left";
      const colR = document.createElement("div");
      colR.className = "match-col match-right";
      colL.innerHTML = "<div class='col-label'>" + facetLabel(sch.l) + "</div>";
      colR.innerHTML = "<div class='col-label'>" + facetLabel(sch.r) + "</div>";
      wrap.appendChild(colL); wrap.appendChild(colR); optEl.appendChild(wrap);

      const pool = matchPool(sch);
      const size = Math.min(lesson.matchSize || 4, pool.length);
      const rows = shuffle(pool.slice()).slice(0, size).map(it => matchRow(it, sch));
      shuffle(rows.slice()).forEach(row => {
        const el = document.createElement("div");
        el.className = "m-item"; el.dataset.key = row.item.key; el.dataset.facet = row.lf;
        el.textContent = facetVal(row.item, row.lf);
        colL.appendChild(el);
      });
      shuffle(rows.slice()).forEach(row => {
        const el = document.createElement("div");
        el.className = "m-item m-right"; el.dataset.key = row.item.key; el.dataset.facet = row.rf;
        el.textContent = facetVal(row.item, row.rf);
        colR.appendChild(el);
      });

      let selected = null, doneCount = 0, lastRow = null;
      const total = rows.length;
      Array.from(optEl.querySelectorAll(".m-item")).forEach(el => el.addEventListener("click", () => {
        if (answered || el.classList.contains("done")) return;
        const isLeft = !!el.closest(".match-left");
        if (!selected || selected === el) {           // pilih / batalkan pilihan
          FX.click();
          if (selected === el) { el.classList.remove("sel"); selected = null; return; }
          if (selected) selected.classList.remove("sel");
          selected = el; el.classList.add("sel");
          return;
        }
        const selIsLeft = !!selected.closest(".match-left");
        if (isLeft && !selIsLeft) {                    // sudah pilih kanan, sekarang pilih kiri
          const rightEl = selected;
          if (el.dataset.key === rightEl.dataset.key) {
            el.classList.add("done"); rightEl.classList.remove("sel"); rightEl.classList.add("done");
            selected = null; doneCount++; FX.correct();
            lastRow = rows.filter(r => r.item.key === el.dataset.key)[0] || null;
          } else {
            FX.wrong(); el.classList.add("err-anim"); rightEl.classList.add("err-anim");
            setTimeout(() => { el.classList.remove("err-anim"); rightEl.classList.remove("err-anim"); }, 400);
          }
        } else if (!isLeft && selIsLeft) {             // sudah pilih kiri, sekarang pilih kanan
          const leftEl = selected;
          if (el.dataset.key === leftEl.dataset.key) {
            leftEl.classList.remove("sel"); leftEl.classList.add("done"); el.classList.add("done");
            selected = null; doneCount++; FX.correct();
            lastRow = rows.filter(r => r.item.key === el.dataset.key)[0] || null;
          } else {
            FX.wrong(); el.classList.add("err-anim"); leftEl.classList.add("err-anim");
            setTimeout(() => { el.classList.remove("err-anim"); leftEl.classList.remove("err-anim"); }, 400);
          }
        } else {                                       // dua-duanya kolom sama -> pindah pilihan
          FX.click(); selected.classList.remove("sel"); selected = el; el.classList.add("sel");
          return;
        }
        if (doneCount === total) {
          answered = true;
          scoreUp();
          fb.innerHTML = stickerGood() + "<span class='fb-good'> Semua cocok! 🎉</span>";
          if (lastRow) speak(lastRow.item.char);
          setTimeout(nextQuestion, ANSWER_DELAY);
        }
      }));
      return;
    }

    /* ---------- pilihan ganda ---------- */
    let choices;
    if (q.type === "dialog") {
      choices = shuffle(dl.opts.slice());
    } else {
      choices = shuffle([correctVal].concat(distractorVals(correctVal, optField, 3)));
    }
    if (!choices.some(v => v === correctVal)) choices[0] = correctVal;   // jaga-jaga: opsi benar wajib ada
    optEl.className = "options" + (choices.length === 1 ? " single" : "");
    choices.forEach(val => {
      const b = document.createElement("button");
      b.className = "opt " + optCls;
      b.textContent = val;
      b.dataset.ans = val === correctVal ? "1" : "0";
      b.addEventListener("click", () => {
        if (answered) return;
        b.classList.add("picked");
        lockAndGrade(val === correctVal);
      });
      optEl.appendChild(b);
    });

    function lockAndGrade(correct) {
      answered = true;
      const list = $$("#options .opt");
      list.forEach(b => {
        b.classList.add("disabled");
        if (b.dataset.ans === "1") b.classList.add("correct");
        else if (b.classList.contains("picked")) b.classList.add("wrong");
      });
      if (correct) {
        scoreUp();
        fb.innerHTML = stickerGood() + "<span class='fb-good'> Benar! 🎉</span>";
      } else {
        quiz.streak = 0; $("#hudStreak").textContent = "";
        FX.wrong();
        fb.innerHTML = "<span class='fb-sticker'>💪</span><span class='fb-bad'> Coba lagi! Jawabannya " + correctLabel(q) + "</span>";
        speak(q.type === "dialog" ? dl.answer : it.char);
      }
      setTimeout(nextQuestion, ANSWER_DELAY);
    }
  }

  function scoreUp() {
    quiz.score += 10; quiz.correct++; quiz.streak++;
    if (quiz.streak > quiz.maxStreak) quiz.maxStreak = quiz.streak;
    $("#hudScore").textContent = quiz.score;
    $("#hudStreak").textContent = quiz.streak >= 3 ? "🔥" + quiz.streak : "";
    FX.correct(); confetti(24);
  }

  function stickerGood() {
    const s = ["🌟", "⭐", "🌈", "🎈", "✨", "🏆", "🎀", "🦄"];
    return "<span class='fb-sticker'>" + pick(s) + "</span>";
  }
  function correctLabel(q) {
    if (q.type === "dialog") return q.dialog.answer + " " + q.dialog.note;
    const it = q.item;
    if (q.type === "char2arti" || q.type === "stroke2arti" || q.type === "gambar2arti" || q.type === "audio2arti") return it.arti + " (" + it.char + ")";
    if (q.type === "char2py" || q.type === "arti2pinyin") return it.pinyin + (q.type === "arti2pinyin" ? " (" + it.char + ")" : "");
    return it.char + " (" + it.arti + ")";
  }
  function nextQuestion() {
    quiz.idx++;
    if (quiz.idx >= quiz.total) { showResult(); return; }
    renderQuestion();
  }
  function updateProgress() {
    $("#hudBar").style.width = ((quiz.idx) / quiz.total * 100) + "%";
  }
  $("#quizQuit").addEventListener("click", () => { stopSpeak(); destroyWriter(); FX.click(); show("screen-home"); });

  /* ======================================================= */
  /* ====================== RESULT ========================= */
  /* ======================================================= */
  function showResult() {
    stopSpeak(); destroyWriter();
    const pct = Math.round(quiz.correct / quiz.total * 100);
    let stars = 0;
    if (pct >= 100) stars = 3; else if (pct >= 70) stars = 2; else if (pct >= 40) stars = 1;
    let msg = "Ayo coba lagi! 💪";
    if (stars === 3) msg = "Sempurna! Kamu Hebat! 🏆";
    else if (stars === 2) msg = "Bagus sekali! 🌟";
    else if (stars === 1) msg = "Lumayan! Terus berlatih! 💪";

    $("#resultTitle").textContent = msg;
    $("#resultStars").textContent = "⭐".repeat(stars) + "☆".repeat(3 - stars);
    $("#resultScore").innerHTML = `<span class="big">${quiz.score}</span> poin`;
    $("#resultStats").textContent = `Benar ${quiz.correct} dari ${quiz.total} soal • Akurasi ${pct}%` +
      (quiz.maxStreak >= 3 ? " • Streak 🔥" + quiz.maxStreak : "");

    show("screen-result");
    if (stars >= 2) FX.fanfare();
    if (stars >= 1) confetti(stars === 3 ? 90 : 50);
  }
  $("#btnAgain").addEventListener("click", () => { FX.click(); startQuiz(); });
  $("#btnHome").addEventListener("click", () => { FX.click(); show("screen-home"); });

  /* ---------- init ---------- */
  renderChapters();
  renderHomeInfo();

  /* ---------- prevent pull-to-refresh / zoom on iOS ---------- */
  document.addEventListener("touchmove", e => {
    if (e.target.closest(".thumb-strip") || e.target.closest("#screen-home")) return;
    e.preventDefault();
  }, { passive: false });
  document.addEventListener("gesturestart", e => e.preventDefault());
  window.addEventListener("load", () => { ensureAudio(); });
})();
