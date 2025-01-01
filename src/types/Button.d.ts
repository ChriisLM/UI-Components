import { Fonts } from "./globalStyles";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'success';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  font?: Fonts
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
