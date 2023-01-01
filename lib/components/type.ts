export enum EnumColors {
  blue = "blue",
  red = "red",
  green = "green",
  gray = "gray",
  grey = "grey",
  yellow = "yellow",
  orange = "orange",
  purple = "purple",
}

export enum EnumThemes {
  primary = "primary",
  secondary = "secondary",
  accent = "accent",
}

export type Colors = keyof typeof EnumColors | keyof typeof EnumThemes;
export type Themes = keyof typeof EnumThemes;
export const classPrefix = "m";

const MjkType = {
  EnumColors,
  EnumThemes,
};

export default MjkType;
