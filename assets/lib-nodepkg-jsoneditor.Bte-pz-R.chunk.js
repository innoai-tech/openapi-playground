import { c as e, I as t, a as n, r as l, j as i, b as a, d as r, e as o, f as d, T as s, F as c, g as p, o as u } from "./lib-nodepkg-vuekit.BVm_OvBH.chunk.js";
import { o as v, E as h } from "./lib-nodepkg-typedef.Bm5O1R9v.chunk.js";
import { i as m, g as y, a as f, b as x, c as b, d as g, s as w } from "./vendor-innoai-tech-lodash.3H0k6Xl3.chunk.js";
import { s as k, d as N, t as S, P as $, v as C, a as I } from "./lib-nodepkg-vueuikit.BdTmrO-g.chunk.js";
import { M as D } from "./lib-nodepkg-vuemarkdown.R0E-8OLi.chunk.js";
import { I as O, m as A, a as T, b as E, c as R, d as j, e as J, f as P } from "./lib-nodepkg-vuematerial.GHLSZFRE.chunk.js";
class B extends t {
  constructor(e2, t2) {
    super(t2), this.typedef = e2, this.initials = t2;
  }
  static of(e2, t2) {
    return new B(e2, null != t2 ? t2 : "array" == e2.type ? [] : {});
  }
  isDirty(e2, t2) {
    if (!m(e2)) {
      let n2 = /* @__PURE__ */ y(this.initials, t2);
      return f(n2) || n2 !== e2;
    }
    return false;
  }
}
let F = /* @__PURE__ */ e(() => new B(v(), {})), K = /* @__PURE__ */ e(() => ({})), M = /* @__PURE__ */ n((e2, t2) => {
  var n2;
  let { emit: a2, slots: r2, render: o2 } = t2, d2 = null !== (n2 = e2.open$) && void 0 !== n2 ? n2 : new _(false), s2 = (e3) => {
    let t3 = /* @__PURE__ */ [e3.target, .../* @__PURE__ */ e3.composedPath()].find((e4) => {
      var t4;
      return null == e4 ? void 0 : null === (t4 = e4.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e4, "data-value");
    });
    if (t3) {
      let e4 = /* @__PURE__ */ t3.getAttribute("data-value");
      f(e4) || (a2("selected", e4), d2.hide());
    }
  };
  return l(d2, /* @__PURE__ */ o2((e3) => {
    var t3, n3, l2, a3;
    return /* @__PURE__ */ i($, { isOpen: e3, onClickOutside: () => d2.hide(), $transition: (e4) => /* @__PURE__ */ i(U, { children: e4.content }), placement: "bottom-start", $content: /* @__PURE__ */ i(V, { onClick: s2, children: null === (t3 = r2.content) || void 0 === t3 ? void 0 : t3.call(r2) }), children: null !== (a3 = null === (l2 = r2.default) || void 0 === l2 ? void 0 : null === (n3 = /* @__PURE__ */ l2.call(r2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== a3 ? a3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] }), W = /* @__PURE__ */ n((e2, t2) => {
  var n2;
  let { slots: a2, render: r2 } = t2, o2 = null !== (n2 = e2.open$) && void 0 !== n2 ? n2 : new _(false);
  return l(o2, /* @__PURE__ */ r2((e3) => {
    var t3, n3, l2, r3;
    return /* @__PURE__ */ i($, { isOpen: e3, onClickOutside: () => o2.hide(), $transition: (e4) => /* @__PURE__ */ i(U, { children: e4.content }), placement: "bottom-start", $content: /* @__PURE__ */ i(V, { children: null === (t3 = a2.content) || void 0 === t3 ? void 0 : t3.call(a2) }), children: null !== (r3 = null === (l2 = a2.default) || void 0 === l2 ? void 0 : null === (n3 = /* @__PURE__ */ l2.call(a2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== r3 ? r3 : null });
  }));
}, { displayName: "Popover", props: ["open$"] });
class _ extends t {
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let V = /* @__PURE__ */ k("div", { displayName: "PopoverContainer" })({ py: 4, rounded: "sm", shadow: "1", containerStyle: "sys.surface", textStyle: "sys.body-small", pos: "relative", maxW: "30vw" }), L = /* @__PURE__ */ k("div", { displayName: "MenuItem" })({ px: 12, py: 8, gap: 23, display: "flex", alignItems: "start", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" } }), U = /* @__PURE__ */ N({ from: { opacity: 0 }, to: { opacity: 1 }, duration: S.duration.md1, easing: S.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: S.duration.sm4, easing: S.easing.standard.decelerate }), H = /* @__PURE__ */ n((e2, t2) => {
  let { slots: n2, render: r2 } = t2, o2 = new _(false);
  return l(o2, /* @__PURE__ */ r2((t3) => {
    var l2, r3;
    let d2 = null === (l2 = n2.default) || void 0 === l2 ? void 0 : l2.call(n2)[0];
    return /* @__PURE__ */ i($, { isOpen: t3, placement: null !== (r3 = e2.placement) && void 0 !== r3 ? r3 : "left", $content: /* @__PURE__ */ i(X, { children: /* @__PURE__ */ i(z, { children: /* @__PURE__ */ n2.title() }) }), $transition: (e3) => /* @__PURE__ */ i(U, { children: e3.content }), children: d2 ? a(d2, { onMouseover: () => {
      o2.show();
    }, onMouseout: () => {
      o2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), z = /* @__PURE__ */ k("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), X = /* @__PURE__ */ k("div", { displayName: "TooltipWrapper" })({ px: 8 }), q = /* @__PURE__ */ k("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 18, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), G = /* @__PURE__ */ k("span", { displayName: "PropLeading" })({ display: "inline-table", lineHeight: 18, ml: -18 }), Q = /* @__PURE__ */ k("span", (e2, t2) => {
  let { slots: n2 } = t2;
  return (t3) => {
    var l2, a2;
    let r2 = /* @__PURE__ */ o(t3, { "data-deprecated": e2.deprecated, "data-optional": e2.optional, "data-nullable": e2.nullable, children: [n2.leading && /* @__PURE__ */ i(G, { "data-visible-on-hover": true, children: null === (l2 = n2.leading) || void 0 === l2 ? void 0 : l2.call(n2) }), null === (a2 = n2.default) || void 0 === a2 ? void 0 : a2.call(n2)] });
    return e2.description ? /* @__PURE__ */ i(H, { placement: "right", $title: /* @__PURE__ */ i(en, { sx: { minWidth: 200 }, children: /* @__PURE__ */ i(D, { text: e2.description }) }), children: r2 }) : r2;
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable", "description"] })({ display: "inline-flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 18, _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } }, [`& ${G}`]: { visibility: "hidden" }, _hover: { [`& ${G}`]: { visibility: "visible" } } }), Y = /* @__PURE__ */ e(() => ({ indent: 0, $container: /* @__PURE__ */ d(null) }), { name: "IntentContext" }), Z = /* @__PURE__ */ r((e2, t2) => {
  let { slots: n2 } = t2, l2 = /* @__PURE__ */ Y.use(), a2 = /* @__PURE__ */ d(null);
  return () => {
    var t3, r2, d2;
    return /* @__PURE__ */ o(c, { children: [/* @__PURE__ */ i(q, { children: e2.openToken }), null === (t3 = n2.leading) || void 0 === t3 ? void 0 : t3.call(n2), /* @__PURE__ */ o(s, { to: l2.$container.value, children: [/* @__PURE__ */ i("section", { ref: a2 }), /* @__PURE__ */ i(et, { style: { paddingLeft: `${18 * l2.indent}px` }, children: /* @__PURE__ */ i(q, { children: e2.closeToken }) })] }), a2.value && /* @__PURE__ */ i(Y, { value: { $container: a2, indent: 1 + (null !== (d2 = l2.indent) && void 0 !== d2 ? d2 : 0) }, children: null === (r2 = n2.default) || void 0 === r2 ? void 0 : r2.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), ee = /* @__PURE__ */ r((e2, t2) => {
  let { slots: n2 } = t2, l2 = /* @__PURE__ */ Y.use();
  return () => {
    var t3;
    return /* @__PURE__ */ i(s, { to: l2.$container.value, children: /* @__PURE__ */ i(et, { "data-dirty": e2.dirty, style: { paddingLeft: `${18 * l2.indent}px` }, children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Line", props: ["dirty"] }), et = /* @__PURE__ */ k("div", { displayName: "LineRow" })({ display: "flex", alignItems: "end", _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, _dirty: { bgColor: /* @__PURE__ */ C("sys.warning-container", /* @__PURE__ */ I(0.38)) } }), en = /* @__PURE__ */ k("span", { displayName: "Description" })({ display: "inline-block", maxWidth: "20vw", "& p": { my: "0.5em" } }), el = /* @__PURE__ */ r((e2, t2) => {
  let { emit: n2 } = t2;
  return () => f(e2.value) || x(e2.value) ? /* @__PURE__ */ i(eo, { onClick: () => n2("click"), children: "undefined" }) : b(e2.value) ? /* @__PURE__ */ i(ei, { onClick: () => n2("click"), children: /* @__PURE__ */ JSON.stringify(e2.value) }) : g(e2.value) ? /* @__PURE__ */ i(ea, { onClick: () => n2("click"), children: /* @__PURE__ */ String(e2.value) }) : /* @__PURE__ */ i(er, { onClick: () => n2("click"), children: /* @__PURE__ */ String(e2.value) });
}, { displayName: "ValueView", props: ["value"], emits: ["click"] }), ei = /* @__PURE__ */ k(q, { displayName: "StringValue" })({ display: "inline-block", color: "sys.primary", font: "code", opacity: 1, cursor: "pointer" }), ea = /* @__PURE__ */ k(q, { displayName: "BooleanValue" })({ display: "inline-block", color: "sys.warning", font: "code", opacity: 1, cursor: "pointer" }), er = /* @__PURE__ */ k(q, { displayName: "NumberValue" })({ display: "inline-block", color: "sys.success", font: "code", opacity: 1, cursor: "pointer" }), eo = /* @__PURE__ */ k(q, { displayName: "UndefinedValue" })({ display: "inline-block", color: "sys.error", font: "code", opacity: 1, cursor: "pointer" }), ed = /* @__PURE__ */ k("span", { displayName: "ActionToolbar" })({ pos: "relative", px: 8, display: "flex", alignItems: "center", gap: 8 }), es = /* @__PURE__ */ k("span", (e2, t2) => {
  let {} = e2, { slots: n2 } = t2;
  return (e3) => {
    var t3;
    return /* @__PURE__ */ i(e3, { children: /* @__PURE__ */ i(ed, { children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Actions" })({ flex: 1, lineHeight: 18, wordBreak: "keep-all", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", [`& ${ed}`]: { visibility: "hidden" }, _hover: { [`& ${ed}`]: { visibility: "visible" } } }), ec = /* @__PURE__ */ k("span", { displayName: "ActionBtn" })({ display: "flex", alignItems: "center", justifyContent: "center", height: 16, width: 16, opacity: 0.5, cursor: "pointer", textStyle: "sys.label-small", _hover: { opacity: 0.8 } });
var ep = function() {
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
}, eu = { "text/plain": "Text", "text/html": "Url", default: "Text" };
let ev = /* @__PURE__ */ p(function(e2, t2) {
  var n2, l2, i2, a2, r2, o2, d2, s2, c2 = false;
  t2 || (t2 = {}), i2 = t2.debug || false;
  try {
    if (r2 = /* @__PURE__ */ ep(), o2 = /* @__PURE__ */ document.createRange(), d2 = /* @__PURE__ */ document.getSelection(), (s2 = /* @__PURE__ */ document.createElement("span")).textContent = e2, s2.ariaHidden = "true", s2.style.all = "unset", s2.style.position = "fixed", s2.style.top = 0, s2.style.clip = "rect(0, 0, 0, 0)", s2.style.whiteSpace = "pre", s2.style.webkitUserSelect = "text", s2.style.MozUserSelect = "text", s2.style.msUserSelect = "text", s2.style.userSelect = "text", s2.addEventListener("copy", function(n3) {
      if (n3.stopPropagation(), t2.format) {
        if (n3.preventDefault(), void 0 === n3.clipboardData) {
          i2 && console.warn("unable to use e.clipboardData"), i2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var l3 = eu[t2.format] || eu.default;
          window.clipboardData.setData(l3, e2);
        } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e2);
      }
      t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
    }), document.body.appendChild(s2), o2.selectNodeContents(s2), d2.addRange(o2), !/* @__PURE__ */ document.execCommand("copy")) throw Error("copy command was unsuccessful");
    c2 = true;
  } catch (r3) {
    i2 && console.error("unable to copy using execCommand: ", r3), i2 && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t2.format || "text", e2), t2.onCopy && t2.onCopy(window.clipboardData), c2 = true;
    } catch (r4) {
      i2 && console.error("unable to copy using clipboardData: ", r4), i2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", a2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(a2, e2);
    }
  } finally {
    d2 && ("function" == typeof d2.removeRange ? d2.removeRange(o2) : d2.removeAllRanges()), s2 && document.body.removeChild(s2), r2();
  }
  return c2;
}), eh = /* @__PURE__ */ k("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 }), em = /* @__PURE__ */ k("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), ey = /* @__PURE__ */ k("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eh}`]: { pos: "relative", px: 0 } }), ef = /* @__PURE__ */ n((e2, t2) => {
  let {} = t2;
  return () => /* @__PURE__ */ i(H, { $title: "复制当前节点为 JSON 字符串", children: /* @__PURE__ */ i(ec, { onClick: () => ev(/* @__PURE__ */ JSON.stringify(e2.value, null, 2)), children: /* @__PURE__ */ i(O, { path: A }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] }), ex = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2, l2 = new _(false);
  return /* @__PURE__ */ i(W, { open$: l2, $content: /* @__PURE__ */ i(eb, { onSubmit: (e3) => {
    e3 && n2("input", e3), l2.hide();
  } }), children: /* @__PURE__ */ i(H, { $title: "导入 JSON 字符串到当前节点", children: /* @__PURE__ */ i(ec, { onClick: () => l2.show(), children: /* @__PURE__ */ i(O, { path: T }) }) }) });
}, { displayName: "InputFromJSONRawIconBtn", emits: ["input"] }), eb = /* @__PURE__ */ n((e2, n2) => {
  let {} = e2, { emit: a2, render: r2 } = n2, s2 = new t(""), c2 = /* @__PURE__ */ d(null), p2 = () => {
    a2("submit", void 0);
  }, v2 = () => {
    try {
      a2("submit", /* @__PURE__ */ JSON.parse(s2.value));
    } catch (e3) {
    }
  }, h2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), v2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, /* @__PURE__ */ r2((e3) => /* @__PURE__ */ o(em, { onSubmit: (e4) => {
    e4.preventDefault(), v2();
  }, children: [/* @__PURE__ */ i("textarea", { ref: c2, name: "value", rows: "10", value: e3, onInput: (e4) => {
    s2.next(e4.target.value);
  }, onKeypress: h2 }), /* @__PURE__ */ o(eh, { children: [/* @__PURE__ */ i(R, { type: "button", onClick: () => {
    p2();
  }, children: /* @__PURE__ */ i(O, { path: E }) }), /* @__PURE__ */ i(R, { type: "submit", children: /* @__PURE__ */ i(O, { path: j }) })] })] })));
}, { displayName: "JSONRawForm", emits: ["submit"] }), eg = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = /* @__PURE__ */ K.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(Z, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ o(es, { children: [/* @__PURE__ */ i(ek, { onAddProp: (t4) => {
    a2.next((n3) => {
      let l2 = [...e2.ctx.path, t4];
      w(n3, l2, /* @__PURE__ */ y(n3, l2));
    });
  }, children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, h)].map((e3) => {
    let [n3, l2, a3] = e3;
    return Object.hasOwn(t3, n3) ? null : /* @__PURE__ */ i(eN, { propName: /* @__PURE__ */ String(n3), typedef: a3 });
  }) }), /* @__PURE__ */ i(ef, { value: t3 }), /* @__PURE__ */ i(ex, { onInput: (t4) => {
    e2.ctx.path.length ? a2.next((n3) => {
      w(n3, e2.ctx.path, t4);
    }) : a2.next(t4);
  } })] }), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((n3) => {
    var l2;
    let [d2, s2, c2] = n3;
    if (!Object.hasOwn(t3, d2)) return null;
    let p2 = [...e2.ctx.path, d2];
    return /* @__PURE__ */ o(ee, { dirty: /* @__PURE__ */ a2.isDirty(s2, p2), children: [/* @__PURE__ */ i(Q, { deprecated: /* @__PURE__ */ c2.getSchema("deprecated"), description: /* @__PURE__ */ c2.getMeta("description"), $leading: /* @__PURE__ */ i(ew, { onRemove: () => {
      a2.next((t4) => {
        let n4 = t4;
        for (let t5 of e2.ctx.path) n4 = n4[t5];
        delete n4[d2];
      });
    } }), children: /* @__PURE__ */ String(d2) }), /* @__PURE__ */ o(q, { children: [":", " "] }), null === (l2 = r2.$value) || void 0 === l2 ? void 0 : l2.call(r2, c2, s2, { ...e2.ctx, path: p2, branch: [...e2.ctx.branch, s2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["ctx", "value", "typedef"] }), ew = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => /* @__PURE__ */ i(H, { $title: "移除节点", children: /* @__PURE__ */ i(ec, { onClick: () => n2("remove"), children: /* @__PURE__ */ i(O, { path: J }) }) });
}, { displayName: "RemotePropIconBtn", emits: ["remove"] }), ek = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { slots: n2, emit: l2 } = t2, a2 = new _(false);
  return () => {
    var e3, t3;
    let r2 = null !== (t3 = null === (e3 = n2.default) || void 0 === e3 ? void 0 : e3.call(n2).filter((e4) => e4.type == eN)) && void 0 !== t3 ? t3 : [];
    return (null == r2 ? void 0 : r2.length) > 0 ? /* @__PURE__ */ i(M, { open$: a2, onSelected: (e4) => {
      l2("add-prop", e4);
    }, $content: r2, children: /* @__PURE__ */ i(H, { $title: "添加属性", children: /* @__PURE__ */ i(ec, { onClick: () => a2.show(), children: /* @__PURE__ */ i(O, { path: P }) }) }) }) : null;
  };
}, { displayName: "AddPropIconBtn", emits: ["add-prop"] }), eN = /* @__PURE__ */ r((e2) => () => {
  var t2, n2, l2;
  return /* @__PURE__ */ o(eS, { "data-value": e2.propName, children: [/* @__PURE__ */ i(Q, { optional: e2.typedef.isOptional, children: e2.propName }), /* @__PURE__ */ i(en, { children: null !== (l2 = null === (n2 = /* @__PURE__ */ e2.typedef.getMeta("description")) || void 0 === n2 ? void 0 : null === (t2 = /* @__PURE__ */ n2.split("\n")) || void 0 === t2 ? void 0 : t2[0]) && void 0 !== l2 ? l2 : "" })] });
}, { displayName: "AddPropMenuItem", props: ["propName", "typedef"] }), eS = /* @__PURE__ */ k(L, { displayName: "AddPropMenuItemContainer" })({ width: 400, [`& ${Q}`]: { width: "30%", textAlign: "left" } }), e$ = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = new _(false), r2 = /* @__PURE__ */ F.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(W, { open$: a2, $content: /* @__PURE__ */ i(eC, { value: t3, onSubmit: (t4) => {
    r2.next((n3) => {
      w(n3, e2.ctx.path, t4);
    }), a2.hide();
  } }), children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(el, { value: t3, onClick: () => {
    a2.show();
  } }) }) })));
}, { displayName: "RawInput", props: ["ctx", "value", "typedef"] }), eC = /* @__PURE__ */ n((e2, n2) => {
  let { emit: a2, render: r2 } = n2, s2 = /* @__PURE__ */ d(null), c2 = new t(f(e2.value) ? "" : JSON.stringify(e2.value)), p2 = new t(""), v2 = () => {
    if (c2.value) try {
      a2("submit", /* @__PURE__ */ JSON.parse(c2.value));
    } catch (e3) {
      p2.next("无效的 json value");
    }
  }, h2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), v2());
  };
  u(() => {
    var e3;
    null === (e3 = s2.value) || void 0 === e3 || e3.focus();
  });
  let m2 = /* @__PURE__ */ l(p2, /* @__PURE__ */ r2((e3) => e3 ? /* @__PURE__ */ i(eD, { children: e3 }) : null));
  return l(c2, /* @__PURE__ */ r2((t2) => /* @__PURE__ */ o(em, { onSubmit: (e3) => {
    e3.preventDefault(), v2();
  }, children: [/* @__PURE__ */ i("textarea", { ref: s2, name: "value", rows: "10", value: f(t2) ? "" : t2, onInput: (e3) => {
    c2.next(e3.target.value);
  }, onKeypress: h2 }), m2, /* @__PURE__ */ i(eI, { children: "请输入合法的 json value，string 需要包含引号" }), /* @__PURE__ */ o(eh, { children: [/* @__PURE__ */ i(R, { type: "button", onClick: (t3) => {
    t3.preventDefault(), a2("submit", e2.value);
  }, children: /* @__PURE__ */ i(O, { path: E }) }), /* @__PURE__ */ i(R, { type: "submit", children: /* @__PURE__ */ i(O, { path: j }) })] })] })));
}, { displayName: "TextareaForm", props: ["value"], emits: ["submit"] }), eI = /* @__PURE__ */ k("small", { displayName: "Info" })({ px: 16 }), eD = /* @__PURE__ */ k(eI, { displayName: "Error" })({ color: "sys.error" }), eO = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = /* @__PURE__ */ K.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(Z, { openToken: "[", closeToken: "]", $leading: /* @__PURE__ */ o(es, { children: [/* @__PURE__ */ i(eA, { onAdd: () => {
    a2.next((t4) => {
      let n3 = /* @__PURE__ */ y(t4, e2.ctx.path, []);
      w(t4, e2.ctx.path, [...n3, void 0]);
    });
  } }), /* @__PURE__ */ i(ef, { value: t3 }), /* @__PURE__ */ i(ex, { onInput: (t4) => {
    a2.next((n3) => {
      e2.ctx.path.length ? w(n3, e2.ctx.path, t4) : Object.assign(n3, t4);
    });
  } })] }), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((t4) => {
    var n3;
    let [l2, d2, s2] = t4, c2 = [...e2.ctx.path, l2];
    return /* @__PURE__ */ o(ee, { dirty: /* @__PURE__ */ a2.isDirty(d2, c2), children: [/* @__PURE__ */ i(Q, { sx: { opacity: 0.3, mr: "0.5em" }, $leading: /* @__PURE__ */ i(eT, { onRemove: () => {
      a2.next((t5) => {
        let n4 = /* @__PURE__ */ y(t5, e2.ctx.path, []);
        w(t5, e2.ctx.path, /* @__PURE__ */ n4.filter((e3, t6) => t6 !== l2));
      });
    } }), children: /* @__PURE__ */ String(l2) }), null === (n3 = r2.$value) || void 0 === n3 ? void 0 : n3.call(r2, s2, d2, { ...e2.ctx, path: c2, branch: [...e2.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), eA = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => /* @__PURE__ */ i(H, { $title: "添加数组项", children: /* @__PURE__ */ i(ec, { onClick: () => n2("add"), children: /* @__PURE__ */ i(O, { path: P }) }) });
}, { displayName: "AddItemIconBtn", emits: ["add"] }), eT = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => /* @__PURE__ */ i(H, { $title: "移除节点", children: /* @__PURE__ */ i(ec, { onClick: () => n2("remove"), children: /* @__PURE__ */ i(O, { path: J }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), eE = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = /* @__PURE__ */ K.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(Z, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ o(es, { children: [/* @__PURE__ */ i(ej, { onAddKey: (t4) => {
    a2.next((n3) => {
      let l2 = [...e2.ctx.path, t4];
      w(n3, l2, /* @__PURE__ */ y(n3, l2));
    });
  } }), /* @__PURE__ */ i(ef, { value: t3 }), /* @__PURE__ */ i(ex, { onInput: (t4) => {
    a2.next((n3) => {
      e2.ctx.path.length ? w(n3, e2.ctx.path, t4) : Object.assign(n3, t4);
    });
  } })] }), children: /* @__PURE__ */ [.../* @__PURE__ */ e2.typedef.entries(t3, e2.ctx)].map((n3) => {
    var l2;
    let [d2, s2, c2] = n3;
    if (!Object.hasOwn(t3, d2)) return null;
    let p2 = [...e2.ctx.path, d2];
    return /* @__PURE__ */ o(ee, { dirty: /* @__PURE__ */ a2.isDirty(s2, p2), children: [/* @__PURE__ */ i(Q, { $leading: /* @__PURE__ */ i(eR, { onRemove: () => {
      a2.next((t4) => {
        let n4 = t4;
        for (let t5 of e2.ctx.path) n4 = n4[t5];
        delete n4[d2];
      });
    } }), children: /* @__PURE__ */ String(d2) }), /* @__PURE__ */ o(q, { children: [":", " "] }), null === (l2 = r2.$value) || void 0 === l2 ? void 0 : l2.call(r2, c2, s2, { ...e2.ctx, path: p2, branch: [...e2.ctx.branch, s2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), eR = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => /* @__PURE__ */ i(H, { $title: "移除节点", children: /* @__PURE__ */ i(ec, { onClick: () => n2("remove"), children: /* @__PURE__ */ i(O, { path: J }) }) });
}, { displayName: "RemotePropIconBtn", emits: ["remove"] }), ej = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2, l2 = new _(false);
  return () => /* @__PURE__ */ i(W, { open$: l2, $content: /* @__PURE__ */ i(eJ, { onSubmit: (e3) => {
    e3 && n2("add-key", e3), l2.hide();
  } }), children: /* @__PURE__ */ i(H, { $title: "添加 key", children: /* @__PURE__ */ i(ec, { onClick: () => {
    l2.show();
  }, children: /* @__PURE__ */ i(O, { path: P }) }) }) });
}, { displayName: "AddKeyIconBtn", emits: ["add-key"] }), eJ = /* @__PURE__ */ n((e2, n2) => {
  let { emit: a2, render: r2 } = n2, s2 = new t(e2.value), c2 = /* @__PURE__ */ d(null), p2 = () => {
    a2("submit", void 0);
  }, v2 = () => {
    try {
      a2("submit", s2.value);
    } catch (e3) {
    }
  }, h2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), v2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, /* @__PURE__ */ r2((e3) => /* @__PURE__ */ o(ey, { onSubmit: (e4) => {
    e4.preventDefault(), v2();
  }, children: [/* @__PURE__ */ i("input", { ref: c2, value: e3, type: "text", name: "value", onInput: (e4) => {
    try {
      var t2;
      s2.next(null === (t2 = e4.target.value) || void 0 === t2 ? void 0 : t2.trim());
    } catch (e5) {
    }
  }, onKeypress: h2 }), /* @__PURE__ */ o(eh, { children: [/* @__PURE__ */ i(R, { type: "button", onClick: () => {
    p2();
  }, children: /* @__PURE__ */ i(O, { path: E }) }), /* @__PURE__ */ i(R, { type: "submit", children: /* @__PURE__ */ i(O, { path: j }) })] })] })));
}, { displayName: "TextForm", props: ["value"], emits: ["submit"] }), eP = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = new _(false);
  return l(e2.value$, /* @__PURE__ */ n2((t3) => {
    var n3, l2;
    let d2 = null !== (n3 = /* @__PURE__ */ e2.typedef.getSchema("enum")) && void 0 !== n3 ? n3 : [], s2 = null !== (l2 = /* @__PURE__ */ e2.typedef.getMeta("enumLabels")) && void 0 !== l2 ? l2 : [];
    return /* @__PURE__ */ i(M, { open$: r2, onSelected: (t4) => {
      a2.next((n4) => {
        w(n4, e2.ctx.path, t4);
      });
    }, $content: /* @__PURE__ */ i(c, { children: /* @__PURE__ */ d2.map((e3, t4) => /* @__PURE__ */ o(L, { "data-value": e3, children: [/* @__PURE__ */ i("div", { children: e3 }), s2[t4] && /* @__PURE__ */ i("div", { children: s2[t4] })] })) }), children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(el, { value: t3, onClick: () => r2.show() }) }) });
  }));
}, { displayName: "EnumInput", props: ["ctx", "value", "typedef"] }), eB = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = new _(false), r2 = /* @__PURE__ */ F.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(W, { open$: a2, $content: /* @__PURE__ */ i(eF, { value: t3, onSubmit: (t4) => {
    r2.next((n3) => {
      w(n3, e2.ctx.path, t4);
    }), a2.hide();
  } }), children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(el, { value: t3, onClick: () => {
    a2.show();
  } }) }) })));
}, { displayName: "StringInput", props: ["ctx", "value", "typedef"] }), eF = /* @__PURE__ */ n((e2, n2) => {
  let { emit: a2, render: r2 } = n2, s2 = new t(e2.value), c2 = /* @__PURE__ */ d(null), p2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), a2("submit", s2.value));
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, /* @__PURE__ */ r2((t2) => /* @__PURE__ */ o(em, { onSubmit: (e3) => {
    e3.preventDefault(), a2("submit", s2.value);
  }, children: [/* @__PURE__ */ i("textarea", { ref: c2, name: "value", rows: "10", value: t2, onInput: (e3) => {
    s2.next(e3.target.value);
  }, onKeypress: p2 }), /* @__PURE__ */ o(eh, { children: [/* @__PURE__ */ i(R, { type: "button", onClick: (t3) => {
    t3.preventDefault(), a2("submit", e2.value);
  }, children: /* @__PURE__ */ i(O, { path: E }) }), /* @__PURE__ */ i(R, { type: "submit", children: /* @__PURE__ */ i(O, { path: j }) })] })] })));
}, { displayName: "TextareaForm", props: ["value"], emits: ["submit"] }), eK = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = new _(false);
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(M, { open$: r2, onSelected: (t4) => {
    a2.next((n3) => {
      w(n3, e2.ctx.path, "true" === t4);
    });
  }, $content: /* @__PURE__ */ i(c, { children: /* @__PURE__ */ [false, true].map((e3) => /* @__PURE__ */ i(L, { "data-value": /* @__PURE__ */ String(e3), children: /* @__PURE__ */ i("div", { children: e3 }) })) }), children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(el, { value: t3, onClick: () => r2.show() }) }) })));
}, { displayName: "BooleanInput", props: ["ctx", "value", "typedef"] }), eM = /* @__PURE__ */ n((e2, t2) => {
  let { render: n2 } = t2, a2 = new _(false), r2 = /* @__PURE__ */ F.use();
  return l(e2.value$, /* @__PURE__ */ n2((t3) => /* @__PURE__ */ i(W, { open$: a2, $content: /* @__PURE__ */ i(eW, { value: t3, onSubmit: (t4) => {
    r2.next((n3) => {
      w(n3, e2.ctx.path, t4);
    }), a2.hide();
  } }), children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(el, { value: t3, onClick: () => {
    a2.show();
  } }) }) })));
}, { displayName: "NumberInput", props: ["ctx", "value", "typedef"] }), eW = /* @__PURE__ */ n((e2, n2) => {
  let { emit: a2, render: r2 } = n2, s2 = new t(e2.value), c2 = /* @__PURE__ */ d(null), p2 = () => {
    a2("submit", void 0);
  }, v2 = () => {
    try {
      a2("submit", s2.value);
    } catch (e3) {
    }
  }, h2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), v2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, /* @__PURE__ */ r2((e3) => /* @__PURE__ */ o(ey, { onSubmit: (e4) => {
    e4.preventDefault(), v2();
  }, children: [/* @__PURE__ */ i("input", { ref: c2, value: e3, type: "number", name: "value", onInput: (e4) => {
    try {
      s2.next(/* @__PURE__ */ parseFloat(e4.target.value));
    } catch (e5) {
    }
  }, onKeypress: h2 }), /* @__PURE__ */ o(eh, { children: [/* @__PURE__ */ i(R, { type: "button", onClick: () => {
    p2();
  }, children: /* @__PURE__ */ i(O, { path: E }) }), /* @__PURE__ */ i(R, { type: "submit", children: /* @__PURE__ */ i(O, { path: j }) })] })] })));
}, { displayName: "NumberForm", props: ["value"], emits: ["submit"] }), e_ = (e2, t2, n2) => "object" == e2.type || "intersection" == e2.type || "union" == e2.type && e2.getSchema("discriminator") ? /* @__PURE__ */ i(eg, { typedef: e2, value: null != t2 ? t2 : {}, ctx: n2 }) : "union" == e2.type && f(/* @__PURE__ */ e2.getSchema("discriminator")) ? /* @__PURE__ */ i(e$, { typedef: e2, value: t2, ctx: n2 }) : "record" == e2.type ? /* @__PURE__ */ i(eE, { typedef: e2, value: t2, ctx: n2 }) : "array" == e2.type ? /* @__PURE__ */ i(eO, { typedef: e2, value: t2, ctx: n2 }) : "enums" == e2.type ? /* @__PURE__ */ i(eP, { typedef: e2, value: t2, ctx: n2 }) : "string" == e2.type ? /* @__PURE__ */ i(eB, { typedef: e2, value: t2, ctx: n2 }) : "number" == e2.type || "integer" == e2.type ? /* @__PURE__ */ i(eM, { typedef: e2, value: t2, ctx: n2 }) : "boolean" == e2.type ? /* @__PURE__ */ i(eK, { typedef: e2, value: t2, ctx: n2 }) : void 0, eV = /* @__PURE__ */ n((e2, t2) => {
  let {} = e2, { render: n2 } = t2, a2 = /* @__PURE__ */ F.use(), r2 = /* @__PURE__ */ K.use(), s2 = /* @__PURE__ */ d(null);
  return l(a2, /* @__PURE__ */ n2((e3) => {
    var t3, n3;
    let l2 = null !== (t3 = r2.$value) && void 0 !== t3 ? t3 : e_;
    return /* @__PURE__ */ i(K, { value: { $value: null !== (n3 = r2.$value) && void 0 !== n3 ? n3 : e_ }, children: /* @__PURE__ */ o(eL, { children: [/* @__PURE__ */ i("section", { ref: s2 }), s2.value && /* @__PURE__ */ i(Y, { value: { indent: 0, $container: s2 }, children: /* @__PURE__ */ i(ee, { children: /* @__PURE__ */ l2(a2.typedef, e3, h) }) })] }) });
  }));
}, { displayName: "JSONEditorView" }), eL = /* @__PURE__ */ k("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  B as J,
  F as a,
  eV as b
};
