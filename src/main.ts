import { createApp } from "vue";
import App from "./App.vue";
import { MjkUi } from "../lib/main";

const app = createApp(App);

app.use(MjkUi);

app.mount("#app");
