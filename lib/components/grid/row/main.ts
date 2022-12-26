import type { Properties } from "@/type";
import { defineComponent } from "vue";
import { EnumAlign, EnumJustify, type Align, type Justify } from "./type";

interface RowProps {
  justify?: Justify;
  align?: Align;
  fluid?: boolean;
  noWrap?: boolean;
}

const defaultProps = <RowProps>{
  justify: EnumJustify.default,
  align: EnumAlign.default,
  fluid: false,
  noWrap: false,
};

function classMapping(props: any): Object {
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

export default defineComponent({
  props: <Properties>defaultProps,

  data() {
    return {};
  },

  computed: {
    classMap() {
      return classMapping(this.$props);
    },
  },
});
