import { EnumAlign, EnumJustify } from "./type";

export function classMapping(props: any): Object {
  return {
    "justify-center": props.justify == EnumJustify.center,
    "justify-start": props.justify == EnumJustify.start,
    "justify-end": props.justify == EnumJustify.end,
    "justify-between": props.justify == EnumJustify.between,
    "justify-around": props.justify == EnumJustify.around,
    "justify-evenly": props.justify == EnumJustify.evenly,
    "align-center": props.align == EnumAlign.center,
    "align-start": props.align == EnumAlign.start,
    "align-end": props.align == EnumAlign.end,
    "no-wrap": props.noWrap,
    fluid: props.fluid,
  };
}

const RowOption = {};

export default RowOption;
