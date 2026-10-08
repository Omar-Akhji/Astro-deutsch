import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  gefluegel: {
    description: "Hähnchen, Pute, Ente, Gans und Geflügelzubereitung.",
    details: "Geflügelarten, Teilstücke und Zubereitung (A1–B2)",
    arabicDescription:
      "الدواجن (Geflügel): مفردات الدجاج (Hähnchen)، الديك الرومي (Pute)، البط (Ente)، الإوز (Gans)، قطع اللحم كفخذ وصدر الدجاج، وطرق الطهي والشواء مع التركيز على السلامة الغذائية.",
    words: [
      {
        german: "das Geflügel (Sg.)",
        arabic: "الدواجن وطيور اللحم",
        english: "poultry",
        example: "Geflügel liefert mageres Eiweiß und ist in der leichten Küche sehr beliebt.",
      },
      {
        german: "das Hähnchen, -",
        arabic: "الدجاجة / لحم الدجاج",
        english: "chicken",
        example: "Auf dem Wochenmarkt kauft sie ein ganzes frisches Hähnchen zum Grillen.",
      },
      {
        german: "die Hähnchenbrust, -̈e",
        arabic: "صدر الدجاج",
        english: "chicken breast",
        example: "Die zarte Hähnchenbrust wird in Olivenöl mit Rosmarin angebraten.",
      },
      {
        german: "die Hähnchenkeule, -n",
        arabic: "فخذ الدجاج",
        english: "chicken leg, drumstick",
        example: "Die knusprig gebackene Hähnchenkeule schmeckt mit Kartoffelsalat hervorragend.",
      },
      {
        german: "das Putenschnitzel, -",
        arabic: "شريحة لحم الرومي / الحبش",
        english: "turkey cutlet",
        example: "Das magere Putenschnitzel ist schnell in der Pfanne zubereitet.",
      },
      {
        german: "die Ente, -n",
        arabic: "البطة / لحم البط",
        english: "duck",
        example: "Im Winter serviert das Restaurant knusprige Ente mit Rotkohl und Klößen.",
      },
      {
        german: "die Gans, -̈e",
        arabic: "الإوزة",
        english: "goose",
        example: "Zu Weihnachten brät die Familie traditionell eine gefüllte Gans im Ofen.",
      },
      {
        german: "der Flügel, -",
        arabic: "جناح الطائر",
        english: "wing",
        example: "Gewürzte Hähnchenflügel werden bei hoher Hitze im Backofen kross gebraten.",
      },
      {
        german: "braten (brät, briet, hat gebraten)",
        arabic: "يقلي / يشوي في الفرن أو المقلاة",
        english: "to roast, fry",
        example:
          "Man muss das Geflügelfleisch vollständig durchbraten, um Salmonellen zu vermeiden.",
      },
      {
        german: "knusprig",
        arabic: "مقرمش ومحمص",
        english: "crispy, crunchy",
        example: "Die Haut des Brathähnchens muss goldbraun und herrlich knusprig sein.",
      },
      {
        german: "marinieren (marinierte, hat mariniert)",
        arabic: "ينقع في التتبيلة",
        english: "to marinate",
        example:
          "Er mariniert das Putenfleisch mehrere Stunden in Joghurt und orientalischen Gewürzen.",
      },
      {
        german: "das Fleischthermometer, -",
        arabic: "مقياس حرارة نضج اللحم",
        english: "meat thermometer",
        example: "Mit dem Fleischthermometer prüft der Koch die Kerntemperatur der Weihnachtsgans.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein leckeres Hähnchen kochen",
        intro: "Einfache Sätze über Geflügel, Einkaufen und die Zubereitung in der Küche (A1).",
        paragraphs: [
          [
            "Heute gehe ich zum Markt und kaufe frisches [das Geflügel (Sg.)|Geflügel].",
            "Ich möchte ein ganzes [das Hähnchen, -|Hähnchen] für meine Familie kochen.",
            "Meine Schwester isst lieber magere [die Hähnchenbrust, -̈e|Hähnchenbrust], aber mein Bruder liebt die saftige [die Hähnchenkeule, -n|Hähnchenkeule].",
            "Das Fleisch muss frisch und sauber riechen.",
          ],
          [
            "In der Küche würze ich das Fleisch mit Salz, Paprika und Pfeffer.",
            "Dann werde ich das Huhn im Ofen [braten (brät, briet, hat gebraten)|braten].",
            "Nach einer Stunde ist die Haut schön [knusprig|knusprig] und braun.",
            "Alle sitzen am Tisch und das Essen schmeckt allen sehr gut.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Sonntagsessen mit Geflügel",
        intro: "Zubereitung von Putenschnitzel und Entenbrust mit praktischen Kochtipps (A2).",
        paragraphs: [
          [
            "Am Sonntag koche ich gern etwas Besonderes, weil meine Großeltern zu Besuch kommen.",
            "Im Supermarkt kaufe ich frisches [das Putenschnitzel, -|Putenschnitzel] und für die Festtage im Dezember bestellen wir eine [die Gans, -̈e|Gans] beim Bauern.",
            "Bevor ich das Putenfleisch zubereite, werde ich es mit Knoblauch, Zitrone und Kräutern [marinieren (marinierte, hat mariniert)|marinieren].",
            "Dadurch bleibt das helle Fleisch beim Anbraten in der Pfanne besonders zart und aromatisch.",
          ],
          [
            "Mein Vater mag auch gern gebratene [die Ente, -n|Ente], die er am liebsten mit Klößen und Rotkohl isst.",
            "Beim Kochen von Geflügel muss man sehr vorsichtig sein, damit das Fleisch immer gut durchgegart ist.",
            "Wenn die Haut richtig [knusprig|knusprig] ist, nimmt man das Fleisch vorsichtig heraus und serviert es heiß.",
            "Dazu trinken wir Mineralwasser und genießen das gemeinsame Beisammensein am Esstisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Festtagskultur und Geflügelgerichte",
        intro:
          "Traditionelle Geflügelgerichte in Mitteleuropa und hygienische Standards bei der Zubereitung (B1).",
        paragraphs: [
          [
            "In der mitteleuropäischen Küche spielt [das Geflügel (Sg.)|Geflügel] sowohl im Alltag als auch bei festlichen Bräuchen eine herausragende Rolle.",
            "Während unter der Woche schnelle Gerichte wie gebratenes [das Putenschnitzel, -|Putenschnitzel] oder gedämpfte [die Hähnchenbrust, -̈e|Hähnchenbrust] dominieren, verlangen Festtage nach aufwendigeren Rezepten.",
            "Vor allem um den Martinstag und zu Weihnachten gehört eine knusprig gefüllte [die Gans, -̈e|Gans] mit Apfel-Zwiebel-Füllung und Majoran zu den Höhepunkten der bürgerlichen Tafelfreuden.",
          ],
          [
            "Die kulinarische Zubereitung erfordert Geduld und technisches Geschick: Man muss die Gans über Stunden bei moderater Temperatur [braten (brät, briet, hat gebraten)|braten] und regelmäßig mit Bratensaft begießen.",
            "Ein präzises [das Fleischthermometer, -|Fleischthermometer] hilft dabei, den Garzustand exakt im Kern zu bestimmen, ohne das Fleisch auszutrocknen.",
            "Auch beim Braten einer [die Ente, -n|Ente] kommt es auf das richtige Entfetten und eine abschließend extrem [knusprig|knusprige] Haut an.",
          ],
          [
            "Zugleich gewinnt das Bewusstsein für Tierwohl und nachhaltige Geflügelzucht in der Bevölkerung zunehmend an Bedeutung.",
            "Verbraucher greifen immer häufiger zu Bio-Geflügel aus Freilandhaltung, bei dem die Tiere artgerecht gefüttert werden und langsamer heranwachsen.",
            "Dieser bewusste Konsum verbessert nicht nur den ökologischen Fußabdruck, sondern spiegelt sich auch in einem unvergleichlich intensiveren Geschmackserlebnis wider.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Geflügelgastronomie: Qualitätskriterien und Küchentechnik",
        intro:
          "Gastronomische Abhandlung über Rassen, Garverfahren und sensorische Balance von Geflügel (B2).",
        paragraphs: [
          [
            "In der gehobenen Gastronomie offenbart [das Geflügel (Sg.)|Geflügel] eine bemerkenswerte sensorische Bandbreite, die weit über das herkömmliche Masthuhn hinausreicht.",
            "Renommierte Spitzenköche setzen vermehrt auf alte französische oder regionale Rassen wie das Bresse-Huhn oder das Perlhuhn, deren Fleischstruktur durch intramuskuläre Fetteinlagerungen besticht.",
            "Eine zart pochierte [die Hähnchenbrust, -̈e|Hähnchenbrust] wird häufig im Sous-Vide-Verfahren pasteurisiert, um eine unvergleichliche Saftigkeit zu konservieren, bevor sie kurz geflämmt wird.",
          ],
          [
            "Hingegen verlangen wassergebundene Geflügelarten wie [die Ente, -n|Ente] oder [die Gans, -̈e|Gans] aufgrund ihres hohen Fettgehalts unter der Epidermis nach einer völlig anderen Küchenlogik.",
            "Hier gilt es, durch kontrolliertes langsames Auslassen des Fetts und anschließendes scharfes [braten (brät, briet, hat gebraten)|Braten] eine perfekt [knusprig|knusprige] Kruste zu kreieren, während das Fleisch rosa und saftig bleibt.",
            "Kulinarische Puristen verzichten dabei auf übermäßige Gewürzmischungen und beschränken sich darauf, die Teilstücke schonend zu [marinieren (marinierte, hat mariniert)|marinieren] und mit reduzierten Fonds zu glasieren.",
          ],
          [
            "Aus ernährungsphysiologischer Sicht stellt mageres Geflügelfleisch eine exzellente Proteinquelle dar, die reich an essenziellen Aminosäuren, Zink und B-Vitaminen ist.",
            "Gleichwohl verlangt die lebensmittelrechtliche Sorgfaltspflicht kompromisslose Küchenhygiene: Getrennte Schneidebretter und lückenlose Kühlketten sind unabdingbar, um mikrobiologische Kontaminationen verlässlich zu unterbinden.",
          ],
        ],
      },
    },
  },
  fisch: {
    description: "Süß- und Salzwasserfische, Filets, Fischzubereitung und Räucherfisch.",
    details: "Fischarten, Garverfahren und maritime Frische (A1–B2)",
    arabicDescription:
      "الأسماك (Fisch): مفردات أسماك المياه العذبة والمالحة كالسلمون (Lachs)، الترويت (Forelle)، القد (Kabeljau)، والتونة (Thunfisch)، إضافة إلى فيليه السمك، حسك السمك، وطرق الطهي كالبخار والتدخين والشواء.",
    words: [
      {
        german: "der Fisch, -e",
        arabic: "السمكة / لحم السمك",
        english: "fish",
        example: "Freitags isst man in Deutschland traditionell frischen Fisch mit Salzkartoffeln.",
      },
      {
        german: "der Lachs, -e",
        arabic: "سمك السلمون",
        english: "salmon",
        example:
          "Der Lachs ist reich an gesunden Omega-3-Fettsäuren und schmeckt gebraten oder gedämpft.",
      },
      {
        german: "die Forelle, -n",
        arabic: "سمك السلمون المرقط (تروتة)",
        english: "trout",
        example:
          "Die frisch gefangene Forelle wird gern 'Müllerin Art' in schäumender Butter gebraten.",
      },
      {
        german: "der Kabeljau, -e",
        arabic: "سمك القد",
        english: "cod",
        example:
          "Kabeljau hat festes, weißes Fleisch und eignet sich perfekt für schonendes Dämpfen.",
      },
      {
        german: "der Thunfisch, -e",
        arabic: "سمك التونة",
        english: "tuna",
        example: "Für das Sushi verwendet der Chefkoch rohen Thunfisch von höchster Qualität.",
      },
      {
        german: "das Fischfilet, -s",
        arabic: "فيليه السمك (بدون عظم)",
        english: "fish fillet",
        example:
          "Das grätenfreie Fischfilet wird mit Zitronensaft beträufelt und in Mehl gewendet.",
      },
      {
        german: "die Fischgräte, -n",
        arabic: "حسكة السمك / الشوكة العظمية",
        english: "fishbone",
        example:
          "Beim Essen des ganzen Fisches muss man vorsichtig sein, um keine Gräte zu verschlucken.",
      },
      {
        german: "die Scholle, -n",
        arabic: "سمك موسى / السمك المفلطح",
        english: "plaice",
        example: "In Hamburg isst man traditionell gebratene Scholle mit Nordseekrabben und Speck.",
      },
      {
        german: "der Hering, -e",
        arabic: "سمك الرنجة",
        english: "herring",
        example:
          "Eingelegter Hering mit Zwiebeln und Äpfeln ist ein Klassiker an der deutschen Küste.",
      },
      {
        german: "fangfrisch",
        arabic: "طازج طازج من شباك الصيد",
        english: "freshly caught",
        example: "Am Hafen kaufen Einheimische fangfrischen Fisch direkt vom Fischerkutter.",
      },
      {
        german: "dämpfen (dämpfte, hat gedämpft)",
        arabic: "يطهو على البخار ببطء",
        english: "to steam",
        example:
          "Wenn man Fisch sanft dämpft, bleiben alle wertvollen Nährstoffe optimal erhalten.",
      },
      {
        german: "räuchern (räucherte, hat geräuchert)",
        arabic: "يدخن (كالسمك المدخن)",
        english: "to smoke (food)",
        example: "Über Buchenholz kann man Forellen und Lachs traditionell warm räuchern.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Frischer Fisch auf dem Markt",
        intro: "Einfache Sätze über Fischeinkauf, Lieblingsfische und Zubereitung (A1).",
        paragraphs: [
          [
            "Ich gehe gern zum Markt, denn dort gibt es frischen [der Fisch, -e|Fisch].",
            "Der Fischhändler verkauft rosa [der Lachs, -e|Lachs] und weiße Fische.",
            "Ich kaufe zwei Stücke [das Fischfilet, -s|Fischfilet], weil es keine spitze [die Fischgräte, -n|Fischgräte] hat.",
            "Der Fisch riecht angenehm nach Meer und ist absolut [fangfrisch|fangfrisch].",
          ],
          [
            "Zu Hause wasche ich das Filet und gebe etwas Zitrone darauf.",
            "In der Pfanne brate ich den Fisch mit ein wenig Butter und Salz an.",
            "Dazu koche ich Kartoffeln und einen grünen Salat.",
            "Das Essen ist leicht, gesund und schmeckt wirklich wunderbar.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fischgerichte an Nord- und Ostsee",
        intro: "Maritime Fischkultur in Deutschland mit Forelle, Scholle und Hering (A2).",
        paragraphs: [
          [
            "Im Urlaub an der Ostsee essen wir fast jeden Tag Gerichte aus dem Meer.",
            "Am kleinen Hafen kaufen wir oft [der Hering, -e|Hering] oder geräucherte [die Forelle, -n|Forelle], die die Fischer selbst im Rauchofen zubereiten.",
            "Wenn wir im Restaurant essen, bestellt meine Mutter am liebsten gebratene [die Scholle, -n|Scholle] mit warmen Petersilienkartoffeln.",
            "Mein Vater mag lieber gedämpften [der Kabeljau, -e|Kabeljau], weil das Fleisch sehr mild und zart ist.",
          ],
          [
            "Wer seinen Fisch schonend zubereiten möchte, sollte ihn im Dampfgarer [dämpfen (dämpfte, hat gedämpft)|dämpfen].",
            "Man kann Fisch auch über Holzfeuer traditionell [räuchern (räucherte, hat geräuchert)|räuchern], wodurch er ein unverwechselbares Aroma bekommt.",
            "Vor dem Essen prüfe ich immer genau, ob noch eine kleine [die Fischgräte, -n|Gräte] im Filet geblieben ist.",
            "Fisch ist reich an gesunden Fetten und sollte mindestens einmal in der Woche auf dem Speiseplan stehen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Maritime Traditionen und die Vielfalt der Fischküche",
        intro: "Kulturelle Bedeutung von Fisch in Deutschland, Heringsessen und Gartechniken (B1).",
        paragraphs: [
          [
            "Die Fischkultur in Deutschland besitzt eine jahrhundertealte Tradition, die vor allem durch die Küstenregionen an Nord- und Ostsee geprägt wurde.",
            "Zu den berühmtesten Spezialitäten zählt das Fischbrötchen, das wahlweise mit mariniertem [der Hering, -e|Hering], geräuchertem [der Lachs, -e|Lachs] oder zartem Backfisch belegt wird.",
            "Für viele Urlauber ist der Genuss eines solchen Brötchens direkt an den Landungsbrücken in Hamburg ein unverzichtbares Erlebnis.",
          ],
          [
            "In den Binnengewässern Süddeutschlands erfreut sich hingegen die Süßwasserfischerei großer Beliebtheit: Hier gilt die [die Forelle, -n|Forelle] 'blau' oder nach Müllerin-Art als Maßstab traditioneller Gastlichkeit.",
            "Wer ein exquisites [das Fischfilet, -s|Fischfilet] vom [der Kabeljau, -e|Kabeljau] oder Heilbutt zubereitet, muss die Hitze sorgfältig dosieren, um das empfindliche Muskeleiweiß nicht zu zerstören.",
            "Schonendes Garen, bei dem Köche den Fisch im Wurzelsud pochieren oder im aromatischen Gemüsedampf sanft [dämpfen (dämpfte, hat gedämpft)|dämpfen], erhält die saftige Textur.",
          ],
          [
            "Zugleich gewinnt die handwerkliche Veredelung wieder an Prestige: In kleinen Küstenräuchereien wird der Fang über duftendem Buchen- und Erlenholz heiß [räuchern (räucherte, hat geräuchert)|geräuchert].",
            "Diese bewährten Konservierungsmethoden verbinden kulinarisches Erbe mit zeitgemäßen Qualitätsansprüchen an authentische Lebensmittel.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Nachhaltigkeit, Fischereiquoten und Haute Cuisine",
        intro:
          "Ökologische Dilemmata maritimer Ressourcen und sensorische Perfektion des Fischgarens (B2).",
        paragraphs: [
          [
            "Die weltweite Nachfrage nach Edelfischen wie rotem [der Thunfisch, -e|Thunfisch] oder atlantischem [der Lachs, -e|Lachs] steht im Zentrum eines komplexen ökologischen Diskurses.",
            "Überfischte Weltmeere, destruktive Schleppnetze und die Problematik des Beifangs erfordern eine radikale Neuausrichtung hin zu zertifizierter, bestandschonender Fischerei mit MSC- oder ASC-Siegeln.",
            "Verbraucher und Gastronomen greifen daher vermehrt auf heimische Süßwasserfische wie Saibling, Zander oder die regionale [die Forelle, -n|Forelle] zurück, um Transportwege drastisch zu minimieren.",
          ],
          [
            "In der Haute Cuisine repräsentiert die Zubereitung von [fangfrisch|fangfrischem] Fisch die höchste Kunst des präzisen Timings.",
            "Ein meisterhaftes [das Fischfilet, -s|Fischfilet] vom weißen [der Kabeljau, -e|Kabeljau] verzeiht keine Nachlässigkeit: Wenige Sekunden zu langes Erhitzen führen zur irreversiblen Denaturierung und zum Verlust der glänzenden Lamellenstruktur.",
            "Moderne Spitzenköche bevorzugen daher Garmethoden wie das Pochieren in Olivenöl bei kontrollierten 52 Grad Celsius oder das sanfte Dämpfen im Aromadampf.",
          ],
          [
            "Gleichzeitig erlebt das handwerkliche [räuchern (räucherte, hat geräuchert)|Räuchern] und Fermentieren von Fisch eine Renaissance, inspiriert von skandinavischen Traditionen wie Gravlax.",
            "Diese dialektische Synthese aus uralten Konservierungstechniken und avantgardistischer Präzisionsküche verdeutlicht das immense gastronomische Potenzial dieses delikaten Lebensmittels.",
          ],
        ],
      },
    },
  },
  meeresfruechte: {
    description: "Garnelen, Muscheln, Hummer, Tintenfisch und Zubereitung von Krustentieren.",
    details: "Krustentiere, Weichtiere und maritime Delikatessen (A1–B2)",
    arabicDescription:
      "فواكه البحر (Meeresfrüchte): مفردات الروبيان (Garnele)، السلطعون (Krabbe)، الكركند (Hummer)، بلح البحر (Muschel)، المحار (Auster)، الحبار (Tintenfisch)، والأخطبوط (Oktopus)، مع تقنيات الطهي والتقشير.",
    words: [
      {
        german: "die Meeresfrüchte (Pl.)",
        arabic: "فواكه البحر / المأكولات البحرية",
        english: "seafood",
        example:
          "Auf der Speisekarte des italienischen Restaurants stehen frische Meeresfrüchte ganz oben.",
      },
      {
        german: "die Garnele, -n",
        arabic: "الروبيان / الجمبري / القريدس",
        english: "shrimp, prawn",
        example: "Die Garnelen werden kurz in heißem Knoblauchöl angebraten, bis sie rosa sind.",
      },
      {
        german: "die Krabbe, -n",
        arabic: "السلطعون / الكابوريا",
        english: "crab",
        example: "Nordseekrabben werden traditionell von Hand gepult und auf Schwarzbrot serviert.",
      },
      {
        german: "der Hummer, -",
        arabic: "الكركند / الاستاكوزا",
        english: "lobster",
        example:
          "Der Hummer gilt in der gehobenen Gastronomie als eine besonders edle Spezialität.",
      },
      {
        german: "die Muschel, -n",
        arabic: "بلح البحر / الصدفة",
        english: "mussel, clam",
        example: "Im Herbst kocht man frische Miesmuscheln im Weißweinsud mit Wurzelgemüse.",
      },
      {
        german: "die Auster, -n",
        arabic: "المحار الفاخر",
        english: "oyster",
        example:
          "Frische Austern werden traditionell roh auf Eis mit Zitrone und Vinaigrette geschlürft.",
      },
      {
        german: "der Tintenfisch, -e",
        arabic: "الحبار / الكالاماري",
        english: "squid, calamari",
        example:
          "Gegrillter Tintenfisch schmeckt mit Olivenöl, Meersalz und frischer Petersilie fantastisch.",
      },
      {
        german: "der Oktopus, -se",
        arabic: "الأخطبوط",
        english: "octopus",
        example: "Der Oktopus muss lange geschmort werden, damit das Fleisch wunderbar weich wird.",
      },
      {
        german: "die Jakobsmuschel, -n",
        arabic: "مروحة البحر / محار القديس يعقوب",
        english: "scallop",
        example:
          "Die edle Jakobsmuschel wird nur wenige Sekunden auf jeder Seite scharf angebraten.",
      },
      {
        german: "die Schale, -n",
        arabic: "الصدفة / القشرة الخارجية",
        english: "shell",
        example: "Vor dem Kochen muss man prüfen, ob die Schale der Muschel fest geschlossen ist.",
      },
      {
        german: "anbraten (briet an, hat angebraten)",
        arabic: "يشوح على نار قوية بسرعة",
        english: "to sear, saute quickly",
        example: "Garnelen sollte man nur kurz anbraten, da sie sonst trocken und zäh werden.",
      },
      {
        german: "das Knoblauchöl, -e",
        arabic: "زيت الثوم",
        english: "garlic oil",
        example: "Frische Meeresfrüchte harmonieren vorzüglich mit aromatischem Knoblauchöl.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Pasta mit Garnelen",
        intro: "Einfache Sätze über Kochen mit Garnelen und Meeresfrüchten zu Hause (A1).",
        paragraphs: [
          [
            "Ich koche heute Spaghetti mit leckeren Zutaten aus dem Meer.",
            "Ich habe frische [die Meeresfrüchte (Pl.)|Meeresfrüchte] und rosa [die Garnele, -n|Garnelen] im Supermarkt gekauft.",
            "Zuerst schäle ich Knoblauch und schneide kleine Tomaten.",
            "In der heißen Pfanne werde ich die Garnelen mit Olivenöl [anbraten (briet an, hat angebraten)|anbraten].",
          ],
          [
            "Nach zwei Minuten sind die Garnelen fertig und schön rosa.",
            "Ich mische die Pasta mit dem [das Knoblauchöl, -e|Knoblauchöl] und den Meeresfrüchten.",
            "Mein Freund liebt auch kleine [die Muschel, -n|Muscheln] in der Soße.",
            "Das Abendessen schmeckt herrlich wie im Sommerurlaub.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Maritime Köstlichkeiten im Restaurant",
        intro: "Ein Restaurantbesuch mit Muscheln, Tintenfisch und Krustentieren (A2).",
        paragraphs: [
          [
            "Gestern Abend waren wir in einem gemütlichen Hafenrestaurant zum Essen verabredet.",
            "Auf der Speisekarte gab es viele Spezialitäten wie gegrillten [der Tintenfisch, -e|Tintenfisch] und Suppe mit frischen Krabben.",
            "Mein Vater bestellte einen großen Topf mit [die Muschel, -n|Muscheln] in Weißweinsoße.",
            "Er erklärte mir, dass jede [die Schale, -n|Schale], die sich beim Kochen nicht öffnet, weggeworfen werden muss.",
          ],
          [
            "Meine Mutter wählte marinierte [die Garnele, -n|Garnelen], die mit Petersilie und Zitrone serviert wurden.",
            "Für Feinschmecker gab es auch frische [die Auster, -n|Austern] auf Eis und sogar teuren [der Hummer, -|Hummer].",
            "Ich probierte ein Stück weichen [der Oktopus, -se|Oktopus], der auf dem Holzkohlegrill zubereitet worden war.",
            "Alle waren begeistert von der hervorragenden Qualität der Speisen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Krabbenpulen und Muschelsaison",
        intro:
          "Regionale Traditionen an der Nordsee und kulinarische Verarbeitung von Schalentieren (B1).",
        paragraphs: [
          [
            "Wer die deutsche Nordseeküste besucht, stößt unweigerlich auf eine ganz besondere Delikatesse: die Nordseekrabbe, die biologisch gesehen eigentlich eine Sandgarnele ist.",
            "Das traditionelle Krabbenpulen, bei dem die winzige [die Krabbe, -n|Krabbe] mit geübten Fingerbewegungen aus ihrer [die Schale, -n|Schale] befreit wird, erfordert beachtliche Fingerfertigkeit und Geduld.",
            "Frisch gepulte Krabben auf gebuttertem Schwarzbrot mit Spiegelei stellen ein kulinarisches Meisterwerk dar, das seinesgleichen sucht.",
          ],
          [
            "In den kühleren Monaten mit dem Buchstaben 'r' beginnt in Deutschland die klassische Zeit für [die Muschel, -n|Muscheln], insbesondere Miesmuscheln rheinischer Art.",
            "Dabei gart man die Schalentiere in einem reichhaltigen Sud aus Weißwein, Lauch, Möhren und Sellerie, bis sie sich weit öffnen.",
            "Seltener, aber bei Kennern hochgeschätzt, ist die edle [die Jakobsmuschel, -n|Jakobsmuschel], deren nussiges Fleisch nur ganz kurz scharf [anbraten (briet an, hat angebraten)|angebraten] werden darf, um den zarten Kern glasig zu halten.",
          ],
          [
            "Der bewusste Umgang mit diesen Meeresfrüchten setzt jedoch eine kompromisslose Frischekette voraus, da Schalentiere extrem verderblich sind und bei unsachgemäßer Kühlung schwere Intoxikationen hervorrufen können.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Krustentiere und Malakologie in der Haute Gastronomie",
        intro:
          "Sensorik, Garzustände und ethische Diskussionen rund um Schalentiere und Kopffüßer (B2).",
        paragraphs: [
          [
            "In der anspruchsvollen Meeresküche markieren Krustentiere wie [der Hummer, -|Hummer] oder die Kaisergranate den Zenit gastronomischer Raffinesse.",
            "Die Textur des Hummerfleisches changiert subtil zwischen maritimer Salzigkeit und einer charakteristischen Süße, die durch Glycin und Aminosäuren hervorgerufen wird.",
            "Gleichzeitig wird die Tötungsmethode lebender Krustentiere im kochenden Wasser zunehmend durch elektrische Betäubungsgeräte substituiert, um tierschutzrechtlichen Bedenken adäquat zu begegnen.",
          ],
          [
            "Die Behandlung von Kopffüßern wie [der Oktopus, -se|Oktopus] oder [der Tintenfisch, -e|Tintenfisch] wiederum erfordert ein profundes biochemisches Verständnis der Kollagenfasern.",
            "Damit die muskulösen Tentakel nicht zäh und gummiartig werden, bedarf es entweder extrem kurzen, intensiven Kontakts mit Hitze oder eines stundenlangen Schmorens bei sanfter Simmertemperatur unter 85 Grad Celsius.",
          ],
          [
            "Parallel dazu verkörpert die [die Auster, -n|Auster] den unverfälschten Ausdruck ihres terroirs - oder besser 'merroirs': Abhängig vom Salzgehalt und Planktonvorkommen der Meeresbucht variiert ihr Geschmacksprofil von jodig-herb bis cremig-nussig.",
            "Dieses feine sensorische Zusammenspiel belegt eindrucksvoll, warum Meeresfrüchte seit der Antike als der Inbegriff epikureischer Genusskultur gelten.",
          ],
        ],
      },
    },
  },
  milchprodukte_und_eier: {
    description: "Milch, Quark, Joghurt, Käse, Butter, Sahne und Hühnereier.",
    details: "Molkereiprodukte, Fermentation und Ei-Zubereitung (A1–B2)",
    arabicDescription:
      "منتجات الألبان والبيض (Milchprodukte und Eier): مفردات الحليب (Milch)، الجبن القريش (Quark)، الزبادي (Joghurt)، الجبن (Käse)، الزبدة (Butter)، الكريمة (Sahne)، والبيض (Eier) مع تصنيف درجات تربية الدجاج واللاكتوز.",
    words: [
      {
        german: "das Milchprodukt, -e",
        arabic: "منتج الألبان",
        english: "dairy product",
        example: "Im Kühlregal findet man eine große Auswahl an frischen Milchprodukten.",
      },
      {
        german: "die Vollmilch (Sg.)",
        arabic: "الحليب كامل الدسم",
        english: "whole milk",
        example: "Vollmilch enthält mindestens 3,5 Prozent natürliches Milchfett.",
      },
      {
        german: "der Quark (Sg.)",
        arabic: "الجبن القريش الألماني / الكوارك",
        english: "quark, curd cheese",
        example: "Zum Frühstück isst sie frischen Magerquark mit Honig und Walnüssen.",
      },
      {
        german: "der Joghurt, -s",
        arabic: "اللبن الزبادي",
        english: "yogurt",
        example: "Naturjoghurt schmeckt erfrischend und unterstützt eine gesunde Darmflora.",
      },
      {
        german: "der Käse, -",
        arabic: "الجبن بأنواعه",
        english: "cheese",
        example:
          "In Deutschland gibt es Hunderte regionale Käsesorten von mild bis kräftig würzig.",
      },
      {
        german: "die Butter (Sg.)",
        arabic: "الزبدة",
        english: "butter",
        example: "Sie streicht weiche Butter auf die frische Scheibe Roggenbrot.",
      },
      {
        german: "die Sahne (Sg.)",
        arabic: "القشطة / الكريمة",
        english: "cream",
        example: "Für den Kuchen schlägt sie süße Sahne steif und verfeinert sie mit Vanille.",
      },
      {
        german: "der Schmand (Sg.)",
        arabic: "القشطة الرائبة الكثيفة (شماند)",
        english: "sour cream (thick)",
        example: "Schmand eignet sich perfekt zum Verfeinern von herzhaften Suppen und Saucen.",
      },
      {
        german: "das Hühnerei, -er",
        arabic: "بيض الدجاج",
        english: "hen's egg",
        example: "Auf dem Bio-Bauernhof legen die Hühner jeden Tag frische Eier.",
      },
      {
        german: "das Eigelb, -e",
        arabic: "صفار البيض",
        english: "egg yolk",
        example: "Für die Mayonnaise trennt man das Eigelb sorgfältig vom Eiklar.",
      },
      {
        german: "die Laktose (Sg.)",
        arabic: "اللاكتوز (سكر الحليب)",
        english: "lactose",
        example: "Wer empfindlich auf Milchzucker reagiert, wählt laktosefreie Milchprodukte.",
      },
      {
        german: "die Freilandhaltung (Sg.)",
        arabic: "التربية في المراعي المفتوحة (للدجاج)",
        english: "free-range farming",
        example: "Eier aus Freilandhaltung stammen von Hühnern, die Auslauf im Grünen haben.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Frühstück mit Milch und Ei",
        intro: "Einfache Sätze über Milch, Butter, Käse und Eier am Morgen (A1).",
        paragraphs: [
          [
            "Jeden Morgen decke ich den Tisch für das Frühstück.",
            "Ich trinke ein Glas [die Vollmilch (Sg.)|Vollmilch] und esse eine Scheibe Brot.",
            "Auf das Brot streiche ich frische [die Butter (Sg.)|Butter] und lege eine Scheibe [der Käse, -|Käse] darauf.",
            "Mein Bruder isst lieber eine Schale [der Joghurt, -s|Joghurt] mit Früchten.",
          ],
          [
            "In der Küche koche ich für jeden ein [das Hühnerei, -er|Hühnerei].",
            "Das Ei kocht fünf Minuten im Wasser und ist dann schön weich.",
            "Auch gesunder [der Quark (Sg.)|Quark] mit Beeren schmeckt morgens sehr frisch.",
            "So starten wir gut gestärkt in den neuen Tag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Einkauf im Kühlregal",
        intro: "Unterschiedliche Molkereiprodukte und Eier aus artgerechter Haltung (A2).",
        paragraphs: [
          [
            "Im Supermarkt stehe ich vor dem großen Kühlregal, wo jedes [das Milchprodukt, -e|Milchprodukt] übersichtlich einsortiert ist.",
            "Ich brauche frische Milch, einen Becher [der Schmand (Sg.)|Schmand] für die Gemüsesuppe und süße [die Sahne (Sg.)|Sahne] zum Kuchenbacken.",
            "Weil meine Mitbewohnerin Milchzucker nicht gut verträgt, achte ich darauf, ob die Produkte frei von [die Laktose (Sg.)|Laktose] sind.",
            "Viele Hersteller bieten inzwischen laktosefreie Alternativen an, die genauso gut schmecken.",
          ],
          [
            "Am Eierregal schaue ich immer auf den Stempel auf der Schale.",
            "Ich kaufe ausschließlich Eier aus [die Freilandhaltung (Sg.)|Freilandhaltung] oder Bio-Qualität, weil die Hühner dort draußen herumlaufen können.",
            "Zum Backen muss ich heute zwei Eier trennen, um das [das Eigelb, -e|Eigelb] mit Zucker schaumig zu rühren.",
            "Gute Grundzutaten machen beim Kochen und Backen den entscheidenden Unterschied.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Kultur der Molkereierzeugnisse in Deutschland",
        intro: "Vom Kräuterquark bis zum traditionellen Reifekäse und Qualitätsstandards (B1).",
        paragraphs: [
          [
            "Molkereierzeugnisse und Eier bilden das unverrückbare Fundament der deutschen Esskultur, von der traditionellen morgendlichen Mahlzeit bis zum deftigen Abendbrot.",
            "Ein archetypisches Gericht in vielen Bundesländern, namentlich in Sachsen und Berlin, sind Pellkartoffeln mit Leinöl und cremig angerührtem [der Quark (Sg.)|Quark], der mit frischem Schnittlauch veredelt wird.",
            "Dieser Speisequark liefert hochkonzentriertes Milcheiweiß bei gleichzeitig minimalem Fettgehalt und gilt als idealer Baustein einer ausgewogenen Sporternährung.",
          ],
          [
            "Gleichzeitig besitzt Deutschland eine erstaunliche Vielfalt an regionalem [der Käse, -|Käse], vom Allgäuer Bergkäse aus Rohmilch bis zum Harzer Käse mit Rotschmiere.",
            "Beim Kochen von Soßen schwören viele Küchenchefs auf [der Schmand (Sg.)|Schmand] oder Sauerrahm, da diese säuerlichen Milchprodukte selbst bei Hitzezufuhr seltener ausflocken als herkömmliche [die Sahne (Sg.)|Sahne].",
          ],
          [
            "Auch das Verbraucherbewusstsein hinsichtlich der Geflügelhaltung hat sich grundlegend transformiert: Der Verzicht auf Käfighaltung und die Kennzeichnungscodes auf jedem [das Hühnerei, -er|Hühnerei] ermöglichen es Konsumenten, bewusst Betriebe mit [die Freilandhaltung (Sg.)|Freilandhaltung] zu unterstützen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Biochemie der Fermentation, Kaseine und funktionelle Lebensmittel",
        intro:
          "Molkereitechnologie, enzymatische Koagulation und ernährungsphysiologische Differenzierung (B2).",
        paragraphs: [
          [
            "Die industrielle wie handwerkliche Verarbeitung von Rohmilch zu komplexen Erzeugnissen basiert auf minutiös kontrollierten mikrobiologischen und enzymatischen Prozessen.",
            "Bei der Käseherstellung spaltet das Enzym Lab das Kaseinmolekül, wodurch die Milch gerinnt und sich feste Dickete von flüssiger Molke trennt.",
            "Im Gegensatz zu Frischprodukten sinkt der Gehalt an [die Laktose (Sg.)|Laktose] während längerer Reifeprozesse bei Hartkäse naturgemäß auf nahezu null ab, da Milchsäurebakterien den Milchzucker vollständig verstoffwechseln.",
          ],
          [
            "Fermentierte Produkte wie probiotischer [der Joghurt, -s|Joghurt] oder Kefir üben durch ihre Milchsäurekulturen eine nachgewiesene regulierende Wirkung auf das menschliche Mikrobiom aus.",
            "Auf zellulärer Ebene dient das im [das Eigelb, -e|Eigelb] reichlich enthaltene Lecithin als natürlicher Emulgator, der Wasser- und Fettphasen in Emulsionen wie Hollandaise stabilisiert.",
          ],
          [
            "Aktuelle Marktanalysen spiegeln jedoch auch den wachsenden Stellenwert pflanzlicher Milchsubstitute wider, die aus Hafer, Soja oder Mandeln gewonnen werden.",
            "Dessen ungeachtet bleibt das traditionelle [das Milchprodukt, -e|Milchprodukt] durch seine unerreichte Bioverfügbarkeit von Kalzium und Vitamin B12 eine tragende Säule globaler Agrar- und Ernährungswissenschaft.",
          ],
        ],
      },
    },
  },
  blattgemuese: {
    description: "Spinat, Salate, Mangold, Rucola, Grünkohl und Wirsing.",
    details: "Blattkohlsorten, Salate, Mikronährstoffe und Gartechniken (A1–B2)",
    arabicDescription:
      "الخضروات الورقية (Blattgemüse): مفردات السبانخ (Spinat)، الخس (Kopfsalat)، خس الحقل (Feldsalat)، الجرجير (Rucola)، السلق (Mangold)، الكرنب الأجعد (Grünkohl)، والملفوف المجعد (Wirsing)، مع فوائد الكلوروفيل والحديد وطرق التحضير.",
    words: [
      {
        german: "das Blattgemüse, -",
        arabic: "الخضروات الورقية",
        english: "leafy greens, leafy vegetables",
        example: "Frisches Blattgemüse enthält viele Vitamine, Folsäure und wertvolles Eisen.",
      },
      {
        german: "der Spinat (Sg.)",
        arabic: "السبانخ",
        english: "spinach",
        example: "Frischer Babyspinat schmeckt roh im Salat und gekocht mit etwas Muskatnuss.",
      },
      {
        german: "der Kopfsalat, -e",
        arabic: "الخس العادي (خس الرأس)",
        english: "butterhead lettuce",
        example: "Ein grüner Kopfsalat mit feinem Essig-Öl-Dressing passt zu jedem Hauptgericht.",
      },
      {
        german: "der Feldsalat, -e",
        arabic: "خس النعجة / خس الحقل الشتوي",
        english: "lamb's lettuce, corn salad",
        example:
          "Im Winter schmeckt nussiger Feldsalat hervorragend mit gebratenem Speck und Walnüssen.",
      },
      {
        german: "der Rucola (Sg.)",
        arabic: "الجرجير البري / الروكا",
        english: "arugula, rocket",
        example: "Rucola hat einen würzigen, leicht scharfen Geschmack und passt toll auf Pizza.",
      },
      {
        german: "der Mangold (Sg.)",
        arabic: "السلق",
        english: "Swiss chard",
        example: "Mangold hat bunte Stiele und große grüne Blätter, die man wie Spinat zubereitet.",
      },
      {
        german: "der Grünkohl (Sg.)",
        arabic: "الكرنب الأجعد / الكيل",
        english: "kale",
        example: "In Norddeutschland ist Grünkohl mit Pinkelwurst ein legendäres Wintergericht.",
      },
      {
        german: "der Wirsing (Sg.)",
        arabic: "الملفوف المجعد (ويرسينغ)",
        english: "savoy cabbage",
        example: "Aus den gewellten Blättern des Wirsings kocht man herzhafte Kohlrouladen.",
      },
      {
        german: "der Eisbergsalat, -e",
        arabic: "الخس الأمريكي المقرمش (آيسبيرغ)",
        english: "iceberg lettuce",
        example: "Eisbergsalat bleibt im Kühlschrank lange frisch und herrlich knackig.",
      },
      {
        german: "knackig",
        arabic: "طازج ومقرمش",
        english: "crisp, crunchy",
        example: "Der Salat muss frisch gewaschen und serviert werden, damit er knackig bleibt.",
      },
      {
        german: "die Salatschleuder, -n",
        arabic: "نشافة ومجففة الخس الدوارة",
        english: "salad spinner",
        example: "Mit der Salatschleuder trocknet man die nassen Salatblätter nach dem Waschen.",
      },
      {
        german: "blanchieren (blanchierte, hat blanchiert)",
        arabic: "يسلق لثوانٍ بالماء المغلي ثم يبرد",
        english: "to blanch",
        example: "Man sollte Spinat kurz blanchieren, damit er seine leuchtend grüne Farbe behält.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein grüner Salat zum Mittagessen",
        intro: "Einfache Sätze über Kopfsalat, Spinat und das Zubereiten von Salat (A1).",
        paragraphs: [
          [
            "Ich möchte heute einen frischen Salat für meine Familie zubereiten.",
            "Ich kaufe einen grünen [der Kopfsalat, -e|Kopfsalat] und eine Packung [der Spinat (Sg.)|Spinat].",
            "Zuerst wasche ich jedes einzelne Blatt gründlich mit kaltem Wasser.",
            "Mit der [die Salatschleuder, -n|Salatschleuder] mache ich die Blätter schnell trocken.",
          ],
          [
            "Die Salatblätter sind herrlich frisch und [knackig|knackig].",
            "Ich mische auch ein wenig [der Rucola (Sg.)|Rucola] dazu, weil er gut schmeckt.",
            "Dann gebe ich Olivenöl, Essig, Salz und Pfeffer über den Salat.",
            "Der Salat ist gesund, bunt und schmeckt allen fantastisch.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Wintergemüse und Kohlgerichte",
        intro:
          "Herzhaftes Kochen mit Feldsalat, Mangold und Grünkohl in der kalten Jahreszeit (A2).",
        paragraphs: [
          [
            "Wenn es draußen kalt wird, gibt es auf dem Bauernmarkt besonders gesundes [das Blattgemüse, -|Blattgemüse].",
            "Im Winter esse ich am liebsten [der Feldsalat, -e|Feldsalat], der kleine grüne Rosetten hat und nussig schmeckt.",
            "Dazu serviert meine Mutter oft geröstete Nüsse und frische Apfelscheiben.",
            "Auch [der Eisbergsalat, -e|Eisbergsalat] ist beliebt, weil er tagelang frisch im Kühlschrank bleibt.",
          ],
          [
            "Letzte Woche haben wir zum ersten Mal frischen [der Mangold (Sg.)|Mangold] mit Knoblauch in der Pfanne gedünstet.",
            "In Norddeutschland kochen die Menschen im Januar gern [der Grünkohl (Sg.)|Grünkohl] mit herzhafter Wurst und Kartoffeln.",
            "Bevor man zarte Blätter kocht, sollte man sie nur kurz in kochendem Wasser [blanchieren (blanchierte, hat blanchiert)|blanchieren].",
            "So bleiben die Vitamine erhalten und das Gemüse behält seine leuchtende Farbe.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Saisonale Frische und kulinarische Traditionen des Blattgemüses",
        intro: "Grünkohlwanderungen, Wirsingeintöpfe und ernährungsphysiologische Schätze (B1).",
        paragraphs: [
          [
            "In Mitteleuropa spiegelt die Nutzung von [das Blattgemüse, -|Blattgemüse] den Rhythmus der vier Jahreszeiten auf faszinierende Weise wider.",
            "Während im Frühsommer zarter [der Kopfsalat, -e|Kopfsalat] und würziger [der Rucola (Sg.)|Rucola] die leichte Küche dominieren, erobern im Spätherbst robuste Blattkohlsorten die Märkte.",
            "Besonders der gewellte [der Wirsing (Sg.)|Wirsing] begeistert Köche durch seine Vielseitigkeit: Seine geschmeidigen Außenblätter eignen sich hervorragend für gefüllte Wirsingrouladen.",
          ],
          [
            "Ein einzigartiges soziokulturelles Brauchtum stellt die norddeutsche Kohlfahrt dar, bei der Gruppen durch die winterliche Landschaft wandern, um anschließend dampfenden [der Grünkohl (Sg.)|Grünkohl] mit Pinkel zu zelebrieren.",
            "Traditionell wartet man mit der Ernte des Grünkohls bis zum ersten Frost, da durch die Kälte Bitterstoffe abgebaut und stärkehaltige Verbindungen in Zucker umgewandelt werden.",
          ],
          [
            "Wer zarte Blattgemüse wie [der Spinat (Sg.)|Spinat] fachgerecht zubereiten will, sollte sie nur ganz kurz [blanchieren (blanchierte, hat blanchiert)|blanchieren] und sofort in Eiswasser abschrecken.",
            "Dieser Temperaturschock stoppt die enzymatische Oxidation und garantiert, dass die wertvollen Chlorophyllfarbstoffe und das hitzeempfindliche Vitamin C maximal geschont werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Sekundäre Pflanzenstoffe, Bitterstoffe und grüne Nährstoffdichte",
        intro:
          "Phytochemische Analyse von Glucosinolaten, Folsäure und der Renaissance alter Blattgemüse (B2).",
        paragraphs: [
          [
            "Aus ökotrophologischer Perspektive rangiert dunkelgrünes [das Blattgemüse, -|Blattgemüse] an der Spitze der nährstoffdichtesten Lebensmittel weltweit.",
            "Arten wie [der Grünkohl (Sg.)|Grünkohl] und [der Wirsing (Sg.)|Wirsing] zeichnen sich durch bemerkenswerte Konzentrationen an Glucosinolaten und Sulforaphan aus, deren antikarzinogene und zellschützende Wirkmechanismen Gegenstand intensiver biomedizinischer Forschung sind.",
            "Darüber hinaus enthält roher [der Feldsalat, -e|Feldsalat] überdurchschnittliche Mengen an Provitamin A und Folsäure, die für die zelluläre DNA-Synthese unabdingbar sind.",
          ],
          [
            "In der modernen Gastronomie erlebt das bewusste Spiel mit herben Geschmacksprofilen eine eindrucksvolle Wiederbelebung.",
            "Der leicht senfartige, bittere Ton von [der Rucola (Sg.)|Rucola] oder die erdige Note von [der Mangold (Sg.)|Mangold] werden gezielt als sensorischer Kontrapunkt zu säurebetonten Dressings oder fettreichen Hauptkomponenten eingesetzt.",
          ],
          [
            "Zudem revolutionieren Urban-Farming-Initiativen und Hydrokultur-Konzepte den Anbau von Blattgrün in städtischen Ballungsräumen.",
            "Durch die Eliminierung langer Transportwege erreicht der Salat den Verbraucher unvergleichlich [knackig|knackig], wodurch oxidative Nährstoffverluste auf ein Minimum reduziert werden.",
          ],
        ],
      },
    },
  },
  fruchtgemuese: {
    description: "Tomaten, Gurken, Paprika, Zucchini, Auberginen und Kürbis.",
    details: "Fruchtgemüsearten, Reifung, Kulinarik und Sommerküche (A1–B2)",
    arabicDescription:
      "الخضروات الثمرية (Fruchtgemüse): مفردات الطماطم (Tomate)، الخيار (Gurke)، الفليفلة (Paprika)، الكوسا (Zucchini)، الباذنجان (Aubergine)، والقرع (Kürbis)، مع التمييز النباتي بين الثمرة والخضار وطرق الطهي والشواء.",
    words: [
      {
        german: "das Fruchtgemüse (Sg.)",
        arabic: "الخضروات الثمرية",
        english: "fruit vegetables",
        example:
          "Fruchtgemüse entsteht aus den bestäubten Blüten der Pflanze und reift meist im Sommer.",
      },
      {
        german: "die Tomate, -n",
        arabic: "الطماطم / البندورة",
        english: "tomato",
        example: "Sonnengereifte Tomaten duften intensiv und schmecken süßlich-aromatisch.",
      },
      {
        german: "die Gurke, -n",
        arabic: "الخيار",
        english: "cucumber",
        example:
          "Eine frische Gurke besteht zu über 95 Prozent aus Wasser und wirkt wunderbar kühlend.",
      },
      {
        german: "die Zucchini, -s",
        arabic: "الكوسا",
        english: "zucchini, courgette",
        example: "Kleine Zucchini schneidet man in feine Scheiben und grillt sie mit Olivenöl.",
      },
      {
        german: "die Aubergine, -n",
        arabic: "الباذنجان",
        english: "eggplant, aubergine",
        example:
          "Die dunkelviolette Aubergine saugt beim Braten viel Öl auf und wird herrlich cremig.",
      },
      {
        german: "die Paprika, -s",
        arabic: "الفليفلة الرومية الملونة",
        english: "bell pepper",
        example: "Rote und gelbe Paprika enthalten besonders viel Vitamin C und schmecken knackig.",
      },
      {
        german: "der Kürbis, -se",
        arabic: "اليقطين / القرع",
        english: "pumpkin, squash",
        example: "Im Herbst kocht man aus dem Hokkaido-Kürbis eine samtige, wärmende Suppe.",
      },
      {
        german: "die Kirschtomate, -n",
        arabic: "طماطم كرزية صغيرة (شيري)",
        english: "cherry tomato",
        example:
          "Kleine, süße Kirschtomaten eignen sich hervorragend als gesunder Snack für zwischendurch.",
      },
      {
        german: "die Peperoni, -s",
        arabic: "الفلفل الحار",
        english: "chili pepper, hot pepper",
        example: "Mit einer scharfen Peperoni gibt der Koch der Pastasoße eine pikante Note.",
      },
      {
        german: "das Fruchtfleisch (Sg.)",
        arabic: "لب الثمرة الداخلي",
        english: "flesh, pulp",
        example: "Das orangefarbene Fruchtfleisch des Kürbisses wird im Backofen wunderbar weich.",
      },
      {
        german: "schmoren (schmorte, hat geschmort)",
        arabic: "يطهو بالتسبيك على نار هادئة",
        english: "to braise, stew",
        example: "Für das Ratatouille lässt man Auberginen, Zucchini und Tomaten langsam schmoren.",
      },
      {
        german: "saftig",
        arabic: "طري ومليء بالعصير",
        english: "juicy",
        example: "Die Tomate ist vollreif geerntet worden und deshalb unvergleichlich saftig.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Buntes Gemüse in der Pfanne",
        intro: "Einfache Sätze über Tomaten, Gurken, Paprika und Zucchini (A1).",
        paragraphs: [
          [
            "Ich liebe frisches Gemüse, weil es bunt ist und gesund schmeckt.",
            "Im Garten pflücke ich eine rote [die Tomate, -n|Tomate] und eine grüne [die Gurke, -n|Gurke].",
            "Die Tomate ist süß und sehr [saftig|saftig].",
            "Ich esse gern kleine [die Kirschtomate, -n|Kirschtomaten] direkt von der Pflanze.",
          ],
          [
            "In der Küche schneide ich eine gelbe [die Paprika, -s|Paprika] und eine grüne [die Zucchini, -s|Zucchini].",
            "Ich brate das Gemüse in der Pfanne mit ein wenig Olivenöl an.",
            "Das Gemüse riecht fantastisch und schmeckt allen sehr gut.",
            "Dazu gibt es frisches Brot und Käse.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Sommerrezepte mit Fruchtgemüse",
        intro: "Zubereitung von mediterranem Ratatouille und wärmender Kürbissuppe (A2).",
        paragraphs: [
          [
            "Im Sommer koche ich am liebsten mit frischem [das Fruchtgemüse (Sg.)|Fruchtgemüse], das viel Sonne abbekommen hat.",
            "Für ein klassisches Ratatouille schneide ich [die Aubergine, -n|Auberginen], Zucchini und Paprika in gleichmäßige Würfel.",
            "Wer es etwas schärfer mag, schneidet auch eine halbe [die Peperoni, -s|Peperoni] hinein.",
            "Alles zusammen muss man bei niedriger Hitze im Topf langsam [schmoren (schmorte, hat geschmort)|schmoren], bis das Gemüse butterweich ist.",
          ],
          [
            "Wenn der Herbst kommt, freuen sich alle auf den ersten [der Kürbis, -se|Kürbis] der Saison.",
            "Man schneidet den Kürbis auf und kratzt die Kerne heraus, damit nur das [das Fruchtfleisch (Sg.)|Fruchtfleisch] übrig bleibt.",
            "Aus dem Fruchtfleisch kocht man mit Ingwer und Kokosmilch eine wunderbare Suppe.",
            "Sonnengereiftes Gemüse bringt Freude und Vitamine in jede Jahreszeit.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Mediterraner Einfluss und die Reifung des Sommergemüses",
        intro: "Vom Ratatouille zur Kürbiszeit: kulinarischer Wandel der Essgewohnheiten (B1).",
        paragraphs: [
          [
            "In den letzten Jahrzehnten hat die deutsche Küche durch den mediterranen Einfluss eine tiefgreifende Bereicherung erfahren.",
            "Gemüsesorten wie [die Zucchini, -s|Zucchini], [die Aubergine, -n|Aubergine] und die aromatische [die Paprika, -s|Paprika] sind heute aus keinem Wochenmarktangebot mehr wegzudenken.",
            "Früher galten diese Gewächse als exotisch, während sie heute die Basis beliebter Alltagsgerichte wie Gemüseaufläufe oder Pfannengerichte bilden.",
          ],
          [
            "Besondere Aufmerksamkeit verdient die Reifung der [die Tomate, -n|Tomate]: Industriell gereifte Treibhausware enttäuscht oft durch wässrigen Geschmack und zähe Schale.",
            "Wer hingegen sonnengereifte Freilandsorten oder kleine [die Kirschtomate, -n|Kirschtomaten] verkostet, erlebt eine perfekte Harmonie aus Fruchtzucker, feiner Säure und ätherischen Aromen.",
            "Beim Kochen von mediterranen Soßen lässt man diese Früchte lange [schmoren (schmorte, hat geschmort)|schmoren], wodurch das natürliche Glutamat freigesetzt wird und die Soße eine unnachahmliche Tiefe erhält.",
          ],
          [
            "Im Herbst wiederum markiert der [der Kürbis, -se|Kürbis] den Übergang zur wärmenden Wohlfühlküche: Ob Hokkaido, Butternut oder Muskatkürbis - das aromatische [das Fruchtfleisch (Sg.)|Fruchtfleisch] lässt sich sowohl für herzhafte Gratins als auch für süßes Gebäck vielseitig verarbeiten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Botanische Klassifikation, Lycopin und Terroir im Gemüsebau",
        intro:
          "Botanische Abgrenzung von Fruchtgemüse, sekundäre Pflanzenstoffe und Sensorik (B2).",
        paragraphs: [
          [
            "Die botanische Zuordnung von [das Fruchtgemüse (Sg.)|Fruchtgemüse] offenbart eine faszinierende Grenzüberschreitung zwischen den Disziplinen.",
            "Während der Laie Pflanzen wie die [die Tomate, -n|Tomate], die [die Aubergine, -n|Aubergine] oder den [der Kürbis, -se|Kürbis] als Gemüse klassifiziert, handelt es sich botanisch gesehen um Beeren oder Panzerbeeren, da sie aus der befruchteten Blüte entstehen und Samen umschließen.",
            "Kulinarisch hingegen werden sie aufgrund ihres geringeren Zuckergehalts und ihrer herzhaften Zubereitung universell als Gemüse verarbeitet.",
          ],
          [
            "Aus biochemischer Sicht zeichnen sich rote Nachtschattengewächse durch ihren außergewöhnlich hohen Gehalt an Lycopin aus, einem lipophilen Carotinoid mit nachgewiesenen zellprotektiven Eigenschaften.",
            "Interessanterweise erhöht thermische Einwirkung wie sanftes [schmoren (schmorte, hat geschmort)|Schmoren] mit Olivenöl die Bioverfügbarkeit von Lycopin signifikant, da die pflanzlichen Zellwände aufbrechen und das Antioxidans freisetzen.",
          ],
          [
            "Parallel dazu reflektiert der Anbau historischer Tomaten- und Paprikarassen eine Gegenbewegung zur uniformen Monokultur globalisierter Agrarkonzerne.",
            "Alte Sorten wie Ochsenherz oder Schwarze Krim bestechen durch facettenreiche Säure-Süße-Profile und ein zartes, unvergleichlich [saftig|saftiges] Fruchtfleisch, das von Feinschmeckern als Triumph des regionalen Terroirs gefeiert wird.",
          ],
        ],
      },
    },
  },
  huelsenfruechte: {
    description: "Linsen, Erbsen, Bohnen, Kichererbsen, Sojabohnen und Proteinquellen.",
    details: "Leguminosen, pflanzliche Proteine, Einweichtechniken und Eintöpfe (A1–B2)",
    arabicDescription:
      "البقوليات (Hülsenfrüchte): مفردات العدس (Linse)، البازلاء (Erbse)، الفاصوليا (Bohne)، الحمص (Kichererbse)، وفول الصويا (Sojabohne)، مع تقنيات النقع (Einweichen) والطهي في اليخنات والشوربات وأهميتها كمصدر للبروتين النباتي.",
    words: [
      {
        german: "die Hülsenfrucht, -̈e",
        arabic: "البقوليات (القرنيات)",
        english: "legume, pulse",
        example:
          "Hülsenfrüchte sind unverzichtbare Lieferanten für pflanzliches Eiweiß und Ballaststoffe.",
      },
      {
        german: "die Erbse, -n",
        arabic: "البازلاء",
        english: "pea",
        example: "Süße grüne Erbsen schmecken roh im Salat oder gekocht in einer sämigen Suppe.",
      },
      {
        german: "die Bohne, -n",
        arabic: "الفاصوليا بأنواعها",
        english: "bean",
        example: "Weiße Bohnen und Kidneybohnen werden gern für deftige Eintöpfe verwendet.",
      },
      {
        german: "die Linse, -n",
        arabic: "العدس",
        english: "lentil",
        example: "Schwäbische Linsen mit Spätzle und Würstchen sind ein legendärer Klassiker.",
      },
      {
        german: "die Kichererbse, -n",
        arabic: "الحمص",
        english: "chickpea",
        example:
          "Aus pürierten Kichererbsen, Sesampaste und Knoblauch bereitet man cremigen Hummus zu.",
      },
      {
        german: "die Sojabohne, -n",
        arabic: "فول الصويا",
        english: "soybean",
        example:
          "Aus der Sojabohne werden Tofu, Sojamilch und viele pflanzliche Fleischalternativen hergestellt.",
      },
      {
        german: "die Buschbohne, -n",
        arabic: "الفاصوليا الخضراء العريضة",
        english: "green bean, bush bean",
        example:
          "Frische grüne Bohnen darf man niemals roh essen, da sie giftiges Phasin enthalten.",
      },
      {
        german: "die Kidneybohne, -n",
        arabic: "الفاصوليا الحمراء (كلوية الشكل)",
        english: "kidney bean",
        example: "Für das feurige Chili con Carne dürfen rote Kidneybohnen auf keinen Fall fehlen.",
      },
      {
        german: "die Schote, -n",
        arabic: "القرن / الغلاف الثمري للبقول",
        english: "pod",
        example: "Kinder zupfen gern die knackigen Erbsen frisch aus der grünen Schote.",
      },
      {
        german: "der Eintopf, -̈e",
        arabic: "اليخنة / طبق الحساء الشامل في قدر واحد",
        english: "stew",
        example: "Ein heißer Linseneintopf wärmt die ganze Familie an ungemütlichen Regentagen.",
      },
      {
        german: "einweichen (weichte ein, hat eingeweicht)",
        arabic: "ينقع في الماء قبل الطهي",
        english: "to soak",
        example:
          "Getrocknete Kichererbsen muss man über Nacht in reichlich kaltem Wasser einweichen.",
      },
      {
        german: "proteinreich",
        arabic: "غني بالبروتين",
        english: "protein-rich, high-protein",
        example: "Linsen und Bohnen sind extrem proteinreich und sättigen für viele Stunden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine warme Linsensuppe kochen",
        intro: "Einfache Sätze über Erbsen, Bohnen, Linsen und das Kochen eines Eintopfs (A1).",
        paragraphs: [
          [
            "Heute koche ich ein gesundes Mittagessen mit Hülsenfrüchten.",
            "Ich habe braune [die Linse, -n|Linsen] und grüne [die Erbse, -n|Erbsen] im Schrank.",
            "Meine Großmutter kocht aus Linsen immer einen großen [der Eintopf, -̈e|Eintopf].",
            "Diese kleinen Samen sind sehr gesund und [proteinreich|proteinreich].",
          ],
          [
            "In den Topf gebe ich auch Möhren, Kartoffeln und weiße [die Bohne, -n|Bohnen].",
            "Alles kocht eine halbe Stunde im Wasser, bis die Linsen weich sind.",
            "Der Eintopf riecht herrlich und wärmt an kalten Tagen.",
            "Wir essen die Suppe mit einem Stück frischem Brot.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kochen mit Bohnen und Kichererbsen",
        intro: "Einweichregeln und Zubereitung von Hummus und bunten Salaten (A2).",
        paragraphs: [
          [
            "Früher wusste ich nicht, wie man getrocknete Hülsenfrüchte richtig zubereitet.",
            "Wenn man getrocknete Bohnen oder [die Kichererbse, -n|Kichererbsen] kochen möchte, muss man sie zuerst über Nacht [einweichen (weichte ein, hat eingeweicht)|einweichen].",
            "Durch das Einweichen verkürzt sich die Kochzeit am nächsten Tag erheblich.",
            "Aus gekochten Kichererbsen mache ich oft einen cremigen Aufstrich mit Knoblauch und Zitronensaft.",
          ],
          [
            "Für Salate nehme ich gern rote [die Kidneybohne, -n|Kidneybohnen] aus der Dose, weil es sehr schnell geht.",
            "Im Garten meiner Tante wächst die zarte [die Buschbohne, -n|Buschbohne], die man aber niemals roh verzehren darf.",
            "Jede [die Hülsenfrucht, -̈e|Hülsenfrucht] liefert dem Körper viel Energie und langanhaltende Sättigung.",
            "Deshalb gehören Bohnen und Linsen fest zu meiner wöchentlichen Ernährung.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Traditionelle Eintopfkultur und vegetarische Renaissance",
        intro: "Vom schwäbischen Linsengericht zum modernen pflanzlichen Protein (B1).",
        paragraphs: [
          [
            "In der mitteleuropäischen kulinarischen Tradition besitzen Hülsenfrüchte einen festen, historisch gewachsenen Stellenwert.",
            "Generell bildeten getrocknete [die Linse, -n|Linsen], dicke [die Bohne, -n|Bohnen] und getrocknete [die Erbse, -n|Erbsen] über Jahrhunderte hinweg die unverzichtbare winterliche Nahrungsgrundlage breiter Bevölkerungsschichten.",
            "Gerichte wie der schwäbische Linseneintopf mit hausgemachten Spätzle oder die klassische Erbsensuppe mit Rauchfleisch sind bis heute hochgeschätzte bürgerliche Leibspeisen.",
          ],
          [
            "In den vergangenen Jahren haben Hülsenfrüchte jedoch einen bemerkenswerten Imagewandel von der 'Arme-Leute-Kost' zum modernen Superfood vollzogen.",
            "Ernährungsbewusste Menschen und Vegetarier schätzen sie als [proteinreich|proteinreiche], ballaststoffdichte und fettarme Alternative zu tierischen Produkten.",
            "Gerichte aus dem Orient wie Falafel aus [die Kichererbse, -n|Kichererbsen] oder asiatische Spezialitäten aus der [die Sojabohne, -n|Sojabohne] haben die heimischen Küchen nachhaltig erobert.",
          ],
          [
            "Die richtige Küchentechnik bleibt dabei entscheidend: Das sorgfältige [einweichen (weichte ein, hat eingeweicht)|Einweichen] und lange Kochen mit Kräutern wie Bohnenkraut oder Kümmel baut unverdauliche Oligosaccharide ab und sorgt für optimale Bekömmlichkeit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Agrarökologie der Leguminosen und die globale Proteinwende",
        intro:
          "Knöllchenbakterien, Stickstofffixierung und physiologische Bedeutung pflanzlicher Proteine (B2).",
        paragraphs: [
          [
            "Im Kontext der globalen Agrar- und Ernährungstransformation rückt die Pflanzenfamilie der Leguminosen, zu der jede [die Hülsenfrucht, -̈e|Hülsenfrucht] zählt, in den Mittelpunkt zukunftsfähiger Agrarsysteme.",
            "Aufgrund ihrer symbiotischen Beziehung zu Knöllchenbakterien an den Wurzeln sind Leguminosen imstande, atmosphärischen Stickstoff direkt im Boden zu fixieren.",
            "Dadurch fungieren Kulturen von [die Erbse, -n|Erbsen], [die Bohne, -n|Bohnen] und [die Sojabohne, -n|Sojabohnen] als natürliche Gründüngung, die den Einsatz synthetischer Stickstoffdünger signifikant reduziert und die Bodenfruchtbarkeit nachhaltig revitalisiert.",
          ],
          [
            "Aus ökotrophologischer Sicht bestechen Hülsenfrüchte durch ihre vorteilhafte Aminosäurenzusammensetzung und ihren niedrigen glykämischen Index.",
            "Die Kombination von Linsen mit Getreide - etwa Reis oder Weizen - erzielt eine biologische Wertigkeit des Proteins, die der von Fleisch oder Eiern in nichts nachsteht.",
            "Gleichzeitig treibt die Lebensmitteltechnologie die Isolierung von Erbsen- und Sojaproteinisolaten voran, um texturelle Analogprodukte für die wachsende Zahl an Flexitariern zu kreieren.",
          ],
          [
            "Dieser ganzheitliche Verbund aus ökologischem Nutzen im Ackerbau, gesundheitlicher Prävention gegenüber Zivilisationskrankheiten und gastronomischer Flexibilität zementiert die herausragende Rolle der Hülsenfrüchte für das 21. Jahrhundert.",
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

const res = vocabularyCollectionSchema.safeParse(et);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(etPath, JSON.stringify(et, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to essen-und-trinken.json!");
