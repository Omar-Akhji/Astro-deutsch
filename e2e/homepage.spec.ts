import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads successfully and displays hero title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Elite Regewelt/i);
    const heroTitle = page.getByRole("heading", {
      name: /Meistere die deutsche Sprache/i,
      level: 1,
    });
    await expect(heroTitle).toBeVisible();
    await expect(page.getByRole("link", { name: /Vokabeln/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Grammatik/i }).first()).toBeVisible();
  });
});
