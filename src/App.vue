<script setup lang="ts">
import TextSection from "./section/Text.vue";
import ButtonSection from "./section/Button.vue";

function test() {}
</script>

<template>
  <section>
    <Row>
      <Col lg="4" v-click-outside="test">
        <div class="m-input">
          <div class="m-input-wrapper">
            <div class="m-input-content">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </Col>
      <Col lg="4">
        <div class="m-input">
          <div class="m-input-wrapper">
            <div class="m-input-content">
              <input type="text" placeholder="Search..." />
            </div>
          </div></div
      ></Col>
    </Row>
  </section>

  <!-- Button -->
  <ButtonSection />

  <!-- Text & Heading -->
  <TextSection />
</template>
