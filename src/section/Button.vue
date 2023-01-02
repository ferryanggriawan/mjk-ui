<template>
  <section>
    <MRow>
      <MCol cols="12">
        <div class="pb-3">Small</div>
        <MBtn size="small" color="red">
          <MIcon icon="fa-home"></MIcon>
          Small
        </MBtn>
        <MBtn class="mx-3" size="small" type="fill">Small</MBtn>
        <MBtn class="mx-3" size="small" type="outline">Small</MBtn>
        <MBtn class="mx-3" size="small" type="text">Small</MBtn>
        <MBtn class="mx-3" size="small" type="underline">Small</MBtn>
      </MCol>
      <MCol cols="12">
        <div class="pb-3">Normal | Default</div>
        <MBtn class="mx-3" type="fill">Normal</MBtn>
        <MBtn class="mx-3" type="outline" color="red"> <MIcon icon="fa-home"></MIcon> Normal</MBtn>
        <MBtn class="mx-3" type="text">Normal</MBtn>
        <MBtn class="mx-3" type="underline">Normal</MBtn>
      </MCol>
      <MCol cols="12">
        <div class="pb-3">Large</div>
        <MBtn class="mx-3" size="large">Large</MBtn>
        <MBtn class="mx-3" size="large" type="outline">Large</MBtn>
        <MBtn class="mx-3" size="large" type="text">Large</MBtn>
        <MBtn class="mx-3" size="large" type="underline">Large</MBtn>
      </MCol>
      <MCol cols="12">
        <div class="pb-3">Block</div>
        <MBtn class="mb-5" block size="small">Small</MBtn>
        <MBtn class="mb-5" block size="normal">Default</MBtn>
        <MBtn class="mb-5" block size="large">Large</MBtn>
      </MCol>
    </MRow>
  </section>
</template>

<script setup lang="ts"></script>
