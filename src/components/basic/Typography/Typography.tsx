import "./Typography.css"
import { TypographyProps } from "../../../types/Typography";

export function Typography ({variant = 'body',
  color = 'default',
  align = 'left',
  font = 'roboto',
  className = '',
  children,}:TypographyProps) {

  const Tag = variant === 'body' ? 'p' : variant === 'caption' || variant === 'overline' ? 'span' : variant;

  const typographyClassName = `typography typography-${variant} typography-${color} typography-${align} typography-${font} ${className}`;

  return (
    <Tag className={typographyClassName}>
      {children}
    </Tag>
  );
};