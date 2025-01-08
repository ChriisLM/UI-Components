export interface TooltipProps {
  content?: string;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click" | "focus";
  delay?: number;
  maxWidth?: number;
  disabled?: boolean;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}
