/// <reference types="astro/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";
  const defaultExport: AstroComponentFactory;
  export default defaultExport;
}
