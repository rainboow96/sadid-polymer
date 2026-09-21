import React from "react";

interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gridSize?: number;
  gridColor?: string;
  fadeMask?: boolean;
}

export default function GridBackground({
  children,
  className = "",
  gridSize = 40,
  gridColor = "rgba(255, 255, 255, 0.08)",
  fadeMask = true,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          ...(fadeMask && {
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }),
        }}
      />

      {children && <div className="relative z-10 w-full">{children}</div>}
    </div>
  );
}
