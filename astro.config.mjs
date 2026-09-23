import { defineConfig } from "astro/config";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://elite-regewelt.com",
  trailingSlash: "always",
  integrations: [
    vue(),
    sitemap({
      filter: (page) =>
        !page.includes("/404") && !page.endsWith("/login/") && !page.endsWith("/register/"),
      changefreq: ChangeFreqEnum.WEEKLY,
      lastmod: new Date(),
      priority: 0.8,
      serialize(item) {
        const CORE_HUBS = [
          "https://elite-regewelt.com/vokabeln/",
          "https://elite-regewelt.com/grammatik/",
          "https://elite-regewelt.com/pruefung/",
          "https://elite-regewelt.com/themen/",
          "https://elite-regewelt.com/quiz/",
        ];
        if (item.url === "https://elite-regewelt.com/") {
          item.priority = 1;
          item.changefreq = ChangeFreqEnum.DAILY;
        } else if (CORE_HUBS.includes(item.url)) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (item.url.includes("/quiz/")) {
          item.priority = 0.7;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        }
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
