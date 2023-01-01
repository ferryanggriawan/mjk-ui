<template>
  <section>
    <Row>
      <Col cols="12">
        <div class="pb-3">Small</div>
        <Btn class="mx-3" size="small" color="red">
          <Icon icon="fa-home"></Icon>
          Small
        </Btn>
        <Btn class="mx-3" size="small" type="fill">Small</Btn>
        <Btn class="mx-3" size="small" type="outline">Small</Btn>
        <Btn class="mx-3" size="small" type="text">Small</Btn>
        <Btn class="mx-3" size="small" type="underline">Small</Btn>
      </Col>
      <Col cols="12">
        <div class="pb-3">Normal | Default</div>
        <Btn class="mx-3" type="fill">Normal</Btn>
        <Btn class="mx-3" type="outline" color="red"> <Icon icon="fa-home"></Icon> Normal</Btn>
        <Btn class="mx-3" type="text">Normal</Btn>
        <Btn class="mx-3" type="underline">Normal</Btn>
      </Col>
      <Col cols="12">
        <div class="pb-3">Large</div>
        <Btn class="mx-3" size="large">Large</Btn>
        <Btn class="mx-3" size="large" type="outline">Large</Btn>
        <Btn class="mx-3" size="large" type="text">Large</Btn>
        <Btn class="mx-3" size="large" type="underline">Large</Btn>
      </Col>
      <Col cols="12">
        <div class="pb-3">Block</div>
        <Btn class="mb-5" block size="small">Small</Btn>
        <Btn class="mb-5" block size="normal">Default</Btn>
        <Btn class="mb-5" block size="large">Large</Btn>
      </Col>
    </Row>
  </section>
</template>

<script setup lang="ts"></script>
