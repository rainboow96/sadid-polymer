// app/products/page.tsx
import { permanentRedirect } from "next/navigation";

export default function ProductsPage() {
  permanentRedirect("/products/layflat");
}
