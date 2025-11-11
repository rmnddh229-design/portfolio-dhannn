"use client";
import useCart from "../../lib/cart";
import type { Product } from "../../lib/products";
import { eth } from "../../lib/format";

export default function AddToCart({ product }: { product: Product }) {
  const add = useCart(s => s.add);
  return (
    <div className="space-y-3">
      <p className="text-lg font-medium">{eth(product.priceEth)}</p>
      <button className="btn" onClick={() => add(product)}>Add to cart</button>
    </div>
  );
}
