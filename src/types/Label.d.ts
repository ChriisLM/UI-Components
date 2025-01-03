import { Colors, FontSizes } from "./globalStyles";

export interface LabelProps {
  text: string;
  htmlFor?: string;
  size?: FontSizes;
  color?: Colors;
  customColor?: string;
  className?: string;
}