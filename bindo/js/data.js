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
