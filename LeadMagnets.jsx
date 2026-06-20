// CAMBIO 4 + 5 — Lead magnets with EmailJS (shared form).

// Reusable email-capture form. Validates, calls window.sendLeadMagnet, shows states.
function LeadForm({ templateId, downloadLink, resourceName, surface = "dark", buttonLabel, note }) {
  const { ArrowRight, Check } = window;
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | loading | success | error
  const [msg, setMsg] = React.useState("");
  const dark = surface !== "light";

  const valid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const submit = async (ev) => {
    ev.preventDefault();
    if (!email.trim()) { setState("error"); setMsg("Introduce tu email de clínica"); return; }
    if (!valid(email)) { setState("error"); setMsg("Ese email no parece válido"); return; }
    setState("loading");
    try {
      await window.sendLeadMagnet({ email, templateId, downloadLink, resourceName });
      setState("success");
    } catch (e) {
      setState("error");
      setMsg("Algo ha fallado. Escríbenos a contacto@oltrasystems.com");
    }
  };

  if (state === "success") {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.125rem 1.25rem", borderRadius: 12,
        background: dark ? "rgba(21,128,61,0.12)" : "rgba(21,128,61,0.08)", border: "1px solid rgba(21,128,61,0.3)" }}>
        <span style={{ flex: "none", width: 26, height: 26, borderRadius: 999, background: "rgba(21,128,61,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#22C55E", marginTop: 1 }}>
          <Check size={15} strokeWidth={3} />
        </span>
        <div>
          <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: dark ? "#86EFAC" : "#15803D" }}>Revisa tu email</div>
          <div style={{ fontSize: "0.8125rem", color: dark ? "#94A3B8" : "#475569", marginTop: "0.2rem" }}>Te hemos enviado el recurso a {email}.</div>
        </div>
      </div>
    );
  }

  const labelColor = dark ? "#CBD5E1" : "#475569";
  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      <div className="lm-row" style={{ display: "flex", gap: "0.625rem" }}>
        <input
          type="email" value={email} placeholder="Tu email de clínica"
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500,
            padding: "0.8rem 0.95rem", borderRadius: 8, outline: "none",
            background: dark ? "rgba(255,255,255,0.05)" : "#fff",
            border: "1.5px solid " + (state === "error" ? "#EF4444" : (dark ? "rgba(148,163,184,0.22)" : "#E2E8F0")),
            color: dark ? "#fff" : "#111827" }}
        />
        <button type="submit" disabled={state === "loading"}
          style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.45rem",
            fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 600, whiteSpace: "nowrap",
            padding: "0.8rem 1.25rem", borderRadius: 8, cursor: state === "loading" ? "wait" : "pointer",
            background: dark ? "#fff" : "#111827", color: dark ? "#111827" : "#fff", border: "none",
            opacity: state === "loading" ? 0.7 : 1, transition: "opacity 140ms ease" }}>
          {state === "loading" ? (
            <>
              <span className="lm-spin" style={{ width: 15, height: 15, borderRadius: 999, border: "2px solid " + (dark ? "rgba(17,24,39,0.25)" : "rgba(255,255,255,0.35)"), borderTopColor: dark ? "#111827" : "#fff", display: "inline-block" }} />
              Enviando…
            </>
          ) : (
            <>{buttonLabel} <ArrowRight size={16} /></>
          )}
        </button>
      </div>
      {state === "error" && <span style={{ fontSize: "0.8125rem", color: "#F87171", fontWeight: 500 }}>{msg}</span>}
      {note && <span style={{ fontSize: "0.75rem", color: dark ? "#64748B" : "#94A3B8" }}>{note}</span>}
    </form>
  );
}
window.LeadForm = LeadForm;

// CAMBIO 4 — "Las 5 fugas" presentation lead magnet.
function FiveLeaks() {
  const { Eyebrow } = window.OltraSystemsDesignSystem_36063f;
  const { TrendingDown, Clock, Inbox, CalendarX, Settings } = window;
  const leaks = [
    { icon: <Clock size={15} />, t: "Respuesta tardía" },
    { icon: <Inbox size={15} />, t: "Sin seguimiento" },
    { icon: <CalendarX size={15} />, t: "No-shows" },
    { icon: <Settings size={15} />, t: "Canales dispersos" },
    { icon: <TrendingDown size={15} />, t: "Presupuestos fríos" },
  ];
  return (
    <window.Section bg="carbon" id="cinco-fugas" decor={<window.Decor kind="cross" opacity={0.05} style={{ bottom: "40px", left: "40px" }} />}>
      <div className="lm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }}>
        {/* Cover mock */}
        <window.Reveal>
          <div style={{ position: "relative", background: "#0F172A", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 16, padding: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}>
            <img src={window.assetUrl("logoWhite")} alt="Oltra Systems" style={{ height: 16, width: "auto", opacity: 0.8, marginBottom: "1.5rem" }} />
            <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748B", marginBottom: "0.75rem" }}>Guía · PDF</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem" }}>Las 5 fugas que vacían la agenda de tu clínica</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {leaks.map((l, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.8125rem", color: "#CBD5E1" }}>
                  <span style={{ width: 24, height: 24, borderRadius: 7, background: "rgba(148,163,184,0.10)", border: "1px solid rgba(148,163,184,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94A3B8", flex: "none" }}>{l.icon}</span>
                  <span style={{ color: "#64748B", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span> {l.t}
                </div>
              ))}
            </div>
          </div>
        </window.Reveal>
        {/* Copy + form */}
        <window.Reveal delay={100}>
          <Eyebrow>Recurso gratuito</Eyebrow>
          <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.625rem,3vw,2.25rem)", fontWeight: 700, lineHeight: 1.14, letterSpacing: "-0.025em", color: "#fff" }}>
            Descubre dónde se escapan tus pacientes
          </h2>
          <p style={{ margin: "1rem 0 1.75rem", fontSize: "1.0625rem", lineHeight: 1.6, color: "#94A3B8", maxWidth: "32rem" }}>
            La presentación con las 5 fugas más comunes en clínicas dentales privadas — y cómo cerrarlas sin contratar más personal.
          </p>
          <LeadForm
            surface="dark"
            templateId={window.EMAILJS.TEMPLATE_5_FUGAS}
            downloadLink="https://oltrasystems.com/recursos/5-fugas-dentales.pdf"
            resourceName="Las 5 fugas — presentación"
            buttonLabel="Descargar presentación gratis"
            note="Solo valor. Sin spam. Puedes darte de baja cuando quieras."
          />
        </window.Reveal>
      </div>
    </window.Section>
  );
}
window.FiveLeaks = FiveLeaks;

// CAMBIO 5 — WhatsApp templates lead magnet (light section).
function WhatsappTemplates() {
  const { Eyebrow } = window.OltraSystemsDesignSystem_36063f;
  const cards = [
    { tag: "Primera respuesta", body: "Hola [Nombre] 👋 Gracias por contactar con [Clínica]. Te respondemos enseguida. ¿Nos puedes decir qué tratamiento te interesa?" },
    { tag: "Recordatorio de cita", body: "Hola [Nombre], te recordamos tu cita mañana [Día] a las [Hora] en [Clínica]. Si necesitas cambiarla, escríbenos. ¡Hasta pronto!" },
    { tag: "Recuperación de no-show", body: "Hola [Nombre], vimos que no pudiste venir ayer. ¿Te viene bien otro día esta semana para la valoración? Tenemos huecos disponibles." },
  ];
  return (
    <window.Section bg="paper" id="plantillas-whatsapp" decor={<window.Decor kind="implant" color="#0F172A" opacity={0.04} style={{ top: "30px", right: "40px" }} />}>
      <window.Reveal style={{ maxWidth: "44rem" }}>
        <Eyebrow surface="light">Recurso gratuito</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.75rem,3.2vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#111827" }}>
          15 plantillas de WhatsApp listas para tu clínica dental
        </h2>
        <p style={{ margin: "1rem 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "#475569", maxWidth: "40rem" }}>
          Respuesta rápida, seguimiento de presupuesto, recordatorio de cita, reactivación de no-show y más. Solo copia, pega y personaliza.
        </p>
      </window.Reveal>

      <div style={{ marginTop: "2.25rem", fontSize: "0.875rem", fontWeight: 600, color: "#64748B" }}>Previsualiza 3 de las 15 plantillas:</div>
      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginTop: "1rem" }}>
        {cards.map((c, i) => (
          <window.Reveal key={i} delay={i * 80}>
            <div style={{ height: "100%", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ padding: "0.7rem 1rem", borderBottom: "1px solid #F1F5F9", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#15803D", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: "#22C55E" }} /> {c.tag}
              </div>
              <pre style={{ margin: 0, padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", lineHeight: 1.55, color: "#334155", whiteSpace: "pre-wrap", background: "#F8FAFC" }}>{c.body}</pre>
            </div>
          </window.Reveal>
        ))}
      </div>

      <window.Reveal delay={120}>
        <div style={{ marginTop: "2rem", maxWidth: "30rem" }}>
          <LeadForm
            surface="light"
            templateId={window.EMAILJS.TEMPLATE_PLANTILLAS}
            downloadLink="https://oltrasystems.com/recursos/15-plantillas-whatsapp.pdf"
            resourceName="15 plantillas de WhatsApp"
            buttonLabel="Recibir las 15 plantillas gratis"
            note="Sin spam. Sin compromisos."
          />
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.WhatsappTemplates = WhatsappTemplates;
