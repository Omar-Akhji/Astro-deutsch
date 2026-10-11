/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-standard-vue",
  ],
  rules: {
    // Tailwind CSS v4 at-rules
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "config",
          "theme",
          "utility",
          "variant",
          "custom-variant",
          "source",
          "plugin",
          "reference",
        ],
      },
    ],
    // Tailwind @apply allows arbitrary utility class lists in preludes
    "at-rule-prelude-no-invalid": null,
    // Tailwind v4 @utility block nesting support
    "nesting-selector-no-missing-scoping-root": null,
    // CSS module import notation (e.g. @import "tailwindcss")
    "import-notation": "string",
    // Preserve font family names capitalization (e.g. Courier)
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["font-family", "/^--font/"],
      },
    ],
    // Flexible alpha values for modern oklch gamut colors
    "alpha-value-notation": null,
    // Allow compact custom property declarations and inline styles
    "custom-property-empty-line-before": null,
    "comment-empty-line-before": null,
    // Project styling directive: strictly avoid !important
    "declaration-no-important": true,
    "keyframe-declaration-no-important": true,
    // Tailwind utility and arbitrary syntax in class selectors
    "selector-class-pattern": null,
    // Allow component-level scoped specificity variations
    "no-descending-specificity": null,
  },
  ignoreFiles: [
    "dist/**",
    ".astro/**",
    "node_modules/**",
    "coverage/**",
    "scratch/**",
    ".gemini/**",
    ".agents/**",
  ],
};
