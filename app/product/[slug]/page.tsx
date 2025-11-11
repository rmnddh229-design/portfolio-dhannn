import Image from "next/image";
import { products } from "../../lib/products";
import { notFound } from "next/navigation";
import AddToCart from "./parts";

export default function ProductDetail({ params }: { params: { slug: string }}) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-white/10">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-white/70">{product.description}</p>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
