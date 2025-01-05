import { Fonts, IconPosition, Sizes } from "./globalStyles";

export type ButtonVariant = "filled" | "outlined" | "dashed" | "text";
export type ButtonType = "submit" | "button" | "reset";
export type ButtonColor = "default" | "primary" | "secondary";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: Sizes;
  color?: ButtonColor;
  font?: Fonts;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonWithIcon extends ButtonProps {
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}
