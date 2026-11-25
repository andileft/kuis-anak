/* ===== ENGLISH — Bank Soal & Data =====
   Sumber: "ENGLISH WORKSHEET — NUMBERS 1-10 & SCHOOL ITEMS" (WS-1)
           "FORMATIVE TEST" (Look and circle / Count and write / Word puzzle / Read and draw)
           Poster "ENGLISH LEARNING — Numbers 1-10 & School Items" (gambar item)
   Materi : Numbers 1-10 • School Items • Is it a ...? (Yes, it is. / No, it isn't.)
            How many? • a / an • more school words (paper, clock, sharpener, marker)
   Gambar : assets/*.png hasil crop poster (10 item) + gambar hitung (count_*.png)
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
  { t:"Numbers 1-10",
    isi:["one = 1","two = 2","three = 3","four = 4","five = 5",
         "six = 6","seven = 7","eight = 8","nine = 9","ten = 10"],
    contoh:["I have two pencils. (Aku punya dua pensil.)",
            "There are seven books. (Ada tujuh buku.)"] },
  { t:"School Items",
    isi:["pen = pulpen","pencil = pensil","ruler = penggaris","eraser = penghapus",
         "book = buku","map = peta","glue = lem","bag = tas","chair = kursi","table = meja"],
    contoh:["This is a pen. (Ini sebuah pulpen.)",
            "That is a book. (Itu sebuah buku.)"] },
  { t:"Is it a ...? (Yes / No)",
    isi:["Menanyakan benda: Is it a pen? (Apakah ini pulpen?)",
         "Jawaban ya: Yes, it is.",
         "Jawaban tidak: No, it isn't."],
    contoh:["Is it a ruler? Yes, it is. (Ya, benar.)",
            "Is it a table? No, it isn't. It is a chair. (Bukan, ini kursi.)"] },
  { t:"a atau an?",
    isi:["Pakai a sebelum huruf mati: a pen, a book, a bag, a chair.",
         "Pakai an sebelum huruf hidup (a, i, u, e, o): an eraser, an apple, an orange."],
    contoh:["This is an eraser. (Ini sebuah penghapus.)",
            "I have a pencil. (Aku punya sebuah pensil.)"] },
  { t:"How many? (Berapa banyak?)",
    isi:["Bertanya jumlah: How many books? (Berapa banyak buku?)",
         "Menjawab dengan angka: one, two, three, four, ...",
         "Hitung bendanya satu per satu, lalu sebutkan angkanya."],
    contoh:["How many chairs? Two chairs. (Dua kursi.)",
            "How many erasers? Eight erasers. (Delapan penghapus.)"] },
  { t:"More school words",
    isi:["paper = kertas","clock = jam","sharpener = rautan",
         "marker = spidol","stapler = pengokot","tape = selotip"],
    contoh:["The clock is on the wall. (Jam itu di dinding.)",
            "I need a sharpener. (Aku butuh rautan.)"] }
];

/* ---------- 1) PILIHAN GANDA ---------- */
const MCQ = [
  // --- numbers ---
  { q:"1, 2, 3, 4, 5, 6, 7, 8, 9, 10. The number after seven is ....",
    o:["eight","nine","six"], a:0 },
  { q:"1, 2, 3, 4, 5, 6, 7, 8, 9, 10. The number before two is ....",
    o:["one","three","four"], a:0 },
  { q:"\"6\" in English is ....", o:["six","seven","ten"], a:0 },
  { q:"\"9\" in English is ....", o:["nine","five","four"], a:0 },
  { q:"\"ten\" is number ....", o:["10","9","5"], a:0 },
  { q:"3, 4, ____, 6. The missing number is ....", o:["five","seven","two"], a:0 },
  { q:"7, 8, ____, 10. The missing number is ....", o:["nine","eleven","six"], a:0 },
  { q:"____, 2, 3, 4. The missing number is ....", o:["one","five","ten"], a:0 },
  { q:"The number of the days in a week is ....", o:["seven","five","ten"], a:0 },

  // --- school items: lihat gambar, sebutkan katanya ---
  { q:"What is this? (Gambar ini apa?)", img:"assets/pen.png?v=2", o:["pen","pencil","ruler"], a:0 },
  { q:"What is this?", img:"assets/pencil.png?v=2", o:["pencil","pen","glue"], a:0 },
  { q:"What is this?", img:"assets/ruler.png?v=2", o:["ruler","book","map"], a:0 },
  { q:"What is this?", img:"assets/eraser.png?v=2", o:["eraser","book","glue"], a:0 },
  { q:"What is this?", img:"assets/book.png?v=2", o:["book","bag","map"], a:0 },
  { q:"What is this?", img:"assets/map.png?v=2", o:["map","table","bag"], a:0 },
  { q:"What is this?", img:"assets/glue.png?v=2", o:["glue","bag","clock"], a:0 },
  { q:"What is this?", img:"assets/bag.png?v=2", o:["bag","book","chair"], a:0 },
  { q:"What is this?", img:"assets/chair.png?v=2", o:["chair","table","bag"], a:0 },
  { q:"What is this?", img:"assets/table.png?v=2", o:["table","chair","map"], a:0 },

  // --- Is it a ...? (Yes, it is. / No, it isn't.) ---
  { q:"Is it an eraser?", img:"assets/eraser.png?v=2", o:["Yes, it is.","No, it isn't."], a:0 },
  { q:"Is it a table?", img:"assets/table.png?v=2", o:["Yes, it is.","No, it isn't."], a:0 },
  { q:"Is it a chair?", img:"assets/chair.png?v=2", o:["Yes, it is.","No, it isn't."], a:0 },
  { q:"Is it a pencil?", img:"assets/pen.png?v=2", o:["No, it isn't.","Yes, it is."], a:0 },
  { q:"Is it a tape?", img:"assets/ruler.png?v=2", o:["No, it isn't.","Yes, it is."], a:0 },
  { q:"Is it a clock?", img:"assets/map.png?v=2", o:["No, it isn't.","Yes, it is."], a:0 },
  { q:"Is it a bag?", img:"assets/book.png?v=2", o:["No, it isn't.","Yes, it is."], a:0 },
  { q:"Is it a ruler?", img:"assets/ruler.png?v=2", o:["Yes, it is.","No, it isn't."], a:0 },

  // --- How many? (hitung gambar) ---
  { q:"How many glue bottles? (Ada berapa lem?)", img:"assets/count_glue3.png?v=2", o:["three","two","four"], a:0 },
  { q:"How many rulers?", img:"assets/count_ruler7.png?v=2", o:["seven","six","nine"], a:0 },
  { q:"How many books?", img:"assets/count_book2.png?v=2", o:["two","four","ten"], a:0 },
  { q:"How many bags?", img:"assets/count_bag4.png?v=2", o:["four","five","two"], a:0 },
  { q:"How many erasers?", img:"assets/count_eraser8.png?v=2", o:["eight","seven","six"], a:0 },
  { q:"How many chairs?", img:"assets/count_chair2.png?v=2", o:["two","three","ten"], a:0 },
  { q:"How many pencils?", img:"assets/count_pencil5.png?v=2", o:["five","four","nine"], a:0 },
  { q:"How many pencils?", img:"assets/count_pencil4.png?v=2", o:["four","five","seven"], a:0 },

  // --- a / an & arti kata ---
  { q:"This is ____ eraser. The correct word is ....", o:["an","a","two"], a:0 },
  { q:"This is ____ book. The correct word is ....", o:["a","an","three"], a:0 },
  { q:"We say ____ apple. The correct word is ....", o:["an","a","the two"], a:0 },
  { q:"The word \"glue\" in Indonesian is ....", o:["lem","gunting","penggaris"], a:0 },
  { q:"The word \"bag\" in Indonesian is ....", o:["tas","buku","meja"], a:0 },
  { q:"The word \"chair\" in Indonesian is ....", o:["kursi","meja","peta"], a:0 },
  { q:"In the word-search puzzle there is a word for \"jam dinding\". The word is ....",
    o:["clock","paper","marker"], a:0 },
  { q:"In the word-search puzzle there is a word for \"kertas\". The word is ....",
    o:["paper","pen","map"], a:0 },
  { q:"In the word-search puzzle there is a word for \"rautan\". The word is ....",
    o:["sharpener","marker","ruler"], a:0 },
  { q:"In the word-search puzzle there is a word for \"spidol\". The word is ....",
    o:["marker","paper","clock"], a:0 }
];

/* ---------- 2) BENAR / SALAH ---------- */
const BENARSALAH = [
  { s:"The number after seven is eight.", b:true,  emoji:"8️⃣" },
  { s:"\"Ten\" is number 10.", b:true,  emoji:"🔟" },
  { s:"The number before two is three.", b:false, emoji:"2️⃣" },
  { s:"\"Six\" is number 7.", b:false, emoji:"6️⃣" },
  { s:"A pen is for writing.", b:true,  emoji:"🖊️" },
  { s:"A ruler is for eating.", b:false, emoji:"📏" },
  { s:"An eraser is for erasing mistakes.", b:true,  emoji:"🧽" },
  { s:"A bag is for carrying books to school.", b:true,  emoji:"🎒" },
  { s:"We sit on a table.", b:false, emoji:"🪑" },
  { s:"The word \"map\" in Indonesian is peta.", b:true,  emoji:"🗺️" },
  { s:"The word \"book\" in Indonesian is kursi.", b:false, emoji:"📕" },
  { s:"This is an book.", b:false, emoji:"📕" },
  { s:"I have an eraser in my pencil case.", b:true,  emoji:"✏️" },
  { s:"We say \"a umbrella\".", b:false, emoji:"☂️" },
  { s:"\"Is it a chair?\" is a Yes/No question.", b:true,  emoji:"❓" },
  { s:"The clock shows the time.", b:true,  emoji:"🕐" },
  { s:"There are five fingers on one hand.", b:true,  emoji:"🖐️" },
  { s:"A sharpener makes the pencil blunt.", b:false, emoji:"🖍️" }
];

/* ---------- 3) TEKA-TEKI "WHO AM I?" ---------- */
const RIDDLE = [
  { d:"I have ink inside. You use me to write. Who am I?",
    o:["a pen 🖊️","a book 📕","a chair 🪑"], a:0 },
  { d:"You use me with a pen. I have numbers and lines. Who am I?",
    o:["a ruler 📏","a map 🗺️","a bag 🎒"], a:0 },
  { d:"I remove your pencil mistakes. Who am I?",
    o:["an eraser 🧽","glue 🧴","a clock 🕐"], a:0 },
  { d:"I carry your books to school on your back. Who am I?",
    o:["a bag 🎒","a table 🍽️","a book 📕"], a:0 },
  { d:"You read me. I have many pages. Who am I?",
    o:["a book 📕","a pen 🖊️","an eraser 🧽"], a:0 },
  { d:"I show you countries, cities, and the sea. Who am I?",
    o:["a map 🗺️","a clock 🕐","a ruler 📏"], a:0 },
  { d:"I join paper with paper. Who am I?",
    o:["glue 🧴","a sharpener 🖍️","a chair 🪑"], a:0 },
  { d:"You sit on me in the classroom. Who am I?",
    o:["a chair 🪑","a table 🍽️","a bag 🎒"], a:0 },
  { d:"You put your books and pencils on me. Who am I?",
    o:["a table 🍽️","a chair 🪑","a map 🗺️"], a:0 },
  { d:"I tell you the time. I have two hands. Who am I?",
    o:["a clock 🕐","a ruler 📏","a book 📕"], a:0 },
  { d:"I make your pencil sharp. Who am I?",
    o:["a sharpener 🖍️","an eraser 🧽","glue 🧴"], a:0 },
  { d:"I am the number between four and six. Who am I?",
    o:["five 5️⃣","seven 7️⃣","three 3️⃣"], a:0 },
  { d:"I am the number of fingers on two hands. Who am I?",
    o:["ten 🔟","five 5️⃣","two 2️⃣"], a:0 },
  { d:"You ask me to know the number of things: \"____ books?\". Who am I?",
    o:["How many ❓","Who 🧒","What color 🎨"], a:0 }
];

/* ---------- 4) COCOKKAN (drag / tap) ----------
   Tiap set = 1 soal. "auto" => diambil 4 pasangan berbeda dari daftar.
   Nilai yang berupa "assets/..." otomatis ditampilkan sebagai gambar. */
const MATCH_SETS = [
  { key:"numword", label:"Match the number with the word", lc:"Number", rc:"Word",
    auto:[
      {l:"1",r:"one"},{l:"2",r:"two"},{l:"3",r:"three"},{l:"4",r:"four"},{l:"5",r:"five"},
      {l:"6",r:"six"},{l:"7",r:"seven"},{l:"8",r:"eight"},{l:"9",r:"nine"},{l:"10",r:"ten"}
    ] },
  { key:"itempic", label:"Match the word with the picture", lc:"Word", rc:"Picture",
    auto:[
      {l:"pen",r:"assets/pen.png?v=2"},{l:"pencil",r:"assets/pencil.png?v=2"},
      {l:"ruler",r:"assets/ruler.png?v=2"},{l:"eraser",r:"assets/eraser.png?v=2"},
      {l:"book",r:"assets/book.png?v=2"},{l:"map",r:"assets/map.png?v=2"},
      {l:"glue",r:"assets/glue.png?v=2"},{l:"bag",r:"assets/bag.png?v=2"},
      {l:"chair",r:"assets/chair.png?v=2"},{l:"table",r:"assets/table.png?v=2"}
    ] },
  { key:"numcount", label:"Match the number word with the picture", lc:"Word", rc:"Picture",
    auto:[
      {l:"one",r:"assets/count_eraser1.png?v=2"},{l:"two",r:"assets/count_book2.png?v=2"},
      {l:"three",r:"assets/count_glue3.png?v=2"},{l:"four",r:"assets/count_bag4.png?v=2"},
      {l:"five",r:"assets/count_pencil5.png?v=2"},{l:"six",r:"assets/count_ruler6.png?v=2"},
      {l:"seven",r:"assets/count_ruler7.png?v=2"},{l:"eight",r:"assets/count_eraser8.png?v=2"}
    ] }
];
const MATCH_PAIRS = 4;   // jumlah pasangan tiap soal cocokkan

/* ---------- 5) LENGKAPI ---------- */
const FILL = [
  { t:"one, two, ____, four.", o:["three","five","six"], a:0 },
  { t:"seven, eight, ____, ten.", o:["nine","six","four"], a:0 },
  { t:"____, 2, 3, 4.", o:["One","Five","Ten"], a:0 },
  { t:"\"10\" in English is ____.", o:["ten","five","nine"], a:0 },
  { t:"\"____\" in English is 6.", o:["Six","Seven","Eight"], a:0 },
  { t:"\"____\" in English is 3.", o:["Three","Two","Eight"], a:0 },
  { img:"assets/pen.png?v=2", t:"This is a ____.", o:["pen","pencil","glue"], a:0 },
  { img:"assets/book.png?v=2", t:"This is a ____.", o:["book","bag","map"], a:0 },
  { img:"assets/eraser.png?v=2", t:"This is ____ eraser.", o:["an","a","three"], a:0 },
  { img:"assets/bag.png?v=2", t:"This is ____ bag.", o:["a","an","three"], a:0 },
  { t:"I write with a ____.", o:["pencil","chair","map"], a:0 },
  { t:"I erase my mistake with an ____.", o:["eraser","ruler","clock"], a:0 },
  { t:"I draw a straight line with a ____.", o:["ruler","glue","bag"], a:0 },
  { t:"I join paper with ____.", o:["glue","book","clock"], a:0 },
  { t:"The teacher writes on the whiteboard with a ____.", o:["marker","eraser","table"], a:0 },
  { t:"We sit on a ____ in the classroom.", o:["chair","table","bag"], a:0 },
  { t:"We put our books on the ____.", o:["table","bag","pencil"], a:0 },
  { t:"I put my books and pencil case in my ____.", o:["bag","clock","sharpener"], a:0 },
  { t:"We look at a ____ to see countries and cities.", o:["map","ruler","book"], a:0 },
  { t:"The ____ on the wall shows the time.", o:["clock","eraser","glue"], a:0 },
  { t:"My pencil is blunt. I need a ____.", o:["sharpener","stapler","clock"], a:0 },
  { img:"assets/count_pencil5.png?v=2", t:"There are ____ pencils.", o:["five","four","seven"], a:0 },
  { img:"assets/count_book7.png?v=2", t:"There are ____ books.", o:["seven","six","nine"], a:0 },
  { img:"assets/count_eraser8.png?v=2", t:"There are ____ erasers.", o:["eight","six","three"], a:0 },
  { img:"assets/count_chair2.png?v=2", t:"There are ____ chairs.", o:["two","four","ten"], a:0 },
  { img:"assets/count_bag3.png?v=2", t:"There are ____ bags.", o:["three","four","two"], a:0 }
];

/* ======================================================= */
/* ===== UNIT 3 : Do Ducks Fly? (Farm Animals) ============ */
/* Sumber: buku "English Play Starter" Unit 3 (hal. 26-35),
   FORMATIVE TEST Unit 3 (SD Stella Maris), ENGLISH WORKSHEET
   Unit 3. Sumatif SAS: Kamis 26 November 2026.            */
/* ======================================================= */

const MATERI3 = [
  { t:"Farm Animals (Hewan Peternakan)",
    isi:["pig = babi","chicken = ayam","cow = sapi","horse = kuda",
         "duck = bebek","sheep = domba","fish = ikan","dog = anjing","bird = burung","rabbit = kelinci"],
    contoh:["This is a cow. (Ini seekor sapi.)","I see a duck. (Aku melihat bebek.)"] },
  { t:"Animal Actions (Aktivitas Hewan)",
    isi:["run = berlari","jump / hop = melompat","fly = terbang","swim = berenang",
         "eat = makan","drink = minum","sleep / nap = tidur","dig = menggali"],
    contoh:["A fish swims. (Ikan berenang.)","A bird flies. (Burung terbang.)"] },
  { t:"What can the animal do?",
    isi:["A bird can FLY.","A fish can SWIM.","A horse can RUN.","A frog can JUMP.","A cow can EAT grass.","A rabbit can HOP."],
    contoh:["The rabbit can hop. (Kelinci bisa melompat.)","A duck can swim in a pond."] },
  { t:"Do ... ? (Yes, they do / No, they don't)",
    isi:["Menanyakan kebiasaan hewan: Do ducks swim?",
         "Jawaban ya: Yes, they do.",
         "Jawaban tidak: No, they don't.",
         "What do horses do? They run. (Apa yang dilakukan kuda? Mereka berlari.)"],
    contoh:["Do ducks jump? No, they don't. (Tidak.)",
            "Do birds fly? Yes, they do. (Ya.)"] },
  { t:"This is a ... / I see ...",
    isi:["Menyebut benda/hewan: This is a cow.","Menghitung: I see five ducks.","I see one chicken.","I see two cows."],
    contoh:["This is a duck. (Ini seekor bebek.)","I see three pigs."] },
  { t:"Story: On the Farm",
    isi:["A duck swims in a pond. (Bebek berenang di kolam.)",
         "A pig naps in a barn. (Babi tidur di kandang.)",
         "A dog digs a hole. (Anjing menggali lubang.)",
         "The horse runs very fast. (Kuda berlari sangat cepat.)",
         "The dog jumps over a can. (Anjing melompati kaleng.)",
         "The cow eats the grass. (Sapi makan rumput.)"],
    contoh:["Hello, kids! Welcome to my farm. (Halo, anak-anak! Selamat datang di peternakanku.)",
            "Let's see the animals. (Ayo lihat hewan-hewannya.)"] },
  { t:"Farm Words",
    isi:["farm = peternakan","barn = kandang/lumbung","rabbits = kelinci-kelinci","eggs = telur",
         "milk = susu","farmer = petani/peternak","scarecrow = orang-orangan sawah","tractor = traktor"],
    contoh:["The farmer works on the farm.","The scarecrow is in the field."] }
];

const MCQ3 = [
  /* --- dari FORMATIVE TEST bagian 1 --- */
  { q:"Look at the picture: it is a big animal with spots. What is it?",
    o:["a cow","a goat","a horse"], a:0 },
  { q:"Which animal can fly?", o:["a bird","a fish","a cat"], a:0 },
  { q:"A fish can ____.", o:["swim","run","fly"], a:0 },
  { q:"The rabbit can ____.", o:["hop","swim","fly"], a:0 },
  { q:"Which animal lives on the farm?", o:["a chicken","a lion","a monkey"], a:0 },
  /* --- dari word box FORMATIVE --- */
  { q:"A bird can ____.", o:["fly","swim","eat"], a:0 },
  { q:"A horse can ____.", o:["run","fly","jump"], a:0 },
  { q:"A cow can ____ grass.", o:["eat","fly","swim"], a:0 },
  /* --- dari buku (vocabulary & story) --- */
  { q:"A duck ____ in a pond.", o:["swims","runs","flies"], a:0 },
  { q:"A pig ____ in a barn.", o:["naps","swims","flies"], a:0 },
  { q:"A dog ____ a hole.", o:["digs","flies","swims"], a:0 },
  { q:"The horse ____ very fast.", o:["runs","swims","flies"], a:0 },
  { q:"The cow eats the ____.", o:["grass","milk","eggs"], a:0 },
  { q:"The dog jumps over a ____.", o:["can","pond","barn"], a:0 },
  /* --- grammar Do/Does --- */
  { q:"Do ducks swim?", o:["Yes, they do.","No, they don't."], a:0 },
  { q:"Do horses fly?", o:["No, they don't.","Yes, they do."], a:0 },
  { q:"Do birds jump?", o:["No, they don't.","Yes, they do."], a:0 },
  { q:"Do dogs run?", o:["Yes, they do.","No, they don't."], a:0 },
  { q:"Do cows eat?", o:["Yes, they do.","No, they don't."], a:0 },
  { q:"Do pigs eat?", o:["Yes, they do.","No, they don't."], a:0 },
  { q:"What do horses do?", o:["They run.","They swim.","They fly."], a:0 },
  /* --- kosakata & arti --- */
  { q:"The word \"sheep\" in Indonesian is ....", o:["domba","bebek","ayam"], a:0 },
  { q:"The word \"chicken\" in Indonesian is ....", o:["ayam","sapi","kuda"], a:0 },
  { q:"The word \"horse\" in Indonesian is ....", o:["kuda","babi","ikan"], a:0 },
  { q:"The word \"barn\" in Indonesian is ....", o:["kandang","kolam","sawah"], a:0 },
  { q:"The word \"farmer\" in Indonesian is ....", o:["peternak","nelayan","guru"], a:0 },
  { q:"\"Susu\" in English is ....", o:["milk","eggs","grass"], a:0 },
  { q:"\"Telur\" in English is ....", o:["eggs","milk","farm"], a:0 },
  /* --- This is a ... / I see ... --- */
  { q:"____ is a cow. (Ini seekor sapi.)", o:["This","These","Those"], a:0 },
  { q:"I see ____ ducks. (Aku melihat lima bebek.)", o:["five","one","two"], a:0 },
  { q:"I see ____ chicken. (Aku melihat satu ayam.)", o:["one","two","five"], a:0 },
  /* --- phonics --- */
  { q:"Which word has the same \"-ck\" sound as duck?", o:["chicken","pig","sheep"], a:0 },
  { q:"Which word rhymes with \"big\"?", o:["pig","dog","duck"], a:0 },
  { q:"Which word rhymes with \"sheep\"?", o:["ship","shop","chip"], a:0 }
];

const BENARSALAH3 = [
  { s:"A duck can swim in a pond.", b:true,  emoji:"🦆" },
  { s:"A cow can fly.", b:false, emoji:"🐄" },
  { s:"A bird can fly.", b:true,  emoji:"🐦" },
  { s:"A fish can run.", b:false, emoji:"🐟" },
  { s:"A horse can run very fast.", b:true,  emoji:"🐴" },
  { s:"A pig naps in a barn.", b:true,  emoji:"🐖" },
  { s:"A dog digs a hole.", b:true,  emoji:"🐕" },
  { s:"The cow eats grass.", b:true,  emoji:"🌿" },
  { s:"Do ducks jump? Yes, they do.", b:false, emoji:"🦆" },
  { s:"Do horses fly? No, they don't.", b:true,  emoji:"🐴" },
  { s:"Do fish swim? Yes, they do.", b:true,  emoji:"🐟" },
  { s:"A rabbit can hop.", b:true,  emoji:"🐰" },
  { s:"The word \"sheep\" means kuda.", b:false, emoji:"🐑" },
  { s:"The word \"barn\" means kandang.", b:true,  emoji:"🏚️" },
  { s:"A farmer works on a farm.", b:true,  emoji:"👨‍🌾" },
  { s:"A scarecrow is a real person.", b:false, emoji:"🌾" },
  { s:"I see five ducks means aku melihat lima bebek.", b:true,  emoji:"5️⃣" },
  { s:"The chicken is a farm animal.", b:true,  emoji:"🐔" },
  { s:"A lion lives on a farm.", b:false, emoji:"🦁" },
  { s:"Milk comes from a cow.", b:true,  emoji:"🥛" }
];

const RIDDLE3 = [
  { d:"I say \"Moo\". I give you milk. I eat grass. Who am I?",
    o:["a cow 🐄","a duck 🦆","a bird 🐦"], a:0 },
  { d:"I say \"Quack\". I swim in a pond. Who am I?",
    o:["a duck 🦆","a cow 🐄","a horse 🐴"], a:0 },
  { d:"I can fly. I have wings and a beak. Who am I?",
    o:["a bird 🐦","a fish 🐟","a pig 🐖"], a:0 },
  { d:"I swim in the water. I have fins and a tail. Who am I?",
    o:["a fish 🐟","a chicken 🐔","a dog 🐕"], a:0 },
  { d:"I run very fast. People ride on my back. Who am I?",
    o:["a horse 🐴","a sheep 🐑","a duck 🦆"], a:0 },
  { d:"I say \"Oink\". I nap in a barn. Who am I?",
    o:["a pig 🐖","a cow 🐄","a bird 🐦"], a:0 },
  { d:"I can hop. I have long ears. I eat carrots. Who am I?",
    o:["a rabbit 🐰","a fish 🐟","a cow 🐄"], a:0 },
  { d:"I say \"Woof\". I dig a hole. Who am I?",
    o:["a dog 🐕","a duck 🦆","a chicken 🐔"], a:0 },
  { d:"I am a farm animal with wool. I say \"Baa\". Who am I?",
    o:["a sheep 🐑","a horse 🐴","a pig 🐖"], a:0 },
  { d:"I am a place with a barn and many animals. Who am I?",
    o:["a farm 🚜","a school 🏫","a market 🏪"], a:0 },
  { d:"I am a person. I work on a farm and take care of the animals. Who am I?",
    o:["a farmer 👨‍🌾","a teacher 👩‍🏫","a doctor 👨‍⚕️"], a:0 },
  { d:"I am made of straw. I stand in the field and scare the birds. Who am I?",
    o:["a scarecrow 🌾","a tractor 🚜","a barn 🏚️"], a:0 }
];

const MATCH_SETS3 = [
  { key:"animal-action", label:"Match the animal with its action", lc:"Animal", rc:"Action", per:3, bonus:1,
    sets:[
      [ {l:"a bird",r:"flies"},{l:"a fish",r:"swims"},{l:"a rabbit",r:"hops"} ],
      [ {l:"a dog",r:"barks"},{l:"a horse",r:"runs"},{l:"a duck",r:"swims"} ],
      [ {l:"a cow",r:"eats grass"},{l:"a bird",r:"flies"},{l:"a dog",r:"digs"} ]
    ] },
  { key:"animal-word", label:"Match the word with the animal", lc:"Word", rc:"Animal", per:3, bonus:1,
    sets:[
      [ {l:"pig",r:"🐖 babi"},{l:"cow",r:"🐄 sapi"},{l:"duck",r:"🦆 bebek"} ],
      [ {l:"horse",r:"🐴 kuda"},{l:"chicken",r:"🐔 ayam"},{l:"sheep",r:"🐑 domba"} ],
      [ {l:"fish",r:"🐟 ikan"},{l:"dog",r:"🐕 anjing"},{l:"bird",r:"🐦 burung"} ]
    ] },
  { key:"yesno", label:"Match the question with the answer", lc:"Question", rc:"Answer", per:4, bonus:2,
    sets:[
      [ {l:"Do ducks swim?",r:"Yes, they do."},{l:"Do horses fly?",r:"No, they don't."} ],
      [ {l:"Do birds fly?",r:"Yes, they do."},{l:"Do fish run?",r:"No, they don't."} ],
      [ {l:"Do dogs run?",r:"Yes, they do."},{l:"Do cows fly?",r:"No, they don't."} ]
    ] },
  { key:"farmword", label:"Match the farm word with its meaning", lc:"Farm word", rc:"Meaning", per:3, bonus:1,
    sets:[
      [ {l:"barn",r:"kandang"},{l:"farmer",r:"peternak"},{l:"milk",r:"susu"} ],
      [ {l:"eggs",r:"telur"},{l:"tractor",r:"traktor"},{l:"farm",r:"peternakan"} ]
    ] }
];

const FILL3 = [
  { t:"A duck can ____ in a pond.", o:["swim","fly","run"], a:0 },
  { t:"A bird can ____.", o:["fly","swim","dig"], a:0 },
  { t:"A horse can ____ very fast.", o:["run","fly","swim"], a:0 },
  { t:"A frog can ____.", o:["jump","fly","drink"], a:0 },
  { t:"A cow can ____ grass.", o:["eat","fly","swim"], a:0 },
  { t:"A pig ____ in a barn.", o:["naps","flies","swims"], a:0 },
  { t:"A dog ____ a hole.", o:["digs","flies","swims"], a:0 },
  { t:"The cow eats the ____.", o:["grass","milk","eggs"], a:0 },
  { t:"____ is a cow.", o:["This","These","Those"], a:0 },
  { t:"I see ____ ducks.", o:["five","one","two"], a:0 },
  { t:"The word \"sheep\" in Indonesian is ____.", o:["domba","kuda","ayam"], a:0 },
  { t:"The word \"chicken\" in Indonesian is ____.", o:["ayam","sapi","bebek"], a:0 },
  { t:"\"Susu\" in English is ____.", o:["milk","eggs","grass"], a:0 },
  { t:"\"Telur\" in English is ____.", o:["eggs","milk","farm"], a:0 },
  { t:"The ____ works on the farm.", o:["farmer","teacher","doctor"], a:0 },
  { t:"Do ducks swim? Yes, they ____.", o:["do","don't","are"], a:0 },
  { t:"Do horses fly? No, they ____.", o:["don't","do","are"], a:0 },
  { t:"A rabbit can ____.", o:["hop","swim","fly"], a:0 }
];

window.ENGLISH_UNITS = [
  { id:"bab2", label:"Bab 2 · Numbers & School Items",
    sub:"Bab 2 — Numbers 1-10 & School Items",
    zh:"Numbers 1-10 • School Items • Is it a ...? • How many? • a / an",
    data:{ MATERI, MCQ, BENARSALAH, RIDDLE, MATCH_SETS, MATCH_PAIRS, FILL, shuffle, pickN } },
  { id:"unit3", label:"Unit 3 · Do Ducks Fly?",
    sub:"Unit 3 — Do Ducks Fly? (Farm Animals)",
    zh:"Farm Animals • Animal Actions • Do ... ? • This is a ... • Farm Words",
    data:{ MATERI:MATERI3, MCQ:MCQ3, BENARSALAH:BENARSALAH3, RIDDLE:RIDDLE3, MATCH_SETS:MATCH_SETS3, MATCH_PAIRS, FILL:FILL3, shuffle, pickN } }
];

/* kompatibilitas */
window.ENGLISH_DATA = window.ENGLISH_UNITS[0].data;
