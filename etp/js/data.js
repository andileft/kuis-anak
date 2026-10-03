/* ===== ETP (ENTREPRENEUR) — Bank Soal & Data =====
   Sumber: "LATIHAN SOAL 2" ETP SD Stella Maris T.P. 2025/2026 (Semester 1)
           "7.-AKTIVITAS-PERTEMUAN-1" Aku Kenal Kebiasaan Keluargaku
           "7.-AKTIVITAS-PERTEMUAN-2" Mana Kebutuhanku?
           "7.-AKTIVITAS-PERTEMUAN-3" Kebutuhan atau Keinginan?
            "7.-LATIHAN-SOAL-ETP-BAB-2-02"
   Materi: Kebiasaan Keluarga • Kebutuhan (primer/sekunder) • Keinginan • Belanja Bijak
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
  { t:"Kebiasaan Keluargaku",
    isi:["Setiap orang adalah unik, oleh karena itu setiap orang memiliki kebiasaan yang berbeda-beda.",
         "Kebiasaan adalah kegiatan yang sering kita lakukan, terutama saat waktu luang.",
         "Kita perlu mengenal kebiasaan diri sendiri dan anggota keluargamu: ayah, ibu, kakak, dan adik.",
         "Kebiasaan yang berbeda membuat kita belajar saling memahami."],
    contoh:["Ayah suka membaca koran.","Ibu suka berkebun.","Kakak suka menggambar.","Aku suka bermain sepeda.",
            "Kebiasaan yang berbeda membuat kita belajar saling memahami — bukan bertengkar."] },
  { t:"Apa Itu Kebutuhan?",
    isi:["Kebutuhan adalah sesuatu yang kita perlukan agar dapat hidup sehat dan bahagia.",
         "Kebutuhan itu penting untuk hidup sehat dan bahagia.",
         "Aku tahu, kebutuhan primer harus didahulukan!"],
    contoh:["Makanan — agar kita tidak lapar.","Pakaian — agar tubuh terlindungi.","Tempat tinggal — agar kita aman."] },
  { t:"Kebutuhan Primer dan Sekunder",
    isi:["Kebutuhan dibagi menjadi dua, yaitu kebutuhan primer dan kebutuhan sekunder.",
         "KEBUTUHAN PRIMER: sangat penting dan harus dipenuhi.",
         "KEBUTUHAN SEKUNDER: membantu hidup lebih nyaman dan dapat dipenuhi setelah kebutuhan primer."],
    contoh:["Primer (harus didahulukan): makanan, pakaian, tempat tinggal, sayur.",
            "Sekunder (dapat ditunda): handphone, laptop, mainan, sepeda."] },
  { t:"Kebutuhan atau Keinginan?",
    isi:["Kebutuhan adalah sesuatu yang kita perlukan agar hidup sehat dan bahagia.",
         "Keinginan adalah sesuatu yang kita ingin miliki, tetapi tidak harus dipenuhi.",
         "Belanja dengan bijak: pilih kebutuhan yang penting terlebih dahulu. Keinginan bisa ditunda."],
    contoh:["KEBUTUHAN ❤️: nasi, seragam sekolah, rumah, makanan.",
            "KEINGINAN ⭐: mainan baru, permen, permainan baru."] },
  { t:"Kebutuhan Bukan Barang",
    isi:["Tidak semua kebutuhan berbentuk barang.",
         "Kasih sayang adalah contoh kebutuhan bukan barang.",
         "Setiap anggota keluarga punya kebutuhan yang berbeda. Sikap yang baik adalah peduli dan memahami."],
    contoh:["Kebutuhan bukan barang: kasih sayang, perhatian, rasa aman.",
            "Aku peduli keluargaku: aku tahu apa yang dibutuhkan ayah, ibu, kakak, dan adikku."] },
  { t:"Belanja dengan Bijak",
    isi:["Bayangkan kamu memiliki uang untuk membeli satu benda.",
         "Saat ingin membeli sesuatu, pertanyaan yang baik adalah: Apakah aku benar-benar membutuhkannya?",
         "Bukan: \u201cApakah teman punya?\u201d atau \u201cApakah harganya mahal?\u201d"],
    contoh:["Pilih kebutuhan yang penting terlebih dahulu.",
            "Ingat ya! Kebutuhan didahulukan, keinginan bisa ditunda."] }
];

/* ---------- 1) PILIHAN GANDA ---------- */
const MCQ = [
  // --- Latihan Soal 2 (soal 1-10) ---
  { q:"Kebutuhan adalah sesuatu yang kita perlukan agar hidup ....",
    o:["sehat dan bahagia","selalu bermain","punya banyak mainan"], a:0 },
  { q:"Contoh kebutuhan primer adalah ....", o:["makanan","robot mainan","permen"], a:0 },
  { q:"Contoh kebutuhan sekunder adalah ....", o:["mainan","rumah","pakaian"], a:0 },
  { q:"Setiap orang adalah unik, oleh karena itu setiap orang memiliki .... yang berbeda.",
    o:["kebiasaan","laptop","sepeda"], a:0 },
  { q:"Contoh kebutuhan bukan barang adalah ....", o:["kasih sayang","rumah","pakaian"], a:0 },
  { q:"Yang termasuk keinginan adalah ....", o:["mainan baru","makanan","seragam sekolah"], a:0 },
  { q:"Saat ingin membeli sesuatu, pertanyaan yang baik adalah ....",
    o:["Apakah aku benar-benar membutuhkannya?","Apakah teman punya?","Apakah harganya mahal?"], a:0 },
  { q:"Alat untuk belajar termasuk kebutuhan ....", o:["sekunder","primer","keinginan"], a:0 },
  { q:"Kita perlu mengenal kebiasaan keluarga agar ....",
    o:["saling memahami","saling bertengkar","semua sama"], a:0 },
  { q:"Sikap yang baik terhadap kebutuhan keluarga adalah ....",
    o:["peduli dan memahami","tidak mendengarkan","memaksa semua sama"], a:0 },

  // --- Pertemuan 1: Aku Kenal Kebiasaan Keluargaku ---
  { q:"Kegiatan yang sering kita lakukan, terutama saat waktu luang, disebut ....",
    o:["kebiasaan","kebutuhan","keinginan"], a:0 },
  { q:"Kebiasaan setiap anggota keluarga ....", o:["berbeda-beda","semuanya sama","selalu sama"], a:0 },
  { q:"Kebiasaan yang berbeda membuat kita belajar untuk ....",
    o:["saling memahami","bertengkar","mengejek"], a:0 },
  { q:"Apakah kebiasaan keluargamu semuanya sama?", o:["Tidak, berbeda-beda","Ya, semua sama","Ya, selalu sama"], a:0 },

  // --- Pertemuan 2: Mana Kebutuhanku? ---
  { q:"Kebutuhan itu penting untuk hidup ....", o:["sehat dan bahagia","banyak mainan","mahal"], a:0 },
  { q:"Makanan, pakaian, dan tempat tinggal termasuk kebutuhan ....",
    o:["primer","sekunder","keinginan"], a:0 },
  { q:"Handphone, laptop, dan mainan termasuk kebutuhan ....",
    o:["sekunder","primer","pokok"], a:0 },
  { q:"Kebutuhan primer adalah kebutuhan yang ....",
    o:["sangat penting dan harus dipenuhi","bisa ditunda kapan saja","tidak penting"], a:0 },
  { q:"Kebutuhan sekunder dapat dipenuhi ....",
    o:["setelah kebutuhan primer","sebelum kebutuhan primer","tidak pernah"], a:0 },
  { q:"Berilah tanda \u2713 pada kolom yang tepat! Nasi termasuk kebutuhan ....",
    o:["primer","sekunder","keinginan"], a:0 },
  { q:"Berilah tanda \u2713 pada kolom yang tepat! Boneka termasuk kebutuhan ....",
    o:["sekunder","primer","pokok"], a:0 },
  { q:"Berilah tanda \u2713 pada kolom yang tepat! Rumah termasuk kebutuhan ....",
    o:["primer","sekunder","keinginan"], a:0 },
  { q:"Berilah tanda \u2713 pada kolom yang tepat! Sepeda termasuk kebutuhan ....",
    o:["sekunder","primer","pokok"], a:0 },
  { q:"Kebutuhan mana yang harus didahulukan?", o:["kebutuhan primer","kebutuhan sekunder","keinginan"], a:0 },

  // --- Pertemuan 3: Kebutuhan atau Keinginan? ---
  { q:"Beri tanda \u2b50 pada KEINGINAN! Yang termasuk keinginan adalah ....",
    o:["permen","nasi","seragam sekolah"], a:0 },
  { q:"Beri tanda \u2764\ufe0f pada KEBUTUHAN! Yang termasuk kebutuhan adalah ....",
    o:["rumah","permainan baru","mainan baru"], a:0 },
  { q:"Sesuatu yang kita ingin miliki tetapi tidak harus dipenuhi disebut ....",
    o:["keinginan","kebutuhan","kebiasaan"], a:0 },
  { q:"Keinginan bisa ....", o:["ditunda","didahulukan","dipaksa"], a:0 },
  { q:"Ingat ya! Pilih kebutuhan yang penting terlebih dahulu, karena keinginan ....",
    o:["bisa ditunda","harus didahulukan","lebih penting"], a:0 },

  // --- Latihan Soal 2 bagian gambar (soal dari gambar) ---
  { q:"Perhatikan gambar! Apa kebutuhan yang sedang dipenuhi oleh keluarga pada gambar di atas?",
    img:"assets/keluarga-makan.png", o:["makanan","mainan baru","sepeda"], a:0 },
  { q:"Perhatikan gambar! Apa yang sedang diinginkan anak pada gambar?",
    img:"assets/anak-sepeda.png", o:["sepeda","makanan","rumah"], a:0 },
  { q:"Perhatikan gambar! Apakah sepeda termasuk kebutuhan atau keinginan?",
    img:"assets/anak-sepeda.png", o:["keinginan","kebutuhan","kebiasaan"], a:0 }
];

/* ---------- 2) BENAR / SALAH ---------- */
const BENARSALAH = [
  { s:"Kebutuhan adalah sesuatu yang kita perlukan agar hidup sehat dan bahagia.", b:true,  emoji:"🍚" },
  { s:"Mainan baru termasuk kebutuhan primer.", b:false, emoji:"🧸" },
  { s:"Kebutuhan primer harus didahulukan.", b:true,  emoji:"❤️" },
  { s:"Keinginan bisa ditunda.", b:true,  emoji:"⭐" },
  { s:"Semua keluarga memiliki kebiasaan yang sama.", b:false, emoji:"👨‍👩‍👧" },
  { s:"Kita perlu mengenal kebiasaan keluarga agar saling memahami.", b:true,  emoji:"🤝" },
  { s:"Kebiasaan yang berbeda membuat kita belajar bertengkar.", b:false, emoji:"😠" },
  { s:"Kebiasaan yang berbeda membuat kita belajar saling memahami.", b:true,  emoji:"💛" },
  { s:"Makanan, pakaian, dan rumah termasuk kebutuhan primer.", b:true,  emoji:"🏠" },
  { s:"Handphone, laptop, dan mainan termasuk kebutuhan sekunder.", b:true,  emoji:"📱" },
  { s:"Kebutuhan sekunder dipenuhi lebih dahulu daripada kebutuhan primer.", b:false, emoji:"🔢" },
  { s:"Alat untuk belajar termasuk kebutuhan sekunder.", b:true,  emoji:"✏️" },
  { s:"Kasih sayang termasuk kebutuhan bukan barang.", b:true,  emoji:"🥰" },
  { s:"Permen termasuk kebutuhan.", b:false, emoji:"🍬" },
  { s:"Seragam sekolah termasuk kebutuhan.", b:true,  emoji:"👕" },
  { s:"Rumah termasuk keinginan.", b:false, emoji:"🏡" },
  { s:"Saat ingin membeli sesuatu, kita tanya: apakah aku benar-benar membutuhkannya?", b:true,  emoji:"🛒" },
  { s:"Sikap yang baik terhadap kebutuhan keluarga adalah peduli dan memahami.", b:true,  emoji:"👪" },
  { s:"Setiap orang adalah unik, jadi kebiasaannya berbeda-beda.", b:true,  emoji:"🌟" },
  { s:"Kita boleh memaksa anggota keluarga punya kebiasaan yang sama.", b:false, emoji:"🚫" },
  { s:"Kebutuhan sekunder membantu hidup lebih nyaman.", b:true,  emoji:"🛋️" },
  { s:"Yang termasuk keinginan adalah mainan baru.", b:true,  emoji:"🎮" }
];

/* ---------- 3) TEKA-TEKI \u201cSIAPAKAH AKU?\u201d ---------- */
const RIDDLE = [
  { d:"Aku sesuatu yang kita perlukan agar dapat hidup sehat dan bahagia. Contohnya makanan, pakaian, dan tempat tinggal. Siapakah aku?",
    o:["kebutuhan 🍚","keinginan ⭐","kebiasaan 🔁"], a:0 },
  { d:"Aku sangat penting dan harus dipenuhi. Contohnya makanan, pakaian, dan tempat tinggal. Siapakah aku?",
    o:["kebutuhan primer 🥇","kebutuhan sekunder 🥈","keinginan ⭐"], a:0 },
  { d:"Aku membantu hidup lebih nyaman dan dapat dipenuhi setelah kebutuhan primer. Contohnya handphone, laptop, dan mainan. Siapakah aku?",
    o:["kebutuhan sekunder 🥈","kebutuhan primer 🥇","kebutuhan pokok 🍚"], a:0 },
  { d:"Aku sesuatu yang ingin dimiliki, tetapi tidak harus dipenuhi. Aku bisa ditunda. Siapakah aku?",
    o:["keinginan ⭐","kebutuhan ❤️","kebiasaan 🔁"], a:0 },
  { d:"Setiap orang memilikiku dan tidak ada yang sama. Aku membuat keluarga saling memahami. Siapakah aku?",
    o:["kebiasaan 🔁","kebutuhan 🍚","keinginan ⭐"], a:0 },
  { d:"Aku bukan barang, tetapi aku dibutuhkan. Contohku adalah kasih sayang. Siapakah aku?",
    o:["kebutuhan bukan barang 💛","kebutuhan primer 🥇","keinginan ⭐"], a:0 },
  { d:"Aku benda yang dipakai untuk belajar, seperti buku dan pensil. Aku termasuk kebutuhan sekunder. Siapakah aku?",
    o:["alat untuk belajar ✏️","mainan baru 🧸","permen 🍬"], a:0 },
  { d:"Aku benda yang harus dipenuhi lebih dahulu. Namaku nasi, sayur, baju, dan rumah. Siapakah aku?",
    o:["kebutuhan primer 🥇","keinginan ⭐","kebutuhan sekunder 🥈"], a:0 },
  { d:"Aku pertanyaan yang baik saat ingin membeli sesuatu. Aku membuatmu belanja dengan bijak. Siapakah aku?",
    o:["Apakah aku benar-benar membutuhkannya? 🤔","Apakah teman punya? 👀","Apakah harganya mahal? 💰"], a:0 },
  { d:"Aku benda yang membuat hidup lebih nyaman. Aku bisa ditunda, contohku boneka, sepeda, dan laptop. Siapakah aku?",
    o:["kebutuhan sekunder 🥈","kebutuhan primer 🥇","kebiasaan 🔁"], a:0 }
];

/* ---------- 4) COCOKKAN (drag / tap) ----------
   Tiap set = 1 soal. "auto" => diambil pasangan berbeda dari daftar;
   "sets" => pasangan tetap. Nilai tiap soal cocokkan selalu 10 poin:
   per = poin per pasangan, bonus = poin bonus kalau semua pasangan cocok.
   (3 pasang: 3x3+1=10 | 2 pasang: 2x4+2=10 | 4 pasang: 4x2+2=10) */
const MATCH_SETS = [
  { key:"jenis", label:"Cocokkan benda dengan jenisnya", lc:"Benda", rc:"Jenisnya", per:3, bonus:1,
    sets:[
      [ {l:"nasi",r:"Kebutuhan primer"},{l:"handphone",r:"Kebutuhan sekunder"},{l:"permen",r:"Keinginan"} ],
      [ {l:"rumah",r:"Kebutuhan primer"},{l:"laptop",r:"Kebutuhan sekunder"},{l:"mainan baru",r:"Keinginan"} ],
      [ {l:"pakaian",r:"Kebutuhan primer"},{l:"mainan",r:"Kebutuhan sekunder"},{l:"permainan baru",r:"Keinginan"} ]
    ] },
  { key:"tanda", label:"Cocokkan benda dengan tandanya", lc:"Benda", rc:"Tandanya", per:4, bonus:2,
    sets:[
      [ {l:"nasi",r:"Kebutuhan \u2764\ufe0f"},{l:"permen",r:"Keinginan \u2b50"} ],
      [ {l:"seragam sekolah",r:"Kebutuhan \u2764\ufe0f"},{l:"mainan baru",r:"Keinginan \u2b50"} ],
      [ {l:"rumah",r:"Kebutuhan \u2764\ufe0f"},{l:"permainan baru",r:"Keinginan \u2b50"} ]
    ] },
  { key:"gambar", label:"Cocokkan benda dengan gambarnya", lc:"Benda", rc:"Gambar", per:2, bonus:2,
    auto:[
      {l:"nasi",r:"\ud83c\udf5a"},{l:"baju",r:"\ud83d\udc55"},{l:"boneka",r:"\ud83e\uddf8"},{l:"rumah",r:"\ud83c\udfe0"},
      {l:"sepeda",r:"\ud83d\udeb2"},{l:"sayur",r:"\ud83e\udd66"},{l:"handphone",r:"\ud83d\udcf1"},{l:"laptop",r:"\ud83d\udcbb"},
      {l:"permen",r:"\ud83c\udf6c"},{l:"seragam sekolah",r:"\ud83d\udc55"}
    ] }
];
const MATCH_PAIRS = 4;   // jumlah pasangan tiap soal cocokkan (set "auto")

/* ---------- 5) LENGKAPI ---------- */
const FILL = [
  { t:"Kebutuhan adalah sesuatu yang kita perlukan agar hidup ____.",
    o:["sehat dan bahagia","selalu bermain","punya banyak mainan"], a:0 },
  { t:"Contoh kebutuhan primer adalah ____.", o:["makanan","robot mainan","permen"], a:0 },
  { t:"Contoh kebutuhan sekunder adalah ____.", o:["mainan","rumah","pakaian"], a:0 },
  { t:"Setiap orang memiliki ____ yang berbeda-beda.", o:["kebiasaan","laptop","sepeda"], a:0 },
  { t:"Contoh kebutuhan bukan barang adalah ____.", o:["kasih sayang","rumah","pakaian"], a:0 },
  { t:"Yang termasuk keinginan adalah ____.", o:["mainan baru","makanan","seragam sekolah"], a:0 },
  { t:"Kebutuhan ____ sangat penting dan harus dipenuhi.", o:["primer","sekunder","keinginan"], a:0 },
  { t:"Kebutuhan sekunder dapat dipenuhi setelah kebutuhan ____.", o:["primer","sekunder","keinginan"], a:0 },
  { t:"Keinginan bisa ____.", o:["ditunda","didahulukan","dipaksa"], a:0 },
  { t:"Alat untuk belajar termasuk kebutuhan ____.", o:["sekunder","primer","keinginan"], a:0 },
  { t:"Kita perlu mengenal kebiasaan keluarga agar saling ____.", o:["memahami","bertengkar","mengejek"], a:0 },
  { t:"Sikap yang baik terhadap kebutuhan keluarga adalah ____ dan memahami.", o:["peduli","tidak peduli","memaksa"], a:0 },
  { t:"Makanan, pakaian, dan tempat tinggal termasuk kebutuhan ____.", o:["primer","sekunder","keinginan"], a:0 },
  { t:"Handphone, laptop, dan mainan termasuk kebutuhan ____.", o:["sekunder","primer","pokok"], a:0 },
  { t:"Saat ingin membeli sesuatu, tanyakan apakah aku benar-benar ____.", o:["membutuhkannya","menyukainya","menginginkannya"], a:0 },
  { t:"Belanja dengan bijak artinya pilih ____ yang penting terlebih dahulu.", o:["kebutuhan","keinginan","mainan"], a:0 },
  { t:"Kebiasaan yang berbeda membuat kita belajar untuk saling ____.", o:["memahami","bertengkar","mengejek"], a:0 },
  { t:"Beri tanda bintang pada KEINGINAN. ____ termasuk keinginan.", o:["Permen","Nasi","Rumah"], a:0 }
];

window.ETP_DATA = { MATERI, MCQ, BENARSALAH, RIDDLE, MATCH_SETS, MATCH_PAIRS, FILL, shuffle, pickN };