import type { App } from "vue";

import "./styles/main.scss";

import Text from "./components/typography/text/main.vue";
import Row from "./components/grid/row/main.vue";
import Col from "./components/grid/col/main.vue";
import Btn from "./components/button/main.vue";

export const MjkUi = (app: App) => {
  app.component("Text", Text);
  app.component("Row", Row);
  app.component("Col", Col);
  app.component("Btn", Btn);
};
