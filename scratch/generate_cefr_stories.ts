import * as fs from "node:fs";
import * as path from "node:path";

interface StoryLevel {
  level: "A1" | "A2" | "B1" | "B2";
  badge: string;
  title: string;
  intro: string;
  paragraphs: string[][];
}

type TopicCefrStories = Record<"A1" | "A2" | "B1" | "B2", StoryLevel>;

// Read existing single stories to use as base for A1 or A2 where appropriate
const existingStoriesPath = path.resolve("./src/features/vocabulary/data/topic-stories.json");
const existingStories: Record<string, { badge: string; title: string; intro?: string; paragraphs: string[][] }> = JSON.parse(
  fs.readFileSync(existingStoriesPath, "utf8")
);

const storiesData: Record<string, TopicCefrStories> = {};

// 1. stammbaum
storiesData["stammbaum"] = {
  A1: {
    level: "A1",
    badge: "A1 – Grundstufe",
    title: "Meine Familie",
    intro: "Einfache Sätze über die Familie und Verwandte (A1).",
    paragraphs: [
      [
        "Das ist meine Familie.",
        "Meine [die Mutter|Mutter] heißt Sarah und mein [der Vater|Vater] heißt Thomas.",
        "Zusammen sind sie meine [die Eltern|Eltern].",
        "Ich habe einen [der Bruder|Bruder] und eine [die Schwester|Schwester].",
        "Meine [die Großmutter|Großmutter] und mein [der Großvater|Großvater] wohnen in Berlin.",
        "Zusammen sind sie meine [die Großeltern|Großeltern]."
      ],
      [
        "Meine Mutter hat eine Schwester: meine [die Tante|Tante].",
        "Ihr Mann ist mein [der Onkel|Onkel].",
        "Sie haben zwei Kinder: meinen [der Cousin|Cousin] und meine [die Cousine|Cousine].",
        "Wir sind alle eine glückliche Familie."
      ]
    ]
  },
  A2: {
    level: "A2",
    badge: "A2 – Alltag & Treffen",
    title: "Ein Besuch bei den Großeltern",
    intro: "Alltägliche Familienerlebnisse mit Perfekt und Dialogen (A2).",
    paragraphs: [
      [
        "Am Sonntag besucht Amir seine [die Großmutter|Großmutter] und seinen [der Großvater|Großvater].",
        "Sie sitzen zusammen und schauen sich ein altes Familienfoto an.",
        "„Das sind meine [die Großeltern|Großeltern]“, sagt Amir.",
        "Auf dem Foto sieht man auch seine [die Mutter|Mutter] und seinen [der Vater|Vater].",
        "Zusammen sind sie Amirs [die Eltern|Eltern]."
      ],
      [
        "Amirs Mutter hat eine Schwester: seine [die Tante|Tante].",
        "Der Mann neben ihr ist sein [der Onkel|Onkel].",
        "Die beiden sind ein glückliches [das Ehepaar|Ehepaar].",
        "Amirs Tante ist seit vielen Jahren [verheiratet|verheiratet], aber sein Onkel war früher [geschieden|geschieden].",
        "Auf dem Bild steht Amir als kleiner [der Sohn|Sohn] neben seinem [der Bruder|Bruder]."
      ]
    ]
  },
  B1: {
    level: "B1",
    badge: "B1 – Ausführliche Erzählung",
    title: "Erinnerungen und Familientraditionen",
    intro: "Ausführliche Familiengeschichte mit Begründungen und Nebensätzen (B1).",
    paragraphs: [
      [
        "Für Amir ist die Familie der wichtigste Rückhalt im Leben.",
        "Heute hat seine Schwester einen Mann geheiratet, der Amirs [der Schwager|Schwager] geworden ist.",
        "Auch sein Bruder hat geheiratet; seine Frau ist nun Amirs [die Schwägerin|Schwägerin].",
        "Der Mann seiner Cousine ist der [der Schwiegersohn|Schwiegersohn] in der Familie, und die Frau seines Cousins ist die [die Schwiegertochter|Schwiegertochter] seiner Tante."
      ],
      [
        "Inzwischen hat Amirs Schwester zwei kleine Kinder: einen [der Enkel|Enkel] und eine [die Enkelin|Enkelin] für die Großeltern.",
        "Obwohl manche Verwandte in einer anderen Stadt wohnen, treffen sich alle [der/die Verwandte|Verwandten] regelmäßig.",
        "Alle diese Menschen sind eng miteinander [verwandt|verwandt] und helfen sich in jeder Lebenslage."
      ]
    ]
  },
  B2: {
    level: "B2",
    badge: "B2 – Differenziert & Komplex",
    title: "Generationen im gesellschaftlichen Wandel",
    intro: "Komplexe Reflexion über Generationenbeziehungen und Abstammung (B2).",
    paragraphs: [
      [
        "Der Begriff der Familie unterliegt im Laufe der Jahrzehnte einem stetigen soziokulturellen Wandel.",
        "Wenn wir unseren Stammbaum betrachten, erkennen wir die tiefe Verbundenheit mit unseren [der Vorfahre|Vorfahren], deren Lebensentscheidungen unsere Identität prägen.",
        "Ob jemand [ledig|ledig], [verlobt|verlobt], glücklich [verheiratet|verheiratet] oder nach einem schweren Schicksalsschlag [verwitwet|verwitwet] ist – jede Biografie bereichert das familiäre Gefüge."
      ],
      [
        "Die generationenübergreifende Weitergabe von Werten festigt das Vertrauen zwischen Großeltern, Eltern und Enkeln.",
        "In einer dynamischen Gesellschaft bietet der bewusste Rückgriff auf die familiären Wurzeln Orientierung und emotionale Stabilität."
      ]
    ]
  }
};

// 2. beziehungen
storiesData["beziehungen"] = {
  A1: {
    level: "A1",
    badge: "A1 – Grundstufe",
    title: "Gute Freunde",
    intro: "Einfache Sätze über Freundschaft und Kennenlernen (A1).",
    paragraphs: [
      [
        "Leon und Maya sind gute Freunde.",
        "Ihre [die Freundschaft|Freundschaft] ist sehr wichtig für sie.",
        "Sie sprechen oft über alles und [vertrauen|vertrauen] sich.",
        "Leon ist ein toller [der Kumpel|Kumpel] und hilft immer gern.",
        "Sie haben auch viele [der/die Bekannte|Bekannte] an der Universität."
      ]
    ]
  },
  A2: {
    level: "A2",
    badge: "A2 – Alltag & Praxis",
    title: "Ein Abend unter Freunden",
    intro: "Zusammenhängende Sätze über Beziehungen und Alltagserlebnisse (A2).",
    paragraphs: [
      [
        "Gestern haben sich Leon und Maya im Café getroffen.",
        "Sie haben eine enge [die Beziehung|Beziehung] und können über jedes Problem sprechen.",
        "Wenn es einmal einen kleinen [der Streit|Streit] gibt, finden sie schnell eine Lösung.",
        "Sie [sich verstehen|verstehen sich] ohne viele Worte und lachen oft zusammen."
      ]
    ]
  },
  B1: {
    level: "B1",
    badge: "B1 – Ausführliche Erzählung",
    title: "Vom Kennenlernen zur großen Liebe",
    intro: "Gefühle, Lebensentscheidungen und Partnerschaft reflektieren (B1).",
    paragraphs: [
      [
        "Nachdem sich Sophie und Jonas kennenlernten, hat es nicht lange gedauert, bis sie [sich verlieben|sich ineinander verliebten].",
        "Für Jonas ist Sophie die perfekte [der Partner / die Partnerin|Partnerin], weil sie gemeinsame Werte teilen.",
        "In ihrer Beziehung spüren beide eine tiefe [die Zuneigung|Zuneigung] und gegenseitigen Respekt.",
        "Weil alles so harmonisch verlief, haben sie beschlossen, in eine gemeinsame Wohnung [zusammenziehen|zusammenzuziehen]."
      ],
      [
        "„Eine dauerhafte [die Liebe|Liebe] basiert nicht nur auf Schmetterlingen im Bauch, sondern vor allem auf Verlässlichkeit“, erklärt Jonas lächelnd."
      ]
    ]
  },
  B2: {
    level: "B2",
    badge: "B2 – Differenziert & Komplex",
    title: "Die Psychologie zwischenmenschlicher Bindungen",
    intro: "Anspruchsvolle Analyse von Bindungsmustern und Konfliktkultur (B2).",
    paragraphs: [
      [
        "Zwischenmenschliche Beziehungen bewegen sich im Spannungsfeld zwischen individueller Autonomie und emotionaler Nähe.",
        "Eine tragfähige [die Beziehung|Beziehung] erfordert kontinuierliche Reflexionsbereitschaft sowie eine konstruktive Bewältigung von jedem aufkeimenden [der Streit|Streit].",
        "Wahre [die Zuneigung|Zuneigung] erweist sich vor allem in Krisenzeiten, in denen gegenseitiges Verständnis den Ausschlag gibt."
      ],
      [
        "Erst wenn [vertrauen|Vertrauen] als unerschütterliches Fundament etabliert ist, gelingt das harmonische Zusammenleben zweier eigenständiger Persönlichkeiten."
      ]
    ]
  }
};

// 3. lebensphasen
storiesData["lebensphasen"] = {
  A1: {
    level: "A1",
    badge: "A1 – Grundstufe",
    title: "Die Stationen des Lebens",
    intro: "Grundwortschatz zu den Lebensphasen vom Baby bis ins Alter (A1).",
    paragraphs: [
      [
        "Jeder Mensch durchläuft verschiedene Stationen im Leben.",
        "Zuerst ist man ein kleines [das Baby|Baby] oder ein neugeborener [der Säugling|Säugling].",
        "Danach wird man ein neugieriges [das Kind|Kind] und spielt viel.",
        "Später ist man ein [der Jugendliche / die Jugendliche|Jugendlicher] und geht zur Schule.",
        "Als [der Erwachsene / die Erwachsene|Erwachsener] arbeitet man jeden Tag."
      ]
    ]
  },
  A2: {
    level: "A2",
    badge: "A2 – Alltag & Praxis",
    title: "Erinnerungen an das Aufwachsen",
    intro: "Erfahrungen in der Kindheit und Jugendzeit (A2).",
    paragraphs: [
      [
        "Eine glückliche [die Kindheit|Kindheit] schenkt einem viele schöne Erinnerungen.",
        "In der [die Jugend|Jugend] verändert sich der Körper und man sucht seinen eigenen Weg.",
        "Die [die Pubertät|Pubertät] ist oft eine anstrengende, aber auch spannende Zeit für die ganze Familie.",
        "Gestern haben die Eltern Fotos von der [die Geburt|Geburt] ihres Sohnes angeschaut."
      ]
    ]
  },
  B1: {
    level: "B1",
    badge: "B1 – Ausführliche Erzählung",
    title: "Meilensteine und Familienplanung",
    intro: "Wichtige Lebensabschnitte, Schwangerschaft und Ruhestand (B1).",
    paragraphs: [
      [
        "Wenn ein Paar die Nachricht von einer [die Schwangerschaft|Schwangerschaft] erhält, beginnt ein völlig neues Kapitel.",
        "Die Vorbereitung auf die [die Geburt|Geburt] bringt viele Emotionen und praktische Veränderungen mit sich.",
        "Gleichzeitig blicken die Großeltern dankbar auf ihr erfülltes [das Alter|Alter] zurück.",
        "Seit mein Großvater in [die Rente|Rente] gegangen ist, genießt er seinen Garten und verbringt viel Zeit mit den Enkeln."
      ]
    ]
  },
  B2: {
    level: "B2",
    badge: "B2 – Differenziert & Komplex",
    title: "Demografischer Wandel und biographische Dynamik",
    intro: "Soziologische Betrachtung von Altersstrukturen und Lebensverläufen (B2).",
    paragraphs: [
      [
        "In modernen Industriegesellschaften verschieben sich die klassischen Grenzen biographischer Übergänge signifikant.",
        "Der Eintritt in die [die Rente|Rente] wird heute keineswegs mehr als Rückzug betrachtet, sondern eröffnet aktive Entfaltungsmöglichkeiten im [das Alter|Alter].",
        "Gleichzeitig erfordert die Begleitung junger Menschen durch die [die Pubertät|Pubertät] fundierte pädagogische Sensibilität seitens der [der Erwachsene / die Erwachsene|Erwachsenen]."
      ],
      [
        "Eine ganzheitliche Betrachtung des menschlichen Lebenszyklus würdigt jede Phase von der [die Geburt|Geburt] bis zum wohlverdienten Lebensabend."
      ]
    ]
  }
};

// Helper for generating standard 4-level pattern for remaining topics
function createFourLevels(
  _topicId: string,
  _topicTitle: string,
  _words: string[],
  config: {
    A1: { title: string; intro: string; sentences: string[] };
    A2: { title: string; intro: string; sentences: string[] };
    B1: { title: string; intro: string; sentences: string[] };
    B2: { title: string; intro: string; sentences: string[] };
  }
): TopicCefrStories {
  return {
    A1: {
      level: "A1",
      badge: "A1 – Grundstufe",
      title: config.A1.title,
      intro: config.A1.intro,
      paragraphs: [config.A1.sentences]
    },
    A2: {
      level: "A2",
      badge: "A2 – Alltag & Praxis",
      title: config.A2.title,
      intro: config.A2.intro,
      paragraphs: [config.A2.sentences]
    },
    B1: {
      level: "B1",
      badge: "B1 – Ausführliche Erzählung",
      title: config.B1.title,
      intro: config.B1.intro,
      paragraphs: [config.B1.sentences]
    },
    B2: {
      level: "B2",
      badge: "B2 – Differenziert & Komplex",
      title: config.B2.title,
      intro: config.B2.intro,
      paragraphs: [config.B2.sentences]
    }
  };
}

// 4. begruessen
storiesData["begruessen"] = createFourLevels("begruessen", "Begrüßen und verabschieden", [], {
  A1: {
    title: "Guten Tag im Alltag",
    intro: "Typische Begrüßungen und Abschiede für jeden Tag (A1).",
    sentences: [
      "Am Morgen sagt man freundlich [Guten Morgen!|„Guten Morgen!“].",
      "Tagsüber begrüßen wir Freunde mit [Hallo!|„Hallo!“] oder Kollegen mit [Guten Tag!|„Guten Tag!“].",
      "Am Abend wünschen wir allen einen [Guten Abend!|„Guten Abend!“].",
      "Wenn wir gehen, sagen wir [Tschüss!|„Tschüss!“] oder formell [Auf Wiedersehen!|„Auf Wiedersehen!“]."
    ]
  },
  A2: {
    title: "Höflichkeit im Gespräch",
    intro: "Gesprächseinstiege und Verabschiedungen im Alltag (A2).",
    sentences: [
      "Wenn man eine bekannte Person trifft, fragt man: [Wie geht's?|„Wie geht's?“].",
      "Im Büro fragt man höflich: [Wie geht es Ihnen?|„Wie geht es Ihnen?“].",
      "Vor dem Schlafengehen wünscht man der Familie eine [Gute Nacht!|„Gute Nacht!“].",
      "Beim Abschied freut man sich auf das nächste Treffen und sagt [Bis bald!|„Bis bald!“]."
    ]
  },
  B1: {
    title: "Begegnungen und regionale Besonderheiten",
    intro: "Höfliche Wendungen und regionale Begrüßungsformen (B1).",
    sentences: [
      "Beim ersten Kennenlernen sagt man höflich [Freut mich!|„Freut mich sehr, Sie kennenzulernen“].",
      "In Süddeutschland und Österreich hört man oft das traditionelle [Grüß Gott!|„Grüß Gott!“].",
      "Eine freundliche Begrüßung öffnet Türen und schafft sofort eine angenehme Atmosphäre zwischen Gesprächspartnern.",
      "Wer die richtigen Höflichkeitsregeln beherrscht, fühlt sich in jedem deutschsprachigen Umfeld sicher."
    ]
  },
  B2: {
    title: "Soziolinguistische Höflichkeitskonventionen",
    intro: "Differenzierte Registerwahl und interkulturelle Etikette (B2).",
    sentences: [
      "Die Wahl der adäquaten Grußformel signalisiert sozialen Respekt und situatives Fingerspitzengefühl.",
      "Während im beruflichen Kontext die formelle Distanz mit [Wie geht es Ihnen?|„Wie geht es Ihnen?“] gewahrt wird, dominiert privat oft ein herzliches [Hallo!|„Hallo!“].",
      "Regionale Idiome wie [Grüß Gott!|„Grüß Gott!“] spiegeln zudem die lebendige kulturelle Vielfalt des deutschen Sprachraums wider."
    ]
  }
});

// 5. feste
storiesData["feste"] = createFourLevels("feste", "Feste", [], {
  A1: {
    title: "Feste und Feiertage",
    intro: "Grundwortschatz zu beliebten Festen im Jahreslauf (A1).",
    sentences: [
      "Im Dezember feiern viele Menschen [Weihnachten|Weihnachten] mit der Familie.",
      "Im Frühling freuen sich die Kinder auf [Ostern|Ostern] und bunte Eier.",
      "Am 31. Dezember begrüßen wir das neue Jahr an [Silvester|Silvester].",
      "Zu jedem Geburtstag rufen wir fröhlich: [Herzlichen Glückwunsch!|„Herzlichen Glückwunsch!“]."
    ]
  },
  A2: {
    title: "Eine fröhliche Feier",
    intro: "Feiern mit Freunden und besondere Anlässe (A2).",
    sentences: [
      "Gestern haben wir eine wunderschöne [die Feier|Feier] für Marias [der Geburtstag|Geburtstag] organisiert.",
      "Im Winter wünschen sich alle Menschen [Frohe Weihnachten!|„Frohe Weihnachten!“] und ein gesundes neues Jahr.",
      "Jeder offizielle [der Feiertag|Feiertag] gibt uns Zeit, uns mit Freunden zu erholen.",
      "Eine romantische [die Hochzeit|Hochzeit] bringt zwei Familien festlich zusammen."
    ]
  },
  B1: {
    title: "Brauchtum und Traditionen erleben",
    intro: "Ausführliche Schilderung traditioneller Feste (B1).",
    sentences: [
      "Im Februar verkleiden sich viele Menschen für [der Karneval / der Fasching|den Karneval], um ausgelassen auf den Straßen zu tanzen.",
      "In München zieht [das Oktoberfest|das berühmte Oktoberfest] jedes Jahr Millionen begeisterte Gäste aus aller Welt an.",
      "Jedes Fest bewahrt eine jahrhundertealte [die Tradition|Tradition], die von Generation zu Generation weitergegeben wird.",
      "Gemeinsames Feiern stärkt das gesellschaftliche Miteinander und schafft unvergessliche Erinnerungen."
    ]
  },
  B2: {
    title: "Kulturelles Brauchtum und kollektive Identität",
    intro: "Analyse der soziokulturellen Bedeutung von Festkultur (B2).",
    sentences: [
      "Traditionelle Feste fungieren als essenzielle Ankerpunkte kollektiver Identitätsstiftung im Jahreskreis.",
      "Ob sakrale Festtage wie [Weihnachten|Weihnachten] oder säkulare Großereignisse wie [das Oktoberfest|das Oktoberfest] – sie strukturieren das gesellschaftliche Zeitbewusstsein.",
      "Die ritualisierte [die Tradition|Tradition] bietet im Zeitalter der Globalisierung emotionale Verortung und generationsübergreifende Kontinuität."
    ]
  }
});

// 6. wendepunkte
storiesData["wendepunkte"] = createFourLevels("wendepunkte", "Wendepunkte", [], {
  A1: {
    title: "Große Tage im Leben",
    intro: "Wichtige Stationen von der Geburt bis zum Berufsstart (A1).",
    sentences: [
      "Die [die Geburt|Geburt] eines Kindes bringt großes Glück in die Familie.",
      "Nach der Schule feiert man den erfolgreichen [der Schulabschluss|Schulabschluss].",
      "Danach beginnt eine spannende [die Ausbildung|Ausbildung] oder ein Studium.",
      "Der [der Berufseinstieg|Berufseinstieg] ist der erste Schritt in die Arbeitswelt."
    ]
  },
  A2: {
    title: "Veränderungen im Lebenslauf",
    intro: "Wichtige Entscheidungen und neue Lebensabschnitte (A2).",
    sentences: [
      "Ein [der Umzug|Umzug] in eine neue Stadt bringt viele frische Eindrücke.",
      "Eine glückliche [die Heirat|Heirat] verbindet zwei Menschen für die Zukunft.",
      "Wenn eine Ehe scheitert, kann eine [die Scheidung|Scheidung] jedoch sehr schmerzhaft sein.",
      "Jeder neue Lebensabschnitt erfordert Mut und Anpassungsbereitschaft."
    ]
  },
  B1: {
    title: "Neuanfänge und Abschiede",
    intro: "Krisen bewältigen und persönliche Meilensteine gestalten (B1).",
    sentences: [
      "Nach einer schwierigen Phase wagen viele Menschen einen mutigen [der Neuanfang|Neuanfang].",
      "Selbst wenn eine unerwartete [die Krise|Krise] das Leben erschüttert, wächst man an den Herausforderungen.",
      "Wenn ein geliebter Mensch stirbt, begleitet [die Beerdigung|die Beerdigung] den Abschied und ehrt das Andenken.",
      "Schließlich freuen sich ältere Arbeitnehmer auf einen ruhigen [der Ruhestand|Ruhestand] voller persönlicher Freiheit."
    ]
  },
  B2: {
    title: "Biographische Zäsuren und Resilienz",
    intro: "Tiefgründige Reflexion über existenzielle Wendepunkte (B2).",
    sentences: [
      "Existenzielle Wendepunkte wie [der Tod|der Tod] eines Angehörigen oder eine schmerzhafte [die Scheidung|Scheidung] erschüttern gewohnte Lebensentwürfe.",
      "Gleichwohl eröffnet die konstruktive Bewältigung einer tiefen [die Krise|Krise] oft das Potenzial für einen zukunftsweisenden [der Neuanfang|Neuanfang].",
      "Im wohlverdienten [der Ruhestand|Ruhestand] reflektieren viele Persönlichkeiten über den ganzheitlichen Bogen ihrer biographischen Meilensteine."
    ]
  }
});

// 7. gesicht
storiesData["gesicht"] = createFourLevels("gesicht", "Das Gesicht", [], {
  A1: {
    title: "Mein Gesicht",
    intro: "Einfache Bezeichnungen für Gesichtsteile (A1).",
    sentences: [
      "Ich sehe mit meinen [das Auge, -n|Augen] und rieche mit meiner [die Nase, -n|Nase].",
      "Mit dem [der Mund, -̈er|Mund] kann ich sprechen und lächeln.",
      "Ich höre Musik mit meinen [das Ohr, -en|Ohren].",
      "Mein Gesicht hat eine hohe [die Stirn|Stirn] und ein markantes [das Kinn|Kinn]."
    ]
  },
  A2: {
    title: "Besondere Merkmale",
    intro: "Gesichtsmerkmale und Lächeln beschreiben (A2).",
    sentences: [
      "Wenn sie sich freut, werden ihre [die Wange, -n|Wangen] ganz rot.",
      "Sie trägt roten Lippenstift auf den [die Lippe, -n|Lippen].",
      "Mein Vater trägt einen gepflegten [der Bart, -̈e|Bart].",
      "Über ihren freundlichen Augen sieht man dunkle [die Augenbraue, -n|Augenbrauen]."
    ]
  },
  B1: {
    title: "Ausstrahlung und Mimik",
    intro: "Ausführliche Beschreibung von Gesichtsausdrücken und Besonderheiten (B1).",
    sentences: [
      "Im Sommer bekommt Lisa viele goldene [die Sommersprossen (Pl.)|Sommersprossen] auf der Nase.",
      "Im Gesicht meiner Großmutter erzählt jede kleine [die Falte, -n|Falte] eine spannende Lebensgeschichte.",
      "Die menschliche Mimik drückt Emotionen oft schneller aus, als Worte es jemals könnten.",
      "Ein ehrlicher Blick aus wachen [das Auge, -n|Augen] weckt sofort Sympathie."
    ]
  },
  B2: {
    title: "Physiognomie und nonverbale Kommunikation",
    intro: "Anspruchsvolle Analyse von Mimik und Gesichtsästhetik (B2).",
    sentences: [
      "Die menschliche Physiognomie spiegelt den Charakter und emotionale Regungen auf faszinierende Weise wider.",
      "Feine [die Falte, -n|Falten] um die [die Lippe, -n|Lippen] und [das Auge, -n|Augen] zeugen von gelebter Heiterkeit und Lebenserfahrung.",
      "Charakteristische Merkmale wie ein dichter [der Bart, -̈e|Bart] oder zarte [die Sommersprossen (Pl.)|Sommersprossen] verleihen dem Antlitz unverwechselbare Individualität."
    ]
  }
});

// 8. haar
storiesData["haar"] = createFourLevels("haar", "Das Haar", [], {
  A1: {
    title: "Haarfarben und Längen",
    intro: "Grundlegende Adjektive zur Beschreibung von Haaren (A1).",
    sentences: [
      "Anna hat schönes, langes Haar.",
      "Ihre Haare sind [blond|blond] und glänzen in der Sonne.",
      "Paul hat [kurz|kurze], [schwarz|schwarze] Haare.",
      "Manche Menschen haben [braun|braune] oder leuchtend [rot|rote] Haare."
    ]
  },
  A2: {
    title: "Beim Friseur",
    intro: "Haarstrukturen und Frisuren im Alltag (A2).",
    sentences: [
      "Gestern war David beim Friseur, um eine moderne [die Frisur, -en|Frisur] schneiden zu lassen.",
      "Marias Haare sind von Natur aus [wellig|wellig] und [lockig|lockig].",
      "Ihre Schwester bevorzugt dagegen ganz [glatt|glattes], [lang|langes] Haar.",
      "Mein Großvater trägt stolz sein volles, [grau|graues] Haar."
    ]
  },
  B1: {
    title: "Frisuren und persönlicher Stil",
    intro: "Typveränderungen und Styling-Entscheidungen (B1).",
    sentences: [
      "Die Wahl der passenden [die Frisur, -en|Frisur] unterstreicht die eigene Persönlichkeit maßgeblich.",
      "Nachdem er gemerkt hatte, dass sein Haar lichter wurde, entschied sich Thomas selbstbewusst für eine [die Glatze|Glatze].",
      "Egal ob die Haare [glatt|glatt], [lockig|lockig] oder [kurz|kurz] geschnitten sind: Gepflegtes Haar hinterlässt stets einen positiven Eindruck."
    ]
  },
  B2: {
    title: "Haartracht als kultureller Identitätsmarker",
    intro: "Kulturelle Dimensionen von Haartrachten und Ästhetik (B2).",
    sentences: [
      "Historisch wie gegenwärtig dient das Haar als markanter Spiegel ästhetischer und soziokultureller Strömungen.",
      "Vom eleganten [glatt|glatten] Look bis zur markanten [die Glatze|Glatze] artikulieren Individuen ihr Selbstverständnis über ihre Haartracht.",
      "Das würdevolle Tragen von [grau|grauem] Haar symbolisiert in vielen Kulturen Reife und Autorität."
    ]
  }
});

// 9. aeusseres
storiesData["aeusseres"] = createFourLevels("aeusseres", "Die äußere Erscheinung", [], {
  A1: {
    title: "Menschen ansehen",
    intro: "Einfache Wörter für das Aussehen von Personen (A1).",
    sentences: [
      "Mein Bruder ist sehr [groß|groß], aber meine Schwester ist eher [klein|klein].",
      "Er ist noch [jung|jung] und geht zur Schule.",
      "Mein Großvater ist schon [alt|alt], aber sehr fit.",
      "Meine Freundin ist sehr [hübsch|hübsch] und lächelt gern."
    ]
  },
  A2: {
    title: "Personen beschreiben",
    intro: "Detailliertere Beschreibungen von Statur und Merkmalen (A2).",
    sentences: [
      "Marco ist ein sehr [gutaussehend|gutaussehender] Mann [mittleren Alters|mittleren Alters].",
      "Er ist [schlank|schlank] und achtet auf gesunde Ernährung.",
      "Weil er viel Sport treibt, wirkt sein Körper ausgesprochen [athletisch|athletisch] und [kräftig|kräftig].",
      "Beim Lesen muss er immer [eine Brille tragen|eine Brille tragen]."
    ]
  },
  B1: {
    title: "Ausstrahlung und Selbstwahrnehmung",
    intro: "Umfassende Betrachtung von Haltung und Aussehen (B1).",
    sentences: [
      "Ein sympathisches Auftreten hängt nicht nur davon ab, ob jemand [schlank|schlank] oder etwas [dick|dick] gebaut ist.",
      "Viel wichtiger ist eine aufrechte Haltung und die positive Ausstrahlung, die ein Mensch ausstrahlt.",
      "Selbst wenn jemand [eine Brille tragen|eine Brille tragen] muss, kann diese das Gesicht stilvoll akzentuieren.",
      "Wer mit sich selbst im Reinen ist, wirkt automatisch [gutaussehend|gutaussehend] und anziehend."
    ]
  },
  B2: {
    title: "Wahrnehmungspsychologie und Körperideale",
    intro: "Kritische Reflexion gesellschaftlicher Schönheitsideale (B2).",
    sentences: [
      "Die gesellschaftliche Rezeption des Phänotyps changiert zwischen normierten Schönheitsidealen und authentischer Individualität.",
      "Eine [athletisch|athletische], [kräftig|kräftige] Statur wird medial oft favorisiert, doch wahre Eleganz erwächst aus innerer Souveränität.",
      "Unabhängig davon, ob jemand [jung|jung] oder [mittleren Alters|mittleren Alters] ist: Charakterliche Tiefe überstrahlt jede rein oberflächliche Ästhetik."
    ]
  }
});

// 10. gefuehle
storiesData["gefuehle"] = createFourLevels("gefuehle", "Gefühle und Persönlichkeit", [], {
  A1: {
    title: "Wie fühlst du dich?",
    intro: "Grundwortschatz zu Emotionen und Stimmungen (A1).",
    sentences: [
      "Heute bin ich sehr [glücklich|glücklich], denn die Sonne scheint.",
      "Gestern war mein Freund [traurig|traurig], aber heute geht es ihm besser.",
      "Wenn etwas nicht klappt, wird er manchmal [wütend|wütend].",
      "Vor einer großen Prüfung bin ich oft ein bisschen [nervös|nervös] oder [ängstlich|ängstlich]."
    ]
  },
  A2: {
    title: "Gefühle und Charakter",
    intro: "Persönlichkeitsmerkmale im Alltag beschreiben (A2).",
    sentences: [
      "Die Lehrerin ist immer [freundlich|freundlich] und sehr [geduldig|geduldig] mit den Kindern.",
      "Man sollte stets [ehrlich|ehrlich] sein, um das Vertrauen anderer nicht zu verlieren.",
      "Er ist nicht [faul|faul], sondern lernt jeden Tag sehr [fleißig|fleißig] Deutsch.",
      "Nach der bestandenen Prüfung war seine ganze Familie unheimlich [stolz|stolz] auf ihn."
    ]
  },
  B1: {
    title: "Charakterstärken und Selbstvertrauen",
    intro: "Persönliche Weiterentwicklung und emotionale Balance (B1).",
    sentences: [
      "Als Kind war Jonas extrem [schüchtern|schüchtern], doch im Laufe der Jahre wurde er immer [selbstbewusst|selbstbewusster].",
      "Wer seinen Mitmenschen [großzügig|großzügig] hilft, erfährt oft tief empfundene Dankbarkeit zurück.",
      "Es erfordert Geduld und Selbstdisziplin, in stressigen Situationen ruhig und [freundlich|freundlich] zu bleiben.",
      "Eine harmonische Persönlichkeit zeichnet sich durch [ehrlich|ehrliche] Kommunikation und Empathie aus."
    ]
  },
  B2: {
    title: "Emotionale Intelligenz und Charakterdynamik",
    intro: "Analyse emotionaler Resilienz und Selbstwirksamkeit (B2).",
    sentences: [
      "Emotionale Reife manifestiert sich in der Fähigkeit, auch unter extremem Druck besonnen und [geduldig|geduldig] zu agieren.",
      "Ein [selbstbewusst|selbstbewusstes] Auftreten darf nicht mit Arroganz verwechselt werden; vielmehr speist es sich aus [ehrlich|ehrlicher] Selbsterkenntnis.",
      "Indem man [großzügig|großzügig] gegenüber den Schwächen anderer bleibt, schafft man ein von gegenseitigem Respekt geprägtes Arbeitsklima."
    ]
  }
});

// Write generator for remaining topics (11 to 40)
// To ensure completeness and speed, we will loop through all 40 topics
// and provide bespoke curated texts for each level!

console.log("Adding all 40 topics with full CEFR A1, A2, B1, B2 progression...");

const allTopicIds = Object.keys(existingStories);
console.log(`Found ${allTopicIds.length} topics in existing file.`);

fs.writeFileSync("./scratch/partial_stories.json", JSON.stringify(storiesData, null, 2));
console.log("Saved base stories to scratch");
