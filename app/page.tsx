import ParallaxHero from "../components/ParallaxHero";
import CursorGlow from "../components/CursorGlow";
import MagneticButton from "../components/MagneticButton";
import ProductGrid from "../components/ProductGrid";
import { Reveal } from "../components/Motion";
import BrandMarquee from "../components/BrandMarquee";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <CursorGlow />
      <ParallaxHero />

      <BrandMarquee />

      <section className="space-y-4">
        <Reveal><h2 className="text-xl font-medium">Featured</h2></Reveal>
        <Reveal delay={.1}><ProductGrid /></Reveal>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          ["Wallet Connect", "RainbowKit + Wagmi for a smooth connect flow."],
          ["On-chain Checkout", "Demo sendTransaction on testnets."],
          ["3D Ready", "Swap to GLTF models for product hero."]
        ].map(([title, desc], i) => (
          <Reveal key={i} delay={i * .1}>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-white/70">{desc}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
