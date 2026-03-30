export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            <span className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">✦</span> EquiDecide
          </h1>
        </div>
      </div>
    </nav>
  );
}
