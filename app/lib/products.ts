export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceEth: number; // demo price in ETH
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "pashmina-01",
    slug: "pashmina-01",
    name: "Pashmina Oval — Rayon Spandex",
    description: "Premium rayon spandex yang adem, jatuh, anti ribet harian.",
    priceEth: 0.001,
    image: "/images/pashmina-oval.jpg",
    badge: "Best Seller"
  },
  {
    id: "abaya-01",
    slug: "abaya-01",
    name: "Abaya Flow — Satin Luxe",
    description: "Jatuh elegan dengan finishing silky-matte, siap OOTD & acara.",
    priceEth: 0.002,
    image: "/images/abaya.jpg"
  },
  {
    id: "inner-01",
    slug: "inner-01",
    name: "Inner Ninja — ComfyFit",
    description: "Inner lembut, napas lega, fit nyaman seharian.",
    priceEth: 0.0006,
    image: "/images/inner.jpg"
  }
];
