export enum EnumBtnSizeType {
  small = "small",
  normal = "normal",
  large = "large",
  "" = "",
}

export enum EnumBtnVariant {
  fill = "fill",
  outline = "outline",
  text = "text",
  underline = "underline",
  "" = "",
}

export enum EnumBtnShape {
  square = "square",
  round = "round",
  "" = "",
}

export type BtnSize = keyof typeof EnumBtnSizeType | number | string | undefined | null;
export type BtnShape = keyof typeof EnumBtnShape | undefined | null;
export type BtnVariant = keyof typeof EnumBtnVariant | undefined | null;

const ButtonType = {};

export default ButtonType;
