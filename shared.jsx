// Shared layout helpers for the landing kit.

function Section({ bg = "carbon", children, id, style = {}, decor = null }) {
  const bgs = { carbon: "#111827", steel: "#1E293B", paper: "#F8FAFC" };
  return (
    <section
      id={id}
      data-screen-label={id}
      style={{ background: bgs[bg], padding: "clamp(3.5rem, 7vw, 6rem) 1.5rem", position: "relative", overflow: "hidden", ...style }}
    >
      {decor}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>{children}</div>
    </section>
  );
}

// Fade-in + slide-up on scroll into view. Base state is VISIBLE (the end state) so
// above-the-fold content, reduced-motion, print and export always paint. Only elements
// confirmed below the fold at mount are hidden (decided in useLayoutEffect, before paint)
// and then animated in by an IntersectionObserver.
function Reveal({ children, delay = 0, style = {}, as = "div" }) {
  const ref = React.useRef(null);
  const [hidden, setHidden] = React.useState(false);
  const useIso = React.useLayoutEffect || React.useEffect;
  useIso(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // stay visible, no animation
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight || 800;
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.9) return; // already in view at mount -> stay visible
    setHidden(true); // below the fold: hide now (pre-paint), animate in on scroll
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHidden(false); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    const t = setTimeout(() => { setHidden(false); io.disconnect(); }, 2500); // safety net
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(16px)" : "translateY(0)",
        transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ---- Asset resolver ----------------------------------------------------------
// In the live kit, images load via relative paths. In the bundled standalone build,
// super_inline_html exposes inlined data-URIs on window.__resources keyed by the
// data-resource-id of each <meta name="ext-resource-dependency">. One resolver, both builds.
window.ASSETS = {
  logoWhite: "assets/logos/oltra-logo-white.png",
  markWhite: "assets/logos/oltra-mark-white.png",
  markNavy: "assets/logos/oltra-mark.png",
};
window.assetUrl = (k) => (window.__resources && window.__resources[k]) || window.ASSETS[k];

// ---- Decorative background SVGs ----------------------------------------------
// Very subtle line motifs for dark sections. Parent must be position:relative + overflow:hidden;
// these sit at z-index:0, opacity ~0.05, and never intercept clicks.
function Decor({ kind, style = {}, opacity = 0.05, color = "#FFFFFF" }) {
  const common = { position: "absolute", zIndex: 0, opacity, pointerEvents: "none", ...style };
  if (kind === "molar") {
    return (
      <svg width="220" height="220" viewBox="0 0 100 100" fill="none" style={common} aria-hidden="true">
        <path d="M30 15 C20 15 10 25 12 38 L18 70 C19 76 24 80 30 80 C34 80 37 77 40 72 C43 77 46 80 50 80 C54 80 57 77 60 72 C63 77 66 80 70 80 C76 80 81 76 82 70 L88 38 C90 25 80 15 70 15 C64 15 58 19 50 19 C42 19 36 15 30 15Z" stroke={color} strokeWidth="2" />
        <path d="M50 19 L50 50" stroke={color} strokeWidth="1.5" />
        <path d="M30 15 C35 25 40 30 50 30 C60 30 65 25 70 15" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "cross") {
    return (
      <svg width="120" height="120" viewBox="0 0 60 60" fill="none" style={common} aria-hidden="true">
        <rect x="22" y="8" width="16" height="44" rx="3" stroke={color} strokeWidth="2" />
        <rect x="8" y="22" width="44" height="16" rx="3" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "ekg") {
    return (
      <svg width="300" height="80" viewBox="0 0 300 80" fill="none" style={common} aria-hidden="true">
        <polyline points="0,40 60,40 75,10 85,70 95,20 110,40 300,40" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "ring") {
    // Echoes the logo mark — a broken ring with the accent tick.
    return (
      <svg width="400" height="400" viewBox="0 0 100 100" fill="none" style={common} aria-hidden="true">
        <path d="M50 8 a42 42 0 1 1 -0.1 0" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <rect x="46.5" y="44" width="7" height="6" rx="1" fill={color} />
      </svg>
    );
  }
  if (kind === "tooth") {
    // Single incisor outline, two roots.
    return (
      <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={common} aria-hidden="true">
        <path d="M50 14 C36 14 24 22 24 40 C24 56 30 76 36 86 C39 91 45 89 46 82 L48 58 C48 54 52 54 52 58 L54 82 C55 89 61 91 64 86 C70 76 76 56 76 40 C76 22 64 14 50 14 Z" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "implant") {
    // Stylized dental implant: crown + threaded post tapering to a point.
    return (
      <svg width="150" height="190" viewBox="0 0 100 130" fill="none" style={common} aria-hidden="true">
        <path d="M34 32 C34 18 66 18 66 32 L61 44 L39 44 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M43 44 L43 92 M57 44 L57 92" stroke={color} strokeWidth="2" />
        <path d="M43 52 L57 56 M43 60 L57 64 M43 68 L57 72 M43 76 L57 80 M43 84 L57 88" stroke={color} strokeWidth="1.5" />
        <path d="M43 92 L50 104 L57 92" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "arch") {
    // Dental arch with bracket ticks (aligner / smile line).
    return (
      <svg width="320" height="200" viewBox="0 0 160 100" fill="none" style={common} aria-hidden="true">
        <path d="M12 26 C12 70 42 92 80 92 C118 92 148 70 148 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 40 l-7 -5 M40 58 l-6 -7 M66 70 l-3 -8 M94 70 l3 -8 M120 58 l6 -7 M138 40 l7 -5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

// ---- EmailJS helper ----------------------------------------------------------
// Lead-magnet forms send the resource via EmailJS. Fill these with your real keys.
// While they hold the PLACEHOLDER_ values, the form runs in demo mode (simulated success)
// so the UI is testable without a backend. Replace all four to go live.
window.EMAILJS = {
  PUBLIC_KEY: "PLACEHOLDER_PUBLIC_KEY",   // Raz: tu Public Key de EmailJS
  SERVICE_ID: "PLACEHOLDER_SERVICE_ID",   // Raz: tu Service ID
  TEMPLATE_5_FUGAS: "PLACEHOLDER_TEMPLATE_5FUGAS",     // Raz: template del PDF "5 fugas"
  TEMPLATE_PLANTILLAS: "PLACEHOLDER_TEMPLATE_PLANTILLAS", // Raz: template "15 plantillas"
};
window.sendLeadMagnet = async function ({ email, templateId, downloadLink, resourceName }) {
  const cfg = window.EMAILJS;
  const isDemo = !window.emailjs ||
    cfg.PUBLIC_KEY.startsWith("PLACEHOLDER") ||
    cfg.SERVICE_ID.startsWith("PLACEHOLDER") ||
    (templateId || "").startsWith("PLACEHOLDER");
  if (isDemo) {
    // Demo mode: simulate a network round-trip, no real email sent.
    await new Promise((r) => setTimeout(r, 900));
    console.info("[Oltra] EmailJS en modo demo — configura window.EMAILJS para enviar de verdad.", { email, resourceName });
    return { demo: true };
  }
  try { window.emailjs.init(cfg.PUBLIC_KEY); } catch (e) {}
  return window.emailjs.send(cfg.SERVICE_ID, templateId, {
    to_email: email,
    to_name: email.split("@")[0],
    download_link: downloadLink,
    resource_name: resourceName,
    from_name: "Oltra Systems",
  });
};

window.Section = Section;
window.Reveal = Reveal;
window.Decor = Decor;
window.CALENDLY = "https://calendly.com/contacto-oltrasystems/30min";
