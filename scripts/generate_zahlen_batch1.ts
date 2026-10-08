import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema";

interface TopicData {
  id: string;
  title: string;
  description: string;
  details: string;
  arabicDescription: string;
  words: { german: string; arabic: string; english: string; example: string }[];
  story: { level: "A1"; badge: string; title: string; intro: string; paragraphs: string[][] };
  stories: {
    A1: { level: "A1"; badge: string; title: string; intro: string; paragraphs: string[][] };
    A2: { level: "A2"; badge: string; title: string; intro: string; paragraphs: string[][] };
    B1: { level: "B1"; badge: string; title: string; intro: string; paragraphs: string[][] };
    B2: { level: "B2"; badge: string; title: string; intro: string; paragraphs: string[][] };
  };
}

const batch1Topics: Record<string, TopicData> = {
  die_kardinalzahlen: {
    id: "die_kardinalzahlen",
    title: "Die Kardinalzahlen",
    description: "Grundzahlen, Ziffern, Rechnen und Mengen von null bis zu Milliarden.",
    details: "Kardinalzahlen, mathematische Ziffern und Grundrechenarten (A1–B2)",
    arabicDescription:
      "الأعداد الأصلية (Kardinalzahlen) في اللغة الألمانية من الصفر وحتى المليار، مع قواعد تكوين الأعداد المركبة (قراءة الآحاد قبل العشرات مع und مثل einundzwanzig)، والعمليات الحسابية البسيطة والتعامل مع الأرقام الإحصائية.",
    words: [
      {
        german: "die Zahl, -en",
        arabic: "العدد / الرقم",
        english: "number",
        example: "Die Zahl Zehn ist das grundlegende Fundament unseres vertrauten Dezimalsystems.",
      },
      {
        german: "die Ziffer, -n",
        arabic: "الخانة / الرقم المكتوب",
        english: "digit",
        example: "Jede PIN-Nummer setzt sich aus mindestens vier individuellen Ziffern zusammen.",
      },
      {
        german: "die Null, -en",
        arabic: "الصفر",
        english: "zero",
        example:
          "Die mathematische Entdeckung der Null revolutionierte die Wissenschaft nachhaltig.",
      },
      {
        german: "eins",
        arabic: "واحد",
        english: "one",
        example: "Eins und eins ergibt nach den logischen Gesetzen der Arithmetik zwei.",
      },
      {
        german: "zehn",
        arabic: "عشرة",
        english: "ten",
        example: "Ein volles Jahrzehnt umfasst ohne jede Ausnahme genau zehn Kalenderjahre.",
      },
      {
        german: "hundert",
        arabic: "مائة",
        english: "hundred",
        example: "Ein Prozent bezeichnet rechnerisch exakt einen Teil von hundert Einheiten.",
      },
      {
        german: "tausend",
        arabic: "ألف",
        english: "thousand",
        example: "Ein metrischer Kilometer entspricht der Distanz von exakt eintausend Metern.",
      },
      {
        german: "die Million, -en",
        arabic: "المليون",
        english: "million",
        example: "In der lebendigen Metropole leben heute bereits über drei Millionen Bürger.",
      },
      {
        german: "die Milliarde, -n",
        arabic: "المليار",
        english: "billion",
        example: "Die gesamte Weltbevölkerung zählt gegenwärtig mehr als acht Milliarden Menschen.",
      },
      {
        german: "zählen",
        arabic: "عَدّ / يحسب",
        english: "to count",
        example: "Kinder lernen bereits in der Vorschule spielerisch bis zwanzig zu zählen.",
      },
      {
        german: "rechnen",
        arabic: "حسب / يجري عملية حسابية",
        english: "to calculate",
        example:
          "Mit einem modernen Taschenrechner kann man selbst komplexe Gleichungen rasch rechnen.",
      },
      {
        german: "die Summe, -n",
        arabic: "المجموع / الحاصل",
        english: "sum, total",
        example: "Die endgültige Summe aller Einkäufe stand übersichtlich auf der Rechnung.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Zahlen lernen und zählen im Alltag",
      intro: "Einfache Sätze über Zahlen von null bis hundert und leichtes Rechnen (A1).",
      paragraphs: [
        [
          "In der Schule lernen die Kinder jeden Tag neue Dinge.",
          "Zuerst lernen sie [die Zahl, -en|Zahlen] von [die Null, -en|Null] bis [zehn|zehn].",
          "[eins|Eins] und eins ist zwei, und zwei plus zwei ist vier.",
          "Sie üben laut im Chor zu [zählen|zählen].",
        ],
        [
          "Später lernen sie größere Zahlen bis [hundert|hundert] und [tausend|tausend].",
          "Im Supermarkt muss man die Preise addieren und genau [rechnen|rechnen].",
          "An der Kasse bezahlt man [die Summe, -n|die Summe] in bar oder mit Karte.",
          "Jede Telefonnummer besteht aus vielen kleinen [die Ziffer, -n|Ziffern].",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Zahlen lernen und zählen im Alltag",
        intro: "Einfache Sätze über Zahlen von null bis hundert und leichtes Rechnen (A1).",
        paragraphs: [
          [
            "In der Schule lernen die Kinder jeden Tag neue Dinge.",
            "Zuerst lernen sie [die Zahl, -en|Zahlen] von [die Null, -en|Null] bis [zehn|zehn].",
            "[eins|Eins] und eins ist zwei, und zwei plus zwei ist vier.",
            "Sie üben laut im Chor zu [zählen|zählen].",
          ],
          [
            "Später lernen sie größere Zahlen bis [hundert|hundert] und [tausend|tausend].",
            "Im Supermarkt muss man die Preise addieren und genau [rechnen|rechnen].",
            "An der Kasse bezahlt man [die Summe, -n|die Summe] in bar oder mit Karte.",
            "Jede Telefonnummer besteht aus vielen kleinen [die Ziffer, -n|Ziffern].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Einkaufen, Haushaltsbuch und große Zahlen",
        intro: "Umgang mit Geldbeträgen, Rechnungen und Telefonnummern in Beruf und Alltag (A2).",
        paragraphs: [
          [
            "Wer in Deutschland einen eigenen Haushalt führt, muss seine monatlichen Ausgaben sorgfältig planen.",
            "Man setzt sich an den Schreibtisch und beginnt gewissenhaft zu [rechnen|rechnen].",
            "Miete, Strom, Lebensmittel und Fahrkarten ergeben zusammen eine beachtliche [die Summe, -n|Summe].",
            "Um Fehler zu vermeiden, sollte man alle Belege einzeln [zählen|zählen] und ordnen.",
          ],
          [
            "In den Nachrichten hört man oft gigantische Zahlen über Wirtschaft und Finanzen.",
            "Da geht es nicht nur um [tausend|tausend] Euro, sondern um viele [die Million, -en|Millionen] oder gar eine [die Milliarde, -n|Milliarde].",
            "Besonders wichtig ist es, die [die Ziffer, -n|Ziffern] auf Überweisungen fehlerfrei einzugeben.",
            "Schon eine einzige vergessene [die Null, -en|Null] verändert [die Zahl, -en|die Zahl] auf dem Überweisungsformular dramatisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Das Dezimalsystem und die Macht der Statistik",
        intro:
          "Wie Zahlen unsere Wahrnehmung formen und komplexe Sachverhalte quantifizieren (B1).",
        paragraphs: [
          [
            "Zahlen sind die universelle Sprache der menschlichen Zivilisation und ermöglichen globalen Handel.",
            "Ohne das Konzept, Dinge präzise zu [zählen|zählen] und mathematisch zu erfassen, gäbe es weder Wissenschaft noch moderne Technologie.",
            "Ausgehend von den Ziffern von [die Null, -en|Null] bis [zehn|zehn] konstruiert das Dezimalsystem ein unendliches Kontinuum.",
            "Jede wissenschaftliche Erhebung stützt sich auf empirische Daten, aus denen Forscher verlässliche Durchschnitte [rechnen|rechnen].",
          ],
          [
            "Wenn globale Organisationen über Demografie debattieren, bewegen sich die Schätzungen im Bereich von vielen [die Milliarde, -n|Milliarden] Menschen.",
            "Nationale Budgets verteilen etliche [die Million, -en|Millionen] für Bildung, Infrastruktur und Umweltschutz.",
            "Am Ende entscheidet stets [die Summe, -n|die Summe] aller Einzelentscheidungen über Erfolg oder Misserfolg eines Projekts.",
            "Hinter jeder abstrakten [die Zahl, -en|Zahl] stehen reale menschliche Schicksale und greifbare wirtschaftliche Realitäten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Mathematische Abstraktion, Quantifizierung und Big Data",
        intro:
          "Philosophische und erkenntnistheoretische Dimensionen von Zahlenwelten und Algorithmen (B2).",
        paragraphs: [
          [
            "Die fortschreitende Digitalisierung hat die Quantifizierung aller Lebensbereiche auf eine beispiellose Spitze getrieben.",
            "Algorithmen reduzieren komplexe menschliche Verhaltensmuster auf Ketten binärer [die Ziffer, -n|Ziffern], bestehend aus [eins|Eins] und [die Null, -en|Null].",
            "Während die Antike in mathematischen Proportionen noch kosmische Harmonien vermutete, operiert die Moderne mit gigantischen Datenmengen.",
            "Rechenzentren verarbeiten im Sekundentakt Abermillionen Operationen und [rechnen|rechnen] Wahrscheinlichkeiten für globale Finanzmärkte aus.",
          ],
          [
            "In makroökonomischen Modellierungen entscheidet oft ein Bruchteil eines Prozentpunkts über Investitionsströme in Höhe von mehreren [die Milliarde, -n|Milliarden].",
            "Kritische Denker warnen davor, die Qualität sozialer Beziehungen rein numerisch erfassen zu wollen, denn Vertrauen lässt sich nicht [zählen|zählen].",
            "Letztlich bleibt [die Zahl, -en|die Zahl] ein mächtiges epistemisches Werkzeug, das der Menschheit zwar Erkenntnisgewinn schenkt, aber niemals moralische Urteilskraft ersetzen kann.",
          ],
        ],
      },
    },
  },

  die_ordinalzahlen: {
    id: "die_ordinalzahlen",
    title: "Die Ordinalzahlen",
    description: "Ordnungszahlen, Rangfolgen, Datumsangaben und chronologische Sequenzen.",
    details: "Ordinalzahlen, Ränge, Reihenfolgen und Datumsstrukturen (A1–B2)",
    arabicDescription:
      "الأعداد الترتيبية (Ordinalzahlen) واستخداماتها الأساسية في تحديد الترتيب، وتواريخ الأيام (مثل am ersten Mai مع إضافة النهاية -ten)، والطبقات السكنية، والمراكز الرياضية، والكلمات المساعدة للتسلسل المنطقي مثل erstens و zweitens.",
    words: [
      {
        german: "der erste / die erste / das erste",
        arabic: "الأول / الأولى",
        english: "first",
        example: "Der erste Eindruck entscheidet oft über Sympathie und Vertrauen im Gespräch.",
      },
      {
        german: "der zweite",
        arabic: "الثاني",
        english: "second",
        example: "Im zweiten Obergeschoss liegen die Konferenzräume des Unternehmens.",
      },
      {
        german: "der dritte",
        arabic: "الثالث",
        english: "third",
        example: "Aller guten Dinge sind drei, deshalb probierte sie es ein drittes Mal.",
      },
      {
        german: "der vierte",
        arabic: "الرابع",
        english: "fourth",
        example:
          "Das vierte Quartal eines Geschäftsjahres ist für den Einzelhandel besonders umsatzstark.",
      },
      {
        german: "der zehnte",
        arabic: "العاشر",
        english: "tenth",
        example: "Am zehnten Oktober feiern die Nachbarn ihr gemeinsames Straßenfest.",
      },
      {
        german: "der zwanzigste",
        arabic: "العشرون",
        english: "twentieth",
        example: "Heute ist bereits der zwanzigste Tag unseres intensiven Sprachkurses.",
      },
      {
        german: "der letzte",
        arabic: "الأخير",
        english: "last",
        example: "Der letzte Bus des Tages verlässt die Haltestelle um dreiundzwanzig Uhr.",
      },
      {
        german: "der vorletzte",
        arabic: "قبل الأخير",
        english: "penultimate, second to last",
        example:
          "In der vorletzten Reihe des Kinosaals hatte man die beste Sicht auf die Leinwand.",
      },
      {
        german: "die Reihenfolge, -n",
        arabic: "الترتيب / التسلسل",
        english: "order, sequence",
        example:
          "Bitte beachten Sie bei der Montage die vorgeschriebene Reihenfolge der Arbeitsschritte.",
      },
      {
        german: "der Rang, ⸚e",
        arabic: "المرتبة / الرتبة",
        english: "rank",
        example:
          "Mit herausragender Kondition sicherte sich die Läuferin den ersten Rang auf dem Podium.",
      },
      {
        german: "zweitens",
        arabic: "ثانياً",
        english: "secondly",
        example: "Erstens ist die Aufgabe zu komplex, und zweitens reicht unser Budget nicht aus.",
      },
      {
        german: "anfangs",
        arabic: "في البداية / بادئ ذي بدء",
        english: "initially, at first",
        example:
          "Anfangs wirkte die fremde Stadt einschüchternd, doch bald fühlte er sich heimisch.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Der Wettlauf und die Reihenfolge",
      intro: "Einfache Sätze mit Ordinalzahlen, Datumsangaben und Reihenfolgen (A1).",
      paragraphs: [
        [
          "Heute ist ein sonniger Schultag und die Kinder haben Sportfest.",
          "Beim kurzen Wettlauf rennen alle Schüler so schnell sie können.",
          "Paul läuft am schnellsten und ist [der erste / die erste / das erste|der erste] im Ziel.",
          "Lukas kommt kurz nach ihm an und wird [der zweite|der zweite].",
        ],
        [
          "Maria belegt den [der dritte|dritten] Platz und freut sich über ihre Medaille.",
          "Alle warten geduldig auf [der letzte|den letzten] Läufer der Gruppe.",
          "Der Lehrer notiert die genaue [die Reihenfolge, -n|Reihenfolge] der Kinder auf einer Liste.",
          "Am [der zehnte|zehnten] Juli gibt es für alle Teilnehmer eine feierliche Urkunde.",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Der Wettlauf und die Reihenfolge",
        intro: "Einfache Sätze mit Ordinalzahlen, Datumsangaben und Reihenfolgen (A1).",
        paragraphs: [
          [
            "Heute ist ein sonniger Schultag und die Kinder haben Sportfest.",
            "Beim kurzen Wettlauf rennen alle Schüler so schnell sie können.",
            "Paul läuft am schnellsten und ist [der erste / die erste / das erste|der erste] im Ziel.",
            "Lukas kommt kurz nach ihm an und wird [der zweite|der zweite].",
          ],
          [
            "Maria belegt den [der dritte|dritten] Platz und freut sich über ihre Medaille.",
            "Alle warten geduldig auf [der letzte|den letzten] Läufer der Gruppe.",
            "Der Lehrer notiert die genaue [die Reihenfolge, -n|Reihenfolge] der Kinder auf einer Liste.",
            "Am [der zehnte|zehnten] Juli gibt es für alle Teilnehmer eine feierliche Urkunde.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Termine vereinbaren und Pläne strukturieren",
        intro: "Datumsangaben, Stockwerke und schrittweise Argumentation im Alltag (A2).",
        paragraphs: [
          [
            "Wenn man in Deutschland offizielle Termine vereinbart, braucht man genaue Ordnungszahlen.",
            "„Ich hätte gerne einen Termin am [der zehnte|zehnten] oder am [der zwanzigste|zwanzigsten] Mai“, erklärt die Kundin am Telefon.",
            "Die Praxis der Ärztin liegt im [der zweite|zweiten] Stockwerk eines Altbaus.",
            "Sie nimmt den Aufzug, weil die Treppe bis in die [der vierte|vierte] Etage sehr steil ist.",
          ],
          [
            "Bei einer Präsentation strukturiert man seine Gedanken klar und verständlich.",
            "[anfangs|Anfangs] begrüßt man die Zuhörer und nennt das Hauptthema.",
            "Erstens stellt man das Konzept vor, und [zweitens|zweitens] diskutiert man die Kosten.",
            "In der [die Reihenfolge, -n|Reihenfolge] der Planung kommt die Budgetprüfung immer vor der Umsetzung.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Wettbewerb, Ranglisten und Prioritätensetzung",
        intro:
          "Wie Ordnungszahlen hierarchische Strukturen und sportliche Leistungen beschreiben (B1).",
        paragraphs: [
          [
            "In Sport und Wirtschaft entscheiden feine Nuancen über den Erfolg.",
            "Wer bei internationalen Meisterschaften [der erste / die erste / das erste|den ersten] [der Rang, ⸚e|Rang] erobert, schreibt Geschichte.",
            "Doch auch wer als [der zweite|Zweiter] oder [der dritte|Dritter] durchs Ziel geht, erbringt eine bewundernswerte Höchstleistung.",
            "Häufig entscheidet der [der vorletzte|vorletzte] Kilometer eines Marathons über Sieg oder Niederlage.",
          ],
          [
            "Im beruflichen Projektmanagement muss das Team eine strenge [die Reihenfolge, -n|Reihenfolge] einhalten.",
            "Nicht alle Aufgaben können simultan bearbeitet werden; manche müssen zwingend vor anderen abgeschlossen sein.",
            "Erst wenn [der letzte|der letzte] Meilenstein erfolgreich validiert ist, gilt das Gesamtvorhaben als abgeschlossen.",
            "Dabei zeigt sich oft: Was [anfangs|anfangs] nebensächlich schien, entpuppt sich später als entscheidender Erfolgsfaktor.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Sequenzielle Logik, Rangordnungen und historische Epochen",
        intro:
          "Strukturierung von Komplexität durch chronologische und hierarchische Ordnungssysteme (B2).",
        paragraphs: [
          [
            "Ordnungszahlen bilden das linguistische Rückgrat jeder analytischen Argumentation und historischen Periodisierung.",
            "Die Geschichtsschreibung gliedert Epochen in Phasen: das [der erste / die erste / das erste|erste], [der zweite|zweite] und [der dritte|dritte] Reich oder die Wandlungen des zwanzigsten Jahrhunderts.",
            "Wer eine überzeugende wissenschaftliche These formuliert, gliedert dialektisch: erstens die These, [zweitens|zweitens] die Antithese und drittens die Synthese.",
            "Ohne eine verbindliche [die Reihenfolge, -n|Reihenfolge] zerfällt jede rationale Argumentationskette in beliebige Fragmente.",
          ],
          [
            "Auch in soziologischen Analysen von Status und Prestige fungiert [der Rang, ⸚e|der Rang] als Indikator gesellschaftlicher Distinktion.",
            "Ob im akademischen Betrieb oder in Unternehmenshierarchien – die Differenzierung zwischen [der vorletzte|vorletzten] und [der letzte|letzten] Positionen reflektiert subtile Machtverhältnisse.",
            "Die Fähigkeit, temporale und hierarchische Sequenzen präzise zu artikulieren, zeichnet differenzierten Sprachgebrauch auf höchstem Niveau aus.",
          ],
        ],
      },
    },
  },

  die_bruchzahlen: {
    id: "die_bruchzahlen",
    title: "Die Bruchzahlen",
    description: "Brüche, Prozentangaben, Anteile und mathematische Teilmengen.",
    details: "Bruchzahlen, Anteile, Prozentrechnung und Mengenteilung (A1–B2)",
    arabicDescription:
      "الأعداد الكسرية (Bruchzahlen) والنسب المئوية (Prozent) في اللغة الألمانية. يتضمن الدرس أسماء الكسور مثل die Hälfte و das Drittel و das Viertel، ومصطلحي البسط (der Zähler) والمقام (der Nenner)، والصفات المركبة مثل anderthalb و zweieinhalb، وقواعد كتابة الكسور كأعداد أو كأسماء محايدة.",
    words: [
      {
        german: "die Hälfte, -n",
        arabic: "النصف",
        english: "half",
        example:
          "Mehr als die Hälfte der anwesenden Gäste entschied sich für das vegetarische Menü.",
      },
      {
        german: "das Drittel, -",
        arabic: "الثلث",
        english: "third",
        example:
          "Etwa ein Drittel des gesamten Monatseinkommens fließt direkt in die Wohnungsmiete.",
      },
      {
        german: "das Viertel, -",
        arabic: "الربع",
        english: "quarter",
        example: "In genau einer Viertelstunde beginnt die wichtige Teambesprechung im Saal.",
      },
      {
        german: "das Zehntel, -",
        arabic: "العُشر",
        english: "tenth",
        example:
          "Nur ein winziges Zehntel aller eingereichten Entwürfe schaffte es in die Endauswahl.",
      },
      {
        german: "das Prozent, -e",
        arabic: "النسبة المئوية / بالمائة",
        english: "percent",
        example: "Die jährliche Inflationsrate ging überraschend um zwei Prozent zurück.",
      },
      {
        german: "der Bruch, ⸚e",
        arabic: "الكسر (الحسابي)",
        english: "fraction",
        example: "Im Mathematikunterricht lernen Schüler, wie man Brüche fachgerecht erweitert.",
      },
      {
        german: "der Zähler, -",
        arabic: "البسط (في الكسر)",
        english: "numerator",
        example: "Der Zähler steht oberhalb des Bruchstrichs und beziffert die gezählten Anteile.",
      },
      {
        german: "der Nenner, -",
        arabic: "المقام (في الكسر)",
        english: "denominator",
        example:
          "Wenn der Nenner größer wird, verkleinert sich der Gesamtwert der einzelnen Bruchteile.",
      },
      {
        german: "halb",
        arabic: "نصف (صفة)",
        english: "half",
        example: "Es ist bereits halb vier nachmittags, wir sollten uns auf den Rückweg machen.",
      },
      {
        german: "anderthalb",
        arabic: "واحد ونصف",
        english: "one and a half",
        example: "Die Zugfahrt mit dem ICE nach Hamburg dauerte anderthalb entspannte Stunden.",
      },
      {
        german: "zweieinhalb",
        arabic: "اثنان ونصف",
        english: "two and a half",
        example: "Für den Kuchenteig benötigen wir zweieinhalb Kilogramm frisches Bio-Mehl.",
      },
      {
        german: "der Anteil, -e",
        arabic: "الحصة / النسبة / النصيب",
        english: "share, proportion",
        example: "Der Anteil erneuerbarer Energien an der Stromerzeugung steigt kontinuierlich an.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Kuchen teilen und Zeit messen",
      intro: "Einfache Bruchteile wie halb, Drittel und Viertel im Alltag (A1).",
      paragraphs: [
        [
          "Zum Geburtstag backt Oma einen großen, leckeren Apfelkuchen.",
          "Sie schneidet den Kuchen genau in zwei Teile: Jedes Kind bekommt [die Hälfte, -n|die Hälfte].",
          "Wenn drei Freunde da sind, bekommt jeder [das Drittel, -|ein Drittel].",
          "Bei vier Gästen schneidet sie den Kuchen in vier Stücke: Jedes Stück ist [das Viertel, -|ein Viertel].",
        ],
        [
          "Wir schauen auf die Uhr im Wohnzimmer.",
          "Es ist schon [halb|halb] drei, und der Besuch kommt gleich.",
          "Wir warten noch [anderthalb|anderthalb] Stunden, bis die Feier richtig beginnt.",
          "Beim Einkaufen haben wir [zweieinhalb|zweieinhalb] Kilo Äpfel mitgebracht.",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Kuchen teilen und Zeit messen",
        intro: "Einfache Bruchteile wie halb, Drittel und Viertel im Alltag (A1).",
        paragraphs: [
          [
            "Zum Geburtstag backt Oma einen großen, leckeren Apfelkuchen.",
            "Sie schneidet den Kuchen genau in zwei Teile: Jedes Kind bekommt [die Hälfte, -n|die Hälfte].",
            "Wenn drei Freunde da sind, bekommt jeder [das Drittel, -|ein Drittel].",
            "Bei vier Gästen schneidet sie den Kuchen in vier Stücke: Jedes Stück ist [das Viertel, -|ein Viertel].",
          ],
          [
            "Wir schauen auf die Uhr im Wohnzimmer.",
            "Es ist schon [halb|halb] drei, und der Besuch kommt gleich.",
            "Wir warten noch [anderthalb|anderthalb] Stunden, bis die Feier richtig beginnt.",
            "Beim Einkaufen haben wir [zweieinhalb|zweieinhalb] Kilo Äpfel mitgebracht.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Kochen nach Rezept und Sonderangebote im Supermarkt",
        intro: "Mengenteile, Gewichtsangaben und Prozente beim Einkaufen (A2).",
        paragraphs: [
          [
            "Beim Kochen nach Rezept muss man Bruchteile genau abmessen.",
            "Für die Soße benötigt man [anderthalb|anderthalb] Becher Sahne und [die Hälfte, -n|die Hälfte] einer Zitrone.",
            "Wer für eine größere Feier kocht, nimmt [zweieinhalb|zweieinhalb] Liter Gemüsebrühe.",
            "Ein gutes Rezept gelingt nur, wenn das Mengenverhältnis stimmt.",
          ],
          [
            "Im Supermarkt werben die Schilder mit verlockenden Rabatten.",
            "„Heute zwanzig [das Prozent, -e|Prozent] Nachlass auf alle Bio-Molkereiprodukte!“, verkündet der Aushang.",
            "Fast [das Drittel, -|ein Drittel] aller Kunden greift begeistert zu den reduzierten Waren.",
            "So spart man bares Geld und hält die Haushaltsausgaben in vernünftigen Grenzen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Statistiken verstehen und Quoten analysieren",
        intro:
          "Wie prozentuale Verteilungen und Bruchteile gesellschaftliche Trends abbilden (B1).",
        paragraphs: [
          [
            "Grafiken und Tabellen in den Medien vermitteln wichtige Informationen durch Bruchteile.",
            "Man liest, dass [der Anteil, -e|der Anteil] der Beschäftigten im Dienstleistungssektor stetig wächst.",
            "Mehr als [die Hälfte, -n|die Hälfte] der Bevölkerung nutzt regelmäßig öffentliche Verkehrsmittel.",
            "Gleichzeitig monieren Kritiker, dass nur ein knappes [das Zehntel, -|Zehntel] der Investitionen in den Schienenausbau fließt.",
          ],
          [
            "In der Schule bildet die Bruchrechnung die Brücke zu höherer Mathematik.",
            "Jeder mathematische [der Bruch, ⸚e|Bruch] verdeutlicht das Zusammenspiel zwischen Teilen und dem Ganzen.",
            "Der Schüler muss begreifen, wie [der Zähler, -|der Zähler] und [der Nenner, -|der Nenner] zueinander in Relation stehen.",
            "Wer dieses mathematische Prinzip meistert, versteht auch Zinseszinsen und prozentuale Veränderungen im Wirtschaftsleben.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Proportionale Modelle, Verteilungsquoten und fraktionale Arithmetik",
        intro:
          "Theoretische Analyse quantitativer Relationen und sozioökonomischer Ungleichheiten (B2).",
        paragraphs: [
          [
            "In der soziologischen Ungleichheitsforschung spielen Fraktionen und Quoten eine fundamentale Rolle.",
            "Empirische Studien belegen, dass das oberste [das Zehntel, -|Zehntel] der Vermögenspyramide über mehr als [die Hälfte, -n|die Hälfte] des gesamten Nettovermögens verfügt.",
            "Solche Verteilungsrelationen lassen sich präzise durch Gini-Koeffizienten und prozentuale Kennziffern modellieren.",
            "Der prozentuale [der Anteil, -e|Anteil] vulnerabler Gruppen an den Gesamtausgaben entscheidet über die soziale Kohärenz einer Demokratie.",
          ],
          [
            "Auf mikroökonomischer Ebene erfordern Unternehmensfusionen eine penible Aufteilung der Eigentumsrechte.",
            "Jeder Gesellschafter beansprucht [das Drittel, -|ein Drittel] oder [das Viertel, -|ein Viertel] der Stimmrechte im Aufsichtsrat.",
            "Mathematisch abstrahiert fungiert der [der Bruch, ⸚e|Bruch] als Verhältnis zweier ganzer Zahlen, wobei [der Nenner, -|der Nenner] die Basisskalierung definiert und [der Zähler, -|der Zähler] die Frequenz abbildet.",
            "Die Beherrschung dieses mathematischen Vokabulars ist unabdingbar für wissenschaftliche und ökonomische Diskurse.",
          ],
        ],
      },
    },
  },

  weitere_zahlwoerter: {
    id: "weitere_zahlwoerter",
    title: "Weitere Zahlwörter",
    description: "Indefinitpronomen, Multiplikativa, Mengenangaben und Zahlbegriffe.",
    details: "Vervielfältigungszahlen, unbestimmte Zahladjektive und Mengenausdrücke (A1–B2)",
    arabicDescription:
      "ألفاظ الأعداد الأخرى وأسماء الكميات (Weitere Zahlwörter) في الألمانية: أعداد المضاعفة مثل einfach و doppelt و dreifach، والضمائر غير المحددة للكمية مثل alle و einige و manche و mehrere و wenige و viel، بالإضافة إلى الوحدات التقليدية مثل das Dutzend و das Paar.",
    words: [
      {
        german: "einfach",
        arabic: "بسيط / أحادي / مفرد",
        english: "single, simple",
        example: "Die Lösung für dieses knifflige Rätsel war verblüffend einfach.",
      },
      {
        german: "doppelt",
        arabic: "مزدوج / مضاعف",
        english: "double",
        example:
          "Sie bestellte einen doppelten Espresso, um während der Nachtschicht wach zu bleiben.",
      },
      {
        german: "dreifach",
        arabic: "ثلاثي / ثلاثة أضعاف",
        english: "triple",
        example: "Die Nachfrage nach Wärmepumpen stieg in diesem Jahr um das Dreifache an.",
      },
      {
        german: "mehrfach",
        arabic: "متعدد / مراراً وتكراراً",
        english: "multiple, repeatedly",
        example: "Der Rauchmelder schlug im Laufe des Vormittags mehrfach falschen Alarm.",
      },
      {
        german: "beide",
        arabic: "كلاهما / الاثنان معاً",
        english: "both",
        example: "Beide Kandidaten überzeugten die Kommission durch herausragende Fachkompetenz.",
      },
      {
        german: "alle",
        arabic: "كل / جميع",
        english: "all",
        example: "Alle Kursteilnehmer bestanden die anspruchsvolle Sprachprüfung mit Bestnoten.",
      },
      {
        german: "einige",
        arabic: "بعض / بضعة",
        english: "some, several",
        example: "Im Kühlschrank befinden sich noch einige frische Tomaten aus dem Garten.",
      },
      {
        german: "manche",
        arabic: "بعض / فئة معينة",
        english: "some, certain",
        example: "Manche Menschen benötigen morgens viel Ruhe, um den Tag entspannt zu beginnen.",
      },
      {
        german: "mehrere",
        arabic: "عدّة",
        english: "several",
        example: "Die Forschergruppe veröffentlichte zu diesem Thema mehrere Fachaufsätze.",
      },
      {
        german: "wenige",
        arabic: "قليل / قلة",
        english: "few",
        example: "Nur sehr wenige Passanten waren zu dieser späten Stunde noch auf den Straßen.",
      },
      {
        german: "viel",
        arabic: "كثير / قدر كبير",
        english: "much, a lot",
        example: "Um fließend Deutsch zu sprechen, braucht man viel praktische Sprechübung.",
      },
      {
        german: "das Dutzend, -e",
        arabic: "الدرزن (اثنا عشر شيئاً)",
        english: "dozen",
        example: "Auf dem Markt kaufte der Bäcker ein Dutzend frische Eier für den Teig.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Mengen beschreiben und einkaufen",
      intro: "Einfache Wörter für Mengen und Vervielfältigungen im Alltag (A1).",
      paragraphs: [
        [
          "Heute gehen wir zusammen auf den großen Wochenmarkt in der Stadt.",
          "Dort gibt es [viel|viel] frisches Obst und gesundes Gemüse zu kaufen.",
          "Ich kaufe [das Dutzend, -e|ein Dutzend] Eier und zwei Körbe Erdbeeren.",
          "[alle|Alle] Verkäufer sind sehr freundlich und grüßen die Kunden.",
        ],
        [
          "Ich habe zwei Freunde dabei, und [beide|beide] möchten einen Kaffee trinken.",
          "Wir bestellen einen einfachen Kaffee und einen [doppelt|doppelten] Espresso.",
          "[einige|Einige] Tische im Café sind frei, aber [manche|manche] Plätze sind reserviert.",
          "Die Bestellung ist wirklich [einfach|einfach] und schnell gemacht.",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mengen beschreiben und einkaufen",
        intro: "Einfache Wörter für Mengen und Vervielfältigungen im Alltag (A1).",
        paragraphs: [
          [
            "Heute gehen wir zusammen auf den großen Wochenmarkt in der Stadt.",
            "Dort gibt es [viel|viel] frisches Obst und gesundes Gemüse zu kaufen.",
            "Ich kaufe [das Dutzend, -e|ein Dutzend] Eier und zwei Körbe Erdbeeren.",
            "[alle|Alle] Verkäufer sind sehr freundlich und grüßen die Kunden.",
          ],
          [
            "Ich habe zwei Freunde dabei, und [beide|beide] möchten einen Kaffee trinken.",
            "Wir bestellen einen einfachen Kaffee und einen [doppelt|doppelten] Espresso.",
            "[einige|Einige] Tische im Café sind frei, aber [manche|manche] Plätze sind reserviert.",
            "Die Bestellung ist wirklich [einfach|einfach] und schnell gemacht.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Alltägliche Mengen und Arbeitsorganisation",
        intro: "Mengenvergleiche, mehrfache Aufgaben und Teamentscheidungen (A2).",
        paragraphs: [
          [
            "Im Büroalltag muss man oft [mehrere|mehrere] Termine an einem einzigen Tag koordinieren.",
            "[manche|Manche] Aufgaben sind schnell erledigt, während andere [viel|viel] Geduld erfordern.",
            "Die Projektleiterin bat [alle|alle] Mitarbeiter, pünktlich zum Meeting zu erscheinen.",
            "[beide|Beide] Teams haben [mehrfach|mehrfach] miteinander telefoniert, um die Details zu klären.",
          ],
          [
            "Für den neuen Kunden haben wir ein [doppelt|doppeltes] Kontingent an Beratungssitzungen gebucht.",
            "Es gab zwar [einige|einige] technische Rückfragen, doch [wenige|wenige] Minuten später war alles geklärt.",
            "Der Ablauf der Software ist denkbar [einfach|einfach] gestaltet.",
            "So sparen [alle|alle] Beteiligten wertvolle Arbeitszeit.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Differenzierte Mengenangaben und gesellschaftliche Tendenzen",
        intro:
          "Wie Indefinitpronomina und Multiplikatoren Nuancen in Diskussionen ausdrücken (B1).",
        paragraphs: [
          [
            "In gesellschaftlichen Debatten ist es essenziell, Verallgemeinerungen zu vermeiden.",
            "Aussagen, die behaupten, dass [alle|alle] Bürger einer Meinung seien, halten einer kritischen Prüfung selten stand.",
            "In Wahrheit teilen [manche|manche] Gruppen bestimmte Ansichten, während [andere|andere] diametral entgegengesetzte Haltungen vertreten.",
            "Nur [wenige|wenige] Experten wagten es, die Risiken frühzeitig und [mehrfach|mehrfach] öffentlich anzusprechen.",
          ],
          [
            "Unternehmen sehen sich heute einer [dreifach|dreifachen] Herausforderung gegenüber: Digitalisierung, Fachkräftemangel und Klimawandel.",
            "Wer in diesen Zeiten die Produktivität [doppelt|doppelt] so schnell steigern will, muss innovative Wege beschreiten.",
            "Dabei zeigt sich oft, dass [einfach|einfache] Lösungen zwar verlockend wirken, aber selten nachhaltig greifen.",
            "[beide|Beide] Seiten eines Kompromisses müssen Kompromissbereitschaft signalisieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Quantoren, Indefinitheit und epistemische Exaktheit",
        intro:
          "Linguistische und philosophische Betrachtung von Allquantoren und unbestimmten Zahlwörtern (B2).",
        paragraphs: [
          [
            "In der formalen Logik und der Sprachphilosophie markieren Quantoren fundamentale Kategorien der Erkenntnis.",
            "Der Übergang vom Allquantor, der ausnahmslos [alle|alle] Entitäten umfasst, zum Existenzquantor bedarf präziser Differenzierung.",
            "Unbestimmte Zahlausdrücke wie [einige|einige], [manche|manche] oder [mehrere|mehrere] modifizieren den Gültigkeitsanspruch empirischer Hypothesen.",
            "Wissenschaftliche Redlichkeit verlangt, Phänomene weder unzulässig zu verallgemeinern noch durch vage Mengenangaben zu verschleiern.",
          ],
          [
            "Multiplikative Determinanten wie [doppelt|doppelt], [dreifach|dreifach] oder potenziell [mehrfach|mehrfach] gestaffelte Parameter modellieren exponentielles Wachstum.",
            "In kybernetischen Regelkreisen führt schon eine scheinbar [einfach|einfache] Ursache häufig zu multiplen Resonanzeffekten.",
            "Die präzise sprachliche Beherrschung dieser quantitativen Abstufungen schärft das analytische Urteilsvermögen in akademischen Diskursen beträchtlich.",
          ],
        ],
      },
    },
  },

  tag_und_nacht: {
    id: "tag_und_nacht",
    title: "Tag und Nacht",
    description: "Tageszeiten, Dämmerung, astronomischer Rhythmus und Biorhythmus.",
    details: "Tagesabschnitte, Sonnenzyklen, Dunkelheit und Biorhythmus (A1–B2)",
    arabicDescription:
      "الليل والنهار (Tag und Nacht) ومصطلحات الدورة اليومية: شروق وغروب الشمس (Sonnenaufgang / Sonnenuntergang)، وغسق الصباح والمساء (Morgendämmerung / Abenddämmerung)، ومنتصف الليل (Mitternacht)، وظروف الزمان مثل tagsüber و nachts و morgens و abends، ومفهوم الإيقاع الحيوي (Biorhythmus).",
    words: [
      {
        german: "der Sonnenaufgang, ⸚e",
        arabic: "شروق الشمس",
        english: "sunrise",
        example: "Der malerische Sonnenaufgang über den Bergen färbte den Himmel in zartes Rosa.",
      },
      {
        german: "der Sonnenuntergang, ⸚e",
        arabic: "غروب الشمس",
        english: "sunset",
        example: "Viele Spaziergänger bewunderten den friedlichen Sonnenuntergang am Meeresufer.",
      },
      {
        german: "die Morgendämmerung",
        arabic: "غسق الصباح / الفجر",
        english: "dawn, morning twilight",
        example: "In der kühlen Morgendämmerung stimmen die Amseln ihren melodischen Gesang an.",
      },
      {
        german: "die Abenddämmerung",
        arabic: "الغسق / شفق المساء",
        english: "dusk, evening twilight",
        example:
          "Sobald die Abenddämmerung einsetzt, schalten sich die Straßenlaternen automatisch ein.",
      },
      {
        german: "die Mitternacht",
        arabic: "منتصف الليل",
        english: "midnight",
        example: "Um Schlag Mitternacht läuteten feierlich die schweren Glocken des alten Doms.",
      },
      {
        german: "das Tageslicht",
        arabic: "ضوء النهار",
        english: "daylight",
        example:
          "Helles Tageslicht durchflutet das moderne Großraumbüro dank riesiger Glasfenster.",
      },
      {
        german: "die Dunkelheit",
        arabic: "الظلام / العتمة",
        english: "darkness",
        example:
          "Die tiefe Dunkelheit im Wald wich erst mit den ersten morgendlichen Sonnenstrahlen.",
      },
      {
        german: "tagsüber",
        arabic: "خلال النهار / نهاراً",
        english: "during the day",
        example: "Tagsüber arbeitet er fleißig in der Kanzlei, während er abends Spanisch lernt.",
      },
      {
        german: "nachts",
        arabic: "ليلاً / في الليل",
        english: "at night",
        example:
          "Nachts sinken die Temperaturen im Hochgebirge empfindlich unter den Gefrierpunkt.",
      },
      {
        german: "morgens",
        arabic: "صباحاً / كل صباح",
        english: "in the morning",
        example: "Morgens genießt sie stets eine heiße Tasse Grüntee vor dem Verlassen des Hauses.",
      },
      {
        german: "mittags",
        arabic: "ظهراً / في وقت الظهيرة",
        english: "at noon, at midday",
        example:
          "Mittags treffen sich die Kollegen in der Betriebskantine zu einer warmen Mahlzeit.",
      },
      {
        german: "der Biorhythmus, -men",
        arabic: "الإيقاع الحيوي",
        english: "biorhythm, circadian rhythm",
        example:
          "Häufige Schichtarbeit bringt den natürlichen Biorhythmus des menschlichen Körpers durcheinander.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Ein Tag vom Morgen bis zur Nacht",
      intro: "Tageszeiten, Sonne und Dunkelheit in einfachen Hauptsätzen (A1).",
      paragraphs: [
        [
          "[morgens|Morgens] stehe ich um sechs Uhr auf und öffne das Fenster.",
          "Ich sehe [der Sonnenaufgang, ⸚e|den Sonnenaufgang] am Himmel: Die Sonne scheint warm und gelb.",
          "Es gibt wieder helles [das Tageslicht|Tageslicht] im Zimmer.",
          "[tagsüber|Tagsüber] gehe ich zur Sprachschule und lerne fleißig Deutsch.",
        ],
        [
          "[mittags|Mittags] esse ich eine Suppe und treffe Freunde im Park.",
          "Am Abend geht die Sonne unter und wir beobachten [der Sonnenuntergang, ⸚e|den Sonnenuntergang].",
          "Dann kommt [die Dunkelheit|die Dunkelheit] und die Sterne leuchten am Himmel.",
          "Um [die Mitternacht|Mitternacht] gehe ich ins Bett und schlafe tief und fest [nachts|nachts].",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Tag vom Morgen bis zur Nacht",
        intro: "Tageszeiten, Sonne und Dunkelheit in einfachen Hauptsätzen (A1).",
        paragraphs: [
          [
            "[morgens|Morgens] stehe ich um sechs Uhr auf und öffne das Fenster.",
            "Ich sehe [der Sonnenaufgang, ⸚e|den Sonnenaufgang] am Himmel: Die Sonne scheint warm und gelb.",
            "Es gibt wieder helles [das Tageslicht|Tageslicht] im Zimmer.",
            "[tagsüber|Tagsüber] gehe ich zur Sprachschule und lerne fleißig Deutsch.",
          ],
          [
            "[mittags|Mittags] esse ich eine Suppe und treffe Freunde im Park.",
            "Am Abend geht die Sonne unter und wir beobachten [der Sonnenuntergang, ⸚e|den Sonnenuntergang].",
            "Dann kommt [die Dunkelheit|die Dunkelheit] und die Sterne leuchten am Himmel.",
            "Um [die Mitternacht|Mitternacht] gehe ich ins Bett und schlafe tief und fest [nachts|nachts].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Tagesrhythmus und Lichtwechsel im Alltag",
        intro: "Dämmerung, Tagesaktivitäten und gesunder Schlaf (A2).",
        paragraphs: [
          [
            "Unser Körper reagiert empfindlich auf den Wechsel von Licht und Schatten.",
            "Bereits in der frühen [die Morgendämmerung|Morgendämmerung] erwacht die Natur zu neuem Leben.",
            "Wer [morgens|morgens] früh aufsteht, kann den beeindruckenden [der Sonnenaufgang, ⸚e|Sonnenaufgang] genießen.",
            "[tagsüber|Tagsüber] verbringen viele Menschen die meiste Zeit in geschlossenen Räumen.",
          ],
          [
            "Wenn in der [die Abenddämmerung|Abenddämmerung] der Tag langsam ausklingt, schaltet der Körper auf Entspannung um.",
            "Wir bewundern den farbenprächtigen [der Sonnenuntergang, ⸚e|Sonnenuntergang] über den Dächern der Stadt.",
            "Man sollte vermeiden, bis kurz vor [die Mitternacht|Mitternacht] auf Bildschirme zu starren.",
            "Denn völlige [die Dunkelheit|Dunkelheit] im Schlafzimmer garantiert einen erholsamen Schlaf [nachts|nachts].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Der Einfluss des Lichts auf Wohlbefinden und Produktivität",
        intro: "Wie der natürliche Wechsel von Tag und Nacht unsere Gesundheit steuert (B1).",
        paragraphs: [
          [
            "Die Evolution hat den Menschen an einen verlässlichen 24-Stunden-Zyklus angepasst.",
            "Ausreichend natürliches [das Tageslicht|Tageslicht] [tagsüber|tagsüber] kurbelt die Serotoninproduktion an und steigert die Wachheit.",
            "Wer in den Wintermonaten den ganzen Tag bei künstlichem Licht verbringt, riskiert depressive Verstimmungen.",
            "Deshalb empfehlen Mediziner, zumindest [mittags|mittags] einen ausgedehnten Spaziergang an der frischen Luft einzulegen.",
          ],
          [
            "Sobald in der [die Abenddämmerung|Abenddämmerung] das Umgebungslicht schwindet, beginnt die Zirbeldrüse mit der Melatoninausschüttung.",
            "Wer jedoch [nachts|nachts] lange wach bleibt, stört seinen sensiblen [der Biorhythmus, -men|Biorhythmus] nachhaltig.",
            "Ein unregelmäßiger Schlaf-Wach-Rhythmus führt auf Dauer zu chronischer Erschöpfung und Konzentrationsschwächen.",
            "Die Rückbesinnung auf den Rhythmus von [der Sonnenaufgang, ⸚e|Sonnenaufgang] und [die Dunkelheit|Dunkelheit] ist daher die beste Gesundheitsvorsorge.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Zirkadiane Biologie, Lichtverschmutzung und Chronomedizin",
        intro:
          "Wissenschaftliche Dekonstruktion des Tag-Nacht-Rhythmus in postindustriellen Gesellschaften (B2).",
        paragraphs: [
          [
            "Die Chronobiologie erforscht die molekularen Mechanismen, die unseren endogenen Schrittmacher steuern.",
            "Über spezifische Photorezeptoren in der Netzhaut synchronisiert [das Tageslicht|Tageslicht] die Master-Uhr im suprachiasmatischen Nukleus.",
            "In der modernen 24/7-Dienstleistungsgesellschaft führt die Omnipräsenz künstlicher Lichtquellen jedoch zur sogenannten Lichtverschmutzung.",
            "Die Grenze zwischen [die Morgendämmerung|Morgendämmerung], Arbeitsphase [tagsüber|tagsüber] und Ruhephase [nachts|nachts] verwischt zunehmend.",
          ],
          [
            "Schichtarbeiter, die gegen ihren genetisch determinierten [der Biorhythmus, -men|Biorhythmus] leben, tragen signifikant höhere kardiovaskuläre Risiken.",
            "Die künstliche Erhellung der Umwelt eliminiert die für das Immunsystem regenerative [die Dunkelheit|Dunkelheit].",
            "Chronomediziner plädieren daher für eine Neujustierung städtischer Beleuchtungskonzepte und flexiblere Arbeitszeiten, die den natürlichen Sonnenzyklen von [der Sonnenaufgang, ⸚e|Sonnenaufgang] bis [der Sonnenuntergang, ⸚e|Sonnenuntergang] Rechnung tragen.",
          ],
        ],
      },
    },
  },
};

async function main() {
  const filePath = "src/data/vocabulary/zahlen-und-masse.json";
  const jsonContent = await Bun.file(filePath).json();

  let modifiedCount = 0;
  for (const section of jsonContent.sections) {
    for (const topic of section.topics) {
      if (batch1Topics[topic.id]) {
        const patch = batch1Topics[topic.id];
        topic.description = patch.description;
        topic.details = patch.details;
        topic.arabicDescription = patch.arabicDescription;
        topic.words = patch.words;
        topic.story = patch.story;
        topic.stories = patch.stories;
        modifiedCount++;
        console.log(
          `Applied Batch 1 to topic: ${topic.id} (${topic.title}) -> words: ${topic.words.length}`,
        );
      }
    }
  }

  // Schema validation
  const validationResult = vocabularyCollectionSchema.safeParse(jsonContent);
  if (!validationResult.success) {
    console.error(
      "Zod Validation Failed:",
      JSON.stringify(validationResult.error.format(), null, 2),
    );
    process.exit(1);
  }

  await Bun.write(filePath, JSON.stringify(jsonContent, null, 2) + "\n");
  console.log(
    `Batch 1 successfully saved to zahlen-und-masse.json! Modified ${modifiedCount} topics.`,
  );
}

main().catch(console.error);
