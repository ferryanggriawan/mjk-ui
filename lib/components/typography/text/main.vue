<template>
  <span class="text" :class="classMap" :style="styles">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "Text",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
import { EnumTextVariant, EnumTextWeight, type TextSize, type TextVariant, type TextWeight } from "./type";
import { mappingText } from "./option";

export interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  size?: TextSize;
}

const props = withDefaults(defineProps<TextProps>(), {
  variant: EnumTextVariant.default,
  weight: EnumTextWeight.default,
});

const classes = mappingText(props);
const classMap = reactive(classes);
const styles = reactive({
  "font-size": props.size,
});
</script>
