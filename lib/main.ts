import type { App } from "vue";
import Text from "./components/Text.vue";
import "./styles/main.scss";

export const MjkUi = (app: App) => {
  app.component("Text", Text);
};
