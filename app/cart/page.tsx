"use client";
import useCart from "../lib/cart";
import Link from "next/link";

export default function CartPage() {
  const { items, remove } = useCart();
  const total = items.reduce((a, i) => a + i.product.priceEth * i.qty, 0);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      <div className="space-y-4">
        {items.length === 0 && <p className="text-white/70">Cart is empty.</p>}
        {items.map(i => (
          <div key={i.product.id} className="card flex items-center justify-between">
            <div>
              <p className="font-medium">{i.product.name}</p>
              <p className="text-sm text-white/70">Qty: {i.qty}</p>
            </div>
            <button className="btn-outline" onClick={() => remove(i.product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2">
        <p className="font-medium">Total: {total.toFixed(4)} ETH</p>
        <Link href="/checkout" className="btn">Checkout</Link>
      </div>
    </div>
  );
}
