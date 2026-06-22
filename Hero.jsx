// Hero — headline, subhead, CTAs, abstract metric dashboard.
function Hero() {
  const { Button, Card, Stat } = window.OltraSystemsDesignSystem_36063f;
  const { MessageCircle, CalendarX, TrendingDown, ArrowRight, BarChart } = window;
  return (
    <section id="top" data-screen-label="hero" style={{ background: "#111827", position: "relative", overflow: "hidden" }}>
      {/* subtle line decorations — no glow, flat carbon background */}
      <window.Decor kind="molar" opacity={0.035} style={{ top: "60px", left: "-70px" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(3.5rem,7vw,6.5rem) 1.5rem", position: "relative", zIndex: 1 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
          <window.Reveal>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "1.25rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#3E5573" }} />
              Sistemas para clínicas dentales
            </span>
            <h1 style={{ margin: 0, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", color: "#fff" }}>
              Tu clínica dental pierde pacientes cada día.
              <span style={{ display: "block", color: "#94A3B8" }}>No por falta de leads. Por falta de sistema.</span>
            </h1>
            <p style={{ margin: "1.5rem 0 0", fontSize: "clamp(1rem,1.4vw,1.1875rem)", lineHeight: 1.6, color: "#CBD5E1", maxWidth: "34rem" }}>
              En Oltra Systems automatizamos la respuesta, el seguimiento y la conversión de pacientes para clínicas dentales privadas. Más pacientes. Menos caos operativo.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem", alignItems: "center" }}>
              <Button variant="primary" size="lg" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={18} />}>Solicitar Diagnóstico Express — 17€</Button>
              <Button variant="ghost" surface="dark" href="#proceso" iconRight={<ArrowRight size={16} />}>Ver cómo funciona</Button>
            </div>
          </window.Reveal>

          <window.Reveal delay={120}>
            <Card surface="light" padding="1.5rem" style={{ background: "#FFFFFF", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 24px 60px -20px rgba(15,23,42,0.35)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: 600, color: "#64748B" }}>
                  <BarChart size={16} color="#94A3B8" /> Panel de la clínica
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.6875rem", fontWeight: 600, color: "#DC2626", background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.20)", padding: "0.25rem 0.5rem", borderRadius: 999 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: "#DC2626" }} /> SIN SISTEMA
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                {[
                  { icon: <MessageCircle size={18} />, v: "12", l: "leads sin responder" },
                  { icon: <CalendarX size={18} />, v: "3", l: "no-shows esta semana" },
                ].map((m, i) => (
                  <div key={i} style={{ background: "#F8FAFC", border: "1px solid rgba(15,23,42,0.06)", borderRadius: 12, padding: "1rem" }}>
                    <Stat value={m.v} label={m.l} tone="danger" surface="light" icon={m.icon} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "0.875rem", background: "#FEF2F2", border: "1px solid rgba(220,38,38,0.16)", borderRadius: 12, padding: "1.125rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "1.875rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#DC2626", lineHeight: 1 }}>€4.200</div>
                  <div style={{ fontSize: "0.8125rem", color: "#64748B", marginTop: "0.375rem" }}>en oportunidades perdidas</div>
                </div>
                <TrendingDown size={40} color="#FCA5A5" strokeWidth={1.75} />
              </div>
              {/* mini sparkbars */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 40, marginTop: "1rem", padding: "0 2px" }}>
                {[40, 55, 38, 62, 30, 48, 26, 58, 22, 44, 18, 34].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i % 2 ? "rgba(15,23,42,0.10)" : "rgba(15,23,42,0.20)", borderRadius: 2 }} />
                ))}
              </div>
            </Card>
          </window.Reveal>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
