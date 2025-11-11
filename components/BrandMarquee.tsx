export default function BrandMarquee() {
  const items = ["Fast Checkout", "Wallet Connect", "3D Hero", "Premium UI", "On-chain"];
  return (
    <div className="marquee border-y border-white/10 py-3 my-12">
      <div className="marquee-track">
        {items.concat(items).map((t, i) => (
          <span key={i} className="mx-6 opacity-80">{t} •</span>
        ))}
      </div>
    </div>
  );
}
