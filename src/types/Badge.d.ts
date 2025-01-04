import { ColorsScheme, Sizes } from "./globalStyles";

export type Position =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface BadgeProps {
  variant?: ColorsScheme;
  content: string | React.ReactNode;
  size?: Exclude<Sizes, "large">;
  position?: Position;
  isVisible?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
