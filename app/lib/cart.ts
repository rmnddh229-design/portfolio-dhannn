"use client";
import { create } from "zustand";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number };

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const useCart = create<CartState>((set) => ({
  items: [],
  add: (p, qty = 1) =>
    set((s) => {
      const idx = s.items.findIndex((i) => i.product.id === p.id);
      if (idx >= 0) {
        const copy = [...s.items];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return { items: copy };
      }
      return { items: [...s.items, { product: p, qty }] };
    }),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.product.id !== id) })),
  clear: () => set({ items: [] })
}));

export default useCart;
