import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  die_schulfaecher: {
    description:
      "Schulfächer, Stundenplan, Mathe, Deutsch, Naturwissenschaften, Geschichte und Noten.",
    details: "Schulsystem, Notenskala 1 bis 6, Fächerkombinationen und Abiturvorbereitung (A1–B2)",
    arabicDescription:
      "المواد الدراسية (Die Schulfächer): مفردات المواد الدراسية (Schulfach)، الرياضيات (Mathe)، اللغة الألمانية (Deutsch)، الأحياء (Biologie)، الفيزياء، الكيمياء، التاريخ، جدول الحصص (Stundenplan)، وسلم الدرجات المدرسية الألماني من 1 (ممتاز) إلى 6 (راسب).",
    words: [
      {
        german: "das Schulfach, -̈er",
        arabic: "المادة الدراسية في المدرسة",
        english: "school subject",
        example:
          "Mein liebstes Schulfach ist Biologie, weil wir dort viel über Tiere und Natur lernen.",
      },
      {
        german: "die Mathematik (Mathe)",
        arabic: "مادة الرياضيات والحساب",
        english: "mathematics, maths",
        example: "In Mathematik lösen die Schüler heute schwierige Gleichungen an der Tafel.",
      },
      {
        german: "das Fach Deutsch (Sg.)",
        arabic: "مادة اللغة الألمانية والأدب",
        english: "German (subject)",
        example: "Im Fach Deutsch analysieren wir Gedichte von Goethe und schreiben Aufsätze.",
      },
      {
        german: "der Englischunterricht (Sg.)",
        arabic: "درس وحصة اللغة الإنجليزية",
        english: "English class",
        example: "Im Englischunterricht üben wir flüssiges Sprechen und grammatikalische Zeiten.",
      },
      {
        german: "die Biologie (Bio)",
        arabic: "علم الأحياء والكائنات الحية (البيولوجيا)",
        english: "biology",
        example: "In Bio betrachten wir Pflanzenzellen unter dem Mikroskop.",
      },
      {
        german: "die Physik (Sg.)",
        arabic: "علم الفيزياء وقوانين الطبيعة",
        english: "physics",
        example: "Der Physiklehrer demonstriert die Gesetze der Schwerkraft mit einer Stahlkugel.",
      },
      {
        german: "die Chemie (Sg.)",
        arabic: "علم الكيمياء والتفاعلات",
        english: "chemistry",
        example: "In Chemie mischen wir Flüssigkeiten und beobachten spannende Farbwechsel.",
      },
      {
        german: "die Geschichte (Sg.)",
        arabic: "مادة التاريخ",
        english: "history (subject)",
        example: "In Geschichte besprechen wir die Französische Revolution und das Römische Reich.",
      },
      {
        german: "die Erdkunde (Sg.)",
        arabic: "مادة الجغرافيا وعلوم الأرض",
        english: "geography",
        example: "In Erdkunde arbeiten wir mit dem großen Atlas und lernen Länder und Hauptstädte.",
      },
      {
        german: "der Stundenplan, -̈e",
        arabic: "جدول الحصص الأسبوعي",
        english: "class schedule, timetable",
        example: "Am Sonntagabend packe ich meine Schultasche passend zum Stundenplan für Montag.",
      },
      {
        german: "die Schulnote, -n",
        arabic: "العلامة والدرجة المدرسية (1 ممتاز إلى 6 راسب)",
        english: "school grade, mark",
        example:
          "In Deutschland ist eine Eins die beste Schulnote und eine Sechs die schlechteste.",
      },
      {
        german: "das Zeugnis, -se",
        arabic: "الشهادة المدرسية والتقرير الفصلي",
        english: "report card, school certificate",
        example:
          "Vor den Sommerferien bekommen alle Schüler ihr Zeugnis mit allen Noten überreicht.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Mein Stundenplan in der Schule",
        intro: "Einfache Sätze über Lieblingsfächer, Mathe, Deutsch und Hausaufgaben (A1).",
        paragraphs: [
          [
            "Ich gehe in die fünfte Klasse und habe viele Fächer.",
            "Mein [der Stundenplan, -̈e|Stundenplan] hängt an der Wand über meinem Schreibtisch.",
            "Am Montag habe ich zwei Stunden [die Mathematik (Mathe)|Mathematik] und eine Stunde Kunst.",
            "Mathe macht mir Spaß, weil ich gern mit Zahlen rechne.",
          ],
          [
            "Am Dienstag lernen wir Grammatik in dem [das Fach Deutsch (Sg.)|Fach Deutsch].",
            "Danach haben wir [der Englischunterricht (Sg.)|Englischunterricht] bei einer netten Lehrerin.",
            "Jedes [das Schulfach, -̈er|Schulfach] ist interessant und wichtig.",
            "Für die Klassenarbeit möchte ich eine gute Note bekommen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Naturwissenschaften und das Schulzeugnis",
        intro: "Physik, Chemie, Biologie und das deutsche Notensystem (A2).",
        paragraphs: [
          [
            "Ab der siebten Klasse bekommen die Schüler neue naturwissenschaftliche Schulfächer.",
            "In [die Biologie (Bio)|Biologie] lernen wir, wie das Herz schlägt und wie Bäume Sauerstoff produzieren.",
            "Besonders spannend ist der Unterricht in [die Chemie (Sg.)|Chemie] und [die Physik (Sg.)|Physik], wo wir Experimente machen.",
            "In [die Erdkunde (Sg.)|Erdkunde] und [die Geschichte (Sg.)|Geschichte] erfahren wir viel über fremde Kontinente und vergangene Jahrhunderte.",
          ],
          [
            "Das deutsche Notensystem unterscheidet sich von vielen anderen Ländern: Eine Eins ist 'sehr gut', eine Vier ist 'ausreichend'.",
            "Wenn jemand eine Fünf oder Sechs als [die Schulnote, -n|Schulnote] erhält, hat er das Ziel leider nicht erreicht.",
            "Am Schuljahresende freuen sich alle auf [das Zeugnis, -se|das Zeugnis] und die langen Sommerferien.",
            "Mit fleißigem Lernen schafft man einen erfolgreichen Schulabschluss.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Fächerkanon und gymnasiale Oberstufe in Deutschland",
        intro: "Kurssystem der Oberstufe, Abiturprüfungen und Fächerwahl (B1).",
        paragraphs: [
          [
            "Das deutsche Schulsystem zeichnet sich durch seine traditionelle Dreigliedrigkeit aus Hauptschule, Realschule und Gymnasium aus.",
            "In der gymnasialen Oberstufe löst sich der starre Klassenverband auf: Schüler wählen individuelle Leistungskurse und Grundkurse aus dem gesellschaftswissenschaftlichen, mathematisch-naturwissenschaftlichen und sprachlichen Aufgabenfeld.",
            "Dabei bilden Kernfächer wie [das Fach Deutsch (Sg.)|Deutsch] und [die Mathematik (Mathe)|Mathematik] das verbindliche Fundament bis zum Abitur.",
          ],
          [
            "Die naturwissenschaftliche Bildung in [die Biologie (Bio)|Biologie], [die Chemie (Sg.)|Chemie] und [die Physik (Sg.)|Physik] legt den Grundstein für spätere MINT-Studiengänge (Mathematik, Informatik, Naturwissenschaften und Technik).",
            "Historisch-politische Bildung im Fach [die Geschichte (Sg.)|Geschichte] schärft das demokratische Urteilsvermögen heranwachsender Staatsbürger.",
          ],
          [
            "Die erreichten Punkte im Abiturzeugnis fließen in den 'Numerus Clausus' (NC) ein, welcher den unmittelbaren Hochschulzugang regelt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Curriculare Didaktik, Kompetenzorientierung und Bildungsföderalismus",
        intro: "Kultusministerkonferenz (KMK), PISA-Folgen und Bildungsstandards (B2).",
        paragraphs: [
          [
            "Das deutsche Bildungswesen unterliegt dem verfassungsrechtlich verankerten Bildungsföderalismus gemäß Artikel 7 des Grundgesetzes, wodurch die Kulturhoheit vollumfänglich bei den 16 Bundesländern liegt.",
            "Die Ständige Konferenz der Kultusminister (KMK) koordiniert die curriculare Harmonisierung, um die Vergleichbarkeit von Abschlüssen und Bildungsstandards bundesweit zu gewährleisten.",
          ],
          [
            "Seit dem 'PISA-Schock' der frühen 2000er-Jahre vollzog die Schulpädagogik einen Paradigmenwechsel vom reinen Stoffkanon hin zu outputorientierten Bildungsstandards.",
            "In jedem [das Schulfach, -̈er|Schulfach] werden nicht isolierte Fakten memoriert, sondern kumulative Kompetenzen operationalisiert: Im mathematisch-naturwissenschaftlichen Unterricht dominiert problemorientiertes Modellieren, während geisteswissenschaftliche Fächer hermeneutische Textkompetenz und Quellenkritik forcieren.",
          ],
          [
            "Dies reflektiert den Anspruch, Schüler zu autonomem epistemischem Denken und interdisziplinärer Reflexionsfähigkeit im Zeitalter digitaler Informationsfluten zu befähigen.",
          ],
        ],
      },
    },
  },
  im_labor: {
    description:
      "Labor, Mikroskop, Reagenzglas, Bunsenbrenner, Schutzbrille, Laborkittel, Experiment und Pipette.",
    details:
      "Naturwissenschaftlicher Fachunterricht, Sicherheitsregeln, Messprotokolle und Reaktionen (A1–B2)",
    arabicDescription:
      "في المختبر المدرسي (Im Labor): مفردات المختبر (Labor)، المجهر (Mikroskop)، أنبوب الاختبار (Reagenzglas)، موقد بنزن (Bunsenbrenner)، نظارة الوقاية (Schutzbrille)، مريول المختبر (Laborkittel)، التجربة العلمية (Experiment)، والماصة وقواعد السلامة.",
    words: [
      {
        german: "das Labor, -e",
        arabic: "المختبر / المعمل العلمي",
        english: "laboratory, lab",
        example: "Im modern ausgestatteten Schullabor führen die Schüler chemische Versuche durch.",
      },
      {
        german: "das Mikroskop, -e",
        arabic: "المجهر (الميكروسكوب)",
        english: "microscope",
        example:
          "Unter dem optischen Mikroskop werden winzige Wassertropfen und Einzeller sichtbar.",
      },
      {
        german: "das Reagenzglas, -̈er",
        arabic: "أنبوب الاختبار الزجاجي",
        english: "test tube",
        example:
          "Er füllt eine blaue Flüssigkeit mit der Pipette vorsichtig in das schmale Reagenzglas.",
      },
      {
        german: "der Bunsenbrenner, -",
        arabic: "موقد بنزن الغازي للتسخين",
        english: "Bunsen burner",
        example:
          "Mit einem Gasanzünder entzündet die Lehrerin die heiße blaue Flamme des Bunsenbrenners.",
      },
      {
        german: "die Schutzbrille, -n",
        arabic: "نظارة الوقاية لحماية العينين",
        english: "safety goggles, safety glasses",
        example:
          "Aus Sicherheitsgründen muss jeder im Chemiesaal eine Schutzbrille über den Augen tragen.",
      },
      {
        german: "der Laborkittel, -",
        arabic: "معطف ومريول المختبر الأبيض",
        english: "lab coat",
        example:
          "Der weiße Laborkittel aus reiner Baumwolle schützt die Kleidung vor Säurespritzern.",
      },
      {
        german: "das Experiment, -e",
        arabic: "التجربة العلمية المخبرية",
        english: "experiment",
        example:
          "Das naturwissenschaftliche Experiment beweist, dass Sauerstoff die Verbrennung fördert.",
      },
      {
        german: "die Pipette, -n",
        arabic: "الماصة المخبرية لنقل قطرات السوائل",
        english: "pipette, dropper",
        example: "Mit der gläsernen Pipette dosiert die Schülerin exakt drei Tropfen Säure.",
      },
      {
        german: "das Becherglas, -̈er",
        arabic: "الكأس الزجاجي المدرج (البيكر)",
        english: "beaker",
        example: "Im hitzebeständigen Becherglas wird das Gemisch auf der Heizplatte erwärmt.",
      },
      {
        german: "protokollieren (protokollierte, hat protokolliert)",
        arabic: "يسجل ويدون الملاحظات والنتائج",
        english: "to record, log, write a protocol",
        example:
          "Während des Versuchs müssen alle Beobachtungen und Messwerte minutiös protokolliert werden.",
      },
      {
        german: "die Chemikalie, -n",
        arabic: "المادة الكيميائية",
        english: "chemical",
        example:
          "Gefährliche Chemikalien werden in einem abschließbaren Sicherheitsschrank gelagert.",
      },
      {
        german: "die Sicherheitsvorschrift, -en",
        arabic: "تعليمات وقواعد السلامة الإلزامية",
        english: "safety regulation",
        example:
          "Jeder Verstoß gegen die Sicherheitsvorschrift im Labor kann zum Unterrichtsausschluss führen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Unser Chemieunterricht im Labor",
        intro: "Einfache Sätze über Schutzbrille, Kittel, Reagenzglas und Mikroskop (A1).",
        paragraphs: [
          [
            "Heute haben wir Unterricht in dem großen [das Labor, -e|Labor].",
            "Bevor wir anfangen, ziehe ich meinen weißen [der Laborkittel, -|Laborkittel] an.",
            "Auf die Nase setze ich eine durchsichtige [die Schutzbrille, -n|Schutzbrille].",
            "Sicherheit ist sehr wichtig beim Arbeiten.",
          ],
          [
            "Auf dem Tisch steht ein [das Mikroskop, -e|Mikroskop] und ein dünnes [das Reagenzglas, -̈er|Reagenzglas].",
            "Der Lehrer zündet [der Bunsenbrenner, -|den Bunsenbrenner] an und zeigt uns [das Experiment, -e|das Experiment].",
            "Wir schauen staunend zu, wie das Wasser kocht.",
            "Naturwissenschaften sind spannend und machen viel Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein wissenschaftlicher Versuch",
        intro: "Sorgfältiges Experimentieren mit Pipette, Becherglas und Protokoll (A2).",
        paragraphs: [
          [
            "In der Chemiestunde arbeiten wir heute zu zweit an einer Laborstation.",
            "Mit einer feinen [die Pipette, -n|Pipette] tropfen wir Indikatorflüssigkeit in ein [das Becherglas, -̈er|Becherglas].",
            "Plötzlich verfärbt sich die Lösung von farblos zu leuchtend rot.",
            "Wir müssen genau beobachten und jeden Schritt sauber im Laborheft [protokollieren (protokollierte, hat protokolliert)|protokollieren].",
          ],
          [
            "Jede [die Chemikalie, -n|Chemikalie] muss nach dem Versuch fachgerecht entsorgt werden.",
            "Unsere Lehrerin erinnert uns ständig an [die Sicherheitsvorschrift, -en|die Sicherheitsvorschriften], damit niemand verletzt wird.",
            "Nach der Stunde waschen wir die Gläser gründlich mit destilliertem Wasser aus.",
            "Präzises Arbeiten ist das A und O für jeden echten Forscher.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Forschergeist im Schulalltag: 'Jugend forscht' und Laborpraxis",
        intro:
          "Wissenschaftliche Arbeitsmethoden, Gefahrstoffverordnung und Nachwuchsförderung (B1).",
        paragraphs: [
          [
            "Das naturwissenschaftliche Praktikum im Schullabor bildet die Brücke zwischen abstrakter theoretischer Formel und empirischer Realität.",
            "Schüler lernen hier den klassischen Zyklus wissenschaftlicher Erkenntnisgewinnung: Hypothesenbildung, Versuchsaufbau, Durchführung und kritische Fehleranalyse.",
            "Wer ein anspruchsvolles [das Experiment, -e|Experiment] durchführt, muss sämtliche Messreihen fehlerfrei [protokollieren (protokollierte, hat protokolliert)|protokollieren], um reproduzierbare Resultate zu erzielen.",
          ],
          [
            "Dabei unterliegt jedes Schul-[das Labor, -e|Labor] den strengen Regularien der Gefahrstoffverordnung (GefStoffV).",
            "Gefahrstoffsymbole - von ätzend über entzündbar bis giftig - müssen beherrscht werden, und der Abzug gewährleistet den gefahrlosen Umgang mit Dämpfen.",
          ],
          [
            "Viele engagierte Schüler nutzen das Labor nachmittags für den bundesweiten Wettbewerb 'Jugend forscht', der seit 1965 herausragende Talente im naturwissenschaftlichen Bereich fördert und Karrieren begründet.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Epistemologie des Experiments, Stöchiometrie und quantitative Analytik",
        intro: "Wissenschaftstheorie von Karl Popper, Maßanalyse und Laborsicherheitsnormen (B2).",
        paragraphs: [
          [
            "In der Wissenschaftstheorie nach Karl Popper dient [das Experiment, -e|das Experiment] nicht der definitiven Verifikation, sondern der systematischen Falsifikation theoretischer Postulate.",
            "Im modernen Laborunterricht vollzieht sich der Übergang von rein phänomenologischen Schauversuchen zur quantitativen Stöchiometrie und instrumentellen Analytik.",
            "Schüler bestimmen Konzentrationen mittels Säure-Base-Titration unter Verwendung kalibrierter Büretten oder ermitteln Reaktionskinetiken spektrophotometrisch.",
          ],
          [
            "Die Einhaltung jeder [die Sicherheitsvorschrift, -en|Sicherheitsvorschrift] gemäß GUV-SR 2003 (Richtlinien für Sicherheit im Unterricht) ist dabei nicht nur formaljuristische Pflicht, sondern schult den Habitus professioneller Laborpraxis.",
          ],
          [
            "Vom Tragen der persönlichen Schutzausrüstung wie [die Schutzbrille, -n|Schutzbrille] und [der Laborkittel, -|Laborkittel] bis hin zur umweltgerechten Neutralisation toxischer Schwermetallabfälle manifestiert sich im Labor die ethische Verantwortung angewandter Naturwissenschaften.",
          ],
        ],
      },
    },
  },
  in_der_pause: {
    description:
      "Schulpause, Schulhof, Pausenbrot, Brotdose, Pausengong, Mitschüler, Trinkflasche und Aufsicht.",
    details:
      "Pausenkultur, Schulverpflegung, Bewegungspausen, Hofaufsicht und Pausenspiele (A1–B2)",
    arabicDescription:
      "الاستراحة والفسحة المدرسية (In der Pause): مفردات الاستراحة (Schulpause)، فناء المدرسة (Schulhof)، سندويتش الفسحة (Pausenbrot)، علبة الطعام (Brotdose)، جرس المدرسة (Pausengong)، زملاء الفصل (Mitschüler)، ومناوبة المعلمين (Pausenaufsicht).",
    words: [
      {
        german: "die Schulpause, -n",
        arabic: "الاستراحة والفسحة المدرسية",
        english: "school break, recess",
        example:
          "Nach zwei Stunden Unterricht freuen sich alle Kinder auf die zwanzigminütige Schulpause.",
      },
      {
        german: "der Schulhof, -̈e",
        arabic: "باحة وفناء المدرسة الخارجي",
        english: "schoolyard, school playground",
        example: "In der großen Pause rennen die Schüler hinaus auf den sonnigen Schulhof.",
      },
      {
        german: "das Pausenbrot, -e",
        arabic: "سندويتش الفسحة المدرسية الخفيف",
        english: "packed lunch, school sandwich",
        example:
          "Seine Mutter hat ihm ein gesundes Pausenbrot mit Vollkorn und Gurkenscheiben geschmiert.",
      },
      {
        german: "die Brotdose, -n",
        arabic: "علبة حفظ السندويتشات والطعام",
        english: "lunchbox",
        example: "In der bunten Brotdose liegen Apfelschnitze und ein belegtes Käsebrot.",
      },
      {
        german: "der Pausengong, -s",
        arabic: "جرس الاستراحة وإشارة انتهاء الحصة",
        english: "school bell, break chime",
        example: "Sobald der Pausengong ertönt, packen die Schüler ihre Bücher zusammen.",
      },
      {
        german: "die Trinkflasche, -n",
        arabic: "قنينة ومطارة الماء الشخصية",
        english: "water bottle",
        example:
          "Am Trinkwasserspender füllt sie ihre Edelstahl-Trinkflasche mit frischem Wasser auf.",
      },
      {
        german: "fangen spielen",
        arabic: "يلعب لعبة المطاردة والجري",
        english: "to play tag",
        example: "Die jüngeren Kinder lieben es, auf dem Pausenhof wild fangen zu spielen.",
      },
      {
        german: "der Mitschüler, -",
        arabic: "زميل الدراسة في الفصل",
        english: "classmate, schoolmate",
        example: "Mit meinen netten Mitschülern lerne ich oft gemeinsam für Klassenarbeiten.",
      },
      {
        german: "die Pausenaufsicht, -en",
        arabic: "مناوبة ومراقبة المعلمين في الفناء",
        english: "playground duty, yard duty",
        example:
          "Zwei Lehrer führen als Pausenaufsicht die Aufsicht und schlichten kleine Streitigkeiten.",
      },
      {
        german: "sich unterhalten (unterhielt sich, hat sich unterhalten)",
        arabic: "يتجاذب أطراف الحديث ويدردش",
        english: "to chat, converse",
        example: "Auf den Bänken sitzen Jugendliche und unterhalten sich über ihre Wochenendpläne.",
      },
      {
        german: "die Mensa, Mensen",
        arabic: "مطعم ومقصف المدرسة والجامعة",
        english: "cafeteria, school canteen",
        example:
          "In der Mittagspause essen viele Schüler ein warmes vegetarisches Gericht in der Mensa.",
      },
      {
        german: "frische Luft schnappen",
        arabic: "يستنشق هواءً نقياً للاستجمام",
        english: "to get some fresh air",
        example:
          "Man sollte in der Pause unbedingt nach draußen gehen, um frische Luft zu schnappen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Die große Pause auf dem Hof",
        intro: "Einfache Sätze über Pause, Schulhof, Essen und Spielen (A1).",
        paragraphs: [
          [
            "Ding-dong! [der Pausengong, -s|Der Pausengong] läutet laut durch das Schulhaus.",
            "Endlich ist die große [die Schulpause, -n|Schulpause] da!",
            "Alle Kinder rennen lachend hinaus auf [der Schulhof, -̈e|den Schulhof].",
            "Ich öffne meinen Rucksack und hole [die Brotdose, -n|die Brotdose] heraus.",
          ],
          [
            "Ich esse mein leckeres [das Pausenbrot, -e|Pausenbrot] und trinke Wasser aus [die Trinkflasche, -n|der Trinkflasche].",
            "Zusammen mit meinen Freunden möchte ich [fangen spielen|fangen spielen].",
            "Ein anderer [der Mitschüler, -|Mitschüler] spielt Fußball auf dem Rasen.",
            "Die Pause ist die schönste Zeit am ganzen Schultag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Zwanzig Minuten Durchatmen",
        intro: "Gesunde Ernährung, Hofaufsicht und Entspannung zwischen den Stunden (A2).",
        paragraphs: [
          [
            "Nach zwei anstrengenden Stunden Mathematik brauchen alle Köpfe eine Pause.",
            "Wir gehen nach draußen, um uns zu bewegen und [frische Luft schnappen|frische Luft zu schnappen].",
            "Auf dem Hof tragen zwei Lehrer gelbe Warnwesten und haben [die Pausenaufsicht, -en|die Pausenaufsicht].",
            "Sie achten darauf, dass niemand sich wehtut und alles friedlich bleibt.",
          ],
          [
            "Ich setze mich mit meinen besten Freunden auf eine Holzbank, wo wir [sich unterhalten (unterhielt sich, hat sich unterhalten)|uns unterhalten].",
            "In der Mittagspause gehen wir später gemeinsam in [die Mensa, Mensen|die Mensa], wo es warme Nudeln gibt.",
            "Erholte Schüler können sich in der nächsten Stunde wieder viel besser konzentrieren.",
            "Pausen sind unverzichtbar für ein gesundes Schulleben.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Pausenphilosophie: Vom Toben zur bewegten Schule",
        intro: "Konzept der 'Bewegten Schule', Schulkiosk und Sozialkompetenzförderung (B1).",
        paragraphs: [
          [
            "Die Schulpause erfüllt im modernen pädagogischen Diskurs weit mehr als bloße Erholungsfunktionen.",
            "Im Rahmen des Konzepts der 'Bewegten Schule' transformieren viele deutsche Lehranstalten den asphaltierten [der Schulhof, -̈e|Schulhof] in naturnahe Erlebnislandschaften mit Kletterzonen, Tischtennisplatten und Ruheinseln.",
            "Körperliche Bewegung nach intensivem Stillsitzen fördert nachweislich die Durchblutung des präfrontalen Kortex und reaktiviert die kognitiven Aufnahmekapazitäten.",
          ],
          [
            "Auch das Thema gesunde Schulverpflegung steht im Fokus: Initiativen ersetzen zuckerhaltige Snacks am Kiosk durch vollwertiges [das Pausenbrot, -e|Pausenbrot] und kostenlose Wasserspender für [die Trinkflasche, -n|die Trinkflasche].",
          ],
          [
            "Pausen fungieren zudem als wichtiges soziales Lernfeld, in dem Konflikte ausgehandelt und Empathie trainiert werden, stets begleitet durch die dezentrale [die Pausenaufsicht, -en|Pausenaufsicht] der Lehrkräfte.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Chronopsychologie der Vigilanz, Aufsichtspflicht und Peer-Group-Dynamiken",
        intro:
          "Ultradiane Rhythmen, BGB-Haftungsrecht bei Aufsichtspflichtverletzung und Schulklima (B2).",
        paragraphs: [
          [
            "Die chronopsychologische Rhythmisierung des Unterrichtstages korrespondiert mit endogenen ultradianen Leistungskurven (BRAC - Basic Rest-Activity Cycle).",
            "Nach ca. 90 Minuten kontinuierlicher Aufmerksamkeitsfokussierung sinkt die Vigilanz dramatisch, weshalb [die Schulpause, -n|die Schulpause] als obligate neurophysiologische Konsolidierungsphase fungiert.",
          ],
          [
            "Rechtlich tangiert der Pausenbetrieb die zivilrechtliche Aufsichtspflicht nach § 832 BGB:",
            "Die [die Pausenaufsicht, -en|Pausenaufsicht] muss kontinuierlich, präventiv und altersadäquat agieren, um Gefahrenquellen zu eliminieren, ohne die Autonomieentwicklung der Schüler ungebührlich zu beschneiden.",
          ],
          [
            "Aus entwicklungspsychologischer Sicht ist das Areal des Schulhofes die primäre Arena informeller Peer-Group-Sozialisation:",
            "Hier werden informelle Hierarchien ausgehandelt, Inklusions- und Exklusionsmechanismen wirksam und Resilienzfaktoren ausgebildet, die das psychosoziale Schulklima maßgeblich konstituieren.",
          ],
        ],
      },
    },
  },
  die_sporthalle: {
    description:
      "Sporthalle, Turnhalle, Sportunterricht, Barren, Schwebebalken, Kasten, Turnmatte und Kletterseil.",
    details: "Schulsport, Geräteturnen, Ballspiele, Aufwärmen und Bundesjugendspiele (A1–B2)",
    arabicDescription:
      "صالة الألعاب الرياضية (Die Sporthalle): مفردات الصالة الرياضية (Sporthalle/Turnhalle)، حصة الرياضة (Sportunterricht)، المتوازي (Barren)، عارضة التوازن (Schwebebalken)، صندوق القفز (Kasten)، بساط الجمباز (Turnmatte)، حبل التسلق (Kletterseil)، والإحماء الرياضي (aufwärmen).",
    words: [
      {
        german: "die Sporthalle, -n",
        arabic: "صالة الألعاب الرياضية والجمباز",
        english: "sports hall, gymnasium",
        example: "In der großen Sporthalle gibt es Linien für Handball, Basketball und Volleyball.",
      },
      {
        german: "der Sportunterricht (Sg.)",
        arabic: "حصة التربية البدنية والرياضية",
        english: "PE, physical education",
        example: "Zweimal in der Woche haben die Schüler Sportunterricht, um sich fit zu halten.",
      },
      {
        german: "die Umkleidekabine, -n",
        arabic: "غرفة تبديل الملابس الرياضية",
        english: "changing room, locker room",
        example:
          "Vor dem Sport ziehen sich die Mädchen und Jungen in getrennten Umkleidekabinen um.",
      },
      {
        german: "die Turnmatte, -n",
        arabic: "بساط ومرتبة الجمباز الإسفنجية",
        english: "gym mat, tumbling mat",
        example: "Eine dicke blaue Turnmatte dämpft den Sprung bei der Landung sicher ab.",
      },
      {
        german: "der Barren, -",
        arabic: "جهاز المتوازي في رياضة الجمباز",
        english: "parallel bars",
        example: "Am Barren trainieren die Turner Schwünge und Stützübungen mit den Armen.",
      },
      {
        german: "der Schwebebalken, -",
        arabic: "عارضة التوازن الخشبية",
        english: "balance beam",
        example:
          "Auf dem nur zehn Zentimeter breiten Schwebebalken balanciert die Turnerin elegant.",
      },
      {
        german: "der Sprungkasten, -̈",
        arabic: "صندوق القفز الخشبي المبطن بالجلد",
        english: "vaulting box",
        example:
          "Mit kräftigem Absprung vom Sprungbrett springt er über den ledernen Sprungkasten.",
      },
      {
        german: "das Kletterseil, -e",
        arabic: "حبل التسلق السميك المتدلي من السقف",
        english: "climbing rope",
        example:
          "Die fittesten Schüler klettern am Kletterseil ganz nach oben bis unter die Decke.",
      },
      {
        german: "der Basketballkorb, -̈e",
        arabic: "سلة كرة السلة المعلقة",
        english: "basketball hoop",
        example:
          "Er wirft den orangenen Ball mit einer hohen Flugkurve direkt in den Basketballkorb.",
      },
      {
        german: "die Hallenschuhe (Pl.)",
        arabic: "الأحذية الرياضية المخصصة لأرضية الصالة",
        english: "indoor sports shoes",
        example:
          "In der Turnhalle darf man nur Hallenschuhe mit heller, abriebfester Sohle tragen.",
      },
      {
        german: "sich aufwärmen (wärmte sich auf, hat sich aufgewärmt)",
        arabic: "يقوم بالإحماء والتسخين قبل التمرين",
        english: "to warm up",
        example:
          "Vor jedem Wettkampf muss man sich gründlich aufwärmen, um Verletzungen zu vermeiden.",
      },
      {
        german: "der Schiedsrichter, -",
        arabic: "حكم المباراة والنزاهة الرياضية",
        english: "referee, umpire",
        example:
          "Der Schiedsrichter pfeift mit der Trillerpfeife und unterbricht das Spiel wegen eines Fouls.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Sport in der Turnhalle",
        intro: "Einfache Sätze über Turnhalle, Sportschuhe, Laufen und Ballspiele (A1).",
        paragraphs: [
          [
            "Heute haben wir [der Sportunterricht (Sg.)|Sportunterricht] in der Schule.",
            "Ich gehe in [die Umkleidekabine, -n|die Umkleidekabine] und ziehe mein T-Shirt und die Hose an.",
            "Für den Boden brauche ich saubere [die Hallenschuhe (Pl.)|Hallenschuhe].",
            "Wir betreten die große [die Sporthalle, -n|Sporthalle] und beginnen zu rennen.",
          ],
          [
            "Zuerst müssen wir [sich aufwärmen (wärmte sich auf, hat sich aufgewärmt)|uns aufwärmen] und Dehnübungen machen.",
            "Der Lehrer legt eine weiche [die Turnmatte, -n|Turnmatte] auf den Boden.",
            "Danach werfen wir den Ball in [der Basketballkorb, -̈e|den Basketballkorb].",
            "Sportunterricht macht fit und bringt viel Energie.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Geräteturnen und Mannschaftsspiele",
        intro: "Gerätturnen mit Kasten, Schwebebalken und Barren sowie Bundesjugendspiele (A2).",
        paragraphs: [
          [
            "Im Winter üben wir im Sportunterricht traditionelles Geräteturnen.",
            "Wir bauen verschiedene Stationen auf: den hohen [der Barren, -|Barren], [das Kletterseil, -e|das Kletterseil] und [der Sprungkasten, -̈|den Sprungkasten].",
            "Viele Mädchen üben elegante Sprünge auf dem schmalen [der Schwebebalken, -|Schwebebalken].",
            "Man braucht viel Mut und Konzentration, um sauber über den Kasten zu springen.",
          ],
          [
            "In der zweiten Hälfte der Stunde spielen wir Völkerball oder Hallenfußball.",
            "Unser Sportlehrer ist [der Schiedsrichter, -|der Schiedsrichter] und pfeift streng bei jedem Foul.",
            "Im Sommer freuen sich alle Schüler auf die Bundesjugendspiele auf dem Sportplatz.",
            "Gemeinsamer Sport stärkt den Teamgeist und die Gesundheit.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom Turnvater Jahn zu den Bundesjugendspielen",
        intro: "Historische Wurzeln des Schulsports, Fairness und motorische Förderung (B1).",
        paragraphs: [
          [
            "Die Tradition des deutschen Schulturnens geht historisch auf Friedrich Ludwig Jahn, den sogenannten 'Turnvater Jahn', im frühen 19. Jahrhundert zurück.",
            "Jahn erfand klassische Turngeräte wie den [der Barren, -|Barren] und das Reck, um die Jugend durch körperliche Ertüchtigung zu stärken.",
            "Bis heute bildet das Geräteturnen an Geräten wie dem [der Sprungkasten, -̈|Sprungkasten] einen festen Bestandteil der Lehrpläne.",
          ],
          [
            "Ein fester jährlicher Fixpunkt sind die bundesweiten 'Bundesjugendspiele', bei denen Schüler sich in Leichtathletik, Schwimmen oder Turnen messen.",
            "Vor jedem Wettkampf ist es elementar, [sich aufwärmen (wärmte sich auf, hat sich aufgewärmt)|sich aufzuwärmen], um Muskelzerrungen vorzubeugen.",
          ],
          [
            "Zugleich wandelt sich der Schulsport: Neben traditionellen Leistungswettkämpfen gewinnen Kooperation, Inklusion und Trendsportarten wie Parkour und Ultimate Frisbee zunehmend an Gewicht.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Motorische Plastizität, Sensomotorik und sportorthopädische Prävention",
        intro:
          "Biomechanik der Dämpfung bei Prallböden, intramuskuläre Koordination und Sportpädagogik (B2).",
        paragraphs: [
          [
            "Die bauliche Konzeption moderner Sportstätten gehorcht strengen sportorthopädischen und biomechanischen Normen gemäß DIN 18032.",
            "Der Schwingboden in [die Sporthalle, -n|der Sporthalle] fungiert als flächen- oder punktelastisches System, das vertikale Stoßkräfte absorbiert und Gelenke der Heranwachsenden vor repetitiven Überlastungsschäden schützt.",
            "Spezielle [die Hallenschuhe (Pl.)|Hallenschuhe] mit nicht-markierenden Gummimischungen gewährleisten eine definierte Reibungszahl (Gleitreibung vs. Haftreibung), um Torsionsverletzungen des Kniebandapparates bei abrupten Richtungswechseln zu verhindern.",
          ],
          [
            "Aus bewegungswissenschaftlicher Sicht schult das Geräteturnen am [der Schwebebalken, -|Schwebebalken] die vestibuläre und propriozeptive Wahrnehmung sowie die intramuskuläre Koordination.",
          ],
          [
            "Moderne sportpädagogische Konzeptionen überwinden dabei das rein leistungsorientierte Paradigma zugunsten einer ganzheitlichen Gesundheitsförderung, welche lebenslange Bewegungsmotivation und somatische Resilienz gegen die Folgen sedenterer Lebensweisen im Alltag stiftet.",
          ],
        ],
      },
    },
  },
  die_universitaet: {
    description:
      "Universität, Studium, Hörsaal, Vorlesung, Seminar, Professor, Student, Bibliothek und Master.",
    details:
      "Hochschulsystem, Bologna-Prozess, Bachelor/Master, Hausarbeiten und Klausuren (A1–B2)",
    arabicDescription:
      "الجامعة والتعليم العالي (Die Universität): مفردات الجامعة (Universität/Uni)، الدراسة الجامعية (Studium)، مدرج المحاضرات (Hörsaal)، المحاضرة (Vorlesung)، السيمينار (Seminar)، الأستاذ الجامعي (Professor)، الطالب (Student)، المكتبة الجامعية (Bibliothek)، وامتحانات الكلاوزور ودرجتي البكالوريوس والماجستير.",
    words: [
      {
        german: "die Universität, -en",
        arabic: "الجامعة",
        english: "university",
        example: "Die Universität Heidelberg ist die älteste Hochschule auf deutschem Boden.",
      },
      {
        german: "das Studium, Studien",
        arabic: "الدراسة الجامعية والتخصص الأكاديمي",
        english: "university studies, degree program",
        example: "Nach dem Abitur beginnt sie ein Studium der Rechtswissenschaften in München.",
      },
      {
        german: "der Hörsaal, -säle",
        arabic: "مدرج وقاعة المحاضرات الكبرى بالجامعة",
        english: "lecture hall, auditorium",
        example: "Im vollbesetzten Hörsaal lauschen Hunderte Erstsemester den Worten des Dozenten.",
      },
      {
        german: "die Vorlesung, -en",
        arabic: "المحاضرة الجامعية العامة",
        english: "lecture",
        example:
          "Die Vorlesung zur Einführung in die Volkswirtschaftslehre findet montags um zehn Uhr statt.",
      },
      {
        german: "das Seminar, -e",
        arabic: "الحلقة الدراسية النقاشية التفاعلية (السيمينار)",
        english: "seminar",
        example:
          "Im Seminar diskutieren die Studierenden in kleiner Gruppe über wissenschaftliche Texte.",
      },
      {
        german: "der Professor, -en",
        arabic: "الأستاذ الجامعي (البروفيسور)",
        english: "professor",
        example: "Die Professorin leitet das renommierte Forschungsinstitut für Quantenphysik.",
      },
      {
        german: "der Student, -en",
        arabic: "الطالب الجامعي (المسجل في الجامعة)",
        english: "university student",
        example: "Als Student verbringt man vor den Prüfungen viele Nächte am Schreibtisch.",
      },
      {
        german: "die Universitätsbibliothek, -en",
        arabic: "مكتبة الجامعة المركزية (UB)",
        english: "university library",
        example:
          "In der Universitätsbibliothek leiht er Fachliteratur für seine Abschlussarbeit aus.",
      },
      {
        german: "die Hausarbeit, -en",
        arabic: "البحث الأكاديمي والورقة البحثية الفصلية",
        english: "term paper, research paper",
        example:
          "In den Semesterferien muss sie eine zwanzigseitige Hausarbeit in Geschichte verfassen.",
      },
      {
        german: "die Klausur, -en",
        arabic: "الامتحان التحريري الفصلي",
        english: "written exam",
        example: "Am Ende des Semesters schreiben die Prüflinge eine 90-minütige Klausur.",
      },
      {
        german: "der Bachelorabschluss, -̈e",
        arabic: "درجة البكالوريوس الأكاديمية (3-4 سنوات)",
        english: "bachelor's degree",
        example:
          "Nach sechs Semestern Regelstudienzeit schließt er sein Studium mit dem Bachelorabschluss ab.",
      },
      {
        german: "immatrikulieren (immatrikulierte, hat immatrikuliert)",
        arabic: "يسجل قيده رسمياً في الجامعة",
        english: "to matriculate, enroll",
        example:
          "Vor Beginn des Wintersemesters muss man sich im Studentensekretariat offiziell immatrikulieren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Mein Leben an der Universität",
        intro: "Einfache Sätze über Universität, Hörsaal, Professor und Bibliothek (A1).",
        paragraphs: [
          [
            "Ich bin zwanzig Jahre alt und lerne an einer großen [die Universität, -en|Universität].",
            "Jeden Morgen gehe ich in [der Hörsaal, -säle|den Hörsaal].",
            "Dort hält [der Professor, -en|der Professor] eine interessante Rede über Medizin.",
            "Ich sitze mit vielen anderen Studenten zusammen und schreibe Notizen in mein Heft.",
          ],
          [
            "Am Nachmittag gehe ich in [die Universitätsbibliothek, -en|die Universitätsbibliothek].",
            "Dort ist es ganz leise und ich lese schwere Bücher für mein [das Studium, Studien|Studium].",
            "Jeder [der Student, -en|Student] lernt fleißig für die Prüfung.",
            "Das Studentenleben ist aufregend und macht mich selbstständig.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vorlesungen, Seminare und Klausuren",
        intro: "Unterschied zwischen Vorlesung und Seminar sowie Bachelor und Klausuren (A2).",
        paragraphs: [
          [
            "An der Hochschule gibt es verschiedene Arten von Lehrveranstaltungen.",
            "In einer großen [die Vorlesung, -en|Vorlesung] hört man meistens nur zu, während der Professor spricht.",
            "In einem kleinen [das Seminar, -e|Seminar] diskutieren wir aktiv über aktuelle Forschungsprojekte.",
            "Wer ein neues Fach studieren will, muss sich zuerst im Studentensekretariat [immatrikulieren (immatrikulierte, hat immatrikuliert)|immatrikulieren].",
          ],
          [
            "Am Ende des Semesters steht die stressige Prüfungsphase an.",
            "Für manche Fächer muss man eine schriftliche [die Klausur, -en|Klausur] bestehen, für andere eine wissenschaftliche [die Hausarbeit, -en|Hausarbeit] schreiben.",
            "Nach drei Jahren harter Arbeit erreicht man den begehrten [der Bachelorabschluss, -̈e|Bachelorabschluss].",
            "Danach kann man direkt arbeiten oder noch einen Master anschließen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das deutsche Hochschulsystem: Vom Humboldtschen Bildungsideal zum Bologna-Prozess",
        intro:
          "Wilhelm von Humboldt, Bologna-Reform und gebührenfreies Studieren in Deutschland (B1).",
        paragraphs: [
          [
            "Die deutsche Universitätstradition wurde maßgeblich durch Wilhelm von Humboldt und das von ihm formulierte Bildungsideal geprägt: die unauflösliche Einheit von Forschung und Lehre sowie die akademische Freiheit der Studierenden.",
            "Hochschulen sollten keine reinen Berufsschulen sein, sondern Stätten zweckfreier wissenschaftlicher Wahrheitsfindung.",
          ],
          [
            "Um die Jahrtausendwende transformierte der europäische Bologna-Prozess die deutsche Hochschullandschaft grundlegend:",
            "Traditionelle Abschlüsse wie Diplom und Magister wurden durch das zweistufige System aus [der Bachelorabschluss, -̈e|Bachelorabschluss] und konsekutivem Master substituiert, gemessen in standardisierten ECTS-Leistungspunkten.",
          ],
          [
            "Ein weltweites Alleinstellungsmerkmal bleibt die Gebührenfreiheit: An fast allen staatlichen Universitäten in Deutschland zahlen einheimische und internationale Studierende keine Studiengebühren, sondern lediglich einen Semesterbeitrag inklusive Semesterticket.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Akademische Epistemologie, Drittmittelforschung und Exzellenzstrategie",
        intro:
          "Wissenschaftsfreiheit (Art. 5 Abs. 3 GG), Exzellenzcluster und Peer-Review-Verfahren (B2).",
        paragraphs: [
          [
            "Die verfassungsrechtliche Garantie der Freiheit von Wissenschaft, Forschung und Lehre (Artikel 5 Absatz 3 GG) konstituiert die institutionelle Autonomie der deutschen Hochschulen.",
            "Im Rahmen der bundesweiten 'Exzellenzstrategie' konkurrieren Spitzenuniversitäten um prestigeträchtige Exzellenzcluster und Milliardenförderungen zur Schärfung ihrer internationalen Forschungsprofile.",
          ],
          [
            "Die wissenschaftliche Praxis im Hauptstudium verlangt die Beherrschung rigoroser methodologischer Standards:",
            "Beim Verfassen einer wissenschaftlichen [die Hausarbeit, -en|Hausarbeit] oder Thesis müssen Studierende Primärquellen hermeneutisch erschließen, empirische Methoden anwenden und Zitationsstandards peinlich genau beachten, um Plagiatsvorwürfe auszuschließen.",
          ],
          [
            "Gleichzeitig forciert das Zusammenspiel von grundfinanzierten Planstellen und drittmittelakquirierten Forschungsprojekten (DFG, EU Horizon) den Wettbewerb im akademischen Mittelbau.",
            "Dies etabliert [die Universität, -en|die Universität] als Hochleistungsmotor transformativer gesellschaftlicher und technologischer Innovationen.",
          ],
        ],
      },
    },
  },
};

const bbPath = "src/data/vocabulary/bildung-und-beruf.json";
const bbData = JSON.parse(fs.readFileSync(bbPath, "utf8"));

for (const sec of bbData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(bbData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(bbPath, JSON.stringify(bbData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to bildung-und-beruf.json!");
