import SectionHeading from "./SectionHeading";
import Field from "./Field";
import { MessageSquare, Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

function Contact({ form, setForm, onSubmit, state }) {
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="contact" className="section">
      <SectionHeading eyebrow="05 / Contact" title="Let's build something." text="Have an opportunity, project or idea? Send a message and let's connect." />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <div className="glass-card flex flex-col justify-between p-7 sm:p-9">
          <div>
            <span className="icon-box mb-6"><MessageSquare size={20} /></span>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-4 leading-7 text-slate-500">
              For internship opportunities, software projects, cybersecurity discussions or collaboration, the contact form is the easiest way to reach me.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            <a href="mailto:your-email@example.com" className="contact-line"><Mail size={18} /> your-email@example.com</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-line"><Linkedin size={18} /> LinkedIn Profile</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-line"><Github size={18} /> GitHub Profile</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-card p-7 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(v) => update("name", v)} placeholder="Your name" required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" required />
          </div>
          <Field label="Subject" value={form.subject} onChange={(v) => update("subject", v)} placeholder="What would you like to discuss?" required />
          <label className="field-label">
            Message
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Write your message..." rows="6" required className="field-input resize-none" />
          </label>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <button disabled={state.loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
              {state.loading ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
            {state.message && (
              <p className={`flex items-center gap-2 text-sm ${state.error ? "text-amber-300" : "text-emerald-300"}`}>
                <CheckCircle2 size={16} /> {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
