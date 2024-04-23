import { s as e, v as o, a, d as t, t as n, P as r, O as i } from "./lib--nodepkg-vueuikit.WHW5k3l4.chunk.js";
import { h as s, j as l, f as d, c, g as p } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { e as u } from "./lib--nodepkg-vuekit.BRo0ZIlg.chunk.js";
import { j as y, a as b } from "./lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js";
import { b as g } from "./vendor--vue-reactivity.BF2wQyBH.chunk.js";
import { e as m, w as _ } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
let v = Object.assign(e("button", { hover: s().optional(), focus: s().optional(), active: s().optional(), disabled: s().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), { displayName: "ButtonBase" }), f = Object.assign(e(v)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: o("white", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), { displayName: "FilledButton" });
Object.assign(e(v)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), { displayName: "ElevatedButton" });
let h = Object.assign(e(v)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), { displayName: "TextButton" });
Object.assign(e(v)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: o("sys.on-secondary-container", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), { displayName: "TonalButton" }), Object.assign(e(v)({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: o("sys.primary", a(0.08)) }, _active: { bgColor: o("sys.primary", a(0.12)) }, _focus: { bgColor: o("sys.primary", a(0.12)) }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: o("sys.on-surface", a(0.12)) } }), { displayName: "OutlinedButton" }), Object.assign(e(h, {})({ boxSize: 40, p: 0 }), { displayName: "IconButton" });
var C = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z";
let $ = Object.assign(e("span", { placement: l(["start", "end"]).optional(), path: d() }, (e2, o2) => (o3) => y(o3, { "data-icon": true, "data-placement": e2.placement, children: y("svg", { viewBox: "0 0 24 24", children: y("path", { d: e2.path }) }) }))({ boxSize: "1.2em" }), { displayName: "Icon" }), x = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.decelerate }), w = e("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 });
Object.assign(u({ title: c(), $default: c() }, (e2, o2) => {
  let { slots: a2 } = o2, t2 = g(false);
  return () => {
    let o3 = a2.default()[0];
    return y(r, { isOpen: t2.value, $content: y(w, { children: e2.title }), $transition: (e3) => {
      let { content: o4 } = e3;
      return y(x, { children: o4 });
    }, children: o3 ? m(o3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}), { displayName: "Tooltip" });
let j = e("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), O = e("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: o("sys.on-surface", a(0.08)) } }), k = u({ placement: c().optional(), $menu: c(), $default: c() }, (e2, o2) => {
  let { slots: a2 } = o2, t2 = g(false);
  return () => {
    var o3;
    let n2 = a2.default ? a2.default()[0] : void 0;
    return y(r, { isOpen: t2.value, placement: e2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: y(S, { children: null === (o3 = a2.menu) || void 0 === o3 ? void 0 : o3.call(a2) }), children: n2 ? m(n2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}), S = Object.assign(j, { displayName: "MenuContainer" });
Object.assign(O, { displayName: "ListItem" }), Object.assign(k, { displayName: "Menu" });
let B = e("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), N = e("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: o("sys.scrim", a(0.38)) }), I = e("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), T = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.accelerate }), z = u({ isOpen: i.propTypes.isOpen, onClose: c(), $default: c().optional() }, (e2, o2) => {
  var a2;
  let { slots: t2, emit: n2 } = o2, r2 = g(null !== (a2 = e2.isOpen) && void 0 !== a2 && a2), s2 = g(false);
  return _(() => e2.isOpen, (e3) => {
    true === e3 ? r2.value = true : false === e3 && (s2.value = false);
  }), () => {
    var e3;
    return y(i, { isOpen: r2.value, onContentBeforeMount: () => {
      s2.value = true;
    }, onEscKeydown: () => {
      s2.value = false;
    }, children: b(B, { children: [y(T, { onComplete: (e4) => {
      "leave" === e4 && (r2.value = false, n2("close"));
    }, children: s2.value ? y(D, { onClick: () => {
      s2.value = false;
    } }) : null }), null === (e3 = t2.default) || void 0 === e3 ? void 0 : e3.call(t2)] }) });
  };
}), D = Object.assign(N, { displayName: "DialogBackdrop" });
Object.assign(I, { displayName: "DialogContainer" }), Object.assign(z, { displayName: "Dialog" });
let F = e("label", { valued: s().optional(), focus: s().optional(), invalid: s().optional(), disabled: s().optional(), $label: c().optional(), $supporting: c().optional(), $leading: c().optional(), $trailing: c().optional(), $default: c() }, (e2, o2) => {
  let { slots: a2 } = o2;
  return (o3) => {
    var t2, n2, r2, i2;
    let s2 = e2.valued, l2 = e2.invalid, d2 = e2.disabled, c2 = (null !== (i2 = null === (t2 = a2.default) || void 0 === t2 ? void 0 : t2.call(a2)) && void 0 !== i2 ? i2 : []).map((e3) => "input" === e3.type ? (s2 = !!p(e3.props, ["value"], p(e3.props, ["placeholder"], s2)), d2 = p(e3.props, ["disabled"], d2), m(e3, { disabled: d2 })) : m(e3));
    return b(o3, { "data-valued": s2, "data-invalid": l2, "data-disabled": d2, "data-focus-within": e2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [b("div", { "data-input-container": "", children: [a2.leading && y(H, { children: a2.leading() }), y("div", { "data-input-label": "", children: null === (n2 = a2.label) || void 0 === n2 ? void 0 : n2.call(a2) }), c2, a2.trailing && y(H, { children: a2.trailing() })] }), a2.supporting && y("div", { "data-input-supporting": "", children: null === (r2 = a2.supporting) || void 0 === r2 ? void 0 : r2.call(a2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), H = e("div", { role: l(["leading", "trailing"]).optional().default("leading") })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
Object.assign(F, { displayName: "TextField" });
export {
  f as F,
  $ as I,
  C as m
};
