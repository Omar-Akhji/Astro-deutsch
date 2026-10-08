import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch3Data: Record<string, any> = {
  wildpflanzen: {
    description: "Wildkräuter, Löwenzahn, Brennnessel, Farne, Moose, Pilze und Heilkräuter.",
    details: "Botanik, Wiesenflora, essbare Wildpflanzen, Waldunterholz und Heilkraft (A1–B2)",
    arabicDescription:
      "النباتات البرية والأعشاب (Wildpflanzen): النباتات البرية (Wildpflanze)، الهندباء البرية (Löwenzahn)، نبات القراص (Brennnessel)، زهرة اللؤلؤية (Gänseblümchen)، نبات النفل (Klee)، الحزازيات والطحالب (Moos)، السرخس (Farn)، النباتات الطبية، الفطر، والأعشاب البرية الشافية.",
    words: [
      {
        german: "die Wildpflanze, -n",
        arabic: "النبتة البرية الطبيعية (غير المزروعة)",
        english: "wild plant",
        example: "Auf der naturbelassenen Wiese wachsen zahlreiche seltene Wildpflanzen.",
      },
      {
        german: "der Löwenzahn (Sg.)",
        arabic: "نبات الهندباء البرية ذو الزهرة الصفراء",
        english: "dandelion",
        example: "Wenn die gelbe Blüte des Löwenzahns verblüht, wird sie zur Pusteblume.",
      },
      {
        german: "die Brennnessel, -n",
        arabic: "نبات القراص الحارق (الحرّيق)",
        english: "stinging nettle",
        example: "Die Brennnessel brennt auf der Haut, ergibt aber einen sehr gesunden Tee.",
      },
      {
        german: "das Gänseblümchen, -",
        arabic: "زهرة اللؤلؤية الصغيرة في المروج",
        english: "daisy",
        example: "Kleine Mädchen flechten gern bunte Kränze aus frischen Gänseblümchen.",
      },
      {
        german: "der Klee (Sg.)",
        arabic: "نبات النفل أو البرسيم (خاصة ذو الأربع ورقات)",
        english: "clover",
        example: "Wer auf der Wiese ein vierblättriges Blatt vom Klee findet, soll Glück haben.",
      },
      {
        german: "das Moos, -e",
        arabic: "الحزاز والطحلب الأخضر الرطب",
        english: "moss",
        example: "Weiches grünes Moos überzieht die feuchten Steine am schattigen Waldrand.",
      },
      {
        german: "der Farn, -e",
        arabic: "نبات السرخس ذو الأوراق الريشية",
        english: "fern",
        example: "Im Schatten alter Buchen breiten große Farne ihre wedelartigen Blätter aus.",
      },
      {
        german: "die Heilpflanze, -n",
        arabic: "النبتة العشبية الطبية الشافية",
        english: "medicinal plant, medicinal herb",
        example:
          "Kamille und Ringelblume sind bewährte Heilpflanzen der traditionellen Klostermedizin.",
      },
      {
        german: "das Wildkraut, -̈er",
        arabic: "العشبة البرية التلقائية في الطبيعة",
        english: "wild herb",
        example:
          "Spitzwegerich ist ein nützliches Wildkraut, das den Juckreiz von Insektenstichen lindert.",
      },
      {
        german: "die Kamille (Sg.)",
        arabic: "نبات البابونج الطبي",
        english: "chamomile",
        example: "Ein Dampfbad mit echter Kamille befreit verstopfte Nasen bei Erkältung.",
      },
      {
        german: "der Waldpilz, -e",
        arabic: "فطر الغابة البري (المشروم)",
        english: "wild mushroom",
        example:
          "Im Herbst sammeln erfahrene Sammler schmackhafte Waldpilze wie Steinpilze und Pfifferlinge.",
      },
      {
        german: "die Heidelbeere, -n",
        arabic: "حبات التوت الأزرق البري",
        english: "blueberry, bilberry",
        example: "An niedrigen Waldsträuchern pflückten wir dunkle, süße Heidelbeeren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Blumen auf der Wiese",
        intro: "Einfache Sätze über Löwenzahn, Klee und Gänseblümchen (A1).",
        paragraphs: [
          [
            "Im Frühling blüht die grüne Wiese bunt auf.",
            "Überall wächst die gelbe Blüte von [der Löwenzahn (Sg.)|dem Löwenzahn].",
            "Im weichen Gras suche ich nach [der Klee (Sg.)|einem vierblättrigen Klee].",
          ],
          [
            "Dazwischen blüht [das Gänseblümchen, -|ein kleines weißes Gänseblümchen].",
            "Vorsicht vor [die Brennnessel, -n|der Brennnessel]: Sie brennt an den Beinen!",
            "Im Wald wächst weiches [das Moos, -e|Moos] auf den Steinen.",
          ],
          ["Jede [die Wildpflanze, -n|Wildpflanze] hat ihren eigenen Platz in der Natur."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kräutersuche im Wald",
        intro: "Heilpflanzen sammeln, Kamille und Farne (A2).",
        paragraphs: [
          [
            "Am Wochenende nahm mich meine Großmutter mit auf einen Kräuterspaziergang.",
            "Sie zeigte mir, wie man [die Heilpflanze, -n|wertvolle Heilpflanzen] am Wegesrand erkennt.",
          ],
          [
            "Wir pflückten duftende [die Kamille (Sg.)|Kamille] und getrocknete Blätter für Tee.",
            "Im tiefen Schatten alter Tannen bewunderten wir [der Farn, -e|den Farn] und sammelten süße [die Heidelbeere, -n|Heidelbeeren].",
            "Oma erklärte mir, dass viele Pflanzen, die manche als Unkraut bezeichnen, in Wahrheit nützliche Kräuter sind.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Wildkräuter-Renaissance und Wiesenökologie",
        intro: "Ethnobotanik, essbare Wildkräuter und Artenschutz (B1).",
        paragraphs: [
          [
            "In Zeiten industrieller Landwirtschaft erleben traditionelle [die Wildpflanze, -n|Wildpflanzen] eine kulinarische und ökologische Renaissance.",
            "Spitzengastronomen verfeinern Salate mit aromatischen [das Wildkraut, -̈er|Wildkräutern] wie Schafgarbe, Giersch und Gundermann.",
          ],
          [
            "Entscheidend für die Natur ist ihre Rolle als Futterquelle für spezialisierte Wildbienen.",
            "Das dichte Wurzelgeflecht von [das Moos, -e|Moosen] und Farnen im Wald speichert Niederschläge und schützt Waldböden vor Austrocknung.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Phytochemie, Biodiversitätsverlust und Ruderalvegetation",
        intro: "Sekundäre Pflanzenstoffe, Ruderalflora und Sukzessionsdynamik (B2).",
        paragraphs: [
          [
            "Die Phytochemie von Wildpflanzen liefert unverzichtbare Leitstrukturen für die pharmazeutische Wirkstoffforschung.",
            "Die Flavonoide und Sesquiterpene in [die Kamille (Sg.)|Kamillenblüten] oder die Kieselsäure in Schachtelhalmen entfalten antiphlogistische Wirkungen.",
          ],
          [
            "Gleichzeitig verändert der diffuse Stickstoffeintrag aus Verkehr und Landwirtschaft die Zusammensetzung der Ruderalflora: Eutrophierungszeiger wie [die Brennnessel, -n|die Brennnessel] überwuchern magere Standorte.",
          ],
          [
            "Der Erhalt extensiver Magerrasen und Moore ist essenziell für die genetische Diversität der Flora.",
          ],
        ],
      },
    },
  },

  zierblumen: {
    description: "Rosen, Tulpen, Sonnenblumen, Orchideen, Nelken, Blumensträuße und Blütenstaub.",
    details: "Floristik, Zierpflanzenbau, Blütenanatomie, Bestäubung und Schnittblumen (A1–B2)",
    arabicDescription:
      "زهور ونباتات الزينة (Zierblumen): زهور الزينة (Zierblume)، الورد الجوري (Rose)، أزهار التوليب (Tulpe)، دوار الشمس (Sonnenblume)، زهرة الأوركيد (Orchidee)، القرنفل (Nelke)، الزنبق (Lilie)، البنفسج (Veilchen)، النرجس (Narzisse)، باقة الورد (Blumenstrauß)، والبتلات وحبوب اللقاح (Pollen).",
    words: [
      {
        german: "die Zierblume, -n",
        arabic: "زهرة ونبتة الزينة التجميلية",
        english: "ornamental flower, ornamental plant",
        example: "Im Blumenladen duftet es herrlich nach verschiedenen Zierblumen.",
      },
      {
        german: "die Rose, -n",
        arabic: "الوردة الجورية (ملكة الزهور)",
        english: "rose",
        example: "Eine rote Rose ist seit Jahrhunderten das klassische Symbol für die Liebe.",
      },
      {
        german: "die Tulpe, -n",
        arabic: "زهرة التوليب (الخزامى)",
        english: "tulip",
        example: "Im Frühling verwandeln Millionen bunter Tulpen die Gärten in ein Farbenmeer.",
      },
      {
        german: "die Sonnenblume, -n",
        arabic: "زهرة دوار / عباد الشمس",
        english: "sunflower",
        example: "Die riesige gelbe Sonnenblume dreht ihren Kopf tagsüber immer zur Sonne.",
      },
      {
        german: "die Orchidee, -n",
        arabic: "زهرة الأوركيد الاستوائية الأنيقة",
        english: "orchid",
        example: "Die weiße Orchidee auf der Fensterbank blüht schon seit mehreren Wochen.",
      },
      {
        german: "die Nelke, -n",
        arabic: "زهرة القرنفل",
        english: "carnation",
        example: "Rote Nelken haben einen würzigen Duft und halten sich lange in der Vase.",
      },
      {
        german: "die Lilie, -n",
        arabic: "زهرة الزنبق / السوسن",
        english: "lily",
        example: "Die weiße Lilie gilt in vielen Kulturen als Zeichen von Reinheit und Frieden.",
      },
      {
        german: "das Veilchen, -",
        arabic: "زهرة البنفسج الصغيرة العطرة",
        english: "violet",
        example: "Das kleine blaue Veilchen versteckt sich schüchtern im Frühjahrsgras.",
      },
      {
        german: "die Narzisse, -n",
        arabic: "زهرة النرجس الصفراء (أبواق الربيع)",
        english: "daffodil, narcissus",
        example: "Pünktlich zum Osterfest öffnen gelbe Narzissen ihre leuchtenden Glocken.",
      },
      {
        german: "der Blumenstrauß, -̈e",
        arabic: "باقة / بوكيه الزهور المنسقة",
        english: "bouquet of flowers, flower bouquet",
        example: "Zum Geburtstag schenkte er seiner Mutter einen prächtigen Blumenstrauß.",
      },
      {
        german: "das Blütenblatt, -̈er",
        arabic: "بتلة الزهرة الملونة",
        english: "petal",
        example: "Der Wind wehte die zarten rosa Blütenblätter vom Kirschbaum auf den Weg.",
      },
      {
        german: "der Blütenstaub (Sg.)",
        arabic: "حبوب اللقاح / غبار الطلع النباتي (البولين)",
        english: "pollen",
        example: "Fleißige Bienen transportieren gelben Blütenstaub von Blüte zu Blüte.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein schöner Blumenstrauß",
        intro: "Einfache Sätze über Rosen, Tulpen und Blumen im Zimmer (A1).",
        paragraphs: [
          [
            "Ich gehe in den Blumenladen an der Ecke.",
            "Dort gibt es viele bunte [die Zierblume, -n|Zierblumen].",
            "Ich kaufe [die Rose, -n|eine rote Rose] und drei gelbe [die Tulpe, -n|Tulpen].",
          ],
          [
            "Die Verkäuferin bindet [der Blumenstrauß, -̈e|einen wunderschönen Blumenstrauß].",
            "Jedes [das Blütenblatt, -̈er|Blütenblatt] riecht herrlich süß.",
            "Zu Hause stelle ich die Blumen in eine Glasvase mit frischem Wasser.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Blütenzauber im Frühling und Sommer",
        intro: "Narzissen zu Ostern, Sonnenblumen und Bienen (A2).",
        paragraphs: [
          [
            "Schon im März beginnt das Gartenjahr mit den ersten Frühlingsblumen.",
            "Gelbe [die Narzisse, -n|Narzissen] und zarte [das Veilchen, -|Veilchen] kündigen das Ende des Winters an.",
          ],
          [
            "Im Hochsommer blüht auf dem Feld [die Sonnenblume, -n|die große Sonnenblume].",
            "Hummeln und Schmetterlinge fliegen um die Blüten und sammeln [der Blütenstaub (Sg.)|den klebrigen Blütenstaub].",
            "Auf meiner Fensterbank pflege ich eine elegante [die Orchidee, -n|Orchidee], die wenig Wasser braucht.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Floristik, Züchtung und Symbolik der Blumen",
        intro: "Kulturelle Bedeutung von Blumen, Schnittblumenmarkt und Haltbarkeit (B1).",
        paragraphs: [
          [
            "Seit der Antike nutzen Menschen Blumen als Ausdrucksmittel für Gefühle und festliche Anlässe.",
            "Während [die Rose, -n|die Rose] für Zuneigung steht, symbolisiert [die Lilie, -n|die Lilie] oft Würde und Trauer.",
          ],
          [
            "Moderne Floristen kombinieren saisonale Blüten mit Ziergräsern zu kunstvollen Arrangements.",
            "Um die Haltbarkeit in der Vase zu maximieren, sollten die Stiele schräg angeschnitten und das Wasser täglich gewechselt werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Zierpflanzenphysiologie, Hybridisierung und globale Schnittblumenmärkte",
        intro: "Photoperiodismus, Phytohormone und ökologische Zertifizierung (B2).",
        paragraphs: [
          [
            "Der erwerbsmäßige Gartenbau steuert die Blühinduktion von [die Zierblume, -n|Zierblumen] über präzise Lichtregime (Photoperiodismus) und thermische Reize.",
            "Hochentwickelte Hybridisierungstechniken züchten Sorten mit verlängerter Vasenlebensdauer und schädlingsresistenten Petalen.",
          ],
          [
            "Der globale Schnittblumenmarkt (z. B. Blumenbörse Aalsmeer) erfordert jedoch temperaturgeführte Kühlketten und Lufttransporte aus Äquatorregionen.",
          ],
          [
            "Umweltzertifikate (wie Fairtrade) gewinnen an Bedeutung, um den Pestizideinsatz und den Wasserverbrauch in den Anbauländern sozial und ökologisch verträglich zu gestalten.",
          ],
        ],
      },
    },
  },

  gartenpflanzen: {
    description: "Gemüsebeete, Tomaten, Salat, Kräuterbeete, Hecken, Rasen, Obstbäume und Kompost.",
    details:
      "Nutzgarten, Ziergarten, Urban Gardening, Düngung, Bodenpflege und Permakultur (A1–B2)",
    arabicDescription:
      "نباتات وزراعة الحديقة (Gartenpflanzen): نباتات الحديقة المنزلية (Gartenpflanze)، حوض الخضروات (Gemüsebeet)، نبتة الطماطم (Tomate)، الخس (Salat)، حوض الأعشاب العطرية، سياج الشجيرات (Hecke)، المسطح الأخضر (Rasen)، أشجار الفاكهة (Obstbaum)، إزالة الأعشاب الضارة، سقي المزروعات، والسماد العضوي (Kompost).",
    words: [
      {
        german: "die Gartenpflanze, -n",
        arabic: "نبات الحديقة المنزلية (للزينة أو الطعام)",
        english: "garden plant",
        example: "Im Frühjahr pflanzen wir neue Gartenpflanzen in die vorbereiteten Beete.",
      },
      {
        german: "das Gemüsebeet, -e",
        arabic: "حوض ومشتل زراعة الخضروات",
        english: "vegetable patch, vegetable bed",
        example: "Im sonnigen Gemüsebeet wachsen Karotten, Zucchini und Zwiebeln.",
      },
      {
        german: "die Tomatenpflanze, -n",
        arabic: "شتلة وشجرة الطماطم",
        english: "tomato plant",
        example:
          "Ich binde die schwere Tomatenpflanze an einem Holzstab fest, damit sie nicht abbricht.",
      },
      {
        german: "der Salat, -e",
        arabic: "الخس المزروع في الحديقة",
        english: "lettuce, salad greens",
        example: "Knackiger grüner Salat gedeiht besonders gut im feuchten Frühbeet.",
      },
      {
        german: "das Kräuterbeet, -e",
        arabic: "حوض زراعة الأعشاب العطرية والمطبخية",
        english: "herb bed, herb garden",
        example: "Im Kräuterbeet duftet es nach frischem Basilikum, Rosmarin und Thymian.",
      },
      {
        german: "die Hecke, -n",
        arabic: "سياج الحديقة النباتي (السياج الشجري)",
        english: "hedge",
        example: "Eine dichte grüne Hecke schützt den Garten vor neugierigen Blicken.",
      },
      {
        german: "der Rasen, -",
        arabic: "المسطح الأخضر وعشب الحديقة",
        english: "lawn",
        example: "Am Samstagnachmittag mäht der Nachbar den kurz gewachsenen Rasen.",
      },
      {
        german: "der Obstbaum, -̈e",
        arabic: "شجرة الفاكهة المثمرة (تفاح، كرز، إجاص)",
        english: "fruit tree",
        example: "Im Herbst hängen an unserem Obstbaum hunderte saftige rote Äpfel.",
      },
      {
        german: "das Unkraut jäten",
        arabic: "ينقّي ويقلع الأعشاب الضارة من التربة",
        english: "to weed, to pull weeds",
        example: "Einmal pro Woche muss man bücken und sorgfältig das Unkraut jäten.",
      },
      {
        german: "gießen",
        arabic: "يسقي ويروي النباتات بالماء",
        english: "to water (plants)",
        example: "Vergessen Sie an heißen Sommertagen nicht, die Beete abends reichlich zu gießen.",
      },
      {
        german: "die Blumenerde, -n",
        arabic: "تربة الزراعة الخصبة (البيتموس / الطمي)",
        english: "potting soil, compost soil",
        example:
          "Wir füllten frische nährstoffreiche Blumenerde in die Blumenkästen auf dem Balkon.",
      },
      {
        german: "der Kompost (Sg.)",
        arabic: "السماد العضوي الطبيعي المتحلل",
        english: "compost, compost heap",
        example: "Küchenabfälle und Rasenschnitt verwandeln sich auf dem Kompost in besten Dünger.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Arbeit im Garten",
        intro: "Einfache Sätze über Garten, Gießen und Tomaten (A1).",
        paragraphs: [
          [
            "Ich habe einen kleinen Garten hinter dem Haus.",
            "Hier wächst grüner [der Rasen, -|Rasen] und [der Obstbaum, -̈e|ein großer Obstbaum].",
            "Im Frühling grabe ich [das Gemüsebeet, -e|das Gemüsebeet] um.",
          ],
          [
            "Ich pflanze [die Tomatenpflanze, -n|eine Tomatenpflanze] und säe [der Salat, -e|Salat].",
            "Jeden Abend nehme ich die Kanne und muss die Pflanzen [gießen|gießen].",
            "Frisches Gemüse aus dem eigenen Garten schmeckt am besten.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vom Kompost zur reichen Ernte",
        intro: "Unkraut jäten, Kräuterbeete und Hecken schneiden (A2).",
        paragraphs: [
          [
            "Gartenarbeit macht zwar Mühe, ist aber wunderbar entspannend.",
            "Letzten Samstag musste ich zwei Stunden lang [das Unkraut jäten|das Unkraut jäten].",
          ],
          [
            "In [das Kräuterbeet, -e|unserem Kräuterbeet] wachsen Rosmarin, Minze und Petersilie für die Küche.",
            "Die welke Pflanzenteile warf ich auf [der Kompost (Sg.)|den Kompost], wo wertvoller Humus entsteht.",
            "Entlang der Grundstücksgrenze schnitt ich [die Hecke, -n|die Hecke] mit einer elektrischen Schere zurück.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Selbstversorgung und ökologisches Gärtnern",
        intro: "Mischkultur, Schädlinge biologisch regulieren und Bodenfruchtbarkeit (B1).",
        paragraphs: [
          [
            "Urban Gardening und private Nutzgartenbewirtschaftung erfreuen sich wachsender Beliebtheit.",
            "Statt chemischer Pestizide setzen ökologische Gärtner auf Mischkulturen in [das Gemüsebeet, -e|dem Gemüsebeet], bei denen sich Nachbarpflanzen gegenseitig vor Schädlingen schützen.",
          ],
          [
            "Reifer Humus aus [der Kompost (Sg.)|dem eigenen Kompost] verbessert die Bodenbelüftung und speichert Feuchtigkeit auch bei sommerlicher Hitze.",
          ],
          [
            "So verwandelt sich der eigene Garten in ein blühendes, nachhaltiges Biotop für Insekten und Vögel.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Permakultur, Bodenmikrobiologie und regenerative Agrikultur",
        intro: "Mulchsysteme, Bodengefüge und Kreislaufwirtschaft im Garten (B2).",
        paragraphs: [
          [
            "Die Prinzipien der Permakultur zielen auf geschlossene Stoffkreisläufe und naturnahe Selbstregulation in anthropogenen Habitaten ab.",
            "Der gezielte Aufbau mikrobieller Bodengemeinschaften durch Mykorrhizaimpfung und organische Mulchschichten schützt [die Gartenpflanze, -n|Gartenpflanzen] vor osmotischem Trockenstress.",
          ],
          [
            "Statt mineralischer Dünger liefert thermophil fermentierter [der Kompost (Sg.)|Kompost] bioverfügbaren Stickstoff und stabilen Kohlenstoff für den Boden.",
          ],
          [
            "Tragfähige Gehölzstrukturen mit [der Obstbaum, -̈e|Obstbäumen] und schattenspendenden Hecken etablieren ein vorteilhaftes Mikroklima für ertragreiche Ernten.",
          ],
        ],
      },
    },
  },

  saeugetiere: {
    description:
      "Säugetiere, Fell, Haustiere, Wildtiere, Wölfe, Bären, Hirsche, Kühe und lebendgebärend.",
    details:
      "Mammalogie, Säugetierphysiologie, Warmblüter, Raubtiere, Paarhufer und Brutpflege (A1–B2)",
    arabicDescription:
      "الثدييات (Säugetiere): طائفة الثدييات (Säugetier)، الحيوانات الأليفة كالكلب (Hund) والقطة (Katze)، الحصان (Pferd)، البقرة (Kuh)، الخروف (Schaf)، الخنزير (Schwein)، الحيوانات البرية كالغزال والوعل (Hirsch)، الذئب (Wolf)، الدب (Bär)، الفراء والشعر (Fell)، وإرضاع الصغار بالحليب (säugen).",
    words: [
      {
        german: "das Säugetier, -e",
        arabic: "الحيوان الثديي (من ذوات الدم الحار)",
        english: "mammal",
        example: "Säugetiere bringen lebende Junge zur Welt und ernähren sie mit Muttermilch.",
      },
      {
        german: "der Hund, -e",
        arabic: "الكلب (أوفى أصدقاء الإنسان)",
        english: "dog",
        example:
          "Der treue Hund wedelt fröhlich mit dem Schwanz, wenn sein Herrchen nach Hause kommt.",
      },
      {
        german: "die Katze, -n",
        arabic: "القطة الأليفة",
        english: "cat",
        example: "Die schnurrende Katze schläft zusammengerollt auf dem warmen Sofa.",
      },
      {
        german: "das Pferd, -e",
        arabic: "الحصان والفرس",
        english: "horse",
        example: "Auf dem Reiterhof galoppiert das stolze braune Pferd über die Koppel.",
      },
      {
        german: "die Kuh, -̈e",
        arabic: "البقرة الحلوب",
        english: "cow",
        example: "Auf der grünen Almwiese grasen schwarz-weiße Kühe und kauen friedlich.",
      },
      {
        german: "das Schaf, -e",
        arabic: "الخروف والنعجة",
        english: "sheep",
        example: "Aus der dichten weichen Wolle der Schafe wird warme Kleidung gestrickt.",
      },
      {
        german: "der Hirsch, -e",
        arabic: "الأيل والوعل البري ذو القرون المتشعبة",
        english: "deer, stag",
        example: "Der mächtige Hirsch trägt ein imposantes Geweih und lebt scheu im Wald.",
      },
      {
        german: "der Wolf, -̈e",
        arabic: "الذئب البري المفترس",
        english: "wolf",
        example: "Im Rudel durchstreift der scheue Wolf die weiten Wälder Europas.",
      },
      {
        german: "der Bär, -en",
        arabic: "الدب الكبير",
        english: "bear",
        example:
          "Vor dem kalten Winter frisst sich der Braunbär eine dicke Fettschicht für den Winterschlaf an.",
      },
      {
        german: "das Fell, -e",
        arabic: "فرو وجلد الحيوان الكثيف",
        english: "fur, coat (animal)",
        example: "Ein dickes, wasserabweisendes Fell schützt den Fischotter im eiskalten Fluss.",
      },
      {
        german: "säugen",
        arabic: "ترضع صغيرها بالحليب الطبيعي",
        english: "to suckle, to nurse (animals)",
        example: "Die Bärin wird ihre neugeborenen Jungen in der warmen Höhle monatelang säugen.",
      },
      {
        german: "das Raubtier, -e",
        arabic: "الحيوان المفترس واللاحم",
        english: "predator, beast of prey",
        example: "Löwen und Wölfe sind spezialisierte Raubtiere an der Spitze der Nahrungskette.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Tiere mit warmem Fell",
        intro: "Einfache Sätze über Hunde, Katzen und Bauernhoftiere (A1).",
        paragraphs: [
          [
            "Viele Tiere haben weiches [das Fell, -e|Fell].",
            "[der Hund, -e|Der Hund] bellt und [die Katze, -n|die Katze] miaut leise.",
            "Sie leben oft als Haustiere bei uns Menschen.",
          ],
          [
            "Auf dem Bauernhof sehen wir [die Kuh, -̈e|eine große Kuh] und [das Schaf, -e|ein weißes Schaf].",
            "Die Mutter kann ihr Baby mit Milch [säugen|säugen].",
            "Deshalb heißt diese Gruppe [das Säugetier, -e|Säugetier].",
          ],
          ["Sie haben warmes Blut und lieben ihre Kinder."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Wilde Tiere im Nationalpark",
        intro: "Hirsche im Wald, Wölfe im Rudel und Bären (A2).",
        paragraphs: [
          [
            "Letzten Herbst wanderten wir durch einen großen Naturpark in den Bergen.",
            "Früh am Morgen hörten wir [der Hirsch, -e|einen stolzen Hirsch] im Nebel röhren.",
          ],
          [
            "Der Parkranger erzählte uns, dass in dieser Region auch wieder [der Wolf, -̈e|der Wolf] heimisch geworden ist.",
            "Als intelligentes [das Raubtier, -e|Raubtier] jagt er im Rudel und meidet Menschen.",
            "In den Bergen schläft [der Bär, -en|der Bär] im Winter viele Monate lang in seiner Höhle.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Evolutionäre Erfolgsgeschichte der Säugetiere",
        intro: "Endothermie, Brutpflege und ökologische Nischen (B1).",
        paragraphs: [
          [
            "Nach dem Aussterben der Dinosaurier vor 66 Millionen Jahren eroberten [das Säugetier, -e|Säugetiere] nahezu alle Lebensräume der Erde.",
            "Ihre biologischen Schlüsselinnovationen — gleichwarme Körpertemperatur (Endothermie), isolierendes Fell und hochentwickelte Gehirne — sicherten ihnen einen Selektionsvorteil.",
          ],
          [
            "Die intensive Fürsorge für die Nachkommen, die Mütter monatelang [säugen|säugen] und anlernen, ermöglicht komplexe soziale Verhaltensweisen.",
          ],
          [
            "Heute stehen viele wilde Säugerarten durch Lebensraumverlust und Wilderei weltweit unter strengem Naturschutz.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Mammalogie, Trophiekaskaden und die Rückkehr der Spitzenprädatoren",
        intro: "Apex-Predatoren, Habitatzerschneidung und Koexistenzkonflikte (B2).",
        paragraphs: [
          [
            "Die Wiederansiedlung von Großkarnivoren wie [der Wolf, -̈e|dem Wolf] und Luchs in mitteleuropäischen Kulturlandschaften initiiert ökologische Trophiekaskaden.",
            "Als [das Raubtier, -e|Apex-Prädatoren] regulieren sie überhöhte Schalenwildbestände (Rehe und [der Hirsch, -e|Hirsche]), was den Verbiss reduziert und die natürliche Waldverjüngung begünstigt.",
          ],
          [
            "Diese ökologische Restitution kollidiert jedoch mit den Interessen der Weidetierhaltung von [das Schaf, -e|Schafen] und Rindern.",
          ],
          [
            "Ein wissenschaftlich fundiertes Wolfsmanagement kombiniert Herdenschutzhunde mit Elektrozäunen, um die Koexistenz zwischen Weidewirtschaft und Artenschutz zu moderieren.",
          ],
        ],
      },
    },
  },

  voegel: {
    description:
      "Vögel, Flügel, Schnäbel, Federn, Nester, Adler, Tauben, Schwalben, Eulen und Zugvögel.",
    details: "Ornithologie, Flugmechanik, Vogelzug, Brutbiologie, Gesang und Greifvögel (A1–B2)",
    arabicDescription:
      "الطيور وعالم الطيران (Vögel): فصيلة الطيور (Vogel)، الأجنحة (Flügel)، المنقار (Schnabel)، الريش (Feder)، عش الطائر (Vogelnest)، النسر والعقاب (Adler)، الحمام (Taube)، طائر الخطاف والسنونو (Schwalbe)، الشحرور (Amsel)، البومة (Eule)، والطيور المهاجرة (Zugvogel).",
    words: [
      {
        german: "der Vogel, -̈",
        arabic: "الطائر / العصفور",
        english: "bird",
        example: "Am frühen Frühlingsmorgen weckt uns der melodische Gesang der Vögel.",
      },
      {
        german: "der Flügel, -",
        arabic: "جناح الطائر للطيران",
        english: "wing",
        example: "Mit weit ausgebreiteten Flügeln gleitet der Storch majestätisch durch die Lüfte.",
      },
      {
        german: "der Schnabel, -̈",
        arabic: "منقار الطائر",
        english: "beak, bill",
        example: "Mit seinem spitzen Schnabel pickt der Specht Insekten aus der Baumrinde.",
      },
      {
        german: "die Vogelfeder, -n",
        arabic: "ريشة الطائر الخفيفة",
        english: "feather",
        example: "Die bunte Vogelfeder glänzt im Sonnenlicht in schillernden Farben.",
      },
      {
        german: "das Vogelnest, -er",
        arabic: "عش الطيور لتربية الصغار",
        english: "bird's nest",
        example: "Hoch oben in der Baumkrone haben die Schwalben ein rundes Vogelnest gebaut.",
      },
      {
        german: "der Adler, -",
        arabic: "النسر / العقاب الجارح (ملك الطيور)",
        english: "eagle",
        example: "Der Steinadler kreist hoch über den Alpengipfeln auf der Suche nach Beute.",
      },
      {
        german: "die Taube, -n",
        arabic: "الحمامة (رمز السلام)",
        english: "pigeon, dove",
        example: "Eine weiße Taube gilt weltweit als universelles Symbol für Frieden.",
      },
      {
        german: "die Schwalbe, -n",
        arabic: "طائر السنونو والخطاف",
        english: "swallow (bird)",
        example: "Eine Schwalbe macht noch keinen Sommer, sagt ein bekanntes deutsches Sprichwort.",
      },
      {
        german: "die Amsel, -n",
        arabic: "طائر الشحرور الأسود ذو المنقار الأصفر",
        english: "blackbird",
        example: "Die schwarze Amsel sitzt auf dem Dachfirst und schlägt flötende Töne an.",
      },
      {
        german: "die Eule, -n",
        arabic: "البومة ذات الرؤية الليلية الحادة",
        english: "owl",
        example: "Lautlos fliegt die Eule in der dunklen Nacht und jagt Mäuse auf dem Feld.",
      },
      {
        german: "der Zugvogel, -̈",
        arabic: "الطائر المهاجر فصلياً",
        english: "migratory bird",
        example: "Im Herbst formiert sich mancher Zugvogel wie der Kranich zur Reise nach Süden.",
      },
      {
        german: "fliegen",
        arabic: "يطير ويحلّق في الجو",
        english: "to fly",
        example:
          "Könnten Menschen fliegen, würden sie die Welt aus einer ganz neuen Perspektive sehen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Vögel im Garten",
        intro: "Einfache Sätze über Flügel, Federn und Nester (A1).",
        paragraphs: [
          [
            "Schau in den blauen Himmel!",
            "Dort oben kann [der Vogel, -̈|ein kleiner Vogel] frei [fliegen|fliegen].",
            "Er breitet seine [der Flügel, -|zwei Flügel] aus und gleitet im Wind.",
          ],
          [
            "Sein Körper ist bedeckt mit [die Vogelfeder, -n|weichen Federn].",
            "Mit [der Schnabel, -̈|dem Schnabel] holt er Würmer aus der Erde.",
            "Im Baum baut er [das Vogelnest, -er|ein Nest] für seine Eier.",
          ],
          ["Am Morgen singt [die Amsel, -n|die schwarze Amsel] ein wunderschönes Lied."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Reise in den Süden",
        intro: "Zugvögel, Eulen in der Nacht und Schwalben (A2).",
        paragraphs: [
          [
            "Wenn die Tage im Oktober kürzer werden, machen sich viele Vögel auf den Weg.",
            "Als [der Zugvogel, -̈|Zugvögel] fliegen Schwalben und Störche tausende Kilometer bis nach Afrika.",
          ],
          [
            "In einer V-Formation sparen sie Energie beim langen Flug.",
            "Im Wald bleibt [die Eule, -n|die kluge Eule] auch im Winter aktiv.",
            "Mit ihren großen Augen sieht sie nachts perfekt und fängt Mäuse im Schnee.",
            "Hoch in den Bergen kreist [der Adler, -|ein stolzer Adler] über den Klippen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Ornithologie und die Faszination des Vogelzugs",
        intro: "Navigation der Zugvögel, Magnetkompass und Vogelschutz (B1).",
        paragraphs: [
          [
            "Die Navigationsleistungen von Vögeln grenzen an ein biologisches Wunder.",
            "Ein reisender [der Zugvogel, -̈|Zugvogel] orientiert sich am Sternenhimmel, dem Sonnenstand und einem körpereigenen Magnetsinn im Auge.",
          ],
          [
            "Im städtischen Raum haben sich Kulturfolger wie [die Taube, -n|die Taube] und [die Amsel, -n|die Amsel] perfekt an menschliche Bauten angepasst.",
          ],
          [
            "Gleichzeitig bedrohen Lichtverschmutzung und Glasscheiben an Hochhäusern alljährlich Millionen Vögel, weshalb Vogelschutzorganisationen reflektierende Markierungen fordern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Aerodynamik, Knochenpneumatisierung und aviäre Bioakustik",
        intro: "Hohlknochen, Luftsacksysteme und bioakustische Territorialgesänge (B2).",
        paragraphs: [
          [
            "Die anatomische Architektur der Vögel ist kompromisslos auf Gewichtsreduktion und aerodynamische Effizienz optimiert.",
            "Pneumatisierte Röhrenknochen und ein hochentwickeltes Luftsacksystem ermöglichen selbst unter extremen Flugbelastungen einen unidirektionalen, hocheffizienten Gasaustausch.",
          ],
          [
            "Greifvögel wie [der Adler, -|der Steinadler] nutzen thermische Aufwinde, um mit minimalem metabolischem Aufwand stundenlang über ihrem Revier zu segeln.",
          ],
          [
            "Die bioakustische Analyse von Vogelstimmen (Syrinx-Modulation) offenbart komplexe Dialekte und dient in der modernen Ökologie als Indikator für Habitatqualität.",
          ],
        ],
      },
    },
  },

  reptilien_und_amphibien: {
    description:
      "Reptilien, Amphibien, Schlangen, Eidechsen, Schildkröten, Frösche, Kaulquappen und Kröten.",
    details: "Herpetologie, Wechselwärme, Häutung, Metamorphose, Laich und Schuppen (A1–B2)",
    arabicDescription:
      "الزواحف والبرمائيات (Reptilien und Amphibien): طائفة الزواحف (Reptil)، البرمائيات (Amphibie)، الثعبان والأفعى (Schlange)، السحلية (Eidechse)، السلحفاة (Schildkröte)، التمساح (Krokodil)، الضفدع (Frosch)، العلجوم (Kröte)، السمندل، الشراغف (Kaulquappe)، والجلد الحرشفي وذوات الدم البارد (wechselwarm).",
    words: [
      {
        german: "das Kriechtier (Reptil), -e",
        arabic: "الحيوان الزاحف (ذو الحراشف)",
        english: "reptile",
        example: "Reptilien legen meist Eier mit lederartiger Schale an sonnigen Plätzen ab.",
      },
      {
        german: "die Amphibie, -n",
        arabic: "الحيوان البرمائي (يعيش في الماء واليابسة)",
        english: "amphibian",
        example: "Amphibien wie Frösche und Molche benötigen feuchte Gewässer zur Fortpflanzung.",
      },
      {
        german: "die Schlange, -n",
        arabic: "الثعبان / الأفعى / الحية",
        english: "snake",
        example:
          "Die ungiftige Ringelnatter ist eine scheue Schlange, die gerne im Wasser schwimmt.",
      },
      {
        german: "die Eidechse, -n",
        arabic: "السحلية الرشيقة",
        english: "lizard",
        example: "Auf der warmen Steinmauer sonnt sich eine flinke grüne Eidechse.",
      },
      {
        german: "die Schildkröte, -n",
        arabic: "السلحفاة ذات الدرع الواقي",
        english: "turtle, tortoise",
        example: "Die uralte Schildkröte zieht bei Gefahr ihren Kopf in den harten Panzer zurück.",
      },
      {
        german: "das Krokodil, -e",
        arabic: "التمساح المفترس",
        english: "crocodile",
        example: "Im schlammigen Fluss lauert das Krokodil regungslos auf Beute.",
      },
      {
        german: "der Frosch, -̈e",
        arabic: "الضفدع",
        english: "frog",
        example: "Im Gartenteich quaken die grünen Frösche im Sommer ein lautes Konzert.",
      },
      {
        german: "die Kröte, -n",
        arabic: "العلجوم (ضفدع الطين ذو الجلد الثؤلولي)",
        english: "toad",
        example: "Im Frühjahr wandern tausende Erdkröten über Straßen zu ihren Laichgewässern.",
      },
      {
        german: "der Feuersalamander, -",
        arabic: "السمندل الناري الأسود ذو البقع الصفراء",
        english: "fire salamander",
        example: "Der auffällig gelb-schwarz gefleckte Feuersalamander lebt im feuchten Laubwald.",
      },
      {
        german: "die Kaulquappe, -n",
        arabic: "الشرغوف (يرقة الضفدع المائية ذات الذيل)",
        english: "tadpole",
        example: "Aus dem Froschlaich schlüpfen kleine Kaulquappen, die mit Kiemen atmen.",
      },
      {
        german: "wechselwarm (Adj.)",
        arabic: "من ذوات الدم البارد (تتغير حرارتها مع البيئة)",
        english: "cold-blooded, poikilothermic",
        example: "Da Reptilien wechselwarm sind, müssen sie sich morgens in der Sonne aufwärmen.",
      },
      {
        german: "die Schuppenhaut (Sg.)",
        arabic: "الجلد الحرشفي القرني الواقي",
        english: "scaly skin",
        example: "Die trockene Schuppenhaut schützt Schlangen vor dem Austrocknen an Land.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Tiere am Teich",
        intro: "Einfache Sätze über Frösche, Schildkröten und Echsen (A1).",
        paragraphs: [
          [
            "Am kleinen Teich im Garten sitzt [der Frosch, -̈e|ein grüner Frosch].",
            "Er springt mit weiten Sätzen ins kühle Wasser.",
            "Im Wasser schwimmt [die Kaulquappe, -n|eine winzige Kaulquappe].",
          ],
          [
            "Auf einem Stein sonnt sich [die Schildkröte, -n|eine Schildkröte].",
            "Sie hat einen festen Panzer auf dem Rücken.",
            "An der Mauer läuft [die Eidechse, -n|eine schnelle Eidechse].",
          ],
          ["Diese Tiere lieben die warme Sonne."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Krötenwanderung im Frühling",
        intro: "Wechselwarme Tiere, Krötenzäune und Feuersalamander (A2).",
        paragraphs: [
          [
            "Sobald die Nächte im März milder werden, erwachen die Amphibien aus der Winterstarre.",
            "Weil sie [wechselwarm (Adj.)|wechselwarm] sind, können sie ihre Körpertemperatur nicht selbst regeln.",
          ],
          [
            "Tausende Tiere wandern zu Teichen: Vor allem [die Kröte, -n|die dicke Kröte] muss oft gefährliche Straßen überqueren.",
            "Freiwillige Helfer bauen Schutzzäune und tragen die Tiere in Eimern sicher über den Asphalt.",
            "Im schattigen Bergwald entdeckte ich gestern [der Feuersalamander, -|einen seltenen Feuersalamander] mit gelben Punkten.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Metamorphose und biologische Anpassung",
        intro: "Vom Wasser ans Land, Häutung und Schuppen (B1).",
        paragraphs: [
          [
            "Die Metamorphose der Amphibien veranschaulicht den evolutionären Schritt vom Wasserbewohner zum Landwirbeltier im Zeitraffer.",
            "Aus [die Kaulquappe, -n|einer fischähnlichen Kaulquappe] mit Kiemen und Ruderschwanz entwickelt sich durch hormonelle Steuerung ein lungenatmender [der Frosch, -̈e|Frosch].",
          ],
          [
            "Reptilien hingegen haben sich durch ihre wasserundurchlässige [die Schuppenhaut (Sg.)|Schuppenhaut] vollständig vom Wasser emanzipiert.",
          ],
          [
            "Um wachsen zu können, streift manche [die Schlange, -n|Schlange] regelmäßig ihre alte Hornschicht bei der Häutung als 'Natternhemd' ab.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Herpetologie, Amphibiensterben und ektotherme Thermoregulation",
        intro: "Chytridpilz (Bd/Bsal), Poikilothermie und Amnioten-Evolution (B2).",
        paragraphs: [
          [
            "In der Herpetologie stellt das globale Amphibiensterben durch den anthropogen verschleppten Chytridpilz (Batrachochytrium dendrobatidis) eine katastrophale Krise dar.",
            "Da Amphibien über ihre hochpermeable Haut atmen und osmoregulieren, zerstört der Pilzbefall vitale Elektrolythaushalte.",
          ],
          [
            "Ektotherme Organismen steuern ihren Stoffwechsel über Verhaltensweisen (Heliothermie bei [die Eidechse, -n|Eidechsen]), was sie vulnerabel für Temperaturverschiebungen macht.",
          ],
          [
            "Die Entstehung des Amnioten-Eies bei [das Kriechtier (Reptil), -e|Reptilien] vor über dreihundert Millionen Jahren bildete die Voraussetzung für die Besiedlung arider Kontinentalräume.",
          ],
        ],
      },
    },
  },

  fische: {
    description:
      "Fische, Flossen, Kiemen, Schuppen, Lachse, Forellen, Haie und Süß- und Salzwasserfische.",
    details:
      "Ichthyologie, Unterwasseratmung, Schwimmblase, Meeresfauna und Fischwanderung (A1–B2)",
    arabicDescription:
      "الأسماك وعالم البحار (Fische): طائفة الأسماك (Fisch)، الزعانف (Flosse)، الخياشيم للتنفس (Kieme)، الحراشف والقشور (Schuppe)، حسك وعظام السمك (Gräte)، سمك السلمون (Lachs)، سمك التراوت المرقط (Forelle)، سمك القرش (Hai)، الرنجة، أحواض السمك (Aquarium)، أسماك المياه العذبة، وأسماك المياه المالحة.",
    words: [
      {
        german: "der Fisch, -e",
        arabic: "السمكة",
        english: "fish",
        example: "Im klaren Bergsee schwimmt ein kleiner Fisch blitzschnell am Ufer entlang.",
      },
      {
        german: "die Flosse, -n",
        arabic: "زعنفة السمكة للسباحة والتوجيه",
        english: "fin (fish)",
        example: "Mit kräftigen Schlägen der Schwanzflosse schießt der Fisch durch das Wasser.",
      },
      {
        german: "die Kieme, -n",
        arabic: "الخيشوم لاستخلاص الأكسجين من الماء",
        english: "gill (fish)",
        example: "Durch die seitlichen Kiemen filtern Fische gelösten Sauerstoff aus dem Wasser.",
      },
      {
        german: "die Fischschuppe, -n",
        arabic: "قشرة وحرشفة جلد السمكة",
        english: "fish scale",
        example: "Die glatten Fischschuppen reflektieren das Licht silbern wie Metall.",
      },
      {
        german: "die Fischgräte, -n",
        arabic: "حسكة وعظمة السمك الرفيعة",
        english: "fishbone",
        example: "Vorsicht beim Essen von gebratenem Fisch vor spitzen Fischgräten.",
      },
      {
        german: "der Lachs, -e",
        arabic: "سمك السلمون الوردي",
        english: "salmon",
        example:
          "Lachse wandern tausende Kilometer flussaufwärts, um an ihren Geburtsorten zu laichen.",
      },
      {
        german: "die Forelle, -n",
        arabic: "سمك التراوت (السلمون المرقط في الجداول)",
        english: "trout",
        example: "In sauberen, sauerstoffreichen Bächen fängt der Angler eine Bachforelle.",
      },
      {
        german: "der Hai, -e",
        arabic: "سمك القرش المفترس",
        english: "shark",
        example: "Der weiße Hai besitzt ein Revolvergebiss mit rasiermesserscharfen Zähnen.",
      },
      {
        german: "der Hering, -e",
        arabic: "سمك الرنجة في بحر الشمال",
        english: "herring",
        example: "Heringe schwimmen in riesigen Schwärmen durch die kühlen Gewässer der Nordsee.",
      },
      {
        german: "das Aquarium, Aquarien",
        arabic: "حوض تربية الأسماك الزجاجي",
        english: "aquarium",
        example: "Im beleuchteten Aquarium schwimmen bunte Guppys zwischen grünen Wasserpflanzen.",
      },
      {
        german: "der Süßwasserfisch, -e",
        arabic: "سمك المياه العذبة (في الأنهار والبحيرات)",
        english: "freshwater fish",
        example: "Karpfen und Hechte sind typische Süßwasserfische mitteleuropäischer Flüsse.",
      },
      {
        german: "der Salzwasserfisch, -e",
        arabic: "سمك المياه المالحة (في البحار والمحيطات)",
        english: "saltwater fish, marine fish",
        example: "Thunfische und Makrelen sind schnelle Salzwasserfische des offenen Ozeans.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Fische im Wasser",
        intro: "Einfache Sätze über Fische, Flossen und Schwimmen (A1).",
        paragraphs: [
          [
            "Im blauen See schwimmt [der Fisch, -e|ein schöner Fisch].",
            "Er hat keine Beine, aber bewegliche [die Flosse, -n|Flossen].",
            "Unter Wasser atmet er mit [die Kieme, -n|den Kiemen].",
          ],
          [
            "Sein Körper glänzt mit [die Fischschuppe, -n|silbernen Fischschuppen].",
            "In meinem Zimmer habe ich [das Aquarium, Aquarien|ein kleines Aquarium] mit bunten Fischen.",
            "Ich gebe ihnen jeden Tag etwas Futter.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vom Fluss ins offene Meer",
        intro: "Forellen im Bergbach, Lachswanderung und Haie (A2).",
        paragraphs: [
          [
            "Letzten Sommer machten wir Urlaub an einem Gebirgsfluss in Bayern.",
            "Im kristallklaren Wasser beobachtete ich [die Forelle, -n|eine gepunktete Forelle], die geduldig gegen die Strömung schwamm.",
          ],
          [
            "Später besuchten wir ein Meeresmuseum: Dort lernten wir den Unterschied zwischen [der Süßwasserfisch, -e|einem Süßwasserfisch] und [der Salzwasserfisch, -e|einem Salzwasserfisch].",
            "Besonders spektakulär war das Becken, in dem [der Hai, -e|ein großer Hai] ruhig seine Runden zog.",
            "Auch die faszinierende Reise, die [der Lachs, -e|der Lachs] vom Ozean zurück in die Heimatflüsse macht, begeisterte mich.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Ichthyologie und der Schutz mariner Lebensräume",
        intro: "Knorpelfische, Schwarmverhalten und Überfischung der Meere (B1).",
        paragraphs: [
          [
            "Fische stellen die artenreichste Wirbeltiergruppe unseres Planeten dar und besiedeln nahezu alle aquatischen Nischen.",
            "Während Knochenfische eine gasgefüllte Schwimmblase zur Tarierung nutzen, müssen Knorpelfische wie [der Hai, -e|Haie] ständig in Bewegung bleiben.",
          ],
          [
            "Im offenen Meer schließen sich Fische wie [der Hering, -e|der Hering] zu gigantischen Schwärmen zusammen, um Fressfeinde durch koordinierte Ausweichmanöver zu verwirren.",
          ],
          [
            "Die weltweite Überfischung und zerstörerische Grundschleppnetze gefährden jedoch die biologische Regeneration mariner Populationen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Osmoregulation, Katadromie und marine Nahrungsketten",
        intro: "Anadrome Wanderungen, Gegenstromprinzip der Kiemen und Meeresökologie (B2).",
        paragraphs: [
          [
            "Die physiologische Osmoregulation unterscheidet Süß- von Salzwasserfischen fundamental.",
            "Während marine Fische kontinuierlich Meerwasser trinken und Salze aktiv über [die Kieme, -n|die Kiemenepithelien] ausscheiden, müssen limnische Arten Wasseransammlungen über hypotonen Harn eliminieren.",
          ],
          [
            "Anadrome Wanderfische wie [der Lachs, -e|Lachse] vollziehen während ihrer Migration eine biochemische Umprogrammierung ihrer Kiemenchloride.",
          ],
          [
            "Anthropogene Querbauwerke (Wasserkraftwerke, Wehre) zerschneiden diese Laichwanderrouten, weshalb der Rückbau von Barrieren und Fischtreppen für den Artenschutz unumgänglich ist.",
          ],
        ],
      },
    },
  },

  insekten_und_spinnen: {
    description:
      "Insekten, Spinnen, Bienen, Ameisen, Schmetterlinge, Spinnennetze, Fühler und Bestäubung.",
    details:
      "Entomologie, Arachnologie, Exoskelett, Metamorphose, Honigbienen und Insektensterben (A1–B2)",
    arabicDescription:
      "الحشرات والعناكب (Insekten und Spinnen): فصيلة الحشرات (Insekt)، العناكب (Spinne)، خيوط وشبكة العنكبوت (Spinnennetz)، النحلة (Biene)، النمل (Ameise)، الفراشة (Schmetterling)، البعوض (Mücke)، الذباب (Fliege)، الدعسوقة (Marienkäfer)، الدبور (Wespe)، قرون الاستشعار (Fühler)، وتلقيح الأزهار (bestäuben).",
    words: [
      {
        german: "das Insekt, -en",
        arabic: "الحشرة سداسية الأرجل",
        english: "insect",
        example: "Insekten sind die artenreichste Tierklasse auf unserem Planeten.",
      },
      {
        german: "die Spinne, -n",
        arabic: "العنكبوت ثماني الأرجل",
        english: "spider",
        example: "Die Spinne webt im Tau des Morgens ein kunstvolles geometrisches Netz.",
      },
      {
        german: "das Spinnennetz, -e",
        arabic: "شبكة وخيوط بيت العنكبوت الحريرية",
        english: "spiderweb, spider web",
        example: "Kleine Tautropfen glitzerten wie Perlen im feinen Spinnennetz.",
      },
      {
        german: "die Biene, -n",
        arabic: "النحلة المنتجة للعسل والملقحة للزهور",
        english: "bee, honeybee",
        example: "Ohne die fleißige Biene gäbe es im Sommer kaum Äpfel oder Kirschen.",
      },
      {
        german: "die Ameise, -n",
        arabic: "النملة النشيطة",
        english: "ant",
        example: "Eine winzige Ameise kann das Vielfache ihres eigenen Körpergewichts tragen.",
      },
      {
        german: "der Schmetterling, -e",
        arabic: "الفراشة الزاهية الألوان",
        english: "butterfly",
        example: "Ein bunter Schmetterling flatterte lautlos von einer Blüte zur nächsten.",
      },
      {
        german: "die Mücke, -n",
        arabic: "البعوضة والناموسة",
        english: "mosquito, gnat",
        example: "In lauen Sommernächten am See sticht manche lästige Mücke in die Haut.",
      },
      {
        german: "die Stubenfliege, -n",
        arabic: "الذبابة المنزلية",
        english: "housefly, fly",
        example: "Die Stubenfliege surrte unruhig vor der geschlossenen Fensterscheibe.",
      },
      {
        german: "der Marienkäfer, -",
        arabic: "الدعسوقة (أم علي) الحمراء المنقطة",
        english: "ladybug, ladybird",
        example: "Der rote Marienkäfer mit sieben schwarzen Punkten gilt als Glücksbringer.",
      },
      {
        german: "die Wespe, -n",
        arabic: "الدبور والنحلة الصفراء المخططة",
        english: "wasp",
        example: "Im Spätsommer naschen hungrige Wespen gern am süßen Pflaumenkuchen.",
      },
      {
        german: "der Fühler, -",
        arabic: "قرن الاستشعار لدى الحشرات",
        english: "antenna, feeler",
        example:
          "Mit zwei langen Fühlern auf dem Kopf tastet und riecht das Insekt seine Umgebung.",
      },
      {
        german: "bestäuben",
        arabic: "يلقّح الزهور والأشجار المثمرة",
        english: "to pollinate",
        example: "Hummeln und Wildbienen bestäuben Nutzpflanzen und sichern die weltweite Ernte.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Kleine Tiere auf der Wiese",
        intro: "Einfache Sätze über Bienen, Ameisen und Schmetterlinge (A1).",
        paragraphs: [
          [
            "Auf der Wiese krabbeln viele kleine Tiere.",
            "Hier fliegt [die Biene, -n|eine gelbe Biene] von Blume zu Blume.",
            "Ein bunter [der Schmetterling, -e|Schmetterling] tanzt in der warmen Luft.",
          ],
          [
            "Am Boden marschiert [die Ameise, -n|eine fleißige Ameise] mit einem kleinen Blatt.",
            "In der Ecke baut [die Spinne, -n|eine Spinne] [das Spinnennetz, -e|ein Spinnennetz].",
            "Auf meinem Finger sitzt [der Marienkäfer, -|ein roter Marienkäfer] mit sieben Punkten.",
          ],
          ["Auch kleine Tiere sind sehr nützlich."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fleißige Helfer im Apfelgarten",
        intro: "Bestäubung von Blüten, Insektenfühler und Ameisenhaufen (A2).",
        paragraphs: [
          [
            "Im Frühling blühten die Apfelbäume in unserem Obstgarten wunderschön weiß.",
            "Überall summten Honigbienen und Wildbienen, um die Blüten zu [bestäuben|bestäuben].",
          ],
          [
            "Jedes [das Insekt, -en|Insekt] besitzt sechs Beine und zwei feine [der Fühler, -|Fühler] am Kopf zum Riechen.",
            "Im Wald entdeckten wir einen riesigen Ameisenhaufen, in dem hunderttausende Ameisen zusammenlebten.",
            "Ohne Insekten gäbe es im Herbst keine Äpfel auf den Bäumen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Ökologische Schlüsselfunktion und das Insektensterben",
        intro: "Bestäubungsleistung, Nahrungsketten und Artenschutzmaßnahmen (B1).",
        paragraphs: [
          [
            "Insekten bilden das unersetzliche Fundament terrestrischer Nahrungsnetze.",
            "Als Bestäuber sichern Honigbienen, Hummeln und Schwebfliegen über siebzig Prozent der landwirtschaftlichen Nutzpflanzenerträge weltweit.",
          ],
          [
            "Der dramatische Rückgang der Insektenbiomasse durch Pestizideinsatz und Monokulturen alarmiert die Wissenschaft.",
          ],
          [
            "Auch [die Spinne, -n|Spinnen] leisten einen unverzichtbaren Beitrag: Mit ihren elastischen [das Spinnennetz, -e|Spinnennetzen] halten sie Schädlinge wie Mücken und Fliegen auf natürliche Weise in Schach.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Entomologie, Eusozialität und Chitin-Exoskelette",
        intro: "Superorganismen, Chitinstrukturen und biozönotische Gleichgewichte (B2).",
        paragraphs: [
          [
            "Die strukturelle Stabilität von [das Insekt, -en|Insekten] basiert auf einem leichten, aber extrem widerstandsfähigen Chitin-Exoskelett.",
            "In der Entomologie fasziniert besonders das Phänomen der Eusozialität bei Hautflüglern: Ameisen- und Bienenkolonien operieren als hochentwickelte Superorganismen mit arbeitsteiliger Kastenordnung und Pheromon-Kommunikation.",
          ],
          [
            "Spinnenseide, aus der [die Spinne, -n|Arachniden] ihr [das Spinnennetz, -e|Spinnennetz] konstruieren, übertrifft synthetischen Stahl an Reißfestigkeit und Dehnbarkeit um ein Vielfaches.",
          ],
          [
            "Der Schutz von Insektenhabitaten über Blühstreifen und Pestizidreduktion ist eine conditio sine qua non für die Stabilität globaler Agrarökosysteme.",
          ],
        ],
      },
    },
  },
};

const enPath = "src/data/vocabulary/erde-und-natur.json";
const enData = JSON.parse(fs.readFileSync(enPath, "utf8"));

for (const sec of enData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(enData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + "\n", "utf8");
console.log("Batch 3 successfully saved to erde-und-natur.json!");
