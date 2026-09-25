import type { Product } from "@/components/data/products";
import { ProductCard } from "./Product-Card";
import Reveal from "@/components/ui/reveal";

interface ProductListProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductList({ title, description, products }: ProductListProps) {
  return (
    <section className="w-full pb-12 pt-2 sm:pb-16 sm:pt-4 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 text-center sm:mb-10 lg:mb-12">
          <Reveal delay={0.05} y={20}>
            <h1 className="text-gradient text-2xl font-black leading-snug sm:text-3xl sm:leading-tight lg:text-4xl">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.15} y={15}>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm sm:leading-7 lg:text-base">
              {description}
            </p>
          </Reveal>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
            {products.map((product, index) => (
              <Reveal
                key={product.id}
                delay={0.1 + (index % 3) * 0.08}
                y={30}
                className="h-full"
              >
                <ProductCard
                  product={product}
                  priority={index < 3}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-8 text-center sm:p-12">
              <p className="text-sm leading-6 text-slate-400 sm:text-base">
                در حال حاضر محصولی در این دسته وجود ندارد.
              </p>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
