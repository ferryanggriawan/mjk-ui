import type Row from "./components/flex/Row.vue";
import type Text from "./components/Text.vue";

export * from "./main";

declare module "vue" {
  interface GlobalComponents {
    Text: typeof Text;
    Row: typeof Row;
  }
}
