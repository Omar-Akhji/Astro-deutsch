import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  asien: {
    description: "Asien, Himalaja, Mount Everest, China, Indien, Japan, Monsun und Seidenstraße.",
    details:
      "Kontinentalgeographie, Megastädte, Hochkulturen, Monsunklima und Flusssysteme (A1–B2)",
    arabicDescription:
      "قارة آسيا (Asien): أكبر قارات الأرض، جبال الهيمالايا (Himalaja)، قمة إيفرست (Mount Everest)، الصين، الهند، اليابان، الرياح الموسمية (Monsun)، نهر يانغتسي، طريق الحرير التاريخي (Seidenstraße)، الكثافة السكانية، والنمو الاقتصادي.",
    words: [
      {
        german: "Asien (Sg.)",
        arabic: "قارة آسيا (أكبر قارات العالم مساحة وسكاناً)",
        english: "Asia",
        example: "Asien ist der größte und bevölkerungsreichste Erdteil unseres Planeten.",
      },
      {
        german: "der Himalaja (Sg.)",
        arabic: "سلسلة جبال الهيمالايا الشاهقة",
        english: "the Himalayas",
        example: "Der Himalaja beherbergt die höchsten Berggipfel der gesamten Erde.",
      },
      {
        german: "der Mount Everest (Sg.)",
        arabic: "قمة جبل إيفرست (أعلى قمة في العالم)",
        english: "Mount Everest",
        example: "Der Mount Everest ragt 8848 Meter über den Meeresspiegel in den Himmel.",
      },
      {
        german: "China (Sg.)",
        arabic: "جمهورية الصين الشعبية",
        english: "China",
        example: "China blickt auf eine jahrtausendealte Philosophie- und Schrifttradition zurück.",
      },
      {
        german: "Indien (Sg.)",
        arabic: "دولة الهند",
        english: "India",
        example:
          "Indien ist die bevölkerungsreichste Demokratie der Welt mit enormer kultureller Vielfalt.",
      },
      {
        german: "Japan (Sg.)",
        arabic: "دولة اليابان (كوكب اليابان)",
        english: "Japan",
        example: "Japan verbindet uralte Shinto-Traditionen mit modernster Hochtechnologie.",
      },
      {
        german: "der Monsun, -e",
        arabic: "الرياح الموسمية الاستوائية وأمطارها الغزيرة",
        english: "monsoon",
        example:
          "Der sommerliche Monsun bringt lebenswichtigen Regen für die Reisfelder Südasiens.",
      },
      {
        german: "die Seidenstraße (Sg.)",
        arabic: "طريق الحرير التجاري التاريخي",
        english: "Silk Road",
        example:
          "Über die historische Seidenstraße gelangten Seide, Gewürze und Wissen nach Europa.",
      },
      {
        german: "die Megastadt, -̈e",
        arabic: "المدينة العملاقة (فوق 10 ملايين نسمة)",
        english: "megacity",
        example:
          "Tokio ist eine der größten Megastädte der Welt mit über dreißig Millionen Einwohnern.",
      },
      {
        german: "die Bevölkerungsdichte, -n",
        arabic: "الكثافة السكانية في الكيلومتر المربع",
        english: "population density",
        example: "In den Flussdeltas Asiens herrscht eine extrem hohe Bevölkerungsdichte.",
      },
      {
        german: "das Reisfeld, -er",
        arabic: "حقل زراعة الأرز المغمور بالماء",
        english: "rice field, paddy field",
        example:
          "Grüne terrassierte Reisfelder prägen die hügelige Landschaft vieler asiatischer Länder.",
      },
      {
        german: "der Jangtsekiang (Sg.)",
        arabic: "نهر يانغتسي في الصين (أطول أنهار آسيا)",
        english: "Yangtze (river)",
        example: "Der Jangtsekiang ist die wichtigste Binnenwasserstraße Chinas.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Reise nach Asien",
        intro: "Einfache Sätze über Asien, Berge und Reis (A1).",
        paragraphs: [
          [
            "[Asien (Sg.)|Asien] ist der größte Kontinent der Erde.",
            "Hier gibt es sehr große Länder wie [China (Sg.)|China], [Indien (Sg.)|Indien] und [Japan (Sg.)|Japan].",
            "Überall auf dem Land wächst Reis auf [das Reisfeld, -er|den grünen Reisfeldern].",
          ],
          [
            "In [der Himalaja (Sg.)|dem Himalaja] steht [der Mount Everest (Sg.)|der Mount Everest].",
            "Er ist der höchste Berg der ganzen Welt.",
            "Millionen Menschen leben in riesigen, modernen Städten.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Regen und Kultur im Sommer",
        intro: "Der Monsunregen, alte Seidenstraße und Tokio (A2).",
        paragraphs: [
          [
            "Im Sommer reiste ich durch Südasien und erlebte [der Monsun, -e|den Monsun].",
            "Tagelang goss es wie aus Kübeln, was die Felder wieder grün machte.",
          ],
          [
            "In den Museen erfuhr ich viel über [die Seidenstraße (Sg.)|die alte Seidenstraße], auf der Händler schon vor zweitausend Jahren kostbare Waren transportierten.",
            "Am Ende besuchte ich Tokio: [die Megastadt, -̈e|Die Megastadt] faszinierte mich mit ihren schnellen Zügen und leuchtenden Lichtern.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Wirtschaftskraft und ökologische Herausforderungen",
        intro: "Urbanisierung, demografischer Wandel und asiatische Flusssysteme (B1).",
        paragraphs: [
          [
            "Asien ist das wirtschaftliche Kraftzentrum des 21. Jahrhunderts.",
            "In Metropolregionen konzentriert sich eine enorme [die Bevölkerungsdichte, -n|Bevölkerungsdichte], die enorme Anforderungen an Infrastruktur und Umweltschutz stellt.",
          ],
          [
            "Lebensadern wie [der Jangtsekiang (Sg.)|der Jangtsekiang] sichern die Wasserversorgung für hunderte Millionen Menschen, sind aber zugleich durch Industrieabwässer belastet.",
          ],
          [
            "Gleichzeitig treibt die Region die globale Energiewende durch massive Investitionen in Solarenergie und Elektromobilität voran.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Geopolitik des Indo-Pazifik, Konnektivität und das Asiatische Jahrhundert",
        intro:
          "Neue Seidenstraße (Belt and Road), Lieferketten und globale Machtverschiebungen (B2).",
        paragraphs: [
          [
            "Die Verschiebung des weltpolitischen Gravitationszentrums in den Indo-Pazifik prägt die internationale Staatenwelt.",
            "Chinas geoökonomische Initiative der Neuen [die Seidenstraße (Sg.)|Seidenstraße] rekonfiguriert eurasische Handelskorridore und maritime Knotenpunkte.",
          ],
          [
            "Parallel dazu etabliert sich [Indien (Sg.)|Indien] als digitaler Technologie- und Dienstleistungshub mit dynamischer Binnennachfrage.",
          ],
          [
            "Die Beherrschung der Monsundynamik und der Schutz der Gletscherspeicher in [der Himalaja (Sg.)|dem Himalaja] ('Dritter Pol') sind für die Ernährungssicherheit von über zwei Milliarden Menschen von existenzieller Bedeutung.",
          ],
        ],
      },
    },
  },

  ozeanien: {
    description:
      "Ozeanien, Australien, Neuseeland, Great Barrier Reef, Outback, Kängurus und Korallenatolle.",
    details:
      "Pazifische Inselwelt, Aborigines, Maori, Beuteltiere, Atolle und Meeresschutz (A1–B2)",
    arabicDescription:
      "قارة أوقيانوسيا (Ozeanien): قارة أوقيانوسيا، أستراليا (Australien)، نيوزيلندا (Neuseeland)، الحيد المرجاني العظيم (Great Barrier Reef)، المناطق البرية النائية (Outback)، الجرابيات والكنغر (Känguru)، الجزر المرجانية، ثقافة السكان الأصليين الأستراليين، وثقافة الماوري.",
    words: [
      {
        german: "Ozeanien (Sg.)",
        arabic: "قارة أوقيانوسيا وجزر المحيط الهادئ",
        english: "Oceania",
        example: "Ozeanien umfasst Australien, Neuseeland und tausende paradiesische Südseeinseln.",
      },
      {
        german: "Australien (Sg.)",
        arabic: "دولة وقارة أستراليا",
        english: "Australia",
        example:
          "Australien ist der flächenmäßig kleinste Kontinent, aber das sechstgrößte Land der Welt.",
      },
      {
        german: "Neuseeland (Sg.)",
        arabic: "دولة نيوزيلندا (أوتياروا)",
        english: "New Zealand",
        example:
          "Neuseeland bezaubert Reisende mit Fjorden, Geysiren und grünen Weidelandschaften.",
      },
      {
        german: "das Great Barrier Reef (Sg.)",
        arabic: "الحيد المرجاني العظيم بأستراليا",
        english: "Great Barrier Reef",
        example: "Das Great Barrier Reef ist das größte lebende Korallenriff unseres Planeten.",
      },
      {
        german: "das Outback (Sg.)",
        arabic: "المناطق النائية القاحلة في الداخل الأسترالي",
        english: "the Outback",
        example: "Im roten Outback Australiens herrscht sengende Hitze und faszinierende Stille.",
      },
      {
        german: "der Beutelsäuger, -",
        arabic: "الحيوان الثديي الجرابي (مثل الكنغر والكوالا)",
        english: "marsupial",
        example: "Kängurus und Koalas gehören zu den typisch australischen Beutelsäugern.",
      },
      {
        german: "das Känguru, -s",
        arabic: "حيوان الكنغر",
        english: "kangaroo",
        example: "Mit kraftvollen Sprüngen hüpft das Känguru über den trockenen roten Wüstenboden.",
      },
      {
        german: "das Korallenatoll, -e",
        arabic: "الجزيرة المرجانية الحلقية (الأتول)",
        english: "coral atoll",
        example: "Ein flaches Korallenatoll umschließt eine türkisfarbene Meereslagune.",
      },
      {
        german: "die Aborigines (Pl.)",
        arabic: "السكان الأصليون لقارة أستراليا",
        english: "Aborigines, Australian Indigenous peoples",
        example:
          "Die Kultur der Aborigines reicht über sechzigtausend Jahre ununterbrochen zurück.",
      },
      {
        german: "die Maori-Kultur (Sg.)",
        arabic: "ثقافة وتقاليد شعب الماوري الأصلي بنيوزيلندا",
        english: "Maori culture",
        example:
          "Der traditionelle Haka-Tanz ist ein weltberühmtes Element der lebendigen Maori-Kultur.",
      },
      {
        german: "der Südpazifik (Sg.)",
        arabic: "جنوب المحيط الهادئ الاستوائي",
        english: "South Pacific",
        example: "Kleine Inselstaaten wie Fidschi und Samoa liegen verstreut im weiten Südpazifik.",
      },
      {
        german: "das Meeresökosystem, -e",
        arabic: "النظام البيئي البحري",
        english: "marine ecosystem",
        example:
          "Die Erwärmung der Ozeane bedroht das empfindliche Meeresökosystem der Korallenriffe.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Tiere in Ozeanien",
        intro: "Einfache Sätze über Kängurus, Koalas und Inseln (A1).",
        paragraphs: [
          [
            "[Ozeanien (Sg.)|Ozeanien] liegt weit weg im blauen Meer.",
            "Hier liegt das große Land [Australien (Sg.)|Australien].",
            "Dort lebt [das Känguru, -s|das lustige Känguru]. Es trägt sein Baby im Beutel.",
          ],
          [
            "In der Mitte des Landes ist [das Outback (Sg.)|das rote Outback] sehr trocken.",
            "Im Meer schwimmen bunte Fische an [das Great Barrier Reef (Sg.)|dem Great Barrier Reef].",
            "Nebenan liegt das grüne [Neuseeland (Sg.)|Neuseeland] mit hohen Bergen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kulturen und Riffe der Südsee",
        intro: "Aborigines, Maori und Korallenriffe (A2).",
        paragraphs: [
          [
            "Auf meiner Reise nach Ozeanien lernte ich faszinierende Ureinwohnerkulturen kennen.",
            "In Australien erfuhr ich viel über die Traumzeit-Erzählungen von [die Aborigines (Pl.)|den Aborigines].",
          ],
          [
            "In Neuseeland beeindruckte mich [die Maori-Kultur (Sg.)|die lebendige Maori-Kultur] mit ihren Holzschnitzereien und Tänzen.",
            "Beim Tauchen im warmen [der Südpazifik (Sg.)|Südpazifik] sah ich Meeresschildkröten an einem [das Korallenatoll, -e|Korallenatoll].",
            "Diese Inselwelt ist ein wahres Naturparadies.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Evolutionäre Isolation und Schutz bedrohter Riffe",
        intro: "Beutelsäuger, Endemismus und Korallenbleiche (B1).",
        paragraphs: [
          [
            "Durch die Jahrmillionen dauernde geographische Isolation entwickelte sich in Australasien eine weltweit einzigartige Tierwelt.",
            "Einheimische [der Beutelsäuger, -|Beutelsäuger] wie Kängurus, Wombats und Schnabeltiere besetzten ökologische Nischen, die andernorts von Plazentatieren dominiert werden.",
          ],
          [
            "Doch die globale Erwärmung bedroht [das Meeresökosystem, -e|das fragile Meeresökosystem].",
            "Am [das Great Barrier Reef (Sg.)|Great Barrier Reef] führt anhaltender Hitzestress zu wiederkehrender Korallenbleiche, die das Überleben tausender Meeresarten gefährdet.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Klimawandel-Vulnerabilität, Völkerrecht der Ozeane und indigene Selbstbestimmung",
        intro:
          "Meeresspiegelanstieg, Staatenlosigkeit kleiner Inselstaaten und Seerechtsübereinkommen (B2).",
        paragraphs: [
          [
            "Die flachen Inselstaaten in [der Südpazifik (Sg.)|dem Südpazifik] (Tuvalu, Kiribati) stehen an der vordersten Front der Klimakrise.",
            "Der eustatische Meeresspiegelanstieg bedroht die physische Existenz ganzer [das Korallenatoll, -e|Korallenatolle], was völkerrechtliche Grundsatzfragen bezüglich Staatsbürgerschaft und Seerechtszonen (AWZ) bei territorialem Verlust aufwirft.",
          ],
          [
            "Gleichzeitig vollzieht sich in [Australien (Sg.)|Australien] und [Neuseeland (Sg.)|Neuseeland] eine tiefgehende juristische Debatte über indigene Verfassungsrechte und den Schutz von Kulturgütern von [die Aborigines (Pl.)|den indigenen Völkern].",
          ],
          [
            "In Neuseeland wurde dem Whanganui River der Status einer juristischen Person zuerkannt — ein visionäres Modell für den ökologischen Rechtsschutz weltweit.",
          ],
        ],
      },
    },
  },

  internationale_organisationen: {
    description: "NATO, WHO, UNESCO, WTO, Rotes Kreuz, NGOs, Generalsekretär und humanitäre Hilfe.",
    details:
      "Multilateralismus, Weltgesundheit, Welterbe, Friedenssicherung und Völkergemeinschaft (A1–B2)",
    arabicDescription:
      "المنظمات الدولية (Internationale Organisationen): المنظمات الدولية، حلف شمال الأطلسي (NATO)، منظمة الصحة العالمية (WHO)، منظمة اليونسكو (UNESCO)، منظمة التجارة العالمية (WTO)، الصليب الأحمر والهلال الأحمر (Rotes Kreuz)، المنظمات غير الحكومية (NGO)، الأمين العام، حفظ السلام، والمساعدات الإنسانية والإغاثية.",
    words: [
      {
        german: "die internationale Organisation, -en",
        arabic: "المنظمة الدولية / الهيئة متعددة الأطراف",
        english: "international organization",
        example:
          "Eine internationale Organisation fördert die weltweite Zusammenarbeit bei Krisen.",
      },
      {
        german: "die NATO (Sg.)",
        arabic: "حلف شمال الأطلسي (الناتو)",
        english: "NATO (North Atlantic Treaty Organization)",
        example:
          "Die NATO ist ein Verteidigungsbündnis nordamerikanischer und europäischer Staaten.",
      },
      {
        german: "die Weltgesundheitsorganisation (WHO) (Sg.)",
        arabic: "منظمة الصحة العالمية (WHO)",
        english: "World Health Organization (WHO)",
        example: "Die WHO koordiniert globale Maßnahmen zur Bekämpfung gefährlicher Pandemien.",
      },
      {
        german: "die UNESCO (Sg.)",
        arabic: "منظمة اليونسكو للتربية والعلم والثقافة",
        english: "UNESCO",
        example:
          "Die UNESCO ernennt historische Bauwerke und Naturlandschaften zum schützenswerten Welterbe.",
      },
      {
        german: "die Welthandelsorganisation (WTO) (Sg.)",
        arabic: "منظمة التجارة العالمية (WTO)",
        english: "World Trade Organization (WTO)",
        example: "Die WTO überwacht verbindliche Regeln für fairen und offenen Welthandel.",
      },
      {
        german: "das Rote Kreuz (Sg.)",
        arabic: "منظمة الصليب الأحمر / الهلال الأحمر الدولي",
        english: "Red Cross (ICRC)",
        example: "Das Rote Kreuz leistet unparteiische humanitäre Hilfe in Kriegsgebieten.",
      },
      {
        german: "die Nichtregierungsorganisation (NGO), -s",
        arabic: "المنظمة غير الحكومية المستقلة (NGO)",
        english: "non-governmental organization (NGO)",
        example: "Viele NGOs engagieren sich unabhängig für Umweltschutz und Menschenrechte.",
      },
      {
        german: "das Hauptquartier, -e",
        arabic: "المقر الرئيسي / المركز العام للمنظمة",
        english: "headquarters (HQ)",
        example:
          "Das Hauptquartier der Vereinten Nationen in Genf ist ein Zentrum diplomatischer Konferenzen.",
      },
      {
        german: "der Generalsekretär, -e",
        arabic: "الأمين العام للمنظمة",
        english: "Secretary-General",
        example:
          "Der Generalsekretär appellierte an die Staatschefs, den Klimaschutzvertrag einzuhalten.",
      },
      {
        german: "die Friedenssicherung, -en",
        arabic: "حفظ السلام ومنع النزاعات الدولية",
        english: "peacekeeping, maintenance of peace",
        example:
          "UN-Blauhelme werden zur Friedenssicherung in instabilen Krisenregionen stationiert.",
      },
      {
        german: "die humanitäre Hilfe (Sg.)",
        arabic: "المساعدات والإغاثة الإنسانية العاجلة",
        english: "humanitarian aid",
        example: "Nach dem verheerenden Erdbeben traf sofort internationale humanitäre Hilfe ein.",
      },
      {
        german: "das Völkerrechtsabkommen, -",
        arabic: "اتفاقية القانون الدولي الملزمة",
        english: "international treaty, convention",
        example:
          "Die Genfer Konventionen bilden ein grundlegendes Völkerrechtsabkommen im Kriegsvölkerrecht.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Organisationen, die helfen",
        intro: "Einfache Sätze über Helfer, Rotes Kreuz und Frieden (A1).",
        paragraphs: [
          [
            "Wenn auf der Welt Not herrscht, helfen viele Menschen.",
            "[das Rote Kreuz (Sg.)|Das Rote Kreuz] bringt Decken, Wasser und Medizin zu Kranken.",
            "Auch [die Weltgesundheitsorganisation (WHO) (Sg.)|die WHO] hilft bei Krankheiten.",
          ],
          [
            "[die UNESCO (Sg.)|Die UNESCO] schützt alte Schlösser, Schulen und die Kultur.",
            "Jede [die internationale Organisation, -en|internationale Organisation] arbeitet für das Wohl der Menschen.",
            "Zusammen sind wir stärker als allein.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Schutz für das Welterbe und humanitäre Einsätze",
        intro: "UNESCO-Welterbestätten, Generalsekretär und NGOs (A2).",
        paragraphs: [
          [
            "In vielen Städten sieht man Schilder mit dem blau-weißen Symbol von [die UNESCO (Sg.)|der UNESCO].",
            "Diese Plakette zeigt, dass ein Gebäude als Weltkulturerbe besonders geschützt wird.",
          ],
          [
            "Bei schweren Krisen reist [der Generalsekretär, -e|der Generalsekretär] in das Land, um Hilfe zu koordinieren.",
            "Gleichzeitig leisten unabhängige [die Nichtregierungsorganisation (NGO), -s|NGOs] tatkräftige [die humanitäre Hilfe (Sg.)|humanitäre Hilfe] vor Ort.",
            "Sie verteilen Zelte und Nahrung an Notleidende.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Multilaterale Zusammenarbeit und kollektive Sicherheit",
        intro: "Verteidigungsbündnisse, WTO-Handelsregeln und UN-Blauhelme (B1).",
        paragraphs: [
          [
            "Die Bewältigung globaler Krisen — von Pandemien bis zu kriegerischen Auseinandersetzungen — übersteigt die Kräfte einzelner Nationalstaaten.",
            "Institutionen wie [die NATO (Sg.)|die NATO] basieren auf dem Prinzip kollektiver Bündnisverteidigung zur militärischen Abschreckung.",
          ],
          [
            "Auf wirtschaftlicher Ebene reguliert [die Welthandelsorganisation (WTO) (Sg.)|die Welthandelsorganisation] Zollschranken und schlichtet Handelskonflikte.",
          ],
          [
            "Für [die Friedenssicherung, -en|die militärische Friedenssicherung] entsenden die Vereinten Nationen Blauhelmtruppen, um Waffenstillstandsabkommen nach [das Völkerrechtsabkommen, -|völkerrechtlichen Abkommen] zu überwachen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Global Governance, Völkergewohnheitsrecht und multilaterale Institutionalisierung",
        intro:
          "Internationale Regime, Genfer Konventionen und die Rolle von Nichtregierungsorganisationen (B2).",
        paragraphs: [
          [
            "Die Architektur globaler Institutionen repräsentiert den institutionalisierten Versuch, anarchische internationale Beziehungen durch rechtliche Normen einzuhegen.",
            "Das Internationale Komitee vom Roten Kreuz wacht über die Einhaltung der Genfer Konventionen als Eckpfeiler des humanitären Völkerrechts.",
          ],
          [
            "Gleichzeitig agieren zivilgesellschaftliche [die Nichtregierungsorganisation (NGO), -s|NGOs] als unverzichtbare Transparenzorgane und Impulsgeber für neue völkerrechtliche Verträge (z. B. Ottawa-Konvention gegen Landminen).",
          ],
          [
            "In einer zunehmend fragmentierten Geopolitik müssen [die internationale Organisation, -en|internationale Organisationen] ihre Legitimität durch institutionelle Transparenz und inklusive Entscheidungsprozesse verteidigen.",
          ],
        ],
      },
    },
  },

  naturkatastrophen: {
    description:
      "Erdbeben, Tsunamis, Vulkanausbrüche, Wirbelstürme, Dürren, Waldbrände und Frühwarnsysteme.",
    details:
      "Extremwetterereignisse, Seismologie, Katastrophenmanagement, Tsunami-Bojen und Wiederaufbau (A1–B2)",
    arabicDescription:
      "الكوارث الطبيعية (Naturkatastrophen): الكوارث الطبيعية، الزلازل (Erdbeben)، أمواج التسونامي البحرية (Tsunami)، الثوران البركاني (Vulkanausbruch)، الأعاصير العاتية (Hurrikan/Taifun)، موجات الجفاف القاحلة (Dürre)، حرائق الغابات (Waldbrand)، أنظمة الإنذار المبكر، الدمار، وأعمال الإغاثة وإعادة الإعمار.",
    words: [
      {
        german: "die Naturkatastrophe, -n",
        arabic: "الكارثة الطبيعية",
        english: "natural disaster",
        example: "Naturkatastrophen richten weltweit verheerende Zerstörungen an.",
      },
      {
        german: "das Erdbeben, -",
        arabic: "الهزة الأرضية / الزلزال",
        english: "earthquake",
        example: "Das schwere Erdbeben der Stärke 7,2 brachte dutzende Altbauten zum Einsturz.",
      },
      {
        german: "der Tsunami, -s",
        arabic: "تسونامي (الموجة الزلزالية البحرية العملاقة)",
        english: "tsunami",
        example: "Nach dem Seebeben raste ein gewaltiger Tsunami auf die Küste zu.",
      },
      {
        german: "der Vulkanausbruch, -̈e",
        arabic: "ثوران وانفجار البركان",
        english: "volcanic eruption",
        example:
          "Beim Vulkanausbruch schleuderte der Berg glühende Lava und Aschewolken in die Luft.",
      },
      {
        german: "der Hurrikan, -e",
        arabic: "الإعصار المداري القمعي (الأعاصير البحرية)",
        english: "hurricane",
        example:
          "Der zerstörerische Hurrikan deckte Dächer ab und entwurzelte jahrhundertealte Bäume.",
      },
      {
        german: "der Waldbrand, -̈e",
        arabic: "حريق الغابات العنيف",
        english: "wildfire, forest fire",
        example: "Hitze und Trockenheit im Sommer begünstigten den rasend schnellen Waldbrand.",
      },
      {
        german: "die Dürrekatastrophe, -n",
        arabic: "كارثة الجفاف الحاد وتصحر الأراضي",
        english: "drought catastrophe",
        example:
          "Die anhaltende Dürrekatastrophe führte zu akutem Trinkwassermangel und Ernteausfällen.",
      },
      {
        german: "der Erdrutsch, -e",
        arabic: "الانهيار والانزلاق الطيني والترابي",
        english: "landslide, mudslide",
        example:
          "Nach heftigen Regenfällen begrub ein gewaltiger Erdrutsch die Passstraße unter Schlamm.",
      },
      {
        german: "das Frühwarnsystem, -e",
        arabic: "نظام الرصد والإنذار المبكر بالكوارث",
        english: "early warning system",
        example:
          "Ein akustisches Frühwarnsystem warnte die Bewohner rechtzeitig vor der Flutwelle.",
      },
      {
        german: "die Zerstörung, -en",
        arabic: "الدمار والخراب الناجم عن الكارثة",
        english: "destruction, devastation",
        example: "Das Ausmaß der Zerstörung nach dem Wirbelsturm war unbeschreiblich.",
      },
      {
        german: "die Katastrophenhilfe, -n",
        arabic: "أعمال الإغاثة والمعونة للمنكوبين",
        english: "disaster relief, disaster aid",
        example:
          "Spezialkräfte der Katastrophenhilfe suchten mit Rettungshunden nach Überlebenden.",
      },
      {
        german: "die Evakuierungsmaßnahme, -n",
        arabic: "إجراءات إخلاء السكان ونقلهم لمكان آمن",
        english: "evacuation measure",
        example:
          "Schnelle Evakuierungsmaßnahmen retteten tausenden Anwohnern vor dem Feuer das Leben.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Gefährliche Stürme",
        intro: "Einfache Sätze über Sturm, Feuer und Erdbeben (A1).",
        paragraphs: [
          [
            "Die Natur kann sehr wild und stark sein.",
            "Manchmal gibt es [die Naturkatastrophe, -n|eine Naturkatastrophe].",
            "Bei [das Erdbeben, -|einem Erdbeben] wackelt der ganze Boden unter den Füßen.",
          ],
          [
            "[der Hurrikan, -e|Ein starker Hurrikan] bringt gefährlichen Wind und viel Regen.",
            "Im heißen Sommer brennt der Wald: [der Waldbrand, -̈e|ein großer Waldbrand].",
            "Mutige Helfer retten die Menschen und Tiere vor der Gefahr.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Frühwarnung rettet Menschenleben",
        intro: "Tsunami-Bojen, Sirenen und Evakuierungen (A2).",
        paragraphs: [
          [
            "Letztes Jahr bebte das Meer vor der Küste Indonesiens.",
            "Sensoren im Ozean schlugen sofort an: [das Frühwarnsystem, -e|Das moderne Frühwarnsystem] funktionierte perfekt.",
          ],
          [
            "Per SMS und Sirenen wurden alle Menschen vor [der Tsunami, -s|einem Tsunami] gewarnt.",
            "Dank der schnellen [die Evakuierungsmaßnahme, -n|Evakuierungsmaßnahmen] flohen die Bewohner auf sichere Hügel.",
            "Obwohl die Flutwelle an den Stränden [die Zerstörung, -en|große Zerstörung] anrichtete, starben keine Menschen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Seismologie, Vulkanismus und Notfallmanagement",
        intro: "Plattengrenzen, Erdbebenzonen und internationale Katastrophenhilfe (B1).",
        paragraphs: [
          [
            "Die meisten geologischen Katastrophen ereignen sich entlang der Ränder tektonischer Platten, dem sogenannten Pazifischen Feuerring.",
            "Dort kündigt sich [der Vulkanausbruch, -̈e|ein Vulkanausbruch] oft durch Mikrobeben und Gasausstöße an.",
          ],
          [
            "Kommt es dennoch zu einer Katastrophe, leistet [die Katastrophenhilfe, -n|die internationale Katastrophenhilfe] lebensrettende Erstversorgung mit Trinkwasseraufbereitungsanlagen und mobilen Notlazaretten.",
          ],
          [
            "Erdbebensicheres Bauen und strenge Bauvorschriften minimieren das Einsturzrisiko von Gebäuden nachhaltig.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Anthropogene Klimafolgen, Attributionsforschung und Katastrophenresilienz",
        intro: "Extremwetterattribution, Sendai-Rahmenwerk und Sendai-Katastrophenvorsorge (B2).",
        paragraphs: [
          [
            "Die moderne Attributionsforschung belegt den kausalen Zusammenhang zwischen globaler Erwärmung und der erhöhten Frequenz und Intensität meteorologischer Extremereignisse.",
            "Anhaltende Hitzewellen verschärfen die [die Dürrekatastrophe, -n|Dürrekatastrophen] in vulnerablen Agrarregionen und begünstigen verheerende Waldbrände.",
          ],
          [
            "Das UN-Sendai-Rahmenwerk für Katastrophenvorsorge fordert einen Paradigmenwechsel von reaktiver Schadensbewältigung hin zu proaktivem Risikomanagement.",
          ],
          [
            "Klimaresiliente Raumplanung, Renaturierung von Überschwemmungsauen und satellitegestützte [das Frühwarnsystem, -e|Frühwarnsysteme] bilden fundamentale Säulen der Schadensminderung.",
          ],
        ],
      },
    },
  },

  die_landschaft: {
    description: "Landschaft, Gebirge, Tal, Hügel, Wald, Wiese, Fluss, See, Moor und Schluchten.",
    details:
      "Geomorphologie, mitteleuropäische Landschaften, Gewässer, Hochebenen und Relief (A1–B2)",
    arabicDescription:
      "المشهد الطبيعي والتضاريس (Die Landschaft): التضاريس والمشهد الطبيعي (Landschaft)، السلسلة الجبلية (Gebirge)، الوادي المنخفض (Tal)، التلال (Hügel)، الغابات، المروج الخضراء (Wiese)، الأنهار، البحيرات (See)، المستنقعات والمراعي، المضايق والخوانق الجبلية (Schlucht)، والهضاب المرتفعة.",
    words: [
      {
        german: "die Landschaft, -en",
        arabic: "المشهد الطبيعي والتضاريس العامة",
        english: "landscape, scenery",
        example: "Die hügelige Landschaft des Schwarzwaldes lädt zu ausgedehnten Wanderungen ein.",
      },
      {
        german: "das Gebirge, -",
        arabic: "السلسلة الجبلية / الجبال",
        english: "mountains, mountain range",
        example: "Im schneebedeckten Gebirge ragen schroffe Felsgipfel steil in den Himmel.",
      },
      {
        german: "das Tal, -̈er",
        arabic: "الوادي المنخفض بين الجبال",
        english: "valley",
        example: "Tief unten im grünen Tal schlängelt sich ein klarer Gebirgsbach.",
      },
      {
        german: "der Hügel, -",
        arabic: "التل المرتفع",
        english: "hill",
        example: "Vom Gipfel des sanften Hügels hat man eine herrliche Aussicht auf die Felder.",
      },
      {
        german: "der dichte Wald, -̈er",
        arabic: "الغابة الكثيفة المتشابكة الأشجار",
        english: "dense forest",
        example: "Im dichten Wald spenden die Baumkronen an heißen Sommertagen kühlen Schatten.",
      },
      {
        german: "die blühende Wiese, -n",
        arabic: "المرج والروضة المزهرة",
        english: "blooming meadow",
        example: "Bunte Schmetterlinge fliegen über die blühende Wiese voller Glockenblumen.",
      },
      {
        german: "der Fluss, -̈e",
        arabic: "النهر الجاري",
        english: "river",
        example: "Entlang des breiten Flusses verläuft ein beliebter Radweg für Ausflügler.",
      },
      {
        german: "der See, -n",
        arabic: "البحيرة العذبة",
        english: "lake",
        example: "Im Sommer baden wir im sauberen See und mieten ein kleines Ruderboot.",
      },
      {
        german: "das Moor, -e",
        arabic: "المستنقع والسبخة الطبيعية الرطبة",
        english: "moor, bog, fen",
        example: "Das feuchte Moor speichert riesige Mengen Kohlenstoff im Torfboden.",
      },
      {
        german: "die Schlucht, -en",
        arabic: "الخانق / الأخدود الجبلي الضيق والعميق",
        english: "gorge, canyon, ravine",
        example: "Auf einem schmalen Holzsteg wanderten wir durch die tosende Schlucht.",
      },
      {
        german: "die Hochebene, -n",
        arabic: "الهضبة المرتفعة المنبسطة",
        english: "plateau, tableland",
        example: "Auf der weiten Hochebene weht ein stetiger, kräftiger Wind.",
      },
      {
        german: "das Relief, -s",
        arabic: "تضاريس سطح الأرض وارتفاعاتها",
        english: "relief (topography)",
        example:
          "Das abwechslungsreiche Relief dieser Region entstand während der letzten Eiszeit.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wandern in der Natur",
        intro: "Einfache Sätze über Berge, Wälder, Seen und Wiesen (A1).",
        paragraphs: [
          [
            "Ich ziehe meine Wanderschuhe an und gehe hinaus.",
            "Vor mir liegt [die Landschaft, -en|eine wunderschöne Landschaft].",
            "In der Ferne sehe ich [das Gebirge, -|ein hohes Gebirge].",
          ],
          [
            "Ich laufe hinab in [das Tal, -̈er|das grüne Tal].",
            "Dort fließt [der Fluss, -̈e|ein klarer Fluss] mit kühlem Wasser.",
            "Hinter dem Fluss liegt [der See, -n|ein ruhiger See] und [die blühende Wiese, -n|eine blühende Wiese].",
          ],
          ["Vögel singen in [der dichte Wald, -̈er|dem dichten Wald]. Es ist herrlich hier."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Ausflug auf den Aussichtsberg",
        intro: "Vom Hügel ins Tal blicken, Moore und Schluchten (A2).",
        paragraphs: [
          [
            "Am Sonntag unternahmen wir eine Radtour durch das Mittelgebirge.",
            "Wir radelten an sanften [der Hügel, -|Hügeln] vorbei und erreichten eine spektakuläre [die Schlucht, -en|Schlucht].",
          ],
          [
            "Auf der anderen Seite des Berges lag [das Moor, -e|ein altes Moor], über das ein Holzweg führte.",
            "Dort erfuhren wir auf Informationstafeln, wie wichtig Feuchtgebiete für seltene Pflanzen sind.",
            "Vom Aussichtspunkt auf [die Hochebene, -n|der Hochebene] genossen wir den weiten Panoramablick.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Glaziale Formung und mitteleuropäische Kulturlandschaften",
        intro: "Eiszeitliche Prägung, Geomorphologie und Gewässerstrukturen (B1).",
        paragraphs: [
          [
            "Das gegenwärtige Erscheinungsbild der europäischen Landschaft ist das Produkt eiszeitlicher Gletscher und jahrhundertelanger menschlicher Bewirtschaftung.",
            "Moränenwälle und Zungenbecken formten die zahlreichen [der See, -n|Seen] im Alpenvorland und in Mecklenburg.",
          ],
          [
            "Während Hänge im Mittelgebirge meist mit dichtem Wald bestanden sind, wurden fruchtbare Ebenen in Kulturland umgewandelt.",
          ],
          [
            "Ökologen fordern heute die Renaturierung begradigter Flüsse und den Schutz intakter [das Moor, -e|Moore], um Hochwasserrisiken zu senken und die Biodiversität zu sichern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Geomorphologie, Ökosystemdienstleistungen und Landschaftsresilienz",
        intro: "Reliefformen, fluviale Dynamik und anthropogene Landschaftstransformation (B2).",
        paragraphs: [
          [
            "Die geomorphologische Struktur einer Region determiniert deren biotische Tragfähigkeit und Wasserretentionskapazitäten.",
            "Das tektonische [das Relief, -s|Relief] steuert zusammen mit dem geologischen Untergrund fluviale Erosions- und Sedimentationsprozesse in [das Tal, -̈er|Tälern] und Erosionsrinnen.",
          ],
          [
            "Naturnahe [die Landschaft, -en|Landschaften] erbringen fundamentale Ökosystemdienstleistungen: Feuchtbiotope wie [das Moor, -e|Niedermoore] binden Treibhausgase hochgradig, während Bergwälder Siedlungen vor Lawinen und Steinschlag schützen.",
          ],
          [
            "Eine integrative Raumplanung muss Zersiedelung und Landschaftsfragmentierung stoppen, um ökologische Korridore zu bewahren.",
          ],
        ],
      },
    },
  },

  edel_und_halbedelsteine: {
    description:
      "Edelsteine, Diamanten, Rubine, Saphire, Smaragde, Bernstein, Kristalle und Schliff.",
    details:
      "Mineralogie, Gemmologie, Mohs-Härte, Kristallgitter, Schmucksteine und Geologie (A1–B2)",
    arabicDescription:
      "الأحجار الكريمة والمعادن (Edel- und Halbedelsteine): الأحجار الكريمة (Edelstein)، الألماس (Diamant)، الياقوت الأحمر (Rubin)، الياقوت الأزرق (Saphir)، الزمرد الأخضر (Smaragd)، الأحجار شبه الكريمة، الكهرمان (Bernstein)، البلورات (Kristall)، المعادن الطبيعية، قطع وصقل الأحجار، ومقياس الصلابة.",
    words: [
      {
        german: "der Edelstein, -e",
        arabic: "الحجر الكريم النادر والثمين",
        english: "gemstone, precious stone",
        example: "Diamanten, Rubine und Smaragde gehören zu den wertvollsten Edelsteinen.",
      },
      {
        german: "der Diamant, -en",
        arabic: "الماس (أصلب المواد الطبيعية)",
        english: "diamond",
        example: "Der funkelnde Diamant ist so hart, dass er sogar Glas schneiden kann.",
      },
      {
        german: "der Rubin, -e",
        arabic: "الياقوت الأحمر القاني",
        english: "ruby",
        example: "Das tiefe Rot von dem Rubin entsteht durch winzige Chromspuren im Kristall.",
      },
      {
        german: "der Saphir, -e",
        arabic: "الياقوت الأزرق (الزفير)",
        english: "sapphire",
        example: "Der Ring war mit einem tiefblauen Saphir und kleinen Perlen besetzt.",
      },
      {
        german: "der Smaragd, -e",
        arabic: "الزمرد الأخضر النادر",
        english: "emerald",
        example: "Das leuchtende Grün von dem Smaragd fasziniert Menschen seit dem Altertum.",
      },
      {
        german: "der Bernstein, -e",
        arabic: "الكهرمان (العنبر المتحجر من صمغ الأشجار)",
        english: "amber",
        example:
          "An der Ostseeküste fanden wir ein Stück Bernstein mit einem eingeschlossenen Insekt.",
      },
      {
        german: "der Kristall, -e",
        arabic: "البلورة والكرستال ذو الشكل الهندسي المنتظم",
        english: "crystal",
        example: "In der Höhle wuchsen riesige weiße Bergkristalle aus dem nackten Fels.",
      },
      {
        german: "das Mineral, -ien",
        arabic: "المعدن الطبيعي الصلب في القشرة الأرضية",
        english: "mineral",
        example: "Granit ist ein Gestein, das aus drei verschiedenen Mineralien besteht.",
      },
      {
        german: "der Schliff, -e",
        arabic: "صقل وقص وقطع الحجر الكريم (البريليانت)",
        english: "cut (gemstone cut, polish)",
        example: "Erst durch einen präzisen Brillantschliff entfaltet der Stein sein volles Feuer.",
      },
      {
        german: "der Halbedelstein, -e",
        arabic: "الحجر شبه الكريم (عقيق، فيروز، لازورد)",
        english: "semi-precious stone",
        example: "Amethyst und Türkis sind beliebte Halbedelsteine für modischen Schmuck.",
      },
      {
        german: "die Mohs-Härte (Sg.)",
        arabic: "مقياس موهس لصلابة المعادن والأحجار",
        english: "Mohs hardness",
        example:
          "Auf der Mohs-Härteskala von eins bis zehn erreicht der Diamant die Höchststufe zehn.",
      },
      {
        german: "das Schmuckstück, -e",
        arabic: "قطعة المجوهرات والحلي",
        english: "piece of jewelry, jewel",
        example: "Das goldene Schmuckstück mit Rubin wurde von Generation zu Generation vererbt.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Funkelnde Steine",
        intro: "Einfache Sätze über Diamanten, Schmuck und bunte Steine (A1).",
        paragraphs: [
          [
            "In der Erde schlafen wunderschöne Schätze.",
            "Hier finden wir [der Edelstein, -e|einen wertvollen Edelstein].",
            "[der Diamant, -en|Der Diamant] funkelt hell im Licht und ist sehr hart.",
          ],
          [
            "[der Rubin, -e|Der rote Rubin] und [der Saphir, -e|der blaue Saphir] leuchten prächtig.",
            "Ein Goldschmied baut sie in [das Schmuckstück, -e|ein schönes Schmuckstück] ein.",
            "Am Strand an der Ostsee suche ich nach gelbem [der Bernstein, -e|Bernstein].",
          ],
          ["Steine aus der Natur sind faszinierend."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mineralien in der Höhle",
        intro: "Bergkristalle, Smaragde und Mohs-Härte (A2).",
        paragraphs: [
          [
            "Im Urlaub besuchten wir eine alte Silbermine in den Bergen.",
            "Tief unter der Erde zeigte uns der Bergführer glänzende [der Kristall, -e|Kristalle] im Gestein.",
          ],
          [
            "Wir lernten, dass [der Smaragd, -e|der grüne Smaragd] seine Farbe durch Chrom erhält.",
            "Auf der Skala für [die Mohs-Härte (Sg.)|die Mohs-Härte] ist Talk der weichste und der Diamant der härteste Stein.",
            "Im Museumsshop kaufte ich mir [der Halbedelstein, -e|einen violetten Halbedelstein] für meinen Schreibtisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kristallzüchtung, Gemmologie und die Kunst des Schleifens",
        intro: "Lichtbrechung, Facettenschliff und fossiles Harz (B1).",
        paragraphs: [
          [
            "Rohsteine aus den Tiefen der Erdkruste wirken oft unscheinbar, bis sie in den Händen eines Meisters ihren Zauber entfalten.",
            "Erst ein hochkomplexer geometrischer [der Schliff, -e|Schliff] bricht das einfallende Licht so, dass das charakteristische Funkeln entsteht.",
          ],
          [
            "Ein faszinierender Sonderfall ist [der Bernstein, -e|der Bernstein]: Er ist kein anorganisches [das Mineral, -ien|Mineral], sondern versteinertes Harz uralter Nadelbäume.",
          ],
          [
            "Die Gemmologie prüft Reinheit, Karatgewicht und Herkunft, um wertvolle Originale von synthetischen Nachbildungen zu unterscheiden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Kristallographie, Gitterstrukturen und geochemische Genese",
        intro: "Diamantbildung im Erdmantel, Beryll-Varietäten und optische Anisotropie (B2).",
        paragraphs: [
          [
            "Die geochemische Entstehung von Edelsteinen verlangt extreme Drücke und Temperaturen im oberen Erdmantel.",
            "Bei [der Diamant, -en|Diamanten] kristallisiert reiner Kohlenstoff im kubischen Kristallsystem, was die herausragende [die Mohs-Härte (Sg.)|Mohs-Härte] von 10 und extreme thermische Leitfähigkeit begründet.",
          ],
          [
            "Korunde wie [der Rubin, -e|Rubin] und [der Saphir, -e|Saphir] verdanken ihre Farben selektiver Lichtabsorption durch Spurenelemente in der trigonalen Kristallmatrix.",
          ],
          [
            "In der Hochtechnologie finden synthetische Einkristalle breite Anwendung in Lasersystemen, Hochfrequenz-Halbleitern und optischen Präzisionsinstrumenten.",
          ],
        ],
      },
    },
  },

  baeume: {
    description:
      "Bäume, Stämme, Äste, Blätter, Wurzeln, Rinde, Nadel- und Laubbäume und Fotosynthese.",
    details: "Dendrologie, Waldökosysteme, Baumarten, Mykorrhiza, Jahresringe und Holz (A1–B2)",
    arabicDescription:
      "الأشجار وعلم النبات (Bäume): الأشجار (Baum)، جذع الشجرة (Stamm)، الفروع والأغصان (Ast/Zweig)، الأوراق (Blatt)، الجذور الممتدة (Wurzel)، لحاء الشجرة (Rinde)، الأشجار المخروطية دائمة الخضرة (Nadelbaum)، الأشجار النفضية عريضة الأوراق (Laubbaum)، الغابة، الخشب، والمخاريط والتمثيل الضوئي (Fotosynthese).",
    words: [
      {
        german: "der Baum, -̈e",
        arabic: "الشجرة",
        english: "tree",
        example: "Die mächtige alte Eiche ist ein Baum, der schon mehrere Jahrhunderte alt ist.",
      },
      {
        german: "der Baumstamm, -̈e",
        arabic: "جذع الشجرة الخشبي الرئيسي",
        english: "tree trunk",
        example: "Um den dicken Baumstamm der Kastanie können drei Kinder herumfassen.",
      },
      {
        german: "der Ast, -̈e",
        arabic: "الغصن والفرع الكبير من الشجرة",
        english: "branch, bough",
        example: "Auf dem starken Ast baut eine Amsel im Frühling ihr Nest.",
      },
      {
        german: "das Laubblatt, -̈er",
        arabic: "ورقة الشجرة الخضراء",
        english: "leaf (deciduous)",
        example: "Im Herbst verfärbt sich jedes Laubblatt rot und goldgelb.",
      },
      {
        german: "die Baumwurzel, -n",
        arabic: "جذر الشجرة الممتد في التربة",
        english: "tree root",
        example: "Tiefe Baumwurzeln verankern die Fichte fest im Boden und saugen Wasser auf.",
      },
      {
        german: "die Baumrinde, -n",
        arabic: "لحاء وقشرة جذع الشجرة",
        english: "tree bark",
        example: "Die raue Baumrinde schützt das innere Holz vor Kälte, Schädlingen und Feuer.",
      },
      {
        german: "der Nadelbaum, -̈e",
        arabic: "الشجرة الإبرية والمخروطية (صنوبر، تنوب)",
        english: "conifer, needle tree",
        example: "Ein Nadelbaum wie die Tanne behält seine grünen Nadeln auch im eisigen Winter.",
      },
      {
        german: "der Laubbaum, -̈e",
        arabic: "الشجرة النفضية عريضة الأوراق (بلوط، زان)",
        english: "deciduous tree, broadleaf tree",
        example: "Im Winter wirft der Laubbaum alle Blätter ab, um Wasser zu sparen.",
      },
      {
        german: "der Tannenzapfen, -",
        arabic: "كوز ومخروط شجرة الصنوبر أو التنوب",
        english: "pine cone, fir cone",
        example: "Auf dem Waldweg sammelten die Kinder herabgefallene Tannenzapfen zum Basteln.",
      },
      {
        german: "die Fotosynthese (Sg.)",
        arabic: "عملية التمثيل الضوئي (البناء الضوئي)",
        english: "photosynthesis",
        example:
          "Durch Fotosynthese wandeln Blätter Sonnenlicht und Kohlendioxid in lebenswichtigen Sauerstoff um.",
      },
      {
        german: "der Jahresring, -e",
        arabic: "حلقة النمو السنوية داخل جذع الشجرة",
        english: "annual ring, growth ring",
        example:
          "An den feinen Jahresringen eines gefällten Baumes lässt sich sein genaues Alter ablesen.",
      },
      {
        german: "das Totholz (Sg.)",
        arabic: "الخشب الميت المتحلل في الغابة",
        english: "deadwood",
        example: "Vermoderndes Totholz bietet wertvollen Lebensraum für seltene Käfer und Pilze.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Der alte Baum im Park",
        intro: "Einfache Sätze über Baum, Stamm, Blätter und Wurzeln (A1).",
        paragraphs: [
          [
            "Vor meinem Fenster steht [der Baum, -̈e|ein großer Baum].",
            "Er hat einen dicken braunen [der Baumstamm, -̈e|Baumstamm].",
            "Unten im Boden halten [die Baumwurzel, -n|die starken Baumwurzeln] den Baum fest.",
          ],
          [
            "Oben wachsen viele [der Ast, -̈e|große Äste].",
            "Im Sommer trägt er grünes [das Laubblatt, -̈er|Laubblatt an Laubblatt].",
            "Die Vögel sitzen auf den Zweigen und singen fröhliche Lieder.",
          ],
          ["Bäume schenken uns Schatten und frische Luft."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Spaziergang durch den Mischwald",
        intro: "Nadelbäume, Laubbäume und Zapfen im Herbst (A2).",
        paragraphs: [
          [
            "Am Sonntagnachmittag spazierten wir durch den herbstlichen Wald.",
            "Dort wachsen verschiedene Baumarten nebeneinander.",
          ],
          [
            "Während [der Laubbaum, -̈e|die Laubbäume] ihre bunten Blätter abwarfen, blieb [der Nadelbaum, -̈e|jeder Nadelbaum] tiefgrün.",
            "Unter den hohen Kiefern lag mancher harzige [der Tannenzapfen, -|Tannenzapfen] auf dem Moos.",
            "Ich strich mit der Hand über [die Baumrinde, -n|die raue Baumrinde] einer uralten Buche.",
            "Bäume sind wahre Meisterwerke der Natur.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Lunge des Planeten und das Geheimnis der Fotosynthese",
        intro: "Sauerstoffproduktion, Kohlenstoffbindung und Dendrochronologie (B1).",
        paragraphs: [
          [
            "Wälder sind die unverzichtbare grüne Lunge unserer Erde.",
            "Über die biochemische [die Fotosynthese (Sg.)|Fotosynthese] absorbieren Chlorophyll-Moleküle Sonnenlicht, spalten Wasser und fixieren atmosphärisches CO2 in Biomasse.",
          ],
          [
            "Schneidet man einen Stamm quer durch, dokumentiert jeder einzelne [der Jahresring, -e|Jahresring] vergangene Dürren oder feuchte Sommerjahre.",
          ],
          [
            "Für ein intaktes Waldökosystem ist belassenes [das Totholz (Sg.)|Totholz] unverzichtbar: Es reichert den Humus an und nährt das unterirdische Pilzgeflecht.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Dendrologie, Mykorrhiza-Netzwerke und Waldumbau im Klimawandel",
        intro: "Wood Wide Web, Xylem-Hydraulik und Waldanpassungsstrategien (B2).",
        paragraphs: [
          [
            "Die Dendrologie offenbart die faszinierende Komplexität holziger Gefäßpflanzen.",
            "Über unterirdische Mykorrhiza-Symbiosen kommunizieren [die Baumwurzel, -n|Baumwurzeln] verschiedener Baumarten und tauschen Kohlenhydrate und Warnsignale gegen Schädlinge aus ('Wood Wide Web').",
          ],
          [
            "Zunehmende Sommertrockenheit und Borkenkäferkalamitäten erzwingen den Abschied von Fichten-Monokulturen und fordern den forstlichen Umbau hin zu klimaresilienten Mischwäldern.",
          ],
          [
            "Tiefwurzelnde Eichen und trockenheitstolerante Baumarten sichern die Resilienz mitteleuropäischer Waldökosysteme gegen hydraulische Embolien im Xylem.",
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

const res = vocabularyCollectionSchema.safeParse(enData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to erde-und-natur.json!");
