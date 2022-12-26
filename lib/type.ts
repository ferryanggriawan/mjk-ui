import type { ComponentOptionsWithObjectProps } from "vue";
import type Row from "./components/grid/row/main.vue";
import type Text from "./components/Text.vue";

export * from "./main";

export type Properties = ComponentOptionsWithObjectProps<Readonly<any>>;

declare module "vue" {
  interface GlobalComponents {
    Text: typeof Text;
    Row: typeof Row;
  }
}
