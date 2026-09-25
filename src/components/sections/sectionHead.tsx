import Reveal from "../ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  title: string;
  highlight?: string;
  desc?: string;
  align?: "center" | "right";
  className?: string;
}

const GRADIENT_CLASS =
  "bg-gradient-to-l from-blue-500 via-sky-300 to-cyan-400 bg-clip-text text-transparent";

export default function SectionHead({
  title,
  highlight,
  desc,
  align = "center",
  className,
}: SectionHeadProps) {
  const isCentered = align === "center";

  return (
    <Reveal
      className={cn(
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-right",
        className
      )}
    >
      <h2 className="text-3xl font-black leading-snug sm:text-4xl lg:text-[42px] lg:leading-tight">
        {highlight ? (
          <>
            <span className="text-white">{title} </span>
            <span className={GRADIENT_CLASS}>{highlight}</span>
          </>
        ) : (
          <span className={GRADIENT_CLASS}>{title}</span>
        )}
      </h2>

      {desc && (
        <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
          {desc}
        </p>
      )}
    </Reveal>
  );
}
