import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  der_weltraum: {
    description:
      "Planeten, Sterne, Sonnensystem, Galaxien, Astronauten, Raumstationen und Raketen.",
    details: "Astronomie, Raumfahrt, Himmelskörper, Schwerelosigkeit und Kosmologie (A1–B2)",
    arabicDescription:
      "الفضاء الخارجي والكون (Der Weltraum): الفضاء (Weltraum)، الكواكب (Planet)، النجوم (Stern)، الشمس، القمر (Mond)، المجرات (Galaxie)، النظام الشمسي (Sonnensystem)، محطة الفضاء الدولية (Raumstation)، رائد الفضاء (Astronaut)، الصاروخ، التلسكوب، وانعدام الجاذبية (Schwerelosigkeit).",
    words: [
      {
        german: "der Weltraum (Sg.)",
        arabic: "الفضاء الخارجي الشاسع",
        english: "outer space, space",
        example: "Im unendlichen Weltraum kreisen unzählige Galaxien und Planeten.",
      },
      {
        german: "der Planet, -en",
        arabic: "الكوكب السيّار",
        english: "planet",
        example: "Die Erde ist der dritte Planet von der Sonne aus gezählt.",
      },
      {
        german: "der Stern, -e",
        arabic: "النجم المضيء في السماء",
        english: "star",
        example: "In einer klaren Sommernacht funkeln Millionen Sterne am Himmel.",
      },
      {
        german: "die Galaxie, -n",
        arabic: "المجرة الكونية (مثل درب التبانة)",
        english: "galaxy",
        example: "Unsere Heimatgalaxie, die Milchstraße, umfasst Milliarden von Sternsystemen.",
      },
      {
        german: "das Sonnensystem, -e",
        arabic: "المجموعة والنظام الشمسي",
        english: "solar system",
        example: "Acht Planeten umkreisen die Sonne in unserem Sonnensystem.",
      },
      {
        german: "die Raumstation, -en",
        arabic: "المحطة الفضائية المدارية (ISS)",
        english: "space station",
        example: "Auf der Internationalen Raumstation forschen Astronauten aus vielen Nationen.",
      },
      {
        german: "der Astronaut, -en",
        arabic: "رائد الفضاء",
        english: "astronaut, cosmonaut",
        example: "Der Astronaut führte einen mehrstündigen Außeneinsatz im All durch.",
      },
      {
        german: "die Rakete, -n",
        arabic: "الصاروخ الفضائي للإطلاق",
        english: "rocket, space rocket",
        example: "Mit lautem Getöse hob die mächtige Rakete von der Startrampe ab.",
      },
      {
        german: "das Weltraumteleskop, -e",
        arabic: "التلسكوب الفضائي لرصد النجوم",
        english: "space telescope",
        example: "Das Weltraumteleskop sendet gestochen scharfe Bilder ferner Galaxien zur Erde.",
      },
      {
        german: "die Schwerelosigkeit (Sg.)",
        arabic: "انعدام الوزن والجاذبية في الفضاء",
        english: "weightlessness, zero gravity",
        example: "In der Schwerelosigkeit schweben Wassertropfen als perfekte Kugeln im Raum.",
      },
      {
        german: "der Asteroid, -en",
        arabic: "الكويكب الصخري الفضائي",
        english: "asteroid",
        example: "Zwischen Mars und Jupiter befindet sich ein dichter Gürtel aus Asteroiden.",
      },
      {
        german: "die Umlaufbahn, -en",
        arabic: "المدار الفلكي حول الكوكب (الأوربت)",
        english: "orbit (astronomical)",
        example: "Der Satellit schwenkte nach dem Start exakt in die geplante Umlaufbahn ein.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Blick in die Sterne",
        intro: "Einfache Sätze über Sterne, Planeten und Raumfahrer (A1).",
        paragraphs: [
          [
            "In der Nacht schaue ich nach oben in [der Weltraum (Sg.)|den Weltraum].",
            "Dort oben leuchtet [der Stern, -e|ein heller Stern] neben dem Mond.",
            "Unsere Erde ist ein schöner blauer [der Planet, -en|Planet].",
          ],
          [
            "Mit [die Rakete, -n|einer Rakete] fliegen Menschen ins All.",
            "[der Astronaut, -en|Ein mutiger Astronaut] arbeitet auf [die Raumstation, -en|einer Raumstation].",
            "In der Raumstation fliegt alles durch [die Schwerelosigkeit (Sg.)|die Schwerelosigkeit].",
          ],
          ["Das Weltall ist riesig und voller Geheimnisse."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Reise durch unser Sonnensystem",
        intro: "Die Planeten der Sonne, Raumstationen und Teleskope (A2).",
        paragraphs: [
          [
            "In der Schule haben wir gelernt, wie [das Sonnensystem, -e|unser Sonnensystem] aufgebaut ist.",
            "Im Zentrum steht die heiße Sonne, um die alle acht Planeten kreisen.",
          ],
          [
            "Mit [das Weltraumteleskop, -e|einem modernen Weltraumteleskop] können Astronomen sogar ferne [die Galaxie, -n|Galaxien] beobachten.",
            "Um die Erde zieht die Raumstation ihre feste [die Umlaufbahn, -en|Umlaufbahn].",
            "Wissenschaftler hoffen, in den nächsten Jahrzehnten Astronauten zum roten Planeten Mars zu schicken.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die friedliche Erforschung des Kosmos",
        intro: "Internationale Kooperation im All und astrophysikalische Entdeckungen (B1).",
        paragraphs: [
          [
            "Die Erkundung von [der Weltraum (Sg.)|dem Weltraum] gehört zu den größten wissenschaftlichen Herausforderungen der Menschheit.",
            "Internationale Kooperationen haben bewiesen, dass Nationen im All friedlich zusammenarbeiten können, um auf [die Raumstation, -en|Raumstationen] bahnbrechende Experimente unter [die Schwerelosigkeit (Sg.)|Schwerelosigkeit] durchzuführen.",
          ],
          [
            "Gleichzeitig überwachen Hochleistungssensoren den Himmel, um frühzeitig die Flugbahn potenziell gefährlicher [der Asteroid, -en|Asteroiden] zu berechnen.",
          ],
          [
            "Bilder aus den Tiefen des Universums erinnern uns daran, wie kostbar und verletzlich unser Heimatplanet im endlosen Kosmos ist.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Astrophysik, Raumfahrtökonomie und die Suche nach Exoplaneten",
        intro: "Kosmologische Modelle, Spektroskopie und kommerzielle Raumfahrt (B2).",
        paragraphs: [
          [
            "Die Entdeckung tausender extrasolarer [der Planet, -en|Planeten] durch spektroskopische Messungen hat die Astrobiologie revolutioniert.",
            "Moderne Infrarot-[das Weltraumteleskop, -e|Weltraumteleskope] analysieren die Atmosphärenzusammensetzung ferner Himmelskörper auf chemische Biosignaturen.",
          ],
          [
            "Parallel dazu vollzieht sich ein Paradigmenwechsel in der Raumfahrtökonomie ('New Space'): Wiederverwendbare Trägersysteme senken die Startkosten für Nutzlasten in [die Umlaufbahn, -en|die niedrige Erdumlaufbahn] drastisch.",
          ],
          [
            "Die bemannte Exploration des Mondes und des Mars im Rahmen des Artemis-Programms markiert den Übergang von reiner Forschung zur permanenten menschlichen Präsenz im interplanetaren Raum.",
          ],
        ],
      },
    },
  },

  die_erde: {
    description: "Erde, Kontinente, Ozeane, Erdkruste, Atmosphäre, Pole, Erdachse und Schwerkraft.",
    details: "Geowissenschaften, Erdaufbau, Geodynamik, Magnetfeld und Biosphäre (A1–B2)",
    arabicDescription:
      "كوكب الأرض (Die Erde): كوكب الأرض، القارات (Kontinent)، المحيطات (Ozean)، خط الاستواء (Äquator)، الغلاف الجوي (Atmosphäre)، القشرة الأرضية (Erdkruste)، محور الأرض (Erdachse)، الجاذبية الأرضية (Schwerkraft)، القطب الشمالي والجنوبي، والمناخ.",
    words: [
      {
        german: "die Erde (Sg.)",
        arabic: "كوكب الأرض واليابسة",
        english: "Earth (planet)",
        example: "Die Erde ist der einzige uns bekannte Planet, auf dem Leben existiert.",
      },
      {
        german: "der Kontinent, -e",
        arabic: "القارة الجغرافية الكبرى",
        english: "continent",
        example: "Auf unserem Planeten gibt es sieben geographische Kontinente.",
      },
      {
        german: "der Ozean, -e",
        arabic: "المحيط المائي الشاسع",
        english: "ocean",
        example: "Der Pazifische Ozean ist das größte und tiefste Gewässer der Erde.",
      },
      {
        german: "der Äquator (Sg.)",
        arabic: "خط الاستواء الوهمي",
        english: "equator",
        example: "Am Äquator steht die Sonne das ganze Jahr über steil am Himmel.",
      },
      {
        german: "die Erdatmosphäre, -n",
        arabic: "الغلاف الجوي المحيط بالأرض",
        english: "atmosphere (Earth's)",
        example: "Die Erdatmosphäre schützt uns vor tödlicher kosmischer Strahlung.",
      },
      {
        german: "die Erdkruste (Sg.)",
        arabic: "القشرة الأرضية الصخرية الخارجية",
        english: "Earth's crust",
        example: "Die Erdkruste besteht aus tektonischen Platten, die sich langsam verschieben.",
      },
      {
        german: "die Erdachse, -n",
        arabic: "محور دوران الأرض المائل",
        english: "Earth's axis",
        example: "Die Neigung der Erdachse ist der Grund für die Entstehung der vier Jahreszeiten.",
      },
      {
        german: "die Schwerkraft (Sg.)",
        arabic: "الجاذبية الأرضية وقوة الثقالة",
        english: "gravity (Earth's)",
        example: "Durch die Schwerkraft fallen Gegenstände immer nach unten auf den Boden.",
      },
      {
        german: "der Nordpol (Sg.)",
        arabic: "القطب الشمالي المتجمد",
        english: "North Pole",
        example: "Am eisigen Nordpol leben Eisbären auf dem arktischen Meereis.",
      },
      {
        german: "der Südpol (Sg.)",
        arabic: "القطب الجنوبي وقارة أنتاركتيكا",
        english: "South Pole",
        example: "Der Südpol liegt mitten auf dem schneebedeckten antarktischen Kontinent.",
      },
      {
        german: "die Hemisphäre, -n",
        arabic: "نصف الكرة الأرضية (الشمالي أو الجنوبي)",
        english: "hemisphere",
        example: "Wenn auf der nördlichen Hemisphäre Sommer ist, herrscht im Süden Winter.",
      },
      {
        german: "das Erdmagnetfeld, -er",
        arabic: "المجال المغناطيسي للأرض",
        english: "Earth's magnetic field",
        example: "Das unsichtbare Erdmagnetfeld lenkt die Nadel eines Kompasses nach Norden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Unser Heimatplanet Erde",
        intro: "Einfache Sätze über die Erde, Meere und Kontinente (A1).",
        paragraphs: [
          [
            "Wir leben alle auf [die Erde (Sg.)|der Erde].",
            "Aus dem Weltall sieht sie blau und weiß aus.",
            "Auf der Erde gibt es riesige [der Kontinent, -e|Kontinente] und blaues Wasser in [der Ozean, -e|den Ozeanen].",
          ],
          [
            "In der Mitte verläuft [der Äquator (Sg.)|der warme Äquator].",
            "Ganz oben liegt [der Nordpol (Sg.)|der Nordpol] und unten [der Südpol (Sg.)|der Südpol].",
            "Dort ist es sehr kalt und überall liegt dickes Eis.",
          ],
          ["[die Schwerkraft (Sg.)|Die Schwerkraft] hält uns sicher auf dem Boden fest."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Warum gibt es Sommer und Winter?",
        intro: "Die Neigung der Erdachse, Jahreszeiten und Nord- und Südpol (A2).",
        paragraphs: [
          [
            "Hast du dich jemals gefragt, warum wir Frühling, Sommer, Herbst und Winter haben?",
            "Der Grund dafür ist die schräge [die Erdachse, -n|Erdachse].",
          ],
          [
            "Weil die Erde leicht geneigt um die Sonne kreist, bekommt jede [die Hemisphäre, -n|Hemisphäre] zu verschiedenen Zeiten mehr Sonnenlicht.",
            "Wenn wir in Deutschland im Juli schwitzen, frieren die Menschen in Australien im kalten Winter.",
            "Umgeben ist unser Planet von [die Erdatmosphäre, -n|einer schützenden Erdatmosphäre] mit lebenswichtigem Sauerstoff.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Geodynamische Prozesse und planetare Schutzschilde",
        intro: "Plattentektonik, Erdkruste und das irdische Magnetfeld (B1).",
        paragraphs: [
          [
            "Die feste Oberfläche unseres Planeten, [die Erdkruste (Sg.)|die Erdkruste], befindet sich in ständiger, unmerklicher Bewegung.",
            "Große Kontinentalplatten driften auf dem zähflüssigen Erdmantel, kollidieren miteinander und türmen mächtige Gebirge auf.",
          ],
          [
            "Im flüssigen äußeren Erdkern erzeugt ein natürlicher Geodynamo [das Erdmagnetfeld, -er|das Erdmagnetfeld].",
            "Dieser unsichtbare Schutzschild schirmt die Biosphäre vor den hochenergetischen Partikeln des Sonnenwinds ab und ermöglicht so dauerhaftes biologisches Leben.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Erdsystemforschung, Biogeochemie und planetare Grenzen",
        intro: "Tipping Points, Erdsystemdynamik und das Anthropozän (B2).",
        paragraphs: [
          [
            "Die moderne Erdsystemwissenschaft analysiert die Interdependenzen zwischen Lithosphäre, Hydrosphäre, Kryosphäre und Atmosphäre.",
            "Anthropogene Treibhausgasemissionen verändern den Strahlungsantrieb in [die Erdatmosphäre, -n|der Atmosphäre], was zu beschleunigtem Eismassenschwund an [der Nordpol (Sg.)|dem Nordpol] und in der Antarktis führt.",
          ],
          [
            "Die thermohaline Zirkulation in [der Ozean, -e|den Ozeanen] koppelt den Wärmetransport zwischen den Tropen am [der Äquator (Sg.)|Äquator] und den polaren Breiten.",
          ],
          [
            "Das Überschreiten planetarer Belastungsgrenzen birgt die Gefahr irreversibler Kippelemente im globalen Klimasystem.",
          ],
        ],
      },
    },
  },

  un_mitgliedsstaaten: {
    description:
      "Staaten, Nationen, Vereinte Nationen, Hauptstädte, Grenzen, Souveränität und Diplomatie.",
    details:
      "Völkerrecht, UN-Charta, Generalversammlung, Diplomatie und internationale Verträge (A1–B2)",
    arabicDescription:
      "الدول الأعضاء في الأمم المتحدة (UN-Mitgliedsstaaten): الدول المستقلة (Staat)، الأمم والشعوب (Nation)، منظمة الأمم المتحدة (UN)، العواصم (Hauptstadt)، الحدود الدولية (Grenze)، السيادة الوطنية (Souveränität)، الجنسية (Staatsbürgerschaft)، المعاهدات والاتفاقيات الدولية (Vertrag)، والدبلوماسية والجمعية العامة.",
    words: [
      {
        german: "der Staat, -en",
        arabic: "الدولة المستقلة ذات السيادة",
        english: "state, sovereign country",
        example:
          "Fast zweihundert souveräne Staaten sind heute vollberechtigte Mitglieder der UNO.",
      },
      {
        german: "die Nation, -en",
        arabic: "الأمة والشعب",
        english: "nation",
        example: "Die Vereinten Nationen setzen sich weltweit für Frieden und Menschenrechte ein.",
      },
      {
        german: "die Vereinten Nationen (UN) (Pl.)",
        arabic: "منظمة الأمم المتحدة",
        english: "United Nations (UN)",
        example: "Der Hauptsitz der Vereinten Nationen befindet sich in New York am East River.",
      },
      {
        german: "die Hauptstadt, -̈e",
        arabic: "العاصمة السياسية للبلاد",
        english: "capital city, capital",
        example: "Berlin ist die Hauptstadt und der Regierungssitz der Bundesrepublik Deutschland.",
      },
      {
        german: "die Staatsgrenze, -n",
        arabic: "الحدود الدولية بين الدول",
        english: "national border, frontier",
        example:
          "Innerhalb des Schengen-Raums wurden die Kontrollen an den Staatsgrenzen abgebaut.",
      },
      {
        german: "die Souveränität (Sg.)",
        arabic: "السيادة الوطنية والاستقلال السياسي",
        english: "sovereignty",
        example:
          "Die territoriale Souveränität jedes Landes muss völkerrechtlich respektiert werden.",
      },
      {
        german: "die Staatsbürgerschaft, -en",
        arabic: "الجنسية والمواطنة الرسمية",
        english: "citizenship, nationality",
        example: "Mit der Einbürgerung erhält man die deutsche Staatsbürgerschaft und einen Pass.",
      },
      {
        german: "der Staatsvertrag, -̈e",
        arabic: "المعاهدة والاتفاقية الدولية الرسمية",
        english: "state treaty, international treaty",
        example:
          "Beide Regierungen unterzeichneten einen historischen Staatsvertrag über den Frieden.",
      },
      {
        german: "die Diplomatie (Sg.)",
        arabic: "الدبلوماسية والعلاقات الدبلوماسية",
        english: "diplomacy",
        example: "Kluge Diplomatie verhindert kriegerische Konflikte durch geduldiges Verhandeln.",
      },
      {
        german: "die UN-Charta (Sg.)",
        arabic: "ميثاق الأمم المتحدة التأسيسي",
        english: "UN Charter",
        example:
          "Die UN-Charta verbietet Angriffskriege und verpflichtet zum friedlichen Interessenausgleich.",
      },
      {
        german: "die Generalversammlung, -en",
        arabic: "الجمعية العامة للأمم المتحدة",
        english: "General Assembly (UN)",
        example:
          "In der Generalversammlung hat jeder Mitgliedsstaat unabhängig von seiner Größe eine Stimme.",
      },
      {
        german: "das Völkerrecht (Sg.)",
        arabic: "القانون الدولي العام",
        english: "international law",
        example:
          "Das Völkerrecht regelt die rechtlichen Beziehungen zwischen den Staaten der Welt.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Länder und Hauptstädte",
        intro: "Einfache Sätze über Länder, Hauptstädte und Grenzen (A1).",
        paragraphs: [
          [
            "Auf der Welt gibt es viele Länder.",
            "Deutschland ist [der Staat, -en|ein Staat] in Europa.",
            "Die schöne [die Hauptstadt, -̈e|Hauptstadt] von Deutschland heißt Berlin.",
          ],
          [
            "Jedes Land hat eine Fahne und [die Staatsgrenze, -n|eine Grenze] zu den Nachbarn.",
            "Ich habe einen Reisepass und [die Staatsbürgerschaft, -en|eine Staatsbürgerschaft].",
            "Alle Staaten zusammen bilden die Welt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Gemeinsam für den Weltfrieden",
        intro: "Die Vereinten Nationen in New York und internationale Zusammenarbeit (A2).",
        paragraphs: [
          [
            "Nach dem Zweiten Weltkrieg gründeten die Länder [die Vereinten Nationen (UN) (Pl.)|die Vereinten Nationen].",
            "Das Ziel der Organisation ist es, Kriege zu verhindern und den Hunger zu bekämpfen.",
          ],
          [
            "Jedes Jahr im September treffen sich die Staatschefs in New York.",
            "In [die Generalversammlung, -en|der großen Generalversammlung] hält jeder Präsident eine Rede.",
            "Durch friedliche [die Diplomatie (Sg.)|Diplomatie] versuchen die Politiker, Streitigkeiten mit Worten statt mit Waffen zu lösen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Völkerrecht und multilaterale Verträge",
        intro: "UN-Charta, Souveränität der Staaten und völkerrechtliche Pflichten (B1).",
        paragraphs: [
          [
            "Das Fundament der gegenwärtigen internationalen Ordnung ist [das Völkerrecht (Sg.)|das universelle Völkerrecht].",
            "Die historische [die UN-Charta (Sg.)|UN-Charta] verankert das strikte Gewaltverbot in zwischenstaatlichen Beziehungen.",
          ],
          [
            "Jeder souveräne [der Staat, -en|Staat] besitzt das Recht auf territoriale Integrität und politische [die Souveränität (Sg.)|Souveränität].",
          ],
          [
            "Durch völkerrechtlich bindende [der Staatsvertrag, -̈e|Staatsverträge] verpflichten sich Regierungen zum Klimaschutz, zur Rüstungskontrolle und zur Wahrung fundamentaler Menschenrechte.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title:
          "Multilateralismus in der Krise: Sicherheitsrat, Souveränitätsprinzip und Global Governance",
        intro: "Veto-Mächte, Schutzverantwortung (R2P) und die Reform der UN-Institutionen (B2).",
        paragraphs: [
          [
            "Die multilaterale Weltordnung sieht sich durch geopolitische Blockkonfrontationen und revisionistische Bestrebungen existentiell herausgefordert.",
            "Das strukturelle Veto der fünf ständigen Mitglieder im Sicherheitsrat lähmt [die Vereinten Nationen (UN) (Pl.)|die Vereinten Nationen] wiederholt bei humanitären Krisen.",
          ],
          [
            "Gleichzeitig kollidiert das traditionelle Westfälische Prinzip absoluter [die Souveränität (Sg.)|Staatssouveränität] zunehmend mit dem völkerrechtlichen Konzept der 'Schutzverantwortung' (Responsibility to Protect).",
          ],
          [
            "Eine umfassende Reform der Institutionen und die Stärkung von [die Generalversammlung, -en|der Generalversammlung] sind unabdingbar, um die Handlungsfähigkeit globaler Governance im 21. Jahrhundert zu sichern.",
          ],
        ],
      },
    },
  },

  europa: {
    description:
      "Europa, Europäische Union, Alpen, Euro, Reisefreiheit, Mittelmeer und Kulturvielfalt.",
    details:
      "Europäische Geographie, Binnenmarkt, Schengen-Raum, Flüsse und Nachbarstaaten (A1–B2)",
    arabicDescription:
      "قارة أوروبا (Europa): قارة أوروبا، الاتحاد الأوروبي (EU)، جبال الألب (Alpen)، البحر الأبيض المتوسط (Mittelmeer)، نهر الراين، العملة الموحدة اليورو (Euro)، حرية التنقل والسفر (Reisefreiheit)، التنوع الثقافي، بحر البلطيق، وبحر الشمال.",
    words: [
      {
        german: "Europa (Sg.)",
        arabic: "قارة أوروبا",
        english: "Europe",
        example:
          "Europa ist geprägt von einer reichen Geschichte und faszinierenden Kulturvielfalt.",
      },
      {
        german: "die Europäische Union (EU) (Sg.)",
        arabic: "الاتحاد الأوروبي",
        english: "European Union (EU)",
        example:
          "Die Europäische Union verbindet siebenundzwanzig Mitgliedstaaten in Frieden und Wohlstand.",
      },
      {
        german: "die Alpen (Pl.)",
        arabic: "سلسلة جبال الألب الشاهقة",
        english: "the Alps",
        example: "Die schneebedeckten Alpen sind das höchste Gebirge im Herzen Europas.",
      },
      {
        german: "das Mittelmeer (Sg.)",
        arabic: "البحر الأبيض المتوسط",
        english: "Mediterranean Sea",
        example: "Am sonnigen Mittelmeer herrscht ein mildes Klima mit warmen Sommern.",
      },
      {
        german: "der Rhein (Sg.)",
        arabic: "نهر الراين الشهير",
        english: "Rhine (river)",
        example:
          "Der Rhein ist eine der verkehrsreichsten Wasserstraßen für die Binnenschifffahrt.",
      },
      {
        german: "der Euro, -s",
        arabic: "اليورو (العملة الأوروبية الموحدة)",
        english: "Euro (currency)",
        example:
          "In zwanzig europäischen Ländern bezahlt man bequem mit derselben Währung, dem Euro.",
      },
      {
        german: "die Reisefreiheit (Sg.)",
        arabic: "حرية السفر والتنقل دون تأشيرة أو حدود (شنغن)",
        english: "freedom of travel",
        example:
          "Dank des Schengener Abkommens genießen europäische Bürger uneingeschränkte Reisefreiheit.",
      },
      {
        german: "die Kulturlandschaft, -en",
        arabic: "المشهد والبيئة الثقافية والحضارية",
        english: "cultural landscape",
        example:
          "Die Weinberge am Mittelrhein gehören zum UNESCO-Welterbe der europäischen Kulturlandschaft.",
      },
      {
        german: "die Sprachenvielfalt (Sg.)",
        arabic: "التنوع اللغوي وتعدد اللغات",
        english: "linguistic diversity",
        example:
          "In Europa werden dutzende verschiedene Amtssprachen und Regionalsprachen gesprochen.",
      },
      {
        german: "die Ostsee (Sg.)",
        arabic: "بحر البلطيق في شمال شرق أوروبا",
        english: "Baltic Sea",
        example:
          "An den flachen Stränden der Ostsee findet man nach Stürmen oft glänzenden Bernstein.",
      },
      {
        german: "die Nordsee (Sg.)",
        arabic: "بحر الشمال",
        english: "North Sea",
        example:
          "Die Nordsee ist bekannt für stürmisches Wetter, Gezeiten und das weite Wattenmeer.",
      },
      {
        german: "der europäische Binnenmarkt, -̈e",
        arabic: "السوق الأوروبية المشتركة الموحدة",
        english: "European single market",
        example:
          "Der europäische Binnenmarkt garantiert den freien Verkehr von Waren, Dienstleistungen und Kapital.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Reisen durch Europa",
        intro: "Einfache Sätze über Europa, Länder und den Euro (A1).",
        paragraphs: [
          [
            "Ich lebe in [Europa (Sg.)|Europa].",
            "Hier gibt es viele schöne Länder wie Frankreich, Spanien und Italien.",
            "In den meisten Ländern bezahlen wir mit [der Euro, -s|dem Euro].",
          ],
          [
            "Im Süden liegt das warme [das Mittelmeer (Sg.)|Mittelmeer].",
            "In der Mitte ragen [die Alpen (Pl.)|die hohen Alpen] in den Himmel.",
            "Durch Deutschland fließt [der Rhein (Sg.)|der lange Rhein].",
          ],
          ["Reisen in Europa ist einfach und macht Spaß."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Urlaub ohne Passkontrollen",
        intro: "Schengen-Raum, Nordsee und Sprachenvielfalt (A2).",
        paragraphs: [
          [
            "Letzten Sommer fuhr ich mit dem Zug von Berlin über die Niederlande bis nach Frankreich.",
            "Früher musste man an jeder Grenze anhalten und den Pass vorzeigen.",
          ],
          [
            "Dank der europäischen Verträge genießen wir heute grenzenlose [die Reisefreiheit (Sg.)|Reisefreiheit].",
            "Im Norden besuchten wir die windige [die Nordsee (Sg.)|Nordsee] und aßen frischen Fisch.",
            "Obwohl jedes Land seine eigene Sprache spricht, bildet [die Europäische Union (EU) (Sg.)|die Europäische Union] eine friedliche Gemeinschaft.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kulturelle Identität und wirtschaftliche Einheit",
        intro: "Vier Freiheiten der EU, Regionalkulturen und Binnenmarkt (B1).",
        paragraphs: [
          [
            "Der europäische Kontinent vereint jahrhundertealte Traditionen mit einem beispiellosen Integrationsprojekt.",
            "Mit der Schaffung von [der europäische Binnenmarkt, -̈e|dem europäischen Binnenmarkt] entstand der größte gemeinsame Wirtschaftsraum der Welt.",
          ],
          [
            "Trotz der wirtschaftlichen Konvergenz bleibt [die Sprachenvielfalt (Sg.)|die beeindruckende Sprachenvielfalt] erhalten: Vom Baltikum an [die Ostsee (Sg.)|der Ostsee] bis zur iberischen Halbinsel prägen regionale Besonderheiten [die Kulturlandschaft, -en|die vielfältige Kulturlandschaft].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Supranationalität, Subsidiaritätsprinzip und europäische Souveränität",
        intro: "Vertrag von Lissabon, Binnenmarkt und geopolitische Resilienz der EU (B2).",
        paragraphs: [
          [
            "[die Europäische Union (EU) (Sg.)|Die Europäische Union] stellt ein sui-generis-Konstrukt dar, das Elemente zwischenstaatlicher Kooperation mit supranationaler Rechtsetzung verbindet.",
            "Das Subsidiaritätsprinzip garantiert, dass Entscheidungen möglichst bürgernah auf mitgliedstaatlicher Ebene getroffen werden, sofern keine unionsweite Regelung zwingend geboten ist.",
          ],
          [
            "In einer multipolaren Weltordnung forciert die Union strategische Autonomie in Technologie, Energie und Verteidigung, um [Europa (Sg.)|Europas] demokratische Werteordnung und wirtschaftliche Wettbewerbsfähigkeit global zu behaupten.",
          ],
        ],
      },
    },
  },

  nord_und_mittelamerika: {
    description:
      "Nord- und Mittelamerika, USA, Kanada, Mexiko, Karibik, Rocky Mountains und Panamakanal.",
    details:
      "Kontinentalgeographie, Großlandschaften, Megastädte, Nationalparks und Seewege (A1–B2)",
    arabicDescription:
      "أمريكا الشمالية والوسطى (Nord- und Mittelamerika): أمريكا الشمالية، أمريكا الوسطى، الولايات المتحدة (USA)، كندا، المكسيك، جزر الكاريبي، جبال روكي (Rocky Mountains)، قناة بنما (Panamakanal)، السهول العظمى، والحدائق الوطنية والمحيط الهادئ.",
    words: [
      {
        german: "Nordamerika (Sg.)",
        arabic: "قارة أمريكا الشمالية",
        english: "North America",
        example: "Nordamerika erstreckt sich von der arktischen Tundra bis zu den Wüsten Mexikos.",
      },
      {
        german: "Mittelamerika (Sg.)",
        arabic: "أمريكا الوسطى (البرزخ الواصل)",
        english: "Central America",
        example: "Mittelamerika bildet eine schmale Landbrücke mit tropischen Regenwäldern.",
      },
      {
        german: "die Vereinigten Staaten (USA) (Pl.)",
        arabic: "الولايات المتحدة الأمريكية",
        english: "United States (USA)",
        example: "In den Vereinigten Staaten leben über dreihundertdreißig Millionen Menschen.",
      },
      {
        german: "Kanada (Sg.)",
        arabic: "دولة كندا",
        english: "Canada",
        example: "Kanada ist berühmt für endlose Wälder, glasklare Seen und wilde Bären.",
      },
      {
        german: "Mexiko (Sg.)",
        arabic: "دولة المكسيك",
        english: "Mexico",
        example:
          "In Mexiko zeugen historische Pyramiden von den Hochkulturen der Maya und Azteken.",
      },
      {
        german: "die Karibik (Sg.)",
        arabic: "منطقة البحر الكاريبي والجزر الاستوائية",
        english: "the Caribbean",
        example: "Türkisfarbenes Wasser und weiße Palmenstrände locken Urlauber in die Karibik.",
      },
      {
        german: "die Rocky Mountains (Pl.)",
        arabic: "سلسلة جبال روكي الشاهقة",
        english: "the Rocky Mountains",
        example:
          "Die gewaltigen Rocky Mountains durchziehen den Westen des nordamerikanischen Kontinents.",
      },
      {
        german: "der Panamakanal, -̈e",
        arabic: "قناة بنما الملاحية الرابطة بين المحيطين",
        english: "Panama Canal",
        example:
          "Der Panamakanal verkürzt die Schifffahrtsroute zwischen Atlantik und Pazifik enorm.",
      },
      {
        german: "die Prärie, -n",
        arabic: "سهول البراري العشبية الواسعة",
        english: "prairie",
        example: "Einst durchstreiften riesige Bisonherden die weite nordamerikanische Prärie.",
      },
      {
        german: "die Metropole, -n",
        arabic: "المدينة الكبرى العصرية (الميتروبول)",
        english: "metropolis, major city",
        example: "New York ist eine pulsierende Metropole der globalen Kunst- und Finanzwelt.",
      },
      {
        german: "der Nationalpark, -s",
        arabic: "المحمية والمتنزه الوطني الطبيعي",
        english: "national park",
        example: "Im Yellowstone-Nationalpark sprudeln heiße Geysire aus dem vulkanischen Boden.",
      },
      {
        german: "der Pazifische Ozean (Pazifik) (Sg.)",
        arabic: "المحيط الهادئ (الباسيفيك)",
        english: "Pacific Ocean",
        example: "An der Westküste Kaliforniens rollen die Wellen aus dem Pazifischen Ozean heran.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Reise nach Nordamerika",
        intro: "Einfache Sätze über Amerika, Berge und Großstädte (A1).",
        paragraphs: [
          [
            "[Nordamerika (Sg.)|Nordamerika] ist ein riesiger Kontinent.",
            "Hier liegen [die Vereinigten Staaten (USA) (Pl.)|die USA], [Kanada (Sg.)|Kanada] und [Mexiko (Sg.)|Mexiko].",
            "Im Westen stehen [die Rocky Mountains (Pl.)|die Rocky Mountains], sehr hohe Berge.",
          ],
          [
            "New York ist eine weltberühmte [die Metropole, -n|Metropole] mit vielen Hochhäusern.",
            "Im Süden liegt das warme Meer in [die Karibik (Sg.)|der Karibik].",
            "Dort wachsen Kokosnüsse an grünen Palmen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Naturwunder im Westen",
        intro: "Nationalparks, Geysire und die Weite der Prärie (A2).",
        paragraphs: [
          [
            "Letztes Jahr machten wir einen Roadtrip durch den Westen der USA.",
            "Wir fuhren tagelang durch [die Prärie, -n|die weite Prärie], bevor die schneebedeckten Gipfel am Horizont auftauchten.",
          ],
          [
            "Im ältesten [der Nationalpark, -s|Nationalpark] der Welt, Yellowstone, bestaunten wir gigantische Geysire und wilde Bisons.",
            "An der Westküste erreichten wir schließlich [der Pazifische Ozean (Pazifik) (Sg.)|den Pazifischen Ozean].",
            "Die unberührte Wildnis Kanadas und die Strände Mexikos sind atemberaubende Reiseziele.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kontrastreiche Geographie und strategische Handelswege",
        intro: "Klimazonen, Pazifikanbindung und der Panamakanal (B1).",
        paragraphs: [
          [
            "Der nord- und mittelamerikanische Raum zeichnet sich durch extreme klimatische und topographische Kontraste aus.",
            "Während im arktischen Norden Kanadas Permafrostböden vorherrschen, verbindet [Mittelamerika (Sg.)|Mittelamerika] als schmale Landbrücke die Hemisphären mit tropischen Ökosystemen.",
          ],
          [
            "Eine weltwirtschaftliche Schlüsselrolle nimmt [der Panamakanal, -̈e|der Panamakanal] ein: Die künstliche Wasserstraße erspart Frachtschiffen die gefährliche Umrundung von Kap Hoorn und beschleunigt den Warenaustausch zwischen Asien, Europa und den Amerikas.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Transkontinentale Wirtschaftsräume, Freihandel und ökologische Herausforderungen",
        intro: "USMCA-Abkommen, Megalopolen und Ressourcenmanagement (B2).",
        paragraphs: [
          [
            "Der nordamerikanische Kontinent bildet durch das Freihandelsabkommen USMCA einen hochgradig integrierten Wirtschafts- und Wertschöpfungsraum.",
            "Städtische Agglomerationen wie die Megalopolis Boswash generieren eine Wirtschaftskraft, die mit führenden Industrienationen konkurriert.",
          ],
          [
            "Gleichzeitig verschärfen Dürreperioden im Südwesten der USA und im nördlichen [Mexiko (Sg.)|Mexiko] die wasserwirtschaftlichen Spannungen entlang des Colorado River.",
          ],
          [
            "Die Bewahrung alpiner Biodiversität in [die Rocky Mountains (Pl.)|den Rocky Mountains] bei simultanem Ausbau erneuerbarer Energien stellt das kontinentale Umweltmanagement vor komplexe Zielkonflikte.",
          ],
        ],
      },
    },
  },

  suedamerika: {
    description:
      "Südamerika, Amazonas, Regenwald, Anden, Brasilien, Argentinien, Atacama und Biodiversität.",
    details:
      "Tropenwald, Gebirgszüge, indigene Territorien, Wasserfälle und Klimaregulation (A1–B2)",
    arabicDescription:
      "قارة أمريكا الجنوبية (Südamerika): قارة أمريكا الجنوبية، نهر الأمازون (Amazonas)، الغابات المطيرة الاستوائية (Regenwald)، سلسلة جبال الأنديز (Anden)، البرازيل، الأرجنتين، التنوع الحيوي والبيولوجي (Artenvielfalt)، صحراء أتاكاما، الشلالات (Wasserfall)، والشعوب الأصلية.",
    words: [
      {
        german: "Südamerika (Sg.)",
        arabic: "قارة أمريكا الجنوبية",
        english: "South America",
        example:
          "Südamerika beheimatet die artenreichsten Tropenwälder und längsten Gebirgsketten.",
      },
      {
        german: "der Amazonas (Sg.)",
        arabic: "نهر الأمازون (أعظم أنهار الأرض تدفقاً)",
        english: "Amazon (river)",
        example: "Der mächtige Amazonas führt mehr Wasser als die nächsten sieben Flüsse zusammen.",
      },
      {
        german: "der Regenwald, -̈er",
        arabic: "الغابة الاستوائية المطيرة",
        english: "rainforest, tropical rainforest",
        example: "Der Amazonas-Regenwald produziert gigantische Mengen Sauerstoff und bindet CO2.",
      },
      {
        german: "die Anden (Pl.)",
        arabic: "سلسلة جبال الأنديز (أطول سلسلة جبلية قارية)",
        english: "the Andes",
        example: "Die Anden erstrecken sich über siebentausend Kilometer entlang der Westküste.",
      },
      {
        german: "Brasilien (Sg.)",
        arabic: "دولة البرازيل",
        english: "Brazil",
        example: "Brasilien ist das flächenmäßig größte und bevölkerungsreichste Land Südamerikas.",
      },
      {
        german: "Argentinien (Sg.)",
        arabic: "دولة الأرجنتين",
        english: "Argentina",
        example:
          "In Argentinien liegen die weiten Rinderweiden der Pampa und der Tango hat dort seine Wurzeln.",
      },
      {
        german: "die Artenvielfalt (Biodiversität) (Sg.)",
        arabic: "التنوع البيولوجي والحيوي الغني",
        english: "biodiversity, species richness",
        example: "Nirgendwo auf der Welt ist die Artenvielfalt höher als im tropischen Urwald.",
      },
      {
        german: "die Atacama-Wüste (Sg.)",
        arabic: "صحراء أتاكاما (أكثر صحاري العالم جفافاً)",
        english: "Atacama Desert",
        example:
          "In der chilenischen Atacama-Wüste hat es an manchen Orten seit Jahrzehnten nicht geregnet.",
      },
      {
        german: "der Wasserfall, -̈e",
        arabic: "الشلال المائي المتدفق",
        english: "waterfall",
        example:
          "Die tosenden Iguazú-Wasserfälle an der Grenze zwischen Brasilien und Argentinien bieten ein Naturschauspiel.",
      },
      {
        german: "das Indigene Volk, -̈er",
        arabic: "الشعب الأصلي / السكان الأصليون",
        english: "indigenous people",
        example: "Viele Indigene Völker leben seit Generationen im Einklang mit dem Regenwald.",
      },
      {
        german: "das Hochland, -̈er",
        arabic: "الهضبة المرتفعة / المرتفعات الجبلية",
        english: "highlands, plateau",
        example: "Auf dem bolivianischen Hochland Altiplano weiden Lamas und Alpakas.",
      },
      {
        german: "die Pampa (Sg.)",
        arabic: "سهول البامبا العشبية الخصبة",
        english: "pampas (fertile South American lowlands)",
        example:
          "Auf den saftigen Wiesen der Pampa grasen Millionen Fleischrinder unter freiem Himmel.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Im grünen Dschungel",
        intro: "Einfache Sätze über Südamerika, Dschungel und Fluss (A1).",
        paragraphs: [
          [
            "[Südamerika (Sg.)|Südamerika] ist ein faszinierender Erdteil.",
            "Hier fließt [der Amazonas (Sg.)|der riesige Amazonas] durch das grüne Land.",
            "Rund um den Fluss wächst [der Regenwald, -̈er|ein dichter Regenwald].",
          ],
          [
            "Dort leben bunte Papageien, Affen und Jaguare.",
            "Im Westen stehen [die Anden (Pl.)|die Anden], sehr hohe Berge mit Schnee.",
            "In [Brasilien (Sg.)|Brasilien] sprechen die Menschen Portugiesisch und in [Argentinien (Sg.)|Argentinien] Spanisch.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vom Wasserfall in die Wüste",
        intro: "Iguazú-Wasserfälle, Trockenheit in der Atacama und Anden-Hochland (A2).",
        paragraphs: [
          [
            "Während meiner Reise durch Südamerika erlebte ich unglaubliche Gegensätze.",
            "Zuerst besuchte ich den gewaltigen [der Wasserfall, -̈e|Iguazú-Wasserfall], wo gigantische Wassermassen in die Tiefe stürzen.",
          ],
          [
            "Wenige Tage später stand ich in [die Atacama-Wüste (Sg.)|der Atacama-Wüste] in Chile.",
            "Dort ist der Boden so trocken, dass fast keine Pflanzen wachsen können.",
            "Auf [das Hochland, -̈er|dem Hochland] der Anden sah ich Lamas mit bunter Wolle.",
            "Die Natur in Südamerika hat mich tief beeindruckt.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die grüne Lunge der Erde in Gefahr",
        intro: "Schutz des Regenwaldes, Artenvielfalt und Rechte indigener Völker (B1).",
        paragraphs: [
          [
            "Das Amazonas-Becken beherbergt die weltweit größte [die Artenvielfalt (Biodiversität) (Sg.)|Artenvielfalt] und spielt eine Schlüsselrolle für das globale Wettergeschehen.",
            "Tausende Heilpflanzen, die in der modernen Medizin Anwendung finden, stammen aus diesem einzigartigen Ökosystem.",
          ],
          [
            "Doch Brandrodung für Sojaanbau und Rinderweiden bedrohen den Fortbestand des Waldes.",
            "Gemeinsam mit Umweltorganisationen kämpft manches [das Indigene Volk, -̈er|Indigene Volk] für den Erhalt seiner traditionellen Lebensräume und den Schutz der verbliebenen Urwälder.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Klimatische Kipppunkte, Extraktivismus und planetare Biosphärenintegrität",
        intro: "Evapotranspiration ('fliegende Flüsse'), Lithiumabbau und Rohstoffgeopolitik (B2).",
        paragraphs: [
          [
            "Der Amazonas-Regenwald fungiert über 'fliegende Flüsse' (atmosphärische Wasserdampfströme) als hydrologische Pumpe für den gesamten Kontinent.",
            "Klimaforscher warnen vor einem drohenden Kipppunkt: Schreitet die Entwaldung fort, droht die irreversible Savannisierung weiter Teile des Amazonasbeckens.",
          ],
          [
            "Gleichzeitig forciert der globale Übergang zur Elektromobilität den Lithium-Extraktivismus im 'Lithium-Dreieck' der Salare in [die Atacama-Wüste (Sg.)|der Atacama-Wüste], was gravierende Grundwasserkonflikte mit indigenen Gemeinschaften provoziert.",
          ],
          [
            "Eine zukunftsfähige Bioökonomie in Südamerika erfordert die Entkopplung von Wirtschaftswachstum und Naturzerstörung.",
          ],
        ],
      },
    },
  },

  afrika: {
    description: "Afrika, Sahara, Nil, Savanne, Tierwelt, Kilimandscharo, Safaris und Oasen.",
    details:
      "Afrikanische Kontinentalgeographie, Wüstenökologie, Megafauna, Rift Valley und Kulturen (A1–B2)",
    arabicDescription:
      "قارة أفريقيا (Afrika): قارة أفريقيا، الصحراء الكبرى (Sahara)، نهر النيل (Nil)، السافانا العشبية (Savanne)، رأس الرجاء الصالح، جبل كليمنجارو (Kilimandscharo)، خط الاستواء، الحياة البرية والحيوانية (Tierwelt)، رحلات السفاري (Safari)، والواحات الخضراء (Oase).",
    words: [
      {
        german: "Afrika (Sg.)",
        arabic: "قارة أفريقيا (القارة السمراء)",
        english: "Africa",
        example: "Afrika ist die Wiege der Menschheit und ein Kontinent voller Dynamik.",
      },
      {
        german: "die Sahara (Sg.)",
        arabic: "الصحراء الكبرى الإفريقية (أكبر صحراء حارة)",
        english: "the Sahara",
        example:
          "Die Sahara bedeckt fast ein Drittel der gesamten Fläche des afrikanischen Kontinents.",
      },
      {
        german: "der Nil (Sg.)",
        arabic: "نهر النيل (أطول أنهار العالم)",
        english: "Nile (river)",
        example: "Seit Jahrtausenden schenkt das fruchtbare Wasser von dem Nil Ägypten das Leben.",
      },
      {
        german: "die Savanne, -n",
        arabic: "السافانا العشبية المفتوحة ذات الأشجار المتفرقة",
        english: "savanna",
        example: "In der weiten Savanne Ostafrikas ziehen zehntausende Zebras und Gnus umher.",
      },
      {
        german: "der Kilimandscharo (Sg.)",
        arabic: "جبل كليمنجارو (أعلى قمة في إفريقيا)",
        english: "Kilimanjaro",
        example:
          "Der schneebedeckte Gipfel des Kilimandscharo ragt majestätisch über Tansania auf.",
      },
      {
        german: "die afrikanische Tierwelt (Sg.)",
        arabic: "الحياة البرية والحيوانية الإفريقية الشهيرة",
        english: "African wildlife",
        example:
          "Elefanten, Löwen, Giraffen und Nashörner prägen die einzigartige afrikanische Tierwelt.",
      },
      {
        german: "die Safari, -s",
        arabic: "رحلة السفاري الاستكشافية لمشاهدة الحيوانات البرية",
        english: "safari",
        example: "Auf einer geführten Foto-Safari konnten wir Leoparden beim Jagen beobachten.",
      },
      {
        german: "die Oase, -n",
        arabic: "الواحة الخضراء وسط الصحراء",
        english: "oasis",
        example:
          "Mitten im Sandmeer der Wüste spendet eine grüne Oase mit Dattelpalmen frisches Wasser.",
      },
      {
        german: "das Kap der Guten Hoffnung (Sg.)",
        arabic: "رأس الرجاء الصالح في جنوب إفريقيا",
        english: "Cape of Good Hope",
        example: "Am Kap der Guten Hoffnung treffen Atlantischer und Indischer Ozean aufeinander.",
      },
      {
        german: "der Tropenwald, -̈er",
        arabic: "الغابة الاستوائية المطيرة (حوض الكونغو)",
        english: "tropical rainforest (Congo basin)",
        example: "Im dichten Tropenwald des Kongo-Beckens finden bedrohte Berggorillas Schutz.",
      },
      {
        german: "der Grabenbruch, -̈e",
        arabic: "الوادي المتصدع الكبير (الأخدود الإفريقي العظيم)",
        english: "rift valley, East African Rift",
        example:
          "Der Ostafrikanische Grabenbruch spaltet den Kontinent durch tektonische Plattenbewegungen.",
      },
      {
        german: "die Dürre, -n",
        arabic: "الجفاف وانحباس الأمطار",
        english: "drought",
        example: "Anhaltende Dürre in der Sahelzone bedroht die Ernten und das Vieh der Nomaden.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Tiere in Afrika",
        intro: "Einfache Sätze über Löwen, Elefanten und die Wüste (A1).",
        paragraphs: [
          [
            "[Afrika (Sg.)|Afrika] ist ein großer und sonniger Kontinent.",
            "Im Norden liegt [die Sahara (Sg.)|die riesige Sahara] mit viel gelbem Sand.",
            "Mitten im Sand gibt es manchmal Wasser in [die Oase, -n|einer Oase].",
          ],
          [
            "In [die Savanne, -n|der Savanne] leben viele wilde Tiere.",
            "Dort staunen wir über [die afrikanische Tierwelt (Sg.)|die afrikanische Tierwelt]: Elefanten, Giraffen und starke Löwen.",
            "Touristen machen gern [die Safari, -s|eine Safari] und fotografieren die Tiere.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Vom Nil zum Kilimandscharo",
        intro: "Pyramiden am Nil, hohe Berge und Safariparks (A2).",
        paragraphs: [
          [
            "Letztes Jahr begann unsere Traumreise in Ägypten.",
            "Wir machten eine Flussfahrt auf [der Nil (Sg.)|dem langen Nil] und sahen uralte Tempel.",
          ],
          [
            "Danach flogen wir weiter nach Tansania, wo [der Kilimandscharo (Sg.)|der schneebedeckte Kilimandscharo] in den blauen Himmel ragt.",
            "Im Nationalpark Serengeti erlebten wir die Wanderung von Millionen Tieren über die Grassteppe.",
            "Ganz im Süden erreichten wir das berühmte [das Kap der Guten Hoffnung (Sg.)|Kap der Guten Hoffnung].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Geographische Vielfalt und ökologische Herausforderungen",
        intro: "Klimazonen, Sahelzone, Regenwald des Kongo und Dürreperioden (B1).",
        paragraphs: [
          [
            "Der afrikanische Kontinent reicht von den mediterranen Küsten im Norden bis zu den gemäßigten Breiten Südafrikas.",
            "Zwischen [die Sahara (Sg.)|der Sahara] und den Savannengürteln liegt die ökologisch fragile Sahelzone, die regelmäßig unter extremer [die Dürre, -n|Dürre] leidet.",
          ],
          [
            "Im Herzen des Kontinents erstreckt sich [der Tropenwald, -̈er|der äquatoriale Tropenwald] des Kongo-Beckens als zweitgrößte CO2-Senke der Erde.",
          ],
          [
            "Geologisch formt [der Grabenbruch, -̈e|der Ostafrikanische Grabenbruch] tiefe Seen und aktive Vulkane, die Zeugnis von der Dynamik unseres Planeten ablegen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Demografischer Wandel, Green Energy und kontinentale Zukunftsperspektiven",
        intro: "Afrikanische Freihandelszone (AfCFTA), Solarenergie und Megacities (B2).",
        paragraphs: [
          [
            "Afrika steht an der Schwelle zu einer tiefgreifenden sozioökonomischen Transformation.",
            "Mit der jüngsten Bevölkerung aller Kontinente wachsen Metropolen wie Lagos, Kairo und Nairobi zu globalen Innovationszentren heran.",
          ],
          [
            "Die Realisierung der afrikanischen Kontinentalen Freihandelszone (AfCFTA) zielt darauf ab, den intra-afrikanischen Handel zu dynamisieren und Abhängigkeiten von Rohstoffexporten zu reduzieren.",
          ],
          [
            "Gleichzeitig prädestiniert die solare Einstrahlung in [die Sahara (Sg.)|der Sahara] und in den Trockenzonen den Kontinent zum globalen Vorreiter für grünen Wasserstoff und photovoltaische Energieerzeugung.",
          ],
        ],
      },
    },
  },
};

const enPath = "src/data/vocabulary/erde-und-natur.json";
const enData = JSON.parse(fs.readFileSync(enPath, "utf8"));

for (const sec of enData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(enData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to erde-und-natur.json!");
