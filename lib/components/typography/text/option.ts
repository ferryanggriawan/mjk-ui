import type { TextProps } from "./main.vue";
import { EnumTextVariant, EnumTextWeight } from "./type";

export function mappingText(props: TextProps): Object {
  return {
    "text-h1": props.variant == EnumTextVariant.h1,
    "text-h2": props.variant == EnumTextVariant.h2,
    "text-h3": props.variant == EnumTextVariant.h3,
    "text-h4": props.variant == EnumTextVariant.h4,
    "text-h5": props.variant == EnumTextVariant.h5,
    "text-h6": props.variant == EnumTextVariant.h6,
    "text-body": props.variant == EnumTextVariant.body,
    "text-small": props.variant == EnumTextVariant.small,
    "text-super": props.variant == EnumTextVariant.super,
    normal: props.weight == EnumTextWeight.normal,
    bold: props.weight == EnumTextWeight.bold,
    light: props.weight == EnumTextWeight.light,
    medium: props.weight == EnumTextWeight.medium,
  };
}

const TextOption = {
  mappingText,
};

export default TextOption;
