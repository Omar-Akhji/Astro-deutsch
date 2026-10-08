import fs from "fs";
import path from "path";

// Mapping of topic ID to clean, elegant details subtitle like stammbaum
const topicDetailsMap: Record<string, string> = {
  // Chapter 1: 1-menschen.json
  stammbaum: "Stammbaum, Verwandtschaft und Beziehungsstatus (A1–B2)",
  beziehungen: "Freundschaft, Partnerschaft und zwischenmenschliche Beziehungen (A1–B2)",
  lebensphasen: "Kindheit, Jugend, Erwachsenenalter und Lebensabschnitte (A1–B2)",
  begruessen: "Begrüßungsformeln, Verabschiedung und Höflichkeit im Alltag (A1–B2)",
  feste: "Feste, Feiertage, Geburtstage und persönliche Feiern (A1–B2)",
  wendepunkte: "Lebensentscheidungen, Meilensteine und biografische Wendepunkte (A1–B2)",
  gesicht: "Gesichtszüge, Gesichtsausdrücke und Sinnesorgane (A1–B2)",
  haar: "Haarfarben, Haartypen und moderne Frisuren (A1–B2)",
  aeusseres: "Körperbau, Statur und äußeres Erscheinungsbild (A1–B2)",
  gefuehle: "Gefühle, Charaktereigenschaften und emotionale Zustände (A1–B2)",
  babysachen: "Babyausstattung, Kinderkleidung und Zubehör (A1–B2)",
  unisex: "Alltägliche Kleidung, Passformen und Unisex-Garderobe (A1–B2)",
  herren: "Klassische Herrenmode, Schnitte und Herrenbekleidung (A1–B2)",
  damen: "Damenmode, Kleider und vielseitige Damenbekleidung (A1–B2)",
  accessoires: "Schmuck, Handtaschen, Gürtel und modische Accessoires (A1–B2)",
  schuhe: "Schuharten, Größen, Materialien und Fußbekleidung (A1–B2)",
  pflege: "Körperpflege, Hygieneartikel und tägliche Badezimmer-Routinen (A1–B2)",
  makeup: "Kosmetik, Make-up-Produkte und Schönheitspflege (A1–B2)",

  // Chapter 2: 2-zu-hause.json
  wohnzimmer: "Wohnzimmermöbel, Gemütlichkeit und Sitzecke (A1–B2)",
  kueche: "Küchengeräte, Kochen und Essbereich (A1–B2)",
  schlafzimmer: "Bettausstattung, Kleiderschrank und erholsame Nachtruhe (A1–B2)",
  badezimmer: "Sanitäreinrichtungen, Handtücher und Körperpflege (A1–B2)",

  // Chapter 3: 3-essen-und-trinken.json
  obst_und_gemuese: "Frisches Obst, Gemüsesorten und Wochenmarkt (A1–B2)",
  fleisch_und_fisch: "Fleischarten, Meeresfrüchte und Spezialitäten (A1–B2)",
  getraenke: "Heißgetränke, Kaltgetränke, Säfte und Erfrischungen (A1–B2)",
  mahlzeiten: "Frühstück, Mittag- und Abendessen im Restaurant (A1–B2)",

  // Chapter 4: 4-unterwegs.json
  verkehrsmittel: "Öffentlicher Nahverkehr, Fahrrad und Verkehrsmittel (A1–B2)",
  flughafen_bahnhof: "Reisen mit Bahn und Flugzeug, Gleise und Gepäck (A1–B2)",
  orientierung: "Wegbeschreibungen, Straßenverkehr und Richtungsangaben (A1–B2)",

  // Chapter 5: 5-in-der-stadt.json
  gebaeude_und_orte: "Öffentliche Gebäude, Institutionen und Sehenswürdigkeiten (A1–B2)",
  einkaufen: "Geschäfte, Supermarkt, Kasse und Bezahlvorgänge (A1–B2)",

  // Chapter 6: 6-bildung-und-beruf.json
  in_der_schule: "Unterricht, Schulfächer, Prüfungen und Noten (A1–B2)",
  buero_und_arbeit: "Arbeitsplatz, Büroalltag, Kollegen und Karriere (A1–B2)",

  // Chapter 7: 7-kommunikation.json
  smartphone: "Smartphone, Apps, Internet und mobile Kommunikation (A1–B2)",

  // Chapter 8: 8-freizeit.json
  freizeitaktivitaeten: "Hobbys, Sport, Kino, Theater und Wochenendgestaltung (A1–B2)",

  // Chapter 9: 9-körper-und-gesundheit.json
  der_koerper: "Körperteile, Organe und menschliche Anatomie (A1–B2)",
  krankheiten: "Symptome, Arztpraxis, Medikamente und Genesung (A1–B2)",

  // Chapter 10: 10-notfälle.json
  notruf: "Notrufnummern, Erste Hilfe und Rettungsdienste (A1–B2)",

  // Chapter 11: 11-erde-und-natur.json
  das_wetter: "Wetterphänomene, Jahreszeiten und Wettervorhersage (A1–B2)",

  // Chapter 12: 12-zahlen-und-maße.json
  die_zeit: "Uhrzeiten, Kalender, Zeitbegriffe und Pünktlichkeit (A1–B2)",
};

const vocabDir = path.resolve("src/data/vocabulary");
const files = fs.readdirSync(vocabDir).filter((f) => f.endsWith(".json"));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(vocabDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  let changed = false;
  for (const sec of data.sections || []) {
    for (const topic of sec.topics) {
      if (topicDetailsMap[topic.id]) {
        const oldDetails = topic.details;
        topic.details = topicDetailsMap[topic.id];
        if (oldDetails !== topic.details) {
          changed = true;
          updatedCount++;
          console.log(`Updated [${file}] topic "${topic.id}": "${topic.details}"`);
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  }
}

console.log(
  `\nSuccessfully updated details for ${updatedCount} topics across all vocabulary files!`,
);
