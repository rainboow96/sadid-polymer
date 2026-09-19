import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value?: string;
  label?: string;
  icon: LucideIcon;
  children?: React.ReactNode; 
}

export default function StatCard({ value, label, icon: Icon, children }: StatCardProps) {
  return (
    <div className="glass-card flex h-full flex-col items-center justify-start rounded-2xl border border-brand-cyan-hover bg-white/5 px-4 py-5 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-brand-cyan" />
      </span>

      {value && <p className="mt-3 text-lg font-black text-white sm:text-2xl">{value}</p>}
      {label && <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">{label}</p>}

      {children}
    </div>
  );
}
