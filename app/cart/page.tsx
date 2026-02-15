import Link from "next/link";
import { getCart } from "@/lib/cart";
import { simulateDelay } from "@/lib/delay";
import CartItems from "./CartItems";

export const dynamic = "force-dynamic";

export default async function CartPage() {
  await simulateDelay();
  const cart = await getCart();

  return (
    <div className="premium-cart-page">
      <h1>Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Your cart is empty</p>
          <Link href="/" className="premium-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <table className="premium-cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CartItems items={cart.items} />
            </tbody>
          </table>

          <div className="premium-cart-summary">
            <div className="premium-cart-summary-row">
              <span>Subtotal:</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>
            <div className="premium-cart-summary-row">
              <span>Shipping:</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="premium-cart-summary-row premium-cart-summary-total">
              <span>Total:</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Link href="/" className="premium-button premium-button-secondary">
                Continue Shopping
              </Link>
              <Link href="/checkout" className="premium-button">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
