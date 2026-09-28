/* ===== KUIS PANCASILA — Bank Soal & Data =====
   Sumber: soal wordwall.docx (Gambar) + FORMATIF P.PANCASILA BAB 1
   (SD Stella Maris, Pendidikan Pancasila Kelas 1 — T.P. 2026/2027) */

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickN(arr,n){return shuffle(arr.slice(0,n));}

/* ===== 5 SILA PANCASILA =====
   n = urutan (nomor);  t = bunyi (kata-kata sila);  m = nama lambang;  s = gambar lambang (SVG) */
const SILA = [
  { n:1,
    t:"Ketuhanan Yang Maha Esa",
    m:"Bintang",
    s:'<img class="sym" src="symbols/sila1_bintang.svg" alt="Bintang">' },
  { n:2,
    t:"Kemanusiaan yang Adil dan Beradab",
    m:"Rantai",
    s:'<img class="sym" src="symbols/sila2_rantai.svg" alt="Rantai">' },
  { n:3,
    t:"Persatuan Indonesia",
    m:"Pohon Beringin",
    s:'<img class="sym" src="symbols/sila3_beringin.svg" alt="Pohon Beringin">' },
  { n:4,
    t:"Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
    m:"Kepala Banteng",
    s:'<img class="sym" src="symbols/sila4_banteng.svg" alt="Kepala Banteng">' },
  { n:5,
    t:"Keadilan Sosial bagi Seluruh Rakyat Indonesia",
    m:"Padi dan Kapas",
    s:'<img class="sym" src="symbols/sila5_padikapas.svg" alt="Padi dan Kapas">' }
];

/* ---------- BANK SOAL (PG / Lengkapi) ----------
   mode: "mcq" => pilihan ganda, "fill" => lengkapi,
   "both" => diacak jenisnya tiap sesi (konten dipilih maksimal sekali per sesi, jadi TIDAK ngulang;(
   Tiap pertanyaan unik muncul sekali; dipakai bareng bank tunggal dengan pop(). */
const BANK = [
  { q:"Garuda Pancasila berwarna ____.", o:["kuning keemasan","merah muda","coklat"], a:0, mode:"both" },
  { q:"Lambang negara Indonesia adalah ____.", o:["Garuda Pancasila","Bhinneka Tunggal Ika","Pohon Beringin"], a:0, mode:"both" },
  { q:"Lagu Kebangsaan Indonesia adalah ____.", o:["Indonesia Pusaka","Indonesia Raya","Indonesia Merdeka"], a:1, mode:"both" },
  { q:"Pancasila memiliki ____ sila.", o:["tiga (3)","empat (4)","lima (5)"], a:2, mode:"both" },
　 { q:"Simbol sila kelima(5) Pancasila adalah ____.", o:["Padi dan Kapas","Kepala Banteng","Bintang"], a:0, mode:"both" },
　 { q:"Bintang adalah lambang sila ke ____ Pancasila.", o:["satu (1)","dua (2)","tiga (3)"], a:0, mode:"both" },
　 { q:"Berdoa sebelum tidur merupakan penerapan sila ke ____ Pancasila.", o:["satu (1)","dua (2)","tiga (3)"], a:0, mode:"mcq" },
　 { q:"Bermusyawarah sebelum bermain adalah penerapan sila ke ____ Pancasila.", o:["dua (2)","tiga (3)","empat (4)"], a:2, mode:"mcq" },
　 { q:"Membeli produk dalam negeri adalah contoh sila ke ____ Pancasila.", o:["satu (1)","tiga (3)","lima (5)"], a:1, mode:"mcq" },
　 { q:"Simbol sila kedua(2) Pancasila adalah ____.", o:["Bintang","Rantai","Pohon Beringin"], a:1, mode:"mcq" },
　 { q:"Keadilan Sosial bagi Seluruh Rakyat Indonesia adalah bunyi sila ke ____.", o:["tiga (3)","empat (4)","lima (5)"], a:2, mode:"mcq" },
　 { q:"Berlaku adil kepada setiap orang merupakan penerapan sila ke ____.", o:["tiga (3)","empat (4)","lima (5)"], a:2, mode:"mcq" },
　 { q:"Rajin berdoa adalah contoh penerapan sila ke ____.", o:["satu (1)","empat (4)","lima (5)"], a:0, mode:"mcq" },
　 { q:"Mengantre dengan tertib mencerminkan sila ke ____.", o:["dua (2)","empat (4)","lima (5)"], a:2, mode:"mcq" },
　 { q:"Tokoh yang menjahit Bendera Pusaka adalah ____.", o:["Ibu Sukmawati","Ibu Fatmawati","Ibu Rahmawati"], a:1, mode:"mcq" },
　 { q:"Simbol sila pertama(1) Pancasila adalah ____.", o:["Bintang","Rantai","Pohon Beringin"], a:0, mode:"fill" },
{ q:"Bermusyawarah untuk mencapai mufakat adalah sila ke ____.", o:["empat (4)","dua (2)","lima (5)"], a:0, mode:"fill" },
  /* ===== tambahan dari materi "Pancasila bab 1.pdf" ===== */
  { q:"Tulisan pada pita yang dicengkeram kaki Garuda Pancasila adalah ____.", o:["Bhinneka Tunggal Ika","Garuda Pancasila","Indonesia Raya"], a:0, mode:"mcq" },
  { q:"Arti \"Bhinneka Tunggal Ika\" adalah ____.", o:["berbeda-beda tetapi tetap satu","semua orang sama","satu warna saja"], a:0, mode:"mcq" },
  { q:"Simbol-simbol sila Pancasila terdapat pada ____ Garuda.", o:["perisai","pita","cakar"], a:0, mode:"mcq" },
  { q:"Jumlah bulu pada sayap burung Garuda Pancasila adalah ____ helai.", o:["17","8","19"], a:0, mode:"mcq" },
  { q:"Jumlah bulu pada ekor burung Garuda Pancasila adalah ____ helai.", o:["8","17","45"], a:0, mode:"mcq" },
  { q:"Jumlah bulu pada leher burung Garuda Pancasila adalah ____ helai.", o:["45","19","17"], a:0, mode:"mcq" },
  { q:"Jumlah bulu pada pangkal ekor burung Garuda Pancasila adalah ____ helai.", o:["19","8","45"], a:0, mode:"mcq" },
  { q:"Indonesia merdeka pada tanggal ____.", o:["17 Agustus 1945","28 Oktober 1928","20 Mei 1908"], a:0, mode:"mcq" },
  { q:"Warna merah pada bendera Indonesia berarti ____.", o:["berani","suci","damai"], a:0, mode:"mcq" },
  { q:"Warna putih pada bendera Indonesia berarti ____.", o:["suci","berani","kuat"], a:0, mode:"mcq" },
  { q:"Bendera Indonesia disebut juga Sang ____.", o:["Dwiwarna","Saka","Pusaka"], a:0, mode:"mcq" },
  { q:"Pencipta lagu \"Indonesia Raya\" adalah ____.", o:["W.R. Supratman","Ibu Fatmawati","Sukarno"], a:0, mode:"mcq" },
  { q:"Lagu \"Indonesia Raya\" pertama kali dimainkan pada ____.", o:["28 Oktober 1928","17 Agustus 1945","20 Mei 1908"], a:0, mode:"mcq" },
  { q:"Lagu \"Indonesia Raya\" pertama kali dimainkan menggunakan alat musik ____.", o:["biola","gitar","piano"], a:0, mode:"mcq" },
  { q:"Jumlah mata rantai pada simbol sila kedua Pancasila adalah ____.", o:["17","18","19"], a:0, mode:"mcq" },
  { q:"Garis hitam tebal pada perisai Garuda Pancasila melambangkan ____.", o:["garis khatulistiwa","garis pantai","garis batas"], a:0, mode:"mcq" },
  { q:"Simbol sila ketiga Pancasila adalah ____.", o:["Pohon Beringin","Kepala Banteng","Bintang"], a:0, mode:"mcq" },
  { q:"Simbol sila keempat Pancasila adalah ____.", o:["Kepala Banteng","Padi dan Kapas","Rantai"], a:0, mode:"mcq" },
  { q:"Menabung sisa uang jajan merupakan penerapan sila ke ____.", o:["lima (5)","dua (2)","empat (4)"], a:0, mode:"mcq" },
  { q:"Menghormati teman yang berbeda agama merupakan penerapan sila ke ____.", o:["satu (1)","dua (2)","tiga (3)"], a:0, mode:"mcq" },
  { q:"Bangga memakai batik merupakan penerapan sila ke ____.", o:["tiga (3)","satu (1)","lima (5)"], a:0, mode:"mcq" },
  { q:"Mengangkat tangan sebelum berpendapat merupakan penerapan sila ke ____.", o:["empat (4)","dua (2)","lima (5)"], a:0, mode:"mcq" },
  { q:"Memberi sumbangan kepada korban banjir merupakan penerapan sila ke ____.", o:["dua (2)","satu (1)","empat (4)"], a:0, mode:"mcq" }
];

/* ===== SOAL COCOKKAN (MATCH) =====
   Gabungkan 4 wujud sila Pancasila:  urutan (nomor) — kata-kata (bunyi) —
   lambang (nama) — gambar lambang.
   Tiap schema = satu kombinasi dari 2 wujud itu, kelima sila dipasangkan. */
const MATCH_SCHEMAS = [
  { key:"order",   label:"Cocokkan Bunyi Sila dengan Urutannya",
    lbl:"Kata-kata sila",   b:"Urutan",
    l:"t",                      r:"n" },
  { key:"lambang",label:"Cocokkan Bunyi Sila dengan Lambangnya",
    lbl:"Kata-kata sila",   b:"Lambang",
    l:"t",                      r:"m" },
  { key:"gambar", label:"Cocokkan Bunyi Sila dengan Gambar Lambang",
    lbl:"Kata-kata sila",   b:"Gambar lambang",
    l:"t",                      r:"s" },
  { key:"order-t", label:"Cocokkan Urutan dengan Bunyi Silanya",
    lbl:"Urutan",             b:"Kata-kata sila",
    l:"n",                      r:"t" },
  { key:"lambang-t", label:"Cocokkan Nama Lambang dengan Bunyi Silanya",
    lbl:"Nama lambang",     b:"Kata-kata sila",
    l:"m",                      r:"t" },
  { key:"gambar-t", label:"Cocokkan Gambar Lambang dengan Bunyi Silanya",
    lbl:"Gambar lambang",   b:"Kata-kata sila",
    l:"s",                      r:"t" }
];

window.PANCASILA_DATA = { SILA, BANK, MATCH_SCHEMAS, shuffle, pickN };