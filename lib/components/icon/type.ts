import type Component from "./main.vue";
declare module "vue" {
  interface GlobalComponents {
    MIcon: typeof Component;
  }
}

const IconType = {};

export default IconType;
