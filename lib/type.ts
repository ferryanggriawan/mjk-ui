import type Row from "./components/grid/row/main.vue";
import type Col from "./components/grid/col/main.vue";
import type Text from "./components/typography/text/main.vue";
import type Btn from "./components/button/main.vue";

export * from "./main";

declare module "vue" {
  interface GlobalComponents {
    Text: typeof Text;
    Row: typeof Row;
    Col: typeof Col;
    Btn: typeof Btn;
  }
}
