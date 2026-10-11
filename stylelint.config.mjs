/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-standard-vue",
  ],
  rules: {
    // ─── Tailwind CSS v4 Integration ──────────────────────────────────────────
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
    // Modern CSS module import notation (e.g. @import "tailwindcss")
    "import-notation": "string",
    // Preserve font family names capitalization (e.g. Courier New)
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
    // Tailwind utility and arbitrary syntax in class selectors
    "selector-class-pattern": null,
    // Allow component-level scoped specificity variations
    "no-descending-specificity": null,

    // ─── Strict Code Quality & Safety (Mandatory Directives) ──────────────────
    // Strictly forbid !important per project guidelines
    "declaration-no-important": true,
    "keyframe-declaration-no-important": true,

    // Disallow duplicate selectors, imports, properties and custom properties
    "no-duplicate-selectors": true,
    "no-duplicate-at-import-rules": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "keyframe-block-no-duplicate-selectors": true,

    // Disallow empty blocks, empty comments and empty sources
    "block-no-empty": true,
    "comment-no-empty": true,
    "no-empty-source": true,
    "block-no-redundant-nested-style-rules": true,
    "declaration-block-single-line-max-declarations": 1,

    // Strict syntax correctness & error prevention
    "color-no-invalid-hex": true,
    "function-calc-no-unspaced-operator": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "property-no-deprecated": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "no-unknown-animations": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-url-no-scheme-relative": true,
    "media-query-no-invalid": true,
    "named-grid-areas-no-invalid": true,
    "annotation-no-unknown": true,
    "at-rule-no-deprecated": true,
    "selector-anb-no-unmatchable": true,
    "custom-property-no-missing-var-function": true,
    "declaration-property-value-keyword-no-deprecated": true,
    "declaration-property-value-no-unknown": true,

    // Pseudo-classes and pseudo-elements (support Vue & Astro scoped scoping)
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "deep", "slotted", "is", "where", "has"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: [
          "v-deep",
          "v-global",
          "v-slotted",
          "backdrop",
          "-webkit-scrollbar",
          "-webkit-scrollbar-track",
          "-webkit-scrollbar-thumb",
          "-webkit-scrollbar-button",
        ],
      },
    ],

    // ─── Strict Architectural & Formatting Cleanliness ────────────────────────
    // Component architecture: forbid ID selectors in stylesheets (anti-pattern)
    "selector-max-id": 0,
    "selector-max-universal": 1,
    "selector-pseudo-element-colon-notation": "double",
    "selector-not-notation": "complex",
    "selector-type-case": "lower",
    "selector-attribute-quotes": "always",
    "font-family-name-quotes": "always-where-recommended",
    "function-name-case": "lower",
    "color-named": ["never", { ignore: ["inside-function"] }],
    "color-hex-length": "short",
    "length-zero-no-unit": true,
    "shorthand-property-no-redundant-values": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "media-feature-name-no-unknown": true,
    "media-feature-range-notation": "context",
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "number-max-precision": 4,
    "comment-whitespace-inside": "always",
    "max-nesting-depth": [
      4,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
      },
    ],
    "selector-max-compound-selectors": 4,

    // Vendor prefix cleanliness (prefer standard modern CSS & build-tool autowrapping)
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["appearance", "-webkit-appearance", "-webkit-scrollbar"],
      },
    ],
    "value-no-vendor-prefix": true,
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
