/** Footer Interactive Enhancements Back-to-top smooth scrolling with Astro page-transition support. */
function initBackToTop() {
  const btn = document.querySelector("#footer-back-to-top");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (typeof document !== "undefined") {
  initBackToTop();
  document.addEventListener("astro:page-load", initBackToTop);
}
