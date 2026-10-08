import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  die_geschlechtsorgane: {
    description:
      "Geschlechtsorgane, Fortpflanzung, Gynäkologie, Urologie und Vorsorgeuntersuchungen.",
    details: "Medizinische Anatomie, Reproduktionsbiologie, Hormone und Krebsfrüherkennung (A1–B2)",
    arabicDescription:
      "الأجهزة التناسلية والتناسل (Die Geschlechtsorgane): المصطلحات التشريحية الطبية، التكاثر والإنجاب (Fortpflanzung)، الرحم (Gebärmutter)، المبيض، البويضة، الخصية، الحيوانات المنوية، البروستاتا، الهرمونات، طب النساء (Gynäkologie)، طب المسالك البولية والذكورة (Urologie)، والفحوصات الدورية الوقائية.",
    words: [
      {
        german: "die Fortpflanzung (Sg.)",
        arabic: "التكاثر والإنجاب البشري",
        english: "reproduction, procreation",
        example: "Die biologische Fortpflanzung sichert das Überleben der menschlichen Art.",
      },
      {
        german: "die Geschlechtsorgane (Pl.)",
        arabic: "الأعضاء التناسلية (الذكرية والأنثوية)",
        english: "reproductive organs, genitals",
        example: "Die inneren und äußeren Geschlechtsorgane unterliegen hormoneller Steuerung.",
      },
      {
        german: "die Gebärmutter, -̈",
        arabic: "الرحم",
        english: "uterus, womb",
        example: "In der Gebärmutter wächst das ungeborene Kind während der Schwangerschaft heran.",
      },
      {
        german: "der Eierstock, -̈e",
        arabic: "المبيض لدى الأنثى",
        english: "ovary",
        example: "In den beiden Eierstöcken reifen monatlich fruchtbare Eizellen heran.",
      },
      {
        german: "die Eizelle, -n",
        arabic: "البويضة الأنثوية",
        english: "egg cell, ovum",
        example: "Bei der Befruchtung verschmilzt ein Spermium mit der reifen Eizelle.",
      },
      {
        german: "der Hoden, -",
        arabic: "الخصية لدى الذكر",
        english: "testicle, testis",
        example: "In den Hoden werden täglich Millionen beweglicher Samenzellen gebildet.",
      },
      {
        german: "das Spermium, Spermien",
        arabic: "الحيوان المنوي",
        english: "sperm cell, spermatozoon",
        example: "Das Spermium transportiert das väterliche Erbgut zur Eizelle.",
      },
      {
        german: "die Prostata (Sg.)",
        arabic: "غدة البروستاتا لدى الذكر",
        english: "prostate gland",
        example:
          "Männer ab fünfundvierzig Jahren sollten die Prostata regelmäßig untersuchen lassen.",
      },
      {
        german: "der Hormonhaushalt, -e",
        arabic: "التوازن الهرموني في الجسم",
        english: "hormonal balance, hormone levels",
        example: "Östrogen und Testosteron prägen den individuellen Hormonhaushalt.",
      },
      {
        german: "die Gynäkologie (Sg.)",
        arabic: "طب النساء والتوليد",
        english: "gynecology",
        example:
          "Die Gynäkologie befasst sich mit der Gesundheit des weiblichen Fortpflanzungssystems.",
      },
      {
        german: "die Urologie (Sg.)",
        arabic: "طب المسالك البولية والتناسلية",
        english: "urology",
        example: "Der Facharzt für Urologie behandelt Erkrankungen der ableitenden Harnwege.",
      },
      {
        german: "die Vorsorgeuntersuchung, -en",
        arabic: "الفحص الطبي الوقائي الدوري",
        english: "preventive check-up, screening",
        example:
          "Regelmäßige Vorsorgeuntersuchungen ermöglichen eine frühzeitige Erkennung von Tumoren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Gesundheit und der Körper",
        intro: "Einfache Sätze über Fachärzte, Gesundheit und Vorsorge (A1).",
        paragraphs: [
          [
            "Jeder Mensch hat einen einzigartigen Körper.",
            "Frauen und Männer haben unterschiedliche [die Geschlechtsorgane (Pl.)|Geschlechtsorgane].",
            "Diese Organe sind wichtig für das Leben und [die Fortpflanzung (Sg.)|die Fortpflanzung].",
          ],
          [
            "Für Frauen gibt es eine eigene Fachärztin in [die Gynäkologie (Sg.)|der Gynäkologie].",
            "Männer gehen bei Beschwerden in [die Urologie (Sg.)|die Urologie].",
            "Einmal im Jahr sollte man eine [die Vorsorgeuntersuchung, -en|Vorsorgeuntersuchung] machen lassen.",
          ],
          ["Gesundheit ist das Wichtigste im Leben."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Der Gang zum Facharzt",
        intro: "Vorsorge, Aufklärung und gesundheitliche Achtsamkeit (A2).",
        paragraphs: [
          [
            "In Deutschland legen Ärzte großen Wert auf präventive Untersuchungen.",
            "Frauenärzte untersuchen [die Gebärmutter, -̈|die Gebärmutter] und die Brust, um Krankheiten früh zu erkennen.",
          ],
          [
            "Auch Männer sollten ab einem bestimmten Alter zur Vorsorge gehen und [die Prostata (Sg.)|die Prostata] prüfen lassen.",
            "Wenn [der Hormonhaushalt, -e|der Hormonhaushalt] aus dem Gleichgewicht gerät, kann das zu Müdigkeit oder Stimmungsschwankungen führen.",
          ],
          ["Ein offenes Gespräch mit dem Arzt hilft, Ängste abzubauen und gesund zu bleiben."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Biologische Fortpflanzung und moderne Präventionsmedizin",
        intro: "Reproduktionsorgane, Zellbiologie und Screening-Programme (B1).",
        paragraphs: [
          [
            "Die menschliche [die Fortpflanzung (Sg.)|Fortpflanzung] beruht auf einem hochpräzisen Zusammenspiel mikroskopischer Prozesse.",
            "In [der Eierstock, -̈e|den Eierstöcken] reift [die Eizelle, -n|die Eizelle] heran, während in [der Hoden, -|den Hoden] kontinuierlich [das Spermium, Spermien|Spermien] produziert werden.",
          ],
          [
            "Zur Gesunderhaltung des Urogenitaltrakts bieten die Krankenkassen strukturierte [die Vorsorgeuntersuchung, -en|Vorsorgeuntersuchungen] an.",
            "Sowohl in [die Gynäkologie (Sg.)|der Gynäkologie] als auch in [die Urologie (Sg.)|der Urologie] können Krebserkrankungen durch zytologische Abstriche und Ultraschall bereits in symptomfreien Frühstadien geheilt werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Endokrine Regelkreise, Reproduktionsmedizin und Onkologie",
        intro: "Hypothalamus-Hypophysen-Gonaden-Achse, Gametogenese und Fertilitätstherapie (B2).",
        paragraphs: [
          [
            "Die funktionelle Reifung der Gameten wird über die Hypothalamus-Hypophysen-Gonaden-Achse durch GnRH, LH und FSH orchestriert.",
            "Störungen im hormonellen Feedback können [der Hormonhaushalt, -e|den Hormonhaushalt] destabilisieren und Infertilität auslösen, die heute im Rahmen reproduktionsmedizinischer Verfahren (IVF, ICSI) therapiert werden kann.",
          ],
          [
            "Onkologisch stehen hormonabhängige Tumore wie das Prostatakarzinom in [die Prostata (Sg.)|der Prostata] oder das Zervixkarzinom in [die Gebärmutter, -̈|der Gebärmutter] im Fokus evidenzbasierter Screening-Leitlinien.",
          ],
          [
            "Die Kombination aus HPV-Impfung und molekularer Diagnostik markiert einen Meilenstein in der Primärprävention malignitärer Erkrankungen.",
          ],
        ],
      },
    },
  },

  schwangerschaft_und_geburt: {
    description: "Schwangerschaft, Geburt, Hebammen, Ultraschall, Wehen, Kreißsaal und Elternzeit.",
    details: "Pränatale Diagnostik, Geburtsphasen, Kaiserschnitt, Stillen und Mutterschutz (A1–B2)",
    arabicDescription:
      "الحمل والولادة (Schwangerschaft und Geburt): فترة الحمل (Schwangerschaft)، الولادة (Geburt)، المولود الجديد (Neugeborenes)، القابلة والمولّدة (Hebamme)، فحص السونار والموجات فوق الصوتية (Ultraschall)، غرفة الولادة (Kreißsaal)، آلام المخاض والطلق (Wehen)، الولادة القيصرية (Kaiserschnitt)، الحبل السري، الرضاعة الطبيعية، وإجازة الأمومة (Mutterschutz/Elternzeit).",
    words: [
      {
        german: "die Schwangerschaft, -en",
        arabic: "فترة الحمل (تسعة أشهر)",
        english: "pregnancy",
        example: "Während der Schwangerschaft ernährt sich die werdende Mutter besonders gesund.",
      },
      {
        german: "die Geburt, -en",
        arabic: "الولادة / وضع الجنين",
        english: "birth, childbirth",
        example: "Die Geburt des ersten Kindes war für die Eltern ein zutiefst bewegender Moment.",
      },
      {
        german: "das Neugeborene, -n",
        arabic: "الطفل حديث الولادة (الرضيع)",
        english: "newborn baby, neonate",
        example: "Das Neugeborene schlief friedlich in den Armen seiner erschöpften Mutter.",
      },
      {
        german: "die Hebamme, -n",
        arabic: "القابلة القانونية / الداية المرخّصة",
        english: "midwife",
        example: "Die erfahrene Hebamme betreut die Familie vor, während und nach der Entbindung.",
      },
      {
        german: "der Ultraschall, -e",
        arabic: "التصوير بالموجات فوق الصوتية (السونار)",
        english: "ultrasound, sonogram",
        example:
          "Auf dem Ultraschall konnte der Arzt die winzigen Hände des Babys deutlich erkennen.",
      },
      {
        german: "der Kreißsaal, -̈e",
        arabic: "صالة وغرفة التوليد بالمستشفى",
        english: "delivery room, labor room",
        example: "Mitten in der Nacht fuhr das Paar ins Krankenhaus direkt in den Kreißsaal.",
      },
      {
        german: "die Wehen (Pl.)",
        arabic: "آلام وتقلصات المخاض والطلق",
        english: "labor contractions, labor pains",
        example: "Als die Wehen alle fünf Minuten einsetzten, wussten sie, dass es bald losgeht.",
      },
      {
        german: "der Kaiserschnitt, -e",
        arabic: "العملية القيصرية لإخراج الجنين",
        english: "Caesarean section, C-section",
        example:
          "Wegen Komplikationen entschieden sich die Ärzte für einen sicheren Kaiserschnitt.",
      },
      {
        german: "die Nabelschnur, -̈e",
        arabic: "الحبل السري الرابط بين الأم والجنين",
        english: "umbilical cord",
        example:
          "Der stolze Vater durfte nach der Entbindung vorsichtig die Nabelschnur durchtrennen.",
      },
      {
        german: "stillen",
        arabic: "ترضع الطفل طبيعياً من الثدي",
        english: "to breastfeed, to nurse",
        example: "Muttermilch schützt vor Infektionen, wenn Mütter ihr Neugeborenes stillen.",
      },
      {
        german: "der Mutterschutz (Sg.)",
        arabic: "فترة حماية الأمومة وإجازة الوضع القانونية المأجورة",
        english: "maternity protection period, maternity leave",
        example:
          "In Deutschland beginnt der gesetzliche Mutterschutz sechs Wochen vor dem errechneten Termin.",
      },
      {
        german: "die Elternzeit, -en",
        arabic: "إجازة رعاية الطفل للوالدين (مدفوعة ومحمية وظيفياً)",
        english: "parental leave",
        example: "Beide Elternteile nahmen gemeinsam sechs Monate bezahlte Elternzeit.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Baby kommt zur Welt",
        intro: "Einfache Sätze über Schwangerschaft, Baby und Geburt (A1).",
        paragraphs: [
          [
            "Meine Schwester hat ein großes Geheimnis: Sie erwartet ein Baby!",
            "Jetzt ist sie in [die Schwangerschaft, -en|der Schwangerschaft].",
            "Beim Arzt sieht sie das kleine Kind auf [der Ultraschall, -e|dem Ultraschall].",
          ],
          [
            "Gestern ging es plötzlich los und sie fuhr in [der Kreißsaal, -̈e|den Kreißsaal].",
            "[die Hebamme, -n|Eine liebe Hebamme] half bei [die Geburt, -en|der Geburt].",
            "Jetzt liegt [das Neugeborene, -n|das Neugeborene] glücklich im Bettchen.",
          ],
          ["Die Mutter kann das kleine Mädchen liebevoll [stillen|stillen]."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vorbereitung auf den neuen Lebensabschnitt",
        intro: "Geburtsvorbereitung, Wehen und gesetzlicher Mutterschutz (A2).",
        paragraphs: [
          [
            "Vor der Entbindung besuchten Lisa und ihr Mann einen Geburtsvorbereitungskurs.",
            "Dort lernten sie Atemtechniken, wenn [die Wehen (Pl.)|die Wehen] einsetzen.",
          ],
          [
            "Sechs Wochen vor dem Termin begann für Lisa [der Mutterschutz (Sg.)|der gesetzliche Mutterschutz], sodass sie nicht mehr arbeiten musste.",
            "Als das Baby im Krankenhaus ankam, schnitt der Vater [die Nabelschnur, -̈e|die Nabelschnur] durch.",
            "Nach der Geburt beantragte der Vater drei Monate [die Elternzeit, -en|Elternzeit], um viel Zeit mit seiner Familie zu verbringen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Perinatale Betreuung und familienpolitische Leistungen",
        intro: "Hebammenversorgung, Kaiserschnitt und Elternzeitmodelle in Deutschland (B1).",
        paragraphs: [
          [
            "Das deutsche Gesundheitssystem garantiert werdenden Müttern eine umfassende Vorsorge während [die Schwangerschaft, -en|der Schwangerschaft].",
            "Im Mutterpass werden alle Vitalparameter und regelmäßige Befunde aus [der Ultraschall, -e|dem Ultraschall] lückenlos dokumentiert.",
          ],
          [
            "Im modernen [der Kreißsaal, -̈e|Kreißsaal] stehen individuelle Gebärpositionen im Vordergrund; bei medizinischer Notwendigkeit garantiert [der Kaiserschnitt, -e|ein Kaiserschnitt] maximale Sicherheit für Mutter und Kind.",
          ],
          [
            "Nach der Entbindung ist die Nachsorge durch [die Hebamme, -n|eine Hebamme] für [das Neugeborene, -n|das Neugeborene] von unschätzbarem Wert.",
            "Gleichzeitig schaffen [der Mutterschutz (Sg.)|Mutterschutz] und das Elterngeld verlässliche finanzielle Rahmenbedingungen für junge Familien.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Perinatologie, Pränataldiagnostik und soziologische Elternschaft",
        intro:
          "Fetomaternale Physiologie, Plazentafunktion und Vereinbarkeit von Beruf und Familie (B2).",
        paragraphs: [
          [
            "Die perinatale Medizin verbindet hochentwickelte fetomaternale Diagnostik mit einer personenzentrierten Geburtshilfe.",
            "Die Überwachung der fetoplazentaren Einheit über Doppler-Sonografie ermöglicht die frühzeitige Intervention bei intrauterinen Wachstumsretardierungen.",
          ],
          [
            "Während die Physiologie von [die Wehen (Pl.)|Uteruskontraktionen] hormonell durch Oxytocin gesteuert wird, verlangt das Stillmanagement nach der Durchtrennung von [die Nabelschnur, -̈e|der Nabelschnur] fundierte Laktationsberatung.",
          ],
          [
            "Gesellschaftspolitisch stellt die Inanspruchnahme von [die Elternzeit, -en|Elternzeit] durch Väter einen Kulturwandel dar, der traditionelle Rollenmuster aufbricht und partnerschaftliche Fürsorgearbeit etabliert.",
          ],
        ],
      },
    },
  },

  der_arztbesuch: {
    description:
      "Arztpraxis, Wartezimmer, Versichertenkarte, Rezept, Krankschreibung, Diagnose und Untersuchung.",
    details: "Allgemeinmedizin, Anamnese, Vitalwerte, Stethoskop und Behandlungsplan (A1–B2)",
    arabicDescription:
      "زيارة الطبيب (Der Arztbesuch): عيادة الطبيب (Arztpraxis)، غرفة الانتظار (Wartezimmer)، بطاقة التأمين الصحي (Versichertenkarte)، الوصفة الطبية (Rezept)، التقرير والإجازة المرضية (Krankschreibung/AU)، التشخيص (Diagnose)، السماعة الطبية (Stethoskop)، ضغط الدم، وميزان الحرارة وفحص المريض.",
    words: [
      {
        german: "der Arztbesuch, -e",
        arabic: "زيارة الطبيب والمراجعة الطبية",
        english: "doctor's appointment, visit to the doctor",
        example: "Wegen meiner anhaltenden Halsschmerzen war ein Arztbesuch unumgänglich.",
      },
      {
        german: "die Arztpraxis, Arztpraxen",
        arabic: "عيادة الطبيب الخاصة",
        english: "doctor's office, practice",
        example: "Die Arztpraxis meines Hausarztes liegt direkt am Marktplatz.",
      },
      {
        german: "das Wartezimmer, -",
        arabic: "غرفة واستراحة الانتظار للمرضى",
        english: "waiting room",
        example: "Im voll besetzten Wartezimmer lasen die Patienten geduldig Zeitschriften.",
      },
      {
        german: "die Versichertenkarte, -n",
        arabic: "بطاقة التأمين الصحي الإلكترونية (eGK)",
        english: "health insurance card",
        example: "Legen Sie bitte Ihre Versichertenkarte am Empfangstresen vor.",
      },
      {
        german: "das Rezept, -e",
        arabic: "الوصفة والروشتة الطبية للأدوية",
        english: "prescription (medical)",
        example: "Der Arzt stellte mir ein Rezept für antibiotische Tabletten aus.",
      },
      {
        german: "die Krankschreibung, -en",
        arabic: "الإجازة المرضية الرسمية للعمل (الشهادة الطبية)",
        english: "sick note, certificate of incapacity for work",
        example: "Ich erhielt eine dreitägige Krankschreibung für meinen Arbeitgeber.",
      },
      {
        german: "die Diagnose, -n",
        arabic: "التشخيص الطبي للحالة المرضية",
        english: "diagnosis",
        example: "Nach gründlicher Untersuchung lautete die Diagnose akute Bronchitis.",
      },
      {
        german: "das Stethoskop, -e",
        arabic: "السماعة الطبية لفحص الصدر والقلب",
        english: "stethoscope",
        example: "Mit dem kalten Stethoskop hörte der Internist die Lunge des Patienten ab.",
      },
      {
        german: "der Blutdruck (Sg.)",
        arabic: "ضغط الدم في الشرايين",
        english: "blood pressure",
        example: "Die Krankenschwester maß meinen Blutdruck und notierte die Werte in der Akte.",
      },
      {
        german: "das Fieberthermometer, -",
        arabic: "ميزان قياس حرارة الجسم (الترمومتر)",
        english: "clinical thermometer, fever thermometer",
        example: "Das digitale Fieberthermometer zeigte eine erhöhte Temperatur von 38,5 Grad an.",
      },
      {
        german: "die Behandlung, -en",
        arabic: "العلاج الطبي والرعاية الصحية",
        english: "treatment, medical care",
        example: "Die medikamentöse Behandlung schlug bereits nach wenigen Tagen gut an.",
      },
      {
        german: "untersuchen",
        arabic: "يفحص طبياً ويعاين المريض",
        english: "to examine (medically)",
        example: "Der Arzt wird Ihren schmerzenden Hals vorsichtig mit einer Lampe untersuchen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich gehe heute zum Arzt",
        intro: "Einfache Sätze über Praxis, Karte, Arzt und Untersuchung (A1).",
        paragraphs: [
          [
            "Ich fühle mich nicht gut und habe Kopfschmerzen.",
            "Heute mache ich [der Arztbesuch, -e|einen Arztbesuch].",
            "Ich gehe in [die Arztpraxis, Arztpraxen|die Arztpraxis] und gebe [die Versichertenkarte, -n|meine Versichertenkarte] ab.",
          ],
          [
            "Ich nehme im [das Wartezimmer, -|Wartezimmer] Platz und warte kurz.",
            "Der Arzt ruft meinen Namen und wird mich [untersuchen|untersuchen].",
            "Er hört meinen Rücken mit [das Stethoskop, -e|dem Stethoskop] ab.",
          ],
          ["Er schreibt [das Rezept, -e|ein Rezept] für Tabletten und wünscht mir gute Besserung."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Krankgeschrieben mit einer Grippe",
        intro: "Fieber messen, Krankschreibung einreichen und Medikamente holen (A2).",
        paragraphs: [
          [
            "Gestern wachte ich mit Schüttelfrost und Gliederschmerzen auf.",
            "[das Fieberthermometer, -|Das Fieberthermometer] zeigte 39 Grad Fieber an.",
            "Ich rief bei meinem Hausarzt an und bekam sofort einen Notfalltermin.",
          ],
          [
            "In der Praxis maß die Assistentin zuerst meinen [der Blutdruck (Sg.)|Blutdruck].",
            "Nach einem Blick in meinen Hals stellte der Arzt [die Diagnose, -n|die Diagnose]: ein grippaler Infekt.",
            "Er stellte mir [die Krankschreibung, -en|eine Krankschreibung] für die ganze Woche aus, die digital an meine Krankenkasse geschickt wurde.",
          ],
          ["Mit viel Ruhe und Tee begann [die Behandlung, -en|meine Behandlung] zu Hause im Bett."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Hausarztprinzip und die elektronische Patientenakte",
        intro: "Anamnese, Facharztüberweisungen und digitale Gesundheitsversorgung (B1).",
        paragraphs: [
          [
            "In Deutschland bildet der Hausarzt die erste Anlaufstelle für Patienten im primärärztlichen Versorgungssystem.",
            "Durch eine ausführliche Anamnese und körperliche Untersuchung grenzt der Mediziner Symptome ein und formuliert eine fundierte [die Diagnose, -n|Diagnose].",
          ],
          [
            "Mit der Einführung des E-Rezepts können Patienten [das Rezept, -e|ihr Rezept] direkt über [die Versichertenkarte, -n|ihre elektronische Versichertenkarte] in jeder beliebigen Apotheke einlösen.",
          ],
          [
            "Auch [die Krankschreibung, -en|die elektronische Arbeitsunfähigkeitsbescheinigung (eAU)] wird mittlerweile automatisiert an den Arbeitgeber übermittelt, was bürokratische Hürden für Kranke spürbar reduziert.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Evidenzbasierte Medizin, Differenzialdiagnostik und Arzt-Patienten-Allianz",
        intro:
          "Klinische Leitlinien, Shared Decision Making und ambulante Versorgungsstrukturen (B2).",
        paragraphs: [
          [
            "Ein professionell geführter [der Arztbesuch, -e|Arztbesuch] beruht auf dem Modell der partizipativen Entscheidungsfindung ('Shared Decision Making').",
            "Der Arzt kombiniert klinische Erfahrung und diagnostische Befunde (Auskultation mittels [das Stethoskop, -e|Stethoskop], Laborparameter) zu einer differenzialdiagnostischen Synthese.",
          ],
          [
            "Anschließend vereinbaren Arzt und Patient einen evidenzbasierten Plan für [die Behandlung, -en|die Behandlung], der patientenindividuelle Präferenzen und pharmakologische Risikoprofile berücksichtigt.",
          ],
          [
            "Die Digitalisierung des Gesundheitswesens (Telemedizin, ePA) transformiert die traditionelle Konsultation und steigert die Transparenz ambulanter Therapiepfade.",
          ],
        ],
      },
    },
  },

  behinderungen: {
    description:
      "Behinderungen, Barrierefreiheit, Rollstuhl, Blindenstock, Gebärdensprache und Inklusion.",
    details:
      "Inklusion, Barrierefreies Bauen, Brailleschrift, Hörgeräte, Prothesen und Assistenz (A1–B2)",
    arabicDescription:
      "الإعاقة وإمكانية الوصول الشامل (Behinderungen): أنواع الإعاقة، الكرسي المتحرك (Rollstuhl)، سهولة الوصول والبيئة الخالية من العوائق (Barrierefreiheit)، المنحدرات (Rampe)، عصا المكفوفين، لغة برايل (Blindenschrift)، لغة الإشارة (Gebärdensprache)، السماعة الطبية لضعاف السمع (Hörgerät)، الأطراف الصناعية (Prothese)، والدمج المجتمعي الشامل (Inklusion).",
    words: [
      {
        german: "die Behinderung, -en",
        arabic: "الإعاقة الجسدية أو الحسية أو الذهنية",
        english: "disability, impairment",
        example: "Menschen mit einer Behinderung haben ein Recht auf gleichberechtigte Teilhabe.",
      },
      {
        german: "der Rollstuhl, -̈e",
        arabic: "الكرسي المتحرك لذوي الاحتياجات الخاصة",
        english: "wheelchair",
        example:
          "Mit einem elektrischen Rollstuhl kann er sich selbstständig in der Wohnung bewegen.",
      },
      {
        german: "die Barrierefreiheit (Sg.)",
        arabic: "إمكانية الوصول الشامل وسهولة الحركة دون عوائق",
        english: "accessibility, barrier-free access",
        example: "Öffentliche Gebäude müssen gesetzlich auf vollständige Barrierefreiheit achten.",
      },
      {
        german: "die Rampe, -n",
        arabic: "المنحدر المائل للكراسي المتحركة",
        english: "ramp, wheelchair ramp",
        example: "Über die flache Rampe am Eingang gelangt man problemlos in das Rathaus.",
      },
      {
        german: "der Blindenstock, -̈e",
        arabic: "العصا البيضاء للمكفوفين",
        english: "white cane (for the blind)",
        example: "Mit dem weißen Blindenstock ertastet die blinde Frau Bodenkanten und Stufen.",
      },
      {
        german: "die Blindenschrift (Sg.)",
        arabic: "طريقة برايل للقراءة باللمس للمكفوفين",
        english: "Braille, braille script",
        example:
          "Auf Medikamentenpackungen sind wichtige Angaben zusätzlich in Blindenschrift geprägt.",
      },
      {
        german: "die Gebärdensprache (Sg.)",
        arabic: "لغة الإشارة للصم والبكم",
        english: "sign language",
        example:
          "Gehörlose Menschen verständigen sich fließend und ausdrucksstark in Gebärdensprache.",
      },
      {
        german: "das Hörgerät, -e",
        arabic: "السماعة الطبية لتقوية السمع",
        english: "hearing aid",
        example: "Ein modernes, winziges Hörgerät im Ohr filtert störende Nebengeräusche heraus.",
      },
      {
        german: "die Prothese, -n",
        arabic: "الطرف الصناعي التعويضي",
        english: "prosthesis, prosthetic limb",
        example: "Dank einer hochentwickelten Prothese aus Karbon kann der Athlet wieder joggen.",
      },
      {
        german: "die Inklusion (Sg.)",
        arabic: "الدمج والاشتمال الاجتماعي الشامل",
        english: "inclusion",
        example:
          "Echte Inklusion bedeutet, dass niemand wegen seiner Einschränkungen ausgeschlossen wird.",
      },
      {
        german: "der Schwerbehindertenausweis, -e",
        arabic: "بطاقة / هوية إثبات الإعاقة الشديدة",
        english: "severely disabled person's pass",
        example:
          "Mit dem Schwerbehindertenausweis kann man vergünstigt den öffentlichen Nahverkehr nutzen.",
      },
      {
        german: "der Blindenführhund, -e",
        arabic: "كلب إرشاد وتوجيه المكفوفين",
        english: "guide dog, seeing-eye dog",
        example:
          "Der treue Blindenführhund führt sein Herrchen sicher über jede verkehrsreiche Kreuzung.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Zusammen leben ohne Grenzen",
        intro: "Einfache Sätze über Rollstühle, Rampen und Hilfe im Alltag (A1).",
        paragraphs: [
          [
            "Nicht alle Menschen können sehen, hören oder laufen.",
            "Mein Nachbar sitzt in [der Rollstuhl, -̈e|einem Rollstuhl].",
            "Vor unserem Haus gibt es [die Rampe, -n|eine breite Rampe] ohne Stufen.",
          ],
          [
            "Eine Freundin hört schlecht und trägt [das Hörgerät, -e|ein kleines Hörgerät] im Ohr.",
            "Andere Menschen sprechen mit den Händen in [die Gebärdensprache (Sg.)|Gebärdensprache].",
            "Wir helfen einander und leben gemeinsam in der Stadt.",
          ],
          ["Jeder Mensch ist wertvoll und gehört dazu."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Unterwegs in der barrierefreien Stadt",
        intro: "Aufzüge, Blindenstöcke, Brailleschrift und taktile Leitsysteme (A2).",
        paragraphs: [
          [
            "Gestern begleitete ich meine Tante, die sehbehindert ist, zum Bahnhof.",
            "Auf dem Bahnsteig orientierte sie sich mit [der Blindenstock, -̈e|ihrem Blindenstock] an den geriffelten Bodenfliesen.",
          ],
          [
            "Im Fahrstuhl waren die Stockwerke tastbar in [die Blindenschrift (Sg.)|Blindenschrift] beschriftet.",
            "Moderne Bahnhöfe achten heute streng auf [die Barrierefreiheit (Sg.)|Barrierefreiheit], damit auch Reisende mit [der Rollstuhl, -̈e|einem Rollstuhl] überall hinkommen.",
          ],
          ["So gelingt gelebte [die Inklusion (Sg.)|Inklusion] im öffentlichen Raum."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Selbstbestimmtes Leben und gesellschaftliche Barrierefreiheit",
        intro: "Beseitigung physischer Barrieren, Hilfsmitteltechnik und Nachteilsausgleiche (B1).",
        paragraphs: [
          [
            "Eine körperliche oder sensorische [die Behinderung, -en|Behinderung] darf nicht zum Ausschluss aus dem gesellschaftlichen Leben führen.",
            "Moderne Medizintechnik — von bionischen [die Prothese, -n|Prothesen] bis zu digitalen Hörhilfen — ermöglicht ein hohes Maß an Autonomie.",
          ],
          [
            "Entscheidend bleibt jedoch der Abbau von Barrieren in der Umwelt: Stufenlose Zugänge, Aufzüge und akustische Ampelsignale schaffen [die Barrierefreiheit (Sg.)|Barrierefreiheit].",
          ],
          [
            "Mit einem amtlichen [der Schwerbehindertenausweis, -e|Schwerbehindertenausweis] erhalten Betroffene Nachteilsausgleiche im Beruf und Steuerrecht.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "UN-Behindertenrechtskonvention, Universal Design und Inklusionspolitik",
        intro:
          "Paradigmenwechsel vom medizinischen zum menschenrechtlichen Modell der Behinderung (B2).",
        paragraphs: [
          [
            "Die Ratifizierung der UN-Behindertenrechtskonvention markiert einen normativen Meilenstein in der Gesetzgebung.",
            "Behinderung wird nicht länger als individuelles Defizit verstanden, sondern als Resultat der Interaktion zwischen einer Beeinträchtigung und einstellungs- sowie umweltbedingten Barrieren.",
          ],
          [
            "Das Leitbild des 'Universal Design' fordert, dass Infrastrukturen, digitale Schnittstellen und Bildungseinrichtungen von Beginn an ohne nachträgliche Sonderlösungen barrierefrei konzipiert werden.",
          ],
          [
            "Echte [die Inklusion (Sg.)|Inklusion] realisiert sich erst dann, wenn Menschen unabhängig von sensorischen oder physischen Voraussetzungen selbstbestimmt am Arbeitsmarkt und im kulturellen Diskurs partizipieren können.",
          ],
        ],
      },
    },
  },

  verletzungen: {
    description:
      "Verletzungen, Wunden, Pflaster, Verbände, Blutungen, Schürfwunden, Erste Hilfe und Desinfektion.",
    details:
      "Traumatologie, Wundversorgung, Notfallmaßnahmen, Kühlen, Narben und Verbandkasten (A1–B2)",
    arabicDescription:
      "الإصابات والجروح والإسعافات الأولية (Verletzungen): أنواع الإصابات، الجروح (Wunde)، لاصق الجروح (Pflaster)، الضمادة والشاش (Verband)، النزيف (Blutung)، الخدوش والسطوح (Schürfwunde)، الحروق (Verbrennung)، حقيبة الإسعافات (Verbandkasten)، الإسعاف الأولي (Erste Hilfe)، والتعقيم (desinfizieren).",
    words: [
      {
        german: "die Verletzung, -en",
        arabic: "الإصابة / الأذى الجسدي",
        english: "injury",
        example: "Zum Glück zog er sich bei dem Sturz keine schwere Verletzung zu.",
      },
      {
        german: "die Wunde, -n",
        arabic: "الجرح المفتوح في الجلد",
        english: "wound",
        example: "Die offene Wunde am Knie muss gründlich gereinigt werden.",
      },
      {
        german: "das Pflaster, -",
        arabic: "لاصق الجروح الطبي (البلاستر)",
        english: "plaster, band-aid, adhesive bandage",
        example: "Ich klebe ein wasserfestes Pflaster auf den kleinen Schnitt am Zeigefinger.",
      },
      {
        german: "der Verband, -̈e",
        arabic: "الضمادة الطبية / الشاش الضاغط",
        english: "bandage, dressing",
        example: "Die Krankenschwester wickelte einen sterilen Verband um das Handgelenk.",
      },
      {
        german: "die Blutung, -en",
        arabic: "النزيف وسيلان الدم",
        english: "bleeding, hemorrhage",
        example:
          "Mit einer sterilen Kompresse drückte er fest auf die Wunde, um die Blutung zu stoppen.",
      },
      {
        german: "die Schürfwunde, -n",
        arabic: "السحجة / الخدش السطحي للجلد",
        english: "scrape, graze, abrasion",
        example: "Nach dem Sturz mit dem Skateboard hatte er eine Schürfwunde am Ellbogen.",
      },
      {
        german: "die Verbrennung, -en",
        arabic: "الحرق الحراري للجلد",
        english: "burn (injury)",
        example: "Er fasste an das heiße Backblech und erlitt eine schmerzhafte Verbrennung.",
      },
      {
        german: "der Verbandkasten, -̈",
        arabic: "صندوق وحقيبة الإسعافات الأولية",
        english: "first aid kit",
        example: "In jedem Auto muss laut Gesetz ein vollständiger Verbandkasten vorhanden sein.",
      },
      {
        german: "die Erste Hilfe (Sg.)",
        arabic: "الإسعافات الأولية الفورية للمصابين",
        english: "first aid",
        example: "Im Erste-Hilfe-Kurs üben wir die stabile Seitenlage und die Herzdruckmassage.",
      },
      {
        german: "desinfizieren",
        arabic: "يطهر ويعقم الجرح من الجراثيم",
        english: "to disinfect, to sanitize",
        example: "Vor dem Verbinden sollten Sie die Haut sorgfältig desinfizieren.",
      },
      {
        german: "kühlen",
        arabic: "يبرّد الإصابة بالثلج أو الماء البارد",
        english: "to cool, to ice (an injury)",
        example:
          "Bei Prellungen und Schwellungen sollte man die betroffene Stelle sofort mit Eis kühlen.",
      },
      {
        german: "die Narbe, -n",
        arabic: "الندبة / أثر الجرح الملتئم",
        english: "scar",
        example: "Nach der Operation blieb nur eine feine, helle Narbe am Bauch zurück.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Pflaster für die Wunde",
        intro: "Einfache Sätze über kleine Wunden, Pflaster und Verband (A1).",
        paragraphs: [
          [
            "Beim Kochen passe ich kurz nicht auf und schneide mich in den Finger.",
            "Aus der Haut kommt etwas Blut: [die Blutung, -en|eine kleine Blutung].",
            "Zuerst muss ich die Stelle sauber waschen und [desinfizieren|desinfizieren].",
          ],
          [
            "Ich hole [das Pflaster, -|ein Pflaster] aus der Schachtel und klebe es auf [die Wunde, -n|die Wunde].",
            "Wenn die Verletzung größer ist, braucht man [der Verband, -̈e|einen Verband].",
            "Nach ein paar Tagen ist alles wieder verheilt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Erste Hilfe auf dem Spielplatz",
        intro: "Schürfwunden versorgen, kühlen und der Verbandkasten (A2).",
        paragraphs: [
          [
            "Gestern fiel mein kleiner Sohn auf dem Spielplatz vom Klettergerüst.",
            "Er hatte eine tiefe [die Schürfwunde, -n|Schürfwunde] am Knie und weinte bitterlich.",
          ],
          [
            "Ich holte sofort den [der Verbandkasten, -̈|Verbandkasten] aus dem Auto.",
            "Zuerst haben wir das Knie mit kaltem Wasser gereinigt und vorsichtig angefangen zu [kühlen|kühlen].",
            "Danach sprühte ich Antiseptikum auf die Haut, um sie zu [desinfizieren|desinfizieren], und legte eine sterile Binde an.",
          ],
          ["Zum Glück war es keine gefährliche [die Verletzung, -en|Verletzung]."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Wundversorgung und Sofortmaßnahmen am Unfallort",
        intro: "Druckverband, Verbrennungen kühlen und Erste-Hilfe-Regeln (B1).",
        paragraphs: [
          [
            "Jeder Bürger sollte in der Lage sein, in Notsituationen kompetent [die Erste Hilfe (Sg.)|Erste Hilfe] zu leisten.",
            "Bei starken Blutungen hat das Stillen des Blutverlusts oberste Priorität: Ein straffer Druckverband verhindert einen lebensbedrohlichen Kreislaufschock.",
          ],
          [
            "Bei einer thermischen Schädigung wie [die Verbrennung, -en|einer Verbrennung] muss die verletzte Stelle sofort etwa zehn Minuten mit handwarmem Wasser gekühlt werden.",
          ],
          [
            "Sachgemäße Wundhygiene verhindert bakterielle Infektionen und sorgt dafür, dass [die Wunde, -n|die Wunde] komplikationslos heilt und nur eine minimale [die Narbe, -n|Narbe] hinterlässt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Traumatologische Wundheilungskaskade und Notfallprotokolle",
        intro:
          "Hämostase, Exsudation, Proliferation, Wundsekundärheilung und Sepsisprävention (B2).",
        paragraphs: [
          [
            "Die physiologische Wundheilung gliedert sich in eine vaskuläre Exsudationsphase, gefolgt von Granulation und Epithelisierung.",
            "Bei klaffenden Schnittwunden oder Gewebedefekten entscheidet die chirurgische Wundrandadaption (Naht oder Klammerung) innerhalb des Sechs-Stunden-Fensters über eine primäre Heilung ohne hypertrophe [die Narbe, -n|Narbenbildung].",
          ],
          [
            "Im Rettungsdienst greifen standardisierte Algorithmen nach dem cABCDE-Schema, bei dem kritische [die Blutung, -en|Blutungen] noch vor der Atemwegssicherung mittels Tourniquet abgebunden werden.",
          ],
          [
            "Lückenlose Dokumentation und Auffrischung des Tetanus-Impfschutzes sind obligatorische Bestandteile moderner Traumatologie.",
          ],
        ],
      },
    },
  },

  beim_zahnarzt: {
    description:
      "Zähne, Karies, Bohrer, Zahnfüllung, Betäubungsspritze, Zahnseide und professionelle Zahnreinigung.",
    details:
      "Zahngesundheit, Parodontose, Prophylaxe, Zahnspangen, Weisheitszähne und Dentalhygiene (A1–B2)",
    arabicDescription:
      "عند طبيب الأسنان (Beim Zahnarzt): طبيب الأسنان، الأسنان (Zahn)، تسوس الأسنان (Karies)، حشوة الأسنان (Zahnfüllung)، مثقاب الأسنان (Bohrer)، حقيبة التخدير الموضعي (Betäubung)، خيط الأسنان (Zahnseide)، فرشاة الأسنان، اللثة (Zahnfleisch)، تقويم الأسنان (Zahnspange)، تنظيف الأسنان الاحترافي (PZR)، وضرس العقل.",
    words: [
      {
        german: "der Zahnarzt, -̈e",
        arabic: "طبيب الأسنان",
        english: "dentist",
        example: "Ich gehe zweimal im Jahr zur regelmäßigen Kontrolle zum Zahnarzt.",
      },
      {
        german: "der Zahn, -̈e",
        arabic: "السن / الضرس",
        english: "tooth",
        example: "Der hintere Backenzahn reagiert empfindlich auf kalte und heiße Speisen.",
      },
      {
        german: "die Karies (Sg.)",
        arabic: "تسوس وتآكل الأسنان",
        english: "tooth decay, caries, cavities",
        example: "Zu viel Zucker fördert schädliche Bakterien, die Karies verursachen.",
      },
      {
        german: "die Zahnfüllung, -en",
        arabic: "حشوة السن (الكمبوزيت أو الخزف)",
        english: "dental filling",
        example: "Der Zahnarzt setzte eine zahnfarbene Füllung aus Kunststoff in das Loch ein.",
      },
      {
        german: "der Bohrer, -",
        arabic: "مثقاب حفر وتنظيف الأسنان الطبي",
        english: "dental drill",
        example: "Das sirrende Geräusch von dem Bohrer jagt vielen Patienten einen Schreck ein.",
      },
      {
        german: "die Betäubung, -en",
        arabic: "التخدير الموضعي (إبرة البنج)",
        english: "local anesthesia, numbing",
        example:
          "Dank der örtlichen Betäubung spürte ich während des Eingriffs überhaupt keine Schmerzen.",
      },
      {
        german: "die Zahnseide (Sg.)",
        arabic: "خيط تنظيف ما بين الأسنان",
        english: "dental floss",
        example: "Mit der Zahnseide reinigt man die engen Zwischenräume gründlich nach dem Putzen.",
      },
      {
        german: "die Zahnbürste, -n",
        arabic: "فرشاة تنظيف الأسنان",
        english: "toothbrush",
        example: "Zahnärzte empfehlen eine elektrische Zahnbürste mit weichen Borsten.",
      },
      {
        german: "das Zahnfleisch (Sg.)",
        arabic: "اللثة (النسيج المحيط بالأسنان)",
        english: "gums, gingiva",
        example: "Entzündetes Zahnfleisch neigt beim Zähneputzen schnell zu Blutungen.",
      },
      {
        german: "die Zahnspange, -n",
        arabic: "تقويم الأسنان لتعديل الاصطفاف",
        english: "braces (dental)",
        example: "Als Jugendliche trug sie zwei Jahre lang eine feste Zahnspange.",
      },
      {
        german: "die Zahnreinigung, -en",
        arabic: "تنظيف الأسنان الطبي الاحترافي (PZR)",
        english: "professional dental cleaning",
        example: "Eine professionelle Zahnreinigung entfernt hartnäckigen Zahnstein und Beläge.",
      },
      {
        german: "der Weisheitszahn, -̈e",
        arabic: "ضرس العقل (الرحى الثالثة)",
        english: "wisdom tooth",
        example:
          "Weil im Kiefer zu wenig Platz war, mussten alle vier Weisheitszähne gezogen werden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich putze meine Zähne",
        intro: "Einfache Sätze über Zahnbürste, Zahnarzt und saubere Zähne (A1).",
        paragraphs: [
          [
            "Zweimal am Tag putze ich gründlich [der Zahn, -̈e|meine Zähne].",
            "Ich nehme [die Zahnbürste, -n|meine neue Zahnbürste] und Zahnpasta.",
            "Für die Zwischenräume benutze ich [die Zahnseide (Sg.)|Zahnseide].",
          ],
          [
            "Heute habe ich einen Termin bei [der Zahnarzt, -̈e|dem Zahnarzt].",
            "Er schaut in meinen Mund und prüft [das Zahnfleisch (Sg.)|das Zahnfleisch].",
            "Zum Glück habe ich keine Löcher und keine [die Karies (Sg.)|Karies]!",
          ],
          ["Saubere Zähne machen ein strahlendes Lächeln."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Eine Füllung ohne Schmerzen",
        intro: "Betäubungsspritzen, Zahnfüllungen und professionelle Reinigung (A2).",
        paragraphs: [
          [
            "Letzte Woche hatte ich Zahnschmerzen, wenn ich eiskaltes Wasser trank.",
            "Mein Zahnarzt entdeckte ein kleines Kariesloch an einem Backenzahn.",
          ],
          [
            "Vor dem Bohren gab er mir [die Betäubung, -en|eine sanfte Betäubung], sodass meine Wange taub wurde.",
            "Mit [der Bohrer, -|dem feinen Bohrer] entfernte er den Schaden in wenigen Minuten.",
            "Danach füllte er das Loch mit einer weißen [die Zahnfüllung, -en|Zahnfüllung] auf.",
          ],
          [
            "Im nächsten Monat mache ich noch eine professionelle [die Zahnreinigung, -en|Zahnreinigung], um Zahnstein vorzubeugen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Moderne Prophylaxe und Zahnerhaltung",
        intro: "Parodontitis-Prävention, Weisheitszähne und Dentalhygiene (B1).",
        paragraphs: [
          [
            "In der modernen Zahnmedizin steht die Zahnerhaltung durch konsequente Prophylaxe an erster Stelle.",
            "Schonende Ultraschallgeräte entfernen bei [die Zahnreinigung, -en|der professionellen Zahnreinigung] bakterielle Biofilme, die zu Entzündungen von [das Zahnfleisch (Sg.)|dem Zahnfleisch] führen.",
          ],
          [
            "Bleiben Plaquebakterien unbehandelt, droht Parodontitis mit irreversiblem Knochenabbau im Kiefer.",
            "Bei Jugendlichen werden Engstände oft durch [die Zahnspange, -n|eine kieferorthopädische Zahnspange] korrigiert, während im jungen Erwachsenenalter häufig [der Weisheitszahn, -̈e|die Weisheitszähne] chirurgisch entfernt werden müssen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Restaurative Odontologie, Parodontaltherapie und Implantologie",
        intro: "Schmelzadhäsivtechnik, Kompositrestaurationen und Knochenaugmentation (B2).",
        paragraphs: [
          [
            "Die restaurative Zahnheilkunde hat sich durch mikroinvasive Adhäsivtechniken grundlegend gewandelt.",
            "Statt makromechanischer Kavitätenpräparationen ermöglicht moderne Schmelz-Dentin-Ätzung den defektorientierten Einsatz zahnfarbener [die Zahnfüllung, -en|Kompositfüllungen].",
          ],
          [
            "Verliert ein [der Zahn, -̈e|Zahn] durch tiefgreifende [die Karies (Sg.)|Karies] seine Vitalität, bildet die endodontische Wurzelkanalbehandlung unter Kofferdam die letzte Möglichkeit des Zahnerhalts.",
          ],
          [
            "Bei Zahnverlust bietet die dentale Implantologie mit Osseointegration von Reintitan-Schrauben eine funktionell und ästhetisch vollwertige Rekonstruktion ohne Beschleifung gesunder Nachbarzähne.",
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

const res = vocabularyCollectionSchema.safeParse(kgData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(kgPath, JSON.stringify(kgData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to koerper-und-gesundheit.json!");
