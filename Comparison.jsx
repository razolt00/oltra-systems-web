// Comparison — Oltra vs generic agency. Light section.
function Comparison() {
  const { X, Check } = window;
  const rows = [
    { k: "Qué hace", a: "Publica contenido y gestiona redes", b: "Implementa sistemas de captación y conversión" },
    { k: "Resultado", a: "Más seguidores", b: "Más pacientes que pagan" },
    { k: "Foco", a: "Imagen de marca", b: "Fugas, seguimiento y conversión" },
    { k: "Trabajo", a: "Activo y manual", b: "Automatizado y escalable" },
    { k: "ROI", a: "Difícil de medir", b: "Directo: pacientes convertidos" },
  ];
  return (
    <window.Section bg="carbon" id="comparativa">
      <window.Reveal style={{ maxWidth: "46rem" }}>
        <h2 style={{ margin: 0, fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#fff" }}>
          Oltra Systems no es una agencia de marketing al uso.
        </h2>
      </window.Reveal>
      <window.Reveal delay={100}>
        <div style={{ marginTop: "2.5rem", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 16, overflow: "hidden", background: "#1E293B", boxShadow: "none" }}>
          {/* header */}
          <div className="cmp-row" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", borderBottom: "1px solid rgba(148,163,184,0.16)" }}>
            <div style={{ padding: "1.125rem 1.5rem" }} />
            <div style={{ padding: "1.125rem 1.5rem", fontSize: "0.875rem", fontWeight: 600, color: "#94A3B8", borderLeft: "1px solid rgba(148,163,184,0.16)" }}>Agencia genérica</div>
            <div style={{ padding: "1.125rem 1.5rem", fontSize: "0.875rem", fontWeight: 700, color: "#fff", background: "rgba(148,163,184,0.06)", borderLeft: "1px solid rgba(148,163,184,0.16)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img src={window.assetUrl("markWhite")} alt="" style={{ height: 16, width: "auto" }} /> Oltra Systems
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="cmp-row" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid rgba(148,163,184,0.10)" : "none" }}>
              <div style={{ padding: "1.125rem 1.5rem", fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>{r.k}</div>
              <div style={{ padding: "1.125rem 1.5rem", fontSize: "0.9rem", color: "#94A3B8", borderLeft: "1px solid rgba(148,163,184,0.10)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ flex: "none", marginTop: 1, color: "#64748B" }}><X size={16} /></span>{r.a}
              </div>
              <div style={{ padding: "1.125rem 1.5rem", fontSize: "0.9rem", fontWeight: 500, color: "#E2E8F0", background: "rgba(148,163,184,0.06)", borderLeft: "1px solid rgba(148,163,184,0.16)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ flex: "none", marginTop: 1, color: "#22C55E" }}><Check size={16} strokeWidth={2.5} /></span>{r.b}
              </div>
            </div>
          ))}
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.Comparison = Comparison;
