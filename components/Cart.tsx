"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CartItem {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  quantity: number;
}

interface CartData {
  items: CartItem[];
  total: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartData>({ items: [], total: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then(setCart)
      .catch(() => {});
  }, []);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="premium-cart-toggle"
        aria-label="Shopping cart"
      >
        <span className="cart-icon">🛒</span>
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </button>

      {isOpen && (
        <div className="premium-cart-dropdown">
          <div className="premium-cart-header">
            <h4>Your Cart</h4>
            <button onClick={() => setIsOpen(false)} className="cart-close">
              ×
            </button>
          </div>

          {cart.items.length === 0 ? (
            <p className="premium-cart-empty">Your cart is empty</p>
          ) : (
            <>
              <div className="premium-cart-items">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="premium-cart-item">
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="premium-cart-item-details">
                      <span className="premium-cart-item-name">{item.product.name}</span>
                      <span className="premium-cart-item-qty">
                        {item.quantity} × {item.product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="premium-cart-total">
                <span>Total:</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              <Link href="/cart" className="premium-cart-view" onClick={() => setIsOpen(false)}>
                View Cart
              </Link>
              <Link href="/checkout" className="premium-cart-checkout" onClick={() => setIsOpen(false)}>
                Checkout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
