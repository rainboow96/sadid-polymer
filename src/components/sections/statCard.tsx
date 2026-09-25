import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value?: string;
  label?: string;
  children?: ReactNode;
  className?: string;
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  children,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-card flex h-full flex-col items-center justify-start rounded-2xl border border-brand-cyan-hover bg-white/5 px-4 py-5 text-center",
        className
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
        <Icon className="size-5 text-brand-cyan" aria-hidden="true" />
      </span>

      {value && (
        <p className="mt-3 text-lg font-black text-white sm:text-2xl">
          {value}
        </p>
      )}

      {label && (
        <p className="mt-1 text-xs font-medium text-slate-400">
          {label}
        </p>
      )}

      {children}
    </div>
  );
}
