import type Component from "./main.vue";
declare module "vue" {
  interface GlobalComponents {
    MRow: typeof Component;
  }
}

export enum EnumJustify {
  center = "center",
  start = "start",
  end = "end",
  between = "between",
  around = "around",
  evenly = "evenly",
  default = "",
}

export enum EnumAlign {
  center = "center",
  start = "start",
  end = "end",
  default = "",
}

export type Justify = "center" | "start" | "end" | "between" | "around" | "evenly" | "";
export type Align = "center" | "start" | "end" | "";

const RowType = {
  EnumAlign,
  EnumJustify,
};

export default RowType;
