import type { App } from "vue";
import Text from "./components/Text.vue";

export const ModulName = (app: App) => {
  app.component("Text", Text);
};
