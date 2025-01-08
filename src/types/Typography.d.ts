import { Colors, Fonts, FontWeights } from "./globalStyles";

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

export type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: FontWeights;
  align?: TypographyAlign;
  color?: Colors;
  font?: Fonts;
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  className?: string;
  children: React.ReactNode;
}
