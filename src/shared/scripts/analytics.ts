import { PUBLIC_GA_MEASUREMENT_ID } from "astro:env/client";

interface CustomGlobalScope {
  dataLayer?: unknown[];
}

const gaId = PUBLIC_GA_MEASUREMENT_ID;

if (gaId && typeof window !== "undefined") {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.append(script);

  const globalScope = globalThis as typeof globalThis & CustomGlobalScope;
  globalScope.dataLayer ??= [];
  const dataLayer = globalScope.dataLayer;
  const gtag = (...args: unknown[]) => {
    dataLayer.push(args);
  };

  gtag("js", new Date());
  gtag("config", gaId, { send_page_view: false });

  // Track page views on initial load and View Transitions
  document.addEventListener("astro:page-load", () => {
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: globalThis.location.href,
      page_path: globalThis.location.pathname,
    });
  });
}
