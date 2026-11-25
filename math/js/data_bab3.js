/* ===== MATEMATIKA — Bank Soal Bab 3: Berbagai Bentuk Benda =====
   Sumber:
   1) "Matematika bab 3.pdf" — buku ESPS Matematika SD/MI Kelas I, Bab 3
      (segitiga, segi empat, lingkaran, mengelompokkan benda menurut bentuk/
      warna/ukuran, pengubinan, tangram).
   2) "15_Matematika_BAB3_LatihanSoal.pdf" — LATIHAN SOAL BAB 3 SD Stella Maris
      T.P. 2026/2027, 5 pilihan ganda + 5 isian + 3 uraian.
   Semua soal bergambar dari lembar latihan diterjemahkan ke teks/emoji supaya
   bisa dijawab tanpa gambar (bentuk benda disebut apa adanya).
*/

/* ---------- 0) MATERI (layar belajar) ---------- */
const MATERI3 = [
  { t:"Benda Berbentuk Segitiga",
    isi:["Segitiga adalah bangun datar yang memiliki 3 sisi dan 3 sudut.",
         "Benda di sekitar kita ada yang permukaannya berbentuk segitiga.",
         "Contohnya penggaris segitiga, bendera, dan potongan semangka."],
    contoh:["🔺 3 sisi lurus dan 3 titik sudut.",
            "Batang korek api: 1 segitiga = 3 batang, 2 segitiga = 5 batang.",
            "3 segitiga = 7 batang, 4 segitiga = 9 batang."] },

  { t:"Benda Berbentuk Segi Empat",
    isi:["Segi empat adalah bangun datar yang memiliki 4 sisi dan 4 sudut.",
         "Persegi dan persegi panjang termasuk segi empat.",
         "Jendela, permukaan buku, dan bingkai foto berbentuk segi empat."],
    contoh:["🟦 4 sisi lurus dan 4 titik sudut.",
            "Permukaan buku tulis → segi empat.",
            "Bingkai foto → segi empat."] },

  { t:"Benda Berbentuk Lingkaran",
    isi:["Lingkaran memiliki satu sisi lengkung dan tidak memiliki sudut.",
         "Uang koin, roda sepeda, piring, dan jam dinding berbentuk lingkaran.",
         "Lingkaran tidak punya titik sudut sama sekali."],
    contoh:["⭕ 1 sisi lengkung, 0 sudut.",
            "Uang koin dan roda sepeda → sama-sama lingkaran.",
            "Jam dinding dan piring → lingkaran."] },

  { t:"Mengelompokkan Benda",
    isi:["Benda dapat dikelompokkan menurut bentuk, warna, atau ukuran.",
         "Menurut bentuk: kelompok segitiga, segi empat, dan lingkaran.",
         "Menurut warna: kelompok merah, kuning, biru, dan sebagainya."],
    contoh:["Menurut ukuran: lemari, mobil, kulkas, rumah → benda besar.",
            "Uang koin, klip kertas, penghapus, kelereng → benda kecil.",
            "Semangka besar, anggur kecil."] },

  { t:"Pengubinan",
    isi:["Pengubinan adalah menyusun bangun datar tanpa celah dan tidak saling tindih.",
         "Pengubinan bisa memakai satu jenis bangun datar saja.",
         "Pengubinan juga bisa memakai beberapa jenis bangun datar sekaligus."],
    contoh:["Ubin lantai → pengubinan segi empat.",
            "Ventilasi udara → pengubinan segitiga dan segi empat.",
            "Satu segi empat dapat dibentuk dari dua segitiga."] },

  { t:"Tangram",
    isi:["Tangram terdiri atas tujuh bangun datar.",
         "Tangram memiliki lima segitiga dan dua segi empat.",
         "Bangun datar itu disusun menyerupai hewan, manusia, atau benda."],
    contoh:["🖼️ 7 keping = 5 segitiga + 2 segi empat.",
            "Bentuk yang dapat dibuat: ikan, kelinci, pohon, kupu-kupu.",
            "Semua kepingan dipakai, tidak boleh ada yang tumpang tindih."] }
];

/* ---------- 1) PILIHAN GANDA ---------- */
const MCQ3 = [
  // --- dari lembar LATIHAN SOAL BAB 3 (soal 1-5) ---
  { q:"Benda berikut yang memiliki satu sisi adalah…",
    o:["piring (lingkaran)","penggaris segitiga","jendela (segi empat)"], a:0, k:"b3-sisi-1" },
  { q:"Roda mobil berbentuk lingkaran. Benda yang bentuknya sama dengan roda mobil adalah…",
    o:["bendera","piring","bingkai foto"], a:1, k:"b3-roda" },
  { q:"Pasangan benda yang memiliki bentuk yang sama adalah…",
    o:["permukaan buku dan uang koin","uang kertas dan uang koin","uang koin dan roda sepeda"],
    a:2, k:"b3-pasangan" },
  { q:"Sebuah pengubinan tersusun dari kotak segi empat dan kotak yang dibelah diagonal menjadi segitiga. Pengubinan tersebut menggunakan bangun datar…",
    o:["segitiga dan segi empat","hanya segi empat","hanya segitiga"], a:0, k:"b3-ubin-campur" },
  { q:"Pengubinan dengan satu bentuk bangun datar adalah…",
    o:["pola berisi trapesium saja","pola segi empat dan segitiga","pola persegi panjang dan segitiga"],
    a:0, k:"b3-ubin-satu" },

  // --- dari lembar: isian & uraian yang dijadikan pilihan ganda ---
  { q:"Penggaris segitiga memiliki permukaan berbentuk…",
    o:["segitiga","segi empat","lingkaran"], a:0, k:"b3-penggaris" },
  { q:"Bangun datar yang memiliki 4 sisi dan 4 sudut adalah…",
    o:["segitiga","segi empat","lingkaran"], a:1, k:"b3-4sisi" },
  { q:"Piring, ban mobil, dan jam dinding termasuk kelompok benda berbentuk…",
    o:["segitiga","segi empat","lingkaran"], a:2, k:"b3-kelompok-ling" },
  { q:"Sebuah pengubinan memakai kotak segi empat biru dan kepingan segitiga kuning. Pengubinan itu menggunakan…",
    o:["1 jenis bangun datar","2 jenis bangun datar","3 jenis bangun datar"], a:1, k:"b3-2jenis" },
  { q:"Susunan tangram berbentuk kupu-kupu terdiri dari 7 kepingan. Banyak segitiga pada susunan itu ada…",
    o:["4","5","6"], a:1, k:"b3-tangram-segitiga" },
  { q:"Benda yang permukaannya berbentuk lingkaran adalah…",
    o:["uang koin","permukaan buku","penggaris segitiga"], a:0, k:"b3-koin" },
  { q:"Salah satu ciri bangun datar lingkaran adalah…",
    o:["memiliki 4 sudut","memiliki satu sisi lengkung","memiliki 3 sisi lurus"], a:1, k:"b3-ciri-ling" },
  { q:"Pengubinan yang memakai persegi dan segitiga adalah…",
    o:["ubin biru dan segitiga hijau","hanya ubin biru","hanya segitiga hijau"], a:0, k:"b3-ubin-persegi-segitiga" },

  // --- dari buku ESPS bab 3 ---
  { q:"Banyak sisi pada bangun segitiga adalah…",
    o:["2","3","4"], a:1, k:"b3-sisi-segitiga" },
  { q:"Banyak titik sudut pada bangun segi empat adalah…",
    o:["3","4","5"], a:1, k:"b3-sudut-segiempat" },
  { q:"Benda-benda berikut yang berukuran besar adalah…",
    o:["lemari","kelereng","penghapus"], a:0, k:"b3-besar" },
  { q:"Benda-benda berikut yang berukuran kecil adalah…",
    o:["kulkas","klip kertas","rumah"], a:1, k:"b3-kecil" },
  { q:"Lapangan sepak bola berbentuk…",
    o:["segitiga","segi empat","lingkaran"], a:1, k:"b3-lapangan" },
  { q:"Di tengah lapangan sepak bola terdapat garis berbentuk…",
    o:["lingkaran","segitiga","segi empat"], a:0, k:"b3-garis-tengah" },
  { q:"Benda yang bentuknya seperti lapangan sepak bola adalah…",
    o:["kelereng","bola sepak","buku tulis"], a:2, k:"b3-seperti-lapangan" },
  { q:"Pengubinan adalah penyusunan bangun datar yang…",
    o:["tanpa celah dan tidak saling tindih","saling menumpuk","diberi jarak"], a:0, k:"b3-arti-ubin" },
  { q:"Tangram terdiri atas…bangun datar.",
    o:["lima","enam","tujuh"], a:2, k:"b3-tangram-7" },
  { q:"Tangram memiliki…segitiga.",
    o:["lima","tiga","tujuh"], a:0, k:"b3-tangram-5segitiga" },
  { q:"Tangram memiliki…segi empat.",
    o:["dua","empat","lima"], a:0, k:"b3-tangram-2segiempat" },
  { q:"Satu segi empat dapat dibentuk dari…segitiga.",
    o:["dua","tiga","empat"], a:0, k:"b3-1segi-2segitiga" },
  { q:"Sebuah pengubinan menggunakan 4 segi empat. Jika satu segi empat dibuat dari tiga segitiga, banyak segitiga yang diperlukan ada…",
    o:["7","12","9"], a:1, k:"b3-4segi-3segitiga" },
  { q:"Untuk menyusun 3 segitiga dari batang korek api diperlukan…batang.",
    o:["6","7","9"], a:1, k:"b3-korek-3" },
  { q:"Untuk menyusun 5 segitiga dari batang korek api diperlukan…batang.",
    o:["9","10","15"], a:0, k:"b3-korek-5" },
  { q:"Benda yang permukaannya berbentuk segi empat adalah…",
    o:["jendela","uang koin","penggaris segitiga"], a:0, k:"b3-jendela" },
  { q:"Benda yang TIDAK berbentuk segi empat adalah…",
    o:["permukaan buku","bingkai foto","uang koin"], a:2, k:"b3-bukan-segiempat" },
  { q:"Kelompok benda berwarna merah disebut pengelompokan benda berdasarkan…",
    o:["bentuk","warna","ukuran"], a:1, k:"b3-kelompok-warna" },
  { q:"Lemari, mobil, dan rumah dikelompokkan berdasarkan…",
    o:["ukuran besar","warna","bentuk segitiga"], a:0, k:"b3-kelompok-ukuran" },
  { q:"Benda berukuran kecil di antara semangka dan anggur adalah…",
    o:["semangka","anggur","keduanya besar"], a:1, k:"b3-semangka-anggur" }
];

/* ---------- 2) BENAR / SALAH ---------- */
const BENARSALAH3 = [
  { s:"Lingkaran memiliki satu sisi lengkung.", b:true, emoji:"⭕", k:"b3-ciri-ling" },
  { s:"Segitiga memiliki 4 sisi.", b:false, emoji:"🔺", k:"b3-sisi-segitiga" },
  { s:"Segi empat memiliki 4 titik sudut.", b:true, emoji:"🟦", k:"b3-sudut-segiempat" },
  { s:"Uang koin dan roda sepeda memiliki bentuk yang sama.", b:true, emoji:"🪙", k:"b3-pasangan" },
  { s:"Uang kertas berbentuk lingkaran.", b:false, emoji:"💵", k:"b3-kertas" },
  { s:"Permukaan buku tulis berbentuk segi empat.", b:true, emoji:"📕", k:"b3-buku" },
  { s:"Penggaris segitiga berbentuk segi empat.", b:false, emoji:"📐", k:"b3-penggaris" },
  { s:"Lingkaran memiliki titik sudut.", b:false, emoji:"⭕", k:"b3-ciri-ling" },
  { s:"Pengubinan disusun tanpa celah dan tidak saling tindih.", b:true, emoji:"🧱", k:"b3-arti-ubin" },
  { s:"Pengubinan hanya boleh memakai satu jenis bangun datar.", b:false, emoji:"🧱", k:"b3-2jenis" },
  { s:"Tangram terdiri atas tujuh bangun datar.", b:true, emoji:"🖼️", k:"b3-tangram-7" },
  { s:"Tangram memiliki lima segi empat.", b:false, emoji:"🖼️", k:"b3-tangram-2segiempat" },
  { s:"Satu segi empat dapat dibentuk dari dua segitiga.", b:true, emoji:"🔺", k:"b3-1segi-2segitiga" },
  { s:"Lemari termasuk benda berukuran kecil.", b:false, emoji:"🚪", k:"b3-besar" },
  { s:"Kelereng termasuk benda berukuran kecil.", b:true, emoji:"⚪", k:"b3-kecil" },
  { s:"Lapangan sepak bola berbentuk segi empat.", b:true, emoji:"⚽", k:"b3-lapangan" },
  { s:"Bola sepak berbentuk seperti lapangan sepak bola.", b:false, emoji:"⚽", k:"b3-seperti-lapangan" },
  { s:"Benda dapat dikelompokkan menurut bentuk, warna, dan ukuran.", b:true, emoji:"📦", k:"b3-kelompok-warna" },
  { s:"Piring dan jam dinding berbentuk segitiga.", b:false, emoji:"🍽️", k:"b3-kelompok-ling" },
  { s:"Jendela termasuk benda berbentuk segi empat.", b:true, emoji:"🪟", k:"b3-jendela" }
];

/* ---------- 3) TEKA-TEKI "SIAPAKAH AKU?" ---------- */
const RIDDLE3 = [
  { d:"Aku bangun datar dengan 3 sisi dan 3 sudut. Siapakah aku?", o:["segitiga","segi empat","lingkaran"], a:0, k:"b3-sisi-segitiga" },
  { d:"Aku bangun datar dengan 4 sisi dan 4 sudut. Siapakah aku?", o:["segitiga","segi empat","lingkaran"], a:1, k:"b3-4sisi" },
  { d:"Aku punya satu sisi lengkung dan tidak punya sudut. Siapakah aku?", o:["segitiga","segi empat","lingkaran"], a:2, k:"b3-ciri-ling" },
  { d:"Aku benda berbentuk lingkaran yang biasa jadi uang kembalian. Siapakah aku?", o:["uang koin","uang kertas","buku tulis"], a:0, k:"b3-koin" },
  { d:"Aku benda berbentuk lingkaran dan kupakai pada sepeda. Siapakah aku?", o:["roda sepeda","bendera","jendela"], a:0, k:"b3-roda" },
  { d:"Aku berbentuk segi empat dan biasa dipakai untuk menulis di kelas. Siapakah aku?", o:["buku tulis","piring","uang koin"], a:0, k:"b3-buku" },
  { d:"Aku berbentuk segitiga dan dipakai untuk menggambar garis lurus. Siapakah aku?", o:["penggaris segitiga","jam dinding","lemari"], a:0, k:"b3-penggaris" },
  { d:"Aku benda berbentuk lingkaran yang menunjukkan waktu. Siapakah aku?", o:["jam dinding","jendela","buku"], a:0, k:"b3-jam" },
  { d:"Aku susunan bangun datar tanpa celah dan tidak saling tindih. Siapakah aku?", o:["pengubinan","tangram","segitiga"], a:0, k:"b3-arti-ubin" },
  { d:"Aku terdiri atas tujuh bangun datar, lima segitiga dan dua segi empat. Siapakah aku?", o:["tangram","pengubinan","jendela"], a:0, k:"b3-tangram-7" },
  { d:"Aku berbentuk segi empat dan biasa dipasang di dinding rumah untuk melihat ke luar. Siapakah aku?", o:["jendela","piring","uang koin"], a:0, k:"b3-jendela" },
  { d:"Aku benda berukuran besar, berisi makanan, dan ada di dapur. Siapakah aku?", o:["kulkas","kelereng","klip kertas"], a:0, k:"b3-besar" }
];

/* ---------- 4) COCOKKAN (tap / seret) ---------- */
const MATCH_SETS3 = [
  { key:"bentuk-benda", label:"Cocokkan benda dengan bentuk permukaannya", lc:"Benda", rc:"Bentuk", per:2, bonus:2,
    auto:[
      {l:"penggaris segitiga",r:"segitiga"},
      {l:"permukaan buku",r:"segi empat"},
      {l:"uang koin",r:"lingkaran"},
      {l:"jendela",r:"segi empat"},
      {l:"roda sepeda",r:"lingkaran"},
      {l:"bendera",r:"segitiga"},
      {l:"jam dinding",r:"lingkaran"},
      {l:"bingkai foto",r:"segi empat"},
      {l:"piring",r:"lingkaran"},
      {l:"potongan semangka",r:"segitiga"}
    ] },
  { key:"ciri-bangun", label:"Cocokkan bangun datar dengan ciri-cirinya", lc:"Bangun", rc:"Ciri", per:2, bonus:2,
    auto:[
      {l:"segitiga",r:"3 sisi dan 3 sudut"},
      {l:"segi empat",r:"4 sisi dan 4 sudut"},
      {l:"lingkaran",r:"1 sisi lengkung"},
      {l:"persegi",r:"4 sisi sama panjang"}
    ] },
  { key:"ukuran", label:"Cocokkan benda dengan ukurannya", lc:"Benda", rc:"Ukuran", per:2, bonus:2,
    auto:[
      {l:"lemari",r:"besar"},
      {l:"kelereng",r:"kecil"},
      {l:"rumah",r:"besar"},
      {l:"penghapus",r:"kecil"},
      {l:"mobil",r:"besar"},
      {l:"klip kertas",r:"kecil"},
      {l:"kulkas",r:"besar"},
      {l:"uang koin",r:"kecil"}
    ] }
];

/* ---------- 5) LENGKAPI ---------- */
const FILL3 = [
  { t:"Segitiga memiliki ____ sisi.", o:["3","4","1"], a:0, k:"b3-sisi-segitiga" },
  { t:"Segi empat memiliki ____ titik sudut.", o:["4","3","2"], a:0, k:"b3-sudut-segiempat" },
  { t:"Lingkaran memiliki ____ sisi lengkung.", o:["1","2","4"], a:0, k:"b3-ciri-ling" },
  { t:"Permukaan buku tulis berbentuk ____.", o:["segi empat","segitiga","lingkaran"], a:0, k:"b3-buku" },
  { t:"Uang koin berbentuk ____.", o:["lingkaran","segitiga","segi empat"], a:0, k:"b3-koin" },
  { t:"Penggaris segitiga berbentuk ____.", o:["segitiga","segi empat","lingkaran"], a:0, k:"b3-penggaris" },
  { t:"Tangram terdiri atas ____ bangun datar.", o:["7","5","4"], a:0, k:"b3-tangram-7" },
  { t:"Tangram memiliki ____ segitiga.", o:["5","2","7"], a:0, k:"b3-tangram-5segitiga" },
  { t:"Tangram memiliki ____ segi empat.", o:["2","5","7"], a:0, k:"b3-tangram-2segiempat" },
  { t:"Satu segi empat dapat dibentuk dari ____ segitiga.", o:["2","3","4"], a:0, k:"b3-1segi-2segitiga" },
  { t:"Pengubinan disusun tanpa ____ dan tidak saling tindih.", o:["celah","warna","sudut"], a:0, k:"b3-arti-ubin" },
  { t:"Lapangan sepak bola berbentuk ____.", o:["segi empat","segitiga","lingkaran"], a:0, k:"b3-lapangan" },
  { t:"Lemari dan mobil termasuk benda berukuran ____.", o:["besar","kecil","sedang"], a:0, k:"b3-besar" },
  { t:"Kelereng dan penghapus termasuk benda berukuran ____.", o:["kecil","besar","sama"], a:0, k:"b3-kecil" },
  { t:"Benda berwarna merah dan benda berwarna biru dikelompokkan menurut ____.", o:["warna","bentuk","ukuran"], a:0, k:"b3-kelompok-warna" },
  { t:"Untuk menyusun 3 segitiga dari batang korek api diperlukan ____ batang.", o:["7","3","9"], a:0, k:"b3-korek-3" },
  { t:"Untuk menyusun 5 segitiga dari batang korek api diperlukan ____ batang.", o:["9","5","15"], a:0, k:"b3-korek-5" },
  { t:"Banyak segitiga pada tangram kupu-kupu ada ____.", o:["5","2","7"], a:0, k:"b3-tangram-segitiga" },
  { t:"Bangun datar yang tidak memiliki sudut adalah ____.", o:["lingkaran","segitiga","segi empat"], a:0, k:"b3-ciri-ling" },
  { t:"Empat segi empat yang masing-masing dibuat dari 3 segitiga memerlukan ____ segitiga.", o:["12","7","9"], a:0, k:"b3-4segi-3segitiga" }
];

/* ---------- 6) SOAL CERITA ---------- */
const CERITA3 = [
  { t:"Nara melihat uang koin dan roda sepeda. Keduanya memiliki bentuk yang sama. Bentuk apakah itu?",
    o:["lingkaran","segitiga","segi empat"], a:0, k:"b3-pasangan" },
  { t:"Boni memegang penggaris segitiga. Permukaan penggaris itu berbentuk…",
    o:["segitiga","segi empat","lingkaran"], a:0, k:"b3-penggaris" },
  { t:"Ibu memasang ubin di lantai tanpa celah dan tidak saling tindih. Kegiatan itu disebut…",
    o:["pengubinan","pengelompokan","pengurangan"], a:0, k:"b3-arti-ubin" },
  { t:"Rafa memasang jendela di rumahnya. Permukaan jendela berbentuk…",
    o:["segi empat","lingkaran","segitiga"], a:0, k:"b3-jendela" },
  { t:"Siti menyusun tangram menjadi bentuk kupu-kupu. Jumlah kepingan tangram ada…",
    o:["7","5","4"], a:0, k:"b3-tangram-7" },
  { t:"Adi mengelompokkan lemari, mobil, dan rumah menjadi satu kelompok. Pengelompokan itu berdasarkan…",
    o:["ukuran besar","warna","bentuk"], a:0, k:"b3-besar" },
  { t:"Dewi mengelompokkan kelereng, klip kertas, dan penghapus. Pengelompokan itu berdasarkan…",
    o:["ukuran kecil","warna","bentuk segitiga"], a:0, k:"b3-kecil" },
  { t:"Ana melihat jam dinding di kelas. Permukaan jam itu berbentuk…",
    o:["lingkaran","segitiga","segi empat"], a:0, k:"b3-jam" },
  { t:"Beni menyusun 4 segitiga dari batang korek api. Batang yang diperlukan ada…",
    o:["9","4","12"], a:0, k:"b3-korek-4" },
  { t:"Tono melihat ventilasi udara yang tersusun dari segitiga dan segi empat. Susunan itu adalah…",
    o:["pengubinan","tangram","pengurangan"], a:0, k:"b3-ubin-campur" },
  { t:"Ali menemukan bendera berbentuk segitiga. Berapa sudut pada bendera itu?",
    o:["3","4","1"], a:0, k:"b3-sisi-segitiga" },
  { t:"Rina melihat semangka dan anggur di meja. Buah yang berukuran kecil adalah…",
    o:["anggur","semangka","keduanya besar"], a:0, k:"b3-semangka-anggur" }
];

window.MATH_BAB3 = {
  MATERI: MATERI3, MCQ: MCQ3, BENARSALAH: BENARSALAH3, RIDDLE: RIDDLE3,
  MATCH_SETS: MATCH_SETS3, MATCH_PAIRS: 4, FILL: FILL3, CERITA: CERITA3
};
