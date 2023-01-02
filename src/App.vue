<script setup lang="ts">
import TextSection from "./section/Text.vue";
import ButtonSection from "./section/Button.vue";

function test() {}
</script>

<template>
  <section>
    <MRow>
      <MCol lg="4" v-click-outside="test">
        <div class="m-input">
          <div class="m-input-wrapper">
            <div class="m-input-content">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </MCol>
      <MCol lg="4">
        <div class="m-input">
          <div class="m-input-wrapper">
            <div class="m-input-content">
              <input type="text" placeholder="Search..." />
            </div>
          </div></div
      ></MCol>
    </MRow>
  </section>

  <!-- Button -->
  <ButtonSection />

  <!-- Text & Heading -->
  <TextSection />
</template>
