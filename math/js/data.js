/* ===== MATEMATIKA — Bank Soal & Data (Bab 2: Penjumlahan & Pengurangan sampai 10) =====
   Sumber: "LATIHAN SOAL 2" Matematika SD Stella Maris T.P. 2026/2027 (Semester 1)
   TP: peserta didik dapat menjelaskan arti penjumlahan, menentukan hasil penjumlahan
       dan pengurangan, serta menyelesaikan masalah sehari-hari dengan hasil sampai 10.
   Soal 1-10 diambil dari lembar latihan; sisanya soal sejenis sesuai materi
   (arti penjumlahan/pengurangan, pasangan bilangan, hubungan tambah-kurang,
   soal cerita, dan bilangan nol).

   Catatan: field "chk" TIDAK ditampilkan ke anak — dipakai skrip pemeriksa
   agar setiap jawaban benar-benar dihitung ulang (bukan dikira-kira).
   Jenis chk: sum:a+b | diff:a-b | miss:3+?=8 | eq:4+3 | val:10 | max | min | bad | eq3:a+b=c
*/

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickN(arr,n){return shuffle(arr).slice(0,n);}

/* ---------- 0) MATERI (layar belajar) ---------- */
const MATERI = [
  { t:"Apa Itu Penjumlahan?",
    isi:["Penjumlahan artinya menggabungkan dua bilangan menjadi satu bilangan.",
         "Penjumlahan ditulis dengan tanda + dan dibaca \"ditambah\".",
         "Hasil penjumlahan selalu menjadi lebih banyak."],
    contoh:["3 + 4 = 7", "🍎🍎🍎 + 🍎🍎🍎🍎 = 7 apel",
            "Dibaca: tiga ditambah empat sama dengan tujuh."] },
  { t:"Menjumlah Sampai 10",
    isi:["Untuk menjumlah, hitung maju mulai dari bilangan yang lebih besar.",
         "Hasil penjumlahan pada bab ini sampai 10.",
         "Bilangan ditambah 0 hasilnya tetap bilangan itu."],
    contoh:["6 + 3 → mulai dari 6, hitung maju: 7, 8, 9. Jadi 6 + 3 = 9.",
            "8 + 0 = 8", "5 + 5 = 10"] },
  { t:"Apa Itu Pengurangan?",
    isi:["Pengurangan artinya mengambil sebagian dari suatu bilangan.",
         "Pengurangan ditulis dengan tanda − dan dibaca \"dikurangi\".",
         "Hasil pengurangan selalu menjadi lebih sedikit."],
    contoh:["7 − 3 = 4", "🎈🎈🎈🎈🎈 − 🎈🎈 = 3 balon",
            "Dibaca: tujuh dikurangi tiga sama dengan empat."] },
  { t:"Hubungan Penjumlahan dan Pengurangan",
    isi:["Penjumlahan dan pengurangan saling berhubungan (keluarga fakta).",
         "Kalau 3 + 4 = 7, maka 7 − 3 = 4 dan 7 − 4 = 3.",
         "Jadi pengurangan adalah kebalikan dari penjumlahan."],
    contoh:["4 + 5 = 9 → 9 − 5 = 4 dan 9 − 4 = 5",
            "6 + 2 = 8 → 8 − 6 = 2 dan 8 − 2 = 6"] },
  { t:"Soal Cerita Sehari-hari",
    isi:["Soal cerita dikerjakan dengan penjumlahan atau pengurangan.",
         "Kata \"diberi lagi, membeli lagi, datang lagi\" berarti DITAMBAH (+).",
         "Kata \"mati, hilang, dipakai, dimakan, diberikan, terbang pergi\" berarti DIKURANGI (−)."],
    contoh:["Nara punya 4 permen, ibu memberi 2 lagi → 4 + 2 = 6 permen.",
            "Boni punya 9 ikan, 7 ikan mati → 9 − 7 = 2 ikan sisa.",
            "Tulis caranya dulu, lalu tulis jawabannya."] },
  { t:"Bilangan 1 sampai 10",
    isi:["Setiap bilangan punya nama dan urutan.",
         "Urutan dari kecil ke besar: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
         "0 dibaca nol, artinya tidak ada."],
    contoh:["1 satu • 2 dua • 3 tiga • 4 empat • 5 lima",
            "6 enam • 7 tujuh • 8 delapan • 9 sembilan • 10 sepuluh",
            "9 − 9 = 0, jadi tidak ada sisanya."] }
];

/* ---------- 1) PILIHAN GANDA (soal 1-10 dari lembar latihan + soal sejenis) ---------- */
const MCQ = [
  // --- Soal 1-10 lembar "LATIHAN SOAL 2" ---
  { q:"Penjumlahan berikut yang hasilnya terbesar adalah…",
    o:["5 + 3","6 + 1","7 + 3"], a:2, chk:"max", k:"maks-1" },
  { q:"Penjumlahan berikut yang hasilnya terkecil adalah…",
    o:["4 + 5","3 + 2","6 + 3"], a:1, chk:"min", k:"min-1" },
  { q:"Jika 3 + … = 8, nilai … yang tepat adalah…",
    o:["4","5","6"], a:1, chk:"miss:3+?=8", k:"miss-1" },
  { q:"Hasil dari 4 + 3 sama dengan hasil dari…",
    o:["2 + 4","3 + 5","5 + 2"], a:2, chk:"eq:4+3", k:"eq-1" },
  { q:"Hasil dari 3 + 2 sama dengan hasil dari…",
    o:["4 + 2","5 + 0","5 + 2"], a:1, chk:"eq:3+2", k:"eq-2" },
  { q:"Hasil dari 9 − 6 sama dengan hasil dari…",
    o:["5 − 2","8 − 3","6 − 4"], a:0, chk:"eq:9-6", k:"eq-3" },
  { q:"Hasil dari 7 − 3 sama dengan hasil dari…",
    o:["8 − 2","9 − 5","10 − 7"], a:1, chk:"eq:7-3", k:"eq-4" },
  { q:"Hubungan penjumlahan dan pengurangan yang tidak tepat adalah…",
    o:["2 + 4 = 6 maka 6 − 4 = 2","4 + 6 = 10 maka 10 − 4 = 5","5 + 3 = 8 maka 8 − 5 = 3"],
    a:1, chk:"bad", k:"bad-1" },
  { q:"Hubungan penjumlahan dan pengurangan yang tidak tepat adalah…",
    o:["7 + 3 = 10 maka 10 − 3 = 7","6 + 2 = 8 maka 8 − 6 = 2","4 + 3 = 7 maka 7 − 2 = 4"],
    a:2, chk:"bad", k:"bad-2" },
  { q:"Hubungan penjumlahan dan pengurangan yang tidak tepat adalah…",
    o:["3 + 6 = 9 maka 9 − 6 = 2","7 + 1 = 8 maka 8 − 1 = 7","6 + 3 = 9 maka 9 − 6 = 3"],
    a:0, chk:"bad", k:"bad-3" },

  // --- Soal sejenis: hasil terbesar / terkecil ---
  { q:"Penjumlahan berikut yang hasilnya terbesar adalah…",
    o:["4 + 4","3 + 6","2 + 5"], a:1, chk:"max", k:"maks-2" },
  { q:"Penjumlahan berikut yang hasilnya terkecil adalah…",
    o:["7 + 2","5 + 3","6 + 1"], a:2, chk:"min", k:"min-2" },
  { q:"Penjumlahan berikut yang hasilnya terbesar adalah…",
    o:["2 + 2","5 + 4","3 + 3"], a:1, chk:"max", k:"maks-3" },
  { q:"Penjumlahan berikut yang hasilnya terkecil adalah…",
    o:["6 + 4","1 + 5","3 + 4"], a:1, chk:"min", k:"min-3" },
  { q:"Penjumlahan berikut yang hasilnya 10 adalah…",
    o:["4 + 6","3 + 5","2 + 4"], a:0, chk:"val:10", k:"val-10a" },
  { q:"Pengurangan berikut yang hasilnya 5 adalah…",
    o:["9 − 4","8 − 4","7 − 5"], a:0, chk:"val:5", k:"val-5a" },

  // --- Soal sejenis: bilangan yang hilang ---
  { q:"Jika 4 + … = 9, nilai … yang tepat adalah…",
    o:["5","4","6"], a:0, chk:"miss:4+?=9", k:"miss-2" },
  { q:"Jika 2 + … = 7, nilai … yang tepat adalah…",
    o:["4","5","6"], a:1, chk:"miss:2+?=7", k:"miss-3" },
  { q:"Jika 5 + … = 8, nilai … yang tepat adalah…",
    o:["2","3","4"], a:1, chk:"miss:5+?=8", k:"miss-4" },
  { q:"Jika 8 − … = 5, nilai … yang tepat adalah…",
    o:["3","4","5"], a:0, chk:"miss:8-?=5", k:"miss-5" },
  { q:"Jika 10 − … = 6, nilai … yang tepat adalah…",
    o:["3","4","5"], a:1, chk:"miss:10-?=6", k:"miss-6" },

  // --- Soal sejenis: hasil yang sama ---
  { q:"Hasil dari 5 + 5 sama dengan hasil dari…",
    o:["6 + 3","4 + 6","5 + 4"], a:1, chk:"eq:5+5", k:"eq-5" },
  { q:"Hasil dari 6 + 2 sama dengan hasil dari…",
    o:["7 + 1","5 + 4","6 + 3"], a:0, chk:"eq:6+2", k:"eq-6" },
  { q:"Hasil dari 8 − 5 sama dengan hasil dari…",
    o:["6 − 4","4 − 1","7 − 5"], a:1, chk:"eq:8-5", k:"eq-7" },
  { q:"Hasil dari 10 − 6 sama dengan hasil dari…",
    o:["9 − 5","8 − 3","7 − 4"], a:0, chk:"eq:10-6", k:"eq-8" },

  // --- Soal bergambar: arti penjumlahan & pengurangan ---
  { q:"Perhatikan gambar! Berapa jumlah apel semuanya?",
    vis:{a:"🍎🍎🍎",op:"+",b:"🍎🍎"}, o:["4","5","6"], a:1, chk:"sum:3+2", k:"vis-1" },
  { q:"Perhatikan gambar! Berapa balon yang masih ada?",
    vis:{a:"🎈🎈🎈🎈🎈",op:"−",b:"🎈🎈"}, o:["3","4","2"], a:0, chk:"diff:5-2", k:"vis-2" },
  { q:"Perhatikan gambar! Berapa banyak bintang semuanya?",
    vis:{a:"⭐️⭐️⭐️⭐️",op:"+",b:"⭐️⭐️⭐️"}, o:["6","7","8"], a:1, chk:"sum:4+3", k:"vis-3" },
  { q:"Perhatikan gambar! Berapa permen yang tersisa?",
    vis:{a:"🍬🍬🍬🍬🍬🍬",op:"−",b:"🍬🍬🍬🍬"}, o:["2","3","4"], a:0, chk:"diff:6-4", k:"vis-4" },

  // --- Soal konsep: arti penjumlahan & pengurangan ---
  { q:"Penjumlahan artinya…",
    o:["menggabungkan dua bilangan","mengambil sebagian bilangan","membagi bilangan"],
    a:0, k:"arti-tambah" },
  { q:"Pengurangan artinya…",
    o:["mengambil sebagian bilangan","menggabungkan dua bilangan","mengurutkan bilangan"],
    a:0, k:"arti-kurang" },
  { q:"Hasil penjumlahan akan menjadi…",
    o:["lebih banyak","lebih sedikit","tetap sama"], a:0, k:"hasil-tambah" },
  { q:"Hasil pengurangan akan menjadi…",
    o:["lebih sedikit","lebih banyak","tetap sama"], a:0, k:"hasil-kurang" },
  { q:"8 + 0 = 8. Jadi bilangan yang ditambah 0 hasilnya…",
    o:["tetap bilangan itu","menjadi 0","bertambah 1"], a:0, k:"tambah-nol" },
  { q:"5 − 0 = 5. Jadi bilangan yang dikurangi 0 hasilnya…",
    o:["tetap bilangan itu","menjadi 0","berkurang 1"], a:0, k:"kurang-nol" },
  { q:"Jika 3 + 4 = 7, maka 7 − 4 = …",
    o:["3","4","7"], a:0, chk:"diff:7-4", k:"hub-1" }
];

/* ---------- 2) BENAR / SALAH ---------- */
const BENARSALAH = [
  { s:"5 + 3 = 8", b:true,  emoji:"➕", chk:"eq3:5+3=8", k:"bs-538" },
  { s:"4 + 4 = 9", b:false, emoji:"🧮", chk:"eq3:4+4=9", k:"bs-449" },
  { s:"7 − 3 = 4", b:true,  emoji:"➖", chk:"eq3:7-3=4", k:"bs-734" },
  { s:"9 − 5 = 3", b:false, emoji:"🧮", chk:"eq3:9-5=3", k:"bs-953" },
  { s:"6 + 3 = 9", b:true,  emoji:"➕", chk:"eq3:6+3=9", k:"bs-639" },
  { s:"2 + 7 = 8", b:false, emoji:"🧮", chk:"eq3:2+7=8", k:"bs-278" },
  { s:"10 − 4 = 6", b:true, emoji:"➖", chk:"eq3:10-4=6", k:"bs-1046" },
  { s:"8 − 2 = 5", b:false, emoji:"🧮", chk:"eq3:8-2=5", k:"bs-825" },
  { s:"5 + 5 = 10", b:true, emoji:"🔟", chk:"eq3:5+5=10", k:"bs-5510" },
  { s:"9 − 1 = 8", b:true, emoji:"➖", chk:"eq3:9-1=8", k:"bs-918" },
  { s:"7 + 0 = 7", b:true, emoji:"0️⃣", chk:"eq3:7+0=7", k:"tambah-nol" },
  { s:"4 + 5 = 10", b:false, emoji:"🧮", chk:"eq3:4+5=10", k:"bs-4510" },
  { s:"10 − 7 = 3", b:true, emoji:"➖", chk:"eq3:10-7=3", k:"bs-1073" },
  { s:"6 − 6 = 0", b:true, emoji:"0️⃣", chk:"eq3:6-6=0", k:"bs-660" },
  { s:"3 + 6 = 8", b:false, emoji:"🧮", chk:"eq3:3+6=8", k:"bs-368" },
  { s:"8 + 1 = 9", b:true, emoji:"➕", chk:"eq3:8+1=9", k:"bs-819" },
  { s:"10 − 10 = 0", b:true, emoji:"0️⃣", chk:"eq3:10-10=0", k:"bs-1010" },
  { s:"Penjumlahan artinya menggabungkan dua bilangan.", b:true,  emoji:"➕", k:"arti-tambah" },
  { s:"Hasil penjumlahan menjadi lebih sedikit.", b:false, emoji:"🤔", k:"hasil-tambah" },
  { s:"Pengurangan artinya mengambil sebagian bilangan.", b:true,  emoji:"➖", k:"arti-kurang" },
  { s:"Hasil pengurangan menjadi lebih banyak.", b:false, emoji:"🤔", k:"hasil-kurang" },
  { s:"Jika 3 + 4 = 7, maka 7 − 4 = 3.", b:true,  emoji:"🔁", k:"hub-1" },
  { s:"Jika 5 + 2 = 7, maka 7 − 2 = 4.", b:false, emoji:"🔁", k:"hub-2" },
  { s:"Soal cerita \"diberi lagi\" dikerjakan dengan penjumlahan.", b:true,  emoji:"🍬", k:"kata-tambah" },
  { s:"Soal cerita \"ikan mati\" dikerjakan dengan penjumlahan.", b:false, emoji:"🐟", k:"kata-kurang" },
  { s:"Hasil dari 7 − 3 sama dengan hasil dari 9 − 5.", b:true,  emoji:"⚖️", chk:"eq3b:7-3=9-5", k:"eq-4" }
];

/* ---------- 3) TEKA-TEKI "SIAPAKAH AKU?" ---------- */
const RIDDLE = [
  { d:"Aku hasil dari 3 + 4. Siapakah aku?", o:["7","6","8"], a:0, chk:"sum:3+4", k:"r-34" },
  { d:"Aku hasil dari 9 − 6. Siapakah aku?", o:["3","4","2"], a:0, chk:"diff:9-6", k:"r-96" },
  { d:"Aku hasil dari 6 + 3. Siapakah aku?", o:["9","8","10"], a:0, chk:"sum:6+3", k:"r-63" },
  { d:"Aku hasil dari 10 − 7. Siapakah aku?", o:["3","4","2"], a:0, chk:"diff:10-7", k:"r-107" },
  { d:"Aku bilangan yang jika ditambah 3 menjadi 8. Siapakah aku?", o:["5","4","6"], a:0, chk:"miss:?+3=8", k:"r-m38" },
  { d:"Aku bilangan yang jika ditambah 4 menjadi 10. Siapakah aku?", o:["6","5","7"], a:0, chk:"miss:?+4=10", k:"r-m410" },
  { d:"Aku bilangan yang jika ditambah 2 menjadi 9. Siapakah aku?", o:["7","6","8"], a:0, chk:"miss:?+2=9", k:"r-m29" },
  { d:"Aku hasil dari 5 + 5. Siapakah aku?", o:["10","9","8"], a:0, chk:"sum:5+5", k:"r-55" },
  { d:"Aku hasil dari 7 − 7. Siapakah aku?", o:["0","7","1"], a:0, chk:"diff:7-7", k:"r-77" },
  { d:"Aku bilangan yang jika dikurangi 2 menjadi 6. Siapakah aku?", o:["8","4","7"], a:0, chk:"miss:?-2=6", k:"r-m26" },
  { d:"Aku hasil dari 10 − 5. Siapakah aku?", o:["5","4","6"], a:0, chk:"diff:10-5", k:"r-105" },
  { d:"Aku hasil dari 4 + 4. Siapakah aku?", o:["8","7","9"], a:0, chk:"sum:4+4", k:"r-44" },
  { d:"Aku hasil dari 1 + 8. Siapakah aku?", o:["9","8","7"], a:0, chk:"sum:1+8", k:"r-18" },
  { d:"Aku hasil dari 8 − 0. Siapakah aku?", o:["8","0","7"], a:0, chk:"diff:8-0", k:"r-80" }
];

/* ---------- 4) COCOKKAN (tap / seret) ----------
   Nilai tiap soal cocokkan selalu 10 poin: per×pasang + bonus.
   4 pasang → per 2, bonus 2. */
const MATCH_SETS = [
  { key:"jumlah", label:"Cocokkan penjumlahan dengan hasilnya", lc:"Soal", rc:"Hasil", per:2, bonus:2,
    auto:[
      {l:"3 + 4",r:"7"},{l:"6 + 3",r:"9"},{l:"5 + 5",r:"10"},{l:"2 + 6",r:"8"},
      {l:"1 + 3",r:"4"},{l:"2 + 3",r:"5"},{l:"4 + 2",r:"6"},{l:"7 + 0",r:"7"}
    ] },
  { key:"kurang", label:"Cocokkan pengurangan dengan hasilnya", lc:"Soal", rc:"Hasil", per:2, bonus:2,
    auto:[
      {l:"9 − 6",r:"3"},{l:"10 − 4",r:"6"},{l:"8 − 3",r:"5"},{l:"9 − 2",r:"7"},
      {l:"10 − 1",r:"9"},{l:"8 − 6",r:"2"},{l:"10 − 2",r:"8"}
    ] },
  { key:"sepuluh", label:"Cocokkan pasangan bilangan yang jumlahnya 10", lc:"Bilangan", rc:"Pasangannya", per:2, bonus:2,
    auto:[
      {l:"1",r:"9"},{l:"2",r:"8"},{l:"3",r:"7"},{l:"4",r:"6"},
      {l:"6",r:"4"},{l:"7",r:"3"},{l:"8",r:"2"},{l:"9",r:"1"}
    ] }
];
const MATCH_PAIRS = 4;   // jumlah pasangan tiap soal cocokkan

/* ---------- 5) LENGKAPI ---------- */
const FILL = [
  { t:"3 + 4 = ____", o:["7","6","8"], a:0, chk:"sum:3+4", k:"f-34" },
  { t:"5 + 5 = ____", o:["10","9","8"], a:0, chk:"sum:5+5", k:"r-55" },
  { t:"9 − 6 = ____", o:["3","4","2"], a:0, chk:"diff:9-6", k:"r-96" },
  { t:"10 − 4 = ____", o:["6","5","7"], a:0, chk:"diff:10-4", k:"f-104" },
  { t:"6 + ____ = 9", o:["3","2","4"], a:0, chk:"miss:6+?=9", k:"f-6m9" },
  { t:"____ + 3 = 7", o:["4","3","5"], a:0, chk:"miss:?+3=7", k:"f-m37" },
  { t:"7 + ____ = 10", o:["3","2","4"], a:0, chk:"miss:7+?=10", k:"f-7m10" },
  { t:"2 + ____ = 9", o:["7","6","8"], a:0, chk:"miss:2+?=9", k:"f-2m9" },
  { t:"8 − ____ = 5", o:["3","2","4"], a:0, chk:"miss:8-?=5", k:"f-8m5" },
  { t:"____ − 2 = 6", o:["8","4","5"], a:0, chk:"miss:?-2=6", k:"r-m26" },
  { t:"8 + ____ = 8", o:["0","1","8"], a:0, chk:"miss:8+?=8", k:"tambah-nol" },
  { t:"6 − ____ = 6", o:["0","1","6"], a:0, chk:"miss:6-?=6", k:"kurang-nol" },
  { t:"Jika 4 + 5 = 9, maka 9 − 5 = ____", o:["4","5","9"], a:0, chk:"diff:9-5", k:"f-hub45" },
  { t:"Jika 3 + 6 = 9, maka 9 − 3 = ____", o:["6","3","9"], a:0, chk:"diff:9-3", k:"f-hub36" },
  { t:"Penjumlahan artinya ____ dua bilangan.", o:["menggabungkan","mengambil","membagi"], a:0, k:"arti-tambah" },
  { t:"Pengurangan artinya ____ sebagian bilangan.", o:["mengambil","menggabungkan","menambah"], a:0, k:"arti-kurang" },
  { t:"Hasil penjumlahan menjadi lebih ____.", o:["banyak","sedikit","sama"], a:0, k:"hasil-tambah" },
  { t:"Hasil pengurangan menjadi lebih ____.", o:["sedikit","banyak","sama"], a:0, k:"hasil-kurang" },
  { t:"Ibu memberi 3 permen lagi, jadi permen menjadi lebih ____.", o:["banyak","sedikit","sama"], a:0, k:"hasil-tambah" },
  { t:"Setelah 2 balon meletus, balon menjadi lebih ____.", o:["sedikit","banyak","sama"], a:0, k:"hasil-kurang" }
];

/* ---------- 6) SOAL CERITA (masalah sehari-hari, hasil sampai 10) ---------- */
const CERITA = [
  { t:"Nara memiliki 4 permen. Ibu memberi lagi 2 permen. Berapa jumlah permen Nara sekarang?",
    o:["5","6","7"], a:1, chk:"sum:4+2", k:"c-nara" },
  { t:"Boni memiliki 9 ikan hias. Hari ini 7 ikan hias mati. Berapa sisa ikan hias Boni sekarang?",
    o:["2","3","1"], a:0, chk:"diff:9-7", k:"c-boni" },
  { t:"Rafa memiliki 5 buku cerita, sebelumnya Rafa sudah mempunyai 2 buku cerita. Berapa buku cerita Rafa sekarang?",
    o:["6","7","8"], a:1, chk:"sum:5+2", k:"c-rafa" },
  { t:"Ibu membeli 6 telur. Ibu membeli lagi 3 telur. Berapa jumlah telur Ibu sekarang?",
    o:["8","9","10"], a:1, chk:"sum:6+3", k:"c-telur" },
  { t:"Ada 8 burung di atas pohon. 3 burung terbang pergi. Berapa burung yang masih ada?",
    o:["4","5","6"], a:1, chk:"diff:8-3", k:"c-burung" },
  { t:"Siti memiliki 5 kelereng. Adi memberi 4 kelereng. Berapa kelereng Siti sekarang?",
    o:["8","9","10"], a:1, chk:"sum:5+4", k:"c-siti" },
  { t:"Ada 10 permen di dalam toples. 4 permen dimakan. Berapa permen yang tersisa?",
    o:["5","6","7"], a:1, chk:"diff:10-4", k:"c-permen" },
  { t:"Tono memiliki 7 stiker. 5 stiker dipakai untuk menghias buku. Berapa stiker Tono yang tersisa?",
    o:["2","3","4"], a:0, chk:"diff:7-5", k:"c-tono" },
  { t:"Di keranjang ada 6 jeruk. Ayah menambah 2 jeruk. Berapa jeruk di keranjang sekarang?",
    o:["7","8","9"], a:1, chk:"sum:6+2", k:"c-jeruk" },
  { t:"Ana memiliki 9 bunga. 4 bunga dipetik untuk Ibu. Berapa bunga Ana yang tersisa?",
    o:["4","5","6"], a:1, chk:"diff:9-4", k:"c-ana" },
  { t:"Ada 3 kucing di halaman. Datang 5 kucing lagi. Berapa jumlah kucing sekarang?",
    o:["7","8","9"], a:1, chk:"sum:3+5", k:"c-kucing" },
  { t:"Beni memiliki 8 kue. 6 kue dimakan bersama teman. Berapa kue Beni yang tersisa?",
    o:["2","3","4"], a:0, chk:"diff:8-6", k:"c-beni" },
  { t:"Dewi memiliki 4 pensil. Ibu memberi 5 pensil lagi. Berapa pensil Dewi sekarang?",
    o:["8","9","10"], a:1, chk:"sum:4+5", k:"c-dewi" },
  { t:"Ada 7 buku di atas meja. 2 buku dipinjam teman. Berapa buku yang masih di meja?",
    o:["4","5","6"], a:1, chk:"diff:7-2", k:"c-buku" },
  { t:"Ali memiliki 3 mobil mainan. Kakak memberi 4 mobil mainan lagi. Berapa mobil mainan Ali sekarang?",
    o:["6","7","8"], a:1, chk:"sum:3+4", k:"c-ali" },
  { t:"Ada 6 kupu-kupu di taman. 5 kupu-kupu terbang pergi. Berapa kupu-kupu yang masih ada?",
    o:["1","2","3"], a:0, chk:"diff:6-5", k:"c-kupu" }
];

window.MATH_DATA = { MATERI, MCQ, BENARSALAH, RIDDLE, MATCH_SETS, MATCH_PAIRS, FILL, CERITA, shuffle, pickN };
