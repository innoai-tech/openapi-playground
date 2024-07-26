import { s as o, v as e, a, d as t, t as r, P as l, O as n } from "./lib-nodepkg-vueuikit.C_7AyAVq.chunk.js";
import { v as i, z as s, A as d, B as p, C as u, w as c, g as y } from "./lib-nodepkg-vuekit.BIKlT1YR.chunk.js";
import { b, c as m, e as g } from "./lib-nodepkg-typedef.Xn-QRvlw.chunk.js";
let _ = o("button", { hover: b().optional(), focus: b().optional(), active: b().optional(), disabled: b().optional() }, { displayName: "ButtonBase" })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), v = o(_, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: e("white", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("white", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("white", a(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: e("sys.on-surface", a(0.12)) } } });
o(_, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: e("sys.primary", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("sys.primary", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("sys.primary", a(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", a(0.38)), _$before: { bgColor: e("sys.on-surface", a(0.12)) } } });
let f = o(_, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: e("sys.primary", a(0.08)) } }, _focus: { _$before: { bgColor: e("sys.primary", a(0.12)) } }, _active: { _$before: { bgColor: e("sys.primary", a(0.12)) } }, _disabled: { color: e("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } });
o(_, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: e("sys.on-secondary-container", a(0.08)) } }, _focus: { _$before: { bgColor: e("sys.on-secondary-container", a(0.12)) } }, _active: { _$before: { bgColor: e("sys.on-secondary-container", a(0.12)) } }, _disabled: { color: e("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: e("sys.on-surface", a(0.12)) } } }), o(_, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: e("sys.primary", a(0.08)) }, _active: { bgColor: e("sys.primary", a(0.12)) }, _focus: { bgColor: e("sys.primary", a(0.12)) }, _disabled: { color: e("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: e("sys.on-surface", a(0.12)) } }), o(f, { displayName: "IconButton" })({ boxSize: 40, p: 0 });
var h = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z";
let C = o("span", (o2, e2) => (e3) => i(e3, { "data-icon": true, "data-placement": o2.placement, children: i("svg", { viewBox: "0 0 24 24", children: i("path", { d: o2.path }) }) }), { displayName: "Icon", props: ["path", "placement"] })({ boxSize: "1.2em" }), $ = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), x = o("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 });
s({ title: m(), $default: m() }, (o2, e2) => {
  let { slots: a2 } = e2, t2 = d(false);
  return () => {
    let e3 = a2.default()[0];
    return i(l, { isOpen: t2.value, $content: i(x, { children: o2.title }), $transition: (o3) => {
      let { content: e4 } = o3;
      return i($, { children: e4 });
    }, children: e3 ? p(e3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip" });
let w = o("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 });
o("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: e("sys.on-surface", a(0.08)) } }), s({ placement: m().optional(), $menu: m(), $default: m() }, (o2, e2) => {
  let { slots: a2 } = e2, t2 = d(false);
  return () => {
    var e3;
    let r2 = a2.default ? a2.default()[0] : void 0;
    return i(l, { isOpen: t2.value, placement: o2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: i(w, { children: null === (e3 = a2.menu) || void 0 === e3 ? void 0 : e3.call(a2) }), children: r2 ? p(r2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu" });
let N = o("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), B = o("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: e("sys.scrim", a(0.38)) });
o("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" });
let S = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate });
s({ isOpen: b().optional(), onClose: m(), $default: m().optional() }, (o2, e2) => {
  var a2;
  let { slots: t2, emit: r2 } = e2, l2 = d(null !== (a2 = o2.isOpen) && void 0 !== a2 && a2), s2 = d(false);
  return u(() => o2.isOpen, (o3) => {
    true === o3 ? l2.value = true : false === o3 && (s2.value = false);
  }), () => {
    var o3;
    return i(n, { isOpen: l2.value, onContentBeforeMount: () => {
      s2.value = true;
    }, onEscKeydown: () => {
      s2.value = false;
    }, children: c(N, { children: [i(S, { onComplete: (o4) => {
      "leave" === o4 && (l2.value = false, r2("close"));
    }, children: s2.value ? i(B, { onClick: () => {
      s2.value = false;
    } }) : null }), null === (o3 = t2.default) || void 0 === o3 ? void 0 : o3.call(t2)] }) });
  };
}, { displayName: "Dialog" }), o("label", { valued: b().optional(), focus: b().optional(), invalid: b().optional(), disabled: b().optional(), $label: m().optional(), $supporting: m().optional(), $leading: m().optional(), $trailing: m().optional(), $default: m() }, (o2, e2) => {
  let { slots: a2 } = e2;
  return (e3) => {
    var t2, r2, l2, n2;
    let s2 = o2.valued, d2 = o2.invalid, u2 = o2.disabled, b2 = (null !== (n2 = null === (t2 = a2.default) || void 0 === t2 ? void 0 : t2.call(a2)) && void 0 !== n2 ? n2 : []).map((o3) => "input" === o3.type ? (s2 = !!y(o3.props, ["value"], y(o3.props, ["placeholder"], s2)), u2 = y(o3.props, ["disabled"], u2), p(o3, { disabled: u2 })) : p(o3));
    return c(e3, { "data-valued": s2, "data-invalid": d2, "data-disabled": u2, "data-focus-within": o2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [c("div", { "data-input-container": "", children: [a2.leading && i(I, { children: a2.leading() }), i("div", { "data-input-label": "", children: null === (r2 = a2.label) || void 0 === r2 ? void 0 : r2.call(a2) }), b2, a2.trailing && i(I, { children: a2.trailing() })] }), a2.supporting && i("div", { "data-input-supporting": "", children: null === (l2 = a2.supporting) || void 0 === l2 ? void 0 : l2.call(a2) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } });
let I = o("div", { role: g(["leading", "trailing"]).optional().default("leading") }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  v as F,
  C as I,
  h as m
};
