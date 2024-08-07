import { c as e, I as t, a as n, r as l, j as a, b as i, d as r, e as o, f as d, T as s, F as c, g as p, o as u } from "./lib-nodepkg-vuekit.DlrPz-PK.chunk.js";
import { o as h, E as y } from "./lib-nodepkg-typedef.BGrUPue-.chunk.js";
import { i as m, g as v, a as f, b as x, c as b, d as g, s as k } from "./vendor-innoai-tech-lodash.DaXqQgFo.chunk.js";
import { s as w, d as N, t as S, P as C, v as $, a as I } from "./lib-nodepkg-vueuikit.C5Qsxp-Q.chunk.js";
import { M as D } from "./lib-nodepkg-vuemarkdown.CIjcqGtq.chunk.js";
import { I as O, m as A, a as T, b as E, c as R, d as j, e as P, f as B } from "./lib-nodepkg-vuematerial.BHuewKtn.chunk.js";
class J extends t {
  constructor(e2, t2) {
    super(t2), this.typedef = e2, this.initials = t2;
  }
  static of(e2, t2) {
    return new J(e2, null != t2 ? t2 : "array" == e2.type ? [] : {});
  }
  isDirty(e2, t2) {
    if (!m(e2)) {
      let n2 = v(this.initials, t2);
      return f(n2) || n2 !== e2;
    }
    return false;
  }
}
let F = e(() => new J(h(), {})), M = e(() => ({ render: (e2, t2, n2) => null })), K = n((e2, t2) => {
  var n2;
  let { emit: i2, slots: r2, render: o2 } = t2, d2 = null !== (n2 = e2.open$) && void 0 !== n2 ? n2 : new _(false), s2 = (e3) => {
    let t3 = [e3.target, ...e3.composedPath()].find((e4) => {
      var t4;
      return null == e4 ? void 0 : null === (t4 = e4.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e4, "data-value");
    });
    if (t3) {
      let e4 = t3.getAttribute("data-value");
      f(e4) || (i2("selected", e4), d2.hide());
    }
  };
  return l(d2, o2((e3) => {
    var t3, n3, l2, i3;
    return a(C, { isOpen: e3, onClickOutside: () => d2.hide(), $transition: (e4) => a(U, { children: e4.content }), placement: "bottom-start", $content: a(V, { onClick: s2, children: null === (t3 = r2.content) || void 0 === t3 ? void 0 : t3.call(r2) }), children: null !== (i3 = null === (l2 = r2.default) || void 0 === l2 ? void 0 : null === (n3 = l2.call(r2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== i3 ? i3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] }), W = n((e2, t2) => {
  var n2;
  let { slots: i2, render: r2 } = t2, o2 = null !== (n2 = e2.open$) && void 0 !== n2 ? n2 : new _(false);
  return l(o2, r2((e3) => {
    var t3, n3, l2, r3;
    return a(C, { isOpen: e3, onClickOutside: () => o2.hide(), $transition: (e4) => a(U, { children: e4.content }), placement: "bottom-start", $content: a(V, { children: null === (t3 = i2.content) || void 0 === t3 ? void 0 : t3.call(i2) }), children: null !== (r3 = null === (l2 = i2.default) || void 0 === l2 ? void 0 : null === (n3 = l2.call(i2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== r3 ? r3 : null });
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
let V = w("div", { displayName: "PopoverContainer" })({ py: 4, rounded: "sm", shadow: "1", containerStyle: "sys.surface", textStyle: "sys.body-small", pos: "relative", maxW: "30vw" }), L = w("div", { displayName: "MenuItem" })({ px: 12, py: 8, gap: 23, display: "flex", alignItems: "start", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" } }), U = N({ from: { opacity: 0 }, to: { opacity: 1 }, duration: S.duration.md1, easing: S.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: S.duration.sm4, easing: S.easing.standard.decelerate }), H = n((e2, t2) => {
  let { slots: n2, render: r2 } = t2, o2 = new _(false);
  return l(o2, r2((t3) => {
    var l2, r3;
    let d2 = null === (l2 = n2.default) || void 0 === l2 ? void 0 : l2.call(n2)[0];
    return a(C, { isOpen: t3, placement: null !== (r3 = e2.placement) && void 0 !== r3 ? r3 : "left", $content: a(X, { children: a(z, { children: n2.title() }) }), $transition: (e3) => a(U, { children: e3.content }), children: d2 ? i(d2, { onMouseover: () => {
      o2.show();
    }, onMouseout: () => {
      o2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), z = w("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), X = w("div", { displayName: "TooltipWrapper" })({ px: 8 }), q = w("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 18, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), G = w("span", { displayName: "PropLeading" })({ display: "inline-table", lineHeight: 18, ml: -18 }), Q = w("span", (e2, t2) => {
  let { slots: n2 } = t2;
  return (t3) => {
    var l2, i2;
    let r2 = o(t3, { "data-deprecated": e2.deprecated, "data-optional": e2.optional, "data-nullable": e2.nullable, children: [n2.leading && a(G, { children: null === (l2 = n2.leading) || void 0 === l2 ? void 0 : l2.call(n2) }), null === (i2 = n2.default) || void 0 === i2 ? void 0 : i2.call(n2)] });
    return e2.description ? a(H, { placement: "right", $title: a(en, { sx: { minWidth: 200 }, children: a(D, { text: e2.description }) }), children: r2 }) : r2;
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable", "description"] })({ display: "inline-flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 18, _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } }, [`& ${G}`]: { visibility: "hidden" }, _hover: { [`& ${G}`]: { visibility: "visible" } } }), Y = e(() => ({ indent: 0, $container: d(null) }), { name: "IntentContext" }), Z = r((e2, t2) => {
  let { slots: n2 } = t2, l2 = Y.use(), i2 = d(null);
  return () => {
    var t3, r2, d2;
    return o(c, { children: [a(q, { children: e2.openToken }), null === (t3 = n2.leading) || void 0 === t3 ? void 0 : t3.call(n2), o(s, { to: l2.$container.value, children: [a("section", { ref: i2 }), a(et, { style: { paddingLeft: `${18 * l2.indent}px` }, children: a(q, { children: e2.closeToken }) })] }), i2.value && a(Y, { value: { $container: i2, indent: 1 + (null !== (d2 = l2.indent) && void 0 !== d2 ? d2 : 0) }, children: null === (r2 = n2.default) || void 0 === r2 ? void 0 : r2.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), ee = r((e2, t2) => {
  let { slots: n2 } = t2, l2 = Y.use();
  return () => {
    var t3;
    return a(s, { to: l2.$container.value, children: a(et, { "data-dirty": e2.dirty, style: { paddingLeft: `${18 * l2.indent}px` }, children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Line", props: ["dirty"] }), et = w("div", { displayName: "LineRow" })({ display: "flex", alignItems: "end", _hover: { containerStyle: "sys.surface-container" }, _dirty: { bgColor: $("sys.warning-container", I(0.38)) } }), en = w("span", { displayName: "Description" })({ display: "inline-block", maxWidth: "20vw", "& p": { my: "0.5em" } }), el = r((e2, t2) => {
  let { emit: n2 } = t2;
  return () => f(e2.value) || x(e2.value) ? a(eo, { onClick: () => n2("click"), children: "undefined" }) : b(e2.value) ? a(ea, { onClick: () => n2("click"), children: JSON.stringify(e2.value) }) : g(e2.value) ? a(ei, { onClick: () => n2("click"), children: String(e2.value) }) : a(er, { onClick: () => n2("click"), children: String(e2.value) });
}, { displayName: "ValueView", props: ["value"], emits: ["click"] }), ea = w(q, { displayName: "StringValue" })({ display: "inline-block", color: "sys.primary", font: "code", opacity: 1, cursor: "pointer" }), ei = w(q, { displayName: "BooleanValue" })({ display: "inline-block", color: "sys.warning", font: "code", opacity: 1, cursor: "pointer" }), er = w(q, { displayName: "NumberValue" })({ display: "inline-block", color: "sys.success", font: "code", opacity: 1, cursor: "pointer" }), eo = w(q, { displayName: "UndefinedValue" })({ display: "inline-block", color: "sys.error", font: "code", opacity: 1, cursor: "pointer" }), ed = w("span", { displayName: "ActionToolbar" })({ pos: "relative", px: 8, display: "flex", alignItems: "center", gap: 8 }), es = w("span", (e2, t2) => {
  let {} = e2, { slots: n2 } = t2;
  return (e3) => {
    var t3;
    return a(e3, { children: a(ed, { children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Actions" })({ flex: 1, lineHeight: 18, wordBreak: "keep-all", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", [`& ${ed}`]: { visibility: "hidden" }, _hover: { [`& ${ed}`]: { visibility: "visible" } } }), ec = w("span", { displayName: "ActionBtn" })({ display: "flex", alignItems: "center", justifyContent: "center", height: 16, width: 16, opacity: 0.5, cursor: "pointer", textStyle: "sys.label-small", _hover: { opacity: 0.8 } });
var ep = function() {
  var e2 = document.getSelection();
  if (!e2.rangeCount) return function() {
  };
  for (var t2 = document.activeElement, n2 = [], l2 = 0; l2 < e2.rangeCount; l2++) n2.push(e2.getRangeAt(l2));
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
let eh = p(function(e2, t2) {
  var n2, l2, a2, i2, r2, o2, d2, s2, c2 = false;
  t2 || (t2 = {}), a2 = t2.debug || false;
  try {
    if (r2 = ep(), o2 = document.createRange(), d2 = document.getSelection(), (s2 = document.createElement("span")).textContent = e2, s2.ariaHidden = "true", s2.style.all = "unset", s2.style.position = "fixed", s2.style.top = 0, s2.style.clip = "rect(0, 0, 0, 0)", s2.style.whiteSpace = "pre", s2.style.webkitUserSelect = "text", s2.style.MozUserSelect = "text", s2.style.msUserSelect = "text", s2.style.userSelect = "text", s2.addEventListener("copy", function(n3) {
      if (n3.stopPropagation(), t2.format) {
        if (n3.preventDefault(), void 0 === n3.clipboardData) {
          a2 && console.warn("unable to use e.clipboardData"), a2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var l3 = eu[t2.format] || eu.default;
          window.clipboardData.setData(l3, e2);
        } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e2);
      }
      t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
    }), document.body.appendChild(s2), o2.selectNodeContents(s2), d2.addRange(o2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
    c2 = true;
  } catch (r3) {
    a2 && console.error("unable to copy using execCommand: ", r3), a2 && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t2.format || "text", e2), t2.onCopy && t2.onCopy(window.clipboardData), c2 = true;
    } catch (r4) {
      a2 && console.error("unable to copy using clipboardData: ", r4), a2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", i2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(i2, e2);
    }
  } finally {
    d2 && ("function" == typeof d2.removeRange ? d2.removeRange(o2) : d2.removeAllRanges()), s2 && document.body.removeChild(s2), r2();
  }
  return c2;
}), ey = w("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 }), em = w("div", { displayName: "FormContainer" })({ display: "block", pos: "relative", textarea: { minW: "20vw", outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), ev = w("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${ey}`]: { pos: "relative", px: 0 } }), ef = n((e2, t2) => {
  let {} = t2;
  return () => a(H, { $title: "复制当前节点为 JSON 字符串", children: a(ec, { onClick: () => eh(JSON.stringify(e2.value, null, 2)), children: a(O, { path: A }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] }), ex = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2, l2 = new _(false);
  return a(W, { open$: l2, $content: a(eb, { onSubmit: (e3) => {
    e3 && n2("input", e3), l2.hide();
  } }), children: a(H, { $title: "导入 JSON 字符串到当前节点", children: a(ec, { onClick: () => l2.show(), children: a(O, { path: T }) }) }) });
}, { displayName: "InputFromJSONRawIconBtn", emits: ["input"] }), eb = n((e2, n2) => {
  let {} = e2, { emit: i2, render: r2 } = n2, s2 = new t(""), c2 = d(null), p2 = () => {
    i2("submit", void 0);
  }, h2 = () => {
    try {
      i2("submit", JSON.parse(s2.value));
    } catch (e3) {
    }
  }, y2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), h2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, r2((e3) => o(em, { onSubmit: (e4) => {
    e4.preventDefault(), h2();
  }, children: [a("textarea", { ref: c2, name: "value", rows: "10", value: e3, onInput: (e4) => {
    s2.next(e4.target.value);
  }, onKeypress: y2 }), o(ey, { children: [a(R, { type: "button", onClick: () => {
    p2();
  }, children: a(O, { path: E }) }), a(R, { type: "submit", children: a(O, { path: j }) })] })] })));
}, { displayName: "JSONRawForm", emits: ["submit"] }), eg = n((e2, t2) => {
  let { render: n2 } = t2, i2 = F.use(), r2 = M.use();
  return l(e2.value$, n2((t3) => a(Z, { openToken: "{", closeToken: "}", $leading: o(es, { children: [a(ew, { onAddProp: (t4) => {
    i2.next((n3) => {
      let l2 = [...e2.ctx.path, t4];
      k(n3, l2, v(n3, l2));
    });
  }, children: [...e2.typedef.entries(t3, y)].map((e3) => {
    let [n3, l2, i3] = e3;
    return Object.hasOwn(t3, n3) ? null : a(eN, { propName: String(n3), typedef: i3 });
  }) }), a(ef, { value: t3 }), a(ex, { onInput: (t4) => {
    i2.next((n3) => {
      e2.ctx.path.length ? k(n3, e2.ctx.path, t4) : Object.assign(n3, t4);
    });
  } })] }), children: [...e2.typedef.entries(t3, e2.ctx)].map((n3) => {
    let [l2, d2, s2] = n3;
    if (!Object.hasOwn(t3, l2)) return null;
    let c2 = [...e2.ctx.path, l2];
    return o(ee, { dirty: i2.isDirty(d2, c2), children: [a(Q, { deprecated: s2.getSchema("deprecated"), description: s2.getMeta("description"), $leading: a(ek, { onRemove: () => {
      i2.next((t4) => {
        let n4 = t4;
        for (let t5 of e2.ctx.path) n4 = n4[t5];
        delete n4[l2];
      });
    } }), children: String(l2) }), o(q, { children: [":", " "] }), r2.render(s2, d2, { ...e2.ctx, path: c2, branch: [...e2.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["ctx", "value", "typedef"] }), ek = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => a(H, { $title: "移除节点", children: a(ec, { onClick: () => n2("remove"), children: a(O, { path: P }) }) });
}, { displayName: "RemotePropIconBtn", emits: ["remove"] }), ew = n((e2, t2) => {
  let {} = e2, { slots: n2, emit: l2 } = t2, i2 = new _(false);
  return () => {
    var e3, t3;
    let r2 = null !== (t3 = null === (e3 = n2.default) || void 0 === e3 ? void 0 : e3.call(n2).filter((e4) => e4.type == eN)) && void 0 !== t3 ? t3 : [];
    return (null == r2 ? void 0 : r2.length) > 0 ? a(K, { open$: i2, onSelected: (e4) => {
      l2("add-prop", e4);
    }, $content: r2, children: a(H, { $title: "添加属性", children: a(ec, { onClick: () => i2.show(), children: a(O, { path: B }) }) }) }) : null;
  };
}, { displayName: "AddPropIconBtn", emits: ["add-prop"] }), eN = r((e2) => () => {
  var t2, n2, l2;
  return o(eS, { "data-value": e2.propName, children: [a(Q, { optional: e2.typedef.isOptional, children: e2.propName }), a(en, { children: null !== (l2 = null === (n2 = e2.typedef.getMeta("description")) || void 0 === n2 ? void 0 : null === (t2 = n2.split("\n")) || void 0 === t2 ? void 0 : t2[0]) && void 0 !== l2 ? l2 : "" })] });
}, { displayName: "AddPropMenuItem", props: ["propName", "typedef"] }), eS = w(L, { displayName: "AddPropMenuItemContainer" })({ width: 400, [`& ${Q}`]: { width: "30%", textAlign: "left" } }), eC = n((e2, t2) => {
  let { render: n2 } = t2, i2 = F.use(), r2 = M.use();
  return l(e2.value$, n2((t3) => a(Z, { openToken: "[", closeToken: "]", $leading: o(es, { children: [a(e$, { onAdd: () => {
    i2.next((t4) => {
      let n3 = v(t4, e2.ctx.path, []);
      k(t4, e2.ctx.path, [...n3, void 0]);
    });
  } }), a(ef, { value: t3 }), a(ex, { onInput: (t4) => {
    i2.next((n3) => {
      e2.ctx.path.length ? k(n3, e2.ctx.path, t4) : Object.assign(n3, t4);
    });
  } })] }), children: [...e2.typedef.entries(t3, e2.ctx)].map((t4) => {
    let [n3, l2, d2] = t4, s2 = [...e2.ctx.path, n3];
    return o(ee, { dirty: i2.isDirty(l2, s2), children: [a(Q, { sx: { opacity: 0.3, mr: "0.5em" }, $leading: a(eI, { onRemove: () => {
      i2.next((t5) => {
        let l3 = v(t5, e2.ctx.path, []);
        k(t5, e2.ctx.path, l3.filter((e3, t6) => t6 !== n3));
      });
    } }), children: String(n3) }), r2.render(d2, l2, { ...e2.ctx, path: s2, branch: [...e2.ctx.branch, l2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), e$ = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => a(H, { $title: "添加数组项", children: a(ec, { onClick: () => n2("add"), children: a(O, { path: B }) }) });
}, { displayName: "AddItemIconBtn", emits: ["add"] }), eI = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => a(H, { $title: "移除节点", children: a(ec, { onClick: () => n2("remove"), children: a(O, { path: P }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), eD = n((e2, t2) => {
  let { render: n2 } = t2, i2 = F.use(), r2 = M.use();
  return l(e2.value$, n2((t3) => a(Z, { openToken: "{", closeToken: "}", $leading: o(es, { children: [a(eA, { onAddKey: (t4) => {
    i2.next((n3) => {
      let l2 = [...e2.ctx.path, t4];
      k(n3, l2, v(n3, l2));
    });
  } }), a(ef, { value: t3 }), a(ex, { onInput: (t4) => {
    i2.next((n3) => {
      e2.ctx.path.length ? k(n3, e2.ctx.path, t4) : Object.assign(n3, t4);
    });
  } })] }), children: [...e2.typedef.entries(t3, e2.ctx)].map((n3) => {
    let [l2, d2, s2] = n3;
    if (!Object.hasOwn(t3, l2)) return null;
    let c2 = [...e2.ctx.path, l2];
    return o(ee, { dirty: i2.isDirty(d2, c2), children: [a(Q, { $leading: a(eO, { onRemove: () => {
      i2.next((t4) => {
        let n4 = t4;
        for (let t5 of e2.ctx.path) n4 = n4[t5];
        delete n4[l2];
      });
    } }), children: String(l2) }), o(q, { children: [":", " "] }), r2.render(s2, d2, { ...e2.ctx, path: c2, branch: [...e2.ctx.branch, d2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), eO = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2;
  return () => a(H, { $title: "移除节点", children: a(ec, { onClick: () => n2("remove"), children: a(O, { path: P }) }) });
}, { displayName: "RemotePropIconBtn", emits: ["remove"] }), eA = n((e2, t2) => {
  let {} = e2, { emit: n2 } = t2, l2 = new _(false);
  return () => a(W, { open$: l2, $content: a(eT, { onSubmit: (e3) => {
    e3 && n2("add-key", e3), l2.hide();
  } }), children: a(H, { $title: "添加 key", children: a(ec, { onClick: () => {
    l2.show();
  }, children: a(O, { path: B }) }) }) });
}, { displayName: "AddKeyIconBtn", emits: ["add-key"] }), eT = n((e2, n2) => {
  let { emit: i2, render: r2 } = n2, s2 = new t(e2.value), c2 = d(null), p2 = () => {
    i2("submit", void 0);
  }, h2 = () => {
    try {
      i2("submit", s2.value);
    } catch (e3) {
    }
  }, y2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), h2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, r2((e3) => o(ev, { onSubmit: (e4) => {
    e4.preventDefault(), h2();
  }, children: [a("input", { ref: c2, value: e3, type: "text", name: "value", onInput: (e4) => {
    try {
      var t2;
      s2.next(null === (t2 = e4.target.value) || void 0 === t2 ? void 0 : t2.trim());
    } catch (e5) {
    }
  }, onKeypress: y2 }), o(ey, { children: [a(R, { type: "button", onClick: () => {
    p2();
  }, children: a(O, { path: E }) }), a(R, { type: "submit", children: a(O, { path: j }) })] })] })));
}, { displayName: "TextForm", props: ["value"], emits: ["submit"] }), eE = n((e2, t2) => {
  let { render: n2 } = t2, i2 = F.use(), r2 = new _(false);
  return l(e2.value$, n2((t3) => {
    var n3, l2;
    let d2 = null !== (n3 = e2.typedef.getSchema("enum")) && void 0 !== n3 ? n3 : [], s2 = null !== (l2 = e2.typedef.getMeta("enumLabels")) && void 0 !== l2 ? l2 : [];
    return a(K, { open$: r2, onSelected: (t4) => {
      i2.next((n4) => {
        k(n4, e2.ctx.path, t4);
      });
    }, $content: a(c, { children: d2.map((e3, t4) => o(L, { "data-value": e3, children: [a("div", { children: e3 }), s2[t4] && a("div", { children: s2[t4] })] })) }), children: a(el, { value: t3, onClick: () => r2.show() }) });
  }));
}, { displayName: "EnumInput", props: ["ctx", "value", "typedef"] }), eR = n((e2, t2) => {
  let { render: n2 } = t2, i2 = new _(false), r2 = F.use();
  return l(e2.value$, n2((t3) => a(W, { open$: i2, $content: a(ej, { value: t3, onSubmit: (t4) => {
    r2.next((n3) => {
      k(n3, e2.ctx.path, t4);
    }), i2.hide();
  } }), children: a(el, { value: t3, onClick: () => {
    i2.show();
  } }) })));
}, { displayName: "StringInput", props: ["ctx", "value", "typedef"] }), ej = n((e2, n2) => {
  let { emit: i2, render: r2 } = n2, s2 = new t(e2.value), c2 = d(null), p2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), i2("submit", s2.value));
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, r2((t2) => o(em, { onSubmit: (e3) => {
    e3.preventDefault(), i2("submit", s2.value);
  }, children: [a("textarea", { ref: c2, name: "value", rows: "10", value: t2, onInput: (e3) => {
    s2.next(e3.target.value);
  }, onKeypress: p2 }), o(ey, { children: [a(R, { type: "button", onClick: () => {
    i2("submit", e2.value);
  }, children: a(O, { path: E }) }), a(R, { type: "submit", children: a(O, { path: j }) })] })] })));
}, { displayName: "TextareaForm", props: ["value"], emits: ["submit"] }), eP = n((e2, t2) => {
  let { render: n2 } = t2, i2 = F.use(), r2 = new _(false);
  return l(e2.value$, n2((t3) => a(K, { open$: r2, onSelected: (t4) => {
    i2.next((n3) => {
      k(n3, e2.ctx.path, "true" === t4);
    });
  }, $content: a(c, { children: [false, true].map((e3) => a(L, { "data-value": String(e3), children: a("div", { children: e3 }) })) }), children: a(el, { value: t3, onClick: () => r2.show() }) })));
}, { displayName: "BooleanInput", props: ["ctx", "value", "typedef"] }), eB = n((e2, t2) => {
  let { render: n2 } = t2, i2 = new _(false), r2 = F.use();
  return l(e2.value$, n2((t3) => a(W, { open$: i2, $content: a(eJ, { value: t3, onSubmit: (t4) => {
    r2.next((n3) => {
      k(n3, e2.ctx.path, t4);
    }), i2.hide();
  } }), children: a(el, { value: t3, onClick: () => {
    i2.show();
  } }) })));
}, { displayName: "NumberInput", props: ["ctx", "value", "typedef"] }), eJ = n((e2, n2) => {
  let { emit: i2, render: r2 } = n2, s2 = new t(e2.value), c2 = d(null), p2 = () => {
    i2("submit", void 0);
  }, h2 = () => {
    try {
      i2("submit", s2.value);
    } catch (e3) {
    }
  }, y2 = (e3) => {
    "Enter" !== e3.key || e3.shiftKey || (e3.preventDefault(), h2());
  };
  return u(() => {
    var e3;
    null === (e3 = c2.value) || void 0 === e3 || e3.focus();
  }), l(s2, r2((e3) => o(ev, { onSubmit: (e4) => {
    e4.preventDefault(), h2();
  }, children: [a("input", { ref: c2, value: e3, type: "number", name: "value", onInput: (e4) => {
    try {
      s2.next(parseFloat(e4.target.value));
    } catch (e5) {
    }
  }, onKeypress: y2 }), o(ey, { children: [a(R, { type: "button", onClick: () => {
    p2();
  }, children: a(O, { path: E }) }), a(R, { type: "submit", children: a(O, { path: j }) })] })] })));
}, { displayName: "NumberForm", props: ["value"], emits: ["submit"] }), eF = n((e2, t2) => {
  let {} = e2, { render: n2 } = t2, i2 = F.use(), r2 = (e3, t3, n3) => "object" == e3.type || "intersection" == e3.type || "union" == e3.type ? a(eg, { typedef: e3, value: null != t3 ? t3 : {}, ctx: n3 }) : "record" == e3.type ? a(eD, { typedef: e3, value: t3, ctx: n3 }) : "array" == e3.type ? a(eC, { typedef: e3, value: t3, ctx: n3 }) : "enums" == e3.type ? a(eE, { typedef: e3, value: t3, ctx: n3 }) : "string" == e3.type ? a(eR, { typedef: e3, value: t3, ctx: n3 }) : "number" == e3.type || "integer" == e3.type ? a(eB, { typedef: e3, value: t3, ctx: n3 }) : "boolean" == e3.type ? a(eP, { typedef: e3, value: t3, ctx: n3 }) : null, s2 = d(null);
  return l(i2, n2((e3) => a(M, { value: { render: r2 }, children: o(eM, { children: [a("section", { ref: s2 }), s2.value && a(Y, { value: { indent: 0, $container: s2 }, children: a(ee, { children: r2(i2.typedef, e3, y) }) })] }) })));
}, { displayName: "JSONEditorView" }), eM = w("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  J,
  F as a,
  eF as b
};
