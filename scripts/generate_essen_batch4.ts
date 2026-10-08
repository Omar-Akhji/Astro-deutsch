import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch4Data: Record<string, any> = {
  zubereitung: {
    description: "Kochen, braten, dünsten, backen, rühren, schälen, pürieren und Rezepte.",
    details: "Küchentechniken, Garverfahren, Arbeitsschritte und Rezeptverständnis (A1–B2)",
    arabicDescription:
      "طرق التحضير والطهي (Zubereitung): مفردات الطبخ (kochen)، القلي والشواء (braten)، الخبز (backen)، التقشير (schälen)، التقطيع (schneiden)، التحريك (rühren)، الطهو على البخار (dünsten)، الهرس (pürieren)، وقراءة الوصفات والمكونات.",
    words: [
      {
        german: "die Zubereitung, -en",
        arabic: "طريقة التحضير والإعداد",
        english: "preparation",
        example:
          "Die Zubereitung dieses traditionellen Gerichts erfordert Frische und handwerkliches Geschick.",
      },
      {
        german: "kochen (kochte, hat gekocht)",
        arabic: "يطبخ / يغلي في الماء",
        english: "to cook, boil",
        example: "Nudeln muss man etwa acht Minuten in sprudelnd kochendem Salzwasser kochen.",
      },
      {
        german: "braten (brät, briet, hat gebraten)",
        arabic: "يقلي / يشوي في المقلاة أو الفرن",
        english: "to fry, roast",
        example: "Er brät die Zwiebeln in heißem Öl an, bis sie eine goldbraune Farbe annehmen.",
      },
      {
        german: "backen (bäckt, backte/buk, hat gebacken)",
        arabic: "يخبز في الفرن",
        english: "to bake",
        example: "Am Wochenende backen wir frisches Vollkornbrot und einen fruchtigen Kuchen.",
      },
      {
        german: "schälen (schälte, hat geschält)",
        arabic: "يقشر الخضار أو الفاكهة",
        english: "to peel",
        example:
          "Mit einem scharfen Sparschäler lässt sich die Schale der Karotte mühelos schälen.",
      },
      {
        german: "schneiden (schnitt, hat geschnitten)",
        arabic: "يقطع بالسكين إلى قطع أو شرائح",
        english: "to cut, chop, slice",
        example: "Der Koch schneidet die Tomaten und Zucchini in gleichmäßige Würfel.",
      },
      {
        german: "rühren (rührte, hat gerührt)",
        arabic: "يحرك / يقلب بالملعقة",
        english: "to stir",
        example: "Man muss die Soße ununterbrochen rühren, damit sie am Topfboden nicht anbrennt.",
      },
      {
        german: "würzen (würzte, hat gewürzt)",
        arabic: "يتبل / يبهر بالتوابل والملح",
        english: "to season",
        example:
          "Vor dem Servieren sollte man die Suppe mit frischen Kräutern und Meersalz würzen.",
      },
      {
        german: "dünsten (dünstete, hat gedünstet)",
        arabic: "يطهو بالبخار مع قليل من الدهن والسائل",
        english: "to steam, simmer gently",
        example: "Zartes Gemüse sollte man nur kurz dünsten, um Vitamine und Farbe zu erhalten.",
      },
      {
        german: "pürieren (pürierte, hat püriert)",
        arabic: "يهرس بالخلاط اليدوي",
        english: "to puree, mash",
        example:
          "Mit dem Stabmixer püriert sie das gekochte Kürbisfleisch zu einer samtigen Suppe.",
      },
      {
        german: "das Rezept, -e",
        arabic: "وصفة الطهي",
        english: "recipe",
        example:
          "Das alte Rezept für den Sauerbraten wird in unserer Familie von Generation zu Generation weitergegeben.",
      },
      {
        german: "die Zutat, -en",
        arabic: "المكون / المقادير",
        english: "ingredient",
        example:
          "Vor dem Kochen stellt man alle benötigten Zutaten übersichtlich auf der Arbeitsplatte bereit.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine Gemüsesuppe kochen",
        intro: "Einfache Sätze über Vorbereiten, Schälen, Schneiden und Kochen (A1).",
        paragraphs: [
          [
            "Heute koche ich eine leckere Gemüsesuppe für das Mittagessen.",
            "Zuerst muss ich Kartoffeln und Karotten gründlich mit dem Sparschäler [schälen (schälte, hat geschält)|schälen].",
            "Danach werde ich das Gemüse mit einem großen Messer klein [schneiden (schnitt, hat geschnitten)|schneiden].",
            "In einem Topf erhitze ich Wasser und lasse das Gemüse zwanzig Minuten lang [kochen (kochte, hat gekocht)|kochen].",
          ],
          [
            "Mit einem großen Holzlöffel muss ich die Suppe regelmäßig [rühren (rührte, hat gerührt)|rühren].",
            "Zum Schluss werde ich das Essen mit Salz, Pfeffer und Petersilie fein [würzen (würzte, hat gewürzt)|würzen].",
            "Die [die Zubereitung, -en|Zubereitung] ist ganz einfach und geht sehr schnell.",
            "Alle freuen sich über das warme und gesunde Essen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kochen nach Rezept",
        intro: "Zutaten abwiegen, dünsten, braten und pürieren für cremige Saucen (A2).",
        paragraphs: [
          [
            "Gestern Abend habe ich meine Freunde zum Abendessen eingeladen und ein neues Gericht ausprobiert.",
            "Ich habe das [das Rezept, -e|Rezept] in einem Kochbuch gefunden und genau durchgelesen.",
            "Auf dem Markt kaufte ich jede frische [die Zutat, -en|Zutat], die auf dem Einkaufszettel stand.",
            "Zuerst wollte ich Zwiebeln und Knoblauch in etwas Olivenöl sanft [braten (brät, briet, hat gebraten)|braten].",
          ],
          [
            "Für die schonende Küche sollte man zartes Brokkoli-Gemüse lieber mit wenig Wasser [dünsten (dünstete, hat gedünstet)|dünsten].",
            "Mit dem Pürierstab kann man gekochtes Gemüse schnell [pürieren (pürierte, hat püriert)|pürieren], bis eine feine Creme entsteht.",
            "Am Ende habe ich noch einen Apfelkuchen im Backofen goldgelb gebacken.",
            "Das gemeinsame Kochen hat allen riesigen Spaß gemacht.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Mise en Place und die Vielfalt der Garverfahren",
        intro:
          "Küchenorganisation, physikalische Garprinzipien und präzise Geschmackskomposition (B1).",
        paragraphs: [
          [
            "In der anspruchsvollen Küche entscheidet eine durchdachte Organisation über das Gelingen eines mehrgängigen Menüs.",
            "Der gastronomische Grundsatz der 'Mise en Place' besagt, dass jede benötigte [die Zutat, -en|Zutat] gewaschen, portioniert und gewogen sein muss, bevor der erste Topf auf der Herdplatte erwärmt wird.",
            "Erst wenn das Gemüse geputzt und präzise in Julienne oder Brunoise geschnitten ist, beginnt die eigentliche thermische [die Zubereitung, -en|Zubereitung].",
          ],
          [
            "Ein erfahrener Koch wählt die Gartechnik passend zur zellulären Beschaffenheit der Lebensmittel: Während zartes Wurzelgemüse schonend gegart wird, lässt man Fleisch bei hoher Hitze scharf anbraten, um Röststoffe zu erzeugen.",
            "Wer cremige Suppen zubereitet, muss die Zutaten nach dem Kochen gründlich [pürieren (pürierte, hat püriert)|pürieren] und anschließend mit kalter Butter aufmontieren.",
          ],
          [
            "Erst das nuancierte [würzen (würzte, hat gewürzt)|Würzen] mit aromatischen Fonds, feinen Säuren und frischen Kräutern vollendet die sensorische Harmonie des Gerichts.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Thermodynamik der Garprozesse, Maillard-Reaktion und Hydrokolloidbindung",
        intro:
          "Physikochemische Transformationen während des Kochens, Bratens und Emulgierens (B2).",
        paragraphs: [
          [
            "Die kulinarische Thermodynamik analysiert die gezielte Modifikation makromolekularer Strukturen unter thermischem Einfluss.",
            "Beim scharfen [braten (brät, briet, hat gebraten)|Braten] initiieren Temperaturen oberhalb von 140 Grad Celsius die komplexe Maillard-Reaktionskaskade zwischen Aminoverbindungen und reduzierenden Zuckern, wodurch aromatische Heterocyclen und braune Melanoidine generiert werden.",
            "Dagegen beruht das sanfte [dünsten (dünstete, hat gedünstet)|Dünsten] im Dampfbereich auf der schonenden Konvektion ohne mechanische Scherkräfte, was die vakuolären Zellstrukturen schont und thermolabile Mikronährstoffe vor Auslaugung schützt.",
          ],
          [
            "Beim Pürieren von Emulsionen und Pürees zerschlagen rotierende Klingen die Zellverbände, wodurch Pektine und Stärkepolymerketten freigesetzt werden, die als natürliche Verdickungsmittel fungieren.",
          ],
          [
            "Die präzise Steuerung von Garzeiten und Kerntemperaturen übersteigt rein intuitives Kochen und manifestiert sich als angewandte Biophysik, bei der jedes [das Rezept, -e|Rezept] als thermodynamisches Protokoll fungiert.",
          ],
        ],
      },
    },
  },
  das_fruehstueck: {
    description: "Müsli, Haferflocken, Rührei, Spiegelei, Toast, Orangensaft und Frühstückstisch.",
    details: "Morgenroutine, deutsches Frühstück, Eierspeisen und Heißgetränke (A1–B2)",
    arabicDescription:
      "وجبة الإفطار (Das Frühstück): مفردات وجبة الإفطار (Frühstück)، الموسلي (Müsli)، رقائق الشوفان (Haferflocken)، البيض المسلوق (gekochtes Ei)، البيض المخفوق (Rührei)، بيض العيون (Spiegelei)، خبز التوست (Toast)، وعصير البرتقال، مع عادات مائدة الإفطار في عطلة نهاية الأسبوع.",
    words: [
      {
        german: "das Frühstück, -e",
        arabic: "وجبة الإفطار",
        english: "breakfast",
        example:
          "Das ausgiebige Frühstück am Sonntag ist für viele Familien die schönste Mahlzeit der Woche.",
      },
      {
        german: "frühstücken (frühstückte, hat gefrühstückt)",
        arabic: "يتناول وجبة الإفطار",
        english: "to have breakfast",
        example:
          "Unter der Woche frühstücken wir meistens sehr schnell, bevor wir zur Arbeit fahren.",
      },
      {
        german: "das Müsli, -s",
        arabic: "الموسلي / رقائق الحبوب مع المكسرات والفواكه",
        english: "muesli, granola",
        example:
          "Ein Müsli mit Haferflocken, frischen Beeren und Joghurt liefert komplexe Kohlenhydrate.",
      },
      {
        german: "die Haferflocken (Pl.)",
        arabic: "رقائق الشوفان",
        english: "oat flakes, rolled oats",
        example:
          "Haferflocken quellen in heißer Milch oder Wasser auf und ergeben ein wärmendes Porridge.",
      },
      {
        german: "das gekochte Ei, -er",
        arabic: "البيضة المسلوقة",
        english: "boiled egg",
        example:
          "Ein wachsweich gekochtes Ei im Eierbecher gehört traditionell zum Sonntagsfrühstück.",
      },
      {
        german: "das Rührei, -er",
        arabic: "البيض المخفوق المقلي (الأومليت المفرول)",
        english: "scrambled eggs",
        example:
          "Cremiges Rührei mit Schnittlauch und einer Prise Pfeffer wird in der Pfanne gestockt.",
      },
      {
        german: "das Spiegelei, -er",
        arabic: "بيض العيون (المقلي بصفار سليم)",
        english: "fried egg, sunny-side up",
        example: "Er legt ein heißes Spiegelei mit flüssigem Eigelb direkt auf das geröstete Brot.",
      },
      {
        german: "der Toast, -s",
        arabic: "خبز التوست المحمص",
        english: "toast",
        example: "Aus dem Toaster springt eine knusprige Scheibe goldbrauner Toast heraus.",
      },
      {
        german: "der Orangensaft, -̈e",
        arabic: "عصير البرتقال",
        english: "orange juice",
        example:
          "Ein Glas frisch gepresster Orangensaft sorgt morgens für einen fruchtigen Vitaminschub.",
      },
      {
        german: "der Frühstückstisch, -e",
        arabic: "مائدة الإفطار",
        english: "breakfast table",
        example:
          "Am Sonntag ist der Frühstückstisch mit Blumen, Kerzen und leckerem Gebäck gedeckt.",
      },
      {
        german: "sättigend",
        arabic: "مشبع ويمنح شعوراً طويلاً بالامتلاء",
        english: "filling, satisfying",
        example:
          "Ein warmes Haferflocken-Frühstück ist extrem sättigend und verhindert Heißhungerattacken.",
      },
      {
        german: "die Kaffeetasse, -n",
        arabic: "فنجان القهوة",
        english: "coffee cup",
        example: "Dampfender Kaffee füllt die weiße Kaffeetasse bis an den Rand.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Guten Morgen am Frühstückstisch",
        intro: "Einfache Sätze über Müsli, Eier, Toast und Saft am Morgen (A1).",
        paragraphs: [
          [
            "Guten Morgen! Es ist sieben Uhr und Zeit für [das Frühstück, -e|das Frühstück].",
            "Ich decke den [der Frühstückstisch, -e|Frühstückstisch] mit Tellern, Tassen und Besteck.",
            "Meine Mutter kocht Kaffee und füllt [die Kaffeetasse, -n|die Kaffeetasse].",
            "Ich trinke ein Glas kühlen [der Orangensaft, -̈e|Orangensaft] und esse eine Scheibe warmen [der Toast, -s|Toast].",
          ],
          [
            "Mein Bruder isst lieber eine Schale [das Müsli, -s|Müsli] mit Milch und Früchten.",
            "Für jeden kochen wir ein weiches [das gekochte Ei, -er|gekochtes Ei].",
            "Wir [frühstücken (frühstückte, hat gefrühstückt)|frühstücken] zusammen und sprechen über den Tag.",
            "So beginnt jeder Morgen fröhlich und entspannt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Das große Sonntagsfrühstück",
        intro: "Gemütliches langes Frühstücken mit Rührei, Haferflocken und Spiegelei (A2).",
        paragraphs: [
          [
            "Am Sonntag nehmen wir uns viel Zeit, um gemeinsam mit der Familie ausgiebig zu [frühstücken (frühstückte, hat gefrühstückt)|frühstücken].",
            "In der Pfanne brate ich saftiges [das Rührei, -er|Rührei] mit frischem Schnittlauch und etwas Butter an.",
            "Mein Vater mag lieber ein knuspriges [das Spiegelei, -er|Spiegelei], dessen gelber Dotter noch flüssig ist.",
            "Dazu gibt es frische Brötchen vom Bäcker und verschiedene Marmeladensorten.",
          ],
          [
            "Wer sich sportlich ernährt, kocht nahrhafte [die Haferflocken (Pl.)|Haferflocken] mit Wasser oder Milch zu Porridge.",
            "Dieses warme Gericht ist herrlich [sättigend|sättigend] und gibt dem Körper Energie für viele Stunden.",
            "Wir sitzen oft bis elf Uhr am Tisch, trinken Tee und lesen die Sonntagszeitung.",
            "Das Frühstück ist für uns das schönste Ritual des ganzen Wochenendes.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kulturgeschichte des deutschen Frühstücks: Vom schnellen Bissen zum Brunch",
        intro:
          "Wandel der morgendlichen Essgewohnheiten zwischen Arbeitsalltag und Brunch-Kultur (B1).",
        paragraphs: [
          [
            "Die Struktur der ersten Mahlzeit des Tages unterlag im deutschsprachigen Raum im Verlauf des letzten Jahrhunderts einem bemerkenswerten Wandel.",
            "Während das traditionelle bürgerliche [das Frühstück, -e|Frühstück] stets aus ofenfrischen Brötchen, Schnittkäse, Wurstaufschnitt und einem [das gekochte Ei, -er|gekochten Ei] bestand, dominiert an hektischen Werktagen heute oft der funktionale Pragmatismus.",
            "Viele Berufstätige begnügen sich mit einem schnellen Heißgetränk für unterwegs oder rühren sich daheim ein vollwertiges [das Müsli, -s|Müsli] mit Nüssen und Samen an.",
          ],
          [
            "Am Wochenende erfährt die Mahlzeit hingegen eine regelrechte Zelebrierung: Freunde und Familien treffen sich zum ausgedehnten Brunch, der nahtlos in das Mittagessen übergeht.",
            "Auf üppigen Buffets konkurrieren frisch zubereitetes [das Rührei, -er|Rührei] mit Kräutern, kross getoasteter [der Toast, -s|Toast] und frisch gepresster [der Orangensaft, -̈e|Orangensaft] mit süßen Waffeln und herzhaften Spezialitäten.",
          ],
          [
            "Zugleich erlebt das einfache Haferporridge ein gewaltiges Revival: Dank seiner komplexen Ballaststoffe gilt die Hafermahlzeit als ideales modernes 'Clean-Eating'-Konzept.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Chronobiologie, Glykämischer Index und nutritive Makroverteilung am Morgen",
        intro:
          "Zirkadiane Rhythmik des Cortisolspiegels, Insulinreaktion und Sättigungshormone (B2).",
        paragraphs: [
          [
            "Aus chronobiologischer und neuroendokriner Perspektive interagiert die morgendliche Nahrungsaufnahme unmittelbar mit dem physiologischen Cortisol-Peak nach dem Erwachen.",
            "Die Zufuhr hochglykämischer Nahrungsmittel wie gezuckerter Zerealien provoziert eine rapide Insulinsekretion, auf die eine reaktive Hypoglykämie und verfrühter Heißhunger folgen.",
            "Im Gegensatz dazu bewirken lösliche Beta-Glucane in [die Haferflocken (Pl.)|Haferflocken] eine signifikante Viskositätserhöhung des Chymus im Dünndarm, was die Glukoseresorption verzögert und das Profil extrem [sättigend|sättigend] moduliert.",
          ],
          [
            "Parallel dazu stimuliert eine protein- und lipidbetonte Mahlzeit mit Eierspeisen wie [das Spiegelei, -er|Spiegelei] oder pochiertem Ei die Ausschüttung gastrointestinaler Sättigungspeptide wie Cholecystokinin (CCK) und Peptid YY.",
          ],
          [
            "Dieser endokrine Regelkreis unterstreicht die fundamentale Bedeutung einer metabolisch ausbalancierten Makronährstoffrelation zur nachhaltigen kognitiven und physischen Leistungsfähigkeit während der ersten Tageshälfte.",
          ],
        ],
      },
    },
  },
  snacks_und_knabbereien: {
    description:
      "Kartoffelchips, Salzstangen, Brezeln, Popcorn, Erdnüsse, Schokoriegel und Knabbereien.",
    details: "Zwischenmahlzeiten, Fernsehabende, Laugenteig und Heißhunger (A1–B2)",
    arabicDescription:
      "المقرمشات والتسالي (Snacks und Knabbereien): مفردات رقائق الشيبس (Kartoffelchips)، أعواد البسكويت المملح (Salzstangen)، البريتزل المملح (Brezel)، الفشار (Popcorn)، الفول السوداني (Erdnuss)، وألواح الشوكولاتة، مع سيكولوجية التسالي والجوع الليلي المفاجئ.",
    words: [
      {
        german: "der Snack, -s",
        arabic: "الوجبة الخفيفة السريعة بين الوجبات",
        english: "snack",
        example: "Für die lange Zugfahrt packe ich mir ein paar gesunde Snacks in die Tasche.",
      },
      {
        german: "die Knabberei, -en",
        arabic: "المقرمشات والتسالي المالحة",
        english: "nibbles, savory snacks",
        example: "Zum gemütlichen Fernsehabend gehören leckere Knabbereien einfach dazu.",
      },
      {
        german: "die Kartoffelchips (Pl.)",
        arabic: "رقائق البطاطس المقلية المقرمشة (شيبس)",
        english: "potato chips, crisps",
        example:
          "Knusprige Kartoffelchips mit Paprikageschmack sind der unangefochtene Partyklassiker.",
      },
      {
        german: "die Salzstangen (Pl.)",
        arabic: "أعواد البسكويت المقرمشة المملحة",
        english: "pretzel sticks, salt sticks",
        example:
          "Salzstangen und Cola gelten in Deutschland als traditionelles Hausmittel bei Magenverstimmungen.",
      },
      {
        german: "die Laugenbrezel, -n",
        arabic: "البريتزل البافارية المخبوزة بالمحلول القلوي",
        english: "pretzel, lye pretzel",
        example:
          "Eine frische Laugenbrezel mit grobem Meersalz und Butter schmeckt zu jeder Tageszeit.",
      },
      {
        german: "das Popcorn (Sg.)",
        arabic: "الفشار المقرمش",
        english: "popcorn",
        example: "Im Kino entscheidet man sich traditionell zwischen süßem oder salzigem Popcorn.",
      },
      {
        german: "die Erdnuss, -̈e",
        arabic: "الفول السوداني",
        english: "peanut",
        example:
          "Geröstete und gesalzene Erdnüsse werden gern in kleinen Schalen an der Bar serviert.",
      },
      {
        german: "der Schokoriegel, -",
        arabic: "لوح الشوكولاتة الصغير",
        english: "chocolate bar, candy bar",
        example:
          "Wenn die Konzentration nachlässt, greift mancher Kollege zu einem süßen Schokoriegel.",
      },
      {
        german: "knabbern (knabberte, hat geknabbert)",
        arabic: "يقرمش / يتسلى بأكل المقرمشات",
        english: "to nibble, munch",
        example: "Die Kinder sitzen auf dem Sofa und knabbern genüsslich knusprige Brezeln.",
      },
      {
        german: "knusprig",
        arabic: "مقرمش وهش",
        english: "crunchy, crisp",
        example: "Die frisch gebackenen Snacks müssen herrlich knusprig und frisch sein.",
      },
      {
        german: "salzig",
        arabic: "مالح الطعم",
        english: "salty",
        example:
          "Nach dem Sport verlangt der Körper oft nach etwas Salzigem, um Mineralien auszugleichen.",
      },
      {
        german: "der Heißhunger (Sg.)",
        arabic: "نوبة الجوع الشديد المفاجئ",
        english: "food craving, ravenous hunger",
        example: "Um plötzlichen Heißhunger zu vermeiden, sollte man regelmäßig vollwertig essen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein Filmabend mit Snacks",
        intro: "Einfache Sätze über Chips, Popcorn, Brezeln und Knabbern (A1).",
        paragraphs: [
          [
            "Heute Abend schauen wir zusammen einen spannenden Film im Wohnzimmer.",
            "Vor dem Fernseher stellen wir kleine Schalen auf den Tisch.",
            "In einer Schale liegen rote [die Kartoffelchips (Pl.)|Kartoffelchips] und in der anderen [die Salzstangen (Pl.)|Salzstangen].",
            "Die Chips schmecken herrlich [salzig|salzig] und sind sehr [knusprig|knusprig].",
          ],
          [
            "Mein Freund hat warmes [das Popcorn (Sg.)|Popcorn] in der Küche gemacht.",
            "Wir sitzen gemütlich auf dem Sofa und [knabbern (knabberte, hat geknabbert)|knabbern] den ganzen Abend.",
            "Manchmal esse ich auch eine frische bayerische [die Laugenbrezel, -n|Laugenbrezel].",
            "So macht ein Filmabend mit Freunden richtig Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Gesunde Alternativen zum Knabbern",
        intro: "Vermeidung von Heißhunger und gesündere Nüsse statt Schokoriegel (A2).",
        paragraphs: [
          [
            "Beim Arbeiten am Computer bekomme ich nachmittags oft plötzlichen [der Heißhunger (Sg.)|Heißhunger].",
            "Früher habe ich mir dann schnell einen süßen [der Schokoriegel, -|Schokoriegel] aus dem Automaten geholt.",
            "Aber zu viel Zucker führt dazu, dass man schon nach einer Stunde wieder müde wird.",
            "Jetzt wähle ich lieber eine Handvoll ungesalzene [die Erdnuss, -̈e|Erdnüsse] oder Mandeln als gesunden [der Snack, -s|Snack].",
          ],
          [
            "Auf Geburtstagsfeiern gibt es meistens eine bunte Auswahl an herzhafter [die Knabberei, -en|Knabberei].",
            "Wer auf seine Ernährung achtet, kann Gemüsesticks aus Karotten und Gurken mit Kräuterquark knabbern.",
            "Trotzdem darf man sich ab und zu auch eine kleine Tüte Chips gönnen.",
            "Auf die richtige Balance im Alltag kommt es an.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Snack-Kultur und die bayerische Brezel-Tradition",
        intro: "Vom Laugegebäck zum globalen Snacking-Phänomen in modernen Gesellschaften (B1).",
        paragraphs: [
          [
            "Das Phänomen des 'Snackings' hat die traditionelle Dreiteilung der Mahlzeiten in den westlichen Industrienationen tiefgreifend verändert.",
            "Mangelnde Zeit und mobile Arbeitsweisen führen dazu, dass immer mehr Mahlzeiten durch handliche Zwischenverpflegungen substituiert werden.",
            "Im deutschsprachigen Raum nimmt dabei [die Laugenbrezel, -n|die Laugenbrezel] eine herausragende Sonderstellung ein: Als handwerkliches Kunstwerk mit verschlungenen Armen, dicker saftiger Krume und dünnen, knusprigen Ärmchen ist sie der archetypische Begleiter des Alltags.",
          ],
          [
            "Für gesellige Anlässe wiederum etablierten sich industrielle Knabberartikel wie dünne [die Salzstangen (Pl.)|Salzstangen] und gewürzte [die Kartoffelchips (Pl.)|Kartoffelchips].",
            "Interessanterweise galten Salzstangen generationenübergreifend in Kombination mit kohlensäurehaltigen Getränken als verlässliches Hausmittel zur Rehydratation bei Magen-Darm-Erkrankungen.",
          ],
          [
            "Gleichzeitig reagiert die Lebensmittelindustrie auf das gestiegene Gesundheitsbewusstsein, indem fettreduzierte Ofenchips, geröstete Hülsenfrüchte und nussbasierte Riegel als Antwort auf unkontrollierten [der Heißhunger (Sg.)|Heißhunger] vermarktet werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Die Neurobiologie des Belohnungssystems: Der 'Bliss Point' und Hyperpalatabilität",
        intro:
          "Neurochemie der sensorischen Sättigung, Fettsäure-Kohlenhydrat-Synergien und Laugechemie (B2).",
        paragraphs: [
          [
            "Die außerordentliche Konsumfrequenz hochverarbeiteter Knabberartikel wie [die Kartoffelchips (Pl.)|Kartoffelchips] lässt sich lebensmittelchemisch und neurobiologisch durch das Phänomen der Hyperpalatabilität erklären.",
            "Industrielle Formulierungen zielen minutiös auf den sogenannten 'Bliss Point' ab: Ein optimales Verhältnis von ca. 50 Prozent einfachen Kohlenhydraten und 35 Prozent Lipiden, kombiniert mit Natriumchlorid, übersteuert das endogene Sättigungssignal Leptin.",
            "Dieses Zusammenspiel forciert eine massive Ausschüttung von Dopamin im Nucleus accumbens, was die typische Unfähigkeit induziert, das [knabbern (knabberte, hat geknabbert)|Knabbern] vor vollständiger Entleerung der Verpackung zu inhibieren.",
          ],
          [
            "Bei traditionellem Laugegebäck wie der [die Laugenbrezel, -n|Laugenbrezel] hingegen beruht die typische Glanzkruste auf einer chemischen Reaktion.",
            "Vor dem Backen wird der Teigrohling in eine 3- bis 4-prozentige Natronlauge (NaOH) getaucht, wodurch Proteine und Stärke an der Oberfläche partiell hydrolysieren und im Ofen eine beschleunigte Maillard-Kondensation durchlaufen.",
          ],
          [
            "Diese biochemische Transformation erzeugt die tiefbraune Farbgebung, den herben Laugengeschmack und die antimikrobielle Oberflächenbarriere, die das bayerische Kulturgut unverwechselbar macht.",
          ],
        ],
      },
    },
  },
  das_fastfood: {
    description:
      "Burger, Pommes frites, Currywurst, Döner Kebab, Pizza, Imbissbuden und Take-away.",
    details: "Schnellgastronomie, Berliner Currywurst, Döner-Kultur und Fritteuse (A1–B2)",
    arabicDescription:
      "الوجبات السريعة (Das Fastfood): مفردات البرجر (Burger)، البطاطس المقلية (Pommes)، نقانق الكاري (Currywurst)، شاورما الدونر (Döner Kebab)، البيتزا (Pizza)، وأكشاك الوجبات (Imbiss)، مع تاريخ نشأة الدونر كباب والكراميل كاري في برلين.",
    words: [
      {
        german: "das Fastfood (Sg.)",
        arabic: "الوجبات السريعة",
        english: "fast food",
        example:
          "Obwohl Fastfood oft ungesund ist, greifen viele Menschen in der Mittagspause dazu.",
      },
      {
        german: "der Burger, -",
        arabic: "شطيرة البرجر",
        english: "burger",
        example:
          "Ein saftiger Rindfleisch-Burger mit Cheddar, Salat und Essiggurke schmeckt fantastisch.",
      },
      {
        german: "die Pommes frites (Pl.)",
        arabic: "البطاطس المقلية (البطاطا المقلية)",
        english: "french fries, chips",
        example:
          "Heiße, goldgelbe Pommes frites isst man in Deutschland gern mit Ketchup und Mayonnaise.",
      },
      {
        german: "die Currywurst, -̈e",
        arabic: "نقانق الكاري الألمانية الشهيرة",
        english: "currywurst",
        example:
          "Die Berliner Currywurst mit pikanter Tomatensoße und Currypulver ist ein echter Kultklassiker.",
      },
      {
        german: "der Döner Kebab, -s",
        arabic: "شاورما الدونر كباب التركية الألمانية",
        english: "doner kebab",
        example:
          "Der Döner Kebab im knusprigen Fladenbrot mit Knoblauchsoße ist der beliebteste deutsche Imbiss.",
      },
      {
        german: "die Pizza, -s/Pizzen",
        arabic: "البيتزا",
        english: "pizza",
        example:
          "Wir bestellen am Freitagabend eine dampfende Pizza Margherita mit extra Mozzarella.",
      },
      {
        german: "die Imbissbude, -n",
        arabic: "كشك بيع المأكولات الخفيفة والسريعة",
        english: "snack stall, food stand",
        example: "An der kleinen Imbissbude am Bahnhof stehen hungrige Pendler in der Schlange.",
      },
      {
        german: "zum Mitnehmen",
        arabic: "للأخذ سفري (تيك أواي)",
        english: "to go, takeaway",
        example: "Möchten Sie den Döner hier im Lokal essen oder bestellen Sie ihn zum Mitnehmen?",
      },
      {
        german: "frittieren (frittierte, hat frittiert)",
        arabic: "يقلي في الزيت الغزير المغلي",
        english: "to deep-fry",
        example: "In heißem Pflanzenöl muss man die Kartoffelstäbchen knusprig frittieren.",
      },
      {
        german: "fettig",
        arabic: "دهني / دسم ومشبع بالزيوت",
        english: "greasy, oily",
        example:
          "Wenn das Öl nicht heiß genug ist, saugen die Fritten Fett auf und schmecken zu fettig.",
      },
      {
        german: "die Fritteuse, -n",
        arabic: "المقلاة الكهربائية العميقة للزيت",
        english: "deep fryer",
        example: "In der Imbissküche brummt die große Fritteuse den ganzen Tag.",
      },
      {
        german: "die Mahlzeit für unterwegs",
        arabic: "وجبة سريعة على الطريق",
        english: "meal on the go",
        example: "Ein belegtes Baguette ist eine praktische Mahlzeit für unterwegs.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein schneller Snack am Imbiss",
        intro: "Einfache Sätze über Burger, Pommes, Pizza und Döner (A1).",
        paragraphs: [
          [
            "In der Mittagspause habe ich wenig Zeit zum Kochen.",
            "Ich gehe zur nächsten [die Imbissbude, -n|Imbissbude] um die Ecke.",
            "Dort bestellen viele Leute leckeres [das Fastfood (Sg.)|Fastfood].",
            "Ich bestelle einen [der Burger, -|Burger] und eine Portion [die Pommes frites (Pl.)|Pommes frites].",
          ],
          [
            "Die Verkäuferin fragt freundlich: 'Essen Sie hier oder ist es [zum Mitnehmen|zum Mitnehmen]?'",
            "Ich nehme das Essen mit und esse im Park.",
            "Mein Kollege isst lieber einen großen [der Döner Kebab, -s|Döner Kebab] mit Salat.",
            "Das Essen ist heiß, schnell fertig und macht satt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Die beiden Könige des deutschen Imbisses",
        intro: "Currywurst und Döner Kebab als beliebteste Gerichte für unterwegs (A2).",
        paragraphs: [
          [
            "Wer in Berlin oder im Ruhrgebiet unterwegs ist, kommt an zwei berühmten Gerichten nicht vorbei.",
            "Das erste Gericht ist die legendäre [die Currywurst, -̈e|Currywurst], die mit heißer Soße und Currypulver serviert wird.",
            "Dazu bestellt man fast immer knusprige Pommes rot-weiß, also mit Ketchup und Mayonnaise.",
            "In der Küche sieht man, wie die Pommes in der heißen [die Fritteuse, -n|Fritteuse] sprudeln.",
          ],
          [
            "Das zweite extrem beliebte Gericht ist [der Döner Kebab, -s|Döner Kebab], der in den 1970er-Jahren in Berlin erfunden wurde.",
            "In ein getoastetes Fladenbrot füllt man saftiges Fleisch, Krautsalat, Tomaten und aromatische Soßen.",
            "Man sollte nicht zu oft Fastfood essen, weil es manchmal sehr [fettig|fettig] und kalorienreich ist.",
            "Aber ab und zu ist eine warme Mahlzeit auf der Straße ein echtes Vergnügen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Integrationsgeschichte am Imbissstand: Wie der Döner Deutschland eroberte",
        intro:
          "Die kulturhistorische Entstehung der Berliner Currywurst und des deutsch-türkischen Döners (B1).",
        paragraphs: [
          [
            "Die deutsche Imbisskultur spiegelt die Sozial- und Migrationsgeschichte der Bundesrepublik auf faszinierende Weise wider.",
            "Im Nachkriegsberlin des Jahres 1949 erfand Herta Heuwer die [die Currywurst, -̈e|Currywurst], indem sie gebratene Brühwurst mit einer Soße aus Tomatenmark, Worcestershiresauce und britischem Currypulver kombinierte - eine kulinarische Antwort auf die Not und Aufbruchstimmung jener Epoche.",
            "Über Jahrzehnte war die Currywurst der unangefochtene Champion an jeder deutschen [die Imbissbude, -n|Imbissbude].",
          ],
          [
            "In den 1970er-Jahren revolutionierten türkische Gastarbeiter in Berlin Kreuzberg diesen Markt, indem sie den anatolischen Drehspieß an mitteleuropäische Essgewohnheiten anpassten.",
            "Statt Fleisch auf dem Teller zu servieren, packte Kadir Nurman das Grillfleisch mit Salat und Knoblauchsoße in ein knuspriges Fladenbrot: Der [der Döner Kebab, -s|Döner Kebab] als transportable Mahlzeit war geboren.",
          ],
          [
            "Heute erwirtschaftet die Dönerindustrie in Deutschland Milliardenumsätze und hat traditionelle Fastfood-Ketten weitgehend deklassiert.",
            "Zugleich wandelt sich die Branche: Moderne Imbisskonzepte setzen vermehrt auf Gourmet-Burger, handgeschnittene Pommes und vegane Fleischimitate [zum Mitnehmen|zum Mitnehmen].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title:
          "Lipidoxidation beim Frittieren, Acrylamidbildung und Soziologie der Fast-Casual-Gastronomie",
        intro:
          "Thermodynamik des Frittierens, Maillard-bedingte Acrylamidrisiken und urbane Esssoziologie (B2).",
        paragraphs: [
          [
            "Das physikalische Verfahren, stärkehaltige Kartoffelstäbchen im heißen Lipidbad zu [frittieren (frittierte, hat frittiert)|frittieren], beruht auf einem hocheffizienten instationären Wärmeübergang bei etwa 170 bis 180 Grad Celsius.",
            "Das in den äußeren Zellschichten enthaltene Wasser verdampft explosionsartig, was zur Ausbildung einer porösen, knusprigen Kruste führt, während das Innere durch Dämpfen gart.",
            "Wird das Speiseöl in der [die Fritteuse, -n|Fritteuse] jedoch thermisch überlastet, setzen oxidative und hydrolytische Degradationsprozesse ein, die zur Akkumulation freier Fettsäuren und toxischer Acroleine führen.",
          ],
          [
            "Aus toxikologischer Perspektive erfordert das Frittieren eine strikte Temperaturüberwachung zur Minimierung von Acrylamid, einem potenziell mutagenen Stoff, der bei Temperaturen über 175 Grad Celsius aus Asparagin und reduzierenden Zuckern entsteht.",
          ],
          [
            "Soziologisch manifestiert sich in der Entwicklung vom simplen Straßenimbiss zur durchgestylten 'Fast-Casual'-Gastronomie ein Distinktionsbedürfnis des urbanen Bürgertums.",
            "Das traditionell als minderwertig stigmatisierte [das Fastfood (Sg.)|Fastfood] wird durch regionale Bio-Zutaten, Sauerteig-Buns und Craft-Dips rekontextualisiert und als moderner Lifestyle-Konsum zelebriert.",
          ],
        ],
      },
    },
  },
  die_hauptmahlzeit: {
    description: "Mittagessen, Abendessen, Vorspeise, Hauptgericht, Beilagen, Menüs und Festessen.",
    details: "Menüabfolge, Sonntagsbraten, Beilagenkultur und traditionelle Tischordnung (A1–B2)",
    arabicDescription:
      "الوجبة الرئيسية (Die Hauptmahlzeit): مفردات وجبة الغداء (Mittagessen)، وجبة العشاء (Abendessen)، المقبلات (Vorspeise)، الطبق الرئيسي (Hauptgericht)، الأطباق الجانبية (Beilage)، القوائم متعددة الأطباق (Menü)، والشواء الاحتفالي (Braten).",
    words: [
      {
        german: "die Hauptmahlzeit, -en",
        arabic: "الوجبة الرئيسية لليوم",
        english: "main meal",
        example:
          "Früher war in Deutschland das Mittagessen die wichtigste Hauptmahlzeit des Tages.",
      },
      {
        german: "das Mittagessen, -",
        arabic: "وجبة الغداء",
        english: "lunch",
        example:
          "Um zwölf Uhr dreißig versammelt sich die Belegschaft in der Kantine zum Mittagessen.",
      },
      {
        german: "das Abendessen, -",
        arabic: "وجبة العشاء",
        english: "dinner, supper",
        example:
          "Das gemeinsame Abendessen bietet die Gelegenheit, sich über die Erlebnisse des Tages auszutauschen.",
      },
      {
        german: "die Vorspeise, -n",
        arabic: "المقبلات / الطبق التمهيدي",
        english: "starter, appetizer",
        example:
          "Als leichte Vorspeise serviert der Kellner eine klare Rinderbrühe mit Kräuterflädle.",
      },
      {
        german: "das Hauptgericht, -e",
        arabic: "الطبق الرئيسي المكتمل",
        english: "main dish, main course",
        example:
          "Das Hauptgericht besteht traditionell aus einer Fleischkomponente, Soße und zwei Beilagen.",
      },
      {
        german: "die Beilage, -n",
        arabic: "الطبق الجانبي المكمل (كالأرز أو البطاطس)",
        english: "side dish",
        example:
          "Zu geschmortem Fleisch wählt man gern Kartoffelklöße oder handgeschabte Spätzle als Beilage.",
      },
      {
        german: "die Nachspeise, -n",
        arabic: "التحلية بعد الطعام",
        english: "dessert",
        example: "Zur Nachspeise gibt es warmen Apfelstrudel mit Bourbon-Vanilleeis.",
      },
      {
        german: "das Menü, -s",
        arabic: "قائمة طعام متكاملة من عدة أطباق",
        english: "set menu, multi-course meal",
        example:
          "Am Silvesterabend bucht das Paar ein exklusives Fünf-Gänge-Menü im Schlossrestaurant.",
      },
      {
        german: "der Braten, -",
        arabic: "اللحم المشوي الكبير بالفرن",
        english: "roast meat, roast",
        example: "Der sonntägliche Rinderbraten schmort drei Stunden im gusseisernen Schmortopf.",
      },
      {
        german: "die Klöße (Pl.)",
        arabic: "كرات البطاطس المسلوقة (الكلوسه/كنودل)",
        english: "potato dumplings",
        example:
          "Thüringer Klöße aus rohen und gekochten Kartoffeln saugen die schmackhafte Bratensoße auf.",
      },
      {
        german: "servieren (servierte, hat serviert)",
        arabic: "يقدم الطعام والشراب على المائدة",
        english: "to serve",
        example: "Die Bedienung serviert die heißen Speisen auf vorgewärmten Porzellantellern.",
      },
      {
        german: "ausgewogen",
        arabic: "متوازن ومتنوع العناصر الغذائية",
        english: "balanced",
        example: "Eine gesunde Mahlzeit sollte ausgewogen sein und viel frisches Gemüse enthalten.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Das warme Mittagessen",
        intro: "Einfache Sätze über Mittagessen, Fleisch, Beilage und Nachtisch (A1).",
        paragraphs: [
          [
            "Um ein Uhr mittags kocht meine Mutter das [das Mittagessen, -|Mittagessen].",
            "Heute gibt es ein tolles [das Hauptgericht, -e|Hauptgericht] für alle.",
            "Sie kocht Hähnchenfleisch und als [die Beilage, -n|Beilage] gibt es Reis und Gemüse.",
            "Der Tisch ist schön gedeckt und alle sitzen zusammen.",
          ],
          [
            "Die Mutter wird das Essen auf warmen Tellern [servieren (servierte, hat serviert)|servieren].",
            "Das Essen schmeckt lecker und ist sehr gesund.",
            "Nach dem Essen essen wir noch eine süße [die Nachspeise, -n|Nachspeise].",
            "So ist die [die Hauptmahlzeit, -en|Hauptmahlzeit] der schönste Moment des Tages.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Der traditionelle Sonntagsbraten",
        intro: "Klassisches Festessen mit Vorspeise, Braten, Klößen und Rotkohl (A2).",
        paragraphs: [
          [
            "In Deutschland ist der Sonntag der Tag, an dem man sich Zeit für ein feines Festessen nimmt.",
            "Zuerst essen wir als leichte [die Vorspeise, -n|Vorspeise] eine warme Hochzeitssuppe mit Grießnockerln.",
            "Danach holt mein Großvater einen großen [der Braten, -|Braten] aus dem Ofen, der stundenlang geschmort hat.",
            "Dazu servieren wir selbstgemachte [die Klöße (Pl.)|Klöße] und gedünsteten Apfelrotkohl.",
          ],
          [
            "Weil wir abends meistens nur Brot und Käse essen, ist das Mittagessen unsere wichtigste [die Hauptmahlzeit, -en|Hauptmahlzeit].",
            "Das Essen ist reichhaltig, deftig und perfekt [ausgewogen|ausgewogen].",
            "Zum Abschluss trinken die Erwachsenen Kaffee und genießen ein Stück Kuchen.",
            "Traditionelle Familiengerichte verbinden die Generationen am gemeinsamen Tisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom Drei-Gänge-Menü zum Wandel der familiären Tafelfreuden",
        intro:
          "Aufbau klassischer Menüs, Tellerarrangements und der zeitliche Wandel der Mahlzeiten (B1).",
        paragraphs: [
          [
            "Die klassische europäische Menüfolge basiert auf einer dramaturgischen Steigerung des Geschmackserlebnisses.",
            "Ein stilvolles [das Menü, -s|Menü] beginnt typischerweise mit einer leichten [die Vorspeise, -n|Vorspeise], etwa einem Salat oder einer aromatischen Brühe, um die Geschmacksknospen zu wecken.",
            "Das darauffolgende [das Hauptgericht, -e|Hauptgericht] bildet das geschmackliche und energetische Gravitationszentrum des Essens.",
          ],
          [
            "Traditionell folgt das Hauptgericht dem Dreiklang aus Proteinquelle, stärkehaltiger [die Beilage, -n|Beilage] wie Salzkartoffeln oder [die Klöße (Pl.)|Klöße] und frischem Gemüse.",
            "Abgerundet wird das Mahl durch eine raffinierte Nachspeise, die mit Säure oder Fruchtsüße einen runden Abschluss setzt.",
          ],
          [
            "Im modernen Alltag hat sich allerdings der Schwerpunkt der Hauptmahlzeit verlagert: Da viele Berufstätige mittags nur einen leichten Snack in der Kantine zu sich nehmen, wird das warme Kochen zunehmend auf das [das Abendessen, -|Abendessen] verschoben.",
            "Dennoch bleibt der festliche Rahmen an Feiertagen ein unumstößliches Element sozialer Verbundenheit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Menüarchitektur, Sensorische Sättigung und ernährungssoziologische Transformation",
        intro:
          "Gastrosophische Kriterien der Menüfolge, Reizmodulation und der Zerfall synchroner Mahlzeiten (B2).",
        paragraphs: [
          [
            "In der Gastrosophie und Haute Cuisine gehorcht die Konstruktion eines mehrgängigen Menüs präzisen sensorischen Prinzipien der sensorisch-spezifischen Sättigung (Sensory-Specific Satiety).",
            "Wird eine Geschmackskomponente - etwa Salz oder Fett - über mehrere Gänge hinweg redundant exponiert, adaptieren die zerebralen Belohnungszentren rasch, was zu vorzeitiger kulinarischer Ermüdung führt.",
            "Daher alternieren meisterhaft konzipierte Menüs kontrastreich zwischen knackigen Texturen, adstringierenden Säurespitzen und tiefen Umami-Noten beim Schmorgericht.",
          ],
          [
            "Soziologisch betrachtet reflektiert die Verschiebung der primären [die Hauptmahlzeit, -en|Hauptmahlzeit] vom Mittag auf den Abend den Übergang von agrarisch-industriellen Taktungen zur flexiblen Wissensökonomie.",
          ],
          [
            "Der fortschreitende Zerfall synchronisierter Familienmahlzeiten ('Gastro-Anomie') wird durch die Renaissance des Wochenendbratens kompensiert: Hier dient das feierliche [servieren (servierte, hat serviert)|Servieren] aufwendiger Traditionsgerichte als bewusster Entschleunigungsanker gegen die Fragmentierung des Alltags.",
          ],
        ],
      },
    },
  },
  geschirr_und_besteck: {
    description:
      "Teller, Tassen, Gläser, Besteck, Gabel, Messer, Löffel, Schüsseln und Tischkultur.",
    details: "Tisch eindecken, Porzellan, Spülmaschine und Knigge-Regeln (A1–B2)",
    arabicDescription:
      "الأواني وأدوات المائدة (Geschirr und Besteck): مفردات الأواني (Geschirr)، أدوات المائدة (Besteck)، الصحن (Teller)، الشوكة (Gabel)، السكين (Messer)، الملعقة (Löffel)، الفنجان (Tasse)، الكأس (Glas)، السلطانية (Schüssel)، وترتيب المائدة وقواعد الإتيكيت (Knigge).",
    words: [
      {
        german: "das Geschirr (Sg.)",
        arabic: "الأواني والأطباق الخزفية",
        english: "dishes, crockery, tableware",
        example: "Nach dem Festessen räumen wir das schmutzige Geschirr vorsichtig vom Tisch ab.",
      },
      {
        german: "das Besteck, -e",
        arabic: "أدوات المائدة (الشوكة والسكين والملعقة)",
        english: "cutlery, silverware",
        example: "Aus der Besteckschublade nimmt sie glänzendes Besteck aus rostfreiem Edelstahl.",
      },
      {
        german: "der Teller, -",
        arabic: "الصحن / الطبق",
        english: "plate",
        example:
          "Für die Suppe nimmt man einen tiefen Teller, für das Schnitzel einen flachen Teller.",
      },
      {
        german: "die Gabel, -n",
        arabic: "الشوكة",
        english: "fork",
        example: "Nach den klassischen Benimmregeln liegt die Gabel immer links neben dem Teller.",
      },
      {
        german: "das Messer, -",
        arabic: "السكين",
        english: "knife",
        example: "Das Messer liegt rechts vom Teller, wobei die scharfe Schneide nach innen zeigt.",
      },
      {
        german: "der Löffel, -",
        arabic: "الملعقة",
        english: "spoon",
        example:
          "Mit dem großen Esslöffel isst man Suppe, mit dem kleinen Teelöffel rührt man den Kaffee um.",
      },
      {
        german: "die Tasse, -n",
        arabic: "الفنجان / الكوب",
        english: "cup, mug",
        example: "Aus der Porzellantasse steigt der aromatische Dampf des schwarzen Tees auf.",
      },
      {
        german: "das Glas, -̈er",
        arabic: "الكأس الزجاجي / القدح",
        english: "glass",
        example: "Er schenkt kaltes Mineralwasser in ein großes durchsichtiges Glas ein.",
      },
      {
        german: "die Schüssel, -n",
        arabic: "السلطانية / الوعاء العميق للتقديم",
        english: "bowl, dish",
        example:
          "In einer großen gläsernen Schüssel wird der knackige Salat auf den Tisch gestellt.",
      },
      {
        german: "die Serviette, -n",
        arabic: "منديل المائدة القماشي أو الورقي",
        english: "napkin",
        example: "Vor dem Essen legt man sich die gefaltete Stoffserviette auf den Schoß.",
      },
      {
        german: "den Tisch decken (deckte, hat gedeckt)",
        arabic: "يرتب ويجهز مائدة الطعام",
        english: "to set the table",
        example:
          "Die Kinder helfen fleißig mit und decken den Tisch für das gemeinsame Abendessen.",
      },
      {
        german: "die Spülmaschine, -n",
        arabic: "غسالة الصحون والأواني",
        english: "dishwasher",
        example: "Nach dem Kochen stellen wir alle Teller und Töpfe in die Spülmaschine.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Wir decken den Tisch",
        intro: "Einfache Sätze über Teller, Gabel, Messer, Löffel und Gläser (A1).",
        paragraphs: [
          [
            "Es ist fast zwölf Uhr und wir wollen zu Mittag essen.",
            "Meine Mutter bittet mich: 'Hilf mir bitte und lass uns [den Tisch decken (deckte, hat gedeckt)|den Tisch decken]!'",
            "Ich stelle für jeden einen großen weißen [der Teller, -|Teller] auf den Tisch.",
            "Links neben den Teller lege ich [die Gabel, -n|die Gabel], rechts das scharfe [das Messer, -|Messer].",
          ],
          [
            "Für die Suppe brauche ich auch einen großen [der Löffel, -|Löffel].",
            "Neben jeden Teller stelle ich ein sauberes [das Glas, -̈er|Glas] für Wasser und lege [die Serviette, -n|die Serviette] dazu.",
            "Nach dem Essen stellen wir alles schmutzige [das Geschirr (Sg.)|Geschirr] in [die Spülmaschine, -n|die Spülmaschine].",
            "Der Tisch sieht sauber und sehr ordentlich aus.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Tischmanieren und die richtige Ordnung",
        intro: "Wie man Besteck und Gläser für ein festliches Abendessen anordnet (A2).",
        paragraphs: [
          [
            "Gestern hat meine Familie meinen Geburtstag gefeiert und wir haben den Tisch besonders festlich hergerichtet.",
            "Mein Vater polierte das silberne [das Besteck, -e|Besteck], damit keine Wasserflecken zu sehen waren.",
            "Er erklärte mir die alte Regel: Man benutzt das Besteck immer von außen nach innen.",
            "Für den Salat stellten wir eine elegante gläserne [die Schüssel, -n|Schüssel] in die Mitte des Tisches.",
          ],
          [
            "Zu Beginn des Essens nimmt man die feine Stoff-[die Serviette, -n|Serviette] und legt sie auf den Schoß.",
            "Für den Nachmittagskaffee holten wir das kostbare Porzellan mit Untertasse und [die Tasse, -n|Tasse] aus der Vitrine.",
            "Dank der modernen Spülmaschine ist das Aufräumen nach einem großen Fest gar kein Problem mehr.",
            "Ein schön gedeckter Tisch zeigt Wertschätzung für die Gäste und das Essen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Tischkultur, Knigge-Regeln und Meissener Porzellan",
        intro:
          "Vom Freiherrn von Knigge zur Porzellanmanufaktur: Ästhetik des gedeckten Tisches (B1).",
        paragraphs: [
          [
            "Die abendländische Tischkultur ist ein Spiegelbild zivilisatorischer Verfeinerung und sozialer Rituale.",
            "Maßgeblich geprägt durch Adolph Freiherr von Knigge im 18. Jahrhundert, regeln bis heute präzise Konventionen das Verhalten bei Tisch.",
            "Dazu gehört das korrekte Platzieren der Tafelkomponenten: Das Hauptbesteck flankiert den Platzteller, während Dessertbesteck oberhalb arrangiert wird; Gläser werden rechts oberhalb des Messers in der Reihenfolge ihrer Nutzung platziert.",
          ],
          [
            "Deutschland blickt zudem auf eine weltberühmte Tradition der Porzellanherstellung zurück, allen voran die 1710 gegründete Staatliche Porzellan-Manufaktur Meissen mit den gekreuzten blauen Schwertern.",
            "Weißes Feinkeramik-[das Geschirr (Sg.)|Geschirr] galt an europäischen Königshöfen als 'weißes Gold' und symbolisierte höchsten Wohlstand.",
          ],
          [
            "Auch im modernen Privathaushalt bleibt das sorgfältige Arrangement eine Geste der Gastfreundschaft: Bevor die Gäste eintreffen, nimmt man sich Zeit, um liebevoll [den Tisch decken (deckte, hat gedeckt)|den Tisch zu decken], Kerzen zu entzünden und Stoffservietten zu drapieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title:
          "Werkstoffkunde von Porzellan, Metallurgie des Edelstahls und semiotische Tischordnung",
        intro:
          "Kaolin-Feldspat-Silikatphasen, Chrom-Nickel-Stähle und Soziologie der Esswerkzeuge (B2).",
        paragraphs: [
          [
            "Die materielle Kultur des Speisens basiert auf hochspezialisierten werkstofftechnischen Errungenschaften.",
            "Hartporzellan für feines [das Geschirr (Sg.)|Geschirr] entsteht durch Sintern von Kaolin, Quarz und Feldspat bei extremen Brenntemperaturen von über 1.400 Grad Celsius.",
            "Hierbei entsteht eine dichte, porenfreie Mullit- und Glasphase, die dem Material seine bemerkenswerte mechanische Härte, Säureresistenz und Transluzenz verleiht.",
          ],
          [
            "Für modernes [das Besteck, -e|Besteck] wiederum bildet austenitischer 18/10-Chrom-Nickel-Edelstahl den Industriestandard.",
            "Der Legierungszusatz von 18 Prozent Chrom erzeugt bei Sauerstoffkontakt eine mikroskopisch dünne, selbstheilende Chromoxid-Passivschicht, während 10 Prozent Nickel den Glanz verstärken und Säurekorrosion durch Essig- oder Fruchtsäuren unterbinden.",
          ],
          [
            "Aus kultursoziologischer Perspektive nach Norbert Elias markiert die Domestizierung des Messers - dessen Spitze am Tisch niemals gegen das Gegenüber gerichtet werden darf - den Triumph der Affektkontrolle über archaische Aggressionspotenziale in ritualisierten Sozialräumen.",
          ],
        ],
      },
    },
  },
  die_ernaehrung: {
    description:
      "Nährwerte, Kalorien, Vitamine, Proteine, Kohlenhydrate, Fette, Ballaststoffe und Diäten.",
    details: "Ernährungsphysiologie, Stoffwechsel, vegane Ernährung und Allergien (A1–B2)",
    arabicDescription:
      "التغذية والنظام الغذائي (Die Ernährung): مفردات التغذية (Ernährung)، السعرات (Kalorie)، الفيتامينات (Vitamin)، البروتينات (Protein)، الكربوهيدرات (Kohlenhydrate)، الدهون (Fett)، الألياف الغذائية (Ballaststoffe)، والحساسية الغذائية (Allergie)، مع أسس التغذية الصحية المتوازنة.",
    words: [
      {
        german: "die Ernährung (Sg.)",
        arabic: "التغذية والنظام الغذائي",
        english: "nutrition, diet",
        example:
          "Eine ausgewogene Ernährung ist die wichtigste Voraussetzung für langfristige Gesundheit.",
      },
      {
        german: "die Kalorie, -n",
        arabic: "السعرة الحرارية",
        english: "calorie",
        example:
          "Wer mehr Kalorien aufnimmt als er verbraucht, nimmt über längere Zeit an Gewicht zu.",
      },
      {
        german: "das Vitamin, -e",
        arabic: "الفيتامين",
        english: "vitamin",
        example:
          "Frisches Obst und rohes Gemüse versorgen den Körper mit lebenswichtigen Vitaminen.",
      },
      {
        german: "das Protein, -e",
        arabic: "البروتين / المادة الزلالية",
        english: "protein",
        example:
          "Proteine sind die elementaren Bausteine für Muskeln, Zellen und Enzyme im Körper.",
      },
      {
        german: "die Kohlenhydrate (Pl.)",
        arabic: "الكربوهيدرات والنشويات",
        english: "carbohydrates",
        example: "Vollkornprodukte liefern komplexe Kohlenhydrate, die langsam verdaut werden.",
      },
      {
        german: "das Fett, -e",
        arabic: "الدهون والزيوت",
        english: "fat, lipid",
        example: "Pflanzliche Fette wie Olivenöl enthalten gesunde ungesättigte Fettsäuren.",
      },
      {
        german: "die Ballaststoffe (Pl.)",
        arabic: "الألياف الغذائية غير القابلة للهضم السريع",
        english: "dietary fiber, roughage",
        example:
          "Ballaststoffe unterstützen die Darmgesundheit und sorgen für ein langes Sättigungsgefühl.",
      },
      {
        german: "vegetarisch",
        arabic: "نباتي (لا يأكل اللحم أو السمك)",
        english: "vegetarian",
        example:
          "Immer mehr Jugendliche ernähren sich vegetarisch aus Gründen des Tier- und Klimaschutzes.",
      },
      {
        german: "die Unverträglichkeit, -en",
        arabic: "عدم التحمل الغذائي",
        english: "food intolerance",
        example:
          "Bei einer Laktose-Unverträglichkeit sollte man auf herkömmliche Kuhmilch verzichten.",
      },
      {
        german: "das Immunsystem, -e",
        arabic: "جهاز المناعة",
        english: "immune system",
        example:
          "Ausreichend Schlaf und vitaminreiches Essen stärken das körpereigene Immunsystem.",
      },
      {
        german: "der Stoffwechsel, -",
        arabic: "التمثيل الغذائي / الأيض",
        english: "metabolism",
        example: "Regelmäßige Bewegung an der frischen Luft kurbelt den Stoffwechsel effektiv an.",
      },
      {
        german: "eine ausgewogene Ernährung",
        arabic: "تغذية متوازنة وشاملة",
        english: "a balanced diet",
        example:
          "Zu einer ausgewogenen Ernährung gehören frisches Gemüse, Vollkorn, Hülsenfrüchte und gesunde Fette.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Gesund essen jeden Tag",
        intro: "Einfache Sätze über Vitamine, Obst, Gemüse und gesunde Ernährung (A1).",
        paragraphs: [
          [
            "Ich möchte gesund leben und achte auf [die Ernährung (Sg.)|die Ernährung].",
            "Jeden Tag esse ich frische Äpfel, Orangen und Karotten.",
            "Diese Lebensmittel enthalten fast jedes wichtige [das Vitamin, -e|Vitamin].",
            "Vitamine machen mich fit und stärken mein [das Immunsystem, -e|Immunsystem].",
          ],
          [
            "Auf meinem Teller liegen Reis, Gemüse und ein Stück Fisch für gutes [das Protein, -e|Protein].",
            "Ich trinke viel Wasser und trinke keine zuckerhaltige Cola.",
            "Mein Essen schmeckt gut und gibt mir viel Kraft für die Schule und den Sport.",
            "Gesundes Essen ist ganz einfach und macht Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Bausteine für einen fitten Körper",
        intro: "Kohlenhydrate, Proteine, Fette und vegetarisches Kochen im Alltag (A2).",
        paragraphs: [
          [
            "Wenn man fit bleiben möchte, muss man wissen, was in unserem Essen steckt.",
            "Unser Körper braucht drei große Gruppen: Eiweiß, Fette und [die Kohlenhydrate (Pl.)|Kohlenhydrate].",
            "Statt Weißbrot esse ich lieber Vollkornbrot, weil es viele gesunde [die Ballaststoffe (Pl.)|Ballaststoffe] hat.",
            "Gesundes [das Fett, -e|Fett] aus Nüssen und Olivenöl schützt das Herz und die Gefäße.",
          ],
          [
            "Viele meiner Schulfreunde kochen gern rein [vegetarisch|vegetarisch] und verzichten komplett auf Fleisch.",
            "Manche Menschen haben auch eine [die Unverträglichkeit, -en|Unverträglichkeit] gegen Milchzucker oder Gluten.",
            "Wenn man sich ausgewogen ernährt und Sport treibt, funktioniert der [der Stoffwechsel, -|Stoffwechsel] optimal.",
            "Gesundheit beginnt jeden Tag auf unserem Teller.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Deutsche Gesellschaft für Ernährung und moderne Ernährungstrends",
        intro:
          "Empfehlungen der DGE, Mikrobiomgesundheit und der gesellschaftliche Trend zur Pflanzenkost (B1).",
        paragraphs: [
          [
            "In den vergangenen Jahren hat das Thema Ernährung in der öffentlichen Debatte eine beispiellose Priorität erlangt.",
            "Wegweisende Institutionen wie die Deutsche Gesellschaft für Ernährung (DGE) betonen, dass [eine ausgewogene Ernährung|eine ausgewogene Ernährung] zu mehr als drei Vierteln aus pflanzlichen Quellen bestehen sollte.",
            "Im Mittelpunkt stehen unverarbeitete Lebensmittel, die reich an komplexen Mikronährstoffen, bioaktiven Substanzen und schützenden [die Ballaststoffe (Pl.)|Ballaststoffen] sind.",
          ],
          [
            "Zugleich wandelt sich das gesellschaftliche Bewusstsein: Die Entscheidung für eine Ernährungsweise, die vegan oder [vegetarisch|vegetarisch] ist, entspringt heute selten rein diätetischen Motiven, sondern reflektiert ein ethisches Verantwortungsbewusstsein gegenüber Tierschutz und globalem Klimawandel.",
            "Gleichzeitig häufen sich in der Bevölkerung Nahrungsmittelunverträglichkeiten gegen Laktose, Fruktose oder Histamin, was die Kennzeichnungspflichten für Hersteller drastisch verschärft hat.",
          ],
          [
            "Wer seinen Körper optimal versorgen möchte, muss nicht sklavisch jede [die Kalorie, -n|Kalorie] zählen, sondern sollte auf die Nährstoffdichte und Vielfalt seiner Lebensmittel achten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Molekulare Ernährungsphysiologie, Mikrobiom-Achse und Epigenetik",
        intro:
          "Kurzkettige Fettsäuren, Darm-Hirn-Achse, Insulinsensitivität und funktionelle Ernährung (B2).",
        paragraphs: [
          [
            "Die moderne molekulare Ernährungsmedizin transzendiert das überholte Konzept isolierter Kalorienbilanzen und begreift Nahrung als epigenetisches Informationssignal für den zellulären [der Stoffwechsel, -|Stoffwechsel].",
            "Die Zufuhr unverdaulicher [die Ballaststoffe (Pl.)|Ballaststoffe] dient der enteralen Mikrobiota als primäres Substrat zur Synthese kurzkettiger Fettsäuren (SCFA) wie Acetat, Propionat und Butyrat.",
            "Diese Metaboliten modulieren über G-Protein-gekoppelte Rezeptoren (GPR41/43) die intestinale Barriereintegrität und üben antiinflammatorische Effekte auf das systemische [das Immunsystem, -e|Immunsystem] aus.",
          ],
          [
            "Gleichzeitig steuert die Qualität der Makronährstoffe die Insulinsensitivität der Zielgewebe: Während raffinierte [die Kohlenhydrate (Pl.)|Kohlenhydrate] mit hohem glykämischen Index zu chronischer Hyperinsulinämie und Steatosis hepatis beitragen, induzieren Omega-3-Polyene eine Herabregulation proinflammatorischer Eicosanoide.",
          ],
          [
            "Dieses tiefgreifende Verständnis biochemischer Regelkreise begründet die personalisierte Ernährungstherapie als mächtigstes Instrument in der primären und sekundären Prävention chronisch-degenerativer Zivilisationskrankheiten.",
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
    if (!batch4Data[t.id]) {
      continue;
    }

    const src = batch4Data[t.id];
    t.description = src.description;
    t.details = src.details;
    t.arabicDescription = src.arabicDescription;
    t.words = src.words;
    t.stories = src.stories;
    console.log("Applied batch 4 to topic:", t.id, "(", t.title, ") -> words:", t.words.length);
  }
}

const res = vocabularyCollectionSchema.safeParse(et);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(etPath, JSON.stringify(et, null, 2) + "\n", "utf8");
console.log("Batch 4 successfully saved to essen-und-trinken.json!");
