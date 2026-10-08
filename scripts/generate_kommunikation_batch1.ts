import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  der_desktop_computer: {
    description: "Desktop-Computer, Bildschirm, Tastatur, Maus, Anschlüsse und Peripheriegeräte.",
    details: "PC-Komponenten, Arbeitsplatzrechner, Bildschirmauflösung und Ergonomie (A1–B2)",
    arabicDescription:
      "الكمبيوتر المكتبي (Der Desktop-Computer): مفردات الحاسوب المكتبي، الشاشة (Monitor/Bildschirm)، لوحة المفاتيح (Tastatur)، الفأرة (Maus)، منافذ التوصيل (USB-Anschluss)، السماعات، الكابلات، والتحكم بالعتاد في بيئة العمل.",
    words: [
      {
        german: "der Desktop-Computer, -",
        arabic: "الحاسوب المكتبي (الكمبيوتر الثابت)",
        english: "desktop computer",
        example:
          "Auf meinem Schreibtisch steht ein leistungsstarker Desktop-Computer für die Arbeit.",
      },
      {
        german: "der Monitor, -e",
        arabic: "شاشة العرض (الكمبيوتر)",
        english: "monitor, screen",
        example: "Der hochauflösende Monitor zeigt Grafiken gestochen scharf an.",
      },
      {
        german: "die Tastatur, -en",
        arabic: "لوحة المفاتيح",
        english: "keyboard",
        example: "Mit einer ergonomischen Tastatur kann man stundenlang ermüdungsfrei tippen.",
      },
      {
        german: "die Maus, -̈e",
        arabic: "فأرة الكمبيوتر",
        english: "mouse (computer)",
        example: "Ich klicke mit der linken Taste der Maus auf das Programm-Symbol.",
      },
      {
        german: "das Computergehäuse, -",
        arabic: "صندوق / كيس الكمبيوتر الخارجي",
        english: "computer case, tower",
        example: "Im Metall-Computergehäuse sind alle elektronischen Bauteile sicher geschützt.",
      },
      {
        german: "der Einschaltknopf, -̈e",
        arabic: "زر التشغيل والطاقة",
        english: "power button",
        example: "Drücken Sie den Einschaltknopf an der Vorderseite, um das Gerät zu starten.",
      },
      {
        german: "das Netzkabel, -",
        arabic: "كابل التغذية الكهربائية",
        english: "power cable, power cord",
        example: "Das Netzkabel verbindet das Netzteil mit der Steckdose an der Wand.",
      },
      {
        german: "der USB-Anschluss, -̈e",
        arabic: "منفذ الناقل التسلسلي العام (USB)",
        english: "USB port",
        example: "An diesen USB-Anschluss können Sie Speichersticks oder Druckerkabel anschließen.",
      },
      {
        german: "der Lautsprecher, -",
        arabic: "مكبر الصوت الخارجي",
        english: "speaker, loudspeaker",
        example: "Aus den beiden Lautsprechern ertönt ein klarer, satter Raumklang.",
      },
      {
        german: "die Webcam, -s",
        arabic: "كاميرا الويب للبث والمحادثات",
        english: "webcam",
        example: "Für Videoanrufe habe ich eine hochauflösende Webcam oben am Monitor befestigt.",
      },
      {
        german: "das Mauspad, -s",
        arabic: "بساط / وسادة فأرة الكمبيوتر",
        english: "mouse pad",
        example: "Auf dem glatten Mauspad gleitet der optische Sensor besonders präzise.",
      },
      {
        german: "das Laufwerk, -e",
        arabic: "محرك الأقراص (CD/DVD أو محرك التخزين)",
        english: "disk drive",
        example: "Moderne Computer besitzen oft kein optisches Laufwerk für DVDs mehr.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Computer auf dem Schreibtisch",
        intro: "Einfache Sätze über den PC, Bildschirm, Maus und Einschalten (A1).",
        paragraphs: [
          [
            "Auf meinem Schreibtisch steht [der Desktop-Computer, -|ein Desktop-Computer].",
            "Zuerst stecke ich [das Netzkabel, -|das Netzkabel] in die Steckdose.",
            "Dann drücke ich [der Einschaltknopf, -̈e|den Einschaltknopf] am Gehäuse.",
          ],
          [
            "[der Monitor, -e|Der Monitor] wird hell und zeigt das Startbild.",
            "Ich nehme [die Maus, -̈e|die Maus] in die rechte Hand.",
            "Sie liegt auf [das Mauspad, -s|einem weichen Mauspad].",
            "Mit beiden Händen tippe ich auf [die Tastatur, -en|der Tastatur].",
          ],
          [
            "An der Seite gibt es [der USB-Anschluss, -̈e|einen USB-Anschluss].",
            "Über [der Lautsprecher, -|die Lautsprecher] höre ich leise Musik.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Einen neuen Arbeitsplatz aufbauen",
        intro: "Zusammenbau und Anschluss der Peripheriegeräte am Schreibtisch (A2).",
        paragraphs: [
          [
            "Gestern habe ich mir einen neuen Büroarbeitsplatz eingerichtet.",
            "Ich habe [das Computergehäuse, -|das Computergehäuse] vorsichtig unter den Schreibtisch gestellt, damit genug Beinfreiheit bleibt.",
            "Auf die Tischplatte kam ein breiter [der Monitor, -e|Monitor] mit verstellbarem Standfuß.",
          ],
          [
            "Ich schloss alle Kabel an die Rückseite an: [das Netzkabel, -|das Netzkabel], das HDMI-Kabel und das Audiokabel für [der Lautsprecher, -|die Lautsprecher].",
            "Oben am Bildschirm montierte ich [die Webcam, -s|eine Webcam], um mit meiner Familie Videogespräche zu führen.",
          ],
          [
            "Mit der kabellosen [die Maus, -̈e|Maus] und der flachen [die Tastatur, -en|Tastatur] lässt sich hervorragend arbeiten.",
            "Wenn ich Fotos übertragen möchte, stecke ich meinen Stick einfach in den vorderen [der USB-Anschluss, -̈e|USB-Anschluss].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Desktop-PC versus Laptop im modernen Büro",
        intro: "Vor- und Nachteile stationärer Rechner gegenüber mobilen Geräten (B1).",
        paragraphs: [
          [
            "Obwohl viele Arbeitnehmer mittlerweile mit Laptops arbeiten, bietet ein klassischer [der Desktop-Computer, -|Desktop-Computer] weiterhin entscheidende Vorteile.",
            "Durch das geräumige [das Computergehäuse, -|Computergehäuse] lassen sich defekte Komponenten mühelos austauschen oder mit neuer Hardware aufrüsten.",
          ],
          [
            "Ein großer externer [der Monitor, -e|Monitor] schont die Augen bei stundenlanger Bildschirmarbeit spürbar.",
            "In Kombination mit einer ergonomischen [die Tastatur, -en|Tastatur] und einer präzisen [die Maus, -̈e|Maus] auf einem rutschfesten [das Mauspad, -s|Mauspad] wird Fehlhaltungen der Handgelenke vorgebeugt.",
          ],
          [
            "Für Videokonferenzen liefert eine hochwertige [die Webcam, -s|Webcam] in Verbindung mit klaren [der Lautsprecher, -|Lautsprechern] eine professionelle Bild- und Tonübertragung.",
            "Während mobile Endgeräte oft auf Adapter angewiesen sind, hält der Desktop-Rechner zahlreiche [der USB-Anschluss, -̈e|USB-Anschlüsse] für Peripheriegeräte bereit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Leistungsfähige Workstations und stationäre Rechenpower",
        intro: "Stationäre Hochleistungsrechner, Ergonomie und IT-Infrastruktur (B2).",
        paragraphs: [
          [
            "In rechenintensiven Anwendungsfeldern wie 3D-Rendering, Software-Kompilierung oder Datenanalyse bleibt der stationäre [der Desktop-Computer, -|Desktop-Computer] das Maß aller Dinge.",
            "Die thermische Optimierung innerhalb massiver [das Computergehäuse, -|Computergehäuse] erlaubt es Hochleistungsprozessoren, dauerhaft unter Volllast ohne temperaturbedingte Drosselung zu operieren.",
          ],
          [
            "Ein professionell kalibrierter [der Monitor, -e|Monitor] mit exakter Farbraumabdeckung (sRGB/AdobeRGB) ist für Mediengestalter unabdingbar, während mechanische Schalter in [die Tastatur, -en|der Tastatur] taktiles Feedback für Vielschreiber liefern.",
            "Die kontinuierliche Stromversorgung über ein zertifiziertes [das Netzkabel, -|Netzkabel] und hocheffiziente Netzteile minimiert das Risiko von Spannungsabfällen während kritischer Rechenoperationen.",
          ],
          [
            "Moderne Schnittstellen wie Thunderbolt und hochbandbreitige [der USB-Anschluss, -̈e|USB-Anschlüsse] gewährleisten den simultanen Datenaustausch mit externen Arrays, wodurch der Desktop als zentrale Schaltstelle des Workflows fungiert.",
          ],
        ],
      },
    },
  },

  hardware_und_zubehoer: {
    description: "Prozessoren, Grafikkarten, SSDs, Arbeitsspeicher, Kabel und Zubehör.",
    details: "Hardwarekomponenten, Speicherarchitektur, Kühlung und Schnittstellen (A1–B2)",
    arabicDescription:
      "العتاد والملحقات (Hardware und Zubehör): مكونات الكمبيوتر الداخلية والخارجية، المعالج (Prozessor/CPU)، كرت الشاشة (Grafikkarte)، القرص الصلب (Festplatte/SSD)، ذاكرة الوصول العشوائي (Arbeitsspeicher/RAM)، اللوحة الأم (Mainboard)، والمحركات الخارجية وكابلات التوصيل.",
    words: [
      {
        german: "die Hardware, -s",
        arabic: "عتاد الحاسوب المادي (الأجهزة والقطع)",
        english: "hardware",
        example: "Die Hardware des neuen Rechners ist extrem leistungsfähig und zukunftssicher.",
      },
      {
        german: "der Prozessor, -en",
        arabic: "المعالج المركزي (CPU)",
        english: "processor, CPU",
        example: "Der Prozessor berechnet Milliarden Operationen pro Sekunde.",
      },
      {
        german: "die Grafikkarte, -n",
        arabic: "بطاقة / كرت الرسوميات والشاشة (GPU)",
        english: "graphics card, GPU",
        example:
          "Für anspruchsvolle 3D-Spiele benötigt man eine schnelle Grafikkarte mit eigenem Speicher.",
      },
      {
        german: "die Festplatte, -n",
        arabic: "القرص الصلب الداخلي (SSD أو HDD)",
        english: "hard drive, SSD",
        example: "Die moderne SSD-Festplatte startet das System in wenigen Sekunden.",
      },
      {
        german: "der Arbeitsspeicher (RAM) (Sg.)",
        arabic: "ذاكرة الوصول العشوائي (الرام)",
        english: "RAM, random access memory",
        example: "Mit sechzehn Gigabyte Arbeitsspeicher laufen alle Programme flüssig parallel.",
      },
      {
        german: "das Mainboard, -s",
        arabic: "اللوحة الأم (المذربورد)",
        english: "motherboard, mainboard",
        example:
          "Auf dem Mainboard laufen alle elektronischen Leitungen und Schnittstellen zusammen.",
      },
      {
        german: "der Lüfter, -",
        arabic: "مروحة التبريد الداخلية",
        english: "cooling fan",
        example: "Der Lüfter dreht sich leise und kühlt den heißen Chip ab.",
      },
      {
        german: "das Netzteil, -e",
        arabic: "وحدة التزويد بالطاقة (الباور سبلاي)",
        english: "power supply unit (PSU)",
        example: "Ein starkes Netzteil versorgt alle Komponenten mit stabiler Spannung.",
      },
      {
        german: "das Zubehör (Sg.)",
        arabic: "الملحقات والإكسسوارات الحاسوبية",
        english: "accessories, peripherals",
        example: "Zum Zubehör gehören Kabel, Adapter und eine gepolsterte Tasche.",
      },
      {
        german: "der USB-Stick, -s",
        arabic: "ذاكرة الفلاشة (يو إس بي)",
        english: "USB flash drive, memory stick",
        example: "Ich speichere die Präsentation auf dem USB-Stick, um sie mitzunehmen.",
      },
      {
        german: "das HDMI-Kabel, -",
        arabic: "كابل نقل الصورة والصوت الرقمي (HDMI)",
        english: "HDMI cable",
        example: "Verbinden Sie den Computer über das HDMI-Kabel mit dem Fernseher.",
      },
      {
        german: "die externe Festplatte, -n",
        arabic: "القرص الصلب الخارجي للنسخ الاحتياطي",
        english: "external hard drive",
        example: "Einmal im Monat mache ich ein Backup aller Dateien auf eine externe Festplatte.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Was ist im Computer?",
        intro: "Einfache Wörter über Bauteile, USB-Sticks und Kabel (A1).",
        paragraphs: [
          [
            "In einem Computer steckt viel [die Hardware, -s|Hardware].",
            "Das Gehirn des Computers ist [der Prozessor, -en|der Prozessor]. Er rechnet sehr schnell.",
            "Bilder und Spiele zeigt [die Grafikkarte, -n|die Grafikkarte] an.",
          ],
          [
            "Alle Daten liegen auf [die Festplatte, -n|der Festplatte].",
            "Wenn der Computer heiß wird, kühlt [der Lüfter, -|der Lüfter] die Bauteile mit Luft.",
            "[das Netzteil, -e|Das Netzteil] liefert den nötigen Strom.",
          ],
          [
            "Ich habe auch nützliches [das Zubehör (Sg.)|Zubehör].",
            "Mit [das HDMI-Kabel, -|dem HDMI-Kabel] sehe ich Filme auf dem Monitor.",
            "Wichtige Dokumente speichere ich auf [der USB-Stick, -s|meinem USB-Stick].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Einen PC selbst aufrüsten",
        intro: "Komponenten austauschen, Speicher erweitern und Daten sichern (A2).",
        paragraphs: [
          [
            "Mein alter Computer war in letzter Zeit sehr langsam geworden.",
            "Deshalb habe ich beschlossen, einige Teile der [die Hardware, -s|Hardware] auszutauschen.",
            "Zuerst kaufte ich mehr [der Arbeitsspeicher (RAM) (Sg.)|Arbeitsspeicher], um mehrere Browser-Tabs gleichzeitig öffnen zu können.",
          ],
          [
            "Die alte mechanische Festplatte ersetzte ich durch eine blitzschnelle SSD-[die Festplatte, -n|Festplatte].",
            "Das Einbauen war nicht schwer: Ich steckte den Riegel direkt auf [das Mainboard, -s|das Mainboard].",
          ],
          [
            "Bevor ich anfing, hatte ich alle wichtigen Fotos auf [die externe Festplatte, -n|eine externe Festplatte] kopiert.",
            "Jetzt läuft der Computer wieder flüsterleise und startet in Sekundenschnelle.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Systemkomponenten und zuverlässige Datensicherung",
        intro: "Zusammenwirken von Prozessor, Speicher, Kühlung und Backup-Strategien (B1).",
        paragraphs: [
          [
            "Die Leistungsfähigkeit eines Rechners hängt vom harmonischen Zusammenspiel aller internen Komponenten ab.",
            "Wenn ein moderner [der Prozessor, -en|Prozessor] mit ausreichend schnellem [der Arbeitsspeicher (RAM) (Sg.)|Arbeitsspeicher] kombiniert wird, entstehen kaum Engpässe bei alltäglichen Aufgaben.",
          ],
          [
            "Allerdings erzeugt leistungsfähige Elektronik erhebliche Abwärme: Ein temperaturgeregelter [der Lüfter, -|Lüfter] sorgt dafür, dass die Komponenten im optimalen Wärmebereich bleiben.",
            "Für Kreative und Gamer ist zudem [die Grafikkarte, -n|die Grafikkarte] von zentraler Bedeutung, da sie aufwendige Renderings berechnet.",
          ],
          [
            "Ein oft unterschätztes Risiko ist der plötzliche Datenverlust.",
            "Wer sich ausschließlich auf die interne [die Festplatte, -n|Festplatte] verlässt, riskiert viel; regelmäßige Backups auf [die externe Festplatte, -n|eine externe Festplatte] oder einen verschlüsselten [der USB-Stick, -s|USB-Stick] sind unerlässlich.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Halbleiterarchitektur, Systemstabilität und thermisches Design",
        intro: "Moderne Computerarchitektur, Spannungsregulation und Bus-Systeme (B2).",
        paragraphs: [
          [
            "Die stetige Miniaturisierung von Halbleiterstrukturen stellt die Entwicklung moderner [die Hardware, -s|Hardware] vor komplexe physikalische Hürden.",
            "Ein Mehrkern-[der Prozessor, -en|Prozessor] setzt voraus, dass die Leiterbahnen auf [das Mainboard, -s|dem Mainboard] mit minimalen Latenzen und präzisen Taktraten synchronisiert werden.",
          ],
          [
            "Um Spannungsspitzen bei plötzlichen Lastwechseln abzufangen, muss [das Netzteil, -e|das Netzteil] zertifizierte Wirkungsgrade und eine saubere Stromglättung auf den 12-Volt-Schienen aufweisen.",
            "Gleichzeitig transformieren dedizierte Rechenkerne auf [die Grafikkarte, -n|der Grafikkarte] (Tensor- und Raytracing-Cores) spezialisierte Workflows in künstlicher Intelligenz und Bildsynthese.",
          ],
          [
            "Beim Datentransfer über PCI-Express-Lanes garantieren NVMe-[die Festplatte, -n|Festplatten] Durchsatzraten von mehreren Gigabyte pro Sekunde, was ein hocheffizientes Kühlsystem mit strömungsoptimiertem [der Lüfter, -|Lüfter] erfordert.",
          ],
        ],
      },
    },
  },

  am_computer_arbeiten: {
    description: "Dateien verwalten, Ordner, Programme, Shortcuts, Speichern und Datensicherheit.",
    details: "Betriebssysteme, Dateiverwaltung, Software-Updates und Tastenkombinationen (A1–B2)",
    arabicDescription:
      "العمل على الكمبيوتر (Am Computer arbeiten): مفردات استخدام الحاسوب، إدارة الملفات (Datei)، المجلدات (Ordner)، نظام التشغيل (Betriebssystem)، البرامج والتطبيقات (Programm)، اختصارات لوحة المفاتيح (Tastenkombination)، الحفظ، الحذف، التحديثات، وكلمات المرور.",
    words: [
      {
        german: "die Datei, -en",
        arabic: "الملف الإلكتروني (مستند، صورة، إلخ)",
        english: "file (computer file)",
        example: "Ich habe die Datei auf dem Desktop gespeichert, um sie schnell wiederzufinden.",
      },
      {
        german: "der Ordner, -",
        arabic: "المجلد لحفظ الملفات وتصنيفها",
        english: "folder, directory",
        example: "Erstellen Sie einen neuen Ordner für alle Rechnungen des aktuellen Monats.",
      },
      {
        german: "das Betriebssystem, -e",
        arabic: "نظام التشغيل (ويندوز، ماك، لينكس)",
        english: "operating system (OS)",
        example: "Ein aktuelles Betriebssystem schützt den Computer vor Sicherheitslücken.",
      },
      {
        german: "das Programm, -e",
        arabic: "البرنامج / التطبيق الحاسوبي",
        english: "program, application, software",
        example: "Mit diesem Programm kann man Fotos zuschneiden und Farben bearbeiten.",
      },
      {
        german: "die Tastenkombination, -en",
        arabic: "اختصار لوحة المفاتيح (Shortcut)",
        english: "keyboard shortcut, key combination",
        example: "Die Tastenkombination Strg+C kopiert den markierten Text in die Zwischenablage.",
      },
      {
        german: "das Dokument, -e",
        arabic: "المستند النصي / الوثيقة الرقمية",
        english: "document",
        example: "Bitte unterschreiben Sie das Dokument digital und schicken Sie es zurück.",
      },
      {
        german: "speichern",
        arabic: "حفظ / خزن البيانات",
        english: "to save (files)",
        example: "Vergessen Sie nicht, Ihre Änderungen regelmäßig mit Strg+S zu speichern.",
      },
      {
        german: "löschen",
        arabic: "حذف / مسح الملفات",
        english: "to delete, to erase",
        example:
          "Aus Versehen habe ich den falschen Text gelöscht, aber ich kann ihn rückgängig machen.",
      },
      {
        german: "kopieren",
        arabic: "نسخ البيانات أو النصوص",
        english: "to copy",
        example: "Sie können die Tabelle kopieren und in eine andere Datei einfügen.",
      },
      {
        german: "das Update, -s",
        arabic: "التحديث البرمجي للتطبيقات أو النظام",
        english: "update, software update",
        example: "Das automatische Update behebt bekannte Fehler und verbessert die Stabilität.",
      },
      {
        german: "das Passwort, -̈er",
        arabic: "كلمة المرور / السر",
        english: "password",
        example:
          "Ein sicheres Passwort besteht aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen.",
      },
      {
        german: "der Papierkorb, -̈e",
        arabic: "سلة المحذوفات الرقمية",
        english: "recycle bin, trash",
        example:
          "Gelöschte Dokumente landen zuerst im Papierkorb und können wiederhergestellt werden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich schreibe einen Brief am PC",
        intro: "Einfache Schritte beim Tippen, Speichern und Löschen am Computer (A1).",
        paragraphs: [
          [
            "Ich schalte den Computer ein und gebe mein [das Passwort, -̈er|Passwort] ein.",
            "Ich öffne [das Programm, -e|ein Schreibprogramm] und tippe einen Text.",
            "Hier schreibe ich [das Dokument, -e|ein wichtiges Dokument] für meinen Deutschkurs.",
          ],
          [
            "Wenn ich fertig bin, klicke ich auf [speichern|Speichern].",
            "Ich packe [die Datei, -en|die Datei] in [der Ordner, -|einen Ordner] auf dem Schreibtisch.",
            "Wenn ein Satz falsch ist, kann ich ihn schnell [löschen|löschen].",
          ],
          [
            "Alte Notizen werfe ich in [der Papierkorb, -̈e|den Papierkorb].",
            "So bleibt mein Computer immer sauber und aufgeräumt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ordnung auf der Festplatte schaffen",
        intro: "Dateistrukturen organisieren, Backups anlegen und Shortcuts nutzen (A2).",
        paragraphs: [
          [
            "Auf meinem Computer herrschte lange Zeit großes Chaos.",
            "Überall auf dem Desktop lagen lose [die Datei, -en|Dateien] und unbenannte Fotos herum.",
            "Deshalb habe ich mir am Wochenende Zeit genommen, um systematisch aufzuräumen.",
          ],
          [
            "Ich habe für jedes Projekt [der Ordner, -|einen eigenen Ordner] mit klarem Namen angelegt.",
            "Mit der praktischen [die Tastenkombination, -en|Tastenkombination] Strg+C und Strg+V konnte ich Texte blitzschnell [kopieren|kopieren] und verschieben.",
          ],
          [
            "Gestern hat [das Betriebssystem, -e|das Betriebssystem] ein wichtiges [das Update, -s|Update] heruntergeladen.",
            "Nach einem kurzen Neustart läuft das System jetzt spürbar flüssiger und sicherer.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Effiziente Büroorganisation und Dateisicherheit",
        intro: "Arbeitsabläufe optimieren, Datensicherheit und strukturierte Workflows (B1).",
        paragraphs: [
          [
            "Ein professioneller Umgang mit dem Computer erfordert mehr als nur das bloße Bedienen von Programmen.",
            "Wer täglich komplexe Aufgaben bewältigt, nutzt gezielte [die Tastenkombination, -en|Tastenkombinationen], um zeitraubende Mausklicks zu minimieren und konzentriert zu bleiben.",
          ],
          [
            "Jedes neu erstellte [das Dokument, -e|Dokument] sollte unverzüglich mit einem sprechenden Dateinamen versehen werden, bevor man es in den zuständigen [der Ordner, -|Ordner] einsortiert.",
            "Regelmäßiges Zwischen-[speichern|Speichern] schützt vor dem Verlust wertvoller Arbeitsergebnisse bei unerwarteten Programmabstürzen.",
          ],
          [
            "Zudem muss die Datensicherheit gewährleistet sein: Ein komplexes [das Passwort, -̈er|Passwort] in Kombination mit Zwei-Faktor-Authentifizierung schützt sensible Firmendaten.",
            "Auch automatische [das Update, -s|Updates] für [das Betriebssystem, -e|das Betriebssystem] sollten niemals ignoriert werden, um bekannte Sicherheitslücken zeitnah zu schließen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Digitale Workflows, IT-Compliance und Systemhygiene",
        intro: "IT-Sicherheitsstandards, Versionskontrolle und Datenresilienz im Unternehmen (B2).",
        paragraphs: [
          [
            "In modernen Wissensökonomien stellt die strukturierte digitale Datenverwaltung eine fundamentale Kernkompetenz dar.",
            "Unzureichende Naming-Conventions führen unweigerlich zu Versionskonflikten, wenn mehrere Mitarbeiter simultan an einer [die Datei, -en|Datei] kollaborieren.",
          ],
          [
            "Professionelle Enterprise-Umgebungen sichern sensible [das Dokument, -e|Dokumente] über verschlüsselte Cloud-Dienste und granulares Rollenmanagement ab, wobei ein kryptografisch robustes [das Passwort, -̈er|Passwort] die erste Verteidigungslinie bildet.",
            "Versehentlich in [der Papierkorb, -̈e|den Papierkorb] verschobene Daten unterliegen strikten Aufbewahrungsfristen (Compliance-Richtlinien nach GoBD).",
          ],
          [
            "Administratoren rollen zentrale [das Update, -s|Updates] für [das Betriebssystem, -e|das Betriebssystem] und eingesetzte [das Programm, -e|Programme] automatisiert aus, um Zero-Day-Exploits proaktiv zu neutralisieren und Systemstabilität zu garantieren.",
          ],
        ],
      },
    },
  },

  das_internet: {
    description: "Webbrowser, Websites, Suchmaschinen, Downloads, WLAN, Router und Datenschutz.",
    details: "Surfen im Web, E-Mail-Kommunikation, Cloud-Speicher und Online-Sicherheit (A1–B2)",
    arabicDescription:
      "الإنترنت (Das Internet): مفردات الشبكة العنكبوتية، متصفح الويب (Webbrowser)، المواقع الإلكترونية (Website)، محركات البحث (Suchmaschine)، التنزيل والتحميل (Download)، البريد الإلكتروني (E-Mail)، شبكة الواي فاي (WLAN)، جهاز الراوتر، السحابة (Cloud)، وحماية البيانات (Datenschutz).",
    words: [
      {
        german: "das Internet (Sg.)",
        arabic: "شبكة الإنترنت العالمية",
        english: "internet",
        example: "Ohne das Internet wäre globales Arbeiten heute kaum noch vorstellbar.",
      },
      {
        german: "der Webbrowser, -",
        arabic: "متصفح الويب (كروم، فايرفوكس، سفاري)",
        english: "web browser",
        example: "Ich öffne den Webbrowser und tippe die Adresse in die Adresszeile ein.",
      },
      {
        german: "die Website, -n",
        arabic: "الموقع الإلكتروني / صفحة الويب",
        english: "website, web page",
        example: "Auf der offiziellen Website finden Sie alle Öffnungszeiten und Termine.",
      },
      {
        german: "die Suchmaschine, -n",
        arabic: "محرك البحث (مثل جوجل)",
        english: "search engine",
        example: "Über eine Suchmaschine finde ich in Sekundenschnelle passende Antworten.",
      },
      {
        german: "der Download, -s",
        arabic: "تنزيل وتحميل الملفات من الإنترنت",
        english: "download",
        example: "Der Download der großen Installationsdatei dauerte nur wenige Minuten.",
      },
      {
        german: "die E-Mail, -s",
        arabic: "البريد الإلكتروني / الرسالة البريدية",
        english: "email",
        example: "Ich habe dem Vermieter eine formelle E-Mail mit meiner Bestätigung geschickt.",
      },
      {
        german: "das WLAN (Sg.)",
        arabic: "شبكة الإنترنت اللاسلكية (الواي فاي)",
        english: "Wi-Fi, WLAN",
        example: "Wie lautet das Passwort für das WLAN hier im Café?",
      },
      {
        german: "der Router, -",
        arabic: "جهاز التوجيه والراوتر المنزلي",
        english: "router, Wi-Fi router",
        example: "Wenn die Verbindung abbricht, starte ich den Router einfach neu.",
      },
      {
        german: "die Cloud (Sg.)",
        arabic: "السحابة الإلكترونية للتخزين السحابي",
        english: "cloud, cloud storage",
        example:
          "Meine Urlaubsfotos sind sicher in der Cloud gespeichert und von überall abrufbar.",
      },
      {
        german: "der Link, -s",
        arabic: "الرابط التشعبي الإلكتروني",
        english: "link, hyperlink",
        example: "Klicken Sie auf den blauen Link, um direkt zum Artikel zu gelangen.",
      },
      {
        german: "der Datenschutz (Sg.)",
        arabic: "حماية البيانات والخصوصية الرقمية (DSGVO)",
        english: "data protection, privacy",
        example: "In Europa regelt die DSGVO einen besonders strengen Datenschutz für Verbraucher.",
      },
      {
        german: "die Verbindung, -en",
        arabic: "الاتصال الشبكي / وصلة الإنترنت",
        english: "connection, internet connection",
        example: "Bei schlechtem Wetter ist die drahtlose Verbindung manchmal instabil.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich surfe im Netz",
        intro: "Einfache Sätze über Internet, WLAN, Webseiten und E-Mails (A1).",
        paragraphs: [
          [
            "Jeden Tag nutze ich [das Internet (Sg.)|das Internet].",
            "In meiner Wohnung verbinde ich mein Handy mit [das WLAN (Sg.)|dem WLAN].",
            "[der Router, -|Der Router] im Flur blinkt mit grünen Lichtern.",
          ],
          [
            "Am Computer starte ich [der Webbrowser, -|den Webbrowser].",
            "Mit [die Suchmaschine, -n|einer Suchmaschine] suche ich nach neuen Rezepten.",
            "Ich klicke auf [der Link, -s|einen Link] und lese eine bunte [die Website, -n|Website].",
          ],
          [
            "Am Abend schreibe ich [die E-Mail, -s|eine E-Mail] an meine Freundin in Spanien.",
            "Die Nachricht kommt sofort bei ihr an.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Online lernen und Daten teilen",
        intro: "Recherche im Internet, Downloads und Cloud-Synchronisation (A2).",
        paragraphs: [
          [
            "Für meinen Deutschkurs brauche ich eine stabile [die Verbindung, -en|Verbindung] zum Netz.",
            "Unser Lehrer stellt alle Übungsblätter online auf [die Website, -n|die Website] der Sprachschule.",
          ],
          [
            "Nach dem Einloggen starte ich [der Download, -s|den Download] der PDF-Dateien auf meinen Laptop.",
            "Wenn ich unterwegs bin, speichere ich meine Hausaufgaben in [die Cloud (Sg.)|der Cloud], damit ich von überall darauf zugreifen kann.",
          ],
          [
            "Wenn das Internet einmal langsam ist, trenne ich kurz [das WLAN (Sg.)|das WLAN] oder starte [der Router, -|den Router] neu.",
            "Außerdem achte ich im Internet darauf, keine privaten Daten auf unbekannten Seiten anzugeben.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Digitale Vernetzung und bewusster Datenschutz",
        intro: "Recherchen im Netz, Cloud-Sicherheit und Datenschutzrichtlinien (B1).",
        paragraphs: [
          [
            "[das Internet (Sg.)|Das Internet] hat die Art und Weise, wie wir uns informieren und kommunizieren, grundlegend revolutioniert.",
            "Über moderne [der Webbrowser, -|Webbrowser] navigieren wir sekundenschnell durch ein weltweites Netz aus [die Website, -n|Websites] und Datenbanken.",
          ],
          [
            "Wer gezielte Recherchen durchführt, verwendet verfeinerte Suchoperatoren in [die Suchmaschine, -n|Suchmaschinen], um verlässliche Fachquellen von oberflächlichen Werbeanzeigen zu filtern.",
            "Im Zeitalter von Homeoffice und Kollaboration ist [die Cloud (Sg.)|die Cloud] das Rückgrat moderner Teamarbeit geworden.",
          ],
          [
            "Gleichzeitig wächst das gesellschaftliche Bewusstsein für [der Datenschutz (Sg.)|Datenschutz].",
            "Nutzer fordern Transparenz darüber, welche Cookies gesetzt und welche persönlichen Daten von Drittanbietern verarbeitet werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Netzinfrastruktur, Plattformökonomie und europäischer Datenschutz",
        intro: "Datenschutz-Grundverordnung (DSGVO), Algorithmen und Netzwerkarchitektur (B2).",
        paragraphs: [
          [
            "Die technologische Evolution des Web hat globale Informationsmonopole und komplexe Plattformökonomien hervorgebracht.",
            "Während Glasfaserinfrastrukturen und moderne Wi-Fi-Standards gigabitfähige [die Verbindung, -en|Verbindungen] ermöglichen, rückt die gesellschaftspolitische Dimension des Netzes in den Fokus.",
          ],
          [
            "Die Europäische Union hat mit der Datenschutz-Grundverordnung (DSGVO) einen weltweiten Benchmark für [der Datenschutz (Sg.)|Datenschutz] und informationelle Selbstbestimmung etabliert.",
            "Unternehmen sind verpflichtet, datenschutzkonforme Standardeinstellungen ('Privacy by Design' und 'Privacy by Default') bei jeder [die Website, -n|Website] und jedem Cloud-Dienst zu implementieren.",
          ],
          [
            "Parallel dazu beeinflussen personalisierte Algorithmen dominanter [die Suchmaschine, -n|Suchmaschinen] und sozialer Netzwerke die öffentliche Meinungsbildung, was eine kritische digitale Medienkompetenz unerlässlich macht.",
          ],
        ],
      },
    },
  },

  das_telefon: {
    description:
      "Festnetzanschluss, Telefonhörer, Vorwahlen, Anrufbeantworter und geschäftliche Telefonate.",
    details: "Telefonieren im Alltag und Beruf, Höflichkeitsformeln und Weiterleitungen (A1–B2)",
    arabicDescription:
      "الهاتف والاتصالات (Das Telefon): مفردات الهاتف الأرضي (Festnetzanschluss)، سماعة الهاتف (Hörer)، رقم الهاتف، مفتاح الاتصال (Vorwahl)، جهاز الرد الآلي (Anrufbeantworter)، رنين الانتظار، إجراء المكالمات، وإدارة الاتصالات الرسمية.",
    words: [
      {
        german: "das Telefon, -e",
        arabic: "الهاتف / التليفون",
        english: "telephone, phone",
        example: "Das Telefon klingelt schon seit einer Minute im Nachbarzimmer.",
      },
      {
        german: "der Festnetzanschluss, -̈e",
        arabic: "خط الهاتف الأرضي المنزلي أو المكتبي",
        english: "landline, landline connection",
        example:
          "Viele Firmen besitzen einen zuverlässigen Festnetzanschluss für den Kundendienst.",
      },
      {
        german: "der Hörer, -",
        arabic: "سماعة الهاتف (التي تُرفع للأذن)",
        english: "receiver, handset",
        example: "Er nahm den Hörer ab und meldete sich mit seinem Familiennamen.",
      },
      {
        german: "die Telefonnummer, -n",
        arabic: "رقم الهاتف",
        english: "phone number",
        example: "Darf ich nach Ihrer Telefonnummer fragen, falls Rückfragen entstehen?",
      },
      {
        german: "die Vorwahl, -en",
        arabic: "رمز / مفتاح المنطقة أو الدولة للاتصال",
        english: "area code, dialling code",
        example: "Die telefonische Vorwahl für Berlin lautet 030.",
      },
      {
        german: "der Anrufbeantworter, -",
        arabic: "المجيب الصوتي الآلي لتسجيل الرسائل",
        english: "answering machine",
        example:
          "Bitte hinterlassen Sie eine Nachricht auf dem Anrufbeantworter nach dem Signalton.",
      },
      {
        german: "das Freizeichen, -",
        arabic: "نغمة الرنين المتقطعة (إشارة الاتصال)",
        english: "dial tone, ringing tone",
        example: "Ich hörte das Freizeichen und wartete geduldig darauf, dass jemand abhebt.",
      },
      {
        german: "das Besetztzeichen, -",
        arabic: "نغمة انشغال الخط (تووت تووت)",
        english: "busy signal, engaged tone",
        example: "Es ertönte nur das Besetztzeichen, weil die Leitung gerade belegt war.",
      },
      {
        german: "anrufen",
        arabic: "يتصل هاتفياً",
        english: "to call, to ring up",
        example: "Ich werde morgen früh den Arzt anrufen, um einen Kontrolltermin zu vereinbaren.",
      },
      {
        german: "auflegen",
        arabic: "ينهي المكالمة / يغلق الخط",
        english: "to hang up",
        example: "Verabschieden Sie sich höflich, bevor Sie den Hörer auflegen.",
      },
      {
        german: "die Durchwahl, -en",
        arabic: "الرقم الداخلي / التحويلة المباشرة للموظف",
        english: "direct extension number",
        example: "Wenn Sie die Durchwahl 45 wählen, landen Sie direkt in meinem Büro.",
      },
      {
        german: "die Warteschleife, -n",
        arabic: "طابور الانتظار الصوتي على الهاتف",
        english: "call queue, on-hold music",
        example:
          "Ich musste zehn Minuten in der Warteschleife ausharren, bis ein Berater frei war.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich rufe meine Freundin an",
        intro: "Einfache Sätze über Telefonieren, Nummern und Abheben (A1).",
        paragraphs: [
          [
            "[das Telefon, -e|Das Telefon] klingelt laut im Wohnzimmer.",
            "Ich hebe [der Hörer, -|den Hörer] ab und sage freundlich: 'Hallo, wer ist da?'",
            "Am Apparat ist meine gute Freundin Anna.",
          ],
          [
            "Gestern wollte ich sie auch [anrufen|anrufen].",
            "Ich habe [die Vorwahl, -en|die Vorwahl] und ihre [die Telefonnummer, -n|Telefonnummer] gewählt.",
            "Aber sie war nicht da und [der Anrufbeantworter, -|der Anrufbeantworter] ging an.",
          ],
          [
            "Wir sprechen zehn Minuten über unsere Pläne fürs Wochenende.",
            "Dann sagen wir 'Auf Wiederhören!' und ich kann [auflegen|auflegen].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Anruf bei der Arztpraxis",
        intro: "Einen Termin vereinbaren, Vorwahlen und Wartezeiten am Telefon (A2).",
        paragraphs: [
          [
            "Gestern Morgen musste ich dringend einen Termin beim Zahnarzt vereinbaren.",
            "Ich suchte [die Telefonnummer, -n|die Telefonnummer] mit der passenden [die Vorwahl, -en|Vorwahl] im Telefonbuch heraus.",
          ],
          [
            "Als ich wählte, ertönte zunächst [das Freizeichen, -|ein langes Freizeichen].",
            "Kurz darauf meldete sich eine automatische Stimme und ich landete in [die Warteschleife, -n|der Warteschleife].",
            "Eine freundliche Melodie spielte, während ich auf die nächste freie Mitarbeiterin wartete.",
          ],
          [
            "Nach drei Minuten meldete sich die Sprechstundenhilfe.",
            "Ich nannte meinen Namen und bekam einen Termin für nächsten Donnerstag.",
            "Danach bedankte ich mich höflich, bevor ich [auflegen|auflegte].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Professionelle Telefonate im Büroalltag",
        intro: "Höfliche Kommunikation, Weiterleitungen und Durchwahlnummern (B1).",
        paragraphs: [
          [
            "Das Führen von geschäftlichen Telefonaten erfordert professionelle Höflichkeitsstandards und klare Formulierungen.",
            "Im Büro nutzen wir einen stabilen [der Festnetzanschluss, -̈e|Festnetzanschluss] mit moderner Telefonanlage.",
          ],
          [
            "Kunden rufen meist über die Firmenzentrale an und werden dann über [die Durchwahl, -en|eine persönliche Durchwahl] direkt an den zuständigen Sachbearbeiter weitergeleitet.",
            "Sollte der Kollege verhindert sein, ertönt [das Besetztzeichen, -|das Besetztzeichen] oder es schaltet sich [der Anrufbeantworter, -|der Anrufbeantworter] mit einer präzisen Abwesenheitsnotiz ein.",
          ],
          [
            "Niemand verbringt gern unnötige Zeit in [die Warteschleife, -n|einer Warteschleife]; deshalb ist es wichtig, Anrufe zügig entgegenzunehmen und Anliegen verbindlich zu notieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Voice-over-IP, Call-Center-Architektur und Kundenkommunikation",
        intro: "Moderne VoIP-Systeme, Telefontraining und Deeskalation am Hörer (B2).",
        paragraphs: [
          [
            "In Zeiten digitalisierter Omnichannel-Kommunikation erfährt die Sprachverbindung über [das Telefon, -e|das Telefon] eine funktionale Transformation.",
            "Klassische Kupferleitungen und der analoge [der Festnetzanschluss, -̈e|Festnetzanschluss] wurden flächendeckend durch Voice-over-IP (VoIP) und Cloud-Telefonie abgelöst.",
          ],
          [
            "Moderne ACD-Systeme (Automatic Call Distribution) steuern eingehende Anrufe nach Auslastung und Qualifikation, wodurch [die Warteschleife, -n|Warteschleifen] minimiert und First-Contact-Resolution-Rates optimiert werden.",
            "Über konfigurierbare [die Durchwahl, -en|Durchwahlnummern] und SIP-Trunks lassen sich Mitarbeiter nahtlos im Homeoffice oder weltweit anbinden.",
          ],
          [
            "Gleichzeitig gewinnt psychologisch geschultes Telefontraining an Gewicht: Die Fähigkeit, in angespannten Reklamationssituationen empathisch zu deeskalieren und verbindliche Lösungen zu artikulieren, bleibt ein menschlicher Wettbewerbsvorteil.",
          ],
        ],
      },
    },
  },
};

const kmPath = "src/data/vocabulary/kommunikation.json";
const kmData = JSON.parse(fs.readFileSync(kmPath, "utf8"));

for (const sec of kmData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(kmData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(kmPath, JSON.stringify(kmData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to kommunikation.json!");
