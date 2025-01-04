import { LineStyle } from "./globalStyles";

export type AvatarSize = "small" | "medium" | "large";
export type AvatarShape = "circle" | "square";

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: string;
  border?: LineStyle;
  shape?: AvatarShape;
  className?: string;
  onClick?: () => void;
}
