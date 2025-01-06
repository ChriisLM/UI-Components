import { LineStyle, Spacing, TextPosition } from "./globalStyles";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: LineStyle;
  thickness?: number;
  spacing?: Exclude<Spacing, "none">;
  className?: string;
}

export interface DividerWithText extends DividerProps {
  text?: string;
  textPosition?: TextPosition;
}
