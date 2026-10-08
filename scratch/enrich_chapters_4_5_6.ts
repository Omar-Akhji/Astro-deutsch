import fs from "fs";
import path from "path";

// -------------------------------------------------------------
// CHAPTER 4: UNTERWEGS
// -------------------------------------------------------------
export const chapter4TopicsEnrichment = [
  {
    id: "verkehrsmittel",
    title: "Verkehrsmittel",
    description:
      "Öffentlicher Nahverkehr und Individualverkehr: Bus, Bahn, Fahrrad und nachhaltige Mobilität.",
    details:
      "In Deutschland, Österreich und der Schweiz spielt der öffentliche Personennahverkehr (ÖPNV) eine zentrale Rolle. Wichtig ist die Unterscheidung der Verben: 'fahren mit' (+ Dativ, z. B. 'mit dem Bus fahren', 'mit der U-Bahn fahren'), 'einsteigen', 'aussteigen' und 'umsteigen'. Das Fahrrad ('das Fahrrad' oder umgangssprachlich 'das Rad') ist in Universitäts- und Großstädten wie Münster, Freiburg oder Berlin oft das schnellste und umweltfreundlichste Fortbewegungsmittel.",
    arabicDescription:
      "وسائل المواصلات العامة والفردية في ألمانيا. يركز هذا الدرس على وسائل النقل المختلفة (الحافلة، القطار، المترو، الدراجة الهوائية)، وحرف الجر (mit + Dativ) المستخدم دائماً مع وسائل المواصلات، بالإضافة إلى أفعال الحركة الأساسية مثل الركوب والنزول والتبديل (einsteigen, aussteigen, umsteigen).",
    words: [
      {
        german: "das Auto, -s",
        arabic: "السيارة",
        english: "car, automobile",
        example: "Viele Pendler fahren morgens mit dem Auto zur Arbeit.",
      },
      {
        german: "der Bus, -se",
        arabic: "الحافلة / الباص",
        english: "bus",
        example: "Der gelbe Bus hält pünktlich an der Haltestelle vor dem Rathaus.",
      },
      {
        german: "der Zug, -̈e",
        arabic: "القطار",
        english: "train",
        example: "Der schnelle Zug nach München fährt auf Gleis 4 ein.",
      },
      {
        german: "die U-Bahn, -en",
        arabic: "مترو الأنفاق",
        english: "subway, underground train",
        example: "Mit der U-Bahn kommt man in Großstädten am schnellsten voran.",
      },
      {
        german: "das Fahrrad, -̈er",
        arabic: "الدراجة الهوائية",
        english: "bicycle, bike",
        example: "Im Frühling fahre ich jeden Tag mit dem Fahrrad durch den Stadtpark.",
      },
      {
        german: "die Straßenbahn, -en",
        arabic: "الترام / ترامواي",
        english: "tram, streetcar",
        example: "Die moderne Straßenbahn gleitet leise durch die belebte Fußgängerzone.",
      },
      {
        german: "das Taxi, -s",
        arabic: "سيارة الأجرة / التاكسي",
        english: "taxi, cab",
        example: "Wenn es nachts spät wird, nehme ich mir ein sicheres Taxi nach Hause.",
      },
      {
        german: "das Schiff, -e",
        arabic: "السفينة / الباخرة",
        english: "ship, boat",
        example: "Am Wochenende unternehmen wir eine Rundfahrt mit dem Schiff auf dem Fluss.",
      },
      {
        german: "der Roller, -",
        arabic: "السكوتر",
        english: "scooter",
        example: "Im Stadtzentrum leihen sich viele Jugendliche einen elektrischen Roller aus.",
      },
      {
        german: "die Haltestelle, -n",
        arabic: "موقف الحافلة أو الترام",
        english: "stop, bus stop",
        example: "An der nächsten Haltestelle müssen wir in den Bus umsteigen.",
      },
      {
        german: "der Stau, -s",
        arabic: "الازدحام المروري / الأزمة",
        english: "traffic jam",
        example: "Im Berufsverkehr stehen die Autos oft stundenlang im Stau.",
      },
      {
        german: "der Helm, -e",
        arabic: "الخوذة",
        english: "helmet",
        example: "Zur eigenen Sicherheit sollte man beim Radfahren immer einen Helm tragen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Unterwegs in der Großstadt",
        intro: "Einfache Sätze über verschiedene Verkehrsmittel und Wege im Alltag (A1).",
        paragraphs: [
          [
            "In unserer Stadt gibt es viele praktische Verkehrsmittel.",
            "Ich fahre jeden Morgen mit dem [das Fahrrad, -̈er|Fahrrad] zur Sprachschule und trage immer einen [der Helm, -e|Helm].",
            "Wenn es stark regnet, nehme ich lieber den [der Bus, -se|Bus] oder die [die U-Bahn, -en|U-Bahn].",
            "An der großen [die Haltestelle, -n|Haltestelle] am Marktplatz steigen viele Menschen ein und aus.",
          ],
          [
            "Mein Vater fährt meistens mit dem [das Auto, -s|Auto] ins Büro, aber oft gibt es einen langen [der Stau, -s|Stau].",
            "Am Wochenende fahren wir mit dem schnellen [der Zug, -̈e|Zug] zu den Großeltern.",
            "In der Innenstadt fährt auch eine bequeme [die Straßenbahn, -en|Straßenbahn].",
            "Wenn wir spät am Abend nach Hause wollen, rufen wir ein [das Taxi, -s|Taxi].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Pünktlich zur Arbeit ohne Auto",
        intro: "Öffentlicher Nahverkehr und umweltfreundliche Alternativen im Berufsverkehr (A2).",
        paragraphs: [
          [
            "Viele Berufstätige in Großstädten lassen ihr [das Auto, -s|Auto] bewusst in der Garage stehen, um nicht im nervigen [der Stau, -s|Stau] zu stecken.",
            "Stattdessen nutzen sie den dichten Takt von [der Bus, -se|Bus] und Straßenbahn.",
            "Ich laufe fünf Minuten zur nächsten [die Haltestelle, -n|Haltestelle] und steige in die [die Straßenbahn, -en|Straßenbahn] der Linie 3 ein.",
            "Am Hauptbahnhof wechsle ich zügig in die unterirdische [die U-Bahn, -en|U-Bahn], die mich ohne Verzögerung direkt ans Ziel bringt.",
          ],
          [
            "„Fährst du im Sommer eigentlich wieder mit dem [das Fahrrad, -̈er|Fahrrad]?“, fragt mich mein Kollege beim Mittagessen.",
            "„Ja, absolut! Mit sicherem [der Helm, -e|Helm] auf dem Kopf bin ich auf zwei Rädern oft schneller als der gesamte Autoverkehr“, antworte ich fröhlich.",
            "Für längere Dienstreisen buchen wir immer ein Ticket für den [der Zug, -̈e|Zug], da man dort im Abteil entspannt am Laptop arbeiten kann.",
            "Und falls die Bahn einmal ausfällt, teilen wir uns spontan ein [das Taxi, -s|Taxi] mit anderen Fahrgästen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Die Mobilitätswende im urbanen Lebensraum",
        intro:
          "Kombination verschiedener Verkehrsträger für eine lebenswerte und umweltfreundliche Stadt (B1).",
        paragraphs: [
          [
            "Die moderne Verkehrspolitik steht vor der gewaltigen Herausforderung, individuelle Mobilitätsbedürfnisse mit wirksamem Klimaschutz zu harmonisieren.",
            "Während das eigene [das Auto, -s|Auto] in der Vergangenheit als Statussymbol galt, empfinden viele Stadtbewohner den täglichen [der Stau, -s|Stau] zunehmend als zeitraubende Belastung.",
            "In modernen Metropolen ergänzen sich die hochfrequente [die U-Bahn, -en|U-Bahn], der emissionsarme [der Bus, -se|Bus] und ein wendiger elektrischer [der Roller, -|Roller] zu einem flexiblen Mobilitätsmix.",
            "Wer täglich pendelt, schätzt den Komfort, den ein moderner [der Zug, -̈e|Zug] auf interurbanen Strecken bietet.",
          ],
          [
            "Gleichzeitig erleben Städte eine Renaissance des Radverkehrs, weshalb breite Radschnellwege ausgebaut werden.",
            "Dort radeln Pendler mit schützendem [der Helm, -e|Helm] auf dem [das Fahrrad, -̈er|Fahrrad], vorbei an überfüllten Straßen.",
            "An multimodalen Knotenpunkten ist jede [die Haltestelle, -n|Haltestelle] so konzipiert, dass der Übergang zur barrierefreien [die Straßenbahn, -en|Straßenbahn] reibungslos gelingt.",
            "Auf diese Weise wandeln sich Verkehrsräume in lebenswerte Begegnungszonen, in denen Lärm und Schadstoffe spürbar zurückgehen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Intermodale Verkehrskonzepte und urbane Resilienz",
        intro:
          "Verkehrsökonomische und stadtplanerische Analyse zukunftsfähiger Mobilitätsinfrastrukturen (B2).",
        paragraphs: [
          [
            "Die Dekarbonisierung des Transportsektors erfordert eine radikale Neukonzeption urbaner Verkehrsströme jenseits der automobilen Fixierung des 20. Jahrhunderts.",
            "Obwohl das autonome [das Auto, -s|Auto] neue Potenziale verspricht, bleibt der chronische [der Stau, -s|Stau] auf Einfallstraßen ein strukturelles Symptom ineffizienter Flächennutzung.",
            "Ein leistungsfähiger Umweltverbund basiert daher auf massenleistungsfähigen Schienensystemen: Ein dicht getakteter [der Zug, -̈e|Zug] und eine unterirdische [die U-Bahn, -en|U-Bahn] bilden das unverzichtbare Rückgrat metropolitaner Erreichbarkeit.",
            "Ergänzt durch emissionsfreie Flotten wie die moderne [die Straßenbahn, -en|Straßenbahn] wird eine flächendeckende Grundversorgung gewährleistet.",
          ],
          [
            "Auf der sogenannten 'letzten Meile' revolutionieren Mikromobilitätsangebote wie das smarte [das Fahrrad, -̈er|Fahrrad] und der agile [der Roller, -|Roller] das individuelle Fortbewegungsverhalten.",
            "Gleichzeitig erfordern Sicherheitsstandards wie die Nutzung vom [der Helm, -e|Helm] sowie separate Radtrassen klare regulatorische Leitplanken.",
            "Wenn hochmoderne [die Haltestelle, -n|Haltestellen] zu vernetzten Mobilitätshubs transformiert werden, an denen auch autonome [das Taxi, -s|Taxis] andocken können, entsteht ein zukunftsfähiges, resilientes Verkehrssystem.",
          ],
        ],
      },
    },
  },
  {
    id: "flughafen_bahnhof",
    title: "Am Flughafen und Bahnhof",
    description: "Reisezentren, Fernverkehr, Ticketkauf, Gepäckaufgabe und Flugabfertigung.",
    details:
      "Reisen mit der Deutschen Bahn (DB) oder das Fliegen erfordern spezifischen Wortschatz. Am Bahnhof achtet man auf: 'das Gleis' (in Österreich auch 'der Bahnsteig'), 'der Fahrplan', 'die Verspätung' und 'die Durchsage'. Am Flughafen durchläuft man: 'der Check-in / die Gepäckaufgabe', 'die Sicherheitskontrolle' und 'das Gate / der Flugsteig'. Nützliche Wendungen: 'Haben Sie die Fahrkarte parat?', 'Der Zug hat 15 Minuten Verspätung' und 'Guten Flug!'.",
    arabicDescription:
      "السفر والتنقل عبر المطارات ومحطات القطار في ألمانيا. يتناول هذا الدرس مصطلحات حجز التذاكر، ورصيف القطار، ومعرفة مواعيد الإقلاع والوصول، والتعامل مع التأخيرات (Verspätung)، والإعلانات الصوتية (Durchsage)، وإجراءات التفتيش الأمني وشحن الحقائب.",
    words: [
      {
        german: "der Flughafen, -̈",
        arabic: "المطار",
        english: "airport",
        example:
          "Der internationale Flughafen von Frankfurt zählt zu den größten Drehkreuzen Europas.",
      },
      {
        german: "das Flugzeug, -e",
        arabic: "الطائرة",
        english: "airplane, plane",
        example: "Das riesige Flugzeug hebt pünktlich von der Startbahn ab.",
      },
      {
        german: "der Bahnhof, -̈e",
        arabic: "محطة القطار",
        english: "train station",
        example: "Wir treffen uns um zehn Uhr vor dem Haupteingang am Bahnhof.",
      },
      {
        german: "das Gleis, -e",
        arabic: "السكة / رصيف القطار",
        english: "track, platform track",
        example: "Der ICE nach Berlin steht auf Gleis 7 zur Abfahrt bereit.",
      },
      {
        german: "die Fahrkarte, -n",
        arabic: "تذكرة السفر",
        english: "ticket (train/bus)",
        example: "Ich habe meine Fahrkarte online über die App der Bahn gebucht.",
      },
      {
        german: "der Bahnsteig, -e",
        arabic: "رصيف المحطة",
        english: "platform",
        example: "Auf dem überdachten Bahnsteig warten Dutzende Reisende auf den Regionalzug.",
      },
      {
        german: "die Verspätung, -en",
        arabic: "التأخير",
        english: "delay",
        example: "Wegen einer Weichenstörung hat der Zug leider zwanzig Minuten Verspätung.",
      },
      {
        german: "das Gepäck",
        arabic: "الأمتعة / العفش",
        english: "luggage, baggage",
        example:
          "Bitte lassen Sie Ihr Gepäck auf dem Bahnsteig zu keinem Zeitpunkt unbeaufsichtigt.",
      },
      {
        german: "der Koffer, -",
        arabic: "حقيبة السفر",
        english: "suitcase",
        example: "Ich packe meinen schweren Koffer am Vorabend der großen Reise.",
      },
      {
        german: "der Ausgang, -̈e",
        arabic: "المخرج",
        english: "exit",
        example: "Folgen Sie den grünen Hinweisschildern zum Ausgang in Richtung Innenstadt.",
      },
      {
        german: "der Flug, -̈e",
        arabic: "الرحلة الجوية / الطيران",
        english: "flight",
        example: "Unser direkter Flug nach Wien dauert knapp eineinhalb Stunden.",
      },
      {
        german: "die Durchsage, -n",
        arabic: "الإعلان الصوتي / النداء عبر مكبر الصوت",
        english: "announcement (loudspeaker)",
        example: "Die Lautsprecherdurchsage informierte über den spontanen Gleiswechsel.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Reisen mit Zug und Flugzeug",
        intro: "Einfache Sätze für den Bahnhof und den Flughafen (A1).",
        paragraphs: [
          [
            "Heute mache ich eine Urlaubsreise nach Berlin.",
            "Ich packe meinen großen [der Koffer, -|Koffer] und fahre früh am Morgen zum [der Bahnhof, -̈e|Bahnhof].",
            "Am Schalter kaufe ich eine [die Fahrkarte, -n|Fahrkarte] für die 2. Klasse.",
            "Mein Zug fährt heute auf [das Gleis, -e|Gleis] 3 ab, und ich gehe die Treppe hoch.",
          ],
          [
            "Aus dem Lautsprecher höre ich eine [die Durchsage, -n|Durchsage]: Der Zug kommt pünktlich.",
            "Später fahre ich weiter zum großen [der Flughafen, -̈|Flughafen].",
            "Dort gebe ich mein [das Gepäck|Gepäck] auf und steige in das moderne [das Flugzeug, -e|Flugzeug].",
            "Der [der Flug, -̈e|Flug] startet bei strahlendem Sonnenschein, und ich freue mich auf die Reise.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Reiseerlebnisse und unerwartete Verspätungen",
        intro: "Abläufe am Gleis und an den Terminals bei Fernreisen (A2).",
        paragraphs: [
          [
            "Vergangenen Freitag war ich beruflich unterwegs und stand bereits um sieben Uhr am belebten [der Bahnhof, -̈e|Bahnhof].",
            "Auf der Anzeigetafel stand, dass mein Zug auf [das Gleis, -e|Gleis] 5 einfährt.",
            "Doch plötzlich ertönte eine akustische [die Durchsage, -n|Durchsage]: „Achtung! Der Intercity hat heute fünfzehn Minuten [die Verspätung, -en|Verspätung].“",
            "Viele Reisende auf dem [der Bahnsteig, -e|Bahnsteig] schüttelten den Kopf und zückten nervös ihre Smartphones.",
          ],
          [
            "Ich suchte mir eine Bank, stellte meinen schweren [der Koffer, -|Koffer] ab und kontrollierte meine digitale [die Fahrkarte, -n|Fahrkarte].",
            "Zum Glück erreichte ich meinen Anschlusszug noch rechtzeitig und kam pünktlich am [der Flughafen, -̈|Flughafen] an.",
            "Dort passierte ich zügig die Sicherheitskontrolle, um mein Gate für den [der Flug, -̈e|Flug] nicht zu verpassen.",
            "Als ich endlich im bequemen [das Flugzeug, -e|Flugzeug] saß und aus dem Fenster schaute, fiel die Anspannung von mir ab.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Moderne Reiseknotenpunkte zwischen Präzision und Unwägbarkeiten",
        intro:
          "Wie Großbahnhöfe und Flughäfen logistische Meisterleistungen im Reisealltag vollbringen (B1).",
        paragraphs: [
          [
            "Internationale Verkehrsknotenpunkte wie ein pulsierender Haupt-[der Bahnhof, -̈e|Bahnhof] oder ein interkontinentaler [der Flughafen, -̈|Flughafen] sind faszinierende Mikrokosmen der Globalisierung.",
            "Täglich durchqueren Hunderttausende Passagiere mit schwerem [das Gepäck|Gepäck] die Hallen, stets den Blick auf Abflugmonitore und Fahrpläne gerichtet.",
            "Wer sicher reisen möchte, bucht seine [die Fahrkarte, -n|Fahrkarte] frühzeitig mit Sitzplatzreservierung, um am überfüllten [der Bahnsteig, -e|Bahnsteig] Stress zu vermeiden.",
            "Kommt es dennoch zu einer unvorhergesehenen [die Verspätung, -en|Verspätung], informiert das Servicepersonal per Lautsprecher-[die Durchsage, -n|Durchsage] über Ausweichmöglichkeiten.",
          ],
          [
            "Beim Wechsel vom Schienen- zum Luftverkehr beeindruckt die nahtlose logistische Verzahnung.",
            "Vom Fernbahn-[das Gleis, -e|Gleis] gelangt man über Rolltreppen direkt zum Check-in-Schalter, wo der robuste [der Koffer, -|Koffer] gewogen und verladen wird.",
            "Sobald das Boarding für den [der Flug, -̈e|Flug] abgeschlossen ist, rollt das gewaltige [das Flugzeug, -e|Flugzeug] zur Startbahn.",
            "Erst nach der Landung am fernen Zielort führt der Weg durch den gut ausgeschilderten [der Ausgang, -̈e|Ausgang] in ein neues Abenteuer.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Logistische Anthropologie: Transitzonen der Spätmoderne",
        intro:
          "Kritische Analyse von Nicht-Orten, Pünktlichkeitsmythen und vernetzten Verkehrshubs (B2).",
        paragraphs: [
          [
            "Der Soziologe Marc Augé definierte Transiträume wie den modernen [der Flughafen, -̈|Flughafen] treffend als 'Nicht-Orte' – standardisierte Nicht-Räume der Durchreise, in denen Identität auf Bordkarten und Barcodes reduziert wird.",
            "Dennoch spiegeln der historische [der Bahnhof, -̈e|Bahnhof] und moderne Terminals den technologischen Entwicklungsstand einer Industrienation wider.",
            "Während jede [die Verspätung, -en|Verspätung] im dicht getakteten Schienennetz komplexe Kaskadeneffekte auslöst, symbolisiert der strukturierte [der Bahnsteig, -e|Bahnsteig] das preußische Ideal kalkulierbarer Ordnung.",
            "Eine präzise formulierte [die Durchsage, -n|Durchsage] balanciert in Krisenmomenten die kollektive Frustration hunderter wartender Fahrgäste an einem überfüllten [das Gleis, -e|Gleis] aus.",
          ],
          [
            "Die Symbiose aus digitaler [die Fahrkarte, -n|Fahrkarte], biometrischer Passkontrolle und vollautomatisiertem [das Gepäck|Gepäck]-Routing demonstriert die fortschreitende Kybernetik des Reisens.",
            "Gleichzeitig offenbart die Ökobilanz beim [das Flugzeug, -e|Flugzeug] die Notwendigkeit, intermodale Verknüpfungen so auszubauen, dass Kurzstrecken-[der Flug, -̈e|Flüge] obsolet werden.",
            "Passagiere, die ihren Roll-[der Koffer, -|Koffer] durch den finalen [der Ausgang, -̈e|Ausgang] manövrieren, erfahren Transit daher stets als Spannungsfeld zwischen technologischer Perfektion und individueller Entfremdung.",
          ],
        ],
      },
    },
  },
  {
    id: "orientierung",
    title: "Orientierung",
    description:
      "Wegbeschreibungen, Straßenverkehr, Richtungsangaben und Orientierung in fremden Städten.",
    details:
      "Nach dem Weg fragen ist eine Kernkompetenz beim Deutschlernen. Typische Fragen: 'Entschuldigung, wie komme ich zum Bahnhof?', 'Können Sie mir sagen, wo das Rathaus liegt?'. Typische Antworten: 'Gehen Sie geradeaus', 'Biegen Sie an der zweiten Kreuzung rechts ab', 'An der Ampel nach links'. Wichtig: 'rechts' und 'links' als Richtungsangaben ohne Artikel ('nach rechts', 'auf der linken Seite').",
    arabicDescription:
      "تحديد الاتجاهات ووصف الطريق في المدن الألمانية. يتناول هذا الدرس عبارات السؤال عن الطريق بأدب، واستخدام الكلمات الاتجاهية (يمين، يسار، إلى الأمام مباشرة)، والإشارات الضوئية والتقاطعات والميادين وكيفية قراءة الخريطة واستخدام تطبيقات الملاحة.",
    words: [
      {
        german: "die Straße, -n",
        arabic: "الشارع",
        english: "street, road",
        example: "In dieser ruhigen Straße gibt es viele hübsche Cafés und Boutiquen.",
      },
      {
        german: "die Kreuzung, -en",
        arabic: "التقاطع / مفترق الطرق",
        english: "intersection, crossroads",
        example: "An der großen Kreuzung müssen Sie vorsichtig sein und auf den Verkehr achten.",
      },
      {
        german: "die Ampel, -n",
        arabic: "إشارة المرور",
        english: "traffic light",
        example:
          "Bei Rot musst du stehen, bei Grün darfst du gehen – das lernt jedes Kind an der Ampel.",
      },
      {
        german: "rechts",
        arabic: "يميناً / على اليمين",
        english: "right, to the right",
        example: "Biegen Sie nach der Apotheke bitte nach rechts in die Parkstraße ab.",
      },
      {
        german: "links",
        arabic: "يساراً / على اليسار",
        english: "left, to the left",
        example: "Auf der linken Seite der Fußgängerzone befindet sich die historische Bibliothek.",
      },
      {
        german: "geradeaus",
        arabic: "إلى الأمام مباشرة",
        english: "straight ahead",
        example: "Gehen Sie immer geradeaus weiter, bis Sie den großen Brunnen sehen.",
      },
      {
        german: "die Ecke, -n",
        arabic: "الزاوية / المنعطف",
        english: "corner",
        example: "Gleich um die Ecke finden Sie einen kleinen traditionellen Bäckerladen.",
      },
      {
        german: "der Kreisverkehr, -e",
        arabic: "الميدان / الدوار",
        english: "roundabout",
        example: "Nehmen Sie im Kreisverkehr bitte die zweite Ausfahrt in Richtung Autobahn.",
      },
      {
        german: "die Karte, -n",
        arabic: "الخريطة",
        english: "map",
        example: "Auf der digitalen Karte meines Smartphones finde ich jeden gesuchten Ort sofort.",
      },
      {
        german: "der Weg, -e",
        arabic: "الطريق / الدرب",
        english: "way, path, route",
        example:
          "Der Weg durch den schattigen Stadtpark ist viel schöner als an der Hauptstraße entlang.",
      },
      {
        german: "in der Nähe",
        arabic: "بالقرب من / قريب",
        english: "nearby, in the vicinity",
        example: "Gibt es hier in der Nähe ein gutes deutsches Restaurant mit Außenterrasse?",
      },
      {
        german: "abbiegen",
        arabic: "ينعطف / يلتف",
        english: "to turn (left/right)",
        example: "An der nächsten Querstraße müssen Sie nach links abbiegen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Nach dem Weg fragen",
        intro: "Einfache Dialoge nach dem Weg in einer fremden Stadt (A1).",
        paragraphs: [
          [
            "Ich bin neu in der Stadt und suche das Rathaus.",
            "Ich frage eine freundliche Frau auf der [die Straße, -n|Straße]: „Entschuldigung, wie komme ich zum Rathaus?“",
            "Die Frau antwortet lächelnd: „Gehen Sie hier einfach [geradeaus|geradeaus] bis zur nächsten [die Ampel, -n|Ampel].“",
            "„Dort biegen Sie nach [rechts|rechts] ab und gehen noch hundert Meter weiter.“",
          ],
          [
            "An der nächsten [die Ecke, -n|Ecke] sehe ich schon ein großes Gebäude.",
            "Gleich auf der [links|linken] Seite liegt der schöne Marktplatz.",
            "Gibt es auch eine U-Bahn-Station [in der Nähe|in der Nähe]?",
            "Ja, der [der Weg, -e|Weg] dorthin ist sehr kurz und leicht zu finden.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Eine detaillierte Wegbeschreibung für Touristen",
        intro: "Präzise Orientierung im Straßenverkehr mit Richtungen und Kreuzungen (A2).",
        paragraphs: [
          [
            "Gestern sprach mich ein ausländischer Tourist an einer verkehrsreichen [die Kreuzung, -en|Kreuzung] an.",
            "Er hielt eine ausgedruckte [die Karte, -n|Karte] in der Hand und suchte den historischen Dom.",
            "„Kein Problem, ich erkläre Ihnen gern den besten [der Weg, -e|Weg]!“, sagte ich zu ihm.",
            "„Gehen Sie diese breite [die Straße, -n|Straße] etwa zweihundert Meter [geradeaus|geradeaus], bis Sie zu einer großen roten [die Ampel, -n|Ampel] kommen.“",
          ],
          [
            "„An der Ampel müssen Sie nach [links|links] [abbiegen|abbiegen], direkt an der [die Ecke, -n|Ecke] zur Schlossgasse.“",
            "„Danach kommen Sie an einen großen [der Kreisverkehr, -e|Kreisverkehr] mit einem Brunnen in der Mitte.“",
            "„Nehmen Sie dort die Ausfahrt nach [rechts|rechts], und schon sehen Sie die hohen Türme des Doms vor sich.“",
            "Der Tourist bedankte sich herzlich und freute sich über die unkomplizierte Hilfe [in der Nähe|in der Nähe] der Innenstadt.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Orientierungskunst im Labyrinth historischer Altstädte",
        intro: "Wie man sich in verwinkelten Straßen zurechtfindet und Passanten anspricht (B1).",
        paragraphs: [
          [
            "Historische europäische Altstädte bestechen durch ihren unverwechselbaren Charme, stellen Besucher jedoch oft vor knifflige Orientierungsprobleme.",
            "Wer ohne Navigationssystem unterwegs ist, vertraut entweder einer klassischen [die Karte, -n|Karte] oder wendet sich vertrauensvoll an einheimische Bürger.",
            "An einer unübersichtlichen [die Kreuzung, -en|Kreuzung] genügt meist eine höfliche Ansprache, um den optimalen [der Weg, -e|Weg] zum Museum zu erfragen.",
            "Häufig lautet die Empfehlung, zunächst [geradeaus|geradeaus] an malerischen Fassaden entlangzugehen, bis man auf eine schmale [die Straße, -n|Straße] trifft.",
          ],
          [
            "An einer verkehrsberuhigten [die Ecke, -n|Ecke] gilt es dann, mit Bedacht nach [links|links] oder [rechts|rechts] zu schwenken.",
            "Besonders für Autofahrer erweist sich ein gut strukturierter [der Kreisverkehr, -e|Kreisverkehr] oft als flüssigere Lösung im Vergleich zu einer starren [die Ampel, -n|Ampel].",
            "Sollte man sich dennoch verirren, findet sich fast immer eine Bushaltestelle [in der Nähe|in der Nähe], an der man sich neu orientieren kann.",
            "So wird selbst ein kleiner Umweg zu einer lohnenswerten Entdeckungsreise abseits ausgetretener Touristenpfade.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Kognitive Kartierung und urbane Raumsemantik",
        intro:
          "Wissenschaftliche Betrachtung räumlicher Kognition und digitaler Navigationshilfen (B2).",
        paragraphs: [
          [
            "Die menschliche Fähigkeit zur räumlichen Orientierung beruht auf der kontinuierlichen Konstruktion kognitiver Karten im Hippocampus, sogenannten 'Cognitive Maps'.",
            "Markante urbane Orientierungspunkte wie die geschäftige [die Kreuzung, -en|Kreuzung], der verkehrsberuhigte [der Kreisverkehr, -e|Kreisverkehr] oder eine exponierte [die Ecke, -n|Ecke] dienen dem menschlichen Gehirn als essenzielle mentale Anker.",
            "In der Epoche allgegenwärtiger GPS-Technologie droht dieser intuitive Orientierungssinn jedoch zu verkümmern, wenn der Nutzer den [der Weg, -e|Weg] nur noch fremdgesteuert abläuft.",
            "Statt die urbane Topografie der [die Straße, -n|Straße] bewusst wahrzunehmen, folgt der Blick starr dem Display der digitalen [die Karte, -n|Karte].",
          ],
          [
            "Dabei offenbart sich die räumliche Kompetenz gerade darin, Richtungsentscheidungen wie [links|links] oder [rechts|rechts] in Relation zu topografischen Landmarken zu begreifen.",
            "Die automatisierte Lenkung durch die städtische [die Ampel, -n|Ampel] reglementiert den Bewegungsfluss, während spontanes [abbiegen|Abbiegen] Raum für ungeplante Stadterfahrungen eröffnet.",
            "Eine gelungene städtebauliche Lesbarkeit ermöglicht es Bewohnern und Besuchern gleichermaßen, Destinationen [in der Nähe|in der Nähe] ohne kognitive Überlastung zu lokalisieren.",
          ],
        ],
      },
    },
  },
];

// -------------------------------------------------------------
// CHAPTER 5: IN DER STADT
// -------------------------------------------------------------
export const chapter5TopicsEnrichment = [
  {
    id: "gebaeude_und_orte",
    title: "Gebäude und Orte",
    description: "Öffentliche Einrichtungen, Institutionen, Sehenswürdigkeiten und urbane Plätze.",
    details:
      "In deutschen Städten sind wichtige kommunale Gebäude Anlaufstellen für Bürger: das Rathaus ('das Rathaus', Sitz des Bürgermeisters und des Bürgeramts), das Krankenhaus ('das Krankenhaus' für Notfälle), die Apotheke ('die Apotheke' für Medikamente, erkennbar am roten 'A'-Symbol) und die Post ('die Post'). Wichtige Präpositionen mit Dativ und Akkusativ: 'Ich gehe zur Post' / 'Ich bin auf der Post', 'Ich muss zum Rathaus', 'Die Apotheke ist neben der Bank'.",
    arabicDescription:
      "المباني العامة والمؤسسات الحيوية في المدينة الألمانية. يشمل هذا الدرس مبنى البلدية (Rathaus)، والمستشفى، والصيدلية، والبنك، ومركز الشرطة، ومكتب البريد، والمكتبة، مع شرح حروف الجر الدالة على التوجه إلى هذه الأماكن أو التواجد فيها.",
    words: [
      {
        german: "die Stadt, -̈e",
        arabic: "المدينة",
        english: "city, town",
        example: "Berlin ist die bevölkerungsreichste Stadt der Bundesrepublik Deutschland.",
      },
      {
        german: "das Zentrum",
        arabic: "المركز / وسط المدينة",
        english: "center, downtown",
        example: "Im belebten Zentrum der Stadt pulsiert das geschäftige Leben bis in die Nacht.",
      },
      {
        german: "das Rathaus, -̈er",
        arabic: "مبنى البلدية",
        english: "city hall, town hall",
        example: "Im historischen Rathaus habe ich meinen neuen Wohnsitz offiziell angemeldet.",
      },
      {
        german: "die Post",
        arabic: "البريد / مكتب البريد",
        english: "post office, mail",
        example: "Ich bringe ein wichtiges Einschreiben zur Post an der Ecke.",
      },
      {
        german: "die Bank, -en",
        arabic: "البنك / المصرف",
        english: "bank (financial)",
        example: "Am Geldautomaten der Bank hebe ich Bargeld für das Wochenende ab.",
      },
      {
        german: "die Apotheke, -n",
        arabic: "الصيدلية",
        english: "pharmacy, chemist's",
        example:
          "In der Notdienst-Apotheke bekomme ich auch sonntags dringend benötigte Medikamente.",
      },
      {
        german: "das Krankenhaus, -̈er",
        arabic: "المستشفى",
        english: "hospital",
        example: "Die Notaufnahme im städtischen Krankenhaus ist rund um die Uhr geöffnet.",
      },
      {
        german: "die Polizei",
        arabic: "الشرطة",
        english: "police",
        example: "Die Polizei sorgt Tag und Nacht für Sicherheit und Ordnung auf den Straßen.",
      },
      {
        german: "die Bibliothek, -en",
        arabic: "المكتبة العامة",
        english: "library",
        example: "In der ruhigen Bibliothek leihe ich mir Fachbücher für mein Studium aus.",
      },
      {
        german: "das Museum, Museen",
        arabic: "المتحف",
        english: "museum",
        example:
          "Am ersten Sonntag des Monats ist der Eintritt in das städtische Museum kostenlos.",
      },
      {
        german: "die Kirche, -n",
        arabic: "الكنيسة",
        english: "church",
        example:
          "Die gotische Kirche mit ihren kunstvollen Fenstern überragt den historischen Marktplatz.",
      },
      {
        german: "der Park, -s",
        arabic: "الحديقة العامة / المنتزه",
        english: "park",
        example: "Nach getaner Arbeit spazieren viele Menschen gern im grünen Park.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Spaziergang durch die Stadt",
        intro: "Einfache Sätze über wichtige Gebäude und Orte in einer Stadt (A1).",
        paragraphs: [
          [
            "Unsere [die Stadt, -̈e|Stadt] ist nicht sehr groß, aber wunderschön.",
            "Direkt im [das Zentrum|Zentrum] steht das alte [das Rathaus, -̈er|Rathaus] mit einem großen Turm.",
            "Neben dem Rathaus liegt die [die Post|Post], wo ich Briefe und Pakete abgebe.",
            "Auf der anderen Seite befindet sich die [die Bank, -en|Bank] mit einem modernen Geldautomaten.",
          ],
          [
            "Wenn jemand krank ist, geht er zur [die Apotheke, -n|Apotheke] oder ins [das Krankenhaus, -̈er|Krankenhaus].",
            "Für unsere Sicherheit sorgt die freundliche [die Polizei|Polizei].",
            "Am Nachmittag gehe ich in die ruhige [die Bibliothek, -en|Bibliothek] und lese ein Buch.",
            "Danach entspanne ich mich im grünen [der Park, -s|Park] unter alten Bäumen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Erledigungen in der Innenstadt am Samstag",
        intro: "Typische Behördengänge, Einkäufe und Freizeitorte in der Stadt (A2).",
        paragraphs: [
          [
            "Am Samstag habe ich viele Erledigungen in der Stadt zu erledigen.",
            "Zuerst fahre ich ins [das Zentrum|Zentrum] und gehe zum Bürgerbüro im [das Rathaus, -̈er|Rathaus], um meinen Personalausweis zu verlängern.",
            "Danach laufe ich zur [die Bank, -en|Bank], hebe etwas Bargeld ab und bringe ein Päckchen zur [die Post|Post].",
            "Weil mein Hals schmerzt, kaufe ich in der [die Apotheke, -n|Apotheke] noch wohltuende Halstabletten.",
          ],
          [
            "„Treffen wir uns später noch auf einen Kaffee?“, fragt mich meine Freundin am Telefon.",
            "„Gern! Ich schaue mir vorher noch die neue Kunstausstellung im [das Museum, Museen|Museum] an“, antworte ich ihr.",
            "Wir verabreden uns vor der alten [die Kirche, -n|Kirche] und spazieren anschließend gemeinsam durch den weitläufigen [der Park, -s|Park].",
            "Es ist beruhigend zu wissen, dass auch das moderne [das Krankenhaus, -̈er|Krankenhaus] und die [die Polizei|Polizei] in wenigen Minuten erreichbar sind.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Urbane Infrastruktur und kommunale Daseinsvorsorge",
        intro: "Wie öffentliche Gebäude das Zusammenleben und die Lebensqualität sichern (B1).",
        paragraphs: [
          [
            "Eine lebenswerte [die Stadt, -̈e|Stadt] zeichnet sich durch eine ausgewogene Symbiose aus bürgernahen Institutionen, kulturellen Angeboten und Erholungsräumen aus.",
            "Das historische [das Rathaus, -̈er|Rathaus] bildet nicht nur die administrative Schaltzentrale der Kommunalpolitik, sondern fungiert im belebten [das Zentrum|Zentrum] als identitätsstiftendes Wahrzeichen.",
            "Die fußläufige Erreichbarkeit von grundlegenden Dienstleistern wie [die Bank, -en|Bank] und [die Post|Post] erleichtert den Alltag von Senioren und Familien gleichermaßen.",
            "Im medizinischen Notfall garantiert das leistungsstarke städtische [das Krankenhaus, -̈er|Krankenhaus] in enger Kooperation mit der diensthabenden [die Apotheke, -n|Apotheke] eine lückenlose Notfallversorgung.",
          ],
          [
            "Neben Sicherheit, für die eine bürgernahe [die Polizei|Polizei] sorgt, bedarf eine vitale Stadtgesellschaft auch geistiger Freiräume.",
            "Die moderne städtische [die Bibliothek, -en|Bibliothek] und das vielseitige [das Museum, Museen|Museum] bieten niederschwelligen Zugang zu Bildung und historischem Wissen.",
            "Eine jahrhundertealte [die Kirche, -n|Kirche] erinnert an die baukulturellen Wurzeln der Gemeinde, während der weitläufige [der Park, -s|Park] als grüne Lunge fungiert.",
            "So vereinen sich funktionale Infrastruktur und ästhetische Freiräume zu einem harmonischen urbanen Lebensraum.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Raumsoziologie der Polis: Institutionelle Topografie und Öffentlichkeit",
        intro:
          "Interdisziplinäre Reflexion über städtische Monumentalität und bürgerliche Partizipation (B2).",
        paragraphs: [
          [
            "Die institutionelle Topografie moderner Metropolen manifestiert die Machtarchitektur und Wertesysteme einer demokratischen Gesellschaft.",
            "Das monumentale [das Rathaus, -̈er|Rathaus] im historischen Kern einer [die Stadt, -̈e|Stadt] symbolisiert bürgerschaftliche Selbstverwaltung und politische Souveränität im verdichteten [das Zentrum|Zentrum].",
            "Gleichzeitig erfordert die Transformation von Dienstleistungsbauten wie [die Bank, -en|Bank] und [die Post|Post] durch die fortschreitende Digitalisierung neue Nutzungskonzepte für ehemals hochfrequentierte innerstädtische Schalterhallen.",
            "Staatliche Schutzorgane wie die rechtsstaatlich gebundene [die Polizei|Polizei] und kritische Infrastrukturen wie das akademische [das Krankenhaus, -̈er|Krankenhaus] garantieren das verfassungsrechtliche Grundversprechen physischer Unversehrtheit.",
          ],
          [
            "Demokratische Resilienz manifestiert sich jedoch gleichermaßen in konsumfreien Resonanzräumen des Geistes.",
            "Eine progressive [die Bibliothek, -en|Bibliothek] fungiert heute als inklusiver 'Dritter Ort' des Wissensaustauschs, flankiert vom kuratorischen Diskursraum eines [das Museum, Museen|Museums].",
            "Sakrale Bauten wie die ehrwürdige [die Kirche, -n|Kirche] bieten spirituelle Kontemplation jenseits ökonomischer Verwertungslogiken, während der ökologisch konzipierte [der Park, -s|Park] klimatische Resilienz und soziale Durchmischung stiftet.",
          ],
        ],
      },
    },
  },
  {
    id: "einkaufen",
    title: "Einkaufen",
    description: "Einzelhandel, Supermärkte, Wochenmärkte, Bezahlvorgänge und Konsumgewohnheiten.",
    details:
      "In Deutschland sind Ladenöffnungszeiten gesetzlich geregelt ('das Ladenschlussgesetz'): Sonntags sind die meisten Geschäfte geschlossen (außer an Bahnhöfen und Flughäfen). Beim Einkaufen unterscheidet man: 'bar bezahlen' (mit Bargeld / Scheinen und Münzen) und 'mit Karte bezahlen' (Girocard / EC-Karte oder Kreditkarte). Häufige Fragen an der Kasse: 'Brauchen Sie den Kassenbon / die Quittung?', 'Sammeln Sie Treuepunkte?' und 'Haben Sie eine Tasche dabei?'.",
    arabicDescription:
      "التسوق والمتاجر وعمليات الدفع في ألمانيا. يغطي هذا الدرس السوبرماركت والمخابز والأسواق، ومفردات الأسعار (غالي، رخيص، مناسب)، وطرق الدفع (نقداً أو بالبطاقة المصرفية)، وقوانين إغلاق المتاجر يوم الأحد في ألمانيا وعادات حمل حقائب التسوق الصديقة للبيئة.",
    words: [
      {
        german: "das Geschäft, -e",
        arabic: "المحل / المتجر",
        english: "shop, store",
        example: "In der Fußgängerzone reiht sich ein elegantes Geschäft an das andere.",
      },
      {
        german: "der Supermarkt, -̈e",
        arabic: "السوبرماركت / المتجر الكبير",
        english: "supermarket",
        example:
          "Im großen Supermarkt am Stadtrand kaufen wir alle Lebensmittel für die Woche ein.",
      },
      {
        german: "die Bäckerei, -en",
        arabic: "المخبز",
        english: "bakery",
        example: "Morgens um sieben Uhr duftet es in der Bäckerei nach ofenfrischen Brötchen.",
      },
      {
        german: "der Markt, -̈e",
        arabic: "السوق",
        english: "market",
        example: "Auf dem Wochenmarkt bieten regionale Landwirte frisches Obst und Gemüse an.",
      },
      {
        german: "das Geld",
        arabic: "النقود / المال",
        english: "money",
        example: "Ich habe nicht genug Geld im Portemonnaie, deshalb zahle ich bargeldlos.",
      },
      {
        german: "teuer",
        arabic: "غالٍ / مرتفع السعر",
        english: "expensive",
        example: "Markenkleidung in der Innenstadt ist oft sehr teuer, aber qualitativ hochwertig.",
      },
      {
        german: "billig / günstig",
        arabic: "رخيص / اقتصادي / مناسب السعر",
        english: "cheap / reasonably priced, affordable",
        example: "Dieses Angebot im Prospekt ist wirklich unschlagbar günstig.",
      },
      {
        german: "die Kasse, -n",
        arabic: "صندوق الدفع / الكاشير",
        english: "cash register, checkout",
        example: "An der Kasse bildet sich zu Stoßzeiten eine lange Schlange ungeduldiger Kunden.",
      },
      {
        german: "der Einkaufswagen, -",
        arabic: "عربة التسوق",
        english: "shopping cart, trolley",
        example: "Ich schiebe den vollen Einkaufswagen zum Kofferraum meines Autos.",
      },
      {
        german: "die Quittung, -en",
        arabic: "الإيصال / الفاتورة",
        english: "receipt",
        example:
          "Bitte bewahren Sie die Quittung sorgfältig auf, falls Sie die Ware umtauschen möchten.",
      },
      {
        german: "die Tasche, -n",
        arabic: "الحقيبة / الكيس القماشي",
        english: "bag",
        example: "Um Plastikmüll zu vermeiden, bringe ich immer eine eigene Stofftasche mit.",
      },
      {
        german: "bezahlen",
        arabic: "يدفع الحساب",
        english: "to pay",
        example: "Sie können an diesem Terminal kontaktlos mit Ihrer Bankkarte bezahlen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Einkaufen für das Wochenende",
        intro: "Einfache Sätze über den Lebensmitteleinkauf und das Bezahlen (A1).",
        paragraphs: [
          [
            "Heute ist Samstag und ich gehe für die ganze Familie einkaufen.",
            "Zuerst gehe ich in die [die Bäckerei, -en|Bäckerei] und kaufe frisches Brot.",
            "Danach fahre ich zum großen [der Supermarkt, -̈e|Supermarkt] und nehme einen [der Einkaufswagen, -|Einkaufswagen].",
            "Auf dem bunten [der Markt, -̈e|Markt] kaufe ich noch süße Äpfel und Tomaten.",
          ],
          [
            "Manche Bio-Produkte sind etwas [teuer|teuer], aber andere Lebensmittel sind sehr [billig / günstig|günstig].",
            "An der [die Kasse, -n|Kasse] lege ich alle Waren auf das Band.",
            "Ich möchte mit Karte [bezahlen|bezahlen], aber ich habe auch etwas [das Geld|Geld] dabei.",
            "Die Kassiererin gibt mir die [die Quittung, -en|Quittung], und ich packe alles in meine [die Tasche, -n|Tasche].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein gelungener Einkaufsbummel in der Stadt",
        intro: "Praktische Tipps beim Einkaufen und bewusster Umgang mit Geld (A2).",
        paragraphs: [
          [
            "Wer in Deutschland einkaufen geht, sollte bedenken, dass die meisten Geschäfte am Sonntag geschlossen haben.",
            "Deshalb erledige ich meine Einkäufe gern am Freitagnachmittag, wenn der [der Supermarkt, -̈e|Supermarkt] noch nicht überfüllt ist.",
            "Ich schnappe mir einen [der Einkaufswagen, -|Einkaufswagen] und arbeite meinen Einkaufszettel Punkt für Punkt ab.",
            "Für spezielle Delikatessen besuche ich anschließend ein kleines, feines [das Geschäft, -e|Geschäft] in der Fußgängerzone.",
          ],
          [
            "„Kann ich hier auch kontaktlos mit dem Smartphone [bezahlen|bezahlen]?“, frage ich den Verkäufer freundlich.",
            "„Selbstverständlich! Wir akzeptieren sowohl Karte als auch Bargeld“, antwortet er mir mit einem Nicken.",
            "Ich kontrolliere kurz die gedruckte [die Quittung, -en|Quittung], damit keine Fehler bei den Preisen vorliegen.",
            "Zufrieden verstaue ich alle Einkäufe in einer robusten [die Tasche, -n|Tasche], froh darüber, dass einige Produkte heute besonders [billig / günstig|günstig] waren.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Konsumgewohnheiten im Wandel: Zwischen Discounter und Fachgeschäft",
        intro: "Wie sich Einkaufsverhalten, Preisbewusstsein und Nachhaltigkeit entwickeln (B1).",
        paragraphs: [
          [
            "Das Konsumverhalten der mitteleuropäischen Bevölkerung spiegelt ein faszinierendes Spannungsfeld zwischen Sparsamkeit und Qualitätsanspruch wider.",
            "Einerseits erfreuen sich große [der Supermarkt, -̈e|Supermärkte] und Discounter enormer Beliebtheit, weil sie Produkte des täglichen Bedarfs erstaunlich [billig / günstig|günstig] anbieten.",
            "Andererseits schätzen Kunden für besondere Anlässe das inhabergeführte [das Geschäft, -e|Geschäft] oder die traditionelle [die Bäckerei, -en|Bäckerei], wo Handwerkskunst zelebriert wird.",
            "Auf dem lokalen [der Markt, -̈e|Markt] wiederum steht der direkte Kontakt zu regionalen Erzeugern im Vordergrund, selbst wenn die Ware dort etwas [teuer|teurer] ausfällt.",
          ],
          [
            "An der modernen [die Kasse, -n|Kasse] haben Self-Scanning-Systeme und digitale Wallets den klassischen Bezahlvorgang mit [das Geld|Geld] revolutioniert.",
            "Immer mehr Verbraucher verzichten bewusst auf Plastiktüten und bringen stattdessen ihre eigene waschbare [die Tasche, -n|Tasche] zum Großeinkauf mit.",
            "Die digitale [die Quittung, -en|Quittung] per App reduziert den Papierverbrauch und ermöglicht eine transparente Buchführung über das Monatsbudget.",
            "So verbindet modernes Einkaufen wirtschaftliche Vernunft mit ökologischem Weitblick.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Konsumökonomie, Plattformkapitalismus und der stationäre Einzelhandel",
        intro:
          "Kritische Analyse von Konsumkultur, Verdrängungswettbewerb und nachhaltigem Konsum (B2).",
        paragraphs: [
          [
            "Der stationäre Einzelhandel erfährt durch den rasanten Vormarsch des E-Commerce einen tiefgreifenden Strukturwandel, der das traditionelle [das Geschäft, -e|Geschäft] existenziell bedroht.",
            "Innenstädte laufen Gefahr, zu monofunktionalen Konsumzonen zu veröden, wenn inhabergeführte Manufakturen wie die handwerkliche [die Bäckerei, -en|Bäckerei] durch austauschbare Filialisten verdrängt werden.",
            "Während die Discounter-Logik Produkte permanent [billig / günstig|günstig] kalkuliert, werden die ökologischen und sozialen Folgekosten der Massenproduktion systematisch externalisiert.",
            "Demgegenüber reüssiert der partizipative [der Markt, -̈e|Markt] als Gegenentwurf, der transparente Herkunft über den reinen Preiskampf um [das Geld|Geld] stellt.",
          ],
          [
            "Die Digitalisierung des Bezahlens an der automatisierten [die Kasse, -n|Kasse] mittels RFID und Algorithmen optimiert den Durchsatz, entindividualisiert jedoch den Dienstleistungsakt.",
            "Wer heute bewusst [bezahlen|bezahlt], wägt zunehmend zwischen Bequemlichkeit und ethischer Verantwortung ab, da selbst scheinbar banale Handlungen wie der Griff zum [der Einkaufswagen, -|Einkaufswagen] politische Dimensionen berühren.",
            "Die Wertschätzung für langlebige Güter, die zwar [teuer|teurer] in der Anschaffung sind, symbolisiert eine Abkehr von der Wegwerfgesellschaft hin zu suffizienten Konsummustern.",
          ],
        ],
      },
    },
  },
];

// -------------------------------------------------------------
// CHAPTER 6: BILDUNG UND BERUF
// -------------------------------------------------------------
export const chapter6TopicsEnrichment = [
  {
    id: "in_der_schule",
    title: "In der Schule",
    description: "Schulsystem, Unterrichtsalltag, Schulfächer, Noten und Prüfungen.",
    details:
      "Das deutsche Schulsystem gliedert sich nach der vierjährigen Grundschule in weiterführende Schulformen (Hauptschule, Realschule, Gymnasium oder Gesamtschule). Das 'Abitur' berechtigt zum Studium an einer Universität. Das Notensystem reicht in der Regel von 1 (sehr gut) bis 6 (ungenügend). Typische Ausdrücke: 'den Unterricht besuchen', 'die Hausaufgaben machen', 'eine Prüfung bestehen / durchfallen' und 'in die Pause gehen'.",
    arabicDescription:
      "النظام المدرسي والحياة الدراسية في ألمانيا. يتناول هذا الدرس مراحل التعليم (المدرسة الابتدائية، والمدرسة الثانوية، والجمنازيوم المؤهل للجامعة)، ونظام العلامات والدرجات في ألمانيا (من 1 ممتاز إلى 6 راسب)، ومفردات الفصول والامتحانات والواجبات المدرسية.",
    words: [
      {
        german: "die Schule, -n",
        arabic: "المدرسة",
        english: "school",
        example: "In Deutschland beginnt die Schule für Kinder im Alter von sechs Jahren.",
      },
      {
        german: "der Lehrer, -",
        arabic: "المعلم / الأستاذ",
        english: "teacher (male)",
        example: "Der geduldige Lehrer erklärt die schwierige Grammatikregel noch einmal.",
      },
      {
        german: "der Schüler, -",
        arabic: "التلميذ / الطالب المدرسي",
        english: "pupil, student",
        example: "Die fleißigen Schüler bereiten sich gewissenhaft auf die morgige Prüfung vor.",
      },
      {
        german: "der Unterricht",
        arabic: "الدرس / الحصة الدراسية",
        english: "class, lesson, instruction",
        example: "Der Unterricht beginnt jeden Morgen pünktlich um acht Uhr.",
      },
      {
        german: "die Pause, -n",
        arabic: "الاستراحة / الفسحة",
        english: "break, recess",
        example: "In der großen Pause spielen die Kinder auf dem sonnigen Schulhof.",
      },
      {
        german: "das Klassenzimmer, -",
        arabic: "غرفة الصف / الفصل الدراسي",
        english: "classroom",
        example: "Im Klassenzimmer hängen bunte Landkarten und eine digitale Tafel.",
      },
      {
        german: "die Hausaufgabe, -n",
        arabic: "الواجب المدرسي / الفرض المنزلي",
        english: "homework",
        example:
          "Nach dem Mittagessen setze ich mich an den Schreibtisch und mache meine Hausaufgaben.",
      },
      {
        german: "die Prüfung, -en",
        arabic: "الامتحان / الاختبار",
        english: "exam, test",
        example: "Sie hat die schwierige Prüfung in Mathematik mit Bestnote bestanden.",
      },
      {
        german: "das Buch, -̈er",
        arabic: "الكتاب",
        english: "book",
        example:
          "Für den Deutschunterricht lesen wir ein spannendes Buch über deutsche Geschichte.",
      },
      {
        german: "das Heft, -e",
        arabic: "الدفتر / الكراس",
        english: "notebook, exercise book",
        example: "In dieses linierte Heft schreibe ich alle neuen Vokabeln und Beispielsätze.",
      },
      {
        german: "der Stift, -e",
        arabic: "القلم",
        english: "pen, pencil",
        example: "Mit einem blauen Stift notiere ich die wichtigsten Stichpunkte an den Rand.",
      },
      {
        german: "die Note, -n",
        arabic: "العلامة / الدرجة المدرسية",
        english: "grade, mark",
        example: "In Deutschland ist eine Eins die beste Note und eine Sechs die schlechteste.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Tag in der Schule",
        intro: "Einfache Sätze über die Schule, den Unterricht und Schulsachen (A1).",
        paragraphs: [
          [
            "Ich gehe jeden Tag gern in die [die Schule, -n|Schule].",
            "Um acht Uhr beginnt der deutsche [der Unterricht|Unterricht] im großen [das Klassenzimmer, -|Klassenzimmer].",
            "Unser [der Lehrer, -|Lehrer] Herr Weber ist sehr nett und erklärt alles ruhig.",
            "Jeder [der Schüler, -|Schüler] hört aufmerksam zu und lernt fleißig.",
          ],
          [
            "Ich öffne mein schweres [das Buch, -̈er|Buch] und schreibe mit dem [der Stift, -e|Stift] in mein [das Heft, -e|Heft].",
            "Um zehn Uhr haben wir eine halbe Stunde [die Pause, -n|Pause] auf dem Schulhof.",
            "Am Nachmittag mache ich zu Hause konzentriert meine [die Hausaufgabe, -n|Hausaufgaben].",
            "Für den Test letzte Woche habe ich eine sehr gute [die Note, -n|Note] bekommen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Vorbereitung auf die Klassenarbeit",
        intro: "Schulalltag, Motivation und Lernen für eine Prüfung (A2).",
        paragraphs: [
          [
            "Nächsten Dienstag schreiben wir eine wichtige [die Prüfung, -en|Prüfung] im Fach Biologie.",
            "Deshalb treffen sich einige [der Schüler, -|Schüler] nachmittags, um den Stoff gemeinsam zu wiederholen.",
            "Unser [der Lehrer, -|Lehrer] hat uns im [der Unterricht|Unterricht] wertvolle Tipps zur Vorbereitung gegeben.",
            "Im hellen [das Klassenzimmer, -|Klassenzimmer] haben wir die Tafelbilder sorgfältig in unser [das Heft, -e|Heft] übertragen.",
          ],
          [
            "„Hast du schon alle [die Hausaufgabe, -n|Hausaufgaben] für morgen fertig?“, fragt mich mein bester Schulfreund.",
            "„Ja, ich habe das ganze Kapitel im [das Buch, -̈er|Buch] durchgearbeitet und die Vokabeln mit einem [der Stift, -e|Stift] markiert“, antworte ich stolz.",
            "Wenn wir in der [die Pause, -n|Pause] über unsere Ziele sprechen, wollen alle eine hervorragende [die Note, -n|Note] erzielen.",
            "Gute schulische Leistungen eröffnen schließlich tolle Perspektiven für die berufliche Zukunft.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Bildungswege und methodische Kompetenzen im Unterricht",
        intro: "Moderne Pädagogik, Schulentwicklung und selbstbestimmtes Lernen (B1).",
        paragraphs: [
          [
            "Die Anforderungen an zeitgemäße Bildungseinrichtungen haben sich grundlegend gewandelt.",
            "Eine zukunftsorientierte [die Schule, -n|Schule] vermittelt nicht mehr bloß starres Faktenwissen, sondern fördert kritisches Denken und Teamfähigkeit.",
            "Im interaktiven [der Unterricht|Unterricht] agiert der [der Lehrer, -|Lehrer] zunehmend als Lernbegleiter, der individuelle Stärken der [der Schüler, -|Schüler] gezielt unterstützt.",
            "Das traditionelle [das Klassenzimmer, -|Klassenzimmer] öffnet sich für digitale Medien, ohne dass analoge Kulturtechniken wie das Lesen im [das Buch, -̈er|Buch] an Wert verlieren.",
          ],
          [
            "Das eigenständige Erarbeiten von Themen spiegelt sich in sorgfältig geführten Unterlagen im [das Heft, -e|Heft] wider, wo Kerninhalte mit dem [der Stift, -e|Stift] strukturiert werden.",
            "Sinnvoll dosierte [die Hausaufgabe, -n|Hausaufgaben] festigen das Erlernte nachhaltig, ohne die wohlverdiente [die Pause, -n|Pause] zur Regeneration zu beschneiden.",
            "Vor einer anspruchsvollen [die Prüfung, -en|Prüfung] steht heute das Verstehen von Zusammenhängen im Vordergrund, sodass die finale [die Note, -n|Note] die reale Methodenkompetenz widerspiegelt.",
            "Damit wird schulisches Lernen zu einem tragfähigen Fundament für lebenslange persönliche Weiterentwicklung.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Bildungssoziologie, Leistungsgesellschaft und Bildungsgerechtigkeit",
        intro: "Kritische Analyse von Selektionsmechanismen und Didaktik im Schulsystem (B2).",
        paragraphs: [
          [
            "Das Bildungssystem fungiert in modernen Wissensgesellschaften als primärer Allokations- und Selektionsmechanismus für gesellschaftlichen Status.",
            "Bereits die frühzeitige Verteilung der [der Schüler, -|Schüler] auf segregierte Schultypen nach der Primarstufe steht im Zentrum bildungssoziologischer Debatten über Chancengerechtigkeit.",
            "Während die Institution [die Schule, -n|Schule] das Versprechen meritokratischen Aufstiegs postuliert, korreliert der Schulerfolg nach wie vor signifikant mit dem sozioökonomischen Hintergrund des Elternhauses.",
            "Ein emanzipatorischer [der Unterricht|Unterricht] erfordert daher von jedem [der Lehrer, -|Lehrer] ein hohes Maß an diagnostischer Kompetenz und binnendifferenzierender Didaktik.",
          ],
          [
            "Die quantitative Bewertung schulischer Leistungen durch die klassische [die Note, -n|Note] reduziert komplexe Lernprozesse auf normierte Ziffern.",
            "Obschon eine standardisierte [die Prüfung, -en|Prüfung] Vergleichbarkeit suggeriert, plädieren Reformpädagogen für qualitative Portfolios und formative Rückmeldeformate.",
            "Die Transformation des physischen [das Klassenzimmer, -|Klassenzimmers] in flexible Lernlandschaften soll die Autonomie der Lernenden stärken und intrinsische Motivation freisetzen.",
            "Erst wenn Bildung als ganzheitliche Persönlichkeitsentfaltung jenseits bloßer Arbeitsmarkttauglichkeit begriffen wird, löst das Schulwesen seinen humanistischen Anspruch ein.",
          ],
        ],
      },
    },
  },
  {
    id: "buero_und_arbeit",
    title: "Büro und Arbeit",
    description: "Arbeitswelt, Büroalltag, Berufstätigkeit, Verträge und Karriere.",
    details:
      "In Deutschland sind Arbeitsverträge ('der Arbeitsvertrag'), geregelte Arbeitszeiten und der wohlverdiente Feierabend ('der Feierabend') von herausragender Bedeutung. Man trennt Berufsleben und Privatleben klar ('Work-Life-Balance'). Typische Büro-Begriffe: 'im Homeoffice arbeiten', 'an einer Besprechung / einem Meeting teilnehmen', 'eine E-Mail weiterleiten' und 'Kollegen um Unterstützung bitten'. Die Anrede im Berufsalltag variiert zwischen formellem 'Sie' und modernem Arbeits-'Du'.",
    arabicDescription:
      "بيئة العمل والمكتب والمهن في ألمانيا. يتناول هذا الدرس مصطلحات الوظيفة وعقد العمل (Arbeitsvertrag)، والراتب، والزملاء، والإدارة، والاجتماعات، والمراسلات الرسمية عبر البريد الإلكتروني، وثقافة فصل الحياة المهنية عن الحياة الشخصية (Feierabend).",
    words: [
      {
        german: "die Arbeit, -en",
        arabic: "العمل / الشغل",
        english: "work, job",
        example: "Nach einem langen Tag im Büro gehe ich zufrieden nach Hause.",
      },
      {
        german: "der Beruf, -e",
        arabic: "المهنة / المهنة التخصصية",
        english: "profession, occupation",
        example: "Mein Beruf als Software-Entwickler macht mir unheimlich viel Spaß.",
      },
      {
        german: "das Büro, -s",
        arabic: "المكتب (مكان العمل)",
        english: "office",
        example:
          "Unser modernes Großraumbüro ist mit höhenverstellbaren Schreibtischen ausgestattet.",
      },
      {
        german: "der Kollege, -n",
        arabic: "الزميل في العمل",
        english: "colleague, coworker (male)",
        example: "Mit meinen hilfsbereiten Kollegen arbeite ich täglich vertrauensvoll zusammen.",
      },
      {
        german: "der Chef, -s",
        arabic: "المدير / المسؤول",
        english: "boss, supervisor",
        example: "Unser Chef legt großen Wert auf pünktliche Lieferung und offene Kommunikation.",
      },
      {
        german: "das Meeting, -s",
        arabic: "الاجتماع / جلسة العمل",
        english: "meeting",
        example: "Um zehn Uhr treffen wir uns im Konferenzraum zu einem wichtigen Meeting.",
      },
      {
        german: "die E-Mail, -s",
        arabic: "البريد الإلكتروني / الإيميل",
        english: "email",
        example: "Ich habe dem Kunden soeben eine ausführliche E-Mail mit dem Angebot geschickt.",
      },
      {
        german: "der Schreibtisch, -e",
        arabic: "طاولة المكتب / المكتب",
        english: "desk",
        example: "Auf meinem aufgeräumten Schreibtisch stehen zwei Monitore und ein Notizblock.",
      },
      {
        german: "der Feierabend",
        arabic: "وقت انتهاء الدوام والراحة المسائية",
        english: "quitting time, end of work day",
        example: "Um siebzehn Uhr machen wir den Laptop zu und genießen den Feierabend.",
      },
      {
        german: "der Vertrag, -̈e",
        arabic: "العقد / اتفاقية العمل",
        english: "contract",
        example: "Vor Antritt der neuen Arbeitsstelle unterschreibt man den schriftlichen Vertrag.",
      },
      {
        german: "das Gehalt, -̈er",
        arabic: "الراتب / المعاش الشهري",
        english: "salary, monthly earnings",
        example: "Das Gehalt wird am Monatsende pünktlich auf das Girokonto überwiesen.",
      },
      {
        german: "das Projekt, -e",
        arabic: "المشروع",
        english: "project",
        example:
          "Wir haben das internationale Projekt dank hervorragender Teamarbeit erfolgreich abgeschlossen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Arbeitstag im Büro",
        intro: "Einfache Sätze über die tägliche Arbeit und die Kollegen im Büro (A1).",
        paragraphs: [
          [
            "Ich habe einen interessanten [der Beruf, -e|Beruf] in einem großen Unternehmen.",
            "Jeden Morgen fahre ich zur [die Arbeit, -en|Arbeit] in unser modernes [das Büro, -s|Büro].",
            "An meinem großen [der Schreibtisch, -e|Schreibtisch] starte ich den Computer und lese die erste [die E-Mail, -s|E-Mail].",
            "Mein [der Kollege, -n|Kollege] Thomas trinkt mit mir einen Kaffee und wir sprechen über das neue [das Projekt, -e|Projekt].",
          ],
          [
            "Um elf Uhr haben wir ein kurzes [das Meeting, -s|Meeting] mit unserem Team.",
            "Unser [der Chef, -s|Chef] ist sehr freundlich und lobt unsere guten Ergebnisse.",
            "Vor einem Jahr habe ich meinen unbefristeten [der Vertrag, -̈e|Vertrag] unterschrieben und bekomme ein gutes [das Gehalt, -̈er|Gehalt].",
            "Um siebzehn Uhr mache ich Schluss und freue mich auf den wohlverdienten [der Feierabend|Feierabend].",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Erfolgreiche Teamarbeit und klare Absprachen",
        intro: "Zusammenarbeit im Büroalltag, Aufgabenverteilung und Feierabendkultur (A2).",
        paragraphs: [
          [
            "Im Berufsalltag sind eine gute Organisation und freundliche Kommunikation der Schlüssel zum Erfolg.",
            "Sobald ich morgens mein [das Büro, -s|Büro] betrete, begrüße ich jeden [der Kollege, -n|Kollegen] herzlich.",
            "Ich setze mich an meinen ergonomischen [der Schreibtisch, -e|Schreibtisch] und beantworte dringende Kundenanfragen per [die E-Mail, -s|E-Mail].",
            "Im wöchentlichen [das Meeting, -s|Meeting] besprechen wir den Zeitplan für das laufende [das Projekt, -e|Projekt].",
          ],
          [
            "„Herr Müller, haben Sie die Unterlagen für den neuen [der Vertrag, -̈e|Vertrag] schon fertig vorbereitet?“, fragt mich der [der Chef, -s|Chef].",
            "„Ja, die Dokumente liegen druckfrisch in Ihrer Mappe“, antworte ich selbstbewusst.",
            "Wenn alle Aufgaben erledigt sind und die [die Arbeit, -en|Arbeit] reibungslos läuft, gehen wir zufrieden nach Hause.",
            "In Deutschland ist die Trennung von Beruf und Freizeit heilig: Nach dem [der Feierabend|Feierabend] schalten wir das Diensthandy bewusst aus.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "New Work, Unternehmenskultur und Arbeitszufriedenheit",
        intro: "Wie hybride Arbeitsmodelle und Wertschätzung das moderne Berufsleben prägen (B1).",
        paragraphs: [
          [
            "Die moderne Arbeitswelt durchlebt unter dem Schlagwort 'New Work' eine tiefgreifende Transformation hin zu mehr Flexibilität und Eigenverantwortung.",
            "Starre Anwesenheitspflichten weichen hybriden Modellen, bei denen der Mitarbeiter eigenständig entscheidet, ob er im [das Büro, -s|Büro] oder im Homeoffice tätig ist.",
            "Dennoch bleibt die persönliche Begegnung am höhenverstellbaren [der Schreibtisch, -e|Schreibtisch] unverzichtbar, um den Teamgeist unter jedem [der Kollege, -n|Kollegen] zu stärken.",
            "Effiziente Absprachen im interdisziplinären [das Meeting, -s|Meeting] ersetzen endlose Kommunikationsschleifen per [die E-Mail, -s|E-Mail].",
          ],
          [
            "Moderne Führungskräfte verstehen sich nicht mehr als autoritärer [der Chef, -s|Chef], sondern als empathische Coaches, die Potenziale entfalten.",
            "Ein motivierendes Arbeitsumfeld verlangt neben einem transparenten [der Vertrag, -̈e|Vertrag] auch ein faires, leistungsgerechtes [das Gehalt, -̈er|Gehalt].",
            "Wer in seinem gewählten [der Beruf, -e|Beruf] sinnstiftende Aufgaben in einem innovativen [das Projekt, -e|Projekt] übernimmt, leistet engagierte [die Arbeit, -en|Arbeit].",
            "Echtes Wohlbefinden entsteht jedoch erst dann, wenn nach getaner Pflicht der [der Feierabend|Feierabend] unbeschwert der Erholung und Familie gewidmet werden kann.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Arbeitssoziologie im Zeitalter der Wissensökonomie",
        intro: "Kritische Analyse von Agilität, Entgrenzung und Arbeitsidentität (B2).",
        paragraphs: [
          [
            "Die fortschreitende Digitalisierung und Tertiarisierung der Wertschöpfung haben das traditionelle Paradigma fordistischer Erwerbsarbeit nachhaltig dekonstruiert.",
            "In der postindustriellen Wissensökonomie wird der physische Ort [das Büro, -s|Büro] zu einem kollaborativen Resonanzraum umfunktioniert, während der individualisierte [der Schreibtisch, -e|Schreibtisch] an exklusiver Bedeutung verliert.",
            "Agile Arbeitsmethoden und flache Hierarchien transformieren das Verhältnis zwischen dem vormals allmächtigen [der Chef, -s|Chef] und seinen Mitarbeitern in ein partnerschaftliches Vertrauensverhältnis.",
            "Dennoch birgt die permanente Erreichbarkeit über asynchrone Kommunikationskanäle wie [die E-Mail, -s|E-Mail] das Risiko einer schleichenden Entgrenzung zwischen Privatsphäre und Erwerbstätigkeit.",
          ],
          [
            "Der traditionelle, unbefristete [der Vertrag, -̈e|Vertrag] mit fixiertem [das Gehalt, -̈er|Gehalt] gerät im Zuge von Gig-Economy und befristeten Beschäftigungsverhältnissen zusehends unter Druck.",
            "Gleichzeitig streben Hochqualifizierte in ihrem [der Beruf, -e|Beruf] nach intrinsischer Selbstverwirklichung durch ein sinnstiftendes [das Projekt, -e|Projekt], in dem professionelle Kooperation mit jedem [der Kollege, -n|Kollegen] Synergien freisetzt.",
            "Die gesellschaftliche Debatte um die Vier-Tage-Woche unterstreicht schließlich, dass der sakrosankte [der Feierabend|Feierabend] eine unabdingbare Voraussetzung für nachhaltige geistige Produktivität und menschliche Würde darstellt.",
          ],
        ],
      },
    },
  },
];

// -------------------------------------------------------------
// SCRIPT RUNNER TO APPLY TO JSON FILES
// -------------------------------------------------------------
async function apply() {
  const ch4Path = path.resolve("src/data/vocabulary/4-unterwegs.json");
  const ch5Path = path.resolve("src/data/vocabulary/5-in-der-stadt.json");
  const ch6Path = path.resolve("src/data/vocabulary/6-bildung-und-beruf.json");
  const storiesPath = path.resolve("src/features/vocabulary/data/topic-stories.json");

  const ch4Data = JSON.parse(fs.readFileSync(ch4Path, "utf8"));
  const ch5Data = JSON.parse(fs.readFileSync(ch5Path, "utf8"));
  const ch6Data = JSON.parse(fs.readFileSync(ch6Path, "utf8"));
  const storiesData = JSON.parse(fs.readFileSync(storiesPath, "utf8"));

  function updateChapter(chData: any, enrichments: any[], fileName: string) {
    for (const topicEnrichment of enrichments) {
      for (const sec of chData.sections) {
        const topic = sec.topics.find((t: any) => t.id === topicEnrichment.id);
        if (topic) {
          topic.title = topicEnrichment.title;
          topic.description = topicEnrichment.description;
          topic.details = topicEnrichment.details;
          topic.arabicDescription = topicEnrichment.arabicDescription;
          topic.words = topicEnrichment.words;
          topic.story = topicEnrichment.stories.A1;
          topic.stories = topicEnrichment.stories;
          console.log(`Updated ${fileName} topic: ${topicEnrichment.id}`);
        }
      }
      storiesData[topicEnrichment.id] = topicEnrichment.stories;
      console.log(`Updated topic-stories.json topic: ${topicEnrichment.id}`);
    }
  }

  updateChapter(ch4Data, chapter4TopicsEnrichment, "4-unterwegs.json");
  updateChapter(ch5Data, chapter5TopicsEnrichment, "5-in-der-stadt.json");
  updateChapter(ch6Data, chapter6TopicsEnrichment, "6-bildung-und-beruf.json");

  fs.writeFileSync(ch4Path, JSON.stringify(ch4Data, null, 2), "utf8");
  fs.writeFileSync(ch5Path, JSON.stringify(ch5Data, null, 2), "utf8");
  fs.writeFileSync(ch6Path, JSON.stringify(ch6Data, null, 2), "utf8");
  fs.writeFileSync(storiesPath, JSON.stringify(storiesData, null, 2), "utf8");

  console.log("Chapters 4, 5, 6 files written successfully!");
}

apply();
