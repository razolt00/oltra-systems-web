// Leak calculator — interactive, light section. Real-time output.
function Calculator() {
  const { Eyebrow, Button, Input, Card } = window.OltraSystemsDesignSystem_36063f;
  const { ArrowRight, TrendingDown } = window;
  const [leads, setLeads] = React.useState(80);
  const [noResp, setNoResp] = React.useState(45);
  const [noShow, setNoShow] = React.useState(25);
  const [value, setValue] = React.useState(1200);

  // Patients lost ≈ leads that go unanswered + no-shows on the rest, both converting at a baseline.
  const CONVERT = 0.2; // baseline conversion of a properly handled lead
  const unanswered = leads * (noResp / 100);
  const answered = leads - unanswered;
  const lostToNoShow = answered * (noShow / 100);
  const patientsLost = Math.round((unanswered + lostToNoShow) * CONVERT);
  const monthly = patientsLost * value;
  const yearly = monthly * 12;
  const fmt = (n) => "€" + Math.round(n).toLocaleString("es-ES");

  const fields = [
    { label: "Leads que recibes al mes", val: leads, set: setLeads, min: 0, max: 500, step: 5 },
    { label: "% sin respuesta en < 1h", val: noResp, set: setNoResp, suffix: "%", min: 0, max: 100, step: 1 },
    { label: "% de no-shows mensuales", val: noShow, set: setNoShow, suffix: "%", min: 0, max: 100, step: 1 },
    { label: "Valor medio de un paciente nuevo", val: value, set: setValue, prefix: "€", min: 0, max: 6000, step: 50 },
  ];

  return (
    <window.Section bg="carbon" id="calculadora" decor={<window.Decor kind="tooth" opacity={0.04} style={{ bottom: "-30px", right: "-20px" }} />}>
      <window.Reveal style={{ maxWidth: "44rem" }}>
        <Eyebrow>Calculadora de fugas de pacientes</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#fff" }}>
          ¿Cuánto dinero estás perdiendo cada mes?
        </h2>
        <p style={{ margin: "1rem 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "#CBD5E1", maxWidth: "38rem" }}>
          Ajusta los valores de tu clínica. El cálculo se actualiza en tiempo real.
        </p>
      </window.Reveal>

      <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2.5rem", alignItems: "stretch" }}>
        {/* Inputs */}
        <window.Reveal style={{ display: "flex" }}>
          <Card surface="light" padding="1.75rem" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.375rem" }}>
            {fields.map((f, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.625rem" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#475569" }}>{f.label}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111827", fontVariantNumeric: "tabular-nums" }}>
                    {f.prefix || ""}{f.val.toLocaleString("es-ES")}{f.suffix || ""}
                  </span>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step} value={f.val}
                  onChange={(e) => f.set(Number(e.target.value))}
                  className="oltra-range" />
              </div>
            ))}
          </Card>
        </window.Reveal>

        {/* Output */}
        <window.Reveal delay={100} style={{ display: "flex" }}>
          <div style={{ width: "100%", background: "#1E293B", border: "1px solid rgba(148,163,184,0.14)", borderRadius: 16, padding: "1.75rem", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94A3B8", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              <TrendingDown size={16} color="#F87171" /> Tu fuga estimada
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(148,163,184,0.14)" }}>
              <span style={{ fontSize: "0.9375rem", color: "#CBD5E1" }}>Pacientes perdidos al mes</span>
              <span style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{patientsLost}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0", borderBottom: "1px solid rgba(148,163,184,0.14)" }}>
              <span style={{ fontSize: "0.9375rem", color: "#CBD5E1" }}>Dinero no capturado / mes</span>
              <span style={{ fontSize: "1.75rem", fontWeight: 700, color: "#F87171", fontVariantNumeric: "tabular-nums" }}>{fmt(monthly)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0 1.5rem" }}>
              <span style={{ fontSize: "0.9375rem", color: "#CBD5E1" }}>Dinero no capturado / año</span>
              <span style={{ fontSize: "2.25rem", fontWeight: 800, color: "#F87171", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{fmt(yearly)}</span>
            </div>
            <div style={{ marginTop: "auto" }}>
              <p style={{ margin: "0 0 1rem", fontSize: "0.9375rem", color: "#94A3B8", lineHeight: 1.5 }}>
                Descubre exactamente dónde falla tu clínica.
              </p>
              <Button variant="primary" size="lg" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={18} />} style={{ width: "100%" }}>
                Solicitar Diagnóstico Express — 17€
              </Button>
            </div>
          </div>
        </window.Reveal>
      </div>
    </window.Section>
  );
}
window.Calculator = Calculator;
