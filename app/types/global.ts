export type DropDownMenu = {
  title?: string;
  id?: string;
};

export const VariantTypes = [
  "link",
  "solid",
  "outline",
  "soft",
  "subtle",
  "ghost",
  undefined,
] as const;

export type Variant = (typeof VariantTypes)[number];

export const ColorsTypes = [
  "neutral",
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  undefined,
] as const;

export type Colors = (typeof ColorsTypes)[number];

export const VariantSelectedTypes = [
  "outline",
  "soft",
  "subtle",
  "ghost",
  "none",
  undefined,
] as const;

export type VariantSelected = (typeof VariantSelectedTypes)[number];
