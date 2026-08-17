import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Github } from "lucide-react";

function Projects({ projects, category, setCategory, categories }) {
  return (
    <section id="projects" className="section">
      <SectionHeading eyebrow="03 / Projects" title="Things I've built." text="Selected projects across mobile development, web development, databases and academic work." />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`filter ${category === item ? "filter-active" : ""}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project._id || project.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06 }}
              className="project-card group"
            >
              <div className="project-visual">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/10" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="icon-box"><Code2 size={18} /></span>
                    {project.featured && <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">Featured</span>}
                  </div>
                  <div className="font-mono text-xs text-slate-600">PROJECT_{String(index + 1).padStart(2, "0")}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">{project.category}</p>
                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech) => <span className="chip" key={tech}>{tech}</span>)}
                </div>
                <div className="mt-6 flex gap-4 border-t border-white/5 pt-5">
                  {project.githubUrl ? <a className="link-btn" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a> : <span className="link-btn muted"><Github size={16} /> GitHub</span>}
                  {project.liveUrl ? <a className="link-btn" href={project.liveUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Live Demo</a> : <span className="link-btn muted"><ArrowUpRight size={16} /> Demo</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
