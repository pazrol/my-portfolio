import InfoCard from "./InfoCard";
import SectionHeading from "./SectionHeading";
import { GraduationCap, BriefcaseBusiness, Code2 } from "lucide-react";

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="01 / About" title="Building with purpose." text="A growing technology journey focused on practical development, security and continuous learning." />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="glass-card p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-300">
            Izairy Fazrul is a Bachelor of Information Technology (Hons) in Cyber Security student at Universiti Poly-Tech Malaysia (UPTM). The current focus is combining software development with cybersecurity knowledge to create applications that are useful, maintainable and security-aware.
          </p>
          <p className="mt-5 leading-8 text-slate-500">
            Previous work includes mobile application development with Flutter and Firebase, web development with PHP and MySQL, database systems, networking and digital forensics. Outside technology, badminton and coding are among the main interests.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Cybersecurity", "Full-Stack Development", "Mobile Apps", "Digital Forensics"].map((x) => <span key={x} className="chip">{x}</span>)}
          </div>
        </div>

        <div className="space-y-5">
          <InfoCard icon={<GraduationCap />} title="Education" label="Bachelor of IT (Hons) Cyber Security" text="Universiti Poly-Tech Malaysia (UPTM)" />
          <InfoCard icon={<BriefcaseBusiness />} title="Experience" label="System Engineer Intern" text="Beyond2u Sdn Bhd · 2024–2025" />
          <InfoCard icon={<Code2 />} title="Current Goal" label="Grow as a software engineer" text="Build real-world applications with strong security fundamentals." />
        </div>
      </div>
    </section>
  );
}

export default About;
