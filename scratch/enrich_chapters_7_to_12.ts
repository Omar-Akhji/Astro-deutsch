import fs from "fs";
import path from "path";

// -------------------------------------------------------------
// CHAPTER 7: KOMMUNIKATION
// -------------------------------------------------------------
export const chapter7TopicsEnrichment = [
  {
    id: "smartphone",
    title: "Das Smartphone",
    description: "Moderne digitale Kommunikation: Smartphones, Apps, Messengerdienste, Internet und Medienkonsum.",
    details: "Das Smartphone (in Deutschland umgangssprachlich auch 'das Handy' genannt) ist das universelle Kommunikationsmittel unserer Zeit. Grammatikalisch sind Verben wie 'anrufen' (trennbar: 'Ich rufe dich an'), 'eine Nachricht schicken / senden', 'eine App installieren' und 'im Internet surfen' essenziell. Kulturell legen Menschen im deutschsprachigen Raum großen Wert auf Datenschutz ('der Datenschutz' / DSGVO) und digitale Privatsphäre.",
    arabicDescription: "الهاتف الذكي ووسائل الاتصال الرقمي والإنترنت. يغطي هذا الدرس أجهزة الهاتف والإنترنت، والتطبيقات (Apps)، والرسائل النصية، والاتصال الصوتي والمرئي، والتقاط الصور، مع التركيز على خصوصية البيانات وحماية المعلومات الشخصية (Datenschutz) ذات الأهمية القصوى في ألمانيا.",
    words: [
      {
        german: "das Handy, -s",
        arabic: "الهاتف المحمول / الجوال",
        english: "mobile phone, cell phone",
        example: "Ich habe mein neues Handy immer griffbereit in der Jackentasche."
      },
      {
        german: "die Nachricht, -en",
        arabic: "الرسالة النصية",
        english: "message, text message",
        example: "Sie hat mir eine kurze Nachricht geschickt, dass sie etwas später kommt."
      },
      {
        german: "anrufen",
        arabic: "يتصل هاتفياً",
        english: "to call, phone",
        example: "Ich rufe meine Eltern jeden Sonntagabend um achtzehn Uhr an."
      },
      {
        german: "das Internet",
        arabic: "الإنترنت",
        english: "internet",
        example: "Über das schnelle Internet können wir weltweit ohne Verzögerung recherchieren."
      },
      {
        german: "der Computer, -",
        arabic: "الحاسوب / الكمبيوتر",
        english: "computer",
        example: "Am leistungsfähigen Computer bearbeite ich hochauflösende Fotos und Videos."
      },
      {
        german: "die App, -s",
        arabic: "التطبيق الذكي",
        english: "app, application",
        example: "Mit dieser nützlichen App lerne ich täglich zwanzig neue deutsche Vokabeln."
      },
      {
        german: "die E-Mail, -s",
        arabic: "البريد الإلكتروني",
        english: "email",
        example: "Der Dozent hat die Präsentation per E-Mail an alle Kursteilnehmer verschickt."
      },
      {
        german: "das Foto, -s",
        arabic: "الصورة الفوتوغرافية",
        english: "photo, picture",
        example: "Im Urlaub haben wir wunderschöne Fotos von den Bergen gemacht."
      },
      {
        german: "das Passwort, -̈er",
        arabic: "كلمة المرور / كلمة السر",
        english: "password",
        example: "Verwenden Sie für Ihre Online-Konten stets ein sicheres, langes Passwort."
      },
      {
        german: "der Bildschirm, -e",
        arabic: "الشاشة",
        english: "screen, display",
        example: "Der hochauflösende Bildschirm zeigt lebendige Farben und gestochen scharfen Text."
      },
      {
        german: "der Akku, -s",
        arabic: "البطارية القابلة للشحن",
        english: "rechargeable battery",
        example: "Mein Akku ist fast leer, ich muss das Ladekabel dringend anstecken."
      },
      {
        german: "die Kamera, -s",
        arabic: "الكاميرا",
        english: "camera",
        example: "Die moderne Kamera des Smartphones macht selbst bei Nacht brillante Aufnahmen."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Mein neues Smartphone",
        intro: "Einfache Sätze über Handys, Fotos und Nachrichten im Alltag (A1).",
        paragraphs: [
          [
            "Ich habe ein neues, modernes [das Handy, -s|Handy] zum Geburtstag bekommen.",
            "Der große [der Bildschirm, -e|Bildschirm] ist sehr hell und reagiert schnell auf Berührungen.",
            "Mit der scharfen [die Kamera, -s|Kamera] mache ich gern ein schönes [das Foto, -s|Foto] von Freunden.",
            "Ich installiere eine neue [die App, -s|App] zum Sprachenlernen und tippe mein sicheres [das Passwort, -̈er|Passwort] ein."
          ],
          [
            "Über das schnelle [das Internet|Internet] schicke ich eine kurze [die Nachricht, -en|Nachricht] an meine Mutter.",
            "Später möchte ich meinen besten Freund [anrufen|anrufen] und mit ihm sprechen.",
            "Wenn ich zu Hause bin, arbeite ich lieber am großen [der Computer, -|Computer] und schreibe eine [die E-Mail, -s|E-Mail].",
            "Am Abend lade ich den [der Akku, -s|Akku] meines Handys wieder voll auf."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Digitale Vernetzung und mobile Erreichbarkeit",
        intro: "Praktische Nutzung von Apps, Fotos und Online-Diensten im Tagesablauf (A2).",
        paragraphs: [
          [
            "Das Smartphone begleitet uns heute durch fast alle Lebensbereiche, vom morgendlichen Wecksignal bis zur Navigation im Verkehr.",
            "Sobald ich aufwache, werfe ich einen Blick auf mein [das Handy, -s|Handy] und lese eine [die Nachricht, -en|Nachricht] in unserer Familiengruppe.",
            "Da mein [der Akku, -s|Akku] über Nacht geladen wurde, hält er den ganzen Tag zuverlässig durch.",
            "Auf dem Weg zur Haltestelle öffne ich eine Nahverkehrs-[die App, -s|App], um die aktuellen Fahrzeiten im [das Internet|Internet] zu prüfen."
          ],
          [
            "„Kannst du mich heute Nachmittag kurz [anrufen|anrufen]?“, fragt mich meine Kollegin per SMS.",
            "„Ja, sobald ich mein Meeting am [der Computer, -|Computer] beendet habe!“, antworte ich ihr schnell.",
            "Später schicke ich ihr per [die E-Mail, -s|E-Mail] ein wichtiges [das Foto, -s|Foto] unseres Whiteboards.",
            "Weil Datenschutz wichtig ist, ändere ich regelmäßig mein [das Passwort, -̈er|Passwort] und schütze so meine persönlichen Daten."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Zwischen ständiger Erreichbarkeit und digitalem Wohlbefinden",
        intro: "Wie wir digitale Werkzeuge reflektiert nutzen und Medienkompetenz aufbauen (B1).",
        paragraphs: [
          [
            "Die Omnipräsenz digitaler Kommunikationsgeräte hat unsere soziale Interaktion tiefgreifend transformiert.",
            "Während das moderne [das Handy, -s|Handy] mit seiner brillanten [die Kamera, -s|Kamera] die spontane Dokumentation unseres Alltags ermöglicht, wächst der Druck permanenter Erreichbarkeit.",
            "Jede eintreffende [die Nachricht, -en|Nachricht] und jede berufliche [die E-Mail, -s|E-Mail] erzeugt den Impuls, unverzüglich auf den leuchtenden [der Bildschirm, -e|Bildschirm] zu blicken.",
            "Dank mobiler Verbindungen ins weltweite [das Internet|Internet] lassen sich Bankgeschäfte und Recherchen sekundenschnell per [die App, -s|App] erledigen."
          ],
          [
            "Um jedoch nicht in digitale Abhängigkeit zu geraten, etablieren viele Menschen bewusste 'Digital-Detox'-Phasen.",
            "Statt stundenlang vor dem [der Computer, -|Computer] zu verharren, verabredet man sich zu realen Spaziergängen oder greift zum Hörer, um Freunde persönlich anzurufen.",
            "Gleichzeitig sensibilisieren IT-Experten für Cybersicherheit, weshalb ein komplexes [das Passwort, -̈er|Passwort] für sensible Profile unerlässlich ist.",
            "Wenn am Abend der [der Akku, -s|Akku] zur Neige geht, bleibt das Gerät oft bewusst im Nebenzimmer liegen, um ungestörte Nachtruhe zu sichern."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Medienökologie, Algorithmen und die Psychologie digitaler Resonanz",
        intro: "Soziologische und medientheoretische Analyse der Plattformökonomie (B2).",
        paragraphs: [
          [
            "Das ubiquitäre [das Handy, -s|Handy] fungiert in spätmodernen Gesellschaften nicht mehr bloß als Fernsprechapparat, sondern als kybernetische Prothese menschlicher Kognition und Identität.",
            "Die miniaturisierte Hochleistungstechnik hinter dem kapazitiven [der Bildschirm, -e|Bildschirm] steuert über algorithmisch optimierte [die App, -s|Apps] die Aufmerksamkeitsökonomie von Milliarden Nutzern.",
            "Schnittstellen zum weltweiten [das Internet|Internet] verwandeln jeden Träger in einen permanenten Datengenerator, dessen digitaler Fußabdruck weit über die geschützte Sphäre von einem [das Passwort, -̈er|Passwort] hinausreicht.",
            "Die fotografische Selbstinszenierung durch die integrierte [die Kamera, -s|Kamera] erzeugt ein flüchtiges [das Foto, -s|Foto]-Universum, das soziale Validierung in Form von Likes monetarisiert."
          ],
          [
            "Diese synchrone Dauerschleife aus [die Nachricht, -en|Nachrichten] und asynchroner [die E-Mail, -s|E-Mail]-Flut führt zu kognitiver Fragmentierung und chronischem Aufmerksamkeitsdefizit.",
            "Obwohl stationäre Rechner wie der [der Computer, -|Computer] für komplexe analytische Arbeitsprozesse unverzichtbar bleiben, dominiert das Mobilgerät die private Lebenswelt.",
            "Die physische Begrenzung durch den lithumbasierten [der Akku, -s|Akku] markiert paradoxerweise die letzte materielle Schranke gegen die vollkommene Entgrenzung des digitalen Hyperkapitalismus."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// CHAPTER 8: FREIZEIT
// -------------------------------------------------------------
export const chapter8TopicsEnrichment = [
  {
    id: "freizeitaktivitaeten",
    title: "Freizeitaktivitäten",
    description: "Hobbys, Erholung, Kulturveranstaltungen, Sport und Vereinsleben.",
    details: "In Deutschland hat das Vereinsleben ('der Verein', z. B. Sportverein, Musikverein, Wanderverein) eine herausragende gesellschaftliche Tradition. Viele Deutsche treiben regelmäßig Sport oder gehen in ihrer Freizeit spazieren ('die Natur genießen'). Typische Hobbys sind 'ein Buch lesen', 'Musik hören', 'ins Kino oder ins Theater gehen', 'kochen' und 'fotografieren'. Die typische Frage lautet: 'Was machst du am liebsten in deiner Freizeit?'.",
    arabicDescription: "الأنشطة الترفيهية والهوايات وقضاء أوقات الفراغ في ألمانيا. يتناول هذا الدرس ممارسة الرياضة، والنوادي والجمعيات الرياضية والثقافية (Vereine) ذات الشهرة العريقة في المجتمع الألماني، وحضور السينما والمسرح، والطهي، والسفر والاستجمام في الطبيعة.",
    words: [
      {
        german: "lesen",
        arabic: "يقرأ",
        english: "to read",
        example: "Ich lese am liebsten packende Kriminalromane und historische Biografien."
      },
      {
        german: "Musik hören",
        arabic: "يستمع إلى الموسيقى",
        english: "to listen to music",
        example: "Nach Feierabend entspanne ich mich auf dem Sofa und höre klassische Musik."
      },
      {
        german: "der Sport",
        arabic: "الرياضة",
        english: "sport, sports",
        example: "Regelmäßiger Sport an der frischen Luft stärkt die Abwehrkräfte und hält fit."
      },
      {
        german: "das Kino, -s",
        arabic: "السينما / دار العرض",
        english: "cinema, movie theater",
        example: "Am Samstagabend schauen wir uns den neuesten Blockbuster im Kino an."
      },
      {
        german: "spielen",
        arabic: "يلعب / يعزف",
        english: "to play (game/instrument)",
        example: "Die Kinder spielen gern Fußball im Garten oder Brettspiele am Tisch."
      },
      {
        german: "reisen",
        arabic: "يسافر",
        english: "to travel",
        example: "In den Sommerferien reisen wir am liebsten an die Ostsee oder in die Berge."
      },
      {
        german: "kochen",
        arabic: "يطبخ / يطهو",
        english: "to cook",
        example: "Am Wochenende kochen wir gemeinsam mit Freunden ein dreigängiges Menü."
      },
      {
        german: "schwimmen",
        arabic: "يسبح",
        english: "to swim",
        example: "Im Hochsommer gehen wir jeden Nachmittag im kühlen See schwimmen."
      },
      {
        german: "fotografieren",
        arabic: "يلتقط الصور / يصور",
        english: "to take photos, photograph",
        example: "Auf Wanderungen liebe ich es, Tiere und Pflanzen in freier Natur zu fotografieren."
      },
      {
        german: "das Hobby, -s",
        arabic: "الهواية",
        english: "hobby",
        example: "Mein größtes Hobby ist das Wandern in den bayerischen Alpen."
      },
      {
        german: "spazieren gehen",
        arabic: "يتنزه / يمشي للمتعة",
        english: "to go for a walk",
        example: "Sonntags nach dem Mittagessen gehen wir im Stadtwald spazieren."
      },
      {
        german: "das Theater, -",
        arabic: "المسرح",
        english: "theater, playhouse",
        example: "Wir haben Karten für das klassische Theater in der Innenstadt gekauft."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Meine liebsten Hobbys",
        intro: "Einfache Sätze über Freizeitaktivitäten, Musik und Sport (A1).",
        paragraphs: [
          [
            "In meiner Freizeit habe ich viele schöne Beschäftigungen.",
            "Mein liebstes [das Hobby, -s|Hobby] ist das Lesen: Ich liebe es, abends spannende Bücher zu [lesen|lesen].",
            "Oft setze ich meine Kopfhörer auf und möchte einfach nur schöne [Musik hören|Musik hören].",
            "Zweimal in der Woche treibe ich viel [der Sport|Sport], um fit und gesund zu bleiben."
          ],
          [
            "Am Freitagabend treffe ich meine Freunde und wir gehen zusammen ins [das Kino, -s|Kino].",
            "Am Samstag [kochen|kochen] wir leckere Pasta und [spielen|spielen] lustige Kartenspiele.",
            "Wenn die Sonne scheint, gehe ich im Park [spazieren gehen|spazieren] oder gehe im See [schwimmen|schwimmen].",
            "Im Sommer möchte ich in andere Länder [reisen|reisen] und tolle Städte [fotografieren|fotografieren]."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Freizeitgestaltung am Wochenende",
        intro: "Aktivitäten im Freundeskreis, Kultur und Naturgenuss (A2).",
        paragraphs: [
          [
            "Nach einer arbeitsreichen Woche freuen sich die meisten Menschen auf ein abwechslungsreiches Wochenende.",
            "Samstagmorgens ziehe ich meine Laufschuhe an und mache eine Stunde [der Sport|Sport] im Park.",
            "Danach gehe ich mit dem Hund im Wald [spazieren gehen|spazieren], atme die frische Luft ein und genieße die Ruhe.",
            "Zu Hause nehme ich meine Kamera zur Hand, denn ich möchte die bunten Herbstblätter im Garten [fotografieren|fotografieren]."
          ],
          [
            "„Hast du heute Lust auf Kultur?“, fragt mich meine Partnerin beim Mittagessen.",
            "„Gern! Wir könnten ins [das Theater, -|Theater] gehen oder uns eine Komödie im [das Kino, -s|Kino] ansehen“, antworte ich begeistert.",
            "Am Sonntagabend bleiben wir gemütlich daheim: Wir [kochen|kochen] zusammen etwas Leckeres, [Musik hören|hören entspannte Musik] und [lesen|lesen] auf dem Sofa.",
            "Gemeinsame Zeit für das eigene [das Hobby, -s|Hobby] ist der beste Ausgleich zum Alltagsstress."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Vereinskultur, Entschleunigung und persönliche Leidenschaften",
        intro: "Wie Hobbys und ehrenamtliches Engagement das soziale Leben bereichern (B1).",
        paragraphs: [
          [
            "In einer von Termindruck geprägten Gesellschaft erfüllt die bewusste Gestaltung der Freizeit eine unverzichtbare regenerative Funktion.",
            "Ob man regelmäßig im Hallenbad [schwimmen|schwimmt], in den Bergen wandert oder sich im lokalen Verein engagiert – aktiver [der Sport|Sport] baut nachweislich Stresshormone ab.",
            "Für kreative Köpfe bietet die Fotografie faszinierende Möglichkeiten, flüchtige Augenblicke mit der Linse festzuhalten und Motive kunstvoll zu [fotografieren|fotografieren].",
            "Ein anspruchsvolles [das Hobby, -s|Hobby] stiftet Sinn und ermöglicht es, abseits beruflicher Zwänge neue Talente zu entfalten."
          ],
          [
            "Auch das kulturelle Angebot europäischer Städte lädt zur Bereicherung des Geistes ein.",
            "Ein bewegender Abend im traditionsreichen [das Theater, -|Theater] regt ebenso zu tiefsinnigen Diskussionen an wie ein Autorenfilm im Programmkino.",
            "Gleichzeitig gewinnt das gesellige Beisammensein an Bedeutung: Wenn Freunde zusammenkommen, um gemeinsam zu [kochen|kochen] und Musik zu hören, vertiefen sich zwischenmenschliche Bindungen.",
            "Schließlich eröffnet das [reisen|Reisen] in fremde Kulturräume ungeahnte Horizonte und schenkt unvergessliche Lebenserfahrungen."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Soziologie der Muße: Freizeitkonsum und Selbstverwirklichung",
        intro: "Kritische Betrachtung der Freizeitindustrie im Spannungsfeld von Optimierungsdruck und Kontemplation (B2).",
        paragraphs: [
          [
            "Der Begriff der Muße ('Otium') hat sich von aristotelischer Kontemplation zu einer hyperaktiven Sphäre spätmodernen Konsums gewandelt.",
            "In der Erlebnisgesellschaft mutiert selbst das individuelle [das Hobby, -s|Hobby] oft zur Leistungsschau, bei der sportliche Betätigung und [der Sport|Sport] unter dem Diktat biometrischer Selbstoptimierung stehen.",
            "Das Bedürfnis, exotische Orte zu bereisen und jeden Schritt für Social Media zu [fotografieren|fotografieren], entlarvt die Ambivalenz des modernen Tourismus zwischen Weltoffenheit und ökologischer Destruktion.",
            "Demgegenüber fordern Kulturphilosophen die Wiederentdeckung analoger Entschleunigungspraktiken wie das unproduktive [spazieren gehen|Spazierengehen] im Sinne des Baudelaire'schen Flaneurs."
          ],
          [
            "Kulturelle Institutionen wie das klassische [das Theater, -|Theater] behaupten sich in diesem Kontext als letzte Bastionen kollektiver ästhetischer Erfahrung wider die Vereinzelung im Heimkino.",
            "Die Fähigkeit, sich kontemplativ in ein komplexes literarisches Werk zu vertiefen und konzentriert zu [lesen|lesen], avanciert zum Akt zivilisatorischer Resilienz gegen die mediale Reizüberflutung.",
            "Erst wenn Freizeit frei von instrumenteller Verwertbarkeit als reiner Selbstzweck zelebriert wird, erfüllt sie ihr humanes Emanzipationsversprechen."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// CHAPTER 9: KÖRPER UND GESUNDHEIT
// -------------------------------------------------------------
export const chapter9TopicsEnrichment = [
  {
    id: "der_koerper",
    title: "Der Körper",
    description: "Anatomie des menschlichen Körpers: Gliedmaßen, Organe, Sinnesorgane und körperliche Fitness.",
    details: "Zur Benennung von Körperteilen gehören im Deutschen korrekte Artikel und Pluralformen: 'der Kopf' (Pl. die Köpfe), 'der Arm' (Pl. die Arme), 'das Bein' (Pl. die Beine), 'der Bauch' (Pl. die Bäuche), 'die Hand' (Pl. die Hände), 'der Fuß' (Pl. die Füße). Wichtige reflexive Verben der Bewegung: 'sich biegen', 'sich strecken', 'sich verletzen' und 'den Kopf schütteln / nicken'.",
    arabicDescription: "أجزاء الجسم البشري وتشريح الأعضاء والحواس في اللغة الألمانية. يتناول هذا الدرس الرأس، والأطراف (الذراعين، الساقين، اليدين، القدمين)، والبطن والظهر، والقلب، مع التركيز على أدوات التعريف والجمع الخاصة بكل عضو وكيفية التعبير عن اللياقة البدنية.",
    words: [
      {
        german: "der Kopf, -̈e",
        arabic: "الرأس",
        english: "head",
        example: "Er schüttelt nachdenklich den Kopf und überlegt eine passende Lösung."
      },
      {
        german: "der Arm, -e",
        arabic: "الذراع",
        english: "arm",
        example: "Beim Krafttraining trainiert er regelmäßig die Muskeln in beiden Armen."
      },
      {
        german: "das Bein, -e",
        arabic: "الساق / الرِجل",
        english: "leg",
        example: "Nach dem Marathonlauf taten mir die Beine noch tagelang weh."
      },
      {
        german: "der Bauch, -̈e",
        arabic: "البطن",
        english: "stomach, belly",
        example: "Nach dem üppigen Festessen fühlte sich sein Bauch kugelrund an."
      },
      {
        german: "die Hand, -̈e",
        arabic: "اليد",
        english: "hand",
        example: "Zur Begrüßung reichte der Arzt dem Patienten freundlich die Hand."
      },
      {
        german: "der Fuß, -̈e",
        arabic: "القدم",
        english: "foot",
        example: "Auf barfußem Fuß durch das feuchte Gras zu laufen, ist sehr gesund."
      },
      {
        german: "das Auge, -n",
        arabic: "العين",
        english: "eye",
        example: "Sie hat strahlende blaue Augen und einen warmen, offenen Blick."
      },
      {
        german: "das Ohr, -en",
        arabic: "الأذن",
        english: "ear",
        example: "Das menschliche Ohr nimmt Geräusche und Töne in feinsten Nuancen wahr."
      },
      {
        german: "der Mund, -̈er",
        arabic: "الفم",
        english: "mouth",
        example: "Öffnen Sie bitte den Mund und sagen Sie 'Ah', damit ich den Hals untersuchen kann."
      },
      {
        german: "die Nase, -n",
        arabic: "الأنف",
        english: "nose",
        example: "Mit der feinen Nase nehmen wir den Duft von frischem Gebäck sofort wahr."
      },
      {
        german: "der Rücken, -",
        arabic: "الظهر",
        english: "back (body)",
        example: "Viel Sitzen am Schreibtisch belastet auf Dauer den unteren Rücken."
      },
      {
        german: "das Herz, -en",
        arabic: "القلب",
        english: "heart",
        example: "Das Herz pumpt unaufhörlich sauerstoffreiches Blut durch unseren gesamten Organismus."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Unser wunderbarer Körper",
        intro: "Einfache Sätze über die wichtigsten Körperteile des Menschen (A1).",
        paragraphs: [
          [
            "Der menschliche Körper ist faszinierend und leistet jeden Tag Großes.",
            "Oben ist [der Kopf, -̈e|Kopf] mit zwei [das Auge, -n|Augen] zum Sehen und einer feinen [die Nase, -n|Nase] zum Riechen.",
            "Mit dem [der Mund, -̈er|Mund] sprechen und essen wir, und mit jedem [das Ohr, -en|Ohr] hören wir Geräusche.",
            "Im Brustkorb schlägt Tag und Nacht unser gesundes [das Herz, -en|Herz]."
          ],
          [
            "Wir haben zwei starke [der Arm, -e|Arme] und an jeder Seite eine geschickte [die Hand, -̈e|Hand].",
            "Zum Gehen und Laufen brauchen wir unsere [das Bein, -e|Beine] und die [der Fuß, -̈e|Füße].",
            "Wenn wir Sport machen, trainieren wir auch den [der Bauch, -̈e|Bauch] und den geraden [der Rücken, -|Rücken].",
            "Wir müssen gut auf unseren Körper achten und uns gesund ernähren."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Morgenfitness und Rückengesundheit",
        intro: "Körperbewusstsein, Gymnastikübungen und Ergonomie im Büroalltag (A2).",
        paragraphs: [
          [
            "Wer den ganzen Tag im Büro sitzt, spürt abends oft Verspannungen im [der Rücken, -|Rücken] und in den Schultern.",
            "Deshalb beginne ich jeden Morgen mit zehn Minuten sanfter Gymnastik.",
            "Ich kreise die [der Arm, -e|Arme], strecke die [das Bein, -e|Beine] und lockere vorsichtig den Nacken.",
            "Dabei schüttle ich leicht den [der Kopf, -̈e|Kopf], um die Halsmuskulatur zu dehnen."
          ],
          [
            "Danach mache ich ein paar Kniebeugen auf festem [der Fuß, -̈e|Fuß] und stütze mich mit der [die Hand, -̈e|Hand] an der Wand ab.",
            "Diese Übungen stärken die Muskeln im [der Bauch, -̈e|Bauch] und bringen das [das Herz, -en|Herz] in Schwung.",
            "Ich wasche mein Gesicht mit kaltem Wasser, öffne die [das Auge, -n|Augen] und atme tief durch die [die Nase, -n|Nase] ein.",
            "So fühlt sich der ganze Körper voller Energie für die Herausforderungen des Tages an."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Ganzheitliche Körperwahrnehmung und funktionelle Anatomie",
        intro: "Wie Muskeln, Sinnesorgane und Kreislauf harmonisch zusammenwirken (B1).",
        paragraphs: [
          [
            "Der menschliche Bewegungsapparat ist ein bio-mechanisches Wunderwerk höchster Präzision.",
            "Über die Sinnesorgane nehmen wir unsere Umwelt wahr: Das hochentwickelte [das Auge, -n|Auge] fängt optische Reize ein, während das empfindliche [das Ohr, -en|Ohr] akustische Wellen in Nervenimpulse übersetzt.",
            "Als zentraler Motor des Kreislaufs pumpt das vitale [das Herz, -en|Herz] unermüdlich Blut durch Gefäße bis in die Spitzen von [die Hand, -̈e|Hand] und [der Fuß, -̈e|Fuß].",
            "Gleichzeitig bildet eine stabile Rumpfmuskulatur rund um [der Bauch, -̈e|Bauch] und [der Rücken, -|Rücken] das schützende Korsett der Wirbelsäule."
          ],
          [
            "Fehlhaltungen durch Bewegungsmangel führen jedoch schnell zu chronischen Beschwerden, die vom Nacken bis in den [der Kopf, -̈e|Kopf] ausstrahlen können.",
            "Durch gezieltes Faszientraining und Dehnübungen für [der Arm, -e|Arm] und [das Bein, -e|Bein] lassen sich solche Blockaden effektiv lösen.",
            "Bewusstes Atmen durch die [die Nase, -n|Nase] mit geschlossenem [der Mund, -̈er|Mund] optimiert die Sauerstoffsättigung des Gehirns.",
            "Ein achtsamer Umgang mit den Körpersignalen ist das wirksamste Rezept für langanhaltende Vitalität."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Somatische Anthropologie: Körperdiskurse und Biopolitik",
        intro: "Philosophische und medizinsoziologische Reflexion über den Körper als Kulturträger (B2).",
        paragraphs: [
          [
            "In der postindustriellen Spätmoderne wird der menschliche Leib zunehmend als formbares Projekt und Repräsentationsfläche sozialer Distinktion interpretiert.",
            "Während die Physiologie das Zusammenspiel von Skelett, Sehnen und dem motorischen [der Arm, -e|Arm] beschreibt, konstruieren Fitness-Diskurse den gestählten [der Bauch, -̈e|Bauch] als Ausweis von Disziplin und Kontrollfähigkeit.",
            "Dabei geraten die basalen physiologischen Rhythmen, die durch das vegetative Nervensystem und das lebensnotwendige [das Herz, -en|Herz] gesteuert werden, oft in Konflikt mit ökonomischen Verwertungslogiken.",
            "Selbst die Sinneswahrnehmung durch [das Auge, -n|Auge] und [das Ohr, -en|Ohr] wird durch digitale Interfaces einer kontinuierlichen Reizüberflutung ausgesetzt."
          ],
          [
            "Die Somatisierung von Stress manifestiert sich symptomatisch in Zivilisationsleiden wie dem chronischen Schmerz im [der Rücken, -|Rücken] oder Spannungszuständen im [der Kopf, -̈e|Kopf].",
            "Demgegenüber plädieren phänomenologische Denker für eine Wiederaneignung des Leibes als primärem Modus unseres In-der-Welt-Seins, verankert durch den geerdeten [der Fuß, -̈e|Fuß] und die schöpferische [die Hand, -̈e|Hand].",
            "Erst die Synthese aus anatomischem Verständnis und somatischer Achtsamkeit befreit das Individuum aus der Falle rein mechanistischer Selbstoptimierung."
          ]
        ]
      }
    }
  },
  {
    id: "krankheiten",
    title: "Krankheiten",
    description: "Symptome, Arztbesuch, Medikamente, Diagnosen und Genesung.",
    details: "Beim Arzt ('beim Arzt' / 'in der Praxis') schildert man Beschwerden: 'Ich habe Schmerzen' (+ Dativ, z. B. 'im Rücken', 'im Hals'), 'Ich fühle mich schwach', 'Ich habe Fieber'. Der Arzt 'untersucht' den Patienten und stellt ein 'Rezept' aus. In der Apotheke holt man die 'Tabletten' oder 'Tropfen'. Wichtige Höflichkeitsformel zur Genesung: 'Gute Besserung!'.",
    arabicDescription: "الأمراض والأعراض وزيارة الطبيب وتناول الأدوية في ألمانيا. يتناول هذا الدرس عبارات وصف الألم والشكوى المرضية، والفحص الطبي، والحصول على الوصفة الطبية (Rezept) من العيادة (Praxis) وصرفها من الصيدلية، إلى جانب عبارة التمني بالشفاء العاجل (Gute Besserung!).",
    words: [
      {
        german: "die Schmerzen (Pl.)",
        arabic: "الآلام / الأوجاع",
        english: "pain, aches",
        example: "Er klagte über starke Schmerzen im linken Knie nach dem Sturz."
      },
      {
        german: "der Arzt, -̈e",
        arabic: "الطبيب",
        english: "doctor, physician (male)",
        example: "Der erfahrene Arzt nimmt sich viel Zeit für die gründliche Untersuchung."
      },
      {
        german: "das Medikament, -e",
        arabic: "الدواء / العلاج",
        english: "medication, medicine",
        example: "Nehmen Sie dieses wirksame Medikament bitte dreimal täglich nach den Mahlzeiten ein."
      },
      {
        german: "die Erkältung, -en",
        arabic: "نزلة البرد / الرشح",
        english: "cold, common cold",
        example: "Im nasskalten November fängt man sich leicht eine unangenehme Erkältung ein."
      },
      {
        german: "das Fieber",
        arabic: "الحمى / ارتفاع درجة الحرارة",
        english: "fever",
        example: "Das Thermometer zeigt 39 Grad Fieber, sie muss unbedingt im Bett bleiben."
      },
      {
        german: "der Husten",
        arabic: "السعال / الكحة",
        english: "cough",
        example: "Ein quälender trockener Husten hielt ihn die halbe Nacht wach."
      },
      {
        german: "der Schnupfen",
        arabic: "الزكام / سيلان الأنف",
        english: "runny nose, sniffles",
        example: "Bei starkem Schnupfen hilft das Inhalieren von heißem Kamillendampf."
      },
      {
        german: "die Praxis, Praxen",
        arabic: "العيادة الطبية",
        english: "doctor's office, medical practice",
        example: "Die moderne Praxis des Hausarztes liegt verkehrsgünstig am Marktplatz."
      },
      {
        german: "das Rezept, -e",
        arabic: "الوصفة الطبية / الروشتة",
        english: "prescription",
        example: "Der Arzt stellt mir ein Rezept für antibiotische Augentropfen aus."
      },
      {
        german: "die Tablette, -n",
        arabic: "الحبة / القرص الدوائي",
        english: "pill, tablet",
        example: "Schlucken Sie die weiße Tablette bitte mit einem großen Glas stillem Wasser."
      },
      {
        german: "die Gesundheit",
        arabic: "الصحة",
        english: "health",
        example: "Gesundheit ist das höchste Gut im menschlichen Leben."
      },
      {
        german: "untersuchen",
        arabic: "يفحص طبياً",
        english: "to examine (medically)",
        example: "Die Ärztin wird Ihre Lunge mit dem Stethoskop sorgfältig untersuchen."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Beim Hausarzt in der Praxis",
        intro: "Einfache Sätze über Krankheit, Schmerzen und den Arztbesuch (A1).",
        paragraphs: [
          [
            "Ich fühle mich heute leider gar nicht gut.",
            "Ich habe eine schwere [die Erkältung, -en|Erkältung] mit starkem [der Husten|Husten] und [der Schnupfen|Schnupfen].",
            "Mein Kopf ist heiß und ich habe hohes [das Fieber|Fieber].",
            "Im Hals habe ich schlimme [die Schmerzen (Pl.)|Schmerzen] beim Schlucken."
          ],
          [
            "Ich gehe am Vormittag in die [die Praxis, Praxen|Praxis] von Dr. Schmidt.",
            "Der freundliche [der Arzt, -̈e|Arzt] wird meinen Hals und die Lunge gründlich [untersuchen|untersuchen].",
            "Er schreibt mir ein [das Rezept, -e|Rezept] für ein gutes [das Medikament, -e|Medikament] auf.",
            "In der Apotheke kaufe ich die [die Tablette, -n|Tabletten], gehe ins Bett und schone meine [die Gesundheit|Gesundheit]."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Ein Termin beim Arzt und der Weg zur Besserung",
        intro: "Symptome schildern, Anweisungen des Arztes befolgen und gesund werden (A2).",
        paragraphs: [
          [
            "Als ich gestern Morgen aufwachte, fühlte ich mich schlapp und hatte stechende [die Schmerzen (Pl.)|Schmerzen] im Brustkorb.",
            "Mein Thermometer zeigte über 38 Grad [das Fieber|Fieber], begleitet von trockenem [der Husten|Husten] und lästigem [der Schnupfen|Schnupfen].",
            "Ich rief sofort in der [die Praxis, Praxen|Praxis] meines Hausarztes an und bekam kurzfristig einen Notfalltermin.",
            "Im Wartezimmer saßen viele andere Patienten mit einer typischen winterlichen [die Erkältung, -en|Erkältung]."
          ],
          [
            "„Guten Tag! Wo genau tut es weh?“, fragte mich der [der Arzt, -̈e|Arzt] einfühlsam.",
            "Nachdem er mich gewissenhaft [untersuchen|untersucht] hatte, beruhigte er mich: „Es ist eine Virusinfektion, keine Lungenentzündung.“",
            "Er stellte mir ein rotes [das Rezept, -e|Rezept] aus und empfahl mir, morgens und abends je eine [die Tablette, -n|Tablette] einzunehmen.",
            "„Viel Tee trinken, fünf Tage Bettruhe und schonen Sie Ihre [die Gesundheit|Gesundheit]!“, lautete sein ärztlicher Rat."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Moderne Diagnostik, Therapie und Patientenautonomie",
        intro: "Kommunikation im Gesundheitswesen, Medikamentensicherheit und Prävention (B1).",
        paragraphs: [
          [
            "Das Vertrauensverhältnis zwischen Patient und Behandler bildet das Fundament jeder erfolgreichen medizinischen Therapie.",
            "Wenn unklare Symptome wie persistierendes [das Fieber|Fieber] oder chronische [die Schmerzen (Pl.)|Schmerzen] auftreten, ist der zeitnahe Gang in die hausärztliche [die Praxis, Praxen|Praxis] unabdingbar.",
            "Ein kompetenter [der Arzt, -̈e|Arzt] wird den Patienten nicht nur körperlich [untersuchen|untersuchen], sondern auch dessen Lebensumstände und Vorerkrankungen erfragen.",
            "Während eine banale [die Erkältung, -en|Erkältung] mit Schnupfen meist nach einer Woche Schonung abklingt, bedürfen bakterielle Infektionen spezifischer Intervention."
          ],
          [
            "Bei der Verordnung pharmazeutischer Präparate stellt der Mediziner ein verbindliches [das Rezept, -e|Rezept] aus.",
            "Der Patient muss darauf achten, jedes verschriebene [das Medikament, -e|Medikament] exakt nach Dosierungsanleitung einzunehmen, um Resistenzen oder Nebenwirkungen zu vermeiden.",
            "Häufig lindert bereits eine fiebersenkende [die Tablette, -n|Tablette] akute Beschwerden spürbar.",
            "Langfristig gewinnt jedoch die vorbeugende Stärkung des Immunsystems an Bedeutung, denn präventive Lebensführung ist der nachhaltigste Schutz für unsere [die Gesundheit|Gesundheit]."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Medizinsoziologie, Pharmakologie und der Wandel der Heilerrolle",
        intro: "Kritische Analyse von Evidenzbasierung, Medikalisierung und Gesundheitsökonomie (B2).",
        paragraphs: [
          [
            "Das zeitgenössische Gesundheitssystem operiert in einem permanenten Spannungsfeld zwischen evidenzbasierter Spitzenmedizin und ökonomischem Kostendruck.",
            "Die traditionelle Autorität vom klinischen [der Arzt, -̈e|Arzt] transformiert sich im Zeitalter digital informierter Patienten zum partnerschaftlichen 'Shared Decision Making'.",
            "Dennoch bleibt die klinische Urteilskraft unersetzlich, wenn es darum geht, komplexe somatische [die Schmerzen (Pl.)|Schmerzen] diagnostisch abzugrenzen und den Patienten fundiert zu [untersuchen|untersuchen].",
            "Die inflationäre Verschreibungspraxis, bei der jedes flüchtige Symptom wie [der Husten|Husten] unmittelbar über ein behördliches [das Rezept, -e|Rezept] medikalisiert wird, ruft zunehmend Kritik hervor."
          ],
          [
            "Eine rationale Pharmakotherapie wägt Nutzen und Risiken minutiös ab, bevor ein synthetisches [das Medikament, -e|Medikament] oder eine potente [die Tablette, -n|Tablette] verabreicht wird.",
            "Gleichzeitig belegen gesundheitsökonomische Studien, dass die ambulante Primärversorgung in der niedergelassenen [die Praxis, Praxen|Praxis] Krankenhauseinweisungen signifikant reduziert.",
            "Der Begriff [die Gesundheit|Gesundheit] wird gemäß der WHO-Definition nicht mehr bloß als Abwesenheit von Krankheit wie einer akuten [die Erkältung, -en|Erkältung] begriffen, sondern als Zustand vollkommenen körperlichen, mentalen und sozialen Wohlbefindens."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// CHAPTER 10: NOTFÄLLE
// -------------------------------------------------------------
export const chapter10TopicsEnrichment = [
  {
    id: "notruf",
    title: "Der Notruf",
    description: "Notrufnummern (112 und 110), Erste Hilfe, Rettungsdienste, Unfallmeldung und Verhalten in Gefahrensituationen.",
    details: "In ganz Europa wählt man bei medizinischen Notfällen und Bränden die 112 (gebührenfrei), bei der Polizei in Deutschland die 110. Beim Notruf gelten die lebenswichtigen '5 W-Fragen': 1. Wo ist es passiert? 2. Was ist passiert? 3. Wie viele Verletzte? 4. Welche Verletzungen? 5. Warten auf Rückfragen! (Niemals zuerst auflegen!). Wichtig: Erste Hilfe leisten ist in Deutschland gesetzliche Pflicht ('unterlassene Hilfeleistung' ist strafbar).",
    arabicDescription: "أرقام الطوارئ والإسعاف والإنقاذ والإسعافات الأولية في ألمانيا. يتناول هذا الدرس أرقام الطوارئ الأوروبية الموحدة (112 للإسعاف والإطفاء، 110 للشرطة)، وقواعد الإبلاغ الخمس (5 W-Fragen)، والإسعافات الأولية (Erste Hilfe) الإلزامية قانونياً في ألمانيا لإنقاذ الأرواح في الحوادث.",
    words: [
      {
        german: "Hilfe!",
        arabic: "النجدة! / المساعدة!",
        english: "Help!",
        example: "„Hilfe! Bitte rufen Sie schnell einen Krankenwagen!“, rief der Passant laut."
      },
      {
        german: "der Notfall, -̈e",
        arabic: "الحالة الطارئة / الطوارئ",
        english: "emergency",
        example: "In einem lebensbedrohlichen Notfall zählt jede einzelne Minute."
      },
      {
        german: "die Feuerwehr",
        arabic: "رجال الإطفاء / المطافئ",
        english: "fire department, fire brigade",
        example: "Die Feuerwehr rückte mit Blaulicht und Sirene an, um den Brand zu löschen."
      },
      {
        german: "der Unfall, -̈e",
        arabic: "الحادث",
        english: "accident",
        example: "An der Kreuzung ereignete sich ein Verkehrsunfall zwischen zwei Fahrzeugen."
      },
      {
        german: "der Krankenwagen, -",
        arabic: "سيارة الإسعاف",
        english: "ambulance",
        example: "Die Sanitäter trugen den Verletzten vorsichtig in den Krankenwagen."
      },
      {
        german: "die Polizei",
        arabic: "الشرطة",
        english: "police",
        example: "Die Polizei sperrte die Unfallstelle ab und nahm das Protokoll auf."
      },
      {
        german: "der Notarzt, -̈e",
        arabic: "طبيب الطوارئ / طبيب الإسعاف",
        english: "emergency doctor",
        example: "Der Notarzt leitete sofort am Unfallort lebensrettende Maßnahmen ein."
      },
      {
        german: "das Krankenhaus, -̈er",
        arabic: "المستشفى",
        english: "hospital",
        example: "Der Patient wurde zur weiteren Operation ins nächste Krankenhaus transportiert."
      },
      {
        german: "die Notaufnahme, -n",
        arabic: "قسم الطوارئ / الإسعاف بالمستشفى",
        english: "emergency room (ER)",
        example: "In der Notaufnahme kümmern sich Ärzte und Pfleger um die Erstversorgung."
      },
      {
        german: "die Erste Hilfe",
        arabic: "الإسعافات الأولية",
        english: "first aid",
        example: "Jeder Führerscheininhaber in Deutschland muss einen Kurs in Erster Hilfe absolvieren."
      },
      {
        german: "die Gefahr, -en",
        arabic: "الخطر",
        english: "danger, hazard",
        example: "Wegen ausgelaufenen Benzins bestand akute Gefahr einer Explosion."
      },
      {
        german: "retten",
        arabic: "ينقذ",
        english: "to rescue, save",
        example: "Den mutigen Rettern gelang es, das Kind aus dem brennenden Gebäude zu retten."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Schnelle Hilfe im Notfall",
        intro: "Einfache Sätze über Notrufnummern, Rettung und Erste Hilfe (A1).",
        paragraphs: [
          [
            "Ein [der Notfall, -̈e|Notfall] kann plötzlich passieren.",
            "Auf der Straße gibt es einen schweren [der Unfall, -̈e|Unfall] mit zwei Autos.",
            "Jemand ruft laut: „[Hilfe!|Hilfe!] Bitte wählen Sie sofort die Notrufnummer 112!“",
            "Ich bleibe ruhig, nehme mein Handy und rufe die Rettungskräfte an."
          ],
          [
            "In wenigen Minuten kommt ein schneller [der Krankenwagen, -|Krankenwagen] mit lautem Blaulicht.",
            "Auch die [die Feuerwehr|Feuerwehr] und die [die Polizei|Polizei] sind sofort vor Ort.",
            "Ein Helfer leistet sofort [die Erste Hilfe|Erste Hilfe] am Straßenrand.",
            "Die mutigen Sanitäter [retten|retten] den verletzten Fahrer und bringen ihn ins nächste [das Krankenhaus, -̈er|Krankenhaus]."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Das richtige Verhalten am Unfallort",
        intro: "Rettungskette, 5-W-Fragen und Übergabe an den Notarzt (A2).",
        paragraphs: [
          [
            "Gestern Nachmittag wurde ich Zeuge von einem gefährlichen [der Unfall, -̈e|Unfall] auf der Landstraße.",
            "Sofort schaltete ich das Warnblinklicht ein, sicherte die Unfallstelle mit dem Warndreieck ab und leistete [die Erste Hilfe|Erste Hilfe].",
            "Es bestand große [die Gefahr, -en|Gefahr], da dichter Rauch aus dem Motorraum aufstieg.",
            "Ich wählte die europäische Notrufnummer 112 und meldete der Leitstelle präzise: Wo es passierte und wie viele Personen verletzt waren."
          ],
          [
            "„Bleiben Sie am Apparat, der [der Krankenwagen, -|Krankenwagen] und die [die Feuerwehr|Feuerwehr] sind bereits unterwegs!“, wies mich der Disponent an.",
            "Kurz darauf traf die [die Polizei|Polizei] ein und sperrte beide Fahrspuren ab.",
            "Der erfahrene [der Notarzt, -̈e|Notarzt] stabilisierte den Kreislauf des verletzten Fahrers noch im Rettungswagen.",
            "Anschließend wurde der Patient zur intensivmedizinischen Überwachung in die [die Notaufnahme, -n|Notaufnahme] gefahren."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Die Rettungskette: Zahnräder im Wettlauf gegen die Zeit",
        intro: "Wie professionelle Rettungskräfte und Zivilcourage zusammenwirken (B1).",
        paragraphs: [
          [
            "In einer akuten Gefahrenlage entscheidet das reibungslose Ineinandergreifen der Rettungskette über Leben und Tod.",
            "Ersthelfer sind das erste und wichtigste Glied dieser Kette: Wer beherzt [die Erste Hilfe|Erste Hilfe] leistet und lebensrettende Sofortmaßnahmen einleitet, überbrückt das therapiefreie Intervall.",
            "Der telefonische Notruf an die Leitstelle setzt binnen Sekunden spezialisierte Einsatzkräfte in Marsch.",
            "Während die technische Einheit der [die Feuerwehr|Feuerwehr] eingeklemmte Personen aus Wracks befreit, bannt sie zeitgleich jede explosive [die Gefahr, -en|Gefahr]."
          ],
          [
            "Parallel dazu übernimmt ein hochqualifizierter [der Notarzt, -̈e|Notarzt] die präklinische Notfallmedizin direkt am Unglücksort.",
            "Im modernen [der Krankenwagen, -|Krankenwagen] wird der Verunfallte beatmet und medikamentös versorgt, während die [die Polizei|Polizei] den Rettungskorridor freihält.",
            "Die telefonische Voranmeldung in der [die Notaufnahme, -n|Notaufnahme] stellt sicher, dass das Traumateam im [das Krankenhaus, -̈er|Krankenhaus] lückenlos vorbereitet bereitsteht.",
            "Dank dieses eingespielten Systems gelingt es tagtäglich, Tausende Menschenleben erfolgreich zu [retten|retten]."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Katastrophenmedizin, Risikomanagement und Notfallresilienz",
        intro: "Systemtheoretische und organisationssoziologische Analyse integrierter Gefahrenabwehr (B2).",
        paragraphs: [
          [
            "Die Bewältigung von Großschadenslagen und komplexen MANV-Szenarien (Massenanfall von Verletzten) stellt die ultimativen Anforderungen an die Krisenfestigkeit einer Gesellschaft.",
            "Ein schwerer [der Unfall, -̈e|Unfall] auf Hochgeschwindigkeitsstrecken erfordert die synchrone Triage durch den leitenden [der Notarzt, -̈e|Notarzt] unter extremen zeitlichen und psychologischen Restriktionen.",
            "Interdisziplinäre Einsatzstäbe aus [die Feuerwehr|Feuerwehr], THW und [die Polizei|Polizei] operieren nach standardisierten Stabsdienstordnungen, um unübersichtliche Gefahrenlagen zu deeskalieren.",
            "Die systemische [die Gefahr, -en|Gefahr] von Sekundärschäden zwingt Einsatzleiter zu rigorosem Ressourcenmanagement im Angesicht akut bedrohter Menschenleben."
          ],
          [
            "Auf zivilgesellschaftlicher Ebene verdeutlicht jeder dramatische [der Notfall, -̈e|Notfall], dass staatliche Rettungssysteme ohne zivilcouragierte Laienhilfe an ihre Kapazitätsgrenzen stoßen.",
            "Die Implementierung digitaler Ersthelfer-Alarmierungssysteme via Smartphone revolutioniert die Rettungskette, bevor der reguläre [der Krankenwagen, -|Krankenwagen] eintrifft.",
            "In der klinischen Endstufe fungiert die interdisziplinäre [die Notaufnahme, -n|Notaufnahme] in einem zertifizierten überregionalen [das Krankenhaus, -̈er|Krankenhaus] als Hochleistungszentrum moderner Schockraumversorgung, dessen Mission es bleibt, menschliche Existenz gegen das Unvorhersehbare zu [retten|retten]."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// CHAPTER 11: ERDE UND NATUR
// -------------------------------------------------------------
export const chapter11TopicsEnrichment = [
  {
    id: "das_wetter",
    title: "Das Wetter",
    description: "Meteorologie, Jahreszeiten, Wetterphänomene, Klimazonen und Wetterbericht.",
    details: "Über das Wetter sprechen ('Smalltalk über das Wetter') ist im deutschsprachigen Raum der beliebteste Gesprächseinstieg. Wichtige unpersönliche Verben mit 'es': 'Es regnet', 'Es schneit', 'Es stürmt', 'Es blitzt und donnert'. Adjektive und Zustände: 'Es ist sonnig / windig / bewölkt / neblig / schwül / kalt / warm'. Der Wetterbericht ('die Wettervorhersage') informiert täglich über Temperaturen ('die Höchstwerte / Tiefstwerte') und Niederschlag.",
    arabicDescription: "الطقس والأحوال الجوية والظواهر المناخية في ألمانيا وأوروبا. يتناول هذا الدرس الفصول الأربعة، والمطر، والثلج، والرياح، والعواصف، والضباب، واستخدام الضمير غير الشخصي (es) في التعبير عن الطقس (es regnet, es schneit)، وقراءة النشرات الجوية والتحدث عن درجات الحرارة.",
    words: [
      {
        german: "die Sonne",
        arabic: "الشمس",
        english: "sun",
        example: "Am wolkenlosen blauen Himmel scheint den ganzen Tag die warme Sonne."
      },
      {
        german: "der Regen",
        arabic: "المطر",
        english: "rain",
        example: "Der sanfte Regen im Frühling lässt die Pflanzen und Bäume sprießen."
      },
      {
        german: "der Schnee",
        arabic: "الثلج / الجليد",
        english: "snow",
        example: "Im Winter bedeckt eine dicke weiße Decke aus Schnee die Landschaft."
      },
      {
        german: "der Wind",
        arabic: "الرياح / الهواء",
        english: "wind",
        example: "Ein kräftiger Wind weht vom Meer herüber und treibt die Segelboote an."
      },
      {
        german: "die Wolke, -n",
        arabic: "السحابة / الغيمة",
        english: "cloud",
        example: "Dunkle graue Wolken ziehen am Horizont auf und kündigen ein Unwetter an."
      },
      {
        german: "das Gewitter, -",
        arabic: "العاصفة الرعدية",
        english: "thunderstorm",
        example: "Während des heftigen Gewitters zuckten helle Blitze über den Nachthimmel."
      },
      {
        german: "der Sturm, -̈e",
        arabic: "العاصفة / الرياح العاتية",
        english: "storm, gale",
        example: "Der orkanartige Sturm knickte im Park mehrere alte Bäume um."
      },
      {
        german: "der Nebel",
        arabic: "الضباب",
        english: "fog, mist",
        example: "Dichter Nebel im Herbst schränkte die Sicht auf der Autobahn massiv ein."
      },
      {
        german: "die Temperatur, -en",
        arabic: "درجة الحرارة",
        english: "temperature",
        example: "Im Juli klettert die Temperatur im Schatten oft auf über dreißig Grad."
      },
      {
        german: "warm",
        arabic: "دافئ / حار",
        english: "warm",
        example: "Heute ist es angenehm warm, ideal für einen Ausflug an den Badesee."
      },
      {
        german: "kalt",
        arabic: "بارد",
        english: "cold",
        example: "Im Januar ist es draußen oft eisig kalt mit Minustemperaturen."
      },
      {
        german: "scheinen",
        arabic: "تشرق / تسطع (الشمس)",
        english: "to shine (sun)",
        example: "Die goldenen Sonnenstrahlen scheinen durch das geöffnete Fenster ins Zimmer."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wie ist das Wetter heute?",
        intro: "Einfache Sätze über das Wetter, Sonne und Regen im Jahreslauf (A1).",
        paragraphs: [
          [
            "Das Wetter ändert sich in Deutschland sehr oft.",
            "Im Sommer ist es herrlich [warm|warm], und die goldene [die Sonne|Sonne] beginnt früh am Morgen zu [scheinen|scheinen].",
            "Manchmal ziehen weiße [die Wolke, -n|Wolken] über den blauen Himmel.",
            "Im Herbst weht ein frischer [der Wind|Wind], und es fällt oft kühler [der Regen|Regen]."
          ],
          [
            "Im Winter ist es draußen richtig [kalt|kalt] und friert.",
            "Wenn die [die Temperatur, -en|Temperatur] unter null Grad fällt, rieselt weißer [der Schnee|Schnee] vom Himmel.",
            "Im November liegt am Morgen oft dichter [der Nebel|Nebel] über den Feldern.",
            "Wenn ein lautes [das Gewitter, -|Gewitter] mit Blitz und Donner kommt, bleibe ich gern sicher zu Hause."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Der tägliche Wetterbericht und der Wechsel der Jahreszeiten",
        intro: "Wettervorhersagen verstehen und die passende Kleidung wählen (A2).",
        paragraphs: [
          [
            "Bevor ich morgens das Haus verlasse, schaue ich mir immer kurz die Wetter-App auf dem Smartphone an.",
            "Die Meteorologen melden für den Nachmittag eine maximale [die Temperatur, -en|Temperatur] von 22 Grad, also angenehm [warm|warm].",
            "Am Vormittag soll die [die Sonne|Sonne] noch ungestört [scheinen|scheinen], aber gegen Abend zieht eine dunkle [die Wolke, -n|Wolke] auf.",
            "Ein mäßiger [der Wind|Wind] kündigt bereits einen bevorstehenden Wetterumschwung an."
          ],
          [
            "„Hast du deinen Regenschirm eingepackt?“, fragt mich mein Vater an der Haustür.",
            "„Ja, denn laut Wetterbericht droht am Abend ein kräftiges [das Gewitter, -|Gewitter] mit ergiebigem [der Regen|Regen]“, antworte ich vorsichtig.",
            "Ganz anders war das Wetter letzte Woche: Da blies ein heftiger [der Sturm, -̈e|Sturm] über das Land, gefolgt von feuchtem [der Nebel|Nebel].",
            "Im mitteleuropäischen Klima muss man auf jede Überraschung der Natur vorbereitet sein."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Klimatische Dynamik und mitteleuropäische Wetterlagen",
        intro: "Wie Hoch- und Tiefdruckgebiete das Wettergeschehen und den Alltag prägen (B1).",
        paragraphs: [
          [
            "Das mitteleuropäische Wettergeschehen wird maßgeblich durch das Aufeinandertreffen maritimer Atlantikluft mit kontinentalen Strömungen bestimmt.",
            "Ein stabiles Hochdruckgebiet beschert im Hochsommer strahlenden Sonnenschein, bei dem die [die Sonne|Sonne] stundenlang vom Firmament brennt und die [die Temperatur, -en|Temperatur] auf Rekordwerte steigen lässt.",
            "Doch wenn sich feuchtwarme Luftmassen aufheizen, entlädt sich die Energie oft in einem gewaltigen [das Gewitter, -|Gewitter], das sintflutartigen [der Regen|Regen] mit sich bringt.",
            "Orkanartige Böen verwandeln ein solches Sommerunwetter schnell in einen gefährlichen [der Sturm, -̈e|Sturm], der Dächer abdeckt und Äste abbricht."
          ],
          [
            "Im Übergang zum Spätherbst dominieren Inversionswetterlagen, bei denen feuchter [der Nebel|Nebel] Talsenken tagelang in diffuses Licht hüllt.",
            "Während es im Flachland empfindlich [kalt|kalt] und trüb bleibt, kann man auf den Bergen sonnige Aussichten genießen.",
            "Im Hochgebirge verwandelt der erste ergiebige [der Schnee|Schnee] die Gipfel in weiße Winterlandschaften, die Skifahrer und Naturfreunde magisch anziehen.",
            "Die Faszination des Wetters liegt in dieser unberechenbaren Vielfalt, die den Rhythmus unseres Lebens seit Urzeiten prägt."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Klimatologie im Anthropozän: Extremwetter und globale Erwärmung",
        intro: "Wissenschaftliche und meteorologische Analyse klimatischer Destabilisierung (B2).",
        paragraphs: [
          [
            "Die fortschreitende anthropogene Erwärmung der Erdatmosphäre verändert die globalen Zirkulationsmuster und destabilisiert den polaren Jetstream nachhaltig.",
            "Als Konsequenz verharren atmosphärische Blocking-Wetterlagen wochenlang stationär, sodass persistente Hitzewellen mit extremer [die Temperatur, -en|Temperatur] verheerende Dürreperioden in agrarischen Regionen auslösen.",
            "Die Erwärmung der Ozeane speist gigantische Energiemengen in atlantische Tiefdruckgebiete ein, wodurch ein orkanartiger [der Sturm, -̈e|Sturm] an zerstörerischer Intensität gewinnt.",
            "Konvektive Starkregenereignisse, bei denen sintflutartiger [der Regen|Regen] innerhalb kürzester Zeit ganze Flussläufe über die Ufer treten lässt, werden zur neuen Normalität."
          ],
          [
            "Gleichzeitig schwindet die Verlässlichkeit traditioneller winterlicher Phänomene: Natürlicher [der Schnee|Schnee] wird in mittleren Gebirgslagen zur Rarität, während der Ausfall von Niederschlägen die Grundwasserneubildung gefährdet.",
            "Meteorologische Phänomene wie bodennaher [der Nebel|Nebel] oder feinstaubbelastete Inversionsschichten illustrieren die komplexe Wechselwirkung zwischen atmosphärischer Chemie und urbaner Topografie.",
            "Die Menschheit steht vor der existenziellen Notwendigkeit, rigorose Klimaschutzmaßnahmen mit adaptiven Infrastrukturen zu verbinden, um den Wetterextremen des 21. Jahrhunderts resilient zu begegnen."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// CHAPTER 12: ZAHLEN UND MASSE
// -------------------------------------------------------------
export const chapter12TopicsEnrichment = [
  {
    id: "die_zeit",
    title: "Die Zeit",
    description: "Uhrzeiten, Zeitbegriffe, Zeiteinteilung, Wochentage, Monate und Zeitmanagement.",
    details: "Im Deutschen gibt es zwei Systeme zur Angabe der Uhrzeit: 1. Das offizielle System (24-Stunden-Zählung, z. B. '14:30 Uhr' = 'vierzehn Uhr dreißig'). 2. Das umgangssprachliche System (12-Stunden-Zählung mit 'vor' und 'nach', z. B. 'halb drei' = 14:30 Uhr, 'Viertel vor vier' = 15:45 Uhr). Pünktlichkeit ('die Pünktlichkeit') ist eine der bekanntesten deutschen Tugenden. Zeitmanagement: 'Ich habe keine Zeit', 'Die Zeit vergeht wie im Flug', 'Pünktlich auf die Minute'.",
    arabicDescription: "الوقت والزمن وتحديد الساعات في ألمانيا. يتناول هذا الدرس نظامي قراءة الساعة في ألمانيا (النظام الرسمي الرقمي 24 ساعة، والنظام الشعبي العام مع استخدام vor و nach و halb)، ومفردات اليوم، والأسبوع، والشهر، والسنة، وأهمية الدقة والالتزام بالمواعيد (Pünktlichkeit) في الثقافة الألمانية.",
    words: [
      {
        german: "die Uhrzeit, -en",
        arabic: "الوقت / الساعة المحددة",
        english: "time of day, clock time",
        example: "Können Sie mir bitte die genaue Uhrzeit sagen? Meine Uhr ist stehengeblieben."
      },
      {
        german: "die Stunde, -n",
        arabic: "الساعة (مدة 60 دقيقة)",
        english: "hour",
        example: "Die Vorlesung an der Universität dauert genau eineinhalb Stunden."
      },
      {
        german: "die Minute, -n",
        arabic: "الدقيقة",
        english: "minute",
        example: "Ich brauche noch fünf Minuten, dann bin ich abmarschbereit."
      },
      {
        german: "der Tag, -e",
        arabic: "اليوم",
        english: "day",
        example: "Jeder neue Tag bringt frische Chancen und spannende Begegnungen mit sich."
      },
      {
        german: "die Woche, -n",
        arabic: "الأسبوع",
        english: "week",
        example: "Eine Woche hat sieben Tage, und am Wochenende ruhen wir uns aus."
      },
      {
        german: "die Sekunde, -n",
        arabic: "الثانية",
        english: "second",
        example: "Der Sprinter verbesserte den Weltrekord um drei Hundertstelsekunden."
      },
      {
        german: "der Monat, -e",
        arabic: "الشهر",
        english: "month",
        example: "Der Monat Mai verzaubert uns mit blühenden Wiesen und angenehmen Temperaturen."
      },
      {
        german: "das Jahr, -e",
        arabic: "العام / السنة",
        english: "year",
        example: "Ein Schaltjahr hat 366 Tage statt der üblichen 365."
      },
      {
        german: "der Morgen",
        arabic: "الصباح",
        english: "morning",
        example: "Am frühen Morgen ist die Luft im Wald besonders klar und belebend."
      },
      {
        german: "der Mittag",
        arabic: "الظهر / وقت الظهيرة",
        english: "noon, midday",
        example: "Am Mittag essen wir in der Mensa zu Mittag und tauschen uns aus."
      },
      {
        german: "der Abend",
        arabic: "المساء",
        english: "evening",
        example: "Am gemütlichen Abend entspanne ich mit einem guten Buch im Sessel."
      },
      {
        german: "pünktlich",
        arabic: "منضبط في الموعد / في الوقت المحدد",
        english: "punctual, on time",
        example: "In Deutschland wird erwartet, dass man stets pünktlich zum Termin erscheint."
      }
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Wie spät ist es?",
        intro: "Einfache Sätze über die Uhrzeit, Tageszeiten und Pünktlichkeit (A1).",
        paragraphs: [
          [
            "Die Zeit vergeht jeden Tag sehr schnell.",
            "Ein [das Jahr, -e|Jahr] hat zwölf [der Monat, -e|Monate], und eine [die Woche, -n|Woche] hat sieben [der Tag, -e|Tage].",
            "Am frühen [der Morgen|Morgen] stehe ich um sieben Uhr auf und frühstücke.",
            "Um zwölf Uhr ist [der Mittag|Mittag] und ich mache eine kurze Pause."
          ],
          [
            "Am [der Abend|Abend] komme ich nach Hause und esse zu Abend.",
            "Ich schaue auf meine Armbanduhr und prüfe die genaue [die Uhrzeit, -en|Uhrzeit].",
            "Eine [die Stunde, -n|Stunde] hat sechzig [die Minute, -n|Minuten], und jede Minute hat sechzig [die Sekunde, -n|Sekunden].",
            "Mein Deutschkurs beginnt um vierzehn Uhr, und ich bin immer sehr [pünktlich|pünktlich]."
          ]
        ]
      },
      A2: {
        level: "A2",
        badge: "A2 – Alltag & Praxis",
        title: "Termine planen und Pünktlichkeit im Alltag",
        intro: "Uhrzeiten verabreden, Fristen einhalten und den Tag strukturieren (A2).",
        paragraphs: [
          [
            "In Mitteleuropa ist Pünktlichkeit eine der wichtigsten gesellschaftlichen Umgangsformen im Berufs- und Privatleben.",
            "Wer zu einer Verabredung geht, sollte immer [pünktlich|pünktlich] erscheinen oder rechtzeitig Bescheid geben, wenn er sich um wenige [die Minute, -n|Minuten] verspätet.",
            "Jeder [der Tag, -e|Tag] ist bei mir gut strukturiert: Am [der Morgen|Morgen] erledige ich dringende Telefonate.",
            "Gegen [der Mittag|Mittag] treffe ich mich mit Kollegen, und am [der Abend|Abend] gehe ich zum Sport."
          ],
          [
            "„Zu welcher [die Uhrzeit, -en|Uhrzeit] beginnt unser Meeting am Donnerstag?“, fragt mich ein Teamkollege.",
            "„Genau um zehn Uhr, bitte sei fünf Minuten früher da!“, antworte ich ihm freundlich.",
            "Für dieses Projekt haben wir eine ganze [die Woche, -n|Woche] intensiv gearbeitet.",
            "Am Ende vom [der Monat, -e|Monat] ziehen wir Bilanz und planen die Meilensteine für das nächste [das Jahr, -e|Jahr]."
          ]
        ]
      },
      B1: {
        level: "B1",
        badge: "B1 – Ausführliche Erzählung",
        title: "Chronobiologie, Zeitkultur und der Wert des Augenblicks",
        intro: "Wie wir mit Zeit umgehen, Prioritäten setzen und Entschleunigung finden (B1).",
        paragraphs: [
          [
            "Die Wahrnehmung von Zeit ist ein zutiefst subjektives Phänomen, das eng mit unserer inneren Verfassung verknüpft ist.",
            "Während eine einzelne [die Stunde, -n|Stunde] bei langweiliger Routine endlos scheinen kann, verfliegt ein erfüllter [der Tag, -e|Tag] wie im Flug.",
            "Die moderne Gesellschaft hat das Verstreichen jeder einzelnen [die Sekunde, -n|Sekunde] durch digitale Uhren exakt messbar gemacht.",
            "Vom ersten Sonnenstrahl am [der Morgen|Morgen] bis zur Dämmerung am [der Abend|Abend] taktet die offizielle [die Uhrzeit, -en|Uhrzeit] unsere beruflichen Verpflichtungen."
          ],
          [
            "In der deutschsprachigen Arbeitskultur gilt es als Zeichen von Professionalität und Respekt, stets verlässlich und [pünktlich|pünktlich] zu agieren.",
            "Gleichzeitig erfordert gesunde Lebensführung, sich im Laufe einer anstrengenden [die Woche, -n|Woche] bewusste Oasen der Ruhe zu reservieren.",
            "Wenn ein ganzer [der Monat, -e|Monat] im Zeitraffer vergeht, hilft der Blick auf das große Ganze, um den eigenen Lebensweg für das kommende [das Jahr, -e|Jahr] neu zu justieren.",
            "Denn letztlich ist Zeit die wertvollste Ressource, die wir besitzen – man kann sie weder kaufen noch anhalten, sondern nur mit Sinn erfüllen."
          ]
        ]
      },
      B2: {
        level: "B2",
        badge: "B2 – Differenziert & Komplex",
        title: "Chronopolitik, Beschleunigung und die Philosophie der Temporalität",
        intro: "Philosophische und soziologische Dekonstruktion von Zeitregimen in der Spätmoderne (B2).",
        paragraphs: [
          [
            "Der Soziologe Hartmut Rosa analysiert die Moderne prägnant als Epoche einer allumfassenden gesellschaftlichen Beschleunigung.",
            "Die technische Beschleunigung von Transport und Kommunikation hat paradoxerweise nicht zu einem Zeitgewinn geführt, sondern das Gefühl chronischer Zeitknappheit dramatisch verschärft.",
            "Der lineare Zeitstrahl, eingeteilt in atomgenaue [die Sekunde, -n|Sekunden] und standardisierte [die Minute, -n|Minuten], fungiert als disziplinierendes Herrschaftsinstrument industrieller Taktung.",
            "Das Diktat, zu jeder [die Uhrzeit, -en|Uhrzeit] unfehlbar [pünktlich|pünktlich] zu funktionieren, verdrängt die zirkulären Rhythmen der Natur von [der Tag, -e|Tag] und Nacht."
          ],
          [
            "Während die traditionelle Chronobiologie die hormonelle Steuerung vom [der Morgen|Morgen] bis zum [der Abend|Abend] erforscht, erzwingt die globale 24/7-Ökonomie eine Entkoppelung vom natürlichen Hell-Dunkel-Zyklus.",
            "Individuen erfahren die Verflüchtigung ganzer Dekaden, in denen ein [der Monat, -e|Monat] in den nächsten übergeht und ein [das Jahr, -e|Jahr] das andere jagt, ohne nachhaltige Resonanzerfahrungen zu hinterlassen.",
            "Echte Souveränität im 21. Jahrhundert manifestiert sich daher in der Fähigkeit zur reflexiven Entschleunigung und dem Mut, sich dem totalitären Zeitregime spätkapitalistischer Verwertbarkeit punktuell zu entziehen."
          ]
        ]
      }
    }
  }
];

// -------------------------------------------------------------
// SCRIPT RUNNER TO APPLY TO JSON FILES
// -------------------------------------------------------------
async function apply() {
  const ch7Path = path.resolve("src/data/vocabulary/7-kommunikation.json");
  const ch8Path = path.resolve("src/data/vocabulary/8-freizeit.json");
  const ch9Path = path.resolve("src/data/vocabulary/9-körper-und-gesundheit.json");
  const ch10Path = path.resolve("src/data/vocabulary/10-notfälle.json");
  const ch11Path = path.resolve("src/data/vocabulary/11-erde-und-natur.json");
  const ch12Path = path.resolve("src/data/vocabulary/12-zahlen-und-maße.json");
  const storiesPath = path.resolve("src/features/vocabulary/data/topic-stories.json");

  const ch7Data = JSON.parse(fs.readFileSync(ch7Path, "utf8"));
  const ch8Data = JSON.parse(fs.readFileSync(ch8Path, "utf8"));
  const ch9Data = JSON.parse(fs.readFileSync(ch9Path, "utf8"));
  const ch10Data = JSON.parse(fs.readFileSync(ch10Path, "utf8"));
  const ch11Data = JSON.parse(fs.readFileSync(ch11Path, "utf8"));
  const ch12Data = JSON.parse(fs.readFileSync(ch12Path, "utf8"));
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

  updateChapter(ch7Data, chapter7TopicsEnrichment, "7-kommunikation.json");
  updateChapter(ch8Data, chapter8TopicsEnrichment, "8-freizeit.json");
  updateChapter(ch9Data, chapter9TopicsEnrichment, "9-körper-und-gesundheit.json");
  updateChapter(ch10Data, chapter10TopicsEnrichment, "10-notfälle.json");
  updateChapter(ch11Data, chapter11TopicsEnrichment, "11-erde-und-natur.json");
  updateChapter(ch12Data, chapter12TopicsEnrichment, "12-zahlen-und-maße.json");

  fs.writeFileSync(ch7Path, JSON.stringify(ch7Data, null, 2), "utf8");
  fs.writeFileSync(ch8Path, JSON.stringify(ch8Data, null, 2), "utf8");
  fs.writeFileSync(ch9Path, JSON.stringify(ch9Data, null, 2), "utf8");
  fs.writeFileSync(ch10Path, JSON.stringify(ch10Data, null, 2), "utf8");
  fs.writeFileSync(ch11Path, JSON.stringify(ch11Data, null, 2), "utf8");
  fs.writeFileSync(ch12Path, JSON.stringify(ch12Data, null, 2), "utf8");
  fs.writeFileSync(storiesPath, JSON.stringify(storiesData, null, 2), "utf8");

  console.log("Chapters 7 through 12 files written successfully!");
}

apply();
