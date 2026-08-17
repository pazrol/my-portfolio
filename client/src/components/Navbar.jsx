import { Menu, Terminal, X } from "lucide-react";

const navItems = ["Home", "About", "Achievements", "Projects", "Skills", "Contact"];

function Navbar({ menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <Terminal size={20} />
          </span>
          <span className="font-bold tracking-tight">IZAIRY<span className="text-cyan-300">.DEV</span></span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15 md:block">
          Let's Talk
        </a>

        <button
          className="rounded-lg border border-white/10 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#080b11] px-5 pb-5 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full border-b border-white/5 py-4 text-left text-slate-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
