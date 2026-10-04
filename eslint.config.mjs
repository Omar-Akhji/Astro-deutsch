import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import nounsanitized from "eslint-plugin-no-unsanitized";
import securityPlugin from "eslint-plugin-security";
import unicorn from "eslint-plugin-unicorn";
import eslintPluginVue from "eslint-plugin-vue";
import eslintPluginVueAccessibility from "eslint-plugin-vuejs-accessibility";
import { defineConfig } from "eslint/config";
import globals from "globals";
import vueParser from "vue-eslint-parser";

/**
 * Modern 2026 ESLint Flat Configuration
 *
 * Tailored for Astro, Vue 3.5, Tailwind CSS v4, TypeScript 6, and Bun. Enforces strict type safety,
 * CSP security, and modern web ergonomics while seamlessly delegating code style and formatting to
 * Prettier.
 */
const eslintConfig = defineConfig(
  // ─── Global Ignores ───────────────────────────────────────────────────────
  {
    name: "global-ignores",
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      "public/**",
      "coverage/**",
      ".temp/**",
      ".cache/**",
      "*.log",
      "scratch/**",
      ".gemini/**",
      ".kiro/**",
      ".agent/**",
      ".agents/**",
      "skills-catalog/**",
      "*.md",
      "*.json",
      "*.lock",
      "tsconfig.tsbuildinfo",
    ],
  },

  // ─── Recommended Flat Presets ─────────────────────────────────────────────
  ...tsPlugin.configs["flat/strict-type-checked"].map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  })),
  ...tsPlugin.configs["flat/stylistic-type-checked"].map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  })),
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  ...eslintPluginVue.configs["flat/recommended-error"],
  ...eslintPluginVueAccessibility.configs["flat/recommended"],
  {
    name: "vue-accessibility-strict-overrides",
    files: ["**/*.vue"],
    rules: {
      // Require an explicit label-to-control ID association, which is valid without nesting.
      "vuejs-accessibility/label-has-for": ["error", { required: "id" }],
      "vuejs-accessibility/no-aria-hidden-on-focusable": "error",
      "vuejs-accessibility/no-role-presentation-on-focusable": "error",
    },
  },
  unicorn.configs.recommended,
  securityPlugin.configs.recommended,
  nounsanitized.configs.recommended,

  // ─── Global Environment & Runtime Globals ─────────────────────────────────
  {
    name: "global-environment",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
        ...globals.bunBuiltin,
        ...globals.es2026,
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-nested-ternary": "error",
      "no-implicit-coercion": "error",
      "no-return-assign": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "no-void": ["error", { allowAsStatement: true }],
    },
  },

  // ─── Unicorn Modern 2026 Ergonomics ───────────────────────────────────────
  {
    name: "unicorn-overrides",
    rules: {
      // Keep project naming, module initialization, and iteration idioms flexible.
      "unicorn/filename-case": "off",
      "unicorn/name-replacements": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-for-each": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-logical-operator-over-ternary": "off",
      "unicorn/text-encoding-identifier-case": "off",
      "unicorn/consistent-boolean-name": "off",
      "unicorn/no-top-level-side-effects": "off",
      "unicorn/no-unnecessary-global-this": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/no-top-level-assignment-in-function": "off",
      "unicorn/single-line-block-comment-style": "off",
      "unicorn/no-asterisk-prefix-in-documentation-comments": "off",
    },
  },

  // ─── TypeScript Strictness (Aligned with TS 6 & verbatimModuleSyntax) ─────
  {
    name: "typescript-rules",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
    },
  },

  // ─── Vue 3.5 Modern Component Support ─────────────────────────────────────
  {
    name: "vue-rules",
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser: tsParser, extraFileExtensions: [".vue"] },
    },
    rules: {
      // Allow flexible single-word names for pages, cards, and feature blocks
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "error",
      "vue/require-default-prop": "off",
      // Keep component structure and Composition API usage consistent across SFCs.
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/no-ref-as-operand": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-required-prop-with-default": "error",
    },
  },

  {
    name: "image-processing-script-logging",
    files: ["scripts/process-logo.ts"],
    rules: {
      // This one-off asset script reports progress when run manually.
      "no-console": ["error", { allow: ["log", "info", "warn", "error"] }],
    },
  },

  // ─── Astro Modern Architecture & CSP Security ─────────────────────────────
  {
    name: "astro-rules",
    files: ["**/*.astro"],
    rules: {
      // Flexible typing for Astro props & dynamic layout components
      // Standard Astro props contract
      "unicorn/name-replacements": ["error", { allowList: { Props: true } }],
      // Astro frontmatter scripts allow top-level returns (e.g. return Astro.redirect())
      // Security & CSP boundaries
      "astro/no-set-html-directive": "error",
      "astro/no-unsafe-inline-scripts": ["error", { allowModuleScripts: true }],
      "astro/no-exports-from-components": "error",
      "astro/no-prerender-export-outside-pages": "error",
      "astro/no-set-text-directive": "warn",
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
      "astro/missing-client-only-directive-value": "error",
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
      "astro/valid-compile": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
      // Attribute ordering is delegated to Prettier to avoid competing formatters.
      "astro/sort-attributes": "off",
    },
  },

  // ─── Security Tuning ──────────────────────────────────────────────────────
  {
    name: "security-tuning",
    rules: {
      // The security plugin recommends this as a hotspot warning because it flags all computed keys.
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-regexp": "error",
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",
    },
  },
  {
    name: "bounded-pixel-buffer-access",
    files: ["scripts/process-logo.ts"],
    rules: {
      // Pixel offsets are bounded by image dimensions and only index allocated typed arrays.
      "security/detect-object-injection": "off",
    },
  },

  // ─── Structured Data (Safe Pre-Sanitized JSON-LD) ──────────────────────────
  {
    name: "jsonld-allowlist",
    files: ["src/shared/ui/JsonLd.astro", "src/layouts/Layout.astro"],
    rules: {
      "astro/no-set-html-directive": "off",
    },
  },

  // ─── Server Actions / API Routes ──────────────────────────────────────────
  {
    name: "server-api-allowlist",
    files: ["src/actions/**/*.ts", "src/pages/api/**/*.ts"],
    rules: {
    },
  },

  // ─── Prettier Compatibility (MUST be last) ────────────────────────────────
  eslintConfigPrettier,
);

export default eslintConfig;
