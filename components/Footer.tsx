export default function Footer() {
  return (
    <footer className="container py-10 opacity-70 text-sm">
      <div className="border-t border-white/10 pt-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Aqalisa.id — Style muslimah elegan tanpa ribet.</p>
        <p className="text-white/60">Demo only. No warranties.</p>
      </div>
    </footer>
  );
}
