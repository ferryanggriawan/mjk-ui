import type { ColProps } from "./main.vue";
import ColType from "./type";

function mappingClass(props: ColProps): Object {
  const breakpoint: string[] = ["sm", "md", "lg", ""];
  const obj: Object = {};

  breakpoint.forEach((br: string) => {
    for (let e in ColType.EnumColsSize) {
      const val = ColType.EnumColsSize[e];

      if (typeof val == "number") {
        const key: string = getKey(props, br, val);
        const propsVal = getPropsVal(props, br);
        const n_obj: Object = {
          [key]: propsVal == val,
        };
        Object.assign(obj, n_obj);
      }
    }
  });

  for (let e in ColType.EnumColsSize) {
    const val = ColType.EnumColsSize[e];

    if (typeof val == "number") {
      const key: string = `col-${val}`;
      const n_obj: Object = {
        [key]: props.cols == val,
      };
      Object.assign(obj, n_obj);
    }
  }

  return obj;
}

const ColOption = { mappingClass };

export default ColOption;

function getKey(props: ColProps, br: string, colsize: number) {
  if (br != "") {
    return `col-${br}-${colsize}`;
  }

  return `col-${colsize}`;
}

function getPropsVal(props: ColProps, br: string) {
  if (br == "sm") {
    return props.sm;
  }

  if (br == "md") {
    return props.md;
  }

  if (br == "lg") {
    return props.lg;
  }

  return props.cols;
}
