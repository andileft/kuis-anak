/* ===== AGAMA — Bank Soal & Data =====
   Sumber: Modul-1.docx, LKPD Agama.pdf, Bab 1 agama.pdf
   (Pendidikan Agama Bina Iman / Katolik Kelas 1 SD)
   Tema: Aku Bersyukur dan Bangga Menjadi Diriku
*/

const BODY = {
  mata:   { emoji: "👀", name: "Mata" },
  telinga:{ emoji: "👂", name: "Telinga" },
  hidung: { emoji: "👃", name: "Hidung" },
  mulut:  { emoji: "👄", name: "Mulut" },
  tangan: { emoji: "🙌", name: "Tangan" },
  kaki:   { emoji: "🦶", name: "Kaki" }
};

// functiom: helper buat acak
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickN(arr,n){return shuffle(arr).slice(0,n);}

/* ---------- 1) PILIHAN GANDA ---------- */
const MCQ = [
  { q:"Siapakah yang sangat mengasihi dan memberkati anak-anak kecil?",
    o:["Tuhan Yesus","Murid-murid","Pengemis"], a:0,
    src:"Markus 10:13-16" },
  { q:"Kisah Yesus memberkati anak-anak terdapat dalam Kitab...",
    o:["Markus 10:13-16","Kejadian 1:1","Mazmur 23"], a:0, src:"Markus 10" },
  { q:"Siapa yang menjadi buta lalu disembuhkan oleh Yesus di Yerikho?",
    o:["Bartimeus","Paulus","Petrus"], a:0, src:"Markus 10:46-52" },
  { q:"Tuhan memberi kita MATA untuk...",
    o:["Melihat ciptaan Allah yang indah","Mendengarkan musik","Berjalan ke sekolah"], a:0 },
  { q:"Anggota tubuh untuk mendengarkan firman Tuhan dan nasihat orang tua adalah...",
    o:["Telinga","Mulut","Hidung"], a:0 },
  { q:"Mengucapkan kata ramah, berdoa, dan bernyanyi pujian menggunakan...",
    o:["Mulut","Kaki","Kepala"], a:0 },
  { q:"Anggota tubuh yang paling sering dipakai kacamata jika tidak terawat adalah...",
    o:["Mata","Telinga","Tangan"], a:0, src:"teka-teki mata" },
  { q:"Tangan diberikan Allah agar kita...",
    o:["Menolong teman dan menulis rapi","Memukul teman","Mencoret dinding"], a:0 },
  { q:"Orang buta dalam Markus 10 berseru kepada Yesus:",
    o:["Yesus, Anak Daud, kasihanilah aku!","Pergilah dari sini!","Aku tidak butuh pertolongan"], a:0 },
  { q:"Merawat tubuh yang bersih dan sehat adalah bentuk...",
    o:["Syukur kita kepada Allah","Kesombongan kita","Kemarahan kita"], a:0 },
  { q:"Allah menciptakan anggota tubuh manusia sebagai...",
    o:["Anugerah yang terindah","Beban yang berat","Hal yang biasa"], a:0 },
  { q:"\"Banyak anggota, tetapi satu tubuh\" adalah pesan dari...",
    o:["1 Korintus 12:14-20","Markus 10","Kejadian 12"], a:0, src:"1 Kor 12" },
  { q:"Yang menciptakan anggota tubuh kita adalah...",
    o:["Tuhan/Allah","Guru","Orang tua"], a:0 },
  { q:"Ketika melihat teman terjatuh, tangan kita sebaiknya digunakan untuk...",
    o:["Menolongnya berdiri","Mendorongnya","Membiarkannya"], a:0 },
  { q:"Semua anggota tubuh di dalam satu tubuh hendaknya...",
    o:["Bekerja sama dengan baik","Saling mengejek","Bekerja sendiri-sendiri"], a:0 },
  { q:"Kita dapat bersyukur kepada Allah dengan cara...",
    o:["Rajin berdoa dan berbuat baik","Bermalas-malasan","Marah-marah"], a:0 },
  { q:"Agar gigi sehat dan tidak berlubang, kita menggosok gigi minimal...",
    o:["2 kali sehari","Seminggu sekali","Tidak pernah"], a:0 },
  { q:"Mata diberi Allah agar digunakan untuk hal yang...",
    o:["Baik dan sopan","Berbahaya","Tidak jelas"], a:0 },
  { q:"Yesus menyembuhkan Bartimeus karena Bartimeus...",
    o:["Percaya/beriman kepada Yesus","Punya banyak uang","Rajin bertanya"], a:0 },
  { q:"Kesehatan tubuh adalah karunia yang sangat...",
    o:["Berharga dari Tuhan","Mahal dan menyedihkan","Biasa saja"], a:0 }
];

/* ---------- 2) BENAR / SALAH (perbuatan baik-buruk) ---------- */
const GOODBAD = [
  { s:"Menggunakan tangan untuk menolong teman yang jatuh.", good:true, b:"Tangan" },
  { s:"Menggunakan kaki untuk menendang teman.", good:false, b:"Kaki" },
  { s:"Menggunakan mulut untuk mengejek teman.", good:false, b:"Mulut" },
  { s:"Menggunakan telinga untuk mendengar nasihat orang tua.", good:true, b:"Telinga" },
  { s:"Mencuci tangan pakai sabun sebelum makan.", good:true, b:"Tangan" },
  { s:"Melihat tayangan yang berbahaya di TV/HP.", good:false, b:"Mata" },
  { s:"Berjalan dengan tenang dan tertib ke sekolah.", good:true, b:"Kaki" },
  { s:"Berdoa dan bernyanyi pujian dengan mulut.", good:true, b:"Mulut" },
  { s:"Berlari-lari di dalam kelas.", good:false, b:"Kaki" },
  { s:"Mencoret-coret dinding dengan tangan.", good:false, b:"Tangan" },
  { s:"Membaca buku pelajaran dan Alkitab dengan mata.", good:true, b:"Mata" },
  { s:"Mendengarkan kata-kata kotor.", good:false, b:"Telinga" },
  { s:"Menggosok gigi pagi dan malam.", good:true, b:"Mulut" },
  { s:"Membiarkan teman yang terjatuh.", good:false, b:"Tangan" },
  { s:"Rutin mandi supaya badan bersih.", good:true, b:"Tubuh" },
  { s:"Mencuci tangan setelah bermain.", good:true, b:"Tangan" }
];

/* ---------- 3) TEKA-TEKI "SIAPAKAH AKU?" ---------- */
const RIDDLE = [
  { d:"Aku suka berbicara yang baik-baik dan berdoa kepada Tuhan. Aku paling senang makan makanan sehat. Siapakah aku?",
    key:"mulut", opts:["mulut","mata","telinga"] },
  { d:"Aku berbentuk bulat. Aku dipakai membaca dan melihat. Aku bisa memakai kacamata. Jangan lama-lama di depan TV/HP ya! Siapakah aku?",
    key:"mata", opts:["mata","mulut","hidung"] },
  { d:"Aku bisa mencium harumnya bunga. Aku juga mencium bau masakan ibu. Siapakah aku?",
    key:"hidung", opts:["hidung","kaki","tangan"] },
  { d:"Setiap pagi aku mendengar ayam berkokok. Aku mendengar suara klakson mobil dan panggilan teman. Siapakah aku?",
    key:"telinga", opts:["telinga","mata","mulut"] },
  { d:"Aku bisa membawamu ke mana pun. Aku bisa berjalan dan berlari. Aku menopang tubuhmu. Siapakah aku?",
    key:"kaki", opts:["kaki","tangan","hidung"] },
  { d:"Aku dipakai menulis, mengambil makanan, dan menolong teman. Aku juga dipakai melipat tangan saat berdoa. Siapakah aku?",
    key:"tangan", opts:["tangan","kaki","telinga"] },
  { d:"Aku dipakai untuk berbicara, bernyanyi, dan makan. Alkitab juga kubaca dengan... eh, itu anggota lain! Aku bicara ramah dan jujur. Siapakah aku?",
    key:"mulut", opts:["mulut","mata","kaki"] }
];

/* ---------- 4) COCOKKAN anggota tubuh <-> fungsi (drag) ---------- */
// Kumpulan pasangan; tiap ronde diambil 4-5 pasang lalu diacak
const MATCH_PAIRS = [
  { k:"mata",   f:"Melihat ciptaan Allah yang indah" },
  { k:"telinga",f:"Mendengarkan firman dan nasihat" },
  { k:"mulut",  f:"Berdoa dan bernyanyi pujian" },
  { k:"tangan", f:"Menolong teman dan menulis rapi" },
  { k:"kaki",   f:"Melangkah tertib ke sekolah" },
  { k:"hidung", f:"Mencium aroma masakan dan bunga" }
];

/* ---------- 5) LENGKAPI KALIMAT ---------- */
const FILL = [
  { t:"Tuhan Yesus memeluk dan memberkati anak-anak karena Yesus sangat ___.",
    o:["mengasihi anak-anak","marah","lelah"], a:0 },
  { t:"Kita mendengarkan firman Tuhan dan lagu pujian menggunakan ___.",
    o:["telinga","kaki","hidung"], a:1 },
  { t:"Melipat tangan dan menutup mata kita lakukan saat sedang ___.",
    o:["bermain","berdoa","berlari"], a:1 },
  { t:"Anggota tubuhku adalah pemberian dari ___.",
    o:["Allah","guru","teman"], a:0 },
  { t:"Semua anggota tubuh hendaknya saling ___.",
    o:["mengejek","melengkapi","bertengkar"], a:1 },
  { t:"Bila ada anggota tubuh yang sakit, sebaiknya kita ___.",
    o:["berobat sampai sembuh","membiarkannya","menyembunyikannya"], a:0 },
  { t:"\"Biarkan anak-anak itu datang kepada-Ku\" adalah ayat dari ___.",
    o:["Markus 10:14","Kejadian 1","Mazmur 23"], a:0 }
];

window.AGAMA_DATA = { BODY, MCQ, GOODBAD, RIDDLE, MATCH_PAIRS, FILL, shuffle, pickN };
