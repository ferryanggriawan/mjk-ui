<template>
  <i class="m-icon" :class="[main, props.icon, color]" :style="style"></i>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import type { Colors } from "../type";
import { mappingIconColor, mappingIconStyle } from "./option";

export interface IconProps {
  icon: string;
  size?: number | string;
  color?: Colors;
}

const main = inject("icon");
const props = withDefaults(defineProps<IconProps>(), {});

const styles = mappingIconStyle(props);
const style = reactive(styles);

const colors = mappingIconColor(props);
const color = reactive(colors);
</script>
