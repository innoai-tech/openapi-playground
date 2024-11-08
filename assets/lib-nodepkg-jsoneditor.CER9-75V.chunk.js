var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
import { c as e, I as t, j as n, a as l, b as a, d as i, r, T as o, F as d, e as s, s as p, g as c, f as u, o as h, t as v, h as y } from "./lib-nodepkg-vuekit.B9RHHubB.chunk.js";
import { o as m, J as f, S as x, E as b } from "./lib-nodepkg-typedef.B0hWBNEX.chunk.js";
import { O as g, s as w, m as N, f as C, d as $, t as k, E as S, c as E, B as O, S as T } from "./vendor-rxjs.ByE15jUQ.chunk.js";
import { i as I, g as A, a as D, b as L, s as P, l as R, c as M, d as _ } from "./vendor-innoai-tech-lodash.XmF8H4xo.chunk.js";
import { s as B, v as J, a as j, P as z, b as H, B as W } from "./lib-nodepkg-vueuikit.C-SQymNf.chunk.js";
import { I as U, a as V, m as F, b as K, c as X, d as q } from "./lib-nodepkg-vuematerial.mnV9EuoY.chunk.js";
const _G = class _G extends g {
  constructor(e2, t2) {
    super((e3) => {
      let t3 = /* @__PURE__ */ __privateGet(this, _e).subscribe(e3);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new t({}));
    __privateAdd(this, _t, new t({}));
    this.typedef = e2, this.initials = t2, __privateGet(this, _e).next(t2);
  }
  static of(e2, t2) {
    return new _G(e2, null != t2 ? t2 : "array" == e2.type ? [] : {});
  }
  isDirty(e2, t2) {
    if (!I(e2)) {
      let n2 = /* @__PURE__ */ A(this.initials, t2);
      return D(n2) || n2 !== e2;
    }
    return false;
  }
  update(e2, t2, n2) {
    if (__privateGet(this, _t).next({}), 0 == e2.length) {
      __privateGet(this, _e).next(t2);
      return;
    }
    L(t2) ? __privateGet(this, _e).next((l2) => {
      let a2 = /* @__PURE__ */ A(l2, e2, n2);
      t2(a2), P(l2, e2, a2);
    }) : __privateGet(this, _e).next((n3) => {
      P(n3, e2, t2);
    });
  }
  delete(e2) {
    0 != e2.length && __privateGet(this, _e).next((t2) => {
      let n2 = /* @__PURE__ */ R(e2);
      if (M(n2)) {
        let l3 = /* @__PURE__ */ e2.slice(0, e2.length - 1), a3 = l3.length > 0 ? A(t2, l3) : t2;
        if (_(a3)) {
          a3.splice(n2, 1);
          return;
        }
      }
      let l2 = /* @__PURE__ */ e2.slice(0, e2.length - 1), a2 = l2.length > 0 ? A(t2, l2) : t2;
      delete a2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e2, t2) {
    let n2 = /* @__PURE__ */ f.create(e2);
    __privateGet(this, _t).next((e3) => {
      null === t2 ? delete e3[n2] : e3[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let G = _G;
let Q = /* @__PURE__ */ e(() => new G(m(), {})), Y = /* @__PURE__ */ e(() => ({})), Z = /* @__PURE__ */ B("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ee = /* @__PURE__ */ B("span", (e2, t2) => {
  let {} = e2, { slots: l2 } = t2;
  return (e3) => {
    var t3;
    return /* @__PURE__ */ n(e3, { children: /* @__PURE__ */ n(Z, { "data-visible-on-hover": true, children: null === (t3 = l2.default) || void 0 === t3 ? void 0 : t3.call(l2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), et = /* @__PURE__ */ B(V, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${U}`]: { svg: { width: 18, height: 18 } } }), en = /* @__PURE__ */ B("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), el = /* @__PURE__ */ l((e2, t2) => {
  let { slots: l2 } = t2;
  return () => {
    var t3;
    return /* @__PURE__ */ i(ei, { "data-deprecated": e2.deprecated, "data-optional": e2.optional, "data-nullable": e2.nullable, children: [l2.leading && /* @__PURE__ */ n(ea, { "data-visible-on-hover": true, children: /* @__PURE__ */ l2.leading() }), null === (t3 = l2.default) || void 0 === t3 ? void 0 : t3.call(l2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), ea = /* @__PURE__ */ B(Z, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), ei = /* @__PURE__ */ B("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), er = /* @__PURE__ */ B("div", { displayName: "LineTitle" })({ position: "absolute", left: 0, display: "block", opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "&::before": { content: '"// "', font: "code" } }), eo = /* @__PURE__ */ B("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), ed = /* @__PURE__ */ B("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: /* @__PURE__ */ J("sys.warning-container", /* @__PURE__ */ j(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ee})`]: { [`& > ${eo}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), es = /* @__PURE__ */ e(() => ({ indent: 0, $container: /* @__PURE__ */ r(null) }), { name: "IntentContext" }), ep = /* @__PURE__ */ a((e2, t2) => {
  let { slots: l2 } = t2, a2 = /* @__PURE__ */ es.use(), s2 = /* @__PURE__ */ r(null), p2 = /* @__PURE__ */ r(null);
  return () => {
    var t3, r2, c2, u2, h2;
    return /* @__PURE__ */ i(d, { children: [/* @__PURE__ */ n(en, { children: e2.openToken }), null === (t3 = l2.leading) || void 0 === t3 ? void 0 : t3.call(l2), /* @__PURE__ */ i(o, { to: a2.$container.value, children: [/* @__PURE__ */ i(eh, { "data-indent": a2.indent, children: [/* @__PURE__ */ n(eu, { ref: s2 }), /* @__PURE__ */ n(ev, { ref: p2 }), p2.value && /* @__PURE__ */ n(es, { value: { $container: p2, indent: 1 + (null !== (u2 = a2.indent) && void 0 !== u2 ? u2 : 0) }, children: null === (r2 = l2.trailing) || void 0 === r2 ? void 0 : r2.call(l2) })] }), /* @__PURE__ */ n(ey, { style: { paddingLeft: `${32 * a2.indent}px`, display: "flex" }, children: /* @__PURE__ */ n(en, { children: e2.closeToken }) })] }), s2.value && /* @__PURE__ */ n(es, { value: { $container: s2, indent: 1 + (null !== (h2 = a2.indent) && void 0 !== h2 ? h2 : 0) }, children: null === (c2 = l2.default) || void 0 === c2 ? void 0 : c2.call(l2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), ec = /* @__PURE__ */ l((e2, t2) => {
  let { slots: l2, render: a2 } = t2, r2 = /* @__PURE__ */ es.use(), d2 = /* @__PURE__ */ s(Q.use().error$, /* @__PURE__ */ a2((t3) => {
    var a3;
    let o2 = /* @__PURE__ */ f.create(e2.path), d3 = !e2.viewOnly && !!t3[o2];
    return /* @__PURE__ */ i(ed, { "data-error": d3, "data-dirty": e2.dirty, style: { paddingLeft: `${32 * r2.indent}px` }, children: [e2.title && /* @__PURE__ */ n(er, { style: { paddingLeft: `${32 * r2.indent}px` }, children: e2.title }), /* @__PURE__ */ n(ey, { children: null === (a3 = l2.default) || void 0 === a3 ? void 0 : a3.call(l2) }), d3 && /* @__PURE__ */ n(eo, { children: `${t3[o2]}` })] });
  }));
  return () => /* @__PURE__ */ n(o, { to: r2.$container.value, children: d2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eu = /* @__PURE__ */ B("div", { displayName: "Lines" })({}), eh = /* @__PURE__ */ B("section", { displayName: "LineSection" })({}), ev = /* @__PURE__ */ B("div", { displayName: "LinesTrailing" })({}), ey = /* @__PURE__ */ B("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), em = /* @__PURE__ */ B("span", { displayName: "Description" })({ display: "block" });
class ef extends t {
  static from(e2) {
    let t2 = new ef(false);
    return s(e2, /* @__PURE__ */ w((e3) => e3 ? N(/* @__PURE__ */ s(/* @__PURE__ */ C(e3, "focus"), /* @__PURE__ */ k(() => {
      t2.show();
    })), /* @__PURE__ */ s(/* @__PURE__ */ C(e3, "blur"), /* @__PURE__ */ $(10), /* @__PURE__ */ k(() => {
      t2.hide();
    }))) : S), /* @__PURE__ */ p()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let ex = /* @__PURE__ */ H({ apply(e2) {
  let { elements: t2, rects: n2 } = e2;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), eb = /* @__PURE__ */ l((e2, t2) => {
  var l2;
  let { emit: a2, slots: i2, render: r2 } = t2, o2 = null !== (l2 = e2.open$) && void 0 !== l2 ? l2 : new ef(false), d2 = (e3) => {
    let t3 = /* @__PURE__ */ [e3.target, .../* @__PURE__ */ e3.composedPath()].find((e4) => {
      var t4;
      return null == e4 ? void 0 : null === (t4 = e4.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e4, "data-value");
    });
    if (t3) {
      let e4 = /* @__PURE__ */ t3.getAttribute("data-value");
      D(e4) || (a2("selected", e4), o2.hide());
    }
  };
  return s(o2, /* @__PURE__ */ r2((e3) => {
    var t3, l3, a3, r3;
    return /* @__PURE__ */ n(z, { isOpen: e3, onClickOutside: () => o2.hide(), onEscKeydown: () => o2.hide(), placement: "bottom-start", middleware: [ex], $content: /* @__PURE__ */ n(eg, { onClick: d2, children: null === (t3 = i2.content) || void 0 === t3 ? void 0 : t3.call(i2) }), children: null !== (r3 = null === (a3 = i2.default) || void 0 === a3 ? void 0 : null === (l3 = /* @__PURE__ */ a3.call(i2)) || void 0 === l3 ? void 0 : l3[0]) && void 0 !== r3 ? r3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
l((e2, t2) => {
  var l2;
  let { slots: a2, render: i2 } = t2, r2 = null !== (l2 = e2.open$) && void 0 !== l2 ? l2 : new ef(false);
  return s(r2, /* @__PURE__ */ i2((e3) => {
    var t3, l3, i3, o2;
    return /* @__PURE__ */ n(z, { isOpen: e3, onClickOutside: () => r2.hide(), placement: "bottom-start", $content: /* @__PURE__ */ n(eg, { children: null === (t3 = a2.content) || void 0 === t3 ? void 0 : t3.call(a2) }), children: null !== (o2 = null === (i3 = a2.default) || void 0 === i3 ? void 0 : null === (l3 = /* @__PURE__ */ i3.call(a2)) || void 0 === l3 ? void 0 : l3[0]) && void 0 !== o2 ? o2 : null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let eg = /* @__PURE__ */ B("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: /* @__PURE__ */ J("sys.outline-variant", /* @__PURE__ */ j(0.38)) }), ew = /* @__PURE__ */ B("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } });
var eN = function() {
  var e2 = /* @__PURE__ */ document.getSelection();
  if (!e2.rangeCount) return function() {
  };
  for (var t2 = document.activeElement, n2 = [], l2 = 0; l2 < e2.rangeCount; l2++) n2.push(/* @__PURE__ */ e2.getRangeAt(l2));
  switch (t2.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t2.blur();
      break;
    default:
      t2 = null;
  }
  return e2.removeAllRanges(), function() {
    "Caret" === e2.type && e2.removeAllRanges(), e2.rangeCount || n2.forEach(function(t3) {
      e2.addRange(t3);
    }), t2 && t2.focus();
  };
}, eC = { "text/plain": "Text", "text/html": "Url", default: "Text" };
let e$ = /* @__PURE__ */ c(function(e2, t2) {
  var n2, l2, a2, i2, r2, o2, d2, s2, p2 = false;
  t2 || (t2 = {}), a2 = t2.debug || false;
  try {
    if (r2 = /* @__PURE__ */ eN(), o2 = /* @__PURE__ */ document.createRange(), d2 = /* @__PURE__ */ document.getSelection(), (s2 = /* @__PURE__ */ document.createElement("span")).textContent = e2, s2.ariaHidden = "true", s2.style.all = "unset", s2.style.position = "fixed", s2.style.top = 0, s2.style.clip = "rect(0, 0, 0, 0)", s2.style.whiteSpace = "pre", s2.style.webkitUserSelect = "text", s2.style.MozUserSelect = "text", s2.style.msUserSelect = "text", s2.style.userSelect = "text", s2.addEventListener("copy", function(n3) {
      if (n3.stopPropagation(), t2.format) {
        if (n3.preventDefault(), void 0 === n3.clipboardData) {
          a2 && console.warn("unable to use e.clipboardData"), a2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var l3 = eC[t2.format] || eC.default;
          window.clipboardData.setData(l3, e2);
        } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e2);
      }
      t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
    }), document.body.appendChild(s2), o2.selectNodeContents(s2), d2.addRange(o2), !/* @__PURE__ */ document.execCommand("copy")) throw Error("copy command was unsuccessful");
    p2 = true;
  } catch (r3) {
    a2 && console.error("unable to copy using execCommand: ", r3), a2 && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t2.format || "text", e2), t2.onCopy && t2.onCopy(window.clipboardData), p2 = true;
    } catch (r4) {
      a2 && console.error("unable to copy using clipboardData: ", r4), a2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", i2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(i2, e2);
    }
  } finally {
    d2 && ("function" == typeof d2.removeRange ? d2.removeRange(o2) : d2.removeAllRanges()), s2 && document.body.removeChild(s2), r2();
  }
  return p2;
}), ek = /* @__PURE__ */ l((e2, t2) => {
  let { slots: l2, render: a2 } = t2, i2 = new ef(false);
  return s(i2, /* @__PURE__ */ a2((t3) => {
    var a3, r2;
    let o2 = null === (a3 = l2.default) || void 0 === a3 ? void 0 : a3.call(l2)[0];
    return /* @__PURE__ */ n(z, { isOpen: t3, placement: null !== (r2 = e2.placement) && void 0 !== r2 ? r2 : "left", $content: /* @__PURE__ */ n(eE, { children: /* @__PURE__ */ n(eS, { children: /* @__PURE__ */ l2.title() }) }), children: o2 ? u(o2, { onMouseover: () => {
      i2.show();
    }, onMouseout: () => {
      i2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), eS = /* @__PURE__ */ B("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eE = /* @__PURE__ */ B("div", { displayName: "TooltipWrapper" })({ px: 8 }), eO = /* @__PURE__ */ l((e2, t2) => {
  let {} = t2;
  return () => /* @__PURE__ */ n(ek, { $title: "复制当前节点为 JSON 字符串", children: /* @__PURE__ */ n(et, { type: "button", onClick: () => e$(/* @__PURE__ */ JSON.stringify(e2.value, null, 2)), children: /* @__PURE__ */ n(U, { path: F }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class eT extends O {
  static from(e2) {
    let t2 = new eT("");
    return s(e2, /* @__PURE__ */ w((e3) => e3 ? s(/* @__PURE__ */ C(e3, "input"), /* @__PURE__ */ k((e4) => {
      t2.next(/* @__PURE__ */ e4.target.value.trim());
    })) : S), /* @__PURE__ */ p()), t2;
  }
}
class eI extends T {
  static from(e2) {
    let t2 = new eI();
    return s(e2, /* @__PURE__ */ w((e3) => e3 ? N(/* @__PURE__ */ s(/* @__PURE__ */ C(e3, "keypress"), /* @__PURE__ */ k((e4) => {
      "Enter" !== e4.key || e4.shiftKey || (e4.preventDefault(), t2.next({ type: "COMMIT" }));
    })), /* @__PURE__ */ s(/* @__PURE__ */ C(e3, "keydown"), /* @__PURE__ */ k((e4) => {
      switch (e4.key) {
        case "Tab":
          e4.target.getAttribute("data-options") && (e4.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowDown":
          e4.preventDefault(), t2.next({ type: "SELECT", direction: 1 });
          break;
        case "ArrowUp":
          e4.preventDefault(), t2.next({ type: "SELECT", direction: -1 });
      }
    })), /* @__PURE__ */ s(/* @__PURE__ */ C(e3, "keyup"), /* @__PURE__ */ k((e4) => {
      "Escape" === e4.key && t2.next({ type: "CANCEL" });
    }))) : S), /* @__PURE__ */ p()), t2;
  }
}
class eA extends g {
  constructor() {
    super((e2) => {
      let t2 = /* @__PURE__ */ __privateGet(this, _n).subscribe(e2);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new O(null));
  }
  static sync(e2, t2) {
    return s(/* @__PURE__ */ N(/* @__PURE__ */ s(e2, /* @__PURE__ */ k((e3) => {
      e3 && e3 == f.create(/* @__PURE__ */ t2.path()) && t2.editing$.show();
    })), /* @__PURE__ */ s(t2.editing$, /* @__PURE__ */ $(1), /* @__PURE__ */ k((n2) => {
      n2 || e2.disable(/* @__PURE__ */ t2.path());
    })), /* @__PURE__ */ s(/* @__PURE__ */ E([t2.value$, e2]), /* @__PURE__ */ $(1), /* @__PURE__ */ k((n2) => {
      let [l2, a2] = n2;
      D(l2) && !a2 && e2.enable(/* @__PURE__ */ t2.path());
    }))), /* @__PURE__ */ p());
  }
  enable(e2) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(/* @__PURE__ */ f.create(e2));
  }
  disable(e2) {
    __privateGet(this, _n).value === f.create(e2) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let eD = /* @__PURE__ */ e(() => new eA()), eL = /* @__PURE__ */ l((e2, l2) => {
  let a2, { render: r2 } = l2, o2 = /* @__PURE__ */ h(null), d2 = /* @__PURE__ */ h(null), c2 = /* @__PURE__ */ h(null), u2 = /* @__PURE__ */ eI.from(c2), y2 = /* @__PURE__ */ eD.use(), m2 = /* @__PURE__ */ ef.from(c2), f2 = /* @__PURE__ */ Q.use();
  eA.sync(y2, { editing$: m2, value$: e2.value$, path: () => e2.ctx.path });
  let b2 = () => {
    if ("enums" === e2.typedef.type) {
      var t2;
      let n2 = /* @__PURE__ */ (null !== (t2 = /* @__PURE__ */ x.schemaProp(e2.typedef, "enum")) && void 0 !== t2 ? t2 : []).indexOf(e2.value);
      if (n2 > -1) return n2;
    }
    return 0;
  }, g2 = new t({ index: /* @__PURE__ */ b2() }), O2 = () => {
    m2.hide(), g2.next({ index: /* @__PURE__ */ b2() }), D(e2.value) && f2.delete(e2.ctx.path);
  }, T2 = (t2) => {
    var n2, l3, a3;
    if ("enums" === e2.typedef.type) {
      let l4 = null !== (n2 = /* @__PURE__ */ x.schemaProp(e2.typedef, "enum")) && void 0 !== n2 ? n2 : [];
      null != t2 || (t2 = l4[g2.value.index % l4.length]);
    } else null != t2 || (t2 = (null === (l3 = c2.value) || void 0 === l3 ? void 0 : l3.value) ? null === (a3 = c2.value) || void 0 === a3 ? void 0 : a3.value : void 0);
    if (D(t2)) {
      f2.delete(e2.ctx.path);
      return;
    }
    let [i2, r3] = e2.typedef.validate(t2, { coerce: true });
    if (i2) {
      f2.setError(e2.ctx.path, i2.message);
      return;
    }
    f2.update(e2.ctx.path, r3), m2.hide();
  };
  return (s(u2, /* @__PURE__ */ k((e3) => {
    switch (e3.type) {
      case "SELECT":
        g2.next((t2) => {
          t2.index += e3.direction;
        });
        break;
      case "COMMIT":
        T2();
        break;
      case "CANCEL":
        O2();
    }
  }), /* @__PURE__ */ p()), s(/* @__PURE__ */ N(/* @__PURE__ */ s(d2, /* @__PURE__ */ v((e3) => {
    if (e3) {
      let t2 = new ResizeObserver((e4) => {
        for (let n2 of e4) if (n2.contentBoxSize) {
          var t3;
          a2 = null === (t3 = n2.contentBoxSize[0]) || void 0 === t3 ? void 0 : t3.blockSize;
        }
      });
      return t2.observe(e3), () => {
        t2.disconnect();
      };
    }
    return () => {
    };
  })), /* @__PURE__ */ s(c2, /* @__PURE__ */ $(1), /* @__PURE__ */ k((e3) => {
    e3 && (null == e3 || e3.focus(), e3.value && (e3.selectionStart = 0, e3.selectionEnd = e3.value.length));
  })), /* @__PURE__ */ s(c2, /* @__PURE__ */ w((e3) => {
    if (e3) {
      let t2 = null != a2 ? a2 : e3.getBoundingClientRect().height, n2 = (e4) => {
        e4.style.height = `${null != t2 ? t2 : 0}px`, e4.style.height = `${e4.scrollHeight}px`;
      };
      return n2(e3), N(/* @__PURE__ */ s(/* @__PURE__ */ C(e3, "blur"), /* @__PURE__ */ k((t3) => {
        if (t3.relatedTarget) {
          var n3, l3;
          if ((null === (n3 = d2.value) || void 0 === n3 ? void 0 : n3.contains(t3.relatedTarget)) || (null === (l3 = o2.value) || void 0 === l3 ? void 0 : l3.contains(t3.relatedTarget))) return;
        }
        t3.preventDefault(), T2(e3.value);
      })), /* @__PURE__ */ s(/* @__PURE__ */ C(e3, "input"), /* @__PURE__ */ k((e4) => {
        n2(e4.target);
      })));
    }
    return S;
  }))), /* @__PURE__ */ p()), "enums" == e2.typedef.type) ? s(/* @__PURE__ */ E([e2.value$, m2, g2]), /* @__PURE__ */ r2((t2) => {
    var l3, a3, i2;
    let [r3, s2, { index: p2 }] = t2, u3 = null !== (l3 = /* @__PURE__ */ x.schemaProp(e2.typedef, "enum")) && void 0 !== l3 ? l3 : [], h2 = null !== (a3 = /* @__PURE__ */ x.metaProp(e2.typedef, "enumLabels")) && void 0 !== a3 ? a3 : [];
    return /* @__PURE__ */ n(eR, { ref: d2, onClick: () => {
      m2.show();
    }, "data-type": typeof r3, tabindex: 0, children: s2 ? /* @__PURE__ */ n(eb, { onSelected: (e3) => {
      T2(e3);
    }, open$: m2, $content: /* @__PURE__ */ n("div", { ref: o2, children: /* @__PURE__ */ u3.map((e3, t3) => /* @__PURE__ */ n(e_, { "data-focus": p2 % u3.length === t3, value: e3, label: h2[t3] })) }), children: /* @__PURE__ */ n("input", { value: void 0 == r3 ? "" : `${r3}`, ref: c2, "data-options": true }) }) : /* @__PURE__ */ n("span", { children: null !== (i2 = /* @__PURE__ */ JSON.stringify(r3)) && void 0 !== i2 ? i2 : "undefined" }) });
  })) : s(/* @__PURE__ */ E([e2.value$, m2]), /* @__PURE__ */ r2((e3) => {
    var t2;
    let [l3, a3] = e3;
    return /* @__PURE__ */ n(eR, { ref: d2, onClick: () => {
      m2.show();
    }, "data-type": typeof l3, tabindex: 0, onFocus: () => {
      m2.show();
    }, children: a3 ? /* @__PURE__ */ n(z, { isOpen: true, placement: "right-start", $content: /* @__PURE__ */ i(eP, { ref: o2, children: [/* @__PURE__ */ n(et, { type: "button", onClick: () => u2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(U, { path: K }) }), /* @__PURE__ */ n(et, { type: "button", onClick: () => u2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(U, { path: X }) })] }), children: /* @__PURE__ */ n("textarea", { ref: c2, rows: 1, value: void 0 == l3 ? "" : `${l3}` }) }) : /* @__PURE__ */ n("span", { "data-value": true, children: null !== (t2 = /* @__PURE__ */ JSON.stringify(l3)) && void 0 !== t2 ? t2 : "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value"] }), eP = /* @__PURE__ */ B("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: /* @__PURE__ */ J("sys.outline-variant", /* @__PURE__ */ j(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, ml: -4 }), eR = /* @__PURE__ */ B("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, "& [data-value]": { border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }, "& textarea,input": { border: "1px solid", borderColor: /* @__PURE__ */ J("sys.outline-variant", /* @__PURE__ */ j(0.38)), flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", maxWidth: "40vw", outline: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } }, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eM = /* @__PURE__ */ B(ew, { displayName: "EnumMenuItemContainer" })({ [`& ${el}`]: { textAlign: "left" } }), e_ = /* @__PURE__ */ a((e2) => () => /* @__PURE__ */ i(eM, { "data-value": e2.value, tabindex: 0, children: [/* @__PURE__ */ n(el, { children: e2.value }), e2.label && /* @__PURE__ */ n(em, { children: e2.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eB = /* @__PURE__ */ l((e2, t2) => {
  let {} = e2, { emit: l2 } = t2;
  return () => /* @__PURE__ */ n(ek, { $title: "删除属性", children: /* @__PURE__ */ n(et, { type: "button", onClick: () => l2("remove"), children: /* @__PURE__ */ n(U, { path: q }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eJ = /* @__PURE__ */ l((e2, t2) => {
  let { render: l2 } = t2, a2 = /* @__PURE__ */ Q.use(), r2 = /* @__PURE__ */ Y.use();
  return s(e2.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(ep, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ n(ee, { children: /* @__PURE__ */ n(eO, { value: t3 }) }), $trailing: /* @__PURE__ */ n(ej, { ctx: e2.ctx, onAdd: (t4) => {
    a2.update([...e2.ctx.path, t4], void 0);
  }, options: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].filter((e3) => {
    let [n2] = e3;
    return !Object.hasOwn(t3, n2);
  }).map((e3) => {
    let [t4, n2, l3] = e3;
    return { propName: /* @__PURE__ */ String(t4), typedef: l3 };
  }) }, "prop-input"), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((l3) => {
    var o2;
    let [d2, s2, p2] = l3;
    if (!Object.hasOwn(t3, d2)) return null;
    let c2 = [...e2.ctx.path, d2];
    return /* @__PURE__ */ i(ec, { path: c2, dirty: /* @__PURE__ */ a2.isDirty(s2, c2), title: /* @__PURE__ */ x.metaProp(p2, "title"), description: /* @__PURE__ */ x.metaProp(p2, "description"), children: [/* @__PURE__ */ n(el, { deprecated: /* @__PURE__ */ x.schemaProp(p2, "deprecated"), $leading: /* @__PURE__ */ n(eB, { onRemove: () => {
      a2.delete(c2);
    } }), children: /* @__PURE__ */ String(d2) }), /* @__PURE__ */ i(en, { children: [":", " "] }), null === (o2 = r2.$value) || void 0 === o2 ? void 0 : o2.call(r2, p2, s2, { ...e2.ctx, path: c2, branch: [...e2.ctx.branch, s2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), ej = /* @__PURE__ */ l((e2, l2) => {
  let { emit: a2, render: r2 } = l2, o2 = /* @__PURE__ */ h(null), d2 = /* @__PURE__ */ eI.from(o2), c2 = /* @__PURE__ */ eT.from(o2), u2 = /* @__PURE__ */ ef.from(o2), v2 = /* @__PURE__ */ Q.use(), y2 = new t({ index: 0 }), m2 = () => {
    u2.hide(), c2.next(""), o2.value && (o2.value.value = "", o2.value.blur()), y2.next({ index: 0 });
  };
  s(c2, /* @__PURE__ */ k((t2) => {
    if (t2.trim().startsWith("{")) try {
      let n2 = /* @__PURE__ */ JSON.parse(t2);
      v2.update(e2.ctx.path, n2), m2();
    } catch (t3) {
      v2.setError(e2.ctx.path, "无效的 JSON 字符串");
    }
  }), /* @__PURE__ */ p());
  let f2 = (t2) => {
    if (e2.options) {
      var n2;
      null != t2 || (t2 = null === (n2 = e2.options[y2.value.index % e2.options.length]) || void 0 === n2 ? void 0 : n2.propName);
    } else null != t2 || (t2 = c2.value);
    t2 ? (a2("add", t2), m2()) : v2.setError([...e2.ctx.path, x.RecordKey], "无效的属性值");
  };
  s(d2, /* @__PURE__ */ k((e3) => {
    switch (e3.type) {
      case "SELECT":
        y2.next((t2) => {
          t2.index += e3.direction;
        });
        break;
      case "COMMIT":
        f2();
        break;
      case "CANCEL":
        m2();
    }
  }), /* @__PURE__ */ p());
  let b2 = /* @__PURE__ */ s(u2, /* @__PURE__ */ r2((e3) => /* @__PURE__ */ n("input", { ref: o2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e3 })));
  return s(/* @__PURE__ */ E([c2, u2, y2, e2.options$]), /* @__PURE__ */ r2((t2) => {
    let [l3, a3, r3, s2] = t2;
    return s2 ? s2.length > 0 ? /* @__PURE__ */ n(ec, { path: e2.ctx.path, children: /* @__PURE__ */ n(eR, { sx: { mx: -4 }, children: /* @__PURE__ */ n(eb, { onSelected: (e3) => {
      f2(e3);
    }, open$: u2, $content: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ s2.map((e3, t3) => l3 && !e3.propName.includes(l3) ? null : /* @__PURE__ */ n(ez, { propName: e3.propName, typedef: e3.typedef, "data-focus": t3 === r3.index % s2.length })) }), children: b2 }) }) }) : null : /* @__PURE__ */ n(ec, { path: [...e2.ctx.path, x.RecordKey], children: /* @__PURE__ */ n(eR, { sx: { mx: -4 }, children: /* @__PURE__ */ n(z, { isOpen: a3, placement: "right-start", $content: /* @__PURE__ */ i(eP, { children: [/* @__PURE__ */ n(et, { type: "button", onClick: () => d2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(U, { path: K }) }), /* @__PURE__ */ n(et, { type: "button", onClick: () => d2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(U, { path: X }) })] }), children: /* @__PURE__ */ n("input", { ref: o2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), ez = /* @__PURE__ */ a((e2) => () => /* @__PURE__ */ i(eH, { "data-value": e2.propName, tabindex: 0, children: [/* @__PURE__ */ n(el, { optional: /* @__PURE__ */ x.schemaProp(e2.typedef, x.optional), children: e2.propName }), /* @__PURE__ */ n(em, { children: /* @__PURE__ */ x.metaProp(e2.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), eH = /* @__PURE__ */ B(ew, { displayName: "AddPropMenuItemContainer" })({ [`& ${el}`]: { textAlign: "left" } }), eW = /* @__PURE__ */ l((e2, t2) => {
  let { render: l2 } = t2, a2 = /* @__PURE__ */ Q.use(), r2 = /* @__PURE__ */ Y.use();
  return s(e2.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(ep, { openToken: "[", closeToken: "]", $leading: /* @__PURE__ */ n(ee, { children: /* @__PURE__ */ n(eO, { value: t3 }) }), $trailing: /* @__PURE__ */ n(eU, { ctx: e2.ctx, typedef: e2.typedef, onAdd: (t4) => {
    a2.update(e2.ctx.path, (e3) => {
      e3.push(t4);
    }, []);
  } }), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((t4) => {
    var l3;
    let [o2, d2, s2] = t4, p2 = [...e2.ctx.path, o2];
    return /* @__PURE__ */ i(ec, { path: p2, dirty: /* @__PURE__ */ a2.isDirty(d2, p2), children: [/* @__PURE__ */ n(el, { $leading: /* @__PURE__ */ n(eV, { onRemove: () => {
      a2.delete(p2);
    } }), children: /* @__PURE__ */ n(W, { sx: { opacity: 0.3, mr: "0.5em" }, children: /* @__PURE__ */ String(o2) }) }), null === (l3 = r2.$value) || void 0 === l3 ? void 0 : l3.call(r2, s2, d2, { ...e2.ctx, path: p2, branch: [...e2.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), eU = /* @__PURE__ */ l((e2, t2) => {
  let { emit: l2, render: a2 } = t2, r2 = /* @__PURE__ */ h(null), o2 = /* @__PURE__ */ eT.from(r2), d2 = /* @__PURE__ */ eI.from(r2), c2 = /* @__PURE__ */ ef.from(r2), u2 = /* @__PURE__ */ Q.use(), v2 = () => {
    r2.value && (r2.value.value = "", r2.value.blur());
  }, y2 = (t3) => {
    if (null != t3 || (t3 = o2.value), t3) {
      let [n2, a3] = /* @__PURE__ */ x.schemaProp(e2.typedef, "items").validate(t3, { coerce: true });
      if (n2) {
        u2.setError(e2.ctx.path, n2);
        return;
      }
      l2("add", a3);
    } else l2("add", void 0);
    v2();
  };
  s(o2, /* @__PURE__ */ k((t3) => {
    if (t3.trim().startsWith("[")) try {
      let n2 = /* @__PURE__ */ JSON.parse(t3);
      u2.update(e2.ctx.path, n2), v2();
    } catch (t4) {
      u2.setError(e2.ctx.path, "无效的 JSON 字符串");
    }
  }), /* @__PURE__ */ p()), s(d2, /* @__PURE__ */ k((e3) => {
    switch (e3.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        v2();
    }
  }), /* @__PURE__ */ p());
  let m2 = /* @__PURE__ */ s(c2, /* @__PURE__ */ a2((e3) => /* @__PURE__ */ n(z, { isOpen: e3, placement: "right-start", $content: /* @__PURE__ */ i(eP, { children: [/* @__PURE__ */ n(et, { type: "button", onClick: () => d2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(U, { path: K }) }), /* @__PURE__ */ n(et, { type: "button", onClick: () => d2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(U, { path: X }) })] }), children: /* @__PURE__ */ n("input", { ref: r2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) })));
  return () => /* @__PURE__ */ n(ec, { path: e2.ctx.path, children: /* @__PURE__ */ n(eR, { sx: { mx: -4 }, children: m2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), eV = /* @__PURE__ */ l((e2, t2) => {
  let {} = e2, { emit: l2 } = t2;
  return () => /* @__PURE__ */ n(ek, { $title: "移除项", children: /* @__PURE__ */ n(et, { type: "button", onClick: () => l2("remove"), children: /* @__PURE__ */ n(U, { path: q }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), eF = /* @__PURE__ */ l((e2, t2) => {
  let { render: l2 } = t2, a2 = /* @__PURE__ */ Q.use(), r2 = /* @__PURE__ */ Y.use();
  return s(e2.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(ep, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ n(ee, { children: /* @__PURE__ */ n(eO, { value: t3 }) }), $trailing: /* @__PURE__ */ n(ej, { ctx: e2.ctx, onAdd: (t4) => {
    a2.update([...e2.ctx.path, t4], void 0);
  } }, "prop-input"), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((l3) => {
    var o2;
    let [d2, s2, p2] = l3;
    if (!Object.hasOwn(t3, d2)) return null;
    let c2 = [...e2.ctx.path, d2];
    return /* @__PURE__ */ i(ec, { path: c2, dirty: /* @__PURE__ */ a2.isDirty(s2, c2), children: [/* @__PURE__ */ n(el, { $leading: /* @__PURE__ */ n(eB, { onRemove: () => {
      a2.delete(c2);
    } }), children: /* @__PURE__ */ String(d2) }), /* @__PURE__ */ i(en, { children: [":", " "] }), null === (o2 = r2.$value) || void 0 === o2 ? void 0 : o2.call(r2, p2, s2, { ...e2.ctx, path: c2, branch: [...e2.ctx.branch, s2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), eK = (e2, t2, l2) => "object" == e2.type || "intersection" == e2.type || "union" == e2.type && x.schemaProp(e2, "discriminator") ? /* @__PURE__ */ n(eJ, { typedef: e2, value: null != t2 ? t2 : {}, ctx: l2 }) : "union" == e2.type && D(/* @__PURE__ */ x.schemaProp(e2, "discriminator")) ? /* @__PURE__ */ n(eL, { typedef: e2, value: t2, ctx: l2 }) : "record" == e2.type ? /* @__PURE__ */ n(eF, { typedef: e2, value: t2, ctx: l2 }) : "array" == e2.type ? /* @__PURE__ */ n(eW, { typedef: e2, value: t2, ctx: l2 }) : /* @__PURE__ */ n(eL, { typedef: e2, value: t2, ctx: l2 }), eX = /* @__PURE__ */ l((e2, t2) => {
  let {} = e2, { render: l2 } = t2, a2 = /* @__PURE__ */ Q.use(), r2 = /* @__PURE__ */ Y.use(), o2 = /* @__PURE__ */ y(null);
  return s(a2, /* @__PURE__ */ l2((e3) => {
    var t3, l3;
    let d2 = null !== (t3 = r2.$value) && void 0 !== t3 ? t3 : eK;
    return /* @__PURE__ */ n(eD, { children: /* @__PURE__ */ n(Y, { value: { $value: null !== (l3 = r2.$value) && void 0 !== l3 ? l3 : eK }, children: /* @__PURE__ */ i(eq, { children: [/* @__PURE__ */ n("section", { ref: o2 }), o2.value && /* @__PURE__ */ n(es, { value: { indent: 0, $container: o2 }, children: /* @__PURE__ */ n(ec, { path: [], viewOnly: true, children: /* @__PURE__ */ d2(a2.typedef, e3, b) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), eq = /* @__PURE__ */ B("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  G as J,
  Q as a,
  eX as b
};
