import type { App } from "vue";

import "./js.import";
import "./style.import";

import Text from "./components/typography/text/main.vue";
import Row from "./components/grid/row/main.vue";
import Col from "./components/grid/col/main.vue";
import Btn from "./components/button/main.vue";
import Divider from "./components/divider/main.vue";
import Icon from "./components/icon/main.vue";

export const MjkUi = (app: App) => {
  app.provide("icon", "fa");

  app.component("Text", Text);
  app.component("Row", Row);
  app.component("Col", Col);
  app.component("Btn", Btn);
  app.component("Divider", Divider);
  app.component("Icon", Icon);
};
