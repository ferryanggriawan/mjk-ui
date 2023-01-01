<script setup lang="ts">
import TextSection from "./section/Text.vue";
import ButtonSection from "./section/Button.vue";
</script>

<template>
  <section>
    <div class="m-input">
      <div></div>
      <div>
        <input type="text" />
      </div>
      <div></div>
    </div>
  </section>

  <!-- Button -->
  <ButtonSection />

  <!-- Text & Heading -->
  <TextSection />
</template>
