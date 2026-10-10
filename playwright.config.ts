import { defineConfig, devices } from "@playwright/test";
import process from "node:process";

const isCI = Boolean(process.env["CI"]);

/** Playwright configuration for Astro & Bun. See https://playwright.dev/docs/test-configuration. */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  ...(isCI && { workers: 1 }),
  reporter: "html",
  use: { baseURL: "http://localhost:4321", trace: "on-first-retry" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "bun run dev",
    url: "http://localhost:4321",
    reuseExistingServer: !isCI,
    timeout: 120 * 1000,
  },
});
