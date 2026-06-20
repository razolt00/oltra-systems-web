// CAMBIO 3 — Mini demo CRM: leads list · WhatsApp conversation · lead info.
function CrmDemo() {
  const { Eyebrow, Button } = window.OltraSystemsDesignSystem_36063f;
  const { MessageCircle, Bell, Calendar, ArrowRight, Zap, Instagram } = window;

  // Status badge palette
  const STATUS = {
    seguimiento: { label: "En seguimiento", bg: "rgba(21,128,61,0.15)", fg: "#4ADE80", dot: "#22C55E" },
    citado: { label: "Cita agendada", bg: "rgba(37,99,235,0.15)", fg: "#60A5FA", dot: "#3B82F6" },
    nuevo: { label: "Nuevo — sin leer", bg: "rgba(180,83,9,0.18)", fg: "#FBBF24", dot: "#F59E0B" },
    noshow: { label: "No-show", bg: "rgba(185,28,28,0.16)", fg: "#F87171", dot: "#EF4444" },
    convertida: { label: "Convertida", bg: "rgba(148,163,184,0.16)", fg: "#CBD5E1", dot: "#94A3B8" },
  };

  const leads = [
    {
      id: 1, name: "María García", treatment: "Invisalign", status: "seguimiento", channel: "WhatsApp",
      last: "Hace 2 h", filters: ["seguimiento"],
      chat: [
        { from: "in", t: "Hola, ¿cuánto cuesta el tratamiento de Invisalign?" },
        { from: "out", auto: "⚡ Respuesta automática · 0 min", t: "¡Hola María! Gracias por escribir a Clínica Dental Sonría 😊 El precio depende de tu caso. ¿Te viene bien una valoración gratuita esta semana?" },
        { from: "in", t: "Sí, perfecto" },
        { from: "out", auto: "⚡ Seguimiento automático · día 2", t: "María, te guardo hueco el jueves a las 17:00. ¿Lo confirmo?" },
      ],
    },
    {
      id: 2, name: "Carlos Ruiz", treatment: "Implante dental", status: "citado", channel: "Google",
      last: "Ayer", filters: ["citado"],
      chat: [
        { from: "in", t: "Quería información sobre implantes" },
        { from: "out", auto: "⚡ Respuesta automática · 0 min", t: "¡Hola Carlos! Te llamamos para resolver tus dudas. ¿Prefieres mañana o tarde?" },
        { from: "in", t: "Por la tarde mejor" },
        { from: "out", t: "Perfecto, cita confirmada para el martes a las 18:30. ¡Te esperamos!" },
      ],
    },
    {
      id: 3, name: "Ana Martínez", treatment: "Ortodoncia", status: "nuevo", channel: "Instagram",
      last: "Hace 6 min", filters: ["nuevo"],
      chat: [
        { from: "in", t: "Hola! Vi vuestro perfil, ¿hacéis ortodoncia para adultos?" },
        { from: "out", auto: "⚡ Respuesta automática · 0 min", t: "¡Hola Ana! Sí, tratamos ortodoncia en adultos. ¿Quieres que te contemos las opciones en una valoración sin compromiso?" },
      ],
    },
    {
      id: 4, name: "Luis Torres", treatment: "Blanqueamiento", status: "noshow", channel: "WhatsApp",
      last: "Hace 3 días", filters: ["seguimiento"],
      chat: [
        { from: "out", t: "Hola Luis, te esperábamos hoy para el blanqueamiento y no hemos podido verte." },
        { from: "out", auto: "⚡ Recordatorio automático", t: "¿Te viene bien reprogramar para esta semana? Tenemos huecos el viernes." },
        { from: "in", t: "Uy, se me pasó. El viernes me va bien" },
      ],
    },
    {
      id: 5, name: "Rosa Pons", treatment: "Estética dental", status: "convertida", channel: "Formulario web",
      last: "Hace 1 semana", filters: ["citado"],
      chat: [
        { from: "in", t: "Me gustaría mejorar mi sonrisa para una boda" },
        { from: "out", auto: "⚡ Respuesta automática · 0 min", t: "¡Hola Rosa! Te ayudamos. Agendamos una valoración y diseñamos tu sonrisa 😍" },
        { from: "out", auto: "⚡ Seguimiento post-consulta", t: "Rosa, ¡gracias por confiar en nosotros! Tu tratamiento ya está en marcha." },
        { from: "in", t: "Estoy encantada, gracias!" },
      ],
    },
  ];

  const FILTERS = [
    { key: "todos", label: "Todos" },
    { key: "nuevo", label: "Nuevos" },
    { key: "seguimiento", label: "Seguimiento" },
    { key: "citado", label: "Citados" },
  ];

  const [filter, setFilter] = React.useState("todos");
  const [selId, setSelId] = React.useState(1);
  const visible = filter === "todos" ? leads : leads.filter((l) => l.filters.includes(filter));
  const sel = leads.find((l) => l.id === selId) || leads[0];
  const channelIcon = (c) => c === "Instagram" ? <Instagram size={13} /> : <MessageCircle size={13} />;

  return (
    <window.Section bg="carbon" id="demo-crm">
      <window.Reveal style={{ maxWidth: "46rem" }}>
        <Eyebrow>Demo en vivo</Eyebrow>
        <h2 style={{ margin: "0.875rem 0 0", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em", color: "#fff" }}>
          Así ve tu equipo cada paciente que llega
        </h2>
        <p style={{ margin: "1rem 0 0", fontSize: "1.0625rem", lineHeight: 1.6, color: "#94A3B8", maxWidth: "40rem" }}>
          Un panel centralizado donde cada lead tiene su estado, su conversación y su próximo paso automático.
        </p>
      </window.Reveal>

      <window.Reveal delay={100}>
        <div className="crm-shell" style={{ marginTop: "2.5rem", background: "#0F172A", border: "1px solid rgba(148,163,184,0.14)", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}>
          <div className="crm-grid" style={{ display: "grid", gridTemplateColumns: "240px 1fr 200px", minHeight: "440px" }}>

            {/* Column 1 — leads list */}
            <div className="crm-col-leads" style={{ background: "#1E293B", borderRight: "1px solid rgba(148,163,184,0.12)", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "1rem 1.125rem", borderBottom: "1px solid rgba(148,163,184,0.10)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>Panel de leads</span>
                  <img src={window.assetUrl("logoWhite")} alt="Oltra Systems" style={{ height: 11, width: "auto", opacity: 0.6 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {FILTERS.map((f) => (
                    <button key={f.key} onClick={() => setFilter(f.key)}
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.6875rem", fontWeight: 600, padding: "0.3rem 0.55rem", borderRadius: 999, cursor: "pointer",
                        border: "1px solid " + (filter === f.key ? "rgba(255,255,255,0.9)" : "rgba(148,163,184,0.22)"),
                        background: filter === f.key ? "#fff" : "transparent",
                        color: filter === f.key ? "#0F172A" : "#94A3B8", transition: "all 140ms ease" }}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                {visible.map((l) => {
                  const st = STATUS[l.status];
                  const active = l.id === selId;
                  return (
                    <button key={l.id} onClick={() => setSelId(l.id)}
                      style={{ width: "100%", textAlign: "left", display: "block", padding: "0.875rem 1.125rem", cursor: "pointer",
                        background: active ? "rgba(148,163,184,0.10)" : "transparent",
                        borderLeft: "2px solid " + (active ? st.dot : "transparent"),
                        borderBottom: "1px solid rgba(148,163,184,0.07)", border: "none", borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "rgba(148,163,184,0.07)", transition: "background 140ms ease" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                        <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#fff" }}>{l.name}</span>
                        <span style={{ width: 7, height: 7, borderRadius: 999, background: st.dot, flex: "none" }} />
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.45rem" }}>{l.treatment}</div>
                      <span style={{ display: "inline-block", fontSize: "0.625rem", fontWeight: 600, padding: "0.18rem 0.45rem", borderRadius: 999, background: st.bg, color: st.fg }}>{st.label}</span>
                    </button>
                  );
                })}
                {visible.length === 0 && <div style={{ padding: "1.5rem 1.125rem", fontSize: "0.8125rem", color: "#64748B" }}>Sin leads en este filtro.</div>}
              </div>
            </div>

            {/* Column 2 — WhatsApp-style conversation */}
            <div className="crm-col-chat" style={{ background: "#0F172A", display: "flex", flexDirection: "column", minWidth: 0 }}>
              <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(148,163,184,0.10)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>{sel.name}</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.75rem", color: "#94A3B8", marginTop: "0.2rem" }}>
                    {channelIcon(sel.channel)} Llegó por {sel.channel}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "#0F172A", background: "#fff", border: "none", borderRadius: 8, padding: "0.45rem 0.7rem", cursor: "pointer" }}>
                    Agendar cita
                  </button>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "#CBD5E1", background: "transparent", border: "1px solid rgba(148,163,184,0.28)", borderRadius: 8, padding: "0.45rem 0.7rem", cursor: "pointer" }}>
                    <Bell size={13} /> Recordatorio
                  </button>
                </div>
              </div>
              <div className="crm-chat-body" style={{ flex: 1, overflowY: "auto", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", background: "linear-gradient(180deg, #0F172A, #0C1322)" }}>
                {sel.chat.map((m, i) => (
                  <div key={i} style={{ alignSelf: m.from === "out" ? "flex-end" : "flex-start", maxWidth: "78%" }}>
                    {m.auto && (
                      <div style={{ display: "flex", justifyContent: m.from === "out" ? "flex-end" : "flex-start", marginBottom: "0.25rem" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "#4ADE80", letterSpacing: "0.02em" }}>{m.auto}</span>
                      </div>
                    )}
                    <div style={{
                      fontSize: "0.8125rem", lineHeight: 1.5, padding: "0.625rem 0.8rem", borderRadius: 12,
                      background: m.from === "out" ? "#064E3B" : "#1E293B",
                      color: m.from === "out" ? "#D1FAE5" : "#E2E8F0",
                      borderBottomRightRadius: m.from === "out" ? 3 : 12,
                      borderBottomLeftRadius: m.from === "out" ? 12 : 3,
                    }}>{m.t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — lead info */}
            <div className="crm-col-info" style={{ background: "#1E293B", borderLeft: "1px solid rgba(148,163,184,0.12)", padding: "1.125rem", display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#64748B", marginBottom: "0.5rem" }}>Estado</div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 600, padding: "0.3rem 0.6rem", borderRadius: 999, background: STATUS[sel.status].bg, color: STATUS[sel.status].fg }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: STATUS[sel.status].dot }} /> {STATUS[sel.status].label}
                </span>
              </div>
              {[
                { k: "Interés", v: sel.treatment },
                { k: "Canal de llegada", v: sel.channel },
                { k: "Último contacto", v: sel.last },
              ].map((row, i) => (
                <div key={i}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#64748B", marginBottom: "0.3rem" }}>{row.k}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "#E2E8F0" }}>{row.v}</div>
                </div>
              ))}
              <div style={{ marginTop: "auto", background: "rgba(21,128,61,0.12)", border: "1px solid rgba(21,128,61,0.3)", borderRadius: 10, padding: "0.75rem 0.85rem", display: "flex", gap: "0.5rem" }}>
                <Zap size={15} color="#4ADE80" style={{ flex: "none", marginTop: 1 }} />
                <span style={{ fontSize: "0.75rem", lineHeight: 1.4, color: "#86EFAC", fontWeight: 500 }}>Auto-recordatorio programado para hoy</span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ display: "flex", gap: "2rem", padding: "0.875rem 1.25rem", borderTop: "1px solid rgba(148,163,184,0.12)", background: "#0B1120" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "#F59E0B" }} /> <strong style={{ color: "#fff", fontWeight: 700 }}>4</strong> sin responder
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8125rem", color: "#94A3B8" }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "#22C55E" }} /> <strong style={{ color: "#fff", fontWeight: 700 }}>2</strong> convertidos
            </span>
          </div>
        </div>
      </window.Reveal>

      <window.Reveal delay={140}>
        <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.25rem" }}>
          <p style={{ margin: 0, fontSize: "1.0625rem", fontWeight: 500, fontStyle: "italic", color: "#CBD5E1", maxWidth: "34rem" }}>
            “Todo esto pasa automáticamente. Tu recepcionista no tiene que recordar nada.”
          </p>
          <Button variant="outline" surface="dark" href="#proceso" iconRight={<ArrowRight size={16} />}>Ver cómo funciona el sistema</Button>
        </div>
      </window.Reveal>
    </window.Section>
  );
}
window.CrmDemo = CrmDemo;
