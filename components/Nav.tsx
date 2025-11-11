"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useCart from "../lib/cart";

export default function Nav() {
  const items = useCart((s) => s.items);
  const count = items.reduce((a, i) => a + i.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/60 to-transparent backdrop-blur">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight"><img src="/aqalisa-logo.png" alt="Aqalisa" className="h-6 w-auto" /><span>Aqalisa.id</span></Link>
        <nav className="flex items-center gap-3">
          <Link href="/shop" className="btn-outline">Shop</Link>
          <Link href="/cart" className="btn-outline">
            <ShoppingCart size={18} />
            <span>Cart ({count})</span>
          </Link>
          <ConnectButton />
        </nav>
      </div>
    </header>
  );
}
