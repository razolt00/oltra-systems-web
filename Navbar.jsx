// Navbar — sticky, blurs on scroll. Logo + links + sticky CTA.
function Navbar() {
  const { Button } = window.OltraSystemsDesignSystem_36063f;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Demo CRM", href: "#demo-crm" },
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo funciona", href: "#proceso" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(17,24,39,0.85)" : "rgba(17,24,39,1)",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(148,163,184,0.12)" : "transparent"}`,
        transition: "background 240ms ease, border-color 240ms ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <img src={window.assetUrl("logoWhite")} alt="Oltra Systems" style={{ height: "46px", width: "auto", display: "block" }} />
        </a>
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#94A3B8", textDecoration: "none", transition: "color 140ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
              {l.label}
            </a>
          ))}
          <Button variant="primary" size="sm" href={window.CALENDLY} target="_blank" rel="noopener noreferrer">Diagnóstico Express — 17€</Button>
        </nav>
        <button className="nav-burger" aria-label="Menú" onClick={() => setOpen((o) => !o)}
          style={{ display: "none", background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "8px" }}>
          {open ? <window.X size={22} /> : <window.Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="nav-mobile" style={{ padding: "0 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem", borderBottom: "1px solid rgba(148,163,184,0.12)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "#CBD5E1", textDecoration: "none", padding: "0.75rem 0" }}>{l.label}</a>
          ))}
          <div style={{ marginTop: "0.5rem" }}>
            <Button variant="primary" size="md" href={window.CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} style={{ width: "100%" }}>Diagnóstico Express — 17€</Button>
          </div>
        </div>
      )}
    </header>
  );
}
window.Navbar = Navbar;
