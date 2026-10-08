import fs from "node:fs";
import path from "node:path";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  die_wohnung: {
    description: "Wohnungssuche, Mietvertrag, Kaution und das Leben im Mehrfamilienhaus.",
    details: "Wohnungsarten, Miete und Nebenkosten (A1–B2)",
    arabicDescription:
      "استئجار الشقة والحياة السكنية في ألمانيا: مفردات البحث عن سكن، عقد الإيجار (Mietvertrag)، الوديعة (Kaution)، التكاليف الجانبية (Nebenkosten)، ومكونات الشقة السكنية الأساسية مع القواعد الحاكمة للسكن المشترك.",
    words: [
      {
        german: "die Wohnung, -en",
        arabic: "الشقة",
        english: "apartment, flat",
        example: "Wir haben eine helle Dreizimmerwohnung im Stadtzentrum gemietet.",
      },
      {
        german: "das Zimmer, -",
        arabic: "الغرفة",
        english: "room",
        example: "Die Wohnung verfügt über vier geräumige Zimmer und einen Balkon.",
      },
      {
        german: "der Balkon, -e",
        arabic: "الشرفة / البلكونة",
        english: "balcony",
        example: "Im Sommer frühstücken wir am Wochenende gern auf dem Balkon.",
      },
      {
        german: "die Miete, -n",
        arabic: "الإيجار",
        english: "rent",
        example: "Die monatliche Miete ist pünktlich zum ersten Werktag fällig.",
      },
      {
        german: "die Kaltmiete, -n",
        arabic: "الإيجار الأساسي (بدون تدفئة وخدمات)",
        english: "base rent (excluding utilities)",
        example: "Die Kaltmiete beträgt sechshundert Euro pro Monat.",
      },
      {
        german: "die Warmmiete, -n",
        arabic: "الإيجار الإجمالي (شامل التدفئة والخدمات)",
        english: "total rent (including utilities)",
        example: "In der Warmmiete sind Heizung und Wasserkosten bereits enthalten.",
      },
      {
        german: "die Nebenkosten (Pl.)",
        arabic: "المصاريف الإضافية / الخدمات",
        english: "utility costs, service charges",
        example: "Am Jahresende erhalten die Mieter eine detaillierte Abrechnung der Nebenkosten.",
      },
      {
        german: "die Kaution, -en",
        arabic: "التأمين المالي / الوديعة",
        english: "security deposit",
        example:
          "Vor dem Einzug muss der Mieter eine Kaution von drei Monatskaltmieten hinterlegen.",
      },
      {
        german: "der Mietvertrag, -̈e",
        arabic: "عقد الإيجار",
        english: "rental contract / lease",
        example: "Beide Parteien haben den unbefristeten Mietvertrag gestern unterschrieben.",
      },
      {
        german: "der Vermieter, - / die Vermieterin, -nen",
        arabic: "المؤجر / المؤجرة",
        english: "landlord / landlady",
        example: "Die Vermieterin kümmert sich zügig um notwendige Reparaturen im Treppenhaus.",
      },
      {
        german: "der Mieter, - / die Mieterin, -nen",
        arabic: "المستأجر / المستأجرة",
        english: "tenant",
        example: "Die neuen Mieter renovieren die Räume vor dem offiziellen Einzug.",
      },
      {
        german: "der Nachbar, -n / die Nachbarin, -nen",
        arabic: "الجار / الجارة",
        english: "neighbour",
        example: "Wir haben ein sehr freundliches Verhältnis zu unseren Nachbarn im dritten Stock.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Meine neue Wohnung",
        intro: "Einfache Beschreibungen über die erste eigene Wohnung und das Einziehen (A1).",
        paragraphs: [
          [
            "Ich habe eine neue [die Wohnung, -en|Wohnung] gefunden.",
            "Sie ist hell, ruhig und hat zwei schöne [das Zimmer, -|Zimmer].",
            "Vom Wohnzimmer aus gehe ich direkt auf den [der Balkon, -e|Balkon].",
            "Dort trinke ich morgens frischen Kaffee und lese die Zeitung.",
          ],
          [
            "Die [die Miete, -n|Miete] bezahle ich jeden Monat pünktlich an den [der Vermieter, - / die Vermieterin, -nen|Vermieter].",
            "Vor dem Einzug habe ich eine [die Kaution, -en|Kaution] bezahlt und den [der Mietvertrag, -̈e|Mietvertrag] unterschrieben.",
            "Meine [der Nachbar, -n / die Nachbarin, -nen|Nachbarn] im Haus sind sehr nett und hilfsbereit.",
            "Ich fühle mich in meinem neuen Zuhause rundum wohl.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Die Wohnungssuche in der Großstadt",
        intro:
          "Erfahrungen bei Wohnungsbesichtigungen, Mietkosten und Absprachen mit Vermietern (A2).",
        paragraphs: [
          [
            "Vor zwei Monaten haben Lisa und Daniel intensiv nach einer gemeinsamen [die Wohnung, -en|Wohnung] gesucht.",
            "In der Anzeige stand eine günstige [die Kaltmiete, -n|Kaltmiete], aber die gesamten [die Nebenkosten (Pl.)|Nebenkosten] kamen noch hinzu.",
            "Als sie die [die Warmmiete, -n|Warmmiete] sahen, wussten sie genau, dass ihr Budget für diese Drei-Zimmer-Wohnung ausreicht.",
            "Bei der Besichtigung waren viele andere Bewerber da, aber die sympathische [der Vermieter, - / die Vermieterin, -nen|Vermieterin] entschied sich für sie.",
          ],
          [
            "Wenige Tage später unterzeichneten sie den [der Mietvertrag, -̈e|Mietvertrag] und überwiesen die vereinbarte [die Kaution, -en|Kaution] auf ein Sperrkonto.",
            "Am Wochenende halfen Freunde beim Umzug und trugen schwere Kisten in jedes einzelne [das Zimmer, -|Zimmer].",
            "Abends luden sie die neuen [der Nachbar, -n / die Nachbarin, -nen|Nachbarn] auf ein Glas Saft auf ihren sonnigen [der Balkon, -e|Balkon] ein.",
            "Damit begann für beide ein wunderbarer neuer Lebensabschnitt.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Mietrecht, Rechte und Pflichten im Mietalltag",
        intro:
          "Rechtliche Rahmenbedingungen, Kautionsregeln und ein harmonisches Miteinander im Mietshaus (B1).",
        paragraphs: [
          [
            "Wer in Deutschland eine [die Wohnung, -en|Wohnung] mieten möchte, muss sich mit verschiedenen bürokratischen Schritten vertraut machen.",
            "Zunächst verlangt der [der Vermieter, - / die Vermieterin, -nen|Vermieter] häufig eine Bonitätsauskunft sowie Gehaltsnachweise, bevor überhaupt ein verbindlicher [der Mietvertrag, -̈e|Mietvertrag] zustande kommt.",
            "Es ist ratsam, genau zwischen der reinen [die Kaltmiete, -n|Kaltmiete] und der tatsächlichen [die Warmmiete, -n|Warmmiete] zu differenzieren, da steigende Energiekosten die monatlichen [die Nebenkosten (Pl.)|Nebenkosten] spürbar in die Höhe treiben können.",
            "Zusätzlich dient die gesetzlich geregelte [die Kaution, -en|Kaution] als finanzielle Sicherheit für eventuelle Schäden oder Mietausfälle.",
          ],
          [
            "Für ein funktionierendes Zusammenleben im Mehrfamilienhaus ist die Einhaltung der Hausordnung unerlässlich.",
            "Jeder [der Mieter, - / die Mieterin, -nen|Mieter] hat das Recht auf ungestörte Ruhe in seinem [das Zimmer, -|Zimmer], insbesondere während der festgelegten Ruhezeiten am Abend.",
            "Wenn man auf dem [der Balkon, -e|Balkon] feiert, sollte man rechtzeitig die umliegenden [der Nachbar, -n / die Nachbarin, -nen|Nachbarn] informieren, um Missverständnisse und Beschwerden im Keim zu ersticken.",
            "Gegenseitige Rücksichtnahme sorgt dafür, dass sich alle Parteien langfristig geborgen und sicher fühlen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Urbaner Wohnungsmarkt, Mietpreisbremse und Wohnkultur",
        intro:
          "Sozioökonomische Reflexion über Wohnungsknappheit, Mietpreisregulierung und urbane Lebensräume (B2).",
        paragraphs: [
          [
            "Die angespannte Situation auf dem städtischen Wohnungsmarkt hat dazu geführt, dass die Suche nach einer bezahlbaren [die Wohnung, -en|Wohnung] zu einer der drängendsten gesellschaftlichen Herausforderungen geworden ist.",
            "Strikte Vorgaben der Mietpreisbremse sollen verhindern, dass [der Vermieter, - / die Vermieterin, -nen|Vermieter] die verlangte [die Kaltmiete, -n|Kaltmiete] bei Neuvermietungen willkürlich anheben, während die progressive Entwicklung der [die Nebenkosten (Pl.)|Nebenkosten] die finanzielle Belastung privater Haushalte kontinuierlich verschärft.",
            "Für jeden zukünftigen [der Mieter, - / die Mieterin, -nen|Mieter] bedeutet dies, Mietverträge und Klauseln zur [die Kaution, -en|Kaution] akribisch auf ihre rechtliche Zulässigkeit hin zu überprüfen.",
            "Fehlerhafte Klauseln im [der Mietvertrag, -̈e|Mietvertrag] führen nicht selten zu langwierigen juristischen Auseinandersetzungen vor den Schlichtungsstellen.",
          ],
          [
            "Gleichzeitig transformieren sich die architektonischen Ansprüche an modernen Wohnraum.",
            "Ein privater Rückzugsort wie ein begrünter [der Balkon, -e|Balkon] fungiert heute als unverzichtbare Oase der Erholung inmitten verdichteter Metropolen.",
            "Ein achtsames Miteinander, bei dem man den Dialog mit jedem einzelnen [der Nachbar, -n / die Nachbarin, -nen|Nachbarn] pflegt, etabliert eine nachhaltige Nachbarschaftskultur, die Vereinzelungstendenzen entgegenwirkt.",
            "So wird die eigene Bleibe weit mehr als bloße Wohnfläche: Sie wandelt sich zu einem resilienten sozialen Raum.",
          ],
        ],
      },
    },
  },

  der_eingang: {
    description: "Der Eingangsbereich: Haustür, Diele, Garderobe und Empfang von Gästen.",
    details: "Eingangsbereich, Garderobe und Hausflur (A1–B2)",
    arabicDescription:
      "مدخل المنزل والممر (Diele / Flur): مفردات الباب الخارجي، جرس الباب، خزانة المعاطف، الأحذية والمفاتيح، مع التركيز على عبارات الترحيب بالضيوف وقواعد خلع الأحذية المتبعة في الثقافة الألمانية.",
    words: [
      {
        german: "die Haustür, -en",
        arabic: "باب المنزل الرئيسي",
        english: "front door",
        example: "Bitte schließen Sie die Haustür immer sorgfältig ab.",
      },
      {
        german: "die Klingel, -n",
        arabic: "جرس الباب",
        english: "doorbell",
        example: "Die Klingel an der Haustür funktioniert wieder einwandfrei.",
      },
      {
        german: "der Briefkasten, -̈",
        arabic: "صندوق البريد",
        english: "mailbox",
        example: "Der Postbote wirft die Briefe täglich in den Briefkasten.",
      },
      {
        german: "der Flur, -e",
        arabic: "الممر / الردهة",
        english: "hallway, corridor",
        example: "Vom langen Flur aus gelangt man in alle Zimmer.",
      },
      {
        german: "die Garderobe, -n",
        arabic: "شماعة المعاطف / غرفة المعاطف",
        english: "coat rack, cloakroom",
        example: "Gäste hängen ihre nassen Mäntel an die Garderobe.",
      },
      {
        german: "der Schlüssel, -",
        arabic: "المفتاح",
        english: "key",
        example: "Ich habe meinen Schlüsselbund immer in der Jackentasche.",
      },
      {
        german: "die Fußmatte, -n",
        arabic: "ممسحة الأرجل",
        english: "doormat",
        example: "Vor dem Betreten der Wohnung wischen wir die Schuhe auf der Fußmatte ab.",
      },
      {
        german: "der Schuhschrank, -̈e",
        arabic: "خزانة الأحذية",
        english: "shoe cabinet",
        example: "Alle Straßenschuhe stehen ordentlich aufgereiht im Schuhschrank.",
      },
      {
        german: "die Gegensprechanlage, -n",
        arabic: "الإنتركم / هاتف الباب",
        english: "intercom system",
        example: "Über die Gegensprechanlage frage ich, wer an der Haustür geklingelt hat.",
      },
      {
        german: "das Treppenhaus, -̈er",
        arabic: "بيت الدرج / السلم",
        english: "stairwell",
        example: "Das Treppenhaus wird jede Woche abwechselnd von den Bewohnern gereinigt.",
      },
      {
        german: "das Türschloss, -̈er",
        arabic: "قفل الباب",
        english: "door lock",
        example: "Der Handwerker hat ein besonders sicheres Türschloss eingebaut.",
      },
      {
        german: "der Spiegel, -",
        arabic: "المرآة",
        english: "mirror",
        example: "Im Flur hängt ein großer Spiegel direkt neben der Haustür.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Willkommen an der Haustür",
        intro: "Erste Schritte im Eingangsbereich: Begrüßung und Schuhe ausziehen (A1).",
        paragraphs: [
          [
            "Wenn Besuch kommt, drückt er zuerst auf die [die Klingel, -n|Klingel].",
            "Ich öffne die schwere [die Haustür, -en|Haustür] und sage freundlich: „Herzlich willkommen!“",
            "Vor der Tür liegt eine saubere [die Fußmatte, -n|Fußmatte] für die Schuhe.",
            "Im hellen [der Flur, -e|Flur] hängen wir die dicken Jacken an die [die Garderobe, -n|Garderobe].",
          ],
          [
            "Die Gäste stellen ihre Schuhe in den [der Schuhschrank, -̈e|Schuhschrank] und ziehen Hausschuhe an.",
            "An der Wand hängt ein praktischer [der Spiegel, -|Spiegel], in den man kurz blickt.",
            "Auf dem kleinen Tischchen liegt immer mein [der Schlüssel, -|Schlüssel].",
            "Der Eingangsbereich ist aufgeräumt, einladend und warm.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein regnerischer Nachmittag im Flur",
        intro:
          "Alltägliche Handgriffe beim Heimkommen und der Umgang mit Post und Lieferungen (A2).",
        paragraphs: [
          [
            "Als ich gestern nach einem langen Arbeitstag nach Hause kam, regnete es in Strömen.",
            "Ich nahm den [der Schlüssel, -|Schlüssel] aus der Tasche und steckte ihn in das [das Türschloss, -̈er|Türschloss].",
            "Im [das Treppenhaus, -̈er|Treppenhaus] schaute ich zuerst in den [der Briefkasten, -̈|Briefkasten], um wichtige Rechnungen herauszuholen.",
            "Oben angekommen, zog ich meine nassen Stiefel aus und stellte sie direkt neben den [der Schuhschrank, -̈e|Schuhschrank].",
          ],
          [
            "Plötzlich ertönte die [die Gegensprechanlage, -n|Gegensprechanlage] im Flur: Der Paketbote stand unten am Eingang.",
            "Ich drückte den Türöffner und wartete an der offenen [die Haustür, -en|Haustür] auf das Paket.",
            "Nachdem ich meine nasse Regenjacke an die [die Garderobe, -n|Garderobe] gehängt hatte, betrachtete ich mein Gesicht im [der Spiegel, -|Spiegel].",
            "Es ist immer ein erleichterndes Gefühl, nach einem anstrengenden Tag die Tür hinter sich zu schließen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Der erste Eindruck: Funktion und Ästhetik des Entrees",
        intro: "Sicherheitsaspekte, Ordnungssysteme und die Willkommenskultur im Flur (B1).",
        paragraphs: [
          [
            "Der Eingangsbereich bildet die funktionale Schnittstelle zwischen der hektischen Außenwelt und dem privaten Rückzugsort.",
            "Aus diesem Grund legen viele Bewohner großen Wert auf ein robustes [das Türschloss, -̈er|Türschloss], das Einbrüchen zuverlässig vorbeugt.",
            "Moderne Mehrfamilienhäuser sind zudem mit einer intelligenten [die Gegensprechanlage, -n|Gegensprechanlage] ausgestattet, über die man Besucher vor dem Einlass verifizieren kann.",
            "Wer die Wohnung betritt, streift den Schmutz gründlich an der [die Fußmatte, -n|Fußmatte] ab, um das empfindliche Parkett zu schonen.",
          ],
          [
            "Eine durchdachte Raumgestaltung im oft fensterlosen [der Flur, -e|Flur] ist entscheidend für die Wohlfühlatmosphäre.",
            "Ein geräumiger [der Schuhschrank, -̈e|Schuhschrank] und eine stabile [die Garderobe, -n|Garderobe] verhindern, dass Mäntel und Schuhe ungeordnet herumliegen.",
            "Gleichzeitig lässt ein großflächiger [der Spiegel, -|Spiegel] den Raum optisch deutlich heller und weiter wirken.",
            "So vermittelt bereits der allererste Schritt über die Schwelle ein Gefühl von strukturierter Behaglichkeit.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Architektonische Schwellenräume und soziokulturelle Etikette",
        intro:
          "Soziologische und raumtheoretische Betrachtung von Diele, Treppenhaus und Haustür (B2).",
        paragraphs: [
          [
            "Aus raumsoziologischer Perspektive fungiert der Eingangsbereich als klassischer Schwellenraum, der das Öffentliche vom Intimen trennt.",
            "Während das gemeinschaftlich genutzte [das Treppenhaus, -̈er|Treppenhaus] Gegenstand nachbarschaftlicher Hausordnungen und periodischer Reinigungsrituale ist, beginnt hinter der massiven [die Haustür, -en|Haustür] die absolute Privatsphäre.",
            "Moderne Sicherheitstechnologien haben das traditionelle [das Türschloss, -̈er|Türschloss] längst um elektronische Schließsysteme und videogestützte [die Gegensprechanlage, -n|Gegensprechanlagen] erweitert, um das Sicherheitsbedürfnis urbaner Haushalte zu befriedigen.",
            "Gleichzeitig spiegelt der standardmäßige [der Briefkasten, -̈|Briefkasten] den formalen Informationsfluss der Bürger mit Behörden und Versorgungsbetrieben wider.",
          ],
          [
            "Kulturell betrachtet etabliert die Diele verbindliche Verhaltensnormen des Gastgebens.",
            "Das rituelle Ablegen von Oberbekleidung an der [die Garderobe, -n|Garderobe] und der Wechsel von Straßenschuhen zu Hausschuhen markiert den symbolischen Eintritt in eine vertraute Gemeinschaft.",
            "Die geschickte Platzierung von Designelementen wie einem illuminierten [der Spiegel, -|Spiegel] korrigiert die oft beengte Geometrie des Raums und generiert atmosphärische Transparenz.",
            "Somit konditioniert der Eingangsbereich die emotionale Einstimmung sowohl der Gäste als auch der Heimkehrenden nachhaltig.",
          ],
        ],
      },
    },
  },

  das_esszimmer: {
    description: "Gemeinsames Essen, Esstisch, Tischkultur und gesellige Runden.",
    details: "Möbel, Geschirrschränke und Esskultur (A1–B2)",
    arabicDescription:
      "غرفة الطعام (Esszimmer): مفردات طاولة الطعام، الكراسي، مفرش المائدة، خزانة الأطباق (Vitrine)، وأدوات الضيافة، مع التركيز على تقاليد تناول الطعام العائلي وآداب المائدة المتبعة في ألمانيا.",
    words: [
      {
        german: "das Esszimmer, -",
        arabic: "غرفة الطعام",
        english: "dining room",
        example: "Sonntags versammelt sich die ganze Familie im Esszimmer.",
      },
      {
        german: "der Esstisch, -e",
        arabic: "طاولة الطعام",
        english: "dining table",
        example: "Der massive Esstisch aus Eichenholz bietet Platz für acht Personen.",
      },
      {
        german: "der Stuhl, -̈e",
        arabic: "الكرسي",
        english: "chair",
        example: "Wir haben sechs bequeme Stühle um den Esstisch herum aufgestellt.",
      },
      {
        german: "die Tischdecke, -n",
        arabic: "مفرش الطاولة",
        english: "tablecloth",
        example: "Für das festliche Abendessen legte Mutter eine weiße Tischdecke auf.",
      },
      {
        german: "die Serviette, -n",
        arabic: "منديل المائدة",
        english: "napkin",
        example: "Neben jedem Teller liegt eine sorgfältig gefaltete Serviette.",
      },
      {
        german: "das Geschirr, -e",
        arabic: "الأواني / أطقم الأطباق",
        english: "crockery, dishes",
        example: "Nach dem Essen spülen wir das feine Geschirr von Hand.",
      },
      {
        german: "das Besteck, -e",
        arabic: "طقم المائدة (سكين، شوكة، ملعقة)",
        english: "cutlery, silverware",
        example: "Das Besteck aus Edelstahl glänzt auf dem gedeckten Tisch.",
      },
      {
        german: "die Vitrine, -n",
        arabic: "خزانة العرض الزجاجية",
        english: "display cabinet, china cabinet",
        example: "In der beleuchteten Vitrine stehen wertvolle Gläser und Porzellan.",
      },
      {
        german: "der Kronleuchter, -",
        arabic: "الثريا / النجفة",
        english: "chandelier",
        example: "Über dem Esstisch hängt ein eleganter Kronleuchter mit warmem Licht.",
      },
      {
        german: "die Schale, -n",
        arabic: "الوعاء / السلطانية",
        english: "bowl, dish",
        example: "In der Mitte des Tisches steht eine große Schale mit frischem Obst.",
      },
      {
        german: "die Kerze, -n",
        arabic: "الشمعة",
        english: "candle",
        example: "Am Abend zünden wir zwei rote Kerzen für eine gemütliche Stimmung an.",
      },
      {
        german: "das Abendessen, -",
        arabic: "وجبة العشاء",
        english: "dinner, supper",
        example: "Um Punkt neunzehn Uhr servieren wir das warme Abendessen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein schöner Abend am Esstisch",
        intro:
          "Einfache Beschreibungen über den gedeckten Tisch und das gemeinsame Abendessen (A1).",
        paragraphs: [
          [
            "Unser [das Esszimmer, -|Esszimmer] ist hell und freundlich eingerichtet.",
            "In der Mitte steht ein großer [der Esstisch, -e|Esstisch] aus Holz.",
            "Um den Tisch herum stehen sechs bequeme [der Stuhl, -̈e|Stühle] für unsere Familie.",
            "Am Wochenende decken wir den Tisch gemeinsam für das Festessen.",
          ],
          [
            "Ich lege eine saubere [die Tischdecke, -n|Tischdecke] auf und verteile das glänzende [das Besteck, -e|Besteck].",
            "Auf jeden Teller legen wir eine bunte [die Serviette, -n|Serviette] und stellen schönes [das Geschirr, -e|Geschirr] bereit.",
            "In der Mitte brennt eine kleine [die Kerze, -n|Kerze], und alle freuen sich auf das leckere [das Abendessen, -|Abendessen].",
            "Das gemeinsame Essen macht uns allen große Freude.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Das Sonntagsessen mit Gästen",
        intro: "Vorbereitung eines festlichen Tisches und gemeinsame Mahlzeiten mit Freunden (A2).",
        paragraphs: [
          [
            "Gestern haben wir gute Freunde zu einem festlichen Sonntagsessen eingeladen.",
            "Zuerst holte ich das festliche Porzellan und die Weingläser aus der gläsernen [die Vitrine, -n|Vitrine].",
            "Gemeinsam breiteten wir eine elegante weiße [die Tischdecke, -n|Tischdecke] über den langen [der Esstisch, -e|Esstisch] aus.",
            "Jeder Gast bekam einen bequemen [der Stuhl, -̈e|Stuhl] und eine kunstvoll gefaltete [die Serviette, -n|Serviette].",
          ],
          [
            "Über dem Tisch sorgte der alte [der Kronleuchter, -|Kronleuchter] für stimmungsvolle Beleuchtung.",
            "In einer großen gläsernen [die Schale, -n|Schale] richteten wir einen frischen gemischten Salat an.",
            "Das warme [das Abendessen, -|Abendessen] schmeckte hervorragend, und wir unterhielten uns bis spät in die Nacht.",
            "Nach dem Essen halfen alle mit, das gesamte [das Geschirr, -e|Geschirr] abzutragen und die Küche aufzuräumen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Tischkultur und kommunikatives Zentrum",
        intro:
          "Bedeutung des gemeinsamen Essens für den familiären Zusammenhalt und Tischsitten (B1).",
        paragraphs: [
          [
            "In vielen modernen Haushalten hat das klassische [das Esszimmer, -|Esszimmer] eine Renaissance als Ort der zwischenmenschlichen Begegnung erlebt.",
            "Während die Hektik des Alltags oft zu schnellen Mahlzeiten zwischendurch verleitet, fungiert der massive [der Esstisch, -e|Esstisch] als fester Ankerpunkt für den Austausch.",
            "Hier versammeln sich alle Generationen, um bei einem reichhaltigen [das Abendessen, -|Abendessen] über Erlebnisse, Erfolge und Sorgen des Tages zu sprechen.",
            "Ein sorgfältig gedeckter Tisch mit hochwertigem [das Besteck, -e|Besteck] und edlem [das Geschirr, -e|Geschirr] signalisiert Wertschätzung gegenüber den Familienmitgliedern und Gästen.",
          ],
          [
            "Zur gepflegten Tischkultur gehört neben gutem Essen auch das passende Ambiente.",
            "Eine dezente Beleuchtung durch einen stilvollen [der Kronleuchter, -|Kronleuchter] oder flackernde [die Kerze, -n|Kerzen] schafft eine Atmosphäre von Wärme und Vertrauen.",
            "Wertvolle Erbstücke wie Kristallgläser finden ihren geschützten Platz in der beleuchteten [die Vitrine, -n|Vitrine] an der Stirnseite des Raumes.",
            "Auf diese Weise verbinden sich funktionale Gastlichkeit und ästhetischer Genuss zu einem harmonischen Gesamtbild.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Gastrosophie, Esskultur und symbolische Raumordnung",
        intro:
          "Kulturgeschichtliche Reflexion über Esszimmerkultur, Tischordnungen und soziale Rituale (B2).",
        paragraphs: [
          [
            "Kulturhistorisch betrachtet manifestiert das bürgerliche [das Esszimmer, -|Esszimmer] seit dem neunzehnten Jahrhundert die Trennung zwischen Zubereitung und feierlicher Konsumation von Speisen.",
            "Der zentral positionierte [der Esstisch, -e|Esstisch] fungiert dabei als hierarchisch und rituell aufgeladener Raum, dessen Sitzordnung die familiäre und soziale Struktur widerspiegelt.",
            "Die Verwendung einer makellosen [die Tischdecke, -n|Tischdecke], flankiert von poliertem [das Besteck, -e|Besteck] und edlem [das Geschirr, -e|Geschirr], zeugt von der Tradierung distinktiver Gastrosophie und feinmotorischer Etikette.",
            "Repräsentative Möbelstücke wie die massive [die Vitrine, -n|Vitrine] dienen nicht lediglich der Aufbewahrung, sondern zelebrieren den materiellen und kulturellen Status des Haushalts.",
          ],
          [
            "In Zeiten zunehmender digitaler Zerstreuung erweist sich das gemeinsame [das Abendessen, -|Abendessen] als essenzielles Korrektiv gegen zwischenmenschliche Entfremdung.",
            "Das gedämpfte Licht, das von einem klassischen [der Kronleuchter, -|Kronleuchter] ausgeht, fokussiert die Aufmerksamkeit bewusst auf den Kreis der Anwesenden und fördert diskursive Tiefe.",
            "Damit transzendiert das Speisen seine biologische Notwendigkeit: Es transformiert sich zu einem identitätsstiftenden Kulturakt, der Bindungen festigt und Werte über Generationen hinweg weitergibt.",
          ],
        ],
      },
    },
  },

  kuechengeraete: {
    description: "Elektrische Küchengeräte, Großgeräte, Kleingeräte und moderne Küchentechnik.",
    details: "Elektrische Küchengeräte, Kühlen und Zubereiten (A1–B2)",
    arabicDescription:
      "الأجهزة الكهربائية في المطبخ: الثلاجة (Kühlschrank)، الفريزر (Gefrierfach)، الموقد (Herd)، الفرن (Backofen)، غسالة الصحون (Spülmaschine)، وأجهزة إعداد القهوة والطهي الحديثة، مع التركيز على السلامة المنزلية وترشيد استهلاك الطاقة.",
    words: [
      {
        german: "der Kühlschrank, -̈e",
        arabic: "الثلاجة",
        english: "refrigerator, fridge",
        example: "Milch und Käse stellen wir sofort in den Kühlschrank.",
      },
      {
        german: "das Gefrierfach, -̈er",
        arabic: "الفريزر / حجرة التجميد",
        english: "freezer compartment",
        example: "Tiefkühlgemüse lagert bei minus achtzehn Grad im Gefrierfach.",
      },
      {
        german: "der Herd, -e",
        arabic: "الموقد / البوتاجاز",
        english: "stove, cooker",
        example: "Auf dem modernen Induktionsherd kocht das Wasser blitzschnell.",
      },
      {
        german: "der Backofen, -̈",
        arabic: "الفرن",
        english: "oven",
        example: "Der Kuchen backt bei einhundertachtzig Grad im Backofen.",
      },
      {
        german: "die Mikrowelle, -n",
        arabic: "الميكروويف",
        english: "microwave",
        example: "In der Mikrowelle wärme ich die Reste von gestern schnell auf.",
      },
      {
        german: "die Spülmaschine, -n",
        arabic: "غسالة الصحون",
        english: "dishwasher",
        example: "Nach dem Mittagessen räumen die Kinder das Geschirr in die Spülmaschine.",
      },
      {
        german: "die Kaffeemaschine, -n",
        arabic: "ماكينة القهوة",
        english: "coffee maker",
        example: "Morgens schalte ich als Erstes die Kaffeemaschine ein.",
      },
      {
        german: "der Wasserkocher, -",
        arabic: "غلاية الماء",
        english: "electric kettle",
        example: "Mit dem Wasserkocher bereite ich heißes Wasser für Tee zu.",
      },
      {
        german: "der Toaster, -",
        arabic: "محمصة الخبز",
        english: "toaster",
        example: "Der Toaster macht die Brotscheiben wunderbar knusprig.",
      },
      {
        german: "der Mixer, -",
        arabic: "الخلاط الكهربائي",
        english: "blender, mixer",
        example: "Mit dem Mixer pürieren wir frische Früchte zu einem Smoothie.",
      },
      {
        german: "die Dunstabzugshaube, -n",
        arabic: "شفاط المطبخ",
        english: "extractor hood, range hood",
        example: "Beim scharfen Anbraten schalten wir die Dunstabzugshaube ein.",
      },
      {
        german: "die Küchenwaage, -n",
        arabic: "ميزان المطبخ",
        english: "kitchen scale",
        example: "Mit der digitalen Küchenwaage wiege ich Mehl und Zucker grammgenau ab.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Helfer in unserer Küche",
        intro:
          "Einfache Beschreibungen über elektrische Küchengeräte und ihren täglichen Nutzen (A1).",
        paragraphs: [
          [
            "In unserer Küche gibt es viele nützliche elektrische Geräte.",
            "Frische Milch und Joghurt stehen immer im kalten [der Kühlschrank, -̈e|Kühlschrank].",
            "Im oberen [das Gefrierfach, -̈er|Gefrierfach] bewahren wir leckeres Eis und Tiefkühlpizza auf.",
            "Auf dem [der Herd, -e|Herd] kocht mein Vater eine heiße Gemüsesuppe.",
          ],
          [
            "Am Morgen kocht der schnelle [der Wasserkocher, -|Wasserkocher] Wasser für unseren Tee.",
            "Der [der Toaster, -|Toaster] röstet zwei Scheiben Brot, während die [die Kaffeemaschine, -n|Kaffeemaschine] duftenden Kaffee kocht.",
            "Nach dem Frühstück räumen wir alle Teller und Tassen in die [die Spülmaschine, -n|Spülmaschine].",
            "Diese Geräte sparen viel Zeit im Haushalt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Kochen und Backen am Samstagnachmittag",
        intro: "Praktischer Einsatz von Küchengeräten bei der Vorbereitung eines Abendessens (A2).",
        paragraphs: [
          [
            "Am Samstagabend haben meine Mitbewohner und ich beschlossen, eine Pizza selbst zu backen.",
            "Zuerst wog ich das Mehl mit der genauen [die Küchenwaage, -n|Küchenwaage] ab und knetete den Teig.",
            "Danach heizten wir den [der Backofen, -̈|Backofen] auf zweihundertzwanzig Grad Ober- und Unterhitze vor.",
            "Gleichzeitig schalteten wir die [die Dunstabzugshaube, -n|Dunstabzugshaube] ein, damit der Geruch von gebratenen Zwiebeln schnell abzieht.",
          ],
          [
            "Für die Sauce zerkleinerte Jonas Tomaten und Knoblauch mit dem elektrischen [der Mixer, -|Mixer].",
            "Weil wir noch Reste vom Vortag hatten, stellten wir einen Teller kurz in die [die Mikrowelle, -n|Mikrowelle].",
            "Nach dem leckeren Essen brauchten wir kein Geschirr von Hand abwaschen, weil die moderne [die Spülmaschine, -n|Spülmaschine] alles erledigte.",
            "So macht das Kochen mit Freunden richtig Spaß.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Energieeffizienz und moderne Technik in der Küche",
        intro:
          "Auswahl energieeffizienter Großgeräte, Pflege und Arbeitserleichterung im Küchenalltag (B1).",
        paragraphs: [
          [
            "Beim Kauf neuer Haushaltsgeräte achten Verbraucher heutzutage verstärkt auf Energieeffizienz und Nachhaltigkeit.",
            "Ein alter [der Kühlschrank, -̈e|Kühlschrank] verbraucht oft unverhältnismäßig viel Strom, weshalb sich die Anschaffung eines Geräts mit sparsamer Energieklasse schnell amortisiert.",
            "Besonders moderne Kühl-Gefrier-Kombinationen verfügen über No-Frost-Technologie, sodass das mühsame manuelle Abtauen im [das Gefrierfach, -̈er|Gefrierfach] der Vergangenheit angehört.",
            "Auch Induktionstechnologie auf dem [der Herd, -e|Herd] reduziert den Stromverbrauch erheblich, da die Hitze direkt im Topfboden entsteht.",
          ],
          [
            "Neben den Großgeräten tragen kleine Küchenhelfer entscheidend zu einem reibungslosen Workflow bei.",
            "Während die programmierbare [die Kaffeemaschine, -n|Kaffeemaschine] pünktlich zum Weckerklingeln frischen Kaffee aufbrüht, bringt ein leistungsstarker [der Wasserkocher, -|Wasserkocher] Wasser in Sekundenschnelle zum Kochen.",
            "Um Kochdünste und Fettpartikel effektiv aus den Wohnräumen fernzuhalten, ist eine regelmäßig gewartete [die Dunstabzugshaube, -n|Dunstabzugshaube] mit Aktivkohlefilter unverzichtbar.",
            "Schließlich sorgt die vollintegrierte [die Spülmaschine, -n|Spülmaschine] nicht nur für hygienisch sauberes Geschirr, sondern verbraucht auch signifikant weniger Wasser als der manuelle Abwasch.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Smarte Küchentechnologie, Automatisierung und Nachhaltigkeitsdiskurse",
        intro:
          "Analyse technologischer Trends wie Smart Home, Sensorik und Ökobilanzen in der Einbauküche (B2).",
        paragraphs: [
          [
            "Die fortschreitende Digitalisierung des privaten Haushalts hat das Spektrum moderner Küchengeräte revolutioniert und die Küche in ein vernetztes Technologiezentrum transformiert.",
            "Ein intelligenter [der Kühlschrank, -̈e|Kühlschrank] registriert mittels interner Kameras und Gewichtssensoren das Mindesthaltbarkeitsdatum von Lebensmitteln, um Lebensmittelverschwendung präventiv entgegenzuwirken.",
            "Präzisionsgeräte wie der digital gesteuerte [der Backofen, -̈|Backofen] mit integriertem Bratenthermometer garantieren optimale Garergebnisse durch sensorische Feuchtigkeits- und Temperaturregulierung.",
            "Gleichzeitig optimieren vernetzte Geschirrspüler ihren Wasser- und Energiebedarf abhängig vom tatsächlichen Verschmutzungsgrad des Geschirrs in der [die Spülmaschine, -n|Spülmaschine].",
          ],
          [
            "Dennoch wirft die zunehmende Technisierung auch kritische Fragen hinsichtlich Obsoleszenz und Reparierbarkeit auf.",
            "Verbraucherschützer fordern ein verbindliches Recht auf Reparatur, damit hochpreisige Geräte wie der [der Herd, -e|Herd] oder komplexe Kleingeräte wie ein multifunktionaler [der Mixer, -|Mixer] nicht wegen trivialer Elektronikdefekte vorzeitig entsorgt werden müssen.",
            "Eine nachhaltige Küchenphilosophie kombiniert demnach hocheffiziente Automatisierung mit langlebiger Materialbeschaffenheit und bewusster Nutzungsdisziplin.",
            "Auf diese Weise gelingt die Synthese aus kulinarischem Komfort und ökologischer Verantwortung.",
          ],
        ],
      },
    },
  },

  koch_und_backutensilien: {
    description: "Manuelle Koch- und Backutensilien: Töpfe, Pfannen, Messer und Küchenhelfer.",
    details: "Kochgeschirr, Backformen und Handwerkzeuge (A1–B2)",
    arabicDescription:
      "أدوات الطهي والخبز اليدوية: القدور (Töpfe)، المقالي (Pfannen)، ألواح التقطيع (Schneidebretter)، سكاكين المطبخ، وأدوات الخبز اليدوية. يركز الدرس على أسماء أدوات المطبخ الدقيقة والأفعال المرتبطة بتحضير الطعام.",
    words: [
      {
        german: "der Topf, -̈e",
        arabic: "القدر / الطنجرة",
        english: "pot, saucepan",
        example: "Das Nudelwasser kocht bereits im großen Topf.",
      },
      {
        german: "die Pfanne, -n",
        arabic: "المقلاة",
        english: "frying pan, pan",
        example: "In der beschichteten Pfanne brate ich zwei Eier an.",
      },
      {
        german: "das Schneidebrett, -er",
        arabic: "لوح التقطيع",
        english: "cutting board, chopping board",
        example: "Auf dem hölzernen Schneidebrett schneide ich Zwiebeln und Paprika.",
      },
      {
        german: "das Küchenmesser, -",
        arabic: "سكين المطبخ",
        english: "kitchen knife",
        example: "Das scharfe Küchenmesser schneidet Fleisch mühelos in feine Streifen.",
      },
      {
        german: "der Kochlöffel, -",
        arabic: "ملعقة الطهي الخشبية",
        english: "wooden spoon, cooking spoon",
        example: "Mit dem hölzernen Kochlöffel rühre ich die Tomatensauce um.",
      },
      {
        german: "das Sieb, -e",
        arabic: "المصفاة",
        english: "sieve, strainer, colander",
        example: "Gießen Sie die gekochten Nudeln durch das Sieb ab.",
      },
      {
        german: "die Schüssel, -n",
        arabic: "الوعاء / السلطانية",
        english: "bowl, mixing bowl",
        example: "In einer großen Schüssel mische ich den Kuchenteig an.",
      },
      {
        german: "das Backblech, -e",
        arabic: "صينية الخبز",
        english: "baking sheet, baking tray",
        example: "Wir legen das Backpapier direkt auf das flache Backblech.",
      },
      {
        german: "die Teigrolle, -n",
        arabic: "شوبك / نشابة العجين",
        english: "rolling pin",
        example: "Mit der Teigrolle rollt sie den Pizzateig gleichmäßig dünn aus.",
      },
      {
        german: "die Reibe, -n",
        arabic: "المبشرة",
        english: "grater",
        example: "Mit der Reibe reibe ich frischen Parmesan über die Spaghetti.",
      },
      {
        german: "der Pfannenwender, -",
        arabic: "ملعقة تقليب الطعام المسطحة",
        english: "spatula, turner",
        example: "Mit dem Pfannenwender wende ich die Pfannkuchen in der Luft.",
      },
      {
        german: "der Schneebesen, -",
        arabic: "مضرب البيض اليدوي",
        english: "whisk",
        example: "Mit dem Schneebesen schlägt er die Sahne steif.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wir kochen Nudeln mit Sauce",
        intro:
          "Einfache Beschreibungen über grundlegende Kochutensilien und Handgriffe beim Kochen (A1).",
        paragraphs: [
          [
            "Heute koche ich zusammen mit meiner Schwester ein leckeres Mittagessen.",
            "Zuerst fülle ich Wasser in einen großen [der Topf, -̈e|Topf] und stelle ihn auf den Herd.",
            "Auf einem sauberen [das Schneidebrett, -er|Schneidebrett] schneide ich Tomaten mit dem scharfen [das Küchenmesser, -|Küchenmesser].",
            "In einer heißen [die Pfanne, -n|Pfanne] brate ich etwas Hackfleisch an.",
          ],
          [
            "Mit einem [der Kochlöffel, -|Kochlöffel] aus Holz rühre ich die Sauce sorgfältig um.",
            "Wenn die Nudeln fertig gekocht sind, gieße ich sie durch ein großes [das Sieb, -e|Sieb] ab.",
            "Zum Schluss nehme ich die [die Reibe, -n|Reibe] und streue Käse über die heiße Pasta.",
            "Das Kochen mit den richtigen Utensilien ist einfach und macht Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Plätzchenbacken vor den Feiertagen",
        intro: "Teig zubereiten, ausrollen und Plätzchen auf dem Blech backen (A2).",
        paragraphs: [
          [
            "Gestern Nachmittag haben wir in der Küche traditionelle Butterplätzchen gebacken.",
            "In einer großen [die Schüssel, -n|Schüssel] vermengten wir Mehl, Butter, Zucker und Eier.",
            "Mit dem [der Schneebesen, -|Schneebesen] schlug meine Tochter zuerst das Eiweiß schaumig, bevor wir alles zu einem Teig kneteten.",
            "Danach rollte ich den Teig mit der schweren [die Teigrolle, -n|Teigrolle] auf der bemehlten Arbeitsplatte gleichmäßig aus.",
          ],
          [
            "Wir stachen Sterne und Herzen aus und legten sie vorsichtig auf das [das Backblech, -e|Backblech].",
            "Nach nur zehn Minuten im Ofen duftete das ganze Haus wunderbar nach frischem Gebäck.",
            "Mit einem flachen [der Pfannenwender, -|Pfannenwender] hob ich die warmen Plätzchen vom Blech auf ein Kuchengitter zum Abkühlen.",
            "Alle waren begeistert von dem köstlichen Ergebnis.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Die Kunst des Handwerks: Qualität in der Küche",
        intro:
          "Warum hochwertige Küchenwerkzeuge die Zubereitung erleichtern und sicherer machen (B1).",
        paragraphs: [
          [
            "Ambitionierte Hobbyköche wissen, dass gelungene Speisen nicht nur von frischen Zutaten, sondern maßgeblich vom richtigen Werkzeug abhängen.",
            "Ein stumpfes Messer stellt ein erhebliches Sicherheitsrisiko dar, weshalb ein gut ausbalanciertes, geschmiedetes [das Küchenmesser, -|Küchenmesser] zur Grundausstattung jeder Küche gehört.",
            "In Kombination mit einem rutschfesten [das Schneidebrett, -er|Schneidebrett] aus massivem Stirnholz lassen sich Gemüse und Kräuter ermüdungsfrei zerkleinern.",
            "Ebenso entscheidet die Beschaffenheit vom [der Topf, -̈e|Topf] über die gleichmäßige Hitzeverteilung beim schonenden Schmoren empfindlicher Gerichte.",
          ],
          [
            "Auch beim Braten und Backen sind spezialisierte Utensilien unverzichtbar.",
            "Während eine gusseiserne [die Pfanne, -n|Pfanne] extrem hohe Temperaturen zum scharfen Anbraten speichert, schützt ein hitzebeständiger [der Pfannenwender, -|Pfannenwender] empfindliche Beschichtungen vor Kratzern.",
            "Beim Patisserie-Handwerk garantieren eine präzise [die Teigrolle, -n|Teigrolle] und ein stabiles [das Backblech, -e|Backblech] gleichmäßige Backergebnisse ohne Anbrennen.",
            "Wer in langlebige Koch- und Backutensilien investiert, spart langfristig Geld und steigert die Freude am Kochen immens.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Materialkunde, Ergonomie und kulinarische Professionalität",
        intro:
          "Materialwissenschaftliche Betrachtung von Kochutensilien, Wärmeleitfähigkeit und Ergonomie (B2).",
        paragraphs: [
          [
            "Die professionelle Gastronomie und anspruchsvolle Haute Cuisine betrachten Kochutensilien nicht als bloße Bedarfsgegenstände, sondern als Präzisionsinstrumente.",
            "Die Materialkomposition von Mehrschicht-Kochgeschirr, bei dem Kupfer- oder Aluminiumkerne von Edelstahl ummantelt werden, optimiert die thermische Leitfähigkeit in jedem [der Topf, -̈e|Topf].",
            "Ebenso erfordert die Pflege eines hochwertigen Messers aus Carbonstahl fundiertes Wissen über Schleifwinkel und Abziehsteine, damit das [das Küchenmesser, -|Küchenmesser] seine mikroskopische Schärfe dauerhaft behält.",
            "Das Zusammenspiel zwischen Klingenführung und der Härte vom [das Schneidebrett, -er|Schneidebrett] beeinflusst die Schneidhaltigkeit nachhaltig.",
          ],
          [
            "In der Backstube entscheidet die thermische Kapazität vom [das Backblech, -e|Backblech] über die Maillard-Reaktion und die Ausbildung einer perfekten Kruste.",
            "Gleichzeitig gewährleisten ergonomisch geformte Werkzeuge wie ein flexibler [der Pfannenwender, -|Pfannenwender] oder ein feinmaschiges [das Sieb, -e|Sieb] ermüdungsfreies Arbeiten unter zeitkritischen Bedingungen.",
            "Die Renaissance traditioneller Utensilien aus Holz und Gusseisen spiegelt zudem ein wachsendes Bewusstsein für mikroplastikfreie und schadstoffarme Zubereitungsmethoden wider.",
            "Somit kulminiert die handwerkliche Exzellenz in der bewussten Selektion und meisterhaften Beherrschung des kulinarischen Instrumentariums.",
          ],
        ],
      },
    },
  },

  das_kinderzimmer: {
    description: "Das Zimmer für Kinder: Schlafen, Spielen, Lernen und Geborgenheit.",
    details: "Kindermöbel, Spielzeuge und kindgerechte Einrichtung (A1–B2)",
    arabicDescription:
      "غرفة الأطفال (Kinderzimmer): مفردات سرير الأطفال، طاولة الغيار، صندوق الألعاب، مكتب المذاكرة، الألعاب والقصص المصورة، مع التركيز على تنظيم غرفة الطفل، الأمان المنزلي والتربية في ألمانيا.",
    words: [
      {
        german: "das Kinderzimmer, -",
        arabic: "غرفة الأطفال",
        english: "children's room, nursery",
        example: "Das Kinderzimmer ist bunt und voller bunter Spielsachen.",
      },
      {
        german: "das Kinderbett, -en",
        arabic: "سرير الطفل",
        english: "crib, children's bed",
        example: "Das kleine Kind schläft friedlich in seinem sicheren Kinderbett.",
      },
      {
        german: "die Spielzeugkiste, -n",
        arabic: "صندوق الألعاب",
        english: "toy box, toy chest",
        example: "Vor dem Schlafengehen räumen wir alle Bausteine in die Spielzeugkiste.",
      },
      {
        german: "der Schreibtisch, -e",
        arabic: "مكتب المذاكرة / الكتابة",
        english: "desk",
        example: "Am Schreibtisch macht der Sohn nachmittags seine Schulaufgaben.",
      },
      {
        german: "der Teddybär, -en",
        arabic: "دب لعبة محشو",
        english: "teddy bear",
        example: "Der flauschige Teddybär liegt jede Nacht mit im Bett.",
      },
      {
        german: "die Bausteine (Pl.)",
        arabic: "مكعبات البناء (ألعاب تركيب)",
        english: "building blocks",
        example: "Die Kinder bauen einen hohen Turm aus bunten Bausteinen aus Holz.",
      },
      {
        german: "das Bilderbuch, -̈er",
        arabic: "كتاب مصور للأطفال",
        english: "picture book",
        example: "Vor dem Einschlafen lesen die Eltern ein spannendes Bilderbuch vor.",
      },
      {
        german: "die Buntstifte (Pl.)",
        arabic: "أقلام التلوين الخشبية",
        english: "coloured pencils",
        example: "Mit den neuen Buntstiften malt das Mädchen ein Bild von unserer Familie.",
      },
      {
        german: "das Nachtlicht, -er",
        arabic: "ضوء الليل / لمبة السهاري",
        english: "nightlight",
        example: "Das sanfte Nachtlicht nimmt dem Kind die Angst vor der Dunkelheit.",
      },
      {
        german: "der Kinderstuhl, -̈e",
        arabic: "كرسي الأطفال",
        english: "children's chair",
        example: "Der kleine Kinderstuhl passt perfekt an den niedrigen Maltisch.",
      },
      {
        german: "der Spielteppich, -e",
        arabic: "سجادة الألعاب (طرق وسيارات)",
        english: "play mat, play rug",
        example: "Auf dem bunten Spielteppich fährt der Junge mit kleinen Spielzeugautos.",
      },
      {
        german: "die Puppe, -n",
        arabic: "الدمية / العروسة اللعبة",
        english: "doll",
        example: "Die Puppe bekommt ein neues Kleidchen und wird im Puppenwagen gefahren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Tag im Kinderzimmer",
        intro: "Einfache Beschreibungen über das Spielen und Schlafen im Kinderzimmer (A1).",
        paragraphs: [
          [
            "Das [das Kinderzimmer, -|Kinderzimmer] von Tim ist groß und sehr hell.",
            "In der Ecke steht ein gemütliches [das Kinderbett, -en|Kinderbett] mit blauer Bettwäsche.",
            "Darin sitzt sein bester Freund, ein weicher [der Teddybär, -en|Teddybär].",
            "Auf dem Boden liegt ein großer bunter [der Spielteppich, -e|Spielteppich] mit Straßen.",
          ],
          [
            "Tim baut mit vielen bunten [die Bausteine (Pl.)|Bausteinen] ein großes Haus.",
            "Am kleinen [der Schreibtisch, -e|Schreibtisch] malt er mit seinen [die Buntstifte (Pl.)|Buntstiften] ein schönes Bild.",
            "Abends räumen wir alle Autos in die große [die Spielzeugkiste, -n|Spielzeugkiste].",
            "Mama liest ein schönes [das Bilderbuch, -̈er|Bilderbuch] vor, und das sanfte [das Nachtlicht, -er|Nachtlicht] leuchtet die ganze Nacht.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ordnung machen nach dem Spielen",
        intro: "Ein Nachmittag mit Freunden, Hausaufgaben und abendlichen Aufräumritualen (A2).",
        paragraphs: [
          [
            "Gestern Nachmittag hat Mia ihre beste Freundin zu sich ins [das Kinderzimmer, -|Kinderzimmer] eingeladen.",
            "Gemeinsam setzten sie sich auf den [der Kinderstuhl, -̈e|Kinderstuhl] und spielten stundenlang mit der [die Puppe, -n|Puppe].",
            "Danach bauten sie eine riesige Festung aus Holz mit bunten [die Bausteine (Pl.)|Bausteinen] auf dem Fußboden.",
            "Als es dunkler wurde, machte Mia am [der Schreibtisch, -e|Schreibtisch] noch schnell ihre Mathehausaufgaben.",
          ],
          [
            "Vor dem Abendessen erinnerte der Vater daran, dass alle Spielsachen in die [die Spielzeugkiste, -n|Spielzeugkiste] geräumt werden müssen.",
            "Beide Mädchen halfen fleißig mit, sodass das Zimmer im Handumdrehen wieder ordentlich war.",
            "Zum Einschlafen legte sich Mia in ihr gemütliches [das Kinderbett, -en|Kinderbett] und umarmte ihren treuen [der Teddybär, -en|Teddybären].",
            "Das beruhigende [das Nachtlicht, -er|Nachtlicht] an der Steckdose spendete sanften Trost bis zum Morgen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Raumgestaltung für kindliche Entwicklung und Selbstständigkeit",
        intro:
          "Wie eine durchdachte Einrichtung die Kreativität, Ruhe und Autonomie von Kindern fördert (B1).",
        paragraphs: [
          [
            "Die Gestaltung von einem modernen [das Kinderzimmer, -|Kinderzimmer] stellt Eltern vor die Herausforderung, verschiedene Funktionsbereiche harmonisch zu vereinen.",
            "Der Raum muss gleichermaßen als Ort des unbeschwerten Spielens, des konzentrierten Lernens und der erholsamen Nachtruhe dienen.",
            "Niedrige Regale und eine leicht zugängliche [die Spielzeugkiste, -n|Spielzeugkiste] ermöglichen es schon Kleinkindern, eigenständig Ordnung zu halten und Verantwortung für ihr Eigentum zu übernehmen.",
            "Kreative Beschäftigungen mit [die Buntstifte (Pl.)|Buntstiften] und das gemeinsame Betrachten von einem spannenden [das Bilderbuch, -̈er|Bilderbuch] fördern die kognitiven Fähigkeiten und die Sprachentwicklung nachhaltig.",
          ],
          [
            "Mit dem Schuleintritt gewinnt ein ergonomischer [der Schreibtisch, -e|Schreibtisch] mit verstellbarem Stuhl zunehmend an Bedeutung.",
            "Hier lernen Kinder, fokussiert und ohne Ablenkung durch verstreute [die Bausteine (Pl.)|Bausteine] ihre Aufgaben zu erledigen.",
            "Gleichzeitig darf die emotionale Geborgenheit nicht vernachlässigt werden: Ein geschütztes [das Kinderbett, -en|Kinderbett], der vertraute [der Teddybär, -en|Teddybär] und ein warmes [das Nachtlicht, -er|Nachtlicht] sind unverzichtbar für einen angstfreien Schlaf.",
            "So wächst das Zimmer mit den Bedürfnissen des Kindes mit und bietet ihm einen verlässlichen Schutzraum.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Pädagogische Raumkonzepte, Montessori-Prinzipien und kindliche Autonomie",
        intro:
          "Erziehungswissenschaftliche Analyse des Kinderzimmers als vorbereitete Umgebung (B2).",
        paragraphs: [
          [
            "In der modernen Reformpädagogik, insbesondere im Kontext des Ansatzes von Maria Montessori, wird das [das Kinderzimmer, -|Kinderzimmer] als sogenannte vorbereitete Umgebung konzipiert.",
            "Der Raum soll nicht durch ein Überangebot an Plastikspielzeug sensorisch überreizen, sondern durch ausgewählte, haptisch ansprechende Materialien wie hölzerne [die Bausteine (Pl.)|Bausteine] die Fantasie und Selbstwirksamkeit anregen.",
            "Möbel wie ein bodennahes [das Kinderbett, -en|Kinderbett] und ein kindgerechter [der Kinderstuhl, -̈e|Kinderstuhl] ermöglichen dem Kind uneingeschränkte Bewegungsfreiheit ohne permanente Abhängigkeit von elterlicher Assistenz.",
            "Dieses pädagogische Leitmotiv manifestiert sich auch in einer strukturierten [die Spielzeugkiste, -n|Spielzeugkiste], die den Erwerb von Ordnungsstrukturen intuitiv unterstützt.",
          ],
          [
            "Gleichzeitig spiegelt die Zonierung des Raumes den Übergang von spielerischer Exploration zu schulischer Leistungsanforderung wider.",
            "Ein adaptiver, rückenschonender [der Schreibtisch, -e|Schreibtisch] markiert den Bereich formaler Bildung, während Kuschelelemente wie ein geliebter [der Teddybär, -en|Teddybär] als Übergangsobjekte im Sinne der Entwicklungspsychologie emotionale Resilienz stiften.",
            "Ritualisierte Vorlesezeiten anhand von anspruchsvollen [das Bilderbuch, -̈er|Bilderbüchern] stimulieren nicht nur das narrative Textverständnis, sondern festigen die affektive Eltern-Kind-Bindung.",
            "Auf diese Weise konstituiert das Kinderzimmer ein hochgradig sensibles Mikrouniversum ganzheitlicher Persönlichkeitsreifung.",
          ],
        ],
      },
    },
  },
};

const zhPath = "src/data/vocabulary/zu-hause.json";
const zh = JSON.parse(fs.readFileSync(zhPath, "utf8"));

for (const sec of zh.sections) {
  for (const t of sec.topics) {
    if (batch1Data[t.id]) {
      const src = batch1Data[t.id];
      t.description = src.description;
      t.details = src.details;
      t.arabicDescription = src.arabicDescription;
      t.words = src.words;
      t.stories = src.stories;
      console.log("Applied batch 1 to topic:", t.id, "(", t.title, ") -> words:", t.words.length);
    }
  }
}

const res = vocabularyCollectionSchema.safeParse(zh);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to zu-hause.json!");
