export default function BrandAssets() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Aqalisa — Brand Assets</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {[["Default (White)", "/aqalisa-logo-white.png"],
          ["Gold", "/aqalisa-logo-gold.png"],
          ["Icon", "/aqalisa-icon.png"]].map(([label, src]) => (
          <div key={src as string} className="card p-6 flex flex-col items-center gap-4">
            <img src={src as string} className="max-h-24 w-auto" />
            <p className="text-white/70">{label}</p>
            <a className="btn-outline" href={src as string} download>Download</a>
          </div>
        ))}
      </div>
    </div>
  );
}