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

const batch2Topics: Record<string, TopicData> = {
  der_kalender: {
    id: "der_kalender",
    title: "Der Kalender",
    description: "Kalender, Datum, Fristen, Wochentage, Feiertage und Zeitabschnitte.",
    details: "Kalenderstrukturen, Termine, Fristen und Epochen (A1–B2)",
    arabicDescription:
      "التقويم (Der Kalender) وتحديد المواعيد والتواريخ في ألمانيا: أيام الأسبوع (Wochentage)، وأيام العمل (Werktage)، والعطلات الرسمية (Feiertage)، والشهور والسنوات الكبيسة (Schaltjahr)، ومفهوم المهل القانونية (Fristen) وكيفية تنظيم المواعيد الشخصية والمهنية بدقة.",
    words: [
      {
        german: "der Kalender, -",
        arabic: "التقويم / الرزنامة",
        english: "calendar",
        example:
          "Ich trage alle wichtigen Geburtstage und Ferientermine sorgfältig in meinen Kalender ein.",
      },
      {
        german: "das Datum, Daten",
        arabic: "التاريخ (اليوم والشهر والسنة)",
        english: "date",
        example: "Welches Datum haben wir heute? Heute ist der siebte Oktober.",
      },
      {
        german: "der Wochentag, -e",
        arabic: "يوم من أيام الأسبوع",
        english: "day of the week",
        example: "Montag ist für viele Berufstätige der hektischste Wochentag der ganzen Woche.",
      },
      {
        german: "der Werktag, -e",
        arabic: "يوم عمل (رسمي)",
        english: "working day, business day",
        example:
          "Behörden und Ämter sind montags bis freitags an jedem regulären Werktag geöffnet.",
      },
      {
        german: "das Wochenende, -n",
        arabic: "عطلة نهاية الأسبوع",
        english: "weekend",
        example: "Am erholsamen Wochenende unternehmen wir lange Spaziergänge im Grünen.",
      },
      {
        german: "der Feiertag, -e",
        arabic: "يوم عطلة رسمية / عيد",
        english: "public holiday",
        example: "Der dritte Oktober ist als Tag der Deutschen Einheit ein bundesweiter Feiertag.",
      },
      {
        german: "das Quartal, -e",
        arabic: "الربع السنوي (فصل مالي)",
        english: "quarter (of a year)",
        example: "Im vierten Quartal verzeichnen die meisten Einzelhändler die stärksten Umsätze.",
      },
      {
        german: "das Jahrzehnt, -e",
        arabic: "العقد (عشر سنوات)",
        english: "decade",
        example:
          "In den letzten beiden Jahrzehnten hat das Internet die gesamte Gesellschaft geprägt.",
      },
      {
        german: "das Jahrhundert, -e",
        arabic: "القرن (مائة عام)",
        english: "century",
        example:
          "Wir leben heute im einundzwanzigsten Jahrhundert, einem Zeitalter rasanter Technologie.",
      },
      {
        german: "das Schaltjahr, -e",
        arabic: "السنة الكبيسة",
        english: "leap year",
        example: "In einem Schaltjahr zählt der Monat Februar ausnahmsweise neunundzwanzig Tage.",
      },
      {
        german: "die Frist, -en",
        arabic: "المهلة / الأجل القانوني",
        english: "deadline, time limit",
        example: "Bitte reichen Sie Ihren Antrag unbedingt vor Ablauf der vorgegebenen Frist ein.",
      },
      {
        german: "der Termin, -e",
        arabic: "الموعد المحدد",
        english: "appointment",
        example: "Morgen Vormittag habe ich einen festen Termin zur Routineuntersuchung beim Arzt.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Mein Kalender und meine Woche",
      intro: "Einfache Sätze über Tage, Kalender und Termine (A1).",
      paragraphs: [
        [
          "In meiner Küche hängt ein bunter [der Kalender, -|Kalender] an der Wand.",
          "Jeden Morgen schaue ich darauf und lese [das Datum, Daten|das Datum].",
          "Heute ist Mittwoch, ein ganz normaler [der Wochentag, -e|Wochentag].",
          "Von Montag bis Freitag arbeite ich im Büro.",
        ],
        [
          "Am [das Wochenende, -n|Wochenende] habe ich frei und treffe meine Freunde.",
          "Nächste Woche habe ich am Dienstag [der Termin, -e|einen Termin] beim Arzt.",
          "Ich freue mich schon auf den nächsten [der Feiertag, -e|Feiertag], denn da muss niemand arbeiten.",
          "Ich notiere alle Pläne mit einem roten Stift.",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Kalender und meine Woche",
        intro: "Einfache Sätze über Tage, Kalender und Termine (A1).",
        paragraphs: [
          [
            "In meiner Küche hängt ein bunter [der Kalender, -|Kalender] an der Wand.",
            "Jeden Morgen schaue ich darauf und lese [das Datum, Daten|das Datum].",
            "Heute ist Mittwoch, ein ganz normaler [der Wochentag, -e|Wochentag].",
            "Von Montag bis Freitag arbeite ich im Büro.",
          ],
          [
            "Am [das Wochenende, -n|Wochenende] habe ich frei und treffe meine Freunde.",
            "Nächste Woche habe ich am Dienstag [der Termin, -e|einen Termin] beim Arzt.",
            "Ich freue mich schon auf den nächsten [der Feiertag, -e|Feiertag], denn da muss niemand arbeiten.",
            "Ich notiere alle Pläne mit einem roten Stift.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Terminplanung, Fristen und Werktage im Berufsalltag",
        intro: "Fristen einhalten, Feiertage planen und Terminkalender führen (A2).",
        paragraphs: [
          [
            "Ein strukturierter Arbeitsalltag erfordert verlässliche Kalenderführung.",
            "Wichtige Briefe und Rechnungen müssen oft innerhalb von vierzehn Tagen beantwortet werden, sonst verpasst man [die Frist, -en|die Frist].",
            "In Deutschland unterscheidet das Gesetz genau zwischen Sonn- und Feiertagen sowie einem regulären [der Werktag, -e|Werktag].",
            "Vor jedem offiziellen [der Feiertag, -e|Feiertag] kaufen viele Menschen Vorräte ein, da die Geschäfte geschlossen bleiben.",
          ],
          [
            "Wer beruflich viel unterwegs ist, synchronisiert seinen digitalen [der Kalender, -|Kalender] mit dem Smartphone.",
            "Für jedes Quartalsgespräch wird rechtzeitig [der Termin, -e|ein Termin] vereinbart.",
            "Am Freitagabend verabschieden sich die Kollegen freundlich ins wohlverdiente [das Wochenende, -n|Wochenende].",
            "So behält man auch bei hoher Arbeitsbelastung stets die Übersicht über alle Verpflichtungen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Die Kulturgeschichte des Kalenders und globale Zeitrechnung",
        intro:
          "Wie Kalenderreformen, Schaltjahre und Quartale unser gesellschaftliches Leben takten (B1).",
        paragraphs: [
          [
            "Der heute weltweit gebräuchliche gregorianische [der Kalender, -|Kalender] ist das Ergebnis jahrhundertelanger astronomischer Beobachtungen.",
            "Da ein Sonnenjahr knapp 365,24 Tage dauert, benötigt unser System alle vier Jahre [das Schaltjahr, -e|ein Schaltjahr].",
            "Ohne diesen zusätzlichen Februartag würde sich [das Datum, Daten|das Datum] der Jahreszeiten über Jahrhunderte hinweg drastisch verschieben.",
            "In der modernen Wirtschaftswelt wird das Jahr zudem in vier gleichmäßige Abschnitte unterteilt; jedes [das Quartal, -e|Quartal] schließt mit einer Bilanz ab.",
          ],
          [
            "Blickt man auf das vergangene [das Jahrzehnt, -e|Jahrzehnt] zurück, erkennt man fundamentale gesellschaftliche Transformationen.",
            "Historiker betrachten oft ein ganzes [das Jahrhundert, -e|Jahrhundert], um tiefgreifende Epochenwechsel zu verstehen.",
            "Im privaten Bereich hingegen sind es oft die kleinen Dinge – ein gelungener [der Termin, -e|Termin] oder ein entspanntes [das Wochenende, -n|Wochenende] –, die unser Lebensgefühl prägen.",
            "Wer die Gesetze der Zeit achtet, lernt Vergangenheit und Zukunft harmonisch zu verbinden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Temporale Ordnungsstrukturen, Zeitregime und Epochenbewusstsein",
        intro:
          "Soziologische Dekonstruktion von Kalendersystemen, Fristenregimen und historischer Kontinuität (B2).",
        paragraphs: [
          [
            "Kalender sind keineswegs neutrale astronomische Register, sondern mächtige soziopolitische Steuerungsinstrumente.",
            "Die Institutionalisierung von Feiertagen wie [der Feiertag, -e|einem Feiertag] und die normative Trennung zwischen profanem [der Werktag, -e|Werktag] und sakraler Rast spiegeln kulturelle Werthierarchien wider.",
            "Die strikte Festlegung juristischer [die Frist, -en|Fristen] garantiert Rechtssicherheit in komplexen bürokratischen Staatsapparaten.",
            "Verwaltungsakte knüpfen elementare Rechtsfolgen an [das Datum, Daten|ein bestimmtes Datum], dessen Fristversäumnis irreparable Konsequenzen nach sich zieht.",
          ],
          [
            "Im historischen Längsschnitt erweist sich das einundzwanzigste [das Jahrhundert, -e|Jahrhundert] als Ära permanenter Beschleunigungskrisen.",
            "Während frühere Generationen ein [das Jahrzehnt, -e|Jahrzehnt] als überschaubare Wandlungseinheit erlebten, komprimieren digitale Innovationszyklen Entwicklungsprozesse auf ein einziges [das Quartal, -e|Quartal].",
            "Die scheinbare mathematische Perfektion, die selbst das astronomische [das Schaltjahr, -e|Schaltjahr] absorbiert, kontrastiert scharf mit der menschlichen Sehnsucht nach zeitlicher Entschleunigung.",
          ],
        ],
      },
    },
  },

  masse: {
    id: "masse",
    title: "Maße",
    description: "Längen, Breiten, Höhen, Tiefen, Entfernungen und metrische Einheiten.",
    details: "Maßangaben, Raumdimensionen, Distanzen und das metrische System (A1–B2)",
    arabicDescription:
      "المقاييس والأبعاد (Maße) في اللغة الألمانية: الأبعاد المكانية الثلاثية الطول (die Länge) والعرض (die Breite) والارتفاع (die Höhe) والعمق (die Tiefe)، ووحدات القياس المترية مثل المتر والسنتيمتر والمليمتر والكيلومتر، والمسافة الفاصلة (der Abstand) والبعد المكاني (die Entfernung).",
    words: [
      {
        german: "das Maß, -e",
        arabic: "المقياس / البُعد / المقاس",
        english: "measure, dimension",
        example: "Der Schreiner nimmt vor dem Zuschnitt der Holzbretter ganz genau Maß.",
      },
      {
        german: "die Länge, -n",
        arabic: "الطول",
        english: "length",
        example: "Die Länge des Schwimmbeckens beträgt olympische fünfzig Meter.",
      },
      {
        german: "die Breite, -n",
        arabic: "العرض",
        english: "width",
        example: "Die Breite der Eingangstür ermöglicht auch Rollstuhlfahrern bequemen Zugang.",
      },
      {
        german: "die Höhe, -n",
        arabic: "الارتفاع",
        english: "height",
        example: "Aufgrund seiner enormen Höhe ist der Fernsehturm von weitem sichtbar.",
      },
      {
        german: "die Tiefe, -n",
        arabic: "العمق",
        english: "depth",
        example: "Die Tiefe des Bergsees beträgt an der tiefsten Stelle über zweihundert Meter.",
      },
      {
        german: "der Abstand, ⸚e",
        arabic: "المسافة الفاصلة / البُعد",
        english: "distance, gap",
        example: "Halten Sie beim Autofahren auf der Autobahn immer ausreichenden Abstand!",
      },
      {
        german: "die Entfernung, -en",
        arabic: "المسافة / البُعد الجغرافي",
        english: "distance, remoteness",
        example: "Die Entfernung zwischen Berlin und Hamburg beträgt knapp dreihundert Kilometer.",
      },
      {
        german: "der Meter, -",
        arabic: "المتر",
        english: "meter",
        example: "Ein Meter ist die fundamentale Basiseinheit für Längenmessungen im Alltag.",
      },
      {
        german: "der Zentimeter, -",
        arabic: "السنتيمتر",
        english: "centimeter",
        example: "Ein Schullineal ist gewöhnlich dreißig Zentimeter lang und sehr praktisch.",
      },
      {
        german: "der Millimeter, -",
        arabic: "المليمتر",
        english: "millimeter",
        example:
          "Die Feinmechanik verlangt eine Präzision von wenigen Bruchteilen eines Millimeters.",
      },
      {
        german: "der Kilometer, -",
        arabic: "الكيلومتر",
        english: "kilometer",
        example:
          "Jeden Samstag joggt er ausdauernd eine Strecke von zehn Kilometern durch den Wald.",
      },
      {
        german: "messen",
        arabic: "قاس / يكيل",
        english: "to measure",
        example: "Mit einem flexiblen Maßband kann man den Umfang eines Baumes leicht messen.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Möbel kaufen und das Zimmer messen",
      intro: "Längen, Breiten und Meter beim Einrichten einer Wohnung (A1).",
      paragraphs: [
        [
          "Ich ziehe in eine neue Wohnung und brauche einen Schreibtisch.",
          "Zuerst nehme ich ein langes Maßband und beginne zu [messen|messen].",
          "[die Länge, -n|Die Länge] der Wand beträgt genau drei [der Meter, -|Meter].",
          "[die Breite, -n|Die Breite] für den Tisch ist ein Meter und zwanzig [der Zentimeter, -|Zentimeter].",
        ],
        [
          "Auch [die Höhe, -n|die Höhe] des Stuhls muss gut zum Tisch passen.",
          "Im Möbelgeschäft prüfe ich das genaue [das Maß, -e|Maß] auf dem Schild.",
          "[die Entfernung, -en|Die Entfernung] vom Geschäft nach Hause ist nicht weit: nur zwei [der Kilometer, -|Kilometer].",
          "Der neue Schreibtisch passt perfekt in mein schönes Zimmer!",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Möbel kaufen und das Zimmer messen",
        intro: "Längen, Breiten und Meter beim Einrichten einer Wohnung (A1).",
        paragraphs: [
          [
            "Ich ziehe in eine neue Wohnung und brauche einen Schreibtisch.",
            "Zuerst nehme ich ein langes Maßband und beginne zu [messen|messen].",
            "[die Länge, -n|Die Länge] der Wand beträgt genau drei [der Meter, -|Meter].",
            "[die Breite, -n|Die Breite] für den Tisch ist ein Meter und zwanzig [der Zentimeter, -|Zentimeter].",
          ],
          [
            "Auch [die Höhe, -n|die Höhe] des Stuhls muss gut zum Tisch passen.",
            "Im Möbelgeschäft prüfe ich das genaue [das Maß, -e|Maß] auf dem Schild.",
            "[die Entfernung, -en|Die Entfernung] vom Geschäft nach Hause ist nicht weit: nur zwei [der Kilometer, -|Kilometer].",
            "Der neue Schreibtisch passt perfekt in mein schönes Zimmer!",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Renovieren, Handwerken und Distanzen im Alltag",
        intro: "Zimmermaße ermitteln, Sicherheitsabstände einhalten und Entfernungen planen (A2).",
        paragraphs: [
          [
            "Beim Renovieren eines Hauses kommt es auf exaktes Arbeiten an.",
            "Der Handwerker muss [die Länge, -n|Länge], [die Breite, -n|Breite] und [die Höhe, -n|Höhe] jedes Raumes sorgfältig [messen|messen].",
            "Selbst ein kleiner Fehler von wenigen [der Millimeter, -|Millimetern] kann dazu führen, dass Einbauschränke klemmen.",
            "Auch [die Tiefe, -n|die Tiefe] der Regalböden muss genau auf die Aktenordner abgestimmt sein.",
          ],
          [
            "Unterwegs im Straßenverkehr gelten verbindliche Sicherheitsregeln.",
            "Auf der Landstraße muss man stets den nötigen [der Abstand, ⸚e|Abstand] zum vorausfahrenden Fahrzeug wahren.",
            "[die Entfernung, -en|Die Entfernung] zum nächsten Rastplatz wird auf den Schildern in [der Kilometer, -|Kilometern] angezeigt.",
            "Gute Vorbereitung und verlässliche Maßangaben erleichtern jedes Projekt spürbar.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Das metrische System und industrielle Maßgenauigkeit",
        intro:
          "Wie weltweite Normen und das metrische Einheitensystem den Fortschritt sichern (B1).",
        paragraphs: [
          [
            "Die Einführung des metrischen Einheitensystems im späten achtzehnten Jahrhundert war ein meilenweiter Meilenstein für Wissenschaft und Handel.",
            "Zuvor variierte [das Maß, -e|das Maß] einer Elle oder eines Fußes von Stadt zu Stadt beträchtlich.",
            "Die Definition des [der Meter, -|Meters] als universeller Längeneinheit schuf weltweite Vergleichbarkeit.",
            "Heute sind [der Zentimeter, -|Zentimeter] und [der Millimeter, -|Millimeter] unverzichtbare Basiseinheiten im Ingenieurwesen.",
          ],
          [
            "Im modernen Maschinenbau und in der Luftfahrttechnik entscheiden minimale Toleranzen über die Sicherheit.",
            "Ingenieure [messen|messen] Werkstücke mit hochsensiblen Laserscannern, um jeden unerwünschten [der Abstand, ⸚e|Abstand] auszuschließen.",
            "Gleichzeitig vermessen Navigationssatelliten [die Entfernung, -en|die Entfernung] über Kontinente hinweg bis auf wenige Dezimeter genau.",
            "Präzise Raumdimensionen bilden somit das stabile Fundament unserer hochtechnisierten Welt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Metrologie, geometrische Abstraktion und physikalische Raumzeit",
        intro:
          "Erkenntnistheoretische und physikalische Dimensionen von Raum, Skalierung und Messgenauigkeit (B2).",
        paragraphs: [
          [
            "Die moderne Metrologie begreift [das Maß, -e|das Maß] nicht länger als bloßes Abbild materieller Körper, sondern als fundamentalen Naturkonstantenbezug.",
            "Seit der Neudefinition des Internationalen Einheitensystems leitet sich [der Meter, -|der Meter] direkt von der Lichtgeschwindigkeit im Vakuum ab.",
            "Geometrische Parameter wie [die Länge, -n|Länge], [die Breite, -n|Breite] und [die Höhe, -n|Höhe] bilden in der euklidischen Geometrie einen dreidimensionalen Vektorraum.",
            "In der allgemeinen Relativitätstheorie hingegen verschmelzen räumliche [die Entfernung, -en|Entfernung] und zeitliche Intervalle zur vierdimensionalen Raumzeit.",
          ],
          [
            "In der Nanotechnologie operieren Forscher jenseits des klassischen [der Millimeter, -|Millimeters] im Bereich atomarer Dimensionen.",
            "Dort relativiert die Quantenmechanik das Konzept von exaktem [messen|Messen] durch die heisenbergsche Unschärferelation.",
            "Dennoch bleibt die Fähigkeit, räumliche Relationen und [der Abstand, ⸚e|Abstände] differenziert zu sprachlichen Repräsentationen zu formen, das Kennzeichen wissenschaftlicher Exaktheit.",
          ],
        ],
      },
    },
  },

  das_gewicht: {
    id: "das_gewicht",
    title: "Das Gewicht",
    description: "Gramm, Kilogramm, Tonne, Waage, Wiegen und physikalische Masse.",
    details: "Gewichtseinheiten, Messungen, Waagen und Massebegriffe (A1–B2)",
    arabicDescription:
      "الوزن والكتلة (Das Gewicht) في الألمانية: وحدات الوزن الأساسية مثل الجرام (das Gramm) والكيلوجرام (das Kilogramm) والرطل التقليدي (das Pfund = 500g) والطن (die Tonne)، ومفاهيم الميزان (die Waage) والوزن الزائد (das Übergewicht) والوزن الناقص (das Untergewicht)، وفعل الوزن (wiegen).",
    words: [
      {
        german: "das Gewicht, -e",
        arabic: "الوزن",
        english: "weight",
        example:
          "Das zulässige Gesamtgewicht des Fahrzeugs darf bei voller Beladung nicht überschritten werden.",
      },
      {
        german: "das Gramm, -e",
        arabic: "الجرام",
        english: "gram",
        example: "Für dieses feine Backrezept benötigt man genau zweihundert Gramm Puderzucker.",
      },
      {
        german: "das Kilogramm, -e",
        arabic: "الكيلوجرام",
        english: "kilogram",
        example:
          "Ein Kilogramm frisches Bio-Obst liefert reichlich Vitamine für die ganze Familie.",
      },
      {
        german: "das Pfund, -e",
        arabic: "الرطل (نصف كيلو / 500 جرام)",
        english: "pound (500g in Germany)",
        example: "Auf dem Wochenmarkt bestellte sie traditionell ein Pfund süße Kirschen.",
      },
      {
        german: "die Tonne, -n",
        arabic: "الطن (ألف كيلوجرام)",
        english: "metric ton",
        example: "Der schwere Frachter transportiert über fünftausend Tonnen Weizen über das Meer.",
      },
      {
        german: "wiegen",
        arabic: "وزن / يزن",
        english: "to weigh",
        example: "Vor dem langen Flug muss man den Koffer am Schalter gewissenhaft wiegen.",
      },
      {
        german: "die Waage, -n",
        arabic: "الميزان",
        english: "scale",
        example: "Die moderne Digitalwaage in der Küche zeigt selbst minimale Mengen präzise an.",
      },
      {
        german: "schwer",
        arabic: "ثقيل (وزناً)",
        english: "heavy",
        example: "Der schwere Umzugskarton voller Fachbücher ließ sich nur zu zweit anheben.",
      },
      {
        german: "leicht",
        arabic: "خفيف (وزناً)",
        english: "light",
        example: "Die neue Daunenjacke ist erstaunlich leicht und wärmt dennoch hervorragend.",
      },
      {
        german: "das Übergewicht",
        arabic: "الوزن الزائد",
        english: "overweight, excess weight",
        example:
          "Wegen des Übergewichts des Gepäcks musste der Reisende eine Zusatzgebühr entrichten.",
      },
      {
        german: "das Untergewicht",
        arabic: "نقص الوزن / النحافة الزائدة",
        english: "underweight",
        example: "Ausgeprägtes Untergewicht kann die Abwehrkräfte des Immunsystems schwächen.",
      },
      {
        german: "die Masse, -n",
        arabic: "الكتلة (الفيزيائية)",
        english: "mass",
        example:
          "In der klassischen Physik beschreibt die Masse den Widerstand gegen Beschleunigung.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Kochen mit der Küchenwaage",
      intro: "Gramm, Kilo und Wiegen beim Kochen und Einkaufen (A1).",
      paragraphs: [
        [
          "Heute koche ich eine leckere Suppe für meine Familie.",
          "Ich stelle eine kleine [die Waage, -n|Waage] auf den Küchentisch.",
          "Ich möchte das Gemüse genau [wiegen|wiegen].",
          "Ich brauche fünfhundert [das Gramm, -e|Gramm] Karotten und ein [das Kilogramm, -e|Kilogramm] Kartoffeln.",
        ],
        [
          "Auf dem Markt kaufe ich auch [das Pfund, -e|ein Pfund] Butter.",
          "Die Einkaufstasche ist nicht zu [schwer|schwer], sie ist angenehm [leicht|leicht].",
          "Ich prüfe [das Gewicht, -e|das Gewicht] aller Zutaten vor dem Kochen.",
          "Das Essen schmeckt allen wunderbar!",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Kochen mit der Küchenwaage",
        intro: "Gramm, Kilo und Wiegen beim Kochen und Einkaufen (A1).",
        paragraphs: [
          [
            "Heute koche ich eine leckere Suppe für meine Familie.",
            "Ich stelle eine kleine [die Waage, -n|Waage] auf den Küchentisch.",
            "Ich möchte das Gemüse genau [wiegen|wiegen].",
            "Ich brauche fünfhundert [das Gramm, -e|Gramm] Karotten und ein [das Kilogramm, -e|Kilogramm] Kartoffeln.",
          ],
          [
            "Auf dem Markt kaufe ich auch [das Pfund, -e|ein Pfund] Butter.",
            "Die Einkaufstasche ist nicht zu [schwer|schwer], sie ist angenehm [leicht|leicht].",
            "Ich prüfe [das Gewicht, -e|das Gewicht] aller Zutaten vor dem Kochen.",
            "Das Essen schmeckt allen wunderbar!",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Koffer packen, Flugreisen und gesunde Ernährung",
        intro: "Gepäckbeschränkungen am Flughafen, Übergewicht und Waagen (A2).",
        paragraphs: [
          [
            "Vor einer Urlaubsreise packen viele Menschen zu viele Kleidungsstücke ein.",
            "Am Check-in-Schalter des Flughafens muss man das Reisegepäck auf [die Waage, -n|die Waage] stellen und [wiegen|wiegen].",
            "Die meisten Fluggesellschaften erlauben maximal dreiundzwanzig [das Kilogramm, -e|Kilogramm] pro Person.",
            "Wer dieses Limit überschreitet, hat [das Übergewicht|Übergewicht] und muss teure Zusatzkosten bezahlen.",
          ],
          [
            "Auch für die eigene Gesundheit spielt [das Gewicht, -e|das Gewicht] eine wesentliche Rolle.",
            "Weder extremes [das Übergewicht|Übergewicht] noch bedenkliches [das Untergewicht|Untergewicht] sind ideal für das Wohlbefinden.",
            "Mit ausgewogener Ernährung und Sport fühlt man sich fit und vital.",
            "Eine gesunde Lebensweise hält Körper und Geist in perfekter Balance.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Logistik, Schwerlasttransporte und physikalische Masse",
        intro: "Wie Güterverkehr, Tonnagen und physikalische Masseverteilungen geregelt sind (B1).",
        paragraphs: [
          [
            "Im internationalen Warenverkehr spielen Gewichtsangaben eine fundamentale Rolle für Effizienz und Sicherheit.",
            "Schwere Güterzüge transportieren tausende [die Tonne, -n|Tonnen] Stahl, Kohle und Getreide quer durch Europa.",
            "Jeder LKW-Fahrer muss darauf achten, dass [das Gewicht, -e|das Gewicht] seiner Ladung die gesetzlichen Grenzwerte nicht übersteigt.",
            "Spezielle Achslastwaagen an Autobahnen kontrollieren verdächtig [schwer|schwere] Fahrzeuge vollautomatisch.",
          ],
          [
            "In der Physik wird begrifflich streng zwischen Gewichtskraft und [die Masse, -n|Masse] unterschieden.",
            "Während die Masse eines Körpers auf der Erde und auf dem Mond identisch bleibt, ändert sich das Gewicht mit der Gravitation.",
            "Im Laboralltag arbeiten Chemiker mit Bruchteilen von einem [das Gramm, -e|Gramm], um empfindliche Reaktionen auszulösen.",
            "Die Beherrschung dieser quantitativen Parameter garantiert Zuverlässigkeit in Forschung und Industrie.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gravitationstheorie, Trägheit und Äquivalenzprinzip",
        intro:
          "Physikalische und philosophische Durchdringung von Schwere, Masse und Gravitationskräften (B2).",
        paragraphs: [
          [
            "Das fundamentale Rätsel der klassischen Mechanik bestand in der exakten Übereinstimmung von träger und schwerer [die Masse, -n|Masse].",
            "Albert Einstein erhob diese empirische Beobachtung im Äquivalenzprinzip zum Grundpfeiler der Allgemeinen Relativitätstheorie.",
            "Dort ist [das Gewicht, -e|das Gewicht] kein statisches Merkmal eines Objekts mehr, sondern der Ausdruck der Raumzeitkrümmung.",
            "Große Massen, gemessen in Millionen von [die Tonne, -n|Tonnen], verformen das kosmische Gefüge derart, dass selbst Lichtstrahlen abgelenkt werden.",
          ],
          [
            "In der modernen Teilchenphysik verleiht das Higgs-Feld elementaren Partikeln ihre Trägheit.",
            "Ohne diesen Mechanismus besäßen Teilchen keine Ruhemasse und würden sich lichtschnell durch das Universum bewegen.",
            "Von der feinsten Präzisionsmessung auf einer atomaren [die Waage, -n|Waage] bis zur kosmologischen Massenbilanz spannt sich der Bogen der Gravitationsforschung.",
            "Das Vokabular der Massen- und Gewichtsbestimmung erweist sich somit als Schlüssel zur fundamentalen Naturerkenntnis.",
          ],
        ],
      },
    },
  },

  die_waehrung: {
    id: "die_waehrung",
    title: "Die Währung",
    description: "Euro, Cent, Bargeld, Münzen, Scheine, Wechselkurse und Bankkonten.",
    details: "Währungen, Zahlungsmittel, Banküberweisungen und Geldpolitik (A1–B2)",
    arabicDescription:
      "العملات النقدية والتعاملات المالية (Die Währung) في ألمانيا: اليورو (der Euro) والسنت (der Cent)، والنقود الورقية (Scheine) والمعدنية (Münzen)، ومفهوم الدفع نقداً (Bargeld) والفكّة (das Wechselgeld)، والتحويل البنكي (überweisen)، وأسعار الصرف (Wechselkurs)، ومفهوم التضخم (die Inflation).",
    words: [
      {
        german: "die Währung, -en",
        arabic: "العملة النقدية",
        english: "currency",
        example:
          "Der Euro ist die offizielle Währung in zwanzig Mitgliedsstaaten der Europäischen Union.",
      },
      {
        german: "der Euro, -s",
        arabic: "اليورو",
        english: "euro",
        example: "Ein traditionelles Brot beim Handwerksbäcker kostet durchschnittlich vier Euro.",
      },
      {
        german: "der Cent, -s",
        arabic: "السنت",
        english: "cent",
        example: "Hundert Cent ergeben den exakten Gegenwert von genau einem Euro.",
      },
      {
        german: "der Schein, -e",
        arabic: "الورقة النقدية",
        english: "banknote, bill",
        example:
          "Er nahm einen druckfrischen Fünfzig-Euro-Schein aus seinem ledernen Portemonnaie.",
      },
      {
        german: "die Münze, -n",
        arabic: "القطعة النقدية المعدنية",
        english: "coin",
        example: "Für den Einkaufswagen vor dem Supermarkt benötigt man meist eine Ein-Euro-Münze.",
      },
      {
        german: "das Bargeld",
        arabic: "النقود السائلة (كاش)",
        english: "cash",
        example:
          "In vielen kleineren Cafés und Bäckereien bevorzugen die Betreiber weiterhin Bargeld.",
      },
      {
        german: "das Wechselgeld",
        arabic: "الفكّة / باقي النقود",
        english: "change (money returned)",
        example: "Zählen Sie Ihr Wechselgeld bitte stets direkt an der Kasse sorgfältig nach!",
      },
      {
        german: "der Wechselkurs, -e",
        arabic: "سعر الصرف",
        english: "exchange rate",
        example:
          "Vor einer Fernreise lohnt es sich, den aktuellen Wechselkurs der Fremdwährung zu vergleichen.",
      },
      {
        german: "überweisen",
        arabic: "حوّل مالياً (عبر البنك)",
        english: "to transfer money",
        example:
          "Die monatliche Miete lässt sich am bequemsten per automatischem Dauerauftrag überweisen.",
      },
      {
        german: "das Konto, Konten",
        arabic: "الحساب المصرفي / البنكي",
        english: "bank account",
        example: "Für das Berufsleben in Deutschland benötigt man zwingend ein eigenes Girokonto.",
      },
      {
        german: "der Betrag, ⸚e",
        arabic: "المبلغ المالي",
        english: "amount, sum",
        example:
          "Der offene Betrag der Handwerkerrechnung muss innerhalb von zwei Wochen beglichen werden.",
      },
      {
        german: "die Inflation",
        arabic: "التضخم المالي",
        english: "inflation",
        example: "Eine anhaltend hohe Inflation schmälert spürbar die reale Kaufkraft der Bürger.",
      },
    ],
    story: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: "Bezahlen an der Kasse im Supermarkt",
      intro: "Euro, Cent und Bargeld im täglichen Leben (A1).",
      paragraphs: [
        [
          "Ich gehe in den Supermarkt und kaufe Milch, Brot und Obst ein.",
          "An der Kasse nennt die Kassiererin [der Betrag, ⸚e|den Betrag]: „Das macht zwölf [der Euro, -s|Euro] und fünfzig [der Cent, -s|Cent].“",
          "Ich öffne meine Geldbörse und bezahle mit [das Bargeld|Bargeld].",
          "Ich gebe ihr einen Zwanzig-Euro-[der Schein, -e|Schein].",
        ],
        [
          "Die Kassiererin gibt mir [das Wechselgeld|das Wechselgeld] zurück.",
          "Es sind ein paar [die Münze, -n|Münzen] und ein Fünf-Euro-Schein.",
          "Ich bedanke mich freundlich und packe meine Einkäufe in die Tasche.",
          "In Deutschland ist [der Euro, -s|der Euro] die gemeinsame [die Währung, -en|Währung].",
        ],
      ],
    },
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Bezahlen an der Kasse im Supermarkt",
        intro: "Euro, Cent und Bargeld im täglichen Leben (A1).",
        paragraphs: [
          [
            "Ich gehe in den Supermarkt und kaufe Milch, Brot und Obst ein.",
            "An der Kasse nennt die Kassiererin [der Betrag, ⸚e|den Betrag]: „Das macht zwölf [der Euro, -s|Euro] und fünfzig [der Cent, -s|Cent].“",
            "Ich öffne meine Geldbörse und bezahle mit [das Bargeld|Bargeld].",
            "Ich gebe ihr einen Zwanzig-Euro-[der Schein, -e|Schein].",
          ],
          [
            "Die Kassiererin gibt mir [das Wechselgeld|das Wechselgeld] zurück.",
            "Es sind ein paar [die Münze, -n|Münzen] und ein Fünf-Euro-Schein.",
            "Ich bedanke mich freundlich und packe meine Einkäufe in die Tasche.",
            "In Deutschland ist [der Euro, -s|der Euro] die gemeinsame [die Währung, -en|Währung].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Bankgeschäfte, Überweisungen und bargeldloses Zahlen",
        intro: "Girokonto eröffnen, Geld überweisen und Reisekasse planen (A2).",
        paragraphs: [
          [
            "Wer in Deutschland arbeitet oder studiert, benötigt ein deutsches [das Konto, Konten|Girokonto].",
            "Auf dieses Konto überweist der Arbeitgeber das monatliche Gehalt.",
            "Man kann Rechnungen bequem per Online-Banking [überweisen|überweisen], indem man die IBAN eingibt.",
            "Auch die Miete und Stromkosten werden pünktlich abgebucht.",
          ],
          [
            "Wenn man eine Reise in ein Land außerhalb der Eurozone plant, sollte man sich über [der Wechselkurs, -e|den Wechselkurs] informieren.",
            "Dort tauscht man [das Bargeld|Bargeld] oder zahlt mit der Kreditkarte.",
            "Man muss stets darauf achten, dass [der Betrag, ⸚e|der Betrag] auf der Quittung korrekt vermerkt ist.",
            "So vermeidet man böse Überraschungen beim Blick auf den Kontoauszug.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Währungsunion, Geldpolitik und der Wandel des Zahlungsverkehrs",
        intro: "Bargeldkultur, digitale Bezahlmethoden und Währungsstabilität (B1).",
        paragraphs: [
          [
            "Die Einführung des Euro als gemeinsame europäische [die Währung, -en|Währung] vor über zwei Jahrzehnten vereinfachte das Reisen und den Handel enorm.",
            "Früher musste man bei jedem Grenzübertritt Geld wechseln und [der Wechselkurs, -e|den Wechselkurs] berücksichtigen.",
            "Dennoch schätzen viele Menschen im deutschsprachigen Raum nach wie vor [das Bargeld|Bargeld] als Garant für Privatsphäre und finanzielle Selbstbestimmung.",
            "Viele Konsumenten spüren intuitiv mehr Kontrolle, wenn sie echte [der Schein, -e|Scheine] und klimpernde [die Münze, -n|Münzen] in den Händen halten.",
          ],
          [
            "Auf der anderen Seite beschleunigt die Digitalisierung bargeldlose Transaktionen im Sekundentakt.",
            "Gleichzeitig stellt [die Inflation|die Inflation] die Zentralbanken vor erhebliche Herausforderungen.",
            "Steigen die Verbraucherpreise, sinkt der reale Wert der Ersparnisse auf dem [das Konto, Konten|Konto].",
            "Eine stabile Währungspolitik ist daher der unverzichtbare Anker für Wohlstand und sozialen Frieden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Geldtheorie, makroökonomische Steuerung und monetäre Souveränität",
        intro:
          "Finanzwissenschaftliche Analyse von Zentralbankpolitik, Inflation und Kryptoökonomie (B2).",
        paragraphs: [
          [
            "Geld ist in modernen Volkswirtschaften weit mehr als ein reines Tauschmittel; es fungiert als gesellschaftliches Vertrauensgut und Recheneinheit.",
            "Die Europäische Zentralbank steuert durch Zinsentscheidungen die Geldmenge, um [die Inflation|die Inflation] in der Eurozone bei zwei Prozent zu stabilisieren.",
            "Ein schwankender [der Wechselkurs, -e|Wechselkurs] beeinflusst unmittelbar die Importpreise für Energie und Rohstoffe.",
            "Dabei markiert [der Betrag, ⸚e|der Betrag] an Liquidität im Bankensystem den Grad konjunktureller Dynamik.",
          ],
          [
            "In der aktuellen geldtheoretischen Debatte konkurriert staatliches Fiatgeld zunehmend mit dezentralen Krypto-Assets und digitalen Zentralbankwährungen.",
            "Während Kritiker den schleichenden Abschied vom anonymen [das Bargeld|Bargeld] als Wegbereiter des gläsernen Bürgers anprangern, betonen Befürworter die Effizienz programmierbarer Zahlungen.",
            "Die Transformation der [die Währung, -en|Währung] berührt somit fundamentale Fragen staatlicher Souveränität und individueller Freiheit im digitalen Zeitalter.",
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
      if (batch2Topics[topic.id]) {
        const patch = batch2Topics[topic.id];
        topic.description = patch.description;
        topic.details = patch.details;
        topic.arabicDescription = patch.arabicDescription;
        topic.words = patch.words;
        topic.story = patch.story;
        topic.stories = patch.stories;
        modifiedCount++;
        console.log(
          `Applied Batch 2 to topic: ${topic.id} (${topic.title}) -> words: ${topic.words.length}`,
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
    `Batch 2 successfully saved to zahlen-und-masse.json! Modified ${modifiedCount} topics.`,
  );
}

main().catch(console.error);
