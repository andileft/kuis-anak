/* ===== Kuis English — Bab 2 Numbers 1-10 & School Items ===== */
(function(){
"use strict";

/* ---------- data access ---------- */
const D = window.ENGLISH_DATA;
const $=(s)=>document.querySelector(s);
const $$=(s)=>Array.from(document.querySelectorAll(s));
let actx=null;

function show(id){
  $$(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ---------- AUDIO ---------- */
function ensureAudio(){
  if(!actx){try{actx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}}
  if(actx&&actx.state==="suspended")actx.resume();
  return actx;
}
function tone(f,t,dur,type,vol){
  if(!actx)return;
  const o=actx.createOscillator(),g=actx.createGain();
  o.type=type||"sine";o.frequency.value=f;
  g.gain.setValueAtTime(0.0001,actx.currentTime+t);
  g.gain.exponentialRampToValueAtTime(vol||0.2,actx.currentTime+t+0.015);
  g.gain.exponentialRampToValueAtTime(0.0001,actx.currentTime+t+dur);
  o.connect(g);g.connect(actx.destination);
  o.start(actx.currentTime+t);o.stop(actx.currentTime+t+dur+0.02);
}
const FX={
  click(){ensureAudio();tone(700,0,0.08,"triangle",0.12);},
  correct(){ensureAudio();[523,659,784,1047].forEach((f,i)=>tone(f,i*0.09,0.28,"sine",0.22));},
  wrong(){ensureAudio();tone(180,0,0.22,"square",0.16);tone(140,0.12,0.3,"square",0.14);},
  fanfare(){ensureAudio();[523,523,784,1047,1318,1568].forEach((f,i)=>tone(f,i*0.13,0.4,"triangle",0.24));}
};
function speak(text){
  if(!("speechSynthesis" in window))return;
  try{const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=0.8;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}
}
function stopSpeak(){if("speechSynthesis" in window)speechSynthesis.cancel();}

/* ---------- CONFETTI ---------- */
function confetti(n){
  const colors=["#f4a62a","#e5383b","#38b000","#3a9fe0","#9d4edd","#ff5e7a"];
  for(let i=0;i<n;i++){
    const el=document.createElement("div");el.className="confetti piece";
    el.style.left=Math.random()*100+"vw";
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.width=el.style.height=(7+Math.random()*8)+"px";
    const dur=1.4+Math.random()*1.6;
    el.style.animationDuration=dur+"s";el.style.animationDelay=(Math.random()*0.4)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),dur*1000+600);
  }
}

/* ======================================================= */
/* ====================== HOME & MATERI =================== */
/* ======================================================= */
let quizCount=10;
$("#countBtns").addEventListener("click",(e)=>{
  const b=e.target.closest("button");if(!b)return;
  quizCount=parseInt(b.dataset.n,10);
  $$("#countBtns button").forEach(x=>x.classList.toggle("sel",x===b));
  FX.click();
});
$("#btnStart").addEventListener("click",()=>{ensureAudio();FX.click();startQuiz();});

function openMateri(){
  stopSpeak();
  $("#materiBody").innerHTML=D.MATERI.map((m,i)=>`
    <div class="ayat-card">
      <h3>${m.t}</h3>
      <div class="verse">${m.isi.map(x=>`<div>${x}</div>`).join("")}</div>
      <div class="contoh-box">
        <div class="contoh-title">Contoh</div>
        ${m.contoh.map(x=>`<div class="contoh-line">${x}</div>`).join("")}
      </div>
      <button class="listen" data-i="${i}">🔊 Dengar</button>
    </div>`).join("");
  $$("#materiBody .listen").forEach(b=>b.addEventListener("click",()=>{
    const m=D.MATERI[+b.dataset.i];
    ensureAudio();speak(m.t+". "+m.isi.join(" ")+" Contoh. "+m.contoh.join(" "));
  }));
  show("screen-materi");
}
$("#btnMateri").addEventListener("click",()=>{ensureAudio();FX.click();openMateri();});
$("#materiBack").addEventListener("click",()=>{stopSpeak();FX.click();show("screen-home");});
$("#quizQuit").addEventListener("click",()=>{stopSpeak();FX.click();show("screen-home");});

/* ======================================================= */
/* =================== QUIZ ENGINE ======================== */
/* ======================================================= */
let quiz=null;
const ANSWER_DELAY=1300;

function startQuiz(){
  stopSpeak();
  quiz={qs:[],idx:0,score:0,correct:0,total:quizCount,streak:0,maxStreak:0};
  // bangun daftar soal acak dari berbagai tipe
  buildQuiz();
  $("#hudScore").textContent="0";
  $("#hudStreak").textContent="";
  renderQuestion();
  show("screen-quiz");
}

/* Bangun varian soal cocokkan: tiap varian = 4 pasangan berbeda.
   "auto" => 4 pasangan diacak dari daftar (suku kata/gambar harus berbeda);
   "sets" => pasangan tetap yang sudah disusun. */
function buildMatchVariants(){
  const variants=[];
  D.MATCH_SETS.forEach(set=>{
    if(set.sets){
      set.sets.forEach(pairs=>variants.push({set,pairs}));
      return;
    }
    const seen=new Set();
    for(let attempt=0; attempt<200 && seen.size<6; attempt++){
      const picked=[],usedR=new Set();
      const pool=D.shuffle(set.auto);
      for(const p of pool){
        if(picked.length>=D.MATCH_PAIRS)break;
        if(usedR.has(p.r))continue;
        usedR.add(p.r);picked.push(p);
      }
      if(picked.length<D.MATCH_PAIRS)continue;
      const key=picked.map(p=>p.l).sort().join("|");
      if(seen.has(key))continue;
      seen.add(key);
      variants.push({set,pairs:picked});
    }
  });
  return variants;
}

/* Kolam soal per tipe (unik) lalu bagi rata antar tipe supaya beragam.
   Setiap unit "pop" dari kolam sehingga TIDAK PERNAH berulang dalam 1 sesi. */
function buildQuiz(){
  const matchVariants=buildMatchVariants();
  const pools=[
    D.shuffle(D.MCQ.map(item=>({type:"mcq",item}))),
    D.shuffle(D.BENARSALAH.map(item=>({type:"bs",item}))),
    D.shuffle(D.RIDDLE.map(item=>({type:"riddle",item}))),
    D.shuffle(matchVariants.map(item=>({type:"match",item}))),
    D.shuffle(D.FILL.map(item=>({type:"fill",item})))
  ];
  const picked=[];
  while(picked.length<quiz.total){
    let dealt=false;
    for(const pool of pools){
      if(pool.length && picked.length<quiz.total){
        picked.push(pool.pop()); dealt=true;
      }
    }
    if(!dealt) break; // semua kolam habis
  }
  quiz.qs=D.shuffle(picked.map(u=>makeQuestion(u.type,u.item)));
}

function makeQuestion(type,picked){
  const d=D;
  if(type==="mcq"||type==="fill"){
    const order=D.shuffle(picked.o.map((txt,idx)=>({txt,correct:idx===picked.a})));
    return {type, prompt:picked.q||picked.t, img:picked.img||null, options:order, two:order.length===2};
  }
  if(type==="bs"){
    const order=D.shuffle([{txt:"Benar ✅",good:true},{txt:"Salah ❌",good:false}]);
    return {type:"bs",prompt:picked.s,emoji:picked.emoji||"📖",options:order,answer:picked.b};
  }
  if(type==="riddle"){
    const order=D.shuffle(picked.o.map((txt,idx)=>({txt,correct:idx===picked.a})));
    return {type:"riddle",prompt:"Who am I? 🤔",riddle:picked.d,options:order};
  }
  if(type==="match"){
    const pairs=picked.pairs;
    const left=D.shuffle(pairs.map((p,i)=>({i,l:p.l,r:p.r})));
    const right=D.shuffle(pairs.map((p,i)=>({i,l:p.l,r:p.r})));
    return {type:"match",set:picked.set,pairs,left,right};
  }
  return {type:"mcq",prompt:"?",options:[{txt:"?",correct:true}]};
}

function renderQuestion(){
  stopSpeak();
  const q=quiz.qs[quiz.idx];
  $("#qNum").textContent="Soal "+(quiz.idx+1)+" / "+quiz.total;
  $("#options").className="options";
  $("#feedback").innerHTML="";
  updateProgress();

  const TYPE_LABEL={
    mcq:"Pilihan Ganda",bs:"Benar atau Salah?",
    riddle:"Teka-teki",match:"Cocokkan (seret/tap)",fill:"Lengkapi"
  };
  $("#qType").textContent=TYPE_LABEL[q.type]||"";

  const prompt=$("#qPrompt");
  const main=$("#qMain");
  main.style.display=""; // reset (match menyembunyikannya)
  const opt=$("#options");
  opt.innerHTML="";
  let answered=false;

  function buildOptions(list,containerCls,btnCls){
    opt.className="options"+(containerCls?" "+containerCls:"");
    list.forEach((item,idx)=>{
      const b=document.createElement("button");
      b.className="opt"+(btnCls?" "+btnCls:"");
      b.innerHTML="<span>"+item.text()+"</span>";
      if(item.correct!==undefined)b.dataset.correct=item.correct?"1":"0";
      b.addEventListener("click",()=>{if(answered)return;FX.click();b.classList.add("picked");grade(item);});
      opt.appendChild(b);
    });
    return $$("#options .opt");
  }

  function grade(choice){
    if(answered)return;
    answered=true;
    const correct=!!choice.correct;
    const list=$$("#options .opt");
    list.forEach(b=>b.classList.add("disabled"));
    list.forEach(b=>{if(b.dataset.correct==="1")b.classList.add("correct");});
    const picked=$("#options .picked");
    if(!correct&&picked)picked.classList.add("wrong");

    if(correct){
      quiz.score+=10;quiz.correct++;quiz.streak++;
      if(quiz.streak>quiz.maxStreak)quiz.maxStreak=quiz.streak;
      $("#hudScore").textContent=quiz.score;
      $("#hudStreak").textContent=quiz.streak>=3?"🔥"+quiz.streak:"";
      FX.correct();confetti(24);
    }else{
      quiz.streak=0;$("#hudStreak").textContent="";
      FX.wrong();
    }
    const answerText=correctLabel(q);
    const fb=$("#feedback");
    if(correct){fb.innerHTML=sticker()+"<span class='fb-good'> Benar! 🎉</span>";}
    else{fb.innerHTML="<span class='fb-sticker'>💪</span><span class='fb-bad'> Jawabannya: "+answerText+"</span>";}
    setTimeout(nextQuestion,ANSWER_DELAY);
  }

  function correctLabel(q){
    if(q.type==="mcq"||q.type==="riddle"||q.type==="fill"){
      const c=q.options.find(o=>o.correct);return c?c.txt:"";
    }
    if(q.type==="bs")return q.answer?"Benar ✅":"Salah ❌";
    return "";
  }

  function sticker(){
    const s=["🌟","⭐","🌈","🎈","✨","🏆","🦋","💛"];
    return "<span class='fb-sticker'>"+s[Math.floor(Math.random()*s.length)]+"</span>";
  }

  /* ---------- render berdasar tipe ---------- */
  if(q.type==="mcq"){
    prompt.innerHTML=q.prompt;
    main.innerHTML=q.img
      ? `<img class="q-img" src="${q.img}" alt="gambar soal">`
      : "<div class='riddle-box' style='font-size:44px'>📖</div>";
    const list=q.options.map(o=>({text:()=>o.txt,correct:o.correct}));
    buildOptions(list,q.two?"two":"",q.two?"two-opt":"");
  }
  else if(q.type==="bs"){
    prompt.innerHTML=q.prompt+"<span class='src'>Benar atau Salah?</span>";
    main.innerHTML="<div class='riddle-box'><span style='font-size:52px'>"+q.emoji+"</span></div>";
    const list=q.options.map(o=>({text:()=>o.txt,correct:q.answer===o.good}));
    buildOptions(list,"two","two-opt");
  }
  else if(q.type==="riddle"){
    prompt.innerHTML=q.prompt;
    main.innerHTML=`<div class="riddle-box"><div class="riddle-question">${q.riddle}</div></div>`;
    const list=q.options.map(o=>({text:()=>o.txt,correct:o.correct}));
    buildOptions(list,q.two?"two":"",q.two?"two-opt":"");
  }
  else if(q.type==="fill"){
    prompt.innerHTML="<b>Lengkapi:</b>";
    main.innerHTML=(q.img?`<img class="q-img" src="${q.img}" alt="gambar soal">`:"")+
      `<div class="riddle-box"><div class="riddle-question">${q.prompt}</div></div>`;
    const list=q.options.map(o=>({text:()=>o.txt,correct:o.correct}));
    buildOptions(list,q.two?"two":"",q.two?"two-opt":"");
  }
  else if(q.type==="match"){
    prompt.innerHTML=q.set.label;
    main.style.display="none"; // match pakai area options penuh
    renderMatch(q);
    return;
  }

  function renderMatch(q){
    opt.className="options";
    opt.innerHTML=`<div class="match-info">Tap ${q.set.lc.toLowerCase()} di kiri, lalu tap pasangannya di kanan — atau seret langsung ke pasangannya.</div>`;
    const wrap=document.createElement("div");
    wrap.className="match-wrap";
    const colL=document.createElement("div");colL.className="match-col match-left";
    const colR=document.createElement("div");colR.className="match-col match-right";
    colL.innerHTML="<div class='col-label'>"+q.set.lc+"</div>";
    colR.innerHTML="<div class='col-label'>"+q.set.rc+"</div>";
    wrap.appendChild(colL);wrap.appendChild(colR);
    opt.appendChild(wrap);

    // bangun item kiri & kanan (pasangan ditandai oleh data-p = index pasangan)
    // nilai item: kalau berupa path gambar (assets/...) tampilkan sebagai <img>
    function setVal(el,val){
      if(/^assets\//.test(val)){el.innerHTML='<img src="'+val+'" alt="gambar">';el.classList.add("has-img");}
      else el.textContent=val;
    }
    q.left.forEach(o=>{
      const it=document.createElement("div");
      it.className="item";it.dataset.p=o.i;
      setVal(it,o.l);
      colL.appendChild(it);
    });
    q.right.forEach(o=>{
      const it=document.createElement("div");
      it.className="item";it.dataset.p=o.i;
      setVal(it,o.r);
      colR.appendChild(it);
    });

    let selected=null;
    let doneCount=0;
    const total=q.left.length;

    function flash(el){
      el.classList.add("err-anim");
      setTimeout(()=>el.classList.remove("err-anim"),350);
    }
    function selectLeft(el){
      if(el.classList.contains("done"))return;
      if(selected===el){selected.classList.remove("sel");selected=null;return;}
      if(selected)selected.classList.remove("sel");
      selected=el;el.classList.add("sel");
      FX.click();
    }
    function tryMatch(left,right){
      if(left.dataset.p===right.dataset.p){
        left.classList.remove("sel");left.classList.add("done");
        right.classList.add("done");
        selected=null;doneCount++;
        FX.correct();
        quiz.score+=2;$("#hudScore").textContent=quiz.score;
        if(doneCount===total){
          answered=true;
          quiz.correct++;
          // 4 pasang × 2 = 8 + bonus 2 = 10 poin per soal match (sama dgn soal lain)
          quiz.score+=2;$("#hudScore").textContent=quiz.score;
          quiz.streak++;if(quiz.streak>quiz.maxStreak)quiz.maxStreak=quiz.streak;
          $("#hudStreak").textContent=quiz.streak>=3?"🔥"+quiz.streak:"";
          confetti(30);
          $("#feedback").innerHTML=sticker()+"<span class='fb-good'> Semua cocok! Hebat 🎉</span>";
          setTimeout(nextQuestion,ANSWER_DELAY);
        }
      }else{
        FX.wrong();flash(right);
        left.classList.add("err-anim");
        setTimeout(()=>left.classList.remove("err-anim"),350);
        selectLeft(left); // biarkan tetap terpilih, ganti sasaran
      }
    }

    /* ---- pointer events: bedakan tap vs drag ---- */
    let downElement=null,downX=0,downY=0,moved=false,ghost=null,dragging=false;

    function onPointerDown(e){
      const it=e.target.closest(".item");
      if(!it)return;
      downElement=it;downX=e.clientX;downY=e.clientY;moved=false;dragging=false;
      if(ghost){document.body.removeChild(ghost);ghost=null;}
    }
    function positionGhost(e){
      const r=ghost.getBoundingClientRect();
      ghost.style.left=(e.clientX-r.width/2)+"px";
      ghost.style.top=(e.clientY-r.height/2)+"px";
    }
    function onPointerMove(e){
      if(!downElement)return;
      const dx=Math.abs(e.clientX-downX),dy=Math.abs(e.clientY-downY);
      if(dx>8||dy>8){ // mulai drag sungguhan
        if(!dragging && downElement.closest(".match-left .item") && !downElement.classList.contains("done")){
          dragging=true;
          ghost=downElement.cloneNode(true);ghost.className="item ghost";
          ghost.style.position="fixed";ghost.style.pointerEvents="none";ghost.style.zIndex="1000";
          ghost.style.width=downElement.offsetWidth+"px";
          document.body.appendChild(ghost);
          if(selected&&selected!==downElement)selected.classList.remove("sel");
          selected=downElement;downElement.classList.add("sel");
        }
        moved=true;
        if(dragging&&ghost)positionGhost(e);
      }
    }
    function onPointerUp(e){
      if(!downElement){return;}
      const it=downElement;downElement=null;
      if(ghost){document.body.removeChild(ghost);ghost=null;}

      if(dragging){
        // release di atas item kanan?
        const target=document.elementFromPoint(e.clientX,e.clientY);
        const rightEl=target?target.closest(".match-right .item"):null;
        if(rightEl){tryMatch(it,rightEl);}
        else if(it.classList.contains("done")===false){selected=it;it.classList.add("sel");}
        dragging=false;moved=false;
        return;
      }
      // tap: klik kiri → select, klik kanan → match
      if(it.closest(".match-left .item")){selectLeft(it);}
      else if(it.closest(".match-right .item")){
        if(!selected)flash(it);
        else tryMatch(selected,it);
      }
    }
    opt.addEventListener("pointerdown",onPointerDown);
    opt.addEventListener("pointermove",onPointerMove);
    opt.addEventListener("pointerup",onPointerUp);
    opt.addEventListener("pointercancel",onPointerUp);
    q._cleanup=()=>{
      opt.removeEventListener("pointerdown",onPointerDown);
      opt.removeEventListener("pointermove",onPointerMove);
      opt.removeEventListener("pointerup",onPointerUp);
      opt.removeEventListener("pointercancel",onPointerUp);
      if(ghost){document.body.removeChild(ghost);ghost=null;}
    };
  }
}

function nextQuestion(){
  if(quiz.qs[quiz.idx]._cleanup)quiz.qs[quiz.idx]._cleanup();
  quiz.idx++;
  if(quiz.idx>=quiz.total){showResult();return;}
  renderQuestion();
}
function updateProgress(){
  $("#hudBar").style.width=((quiz.idx)/quiz.total*100)+"%";
}

/* ======================================================= */
/* ====================== RESULT ========================= */
/* ======================================================= */
function showResult(){
  stopSpeak();
  const pct=Math.round(quiz.correct/quiz.total*100);
  let stars=0;
  if(pct>=90)stars=3;else if(pct>=60)stars=2;else if(pct>=30)stars=1;
  let msg="Ayo coba lagi! 💪";
  if(stars===3)msg="Hebat! Kamu Pintar! 🌟";
  else if(stars===2)msg="Bagus sekali! Terus berlatih! 💛";
  else if(stars===1)msg="Lumayan! Ayo berlatih lagi! 😊";

  $("#resultTitle").textContent=msg;
  $("#resultStars").textContent="⭐".repeat(stars)+"☆".repeat(3-stars);
  $("#resultScore").innerHTML=`<span class="big">${quiz.score}</span> poin`;
  $("#resultStats").textContent=`Benar ${quiz.correct} dari ${quiz.total} soal • Akurasi ${pct}%`+(quiz.maxStreak>=3?" • Streak 🔥"+quiz.maxStreak:"");
  show("screen-result");
  if(stars>=2)FX.fanfare();
  if(stars>=1)confetti(stars===3?90:50);
}
$("#btnAgain").addEventListener("click",()=>{FX.click();startQuiz();});
$("#btnHome").addEventListener("click",()=>{FX.click();show("screen-home");});

/* ---------- prevent zoom/pull refresh (gulir 1 jari tetap jalan) ---------- */
document.addEventListener("touchmove",e=>{
  // hanya cegah pinch-zoom (2 jari); sentuhan 1 jari dibiarkan menggulir
  if(e.touches&&e.touches.length>1)e.preventDefault();
},{passive:false});
document.addEventListener("gesturestart",e=>e.preventDefault());
document.addEventListener("gesturechange",e=>e.preventDefault());
document.addEventListener("gestureend",e=>e.preventDefault());
window.addEventListener("load",()=>{ensureAudio();});
})();
