export enum EnumTextVariant {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  body = "body",
  small = "small",
  super = "super",
  default = "",
}

export enum EnumTextWeight {
  normal = "normal",
  medium = "medium",
  bold = "bold",
  light = "light",
  default = "",
}

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h4" | "h5" | "h6" | "body" | "small" | "super" | "" | string;
export type TextWeight = "normal" | "bold" | "medium" | "light" | "" | string | number;
export type TextSize = number | string | undefined;

const TextType = {};

export default TextType;
