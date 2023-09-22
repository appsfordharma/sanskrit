/** @format */

// https://docs.google.com/spreadsheets/d/1_ga2Im1JWIJ-KjmE520JPjsv0Z6wJEYv50cwc9gG2wU/edit#gid=0

const LanguageCodes = [
  // {
  //   code: "bo",
  //   name: "Boro",
  //   direction: "ltr",
  //   nameInLocal: "बड़",
  // },
  {
    code: "aa",
    name: "Afar",
    direction: "ltr",
    nameInLocal: "Afar",
  },
  {
    code: "ab",
    name: "Abkhazian",
    direction: "ltr",
    nameInLocal: "Аҧсуа",
  },
  {
    code: "af",
    name: "Afrikaans",
    direction: "ltr",
    nameInLocal: "Afrikaans",
  },
  {
    code: "ak",
    name: "Akan",
    direction: "ltr",
    nameInLocal: "Akana",
  },
  {
    code: "als",
    name: "Alemannic",
    direction: "ltr",
    nameInLocal: "Alemannisch",
  },
  {
    code: "am",
    name: "Amharic",
    direction: "ltr",
    nameInLocal: "አማርኛ",
  },
  {
    code: "an",
    name: "Aragonese",
    direction: "ltr",
    nameInLocal: "Aragonés",
  },
  // {
  //   code: "ang",
  //   name: "Angal",
  //   direction: "ltr",
  //   nameInLocal: "Angal Heneng",
  // },
  {
    code: "ang",
    name: "Anglo-Saxon / Old English",
    direction: "ltr",
    nameInLocal: "Englisc",
  },
  {
    code: "ar",
    name: "Arabic",
    direction: "rtl",
    nameInLocal: "العربية",
  },
  {
    code: "arc",
    name: "Aramaic",
    direction: "rtl",
    nameInLocal: "ܣܘܪܬ",
  },
  {
    code: "as",
    name: "Assamese",
    direction: "ltr",
    nameInLocal: "অসমীয়া",
  },
  {
    code: "ast",
    name: "Asturian",
    direction: "ltr",
    nameInLocal: "Asturianu",
  },
  {
    code: "av",
    name: "Avar",
    direction: "ltr",
    nameInLocal: "Авар",
  },
  {
    code: "awa",
    name: "Awadhi",
    direction: "ltr",
    nameInLocal: "Awadhi",
  },
  {
    code: "ay",
    name: "Aymara",
    direction: "ltr",
    nameInLocal: "Aymar",
  },
  {
    code: "az",
    name: "Azerbaijani",
    direction: "ltr",
    nameInLocal: "Azərbaycanca / آذربايجان",
  },
  {
    code: "ba",
    name: "Bashkir",
    direction: "ltr",
    nameInLocal: "Башҡорт",
  },
  {
    code: "bar",
    name: "Bavarian",
    direction: "ltr",
    nameInLocal: "Boarisch",
  },
  {
    code: "bat-smg",
    name: "Samogitian",
    direction: "ltr",
    nameInLocal: "Žemaitėška",
  },
  {
    code: "bcl",
    name: "Bikol",
    direction: "ltr",
    nameInLocal: "Bikol Central",
  },
  {
    code: "be",
    name: "Belarusian",
    direction: "ltr",
    nameInLocal: "Беларуская",
  },
  {
    code: "be-x-old",
    name: "Belarusian (Taraškievica)",
    direction: "ltr",
    nameInLocal: "Беларуская (тарашкевіца)",
  },
  {
    code: "bg",
    name: "Bulgarian",
    direction: "ltr",
    nameInLocal: "Български",
  },
  {
    code: "bh",
    name: "Bihari",
    direction: "ltr",
    nameInLocal: "भोजपुरी",
  },
  {
    code: "bi",
    name: "Bislama",
    direction: "ltr",
    nameInLocal: "Bislama",
  },
  {
    code: "bm",
    name: "Bambara",
    direction: "ltr",
    nameInLocal: "Bamanankan",
  },
  {
    code: "bn",
    name: "Bengali",
    direction: "ltr",
    nameInLocal: "বাংলা",
  },
  {
    code: "bo",
    name: "Tibetan",
    direction: "ltr",
    nameInLocal: "བོད་ཡིག / Bod skad",
  },
  {
    code: "bpy",
    name: "Bishnupriya Manipuri",
    direction: "ltr",
    nameInLocal: "ইমার ঠার/বিষ্ণুপ্রিয়া মণিপুরী",
  },
  {
    code: "br",
    name: "Breton",
    direction: "ltr",
    nameInLocal: "Brezhoneg",
  },
  {
    code: "bs",
    name: "Bosnian",
    direction: "ltr",
    nameInLocal: "Bosanski",
  },
  {
    code: "bug",
    name: "Buginese",
    direction: "ltr",
    nameInLocal: "ᨅᨔ ᨕᨘᨁᨗ / Basa Ugi",
  },
  {
    code: "bxr",
    name: "Buriat (Russia)",
    direction: "ltr",
    nameInLocal: "Буряад хэлэн",
  },
  {
    code: "ca",
    name: "Catalan",
    direction: "ltr",
    nameInLocal: "Català",
  },
  {
    code: "cdo",
    name: "Min Dong Chinese",
    direction: "ltr",
    nameInLocal: "Mìng-dĕ̤ng-ngṳ̄ / 閩東語",
  },
  {
    code: "ce",
    name: "Chechen",
    direction: "ltr",
    nameInLocal: "Нохчийн",
  },
  {
    code: "ceb",
    name: "Cebuano",
    direction: "ltr",
    nameInLocal: "Sinugboanong Binisaya",
  },
  {
    code: "ch",
    name: "Chamorro",
    direction: "ltr",
    nameInLocal: "Chamoru",
  },
  {
    code: "cho",
    name: "Choctaw",
    direction: "ltr",
    nameInLocal: "Choctaw",
  },
  {
    code: "chr",
    name: "Cherokee",
    direction: "ltr",
    nameInLocal: "ᏣᎳᎩ",
  },
  {
    code: "chy",
    name: "Cheyenne",
    direction: "ltr",
    nameInLocal: "Tsetsêhestâhese",
  },
  {
    code: "ckb",
    name: "Kurdish (Sorani)",
    direction: "rtl",
    nameInLocal: "کوردی",
  },
  {
    code: "co",
    name: "Corsican",
    direction: "ltr",
    nameInLocal: "Corsu",
  },
  {
    code: "cr",
    name: "Cree",
    direction: "ltr",
    nameInLocal: "Nehiyaw",
  },
  {
    code: "cs",
    name: "Czech",
    direction: "ltr",
    nameInLocal: "Česky",
  },
  {
    code: "csb",
    name: "Kashubian",
    direction: "ltr",
    nameInLocal: "Kaszëbsczi",
  },
  {
    code: "cu",
    name: "Old Church Slavonic / Old Bulgarian",
    direction: "ltr",
    nameInLocal: "словѣньскъ / slověnĭskŭ",
  },
  {
    code: "cv",
    name: "Chuvash",
    direction: "ltr",
    nameInLocal: "Чăваш",
  },
  {
    code: "cy",
    name: "Welsh",
    direction: "ltr",
    nameInLocal: "Cymraeg",
  },
  {
    code: "da",
    name: "Danish",
    direction: "ltr",
    nameInLocal: "Dansk",
  },
  {
    code: "de",
    name: "German",
    direction: "ltr",
    nameInLocal: "Deutsch",
  },
  {
    code: "diq",
    name: "Dimli",
    direction: "ltr",
    nameInLocal: "Zazaki",
  },
  {
    code: "dsb",
    name: "Lower Sorbian",
    direction: "ltr",
    nameInLocal: "Dolnoserbski",
  },
  {
    code: "dv",
    name: "Divehi",
    direction: "rtl",
    nameInLocal: "ދިވެހިބަސް",
  },
  {
    code: "dz",
    name: "Dzongkha",
    direction: "ltr",
    nameInLocal: "ཇོང་ཁ",
  },
  {
    code: "ee",
    name: "Ewe",
    direction: "ltr",
    nameInLocal: "Ɛʋɛ",
  },
  {
    code: "el",
    name: "Greek",
    direction: "ltr",
    nameInLocal: "Ελληνικά",
  },
  {
    code: "en",
    name: "English",
    direction: "ltr",
    nameInLocal: "English",
  },
  {
    code: "eo",
    name: "Esperanto",
    direction: "ltr",
    nameInLocal: "Esperanto",
  },
  {
    code: "es",
    name: "Spanish",
    direction: "ltr",
    nameInLocal: "Español",
  },
  {
    code: "et",
    name: "Estonian",
    direction: "ltr",
    nameInLocal: "Eesti",
  },
  {
    code: "eu",
    name: "Basque",
    direction: "ltr",
    nameInLocal: "Euskara",
  },
  {
    code: "ext",
    name: "Extremaduran",
    direction: "ltr",
    nameInLocal: "Estremeñu",
  },
  {
    code: "fa",
    name: "Persian",
    direction: "rtl",
    nameInLocal: "فارسی",
  },
  {
    code: "ff",
    name: "Peul",
    direction: "ltr",
    nameInLocal: "Fulfulde",
  },
  {
    code: "fi",
    name: "Finnish",
    direction: "ltr",
    nameInLocal: "Suomi",
  },
  {
    code: "fiu-vro",
    name: "Võro",
    direction: "ltr",
    nameInLocal: "Võro",
  },
  {
    code: "fj",
    name: "Fijian",
    direction: "ltr",
    nameInLocal: "Na Vosa Vakaviti",
  },
  {
    code: "fo",
    name: "Faroese",
    direction: "ltr",
    nameInLocal: "Føroyskt",
  },
  {
    code: "fr",
    name: "French",
    direction: "ltr",
    nameInLocal: "Français",
  },
  {
    code: "frp",
    name: "Arpitan / Franco-Provençal",
    direction: "ltr",
    nameInLocal: "Arpitan / francoprovençal",
  },
  {
    code: "fur",
    name: "Friulian",
    direction: "ltr",
    nameInLocal: "Furlan",
  },
  {
    code: "fy",
    name: "West Frisian",
    direction: "ltr",
    nameInLocal: "Frysk",
  },
  {
    code: "ga",
    name: "Irish",
    direction: "ltr",
    nameInLocal: "Gaeilge",
  },
  {
    code: "gan",
    name: "Gan Chinese",
    direction: "ltr",
    nameInLocal: "贛語",
  },
  {
    code: "gbm",
    name: "Garhwali",
    direction: "ltr",
    nameInLocal: "गढ़वळी",
  },
  {
    code: "gd",
    name: "Scottish Gaelic",
    direction: "ltr",
    nameInLocal: "Gàidhlig",
  },
  {
    code: "gil",
    name: "Gilbertese",
    direction: "ltr",
    nameInLocal: "Taetae ni kiribati",
  },
  {
    code: "gl",
    name: "Galician",
    direction: "ltr",
    nameInLocal: "Galego",
  },
  {
    code: "gn",
    name: "Guarani",
    direction: "ltr",
    nameInLocal: "Avañe'ẽ",
  },
  {
    code: "got",
    name: "Gothic",
    direction: "ltr",
    nameInLocal: "gutisk",
  },
  {
    code: "gu",
    name: "Gujarati",
    direction: "ltr",
    nameInLocal: "ગુજરાતી",
  },
  {
    code: "gv",
    name: "Manx",
    direction: "ltr",
    nameInLocal: "Gaelg",
  },
  {
    code: "ha",
    name: "Hausa",
    direction: "rtl",
    nameInLocal: "هَوُسَ",
  },
  {
    code: "hak",
    name: "Hakka Chinese",
    direction: "ltr",
    nameInLocal: "客家語/Hak-kâ-ngî",
  },
  {
    code: "haw",
    name: "Hawaiian",
    direction: "ltr",
    nameInLocal: "Hawai`i",
  },
  {
    code: "he",
    name: "Hebrew",
    direction: "rtl",
    nameInLocal: "עברית",
  },
  {
    code: "hi",
    name: "Hindi",
    direction: "ltr",
    nameInLocal: "हिन्दी",
  },
  {
    code: "ho",
    name: "Hiri Motu",
    direction: "ltr",
    nameInLocal: "Hiri Motu",
  },
  {
    code: "hr",
    name: "Croatian",
    direction: "ltr",
    nameInLocal: "Hrvatski",
  },
  {
    code: "ht",
    name: "Haitian",
    direction: "ltr",
    nameInLocal: "Krèyol ayisyen",
  },
  {
    code: "hu",
    name: "Hungarian",
    direction: "ltr",
    nameInLocal: "Magyar",
  },
  {
    code: "hy",
    name: "Armenian",
    direction: "ltr",
    nameInLocal: "Հայերեն",
  },
  {
    code: "hz",
    name: "Herero",
    direction: "ltr",
    nameInLocal: "Otsiherero",
  },
  {
    code: "ia",
    name: "Interlingua",
    direction: "ltr",
    nameInLocal: "Interlingua",
  },
  {
    code: "id",
    name: "Indonesian",
    direction: "ltr",
    nameInLocal: "Bahasa Indonesia",
  },
  {
    code: "ie",
    name: "Interlingue",
    direction: "ltr",
    nameInLocal: "Interlingue",
  },
  {
    code: "ig",
    name: "Igbo",
    direction: "ltr",
    nameInLocal: "Igbo",
  },
  {
    code: "ii",
    name: "Sichuan Yi",
    direction: "ltr",
    nameInLocal: "ꆇꉙ / 四川彝语",
  },
  {
    code: "ik",
    name: "Inupiak",
    direction: "ltr",
    nameInLocal: "Iñupiak",
  },
  {
    code: "ilo",
    name: "Ilokano",
    direction: "ltr",
    nameInLocal: "Ilokano",
  },
  {
    code: "inh",
    name: "Ingush",
    direction: "ltr",
    nameInLocal: "ГӀалгӀай",
  },
  {
    code: "io",
    name: "Ido",
    direction: "ltr",
    nameInLocal: "Ido",
  },
  {
    code: "is",
    name: "Icelandic",
    direction: "ltr",
    nameInLocal: "Íslenska",
  },
  {
    code: "it",
    name: "Italian",
    direction: "ltr",
    nameInLocal: "Italiano",
  },
  {
    code: "iu",
    name: "Inuktitut",
    direction: "ltr",
    nameInLocal: "ᐃᓄᒃᑎᑐᑦ",
  },
  {
    code: "ja",
    name: "Japanese",
    direction: "ltr",
    nameInLocal: "日本語",
  },
  {
    code: "jbo",
    name: "Lojban",
    direction: "ltr",
    nameInLocal: "Lojban",
  },
  {
    code: "jv",
    name: "Javanese",
    direction: "ltr",
    nameInLocal: "Basa Jawa",
  },
  {
    code: "ka",
    name: "Georgian",
    direction: "ltr",
    nameInLocal: "ქართული",
  },
  {
    code: "kg",
    name: "Kongo",
    direction: "ltr",
    nameInLocal: "KiKongo",
  },
  {
    code: "ki",
    name: "Kikuyu",
    direction: "ltr",
    nameInLocal: "Gĩkũyũ",
  },
  {
    code: "kj",
    name: "Kuanyama",
    direction: "ltr",
    nameInLocal: "Kuanyama",
  },
  {
    code: "kk",
    name: "Kazakh",
    direction: "ltr",
    nameInLocal: "Қазақша",
  },
  {
    code: "kl",
    name: "Greenlandic",
    direction: "ltr",
    nameInLocal: "Kalaallisut",
  },
  {
    code: "km",
    name: "Cambodian",
    direction: "ltr",
    nameInLocal: "ភាសាខ្មែរ",
  },
  {
    code: "kn",
    name: "Kannada",
    direction: "ltr",
    nameInLocal: "ಕನ್ನಡ",
  },
  {
    code: "khw",
    name: "Khowar",
    direction: "rtl",
    nameInLocal: "کھوار",
  },
  {
    code: "ko",
    name: "Korean",
    direction: "ltr",
    nameInLocal: "한국어",
  },
  {
    code: "kr",
    name: "Kanuri",
    direction: "ltr",
    nameInLocal: "Kanuri",
  },
  {
    code: "ks",
    name: "Kashmiri",
    direction: "rtl",
    nameInLocal: "कॉशुर / کٲشُر",
  },
  {
    code: "ksh",
    name: "Ripuarian",
    direction: "ltr",
    nameInLocal: "Ripoarisch",
  },
  {
    code: "ku",
    name: "Kurdish (Kurmanji)",
    direction: "ltr",
    nameInLocal: "Kurdî",
  },
  {
    code: "kv",
    name: "Komi",
    direction: "ltr",
    nameInLocal: "Коми",
  },
  {
    code: "kw",
    name: "Cornish",
    direction: "ltr",
    nameInLocal: "Kernewek",
  },
  {
    code: "ky",
    name: "Kirghiz",
    direction: "ltr",
    nameInLocal: "Kırgızca / Кыргызча",
  },
  {
    code: "la",
    name: "Latin",
    direction: "ltr",
    nameInLocal: "Latina",
  },
  {
    code: "lad",
    name: "Ladino / Judeo-Spanish",
    direction: "ltr",
    nameInLocal: "Dzhudezmo / Djudeo-Espanyol",
  },
  {
    code: "lan",
    name: "Lango",
    direction: "ltr",
    nameInLocal: "Leb Lango / Luo",
  },
  {
    code: "lb",
    name: "Luxembourgish",
    direction: "ltr",
    nameInLocal: "Lëtzebuergesch",
  },
  {
    code: "lg",
    name: "Ganda",
    direction: "ltr",
    nameInLocal: "Luganda",
  },
  {
    code: "li",
    name: "Limburgian",
    direction: "ltr",
    nameInLocal: "Limburgs",
  },
  {
    code: "lij",
    name: "Ligurian",
    direction: "ltr",
    nameInLocal: "Líguru",
  },
  {
    code: "lmo",
    name: "Lombard",
    direction: "ltr",
    nameInLocal: "Lumbaart",
  },
  {
    code: "ln",
    name: "Lingala",
    direction: "ltr",
    nameInLocal: "Lingála",
  },
  {
    code: "lo",
    name: "Laotian",
    direction: "ltr",
    nameInLocal: "ລາວ / Pha xa lao",
  },
  {
    code: "lzz",
    name: "Laz",
    direction: "ltr",
    nameInLocal: "Lazuri / ლაზური",
  },
  {
    code: "lt",
    name: "Lithuanian",
    direction: "ltr",
    nameInLocal: "Lietuvių",
  },
  {
    code: "lv",
    name: "Latvian",
    direction: "ltr",
    nameInLocal: "Latviešu",
  },
  {
    code: "map-bms",
    name: "Banyumasan",
    direction: "ltr",
    nameInLocal: "Basa Banyumasan",
  },
  {
    code: "mg",
    name: "Malagasy",
    direction: "ltr",
    nameInLocal: "Malagasy",
  },
  {
    code: "man",
    name: "Mandarin",
    direction: "ltr",
    nameInLocal: "官話/官话",
  },
  {
    code: "mh",
    name: "Marshallese",
    direction: "ltr",
    nameInLocal: "Kajin Majel / Ebon",
  },
  {
    code: "mi",
    name: "Māori",
    direction: "ltr",
    nameInLocal: "Māori",
  },
  {
    code: "min",
    name: "Minangkabau",
    direction: "ltr",
    nameInLocal: "Minangkabau",
  },
  {
    code: "mk",
    name: "Macedonian",
    direction: "ltr",
    nameInLocal: "Македонски",
  },
  {
    code: "ml",
    name: "Malayalam",
    direction: "ltr",
    nameInLocal: "മലയാളം",
  },
  {
    code: "mn",
    name: "Mongolian",
    direction: "ltr",
    nameInLocal: "Монгол",
  },
  {
    code: "mo",
    name: "Moldovan",
    direction: "ltr",
    nameInLocal: "Moldovenească",
  },
  {
    code: "mr",
    name: "Marathi",
    direction: "ltr",
    nameInLocal: "मराठी",
  },
  {
    code: "mrh",
    name: "Mara",
    direction: "ltr",
    nameInLocal: "Mara",
  },
  {
    code: "ms",
    name: "Malay",
    direction: "ltr",
    nameInLocal: "Bahasa Melayu",
  },
  {
    code: "mt",
    name: "Maltese",
    direction: "ltr",
    nameInLocal: "bil-Malti",
  },
  {
    code: "mus",
    name: "Creek / Muskogee",
    direction: "ltr",
    nameInLocal: "Mvskoke",
  },
  {
    code: "mwl",
    name: "Mirandese",
    direction: "ltr",
    nameInLocal: "Mirandés",
  },
  {
    code: "my",
    name: "Burmese",
    direction: "ltr",
    nameInLocal: "Myanmasa",
  },
  {
    code: "na",
    name: "Nauruan",
    direction: "ltr",
    nameInLocal: "Dorerin Naoero",
  },
  {
    code: "nah",
    name: "Nahuatl",
    direction: "ltr",
    nameInLocal: "Nahuatl",
  },
  {
    code: "nap",
    name: "Neapolitan",
    direction: "ltr",
    nameInLocal: "Nnapulitano",
  },
  {
    code: "nd",
    name: "North Ndebele",
    direction: "ltr",
    nameInLocal: "Sindebele",
  },
  {
    code: "nds",
    name: "Low German / Low Saxon",
    direction: "ltr",
    nameInLocal: "Plattdüütsch",
  },
  {
    code: "nds-nl",
    name: "Dutch Low Saxon",
    direction: "ltr",
    nameInLocal: "Nedersaksisch",
  },
  {
    code: "ne",
    name: "Nepali",
    direction: "ltr",
    nameInLocal: "नेपाली",
  },
  {
    code: "new",
    name: "Newar",
    direction: "ltr",
    nameInLocal: "नेपालभाषा / Newah Bhaye",
  },
  {
    code: "ng",
    name: "Ndonga",
    direction: "ltr",
    nameInLocal: "Oshiwambo",
  },
  {
    code: "nl",
    name: "Dutch",
    direction: "ltr",
    nameInLocal: "Nederlands",
  },
  {
    code: "nn",
    name: "Norwegian Nynorsk",
    direction: "ltr",
    nameInLocal: "Norsk (nynorsk)",
  },
  {
    code: "no",
    name: "Norwegian",
    direction: "ltr",
    nameInLocal: "Norsk (bokmål / riksmål)",
  },
  {
    code: "nr",
    name: "South Ndebele",
    direction: "ltr",
    nameInLocal: "isiNdebele",
  },
  {
    code: "nso",
    name: "Northern Sotho",
    direction: "ltr",
    nameInLocal: "Sesotho sa Leboa / Sepedi",
  },
  {
    code: "nrm",
    name: "Norman",
    direction: "ltr",
    nameInLocal: "Nouormand / Normaund",
  },
  {
    code: "nv",
    name: "Navajo",
    direction: "ltr",
    nameInLocal: "Diné bizaad",
  },
  {
    code: "ny",
    name: "Chichewa",
    direction: "ltr",
    nameInLocal: "Chi-Chewa",
  },
  {
    code: "oc",
    name: "Occitan",
    direction: "ltr",
    nameInLocal: "Occitan",
  },
  {
    code: "oj",
    name: "Ojibwa",
    direction: "ltr",
    nameInLocal: "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin",
  },
  {
    code: "om",
    name: "Oromo",
    direction: "ltr",
    nameInLocal: "Oromoo",
  },
  {
    code: "or",
    name: "Oriya",
    direction: "ltr",
    nameInLocal: "ଓଡ଼ିଆ",
  },
  {
    code: "os",
    name: "Ossetian / Ossetic",
    direction: "ltr",
    nameInLocal: "Иронау",
  },
  {
    code: "pa",
    name: "Panjabi / Punjabi",
    direction: "ltr",
    nameInLocal: "ਪੰਜਾਬੀ / پنجابی",
  },
  {
    code: "pag",
    name: "Pangasinan",
    direction: "ltr",
    nameInLocal: "Pangasinan",
  },
  {
    code: "pam",
    name: "Kapampangan",
    direction: "ltr",
    nameInLocal: "Kapampangan",
  },
  {
    code: "pap",
    name: "Papiamentu",
    direction: "ltr",
    nameInLocal: "Papiamentu",
  },
  {
    code: "pdc",
    name: "Pennsylvania German",
    direction: "ltr",
    nameInLocal: "Deitsch",
  },
  {
    code: "pi",
    name: "Pali",
    direction: "ltr",
    nameInLocal: "Pāli / पाऴि",
  },
  {
    code: "pih",
    name: "Norfolk",
    direction: "ltr",
    nameInLocal: "Norfuk",
  },
  {
    code: "pl",
    name: "Polish",
    direction: "ltr",
    nameInLocal: "Polski",
  },
  {
    code: "pms",
    name: "Piedmontese",
    direction: "ltr",
    nameInLocal: "Piemontèis",
  },
  {
    code: "ps",
    name: "Pashto",
    direction: "rtl",
    nameInLocal: "پښتو",
  },
  {
    code: "pt",
    name: "Portuguese",
    direction: "ltr",
    nameInLocal: "Português",
  },
  {
    code: "qu",
    name: "Quechua",
    direction: "ltr",
    nameInLocal: "Runa Simi",
  },
  {
    code: "rm",
    name: "Raeto Romance",
    direction: "ltr",
    nameInLocal: "Rumantsch",
  },
  {
    code: "rmy",
    name: "Romani",
    direction: "ltr",
    nameInLocal: "Romani / रोमानी",
  },
  {
    code: "rn",
    name: "Kirundi",
    direction: "ltr",
    nameInLocal: "Kirundi",
  },
  {
    code: "ro",
    name: "Romanian",
    direction: "ltr",
    nameInLocal: "Română",
  },
  {
    code: "roa-rup",
    name: "Aromanian",
    direction: "ltr",
    nameInLocal: "Armâneashti",
  },
  {
    code: "ru",
    name: "Russian",
    direction: "ltr",
    nameInLocal: "Русский",
  },
  {
    code: "rw",
    name: "Rwandi",
    direction: "ltr",
    nameInLocal: "Kinyarwandi",
  },
  {
    code: "sa",
    name: "Sanskrit",
    direction: "ltr",
    nameInLocal: "संस्कृतम्",
  },
  {
    code: "sc",
    name: "Sardinian",
    direction: "ltr",
    nameInLocal: "Sardu",
  },
  {
    code: "scn",
    name: "Sicilian",
    direction: "ltr",
    nameInLocal: "Sicilianu",
  },
  {
    code: "sco",
    name: "Scots",
    direction: "ltr",
    nameInLocal: "Scots",
  },
  {
    code: "sd",
    name: "Sindhi",
    direction: "rtl",
    nameInLocal: "सिंधी / سنڌي‎",
  },
  {
    code: "se",
    name: "Northern Sami",
    direction: "ltr",
    nameInLocal: "Davvisámegiella",
  },
  {
    code: "sg",
    name: "Sango",
    direction: "ltr",
    nameInLocal: "Sängö",
  },
  {
    code: "sh",
    name: "Serbo-Croatian",
    direction: "ltr",
    nameInLocal: "Srpskohrvatski / Српскохрватски",
  },
  {
    code: "si",
    name: "Sinhalese",
    direction: "ltr",
    nameInLocal: "සිංහල",
  },
  {
    code: "simple",
    name: "Simple English",
    direction: "ltr",
    nameInLocal: "Simple English",
  },
  {
    code: "sk",
    name: "Slovak",
    direction: "ltr",
    nameInLocal: "Slovenčina",
  },
  {
    code: "sl",
    name: "Slovenian",
    direction: "ltr",
    nameInLocal: "Slovenščina",
  },
  {
    code: "sm",
    name: "Samoan",
    direction: "ltr",
    nameInLocal: "Gagana Samoa",
  },
  {
    code: "sn",
    name: "Shona",
    direction: "ltr",
    nameInLocal: "chiShona",
  },
  {
    code: "so",
    name: "Somalia",
    direction: "ltr",
    nameInLocal: "Soomaaliga",
  },
  {
    code: "sq",
    name: "Albanian",
    direction: "ltr",
    nameInLocal: "Shqip",
  },
  {
    code: "sr",
    name: "Serbian",
    direction: "ltr",
    nameInLocal: "Српски",
  },
  {
    code: "ss",
    name: "Swati",
    direction: "ltr",
    nameInLocal: "SiSwati",
  },
  {
    code: "st",
    name: "Southern Sotho",
    direction: "ltr",
    nameInLocal: "Sesotho",
  },
  {
    code: "su",
    name: "Sundanese",
    direction: "ltr",
    nameInLocal: "Basa Sunda",
  },
  {
    code: "sv",
    name: "Swedish",
    direction: "ltr",
    nameInLocal: "Svenska",
  },
  {
    code: "sw",
    name: "Swahili",
    direction: "ltr",
    nameInLocal: "Kiswahili",
  },
  {
    code: "ta",
    name: "Tamil",
    direction: "ltr",
    nameInLocal: "தமிழ்",
  },
  {
    code: "te",
    name: "Telugu",
    direction: "ltr",
    nameInLocal: "తెలుగు",
  },
  {
    code: "tet",
    name: "Tetum",
    direction: "ltr",
    nameInLocal: "Tetun",
  },
  {
    code: "tg",
    name: "Tajik",
    direction: "ltr",
    nameInLocal: "Тоҷикӣ",
  },
  {
    code: "th",
    name: "Thai",
    direction: "ltr",
    nameInLocal: "ไทย / Phasa Thai",
  },
  {
    code: "ti",
    name: "Tigrinya",
    direction: "ltr",
    nameInLocal: "ትግርኛ",
  },
  {
    code: "tk",
    name: "Turkmen",
    direction: "ltr",
    nameInLocal: "Туркмен / تركمن",
  },
  {
    code: "tl",
    name: "Tagalog",
    direction: "ltr",
    nameInLocal: "Tagalog",
  },
  {
    code: "tlh",
    name: "Klingon",
    direction: "ltr",
    nameInLocal: "tlhIngan-Hol",
  },
  {
    code: "tn",
    name: "Tswana",
    direction: "ltr",
    nameInLocal: "Setswana",
  },
  {
    code: "to",
    name: "Tonga",
    direction: "ltr",
    nameInLocal: "Lea Faka-Tonga",
  },
  {
    code: "tpi",
    name: "Tok Pisin",
    direction: "ltr",
    nameInLocal: "Tok Pisin",
  },
  {
    code: "tr",
    name: "Turkish",
    direction: "ltr",
    nameInLocal: "Türkçe",
  },
  {
    code: "ts",
    name: "Tsonga",
    direction: "ltr",
    nameInLocal: "Xitsonga",
  },
  {
    code: "tt",
    name: "Tatar",
    direction: "ltr",
    nameInLocal: "Tatarça",
  },
  {
    code: "tum",
    name: "Tumbuka",
    direction: "ltr",
    nameInLocal: "chiTumbuka",
  },
  {
    code: "tw",
    name: "Twi",
    direction: "ltr",
    nameInLocal: "Twi",
  },
  {
    code: "ty",
    name: "Tahitian",
    direction: "ltr",
    nameInLocal: "Reo Mā`ohi",
  },
  {
    code: "udm",
    name: "Udmurt",
    direction: "ltr",
    nameInLocal: "Удмурт кыл",
  },
  {
    code: "ug",
    name: "Uyghur",
    direction: "ltr",
    nameInLocal: "Uyƣurqə / ئۇيغۇرچە",
  },
  {
    code: "uk",
    name: "Ukrainian",
    direction: "ltr",
    nameInLocal: "Українська",
  },
  {
    code: "ur",
    name: "Urdu",
    direction: "rtl",
    nameInLocal: "اردو",
  },
  {
    code: "uz",
    name: "Uzbek",
    direction: "ltr",
    nameInLocal: "Ўзбек",
  },
  {
    code: "uz_AF",
    name: "Uzbeki Afghanistan",
    direction: "rtl",
    nameInLocal: "اوزبیکی",
  },
  {
    code: "ve",
    name: "Venda",
    direction: "ltr",
    nameInLocal: "Tshivenḓa",
  },
  {
    code: "vi",
    name: "Vietnamese",
    direction: "ltr",
    nameInLocal: "Việtnam",
  },
  {
    code: "vec",
    name: "Venetian",
    direction: "ltr",
    nameInLocal: "Vèneto",
  },
  {
    code: "vls",
    name: "West Flemish",
    direction: "ltr",
    nameInLocal: "West-Vlaoms",
  },
  {
    code: "vo",
    name: "Volapük",
    direction: "ltr",
    nameInLocal: "Volapük",
  },
  {
    code: "wa",
    name: "Walloon",
    direction: "ltr",
    nameInLocal: "Walon",
  },
  {
    code: "war",
    name: "Waray / Samar-Leyte Visayan",
    direction: "ltr",
    nameInLocal: "Winaray / Binisaya Lineyte-Samarnon",
  },
  {
    code: "wo",
    name: "Wolof",
    direction: "ltr",
    nameInLocal: "Wollof",
  },
  {
    code: "xal",
    name: "Kalmyk",
    direction: "ltr",
    nameInLocal: "Хальмг",
  },
  {
    code: "xh",
    name: "Xhosa",
    direction: "ltr",
    nameInLocal: "isiXhosa",
  },
  {
    code: "xmf",
    name: "Megrelian",
    direction: "ltr",
    nameInLocal: "მარგალური",
  },
  {
    code: "yi",
    name: "Yiddish",
    direction: "rtl",
    nameInLocal: "ייִדיש",
  },
  {
    code: "yo",
    name: "Yoruba",
    direction: "ltr",
    nameInLocal: "Yorùbá",
  },
  {
    code: "za",
    name: "Zhuang",
    direction: "ltr",
    nameInLocal: "Cuengh / Tôô / 壮语",
  },
  {
    code: "zh",
    name: "Chinese",
    direction: "ltr",
    nameInLocal: "中文",
  },
  {
    code: "zh-classical",
    name: "Classical Chinese",
    direction: "ltr",
    nameInLocal: "文言",
  },
  {
    code: "zh-min-nan",
    name: "Minnan",
    direction: "ltr",
    nameInLocal: "Bân-lâm-gú",
  },
  {
    code: "zh-yue",
    name: "Cantonese",
    direction: "ltr",
    nameInLocal: "粵語 / 粤语",
  },
  {
    code: "zu",
    name: "Zulu",
    direction: "ltr",
    nameInLocal: "isiZulu",
  },
];

// console.log(LanguageCodes.map((c) => ({ [c.code]: "" })));

const list = ["en", "hi", "bn", "ru", "de", "te", "sa"];

export default LanguageCodes.filter(({ code }) => list.includes(code));
