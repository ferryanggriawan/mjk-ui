import type { App } from "vue";

import "./styles/main.scss";

import Text from "./components/Text.vue";
import Row from "./components/grid/row/main.vue";

export const MjkUi = (app: App) => {
  app.component("Text", Text);
  app.component("Row", Row);
};
