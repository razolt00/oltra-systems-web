// CAMBIO 6 — Autodiagnóstico interactivo (8 preguntas, estado local, sin backend).
function SelfDiagnosis() {
  const { Eyebrow, Button } = window.OltraSystemsDesignSystem_36063f;
  const { ArrowRight, Check, Repeat } = window;

  const QUESTIONS = [
    { q: "¿Respondes a los mensajes de WhatsApp e Instagram en menos de 30 minutos?", a: ["Sí, siempre", "A veces", "No, tardamos horas o días"] },
    { q: "¿Tienes un proceso de seguimiento cuando un lead no responde tras el primer contacto?", a: ["Sí, lo hacemos siempre", "Lo intentamos", "No tenemos seguimiento"] },
    { q: "¿Cuántos no-shows (pacientes que no aparecen a su cita) tienes al mes?", a: ["0–2", "3–5", "Más de 5"] },
    { q: "¿Tienes registrados todos tus leads en alguna herramienta o CRM?", a: ["Sí, todos organizados", "Algunos, no todos", "No, va todo por WhatsApp/papel"] },
    { q: "¿Sabes cuántos leads recibes al mes y cuántos se convierten en pacientes?", a: ["Sí, lo mido", "Aproximadamente", "No tengo esos datos"] },
    { q: "¿Tu recepción tiene guiones o respuestas tipo para situaciones habituales?", a: ["Sí, están definidos", "Algunos", "No, cada uno responde como puede"] },
    { q: "¿Envías recordatorios de cita automáticos a los pacientes?", a: ["Sí, automáticamente", "A veces manualmente", "No enviamos recordatorios"] },
    { q: "¿Tienes alguna automatización activa en WhatsApp, email o CRM?", a: ["Sí, varias", "Alguna básica", "No, todo es manual"] },
  ];

  const RESULTS = [
    { min: 0, max: 6, level: "Clínica con fugas críticas", color: "#EF4444", bg: "rgba(185,28,28,0.14)",
      text: "Tu clínica está perdiendo pacientes y dinero cada semana sin saberlo. Un sistema básico puede cambiar esto en 30 días." },
    { min: 7, max: 11, level: "Hay margen de mejora importante", color: "#F59E0B", bg: "rgba(180,83,9,0.16)",
      text: "Tienes bases, pero hay fugas claras en el seguimiento y la conversión. Podemos ayudarte a cerrarlas." },
    { min: 12, max: 16, level: "Bien, pero puedes optimizar más", color: "#22C55E", bg: "rgba(21,128,61,0.14)",
      text: "Tu sistema funciona, pero hay oportunidades de automatizar y escalar sin esfuerzo manual." },
  ];

  const [step, setStep] = React.useState(0);     // 0..7 questions, 8 = result
  const [score, setScore] = React.useState(0);
  const [anim, setAnim] = React.useState(true);

  const choose = (optIndex) => {
    const points = 2 - optIndex; // A=2, B=1, C=0
    const newScore = score + points;
    setScore(newScore);
    setAnim(false);
    setTimeout(() => { setStep((s) => s + 1); setAnim(true); }, 120);
  };

  const restart = () => { setStep(0); setScore(0); setAnim(true); };

  const isResult = step >= QUESTIONS.length;
  const result = RESULTS.find((r) => score >= r.min && score <= r.max) || RESULTS[0];
  const progress = isResult ? 100 : ((step) / QUESTIONS.length) * 100;

  return (
    <window.Section bg="carbon" id="autodiagnostico" decor={<window.Decor kind="molar" opacity={0.035} style={{ bottom: "20px", right: "-60px" }} />}>
      <window.Reveal style={{ maxWidth: "44rem" }}>
        <Eyebrow>Diagnóstico rápido</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#fff" }}>
          ¿Cómo está tu clínica ahora mismo?
        </h2>
        <p style={{ margin: "1rem 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "#94A3B8", maxWidth: "38rem" }}>
          Responde 8 preguntas y descubre en qué nivel está tu sistema de captación y seguimiento.
        </p>
      </window.Reveal>

      <window.Reveal delay={100}>
        <div style={{ marginTop: "2.5rem", maxWidth: "640px" }}>
          {/* Progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1, height: 6, borderRadius: 999, background: "#334155", overflow: "hidden" }}>
              <div style={{ width: progress + "%", height: "100%", background: "#fff", borderRadius: 999, transition: "width 300ms cubic-bezier(0.16,1,0.3,1)" }} />
            </div>
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#94A3B8", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
              {isResult ? "Completado" : `${step + 1} de ${QUESTIONS.length}`}
            </span>
          </div>

          {/* Question card or result */}
          <div style={{ opacity: anim ? 1 : 0, transform: anim ? "translateY(0)" : "translateY(16px)", transition: "opacity 280ms cubic-bezier(0.16,1,0.3,1), transform 280ms cubic-bezier(0.16,1,0.3,1)" }}>
            {!isResult ? (
              <div style={{ background: "#1E293B", border: "1px solid rgba(148,163,184,0.14)", borderRadius: 16, padding: "1.75rem" }}>
                <h3 style={{ margin: "0 0 1.5rem", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.015em", color: "#fff" }}>
                  {QUESTIONS[step].q}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {QUESTIONS[step].a.map((opt, i) => (
                    <button key={i} onClick={() => choose(i)}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.22)"; e.currentTarget.style.background = "rgba(15,23,42,0.5)"; }}
                      style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "#E2E8F0",
                        padding: "0.95rem 1.125rem", borderRadius: 10, cursor: "pointer",
                        background: "rgba(15,23,42,0.5)", border: "1.5px solid rgba(148,163,184,0.22)", transition: "all 140ms ease" }}>
                      <span style={{ flex: "none", width: 22, height: 22, borderRadius: 999, border: "1.5px solid rgba(148,163,184,0.4)" }} />
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ background: "#1E293B", border: "1px solid rgba(148,163,184,0.14)", borderRadius: 16, padding: "2rem", textAlign: "center" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.4rem 0.8rem", borderRadius: 999, background: result.bg, color: result.color, marginBottom: "1.25rem" }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: result.color }} /> {score} / 16 puntos
                </span>
                <h3 style={{ margin: "0 0 0.875rem", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.15 }}>
                  {result.level}
                </h3>
                <p style={{ margin: "0 auto 1.75rem", maxWidth: "32rem", fontSize: "1.0625rem", lineHeight: 1.6, color: "#CBD5E1" }}>
                  {result.text}
                </p>
                <Button variant="primary" size="lg" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={18} />}>
                  Solicitar Diagnóstico Express — 17€
                </Button>
                <p style={{ margin: "1rem auto 0", maxWidth: "30rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
                  En el diagnóstico vemos exactamente qué está fallando en tu clínica concreta.
                </p>
                <button onClick={restart}
                  style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.45rem", fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#94A3B8", background: "transparent", border: "none", cursor: "pointer" }}>
                  <Repeat size={15} /> Repetir diagnóstico
                </button>
              </div>
            )}
          </div>
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.SelfDiagnosis = SelfDiagnosis;
