/* @ds-bundle: {"format":3,"namespace":"OltraSystemsDesignSystem_36063f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cb6b8044a5f5","components/core/Button.jsx":"04b6524575bd","components/core/Card.jsx":"f43f84be7392","components/core/Eyebrow.jsx":"3edf3e601df9","components/core/Input.jsx":"443c140c27d0","components/core/Logo.jsx":"e4e1f2d0f9ae","components/core/Stat.jsx":"87c259466df9","ui_kits/landing/Calculator.jsx":"9c3d2c1ff8bf","ui_kits/landing/Comparison.jsx":"60ab8a6c0bc8","ui_kits/landing/CrmDemo.jsx":"e47828017670","ui_kits/landing/Faq.jsx":"62c5bf46d9df","ui_kits/landing/FinalCta.jsx":"fdf3b0980a92","ui_kits/landing/Hero.jsx":"32201f1921da","ui_kits/landing/LeadMagnets.jsx":"b05af6aa856d","ui_kits/landing/Navbar.jsx":"79d6c4f01191","ui_kits/landing/Problem.jsx":"9a3f7f8358a0","ui_kits/landing/Process.jsx":"a03fbf542a2f","ui_kits/landing/Qualification.jsx":"36610046a526","ui_kits/landing/SelfDiagnosis.jsx":"fa8880a92590","ui_kits/landing/Services.jsx":"d9f51c20beef","ui_kits/landing/icons.jsx":"899226c0633c","ui_kits/landing/shared.jsx":"fdb26a57dd77"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OltraSystemsDesignSystem_36063f = window.OltraSystemsDesignSystem_36063f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / pill label. Variants: "default", "featured" (the "MÁS POPULAR" pricing tag),
 * "price" (large price chip), "danger", "positive".
 */
function Badge({
  children,
  variant = "default",
  surface = "dark",
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: surface === "light" ? "var(--slate-100)" : "rgba(148,163,184,0.12)",
      color: surface === "light" ? "var(--slate-600)" : "var(--slate-300)",
      border: surface === "light" ? "1px solid var(--slate-200)" : "1px solid rgba(148,163,184,0.18)"
    },
    featured: {
      background: "var(--white)",
      color: "var(--ink)",
      border: "1px solid var(--white)"
    },
    danger: {
      background: "rgba(185,28,28,0.10)",
      color: "#DC2626",
      border: "1px solid rgba(185,28,28,0.25)"
    },
    positive: {
      background: "rgba(21,128,61,0.10)",
      color: "#16A34A",
      border: "1px solid rgba(21,128,61,0.25)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.3125rem 0.625rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      borderRadius: "999px",
      lineHeight: 1,
      ...(variants[variant] || variants.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Oltra Systems primary button.
 * Variants: "primary" (white fill, dark text — the main CTA), "outline" (border, for dark
 * surfaces), "ghost" (text-only link-button), "solid-dark" (carbon fill, light text — for
 * light surfaces). Sizes: "sm" | "md" | "lg".
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  surface = "dark",
  icon = null,
  iconRight = null,
  href,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0.5rem 0.875rem",
      fontSize: "0.8125rem",
      gap: "0.375rem",
      radius: "8px"
    },
    md: {
      padding: "0.6875rem 1.25rem",
      fontSize: "0.9375rem",
      gap: "0.5rem",
      radius: "8px"
    },
    lg: {
      padding: "0.9375rem 1.75rem",
      fontSize: "1.0625rem",
      gap: "0.625rem",
      radius: "8px"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "-0.01em",
    borderRadius: s.radius,
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--white)",
      color: "var(--ink)",
      borderColor: "var(--white)",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "transparent",
      color: surface === "light" ? "var(--ink)" : "var(--white)",
      borderColor: surface === "light" ? "var(--slate-300)" : "rgba(255,255,255,0.28)"
    },
    "solid-dark": {
      background: "var(--carbon)",
      color: "var(--white)",
      borderColor: "var(--carbon)",
      boxShadow: "var(--shadow-md)"
    },
    ghost: {
      background: "transparent",
      color: surface === "light" ? "var(--text-on-light-muted)" : "var(--text-on-dark-muted)",
      borderColor: "transparent",
      padding: `${s.padding.split(" ")[0]} 0`
    }
  };
  const composed = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "#F1F5F9";else if (variant === "outline") {
      el.style.background = surface === "light" ? "rgba(15,23,42,0.04)" : "rgba(255,255,255,0.07)";
      el.style.borderColor = surface === "light" ? "var(--slate-400)" : "rgba(255,255,255,0.5)";
    } else if (variant === "solid-dark") el.style.background = "#1E293B";else if (variant === "ghost") el.style.color = surface === "light" ? "var(--ink)" : "var(--white)";
    el.style.transform = "translateY(-1px)";
  };
  const onLeave = e => {
    const el = e.currentTarget;
    Object.assign(el.style, variants[variant] || variants.primary);
    el.style.transform = "translateY(0)";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(0.98)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(-1px) scale(1)";
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: href ? undefined : disabled,
    style: composed,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. On dark surfaces it's a hairline-ringed panel with no shadow; on light
 * surfaces it's a white card with a soft cool shadow. Set `featured` for the lifted accent
 * treatment (e.g. the highlighted pricing card). `interactive` adds hover lift.
 */
function Card({
  children,
  surface = "dark",
  featured = false,
  interactive = false,
  padding = "1.75rem",
  style = {},
  ...rest
}) {
  const dark = surface !== "light";
  const base = {
    position: "relative",
    borderRadius: "16px",
    padding,
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    ...(dark ? {
      background: featured ? "#22304A" : "var(--steel-deep)",
      border: featured ? "1.5px solid rgba(148,163,184,0.35)" : "1px solid rgba(148,163,184,0.12)",
      boxShadow: featured ? "var(--shadow-dark-lift)" : "none"
    } : {
      background: "var(--paper-card)",
      border: featured ? "1.5px solid var(--slate-400)" : "1px solid var(--paper-line)",
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-md)"
    }),
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(-2px)";
    if (dark) el.style.borderColor = "rgba(148,163,184,0.28)";else el.style.boxShadow = "var(--shadow-lg)";
  };
  const onLeave = e => {
    if (!interactive) return;
    Object.assign(e.currentTarget.style, base);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / kicker label — all-caps, wide tracking, muted. Sits above section headlines.
 */
function Eyebrow({
  children,
  surface = "dark",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: surface === "light" ? "var(--eyebrow-light)" : "var(--eyebrow)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / number input with optional label and suffix (e.g. "%", "€").
 * Styled for both dark and light surfaces.
 */
function Input({
  label,
  suffix,
  prefix,
  surface = "light",
  type = "text",
  style = {},
  inputStyle = {},
  ...rest
}) {
  const dark = surface === "dark";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: dark ? "var(--slate-300)" : "var(--slate-600)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: dark ? "rgba(255,255,255,0.04)" : "var(--white)",
      border: `1.5px solid ${dark ? "rgba(148,163,184,0.20)" : "var(--slate-200)"}`,
      borderRadius: "8px",
      padding: "0 0.875rem",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = dark ? "rgba(148,163,184,0.55)" : "var(--slate-500)";
      e.currentTarget.style.boxShadow = "var(--focus-shadow)";
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = dark ? "rgba(148,163,184,0.20)" : "var(--slate-200)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? "var(--slate-400)" : "var(--slate-500)",
      fontSize: "0.9375rem",
      marginRight: "0.25rem"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      fontWeight: 500,
      color: dark ? "var(--white)" : "var(--ink)",
      padding: "0.6875rem 0",
      ...inputStyle
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? "var(--slate-400)" : "var(--slate-500)",
      fontSize: "0.9375rem",
      marginLeft: "0.25rem",
      fontWeight: 600
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand lockup. `variant`: "full" (mark + wordmark) | "wordmark" | "mark".
 * On dark surfaces the white asset is used; on light, the navy asset.
 * Falls back to a tracked text wordmark if images aren't desired (`asText`).
 */
function Logo({
  variant = "wordmark",
  surface = "dark",
  height = 28,
  asText = false,
  base = "assets",
  style = {},
  ...rest
}) {
  const dark = surface !== "light";
  if (variant === "wordmark" && asText) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        letterSpacing: "0.15em",
        fontSize: `${height * 0.62}px`,
        color: dark ? "var(--white)" : "var(--ink)",
        ...style
      }
    }, rest), "OLTRA SYSTEMS");
  }
  const file = {
    full: dark ? "oltra-logo-white.png" : "oltra-logo.png",
    wordmark: dark ? "oltra-logo-white.png" : "oltra-logo.png",
    mark: dark ? "oltra-mark-white.png" : "oltra-mark.png"
  }[variant] || "oltra-logo-white.png";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/logos/${file}`,
    alt: "Oltra Systems",
    style: {
      height: `${height}px`,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Metric / stat block — used in the abstract hero dashboard and result panels.
 * `tone`: "neutral" | "danger" (lost money) | "positive" (captured).
 */
function Stat({
  value,
  label,
  tone = "neutral",
  icon = null,
  surface = "dark",
  style = {},
  ...rest
}) {
  const dark = surface !== "light";
  const tones = {
    neutral: dark ? "var(--white)" : "var(--ink)",
    danger: "#DC2626",
    positive: "#16A34A"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.375rem",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? "var(--slate-400)" : "var(--slate-500)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1.75rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: tones[tone] || tones.neutral
    }
  }, value)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 500,
      color: dark ? "var(--slate-400)" : "var(--slate-500)",
      letterSpacing: "0"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Calculator.jsx
try { (() => {
// Leak calculator — interactive, light section. Real-time output.
function Calculator() {
  const {
    Eyebrow,
    Button,
    Input,
    Card
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    ArrowRight,
    TrendingDown
  } = window;
  const [leads, setLeads] = React.useState(80);
  const [noResp, setNoResp] = React.useState(45);
  const [noShow, setNoShow] = React.useState(25);
  const [value, setValue] = React.useState(1200);

  // Patients lost ≈ leads that go unanswered + no-shows on the rest, both converting at a baseline.
  const CONVERT = 0.2; // baseline conversion of a properly handled lead
  const unanswered = leads * (noResp / 100);
  const answered = leads - unanswered;
  const lostToNoShow = answered * (noShow / 100);
  const patientsLost = Math.round((unanswered + lostToNoShow) * CONVERT);
  const monthly = patientsLost * value;
  const yearly = monthly * 12;
  const fmt = n => "€" + Math.round(n).toLocaleString("es-ES");
  const fields = [{
    label: "Leads que recibes al mes",
    val: leads,
    set: setLeads,
    min: 0,
    max: 500,
    step: 5
  }, {
    label: "% sin respuesta en < 1h",
    val: noResp,
    set: setNoResp,
    suffix: "%",
    min: 0,
    max: 100,
    step: 1
  }, {
    label: "% de no-shows mensuales",
    val: noShow,
    set: setNoShow,
    suffix: "%",
    min: 0,
    max: 100,
    step: 1
  }, {
    label: "Valor medio de un paciente nuevo",
    val: value,
    set: setValue,
    prefix: "€",
    min: 0,
    max: 6000,
    step: 50
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "carbon",
    id: "calculadora",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "tooth",
      opacity: 0.04,
      style: {
        bottom: "-30px",
        right: "-20px"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "44rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Calculadora de fugas de pacientes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "\xBFCu\xE1nto dinero est\xE1s perdiendo cada mes?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem 0 0",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#CBD5E1",
      maxWidth: "38rem"
    }
  }, "Ajusta los valores de tu cl\xEDnica. El c\xE1lculo se actualiza en tiempo real.")), /*#__PURE__*/React.createElement("div", {
    className: "calc-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem",
      marginTop: "2.5rem",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "light",
    padding: "1.75rem",
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "1.375rem"
    }
  }, fields.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "0.625rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#475569"
    }
  }, f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9375rem",
      fontWeight: 700,
      color: "#111827",
      fontVariantNumeric: "tabular-nums"
    }
  }, f.prefix || "", f.val.toLocaleString("es-ES"), f.suffix || "")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: f.min,
    max: f.max,
    step: f.step,
    value: f.val,
    onChange: e => f.set(Number(e.target.value)),
    className: "oltra-range"
  }))))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      background: "#1E293B",
      border: "1px solid rgba(148,163,184,0.14)",
      borderRadius: 16,
      padding: "1.75rem",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "#94A3B8",
      fontSize: "0.8125rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginBottom: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(TrendingDown, {
    size: 16,
    color: "#F87171"
  }), " Tu fuga estimada"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "1.25rem",
      borderBottom: "1px solid rgba(148,163,184,0.14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9375rem",
      color: "#CBD5E1"
    }
  }, "Pacientes perdidos al mes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#fff",
      fontVariantNumeric: "tabular-nums"
    }
  }, patientsLost)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 0",
      borderBottom: "1px solid rgba(148,163,184,0.14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9375rem",
      color: "#CBD5E1"
    }
  }, "Dinero no capturado / mes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#F87171",
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(monthly))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 0 1.5rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9375rem",
      color: "#CBD5E1"
    }
  }, "Dinero no capturado / a\xF1o"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "2.25rem",
      fontWeight: 800,
      color: "#F87171",
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(yearly))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 1rem",
      fontSize: "0.9375rem",
      color: "#94A3B8",
      lineHeight: 1.5
    }
  }, "Descubre exactamente d\xF3nde falla tu cl\xEDnica."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    style: {
      width: "100%"
    }
  }, "Solicitar Diagn\xF3stico Express \u2014 17\u20AC"))))));
}
window.Calculator = Calculator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Calculator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Comparison.jsx
try { (() => {
// Comparison — Oltra vs generic agency. Light section.
function Comparison() {
  const {
    X,
    Check
  } = window;
  const rows = [{
    k: "Qué hace",
    a: "Publica contenido y gestiona redes",
    b: "Implementa sistemas de captación y conversión"
  }, {
    k: "Resultado",
    a: "Más seguidores",
    b: "Más pacientes que pagan"
  }, {
    k: "Foco",
    a: "Imagen de marca",
    b: "Fugas, seguimiento y conversión"
  }, {
    k: "Trabajo",
    a: "Activo y manual",
    b: "Automatizado y escalable"
  }, {
    k: "ROI",
    a: "Difícil de medir",
    b: "Directo: pacientes convertidos"
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "carbon",
    id: "comparativa"
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "46rem"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "Oltra Systems no es una agencia de marketing al uso.")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem",
      border: "1px solid rgba(148,163,184,0.16)",
      borderRadius: 16,
      overflow: "hidden",
      background: "#1E293B",
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 1fr",
      borderBottom: "1px solid rgba(148,163,184,0.16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#94A3B8",
      borderLeft: "1px solid rgba(148,163,184,0.16)"
    }
  }, "Agencia gen\xE9rica"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem",
      fontSize: "0.875rem",
      fontWeight: 700,
      color: "#fff",
      background: "rgba(148,163,184,0.06)",
      borderLeft: "1px solid rgba(148,163,184,0.16)",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("markWhite"),
    alt: "",
    style: {
      height: 16,
      width: "auto"
    }
  }), " Oltra Systems")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cmp-row",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 1fr",
      borderBottom: i < rows.length - 1 ? "1px solid rgba(148,163,184,0.10)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem",
      fontSize: "0.9375rem",
      fontWeight: 600,
      color: "#fff"
    }
  }, r.k), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem",
      fontSize: "0.9rem",
      color: "#94A3B8",
      borderLeft: "1px solid rgba(148,163,184,0.10)",
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: 1,
      color: "#64748B"
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  })), r.a), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.125rem 1.5rem",
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#E2E8F0",
      background: "rgba(148,163,184,0.06)",
      borderLeft: "1px solid rgba(148,163,184,0.16)",
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: 1,
      color: "#22C55E"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 16,
    strokeWidth: 2.5
  })), r.b))))));
}
window.Comparison = Comparison;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Comparison.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CrmDemo.jsx
try { (() => {
// CAMBIO 3 — Mini demo CRM: leads list · WhatsApp conversation · lead info.
function CrmDemo() {
  const {
    Eyebrow,
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    MessageCircle,
    Bell,
    Calendar,
    ArrowRight,
    Zap,
    Instagram
  } = window;

  // Status badge palette
  const STATUS = {
    seguimiento: {
      label: "En seguimiento",
      bg: "rgba(21,128,61,0.15)",
      fg: "#4ADE80",
      dot: "#22C55E"
    },
    citado: {
      label: "Cita agendada",
      bg: "rgba(37,99,235,0.15)",
      fg: "#60A5FA",
      dot: "#3B82F6"
    },
    nuevo: {
      label: "Nuevo — sin leer",
      bg: "rgba(180,83,9,0.18)",
      fg: "#FBBF24",
      dot: "#F59E0B"
    },
    noshow: {
      label: "No-show",
      bg: "rgba(185,28,28,0.16)",
      fg: "#F87171",
      dot: "#EF4444"
    },
    convertida: {
      label: "Convertida",
      bg: "rgba(148,163,184,0.16)",
      fg: "#CBD5E1",
      dot: "#94A3B8"
    }
  };
  const leads = [{
    id: 1,
    name: "María García",
    treatment: "Invisalign",
    status: "seguimiento",
    channel: "WhatsApp",
    last: "Hace 2 h",
    filters: ["seguimiento"],
    chat: [{
      from: "in",
      t: "Hola, ¿cuánto cuesta el tratamiento de Invisalign?"
    }, {
      from: "out",
      auto: "⚡ Respuesta automática · 0 min",
      t: "¡Hola María! Gracias por escribir a Clínica Dental Sonría 😊 El precio depende de tu caso. ¿Te viene bien una valoración gratuita esta semana?"
    }, {
      from: "in",
      t: "Sí, perfecto"
    }, {
      from: "out",
      auto: "⚡ Seguimiento automático · día 2",
      t: "María, te guardo hueco el jueves a las 17:00. ¿Lo confirmo?"
    }]
  }, {
    id: 2,
    name: "Carlos Ruiz",
    treatment: "Implante dental",
    status: "citado",
    channel: "Google",
    last: "Ayer",
    filters: ["citado"],
    chat: [{
      from: "in",
      t: "Quería información sobre implantes"
    }, {
      from: "out",
      auto: "⚡ Respuesta automática · 0 min",
      t: "¡Hola Carlos! Te llamamos para resolver tus dudas. ¿Prefieres mañana o tarde?"
    }, {
      from: "in",
      t: "Por la tarde mejor"
    }, {
      from: "out",
      t: "Perfecto, cita confirmada para el martes a las 18:30. ¡Te esperamos!"
    }]
  }, {
    id: 3,
    name: "Ana Martínez",
    treatment: "Ortodoncia",
    status: "nuevo",
    channel: "Instagram",
    last: "Hace 6 min",
    filters: ["nuevo"],
    chat: [{
      from: "in",
      t: "Hola! Vi vuestro perfil, ¿hacéis ortodoncia para adultos?"
    }, {
      from: "out",
      auto: "⚡ Respuesta automática · 0 min",
      t: "¡Hola Ana! Sí, tratamos ortodoncia en adultos. ¿Quieres que te contemos las opciones en una valoración sin compromiso?"
    }]
  }, {
    id: 4,
    name: "Luis Torres",
    treatment: "Blanqueamiento",
    status: "noshow",
    channel: "WhatsApp",
    last: "Hace 3 días",
    filters: ["seguimiento"],
    chat: [{
      from: "out",
      t: "Hola Luis, te esperábamos hoy para el blanqueamiento y no hemos podido verte."
    }, {
      from: "out",
      auto: "⚡ Recordatorio automático",
      t: "¿Te viene bien reprogramar para esta semana? Tenemos huecos el viernes."
    }, {
      from: "in",
      t: "Uy, se me pasó. El viernes me va bien"
    }]
  }, {
    id: 5,
    name: "Rosa Pons",
    treatment: "Estética dental",
    status: "convertida",
    channel: "Formulario web",
    last: "Hace 1 semana",
    filters: ["citado"],
    chat: [{
      from: "in",
      t: "Me gustaría mejorar mi sonrisa para una boda"
    }, {
      from: "out",
      auto: "⚡ Respuesta automática · 0 min",
      t: "¡Hola Rosa! Te ayudamos. Agendamos una valoración y diseñamos tu sonrisa 😍"
    }, {
      from: "out",
      auto: "⚡ Seguimiento post-consulta",
      t: "Rosa, ¡gracias por confiar en nosotros! Tu tratamiento ya está en marcha."
    }, {
      from: "in",
      t: "Estoy encantada, gracias!"
    }]
  }];
  const FILTERS = [{
    key: "todos",
    label: "Todos"
  }, {
    key: "nuevo",
    label: "Nuevos"
  }, {
    key: "seguimiento",
    label: "Seguimiento"
  }, {
    key: "citado",
    label: "Citados"
  }];
  const [filter, setFilter] = React.useState("todos");
  const [selId, setSelId] = React.useState(1);
  const visible = filter === "todos" ? leads : leads.filter(l => l.filters.includes(filter));
  const sel = leads.find(l => l.id === selId) || leads[0];
  const channelIcon = c => c === "Instagram" ? /*#__PURE__*/React.createElement(Instagram, {
    size: 13
  }) : /*#__PURE__*/React.createElement(MessageCircle, {
    size: 13
  });
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "carbon",
    id: "demo-crm"
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "46rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Demo en vivo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "As\xED ve tu equipo cada paciente que llega"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem 0 0",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#94A3B8",
      maxWidth: "40rem"
    }
  }, "Un panel centralizado donde cada lead tiene su estado, su conversaci\xF3n y su pr\xF3ximo paso autom\xE1tico.")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-shell",
    style: {
      marginTop: "2.5rem",
      background: "#0F172A",
      border: "1px solid rgba(148,163,184,0.14)",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr 200px",
      minHeight: "440px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "crm-col-leads",
    style: {
      background: "#1E293B",
      borderRight: "1px solid rgba(148,163,184,0.12)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1rem 1.125rem",
      borderBottom: "1px solid rgba(148,163,184,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "0.875rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#fff"
    }
  }, "Panel de leads"), /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("logoWhite"),
    alt: "Oltra Systems",
    style: {
      height: 11,
      width: "auto",
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.375rem"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.key,
    onClick: () => setFilter(f.key),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.6875rem",
      fontWeight: 600,
      padding: "0.3rem 0.55rem",
      borderRadius: 999,
      cursor: "pointer",
      border: "1px solid " + (filter === f.key ? "rgba(255,255,255,0.9)" : "rgba(148,163,184,0.22)"),
      background: filter === f.key ? "#fff" : "transparent",
      color: filter === f.key ? "#0F172A" : "#94A3B8",
      transition: "all 140ms ease"
    }
  }, f.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, visible.map(l => {
    const st = STATUS[l.status];
    const active = l.id === selId;
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => setSelId(l.id),
      style: {
        width: "100%",
        textAlign: "left",
        display: "block",
        padding: "0.875rem 1.125rem",
        cursor: "pointer",
        background: active ? "rgba(148,163,184,0.10)" : "transparent",
        borderLeft: "2px solid " + (active ? st.dot : "transparent"),
        borderBottom: "1px solid rgba(148,163,184,0.07)",
        border: "none",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "rgba(148,163,184,0.07)",
        transition: "background 140ms ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.3rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.8125rem",
        fontWeight: 600,
        color: "#fff"
      }
    }, l.name), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: st.dot,
        flex: "none"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.75rem",
        color: "#94A3B8",
        marginBottom: "0.45rem"
      }
    }, l.treatment), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        fontSize: "0.625rem",
        fontWeight: 600,
        padding: "0.18rem 0.45rem",
        borderRadius: 999,
        background: st.bg,
        color: st.fg
      }
    }, st.label));
  }), visible.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.5rem 1.125rem",
      fontSize: "0.8125rem",
      color: "#64748B"
    }
  }, "Sin leads en este filtro."))), /*#__PURE__*/React.createElement("div", {
    className: "crm-col-chat",
    style: {
      background: "#0F172A",
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1rem 1.25rem",
      borderBottom: "1px solid rgba(148,163,184,0.10)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9375rem",
      fontWeight: 600,
      color: "#fff"
    }
  }, sel.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      fontSize: "0.75rem",
      color: "#94A3B8",
      marginTop: "0.2rem"
    }
  }, channelIcon(sel.channel), " Lleg\xF3 por ", sel.channel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#0F172A",
      background: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "0.45rem 0.7rem",
      cursor: "pointer"
    }
  }, "Agendar cita"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#CBD5E1",
      background: "transparent",
      border: "1px solid rgba(148,163,184,0.28)",
      borderRadius: 8,
      padding: "0.45rem 0.7rem",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Bell, {
    size: 13
  }), " Recordatorio"))), /*#__PURE__*/React.createElement("div", {
    className: "crm-chat-body",
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      background: "linear-gradient(180deg, #0F172A, #0C1322)"
    }
  }, sel.chat.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.from === "out" ? "flex-end" : "flex-start",
      maxWidth: "78%"
    }
  }, m.auto && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: m.from === "out" ? "flex-end" : "flex-start",
      marginBottom: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.625rem",
      fontWeight: 600,
      color: "#4ADE80",
      letterSpacing: "0.02em"
    }
  }, m.auto)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8125rem",
      lineHeight: 1.5,
      padding: "0.625rem 0.8rem",
      borderRadius: 12,
      background: m.from === "out" ? "#064E3B" : "#1E293B",
      color: m.from === "out" ? "#D1FAE5" : "#E2E8F0",
      borderBottomRightRadius: m.from === "out" ? 3 : 12,
      borderBottomLeftRadius: m.from === "out" ? 12 : 3
    }
  }, m.t))))), /*#__PURE__*/React.createElement("div", {
    className: "crm-col-info",
    style: {
      background: "#1E293B",
      borderLeft: "1px solid rgba(148,163,184,0.12)",
      padding: "1.125rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.125rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#64748B",
      marginBottom: "0.5rem"
    }
  }, "Estado"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontSize: "0.75rem",
      fontWeight: 600,
      padding: "0.3rem 0.6rem",
      borderRadius: 999,
      background: STATUS[sel.status].bg,
      color: STATUS[sel.status].fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: STATUS[sel.status].dot
    }
  }), " ", STATUS[sel.status].label)), [{
    k: "Interés",
    v: sel.treatment
  }, {
    k: "Canal de llegada",
    v: sel.channel
  }, {
    k: "Último contacto",
    v: sel.last
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#64748B",
      marginBottom: "0.3rem"
    }
  }, row.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#E2E8F0"
    }
  }, row.v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "rgba(21,128,61,0.12)",
      border: "1px solid rgba(21,128,61,0.3)",
      borderRadius: 10,
      padding: "0.75rem 0.85rem",
      display: "flex",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement(Zap, {
    size: 15,
    color: "#4ADE80",
    style: {
      flex: "none",
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      lineHeight: 1.4,
      color: "#86EFAC",
      fontWeight: 500
    }
  }, "Auto-recordatorio programado para hoy")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "2rem",
      padding: "0.875rem 1.25rem",
      borderTop: "1px solid rgba(148,163,184,0.12)",
      background: "#0B1120"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      fontSize: "0.8125rem",
      color: "#94A3B8"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#F59E0B"
    }
  }), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff",
      fontWeight: 700
    }
  }, "4"), " sin responder"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      fontSize: "0.8125rem",
      color: "#94A3B8"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#22C55E"
    }
  }), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff",
      fontWeight: 700
    }
  }, "2"), " convertidos")))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2rem",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1.0625rem",
      fontWeight: 500,
      fontStyle: "italic",
      color: "#CBD5E1",
      maxWidth: "34rem"
    }
  }, "\u201CTodo esto pasa autom\xE1ticamente. Tu recepcionista no tiene que recordar nada.\u201D"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    surface: "dark",
    href: "#proceso",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    })
  }, "Ver c\xF3mo funciona el sistema"))));
}
window.CrmDemo = CrmDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CrmDemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Faq.jsx
try { (() => {
// CAMBIO 7 — FAQ acordeón (solo una abierta a la vez).
function Faq() {
  const {
    Eyebrow
  } = window.OltraSystemsDesignSystem_36063f;
  const items = [{
    q: "¿En qué se diferencia Oltra Systems de una agencia de marketing normal?",
    a: "Una agencia de marketing te genera visibilidad. Nosotros te generamos pacientes que pagan. No hacemos publicaciones de Instagram ni gestionamos tu comunidad. Implementamos el sistema que responde, hace seguimiento y convierte a los leads que ya llegan a tu clínica."
  }, {
    q: "¿Tengo que contratar publicidad para que esto funcione?",
    a: "No. La mayoría de clínicas ya reciben leads por WhatsApp, Instagram, Google o formularios web. El problema es que esos leads no se convierten bien. Empezamos ordenando eso. La publicidad es una fase posterior si la necesitas."
  }, {
    q: "¿Qué incluye exactamente el Diagnóstico Express de 17€?",
    a: "Analizamos tu WhatsApp, recepción, formularios e Instagram. Detectamos las fugas concretas. Recibes un Loom personalizado de 5–10 minutos con los hallazgos y un mini informe con 3–5 mejoras accionables. En 48–72h. Sin compromisos."
  }, {
    q: "¿Cuánto tiempo tarda en implementarse el sistema?",
    a: "El sistema básico está operativo en 2–3 semanas. No necesitas contratar más personal ni cambiar toda tu operativa. Se integra sobre lo que ya tienes."
  }, {
    q: "¿Necesito tener conocimientos técnicos o contratar a alguien de IT?",
    a: "No. Nos encargamos de toda la configuración. Solo necesitamos acceso a tu WhatsApp Business y un rato de onboarding contigo o tu coordinadora. El día a día no cambia para tu equipo."
  }, {
    q: "¿Qué pasa si no noto resultados?",
    a: "El Diagnóstico Express te muestra exactamente qué está fallando antes de invertir en el servicio mensual. Si después de arrancar el sistema no ves mejora en la conversión de leads, lo revisamos y ajustamos. Trabajamos orientados a resultados, no a horas."
  }, {
    q: "¿Para qué tipo de clínicas es Oltra Systems?",
    a: "Para clínicas dentales privadas con tratamientos de valor medio-alto: implantes, Invisalign, ortodoncia, estética dental, rehabilitación oral. Si recibes leads pero no los conviertes bien, o si tu recepción está saturada y hay no-shows frecuentes, encajas."
  }, {
    q: "¿Puedo empezar solo con el Diagnóstico Express sin contratar nada más?",
    a: "Sí. El Diagnóstico Express es un producto independiente por 17€. No hay compromiso adicional. Si después quieres implementar el sistema, lo hablamos. Pero muchas clínicas ya sacan valor solo del diagnóstico."
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "faq",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "ekg",
      color: "#0F172A",
      opacity: 0.04,
      style: {
        bottom: "8%",
        left: "0",
        width: "100%"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "46rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    surface: "light"
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "Lo que nos preguntan los directores de cl\xEDnica")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.25rem",
      maxWidth: "820px",
      borderTop: "1px solid #E2E8F0"
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid #E2E8F0"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        fontFamily: "var(--font-sans)",
        fontSize: "1.0625rem",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: "#111827",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "1.25rem 0"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 26,
        height: 26,
        position: "relative",
        color: isOpen ? "#111827" : "#64748B",
        transition: "color 140ms ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 16,
        height: 2,
        background: "currentColor",
        borderRadius: 2,
        transform: "translate(-50%,-50%)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 16,
        height: 2,
        background: "currentColor",
        borderRadius: 2,
        transform: `translate(-50%,-50%) rotate(${isOpen ? 0 : 90}deg)`,
        transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? "320px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 300ms cubic-bezier(0.16,1,0.3,1), opacity 240ms ease"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 1.5rem",
        paddingRight: "3rem",
        fontSize: "0.9375rem",
        lineHeight: 1.65,
        color: "#475569",
        maxWidth: "62ch"
      }
    }, it.a)));
  }))));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FinalCta.jsx
try { (() => {
// Final CTA + Footer.
function FinalCta() {
  const {
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    ArrowRight
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "cta",
    "data-screen-label": "final-cta",
    style: {
      background: "#111827",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "760px",
      margin: "0 auto",
      padding: "clamp(4rem,8vw,7rem) 1.5rem",
      textAlign: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("markWhite"),
    alt: "",
    style: {
      height: 44,
      width: "auto",
      margin: "0 auto 2rem",
      display: "block",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(2rem,4.5vw,3.25rem)",
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: "-0.03em",
      color: "#fff"
    }
  }, "Empieza por saber cu\xE1nto est\xE1s perdiendo."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1.5rem auto 0",
      maxWidth: "40rem",
      fontSize: "1.125rem",
      lineHeight: 1.6,
      color: "#CBD5E1"
    }
  }, "El Diagn\xF3stico Express de Fugas Dentales cuesta 17\u20AC y te muestra exactamente d\xF3nde pierdes pacientes, tiempo y dinero. Sin compromisos. Sin humo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.25rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Solicitar Diagn\xF3stico Express \u2014 17\u20AC")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1.25rem 0 0",
      fontSize: "0.875rem",
      color: "#94A3B8"
    }
  }, "Resultado en 48\u201372h \xB7 Loom personalizado \xB7 Mini informe accionable"))));
}
function Footer() {
  const {
    Instagram
  } = window;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#111827",
      borderTop: "1px solid rgba(148,163,184,0.10)",
      padding: "3.5rem 1.5rem 2.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid",
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "2rem",
      paddingBottom: "2.5rem",
      borderBottom: "1px solid rgba(148,163,184,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "22rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("logoWhite"),
    alt: "Oltra Systems",
    style: {
      height: 24,
      width: "auto",
      marginBottom: "1rem"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.9375rem",
      color: "#94A3B8",
      lineHeight: 1.5
    }
  }, "M\xE1s pacientes. Menos caos operativo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "3.5rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#64748B",
      marginBottom: "0.875rem"
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contacto@oltrasystems.com",
    style: {
      display: "block",
      fontSize: "0.9375rem",
      color: "#CBD5E1",
      textDecoration: "none",
      marginBottom: "0.5rem"
    }
  }, "contacto@oltrasystems.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://oltrasystems.com",
    style: {
      display: "block",
      fontSize: "0.9375rem",
      color: "#CBD5E1",
      textDecoration: "none"
    }
  }, "oltrasystems.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#64748B",
      marginBottom: "0.875rem"
    }
  }, "Social"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.9375rem",
      color: "#CBD5E1",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Instagram, {
    size: 17
  }), " Instagram")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "1.75rem",
      fontSize: "0.8125rem",
      color: "#64748B"
    }
  }, "\xA9 2025 Oltra Systems. Todos los derechos reservados.")));
}
window.FinalCta = FinalCta;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FinalCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
// Hero — headline, subhead, CTAs, abstract metric dashboard.
function Hero() {
  const {
    Button,
    Card,
    Stat
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    MessageCircle,
    CalendarX,
    TrendingDown,
    ArrowRight,
    BarChart
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    "data-screen-label": "hero",
    style: {
      background: "#111827",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(window.Decor, {
    kind: "molar",
    opacity: 0.035,
    style: {
      top: "60px",
      left: "-70px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "clamp(3.5rem,7vw,6.5rem) 1.5rem",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "clamp(2rem,5vw,4.5rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.8125rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#94A3B8",
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#3E5573"
    }
  }), "Sistemas para cl\xEDnicas dentales"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "clamp(2.25rem,5vw,3.75rem)",
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: "-0.03em",
      color: "#fff"
    }
  }, "Tu cl\xEDnica dental pierde pacientes cada d\xEDa.", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "#94A3B8"
    }
  }, "No por falta de leads. Por falta de sistema.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1.5rem 0 0",
      fontSize: "clamp(1rem,1.4vw,1.1875rem)",
      lineHeight: 1.6,
      color: "#CBD5E1",
      maxWidth: "34rem"
    }
  }, "En Oltra Systems automatizamos la respuesta, el seguimiento y la conversi\xF3n de pacientes para cl\xEDnicas dentales privadas. M\xE1s pacientes. Menos caos operativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      marginTop: "2rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Solicitar Diagn\xF3stico Express \u2014 17\u20AC"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    surface: "dark",
    href: "#proceso",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    })
  }, "Ver c\xF3mo funciona"))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "dark",
    padding: "1.5rem",
    style: {
      background: "#141E32"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "#94A3B8"
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    size: 16,
    color: "#64748B"
  }), " Panel de la cl\xEDnica"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: "#DC2626",
      background: "rgba(185,28,28,0.12)",
      border: "1px solid rgba(185,28,28,0.25)",
      padding: "0.25rem 0.5rem",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#DC2626"
    }
  }), " SIN SISTEMA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.875rem"
    }
  }, [{
    icon: /*#__PURE__*/React.createElement(MessageCircle, {
      size: 18
    }),
    v: "12",
    l: "leads sin responder"
  }, {
    icon: /*#__PURE__*/React.createElement(CalendarX, {
      size: 18
    }),
    v: "3",
    l: "no-shows esta semana"
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#0F1827",
      border: "1px solid rgba(148,163,184,0.10)",
      borderRadius: 12,
      padding: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: m.v,
    label: m.l,
    tone: "danger",
    icon: m.icon
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.875rem",
      background: "#0F1827",
      border: "1px solid rgba(185,28,28,0.20)",
      borderRadius: 12,
      padding: "1.125rem 1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.875rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#F87171",
      lineHeight: 1
    }
  }, "\u20AC4.200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8125rem",
      color: "#94A3B8",
      marginTop: "0.375rem"
    }
  }, "en oportunidades perdidas")), /*#__PURE__*/React.createElement(TrendingDown, {
    size: 40,
    color: "#7F1D1D",
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 5,
      height: 40,
      marginTop: "1rem",
      padding: "0 2px"
    }
  }, [40, 55, 38, 62, 30, 48, 26, 58, 22, 44, 18, 34].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i % 2 ? "rgba(148,163,184,0.18)" : "rgba(148,163,184,0.30)",
      borderRadius: 2
    }
  }))))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/LeadMagnets.jsx
try { (() => {
// CAMBIO 4 + 5 — Lead magnets with EmailJS (shared form).

// Reusable email-capture form. Validates, calls window.sendLeadMagnet, shows states.
function LeadForm({
  templateId,
  downloadLink,
  resourceName,
  surface = "dark",
  buttonLabel,
  note
}) {
  const {
    ArrowRight,
    Check
  } = window;
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | loading | success | error
  const [msg, setMsg] = React.useState("");
  const dark = surface !== "light";
  const valid = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const submit = async ev => {
    ev.preventDefault();
    if (!email.trim()) {
      setState("error");
      setMsg("Introduce tu email de clínica");
      return;
    }
    if (!valid(email)) {
      setState("error");
      setMsg("Ese email no parece válido");
      return;
    }
    setState("loading");
    try {
      await window.sendLeadMagnet({
        email,
        templateId,
        downloadLink,
        resourceName
      });
      setState("success");
    } catch (e) {
      setState("error");
      setMsg("Algo ha fallado. Escríbenos a contacto@oltrasystems.com");
    }
  };
  if (state === "success") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        padding: "1.125rem 1.25rem",
        borderRadius: 12,
        background: dark ? "rgba(21,128,61,0.12)" : "rgba(21,128,61,0.08)",
        border: "1px solid rgba(21,128,61,0.3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 26,
        height: 26,
        borderRadius: 999,
        background: "rgba(21,128,61,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#22C55E",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Check, {
      size: 15,
      strokeWidth: 3
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        color: dark ? "#86EFAC" : "#15803D"
      }
    }, "Revisa tu email"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.8125rem",
        color: dark ? "#94A3B8" : "#475569",
        marginTop: "0.2rem"
      }
    }, "Te hemos enviado el recurso a ", email, ".")));
  }
  const labelColor = dark ? "#CBD5E1" : "#475569";
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.625rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lm-row",
    style: {
      display: "flex",
      gap: "0.625rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    placeholder: "Tu email de cl\xEDnica",
    onChange: e => {
      setEmail(e.target.value);
      if (state === "error") setState("idle");
    },
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      fontWeight: 500,
      padding: "0.8rem 0.95rem",
      borderRadius: 8,
      outline: "none",
      background: dark ? "rgba(255,255,255,0.05)" : "#fff",
      border: "1.5px solid " + (state === "error" ? "#EF4444" : dark ? "rgba(148,163,184,0.22)" : "#E2E8F0"),
      color: dark ? "#fff" : "#111827"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: state === "loading",
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.45rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      fontWeight: 600,
      whiteSpace: "nowrap",
      padding: "0.8rem 1.25rem",
      borderRadius: 8,
      cursor: state === "loading" ? "wait" : "pointer",
      background: dark ? "#fff" : "#111827",
      color: dark ? "#111827" : "#fff",
      border: "none",
      opacity: state === "loading" ? 0.7 : 1,
      transition: "opacity 140ms ease"
    }
  }, state === "loading" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lm-spin",
    style: {
      width: 15,
      height: 15,
      borderRadius: 999,
      border: "2px solid " + (dark ? "rgba(17,24,39,0.25)" : "rgba(255,255,255,0.35)"),
      borderTopColor: dark ? "#111827" : "#fff",
      display: "inline-block"
    }
  }), "Enviando\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, buttonLabel, " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })))), state === "error" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      color: "#F87171",
      fontWeight: 500
    }
  }, msg), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: dark ? "#64748B" : "#94A3B8"
    }
  }, note));
}
window.LeadForm = LeadForm;

// CAMBIO 4 — "Las 5 fugas" presentation lead magnet.
function FiveLeaks() {
  const {
    Eyebrow
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    TrendingDown,
    Clock,
    Inbox,
    CalendarX,
    Settings
  } = window;
  const leaks = [{
    icon: /*#__PURE__*/React.createElement(Clock, {
      size: 15
    }),
    t: "Respuesta tardía"
  }, {
    icon: /*#__PURE__*/React.createElement(Inbox, {
      size: 15
    }),
    t: "Sin seguimiento"
  }, {
    icon: /*#__PURE__*/React.createElement(CalendarX, {
      size: 15
    }),
    t: "No-shows"
  }, {
    icon: /*#__PURE__*/React.createElement(Settings, {
      size: 15
    }),
    t: "Canales dispersos"
  }, {
    icon: /*#__PURE__*/React.createElement(TrendingDown, {
      size: 15
    }),
    t: "Presupuestos fríos"
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "carbon",
    id: "cinco-fugas",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "cross",
      opacity: 0.05,
      style: {
        bottom: "40px",
        left: "40px"
      }
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "lm-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(2rem,5vw,4rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "#0F172A",
      border: "1px solid rgba(148,163,184,0.16)",
      borderRadius: 16,
      padding: "2rem",
      boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("logoWhite"),
    alt: "Oltra Systems",
    style: {
      height: 16,
      width: "auto",
      opacity: 0.8,
      marginBottom: "1.5rem"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#64748B",
      marginBottom: "0.75rem"
    }
  }, "Gu\xEDa \xB7 PDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#fff",
      lineHeight: 1.15,
      marginBottom: "1.5rem"
    }
  }, "Las 5 fugas que vac\xEDan la agenda de tu cl\xEDnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, leaks.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.65rem",
      fontSize: "0.8125rem",
      color: "#CBD5E1"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      background: "rgba(148,163,184,0.10)",
      border: "1px solid rgba(148,163,184,0.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#94A3B8",
      flex: "none"
    }
  }, l.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#64748B",
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, String(i + 1).padStart(2, "0")), " ", l.t))))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recurso gratuito"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.625rem,3vw,2.25rem)",
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "Descubre d\xF3nde se escapan tus pacientes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem 0 1.75rem",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#94A3B8",
      maxWidth: "32rem"
    }
  }, "La presentaci\xF3n con las 5 fugas m\xE1s comunes en cl\xEDnicas dentales privadas \u2014 y c\xF3mo cerrarlas sin contratar m\xE1s personal."), /*#__PURE__*/React.createElement(LeadForm, {
    surface: "dark",
    templateId: window.EMAILJS.TEMPLATE_5_FUGAS,
    downloadLink: "https://oltrasystems.com/recursos/5-fugas-dentales.pdf",
    resourceName: "Las 5 fugas \u2014 presentaci\xF3n",
    buttonLabel: "Descargar presentaci\xF3n gratis",
    note: "Solo valor. Sin spam. Puedes darte de baja cuando quieras."
  }))));
}
window.FiveLeaks = FiveLeaks;

// CAMBIO 5 — WhatsApp templates lead magnet (light section).
function WhatsappTemplates() {
  const {
    Eyebrow
  } = window.OltraSystemsDesignSystem_36063f;
  const cards = [{
    tag: "Primera respuesta",
    body: "Hola [Nombre] 👋 Gracias por contactar con [Clínica]. Te respondemos enseguida. ¿Nos puedes decir qué tratamiento te interesa?"
  }, {
    tag: "Recordatorio de cita",
    body: "Hola [Nombre], te recordamos tu cita mañana [Día] a las [Hora] en [Clínica]. Si necesitas cambiarla, escríbenos. ¡Hasta pronto!"
  }, {
    tag: "Recuperación de no-show",
    body: "Hola [Nombre], vimos que no pudiste venir ayer. ¿Te viene bien otro día esta semana para la valoración? Tenemos huecos disponibles."
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "plantillas-whatsapp",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "implant",
      color: "#0F172A",
      opacity: 0.04,
      style: {
        top: "30px",
        right: "40px"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "44rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    surface: "light"
  }, "Recurso gratuito"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.75rem,3.2vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "15 plantillas de WhatsApp listas para tu cl\xEDnica dental"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem 0 0",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#475569",
      maxWidth: "40rem"
    }
  }, "Respuesta r\xE1pida, seguimiento de presupuesto, recordatorio de cita, reactivaci\xF3n de no-show y m\xE1s. Solo copia, pega y personaliza.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.25rem",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#64748B"
    }
  }, "Previsualiza 3 de las 15 plantillas:"), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1.25rem",
      marginTop: "1rem"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(window.Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0.7rem 1rem",
      borderBottom: "1px solid #F1F5F9",
      fontSize: "0.6875rem",
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "#15803D",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#22C55E"
    }
  }), " ", c.tag), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "1rem",
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      lineHeight: 1.55,
      color: "#334155",
      whiteSpace: "pre-wrap",
      background: "#F8FAFC"
    }
  }, c.body))))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2rem",
      maxWidth: "30rem"
    }
  }, /*#__PURE__*/React.createElement(LeadForm, {
    surface: "light",
    templateId: window.EMAILJS.TEMPLATE_PLANTILLAS,
    downloadLink: "https://oltrasystems.com/recursos/15-plantillas-whatsapp.pdf",
    resourceName: "15 plantillas de WhatsApp",
    buttonLabel: "Recibir las 15 plantillas gratis",
    note: "Sin spam. Sin compromisos."
  }))));
}
window.WhatsappTemplates = WhatsappTemplates;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/LeadMagnets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Navbar.jsx
try { (() => {
// Navbar — sticky, blurs on scroll. Logo + links + sticky CTA.
function Navbar() {
  const {
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [{
    label: "Demo CRM",
    href: "#demo-crm"
  }, {
    label: "Servicios",
    href: "#servicios"
  }, {
    label: "Cómo funciona",
    href: "#proceso"
  }, {
    label: "FAQ",
    href: "#faq"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(17,24,39,0.85)" : "rgba(17,24,39,1)",
      backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? "rgba(148,163,184,0.12)" : "transparent"}`,
      transition: "background 240ms ease, border-color 240ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
      height: "72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.assetUrl("logoWhite"),
    alt: "Oltra Systems",
    style: {
      height: "46px",
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "2rem"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      color: "#94A3B8",
      textDecoration: "none",
      transition: "color 140ms ease"
    },
    onMouseEnter: e => e.currentTarget.style.color = "#fff",
    onMouseLeave: e => e.currentTarget.style.color = "#94A3B8"
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Diagn\xF3stico Express \u2014 17\u20AC")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": "Men\xFA",
    onClick: () => setOpen(o => !o),
    style: {
      display: "none",
      background: "transparent",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      padding: "8px"
    }
  }, open ? /*#__PURE__*/React.createElement(window.X, {
    size: 22
  }) : /*#__PURE__*/React.createElement(window.Menu, {
    size: 22
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile",
    style: {
      padding: "0 1.5rem 1.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      borderBottom: "1px solid rgba(148,163,184,0.12)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setOpen(false),
    style: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#CBD5E1",
      textDecoration: "none",
      padding: "0.75rem 0"
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => setOpen(false),
    style: {
      width: "100%"
    }
  }, "Diagn\xF3stico Express \u2014 17\u20AC"))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Problem.jsx
try { (() => {
// Problem section — eyebrow, headline, 3 blocks, manifesto pull-quote.
function Problem() {
  const {
    Card,
    Eyebrow
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    Clock,
    Inbox,
    Settings
  } = window;
  const blocks = [{
    icon: /*#__PURE__*/React.createElement(Clock, {
      size: 22
    }),
    title: "Sin respuesta rápida",
    body: "Un paciente te escribe por WhatsApp o Instagram a las 20h. Si no respondes en los próximos 30 minutos, llama a la clínica de al lado."
  }, {
    icon: /*#__PURE__*/React.createElement(Inbox, {
      size: 22
    }),
    title: "Sin seguimiento",
    body: "Muchos leads piden información y nunca reciben un segundo mensaje. Esa oportunidad se enfría y desaparece sin que nadie lo note."
  }, {
    icon: /*#__PURE__*/React.createElement(Settings, {
      size: 22
    }),
    title: "Sin sistema",
    body: "Los pacientes llegan por 5 canales distintos, la recepcionista no da abasto, las citas se pierden y los no-shows se repiten. Todo cuesta tiempo y dinero."
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "problema",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "ekg",
      color: "#0F172A",
      opacity: 0.04,
      style: {
        top: "42%",
        left: "0",
        width: "100%"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "44rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    surface: "light"
  }, "El problema real"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "Los leads llegan. Pero no se convierten.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1.25rem",
      marginTop: "2.5rem"
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement(window.Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "light",
    interactive: true,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "#F1F5F9",
      border: "1px solid #E2E8F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#475569",
      marginBottom: "1.25rem"
    }
  }, b.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 0.625rem",
      fontSize: "1.1875rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#111827"
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.9375rem",
      lineHeight: 1.65,
      color: "#475569"
    }
  }, b.body))))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3.5rem",
      paddingTop: "3rem",
      borderTop: "1px solid #E2E8F0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto",
      maxWidth: "46rem",
      fontSize: "clamp(1.375rem,2.6vw,2rem)",
      fontWeight: 600,
      fontStyle: "italic",
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
      color: "#111827"
    }
  }, "\u201CTu cl\xEDnica no necesita m\xE1s publicidad. Necesita un sistema que responda, haga seguimiento y convierta.\u201D"))));
}
window.Problem = Problem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Problem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Process.jsx
try { (() => {
// Process — 4 numbered steps, horizontal on desktop.
function Process() {
  const {
    Eyebrow
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    Search,
    Settings,
    Zap,
    Repeat
  } = window;
  const steps = [{
    n: "01",
    icon: /*#__PURE__*/React.createElement(Search, {
      size: 20
    }),
    title: "Diagnóstico",
    body: "Analizamos tu WhatsApp, recepción, formularios e Instagram. Detectamos las fugas concretas."
  }, {
    n: "02",
    icon: /*#__PURE__*/React.createElement(Settings, {
      size: 20
    }),
    title: "Diseño del sistema",
    body: "Diseñamos el flujo de respuesta automática, seguimiento y gestión de citas adaptado a tu clínica."
  }, {
    n: "03",
    icon: /*#__PURE__*/React.createElement(Zap, {
      size: 20
    }),
    title: "Implementación",
    body: "Configuramos las automatizaciones, el CRM básico y los recordatorios. Sin que tengas que tocar nada técnico."
  }, {
    n: "04",
    icon: /*#__PURE__*/React.createElement(Repeat, {
      size: 20
    }),
    title: "Optimización continua",
    body: "Monitorizamos resultados, ajustamos respuestas y mantenemos el sistema funcionando mes a mes."
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "proceso",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "implant",
      color: "#0F172A",
      opacity: 0.04,
      style: {
        top: "40px",
        right: "40px"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "44rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    surface: "light"
  }, "El proceso"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "Un sistema, no un servicio suelto.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "1.25rem",
      marginTop: "2.5rem"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(window.Reveal, {
    key: i,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      paddingTop: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      fontSize: "0.8125rem",
      fontWeight: 700,
      letterSpacing: "0.1em",
      color: "#3E5573"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #E2E8F0",
      paddingTop: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: "#F1F5F9",
      border: "1px solid #E2E8F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#475569",
      marginBottom: "1.125rem"
    }
  }, s.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 0.5rem",
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#111827"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.9rem",
      lineHeight: 1.6,
      color: "#475569"
    }
  }, s.body)))))));
}
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Qualification.jsx
try { (() => {
// Qualification — "esto NO es para todas las clínicas" + checklist + CTA.
function Qualification() {
  const {
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    Check,
    ArrowRight
  } = window;
  const items = ["Reciben leads pero no los convierten bien", "Su recepción está saturada o responde tarde", "Tienen problemas con no-shows y citas perdidas", "Quieren escalar sin contratar más personal", "Ofrecen tratamientos de valor medio-alto (implantes, Invisalign, ortodoncia, estética)"];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "para-quien",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "tooth",
      color: "#0F172A",
      opacity: 0.04,
      style: {
        bottom: "-20px",
        right: "30px"
      }
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "qual-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "clamp(2rem,5vw,4rem)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "Esto ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#64748B"
    }
  }, "NO"), " es para todas las cl\xEDnicas."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1.25rem 0 0",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#475569",
      maxWidth: "30rem"
    }
  }, "Oltra Systems funciona para cl\xEDnicas dentales privadas que:")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "0.875rem",
      alignItems: "flex-start",
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 12,
      padding: "1rem 1.125rem",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 26,
      height: 26,
      borderRadius: 999,
      background: "rgba(21,128,61,0.12)",
      border: "1px solid rgba(21,128,61,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#15803D",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 15,
    strokeWidth: 2.75
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9375rem",
      lineHeight: 1.5,
      color: "#334155"
    }
  }, it)))))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      paddingTop: "2.5rem",
      borderTop: "1px solid #E2E8F0",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.015em",
      color: "#111827"
    }
  }, "Si tu cl\xEDnica encaja, tenemos mucho que hablar."), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-dark",
    surface: "light",
    size: "lg",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Solicitar Diagn\xF3stico Express \u2014 17\u20AC"))));
}
window.Qualification = Qualification;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Qualification.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SelfDiagnosis.jsx
try { (() => {
// CAMBIO 6 — Autodiagnóstico interactivo (8 preguntas, estado local, sin backend).
function SelfDiagnosis() {
  const {
    Eyebrow,
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    ArrowRight,
    Check,
    Repeat
  } = window;
  const QUESTIONS = [{
    q: "¿Respondes a los mensajes de WhatsApp e Instagram en menos de 30 minutos?",
    a: ["Sí, siempre", "A veces", "No, tardamos horas o días"]
  }, {
    q: "¿Tienes un proceso de seguimiento cuando un lead no responde tras el primer contacto?",
    a: ["Sí, lo hacemos siempre", "Lo intentamos", "No tenemos seguimiento"]
  }, {
    q: "¿Cuántos no-shows (pacientes que no aparecen a su cita) tienes al mes?",
    a: ["0–2", "3–5", "Más de 5"]
  }, {
    q: "¿Tienes registrados todos tus leads en alguna herramienta o CRM?",
    a: ["Sí, todos organizados", "Algunos, no todos", "No, va todo por WhatsApp/papel"]
  }, {
    q: "¿Sabes cuántos leads recibes al mes y cuántos se convierten en pacientes?",
    a: ["Sí, lo mido", "Aproximadamente", "No tengo esos datos"]
  }, {
    q: "¿Tu recepción tiene guiones o respuestas tipo para situaciones habituales?",
    a: ["Sí, están definidos", "Algunos", "No, cada uno responde como puede"]
  }, {
    q: "¿Envías recordatorios de cita automáticos a los pacientes?",
    a: ["Sí, automáticamente", "A veces manualmente", "No enviamos recordatorios"]
  }, {
    q: "¿Tienes alguna automatización activa en WhatsApp, email o CRM?",
    a: ["Sí, varias", "Alguna básica", "No, todo es manual"]
  }];
  const RESULTS = [{
    min: 0,
    max: 6,
    level: "Clínica con fugas críticas",
    color: "#EF4444",
    bg: "rgba(185,28,28,0.14)",
    text: "Tu clínica está perdiendo pacientes y dinero cada semana sin saberlo. Un sistema básico puede cambiar esto en 30 días."
  }, {
    min: 7,
    max: 11,
    level: "Hay margen de mejora importante",
    color: "#F59E0B",
    bg: "rgba(180,83,9,0.16)",
    text: "Tienes bases, pero hay fugas claras en el seguimiento y la conversión. Podemos ayudarte a cerrarlas."
  }, {
    min: 12,
    max: 16,
    level: "Bien, pero puedes optimizar más",
    color: "#22C55E",
    bg: "rgba(21,128,61,0.14)",
    text: "Tu sistema funciona, pero hay oportunidades de automatizar y escalar sin esfuerzo manual."
  }];
  const [step, setStep] = React.useState(0); // 0..7 questions, 8 = result
  const [score, setScore] = React.useState(0);
  const [anim, setAnim] = React.useState(true);
  const choose = optIndex => {
    const points = 2 - optIndex; // A=2, B=1, C=0
    const newScore = score + points;
    setScore(newScore);
    setAnim(false);
    setTimeout(() => {
      setStep(s => s + 1);
      setAnim(true);
    }, 120);
  };
  const restart = () => {
    setStep(0);
    setScore(0);
    setAnim(true);
  };
  const isResult = step >= QUESTIONS.length;
  const result = RESULTS.find(r => score >= r.min && score <= r.max) || RESULTS[0];
  const progress = isResult ? 100 : step / QUESTIONS.length * 100;
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "carbon",
    id: "autodiagnostico",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "molar",
      opacity: 0.035,
      style: {
        bottom: "20px",
        right: "-60px"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "44rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Diagn\xF3stico r\xE1pido"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "\xBFC\xF3mo est\xE1 tu cl\xEDnica ahora mismo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem 0 0",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#94A3B8",
      maxWidth: "38rem"
    }
  }, "Responde 8 preguntas y descubre en qu\xE9 nivel est\xE1 tu sistema de captaci\xF3n y seguimiento.")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2.5rem",
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: "#334155",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + "%",
      height: "100%",
      background: "#fff",
      borderRadius: 999,
      transition: "width 300ms cubic-bezier(0.16,1,0.3,1)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "#94A3B8",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, isResult ? "Completado" : `${step + 1} de ${QUESTIONS.length}`)), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: anim ? 1 : 0,
      transform: anim ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 280ms cubic-bezier(0.16,1,0.3,1), transform 280ms cubic-bezier(0.16,1,0.3,1)"
    }
  }, !isResult ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1E293B",
      border: "1px solid rgba(148,163,184,0.14)",
      borderRadius: 16,
      padding: "1.75rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 1.5rem",
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      color: "#fff"
    }
  }, QUESTIONS[step].q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    }
  }, QUESTIONS[step].a.map((opt, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => choose(i),
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "rgba(148,163,184,0.22)";
      e.currentTarget.style.background = "rgba(15,23,42,0.5)";
    },
    style: {
      width: "100%",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      fontWeight: 500,
      color: "#E2E8F0",
      padding: "0.95rem 1.125rem",
      borderRadius: 10,
      cursor: "pointer",
      background: "rgba(15,23,42,0.5)",
      border: "1.5px solid rgba(148,163,184,0.22)",
      transition: "all 140ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 22,
      height: 22,
      borderRadius: 999,
      border: "1.5px solid rgba(148,163,184,0.4)"
    }
  }), opt)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1E293B",
      border: "1px solid rgba(148,163,184,0.14)",
      borderRadius: 16,
      padding: "2rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "0.4rem 0.8rem",
      borderRadius: 999,
      background: result.bg,
      color: result.color,
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: result.color
    }
  }), " ", score, " / 16 puntos"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 0.875rem",
      fontSize: "clamp(1.5rem,3vw,2rem)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#fff",
      lineHeight: 1.15
    }
  }, result.level), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 1.75rem",
      maxWidth: "32rem",
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "#CBD5E1"
    }
  }, result.text), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Solicitar Diagn\xF3stico Express \u2014 17\u20AC"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1rem auto 0",
      maxWidth: "30rem",
      fontSize: "0.8125rem",
      color: "#94A3B8"
    }
  }, "En el diagn\xF3stico vemos exactamente qu\xE9 est\xE1 fallando en tu cl\xEDnica concreta."), /*#__PURE__*/React.createElement("button", {
    onClick: restart,
    style: {
      marginTop: "1.5rem",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#94A3B8",
      background: "transparent",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Repeat, {
    size: 15
  }), " Repetir diagn\xF3stico"))))));
}
window.SelfDiagnosis = SelfDiagnosis;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SelfDiagnosis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
// Services — 3 pricing tiers, middle one featured.
function Services() {
  const {
    Eyebrow,
    Card,
    Badge,
    Button
  } = window.OltraSystemsDesignSystem_36063f;
  const {
    Check,
    ArrowRight
  } = window;
  const tiers = [{
    name: "Diagnóstico Express de Fugas",
    price: "17€",
    cadence: "pago único",
    ideal: "Clínicas que quieren saber exactamente dónde pierden pacientes antes de invertir más.",
    features: ["Auditoría de WhatsApp, recepción e Instagram", "Loom personalizado con hallazgos (5–10 min)", "Mini informe con 3–5 mejoras accionables", "Sin compromisos adicionales"],
    cta: "Solicitar Diagnóstico — 17€",
    variant: "outline",
    featured: false
  }, {
    name: "Recepción Inteligente 24/7",
    price: "desde 1.000€",
    cadence: "/ mes",
    ideal: "Clínicas que quieren automatizar la captación y el seguimiento de pacientes.",
    features: ["Automatización de WhatsApp 24/7", "CRM básico con clasificación de leads", "Seguimiento automático de oportunidades", "Recordatorios de cita y reducción de no-shows", "Recuperación de leads inactivos", "Informe mensual de conversión"],
    cta: "Solicitar información",
    variant: "solid-dark",
    featured: true
  }, {
    name: "Recepción Inteligente Pro",
    price: "desde 2.500€",
    cadence: "/ mes",
    ideal: "Clínicas con volumen alto o que quieren un sistema completo.",
    features: ["Todo lo del plan 24/7, más:", "Multi-canal (Instagram DM, formularios, Google)", "Centralización total de comunicación", "Seguimiento post-consulta y reactivación", "Soporte prioritario"],
    cta: "Solicitar información",
    variant: "outline",
    featured: false
  }];
  return /*#__PURE__*/React.createElement(window.Section, {
    bg: "paper",
    id: "servicios",
    decor: /*#__PURE__*/React.createElement(window.Decor, {
      kind: "cross",
      color: "#0F172A",
      opacity: 0.05,
      style: {
        top: "48px",
        right: "48px"
      }
    })
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: "46rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    surface: "light"
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0.875rem 0 0",
      fontSize: "clamp(1.875rem,3.5vw,2.5rem)",
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: "-0.025em",
      color: "#111827"
    }
  }, "Elige el nivel de sistema que necesita tu cl\xEDnica.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 svc",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1.25rem",
      marginTop: "2.75rem",
      alignItems: "stretch"
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(window.Reveal, {
    key: i,
    delay: i * 90,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "light",
    featured: t.featured,
    padding: "1.75rem",
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: t.featured ? "-0.75rem" : 0,
      marginBottom: t.featured ? "-0.75rem" : 0
    }
  }, t.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "featured"
  }, "M\xE1s popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "1.1875rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#111827"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "0.4rem",
      margin: "1rem 0 0.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "2rem",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "#111827"
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      color: "#64748B",
      fontWeight: 500
    }
  }, t.cadence)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0.75rem 0 1.5rem",
      fontSize: "0.875rem",
      lineHeight: 1.55,
      color: "#475569",
      minHeight: "3.4rem"
    }
  }, t.ideal), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "0 0 1.75rem",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      flex: 1
    }
  }, t.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: "flex",
      gap: "0.625rem",
      fontSize: "0.9rem",
      lineHeight: 1.45,
      color: f.endsWith("más:") ? "#94A3B8" : "#334155",
      fontWeight: f.endsWith("más:") ? 600 : 400
    }
  }, !f.endsWith("más:") && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: "1px",
      color: "#15803D"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 17,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(Button, {
    variant: t.variant,
    surface: "light",
    size: "md",
    href: window.CALENDLY,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: t.featured ? /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    }) : null,
    style: {
      width: "100%"
    }
  }, t.cta))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/icons.jsx
try { (() => {
// Lucide icons (outline, 2px stroke) as small React components. Copied paths from lucide.dev.
const Ic = (paths, vb = "0 0 24 24") => ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  style = {},
  ...rest
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: vb,
  fill: "none",
  stroke: color,
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    display: "block",
    ...style
  },
  ...rest
}, paths.map((d, i) => React.createElement("path", {
  key: i,
  d
})));
const ArrowRight = Ic(["M5 12h14", "m13 6 6 6-6 6"]);
const MessageCircle = Ic(["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"]);
const Clock = Ic(["M12 6v6l4 2", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"]);
const CalendarX = Ic(["M8 2v4", "M16 2v4", "M3 10h18", "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7", "m17 16 4 4", "m21 16-4 4"]);
const TrendingDown = Ic(["M16 17h6v-6", "m22 17-8.5-8.5-5 5L2 7"]);
const TrendingUp = Ic(["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"]);
const BarChart = Ic(["M3 3v16a2 2 0 0 0 2 2h16", "M18 17V9", "M13 17V5", "M8 17v-3"]);
const Search = Ic(["m21 21-4.34-4.34", "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"]);
const Settings = Ic(["M20 7h-9", "M14 17H5", "M17 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z", "M7 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"]);
const Zap = Ic(["M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"]);
const Repeat = Ic(["m17 2 4 4-4 4", "M3 11v-1a4 4 0 0 1 4-4h14", "m7 22-4-4 4-4", "M21 13v1a4 4 0 0 1-4 4H3"]);
const Check = Ic(["M20 6 9 17l-5-5"]);
const Users = Ic(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"]);
const Bell = Ic(["M10.27 21a1.94 1.94 0 0 0 3.46 0", "M3.26 15.27a2 2 0 0 0 1.74 1h14a2 2 0 0 0 1.74-1l-1.74-3A8 8 0 0 1 18 9a6 6 0 0 0-12 0 8 8 0 0 1-1 3.27z"]);
const ShieldCheck = Ic(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"]);
const X = Ic(["M18 6 6 18", "m6 6 12 12"]);
const Menu = Ic(["M4 12h16", "M4 6h16", "M4 18h16"]);
const Inbox = Ic(["M22 12h-6l-2 3h-4l-2-3H2", "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"]);
const Instagram = Ic(["M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z", "M17.5 6.5h.01"]).bind(null);
Object.assign(window, {
  ArrowRight,
  MessageCircle,
  Clock,
  CalendarX,
  TrendingDown,
  TrendingUp,
  BarChart,
  Search,
  Settings,
  Zap,
  Repeat,
  Check,
  Users,
  Bell,
  ShieldCheck,
  X,
  Menu,
  Inbox
});
// Instagram needs a circle+rect; define explicitly:
window.Instagram = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  style = {},
  ...rest
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    display: "block",
    ...style
  },
  ...rest
}, React.createElement("rect", {
  width: 20,
  height: 20,
  x: 2,
  y: 2,
  rx: 5,
  ry: 5
}), React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
}), React.createElement("line", {
  x1: 17.5,
  x2: 17.51,
  y1: 6.5,
  y2: 6.5
}));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/shared.jsx
try { (() => {
// Shared layout helpers for the landing kit.

function Section({
  bg = "carbon",
  children,
  id,
  style = {},
  decor = null
}) {
  const bgs = {
    carbon: "#111827",
    steel: "#1E293B",
    paper: "#F8FAFC"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bgs[bg],
      padding: "clamp(3.5rem, 7vw, 6rem) 1.5rem",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, decor, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }
  }, children));
}

// Fade-in + slide-up on scroll into view. Base state is VISIBLE (the end state) so
// above-the-fold content, reduced-motion, print and export always paint. Only elements
// confirmed below the fold at mount are hidden (decided in useLayoutEffect, before paint)
// and then animated in by an IntersectionObserver.
function Reveal({
  children,
  delay = 0,
  style = {},
  as = "div"
}) {
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
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setHidden(false);
        io.disconnect();
      }
    }, {
      threshold: 0.12
    });
    io.observe(el);
    const t = setTimeout(() => {
      setHidden(false);
      io.disconnect();
    }, 2500); // safety net
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: hidden ? 0 : 1,
      transform: hidden ? "translateY(16px)" : "translateY(0)",
      transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style
    }
  }, children);
}

// ---- Asset resolver ----------------------------------------------------------
// In the live kit, images load via relative paths. In the bundled standalone build,
// super_inline_html exposes inlined data-URIs on window.__resources keyed by the
// data-resource-id of each <meta name="ext-resource-dependency">. One resolver, both builds.
window.ASSETS = {
  logoWhite: "assets/logos/oltra-logo-white.png",
  markWhite: "assets/logos/oltra-mark-white.png",
  markNavy: "assets/logos/oltra-mark.png"
};
window.assetUrl = k => window.__resources && window.__resources[k] || window.ASSETS[k];

// ---- Decorative background SVGs ----------------------------------------------
// Very subtle line motifs for dark sections. Parent must be position:relative + overflow:hidden;
// these sit at z-index:0, opacity ~0.05, and never intercept clicks.
function Decor({
  kind,
  style = {},
  opacity = 0.05,
  color = "#FFFFFF"
}) {
  const common = {
    position: "absolute",
    zIndex: 0,
    opacity,
    pointerEvents: "none",
    ...style
  };
  if (kind === "molar") {
    return /*#__PURE__*/React.createElement("svg", {
      width: "220",
      height: "220",
      viewBox: "0 0 100 100",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M30 15 C20 15 10 25 12 38 L18 70 C19 76 24 80 30 80 C34 80 37 77 40 72 C43 77 46 80 50 80 C54 80 57 77 60 72 C63 77 66 80 70 80 C76 80 81 76 82 70 L88 38 C90 25 80 15 70 15 C64 15 58 19 50 19 C42 19 36 15 30 15Z",
      stroke: color,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 19 L50 50",
      stroke: color,
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 15 C35 25 40 30 50 30 C60 30 65 25 70 15",
      stroke: color,
      strokeWidth: "1.5"
    }));
  }
  if (kind === "cross") {
    return /*#__PURE__*/React.createElement("svg", {
      width: "120",
      height: "120",
      viewBox: "0 0 60 60",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "8",
      width: "16",
      height: "44",
      rx: "3",
      stroke: color,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "22",
      width: "44",
      height: "16",
      rx: "3",
      stroke: color,
      strokeWidth: "2"
    }));
  }
  if (kind === "ekg") {
    return /*#__PURE__*/React.createElement("svg", {
      width: "300",
      height: "80",
      viewBox: "0 0 300 80",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "0,40 60,40 75,10 85,70 95,20 110,40 300,40",
      stroke: color,
      strokeWidth: "2"
    }));
  }
  if (kind === "ring") {
    // Echoes the logo mark — a broken ring with the accent tick.
    return /*#__PURE__*/React.createElement("svg", {
      width: "400",
      height: "400",
      viewBox: "0 0 100 100",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M50 8 a42 42 0 1 1 -0.1 0",
      stroke: color,
      strokeWidth: "6",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "46.5",
      y: "44",
      width: "7",
      height: "6",
      rx: "1",
      fill: color
    }));
  }
  if (kind === "tooth") {
    // Single incisor outline, two roots.
    return /*#__PURE__*/React.createElement("svg", {
      width: "180",
      height: "180",
      viewBox: "0 0 100 100",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M50 14 C36 14 24 22 24 40 C24 56 30 76 36 86 C39 91 45 89 46 82 L48 58 C48 54 52 54 52 58 L54 82 C55 89 61 91 64 86 C70 76 76 56 76 40 C76 22 64 14 50 14 Z",
      stroke: color,
      strokeWidth: "2"
    }));
  }
  if (kind === "implant") {
    // Stylized dental implant: crown + threaded post tapering to a point.
    return /*#__PURE__*/React.createElement("svg", {
      width: "150",
      height: "190",
      viewBox: "0 0 100 130",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M34 32 C34 18 66 18 66 32 L61 44 L39 44 Z",
      stroke: color,
      strokeWidth: "2",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M43 44 L43 92 M57 44 L57 92",
      stroke: color,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M43 52 L57 56 M43 60 L57 64 M43 68 L57 72 M43 76 L57 80 M43 84 L57 88",
      stroke: color,
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M43 92 L50 104 L57 92",
      stroke: color,
      strokeWidth: "2",
      strokeLinejoin: "round"
    }));
  }
  if (kind === "arch") {
    // Dental arch with bracket ticks (aligner / smile line).
    return /*#__PURE__*/React.createElement("svg", {
      width: "320",
      height: "200",
      viewBox: "0 0 160 100",
      fill: "none",
      style: common,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 26 C12 70 42 92 80 92 C118 92 148 70 148 26",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 40 l-7 -5 M40 58 l-6 -7 M66 70 l-3 -8 M94 70 l3 -8 M120 58 l6 -7 M138 40 l7 -5",
      stroke: color,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    }));
  }
  return null;
}

// ---- EmailJS helper ----------------------------------------------------------
// Lead-magnet forms send the resource via EmailJS. Fill these with your real keys.
// While they hold the PLACEHOLDER_ values, the form runs in demo mode (simulated success)
// so the UI is testable without a backend. Replace all four to go live.
window.EMAILJS = {
  PUBLIC_KEY: "PLACEHOLDER_PUBLIC_KEY",
  // Raz: tu Public Key de EmailJS
  SERVICE_ID: "PLACEHOLDER_SERVICE_ID",
  // Raz: tu Service ID
  TEMPLATE_5_FUGAS: "PLACEHOLDER_TEMPLATE_5FUGAS",
  // Raz: template del PDF "5 fugas"
  TEMPLATE_PLANTILLAS: "PLACEHOLDER_TEMPLATE_PLANTILLAS" // Raz: template "15 plantillas"
};
window.sendLeadMagnet = async function ({
  email,
  templateId,
  downloadLink,
  resourceName
}) {
  const cfg = window.EMAILJS;
  const isDemo = !window.emailjs || cfg.PUBLIC_KEY.startsWith("PLACEHOLDER") || cfg.SERVICE_ID.startsWith("PLACEHOLDER") || (templateId || "").startsWith("PLACEHOLDER");
  if (isDemo) {
    // Demo mode: simulate a network round-trip, no real email sent.
    await new Promise(r => setTimeout(r, 900));
    console.info("[Oltra] EmailJS en modo demo — configura window.EMAILJS para enviar de verdad.", {
      email,
      resourceName
    });
    return {
      demo: true
    };
  }
  try {
    window.emailjs.init(cfg.PUBLIC_KEY);
  } catch (e) {}
  return window.emailjs.send(cfg.SERVICE_ID, templateId, {
    to_email: email,
    to_name: email.split("@")[0],
    download_link: downloadLink,
    resource_name: resourceName,
    from_name: "Oltra Systems"
  });
};
window.Section = Section;
window.Reveal = Reveal;
window.Decor = Decor;
window.CALENDLY = "https://calendly.com/contacto-oltrasystems/30min";
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

})();
