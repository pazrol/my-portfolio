import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { fetchAchievements, fetchProjects, sendContact } from "./services/api.js";
import { fallbackAchievements, fallbackProjects } from "./data/fallback.js";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Cybersecurity",
  "Database",
  "Academic"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState(fallbackProjects);
  const [achievements, setAchievements] = useState(fallbackAchievements);
  const [category, setCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formState, setFormState] = useState({
    loading: false,
    message: "",
    error: false
  });

  useEffect(() => {
    fetchProjects().then(setProjects).catch(() => {});
    fetchAchievements().then(setAchievements).catch(() => {});
  }, []);

  const filteredProjects = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [projects, category]
  );

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ loading: true, message: "", error: false });

    try {
      await sendContact(form);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setFormState({
        loading: false,
        message: "Message sent successfully. Thank you!",
        error: false
      });
    } catch {
      setFormState({
        loading: false,
        message:
          "The API is not connected yet. Start the server and MongoDB, then try again.",
        error: true
      });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070b] text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-200">
      <div className="grid-bg pointer-events-none fixed inset-0 -z-20 opacity-40" />
      <div className="noise pointer-events-none fixed inset-0 -z-10 opacity-[0.025]" />

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <main>
        <Home scrollTo={scrollTo} />
        <About />
        <Achievements achievements={achievements} />
        <Projects
          projects={filteredProjects}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Skills />
        <Contact
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          state={formState}
        />
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
