import { PUBLIC_GA_MEASUREMENT_ID } from "astro:env/client";

declare global {
  var dataLayer: unknown[] | undefined;
}

const gaId = PUBLIC_GA_MEASUREMENT_ID;

if (gaId && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.append(script);

  // Google Tag Manager standard protocol requires mounting dataLayer onto globalThis
  // eslint-disable-next-line unicorn/no-global-object-property-assignment
  globalThis.dataLayer ??= [];
  const dataLayer = globalThis.dataLayer;
  const gtag = (...args: unknown[]): void => {
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
