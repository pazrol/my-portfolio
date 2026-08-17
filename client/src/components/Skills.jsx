import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Code2 } from "lucide-react";

const skills = {
  "Programming Languages": ["Java", "C++", "PHP", "JavaScript", "Dart", "Python"],
  "Web Development": ["HTML", "CSS", "React", "Node.js", "Express.js"],
  Database: ["MySQL", "MongoDB", "Firebase"],
  Cybersecurity: ["Digital Forensics", "Network Security", "Malware Analysis", "Vulnerability Assessment", "Security Fundamentals"],
  Tools: ["Git", "GitHub", "Visual Studio Code", "Figma", "Cisco Packet Tracer", "Wireshark", "VirtualBox"]
};

function Skills() {
  return (
    <section id="skills" className="section border-y border-white/5 bg-white/[0.015]">
      <SectionHeading eyebrow="04 / Skills" title="Tools of the trade." text="A practical toolkit developed through coursework, projects, internship experience and self-learning." />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {Object.entries(skills).map(([group, items], index) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="icon-box">
                {group === "Cybersecurity" ? <ShieldCheck size={18} /> : group === "Database" ? <Database size={18} /> : <Code2 size={18} />}
              </span>
              <h3 className="font-bold">{group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
