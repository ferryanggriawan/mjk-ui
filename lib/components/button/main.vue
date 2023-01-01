<template>
  <button class="btn" :class="[classMap, colorMap]" :style="styleMap">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>

<script setup lang="ts">
import { reactive, withDefaults } from "vue";
import type { Colors } from "../type";
import type { BtnShape, BtnSize, BtnVariant } from "./type";
import { mappingBtnColor, mappingClass, mappingStyles } from "./option";

export interface BtnProps {
  size?: BtnSize;
  color?: Colors;
  type?: BtnVariant;
  shape?: BtnShape;
  block?: boolean;
}

const props = withDefaults(defineProps<BtnProps>(), {
  size: "",
});

const classes = mappingClass(props);
const classMap = reactive(classes);

const styles = mappingStyles(props);
const styleMap = reactive<any>(styles);

const colors = mappingBtnColor(props);
const colorMap = reactive<any>(colors);
</script>
