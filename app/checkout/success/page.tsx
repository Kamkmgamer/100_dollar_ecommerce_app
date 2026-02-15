import Link from "next/link";

export default function SuccessPage() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 0", maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✓</div>
      <h1>Thank You!</h1>
      <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
        Your order has been placed successfully. We will send you an email confirmation shortly.
      </p>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        This is a demo checkout. No actual payment was processed and no order was placed.
      </p>
      <Link href="/" className="premium-button">
        Continue Shopping
      </Link>
    </div>
  );
}
