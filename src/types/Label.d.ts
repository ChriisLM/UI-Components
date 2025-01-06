import { FontSizes, FontWeights } from "./globalStyles";

export interface LabelProps {
  htmlFor?: string;
  size?: FontSizes;
  weight?: FontWeights;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
