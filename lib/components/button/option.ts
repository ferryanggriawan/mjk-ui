import type { BtnProps } from "./main.vue";
import { EnumBtnShape, EnumBtnSizeType, EnumBtnVariant } from "./type";

export function mappingClass(props: BtnProps): Object {
  return {
    // Size
    "btn-small": props.size == EnumBtnSizeType.small,
    "btn-normal": props.size == EnumBtnSizeType.normal,
    "btn-large": props.size == EnumBtnSizeType.large,

    // Variant
    "btn-fill": props.type == EnumBtnVariant.fill,
    "btn-outline": props.type == EnumBtnVariant.outline,
    "btn-text": props.type == EnumBtnVariant.text,
    "btn-underline": props.type == EnumBtnVariant.underline,

    // Shape
    "btn-square": props.shape == EnumBtnShape.square,
    "btn-round": props.shape == EnumBtnShape.round,
  };
}

export function mappingStyles(props: BtnProps): Object | undefined {
  return undefined;
}

const ButtonOption = {
  mappingClass,
};

export default ButtonOption;
