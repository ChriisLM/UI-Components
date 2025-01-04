import { useState } from "react";
import { AvatarProps } from "../../../types/Avatar";
import "./Avatar.css";

export function Avatar({
  src,
  alt = "Avatar",
  size = "medium",
  fallback,
  border,
  shape = "circle",
  className = "",
  onClick,
}: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`avatar-container avatar-${size} avatar-${shape} avatar-${border} ${className}`} onClick={onClick}>
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          className="avatar"
          onError={() => setError(true)}
        />
      ) : (
        <span className="avatar-spanError">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}
