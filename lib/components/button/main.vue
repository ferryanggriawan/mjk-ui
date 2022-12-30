<template>
  <button class="btn" :class="classMap" :style="styleMap">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>

<script setup lang="ts">
import { reactive, withDefaults, defineProps } from "vue";
import type { Colors } from "../type";
import { EnumBtnSizeType, type BtnShape, type BtnSize, type BtnVariant } from "./type";
import { mappingClass, mappingStyles } from "./option";

export interface BtnProps {
  size?: BtnSize;
  color?: Colors;
  type?: BtnVariant;
  shape?: BtnShape;
  block?: boolean | undefined;
}

const props = withDefaults(defineProps<BtnProps>(), {});

const { size } = props;

if (!(size! in EnumBtnSizeType)) {
  console.log("here", size);
}

const classes = mappingClass(props);
const classMap = reactive(classes);

const styles = mappingStyles(props);
const styleMap = reactive<any>(styles);
</script>
