import { getCart } from "@/lib/cart";
import { simulateDelay } from "@/lib/delay";
import CheckoutForm from "./CheckoutForm";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  await simulateDelay();
  const cart = await getCart();

  if (cart.items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1>Checkout</h1>
        <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Checkout</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        <div>
          <h3>Order Summary</h3>
          <div className="premium-order-summary">
            {cart.items.map((item) => (
              <div key={item.product.id} className="premium-order-item">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>
                  ${(parseFloat(item.product.price.replace("$", "")) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="premium-order-total">
              <span>Total:</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3>Shipping Information</h3>
          <CheckoutForm total={cart.total} />
        </div>
      </div>
    </div>
  );
}
