import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, Network, ShieldCheck, Terminal, X } from "lucide-react";

function Home({ scrollTo }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Open to opportunities
          </div>

          <p className="mb-3 font-mono text-sm text-slate-500">~/portfolio &gt; whoami</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Izairy <span className="text-gradient">Fazrul.</span>
          </h1>
          <h2 className="mt-7 text-xl font-semibold text-slate-300 sm:text-2xl">
            Cyber Security Student <span className="text-cyan-400">·</span> Aspiring Software Engineer
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate about building secure, useful and user-friendly applications while developing practical skills in cybersecurity, software engineering and full-stack development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("Projects")} className="btn-primary">
              View My Projects <ArrowDown size={17} />
            </button>
            <button onClick={() => scrollTo("Contact")} className="btn-secondary">
              Contact Me <Mail size={17} />
            </button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a className="social" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="social" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <span className="ml-2 h-px w-16 bg-white/10" />
            <span className="font-mono text-xs text-slate-600">Kuala Lumpur, Malaysia</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="terminal-card w-full">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex gap-2"><i /><i /><i /></div>
              <span className="font-mono text-[10px] text-slate-600">izairy@portfolio:~</span>
              <span className="text-xs text-emerald-300">● online</span>
            </div>
            <div className="space-y-5 p-6 font-mono text-sm leading-7">
              <p><span className="text-cyan-300">$</span> cat profile.json</p>
              <div className="rounded-lg border border-white/5 bg-black/20 p-4 text-slate-400">
                <p>{"{"}</p>
                <p className="pl-4">"<span className="text-cyan-200">role</span>": "<span className="text-emerald-300">cybersecurity student</span>",</p>
                <p className="pl-4">"<span className="text-cyan-200">stack</span>": ["<span className="text-amber-200">MERN</span>", "<span className="text-amber-200">Flutter</span>"],</p>
                <p className="pl-4">"<span className="text-cyan-200">focus</span>": ["<span className="text-emerald-300">security</span>", "<span className="text-emerald-300">development</span>"],</p>
                <p className="pl-4">"<span className="text-cyan-200">status</span>": "<span className="text-emerald-300">learning + building</span>"</p>
                <p>{"}"}</p>
              </div>
              <p><span className="text-cyan-300">$</span> <span className="typing">build something meaningful_</span></p>
            </div>
          </div>
          <div className="absolute -right-2 -top-6 hidden rounded-xl border border-cyan-400/20 bg-[#0b111a] p-3 text-cyan-300 shadow-2xl sm:block">
            <ShieldCheck size={24} />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden rounded-xl border border-white/10 bg-[#0b111a] p-3 text-slate-300 shadow-2xl sm:block">
            <Network size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
