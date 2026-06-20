// Final CTA + Footer.
function FinalCta() {
  const { Button } = window.OltraSystemsDesignSystem_36063f;
  const { ArrowRight } = window;
  return (
    <section id="cta" data-screen-label="final-cta" style={{ background: "#111827", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(4rem,8vw,7rem) 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <window.Reveal>
          <img src={window.assetUrl("markWhite")} alt="" style={{ height: 44, width: "auto", margin: "0 auto 2rem", display: "block", opacity: 0.9 }} />
          <h2 style={{ margin: 0, fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
            Empieza por saber cuánto estás perdiendo.
          </h2>
          <p style={{ margin: "1.5rem auto 0", maxWidth: "40rem", fontSize: "1.125rem", lineHeight: 1.6, color: "#CBD5E1" }}>
            El Diagnóstico Express de Fugas Dentales cuesta 17€ y te muestra exactamente dónde pierdes pacientes, tiempo y dinero. Sin compromisos. Sin humo.
          </p>
          <div style={{ marginTop: "2.25rem" }}>
            <Button variant="primary" size="lg" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={18} />}>Solicitar Diagnóstico Express — 17€</Button>
          </div>
          <p style={{ margin: "1.25rem 0 0", fontSize: "0.875rem", color: "#94A3B8" }}>
            Resultado en 48–72h · Loom personalizado · Mini informe accionable
          </p>
        </window.Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { Instagram } = window;
  return (
    <footer style={{ background: "#111827", borderTop: "1px solid rgba(148,163,184,0.10)", padding: "3.5rem 1.5rem 2.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="foot-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(148,163,184,0.10)" }}>
          <div style={{ maxWidth: "22rem" }}>
            <img src={window.assetUrl("logoWhite")} alt="Oltra Systems" style={{ height: 24, width: "auto", marginBottom: "1rem" }} />
            <p style={{ margin: 0, fontSize: "0.9375rem", color: "#94A3B8", lineHeight: 1.5 }}>Más pacientes. Menos caos operativo.</p>
          </div>
          <div style={{ display: "flex", gap: "3.5rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748B", marginBottom: "0.875rem" }}>Contacto</div>
              <a href="mailto:contacto@oltrasystems.com" style={{ display: "block", fontSize: "0.9375rem", color: "#CBD5E1", textDecoration: "none", marginBottom: "0.5rem" }}>contacto@oltrasystems.com</a>
              <a href="https://oltrasystems.com" style={{ display: "block", fontSize: "0.9375rem", color: "#CBD5E1", textDecoration: "none" }}>oltrasystems.com</a>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748B", marginBottom: "0.875rem" }}>Social</div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem", color: "#CBD5E1", textDecoration: "none" }}>
                <Instagram size={17} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "1.75rem", fontSize: "0.8125rem", color: "#64748B" }}>
          © 2025 Oltra Systems. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
window.FinalCta = FinalCta;
window.Footer = Footer;
