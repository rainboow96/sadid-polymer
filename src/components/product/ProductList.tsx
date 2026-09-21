import { Product } from "../data/products";
import { ProductCard } from "./Product-Card";
import Reveal from "@/components/ui/reveal"; // اگر مسیر ریویل متفاوته مسیرش رو چک کن

interface ProductListProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductList({ title, description, products }: ProductListProps) {
  return (
    <section className="w-full pt-2 pb-12 sm:pt-4 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 text-center sm:mb-10 lg:mb-12">
          <Reveal delay={0.05} y={20}>
            <h1 className="text-2xl font-black tracking-tight text-gradient sm:text-3xl lg:text-4xl leading-snug sm:leading-tight">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.15} y={15}>
            <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7 lg:text-base">
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
                  priority={index < 2}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-8 text-center sm:p-12">
              <p className="text-sm text-slate-400 sm:text-base">
                در حال حاضر محصولی در این دسته وجود ندارد.
              </p>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
