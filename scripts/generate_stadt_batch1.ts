import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  auf_der_strasse: {
    description:
      "Straße, Bürgersteig, Kreuzung, Ampel, Zebrastreifen, Fußgänger, Laterne und Baustelle.",
    details: "Straßenverkehrsregeln, Fußgängerzonen, Straßenüberquerung und Stadtmobiliar (A1–B2)",
    arabicDescription:
      "في الشارع (Auf der Straße): مفردات الشارع (Straße)، رصيف المشاة (Bürgersteig)، تقاطع الطرق (Kreuzung)، إشارة المرور (Ampel)، ممر المشاة (Zebrastreifen)، وعمود الإنارة وسلة المهملات، مع قواعد السلامة والعبور الآمن.",
    words: [
      {
        german: "die Straße, -n",
        arabic: "الشارع / الطريق الإسفلتي",
        english: "street, road",
        example: "Die breite Straße führt direkt zum Marktplatz und ist von alten Bäumen gesäumt.",
      },
      {
        german: "der Bürgersteig, -e",
        arabic: "رصيف المشاة بجانب الطريق",
        english: "sidewalk, pavement",
        example:
          "Auf dem gepflasterten Bürgersteig gehen die Fußgänger geschützt vor dem Autoverkehr.",
      },
      {
        german: "die Kreuzung, -en",
        arabic: "تقاطع الطرق المتلاقية",
        english: "intersection, crossroads",
        example: "An der großen Kreuzung treffen vier verkehrsreiche Straßen aufeinander.",
      },
      {
        german: "die Ampel, -n",
        arabic: "إشارة المرور الضوئية",
        english: "traffic light",
        example: "Wenn die Fußgängerampel auf Rot schaltet, muss man geduldig am Bordstein warten.",
      },
      {
        german: "der Zebrastreifen, -",
        arabic: "ممر المشاة المخطط (خطوط الحمار الوحشي)",
        english: "zebra crossing, pedestrian crossing",
        example:
          "Am Zebrastreifen müssen Autos anhalten, sobald ein Fußgänger die Fahrbahn queren möchte.",
      },
      {
        german: "der Fußgänger, -",
        arabic: "عابر السبيل والماشي على قدميه",
        english: "pedestrian",
        example: "In der Fußgängerzone haben Fußgänger absoluten Vorrang vor allen Fahrzeugen.",
      },
      {
        german: "die Straßenlaterne, -n",
        arabic: "عمود إنارة الشارع ليلاً",
        english: "street lamp, streetlight",
        example: "Sobald es dämmert, schalten sich die hellen Straßenlaternen automatisch ein.",
      },
      {
        german: "der Mülleimer, -",
        arabic: "سلة المهملات العامة في الشارع",
        english: "trash can, public litter bin",
        example: "Er wirft die leere Papiertüte in den orangenen Mülleimer an der Bushaltestelle.",
      },
      {
        german: "die Baustelle, -n",
        arabic: "ورشة وموقع أعمال الطريق والبناء",
        english: "construction site, roadworks",
        example: "Wegen einer Baustelle ist die rechte Fahrspur für mehrere Wochen gesperrt.",
      },
      {
        german: "der Parkscheinautomat, -en",
        arabic: "آلة بيع تذاكر وقوف السيارات",
        english: "parking ticket machine",
        example:
          "Vor dem Parken wirft man Münzen in den Parkscheinautomaten und legt das Ticket ins Auto.",
      },
      {
        german: "überqueren (überquerte, hat überquert)",
        arabic: "يعبر الشارع من جهة إلى أخرى",
        english: "to cross (street)",
        example:
          "Kinder lernen in der Verkehrserziehung, wie man eine Straße sicher überqueren kann.",
      },
      {
        german: "belebt",
        arabic: "نابض بالحياة ومليء بالحركة والمشاة",
        english: "busy, lively",
        example:
          "Am Samstagnachmittag ist die Einkaufsstraße besonders belebt und voller Menschen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Zu Fuß durch die Stadt",
        intro: "Einfache Sätze über Straße, Ampel, Zebrastreifen und sicheres Gehen (A1).",
        paragraphs: [
          [
            "Ich gehe heute zu Fuß in die Stadt.",
            "Ich laufe sicher auf dem breiten [der Bürgersteig, -e|Bürgersteig].",
            "Vor mir ist eine große [die Kreuzung, -en|Kreuzung] mit vielen Autos.",
            "An der Ecke steht [die Ampel, -n|die Ampel] und zeigt ein rotes Licht.",
          ],
          [
            "Ich warte kurz, bis das Licht grün wird.",
            "An einem [der Zebrastreifen, -|Zebrastreifen] darf ich die [die Straße, -n|Straße] sicher [überqueren (überquerte, hat überquert)|überqueren].",
            "Jeder [der Fußgänger, -|Fußgänger] passt gut auf den Verkehr auf.",
            "So komme ich sicher und fröhlich am Ziel an.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Spaziergang am Abend",
        intro: "Orientierung bei Dunkelheit, Straßenlaternen und Baustellen in der Stadt (A2).",
        paragraphs: [
          [
            "Wenn die Sonne untergeht, wird die Innenstadt wunderschön beleuchtet.",
            "Jede einzelne [die Straßenlaterne, -n|Straßenlaterne] spendet warmes Licht für die Passanten auf dem Gehweg.",
            "Die Fußgängerzone ist am Freitagabend sehr [belebt|belebt], weil viele Menschen bummeln gehen.",
            "Ich werfe meinen Kaugummistreifen ordentlich in den nächsten [der Mülleimer, -|Mülleimer].",
          ],
          [
            "An der Hauptstraße müssen Autofahrer einen Parkschein am [der Parkscheinautomat, -en|Parkscheinautomaten] ziehen.",
            "Wegen einer großen [die Baustelle, -n|Baustelle] müssen Fußgänger auf die andere Straßenseite wechseln.",
            "Gelbe Warnschilder leiten den Verkehr sicher um das Hindernis herum.",
            "In der Stadt gibt es an jeder Ecke etwas Neues zu entdecken.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Verkehrserziehung und Fußgängerfreundlichkeit im Städtebau",
        intro: "Deutsche Verkehrserziehung, Fußgängerzonen und Stadtmöblierung (B1).",
        paragraphs: [
          [
            "Die Gestaltung des öffentlichen Straßenraums reflektiert das gesellschaftliche Ringen um Sicherheit und Lebensqualität.",
            "In Deutschland durchlaufen bereits Grundschulkinder die obligatorische schulische Verkehrserziehung: Sie lernen, wie man den [der Zebrastreifen, -|Zebrastreifen] nutzt und worauf beim Blick nach links, rechts und wieder links zu achten ist, bevor sie eine Straße [überqueren (überquerte, hat überquert)|überqueren].",
          ],
          [
            "Historisch wandelte sich das Bild der Innenstädte ab den 1970er-Jahren radikal: Vom Konzept der 'autogerechten Stadt' wandte man sich ab und schuf weitläufige Fußgängerzonen.",
            "Dort prägen modernes Stadtmobiliar, schattenspendende Alleen und eine lückenlose Beleuchtung durch energieeffiziente [die Straßenlaterne, -n|Straßenlaternen] das urbane Ambiente.",
          ],
          [
            "Gleichzeitig erfordern temporäre Baumaßnahmen strikte Auflagen: Eine [die Baustelle, -n|Baustelle] muss für mobilitätseingeschränkte Personen mit taktilen Leitstreifen abgesichert sein.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Verkehrsraumaufteilung, Shared Space und multimodale Knotenpunkte",
        intro:
          "Urbane Mikromobilität, Shared-Space-Philosophie und Lichtsignalanlagen-Steuerung (B2).",
        paragraphs: [
          [
            "Im zeitgenössischen Städtebau durchläuft die klassische Trennung zwischen Fahrbahn und [der Bürgersteig, -e|Bürgersteig] einen Paradigmenwechsel zugunsten integrierter 'Shared Space'-Konzepte.",
            "Indem bauliche Barrieren, Schilderwälder und traditionelle Lichtsignalanlagen zurückgebaut werden, zwingt der egalitäre Straßenraum alle Verkehrsteilnehmer zu Blickkontakt und adaptiver Geschwindigkeitsreduktion.",
          ],
          [
            "An hochbelasteten Kreuzungen steuern adaptive Verkehrsrechner [die Ampel, -n|die Ampeln] mittels Induktionsschleifen und Wärmebildkameras in Echtzeit, um Fußgängerströme ohne lange Wartezeiten abzuwickeln.",
          ],
          [
            "Gleichzeitig wird der Parksuchverkehr durch dynamische Leitsysteme minimiert, die freie Stellplätze am [der Parkscheinautomat, -en|Parkscheinautomaten] per Sensorik an Navigations-Apps übermitteln.",
            "Diese Digitalisierung des Straßenraums optimiert urbane Verkehrsflüsse und rekonfiguriert die Straße als multifunktionalen Lebensraum.",
          ],
        ],
      },
    },
  },
  das_hotel: {
    description:
      "Rezeption, Einzelzimmer, Doppelzimmer, Schlüsselkarte, Einchecken, Auschecken und Buffet.",
    details:
      "Hotellerie, Buchungssysteme, Gästeservice, Sterneklassifizierung und Zimmerausstattung (A1–B2)",
    arabicDescription:
      "الفندق والإقامة (Das Hotel): مفردات الفندق (Hotel)، الاستقبال (Rezeption)، الغرفة الفردية والمزدوجة (Einzelzimmer/Doppelzimmer)، تسجيل الوصول والمغادرة (einchecken/auschecken)، بطاقة الغرفة (Schlüsselkarte)، وبوفيه الإفطار، مع تصنيف النجوم والخدمات الفندقية.",
    words: [
      {
        german: "das Hotel, -s",
        arabic: "الفندق",
        english: "hotel",
        example: "Das gemütliche Hotel liegt ruhig im Zentrum und hat moderne, saubere Zimmer.",
      },
      {
        german: "die Rezeption, -en",
        arabic: "مكتب الاستقبال بالفندق",
        english: "reception, front desk",
        example: "An der Rezeption meldet sich der Reisende mit seinem Ausweis an.",
      },
      {
        german: "das Hotelzimmer, -",
        arabic: "غرفة الفندق",
        english: "hotel room",
        example: "Das helle Hotelzimmer verfügt über ein eigenes Bad, einen Fernseher und WLAN.",
      },
      {
        german: "das Einzelzimmer, -",
        arabic: "غرفة لشخص واحد (مفردة)",
        english: "single room",
        example:
          "Geschäftsreisende buchen für eine Übernachtung meistens ein praktisches Einzelzimmer.",
      },
      {
        german: "das Doppelzimmer, -",
        arabic: "غرفة لشخصين (مزدوجة)",
        english: "double room",
        example: "Das Ehepaar reserviert ein komfortables Doppelzimmer mit großem Kingsize-Bett.",
      },
      {
        german: "die Schlüsselkarte, -n",
        arabic: "بطاقة المفتاح الإلكترونية الممغنطة",
        english: "keycard, electronic room key",
        example:
          "Mit der digitalen Schlüsselkarte öffnet man die Zimmertür und aktiviert den Strom.",
      },
      {
        german: "einchecken (checkte ein, hat eingecheckt)",
        arabic: "يسجل الوصول ويستلم الغرفة",
        english: "to check in",
        example: "Ab vierzehn Uhr können die Gäste an der Rezeption bequem einchecken.",
      },
      {
        german: "auschecken (checkte aus, hat ausgecheckt)",
        arabic: "يسجل المغادرة ويسلم المفتاح",
        english: "to check out",
        example: "Vor der Abreise muss man bis elf Uhr vormittags an der Kasse auschecken.",
      },
      {
        german: "das Frühstücksbuffet, -s",
        arabic: "بوفيه الإفطار المفتوح",
        english: "breakfast buffet",
        example:
          "Am reichhaltigen Frühstücksbuffet bedient man sich mit Brötchen, Obst und Kaffee.",
      },
      {
        german: "der Aufzug, -̈e",
        arabic: "المصعد الكهربائي",
        english: "elevator, lift",
        example: "Mit dem gläsernen Aufzug fahren wir bequem in den vierten Stock hinauf.",
      },
      {
        german: "die Übernachtung, -en",
        arabic: "المبيت / الإقامة لليلة واحدة",
        english: "overnight stay",
        example: "Der Preis für eine Übernachtung beinhaltet ein leckeres Frühstück.",
      },
      {
        german: "die Reservierung, -en",
        arabic: "الحجز الفندقي المسبق",
        english: "reservation, booking",
        example: "Ich zeige der Angestellten meine Reservierung auf dem Smartphone vor.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ankunft im Hotel",
        intro: "Einfache Sätze über Hotel, Rezeption, Schlüsselkarte und Zimmer (A1).",
        paragraphs: [
          [
            "Wir reisen nach Hamburg und übernachten in einem schönen [das Hotel, -s|Hotel].",
            "Wir betreten die große Halle und gehen direkt an [die Rezeption, -en|die Rezeption].",
            "Der Portier hilft uns freundlich, damit wir schnell [einchecken (checkte ein, hat eingecheckt)|einchecken].",
            "Er gibt mir [die Schlüsselkarte, -n|die Schlüsselkarte] für Zimmer Nummer dreihundert.",
          ],
          [
            "Mit den Koffern steigen wir in [der Aufzug, -̈e|den Aufzug] und fahren in den dritten Stock.",
            "Unser [das Hotelzimmer, -|Hotelzimmer] ist groß, hell und hat bequeme Betten.",
            "Am nächsten Morgen wartet unten ein großes [das Frühstücksbuffet, -s|Frühstücksbuffet].",
            "Wir schlafen gut und genießen den Urlaub in der Stadt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Wochenende in den Bergen",
        intro: "Buchung, Einzel- und Doppelzimmer sowie Auschecken am Abreisetag (A2).",
        paragraphs: [
          [
            "Vor zwei Wochen habe ich im Internet [die Reservierung, -en|die Reservierung] für ein Familienhotel abgeschlossen.",
            "Für meine Eltern buchte ich ein ruhiges [das Doppelzimmer, -|Doppelzimmer] mit Balkon und Bergblick.",
            "Mein Bruder nahm ein kleineres [das Einzelzimmer, -|Einzelzimmer] auf der gleichen Etage.",
            "Der Preis für jede [die Übernachtung, -en|Übernachtung] war fair und bezahlbar.",
          ],
          [
            "Morgens gab es frischen Kaffee, Rührei und knusprige Brötchen am Buffet.",
            "Am Sonntag mussten wir leider schon um elf Uhr vormittags an der Rezeption [auschecken (checkte aus, hat ausgecheckt)|auschecken].",
            "Wir bezahlten die Rechnung mit Kreditkarte und bedankten uns für den freundlichen Service.",
            "Wir werden dieses Hotel bestimmt bald wieder besuchen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die deutsche Hotellandschaft und die Deutsche Hotelklassifizierung",
        intro: "Das Sterne-System der DEHOGA, Garni-Hotels und Qualitätsstandards (B1).",
        paragraphs: [
          [
            "Das Beherbergungsgewerbe in Deutschland zeichnet sich durch eine bemerkenswerte Vielfalt aus, die vom familiengeführten Landgasthof bis zum mondänen Luxushotel reicht.",
            "Um Transparenz für nationale und internationale Gäste zu gewährleisten, führte der Deutsche Hotel- und Gaststättenverband (DEHOGA) die Deutsche Hotelklassifizierung mit ein bis fünf Sternen ein.",
            "Diese Einstufung basiert auf objektiven Prüfkriterien: Ein Drei-Sterne-Haus garantiert beispielsweise eine 14-stündig besetzte [die Rezeption, -en|Rezeption], Haartrockner im Bad und zweisprachige Mitarbeiter.",
          ],
          [
            "Großer Beliebtheit erfreuen sich sogenannte Hotel-Garni-Betriebe, die Übernachtungen mit einem vollwertigen [das Frühstücksbuffet, -s|Frühstücksbuffet] anbieten, jedoch auf ein eigenes Abendrestaurant verzichten.",
            "Beim [einchecken (checkte ein, hat eingecheckt)|Einchecken] setzt sich der Trend zu digitalen Self-Check-in-Terminals durch, an denen Reisende ihre [die Schlüsselkarte, -n|Schlüsselkarte] autonom kodieren oder das Smartphone direkt als Bluetooth-Türöffner einsetzen.",
          ],
          [
            "Dennoch schätzen viele Gäste den persönlichen Kontakt und die individuelle Beratung durch aufmerksame Concierges.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Yield Management, Property-Management-Systeme (PMS) und RevPAR-Ökonomie",
        intro:
          "Dynamische Preisbildung, Property Management Systeme und Kennzahlen der Hospitality-Industrie (B2).",
        paragraphs: [
          [
            "In der modernen Hospitality-Industrie unterliegt das Belegungsmanagement hochgradig algorithmisierten Yield-Management- und Dynamic-Pricing-Strategien.",
            "Property-Management-Systeme (PMS) justieren den Zimmerpreis für jede [die Übernachtung, -en|Übernachtung] sekündlich auf Basis von Buchungsvorlaufzeiten, lokaler Messeauslastung und Konkurrenztarifen.",
            "Zentrale betriebswirtschaftliche Steuerungsgrößen sind der Erlös pro verfügbarem Zimmer (RevPAR) sowie die durchschnittliche Tagesrate (ADR), um den Deckungsbeitrag bei volatilen Fixkosten zu maximieren.",
          ],
          [
            "Auf technischer Ebene revolutionieren vernetzte IoT-Infrastrukturen das Kundenerlebnis im [das Hotelzimmer, -|Hotelzimmer]: Sobald der Gast an der Rezeption eingecheckt hat, regeln intelligente Gebäudeleitsysteme Heizung, Klimatisierung und Ambientebeleuchtung automatisch auf Wohlfühltemperatur.",
          ],
          [
            "Gleichzeitig forciert die Hotellerie ambitionierte Nachhaltigkeitszertifikate (wie GreenSign): Von der Eliminierung von Einwegplastik am Buffet bis hin zu wassersparenden Duschköpfen wandelt sich das Hotel zum Vorreiter ressourceneffizienter Dienstleistungsökonomie.",
          ],
        ],
      },
    },
  },
  die_bank: {
    description:
      "Bank, Geldautomat, Girokonto, EC-Karte, Kreditkarte, Bargeld abheben, PIN, Überweisung und Gebühren.",
    details: "Kreditinstitute, bargeldloser Zahlungsverkehr, Online-Banking und Zinsen (A1–B2)",
    arabicDescription:
      "المصرف والخدمات البنكية (Die Bank): مفردات البنك (Bank)، الصراف الآلي (Geldautomat)، الحساب الجاري (Girokonto)، بطاقة الدفع (EC-Karte)، البطاقة الائتمانية (Kreditkarte)، سحب النقود (abheben)، الرقم السري (PIN)، والتحويل البنكي (Überweisung).",
    words: [
      {
        german: "die Bank, -en",
        arabic: "البنك / المصرف المالي",
        english: "bank",
        example: "Bei der Bank eröffnet er ein neues Girokonto für sein monatliches Gehalt.",
      },
      {
        german: "der Geldautomat, -en",
        arabic: "جهاز الصراف الآلي (ATM)",
        english: "ATM, cash machine",
        example: "Am Geldautomaten kann man rund um die Uhr frische Geldscheine abheben.",
      },
      {
        german: "das Girokonto, -konten",
        arabic: "الحساب البنكي الجاري للرواتب والمعاملات",
        english: "checking account, current account",
        example: "Miete, Strom und Telefon werden monatlich automatisch vom Girokonto abgebucht.",
      },
      {
        german: "die Debitkarte, -n",
        arabic: "بطاقة الخصم المباشر (EC-Karte)",
        english: "debit card",
        example: "Mit der Debitkarte zahlt sie bequem und bargeldlos an der Supermarktkasse.",
      },
      {
        german: "die Kreditkarte, -n",
        arabic: "البطاقة الائتمانية",
        english: "credit card",
        example:
          "Für Auslandsreisen und Online-Einkäufe benötigt man oft eine gültige Kreditkarte.",
      },
      {
        german: "Bargeld abheben (hob ab, hat abgehoben)",
        arabic: "يسحب نقوداً كاش من الحساب",
        english: "to withdraw cash",
        example: "Vor dem Wochenmarkt muss ich noch schnell Bargeld am Automaten abheben.",
      },
      {
        german: "die Geheimzahl, -en",
        arabic: "الرقم السري للبطاقة البنكية (PIN)",
        english: "PIN, secret code",
        example:
          "Man darf seine vierstellige Geheimzahl niemals laut aussprechen oder auf die Karte schreiben.",
      },
      {
        german: "überweisen (überwies, hat überwiesen)",
        arabic: "يحول مبالغ مالية لحساب آخر",
        english: "to transfer (money)",
        example: "Ich werde den Rechnungsbetrag heute Abend bequem per Online-Banking überweisen.",
      },
      {
        german: "der Kontoauszug, -̈e",
        arabic: "كشف الحساب البنكي الدوري",
        english: "bank statement",
        example: "Auf dem monatlichen Kontoauszug kontrolliert er alle Einnahmen und Ausgaben.",
      },
      {
        german: "der Bankschalter, -",
        arabic: "شباك خدمة العملاء في البنك",
        english: "bank counter",
        example: "Für eine persönliche Beratung meldet sich der Kunde am Bankschalter.",
      },
      {
        german: "die Kontoführungsgebühr, -en",
        arabic: "رسوم إدارة وتشغيل الحساب البنكي",
        english: "account maintenance fee",
        example: "Einige Direktbanken verzichten komplett auf eine monatliche Kontoführungsgebühr.",
      },
      {
        german: "der Zinssatz, -̈e",
        arabic: "معدل سعر الفائدة المصرفية",
        english: "interest rate",
        example: "Wenn die Zinsen steigen, lohnt sich das Sparen auf dem Festgeldkonto wieder.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Geld holen am Automaten",
        intro: "Einfache Sätze über Bank, Karte, Geldautomat und PIN (A1).",
        paragraphs: [
          [
            "Ich habe kein Geld mehr in meiner Brieftasche.",
            "Ich gehe zu Fuß in die nächste [die Bank, -en|Bank] an der Ecke.",
            "In der Vorhalle steht ein moderner [der Geldautomat, -en|Geldautomat].",
            "Ich stecke meine blaue [die Debitkarte, -n|Debitkarte] in den Schlitz.",
          ],
          [
            "Auf der Tastatur tippe ich vorsichtig meine vierstellige [die Geheimzahl, -en|Geheimzahl] ein.",
            "Ich wähle fünfzig Euro und möchte das [Bargeld abheben (hob ab, hat abgehoben)|Bargeld abheben].",
            "Der Automat zählt die Scheine und gibt mir das Geld.",
            "Jetzt kann ich einkaufen gehen und meine Einkäufe bezahlen.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Finanzen im Alltag: Überweisungen und Konten",
        intro: "Girokonto verwalten, Rechnungen überweisen und Kontoauszüge prüfen (A2).",
        paragraphs: [
          [
            "Als ich meine erste Arbeitsstelle begann, eröffnete ich bei einer Sparkasse ein [das Girokonto, -konten|Girokonto].",
            "Auf dieses Konto überweist mein Arbeitgeber jeden Monat pünktlich mein Gehalt.",
            "Wenn die Miete für die Wohnung fällig ist, kann ich das Geld per Dauerauftrag automatisch [überweisen (überwies, hat überwiesen)|überweisen].",
            "Am Monatsende drucke ich mir [der Kontoauszug, -̈e|den Kontoauszug] aus, um meine Ausgaben zu prüfen.",
          ],
          [
            "Für Reisen ins Ausland habe ich zusätzlich eine goldene [die Kreditkarte, -n|Kreditkarte] bestellt.",
            "Manche Banken verlangen für die Kontoführung eine monatliche [die Kontoführungsgebühr, -en|Kontoführungsgebühr].",
            "Wenn ich Fragen habe, hilft mir ein freundlicher Mitarbeiter am [der Bankschalter, -|Bankschalter].",
            "Mit gutem Überblick über die eigenen Finanzen lebt man viel entspannter.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das deutsche Drei-Säulen-Bankensystem und die Bargeldliebe",
        intro:
          "Sparkassen, Genossenschaftsbanken, Privatbanken und die kulturelle Bindung an Scheine (B1).",
        paragraphs: [
          [
            "Der deutsche Bankensektor ruht traditionell auf dem weltweit einzigartigen 'Drei-Säulen-Modell': den öffentlich-rechtlichen Sparkassen mit kommunalem Träger, den genossenschaftlichen Volks- und Raiffeisenbanken und den privaten Geschäftsbanken.",
            "Diese dezentrale Struktur sollte historisch die flächendeckende Kreditversorgung des Mittelstandes und den Zugang aller Bürger zu einem [das Girokonto, -konten|Girokonto] garantieren.",
          ],
          [
            "Ein bemerkenswertes kulturelles Phänomen bleibt die ausgeprägte deutsche Vorliebe für physische Münzen und Scheine: 'Nur Bares ist Wahres', lautet ein populäres Sprichwort.",
            "Während in Skandinavien selbst Kleinstbeträge digital beglichen werden, nutzen viele Deutsche weiterhin den Gang zum Schalter, um [Bargeld abheben (hob ab, hat abgehoben)|Bargeld abzuheben].",
          ],
          [
            "Dennoch beschleunigt kontaktloses Bezahlen per Smartphone und Debitkarte den Wandel zum bargeldarmen Bezahlen auch in Bäckereien und Wochenmärkten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "SEPA-Clearing, PSD2-Schnittstellen und Geldpolitik der Europäischen Zentralbank",
        intro:
          "SEPA-Zahlungsprotokolle, Zweifaktor-Authentifizierung (2FA), Zinsstrukturkurven und Basel III (B2).",
        paragraphs: [
          [
            "Der europäische Zahlungsverkehr operiert im Rahmen des SEPA-Standards (Single Euro Payments Area), welcher grenzüberschreitende Transaktionen via IBAN und BIC innerhalb des Euro-Raums harmonisiert.",
            "Mit der Umsetzung der Zahlungsdiensterichtlinie PSD2 wurden Kreditinstitute verpflichtet, Drittanbietern via Open-Banking-APIs sicheren Zugriff auf Kontodaten zu gewähren, flankiert durch die strikte Verpflichtung zur starken Kundenauthentifizierung (SCA / 2FA) bei jeder Transaktion.",
          ],
          [
            "Im makroökonomischen Kontext determinieren die Leitzinsentscheidungen des EZB-Rates über den Hauptrefinanzierungssatz unmittelbar den interbankären Geldmarkt und [der Zinssatz, -̈e|den Zinssatz] für Spar- und Kreditprodukte.",
          ],
          [
            "Banken müssen gemäß Basel-III-Regularien strenge Kernkapitalquoten (Tier 1) und Liquiditätsdeckungskennzahlen (LCR) vorhalten, um systemische Risiken zu mitigieren.",
            "Diese regulatorische Dichte schützt Einlagen bis zu 100.000 Euro gesetzlich und garantiert die Stabilität des Finanzkreislaufs.",
          ],
        ],
      },
    },
  },
  das_einkaufszentrum: {
    description:
      "Einkaufszentrum, Rolltreppe, Modegeschäft, Tiefgarage, Food-Court, Schlendern und Schaufenster.",
    details: "Shopping-Malls, Einzelhandel, Bummeln, Rabatte und Freizeitshopping (A1–B2)",
    arabicDescription:
      "مركز التسوق والمول (Das Einkaufszentrum): مفردات المركز التجاري (Einkaufszentrum)، السلم المتحرك (Rolltreppe)، متجر الأزياء (Modegeschäft)، المواقف السفلية (Tiefgarage)، ساحة المطاعم (Food-Court)، التجول والتنزه (schlendern)، وغرفة القياس (Umkleidekabine).",
    words: [
      {
        german: "das Einkaufszentrum, -zentren",
        arabic: "مركز التسوق التجاري الكبير (المول)",
        english: "shopping center, shopping mall",
        example:
          "Bei Regenwetter verbringen viele Jugendliche den Samstagnachmittag im überdachten Einkaufszentrum.",
      },
      {
        german: "die Rolltreppe, -n",
        arabic: "السلم الكهربائي المتحرك",
        english: "escalator",
        example:
          "Mit der steilen Rolltreppe gelangt man schnell vom Erdgeschoss in den zweiten Stock.",
      },
      {
        german: "das Modegeschäft, -e",
        arabic: "متجر الأزياء والملابس العصرية",
        english: "fashion boutique, clothing store",
        example:
          "In dem exklusiven Modegeschäft hängen die neuesten Kollektionen bekannter Designer.",
      },
      {
        german: "die Tiefgarage, -n",
        arabic: "المرآب ومواقف السيارات تحت الأرض",
        english: "underground car park",
        example:
          "Das Parken in der hell beleuchteten Tiefgarage des Centers ist für Kunden zwei Stunden kostenlos.",
      },
      {
        german: "der Food-Court, -s",
        arabic: "ساحة وردهة المطاعم المتنوعة",
        english: "food court",
        example:
          "Im großen Food-Court kann jeder zwischen asiatischen Nudeln, Burger oder Pizza wählen.",
      },
      {
        german: "schlendern (schlenderte, ist geschlendert)",
        arabic: "يتجول ويتنزه بتمهل واستمتاع",
        english: "to stroll, saunter",
        example:
          "Wir schlendern entspannt an den bunten Schaufenstern vorbei und schauen uns die Auslagen an.",
      },
      {
        german: "das Schaufenster, -",
        arabic: "واجهة العرض الزجاجية للمحل",
        english: "shop window, display window",
        example:
          "Hinter dem gläsernen Schaufenster sind elegante Kleider auf Schaufensterpuppen drapiert.",
      },
      {
        german: "die Umkleidekabine, -n",
        arabic: "غرفة قياس وتبديل الملابس",
        english: "fitting room, changing cubicle",
        example:
          "Vor der Umkleidekabine steht eine kleine Schlange von Kunden mit Hosen in der Hand.",
      },
      {
        german: "anprobieren (probierte an, hat anprobiert)",
        arabic: "يقيس ويجرب مقاس الملابس",
        english: "to try on (clothes)",
        example: "Ich möchte diese blaue Jeansjacke in Größe M unbedingt einmal anprobieren.",
      },
      {
        german: "der Rabatt, -e",
        arabic: "الخصم والتخفيض في السعر",
        english: "discount",
        example:
          "Zum Saisonende gibt es auf viele Winterjacken einen Rabatt von bis zu fünfzig Prozent.",
      },
      {
        german: "die Öffnungszeiten (Pl.)",
        arabic: "ساعات ومواعيد فتح المتجر",
        english: "opening hours",
        example: "Die Öffnungszeiten sind wochentags durchgehend von zehn bis zwanzig Uhr.",
      },
      {
        german: "das Schnäppchen, -",
        arabic: "الصفقة الرابحة والسلعة رخيصة الثمن",
        english: "bargain",
        example: "Auf dem Wühltisch hat sie ein echtes Schnäppchen für nur zehn Euro ergattert.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Ein Einkaufstag in der Mall",
        intro: "Einfache Sätze über Einkaufszentrum, Kleidung anprobieren und Rolltreppe (A1).",
        paragraphs: [
          [
            "Am Samstag fahre ich mit meiner Schwester in [das Einkaufszentrum, -zentren|das Einkaufszentrum].",
            "Wir parken unser Auto unten in der großen [die Tiefgarage, -n|Tiefgarage].",
            "Mit der langen [die Rolltreppe, -n|Rolltreppe] fahren wir nach oben in den ersten Stock.",
            "Dort gibt es viele Geschäfte für Schuhe, Bücher und Kleidung.",
          ],
          [
            "Wir betreten ein schönes [das Modegeschäft, -e|Modegeschäft].",
            "Ich möchte einen warmen Pullover [anprobieren (probierte an, hat anprobiert)|anprobieren] und gehe in [die Umkleidekabine, -n|die Umkleidekabine].",
            "Der Pullover passt perfekt und hat einen tollen [der Rabatt, -e|Rabatt].",
            "Nach dem Einkaufen essen wir ein Eis im Restaurant.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Bummeln und Schlemmen im Center",
        intro: "Schaufensterbummel, Schnäppchenjagd und Mittagessen im Food-Court (A2).",
        paragraphs: [
          [
            "Wenn draußen schlechtes Wetter herrscht, ist die überdachte Shopping-Mall ein beliebtes Ausflugsziel.",
            "Wir lieben es, ohne Hektik durch die breiten Gänge zu [schlendern (schlenderte, ist geschlendert)|schlendern].",
            "In jedem beleuchteten [das Schaufenster, -|Schaufenster] sieht man die aktuellen Modetrends für die neue Saison.",
            "Zum Winterschlussverkauf findet man oft ein unglaubliches [das Schnäppchen, -|Schnäppchen] zu halbem Preis.",
          ],
          [
            "Mittags treffen sich alle im [der Food-Court, -s|Food-Court], wo es Spezialitäten aus aller Welt gibt.",
            "Bevor man losgeht, sollte man die [die Öffnungszeiten (Pl.)|Öffnungszeiten] im Internet prüfen, da sonntags fast alle Läden geschlossen sind.",
            "Ein Einkaufsbummel verbindet praktische Besorgungen mit Spaß und Freizeit.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Konsumtempel vs. Innenstadt: Der Strukturwandel der Einkaufswelten",
        intro: "Entwicklung der Shopping-Center, Sonntagsöffnungsverbote und Erlebniskonsum (B1).",
        paragraphs: [
          [
            "Das Konzept moderner Shopping-Malls nach US-amerikanischem Vorbild von Victor Gruen revolutionierte ab den 1960er-Jahren auch den mitteleuropäischen Einzelhandel.",
            "Riesige Einkaufswelten auf der 'grünen Wiese' boten wetterunabhängigen Komfort, Tausende kostenlose Parkplätze und eine konzentrierte Konsumvielfalt unter einem Dach.",
            "Dies führte mancherorts jedoch zum Ausbluten traditioneller Einkaufsstraßen in kleineren Städten.",
          ],
          [
            "Ein deutsches Spezifikum ist der gesetzliche Schutz der Sonn- und Feiertage: Während in vielen Nachbarländern sieben Tage die Woche geshoppt werden kann, verbietet das deutsche Ladenschlussgesetz reguläre Öffnungen am Sonntag.",
          ],
          [
            "Um gegen den wachsenden Druck des Online-Handels zu bestehen, transformieren sich zeitgenössische Center verstärkt zu Erlebnis- und Begegnungsorten mit Kinos, Fitnessstudios und gastronomischen Food-Courts.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Handelsgeografie, Anchor Tenants und retailpsychologische Wegeführung",
        intro:
          "Zentralitätsindizes, Magnetmieter (Anchor Tenants) und Neuromarketing in Malls (B2).",
        paragraphs: [
          [
            "In der Handelsgeografie und Standortanalyse gehorcht das Layout von Großprojekten wie [das Einkaufszentrum, -zentren|Einkaufszentren] minutiösen retailpsychologischen Algorithmen.",
            "Sogenannte 'Magnetmieter' (Anchor Tenants) - typischerweise große Warenhäuser, Elektronikmärkte oder Lebensmittelfilialisten - werden gezielt an den extremen Endpunkten des Gebäudes positioniert.",
            "Dies erzeugt künstliche Kundenlaufströme, die das Publikum zwingen, an kleineren Boutiquen und Spontankauf-Präsentationen vorbei zu [schlendern (schlenderte, ist geschlendert)|schlendern].",
          ],
          [
            "Durch das gezielte Fehlen natürlicher Uhren und Tageslichtöffnungen im Kernbereich wird das Phänomen des 'Gruen-Effekts' induziert: Konsumenten verlieren ihr Zeitbewusstsein und treten in eine tranceartige Kaufbereitschaft ein.",
          ],
          [
            "Angesichts veränderter postpandemischer Konsummuster steht die Branche jedoch vor tiefgreifenden Revitalisierungsaufgaben: Die Umnutzung von Leerständen zu Coworking-Spaces, Ärztehäusern und Bildungseinrichtungen markiert den Übergang vom monofunktionalen Konsumtempel zum hybriden Stadtbaustein.",
          ],
        ],
      },
    },
  },
  das_kaufhaus: {
    description: "Kaufhaus, Etagen, Erdgeschoss, Abteilungen, Verkäufer, Kassenbon und Umtausch.",
    details:
      "Traditionelle Warenhäuser (KaDeWe), Etagenstruktur, Beratung und Kundenservice (A1–B2)",
    arabicDescription:
      "المتجر الكبير متعدد الأقسام (Das Kaufhaus): مفردات المتجر الشامل (Kaufhaus)، الطوابق (Etagen)، الطابق الأرضي (Erdgeschoss)، أقسام الملابس والألعاب، البائعين (Verkäufer)، إيصال الشراء (Kassenbon)، واستبدال البضائع (umtauschen).",
    words: [
      {
        german: "das Kaufhaus, -̈er",
        arabic: "المتجر الكبير متعدد الأقسام (الوارهوس)",
        english: "department store",
        example:
          "Das historische Kaufhaus erstreckt sich über sechs Etagen und bietet Waren aus aller Welt.",
      },
      {
        german: "die Etage, -n",
        arabic: "الطابق / الدور في المبنى",
        english: "floor, storey",
        example: "Auf jeder Etage des Gebäudes gibt es eine andere Fachabteilung für die Kunden.",
      },
      {
        german: "das Erdgeschoss, -e",
        arabic: "الطابق الأرضي (EG)",
        english: "ground floor",
        example: "Im Erdgeschoss empfängt den Kunden der Duft von edlem Parfüm und Kosmetik.",
      },
      {
        german: "das Untergeschoss, -e",
        arabic: "الطابق السفلي تحت الأرض (UG)",
        english: "basement, lower level",
        example:
          "Im Untergeschoss befindet sich die Gourmet-Abteilung mit internationalen Delikatessen.",
      },
      {
        german: "die Damenabteilung, -en",
        arabic: "قسم الملابس والأزياء النسائية",
        english: "women's clothing department",
        example: "In der Damenabteilung probiert sie einen eleganten Wollmantel an.",
      },
      {
        german: "die Herrenabteilung, -en",
        arabic: "قسم الملابس والأزياء الرجالية",
        english: "men's clothing department",
        example: "In der zweiten Etage berät der Schneider Herren über den passenden Anzug.",
      },
      {
        german: "die Spielwarenabteilung, -en",
        arabic: "قسم ألعاب الأطفال",
        english: "toy department",
        example:
          "Kinderaugen strahlen vor Begeisterung beim Betreten der riesigen Spielwarenabteilung.",
      },
      {
        german: "der Verkäufer, -",
        arabic: "البائع / موظف المبيعات",
        english: "salesperson, shop assistant",
        example:
          "Der kompetente Verkäufer erklärt die technischen Details des Kaffeevollautomaten.",
      },
      {
        german: "der Kassenbon, -s",
        arabic: "إيصال وفاتورة الشراء الورقية",
        english: "receipt, sales slip",
        example:
          "Man sollte den Kassenbon gut aufbewahren, falls man das Kleidungsstück reklamieren möchte.",
      },
      {
        german: "umtauschen (tauschte um, hat umgetauscht)",
        arabic: "يستبدل السلعة أو يرجعها للمحل",
        english: "to exchange, return",
        example:
          "Wenn die Größe nicht passt, kann man die Hose innerhalb von vierzehn Tagen umtauschen.",
      },
      {
        german: "die Auswahl (Sg.)",
        arabic: "التشكيلة الواسعة وتنوع البضائع",
        english: "selection, choice, range",
        example:
          "Das Kaufhaus besticht durch eine riesige Auswahl an Marken und Qualitätsprodukten.",
      },
      {
        german: "die Rolltreppe, -n",
        arabic: "السلم الكهربائي الداخلي",
        english: "escalator",
        example: "Die Rolltreppen im Atrium verbinden alle Etagen elegant miteinander.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Im großen Kaufhaus",
        intro: "Einfache Sätze über Kaufhaus, Etagen, Geschenke und Kassenbon (A1).",
        paragraphs: [
          [
            "Ich gehe in [das Kaufhaus, -̈er|das Kaufhaus] in der Mitte der Stadt.",
            "Das Gebäude ist sehr groß und hat fünf [die Etage, -n|Etagen].",
            "Unten in [das Erdgeschoss, -e|dem Erdgeschoss] gibt es Taschen und Parfüm.",
            "In der vierten Etage besuchen wir [die Spielwarenabteilung, -en|die Spielwarenabteilung] für meinen kleinen Bruder.",
          ],
          [
            "Ein freundlicher [der Verkäufer, -|Verkäufer] hilft mir, ein schönes Spiel auszusuchen.",
            "Ich bezahle an der Kasse und nehme [der Kassenbon, -s|den Kassenbon] mit.",
            "Die [die Auswahl (Sg.)|Auswahl] an schönen Dingen ist riesig.",
            "Einkaufen im Kaufhaus macht viel Freude.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kleidung kaufen und umtauschen",
        intro: "Herrenabteilung, Beratung und problemloser Umtausch mit Kassenbon (A2).",
        paragraphs: [
          [
            "Gestern wollte mein Vater einen neuen warmen Wintermantel kaufen.",
            "Wir fuhren mit dem Aufzug direkt in [die Herrenabteilung, -en|die Herrenabteilung] im dritten Stock.",
            "Meine Mutter schaute sich währenddessen modische Kleider in [die Damenabteilung, -en|der Damenabteilung] an.",
            "Der Verkäufer beriet uns sehr geduldig und half bei der richtigen Größe.",
          ],
          [
            "Zu Hause stellten wir leider fest, dass die Ärmel etwas zu lang waren.",
            "Am nächsten Tag ging mein Vater zurück, um den Mantel problemlos [umtauschen (tauschte um, hat umgetauscht)|umzutauschen].",
            "Mit dem Kaufbeleg war die Rückgabe innerhalb weniger Minuten erledigt.",
            "Guter Kundenservice ist das Markenzeichen traditioneller Kaufhäuser.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Mythos KaDeWe und die Krise des mitteleuropäischen Warenhauses",
        intro: "Kaufhaus des Westens, bürgerliche Konsumgeschichte und die Galeria-Krise (B1).",
        paragraphs: [
          [
            "Das traditionelle Warenhaus war im späten 19. und frühen 20. Jahrhundert die spektakuläre Bühne der bürgerlichen Moderne.",
            "Ikonen wie das Berliner KaDeWe (Kaufhaus des Westens) mit seiner weltberühmten Feinschmeckeretage im sechsten Stockwerk demonstrierten luxuriöse Fülle und urbanen Glanz.",
            "Erstmals konnte das Bürgertum unter einem einzigen Dach von Möbeln über Kleidung bis hin zu exotischen Delikatessen alles erwerben.",
          ],
          [
            "In den vergangenen Jahren geriet die traditionelle Warenhausbranche in Deutschland, personifiziert durch Ketten wie Karstadt und Kaufhof, in eine existenzielle Dauerkrise.",
            "Verändertes Konsumverhalten, die Konkurrenz durch spezialisierte Filialisten und der Siegeszug des Online-Handels führten zu massenhaften Filialschließungen und Insolvenzverfahren.",
          ],
          [
            "Überlebensfähig erweisen sich primär Premiumhäuser, die das Einkaufen als sinnliches Erlebnis mit persönlicher Beratung und gastronomischer Exzellenz inszenieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Flächenproduktivität, Kuratierungsökonomie und urbane Nachnutzungskonzepte",
        intro:
          "Betriebswirtschaftliche Warenhausanalysen, Omnichannel-Retailing und Repositionierung (B2).",
        paragraphs: [
          [
            "Die ökonomische Erosion klassischer Warenhäuser resultiert aus einer kontinuierlich sinkenden Flächenproduktivität (Umsatz pro Quadratmeter Verkaufsfläche).",
            "Das monolithische Modell, auf mehreren tausend Quadratmetern ein unspezifisches Vollsortiment anzubieten, ist im Zeitalter digitaler Preistransparenz und hyperspezialisierter Nischenanbieter obsolet geworden.",
          ],
          [
            "Erfolgreiche Häuser substituieren daher den reinen Warenverkauf durch eine radikale 'Kuratierungsökonomie':",
            "Flächen werden an innovative Pop-up-Konzepte und exklusive Marken vermietet (Shop-in-Shop-Prinzip), während die Customer Journey durch kuratierte Erlebniswelten angereichert wird.",
          ],
          [
            "Auf städtebaulicher Ebene erfordert die Schließung historischer Kaufhaus-Immobilien kreative Nachnutzungskonzepte:",
            "Die Transformation in gemischt genutzte Quartiere mit Wohnungen, Kulturzentren und universitären Räumen soll verhindern, dass verwaiste Konsumkathedralen städtische Zentren in die Abwärtsspirale reißen.",
          ],
        ],
      },
    },
  },
  der_supermarkt: {
    description:
      "Supermarkt, Einkaufswagen, Korb, Regal, Kasse, Kassenband, Pfandflasche, Pfandautomat und MHD.",
    details: "Lebensmitteleinzelhandel, Discounter, Mehrwegpfand, Barcodes und Bezahlarten (A1–B2)",
    arabicDescription:
      "السوبرماركت والبقالة (Der Supermarkt): مفردات السوبرماركت (Supermarkt)، عربة التسوق (Einkaufswagen)، الرفوف (Regal)، الخزينة والمحاسب (Kasse/Kassierer)، شريط المحاسبة (Kassenband)، زجاجات التأمين المرتجعة (Pfandflasche)، آلة إرجاع القناني (Pfandautomat)، وتاريخ الصلاحية (MHD).",
    words: [
      {
        german: "der Supermarkt, -̈e",
        arabic: "السوبرماركت / متجر البقالة الكبير",
        english: "supermarket",
        example: "Zweimal in der Woche erledigen wir den großen Wocheneinkauf im Supermarkt.",
      },
      {
        german: "der Einkaufswagen, -",
        arabic: "عربة التسوق ذات العجلات",
        english: "shopping cart, trolley",
        example:
          "Er schiebt eine Ein-Euro-Münze in den Schlitz, um den Einkaufswagen zu entriegeln.",
      },
      {
        german: "der Einkaufskorb, -̈e",
        arabic: "سلة التسوق المحمولة باليد",
        english: "shopping basket",
        example:
          "Für wenige Kleinigkeiten nimmt sie lieber einen leichten Einkaufskorb am Eingang.",
      },
      {
        german: "das Regal, -e",
        arabic: "الرف المليء بالبضائع",
        english: "shelf",
        example: "Ein Mitarbeiter räumt frische Konservendosen und Gläser in das hohe Regal ein.",
      },
      {
        german: "die Kasse, -n",
        arabic: "صندوق الدفع والخزينة",
        english: "checkout, cash desk",
        example: "An Kasse drei öffnet eine freundliche Mitarbeiterin einen neuen Schalter.",
      },
      {
        german: "das Kassenband, -̈er",
        arabic: "شريط المحاسبة المتحرك عند الكاشير",
        english: "conveyor belt (checkout)",
        example: "Er legt alle Lebensmittel nacheinander sorgfältig auf das laufende Kassenband.",
      },
      {
        german: "die Kassiererin, -nen",
        arabic: "موظفة وأمينة الصندوق (الكاشيرة)",
        english: "cashier (female)",
        example:
          "Die flinke Kassiererin scannt die Barcodes der Waren mit beeindruckender Geschwindigkeit.",
      },
      {
        german: "die Pfandflasche, -n",
        arabic: "زجاجة التأمين المرتجعة المستردة",
        english: "deposit bottle, returnable bottle",
        example: "In Deutschland zahlt man 25 Cent Pfand auf jede Einweg-Plastikflasche.",
      },
      {
        german: "der Pfandautomat, -en",
        arabic: "آلة استرجاع زجاجات وعلب التأمين",
        english: "reverse vending machine, bottle return machine",
        example:
          "Am Eingang schiebt sie die leeren Pfandflaschen in den ratternden Pfandautomaten.",
      },
      {
        german: "das Mindesthaltbarkeitsdatum (MHD), -daten",
        arabic: "تاريخ الصلاحية الأدنى الموصى به",
        english: "best-before date",
        example:
          "Das Mindesthaltbarkeitsdatum garantiert Qualität, bedeutet aber nicht, dass die Ware danach schlecht ist.",
      },
      {
        german: "der Barcode, -s",
        arabic: "الرمز الشريطي والباركود",
        english: "barcode",
        example: "Der Laserscanner an der Kasse erfasst den Barcode mit einem kurzen Piepton.",
      },
      {
        german: "kontaktlos bezahlen",
        arabic: "يدفع دون تلامس عبر البطاقة أو الهاتف",
        english: "to pay contactless",
        example:
          "Man kann an der Kasse bequem kontaktlos mit der Bankkarte oder der Smartwatch bezahlen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Der wöchentliche Lebensmitteleinkauf",
        intro: "Einfache Sätze über Supermarkt, Wagen, Regal und Kasse (A1).",
        paragraphs: [
          [
            "Heute gehe ich mit meinem Vater in [der Supermarkt, -̈e|den Supermarkt].",
            "Draußen nehme ich einen großen [der Einkaufswagen, -|Einkaufswagen] mit einer Münze.",
            "Wir gehen durch die Gänge und suchen die Lebensmittel.",
            "Im [das Regal, -e|Regal] stehen Milch, Nudeln, Reis und Tomatensoße.",
          ],
          [
            "Am Ende stellen wir uns an [die Kasse, -n|die Kasse] an.",
            "Ich lege alle Sachen vorsichtig auf [das Kassenband, -̈er|das Kassenband].",
            "[die Kassiererin, -nen|Die Kassiererin] scannt die Produkte schnell ein.",
            "Mein Vater wird [kontaktlos bezahlen|kontaktlos bezahlen] und wir packen die Taschen voll.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Pfandflaschen und Haltbarkeit",
        intro: "Pfandsystem in Deutschland, MHD und bewusster Einkauf (A2).",
        paragraphs: [
          [
            "Bevor ich mit dem Einkaufen beginne, bringe ich leere Flaschen zurück.",
            "In Deutschland gibt es ein tolles System für jede [die Pfandflasche, -n|Pfandflasche].",
            "Ich schiebe die Flaschen einzeln in [der Pfandautomat, -en|den Pfandautomaten] und drücke auf den grünen Knopf.",
            "Der Automat druckt einen Zettel aus, den ich an der Kasse verrechnen lassen kann.",
          ],
          [
            "Beim Kaufen von Joghurt und Käse schaue ich immer auf [das Mindesthaltbarkeitsdatum (MHD), -daten|das Mindesthaltbarkeitsdatum].",
            "Oft sind Lebensmittel auch nach Ablauf des Datums noch vollkommen genießbar.",
            "Die Kassiererin scannt jeden [der Barcode, -s|Barcode] an der Scannerkasse.",
            "Ein gut organisierter Supermarkt macht den Alltag einfach und praktisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Discounterkultur, Pfandsystem und Lebensmittelverschwendung",
        intro: "Die weltweite Vorreiterrolle der Discounter (Aldi/Lidl) und das Einwegpfand (B1).",
        paragraphs: [
          [
            "Deutschland ist das Mutterland des modernen Lebensmittel-Discountprinzips, begründet durch die Brüder Albrecht mit Aldi in der Nachkriegszeit.",
            "Das Konzept minimaler Betriebskosten, standardisierter Sortimente und hoher Umschlaggeschwindigkeit prägte den globalen Lebensmitteleinzelhandel nachhaltig.",
            "Heute konkurrieren Discounter und Vollsortiment-[der Supermarkt, -̈e|Supermärkte] mit breiten Bio-Eigenmarken und regionalen Erzeugnissen um preisbewusste und qualitätsorientierte Kunden.",
          ],
          [
            "Ein Meilenstein des deutschen Umweltschutzes war die Einführung des gesetzlichen Dosenpfands im Jahr 2003.",
            "Dank bundesweiter Rücknahmepflicht über [der Pfandautomat, -en|den Pfandautomaten] erzielt Deutschland bei Einweg-PET-Flaschen und Getränkedosen Rücklaufquoten von über 98 Prozent, was einen nahezu geschlossenen Wertstoffkreislauf sichert.",
          ],
          [
            "Zugleich wächst die Sensibilisierung gegen Lebensmittelverschwendung: Verbraucherinitiativen fordern die Abschaffung starrer Fristen beim [das Mindesthaltbarkeitsdatum (MHD), -daten|Mindesthaltbarkeitsdatum], um genießbare Nahrungsmittel vor der Mülltonne zu retten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Kassenscannerrheologie, RFID/Computer-Vision und zirkuläre Kreislaufwirtschaft",
        intro:
          "Self-Checkout-Technologie, Grab-and-Go-Konzepte und logistische Warenflusssteuerung (B2).",
        paragraphs: [
          [
            "Der Point of Sale (POS) im modernen Lebensmitteleinzelhandel durchläuft eine technologische Disruption durch fortschreitende Automatisierung.",
            "Traditionelle Kassen mit mechanischem [das Kassenband, -̈er|Kassenband] werden zunehmend durch Self-Checkout-Terminals (SCO) oder autonome 'Grab-and-Go'-Konzepte substituiert.",
            "Hierbei erfassen Deckenkameras mit Computer Vision und Gewichtssensoren im [das Regal, -e|Regal] autonom, welche Artikel der Kunde entnimmt, sodass der Bezahlvorgang vollkommen unsichtbar im Hintergrund abgewickelt wird.",
          ],
          [
            "Logistisch stützt sich das Category Management auf Just-in-Time-Lieferungen via GS1-Standard und 2D-DataMatrix-Codes, die über den simplen [der Barcode, -s|Barcode] hinaus Chargennummern und dynamische Verfallsdaten kodieren.",
          ],
          [
            "Im Kontext der europäischen Kreislaufwirtschaft demonstriert das deutsche Pfandsystem die Wirksamkeit ökonomischer Lenkungsinstrumente:",
            "Das hochgradig sortenreine Bottle-to-Bottle-Recycling eliminiert Downcycling-Verluste und fungiert als internationales Benchmark für ressourceneffizientes Plastikmanagement.",
          ],
        ],
      },
    },
  },
};

const isPath = "src/data/vocabulary/in-der-stadt.json";
const isData = JSON.parse(fs.readFileSync(isPath, "utf8"));

for (const sec of isData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(isData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(isPath, JSON.stringify(isData, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to in-der-stadt.json!");
