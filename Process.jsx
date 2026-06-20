// Process — 4 numbered steps, horizontal on desktop.
function Process() {
  const { Eyebrow } = window.OltraSystemsDesignSystem_36063f;
  const { Search, Settings, Zap, Repeat } = window;
  const steps = [
    { n: "01", icon: <Search size={20} />, title: "Diagnóstico", body: "Analizamos tu WhatsApp, recepción, formularios e Instagram. Detectamos las fugas concretas." },
    { n: "02", icon: <Settings size={20} />, title: "Diseño del sistema", body: "Diseñamos el flujo de respuesta automática, seguimiento y gestión de citas adaptado a tu clínica." },
    { n: "03", icon: <Zap size={20} />, title: "Implementación", body: "Configuramos las automatizaciones, el CRM básico y los recordatorios. Sin que tengas que tocar nada técnico." },
    { n: "04", icon: <Repeat size={20} />, title: "Optimización continua", body: "Monitorizamos resultados, ajustamos respuestas y mantenemos el sistema funcionando mes a mes." },
  ];
  return (
    <window.Section bg="paper" id="proceso" decor={<window.Decor kind="implant" color="#0F172A" opacity={0.04} style={{ top: "40px", right: "40px" }} />}>
      <window.Reveal style={{ maxWidth: "44rem" }}>
        <Eyebrow surface="light">El proceso</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
          Un sistema, no un servicio suelto.
        </h2>
      </window.Reveal>
      <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem", marginTop: "2.5rem" }}>
        {steps.map((s, i) => (
          <window.Reveal key={i} delay={i * 80}>
            <div style={{ position: "relative", height: "100%", paddingTop: "1.5rem" }}>
              <div style={{ position: "absolute", top: 0, left: 0, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", color: "#3E5573" }}>{s.n}</div>
              <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#F1F5F9", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", marginBottom: "1.125rem" }}>
                  {s.icon}
                </div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#111827" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.6, color: "#475569" }}>{s.body}</p>
              </div>
            </div>
          </window.Reveal>
        ))}
      </div>
    </window.Section>
  );
}
window.Process = Process;
