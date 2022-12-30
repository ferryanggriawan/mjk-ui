<script setup lang="ts">
import TextSection from "./section/Text.vue";
</script>

<template>
  <!-- Button -->
  <section>
    <Row>
      <Col cols="12">
        <div>Small</div>
        <Btn size="small">Small</Btn>
        <Btn size="small" type="fill">Small</Btn>
        <Btn size="small" type="outline">Small</Btn>
        <Btn size="small" type="text">Small</Btn>
        <Btn size="small" type="underline">Small</Btn>
      </Col>
      <Col cols="12">
        <div>Normal | Default</div>
        <Btn type="fill">Normal</Btn>
        <Btn type="outline">Normal</Btn>
        <Btn type="text">Normal</Btn>
        <Btn type="underline">Normal</Btn>
      </Col>
      <Col cols="12">
        <div>Large</div>
        <Btn size="large">Large</Btn>
        <Btn size="large" type="outline">Large</Btn>
        <Btn size="large" type="text">Large</Btn>
        <Btn size="large" type="underline">Large</Btn>
      </Col>
      <Col cols="12">
        <div>Block</div>
        <Btn block size="small">Large</Btn>
        <Btn block size="normal">Large</Btn>
        <Btn block size="large">Large</Btn>
      </Col>
    </Row>
  </section>
  <!-- Text & Heading -->
  <TextSection />
</template>
