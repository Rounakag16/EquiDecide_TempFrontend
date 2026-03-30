import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdfaf6]/90 backdrop-blur-md border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 no-underline">
          <h1 className="text-2xl font-black tracking-tight text-slate-800 flex items-center gap-2">
            <span className="text-[#0ea5e9]">✎</span> 
            <span>EquiDecide</span>
          </h1>
        </Link>
        <div className="text-slate-700 font-bold px-4 py-1 border-2 border-slate-900 rounded-lg bg-white shadow-[2px_2px_0px_#0f172a] hidden sm:block">
          Hackathon Demo
        </div>
      </div>
    </nav>
  );
}
