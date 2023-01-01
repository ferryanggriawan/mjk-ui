import type { IconProps } from "./main.vue";

export function mappingIconStyle(props: IconProps): any {
  let size = props.size;
  let fontSize = props.size;

  if (typeof props.size == "number") {
    const p = props.size * 0.12;
    fontSize = props.size - p;
  }

  if (typeof props.size == "string") {
    size = props.size.replace("px", "");
    size = parseInt(size);
    const p = size * 0.12;

    fontSize = size - p;
  }

  return {
    height: `${size}px`,
    width: `${size}px`,
    fontSize: `${fontSize}px`,
    display: "inline-block",
    lineHeight: `${size}px`,
  };
}

const IconOption = {};

export default IconOption;
