import type { App } from "vue";

import ComponentsImport from "./components.import";
import MjkDirective from "./directives/directive";

import "./js.import";
import "./style.import";

export const MjkUi = (app: App) => {
  app.provide("icon", "fa");

  MjkDirective.register(app);
  ComponentsImport.register(app);
};
