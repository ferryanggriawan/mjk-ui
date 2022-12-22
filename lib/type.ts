import type Text from "./components/Text.vue";
export * from "./main";

declare module "vue" {
  interface GlobalComponents {
    Text: typeof Text;
  }
}
