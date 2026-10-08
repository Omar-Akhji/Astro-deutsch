import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  die_hand_und_der_fuss: {
    description: "Finger, Daumen, Handgelenk, Fuß, Zehen, Ferse und Feinmotorik.",
    details: "Anatomie der Extremitäten, Greifreflexe, Gangbild und Fußpflege (A1–B2)",
    arabicDescription:
      "اليد والقدم (Die Hand und der Fuß): مفردات اليد (Hand)، الأصابع (Finger)، الإبهام (Daumen)، أظافر اليد، معصم اليد (Handgelenk)، راحة الكف، القدم (Fuß)، أصابع القدم (Zehe)، الكعب (Ferse)، باطن القدم (Fußsohle)، ومفصل الكاحل.",
    words: [
      {
        german: "die Hand, -̈e",
        arabic: "اليد والكف",
        english: "hand",
        example: "Ich gebe ihm zur Begrüßung herzlich die rechte Hand.",
      },
      {
        german: "der Finger, -",
        arabic: "إصبع اليد",
        english: "finger",
        example: "An jeder Hand hat der Mensch fünf bewegliche Finger.",
      },
      {
        german: "der Daumen, -",
        arabic: "الإبهام",
        english: "thumb",
        example: "Er zeigte mit dem Daumen nach oben als Zeichen der Zustimmung.",
      },
      {
        german: "der Fingernagel, -̈",
        arabic: "ظفر الإصبع",
        english: "fingernail",
        example: "Gepflegte Fingernägel hinterlassen einen guten Eindruck.",
      },
      {
        german: "das Handgelenk, -e",
        arabic: "معصم ورسغ اليد",
        english: "wrist",
        example: "Am linken Handgelenk trage ich eine klassische Armbanduhr.",
      },
      {
        german: "die Handfläche, -n",
        arabic: "راحة الكف وباطن اليد",
        english: "palm (hand)",
        example: "Auf der offenen Handfläche hielt er eine glänzende Münze.",
      },
      {
        german: "der Fuß, -̈e",
        arabic: "القدم",
        english: "foot",
        example: "Nach der langen Wanderung taten mir beide Füße weh.",
      },
      {
        german: "die Zehe, -n",
        arabic: "إصبع القدم",
        english: "toe",
        example: "Er hat sich die kleine Zehe schmerzhaft am Tischbein gestoßen.",
      },
      {
        german: "die Ferse, -n",
        arabic: "كعب القدم (العقب)",
        english: "heel (foot)",
        example: "Die neuen Lederschuhe drückten an der Ferse und verursachten Blasen.",
      },
      {
        german: "die Fußsohle, -n",
        arabic: "باطن وأسفل القدم",
        english: "sole (foot)",
        example: "Ein warmes Fußbad entspannt die beanspruchte Fußsohle nach dem Sport.",
      },
      {
        german: "das Fußgelenk, -e",
        arabic: "مفصل الكاحل (الكعب المفصلي)",
        english: "ankle joint, ankle",
        example: "Beim Joggen ist er umgeknickt und hat sich das Fußgelenk verstaucht.",
      },
      {
        german: "greifen",
        arabic: "يمسك ويقبض باليد",
        english: "to grasp, to grip, to reach for",
        example: "Das kleine Baby kann schon gezielt nach einer bunten Rassel greifen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Meine Hände und meine Füße",
        intro: "Einfache Sätze über Finger, Hände, Füße und Gehen (A1).",
        paragraphs: [
          [
            "Ich schaue auf [die Hand, -̈e|meine Hände].",
            "Jede Hand hat fünf [der Finger, -|Finger].",
            "Der stärkste Finger ist [der Daumen, -|der Daumen].",
            "Mit der Hand kann ich Dinge festhalten und [greifen|greifen].",
          ],
          [
            "Unten habe ich zwei [der Fuß, -̈e|Füße].",
            "An jedem Fuß sitzen fünf kleine [die Zehe, -n|Zehen].",
            "Auf [die Ferse, -n|den Fersen] und [die Fußsohle, -n|den Fußsohlen] laufe ich jeden Tag viele Schritte.",
          ],
          ["Hände und Füße sind sehr wichtig für unseren Körper."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vorsicht beim Sport: Ein verstauchtes Gelenk",
        intro: "Sportverletzungen, Bandagen und Entlastung für Knöchel und Handgelenk (A2).",
        paragraphs: [
          [
            "Letzte Woche habe ich beim Fußballspielen nicht aufgepasst.",
            "Auf dem nassen Rasen bin ich ausgerutscht und unglücklich auf [das Fußgelenk, -e|mein Fußgelenk] gefallen.",
            "Auch mit [das Handgelenk, -e|dem Handgelenk] habe ich mich auf dem Boden abgefangen.",
          ],
          [
            "Der Arzt untersuchte meinen Knöchel und legte einen kühlenden Verband an.",
            "Zum Glück war kein Knochen gebrochen, aber ich musste [der Fuß, -̈e|den Fuß] einige Tage hochlegen.",
            "Jetzt laufe ich wieder vorsichtig und massiere sanft [die Fußsohle, -n|die Fußsohle].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Biomechanik der Extremitäten und feinmotorische Meisterleistungen",
        intro: "Evolution des aufrechten Gangs, Greifhand und Fußgewölbe (B1).",
        paragraphs: [
          [
            "Die menschliche [die Hand, -̈e|Hand] ist ein evolutionäres Meisterwerk.",
            "Erst die Opposition von [der Daumen, -|dem Daumen] zu den übrigen [der Finger, -|Fingern] ermöglichte das präzise Führen von Werkzeugen und die Entwicklung menschlicher Kultur.",
          ],
          [
            "Gleichzeitig trägt [der Fuß, -̈e|der Fuß] mit seinem ausgeklügelten Längs- und Quergewölbe das gesamte Körpergewicht bei jedem Schritt.",
            "Vom stabilen [das Fußgelenk, -e|Fußgelenk] über die gedämpfte [die Ferse, -n|Ferse] bis zu [die Zehe, -n|den Zehen] sorgt ein komplexer Muskel- und Sehnenapparat für elastisches Abfedern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Sensomotorik, Karpaltunnelsyndrom und podologische Prävention",
        intro: "Neuromuskuläre Ansteuerung, repetitive Belastungen und Haltungsphysiologie (B2).",
        paragraphs: [
          [
            "Die dichte Innervation von [die Handfläche, -n|der Handfläche] und Fingerbeeren macht die oberen Extremitäten zu hochempfindlichen Tastorganen.",
            "Chronische repetitive Belastungen bei Büroarbeit können jedoch das empfindliche [das Handgelenk, -e|Handgelenk] schädigen (Karpaltunnelsyndrom).",
          ],
          [
            "Ebenso manifestieren sich Fehlstellungen der Wirbelsäule häufig primär an [die Fußsohle, -n|den Fußsohlen] durch Senk-, Spreiz- oder Knickfüße.",
            "Orthopädische Einlagen und gezieltes Barfußlaufen stärken die intrinsische Fußmuskulatur und restituieren physiologische Bewegungsmuster.",
          ],
        ],
      },
    },
  },

  der_kopf: {
    description: "Gesicht, Augen, Ohren, Nase, Mund, Stirn, Wangen, Kinn und Sinnesorgane.",
    details: "Kopfanatomie, Sinneswahrnehmung, Mimik, Gesichtsausdrücke und Augenbrauen (A1–B2)",
    arabicDescription:
      "الرأس والوجه (Der Kopf): ملامح الوجه (Gesicht)، العينان (Auge)، الأنف (Nase)، الأذنان (Ohr)، الفم (Mund)، الشفاه (Lippe)، الجبين (Stirn)، الخدود (Wange)، الذقن (Kinn)، الحواجب (Augenbraue)، والرموش والشعر.",
    words: [
      {
        german: "das Gesicht, -er",
        arabic: "الوجه وملامحه",
        english: "face",
        example: "Sie wäscht sich morgens das Gesicht mit kaltem, erfrischendem Wasser.",
      },
      {
        german: "das Auge, -n",
        arabic: "العين (عضو الرؤية)",
        english: "eye",
        example: "Er hat wunderschöne braune Augen, die freundlich leuchten.",
      },
      {
        german: "die Nase, -n",
        arabic: "الأنف (عضو الشم)",
        english: "nose",
        example: "Mit der Nase riechen wir den süßen Duft frischer Rosen.",
      },
      {
        german: "das Ohr, -en",
        arabic: "الأذن (عضو السمع)",
        english: "ear",
        example: "Hunde spitzen aufmerksam die Ohren, wenn sie ein leises Geräusch hören.",
      },
      {
        german: "der Mund, -̈er",
        arabic: "الفم",
        english: "mouth",
        example: "Öffnen Sie bitte den Mund weit für die ärztliche Untersuchung.",
      },
      {
        german: "die Lippe, -n",
        arabic: "الشفة",
        english: "lip",
        example: "Im kalten Winter schützt ein Fettstift die spröden Lippen vor Rissen.",
      },
      {
        german: "die Stirn, -en",
        arabic: "الجبين / الجبهة",
        english: "forehead, brow",
        example: "Die Mutter legte die Hand sanft auf die heiße Stirn des fiebernden Kinds.",
      },
      {
        german: "die Wange, -n",
        arabic: "الخد / الوجنة",
        english: "cheek",
        example: "Nach dem Waldspaziergang hatte sie rosige, warme Wangen.",
      },
      {
        german: "das Kinn, -e",
        arabic: "الذقن",
        english: "chin",
        example: "Er strich sich nachdenklich mit der Hand über das glatte Kinn.",
      },
      {
        german: "die Augenbraue, -n",
        arabic: "الحاجب (حاجب العين)",
        english: "eyebrow",
        example: "Überrascht zog sie die linke Augenbraue nach oben.",
      },
      {
        german: "die Wimper, -n",
        arabic: "الرمش (رموش العين)",
        english: "eyelash",
        example: "Lange Wimpern schützen das Auge vor Staubpartikeln und Sonnenlicht.",
      },
      {
        german: "das Haar, -e",
        arabic: "الشعر (شعر الرأس)",
        english: "hair",
        example: "Sie kämmt ihr langes blondes Haar vor dem Spiegel.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Kopf und mein Gesicht",
        intro: "Einfache Sätze über Augen, Nase, Mund und Ohren (A1).",
        paragraphs: [
          [
            "Ich schaue in den Spiegel und sehe [das Gesicht, -er|mein Gesicht].",
            "Oben auf dem Kopf wächst [das Haar, -e|mein dunkles Haar].",
            "Darunter liegt [die Stirn, -en|die glatte Stirn].",
          ],
          [
            "Mit zwei [das Auge, -n|Augen] kann ich gut sehen.",
            "Über den Augen sitzen [die Augenbraue, -n|die Augenbrauen].",
            "In der Mitte ist [die Nase, -n|die Nase] zum Riechen.",
            "Ich habe zwei [das Ohr, -en|Ohren] zum Hören und [der Mund, -̈er|einen Mund] zum Sprechen.",
          ],
          [
            "Ich lächle mit [die Lippe, -n|meinen Lippen] und meine [die Wange, -n|Wangen] werden rot.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mimik und Gefühle im Gesicht",
        intro: "Gefühlsausdrücke, Lächeln, Stirnrunzeln und Sinnesorgane (A2).",
        paragraphs: [
          [
            "Unser Gesicht verrät oft mehr über unsere Gefühle als gesprochene Worte.",
            "Wenn wir traurig sind, hängen die Mundwinkel nach unten und Tränen treten in [das Auge, -n|die Augen].",
          ],
          [
            "Wenn wir überrascht sind, heben wir automatisch [die Augenbraue, -n|die Augenbrauen] und öffnen [der Mund, -̈er|den Mund].",
            "Wer konzentriert nachdenkt, legt [die Stirn, -en|die Stirn] in tiefe Falten und stützt [das Kinn, -e|das Kinn] mit der Hand ab.",
          ],
          [
            "Ein ehrliches Lächeln bringt die Augen zum Strahlen und zaubert Grübchen in [die Wange, -n|die Wangen].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Sinnesorgane des Kopfes und nonverbale Kommunikation",
        intro: "Zentralisierung der Fernsinne und mimische Signalübertragung (B1).",
        paragraphs: [
          [
            "Im menschlichen Kopf sind die wichtigsten Sinnesorgane auf engstem Raum konzentriert.",
            "Über [das Auge, -n|die Augen] und [das Ohr, -en|die Ohren] nehmen wir optische und akustische Reize der Umwelt simultan auf.",
          ],
          [
            "Gleichzeitig ist [das Gesicht, -er|das Gesicht] das primäre Kommunikationsmedium des Menschen.",
            "Über vierzig mimische Muskeln formen unzählige Nuancen zwischen [die Lippe, -n|den Lippen], [die Wange, -n|den Wangen] und [die Stirn, -en|der Stirn], die weltweit kulturübergreifend verstanden werden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Kraniofaziale Anatomie, Hirnnerven und sensorische Integration",
        intro: "Trigeminus- und Fazialisnerv, sensorische Bahnen und Gesichtsästhetik (B2).",
        paragraphs: [
          [
            "Die kraniofaziale Architektur beherbergt vitale Schutzstrukturen für das Zentralnervensystem.",
            "Der Nervus facialis steuert die differenzierte Mimik, während der Nervus trigeminus sensorische Impulse von [die Stirn, -en|der Stirn], den Wangen und [das Kinn, -e|dem Kinn] zum Kortex leitet.",
          ],
          [
            "Strukturen wie [die Augenbraue, -n|Augenbrauen] und [die Wimper, -n|Wimpern] fungieren primär als physische Barrieren gegen Schweiß und Fremdkörper, bilden jedoch zugleich markante ästhetische Orientierungspunkte.",
          ],
          [
            "Die synchrone Verarbeitung olfaktorischer, gustatorischer und audiovisueller Reize im Gehirn ermöglicht ein kohärentes mentales Abbild unserer Realität.",
          ],
        ],
      },
    },
  },

  die_muskeln: {
    description:
      "Muskulatur, Sehnen, Muskelkraft, Bizeps, Zerrungen, Muskelkater und Krafttraining.",
    details:
      "Muskelphysiologie, Kontraktion, Dehnen, Krämpfe, Regeneration und Sportbiologie (A1–B2)",
    arabicDescription:
      "العضلات والجهاز العضلي (Die Muskeln): العضلات (Muskel)، الأوتار (Sehne)، القوة العضلية، عضلة البايسبس، الشد العضلي (Muskelzerrung)، ألم العضلات بعد التمرين (Muskelkater)، شد وإرخاء العضلات، تمارين القوة والشد، والتقلص العضلي (Krampf).",
    words: [
      {
        german: "der Muskel, -n",
        arabic: "العضلة",
        english: "muscle",
        example: "Regelmäßiges Schwimmen stärkt fast jeden Muskel im gesamten Körper.",
      },
      {
        german: "die Sehne, -n",
        arabic: "الوتر العضلي (الرابط بين العضلة والعظم)",
        english: "tendon",
        example: "Die Achillessehne ist die stärkste und dickste Sehne des Menschen.",
      },
      {
        german: "die Muskelkraft (Sg.)",
        arabic: "القوة العضلية",
        english: "muscle strength, muscular strength",
        example: "Mit beachtlicher Muskelkraft hob der Gewichtheber die schwere Hantel nach oben.",
      },
      {
        german: "der Bizeps, -e",
        arabic: "عضلة البايسبس (العضلة ذات الرأسين العضدية)",
        english: "biceps",
        example: "Er beugt den Arm im rechten Winkel, um seinen trainierten Bizeps zu zeigen.",
      },
      {
        german: "die Muskelzerrung, -en",
        arabic: "التمزق أو الشد العضلي الحاد",
        english: "muscle strain, pulled muscle",
        example:
          "Beim schnellen Sprint zog er sich eine schmerzhafte Muskelzerrung im Oberschenkel zu.",
      },
      {
        german: "der Muskelkater, -",
        arabic: "ألم وتيبس العضلات المتأخر بعد ممارسة الرياضة",
        english: "muscle soreness, DOMS",
        example: "Am Tag nach dem intensiven Fitnesstraining quälte mich ein heftiger Muskelkater.",
      },
      {
        german: "anspannen",
        arabic: "يشد ويقبض العضلة",
        english: "to tense, to flex (muscle)",
        example: "Atmen Sie tief ein und versuchen Sie, die Bauchmuskeln fest anzuspannen.",
      },
      {
        german: "entspannen",
        arabic: "يرخي العضلة",
        english: "to relax (muscle)",
        example: "In der Sauna können sich verkrampfte Muskeln endlich wieder entspannen.",
      },
      {
        german: "das Krafttraining, -s",
        arabic: "تمارين رفع الأثقال وبناء القوة البدنية",
        english: "strength training, weight training",
        example: "Ein ausgewogenes Krafttraining schützt vor Rückenbeschwerden im Alter.",
      },
      {
        german: "die Dehnung, -en",
        arabic: "تمارين الإطالة والتمدد العضلي",
        english: "stretching",
        example:
          "Regelmäßige Dehnung verbessert die Beweglichkeit und Geschmeidigkeit der Gelenke.",
      },
      {
        german: "der Muskelkrampf, -̈e",
        arabic: "التشنج والتقلص العضلي المفاجئ",
        english: "muscle cramp",
        example: "Mitten in der Nacht weckte ihn ein plötzlicher Muskelkrampf in der Wade auf.",
      },
      {
        german: "das Muskelgewebe, -",
        arabic: "النسيج العضلي الحيوي",
        english: "muscle tissue",
        example: "Ausreichend Eiweiß in der Nahrung unterstützt die Reparatur von Muskelgewebe.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Starke Muskeln durch Sport",
        intro: "Einfache Sätze über Muskeln, Kraft und Bewegung (A1).",
        paragraphs: [
          [
            "Unser Körper hat über sechshundert [der Muskel, -n|Muskeln].",
            "Wenn ich den Arm beuge, wird [der Bizeps, -e|mein Bizeps] hart.",
            "Ich kann die Muskeln [anspannen|anspannen] und wieder [entspannen|entspannen].",
          ],
          [
            "Mit viel [die Muskelkraft (Sg.)|Muskelkraft] kann ich schwere Kisten heben.",
            "Ich mache gern Sport und laufe im Park.",
            "Aber wenn ich zu viel trainiere, habe ich am nächsten Morgen [der Muskelkater, -|Muskelkater].",
          ],
          ["Ein heißes Bad hilft gegen die Schmerzen."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Im Fitnessstudio: Richtig trainieren",
        intro: "Krafttraining, Aufwärmen, Dehnung und Muskelkrämpfe (A2).",
        paragraphs: [
          [
            "Zweimal pro Woche gehe ich ins Sportzentrum, um gezieltes [das Krafttraining, -s|Krafttraining] zu machen.",
            "Vor dem Heben schwerer Gewichte wärme ich mich immer auf dem Laufband auf.",
          ],
          [
            "Nach den Übungen mache ich sanfte [die Dehnung, -en|Dehnungen], um Verletzungen vorzubeugen.",
            "Früher hatte ich oft [der Muskelkrampf, -̈e|einen schmerzhaften Muskelkrampf] beim Schlafen.",
            "Seitdem ich mehr Magnesium nehme und [die Sehne, -n|die Sehnen] regelmäßig dehne, geht es mir viel besser.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Funktionelle Muskelphysiologie und Verletzungsprävention",
        intro: "Zusammenspiel von Agonisten und Antagonisten, Zerrungen und Mikrotraumata (B1).",
        paragraphs: [
          [
            "Jede gezielte Körperbewegung basiert auf dem antagonistischen Prinzip der Muskulatur.",
            "Während sich ein Beugemuskel wie [der Bizeps, -e|der Bizeps] zusammenzieht, muss der Gegenspieler nachgeben und sich [entspannen|entspannen].",
          ],
          [
            "Plötzliche Überlastungen bei unzureichendem Aufwärmen führen leicht zu [die Muskelzerrung, -en|einer schmerzhaften Muskelzerrung].",
            "Der berüchtigte [der Muskelkater, -|Muskelkater] resultiert hingegen nicht aus Milchsäure, sondern aus mikroskopisch kleinen Rissen in [das Muskelgewebe, -|dem Muskelgewebe], die während der Regenerationsphase heilen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Myofibrilläre Kontraktion, Hypertrophie und Sehnenbiomechanik",
        intro: "Aktin-Myosin-Filamente, Sarkomere und Sehnenelastizität (B2).",
        paragraphs: [
          [
            "Auf zellulärer Ebene vollzieht sich die Kontraktion von [der Muskel, -n|Muskeln] durch das Ineinandergleiten von Aktin- und Myosinfilamenten unter Spaltung von Adenosintriphosphat (ATP).",
            "Gezieltes progressives [das Krafttraining, -s|Krafttraining] setzt mechanische Spannungsreize, die über Proteinsynthese zur Hypertrophie der Muskelfasern führen.",
          ],
          [
            "Kollagene [die Sehne, -n|Sehnen] besitzen zwar hohe Zugfestigkeit, adaptieren jedoch aufgrund geringerer Vaskularisierung deutlich langsamer an Belastungssteigerungen als vaskularisiertes Gewebe.",
          ],
          [
            "Präventives Stabitraining und gezielte Mobilitätsroutinen erhalten die neuromuskuläre Balance und minimieren das Risiko chronischer Überlastungssyndrome.",
          ],
        ],
      },
    },
  },

  das_skelett: {
    description:
      "Knochen, Wirbelsäule, Schädel, Rippen, Becken, Gelenke, Knorpel und Knochenbrüche.",
    details: "Osteologie, Skelettsystem, Gelenkmechanik, Knochendichte und Haltung (A1–B2)",
    arabicDescription:
      "الهيكل العظمي (Das Skelett): الهيكل العظمي، العظام (Knochen)، العمود الفقري (Wirbelsäule)، الجمجمة (Schädel)، الأضلاع (Rippe)، الحوض (Becken)، المفاصل (Gelenk)، الغضاريف (Knorpel)، نخاع العظم، كسور العظام (Knochenbruch)، واستقامة القامة.",
    words: [
      {
        german: "das Skelett, -e",
        arabic: "الهيكل العظمي الكامل",
        english: "skeleton",
        example: "Das menschliche Skelett besteht bei Erwachsenen aus über zweihundert Knochen.",
      },
      {
        german: "der Knochen, -",
        arabic: "العظم",
        english: "bone",
        example: "Kalzium und Vitamin D sind unentbehrlich für harte, gesunde Knochen.",
      },
      {
        german: "die Wirbelsäule, -n",
        arabic: "العمود الفقري",
        english: "spine, vertebral column",
        example: "Die doppel-s-förmige Wirbelsäule federt Stöße beim Laufen elastisch ab.",
      },
      {
        german: "der Schädel, -",
        arabic: "الجمجمة (عظام الرأس)",
        english: "skull, cranium",
        example: "Der massive knöcherne Schädel schützt das empfindliche Gehirn vor Verletzungen.",
      },
      {
        german: "die Rippe, -n",
        arabic: "الضلع في القفص الصدري",
        english: "rib",
        example: "Zwölf Rippenpaare umschließen das Herz und die Lungenflügel im Brustkorb.",
      },
      {
        german: "das Becken, -",
        arabic: "عظام الحوض",
        english: "pelvis",
        example: "Das breite Becken verbindet den Rumpf stabil mit den Beinen.",
      },
      {
        german: "das Gelenk, -e",
        arabic: "المفصل العظمي الحركي",
        english: "joint (anatomy)",
        example: "Das Kniegelenk ist das größte und am stärksten belastete Gelenk des Menschen.",
      },
      {
        german: "der Knorpel, -",
        arabic: "الغضروف المفصلي العازل",
        english: "cartilage",
        example:
          "Der glatte Knorpel verhindert, dass die Knochenenden schmerzhaft aneinander reiben.",
      },
      {
        german: "das Knochenmark (Sg.)",
        arabic: "نخاع العظم (مصنع خلايا الدم)",
        english: "bone marrow",
        example: "Im roten Knochenmark werden täglich Milliarden neuer Blutzellen gebildet.",
      },
      {
        german: "der Knochenbruch, -̈e",
        arabic: "كسر العظم (الشرخ أو الكسر الكامل)",
        english: "bone fracture, broken bone",
        example:
          "Nach dem Skiunfall musste der Knochenbruch mit einer Schiene ruhiggestellt werden.",
      },
      {
        german: "die Körperhaltung, -en",
        arabic: "وضعية وقامة الجسم",
        english: "posture, body posture",
        example:
          "Eine aufrechte Körperhaltung beugt Nackenschmerzen und Bandscheibenvorfällen vor.",
      },
      {
        german: "die Knochendichte, -n",
        arabic: "كثافة وصلابة العظام",
        english: "bone density",
        example:
          "Mit zunehmendem Alter sollte man die Knochendichte zur Osteoporose-Vorsorge messen lassen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Das Skelett hält uns aufrecht",
        intro: "Einfache Sätze über Knochen, Kopf und Wirbelsäule (A1).",
        paragraphs: [
          [
            "Ohne [das Skelett, -e|unser Skelett] könnten wir nicht stehen.",
            "Im Körper gibt es viele harte [der Knochen, -|Knochen].",
            "Oben schützt [der Schädel, -|der Schädel] unser Gehirn.",
          ],
          [
            "Im Rücken verläuft [die Wirbelsäule, -n|die lange Wirbelsäule].",
            "Im Brustkorb liegen [die Rippe, -n|die Rippen] wie ein Käfig um das Herz.",
            "Zwei Knochen treffen sich in [das Gelenk, -e|einem Gelenk], damit wir uns bewegen können.",
          ],
          ["Milch und Sonnenlicht machen unsere Knochen stark und gesund."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Röntgenbild nach dem Fahrradunfall",
        intro: "Knochenbrüche, Gipsverbände und gesunde Haltung (A2).",
        paragraphs: [
          [
            "Vor zwei Monaten stürzte mein Kollege Jonas unglücklich mit dem Fahrrad.",
            "Sein Arm schwoll sofort an und er hatte große Schmerzen.",
            "Im Krankenhaus machte der Arzt ein Röntgenbild und stellte [der Knochenbruch, -̈e|einen Knochenbruch] an der Speiche fest.",
          ],
          [
            "Der Arm wurde für sechs Wochen eingegipst, damit der Knochen wieder zusammenwachsen konnte.",
            "Heute achtet Jonas viel mehr auf seine [die Körperhaltung, -en|Körperhaltung] und stärkt seinen Rücken durch Schwimmen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Achsenskelett und die Belastbarkeit des Bewegungsapparats",
        intro: "Bandscheiben, Gelenkknorpel und Knochenumbauprozesse (B1).",
        paragraphs: [
          [
            "Das menschliche [das Skelett, -e|Skelett] erfüllt eine doppelte Funktion: Es gewährleistet biomechanische Stabilität und schützt lebenswichtige Organe.",
            "Die geschwungene Form von [die Wirbelsäule, -n|der Wirbelsäule] dämpft zusammen mit den Bandscheiben axiale Druckkräfte effektiv ab.",
          ],
          [
            "Im Gelenkspalt überzieht elastischer [der Knorpel, -|Knorpel] die Knochenenden und minimiert Reibungswiderstände.",
            "Wird diese Knorpelschicht durch Fehlbelastungen abgenutzt, entsteht schmerzhafte Arthrose in [das Gelenk, -e|den Gelenken].",
          ],
          [
            "Ein oft verkannter Aspekt: Im Inneren der Röhrenknochen produziert [das Knochenmark (Sg.)|das Knochenmark] lebenswichtige Erythrozyten und Leukozyten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Osteozytäre Remodellierung, Gelenkarthrosen und Osteoporose",
        intro:
          "Osteoklasten, Osteoblasten, Mineralisation und biomechanische Kraftübertragung (B2).",
        paragraphs: [
          [
            "Knochengewebe ist kein starres Kalziumgerüst, sondern ein dynamisch aktives Stoffwechselorgan.",
            "Das Gleichgewicht zwischen Knochenaufbau durch Osteoblasten und Knochenresorption durch Osteoklasten determiniert [die Knochendichte, -n|die Knochendichte] eines Individuums.",
          ],
          [
            "Hormonelle Umstellungen im Senium können diese Balance stören und zu systemischer Osteoporose führen, was das Risiko für pathologische [der Knochenbruch, -̈e|Knochenbrüche] drastisch erhöht.",
          ],
          [
            "Im Bereich von [das Becken, -|Becken] und Hüftgelenken wirken gigantische Hebelkräfte, deren physiologische Verteilung von einer intakten Rumpfmuskulatur und einer ergonomischen [die Körperhaltung, -en|Körperhaltung] abhängt.",
          ],
        ],
      },
    },
  },

  die_inneren_organe: {
    description: "Herz, Lunge, Magen, Leber, Nieren, Darm, Gehirn und Bauchspeicheldrüse.",
    details:
      "Innere Anatomie, Organfunktionen, Vitalwerte, Entgiftung und Sauerstoffversorgung (A1–B2)",
    arabicDescription:
      "الأعضاء الداخلية (Die inneren Organe): الأعضاء الحيوية، القلب (Herz)، الرئتان (Lunge)، المعدة (Magen)، الكبد (Leber)، الكلى (Niere)، الأمعاء (Darm)، الدماغ (Gehirn)، والبنكرياس (Bauchspeicheldrüse) والمرارة والطحال.",
    words: [
      {
        german: "das innere Organ, -e",
        arabic: "العضو الداخلي في جسم الإنسان",
        english: "internal organ",
        example: "Jedes innere Organ erfüllt eine hochspezialisierte Aufgabe im Organismus.",
      },
      {
        german: "das Herz, -en",
        arabic: "القلب (مضخة الدم الحيوية)",
        english: "heart",
        example: "Das gesunde Herz schlägt im Ruhezustand etwa sechzig bis achtzig Mal pro Minute.",
      },
      {
        german: "die Lunge, -n",
        arabic: "الرئة (عضو التنفس)",
        english: "lung",
        example: "Die Lunge nimmt frischen Sauerstoff aus der Luft auf und gibt Kohlendioxid ab.",
      },
      {
        german: "der Magen, -̈",
        arabic: "المعدة (عضو هضم الطعام)",
        english: "stomach",
        example: "Nach dem üppigen Festmahl lag das schwere Essen wie ein Stein im Magen.",
      },
      {
        german: "die Leber, -n",
        arabic: "الكبد (عضو إزالة السموم والتمثيل)",
        english: "liver",
        example:
          "Die Leber ist das größte Entgiftungsorgan unseres Körpers und speichert Nährstoffe.",
      },
      {
        german: "die Niere, -n",
        arabic: "الكلية (عضو تنقية وتصفية الدم)",
        english: "kidney",
        example: "Zwei gesunde Nieren filtern Abfallstoffe aus dem Blut und scheiden Urin aus.",
      },
      {
        german: "der Darm, -̈e",
        arabic: "الأمعاء (الدقيقة والغليظة)",
        english: "intestine, bowel, gut",
        example: "Ein großer Teil unseres Immunsystems ist im Darm angesiedelt.",
      },
      {
        german: "das Gehirn, -e",
        arabic: "الدماغ والمخ",
        english: "brain",
        example: "Das Gehirn steuert alle Gedanken, Bewegungen und lebenswichtigen Reflexe.",
      },
      {
        german: "die Bauchspeicheldrüse, -n",
        arabic: "البنكرياس (غدة إفراز الإنسولين)",
        english: "pancreas",
        example:
          "Die Bauchspeicheldrüse produziert wichtiges Insulin zur Regulierung des Blutzuckers.",
      },
      {
        german: "die Gallenblase, -n",
        arabic: "المرارة / كيس الصفراء",
        english: "gallbladder",
        example: "In der Gallenblase wird Verdauungssaft für die Fettspaltung gespeichert.",
      },
      {
        german: "die Milz, -en",
        arabic: "الطحال",
        english: "spleen",
        example:
          "Die Milz baut überalterte rote Blutkörperchen ab und unterstützt die Immunabwehr.",
      },
      {
        german: "die Harnblase, -n",
        arabic: "المثانة البولية",
        english: "urinary bladder",
        example: "Wenn die Harnblase voll ist, signalisieren Nervenimpulse Harndrang.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Was arbeitet in unserem Bauch?",
        intro: "Einfache Sätze über Herz, Magen, Lunge und Gehirn (A1).",
        paragraphs: [
          [
            "In unserem Körper schlägt [das Herz, -en|das Herz].",
            "Es pumpt Tag und Nacht Blut durch den Körper.",
            "Mit [die Lunge, -n|der Lunge] atmen wir frische Luft ein.",
          ],
          [
            "Wenn wir essen, kommt das Essen zuerst in [der Magen, -̈|den Magen].",
            "Danach geht die Nahrung weiter in [der Darm, -̈e|den Darm].",
            "Oben im Kopf denkt [das Gehirn, -e|das Gehirn].",
          ],
          ["Jedes [das innere Organ, -e|innere Organ] ist ein echtes Wunder der Natur."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Gesunde Organe durch gute Ernährung",
        intro: "Leber, Nieren, Wasser trinken und Blutzuckerspiegel (A2).",
        paragraphs: [
          [
            "Um unsere Organe fit zu halten, müssen wir auf einen gesunden Lebensstil achten.",
            "Wer täglich zwei Liter Wasser trinkt, hilft [die Niere, -n|den beiden Nieren], Schadstoffe aus dem Körper zu spülen.",
          ],
          [
            "Auf fettiges Essen und Alkohol reagiert [die Leber, -n|die Leber] empfindlich, weil sie schwer arbeiten muss.",
            "Auch [die Bauchspeicheldrüse, -n|die Bauchspeicheldrüse] braucht Pausen von zu viel Zucker, um den Blutzuckerspiegel stabil zu halten.",
          ],
          ["Mit viel Gemüse und Bewegung fühlen sich alle Organe rundum wohl."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das komplexe Zusammenspiel der inneren Organe",
        intro: "Kreislauf, Gasaustausch, Filterfunktionen und Darm-Hirn-Achse (B1).",
        paragraphs: [
          [
            "Der menschliche Organismus gleicht einem hochentwickelten Chemiewerk, in dem jedes [das innere Organ, -e|innere Organ] mit den anderen vernetzt ist.",
            "Während [das Herz, -en|das Herz] als unermüdlicher Muskel das Blut durch den Körper treibt, garantiert [die Lunge, -n|die Lunge] die kontinuierliche Oxygenierung.",
          ],
          [
            "Gleichzeitig arbeiten [die Leber, -n|die Leber] und [die Niere, -n|die Nieren] rund um die Uhr als körpereigene Kläranlagen.",
            "Die moderne Forschung betont zudem die faszinierende 'Darm-Hirn-Achse': Das Mikrobiom in [der Darm, -̈e|dem Darm] kommuniziert über neuronale Botenstoffe direkt mit [das Gehirn, -e|dem Gehirn] und beeinflusst sogar unsere seelische Verfassung.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Viszerale Homöostase, Endokrinologie und Organinsuffizienzen",
        intro: "Kardiopulmonale Kopplung, hepatische Clearance und Glukose-Homöostase (B2).",
        paragraphs: [
          [
            "Die viszerale Homöostase stützt sich auf hochkomplexe Rückkopplungsschleifen zwischen ZNS, Vegetativum und Organsystemen.",
            "Ein partieller Funktionsverlust der [die Bauchspeicheldrüse, -n|Bauchspeicheldrüse] (Insulinsekretionsdefizit) induziert systemische Stoffwechselentgleisungen (Diabetes mellitus).",
          ],
          [
            "Ebenso führt eine kardiale Dekompensation von [das Herz, -en|dem Herzen] sekundär zu venösen Rückstauungen in [die Leber, -n|der Leber] und pulmonalen Ödemen in [die Lunge, -n|den Lungen].",
          ],
          [
            "Die Entschlüsselung dieser interdependenten pathophysiologischen Kaskaden ist die Grundlage moderner innerer Medizin und Intensivtherapie.",
          ],
        ],
      },
    },
  },

  die_koerpersysteme: {
    description: "Blutkreislauf, Nervensystem, Immunsystem, Verdauung, Atmung und Stoffwechsel.",
    details:
      "Systemische Physiologie, Hormone, Lymphe, Vitalfunktionen und Bio-Regulierung (A1–B2)",
    arabicDescription:
      "أجهزة الجسم الحيوية (Die Körpersysteme): أجهزة الجسم، الدورة الدموية (Blutkreislauf)، الجهاز العصبي (Nervensystem)، جهاز المناعة (Immunsystem)، الجهاز الهضمي (Verdauung)، الجهاز التنفسي (Atmung)، جهاز الغدد الصماء (Hormonsystem)، الجهاز اللمفاوي، وعملية التمثيل الغذائي (Stoffwechsel).",
    words: [
      {
        german: "das Körpersystem, -e",
        arabic: "الجهاز الحيوي في الجسم (العصبي، الدوري، إلخ)",
        english: "body system, organ system",
        example: "Jedes Körpersystem arbeitet harmonisch mit den anderen Systemen zusammen.",
      },
      {
        german: "der Blutkreislauf, -̈e",
        arabic: "الدورة الدموية",
        english: "blood circulation, circulatory system",
        example: "Körperliche Aktivität bringt den Blutkreislauf in Schwung und stärkt die Gefäße.",
      },
      {
        german: "das Nervensystem, -e",
        arabic: "الجهاز العصبي المركزي والمحيطي",
        english: "nervous system",
        example:
          "Das Nervensystem leitet Sinnesreize in Millisekundenschnelle an das Rückenmark weiter.",
      },
      {
        german: "das Immunsystem, -e",
        arabic: "جهاز المناعة والدفاع الحيوي",
        english: "immune system",
        example: "Ein starkes Immunsystem wehrt Viren und bakterielle Erreger erfolgreich ab.",
      },
      {
        german: "die Verdauung (Sg.)",
        arabic: "عملية الهضم",
        english: "digestion",
        example:
          "Ballaststoffreiche Vollkornprodukte fördern eine gesunde und regelmäßige Verdauung.",
      },
      {
        german: "die Atmung (Sg.)",
        arabic: "عملية التنفس والشهيق والزفير",
        english: "respiration, breathing",
        example: "Bei Panikattacken hilft eine bewusste, langsame Atmung in den Bauchraum.",
      },
      {
        german: "das Hormonsystem, -e",
        arabic: "جهاز الغدد الصماء والهرمونات",
        english: "endocrine system, hormone system",
        example: "Das Hormonsystem steuert Wachstum, Schlaf-Wach-Rhythmus und Fortpflanzung.",
      },
      {
        german: "das Lymphsystem, -e",
        arabic: "الجهاز اللمفاوي ونقل السوائل",
        english: "lymphatic system",
        example:
          "Das Lymphsystem transportiert Gewebeflüssigkeit ab und filtert Krankheitserreger in den Knoten.",
      },
      {
        german: "der Stoffwechsel, -",
        arabic: "التمثيل الغذائي والأيض (الميتابوليزم)",
        english: "metabolism",
        example: "Ein aktiver Stoffwechsel verbrennt Kalorien effizient und spendet Energie.",
      },
      {
        german: "die Abwehrkraft, -̈e",
        arabic: "قوة الدفاع والمقاومة المناعية",
        english: "immune defenses, resistance",
        example: "Ausreichender Schlaf und Vitamine stärken die natürlichen Abwehrkräfte.",
      },
      {
        german: "die Blutgefäße (Pl.)",
        arabic: "الأوعية الدموية (شرايين وأوردة)",
        english: "blood vessels",
        example: "Durch elastische Blutgefäße fließt das sauerstoffreiche Blut in jeden Muskel.",
      },
      {
        german: "die Regulierung, -en",
        arabic: "التنظيم والضبط الذاتي الداخلي",
        english: "regulation (biological)",
        example: "Die automatische Regulierung der Körperkerntemperatur schützt vor Überhitzung.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wie arbeitet unser Körper?",
        intro: "Einfache Sätze über Blut, Atmung und Essen (A1).",
        paragraphs: [
          [
            "Unser Körper hat tolle Systeme.",
            "[der Blutkreislauf, -̈e|Der Blutkreislauf] bringt Blut in jeden Finger und Fuß.",
            "Mit [die Atmung (Sg.)|der Atmung] holen wir Sauerstoff in die Lungen.",
          ],
          [
            "Wenn wir essen, startet [die Verdauung (Sg.)|die Verdauung] im Bauch.",
            "Gegen Schnupfen und Husten schützt uns [das Immunsystem, -e|das Immunsystem].",
            "Viele Nerven melden Schmerzen an den Kopf.",
          ],
          ["Alle [das Körpersystem, -e|Körpersysteme] arbeiten zusammen wie ein großes Team."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fit durch die kalte Jahreszeit",
        intro: "Immunsystem stärken, Abwehrkräfte und gesunder Stoffwechsel (A2).",
        paragraphs: [
          [
            "Im nasskalten Herbst werden viele Menschen krank und bekommen Erkältungen.",
            "Um meine [die Abwehrkraft, -̈e|Abwehrkräfte] zu stärken, gehe ich jeden Tag an der frischen Luft spazieren.",
            "Die Kälte regt [der Blutkreislauf, -̈e|den Blutkreislauf] und [der Stoffwechsel, -|den Stoffwechsel] an.",
          ],
          [
            "Mit frischem Obst und warmem Ingwertee unterstützen wir [das Immunsystem, -e|das Immunsystem].",
            "Wer sich regelmäßig bewegt, verbessert auch [die Atmung (Sg.)|seine Atmung] und schläft nachts tiefer.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Ganzheitliche Vernetzung der biologischen Regelsysteme",
        intro: "Neuro-endokrine Achsen, Lymphe und Homöostase (B1).",
        paragraphs: [
          [
            "Der Erhalt des Lebens beruht auf der permanenten Abstimmung spezialisierter Körpersysteme.",
            "Während [das Nervensystem, -e|das Nervensystem] über elektrische Potenziale blitzschnell auf akute Reize reagiert, übernimmt [das Hormonsystem, -e|das Hormonsystem] die langfristige hormonelle Steuerung.",
          ],
          [
            "Parallel dazu sorgt [das Lymphsystem, -e|das Lymphsystem] für den Flüssigkeitsausgleich im Gewebe und unterstützt die Immunüberwachung.",
            "Erst die perfekte [die Regulierung, -en|Regulierung] von Blutdruck, pH-Wert und Blutzuckerspiegel sichert das physiologische Gleichgewicht unseres Körpers.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Systembiologie, Neuroimmunologie und kardiovaskuläre Hämodynamik",
        intro: "Psychoneuroimmunologie, Endothelfunktion und zelluläre Signaltransduktion (B2).",
        paragraphs: [
          [
            "Die Systembiologie bricht mit dem mechanistischen Organparadigma und begreift den Menschen als vernetztes kybernetisches Gefüge.",
            "Über die Interaktion von Zytokinen, Neuropeptiden und Hormonen beeinflussen psychische Stressoren unmittelbar [das Immunsystem, -e|das Immunsystem] und die Gefäßgesundheit in [die Blutgefäße (Pl.)|den Blutgefäßen].",
          ],
          [
            "Störungen im zellulären [der Stoffwechsel, -|Stoffwechsel] (metabolisches Syndrom) schädigen das Endothel und beeinträchtigen [der Blutkreislauf, -̈e|den Blutkreislauf] systemisch.",
          ],
          [
            "Moderne integrative Medizin zielt darauf ab, diese multi-organischen Regelkreise präventiv zu modulieren und adaptive Selbstheilungskräfte zu stärken.",
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

const res = vocabularyCollectionSchema.safeParse(kgData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(kgPath, JSON.stringify(kgData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to koerper-und-gesundheit.json!");
