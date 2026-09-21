import { defineConfig } from "astro/config";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://deutsch-lernen.com",
  integrations: [
    vue(),
    sitemap({
      filter: (page) =>
        !page.includes("/404") &&
        !page.endsWith("/login/") &&
        !page.endsWith("/register/"),
      changefreq: ChangeFreqEnum.WEEKLY,
      lastmod: new Date(),
      priority: 0.8,
      serialize(item) {
        if (item.url === "https://deutsch-lernen.com/") {
          item.priority = 1;
          item.changefreq = ChangeFreqEnum.DAILY;
        } else if (
          item.url.includes("/vokabeln") ||
          item.url.includes("/grammatik") ||
          item.url.includes("/pruefung")
        ) {
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
