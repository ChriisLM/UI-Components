import { useRef, useState } from "react";
import { TooltipProps } from "../../../types/Tooltip";
import "./Tooltip.css";

export function Tooltip({
  content,
  trigger = "hover",
  position = "top",
  delay = 200,
  maxWidth = 200,
  disabled = false,
  arrow = true,
  className = "",
  children,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (disabled) return;
    timeoutRef.current = window.setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  return (
    <div className={`tooltip-container ${className}`}>
      <div
        onMouseEnter={trigger === "hover" ? showTooltip : undefined}
        onMouseLeave={trigger === "hover" ? hideTooltip : undefined}
        onFocus={trigger === "focus" ? showTooltip : undefined}
        onBlur={trigger === "focus" ? hideTooltip : undefined}
        onClick={
          trigger === "click" ? () => setIsVisible(!isVisible) : undefined
        }
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`tooltip tooltip-${position}`}
          style={{ maxWidth }}
          role="tooltip"
        >
          {content}
          {arrow && (
            <div className={`tooltip-arrow tooltip-arrow-${position}`} />
          )}
        </div>
      )}
    </div>
  );
}
