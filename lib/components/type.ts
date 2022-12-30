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

export type Colors = typeof EnumColors | typeof EnumThemes;
export type Themes = typeof EnumThemes;

const MjkType = {
  EnumColors,
  EnumThemes,
};

export default MjkType;
