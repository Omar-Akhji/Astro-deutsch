import fs from "fs";
import path from "path";

const SLUG_MAP: Record<number, string> = {
  1: "menschen",
  2: "zu-hause",
  3: "essen-und-trinken",
  4: "unterwegs",
  5: "in-der-stadt",
  6: "bildung-und-beruf",
  7: "kommunikation",
  8: "freizeit",
  9: "koerper-und-gesundheit",
  10: "notfaelle",
  11: "erde-und-natur",
  12: "zahlen-und-masse",
};

const vocabDir = path.resolve("src/data/vocabulary");
const files = fs.readdirSync(vocabDir).filter(f => f.endsWith(".json"));

for (const file of files) {
  const filePath = path.join(vocabDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (data.id && SLUG_MAP[data.id]) {
    data.slug = SLUG_MAP[data.id];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Added slug "${data.slug}" to ${file}`);
  }
}
