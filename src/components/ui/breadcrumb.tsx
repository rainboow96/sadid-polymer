
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (

    <nav aria-label="مسیر صفحه" className={`border-b border-slate-800 w-full ${className || ""}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-400 py-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-cyan-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-cyan-300 font-medium">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronLeft className="size-3.5 text-slate-600" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
