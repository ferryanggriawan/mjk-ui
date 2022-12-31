<script setup lang="ts">
import TextSection from "./section/Text.vue";
import ButtonSection from "./section/Button.vue";
</script>

<template>
  <!-- Button -->
  <ButtonSection />

  <Divider />

  <section>
    <Row>
      <Col class="text-center">asdasd</Col>
      <Divider vertical />
      <Col cols="10" class="text-center">asdasd</Col>
      <Divider vertical />
      <Col>asdasd</Col>
    </Row>
  </section>

  <div>
    <div class="divider"></div>
  </div>

  <!-- Text & Heading -->
  <TextSection />
</template>
