<template>
  <div>
    <div class="divider" :class="{ vertical: props.vertical }"></div>
  </div>
</template>

<script setup lang="ts">
export interface DividerProps {
  vertical?: boolean;
}

const props = withDefaults(defineProps<DividerProps>(), {
  vertical: false,
});
</script>
