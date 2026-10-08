import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  das_theater: {
    description: "Theatergebäude, Bühne, Schauspieler, Theaterstücke, Eintrittskarten und Applaus.",
    details: "Theaterbesuch, Inszenierung, Dramaturgie, Kulturabende und Premieren (A1–B2)",
    arabicDescription:
      "المسرح (Das Theater): مفردات خشبة المسرح (Bühne)، الممثلين (Schauspieler)، المسرحية (Theaterstück)، تذاكر الدخول (Eintrittskarte)، الستارة (Vorhang)، الجمهور (Publikum)، التصفيق (Applaus/Beifall)، وغرفة تبديل الملابس والإخراج (Regie).",
    words: [
      {
        german: "das Theater, -",
        arabic: "المسرح (المبنى وفن المسرح)",
        english: "theater, theatre",
        example: "Heute Abend gehen wir ins Theater, um ein bekanntes Drama zu sehen.",
      },
      {
        german: "die Bühne, -n",
        arabic: "خشبة المسرح والمنصة",
        english: "stage",
        example: "Auf der großen Bühne stehen die Kulissen für das neue Theaterstück.",
      },
      {
        german: "der Schauspieler, -",
        arabic: "الممثل المسرحي أو السينمائي",
        english: "actor",
        example: "Der talentierte Schauspieler verkörpert seine Rolle mit tiefer Leidenschaft.",
      },
      {
        german: "das Theaterstück, -e",
        arabic: "المسرحية (العرض المسرحي)",
        english: "play, theater play",
        example:
          "Goethes 'Faust' ist das berühmteste deutsche Theaterstück der Literaturgeschichte.",
      },
      {
        german: "die Eintrittskarte, -n",
        arabic: "تذكرة الدخول",
        english: "ticket, admission ticket",
        example:
          "Wir haben unsere Eintrittskarten bereits zwei Wochen im Voraus online reserviert.",
      },
      {
        german: "der Vorhang, -̈e",
        arabic: "ستارة المسرح القماشية",
        english: "curtain (theater)",
        example: "Sobald der schwere rote Vorhang aufgeht, wird es im Saal mucksmäuschenstill.",
      },
      {
        german: "das Publikum (Sg.)",
        arabic: "الجمهور والمشاهدون",
        english: "audience",
        example: "Das begeisterte Publikum erhob sich von den Sitzen und spendete Beifall.",
      },
      {
        german: "der Applaus (Sg.)",
        arabic: "التصفيق الحار والاستحسان",
        english: "applause",
        example: "Nach der gelungenen Schlussszene brach tosender Applaus im gesamten Saal aus.",
      },
      {
        german: "die Garderobe, -n",
        arabic: "غرفة إيداع المعاطف والحقائب (أو ملابس الممثلين)",
        english: "cloakroom, wardrobe",
        example: "Wir gaben unsere dicken Wintermäntel an der Garderobe im Foyer ab.",
      },
      {
        german: "die Theaterpause, -n",
        arabic: "استراحة العرض المسرحي بين الفصول",
        english: "intermission, interval",
        example: "In der zwanzigminütigen Theaterpause tranken wir ein Glas Sekt im Foyer.",
      },
      {
        german: "die Regie, -n",
        arabic: "الإخراج المسرحي",
        english: "direction (theater/film)",
        example: "Die mutige Regie verlieh dem historischen Stück eine überraschend moderne Note.",
      },
      {
        german: "der Beifall (Sg.)",
        arabic: "الهتاف والتصفيق التشجيعي",
        english: "cheers, applause, acclaim",
        example: "Die Darsteller verbeugten sich mehrfach unter langanhaltendem Beifall.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein schöner Abend im Theater",
        intro: "Einfache Sätze über Theater, Schauspieler, Bühne und Applaus (A1).",
        paragraphs: [
          [
            "Heute ziehe ich ein schönes Kleid an.",
            "Ich gehe mit Freunden in [das Theater, -|das Theater].",
            "An der Kasse zeige ich [die Eintrittskarte, -n|meine Eintrittskarte].",
          ],
          [
            "An [die Garderobe, -n|der Garderobe] gebe ich meine Jacke ab.",
            "Im Saal ist es dunkel und gemütlich.",
            "[der Vorhang, -̈e|Der rote Vorhang] geht auf und wir sehen [die Bühne, -n|die Bühne].",
          ],
          [
            "[der Schauspieler, -|Ein toller Schauspieler] spricht laut und deutlich.",
            "Am Ende klatscht [das Publikum (Sg.)|das Publikum] und es gibt viel [der Applaus (Sg.)|Applaus].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Klassiker auf der Bühne erleben",
        intro: "Kartenreservierung, Theaterpause und moderne Inszenierungen (A2).",
        paragraphs: [
          [
            "Letzten Samstag haben wir uns [das Theaterstück, -e|ein bekanntes Theaterstück] von Schiller angesehen.",
            "Die Plätze in der fünften Reihe hatten wir schon vor Wochen gebucht.",
          ],
          [
            "Vor Beginn des Stücks warteten viele Besucher im Foyer.",
            "Als die Glocke läutete, nahmen alle ihre Plätze ein.",
            "In [die Theaterpause, -n|der Theaterpause] haben wir über die spannende Handlung gesprochen und Brezeln gegessen.",
          ],
          [
            "Die Darsteller spielten mit großer Begeisterung.",
            "Am Schluss stand der ganze Saal auf und spendete langanhaltenden [der Beifall (Sg.)|Beifall] für das gesamte Ensemble.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Theaterkultur und lebendige Bühnenkunst",
        intro: "Traditionelle Dramen, Regiekonzepte und die Faszination des Live-Spiels (B1).",
        paragraphs: [
          [
            "Im Zeitalter von Kino und Streaming-Portalen besitzt [das Theater, -|das Theater] einen unverwechselbaren, intimen Zauber.",
            "Der unmittelbare Kontakt zwischen den Darstellern auf [die Bühne, -n|der Bühne] und den Zuschauern im Saal erzeugt eine greifbare Spannung.",
          ],
          [
            "Eine gelungene [die Regie, -n|Regie] interpretiert historische Texte neu und schlägt Brücken zu aktuellen gesellschaftlichen Konflikten.",
            "Wenn ein begabter [der Schauspieler, -|Schauspieler] komplexe Emotionen glaubhaft transportiert, zieht er [das Publikum (Sg.)|das gesamte Publikum] in seinen Bann.",
          ],
          [
            "Der krönende Abschluss jeder Premiere ist der Moment, wenn das Licht angeht und begeisterter [der Applaus (Sg.)|Applaus] den Saal erfüllt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Theaterästhetik, Diskurskultur und die Rolle der darstellenden Künste",
        intro: "Postdramatisches Theater, Subventionen und gesellschaftliche Relevanz (B2).",
        paragraphs: [
          [
            "Die deutschsprachige Theaterlandschaft zeichnet sich durch ein weltweit einzigartiges Netz fest subventionierter Stadt- und Staatstheater aus.",
            "Hier fungiert die Bühne nicht als reine Unterhaltungsstätte, sondern als Forum für kritische gesellschaftspolitische Diskurse.",
          ],
          [
            "Avantgardistische [die Regie, -n|Regiekonzepte] dekonstruieren den klassischen Kanon dramatischer [das Theaterstück, -e|Theaterstücke], brechen die 'vierte Wand' auf und fordern [das Publikum (Sg.)|das Publikum] zur intellektuellen Auseinandersetzung heraus.",
          ],
          [
            "Wenn sich [der Vorhang, -̈e|der Vorhang] schließt, reflektiert der anhaltende [der Beifall (Sg.)|Beifall] nicht nur handwerkliche Schauspielkunst, sondern die transformative Kraft kollektiver ästhetischer Erfahrung.",
          ],
        ],
      },
    },
  },

  das_orchester: {
    description:
      "Symphonieorchester, Dirigent, Philharmonie, Partitur, Instrumentengruppen und Konzerte.",
    details: "Klassische Musik, Taktstock, Streicher, Bläser, Solisten und Akustik (A1–B2)",
    arabicDescription:
      "الأوركسترا السيمفونية (Das Orchester): قائد الأوركسترا (Dirigent)، دار الأوبرا والفيلهارموني (Philharmonie)، النوتة الموسيقية الشاملة (Partitur)، السيمفونية، الآلات الوترية والنفخية، الإيقاع وعصا القيادة (Taktstock)، والبروفة العامة (Generalprobe).",
    words: [
      {
        german: "das Orchester, -",
        arabic: "الأوركسترا (الفرقة الموسيقية الكبيرة)",
        english: "orchestra",
        example: "Das Symphonieorchester besteht aus über achtzig hochqualifizierten Musikern.",
      },
      {
        german: "der Dirigent, -en",
        arabic: "قائد الأوركسترا والمايسترو",
        english: "conductor, maestro",
        example: "Der Dirigent hebt den Taktstock und gibt den Musikern den präzisen Einsatz.",
      },
      {
        german: "die Philharmonie, -n",
        arabic: "دار الأوركسترا الفيلهارمونية",
        english: "philharmonic hall, philharmonic orchestra",
        example: "In der Berliner Philharmonie herrscht eine weltweit gerühmte Raumakustik.",
      },
      {
        german: "die Partitur, -en",
        arabic: "النوتة الموسيقية الشاملة لجميع الآلات",
        english: "score, musical score",
        example: "Auf dem Pult des Dirigenten liegt die dicke Partitur der neunten Symphonie.",
      },
      {
        german: "die Symphonie, -n",
        arabic: "السيمفونية (المؤلفة الموسيقية الكلاسيكية)",
        english: "symphony",
        example:
          "Beethovens fünfte Symphonie ist an ihren vier markanten Anfangstönen sofort erkennbar.",
      },
      {
        german: "das Streichinstrument, -e",
        arabic: "الآلة الوترية ذات القوس (كمان، فيولا، تشيلو)",
        english: "string instrument, strings",
        example: "Geigen und Celli gehören zur Familie der Streichinstrumente im Orchester.",
      },
      {
        german: "das Blasinstrument, -e",
        arabic: "آلة النفخ الهوائية (فلوت، بوق، كلارينيت)",
        english: "wind instrument, brass / woodwind",
        example:
          "Trompeten und Hörner sind kraftvolle Blasinstrumente im hinteren Orchesterbereich.",
      },
      {
        german: "die Pauke, -n",
        arabic: "طبلة الأوركسترا الضخمة (الدف الكبير)",
        english: "timpani, kettledrum",
        example: "Beim dramatischen Finale schlägt der Musiker kräftig auf die Pauke.",
      },
      {
        german: "der Taktstock, -̈e",
        arabic: "عصا المايسترو لضبط الإيقاع",
        english: "baton (conductor)",
        example: "Mit minimalen Bewegungen des Taktstocks führt der Maestro das Tempo der Musiker.",
      },
      {
        german: "der Konzertsaal, -̈e",
        arabic: "قاعة الحفلات الموسيقية الكبرى",
        english: "concert hall",
        example: "Der hölzerne Konzertsaal reflektiert den Klang warm und ausgewogen.",
      },
      {
        german: "die Generalprobe, -n",
        arabic: "البروفة النهائية الشاملة قبل العرض",
        english: "dress rehearsal, final rehearsal",
        example: "Vor der Premiere am Freitag fand gestern die anstrengende Generalprobe statt.",
      },
      {
        german: "der Solist, -en",
        arabic: "العازف المنفرد (السوليست)",
        english: "soloist",
        example: "Der berühmte Solist spielte das virtuose Violinkonzert ohne Noten auswendig.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Große Musik im Orchester",
        intro: "Einfache Sätze über Musiker, Instrumente und den Dirigenten (A1).",
        paragraphs: [
          [
            "In einem [das Orchester, -|Orchester] spielen viele Menschen zusammen.",
            "Vorne steht [der Dirigent, -en|der Dirigent].",
            "Er hält [der Taktstock, -̈e|einen kleinen Taktstock] in der Hand und schlägt den Takt.",
          ],
          [
            "Viele Musiker spielen Geige; das ist [das Streichinstrument, -e|ein Streichinstrument].",
            "Andere blasen in Trompeten; das ist [das Blasinstrument, -e|ein Blasinstrument].",
            "Ganz hinten steht [die Pauke, -n|die große Pauke].",
          ],
          ["[der Konzertsaal, -̈e|Der Konzertsaal] ist wunderschön und die Musik klingt herrlich."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Abend in der Philharmonie",
        intro: "Klassisches Konzert, Solisten und Beethovens Symphonien (A2).",
        paragraphs: [
          [
            "Gestern Abend hatte ich das Glück, ein Konzert in [die Philharmonie, -n|der Philharmonie] zu besuchen.",
            "Auf dem Programm stand [die Symphonie, -n|eine berühmte Symphonie] von Mozart.",
          ],
          [
            "Vor Beginn trat [der Solist, -en|ein junger Solist] mit seinem Cello auf die Bühne.",
            "Er spielte so gefühlvoll, dass der ganze Saal den Atem anhielt.",
            "Am Vormittag hatte das Orchester noch [die Generalprobe, -n|die Generalprobe] absolviert, damit jeder Ton perfekt saß.",
          ],
          ["Es war ein unvergessliches Klangerlebnis für alle Musikliebhaber."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Präzision und Harmonie im Klangkörper",
        intro: "Zusammenspiel verschiedener Instrumentengruppen und Orchesterleitung (B1).",
        paragraphs: [
          [
            "Ein professionelles [das Orchester, -|Symphonieorchester] gleicht einem hochkomplexen Uhrwerk, bei dem jedes Rädchen exakt ineinandergreifen muss.",
            "Vor dem Maestro liegt [die Partitur, -en|die Partitur], die jede einzelne Stimme aller Instrumentengruppen simultan abbildet.",
          ],
          [
            "Mit feinsten Gesten steuert [der Dirigent, -en|der Dirigent] Lautstärke, Phrasierung und Tempo.",
            "Während [das Streichinstrument, -e|die Streichinstrumente] für den warmen Grundklang sorgen, setzen [das Blasinstrument, -e|die Blasinstrumente] leuchtende Akzente und [die Pauke, -n|die Pauken] kraftvolle Höhepunkte.",
          ],
          [
            "Erst nach unzähligen Proben und einer perfekten [die Generalprobe, -n|Generalprobe] entfaltet ein Werk im vollbesetzten [der Konzertsaal, -̈e|Konzertsaal] seine emotionale Wucht.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Akustische Architektur, Interpretationstradition und Orchesterkultur",
        intro: "Historische Aufführungspraxis, Raumakustik und synchrone Interpretation (B2).",
        paragraphs: [
          [
            "Die Realisierung monumentaler Werke wie Mahlers Auferstehungs-[die Symphonie, -n|Symphonie] verlangt vom Klangkörper eine außergewöhnliche künstlerische Reife.",
            "Renommierte Institutionen wie [die Philharmonie, -n|die Philharmonie] bieten dank spezieller Weinberg-Architektur eine transparente Klangverteilung auf sämtlichen Rängen.",
          ],
          [
            "Der musikalische Leiter führt die Musiker über [der Taktstock, -̈e|den Taktstock] durch metrische Modulationen und polychrome Klangwelten, wobei [der Solist, -en|der Solist] im Dialog mit dem Tutti höchste interpretatorische Nuancierung beweist.",
          ],
          [
            "Die symphonische Tradition verbindet handwerkliche Perfektion mit kollektiver Empathie und konstituiert damit ein immaterielles Kulturgut von universeller Ausstrahlung.",
          ],
        ],
      },
    },
  },

  die_musikinstrumente: {
    description:
      "Musikinstrumente, Gitarre, Klavier, Geige, Flöte, Schlagzeug, Bass und Notenlehre.",
    details: "Instrumentengruppen, Saiten, Tasten, Üben und musikalisches Lernen (A1–B2)",
    arabicDescription:
      "الآلات الموسيقية (Die Musikinstrumente): الآلات الموسيقية، الجيتار (Gitarre)، البيانو (Klavier)، الكمان (Geige/Violine)، الفلوت (Flöte)، الطبول (Schlagzeug)، البوق (Trompete)، الباس (Bass)، الأوتار (Saite)، وممارسة التمارين اليومية (üben).",
    words: [
      {
        german: "das Musikinstrument, -e",
        arabic: "الآلة الموسيقية",
        english: "musical instrument",
        example: "Jedes Kind sollte die Gelegenheit haben, ein Musikinstrument zu erlernen.",
      },
      {
        german: "die Gitarre, -n",
        arabic: "الجيتار (القيثارة)",
        english: "guitar",
        example: "Am Lagerfeuer spielte er bekannte Lieder auf seiner akustischen Gitarre.",
      },
      {
        german: "das Klavier, -e",
        arabic: "البيانو والبيانو ذو الأجنحة",
        english: "piano",
        example: "Das schwarze Klavier hat weiße und schwarze Tasten aus edlem Holz.",
      },
      {
        german: "die Geige, -n",
        arabic: "الكمان (الفيولين)",
        english: "violin, fiddle",
        example: "Sie streicht mit dem Bogen sanft über die vier Saiten der Geige.",
      },
      {
        german: "die Flöte, -n",
        arabic: "الناي / الفلوت",
        english: "flute",
        example: "In der Grundschule lernen viele Kinder zunächst das Spielen auf der Blockflöte.",
      },
      {
        german: "das Schlagzeug, -e",
        arabic: "مجموعة الطبول والدرامز (الإيقاع)",
        english: "drums, drum kit",
        example:
          "Der Schlagzeuger hält mit dem Schlagzeug den energiegeladenen Rhythmus der Rockband.",
      },
      {
        german: "die Trompete, -n",
        arabic: "البوق النحاسي (الترمبيت)",
        english: "trumpet",
        example: "Der helle, glänzende Ton der Trompete schallte durch den gesamten Raum.",
      },
      {
        german: "der Bass, -̈e",
        arabic: "الباس (جيتار البيس ذو الترددات المنخفضة)",
        english: "bass, bass guitar",
        example: "Der tiefe Ton von dem Bass bringt den Boden zum Vibrieren.",
      },
      {
        german: "das Saxofon, -e",
        arabic: "الساكسفون (آلة الجاز)",
        english: "saxophone",
        example: "Das Saxofon erzeugt einen unverwechselbaren, rauchigen Klang im Jazzclub.",
      },
      {
        german: "das Akkordeon, -s",
        arabic: "الأكورديون (آلة المنفاخ الشعبية)",
        english: "accordion",
        example: "In der Volksmusik begleitet das handliche Akkordeon fröhliche Volkstänze.",
      },
      {
        german: "die Saite, -n",
        arabic: "الوتر الموسيقي للآلات الوترية",
        english: "string (instrument)",
        example: "Beim Stimmen ist mir leider eine dünne Saite der Gitarre gerissen.",
      },
      {
        german: "üben",
        arabic: "يتدرب / يمارس التمارين الموسيقية",
        english: "to practice, to rehearse",
        example: "Um ein Meister zu werden, muss man jeden Tag diszipliniert Tonleitern üben.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich lerne ein Musikinstrument",
        intro: "Einfache Sätze über Gitarre, Klavier und das tägliche Üben (A1).",
        paragraphs: [
          [
            "Ich liebe Musik und möchte [das Musikinstrument, -e|ein Musikinstrument] lernen.",
            "In meinem Zimmer steht [das Klavier, -e|ein Klavier].",
            "Ich drücke auf die weißen Tasten und höre helle Töne.",
          ],
          [
            "Mein Freund hat [die Gitarre, -n|eine neue Gitarre].",
            "Sie hat sechs [die Saite, -n|Saiten]. Er zupft die Saiten mit den Fingern.",
            "Seine Schwester spielt [die Flöte, -n|Flöte].",
          ],
          [
            "Jeden Nachmittag müssen wir dreißig Minuten [üben|üben].",
            "Musik machen macht richtig Spaß!",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Unsere kleine Schülerband",
        intro: "Schlagzeug, Bass, Gitarre und Bandproben im Keller (A2).",
        paragraphs: [
          [
            "Letztes Jahr haben meine Freunde und ich eine Band an der Schule gegründet.",
            "Ich spiele [die Gitarre, -n|E-Gitarre] und mein bester Kumpel Leo spielt [das Schlagzeug, -e|Schlagzeug].",
          ],
          [
            "Für den richtigen Beat sorgt Sarah auf [der Bass, -̈e|dem Bass].",
            "Jeden Samstag treffen wir uns im Keller, um neue Songs zu [üben|üben].",
            "Manchmal kommt auch Felix mit seinem glänzenden [das Saxofon, -e|Saxofon] vorbei und spielt tolle Solos.",
          ],
          ["Nächsten Monat haben wir unseren ersten Auftritt auf dem Schulfest."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Hingabe und Disziplin beim Musizieren",
        intro: "Musikalische Ausbildung, Intonation und Instrumentenpflege (B1).",
        paragraphs: [
          [
            "Das Erlernen eines Instruments schult Konzentration, Feinmotorik und emotionalen Ausdruck gleichermaßen.",
            "Ob man sich für [die Geige, -n|die Geige] oder [das Klavier, -e|das Klavier] entscheidet: Ohne beharrliches [üben|Üben] lassen sich keine klanglichen Fortschritte erzielen.",
          ],
          [
            "Saiteninstrumente reagieren sensibel auf Temperatur- und Luftfeuchtigkeitsschwankungen, weshalb jede einzelne [die Saite, -n|Saite] vor dem Spiel präzise gestimmt werden muss.",
            "Blasinstrumente wie [die Trompete, -n|die Trompete] verlangen hingegen eine ausgefeilte Atem- und Ansatztechnik.",
          ],
          [
            "Wer diese technischen Hürden meistert, erlebt die unvergleichliche Freude des gemeinsamen Musizierens.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Instrumentenbau, Polyphonie und klangliche Differenzierung",
        intro: "Klangfarben, Resonanzkörper und historische Akustik (B2).",
        paragraphs: [
          [
            "Die bauliche Evolution von Saiten- und Blasinstrumenten spiegelt Jahrhunderte handwerklicher und physikalischer Innovation wider.",
            "Bei der Meistergeige erzeugt das Zusammenspiel von Fichtenholzdecke, Steg und gespannten [die Saite, -n|Saiten] komplexe Obertöne von unvergleichlicher Brillanz.",
          ],
          [
            "Auf dem Konzertflügel ermöglicht die Repetitionsmechanik das Nuancieren feinster dynamischer Abstufungen zwischen Pianissimo und Fortissimo, wodurch polyphone Strukturen des [das Klavier, -e|Klaviers] transparent hervortreten.",
          ],
          [
            "Die Verschmelzung afroamerikanischer Rhythmen mit europäischen Blech- und Holzblasinstrumenten wie [das Saxofon, -e|dem Saxofon] legte im frühen 20. Jahrhundert das Fundament für Jazz und moderne Populärmusik.",
          ],
        ],
      },
    },
  },

  das_konzert: {
    description: "Live-Konzerte, Bands, Sänger, Festivalbühnen, Fans, Stimmung und Zugaben.",
    details: "Konzertveranstaltungen, Live-Musik, Open-Air-Festivals und Soundtechnik (A1–B2)",
    arabicDescription:
      "الحفلة الموسيقية (Das Konzert): الحفلات الحية (Live-Konzert)، الفرق الموسيقية (Band)، المطرب (Sänger)، خشبة المسرح، المعجبون (Fans)، تذاكر الدخول، الأجواء الحماسية (Stimmung)، المهرجانات (Festivals)، وطلب إعادة العزف (Zugabe).",
    words: [
      {
        german: "das Konzert, -e",
        arabic: "الحفلة الموسيقية المباشرة",
        english: "concert",
        example: "Am Freitagabend findet ein mitreißendes Konzert im Olympiastadion statt.",
      },
      {
        german: "die Band, -s",
        arabic: "الفرقة الموسيقية الغنائية",
        english: "band, music band",
        example: "Die Band spielt eine Mischung aus modernem Pop und Indie-Rock.",
      },
      {
        german: "der Sänger, -",
        arabic: "المغني والمطرب",
        english: "singer, vocalist",
        example: "Der charismatische Sänger sang den Refrain zusammen mit den Zuschauern.",
      },
      {
        german: "die Bühne, -n",
        arabic: "منصة ومسرح العرض الحي",
        english: "stage",
        example: "Bunte Scheinwerfer und Lasereffekte beleuchteten die riesige Bühne.",
      },
      {
        german: "der Fan, -s",
        arabic: "المعجب والمشجع الموسيقي",
        english: "fan, supporter",
        example: "Tausende begeisterte Fans standen stundenlang vor der Halle an.",
      },
      {
        german: "die Eintrittskarte, -n",
        arabic: "تذكرة دخول الحفل",
        english: "ticket, concert ticket",
        example: "Die begehrte Eintrittskarte war innerhalb von drei Minuten restlos ausverkauft.",
      },
      {
        german: "die Stimmung, -en",
        arabic: "الأجواء المعنوية والحماسية",
        english: "atmosphere, mood",
        example: "Im Publikum herrschte von der ersten Minute an eine fantastische Stimmung.",
      },
      {
        german: "das Festival, -s",
        arabic: "المهرجان الموسيقي الصيفي (في الهواء الطلق)",
        english: "festival, music festival",
        example: "Auf dem dreitägigen Open-Air-Festival zelten Musikfans auf den Wiesen.",
      },
      {
        german: "die Zugabe, -n",
        arabic: "الأغنية الإضافية نزولاً عند رغبة الجمهور (الإنكور)",
        english: "encore",
        example: "Nach lautstarken Rufen spielte die Gruppe noch zwei emotionale Zugaben.",
      },
      {
        german: "der Klang, -̈e",
        arabic: "الصوت واللحن الرنان",
        english: "sound, acoustics",
        example: "Der volle Klang der Gitarrenverstärker füllte die ganze Arena aus.",
      },
      {
        german: "die Musikanlage, -n",
        arabic: "نظام التكبير الصوتي (الساوند سيستم)",
        english: "sound system, PA system",
        example:
          "Die gewaltige Musikanlage lieferte druckvolle Bässe ohne störendes Verzerrungsgeräusch.",
      },
      {
        german: "jubeln",
        arabic: "يهتف بفرح ويشجع بحماس",
        english: "to cheer",
        example: "Die Menge fing laut an zu jubeln, als die Musiker die Bühne betraten.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein erstes Pop-Konzert",
        intro: "Einfache Sätze über Musik, Sänger, Bühne und jubelnde Fans (A1).",
        paragraphs: [
          [
            "Gestern war ich auf [das Konzert, -e|einem Konzert].",
            "Ich hatte [die Eintrittskarte, -n|eine Eintrittskarte] für die erste Reihe.",
            "[die Band, -s|Die Band] kam auf [die Bühne, -n|die Bühne] und alle fingen an zu [jubeln|jubeln].",
          ],
          [
            "[der Sänger, -|Der Sänger] hatte eine wunderschöne Stimme.",
            "Alle [der Fan, -s|Fans] sangen die Lieder laut mit.",
            "[die Stimmung, -en|Die Stimmung] war wirklich super.",
          ],
          [
            "Am Ende spielte die Gruppe noch [die Zugabe, -n|eine Zugabe].",
            "Das war ein toller Abend!",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Sommerfestival unter freiem Himmel",
        intro: "Open-Air-Konzerte, Soundanlagen und Festivalcamping (A2).",
        paragraphs: [
          [
            "Im Juli war ich mit meinen Freunden auf [das Festival, -s|einem großen Musikfestival] am See.",
            "Drei Tage lang spielten verschiedene Bands auf mehreren Bühnen.",
          ],
          [
            "[die Musikanlage, -n|Die riesige Musikanlage] sorgte dafür, dass [der Klang, -̈e|der kraftvolle Klang] bis zum Campingplatz zu hören war.",
            "Als der Headliner am Samstag auftrat, kochte [die Stimmung, -en|die Stimmung] regelrecht über.",
          ],
          [
            "Die Besucher tanzten im Scheinwerferlicht und feierten bis tief in die Nacht.",
            "Trotz des Regens am Sonntag war es das beste Event des Sommers.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Faszination des Live-Erlebnisses",
        intro: "Kollektive Begeisterung, Akustik und Bühnenshows (B1).",
        paragraphs: [
          [
            "Keine Studioaufnahme kann die rohe Energie eines echten Live-[das Konzert, -e|Konzerts] vollständig ersetzen.",
            "Wenn tausende gleichgesinnte [der Fan, -s|Fans] gemeinsam im Takt springen und [jubeln|jubeln], entsteht eine elektrisierende Dynamik.",
          ],
          [
            "Für den Erfolg ist modernste Veranstaltungstechnik ausschlaggebend: Eine perfekt ausgesteuerte [die Musikanlage, -n|Musikanlage] garantiert einen glasklaren [der Klang, -̈e|Klang] selbst in riesigen Stadien.",
          ],
          [
            "Nach zwei schweißtreibenden Stunden fordert das Publikum lautstark [die Zugabe, -n|eine Zugabe], bevor die Musiker unter tosendem Beifall die Bühne verlassen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Live-Entertainment, Touring-Logistik und Festivalökonomie",
        intro:
          "Eventmanagement, Audio-Engineering und ökonomische Dimensionen von Mega-Touren (B2).",
        paragraphs: [
          [
            "Die globale Musikindustrie hat sich von physischen Tonträgerverkäufen weitgehend auf das lukrative Live-Entertainment-Segment verlagert.",
            "Megatourneen internationaler Acts füllen Stadien weltweit, wobei der Erwerb einer [die Eintrittskarte, -n|Eintrittskarte] durch dynamische Preisanpassungssysteme ('Dynamic Pricing') zunehmend zur ökonomischen Hürde wird.",
          ],
          [
            "Auf gigantischen [das Festival, -s|Festivals] müssen Soundingenieure komplexe Line-Array-Systeme einmessen, um Schallreflexionen zu minimieren und [die Stimmung, -en|die akustische Atmosphäre] auf weitläufigem Terrain zu sichern.",
          ],
          [
            "Das kollektive Ritual des Konzerts manifestiert ein tiefes Bedürfnis nach analoger Verbundenheit in einer digitalisierten Freizeitkultur.",
          ],
        ],
      },
    },
  },

  musik_hoeren: {
    description: "Musikgenuss, Kopfhörer, Playlists, Melodien, Alben, Lautstärke und Ohrwürmer.",
    details: "Alltägliches Musikhören, Streaming, Songtexte, Musikgenres und Entspannung (A1–B2)",
    arabicDescription:
      "الاستماع إلى الموسيقى (Musik hören): الاستماع للموسيقى، سماعات الرأس (Kopfhörer)، قوائم التشغيل (Playlist)، الألحان (Melodie)، الأغاني (Lied/Song)، الإيقاع (Rhythmus)، الألبومات (Album)، دندنة الأغنية في الرأس (Ohrwurm)، والأنواع الموسيقية (Genre).",
    words: [
      {
        german: "die Musik (Sg.)",
        arabic: "الموسيقى",
        english: "music",
        example: "Gute Musik hilft mir dabei, mich nach einem langen Arbeitstag zu entspannen.",
      },
      {
        german: "der Kopfhörer, -",
        arabic: "سماعات الرأس والأذن",
        english: "headphones, earphones",
        example: "In der vollen U-Bahn setze ich meine Kopfhörer mit Geräuschunterdrückung auf.",
      },
      {
        german: "das Lied, -er",
        arabic: "الأغنية / الأنشودة",
        english: "song",
        example: "Dieses fröhliche Lied erinnert mich immer an meinen Urlaub in Italien.",
      },
      {
        german: "die Playlist, -s",
        arabic: "قائمة التشغيل الموسيقية",
        english: "playlist",
        example:
          "Ich habe mir eine spezielle Playlist für das morgendliche Fitnesstraining erstellt.",
      },
      {
        german: "die Melodie, -n",
        arabic: "اللحن والنغمة الموسيقية",
        english: "melody, tune",
        example: "Die sanfte Melodie des Klaviers beruhigt die aufgeregten Gedanken.",
      },
      {
        german: "der Rhythmus, Rhythmen",
        arabic: "الإيقاع والوزن الموسيقي",
        english: "rhythm",
        example: "Der schnelle Rhythmus der Trommeln lädt sofort zum Tanzen ein.",
      },
      {
        german: "das Album, Alben",
        arabic: "الألبوم الموسيقي الكامل",
        english: "album (music)",
        example: "Das neue Album der Rockgruppe enthält zwölf abwechslungsreiche Tracks.",
      },
      {
        german: "die Lautstärke (Sg.)",
        arabic: "درجة علو الصوت",
        english: "volume (audio)",
        example: "Regulieren Sie die Lautstärke, um Ihr Gehör langfristig zu schonen.",
      },
      {
        german: "der Ohrwurm, -̈er",
        arabic: "اللحن أو الأغنية العالقة في الذهن وتتكرر لا إرادياً",
        english: "earworm (catchy song stuck in one's head)",
        example: "Seit heute Morgen habe ich einen hartnäckigen Ohrwurm, den ich nicht loswerde.",
      },
      {
        german: "das Musikgenre, -s",
        arabic: "النوع والنمط الموسيقي (جاز، كلاسيك، روك)",
        english: "music genre",
        example: "Mein musikalischer Geschmack beschränkt sich nicht auf ein einziges Musikgenre.",
      },
      {
        german: "mitsingen",
        arabic: "يردد الغناء مع المؤدي",
        english: "to sing along",
        example: "Im Auto kann man laut und ungeniert bei jedem bekannten Refrain mitsingen.",
      },
      {
        german: "entspannen",
        arabic: "يسترخي ويرتاح",
        english: "to relax, to unwind",
        example: "Bei klassischer Instrumentalmusik kann ich wunderbar abschalten und entspannen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich höre gern Musik",
        intro: "Einfache Sätze über Musik, Kopfhörer und Lieder (A1).",
        paragraphs: [
          [
            "Ich höre jeden Tag [die Musik (Sg.)|Musik].",
            "Im Bus setze ich [der Kopfhörer, -|meine Kopfhörer] auf.",
            "Ich starte [die Playlist, -s|meine Playlist] auf dem Smartphone.",
          ],
          [
            "[das Lied, -er|Das Lied] hat eine schöne [die Melodie, -n|Melodie].",
            "[der Rhythmus, Rhythmen|Der Rhythmus] ist schnell und macht gute Laune.",
            "Ich möchte leise [mitsingen|mitsingen].",
          ],
          ["Bei schöner Musik kann ich mich wunderbar [entspannen|entspannen]."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Der hartnäckige Ohrwurm",
        intro: "Radiosongs, Alben und Melodien, die im Kopf bleiben (A2).",
        paragraphs: [
          [
            "Heute Morgen hörte ich beim Frühstück ein neues Lied im Radio.",
            "Schon nach zwei Minuten hatte ich [der Ohrwurm, -̈er|einen echten Ohrwurm].",
            "Die ganze Fahrt zur Arbeit sang ich die Melodie vor mich hin.",
          ],
          [
            "Am Nachmittag kaufte ich mir das komplette [das Album, Alben|Album] der Band online.",
            "Ich stellte [die Lautstärke (Sg.)|die Lautstärke] etwas höher und genoss alle Songs.",
            "Es ist faszinierend, wie ein einzelner Song den ganzen Tag verschönern kann.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Musik als Begleiter unseres Alltags",
        intro: "Einfluss von Musik auf Stimmung, Konzentration und Wohlbefinden (B1).",
        paragraphs: [
          [
            "Für viele Menschen ist [die Musik (Sg.)|Musik] ein unverzichtbarer Soundtrack ihres Lebens.",
            "Ob beim Sport, bei der konzentrierten Arbeit oder auf langen Reisen: Passende Klänge helfen dabei, fokussiert zu bleiben oder nach Anstrengungen zu [entspannen|entspannen].",
          ],
          [
            "Moderne Streaming-Dienste bieten maßgeschneiderte [die Playlist, -s|Playlists] für jede Lebenslage und jedes [das Musikgenre, -s|Musikgenre].",
            "Wenn eine einprägsame [die Melodie, -n|Melodie] und ein treibender [der Rhythmus, Rhythmen|Rhythmus] harmonieren, entsteht oft ein Song, bei dem man automatisch [mitsingen|mitsingen] möchte.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Neuroästhetik des Hörens und die Transformation des Musikkonsums",
        intro: "Dopaminausschüttung, Sounddesign und kuratierte Algorithmen (B2).",
        paragraphs: [
          [
            "Die neurowissenschaftliche Forschung belegt, dass der Konsum harmonischer Klangfolgen im Gehirn massive Dopaminausschüttungen im Belohnungssystem stimuliert.",
            "Moderne Kopfhörer mit aktiver Geräuschunterdrückung schaffen eine akustische Oase, die den Nutzer vollständig von seiner Umwelt isoliert.",
          ],
          [
            "Gleichzeitig hat der Übergang vom kohärenten [das Album, Alben|Album] zur fragmentierten Single-Kultur und algorithmischen Playlists die Haltung von Hörern verändert.",
            "Künstler komponieren Refrains heute oft so, dass sie innerhalb von Sekunden als viraler [der Ohrwurm, -̈er|Ohrwurm] auf Social-Media-Plattformen zünden.",
          ],
          [
            "Trotz dieses Trends bleibt der bewusste, kontemplative Musikgenuss eine der tiefgründigsten Formen ästhetischer Selbstfürsorge.",
          ],
        ],
      },
    },
  },
};

const fzPath = "src/data/vocabulary/freizeit.json";
const fzData = JSON.parse(fs.readFileSync(fzPath, "utf8"));

for (const sec of fzData.sections) {
  for (const t of sec.topics) {
    if (!batch1Data[t.id]) {
      continue;
    }

    const src = batch1Data[t.id];
    t.description = src.description;
    t.details = src.details;
    t.arabicDescription = src.arabicDescription;
    t.words = src.words;
    t.stories = src.stories;
    console.log("Applied batch 1 to topic:", t.id, "(", t.title, ") -> words:", t.words.length);
  }
}

const res = vocabularyCollectionSchema.safeParse(fzData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(fzPath, JSON.stringify(fzData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to freizeit.json!");
