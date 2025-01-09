var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ev_instances, a_get, r_fn;
import { I as e, r as t, c as a, a as r, o as i, e as n, s as o, y as l, k as s, j as d, C as p, R as c, d as u, F as m, b as h, D as y, E as f, G as v, m as b } from "./lib-nodepkg-vuekit.DEOFcjz1.chunk.js";
import { S as g, s as x, b as w, e as $, f as _, g as N, h as S, j as I, o as P } from "./lib-nodepkg-typedef.HeyJcxgM.chunk.js";
import { c as O, a as k, p as C, t as j } from "./vendor-innoai-tech-fetcher.nmbGIYbm.chunk.js";
import { B as D, s as T, b as q, m as L, E as F, o as B, S as E, t as R, k as W, O as M, l as J, c as H, n as A } from "./vendor-rxjs.BqYGlyAQ.chunk.js";
import { w as V, g as z, a as U, x as K, d as G, e as Q } from "./vendor-innoai-tech-lodash.DIO2ZYj7.chunk.js";
import { s as X, B as Y, v as Z, a as ee } from "./lib-nodepkg-vueuikit.Cav7GxZu.chunk.js";
import { M as et } from "./lib-nodepkg-vuemarkdown.C7Wi5W91.chunk.js";
import { I as ea, D as er, m as ei, T as en, F as eo, f as el, g as es, h as ed } from "./lib-nodepkg-vuematerial.CY_3g4Vb.chunk.js";
import { l as ep, h as ec, i as eu, F as em } from "./lib-nodepkg-vueformdata.DEHgPHnt.chunk.js";
import { J as eh, a as ey, b as ef } from "./lib-nodepkg-jsoneditor.D3Uyeyl3.chunk.js";
const _ev = class _ev extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ev_instances);
    __privateAdd(this, _e, O({ paramsSerializer: C, transformRequestBody: j }));
    __privateAdd(this, _t, new D(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _ev({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return t(__privateGet(this, _t), T((t2) => {
      let a2 = t2.get(e10);
      return a2 ? L(a2, a2.error$) : F;
    }));
  }
  requesting$(e10) {
    return t(__privateGet(this, _t), T((t2) => {
      var a2, r2;
      return null !== (r2 = null === (a2 = t2.get(e10)) || void 0 === a2 ? void 0 : a2.requesting$) && void 0 !== r2 ? r2 : B(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var t2, a2;
    let r2 = __privateMethod(this, _ev_instances, r_fn).call(this, e10);
    if (!r2) return null;
    let i2 = Object.keys(null !== (a2 = null === (t2 = r2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== a2 ? a2 : {})[0];
    return (e11) => {
      var t3, a3;
      return { method: r2.method, url: __privateGet(this, _ev_instances, a_get) + eg(r2.path, e11), params: V(e11, null === (t3 = r2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...V(e11, null === (a3 = r2.parameters) || void 0 === a3 ? void 0 : a3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t2) {
    let a2 = __privateGet(this, _t).value.get(e10);
    if (!a2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3) return;
      a2 = k(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, a2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    a2.next(t2);
  }
  operation$(e10) {
    return t(this, T((t2) => {
      for (let a2 of eb(t2, { operationId: e10 })) if (a2) return B(a2);
      return B(null);
    }));
  }
  operations$(e10) {
    return t(this, T((t2) => B([...eb(t2, e10)])));
  }
  schema$(e10) {
    var a2, r2;
    let i2 = null !== (r2 = null === (a2 = e10.split("#/")[1]) || void 0 === a2 ? void 0 : a2.split("/")) && void 0 !== r2 ? r2 : [];
    return t(this, T((e11) => {
      if (i2) {
        var t2;
        return B(null !== (t2 = z(e11, i2)) && void 0 !== t2 ? t2 : null);
      }
      return B(null);
    }), q((e11) => e11 ? { ...e11, $id: i2[i2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, a2, r2;
    let i2 = null !== (a2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== a2 ? a2 : [];
    if (i2) return null !== (r2 = z(this.value, i2)) && void 0 !== r2 ? r2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_ev_instances = new WeakSet();
a_get = function() {
  var e10, t2, a2;
  return null !== (a2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e10 = t2[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== a2 ? a2 : "";
};
r_fn = function(e10) {
  for (let t2 of eb(this.value, { operationId: e10 })) if (t2) return t2;
  return null;
};
let ev = _ev;
function* eb(e10, t2) {
  for (let [n2, o2] of Object.entries(e10.paths)) for (let [e11, l2] of Object.entries(o2)) {
    var a2, r2, i2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (r2 = l2.tags) && void 0 !== r2 ? r2 : []).includes(t2.tag))) {
      if (t2.operationId) {
        if (t2.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e11, path: n2, group: null !== (i2 = null === (a2 = l2.tags) || void 0 === a2 ? void 0 : a2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let eg = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, a2) => [].concat(t2[a2] || e11).join(","));
}, ex = a(() => ev.empty(), { name: "OpenAPI" }), ew = (e10) => (t2, a2) => t2[e10] == a2[e10] ? 0 : t2[e10] < a2[e10] ? -1 : 1, e$ = r((a2, r2) => {
  let {} = a2, {} = r2, u2 = ex.use(), m2 = new e({ operationId: void 0 }), h2 = new E();
  t(h2, W(200), R((e10) => {
    m2.next((t2) => {
      t2.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), o());
  let y2 = i(null);
  t(y2, T((e10) => {
    if (e10) {
      let t2 = (t3) => {
        t3 && e10.scrollTo({ top: t3.offsetTop - e10.offsetTop });
      };
      return new M(() => {
        let a3 = new MutationObserver((e11) => {
          for (let a4 of e11) if ("attributes" === a4.type) {
            let e12 = a4.target;
            e12.classList.contains("router-link-active") && t2(e12);
          }
        });
        return a3.observe(e10, { attributes: true, subtree: true }), setTimeout(() => {
          t2(e10.querySelector(".router-link-active"));
        }, 100), () => {
          a3.disconnect();
        };
      });
    }
    return F;
  }), l());
  let f2 = t(m2, T((e10) => u2.operations$(e10)), s((e10) => {
    let t2 = Object.groupBy(e10, (e11) => e11.group);
    return n(eN, { children: [d(eS, { children: d("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e11) => {
      h2.next(e11.target.value);
    } }) }), d(eI, { sx: { flex: 1, overflow: "scroll" }, ref: y2, children: Object.entries(t2).toSorted().map((e11) => {
      let [t3, a3] = e11;
      return n("div", { "data-nav-group": true, children: [d("div", { "data-nav-group-heading": true, children: t3 }), d("div", { "data-nav-group-contents": true, children: null == a3 ? void 0 : a3.toSorted(ew("operationId")).map((e12) => {
        var t4;
        return n(eO, { component: p, to: `/operations/${e12.operationId}`, children: [d(Y, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e12.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e12.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-id": true, children: e12.operationId }), e12.summary ? d("div", { "data-operation-summary": true, children: e12.summary != e12.operationId ? e12.summary : d("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => n(e_, { children: [f2, d(eP, { children: d(c, {}) })] });
}, { displayName: "OpenAPIView" }), e_ = X("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eN = X("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eS = X("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eI = X("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eP = X("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), eO = X("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), ek = X("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eC = X("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), ej = X("div", (e10, t2) => {
  let { slots: a2 } = t2, r2 = eL.use();
  return (t3) => {
    var i2, n2;
    return d(t3, { style: { paddingLeft: `${r2.indent}em`, marginTop: (null !== (n2 = e10.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = a2.default) || void 0 === i2 ? void 0 : i2.call(a2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eD = X("div", (e10, t2) => {
  let {} = t2;
  return (t3) => {
    var a2, r2;
    let i2 = null !== (a2 = g.metaProp(e10.schema, "title")) && void 0 !== a2 ? a2 : "", o2 = null !== (r2 = g.metaProp(e10.schema, "description")) && void 0 !== r2 ? r2 : "";
    return n(t3, { children: [i2, " ", o2 ? d(en, { title: d(eT, { children: d(et, { text: o2 }) }), children: d(ea, { path: ei }) }) : null] });
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ea}`]: { width: 12, height: 12, overflow: "hidden" } }), eT = X("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eq = (e10) => {
  let { name: t2, value: a2, extra: r2 } = e10;
  return "" == a2 ? null : d(ej, { children: n(ek, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(ek, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${a2}`, Object.entries(null != r2 ? r2 : {}).map((e11) => {
    let [t3, a3] = e11;
    return n(m, { children: [n(ek, { sx: { opacity: 0.5 }, children: [",", " "] }), d(ek, { sx: { opacity: 0.5 }, children: t3 }), n(ek, { sx: { opacity: 0.5 }, children: [":", " "] }), d(ek, { sx: { opacity: 0.7 }, children: a3 })] });
  }), d(ek, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eL = a(() => ({ indent: 0 }), { name: "IntentContext" }), eF = u((e10, t2) => {
  let {} = e10, { slots: a2 } = t2, r2 = eL.use();
  return () => {
    var e11;
    return d(eL, { value: { indent: r2.indent + 1 }, children: null === (e11 = a2.default) || void 0 === e11 ? void 0 : e11.call(a2) });
  };
}, { displayName: "Indent" });
class eB {
  constructor(e10, t2) {
    this.id = e10, this.parent = t2;
  }
  child(e10) {
    return new eB(e10, this);
  }
  safe(e10) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e10) return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let eE = a(() => new eB("")), eR = r((e10) => {
  let t2 = eE.use(), a2 = eL.use(), r2 = i(false);
  return () => {
    let i2 = e10.schema, o2 = g.schemaProp(e10.schema, "$ref"), l2 = "intersection" == (i2 = g.schemaProp(e10.schema, g.unwrap)()).type || "object" == i2.type || "union" == i2.type || "record" == i2.type || "array" == i2.type || "union" == i2.type, s2 = t2.safe(o2) && n(m, { children: [d("span", { children: " " }), d(eM, { schema: i2 })] });
    return d(eE, { value: t2.child(o2), children: l2 ? a2.indent < 3 ? n(m, { children: [d(p, { to: `#${o2}`, children: d(ek, { id: o2, children: o2 }) }), a2.indent < 3 && s2] }) : n(m, { children: [d("a", { href: `#${o2}`, onClick: (e11) => {
      e11.preventDefault(), r2.next(true);
    }, children: d(ek, { id: o2, children: o2 }) }), t2.safe(o2) && d(er, { isOpen: r2.value, onClose: () => {
      r2.next(false);
    }, children: d(eW, { children: n(ej, { children: [d(ek, { children: o2 }), d(eL, { value: { indent: 0 }, children: s2 })] }) }) })] }) : s2 });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eW = X("div", { displayName: "DialogContainer" })({ display: "flex", containerStyle: "sys.surface", height: "100vh", width: "36vw", roundedLeft: "sm", px: 16, py: 36, top: 0, right: 0, position: "absolute", overflow: "auto" }), eM = r((e10) => {
  let t2 = e10.schema;
  return g.schemaProp(t2, "$ref") ? d(eR, { schema: t2 }) : () => {
    var e11, a2, r2, i2, o2, l2, s2, p2;
    switch (t2.type) {
      case "union":
        return d(m, { children: null === (e11 = g.schemaProp(t2, "oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t3) => n(m, { children: [t3 > 0 && n(ek, { children: [" ", " | ", " "] }), d(eM, { schema: e12 })] })) });
      case "intersection":
        return d(ek, { children: null === (a2 = g.schemaProp(t2, "allOf")) || void 0 === a2 ? void 0 : a2.filter((e12) => !Object.keys(e12).length).map((e12, t3) => n(m, { children: [t3 > 0 && n(ek, { children: [" ", "&", " "] }), d(eM, { schema: e12 })] })) });
      case "array":
        return n(ek, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(ek, { children: "Array<" }), d(eM, { schema: null !== (r2 = g.schemaProp(t2, "items")) && void 0 !== r2 ? r2 : w() }), d(ek, { children: ">" })] });
      case "object":
        return n(m, { children: [d(ek, { children: "{" }), d(eF, { children: d(m, { children: Object.entries(null !== (i2 = g.schemaProp(t2, "properties")) && void 0 !== i2 ? i2 : {}).map((e12) => {
          var a3;
          let [r3, i3] = e12;
          return i3 ? d(m, { children: n(ej, { spacing: 2, children: [d(eD, { schema: i3 }), n(ek, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(eC, { nullable: g.schemaProp(t2, "nullable"), deprecated: g.schemaProp(t2, "deprecated"), optional: !(null !== (a3 = g.schemaProp(t2, "required")) && void 0 !== a3 ? a3 : []).includes(r3), children: r3 }), d(ek, { sx: { mr: "1em" }, children: ":" }), d(eM, { schema: i3 })] })] }) }) : null;
        }) }) }), d(ek, { children: "}" })] });
      case "record":
        return n(m, { children: [d(ek, { children: "{" }), g.schemaProp(t2, "additionalProperties") && d(m, { children: d(eF, { children: n(ej, { children: [n(ek, { sx: { mr: 1 }, children: ["[K:", " "] }), d(eM, { schema: null !== (o2 = g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : x() }), n(ek, { sx: { mr: 1 }, children: ["]:", " "] }), d(eM, { schema: null !== (l2 = g.schemaProp(t2, "additionalProperties")) && void 0 !== l2 ? l2 : w() })] }) }) }), d(ek, { children: "}" })] });
      case "enums": {
        let e12 = null !== (s2 = g.schemaProp(t2, "enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e12.length) return d(ek, { children: JSON.stringify(e12[0]) });
        let a3 = "any";
        return e12.length > 0 && (a3 = typeof e12[0]), n(m, { children: [d(ek, { sx: { fontWeight: "bold" }, children: a3 }), d(eF, { children: e12.map((e13, a4) => {
          var r3;
          return d(eq, { name: "enum", value: `${e13}`, extra: (null === (r3 = g.metaProp(t2, "enumLabels")) || void 0 === r3 ? void 0 : r3[a4]) ? { label: JSON.stringify(g.metaProp(t2, "enumLabels")[a4]) } : {} }, e13);
        }) })] });
      }
    }
    let [c2, u2, h2] = [t2.type, g.schemaProp(t2, "format"), g.schemaProp(t2, "default")];
    return n(m, { children: [d(ek, { sx: { fontWeight: "bold" }, children: c2 || "any" }), n(eF, { children: [u2 && d(eq, { name: "format", value: u2 }), !U(h2) && d(eq, { name: "default", value: h2 }), !eJ(t2) && d(eq, { name: "validate", value: eJ(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eJ(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e10, t2));
}
let eH = r({ code: $(), response: $() }, (e10) => {
  let t2 = ex.use();
  return () => {
    var a2, r2;
    return n(eA, { children: [d(eV, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), n(Y, { sx: { pl: "4em" }, children: [d(m, { children: K(null !== (a2 = e10.response["x-status-return-errors"]) && void 0 !== a2 ? a2 : []).map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = e12.indexOf("{");
      return t3 > -1 ? e12.slice(t3 + 1, e12.length - 1).split(",").reduce((e13, t4) => (e13.joining ? e13.values[e13.values.length - 1] += "," + t4 : e13.values.push(t4), t4.split('"').length % 2 == 0 && (e13.joining = !e13.joining), e13), { values: [], joining: false }).values.reduce((e13, t4) => {
        let a3 = t4.indexOf("=");
        if (a3 < 0) return e13;
        let r3 = t4.slice(0, a3), i2 = t4.slice(a3 + 1);
        return U(r3) || U(i2) ? e13 : { ...e13, [r3]: JSON.parse(i2) };
      }, { key: e12.slice(0, t3) }) : null;
    }(e11)).map((e11) => e11 ? d(Y, { sx: { mb: 16 }, children: n(ej, { spacing: 0, children: [n(ek, { children: ["{", " "] }), d(eF, { children: Object.entries(e11).map((e12) => {
      let [t3, a3] = e12;
      return "code" === t3 ? null : n(ej, { children: [d(eC, { children: t3 }), d(ek, { children: ": " }), d(ek, { children: JSON.stringify(a3) })] });
    }) }), n(ek, { children: [" ", "}"] })] }) }) : null) }), d(m, { children: Object.entries(null !== (r2 = e10.response.content) && void 0 !== r2 ? r2 : {}).map((e11) => {
      let [a3, { schema: r3 }] = e11;
      return n(ez, { children: [d(ej, { spacing: 0, children: d(eM, { schema: _.decode(r3, (e12) => {
        var a4;
        return [null !== (a4 = t2.schema(e12)) && void 0 !== a4 ? a4 : {}, N(e12)];
      }) }) }), d("div", { "data-content-type": true, children: a3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), eA = X("section", { displayName: "ResponseSection" })({}), eV = X("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), ez = X("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eU = X("div", (e10, t2) => {
  let { slots: a2 } = t2;
  return (t3) => {
    var r2, i2, o2, l2;
    let s2 = e10.valued, p2 = e10.invalid, c2 = e10.disabled, u2 = (null !== (l2 = null === (r2 = a2.default) || void 0 === r2 ? void 0 : r2.call(a2)) && void 0 !== l2 ? l2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t4, a3, r3, i3, n2, o3;
        return s2 = !!(null !== (n2 = null !== (i3 = null === (t4 = e11.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i3 ? i3 : null === (a3 = e11.props) || void 0 === a3 ? void 0 : a3.placeholder) && void 0 !== n2 ? n2 : s2), c2 = null !== (o3 = null === (r3 = e11.props) || void 0 === r3 ? void 0 : r3.disabled) && void 0 !== o3 ? o3 : c2, h(e11, { disabled: c2 });
      }
      return h(e11);
    });
    return n(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e10.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [n("div", { "data-input-container": true, children: [n("div", { "data-input-decorator-container": true, children: [d("div", { "data-input-decorator-leading": true }), d("div", { "data-input-decorator-label": true, children: d("div", { "data-input-label": true, children: null === (i2 = a2.label) || void 0 === i2 ? void 0 : i2.call(a2) }) }), d("div", { "data-input-decorator-trailing": true })] }), n("div", { "data-input-row": true, children: [a2.leading && d(eK, { role: "leading", children: a2.leading() }), u2, a2.trailing && d(eK, { role: "trailing", children: a2.trailing() })] })] }), a2.supporting && d("div", { "data-input-supporting": true, children: null === (o2 = a2.supporting) || void 0 === o2 ? void 0 : o2.call(a2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eK = X("div", { role: S(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eG = r((e10, a2) => {
  let {} = a2, r2 = eh.of(e10.field$.typedef, U(e10.field$.input) ? void 0 : e10.field$.input);
  return t(r2, J(1), R((t2) => {
    e10.field$.update(t2);
  }), o()), () => d(eQ, { children: d(ey, { value: r2, children: d(ef, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eQ = X("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eX = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eY = (e10) => {
  let { field: t2, value: a2 } = e10;
  return n(Y, { component: "span", sx: { display: "block" }, children: [n(Y, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), d("span", { children: a2 })] });
}, eZ = (e10) => {
  let { method: t2, url: a2, params: r2 } = e10, i2 = C(r2);
  return n(Y, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, n(Y, { component: "span", sx: { fontWeight: "medium" }, children: [a2, i2 ? `?${i2}` : ""] }), " HTTP/*"] });
}, e0 = (e10, t2) => {
  let a2 = (t3, r2) => r2 instanceof File || r2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${r2.name ? `; filename="${r2.name}"` : ""}
Content-Type: ${r2.type}

[File Content]
` : G(r2) ? r2.map((e11) => a2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${Q(r2) ? JSON.stringify(r2) : String(r2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, r2] = e11;
    return a2(t3, r2);
  }).join("\n") + `${e10}--`;
}, e1 = u({ $default: $().optional() }, (e10, t2) => {
  let {} = e10, { slots: a2 } = t2;
  return () => {
    var e11;
    return d(Y, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: d(Y, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: d("code", { children: null === (e11 = a2.default) || void 0 === e11 ? void 0 : e11.call(a2) }) }) });
  };
}, { displayName: "CodeView" }), e2 = u({ request: $() }, (e10) => () => {
  let t2 = e10.request;
  return n(e1, { children: [d(eZ, { ...t2 }), d(m, { children: Object.entries({ ...eX(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, a2] = e11;
    return d(eY, { field: t3, value: a2 }, t3);
  }) }), t2.body && n(m, { children: [d("br", {}), function(e11) {
    if (e8(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, e0(t3, e11.body);
    }
    return e8(e11.headers).includes("application/x-www-form-urlencoded") ? C(e11.body) : e3(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), e4 = (e10, t2) => {
  let a2 = new Uint8Array(e10), r2 = "";
  for (let e11 = a2.byteLength, t3 = 0; t3 < e11; t3++) r2 += String.fromCharCode(a2[t3]);
  return `data:${t2};base64,${btoa(r2)}`;
}, e6 = u({ response: $() }, (e10, t2) => {
  let {} = t2;
  return () => {
    let t3 = e10.response;
    return e8(t3.headers).includes("image/") ? d("div", { children: d("img", { src: e4(t3.body, e8(t3.headers)), alt: "" }) }) : n(e1, { children: [n("span", { children: ["HTTP/* ", t3.status] }), d("br", {}), t3.headers && d(m, { children: Object.entries(t3.headers).map((e11) => {
      let [t4, a2] = e11;
      return d(eY, { field: t4, value: a2 }, t4);
    }) }), d("br", {}), t3.body ? e3(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function e8() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, a2] of Object.entries(e10)) if ("content-type" == t2.toLowerCase()) return a2;
  return "";
}
let e3 = (e10) => e8(e10).includes("application/json"), e5 = r({ operationID: x() }, (e10) => t(ex.use().response$(e10.operationID), s((e11) => d(e7, { children: d(e6, { response: e11 }) }))), { displayName: "ResponsePreview" }), e7 = X("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), e9 = r((e10, a2) => {
  var r2, i2, l2, p2;
  let { slots: c2 } = a2, u2 = ex.use(), m2 = {};
  for (let t2 of null !== (r2 = e10.operation.parameters) && void 0 !== r2 ? r2 : []) {
    let e11 = _.decode(t2.schema, (e12) => {
      var t3;
      return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, N(e12)];
    }).use(ep(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e11 = e11.optional()), e11.use(ec(t2.schema.title)), ["object", "array"].includes(null !== (i2 = t2.schema.type) && void 0 !== i2 ? i2 : "") ? m2[t2.name] = e11.use(eu(eG)) : m2[t2.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t2 = Object.entries(null !== (l2 = e10.operation.requestBody.content) && void 0 !== l2 ? l2 : {})[0];
    if (t2) {
      let [e11, a3] = t2, r3 = _.decode(null !== (p2 = a3.schema) && void 0 !== p2 ? p2 : {}, (e12) => {
        var t3;
        return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, N(e12)];
      }).use(ep(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? m2.body = r3.use(eu(eG)) : e11.includes("octet-stream") ? m2.body = r3.use(eu(ta)) : m2.body = r3;
    }
  }
  let h2 = f(), y2 = v(), b2 = em.of(P(m2), (() => {
    try {
      var e11;
      let t2 = y2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  t(b2, R((t2) => {
    u2.request(e10.operation.operationId, t2);
  }), R((e11) => {
    h2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), o());
  let g2 = t(b2.inputs$, s((t2) => {
    let a3 = u2.asRequestConfigCreator(e10.operation.operationId);
    return a3 ? d(e2, { request: a3(t2) }) : null;
  }));
  return () => {
    var t2;
    return n(Y, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), b2.submit();
    }, children: [d(Y, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: [...b2.fields(b2.typedef)].map((e11) => d(te, { field$: e11 })) }), d(Y, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: n(Y, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [g2, d(Y, { sx: { px: 8 }, children: d(eo, { type: "submit", children: "发起请求" }) }), d(e5, { operationID: e10.operation.operationId }), d(Y, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e10.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), te = r((e10, a2) => {
  let { field$: r2 } = e10, { render: i2 } = a2;
  return y(() => {
    r2.destroy();
  }), t(H([r2, r2.input$]), i2((e11) => {
    var t2, a3, i3;
    let [o2, l2] = e11, s2 = null !== (t2 = g.metaProp(r2.typedef, "inputBy")) && void 0 !== t2 ? t2 : tt, p2 = null !== (a3 = g.metaProp(r2.typedef, "readOnlyWhenInitialExist")) && void 0 !== a3 && a3 && !!o2.initial;
    return d(eU, { valued: !U(null != l2 ? l2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: n("span", { children: [null !== (i3 = r2.meta.label) && void 0 !== i3 ? i3 : r2.name, r2.optional ? "（非必填）" : ""] }), $supporting: n(ej, { children: [d(eD, { schema: r2.typedef }), d(eM, { schema: r2.typedef })] }), $trailing: s2.$trailing, children: d(s2, { field$: r2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), tt = u({ readOnly: I().optional(), field$: $() }, (e10) => () => {
  let { readOnly: t2, field$: a2, ...r2 } = e10;
  return d("input", { ...r2, "data-input": true, type: "text", readonly: t2, name: a2.name, value: a2.input, onChange: (e11) => {
    let t3 = e11.target.value;
    switch (a2.typedef.type) {
      case "number":
        try {
          a2.update(a2.typedef.create(parseFloat(t3)));
        } catch (e12) {
        }
        break;
      case "integer":
        try {
          a2.update(a2.typedef.create(parseInt(t3)));
        } catch (e12) {
        }
        break;
      case "boolean":
        try {
          a2.update(a2.typedef.create("false" !== t3 || !!t3));
        } catch (e12) {
        }
        break;
      default:
        a2.update(a2.typedef.create(t3));
    }
  }, onFocus: () => a2.focus(), onBlur: () => a2.blur() });
}, { displayName: "TextInput" }), ta = r((e10) => {
  let a2 = i(null);
  return t(a2, R((t2) => {
    t2 && e10.field$.update(t2);
  }), l()), () => {
    var t2;
    let { readOnly: r2, accept: i2 } = e10;
    return n(Y, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [d("input", { type: "file", name: e10.field$.name, readonly: r2, accept: i2, "data-file-input": true, onChange: (e11) => {
      var t3;
      let r3 = null === (t3 = e11.target.files) || void 0 === t3 ? void 0 : t3[0];
      r3 && (a2.value = r3);
    } }), d(ea, { path: el }), d("span", { children: null === (t2 = a2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), tr = r((e10, a2) => {
  let { render: r2 } = a2, i2 = ex.use();
  return b(() => {
    i2.request(e10.op.operationId, {});
  }), t(i2.response$(e10.op.operationId), r2((e11) => d(ti, { database: e11.body })));
}, { displayName: "DatabaseErContainer", props: ["op"] }), ti = r((e10) => () => n(tl, { children: [d(ts, { children: e10.database.name }), Object.entries(e10.database.tables).map((t2) => {
  let [a2, r2] = t2;
  return d(tn, { database: e10.database, table: r2, tableName: a2 });
})] }), { displayName: "DatabaseErView", props: ["database"] }), tn = r((a2, r2) => {
  let { render: i2 } = r2, o2 = new e([]);
  return t(o2, i2((e10) => {
    let t2 = a2.table.columns, r3 = a2.table.constraints;
    return n(td, { open: true, children: [n(tp, { children: [d("span", { children: a2.tableName }), d(tg, {}), d(tf, { meta: a2.table })] }), Object.keys(t2).map((r4) => {
      let i3 = t2[r4];
      return n(tc, { "data-hover": e10.includes(r4), children: [d(tu, { children: r4 }), i3.of ? d(to, { database: a2.database, of: i3.of }) : d(ty, { children: i3.type }), d(tm, { children: d(tf, { meta: i3 }) })] });
    }), Object.entries(r3).map((e11) => {
      let [t3, a3] = e11;
      return d(tc, { onMouseover: () => {
        o2.next(a3.columnNames.map((e12) => e12.name));
      }, onMouseleave: () => {
        o2.next([]);
      }, children: n(tb, { "data-primary": a3.primary, "data-unique": a3.unique, children: [d(ea, { path: a3.unique ? es : ed }), d("span", { children: t3 }), n("span", { children: ["(", a3.columnNames.map((e12) => {
        var t4;
        return [e12.name, ...null !== (t4 = e12.options) && void 0 !== t4 ? t4 : []].join(" ");
      }).join(","), ")"] })] }) });
    }), d(Y, { sx: { py: 4 } })] });
  }));
}, { displayName: "DatabaseErTableView", props: ["database", "table", "tableName"] }), to = r((a2, r2) => {
  let { render: i2 } = r2, o2 = e.seed(false), l2 = t(o2, i2((e10) => {
    let t2 = a2.of.split(".")[0];
    return d(er, { isOpen: e10, onClose: () => {
      o2.next(false);
    }, children: d(tv, { children: d(tn, { database: a2.database, tableName: t2, table: a2.database.tables[t2] }) }) });
  }));
  return () => n(th, { onClick: () => {
    o2.next(true);
  }, children: [a2.of, l2] });
}, { displayName: "DatabaseErTableColumnOfView", props: ["of", "database"] }), tl = X("div", { displayName: "DatabaseErMain" })({ py: 18, px: 24, flex: 1, overflow: "auto" }), ts = X("div", { displayName: "DatabaseErHeader" })({ py: 8, px: 16, textStyle: "sys.label-large" }), td = X("details", { displayName: "DatabaseErTable" })({ "& + &": { mt: 16 }, rounded: "sm", border: "1px solid", borderColor: Z("sys.outline-variant", ee(0.38)), overflow: "hidden", width: "100%" }), tp = X("summary", { displayName: "DatabaseErTableSummary" })({ textStyle: "sys.label-large", py: 8, px: 16, display: "flex", color: "sys.primary" }), tc = X("div", { displayName: "DatabaseErTableDef" })({ px: 16, py: 4, display: "flex", _hover: { containerStyle: "sys.surface-container-low" } }), tu = X("div", { displayName: "DatabaseErTableColumnName" })({ display: "flex", width: "20vw", textStyle: "sys.label-small", font: "code" }), tm = X("div", { displayName: "DatabaseErTableColumnComment" })({ display: "flex", textStyle: "sys.label-small", width: "20vw", justifyContent: "end" }), th = X("div", { displayName: "DatabaseErTableColumnOf" })({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", color: "sys.primary", _hover: { cursor: "pointer" } }), ty = X("div", { displayName: "DatabaseErTableColumnType" })({ flex: 1, textStyle: "sys.label-small" }), tf = X("div", (e10, t2) => {
  let {} = t2;
  return (t3) => n(t3, { children: [e10.meta.title, " ", e10.meta.description ? d(en, { title: d(eT, { children: d(et, { text: e10.meta.description }) }), children: d(ea, { path: ei }) }) : null] });
}, { displayName: "DatabaseDescription", props: ["meta"] })({ position: "relative", display: "flex", alignItems: "center", gap: 4, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ea}`]: { width: 12, height: 12, overflow: "hidden" } }), tv = X("div", { displayName: "DialogContainer" })({ display: "flex", containerStyle: "sys.surface", width: "90vw", roundedLeft: "sm", px: 16, py: 36, top: 0, position: "absolute", overflow: "auto" }), tb = X("div", { displayName: "DatabaseErTableConstraintName" })({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", display: "flex", alignItems: "center", gap: "1em", _primary: { [`${ea}`]: { color: "sys.primary" } }, _unique: { [`${ea}`]: { position: "relative", "&::before": { content: JSON.stringify("1"), position: "absolute", right: -6, textStyle: "sys.label-small", fontSize: 8 } } } }), tg = X("div", { displayName: "Spacer" })({ flex: 1 }), tx = r({ operationId: x() }, (e10, a2) => {
  let {} = a2, r2 = ex.use(), i2 = t(e10.operationId$, T((e11) => r2.operation$(e11))), o2 = t(i2, A((e11) => !!e11)), l2 = t(o2, s((e11) => {
    var t2;
    return n(t_, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [d("div", { "data-operation-method": true, children: e11.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-path": true, children: e11.path }), n("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), p2 = t(o2, s((e11) => {
    var t2;
    return d(Y, { sx: { px: 24 }, children: d(et, { text: null !== (t2 = e11.description) && void 0 !== t2 ? t2 : "" }) });
  })), c2 = t(o2, s((e11) => {
    var t2;
    return d(e9, { operation: e11, children: d(m, { children: Object.entries(null !== (t2 = e11.responses) && void 0 !== t2 ? t2 : {}).map((e12) => {
      let [t3, a3] = e12;
      return d(eH, { code: t3, response: a3 }, t3);
    }) }) }, e11.operationId);
  }));
  return t(i2, s((e11) => e11 ? "SycDatabaseEr" == e11.operationId ? n(tw, { children: [l2, p2, d(t$, { children: d(tr, { op: e11 }) })] }, e11.operationId) : n(tw, { children: [l2, p2, d(t$, { children: d(Y, { sx: { flex: 1, overflow: "auto" }, children: c2 }) })] }, e11.operationId) : null));
}, { displayName: "OperationView" }), tw = X("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), t$ = X("div", { displayName: "OperationMain" })({ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }), t_ = X("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  ex as O,
  tx as a,
  e$ as b
};
