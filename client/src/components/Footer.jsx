import { ArrowUp } from "lucide-react";

function Footer({ scrollTo }) {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Izairy Fazrul. Built with MERN.</p>
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-2 transition hover:text-cyan-300">
          Back to top <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
