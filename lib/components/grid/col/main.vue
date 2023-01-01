<template>
  <div class="m-col" :class="classMap">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Col",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import ColOption from "./option";
import ColType, { type ColsSize } from "./type";

export interface ColProps {
  cols?: ColsSize;
  sm?: ColsSize;
  md?: ColsSize;
  lg?: ColsSize;
}

const props = withDefaults(defineProps<ColProps>(), {
  cols: ColType.EnumColsSize.default,
});

const classes = ColOption.mappingClass(props);
const classMap = reactive(classes);
</script>
