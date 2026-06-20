// CAMBIO 7 — FAQ acordeón (solo una abierta a la vez).
function Faq() {
  const { Eyebrow } = window.OltraSystemsDesignSystem_36063f;
  const items = [
    { q: "¿En qué se diferencia Oltra Systems de una agencia de marketing normal?",
      a: "Una agencia de marketing te genera visibilidad. Nosotros te generamos pacientes que pagan. No hacemos publicaciones de Instagram ni gestionamos tu comunidad. Implementamos el sistema que responde, hace seguimiento y convierte a los leads que ya llegan a tu clínica." },
    { q: "¿Tengo que contratar publicidad para que esto funcione?",
      a: "No. La mayoría de clínicas ya reciben leads por WhatsApp, Instagram, Google o formularios web. El problema es que esos leads no se convierten bien. Empezamos ordenando eso. La publicidad es una fase posterior si la necesitas." },
    { q: "¿Qué incluye exactamente el Diagnóstico Express de 17€?",
      a: "Analizamos tu WhatsApp, recepción, formularios e Instagram. Detectamos las fugas concretas. Recibes un Loom personalizado de 5–10 minutos con los hallazgos y un mini informe con 3–5 mejoras accionables. En 48–72h. Sin compromisos." },
    { q: "¿Cuánto tiempo tarda en implementarse el sistema?",
      a: "El sistema básico está operativo en 2–3 semanas. No necesitas contratar más personal ni cambiar toda tu operativa. Se integra sobre lo que ya tienes." },
    { q: "¿Necesito tener conocimientos técnicos o contratar a alguien de IT?",
      a: "No. Nos encargamos de toda la configuración. Solo necesitamos acceso a tu WhatsApp Business y un rato de onboarding contigo o tu coordinadora. El día a día no cambia para tu equipo." },
    { q: "¿Qué pasa si no noto resultados?",
      a: "El Diagnóstico Express te muestra exactamente qué está fallando antes de invertir en el servicio mensual. Si después de arrancar el sistema no ves mejora en la conversión de leads, lo revisamos y ajustamos. Trabajamos orientados a resultados, no a horas." },
    { q: "¿Para qué tipo de clínicas es Oltra Systems?",
      a: "Para clínicas dentales privadas con tratamientos de valor medio-alto: implantes, Invisalign, ortodoncia, estética dental, rehabilitación oral. Si recibes leads pero no los conviertes bien, o si tu recepción está saturada y hay no-shows frecuentes, encajas." },
    { q: "¿Puedo empezar solo con el Diagnóstico Express sin contratar nada más?",
      a: "Sí. El Diagnóstico Express es un producto independiente por 17€. No hay compromiso adicional. Si después quieres implementar el sistema, lo hablamos. Pero muchas clínicas ya sacan valor solo del diagnóstico." },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <window.Section bg="paper" id="faq" decor={<window.Decor kind="ekg" color="#0F172A" opacity={0.04} style={{ bottom: "8%", left: "0", width: "100%" }} />}>
      <window.Reveal style={{ maxWidth: "46rem" }}>
        <Eyebrow surface="light">Preguntas frecuentes</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
          Lo que nos preguntan los directores de clínica
        </h2>
      </window.Reveal>

      <window.Reveal delay={100}>
        <div style={{ marginTop: "2.25rem", maxWidth: "820px", borderTop: "1px solid #E2E8F0" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid #E2E8F0" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem",
                    fontFamily: "var(--font-sans)", fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#111827",
                    background: "transparent", border: "none", cursor: "pointer", padding: "1.25rem 0" }}>
                  <span>{it.q}</span>
                  <span style={{ flex: "none", width: 26, height: 26, position: "relative", color: isOpen ? "#111827" : "#64748B", transition: "color 140ms ease" }}>
                    {/* + that rotates to × */}
                    <span style={{ position: "absolute", top: "50%", left: "50%", width: 16, height: 2, background: "currentColor", borderRadius: 2, transform: "translate(-50%,-50%)" }} />
                    <span style={{ position: "absolute", top: "50%", left: "50%", width: 16, height: 2, background: "currentColor", borderRadius: 2, transform: `translate(-50%,-50%) rotate(${isOpen ? 0 : 90}deg)`, transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)" }} />
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: isOpen ? "320px" : "0", opacity: isOpen ? 1 : 0, transition: "max-height 300ms cubic-bezier(0.16,1,0.3,1), opacity 240ms ease" }}>
                  <p style={{ margin: "0 0 1.5rem", paddingRight: "3rem", fontSize: "0.9375rem", lineHeight: 1.65, color: "#475569", maxWidth: "62ch" }}>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.Faq = Faq;
