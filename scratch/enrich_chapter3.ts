import fs from "fs";
import path from "path";

export const chapter3TopicsEnrichment = [
  {
    id: "obst_und_gemuese",
    title: "Obst und Gemüse",
    description:
      "Frische Vitamine und pflanzliche Lebensmittel: Sorten, Marktbesuch und gesunde Ernährung.",
    details:
      "In der deutschen Sprache wird 'das Obst' fast ausschließlich als unzählbares Kollektivnomen im Singular verwendet (man sagt: 'Ich esse viel Obst', nicht 'viele Obste'). Bei 'das Gemüse' gilt das Gleiche. Frische Produkte kauft man traditionell auf dem Wochenmarkt ('der Wochenmarkt') oder in der Obst- und Gemüseabteilung des Supermarktes. Wichtige Ausdrücke beim Einkaufen sind: 'Ein Kilo Äpfel, bitte', 'Haben Sie reife Bananen?' und 'Ist das Bio-Gemüse?'.",
    arabicDescription:
      "الفواكه والخضروات هي ركيزة الغذاء الصحي والتسوق الأسبوعي في ألمانيا. يتناول هذا الدرس تصنيفات الفواكه والخضار الشائعة، مع التركيز على أن كلمتي (das Obst) و(das Gemüse) تُستخدمان كاسم جمع غير معدود في المفرد، بالإضافة إلى عبارات التسوق في أسواق المزارعين الأسبوعية والمتاجر.",
    words: [
      {
        german: "der Apfel, -̈",
        arabic: "التفاح",
        english: "apple",
        example: "Ein knackiger roter Apfel ist der perfekte gesunde Snack für die Pause.",
      },
      {
        german: "die Banane, -n",
        arabic: "الموز",
        english: "banana",
        example: "Reife Bananen enthalten viel Kalium und schmecken süß im Müsli.",
      },
      {
        german: "die Tomate, -n",
        arabic: "الطماطم / البندورة",
        english: "tomato",
        example: "Sonnengereifte Tomaten verleihen dem italienischen Salat ein herrliches Aroma.",
      },
      {
        german: "die Kartoffel, -n",
        arabic: "البطاطس / البطاطا",
        english: "potato",
        example:
          "Die Kartoffel gilt in Mitteleuropa als eines der wichtigsten Grundnahrungsmittel.",
      },
      {
        german: "die Zwiebel, -n",
        arabic: "البصل",
        english: "onion",
        example: "Beim Schneiden der scharfen Zwiebel tränen mir fast jedes Mal die Augen.",
      },
      {
        german: "die Karotte, -n",
        arabic: "الجزر",
        english: "carrot",
        example: "Frische Karotten enthalten wertvolles Beta-Carotin für die Augen.",
      },
      {
        german: "die Gurke, -n",
        arabic: "الخيار",
        english: "cucumber",
        example: "Eine kühle Gurke ist im Hochsommer besonders erfrischend und kalorienarm.",
      },
      {
        german: "der Salat, -e",
        arabic: "الخس / السلطة",
        english: "lettuce, salad",
        example: "Wir waschen den grünen Salat sorgfältig und bereiten ein Essig-Öl-Dressing zu.",
      },
      {
        german: "die Erdbeere, -n",
        arabic: "الفراولة",
        english: "strawberry",
        example: "Im Juni pflücken wir süße Erdbeeren direkt auf dem Feld beim Bauern.",
      },
      {
        german: "die Orange, -n",
        arabic: "البرتقال",
        english: "orange",
        example: "Aus frisch gepressten Orangen bereite ich einen vitaminreichen Saft zu.",
      },
      {
        german: "die Zitrone, -n",
        arabic: "الليمون",
        english: "lemon",
        example: "Ein paar Spritzer frischer Zitrone runden den Geschmack des Tees ab.",
      },
      {
        german: "der Knoblauch",
        arabic: "الثوم",
        english: "garlic",
        example: "Zwei gehackte Zehen Knoblauch verleihen der Pastasauce eine würzige Note.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Einkaufen auf dem Wochenmarkt",
        intro: "Einfache Sätze über den Kauf von frischem Obst und Gemüse (A1).",
        paragraphs: [
          [
            "Jeden Samstagmorgen gehe ich zum Wochenmarkt in der Stadt.",
            "Dort kaufe ich frisches Obst und gesundes Gemüse.",
            "Ich möchte zwei Kilo rote [der Apfel, -̈|Äpfel] und vier gelbe [die Banane, -n|Bananen] kaufen.",
            "Die Früchte sind frisch, süß und schmecken der ganzen Familie.",
          ],
          [
            "Beim Gemüsestand nehme ich ein Kilo feste [die Kartoffel, -n|Kartoffeln] und drei [die Zwiebel, -n|Zwiebeln].",
            "Ich kaufe auch eine lange grüne [die Gurke, -n|Gurke] und saftige [die Tomate, -n|Tomaten] für einen Salat.",
            "Die Verkäuferin gibt mir noch eine gelbe [die Zitrone, -n|Zitrone] dazu.",
            "„Vielen Dank und ein schönes Wochenende!“, sagt die Verkäuferin freundlich.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Gesunde Ernährung und ein bunter Salat",
        intro: "Zubereitung von frischem Gemüse und Obst im Alltag (A2).",
        paragraphs: [
          [
            "Wer sich fit und vital fühlen möchte, sollte täglich frisches Obst und buntes Gemüse essen.",
            "Heute bereite ich für meine Familie eine große Schüssel gemischten [der Salat, -e|Salat] zu.",
            "Zuerst wasche ich die roten [die Tomate, -n|Tomaten], schäle eine knackige [die Karotte, -n|Karotte] und schneide die [die Gurke, -n|Gurke] in dünne Scheiben.",
            "Für das Dressing hacke ich eine kleine [die Zwiebel, -n|Zwiebel] und presse eine halbe [die Zitrone, -n|Zitrone] aus.",
          ],
          [
            "„Riecht das gut! Kochst du heute auch noch warme Kartoffelsuppe?“, fragt mein Sohn neugierig.",
            "„Ja, im Topf kochen schon [die Kartoffel, -n|Kartoffeln] mit etwas frischem [der Knoblauch|Knoblauch]“, antworte ich lächelnd.",
            "Zum Nachtisch gibt es für alle eine Schale mit süßen [die Erdbeere, -n|Erdbeeren] und Stücken von einer saftigen [die Orange, -n|Orange].",
            "Gesund zu kochen macht Spaß und bringt Freude an den Esstisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Regionale Saisonalität und ernährungsphysiologische Vielfalt",
        intro: "Vorteile von regionalem Anbau, Wochenmärkten und bewusster Ernährung (B1).",
        paragraphs: [
          [
            "Das Bewusstsein für gesunde und nachhaltige Ernährung hat in den vergangenen Jahren stetig zugenommen.",
            "Immer mehr Verbraucher ziehen saisonale Erzeugnisse aus der Region anonymen Flugimporten vor, um lange Transportwege zu vermeiden.",
            "Während die heimische [die Kartoffel, -n|Kartoffel] und aromatische [die Zwiebel, -n|Zwiebeln] das ganze Jahr über lagerfähig sind, freuen sich Feinschmecker im Frühsommer auf erntefrische [die Erdbeere, -n|Erdbeeren].",
            "Ein morgendlicher Obstsalat mit einem vitaminreichen [der Apfel, -̈|Apfel], einer reifen [die Banane, -n|Banane] und sonnigen [die Orange, -n|Orangen] liefert ausreichend Energie für den Tag.",
          ],
          [
            "In der modernen Küche darf auch der feine Einsatz von Gewürzen wie aromatischem [der Knoblauch|Knoblauch] nicht fehlen, der sowohl Geschmack als auch das Herz-Kreislauf-System fördert.",
            "Eine Kombination aus knackigem [der Salat, -e|Salat], fruchtigen [die Tomate, -n|Tomaten] und geraspelten [die Karotte, -n|Karotten] bildet die perfekte Beilage zu jedem Gericht.",
            "Mit einem Schuss kaltgepresstem Olivenöl und dem säuerlichen Saft einer [die Zitrone, -n|Zitrone] entfalten die fettlöslichen Vitamine ihre optimale Wirkung.",
            "So wird bewusster Genuss zu einer Selbstverständlichkeit, die Körper und Geist gleichermaßen guttut.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Agrarökologie, Phytochemie und zeitgenössische Ernährungskultur",
        intro: "Wissenschaftliche und agrarpolitische Analyse pflanzlicher Nahrungssysteme (B2).",
        paragraphs: [
          [
            "Die bioaktiven Substanzen in pflanzlichen Lebensmitteln stehen im Fokus moderner ernährungswissenschaftlicher und präventivmedizinischer Forschung.",
            "Sekundäre Pflanzenstoffe, wie sie hochkonzentriert in der Schale vom heimischen [der Apfel, -̈|Apfel] oder im Lycopin der [die Tomate, -n|Tomate] vorkommen, wirken als potente Antioxidantien gegen zellulären Stress.",
            "Gleichzeitig belegen agrarökologische Studien, dass die Renaissance robuster Sorten von [die Kartoffel, -n|Kartoffel] und stickstoffbindenden Gewächsen die Biodiversität ausgelaugter Böden regenerieren kann.",
            "Klassische Allium-Arten wie [die Zwiebel, -n|Zwiebel] und schwefelhaltiger [der Knoblauch|Knoblauch] fungieren dabei nicht bloß als kulinarische Geschmacksverstärker, sondern entfalten nachweisbare antimikrobielle Eigenschaften.",
          ],
          [
            "Der gesellschaftliche Diskurs über Lebensmittelverschwendung ('Food Waste') und CO2-Fußabdrücke zwingt Großhandel und Konsumenten zum Umdenken weg von permanenter Verfügbarkeit tropischer Güter wie der [die Banane, -n|Banane].",
            "Stattdessen gewinnen regionale Erzeugermärkte an Relevanz, wo bodenständige Wurzelgemüse wie die [die Karotte, -n|Karotte] oder feldfrischer [der Salat, -e|Salat] kurze Wertschöpfungsketten symbolisieren.",
            "Die saisonale Hochphase delikater Beeren wie der [die Erdbeere, -n|Erdbeere] verdeutlicht das wachsende Verlangen nach authentischen, unpasteurisierten Geschmackserlebnissen jenseits industrieller Normierung.",
          ],
        ],
      },
    },
  },
  {
    id: "fleisch_und_fisch",
    title: "Fleisch und Fisch",
    description:
      "Tierische Proteinquellen: Fleischsorten, Meeresfrüchte, Zubereitungsarten und Qualitätsmerkmale.",
    details:
      "In Deutschland hat der Konsum von Fleisch und Wurstwaren eine lange Tradition (man denke an die unzähligen regionalen Wurstsorten wie Thüringer Rostbratwurst, Nürnberger Rostbratwürstchen oder Weißwurst). Gleichzeitig gewinnt das Thema Tierwohl ('das Tierwohl'), Bio-Qualität ('Bio-Fleisch') und nachhaltige Fischerei ('MSC-Siegel') immens an Bedeutung. Beim Metzger ('die Metzgerei') bestellt man nach Gewicht oder Stückzahl: 'Ich hätte gern 300 Gramm Rinderhackfleisch' oder 'Zwei Lachsfilets bitte'.",
    arabicDescription:
      "اللحوم والأسماك هي المصادر الأساسية للبروتينات الحيوانية في المطبخ الألماني التقليدي والحديث. يستعرض هذا القسم أنواع اللحوم المختلفة والدواجن والأسماك والمأكولات البحرية، إلى جانب مفردات الجودة والتسوق عند القصاب (المجزرة) والطهي الصحي.",
    words: [
      {
        german: "das Fleisch",
        arabic: "اللحم",
        english: "meat",
        example:
          "Wir achten beim Einkaufen darauf, nur Fleisch aus artgerechter Tierhaltung zu kaufen.",
      },
      {
        german: "das Hähnchen, -",
        arabic: "الدجاج",
        english: "chicken",
        example: "Das knusprig gegrillte Hähnchen mit Rosmarin schmeckt der ganzen Familie.",
      },
      {
        german: "das Rindfleisch",
        arabic: "لحم البقر",
        english: "beef",
        example: "Zartes Rindfleisch eignet sich hervorragend für Schmorgerichte und Gulasch.",
      },
      {
        german: "der Fisch, -e",
        arabic: "السمك",
        english: "fish",
        example: "Mindestens einmal in der Woche steht frischer Fisch auf unserem Speiseplan.",
      },
      {
        german: "die Wurst, -̈e",
        arabic: "النقانق / السجق",
        english: "sausage",
        example: "In Deutschland gibt es über tausend verschiedene Sorten traditioneller Wurst.",
      },
      {
        german: "das Schweinefleisch",
        arabic: "لحم الخنزير",
        english: "pork",
        example:
          "Aus magerem Schweinefleisch wird in vielen Regionen traditionelles Schnitzel zubereitet.",
      },
      {
        german: "das Lammfleisch",
        arabic: "لحم الضأن / لحم الخروف",
        english: "lamb",
        example:
          "Zartes Lammfleisch wird gern mit frischen mediterranen Kräutern und Knoblauch gebraten.",
      },
      {
        german: "das Hackfleisch",
        arabic: "اللحم المفروم",
        english: "minced meat, ground meat",
        example: "Für die Lasagne und die Frikadellen benötige ich frisches Hackfleisch.",
      },
      {
        german: "der Lachs, -e",
        arabic: "سمك السلمون",
        english: "salmon",
        example: "Gebratener Lachs liefert gesunde Omega-3-Fettsäuren für Herz und Gehirn.",
      },
      {
        german: "die Garnele, -n",
        arabic: "الجمبري / الروبيان",
        english: "shrimp, prawn",
        example: "Die knusprigen Garnelen werden kurz in Olivenöl mit Peperoni angebraten.",
      },
      {
        german: "das Steak, -s",
        arabic: "شريحة اللحم / الستيك",
        english: "steak",
        example:
          "Er bestellt im Restaurant ein saftiges Steak mit Kräuterbutter und Ofenkartoffel.",
      },
      {
        german: "der Schinken, -",
        arabic: "لحم الفخذ المجفف أو المدخن",
        english: "ham",
        example: "Auf das frische Vollkornbrot lege ich eine dünne Scheibe geräucherten Schinken.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Beim Metzger und Fischhändler",
        intro: "Einfache Sätze über Fleisch- und Fischsorten beim Einkaufen (A1).",
        paragraphs: [
          [
            "Heute koche ich ein leckeres Mittagessen und gehe einkaufen.",
            "Zuerst gehe ich zur Metzgerei in der Hauptstraße.",
            "Ich kaufe frisches [das Fleisch|Fleisch] für das Wochenende.",
            "Für heute nehme ich ein ganzes [das Hähnchen, -|Hähnchen] und 500 Gramm [das Hackfleisch|Hackfleisch].",
          ],
          [
            "Der Metzger hat auch frische [die Wurst, -̈e|Wurst] und feinen [der Schinken, -|Schinken].",
            "Danach gehe ich zum Fischgeschäft am Marktplatz.",
            "Dort kaufe ich frischen [der Fisch, -e|Fisch] und ein Stück [der Lachs, -e|Lachs].",
            "Der Fischmann sagt: „Der Lachs ist heute besonders frisch und zart!“",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein Grillfest im Sommergarten",
        intro: "Zubereitung von Fleisch, Würstchen und Fisch auf dem Gartengrill (A2).",
        paragraphs: [
          [
            "Im Sommer laden wir unsere Nachbarn zu einem gemütlichen Grillnachmittag in unseren Garten ein.",
            "Jeder bringt etwas mit: Auf einer großen Platte liegt gut gewürztes [das Fleisch|Fleisch] für den Rost.",
            "Die Kinder freuen sich besonders auf die knusprige [die Wurst, -̈e|Wurst] im Brötchen mit Senf.",
            "Für meinen Onkel legen wir ein saftiges [das Steak, -s|Steak] aus zartem [das Rindfleisch|Rindfleisch] auf die heiße Glut.",
          ],
          [
            "„Gibt es heute auch etwas für Fischliebhaber?“, fragt unsere Nachbarin gut gelaunt.",
            "„Natürlich, wir grillen frischen [der Lachs, -e|Lachs] in Alufolie mit Kräutern und Zitrone!“, antwortet mein Vater stolz.",
            "Daneben braten marinierte Spieße mit knackigen [die Garnele, -n|Garnelen] und Gemüsestücken.",
            "Gemeinsam im Garten zu essen und das köstliche Essen zu genießen, ist immer ein wunderbares Erlebnis.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Qualitätsbewusstsein und handwerkliche Metzgertradition",
        intro:
          "Verantwortungsvoller Fleischkonsum, Frischemerkmale und nachhaltige Fischerei (B1).",
        paragraphs: [
          [
            "Der Stellenwert von tierischen Lebensmitteln hat in unserer Gesellschaft eine spürbare Differenzierung erfahren.",
            "Statt täglich billiges [das Fleisch|Fleisch] aus Massentierhaltung zu konsumieren, entscheiden sich immer mehr Haushalte für den Grundsatz: weniger, dafür erstklassige Qualität.",
            "Beim Einkauf an der regionalen Fleischtheke fragen Kunden gezielt nach der Herkunft von [das Rindfleisch|Rindfleisch], zartem [das Lammfleisch|Lammfleisch] oder feinem Geflügel wie dem Freiland-[das Hähnchen, -|Hähnchen].",
            "Traditionelle Metzger überzeugen dabei mit handwerklich hergestelltem [der Schinken, -|Schinken] und transparenter Verarbeitung von [das Hackfleisch|Hackfleisch].",
          ],
          [
            "Auch beim Verzehr von Wasserbewohnern spielt ökologische Verantwortung eine entscheidende Rolle.",
            "Wer frischen [der Fisch, -e|Fisch] kauft, achtet vermehrt auf anerkannte Gütesiegel, um die Überfischung der Meere nicht zu unterstützen.",
            "Wild gefangener [der Lachs, -e|Lachs] aus zertifizierten Beständen oder nachhaltig gezüchtete [die Garnele, -n|Garnelen] bieten unbedenklichen Genuss mit hohem Nährwert.",
            "Gekonnt auf den Punkt gegrillt wird ein edles [das Steak, -s|Steak] zu einem Festmahl, das man mit Respekt und Muße genießt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Karnivorie im Spannungsfeld von Bioethik und Gourmetkultur",
        intro:
          "Ethische, ökologische und sensorische Reflexion über Fleisch- und Fischkonsum (B2).",
        paragraphs: [
          [
            "Die Kontroverse um den Fleischkonsum berührt fundamentale ethische Fragestellungen moderner Konsumgesellschaften zwischen kulinarischem Kulturgut und planetaren Belastungsgrenzen.",
            "Während die industrielle Massenproduktion von [das Schweinefleisch|Schweinefleisch] und Geflügel erhebliche ökologische Folgeschäden zeitigt, etabliert sich eine Gegenbewegung hin zur 'Nose-to-Tail'-Philosophie.",
            "Dabei wird nicht mehr nur das edle [das Steak, -s|Steak] aus bestem [das Rindfleisch|Rindfleisch] isoliert nachgefragt, sondern das gesamte Schlachttier mit handwerklicher Sorgfalt verwertet.",
            "Echtes handwerkliches Können spiegelt sich in der traditionellen Reifung von aromatischem [der Schinken, -|Schinken] und der sortenreinen Würzung traditioneller [die Wurst, -̈e|Wurst] wider.",
          ],
          [
            "Parallel dazu erfordert die dramatische Dezimierung mariner Ökosysteme ein rigoroses Umdenken beim Bezug von Meeresfrüchten und Delikatessen.",
            "Verbraucher fordern lückenlose Rückverfolgbarkeit, wenn Meeresdelikatessen wie [die Garnele, -n|Garnelen] oder anspruchsvoller Raubfisch wie der atlantische [der Lachs, -e|Lachs] auf den Tisch kommen.",
            "Die gehobene Gastronomie reagiert auf dieses veränderte Wertegefüge, indem sie [der Fisch, -e|Fisch] und Fleisch als kostbare, bedacht zu zelebrierende Akzente statt als selbstverständliche Massenware inszeniert.",
          ],
        ],
      },
    },
  },
  {
    id: "getraenke",
    title: "Getränke",
    description:
      "Flüssige Erfrischungen und Genussmittel: Heißgetränke, Kaltgetränke, Säfte und Trinkkultur.",
    details:
      "In deutschsprachigen Ländern ist Leitungswasser von herausragender Trinkwasserqualität und wird oft mit Kohlensäure versetzt ('Leitungswasser', 'Sprudelwasser' oder 'Wasser mit Kohlensäure'). Bei Bestellungen fragt die Bedienung meist: 'Mit oder ohne Kohlensäure?' (bzw. 'Spritzig / Medium / Still'). Deutschland und Österreich haben zudem eine weltberühmte Kaffeehauskultur ('die Kaffeepause', 'Kaffee und Kuchen') sowie jahrhundertealte Bier- und Weinbautraditionen.",
    arabicDescription:
      "المشروبات والمرطبات اليومية في الثقافة الألمانية. يغطي هذا الدرس المشروبات الساخنة والباردة، وأنواع المياه المعدنية (المياه الغازية والعادية ذات الشعبية الكبيرة في ألمانيا)، وعصائر الفواكه الطبيعية، وثقافة شرب القهوة والضيافة.",
    words: [
      {
        german: "das Wasser",
        arabic: "الماء",
        english: "water",
        example:
          "Ich trinke jeden Tag mindestens zwei Liter frisches Wasser, um hydriert zu bleiben.",
      },
      {
        german: "der Kaffee, -s",
        arabic: "القهوة",
        english: "coffee",
        example: "Ein frisch gebrühter schwarzer Kaffee weckt meine Lebensgeister am Morgen.",
      },
      {
        german: "der Tee, -s",
        arabic: "الشاي",
        english: "tea",
        example:
          "An kühlen Herbstabenden trinke ich gern eine Tasse beruhigenden Kräutertee mit Honig.",
      },
      {
        german: "der Saft, -̈e",
        arabic: "العصير",
        english: "juice",
        example: "Frisch gepresster Saft ohne Zuckerzusatz schmeckt herrlich fruchtig.",
      },
      {
        german: "die Milch",
        arabic: "الحليب / اللبن",
        english: "milk",
        example: "Ein Schuss kalte Milch rundet den starken Kaffee wunderbar ab.",
      },
      {
        german: "das Mineralwasser",
        arabic: "المياه المعدنية",
        english: "mineral water",
        example: "In Deutschland bevorzugen viele Menschen kühles Mineralwasser mit viel Sprudel.",
      },
      {
        german: "die Limonade, -n",
        arabic: "عصير الليمون المكربن / الصودا",
        english: "lemonade, soda",
        example: "Eine eisgekühlte Limonade mit Zitronengeschmack löscht den Durst im Sommer.",
      },
      {
        german: "das Bier, -e",
        arabic: "البيرة",
        english: "beer",
        example: "Das deutsche Reinheitsgebot für Bier geht auf das Jahr 1516 zurück.",
      },
      {
        german: "der Wein, -e",
        arabic: "النبيذ",
        english: "wine",
        example: "Ein trockener weißer Wein passt hervorragend zu leichten Fischgerichten.",
      },
      {
        german: "der Orangensaft, -̈e",
        arabic: "عصير البرتقال",
        english: "orange juice",
        example:
          "Zum Sonntagsfrühstück gehört immer ein großes Glas frisch gepresster Orangensaft.",
      },
      {
        german: "der Apfelsaft, -̈e",
        arabic: "عصير التفاح",
        english: "apple juice",
        example:
          "Eine erfrischende Apfelschorle besteht aus Apfelsaft und prickelndem Mineralwasser.",
      },
      {
        german: "die heiße Schokolade",
        arabic: "الشوكولاتة الساخنة",
        english: "hot chocolate",
        example: "Nach dem Winterspaziergang wärmt eine süße heiße Schokolade mit Sahne von innen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Durst löschen und Getränke bestellen",
        intro: "Einfache Wörter für beliebte Heiß- und Kaltgetränke im Alltag (A1).",
        paragraphs: [
          [
            "Genug trinken ist wichtig für die Gesundheit.",
            "Am Morgen trinke ich gern eine Tasse heißen [der Kaffee, -s|Kaffee] mit etwas [die Milch|Milch].",
            "Mein Freund trinkt lieber eine Tasse grünen [der Tee, -s|Tee] mit Zitrone.",
            "Auf dem Tisch steht auch eine Flasche kaltes [das Wasser|Wasser] für alle.",
          ],
          [
            "Im Café frage ich die Kellnerin: „Haben Sie frischen [der Saft, -̈e|Saft]?“",
            "Sie antwortet freundlich: „Ja, wir haben leckeren [der Orangensaft, -̈e|Orangensaft] und naturtrüben [der Apfelsaft, -̈e|Apfelsaft].“",
            "Für die Kinder bestellen wir eine fruchtige [die Limonade, -n|Limonade] und eine süße [die heiße Schokolade|heiße Schokolade].",
            "Alle Getränke schmecken hervorragend und erfrischen uns sehr.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Typische Getränke in Deutschland und der Schorlen-Klassiker",
        intro: "Getränkegewohnheiten im Restaurant und die beliebte Apfelschorle (A2).",
        paragraphs: [
          [
            "Wer in Deutschland ein Restaurant besucht, wird bei der Bestellung von Wasser meistens gefragt: „Mit oder ohne Kohlensäure?“",
            "Viele Deutsche lieben prickelndes [das Mineralwasser|Mineralwasser], während andere stilles [das Wasser|Wasser] bevorzugen.",
            "Ein echter deutscher Klassiker ist die Apfelschorle, bei der frischer [der Apfelsaft, -̈e|Apfelsaft] mit Mineralwasser gemischt wird.",
            "Dieser Mix schmeckt weniger süß als reine [die Limonade, -n|Limonade] und ist der ideale Durstlöscher nach dem Sport.",
          ],
          [
            "Nachmittags um fünfzehn Uhr gibt es in vielen Familien die traditionelle Kaffeestunde.",
            "Man setzt sich zusammen, trinkt aromatischen [der Kaffee, -s|Kaffee] oder beruhigenden [der Tee, -s|Tee] und isst ein Stück Kuchen.",
            "Zum deftigen Abendessen am Wochenende trinken Erwachsene gern ein regionales [das Bier, -e|Bier] oder ein Glas trockenen [der Wein, -e|Wein].",
            "Für Kinder gibt es derweil ein Glas kalte [die Milch|Milch] oder fruchtigen [der Orangensaft, -̈e|Orangensaft].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Trinkkultur, Genuss und die Kunst der Erfrischung",
        intro: "Kaffeehauskultur, Weintradition und gesunde Trinkgewohnheiten (B1).",
        paragraphs: [
          [
            "Die Auswahl des passenden Getränks unterstreicht den Charakter jedes kulinarischen Moments und spiegelt regionale Kultur wider.",
            "Während das reine [das Wasser|Wasser] lebensnotwendige Basisversorgung darstellt, zeichnet sich Mitteleuropa durch eine enorme Vielfalt an calciumreichem [das Mineralwasser|Mineralwasser] aus.",
            "In den traditionellen Kaffeehäusern von Wien, Berlin oder Zürich wird die Zubereitung von [der Kaffee, -s|Kaffee] mit samtiger [die Milch|Milch] als Handwerkskunst zelebriert.",
            "Tee-Enthusiasten wiederum schätzen die meditative Ruhe einer Teezeremonie, bei der erlesener [der Tee, -s|Tee] langsam zieht.",
          ],
          [
            "Gleichzeitig verändert sich der Konsum alkoholischer Getränke spürbar zugunsten bewusster Alternativen.",
            "Alkoholfreies [das Bier, -e|Bier], das nach historischem Reinheitsgebot gebraut wird, erfreut sich als isotonisches Sportgetränk wachsender Beliebtheit.",
            "Wer ein elegantes Menü abrunden möchte, wählt mit Bedacht einen charaktervollen [der Wein, -e|Wein], der die Aromen der Speisen harmonisch begleitet.",
            "Für kühle Wintertage bleibt eine sämige [die heiße Schokolade|heiße Schokolade] der unangefochtene Seelenwärmer für Jung und Alt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Ökologie der Getränkeindustrie und soziokulturelle Trinkrituale",
        intro: "Kritische Analyse von Wassernutzung, Monokulturen und modernen Konsumtrends (B2).",
        paragraphs: [
          [
            "Trinkgewohnheiten sind niemals bloße biologische Notwendigkeiten, sondern tief verankerte Ausdrucksformen gesellschaftlicher Identität und ökonomischer Verflechtungen.",
            "Der globale Markt für Luxusressourcen wie Spezialitäten-[der Kaffee, -s|Kaffee] oder handwerklich vinifizierten [der Wein, -e|Wein] verdeutlicht das Spannungsfeld zwischen fairem Direkthandel und imperialen Konsummustern.",
            "Ökologisch betrachtet rückt der gigantische Ressourcenverbrauch bei der industriellen Produktion von Säften wie [der Orangensaft, -̈e|Orangensaft] zunehmend in die Kritik umweltsensibler Verbraucher.",
            "Infolgedessen erlebt erstklassiges, kommunal aufbereitetes Leitungswasser als nachhaltige Alternative zu in Plastikflaschen abgefülltem [das Mineralwasser|Mineralwasser] eine signifikante gesellschaftliche Aufwertung.",
          ],
          [
            "Parallel dazu vollzieht sich ein Paradigmenwechsel im Freizeitverhalten, der durch 'Mindful Drinking' und den Boom alkoholfreier Biere geprägt ist.",
            "Das traditionelle [das Bier, -e|Bier] verliert sein Monopol als gesellschaftlicher Standardkatalysator, während fermentierte Tees und botanische Extrakte als anspruchsvolle Alternativen reüssieren.",
            "Dennoch bewahren rituelle Heißgetränke wie der zeremonielle [der Tee, -s|Tee] ihre generationenübergreifende Funktion als Anker der Entschleunigung in einer beschleunigten Gegenwart.",
          ],
        ],
      },
    },
  },
  {
    id: "mahlzeiten",
    title: "Mahlzeiten und Restaurant",
    description: "Tagesstruktur, Restaurantbesuch, Bestellungen und kulinarische Etikette.",
    details:
      "In Deutschland sind die drei Hauptmahlzeiten das Frühstück ('das Frühstück'), das Mittagessen ('das Mittagessen') und das Abendessen ('das Abendessen', oft auch traditionell 'das Abendbrot' genannt, da man Brot mit Käse und Aufschnitt isst). Im Restaurant wartet man nicht immer auf eine Platzzuweisung, es sei denn, ein Schild bittet darum ('Bitte warten, Sie werden platziert'). Man bestellt mit 'Ich hätte gern...' oder 'Ich möchte bitte...'. In Deutschland ist das Trinkgeld ('das Trinkgeld') von ca. 5–10 % üblich und wird direkt beim Bezahlen aufgerundet ('Stimmt so' oder den Gesamtbetrag nennen).",
    arabicDescription:
      "الوجبات اليومية وتجربة المطعم وقواعد اللباقة الألمانية. يتناول هذا الدرس وجبات اليوم الثلاث (الإفطار، الغداء، العشاء)، والعبارات المهذبة المستخدمة عند حجز طاولة، وطلب الطعام من قائمة الطعام (Speisekarte)، وطلب الحساب، ودفع الإكرامية (Trinkgeld) وفق العادات المتبعة في ألمانيا.",
    words: [
      {
        german: "das Frühstück, -e",
        arabic: "وجبة الإفطار",
        english: "breakfast",
        example:
          "Zum ausgiebigen Frühstück am Sonntag gehören frische Brötchen, Eier und Marmelade.",
      },
      {
        german: "das Mittagessen, -",
        arabic: "وجبة الغداء",
        english: "lunch",
        example:
          "In der Mittagspause treffen sich die Kollegen um zwölf Uhr zum Mittagessen in der Kantine.",
      },
      {
        german: "das Abendessen, -",
        arabic: "وجبة العشاء",
        english: "dinner, evening meal",
        example:
          "Beim gemeinsamen Abendessen sprechen wir über die schönsten Erlebnisse des Tages.",
      },
      {
        german: "die Speisekarte, -n",
        arabic: "قائمة الطعام / المنيو",
        english: "menu",
        example:
          "Die freundliche Kellnerin bringt uns sofort die Speisekarte mit den Tagesgerichten.",
      },
      {
        german: "die Rechnung, -en",
        arabic: "الفاتورة / الحساب",
        english: "bill, check",
        example:
          "„Wir möchten bitte zahlen, bringen Sie uns bitte die Rechnung?“, fragt mein Vater.",
      },
      {
        german: "der Kellner, -",
        arabic: "النادل / الجرسون",
        english: "waiter",
        example: "Der aufmerksame Kellner empfiehlt uns die hausgemachten Nudeln mit Trüffeln.",
      },
      {
        german: "das Restaurant, -s",
        arabic: "المطعم",
        english: "restaurant",
        example:
          "An unserem Hochzeitstag reservieren wir einen Tisch in einem italienischen Restaurant.",
      },
      {
        german: "die Vorspeise, -n",
        arabic: "المقبلات",
        english: "starter, appetizer",
        example: "Als leichte Vorspeise bestellen wir eine würzige Tomatensuppe mit Basilikum.",
      },
      {
        german: "das Hauptgericht, -e",
        arabic: "الطبق الرئيسي",
        english: "main dish, main course",
        example: "Als Hauptgericht wählt sie gegrilltes Lachsfilet mit Rosmarinkartoffeln.",
      },
      {
        german: "der Nachtisch, -e",
        arabic: "الحلوى / التحلية بعد الأكل",
        english: "dessert",
        example: "Zum Nachtisch gönnen wir uns ein cremiges Tiramisu und einen Espresso.",
      },
      {
        german: "das Trinkgeld, -er",
        arabic: "الإكرامية / البقشيش",
        english: "tip, gratuity",
        example: "Für den exzellenten und schnellen Service geben wir zehn Prozent Trinkgeld.",
      },
      {
        german: "die Reservierung, -en",
        arabic: "الحجز",
        english: "reservation",
        example: "Ich habe online eine Reservierung für vier Personen um neunzehn Uhr vorgenommen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Im Restaurant essen gehen",
        intro: "Einfache Dialoge und Wörter für einen gelungenen Restaurantbesuch (A1).",
        paragraphs: [
          [
            "Heute Abend gehen wir in ein schönes [das Restaurant, -s|Restaurant].",
            "Wir haben vorher eine [die Reservierung, -en|Reservierung] für zwei Personen gemacht.",
            "Der nette [der Kellner, -|Kellner] begrüßt uns an der Tür und zeigt uns unseren Tisch.",
            "Er gibt uns sofort die [die Speisekarte, -n|Speisekarte] und fragt nach unseren Getränkewünschen.",
          ],
          [
            "Als [die Vorspeise, -n|Vorspeise] nehme ich einen gemischten Salat.",
            "Mein [das Hauptgericht, -e|Hauptgericht] ist ein gebratenes Hähnchen mit Reis.",
            "Zum [der Nachtisch, -e|Nachtisch] essen wir leckeres Schokoladeneis.",
            "Am Ende verlangen wir die [die Rechnung, -en|Rechnung] und geben dem Kellner etwas [das Trinkgeld, -er|Trinkgeld].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Tagesrhythmus der Mahlzeiten und ein gemütlicher Restaurantabend",
        intro: "Vom morgendlichen Frühstück bis zum Restaurantbesuch mit Freunden (A2).",
        paragraphs: [
          [
            "Der Tag beginnt in Deutschland meistens mit einem herzhaften [das Frühstück, -e|Frühstück] aus Brötchen, Käse, Marmelade und Kaffee.",
            "Zur Mittagszeit treffen sich Berufstätige zum schnellen [das Mittagessen, -|Mittagessen] in der Firmenkantine oder essen einen Snack.",
            "Besonders schön ist das [das Abendessen, -|Abendessen], wenn man Zeit hat, mit Freunden gemeinsam auszugehen.",
            "Gestern Abend trafen wir uns in einem gemütlichen [das Restaurant, -s|Restaurant] in der Altstadt, für das wir vorab eine [die Reservierung, -en|Reservierung] hatten.",
          ],
          [
            "Der aufmerksame [der Kellner, -|Kellner] reichte uns die [die Speisekarte, -n|Speisekarte] und erläuterte die Empfehlungen des Küchenchefs.",
            "Wir wählten eine feine Suppe als [die Vorspeise, -n|Vorspeise] und ein zartes Rindersteak als [das Hauptgericht, -e|Hauptgericht].",
            "Niemand konnte dem verlockenden [der Nachtisch, -e|Nachtisch] widerstehen: Warmer Apfelstrudel mit Vanillesauce krönte den Abend.",
            "Als die [die Rechnung, -en|Rechnung] kam, rundeten wir den Betrag großzügig auf und gaben ein verdientes [das Trinkgeld, -er|Trinkgeld].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Gastronomische Etikette und Mahlzeitenkultur",
        intro:
          "Gepflegte Umgangsformen, Menüfolgen und Serviceerwartungen in der Gastronomie (B1).",
        paragraphs: [
          [
            "Ein gelungener Restaurantbesuch ist weit mehr als bloße Nahrungsaufnahme; er stellt ein harmonisches Zusammenspiel aus Gastfreundschaft, Handwerk und Atmosphäre dar.",
            "Wer am Wochenende mit Familie oder Geschäftspartnern speisen möchte, sollte rechtzeitig eine verbindliche [die Reservierung, -en|Reservierung] im gewünschten [das Restaurant, -s|Restaurant] tätigen.",
            "Nachdem die Gäste platziert wurden, studiert man in Ruhe die sorgfältig zusammengestellte [die Speisekarte, -n|Speisekarte], die saisonale Schwerpunkte setzt.",
            "Ein kompetenter [der Kellner, -|Kellner] berät dezent bei der Abstimmung zwischen der leichten [die Vorspeise, -n|Vorspeise] und dem gehaltvollen [das Hauptgericht, -e|Hauptgericht].",
          ],
          [
            "Das gemeinsame Speisen strukturiert seit jeher das soziale Leben: Während das morgendliche [das Frühstück, -e|Frühstück] Energie spendet, bildet das festliche [das Abendessen, -|Abendessen] den Höhepunkt sozialer Begegnungen.",
            "Ein handwerklich meisterhafter [der Nachtisch, -e|Nachtisch] rundet das kulinarische Gesamterlebnis harmonisch ab.",
            "Beim Begleichen der [die Rechnung, -en|Rechnung] gilt es in Deutschland als Zeichen von Wertschätzung, guten Service mit einem angemessenen [das Trinkgeld, -er|Trinkgeld] zu honorieren.",
            "So verlässt man das Lokal mit einem Gefühl von Zufriedenheit und lebendiger Erinnerung.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gastrosophie, Soziologie des Festmahls und Dienstleistungskultur",
        intro:
          "Tiefgründige soziokulturelle Reflexion über Esskultur und gastronomische Rituale (B2).",
        paragraphs: [
          [
            "Die gemeinsame Mahlzeit fungiert seit der Antike als zentrales rituelles Bindeglied menschlicher Vergesellschaftung, in dem Machtstrukturen, Gastfreundschaft und kulturelle Codes verhandelt werden.",
            "In der gehobenen Gastronomie transformiert das renommierte [das Restaurant, -s|Restaurant] diesen Akt in eine synästhetische Inszenierung, beginnend mit der förmlichen [die Reservierung, -en|Reservierung].",
            "Die kuratierte [die Speisekarte, -n|Speisekarte] offenbart dabei die Küchenphilosophie des Hauses, die von der Textur der filigranen [die Vorspeise, -n|Vorspeise] bis zur aromatischen Komplexität im [das Hauptgericht, -e|Hauptgericht] reicht.",
            "Eine professionelle Brigade unter Führung versierter [der Kellner, -|Kellner] agiert als unsichtbare Choreografie, die Distanz und Empathie souverän ausbalanciert.",
          ],
          [
            "Im Kontrast zum funktional optimierten [das Mittagessen, -|Mittagessen] moderner Angestellter zelebriert das festliche [das Abendessen, -|Abendessen] die Entschleunigung und das Auskosten des Augenblicks.",
            "Ein avantgardistischer [der Nachtisch, -e|Nachtisch] bricht konventionelle Geschmacksmuster auf und fordert die sensorische Reflexion der Gäste heraus.",
            "Die Begleichung der [die Rechnung, -en|Rechnung] und die Bemessung vom [das Trinkgeld, -er|Trinkgeld] markieren schließlich die ökonomische Dimension dieser Dienstleistung, in der persönliche Wertschätzung und gesellschaftliche Konvention verschmelzen.",
          ],
        ],
      },
    },
  },
];

async function apply() {
  const ch3Path = path.resolve("src/data/vocabulary/3-essen-und-trinken.json");
  const storiesPath = path.resolve("src/features/vocabulary/data/topic-stories.json");

  const ch3Data = JSON.parse(fs.readFileSync(ch3Path, "utf8"));
  const storiesData = JSON.parse(fs.readFileSync(storiesPath, "utf8"));

  for (const topicEnrichment of chapter3TopicsEnrichment) {
    for (const sec of ch3Data.sections) {
      const topic = sec.topics.find((t: any) => t.id === topicEnrichment.id);
      if (topic) {
        topic.title = topicEnrichment.title;
        topic.description = topicEnrichment.description;
        topic.details = topicEnrichment.details;
        topic.arabicDescription = topicEnrichment.arabicDescription;
        topic.words = topicEnrichment.words;
        topic.story = topicEnrichment.stories.A1;
        topic.stories = topicEnrichment.stories;
        console.log(`Updated 3-essen-und-trinken.json topic: ${topicEnrichment.id}`);
      }
    }
    storiesData[topicEnrichment.id] = topicEnrichment.stories;
    console.log(`Updated topic-stories.json topic: ${topicEnrichment.id}`);
  }

  fs.writeFileSync(ch3Path, JSON.stringify(ch3Data, null, 2), "utf8");
  fs.writeFileSync(storiesPath, JSON.stringify(storiesData, null, 2), "utf8");
  console.log("Chapter 3 files written successfully!");
}

apply();
