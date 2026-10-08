import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  das_lastkraft_fahrzeug: {
    description: "Lkw, Sattelzug, Anhänger, Fahrerhaus, Fracht, Ladung, Logistik und Güterverkehr.",
    details: "Schwerlastverkehr, Maut, Lenkzeiten und europäische Lieferketten (A1–B2)",
    arabicDescription:
      "شاحنات نقل البضائع (Das Lastkraft-Fahrzeug): مفردات الشاحنة (Lkw)، الشاحنة المفصلية (Sattelzug)، المقطورة (Anhänger)، كابينة القيادة (Fahrerhaus)، الحمولة والشحن (Fracht)، جهاز تسجيل السرعة (Fahrtenschreiber)، وحركة الشحن البري واللوجستيات.",
    words: [
      {
        german: "der Lastkraftwagen (Lkw), -",
        arabic: "شاحنة نقل البضائع الكبيرة (اللوري)",
        english: "truck, lorry, heavy goods vehicle (HGV)",
        example:
          "Auf der rechten Spur der Autobahn fährt ein langer Lastkraftwagen hinter dem anderen.",
      },
      {
        german: "der Sattelzug, -̈e",
        arabic: "الشاحنة المفصلية الكبيرة (تريلا)",
        english: "semi-trailer truck, articulated lorry",
        example:
          "Ein schwerer Sattelzug transportiert bis zu vierzig Tonnen gekühlte Lebensmittel.",
      },
      {
        german: "der Anhänger, -",
        arabic: "المقطورة الإضافية الخلفية",
        english: "trailer",
        example:
          "Der Fahrer kuppelt den großen Anhänger an der Laderampe des Lagers vorsichtig an.",
      },
      {
        german: "das Fahrerhaus, -̈er",
        arabic: "كابينة قيادة الشاحنة",
        english: "driver's cab, truck cabin",
        example:
          "Im modernen Fahrerhaus gibt es für den Fernfahrer ein bequemes Bett zum Schlafen.",
      },
      {
        german: "die Ladefläche, -n",
        arabic: "منصة وسطح تحميل البضائع",
        english: "loading area, truck bed",
        example: "Mit einem Gabelstapler werden schwere Holzpaletten auf die Ladefläche gehoben.",
      },
      {
        german: "die Fracht, -en",
        arabic: "الحمولة / شحنة البضائع المنقولة",
        english: "freight, cargo",
        example: "Die wertvolle Fracht ist gegen Transportschäden und Verrutschen versichert.",
      },
      {
        german: "beladen (belud, hat beladen)",
        arabic: "يحمّل الشاحنة بالبضائع",
        english: "to load",
        example: "Die Logistikarbeiter beladen den Lkw zügig mit Paketen für den Expressversand.",
      },
      {
        german: "entladen (entlud, hat entladen)",
        arabic: "يفرغ حمولة الشاحنة",
        english: "to unload",
        example: "Am Supermarkt muss der Lkw am frühen Morgen seine Waren entladen.",
      },
      {
        german: "der Fahrtenschreiber, -",
        arabic: "جهاز تسجيل سرعة وساعات القيادة (التاكوغراف)",
        english: "tachograph",
        example:
          "Die Polizei kontrolliert am Fahrtenschreiber, ob der Fahrer seine Ruhezeiten eingehalten hat.",
      },
      {
        german: "der Autohof, -̈e",
        arabic: "محطة واستراحة الشاحنات الكبرى بجانب الأوتوبان",
        english: "truck stop",
        example: "Nachts stehen Dutzende Lkw nebeneinander auf dem beleuchteten Autohof.",
      },
      {
        german: "der Güterverkehr (Sg.)",
        arabic: "حركة شحن البضائع والنقل البري",
        english: "freight traffic, goods transport",
        example:
          "Deutschland ist aufgrund seiner geografischen Lage die wichtigste Drehscheibe für den europäischen Güterverkehr.",
      },
      {
        german: "die Maut, -en",
        arabic: "رسوم المرور على الطرق السريعة للشاحنات",
        english: "toll (road toll)",
        example:
          "Auf allen deutschen Autobahnen und Bundesstraßen müssen Lkw eine entfernungsabhängige Maut bezahlen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Große Lkws auf der Autobahn",
        intro: "Einfache Sätze über schwere Lastwagen, Fahrer und Ladung (A1).",
        paragraphs: [
          [
            "Wenn wir auf der Autobahn fahren, sehen wir viele schwere Fahrzeuge.",
            "Dort fährt ein riesiger [der Lastkraftwagen (Lkw), -|Lastkraftwagen] mit blauer Plane.",
            "Der Fahrer sitzt hoch oben in [das Fahrerhaus, -̈er|dem Fahrerhaus] und steuert den Wagen.",
            "Hinten an der Zugmaschine hängt ein langer [der Anhänger, -|Anhänger].",
          ],
          [
            "Am großen Lagerhaus werden Männer die Kisten auf die [die Ladefläche, -n|Ladefläche] laden.",
            "Der Lkw bringt [die Fracht, -en|die Fracht] in den Supermarkt in unserer Stadt.",
            "Abends hält der Fahrer an einem Rastplatz, um zu schlafen.",
            "Lkws bringen jeden Tag wichtige Dinge in unsere Geschäfte.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Tag im Fernverkehr",
        intro: "Logistik, Lkw beladen, Maut und Rast auf dem Autohof (A2).",
        paragraphs: [
          [
            "Mein Onkel arbeitet seit fünfzehn Jahren als Berufskraftfahrer im internationalen Fernverkehr.",
            "Er fährt einen modernen [der Sattelzug, -̈e|Sattelzug], der Waren von Deutschland bis nach Spanien transportiert.",
            "Jeden Morgen muss er am Logistikzentrum pünktlich ankommen, um seinen Wagen zu [beladen (belud, hat beladen)|beladen].",
            "An der Grenze muss das Transportunternehmen elektronisch [die Maut, -en|die Maut] für die genutzten Kilometer entrichten.",
          ],
          [
            "Gesetzlich ist genau geregelt, wie viele Stunden er hinter dem Lenkrad sitzen darf.",
            "Ein digitaler [der Fahrtenschreiber, -|Fahrtenschreiber] zeichnet jede Sekunde Fahrzeit und jede Pause auf.",
            "Wenn seine Schicht endet, fährt er auf einen großen [der Autohof, -̈e|Autohof], isst zu Abend und schläft in der Koje.",
            "Ohne die Lkw-Fahrer wären die Regale in ganz Europa schnell leer.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Logistikdrehscheibe Deutschland: Zwischen Lieferketten und Infrastrukturdruck",
        intro: "Bedeutung des Schwerlastverkehrs, Mautsysteme und das Ringen um die Schiene (B1).",
        paragraphs: [
          [
            "Als geographisches Herzstück der Europäischen Union bewältigt die deutsche Verkehrsinfrastruktur ein beispielloses Volumen an Warentransporten.",
            "[der Güterverkehr (Sg.)|Der Güterverkehr] auf der Straße wächst kontinuierlich, angetrieben durch just-in-time-Produktionsketten und den boomenden globalen E-Commerce.",
            "Auf den Hauptverkehrsachsen wie der A1, A2 oder A7 rollt rund um die Uhr [der Lastkraftwagen (Lkw), -|Lastkraftwagen] an Lastkraftwagen.",
          ],
          [
            "Zur Finanzierung maroder Autobahnbrücken führte Deutschland vor über zwei Jahrzehnten das weltweit modernste satellitengestützte Mautsystem ein.",
            "Jeder schwere [der Sattelzug, -̈e|Sattelzug] registriert via On-Board-Unit automatisch die passierten Streckenabschnitte und entrichtet die streckenbezogene [die Maut, -en|Maut], welche inzwischen auch nach CO2-Emissionsklassen gestaffelt ist.",
          ],
          [
            "Dennoch verschärfen chronischer Parkplatzmangel auf Autobahnraststätten und der akute Mangel an Berufskraftfahrern die Lage.",
            "Verkehrspolitiker fordern daher seit Jahren, standardisierte Containerfrachten von der Straße auf die umweltfreundlichere Güterbahn zu verlagern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title:
          "Intermodale Logistiknetzwerke, Telematik und Dekarbonisierung des Schwerlastverkehrs",
        intro:
          "Kombinierter Verkehr (KV), Wasserstoff-Brennstoffzellen und automatisierte Flottensteuerung (B2).",
        paragraphs: [
          [
            "Die ökonomische Effizienz kontinentaler Lieferketten stützt sich auf hochgradig integrierte intermodale Logistiknetzwerke, bei denen [der Güterverkehr (Sg.)|der Güterverkehr] Straße, Schiene und Wasserstraße nahtlos verknüpft.",
            "Der kombinierte Ladungsverkehr (KLV) ermöglicht es, standardisierte ISO-Container und kranbare Sattelauflieger ohne Zwischenumladung der Ware von der Laderampe auf Güterzüge umzuschlagen.",
          ],
          [
            "Gleichzeitig forciert der europäische Green Deal eine radikale technologische Wende zur Dekarbonisierung schwerer Nutzfahrzeuge.",
            "Da Batteriegewichte bei einem [der Lastkraftwagen (Lkw), -|Lastkraftwagen] mit 40 Tonnen zulässigem Gesamtgewicht die Nutzlast empfindlich reduzieren, konkurrieren batterieelektrische Megawatt-Ladesysteme (MCS) mit Wasserstoff-Brennstoffzellenantrieben um die Vorherrschaft auf der Langstrecke.",
          ],
          [
            "Parallel dazu revolutionieren telematikbasierte Platooning-Konzepte den Autobahnverkehr: Durch elektronische Deichseln per Vehicle-to-Vehicle-Kommunikation (V2V) formieren sich Lkws zu aerodynamisch optimierten Konvois mit minimalem Sicherheitsabstand, was den Windschatteneffekt maximiert und den Flottenverbrauch drastisch deprimiert.",
          ],
        ],
      },
    },
  },
  weitere_fahrzeuge: {
    description:
      "Straßenbahn, U-Bahn, S-Bahn, Taxi, Traktor, Bagger, Einsatzfahrzeuge und Seilbahn.",
    details: "Öffentlicher Schienenverkehr, Bau- und Landmaschinen sowie Rettungsdienst (A1–B2)",
    arabicDescription:
      "مركبات ووسائل نقل أخرى (Weitere Fahrzeuge): مفردات الترام (Straßenbahn)، قطار الأنفاق المترو (U-Bahn)، قطار الضواحي (S-Bahn)، التاكسي (Taxi)، الجرار الزراعي (Traktor)، الحفار (Bagger)، سيارة الإسعاف والإطفاء والشرطة (Einsatzfahrzeuge)، والتلفريك.",
    words: [
      {
        german: "die Straßenbahn, -en",
        arabic: "ترام الشارع (الترامواي)",
        english: "tram, streetcar",
        example:
          "In vielen deutschen Städten fährt die Straßenbahn auf Schienen mitten durch die Fußgängerzone.",
      },
      {
        german: "die U-Bahn, -en",
        arabic: "قطار الأنفاق (المترو تحت الأرض)",
        english: "subway, underground",
        example:
          "Mit der U-Bahn fährt man schnell unter den verstopften Straßen der Metropole hindurch.",
      },
      {
        german: "die S-Bahn, -en",
        arabic: "قطار الضواحي السريع للمدن الكبرى",
        english: "suburban train, commuter rail",
        example:
          "Tausende Pendler nutzen täglich die S-Bahn, um aus dem Umland ins Zentrum zu gelangen.",
      },
      {
        german: "das Taxi, -s",
        arabic: "سيارة الأجرة (التاكسي)",
        english: "taxi, cab",
        example: "Spät in der Nacht nehmen wir uns am Taxistand ein beiges Taxi nach Hause.",
      },
      {
        german: "der Traktor, -en",
        arabic: "الجرار الزراعي (التراكتور)",
        english: "tractor",
        example: "Der Bauer pflügt mit seinem schweren grünen Traktor das weite Feld.",
      },
      {
        german: "der Bagger, -",
        arabic: "الحفار الآلي في موقع البناء",
        english: "excavator, digger",
        example: "Auf der Baustelle schaufelt der große gelbe Bagger eine tiefe Baugrube aus.",
      },
      {
        german: "das Feuerwehrauto, -s",
        arabic: "سيارة الإطفاء الحمراء",
        english: "fire engine, fire truck",
        example: "Mit Blaulicht und lautem Martinshorn rast das rote Feuerwehrauto zum Einsatz.",
      },
      {
        german: "der Krankenwagen, -",
        arabic: "سيارة الإسعاف ونقل المرضى",
        english: "ambulance",
        example: "Der Notarzt eilt mit dem Krankenwagen schnell zum verunglückten Patienten.",
      },
      {
        german: "das Polizeiauto, -s",
        arabic: "سيارة دورية الشرطة",
        english: "police car",
        example: "Das blau-silberne Polizeiauto patrouilliert nachts durch die Straßen der Stadt.",
      },
      {
        german: "die Seilbahn, -en",
        arabic: "التلفريك / القطار المعلق الجبلي",
        english: "cable car, aerial tramway",
        example:
          "Die Panorama-Seilbahn befördert die Touristen hoch hinauf zum schneebedeckten Berggipfel.",
      },
      {
        german: "das Blaulicht (Sg.)",
        arabic: "الضوء الأزرق الدوار لمركبات الطوارئ",
        english: "flashing blue light (emergency)",
        example:
          "Wenn Einsatzfahrzeuge mit Blaulicht nahen, müssen alle Verkehrsteilnehmer sofort Platz machen.",
      },
      {
        german: "Vorfahrt gewähren",
        arabic: "يمنح حق الأولوية في المرور",
        english: "to give way, yield right of way",
        example:
          "An der Kreuzung ohne Ampel muss man dem von rechts kommenden Fahrzeug Vorfahrt gewähren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Bunte Fahrzeuge in der Stadt",
        intro: "Einfache Sätze über Straßenbahn, U-Bahn, Bagger und Polizei (A1).",
        paragraphs: [
          [
            "In der großen Stadt fahren viele interessante Fahrzeuge.",
            "Ich fahre mit meiner Mutter oft mit der [die Straßenbahn, -en|Straßenbahn] durch das Zentrum.",
            "Unter der Erde fährt die schnelle [die U-Bahn, -en|U-Bahn] von einer Station zur nächsten.",
            "Wenn es eilig ist, rufen wir ein beiges [das Taxi, -s|Taxi] mit dem Telefon.",
          ],
          [
            "Auf der Baustelle arbeitet ein großer gelber [der Bagger, -|Bagger].",
            "Plötzlich hören wir eine laute Sirene: Ein blau-weißes [das Polizeiauto, -s|Polizeiauto] fährt vorbei.",
            "Das Auto hat ein helles [das Blaulicht (Sg.)|Blaulicht] auf dem Dach.",
            "Alle Autos stoppen und lassen den Wagen schnell durch.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fahrzeuge für Stadt, Land und Berge",
        intro: "S-Bahn für Pendler, Traktor auf dem Land und Seilbahn in den Alpen (A2).",
        paragraphs: [
          [
            "Je nachdem, wo man lebt, nutzt man ganz unterschiedliche Fahrzeuge.",
            "Mein Vater wohnt außerhalb der Stadt und fährt jeden Tag mit der [die S-Bahn, -en|S-Bahn] zum Büro.",
            "Wenn wir meine Großeltern auf dem Dorf besuchen, sehen wir den Bauern auf seinem kräftigen [der Traktor, -en|Traktor].",
            "Im Winterurlaub in den Bergen steigen wir in eine gläserne [die Seilbahn, -en|Seilbahn], die uns auf den Gipfel bringt.",
          ],
          [
            "Im Straßenverkehr gelten strenge Regeln für Einsatzfahrzeuge.",
            "Wenn ein [der Krankenwagen, -|Krankenwagen] oder ein [das Feuerwehrauto, -s|Feuerwehrauto] mit Sirene kommt, muss jeder Fahrer sofort Platz machen und [Vorfahrt gewähren|Vorfahrt gewähren].",
            "Auf diese Weise können Rettungskräfte schnell Menschenleben retten.",
            "Jedes Fahrzeug erfüllt eine wichtige Aufgabe für unsere Gesellschaft.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Schienennetze, Sonderrechte und Rettungsgassen in Deutschland",
        intro:
          "Verkehrsrechtliche Sonderrechte bei Blaulicht und das Prinzip der Rettungsgasse (B1).",
        paragraphs: [
          [
            "Das Zusammenspiel unterschiedlichster Verkehrsträger erfordert im dicht besiedelten Deutschland ein hohes Maß an rechtlicher Disziplin.",
            "In Ballungsräumen wie Berlin, München oder Frankfurt bilden U-Bahn und [die S-Bahn, -en|S-Bahn] das hochfrequente Rückgrat des Nahverkehrs, während in historischen Städten wie Dresden oder Leipzig [die Straßenbahn, -en|die Straßenbahn] die Passagiere direkt vor die Haustür bringt.",
          ],
          [
            "Eine existenzielle Bedeutung kommt den Sonder- und Wegerechten nach § 35 und § 38 der Straßenverkehrsordnung (StVO) zu.",
            "Nähert sich ein Einsatzfahrzeug mit blauem Blinklicht und Folgetonhorn, sind alle Verkehrsteilnehmer verpflichtet, unverzüglich freie Bahn zu schaffen.",
            "Auf Autobahnen und mehrspurigen Straßen gilt daher die eiserne Pflicht: Bereits bei stockendem Verkehr muss zwischen der linken und den übrigen Spuren eine Rettungsgasse gebildet werden, damit [der Krankenwagen, -|der Krankenwagen] ungehindert zur Unfallstelle gelangt.",
          ],
          [
            "Wer diese lebensrettende Gasse blockiert, muss mit drakonischen Bußgeldern und Fahrverboten rechnen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Spurführungsdynamik, Tunnelbautechnik und telematische Notfallkorridore",
        intro:
          "Rad-Schiene-Kinematik, urbaner Tiefbau und adaptive Vorrangschaltungen für Einsatzfahrzeuge (B2).",
        paragraphs: [
          [
            "Die Systemintegration spurgeführter Schienenfahrzeuge im Straßenraum verlangt ein tiefgehendes Verständnis der Rad-Schiene-Tribologie.",
            "Bei der [die Straßenbahn, -en|Straßenbahn] führt die Verlegung von Rillenschienen im niveaugleichen Straßenkörper zu spezifischen Reibwertveränderungen bei Nässe und Laubfall, was durch gezielte Sandstreueinrichtungen an den Triebdrehgestellen kompensiert wird.",
          ],
          [
            "Der unterirdische Ausbau der [die U-Bahn, -en|U-Bahn] wiederum repräsentiert Höchstleistungen des Tunnelbaus: Mittels Hydroschild-Tunnelvortriebsmaschinen werden metertiefe Röhren unter gewachsener historischer Bausubstanz vorgetrieben, ohne Setzungen an Fundamenten zu induzieren.",
          ],
          [
            "In modernen Smart-City-Architekturen wird zudem das Wegerecht von Rettungskräften automatisiert unterstützt: V2X-Funkmodule (Vehicle-to-Infrastructure) in [das Feuerwehrauto, -s|Feuerwehrautos] schalten Ampelanlagen entlang der Einsatzroute grün, sodass die Fahrzeuge ohne kinetische Bremsverluste sicher navigieren können, während Querverkehren automatisch Rot signalisiert wird.",
          ],
        ],
      },
    },
  },
  am_bahnhof: {
    description:
      "Bahnhof, Hauptbahnhof, Gleis, Bahnsteig, Zug, ICE, Regionalbahn, Verspätung und Durchsagen.",
    details:
      "Deutsche Bahn, Hochgeschwindigkeitsverkehr, Fahrgastrechte und Bahnsteiglogistik (A1–B2)",
    arabicDescription:
      "في محطة القطارات (Am Bahnhof): مفردات محطة القطارات (Bahnhof)، المحطة المركزية (Hauptbahnhof)، الرصيف (Bahnsteig)، مسار السكة (Gleis)، قطار الإنترسيتي إكسبريس السريع (ICE)، قطار الأقاليم (Regionalbahn)، الشاشة الإلكترونية (Anzeigetafel)، والإعلانات الصوتية بالمكبرات (Durchsage).",
    words: [
      {
        german: "der Hauptbahnhof, -̈e",
        arabic: "محطة القطارات المركزية الكبرى",
        english: "central railway station",
        example: "Am Hauptbahnhof herrscht reges Treiben von Pendlern, Reisenden und Touristen.",
      },
      {
        german: "das Gleis, -e",
        arabic: "رصيف / مسار سكة الحديد (البلاتفورم)",
        english: "track, platform",
        example: "Der Schnellzug nach München fährt heute von Gleis 7 anstelle von Gleis 4 ab.",
      },
      {
        german: "der Bahnsteig, -e",
        arabic: "رصيف المحطة للركاب",
        english: "platform",
        example:
          "Die Reisenden warten geduldig auf dem Bahnsteig hinter der weißen Sicherheitslinie.",
      },
      {
        german: "der Zug, -̈e",
        arabic: "القطار",
        english: "train",
        example: "Der Zug rollt leise und pünktlich an die Bahnsteigkante heran.",
      },
      {
        german: "der ICE (Intercity-Express), -s",
        arabic: "قطار الإنترسيتي إكسبريس الألماني فائق السرعة",
        english: "high-speed train (ICE)",
        example:
          "Mit bis zu dreihundert Kilometern pro Stunde rast der ICE über die Neubaustrecke.",
      },
      {
        german: "der Regionalexpress, -e",
        arabic: "قطار الأقاليم السريع للمسافات المتوسطة",
        english: "regional express train",
        example: "Der Regionalexpress verbindet kleinere Städte schnell mit den großen Metropolen.",
      },
      {
        german: "die Anzeigetafel, -n",
        arabic: "لوحة العرض الرقمية لمواعيد القطارات",
        english: "departure board, display board",
        example:
          "Auf der großen Anzeigetafel in der Bahnhofshalle liest sie die Abfahrtszeiten ab.",
      },
      {
        german: "die Durchsage, -n",
        arabic: "الإعلان الصوتي عبر مكبرات الصوت",
        english: "announcement (station)",
        example:
          "Eine Durchsage am Lautsprecher informiert die Passagiere über einen Gleiswechsel.",
      },
      {
        german: "die Schiene, -n",
        arabic: "قضبان وسكة الحديد الفولاذية",
        english: "rail, track",
        example: "Zwei parallele Schienen aus gehärtetem Stahl führen quer durch die Landschaft.",
      },
      {
        german: "der Waggon, -s",
        arabic: "عربة القطار",
        english: "carriage, railway car",
        example: "Wir haben unsere Sitzplätze im zweiten Waggon der ersten Klasse reserviert.",
      },
      {
        german: "abfahren (fuhr ab, ist abgefahren)",
        arabic: "يغادر وينطلق من المحطة",
        english: "to depart, pull out",
        example: "Der Zug wird in exakt zwei Minuten in Richtung Frankfurt abfahren.",
      },
      {
        german: "ankommen (kam an, ist angekommen)",
        arabic: "يصل إلى المحطة النهائية",
        english: "to arrive",
        example: "Nach dreistündiger Fahrt werden wir pünktlich um siebzehn Uhr ankommen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine Reise mit dem Zug",
        intro: "Einfache Sätze über Hauptbahnhof, Gleis, Ticket und Abfahrt (A1).",
        paragraphs: [
          [
            "Heute fahre ich mit meiner Familie nach Berlin.",
            "Wir gehen früh am Morgen in den großen [der Hauptbahnhof, -̈e|Hauptbahnhof].",
            "In der Halle schauen wir auf [die Anzeigetafel, -n|die Anzeigetafel] mit den Abfahrtszeiten.",
            "Unser Zug nach Berlin steht auf [das Gleis, -e|Gleis] drei.",
          ],
          [
            "Wir gehen die Treppe hoch und warten auf dem [der Bahnsteig, -e|Bahnsteig].",
            "Dort kommt ein weißer, moderner [der ICE (Intercity-Express), -s|ICE] angerollt.",
            "Wir steigen in den dritten [der Waggon, -s|Waggon] ein und suchen unsere Sitze.",
            "Um neun Uhr wird der Zug pünktlich [abfahren (fuhr ab, ist abgefahren)|abfahren].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Umsteigen und Durchsagen am Bahnhof",
        intro: "Gleiswechsel, Durchsagen und Fahrgastrechte bei Zugreisen (A2).",
        paragraphs: [
          [
            "Bahnfahren in Deutschland ist bequem, aber manchmal gibt es kleine Überraschungen.",
            "Gestern wollte ich mit einem [der Regionalexpress, -e|Regionalexpress] nach Köln fahren.",
            "Plötzlich ertönte eine laute [die Durchsage, -n|Durchsage] aus den Lautsprechern am Bahnhof.",
            "Die Stimme informierte uns über einen Gleiswechsel von Gleis 5 auf Gleis 9.",
          ],
          [
            "Alle Reisenden nahmen ihre Koffer und eilten schnell durch die Unterführung zum neuen Bahnsteig.",
            "Der Zug hatte zehn Minuten Verspätung, konnte aber sicher auf [die Schiene, -n|den Schienen] einfahren.",
            "Im Zug gibt es kostenloses WLAN und Steckdosen an fast jedem Sitzplatz.",
            "Trotz der Hektik bin ich am Ende gut an meinem Ziel [ankommen (kam an, ist angekommen)|angekommen].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Deutsche Bahn: Meilensteine, ICE-Netz und Pünktlichkeitsdebatten",
        intro:
          "Vom Adler-Zug zur Hochgeschwindigkeitsstrecke: Die Rolle der Bahn in Deutschland (B1).",
        paragraphs: [
          [
            "Das deutsche Schienennetz blickt auf eine fast 200-jährige Geschichte zurück, die 1835 mit der legendären Fahrt der Lokomotive 'Adler' zwischen Nürnberg und Fürth ihren Anfang nahm.",
            "Heute betreibt die Deutsche Bahn eines der dichtesten Eisenbahnnetze weltweit mit über 33.000 Kilometern Streckenlänge.",
            "Aushängeschild des Fernverkehrs ist [der ICE (Intercity-Express), -s|der ICE], der Metropolen mit Spitzengeschwindigkeiten von über 300 km/h verbindet und eine echte Alternative zum Inlandsflug darstellt.",
          ],
          [
            "Dennoch steht das System vor gewaltigen operativen Herausforderungen.",
            "Ein chronisch überlastetes Schienennetz, sanierungsbedürftige Stellwerke und unzählige Baustellen führen häufig zu Zugausfällen und Verspätungen.",
            "Wenn eine automatische [die Durchsage, -n|Durchsage] am Bahnsteig eine Verzögerung verkündet, berufen sich aufgeklärte Fahrgäste auf europäische Fahrgastrechte, die ab 60 Minuten Verspätung Erstattungen garantieren.",
          ],
          [
            "Trotz dieser Mängel bleibt die Bahn der klimafreundlichste Massenverkehrsträger für die Mobilitätswende des 21. Jahrhunderts.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "ETCS-Signaltechnik, Linienförmige Zugbeeinflussung und Fahrplantrassen-Management",
        intro: "Digitales Eisenbahnwesen, ETCS Level 2, Fahrdynamik und Kapazitätsengpässe (B2).",
        paragraphs: [
          [
            "Die moderne Betriebsführung im Hochgeschwindigkeitsverkehr erfordert die Substitution ortsfester Lichtsignale durch funkbasierte Leit- und Sicherungssysteme.",
            "Auf ICE-Neubaustrecken überwacht das European Train Control System (ETCS Level 2) via GSM-R bzw. FRMCS kontinuierlich Bremskurven und Gleisfreimeldungen.",
            "Bricht ein Fahrzeug den zugewiesenen Fahrwegkorridor, initiiert das On-Board-Steuergerät autonom eine Zwangsbremsung, wodurch Zugfolgen auf wenige Minuten verdichtet werden können.",
          ],
          [
            "Die Fahrdynamik eines [der Zug, -̈e|Zuges] bei über 250 km/h wird durch das komplexe Sinuslauf-Verhalten der konischen Radprofile auf [die Schiene, -n|den Schienen] determiniert.",
            "Hydraulische Schlingerdämpfer an den Drehgestellen unterdrücken kritische Schwingungsmoden, um Entgleisungssicherheit bei maximaler Spurgüte zu gewährleisten.",
          ],
          [
            "Infrastrukturell limitiert der Mischverkehr aus schnellem Fernverkehr, getaktetem Nahverkehr und schwerem Güterverkehr die Streckenkapazität an Engpässen wie dem Frankfurter oder Kölner [der Hauptbahnhof, -̈e|Hauptbahnhof].",
            "Dies erfordert algorithmische Trassenkonfliktlösungen in Echtzeit, um kaskadierende Sekundärverspätungen zu minimieren.",
          ],
        ],
      },
    },
  },
  im_flugzeug: {
    description:
      "Flugzeug, Flug, Cockpit, Pilot, Flugbegleiterin, Gangplatz, Fensterplatz, Handgepäck und Landung.",
    details: "Passagierluftfahrt, Bordservice, Sicherheitsunterweisung und Flugangst (A1–B2)",
    arabicDescription:
      "في الطائرة (Im Flugzeug): مفردات الطائرة (Flugzeug)، الرحلة الجوية (Flug)، قمرة القيادة (Cockpit)، الطيار (Pilot)، مضيفة الطيران (Flugbegleiterin)، مقعد النافذة والممر (Fensterplatz/Gangplatz)، حقيبة اليد (Handgepäck)، الإقلاع والهبوط (landen).",
    words: [
      {
        german: "das Flugzeug, -e",
        arabic: "الطائرة",
        english: "airplane, plane",
        example: "Das große Flugzeug hebt pünktlich von der Startbahn in den blauen Himmel ab.",
      },
      {
        german: "der Flug, -̈e",
        arabic: "الرحلة الجوية المسافرة",
        english: "flight",
        example: "Unser direkter Flug nach New York dauert knapp acht Stunden.",
      },
      {
        german: "das Cockpit, -s",
        arabic: "قمرة قيادة الطيارين في مقدمة الطائرة",
        english: "cockpit",
        example:
          "Im Cockpit überwachen die beiden Piloten Hunderte digitale Instrumente und Bildschirme.",
      },
      {
        german: "der Pilot, -en",
        arabic: "الطيار / قائد الطائرة",
        english: "pilot",
        example: "Der erfahrene Pilot steuert den Airbus sicher durch turbulente Wetterzonen.",
      },
      {
        german: "die Flugbegleiterin, -nen",
        arabic: "مضيفة الطيران الجوية",
        english: "flight attendant, stewardess",
        example:
          "Die freundliche Flugbegleiterin erklärt vor dem Start die wichtigsten Sicherheitsregeln.",
      },
      {
        german: "der Fensterplatz, -̈e",
        arabic: "مقعد النافذة المطل على الخارج",
        english: "window seat",
        example:
          "Ich reserviere mir immer einen Fensterplatz, um beim Start die Landschaft von oben zu sehen.",
      },
      {
        german: "der Gangplatz, -̈e",
        arabic: "مقعد الممر الداخلي",
        english: "aisle seat",
        example:
          "Auf einem langen Flug bevorzuge ich den Gangplatz, weil man leichter aufstehen kann.",
      },
      {
        german: "das Handgepäck (Sg.)",
        arabic: "حقيبة اليد المحمولة داخل المقصورة",
        english: "carry-on baggage, hand luggage",
        example: "Das Handgepäck darf ein Gewicht von acht Kilogramm nicht überschreiten.",
      },
      {
        german: "das Gepäckfach, -̈er",
        arabic: "الخزانة العلوية لحفظ حقائب اليد",
        english: "overhead bin, overhead compartment",
        example: "Er verstaut seinen Rucksack vorsichtig im Gepäckfach über seinem Sitz.",
      },
      {
        german: "starten (startete, ist gestartet)",
        arabic: "تقلع الطائرة وتنطلق في الهواء",
        english: "to take off",
        example: "Nachdem die Turbinen aufheulen, wird die Maschine in wenigen Sekunden starten.",
      },
      {
        german: "landen (landete, ist gelandet)",
        arabic: "تهبط الطائرة بسلام على المدرج",
        english: "to land",
        example: "Das Flugzeug setzt sanft mit den Rädern auf der Piste auf und bremst ab.",
      },
      {
        german: "die Flugangst (Sg.)",
        arabic: "الخوف والرهاب من الطيران",
        english: "fear of flying",
        example: "Spezielle Atemübungen und Seminare helfen Reisenden gegen quälende Flugangst.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Mein erster Flug",
        intro: "Einfache Sätze über Flugzeug, Sitzplatz, Handgepäck und Fliegen (A1).",
        paragraphs: [
          [
            "Heute fliege ich zum ersten Mal in den Urlaub.",
            "Ich gehe durch den Tunnel in das große [das Flugzeug, -e|Flugzeug].",
            "Ich trage meinen kleinen Rucksack als [das Handgepäck (Sg.)|Handgepäck] bei mir.",
            "Ich lege die Tasche oben in [das Gepäckfach, -̈er|das Gepäckfach] über meinem Kopf.",
          ],
          [
            "Ich habe Glück und sitze am Fenster auf dem [der Fensterplatz, -̈e|Fensterplatz].",
            "[die Flugbegleiterin, -nen|Die Flugbegleiterin] lächelt freundlich und bringt ein Glas Wasser.",
            "Die Motoren werden laut und das Flugzeug wird gleich [starten (startete, ist gestartet)|starten].",
            "Durch das Fenster sehe ich die Häuser und Straßen ganz klein werden.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Über den Wolken",
        intro: "Bordservice, Cockpit-Ansagen und sanfte Landung am Urlaubsort (A2).",
        paragraphs: [
          [
            "Unser [der Flug, -̈e|Flug] nach Mallorca dauert etwas mehr als zwei Stunden.",
            "Mein Freund sitzt auf dem [der Gangplatz, -̈e|Gangplatz], weil er lange Beine hat und mehr Platz braucht.",
            "Nach einer halben Stunde schaltet sich [der Pilot, -en|der Pilot] aus [das Cockpit, -s|dem Cockpit] über die Lautsprecher ein.",
            "Er berichtet über unsere Flughöhe von zehntausend Metern und das sonnige Wetter am Zielort.",
          ],
          [
            "Manche Passagiere leiden vor dem Abflug unter starker [die Flugangst (Sg.)|Flugangst], beruhigen sich aber schnell.",
            "Während des Fluges serviert die Crew Kaffee, Tee und ein kleines Sandwich.",
            "Pünktlich am Mittag setzt die Maschine zur Landung an, um sanft auf der Piste zu [landen (landete, ist gelandet)|landen].",
            "Alle klatschen erleichtert und freuen sich auf den wohlverdienten Strandurlaub.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Sicherheit über den Wolken: Von der Notfalleinweisung zum Kabinenalltag",
        intro:
          "Sicherheitsstandards der Zivilluftfahrt, Kabinendruck und Flugangstbewältigung (B1).",
        paragraphs: [
          [
            "Die kommerzielle Luftfahrt gilt statistisch als das mit Abstand sicherste Verkehrsmittel der Welt.",
            "Bevor ein modernes Verkehrs-[das Flugzeug, -e|Flugzeug] die Startfreigabe erhält, absolviert die Besatzung im [das Cockpit, -s|Cockpit] eine minutiöse Checkliste aller hydraulischen und elektronischen Systeme.",
            "In der Passagierkabine demonstriert [die Flugbegleiterin, -nen|die Flugbegleiterin] vorschriftsmäßig das Anlegen der Schwimmwesten und das Herabfallen der Sauerstoffmasken bei plötzlichem Druckabfall.",
          ],
          [
            "Für viele Reisende ist das Fliegen dennoch mit erheblichem Stress verbunden: Schätzungen zufolge leidet rund jeder fünfte Passagier unter latenter oder akuter [die Flugangst (Sg.)|Flugangst].",
            "Fluggesellschaften bieten daher spezialisierte Trainings an, in denen Psychologen und Piloten über aerodynamische Zusammenhänge aufklären, um irrationale Ängste vor normalen Turbulenzen abzubauen.",
          ],
          [
            "Sobald das Flugzeug nach stundenlanger Reise sanft auf der Landebahn aufsetzt, weicht die Anspannung der Vorfreude auf das Reiseziel.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Aerodynamischer Auftrieb, Kabinendruck-Physiologie und Fly-by-Wire-Avionik",
        intro: "Bernoulli-Prinzip, Kármán-Grenzschichten, Barotrauma-Prophylaxe und Avionik (B2).",
        paragraphs: [
          [
            "Die Physik des aerodynamischen Fluges basiert auf der Umströmung asymmetrischer Tragflächenprofile gemäß den Prinzipien von Bernoulli und der Impulserhaltung nach Newton.",
            "Durch die Zirkulation entsteht eine Druckdifferenz zwischen Unter- und Oberseite der Tragfläche, welche den nötigen dynamischen Auftrieb generiert, um ein Flugzeug mit über 300 Tonnen Abfluggewicht in die Stratosphäre zu heben.",
            "Moderne Verkehrsflugzeuge werden über fehlertolerante Fly-by-Wire-Systeme gesteuert, bei denen Steuereingaben des Piloten digital gefiltert und innerhalb der Flight Envelope Protection ausgeführt werden.",
          ],
          [
            "Auf physiologischer Ebene erfordert der Reiseflug in 11.000 Metern Höhe eine künstliche Kabinendruckbeaufschlagung auf ein Äquivalent von ca. 2.400 Metern über Normalnull.",
            "Dieser barometrische Druckabfall führt zu einer physikalischen Expansion eingeschlossener Körpergase (Gesetz von Boyle-Mariotte), weshalb Passagiere beim Steig- und Sinkflug aktiv den Druckausgleich über die Eustachische Röhre herbeiführen müssen.",
          ],
          [
            "Diese feine Abstimmung aus Flugzeugbau, Atmosphärenphysik und Humanbiologie ermöglicht sicheres interkontinentales Reisen über Zeitzonen hinweg.",
          ],
        ],
      },
    },
  },
  das_schiff: {
    description:
      "Schiff, Boot, Fähre, Kreuzfahrtschiff, Segelboot, Deck, Kapitän, Schwimmweste und Anker.",
    details: "Nautik, Seefahrt, Rettungsmittel, maritime Bräuche und Schiffssicherheit (A1–B2)",
    arabicDescription:
      "السفينة والملاحة البحرية (Das Schiff): مفردات السفينة (Schiff)، القارب (Boot)، العبارة (Fähre)، السفينة السياحية (Kreuzfahrtschiff)، قارب الشراع (Segelboot)، سطح السفينة (Deck)، القبطان (Kapitän)، سترة النجاة (Schwimmweste)، المرساة (Anker)، ودوار البحر (Seekrankheit).",
    words: [
      {
        german: "das Schiff, -e",
        arabic: "السفينة الكبيرة",
        english: "ship, vessel",
        example:
          "Das riesige Schiff gleitet majestätisch über die glatte Wasseroberfläche des Meeres.",
      },
      {
        german: "das Boot, -e",
        arabic: "القارب الصغير / الزورق",
        english: "boat",
        example: "Auf dem ruhigen See rudern wir am Nachmittag mit einem kleinen Holzboot.",
      },
      {
        german: "die Fähre, -n",
        arabic: "العبارة / معدية الركاب والسيارات",
        english: "ferry",
        example: "Die Autofähre verbindet das Festland im Stundentakt mit der Nordseeinsel.",
      },
      {
        german: "das Kreuzfahrtschiff, -e",
        arabic: "السفينة السياحية الفاخرة العائمة",
        english: "cruise ship",
        example:
          "Auf dem modernen Kreuzfahrtschiff gibt es Restaurants, Theater und Pools für Tausende Urlauber.",
      },
      {
        german: "das Segelboot, -e",
        arabic: "قارب الشراع الهوائي",
        english: "sailboat, sailing boat",
        example: "Bei auffrischendem Wind setzt die Crew die weißen Segel auf dem Segelboot.",
      },
      {
        german: "das Deck, -s",
        arabic: "سطح السفينة (الديك)",
        english: "deck (ship)",
        example: "Die Passagiere stehen oben auf dem Sonnendeck und genießen den weiten Ausblick.",
      },
      {
        german: "der Kapitän, -e",
        arabic: "القبطان / ربان السفينة",
        english: "captain, skipper",
        example:
          "Der Kapitän trägt die oberste nautische Verantwortung für Mannschaft, Schiff und Passagiere.",
      },
      {
        german: "die Schwimmweste, -n",
        arabic: "سترة النجاة الطافية على الماء",
        english: "life jacket, life vest",
        example: "Vor Antritt der Segeltour legt jedes Kind eine orangefarbene Schwimmweste an.",
      },
      {
        german: "der Rettungsring, -e",
        arabic: "طوق النجاة البحري",
        english: "lifebuoy, life ring",
        example:
          "An der Reling hängt ein rot-weißer Rettungsring mit einer langen Wurfleine griffbereit.",
      },
      {
        german: "der Anker, -",
        arabic: "مرساة السفينة (الهلب الحديدي)",
        english: "anchor",
        example:
          "In der geschützten Bucht wirft das Schiff den schweren eisernen Anker ins Wasser.",
      },
      {
        german: "die Seekrankheit (Sg.)",
        arabic: "دوار البحر الناتج عن تموج الأمواج",
        english: "seasickness",
        example: "Bei hohem Wellengang leiden viele Passagiere unter Übelkeit und Seekrankheit.",
      },
      {
        german: "kentern (kenterte, ist gekentert)",
        arabic: "تنقلب السفينة أو القارب في الماء",
        english: "to capsize",
        example: "Durch eine unvorhergesehene Sturmböe drohte die kleine Jolle zu kentern.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine Bootsfahrt auf dem See",
        intro: "Einfache Sätze über Schiff, Boot, Wasser und Rettungsweste (A1).",
        paragraphs: [
          [
            "Im Sommer sind wir am See und machen einen Ausflug auf dem Wasser.",
            "Mein Vater mietet ein kleines [das Boot, -e|Boot] für uns alle.",
            "Bevor wir einsteigen, zieht jeder eine sichere [die Schwimmweste, -n|Schwimmweste] an.",
            "Das Wasser ist blau und die Sonne scheint warm vom Himmel.",
          ],
          [
            "In der Ferne fährt ein großes weißes [das Schiff, -e|Schiff] vorbei.",
            "Auf dem Schiff steht [der Kapitän, -e|der Kapitän] und winkt den Leuten zu.",
            "Die Menschen stehen oben auf dem [das Deck, -s|Deck] in der frischen Luft.",
            "Eine Fahrt auf dem Wasser ist herrlich und entspannend.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mit der Fähre zur Insel",
        intro: "Autofähre nutzen, Segelboote beobachten und Seegang erleben (A2).",
        paragraphs: [
          [
            "Für unseren Urlaub auf der Insel Rügen fahren wir mit dem Auto auf [die Fähre, -n|die Fähre].",
            "Nachdem wir geparkt haben, steigen wir die Treppen hinauf auf das Aussichtsdeck.",
            "Vom Schiff aus sehen wir viele weiße Segel von einem schnittigen [das Segelboot, -e|Segelboot].",
            "Der Wind weht kräftig und das Schiff schaukelt sanft auf den Wellen.",
          ],
          [
            "Wenn die Wellen zu hoch werden, spüren manche Urlauber die unangenehme [die Seekrankheit (Sg.)|Seekrankheit].",
            "Überall an Bord hängen rot-weiße Rettungsmittel wie [der Rettungsring, -e|der Rettungsring] für Notfälle.",
            "Kurz vor dem Hafen wirft das Schiff den schweren [der Anker, -|Anker] noch nicht, sondern legt direkt an der Pier an.",
            "Die Seereise ist ein wunderbarer Start in die Ferien.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Tradition der Seefahrt und die Sicherheitskultur an Bord",
        intro: "Internationale SOLAS-Konvention, Seemannsbräuche und Notfallübungen (B1).",
        paragraphs: [
          [
            "Die Seefahrt prägte über Jahrtausende den Austausch von Kulturen, Gütern und Ideen über alle Weltmeere hinweg.",
            "Ob ein wendiges [das Segelboot, -e|Segelboot] auf den Binnengewässern oder ein gewaltiges [das Kreuzfahrtschiff, -e|Kreuzfahrtschiff] mit über fünftausend Passagieren auf hoher See: Auf jedem Gewässer gelten unumstößliche maritime Gesetze.",
            "Die internationale SOLAS-Konvention (Safety of Life at Sea) schreibt rigide Sicherheitsstandards vor, die nach dem Untergang historischer Ozeanliner institutionalisiert wurden.",
          ],
          [
            "Binnen 24 Stunden nach dem Auslaufen muss auf Passagierschiffen eine obligatorische Seenotrettungsübung absolviert werden.",
            "Jeder Gast muss wissen, wo seine [die Schwimmweste, -n|Schwimmweste] liegt und welche Musterstation im Brand- oder Wassereinbruchsfall aufzusuchen ist.",
          ],
          [
            "Auf der Kommandobrücke trägt [der Kapitän, -e|der Kapitän] die uneingeschränkte juristische und navigatorische Letztverantwortung, um das Schiff selbst durch orkanartige Stürme zu steuern, ohne dass das Fahrzeug Gefahr läuft zu [kentern (kenterte, ist gekentert)|kentern].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Hydrodynamische Stabilität, Metazentrum und maritime Umweltstandards",
        intro:
          "Schiffbauphysik, Metazentrische Höhe (GM), MARPOL-Richtlinien und Ballastwassermanagement (B2).",
        paragraphs: [
          [
            "Die Schwimmfähigkeit und Intaktstabilität eines Schiffskörpers unterliegen den physikalischen Gesetzmäßigkeiten der Hydrostatik nach Archimedes.",
            "Entscheidend für die Kenterstabilität ist die metazentrische Höhe (GM), welche die relative Lage zwischen Massenschwerpunkt und Metazentrum definiert.",
            "Weist ein hoch aufragendes [das Kreuzfahrtschiff, -e|Kreuzfahrtschiff] durch falsche Ballastierung eine negative metazentrische Höhe auf, entsteht bei Krängung kein aufrichtendes Hebelarmmoment mehr, wodurch das Schiff unweigerlich zu [kentern (kenterte, ist gekentert)|kentern] droht.",
          ],
          [
            "Moderne Schiffe verfügen über aktive Flossenstabilisatoren, die elektrohydraulisch aus dem Rumpf ausgefahren werden, um die Rollbewegung bei Seegang um bis zu 85 Prozent zu dämpfen und [die Seekrankheit (Sg.)|Seekrankheit] bei Passagieren zu minimieren.",
          ],
          [
            "Gleichzeitig zwingen internationale MARPOL-Konventionen die globale Schifffahrt zu drastischen Emissionssenkungen: Schweröl wird durch verflüssigtes Erdgas (LNG), Methanol oder Rotorsegel substituiert, während UV-gestützte Ballastwasseraufbereitungsanlagen die Einschleppung invasiver Neobiota in marine Ökosysteme verhindern.",
          ],
        ],
      },
    },
  },
  der_hafen: {
    description:
      "Hafen, Seehafen, Container, Containerhafen, Kran, Anlegen, Ablegen, Pier, Leuchtturm und Reederei.",
    details: "Hafenlogistik, Umschlagskran, Welthandel, Tide und Hafeninfrastruktur (A1–B2)",
    arabicDescription:
      "الميناء والمرفأ البحري (Der Hafen): مفردات الميناء (Hafen)، حاوية الشحن (Container)، ميناء الحاويات (Containerhafen)، رافعة الميناء (Kran)، رسو السفينة (anlegen)، مغادرة الرصيف (ablegen)، الرصيف (Pier)، المنارة (Leuchtturm)، وشركات الملاحة البحرية (Reederei).",
    words: [
      {
        german: "der Hafen, -̈",
        arabic: "الميناء / المرفأ البحري",
        english: "harbor, port",
        example: "Der Hamburger Hafen wird oft als das stolze 'Tor zur Welt' bezeichnet.",
      },
      {
        german: "der Seehafen, -̈",
        arabic: "الميناء البحري المطل على البحر",
        english: "seaport",
        example:
          "Im großen Seehafen von Bremerhaven werden Millionen Neuwagen weltweit verschifft.",
      },
      {
        german: "der Container, -",
        arabic: "حاوية الشحن البحرية الحديدية القياسية",
        english: "shipping container",
        example: "In einem standardisierten ISO-Container reisen Güter sicher rund um den Globus.",
      },
      {
        german: "der Containerhafen, -̈",
        arabic: "ميناء شحن وتفريغ الحاويات",
        english: "container terminal, container port",
        example:
          "Im Containerhafen arbeiten gigantische Brückenkräne vollautomatisch Tag und Nacht.",
      },
      {
        german: "der Kran, -̈e",
        arabic: "رافعة الميناء الضخمة (الونش)",
        english: "harbor crane, gantry crane",
        example: "Der riesige Kran hebt den vierzig Fuß langen Container zentimetergenau vom Deck.",
      },
      {
        german: "anlegen (legte an, hat angelegt)",
        arabic: "ترسو السفينة بمحاذاة الرصيف",
        english: "to dock, berth",
        example:
          "Mit Hilfe zweier wendiger Schlepper kann der Ozeanriese sicher an der Kaimauer anlegen.",
      },
      {
        german: "ablegen (legte ab, hat abgelegt)",
        arabic: "تغادر وتبحر السفينة بعيداً عن الرصيف",
        english: "to cast off, depart (ship)",
        example:
          "Um Punkt achtzehn Uhr lässt das Kreuzfahrtschiff das Horn ertönen und wird ablegen.",
      },
      {
        german: "die Pier, -s",
        arabic: "رصيف الميناء الممتد للرسو",
        english: "pier, jetty",
        example:
          "Touristen spazieren auf der hölzernen Pier und beobachten die einlaufenden Boote.",
      },
      {
        german: "der Leuchtturm, -̈e",
        arabic: "المنارة البحرية لإرشاد السفن",
        english: "lighthouse",
        example: "Bei dichtem Nebel weist der rot-weiße Leuchtturm den Schiffen den sicheren Weg.",
      },
      {
        german: "die Reederei, -en",
        arabic: "شركة الملاحة والنقل البحري",
        english: "shipping company",
        example:
          "Die traditionsreiche Reederei besitzt eine moderne Flotte von fünfzig Frachtschiffen.",
      },
      {
        german: "der Zoll (Sg.)",
        arabic: "الجمارك والتفتيش الجمركي للبضائع",
        english: "customs",
        example:
          "Die Beamten vom Zoll überprüfen verdächtige Frachtstücke mit riesigen Röntgenanlagen.",
      },
      {
        german: "die Schleuse, -n",
        arabic: "هويس القناة المائية لتعديل منسوب المياه",
        english: "lock (canal lock)",
        example:
          "In der Schleuse wird der Wasserstand angehoben, damit das Binnenschiff weiterfahren kann.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein Spaziergang am Hafen",
        intro: "Einfache Sätze über Schiffe, Leuchtturm, Hafen und Kräne (A1).",
        paragraphs: [
          [
            "Heute machen wir einen schönen Ausflug in [der Hafen, -̈|den Hafen].",
            "Wir stehen an dem Wasser und schauen auf [die Pier, -s|die Pier].",
            "Dort steht ein hoher, rot-weißer [der Leuchtturm, -̈e|Leuchtturm].",
            "Das Licht des Leuchtturms hilft den Schiffen in der Nacht.",
          ],
          [
            "Ein großes Schiff möchte langsam an der Kaimauer [anlegen (legte an, hat angelegt)|anlegen].",
            "Große Maschinen und ein riesiger [der Kran, -̈e|Kran] bewegen bunte Kisten.",
            "Ein anderes Boot wird gleich von der Mauer [ablegen (legte ab, hat abgelegt)|ablegen] und ins Meer fahren.",
            "Die Möwen fliegen über dem Wasser und es riecht nach Salz.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Im Hamburger Containerhafen",
        intro: "Gigantische Frachter, Containerterminals und Zollabwicklung am Seehafen (A2).",
        paragraphs: [
          [
            "Letzte Woche habe ich eine Hafenrundfahrt durch den berühmten Hamburger Hafen gemacht.",
            "Dort befindet sich ein gigantischer [der Containerhafen, -̈|Containerhafen], wo Schiffe aus Asien und Amerika ankommen.",
            "Ein moderner [der Seehafen, -̈|Seehafen] schläft nie: Tausende Kisten werden rund um die Uhr verladen.",
            "Jeder bunte [der Container, -|Container] aus Stahl hat eine eigene Nummer für die weltweite Verfolgung.",
          ],
          [
            "Bevor Waren nach Deutschland eingeführt werden dürfen, kontrolliert [der Zoll (Sg.)|der Zoll] die Frachtpapiere.",
            "Große internationale [die Reederei, -en|Reedereien] betreiben Schiffe, die bis zu zwanzigtausend Container transportieren können.",
            "Wenn Schiffe durch Kanäle fahren, müssen sie oft durch eine wasserregulierte [die Schleuse, -n|Schleuse].",
            "Der Hafen ist das pulsierende Herz des weltweiten Handels.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Tor zur Welt: Welthandel und die Elbvertiefung",
        intro:
          "Historische Speicherstadt, moderne Containerlogistik und ökologische Debatten (B1).",
        paragraphs: [
          [
            "Der Hamburger Hafen, gegründet im Jahr 1189 durch einen kaiserlichen Freibrief von Friedrich Barbarossa, symbolisiert seit Jahrhunderten das hanseatische Selbstverständnis als Welthandelsmetropole.",
            "Während die historische Speicherstadt mit ihren neugotischen Backsteinbauten einst Kaffee, Tee und Gewürze lagerte, dominiert heute hochautomatisierte Umschlagtechnik den [der Seehafen, -̈|Seehafen].",
            "An modernen Terminals wie Altenwerder bewegen fahrerlose Transportfahrzeuge jeden [der Container, -|Container] mit millimetergenauer Präzision.",
          ],
          [
            "Die Anpassung an immer gigantischere Containerschiffe mit über 400 Metern Länge entfacht jedoch anhaltende Kontroversen.",
            "Wiederholte Vertiefungen der Unterelbe zur Gewährleistung des Tiefgangs bei Ebbe und Flut lösen schwere ökologische Bedenken hinsichtlich Versalzung und Ufererosion aus.",
          ],
          [
            "Dennoch bleibt die logistische Leistungsfähigkeit der Kaimauern und das reibungslose [anlegen (legte an, hat angelegt)|Anlegen] der Frachter der wirtschaftliche Pulsschlag für Zehntausende Arbeitsplätze in ganz Norddeutschland.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Automatisierte Hafenterminals, Tidenhubdynamik und globale Seeverkehrsökonomie",
        intro:
          "AGV-Navigation, Hub-and-Spoke-Systeme der Allianzen und maritime Landstromversorgung (B2).",
        paragraphs: [
          [
            "In der maritimen Makrologistik agieren Mega-Häfen als hochgradig determinierte Schnittstellen globaler Hub-and-Spoke-Netzwerke.",
            "Im [der Containerhafen, -̈|Containerhafen] dirigieren terminale Betriebssysteme (Terminal Operating Systems, TOS) vollautomatisierte Portalkräne und fahrerlose Automated Guided Vehicles (AGV), die über Transponder im Bodenbelag navigieren und Durchlaufzeiten minimieren.",
          ],
          [
            "Ein wesentlicher hydrologischer Standortfaktor für Flussmündungshäfen ist der Tidenhub: Die Gezeitendynamik diktiert die Zeitfenster für das [anlegen (legte an, hat angelegt)|Anlegen] und [ablegen (legte ab, hat abgelegt)|Ablegen] von Ultra Large Container Vessels (ULCV) mit maximalem Abladetiefgang.",
          ],
          [
            "Zur Eliminierung lokaler Schadstoffemissionen während der Liegezeit an [die Pier, -s|der Pier] implementieren europäische Seehäfen flächendeckend Landstromanlagen.",
            "Dadurch können Hilfsdieselmotoren an Bord abgeschaltet werden, während das Schiff mit zertifiziertem Ökostrom aus dem Verbundnetz versorgt wird, was die urbane Umweltbelastung drastisch reduziert.",
          ],
        ],
      },
    },
  },
};

const uwPath = "src/data/vocabulary/unterwegs.json";
const uw = JSON.parse(fs.readFileSync(uwPath, "utf8"));

for (const sec of uw.sections) {
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

const res = vocabularyCollectionSchema.safeParse(uw);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(uwPath, JSON.stringify(uw, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to unterwegs.json!");
