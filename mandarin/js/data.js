/* ===== Data soal Kuis Mandarin =====
   bab1: Angka 1-10   (kosakata lama, tidak diubah)
   bab2: Salam & Sapaan (LKPD Kelas 1 unit 3: 你好 早 您 老师 再见 你 好)
   Bentuk data generik supaya mesin kuis (app.js) bisa dipakai keduanya.
   item = { key, char, pinyin, arti, emoji }
*/
window.KUIS = {
  lessons: [
    {
      id: "bab1",
      nama: "Bab 1 · Angka",
      kind: "angka",
      judul: "Angka 1 sampai 10",
      zh: "一 二 三 四 五 六 七 八 九 十",
      learnTitle: "Belajar Angka",
      items: [
        { key: "1",  char: "一", pinyin: "yī",   arti: "1",  emoji: "⭐" },
        { key: "2",  char: "二", pinyin: "èr",   arti: "2",  emoji: "🐷" },
        { key: "3",  char: "三", pinyin: "sān",  arti: "3",  emoji: "🌸" },
        { key: "4",  char: "四", pinyin: "sì",   arti: "4",  emoji: "🧀" },
        { key: "5",  char: "五", pinyin: "wǔ",   arti: "5",  emoji: "🍎" },
        { key: "6",  char: "六", pinyin: "liù",  arti: "6",  emoji: "🐦" },
        { key: "7",  char: "七", pinyin: "qī",   arti: "7",  emoji: "🐟" },
        { key: "8",  char: "八", pinyin: "bā",   arti: "8",  emoji: "🍌" },
        { key: "9",  char: "九", pinyin: "jiǔ",  arti: "9",  emoji: "🎈" },
        { key: "10", char: "十", pinyin: "shí",  arti: "10", emoji: "🐼" }
      ],
      writeItems: null, // null = pakai items
      dialogs: [],
      modes: {
        all: ["char2arti", "char2py", "arti2char", "stroke2arti", "gambar2char", "char2write"],
        imgwrite: ["gambar2char", "char2write"],
        img: ["gambar2char"],
        write: ["char2write"]
      }
    },
    {
      id: "bab2",
      nama: "Bab 2 · Salam",
      kind: "kata",
      judul: "Salam & Sapaan",
      zh: "你好 早 您 老师 再见 你 好",
      learnTitle: "Belajar Salam",
      items: [
        { key: "nihao",   char: "你好", pinyin: "nǐ hǎo",  arti: "halo",           emoji: "👋" },
        { key: "zao",     char: "早",   pinyin: "zǎo",     arti: "pagi",           emoji: "🌞" },
        // 您 ada di kotak kosakata LKPD tapi arti Indonesia-nya tidak tercetak di bahan,
        // jadi noArti:true -> hanya dipakai sebagai pilihan/target TULISAN, tidak pernah jadi opsi arti
        { key: "nin",     char: "您",   pinyin: "nín",     arti: "",               emoji: "🙇", noArti: true },
        { key: "laoshi",  char: "老师", pinyin: "lǎoshī",  arti: "guru",           emoji: "👩‍🏫" },
        { key: "zaijian", char: "再见", pinyin: "zàijiàn", arti: "sampai jumpa",   emoji: "🚶" },
        { key: "ni",      char: "你",   pinyin: "nǐ",      arti: "kamu",           emoji: "👉" },
        { key: "hao",     char: "好",   pinyin: "hǎo",     arti: "baik",           emoji: "👍" }
      ],
      // karakter tunggal dari halaman 汉字笔顺 (LKPD unit 3) untuk latihan menulis
      // arti hanya diisi kalau kata itu berdiri sendiri di kotak kosakata bahan
      writeItems: [
        { key: "w_zao",  char: "早", pinyin: "zǎo",  arti: "pagi" },
        { key: "w_lao",  char: "老", pinyin: "lǎo",  arti: "" },
        { key: "w_shi",  char: "师", pinyin: "shī",  arti: "" },
        { key: "w_ni",   char: "你", pinyin: "nǐ",   arti: "kamu" },
        { key: "w_zai",  char: "再", pinyin: "zài",  arti: "" },
        { key: "w_jian", char: "见", pinyin: "jiàn", arti: "" },
        { key: "w_hao",  char: "好", pinyin: "hǎo",  arti: "baik" }
      ],
      // soal percakapan (LKPD bagian C & D: 选一选,完成对话! + 小小思考!)
      // semua jawaban memakai kosakata yang ada di bahan: 你好 / 早 / 再见
      dialogs: [
        { speaker: "🧒", bubble: "你好!",   note: "(bertemu teman di sekolah)",            answer: "你好", opts: ["你好", "再见", "早"] },
        { speaker: "🧒", bubble: "早!",     note: "(pagi hari bertemu guru)",               answer: "早",   opts: ["早", "你好", "好"] },
        { speaker: "🧒", bubble: "再见!",   note: "(mau pulang sekolah)",                   answer: "再见", opts: ["再见", "你好", "老师"] },
        { speaker: "👦", bubble: "老师!",   note: "(murid memanggil gurunya)",              answer: "你好", opts: ["你好", "您", "再见"] },
        { speaker: "👩‍🏫", bubble: "再见!",  note: "(guru mau pulang, murid menjawab)",      answer: "再见", opts: ["再见", "你好", "早"] },
        { speaker: "👵", bubble: "早!",     note: "(bertemu tetangga pagi hari)",           answer: "早",   opts: ["早", "再见", "老师"] },
        { speaker: "👦", bubble: "再见!",   note: "(berpisah dengan teman)",                answer: "再见", opts: ["再见", "你好", "您"] },
        { speaker: "🧑", bubble: "你好!",   note: "(baru berkenalan dengan teman baru)",    answer: "你好", opts: ["你好", "再见", "好"] },
        { speaker: "👦", bubble: "早!",     note: "(masuk kelas pagi hari)",                answer: "早",   opts: ["早", "老师", "你"] },
        { speaker: "🧒", bubble: "老师, 再见!", note: "(pamit pulang kepada guru)",         answer: "再见", opts: ["再见", "早", "你好"] }
      ],
      // soal menjodohkan (dua kolom: tap kiri lalu tap pasangannya di kanan)
      // hanya memakai kosakata & tulisan yang tercetak di bahan LKPD
      // "mix" = tiap baris dapat pasangan facet acak (tulisan / cara baca / arti), jadi ketiganya bercampur
      matchSchemas: [
        { id: "tulisan-arti",   l: "char",   r: "arti",   label: "Cocokkan tulisan dengan artinya" },
        { id: "tulisan-pinyin", l: "char",   r: "pinyin", label: "Cocokkan tulisan dengan cara bacanya" },
        { id: "pinyin-arti",    l: "pinyin", r: "arti",   label: "Cocokkan cara baca dengan artinya" },
        { id: "arti-tulisan",   l: "arti",   r: "char",   label: "Cocokkan arti dengan tulisannya" },
        { id: "pinyin-tulisan", l: "pinyin", r: "char",   label: "Cocokkan cara baca dengan tulisannya" },
        { id: "arti-pinyin",    l: "arti",   r: "pinyin", label: "Cocokkan arti dengan cara bacanya" },
        { id: "campur",         l: "mix",    r: "mix",    label: "Cocokkan tulisan, cara baca, dan artinya" }
      ],
      matchSize: 4,
      modes: {
        all: ["char2arti", "char2py", "arti2char", "pinyin2char", "arti2pinyin", "audio2arti", "match",
              "stroke2arti", "gambar2char", "gambar2arti", "dialog", "char2write"],
        imgwrite: ["gambar2char", "gambar2arti", "dialog", "match", "char2write"],
        img: ["gambar2char", "gambar2arti", "dialog", "match"],
        write: ["char2write"]
      }
    }
  ]
};
