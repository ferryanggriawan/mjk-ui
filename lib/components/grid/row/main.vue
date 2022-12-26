<template>
  <div class="row" :class="classMap">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { classMapping } from "./row.main";
import { EnumAlign, EnumJustify, type Align, type Justify } from "./row.type";

interface RowProps {
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
