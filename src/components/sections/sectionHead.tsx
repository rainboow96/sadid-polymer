import Reveal from "../ui/reveal";

export default function SectionHead({
  title,
  highlight,
  desc,
  align = "center",
}: {
  title?: string;
  highlight?: string;
  desc?: string;
  align?: "center" | "right";
}) {
  const centered = align === "center";
  const gradientClass =
    "bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <h2 className="text-[30px] font-black leading-[1.5] tracking-tight sm:text-[42px] sm:leading-[1.4]">
        {highlight ? (
          <>
            <span className="text-white">{title} </span>
            <span className={gradientClass}>{highlight}</span>
          </>
        ) : (
          <span className={gradientClass}>{title}</span>
        )}
      </h2>
      {desc && (
        <p className="mt-4 text-[14.5px] leading-[2.1] text-slate-400">
          {desc}
        </p>
      )}
    </Reveal>
  );
}
