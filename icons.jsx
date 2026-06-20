// Lucide icons (outline, 2px stroke) as small React components. Copied paths from lucide.dev.
const Ic = (paths, vb = "0 0 24 24") => ({ size = 24, color = "currentColor", strokeWidth = 2, style = {}, ...rest }) =>
  React.createElement(
    "svg",
    { width: size, height: size, viewBox: vb, fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", style: { display: "block", ...style }, ...rest },
    paths.map((d, i) => React.createElement("path", { key: i, d }))
  );

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
  ArrowRight, MessageCircle, Clock, CalendarX, TrendingDown, TrendingUp,
  BarChart, Search, Settings, Zap, Repeat, Check, Users, Bell, ShieldCheck, X, Menu, Inbox,
});
// Instagram needs a circle+rect; define explicitly:
window.Instagram = ({ size = 24, color = "currentColor", strokeWidth = 2, style = {}, ...rest }) =>
  React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", style: { display: "block", ...style }, ...rest },
    React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
    React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" }),
    React.createElement("line", { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 })
  );
