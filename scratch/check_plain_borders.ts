import * as fs from "node:fs";
import * as path from "node:path";

function getAllFiles(
  dir: string,
  exts: string[] = [".astro", ".vue", ".ts", ".tsx", ".html"],
): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === "node_modules" || file === ".astro" || file === "dist" || file === ".git")
      continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.some((ext) => file.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllFiles("./src");
const tokenRegex = /(?<=[\s"'`])border(?=[\s"'`])/g;
const matches: { file: string; line: number; content: string }[] = [];

for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (
      trimmed.startsWith("//")
      || trimmed.startsWith("/*")
      || trimmed.startsWith("*")
      || trimmed.startsWith("<!--")
    )
      return;
    if (
      line.includes("border:")
      || line.includes("border-collapse:")
      || line.includes("border-radius:")
    )
      return;
    if (tokenRegex.test(line)) {
      matches.push({ file: f, line: idx + 1, content: line.trim() });
    }
  });
}

console.log(`Plain border matches: ${matches.length}`);
for (const m of matches) {
  console.log(`${m.file}:${m.line} -> ${m.content}`);
}
