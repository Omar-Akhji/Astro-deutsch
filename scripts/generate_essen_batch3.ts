import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch3Data: Record<string, any> = {
  brot: {
    description:
      "Brotkultur, Brötchen, Sauerteig, Roggenbrot, Vollkorn und deutsches Bäckerhandwerk.",
    details: "Brotvielfalt, Getreide, Kruste, Krume und Teigführung (A1–B2)",
    arabicDescription:
      "ثقافة الخبز الألماني (Brot): مفردات الخبز (Brot)، اللفائف الصغيرة (Brötchen)، خبز الحبوب الكاملة (Vollkornbrot)، خبز الجاودار (Roggenbrot)، العجينة المخمرة الحامضة (Sauerteig)، والقشرة المقرمشة (Kruste)، مع تسليط الضوء على إدراج الخبز الألماني في قائمة اليونسكو للتراث الثقافي.",
    words: [
      {
        german: "das Brot, -e",
        arabic: "الخبز",
        english: "bread",
        example: "Deutschland ist weltweit berühmt für seine einzigartige Vielfalt an gutem Brot.",
      },
      {
        german: "das Brötchen, -",
        arabic: "لفافة الخبز الصغيرة / الصمون",
        english: "bread roll",
        example: "Sonntagmorgens holt er frische, ofenwarme Brötchen vom Bäcker um die Ecke.",
      },
      {
        german: "das Vollkornbrot, -e",
        arabic: "خبز الحبوب الكاملة الصحي",
        english: "whole grain bread",
        example: "Vollkornbrot enthält viele Ballaststoffe und hält den Blutzuckerspiegel stabil.",
      },
      {
        german: "das Roggenbrot, -e",
        arabic: "خبز الجاودار (الروغن)",
        english: "rye bread",
        example: "Ein kräftiges Roggenbrot schmeckt leicht säuerlich und bleibt tagelang saftig.",
      },
      {
        german: "das Weißbrot, -e",
        arabic: "الخبز الأبيض",
        english: "white bread",
        example: "Das französische Baguette ist ein klassisches Weißbrot mit luftiger Krume.",
      },
      {
        german: "die Kruste, -n",
        arabic: "القشرة الخارجية المقرمشة",
        english: "crust",
        example:
          "Ein gutes Bauernbrot zeichnet sich durch eine dicke, herrlich krachende Kruste aus.",
      },
      {
        german: "die Krume, -n",
        arabic: "لب الخبز الداخلي الطري",
        english: "crumb, interior of bread",
        example: "Die Krume des Brotes ist elastisch, saftig und hat gleichmäßige Poren.",
      },
      {
        german: "der Sauerteig, -e",
        arabic: "العجينة المخمرة الحامضة (الساوردو)",
        english: "sourdough",
        example: "Echter Sauerteig braucht Zeit zum Reifen und macht das Getreide bekömmlich.",
      },
      {
        german: "die Brotscheibe, -n",
        arabic: "شريحة الخبز",
        english: "slice of bread",
        example: "Sie schneidet eine dicke Brotscheibe ab und bestreicht sie mit Butter.",
      },
      {
        german: "die Bäckerei, -en",
        arabic: "المخبز",
        english: "bakery",
        example:
          "In der traditionellen Bäckerei duftet es morgens um sechs Uhr nach frischem Gebäck.",
      },
      {
        german: "backen (bäckt, backte/buk, hat gebacken)",
        arabic: "يخبز في الفرن",
        english: "to bake",
        example: "Meine Großmutter backt samstags ihr eigenes Brot im Holzbackofen.",
      },
      {
        german: "knusprig",
        arabic: "مقرمش ومحمص",
        english: "crusty, crispy",
        example: "Die Brötchen müssen außen knusprig und innen herrlich fluffig sein.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Frische Brötchen am Morgen",
        intro: "Einfache Sätze über die Bäckerei, Brötchen und Brotfrühstück (A1).",
        paragraphs: [
          [
            "Jeden Morgen gehe ich zu Fuß in [die Bäckerei, -en|die Bäckerei].",
            "Dort kaufe ich ein dunkles [das Brot, -e|Brot] und vier kleine [das Brötchen, -|Brötchen].",
            "Die Brötchen kommen direkt aus dem Ofen und sind außen sehr [knusprig|knusprig].",
            "Ich trage die Papiertüte nach Hause, wo meine Familie schon wartet.",
          ],
          [
            "Am Tisch schneide ich eine dicke [die Brotscheibe, -n|Brotscheibe] ab.",
            "Ich esse gern gesundes [das Vollkornbrot, -e|Vollkornbrot] mit Butter und Käse.",
            "Mein kleiner Bruder mag lieber weiches [das Weißbrot, -e|Weißbrot].",
            "Das Frühstück mit frischem Brot ist der beste Start in den Tag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Das deutsche Bäckerhandwerk",
        intro: "Unterschiede zwischen Roggenbrot, Sauerteig und Weißbrot im Alltag (A2).",
        paragraphs: [
          [
            "Als ich nach Deutschland kam, war ich überrascht von den vielen Brotsorten.",
            "In jedem Geschäft gibt es über dreißig verschiedene Arten von Brot und Gebäck.",
            "Besonders beliebt ist herzhaftes [das Roggenbrot, -e|Roggenbrot], das man traditionell mit [der Sauerteig, -e|Sauerteig] zubereitet.",
            "Der Sauerteig sorgt dafür, dass das Brot saftig bleibt und einen feinen, leicht säuerlichen Geschmack hat.",
          ],
          [
            "Viele Menschen lieben die dunkle [die Kruste, -n|Kruste], die beim Hineinbeißen laut kracht.",
            "Die weiche [die Krume, -n|Krume] im Inneren nimmt die Butter wunderbar auf.",
            "Am Wochenende möchte ich zum ersten Mal selbst ein Brot zu Hause im Ofen [backen (bäckt, backte/buk, hat gebacken)|backen].",
            "Gutes Brot ist in Deutschland viel mehr als nur ein einfaches Nahrungsmittel.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kulturgut deutsches Brot: Von der UNESCO anerkannt",
        intro:
          "Die weltweite Einzigartigkeit des mitteleuropäischen Brotregisters und Brauchtums (B1).",
        paragraphs: [
          [
            "Kaum ein anderes Element symbolisiert die deutsche Alltagskultur so nachhaltig wie [das Brot, -e|das Brot].",
            "Mit über 3.000 im offiziellen Brotregister verzeichneten Rezepturen wurde die deutsche Brotkultur sogar von der UNESCO als immaterielles Kulturerbe der Menschheit anerkannt.",
            "Diese außergewöhnliche Vielfalt wurzelt historisch in der einstigen Kleinstaaterei sowie den klimatischen Bedingungen, die in weiten Teilen des Landes den Anbau von Roggen anstelle von anspruchsvollem Weizen begünstigten.",
          ],
          [
            "Im handwerklichen Mittelpunkt steht die Führung vom [der Sauerteig, -e|Sauerteig]: Ohne die Fermentation durch wilde Hefen und Milchsäurebakterien wäre das schwere Mehl im [das Roggenbrot, -e|Roggenbrot] backtechnisch nicht auflockerbar.",
            "Ein meisterhaft gebackenes Brot zeichnet sich durch die harmonische Dualität zwischen einer rissigen, aromatischen [die Kruste, -n|Kruste] und einer elastischen, feuchten [die Krume, -n|Krume] aus.",
          ],
          [
            "Trotz der Konkurrenz durch industrielle Backstraßen in Supermärkten besinnen sich immer mehr Verbraucher auf traditionelle Handwerksbäckereien, die ihren Teigen bis zu 48 Stunden Ruhezeit gönnen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Fermentationsbiologie, Phytinsäureabbau und Rheologie der Teigführung",
        intro:
          "Mikrobiologie der Sauerteigfermentation, Pentosane und biochemische Verträglichkeit (B2).",
        paragraphs: [
          [
            "Die Rheologie und Backfähigkeit von Roggenmehl unterscheidet sich fundamental von Weizen: Während Weizenteige ihre Gashaltefähigkeit über ein elastisches Klebergerüst (Glutenin und Gliadin) aufbauen, verhindern hohe Pentosankonzentrationen im Roggen die Bildung einer solchen Glutenmatrix.",
            "Hier fungieren Schleimstoffe (Arabinoxylane) als viskose Barriere, deren Viskosität zwingend durch eine Absenkung des pH-Wertes unter 4,5 via [der Sauerteig, -e|Sauerteig] stabilisiert werden muss, um die stärkeabbauenden Alpha-Amylasen zu inhibieren.",
          ],
          [
            "Aus ökotrophologischer Sicht leistet die lange Teigführung bei [das Vollkornbrot, -e|Vollkornbrot] einen entscheidenden Beitrag zur Bioverfügbarkeit von Mikronährstoffen.",
            "Durch die endogene Phytaseaktivität während der mehrstufigen Fermentation wird Phytinsäure degradiert, wodurch essenzielle zweiwertige Kationen wie Zink, Eisen und Magnesium aus unlöslichen Chelaten freigesetzt werden.",
          ],
          [
            "In der Kruste wiederum generieren Maillard-Reaktionen zwischen Aminosäuren und reduzierenden Zuckern komplexe Melanoidine, die dem Brot nicht nur seine dunkelbraune Tönung und die [knusprig|knusprige] Textur verleihen, sondern auch protektive antioxidative Eigenschaften besitzen.",
          ],
        ],
      },
    },
  },
  brotaufstriche: {
    description: "Marmelade, Honig, Nuss-Nougat-Creme, Frischkäse, Leberwurst und Schmalz.",
    details: "Süße und herzhafte Aufstriche, Emulsionen und die Brotzeit (A1–B2)",
    arabicDescription:
      "مدهونات الخبز (Brotaufstriche): مفردات المربى (Marmelade)، العسل (Honig)، كريمة الشوكولاتة والبندق (Nuss-Nougat-Creme)، الجبن القريش الكريمي (Frischkäse)، معجون نقانق الكبد (Leberwurst)، والشحم (Schmalz)، مع ثقافة وجبة العشاء الألمانية (Abendbrot).",
    words: [
      {
        german: "der Brotaufstrich, -e",
        arabic: "مدهون الخبز / ما يُدهن به الساندويتش",
        english: "spread",
        example: "Ob süß oder pikant: Ein guter Brotaufstrich macht jede Brotzeit zum Genuss.",
      },
      {
        german: "die Marmelade, -n",
        arabic: "المربى",
        english: "jam, marmalade",
        example: "Selbstgemachte Erdbeermarmelade schmeckt morgens herrlich auf warmem Toast.",
      },
      {
        german: "der Honig (Sg.)",
        arabic: "عسل النحل",
        english: "honey",
        example: "Der Imker erntet im Sommer goldgelben Blütenhonig direkt aus den Bienenstöcken.",
      },
      {
        german: "die Nuss-Nougat-Creme, -s",
        arabic: "كريمة البندق والكاكاو",
        english: "chocolate hazelnut spread",
        example: "Kinder lieben die süße Nuss-Nougat-Creme auf ihrem Frühstücksbrötchen.",
      },
      {
        german: "der Frischkäse, -",
        arabic: "الجبن الكريمي الطري القابل للدهن",
        english: "cream cheese",
        example: "Milder Frischkäse mit Schnittlauch und Pfeffer schmeckt cremig und erfrischend.",
      },
      {
        german: "die Leberwurst, -̈e",
        arabic: "نقانق الكبد القابلة للدهن (ليبرفورست)",
        english: "liver sausage spread",
        example:
          "Grobe Leberwurst mit Gewürzgurke ist ein traditioneller deutscher Klassiker zum Abendbrot.",
      },
      {
        german: "das Schmalz (Sg.)",
        arabic: "الشحم الحيواني المدهون بالبصل المقلي",
        english: "lard, dripping",
        example:
          "Griebenschmalz mit Röstzwiebeln und Äpfeln streicht man auf kräftiges Bauernbrot.",
      },
      {
        german: "der Kräuterquark (Sg.)",
        arabic: "جبن الكوارك بالأعشاب الطازجة",
        english: "herb quark",
        example:
          "Frischer Kräuterquark schmeckt hervorragend auf Vollkornbrot oder zu Pellkartoffeln.",
      },
      {
        german: "streichen (strich, hat gestrichen)",
        arabic: "يدهن الزبدة أو الجبن على الخبز",
        english: "to spread",
        example:
          "Er nimmt das Buttermesser, um den Aufstrich gleichmäßig auf das Brot zu streichen.",
      },
      {
        german: "cremig",
        arabic: "كريمي وقشدي القوام",
        english: "creamy",
        example: "Der Aufstrich ist wunderbar cremig und lässt sich ganz leicht verteilen.",
      },
      {
        german: "herzhaft",
        arabic: "دسم بنكهة حادقة مشبعة",
        english: "savory, hearty",
        example:
          "Zum Abendbrot essen viele Deutsche lieber einen herzhaften Belag statt etwas Süßes.",
      },
      {
        german: "der Hummus (Sg.)",
        arabic: "متبل الحمص (الحمص بطحينة)",
        english: "hummus",
        example: "Pflanzlicher Hummus aus Kichererbsen ist ein beliebter moderner Brotaufstrich.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Was kommt aufs Brot?",
        intro: "Einfache Sätze über Marmelade, Honig, Nutella und Frischkäse (A1).",
        paragraphs: [
          [
            "Ich sitze am Tisch und habe zwei Scheiben Brot vor mir.",
            "Auf die erste Scheibe möchte ich süße [die Marmelade, -n|Marmelade] oder gelben [der Honig (Sg.)|Honig] [streichen (strich, hat gestrichen)|streichen].",
            "Mein kleiner Bruder wählt immer die süße [die Nuss-Nougat-Creme, -s|Nuss-Nougat-Creme].",
            "Der Aufstrich ist weich und wunderbar [cremig|cremig].",
          ],
          [
            "Auf die zweite Scheibe gebe ich weißen [der Frischkäse, -|Frischkäse] und Kräuter.",
            "Das schmeckt nicht süß, sondern frisch und lecker.",
            "Jeder [der Brotaufstrich, -e|Brotaufstrich] hat einen anderen Geschmack.",
            "Zusammen schmeckt das Frühstück allen richtig gut.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Traditionelles deutsches Abendbrot",
        intro: "Herzhafte Aufstriche wie Leberwurst, Schmalz und Kräuterquark am Abend (A2).",
        paragraphs: [
          [
            "In Deutschland essen viele Familien abends keine warme Mahlzeit, sondern das berühmte 'Abendbrot'.",
            "Dabei stellt man einen Korb mit Brotscheiben und viele verschiedene Dosen auf den Tisch.",
            "Wer es deftig mag, wählt einen Geschmack, der kräftig und [herzhaft|herzhaft] ist.",
            "Mein Großvater liebt feine [die Leberwurst, -̈e|Leberwurst] mit kleinen Senfgurken.",
          ],
          [
            "Auf dem Land isst man manchmal auch traditionelles [das Schmalz (Sg.)|Schmalz] mit kleinen Apfelstücken.",
            "Für mich mache ich lieber frischen [der Kräuterquark (Sg.)|Kräuterquark] mit Schnittlauch und Meersalz.",
            "Immer beliebter wird auch orientalischer [der Hummus (Sg.)|Hummus], den man fertig im Supermarkt kaufen kann.",
            "Ein gemütliches Abendbrot mit gutem Belag bringt die Familie entspannt zusammen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Wandel der deutschen Abendbrotkultur und der Boom pflanzlicher Aufstriche",
        intro: "Von der Wurstplatte zum veganen Aufstrich: Ernährungswandel in Mitteleuropa (B1).",
        paragraphs: [
          [
            "Das traditionelle deutsche Abendbrot galt über Generationen hinweg als Inbegriff bürgerlicher Gemütlichkeit und Pragmatismus.",
            "Während die morgendliche Tafel meist von süßen Genüssen wie [die Marmelade, -n|Marmelade], Akazien-[der Honig (Sg.)|honig] oder Nusscreme dominiert wurde, stand abends die deftige Vielfalt im Vordergrund.",
            "Klassiker wie grobe [die Leberwurst, -̈e|Leberwurst], geräucherte Mettwurst oder herzhaftes [das Schmalz (Sg.)|Schmalz] waren von den Holzbrettern kaum wegzudenken.",
          ],
          [
            "In den letzten Jahren hat dieser Markt jedoch eine fundamentale Transformation durchlaufen.",
            "Immer mehr Verbraucher greifen zu rein pflanzlichen Alternativen: Neben orientalischem [der Hummus (Sg.)|Hummus] füllen unzählige Brotaufstriche auf Basis von Sonnenblumenkernen, Linsen oder Roter Bete die Regale.",
            "Diese neuen Produkte lassen sich ebenso geschmeidig auf das Roggenbrot [streichen (strich, hat gestrichen)|streichen] und bieten vollen Geschmack ohne Cholesterin.",
          ],
          [
            "Gleichwohl behauptet der klassische [der Kräuterquark (Sg.)|Kräuterquark] mit frischen Gartenkräutern seinen Spitzenplatz als gesunder, eiweißreicher Favorit für Jung und Alt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Emulsionsrheologie, Texturierung und pflanzliche Lipidstrukturen",
        intro:
          "Lebensmitteltechnologische Analyse von Aufstrichkonsistenzen und Streichfähigkeit (B2).",
        paragraphs: [
          [
            "Die sensorische Qualität von Lebensmitteln, die als [der Brotaufstrich, -e|Brotaufstrich] deklariert werden, wird primär durch ihre Rheologie und Temperaturabhängigkeit der Streichfähigkeit determiniert.",
            "Klassische Emulsionen wie [der Frischkäse, -|Frischkäse] oder fein zerkleinerte Leberpasteten beruhen auf einer fein austarierten Balance aus disperser Fettphase und kontinuierlicher Wasserphase, stabilisiert durch Milchproteine oder thermisch denaturiertes Myosin.",
          ],
          [
            "Bei Schokoladenaufstrichen wie der [die Nuss-Nougat-Creme, -s|Nuss-Nougat-Creme] wiederum entscheidet die Kristallisation der Triglyzeride über die Konsistenz.",
            "Hierbei spielt das Verhältnis von festen Fetten zu flüssigen Pflanzenölen bei 20 Grad Celsius die entscheidende Rolle, um ein unerwünschtes Ölen oder Verharzen zu unterbinden.",
          ],
          [
            "Die moderne Lebensmitteltechnologie widmet sich intensiv der texturiellen Nachbildung tierischer Aufstriche.",
            "Durch Hochdruckhomogenisation und den Einsatz pflanzlicher Hydrokolloide gelingt es, Dispersionen zu formulieren, die dem Gaumen das authentische [cremig|cremige] Schmelzgefühl traditioneller Fettmatrizen vermitteln, ohne auf tierische Rohstoffe zurückzugreifen.",
          ],
        ],
      },
    },
  },
  kuchen_und_gebaeck: {
    description: "Apfelkuchen, Käsekuchen, Torten, Schwarzwälder Kirschtorte, Gebäck und Kekse.",
    details: "Kaffeeklatsch, Mürbeteig, Hefeteig, Streusel und Biskuit (A1–B2)",
    arabicDescription:
      "الكعك والمعجنات والحلويات (Kuchen und Gebäck): مفردات الكعك (Kuchen)، التورتة (Torte)، كعكة الجبن (Käsekuchen)، كعكة الغابة السوداء (Schwarzwälder Kirschtorte)، البسكويت (Plätzchen)، عجينة الخميرة (Hefeteig)، وعجينة التارت الهشة (Mürbeteig)، مع ثقافة 'قهوة وكعك' (Kaffee und Kuchen).",
    words: [
      {
        german: "der Kuchen, -",
        arabic: "الكعكة / الكيك",
        english: "cake",
        example: "Am Sonntagnachmittag gibt es in Deutschland traditionell Kaffee und Kuchen.",
      },
      {
        german: "die Torte, -n",
        arabic: "التورتة الفاخرة متعددة الطبقات",
        english: "tart, fancy cake, gateau",
        example:
          "Zur Hochzeit backt die Konditorin eine prächtige dreistöckige Torte mit Marzipan.",
      },
      {
        german: "das Gebäck (Sg.)",
        arabic: "المعجنات والمخبوزات الحلوة",
        english: "pastries, baked goods",
        example: "Feines Gebäck wie Croissants und Franzbrötchen schmeckt am besten ofenfrisch.",
      },
      {
        german: "das Plätzchen, -",
        arabic: "البسكويت الصغير / الكعك المقرمش",
        english: "cookie, biscuit",
        example: "Im Advent backen Eltern mit ihren Kindern bunte Plätzchen zum Ausstechen.",
      },
      {
        german: "der Apfelkuchen, -",
        arabic: "كعكة التفاح",
        english: "apple pie, apple cake",
        example: "Gedeckter Apfelkuchen mit Zimt und Rosinen ist der beliebteste Kuchenklassiker.",
      },
      {
        german: "der Käsekuchen, -",
        arabic: "كعكة الجبن (تشيز كيك ألماني بالكوارك)",
        english: "cheesecake",
        example:
          "Echter deutscher Käsekuchen wird mit Magerquark zubereitet und schmeckt herrlich saftig.",
      },
      {
        german: "die Schwarzwälder Kirschtorte, -n",
        arabic: "كعكة الغابة السوداء بالكرز والكريمة",
        english: "Black Forest cake",
        example:
          "Die Schwarzwälder Kirschtorte verführt mit Sauerkirschen, Biskuit, Sahne und Kirschwasser.",
      },
      {
        german: "der Mürbeteig, -e",
        arabic: "عجينة التارت الهشة (الموربتيج)",
        english: "shortcrust pastry",
        example:
          "Mürbeteig besteht klassisch aus einem Teil Zucker, zwei Teilen Butter und drei Teilen Mehl.",
      },
      {
        german: "der Hefeteig, -e",
        arabic: "عجينة الخميرة الهشة",
        english: "yeast dough",
        example: "Der Hefeteig muss an einem warmen Ort ruhen, bis er sein Volumen verdoppelt hat.",
      },
      {
        german: "der Streusel, -",
        arabic: "الفتات السكري المقرمش فوق الكعك",
        english: "streusel, crumble",
        example:
          "Knusprige Streusel aus Mehl, Zucker und Butter machen den Obstkuchen unwiderstehlich.",
      },
      {
        german: "das Mehl, -e",
        arabic: "الدقيق / الطحين",
        english: "flour",
        example: "Für feinen Rührkuchen verwendet man Weizenmehl der Type 405.",
      },
      {
        german: "der Backofen, -̈",
        arabic: "فرن الخبز",
        english: "baking oven",
        example: "Der Kuchen bäckt bei 180 Grad Ober- und Unterhitze im vorgeheizten Backofen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Kuchen backen mit der Familie",
        intro: "Einfache Sätze über Kuchen, Mehl, Backofen und leckeren Apfelkuchen (A1).",
        paragraphs: [
          [
            "Heute ist Sonntag und wir backen einen süßen [der Kuchen, -|Kuchen].",
            "In eine große Schüssel gebe ich [das Mehl, -e|Mehl], Zucker, Butter und Eier.",
            "Ich rühre den Teig mit dem Mixer, bis alles schön glatt ist.",
            "Wir schneiden frische Äpfel für einen leckeren [der Apfelkuchen, -|Apfelkuchen].",
          ],
          [
            "Ich schiebe das Blech vorsichtig in den heißen [der Backofen, -̈|Backofen].",
            "Nach vierzig Minuten duftet die ganze Wohnung nach Zimt und Äpfeln.",
            "Zum Nachmittagskaffee essen wir den Kuchen mit ein wenig Schlagsahne.",
            "Alle freuen sich über das selbstgemachte Gebäck.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kaffee und Kuchen am Sonntagnachmittag",
        intro: "Käsekuchen, Torten und festliches Gebäck in der Konditorei (A2).",
        paragraphs: [
          [
            "Die Tradition von 'Kaffee und Kuchen' um 15 Uhr ist in Deutschland sehr lebendig.",
            "Gestern haben wir meine Großeltern besucht und eine berühmte [die Schwarzwälder Kirschtorte, -n|Schwarzwälder Kirschtorte] in der Konditorei gekauft.",
            "Diese [die Torte, -n|Torte] besteht aus Schokoladenbiskuit, saftigen Kirschen und viel frischer Sahne.",
            "Mein Onkel wählte lieber ein Stück cremigen [der Käsekuchen, -|Käsekuchen], der mit deutschem Quark gebacken wird.",
          ],
          [
            "Für Obstkuchen bereitet man meist einen lockeren [der Hefeteig, -e|Hefeteig] oder einen knusprigen [der Mürbeteig, -e|Mürbeteig] vor.",
            "Besonders lecker schmecken goldgelbe [der Streusel, -|Streusel] auf Zwetschgen- oder Rhabarberkuchen.",
            "Im Dezember backen wir kleine [das Plätzchen, -|Plätzchen], die wir mit bunten Streuseln verzieren.",
            "Süßes Backwerk bringt Gemütlichkeit und Freude in jede Zusammenkunft.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Der deutsche Sonntagskaffee und das Geheimnis traditioneller Teige",
        intro:
          "Soziokulturelle Bedeutung des Kaffeeklatsches und meisterhafte Teigzubereitung (B1).",
        paragraphs: [
          [
            "Die Institution des 'Kaffeeklatsches' am Sonntagnachmittag ist ein tief verwurzeltes Ritual der mitteleuropäischen Gesellschaft.",
            "Pünktlich um fünfzehn Uhr versammelt sich die Familie oder der Freundeskreis um die festlich gedeckte Kaffeetafel, um bei Filterkaffee über die Ereignisse der Woche zu debattieren.",
            "Im Mittelpunkt steht dabei stets eine Auswahl an Blechkuchen oder eine meisterhafte [die Torte, -n|Torte] aus der örtlichen Konditorei.",
          ],
          [
            "Hinter dieser Vielfalt verbirgt sich ein profundes backtechnisches Wissen um verschiedene Grundteige: Während für Tortenböden ein fluffiger Biskuitteig aufgeschlagen wird, verlangt der klassische Streuselkuchen nach einem elastischen [der Hefeteig, -e|Hefeteig], der ausreichend Zeit zum Gehen benötigt.",
            "Für Obsttörtchen und Plätzchen hingegen ist der butterreiche [der Mürbeteig, -e|Mürbeteig] die erste Wahl, der kühl verarbeitet werden muss, damit die Butter nicht schmilzt.",
          ],
          [
            "Weltweites Renommee genießt [die Schwarzwälder Kirschtorte, -n|die Schwarzwälder Kirschtorte], deren Kombination aus Schokolade, Kirschen und Schwarzwälder Kirschwasser das handwerkliche Können deutscher Zuckerbäcker vollendet repräsentiert.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title:
          "Thermodynamik der Emulsionen, Stärkeverkleisterung und Maillard-Kinetik beim Backen",
        intro:
          "Konditoreiwissenschaft, Glutenrelaxation und sensorische Texturkontraste bei Feingebäck (B2).",
        paragraphs: [
          [
            "In der professionellen Pâtisserie und Feinbäckerei gehorcht das Gelingen von feinem [das Gebäck (Sg.)|Gebäck] präzisen thermodynamischen und biochemischen Gesetzmäßigkeiten.",
            "Beim [der Mürbeteig, -e|Mürbeteig] beispielsweise muss die Glutenentwicklung gezielt unterdrückt werden: Durch das 'Verkneten' mit hohem Lipidanteil werden die Mehlpartikel mit Fettfilmen umhüllt ('Shortening-Effekt'), was die Ausbildung eines elastischen Klebernetzwerks verhindert und die charakteristische mürbe, krümelige Textur erzeugt.",
          ],
          [
            "Im Gegensatz dazu erfordert der [der Hefeteig, -e|Hefeteig] eine intensive mechanische Knetarbeit zur Entfaltung der Glutenin- und Gliadinstränge, damit das durch Saccharomyces cerevisiae produzierte Kohlendioxid im Teiggerüst retinierbar bleibt.",
          ],
          [
            "Während des Backprozesses im [der Backofen, -̈|Backofen] fusionieren Stärkeverkleisterung ab 65 Grad Celsius und Eiweißkoagulation zu einer stabilen Krumenarchitektur.",
            "Gleichzeitig induzieren hohe Oberflächentemperaturen an den [der Streusel, -|Streuseln] und der Kruste nicht-enzymatische Bräunungsreaktionen nach Maillard sowie Pyrolysen von Saccharose, die Hunderte flüchtiger Aromakomponenten freisetzen und das unverwechselbare Röstaroma konstituieren.",
          ],
        ],
      },
    },
  },
  desserts_und_suessspeisen: {
    description: "Desserts, Eis, Pudding, Milchreis, Grießbrei, Rote Grütze und Schokolade.",
    details: "Nachspeisen, Kompott, Süßspeisen als Hauptgericht und Vanillesoße (A1–B2)",
    arabicDescription:
      "الحلويات والتحليات (Desserts und Süßspeisen): مفردات التحلية (Dessert)، البودينغ (Pudding)، الآيس كريم (Eis)، الأرز بالحليب (Milchreis)، عصيدة السميد (Grießbrei)، هلام التوت الأحمر (Rote Grütze)، والشوكولاتة، مع تميز الأطباق الحلوة كوجبة غداء رئيسية في ألمانيا.",
    words: [
      {
        german: "das Dessert, -s",
        arabic: "التحلية / الحلى بعد الطعام",
        english: "dessert",
        example: "Als krönenden Abschluss des Menüs serviert der Kellner ein feines Dessert.",
      },
      {
        german: "die Süßspeise, -n",
        arabic: "الطبق الحلو (قد يؤكل كوجبة رئيسية)",
        english: "sweet dish",
        example: "In Süddeutschland isst man warme Süßspeisen gern als eigenständiges Mittagessen.",
      },
      {
        german: "der Pudding, -e/-s",
        arabic: "البودينغ",
        english: "pudding",
        example:
          "Schokoladenpudding mit Sahnehaube ist bei Kindern und Erwachsenen gleichermaßen beliebt.",
      },
      {
        german: "das Speiseeis (Sg.)",
        arabic: "الآيس كريم / البوظة",
        english: "ice cream",
        example:
          "An heißen Sommertagen stehen die Menschen geduldig an der Eisdiele nach Speiseeis an.",
      },
      {
        german: "der Milchreis (Sg.)",
        arabic: "الأرز بالحليب",
        english: "rice pudding",
        example: "Warmer Milchreis mit Zimt und Zucker erinnert viele Menschen an ihre Kindheit.",
      },
      {
        german: "der Grießbrei (Sg.)",
        arabic: "حساء السميد الحلو (عصيدة السميد)",
        english: "semolina pudding",
        example: "Cremiger Grießbrei schmeckt mit heißen Kirschen oder Apfelmus fantastisch.",
      },
      {
        german: "die Rote Grütze (Sg.)",
        arabic: "هلام التوتيات الحمراء التقليدي",
        english: "red berry compote / pudding",
        example: "Rote Grütze ist eine berühmte Spezialität aus Norddeutschland und Dänemark.",
      },
      {
        german: "die Schlagsahne (Sg.)",
        arabic: "الكريمة المخفوقة (شانتيه)",
        english: "whipped cream",
        example: "Ein Klecks frisch aufgeschlagene Schlagsahne verfeinert fast jedes süße Dessert.",
      },
      {
        german: "die Vanillesoße, -n",
        arabic: "صلصة الفانيليا الدافئة أو الباردة",
        english: "vanilla sauce, custard",
        example: "Zur säuerlichen Roten Grütze gießt man traditionell kalte Vanillesoße.",
      },
      {
        german: "die Schokolade, -n",
        arabic: "الشوكولاتة",
        english: "chocolate",
        example: "Dunkle Schokolade mit hohem Kakaoanteil schmilzt langsam und edel im Mund.",
      },
      {
        german: "süßen (süßte, hat gesüßt)",
        arabic: "يُحلي بالسكر أو العسل",
        english: "to sweeten",
        example: "Man kann den Naturjoghurt wahlweise mit braunem Zucker oder Honig süßen.",
      },
      {
        german: "köstlich",
        arabic: "شهي ولذيذ للغاية",
        english: "delicious, scrumptious",
        example: "Das Mousse au Chocolat schmeckt luftig, intensiv und absolut köstlich.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein süßes Eis im Sommer",
        intro: "Einfache Sätze über Desserts, Schokolade, Eis und Milchreis (A1).",
        paragraphs: [
          [
            "Nach dem Essen fragen alle: Gibt es heute ein [das Dessert, -s|Dessert]?",
            "Meine Mutter bringt kaltes [das Speiseeis (Sg.)|Speiseeis] aus der Küche.",
            "Ich nehme zwei Kugeln mit süßer [die Schokolade, -n|Schokolade] und Erdbeere.",
            "Oben auf das Eis kommt ein Löffel weiße [die Schlagsahne (Sg.)|Schlagsahne].",
          ],
          [
            "Wenn es draußen regnet, kochen wir lieber warmen [der Milchreis (Sg.)|Milchreis].",
            "Wir streuen braunen Zucker und Zimt darüber.",
            "Das Essen ist warm, weich und schmeckt wirklich [köstlich|köstlich].",
            "Alle Kinder essen ihren Teller schnell leer.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Süße Spezialitäten aus Nord und Süd",
        intro: "Rote Grütze, Vanillesoße und süße Hauptgerichte in Deutschland (A2).",
        paragraphs: [
          [
            "In Norddeutschland gibt es eine berühmte Süßspeise, die [die Rote Grütze (Sg.)|Rote Grütze] heißt.",
            "Sie wird aus Himbeeren, Kirschen, Johannisbeeren und etwas Stärke gekocht.",
            "Weil die Beeren säuerlich schmecken, serviert man dazu immer süße [die Vanillesoße, -n|Vanillesoße] oder flüssige Sahne.",
            "Die Kombination aus herben Beeren und sanfter Vanille ist einfach perfekt.",
          ],
          [
            "In Süddeutschland isst man süße Speisen oft nicht als Dessert, sondern als vollwertige [die Süßspeise, -n|Süßspeise] zum Mittagessen.",
            "Beliebt sind dann warmer [der Grießbrei (Sg.)|Grießbrei] mit Apfelmus oder fluffiger Kaiserschmarrn mit Rosinen.",
            "Man sollte solche Gerichte nicht zu stark mit Zucker [süßen (süßte, hat gesüßt)|süßen], damit der Eigengeschmack erhalten bleibt.",
            "Diese warmen Gerichte schenken Wohlbefinden an kalten Wintertagen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Zwischen Nachspeise und Hauptmahlzeit: Die Kultur mitteleuropäischer Süßspeisen",
        intro:
          "Süße Hauptmahlzeiten, Klostertraditionen und die Raffinesse norddeutscher Beerenkompotte (B1).",
        paragraphs: [
          [
            "Ein faszinierendes Alleinstellungsmerkmal der mitteleuropäischen, namentlich der bayerischen und österreichischen Küche ist das Phänomen der süßen Hauptspeise.",
            "Während in romanischen Ländern Desserts strikt als Abschluss eines mehrgängigen Menüs fungieren, etablierten sich Gerichte wie Germknödel, Dampfnudeln oder [der Grießbrei (Sg.)|Grießbrei] historisch als eigenständige vegetarische Hauptgerichte für Fastentage.",
            "Diese warmen Mahlzeiten sättigen nachhaltig und verbinden einfachen Getreidebrei mit fruchtigen Beilagen.",
          ],
          [
            "Im Norden der Republik wiederum entwickelte sich [die Rote Grütze (Sg.)|die Rote Grütze] zur kulinarischen Ikone.",
            "Traditionell aus Sauerkirschen und sommerlichen Beeren gekocht, bildet die feine Säure der Früchte ein raffiniertes Gegengewicht zur samtigen [die Vanillesoße, -n|Vanillesoße] oder [die Schlagsahne (Sg.)|Schlagsahne].",
          ],
          [
            "Auch der cremige [der Milchreis (Sg.)|Milchreis], sanft über Stunden in Vollmilch gequollen und mit Zimtzucker bestreut, ist fester Bestandteil des kollektiven Geschmacksgedächtnisses ganzer Generationen.",
            "Moderne Pâtissiers interpretieren diese Klassiker heute neu, indem sie den Zuckergehalt reduzieren und mit exotischen Gewürzen wie Kardamom oder Tonkabohne experimentieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Kristallisationskinetik von Schokolade, Gelierhydrokolloide und Kältestabilisation",
        intro:
          "Polymorphismus der Kakaobutter, Stärkegelbildung und kryogene Texturen bei Glace (B2).",
        paragraphs: [
          [
            "Die Herstellung edler Desserts tangiert fundamentale physikochemische Phänomene der Lebensmittelwissenschaft.",
            "Die Veredelung hochwertiger [die Schokolade, -n|Schokolade] erfordert das präzise 'Temperieren', um selektiv die thermodynamisch stabile Kristallform Beta-V der Kakaobutter zu erzeugen.",
            "Nur diese Modifikation gewährleistet den matten Glanz, das charakteristische Knacken beim Bruch und einen Schmelzpunkt von exakt 34 Grad Celsius, der knapp unter der humanen Körpertemperatur liegt.",
          ],
          [
            "Bei gefrorenem [das Speiseeis (Sg.)|Speiseeis] wiederum entscheidet die Kristallisationskinetik des Wassers über die Cremigkeit.",
            "Wird die Masse während des Schockfrostens nicht mit hoher Schergeschwindigkeit bewegt, bilden sich grobe Eiskristalle, die das Mundgefühl beeinträchtigen.",
            "Moderne Gelatiere setzen daher gezielt Dextrose und Invertzucker ein, um den Gefrierpunkt zu deprimieren und die Bildung mikroskopischer Eiskristalle unter 20 Mikrometer zu forcieren.",
          ],
          [
            "Parallel dazu beruht die Festigkeit von Gerichten wie [die Rote Grütze (Sg.)|Roter Grütze] auf der retrograden Gelatinierung von Amyloseketten, während Puddings durch Amylopektin-Verzweigungen ihre sämige Textur stabilisieren.",
          ],
        ],
      },
    },
  },
  heissgetraenke: {
    description: "Kaffee, Espresso, Cappuccino, schwarzer Tee, Kräutertee, Kakao und Kaffeekultur.",
    details: "Barista-Kunst, Röstung, Teezeremonie und heiße Schokolade (A1–B2)",
    arabicDescription:
      "المشروبات الساخنة (Heißgetränke): مفردات القهوة (Kaffee)، الإسبريسو (Espresso)، الكابتشينو (Cappuccino)، الشاي (Tee)، شاي الأعشاب (Kräutertee)، الكاكاو والشوكولاتة الساخنة (heiße Schokolade)، مع تقنيات التحضير وماكينات القهوة وثقافة الشاي الفريزية.",
    words: [
      {
        german: "das Heißgetränk, -e",
        arabic: "المشروب الساخن",
        english: "hot beverage, hot drink",
        example: "An nasskalten Herbsttagen wärmt ein dampfendes Heißgetränk von innen auf.",
      },
      {
        german: "der Kaffee, -s",
        arabic: "القهوة",
        english: "coffee",
        example:
          "In Deutschland trinken die Menschen statistisch mehr Kaffee als Bier oder Mineralwasser.",
      },
      {
        german: "der Espresso, -s",
        arabic: "الإسبريسو المركز",
        english: "espresso",
        example:
          "Ein kleiner, starker Espresso nach dem Mittagessen hilft gegen das Nachmittagstief.",
      },
      {
        german: "der Cappuccino, -s",
        arabic: "الكابتشينو مع رغوة الحليب",
        english: "cappuccino",
        example:
          "Der Barista zaubert mit dem Milchschaum ein wunderschönes Herz auf den Cappuccino.",
      },
      {
        german: "der Tee, -s",
        arabic: "الشاي",
        english: "tea",
        example: "In Ostfriesland zelebriert man den Nachmittagstee mit Kluntje-Kandis und Sahne.",
      },
      {
        german: "der Kräutertee, -s",
        arabic: "شاي الأعشاب (زهورات)",
        english: "herbal tea",
        example: "Kamillentee und Pfefferminztee sind bewährte Kräutertees bei Unwohlsein.",
      },
      {
        german: "der Grüntee (Sg.)",
        arabic: "الشاي الأخضر",
        english: "green tea",
        example:
          "Grüntee darf nicht mit kochendem Wasser aufgebrüht werden, da er sonst bitter wird.",
      },
      {
        german: "die heiße Schokolade, -n",
        arabic: "الشوكولاتة الساخنة / الكاكاو الساخن",
        english: "hot chocolate",
        example:
          "Nach einem langen Winterspaziergang freuen sich die Kinder auf heiße Schokolade mit Sahne.",
      },
      {
        german: "der Wasserkocher, -",
        arabic: "غلاية الماء الكهربائية",
        english: "electric kettle",
        example: "Mit dem schnellen Wasserkocher erhitzt man Wasser in weniger als zwei Minuten.",
      },
      {
        german: "die Kaffeemaschine, -n",
        arabic: "ماكينة صنع القهوة",
        english: "coffee machine",
        example: "Die moderne Kaffeemaschine mahlt die Bohnen vor jeder Tasse ganz frisch.",
      },
      {
        german: "aufbrühen (brühte auf, hat aufgebrüht)",
        arabic: "ينقع ويصب عليه الماء المغلي",
        english: "to brew, infuse",
        example:
          "Schwarzen Tee sollte man mit sprudelnd kochendem Wasser aufbrühen und drei Minuten ziehen lassen.",
      },
      {
        german: "dampfend",
        arabic: "متصاعد منه البخار ساخناً",
        english: "steaming",
        example: "Sie hält eine dampfende Tasse Tee mit beiden Händen, um sich zu wärmen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine Tasse Kaffee am Morgen",
        intro: "Einfache Sätze über Kaffee, Tee, Milch und heiße Schokolade (A1).",
        paragraphs: [
          [
            "Jeden Morgen stehe ich auf und gehe in die Küche.",
            "Ich schalte [die Kaffeemaschine, -n|die Kaffeemaschine] ein und koche schwarzen [der Kaffee, -s|Kaffee].",
            "Der Duft von Kaffee weckt mich sofort auf.",
            "Ich trinke meinen Kaffee gern mit ein wenig Milch und Zucker.",
          ],
          [
            "Meine Schwester trinkt keinen Kaffee, sondern lieber heißen [der Tee, -s|Tee].",
            "Sie nimmt den [der Wasserkocher, -|Wasserkocher] und gießt Wasser in ihre Tasse.",
            "Für die Kinder machen wir süße [die heiße Schokolade, -n|heiße Schokolade].",
            "Mit einer warmen Tasse in der Hand fängt der Tag gut an.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Im gemütlichen Café",
        intro: "Kaffeespezialitäten wie Espresso und Cappuccino sowie Teekultur (A2).",
        paragraphs: [
          [
            "Am Samstagnachmittag treffe ich mich oft mit einer Freundin in einem kleinen Café in der Altstadt.",
            "Dort gibt es viele verschiedene Spezialitäten aus der Siebträgermaschine.",
            "Ich bestelle mir meistens einen cremigen [der Cappuccino, -s|Cappuccino] mit feinem Milchschaum.",
            "Meine Freundin bevorzugt nach dem Essen einen starken, ungesüßten [der Espresso, -s|Espresso].",
          ],
          [
            "Wenn es draußen stürmt und schneit, bestellen wir lieber eine [dampfend|dampfende] Kanne Kräutertee.",
            "Der Kellner erklärt uns, wie lange man den [der Kräutertee, -s|Kräutertee] ziehen lassen muss, damit die Aromen zur Geltung kommen.",
            "Auch japanischer [der Grüntee (Sg.)|Grüntee] steht auf der Karte, der besonders schonend zubereitet werden muss.",
            "Ein heißes Getränk wärmt von innen und lädt zu langen Gesprächen ein.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die ostfriesische Teezeremonie und die moderne Kaffeekultur",
        intro: "Vom ostfriesischen Kluntje zur Third-Wave-Kaffeebewegung (B1).",
        paragraphs: [
          [
            "Obwohl Deutschland allgemein als Land der Kaffeetrinker gilt, existiert im Nordwesten eine weltweit einzigartige Teetradition: die ostfriesische Teezeremonie.",
            "Die Ostfriesen trinken pro Kopf mehr [der Tee, -s|Tee] als die Briten.",
            "Bei der 'Teetied' wird ein kräftiger Assam-Tee zelebriert: Zuerst legt man einen großen weißen Kandiszucker, den 'Kluntje', in die Tasse, gießt den heißen Tee darauf und setzt vorsichtig ein Wölkchen ungeschlagene Sahne mit einem Löffel darauf - ohne umzurühren.",
          ],
          [
            "Parallel dazu hat die Kaffeekultur in den urbanen Zentren eine beispiellose Renaissance erlebt.",
            "In handwerklichen Röstereien wird der Fokus auf sortenreine Bohnen, faire Direkthandelsketten und schonende Trommelröstung gelegt.",
            "Ausgebildete Baristas wissen genau, bei welchem Mahlgrad und Wasserdruck die [die Kaffeemaschine, -n|Kaffeemaschine] die feinsten Fruchtnoten und die perfekte Crema extrahiert.",
          ],
          [
            "Gleichzeitig achten Teekenner penibel darauf, empfindliche Sorten wie [der Grüntee (Sg.)|Grüntee] nicht mit kochendem Wasser zu übergießen, sondern das Wasser vor dem [aufbrühen (brühte auf, hat aufgebrüht)|Aufbrühen] auf etwa 70 bis 80 Grad abkühlen zu lassen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Extraktionskinetik, Koffein-Pharmakologie und Polyphenol-Stabilität",
        intro: "Thermodynamische Extraktionsparameter, Crema-Physik und Katechin-Oxidation (B2).",
        paragraphs: [
          [
            "Die sensorische Qualität von [das Heißgetränk, -e|Heißgetränken] wie Kaffee oder Tee wird primär durch die Kinetik der Fest-Flüssig-Extraktion kontrolliert.",
            "Bei der Zubereitung eines [der Espresso, -s|Espresso] presst die Pumpe Wasser bei 9 bar und 92 Grad Celsius durch das komprimierte Kaffeemehlbett.",
            "Hierbei bilden emulgierte Kaffeeöle und gasförmiges Kohlendioxid eine kolloidale Schaummatrix - die sogenannte Crema -, welche flüchtige Pyrazine und aromatische Terpene vor vorzeitiger Evaporation schützt.",
          ],
          [
            "Im biochemischen Kontext fungiert Koffein (1,3,7-Trimethylxanthin) als kompetitiver Antagonist an zentralen Adenosin-A1- und A2A-Rezeptoren, wodurch die Müdigkeitssignaltransduktion temporär inhibiert wird.",
          ],
          [
            "Bei der Teezubereitung wiederum variiert die Freisetzung von Polyphenolen, insbesondere Epigallocatechingallat (EGCG) im [der Grüntee (Sg.)|Grüntee], drastisch mit Wassertemperatur und Ziehdauer.",
            "Zu heißes Wasser denaturiert hitzelabile Antioxidantien und forciert die Freisetzung bitterer Gerbstoffe, weshalb das kontrollierte [aufbrühen (brühte auf, hat aufgebrüht)|Aufbrühen] den Unterschied zwischen bitterer Adstringenz und samtiger Umami-Süße markiert.",
          ],
        ],
      },
    },
  },
  alkoholische_getraenke: {
    description:
      "Bier, Pils, Weizenbier, Wein, Sekt, Schnaps, Hopfen und das deutsche Reinheitsgebot.",
    details: "Brautradition, Rebsorten, Winzerhandwerk und Trinkkultur (A1–B2)",
    arabicDescription:
      "المشروبات الكحولية (Alkoholische Getränke): مفردات البيرة (Bier)، البيلس (Pils)، بيرة القمح (Weizenbier)، النبيذ (Wein)، النبيذ الفوار (Sekt)، المشروبات المقطرة (Schnaps)، وعشبة الجنجل (Hopfen)، مع قانون نقاء البيرة الألماني (Reinheitsgebot) لعام 1516 وثقافة صناعة النبيذ.",
    words: [
      {
        german: "das alkoholische Getränk, -e",
        arabic: "المشروب الكحولي",
        english: "alcoholic beverage",
        example:
          "Alkoholische Getränke sollten stets mit Maß und Verantwortungsbewusstsein genossen werden.",
      },
      {
        german: "das Bier, -e",
        arabic: "البيرة / الجعة",
        english: "beer",
        example: "Bier gilt in Bayern traditionell fast als flüssiges Grundnahrungsmittel.",
      },
      {
        german: "das Pils (Sg.)",
        arabic: "بيرة البيلس الخفيفة المرة المذاق",
        english: "pilsner beer",
        example: "Das herbe Pils ist das meistgetrunkene Bier in ganz Deutschland.",
      },
      {
        german: "das Weizenbier, -e",
        arabic: "بيرة القمح البافارية (الفايتسن)",
        english: "wheat beer, weissbier",
        example:
          "Ein naturtrübes Weizenbier schenkt man vorsichtig in ein hohes, geschwungenes Glas ein.",
      },
      {
        german: "der Wein, -e",
        arabic: "النبيذ",
        english: "wine",
        example:
          "Entlang des Rheins und der Mosel wachsen einige der besten Riesling-Weine der Welt.",
      },
      {
        german: "der Weißwein, -e",
        arabic: "النبيذ الأبيض",
        english: "white wine",
        example:
          "Kühler, fruchtiger Weißwein passt hervorragend zu frischem Fisch und hellem Geflügel.",
      },
      {
        german: "der Rotwein, -e",
        arabic: "النبيذ الأحمر",
        english: "red wine",
        example:
          "Ein schwerer Rotwein wird bei Zimmertemperatur serviert und begleitet dunkles Fleisch.",
      },
      {
        german: "der Sekt, -e",
        arabic: "النبيذ الفوار الألماني (الشمبانيا الألمانية)",
        english: "sparkling wine",
        example: "An Silvester stoßen wir um Mitternacht mit einem Glas prickelndem Sekt an.",
      },
      {
        german: "das Reinheitsgebot, -e",
        arabic: "قانون نقاء البيرة الألماني الصادر عام 1516",
        english: "Purity Law (for beer)",
        example:
          "Das deutsche Reinheitsgebot von 1516 erlaubt nur Wasser, Gerste, Hopfen und Hefe.",
      },
      {
        german: "der Hopfen (Sg.)",
        arabic: "عشبة الجنجل (حشيشة الدينار المنكهة للبيرة)",
        english: "hops",
        example:
          "Der Hopfen verleiht dem Bier seine charakteristische Bitterkeit und konserviert es natürlich.",
      },
      {
        german: "anstoßen (stieß an, hat angestoßen)",
        arabic: "يقرع الكؤوس نخب الصحة والاحتفال",
        english: "to clink glasses, to toast",
        example: "Auf das Wohl des Geburtstagskindes wollen wir alle gemeinsam anstoßen!",
      },
      {
        german: "die Brauerei, -en",
        arabic: "مصنع تخمير البيرة",
        english: "brewery",
        example: "Die historische Brauerei braut seit über fünfhundert Jahren traditionelles Bier.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein Fest mit Freunden",
        intro: "Einfache Sätze über Bier, Wein, Anstoßen und Feiern (A1).",
        paragraphs: [
          [
            "Heute feiert mein bester Freund seinen Geburtstag.",
            "Viele Gäste kommen am Abend in den Garten.",
            "Auf dem Tisch stehen kalte Flaschen mit [das Bier, -e|Bier] und fruchtigem [der Wein, -e|Wein].",
            "Wir heben unsere Gläser und wollen zusammen auf die Gesundheit [anstoßen (stieß an, hat angestoßen)|anstoßen].",
          ],
          [
            "Viele Erwachsene trinken gern ein kühles Glas [das Pils (Sg.)|Pils].",
            "Mein Vater mag lieber ein Glas [der Weißwein, -e|Weißwein] mit Mineralwasser als Schorle.",
            "Zur Feier des Tages öffnen wir um Mitternacht eine Flasche [der Sekt, -e|Sekt].",
            "Es ist ein fröhlicher Abend voller Musik und guter Laune.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Biergärten und Weinfeste in Deutschland",
        intro: "Bayerische Biergartenkultur, Weizenbier und Weinanbaugebiete (A2).",
        paragraphs: [
          [
            "Im Sommer besuchen viele Menschen in Bayern traditionelle Biergärten unter großen Kastanienbäumen.",
            "Dort bestellt man sich typischerweise ein bernsteinfarbenes [das Weizenbier, -e|Weizenbier] mit dichter weißer Schaumkrone.",
            "Man darf sogar sein eigenes Essen mitbringen, solange man die Getränke vor Ort kauft.",
            "Jede regionale [die Brauerei, -en|Brauerei] braut ihr Bier nach ihren eigenen alten Rezepten.",
          ],
          [
            "In Rheinland-Pfalz und Baden feiert man im Herbst bunte Weinfeste in malerischen Dörfern.",
            "Dort probieren die Besucher trockenen Riesling oder samtigen [der Rotwein, -e|Rotwein] direkt beim Winzer.",
            "Wer keinen Alkohol trinken möchte, wählt leckere alkoholfreie Varianten oder Apfelsaft.",
            "Die Feste verbinden regionale Traditionen mit geselliger Gastfreundschaft.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Reinheitsgebot und die traditionsreiche deutsche Braukunst",
        intro:
          "Das Reinheitsgebot von 1516, regionale Bierstile und die Spitzenweine der Steillagen (B1).",
        paragraphs: [
          [
            "Deutschland ist weltbekannt für seine Braukunst, deren Identität maßgeblich durch [das Reinheitsgebot, -e|das Reinheitsgebot] von 1516 geprägt wurde.",
            "Diese historische Verordnung gilt als eines der ältesten noch gültigen Verbraucherschutzgesetze weltweit und besagt, dass zur Bierbereitung ausschließlich Gerstenmalz, [der Hopfen (Sg.)|Hopfen], Wasser und Hefe verwendet werden dürfen.",
            "Die Vielfalt, die aus diesen vier schlichten Ingredienzen entsteht, reicht vom hopfenbetonten, schlanken [das Pils (Sg.)|Pils] im Norden bis zum fruchtigen, obergärigen [das Weizenbier, -e|Weizenbier] im Süden.",
          ],
          [
            "Parallel dazu besitzt Deutschland eine exzellente Weinbautradition, die insbesondere in den Steillagen an Mosel, Rhein und Main von extremem handwerklichem Können zeugt.",
            "Der deutsche Riesling gilt unter Sommeliers weltweit als Maßstab für mineralische Eleganz und langlebige Säurestruktur.",
          ],
          [
            "Auch der deutsche [der Sekt, -e|Sekt], nach traditioneller Flaschengärung hergestellt, hat in den letzten Jahren enorm an Prestige gewonnen.",
            "Das bewusste Genießen hochwertiger Getränke ist fester Bestandteil der Festkultur, wenn man feierlich die Gläser erhebt und anstößt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Zymologie, Terroir-Chemie und Hopfenbitterstoff-Isomerisierung",
        intro:
          "Biochemie der Fermentation, Humulon-Isomerisierung, Hefestämme und Phenolstrukturen (B2).",
        paragraphs: [
          [
            "Die Zymologie des Brauprozesses illustriert die meisterhafte Beherrschung biochemischer Umwandlungen auf industriellem und handwerklichem Niveau.",
            "Beim Kochen der Würze erfahren die im [der Hopfen (Sg.)|Hopfen] enthaltenen Alpha-Säuren (Humulone) eine thermische Isomerisierung zu Iso-Alpha-Säuren, die dem Bier seine messbare Bittereinheit (IBU) verleihen und grampositive Bakterien unterdrücken.",
            "Die Differenzierung zwischen obergärigen Hefen (Saccharomyces cerevisiae) und untergärigen Stämmen (Saccharomyces pastorianus) bestimmt dabei maßgeblich das Aromaprofil: Während Weizenbiere durch 4-Vinylguajacol und Isoamylacetat charakteristische Gewürznelken- und Bananennoten ausbilden, verlangt das untergärige [das Pils (Sg.)|Pils] nach kühler Vergärung und reiner Malz-Hopfen-Klarheit.",
          ],
          [
            "Im Weinbau wiederum reflektiert der Gehalt an Monoterpenen und Methoxypyrazinen das mikroklimatische Terroir der Schieferterrassen.",
            "Bei der Schaumweinherstellung für hochklassigen [der Sekt, -e|Sekt] induziert die monatelange Autolyse der Hefe in der Flasche die Freisetzung von Aminosäuren und Mannoproteinen, was für die feinperlige Mousseux und toastige Briochenoten bürgt.",
          ],
          [
            "Dieses feine Zusammenspiel agronomischer Präzision und mikrobiologischer Kontrolle erhebt das traditionelle Handwerk zur angewandten Naturwissenschaft.",
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
    if (!batch3Data[t.id]) {
      continue;
    }

    const src = batch3Data[t.id];
    t.description = src.description;
    t.details = src.details;
    t.arabicDescription = src.arabicDescription;
    t.words = src.words;
    t.stories = src.stories;
    console.log("Applied batch 3 to topic:", t.id, "(", t.title, ") -> words:", t.words.length);
  }
}

const res = vocabularyCollectionSchema.safeParse(et);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(etPath, JSON.stringify(et, null, 2) + "\n", "utf8");
console.log("Batch 3 successfully saved to essen-und-trinken.json!");
