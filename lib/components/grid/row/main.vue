<template>
  <div class="m-row" :class="classMap">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Row",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import { classMapping } from "./option";
import { EnumAlign, EnumJustify, type Align, type Justify } from "./type";

export interface RowProps {
  justify?: Justify;
  align?: Align;
  fluid?: boolean;
  noWrap?: boolean;
}

const props = withDefaults(defineProps<RowProps>(), {
  align: EnumAlign.default,
  justify: EnumJustify.default,
  fluid: false,
  noWrap: false,
});

const reactiveClass = classMapping(props);

const classMap = reactive(reactiveClass);
</script>
