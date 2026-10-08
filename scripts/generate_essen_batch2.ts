import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  beeren_und_steinobst: {
    description: "Erdbeeren, Himbeeren, Kirschen, Pfirsiche, Pflaumen und Erntezeit.",
    details: "Beerenarten, Steinobstsorten, Kerne und Konservierung (A1–B2)",
    arabicDescription:
      "التوتيات والثمار ذات النواة (Beeren und Steinobst): مفردات الفراولة (Erdbeere)، توت العليق (Himbeere)، الكرز (Kirsche)، الدراق (Pfirsich)، والبرقوق (Pflaume)، مع تقنيات القطف، صناعة المربى، وأصناف الفاكهة الصيفية.",
    words: [
      {
        german: "die Erdbeere, -n",
        arabic: "الفراولة",
        english: "strawberry",
        example: "Im Juni pflücken wir frische rote Erdbeeren direkt auf dem Erdbeerfeld.",
      },
      {
        german: "die Himbeere, -n",
        arabic: "توت العليق الأحمر",
        english: "raspberry",
        example: "Die zarten Himbeeren schmecken herrlich süß und zergehen förmlich auf der Zunge.",
      },
      {
        german: "die Blaubeere, -n",
        arabic: "التوت الأزرق / العنب البري",
        english: "blueberry",
        example: "Blaubeeren enthalten viele Antioxidantien und passen perfekt zum Müsli.",
      },
      {
        german: "die Brombeere, -n",
        arabic: "توت العليق الأسود",
        english: "blackberry",
        example: "Im Spätsommer reifen die tiefschwarzen Brombeeren an dornigen Sträuchern.",
      },
      {
        german: "die Kirsche, -n",
        arabic: "الكرز",
        english: "cherry",
        example: "Knackige Süßkirschen hängen im Juli paarweise an den hohen Ästen des Baumes.",
      },
      {
        german: "der Pfirsich, -e",
        arabic: "الدراق / الخوخ",
        english: "peach",
        example: "Der sonnengereifte Pfirsich hat eine samtige Haut und ist unglaublich saftig.",
      },
      {
        german: "die Aprikose, -n",
        arabic: "المشمش",
        english: "apricot",
        example: "In Österreich nennt man die goldgelbe Aprikose traditionell Marille.",
      },
      {
        german: "die Pflaume, -n",
        arabic: "البرقوق / الشياح",
        english: "plum",
        example: "Aus süßen Pflaumen bäckt man den beliebten Zwetschgenkuchen mit Butterstreuseln.",
      },
      {
        german: "der Fruchtkern, -e",
        arabic: "النواة الصلبة للثمرة",
        english: "stone, pit, kernel",
        example: "Vor dem Backen muss man den harten Fruchtkern aus der Kirsche entfernen.",
      },
      {
        german: "das Beerenobst (Sg.)",
        arabic: "الثمار التوتية",
        english: "soft fruit, berries",
        example: "Beerenobst ist druckempfindlich und sollte am besten frisch verzehrt werden.",
      },
      {
        german: "das Steinobst (Sg.)",
        arabic: "الثمار ذات النواة الصلبة",
        english: "stone fruit",
        example: "Zu Steinobst zählen Früchte wie Kirschen, Pflaumen, Pfirsiche und Aprikosen.",
      },
      {
        german: "pflücken (pflückte, hat gepflückt)",
        arabic: "يقطف الثمار باليد",
        english: "to pick, pluck",
        example: "Am Wochenende fahren viele Familien aufs Land, um frisches Obst zu pflücken.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Beeren pflücken im Sommer",
        intro: "Einfache Sätze über Erdbeeren, Kirschen und frisches Obst aus dem Garten (A1).",
        paragraphs: [
          [
            "Im Sommer gibt es viele süße Früchte.",
            "Ich gehe mit meiner Familie in den Garten, um frische Früchte zu [pflücken (pflückte, hat gepflückt)|pflücken].",
            "Wir finden viele rote [die Erdbeere, -n|Erdbeeren] und kleine [die Himbeere, -n|Himbeeren].",
            "Die Beeren sind rot, weich und schmecken wunderbar süß.",
          ],
          [
            "Am großen Baum hängen auch reife [die Kirsche, -n|Kirschen].",
            "Ich esse eine süße Kirsche und spucke den kleinen [der Fruchtkern, -e|Fruchtkern] vorsichtig aus.",
            "Auf dem Tisch liegt auch ein gelber [der Pfirsich, -e|Pfirsich].",
            "Frisches Obst ist gesund und mein liebster Sommernachtisch.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kuchen backen mit Steinobst und Beeren",
        intro: "Marmeladen kochen und Zwetschgenkuchen zubereiten im Spätsommer (A2).",
        paragraphs: [
          [
            "Im August reift im Garten meiner Großmutter das ganze [das Steinobst (Sg.)|Steinobst].",
            "Wir ernten viele Eimer voller dunkelblauer [die Pflaume, -n|Pflaumen] und goldener [die Aprikose, -n|Aprikosen].",
            "Zuerst waschen wir die Früchte und schneiden sie in der Mitte auf, um den harten [der Fruchtkern, -e|Fruchtkern] herauszuholen.",
            "Daraus backt meine Großmutter einen traditionellen Pflaumenkuchen mit Hefe und Zimt.",
          ],
          [
            "Aus reifen [die Brombeere, -n|Brombeeren] und dunklen [die Blaubeere, -n|Blaubeeren] kochen wir süße Marmelade für den Winter.",
            "Empfindliches [das Beerenobst (Sg.)|Beerenobst] muss man schnell verarbeiten, weil es sonst nach wenigen Tagen schimmelt.",
            "Wenn der Kuchen aus dem Backofen kommt, duftet die ganze Küche herrlich nach Frucht und Butter.",
            "Mit einem Klecks Schlagsahne schmeckt das Obstgebäck einfach himmlisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Saisonale Erntefreuden und traditionelle Obstverarbeitung",
        intro: "Vom Erdbeerland bis zum Einwecken: Die Kultur des heimischen Obstes (B1).",
        paragraphs: [
          [
            "In Deutschland markiert der Beginn der Erdbeersaison im Mai den ersehnten Auftakt des kulinarischen Sommers.",
            "Tausende Menschen strömen auf Selbstpflückfelder, um kiloweise [die Erdbeere, -n|Erdbeeren] direkt vom Feld zu ernten und frisch zu genießen.",
            "Kurz darauf folgen saftige Süßkirschen aus dem Alten Land bei Hamburg oder der Fränkischen Schweiz, den größten geschlossenen Kirschanbaugebieten Europas.",
          ],
          [
            "Bei der Verarbeitung von [das Steinobst (Sg.)|Steinobst] wie [die Pflaume, -n|Pflaumen], Mirabellen und [die Aprikose, -n|Aprikosen] kommt es auf das richtige Reifestadium an.",
            "Früchte für Konfitüren sollten reich an natürlichem Pektin sein, während Backobst wie die spitze Zwetschge eine feste Struktur aufweisen muss, damit der Hefeteig nicht durchweicht.",
            "Das sorgfältige Entkernen, bei dem jeder harte [der Fruchtkern, -e|Fruchtkern] mechanisch entfernt wird, ist bis heute ein fester Bestandteil herbstlicher Küchentraditionen.",
          ],
          [
            "Zugleich erfreut sich wild gesammeltes [das Beerenobst (Sg.)|Beerenobst] wie [die Blaubeere, -n|Blaubeeren] und [die Brombeere, -n|Brombeeren] wachsender Beliebtheit, da es durch intensive Farbstoffe und wilde Aromen besticht.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Anthocyane, Pektinchemie und Pomologie des heimischen Obstes",
        intro:
          "Biochemische Eigenschaften von Fruchtsäuren, Polyphenolen und agrarökologische Sortenvielfalt (B2).",
        paragraphs: [
          [
            "Die pomologische Differenzierung zwischen [das Beerenobst (Sg.)|Beerenobst] und [das Steinobst (Sg.)|Steinobst] beruht auf grundlegenden morphologischen Merkmalen des Perikarps.",
            "Während bei Beeren das gesamte Fruchtgehäuse saftig auswächst, verholzt beim Steinobst das Endokarp zum charakteristischen harten [der Fruchtkern, -e|Fruchtkern], der den Samen umschließt.",
            "Biochemisch zeichnen sich dunkle Beeren wie [die Brombeere, -n|Brombeeren] und [die Blaubeere, -n|Blaubeeren] durch exzeptionell hohe Konzentrationen an Anthocyanen aus.",
            "Diese wasserlöslichen Pflanzenfarbstoffe fungieren im humanen Organismus als potente Radikalfänger und schützen Gefäßwände vor oxidativem Stress.",
          ],
          [
            "Im Kontext der Veredelung zu Gelees und Konfitüren bestimmt das intermolekulare Zusammenspiel von Methoxyliertem Pektin, Saccharose und Fruchtsäuren die Festigkeit des Gels.",
            "Steinobstsorten wie [der Pfirsich, -e|Pfirsich] oder [die Pflaume, -n|Pflaume] erfordern eine exakte Kontrolle des pH-Wertes, um ein Auskristallisieren des Zuckers zu verhindern und die aromatische Frische flüchtiger Ester zu konservieren.",
          ],
          [
            "Zunehmend setzen Erzeuger auf alte, robuste Landsorten, die im Gegensatz zu überzüchteten Hybridformen ein vielschichtigeres Säure-Süße-Profil besitzen und natürliche Resistenzen gegen Schädlinge aufweisen.",
          ],
        ],
      },
    },
  },
  exotische_fruechte: {
    description: "Bananen, Ananas, Mango, Papaya, Avocado, Passionsfrucht und Kokosnuss.",
    details: "Tropenfrüchte, Reifung, Import und exotische Küche (A1–B2)",
    arabicDescription:
      "الفواكه الاستوائية (Exotische Früchte): مفردات الموز (Banane)، الأناناس (Ananas)، المانجو (Mango)، البابايا (Papaya)، الأفوكادو (Avocado)، وجوز الهند (Kokosnuss)، مع قضايا الاستيراد، نضج الثمار، وسلاسل الإمداد العالمية.",
    words: [
      {
        german: "die Banane, -n",
        arabic: "الموز",
        english: "banana",
        example: "Bananen sind reich an Kalium und liefern schnelle Energie beim Sport.",
      },
      {
        german: "die Ananas, -se",
        arabic: "الأناناس",
        english: "pineapple",
        example: "Eine frische Ananas schmeckt süß-säuerlich und enthält das Enzym Bromelain.",
      },
      {
        german: "die Mango, -s",
        arabic: "المانجو",
        english: "mango",
        example:
          "Die reife Mango verströmt einen betörenden Duft und hat saftiges, orangefarbenes Fruchtfleisch.",
      },
      {
        german: "die Papaya, -s",
        arabic: "البابايا",
        english: "papaya",
        example:
          "Die tropische Papaya ist besonders magenfreundlich und enthält schwarze, pfeffrige Kerne.",
      },
      {
        german: "die Avocado, -s",
        arabic: "الأفوكادو",
        english: "avocado",
        example:
          "Aus reifer Avocado, Tomaten und Limettensaft bereitet man mexikanische Guacamole zu.",
      },
      {
        german: "die Kiwi, -s",
        arabic: "الكيوي",
        english: "kiwi",
        example: "Die grüne Kiwi hat eine pelzige braune Schale und liefert extrem viel Vitamin C.",
      },
      {
        german: "die Passionsfrucht, -̈e",
        arabic: "فاكهة الآلام / الماراكويا",
        english: "passion fruit, maracuja",
        example: "Die aromatische Passionsfrucht löffelt man frisch aus oder gibt sie in Desserts.",
      },
      {
        german: "der Granatapfel, -̈",
        arabic: "الرمان",
        english: "pomegranate",
        example:
          "Die rubinroten Kerne des Granatapfels verfeinern Salate und orientalische Reisgerichte.",
      },
      {
        german: "die Kokosnuss, -̈e",
        arabic: "جوز الهند",
        english: "coconut",
        example: "Aus der harten Kokosnuss gewinnt man kühles Kokoswasser und cremige Kokosmilch.",
      },
      {
        german: "die Drachenfrucht, -̈e",
        arabic: "فاكهة التنين (بيتاهايا)",
        english: "dragon fruit, pitahaya",
        example:
          "Die Drachenfrucht sieht mit ihren pinkfarbenen Schuppen spektakulär aus, schmeckt aber sehr mild.",
      },
      {
        german: "reif",
        arabic: "ناضج ومكتمل النمو",
        english: "ripe",
        example: "Man sollte die Mango erst anschneiden, wenn sie weich und vollkommen reif ist.",
      },
      {
        german: "tropisch",
        arabic: "استوائي / مداري",
        english: "tropical",
        example: "Tropische Früchte wachsen in warmen Regionen rund um den Äquator.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Bunte Früchte aus fernen Ländern",
        intro: "Einfache Sätze über Bananen, Ananas, Mango und Avocado im Alltag (A1).",
        paragraphs: [
          [
            "Im Supermarkt kaufe ich leckere Früchte aus warmen Ländern.",
            "Ich nehme drei gelbe [die Banane, -n|Bananen] und eine grüne [die Kiwi, -s|Kiwi] mit.",
            "Mein Freund liebt süße [die Mango, -s|Mango] und frische [die Ananas, -se|Ananas].",
            "Diese Früchte sind [tropisch|tropisch] und schmecken herrlich exotisch.",
          ],
          [
            "Heute mache ich einen bunten Obstsalat für meine Freunde.",
            "Die Mango ist weich, süß und perfekt [reif|reif].",
            "Zum Frühstück esse ich auch gern Brot mit gesunder [die Avocado, -s|Avocado].",
            "Frisches Obst gibt mir viel Kraft für den ganzen Tag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Exotischer Fruchtsalat und Smoothies",
        intro: "Zubereitung von Smoothies und tropischen Salaten mit Kokosnuss und Papaya (A2).",
        paragraphs: [
          [
            "Wenn draußen der Himmel grau ist, bringe ich mit Früchten Sommerlaune in die Küche.",
            "Gestern habe ich auf dem Großmarkt eine reife [die Papaya, -s|Papaya] und zwei Früchte [die Passionsfrucht, -̈e|Passionsfrucht] gekauft.",
            "Wenn man die Passionsfrucht aufschneidet, strömt sofort ein intensiver aromatischer Duft durch den Raum.",
            "Ich gebe das Fruchtfleisch zusammen mit einer Banane und Kokoswasser in den Mixer für einen gesunden Smoothie.",
          ],
          [
            "Für meinen Salat öffne ich vorsichtig einen roten [der Granatapfel, -̈|Granatapfel] und streue die knackigen Kerne darüber.",
            "Aus einer frischen [die Kokosnuss, -̈e|Kokosnuss] trinken wir das erfrischende Wasser direkt mit einem Strohhalm.",
            "Manche Früchte wie die pinke [die Drachenfrucht, -̈e|Drachenfrucht] sehen wunderschön aus, schmecken aber eher dezent.",
            "Tropische Früchte bringen Abwechslung und neue Aromen in unseren Alltag.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Globaler Handel und der Boom exotischer Superfoods",
        intro: "Von der Luxusware zum Alltagsgut: Ökologische und kulinarische Aspekte (B1).",
        paragraphs: [
          [
            "Noch vor wenigen Jahrzehnten galten Südfrüchte wie [die Ananas, -se|Ananas] oder [die Mango, -s|Mango] in Mitteleuropa als rare Luxusgüter, die nur zu besonderen Festtagen aufgetischt wurden.",
            "Heute sind gelbe [die Banane, -n|Bananen] und cremige [die Avocado, -s|Avocados] feste Bestandteile des täglichen Warenkorbs in jedem Discounter.",
            "Der globale Boom der Avocado, angetrieben durch den weltweiten Trend zu 'Avocado-Toast' und pflanzlichen Fetten, hat jedoch erhebliche Schattenseiten: Ihr immenser Wasserverbrauch in Trockengebieten Mexikos oder Chiles löst anhaltende ökologische Kontroversen aus.",
          ],
          [
            "Auch der Reifeprozess tropischer Früchte stellt die Logistik vor gewaltige Aufgaben: Viele Sorten werden [reif|unreif] und grün geerntet und in temperaturkontrollierten Reifekammern mit Ethylen begast, bevor sie in den Handel gelangen.",
            "Wer einmal eine baumgereifte Papaya oder [die Passionsfrucht, -̈e|Passionsfrucht] in den Tropen gekostet hat, bemerkt sofort den qualitativen Unterschied zur importierten Kühlhausware.",
          ],
          [
            "Trotz dieser Debatten bereichern Exoten wie der antioxidantienreiche [der Granatapfel, -̈|Granatapfel] die heimische Speisekarte um wertvolle Nährstoffe und neue geschmackliche Horizonte.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Globale Lieferketten, Klimabilanz und postmortale Fruchtbiologie",
        intro:
          "Klimakterische vs. nicht-klimakterische Früchte, Ökobilanzen und Fair-Trade-Mechanismen (B2).",
        paragraphs: [
          [
            "Die physiologische Einteilung von [tropisch|tropischen] Früchten in klimakterische und nicht-klimakterische Arten ist für den interkontinentalen Seetransport von elementarer Bedeutung.",
            "Klimakterische Früchte wie die [die Banane, -n|Banane] oder die [die Mango, -s|Mango] durchlaufen nach der Trennung von der Mutterpflanze einen markanten respiratorischen Schub, bei dem autokatalytisch Ethylen synthetisiert wird und Stärke enzymatisch in Fruktose und Glukose zerfällt.",
            "Nicht-klimakterische Früchte wie die [die Ananas, -se|Ananas] hingegen müssen im physiologisch vollkommen [reif|reifen] Zustand geerntet werden, da sie keine Stärkereserven zur nachträglichen Zuckerakkumulation besitzen.",
          ],
          [
            "Vor dem Hintergrund ambitionierter Klimaschutzziele gerät der CO2-Fußabdruck eingeflogener Flugmangos oder Papayas zunehmend in die Kritik verantwortungsbewusster Gastronomen.",
            "Die Sensibilisierung der Konsumenten befördert die Etablierung streng kontrollierter Fair-Trade-Lieferketten, die faire Entlohnung auf Plantagen mit CO2-Kompensationen und wassereffizienten Tropfbewässerungssystemen verknüpfen.",
          ],
          [
            "Kulinarisch fungieren Früchte wie die [die Kokosnuss, -̈e|Kokosnuss] oder der [der Granatapfel, -̈|Granatapfel] als vitale Brückenbauer zwischen asiatischer, karibischer und levantinischer Fusionsküche.",
          ],
        ],
      },
    },
  },
  zitrusfruechte_und_melonen: {
    description: "Zitronen, Orangen, Mandarinen, Grapefruits, Limetten und Melonen.",
    details: "Zitrusöle, Zesten, Fruchtsäuren und sommerliche Hydratation (A1–B2)",
    arabicDescription:
      "الحمضيات والبطيخ (Zitrusfrüchte und Melonen): مفردات الليمون (Zitrone)، البرتقال (Orange)، المندرين (Mandarine)، الجريب فروت (Grapefruit)، اللايم (Limette)، البطيخ الأحمر (Wassermelone)، والشمام (Honigmelone)، مع استخراج العصير والزيوت العطرية.",
    words: [
      {
        german: "die Zitrusfrucht, -̈e",
        arabic: "فاكهة من الحمضيات / الموالح",
        english: "citrus fruit",
        example:
          "Jede Zitrusfrucht liefert wertvolle Zitronensäure und eine Extraportion Vitamin C.",
      },
      {
        german: "die Zitrone, -n",
        arabic: "الليمون الأصفر",
        english: "lemon",
        example:
          "Ein paar Tropfen frischer Zitrone runden den Geschmack von Fischgerichten perfekt ab.",
      },
      {
        german: "die Orange, -n",
        arabic: "البرتقال",
        english: "orange",
        example:
          "Zum Frühstück trinke ich am liebsten ein Glas frisch gepressten Saft aus süßen Orangen.",
      },
      {
        german: "die Mandarine, -n",
        arabic: "اليوسفي / المندرين",
        english: "tangerine, mandarin",
        example:
          "Im Winter duftet das Wohnzimmer nach Mandarinen, die sich leicht mit der Hand schälen lassen.",
      },
      {
        german: "die Grapefruit, -s",
        arabic: "الجريب فروت (الليمون الهندي)",
        english: "grapefruit",
        example: "Die herbe Grapefruit schmeckt angenehm bitter-süß und regt den Stoffwechsel an.",
      },
      {
        german: "die Limette, -n",
        arabic: "الليمون الحامض الأخضر (اللايم)",
        english: "lime",
        example:
          "Für erfrischende Cocktails und asiatische Currys braucht man den sauren Saft der Limette.",
      },
      {
        german: "die Wassermelone, -n",
        arabic: "البطيخ الأحمر",
        english: "watermelon",
        example: "An heißen Sommertagen löscht eine kühle Scheibe Wassermelone sofort den Durst.",
      },
      {
        german: "die Honigmelone, -n",
        arabic: "الشمام الأصفر / بطيخ العسل",
        english: "honeydew melon",
        example:
          "Süße Honigmelone mit feinem Parmaschinken ist eine beliebte sommerliche Vorspeise.",
      },
      {
        german: "die Cantaloupe-Melone, -n",
        arabic: "شمام الكانتالوب البرتقالي",
        english: "cantaloupe melon",
        example:
          "Die Cantaloupe-Melone hat eine genetzte Schale und duftendes, orangefarbenes Fleisch.",
      },
      {
        german: "die Zitrusschale, -n",
        arabic: "قشرة الحمضيات الغنية بالزيوت العطرية",
        english: "citrus peel, zest",
        example:
          "Man reibt die Zitrusschale einer Bio-Zitrone ab, um den Kuchenteig zu aromatisieren.",
      },
      {
        german: "auspressen (presste aus, hat ausgepresst)",
        arabic: "يعصر الفاكهة لاستخراج العصير",
        english: "to squeeze, juice",
        example:
          "Mit der Handpresse kann man Orangen und Zitronen schnell und gründlich auspressen.",
      },
      {
        german: "erfrischend",
        arabic: "منعش ومجدد للنشاط",
        english: "refreshing",
        example:
          "Kaltes Wasser mit Zitronenscheiben und Minze ist an heißen Tagen wunderbar erfrischend.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Frischer Orangensaft am Morgen",
        intro: "Einfache Sätze über Zitronen, Orangen und Wassermelone im Sommer (A1).",
        paragraphs: [
          [
            "Ich trinke jeden Morgen frischen Saft für meine Gesundheit.",
            "Ich nehme zwei [die Orange, -n|Orangen] und eine gelbe [die Zitrone, -n|Zitrone].",
            "Mit der Presse werde ich die Früchte [auspressen (presste aus, hat ausgepresst)|auspressen].",
            "Der Saft schmeckt süß, ein bisschen sauer und ist herrlich [erfrischend|erfrischend].",
          ],
          [
            "Im Sommer kaufe ich oft eine große grüne [die Wassermelone, -n|Wassermelone].",
            "Ich schneide sie in dicke rote Scheiben für meine Kinder.",
            "Im Winter essen wir lieber süße [die Mandarine, -n|Mandarinen] auf dem Sofa.",
            "Früchte bringen jeden Tag gute Laune in unser Haus.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Sommerliche Frische mit Melonen und Zitrusfrüchten",
        intro: "Vorspeisen mit Honigmelone und spritzige Getränke mit Limetten (A2).",
        paragraphs: [
          [
            "Wenn wir im Sommer Freunde zum Grillen einladen, bereite ich immer eine leichte Vorspeise vor.",
            "Ich schneide eine reife [die Honigmelone, -n|Honigmelone] oder eine [die Cantaloupe-Melone, -n|Cantaloupe-Melone] in schmale Schiffchen und wickele Schinken darum.",
            "Die Kombination aus süßer Melone und salzigem Schinken schmeckt fantastisch.",
            "Jede [die Zitrusfrucht, -̈e|Zitrusfrucht] eignet sich außerdem hervorragend für sommerliche Getränke.",
          ],
          [
            "In eine große Glaskaraffe mit Mineralwasser gebe ich Scheiben von einer grünen [die Limette, -n|Limette] und ein paar Eiswürfel.",
            "Mein Vater trinkt morgens gern den leicht bitteren Saft von einer rosa [die Grapefruit, -s|Grapefruit].",
            "Beim Backen verwende ich oft die feine [die Zitrusschale, -n|Zitrusschale] einer Bio-Zitrone, weil sie toll duftet.",
            "So schmeckt der Sommer fruchtig, leicht und gesund.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Mediterrane Zitruskultur und Sommerhydratation",
        intro:
          "Vom sizilianischen Zitronenhain zur Melonenzeit: Frische und kulinarische Verfeinerung (B1).",
        paragraphs: [
          [
            "Zitrusfrüchte und Melonen stehen seit jeher als Synonyme für mediterrane Leichtigkeit und sonnige Lebensfreude.",
            "Während die [die Wassermelone, -n|Wassermelone] mit einem Wassergehalt von über 90 Prozent der ideale Durstlöscher an heißen Julitagen ist, veredeln Zitrusgewächse Speisen auf subtile Art.",
            "In der gehobenen Hausmannskost nutzt man nicht nur den säuerlichen Saft, sondern reibt gezielt die [die Zitrusschale, -n|Zitrusschale] von unbehandelten Zitronen oder Orangen ab, um Soßen, Gebäck und Schmorgerichten eine ätherische Tiefe zu verleihen.",
          ],
          [
            "Interessant ist auch der saisonale Wandel des Konsums: Während im Hochsommer [die Limette, -n|Limette] und Wassermelone dominieren, läutet die Ernte der [die Mandarine, -n|Mandarine] und Klementine im November traditionell die Vorweihnachtszeit ein.",
            "Die herbe [die Grapefruit, -s|Grapefruit] wiederum gilt dank ihres Bitterstoffs Naringin als klassischer Bestandteil von vitalisierenden Frühstückskonzepten, der die Gallensaftproduktion ankurbelt.",
          ],
          [
            "Um das Maximum an Aroma zu gewinnen, sollte man Früchte stets bei Zimmertemperatur [auspressen (presste aus, hat ausgepresst)|auspressen], da kalte Früchte aus dem Kühlschrank deutlich weniger Saft abgeben.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Flavonoide, Terpene und die Physik der Osmose bei Kürbisgewächsen",
        intro:
          "Biochemische Analyse ätherischer Zitrusöle, Naringin-Pharmakokinetik und Melonen-Osmose (B2).",
        paragraphs: [
          [
            "Die botanische Familie der Rutaceae, zu der jede [die Zitrusfrucht, -̈e|Zitrusfrucht] zählt, fasziniert durch eine hochkomplexe Synthese von Terpenen und Flavonoiden im sogenannten Flavedo.",
            "In den Öldrüsen der äußeren Schicht konzentriert sich Limonen, ein Kohlenwasserstoff, der nicht nur für das charakteristische Aroma von [die Zitrone, -n|Zitrone] und [die Orange, -n|Orange] verantwortlich ist, sondern auch industrielle Verwendung als natürliches Lösungsmittel findet.",
            "Pharmakologisch beachtenswert ist das in der [die Grapefruit, -s|Grapefruit] enthaltene Flavonoid Naringin, das Cytochrom-P450-Enzyme in der Leber kompetitiv hemmt und somit die Bioverfügbarkeit diverser Medikamente unvorhersehbar amplifizieren kann.",
          ],
          [
            "Melonen wiederum - ob [die Wassermelone, -n|Wassermelone] oder [die Cantaloupe-Melone, -n|Cantaloupe-Melone] - gehören den Cucurbitaceen an und zeichnen sich durch ein extremes osmotisches Gleichgewicht aus.",
            "Das Zusammenspiel von zellulärem Turgordruck und Fruktosekonzentration erfordert minutiöses Erntetiming, da überreife Exemplare durch einsetzende Pektinspaltung rasch eine mehlige, unansehnliche Konsistenz annehmen.",
          ],
          [
            "In der modernen Fusionsgastronomie wird das Spannungsverhältnis zwischen der schneidenden Säure von [die Limette, -n|Limetten] und der runden Süße von Melonen als sensorisches Werkzeug par excellence kultiviert.",
          ],
        ],
      },
    },
  },
  nuesse_und_trockenobst: {
    description: "Walnüsse, Mandeln, Haselnüsse, Datteln, Feigen, Rosinen und Hirnnahrung.",
    details: "Schalenfrüchte, Trocknung, gesunde Fette und Studentenfutter (A1–B2)",
    arabicDescription:
      "المكسرات والفواكه المجففة (Nüsse und Trockenobst): مفردات الجوز (Walnuss)، البندق (Haselnuss)، اللوز (Mandel)، الكاجو (Cashewnuss)، الفستق (Pistazie)، الزبيب (Rosine)، التمر (Dattel)، والتين (Feige)، مع أحماض أوميغا الدهنية وكسارة البندق.",
    words: [
      {
        german: "die Nuss, -̈e",
        arabic: "الجوز / المكسرات واللوزيات",
        english: "nut",
        example: "Eine Handvoll Nüsse am Tag liefert wertvolle Energie und schützt das Herz.",
      },
      {
        german: "die Walnuss, -̈e",
        arabic: "عين الجمل / جوز عين الجمل",
        english: "walnut",
        example: "Die Walnuss sieht aus wie ein kleines Gehirn und ist berühmt als 'Brainfood'.",
      },
      {
        german: "die Haselnuss, -̈e",
        arabic: "البندق",
        english: "hazelnut",
        example: "In der Schokolade und im Nougat sorgt geröstete Haselnuss für ein tolles Aroma.",
      },
      {
        german: "die Mandel, -n",
        arabic: "اللوز",
        english: "almond",
        example:
          "Gebrannte Mandeln duften auf dem Weihnachtsmarkt verführerisch nach Zucker und Vanille.",
      },
      {
        german: "die Cashewnuss, -̈e",
        arabic: "الكاجو",
        english: "cashew nut",
        example:
          "Ungesalzene Cashewnüsse schmecken mild-nussig und eignen sich für cremige vegane Saucen.",
      },
      {
        german: "die Pistazie, -n",
        arabic: "الفستق الحلبي",
        english: "pistachio",
        example: "Grüne Pistazien verleihen orientalischem Gebäck und Eiscreme eine feine Note.",
      },
      {
        german: "das Trockenobst (Sg.)",
        arabic: "الفواكه المجففة",
        english: "dried fruit",
        example:
          "Trockenobst ist lange haltbar und enthält konzentrierten Fruchtzucker und Ballaststoffe.",
      },
      {
        german: "die Rosine, -n",
        arabic: "الزبيب",
        english: "raisin",
        example: "Einige Menschen lieben Rosinen im Kuchen, andere picken sie sorgfältig heraus.",
      },
      {
        german: "die Dattel, -n",
        arabic: "التمر / البلح",
        english: "date",
        example: "Süße Medjool-Datteln gelten im Orient als das 'Brot der Wüste'.",
      },
      {
        german: "die Feige, -n",
        arabic: "التين",
        english: "fig",
        example: "Getrocknete Feigen schmecken herrlich honigsüß und regen die Verdauung an.",
      },
      {
        german: "der Nussknacker, -",
        arabic: "كسارة البندق والمكسرات",
        english: "nutcracker",
        example:
          "Mit dem hölzernen Nussknacker bricht er die harte Schale der Walnuss mühelos auf.",
      },
      {
        german: "ungesättigte Fettsäuren (Pl.)",
        arabic: "أحماض دهنية غير مشبعة صحية",
        english: "unsaturated fatty acids",
        example:
          "Nüsse enthalten viele ungesättigte Fettsäuren, die gut für den Cholesterinspiegel sind.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein gesunder Snack zum Lernen",
        intro: "Einfache Sätze über Nüsse, Rosinen, Mandeln und Studentenfutter (A1).",
        paragraphs: [
          [
            "Wenn ich lerne, brauche ich gute Energie für meinen Kopf.",
            "Ich esse gern eine [die Nuss, -̈e|Nuss] und getrocknete Früchte.",
            "In meiner Schale liegen weiße [die Mandel, -n|Mandeln] und braune [die Haselnuss, -̈e|Haselnüsse].",
            "Diese Mischung nennt man in Deutschland Studentenfutter.",
          ],
          [
            "Auf dem Tisch liegt auch ein hölzerner [der Nussknacker, -|Nussknacker].",
            "Damit öffne ich eine große [die Walnuss, -̈e|Walnuss] und esse den leckeren Kern.",
            "Dazu schmecken süße [die Rosine, -n|Rosinen] und eine weiche [die Dattel, -n|Dattel].",
            "Der Snack ist gesund und hilft mir beim konzentrierten Arbeiten.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Trockenfrüchte und Nüsse in der Winterzeit",
        intro: "Backen in der Weihnachtszeit mit Datteln, Feigen und Pistazien (A2).",
        paragraphs: [
          [
            "In den kalten Wintermonaten sind Nüsse und getrocknete Früchte besonders beliebt.",
            "Wenn wir backen, hacken wir süße [die Feige, -n|Feigen] und orientalische Datteln in kleine Stücke.",
            "Auch grüne [die Pistazie, -n|Pistazien] und milde [die Cashewnuss, -̈e|Cashewnüsse] kommen in den Teig.",
            "Jedes [das Trockenobst (Sg.)|Trockenobst] schmeckt durch das Trocknen sehr intensiv und süß.",
          ],
          [
            "Mein Großvater knackt am Kaminfeuer fleißig Walnüsse mit dem alten Nussknacker.",
            "Er erklärt uns, dass Nüsse viele [ungesättigte Fettsäuren (Pl.)|ungesättigte Fettsäuren] enthalten, die das Herz schützen.",
            "Deshalb essen wir statt Süßigkeiten lieber eine Schale mit Nüssen und Trockenfrüchten.",
            "So ernähren wir uns auch im Winter gesund und ausgewogen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom Studentenfutter zum Superfood: Die Nährstoffkraft der Schalenfrüchte",
        intro: "Tradition des Studentenfutters, Backtraditionen und gesundheitliche Vorteile (B1).",
        paragraphs: [
          [
            "Die Kombination aus knackigen Nüssen und sonnengetrocknetem [das Trockenobst (Sg.)|Trockenobst] blickt im deutschsprachigen Raum auf eine lange Geschichte zurück.",
            "Bereits im 17. Jahrhundert galt das sogenannte 'Studentenfutter', ursprünglich eine Mischung aus [die Mandel, -n|Mandeln] und [die Rosine, -n|Rosinen], als stärkende Kost für Gelehrte und Studierende gegen geistige Ermüdung.",
            "Heute ist wissenschaftlich belegt, was man damals intuitiv erahnte: Die in der [die Walnuss, -̈e|Walnuss] reichlich vorkommenden Omega-3-Fettsäuren fördern nachweislich neuronale Verknüpfungen im Gehirn.",
          ],
          [
            "Zugleich sind Schalenfrüchte aus der festlichen Backstube nicht wegzudenken: Ob Lübecker Marzipan aus gemahlenen Mandeln, Nussecken mit gerösteter [die Haselnuss, -̈e|Haselnuss] oder Stollen mit in Rum eingelegten Rosinen - Nüsse prägen das mitteleuropäische Backhandwerk grundlegend.",
            "In der modernen veganen Ernährung wiederum erobert die [die Cashewnuss, -̈e|Cashewnuss] als Basis für rein pflanzliche Käsealternativen und Panna Cotta die Küchen.",
          ],
          [
            "Dank ihres hohen Gehalts an wertvollen [ungesättigte Fettsäuren (Pl.)|ungesättigten Fettsäuren], Mineralstoffen wie Magnesium und bioaktiven Ballaststoffen stellen Nüsse eine tragende Säule moderner Präventionsernährung dar.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Lipidprofile, Dehydratationsbiologie und Mykotoxin-Sicherheitsstandards",
        intro:
          "Biochemie mehrfach ungesättigter Lipide, Dehydrationskurven und Aflatoxin-Monitoring (B2).",
        paragraphs: [
          [
            "Aus lebensmittelchemischer Warte stellen Schalenfrüchte hochkonzentrierte Lipid- und Proteindepots dar, deren Nährwertprofile signifikante Spezifitäten aufweisen.",
            "Während die [die Walnuss, -̈e|Walnuss] durch ein herausragendes Verhältnis von Omega-6- zu Alpha-Linolensäure besticht, dominieren in der [die Haselnuss, -̈e|Haselnuss] und der [die Mandel, -n|Mandel] einfach [ungesättigte Fettsäuren (Pl.)|ungesättigte Fettsäuren], namentlich Ölsäure.",
            "Diese Triglyzeridstrukturen erfordern jedoch strikte Schutzmaßnahmen vor Photooxidation und Ranzigwerden durch Licht- und Sauerstoffbarrieren bei der Lagerung.",
          ],
          [
            "Der industrielle Prozess der Dehydratation bei Früchten wie [die Feige, -n|Feige] oder [die Dattel, -n|Dattel] führt durch Absenkung der Wasseraktivität (aw-Wert) unter 0,6 zu mikrobiologischer Stabilität.",
            "Gleichzeitig akzentuiert die Verdunstung von Wasser den Gehalt an sekundären Pflanzenstoffen und osmotisch wirksamen Zuckern, was Trockenobst zu einem extrem dichten Energiespeicher macht.",
          ],
          [
            "Auf regulatorischer Ebene unterliegen insbesondere importierte Schalenfrüchte wie die [die Pistazie, -n|Pistazie] strengsten Kontrollen hinsichtlich der Kontamination mit Aflatoxinen, hochtoxischen Mykotoxinen des Schimmelpilzes Aspergillus flavus.",
            "Das lückenlose Monitoring durch Fluoreszenzanalytik garantiert, dass nur einwandfreie Partien den europäischen Endverbraucher erreichen.",
          ],
        ],
      },
    },
  },
  kraeuter: {
    description: "Petersilie, Schnittlauch, Basilikum, Rosmarin, Thymian, Minze und Dill.",
    details: "Küchenkräuter, ätherische Öle, Gartenkräuter und Zerkleinerung (A1–B2)",
    arabicDescription:
      "الأعشاب العطرية (Kräuter): مفردات البقدونس (Petersilie)، الثوم المعمر (Schnittlauch)، الريحان (Basilikum)، إكليل الجبل (Rosmarin)، الزعتر (Thymian)، النعناع (Minze)، الشبت (Dill)، والمريمية (Salbei)، مع تقنيات الفرم وإضافة النكهة.",
    words: [
      {
        german: "das Küchenkraut, -̈er",
        arabic: "العشب المطبخي العطري",
        english: "culinary herb",
        example:
          "Frische Küchenkräuter auf der Fensterbank verleihen jedem Gericht Frische und Aroma.",
      },
      {
        german: "die Petersilie (Sg.)",
        arabic: "البقدونس",
        english: "parsley",
        example:
          "Gehackte krause Petersilie streut man kurz vor dem Servieren über die heiße Suppe.",
      },
      {
        german: "das Basilikum (Sg.)",
        arabic: "الريحان / الحبق",
        english: "basil",
        example:
          "Frisches Basilikum harmoniert perfekt mit saftigen Tomaten und weißem Mozzarella.",
      },
      {
        german: "der Schnittlauch (Sg.)",
        arabic: "الثوم المعمر (الشنيتلاوخ)",
        english: "chives",
        example:
          "Frischer Schnittlauch auf einem Butterbrot oder im Kräuterquark ist ein deutscher Klassiker.",
      },
      {
        german: "der Rosmarin (Sg.)",
        arabic: "إكليل الجبل / الروزماري",
        english: "rosemary",
        example:
          "Rosmarin hat nadelartige Blätter und passt fantastisch zu Ofenkartoffeln und Lammfleisch.",
      },
      {
        german: "der Thymian (Sg.)",
        arabic: "الزعتر البري",
        english: "thyme",
        example:
          "Thymian wirkt desinfizierend und wird gern bei Erkältungstee oder Schmorgerichten eingesetzt.",
      },
      {
        german: "der Oregano (Sg.)",
        arabic: "الأوريجانو / الصعتر المجفف",
        english: "oregano",
        example:
          "Ohne getrockneten Oregano schmeckt eine traditionelle italienische Pizza unvollständig.",
      },
      {
        german: "die Minze (Sg.)",
        arabic: "النعناع",
        english: "mint",
        example:
          "Frische Minze kühlt an heißen Sommertagen und aromatisiert Tees und Erfrischungsgetränke.",
      },
      {
        german: "der Dill (Sg.)",
        arabic: "الشبت",
        english: "dill",
        example: "Feiner Dill ist der beste Begleiter für Gurkensalat und gebeizten Lachs.",
      },
      {
        german: "der Salbei (Sg.)",
        arabic: "المريمية / القصعين",
        english: "sage",
        example: "In Butter geschwenkte Salbeiblätter passen hervorragend zu Gnocchi und Pasta.",
      },
      {
        german: "der Koriander (Sg.)",
        arabic: "الكزبرة الخضراء",
        english: "coriander, cilantro",
        example:
          "Frischer Koriander teilt die Geschmäcker: Einige lieben ihn, andere finden ihn seifig.",
      },
      {
        german: "hacken (hackte, hat gehackt)",
        arabic: "يفرم ناعماً بالسكين",
        english: "to chop, mince",
        example:
          "Mit einem großen Kochmesser muss man die frischen Kräuter auf dem Holzbrett fein hacken.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Frische Kräuter auf der Fensterbank",
        intro: "Einfache Sätze über Petersilie, Schnittlauch, Basilikum und Kochen (A1).",
        paragraphs: [
          [
            "In meiner Küche stehen kleine Töpfe mit grünen Pflanzen.",
            "Hier wächst jedes wichtige [das Küchenkraut, -̈er|Küchenkraut].",
            "Ich rieche an dem [das Basilikum (Sg.)|Basilikum] und pflücke ein paar Blätter für die Tomatensoße.",
            "Meine Mutter liebt grüne [die Petersilie (Sg.)|Petersilie] auf ihren Kartoffeln.",
          ],
          [
            "Mit der Küchenschere schneide ich frischen [der Schnittlauch (Sg.)|Schnittlauch].",
            "Ich streue den Schnittlauch auf mein Brot mit Butter und Käse.",
            "Bevor ich koche, muss ich die Kräuter mit dem Messer fein [hacken (hackte, hat gehackt)|hacken].",
            "Grüne Kräuter riechen gut und machen jedes Essen leckerer.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mediterranes Aroma im Gemüsegarten",
        intro: "Kräuterbeet mit Rosmarin, Thymian, Dill und Minze pflegen und verwenden (A2).",
        paragraphs: [
          [
            "Im Sommer verbringe ich viel Zeit im Garten bei meinem duftenden Kräuterbeet.",
            "Dort wachsen robuste mediterrane Pflanzen wie [der Rosmarin (Sg.)|Rosmarin] und aromatischer [der Thymian (Sg.)|Thymian].",
            "Wenn wir Kartoffeln im Ofen backen, lege ich frische Rosmarinzweige und Knoblauchzehen auf das Blech.",
            "Für meinen Gurkensalat pflücke ich zarten [der Dill (Sg.)|Dill], der perfekt mit Essig und saurer Sahne harmoniert.",
          ],
          [
            "An heißen Nachmittagen gieße ich frische Blätter von [die Minze (Sg.)|Minze] mit heißem oder eiskaltem Wasser auf.",
            "Wenn jemand Halsschmerzen hat, kochen wir einen beruhigenden Tee aus den samtigen Blättern von [der Salbei (Sg.)|Salbei].",
            "Beim Kochen von Pizza darf getrockneter [der Oregano (Sg.)|Oregano] natürlich niemals fehlen.",
            "Frische Gartenkräuter ersetzen oft viel Salz und bringen pure Natur auf den Teller.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Frankfurter Grüne Soße und mitteleuropäische Kräutertraditionen",
        intro: "Traditionelle Rezepturen, Heilkräuterkunde und die Kunst des Würzens (B1).",
        paragraphs: [
          [
            "Küchenkräuter nehmen in der mitteleuropäischen Kochtradition einen herausragenden Stellenwert ein, der weit über rein dekorative Zwecke hinausreicht.",
            "Das wohl berühmteste Monument deutscher Kräuterkunst ist die geschützte Frankfurter Grüne Soße, eine kalte Kräutersoße aus exakt sieben traditionellen Kräutern, darunter Borretsch, Kerbel, Kresse, [die Petersilie (Sg.)|Petersilie] und Sauerampfer.",
            "Serviert mit gekochten Eiern und neuen Kartoffeln, markiert dieses Frühlingsgericht den Beginn der warmen Jahreszeit.",
          ],
          [
            "Für die alltägliche kalte Küche wiederum ist [der Schnittlauch (Sg.)|Schnittlauch] unverzichtbar, der in Kombination mit Magerquark und Leinöl zu einem gesunden Nationalgericht avancierte.",
            "Wer holzige Kräuter wie [der Rosmarin (Sg.)|Rosmarin] und [der Thymian (Sg.)|Thymian] verwendet, sollte sie frühzeitig mitschmoren lassen, da ihre atherischen Öle hitzestabil sind.",
          ],
          [
            "Dagegen müssen thermolabile Blattkräuter wie [das Basilikum (Sg.)|Basilikum] oder [der Dill (Sg.)|Dill] erst ganz zum Schluss untergehoben werden: Zu frühes Erhitzen oder übermäßig grobes [hacken (hackte, hat gehackt)|Hacken] zerstört die delikaten Geschmacksmoleküle und führt zu unschöner Verfärbung.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Phytochemie ätherischer Öle, Terpenprofile und kulinarische Synergien",
        intro:
          "Eugenol, Carvacrol, Thujon und die biochemische Konservierung von Kräuteraromen (B2).",
        paragraphs: [
          [
            "Die sensorische Komplexität frischer Küchenkräuter entspringt hochspezifischen sekundären Pflanzenmetaboliten, die evolutionär zur Abwehr von Herbivoren und mikrobiellen Pathogenen evolvierten.",
            "In Lippenblütlern wie [der Salbei (Sg.)|Salbei] dominieren Mono- und Sesquiterpene wie Thujon und Cineol, welche adstringierende und entzündungshemmende Eigenschaften aufweisen.",
            "[das Basilikum (Sg.)|Basilikum] wiederum generiert sein charakteristisches Profil durch Phenylpropanoide wie Eugenol und Estragol, die in Kombination mit pflanzlichen Lipiden eine ideale Bindung eingehen.",
          ],
          [
            "Interessant ist das genetisch determinierte Phänomen bei [der Koriander (Sg.)|Koriander]: Das Vorhandensein des Geruchsrezeptorgens OR6A2 führt bei etwa zehn Prozent der Bevölkerung dazu, dass die enthaltenen Aldehyde sensorisch als seifig und unangenehm perzipiert werden.",
          ],
          [
            "In der modernen Molekularküche wird die Extraktion dieser flüchtigen Essenzen durch kryogenes Gefrieren und schnelles Zerkleinern unter Stickstoffatmosphäre perfektioniert.",
            "Dadurch wird verhindert, dass Polyphenoloxidasen beim mechanischen [hacken (hackte, hat gehackt)|Hacken] eine Bräunung induzieren, was eine makellose Farbbrillanz und maximale olfaktorische Intensität gewährleistet.",
          ],
        ],
      },
    },
  },
  gewuerze: {
    description: "Pfeffer, Salz, Paprikapulver, Zimt, Vanille, Muskatnuss, Ingwer und Nelken.",
    details: "Gewürzhandel, Trockengewürze, Schärfe und winterliche Backgewürze (A1–B2)",
    arabicDescription:
      "البهارات والتوابل (Gewürze): مفردات الفلفل الأسود (Pfeffer)، ملح الطعام (Salz)، البابريكا (Paprika)، القرفة (Zimt)، الفانيليا (Vanille)، جوزة الطيب (Muskatnuss)، الزنجبيل (Ingwer)، والقرنفل (Nelke)، مع تاريخ تجارة التوابل وفنون التتبيل.",
    words: [
      {
        german: "das Gewürz, -e",
        arabic: "التابل / البهار",
        english: "spice",
        example: "Das richtige Gewürz verwandelt eine einfache Suppe in ein Festmahl.",
      },
      {
        german: "der Pfeffer (Sg.)",
        arabic: "الفلفل الأسود",
        english: "pepper",
        example:
          "Frisch gemahlener schwarzer Pfeffer aus der Mühle schmeckt viel intensiver als Pulver.",
      },
      {
        german: "das Salz (Sg.)",
        arabic: "ملح الطعام",
        english: "salt",
        example: "Eine kleine Prise Salz verstärkt den Eigengeschmack fast aller Lebensmittel.",
      },
      {
        german: "das Paprikapulver (Sg.)",
        arabic: "مسحوق البابريكا",
        english: "paprika powder",
        example:
          "Für ein echtes ungarisches Gulasch braucht man reichlich edelsüßes Paprikapulver.",
      },
      {
        german: "der Zimt (Sg.)",
        arabic: "القرفة",
        english: "cinnamon",
        example: "Im Winter duftet der Milchreis nach einer Prise Zimt und braunem Zucker.",
      },
      {
        german: "die Vanille (Sg.)",
        arabic: "الفانيليا",
        english: "vanilla",
        example:
          "Aus der schwarzen Vanilleschote kratzt man das aromatische Mark für Puddings heraus.",
      },
      {
        german: "die Muskatnuss, -̈e",
        arabic: "جوزة الطيب",
        english: "nutmeg",
        example:
          "Ein Hauch von geriebener Muskatnuss gehört traditionell an Kartoffelpüree und Spinat.",
      },
      {
        german: "der Ingwer (Sg.)",
        arabic: "الزنجبيل",
        english: "ginger",
        example:
          "Scharfer Ingwer mit Zitrone und Honig ist das beste Hausmittel gegen Erkältungen.",
      },
      {
        german: "die Nelke, -n",
        arabic: "القرنفل / عود المسمار",
        english: "clove",
        example:
          "Ganze Gewürznelken steckt man in Zwiebeln für die Rinderbrühe oder in den Glühwein.",
      },
      {
        german: "der Kreuzkümmel (Sg.)",
        arabic: "الكمون",
        english: "cumin",
        example:
          "Kreuzkümmel verleiht Falafeln und orientalischen Linsengerichten ihren typischen Geschmack.",
      },
      {
        german: "das Kurkuma (Sg.)",
        arabic: "الكركم",
        english: "turmeric",
        example: "Kurkuma färbt Speisen intensiv goldgelb und wirkt stark entzündungshemmend.",
      },
      {
        german: "würzen (würzte, hat gewürzt)",
        arabic: "يتبل / يبهر الطعام",
        english: "to season, flavor",
        example: "Der Koch muss die Sauce behutsam würzen und mehrmals probieren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Salz und Pfeffer in der Küche",
        intro: "Einfache Sätze über die wichtigsten Gewürze beim täglichen Kochen (A1).",
        paragraphs: [
          [
            "In jedem Küchenschrank stehen kleine Dosen mit Gewürzen.",
            "Die wichtigsten Zutaten sind weißes [das Salz (Sg.)|Salz] und schwarzer [der Pfeffer (Sg.)|Pfeffer].",
            "Ich nehme die Mühle und mahle etwas Pfeffer über mein Spiegelei.",
            "Jedes gute [das Gewürz, -e|Gewürz] macht das Essen schmackhaft und interessant.",
          ],
          [
            "Für süße Speisen brauche ich duftenden [der Zimt (Sg.)|Zimt] und echte [die Vanille (Sg.)|Vanille].",
            "Zusammen mit Zucker schmeckt Zimt herrlich auf warmem Milchreis.",
            "Bevor ich das Essen serviere, muss ich die Suppe sorgfältig [würzen (würzte, hat gewürzt)|würzen].",
            "Gutes Würzen ist das Geheimnis von jedem leckeren Rezept.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Wintergewürze und scharfe Knollen",
        intro: "Backen in der Weihnachtszeit mit Ingwer, Nelken und Muskatnuss (A2).",
        paragraphs: [
          [
            "Im Dezember backen wir in unserer Familie traditionelle Lebkuchen und Plätzchen.",
            "In den Teig mischen wir gemahlenen Zimt, gemahlene [die Nelke, -n|Nelken] und echte Vanille.",
            "Der Duft von gebackenen Plätzchen erfüllt sofort das ganze Haus mit festlicher Stimmung.",
            "Für heißen Tee schneide ich frischen [der Ingwer (Sg.)|Ingwer] in dünne Scheiben, weil er angenehm scharf ist.",
          ],
          [
            "Wenn meine Mutter Kartoffelpüree macht, reibt sie immer ein wenig [die Muskatnuss, -̈e|Muskatnuss] mit einer kleinen Reibe hinein.",
            "Für die Gemüsesuppe nehmen wir rotes [das Paprikapulver (Sg.)|Paprikapulver] und orientalischen [der Kreuzkümmel (Sg.)|Kreuzkümmel].",
            "Mit [das Kurkuma (Sg.)|Kurkuma] bekommt der Reis eine wunderschöne gelbe Farbe.",
            "So macht das Kochen Spaß und bringt Freude für die ganze Familie.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die historische Pfefferstraße und die Renaissance orientalischer Gewürze",
        intro:
          "Vom Hansehandel mit Pfeffersäcken zu modernen orientalischen Gewürzmischungen (B1).",
        paragraphs: [
          [
            "Gewürze waren in Europa über viele Jahrhunderte hinweg kostbarer als Gold und trieben das Zeitalter der großen Entdeckungsreisen maßgeblich an.",
            "Reiche Kaufleute in Hansestädten wie Hamburg wurden nicht ohne Grund respektvoll als 'Pfeffersäcke' betitelt, da der Import von indischem [der Pfeffer (Sg.)|Pfeffer], Zimtrinde und Gewürznelken unermessliche Vermögen generierte.",
            "Gewürze dienten damals nicht nur dem Geschmack, sondern überdeckten mangelnde Frische und konservierten Lebensmittel vor dem Verderb.",
          ],
          [
            "In der modernen Alltagsküche erleben ehemals exotische Aromen wie [der Kreuzkümmel (Sg.)|Kreuzkümmel], Koriandersamen und [das Kurkuma (Sg.)|Kurkuma] eine faszinierende Renaissance.",
            "Inspiriert von der orientalischen und indischen Küche setzen auch deutsche Hobbyköche diese Zutaten für Currys, Linsengerichte und Gemüsepfannen ein.",
          ],
          [
            "Gleichzeitig bleibt das Gespür für Nuancen essenziell: Wenn man ein Ragout oder ein Gulasch zubereitet, darf man edelsüßes [das Paprikapulver (Sg.)|Paprikapulver] niemals in zu heißem Fett anbraten, da der enthaltene Fruchtzucker karamellisiert und bitter wird.",
            "Sorgsames, schrittweises [würzen (würzte, hat gewürzt)|Würzen] bleibt daher die höchste Kunst meisterlicher Kochfertigkeit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Alkaloidstrukturen, Piperin, Capsaicin und sensorische Synästhesie",
        intro:
          "Trigeminusreizung vs. gustatorische Wahrnehmung und antioxidative Polyphenole (B2).",
        paragraphs: [
          [
            "Physiologisch betrachtet ist die Wahrnehmung von Schärfe durch Gewürze wie [der Pfeffer (Sg.)|Pfeffer] oder [der Ingwer (Sg.)|Ingwer] keine gustatorische Geschmacksempfindung, sondern eine chemästhetische Reizung der nozizeptiven Nervenendigungen des Nervus trigeminus.",
            "Das Alkaloid Piperin im schwarzen Pfeffer oder Gingerol in der frischen Ingwerknolle binden selektiv an den Vanilloid-Rezeptor TRPV1, was im Zentralnervensystem die Illusion von Hitze und Schmerz induziert.",
            "Als neurochemische Antwort schüttet der Organismus Endorphine aus, was das Phänomen des sogenannten 'Pepper-High-Effekts' erklärt.",
          ],
          [
            "Ebenso komplex gestaltet sich das Zusammenspiel in der Aromachemieforschung: Das myristicinhaltige ätherische Öl in der [die Muskatnuss, -̈e|Muskatnuss] entfaltet bereits in mikrogrammartiger Dosierung ein synergistisches Zusammenspiel mit Umami-Rezeptoren.",
          ],
          [
            "Zusätzlich rückte [das Kurkuma (Sg.)|Kurkuma] aufgrund des Polyphenols Curcumin in den Fokus der pharmazeutischen Nutrazeutikaforschung, obgleich dessen limitierte orale Bioverfügbarkeit den Zusatz von Piperin als Bioenhancer zwingend erfordert.",
            "Gewürze transzendieren somit ihren traditionellen kulinarischen Status und etablieren sich als hochwirksame phytochemische Wirkstoffkomplexe.",
          ],
        ],
      },
    },
  },
  wuerzmittel_und_sossen: {
    description: "Senf, Essig, Speiseöl, Mayonnaise, Ketchup, Sojasoße, Dressings und Meerrettich.",
    details: "Emulsionen, Vinaigrette, Würzpasten und das Abschmecken (A1–B2)",
    arabicDescription:
      "المنكهات والصلصات (Würzmittel und Soßen): مفردات الخردل (Senf)، الخل (Essig)، الزيت (Öl)، المايونيز (Mayonnaise)، الكاتشب (Ketchup)، صلصة الصويا (Sojasoße)، صوص السلطة (Dressing)، والفجل الحار (Meerrettich)، مع تقنيات الاستحلاب وضبط الطعم.",
    words: [
      {
        german: "das Würzmittel, -",
        arabic: "المنكه ومادة التتبيل",
        english: "condiment, seasoning",
        example: "Senf und Essig gehören zu den ältesten bekannten Würzmitteln der Menschheit.",
      },
      {
        german: "die Soße, -n",
        arabic: "الصلصة / الصوص",
        english: "sauce, gravy",
        example: "Eine sämige braune Soße rundet den deftigen Sonntagsbraten vollkommen ab.",
      },
      {
        german: "der Senf, -e",
        arabic: "الخردل (المستردة)",
        english: "mustard",
        example: "Zur traditionellen bayerischen Weißwurst isst man ausschließlich süßen Senf.",
      },
      {
        german: "der Essig, -e",
        arabic: "الخل بأنواعه",
        english: "vinegar",
        example:
          "Guter Balsamico-Essig reift jahrelang in Eichenfässern und schmeckt mild-fruchtig.",
      },
      {
        german: "das Speiseöl, -e",
        arabic: "زيت الطعام والطبخ",
        english: "cooking oil, edible oil",
        example: "Kaltgepresstes Olivenöl und Rapsöl sind besonders wertvolle Speiseöle.",
      },
      {
        german: "die Mayonnaise, -n",
        arabic: "المايونيز",
        english: "mayonnaise",
        example:
          "Frische Mayonnaise entsteht durch das behutsame Emulgieren von Eigelb und Speiseöl.",
      },
      {
        german: "der Ketchup, -s",
        arabic: "الكاتشب",
        english: "ketchup",
        example: "Kinder essen Pommes frites am liebsten mit rotem Tomatenketchup.",
      },
      {
        german: "die Sojasoße, -n",
        arabic: "صلصة الصويا",
        english: "soy sauce",
        example:
          "Dunkle Sojasoße bringt einen herzhaften Umami-Geschmack in asiatische Wokgerichte.",
      },
      {
        german: "das Salatdressing, -s",
        arabic: "صلصة تتبيل السلطة (دريسينغ)",
        english: "salad dressing",
        example:
          "Eine klassische Vinaigrette aus Essig, Öl, Senf und Honig ist das beliebteste Salatdressing.",
      },
      {
        german: "der Meerrettich, -e",
        arabic: "الفجل الحار (الخردل الألماني الحار)",
        english: "horseradish",
        example: "Scharfer Meerrettich treibt einem beim Reiben sofort die Tränen in die Augen.",
      },
      {
        german: "abschmecken (schmeckte ab, hat abgeschmeckt)",
        arabic: "يتذوق لضبط النكهة والتوازن",
        english: "to season to taste",
        example:
          "Der Küchenchef muss die Suppe vor dem Servieren mit Salz und Zitrone abschmecken.",
      },
      {
        german: "cremig",
        arabic: "قشدي وكريمي القوام",
        english: "creamy",
        example: "Die Soße wird durch die Zugabe von kalter Butter wunderbar glänzend und cremig.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Soßen und Dips zum Abendessen",
        intro: "Einfache Sätze über Ketchup, Mayonnaise, Senf und Salatsoße (A1).",
        paragraphs: [
          [
            "Wir sitzen am Tisch und essen gebratene Würstchen mit Pommes.",
            "Auf dem Tisch stehen roter [der Ketchup, -s|Ketchup] und cremige [die Mayonnaise, -n|Mayonnaise].",
            "Mein Vater isst seine Bratwurst immer mit scharfem [der Senf, -e|Senf].",
            "Diese Zutaten machen das einfache Essen sehr lecker.",
          ],
          [
            "Für den grünen Salat mache ich ein schnelles [das Salatdressing, -s|Salatdressing].",
            "Ich nehme gutes [das Speiseöl, -e|Speiseöl], ein wenig [der Essig, -e|Essig] und Salz.",
            "Die Soße ist fertig und schmeckt [cremig|cremig] und frisch.",
            "Alle greifen gerne zu und das Abendessen schmeckt wunderbar.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Die Kunst des richtigen Abschmeckens",
        intro: "Vinaigrette zubereiten und Soßen verfeinern mit Sojasoße und Meerrettich (A2).",
        paragraphs: [
          [
            "Gestern habe ich gelernt, wie man eine echte Vinaigrette für gemischten Salat anrührt.",
            "Man nimmt drei Teile Speiseöl und einen Teil fruchtigen [der Essig, -e|Essig] und verrührt beides kräftig.",
            "Ein Löffel Senf hilft dabei, dass sich das Öl und der Essig zu einer Emulsion verbinden.",
            "Mit Pfeffer, Honig und Salz muss man das Dressing sorgfältig [abschmecken (schmeckte ab, hat abgeschmeckt)|abschmecken].",
          ],
          [
            "Zu geräuchertem Fisch servieren wir in Deutschland gern scharfen [der Meerrettich, -e|Meerrettich], der in der Nase brennt.",
            "Wenn ich asiatische Nudeln koche, verwende ich dunkle [die Sojasoße, -n|Sojasoße] anstelle von Salz.",
            "Jedes [das Würzmittel, -|Würzmittel] hat seinen eigenen Charakter und verändert ein Gericht völlig.",
            "Gute Soßen machen aus gewöhnlichen Zutaten echte Gaumenfreuden.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom süßen Senf zur klassischen Vinaigrette",
        intro: "Regionale Würztraditionen in Deutschland und die Physik der Emulsion (B1).",
        paragraphs: [
          [
            "In der mitteleuropäischen Esskultur besitzen Würzpasten und Soßen eine ausgeprägte regionale Identität.",
            "In Bayern gilt der süße [der Senf, -e|Senf] mit grob geschroteten Körnern und Karamellnote als unverzichtbare Begleitung zur Weißwurst, während in Thüringen und Sachsen mittelscharfer oder scharfer Senf die Bratwurst krönt.",
            "Zu Tafelspitz und Rindfleisch wiederum wird traditionell scharfer [der Meerrettich, -e|Meerrettich], auch bekannt als Kren, frisch gerieben serviert.",
          ],
          [
            "In der kalten Küche stellt das fachgerechte [das Salatdressing, -s|Salatdressing] die Visitenkarte des Koches dar.",
            "Die klassische Vinaigrette folgt der goldenen Regel: Eine Säurekomponente aus hochwertigem [der Essig, -e|Essig] trifft auf drei Teile kaltgepresstes [das Speiseöl, -e|Speiseöl].",
            "Der Senf dient dabei nicht allein dem Geschmack, sondern fungiert als natürlicher Emulgator, der Wasser und Fett dauerhaft stabilisiert.",
          ],
          [
            "Erst das geduldige [abschmecken (schmeckte ab, hat abgeschmeckt)|Abschmecken] mit feinen Kräutern, Salz und einer Prise Zucker verleiht dem Dressing seine vollendete Balance.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Kolloidale Systeme, Emulsionsstabilität und Umami-Synergien",
        intro:
          "Physikochemie von Öl-in-Wasser-Emulsionen, Maillard-Saucenfonds und Fermentationschemie (B2).",
        paragraphs: [
          [
            "Aus physikochemischer Perspektive repräsentieren kalte Soßen wie [die Mayonnaise, -n|Mayonnaise] metastabile Öl-in-Wasser-Emulsionen.",
            "Hierbei werden disperse Öltröpfchen in einer kontinuierlichen Wasserphase durch grenzflächenaktive Amphiphile - namentlich das Phosphatidylcholin aus dem Eigelb - vor der Phasentrennung (Koaleszenz) bewahrt.",
            "Wird das [das Speiseöl, -e|Speiseöl] zu rasch zugeführt oder die Scherkraft beim Emulgieren inadäquat dosiert, bricht das kolloidale System irreversibel zusammen.",
          ],
          [
            "Bei warmen Grundsoßen wiederum beruht die Viskosität auf der Verkleisterung von Amylose- und Amylopektinketten bei mehlgebundenen Roux-Saucen oder auf der Reduktion von Kollagen zu Gelatine bei braunen Glaces.",
          ],
          [
            "Fermentierte Würzmittel wie traditionell gebraute [die Sojasoße, -n|Sojasoße] liefern hohe Konzentrationen an freiem Mononatriumglutamat und Inosinat, welche über allosterische Bindung an die T1R1/T1R3-Geschmacksrezeptoren einen überproportional intensiven Umami-Eindruck evozieren.",
            "Das finale [abschmecken (schmeckte ab, hat abgeschmeckt)|Abschmecken] transzendiert somit reines Handwerk und erweist sich als feinsinnige Justierung molekularer Rezeptoraffinitäten.",
          ],
        ],
      },
    },
  },
};

const etPath = "src/data/vocabulary/essen-und-trinken.json";
const et = JSON.parse(fs.readFileSync(etPath, "utf8"));

for (const sec of et.sections) {
  for (const t of sec.topics) {
    if (!batch2Data[t.id]) {
      continue;
    }

    const src = batch2Data[t.id];
    t.description = src.description;
    t.details = src.details;
    t.arabicDescription = src.arabicDescription;
    t.words = src.words;
    t.stories = src.stories;
    console.log("Applied batch 2 to topic:", t.id, "(", t.title, ") -> words:", t.words.length);
  }
}

const res = vocabularyCollectionSchema.safeParse(et);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(etPath, JSON.stringify(et, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to essen-und-trinken.json!");
