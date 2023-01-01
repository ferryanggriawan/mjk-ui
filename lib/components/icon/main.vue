<template>
  <i class="m-icon" :class="[main, props.icon]" :style="style"></i>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import { mappingIconStyle } from "./option";

export interface IconProps {
  icon?: string;
  size?: number | string;
}

const main = inject("icon");
const props = withDefaults(defineProps<IconProps>(), {});

const styles = mappingIconStyle(props);
const style = reactive(styles);
</script>
