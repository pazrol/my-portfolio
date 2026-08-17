function Field({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <label className="field-label">
      {label}
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="field-input" />
    </label>
  );
}

export default Field;
