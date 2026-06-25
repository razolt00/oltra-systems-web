// Services — 3 pricing tiers, middle one featured.
function Services() {
  const { Eyebrow, Card, Badge, Button } = window.OltraSystemsDesignSystem_36063f;
  const { Check, ArrowRight } = window;
  const tiers = [
    {
      name: "Diagnóstico Express de Fugas",
      price: "Gratis", cadence: "promoción", promo: true,
      ideal: "Clínicas que quieren saber exactamente dónde pierden pacientes antes de invertir más.",
      features: ["Auditoría de WhatsApp, recepción e Instagram", "Loom personalizado con hallazgos (5–10 min)", "Mini informe con 3–5 mejoras accionables", "Sin compromisos adicionales"],
      cta: "Solicitar Diagnóstico Gratis", variant: "outline", featured: false,
    },
    {
      name: "Recepción Inteligente 24/7",
      price: "aprox. 1.500€", cadence: "setup", monthly: "+ 397€ / mes",
      ideal: "Clínicas que quieren automatizar la captación y el seguimiento de pacientes.",
      features: ["Automatización de WhatsApp 24/7", "CRM básico con clasificación de leads", "Seguimiento automático de oportunidades", "Recordatorios de cita y reducción de no-shows", "Recuperación de leads inactivos", "Informe mensual de conversión"],
      cta: "Solicitar información", variant: "solid-dark", featured: true,
    },
    {
      name: "Recepción Inteligente Pro",
      price: "aprox. 2.500€", cadence: "setup", monthly: "+ 597€ / mes",
      ideal: "Clínicas con volumen alto o que quieren un sistema completo.",
      features: ["Todo lo del plan 24/7, más:", "Multi-canal (Instagram DM, formularios, Google)", "Centralización total de comunicación", "Seguimiento post-consulta y reactivación", "Soporte prioritario"],
      cta: "Solicitar información", variant: "outline", featured: false,
    },
  ];
  return (
    <window.Section bg="paper" id="servicios" decor={<window.Decor kind="cross" color="#0F172A" opacity={0.05} style={{ top: "48px", right: "48px" }} />}>
      <window.Reveal style={{ maxWidth: "46rem" }}>
        <Eyebrow surface="light">Servicios</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
          Elige el nivel de sistema que necesita tu clínica.
        </h2>
      </window.Reveal>
      <div className="grid-3 svc" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginTop: "2.75rem", alignItems: "stretch" }}>
        {tiers.map((t, i) => (
          <window.Reveal key={i} delay={i * 90} style={{ display: "flex" }}>
            <Card surface="light" featured={t.featured} padding="1.75rem"
              style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: t.featured ? "-0.75rem" : 0, marginBottom: t.featured ? "-0.75rem" : 0 }}>
              {t.featured && <div style={{ marginBottom: "1rem" }}><Badge variant="featured">Más popular</Badge></div>}
              <h3 style={{ margin: 0, fontSize: "1.1875rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#111827" }}>{t.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", margin: "1rem 0 0.25rem" }}>
                <span style={{ fontSize: t.promo ? "2.25rem" : "2rem", fontWeight: 800, letterSpacing: "-0.03em", color: t.promo ? "#15803D" : "#111827" }}>{t.price}</span>
                <span style={{ fontSize: "0.875rem", color: "#64748B", fontWeight: 500 }}>{t.cadence}</span>
              </div>
              {t.monthly && <div style={{ fontSize: "1.0625rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#111827", marginBottom: "0.25rem" }}>{t.monthly}</div>}
              <p style={{ margin: "0.75rem 0 1.5rem", fontSize: "0.875rem", lineHeight: 1.55, color: "#475569", minHeight: "3.4rem" }}>{t.ideal}</p>
              <ul style={{ listStyle: "none", margin: "0 0 1.75rem", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                {t.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.9rem", lineHeight: 1.45, color: f.endsWith("más:") ? "#94A3B8" : "#334155", fontWeight: f.endsWith("más:") ? 600 : 400 }}>
                    {!f.endsWith("más:") && <span style={{ flex: "none", marginTop: "1px", color: "#15803D" }}><Check size={17} strokeWidth={2.5} /></span>}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={t.variant} surface="light" size="md" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={t.featured ? <ArrowRight size={16} /> : null} style={{ width: "100%" }}>{t.cta}</Button>
            </Card>
          </window.Reveal>
        ))}
      </div>
    </window.Section>
  );
}
window.Services = Services;
