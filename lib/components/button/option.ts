import { EnumColors, EnumThemes } from "../type";
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

    "btn-block": props.block,
  };
}

export function mappingBtnColor(props: BtnProps): Object {
  const { color } = props;
  const BtnColors = {
    ...EnumColors,
    ...EnumThemes,
  };

  if (color! in BtnColors) {
    const key = `btn-${color}`;
    return {
      [key]: true,
    };
  }

  return {};
}

export function mappingStyles(props: BtnProps): Object {
  if (props.size != "" && !(props.size! in EnumBtnSizeType)) {
    if (typeof props.size == "number") {
      return {
        height: `${props.size}px`,
        padding: "0 16px",
      };
    }

    return {
      height: props.size,
      padding: "0 16px",
    };
  }

  return {};
}

const ButtonOption = {
  mappingClass,
};

export default ButtonOption;
