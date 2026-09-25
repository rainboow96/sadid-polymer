import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/components/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  className?: string;
};

export function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const mainImage = product.images?.[0] || "/placeholder.webp";
  const productUrl = `/products/${product.category}/${product.slug}`;

  return (
    <article
      className={cn(
        "glass-panel group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 transition-all duration-300 transform-gpu hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.35)]",
        className
      )}
    >
      <Link
        href={productUrl}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black"
      >
        <Image
          src={mainImage}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-500 ease-out transform-gpu group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-2">
          <h3 className="text-base font-bold leading-7 text-white sm:text-lg">
            <Link
              href={productUrl}
              className="block transition-colors hover:text-cyan-400"
            >
              {product.name}
            </Link>
          </h3>
          <p className="line-clamp-2 min-h-12 text-sm leading-6 text-slate-300/85">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <div className="w-full pt-1">
            <Button
              size="lg"
              variant="default"
              className="w-full"
              render={
                <Link
                  href={productUrl}
                  className="flex items-center justify-center gap-2 font-semibold"
                >
                  <span>مشاهده و استعلام</span>
                  <ArrowLeft
                    aria-hidden="true"
                    className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
                  />
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </article>
  );
}
