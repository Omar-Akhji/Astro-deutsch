import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  das_jugendzimmer: {
    description:
      "Das Zimmer für Jugendliche: Rückzugsort, Lernen, Musik hören und Freunde treffen.",
    details: "Jugendmöbel, Medientechnik und Selbstständigkeit (A1–B2)",
    arabicDescription:
      "غرفة المراهقين والشباب (Jugendzimmer): مفردات مكتب الدراسة، السرير الأريكة، خزانة الملابس، أجهزة الحاسوب المحمول، الملصقات، ومكبرات الصوت، مع التركيز على استقلالية المراهقين ومساحتهم الشخصية.",
    words: [
      {
        german: "das Jugendzimmer, -",
        arabic: "غرفة الشباب / المراهقين",
        english: "teenager's room",
        example: "Im Jugendzimmer hört der Teenager Musik und lernt für Prüfungen.",
      },
      {
        german: "das Schlafsofa, -s",
        arabic: "الكنبة السرير (أريكة قابلة للتحول لسرير)",
        english: "sofa bed, sleeper sofa",
        example: "Auf dem praktischen Schlafsofa kann am Wochenende ein Freund übernachten.",
      },
      {
        german: "der Schreibtischstuhl, -̈e",
        arabic: "كرسي المكتب الدوار",
        english: "desk chair, swivel chair",
        example: "Der ergonomische Schreibtischstuhl schont den Rücken beim stundenlangen Lernen.",
      },
      {
        german: "das Bücherregal, -e",
        arabic: "رف الكتب / مكتبة الحائط",
        english: "bookshelf, bookcase",
        example: "Im Bücherregal stehen Schulbücher und spannende Romane.",
      },
      {
        german: "der Kleiderschrank, -̈e",
        arabic: "خزانة الملابس / الدولاب",
        english: "wardrobe, closet",
        example: "Seine Jacken und Hemden hängen ordentlich im großen Kleiderschrank.",
      },
      {
        german: "das Poster, -",
        arabic: "الملصق الجداري / البوستر",
        english: "poster",
        example: "An der Wand hängt ein großes Poster von seiner Lieblingsband.",
      },
      {
        german: "der Laptop, -s",
        arabic: "الحاسوب المحمول",
        english: "laptop",
        example: "Für die Projektarbeit recherchiert sie auf ihrem modernen Laptop.",
      },
      {
        german: "die Kopfhörer (Pl.)",
        arabic: "سماعات الرأس / الأذن",
        english: "headphones",
        example: "Er setzt die Kopfhörer auf, um ungestört Musik zu hören.",
      },
      {
        german: "der Sitzsack, -̈e",
        arabic: "البين باج (كيس الجلوس المحشو)",
        english: "beanbag chair",
        example: "In der Ecke liegt ein gemütlicher Sitzsack zum Chillen.",
      },
      {
        german: "die Pinnwand, -̈e",
        arabic: "لوحة الملاحظات (الفلينية)",
        english: "pinboard, noticeboard",
        example: "An der Pinnwand befestigt sie wichtige Termine und Fotos mit Freunden.",
      },
      {
        german: "der Lautsprecher, -",
        arabic: "مكبر الصوت / السماعة",
        english: "speaker, loudspeaker",
        example: "Über den kabellosen Lautsprecher spielt er seine Lieblingsplaylist ab.",
      },
      {
        german: "die Privatsphäre (Sg.)",
        arabic: "الخصوصية الشخصية",
        english: "privacy",
        example: "Jugendliche brauchen eine geschützte Privatsphäre in ihrem eigenen Zimmer.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Zimmer, meine Welt",
        intro: "Einfache Sätze über die Einrichtung und Aktivitäten im Jugendzimmer (A1).",
        paragraphs: [
          [
            "Mein [das Jugendzimmer, -|Jugendzimmer] ist mein liebster Ort im ganzen Haus.",
            "An der Wand hängt ein buntes [das Poster, -|Poster] von meiner Lieblingsband.",
            "In der Mitte steht ein bequemes [das Schlafsofa, -s|Schlafsofa], auf dem ich oft sitze und lese.",
            "Meine Kleidung liegt ordentlich gefaltet im [der Kleiderschrank, -̈e|Kleiderschrank].",
          ],
          [
            "Am Schreibtisch habe ich einen bequemen [der Schreibtischstuhl, -̈e|Schreibtischstuhl].",
            "Dort mache ich Hausaufgaben auf meinem [der Laptop, -s|Laptop] und lerne Vokabeln.",
            "Wenn ich mich ausruhen möchte, setze ich meine [die Kopfhörer (Pl.)|Kopfhörer] auf oder chille im weichen [der Sitzsack, -̈e|Sitzsack].",
            "Hier habe ich meine Ruhe und fühle mich frei.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein Nachmittag mit Freunden nach der Schule",
        intro: "Gemeinsames Lernen, Musik und Übernachtungen im Jugendzimmer (A2).",
        paragraphs: [
          [
            "Gestern Nachmittag kam mein Schulfreund Lukas zu mir nach Hause, um für die Geschichtsprüfung zu lernen.",
            "Wir holten schwere Lexika aus dem hohen [das Bücherregal, -e|Bücherregal] und öffneten Präsentationen auf dem [der Laptop, -s|Laptop].",
            "Weil wir nur einen Schreibtischstuhl hatten, setzte sich Lukas entspannt in den roten [der Sitzsack, -̈e|Sitzsack].",
            "An der großen [die Pinnwand, -̈e|Pinnwand] notierten wir alle wichtigen Jahreszahlen und Fakten auf bunten Zetteln.",
          ],
          [
            "Nach dem Lernen schalteten wir den tragbaren [der Lautsprecher, -|Lautsprecher] ein und hörten unsere neue Playlist.",
            "Weil es schon spät wurde, bauten wir das praktische [das Schlafsofa, -s|Schlafsofa] mit Decken und Kissen für die Nacht um.",
            "Meine Eltern respektieren meine [die Privatsphäre (Sg.)|Privatsphäre] und klopfen immer an, bevor sie hereinkommen.",
            "Es war ein produktiver und sehr unterhaltsamer Abend.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Autonomie und Selbstverwirklichung in der Pubertät",
        intro:
          "Bedeutung des Jugendzimmers als Identitätsraum und Rückzugsort vor familiären Spannungen (B1).",
        paragraphs: [
          [
            "Während des Heranwachsens wandelt sich das ehemalige Spielzimmer grundlegend in ein eigenständiges [das Jugendzimmer, -|Jugendzimmer].",
            "Dieser Raum spiegelt den individuellen Geschmack und die Persönlichkeit des Jugendlichen wider, was sich oft an provokanten [das Poster, -|Postern] und individueller Dekoration zeigt.",
            "Gleichzeitig steigen die schulischen Anforderungen: Ein ergonomischer [der Schreibtischstuhl, -̈e|Schreibtischstuhl], ein leistungsfähiger [der Laptop, -s|Laptop] und ein geordnetes [das Bücherregal, -e|Bücherregal] sind unverzichtbar für eine strukturierte Prüfungsvorbereitung.",
            "An der persönlichen [die Pinnwand, -̈e|Pinnwand] verschmelzen Stundenpläne mit Fotos von Festivals und Konzertkarten zu einer persönlichen Collage.",
          ],
          [
            "Für Jugendliche ist die eigene [die Privatsphäre (Sg.)|Privatsphäre] von herausragender psychologischer Bedeutung.",
            "Wenn familiäre Diskussionen anstrengend werden, bietet das Zimmer einen sicheren Rückzugsort, wo man mit geräuschunterdrückenden [die Kopfhörer (Pl.)|Kopfhörern] abschalten kann.",
            "Gleichzeitig dient das multifunktionale [das Schlafsofa, -s|Schlafsofa] oder ein bequemer [der Sitzsack, -̈e|Sitzsack] als sozialer Treffpunkt für Gleichaltrige.",
            "Hier werden vertrauliche Gespräche geführt, die außerhalb der elterlichen Wahrnehmung stattfinden müssen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Jugendkultur, Raumpraktiken und digitale Mediatisierung",
        intro:
          "Soziologische Analyse des Jugendzimmers im Zeitalter hybrider Realitäten und Identitätskonstruktion (B2).",
        paragraphs: [
          [
            "In der jugendsoziologischen Forschung gilt das [das Jugendzimmer, -|Jugendzimmer] als privilegierter Mikrokosmos subkultureller Artikulation und biografischer Verortung.",
            "Der physische Raum wird durch die Omnipräsenz digitaler Endgeräte wie dem [der Laptop, -s|Laptop] und vernetzten [der Lautsprecher, -|Lautsprechern] entgrenzt, wodurch die Grenze zwischen lokaler Isolation und globaler Peer-Group-Konnaktivität kollabiert.",
            "Das Tragen von [die Kopfhörer (Pl.)|Kopfhörern] fungiert hierbei als symbolisches Akustik-Schild, das eine temporäre Entkopplung von der familiären Umwelt signalisiert.",
            "Möbelelemente wie das wandelbare [das Schlafsofa, -s|Schlafsofa] unterstreichen den multifunktionalen Charakter eines Raumes, der simultan als Schlafstätte, Arbeitsbereich und Repräsentationsbühne dient.",
          ],
          [
            "Die Verteidigung der eigenen [die Privatsphäre (Sg.)|Privatsphäre] markiert einen wesentlichen Entwicklungsschritt im Prozess der Individuation und Loslösung vom Elternhaus.",
            "Ausdrucksformen wie das Anbringen expressiver [das Poster, -|Poster] oder die Kuration der [die Pinnwand, -̈e|Pinnwand] stellen Akte ästhetischer Selbstbehauptung dar.",
            "In diesem Spannungsfeld zwischen familiärer Einbindung und radikalem Autonomiebestreben fungiert das Zimmer als geschützter Experimentierraum.",
            "Letztlich materialisiert sich im Jugendzimmer die materielle und mentale Genesis des mündigen Subjekts.",
          ],
        ],
      },
    },
  },

  das_arbeitszimmer: {
    description:
      "Das Arbeitszimmer / Homeoffice: Schreibtisch, Computer, Akten und konzentriertes Arbeiten.",
    details: "Homeoffice, Büromöbel und Organisation (A1–B2)",
    arabicDescription:
      "غرفة المكتب والعمل المنزلي (Homeoffice): مفردات مكتب العمل، الحاسوب، الشاشة، الطابعة، ملفات الأوراق (Aktenordner)، والأدوات التنظيمية، مع التركيز على بيئة العمل المريحة والتركيز في ألمانيا.",
    words: [
      {
        german: "das Arbeitszimmer, -",
        arabic: "غرفة المكتب / العمل",
        english: "study, home office",
        example: "Im ruhigen Arbeitszimmer kann ich mich voll auf meine Projekte konzentrieren.",
      },
      {
        german: "der Schreibtisch, -e",
        arabic: "مكتب العمل / الطاولة",
        english: "desk",
        example: "Auf dem höhenverstellbaren Schreibtisch stehen zwei Monitore.",
      },
      {
        german: "der Bürostuhl, -̈e",
        arabic: "كرسي المكتب الطبي",
        english: "office chair",
        example: "Ein ergonomischer Bürostuhl beugt lästigen Rückenschmerzen vor.",
      },
      {
        german: "der Monitor, -e",
        arabic: "شاشة الحاسوب",
        english: "monitor, screen",
        example: "Der große Monitor ermöglicht übersichtliches Arbeiten mit mehreren Fenstern.",
      },
      {
        german: "die Tastatur, -en",
        arabic: "لوحة المفاتيح",
        english: "keyboard",
        example: "Auf der ergonomischen Tastatur tippt er schnelle Berichte.",
      },
      {
        german: "die Maus, -̈e",
        arabic: "فأرة الحاسوب",
        english: "computer mouse",
        example: "Die kabellose Maus gleitet sanft über das schwarze Mauspad.",
      },
      {
        german: "der Drucker, -",
        arabic: "الطابعة",
        english: "printer",
        example: "Der Laserdrucker druckt Verträge in sekundenschneller Geschwindigkeit.",
      },
      {
        german: "der Aktenordner, -",
        arabic: "ملف حفظ الأوراق والمستندات",
        english: "ring binder, file folder",
        example: "Steuerunterlagen und Rechnungen sind sorgfältig im Aktenordner abgeheftet.",
      },
      {
        german: "die Schreibtischlampe, -n",
        arabic: "مصباح المكتب",
        english: "desk lamp",
        example: "Die helle Schreibtischlampe leuchtet den Arbeitsbereich optimal aus.",
      },
      {
        german: "der Papierkorb, -̈e",
        arabic: "سلة المهملات الورقية",
        english: "wastepaper basket",
        example: "Veraltete Notizen werfe ich direkt in den Papierkorb.",
      },
      {
        german: "der Notizblock, -̈e",
        arabic: "دفتر الملاحظات",
        english: "notepad",
        example: "Wichtige Telefonnotizen schreibe ich mit Kugelschreiber auf den Notizblock.",
      },
      {
        german: "das Regal, -e",
        arabic: "الرف / خزانة الكتب",
        english: "shelf, bookcase",
        example: "Im Regal stehen Fachbücher und Nachschlagewerke griffbereit.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein ruhiges Arbeitszimmer",
        intro: "Einfache Beschreibungen über die Möbel und Werkzeuge im Arbeitszimmer (A1).",
        paragraphs: [
          [
            "Ich arbeite oft von zu Hause aus in meinem [das Arbeitszimmer, -|Arbeitszimmer].",
            "Der Raum ist sehr ruhig und hell.",
            "In der Mitte steht ein großer [der Schreibtisch, -e|Schreibtisch] mit einem bequemen [der Bürostuhl, -̈e|Bürostuhl].",
            "Auf dem Tisch stehen ein moderner [der Monitor, -e|Monitor], eine [die Tastatur, -en|Tastatur] und eine [die Maus, -̈e|Maus].",
          ],
          [
            "Neben dem Computer steht eine helle [die Schreibtischlampe, -n|Schreibtischlampe].",
            "Unter dem Tisch steht ein [der Papierkorb, -̈e|Papierkorb] für altes Papier.",
            "Im weißen [das Regal, -e|Regal] stehen schwere Bücher und bunte [der Aktenordner, -|Aktenordner].",
            "Wenn ich Verträge brauche, schalte ich den schnellen [der Drucker, -|Drucker] ein.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein produktiver Homeoffice-Tag",
        intro:
          "Erfahrungen bei der Arbeit im Homeoffice, Organisation von Akten und Videokonferenzen (A2).",
        paragraphs: [
          [
            "Seit letztem Jahr arbeitet Susanne an drei Tagen in der Woche im Homeoffice in ihrem [das Arbeitszimmer, -|Arbeitszimmer].",
            "Gestern Morgen schaltete sie um acht Uhr ihren Computer und den großen [der Monitor, -e|Monitor] ein.",
            "Sie stellte ihren ergonomischen [der Bürostuhl, -̈e|Bürostuhl] optimal ein, um ihren Rücken bei langen Sitzungen zu schonen.",
            "Mit schnellen Fingern tippte sie E-Mails auf der leisen [die Tastatur, -en|Tastatur] und klickte mit der [die Maus, -̈e|Maus].",
          ],
          [
            "Vor der wichtigen Videokonferenz notierte sie offene Punkte auf ihrem [der Notizblock, -̈e|Notizblock].",
            "Weil der Kunde eine gedruckte Fassung wünschte, druckte sie die Dokumente über den [der Drucker, -|Drucker] aus.",
            "Anschließend lochte sie die Blätter und heftete sie ordentlich in den entsprechenden [der Aktenordner, -|Aktenordner] ein.",
            "Dank der guten Organisation verlief der gesamte Arbeitstag strukturiert und erfolgreich.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Ergonomie und Struktur im heimischen Büro",
        intro:
          "Wie eine ergonomische Ausstattung und klare Ordnungsstrukturen die Produktivität steigern (B1).",
        paragraphs: [
          [
            "Die zunehmende Etablierung des mobilen Arbeitens erfordert die bewusste Trennung von Freizeit und Beruf innerhalb der eigenen Wohnung.",
            "Ein abgeschlossenes [das Arbeitszimmer, -|Arbeitszimmer] verhindert, dass berufliche Verpflichtungen das Familienleben belasten und ermöglicht konzentrierte Tiefenarbeit.",
            "Aus gesundheitlicher Sicht ist die Investition in einen höhenverstellbaren [der Schreibtisch, -e|Schreibtisch] und einen dynamischen [der Bürostuhl, -̈e|Bürostuhl] unumgänglich, um Haltungsschäden vorzubeugen.",
            "Ein reflexionsarmer [der Monitor, -e|Monitor] in Kombination mit einer flimmerfreien [die Schreibtischlampe, -n|Schreibtischlampe] beugt zudem vorzeitiger Ermüdung der Augen vor.",
          ],
          [
            "Neben der Ergonomie spielt die physische und digitale Dokumentenorganisation eine zentrale Rolle.",
            "Wichtige Steuerbescheide und juristische Verträge müssen in beschrifteten [der Aktenordner, -|Aktenordnern] im massiven [das Regal, -e|Regal] archiviert werden.",
            "Überflüssige Entwürfe und vertrauliche Fehldrucke aus dem [der Drucker, -|Drucker] gehören dagegen unmittelbar geschreddert in den [der Papierkorb, -̈e|Papierkorb].",
            "Wer seinen Arbeitsplatz systematisch ordnet, behält auch in stressigen Projektphasen stets den vollen Überblick.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Transformation der Arbeitswelt, Entgrenzung und Ergonomie",
        intro:
          "Arbeitssoziologische Betrachtung des Homeoffice zwischen Autonomie und Selbstausbeutung (B2).",
        paragraphs: [
          [
            "Der pandemiebedingte Paradigmenwechsel hin zur Telearbeit hat das [das Arbeitszimmer, -|Arbeitszimmer] zu einem Brennpunkt soziologischer Debatten über die Entgrenzung von Arbeit und Leben gemacht.",
            "Während die räumliche Autonomie von Beschäftigten als Emanzipationsgewinn gefeiert wird, droht ohne strikte raumzeitliche Grenzziehung eine schleichende Kolonisierung des Privaten durch berufliche Leistungsanforderungen.",
            "Die materielle Beschaffenheit des Arbeitsplatzes – repräsentiert durch einen zertifizierten [der Bürostuhl, -̈e|Bürostuhl] und einen optimal justierten [der Monitor, -e|Monitor] – wird somit zu einer arbeitsrechtlichen und präventivmedizinischen Kernfrage.",
            "Der Arbeitgeber bleibt in der Pflicht, ergonomische Standards auch im häuslichen Umfeld durch finanzielle Zuschüsse zu gewährleisten.",
          ],
          [
            "Gleichzeitig vollzieht sich im heimischen Büro der Übergang zum papierlosen Arbeiten.",
            "Zwar behaupten physische Artefakte wie der klassische [der Aktenordner, -|Aktenordner] und der analoge [der Drucker, -|Drucker] noch ihre Nischenberechtigung für notarielle Urkunden, doch dominiert längst die Cloud-Architektur.",
            "Wer vor dem Bildschirm sitzt, navigiert über präzise Eingabegeräte wie [die Tastatur, -en|Tastatur] und [die Maus, -̈e|Maus] durch globale Datenströme.",
            "Die Herausforderung des modernen Wissensarbeiters besteht folglich darin, im eigenen Heim eine Atmosphäre kognitiver Fokussierung bei gleichzeitiger psychischer Distanzierungsfähigkeit zu kultivieren.",
          ],
        ],
      },
    },
  },

  sanitaere_anlagen: {
    description: "Sanitäre Anlagen: Toilette, Waschbecken, Dusche, Badewanne und Armaturen.",
    details: "Sanitärtechnik, Leitungen und Wasserinstallation (A1–B2)",
    arabicDescription:
      "التجهيزات الصحية وشبكة المياه في المنزل: المرحاض (Toilette)، حوض الغسيل (Waschbecken)، حوض الاستحمام (Badewanne)، الدش (Dusche)، الصنبور (Wasserhahn)، ومصرف المياه (Abfluss)، مع التركيز على أعمال الصيانة والسباكة في ألمانيا.",
    words: [
      {
        german: "die Toilette, -n",
        arabic: "المرحاض / التواليت",
        english: "toilet",
        example: "Das Gäste-WC verfügt über eine moderne, wandhängende Toilette.",
      },
      {
        german: "das Waschbecken, -",
        arabic: "حوض الغسيل / المغسلة",
        english: "washbasin, sink",
        example: "Vor dem Essen waschen wir uns die Hände gründlich am Waschbecken.",
      },
      {
        german: "die Badewanne, -n",
        arabic: "حوض الاستحمام / البانيو",
        english: "bathtub, bath",
        example: "Im Winter genieße ich ein warmes Schaumbad in der tiefen Badewanne.",
      },
      {
        german: "die Dusche, -n",
        arabic: "الدش / كابينة الاستحمام",
        english: "shower",
        example: "Die bodengleiche Dusche mit Glaswand ist barrierefrei zugänglich.",
      },
      {
        german: "der Wasserhahn, -̈e",
        arabic: "صنبور المياه / الحنفية",
        english: "water tap, faucet",
        example: "Aus dem linken Wasserhahn fließt heißes Wasser.",
      },
      {
        german: "der Abfluss, -̈e",
        arabic: "مصرف المياه / البالوعة",
        english: "drain",
        example: "Der Abfluss im Waschbecken muss regelmäßig von Haaren befreit werden.",
      },
      {
        german: "der Duschkopf, -̈e",
        arabic: "رأس الدش / رشاش الاستحمام",
        english: "showerhead",
        example: "Der wassersparende Duschkopf erzeugt einen angenehmen Massagestrahl.",
      },
      {
        german: "die Toilettenspülung, -en",
        arabic: "سيفون المرحاض / طرد الماء",
        english: "toilet flush",
        example: "Die moderne Toilettenspülung besitzt zwei Tasten zum Wassersparen.",
      },
      {
        german: "der Klodeckel, -",
        arabic: "غطاء المرحاض",
        english: "toilet lid",
        example: "Bitte schließen Sie nach der Benutzung den Klodeckel.",
      },
      {
        german: "das Abwasserrohr, -e",
        arabic: "أنبوب الصرف الصحي",
        english: "drainpipe, waste pipe",
        example: "Der Klempner reparierte das verstopfte Abwasserrohr unter dem Becken.",
      },
      {
        german: "der Boiler, -",
        arabic: "سخان المياه الكهربائي",
        english: "water heater, boiler",
        example: "Der elektrische Boiler erwärmt das Duschwasser auf sechzig Grad.",
      },
      {
        german: "das Silikon (Sg.)",
        arabic: "السيليكون (مانع التسرب)",
        english: "silicone sealant",
        example: "Die Fugen um die Badewanne sind mit weißem Silikon abgedichtet.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wasser im Badezimmer",
        intro: "Einfache Sätze über Wasser, Händewaschen und Duschen (A1).",
        paragraphs: [
          [
            "In jedem Haus gibt es wichtige Sanitäranlagen für Wasser.",
            "Am weißen [das Waschbecken, -|Waschbecken] drehe ich den [der Wasserhahn, -̈e|Wasserhahn] auf.",
            "Kaltes und warmes Wasser fließt durch den sauberen [der Abfluss, -̈e|Abfluss] ab.",
            "Ich wasche mir gründlich die Hände mit milder Seife.",
          ],
          [
            "Jeden Morgen nehme ich eine schnelle, frische [die Dusche, -n|Dusche].",
            "Aus dem [der Duschkopf, -̈e|Duschkopf] kommt angenehm warmes Wasser.",
            "Neben der Dusche steht eine weiße [die Toilette, -n|Toilette] mit Deckel.",
            "Nach dem Benutzen drücke ich die [die Toilettenspülung, -en|Toilettenspülung] und schließe den [der Klodeckel, -|Klodeckel].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Der Besuch des Klempners",
        intro: "Eine Verstopfung im Abfluss, tropfende Hähne und Reparaturen im Bad (A2).",
        paragraphs: [
          [
            "Letzte Woche bemerkte Familie Weber ein Problem im Badezimmer.",
            "Aus dem alten [der Wasserhahn, -̈e|Wasserhahn] tropfte ständig Wasser, und das Wasser im [das Waschbecken, -|Waschbecken] lief nur noch langsam ab.",
            "Der Vater versuchte zuerst, den verstopften [der Abfluss, -̈e|Abfluss] mit einer Saugglocke zu reinigen, aber es half nichts.",
            "Deshalb rief er einen erfahrenen Klempner an, der am nächsten Tag vorbeikam.",
          ],
          [
            "Der Handwerker öffnete das [das Abwasserrohr, -e|Abwasserrohr] unter dem Becken und entfernte die Verstopfung.",
            "Außerdem montierte er einen neuen, modernen [der Duschkopf, -̈e|Duschkopf] in der [die Dusche, -n|Dusche] und erneuerte brüchiges [das Silikon (Sg.)|Silikon] an der Wanne.",
            "Zum Schluss überprüfte er noch die Funktion der [die Toilettenspülung, -en|Toilettenspülung] an der [die Toilette, -n|Toilette].",
            "Jetzt läuft wieder alles einwandfrei und hygienisch sauber.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Moderne Sanitärtechnik und Wassersparen",
        intro:
          "Umweltbewusster Wasserverbrauch, Wartung von Armaturen und Schimmelprävention (B1).",
        paragraphs: [
          [
            "In modernen Gebäuden spielen fachgerecht installierte sanitäre Anlagen eine entscheidende Rolle für Hygiene und Umweltschutz.",
            "Durch den Einbau von Thermostatarmaturen am [der Wasserhahn, -̈e|Wasserhahn] wird vermieden, dass beim Einstellen der Wunschtemperatur unnötig Trinkwasser verschwendet wird.",
            "Zudem verfügen zeitgemäße Toilettensysteme über eine Zwei-Mengen-[die Toilettenspülung, -en|Toilettenspülung], wodurch der Wasserverbrauch pro Spülgang signifikant reduziert werden kann.",
            "In der bodengleichen [die Dusche, -n|Dusche] reguliert ein sparsamer [der Duschkopf, -̈e|Duschkopf] mit Luftbeimischung den Durchfluss, ohne das Duscherlebnis zu beeinträchtigen.",
          ],
          [
            "Regelmäßige Wartung schützt vor kostspieligen Feuchtigkeitsschäden in den Wänden.",
            "Besonders die elastischen Fugen aus [das Silikon (Sg.)|Silikon] entlang der [die Badewanne, -n|Badewanne] müssen trocken gehalten werden, um Schimmelbildung zu unterbinden.",
            "Ein verkalktes [das Abwasserrohr, -e|Abwasserrohr] oder ein schlecht eingestellter [der Boiler, -|Boiler] kann zudem den Wasserdruck spürbar drosseln und Energie vergeuden.",
            "Wer auf eine hochwertige Sanitärinstallation achtet, schont wertvolle Ressourcen und sichert den Werterhalt der Immobilie.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gebäudetechnik, Trinkwasserhygiene und Kreislaufwirtschaft",
        intro:
          "Ingenieurwissenschaftliche und hygienische Aspekte zentraler Wasser- und Abwassersysteme (B2).",
        paragraphs: [
          [
            "Die Konzeptionierung gebäudetechnischer Sanitäranlagen unterliegt in Deutschland strengen DIN-Normen zur Sicherung der Trinkwassergüte.",
            "Stagnationswasser in Totleitungen stellt ein primäres Risiko für die Kontamination mit Legionellen dar, weshalb zentrale Erwärmungssysteme wie der [der Boiler, -|Boiler] eine Mindesttemperatur von sechzig Grad Celsius aufrechterhalten müssen.",
            "Anspruchsvolle Armaturen am [das Waschbecken, -|Waschbecken] integrieren kontaktlose Infrarotsensoren, um Kreuzkontaminationen in stark frequentierten Sanitärräumen systematisch auszuschließen.",
            "Gleichzeitig gewährleisten fachgerecht dimensionierte [das Abwasserrohr, -e|Abwasserrohre] mit adäquatem Gefälle den geräuscharmen und rückstausicheren Abtransport von Fäkal- und Grauwasser.",
          ],
          [
            "Im Kontext nachhaltigen Bauens gewinnen zirkuläre Sanitärkonzepte zunehmend an Relevanz.",
            "Grauwasserrecyclingsysteme bereiten leicht verschmutztes Duschwasser aus der [die Dusche, -n|Dusche] auf, um es sekundär für die [die Toilettenspülung, -en|Toilettenspülung] der [die Toilette, -n|Toilette] nutzbar zu machen.",
            "Bei der baulichen Ausführung verhindert hochpolymeres [das Silikon (Sg.)|Silikon] Kapillarfeuchte an Übergängen zur [die Badewanne, -n|Badewanne], deren Eindringen verheerende Bausubstanzschäden nach sich ziehen würde.",
            "Somit repräsentiert die moderne Sanitärtechnik eine hochkomplexe Schnittstelle zwischen Ressourceneffizienz, Infektionsschutz und bauphysikalischer Langlebigkeit.",
          ],
        ],
      },
    },
  },

  im_badezimmer: {
    description: "Im Badezimmer: Körperpflege, Hygieneartikel, Handtücher und Badaccessoires.",
    details: "Hygiene, Badaccessoires und morgendliche Routine (A1–B2)",
    arabicDescription:
      "داخل الحمام (Im Badezimmer): أدوات النظافة الشخصية اليومية: المرآة، المناشف، فرشاة ومعجون الأسنان، الشامبو، جل الاستحمام، مجفف الشعر (Föhn)، وماكينة الحلاقة، مع التركيز على الروتين الصباحي ومفردات العناية بالنفس.",
    words: [
      {
        german: "das Badezimmer, -",
        arabic: "الحمام",
        english: "bathroom",
        example: "Das Badezimmer ist frisch geputzt und duftet angenehm.",
      },
      {
        german: "das Handtuch, -̈er",
        arabic: "المنشفة / الفوطة",
        english: "towel",
        example: "Nach dem Waschen trockne ich mir das Gesicht mit dem Handtuch ab.",
      },
      {
        german: "das Badetuch, -̈er",
        arabic: "منشفة الاستحمام الكبيرة",
        english: "bath towel",
        example: "Nach dem Baden wickelt er sich in ein flauschiges Badetuch ein.",
      },
      {
        german: "die Zahnbürste, -n",
        arabic: "فرشاة الأسنان",
        english: "toothbrush",
        example: "Zahnärzte empfehlen, die Zahnbürste alle drei Monate zu wechseln.",
      },
      {
        german: "die Zahnpasta, -pasten",
        arabic: "معجون الأسنان",
        english: "toothpaste",
        example: "Ich gebe einen kleinen Klecks Zahnpasta auf die Bürste.",
      },
      {
        german: "die Seife, -n",
        arabic: "الصابون",
        english: "soap",
        example: "Milde Flüssigseife reinigt die empfindliche Haut besonders schonend.",
      },
      {
        german: "das Shampoo, -s",
        arabic: "شامبو الشعر",
        english: "shampoo",
        example: "Mit dem duftenden Shampoo wäscht sie sich die langen Haare.",
      },
      {
        german: "das Duschgel, -s",
        arabic: "جل الاستحمام",
        english: "shower gel",
        example: "Frisches Duschgel belebt den Körper am frühen Morgen.",
      },
      {
        german: "der Föhn, -e",
        arabic: "مجفف الشعر / السيشوار",
        english: "hairdryer",
        example: "Nach dem Duschen trocknet er seine Haare mit dem Föhn.",
      },
      {
        german: "die Badematte, -n",
        arabic: "سجادة أرضية الحمام",
        english: "bath mat",
        example: "Die rutschfeste Badematte liegt vor der Duschkabine.",
      },
      {
        german: "der Rasierer, -",
        arabic: "ماكينة الحلاقة",
        english: "razor, shaver",
        example: "Der elektrische Rasierer sorgt für eine gründliche Rasur.",
      },
      {
        german: "der Kamm, -̈e",
        arabic: "المشط",
        english: "comb",
        example: "Mit dem breiten Kamm entwirrt er die nassen Locken.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Meine Morgenroutine im Bad",
        intro: "Einfache Beschreibungen über das Zähneputzen, Haarewaschen und Frisieren (A1).",
        paragraphs: [
          [
            "Jeden Morgen gehe ich als Erstes ins [das Badezimmer, -|Badezimmer].",
            "Ich nehme meine [die Zahnbürste, -n|Zahnbürste] und mache etwas [die Zahnpasta, -pasten|Zahnpasta] darauf.",
            "Ich putze mir drei Minuten lang gründlich die Zähne.",
            "Mit frischer [die Seife, -n|Seife] wasche ich mein Gesicht und trockne es mit einem weichen [das Handtuch, -̈er|Handtuch] ab.",
          ],
          [
            "Unter der Dusche benutze ich fruchtiges [das Duschgel, -s|Duschgel] und [das Shampoo, -s|Shampoo] für die Haare.",
            "Wenn ich herauskomme, trete ich auf die warme [die Badematte, -n|Badematte].",
            "Mit dem elektrischen [der Föhn, -e|Föhn] trockne ich meine nassen Haare und kämme sie mit dem [der Kamm, -̈e|Kamm].",
            "Jetzt bin ich wach und bereit für den neuen Tag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein entspannter Wellnessabend zu Hause",
        intro: "Sich Zeit für die Körperpflege nehmen und das Badezimmer aufräumen (A2).",
        paragraphs: [
          [
            "Nach einer anstrengenden Arbeitswoche freute sich Julia auf einen gemütlichen Wellnessabend in ihrem [das Badezimmer, -|Badezimmer].",
            "Sie legte ein großes, weiches [das Badetuch, -̈er|Badetuch] auf den Stuhl und zündete zwei Kerzen an.",
            "Zuerst wusch sie ihre Haare mit einem pflegenden [das Shampoo, -s|Shampoo] und cremte ihren Körper mit [das Duschgel, -s|Duschgel] ein.",
            "Als sie aus der Wanne stieg, stand sie sicher auf der rutschfesten [die Badematte, -n|Badematte].",
          ],
          [
            "Vor dem Spiegel trocknete sie ihre langen Haare vorsichtig mit dem [der Föhn, -e|Föhn] und strich sie mit einem [der Kamm, -̈e|Kamm] glatt.",
            "Ihr Mann benutzte im Anschluss den elektrischen [der Rasierer, -|Rasierer] und putzte sich mit [die Zahnpasta, -pasten|Zahnpasta] die Zähne.",
            "Zum Schluss hängten beide die nassen [das Handtuch, -̈er|Handtücher] an die Heizung zum Trocknen auf.",
            "Ein solches Ritual schenkt neue Energie für das Wochenende.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Hygieneroutinen und Ordnung im Feuchtraum",
        intro: "Hautgesundheit, Hygieneartikel und richtige Belüftung im Badezimmer (B1).",
        paragraphs: [
          [
            "Das Badezimmer hat sich in den letzten Jahrzehnten von einer rein funktionalen Nasszelle zu einem privaten Wohlfühlort gewandelt.",
            "Eine gewissenhafte Mundhygiene mit einer hochwertigen [die Zahnbürste, -n|Zahnbürste] und fluoridhaltiger [die Zahnpasta, -pasten|Zahnpasta] ist essenziell zur Kariesprophylaxe.",
            "Um die empfindliche Hautbarriere nicht unnötig zu strapazieren, greifen viele Menschen zu pH-hautneutraler [die Seife, -n|Seife] und dermatologisch getestetem [das Duschgel, -s|Duschgel].",
            "Nach dem Duschbad spendet ein wärmendes, saugfähiges [das Badetuch, -̈er|Badetuch] sofortigen Komfort.",
          ],
          [
            "Gleichzeitig erfordert die hohe Luftfeuchtigkeit im [das Badezimmer, -|Badezimmer] disziplinierte Lüftungsgewohnheiten.",
            "Feuchte Textilien wie ein benutztes [das Handtuch, -̈er|Handtuch] oder die durchnässte [die Badematte, -n|Badematte] müssen ausgebreitet getrocknet werden, um muffige Gerüche und Bakterienbildung zu vermeiden.",
            "Elektrogeräte wie der [der Föhn, -e|Föhn] und der [der Rasierer, -|Rasierer] sollten stets mit Sicherheitsabstand zu Wasserquellen aufbewahrt werden.",
            "Eine durchdachte Ablageordnung sorgt für Sauberkeit und Stressfreiheit beim morgendlichen Fertigmachen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Körperkultur, Selbstfürsorge und die Ästhetik des Bades",
        intro:
          "Kulturhistorische Reflexion über Reinlichkeitsdiskurse, Schönheitsideale und Achtsamkeit (B2).",
        paragraphs: [
          [
            "Historisch betrachtet spiegelt die Evolution vom [das Badezimmer, -|Badezimmer] die Transformation gesellschaftlicher Vorstellungen von Intimität, Hygiene und Reinheit wider.",
            "Was im antiken Rom als kollektives Badeerlebnis zelebriert wurde, avancierte im Zuge bürgerlicher Disziplinierung zu einem strikt privatisierten Refugium der Körperhygiene.",
            "Die tägliche Anwendung von chemisch austariertem [das Shampoo, -s|Shampoo], mikrobiell unbedenklicher [die Seife, -n|Seife] und präzisen Werkzeugen wie dem [der Rasierer, -|Rasierer] dient dabei nicht bloß physischer Sauberkeit, sondern der gesellschaftlichen Konformität mit modernen Körperstandards.",
            "In diesem Kontext wird die sorgfältige Pflege mit [die Zahnbürste, -n|Zahnbürste] und [die Zahnpasta, -pasten|Zahnpasta] zu einem internalisierten Ritual individueller Gesundheitsverantwortung.",
          ],
          [
            "In der Gegenwart erfährt das Bad eine semantische Aufladung als Oase entschleunigter Selbstfürsorge.",
            "Hochwertige Textilien wie ein schweres [das Badetuch, -̈er|Badetuch] oder eine ergonomische [die Badematte, -n|Badematte] schaffen haptische Kontraste zu sterilen Keramikflächen.",
            "Das bewusste Stylen der Haare mit [der Föhn, -e|Föhn] und [der Kamm, -̈e|Kamm] markiert den transformativen Übergang von informeller Privatheit zu beruflicher Repräsentanz.",
            "So fungiert das Badezimmer als atmosphärische Schleuse, an der die Rekonstruktion des gesellschaftlichen Ichs tagtäglich vollzogen wird.",
          ],
        ],
      },
    },
  },

  die_waschkueche: {
    description: "Wäsche waschen, Trocknen, Bügeln und Wäschepflege im Haushalt.",
    details: "Wäschepflege, Waschmittel und Textilpflege (A1–B2)",
    arabicDescription:
      "غرفة الغسيل (Waschküche / Hauswirtschaftsraum): مفردات الغسالة، مجفف الملابس، منشر الغسيل، مسحوق الغسيل، مكواة الملابس وطاولة الكي، مع التركيز على رموز العناية بالملابس وتقسيم الغسيل في ألمانيا.",
    words: [
      {
        german: "die Waschmaschine, -n",
        arabic: "الغسالة",
        english: "washing machine",
        example: "Die Waschmaschine wäscht bunte Kleidung bei vierzig Grad.",
      },
      {
        german: "der Wäschetrockner, -",
        arabic: "مجفف الملابس / النشافة",
        english: "tumble dryer, clothes dryer",
        example: "Handtücher werden im Wäschetrockner besonders flauschig und weich.",
      },
      {
        german: "der Wäscheständer, -",
        arabic: "منشر الغسيل المعدني",
        english: "clothes drying rack, clothes horse",
        example: "Im Sommer stellen wir den Wäscheständer zum Trocknen auf den Balkon.",
      },
      {
        german: "der Wäschekorb, -̈e",
        arabic: "سلة الغسيل",
        english: "laundry basket, hamper",
        example: "Schmutzige T-Shirts werfen wir sofort in den Wäschekorb.",
      },
      {
        german: "das Waschmittel, -",
        arabic: "مسحوق / سائل الغسيل",
        english: "laundry detergent",
        example: "Für weiße Wäsche benutzen wir ein spezielles Vollwaschmittel.",
      },
      {
        german: "der Weichspüler, -",
        arabic: "منعم ومعطر الملابس",
        english: "fabric softener",
        example: "Der Weichspüler verleiht der Bettwäsche einen frischen Duft.",
      },
      {
        german: "das Bügeleisen, -",
        arabic: "المكواة",
        english: "iron",
        example: "Mit dem heißen Bügeleisen glättet er knittrige Hemden.",
      },
      {
        german: "das Bügelbrett, -er",
        arabic: "طاولة الكي",
        english: "ironing board",
        example: "Sie klappt das Bügelbrett im Hauswirtschaftsraum auf.",
      },
      {
        german: "die Wäscheklammer, -n",
        arabic: "مشبك الغسيل",
        english: "clothespin, peg",
        example: "Mit bunten Wäscheklammern befestigen wir Socken an der Leine.",
      },
      {
        german: "die Schmutzwäsche (Sg.)",
        arabic: "الغسيل المتسخ",
        english: "dirty laundry",
        example: "Vor dem Waschen sortieren wir die Schmutzwäsche nach Farben.",
      },
      {
        german: "der Fleck, -en",
        arabic: "البقعة",
        english: "stain, spot",
        example: "Der hartnäckige Kaffeefleck verschwindet mit Fleckenspray.",
      },
      {
        german: "die Schleuderzahl, -en",
        arabic: "سرعة العصر (دورة في الدقيقة)",
        english: "spin speed",
        example: "Empfindliche Wolle wird mit einer niedrigen Schleuderzahl gewaschen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wäschetag am Wochenende",
        intro: "Einfache Beschreibungen über das Wäschewaschen, Trocknen und Bügeln (A1).",
        paragraphs: [
          [
            "Am Samstag wasche ich immer die ganze Wäsche.",
            "Ich nehme die [die Schmutzwäsche (Sg.)|Schmutzwäsche] aus dem [der Wäschekorb, -̈e|Wäschekorb] und sortiere sie.",
            "Weiße T-Shirts lege ich in die große [die Waschmaschine, -n|Waschmaschine].",
            "Ich gebe etwas [das Waschmittel, -|Waschmittel] und duftenden [der Weichspüler, -|Weichspüler] in das Fach.",
          ],
          [
            "Nach dem Waschen hänge ich die nassen Hosen auf den [der Wäscheständer, -|Wäscheständer].",
            "Ich befestige die Socken mit einer [die Wäscheklammer, -n|Wäscheklammer].",
            "Die Handtücher trocknen schnell im [der Wäschetrockner, -|Wäschetrockner].",
            "Am Sonntag bügle ich meine Hemden auf dem [das Bügelbrett, -er|Bügelbrett] mit dem warmen [das Bügeleisen, -|Bügeleisen].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Die Waschküche im Keller",
        intro: "Waschen im Mehrfamilienhaus, Waschprogramme und Beseitigen von Flecken (A2).",
        paragraphs: [
          [
            "In unserem Wohnhaus teilen sich sechs Parteien eine gemeinsame Waschküche im Keller.",
            "Gestern trug Florian zwei volle [der Wäschekorb, -̈e|Wäschekörbe] die Treppe hinunter.",
            "Auf seinem Lieblingshemd war ein dunkler [der Fleck, -en|Fleck] von Schokolade, den er vorher mit Gallseife behandelte.",
            "Er wählte ein schonendes Kurzprogramm an der [die Waschmaschine, -n|Waschmaschine] und stellte eine niedrige [die Schleuderzahl, -en|Schleuderzahl] ein.",
          ],
          [
            "Nach sechzig Minuten nahm er die duftende Wäsche heraus und füllte die Bettwäsche in den [der Wäschetrockner, -|Wäschetrockner].",
            "T-Shirts und Pullover hängte er sorgfältig auf den zusammenklappbaren [der Wäscheständer, -|Wäscheständer].",
            "Später stellte er im Wohnzimmer das [das Bügelbrett, -er|Bügelbrett] auf und glättete alle Falten mit dem [das Bügeleisen, -|Bügeleisen].",
            "Saubere und gebügelte Kleidung vermittelt einfach ein gepflegtes Gefühl.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Textilpflege, Ökologie und Waschhygiene",
        intro:
          "Effizientes Waschen bei niedrigen Temperaturen und Schonung empfindlicher Fasern (B1).",
        paragraphs: [
          [
            "Die moderne Textilpflege verlangt ein gutes Verständnis von Waschtemperaturen, Gewebearten und Pflegeetiketten.",
            "Um Energie und Kosten zu sparen, empfiehlt es sich, normale Alltagskleidung bei dreißig bis vierzig Grad in der [die Waschmaschine, -n|Waschmaschine] zu reinigen.",
            "Moderne Enzyme im [das Waschmittel, -|Waschmittel] entfernen selbst hartnäckige [der Fleck, -en|Flecken] auch ohne Kochwäsche zuverlässig.",
            "Auf den Einsatz von synthetischem [der Weichspüler, -|Weichspüler] verzichten viele umweltbewusste Haushalte inzwischen, da er Fasern verkleben und Gewässer belasten kann.",
          ],
          [
            "Auch beim Trocknen lässt sich der CO2-Ausstoß nachhaltig reduzieren.",
            "Anstatt stromintensive Zyklen im [der Wäschetrockner, -|Wäschetrockner] zu nutzen, trocknet Wäsche auf einem stabilen [der Wäscheständer, -|Wäscheständer] an der frischen Luft emissionsfrei.",
            "Um sich mühsames Bügeln mit dem [das Bügeleisen, -|Bügeleisen] auf dem [das Bügelbrett, -er|Bügelbrett] zu ersparen, hilft es, feuchte Hemden sofort kräftig auszuschlagen.",
            "Ein achtsamer Umgang mit Kleidung verlängert die Lebensdauer der Textilien und schützt die Umwelt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Hauswirtschaftliche Rationalisierung, Mikroplastik und Ökoeffizienz",
        intro: "Ökologische und technologiekritische Analyse textiler Reinigungskreisläufe (B2).",
        paragraphs: [
          [
            "Der historische Einzug automatisierter Großgeräte wie der elektrischen [die Waschmaschine, -n|Waschmaschine] markierte einen der gravierendsten Emanzipationsschritte in der Geschichte weiblicher Erwerbsbiografien.",
            "Die vormals körperlich zermürbende Schwerstarbeit des Waschtages wurde in standardisierte maschinelle Prozesse überführt, bei denen Parameter wie die [die Schleuderzahl, -en|Schleuderzahl] und Wassertemperatur mikroprozessorgesteuert optimiert werden.",
            "In modernen Ökobilanzen stehen Waschprozesse jedoch im Fokus globaler Umweltbedenken, insbesondere bezüglich des Eintrags synthetischer Mikrofasern in aquatische Ökosysteme beim Waschen von Kunstfasergeweben.",
            "Gleichzeitig fordern Umweltökonomen den sparsamen Einsatz von [das Waschmittel, -|Waschmitteln] und das weitgehende Vermeiden von [der Weichspüler, -|Weichspülern] zur Entlastung kommunaler Klärwerke.",
          ],
          [
            "Auf konsumkritischer Ebene hinterfragt die Nachhaltigkeitsdebatte die Notwendigkeit permanenter thermischer Trocknung im [der Wäschetrockner, -|Wäschetrockner].",
            "Das schonende Trocknen auf dem [der Wäscheständer, -|Wäscheständer] schont nicht nur energetische Ressourcen, sondern verhindert Faserbruch durch mechanische Reibung.",
            "Ebenso erfährt das traditionelle Glätten auf dem [das Bügelbrett, -er|Bügelbrett] mittels [das Bügeleisen, -|Bügeleisen] eine Neubewertung zugunsten pflegeleichter, bügelfreier Funktionstextilien.",
            "Somit transformiert sich die banale Hausarbeit zu einem vielschichtigen Anwendungsfeld für nachhaltige Alltagsökologie und technologischen Fortschritt.",
          ],
        ],
      },
    },
  },

  reinigungsartikel: {
    description: "Putzmittel, Haushaltsreinigung, Staubsaugen und Hygiene im gesamten Haus.",
    details: "Putzgeräte, Reinigungsmittel und Hausputz (A1–B2)",
    arabicDescription:
      "أدوات ومواد التنظيف المنزلية (Reinigungsartikel): مفردات المكنسة الكهربائية (Staubsauger)، المكنسة اليدوية، الممسحة (Wischmopp)، الدلو، إسفنج التنظيف، المنظف الشامل (Allzweckreiniger)، والقفازات المطاطية، مع التركيز على خطة تنظيف المنزل في ألمانيا.",
    words: [
      {
        german: "der Staubsauger, -",
        arabic: "المكنسة الكهربائية",
        english: "vacuum cleaner",
        example: "Der beutellose Staubsauger saugt Krümel gründlich vom Teppich auf.",
      },
      {
        german: "der Besen, -",
        arabic: "المكنسة اليدوية / المقشة",
        english: "broom",
        example: "Mit dem Besen kehre ich den Schmutz auf der Terrasse zusammen.",
      },
      {
        german: "das Kehrblech, -e",
        arabic: "الجاروف",
        english: "dustpan",
        example: "Mit Handfeger und Kehrblech fegen wir die Scherben auf.",
      },
      {
        german: "der Wischmopp, -s",
        arabic: "ممسحة الأرضيات / الموب",
        english: "mop, floor mop",
        example: "Mit dem feuchten Wischmopp wische ich die Fliesen in der Küche.",
      },
      {
        german: "der Eimer, -",
        arabic: "الدلو / السطل",
        english: "bucket, pail",
        example: "Ich fülle warmes Wasser und etwas Putzmittel in den Eimer.",
      },
      {
        german: "der Putzlappen, -",
        arabic: "خرقة التنظيف / فوطة المسح",
        english: "cleaning rag, cleaning cloth",
        example: "Mit dem feuchten Putzlappen wische ich den Staub von den Schränken.",
      },
      {
        german: "der Schwamm, -̈e",
        arabic: "إسفنجة التنظيف",
        english: "sponge",
        example: "Die raue Seite vom Schwamm entfernt angetrocknete Speisereste.",
      },
      {
        german: "der Allzweckreiniger, -",
        arabic: "المنظف الشامل متعدد الأغراض",
        english: "all-purpose cleaner",
        example: "Der Allzweckreiniger eignet sich für fast alle abwaschbaren Oberflächen.",
      },
      {
        german: "der Glasreiniger, -",
        arabic: "منظف الزجاج والمرايا",
        english: "glass cleaner, window cleaner",
        example: "Mit Glasreiniger und Küchenpapier werden die Fenster streifenfrei sauber.",
      },
      {
        german: "die Gummihandschuhe (Pl.)",
        arabic: "القفازات المطاطية للتنظيف",
        english: "rubber gloves",
        example: "Beim Putzen mit starken Chemikalien trage ich gelbe Gummihandschuhe.",
      },
      {
        german: "der Müllbeutel, -",
        arabic: "كيس القمامة",
        english: "garbage bag, bin liner",
        example: "Ich binde den vollen Müllbeutel zu und bringe ihn zur Mülltonne.",
      },
      {
        german: "das Mikrofasertuch, -̈er",
        arabic: "فوطة المايكروفايبر",
        english: "microfibre cloth",
        example: "Das trockene Mikrofasertuch poliert glänzende Armaturen ohne Streifen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Frühjahrsputz in der Wohnung",
        intro: "Einfache Sätze über das Putzen, Fegen und Staubsaugen in der Wohnung (A1).",
        paragraphs: [
          [
            "Heute putzen wir die ganze Wohnung gründlich.",
            "Mein Bruder nimmt den lauten [der Staubsauger, -|Staubsauger] und saugt alle Teppiche.",
            "Ich nehme den [der Besen, -|Besen] und das kleine [das Kehrblech, -e|Kehrblech] für den Flur.",
            "In einen großen [der Eimer, -|Eimer] füllen wir warmes Wasser mit Seife.",
          ],
          [
            "Mit dem [der Wischmopp, -s|Wischmopp] wische ich den Küchenboden sauber.",
            "Ich ziehe gelbe [die Gummihandschuhe (Pl.)|Gummihandschuhe] an, um meine Hände zu schützen.",
            "Mit einem weichen [der Putzlappen, -|Putzlappen] und [der Allzweckreiniger, -|Allzweckreiniger] putze ich die Tische.",
            "Am Ende werfe ich den vollen [der Müllbeutel, -|Müllbeutel] in die Mülltonne vor dem Haus.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Fensterputzen und Wochenendputz",
        intro: "Streifenfreie Fenster, Staubwischen und richtige Reiniger im Haushalt (A2).",
        paragraphs: [
          [
            "Am Samstag stand der wöchentliche Hausputz auf dem Programm der Wohngemeinschaft.",
            "Zuerst sprühte David die Fenster mit blauem [der Glasreiniger, -|Glasreiniger] ein und polierte sie mit einem sauberen [das Mikrofasertuch, -̈er|Mikrofasertuch].",
            "In der Küche schrubbte Anna hartnäckige Fettreste am Herd mit der rauen Seite von einem gelben [der Schwamm, -̈e|Schwamm] ab.",
            "Sie mischte einen kräftigen [der Allzweckreiniger, -|Allzweckreiniger] in das heiße Wasser im [der Eimer, -|Eimer].",
          ],
          [
            "Währenddessen lief der kabellose [der Staubsauger, -|Staubsauger] durch alle Schlafzimmer.",
            "Mit dem nassen [der Wischmopp, -s|Wischmopp] glänzte das Laminat im Wohnzimmer nach wenigen Minuten wieder wie neu.",
            "Als alle fertig waren, wechselten sie die vollen [der Müllbeutel, -|Müllbeutel] in Küche und Bad aus.",
            "Danach setzten sich alle zufrieden aufs Sofa und genossen den frischen Duft im sauberen Haus.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Nachhaltige Haushaltsreinigung ohne giftige Chemie",
        intro:
          "Umweltfreundliche Alternativen, Mülltrennung und Schutz der Gesundheit beim Putzen (B1).",
        paragraphs: [
          [
            "In vielen Haushalten wächst der Wunsch nach einer gründlichen, aber gesundheits- und umweltschonenden Reinigungsroutine.",
            "Anstatt aggressive chemische Keulen zu verwenden, erzielt ein biologisch abbaubarer [der Allzweckreiniger, -|Allzweckreiniger] auf Basis von Essig oder Zitronensäure hervorragende Ergebnisse.",
            "Hochwertige [das Mikrofasertuch, -̈er|Mikrofasertücher] entfernen Schmutz und Keime auf glatten Flächen oft sogar ganz ohne zusätzliche Chemie nur mit klarem Wasser.",
            "Zum Schutz vor Hautreizungen empfiehlt es sich dennoch, langlebige [die Gummihandschuhe (Pl.)|Gummihandschuhe] bei allen Feuchtreinigungsarbeiten zu tragen.",
          ],
          [
            "Eine systematische Vorgehensweise spart zudem wertvolle Zeit und Mühe.",
            "Man beginnt stets von oben nach unten: Erst wird der Staub mit einem nebelfeuchten [der Putzlappen, -|Putzlappen] von den Möbeln gewischt, bevor der [der Staubsauger, -|Staubsauger] zum Einsatz kommt.",
            "Für feine Flusen und Krümel auf Fliesen leistet ein ergonomischer [der Besen, -|Besen] mit gummierter Lippe am [das Kehrblech, -e|Kehrblech] wertvolle Dienste.",
            "Wer seinen Putzplan strukturiert und reißfeste [der Müllbeutel, -|Müllbeutel] verwendet, erledigt den Hausputz stressfrei und nachhaltig.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Hygienediskurse, Mikrobiom und die Illusion der Sterilität",
        intro:
          "Wissenschaftliche Dekonstruktion übertriebener Desinfektionspraktiken und ökologische Haushaltsführung (B2).",
        paragraphs: [
          [
            "In modernen Industriegesellschaften wird das Thema Haushaltsreinigung häufig von einem irrationalen Sterilitätsdogma überlagert.",
            "Werbliche Narrative suggerieren, dass private Wohnräume mithilfe biozider Chemikalien klinisch desinfiziert werden müssten, was nachweislich die Entstehung resistenter Keime und Allergien bei Kindern forciert.",
            "Die mikrobiologische Realität belegt jedoch, dass eine mechanische Reinigung mit einem elektrostatischen [das Mikrofasertuch, -̈er|Mikrofasertuch], flankiert von tensidbasierten [der Allzweckreiniger, -|Allzweckreinigern], eine völlig ausreichende Keimreduktion bewirkt.",
            "Das Tragen von schützenden [die Gummihandschuhe (Pl.)|Gummihandschuhen] dient in erster Linie dem Erhalt des hauteigenen Säureschutzmantels vor Entfettung durch Tenside.",
          ],
          [
            "Auf technologischer Ebene revolutionieren smarte Sensoren und HEPA-Filtersysteme im modernen [der Staubsauger, -|Staubsauger] die Feinstaub- und Allergenelimination in Innenräumen.",
            "Gleichzeitig erleben analoge Hilfsmittel wie der klassische [der Wischmopp, -s|Wischmopp] oder die präzise Handhabung von [der Besen, -|Besen] und [das Kehrblech, -e|Kehrblech] eine funktionale Aufwertung durch kreislauffähige Materialien.",
            "Eine reflektierte Haushaltshygiene strebt demnach kein steriles Vakuum an, sondern ein stabiles, gesundes Mikrobiom im Einklang mit ökologischer Verantwortung.",
            "Auf diese Weise wird das Reinigen von einer lästigen Pflicht zu einer bewussten Praxis der Lebensraumkuration.",
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

const res = vocabularyCollectionSchema.safeParse(zh);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to zu-hause.json!");
