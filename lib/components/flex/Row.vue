<script setup lang="ts">
import { reactive } from "vue";
import { type Align, type Justify, EnumJustify, EnumAlign } from "./enum";

type RowProp = { justify?: Justify; align?: Align; fluid?: boolean; noWrap?: boolean };
const props = withDefaults(defineProps<RowProp>(), {
  justify: EnumJustify.default,
  align: EnumAlign.default,
  fluid: false,
  noWrap: false,
});

const classObject = reactive({
  "justify-center": props.justify == EnumJustify.center,
  "justify-start": props.justify == EnumJustify.start,
  "justify-end": props.justify == EnumJustify.end,
  "justify-between": props.justify == EnumJustify.between,
  "justify-around": props.justify == EnumJustify.around,
  "justify-evenly": props.justify == EnumJustify.evenly,
  "align-center": props.align == EnumAlign.center,
  "align-start": props.align == EnumAlign.start,
  "align-end": props.align == EnumAlign.end,
  fluid: props.fluid,
  "no-wrap": props.noWrap,
});
</script>

<template>
  <div class="row" :class="classObject">
    <slot />
  </div>
</template>
