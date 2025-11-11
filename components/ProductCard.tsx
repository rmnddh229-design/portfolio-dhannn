"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import useCart from "../app/lib/cart";
import { eth } from "../app/lib/format";
import type { Product } from "../app/lib/products";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <TiltCard className="card overflow-hidden">
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: .25 }}>
        <div className="relative h-64 w-full">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
          {product.badge && (
            <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-brand-500 text-white">
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-4 space-y-2">
          <Link href={`/product/${product.slug}`} className="font-semibold hover:underline">
            {product.name}
          </Link>
          <p className="text-white/70 text-sm">{product.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-medium">{eth(product.priceEth)}</span>
            <button className="btn" onClick={() => add(product)}>
              <ShoppingBag size={16} />
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}
