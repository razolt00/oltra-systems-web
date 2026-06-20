// Problem section — eyebrow, headline, 3 blocks, manifesto pull-quote.
function Problem() {
  const { Card, Eyebrow } = window.OltraSystemsDesignSystem_36063f;
  const { Clock, Inbox, Settings } = window;
  const blocks = [
    { icon: <Clock size={22} />, title: "Sin respuesta rápida", body: "Un paciente te escribe por WhatsApp o Instagram a las 20h. Si no respondes en los próximos 30 minutos, llama a la clínica de al lado." },
    { icon: <Inbox size={22} />, title: "Sin seguimiento", body: "Muchos leads piden información y nunca reciben un segundo mensaje. Esa oportunidad se enfría y desaparece sin que nadie lo note." },
    { icon: <Settings size={22} />, title: "Sin sistema", body: "Los pacientes llegan por 5 canales distintos, la recepcionista no da abasto, las citas se pierden y los no-shows se repiten. Todo cuesta tiempo y dinero." },
  ];
  return (
    <window.Section bg="paper" id="problema" decor={<window.Decor kind="ekg" color="#0F172A" opacity={0.04} style={{ top: "42%", left: "0", width: "100%" }} />}>
      <window.Reveal style={{ maxWidth: "44rem" }}>
        <Eyebrow surface="light">El problema real</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
          Los leads llegan. Pero no se convierten.
        </h2>
      </window.Reveal>
      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginTop: "2.5rem" }}>
        {blocks.map((b, i) => (
          <window.Reveal key={i} delay={i * 90}>
            <Card surface="light" interactive style={{ height: "100%" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#F1F5F9", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", marginBottom: "1.25rem" }}>
                {b.icon}
              </div>
              <h3 style={{ margin: "0 0 0.625rem", fontSize: "1.1875rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#111827" }}>{b.title}</h3>
              <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.65, color: "#475569" }}>{b.body}</p>
            </Card>
          </window.Reveal>
        ))}
      </div>
      <window.Reveal delay={120}>
        <div style={{ marginTop: "3.5rem", paddingTop: "3rem", borderTop: "1px solid #E2E8F0", textAlign: "center" }}>
          <p style={{ margin: "0 auto", maxWidth: "46rem", fontSize: "clamp(1.375rem,2.6vw,2rem)", fontWeight: 600, fontStyle: "italic", lineHeight: 1.3, letterSpacing: "-0.02em", color: "#111827" }}>
            “Tu clínica no necesita más publicidad. Necesita un sistema que responda, haga seguimiento y convierta.”
          </p>
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.Problem = Problem;
