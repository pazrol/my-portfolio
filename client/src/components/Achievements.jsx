import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

function Achievements({ achievements }) {
  return (
    <section id="achievements" className="section border-y border-white/5 bg-white/[0.015]">
      <SectionHeading eyebrow="02 / Achievements" title="Milestones that matter." text="Academic, leadership and professional experiences that shaped the journey." />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative ml-4 border-l border-cyan-400/15 pl-8">
          {achievements.map((item, index) => (
            <motion.article
              key={item._id || item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="relative mb-6 last:mb-0"
            >
              <span className="timeline-dot" />
              <div className="glass-card p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="icon-box"><Award size={18} /></span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-cyan-300">{item.year}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-400">{item.organization}</p>
                <p className="mt-3 leading-7 text-slate-500">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
