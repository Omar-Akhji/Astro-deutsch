import fs from "node:fs";
import { vocabularyCollectionSchema } from "../src/features/vocabulary/model/schema.ts";

const batch2Data: Record<string, any> = {
  die_bewerbung: {
    description: "Bewerbungsschreiben, Lebenslauf, Zeugnisse, Vorstellungsgespräch und Zusage.",
    details: "Bewerbungsprozess, Unterlagen, Gehaltsvorstellung und Vorstellungsgespräch (A1–B2)",
    arabicDescription:
      "التقدم للوظيفة (Die Bewerbung): مفردات طلب التوظيف، السيرة الذاتية (Lebenslauf)، خطاب التقديم (Anschreiben)، المقابلة الشخصية (Vorstellungsgespräch)، شهادات الخبرة (Zeugnisse)، التوقعات المالية للراتب (Gehaltsvorstellung)، والقبول أو الرفض في سوق العمل الألماني.",
    words: [
      {
        german: "die Bewerbung, -en",
        arabic: "طلب التوظيف / ملف التقدم للعمل",
        english: "job application",
        example: "Ich habe meine Bewerbung per E-Mail an die Personalabteilung geschickt.",
      },
      {
        german: "das Anschreiben, -",
        arabic: "خطاب التغطية والتحفيز (المرفق مع السيرة الذاتية)",
        english: "cover letter",
        example: "Im Anschreiben erkläre ich kurz meine Motivation für die offene Stelle.",
      },
      {
        german: "der Lebenslauf, -̈e",
        arabic: "السيرة الذاتية (C.V.)",
        english: "curriculum vitae, resume",
        example:
          "Ein tabellarischer Lebenslauf enthält alle Stationen der Ausbildung und Berufserfahrung.",
      },
      {
        german: "das Vorstellungsgespräch, -e",
        arabic: "المقابلة الشخصية للتوظيف",
        english: "job interview",
        example: "Beim Vorstellungsgespräch am Dienstag stelle ich mich dem Team vor.",
      },
      {
        german: "die Stellenausschreibung, -en",
        arabic: "إعلان الوظيفة الشاغرة",
        english: "job advertisement, posting",
        example:
          "Die Firma hat eine interessante Stellenausschreibung für Webentwickler veröffentlicht.",
      },
      {
        german: "das Zeugnis, -se",
        arabic: "الشهادة (المدرسية، الجامعية أو شهادة الخبرة المهنية)",
        english: "certificate, reference letter",
        example: "Mein ehemaliger Arbeitgeber hat mir ein sehr gutes Arbeitszeugnis ausgestellt.",
      },
      {
        german: "die Qualifikation, -en",
        arabic: "المؤهل العلمي أو المهني",
        english: "qualification",
        example: "Für diesen anspruchsvollen Posten braucht man technische Qualifikationen.",
      },
      {
        german: "die Berufserfahrung, -en",
        arabic: "الخبرة العملية والمهنية",
        english: "work experience",
        example: "Sie bringt fünf Jahre Berufserfahrung im internationalen Vertrieb mit.",
      },
      {
        german: "der Arbeitgeber, -",
        arabic: "صاحب العمل / رب العمل أو الشركة المشغلة",
        english: "employer",
        example: "Der neue Arbeitgeber bietet flexible Arbeitszeiten und Weiterbildungen.",
      },
      {
        german: "die Gehaltsvorstellung, -en",
        arabic: "توقعات الراتب المنشود",
        english: "salary expectation",
        example: "In der Online-Maske musste ich meine jährliche Gehaltsvorstellung eintragen.",
      },
      {
        german: "die Zusage, -n",
        arabic: "الموافقة والقبول في الوظيفة",
        english: "acceptance, job offer confirmation",
        example: "Nach zwei Wochen erhielt er endlich die schriftliche Zusage für den Job.",
      },
      {
        german: "die Absage, -n",
        arabic: "الرفض والاعتذار عن قبول الطلب",
        english: "rejection letter",
        example: "Leider bekam sie eine Absage, weil die Konkurrenz sehr groß war.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Ich schreibe eine Bewerbung",
        paragraphs: [
          [
            "Ich suche eine neue Arbeit in Deutschland.",
            "Heute schreibe ich [die Bewerbung, -en|meine Bewerbung] für ein Büro.",
            "Zuerst erstelle ich [der Lebenslauf, -̈e|meinen Lebenslauf] am Computer.",
            "Dort stehen mein Name, meine Schule und meine Hobbys.",
          ],
          [
            "Dann verfasse ich [das Anschreiben, -|ein kurzes Anschreiben].",
            "Ich schreibe: 'Sehr geehrte Damen und Herren, ich möchte gern bei Ihnen arbeiten.'",
            "Ich scanne auch [das Zeugnis, -se|mein Zeugnis] ein und hänge es an die E-Mail an.",
          ],
          [
            "Ich hoffe auf ein freundliches [das Vorstellungsgespräch, -e|Vorstellungsgespräch].",
            "Wenn alles klappt, schickt [der Arbeitgeber, -|der Arbeitgeber] mir bald [die Zusage, -n|eine Zusage]!",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Schritt für Schritt zum neuen Job",
        paragraphs: [
          [
            "Letzte Woche habe ich in einer Online-Jobbörse [die Stellenausschreibung, -en|eine Stellenausschreibung] entdeckt.",
            "Das Profil passte genau zu mir, denn die Firma verlangte gute Deutschkenntnisse und etwas [die Berufserfahrung, -en|Berufserfahrung].",
          ],
          [
            "Ich habe sorgfältig [das Anschreiben, -|mein Anschreiben] formuliert und betont, welche [die Qualifikation, -en|Qualifikationen] ich besitze.",
            "Im tabellarischen [der Lebenslauf, -̈e|Lebenslauf] habe ich meine bisherigen Praktika aufgelistet.",
            "Außerdem habe ich meine [die Gehaltsvorstellung, -en|Gehaltsvorstellung] realistisch angegeben.",
          ],
          [
            "Gestern kam der ersehnte Anruf: Ich bin zu einem persönlichen [das Vorstellungsgespräch, -e|Vorstellungsgespräch] eingeladen!",
            "Ich bin ein wenig nervös, aber ich freue mich sehr darauf, mich persönlich vorzustellen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Das Vorstellungsgespräch und die Zusage",
        paragraphs: [
          [
            "Der Bewerbungsprozess in Deutschland erfordert Gründlichkeit und eine professionelle Vorbereitung.",
            "Nachdem ich [die Bewerbung, -en|meine Bewerbung] mit lückenlosem [der Lebenslauf, -̈e|Lebenslauf] und allen relevanten [das Zeugnis, -se|Zeugnissen] eingereicht hatte, erhielt ich die Einladung zum Gespräch.",
          ],
          [
            "Beim [das Vorstellungsgespräch, -e|Vorstellungsgespräch] saßen mir die Personalleiterin und der Teamleiter gegenüber.",
            "Sie stellten detaillierte Fragen zu meiner praktischen [die Berufserfahrung, -en|Berufserfahrung] und wollten wissen, warum ich mich gerade für ihr Unternehmen entschieden habe.",
            "Auch über meine [die Gehaltsvorstellung, -en|Gehaltsvorstellung] haben wir offen und sachlich verhandelt.",
          ],
          [
            "Das Gespräch verlief in einer sehr angenehmen Atmosphäre.",
            "Wenige Tage später erhielt ich statt einer befürchteten [die Absage, -n|Absage] die freudige Nachricht: [der Arbeitgeber, -|Der Arbeitgeber] übermittelte mir [die Zusage, -n|die feste Zusage] und bot mir einen unbefristeten Arbeitsvertrag an.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "Professionelles Bewerbungsmanagement im Fachkräftemarkt",
        paragraphs: [
          [
            "Angesichts des fortschreitenden Wandels auf dem Arbeitsmarkt hat sich das Anforderungsprofil an Bewerber grundlegend transformiert.",
            "Eine aussagekräftige [die Bewerbung, -en|Bewerbung] erschöpft sich heute nicht mehr in formalen Floskeln, sondern verlangt ein passgenaues [das Anschreiben, -|Anschreiben], das die eigene Eignung pointiert mit den Anforderungen der [die Stellenausschreibung, -en|Stellenausschreibung] verknüpft.",
          ],
          [
            "Ein strukturierter [der Lebenslauf, -̈e|Lebenslauf] muss methodische Kompetenzen und fachliche [die Qualifikation, -en|Qualifikationen] transparent dokumentieren, gestützt durch qualifizierte [das Zeugnis, -se|Arbeitszeugnisse], die vergangene Erfolge plausibel untermauern.",
            "Im mehrstufigen Assessment-Center und im anspruchsvollen [das Vorstellungsgespräch, -e|Vorstellungsgespräch] erwarten moderne [der Arbeitgeber, -|Arbeitgeber] neben fundierter [die Berufserfahrung, -en|Berufserfahrung] vor allem ausgeprägte Problemlösungskompetenz und emotionale Intelligenz.",
          ],
          [
            "Wer in Gehaltsverhandlungen seine [die Gehaltsvorstellung, -en|Gehaltsvorstellung] marktgerecht und selbstbewusst argumentiert, erhöht die Chancen auf [die Zusage, -n|eine lukrative Zusage] signifikant und vermeidet frühzeitige [die Absage, -n|Absagen] in einem wettbewerbsintensiven Recruitingumfeld.",
          ],
        ],
      },
    },
  },

  berufe: {
    description:
      "Berufsbilder, Handwerk, Dienstleistungen, Ausbildung, Studium und Arbeitsverhältnisse.",
    details: "Vielfalt der Berufe, Ausbildungswege, Vollzeit, Teilzeit und Karriere (A1–B2)",
    arabicDescription:
      "المهن والوظائف (Berufe): أسماء المهن (Beruf)، الحرفيين (Handwerker)، الأطباء (Ärztin)، المهندسين (Ingenieur)، المدرسين، الممرضين والمبرمجين. مفردات مسارات التأهيل: التدريب المهني الثنائي (Ausbildung)، التدريب العملي (Praktikum)، والعمل بدوام كامل (Vollzeit) أو جزئي (Teilzeit).",
    words: [
      {
        german: "der Beruf, -e",
        arabic: "المهنة / الوظيفة",
        english: "profession, occupation, job",
        example: "Was bist du von Beruf? Ich arbeite als Buchhalter.",
      },
      {
        german: "der Handwerker, -",
        arabic: "الحرفي (نجار، سباك، كهربائي، إلخ)",
        english: "craftsman, tradesman",
        example: "Der Handwerker repariert das Dach und verlegt neue Fliesen im Bad.",
      },
      {
        german: "die Ärztin, -nen",
        arabic: "الطبيبة",
        english: "female doctor, physician",
        example: "Die Ärztin untersucht die Patientin und verschreibt ein wirksames Medikament.",
      },
      {
        german: "der Ingenieur, -e",
        arabic: "المهندس",
        english: "engineer",
        example: "Der Ingenieur konstruiert energieeffiziente Motoren für Elektroautos.",
      },
      {
        german: "der Lehrer, -",
        arabic: "المعلم / المدرس",
        english: "teacher",
        example: "Unser Lehrer erklärt den Schülern grammatikalische Regeln mit viel Geduld.",
      },
      {
        german: "die Pflegefachkraft, -̈e",
        arabic: "أخصائي / ممرض الرعاية الصحية والتمريض",
        english: "nurse, healthcare specialist",
        example: "Die engagierte Pflegefachkraft kümmert sich rührend um ältere Menschen.",
      },
      {
        german: "der Verkäufer, -",
        arabic: "البائع في المتجر",
        english: "salesperson, shop assistant",
        example: "Der freundliche Verkäufer berät die Kunden bei der Auswahl der Schuhe.",
      },
      {
        german: "der Programmierer, -",
        arabic: "المبرمج ومطور البرمجيات",
        english: "programmer, software developer",
        example: "Als Programmierer schreibt er sauberen Code für moderne Webanwendungen.",
      },
      {
        german: "die Ausbildung, -en",
        arabic: "التدريب المهني المزدوج (نظري وعملي)",
        english: "vocational training, apprenticeship",
        example: "In Deutschland dauert eine duale Ausbildung meist drei Jahre.",
      },
      {
        german: "das Praktikum, Praktika",
        arabic: "التدريب الميداني / فترة التمرين العملي",
        english: "internship",
        example:
          "Während der Semesterferien absolviere ich ein Praktikum in einer Marketingagentur.",
      },
      {
        german: "die Vollzeitstelle, -n",
        arabic: "وظيفة بدوام كامل (غالباً 40 ساعة أسبوعياً)",
        english: "full-time position",
        example: "Nach dem Abschluss fand sie sofort eine unbefristete Vollzeitstelle.",
      },
      {
        german: "die Teilzeit (Sg.)",
        arabic: "العمل بدوام جزئي",
        english: "part-time work",
        example: "Um mehr Zeit für die Kinder zu haben, arbeitet er vorübergehend in Teilzeit.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Was bist du von Beruf?",
        paragraphs: [
          [
            "Viele Menschen haben einen interessanten [der Beruf, -e|Beruf].",
            "Mein Vater ist [der Handwerker, -|Handwerker]. Er baut schöne Tische und repariert Türen.",
            "Meine Mutter ist [die Ärztin, -nen|Ärztin] in einem Krankenhaus. Sie hilft kranken Menschen.",
          ],
          [
            "Mein Bruder lernt gern Sprachen und ist [der Lehrer, -|Lehrer] an einer Grundschule.",
            "Ich selbst arbeite als [der Verkäufer, -|Verkäufer] in einem Supermarkt.",
            "Ich spreche jeden Tag mit vielen netten Kunden.",
          ],
          [
            "Mein Freund Max ist [der Programmierer, -|Programmierer].",
            "Er sitzt am Computer und programmiert Spiele. Das gefällt ihm sehr gut.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Mein Weg in die Arbeitswelt",
        paragraphs: [
          [
            "Nach der Schule stand ich vor einer wichtigen Entscheidung: Sollte ich studieren oder eine praktische [die Ausbildung, -en|Ausbildung] machen?",
            "Zuerst habe ich ein dreimonatiges [das Praktikum, Praktika|Praktikum] bei einem mittelständischen Betrieb gemacht.",
          ],
          [
            "Dort habe ich mit einem erfahrenen [der Ingenieur, -e|Ingenieur] zusammengearbeitet.",
            "Er zeigte mir, wie Maschinen konstruiert und geprüft werden.",
            "Die Arbeit war faszinierend, erforderte aber viel technisches Verständnis.",
          ],
          [
            "Jetzt habe ich eine feste [die Vollzeitstelle, -n|Vollzeitstelle] gefunden.",
            "Meine Kollegin arbeitet wegen ihrer Familie in [die Teilzeit (Sg.)|Teilzeit], was ihr große Flexibilität ermöglicht.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Berufliche Perspektiven und Weiterentwicklung",
        paragraphs: [
          [
            "Das deutsche Ausbildungssystem genießt weltweit hohes Ansehen, da Theorie und Praxis eng miteinander verzahnt sind.",
            "Wer eine dreijährige duale [die Ausbildung, -en|Ausbildung] erfolgreich abschließt, besitzt exzellente Aussichten auf dem Arbeitsmarkt.",
          ],
          [
            "In Krankenhäusern und Pflegeheimen wird jede qualifizierte [die Pflegefachkraft, -̈e|Pflegefachkraft] dringend gesucht, da der demografische Wandel spürbar ist.",
            "Gleichzeitig wächst der Bedarf im IT-Sektor unaufhaltsam: Ein fähiger [der Programmierer, -|Programmierer] kann sich seine Projekte oft aussuchen.",
          ],
          [
            "Viele Arbeitnehmer beginnen nach dem Studium mit einem praxisorientierten [das Praktikum, Praktika|Praktikum], bevor sie in eine reguläre [die Vollzeitstelle, -n|Vollzeitstelle] übernommen werden.",
            "Für viele Eltern ist das Modell der [die Teilzeit (Sg.)|Teilzeit] ein bewährter Kompromiss, um Beruf und Familienleben harmonisch zu vereinbaren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "Strukturwandel und neue Berufsbilder im 21. Jahrhundert",
        paragraphs: [
          [
            "Die digitale Transformation und der ökologische Wandel verändern traditionelle Berufsfelder in rasantem Tempo.",
            "Während klassische Handwerksberufe durch Automatisierung und moderne Werkstoffe eine Renaissance erleben, übernimmt ein spezialisierter [der Ingenieur, -e|Ingenieur] heute vermehrt systemische Schnittstellenaufgaben.",
          ],
          [
            "Gleichzeitig verändert künstliche Intelligenz die Tätigkeitsprofile in Wissensberufen: Ein professioneller [der Programmierer, -|Programmierer] konzentriert sich zunehmend auf Architekturkonzepte und Qualitätssicherung statt auf reine Routineprogrammierung.",
            "Im Bildungs- und Gesundheitswesen bleibt der menschliche Faktor hingegen unersetzlich; weder [der Lehrer, -|ein Lehrer] noch eine examinierte [die Pflegefachkraft, -̈e|Pflegefachkraft] lassen sich durch Algorithmen substituieren.",
          ],
          [
            "Die Flexibilisierung von Arbeitszeitmodellen führt dazu, dass starre Grenzen zwischen [die Vollzeitstelle, -n|Vollzeitstelle] und [die Teilzeit (Sg.)|Teilzeit] durch agile Arbeitskonzepte und Remote-Work aufgeweicht werden.",
            "Lebenslanges Lernen ist zur conditio sine qua non geworden, um in jedem anspruchsvollen [der Beruf, -e|Beruf] zukunftsfähig zu bleiben.",
          ],
        ],
      },
    },
  },

  das_organigramm: {
    description:
      "Unternehmensstruktur, Abteilungen, Geschäftsführung, Teamleitung und Hierarchien.",
    details: "Organigramm, HR, Marketing, Vertrieb, Buchhaltung und Zuständigkeiten (A1–B2)",
    arabicDescription:
      "الهيكل التنظيمي للشركة (Das Organigramm): مخطط الشركة (Organigramm)، الإدارة التنفيذية (Geschäftsführung)، الأقسام (Abteilungen)، قسم الموارد البشرية (Personalabteilung / HR)، التسويق (Marketing)، المبيعات (Vertrieb)، المحاسبة (Buchhaltung)، والمسؤوليات والصلاحيات (Zuständigkeit).",
    words: [
      {
        german: "das Organigramm, -e",
        arabic: "الهيكل التنظيمي / المخطط الهيكلي للشركة",
        english: "organizational chart, org chart",
        example:
          "Das Organigramm veranschaulicht die Führungsstruktur und Abteilungen des Unternehmens.",
      },
      {
        german: "die Geschäftsführung, -en",
        arabic: "الإدارة التنفيذية / مجلس الإدارة",
        english: "management, executive board, managing directors",
        example:
          "Die Geschäftsführung trifft strategische Entscheidungen für die Zukunft des Betriebs.",
      },
      {
        german: "die Abteilung, -en",
        arabic: "القسم / الفرع في الشركة",
        english: "department, division",
        example: "In welcher Abteilung arbeitest du? Ich gehöre zur IT-Abteilung.",
      },
      {
        german: "der Abteilungsleiter, -",
        arabic: "رئيس القسم / مدير الإدارة",
        english: "department head, department manager",
        example: "Unser Abteilungsleiter koordiniert die wöchentlichen Aufgaben und Ziele.",
      },
      {
        german: "das Team, -s",
        arabic: "فريق العمل",
        english: "team",
        example: "Unser Team arbeitet engagiert an der Fertigstellung des Softwareprojekts.",
      },
      {
        german: "die Hierarchie, -n",
        arabic: "التسلسل الهرمي / التدرج الإداري",
        english: "hierarchy",
        example:
          "Flache Hierarchien ermöglichen schnelle Entscheidungen und direkte Kommunikation.",
      },
      {
        german: "der Mitarbeiter, -",
        arabic: "الموظف / العامل",
        english: "employee, staff member, coworker",
        example: "Das Unternehmen beschäftigt über zweihundert festangestellte Mitarbeiter.",
      },
      {
        german: "die Personalabteilung, -en",
        arabic: "قسم شؤون الموظفين والموارد البشرية (HR)",
        english: "human resources department (HR)",
        example: "Bei Fragen zu Urlaubsanträgen oder Verträgen hilft die Personalabteilung.",
      },
      {
        german: "das Marketing (Sg.)",
        arabic: "إدارة التسويق والدعاية",
        english: "marketing",
        example: "Das Marketing plant eine neue Werbekampagne in den sozialen Medien.",
      },
      {
        german: "der Vertrieb (Sg.)",
        arabic: "إدارة المبيعات والتوزيع",
        english: "sales, sales department",
        example: "Der Vertrieb kontaktiert potenzielle Neukunden und schließt Kaufverträge ab.",
      },
      {
        german: "die Buchhaltung, -en",
        arabic: "قسم الحسابات والمالية",
        english: "accounting department, bookkeeping",
        example: "Die Buchhaltung prüft alle Rechnungen und überwacht die pünktlichen Zahlungen.",
      },
      {
        german: "die Zuständigkeit, -en",
        arabic: "الاختصاص / نطاق المسؤولية",
        english: "responsibility, remit, jurisdiction",
        example: "Für technische Probleme liegt die Zuständigkeit beim IT-Support.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Unser Team und der Chef",
        paragraphs: [
          [
            "In unserer Firma arbeiten viele Menschen.",
            "An der Wand im Eingang hängt [das Organigramm, -e|ein großes Organigramm].",
            "Ganz oben steht [die Geschäftsführung, -en|die Geschäftsführung].",
            "Der Chef leitet das ganze Unternehmen.",
          ],
          [
            "Unsere Firma hat verschiedene [die Abteilung, -en|Abteilungen].",
            "Ich arbeite gern in meinem kleinen [das Team, -s|Team].",
            "Jeder [der Mitarbeiter, -|Mitarbeiter] hat einen Schreibtisch und einen Computer.",
          ],
          [
            "Mein [der Abteilungsleiter, -|Abteilungsleiter] ist sehr freundlich.",
            "Er erklärt uns jeden Morgen die Aufgaben für den Tag.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Wer macht was im Betrieb?",
        paragraphs: [
          [
            "Wenn neue Kollegen in den Betrieb kommen, lernen sie zuerst die Struktur kennen.",
            "In unserer [die Abteilung, -en|Abteilung] herrscht eine sehr angenehme Arbeitsatmosphäre.",
            "Wenn wir Fragen zu unserem Arbeitsvertrag haben, gehen wir direkt in [die Personalabteilung, -en|die Personalabteilung].",
          ],
          [
            "Für den Verkauf unserer Produkte ist [der Vertrieb (Sg.)|der Vertrieb] zuständig.",
            "Die Kollegen im [das Marketing (Sg.)|Marketing] entwerfen bunte Broschüren und Online-Werbung, um neue Kunden zu gewinnen.",
          ],
          [
            "Am Monatsende zahlt [die Buchhaltung, -en|die Buchhaltung] pünktlich alle Gehälter aus und bezahlt offene Rechnungen.",
            "So weiß jeder Kollege genau, was seine konkrete [die Zuständigkeit, -en|Zuständigkeit] ist.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Unternehmensorganisation und flache Hierarchien",
        paragraphs: [
          [
            "Ein klar gegliedertes [das Organigramm, -e|Organigramm] schafft Transparenz und verhindert Kompetenzgerangel im Betriebsalltag.",
            "Während traditionelle Großkonzerne oft eine starre und steile [die Hierarchie, -n|Hierarchie] aufweisen, setzen moderne Start-ups auf flache Strukturen.",
          ],
          [
            "An der Spitze trägt [die Geschäftsführung, -en|die Geschäftsführung] die Gesamtverantwortung für die wirtschaftliche Entwicklung des Unternehmens.",
            "Jeder [der Abteilungsleiter, -|Abteilungsleiter] fungiert als Bindeglied zwischen Vorstand und operativer Ebene, delegiert Aufgaben und fördert seine [der Mitarbeiter, -|Mitarbeiter].",
          ],
          [
            "Eine enge Abstimmung zwischen [das Marketing (Sg.)|Marketing], [der Vertrieb (Sg.)|Vertrieb] und [die Buchhaltung, -en|Buchhaltung] gewährleistet, dass Aufträge reibungslos abgewickelt werden.",
            "Klare [die Zuständigkeit, -en|Zuständigkeiten] innerhalb der Teams verhindern Missverständnisse und steigern die Produktivität beträchtlich.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "Agile Organisationsstrukturen im Zeitalter digitaler Transformation",
        paragraphs: [
          [
            "Das klassisch-pyramidale [das Organigramm, -e|Organigramm] stößt in dynamischen, technologiegetriebenen Märkten zunehmend an seine funktionalen Grenzen.",
            "Matrixorganisationen und crossfunktionale Netzwerke lösen starre Silos auf, wodurch die strikte [die Hierarchie, -n|Hierarchie] zugunsten dezentraler Entscheidungsbefugnisse zurücktritt.",
          ],
          [
            "Für [die Geschäftsführung, -en|die Geschäftsführung] bedeutet dies einen Paradigmenwechsel vom autoritären Befehlswesen hin zu dienender Führung ('Servant Leadership').",
            "Gleichzeitig wandelt sich die Rolle der [die Personalabteilung, -en|Personalabteilung] vom reinen Administrationsorgan zum strategischen People-&-Culture-Partner, der Talente akquiriert und adaptive Lernkulturen etabliert.",
          ],
          [
            "Wenn [das Marketing (Sg.)|Marketing] und [der Vertrieb (Sg.)|Vertrieb] in integrierten Revenue-Teams agieren und [die Buchhaltung, -en|die Buchhaltung] durch KI-gestützte Controlling-Systeme entlastet wird, definiert sich [die Zuständigkeit, -en|Zuständigkeit] nicht mehr über Stellenbeschreibungen, sondern über ergebnisorientierte Wertschöpfungsbeiträge.",
          ],
        ],
      },
    },
  },

  bueromoebel: {
    description:
      "Schreibtische, Bürostühle, Aktenschränke, Ergonomie und moderne Arbeitsplatzgestaltung.",
    details: "Ergonomische Büromöbel, Stehtische, Rollcontainer und Stauraum (A1–B2)",
    arabicDescription:
      "أثاث المكاتب (Büromöbel): مفردات تجهيز بيئة العمل، المكتب (Schreibtisch)، كرسي المكتب المريح (Bürostuhl)، خزانة الملفات (Aktenschrank)، الطاولة القابلة للرفع (Stehtisch)، وحدة الأدراج المتنقلة (Rollcontainer)، وقواعد بيئة العمل الصحية (Ergonomie).",
    words: [
      {
        german: "der Schreibtisch, -e",
        arabic: "مكتب الكتابة والعمل",
        english: "desk, writing desk",
        example: "Auf meinem Schreibtisch stehen ein Monitor, eine Tastatur und eine Kaffeetasse.",
      },
      {
        german: "der Bürostuhl, -̈e",
        arabic: "كرسي المكتب الدوار",
        english: "office chair, swivel chair",
        example: "Ein hochwertiger Bürostuhl entlastet die Wirbelsäule bei langem Sitzen.",
      },
      {
        german: "der Aktenschrank, -̈e",
        arabic: "خزانة الملفات والمستندات",
        english: "filing cabinet",
        example: "Im abschließbaren Aktenschrank lagern wir vertrauliche Verträge und Akten.",
      },
      {
        german: "der Rollcontainer, -",
        arabic: "وحدة أدراج متحركة أسفل المكتب",
        english: "mobile pedestal, under-desk drawer unit",
        example: "Im Rollcontainer bewahre ich Stifte, Notizblöcke und mein Ladekabel auf.",
      },
      {
        german: "der Stehtisch, -e",
        arabic: "طاولة العمل وقوفاً (مكتب قابل لتعديل الارتفاع)",
        english: "standing desk, height-adjustable desk",
        example:
          "Dank des elektrischen Stehtischs kann ich abwechselnd im Sitzen und Stehen arbeiten.",
      },
      {
        german: "das Whiteboard, -s",
        arabic: "اللوح الأبيض للكتابة التفاعلية",
        english: "whiteboard",
        example: "Am Whiteboard sammeln wir neue Projektideen mit bunten Markern.",
      },
      {
        german: "die Trennwand, -̈e",
        arabic: "القاطع المكتبي / حاجز الخصوصية وعزل الصوت",
        english: "partition, office divider, acoustic screen",
        example: "Eine schallschluckende Trennwand dämpft den Geräuschpegel im Großraumbüro.",
      },
      {
        german: "die Ergonomie (Sg.)",
        arabic: "هندسة بيئة العمل الصحية (راحة الجسم أثناء العمل)",
        english: "ergonomics",
        example: "Gute Ergonomie am Bildschirmarbeitsplatz beugt Nacken- und Rückenschmerzen vor.",
      },
      {
        german: "die Schreibtischlampe, -n",
        arabic: "مصباح المكتب للإضاءة المباشرة",
        english: "desk lamp",
        example: "Die LED-Schreibtischlampe sorgt an dunklen Wintertagen für blendfreies Licht.",
      },
      {
        german: "das Bücherregal, -e",
        arabic: "رف الكتب والمراجع",
        english: "bookshelf, bookcase",
        example: "Im Bücherregal stehen Nachschlagewerke, Fachzeitschriften und Handbücher.",
      },
      {
        german: "das Rollregal, -e",
        arabic: "رف متحرك بعجلات للتخزين",
        english: "mobile shelf, trolley shelf",
        example: "Das Rollregal bringt häufig benötigte Ordner flexibel an jeden Arbeitsplatz.",
      },
      {
        german: "die Kabelwanne, -n",
        arabic: "مجرى وقناة تنظيم الكابلات تحت المكتب",
        english: "cable tray, cable organizer",
        example: "Die Kabelwanne unter der Tischplatte verhindert unordentlichen Kabelsalat.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Mein neuer Arbeitsplatz im Büro",
        paragraphs: [
          [
            "Ich habe einen schönen Arbeitsplatz im Büro.",
            "Hier steht mein großer [der Schreibtisch, -e|Schreibtisch].",
            "Davor steht [der Bürostuhl, -̈e|ein bequemer Bürostuhl]. Man kann ihn drehen und in der Höhe verstellen.",
          ],
          [
            "Unter dem Tisch habe ich [der Rollcontainer, -|einen Rollcontainer] für meine Stifte.",
            "An der Wand steht [der Aktenschrank, -̈e|ein großer Aktenschrank] voller Ordner.",
            "Auf dem Tisch leuchtet [die Schreibtischlampe, -n|eine helle Schreibtischlampe].",
          ],
          [
            "Im Zimmer gibt es auch [das Whiteboard, -s|ein Whiteboard].",
            "Dort schreiben wir wichtige Notizen und Termine auf.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Gesünder arbeiten mit passenden Möbeln",
        paragraphs: [
          [
            "Letzten Monat hat unsere Firma neue Büromöbel für alle Mitarbeiter angeschafft.",
            "Weil viele Kollegen oft über Rückenschmerzen klagten, bekamen wir moderne Möbel.",
          ],
          [
            "Besonders toll ist der neue höhenverstellbare [der Stehtisch, -e|Stehtisch].",
            "Auf Knopfdruck fährt die Tischplatte nach oben, sodass man bequem im Stehen arbeiten kann.",
            "Auch der ergonomische [der Bürostuhl, -̈e|Bürostuhl] unterstützt den Rücken optimal.",
          ],
          [
            "Zwischen den Tischen trennt uns [die Trennwand, -̈e|eine Trennwand], die den Schall dämpft.",
            "Unter jedem Tisch hält [die Kabelwanne, -n|eine praktische Kabelwanne] alle Computerkabel ordentlich zusammen.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Ergonomie und Wohlbefinden am Arbeitsplatz",
        paragraphs: [
          [
            "Wer täglich acht Stunden vor dem Bildschirm verbringt, weiß, wie entscheidend durchdachte [die Ergonomie (Sg.)|Ergonomie] für die Gesundheit ist.",
            "Schlechte Möbel führen unweigerlich zu chronischen Haltungsschäden, Verspannungen und vorzeitiger Ermüdung.",
          ],
          [
            "Deshalb investieren zukunftsorientierte Unternehmen in ergonomische Arbeitsplätze.",
            "Ein flexibler [der Stehtisch, -e|Stehtisch] ermöglicht den dynamischen Wechsel zwischen Sitz- und Stehphasen während langer Arbeitstage.",
            "Ein voll konfigurierbarer [der Bürostuhl, -̈e|Bürostuhl] mit Synchronmechanik und Lordosenstütze passt sich exakt der Anatomie des Nutzers an.",
          ],
          [
            "Zur Ordnung tragen strukturierte Stauräume bei: Während vertrauliche Personaldaten im abschließbaren [der Aktenschrank, -̈e|Aktenschrank] verschwinden, bleiben tägliche Arbeitsmittel im [der Rollcontainer, -|Rollcontainer] stets griffbereit.",
            "Im Großraumbüro sorgt zudem eine stoffbezogene [die Trennwand, -̈e|Trennwand] für akustische Privatsphäre und ungestörtes Telefonieren.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "New-Work-Konzepte: Desk-Sharing und ergonomische Workspace-Architektur",
        paragraphs: [
          [
            "Die Renaissance moderner Bürolandschaften im Kontext von New Work verdrängt starre Einzelarbeitsplätze zugunsten flexibler Multispace-Konzepte.",
            "Dabei verschmilzt funktionale [die Ergonomie (Sg.)|Ergonomie] mit anspruchsvollem Industriedesign, um kollaborative und konzentrierte Arbeitsphasen gleichermaßen zu unterstützen.",
          ],
          [
            "Der motorisierte [der Stehtisch, -e|Stehtisch] ist heute Standard und lässt sich bei Desk-Sharing-Modellen per Benutzerprofil sekundenschnell auf individuelle Höhen voreinstellen.",
            "Ein Hochleistungs-[der Bürostuhl, -̈e|Bürostuhl] garantiert durch multidimensionale Armlehnen und reaktive Gegengewichtseinstellungen eine optimale Druckverteilung.",
          ],
          [
            "Mobile Elemente wie das wendige [das Rollregal, -e|Rollregal] und magnetische [das Whiteboard, -s|Whiteboards] ermöglichen agile Projektarbeit in wechselnden Teamkonstellationen.",
            "Gleichzeitig reduzieren integrierte [die Kabelwanne, -n|Kabelwannen] und raumhohe akustische [die Trennwand, -̈e|Trennwände] visuelle Unruhe sowie Lärmemissionen, wodurch eine konzentrierte, produktivitätsfördernde Arbeitsatmosphäre entsteht.",
          ],
        ],
      },
    },
  },

  der_buerobedarf: {
    description: "Schreibwaren, Ordner, Hefter, Locher, Büroklammern und Verbrauchsmaterialien.",
    details: "Bürobedarf, Schreibutensilien, Archivierung und das papierlose Büro (A1–B2)",
    arabicDescription:
      "المستلزمات المكتبية (Der Bürobedarf): الأدوات المكتبية المستهلكة، خرامة الورق (Locher)، الدباسة (Heftgerät)، مشابك الورق (Büroklammer)، دفاتر الملاحظات (Notizblock)، أقلام الحبر (Kugelschreiber)، أقلام التظليل (Textmarker)، ملفات الحفظ (Ordner)، وأوراق الطباعة (Kopierpapier).",
    words: [
      {
        german: "der Bürobedarf (Sg.)",
        arabic: "المستلزمات والأدوات المكتبية",
        english: "office supplies, stationery",
        example: "Jeden Monat bestellen wir neuen Bürobedarf für unsere gesamte Abteilung.",
      },
      {
        german: "der Locher, -",
        arabic: "خرامة الورق لتخريم المستندات",
        english: "hole punch, paper punch",
        example: "Mit dem Locher stanzt sie zwei saubere Löcher in die Dokumente.",
      },
      {
        german: "das Heftgerät, -e",
        arabic: "الدباسة المكتبية (التّاكر)",
        english: "stapler",
        example: "Das Heftgerät verbindet mehrere lose Blätter mit einer Metallklammer.",
      },
      {
        german: "die Büroklammer, -n",
        arabic: "مشبك الورق المعدني",
        english: "paperclip",
        example: "Ich hefte die Quittung mit einer kleinen Büroklammer an das Formular.",
      },
      {
        german: "der Notizblock, -̈e",
        arabic: "دفتر ومفكرة تدوين الملاحظات",
        english: "notepad, scratchpad",
        example: "Während des Telefonats schreibe ich wichtige Telefonnummern auf den Notizblock.",
      },
      {
        german: "der Kugelschreiber, -",
        arabic: "قلم حبر جاف",
        english: "ballpoint pen",
        example: "Bitte unterschreiben Sie den Vertrag mit einem blauen Kugelschreiber.",
      },
      {
        german: "der Textmarker, -",
        arabic: "قلم التظليل والتلوين الفسفوري",
        english: "highlighter",
        example: "Mit einem gelben Textmarker markiert er wesentliche Textstellen im Bericht.",
      },
      {
        german: "der Ordner, -",
        arabic: "ملف الحفظ السميك ذو الحلقات (كلاسور)",
        english: "ring binder, folder",
        example: "Alle Rechnungen des laufenden Jahres sind chronologisch im Ordner abgeheftet.",
      },
      {
        german: "das Klebeband, -̈er",
        arabic: "الشريط اللاصق (سيلوتيب)",
        english: "adhesive tape, scotch tape",
        example: "Wir verschließen das schwere Paket sorgfältig mit reißfestem Klebeband.",
      },
      {
        german: "die Schere, -n",
        arabic: "المقص المكتبي",
        english: "scissors",
        example: "Mit der scharfen Schere schneidet sie das Etikett sauber aus.",
      },
      {
        german: "das Kopierpapier, -e",
        arabic: "ورق الطباعة والتصوير (A4)",
        english: "printer paper, copy paper",
        example: "Der Drucker zeigt eine Warnung: Es fehlt neues weißes Kopierpapier.",
      },
      {
        german: "die Haftnotiz, -en",
        arabic: "الوريقات اللاصقة الصغيرة للملاحظات السريعة (بوست إت)",
        english: "sticky note, post-it note",
        example: "Ich klebe eine gelbe Haftnotiz mit einer Erinnerung auf meinen Bildschirm.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Was brauche ich auf meinem Schreibtisch?",
        paragraphs: [
          [
            "In unserem Büro haben wir viel [der Bürobedarf (Sg.)|Bürobedarf].",
            "Ich habe immer [der Kugelschreiber, -|einen blauen Kugelschreiber] in der Hand.",
            "Wenn der Chef spricht, schreibe ich Notizen auf [der Notizblock, -̈e|meinen Notizblock].",
          ],
          [
            "Hier liegt auch [die Büroklammer, -n|eine kleine Büroklammer]. Sie hält zwei Blätter zusammen.",
            "Mit [der Locher, -|dem Locher] mache ich Löcher in das Papier.",
            "Dann lege ich das Blatt sauber in [der Ordner, -|den grünen Ordner].",
          ],
          [
            "Wenn etwas wichtig ist, nehme ich [die Haftnotiz, -en|eine gelbe Haftnotiz] und klebe sie an den Computer.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Materialbestellung für die Abteilung",
        paragraphs: [
          [
            "Jeden ersten Montag im Monat überprüfe ich den Schrank mit den Vorräten.",
            "Heute stelle ich fest, dass wir wieder neuen [der Bürobedarf (Sg.)|Bürobedarf] bestellen müssen.",
          ],
          [
            "Im Drucker gibt es fast kein [das Kopierpapier, -e|Kopierpapier] mehr, und wir drucken täglich viele Berichte.",
            "Außerdem ist [das Heftgerät, -e|das Heftgerät] auf dem Empfangstisch kaputtgegangen, und wir brauchen Klammern.",
            "Die Kollegen haben mich gebeten, auch bunte [der Textmarker, -|Textmarker] und eine neue [die Schere, -n|Schere] zu bestellen.",
          ],
          [
            "Ich fülle die Bestellliste im Intranet aus und füge noch ein paar Rollen [das Klebeband, -̈er|Klebeband] hinzu.",
            "Übermorgen liefert die Post alle Pakete direkt ins Büro.",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Organisation im Aktenchaos",
        paragraphs: [
          [
            "Trotz fortschreitender Digitalisierung ist ein gut sortierter Vorrat an Schreibutensilien im Geschäftsalltag unverzichtbar.",
            "Wer wichtige Dokumente manuell verarbeitet, greift täglich zu vertrauten Werkzeugen wie [der Locher, -|Locher], [das Heftgerät, -e|Heftgerät] und [die Büroklammer, -n|Büroklammern].",
          ],
          [
            "Zur Vorbereitung von Audits oder Steuerprüfungen muss jedes Originaldokument vorschriftsmäßig in [der Ordner, -|einem stabilen Ordner] archiviert und beschriftet werden.",
            "Wichtige Fristen oder Zwischenergebnisse markieren Mitarbeiter mit einem leuchtenden [der Textmarker, -|Textmarker], um bei Rückfragen schnell den Überblick zu behalten.",
          ],
          [
            "Kurze Telefonnotizen oder Passworterinnerungen landen oft temporär auf einer farbigen [die Haftnotiz, -en|Haftnotiz] am Monitorrand.",
            "Effizientes Dokumentenmanagement beginnt eben mit verlässlichem, hochwertigem [der Bürobedarf (Sg.)|Bürobedarf].",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "Vom Papierstapel zum digitalen Arbeitsplatz: Ressourceneffizienz im Büro",
        paragraphs: [
          [
            "Im Zuge betrieblicher Nachhaltigkeitsstrategien vollzieht sich in Unternehmen ein radikaler Paradigmenwechsel bei der Beschaffung von [der Bürobedarf (Sg.)|Bürobedarf].",
            "Der früher exzessive Verbrauch von gebleichtem [das Kopierpapier, -e|Kopierpapier] weicht zertifizierten Recyclingpapieren oder vollständig digitalisierten Workflow-Systemen.",
          ],
          [
            "Während physische Utensilien wie [das Heftgerät, -e|Heftgeräte], [die Büroklammer, -n|Büroklammern] und raumgreifende [der Ordner, -|Aktenordner] schrittweise durch revisionssichere Dokumentenmanagementsysteme (DMS) substituiert werden, bleibt haptisches Material bei Kreativprozessen begehrt.",
            "Agile Brainstorming-Sessions stützen sich nach wie vor auf analoge Hilfsmittel wie [die Haftnotiz, -en|Haftnotizen] und [der Notizblock, -̈e|Notizblöcke], um Ideen im Raum visuell zu strukturieren.",
          ],
          [
            "Ein umweltbewusstes Beschaffungswesen setzt heute auf zirkuläre Materialkreisläufe, nachfüllbare [der Kugelschreiber, -|Kugelschreiber] und lösungsmittelfreies [das Klebeband, -̈er|Klebeband], um den ökologischen Fußabdruck der Büroinfrastruktur nachhaltig zu minimieren.",
          ],
        ],
      },
    },
  },

  der_besprechungsraum: {
    description: "Konferenzräume, Präsentationstechnik, Beamer, Whiteboards und hybride Meetings.",
    details: "Besprechungsraum, Tagesordnung, Protokoll, Moderation und Videokonferenz (A1–B2)",
    arabicDescription:
      "غرفة الاجتماعات (Der Besprechungsraum): قاعة المؤتمرات والاجتماعات، جهاز العرض الضوئي (Beamer)، شاشة العرض (Leinwand)، اللوح القلاب (Flipchart)، الاجتماعات المرئية عبر الإنترنت (Videokonferenz)، جدول الأعمال (Tagesordnung)، محضر الاجتماع (Protokoll)، والعرض التقديمي (Präsentation).",
    words: [
      {
        german: "der Besprechungsraum, -̈e",
        arabic: "غرفة وقاعة الاجتماعات",
        english: "meeting room, conference room",
        example:
          "Wir haben den großen Besprechungsraum im dritten Stock für das Kundengespräch reserviert.",
      },
      {
        german: "der Beamer, -",
        arabic: "جهاز العرض الضوئي (البروجكتور)",
        english: "projector",
        example: "Der Beamer projiziert die Folien scharf an die helle Wand.",
      },
      {
        german: "die Leinwand, -̈e",
        arabic: "شاشة العرض البيضاء",
        english: "projection screen",
        example: "Der Kollege fährt die elektrische Leinwand vor der Präsentation herunter.",
      },
      {
        german: "das Flipchart, -s",
        arabic: "اللوح الورقي القلاب للرسومات والشرح",
        english: "flipchart",
        example:
          "Am Flipchart notiert der Moderator die zentralen Diskussionspunkte mit dicken Stiften.",
      },
      {
        german: "die Videokonferenz, -en",
        arabic: "مؤتمر واجتماع الفيديو المرئي عبر الإنترنت",
        english: "video conference",
        example:
          "Um Reisekosten zu sparen, schalten wir die Kollegen aus München per Videokonferenz zu.",
      },
      {
        german: "die Tagesordnung, -en",
        arabic: "جدول أعمال الاجتماع (الأجندة)",
        english: "agenda",
        example: "Zu Beginn des Meetings gehen wir die einzelnen Punkte der Tagesordnung durch.",
      },
      {
        german: "das Protokoll, -e",
        arabic: "محضر الاجتماع الرسمي لتوثيق القرارات",
        english: "minutes, protocol, meeting notes",
        example: "Wer schreibt heute das Protokoll und hält alle getroffenen Vereinbarungen fest?",
      },
      {
        german: "die Präsentation, -en",
        arabic: "العرض التقديمي (السلايدات)",
        english: "presentation",
        example: "Ihre Präsentation über die neuen Verkaufszahlen hat den Vorstand voll überzeugt.",
      },
      {
        german: "das Mikrofon, -e",
        arabic: "الميكروفون الصوتي",
        english: "microphone",
        example: "Bitte schalten Sie das Mikrofon stumm, wenn Sie gerade nicht sprechen.",
      },
      {
        german: "die Moderation, -en",
        arabic: "إدارة وتسيير الجلسة أو الحوار",
        english: "moderation, chairing of a meeting",
        example: "Eine neutrale Moderation hilft dabei, die Diskussion zielgerichtet zu halten.",
      },
      {
        german: "der Konferenztisch, -e",
        arabic: "طاولة المؤتمرات والاجتماعات الكبيرة",
        english: "conference table",
        example: "Um den langen Konferenztisch herum haben zwölf Personen bequem Platz.",
      },
      {
        german: "das Brainstorming, -s",
        arabic: "العصف الذهني وتوليد الأفكار الحرة",
        english: "brainstorming",
        example: "Im Brainstorming sammeln wir spontane Ideen ohne sofortige Kritik.",
      },
    ],
    stories: {
      A1: {
        level: "A1",
        badge: "A1 – Einstieg & Alltag",
        intro: "Einfache Sätze und grundlegender Wortschatz (A1).",
        title: "Das Meeting um zehn Uhr",
        paragraphs: [
          [
            "Um zehn Uhr haben wir ein Meeting.",
            "Wir gehen zusammen in [der Besprechungsraum, -̈e|den Besprechungsraum].",
            "Mitten im Raum steht [der Konferenztisch, -e|ein großer Konferenztisch] mit vielen Stühlen.",
          ],
          [
            "Unser Chef schaltet [der Beamer, -|den Beamer] ein.",
            "Das Bild erscheint an [die Leinwand, -̈e|der Leinwand].",
            "Wir sehen eine interessante [die Präsentation, -en|Präsentation] über unsere neuen Produkte.",
          ],
          [
            "Am Rand steht [das Flipchart, -s|ein Flipchart].",
            "Dort schreibt der Kollege mit einem dicken Stift wichtige Wörter auf.",
            "Das Meeting dauert eine Stunde und alle hören aufmerksam zu.",
          ],
        ],
      },
      A2: {
        level: "A2",
        badge: "A2 – Erweiterte Grundlagen",
        intro: "Zusammenhängende Sätze und praktische Alltagssituationen (A2).",
        title: "Vorbereitung für das Projektmeeting",
        paragraphs: [
          [
            "Heute Nachmittag findet unsere wöchentliche Teambesprechung statt.",
            "Ich habe den Auftrag bekommen, [der Besprechungsraum, -̈e|den Besprechungsraum] vorzubereiten.",
          ],
          [
            "Zuerst teste ich die Technik: [der Beamer, -|Der Beamer] funktioniert einwandfrei und verbindet sich schnell mit dem Laptop.",
            "Weil zwei Kolleginnen im Homeoffice arbeiten, starten wir [die Videokonferenz, -en|eine Videokonferenz].",
            "Ich stelle sicher, dass [das Mikrofon, -e|das Mikrofon] auf dem Tisch keinen Hall erzeugt.",
          ],
          [
            "Jedem Teilnehmer lege ich [die Tagesordnung, -en|die Tagesordnung] auf den Platz.",
            "Mein Kollege Markus übernimmt heute die Aufgabe und schreibt [das Protokoll, -e|das Protokoll].",
          ],
        ],
      },
      B1: {
        level: "B1",
        badge: "B1 – Selbstständige Sprachverwendung",
        intro: "Detaillierte Schilderungen und beruflicher Kontext (B1).",
        title: "Effiziente Meetingkultur und Beschlussfassung",
        paragraphs: [
          [
            "Zeit ist im Berufsalltag eine kostbare Ressource, weshalb professionell strukturierte Besprechungen über den Projekterfolg entscheiden.",
            "Bevor das Team in [der Besprechungsraum, -̈e|den Besprechungsraum] gerufen wird, muss eine präzise [die Tagesordnung, -en|Tagesordnung] an alle Beteiligten verschickt werden.",
          ],
          [
            "Eine souveräne [die Moderation, -en|Moderation] stellt sicher, dass Redezeiten eingehalten werden und die Diskussion nicht vom eigentlichen Thema abschweift.",
            "Zu Beginn führen wir oft ein kurzes [das Brainstorming, -s|Brainstorming] am [das Flipchart, -s|Flipchart] durch, um innovative Lösungsansätze für aktuelle Engpässe zu sammeln.",
          ],
          [
            "Anschließend folgt [die Präsentation, -en|die Präsentation] der konkreten Zwischenergebnisse auf der großen [die Leinwand, -̈e|Leinwand].",
            "Damit keine wertvollen Beschlüsse verloren gehen, hält der Protokollant alle Verantwortlichkeiten und Deadlines verbindlich in [das Protokoll, -e|dem Protokoll] fest.",
          ],
        ],
      },
      B2: {
        level: "B2",
        badge: "B2 – Vertiefte Fachkompetenz",
        intro: "Fachsprachliche Nuancen und anspruchsvolle Diskurse (B2).",
        title: "Hybride Kollaborationsmodelle und digitale Konferenztechnik",
        paragraphs: [
          [
            "Die Etablierung hybrider Arbeitswelten hat die funktionale Konzeptionierung von [der Besprechungsraum, -̈e|Besprechungsräumen] revolutioniert.",
            "Moderne Besprechungszonen fungieren nicht länger als reine Versammlungsorte physisch anwesender Akteure, sondern als medientechnische Hubs für simultane Kollaboration.",
          ],
          [
            "Hochauflösende Kamerasysteme mit KI-gestützter Sprechertracking-Funktion und multidirektionale Decken-[das Mikrofon, -e|Mikrofone] binden Remote-Teilnehmer via [die Videokonferenz, -en|Videokonferenz] so ein, dass Nähe und Interaktionsdynamik gewahrt bleiben.",
            "Klassische Projektionsflächen werden vermehrt durch interaktive Touch-Displays ersetzt, die den traditionellen [der Beamer, -|Beamer] ablösen und digitales [das Brainstorming, -s|Brainstorming] synchron auf allen Endgeräten spiegeln.",
          ],
          [
            "Gleichzeitig erfordert die hybride Meetingkultur eine geschärfte [die Moderation, -en|Moderation]: Der Moderator muss digitale Wortmeldungen mit Wortbeiträgen am [der Konferenztisch, -e|Konferenztisch] ausbalancieren, die strikte Einhaltung der [die Tagesordnung, -en|Tagesordnung] steuern und ein lückenloses, digitales [das Protokoll, -e|Protokoll] zur Nachverfolgung generieren.",
          ],
        ],
      },
    },
  },
};

const bbPath = "src/data/vocabulary/bildung-und-beruf.json";
const bbData = JSON.parse(fs.readFileSync(bbPath, "utf8"));

for (const sec of bbData.sections) {
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

const res = vocabularyCollectionSchema.safeParse(bbData);
if (!res.success) {
  console.error("Validation failed:", res.error);
  process.exit(1);
}

fs.writeFileSync(bbPath, JSON.stringify(bbData, null, 2) + "\n", "utf8");
console.log("Batch 2 successfully saved to bildung-und-beruf.json!");
