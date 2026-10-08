import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  das_fernsehen: {
    description:
      "Fernseher, Kanäle, Fernbedienung, Nachrichten, Serien, Mediatheken und Streaming.",
    details: "Lineares Fernsehen, Streamingdienste, Bildformate und Rundfunkkultur (A1–B2)",
    arabicDescription:
      "التلفزيون والبث المرئي (Das Fernsehen): جهاز التلفاز (Fernseher)، جهاز التحكم عن بعد (Fernbedienung)، القنوات الفضائية (Sender/Kanal)، الأخبار (Nachrichten)، المسلسلات (Serien)، الأفلام الوثائقية، خدمات البث الرقمي (Streaming)، والإعلانات التجارية.",
    words: [
      {
        german: "das Fernsehen (Sg.)",
        arabic: "التلفزيون (البث التلفزيوني كوسيلة إعلام)",
        english: "television, TV broadcasting",
        example:
          "Das deutsche Fernsehen bietet eine breite Auswahl an Informations- und Kultursendungen.",
      },
      {
        german: "der Fernseher, -",
        arabic: "جهاز التلفاز (الشاشة التلفزيونية)",
        english: "television set, TV",
        example: "Im Wohnzimmer hängt ein großer Smart-Fernseher an der Wand.",
      },
      {
        german: "die Fernbedienung, -en",
        arabic: "جهاز التحكم عن بُعد (الريموت كنترول)",
        english: "remote control",
        example:
          "Ich suche überall nach der Fernbedienung, die zwischen die Sofakissen gerutscht ist.",
      },
      {
        german: "der Fernsehkanal, -̈e",
        arabic: "القناة التلفزيونية",
        english: "TV channel",
        example: "Auf welchem Fernsehkanal läuft heute Abend das Fußball-Länderspiel?",
      },
      {
        german: "die Nachrichten (Pl.)",
        arabic: "نشرة الأخبار الرسمية",
        english: "the news, newscast",
        example: "Um Punkt zwanzig Uhr schalten Millionen Menschen die Tagesschau-Nachrichten ein.",
      },
      {
        german: "die Sendung, -en",
        arabic: "البرنامج / البث التلفزيوني",
        english: "show, broadcast, program",
        example: "Die wissenschaftliche Sendung erklärt physikalische Phänomene sehr anschaulich.",
      },
      {
        german: "die Serie, -n",
        arabic: "المسلسل التلفزيوني",
        english: "TV series",
        example: "Am Wochenende schauen wir gemeinsam die neueste Staffel unserer Lieblingsserie.",
      },
      {
        german: "der Dokumentarfilm, -e",
        arabic: "الفيلم الوثائقي",
        english: "documentary, documentary film",
        example: "Gestern lief ein beeindruckender Dokumentarfilm über das Leben im Regenwald.",
      },
      {
        german: "der Bildschirm, -e",
        arabic: "شاشة العرض المرئية",
        english: "screen, display",
        example: "Der hochauflösende OLED-Bildschirm liefert fantastische Kontraste und Farben.",
      },
      {
        german: "das Streaming (Sg.)",
        arabic: "البث الرقمي عبر الإنترنت (ستريمنغ)",
        english: "streaming",
        example:
          "Viele jüngere Leute bevorzugen Streaming über Online-Mediatheken gegenüber linearem TV.",
      },
      {
        german: "die Live-Übertragung, -en",
        arabic: "البث المباشر على الهواء",
        english: "live broadcast, live coverage",
        example:
          "Die Live-Übertragung der Olympischen Spiele zog ein weltweites Publikum in ihren Bann.",
      },
      {
        german: "die Werbung, -en",
        arabic: "الإعلانات التجارية / الفواصل الإعلانية",
        english: "commercial, advertisement, ad break",
        example: "Während der langen Werbung hole ich mir schnell etwas zu trinken aus der Küche.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Fernsehen am Abend",
        intro: "Einfache Sätze über Fernseher, Kanäle und bequeme Abende (A1).",
        paragraphs: [
          [
            "Am Abend sitze ich gern auf dem Sofa.",
            "Ich nehme [die Fernbedienung, -en|die Fernbedienung] und schalte [der Fernseher, -|den Fernseher] an.",
            "[der Bildschirm, -e|Der Bildschirm] wird hell und bunt.",
          ],
          [
            "Um zwanzig Uhr sehe ich [die Nachrichten (Pl.)|die Nachrichten].",
            "Dort höre ich, was heute in der Welt passiert ist.",
            "Danach schalte ich auf einen anderen [der Fernsehkanal, -̈e|Fernsehkanal].",
          ],
          [
            "Dort läuft eine lustige [die Sendung, -en|Sendung].",
            "Wenn [die Werbung, -en|die Werbung] kommt, mache ich mir einen heißen Tee.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Meine Lieblingsserie und Dokumentationen",
        intro: "Serienmarathon, Dokumentarfilme und Mediatheken (A2).",
        paragraphs: [
          [
            "Früher musste man pünktlich vor dem Fernseher sitzen, um keine Folge zu verpassen.",
            "Heute nutzen meine Freunde und ich vor allem [das Streaming (Sg.)|Streaming] und Mediatheken.",
          ],
          [
            "Gestern Abend habe ich eine neue spannende [die Serie, -n|Serie] über Detektive in Berlin begonnen.",
            "Mein Vater schaut lieber [der Dokumentarfilm, -e|einen Dokumentarfilm] über wilde Tiere und die Arktis.",
          ],
          [
            "Am Samstag gab es eine tolle [die Live-Übertragung, -en|Live-Übertragung] vom Konzert meiner Lieblingsband.",
            "Die Bildqualität auf dem neuen [der Bildschirm, -e|Bildschirm] war einfach fantastisch.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Vom linearen Fernsehen zur modernen Medienvielfalt",
        intro: "Der Wandel der Sehgewohnheiten und der öffentlich-rechtliche Rundfunk (B1).",
        paragraphs: [
          [
            "Die Fernsehlandschaft im deutschsprachigen Raum befindet sich in einem tiefgreifenden Umbruch.",
            "Traditionelles, lineares [das Fernsehen (Sg.)|Fernsehen] verliert insbesondere bei jüngeren Zielgruppen an Relevanz, da Video-on-Demand und [das Streaming (Sg.)|Streaming] zeitunabhängigen Konsum ermöglichen.",
          ],
          [
            "Dennoch genießen etablierte [die Nachrichten (Pl.)|Nachrichtenformate] wie die 'Tagesschau' weiterhin hohes gesellschaftliches Vertrauen und binden Millionen Zuschauer.",
            "Wer fundierte Hintergrundberichte schätzt, wählt anspruchsvolle [der Dokumentarfilm, -e|Dokumentarfilme] oder politische Talkshows.",
          ],
          [
            "Für sportliche Großereignisse bleibt [die Live-Übertragung, -en|die Live-Übertragung] das dominierende Format, das Menschen gemeinsam vor [der Bildschirm, -e|dem Bildschirm] versammelt.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Rundfunkstaatsvertrag, Medienkonvergenz und Plattformdominanz",
        intro: "Öffentlich-rechtlicher Auftrag, Content-Kuratierung und Medienökonomie (B2).",
        paragraphs: [
          [
            "Das duale Rundfunksystem in Deutschland basiert auf der verfassungsrechtlich verankerten Koexistenz privater Sender und öffentlich-rechtlicher Rundfunkanstalten.",
            "Während Privatsender primär durch [die Werbung, -en|Werbung] und Einschaltquoten monetarisiert werden, garantiert der Rundfunkbeitrag einen staatsfernen Bildungs- und Informationsauftrag.",
          ],
          [
            "Im Zeitalter globaler Algorithmen-Plattformen gerät [das Fernsehen (Sg.)|das traditionelle Fernsehen] jedoch unter starken Legitimations- und Innovationsdruck.",
            "Die Konvergenz von linearem TV, Mediatheken-Ökosystemen und interaktiven Applikationen erzwingt eine Neudefinition von Sendeformaten, bei der hochauflösende 4K-[der Bildschirm, -e|Bildschirme] nahtlos mit mobilen Devices synchronisiert werden.",
          ],
          [
            "Die gesellschaftliche Herausforderung besteht darin, qualitativ hochwertigen Journalismus und investigative [der Dokumentarfilm, -e|Dokumentarfilme] gegen die Reizüberflutung kurzlebiger Clips zu behaupten.",
          ],
        ],
      },
    },
  },

  das_radio: {
    description: "Radiosender, Podcasts, Moderatoren, Frequenzen, Verkehrsfunk und Live-Sendungen.",
    details: "Hörfunk, UKW, DAB+, Audioformate und journalistische Radiokultur (A1–B2)",
    arabicDescription:
      "الراديو والإذاعة (Das Radio): محطات الإذاعة (Radiosender)، مذيع الراديو (Moderator)، البودكاست (Podcast)، الترددات الإذاعية (Frequenz)، النشرة المرورية (Verkehrsfunk)، النشرة الجوية، تعديل الصوت، والبث الصوتي الرقمي الحديث.",
    words: [
      {
        german: "das Radio, -s",
        arabic: "الراديو / المذياع",
        english: "radio",
        example: "Morgens in der Küche schalte ich als erstes das Radio ein.",
      },
      {
        german: "der Radiosender, -",
        arabic: "محطة / إذاعة الراديو",
        english: "radio station",
        example:
          "Mein liebster Radiosender spielt eine Mischung aus Rockmusik und Kulturbeiträgen.",
      },
      {
        german: "der Moderator, -en",
        arabic: "مقدم البرامج / المذيع الإذاعي",
        english: "radio host, presenter",
        example: "Der gut gelaunte Moderator begrüßt die Hörer zur morgendlichen Frühschicht.",
      },
      {
        german: "der Podcast, -s",
        arabic: "البودكاست (التسجيل الصوتي الرقمي)",
        english: "podcast",
        example: "Beim Joggen höre ich regelmäßig einen spannenden Wissenschafts-Podcast.",
      },
      {
        german: "die Frequenz, -en",
        arabic: "تردد الموجة الإذاعية (FM / UKW)",
        english: "frequency (radio)",
        example: "Auf welcher Frequenz kann man diesen Lokalsender empfangen?",
      },
      {
        german: "der Verkehrsfunk (Sg.)",
        arabic: "نشرة حركة المرور الإذاعية (تنبيهات الازدحام)",
        english: "traffic report, traffic news",
        example: "Im Verkehrsfunk wurde vor einem zehn Kilometer langen Stau auf der A3 gewarnt.",
      },
      {
        german: "der Wetterbericht, -e",
        arabic: "تقرير وحالة الطقس والأنواء الجوية",
        english: "weather forecast, weather report",
        example: "Nach den Kurznachrichten folgt immer der aktuelle Wetterbericht für die Region.",
      },
      {
        german: "die Antenne, -n",
        arabic: "هوائي الاستقبال (الإريال)",
        english: "antenna, aerial",
        example: "Ich ziehe die Antenne ganz heraus, um einen rauschfreien Empfang zu haben.",
      },
      {
        german: "die Lautstärke (Sg.)",
        arabic: "مستوى شدة الصوت",
        english: "volume (sound)",
        example: "Bitte dreh die Lautstärke etwas leiser, das Baby schläft schon.",
      },
      {
        german: "einschalten",
        arabic: "يشغل / يفتح الجهاز",
        english: "to switch on, to turn on",
        example: "Du kannst das Küchenradio gerne einschalten, wenn du Musik hören magst.",
      },
      {
        german: "die Live-Sendung, -en",
        arabic: "البث الإذاعي الحي على الهواء مباشرة",
        english: "live show, live broadcast",
        example: "In der heutigen Live-Sendung können Hörer anrufen und Musikwünsche äußern.",
      },
      {
        german: "der Musiksender, -",
        arabic: "إذاعة الموسيقى المتخصصة",
        english: "music station",
        example: "Ein reiner Musiksender verzichtet fast völlig auf lange Wortbeiträge.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Guten Morgen mit dem Radio",
        intro: "Einfache Sätze über Musik, Radio und Wetterbericht am Morgen (A1).",
        paragraphs: [
          [
            "Um sieben Uhr stehe ich auf und gehe in die Küche.",
            "Ich möchte [das Radio, -s|das Radio] [einschalten|einschalten].",
            "Ich ziehe [die Antenne, -n|die Antenne] nach oben und stelle [die Lautstärke (Sg.)|die Lautstärke] ein.",
          ],
          [
            "[der Moderator, -en|Der Moderator] sagt freundlich: 'Guten Morgen, Berlin!'",
            "Er spielt ein schönes deutsches Lied.",
            "Dann kommt [der Wetterbericht, -e|der Wetterbericht]: Heute scheint den ganzen Tag die Sonne.",
          ],
          ["Mit guter Musik schmeckt der Kaffee gleich viel besser."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Unterwegs mit dem Autoradio",
        intro: "Verkehrsnachrichten auf der Autobahn und Podcasts (A2).",
        paragraphs: [
          [
            "Wenn ich mit dem Auto zur Arbeit fahre, läuft immer das Radio.",
            "Mein Lieblingsprogramm ist auf einer festen [die Frequenz, -en|Frequenz] gespeichert.",
          ],
          [
            "Besonders wichtig ist [der Verkehrsfunk (Sg.)|der Verkehrsfunk] für alle Autofahrer.",
            "Heute meldete die Radiostation einen Unfall auf der Autobahn und empfahl eine Umleitung.",
            "Dank dieser Warnung kam ich rechtzeitig im Büro an.",
          ],
          [
            "In der Mittagspause setze ich meine Kopfhörer auf und höre [der Podcast, -s|einen interessanten Podcast] über Geschichte.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Das Radio im digitalen Zeitalter",
        intro: "Vom klassischen UKW-Empfang zu DAB+ und Podcasts (B1).",
        paragraphs: [
          [
            "Das Radio gilt seit Jahrzehnten als das verlässlichste tagesbegleitende Informationsmedium.",
            "Ob beim morgendlichen Frühstück, bei der Hausarbeit oder während der Autofahrt: Ein lokaler [der Radiosender, -|Radiosender] versorgt die Bevölkerung mit aktuellen Regionalnachrichten und verlässlichem [der Verkehrsfunk (Sg.)|Verkehrsfunk].",
          ],
          [
            "Eine gelungene [die Live-Sendung, -en|Live-Sendung] lebt von der Authentizität der Moderatoren und interaktiven Hörergesprächen.",
            "Parallel dazu erlebt das gesprochene Wort durch den weltweiten Siegeszug von [der Podcast, -s|Podcasts] eine beispiellose Renaissance.",
          ],
          [
            "Durch die digitale Verbreitung über DAB+ und Internetstreams ist das Rauschen analoger [die Antenne, -n|Antennen] glasklarem Digitalsound gewichen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Akustische Öffentlichkeit, Hörfunkdramaturgie und Audio-On-Demand",
        intro: "Entwicklung von UKW zu DAB+, Podcast-Ökosysteme und Hörfunkjournalismus (B2).",
        paragraphs: [
          [
            "Der Hörfunk hat seine gesellschaftspolitische Relevanz trotz immenser Medienfragmentierung erfolgreich verteidigt.",
            "Im Katastrophen- und Krisenfall bleibt das terrestrische [das Radio, -s|Radio] das robusteste Kommunikationsnetzwerk überhaupt, da es unabhängig von Mobilfunkmasten und Glasfaserkabeln operiert.",
          ],
          [
            "Journalistisch anspruchsvolle Kulturwellen (wie Deutschlandfunk oder Bayern 2) pflegen aufwendige Feature-Formate, während kommerzielle [der Musiksender, -|Musiksender] auf streng formatierte Rotationsplaylisten setzen.",
          ],
          [
            "Die Entkoppelung von linearer [die Frequenz, -en|Frequenz] hin zu kuratierten [der Podcast, -s|Podcast-Angeboten] verändert die redaktionelle Produktionsweise nachhaltig: Nischeninhalte erreichen globale Hörerzielgruppen, während der klassische [der Moderator, -en|Moderator] zum persönlichen Host avanciert.",
          ],
        ],
      },
    },
  },

  die_printmedien: {
    description:
      "Tageszeitungen, Magazine, Journalismus, Schlagzeilen, Abonnements und Pressefreiheit.",
    details: "Gedruckte Presse, Zeitschriften, Leitartikel, Kioskkultur und vierte Gewalt (A1–B2)",
    arabicDescription:
      "وسائل الإعلام المطبوعة (Die Printmedien): الصحف اليومية (Tageszeitung)، المجلات الأسبوعية والشهرية (Magazin)، المقالات الصحفية، العناوين العريضة (Schlagzeile)، الصحفيون، الاشتراكات (Abonnement)، أكشاك بيع الصحف (Kiosk)، وحرية الصحافة (Pressefreiheit).",
    words: [
      {
        german: "die Printmedien (Pl.)",
        arabic: "وسائل الإعلام المطبوعة والورقية",
        english: "print media",
        example: "Trotz des Internets schätzen viele Leser die Haptik und Tiefe der Printmedien.",
      },
      {
        german: "die Tageszeitung, -en",
        arabic: "الصحيفة / الجريدة اليومية",
        english: "daily newspaper",
        example: "Mein Großvater liest jeden Morgen beim Frühstück die lokale Tageszeitung.",
      },
      {
        german: "das Magazin, -e",
        arabic: "المجلة الدورية الملونة (المصورة)",
        english: "magazine",
        example: "Ich habe ein wissenschaftliches Magazin über Natur und Technik gekauft.",
      },
      {
        german: "der Artikel, -",
        arabic: "المقال الصحفي",
        english: "article (newspaper/journal)",
        example:
          "Der Artikel auf Seite drei analysiert die wirtschaftliche Entwicklung des Landes.",
      },
      {
        german: "die Schlagzeile, -n",
        arabic: "المانشيت / العنوان العريض للخبر",
        english: "headline",
        example: "Die mutige Schlagzeile auf der Titelseite erregte gestern großes Aufsehen.",
      },
      {
        german: "der Journalist, -en",
        arabic: "الصحفي والمراسل الإعلامي",
        english: "journalist, reporter",
        example:
          "Der Journalist recherchierte monatelang verdeckt für seinen investigativen Bericht.",
      },
      {
        german: "das Abonnement, -s",
        arabic: "الاشتراك الدوري في الصحيفة أو المجلة",
        english: "subscription",
        example:
          "Mit einem jährlichen Abonnement kommt die Wochenzeitung jeden Freitag direkt in den Briefkasten.",
      },
      {
        german: "die Titelseite, -n",
        arabic: "الصفحة الأولى / الغلاف الرئيسي للجريدة",
        english: "front page, cover page",
        example:
          "Das Porträt der Kanzlerin war auf der Titelseite aller großen Zeitungen abgedruckt.",
      },
      {
        german: "der Kiosk, -e",
        arabic: "كشك بيع الصحف والمجلات",
        english: "kiosk, newsstand",
        example: "Am Kiosk am Bahnhof hole ich mir schnell Lesestoff für die Zugfahrt.",
      },
      {
        german: "die Druckerei, -en",
        arabic: "المطبعة ومصنع طباعة الصحف",
        english: "printing press, print shop",
        example:
          "In der Druckerei laufen die Rotationsmaschinen mitten in der Nacht auf Hochtouren.",
      },
      {
        german: "der Leitartikel, -",
        arabic: "المقال الافتتاحي للجريدة (الرأي الرئيسي)",
        english: "editorial, leading article",
        example:
          "Im heutigen Leitartikel kommentiert der Chefredakteur die aktuellen Wahlergebnisse.",
      },
      {
        german: "die Pressefreiheit (Sg.)",
        arabic: "حرية الصحافة والإعلام",
        english: "freedom of the press",
        example:
          "Die Pressefreiheit ist ein unantastbares Grundrecht einer freien demokratischen Gesellschaft.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Die Zeitung am Morgen",
        intro: "Einfache Sätze über Zeitungen, Kioske, Bilder und Artikel (A1).",
        paragraphs: [
          [
            "Jeden Morgen gehe ich zum Bäcker und dann zu [der Kiosk, -e|dem Kiosk].",
            "Dort kaufe ich [die Tageszeitung, -en|eine frische Tageszeitung].",
            "Auf [die Titelseite, -n|der Titelseite] sehe ich ein großes Foto und [die Schlagzeile, -n|eine dicke Schlagzeile].",
          ],
          [
            "Ich trinke Kaffee und lese [der Artikel, -|einen kurzen Artikel] über Sport.",
            "Mein Bruder kauft lieber [das Magazin, -e|ein buntes Magazin] über Autos.",
            "Viele kluge Menschen schreiben für die Zeitung.",
          ],
          ["Lesen auf echtem Papier macht mir viel Freude."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Mein erstes Zeitungsabonnement",
        intro: "Zeitungen abonnieren, Journalismus und Druckereien (A2).",
        paragraphs: [
          [
            "Früher kaufte ich meine Zeitschrift immer einzeln am Bahnhof.",
            "Vor zwei Monaten habe ich mich entschieden, [das Abonnement, -s|ein festes Abonnement] für eine Wochenzeitung abzuschließen.",
          ],
          [
            "Jeden Donnerstagmorgen liegt die Zeitung pünktlich im Briefkasten.",
            "Die Texte sind gut recherchiert: Ein erfahrener [der Journalist, -en|Journalist] erklärt politische Hintergründe verständlich und objektiv.",
          ],
          [
            "Ich habe einmal [die Druckerei, -en|eine Druckerei] besichtigt und gesehen, wie tausende Zeitungen in der Nacht gedruckt werden.",
            "Es war faszinierend zu erleben, wie aus Papier und Druckerschwärze fertige Zeitungen entstehen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Die Bedeutung unabhängiger Printmedien für die Demokratie",
        intro: "Die vierte Gewalt, Pressefreiheit und investigativer Journalismus (B1).",
        paragraphs: [
          [
            "Klassische [die Printmedien (Pl.)|Printmedien] erfüllen eine unverzichtbare Kontrollfunktion in einer offenen Gesellschaft.",
            "Nicht ohne Grund wird die freie Presse oft als die 'vierte Gewalt' im Staat bezeichnet.",
          ],
          [
            "Im Unterschied zu oft oberflächlichen Beiträgen in sozialen Medien investiert ein seriöser [der Journalist, -en|Journalist] viel Zeit in gründliche Recherche und Quellenprüfung.",
            "Ein pointierter [der Leitartikel, -|Leitartikel] regt Leser dazu an, unterschiedliche gesellschaftliche Perspektiven kritisch zu reflektieren.",
          ],
          [
            "Fundament dieser Arbeit ist [die Pressefreiheit (Sg.)|die verfassungsrechtlich garantierte Pressefreiheit], die Zensur verbietet und Berichterstattern den Schutz ihrer Informanten garantiert.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Strukturkrise des Verlagswesens: Paywalls, Reichweite und Meinungsbildung",
        intro: "Digitale Transformation, Abo-Modelle und journalistische Ethik (B2).",
        paragraphs: [
          [
            "Verlage stehen im Spannungsfeld zwischen ökonomischer Überlebensfähigkeit und publizistischer Verantwortung.",
            "Der drastische Rückgang klassischer Auflagen zwingt renommierte Traditionshäuser, ihre Erlösmodelle von gedruckten [die Printmedien (Pl.)|Printmedien] auf digitale Bezahlmodelle (Digital-[das Abonnement, -s|Abonnements] und Paywalls) umzustellen.",
          ],
          [
            "Während reißerische [die Schlagzeile, -n|Schlagzeilen] (Clickbaiting) kurzfristig Klicks generieren, untergraben sie auf Dauer die Glaubwürdigkeit fundierter [die Tageszeitung, -en|Tageszeitungen].",
            "Der anspruchsvolle Leser honoriert hingegen exzellenten Datenjournalismus, investigative Dossiers und tiefgründige Leitartikel.",
          ],
          [
            "In einer von Desinformation und Echokammern geprägten Medienwelt bildet [die Pressefreiheit (Sg.)|die institutionelle Pressefreiheit] das unverzichtbare Fundament für faktenbasierte Deliberation und demokratische Willensbildung.",
          ],
        ],
      },
    },
  },

  die_post: {
    description:
      "Briefe, Briefkasten, Briefmarken, Pakete, Einschreiben, Filialen und Packstationen.",
    details:
      "Postwesen, Sendungsverfolgung, Portokosten, Zustellung und E-Commerce-Logistik (A1–B2)",
    arabicDescription:
      "البريد والشحن (Die Post): الرسائل البريدية (Brief)، صندوق البريد (Briefkasten)، طوابع البريد (Briefmarke)، المظروف، الطرود البريدية (Paket)، ساعي البريد (Postbote)، البريد المسجل (Einschreiben)، تكلفة الشحن (Porto)، فروع البريد، ومحطات الطرود الذكية (Packstation).",
    words: [
      {
        german: "die Post (Sg.)",
        arabic: "مؤسسة وهيئة البريد",
        english: "post office, postal service, mail",
        example: "Ich muss heute noch zur Post gehen, um ein schweres Paket abzugeben.",
      },
      {
        german: "der Brief, -e",
        arabic: "الرسالة الورقية المكتوبة (الخطاب)",
        english: "letter",
        example: "Sie hat einen handschriftlichen Brief an ihre Großeltern geschickt.",
      },
      {
        german: "der Briefkasten, -̈",
        arabic: "صندوق البريد الأصفر (أو المنزلي)",
        english: "mailbox, postbox",
        example: "Ich werfe die Postkarte in den gelben Briefkasten an der Straßenecke.",
      },
      {
        german: "die Briefmarke, -n",
        arabic: "طابع البريد الورقي",
        english: "postage stamp, stamp",
        example:
          "Vergessen Sie nicht, eine passende Briefmarke oben rechts auf den Umschlag zu kleben.",
      },
      {
        german: "der Briefumschlag, -̈e",
        arabic: "مظروف / ظرف الرسالة",
        english: "envelope",
        example: "Auf den Briefumschlag schreibe ich Empfängeradresse und Absender.",
      },
      {
        german: "das Paket, -e",
        arabic: "الطرود / الطرد البريدي المشحون",
        english: "package, parcel",
        example: "Der Paketbote hat das schwere Paket vor der Haustür abgestellt.",
      },
      {
        german: "der Postbote, -n",
        arabic: "ساعي البريد وموزع الرسائل",
        english: "mail carrier, postman",
        example: "Der freundliche Postbote bringt uns montags bis samstags die Briefe.",
      },
      {
        german: "das Einschreiben, -",
        arabic: "البريد المسجل مع إشعار بالاستلام",
        english: "registered mail, certified mail",
        example:
          "Wichtige Kündigungen sollte man immer per Einschreiben mit Rückschein verschicken.",
      },
      {
        german: "das Porto (Sg.)",
        arabic: "أجرة ورسوم الشحن البريدي",
        english: "postage",
        example: "Wie hoch ist das Porto für einen Standardbrief innerhalb Deutschlands?",
      },
      {
        german: "die Postfiliale, -n",
        arabic: "فرع / مكتب البريد",
        english: "post office branch",
        example: "In der Postfiliale stehen die Kunden oft in einer Schlange am Schalter.",
      },
      {
        german: "die Packstation, -en",
        arabic: "محطة الطرود الذكية ذاتية الخدمة (24/7)",
        english: "parcel locker, automated parcel station",
        example: "Mit dem Abholcode hole ich meine Sendung bequem nachts an der Packstation ab.",
      },
      {
        german: "die Sendungsverfolgung, -en",
        arabic: "تتبع الشحنة إلكترونياً (التراكينغ)",
        english: "package tracking, shipment tracking",
        example:
          "Dank der Sendungsverfolgung weiß ich genau, an welchem Tag mein Paket zugestellt wird.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Grundstufe",
        title: "Ein Brief für Oma",
        intro: "Einfache Sätze über Briefe, Briefmarken und den Briefkasten (A1).",
        paragraphs: [
          [
            "Heute schreibe ich [der Brief, -e|einen Brief] an meine Oma.",
            "Ich stecke den Zettel in [der Briefumschlag, -̈e|einen weißen Briefumschlag].",
            "Oben rechts klebe ich [die Briefmarke, -n|eine Briefmarke] auf das Papier.",
          ],
          [
            "Ich gehe auf die Straße zu [der Briefkasten, -̈|dem gelben Briefkasten].",
            "Dort werfe ich meinen Brief hinein.",
            "Morgen kommt [der Postbote, -n|der Postbote] und bringt den Brief zu Oma.",
          ],
          ["Oma freut sich bestimmt sehr über meine Post."],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        title: "Ein Paket aufgeben und abholen",
        intro: "In der Postfiliale, Packstationen und Online-Paketverfolgung (A2).",
        paragraphs: [
          [
            "Ich wollte meiner Schwester ein Geburtstagsgeschenk nach Hamburg schicken.",
            "Ich verpackte die Geschenke sorgfältig in [das Paket, -e|ein stabiles Paket] und ging zu [die Postfiliale, -n|der Postfiliale].",
          ],
          [
            "Am Schalter wog die Mitarbeiterin die Sendung und berechnete [das Porto (Sg.)|das Porto].",
            "Ich bezahlte die Gebühr und erhielt einen Beleg mit einer Nummer für [die Sendungsverfolgung, -en|die Sendungsverfolgung].",
          ],
          [
            "Wenn ich selbst etwas im Internet bestelle, lasse ich es direkt an [die Packstation, -en|eine Packstation] liefern.",
            "Dort kann ich mein Paket rund um die Uhr ganz ohne Wartezeiten abholen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        title: "Zuverlässiger Schriftverkehr und rechtssichere Zustellung",
        intro: "Kündigungen per Einschreiben, Fristen und Paketlogistik (B1).",
        paragraphs: [
          [
            "Im deutschen Rechts- und Geschäftsverkehr kommt dem klassischen Postweg weiterhin eine zentrale Rolle zu.",
            "Für formelle Willenserklärungen wie Wohnungskündigungen oder Vertragsauflösungen reicht eine einfache E-Mail oft nicht aus.",
          ],
          [
            "In solchen Fällen versendet man das Schreiben als [das Einschreiben, -|Einschreiben mit Rückschein].",
            "Dadurch erhält der Absender einen rechtsgültigen Nachweis darüber, an welchem Datum das Dokument dem Empfänger zugegangen ist.",
          ],
          [
            "Gleichzeitig boomt der Online-Handel, weshalb [die Post (Sg.)|die Post] und Paketdienstleister täglich Millionen Sendungen abwickeln.",
            "Über [die Sendungsverfolgung, -en|die digitale Sendungsverfolgung] können Kunden jeden Zwischenschritt im Sortierzentrum minutengenau nachverfolgen.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        title: "Globale E-Commerce-Logistik und die letzte Meile",
        intro: "Automatisierte Logistikketten, Paketflut und urbane Zustellkonzepte (B2).",
        paragraphs: [
          [
            "Das explosive Wachstum des globalen Online-Handels stellt die logistische Infrastruktur der [die Post (Sg.)|Post- und Paketdienstleister] vor beispiellose Herausforderungen.",
            "Insbesondere die Bewältigung der sogenannten 'letzten Meile' in verdichteten Ballungsräumen erfordert innovative Konzepte zur Verkehrs- und Emissionsreduktion.",
          ],
          [
            "Automatisierte Hubs und hochfrequentierte [die Packstation, -en|Packstationen] entlasten klassische [die Postfiliale, -n|Postfilialen] und optimieren die Zustellquoten beim Erstversuch.",
            "Gleichzeitig steigt der Druck auf [der Postbote, -n|Zusteller] durch enge Taktzeiten und steigende Sendungsvolumina kontinuierlich an.",
          ],
          [
            "Parallel dazu verschiebt sich der Briefmarkt: Während transaktionale Standard-[der Brief, -e|Briefe] durch digitale Portale substituiert werden, gewinnen zertifizierte Dokumentenzustellungen wie das qualifizierte [das Einschreiben, -|Einschreiben] an regulatorischer Relevanz.",
          ],
        ],
      },
    },
  },
};

const kmPath = "src/data/vocabulary/kommunikation.json";
const kmData = JSON.parse(fs.readFileSync(kmPath, "utf8"));

for (const sec of kmData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(kmData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(kmPath, JSON.stringify(kmData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to kommunikation.json!");
