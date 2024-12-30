export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "overline";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "default";

export type TypographyFont = "openSans" | "roboto" | "poppins";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  font?: TypographyFont;
  className?: string;
  children: React.ReactNode;
}
