import Link from "next/link";
import { products } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";
import SlowImage from "@/components/SlowImage";

export const dynamic = "force-dynamic";

export default async function Home() {
  await simulateDelay();

  return (
    <div>
      <section className="hero-section">
        <h1>Artisan Collective</h1>
        <p>
          Discover handcrafted treasures from skilled artisans around the world. Each piece is made with care and attention to detail.
        </p>
      </section>

      <section>
        <div className="section-title">
          <h2>Our Collection</h2>
        </div>
        <div className="premium-product-grid">
          {products.map((product) => (
            <article key={product.id} className="premium-product-card">
              <Link href={`/product/${product.id}`}>
                <SlowImage src={product.image} alt={product.name} className="slow-image-container" />
              </Link>
              <div className="premium-product-card-content">
                <span className="premium-product-category">{product.category}</span>
                <h3>
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="premium-price">{product.price}</p>
                <Link href={`/product/${product.id}`} className="premium-button">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
