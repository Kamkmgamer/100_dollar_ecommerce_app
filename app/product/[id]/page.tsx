import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";
import SlowImage from "@/components/SlowImage";
import AddToCartButton from "./AddToCartButton";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - Artisan Collective`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  await simulateDelay();

  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="premium-back-link">
        ← Back to all products
      </Link>

      <div className="premium-single-product">
        <SlowImage src={product.image} alt={product.name} className="slow-image-container" />

        <div className="premium-product-meta">
          <span className="premium-product-category">{product.category}</span>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <p className="premium-product-price">{product.price}</p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--muted)" }}>{product.description}</p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
