<template>
  <div>
    <div class="divider" :class="{ vertical: vertical }"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Divider",
};
</script>

<script setup lang="ts">
export interface DividerProps {
  vertical?: boolean;
}

const props = withDefaults(defineProps<DividerProps>(), {
  vertical: false,
});
</script>
