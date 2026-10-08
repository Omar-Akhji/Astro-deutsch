import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch1Data: Record<string, any> = {
  autotypen: {
    description: "Limousine, Kombi, Kleinwagen, Cabriolet, SUV, Elektroauto und Transporter.",
    details: "Karosserieformen, Antriebsarten, Reichweite und E-Mobilität (A1–B2)",
    arabicDescription:
      "طرازات وأنواع السيارات (Autotypen): مفردات سيارة السيدان (Limousine)، الكومبي العائلية (Kombi)، سيارة المدينة (Kleinwagen)، المكشوفة (Cabriolet)، الدفع الرباعي (SUV)، والسيارة الكهربائية (Elektroauto)، مع مدى السير واستهلاك الطاقة.",
    words: [
      {
        german: "der Autotyp, -en",
        arabic: "طراز ونوع السيارة",
        english: "car model, vehicle type",
        example:
          "Je nach Bedarf wählt man einen passenden Autotyp für Familie, Stadt oder Gelände.",
      },
      {
        german: "die Limousine, -n",
        arabic: "سيارة الصالون الكلاسيكية (السيدان)",
        english: "sedan, saloon",
        example: "Die viertürige Limousine bietet hohen Reisekomfort auf langen Autobahnfahrten.",
      },
      {
        german: "der Kombi, -s",
        arabic: "السيارة العائلية الممتدة (ستيشن)",
        english: "station wagon, estate car",
        example: "Familien schätzen den praktischen Kombi wegen seines riesigen Ladevolumens.",
      },
      {
        german: "der Kleinwagen, -",
        arabic: "سيارة المدينة الصغيرة الاقتصادية",
        english: "subcompact car, city car",
        example:
          "Mit einem wendigen Kleinwagen findet man selbst in der engsten Innenstadt einen Parkplatz.",
      },
      {
        german: "das Cabriolet, -s",
        arabic: "السيارة المكشوفة بسقف قابل للطي",
        english: "convertible, cabriolet",
        example:
          "Im sonnigen Frühling klappt er das Stoffdach vom Cabriolet auf und genießt den Fahrtwind.",
      },
      {
        german: "der Sportwagen, -",
        arabic: "السيارة الرياضية السريعة",
        english: "sports car",
        example: "Der flache Sportwagen beschleunigt in unter vier Sekunden von null auf hundert.",
      },
      {
        german: "der Geländewagen, -",
        arabic: "سيارة الطرق الوعرة / الدفع الرباعي",
        english: "off-road vehicle, SUV",
        example: "Mit Allradantrieb fährt der robuste Geländewagen sicher über Schlamm und Steine.",
      },
      {
        german: "das Elektroauto, -s",
        arabic: "السيارة الكهربائية الصامتة",
        english: "electric car",
        example:
          "Das moderne Elektroauto fährt lokal emissionsfrei und tankt Strom aus der Steckdose.",
      },
      {
        german: "das Hybridfahrzeug, -e",
        arabic: "السيارة الهجينة (بنزين وكهرباء)",
        english: "hybrid vehicle",
        example:
          "Ein Hybridfahrzeug kombiniert einen Verbrennungsmotor mit einer elektrischen Batterie.",
      },
      {
        german: "der Lieferwagen, -",
        arabic: "شاحنة التوصيل المغلقة (الفان)",
        english: "delivery van",
        example: "Der weiße Lieferwagen des Paketdienstes hält kurz vor der Haustür an.",
      },
      {
        german: "der Kraftstoffverbrauch (Sg.)",
        arabic: "معدل استهلاك الوقود لكل 100 كم",
        english: "fuel consumption",
        example: "Moderne Motoren zeichnen sich durch einen niedrigen Kraftstoffverbrauch aus.",
      },
      {
        german: "die Reichweite, -n",
        arabic: "مدى السير بالشحنة الواحدة",
        english: "range (electric/fuel)",
        example: "Die Reichweite der neuen Batterie reicht für über fünfhundert Kilometer Fahrt.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Welches Auto passt zu uns?",
        intro: "Einfache Sätze über verschiedene Autos, Kleinwagen und Familienautos (A1).",
        paragraphs: [
          [
            "Auf den Straßen in Deutschland fahren viele verschiedene Autos.",
            "Mein Vater fährt einen geräumigen [der Kombi, -s|Kombi], weil wir drei Kinder haben.",
            "Im Kofferraum ist viel Platz für Koffer und Einkäufe.",
            "Meine Tante in der Stadt fährt lieber einen kleinen [der Kleinwagen, -|Kleinwagen].",
          ],
          [
            "Mit dem kleinen Auto kann sie überall leicht parken.",
            "Im Sommer sehe ich oft ein rotes [das Cabriolet, -s|Cabriolet] ohne Dach auf der Straße.",
            "Mein Nachbar hat sich ein neues [das Elektroauto, -s|Elektroauto] gekauft, das fast lautlos fährt.",
            "Jeder Mensch wählt den Wagen, den er im Alltag braucht.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Moderne Antriebe und Autokauf",
        intro: "Elektromobilität, Reichweite und Hybridtechnologie im Vergleich (A2).",
        paragraphs: [
          [
            "Wenn man heute ein neues Auto kaufen möchte, muss man sich gut informieren.",
            "Früher kauften die meisten Leute eine klassische [die Limousine, -n|Limousine] mit Benzin- oder Dieselmotor.",
            "Heute achten viele Käufer besonders auf den niedrigen [der Kraftstoffverbrauch (Sg.)|Kraftstoffverbrauch] und den Klimaschutz.",
            "Deshalb entscheiden sich immer mehr Autofahrer für ein sparsames [das Hybridfahrzeug, -e|Hybridfahrzeug].",
          ],
          [
            "Bei reinen Elektrofahrzeugen ist [die Reichweite, -n|die Reichweite] der Batterie das wichtigste Kriterium.",
            "Wer oft in den Bergen oder auf dem Land unterwegs ist, braucht manchmal einen kräftigen [der Geländewagen, -|Geländewagen] mit Allradantrieb.",
            "Für Handwerker und Botendienste ist der geräumige [der Lieferwagen, -|Lieferwagen] das wichtigste Werkzeug.",
            "Jeder [der Autotyp, -en|Autotyp] hat seine spezifischen Vor- und Nachteile.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Automobilland Deutschland und die Verkehrswende",
        intro: "Tradition der Automobilindustrie und der Übergang zur Elektromobilität (B1).",
        paragraphs: [
          [
            "Deutschland gilt weltweit als Wiege des Automobils, begründet durch Carl Benz und Gottlieb Daimler im späten 19. Jahrhundert.",
            "Über Generationen hinweg galt das eigene Fahrzeug - von der eleganten [die Limousine, -n|Limousine] bis zum praktischen [der Kombi, -s|Kombi] - nicht allein als reines Fortbewegungsmittel, sondern als zentrales Statussymbol der Mittelschicht.",
            "Berühmte Premiumhersteller dominierten den Weltmarkt mit ingenieurtechnischer Präzision und kraftvollen Verbrennungsmotoren.",
          ],
          [
            "Gegenwärtig befindet sich die Branche jedoch im tiefgreifendsten Transformationsprozess ihrer Historie.",
            "Angetrieben durch strenge europäische Emissionsvorgaben investieren die Konzerne massiv in die Elektrifizierung: [das Elektroauto, -s|Das Elektroauto] hat die Nische längst verlassen.",
          ],
          [
            "Dennoch debattieren Konsumenten weiterhin über praktische Herausforderungen: Insbesondere [die Reichweite, -n|die Reichweite] im Winter und die lückenlose Verfügbarkeit von Schnellladesäulen auf Langstrecken beeinflussen Kaufentscheidungen nachhaltig.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Lebenszyklusanalysen, Traktionsbatterien und Antriebstopologien",
        intro:
          "Well-to-Wheel-Analysen, Batteriezellchemie und struktureller Wandel der Fahrzeugarchitektur (B2).",
        paragraphs: [
          [
            "Die vergleichende Bewertung automobiler Antriebsstränge erfordert eine ganzheitliche Lebenszyklusanalyse (Life Cycle Assessment, LCA) vom Rohstoffabbau bis zum Recycling.",
            "Während konventionelle Verbrenner bei hohem [der Kraftstoffverbrauch (Sg.)|Kraftstoffverbrauch] kontinuierlich CO2 emittieren, verlagert sich die Umweltlast beim [das Elektroauto, -s|Elektroauto] primär in die energieintensive Vorkette der Kathodenfertigung (NMC- oder LFP-Zellen).",
            "Erst nach einer Amortisationsstrecke von ca. 50.000 bis 80.000 Kilometern unter Nutzung des europäischen Strommixes erzielt der elektrische Antriebstrang einen signifikanten ökologischen Nettonutzen.",
          ],
          [
            "Gleichzeitig verändert der Wegfall sperriger Verbrennungsmotoren die Karosseriekonstruktion grundlegend: Sogenannte 'Skateboard-Plattformen' mit tief im Unterboden platziertem Akkupaket optimieren den Schwerpunkt und maximieren das Raumangebot selbst bei kompakten Karosserien.",
          ],
          [
            "Diese disruptive Neudefinition von Fahrzeugarchitektur zwingt traditionelle OEMs zu radikaler Software- und Plattformstandardisierung, um im globalen Wettbewerb zu bestehen.",
          ],
        ],
      },
    },
  },
  das_auto_aussenansicht: {
    description:
      "Motorhaube, Kofferraum, Windschutzscheibe, Scheinwerfer, Reifen, Felgen und Blinker.",
    details: "Karosserieteile, Beleuchtung, Sicherheitsglas und Fahrzeuginspektion (A1–B2)",
    arabicDescription:
      "المظهر الخارجي للسيارة (Das Auto - Außenansicht): مفردات غطاء المحرك (Motorhaube)، صندوق الأمتعة (Kofferraum)، الزجاج الأمامي (Windschutzscheibe)، مساحات الزجاج (Scheibenwischer)، المصابيح (Scheinwerfer)، الإطارات (Reifen)، لوحة الأرقام (Kennzeichen)، والغمازات (Blinker).",
    words: [
      {
        german: "die Motorhaube, -n",
        arabic: "غطاء المحرك (الكابوت)",
        english: "hood, bonnet",
        example:
          "Der Mechaniker öffnet die Motorhaube, um das Motoröl und das Kühlwasser zu kontrollieren.",
      },
      {
        german: "der Kofferraum, -̈e",
        arabic: "صندوق الأمتعة الخلفي (الشنطة)",
        english: "trunk, boot",
        example:
          "Vor der Urlaubsfahrt verstauen wir vier schwere Koffer sicher im geräumigen Kofferraum.",
      },
      {
        german: "die Windschutzscheibe, -n",
        arabic: "الزجاج الأمامي للسيارة",
        english: "windshield, windscreen",
        example:
          "Ein kleiner Steinschlag auf der Autobahn hat einen Riss in der Windschutzscheibe verursacht.",
      },
      {
        german: "der Scheibenwischer, -",
        arabic: "مساحة الزجاج الأمامي",
        english: "windshield wiper",
        example: "Bei starkem Gewitterregen läuft der Scheibenwischer auf höchster Stufe.",
      },
      {
        german: "der Scheinwerfer, -",
        arabic: "المصباح الأمامي للسيارة",
        english: "headlight",
        example: "Helle LED-Scheinwerfer leuchten die dunkle Landstraße nachts optimal aus.",
      },
      {
        german: "das Rücklicht, -er",
        arabic: "المصباح الخلفي الأحمر",
        english: "tail light, rear light",
        example: "Wenn der Fahrer auf die Bremse tritt, leuchtet das rote Rücklicht hell auf.",
      },
      {
        german: "der Außenspiegel, -",
        arabic: "المرآة الجانبية الخارجية",
        english: "side mirror, wing mirror",
        example:
          "Vor dem Spurwechsel muss man kurz in den Außenspiegel blicken und den Schulterblick machen.",
      },
      {
        german: "der Autoreifen, -",
        arabic: "إطار السيارة (الكاوتشوك)",
        english: "car tire, tyre",
        example:
          "Im Oktober wechselt man in Deutschland von Sommerreifen auf winterfeste Autoreifen.",
      },
      {
        german: "die Felge, -n",
        arabic: "جنط العجلة المعدني",
        english: "wheel rim",
        example:
          "Silbern glänzende Alufelgen verleihen dem Wagen ein sportliches Erscheinungsbild.",
      },
      {
        german: "die Stoßstange, -n",
        arabic: "ممتص الصدمات (الإكصدام)",
        english: "bumper",
        example:
          "Beim Einparken hat er versehentlich mit der Stoßstange einen kleinen Pfosten berührt.",
      },
      {
        german: "das Kennzeichen, -",
        arabic: "لوحة أرقام تسجيل السيارة",
        english: "license plate, number plate",
        example:
          "An den ersten Buchstaben auf dem Kennzeichen erkennt man die Stadt der Zulassung.",
      },
      {
        german: "der Blinker, -",
        arabic: "غماز ومؤشر تغيير الاتجاه",
        english: "indicator, turn signal",
        example: "Vor dem Abbiegen nach rechts muss man rechtzeitig den Blinker setzen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Unser Auto von außen",
        intro: "Einfache Sätze über Reifen, Kofferraum, Lampen und Scheibenwischer (A1).",
        paragraphs: [
          [
            "Unser Auto steht draußen vor dem Haus.",
            "Vor der Fahrt packe ich zwei große Taschen in [der Kofferraum, -̈e|den Kofferraum].",
            "Mein Vater prüft, ob die vier [der Autoreifen, -|Autoreifen] genug Luft haben.",
            "Die schwarzen Reifen sitzen fest auf einer silbernen [die Felge, -n|Felge].",
          ],
          [
            "Vorne am Auto leuchtet ein heller [der Scheinwerfer, -|Scheinwerfer].",
            "Wenn es regnet, schalte ich [der Scheibenwischer, -|den Scheibenwischer] an, um gut durch [die Windschutzscheibe, -n|die Windschutzscheibe] zu sehen.",
            "Bevor mein Vater abbiegt, setzt er immer [der Blinker, -|den Blinker].",
            "So fahren wir sicher und kommen gut an.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fahrzeugcheck vor der Reise",
        intro: "Kontrolle von Beleuchtung, Außenspiegeln und Kennzeichen vor der Fahrt (A2).",
        paragraphs: [
          [
            "Vor einer langen Urlaubsfahrt machen wir immer eine gründliche Inspektion rund um das Auto.",
            "Mein Vater öffnet [die Motorhaube, -n|die Motorhaube], um den Ölstand und das Wischwasser nachzufüllen.",
            "Danach prüfen wir alle Lampen: Vorne die Scheinwerfer und hinten das rote [das Rücklicht, -er|Rücklicht].",
            "Beide Seiten müssen einwandfrei leuchten, damit andere Autofahrer uns im Dunkeln rechtzeitig erkennen.",
          ],
          [
            "Ich stelle [der Außenspiegel, -|den Außenspiegel] auf der Beifahrerseite so ein, dass ich den toten Winkel gut sehen kann.",
            "Vorne und hinten an der [die Stoßstange, -n|Stoßstange] kontrollieren wir, ob das amtliche [das Kennzeichen, -|Kennzeichen] sauber und lesbar ist.",
            "Wenn alle Teile der Karosserie in Ordnung sind, kann die Fahrt entspannt beginnen.",
            "Sicherheit hat im Straßenverkehr immer oberste Priorität.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Fahrzeugsicherheit und die Hauptuntersuchung beim TÜV",
        intro: "Kriterien der Verkehrssicherheit, Reifenwechsel nach Faustformel 'O bis O' (B1).",
        paragraphs: [
          [
            "In Deutschland unterliegt jedes Kraftfahrzeug regelmäßigen strengen Sicherheitsprüfungen durch Prüforganisationen wie den TÜV oder die DEKRA.",
            "Bei der Hauptuntersuchung wird die gesamte Außenhaut des Wagens akribisch inspiziert: Die Prüfer achten darauf, dass [die Windschutzscheibe, -n|die Windschutzscheibe] frei von Rissen im Sichtfeld ist und dass [der Scheibenwischer, -|die Scheibenwischer] schlierenfrei wischen.",
          ],
          [
            "Besondere Relevanz besitzt der Zustand der Bereifung: In Deutschland gilt die gesetzliche Mindestprofiltiefe von 1,6 Millimetern, wenngleich Experten mindestens 4 Millimeter für Winterreifen empfehlen.",
            "Viele Autofahrer orientieren sich an der bekannten Faustformel 'von O bis O' - von Oktober bis Ostern - für den jahreszeitlichen Wechsel auf wintertaugliche [der Autoreifen, -|Autoreifen].",
          ],
          [
            "Auch moderne Beleuchtungssysteme wie Matrix-LED-[der Scheinwerfer, -|Scheinwerfer], die Gegenverkehr automatisch ausblenden, müssen exakt justiert sein, um Blendeffekte auszuschließen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Aerodynamischer cw-Wert, Verbundsicherheitsglas und Crash-Strukturen",
        intro:
          "Aerodynamische Strömungsmechanik, Fußgängerschutz an Stoßstangen und Scheibentechnologie (B2).",
        paragraphs: [
          [
            "Das Exterieur-Design moderner Fahrzeuge ist das Ergebnis eines hochkomplexen Kompromisses zwischen Aerodynamik, Fußgängerschutzrichtlinien und gesetzlichen Beleuchtungsvorgaben.",
            "Der Luftwiderstandsbeiwert (cw-Wert) wird durch die Neigung der [die Windschutzscheibe, -n|Windschutzscheibe], bündig abschließende Fugen und strömungsgünstig geformte [der Außenspiegel, -|Außenspiegel] minimiert, um den Energieverbrauch bei Autobahngeschwindigkeiten signifikant zu senken.",
          ],
          [
            "Aus passiver Sicherheitsperspektive fungiert [die Stoßstange, -n|die Stoßstange] gemeinsam mit der gezielt deformierbaren [die Motorhaube, -n|Motorhaube] als energieabsorbierende Knautschzone.",
            "Pyrotechnische Haubenaktivatoren heben bei einer Fußgängerkollision die Haube binnen Millisekunden um mehrere Zentimeter an, um einen harten Aufprall auf den starren Motorblock zu verhindern.",
          ],
          [
            "Die Scheiben wiederum bestehen aus Verbundsicherheitsglas (VSG) mit einer reißfesten Polyvinylbutyral-Folie (PVB), welche verhindert, dass Glasfragmente bei einem Steinschlag den Fahrgastraum penetrieren.",
          ],
        ],
      },
    },
  },
  das_auto_innenausstattung: {
    description:
      "Lenkrad, Armaturenbrett, Sicherheitsgurt, Airbag, Pedale, Gangschaltung und Handbremse.",
    details: "Cockpit, Bedienelemente, Fahrerassistenzsysteme und passive Sicherheit (A1–B2)",
    arabicDescription:
      "المقصورة والتجهيزات الداخلية للسيارة (Das Auto - Innenausstattung): مفردات المقود (Lenkrad)، التابلوه (Armaturenbrett)، حزام الأمان (Sicherheitsgurt)، الوسادة الهوائية (Airbag)، الدواسات (Pedale)، ناقل الحركة (Gangschaltung)، وفرامل اليد، مع قواعد الأمان والربط الإلزامي للحزام.",
    words: [
      {
        german: "das Lenkrad, -̈er",
        arabic: "عجلة القيادة (المقود/الدركسيون)",
        english: "steering wheel",
        example:
          "Mit beiden Händen am Lenkrad steuert die Fahrerin den Wagen sicher durch die Kurve.",
      },
      {
        german: "das Armaturenbrett, -er",
        arabic: "لوحة العدادات والتابلوه في قمرة القيادة",
        english: "dashboard",
        example:
          "Auf dem digitalen Armaturenbrett sieht man Geschwindigkeit, Drehzahl und Navigation.",
      },
      {
        german: "der Sicherheitsgurt, -e",
        arabic: "حزام الأمان الواقي",
        english: "seat belt",
        example: "Der Sicherheitsgurt rettet bei einem Verkehrsunfall nachweislich Menschenleben.",
      },
      {
        german: "der Airbag, -s",
        arabic: "الوسادة الهوائية للأمان",
        english: "airbag",
        example:
          "Bei einem Frontalaufprall öffnet sich der Airbag im Lenkrad in wenigen Millisekunden.",
      },
      {
        german: "das Gaspedal, -e",
        arabic: "دواسة الوقود (البنزين)",
        english: "accelerator, gas pedal",
        example: "Wenn man das Gaspedal sanft durchtritt, beschleunigt der Motor gleichmäßig.",
      },
      {
        german: "die Bremse, -n",
        arabic: "المكابح / الفرامل",
        english: "brake",
        example: "Vor der roten Ampel tritt der Fahrer rechtzeitig kräftig auf die Bremse.",
      },
      {
        german: "die Kupplung, -en",
        arabic: "القابض (الدبرياج) في سيارات الغيار اليدوي",
        english: "clutch",
        example: "Beim manuellen Schalten tritt man mit dem linken Fuß ganz auf die Kupplung.",
      },
      {
        german: "die Gangschaltung, -en",
        arabic: "ناقل الحركة ومبدل السرعات (الفتيس)",
        english: "gear shift, transmission",
        example:
          "Moderne Autos haben entweder eine manuelle Gangschaltung oder ein Automatikgetriebe.",
      },
      {
        german: "die Handbremse, -n",
        arabic: "فرامل اليد للتوقف",
        english: "handbrake, parking brake",
        example: "Am steilen Hang zieht man nach dem Parken die Handbremse fest an.",
      },
      {
        german: "der Rückspiegel, -",
        arabic: "المرآة الداخلية للرؤية الخلفية",
        english: "rearview mirror",
        example: "Im Rückspiegel beobachtet der Fahrer den nachfolgenden Verkehr hinter sich.",
      },
      {
        german: "anschnallen (schnallte an, hat angeschnallt)",
        arabic: "يربط حزام الأمان",
        english: "to buckle up, fasten seatbelt",
        example: "Bitte alle einsteigen und sich sofort vorschriftsmäßig anschnallen!",
      },
      {
        german: "der Fahrersitz, -e",
        arabic: "مقعد السائق المريح",
        english: "driver's seat",
        example:
          "Der ergonomische Fahrersitz lässt sich elektrisch in Höhe und Neigung verstellen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Im Auto sitzen und losfahren",
        intro: "Einfache Sätze über Lenkrad, Anschnallen, Gas und Bremse (A1).",
        paragraphs: [
          [
            "Ich steige ins Auto ein und setze mich auf [der Fahrersitz, -e|den Fahrersitz].",
            "Zuerst muss ich mich mit dem Gurt sicher [anschnallen (schnallte an, hat angeschnallt)|anschnallen].",
            "Jeder Passagier braucht einen festen [der Sicherheitsgurt, -e|Sicherheitsgurt].",
            "Ich nehme [das Lenkrad, -̈er|das Lenkrad] mit beiden Händen fest in den Griff.",
          ],
          [
            "Vor mir leuchten bunte Lampen auf dem [das Armaturenbrett, -er|Armaturenbrett].",
            "Mit dem rechten Fuß drücke ich vorsichtig auf [das Gaspedal, -e|das Gaspedal].",
            "Wenn ein Kind über die Straße geht, trete ich sofort auf [die Bremse, -n|die Bremse].",
            "Ich schaue in den [der Rückspiegel, -|Rückspiegel] und fahre vorsichtig los.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fahrstunde: Schalten und Parken",
        intro: "Fahrschulerfahrungen mit Kupplung, Gangschaltung und Handbremse (A2).",
        paragraphs: [
          [
            "Heute habe ich meine fünfte Fahrstunde in der Fahrschule.",
            "Mein Fahrlehrer erklärt mir die Pedale: Links ist [die Kupplung, -en|die Kupplung], in der Mitte die Bremse und rechts das Gas.",
            "Wenn ich den Gang wechseln will, muss ich die Kupplung ganz durchdrücken und [die Gangschaltung, -en|die Gangschaltung] bedienen.",
            "Am Anfang war das Schalten gar nicht so einfach, aber jetzt klappt es schon viel besser.",
          ],
          [
            "Am Ende der Stunde üben wir das Parken an einer steilen Bergstraße.",
            "Wenn der Wagen steht, schalte ich in den Leerlauf und ziehe [die Handbremse, -n|die Handbremse] fest an.",
            "Für den Ernstfall schützt uns ein moderner [der Airbag, -s|Airbag] im Lenkrad und in den Türen.",
            "Mit guter Konzentration fühle ich mich hinter dem Steuer von Tag zu Tag sicherer.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Cockpit-Ergonomie und die Evolution der passiven Fahrzeugsicherheit",
        intro: "Einführung der Gurtpflicht in Deutschland und moderne Cockpit-Displays (B1).",
        paragraphs: [
          [
            "Die historische Durchsetzung der Anschnallpflicht in der Bundesrepublik Deutschland im Jahr 1976 löste seinerzeit hitzige gesellschaftliche Debatten über bürgerliche Freiheitsrechte aus.",
            "Heute bezweifelt niemand mehr den lebensrettenden Effekt: Der Dreipunkt-[der Sicherheitsgurt, -e|Sicherheitsgurt] in Kombination mit dem pyrotechnischen Gurtstraffer und dem [der Airbag, -s|Airbag] senkte die Zahl der Verkehrstoten drastisch.",
            "Es ist heute zur unbewussten Selbstverständlichkeit geworden, sich vor jeder Fahrt diszipliniert [anschnallen (schnallte an, hat angeschnallt)|anzuschnallen].",
          ],
          [
            "Parallel dazu hat das Cockpit eine futuristische Verwandlung vollzogen.",
            "Wo früher analoge Rundinstrumente dominierten, erstreckt sich heute über das gesamte [das Armaturenbrett, -er|Armaturenbrett] eine digitale Displaylandschaft mit Touchscreens und Head-up-Projektion.",
          ],
          [
            "Dennoch bleiben haptische Bedienelemente am [das Lenkrad, -̈er|Lenkrad] unerlässlich, damit der Fahrer die Augen auf der Straße halten kann und nicht durch verschachtelte Menüs abgelenkt wird.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Sensordatenfusion, Human-Machine-Interface (HMI) und autonome Rückhaltesysteme",
        intro:
          "Informatik der Innenraumkameras, CAN-Bus-Architektur und kognitive Fahrerentlastung (B2).",
        paragraphs: [
          [
            "Das zeitgenössische Human-Machine-Interface (HMI) im automobilen Innenraum basiert auf biomechanischen und kognitionspsychologischen Paradigmen.",
            "Auf dem [das Armaturenbrett, -er|Armaturenbrett] fusionieren hochauflösende OLED-Panels Echtzeitinformationen aus Kameras, Lidar- und Radarsensoren zu einem kohärenten Umgebungsmodell.",
            "Infrarotkameras an der Lenksäule überwachen dabei kontinuierlich den Lidschlag und die Kopfhaltung des Fahrers auf dem [der Fahrersitz, -e|Fahrersitz], um Mikroschlaf und kognitive Überlastung frühzeitig zu detektieren.",
          ],
          [
            "Die Auslösung passiver Sicherheitssysteme gehorcht hochgradig deterministischen Echtzeitprotokollen.",
            "Beschleunigungssensoren im Fahrzeugtunnel analysieren den Crash-Impuls: Binnen 15 Millisekunden zündet das Steuergerät die pyrotechnischen Treibsätze, um den [der Airbag, -s|Airbag] mit Stickstoffgas zu expandieren, während adaptive Gurtkraftbegrenzer die Thoraxbelastung des Insassen auf verträgliche Werte drosseln.",
          ],
          [
            "Diese nahtlose Symbiose aus Sensorik, Aktuatorik und Ergonomie repräsentiert den State of the Art intelligenter Fahrzeugarchitekturen.",
          ],
        ],
      },
    },
  },
  die_tankstelle: {
    description:
      "Tanken, Zapfsäule, Benzin, Diesel, Ladesäule, Reifendruck, Waschanlage und Kraftstoff.",
    details: "Treibstoffe, Elektroladesäulen, Bezahlvorgänge und Tankstellen-Shops (A1–B2)",
    arabicDescription:
      "محطة الوقود (Die Tankstelle): مفردات التزود بالوقود (tanken)، مضخة الوقود (Zapfsäule)، البنزين (Benzin)، الديزل (Diesel)، محطة شحن السيارات الكهربائية (Ladesäule)، ضغط الإطارات (Reifendruck)، ومغسلة السيارات (Waschanlage).",
    words: [
      {
        german: "die Tankstelle, -n",
        arabic: "محطة الوقود / محطة البنزين",
        english: "gas station, petrol station",
        example: "An der Autobahn-Tankstelle halten viele Reisende für eine kurze Kaffeepause an.",
      },
      {
        german: "tanken (tankte, hat getankt)",
        arabic: "يعبئ وقوداً في خزان السيارة",
        english: "to refuel, get gas",
        example: "Bevor wir in die Ferien aufbrechen, müssen wir den Wagen noch voll tanken.",
      },
      {
        german: "die Zapfsäule, -n",
        arabic: "مضخة تزويد الوقود",
        english: "fuel pump, gas pump",
        example:
          "Er fährt langsam an die freie Zapfsäule Nummer vier heran und stellt den Motor ab.",
      },
      {
        german: "der Kraftstoff, -e",
        arabic: "الوقود / المحروقات",
        english: "fuel",
        example: "Die Preise für fossilen Kraftstoff schwanken im Tagesverlauf erheblich.",
      },
      {
        german: "das Benzin (Sg.)",
        arabic: "البنزين",
        english: "petrol, gasoline",
        example: "Super 95 ist das am häufigsten getankte bleifreie Benzin in Deutschland.",
      },
      {
        german: "der Diesel (Sg.)",
        arabic: "وقود الديزل (السولار)",
        english: "diesel",
        example: "Für Langstreckenfahrten wählen Vielfahrer oft ein Auto, das mit Diesel fährt.",
      },
      {
        german: "die Ladesäule, -n",
        arabic: "عمود ومحطة شحن السيارات الكهربائية",
        english: "charging station, charging point",
        example:
          "An der Schnellladesäule lädt der Akku des Elektroautos in dreißig Minuten auf achtzig Prozent.",
      },
      {
        german: "aufladen (lud auf, hat aufgeladen)",
        arabic: "يشحن البطارية بالكهرباء",
        english: "to charge, recharge",
        example: "Über Nacht kann man die Batterie bequem an der heimischen Wallbox aufladen.",
      },
      {
        german: "der Reifendruck (Sg.)",
        arabic: "ضغط هواء الإطارات",
        english: "tire pressure",
        example: "An der Servicestation prüft sie mit dem Manometer den richtigen Reifendruck.",
      },
      {
        german: "die Waschanlage, -n",
        arabic: "مغسلة السيارات الآلية",
        english: "car wash",
        example:
          "Nach dem Winter befreit die automatische Waschanlage das Auto von Salz und Schmutz.",
      },
      {
        german: "der Tankdeckel, -",
        arabic: "غطاء فتحة خزان الوقود",
        english: "fuel cap, gas cap",
        example: "Nach dem Betanken dreht man den Tankdeckel zu, bis er hörbar einrastet.",
      },
      {
        german: "der Literpreis, -e",
        arabic: "سعر اللتر الواحد",
        english: "price per liter",
        example:
          "Auf der großen Anzeigetafel wird der aktuelle Literpreis für jede Sorte angezeigt.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "An der Tankstelle anhalten",
        intro: "Einfache Sätze über Tanken, Benzin, Bezahlen und Waschanlage (A1).",
        paragraphs: [
          [
            "Die rote Lampe im Auto leuchtet: Der Tank ist fast leer.",
            "Mein Vater fährt zur nächsten [die Tankstelle, -n|Tankstelle].",
            "Er hält an einer freien [die Zapfsäule, -n|Zapfsäule] an und öffnet [der Tankdeckel, -|den Tankdeckel].",
            "Er nimmt den grünen Schlauch, um [das Benzin (Sg.)|Benzin] in das Auto zu füllen.",
          ],
          [
            "Wir müssen zwanzig Liter [tanken (tankte, hat getankt)|tanken].",
            "Danach geht mein Vater in den Laden und bezahlt an der Kasse.",
            "Draußen fahren wir noch durch [die Waschanlage, -n|die Waschanlage], damit das Auto sauber wird.",
            "Jetzt ist das Auto vollgetankt und sauber für die Weiterfahrt.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Strom laden oder Benzin tanken?",
        intro: "Moderne Tankstellen mit Schnellladestationen und Reifendruckprüfung (A2).",
        paragraphs: [
          [
            "Früher gab es an Tankstellen nur Benzin und [der Diesel (Sg.)|Diesel].",
            "Heute sieht man an modernen Raststätten immer mehr Parkplätze mit einer leistungsstarken [die Ladesäule, -n|Ladesäule].",
            "Dort kann man sein Elektroauto mit einem dicken Ladekabel in kurzer Zeit [aufladen (lud auf, hat aufgeladen)|aufladen].",
            "Während das Auto lädt, trinken die Fahrer im Bistro einen Kaffee oder essen einen Snack.",
          ],
          [
            "Auf der Anzeigetafel prüft mein Onkel immer genau [der Literpreis, -e|den Literpreis], der abends meist günstiger ist als morgens.",
            "Vor der Weiterfahrt kontrollieren wir auch gleich [der Reifendruck (Sg.)|den Reifendruck] an der Luftstation.",
            "Jeder [der Kraftstoff, -e|Kraftstoff] erfordert Aufmerksamkeit beim richtigen Einfüllen.",
            "Gepflegte Fahrzeuge verbrauchen weniger Energie und fahren sicherer.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom reinen Spritverkauf zum modernen Mobilitäts- und Nahversorgungszentrum",
        intro:
          "Wandel der Tankstellenbranche und dynamische Preisgestaltung über Markttransparenzstellen (B1).",
        paragraphs: [
          [
            "Die Tankstelle hat in den vergangenen Jahrzehnten eine fundamentale Wandlung vom reinen Kraftstoffumschlagplatz zum multifunktionalen Nahversorgungszentrum durchlaufen.",
            "Da die Margen beim reinen Verkauf von [das Benzin (Sg.)|Benzin] und [der Diesel (Sg.)|Diesel] im Centbereich liegen, erwirtschaften Tankstellenbetreiber den Großteil ihres Gewinns im angeschlossenen Bistro- und Shopgeschäft.",
            "Für viele Berufstätige ist die 24-Stunden-[die Tankstelle, -n|Tankstelle] am Sonntag der Retter in der Not für frische Brötchen und Snacks.",
          ],
          [
            "Zugleich unterliegt der deutsche Kraftstoffmarkt einer hochdynamischen Preispolitik.",
            "Dank der staatlichen Markttransparenzstelle für Kraftstoffe können Autofahrer per Smartphone-App sekundengenau vergleichen, welche [die Zapfsäule, -n|Zapfsäule] im Umkreis den günstigsten [der Literpreis, -e|Literpreis] offeriert.",
          ],
          [
            "Im Zuge der Mobilitätswende rüsten Mineralölkonzerne ihre Stationen massiv mit High-Power-Chargern auf, an denen Nutzer ihre Elektrofahrzeuge mit bis zu 350 Kilowatt Ladeleistung [aufladen (lud auf, hat aufgeladen)|aufladen] können.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Thermische Ladeleistung, Ladekurven (CCS) und E-Fuels im Energiesystem",
        intro:
          "Thermodynamik der Schnellladung, Combined Charging System (CCS) und Defossilierung (B2).",
        paragraphs: [
          [
            "Die infrastrukturelle Transformation an modernen Energiehubs manifestiert sich im Übergang von chemischen Energieträgern zu hocheffizienten Gleichstrom-Schnellladungen (DC).",
            "An einer modernen [die Ladesäule, -n|Ladesäule] nach dem europäischen CCS-Standard (Combined Charging System) fließen bei 800-Volt-Architekturen Ströme von bis zu 500 Ampere.",
            "Dies erfordert flüssigkeitsgekühlte Ladekabel und ein hochkomplexes Thermomanagement im Akkupack des Fahrzeugs, um Dendritenbildung an den Graphitanoden beim schnellen [aufladen (lud auf, hat aufgeladen)|Aufladen] zu verhindern.",
          ],
          [
            "Im Bereich fossiler Brennstoffe wiederum wird intensiv an synthetischen E-Fuels und Biokraftstoffen der zweiten Generation geforscht.",
            "Diese klimaneutralen Kohlenwasserstoffe könnten es ermöglichen, konventionelle Verbrenner ohne Modifikation der bestehenden Zapfinfrastruktur weiterzubetreiben.",
          ],
          [
            "Damit avanciert die Station der Zukunft zum komplexen Schnittstellenknotenpunkt zwischen Stromnetzstabilität, Pufferbatteriespeichern und alternativer Kraftstoffdistribution.",
          ],
        ],
      },
    },
  },
  der_bus: {
    description:
      "Linienbus, Reisebus, Bushaltestelle, Busfahrer, Fahrkarte, Fahrplan und Umsteigen.",
    details:
      "Öffentlicher Nahverkehr (ÖPNV), Taktung, Ticketentwertung und Barrierefreiheit (A1–B2)",
    arabicDescription:
      "الحافلة والنقل العام (Der Bus): مفردات حافلة المدينة (Linienbus)، حافلة السفر (Reisebus)، موقف الحافلة (Bushaltestelle)، سائق الحافلة (Busfahrer)، تذكرة الركوب (Fahrkarte)، جدول المواعيد (Fahrplan)، ركوب ونزول وتبديل الحافلة (umsteigen).",
    words: [
      {
        german: "der Linienbus, -se",
        arabic: "حافلة النقل الداخلي المنتظمة",
        english: "city bus, scheduled bus",
        example: "Der Linienbus fährt im Zehn-Minuten-Takt direkt vom Marktplatz zum Hauptbahnhof.",
      },
      {
        german: "der Reisebus, -se",
        arabic: "حافلة السفر الطويل المريحة",
        english: "tour coach, long-distance bus",
        example: "Mit einem modernen Reisebus fährt die Reisegruppe über Nacht nach Italien.",
      },
      {
        german: "die Bushaltestelle, -n",
        arabic: "موقف ومحطة الحافلة",
        english: "bus stop",
        example: "An der überdachten Bushaltestelle warten die Schulkinder im Regen auf den Bus.",
      },
      {
        german: "der Busfahrer, -",
        arabic: "سائق الحافلة",
        english: "bus driver",
        example:
          "Die freundliche Busfahrerin steuert den langen Gelenkbus souverän durch den Berufsverkehr.",
      },
      {
        german: "die Fahrkarte, -n",
        arabic: "تذكرة الركوب",
        english: "bus ticket, transit ticket",
        example:
          "Mit dem Deutschlandticket kann man alle Linienbusse im ganzen Land flexibel nutzen.",
      },
      {
        german: "einsteigen (stieg ein, ist eingestiegen)",
        arabic: "يركب في الحافلة أو القطار",
        english: "to get on, board",
        example: "Bitte lassen Sie zuerst die Fahrgäste aussteigen, bevor Sie vorne einsteigen!",
      },
      {
        german: "aussteigen (stieg aus, ist ausgestiegen)",
        arabic: "ينزل من الحافلة",
        english: "to get off, alight",
        example: "An der nächsten Station müssen wir aussteigen und den Weg zu Fuß fortsetzen.",
      },
      {
        german: "umsteigen (stieg um, ist umgestiegen)",
        arabic: "يبدل الحافلة ويغير خط السير",
        english: "to transfer, change lines",
        example: "Am zentralen Busbahnhof muss man in die Linie 5 umsteigen.",
      },
      {
        german: "der Fahrplan, -̈e",
        arabic: "جدول المواعيد ومخطط الرحلات",
        english: "timetable, schedule",
        example:
          "Auf dem digitalen Fahrplan am Display sieht man die genaue Abfahrtszeit auf die Minute.",
      },
      {
        german: "entwerten (entwertete, hat entwertet)",
        arabic: "يختم ويثقب التذكرة في جهاز التحقق",
        english: "to validate, stamp (ticket)",
        example: "Man muss Einzelfahrscheine im Bus am Stempelautomaten sofort entwerten.",
      },
      {
        german: "der Fahrgast, -̈e",
        arabic: "الراكب / المسافر في وسائل النقل",
        english: "passenger",
        example:
          "Älteren Menschen und Schwangeren bietet jeder höfliche Fahrgast seinen Sitzplatz an.",
      },
      {
        german: "die Verspätung, -en",
        arabic: "التأخير عن موعد الوصول",
        english: "delay",
        example: "Wegen einer großen Baustelle hatte der Bus heute fünfzehn Minuten Verspätung.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Mit dem Bus zur Schule",
        intro: "Einfache Sätze über Bushaltestelle, Ticket, Einsteigen und Aussteigen (A1).",
        paragraphs: [
          [
            "Jeden Morgen gehe ich um halb acht zu Fuß zur [die Bushaltestelle, -n|Bushaltestelle].",
            "Dort warte ich fünf Minuten, bis der große [der Linienbus, -se|Linienbus] kommt.",
            "Ich habe meine [die Fahrkarte, -n|Fahrkarte] schon in der Hand.",
            "Wenn die Tür aufgeht, darf ich vorne [einsteigen (stieg ein, ist eingestiegen)|einsteigen].",
          ],
          [
            "Ich grüße [der Busfahrer, -|den Busfahrer] freundlich und suche mir einen freien Platz.",
            "Im Bus sitzen viele Schüler und andere [der Fahrgast, -̈e|Fahrgäste].",
            "Nach vier Stationen drücke ich den roten Knopf und werde [aussteigen (stieg aus, ist ausgestiegen)|aussteigen].",
            "Der Bus ist pünktlich und bringt mich sicher zur Schule.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Unterwegs im öffentlichen Nahverkehr",
        intro: "Fahrplan lesen, Ticket entwerten und Buswechsel am Hauptbahnhof (A2).",
        paragraphs: [
          [
            "Wenn ich in einer fremden Stadt unterwegs bin, nutze ich am liebsten den Bus.",
            "An der Station schaue ich zuerst auf [der Fahrplan, -̈e|den Fahrplan], um die richtige Linie zu finden.",
            "Wenn man eine Papierfahrkarte kauft, muss man sie direkt nach dem Einstieg im Gerät [entwerten (entwertete, hat entwertet)|entwerten].",
            "Wer ohne gültiges Ticket fährt, muss eine empfindliche Strafe bezahlen.",
          ],
          [
            "Am zentralen Busbahnhof muss ich heute in die Linie 12 [umsteigen (stieg um, ist umgestiegen)|umsteigen].",
            "Wegen des starken Berufsverkehrs hat mein Bus leider fünf Minuten [die Verspätung, -en|Verspätung].",
            "Für weite Reisen über das Wochenende buchen wir gern einen günstigen [der Reisebus, -se|Reisebus] mit bequemen Sitzen.",
            "Busfahren schont die Umwelt und spart teure Parkgebühren in der Innenstadt.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Deutschlandticket und die Renaissance des Busverkehrs",
        intro: "ÖPNV-Strukturen, Taktfahrpläne und die Reform des Tarifdschungels (B1).",
        paragraphs: [
          [
            "Der öffentliche Personennahverkehr (ÖPNV) in Deutschland hat durch die Einführung des bundesweiten Deutschlandtickets eine historische Vereinfachung erfahren.",
            "Früher scheiterten viele Reisende am unübersichtlichen Tarifdschungel der regionalen Verkehrsverbünde, wo jede einzelne [die Fahrkarte, -n|Fahrkarte] minutiös auf Waben und Zonen abgestimmt sein musste.",
            "Heute genügt ein digitales Monatsticket auf dem Smartphone, um bundesweit in jeden [der Linienbus, -se|Linienbus], jede Straßenbahn und jeden Regionalzug einzusteigen.",
          ],
          [
            "Dennoch steht der Busverkehr vor infrastrukturellen Herausforderungen: Insbesondere im ländlichen Raum ist die Taktung oft lückenhaft, sodass Verbindungen nach Schulschluss drastisch abnehmen.",
            "In den Metropolen wiederum sorgen eigene Busspuren dafür, dass [der Fahrgast, -̈e|Fahrgäste] trotz Staus zügig vorankommen.",
          ],
          [
            "Zusätzlich treiben Städte die Umflottung auf batterieelektrische und Wasserstoff-Busse voran, um den innerstädtischen Nahverkehr komplett emissionsfrei zu gestalten.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Netzwerktheorie im ÖPNV, Taktknoten und automatisierte Flottenleitsysteme",
        intro:
          "Integraler Taktfahrplan (ITF), Fahrgastwechselzeiten und intermodale Mobilitätsketten (B2).",
        paragraphs: [
          [
            "Die mathematische Optimierung städtischer Busnetze basiert auf den Prinzipien des Integralen Taktfahrplans (ITF).",
            "Hierbei werden Buslinien so an zentralen Rendezvous-Punkten synchronisiert, dass minimale Umsteigezeiten für jeden [der Fahrgast, -̈e|Fahrgast] gewährleistet sind, ohne dass Überlastungen an der [die Bushaltestelle, -n|Bushaltestelle] entstehen.",
            "Telematikgestützte Rechnergesteuerte Betriebsleitsysteme (RBL) erfassen die GPS-Koordinaten in Echtzeit und beeinflussen Lichtsignalanlagen dynamisch ('ÖPNV-Priorisierung'), um eine unvorhergesehene [die Verspätung, -en|Verspätung] proaktiv abzubauen.",
          ],
          [
            "Ein kritischer Engpassfaktor in der Umlaufplanung ist die Fahrgastwechselzeit: Niederflurfahrzeuge mit stufenlosem Einstieg und breiten Doppeltüren minimieren die Haltestellenaufenthaltszeiten signifikant und garantieren Barrierefreiheit für mobilitätseingeschränkte Personen.",
          ],
          [
            "In Pilotprojekten agieren autonom operierende Minibusse bereits als 'On-Demand'-Zubringer für die 'erste und letzte Meile', was die Grenze zwischen individuellem Taxi und kollektivem Linienverkehr zusehends auflöst.",
          ],
        ],
      },
    },
  },
  das_motorrad: {
    description:
      "Motorrad, Motorroller, Helm, Schutzkleidung, Auspuff, Kurven, Visier und Schräglage.",
    details: "Zweiradmechanik, Fahrphysik, Kurventechnik und passive Schutzbekleidung (A1–B2)",
    arabicDescription:
      "الدراجة النارية (Das Motorrad): مفردات الدراجة النارية (Motorrad)، السكوتر (Motorroller)، الخوذة (Helm)، الملابس الواقية (Schutzkleidung)، العادم (Auspuff)، واقي الوجه (Visier)، وزاوية الميلان في المنعطفات (Schräglage).",
    words: [
      {
        german: "das Motorrad, -̈er",
        arabic: "الدراجة النارية (الموتوسيكل)",
        english: "motorcycle, motorbike",
        example:
          "Im Frühling holt er sein gepflegtes Motorrad aus der Garage für die erste Ausfahrt.",
      },
      {
        german: "der Motorroller, -",
        arabic: "السكوتر الصغير الحركي",
        english: "scooter, motor scooter",
        example:
          "Mit einem wendigen Motorroller flitzt man geschmeidig durch den dichten Stadtverkehr.",
      },
      {
        german: "der Motorradhelm, -e",
        arabic: "خوذة الرأس الواقية للدراجة النارية",
        english: "motorcycle helmet",
        example:
          "Ein stabiler Motorradhelm mit ECE-Prüfsiegel ist gesetzlich vorgeschrieben und schützt den Kopf.",
      },
      {
        german: "die Schutzkleidung (Sg.)",
        arabic: "الملابس الواقية من الجلد والمقاومة للتآكل",
        english: "protective gear, leathers",
        example:
          "Zur Schutzkleidung gehören Lederkombi, verstärkte Stiefel und abriebfeste Handschuhe.",
      },
      {
        german: "der Auspuff, -e",
        arabic: "أنبوب العادم (الشكمان)",
        english: "exhaust, tailpipe",
        example: "Der Auspuff filtert Schadstoffe und dämpft den lauten Knall der Verbrennung.",
      },
      {
        german: "der Gasgriff, -e",
        arabic: "مقبض التحكم بالسرعة في المقود",
        english: "throttle, twist grip",
        example: "Wenn der Biker am rechten Gasgriff dreht, beschleunigt die Maschine kraftvoll.",
      },
      {
        german: "die Kurve, -n",
        arabic: "المنعطف / المنحنى في الطريق",
        english: "curve, bend",
        example: "Motorradfahrer lieben kurvenreiche Bergstraßen mit engen Kurven im Gebirge.",
      },
      {
        german: "das Visier, -e",
        arabic: "واقي الوجه الشفاف في الخوذة",
        english: "visor (helmet)",
        example:
          "Er klappt das getönte Visier herunter, um die Augen vor Wind und Blendung zu schützen.",
      },
      {
        german: "die Motorradkette, -n",
        arabic: "جنزير وسلسلة نقل الحركة بالدراجة",
        english: "drive chain",
        example:
          "Man muss die Motorradkette regelmäßig reinigen und mit speziellem Kettenspray fetten.",
      },
      {
        german: "beschleunigen (beschleunigte, hat beschleunigt)",
        arabic: "يتسارع ويزيد من السرعة",
        english: "to accelerate",
        example: "Auf der freien Landstraße kann die schwere Maschine mühelos beschleunigen.",
      },
      {
        german: "die Schräglage, -n",
        arabic: "زاوية الميلان والانحناء في المنعطف",
        english: "lean angle",
        example:
          "In der Kurve geht der Fahrer in eine kontrollierte Schräglage, um die Fliehkraft auszugleichen.",
      },
      {
        german: "die Bremsscheibe, -n",
        arabic: "قرص الفرامل المعدني",
        english: "brake disc",
        example: "Gelochte Bremsscheiben sorgen für hervorragende Verzögerung selbst bei Nässe.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Eine Motorradfahrt am Wochenende",
        intro: "Einfache Sätze über Motorrad, Helm, Jacke und schnelles Fahren (A1).",
        paragraphs: [
          [
            "Mein Onkel liebt sein schnelles [das Motorrad, -̈er|Motorrad].",
            "Bevor er losfährt, zieht er eine feste Lederjacke und feste Stiefel an.",
            "Er setzt [der Motorradhelm, -e|den Motorradhelm] auf und schließt den Verschluss.",
            "Vor den Augen klappt er das klare [das Visier, -e|Visier] herunter.",
          ],
          [
            "Am Lenker dreht er vorsichtig am [der Gasgriff, -e|Gasgriff] und der Motor startet mit einem tiefen Geräusch.",
            "Die Maschine fährt schnell und kann stark [beschleunigen (beschleunigte, hat beschleunigt)|beschleunigen].",
            "In der Stadt fährt mein Cousin lieber einen kleinen [der Motorroller, -|Motorroller].",
            "Zweiradfahren macht Spaß, aber man muss immer vorsichtig sein.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Sicherheit auf kurvigen Straßen",
        intro: "Kurven fahren, Schutzkleidung und Kettenpflege vor der Tour (A2).",
        paragraphs: [
          [
            "Im Sommer planen mein Bruder und seine Freunde eine Tour durch die Alpen.",
            "Auf den kurvigen Bergstraßen gibt es unzählige enge [die Kurve, -n|Kurven], die man mit Respekt fahren muss.",
            "Beim Motorradfahren gleicht man die Fliehkräfte aus, indem man in eine kontrollierte [die Schräglage, -n|Schräglage] geht.",
            "Wer ohne geprüfte [die Schutzkleidung (Sg.)|Schutzkleidung] fährt, riskiert bei einem Sturz schwerste Verletzungen.",
          ],
          [
            "Vor jeder Tour muss man die Technik überprüfen: Greift die Bremse gut und ist [die Motorradkette, -n|die Motorradkette] sauber gefettet?",
            "Der Auspuff darf nicht manipuliert sein, damit die Maschine die Anwohner nicht durch Lärm belästigt.",
            "Mit guter Vorbereitung und vorausschauender Fahrweise wird jede Tour zu einem unvergesslichen Naturerlebnis.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Faszination Zweirad: Freiheit, Fahrphysik und Sicherheitsbewusstsein",
        intro: "Kultur des Motorradtourismus in Mittelgebirgen und Sicherheitstrainings (B1).",
        paragraphs: [
          [
            "Für viele Biker in Mitteleuropa verkörpert das Fahren auf zwei Rädern das ultimative Gefühl von Freiheit und unmittelbarer Naturverbundenheit.",
            "Beliebte Routen im Schwarzwald, im Harz oder in den Alpen ziehen an sonnigen Wochenenden Tausende Zweirad-Enthusiasten an.",
            "Anders als beim Autofahren ist der Fahrer auf dem [das Motorrad, -̈er|Motorrad] Wind und Wetter direkt ausgesetzt, was eine vollkommene mentale Präsenz erfordert.",
          ],
          [
            "Da Zweiräder über keine schützende Knautschzone verfügen, ist die Investition in zertifizierte [die Schutzkleidung (Sg.)|Schutzkleidung] mit integrierten Protektoren und Airbag-Westen überlebenswichtig.",
            "Ein moderner [der Motorradhelm, -e|Motorradhelm] absorbiert Aufprallenergie und schützt die Halswirbelsäule.",
          ],
          [
            "Immer mehr Motorradfahrer absolvieren zu Saisonbeginn freiwillige Fahrsicherheitstrainings: Dort trainiert man Notbremsungen bei hoher Geschwindigkeit und das richtige Einlenken in unübersichtliche [die Kurve, -n|Kurven], um gefährliche Fahrfehler zu vermeiden.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Kreiselkräfte, Kammscher Kreis und Schräglagendynamik",
        intro: "Physik der Lenkimpulse, Reibungskoeffizienten und Gyroskop-Stabilisierung (B2).",
        paragraphs: [
          [
            "Die Fahrphysik eines einspurigen Kraftfahrzeugs gehorcht den dynamischen Gleichungen starrer Mehrkörpersysteme unter dem Einfluss von Kreiselkräften.",
            "Zur Initiierung einer Kurvenfahrt wendet der Fahrer kontraintuitiv den sogenannten 'Lenkimpuls' an: Ein kurzer Druck am kurveninneren [der Gasgriff, -e|Lenkerende] lenkt das Vorderrad kurzzeitig aus der Kurve heraus, wodurch die Massenträgheit das Fahrzeug in die gewünschte [die Schräglage, -n|Schräglage] kippt.",
          ],
          [
            "Im Schräglagenzustand balancieren die Schwerkraft und die Zentrifugalkraft einander exakt aus.",
            "Die übertragbaren Kräfte an den Reifenaufstandsflächen werden durch den Kammschen Kreis limitiert: Nutzt der Fahrer maximale Seitenführungskraft in der Kurve, verbleibt kein Reibwertpotenzial für abrupte Brems- oder Beschleunigungskräfte.",
          ],
          [
            "Moderne Schräglagen-ABS-Systeme (Cornering ABS) erfassen über 6-Achsen-Inertialsensoren (IMU) permanent Roll-, Nick- und Gierraten und modulieren den Bremsdruck an der [die Bremsscheibe, -n|Bremsscheibe] mikrosekundengenau, um ein Aufstellen des Fahrzeugs und Traktionsverlust zuverlässig zu verhindern.",
          ],
        ],
      },
    },
  },
  das_fahrrad: {
    description:
      "Fahrrad, E-Bike, Fahrradhelm, Lenker, Sattel, Pedale, Kette, Klingel, Radweg und Luftpumpe.",
    details: "Fahrradkultur, Pedelecs, Radverkehrsinfrastruktur und Fahrradwartung (A1–B2)",
    arabicDescription:
      "الدراجة الهوائية والكهربائية (Das Fahrrad): مفردات الدراجة الهوائية (Fahrrad)، الدراجة الكهربائية (E-Bike)، خوذة الدراجة (Fahrradhelm)، المقود (Lenker)، السرج (Sattel)، الدواسات (Pedale)، الجنزير (Fahrradkette)، جرس التنبيه (Klingel)، مسار الدراجات (Radweg)، ومنفاخ الهواء (Fahrradpumpe).",
    words: [
      {
        german: "das Fahrrad, -̈er",
        arabic: "الدراجة الهوائية (البسكليت)",
        english: "bicycle, bike",
        example: "In Münster und Freiburg fahren die meisten Bürger mit dem Fahrrad zur Arbeit.",
      },
      {
        german: "das E-Bike, -s",
        arabic: "الدراجة الكهربائية المساعدة (بيديليك)",
        english: "e-bike, electric bicycle",
        example: "Mit einem modernen E-Bike meistert man steile Anstiege ohne jede Anstrengung.",
      },
      {
        german: "der Fahrradhelm, -e",
        arabic: "خوذة راكب الدراجة الهوائية",
        english: "bicycle helmet",
        example: "Ein gutsitzender Fahrradhelm schützt den Kopf bei einem unglücklichen Sturz.",
      },
      {
        german: "der Lenker, -",
        arabic: "مقود الدراجة الهوائية",
        english: "handlebars",
        example:
          "Mit beiden Händen am Lenker hat man das Rad auch auf unebenem Pflaster sicher im Griff.",
      },
      {
        german: "der Sattel, -̈",
        arabic: "سرج ومقعد الدراجة",
        english: "bicycle saddle, seat",
        example: "Der ergonomische Sattel muss auf die richtige Körpergröße eingestellt werden.",
      },
      {
        german: "das Pedal, -e",
        arabic: "دواسة الدراجة الهوائية",
        english: "pedal",
        example: "Er tritt kräftig in das Pedal, um schnell über die grüne Ampel zu kommen.",
      },
      {
        german: "die Fahrradkette, -n",
        arabic: "سلسلة وجنزير الدراجة",
        english: "bicycle chain",
        example:
          "Wenn die Fahrradkette abspringt, muss man sie vorsichtig wieder auf das Zahnrad heben.",
      },
      {
        german: "die Klingel, -n",
        arabic: "جرس التنبيه الصوتي بالدراجة",
        english: "bicycle bell",
        example:
          "Mit der lauten Klingel warnt die Radfahrerin Fußgänger rechtzeitig auf dem Gehweg.",
      },
      {
        german: "der Radweg, -e",
        arabic: "مسار الدراجات الهوائية المخصص",
        english: "bike path, cycle lane",
        example: "Ein baulich getrennter Radweg schützt Radler vor dem schnellen Autoverkehr.",
      },
      {
        german: "die Fahrradpumpe, -n",
        arabic: "منفاخ هواء إطارات الدراجة",
        english: "bicycle pump",
        example: "Mit der handlichen Fahrradpumpe pumpt er den Reifen auf den richtigen Druck auf.",
      },
      {
        german: "der platte Reifen, -",
        arabic: "الإطار المثقوب الفارغ من الهواء",
        english: "flat tire, puncture",
        example: "Wegen einer Glasscherbe auf der Straße hatte er plötzlich einen platten Reifen.",
      },
      {
        german: "in die Pedale treten",
        arabic: "يدوس بقوة على الدواسات ويقود",
        english: "to pedal",
        example: "Wer fit bleiben will, sollte jeden Tag kräftig in die Pedale treten.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        title: "Mein neues Fahrrad",
        intro: "Einfache Sätze über Fahrrad, Helm, Sattel, Klingel und Radweg (A1).",
        paragraphs: [
          [
            "Ich habe zum Geburtstag ein schönes blaues [das Fahrrad, -̈er|Fahrrad] bekommen.",
            "Ich setze meinen bunten [der Fahrradhelm, -e|Fahrradhelm] auf den Kopf.",
            "Ich setze mich auf den weichen [der Sattel, -̈|Sattel] und halte [der Lenker, -|den Lenker] mit beiden Händen fest.",
            "Mit den Füßen beginne ich fest [in die Pedale treten|in die Pedale zu treten].",
          ],
          [
            "In meiner Stadt fahre ich sicher auf dem grünen [der Radweg, -e|Radweg].",
            "Wenn Fußgänger im Weg stehen, benutze ich meine kleine [die Klingel, -n|Klingel].",
            "Mein Großvater fährt ein modernes [das E-Bike, -s|E-Bike] mit Motor.",
            "Radfahren hält mich gesund und macht jeden Tag Spaß.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Fahrradreparatur am Wochenende",
        intro: "Kette ölen, Platten flicken und Luft aufpumpen (A2).",
        paragraphs: [
          [
            "Gestern wollte ich mit Freunden eine Radtour machen, aber ich hatte [der platte Reifen, -|einen platten Reifen].",
            "Eine kleine Glasscherbe hatte den Schlauch im Vorderrad beschädigt.",
            "Zusammen mit meinem Vater habe ich das Rad auf den Kopf gestellt und den Schlauch geflickt.",
            "Mit der großen [die Fahrradpumpe, -n|Fahrradpumpe] pumpten wir den Reifen wieder stramm auf.",
          ],
          [
            "Danach haben wir [die Fahrradkette, -n|die Fahrradkette] gereinigt und mit speziellem Kettenöl gepflegt.",
            "Damit das Rad im Straßenverkehr verkehrssicher ist, müssen auch die Scheinwerfer und die Reflektoren funktionieren.",
            "Auf dem neu gebauten [der Radweg, -e|Radweg] fuhren wir schließlich zwanzig Kilometer durch den Wald.",
            "Ein gut gewartetes Fahrrad rollt leicht und bringt einen überall hin.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Fahrradstadt und der Boom des E-Bikes",
        intro: "Fahrradkultur in Deutschland, Kopenhagener Modell und die Mobilitätswende (B1).",
        paragraphs: [
          [
            "In vielen deutschen Städten vollzieht sich ein grundlegender Wandel in der urbanen Mobilitätsplanung.",
            "Städte wie Münster, Karlsruhe oder Bremen beweisen seit Langem, dass [das Fahrrad, -̈er|das Fahrrad] im Berufsverkehr auf Strecken bis zu fünf Kilometern jedes andere Verkehrsmittel an Schnelligkeit und Flexibilität übertrifft.",
            "Immer mehr Kommunen orientieren sich am dänischen oder niederländischen Vorbild und investieren in breite, geschützte [der Radweg, -e|Radwege] (Protected Bike Lanes), um den Radverkehr vom motorisierten Verkehr zu entkoppeln.",
          ],
          [
            "Einen beispiellosen Schub erfuhr diese Entwicklung durch den Siegeszug vom [das E-Bike, -s|E-Bike].",
            "Dank batterieelektrischer Tretunterstützung bis 25 km/h haben auch Senioren, Pendler aus Vororten und Menschen in topografisch anspruchsvollen Regionen das Radfahren für sich neu entdeckt.",
          ],
          [
            "Dennoch mahnen Verkehrsexperten: Höhere Geschwindigkeiten erfordern mehr gegenseitige Rücksichtnahme und machen das Tragen von einem [der Fahrradhelm, -e|Fahrradhelm] dringlicher denn je.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Biomechanik der Kraftübertragung, Drehmomentsensorik und urbane Infrastruktur",
        intro: "Kurbeldynamik, bürstenlose Mittelmotoren und Modal-Split-Transformation (B2).",
        paragraphs: [
          [
            "Die Fortbewegung auf dem Fahrrad stellt ein biomechanisches Meisterwerk effizienter Energiekonversion dar: Über 95 Prozent der vom Menschen an [das Pedal, -e|den Pedalen] aufgewandten Muskelkraft werden über [die Fahrradkette, -n|die Fahrradkette] oder Zahnriemen in Vortrieb transformiert.",
            "Die ergonomische Justierung von [der Sattel, -̈|Sattel] und Vorbau steuert den effektiven Kniewinkel zur Vermeidung patellofemoraler Überlastungen.",
          ],
          [
            "Beim modernen [das E-Bike, -s|E-Bike] (Pedelec) wiederum erfassen Dehnmessstreifen im Tretlager permanent das aufgebrachte Drehmoment und die Trittfrequenz.",
            "Mikrocontroller steuern den bürstenlosen Mittelmotor so harmonisch an, dass die Motorunterstützung proportional zur Eigenleistung erfolgt und ein natürliches Fahrgefühl simuliert wird.",
          ],
          [
            "Verkehrsplanerisch fungiert die Fahrradinfrastruktur als zentraler Hebel zur Reduktion verkehrsbedingter Lärm- und Treibhausgasemissionen.",
            "Die Erhöhung des Modal-Split-Anteils des Radverkehrs entlastet überlastete Verkehrsknotenpunkte und transformiert den öffentlichen Raum zurück zu lebenswerten urbanen Begegnungszonen.",
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

const res = vocabularyCollectionSchema.safeParse(uw);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(uwPath, JSON.stringify(uw, null, 2) + "\n", "utf8");
console.log("Batch 1 successfully saved to unterwegs.json!");
