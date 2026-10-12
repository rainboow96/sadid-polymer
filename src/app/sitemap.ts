import { MetadataRoute } from 'next';
import { products } from "@/components/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sadidpolymer.ir'; 
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/layflat`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/bags`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => {
    let categoryPath = "layflat";
    if (product.category === "bags") categoryPath = "bags";
    if (product.category === "fittings") categoryPath = "fittings";

    return {
      url: `${baseUrl}/products/${categoryPath}/${product.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...productRoutes];
}
