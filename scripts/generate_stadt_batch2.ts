import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  der_kiosk: {
    description:
      "Kiosk, Trinkhalle, Büdchen, Zeitungen, Süßigkeiten, Feierabendbier und Veedel-Kultur.",
    details: "Kioskkultur im Ruhrgebiet und Rheinland, Treffpunkt, Späti in Berlin (A1–B2)",
    arabicDescription:
      "الكشك وثقافة الحي (Der Kiosk): مفردات الكشك (Kiosk/Trinkhalle/Büdchen)، الجرائد اليومية (Tageszeitung)، المجلات، كيس الحلوى المشكل (gemischte Tüte)، بيرة نهاية الدوام (Feierabendbier)، وثقافة 'الشباتي' (Späti) في برلين وكولونيا كنقطة التقاء لأهل الحي.",
    words: [
      {
        german: "der Kiosk, -e",
        arabic: "الكشك / كشك بيع الصحف والمشروبات",
        english: "kiosk, newsstand, corner shop",
        example:
          "An der Straßenecke versorgt der kleine Kiosk die Nachbarschaft mit Zeitungen und Kaffee.",
      },
      {
        german: "die Trinkhalle, -n",
        arabic: "كشك المشروبات التراثي (في حوض الرور)",
        english: "beverage kiosk, traditional pavilion",
        example:
          "Im Ruhrgebiet gehört der Besuch an der Trinkhalle fest zur traditionellen Alltagskultur.",
      },
      {
        german: "das Büdchen, -",
        arabic: "الكشك الشعبي الصغير (في كولونيا والراين)",
        english: "small corner kiosk (Rhineland)",
        example: "In Köln trifft man sich nach der Arbeit am Büdchen für ein kühles Kölsch.",
      },
      {
        german: "die Tageszeitung, -en",
        arabic: "الجريدة اليومية الصباحية",
        english: "daily newspaper",
        example: "Mein Großvater kauft sich jeden Morgen seine gewohnte Tageszeitung am Kiosk.",
      },
      {
        german: "die Zeitschrift, -en",
        arabic: "المجلة الدورية الملونة",
        english: "magazine, periodical",
        example:
          "Am Zeitungsständer hängt eine große Auswahl an Zeitschriften über Mode und Technik.",
      },
      {
        german: "die gemischte Tüte, -n",
        arabic: "كيس الحلوى المشكل حسب الطلب",
        english: "mixed bag of sweets/candy",
        example: "Kinder bestellen am Fensterschalter glücklich eine gemischte Tüte für zwei Euro.",
      },
      {
        german: "der Kaugummi, -s",
        arabic: "العلكة / اللبان",
        english: "chewing gum",
        example: "Vor dem Kiosk steht ein mechanischer Automat für bunte Kaugummis.",
      },
      {
        german: "das Feierabendbier, -e",
        arabic: "بيرة ما بعد انتهاء الدوام والعمل",
        english: "after-work beer",
        example:
          "Die Bauarbeiter trinken vor dem Kiosk gemeinsam ihr wohlverdientes Feierabendbier.",
      },
      {
        german: "der Treffpunkt, -e",
        arabic: "نقطة ومكان اللقاء في الحي",
        english: "meeting point, hangout",
        example:
          "Der Kiosk fungiert im Quartier als zentraler sozialer Treffpunkt für Jung und Alt.",
      },
      {
        german: "das Kleingeld (Sg.)",
        arabic: "الفكة والنقود المعدنية الصغيرة",
        english: "small change, coins",
        example: "Haben Sie das Geld passend oder soll ich Ihnen das Kleingeld herausgeben?",
      },
      {
        german: "der Kioskbesitzer, -",
        arabic: "صاحب ومدير الكشك",
        english: "kiosk owner",
        example: "Der freundliche Kioskbesitzer kennt fast alle Stammkunden beim Vornamen.",
      },
      {
        german: "der Kiez, -e",
        arabic: "الحي الشعبي التقليدي (خاصة في برلين)",
        english: "neighborhood, local quarter",
        example: "Im lebendigen Berliner Kiez hat der Spätkauf rund um die Uhr geöffnet.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Am Kiosk an der Ecke",
        intro: "Einfache Sätze über Kiosk, Zeitungen, Süßigkeiten und Kleingeld (A1).",
        paragraphs: [
          [
            "An der Ecke unserer Straße steht ein kleiner [der Kiosk, -e|Kiosk].",
            "Dort kaufe ich mir einen fruchtigen [der Kaugummi, -s|Kaugummi] und eine Flasche Wasser.",
            "Mein Vater kauft morgens die frische [die Tageszeitung, -en|Tageszeitung].",
            "Der Verkäufer nimmt mein [das Kleingeld (Sg.)|Kleingeld] und lächelt freundlich.",
          ],
          [
            "Für meine kleine Schwester gibt es [die gemischte Tüte, -n|eine gemischte Tüte] mit bunten Bonbons.",
            "Vor dem Kiosk stehen oft Nachbarn und sprechen über das Wetter.",
            "Der Kiosk ist immer nah und hat fast alles, was man schnell braucht.",
            "Es ist schön, so einen kleinen Laden im Viertel zu haben.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Büdchen und Spätis: Das Herz der Nachbarschaft",
        intro: "Rheinische Büdchenkultur und Berliner Spätis nach Feierabend (A2).",
        paragraphs: [
          [
            "In Städten wie Köln, Düsseldorf oder Dortmund hat der Kiosk eine ganz besondere Bedeutung.",
            "Im Rheinland nennt man den kleinen Laden liebevoll [das Büdchen, -|Büdchen], im Ruhrgebiet heißt er [die Trinkhalle, -n|Trinkhalle].",
            "Nach einem anstrengenden Arbeitstag trinken viele Kollegen vor dem Fenster ein kühles [das Feierabendbier, -e|Feierabendbier].",
            "In Berlin heißen diese Läden 'Spätis' und haben oft bis tief in die Nacht geöffnet.",
          ],
          [
            "Jeder [der Kioskbesitzer, -|Kioskbesitzer] weiß genau, was in seiner Nachbarschaft passiert.",
            "Der kleine Kiosk ist ein unverzichtbarer [der Treffpunkt, -e|Treffpunkt] für alle Menschen im ganzen [der Kiez, -e|Kiez].",
            "Man holt sich noch schnell eine Illustrierte oder [die Zeitschrift, -en|Zeitschrift] für das Wochenende.",
            "Diese kleinen Verkaufsstellen halten das soziale Leben im Stadtteil lebendig.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kioskkultur als immaterielles Kulturgut der Metropolregionen",
        intro: "Vom Trinkhallen-Ursprung im Bergbau zum Berliner Späti-Kult (B1).",
        paragraphs: [
          [
            "Die Geschichte der deutschen Kioskkultur ist eng mit der industriellen Revolution des 19. Jahrhunderts verknüpft.",
            "Ursprünglich wurden Trinkhallen im Ruhrgebiet von Städten und Zechenbetreibern gefördert, um den Bergarbeitern sauberes, kohlensäurehaltiges Mineralwasser als gesunde Alternative zum billigen Branntwein anzubieten.",
            "Im Laufe der Jahrzehnte wandelte sich [die Trinkhalle, -n|die Trinkhalle] zum pulsierenden Mikrokosmos des Reviers, an dem Schichtarbeiter Neuigkeiten austauschten.",
          ],
          [
            "In Köln wurde [das Büdchen, -|das Büdchen] zum identitätsstiftenden Element der Veedelskultur erklärt und 2020 sogar in das Landesinventar des immateriellen Kulturerbes von Nordrhein-Westfalen aufgenommen.",
            "In Berlin wiederum etablierte sich der 'Spätkauf' als urbane Oase für Nachtschwärmer, wo man rund um die Uhr [das Feierabendbier, -e|Feierabendbier] und Snacks erstehen kann.",
          ],
          [
            "Trotz rechtlicher Auseinandersetzungen über das sonntägliche Verkaufsverbot behaupten diese Institutionen ihren Platz als unverzichtbarer sozialer [der Treffpunkt, -e|Treffpunkt].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Urbane Soziologie des 'Dritten Ortes': Mikroökonomie des Kiosks",
        intro: "Soziologie nach Ray Oldenburg, Ladenöffnungsgesetze und Quartiersresilienz (B2).",
        paragraphs: [
          [
            "In der Stadtsoziologie fungiert [der Kiosk, -e|der Kiosk] par excellence als das, was Ray Oldenburg als 'Third Place' (Dritten Ort) jenseits von privatem Wohnraum und Erwerbsarbeit definierte.",
            "Er zeichnet sich durch Niederschwelligkeit, soziale Nivellierung und spontane, zwanglose Kommunikation aus, die soziale Kohäsion im heterogenen [der Kiez, -e|Kiez] stiftet.",
          ],
          [
            "Mikroökonomisch operiert der Betreiber in einer extrem fragilen Nische:",
            "Durch die Konkurrenz von Supermärkten mit ausgedehnten Öffnungszeiten basiert die Marge primär auf Convenience-Aufschlägen für Tabak, Alkoholika und Spontankäufe außerhalb regulärer Handelszeiten.",
          ],
          [
            "Rechtlich kollidiert diese Praxis permanent mit den rigiden Vorgaben der Landesladenschlussgesetze und des Feiertagsrechts.",
            "Juristische Auseinandersetzungen um Sonntagsöffnungen illustrieren das Spannungsverhältnis zwischen historischem Arbeitnehmerschutz und den flexiblen Versorgungsbedürfnissen einer postindustriellen 24-Stunden-Metropole.",
          ],
        ],
      },
    },
  },
  cafes_und_bars: {
    description:
      "Straßencafé, Kneipe, Bar, Theke, Kellner, Stammgast, Happy Hour, Trinkgeld und gesellige Abende.",
    details:
      "Gastronomiekultur, Biergärten, Kneipensterben, Bartresen und Trinkgeld-Knigge (A1–B2)",
    arabicDescription:
      "المقاهي والحانات (Cafés und Bars): مفردات مقهى الرصيف (Straßencafé)، الحانة التقليدية (Kneipe)، البار (Bar)، طاولة المشروبات (Theke/Tresen)، النادل (Kellner)، الزبون الدائم (Stammgast)، الإكرامية (Trinkgeld)، وساعة العروض (Happy Hour).",
    words: [
      {
        german: "das Straßencafé, -s",
        arabic: "مقهى الرصيف في الهواء الطلق",
        english: "sidewalk cafe, pavement cafe",
        example: "Bei sonnigem Wetter sind alle Tische vor dem Straßencafé schnell besetzt.",
      },
      {
        german: "die Kneipe, -n",
        arabic: "الحانة الشعبية التقليدية",
        english: "pub, tavern, local bar",
        example:
          "Die urige Kneipe an der Ecke hat Holzvertäfelung und serviert frisch gezapftes Bier.",
      },
      {
        german: "die Bar, -s",
        arabic: "البار العصري للمشروبات والكوكتيلات",
        english: "bar, cocktail bar",
        example: "In der schicken Cocktail-Bar mixt der Barkeeper Drinks zu entspannter Jazzmusik.",
      },
      {
        german: "die Theke, -n",
        arabic: "طاولة تقديم المشروبات (البار/الكونتوار)",
        english: "bar counter",
        example: "Einige Gäste trinken ihr Bier am liebsten direkt an der Theke im Stehen.",
      },
      {
        german: "der Kellner, -",
        arabic: "النادل / الجرسون في المطعم والمقهى",
        english: "waiter",
        example:
          "Der aufmerksame Kellner bringt die Speisekarte und nimmt die Getränkebestellung auf.",
      },
      {
        german: "der Stammgast, -̈e",
        arabic: "الزبون الدائم المعتاد على المكان",
        english: "regular customer, regular patron",
        example: "Der Wirt weiß genau, was sein treuer Stammgast trinken möchte, ohne zu fragen.",
      },
      {
        german: "die Happy Hour, -s",
        arabic: "ساعة التخفيضات والعروض الخاصة",
        english: "happy hour",
        example:
          "Während der Happy Hour von achtzehn bis zwanzig Uhr kosten alle Cocktails die Hälfte.",
      },
      {
        german: "das Trinkgeld, -er",
        arabic: "الإكرامية / البقشيش تقديراً للخدمة",
        english: "tip, gratuity",
        example: "In Deutschland gibt man bei gutem Service etwa fünf bis zehn Prozent Trinkgeld.",
      },
      {
        german: "die Bestellung, -en",
        arabic: "الطلب المأخوذ من الزبون",
        english: "order (restaurant/bar)",
        example: "Die Kellnerin tippt die Bestellung zügig in ihr mobiles Kassengerät ein.",
      },
      {
        german: "die Atmosphäre, -n",
        arabic: "الأجواء والمزاج العام للمكان",
        english: "atmosphere, ambiance",
        example: "Kerzenlicht und leise Musik schaffen eine wunderbar gemütliche Atmosphäre.",
      },
      {
        german: "gesellig",
        arabic: "مؤنس واجتماعي وممتع",
        english: "sociable, convivial",
        example: "Wir haben einen herrlich geselligen Abend mit Freunden im Gasthaus verbracht.",
      },
      {
        german: "aufrunden (rundete auf, hat aufgerundet)",
        arabic: "يجبر المبلغ لأقرب رقم صحيح عند دفع البقشيش",
        english: "to round up (the bill)",
        example:
          "Die Rechnung lautet auf 18,20 Euro und der Gast sagt: 'Machen Sie bitte zwanzig Euro!'",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein sonniger Tag im Café",
        intro: "Einfache Sätze über Café, Kellner, Kaffee trinken und Trinkgeld (A1).",
        paragraphs: [
          [
            "Die Sonne scheint warm und ich sitze draußen vor [das Straßencafé, -s|dem Straßencafé].",
            "Ein freundlicher [der Kellner, -|Kellner] kommt an unseren Tisch.",
            "Ich bestelle einen Cappuccino und meine Freundin möchte einen Eistee.",
            "Er bringt die Getränke schnell und wünscht uns einen schönen Tag.",
          ],
          [
            "Die Musik ist leise und [die Atmosphäre, -n|die Atmosphäre] ist sehr angenehm.",
            "Beim Bezahlen gebe ich dem Kellner zwei Euro [das Trinkgeld, -er|Trinkgeld].",
            "Wir sitzen zwei Stunden dort und unterhalten uns fröhlich.",
            "Ein Besuch im Café bringt Entspannung und Freude.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Treffen in der Kneipe",
        intro: "Traditionelle deutsche Kneipenkultur, Theke, Stammgäste und Aufrunden (A2).",
        paragraphs: [
          [
            "Am Freitagabend verabreden wir uns gern in einer gemütlichen [die Kneipe, -n|Kneipe] in der Altstadt.",
            "Dort trifft man viele Nachbarn und [der Stammgast, -̈e|Stammgäste], die seit Jahrzehnten herkommen.",
            "Manche Leute sitzen lieber direkt an [die Theke, -n|der Theke] und unterhalten sich mit dem Wirt.",
            "Die Runde ist immer sehr [gesellig|gesellig] und es wird viel gelacht.",
          ],
          [
            "In einer modernen [die Bar, -s|Bar] gibt es am frühen Abend oft [die Happy Hour, -s|eine Happy Hour] für günstige Drinks.",
            "Wenn wir die Rechnung bekommen, pflegen wir die Summe höflich mit Trinkgeld zu [aufrunden (rundete auf, hat aufgerundet)|aufrunden].",
            "Es gehört in Deutschland zum guten Ton, guten Service angemessen zu belohnen.",
            "Gemeinsame Abende in Lokalen stärken Freundschaften und bringen Menschen zusammen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Trinkgeldkultur und das Phänomen des Kneipensterbens",
        intro:
          "Der deutsche Trinkgeld-Knigge 'Stimmt so!' und der soziokulturelle Wandel der Schankwirtschaften (B1).",
        paragraphs: [
          [
            "Die Trinkgeldpraxis im deutschsprachigen Raum folgt ungeschriebenen, aber fest etablierten gesellschaftlichen Ritualen.",
            "Anders als in den USA, wo Trinkgelder als 'Tip' das Haupteinkommen der Servicekräfte ausmachen, ist die Bedienung im deutschen Endpreis per Gesetz bereits inkludiert.",
            "Gleichwohl gilt es als unhöflich, auf das [das Trinkgeld, -er|Trinkgeld] komplett zu verzichten: Üblich sind fünf bis zehn Prozent des Rechnungsbetrages, signalisiert durch die lapidare Formulierung 'Stimmt so!' oder gezieltes [aufrunden (rundete auf, hat aufgerundet)|Aufrunden].",
          ],
          [
            "Gleichzeitig blickt die traditionelle Schankwirtschaft auf eine dramatische Krise zurück: Das sogenannte 'Kneipensterben' hat in den letzten zwei Jahrzehnten Zehntausende Betriebe ausgelöscht.",
            "Verändertes Freizeitverhalten jüngerer Generationen, das Nichtraucherschutzgesetz und steigende Betriebskosten führten zum Verschwinden der klassischen Eck-[die Kneipe, -n|Kneipe].",
          ],
          [
            "An ihre Stelle treten trendige Craft-Beer-Bars, Shisha-Lounges und spezialisierte Cafés, die sich an ein urbanes, lifestyle-orientiertes Publikum richten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gastrosophie der Geselligkeit, Habitusformen und Gaststättenrecht",
        intro: "Soziologie nach Bourdieu, Sperrstundenregelung und die Gaststättenverordnung (B2).",
        paragraphs: [
          [
            "Aus kultursoziologischer Perspektive nach Pierre Bourdieu spiegeln gastronomische Räume wie [die Kneipe, -n|Kneipen], [die Bar, -s|Bars] oder mondäne [das Straßencafé, -s|Straßencafés] feinste Distinktionsmechanismen sozialen und kulturellen Kapitals wider.",
            "Während die traditionelle Arbeiterkneipe egalitäre Solidarität und informelle Kommunikation über die [die Theke, -n|Theke] zelebrierte, dienen moderne Szene-Bars als Arenen visueller Selbstdarstellung und des geschmacklichen Habitus.",
          ],
          [
            "Gewerberechtlich unterliegt der Betrieb von Schankwirtschaften strengen Vorgaben des Gaststättengesetzes (GastG) bezüglich Konzessionierung, Lärmschutz und sanitärer Infrastruktur.",
          ],
          [
            "Die sukzessive Liberalisierung oder gar Abschaffung der traditionellen Sperrstunde in Großstädten ermöglichte erst die Entstehung pulsierender Nachtökonomien, löst jedoch permanente Nutzungskonflikte zwischen Gastronomen und lärmempfindlichen Anwohnern in verdichteten Wohnquartieren aus.",
          ],
        ],
      },
    },
  },
  sehenswuerdigkeiten: {
    description:
      "Sehenswürdigkeit, Denkmal, Schloss, Burg, Dom, Rathaus, Museum, Stadtführung und UNESCO-Welterbe.",
    details: "Kulturtourismus, historische Baudenkmäler, Welterbestätten und Museumspässe (A1–B2)",
    arabicDescription:
      "المعالم السياحية والتاريخية (Sehenswürdigkeiten): مفردات المعلم السياحي (Sehenswürdigkeit)، النصب التذكاري (Denkmal)، القصر والقلعة (Schloss/Burg)، الكاتدرائية (Dom)، دار البلدية التاريخي (Rathaus)، المتحف (Museum)، الجولة الإرشادية (Stadtführung)، ومواقع التراث العالمي لليونسكو (UNESCO-Welterbe).",
    words: [
      {
        german: "die Sehenswürdigkeit, -en",
        arabic: "المعلم السياحي الجدير بالمشاهدة",
        english: "sight, tourist attraction",
        example:
          "Das Brandenburger Tor in Berlin ist die berühmteste Sehenswürdigkeit ganz Deutschlands.",
      },
      {
        german: "das Denkmal, -̈er",
        arabic: "النصب والتمثال التذكاري التاريخي",
        english: "monument, memorial",
        example: "Auf dem Marktplatz steht ein bronzenes Denkmal für Johann Wolfgang von Goethe.",
      },
      {
        german: "das Schloss, -̈er",
        arabic: "القصر الملكي الفاخر",
        english: "palace, stately home",
        example:
          "Das Schloss Neuschwanstein in Bayern diente als Vorbild für das Disney-Märchenschloss.",
      },
      {
        german: "die Burg, -en",
        arabic: "القلعة والحصن التاريخي العسكري",
        english: "castle, fortress",
        example:
          "Die mittelalterliche Burg thront uneinnehmbar auf dem steilen Felsen über dem Fluss.",
      },
      {
        german: "der Dom, -e",
        arabic: "الكاتدرائية الكبرى الشاهقة",
        english: "cathedral",
        example:
          "Der Kölner Dom mit seinen zwei mächtigen Türmen lockt jährlich Millionen Besucher an.",
      },
      {
        german: "das Rathaus, -̈er",
        arabic: "دار ومبنى البلدية التاريخي",
        english: "town hall, city hall",
        example:
          "Im historischen Rathaus tagt der Stadtrat und empfängt internationale Ehrengäste.",
      },
      {
        german: "das Museum, Museen",
        arabic: "المتحف الفني والتاريخي",
        english: "museum",
        example: "Auf der Museumsinsel in Berlin kann man weltberühmte antike Schätze bewundern.",
      },
      {
        german: "die Stadtführung, -en",
        arabic: "الجولة الإرشادية السياحية في المدينة",
        english: "guided city tour",
        example:
          "Während der Stadtführung erfahren die Touristen spannende Geschichten aus dem Mittelalter.",
      },
      {
        german: "der Reiseleiter, -",
        arabic: "المرشد السياحي ومرافق الرحلة",
        english: "tour guide",
        example:
          "Der sachkundige Reiseleiter erklärt die Architektur des barocken Bauwerks ausführlich.",
      },
      {
        german: "das UNESCO-Welterbe (Sg.)",
        arabic: "موقع التراث العالمي لمنظمة اليونسكو",
        english: "UNESCO World Heritage site",
        example:
          "Die historische Altstadt von Bamberg gehört seit 1993 zum anerkannten UNESCO-Welterbe.",
      },
      {
        german: "besichtigen (besichtigte, hat besichtigt)",
        arabic: "يزور ويتفقد المعالم الأثرية",
        english: "to visit, tour, sightsee",
        example: "Morgen wollen wir die prächtigen Säle der königlichen Residenz besichtigen.",
      },
      {
        german: "historisch",
        arabic: "تاريخي وأثري قديم",
        english: "historic, historical",
        example: "Der historische Stadtkern verzaubert mit engen Gassen und Kopfsteinpflaster.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Touristen in Berlin",
        intro: "Einfache Sätze über Sehenswürdigkeiten, Schloss, Dom und Museum (A1).",
        paragraphs: [
          [
            "Ich mache Urlaub in Deutschland und besuche viele schöne Orte.",
            "In der Stadt gibt es fast an jeder Ecke eine tolle [die Sehenswürdigkeit, -en|Sehenswürdigkeit].",
            "Wir stehen vor der Kirche und bewundern den großen [der Dom, -e|Dom].",
            "Mitten auf dem Platz steht ein altes [das Denkmal, -̈er|Denkmal] aus Stein.",
          ],
          [
            "Am Nachmittag besuchen wir ein berühmtes [das Museum, Museen|Museum] mit bunten Bildern.",
            "Morgen fahren wir mit dem Bus und möchten ein altes [das Schloss, -̈er|Schloss] [besichtigen (besichtigte, hat besichtigt)|besichtigen].",
            "Deutschland hat viele [historisch|historische] Gebäude.",
            "Die Reise ist sehr interessant und ich mache viele Fotos.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Eine Stadtführung durch die Altstadt",
        intro: "Rathaus, Stadtführer und Burgen am Flussufer erleben (A2).",
        paragraphs: [
          [
            "Gestern haben wir an einer geführten [die Stadtführung, -en|Stadtführung] durch Heidelberg teilgenommen.",
            "Unser erfahrener [der Reiseleiter, -|Reiseleiter] führte uns zuerst zum gotischen [das Rathaus, -̈er|Rathaus].",
            "Er erzählte uns von den Bürgern, die im Mittelalter hier Handel trieben.",
            "Hoch über den Dächern sahen wir die berühmte alte [die Burg, -en|Burg] mit ihren dicken Mauern.",
          ],
          [
            "Der Reiseleiter erklärte uns stolz, dass viele deutsche Bauwerke zum geschützten [das UNESCO-Welterbe (Sg.)|UNESCO-Welterbe] gehören.",
            "Wir hatten zwei Stunden Zeit, um die alte Brücke und die Universität zu besichtigen.",
            "Geschichte wird lebendig, wenn man vor den echten Monumenten der Vergangenheit steht.",
            "Es war ein lehrreicher und unvergesslicher Nachmittag.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kulturtourismus und Erinnerungskultur in Deutschland",
        intro:
          "Vom Kölner Dom zur Straße der Romanik: Denkmalschutz und historische Verantwortung (B1).",
        paragraphs: [
          [
            "Deutschland rangiert mit über fünfzig eingetragenen Stätten unter den Ländern mit den meisten Eintragungen auf der Liste des [das UNESCO-Welterbe (Sg.)|UNESCO-Welterbes].",
            "Das Spektrum reicht von monumentalen Sakralbauten wie dem Aachener oder Kölner [der Dom, -e|Dom] über die Schlösserlandschaft von Potsdam bis hin zum industriellen Erbe der Zeche Zollverein im Ruhrgebiet.",
            "Für den Kulturtourismus bilden diese Monumente die ökonomische Lebensader ganzer Regionen.",
          ],
          [
            "Zugleich ist die Betrachtung historischer Monumente in Deutschland untrennbar mit einer tiefgreifenden Erinnerungskultur verwoben.",
            "Ein [das Denkmal, -̈er|Denkmal] fungiert im öffentlichen Raum selten als unkritische Heldenverehrung, sondern als Mahnmal für Frieden, Demokratie und die Aufarbeitung totalitärer Diktaturen.",
          ],
          [
            "Wer ein [historisch|historisches] Ensemble besucht, erlebt daher stets die dialektische Versöhnung von architektonischer Schönheit und kritischer historischer Reflexion.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Overtourism, Heritage Management und touristische Tragfähigkeit",
        intro: "Belastungsgrenzen historischer Stätten, Denkmalpflege und visitor guidance (B2).",
        paragraphs: [
          [
            "Das zeitgenössische Heritage Management historischer Zentren balanciert permanent auf dem schmalen Grat zwischen denkmalpflegerischer Konservierung und touristischer Inwertsetzung.",
            "Ikonische Monumente wie das [das Schloss, -̈er|Schloss] Neuschwanstein oder das historische [das Rathaus, -̈er|Rathaus] in Rothenburg ob der Tauber stoßen regelmäßig an die Grenzen ihrer physischen und ökologischen Tragfähigkeit (Carrying Capacity).",
          ],
          [
            "Das Phänomen des 'Overtourism' erfordert innovative Visitor-Guidance-Strategien: Mittels digitaler Zeitfenstertickets, dynamischer Besucherlenkung und Virtual-Reality-Inszenierungen wird der Andrang entzerrt, um irreversible Abnutzungen an historischer Bausubstanz zu unterbinden.",
          ],
          [
            "Gleichzeitig stipuliert die ICOMOS-Charta die Authentizität und Integrität als fundamentale Kriterien für jedes [das UNESCO-Welterbe (Sg.)|UNESCO-Welterbe].",
            "Dies untersagt historisierende Rekonstruktionen ohne stichhaltige archäologische Evidenz und etabliert das professionelle [besichtigen (besichtigte, hat besichtigt)|Besichtigen] als differenzierten Bildungsakt in einer globalisierten Erlebnisgesellschaft.",
          ],
        ],
      },
    },
  },
  die_architektur: {
    description:
      "Architektur, Fassade, Wolkenkratzer, Fachwerkhaus, Gotik, Barock, Bauhaus, Kuppel und Denkmalschutz.",
    details: "Architekturstile, Baugeschichte, Walter Gropius, Statik und Stadtentwicklung (A1–B2)",
    arabicDescription:
      "الهندسة المعمارية وفن البناء (Die Architektur): مفردات الهندسة المعمارية (Architektur)، الواجهة (Fassade)، ناطحة السحاب (Wolkenkratzer)، البيوت الخشبية التراثية (Fachwerkhaus)، الطراز القوطي (Gotik)، الباروك (Barock)، مدرسة الباوهاوس (Bauhaus)، وحماية التراث المعماري (Denkmalschutz).",
    words: [
      {
        german: "die Architektur, -en",
        arabic: "الهندسة المعمارية وفن تصميم المباني",
        english: "architecture",
        example:
          "Die deutsche Architektur spiegelt die Epochen vom Mittelalter bis zur Moderne wider.",
      },
      {
        german: "die Fassade, -n",
        arabic: "الواجهة الخارجية للمبنى",
        english: "facade",
        example:
          "Die reich verzierte Fassade des Renaissance-Gebäudes wurde aufwendig restauriert.",
      },
      {
        german: "der Wolkenkratzer, -",
        arabic: "ناطحة السحاب الشاهقة",
        english: "skyscraper",
        example: "In der Finanzmetropole Frankfurt ragen gläserne Wolkenkratzer in den Himmel.",
      },
      {
        german: "das Fachwerkhaus, -̈er",
        arabic: "البيت الخشبي التراثي الألماني (فاشفيرك)",
        english: "half-timbered house",
        example:
          "Ein historisches Fachwerkhaus mit sichtbaren Holzbalken prägt das Bild vieler Altstädte.",
      },
      {
        german: "die Gotik (Sg.)",
        arabic: "الطراز القوطي المعماري بأقواسه المدببة",
        english: "Gothic style",
        example:
          "Die Gotik zeichnet sich durch spitzbogige Fenster, hohe Gewölbe und filigrane Pfeiler aus.",
      },
      {
        german: "der Barock (Sg.)",
        arabic: "طراز الباروك المعماري الفخم",
        english: "Baroque style",
        example:
          "Im Barock gestalteten Fürsten prunkvolle Schlösser mit goldenem Stuck und riesigen Gärten.",
      },
      {
        german: "das Bauhaus (Sg.)",
        arabic: "طراز ومدرسة الباوهاوس الشهيرة",
        english: "Bauhaus style",
        example:
          "Das Bauhaus revolutionierte das Design durch schlichte Formen und funktionale Klarheit.",
      },
      {
        german: "der Denkmalschutz (Sg.)",
        arabic: "قانون وهيئة حماية التراث والآثار المعمارية",
        english: "historic preservation, monument protection",
        example:
          "Das alte Gebäude steht unter strengem Denkmalschutz und darf nicht abgerissen werden.",
      },
      {
        german: "der Grundriss, -e",
        arabic: "المخطط الهندسي الأفقي للمبنى",
        english: "floor plan, layout",
        example: "Der Architekt zeichnet den Grundriss der neuen Wohnung mit exakten Maßangaben.",
      },
      {
        german: "die Kuppel, -n",
        arabic: "القبة المعمارية المستديرة",
        english: "dome, cupola",
        example:
          "Die gläserne Kuppel auf dem Berliner Reichstagsgebäude ist ein Meisterwerk der Statik.",
      },
      {
        german: "der Torbogen, -̈",
        arabic: "القوس الحجري للبوابة",
        english: "archway, arch",
        example: "Durch den massiven Torbogen aus Sandstein gelangt man in den ruhigen Innenhof.",
      },
      {
        german: "zeitgenössisch",
        arabic: "معاصر وحديث الطراز",
        english: "contemporary",
        example:
          "Zeitgenössische Architektur kombiniert nachhaltige Baumaterialien wie Holz mit Solartechnik.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Alte und neue Häuser",
        intro: "Einfache Sätze über alte Holzhäuser, hohe Türme und Fenster (A1).",
        paragraphs: [
          [
            "In der Stadt sehe ich viele verschiedene Häuser.",
            "In der Altstadt steht ein altes [das Fachwerkhaus, -̈er|Fachwerkhaus] aus dunklem Holz.",
            "Die [die Fassade, -n|Fassade] ist bunt bemalt und hat kleine Fenster.",
            "Daneben steht eine alte Kirche mit spitzem Dach.",
          ],
          [
            "Am Hauptbahnhof sieht die Stadt ganz anders aus.",
            "Dort steht ein riesiger [der Wolkenkratzer, -|Wolkenkratzer] aus Glas und Stahl.",
            "Oben auf dem Regierungsgebäude glänzt eine runde [die Kuppel, -n|Kuppel].",
            "Jedes Gebäude zeigt eine andere [die Architektur, -en|Architektur].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Spaziergang durch die Baustile",
        intro: "Gotik, Barock und die moderne Bauhaus-Architektur in Deutschland (A2).",
        paragraphs: [
          [
            "Wer mit offenen Augen durch deutsche Städte geht, kann eine Reise durch die Geschichte erleben.",
            "Die Kathedralen aus der Epoche [die Gotik (Sg.)|der Gotik] haben schmale, hohe Fenster und mächtige Türme.",
            "Später baute man im prachtvollen [der Barock (Sg.)|Barock] festliche Schlösser mit prunkvollen Gärten.",
            "Durch einen großen [der Torbogen, -̈|Torbogen] betritt man oft den herrschaftlichen Schlosshof.",
          ],
          [
            "Im zwanzigsten Jahrhundert erfand Walter Gropius [das Bauhaus (Sg.)|das Bauhaus] in Weimar und Dessau.",
            "Dieser moderne Stil verzichtet auf allen Schnickschnack und setzt auf gerade Linien und viel Licht.",
            "Heute stehen viele historische Häuser unter [der Denkmalschutz (Sg.)|Denkmalschutz], damit sie für immer erhalten bleiben.",
            "Die Mischung aus Tradition und Moderne macht deutsche Städte so reizvoll.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom Fachwerk zur Bauhaus-Moderne: Deutschlands baukulturelles Erbe",
        intro:
          "Baukunst im Wandel: Regionales Fachwerk, Backsteingotik und die Dessauer Moderne (B1).",
        paragraphs: [
          [
            "Die Baukultur in Deutschland ist geprägt durch ein faszinierendes Spannungsfeld regionaler Bautraditionen und avantgardistischer Umbrüche.",
            "In mitteldeutschen Kleinstädten wie Quedlinburg oder Rothenburg zeugen Tausende dicht aneinandergereihte [das Fachwerkhaus, -̈er|Fachwerkhäuser] von mittelalterlicher Zimmermannskunst, bei der tragende Holzskelette mit Lehm-Stroh-Gemischen ausgefacht wurden.",
            "Im Norden dominierte hingegen die monumentale Backsteingotik mit ihren roten Ziegelkirchen.",
          ],
          [
            "Im Jahr 1919 leitete die Gründung der Kunstschule [das Bauhaus (Sg.)|des Bauhauses] durch Walter Gropius eine weltweite Revolution ein.",
            "Nach dem radikalen Leitsatz 'Form follows function' (Die Form folgt der Funktion) wurden ornamentale Fassadendekorationen verworfen zugunsten kubischer Klarheit, industrieller Vorfertigung und transparenter Glasvorhangfassaden.",
          ],
          [
            "Heute stehen Architekten vor der Herausforderung, [zeitgenössisch|zeitgenössische] Neubauten harmonisch mit geschützten Bestandsbauten unter [der Denkmalschutz (Sg.)|Denkmalschutz] in Einklang zu bringen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Tektonik, Dekonstruktivismus und energetische Bestandstransformation",
        intro:
          "Tragwerkslehre, thermische Hüllenoptimierung und die Philosophie von Norman Foster (B2).",
        paragraphs: [
          [
            "Die Tektonik zeitgenössischer Architektur vollzieht eine dialektische Synthese aus statischer Tragwerksoptimierung und skulpturaler Ästhetik.",
            "Ein paradigmatisches Beispiel stellt die von Sir Norman Foster entworfene begehbare gläserne [die Kuppel, -n|Kuppel] des Berliner Reichstagsgebäudes dar:",
            "Sie fungiert nicht bloß als semiotisches Monument demokratischer Transparenz, sondern agiert als thermodynamisches Belüftungs- und Tageslichtumlenkungssystem für das darunterliegende Plenarsaalplenum.",
          ],
          [
            "Im urbanen Diskurs erfordert der Klimawandel eine radikale Abkehr vom primären Neubau hin zur zirkulären Bestandstransformation (Cradle-to-Cradle).",
            "Architekten optimieren die thermische Hülle denkmalgeschützter [die Fassade, -n|Fassaden] mittels diffusionsoffener Innendämmungen, um bauphysikalische Tauwasserschäden zu vermeiden.",
          ],
          [
            "Gleichzeitig ersetzt computergestütztes Building Information Modeling (BIM) den zweidimensionalen [der Grundriss, -e|Grundriss] durch multidimensionale Datenmodelle, welche den gesamten Lebenszyklus und Rückbaupotenziale von Baumaterialien prädiktiv abbilden.",
          ],
        ],
      },
    },
  },
  park_und_spielplatz: {
    description:
      "Stadtpark, Grünanlage, Spielplatz, Parkbank, Schaukel, Rutsche, Sandkasten, Wippe und Erholung.",
    details: "Urbane Naherholung, Spielplatzgeräte, Biodiversität und Freizeitgestaltung (A1–B2)",
    arabicDescription:
      "الحديقة وملعب الأطفال (Park und Spielplatz): مفردات حديقة المدينة (Stadtpark)، ملعب الأطفال (Spielplatz)، مقعد الحديقة (Parkbank)، الأرجوحة (Schaukel)، الزحليقة (Rutsche)، صندوق الرمل (Sandkasten)، لعبة الميزان (Wippe)، مروج التشميس (Liegewiese)، والاستجمام (Erholung).",
    words: [
      {
        german: "der Stadtpark, -s",
        arabic: "حديقة المدينة العامة والمسطح الأخضر",
        english: "city park, public park",
        example: "Der weitläufige Stadtpark ist die grüne Lunge der dicht besiedelten Großstadt.",
      },
      {
        german: "der Spielplatz, -̈e",
        arabic: "ملعب وساحة ألعاب الأطفال",
        english: "playground",
        example: "Nachmittags toben die glücklichen Kinder ausgelassen auf dem Spielplatz im Park.",
      },
      {
        german: "die Parkbank, -̈e",
        arabic: "مقعد الحديقة الخشبي للجلوس",
        english: "park bench",
        example: "Ein älteres Ehepaar sitzt auf der sonnigen Parkbank und füttert die Vögel.",
      },
      {
        german: "die Schaukel, -n",
        arabic: "الأرجوحة المعلقة (المرجوحة)",
        english: "swing",
        example: "Das kleine Mädchen schaukelt auf der Schaukel hoch hinauf in den blauen Himmel.",
      },
      {
        german: "die Rutsche, -n",
        arabic: "الزحليقة / الزلاقة",
        english: "slide",
        example: "Die Kinder sausen mit großem Gelächter die geschwungene Rutsche hinab.",
      },
      {
        german: "der Sandkasten, -̈",
        arabic: "صندوق الرمل للعب الصغار",
        english: "sandbox, sandpit",
        example:
          "Mit Eimerchen und Schaufel bauen die Kleinkinder riesige Sandburgen im Sandkasten.",
      },
      {
        german: "die Wippe, -n",
        arabic: "لعبة الميزان التوازنية (السيسو)",
        english: "seesaw",
        example:
          "Zwei Freunde sitzen sich auf der bunten hölzernen Wippe gegenüber und wippen auf und ab.",
      },
      {
        german: "die Liegewiese, -n",
        arabic: "مرج العشب الأخضر للاستلقاء والتشميس",
        english: "sunbathing lawn, open grass area",
        example: "Im Sommer breiten die Studenten bunte Decken auf der gepflegten Liegewiese aus.",
      },
      {
        german: "der Ententeich, -e",
        arabic: "بركة البط المائية في الحديقة",
        english: "duck pond",
        example:
          "Am ruhigen Ententeich schwimmen Enten und Schwäne friedlich zwischen den Seerosen.",
      },
      {
        german: "spazieren gehen (ging spazieren, ist spazieren gegangen)",
        arabic: "يتنزه ويمشي بهدوء للاستجمام",
        english: "to go for a walk, stroll",
        example: "Nach dem Mittagessen wollen wir eine halbe Stunde im Grünen spazieren gehen.",
      },
      {
        german: "das Klettergerüst, -e",
        arabic: "هيكل وإطار التسلق للأطفال",
        english: "climbing frame, jungle gym",
        example:
          "Mutige Kinder klettern geschickt bis zur Spitze auf das hohe Klettergerüst aus Seilen.",
      },
      {
        german: "die Erholung (Sg.)",
        arabic: "الراحة والاستجمام واستعادة الطاقة",
        english: "recreation, relaxation",
        example: "Spaziergänge in der Natur schenken Körper und Geist wohltuende Erholung.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein Nachmittag auf dem Spielplatz",
        intro: "Einfache Sätze über Park, Spielplatz, Schaukel und Sandkasten (A1).",
        paragraphs: [
          [
            "Die Sonne scheint und wir gehen in den großen [der Stadtpark, -s|Stadtpark].",
            "Im Park gibt es einen tollen [der Spielplatz, -̈e|Spielplatz] für alle Kinder.",
            "Ich laufe schnell zu der [die Schaukel, -n|Schaukel] und schaukele ganz hoch.",
            "Mein kleiner Bruder sitzt im [der Sandkasten, -̈|Sandkasten] und baut eine Burg aus Sand.",
          ],
          [
            "Danach klettern wir die Treppe hoch und rutschen auf der [die Rutsche, -n|Rutsche].",
            "Meine Großeltern sitzen auf einer bequemen [die Parkbank, -̈e|Parkbank] und schauen uns zu.",
            "Dort drüben schwimmen Enten auf dem kleinen [der Ententeich, -e|Ententeich].",
            "Der Nachmittag im Park macht der ganzen Familie viel Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Frühling im Stadtpark",
        intro: "Spaziergänge im Grünen, Liegewiese und Klettern auf dem Spielplatz (A2).",
        paragraphs: [
          [
            "Wenn der Frühling beginnt, zieht es alle Menschen ins Grüne.",
            "Nach einem langen Tag im Büro gehe ich gern im Stadtpark [spazieren gehen (ging spazieren, ist spazieren gegangen)|spazieren].",
            "Auf der weiten [die Liegewiese, -n|Liegewiese] liegen Jugendliche auf Decken, lesen Bücher oder spielen Frisbee.",
            "Zwei Kinder lachen laut auf der [die Wippe, -n|Wippe], während andere das Seil-[das Klettergerüst, -e|Klettergerüst] erklimmen.",
          ],
          [
            "Grüne Parks sind unverzichtbar für die tägliche [die Erholung (Sg.)|Erholung] in einer lauten Metropole.",
            "Bäume und Blumen spenden Schatten und filtern die schmutzige Luft der Straßen.",
            "Hier kann man tief durchatmen und neue Energie für die Woche tanken.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Volksgarten-Tradition und der Englische Garten in München",
        intro: "Geschichte öffentlicher Parkanlagen und TÜV-geprüfte Spielplatzsicherheit (B1).",
        paragraphs: [
          [
            "Parkanlagen in Deutschland blicken auf eine bedeutende sozialhistorische Entwicklung zurück.",
            "Waren herrschaftliche Gärten im Absolutismus dem Adel vorbehalten, öffnete Kurfürst Karl Theodor 1789 den Englischen Garten in München als einen der ersten Volksparks Europas für die Allgemeinheit.",
            "Bis heute strömen im Sommer Hunderttausende auf die legendäre [die Liegewiese, -n|Liegewiese] oder beobachten Surfer auf der Eisbachwelle.",
          ],
          [
            "In deutschen Städten gelten zudem weltweit einmalige Sicherheitsstandards für den [der Spielplatz, -̈e|Spielplatz]: Gemäß der europäischen Norm DIN EN 1176 müssen Spielgeräte wie [die Schaukel, -n|Schaukel], [die Rutsche, -n|Rutsche] und [das Klettergerüst, -e|Klettergerüst] regelmäßig durch den TÜV auf Fallhöhen, Dämpfungsböden und Fangstellen inspiziert werden.",
          ],
          [
            "Als grüne Oasen garantieren Parks nicht nur Kinderspaß, sondern leisten als Kaltluftschneisen einen unverzichtbaren Beitrag zum urbanen Mikroklima.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Urbane Ökosystemdienstleistungen, Mikroklima und Biophilie-Hypothese",
        intro:
          "Kaltluftentstehung, Evapotranspiration von Grünflächen und psychoneuroimmunologische Erholung (B2).",
        paragraphs: [
          [
            "Im Zeitalter fortschreitender Versiegelung fungiert [der Stadtpark, -s|der Stadtpark] als lebenswichtiger Erbringer urbaner Ökosystemdienstleistungen (Urban Ecosystem Services).",
            "Durch die Evapotranspiration von Großbäumen und Rasenflächen kühlen städtische Grünzüge die Umgebungstemperatur gegenüber aufgeheizten Asphaltflächen um bis zu fünf Grad Celsius ab und unterdrücken den 'Urban Heat Island'-Effekt.",
          ],
          [
            "Psychoneuroimmunologische Studien bestätigen die von Edward O. Wilson postulierte Biophilie-Hypothese:",
            "Bereits ein zwanzigminütiger Aufenthalt im naturnahen Raum senkt den Speichelcortisolspiegel, normalisiert den Blutdruck und forciert zerebrale Erholungsprozesse (Attention Restoration Theory).",
          ],
          [
            "Gleichzeitig fordern moderne Freiraumplaner die Überwindung normierter Monofunktionalität zugunsten inklusiver Mehrgenerationenparks:",
            "Taktile Barrierefreiheit, naturnahe Matsch- und Wildniszonen im [der Sandkasten, -̈|Sandkasten] sowie Biodiversitätskorridore am [der Ententeich, -e|Ententeich] harmonisieren menschliche [die Erholung (Sg.)|Erholung] mit artenschützender Stadtökologie.",
          ],
        ],
      },
    },
  },
};

const isPath = "src/data/vocabulary/in-der-stadt.json";
const isData = JSON.parse(fs.readFileSync(isPath, "utf8"));

for (const sec of isData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(isData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(isPath, JSON.stringify(isData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to in-der-stadt.json!");
