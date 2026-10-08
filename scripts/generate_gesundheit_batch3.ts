import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch3Data: Record<string, any> = {
  beim_augenoptiker: {
    description:
      "Brillen, Kontaktlinsen, Sehtest, Dioptrien, Gestelle, Kurzsichtigkeit und Weitsichtigkeit.",
    details: "Optik, Sehstärkenbestimmung, Brillengläser, Hornhaut und Augenprüfung (A1–B2)",
    arabicDescription:
      "عند أخصائي البصريات (Beim Augenoptiker): أخصائي البصريات والعيون، النظارات الطبية (Brille)، العدسات اللاصقة (Kontaktlinse)، قوة الإبصار والديوبتر (Sehstärke)، فحص النظر (Sehtest)، إطار النظارة (Brillengestell)، قصر النظر (Kurzsichtigkeit)، طول النظر (Weitsichtigkeit)، وقرنية العين والعدسات الزجاجية.",
    words: [
      {
        german: "der Augenoptiker, -",
        arabic: "أخصائي وفني البصريات وصانع النظارات",
        english: "optician",
        example: "Der freundliche Augenoptiker misst meine Sehstärke mit modernen Geräten.",
      },
      {
        german: "die Brille, -n",
        arabic: "النظارة الطبية أو الشمسية",
        english: "glasses, eyeglasses",
        example: "Ohne meine Brille kann ich die kleinen Buchstaben auf dem Schild nicht lesen.",
      },
      {
        german: "die Kontaktlinse, -n",
        arabic: "العدسة اللاصقة للعين",
        english: "contact lens",
        example: "Beim Sport trage ich lieber weiche Kontaktlinsen statt einer Brille.",
      },
      {
        german: "die Sehstärke (Dioptrie), -n",
        arabic: "قوة الإبصار ودرجة النظر (الديوبتر)",
        english: "visual acuity, prescription (diopters)",
        example: "Auf dem linken Auge hat sich meine Sehstärke um eine halbe Dioptrie verändert.",
      },
      {
        german: "der Sehtest, -s",
        arabic: "فحص واختبار حدة البصر",
        english: "eye test, vision test",
        example:
          "Für den Führerschein musste ich einen amtlichen Sehtest beim Optiker absolvieren.",
      },
      {
        german: "das Brillengestell, -e",
        arabic: "إطار / شناشيل النظارة (الفريم)",
        english: "eyeglass frame",
        example: "Sie probierte mehrere modische Brillengestelle aus Titan vor dem Spiegel an.",
      },
      {
        german: "die Kurzsichtigkeit (Sg.)",
        arabic: "قصر النظر (رؤية القريب بوضوح والبعيد بتشوش)",
        english: "nearsightedness, myopia",
        example: "Bei Kurzsichtigkeit braucht man eine Minus-Korrektur für die Ferne.",
      },
      {
        german: "die Weitsichtigkeit (Sg.)",
        arabic: "طول النظر (صعوبة رؤية الأشياء القريبة)",
        english: "farsightedness, hyperopia",
        example: "Im Alter macht sich oft eine beginnende Weitsichtigkeit beim Lesen bemerkbar.",
      },
      {
        german: "das Brillenetui, -s",
        arabic: "حافظة / علبة النظارة الصلبة",
        english: "glasses case",
        example:
          "Stecken Sie die Brille immer in das gepolsterte Brillenetui, um Kratzer zu vermeiden.",
      },
      {
        german: "die Hornhaut, -̈e",
        arabic: "قرنية العين الشفافة",
        english: "cornea",
        example: "Die Kontaktlinse schwimmt direkt auf dem dünnen Tränenfilm über der Hornhaut.",
      },
      {
        german: "das Brillenglas, -̈er",
        arabic: "عدسة النظارة الزجاجية أو البلاستيكية",
        english: "eyeglass lens",
        example:
          "Entspiegelte Brillengläser verhindern störende Lichtreflexe beim Autofahren in der Nacht.",
      },
      {
        german: "scharf sehen",
        arabic: "يرى بوضوح ودقة عالية",
        english: "to see sharply, to see clearly",
        example:
          "Mit der neuen Brille kann ich Straßenschilder in der Ferne endlich wieder scharf sehen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich brauche eine neue Brille",
        intro: "Einfache Sätze über Brille, Optiker und Augenprüfung (A1).",
        paragraphs: [
          [
            "In letzter Zeit sehe ich die Tafel nicht mehr gut.",
            "Ich gehe zu [der Augenoptiker, -|dem Augenoptiker] im Einkaufszentrum.",
            "Dort mache ich [der Sehtest, -s|einen Sehtest].",
          ],
          [
            "Ich schaue durch ein Gerät und lese kleine Buchstaben vor.",
            "Der Optiker sagt: 'Sie brauchen [die Brille, -n|eine Brille].'",
            "Ich suche [das Brillengestell, -e|ein schönes Brillengestell] aus.",
          ],
          ["Mit der neuen Brille kann ich alles wieder [scharf sehen|scharf sehen]."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Brille oder Kontaktlinsen?",
        intro: "Dioptrien, Linsen einsetzen und Etuis (A2).",
        paragraphs: [
          [
            "Weil ich unter leichter [die Kurzsichtigkeit (Sg.)|Kurzsichtigkeit] leide, trage ich seit meiner Jugend eine Sehhilfe.",
            "Letzte Woche ließ ich [die Sehstärke (Dioptrie), -n|meine Sehstärke] erneut überprüfen.",
          ],
          [
            "Der Optiker empfahl mir entspiegelte [das Brillenglas, -̈er|Brillengläser] mit Blaulichtfilter für die Computerarbeit.",
            "Für den Sommerurlaub kaufte ich mir außerdem [die Kontaktlinse, -n|Kontaktlinsen], damit ich beim Schwimmen keine Brille brauche.",
          ],
          [
            "Zu Hause liegt meine Brille sicher im gepolsterten [das Brillenetui, -s|Brillenetui] auf dem Nachttisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Refraktive Optik und moderner Sehkomfort",
        intro: "Astigmatismus, Hornhautkrümmung und Gleitsichtgläser (B1).",
        paragraphs: [
          [
            "Gutes Sehen ist eine fundamentale Voraussetzung für Lebensqualität und Verkehrssicherheit.",
            "Wenn sich mit den Jahren [die Weitsichtigkeit (Sg.)|eine Weitsichtigkeit] oder eine unregelmäßige Krümmung von [die Hornhaut, -̈e|der Hornhaut] einstellt, ist fachkundige Beratung unverzichtbar.",
          ],
          [
            "Moderne [der Augenoptiker, -|Augenoptiker] nutzen computergestützte Wellenfront-Analysen, um maßgeschneiderte Gleitsichtgläser anzufertigen.",
          ],
          ["So wird stufenloses Scharfsehen im Nah-, Zwischen- und Fernbereich gewährleistet."],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Ophthalmologische Messtechnik, Akkommodation und refraktive Chirurgie",
        intro: "Dioptrien-Korrektur, Presbyopie und Lasertherapien (Femto-LASIK) (B2).",
        paragraphs: [
          [
            "Die optische Korrektur von Refraktionsfehlern beruht auf der präzisen Verschiebung des Fokalpunkts auf die Retina.",
            "Bei [die Kurzsichtigkeit (Sg.)|axialer Myopie] verlängert sich der Bulbus, sodass Zerstreuungslinsen mit negativen Dioptriewerten die Brechkraft kompensieren müssen.",
          ],
          [
            "Fortschritte in der Materialwissenschaft ermöglichen ultra-dünne hochbrechende [das Brillenglas, -̈er|Kunststoffgläser], die selbst bei ausgeprägten Ametropien geringes Gewicht und minimale Randverzerrungen aufweisen.",
          ],
          [
            "Parallel dazu bieten laserrefraktive Verfahren (LASIK, SMILE) durch gezielte Ablation von [die Hornhaut, -̈e|Hornhautgewebe] dauerhafte Alternativen zu [die Brille, -n|Brillen] und Kontaktlinsen.",
          ],
        ],
      },
    },
  },

  die_chirurgie: {
    description: "Chirurgie, Chirurgen, OP-Saal, Narkose, Skalpell, Operationen und Nachsorge.",
    details:
      "Operative Medizin, Vollnarkose, Wundverschluss, Asepsis und Intensivüberwachung (A1–B2)",
    arabicDescription:
      "الجراحة والعمليات الجراحية (Die Chirurgie): علم الجراحة، الجرّاح (Chirurg)، العملية الجراحية (Operation/OP)، غرفة العمليات (OP-Saal)، التخدير العام والبنج (Narkose)، المشرط الجراحي (Skalpell)، الخياطة الجراحية (chirurgische Naht)، التعقيم، غرفة العناية المركزة (Intensivstation)، ومرحلة ما بعد الجراحة (Nachsorge).",
    words: [
      {
        german: "die Chirurgie (Sg.)",
        arabic: "علم وجراحة الطب البشري",
        english: "surgery (medical specialty)",
        example: "Die Chirurgie hat durch minimalinvasive Methoden enorme Fortschritte gemacht.",
      },
      {
        german: "der Chirurg, -en",
        arabic: "الطبيب الجراح",
        english: "surgeon",
        example: "Der erfahrene Chirurg operierte den Patienten mit ruhiger, präziser Hand.",
      },
      {
        german: "die Operation, -en",
        arabic: "العملية الجراحية (OP)",
        english: "operation, surgical procedure, surgery",
        example: "Die dreistündige Operation verlief ohne unvorhergesehene Zwischenfälle.",
      },
      {
        german: "der Operationssaal, -̈e",
        arabic: "غرفة / قاعة العمليات الجراحية المعقمة",
        english: "operating room, OR",
        example: "Im sterilen Operationssaal herrschen strengste Hygienevorschriften.",
      },
      {
        german: "die Narkose, -n",
        arabic: "التخدير العام والبنج الكامل",
        english: "anesthesia, general anesthesia",
        example: "Vor dem Eingriff klärte der Anästhesist den Patienten über die Narkose auf.",
      },
      {
        german: "das Skalpell, -e",
        arabic: "المشرط الجراحي الحاد",
        english: "scalpel",
        example: "Mit einem feinen Skalpell setzte der Operateur einen kleinen, präzisen Schnitt.",
      },
      {
        german: "die chirurgische Naht, -̈e",
        arabic: "الغرزة والخياطة الجراحية للجرح",
        english: "surgical suture, stitch",
        example: "Nach zehn Tagen werden die Fäden der chirurgischen Naht gezogen.",
      },
      {
        german: "die Desinfektion, -en",
        arabic: "التطهير والتعقيم الطبي",
        english: "disinfection",
        example: "Vor jedem Schnitt erfolgt eine gründliche Desinfektion des OP-Feldes.",
      },
      {
        german: "operieren",
        arabic: "يجري عملية جراحية",
        english: "to operate on, to perform surgery",
        example: "Das Ärzteteam wird den gebrochenen Oberschenkelknochen morgen früh operieren.",
      },
      {
        german: "die Intensivstation, -en",
        arabic: "وحدة العناية المركزة والمشددة (ICU)",
        english: "intensive care unit (ICU)",
        example:
          "Nach der schweren Herz-OP wurde der Patient zur Überwachung auf die Intensivstation verlegt.",
      },
      {
        german: "die Nachsorge (Sg.)",
        arabic: "الرعاية والمتابعة الطبية اللاحقة بعد العملية",
        english: "aftercare, follow-up care",
        example: "Eine lückenlose Nachsorge fördert die Wundheilung und beugt Thrombosen vor.",
      },
      {
        german: "steril (Adj.)",
        arabic: "معقم تماماً وخالٍ من الجراثيم",
        english: "sterile, aseptic",
        example: "Alle Instrumente und Handschuhe im OP müssen absolut steril sein.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Im Krankenhaus: Die Operation",
        intro: "Einfache Sätze über Ärzte, Operation und Schlafen im OP (A1).",
        paragraphs: [
          [
            "Mein Onkel ist im Krankenhaus.",
            "Heute hat er [die Operation, -en|eine wichtige Operation] am Knie.",
            "[der Chirurg, -en|Ein freundlicher Chirurg] wird ihn [operieren|operieren].",
          ],
          [
            "Im [der Operationssaal, -̈e|Operationssaal] ist alles sauber und weiß.",
            "Vor dem Start bekommt er [die Narkose, -n|eine Narkose] und schläft tief ein.",
            "Er spürt überhaupt keine Schmerzen.",
          ],
          ["Nach zwei Stunden wacht er glücklich auf seinem Zimmer auf."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Gut versorgt nach dem Eingriff",
        intro: "Vollnarkose, Wundnähte und postoperative Nachsorge (A2).",
        paragraphs: [
          [
            "Vor der Operation hatte ich verständlicherweise etwas Angst.",
            "Doch das OP-Team erklärte mir jeden Schritt ganz ruhig.",
          ],
          [
            "Nachdem das OP-Feld sorgfältig vorbereitet war, begann die Behandlung.",
            "Als ich aufwachte, war die Wunde bereits mit einer sauberen [die chirurgische Naht, -̈e|chirurgischen Naht] verschlossen.",
          ],
          [
            "Die ersten Stunden verbrachte ich zur Sicherheit im Aufwachraum.",
            "In den nächsten Wochen kümmert sich mein Hausarzt um die weitere [die Nachsorge (Sg.)|Nachsorge] und den Verbandswechsel.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Moderne Chirurgie und Patientensicherheit",
        intro: "Schlüsselloch-Chirurgie, Sterilität und Anästhesie-Monitoring (B1).",
        paragraphs: [
          [
            "Die moderne [die Chirurgie (Sg.)|Chirurgie] hat sich von großen, invasiven Eingriffen weitgehend zu schonenden minimalinvasiven Techniken weiterentwickelt.",
            "Im [der Operationssaal, -̈e|Operationssaal] müssen sämtliche Instrumente absolut [steril (Adj.)|steril] sein, um postoperative Infektionen im Keim zu ersticken.",
          ],
          [
            "Während der Operateur mit mikrochirurgischem Besteck oder [das Skalpell, -e|dem Skalpell] arbeitet, überwacht der Narkosearzt alle Vitalfunktionen unter [die Narkose, -n|der Vollnarkose].",
          ],
          [
            "Bei schweren Eingriffen erfolgt die temporäre Weiterbehandlung auf [die Intensivstation, -en|der Intensivstation], bevor der Patient auf die Normalstation verlegt wird.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Robotikassistenz, perioperatives Risikomanagement und Geweberegeneration",
        intro: "Da-Vinci-Operationssysteme, Fast-Track-Rehabilitation und Asepsis (B2).",
        paragraphs: [
          [
            "In universitären Zentren hat die roboterassistierte Hochpräzisionschirurgie die Grenzen manueller Schnittführung neu definiert.",
            "Hochauflösende 3D-Kamerasysteme und Instrumente mit sieben Freiheitsgraden ermöglichen dem [der Chirurg, -en|Chirurgen] die millimetergenaue Schonung vulnerabler Nervenbahnen im kleinen Becken.",
          ],
          [
            "Das perioperative Konzept der 'Fast-Track-Rehabilitation' forciert eine frühzeitige Mobilisation und enterale Ernährung, wodurch Liegezeiten verkürzt werden.",
          ],
          [
            "Ein multimodales Schmerzmanagement in Verbindung mit strukturierter [die Nachsorge (Sg.)|Nachsorge] senkt die Morbiditätsrate signifikant und optimiert funktionelle Behandlungsergebnisse.",
          ],
        ],
      },
    },
  },

  die_unfallstation: {
    description: "Notaufnahme, Notarzt, Rettungswagen, Blaulicht, Sirene, Trage und Triage.",
    details: "Notfallmedizin, Erstversorgung, Schockraum, Rettungsdienst und Reanimation (A1–B2)",
    arabicDescription:
      "قسم الطوارئ والإسعاف (Die Unfallstation): قسم الطوارئ (Notaufnahme)، طبيب الطوارئ (Notarzt)، سيارة الإسعاف (Rettungswagen)، الضوء الأزرق (Blaulicht)، صفارة الإنذار (Sirene)، نقالة المرضى (Trage)، حالة الطوارئ (Notfall)، الرعاية الأولية الفورية، تصنيف الحالات وفرزها (Triage)، والإنعاش القلبي الرئوي (Wiederbelebung).",
    words: [
      {
        german: "die Notaufnahme, -n",
        arabic: "قسم الطوارئ والاستقبال العاجل بالمستشفى",
        english: "emergency room (ER), emergency department",
        example:
          "Schwer verletzte Personen werden direkt in die Notaufnahme des Krankenhauses gebracht.",
      },
      {
        german: "der Notarzt, -̈e",
        arabic: "طبيب الطوارئ والإسعاف المتنقل",
        english: "emergency doctor, emergency physician",
        example:
          "Der Notarzt traf innerhalb von acht Minuten am Unfallort ein und stabilisierte den Patienten.",
      },
      {
        german: "der Rettungswagen, -",
        arabic: "سيارة الإسعاف المجهزة طبياً",
        english: "ambulance",
        example:
          "Mit Blaulicht und Martinshorn bahnte sich der Rettungswagen einen Weg durch den dichten Verkehr.",
      },
      {
        german: "das Blaulicht, -er",
        arabic: "الضوء الأزرق التحذيري لمركبات الطوارئ",
        english: "flashing blue light, emergency lights",
        example:
          "Das Blaulicht signalisierte den Autofahrern, sofort eine Rettungsgasse zu bilden.",
      },
      {
        german: "die Sirene, -n",
        arabic: "صفارة الإنذار الصوتية (بوق الإسعاف)",
        english: "siren",
        example: "Von Weitem hörte man die laute Sirene der herannahenden Einsatzkräfte.",
      },
      {
        german: "die Krankentrage, -n",
        arabic: "نقالة نقل المرضى والمصابين",
        english: "stretcher, gurney",
        example:
          "Die Sanitäter schoben den Verletzten vorsichtig auf der Krankentrage in die Klinik.",
      },
      {
        german: "der medizinische Notfall, -̈e",
        arabic: "حالة الطوارئ الطبية الحرجة",
        english: "medical emergency",
        example:
          "Bei Verdacht auf einen Herzinfarkt liegt ein lebensbedrohlicher medizinischer Notfall vor.",
      },
      {
        german: "die Erstversorgung, -en",
        arabic: "الرعاية الطبية الأولية الفورية في موقع الحادث",
        english: "initial emergency treatment, first-line care",
        example:
          "Nach der erfolgreichen Erstversorgung vor Ort transportierte man die Frau in den Schockraum.",
      },
      {
        german: "die Triage (Sg.)",
        arabic: "نظام فرز وتصنيف أولويات علاج المصابين (ترياج)",
        english: "triage",
        example:
          "In der Notaufnahme entscheidet die Triage nach Dringlichkeit über die Reihenfolge der Behandlung.",
      },
      {
        german: "die Wiederbelebung, -en",
        arabic: "الإنعاش القلبي الرئوي (CPR)",
        english: "resuscitation, CPR",
        example:
          "Dank der sofortigen Wiederbelebung durch Ersthelfer überlebte der Mann den Herzstillstand.",
      },
      {
        german: "die Notfallambulanz, -en",
        arabic: "عيادة الإسعاف والطوارئ للحالات العاجلة",
        english: "emergency outpatient clinic",
        example:
          "Am Wochenende hat die kassenärztliche Notfallambulanz für dringende Fälle geöffnet.",
      },
      {
        german: "die Rettungsgasse, -n",
        arabic: "مسار الطوارئ بين مسارات السيارات على الطريق",
        english: "emergency corridor, rescue lane",
        example:
          "Bei stockendem Verkehr müssen alle Fahrzeuge sofort eine freie Rettungsgasse bilden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Hilfe mit Blaulicht",
        intro: "Einfache Sätze über Krankenwagen, Notarzt und Sirene (A1).",
        paragraphs: [
          [
            "Auf der Straße ist ein Unfall passiert.",
            "Ein Auto ruft die Notrufnummer 112 an.",
            "Schnell kommt [der Rettungswagen, -|ein Rettungswagen] mit lautem [das Blaulicht, -er|Blaulicht].",
          ],
          [
            "Wir hören [die Sirene, -n|die laute Sirene] schon von weitem.",
            "[der Notarzt, -̈e|Der Notarzt] steigt aus und hilft dem Verletzten.",
            "Er legt den Mann vorsichtig auf [die Krankentrage, -n|eine Krankentrage].",
          ],
          [
            "Das Auto fährt schnell in [die Notaufnahme, -n|die Notaufnahme].",
            "Dort helfen die Ärzte sofort.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Notfall in der Nacht",
        intro: "In die Notaufnahme fahren, Triage und Erste Hilfe (A2).",
        paragraphs: [
          [
            "Mitten in der Nacht bekam mein Nachbar plötzlich starke Brustschmerzen und Atemnot.",
            "Wir erkannten sofort: Das ist [der medizinische Notfall, -̈e|ein akuter medizinischer Notfall]!",
          ],
          [
            "Der Notarzt leitete noch im Wohnzimmer [die Erstversorgung, -en|die Erstversorgung] ein und verabreichte Sauerstoff.",
            "Im Krankenhaus angekommen, wurden wir direkt in [die Notaufnahme, -n|die Notaufnahme] gebracht.",
            "Durch das System [die Triage (Sg.)|der Triage] wurde er sofort als Notfallpatient eingestuft und ohne Wartezeit untersucht.",
          ],
          ["Die schnelle Hilfe hat ihm das Leben gerettet."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Rettungskette und Schockraum-Management",
        intro: "Zusammenspiel von Notruf, Rettungsdienst und klinischer Akutversorgung (B1).",
        paragraphs: [
          [
            "Die Effizienz der Rettungskette entscheidet bei polytraumatisierten Patienten über Leben und Tod.",
            "Auf der Autobahn sind Autofahrer gesetzlich verpflichtet, bei Stau vorausschauend [die Rettungsgasse, -n|eine freie Rettungsgasse] zu bilden, um Einsatzfahrzeugen freie Fahrt zu gewährleisten.",
          ],
          [
            "Bei einem Herz-Kreislauf-Stillstand zählt jede Sekunde: Die unverzügliche [die Wiederbelebung, -en|Wiederbelebung] durch Passanten überbrückt die Zeit bis zum Eintreffen von [der Notarzt, -̈e|dem Notarzt].",
          ],
          [
            "In [die Notaufnahme, -n|der Notaufnahme] übernimmt das interdisziplinäre Schockraumteam nahtlos die Weiterbehandlung nach ATLS-Standards.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Klinische Akutmedizin, Manchester-Triage-System und Schockraum-Algorithmen",
        intro: "Schockraumversorgung, Advanced Life Support und präklinische Notfallmedizin (B2).",
        paragraphs: [
          [
            "Zentrale Notaufnahmen (ZNA) fungieren als hochspezialisierte Schnittstellen zwischen präklinischer Rettungsmedizin und stationärer Maximalversorgung.",
            "Zur Priorisierung von Patientenströmen kommt flächendeckend das Manchester-Triage-System zum Einsatz, das Vitalbedrohungen binnen Sekunden farblich kategorisiert.",
          ],
          [
            "Im Schockraum gewährleistet das Zusammenspiel von Unfallchirurgie, Anästhesie und Radiologie eine simultane Computertomografie ('Trauma-Scan') unter laufendem Advanced Life Support.",
          ],
          [
            "Die kontinuierliche Weiterentwicklung von Tele-Notarzt-Systemen optimiert die Versorgungsqualität im ländlichen Raum nachhaltig.",
          ],
        ],
      },
    },
  },

  die_apotheke: {
    description:
      "Apotheke, Apotheker, Medikamente, Tabletten, Salben, Beipackzettel und Dosierung.",
    details:
      "Arzneimittelabgabe, Rezeptpflicht, Schmerzmittel, Tropfen und pharmazeutische Beratung (A1–B2)",
    arabicDescription:
      "الصيدلية والأدوية (Die Apotheke): الصيدلية (Apotheke)، الصيدلي (Apotheker)، الأدوية والعقاقير (Medikament)، الأقراص والحبوب (Tablette)، المراهم الجلدية (Salbe)، شراب السعال (Hustensaft)، النشرة الدوائية المرفقة (Packungsbeilage/Beipackzettel)، الآثار الجانبية (Nebenwirkung)، والجرعة الدوائية (Dosierung).",
    words: [
      {
        german: "die Apotheke, -n",
        arabic: "الصيدلية (رمز الحرف A الأحمر في ألمانيا)",
        english: "pharmacy, chemist's, drugstore",
        example: "An dem großen roten 'A' erkennt man in Deutschland jede Apotheke sofort.",
      },
      {
        german: "der Apotheker, -",
        arabic: "الصيدلي المؤهل علمياً",
        english: "pharmacist, chemist",
        example: "Der Apotheker berät mich ausführlich über die richtige Einnahme des Mittels.",
      },
      {
        german: "das Medikament, -e",
        arabic: "الدواء والعقار الطبي",
        english: "medication, medicine, drug",
        example: "Nehmen Sie dieses wirksame Medikament bitte stets nach den Mahlzeiten ein.",
      },
      {
        german: "die Tablette, -n",
        arabic: "القرص الدوائي / الحبة",
        english: "tablet, pill",
        example: "Schlucken Sie die Tablette unzerkaut mit einem großen Glas Wasser.",
      },
      {
        german: "die Salbe, -n",
        arabic: "المرهم / الدهان الطبي الموضعي",
        english: "ointment, cream, salve",
        example: "Die kühlende Salbe lindert den Juckreiz des Mückenstichs sofort.",
      },
      {
        german: "der Hustensaft, -̈e",
        arabic: "شراب علاج السعال والكحة",
        english: "cough syrup",
        example: "Ein Löffel pflanzlicher Hustensaft beruhigt den Reizhusten vor dem Schlafen.",
      },
      {
        german: "die Packungsbeilage, -n",
        arabic: "النشرة الطبية المرفقة بعلبة الدواء (البانفليت)",
        english: "package insert, patient leaflet",
        example: "Lesen Sie vor der Anwendung aufmerksam die Packungsbeilage durch.",
      },
      {
        german: "die Nebenwirkung, -en",
        arabic: "الأثر والعرَض الجانبي للدواء",
        english: "side effect",
        example: "Zu den bekannten Nebenwirkungen gehören leichte Müdigkeit und Schwindel.",
      },
      {
        german: "die Dosierung, -en",
        arabic: "الجرعة الدوائية المحددة",
        english: "dosage",
        example: "Halten Sie sich strikt an die verordnete Dosierung von zwei Kapseln täglich.",
      },
      {
        german: "die Tropfen (Pl.)",
        arabic: "القطرات الدوائية السائلة (للعين أو الفم)",
        english: "drops (medicine)",
        example: "Geben Sie dreimal täglich fünf Tropfen in das entzündete Auge.",
      },
      {
        german: "das Schmerzmittel, -",
        arabic: "المسكّن الدوائي لتسكين الآلام",
        english: "painkiller, pain reliever",
        example: "Ibuprofen ist ein weit verbreitetes Schmerzmittel gegen Kopfschmerzen.",
      },
      {
        german: "rezeptpflichtig (Adj.)",
        arabic: "يصرف بوصفة طبية فقط (لا يباع دون روشتة)",
        english: "prescription-only, requiring a prescription",
        example: "Starke Antibiotika sind in Deutschland ausnahmslos rezeptpflichtig.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Medikamente aus der Apotheke",
        intro: "Einfache Sätze über Apotheke, Tabletten und Medizin (A1).",
        paragraphs: [
          [
            "Ich habe Halsschmerzen und Husten.",
            "Ich gehe in [die Apotheke, -n|die Apotheke] an der Ecke.",
            "[der Apotheker, -|Der Apotheker] gibt mir [der Hustensaft, -̈e|einen süßen Hustensaft] und Tabletten gegen Schmerzen.",
          ],
          [
            "Ich nehme [die Tablette, -n|eine Tablette] mit einem Glas Wasser ein.",
            "Auf die Wunde an der Hand schmiere ich [die Salbe, -n|eine weiße Salbe].",
            "Morgen geht es mir bestimmt schon viel besser.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Das Rezept vom Arzt einlösen",
        intro: "Rezeptpflichtige Medikamente, Dosierung und Packungsbeilage (A2).",
        paragraphs: [
          [
            "Nach meinem Arztbesuch ging ich direkt in die Apotheke, um mein Rezept einzulösen.",
            "Weil das Medikament [rezeptpflichtig (Adj.)|rezeptpflichtig] war, brauchte ich die ärztliche Verordnung.",
          ],
          [
            "Die Pharmazeutin erklärte mir genau die richtige [die Dosierung, -en|Dosierung]: eine Tablette morgens und abends.",
            "Sie riet mir außerdem, vor der Einnahme [die Packungsbeilage, -n|die Packungsbeilage] zu lesen, um mögliche [die Nebenwirkung, -en|Nebenwirkungen] zu kennen.",
          ],
          [
            "Zusätzlich kaufte ich mir [das Schmerzmittel, -|ein Schmerzmittel] für meine Kopfschmerzen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die pharmazeutische Beratungspflicht und Arzneimittelsicherheit",
        intro: "Wechselwirkungen, Notdienst und E-Rezept-Strukturen (B1).",
        paragraphs: [
          [
            "Apotheken in Deutschland erfüllen einen unverzichtbaren Versorgungsauftrag, der weit über den reinen Verkauf von Waren hinausgeht.",
            "Ein studierter [der Apotheker, -|Apotheker] überprüft verordnete [das Medikament, -e|Medikamente] gewissenhaft auf gefährliche Wechselwirkungen mit anderen Präparaten.",
          ],
          [
            "Besonders bei frei verkäuflichen Arzneien wie [die Tropfen (Pl.)|pflanzlichen Tropfen] oder Salben ist die fachkundige Aufklärung über Einnahmezeitpunkte und Kontraindikationen elementar.",
          ],
          [
            "Über den flächendeckenden Nacht- und Notdienst ist die Bevölkerung rund um die Uhr verlässlich mit lebenswichtigen Arzneimitteln versorgt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Pharmakovigilanz, Rezepturherstellung und das E-Rezept-Ökosystem",
        intro:
          "Arzneimittelinteraktionen, personalisierte Rezepturen und Telematikinfrastruktur (B2).",
        paragraphs: [
          [
            "Die Apotheke vor Ort bildet das Rückgrat der Pharmakovigilanz und Arzneimitteltherapiesicherheit (AMTS).",
            "Neben industriellen Fertigarzneimitteln stellen Offizinapotheken patientenindividuelle Rezepturen (Salben, Kapseln für Pädiatriepatienten) unter kontrollierten Reinraumbedingungen her.",
          ],
          [
            "Die Implementierung der bundesweiten Telematikinfrastruktur erlaubt das kontaktlose Auslesen von E-Rezepten via Versichertenkarte, wodurch Fälschungsrisiken bei [rezeptpflichtig (Adj.)|rezeptpflichtigen Substanzen] eliminiert werden.",
          ],
          [
            "Gleichzeitig sensibilisiert der Pharmazeut Patienten für das Risikoprofil seltener [die Nebenwirkung, -en|unerwünschter Arzneimittelwirkungen] im Rahmen chronischer Polypharmazie.",
          ],
        ],
      },
    },
  },

  die_alternativmedizin: {
    description:
      "Alternativmedizin, Heilpraktiker, Akupunktur, Homöopathie, Naturheilkunde und Phytotherapie.",
    details:
      "Komplementärmedizin, Osteopathie, Ganzheitlichkeit, Kräutermedizin und Selbstheilung (A1–B2)",
    arabicDescription:
      "الطب البديل والتكميلي (Die Alternativmedizin): الطب البديل (Alternativmedizin)، المعالج الطبيعي المرخص (Heilpraktiker)، الوخز بالإبر الصينية (Akupunktur)، المعالجة المثلية (Homöopathie)، طب الأعشاب والعلاج الطبيعي (Naturheilkunde)، طب العظام (Osteopathie)، العلاج الشمولي (Ganzheitlichkeit)، شاي الأعشاب، وقدرات الشفاء الذاتي للجسم.",
    words: [
      {
        german: "die Alternativmedizin (Sg.)",
        arabic: "الطب البديل والتكميلي",
        english: "alternative medicine, complementary medicine",
        example: "Viele chronisch kranke Menschen suchen Hilfe in Methoden der Alternativmedizin.",
      },
      {
        german: "der Heilpraktiker, -",
        arabic: "المعالج الشعبي والطبيعي المرخص قانوناً بألمانيا",
        english: "naturopath, alternative medical practitioner",
        example:
          "In Deutschland darf ein staatlich geprüfter Heilpraktiker ohne Medizinstudium behandeln.",
      },
      {
        german: "die Akupunktur (Sg.)",
        arabic: "الوخز بالإبر الصينية التقليدية",
        english: "acupuncture",
        example: "Die feine Akupunktur entlang der Meridiane soll Blockaden im Energiefluss lösen.",
      },
      {
        german: "die Homöopathie (Sg.)",
        arabic: "المعالجة المثلية (الهوميوباثي بالجلوبولي)",
        english: "homeopathy",
        example:
          "Die Homöopathie arbeitet mit stark verdünnten Wirkstoffen nach dem Ähnlichkeitsprinzip.",
      },
      {
        german: "die Naturheilkunde (Sg.)",
        arabic: "الطب الطبيعي والعلاج بوسائل الطبيعة",
        english: "naturopathy",
        example:
          "Kneipp-Güsse und Heilkräuter sind bewährte Säulen der traditionellen Naturheilkunde.",
      },
      {
        german: "die Osteopathie (Sg.)",
        arabic: "طب تقويم العظام والأنسجة اليدوي (الأوستيوباثي)",
        english: "osteopathy",
        example:
          "Durch sanfte Handgriffe löst der Therapeut in der Osteopathie tiefe Gewebespannungen.",
      },
      {
        german: "die Ganzheitlichkeit (Sg.)",
        arabic: "النظرة الشمولية المتكاملة للجسد والنفس",
        english: "holism, holistic approach",
        example: "Die Ganzheitlichkeit betrachtet Körper, Geist und Lebensumstände als Einheit.",
      },
      {
        german: "die Akupunkturnadel, -n",
        arabic: "إبرة الوخز الصينية الدقيقة",
        english: "acupuncture needle",
        example: "Der Einstich der hauchdünnen Akupunkturnadel ist kaum zu spüren.",
      },
      {
        german: "der Kräutertee, -s",
        arabic: "شاي الأعشاب الطبية (البابونج، النعناع)",
        english: "herbal tea",
        example:
          "Ein warmer Kamillen-Kräutertee beruhigt den gereizten Magen auf natürliche Weise.",
      },
      {
        german: "die Selbstheilungskraft, -̈e",
        arabic: "قدرة وقوة الجسم على الشفاء الذاتي",
        english: "self-healing powers, innate healing capacity",
        example: "Gesunde Ernährung und Ruhe aktivieren die körpereigenen Selbstheilungskräfte.",
      },
      {
        german: "die Phytotherapie (Sg.)",
        arabic: "العلاج بالنباتات والأعشاب الطبية المثبتة علمياً",
        english: "phytotherapy, herbal medicine",
        example: "In der Phytotherapie werden wirksame Pflanzenauszüge standardisiert verabreicht.",
      },
      {
        german: "das Globuli, -",
        arabic: "حبيبات السكر الصغيرة في الهوميوباثي",
        english: "globules (homeopathic sugar pellets)",
        example: "Sie nahm drei kleine weiße Globuli vor dem Schlafengehen ein.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Tee und Natur für die Gesundheit",
        intro: "Einfache Sätze über Kräutertee, Natur und Entspannung (A1).",
        paragraphs: [
          [
            "Wenn ich krank bin, trinke ich viel [der Kräutertee, -s|heißen Kräutertee].",
            "Pfefferminze und Kamille tun meinem Bauch gut.",
            "Die Natur hat viele gute Pflanzen für uns.",
          ],
          [
            "Meine Freundin geht zu einer Praxis für [die Naturheilkunde (Sg.)|Naturheilkunde].",
            "Dort bekommt sie sanfte Hilfe ohne schwere Chemie.",
            "Unser Körper hat starke [die Selbstheilungskraft, -̈e|Selbstheilungskräfte].",
          ],
          ["Ruhe, frische Luft und gesunder Schlaf helfen immer."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Meine erste Akupunktur-Sitzung",
        intro: "Traditionelle Chinesische Medizin, Nadeln und Heilpraktiker (A2).",
        paragraphs: [
          [
            "Weil meine Rückenschmerzen nicht verschwinden wollten, empfahl mir eine Kollegin [der Heilpraktiker, -|einen Heilpraktiker].",
            "Er schlug mir eine Behandlung mit [die Akupunktur (Sg.)|Akupunktur] vor.",
          ],
          [
            "Ich legte mich auf eine bequeme Liege.",
            "Vorsichtig setzte er an bestimmten Punkten [die Akupunkturnadel, -n|feine Akupunkturnadeln] in die Haut.",
            "Nach zwanzig Minuten fühlte ich eine angenehme Wärme im Rücken und die Verspannungen ließen nach.",
          ],
          ["Ich war positiv überrascht von dieser Methode."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Schulmedizin und Komplementärmedizin im Dialog",
        intro: "Integrative Medizin, Evidenz und ganzheitliche Behandlungsansätze (B1).",
        paragraphs: [
          [
            "Immer mehr Mediziner befürworten heute eine sinnvolle Synthese aus universitärer Schulmedizin und fundierter [die Alternativmedizin (Sg.)|Komplementärmedizin].",
            "Während akute Notfälle zwingend in die Hände der Notfallmedizin gehören, bietet [die Ganzheitlichkeit (Sg.)|Ganzheitlichkeit] wertvolle Impulse bei chronischen Schmerzsyndromen.",
          ],
          [
            "Methoden wie [die Osteopathie (Sg.)|Osteopathie] und evidenzbasierte [die Phytotherapie (Sg.)|Phytotherapie] mobilisieren körpereigene [die Selbstheilungskraft, -̈e|Selbstheilungskräfte] und werden von vielen gesetzlichen Krankenkassen bezuschusst.",
          ],
          [
            "Verfahren wie [die Homöopathie (Sg.)|die Homöopathie] stehen wegen mangelnder wissenschaftlicher Wirksamkeitsnachweise über den Placebo-Effekt hinaus in der Kritik, erfreuen sich aber ungebrochener Beliebtheit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Wissenschaftstheoretische Kontroversen, Placeboforschung und Phytopharmakologie",
        intro:
          "Evidenzbasierte Kriterien, klinische Studien und psychosomatische Dimensionen (B2).",
        paragraphs: [
          [
            "Die wissenschaftstheoretische Beurteilung alternativer Heilmethoden erfordert eine differenzierte methodische Betrachtung.",
            "Während die rationale [die Phytotherapie (Sg.)|Phytotherapie] durch doppelblinde, randomisierte Studien pharmakologische Wirkmechanismen (z. B. Hyperforin im Johanniskraut) nachweist, operiert [die Homöopathie (Sg.)|die klassische Homöopathie] jenseits der Avogadro-Konstante.",
          ],
          [
            "Moderne Placeboforschung belegt jedoch eindrucksvoll, dass empathische Zuwendung durch [der Heilpraktiker, -|den Therapeuten] messbare neuroendokrine Reaktionen und Schmerzlinderung triggert.",
          ],
          [
            "Zukunftsträchtige Versorgungsmodelle integrieren wirksame Naturheilverfahren in standardisierte klinische Pfade ('Integrative Onkologie').",
          ],
        ],
      },
    },
  },

  wellness: {
    description: "Sauna, Massage, Dampfbad, Whirlpool, Thermalbad, Aromatherapie und Regeneration.",
    details: "Spa, Erholung, Selbstfürsorge, Aufguss, Stressabbau und gesundes Entspannen (A1–B2)",
    arabicDescription:
      "الاستجمام والعافية (Wellness): السبا والاستجمام (Wellness)، الساونا الفنلندية (Sauna)، التدليك والمساج (Massage)، حمام البخار (Dampfbad)، حوض الجاكوزي (Whirlpool)، الاسترخاء العميق (Entspannung)، الحمامات الحرارية المعدنية (Thermalbad)، أقنعة الوجه، الزيوت العطرية، وإعادة شحن الطاقة البدنية والنفسية.",
    words: [
      {
        german: "das Wellness (Sg.)",
        arabic: "الاستجمام والعناية بالصحة والعافية (السبا)",
        english: "wellness, spa",
        example: "Ein Wellness-Wochenende in den Bergen bringt neue Energie für den Alltag.",
      },
      {
        german: "die Sauna, Saunen",
        arabic: "حمام الساونا الحراري الفنلندي",
        english: "sauna",
        example: "In der heißen Sauna schwitzen die Besucher bei neunzig Grad Celsius.",
      },
      {
        german: "die Massage, -n",
        arabic: "التدليك الطبي والمساج",
        english: "massage",
        example: "Eine kräftige Massage löst die tiefen Muskelverspannungen im Schulterbereich.",
      },
      {
        german: "das Dampfbad, -̈er",
        arabic: "حمام البخار الرطب (الحمام التركي)",
        english: "steam bath, steam room",
        example: "Der warme feuchte Nebel in dem Dampfbad befreit die Atemwege spürbar.",
      },
      {
        german: "der Whirlpool, -s",
        arabic: "حوض التدليك المائي الساخن (الجاكوزي)",
        english: "whirlpool, hot tub, jacuzzi",
        example: "Im blubbernden warmen Wasser von dem Whirlpool kann man herrlich abschalten.",
      },
      {
        german: "die Entspannung, -en",
        arabic: "الاسترخاء والراحة النفسية والجسدية",
        english: "relaxation",
        example: "Sanfte Musik und gedämpftes Licht fördern eine tiefe körperliche Entspannung.",
      },
      {
        german: "das Thermalbad, -̈er",
        arabic: "حمام المياه المعدنية الحارة (المصحة الحرارية)",
        english: "thermal bath, hot spring spa",
        example:
          "Das mineralstoffreiche Wasser in dem Thermalbad lindert rheumatische Beschwerden.",
      },
      {
        german: "die Erholung (Sg.)",
        arabic: "النقاهة والراحة واستعادة الحيوية",
        english: "recovery, rest, recreation",
        example: "Nach anstrengenden Prüfungen brauche ich ein paar Tage pure Erholung.",
      },
      {
        german: "die Gesichtsmaske, -n",
        arabic: "قناع العناية بالوجه ونضارة البشرة",
        english: "face mask (cosmetic)",
        example: "Eine feuchtigkeitsspendende Gesichtsmaske pflegt die trockene Haut im Winter.",
      },
      {
        german: "das Aromaöl, -e",
        arabic: "الزيت العطري الطبيعي للاسترخاء",
        english: "aroma oil, essential oil",
        example: "Der Duft von beruhigendem Lavendel-Aromaöl erfüllte den Ruheraum.",
      },
      {
        german: "die Auszeit, -en",
        arabic: "فترة الاستراحة والتوقف المؤقت عن ضغط العمل",
        english: "time-out, break",
        example: "Wir gönnen uns eine wohlverdiente Auszeit fernab von Termindruck und E-Mails.",
      },
      {
        german: "energie tanken",
        arabic: "يشحن طاقته وحيويته من جديد",
        english: "to recharge one's batteries",
        example: "Im Spa kann man wunderbar die Seele baumeln lassen und neue Energie tanken.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein erholsamer Tag im Spa",
        intro: "Einfache Sätze über Sauna, Massage und Entspannung (A1).",
        paragraphs: [
          [
            "Heute habe ich frei und mache [das Wellness (Sg.)|Wellness].",
            "Ich gehe in [die Sauna, Saunen|die heiße Sauna] und schwitze zehn Minuten.",
            "Danach dusche ich kalt ab.",
          ],
          [
            "Im Anschluss bekomme ich [die Massage, -n|eine wunderbare Massage] für meinen Rücken.",
            "Ich liege im warmen Wasser in [der Whirlpool, -s|dem Whirlpool].",
            "Es ist ruhig und ich spüre tiefe [die Entspannung, -en|Entspannung].",
          ],
          ["Hier kann ich neue [energie tanken|Energie tanken] für die ganze Woche."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Kurztrip ins Thermalbad",
        intro: "Thermalquellen, Dampfbäder und Aromaöle (A2).",
        paragraphs: [
          [
            "Am vergangenen Wochenende fuhr ich mit meiner besten Freundin in [das Thermalbad, -̈er|ein bekanntes Thermalbad].",
            "Das warme Wasser aus der natürlichen Heilquelle tat meinen Gelenken unglaublich gut.",
          ],
          [
            "Zwischendurch besuchten wir [das Dampfbad, -̈er|das Dampfbad] mit Eukalyptusduft, der die Bronchien reinigte.",
            "Nach einer entspannenden Behandlung mit [das Aromaöl, -e|warmem Aromaöl] machten wir ein langes Nickerchen im Ruheraum.",
          ],
          [
            "Diese kleine [die Auszeit, -en|Auszeit] brachte uns die nötige [die Erholung (Sg.)|Erholung] nach einer stressigen Arbeitsphase.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Kunst der Entschleunigung und moderne Badekultur",
        intro: "Kneipp-Prinzipien, Saunakultur und Burnout-Prävention (B1).",
        paragraphs: [
          [
            "In einer leistungsorientierten Gesellschaft wird bewusste Selbstfürsorge zur unverzichtbaren Gesundheitsvorsorge.",
            "Regelmäßige Besuche in [die Sauna, Saunen|der Sauna] trainieren das Herz-Kreislauf-System durch den Wechsel von Hyperthermie und Kältereiz.",
          ],
          [
            "Physiotherapeutische Anwendungen wie [die Massage, -n|Massagen] lösen myofasziale Verklebungen und senken den Spiegel des Stresshormons Cortisol im Blut.",
          ],
          [
            "Ein Tag in mineralreichen [das Thermalbad, -̈er|Thermalbädern] ermöglicht mentale Regeneration, um den Akku wieder aufzuladen und frische [energie tanken|Energie zu tanken].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Balneologie, Thermotherapie und vegetative Regeneration",
        intro: "Parasympathikus-Aktivierung, Balneotherapie und neurovegetative Entlastung (B2).",
        paragraphs: [
          [
            "Die wissenschaftliche Balneologie erforscht die therapeutischen Wirkungen mineralischer Thermalquellen auf den menschlichen Organismus.",
            "Thermalsole-Bäder entlasten das muskuloskelettale System durch hydrostatischen Auftrieb und modulieren immunologische Entzündungsmediatoren.",
          ],
          [
            "Thermotherapien aktivieren den Parasympathikus ('Rest and Digest'), regulieren den arteriellen Gefäßtonus und fördern [die Entspannung, -en|zentralnervöse Regeneration].",
          ],
          [
            "Moderne ganzheitliche Health-Resorts verbinden traditionsreiche Kurbad-Konzepte mit evidenzbasierten Stressmanagement-Programmen, um präventiv chronischen Erschöpfungssyndromen entgegenzuwirken.",
          ],
        ],
      },
    },
  },
};

const kgPath = "src/data/vocabulary/koerper-und-gesundheit.json";
const kgData = JSON.parse(fs.readFileSync(kgPath, "utf8"));

for (const sec of kgData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(kgData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(kgPath, JSON.stringify(kgData, null, 2) + "\n", "utf8");
console.log("Batch 3 successfully saved to koerper-und-gesundheit.json!");
