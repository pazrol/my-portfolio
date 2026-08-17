function InfoCard({ icon, title, label, text }) {
  return (
    <div className="glass-card flex gap-4 p-5">
      <span className="icon-box shrink-0">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-600">{title}</p>
        <p className="mt-1 font-semibold text-slate-200">{label}</p>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
}

export default InfoCard;
