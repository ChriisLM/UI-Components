import { AvatarProps } from "../../../types/Avatar";
import "./Avatar.css"

export function Avatar({
  src,
  alt = "Avatar",
  size = "medium",
  className = "",
}: AvatarProps) {
  const avatarClassName = `avatar avatar-${size} ${className}`.trim();
  return <img src={src} alt={alt} className={avatarClassName} />;
}
