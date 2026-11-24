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

/* ======================================================= */
/* ===== BAB 2 : Aturan di Rumah dan di Sekolah ========== */
/* Sumber: LKPD BAB 2 P.PANCASILA (Quintal, terbit 15/10/2026
   — "Membedakan Aturan di Rumah dan di Sekolah").
   Sumatif bab 2: Rabu 21 Oktober 2026.                    */
/* ======================================================= */

const BANK2 = [
  { q:"Mencuci piring setelah makan adalah aturan di ____.",
    o:["rumah","sekolah","taman"], a:0, mode:"both" },
  { q:"Memakai seragam sekolah lengkap adalah aturan di ____.",
    o:["sekolah","rumah","kamar mandi"], a:0, mode:"both" },
  { q:"Mematikan TV sebelum tidur malam adalah aturan di ____.",
    o:["rumah","sekolah","kelas"], a:0, mode:"both" },
  { q:"Mengacungkan tangan saat mau bicara adalah aturan di ____.",
    o:["sekolah","rumah","kamar tidur"], a:0, mode:"both" },
  { q:"Merapikan tempat tidur sendiri dilakukan di ____.",
    o:["rumah","sekolah","halaman sekolah"], a:0, mode:"both" },
  { q:"Berbaris sebelum masuk kelas dilakukan di ____.",
    o:["sekolah","warung","kamar mandi"], a:0, mode:"both" },
  { q:"Minta izin kepada guru sebelum keluar kelas adalah aturan di ____.",
    o:["sekolah","rumah","warung"], a:0, mode:"both" },
  { q:"Berbaris tidak biasa dilakukan di rumah karena ____.",
    o:["jumlah orangnya lebih banyak sehingga harus rapi dan teratur","di rumah tidak ada pintu","di rumah tidak ada teman"], a:0, mode:"mcq" },
  { q:"Jika di sekolah atau di rumah tidak ada aturan, hidup kita akan ____.",
    o:["kacau dan tidak aman","lebih menyenangkan","tidak berubah"], a:0, mode:"both" },
  { q:"Dengan mematuhi aturan, hidup kita menjadi ____.",
    o:["tertib, aman, dan menyenangkan","bebas, ramai, dan ribut","malas, lambat, dan capek"], a:0, mode:"both" },
  { q:"Sikap kita terhadap aturan di rumah dan di sekolah adalah ____.",
    o:["mematuhinya","memilih yang enak saja","mengabaikannya"], a:0, mode:"both" },
  { q:"Upacara bendera hari Senin adalah aturan di ____.",
    o:["sekolah","rumah","pasar"], a:0, mode:"mcq" },
  { q:"Semua orang mematuhi aturan agar sekolah dan rumah menjadi ____.",
    o:["tertib dan nyaman","tambah ramai","tambah berat"], a:0, mode:"mcq" },
  { q:"Aturan di rumah dibuat oleh ____.",
    o:["ayah dan ibu bersama keluarga","teman sekolah","penjaga toko"], a:0, mode:"mcq" },
  { q:"Aturan di rumah dan di sekolah sama-sama harus kita ____.",
    o:["patuhi","tanyakan","tolak"], a:0, mode:"both" },
  { q:"Sebelum berangkat ke sekolah, kita harus ____ kepada orang tua.",
    o:["berpamitan","menangis","langsung keluar"], a:0, mode:"mcq" },
  { q:"Saat ulangan, kita tidak boleh ____.",
    o:["curang","jujur","rukun"], a:0, mode:"mcq" },
  { q:"Setelah selesai bermain bersama teman, mainan yang sudah digunakan sebaiknya ____.",
    o:["dikembalikan ke tempatnya","dibuang saja","disembunyikan"], a:0, mode:"mcq" },
  { q:"Berbicara seperlunya saat makan, manfaatnya adalah ____.",
    o:["tidak tersedak saat makan","terhindar dari kuman","mendapat berkat dari Tuhan"], a:0, mode:"mcq" },
  { q:"Kita harus datang ke sekolah tepat waktu dan tidak terlambat agar ____.",
    o:["tidak ketinggalan pelajaran","bisa bermain lebih lama","tidak perlu piket"], a:0, mode:"both" },
  { q:"Membersihkan kelas bersama pada pagi hari disebut ____.",
    o:["piket kelas","upacara bendera","berbaris"], a:0, mode:"mcq" },
  { q:"Saat bermain bersama teman, kita harus ____ mainan.",
    o:["bergantian menggunakan","merampas","merusak"], a:0, mode:"both" }
];

/* Klasifikasi LKPD (MENGAPLIKASI): kegiatan -> tempat aturannya */
const RULES = [
  { i:1,  a:"Mencuci piring setelah makan",                 t:"Rumah" },
  { i:2,  a:"Memakai seragam sekolah lengkap",              t:"Sekolah" },
  { i:3,  a:"Mematikan TV sebelum tidur malam",              t:"Rumah" },
  { i:4,  a:"Mengacungkan tangan saat mau bicara",          t:"Sekolah" },
  { i:5,  a:"Merapikan tempat tidur sendiri",               t:"Rumah" },
  { i:6,  a:"Berbaris sebelum masuk kelas",                 t:"Sekolah" },
  { i:7,  a:"Membersihkan papan tulis kelas",               t:"Sekolah" },
  { i:8,  a:"Menyapu lantai rumah",                         t:"Rumah" },
  { i:9,  a:"Duduk tenang saat guru menjelaskan",           t:"Sekolah" },
  { i:10, a:"Mencium tangan ayah dan ibu sebelum berangkat", t:"Rumah" }
];

const BELAJAR2 = [
  { t:"🏠 Aturan di Rumah", d:"Contoh: mencuci piring setelah makan, mematikan TV sebelum tidur, merapikan tempat tidur sendiri, menyapu lantai, dan mencium tangan ayah serta ibu sebelum berangkat." },
  { t:"🏫 Aturan di Sekolah", d:"Contoh: memakai seragam lengkap, berbaris sebelum masuk kelas, mengacungkan tangan saat mau bicara, minta izin sebelum keluar kelas, dan duduk tenang saat guru menjelaskan." },
  { t:"❓ Mengapa Ada Aturan?", d:"Aturan membuat hidup kita tertib, aman, dan menyenangkan. Kalau tidak ada aturan, hidup menjadi kacau dan tidak aman." },
  { t:"💪 Tugasku", d:"Mematuhi aturan di rumah dan di sekolah adalah bentuk tanggung jawabku sebagai anak yang baik." }
];

/* ======================================================= */
/* ===== BAB 3 : Kita Berbeda-Beda ======================== */
/* Sumber: FORMATIF P.PANCASILA BAB 3 (SD Stella Maris,
   Jumat 17-10-2026) + poster materi "Kita Berbeda-beda"
   (Pendidikan Pancasila Kelas 1SD) di Quintal.
   Sumatif SAS: Rabu 25 November 2026.                     */
/* ======================================================= */

const BANK3 = [
  /* --- dari FORMATIF BAB 3 (PG) --- */
  { q:"Caca suka ikan goreng. Nina suka telur rebus. Mereka memiliki perbedaan ....",
    o:["makanan kesukaan","hobi","ciri fisik"], a:0, mode:"mcq" },
  { q:"Berikut yang BUKAN warna kulit adalah ....",
    o:["lurus","sawo matang","kuning langsat"], a:0, mode:"mcq" },
  { q:"Kamu suka bermain sepak bola, sedangkan Dio suka membaca buku. Sikap kalian seharusnya ....",
    o:["saling menghargai kesukaan masing-masing","saling memaksakan permainan","bertengkar karena beda kesukaan"], a:0, mode:"mcq" },
  { q:"Perbedaan ciri fisik pada teman adalah ....",
    o:["rambut lurus dan keriting","suka makan ayam bakar","suka membaca dan berenang"], a:0, mode:"mcq" },
  { q:"Ciri-ciri khusus yang kita miliki disebut ....",
    o:["identitas diri","nama","ciri fisik"], a:0, mode:"mcq" },
  { q:"Akibat jika kita tidak menghargai perbedaan dengan teman di kelas adalah ....",
    o:["terjadi pertengkaran","hidup rukun","punya banyak teman"], a:0, mode:"mcq" },
  /* --- dari FORMATIF BAB 3 (isian) --- */
  { q:"Meskipun kamu dan teman memiliki hobi yang berbeda, kita harus saling ____.",
    o:["menghargai","memaksa","mengejek"], a:0, mode:"both" },
  { q:"Suku Bali ada di pulau ____.", o:["Bali","Jawa","Sumatra"], a:0, mode:"both" },
  { q:"Suku Sunda ada di pulau ____.", o:["Jawa","Bali","Kalimantan"], a:0, mode:"both" },
  { q:"Kakak gemar menyanyi. Adik gemar menari. Mereka mempunyai keragaman ____.",
    o:["hobi","ciri fisik","suku"], a:0, mode:"both" },
  { q:"Indonesia disebut negara ____.", o:["kepulauan","kota","gurun"], a:0, mode:"both" },
  /* --- dari poster materi "Kita Berbeda-beda" --- */
  { q:"Setiap orang memiliki perbedaan yang ....", o:["istimewa","buruk","sama"], a:0, mode:"both" },
  { q:"Contoh perbedaan di antara teman adalah ....",
    o:["hobi, kesukaan, kemampuan, dan ciri fisik","warna buku tulis saja","jumlah sepatu"], a:0, mode:"mcq" },
  { q:"Berikut yang termasuk ciri-ciri fisik adalah ....",
    o:["warna kulit dan bentuk rambut","hobi melukis","makanan kesukaan"], a:0, mode:"mcq" },
  { q:"Sikap kita terhadap perbedaan adalah ....",
    o:["menghargai dan hidup rukun","mengejek teman","menjauhi teman"], a:0, mode:"both" },
  { q:"Perilaku yang BAIK terhadap teman adalah ....",
    o:["berbagi mainan dan mengajak bermain","mengejek dan meninggalkan teman","berbohong kepada teman"], a:0, mode:"mcq" },
  { q:"Perilaku yang TIDAK BAIK terhadap teman adalah ....",
    o:["mengejek teman","membantu teman","mendengarkan teman"], a:0, mode:"mcq" },
  { q:"Mengapa kita harus menghargai perbedaan? Agar ....",
    o:["mendapat banyak teman dan sekolah gembira","teman menjauh","semua orang sama"], a:0, mode:"mcq" },
  { q:"Pesan penting tentang perbedaan adalah ....",
    o:["bersama dalam perbedaan, kita jadi lebih kuat","perbedaan membuat kita lemah","perbedaan harus dihilangkan"], a:0, mode:"both" },
  { q:"Saat ada teman yang jatuh, sikap kita adalah ....",
    o:["membantu","menertawakan","meninggalkan"], a:0, mode:"both" },
  { q:"Bermain bersama teman yang berbeda suku membuat kita ....",
    o:["belajar hal baru dan hidup rukun","bertengkar","merasa paling hebat"], a:0, mode:"mcq" },
  { q:"Warna kulit yang ada pada teman-teman kita ....",
    o:["berbeda-beda dan itu wajar","selalu sama","harus disamakan"], a:0, mode:"both" }
];

/* Klasifikasi perilaku: perilaku -> Baik / Tidak Baik (poster bagian 4) */
const PERILAKU = [
  { i:1,  a:"Berbagi mainan",              t:"Baik" },
  { i:2,  a:"Mengejek teman",              t:"Tidak Baik" },
  { i:3,  a:"Mengajak teman bermain",      t:"Baik" },
  { i:4,  a:"Meninggalkan teman",          t:"Tidak Baik" },
  { i:5,  a:"Mendengarkan teman berbicara",t:"Baik" },
  { i:6,  a:"Berbohong",                   t:"Tidak Baik" },
  { i:7,  a:"Membantu teman yang jatuh",   t:"Baik" },
  { i:8,  a:"Mementingkan diri sendiri",   t:"Tidak Baik" },
  { i:9,  a:"Menghargai perbedaan teman",  t:"Baik" },
  { i:10, a:"Menertawakan ciri fisik teman",t:"Tidak Baik" }
];

const BELAJAR3 = [
  { t:"🌈 Apa Arti Berbeda-beda?", d:"Setiap orang memiliki perbedaan yang istimewa! Perbedaan itu wajar dan tidak perlu dijadikan alasan untuk menjauh." },
  { t:"📚 Contoh Perbedaan", d:"Ada perbedaan hobi (melukis, bermain bola), kesukaan (makanan, hewan), kemampuan (berhitung, berlari), dan ciri-ciri fisik (warna kulit, bentuk rambut dan wajah)." },
  { t:"🤝 Sikap terhadap Perbedaan", d:"Membantu, bermain bersama, menghargai, dan hidup rukun dengan semua teman." },
  { t:"✅ Perilaku Baik", d:"Berbagi mainan, mengajak teman bermain, mendengarkan, dan membantu." },
  { t:"❌ Perilaku Tidak Baik", d:"Mengejek, meninggalkan teman, berbohong, dan mementingkan diri sendiri." },
  { t:"💪 Mengapa Menghargai Perbedaan?", d:"Agar mendapat banyak teman, sekolah menjadi gembira, bisa belajar hal baru, menjadi lebih kuat, dan menghormati sesama." },
  { t:"🇮🇩 Indonesia Negara Kepulauan", d:"Indonesia disebut negara kepulauan karena punya banyak pulau. Ada suku Jawa di pulau Jawa, suku Bali di pulau Bali, suku Sunda di pulau Jawa, dan banyak suku lainnya." }
];

/* Unit data per bab: engine dan home screen membaca ini */
window.PANCASILA_UNITS = [
  { id:"bab1", label:"Bab 1 · Aku Cinta Indonesia",
    sub:"Aku Bangga Menjadi Anak Indonesia",
    zh:"Garuda Pancasila • 5 Sila • Lambangnya",
    kind:"sila",
    data:{ SILA:SILA, BANK:BANK, MATCH_SCHEMAS:MATCH_SCHEMAS, shuffle:shuffle, pickN:pickN },
    belajar:"sila" },
  { id:"bab2", label:"Bab 2 · Aturan di Rumah & Sekolah",
    sub:"Membedakan Aturan di Rumah dan di Sekolah",
    zh:"Aturan di Rumah • Aturan di Sekolah • Hidup Tertib",
    kind:"rules",
    data:{ RULES:RULES, BANK:BANK2, BELAJAR:BELAJAR2, shuffle:shuffle, pickN:pickN },
    belajar:"aturan" },
  { id:"bab3", label:"Bab 3 · Kita Berbeda-Beda",
    sub:"Kita Berbeda-Beda — Saling Menghargai",
    zh:"Ciri Fisik • Hobi • Suku & Pulau • Perilaku Baik",
    kind:"rules",
    data:{ RULES:PERILAKU, BANK:BANK3, BELAJAR:BELAJAR3, shuffle:shuffle, pickN:pickN },
    belajar:"aturan",
    matchPrompt:"Cocokkan perilaku dengan Baik / Tidak Baik",
    colL:"Perilaku", colR:"Baik / Tidak Baik?" }
];

window.PANCASILA_DATA = { SILA, BANK, MATCH_SCHEMAS, shuffle, pickN };