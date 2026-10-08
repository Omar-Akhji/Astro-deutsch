import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  kunst_und_basteln: {
    description: "Malerei, Pinsel, Farben, Leinwände, Klebstoff, Skizzen und kreatives Gestalten.",
    details: "Bildende Kunst, Do-It-Yourself, Basteltechniken und kreativer Ausdruck (A1–B2)",
    arabicDescription:
      "الفنون والأعمال اليدوية (Kunst und Basteln): الرسم والتلوين (Malerei)، فرشاة الرسم (Pinsel)، الألوان (Farben)، لوحة الرسم القماشية (Leinwand)، الغراء اللاصق (Klebstoff)، الورق المقوى، الصلصال، والابتكار والأعمال الفنية اليدوية.",
    words: [
      {
        german: "das Basteln (Sg.)",
        arabic: "الأعمال اليدوية والحرفية (صناعة المجسمات والأشكال)",
        english: "crafting, handicrafts",
        example: "Am regnerischen Sonntagnachmittag macht das Basteln mit den Kindern viel Freude.",
      },
      {
        german: "die Malerei (Sg.)",
        arabic: "فن الرسم والتصوير التشكيلي",
        english: "painting (art)",
        example: "Die Malerei ist für viele Menschen ein wunderbarer Weg, Gefühle auszudrücken.",
      },
      {
        german: "der Pinsel, -",
        arabic: "فرشاة الرسم والتلوين",
        english: "paintbrush, brush",
        example: "Mit einem feinen Pinsel malt sie die zarten Konturen der Blüten.",
      },
      {
        german: "die Farbe, -n",
        arabic: "اللون / طلاء الرسم (مائية، زيتية، أكريليك)",
        english: "color, paint",
        example: "Auf der Palette mischt der Künstler blaue und gelbe Farben zu einem satten Grün.",
      },
      {
        german: "die Leinwand, -̈e",
        arabic: "لوحة القماش المشدودة للرسم (الكانفاس)",
        english: "canvas",
        example: "Er spannte eine weiße Leinwand auf die Holzstaffelei im Atelier.",
      },
      {
        german: "der Klebstoff, -e",
        arabic: "الصمغ / الغراء اللاصق",
        english: "glue, adhesive",
        example: "Tragen Sie den Klebstoff dünn auf das Papier auf, damit keine Wellen entstehen.",
      },
      {
        german: "das Tonpapier, -e",
        arabic: "الورق الملون المقوى للأشغال اليدوية",
        english: "construction paper, colored card",
        example: "Aus buntem Tonpapier schneiden wir Sterne für die Weihnachtsdekoration aus.",
      },
      {
        german: "die Skizze, -n",
        arabic: "الرسم التخطيطي الأولي (الاسكتش)",
        english: "sketch, rough drawing",
        example:
          "Bevor er mit dem Gemälde begann, zeichnete er eine schnelle Skizze mit Bleistift.",
      },
      {
        german: "die Knete (Sg.)",
        arabic: "معجون التشكيل / الصلصال للأطفال",
        english: "modelling clay, play dough",
        example: "Kinder formen aus bunter Knete gern kleine Tiere und Fantasiefiguren.",
      },
      {
        german: "das Kunstwerk, -e",
        arabic: "العمل الفني / التحفة الفنية",
        english: "work of art, artwork",
        example: "Das fertige Kunstwerk hängt jetzt im Wohnzimmer über dem Kamin.",
      },
      {
        german: "die Kreativität (Sg.)",
        arabic: "الإبداع والابتكار الفني",
        english: "creativity",
        example: "Beim freien Zeichnen kann man seiner Kreativität völlig freien Lauf lassen.",
      },
      {
        german: "die Staffelei, -en",
        arabic: "حامل لوحة الرسم الخشبي",
        english: "easel",
        example: "Die schwere hölzerne Staffelei hält das Ölgemälde sicher auf Augenhöhe.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Bunte Bilder malen",
        intro: "Einfache Sätze über Farben, Pinsel und Basteln (A1).",
        paragraphs: [
          [
            "Heute habe ich Zeit für [das Basteln (Sg.)|das Basteln].",
            "Ich nehme [der Pinsel, -|einen Pinsel] und viele bunte [die Farbe, -n|Farben].",
            "Vor mir steht eine weiße [die Leinwand, -̈e|Leinwand].",
          ],
          [
            "Ich male eine gelbe Sonne und ein blaues Meer.",
            "Mit [der Klebstoff, -e|dem Klebstoff] klebe ich ein Boot aus [das Tonpapier, -e|Tonpapier] auf das Bild.",
            "Mein Bild ist ein schönes [das Kunstwerk, -e|Kunstwerk] geworden.",
          ],
          ["Malen macht glücklich und entspannt den Kopf."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Kreative Stunden im Atelier",
        intro: "Skizzen anfertigen, Maltechniken ausprobieren und Gestalten (A2).",
        paragraphs: [
          [
            "Am Wochenende habe ich einen Malkurs für Einsteiger besucht.",
            "Zuerst zeigte uns die Kursleiterin, wie man mit Kohle [die Skizze, -n|eine genaue Skizze] anfertigt.",
          ],
          [
            "Danach durften wir mit Acrylfarben experimentieren.",
            "Jeder stellte seine Leinwand auf [die Staffelei, -en|eine Staffelei] und mischte individuelle Töne.",
            "Es war erstaunlich zu sehen, wie viel [die Kreativität (Sg.)|Kreativität] in jedem Teilnehmer steckte.",
          ],
          ["Am Ende des Tages nahmen alle stolz ihre eigenen Bilder mit nach Hause."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Handwerkliche Kunst als Ausgleich zum digitalen Alltag",
        intro: "Haptisches Gestalten, Do-it-yourself und künstlerische Entfaltung (B1).",
        paragraphs: [
          [
            "In einer zunehmend digitalisierten Welt suchen immer mehr Menschen einen Ausgleich in manuellen, handwerklichen Tätigkeiten.",
            "Ob traditionelle [die Malerei (Sg.)|Malerei] mit Ölfarben oder kreatives [das Basteln (Sg.)|Basteln] mit Naturmaterialien: Das Arbeiten mit den eigenen Händen beruhigt das Nervensystem.",
          ],
          [
            "Wer sich intensiv mit Bildaufbau und Farbharmonien beschäftigt, entdeckt oft ganz neue Facetten der eigenen [die Kreativität (Sg.)|Kreativität].",
            "Aus einer anfänglich flüchtigen [die Skizze, -n|Skizze] wächst schrittweise ein individuelles [das Kunstwerk, -e|Kunstwerk] heran, das die persönliche Handschrift des Schöpfers trägt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Bildende Kunst, Materialästhetik und Gestaltungspsychologie",
        intro: "Komposition, Farbtheorie und psychologische Dimensionen des Kunstschaffens (B2).",
        paragraphs: [
          [
            "Die bewusste Auseinandersetzung mit haptischen Werkstoffen offenbart die tiefere Dimension bildnerischen Gestaltens.",
            "Die Textur gespannter [die Leinwand, -̈e|Leinwände], die Viskosität pastoser Ölfarben und der Duktus dynamischer Pinselstriche erzeugen ein sensorisches Zusammenspiel, das jenseits digitaler Reproduzierbarkeit liegt.",
          ],
          [
            "Gestaltungspsychologisch betrachtet fungiert der Schaffensprozess als Katharsis und nonverbale Kommunikation.",
            "Hierbei transformiert [die Kreativität (Sg.)|kreative Imagination] rohe Farbpigmente und Werkstoffe in ein vielschichtiges ästhetisches Statement von zeitloser Gültigkeit.",
          ],
        ],
      },
    },
  },

  naehen_und_stricken: {
    description: "Nadel, Faden, Wolle, Stoffe, Nähmaschinen, Schnittmuster und Upcycling.",
    details: "Handarbeit, Textilgestaltung, Schneiderhandwerk, Stricken und Reparieren (A1–B2)",
    arabicDescription:
      "الخياطة والحياكة (Nähen und Stricken): الخياطة (Nähen)، حياكة الصوف (Stricken)، الإبرة (Nadel)، الخيط (Faden)، الصوف (Wolle)، ماكينة الخياطة (Nähmaschine)، الأقمشة (Stoff)، الأزرار (Knopf)، باترون التفصيل (Schnittmuster)، وإصلاح الملابس.",
    words: [
      {
        german: "das Nähen (Sg.)",
        arabic: "الخياطة وحياكة الأقمشة",
        english: "sewing",
        example: "Das Nähen von eigener Kleidung liegt voll im Trend der Nachhaltigkeit.",
      },
      {
        german: "das Stricken (Sg.)",
        arabic: "حياكة وتريكو الصوف بالإبرتين",
        english: "knitting",
        example: "Das Stricken von warmen Schals und Mützen ist ihr liebstes Winterhobby.",
      },
      {
        german: "die Nadel, -n",
        arabic: "إبرة الخياطة المعدنية",
        english: "needle",
        example: "Vorsicht beim Hantieren mit der spitzen Nadel, damit du dich nicht stichst.",
      },
      {
        german: "der Faden, -̈",
        arabic: "الخيط",
        english: "thread",
        example: "Fädeln Sie den reißfesten Faden durch das kleine Öhr der Nadel.",
      },
      {
        german: "die Wolle (Sg.)",
        arabic: "الصوف الطبيعي أو الصناعي",
        english: "wool, yarn",
        example: "Aus dieser weichen Merinowolle stricke ich kuschelige Wintersocken.",
      },
      {
        german: "die Nähmaschine, -n",
        arabic: "ماكينة / آلة الخياطة",
        english: "sewing machine",
        example: "Mit der elektrischen Nähmaschine gelingen saubere und gleichmäßige Nähte im Nu.",
      },
      {
        german: "der Stoff, -e",
        arabic: "القماش والنسيج",
        english: "fabric, cloth, material",
        example: "Ich habe zwei Meter gestreiften Baumwollstoff für eine Sommerbluse gekauft.",
      },
      {
        german: "der Knopf, -̈e",
        arabic: "الزر في الملابس",
        english: "button (clothing)",
        example: "An meinem Lieblingshemd ist leider ein oberer Knopf abgefallen.",
      },
      {
        german: "das Schnittmuster, -",
        arabic: "باترون وقالب تفصيل الملابس",
        english: "sewing pattern",
        example:
          "Sie legt das Schnittmuster auf den Stoff und schneidet die Teile mit Nahtzugabe zu.",
      },
      {
        german: "die Stricknadel, -n",
        arabic: "إبرة حياكة الصوف الطويلة",
        english: "knitting needle",
        example: "Mit zwei langen Stricknadeln aus Bambus gleitet das Garn besonders leise.",
      },
      {
        german: "die Stoffschere, -n",
        arabic: "مقص الأقمشة الحاد",
        english: "fabric shears, tailor's scissors",
        example: "Benutze die Stoffschere niemals für Papier, sonst wird sie schnell stumpf.",
      },
      {
        german: "flicken",
        arabic: "يرقع ويثبت الملابس الممزقة",
        english: "to mend, to patch",
        example: "Ich werde das kleine Loch an der Jeans sauber flicken, statt sie wegzuwerfen.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ich nähe einen Knopf an",
        intro: "Einfache Sätze über Nadel, Faden und kleine Reparaturen (A1).",
        paragraphs: [
          [
            "An meiner Jacke fehlt [der Knopf, -̈e|ein Knopf].",
            "Ich hole [die Nadel, -n|eine Nadel] und [der Faden, -̈|einen schwarzen Faden].",
            "Ich ziehe den Faden durch das kleine Loch.",
          ],
          [
            "Jetzt kann ich [das Nähen (Sg.)|das Nähen] beginnen.",
            "Ich nähe den Knopf fest an [der Stoff, -e|den Stoff].",
            "Meine Oma mag lieber [das Stricken (Sg.)|das Stricken].",
          ],
          ["Sie nimmt bunte [die Wolle (Sg.)|Wolle] und strickt mir einen warmen Schal."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mein erster selbst genähter Kissenbezug",
        intro: "Mit der Nähmaschine arbeiten, Stoff zuschneiden und Kissen nähen (A2).",
        paragraphs: [
          [
            "Zum Geburtstag bekam ich [die Nähmaschine, -n|eine elektrische Nähmaschine] geschenkt.",
            "Als erstes Projekt wollte ich ein buntes Kissen für mein Sofa nähen.",
          ],
          [
            "Im Stoffladen kaufte ich hübschen [der Stoff, -e|Stoff] mit Blumenmustern.",
            "Zu Hause legte ich [das Schnittmuster, -|das Schnittmuster] auf den Tisch und schnitt die Maße mit [die Stoffschere, -n|der Stoffschere] zu.",
          ],
          [
            "Das Nähen ging überraschend leicht und die Nähte wurden schön gerade.",
            "Es fühlt sich großartig an, Dinge selbst herzustellen statt neu zu kaufen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Textiles Handwerk und nachhaltige Mode",
        intro: "Slow Fashion, Kleiderreparatur und Upcycling im Alltag (B1).",
        paragraphs: [
          [
            "Gegen die Wegwerfmentalität der Fast-Fashion-Industrie formiert sich eine wachsende Gegenbewegung.",
            "Immer mehr Menschen besinnen sich auf klassische Kulturtechniken wie [das Nähen (Sg.)|Nähen] und [das Stricken (Sg.)|Stricken].",
          ],
          [
            "Statt beschädigte Kleidungsstücke vorschnell zu entsorgen, lernen junge Leute wieder, Löcher sorgfältig zu [flicken|flicken] oder Kleidungsstücke kreativ umzuschneidern.",
          ],
          [
            "Wer sich ein präzises [das Schnittmuster, -|Schnittmuster] vornimmt und mit hochwertiger [die Wolle (Sg.)|Wolle] oder Leinen arbeitet, kreiert zeitlose Unikate, die Generationen überdauern.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Sartoriale Ästhetik, Haute Couture und handwerkliche Meisterschaft",
        intro:
          "Schnitttechnik, Textilphysik und soziokulturelle Bedeutung des Schneiderhandwerks (B2).",
        paragraphs: [
          [
            "Die maßgeschneiderte Textilgestaltung repräsentiert eine hochentwickelte Symbiose aus mathematischer Präzision und ästhetischem Feingefühl.",
            "Das Konstruieren komplexer [das Schnittmuster, -|Schnittmuster] erfordert tiefes Verständnis textiler Faltenwürfe, Fadenläufe und Gewebespannungen.",
          ],
          [
            "An modernen computergestützten [die Nähmaschine, -n|Nähmaschinen] lassen sich feinste Sticharten millimetergenau programmieren, während in traditionsreichen Ateliers der Haute Couture handgeführte [die Nadel, -n|Nadeln] für unsichtbare Pikiersäume unerlässlich bleiben.",
          ],
          [
            "Das Revival textiler Handarbeit manifestiert eine Sehnsucht nach stofflicher Authentizität in einer Welt ephemerer Konsumgüter.",
          ],
        ],
      },
    },
  },

  das_kino: {
    description:
      "Kinosäle, Leinwand, Blockbuster, Popcorn, Kinosessel, Vorstellungen und Filmgenres.",
    details: "Kinoerlebnis, Soundeffekte, Premieren, Filmfestivals und Cineastik (A1–B2)",
    arabicDescription:
      "السينما (Das Kino): دور السينما، شاشة العرض الضخمة (Leinwand)، الفشار (Popcorn)، مقاعد السينما المريحة (Kinositz)، الأفلام السينمائية، عروض الأفلام، نظارات الأبعاد الثلاثية (3D-Brille)، الأفلام الضخمة (Blockbuster)، وأنواع الأفلام (Genre).",
    words: [
      {
        german: "das Kino, -s",
        arabic: "دار السينما",
        english: "cinema, movie theater",
        example: "Am Samstagabend verabreden wir uns vor dem Kino am Potsdamer Platz.",
      },
      {
        german: "der Film, -e",
        arabic: "الفيلم السينمائي",
        english: "movie, film",
        example: "Der neue historische Film wurde von den Kritikern hoch gelobt.",
      },
      {
        german: "die Kinoleinwand, -̈e",
        arabic: "شاشة السينما العملاقة",
        english: "cinema screen, movie screen",
        example: "Auf der riesigen Kinoleinwand wirken die Naturaufnahmen atemberaubend echt.",
      },
      {
        german: "das Popcorn (Sg.)",
        arabic: "الفشار (الذرة المنفوخة)",
        english: "popcorn",
        example: "Zu einem echten Kinobesuch gehört für mich eine große Tüte süßes Popcorn.",
      },
      {
        german: "der Kinosessel, -",
        arabic: "كرسي / مقعد السينما الوثير",
        english: "cinema seat",
        example: "Die bequemen Kinosessel lassen sich weit nach hinten verstellen.",
      },
      {
        german: "der Kinosaal, -̈e",
        arabic: "صالة وقاعة العرض السينمائي",
        english: "cinema auditorium, theater hall",
        example: "Im größten Kinosaal finden über fünfhundert Zuschauer gleichzeitig Platz.",
      },
      {
        german: "der Filmvorschaufilm, -e",
        arabic: "الإعلان التشويقي للفيلم (التريلر)",
        english: "trailer, movie trailer",
        example: "Vor Beginn der Hauptvorstellung liefen drei spannende Filmvorschaufilme.",
      },
      {
        german: "die 3D-Brille, -n",
        arabic: "نظارة العرض ثلاثي الأبعاد",
        english: "3D glasses",
        example: "Setzen Sie die 3D-Brille auf, sobald der Science-Fiction-Streifen startet.",
      },
      {
        german: "das Kinoticket, -s",
        arabic: "تذكرة السينما",
        english: "movie ticket",
        example: "Wir haben das Kinoticket kontaktlos mit dem Smartphone am Einlass vorgezeigt.",
      },
      {
        german: "das Filmgenre, -s",
        arabic: "النوع السينمائي (كوميدي، إثارة، دراما، خيال)",
        english: "film genre",
        example: "Science-Fiction ist mein absolutes Lieblings-Filmgenre im Kino.",
      },
      {
        german: "die Filmvorführung, -en",
        arabic: "العرض السينمائي (وقت العرض)",
        english: "screening, showing",
        example: "Die späte Filmvorführung um 22:30 Uhr war fast komplett ausgebucht.",
      },
      {
        german: "der Blockbuster, -",
        arabic: "الفيلم الضخم واسع الجماهيرية وعالي الإيرادات",
        english: "blockbuster",
        example: "Hollywood investiert hunderte Millionen Dollar in jeden neuen Blockbuster.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein schöner Nachmittag im Kino",
        intro: "Einfache Sätze über Kino, Film, Popcorn und Sitze (A1).",
        paragraphs: [
          [
            "Heute gehe ich in [das Kino, -s|das Kino].",
            "An der Kasse kaufe ich [das Kinoticket, -s|mein Kinoticket].",
            "Ich hole mir eine große Tüte [das Popcorn (Sg.)|Popcorn] und eine Cola.",
          ],
          [
            "Ich gehe in [der Kinosaal, -̈e|den dunklen Kinosaal].",
            "Ich setze mich in einen weichen [der Kinosessel, -|Kinosessel].",
            "Das Licht geht aus und [die Kinoleinwand, -̈e|die Kinoleinwand] leuchtet auf.",
          ],
          ["[der Film, -e|Der Film] ist sehr lustig und alle lachen laut."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein spannender 3D-Filmabend",
        intro: "3D-Brillen, Actionfilme und Filmvorschauen (A2).",
        paragraphs: [
          [
            "Gestern haben sich meine Freunde und ich [der Blockbuster, -|den neuesten Blockbuster] im Premierenkino angesehen.",
            "Weil es ein Animationsfilm war, bekamen wir am Eingang [die 3D-Brille, -n|eine 3D-Brille].",
          ],
          [
            "Vor dem Hauptfilm lief [der Filmvorschaufilm, -e|ein spektakulärer Filmvorschaufilm] über das nächste Weltraumabenteuer.",
            "Die Toneffekte im Saal waren so gewaltig, dass die Sitze vibrierten.",
          ],
          [
            "Wir waren uns alle einig: Ein Film auf der großen Leinwand ist ein unvergleichliches Erlebnis, das man zu Hause nicht nachmachen kann.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Kinozauber versus Heimkino-Streaming",
        intro: "Gemeinschaftliches Filmerlebnis, Akustik und filmische Vielfalt (B1).",
        paragraphs: [
          [
            "Trotz der Bequemlichkeit privater Streaming-Dienste behält [das Kino, -s|das Kino] seine unverwechselbare Faszination.",
            "Das immersive Eintauchen in fremde Welten auf einer deckenhohen [die Kinoleinwand, -̈e|Kinoleinwand] in Verbindung mit modernem Dolby-Atmos-Surround-Sound setzt Standards.",
          ],
          [
            "Darüber hinaus ist der Kinobesuch ein soziales Gemeinschaftserlebnis: Das kollektive Erschrecken im Horrorfilm oder das synchrone Lachen im Saal schafft Verbundenheit.",
          ],
          [
            "Während Programmkinos künstlerisch anspruchsvolle Arthouse-Werke pflegen, garantieren die Multiplexe packende Unterhaltung für Fans jedes [das Filmgenre, -s|Filmgenres].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Cineastische Ästhetik, Kinodistribution und audiovisuelle Immersion",
        intro: "Kinoökonomie, Filmfestivals und die Magie der siebten Kunst (B2).",
        paragraphs: [
          [
            "Die Filmkunst, die traditionsreich als siebte Kunst bezeichnet wird, lebt von der spezifischen Rezeptionssituation des abgedunkelten Kinoraums.",
            "Im Zeitalter digitaler Verwertungsketten verteidigen Kinobetreiber das exklusive Auswertungsfenster ('Theatrical Window') gegen Plattformbetreiber.",
          ],
          [
            "Während ein kommerzieller [der Blockbuster, -|Blockbuster] auf visuelle Überwältigung und Franchisewerte setzt, zelebrieren Autorenfilmer subtile Montage, Lichtdramaturgie und narrative Tiefe.",
          ],
          [
            "Das Kino bleibt der sakrale Raum für narrative Großentwürfe, der kollektive Mythen stiftet und gesellschaftliche Träume spiegelt.",
          ],
        ],
      },
    },
  },

  fotografieren: {
    description: "Kamera, Objektive, Stative, Auslöser, Belichtung, Motive und Bildkomposition.",
    details:
      "Digitale Fotografie, Blende, Verschlusszeit, ISO, Porträts und Landschaftsaufnahmen (A1–B2)",
    arabicDescription:
      "التصوير الفوتوغرافي (Fotografieren): آلة التصوير والكاميرا (Kamera)، الصور (Foto)، عدسة الكاميرا (Objektiv)، حامل الكاميرا الثلاثي (Stativ)، زر الالتقاط (Auslöser)، الفلاش، فتحة العدسة (Blende)، سرعة الغالق، بطاقة الذاكرة، وضبط التركيز والفوكس.",
    words: [
      {
        german: "die Fotografie (Sg.)",
        arabic: "فن التصوير الضوئي الفوتوغرافي",
        english: "photography",
        example:
          "Die Fotografie erlaubt es uns, flüchtige Augenblicke für die Ewigkeit festzuhalten.",
      },
      {
        german: "die Kamera, -s",
        arabic: "آلة التصوير / الكاميرا",
        english: "camera",
        example: "Ich hänge mir die schwere Spiegelreflex-Kamera um den Hals.",
      },
      {
        german: "das Foto, -s",
        arabic: "الصورة الفوتوغرافية (اللّقطة)",
        english: "photo, photograph",
        example: "Auf dieser Reise habe ich über fünfhundert wunderschöne Fotos geschossen.",
      },
      {
        german: "das Objektiv, -e",
        arabic: "عدسة الكاميرا الزجاجية",
        english: "lens, camera lens",
        example:
          "Für Porträts verwende ich ein lichtstarkes Objektiv mit schöner Hintergrundunschärfe.",
      },
      {
        german: "das Stativ, -e",
        arabic: "حامل الكاميرا ثلاثي القوائم (الترايبود)",
        english: "tripod",
        example: "Bei Nachtaufnahmen verhindert ein stabiles Stativ jede Erschütterung der Kamera.",
      },
      {
        german: "der Auslöser, -",
        arabic: "زر التقاط الصورة (الزناد)",
        english: "shutter release, shutter button",
        example: "Drücken Sie den Auslöser halb durch, damit das Bild automatisch fokussiert.",
      },
      {
        german: "der Blitz, -e",
        arabic: "فلاش الكاميرا للإضاءة الخاطفة",
        english: "flash (camera)",
        example: "In Museen ist das Fotografieren mit Blitz meist streng verboten.",
      },
      {
        german: "die Blende, -n",
        arabic: "فتحة العدسة (Aperture)",
        english: "aperture (lens)",
        example: "Eine offene Blende sorgt für viel Lichteinfall und eine geringe Schärfentiefe.",
      },
      {
        german: "die Belichtungszeit, -en",
        arabic: "سرعة الغالق / زمن التعريض الضوئي",
        english: "exposure time, shutter speed",
        example: "Eine extrem kurze Belichtungszeit friert schnelle Bewegungen von Sportlern ein.",
      },
      {
        german: "die Speicherkarte, -n",
        arabic: "بطاقة الذاكرة الرقمية (SD Card)",
        english: "memory card, SD card",
        example: "Ich habe eine schnelle Speicherkarte mit 128 Gigabyte Speicherplatz eingelegt.",
      },
      {
        german: "das Fotomotiv, -e",
        arabic: "الموضوع أو المشهد المصوّر",
        english: "subject, motif (photo)",
        example:
          "Der Sonnenuntergang über den schneebedeckten Bergen war ein spektakuläres Fotomotiv.",
      },
      {
        german: "fokussieren",
        arabic: "يضبط بؤرة العدسة والتركيز (الفوكس)",
        english: "to focus (camera)",
        example:
          "Der Autofokus hilft dabei, das Auge der porträtierten Person exakt zu fokussieren.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein Hobby: Fotografieren",
        intro: "Einfache Sätze über Kamera, Fotos, Auslöser und schöne Motive (A1).",
        paragraphs: [
          [
            "Ich habe [die Kamera, -s|eine neue Kamera].",
            "Ich gehe in den Park und suche ein schönes [das Fotomotiv, -e|Fotomotiv].",
            "Ich sehe eine bunte Blume im Gras.",
          ],
          [
            "Ich muss das Bild genau [fokussieren|fokussieren].",
            "Dann drücke ich auf [der Auslöser, -|den Auslöser]. Klick!",
            "[das Foto, -s|Das Foto] wird sofort auf [die Speicherkarte, -n|der Speicherkarte] gespeichert.",
          ],
          ["Am Abend zeige ich meiner Familie die Bilder auf dem Computer."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Landschaften im goldenen Licht",
        intro: "Objektive wechseln, Stative nutzen und Belichtung einstellen (A2).",
        paragraphs: [
          [
            "Letzten Sonntag stand ich um fünf Uhr morgens auf, um den Sonnenaufgang zu fotografieren.",
            "Ich packte mein schweres [das Stativ, -e|Stativ] und zwei verschiedene [das Objektiv, -e|Objektive] in den Rucksack.",
          ],
          [
            "Als das erste Morgenlicht über die Hügel strömte, schraubte ich die Kamera fest.",
            "Um das sanfte Licht einzufangen, stellte ich [die Belichtungszeit, -en|eine längere Belichtungszeit] an der Kamera ein.",
            "Weil es noch dämmerte, verzichtete ich auf [der Blitz, -e|den grellen Blitz], um die natürliche Lichtstimmung nicht zu zerstören.",
          ],
          ["Die Aufnahmen wurden gestochen scharf und farbenprächtig."],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Kunst der manuellen Belichtung",
        intro: "Zusammenspiel von Blende, Verschlusszeit und Bildkomposition (B1).",
        paragraphs: [
          [
            "Ambitionierte [die Fotografie (Sg.)|Fotografie] beginnt dort, wo man die automatischen Modi der Kamera verlässt.",
            "Das sogenannte Belichtungsdreieck aus ISO-Empfindlichkeit, [die Blende, -n|Blende] und Verschlusszeit entscheidet über die Bildwirkung.",
          ],
          [
            "Eine weit geöffnete Blende erzeugt das begehrte Bokeh im Hintergrund eines Porträts, während eine geschlossene Blende maximale Tiefenschärfe in Landschaftsaufnahmen liefert.",
          ],
          [
            "Wer den [der Auslöser, -|Auslöser] bewusst im perfekten Moment betätigt, schafft Bilder, die Geschichten erzählen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Visuelle Narration, Sensorarchitektur und fotografische Ethik",
        intro: "Vollformatsensoren, RAW-Entwicklung und die Macht des Bildes (B2).",
        paragraphs: [
          [
            "Die Evolution digitaler Vollformatsensoren und hochpräziser asphärischer [das Objektiv, -e|Objektive] hat die Grenzen des technisch Machbaren im Low-Light-Bereich enorm erweitert.",
            "Fotografen entwickeln verlustfreie RAW-Dateien in der digitalen Dunkelkammer, um feinste Dynamikumfänge zwischen tiefsten Schatten und Spitzlichtern herauszuarbeiten.",
          ],
          [
            "Doch jenseits technischer Parameter wie [die Belichtungszeit, -en|Belichtungszeit] und optischer Auflösung bleibt die Wahl des [das Fotomotiv, -e|Fotomotivs] ein zutiefst ethischer und intellektueller Akt.",
          ],
          [
            "Bilder besitzen die Macht, historische Narrative zu prägen, Missstände offenzulegen oder ästhetische Paradigmen zu begründen.",
          ],
        ],
      },
    },
  },

  am_strand: {
    description: "Sommerurlaub, Strand, Meer, Wellen, Sand, Muscheln, Sonnencreme und Entspannung.",
    details: "Badeurlaub, Nord- und Ostseeküste, Strandkörbe, Gezeiten und Sonnenschutz (A1–B2)",
    arabicDescription:
      "على شاطئ البحر (Am Strand): شاطئ البحر (Strand)، البحر (Meer)، الرمال (Sand)، الأمواج (Welle)، مظلة الشمس (Sonnenschirm)، منشفة الشاطئ، واقي الشمس (Sonnencreme)، الأصداف البحرية (Muschel)، كورنيش الشاطئ (Strandpromenade)، ملابس السباحة، وحروق الشمس.",
    words: [
      {
        german: "der Strand, -̈e",
        arabic: "الشاطئ الرملي / البلاج",
        english: "beach",
        example: "Im Sommer verbringen wir unseren Urlaub am weißen Sandstrand an der Ostsee.",
      },
      {
        german: "das Meer, -e",
        arabic: "البحر",
        english: "sea, ocean",
        example: "Das Wasser in dem Meer ist herrlich erfrischend und kristallklar.",
      },
      {
        german: "der Sand (Sg.)",
        arabic: "الرمل",
        english: "sand",
        example: "Die Kinder bauen hohe Burgen und verzierte Gräben aus feuchtem Sand.",
      },
      {
        german: "die Welle, -n",
        arabic: "الموجة البحرية",
        english: "wave (water)",
        example: "Hohe Wellen rollen mit lautem Rauschen an das flache Ufer.",
      },
      {
        german: "der Sonnenschirm, -e",
        arabic: "مظلة الشمس / الشماسية",
        english: "parasol, beach umbrella",
        example:
          "Wir spannen den großen Sonnenschirm auf, um Schutz vor der Mittagshitze zu haben.",
      },
      {
        german: "das Strandtuch, -̈er",
        arabic: "منشفة وبشكير الشاطئ",
        english: "beach towel",
        example: "Ich breite mein buntes Strandtuch auf dem warmen Sand aus.",
      },
      {
        german: "die Sonnencreme, -s",
        arabic: "كريم واقي الشمس",
        english: "sunscreen, sun lotion",
        example: "Cremen Sie sich gründlich mit Sonnencreme ein, besonders Schultern und Nase.",
      },
      {
        german: "die Muschel, -n",
        arabic: "الصدفة / القوقعة البحرية",
        english: "seashell, clam",
        example: "Am Spülsaum sammelt meine kleine Tochter glänzende Muscheln in einem Eimer.",
      },
      {
        german: "die Strandpromenade, -n",
        arabic: "كورنيش وممشى الشاطئ السياحي",
        english: "beach promenade",
        example: "Abends schlendern wir an der lebhaften Strandpromenade entlang und essen Eis.",
      },
      {
        german: "die Badehose, -n",
        arabic: "سروال السباحة (شورت البحر)",
        english: "swimming trunks",
        example: "Er packt seine Badehose und die Schwimmbrille in die Strandtasche.",
      },
      {
        german: "der Sonnenbrand, -̈e",
        arabic: "حرق الشمس واحمرار الجلد",
        english: "sunburn",
        example:
          "Wer zu lange ohne Schutz in der prallen Sonne liegt, riskiert einen schmerzhaften Sonnenbrand.",
      },
      {
        german: "die Düne, -n",
        arabic: "الكثيب الرملي الساحلي",
        english: "dune, sand dune",
        example: "Hinter den grasbewachsenen Dünen weht ein frischer Wind vom Meer her.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein sonniger Tag am Strand",
        intro: "Einfache Sätze über Strand, Meer, Sand und Sonne (A1).",
        paragraphs: [
          [
            "Heute ist es sehr warm und ich gehe an [der Strand, -̈e|den Strand].",
            "Ich sehe das blaue [das Meer, -e|Meer] und höre [die Welle, -n|die Wellen].",
            "Ich laufe barfuß durch [der Sand (Sg.)|den weichen Sand].",
          ],
          [
            "Ich lege [das Strandtuch, -̈er|mein Strandtuch] unter [der Sonnenschirm, -e|einen Sonnenschirm].",
            "Ganz wichtig: Ich benutze viel [die Sonnencreme, -s|Sonnencreme] gegen die Sonne.",
            "Im Wasser finde ich eine hübsche weiße [die Muschel, -n|Muschel].",
          ],
          ["Am Strand zu sein ist mein liebster Sommerurlaub."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Urlaub an der Ostsee",
        intro: "Strandkörbe, Dünen und Abendspaziergänge auf der Promenade (A2).",
        paragraphs: [
          [
            "Letzte Woche habe ich mit meiner Familie Urlaub an der deutschen Ostseeküste gemacht.",
            "Wir mieteten einen traditionellen Strandkorb direkt hinter [die Düne, -n|den Dünen].",
          ],
          [
            "Mein Bruder zog seine [die Badehose, -n|Badehose] an und sprang mutig in das kühle Wasser.",
            "Obwohl der Himmel bewölkt war, bekam ich am ersten Nachmittag leichten [der Sonnenbrand, -̈e|Sonnenbrand].",
          ],
          [
            "Am späten Nachmittag spazierten wir über [die Strandpromenade, -n|die Strandpromenade], kauften frische Fischbrötchen und beobachteten die Segelboote am Horizont.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Erholung und Naturschutz an den deutschen Küsten",
        intro: "Die Gezeiten an der Nordsee, Dünenlandschaften und maritimes Flair (B1).",
        paragraphs: [
          [
            "Die Küstenregionen an Nord- und Ostsee erfreuen sich ungebrochener Beliebtheit bei erholungssuchenden Urlaubern.",
            "Während an der Ostsee das ruhige Wasser zum Baden einlädt, prägen an der Nordsee Ebbe und Flut den Rhythmus am [der Strand, -̈e|Strand].",
          ],
          [
            "Wanderungen durch das UNESCO-Weltnaturerbe Wattenmeer bieten Einblicke in ein einzigartiges Ökosystem voller [die Muschel, -n|Muscheln] und Wattwürmer.",
            "Zum Schutz der Küsten vor Sturmfluten ist das Betreten geschützter [die Düne, -n|Dünen] streng untersagt, da der Dünengrasbewuchs den losen Sand vor Erosion bewahrt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Maritimer Tourismus, Küstenschutz und ökologisches Gleichgewicht",
        intro:
          "Spannungsverhältnis zwischen Tourismuswirtschaft und empfindlicher Küstenökologie (B2).",
        paragraphs: [
          [
            "Der Strandtourismus bildet das ökonomische Rückgrat vieler Küstengemeinden, wirft jedoch gravierende ökologische Fragen auf.",
            "Die Versiegelung von Naturflächen durch überdimensionierte [die Strandpromenade, -n|Strandpromenaden] und Hotelanlagen verändert das Mikroklima empfindlicher Uferzonen.",
          ],
          [
            "Gleichzeitig fordern der steigende Meeresspiegel und häufigere Sturmfluten massive Investitionen in ingenieurtechnischen Küstenschutz.",
            "Durch gezielten Sandvorspülungen werden gefährdete [der Strand, -̈e|Strandabschnitte] stabilisiert, um das Hinterland vor den zerstörerischen Kräften mächtiger [die Welle, -n|Wellen] zu schützen.",
          ],
          [
            "Ein nachhaltiges Destinationsmanagement muss den Schutz bedrohter Küstenbiotope mit den Bedürfnissen touristischer Erholung harmonisieren.",
          ],
        ],
      },
    },
  },

  das_zelten: {
    description:
      "Camping, Zelt aufbauen, Schlafsack, Isomatte, Gaskocher, Lagerfeuer und Naturerlebnis.",
    details: "Outdoor-Abenteuer, Campingplatz, Wandern, Biwakieren und Ausrüstung (A1–B2)",
    arabicDescription:
      "التخييم والأنشطة البرية (Das Zelten): التخييم (Camping/Zelten)، خيمة النوم (Zent)، كيس النوم (Schlafsack)، الفرشة العازلة (Isomatte)، موقع التخييم (Campingplatz)، موقد الغاز المتنقل (Gaskocher)، المصباح اليدوي، أوتاد الخيمة (Hering)، حقيبة الظهر، ونار المخيم (Lagerfeuer).",
    words: [
      {
        german: "das Zelten (Sg.)",
        arabic: "التخييم ونصب الخيام في الطبيعة (الكامبينغ)",
        english: "camping, tenting",
        example: "Das Zelten in den Bergen ist ein wunderbares Abenteuer für Naturfreunde.",
      },
      {
        german: "das Zelt, -e",
        arabic: "الخيمة",
        english: "tent",
        example: "Wir bauten unser wasserdichtes Zelt auf einer grünen Waldwiese auf.",
      },
      {
        german: "der Schlafsack, -̈e",
        arabic: "كيس النوم المبطن (سليبينغ باج)",
        english: "sleeping bag",
        example: "In einem warmen Daunenschlafsack friert man selbst bei Minusgraden nicht.",
      },
      {
        german: "die Isomatte, -n",
        arabic: "الفرشة العازلة للأرضية والرطوبة",
        english: "sleeping mat, foam camping mat",
        example: "Die aufblasbare Isomatte schützt vor Bodenkälte und spitzen Steinen.",
      },
      {
        german: "der Campingplatz, -̈e",
        arabic: "موقع ومخيم التخييم المخصص",
        english: "campsite, campground",
        example: "Auf dem modernen Campingplatz gibt es saubere Duschen und Stromanschlüsse.",
      },
      {
        german: "der Gaskocher, -",
        arabic: "موقد الغاز المتنقل للطهي الخارجي",
        english: "camping gas stove",
        example: "Auf dem kleinen Gaskocher bereiteten wir uns morgens heißen Kaffee zu.",
      },
      {
        german: "die Taschenlampe, -n",
        arabic: "المصباح اليدوي (الكشاف)",
        english: "flashlight, torch",
        example: "Wenn es dunkel wird, leuchtet uns die LED-Taschenlampe den Weg zum Zelt.",
      },
      {
        german: "der Hering, -e",
        arabic: "وتد تثبيت الخيمة في التربة",
        english: "tent peg, tent stake",
        example: "Mit einem Hammer schlagen wir die Heringe tief in den festen Boden.",
      },
      {
        german: "der Rucksack, -̈e",
        arabic: "حقيبة الظهر للرحلات",
        english: "backpack, rucksack",
        example:
          "In meinem sechzig Liter fassenden Rucksack hat die ganze Campingausrüstung Platz.",
      },
      {
        german: "das Lagerfeuer, -",
        arabic: "نار المخيم",
        english: "campfire",
        example: "Am knisternden Lagerfeuer sangen wir Lieder und rösteten Marshmallows.",
      },
      {
        german: "das Mückenspray, -s",
        arabic: "بخاخ طرد البعوض والحشرات",
        english: "mosquito spray, insect repellent",
        example: "Vergessen Sie am See niemals ein wirksames Mückenspray gegen Insektenstiche.",
      },
      {
        german: "die freie Natur (Sg.)",
        arabic: "الطبيعة المفتوحة في الهواء الطلق",
        english: "the great outdoors, open nature",
        example: "Nach einer Woche im Büro genieße ich die Stille in der freien Natur.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Eine Nacht im Zelt",
        intro: "Einfache Sätze über Camping, Schlafsack und Taschenlampe (A1).",
        paragraphs: [
          [
            "Am Wochenende fahre ich mit Freunden in den Wald.",
            "Wir machen [das Zelten (Sg.)|Zelten] an einem kleinen See.",
            "Wir bauen zusammen [das Zelt, -e|unser Zelt] auf einer Wiese auf.",
          ],
          [
            "Ich lege [die Isomatte, -n|meine Isomatte] und [der Schlafsack, -̈e|meinen weichen Schlafsack] hinein.",
            "In der Nacht ist es stockdunkel, aber ich habe [die Taschenlampe, -n|eine Taschenlampe].",
            "Wir machen [das Lagerfeuer, -|ein Lagerfeuer] und kochen Tee.",
          ],
          ["Schlafen in [die freie Natur (Sg.)|der freien Natur] ist ein großes Abenteuer."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Wochenendausflug auf den Campingplatz",
        intro: "Campingausrüstung, Zeltheringe und Kochen auf dem Gaskocher (A2).",
        paragraphs: [
          [
            "Letzten Freitag haben wir unsere Rucksäcke gepackt und sind zu einem schönen [der Campingplatz, -̈e|Campingplatz] am Fluss gefahren.",
            "Als erstes spannten wir die Seile und schlugen alle [der Hering, -e|Heringe] fest in den Rasen, damit das Zelt bei Wind stabil blieb.",
          ],
          [
            "Zum Abendessen kochten wir Nudeln mit Tomatensoße auf [der Gaskocher, -|unserem Gaskocher].",
            "Weil es in Ufernähe viele Mücken gab, sprühten wir uns gründlich mit [das Mückenspray, -s|Mückenspray] ein.",
          ],
          [
            "Eingekuschelt in [der Schlafsack, -̈e|den Schlafsack] schliefen wir beim beruhigenden Rauschen des Wassers wunderbar ein.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Abenteuerlust und Minimalismus beim Trekking",
        intro: "Selbstversorgung unterwegs, Ausrüstungsgewicht und Wildcamping-Regeln (B1).",
        paragraphs: [
          [
            "Mehrtägige Trekkingtouren mit Zelt erfordern vorausschauende Planung und funktionale Ausrüstung.",
            "Jedes Gramm im [der Rucksack, -̈e|Rucksack] zählt, weshalb erfahrene Wanderer ultraleichte Zelte und kompakte Kocher bevorzugen.",
          ],
          [
            "In Deutschland ist das sogenannte Wildcampen in [die freie Natur (Sg.)|der freien Natur] abseits offizieller [der Campingplatz, -̈e|Campingplätze] größtenteils reglementiert oder verboten.",
            "Umso wichtiger ist es, designierte Naturlagerplätze zu nutzen und die 'Leave No Trace'-Prinzipien zu beherzigen: Keinen Müll hinterlassen, kein offenes Feuer entzünden und wildlebende Tiere respektieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Outdoor-Revival, Naturphilosophie und Resilienz in der Wildnis",
        intro: "Entschleunigung, Mikroabenteuer und ökologischer Fußabdruck (B2).",
        paragraphs: [
          [
            "Die Renaissance des Outdoor-Lebensstils reflektiert ein tiefes zivilisatorisches Unbehagen an städtischer Überreizung und permanenter digitaler Erreichbarkeit.",
            "Die bewusste Reduktion auf vitale Grundbedürfnisse — Wärme im [der Schlafsack, -̈e|Schlafsack], Nahrung vom [der Gaskocher, -|Gaskocher] und Schutz im [das Zelt, -e|Zelt] — initiiert einen heilsamen Prozess der Entschleunigung.",
          ],
          [
            "Gleichzeitig fordern sogenannte 'Mikroabenteuer' eine geschärfte ökologische Ethik ein, um Übernutzung fragiler Berg- und Waldökosysteme durch unbedachtes Konsumverhalten zu verhindern.",
          ],
          [
            "Das Leben unter freiem Himmel schult praktische Resilienz und revitalisiert die archaische Beziehung zwischen Mensch und Biosphäre.",
          ],
        ],
      },
    },
  },
};

const fzPath = "src/data/vocabulary/freizeit.json";
const fzData = JSON.parse(fs.readFileSync(fzPath, "utf8"));

for (const sec of fzData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(fzData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(fzPath, JSON.stringify(fzData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to freizeit.json!");
