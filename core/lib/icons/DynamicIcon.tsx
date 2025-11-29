import React from "react";
import {getIconComponent, isEmoji} from "./iconResolver";

export interface DynamicIconProps {
  icon: string;
  size?: number | string;
  className?: string;
  fallback?: React.ReactNode;
  "aria-label"?: string;
}

export function DynamicIcon({
  icon,
  size = 24,
  className = "",
  fallback = "👻",
  "aria-label": ariaLabel,
}: DynamicIconProps) {
  // Check if it's an emoji
  if (isEmoji(icon)) {
    return (
      <span className={className} role="img" aria-label={ariaLabel || "icon"}>
        {icon}
      </span>
    );
  }

  // Try to get React icon component
  const IconComponent = getIconComponent(icon);

  if (!IconComponent) {
    // Log warning in development
    if (process.env.NODE_ENV === "development") {
      console.warn(`Invalid icon identifier: ${icon}`);
    }

    // Render fallback
    return (
      <span className={className} role="img" aria-label={ariaLabel || "icon"}>
        {fallback}
      </span>
    );
  }

  // Render React icon
  return (
    <IconComponent
      size={size}
      className={className}
      aria-label={ariaLabel || "icon"}
    />
  );
}
