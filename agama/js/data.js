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

/* ======================================================= */
/* ============ BAB 2 : Allah Memberiku Teman ============ */
/* Sumber: Rangkuman Materi BAB II.docx, LKPD BAB 2.docx,
   Lembaran LKPD BAB 2.docx (menu Materi Quintal, Okt 2026).
   Tema: Allah Memberiku Rumah, Sekolah, dan Teman        */
/* ======================================================= */

Object.assign(BODY, {
  rumah:    { emoji:"🏠", name:"Rumah" },
  sekolah:  { emoji:"🏫", name:"Sekolah" },
  keluarga: { emoji:"👨‍👩‍👧", name:"Keluarga" },
  teman2:   { emoji:"🧑‍🤝‍🧑", name:"Teman" },
  guru:     { emoji:"👩‍🏫", name:"Guru" },
  kapsek:   { emoji:"🧑‍💼", name:"Kepala Sekolah" },
  bersih:   { emoji:"🧹", name:"Petugas Kebersihan" },
  keamanan: { emoji:"🛡️", name:"Petugas Keamanan" },
  tukeu:    { emoji:"📋", name:"Tenaga Kependidikan" },
  zakheus:  { emoji:"🌳", name:"Zakheus" },
  murid12:  { emoji:"✝️", name:"Dua Belas Murid" }
});

const MCQ2 = [
  { q:"Setelah bermain, mainan masih berserakan. Apa yang sebaiknya kamu lakukan?",
    o:["Merapikan mainan ke tempatnya","Membiarkannya sampai besok","Menambah mainan di lantai"], a:0, src:"LKPD Bab 2" },
  { q:"Ibu sedang menyiapkan makanan. Bagaimana kamu dapat membantu?",
    o:["Meminta ibu mengerjakan semuanya","Membantu sesuai kemampuan","Mengotori dapur"], a:1, src:"LKPD Bab 2" },
  { q:"Kamu melihat sampah di lantai rumah. Apa tindakan yang baik?",
    o:["Memungut dan membuangnya ke tempat sampah","Membiarkannya karena bukan milikmu","Menendangnya ke bawah meja"], a:0, src:"LKPD Bab 2" },
  { q:"Siapa yang datang berkunjung ke rumah Zakheus?",
    o:["Yesus yang ingin mengunjunginya","Guru yang mengajar di sekolah","Teman yang mengajak bermain"], a:0, src:"Lukas 19:1-10" },
  { q:"Zakheus menerima Yesus dengan hati yang ...",
    o:["gembira dan mau berubah menjadi lebih baik","marah karena Yesus datang","sedih dan menolak"], a:0, src:"Lukas 19" },
  { q:"Zakheus ingin melihat Yesus, tetapi tubuhnya pendek. Apa yang dilakukan Zakheus?",
    o:["Pulang ke rumah","Memanjat pohon","Bersembunyi"], a:1, src:"Lukas 19:3-4" },
  { q:"Kamu melihat petugas kebersihan sedang membersihkan kelas. Sikapmu ...",
    o:["Mengotori lantai lagi","Menertawakannya","Menghormati dan ikut menjaga kebersihan"], a:2, src:"LKPD Bab 2" },
  { q:"Teman tidak membawa pensil, sedangkan kamu mempunyai dua pensil. Apa yang dapat kamu lakukan?",
    o:["Meminjamkan satu pensil kepada teman","Menyembunyikan semua pensil","Mengejek teman"], a:0, src:"LKPD Bab 2" },
  { q:"Ada teman baru duduk sendirian saat istirahat. Apa yang baik kamu lakukan?",
    o:["Mengajaknya bermain bersama","Menjauhinya sepanjang hari","Menyuruhnya pergi"], a:0, src:"LKPD Bab 2" },
  { q:"Teman terjatuh saat bermain. Apa yang sebaiknya kamu lakukan?",
    o:["Menertawakannya bersama teman lain","Menolongnya dan memastikan ia baik-baik saja","Meninggalkannya sendirian"], a:1, src:"LKPD Bab 2" },
  { q:"Kamu tidak sengaja merusak barang milik saudara. Sikap yang baik adalah ...",
    o:["Meminta maaf dan berusaha memperbaikinya","Menyalahkan saudara","Menyembunyikan barang itu"], a:0, src:"LKPD Bab 2" },
  { q:"Bagaimana cara bersyukur atas sekolah yang diberikan Tuhan?",
    o:["Belajar rajin dan menjaga fasilitas sekolah","Mencoret meja dan dinding","Tidak mau mengikuti aturan"], a:0, src:"LKPD Bab 2" },
  { q:"Ketika bertengkar dengan teman, sikap yang sesuai ajaran Yesus adalah ...",
    o:["Menyimpan dendam selamanya","Membalas dengan menyakiti","Mau meminta maaf dan mengampuni"], a:2, src:"LKPD Bab 2" },
  { q:"Berapa jumlah murid yang dipanggil Yesus?",
    o:["Dua belas (12)","Lima belas (15)","Sepuluh (10)"], a:0, src:"Lukas 6:13-16" },
  { q:"Siapakah murid Yesus yang mengkhianati-Nya?",
    o:["Petrus","Yohanes","Yudas Iskariot"], a:2, src:"Lukas 6:16" },
  { q:"Siapa warga sekolah yang memimpin dan mengatur sekolah?",
    o:["Kepala sekolah","Petugas keamanan","Teman"], a:0, src:"Rangkuman Bab 2" },
  { q:"Satu warga sekolah yang bertugas menjaga kebersihan lingkungan sekolah adalah ...",
    o:["petugas kebersihan","kepala sekolah","guru"], a:0, src:"Rangkuman Bab 2" },
  { q:"\"Hormatilah ayah dan ibumu\" adalah Firman Tuhan dalam kitab ...",
    o:["Keluaran 20:12","Markus 10:14","Kejadian 1:1"], a:0, src:"Keluaran 20:12" },
  { q:"Rumah bagi kita adalah anugerah Allah, tempat kita tinggal, beristirahat, belajar, bermain, dan ...",
    o:["berkumpul bersama keluarga","bersepeda ke sekolah","menonton bioskop"], a:0, src:"Rangkuman Bab 2" },
  { q:"Setiap warga sekolah mempunyai tugas yang berbeda, tetapi semuanya bekerja sama agar sekolah menjadi ...",
    o:["tempat yang aman, nyaman, dan menyenangkan","tempat yang sepi","tempat yang berat"], a:0, src:"Rangkuman Bab 2" }
];

const GOODBAD2 = [
  { s:"Menghormati ayah dan ibu.",       b:"rumah",    good:true },
  { s:"Merapikan mainan setelah bermain.", b:"rumah",  good:true },
  { s:"Membantu pekerjaan rumah sesuai kemampuan.", b:"keluarga", good:true },
  { s:"Membuang sampah pada tempatnya.",  b:"sekolah",  good:true },
  { s:"Menyapa guru dengan ramah.",       b:"guru",     good:true },
  { s:"Menolong teman yang kesulitan.",   b:"teman2",   good:true },
  { s:"Menggunakan air secukupnya.",      b:"sekolah",  good:true },
  { s:"Mengejek teman karena berbeda.",   b:"teman2",   good:false },
  { s:"Membuang sampah sembarangan di sekolah.", b:"sekolah", good:false },
  { s:"Bermain saat guru menjelaskan.",   b:"guru",     good:false },
  { s:"Mencoret-coret meja sekolah.",     b:"sekolah",  good:false },
  { s:"Menyimpan dendam kepada teman yang sudah minta maaf.", b:"teman2", good:false }
];

const RIDDLE2 = [
  { d:"Aku tempat kita tinggal, beristirahat, dan berkumpul bersama keluarga. Siapakah aku?",
    key:"rumah", opts:["rumah","sekolah","teman2"] },
  { d:"Aku tempat kita belajar membaca, menulis, berhitung, dan menjadi anak yang baik. Siapakah aku?",
    key:"sekolah", opts:["sekolah","rumah","keluarga"] },
  { d:"Aku mengajar, mendidik, dan membimbing kamu di sekolah. Siapakah aku?",
    key:"guru", opts:["guru","keamanan","bersih"] },
  { d:"Aku memimpin dan mengatur sekolah. Siapakah aku?",
    key:"kapsek", opts:["kapsek","guru","sekolah"] },
  { d:"Tugasku menjaga kebersihan lingkungan sekolah. Siapakah aku?",
    key:"bersih", opts:["bersih","teman2","rumah"] },
  { d:"Tugasku membantu menjaga keamanan sekolah. Siapakah aku?",
    key:"keamanan", opts:["keamanan","bersih","kapsek"] },
  { d:"Karena tubuhku pendek, aku memanjat pohon supaya dapat melihat Yesus. Siapakah aku?",
    key:"zakheus", opts:["zakheus","guru","teman2"] },
  { d:"Kami berdua belas orang, dipanggil Yesus untuk selalu bersama-Nya. Siapakah kami?",
    key:"murid12", opts:["murid12","bersih","keamanan"] }
];

const MATCH_PAIRS2 = [
  { k:"kapsek",   f:"Memimpin dan mengatur sekolah" },
  { k:"guru",     f:"Mengajar dan membimbing kita" },
  { k:"teman2",   f:"Belajar, bermain, dan bekerja sama" },
  { k:"bersih",   f:"Menjaga kebersihan lingkungan sekolah" },
  { k:"keamanan", f:"Menjaga keamanan sekolah" },
  { k:"tukeu",    f:"Membantu kegiatan dan pelayanan sekolah" }
];

const FILL2 = [
  { t:"Rumah adalah tempat kita tinggal bersama ___.",
    o:["keluarga","teman","guru"], a:0 },
  { t:"Kita harus menghormati ayah dan ___.",
    o:["ibu","sekolah","mainan"], a:0 },
  { t:"Setelah bermain, mainan harus kita ___.",
    o:["sembunyikan","rapikan","tambahkan"], a:1 },
  { t:"Yesus datang ke rumah ___.",
    o:["Zakheus","Bartimeus","Petrus"], a:0 },
  { t:"Kita mendengarkan nasihat ___ di sekolah.",
    o:["teman","guru","mainan"], a:1 },
  { t:"Jika teman jatuh, kita sebaiknya ___.",
    o:["menolongnya","menertawakannya","meninggalkannya"], a:0 },
  { t:"Rumah, sekolah, dan teman adalah anugerah dari ___.",
    o:["Tuhan","guru","kepala sekolah"], a:0 },
  { t:"Mempunyai banyak teman membuat kita ___.",
    o:["bahagia","sedih","kesepian"], a:0 },
  { t:"Murid Yesus yang mengkhianati-Nya adalah ___.",
    o:["Yudas Iskariot","Andreas","Filipus"], a:0 },
  { t:"Jumlah murid Yesus ada ___ orang.",
    o:["dua belas","lima","tiga"], a:0 },
  { t:"Sikapku kepada semua warga sekolah adalah bersikap ___.",
    o:["sopan","sombong","gaduh"], a:0 }
];

const AYAT2 = [
  { t:"Hormati Ayah dan Ibu", v:"\"Hormatilah ayah dan ibumu, supaya lambat laun engkau hidup lama dan diberkati di negeri yang diberikan TUHAN, Allahmu, kepadamu.\"", r:"Keluaran 20:12" },
  { t:"Yesus di Rumah Zakheus", v:"\"Yesus berbicara kepada dia: Zakheus, segeralah turun, sebab pada hari ini Aku harus menumpang di rumahmu.\"", r:"Lukas 19:5" },
  { t:"Yesus Memilih Murid", v:"\"Lalu Ia menunjuk dua belas orang supaya selalu bersama-sama dengan Ia dan supaya Ia dapat mengutus mereka untuk memberitakan Injil.\"", r:"Markus 3:14" },
  { t:"Semua adalah Anugerah Allah", v:"\"Segala pemberian yang baik dan segala anugerah yang sempurna turun dari atas, yaitu dari Bapa.\"", r:"Yakobus 1:17a" }
];

const AYAT1 = [
  { t:"Allah Mengasihi Saya", v:"\"Biarkan anak-anak itu datang kepada-Ku, jangan menghalang-halangi mereka, sebab orang-orang yang seperti itulah yang empunya Kerajaan Allah.\"", r:"Markus 10:14b" },
  { t:"Anggota Tubuh & Fungsinya", v:"\"Tetapi Allah telah memberikan kepada anggota, masing-masing secara khusus, suatu tempat pada tubuh, seperti yang dikehendaki-Nya.\"", r:"1 Korintus 12:18" },
  { t:"Aku Merawat Tubuhku", v:"\"Aku bersyukur kepada-Mu oleh karena kejadianku dahsyat dan ajaib.\"", r:"Mazmur 139:14a" },
  { t:"Yesus Menyembuhkan Bartimeus", v:"\"Pergilah, imanmu telah menyelamatkan engkau. Pada saat itu juga melihatlah ia, lalu ia mengikuti Yesus dalam perjalanannya.\"", r:"Markus 10:52" }
];

/* Unit data per bab: engine dan home screen membaca ini */
window.AGAMA_UNITS = [
  { id:"bab1", label:"Bab 1 · Aku Bersyukur",
    sub:"Aku Bersyukur & Bangga Menjadi Diriku",
    zh:"Allah Mencintaiku • Anggota Tubuh • Aku Merawat Tubuhku",
    data:{ BODY:BODY, MCQ:MCQ, GOODBAD:GOODBAD, RIDDLE:RIDDLE, MATCH_PAIRS:MATCH_PAIRS, FILL:FILL, shuffle:shuffle, pickN:pickN },
    ayat:AYAT1,
    matchPrompt:"Seret / tap untuk mencocokkan anggota tubuh dengan fungsinya",
    colL:"Anggota Tubuh", colR:"Fungsi" },
  { id:"bab2", label:"Bab 2 · Allah Memberiku Teman",
    sub:"Allah Memberiku Rumah, Sekolah, dan Teman",
    zh:"Mengenal Warga Sekolah • Zakheus • Dua Belas Murid Yesus",
    data:{ BODY:BODY, MCQ:MCQ2, GOODBAD:GOODBAD2, RIDDLE:RIDDLE2, MATCH_PAIRS:MATCH_PAIRS2, FILL:FILL2, shuffle:shuffle, pickN:pickN },
    ayat:AYAT2,
    matchPrompt:"Tap warga sekolah di kiri, lalu tap tugasnya di kanan",
    colL:"Warga Sekolah", colR:"Tugasnya" }
];

window.AGAMA_DATA = { BODY, MCQ, GOODBAD, RIDDLE, MATCH_PAIRS, FILL, shuffle, pickN };
