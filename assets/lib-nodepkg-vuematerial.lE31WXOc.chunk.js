import { s as o, v as e, a, d as t, t as r, P as n, O as l } from "./lib-nodepkg-vueuikit.CigEhthZ.chunk.js";
import { j as i, d as s, f as d, b as p, w as c, e as u } from "./lib-nodepkg-vuekit.BGCGhJCn.chunk.js";
import { b as y, c as b, e as m } from "./lib-nodepkg-typedef.Bm5O1R9v.chunk.js";
import { g } from "./vendor-innoai-tech-lodash.3H0k6Xl3.chunk.js";
let _ = /* @__PURE__ */ o("button", { hover: /* @__PURE__ */ y().optional(), focus: /* @__PURE__ */ y().optional(), active: /* @__PURE__ */ y().optional(), disabled: /* @__PURE__ */ y().optional() }, { displayName: "ButtonBase" })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), v = /* @__PURE__ */ o(_, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } });
o(_, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } });
let f = /* @__PURE__ */ o(_, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } });
o(_, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), o(_, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) }, _active: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) }, _focus: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } });
let h = /* @__PURE__ */ o(f, { displayName: "IconButton" })({ boxSize: 40, p: 0 });
var C = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", $ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", x = "M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z", H = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z", V = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z", A = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z", w = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z";
let M = /* @__PURE__ */ o("span", (o2, e2) => (e3) => /* @__PURE__ */ i(e3, { "data-icon": true, "data-placement": o2.placement, children: /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { d: o2.path }) }) }), { displayName: "Icon", props: ["path", "placement"] })({ boxSize: "1.2em" }), B = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), N = /* @__PURE__ */ o("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 });
s({ title: /* @__PURE__ */ b(), $default: /* @__PURE__ */ b() }, (o2, e2) => {
  let { slots: a2 } = e2, t2 = /* @__PURE__ */ d(false);
  return () => {
    let e3 = a2.default()[0];
    return /* @__PURE__ */ i(n, { isOpen: t2.value, $content: /* @__PURE__ */ i(N, { children: o2.title }), $transition: (o3) => {
      let { content: e4 } = o3;
      return /* @__PURE__ */ i(B, { children: e4 });
    }, children: e3 ? p(e3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip" });
let S = /* @__PURE__ */ o("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 });
o("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.08)) } }), s((o2, e2) => {
  let { slots: a2 } = e2, t2 = /* @__PURE__ */ d(false);
  return () => {
    var e3;
    let r2 = a2.default ? a2.default()[0] : void 0;
    return /* @__PURE__ */ i(n, { isOpen: t2.value, placement: o2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: /* @__PURE__ */ i(S, { children: null === (e3 = a2.menu) || void 0 === e3 ? void 0 : e3.call(a2) }), children: r2 ? p(r2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu", props: ["placement"] });
let k = /* @__PURE__ */ o("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), I = /* @__PURE__ */ o("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ e("sys.scrim", /* @__PURE__ */ a(0.38)) });
o("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" });
let L = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate });
s({ isOpen: /* @__PURE__ */ y().optional(), onClose: /* @__PURE__ */ b(), $default: /* @__PURE__ */ b().optional() }, (o2, e2) => {
  var a2;
  let { slots: t2, emit: r2 } = e2, n2 = /* @__PURE__ */ d(null !== (a2 = o2.isOpen) && void 0 !== a2 && a2), s2 = /* @__PURE__ */ d(false);
  return c(() => o2.isOpen, (o3) => {
    true === o3 ? n2.value = true : false === o3 && (s2.value = false);
  }), () => {
    var o3;
    return /* @__PURE__ */ i(l, { isOpen: n2.value, onContentBeforeMount: () => {
      s2.value = true;
    }, onEscKeydown: () => {
      s2.value = false;
    }, children: /* @__PURE__ */ u(k, { children: [/* @__PURE__ */ i(L, { onComplete: (o4) => {
      "leave" === o4 && (n2.value = false, r2("close"));
    }, children: s2.value ? /* @__PURE__ */ i(I, { onClick: () => {
      s2.value = false;
    } }) : null }), null === (o3 = t2.default) || void 0 === o3 ? void 0 : o3.call(t2)] }) });
  };
}, { displayName: "Dialog" }), o("label", { valued: /* @__PURE__ */ y().optional(), focus: /* @__PURE__ */ y().optional(), invalid: /* @__PURE__ */ y().optional(), disabled: /* @__PURE__ */ y().optional(), $label: /* @__PURE__ */ b().optional(), $supporting: /* @__PURE__ */ b().optional(), $leading: /* @__PURE__ */ b().optional(), $trailing: /* @__PURE__ */ b().optional(), $default: /* @__PURE__ */ b() }, (o2, e2) => {
  let { slots: a2 } = e2;
  return (e3) => {
    var t2, r2, n2, l2;
    let s2 = o2.valued, d2 = o2.invalid, c2 = o2.disabled, y2 = /* @__PURE__ */ (null !== (l2 = null === (t2 = a2.default) || void 0 === t2 ? void 0 : t2.call(a2)) && void 0 !== l2 ? l2 : []).map((o3) => "input" === o3.type ? (s2 = !!g(o3.props, ["value"], /* @__PURE__ */ g(o3.props, ["placeholder"], s2)), c2 = /* @__PURE__ */ g(o3.props, ["disabled"], c2), p(o3, { disabled: c2 })) : p(o3));
    return /* @__PURE__ */ u(e3, { "data-valued": s2, "data-invalid": d2, "data-disabled": c2, "data-focus-within": o2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [/* @__PURE__ */ u("div", { "data-input-container": "", children: [a2.leading && /* @__PURE__ */ i(O, { children: /* @__PURE__ */ a2.leading() }), /* @__PURE__ */ i("div", { "data-input-label": "", children: null === (r2 = a2.label) || void 0 === r2 ? void 0 : r2.call(a2) }), y2, a2.trailing && /* @__PURE__ */ i(O, { children: /* @__PURE__ */ a2.trailing() })] }), a2.supporting && /* @__PURE__ */ i("div", { "data-input-supporting": "", children: null === (n2 = a2.supporting) || void 0 === n2 ? void 0 : n2.call(a2) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } });
let O = /* @__PURE__ */ o("div", { role: /* @__PURE__ */ m(["leading", "trailing"]).optional().default("leading") }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  v as F,
  M as I,
  x as a,
  C as b,
  h as c,
  $ as d,
  V as e,
  A as f,
  w as g,
  H as m
};
