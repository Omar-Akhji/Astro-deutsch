import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch3Data: Record<string, any> = {
  die_heimwerkstatt: {
    description: "Heimwerkerwerkzeuge, Werkbank, Reparaturen und Handwerksprojekte zu Hause.",
    details: "Werkzeuge, Handwerk und Heimwerkerbedarf (A1–B2)",
    arabicDescription:
      "ورشة العمل المنزلية (Heimwerkstatt): مفردات طاولة العمل، صندوق الأدوات، المطرقة، المفك، الكماشة، المنشار، والمثقاب الكهربائي (Bohrmaschine)، مع التركيز على ثقافة الصيانة الذاتية (DIY) في ألمانيا.",
    words: [
      {
        german: "die Werkbank, -̈e",
        arabic: "طاولة العمل والنجارة",
        english: "workbench",
        example: "Der Heimwerker spannt das Holzstück fest in die Werkbank ein.",
      },
      {
        german: "der Werkzeugkasten, -̈",
        arabic: "صندوق الأدوات والعدة",
        english: "toolbox",
        example: "Im Werkzeugkasten liegen alle Zangen und Schraubenzieher griffbereit.",
      },
      {
        german: "der Hammer, -̈",
        arabic: "المطرقة / الشاكوش",
        english: "hammer",
        example: "Mit dem schweren Hammer schlägt er den Nagel in die Wand.",
      },
      {
        german: "der Schraubenzieher, -",
        arabic: "المفك",
        english: "screwdriver",
        example: "Mit dem Kreuzschlitz-Schraubenzieher zieht er die lockere Schraube fest.",
      },
      {
        german: "die Zange, -n",
        arabic: "الكماشة / البنسة",
        english: "pliers, tongs",
        example: "Mit der Zange zieht man alte Nägel aus dem Holz.",
      },
      {
        german: "die Säge, -n",
        arabic: "المنشار",
        english: "saw",
        example: "Mit der scharfen Handsäge schneidet er das Brett in zwei Hälften.",
      },
      {
        german: "die Bohrmaschine, -n",
        arabic: "المثقاب الكهربائي / الشنيور",
        english: "drilling machine, power drill",
        example: "Mit der Bohrmaschine bohrt er präzise Löcher für die Dübel.",
      },
      {
        german: "der Nagel, -̈",
        arabic: "المسمار العادي",
        english: "nail",
        example: "Der Nagel hält das Bild sicher an der harten Betonwand.",
      },
      {
        german: "die Schraube, -n",
        arabic: "المسمار اللولبي / البرغي",
        english: "screw",
        example: "Die metallene Schraube sitzt bombenfest im Kunststoffdübel.",
      },
      {
        german: "die Wasserwaage, -n",
        arabic: "ميزان الماء (ميزان التسوية)",
        english: "spirit level",
        example: "Mit der Wasserwaage prüft sie, ob das Wandregal genau gerade hängt.",
      },
      {
        german: "der Schraubenschlüssel, -",
        arabic: "مفتاح الربط (مفتاح الإنجليزي)",
        english: "wrench, spanner",
        example: "Mit dem Schraubenschlüssel zieht er die Mutter an der Fahrradachse an.",
      },
      {
        german: "das Maßband, -̈er",
        arabic: "شريط القياس (المتر)",
        english: "measuring tape, tape measure",
        example: "Vor dem Sägen misst er die Länge mit dem flexiblen Maßband ab.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Werkzeug im Keller",
        intro: "Einfache Beschreibungen über Werkzeuge und kleine Reparaturen im Keller (A1).",
        paragraphs: [
          [
            "Mein Vater hat eine kleine Werkstatt im Keller.",
            "Dort steht eine große, schwere [die Werkbank, -̈e|Werkbank] aus Holz.",
            "Auf dem Tisch steht ein roter [der Werkzeugkasten, -̈|Werkzeugkasten].",
            "Darin liegen ein [der Hammer, -̈|Hammer], viele kleine [der Nagel, -̈|Nägel] und spitze [die Schraube, -n|Schrauben].",
          ],
          [
            "Wenn ein Stuhl kaputt ist, reparieren wir ihn gemeinsam.",
            "Ich nehme den [der Schraubenzieher, -|Schraubenzieher] und drehe die Schraube fest.",
            "Mit der lauten [die Bohrmaschine, -n|Bohrmaschine] bohren wir ein Loch in die Wand.",
            "Mit der [die Wasserwaage, -n|Wasserwaage] prüfen wir, ob das neue Bild ganz gerade hängt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein neues Regal selbst bauen",
        intro: "Vom Holzzuschnitt bis zur Montage: Ein praktisches Heimwerkerprojekt (A2).",
        paragraphs: [
          [
            "Am Samstag baute Markus ein neues Bücherregal für sein Arbeitszimmer selbst.",
            "Zuerst maß er die Bretter mit dem gelben [das Maßband, -̈er|Maßband] ganz genau aus.",
            "Danach spannte er die Holzlatten an der [die Werkbank, -̈e|Werkbank] ein und sägte sie mit der [die Säge, -n|Säge] auf die passende Länge.",
            "Mit einer kräftigen [die Zange, -n|Zange] zog er vorher alte Klammern aus dem Holz heraus.",
          ],
          [
            "Im Keller holte er die Akku-[die Bohrmaschine, -n|Bohrmaschine] und passende Dübel aus dem [der Werkzeugkasten, -̈|Werkzeugkasten].",
            "An der Wand kontrollierte er die Ausrichtung mit der [die Wasserwaage, -n|Wasserwaage], damit nichts schief wird.",
            "Mit dem richtigen [der Schraubenschlüssel, -|Schraubenschlüssel] zog er alle stabilen Metallwinkel fest.",
            "Am Abend stand das Regal perfekt an seinem Platz, und Markus war sehr stolz auf seine Arbeit.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Heimwerkerkultur, Werkzeugkunde und Arbeitssicherheit",
        intro:
          "Warum handwerkliches Geschick Geld spart und wie man Unfälle in der Werkstatt vermeidet (B1).",
        paragraphs: [
          [
            "In Deutschland erfreut sich das Heimwerken (Do-it-yourself) enormer Beliebtheit als Ausgleich zum digitalen Berufsalltag.",
            "Wer über eine gut ausgestattete Werkstatt verfügt, kann alltägliche Reparaturen im Haushalt eigenständig durchführen, anstatt teure Fachbetriebe zu beauftragen.",
            "Ein solider [der Werkzeugkasten, -̈|Werkzeugkasten] mit Qualitätswerkzeugen bildet das Fundament: Ergonomische [der Schraubenzieher, -|Schraubenzieher], ein präziser [der Schraubenschlüssel, -|Schraubenschlüssel] und eine griffige [die Zange, -n|Zange] verhindern das Abrutschen und Beschädigen von Schraubenköpfen.",
            "Beim exakten Ausrichten von Hängeschränken schützt eine verlässliche [die Wasserwaage, -n|Wasserwaage] vor folgenschweren Montagefehlern.",
          ],
          [
            "Dennoch erfordert der Umgang mit Werkzeugen stets ein hohes Maß an Sicherheitsbewusstsein.",
            "Vor der Inbetriebnahme von leistungsstarken Geräten wie der [die Bohrmaschine, -n|Bohrmaschine] oder einer scharfen [die Säge, -n|Säge] müssen Schutzbrille und Gehörschutz angelegt werden.",
            "Auch das präzise Fixieren von Werkstücken an der massiven [die Werkbank, -̈e|Werkbank] minimiert das Verletzungsrisiko drastisch.",
            "Sorgfältige Vorbereitung, genaues Messen mit dem [das Maßband, -̈er|Maßband] und Konzentration sind die wichtigsten Garanten für handwerklichen Erfolg.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Die Philosophie des Reparierens, Handwerksethos und Postwachstumsgesellschaft",
        intro:
          "Kulturkritische und philosophische Würdigung manueller Reparaturkompetenz gegen die Wegwerfmentalität (B2).",
        paragraphs: [
          [
            "In einer Ära geplanter Obsoleszenz und industrieller Schnelllebigkeit erfährt die eigene Werkstatt eine Bedeutungsaufladung als Bastion der materiellen Nachhaltigkeit.",
            "Die manuelle Reparatur eines defekten Gegenstands an der traditionellen [die Werkbank, -̈e|Werkbank] stellt einen bewussten Akt des Widerstands gegen die Wegwerfökonomie dar.",
            "Das gekonnte Führen elementarer Werkzeuge – vom gezielten Schlag mit dem [der Hammer, -̈|Hammer] über die Drehmomentkontrolle mit dem [der Schraubenzieher, -|Schraubenzieher] bis zum präzisen Schnitt mit der [die Säge, -n|Säge] – rekontextualisiert das menschliche Verhältnis zur Dingwelt.",
            "Hierbei artikuliert sich ein Handwerksethos, das den inhärenten Wert und die Reparierbarkeit von Gebrauchsgegenständen ins Zentrum rückt.",
          ],
          [
            "Technologisch hat die Elektrifizierung mit Akku-[die Bohrmaschine, -n|Bohrmaschinen] und lasergestützten [die Wasserwaage, -n|Wasserwaagen] die Barriere für Laien signifikant gesenkt.",
            "Gleichzeitig fördert die Reparaturpraxis kognitive Resilienz, da komplexe Problemlösungsstrategien bei der Analyse von Materialermüdung gefordert werden.",
            "Der wohlstrukturierte [der Werkzeugkasten, -̈|Werkzeugkasten] symbolisiert in diesem Diskurs funktionale Handlungsfähigkeit und Autarkie im privaten Raum.",
            "Das fertige Werkstück zeugt schließlich von einer schöpferischen Selbstwirksamkeit, die in abstrakten Wissensgesellschaften oft schmerzlich vermisst wird.",
          ],
        ],
      },
    },
  },

  renovieren: {
    description: "Renovierungsarbeiten: Wände streichen, Tapezieren, Spachteln und Bodenbeläge.",
    details: "Wandgestaltung, Streichen, Tapezieren und Baumaterialien (A1–B2)",
    arabicDescription:
      "تجديد ودهان المنزل (Renovieren): مفردات دهان الجدران، ورق الحائط (Tapete)، الفرشاة، الرول، المعجون (Spachtel)، شريط اللصق الورقي (Malerkrepp)، والسلالم، مع التركيز على التزامات تجديد الشقة عند تسليمها في ألمانيا.",
    words: [
      {
        german: "die Farbe, -n",
        arabic: "الدهان / البوية",
        english: "paint, colour",
        example: "Wir haben weiße Wandfarbe im Baumarkt gekauft.",
      },
      {
        german: "der Farbroller, -",
        arabic: "رول الدهان / الأسطوانة",
        english: "paint roller",
        example: "Mit dem breiten Farbroller streichen wir die Decke gleichmäßig.",
      },
      {
        german: "der Pinsel, -",
        arabic: "فرشاة الدهان",
        english: "paintbrush",
        example: "Mit dem schmalen Pinsel streicht er vorsichtig die Kanten und Ecken.",
      },
      {
        german: "das Malerkrepp, -s",
        arabic: "شريط اللصق الورقي للدهان",
        english: "masking tape, painter's tape",
        example: "Mit Malerkrepp kleben wir Steckdosen und Fensterrahmen sorgfältig ab.",
      },
      {
        german: "die Tapete, -n",
        arabic: "ورق الحائط",
        english: "wallpaper",
        example: "Die alte Tapete muss vor dem Neuanstrich komplett von der Wand entfernt werden.",
      },
      {
        german: "der Spachtel, -n",
        arabic: "سكين المعجون",
        english: "putty knife, scraper",
        example: "Mit dem Spachtel trägt er die Gipsmasse auf die Risse in der Wand auf.",
      },
      {
        german: "die Leiter, -n",
        arabic: "السلم المتنقل",
        english: "ladder",
        example: "Auf der stabilen Trittleiter erreicht sie mühelos die hohe Zimmerdecke.",
      },
      {
        german: "das Schleifpapier, -e",
        arabic: "ورق الصنفرة",
        english: "sandpaper",
        example: "Mit feinem Schleifpapier schleift er die getrocknete Spachtelmasse glatt.",
      },
      {
        german: "der Kleister, -",
        arabic: "غراء ورق الحائط",
        english: "wallpaper paste",
        example: "Der Kleister muss zehn Minuten quellen, bevor man die Tapete anbringt.",
      },
      {
        german: "die Abdeckfolie, -n",
        arabic: "مشمع تغطية الأرضيات والأثاث",
        english: "drop cloth, dust sheet, protective film",
        example: "Vor dem Streichen legen wir Abdeckfolie über das teure Parkett.",
      },
      {
        german: "der Gips, -e",
        arabic: "الجبس / معجون الحوائط",
        english: "plaster, gypsum",
        example: "Mit frischem Gips füllen wir die alten Bohrlöcher in der Wand.",
      },
      {
        german: "die Renovierung, -en",
        arabic: "التجديد / الترميم",
        english: "renovation, redecoration",
        example: "Die komplette Renovierung der Wohnung dauerte zwei Wochen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wir streichen das Wohnzimmer",
        intro: "Einfache Sätze über das Renovieren und Streichen von Zimmerwänden (A1).",
        paragraphs: [
          [
            "Am Wochenende renovieren wir unser Wohnzimmer.",
            "Zuerst legen wir die große [die Abdeckfolie, -n|Abdeckfolie] auf den Boden, um das Holz zu schützen.",
            "Mit gelbem [das Malerkrepp, -s|Malerkrepp] kleben wir die Fenster und Türen ab.",
            "Ich steige vorsichtig auf die [die Leiter, -n|Leiter], um oben zu arbeiten.",
          ],
          [
            "Mein Vater nimmt den [der Farbroller, -|Farbroller] und streicht die Wand mit heller [die Farbe, -n|Farbe].",
            "Für die Ecken nehme ich einen kleinen [der Pinsel, -|Pinsel].",
            "Kleine Löcher in der Wand füllen wir mit weißem [der Gips, -e|Gips] und glätten sie mit dem [der Spachtel, -n|Spachtel].",
            "Jetzt sieht der ganze Raum wieder frisch und sauber aus.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Einzugsvorbereitung in der neuen Wohnung",
        intro: "Wände tapezieren, Löcher verspachteln und Vorbereitungen für den Einzug (A2).",
        paragraphs: [
          [
            "Vor dem eigentlichen Umzug stand in der Mietwohnung eine gründliche [die Renovierung, -en|Renovierung] an.",
            "Im Flur löste sich die alte [die Tapete, -n|Tapete], weshalb wir sie zuerst mühsam von den Wänden kratzten.",
            "Danach rührte Tobias in einem Eimer speziellen [der Kleister, -|Kleister] an, um die neuen Bahnen aufzukleben.",
            "An mehreren Stellen besserten wir tiefe Risse mit [der Gips, -e|Gips] aus und glätteten sie mit einem flachen [der Spachtel, -n|Spachtel].",
          ],
          [
            "Nachdem die Spachtelmasse getrocknet war, rieben wir die Fläche mit rauem [das Schleifpapier, -e|Schleifpapier] ebenmäßig ab.",
            "Auf der hohen [die Leiter, -n|Leiter] stehend, strich meine Mutter die Decke mit einem breiten [der Farbroller, -|Farbroller].",
            "Weil wir alles mit [das Malerkrepp, -s|Malerkrepp] und dicker [die Abdeckfolie, -n|Abdeckfolie] geschützt hatten, tropfte kein Tropfen [die Farbe, -n|Farbe] auf den Boden.",
            "Die harte Arbeit hatte sich vollkommen gelohnt: Die Wohnung erstrahlt in neuem Glanz.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Schönheitsreparaturen im Mietrecht und handwerkliche Präzision",
        intro:
          "Gesetzliche Verpflichtungen beim Auszug, emissionsarme Wandfarben und Untergrundbehandlung (B1).",
        paragraphs: [
          [
            "Beim Auszug aus einer Mietwohnung sind Mieter häufig laut Mietvertrag dazu verpflichtet, sogenannte Schönheitsreparaturen fachgerecht auszuführen.",
            "Dazu gehört in der Regel das Verschließen alter Dübellöcher mit [der Gips, -e|Gips] und das Streichen der Wände in neutralen, hellen Farbtönen.",
            "Eine professionelle Vorbereitung ist dabei das A und O: Gründliches Abkleben mit [das Malerkrepp, -s|Malerkrepp] an Fußleisten und das flächendeckende Auslegen von [die Abdeckfolie, -n|Abdeckfolie] verhindern aufwendige Reinigungsarbeiten im Nachhinein.",
            "Um eine glatte Oberfläche zu garantieren, müssen unebene Stellen nach dem Trocknen mit feinkörnigem [das Schleifpapier, -e|Schleifpapier] plan geschliffen werden.",
          ],
          [
            "Beim Kauf von [die Farbe, -n|Farbe] greifen umweltbewusste Verbraucher zu emissions- und lösemittelfreien Dispersionsfarben mit dem Umweltzeichen „Blauer Engel“.",
            "Der Auftrag erfolgt ergonomisch: Große Wandflächen werden im Kreuzgang mit dem [der Farbroller, -|Farbroller] beschichtet, während ein schräger [der Pinsel, -|Pinsel] saubere Kanten an den Deckenleisten zieht.",
            "Wer auf einer standsicheren [die Leiter, -n|Leiter] arbeitet und präzise mit dem [der Spachtel, -n|Spachtel] umgeht, erzielt ein handwerklich einwandfreies Ergebnis.",
            "So wird die Wohnungsübergabe an den Vermieter zu einem reibungslosen und beanstandungsfreien Termin.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Bausubstanzsanierung, Bauchemie und mietrechtliche Klauselkontrolle",
        intro:
          "Juristische und bauphysikalische Analyse von Renovierungsverpflichtungen, Diffusionsoffenheit und Raumklima (B2).",
        paragraphs: [
          [
            "Die Durchführung einer umfassenden [die Renovierung, -en|Renovierung] im Bestand tangiert sowohl bauphysikalische Kernbereiche als auch hochkomplexe mietrechtliche Präzedenzfälle des Bundesgerichtshofs.",
            "Starre Renovierungsklauseln, die Mietern unabhängig vom tatsächlichen Erhaltungszustand periodische Schönheitsreparaturen vorschreiben, sind juristisch unwirksam, was Mieter vor ungerechtfertigten Sanierungskosten schützt.",
            "Wird eine Renovierung dennoch erforderlich, verlangt die Bauchemie eine sorgfältige Analyse des Untergrunds: Alte [die Tapete, -n|Tapeten] und nicht tragfähige Altanstriche müssen rückstandslos abgetragen werden, bevor neuer [der Kleister, -|Kleister] oder Tiefengrund aufgetragen wird.",
            "Rissüberbrückende Reparaturen mit mineralischem [der Gips, -e|Gips] oder kunstharzvergüteter Spachtelmasse erfordern exakte Applikation mit dem flexiblen [der Spachtel, -n|Spachtel] sowie anschließendes Glätten mit abgestimmtem [das Schleifpapier, -e|Schleifpapier].",
          ],
          [
            "Aus raumklimatischer Sicht ist die Diffusionsoffenheit der aufgetragenen [die Farbe, -n|Farbe] von überragender Bedeutung zur Vermeidung von Feuchtigkeitsstau und Schimmelbefall.",
            "Silikat- und Kalkfarben gewährleisten eine optimale Feuchtigkeitsregulierung, stellen jedoch spezifische Anforderungen an den Auftrag mit [der Farbroller, -|Farbroller] und [der Pinsel, -|Pinsel].",
            "Arbeitsschutzmaßnahmen wie das Arbeiten auf einer DIN-zertifizierten [die Leiter, -n|Leiter] und der Schutz empfindlicher Untergründe durch diffusionsoffene [die Abdeckfolie, -n|Abdeckfolie] unterstreichen den Anspruch an professionelles Handeln.",
            "Somit kulminiert die gelungene Raumgestaltung in der Synthese aus juristischer Informiertheit, materialökologischer Weitsicht und exekutiver Präzision.",
          ],
        ],
      },
    },
  },

  strom_und_heizung: {
    description:
      "Elektrische Installationen, Strom, Heizkörper, Thermostate und Energieversorgung.",
    details: "Elektroinstallation, Heizsysteme und Energieeffizienz (A1–B2)",
    arabicDescription:
      "الكهرباء والتدفئة في المنزل (Strom und Heizung): مفردات مقبس الكهرباء (Steckdose)، مفتاح النور (Lichtschalter)، كابل الكهرباء، صندوق القواطع (Sicherungskasten)، التدفئة المركزية (Heizung)، ومنظم الحرارة (Thermostat)، مع التركيز على ترشيد الطاقة والتهوية في الشتاء (Stoßlüften).",
    words: [
      {
        german: "die Steckdose, -n",
        arabic: "مقبس الكهرباء / الفيشة",
        english: "power socket, wall outlet",
        example: "Der Stecker vom Staubsauger passt perfekt in die Steckdose.",
      },
      {
        german: "der Lichtschalter, -",
        arabic: "مفتاح الإضاءة / زر النور",
        english: "light switch",
        example: "Gleich neben der Tür befindet sich der Lichtschalter für die Deckenlampe.",
      },
      {
        german: "das Stromkabel, -",
        arabic: "كابل / سلك الكهرباء",
        english: "power cable, power cord",
        example: "Das schwarze Stromkabel verbindet den Fernseher mit der Steckdose.",
      },
      {
        german: "der Sicherungskasten, -̈",
        arabic: "صندوق القواطع الكهربائية / لوحة المنصهرات",
        english: "fuse box, circuit breaker box",
        example: "Wenn der Strom ausfällt, schaue ich zuerst in den Sicherungskasten.",
      },
      {
        german: "der Stromzähler, -",
        arabic: "عداد الكهرباء",
        english: "electricity meter",
        example: "Einmal im Jahr liest der Vermieter den genauen Stand am Stromzähler ab.",
      },
      {
        german: "die Heizung, -en",
        arabic: "التدفئة / جهاز التدفئة",
        english: "heating, heater",
        example: "Im kalten Winter drehen wir die Heizung in allen Räumen auf Stufe drei.",
      },
      {
        german: "der Heizkörper, -",
        arabic: "ردياتير التدفئة / المشعاع",
        english: "radiator",
        example: "Unter dem großen Fenster hängt ein flacher, weißer Heizkörper.",
      },
      {
        german: "das Thermostat, -e",
        arabic: "منظم الحرارة / الثرموستات",
        english: "thermostat",
        example: "Mit dem digitalen Thermostat regelt man die Raumtemperatur gradgenau.",
      },
      {
        german: "die Glühbirne, -n",
        arabic: "المصباح الكهربائي / اللمبة",
        english: "light bulb",
        example: "Ich habe die alte Glühbirne durch eine sparsame LED-Lampe ersetzt.",
      },
      {
        german: "die Mehrfachsteckdose, -n",
        arabic: "مشترك الكهرباء متعدد المنافذ",
        english: "power strip, extension lead",
        example: "Am Schreibtisch schließe ich Computer und Drucker an eine Mehrfachsteckdose an.",
      },
      {
        german: "der Stromausfall, -̈e",
        arabic: "انقطاع التيار الكهربائي",
        english: "power outage, blackout",
        example: "Während des heftigen Gewitters gab es einen kurzen Stromausfall.",
      },
      {
        german: "die Fernwärme (Sg.)",
        arabic: "التدفئة المركزية للمدينة",
        english: "district heating",
        example: "Unsere Wohnanlage wird umweltfreundlich mit Fernwärme versorgt.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Licht und Wärme zu Hause",
        intro: "Einfache Beschreibungen über Lampen, Strom und die Heizung im Winter (A1).",
        paragraphs: [
          [
            "Wenn es dunkel wird, drücke ich auf den [der Lichtschalter, -|Lichtschalter].",
            "Sofort brennt das helle Licht von der neuen [die Glühbirne, -n|Glühbirne].",
            "Das Ladekabel vom Handy stecke ich in die [die Steckdose, -n|Steckdose].",
            "Am Schreibtisch benutze ich eine praktische [die Mehrfachsteckdose, -n|Mehrfachsteckdose] für Computer und Lampe.",
          ],
          [
            "Draußen ist es sehr kalt, aber in der Wohnung ist es angenehm warm.",
            "Ich drehe das runde [das Thermostat, -e|Thermostat] an der Wand auf Stufe drei.",
            "Der große [der Heizkörper, -|Heizkörper] wird schnell heiß.",
            "Die [die Heizung, -en|Heizung] funktioniert zuverlässig und sorgt für Gemütlichkeit.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein plötzlicher Stromausfall am Abend",
        intro: "Sicherungen kontrollieren, Energiesparen und das richtige Heizen im Winter (A2).",
        paragraphs: [
          [
            "Gestern Abend saßen wir gemütlich beim Abendessen, als plötzlich das Licht ausging.",
            "Es gab einen unerwarteten [der Stromausfall, -̈e|Stromausfall] im gesamten Wohnblock.",
            "Mit der Taschenlampe ging mein Vater vorsichtig in den Keller zum [der Sicherungskasten, -̈|Sicherungskasten].",
            "Eine Sicherung war herausgesprungen, weil zu viele Geräte gleichzeitig an einer [die Mehrfachsteckdose, -n|Mehrfachsteckdose] angeschlossen waren.",
          ],
          [
            "Nachdem er den Schalter wieder nach oben gedrückt hatte, funktionierte das Licht sofort wieder.",
            "Am Monatsende kontrollieren wir regelmäßig unseren [der Stromzähler, -|Stromzähler], um den Energieverbrauch im Blick zu behalten.",
            "Weil die Energiepreise gestiegen sind, stellen wir das [das Thermostat, -e|Thermostat] an jedem [der Heizkörper, -|Heizkörper] nachts herunter.",
            "Dank unserer modernen [die Fernwärme (Sg.)|Fernwärme] bleibt die Wohnung trotzdem warm und behaglich.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Energiesparen und richtiges Heizen im Winter",
        intro: "Stoßlüften, Thermostateinstellungen und Vermeidung elektrischer Überlastung (B1).",
        paragraphs: [
          [
            "Angesichts steigender Energiepreise und des Klimawandels gewinnt das effiziente Heizen und Stromsparen enorm an Relevanz.",
            "Ein gekipptes Fenster bei laufender [die Heizung, -en|Heizung] verschwendet wertvolle Wärme; stattdessen empfehlen Energieberater mehrmals täglich intensives Stoßlüften bei heruntergedrehtem [das Thermostat, -e|Thermostat].",
            "Vor jedem [der Heizkörper, -|Heizkörper] sollte ausreichend Platz frei bleiben, damit die erwärmte Luft ungehindert im Raum zirkulieren kann.",
            "Besonders in älteren Gebäuden lohnt sich die Umstellung auf eine zentrale [die Fernwärme (Sg.)|Fernwärme] oder Wärmepumpentechnik, um CO2-Emissionen dauerhaft zu senken.",
          ],
          [
            "Im Bereich der Elektrizität lassen sich durch einfache Verhaltensänderungen spürbare Einsparungen erzielen.",
            "Der Austausch herkömmlicher Leuchtmittel gegen eine moderne LED-[die Glühbirne, -n|Glühbirne] amortisiert sich innerhalb weniger Monate.",
            "Um gefährliche Überhitzungen und einen [der Stromausfall, -̈e|Stromausfall] zu vermeiden, dürfen mehrere leistungshungrige Großgeräte keinesfalls an dieselbe [die Mehrfachsteckdose, -n|Mehrfachsteckdose] gekoppelt werden.",
            "Regelmäßiges Ablesen vom [der Stromzähler, -|Stromzähler] und der Blick in den [der Sicherungskasten, -̈|Sicherungskasten] schaffen Transparenz über den häuslichen Stromverbrauch.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gebäudeenergiegesetz, Dekarbonisierung und intelligente Netztechnik",
        intro:
          "Energiepolitische und technische Debatten über Wärmewende, Smart Grids und Gebäudeautomation (B2).",
        paragraphs: [
          [
            "Die Transformation der Gebäudeinfrastruktur bildet das Herzstück der europäischen Energiewende und der gesetzlichen Vorgaben des Gebäudeenergiegesetzes (GEG).",
            "Fossile Heizsysteme werden schrittweise durch hocheffiziente Großtechnologien wie die kommunale [die Fernwärme (Sg.)|Fernwärme] oder hybride Wärmepumpensysteme substituiert.",
            "Hierbei fungieren smarte, programmierbare [das Thermostat, -e|Thermostate], die wetter- und anwesenheitsgesteuert agieren, als entscheidende Stellschrauben zur Minimierung des Primärenergiebedarfs am [der Heizkörper, -|Heizkörper].",
            "Zugleich fordert der Gesetzgeber die regelmäßige thermische Optimierung der Gebäudehülle, um Wärmeverluste strukturell zu minimieren.",
          ],
          [
            "Parallel dazu vollzieht sich im Niederspannungsnetz der Übergang zu sogenannten Smart Grids.",
            "Ein digitaler intelligenter [der Stromzähler, -|Stromzähler] (Smart Meter) erfasst Lastspitzen in Echtzeit und ermöglicht dynamische Stromtarife, die den Verbrauch an günstige Erzeugungsfenster erneuerbarer Energien anpassen.",
            "Im heimischen [der Sicherungskasten, -̈|Sicherungskasten] sorgen selektive Fehlerstrom-Schutzschalter (FI-Schalter) für Personenschutz, während Überspannungsableiter sensible Elektronik an der [die Steckdose, -n|Steckdose] vor Netzschwankungen absichern.",
            "Die energetische Autonomie des Wohnraums wandelt sich somit von einer rein technischen Infrastruktur zu einem aktiven Baustein dezentraler Energiesysteme.",
          ],
        ],
      },
    },
  },

  gartengeraete: {
    description:
      "Werkzeuge und Geräte für den Garten: Rasenmäher, Schaufel, Gartenschere und Schlauch.",
    details: "Gartengeräte, Bewässerung und Bodenbearbeitung (A1–B2)",
    arabicDescription:
      "أدوات ومعدات الحديقة (Gartengeräte): مفردات جزازة العشب (Rasenmäher)، خرطوم المياه (Gartenschlauch)، مرشة المياه (Gießkanne)، المجرفة، مقص تقليم الأشجار، وعربة الحديقة اليدوية (Schubkarre).",
    words: [
      {
        german: "der Rasenmäher, -",
        arabic: "جزازة / ماكينة قص العشب",
        english: "lawnmower",
        example: "Am Samstagnachmittag mäht der Nachbar den Rasen mit dem Elektrorasenmäher.",
      },
      {
        german: "der Gartenschlauch, -̈e",
        arabic: "خرطوم مياه الحديقة",
        english: "garden hose",
        example: "Mit dem langen Gartenschlauch bewässert er die Blumenbeete.",
      },
      {
        german: "die Gießkanne, -n",
        arabic: "مرشة / كنة ري النباتات",
        english: "watering can",
        example: "Mit der Gießkanne gieße ich die Tomatenpflanzen im Gewächshaus.",
      },
      {
        german: "die Schaufel, -n",
        arabic: "المجرفة العريضة (للرمال والتراب)",
        english: "shovel",
        example: "Mit der Schaufel laden wir Sand in die Schubkarre.",
      },
      {
        german: "der Spaten, -",
        arabic: "المجرفة الحادة للحفر في الأرض",
        english: "spade",
        example: "Mit dem Spaten sticht er die harte Erde im Gartenbeet um.",
      },
      {
        german: "die Harke, -n / der Rechen, -",
        arabic: "المجراد / مشط الحديقة",
        english: "rake",
        example: "Im Herbst sammeln wir das welke Laub mit der Harke zusammen.",
      },
      {
        german: "die Gartenschere, -n",
        arabic: "مقص تقليم الحديقة والأشجار",
        english: "pruning shears, secateurs",
        example: "Mit der scharfen Gartenschere schneidet sie trockene Rosenzweige ab.",
      },
      {
        german: "die Schubkarre, -n",
        arabic: "عربة الحديقة اليدوية ذات العجلة",
        english: "wheelbarrow",
        example: "Er transportiert schwere Steine mit der stabilen Schubkarre.",
      },
      {
        german: "die Heckenschere, -n",
        arabic: "مقص تشذيب سياج الشجيرات",
        english: "hedge shears, hedge trimmer",
        example: "Mit der elektrischen Heckenschere bringt er die Hecke in Form.",
      },
      {
        german: "die Gartenhandschuhe (Pl.)",
        arabic: "قفازات العمل في الحديقة",
        english: "gardening gloves",
        example: "Dornen können die Hände nicht verletzen, wenn man Gartenhandschuhe trägt.",
      },
      {
        german: "der Rasensprenger, -",
        arabic: "مرش ري العشب الدوار",
        english: "lawn sprinkler",
        example: "Der Rasensprenger dreht sich im Kreis und bewässert die große Wiese.",
      },
      {
        german: "der Laubsauger, -",
        arabic: "منفاخ وشفاط أوراق الشجر",
        english: "leaf blower, leaf vacuum",
        example: "Der Laubsauger bläst herabgefallene Blätter schnell auf einen Haufen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Geräte in unserem Garten",
        intro: "Einfache Beschreibungen über Gartenwerkzeuge und das Gießen von Blumen (A1).",
        paragraphs: [
          [
            "Hinter unserem Haus haben wir einen großen, grünen Garten.",
            "Im kleinen Schuppen stehen alle wichtigen Geräte für die Arbeit.",
            "Dort steht ein lauter [der Rasenmäher, -|Rasenmäher] für das grüne Gras.",
            "An der Wand hängt ein langer grüner [der Gartenschlauch, -̈e|Gartenschlauch].",
          ],
          [
            "Ich ziehe feste [die Gartenhandschuhe (Pl.)|Gartenhandschuhe] an, um die Rosen zu schneiden.",
            "Meine Mutter nimmt die [die Gartenschere, -n|Gartenschere] für die kleinen Äste.",
            "Mit einer vollen [die Gießkanne, -n|Gießkanne] gebe ich den bunten Blumen frisches Wasser.",
            "Mit der [die Schubkarre, -n|Schubkarre] fahren wir Erde zum Gemüsebeet.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Gartentag im Frühling",
        intro: "Beete umgraben, Rasen pflegen und Sträucher zurückschneiden (A2).",
        paragraphs: [
          [
            "Sobald die ersten warmen Sonnenstrahlen im März herauskamen, begann Familie Becker mit den Gartenarbeiten.",
            "Der Vater holte den scharfen [der Spaten, -|Spaten] aus dem Geräteschuppen und grub das Gemüsebeet gründlich um.",
            "Danach ebnete seine Tochter die Erde mit der hölzernen [die Harke, -n / der Rechen, -|Harke] ein, damit die Samen gut keimen können.",
            "Mit der [die Schaufel, -n|Schaufel] füllten sie nahrhafte Komposterde in die schwere [die Schubkarre, -n|Schubkarre].",
          ],
          [
            "Anschließend schnitt der Vater mit der elektrischen [die Heckenschere, -n|Heckenschere] die Buchsbaumhecke an der Grundstücksgrenze gerade ab.",
            "Weil es trocken war, schloss er den [der Gartenschlauch, -̈e|Gartenschlauch] am Außenhahn an und installierte einen rotierenden [der Rasensprenger, -|Rasensprenger] auf dem Rasen.",
            "Mit dem leisen Akku-[der Rasenmäher, -|Rasenmäher] mähte er die Wiese auf vier Zentimeter Höhe.",
            "Am Ende des Tages sah der Garten gepflegt und frühlingshaft aus.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Effiziente Gartenpflege und richtige Werkzeugauswahl",
        intro:
          "Pflege und Wartung von Geräten, Ergonomie und ressourcenschonende Bewässerung (B1).",
        paragraphs: [
          [
            "Ein gepflegter Garten ist das Resultat regelmäßiger Arbeit und des gezielten Einsatzes professioneller Geräte.",
            "Vor Beginn der Saison sollten Schneidwerkzeuge wie die [die Gartenschere, -n|Gartenschere] und die [die Heckenschere, -n|Heckenschere] gründlich geschliffen und geölt werden, um saubere Schnittkanten zu gewährleisten und Pflanzenkrankheiten vorzubeugen.",
            "Bei Erdarbeiten schont ein ergonomisch geformter [der Spaten, -|Spaten] mit T-Griff die Rückenmuskulatur erheblich beim Umgraben.",
            "Um Schmutz und Dornenverletzungen zu vermeiden, sind dornenfeste [die Gartenhandschuhe (Pl.)|Gartenhandschuhe] aus echtem Leder unverzichtbar.",
          ],
          [
            "Besonders das Thema Bewässerung verlangt in heißen Sommern ein nachhaltiges Wassermanagement.",
            "Anstatt mittags bei starker Verdunstung den [der Rasensprenger, -|Rasensprenger] laufen zu lassen, bewässert man Beete frühmorgens gezielt mit der [die Gießkanne, -n|Gießkanne] oder einem wassersparenden Tropfschlauch.",
            "Für den Abtransport von Baumschnitt und Steinen erweist sich eine ausbalancierte [die Schubkarre, -n|Schubkarre] mit Luftbereifung als unverzichtbarer Lastenträger.",
            "Wer seine Gartengeräte nach Gebrauch säubert und trocken lagert, hat jahrzehntelang Freude an verlässlichen Helfern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Biodiversität, Lärmschutz und die Mechanisierung der Gartenkultur",
        intro:
          "Ökologische Kritik an motorisierten Geräten und Plädoyer für naturnahes Gärtnern (B2).",
        paragraphs: [
          [
            "Die fortschreitende Mechanisierung des privaten Hausgartens durch Hochleistungsgeräte steht zunehmend im Spannungsfeld ökologischer und emittierender Zielkonflikte.",
            "Insbesondere der notorische [der Laubsauger, -|Laubsauger] gerät regelmäßig in die Kritik von Naturschutzverbänden, da sein Einsatz nicht nur massive Lärmimmissionen verursacht, sondern auch die für das Bodenökosystem essenzielle Mikrofauna und Insektenpopulationen vernichtet.",
            "Ökologisch orientierte Gärtner rekurrieren daher bewusst auf traditionelle manuelle Methoden mit der klassischen [die Harke, -n / der Rechen, -|Harke], um Laubmulch als natürlichen Frostschutz auf den Beeten zu belassen.",
            "Auch beim Rasenmähen vollzieht sich ein Paradigmenwechsel: Anstelle monotoner Zierrasen, die mit dem [der Rasenmäher, -|Rasenmäher] wöchentlich kurz gehalten werden, etablieren sich blütenreiche Wildblumenwiesen.",
          ],
          [
            "Gleichzeitig forciert der Klimawandel adaptive Bewässerungsstrategien.",
            "Der unbedachte Einsatz von Trinkwasser via [der Gartenschlauch, -̈e|Gartenschlauch] weicht zunehmend zisternenbasierten Regenwassernutzungssystemen, bei denen die dosierte Verteilung mittels [die Gießkanne, -n|Gießkanne] die Ressourcen schont.",
            "Die Handhabung von Präzisionswerkzeugen wie der geschmiedeten [die Gartenschere, -n|Gartenschere] symbolisiert dabei ein gärtnerisches Ethos, das Pflanzenwachstum nicht gewaltsam dominiert, sondern kooperativ lenkt.",
            "Somit transformiert sich die instrumentelle Gartenarbeit von der bloßen Landschaftsdisziplinierung zu einer reflektierten Praxis gelebten Artenschutzes.",
          ],
        ],
      },
    },
  },

  die_gartenarbeit: {
    description: "Tätigkeiten im Garten: Pflanzen, Säen, Gießen, Rasenmähen, Jäten und Ernten.",
    details: "Gartenpraxis, Jahreszeiten, Anbau und Pflege (A1–B2)",
    arabicDescription:
      "الأعمال والأنشطة الزراعية في الحديقة (Gartenarbeit): مفردات زراعة البذور (säen)، الغرس (pflanzen)، إزالة الأعشاب الضارة (Unkraut jäten)، الري، التسميد (düngen)، تقليم الأشجار، وحصاد الثمار والخضار.",
    words: [
      {
        german: "pflanzen (pflanzte, hat gepflanzt)",
        arabic: "يغرس / يزرع شتلة",
        english: "to plant",
        example: "Im Frühling pflanzen wir bunte Tulpen und Tomaten ins Beet.",
      },
      {
        german: "säen (säte, hat gesät)",
        arabic: "يبذر / ينثر البذور",
        english: "to sow",
        example: "Der Gärtner sät Grassamen auf der kahl gewordenen Wiese.",
      },
      {
        german: "gießen (goss, hat gegossen)",
        arabic: "يسقي / يروي النباتات",
        english: "to water, to pour",
        example: "Bei sommerlicher Hitze muss man die Pflanzen täglich gießen.",
      },
      {
        german: "mähen (mähte, hat gemäht)",
        arabic: "يقص / يجز العشب",
        english: "to mow",
        example: "Er mäht den Rasen alle zwei Wochen am Freitagnachmittag.",
      },
      {
        german: "Unkraut jäten",
        arabic: "اقتلاع وإزالة الأعشاب الضارة",
        english: "to weed, to pull weeds",
        example: "Zwischen den Karotten müssen wir regelmäßig das Unkraut jäten.",
      },
      {
        german: "die Ernte, -n",
        arabic: "المحصول / الحصاد",
        english: "harvest",
        example: "Die diesjährige Apfelernte fiel besonders reichhaltig aus.",
      },
      {
        german: "der Kompost, -e",
        arabic: "السماد العضوي / الكومبوست",
        english: "compost",
        example: "Organische Küchenabfälle wandern zur Verrottung auf den Kompost.",
      },
      {
        german: "düngen (düngte, hat gedüngt)",
        arabic: "يسمد التربة",
        english: "to fertilize",
        example: "Im Frühjahr düngen wir die Obstbäume mit organischem Dünger.",
      },
      {
        german: "beschneiden (beschnitt, hat beschnitten)",
        arabic: "يشذب / يقلم الأشجار والأغصان",
        english: "to prune, to trim",
        example: "Im Februar muss man die Apfelbäume fachgerecht beschneiden.",
      },
      {
        german: "das Beet, -e",
        arabic: "حوض الزهور / رقعة الزراعة",
        english: "flowerbed, garden bed",
        example: "Im Hochbeet wachsen Erdbeeren, Salat und frische Kräuter.",
      },
      {
        german: "der Samen, -",
        arabic: "البذرة / الحبة",
        english: "seed",
        example: "Aus dem winzigen Samen wächst bald eine prächtige Sonnenblume.",
      },
      {
        german: "die Knospe, -n",
        arabic: "البرعم / زهرة قبل تفتحها",
        english: "bud",
        example: "An den Rosensträuchern öffnen sich die ersten zarten Knospen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Fleißig im Garten arbeiten",
        intro: "Einfache Beschreibungen über typische Tätigkeiten bei der Gartenarbeit (A1).",
        paragraphs: [
          [
            "Im Frühling arbeiten wir gern draußen an der frischen Luft.",
            "In das große [das Beet, -e|Beet] [säen (säte, hat gesät)|säen] wir kleine Karottensamen.",
            "Daneben [pflanzen (pflanzte, hat gepflanzt)|pflanzen] wir rote Erdbeeren und Basilikum.",
            "Jeden Abend nach Sonnenuntergang [gießen (goss, hat gegossen)|gießen] wir alle Pflanzen gründlich.",
          ],
          [
            "Am Wochenende muss mein Vater den Rasen [mähen (mähte, hat gemäht)|mähen].",
            "Gemeinsam müssen wir lästiges [Unkraut jäten|Unkraut jäten], damit die Blumen wachsen.",
            "An den Rosen zeigen sich schon die ersten roten [die Knospe, -n|Knospen].",
            "Im Spätsommer freuen wir uns auf eine köstliche [die Ernte, -n|Ernte] von frischen Äpfeln.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein erfolgreiches Gartenjahr",
        intro: "Aussaat, Bodenpflege und Ernte von Gemüse im eigenen Hausgarten (A2).",
        paragraphs: [
          [
            "Vor zwei Monaten haben Lisa und ihr Großvater ein neues Hochbeet im Garten gebaut.",
            "Zuerst füllten sie nährstoffreichen [der Kompost, -e|Kompost] ein und begannen, die Erde organisch zu [düngen (düngte, hat gedüngt)|düngen].",
            "In gleichmäßigen Reihen legten sie jeden einzelnen [der Samen, -|Samen] für Radieschen und Spinat in den Boden.",
            "An warmen Frühlingstagen half Lisa fleißig mit, das wuchernde [Unkraut jäten|Unkraut zu jäten].",
          ],
          [
            "Vor dem Austrieb musste der Großvater noch die alten Äste der Weinreben [beschneiden (beschnitt, hat beschnitten)|beschneiden].",
            "Weil es im Juli kaum regnete, mussten sie die Tomatenpflanzen jeden Abend ausgiebig [gießen (goss, hat gegossen)|gießen].",
            "Schon im August war die [die Ernte, -n|Ernte] so üppig, dass sie Körbe voller Tomaten an die Nachbarn verschenkten.",
            "Selbst angebautes Gemüse schmeckt einfach viel aromatischer als gekaufte Ware.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Ökologischer Gartenbau und naturnahe Bewirtschaftung",
        intro:
          "Kreislaufwirtschaft mit Kompost, Fruchtfolge und Schädlingsbekämpfung ohne Chemie (B1).",
        paragraphs: [
          [
            "Immer mehr Hobbygärtner entscheiden sich bewusst für biologisches Gärtnern im Einklang mit der Natur.",
            "Das Herzstück eines jeden ökologischen Gartens ist der eigene [der Kompost, -e|Kompost], auf dem Küchenabfälle und Rasenschnitt zu wertvollem Humus transformiert werden.",
            "Wer den Boden regelmäßig mit reifem Humus [düngen (düngte, hat gedüngt)|düngt], verbessert die Bodenstruktur und Wasserspeicherfähigkeit nachhaltig, ohne synthetische Düngemittel einsetzen zu müssen.",
            "Im vorbereiteten [das Beet, -e|Beet] sorgt eine durchdachte Mischkultur dafür, dass Schädlinge auf natürliche Weise ferngehalten werden.",
          ],
          [
            "Auch die manuelle Pflege erfordert gärtnerisches Fingerspitzengefühl über alle Jahreszeiten hinweg.",
            "Im Spätwinter ist der richtige Zeitpunkt, um Obstgehölze fachgerecht zu [beschneiden (beschnitt, hat beschnitten)|beschneiden], damit Licht und Luft an die heranwachsenden Früchte gelangen.",
            "Bevor sich aus dem winzigen [der Samen, -|Samen] pralle Früchte entwickeln, muss man geduldig [Unkraut jäten|Unkraut jäten] und schonend [gießen (goss, hat gegossen)|gießen].",
            "Wenn schließlich die [die Ernte, -n|Ernte] eingebracht wird, belohnt die Natur den Gärtner mit gesunden, pestizidfreien Lebensmitteln.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Permakultur, Resilienz und die Ökologie der Selbstversorgung",
        intro:
          "Systemtheoretische Betrachtung von Permakultur-Kreisläufen, Bodengesundheit und urbaner Subsistenz (B2).",
        paragraphs: [
          [
            "Im Diskurs zeitgenössischer Agrarökologie gewinnt das Konzept der Permakultur als zukunftsfähiges Gestaltungsprinzip für den Hausgarten rapide an Bedeutung.",
            "Anstelle energieintensiver Monokulturen, bei denen man lediglich den Rasen kurz [mähen (mähte, hat gemäht)|mäht], etabliert die Permakultur sich selbst regulierende Lebensgemeinschaften.",
            "Durch geschlossene Nährstoffkreisläufe auf dem [der Kompost, -e|Kompost] wird Biomasse rezykliert, wodurch das Erfordernis externen Stickstoffzufuhr durch künstliches [düngen (düngte, hat gedüngt)|Düngen] obsolet wird.",
            "Jeder ausgebrachte [der Samen, -|Samen] wird im Hinblick auf standortangepasste Pflanzengemeinschaften gewählt, die Symbiosen mit Mykorrhiza-Pilzen im Wurzelraum eingehen.",
          ],
          [
            "Die traditionelle gärtnerische Praxis wird dabei neu kontextualisiert: Das rigide [Unkraut jäten|Unkrautjäten] weicht einer differenzierten Beikrautakzeptanz, die Lebensraum für Bestäuberinsekten sichert.",
            "Gezieltes [beschneiden (beschnitt, hat beschnitten)|Beschneiden] von Spalierobst und Bäumen folgt physiologischen Wachstumsgesetzen zur Maximierung der Photosynthesekapazität.",
            "Wenn an den Obstbäumen im Frühjahr die [die Knospe, -n|Knospen] aufbrechen, kündigt dies nicht nur die spätere [die Ernte, -n|Ernte] an, sondern signalisiert das intakte Funktionieren eines resilienten Mikroökosystems.",
            "Auf diese Weise transzendiert das Gärtnern den Status eines Hobbys und manifestiert sich als angewandte ökologische Philosophie der Subsistenz.",
          ],
        ],
      },
    },
  },
};

const zhPath = "src/data/vocabulary/zu-hause.json";
const zh = JSON.parse(fs.readFileSync(zhPath, "utf8"));

for (const sec of zh.sections) {
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

const res = vocabularyCollectionSchema.safeParse(zh);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2) + "\n", "utf8");
console.log("Batch 3 successfully saved to zu-hause.json!");
