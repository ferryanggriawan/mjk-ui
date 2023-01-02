import type Component from "./main.vue";
declare module "vue" {
  interface GlobalComponents {
    MDivider: typeof Component;
  }
}

const DividerType = {};

export default DividerType;
