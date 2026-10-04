import * as fs from "node:fs";
import * as path from "node:path";

function getAllFiles(dir: string, exts: string[] = [".astro", ".vue", ".ts", ".tsx", ".html"]): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === "node_modules" || file === ".astro" || file === "dist" || file === ".git") continue;
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
let totalReplaced = 0;
const changedFiles: string[] = [];

for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const lines = content.split("\n");
  let fileChanged = false;
  const newLines = lines.map((line) => {
    const trimmed = line.trim();
    // Skip comments
    if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*") || trimmed.startsWith("<!--")) {
      return line;
    }
    // Skip CSS property declarations
    if (line.includes("border:") || line.includes("border-radius:") || line.includes("border-collapse:")) {
      return line;
    }
    if (tokenRegex.test(line)) {
      const count = (line.match(tokenRegex) || []).length;
      totalReplaced += count;
      fileChanged = true;
      return line.replace(tokenRegex, "border-[1.5px]");
    }
    return line;
  });

  if (fileChanged) {
    fs.writeFileSync(f, newLines.join("\n"), "utf8");
    changedFiles.push(f);
  }
}

console.log(`Successfully updated ${totalReplaced} occurrences in ${changedFiles.length} files.`);
for (const f of changedFiles) {
  console.log(`- ${f}`);
}
