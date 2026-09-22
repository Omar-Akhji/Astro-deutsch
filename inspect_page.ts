async function main() {
  const res = await fetch("http://localhost:4321/quiz/b1/lesen/1");
  const text = await res.text();
  const start = text.indexOf('id="page-content"');
  console.log("PAGE-CONTENT HTML:");
  console.log(text.slice(start, start + 2500));
}
main();
