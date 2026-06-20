// Qualification — "esto NO es para todas las clínicas" + checklist + CTA.
function Qualification() {
  const { Button } = window.OltraSystemsDesignSystem_36063f;
  const { Check, ArrowRight } = window;
  const items = [
    "Reciben leads pero no los convierten bien",
    "Su recepción está saturada o responde tarde",
    "Tienen problemas con no-shows y citas perdidas",
    "Quieren escalar sin contratar más personal",
    "Ofrecen tratamientos de valor medio-alto (implantes, Invisalign, ortodoncia, estética)",
  ];
  return (
    <window.Section bg="paper" id="para-quien" decor={<window.Decor kind="tooth" color="#0F172A" opacity={0.04} style={{ bottom: "-20px", right: "30px" }} />}>
      <div className="qual-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "start" }}>
        <window.Reveal>
          <h2 style={{ margin: 0, fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
            Esto <span style={{ color: "#64748B" }}>NO</span> es para todas las clínicas.
          </h2>
          <p style={{ margin: "1.25rem 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "#475569", maxWidth: "30rem" }}>
            Oltra Systems funciona para clínicas dentales privadas que:
          </p>
        </window.Reveal>
        <window.Reveal delay={100}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {items.map((it, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "1rem 1.125rem", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ flex: "none", width: 26, height: 26, borderRadius: 999, background: "rgba(21,128,61,0.12)", border: "1px solid rgba(21,128,61,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#15803D", marginTop: "1px" }}>
                  <Check size={15} strokeWidth={2.75} />
                </span>
                <span style={{ fontSize: "0.9375rem", lineHeight: 1.5, color: "#334155" }}>{it}</span>
              </li>
            ))}
          </ul>
        </window.Reveal>
      </div>
      <window.Reveal delay={120}>
        <div style={{ marginTop: "3rem", paddingTop: "2.5rem", borderTop: "1px solid #E2E8F0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.015em", color: "#111827" }}>
            Si tu clínica encaja, tenemos mucho que hablar.
          </p>
          <Button variant="solid-dark" surface="light" size="lg" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={18} />}>Solicitar Diagnóstico Express — 17€</Button>
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.Qualification = Qualification;
