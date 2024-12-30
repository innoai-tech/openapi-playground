var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ef_instances, r_get, a_fn;
import { I as e, r as t, c as r, a, o as i, e as n, s as o, y as l, k as s, j as d, C as p, R as c, d as u, F as m, b as h, D as y, E as f, G as v, m as b } from "./lib-nodepkg-vuekit.B1Ouhw96.chunk.js";
import { S as g, s as x, b as $, e as w, f as _, g as S, h as I, j as N, o as P } from "./lib-nodepkg-typedef.C_TZ97E6.chunk.js";
import { c as k, a as O, p as C, t as j } from "./vendor-innoai-tech-fetcher.DBmb0ZVn.chunk.js";
import { B as D, s as T, b as q, m as L, E as F, o as B, S as R, t as E, k as W, O as M, l as A, c as H, n as J } from "./vendor-rxjs.BqYGlyAQ.chunk.js";
import { w as V, g as z, a as U, d as K, e as G } from "./vendor-innoai-tech-lodash.CzrXiiPp.chunk.js";
import { s as Q, B as X, v as Y, a as Z } from "./lib-nodepkg-vueuikit.pCu2XKSo.chunk.js";
import { M as ee } from "./lib-nodepkg-vuemarkdown.CsVTyWgh.chunk.js";
import { I as et, D as er, m as ea, T as ei, F as en, f as eo, g as el, h as es } from "./lib-nodepkg-vuematerial.Bhm2x3sE.chunk.js";
import { l as ed, h as ep, i as ec, F as eu } from "./lib-nodepkg-vueformdata.Bjm8_U1X.chunk.js";
import { J as em, a as eh, b as ey } from "./lib-nodepkg-jsoneditor.dWp66805.chunk.js";
const _ef = class _ef extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ef_instances);
    __privateAdd(this, _e, k({ paramsSerializer: C, transformRequestBody: j }));
    __privateAdd(this, _t, new D(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _ef({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return t(__privateGet(this, _t), T((t2) => {
      let r2 = t2.get(e10);
      return r2 ? L(r2, r2.error$) : F;
    }));
  }
  requesting$(e10) {
    return t(__privateGet(this, _t), T((t2) => {
      var r2, a2;
      return null !== (a2 = null === (r2 = t2.get(e10)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== a2 ? a2 : B(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var t2, r2;
    let a2 = __privateMethod(this, _ef_instances, a_fn).call(this, e10);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e11) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _ef_instances, r_get) + eb(a2.path, e11), params: V(e11, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...V(e11, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t2) {
    let r2 = __privateGet(this, _t).value.get(e10);
    if (!r2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3) return;
      r2 = O(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return t(this, T((t2) => {
      for (let r2 of ev(t2, { operationId: e10 })) if (r2) return B(r2);
      return B(null);
    }));
  }
  operations$(e10) {
    return t(this, T((t2) => B([...ev(t2, e10)])));
  }
  schema$(e10) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e10.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, T((e11) => {
      if (i2) {
        var t2;
        return B(null !== (t2 = z(e11, i2)) && void 0 !== t2 ? t2 : null);
      }
      return B(null);
    }), q((e11) => e11 ? { ...e11, $id: i2[i2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = z(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_ef_instances = new WeakSet();
r_get = function() {
  var e10, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e10 = t2[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== r2 ? r2 : "";
};
a_fn = function(e10) {
  for (let t2 of ev(this.value, { operationId: e10 })) if (t2) return t2;
  return null;
};
let ef = _ef;
function* ev(e10, t2) {
  for (let [n2, o2] of Object.entries(e10.paths)) for (let [e11, l2] of Object.entries(o2)) {
    var r2, a2, i2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (a2 = l2.tags) && void 0 !== a2 ? a2 : []).includes(t2.tag))) {
      if (t2.operationId) {
        if (t2.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e11, path: n2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let eb = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, eg = r(() => ef.empty(), { name: "OpenAPI" }), ex = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, e$ = a((r2, a2) => {
  let {} = r2, {} = a2, u2 = eg.use(), m2 = new e({ operationId: void 0 }), h2 = new R();
  t(h2, W(200), E((e10) => {
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
        let r3 = new MutationObserver((e11) => {
          for (let r4 of e11) if ("attributes" === r4.type) {
            let e12 = r4.target;
            e12.classList.contains("router-link-active") && t2(e12);
          }
        });
        return r3.observe(e10, { attributes: true, subtree: true }), setTimeout(() => {
          t2(e10.querySelector(".router-link-active"));
        }, 100), () => {
          r3.disconnect();
        };
      });
    }
    return F;
  }), l());
  let f2 = t(m2, T((e10) => u2.operations$(e10)), s((e10) => {
    let t2 = Object.groupBy(e10, (e11) => e11.group);
    return n(e_, { children: [d(eS, { children: d("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e11) => {
      h2.next(e11.target.value);
    } }) }), d(eI, { sx: { flex: 1, overflow: "scroll" }, ref: y2, children: Object.entries(t2).toSorted().map((e11) => {
      let [t3, r3] = e11;
      return n("div", { "data-nav-group": true, children: [d("div", { "data-nav-group-heading": true, children: t3 }), d("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(ex("operationId")).map((e12) => {
        var t4;
        return n(eP, { component: p, to: `/operations/${e12.operationId}`, children: [d(X, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e12.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e12.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-id": true, children: e12.operationId }), e12.summary ? d("div", { "data-operation-summary": true, children: e12.summary != e12.operationId ? e12.summary : d("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => n(ew, { children: [f2, d(eN, { children: d(c, {}) })] });
}, { displayName: "OpenAPIView" }), ew = Q("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), e_ = Q("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eS = Q("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eI = Q("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eN = Q("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), eP = Q("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), ek = Q("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eO = Q("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eC = Q("div", (e10, t2) => {
  let { slots: r2 } = t2, a2 = eq.use();
  return (t3) => {
    var i2, n2;
    return d(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e10.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), ej = Q("div", (e10, t2) => {
  let {} = t2;
  return (t3) => {
    var r2, a2;
    let i2 = null !== (r2 = g.metaProp(e10.schema, "title")) && void 0 !== r2 ? r2 : "", o2 = null !== (a2 = g.metaProp(e10.schema, "description")) && void 0 !== a2 ? a2 : "";
    return n(t3, { children: [i2, " ", o2 ? d(ei, { title: d(eD, { children: d(ee, { text: o2 }) }), children: d(et, { path: ea }) }) : null] });
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${et}`]: { width: 12, height: 12, overflow: "hidden" } }), eD = Q("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eT = (e10) => {
  let { name: t2, value: r2, extra: a2 } = e10;
  return "" == r2 ? null : d(eC, { children: n(ek, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(ek, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, Object.entries(null != a2 ? a2 : {}).map((e11) => {
    let [t3, r3] = e11;
    return n(m, { children: [n(ek, { sx: { opacity: 0.5 }, children: [",", " "] }), d(ek, { sx: { opacity: 0.5 }, children: t3 }), n(ek, { sx: { opacity: 0.5 }, children: [":", " "] }), d(ek, { sx: { opacity: 0.7 }, children: r3 })] });
  }), d(ek, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eq = r(() => ({ indent: 0 }), { name: "IntentContext" }), eL = u((e10, t2) => {
  let {} = e10, { slots: r2 } = t2, a2 = eq.use();
  return () => {
    var e11;
    return d(eq, { value: { indent: a2.indent + 1 }, children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) });
  };
}, { displayName: "Indent" });
class eF {
  constructor(e10, t2) {
    this.id = e10, this.parent = t2;
  }
  child(e10) {
    return new eF(e10, this);
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
let eB = r(() => new eF("")), eR = a((e10) => {
  let t2 = eB.use(), r2 = eq.use(), a2 = i(false);
  return () => {
    let i2 = e10.schema, o2 = g.schemaProp(e10.schema, "$ref"), l2 = "intersection" == (i2 = g.schemaProp(e10.schema, g.unwrap)()).type || "object" == i2.type || "union" == i2.type || "record" == i2.type || "array" == i2.type || "union" == i2.type, s2 = t2.safe(o2) && n(m, { children: [d("span", { children: " " }), d(eW, { schema: i2 })] });
    return d(eB, { value: t2.child(o2), children: l2 ? r2.indent < 3 ? n(m, { children: [d(p, { to: `#${o2}`, children: d(ek, { id: o2, children: o2 }) }), r2.indent < 3 && s2] }) : n(m, { children: [d("a", { href: `#${o2}`, onClick: (e11) => {
      e11.preventDefault(), a2.next(true);
    }, children: d(ek, { id: o2, children: o2 }) }), t2.safe(o2) && d(er, { isOpen: a2.value, onClose: () => {
      a2.next(false);
    }, children: d(eE, { children: n(eC, { children: [d(ek, { children: o2 }), d(eq, { value: { indent: 0 }, children: s2 })] }) }) })] }) : s2 });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eE = Q("div", { displayName: "DialogContainer" })({ display: "flex", containerStyle: "sys.surface", height: "100vh", width: "36vw", roundedLeft: "sm", px: 16, py: 36, top: 0, right: 0, position: "absolute", overflow: "auto" }), eW = a((e10) => {
  let t2 = e10.schema;
  return g.schemaProp(t2, "$ref") ? d(eR, { schema: t2 }) : () => {
    var e11, r2, a2, i2, o2, l2, s2, p2;
    switch (t2.type) {
      case "union":
        return d(m, { children: null === (e11 = g.schemaProp(t2, "oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t3) => n(m, { children: [t3 > 0 && n(ek, { children: [" ", " | ", " "] }), d(eW, { schema: e12 })] })) });
      case "intersection":
        return d(ek, { children: null === (r2 = g.schemaProp(t2, "allOf")) || void 0 === r2 ? void 0 : r2.filter((e12) => !Object.keys(e12).length).map((e12, t3) => n(m, { children: [t3 > 0 && n(ek, { children: [" ", "&", " "] }), d(eW, { schema: e12 })] })) });
      case "array":
        return n(ek, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(ek, { children: "Array<" }), d(eW, { schema: null !== (a2 = g.schemaProp(t2, "items")) && void 0 !== a2 ? a2 : $() }), d(ek, { children: ">" })] });
      case "object":
        return n(m, { children: [d(ek, { children: "{" }), d(eL, { children: d(m, { children: Object.entries(null !== (i2 = g.schemaProp(t2, "properties")) && void 0 !== i2 ? i2 : {}).map((e12) => {
          var r3;
          let [a3, i3] = e12;
          return i3 ? d(m, { children: n(eC, { spacing: 2, children: [d(ej, { schema: i3 }), n(ek, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(eO, { nullable: g.schemaProp(t2, "nullable"), deprecated: g.schemaProp(t2, "deprecated"), optional: !(null !== (r3 = g.schemaProp(t2, "required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), d(ek, { sx: { mr: "1em" }, children: ":" }), d(eW, { schema: i3 })] })] }) }) : null;
        }) }) }), d(ek, { children: "}" })] });
      case "record":
        return n(m, { children: [d(ek, { children: "{" }), g.schemaProp(t2, "additionalProperties") && d(m, { children: d(eL, { children: n(eC, { children: [n(ek, { sx: { mr: 1 }, children: ["[K:", " "] }), d(eW, { schema: null !== (o2 = g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : x() }), n(ek, { sx: { mr: 1 }, children: ["]:", " "] }), d(eW, { schema: null !== (l2 = g.schemaProp(t2, "additionalProperties")) && void 0 !== l2 ? l2 : $() })] }) }) }), d(ek, { children: "}" })] });
      case "enums": {
        let e12 = null !== (s2 = g.schemaProp(t2, "enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e12.length) return d(ek, { children: JSON.stringify(e12[0]) });
        let r3 = "any";
        return e12.length > 0 && (r3 = typeof e12[0]), n(m, { children: [d(ek, { sx: { fontWeight: "bold" }, children: r3 }), d(eL, { children: e12.map((e13, r4) => {
          var a3;
          return d(eT, { name: "enum", value: `${e13}`, extra: (null === (a3 = g.metaProp(t2, "enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: JSON.stringify(g.metaProp(t2, "enumLabels")[r4]) } : {} }, e13);
        }) })] });
      }
    }
    let [c2, u2, h2] = [t2.type, g.schemaProp(t2, "format"), g.schemaProp(t2, "default")];
    return n(m, { children: [d(ek, { sx: { fontWeight: "bold" }, children: c2 || "any" }), n(eL, { children: [u2 && d(eT, { name: "format", value: u2 }), !U(h2) && d(eT, { name: "default", value: h2 }), !eM(t2) && d(eT, { name: "validate", value: eM(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eM(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e10, t2));
}
let eA = a({ code: w(), response: w() }, (e10) => {
  let t2 = eg.use();
  return () => {
    var r2, a2;
    return n(eH, { children: [d(eJ, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), n(X, { sx: { pl: "4em" }, children: [d(m, { children: null === (r2 = e10.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return U(r3) || U(a3) ? e13 : { ...e13, [r3]: a3 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? d(X, { sx: { mb: 16 }, children: n(eC, { spacing: 0, children: [n(ek, { children: ["{", " "] }), d(eL, { children: Object.entries(e11).map((e12) => {
      let [t3, r3] = e12;
      return "code" === t3 ? null : n(eC, { children: [d(eO, { children: t3 }), d(ek, { children: ": " }), d(ek, { children: r3 })] });
    }) }), n(ek, { children: [" ", "}"] })] }) }) : null) }), d(m, { children: Object.entries(null !== (a2 = e10.response.content) && void 0 !== a2 ? a2 : {}).map((e11) => {
      let [r3, { schema: a3 }] = e11;
      return n(eV, { children: [d(eC, { spacing: 0, children: d(eW, { schema: _.decode(a3, (e12) => {
        var r4;
        return [null !== (r4 = t2.schema(e12)) && void 0 !== r4 ? r4 : {}, S(e12)];
      }) }) }), d("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), eH = Q("section", { displayName: "ResponseSection" })({}), eJ = Q("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eV = Q("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), ez = Q("div", (e10, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, i2, o2, l2;
    let s2 = e10.valued, p2 = e10.invalid, c2 = e10.disabled, u2 = (null !== (l2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== l2 ? l2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t4, r3, a3, i3, n2, o3;
        return s2 = !!(null !== (n2 = null !== (i3 = null === (t4 = e11.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i3 ? i3 : null === (r3 = e11.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n2 ? n2 : s2), c2 = null !== (o3 = null === (a3 = e11.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, h(e11, { disabled: c2 });
      }
      return h(e11);
    });
    return n(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [n("div", { "data-input-container": true, children: [n("div", { "data-input-decorator-container": true, children: [d("div", { "data-input-decorator-leading": true }), d("div", { "data-input-decorator-label": true, children: d("div", { "data-input-label": true, children: null === (i2 = r2.label) || void 0 === i2 ? void 0 : i2.call(r2) }) }), d("div", { "data-input-decorator-trailing": true })] }), n("div", { "data-input-row": true, children: [r2.leading && d(eU, { role: "leading", children: r2.leading() }), u2, r2.trailing && d(eU, { role: "trailing", children: r2.trailing() })] })] }), r2.supporting && d("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eU = Q("div", { role: I(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eK = a((e10, r2) => {
  let {} = r2, a2 = em.of(e10.field$.typedef, U(e10.field$.input) ? void 0 : e10.field$.input);
  return t(a2, A(1), E((t2) => {
    e10.field$.update(t2);
  }), o()), () => d(eG, { children: d(eh, { value: a2, children: d(ey, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eG = Q("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eQ = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eX = (e10) => {
  let { field: t2, value: r2 } = e10;
  return n(X, { component: "span", sx: { display: "block" }, children: [n(X, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), d("span", { children: r2 })] });
}, eY = (e10) => {
  let { method: t2, url: r2, params: a2 } = e10, i2 = C(a2);
  return n(X, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, n(X, { component: "span", sx: { fontWeight: "medium" }, children: [r2, i2 ? `?${i2}` : ""] }), " HTTP/*"] });
}, eZ = (e10, t2) => {
  let r2 = (t3, a2) => a2 instanceof File || a2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${a2.name ? `; filename="${a2.name}"` : ""}
Content-Type: ${a2.type}

[File Content]
` : K(a2) ? a2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${G(a2) ? JSON.stringify(a2) : String(a2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, a2] = e11;
    return r2(t3, a2);
  }).join("\n") + `${e10}--`;
}, e0 = u({ $default: w().optional() }, (e10, t2) => {
  let {} = e10, { slots: r2 } = t2;
  return () => {
    var e11;
    return d(X, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: d(X, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: d("code", { children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), e1 = u({ request: w() }, (e10) => () => {
  let t2 = e10.request;
  return n(e0, { children: [d(eY, { ...t2 }), d(m, { children: Object.entries({ ...eQ(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, r2] = e11;
    return d(eX, { field: t3, value: r2 }, t3);
  }) }), t2.body && n(m, { children: [d("br", {}), function(e11) {
    if (e6(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, eZ(t3, e11.body);
    }
    return e6(e11.headers).includes("application/x-www-form-urlencoded") ? C(e11.body) : e8(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), e2 = (e10, t2) => {
  let r2 = new Uint8Array(e10), a2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++) a2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, e4 = u({ response: w() }, (e10, t2) => {
  let {} = t2;
  return () => {
    let t3 = e10.response;
    return e6(t3.headers).includes("image/") ? d("div", { children: d("img", { src: e2(t3.body, e6(t3.headers)), alt: "" }) }) : n(e0, { children: [n("span", { children: ["HTTP/* ", t3.status] }), d("br", {}), t3.headers && d(m, { children: Object.entries(t3.headers).map((e11) => {
      let [t4, r2] = e11;
      return d(eX, { field: t4, value: r2 }, t4);
    }) }), d("br", {}), t3.body ? e8(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function e6() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let e8 = (e10) => e6(e10).includes("application/json"), e3 = a({ operationID: x() }, (e10) => t(eg.use().response$(e10.operationID), s((e11) => d(e5, { children: d(e4, { response: e11 }) }))), { displayName: "ResponsePreview" }), e5 = Q("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), e7 = a((e10, r2) => {
  var a2, i2, l2, p2;
  let { slots: c2 } = r2, u2 = eg.use(), m2 = {};
  for (let t2 of null !== (a2 = e10.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e11 = _.decode(t2.schema, (e12) => {
      var t3;
      return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, S(e12)];
    }).use(ed(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e11 = e11.optional()), e11.use(ep(t2.schema.title)), ["object", "array"].includes(null !== (i2 = t2.schema.type) && void 0 !== i2 ? i2 : "") ? m2[t2.name] = e11.use(ec(eK)) : m2[t2.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t2 = Object.entries(null !== (l2 = e10.operation.requestBody.content) && void 0 !== l2 ? l2 : {})[0];
    if (t2) {
      let [e11, r3] = t2, a3 = _.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e12) => {
        var t3;
        return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, S(e12)];
      }).use(ed(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? m2.body = a3.use(ec(eK)) : e11.includes("octet-stream") ? m2.body = a3.use(ec(tt)) : m2.body = a3;
    }
  }
  let h2 = f(), y2 = v(), b2 = eu.of(P(m2), (() => {
    try {
      var e11;
      let t2 = y2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  t(b2, E((t2) => {
    u2.request(e10.operation.operationId, t2);
  }), E((e11) => {
    h2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), o());
  let g2 = t(b2.inputs$, s((t2) => {
    let r3 = u2.asRequestConfigCreator(e10.operation.operationId);
    return r3 ? d(e1, { request: r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return n(X, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), b2.submit();
    }, children: [d(X, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: [...b2.fields(b2.typedef)].map((e11) => d(e9, { field$: e11 })) }), d(X, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: n(X, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [g2, d(X, { sx: { px: 8 }, children: d(en, { type: "submit", children: "发起请求" }) }), d(e3, { operationID: e10.operation.operationId }), d(X, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e10.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), e9 = a((e10, r2) => {
  let { field$: a2 } = e10, { render: i2 } = r2;
  return y(() => {
    a2.destroy();
  }), t(H([a2, a2.input$]), i2((e11) => {
    var t2, r3, i3;
    let [o2, l2] = e11, s2 = null !== (t2 = g.metaProp(a2.typedef, "inputBy")) && void 0 !== t2 ? t2 : te, p2 = null !== (r3 = g.metaProp(a2.typedef, "readOnlyWhenInitialExist")) && void 0 !== r3 && r3 && !!o2.initial;
    return d(ez, { valued: !U(null != l2 ? l2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: n("span", { children: [null !== (i3 = a2.meta.label) && void 0 !== i3 ? i3 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: n(eC, { children: [d(ej, { schema: a2.typedef }), d(eW, { schema: a2.typedef })] }), $trailing: s2.$trailing, children: d(s2, { field$: a2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), te = u({ readOnly: N().optional(), field$: w() }, (e10) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e10;
  return d("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e11) => {
    let t3 = e11.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(r2.typedef.create(parseFloat(t3)));
        } catch (e12) {
        }
        break;
      case "integer":
        try {
          r2.update(r2.typedef.create(parseInt(t3)));
        } catch (e12) {
        }
        break;
      case "boolean":
        try {
          r2.update(r2.typedef.create("false" !== t3 || !!t3));
        } catch (e12) {
        }
        break;
      default:
        r2.update(r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), tt = a((e10) => {
  let r2 = i(null);
  return t(r2, E((t2) => {
    t2 && e10.field$.update(t2);
  }), l()), () => {
    var t2;
    let { readOnly: a2, accept: i2 } = e10;
    return n(X, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [d("input", { type: "file", name: e10.field$.name, readonly: a2, accept: i2, "data-file-input": true, onChange: (e11) => {
      var t3;
      let a3 = null === (t3 = e11.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), d(et, { path: eo }), d("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), tr = a((e10, r2) => {
  let { render: a2 } = r2, i2 = eg.use();
  return b(() => {
    i2.request(e10.op.operationId, {});
  }), t(i2.response$(e10.op.operationId), a2((e11) => d(ta, { database: e11.body })));
}, { displayName: "DatabaseErContainer", props: ["op"] }), ta = u((e10) => () => n(ti, { children: [d(tn, { children: e10.database.name }), Object.keys(e10.database.tables).toSorted().map((t2) => {
  var r2;
  let a2 = null !== (r2 = e10.database.tables[t2]) && void 0 !== r2 ? r2 : { columns: {}, constraints: {} }, i2 = a2.columns, o2 = a2.constraints;
  return n(to, { open: true, children: [n(tl, { children: [d("span", { children: t2 }), d(th, {}), d("span", { children: a2.title })] }), Object.keys(i2).toSorted().map((e11) => {
    let t3 = i2[e11];
    return n(ts, { children: [d(td, { children: e11 }), t3.of ? d(tc, { children: t3.of }) : d(tu, { children: t3.type }), d(tp, { children: t3.title })] });
  }), Object.entries(o2).toSorted((e11, t3) => {
    let [r3, a3] = e11, [i3, n2] = t3;
    return n2.primary && !a3.primary ? 1 : !n2.primary && a3.primary ? -1 : n2.unique && !a3.unique ? 1 : !n2.unique && a3.unique ? -1 : r3.localeCompare(i3);
  }).map((e11) => {
    let [t3, r3] = e11;
    return d(ts, { children: n(tm, { "data-primary": r3.primary, children: [d(et, { path: r3.unique ? el : es }), d("span", { children: t3 }), n("span", { children: ["(", r3.columnNames.join(","), ")"] })] }) });
  })] });
})] }), { displayName: "DatabaseErView", props: ["database"] }), ti = Q("div", { displayName: "DatabaseErMain" })({ py: 18, px: 24, flex: 1, overflow: "auto" }), tn = Q("div", { displayName: "DatabaseErHeader" })({ py: 8, px: 16, textStyle: "sys.label-large" }), to = Q("details", { displayName: "DatabaseErTable" })({ "& + &": { mt: 16 }, rounded: "sm", border: "1px solid", borderColor: Y("sys.outline-variant", Z(0.38)), overflow: "hidden" }), tl = Q("summary", { displayName: "DatabaseErTableSummary" })({ textStyle: "sys.label-large", py: 8, px: 16, display: "flex", color: "sys.primary" }), ts = Q("div", { displayName: "DatabaseErTableDef" })({ px: 16, py: 4, display: "flex", "&:hover": { containerStyle: "sys.surface-container-low" } }), td = Q("div", { displayName: "DatabaseErTableColumnName" })({ display: "flex", width: "20vw", textStyle: "sys.label-small", font: "code" }), tp = Q("div", { displayName: "DatabaseErTableColumnComment" })({ display: "flex", textStyle: "sys.label-small", width: "20vw", justifyContent: "end" }), tc = Q("div", { displayName: "DatabaseErTableColumnOf" })({ flex: 1, textStyle: "sys.label-small", font: "code", color: "sys.primary" }), tu = Q("div", { displayName: "DatabaseErTableColumnType" })({ flex: 1, textStyle: "sys.label-small" }), tm = Q("div", { displayName: "DatabaseErTableConstraintName" })({ flex: 1, textStyle: "sys.label-small", font: "code", display: "flex", alignItems: "center", gap: "1em", _primary: { [`${et}`]: { color: "sys.primary" } } }), th = Q("div", { displayName: "Spacer" })({ flex: 1 }), ty = a({ operationId: x() }, (e10, r2) => {
  let {} = r2, a2 = eg.use(), i2 = t(e10.operationId$, T((e11) => a2.operation$(e11))), o2 = t(i2, J((e11) => !!e11)), l2 = t(o2, s((e11) => {
    var t2;
    return n(tb, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [d("div", { "data-operation-method": true, children: e11.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-path": true, children: e11.path }), n("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), p2 = t(o2, s((e11) => {
    var t2;
    return d(X, { sx: { px: 24 }, children: d(ee, { text: null !== (t2 = e11.description) && void 0 !== t2 ? t2 : "" }) });
  })), c2 = t(o2, s((e11) => {
    var t2;
    return d(e7, { operation: e11, children: d(m, { children: Object.entries(null !== (t2 = e11.responses) && void 0 !== t2 ? t2 : {}).map((e12) => {
      let [t3, r3] = e12;
      return d(eA, { code: t3, response: r3 }, t3);
    }) }) }, e11.operationId);
  }));
  return t(i2, s((e11) => e11 ? "SycDatabaseEr" == e11.operationId ? n(tf, { children: [l2, p2, d(tv, { children: d(tr, { op: e11 }) })] }, e11.operationId) : n(tf, { children: [l2, p2, d(tv, { children: d(X, { sx: { flex: 1, overflow: "auto" }, children: c2 }) })] }, e11.operationId) : null));
}, { displayName: "OperationView" }), tf = Q("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tv = Q("div", { displayName: "OperationMain" })({ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }), tb = Q("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  eg as O,
  ty as a,
  e$ as b
};
