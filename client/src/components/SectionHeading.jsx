function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-7xl px-5 lg:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">{eyebrow}</p>
      <div className="mt-3 max-w-3xl">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
        <p className="mt-4 leading-7 text-slate-500">{text}</p>
      </div>
    </div>
  );
}

export default SectionHeading;
