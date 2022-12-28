<template>
  <section>
    <Row>
      <Col cols="5">
        <div>
          <Text variant="h2" weight="bold">Heading</Text>
        </div>
        <div>
          <Text>
            A set of harmonous typography scale with font weight variations. These text style perfectly fit for 4px grid and go well with
            each other.
          </Text>
        </div>
      </Col>
    </Row>

    <Row v-for="text in headings">
      <Col cols="12">
        <div>
          <Text variant="h6" weight="bold">{{ text.title }}</Text>
        </div>
        <Text>Font size: {{ text.size }}px | Line height: {{ text.height }}px | Spacing -2%</Text>
      </Col>
      <Col cols="4">
        <Text :variant="text.variant">{{ text.title }}</Text>
      </Col>
      <Col cols="4">
        <Text :variant="text.variant">{{ text.title }}</Text>
      </Col>
      <Col cols="4">
        <Text :variant="text.variant">{{ text.title }}</Text>
      </Col>
    </Row>
  </section>
</template>

<script lang="ts">
export default {
  data: () => ({
    headings: [
      {
        title: "Heading H1",
        variant: "h1",
        size: "60",
        height: "72",
      },
      {
        title: "Heading H2",
        variant: "h2",
        size: "48",
        height: "56",
      },
      {
        title: "Heading H3",
        variant: "h3",
        size: "32",
        height: "42",
      },
      {
        title: "Heading H4",
        variant: "h4",
        size: "24",
        height: "32",
      },
      {
        title: "Heading H5",
        variant: "h5",
        size: "18",
        height: "26",
      },
      {
        title: "Heading H6",
        variant: "h6",
        size: "16",
        height: "24",
      },
      {
        title: "Text Body",
        variant: "body",
        size: "14",
        height: "22",
      },
      {
        title: "Text Small",
        variant: "small",
        size: "12",
        height: "14",
      },
      {
        title: "Text Super",
        variant: "super",
        size: "10",
        height: "12",
      },
    ],
  }),
};
</script>
