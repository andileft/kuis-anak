/* ===== BAHASA INDONESIA — Bank Soal & Data =====
   Sumber: "Bahasa indo bab 2.pdf" (ESPS Bahasa Indonesia Kelas 1 SD, Bab 2 Mari Bermain)
           "TES FORMATIF B.INDO BAB 2 2026.pdf" (SD Stella Maris, T.P. 2026/2027)
   Materi: Menyimak Cerita • Tanda Tanya & Tanda Seru • Kata ha-, hi-, hu-, he-, ho-
           Kata Huruf C • Menjelaskan Gambar
*/

// function: helper buat acak
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickN(arr,n){return shuffle(arr).slice(0,n);}

/* ---------- 0) MATERI (layar belajar) ---------- */
const MATERI = [
  { t:"Menyimak Cerita",
    isi:["Menyimak berarti mendengarkan dengan saksama.",
         "Cara menyimak yang baik:",
         "1. Duduklah dengan tenang, tubuh menghadap orang yang bercerita.",
         "2. Dengarkan cerita dengan saksama, jangan bersuara.",
         "3. Catatlah hal penting: tokoh, tempat, waktu, dan suasana."],
    contoh:["Tokoh dalam cerita tidak hanya manusia. Hewan, tumbuhan, dan benda juga dapat menjadi tokoh.",
            "\"Siapa yang datang ke rumah Cici?\" — Tokoh yang datang ke rumah Cici adalah Citra."] },
  { t:"Tanda Tanya (?)",
    isi:["Tanda tanya dipakai untuk mengakhiri kalimat tanya.",
         "Kalimat tanya memuat kata tanya.",
         "Contoh kata tanya: apa, siapa, di mana, kapan, mengapa, bagaimana."],
    contoh:["Di mana kamu membeli mainan itu?",
            "Apa mainan yang kamu sukai?",
            "Mengapa harus pulang sekarang?"] },
  { t:"Tanda Seru (!)",
    isi:["Tanda seru dipakai untuk mengakhiri kalimat ajakan, perintah, dan larangan.",
         "Kalimat ajakan memuat kata ayo atau mari.",
         "Kalimat perintah memuat akhiran -kan atau -lah.",
         "Kalimat larangan memuat kata jangan."],
    contoh:["Ayo, bermain bersamaku! (ajakan)",
            "Tutuplah keran air setelah digunakan! (perintah)",
            "Jangan mencoret tembok! (larangan)"] },
  { t:"Kata Diawali ha-, hi-, hu-, he-, ho-",
    isi:["ha- : Hani, halaman, harimau, hadiah",
         "hi- : hijau, hitam, hiu, hilang",
         "hu- : hutan, huruf, hujan",
         "he- : Heri, hewan, helm, helikopter, hebat",
         "ho- : hore, hotel, hobi"],
    contoh:["Hujan turun dengan deras.",
            "Aku punya penggaris berwarna hijau.",
            "Heri memelihara hewan di rumahnya."] },
  { t:"Kata Diawali Huruf C",
    isi:["ca- : cabai, cacing",
         "ci- : Cici, Citra",
         "cu- : cuci",
         "ce- : cecak, cermin, cedera",
         "co- : cokelat, congkak"],
    contoh:["Beni terhindar dari cedera.",
            "Cici mengajak Hani main congkak.",
            "Hani dan Citra bermain plastisin warna cokelat."] },
  { t:"Menjelaskan Gambar",
    isi:["Amatilah gambar dengan saksama.",
         "Cermatilah hal-hal berikut pada gambar:",
         "1. Tokoh, 2. Tempat kejadian, 3. Waktu kejadian,",
         "4. Kejadian yang dialami tokoh, 5. Perasaan tokoh."],
    contoh:["Deni mendapatkan hadiah ulang tahun. Deni merasa senang.",
            "Kevin terjatuh saat bermain sepeda. Kakinya cedera."] }
];

/* ---------- 1) PILIHAN GANDA ---------- */
const MCQ = [
  // --- kata diawali ha-, hi-, hu-, he-, ho- ---
  { q:"Perhatikan gambar! \u201c____jan turun dengan deras.\u201d Suku kata yang tepat untuk melengkapi kalimat tersebut adalah ....",
    img:"assets/hujan.png", o:["hu-","ha-","hi-"], a:0 },
  { q:"\u201cAku punya penggaris berwarna ____jau.\u201d Suku kata yang tepat untuk melengkapi kalimat tersebut adalah ....",
    o:["hi-","ho-","hu-"], a:0 },
  { q:"Kata \u201charimau\u201d diawali suku kata ....", o:["ha-","hi-","hu-"], a:0 },
  { q:"Kata \u201chalaman\u201d diawali suku kata ....", o:["ha-","he-","ho-"], a:0 },
  { q:"Kata \u201chutan\u201d diawali suku kata ....", o:["hu-","hi-","he-"], a:0 },
  { q:"Kata \u201churuf\u201d diawali suku kata ....", o:["hu-","ha-","ho-"], a:0 },
  { q:"Kata \u201chelikopter\u201d diawali suku kata ....", o:["he-","ho-","ha-"], a:0 },
  { q:"Kata \u201chewan\u201d diawali suku kata ....", o:["he-","ha-","hi-"], a:0 },
  { q:"Kata \u201chotel\u201d diawali suku kata ....", o:["ho-","he-","hu-"], a:0 },
  { q:"\u201cHore! Aku dapat spidol baru!\u201d Kata \u201chore\u201d diawali suku kata ....", o:["ho-","ha-","he-"], a:0 },
  { q:"Hewan yang hidup di laut, giginya tajam, dan suka memangsa ikan adalah ....", o:["hiu","harimau","cacing"], a:0 },
  { q:"Hewan bertubuh besar, berkulit belang, dan hidup di hutan adalah ....", o:["harimau","cecak","helikopter"], a:0 },
  { q:"Kata-kata yang diawali huruf h adalah ....", o:["hijau, hitam, hutan","cabai, cermin, cuci","merah, meja, mobil"], a:0 },

  // --- tanda tanya dan tanda seru ---
  { q:"\u201cAyo kita jaga kebersihan kelas\u201d Tanda baca yang benar untuk akhir kalimat tersebut adalah ....",
    o:["tanda seru (!)","titik (.)","tanda tanya (?)"], a:0 },
  { q:"\u201cDi mana kita akan bermain kelereng\u201d Tanda baca yang benar untuk akhir kalimat tersebut adalah ....",
    o:["tanda tanya (?)","titik (.)","tanda seru (!)"], a:0 },
  { q:"\u201cPakailah helm saat naik sepeda\u201d Tanda baca yang benar untuk akhir kalimat tersebut adalah ....",
    o:["tanda seru (!)","titik (.)","tanda tanya (?)"], a:0 },
  { q:"\u201cHujan turun dengan deras\u201d Tanda baca yang benar untuk akhir kalimat tersebut adalah ....",
    o:["titik (.)","tanda seru (!)","tanda tanya (?)"], a:0 },
  { q:"Pada kalimat larangan, ada kata ....", o:["jangan","mari","ayo"], a:0 },
  { q:"Pada kalimat perintah, ada akhiran ....", o:["-lah","-pun","-an"], a:0 },
  { q:"\u201c..., bermain ular naga!\u201d Kata yang tepat untuk melengkapi kalimat tersebut adalah ....",
    o:["Ayo","Kapan","Siapa"], a:0 },
  { q:"\u201c... kita akan bermain?\u201d Kata yang tepat untuk melengkapi kalimat tersebut adalah ....",
    o:["Di mana","Mari","Jangan"], a:0 },
  { q:"Kalimat ajakan memuat kata ....", o:["ayo atau mari","jangan","kapan"], a:0 },
  { q:"Tanda tanya dipakai untuk mengakhiri kalimat ....", o:["tanya","perintah","berita"], a:0 },
  { q:"\u201cTutuplah keran air setelah digunakan!\u201d Kalimat tersebut adalah kalimat ....",
    o:["perintah","ajakan","tanya"], a:0 },
  { q:"\u201cMari menari bersamaku!\u201d Kalimat tersebut adalah kalimat ....",
    o:["ajakan","larangan","perintah"], a:0 },
  { q:"\u201cJangan mencoret tembok!\u201d Kalimat tersebut adalah kalimat ....",
    o:["larangan","ajakan","tanya"], a:0 },
  { q:"\u201cApakah benar kami boleh bermain saat hujan?\u201d Kalimat tersebut diakhiri tanda ....",
    o:["tanya (?)","seru (!)","titik (.)"], a:0 },

  // --- kata diawali huruf c ---
  { q:"Kata \u201ccecak\u201d diawali suku kata ....", o:["ce-","ca-","co-"], a:0 },
  { q:"Kata \u201ccabai\u201d diawali suku kata ....", o:["ca-","cu-","ce-"], a:0 },
  { q:"Kata \u201ccokelat\u201d diawali suku kata ....", o:["co-","ce-","ci-"], a:0 },
  { q:"Kata \u201ccermin\u201d diawali suku kata ....", o:["ce-","cu-","ca-"], a:0 },
  { q:"Kata \u201ccuci\u201d diawali suku kata ....", o:["cu-","co-","ce-"], a:0 },
  { q:"Nama hewan kecil yang suka merayap di dinding dan diawali huruf c adalah ....",
    o:["cecak","cacing","cabai"], a:0 },
  { q:"Kata-kata yang diawali huruf c adalah ....", o:["cermin, cokelat, congkak","hujan, hutan, huruf","merah, meja, mobil"], a:0 },
  { q:"Bian dapat terhindar dari cedera. Kata \u201ccedera\u201d diawali huruf ....", o:["c","h","s"], a:0 },

  // --- menyimak cerita & menjelaskan gambar ---
  { q:"Saat menyimak cerita, kamu tidak boleh ....", o:["berisik","tenang","mencatat"], a:0 },
  { q:"Agar dapat menyimak cerita dengan jelas, kita duduk dengan ....", o:["tenang","ramai","berdiri"], a:0 },
  { q:"Tokoh dalam cerita tidak hanya manusia. Hewan, tumbuhan, dan ... juga dapat menjadi tokoh.",
    o:["benda","angka","warna"], a:0 },
  { q:"Siapa yang datang ke rumah Cici?", o:["Citra","Hani","Heri"], a:0 },
  { q:"Mengapa Cici tidak boleh bermain di taman?", o:["Karena PR Cici belum selesai","Karena Cici sakit","Karena hari sudah malam"], a:0 },
  { q:"Cerita Cici dan Citra terjadi pada ....", o:["sore hari","pagi hari","malam hari"], a:0 },
  { q:"Hari ini cuaca cerah. Bian pergi ke rumah Heri. Mereka hobi menulis ....",
    o:["huruf hias","huruf latin","angka"], a:0 },
  { q:"Untuk menjelaskan gambar, kita menyebutkan tokoh, tempat kejadian, waktu kejadian, kejadian, dan ... tokoh.",
    o:["perasaan","nama","alamat"], a:0 },
  { q:"Saat bermain sepeda, Cici memakai ... untuk melindungi kepala.", o:["helm","sarung tangan","sepatu roda"], a:0 },
  { q:"Bian bermain sepatu roda memakai helm, sarung tangan, pengaman lutut, dan siku agar terhindar dari ....",
    o:["cedera","hadiah","hore"], a:0 },
  { q:"Cerita \u201cPulang Bermain\u201d: apa pesan Ibu kepada Citra dan adiknya?",
    o:["Pulang sebelum gelap","Bermain sampai malam","Jangan bermain di taman"], a:0 },
  { q:"Bagaimana sikap Adik saat Citra mengajaknya pulang?", o:["Adik belum mau pulang","Adik langsung pulang","Adik marah kepada Citra"], a:0 },
  { q:"Hani belum tahu cara main congkak. Cici ... cara main congkak.", o:["memberi tahu","mengejek","melupakan"], a:0 },
  { q:"Hani dan Citra bermain plastisin di ....", o:["teras rumah Citra","hutan","sekolah"], a:0 },
  { q:"Mereka membentuk plastisin menjadi ceri, apel, dan ....", o:["cabai","cermin","helm"], a:0 }
];

/* ---------- 2) BENAR / SALAH ---------- */
const BENARSALAH = [
  { s:"Saat menyimak cerita, kita duduk dengan tenang.", b:true,  emoji:"🧒" },
  { s:"Kita bersuara keras saat teman sedang bercerita.", b:false, emoji:"🗣️" },
  { s:"Kalimat tanya diakhiri dengan tanda tanya (?).", b:true,  emoji:"❓" },
  { s:"Kalimat \u201cJangan main lama-lama!\u201d adalah kalimat ajakan.", b:false, emoji:"❗" },
  { s:"Kalimat perintah memuat akhiran -lah atau -kan.", b:true,  emoji:"❗" },
  { s:"Kalimat larangan memuat kata jangan.", b:true,  emoji:"🚫" },
  { s:"Kalimat ajakan memuat kata ayo atau mari.", b:true,  emoji:"🙋" },
  { s:"Kata \u201chujan\u201d diawali suku kata hu-.", b:true,  emoji:"🌧️" },
  { s:"Kata \u201chijau\u201d diawali suku kata hi-.", b:true,  emoji:"💚" },
  { s:"Kata \u201chotel\u201d diawali suku kata he-.", b:false, emoji:"🏨" },
  { s:"Kata \u201charimau\u201d diawali suku kata ha-.", b:true,  emoji:"🐯" },
  { s:"Kata \u201chore\u201d diawali suku kata ho-.", b:true,  emoji:"🎉" },
  { s:"Kata \u201ccermin\u201d diawali huruf c.", b:true,  emoji:"🪞" },
  { s:"Kata \u201ccabai\u201d diawali suku kata ca-.", b:true,  emoji:"🌶️" },
  { s:"Kata \u201ccongkak\u201d diawali suku kata co-.", b:true,  emoji:"🪵" },
  { s:"Kata \u201ccecak\u201d adalah nama tumbuhan.", b:false, emoji:"🦎" },
  { s:"Menceritakan kembali cerita boleh menggunakan bahasa sendiri.", b:true, emoji:"📖" },
  { s:"Bermain sepeda tanpa helm lebih aman.", b:false, emoji:"🚲" },
  { s:"Saat menjelaskan gambar, kita menyebutkan tokoh dan tempat kejadian.", b:true, emoji:"🖼️" },
  { s:"Kalimat \u201cDi mana letak lapangan?\u201d adalah kalimat perintah.", b:false, emoji:"❓" },
  { s:"Bermain saat hujan harus hati-hati.", b:true,  emoji:"🌧️" },
  { s:"PR harus selesai dulu sebelum bermain.", b:true,  emoji:"📚" },
  { s:"Kalimat \u201cAyo, bermain bersama!\u201d diakhiri tanda seru (!).", b:true, emoji:"❗" }
];

/* ---------- 3) TEKA-TEKI \u201cSIAPAKAH AKU?\u201d ---------- */
const RIDDLE = [
  { d:"Aku dipakai di akhir kalimat tanya. Kalimat tanya memuat kata apa, siapa, di mana, mengapa, dan bagaimana. Siapakah aku?",
    o:["tanda tanya (?) ❓","tanda seru (!) ❗","titik (.) ⚫"], a:0 },
  { d:"Aku dipakai di akhir kalimat ajakan, perintah, dan larangan. Siapakah aku?",
    o:["tanda seru (!) ❗","tanda tanya (?) ❓","titik (.) ⚫"], a:0 },
  { d:"Aku dipakai di akhir kalimat berita atau kalimat biasa. Siapakah aku?",
    o:["titik (.) ⚫","tanda seru (!) ❗","tanda tanya (?) ❓"], a:0 },
  { d:"Aku suku kata awal kata hujan, huruf, dan hutan. Siapakah aku?",
    o:["hu- 🌧️","ha- 🐯","hi- 🦈"], a:0 },
  { d:"Aku suku kata awal kata harimau, halaman, dan hadiah. Siapakah aku?",
    o:["ha- 🐯","he- 🚁","ho- 🏨"], a:0 },
  { d:"Aku suku kata awal kata hiu, hijau, dan hitam. Siapakah aku?",
    o:["hi- 🦈","hu- 🌧️","ha- 🐯"], a:0 },
  { d:"Aku suku kata awal kata hewan, helm, dan helikopter. Siapakah aku?",
    o:["he- 🚁","ho- 🏨","ha- 🐯"], a:0 },
  { d:"Aku suku kata awal kata hore, hotel, dan hobi. Siapakah aku?",
    o:["ho- 🏨","he- 🚁","hi- 🦈"], a:0 },
  { d:"Aku kata yang selalu ada di dalam kalimat larangan. Siapakah aku?",
    o:["jangan 🚫","mari 🙋","ayo 🙌"], a:0 },
  { d:"Aku kata yang ada di dalam kalimat ajakan. Siapakah aku?",
    o:["ayo 🙌","jangan 🚫","di mana ❓"], a:0 },
  { d:"Aku nama hewan kecil yang suka merayap di dinding. Namaku diawali huruf c. Siapakah aku?",
    o:["cecak 🦎","cabai 🌶️","cacing 🪱"], a:0 },
  { d:"Aku buah kecil berwarna merah dan rasanya pedas. Namaku diawali suku kata ca-. Siapakah aku?",
    o:["cabai 🌶️","cermin 🪞","cokelat 🍫"], a:0 },
  { d:"Aku mainan tradisional yang dimainkan di atas papan kayu berlubang. Namaku diawali suku kata co-. Siapakah aku?",
    o:["congkak 🪵","cermin 🪞","cuci 🧼"], a:0 },
  { d:"Aku benda dari kaca yang dipakai untuk melihat wajahmu. Namaku diawali suku kata cer-. Siapakah aku?",
    o:["cermin 🪞","congkak 🪵","cokelat 🍫"], a:0 },
  { d:"Aku hewan laut, giginya tajam, dan namaku diawali suku kata hi-. Siapakah aku?",
    o:["hiu 🦈","harimau 🐯","helikopter 🚁"], a:0 },
  { d:"Aku suku kata awal kata cabai, cacing, dan cangkir. Siapakah aku?",
    o:["ca- 🌶️","ce- 🦎","co- 🍫"], a:0 }
];

/* ---------- 4) COCOKKAN (drag / tap) ----------
   Tiap set = 1 soal. "auto" => diambil 4 pasangan berbeda dari daftar;
   "sets" => pasangan tetap. Semua soal memakai 4 pasangan (skor 10). */
const MATCH_SETS = [
  { key:"suku", label:"Cocokkan kata dengan suku kata awalnya", lc:"Kata", rc:"Suku kata",
    auto:[
      {l:"harimau",r:"ha-"},{l:"halaman",r:"ha-"},{l:"hadiah",r:"ha-"},{l:"Hani",r:"ha-"},
      {l:"hiu",r:"hi-"},{l:"hijau",r:"hi-"},{l:"hitam",r:"hi-"},{l:"hilang",r:"hi-"},
      {l:"hujan",r:"hu-"},{l:"huruf",r:"hu-"},{l:"hutan",r:"hu-"},
      {l:"hewan",r:"he-"},{l:"helm",r:"he-"},{l:"helikopter",r:"he-"},{l:"hebat",r:"he-"},
      {l:"hore",r:"ho-"},{l:"hotel",r:"ho-"},{l:"hobi",r:"ho-"},
      {l:"cabai",r:"ca-"},{l:"cacing",r:"ca-"},{l:"cangkir",r:"ca-"},
      {l:"Cici",r:"ci-"},{l:"Citra",r:"ci-"},
      {l:"cuci",r:"cu-"},
      {l:"cecak",r:"ce-"},{l:"cermin",r:"ce-"},{l:"cedera",r:"ce-"},
      {l:"cokelat",r:"co-"},{l:"congkak",r:"co-"}
    ] },
  { key:"gambar", label:"Cocokkan kata dengan gambarnya", lc:"Kata", rc:"Gambar",
    auto:[
      {l:"harimau",r:"🐯"},{l:"hiu",r:"🦈"},{l:"hujan",r:"🌧️"},{l:"helikopter",r:"🚁"},
      {l:"hotel",r:"🏨"},{l:"cecak",r:"🦎"},{l:"cabai",r:"🌶️"},{l:"cermin",r:"🪞"},
      {l:"cokelat",r:"🍫"},{l:"cacing",r:"🪱"},{l:"helm",r:"⛑️"},{l:"cangkir",r:"☕"}
    ] },
  { key:"jenis", label:"Cocokkan kalimat dengan jenis kalimatnya", lc:"Kalimat", rc:"Jenis kalimat",
    sets:[
      [ {l:"Ayo, bermain ular naga!",r:"Kalimat ajakan"},
        {l:"Jangan main lama-lama!",r:"Kalimat larangan"},
        {l:"Di mana kita akan bermain?",r:"Kalimat tanya"},
        {l:"Tutuplah keran air setelah digunakan!",r:"Kalimat perintah"} ],
      [ {l:"Mari menari bersamaku!",r:"Kalimat ajakan"},
        {l:"Jangan bermain saat hujan!",r:"Kalimat larangan"},
        {l:"Siapa mau bermain bersamaku?",r:"Kalimat tanya"},
        {l:"Cucilah tangan dan kakimu setelah bermain!",r:"Kalimat perintah"} ],
      [ {l:"Ayo, kita menggambar hewan!",r:"Kalimat ajakan"},
        {l:"Jangan lupa memakai helm!",r:"Kalimat larangan"},
        {l:"Bagaimana cara bermain sepak bola?",r:"Kalimat tanya"},
        {l:"Simpanlah mainan di tempat semula!",r:"Kalimat perintah"} ]
    ] }
];
const MATCH_PAIRS = 4;   // jumlah pasangan tiap soal cocokkan

/* ---------- 5) LENGKAPI ---------- */
const FILL = [
  { img:"assets/hadiah.png", t:"Deni mendapatkan ____ ulang tahun.", o:["hadiah","helm","hujan"], a:0 },
  { img:"assets/harimau.png", t:"Ada hewan ____ di hutan.", o:["harimau","hiu","cacing"], a:0 },
  { img:"assets/cedera.png", t:"Kevin dan Heri bermain ____.", o:["sepeda","congkak","plastisin"], a:0 },
  { img:"assets/cedera.png", t:"Kevin terjatuh dan kakinya ____.", o:["cedera","ceria","cermin"], a:0 },
  { t:"Bian merasa ____ karena mendapat hadiah ulang tahun.", o:["senang","sedih","marah"], a:0 },
  { t:"Bian bermain sepatu roda. Bian memakai ____ untuk melindungi kepalanya.", o:["helm","cermin","cokelat"], a:0 },
  { t:"Bian memakai pengaman lutut dan siku agar terhindar dari ____.", o:["cedera","hadiah","hore"], a:0 },
  { t:"Hani dan Citra bermain ____ di teras rumah Citra.", o:["plastisin","sepeda","congkak"], a:0 },
  { t:"Mereka membentuk plastisin menjadi ceri, apel, dan ____.", o:["cabai","cermin","helm"], a:0 },
  { t:"Citra ingat pesan Ibu, \u201cPulanglah sebelum ____!\u201d", o:["gelap","cerah","hujan"], a:0 },
  { t:"Adik bertanya, \u201c____ harus pulang sekarang?\u201d", o:["Mengapa","Siapa","Apa"], a:0 },
  { t:"Hari ini cuaca cerah. Bian pergi ke rumah ____.", o:["Heri","Hani","Citra"], a:0 },
  { t:"Bian membawa kertas dan ____ untuk menulis huruf hias.", o:["spidol","cermin","cabai"], a:0 },
  { t:"\u201cIni spidol ____ dan hijau untukmu.\u201d", o:["hitam","hijau","merah"], a:0 },
  { t:"Bian dan Heri hobi menulis huruf ____.", o:["hias","hujan","hutan"], a:0 },
  { t:"Hujan turun dengan ____.", o:["deras","cerah","pelan"], a:0 },
  { t:"Aku punya penggaris berwarna ____.", o:["hijau","hitam","cokelat"], a:0 },
  { t:"Saat bermain sepeda, kita harus ____ agar tidak cedera.", o:["hati-hati","cepat-cepat","sendirian"], a:0 },
  { t:"Kata \u201ccucilah\u201d diawali suku kata ____.", o:["cu-","ce-","co-"], a:0 },
  { t:"Kata \u201ccokelat\u201d diawali suku kata ____.", o:["co-","ca-","ci-"], a:0 },
  { t:"Kata \u201ccecak\u201d diawali suku kata ____.", o:["ce-","cu-","ca-"], a:0 },
  { t:"Kata \u201chelikopter\u201d diawali suku kata ____.", o:["he-","ho-","hu-"], a:0 }
];

window.BINDO_DATA = { MATERI, MCQ, BENARSALAH, RIDDLE, MATCH_SETS, MATCH_PAIRS, FILL, shuffle, pickN };

/* ============================================================= *
 * ========== BAB 3 · Suku Kata ka/ke/ki/ku, la/li/le/lo ======= *
 * Sumber: "9. TES FORMATIF_B.INDO BAB 3_2026.pdf" (Quintal 23 Okt
 * 2026, bahan sumatif Selasa 27 Okt 2026) + agenda mingguan.
 * ============================================================= */
const MATERI3 = [
  { t:"Menyimak Cerita",
    isi:["Saat guru membacakan cerita, duduklah dengan tenang.",
         "Dengarkan dengan saksama, jangan becanda dengan teman.",
         "Kalau ada yang tidak jelas, kamu boleh bertanya kepada guru."],
    contoh:["Saat menyimak cerita, kamu harus duduk dengan tenang.",
            "Tokoh, tempat, dan kejadian adalah hal penting dalam cerita."] },
  { t:"Kata diawali ka-, ke-, ki-, ku-",
    isi:["ka- : kalung, kamar, kambing, kamera",
         "ke- : kelapa, kerang, kereta, kelinci",
         "ki- : kiwi, kipas, kita",
         "ku- : kuku, kuda, kulkas, kuas, kuning"],
    contoh:["Nama benda yang diawali ku- adalah kuas.",
            "Nama buah yang diawali ke- adalah kelapa.",
            "Nama hewan yang diawali la- adalah lalat."] },
  { t:"Kata diawali la-, li-, le-, lo-",
    isi:["la- : lalat, laci, laut, lapangan",
         "li- : liburan, lima",
         "le- : lele, lezat, lena",
         "lo- : lodeh"],
    contoh:["Hani dan Heri liburan di pinggir laut.",
            "Mereka makan nasi, sayur lodeh, dan lele goreng.",
            "Makanan itu sangat lezat."] },
  { t:"Cuci Tangan Setelah Bermain",
    isi:["Setelah bermain, tangan kita banyak kuman.",
         "Cuci tanganmu dengan sabun sebelum makan.",
         "Supaya kuman hilang dan kita tidak sakit."],
    contoh:["\u201cCuci tanganmu dengan sabun!\u201d adalah kalimat perintah.",
            "Kita mencuci tangan di kamar mandi atau wastafel."] },
  { t:"Nama Hewan",
    isi:["Kambing, kelinci, katak, rusa, kuda adalah nama-nama hewan.",
         "Amatilah gambar dengan saksama, lalu sebutkan namanya."],
    contoh:["Gambar hewan bertanduk = kambing.",
            "Gambar hewan telinga panjang suka wortel = kelinci."] }
];

const MCQ3 = [
  { q:"Saat menyimak cerita, kamu harus ....",
    o:["duduk dengan tenang","becanda dengan teman","bermain di luar"], a:0 },
  { q:"Benda yang diawali ku- adalah ....",
    o:["kuas","kamera","kipas"], a:0 },
  { q:"Nama benda yang diawali ka- adalah ....",
    o:["kalung","kerang","kuku"], a:0 },
  { q:"Nama buah yang diawali ke- adalah ....",
    o:["kelapa","kera","kiwi"], a:0 },
  { q:"Nama hewan yang diawali la- adalah ....",
    o:["lalat","laci","lari"], a:0 },
  { q:"Fani terjatuh dan memegang ____nya yang luka.",
    o:["lutut","leher","siku"], a:0 },
  { q:"Kata \u201clele\u201d diawali suku kata ....",
    o:["le-","la-","li-"], a:0 },
  { q:"Kata \u201claut\u201d diawali suku kata ....",
    o:["la-","lo-","le-"], a:0 },
  { q:"Kata \u201ckulkas\u201d diawali suku kata ....",
    o:["ku-","ka-","ki-"], a:0 },
  { q:"Kata \u201ckerang\u201d diawali suku kata ....",
    o:["ke-","ka-","ki-"], a:0 },
  { q:"Kata yang diawali li- adalah ....",
    o:["liburan","lalat","lele"], a:0 },
  { q:"Kata yang diawali ki- adalah ....",
    o:["kiwi","kuas","kalung"], a:0 },
  { q:"Kata yang diawali lo- adalah ....",
    o:["lodeh","laut","lezat"], a:0 },
  { q:"Mengapa kita harus mencuci tangan setelah bermain?",
    o:["Agar kuman hilang dan kita tidak sakit",
       "Agar tangan menjadi basah",
       "Agar teman ikut mencuci tangan"], a:0 },
  { q:"Kalimat yang tepat untuk gambar anak mencuci tangan adalah ....",
    o:["Anak itu cuci tangan.","Anak itu tertidur.","Anak itu memasak."], a:0 }
];

const BENARSALAH3 = [
  { s:"Kalimat \u201cCuci tanganmu dengan sabun!\u201d adalah kalimat perintah.", b:true, emoji:"🧼" },
  { s:"Kambing diawali suku kata ka-.", b:true, emoji:"🐐" },
  { s:"Kelinci diawali suku kata ke-.", b:true, emoji:"🐰" },
  { s:"Kerang diawali suku kata ka-.", b:false, emoji:"🐚" },
  { s:"Lezat diawali suku kata la-.", b:false, emoji:"😋" },
  { s:"Kuda diawali suku kata ku-.", b:true, emoji:"🐎" },
  { s:"Lalat diawali suku kata le-.", b:false, emoji:"🪰" },
  { s:"Kita harus mencuci tangan setelah bermain agar tidak sakit.", b:true, emoji:"🧼" },
  { s:"Saat menyimak cerita, kita boleh becanda dengan teman.", b:false, emoji:"🤭" },
  { s:"Kiwi diawali suku kata ki-.", b:true, emoji:"🥝" }
];

const RIDDLE3 = [
  { d:"Aku suku kata awal kata kalung, kamar, dan kambing. Siapakah aku?",
    o:["ka- \u{1F410}","ke- \u{1F965}","ku- \u{1F434}"], a:0 },
  { d:"Aku suku kata awal kata kelapa, kerang, dan kelinci. Siapakah aku?",
    o:["ke- \u{1F965}","ka- \u{1F410}","ki- \u{1F348}"], a:0 },
  { d:"Aku suku kata awal kata kuku, kuda, dan kuas. Siapakah aku?",
    o:["ku- \u{1F434}","ka- \u{1F410}","ke- \u{1F965}"], a:0 },
  { d:"Aku suku kata awal kata lalat, laci, dan laut. Siapakah aku?",
    o:["la- \u{1F30A}","le- \u{1F41F}","li- \u{1F3D6}"], a:0 },
  { d:"Aku suku kata awal kata lele dan lezat. Siapakah aku?",
    o:["le- \u{1F41F}","la- \u{1F30A}","lo- \u{1F372}"], a:0 },
  { d:"Aku suku kata awal kata liburan. Siapakah aku?",
    o:["li- \u{1F3D6}","le- \u{1F41F}","la- \u{1F30A}"], a:0 },
  { d:"Aku dipakai untuk mencuci tangan supaya kuman hilang. Siapakah aku?",
    o:["sabun \u{1F9FC}","kipas \u{1FAAD}","kalung \u{1F4FF}"], a:0 },
  { d:"Tempat kita mencuci tangan dengan air dan sabun. Siapakah aku?",
    o:["wastafel \u{1F6B0}","kipas \u{1FAAD}","kereta \u{1F682}"], a:0 }
];

const MATCH_SETS3 = [
  { key:"suku3", label:"Cocokkan kata dengan suku kata awalnya", lc:"Kata", rc:"Suku kata",
    auto:[
      {l:"kalung",r:"ka-"},{l:"kamar",r:"ka-"},{l:"kambing",r:"ka-"},{l:"kamera",r:"ka-"},
      {l:"kelapa",r:"ke-"},{l:"kerang",r:"ke-"},{l:"kelinci",r:"ke-"},{l:"kereta",r:"ke-"},
      {l:"kiwi",r:"ki-"},{l:"kipas",r:"ki-"},
      {l:"kuku",r:"ku-"},{l:"kuda",r:"ku-"},{l:"kulkas",r:"ku-"},{l:"kuas",r:"ku-"},
      {l:"lalat",r:"la-"},{l:"laci",r:"la-"},{l:"laut",r:"la-"},
      {l:"liburan",r:"li-"},
      {l:"lele",r:"le-"},{l:"lezat",r:"le-"},
      {l:"lodeh",r:"lo-"}
    ] },
  { key:"hewan3", label:"Cocokkan nama dengan gambar/cirinya", lc:"Nama", rc:"Gambar",
    auto:[
      {l:"kambing",r:"\u{1F410}"},{l:"kelinci",r:"\u{1F430}"},{l:"katak",r:"\u{1F438}"},{l:"rusa",r:"\u{1F98C}"},
      {l:"kuda",r:"\u{1F40E}"},{l:"lalat",r:"\u{1FAB0}"},{l:"lele",r:"\u{1F41F}"},{l:"kera",r:"\u{1F435}"},
      {l:"kipas",r:"\u{1FAAD}"},{l:"kuas",r:"\u{1F58C}"}
    ] },
  { key:"kalimat3", label:"Cocokkan kalimat dengan jenisnya", lc:"Kalimat", rc:"Jenis kalimat",
    sets:[
      [ {l:"Cuci tanganmu dengan sabun!",r:"Kalimat perintah"},
        {l:"Ayo, kita cuci tangan bersama!",r:"Kalimat ajakan"},
        {l:"Mengapa tangan harus dicuci?",r:"Kalimat tanya"},
        {l:"Hani liburan di pinggir laut.",r:"Kalimat berita"} ],
      [ {l:"Minumlah susu sebelum tidur!",r:"Kalimat perintah"},
        {l:"Mari makan bersama-sama!",r:"Kalimat ajakan"},
        {l:"Siapa nama temanmu?",r:"Kalimat tanya"},
        {l:"Makanan itu sangat lezat.",r:"Kalimat berita"} ]
    ] }
];

const FILL3 = [
  { t:"Dua anak itu sedang ____ tangan dengan sabun.",
    o:["cuci","makan","tidur"], a:0 },
  { t:"Mereka mencuci tangan di ____.",
    o:["kamar mandi","taman","kamar tidur"], a:0 },
  { t:"Hani dan Heri liburan di pinggir ____.",
    o:["laut","laci","lele"], a:0 },
  { t:"Mereka makan nasi, sayur ____, dan lele goreng.",
    o:["lodeh","liburan","lalat"], a:0 },
  { t:"Makanan itu sangat ____.",
    o:["lezat","lelah","lucu"], a:0 },
  { t:"Sebelum makan, ____ tanganmu dengan sabun!",
    o:["cuci","lari","duduki"], a:0 },
  { t:"Kambing, kelinci, katak, rusa, dan kuda adalah nama ____.",
    o:["hewan","buah","benda"], a:0 },
  { t:"Nama buah yang diawali ke- adalah ____.",
    o:["kelapa","kera","kiwi"], a:0 },
  { t:"Nama benda yang diawali ku- adalah ____.",
    o:["kuas","kamera","kipas"], a:0 },
  { t:"Kalimat perintah: \u201c____ tanganmu setelah bermain!\u201d",
    o:["Cuci","Makan","Lihat"], a:0 }
];

/* ===== BAB 4 · Aku Pasti Bisa (SAS Senin, 23 Nov 2026) =====
   Sumber: buku ESPS B.Indonesia Kelas 1 Bab 4 "Aku Pasti Bisa" (h. 58-73)
           + LATIHAN SOAL B.INDONESIA (TES FORMATIF) BAB 4 SD Stella Maris 2026/2027
   Materi: Menirukan Gerakan dalam Cerita • Kata ma- mi- mu- me- mo-
           Kata ga- gi- gu- ge- go- • Menceritakan Kembali dengan Runtut
           Teks "Bermain Engklek" & "Balap Karung" • Kata serapan bahasa daerah
*/

const MATERI4 = [
  { t:"Menirukan Gerakan dalam Cerita",
    isi:["Menyimak berarti mendengarkan dengan saksama.",
         "Gerakan yang sering ada dalam cerita:",
         "lari, jalan, lompat, berdiri, duduk, jongkok.",
         "Tirukan gerakan sesuai cerita yang didengar."],
    contoh:["Dona berlari sangat cepat. Itu sebabnya Dona menjadi juara.",
            "\"Coba tirukan gerakan lari!\" — kita berlari di tempat.",
            "Gerakan dalam permainan engklek adalah melompat."] },
  { t:"Kata Diawali ma-, mi-, mu-, me-, mo-",
    isi:["ma- : mawar, makan, madu, macan, mahal",
         "mi- : minyak, minum, mirip",
         "mu- : musang, murah, muda",
         "me- : meja, merah, megah, menang, melempar",
         "mo- : mobil, motor, molen, monyet"],
    contoh:["Lebah dapat menghasilkan madu.",
            "Ayah mengantar Adi ke sekolah naik motor.",
            "Bunga di halaman rumah adalah mawar."] },
  { t:"Kata Diawali ga-, gi-, gu-, ge-, go-",
    isi:["ga- : garam, gayung, gajah",
         "gi- : gigi, gitar",
         "gu- : gula, gunung, gulai, gurame, gurih",
         "ge- : gelas, gelang, gerak, gemar, goreng, genting",
         "go- : gotong, gosok, gorila"],
    contoh:["Bu Gita menggoreng ikan gurame.",
            "Mita minum menggunakan gelas kaca.",
            "Mona melakukan gotong royong agar lingkungan bersih."] },
  { t:"Menceritakan Kembali dengan Runtut",
    isi:["Runtut artinya berurutan.",
         "Peristiwa dalam teks harus diceritakan kembali secara urut.",
         "Catatlah hal penting: tokoh, tempat, dan kejadian.",
         "Ceritakan kembali dengan kata-katamu sendiri."],
    contoh:["Pertama, siapkan gaco. Kedua, gambarlah kotak-kotak.",
            "Ketiga, pemain melempar gaco ke kotak nomor satu."] },
  { t:"Teks Bermain Engklek",
    isi:["Engklek adalah permainan tradisional.",
         "Gaco adalah batu atau pecahan genting.",
         "Gaco digunakan sebagai alat lempar.",
         "Semua pemain melakukan hompimpa untuk menentukan giliran.",
         "Pemain melompat dengan satu kaki.",
         "Kotak tempat gaco jatuh menjadi rumah pemain."],
    contoh:["Pemenang engklek adalah pemain yang paling banyak memiliki rumah.",
            "Engklek dan gaco adalah kata serapan dari bahasa Jawa."] },
  { t:"Kata Serapan Bahasa Daerah",
    isi:["Bahasa Indonesia menyerap kata dari bahasa daerah.",
         "engklek dan gaco diserap dari bahasa Jawa.",
         "Kata serapan tetap dipakai dalam cerita berbahasa Indonesia."],
    contoh:["\"Ayo, kita bermain engklek di halaman!\"",
            "Dona melempar gaco ke kotak nomor 1."] }
];

const MCQ4 = [
  { q:"Gerakan menolakkan kaki ke atas sehingga badan melayang di udara disebut gerakan ....",
    o:["lompat","jongkok","lari"], a:0 },
  { q:"Nama bunga yang diawali suku kata ma- adalah ....",
    o:["mawar","mahal","macan"], a:0 },
  { q:"Nama hewan yang diawali suku kata mo- adalah ....",
    o:["monyet","motor","mogok"], a:0 },
  { q:"Nama hewan yang diawali suku kata ma- adalah ....",
    o:["macan","merak","musang"], a:0 },
  { q:"Pemain engklek ____ gaco ke kotak nomor 1.",
    o:["melempar","mencari","mengambil"], a:0 },
  { q:"Sebelum bermain engklek, semua pemain melakukan ....",
    o:["hompimpa","lompatan","lemparan"], a:0 },
  { q:"Gerakan dalam permainan engklek adalah ....",
    o:["melompat","berenang","menari"], a:0 },
  { q:"Kata \u201cmusang\u201d diawali suku kata ....",
    o:["mu-","ma-","mo-"], a:0 },
  { q:"Kata \u201cminyak\u201d diawali suku kata ....",
    o:["mi-","mu-","me-"], a:0 },
  { q:"Kata \u201cmeja\u201d diawali suku kata ....",
    o:["me-","ma-","mi-"], a:0 },
  { q:"Kata \u201cmobil\u201d diawali suku kata ....",
    o:["mo-","mu-","ma-"], a:0 },
  { q:"Kata \u201cmurah\u201d diawali suku kata ....",
    o:["mu-","ma-","me-"], a:0 },
  { q:"Kata yang diawali suku kata gi- adalah ....",
    o:["gigi","gotong","garam"], a:0 },
  { q:"Kata yang diawali suku kata gu- adalah ....",
    o:["gunung","gelas","gajah"], a:0 },
  { q:"Kata yang diawali suku kata ge- adalah ....",
    o:["gelang","gula","gitar"], a:0 },
  { q:"Kata yang diawali suku kata go- adalah ....",
    o:["gorila","garam","gunung"], a:0 },
  { q:"Runtut artinya ....",
    o:["berurutan","berhenti","bernyanyi"], a:0 },
  { q:"Gaco adalah ... dalam permainan engklek.",
    o:["alat lempar","kotak permainan","tempat berdiri"], a:0 },
  { q:"Kata \u201cengklek\u201d dan \u201cgaco\u201d diserap dari bahasa ....",
    o:["Jawa","Sunda","Bali"], a:0 },
  { q:"Kata \u201cgulai\u201d diawali suku kata ....",
    o:["gu-","ga-","gi-"], a:0 },
  { q:"Kata \u201cmerah\u201d diawali suku kata ....",
    o:["me-","ma-","mu-"], a:0 },
  { q:"Pemenang permainan engklek adalah pemain yang paling banyak memiliki ....",
    o:["rumah","gaco","teman"], a:0 }
];

const BENARSALAH4 = [
  { s:"Gaco adalah batu atau pecahan genting.", b:true, emoji:"🪨" },
  { s:"Kata \u201cmawar\u201d diawali suku kata ma-.", b:true, emoji:"🌹" },
  { s:"Kata \u201cmobil\u201d diawali suku kata mi-.", b:false, emoji:"🚗" },
  { s:"Kata \u201cgajah\u201d diawali suku kata ga-.", b:true, emoji:"🐘" },
  { s:"Kata \u201cgulai\u201d diawali suku kata gu-.", b:true, emoji:"🍲" },
  { s:"Kata \u201cgelas\u201d diawali suku kata ge-.", b:true, emoji:"🥛" },
  { s:"Kata \u201cgorila\u201d diawali suku kata ga-.", b:false, emoji:"🦍" },
  { s:"Runtut artinya berurutan.", b:true, emoji:"🔢" },
  { s:"Engklek adalah permainan tradisional.", b:true, emoji:"🦘" },
  { s:"Permainan engklek dimainkan dengan berenang.", b:false, emoji:"🏊" },
  { s:"Sebelum berlomba, kita harus berlatih.", b:true, emoji:"🏃" },
  { s:"Saat menyimak cerita, kita boleh bersuara sendiri.", b:false, emoji:"🤭" }
];

const RIDDLE4 = [
  { d:"Aku suku kata awal kata mawar, makan, dan madu. Siapakah aku?",
    o:["ma- \u{1F339}","mi- \u{1F9F4}","mo- \u{1F697}"], a:0 },
  { d:"Aku suku kata awal kata minyak, minum, dan mirip. Siapakah aku?",
    o:["mi- \u{1F9F4}","mu- \u{1F994}","me- \u{1FA91}"], a:0 },
  { d:"Aku suku kata awal kata musang, murah, dan muda. Siapakah aku?",
    o:["mu- \u{1F994}","ma- \u{1F339}","mo- \u{1F697}"], a:0 },
  { d:"Aku suku kata awal kata meja, merah, dan megah. Siapakah aku?",
    o:["me- \u{1FA91}","mi- \u{1F9F4}","mu- \u{1F994}"], a:0 },
  { d:"Aku suku kata awal kata mobil, motor, dan molen. Siapakah aku?",
    o:["mo- \u{1F697}","ma- \u{1F339}","mu- \u{1F994}"], a:0 },
  { d:"Aku suku kata awal kata garam, gajah, dan gayung. Siapakah aku?",
    o:["ga- \u{1F418}","gi- \u{1F9B7}","gu- \u{1F34C}"], a:0 },
  { d:"Aku suku kata awal kata gula, gunung, dan gulai. Siapakah aku?",
    o:["gu- \u{1F34C}","ga- \u{1F418}","ge- \u{1F964}"], a:0 },
  { d:"Aku suku kata awal kata gelas, gelang, dan gerak. Siapakah aku?",
    o:["ge- \u{1F964}","gi- \u{1F9B7}","go- \u{1F98D}"], a:0 },
  { d:"Aku suku kata awal kata gotong, gosok, dan gorila. Siapakah aku?",
    o:["go- \u{1F98D}","gu- \u{1F34C}","ga- \u{1F418}"], a:0 },
  { d:"Aku alat lempar dalam permainan engklek. Siapakah aku?",
    o:["gaco \u{1FAA8}","gawang \u{1F945}","gasing \u{1F300}"], a:0 },
  { d:"Aku permainan tradisional yang memakai kotak-kotak di tanah. Siapakah aku?",
    o:["engklek \u{1F45F}","balap karung \u{1F45A}","lompat tali \u{1FA9D}"], a:0 }
];

const MATCH_SETS4 = [
  { key:"sukuM4", label:"Cocokkan kata dengan suku kata awalnya (ma- mi- mu- me- mo-)", lc:"Kata", rc:"Suku kata",
    auto:[
      {l:"mawar",r:"ma-"},{l:"makan",r:"ma-"},{l:"madu",r:"ma-"},{l:"macan",r:"ma-"},
      {l:"minyak",r:"mi-"},{l:"minum",r:"mi-"},{l:"mirip",r:"mi-"},
      {l:"musang",r:"mu-"},{l:"murah",r:"mu-"},{l:"muda",r:"mu-"},
      {l:"meja",r:"me-"},{l:"merah",r:"me-"},{l:"megah",r:"me-"},{l:"menang",r:"me-"},
      {l:"mobil",r:"mo-"},{l:"motor",r:"mo-"},{l:"molen",r:"mo-"},{l:"monyet",r:"mo-"}
    ] },
  { key:"sukuG4", label:"Cocokkan kata dengan suku kata awalnya (ga- gi- gu- ge- go-)", lc:"Kata", rc:"Suku kata",
    auto:[
      {l:"garam",r:"ga-"},{l:"gayung",r:"ga-"},{l:"gajah",r:"ga-"},
      {l:"gigi",r:"gi-"},{l:"gitar",r:"gi-"},
      {l:"gula",r:"gu-"},{l:"gunung",r:"gu-"},{l:"gulai",r:"gu-"},{l:"gurame",r:"gu-"},{l:"gurih",r:"gu-"},
      {l:"gelas",r:"ge-"},{l:"gelang",r:"ge-"},{l:"gerak",r:"ge-"},{l:"gemar",r:"ge-"},
      {l:"gotong",r:"go-"},{l:"gosok",r:"go-"},{l:"gorila",r:"go-"}
    ] },
  { key:"gerakan4", label:"Cocokkan nama gerakan dengan gambarnya", lc:"Gerakan", rc:"Gambar",
    auto:[
      {l:"lari",r:"\u{1F3C3}"},{l:"jalan",r:"\u{1F6B6}"},{l:"lompat",r:"\u{1F998}"},
      {l:"berdiri",r:"\u{1F9CD}"},{l:"duduk",r:"\u{1FA91}"},{l:"jongkok",r:"\u{1F9CE}"}
    ] },
  { key:"istilah4", label:"Cocokkan istilah dengan artinya", lc:"Istilah", rc:"Arti",
    auto:[
      {l:"gaco",r:"alat lempar dari batu"},{l:"hompimpa",r:"menentukan giliran"},
      {l:"runtut",r:"berurutan"},{l:"engklek",r:"permainan tradisional"}
    ] }
];

const FILL4 = [
  { t:"Bu Gita menggoreng ikan ____.", o:["gurame","gelas","gigi"], a:0 },
  { t:"Mita minum menggunakan ____ kaca.", o:["gelas","garam","gotong"], a:0 },
  { t:"Mona melakukan ____ royong agar lingkungan bersih.", o:["gotong","gosok","gula"], a:0 },
  { t:"Bumbu dapur yang rasanya asin adalah ____", o:["garam","gula","gajah"], a:0 },
  { t:"Gisel selalu menggosok ____ sebelum tidur.", o:["gigi","gitar","gelang"], a:0 },
  { t:"Pemain engklek melempar ____ ke kotak nomor 1.", o:["gaco","gawang","gasing"], a:0 },
  { t:"Lebah dapat menghasilkan ____.", o:["madu","minyak","garam"], a:0 },
  { t:"Ayah mengantar Adi ke sekolah naik ____.", o:["motor","meja","musang"], a:0 },
  { t:"Setiap hari, aku ____ susu.", o:["minum","makan","mandi"], a:0 },
  { t:"Semua pemain melakukan ____ sebelum permainan dimulai.", o:["hompimpa","upacara","senam"], a:0 }
];

/* ---------- Pilih bab ---------- */
const BAB2_DATA = window.BINDO_DATA;
const BAB3_DATA = { MATERI:MATERI3, MCQ:MCQ3, BENARSALAH:BENARSALAH3, RIDDLE:RIDDLE3,
                    MATCH_SETS:MATCH_SETS3, MATCH_PAIRS, FILL:FILL3, shuffle, pickN };
const BAB4_DATA = { MATERI:MATERI4, MCQ:MCQ4, BENARSALAH:BENARSALAH4, RIDDLE:RIDDLE4,
                    MATCH_SETS:MATCH_SETS4, MATCH_PAIRS, FILL:FILL4, shuffle, pickN };
window.BINDO_BABS = [
  { nama:"Bab 2 · Mari Bermain", data:BAB2_DATA },
  { nama:"Bab 3 · Suku Kata",    data:BAB3_DATA },
  { nama:"Bab 4 · Aku Pasti Bisa", data:BAB4_DATA }
];
