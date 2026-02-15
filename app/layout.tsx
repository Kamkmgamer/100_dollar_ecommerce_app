import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: "Artisan Collective | Premium Handcrafted Goods",
  description: "Curated collection of handcrafted products from artisans worldwide. Quality goods for discerning tastes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="premium-site-header">
          <div className="premium-header-inner">
            <p className="premium-site-title">
              <Link href="/">Artisan Collective</Link>
            </p>
            <nav className="premium-nav">
              <Link href="/">Shop</Link>
              <Link href="/cart">Cart</Link>
              <Cart />
            </nav>
          </div>
        </header>
        <main className="premium-main-content">{children}</main>
        <footer className="premium-footer">
          <div className="premium-footer-content">
            <div className="premium-footer-grid">
              <div className="premium-footer-col">
                <h5>About Us</h5>
                <p>
                  We curate the finest handcrafted products from artisans around the world. Each piece tells a story of tradition and craftsmanship.
                </p>
              </div>
              <div className="premium-footer-col">
                <h5>Quick Links</h5>
                <p>
                  <Link href="/">Shop All</Link>
                  <br />
                  <Link href="/cart">Shopping Cart</Link>
                  <br />
                  <Link href="/checkout">Checkout</Link>
                </p>
              </div>
              <div className="premium-footer-col">
                <h5>Customer Service</h5>
                <p>
                  <a href="mailto:support@artisancollective.com">support@artisancollective.com</a>
                  <br />
                  <a href="tel:+18005551234">1-800-555-1234</a>
                </p>
              </div>
              <div className="premium-footer-col">
                <h5>Connect</h5>
                <p>
                  <a href="#">Instagram</a>
                  <br />
                  <a href="#">Pinterest</a>
                  <br />
                  <a href="#">Facebook</a>
                </p>
              </div>
            </div>

            <div className="premium-footer-divider"></div>

            <div className="premium-copyright-section">
              <p>© 2024 Artisan Collective. All Rights Reserved.</p>
              <p>
                <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a> · <a href="#">Shipping Policy</a>
              </p>

              <p className="premium-theme-credit">
                ✦ Premium Theme by <a href="#">LuxeTheme Studios</a> ✦
              </p>
              <p className="premium-theme-credit">
                Designed with ♥ by <a href="#">Elite Web Designs</a>
              </p>
              <p className="premium-theme-credit" style={{ fontSize: "0.75rem !important" }}>
                Website powered by <a href="#">ArtisanPress Premium Framework</a> | Licensed under <a href="#">Commercial License #AP-2024-78543</a>
              </p>
              <p className="premium-theme-credit" style={{ fontSize: "0.7rem !important", marginTop: "0.75rem !important" }}>
                This website uses the LuxeTheme™ Premium Collection | <a href="#">View License</a> | <a href="#">Theme Documentation</a> | <a href="#">Support Portal</a>
              </p>
              <p className="premium-theme-credit" style={{ fontSize: "0.65rem !important", marginTop: "0.5rem !important" }}>
                © 2024 LuxeTheme Studios. All theme assets, designs, and code are protected under international copyright law. Unauthorized reproduction prohibited.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
