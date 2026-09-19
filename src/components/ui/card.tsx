import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300",
        hoverEffect &&
          "group hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/70 hover:shadow-[0_12px_25px_-8px_rgba(6,182,212,0.2)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
