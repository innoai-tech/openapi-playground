var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _e, _t, _t$_instances, r_get, i_fn, _n, _a, _o, _r0_instances, l_fn;
import { I as e, r as t, h as r, b as i, a as n, s as a, d as o, j as l, A as s, R as d, e as u, F as c, g as p, B as h, C as f, f as m, n as g, D as y, p as v, w as b, E as x, u as O, G as S, H as $, J as w, K as k, L as _, o as P, m as R, M as C, N as T, O as X, P as Q, S as j, q as I, Q as N, U as V, V as q, W, v as z } from "./lib-nodepkg-vuekit.BhEjgaEZ.chunk.js";
import { b as A, n as B, c as L, s as Y, d as D, J as Z, f as F, e as H, o as U } from "./lib-nodepkg-typedef.E6pln5b6.chunk.js";
import { c as E, a as M, p as J, t as G } from "./vendor-innoai-tech-fetcher.Bc_3SD3v.chunk.js";
import { B as K, s as ee, m as et, e as er, E as ei, o as en, S as ea, t as eo, g as el, h as es, j as ed } from "./vendor-rxjs.UW_doh-B.chunk.js";
import { A as eu, g as ec, a as ep, p as eh, w as ef, r as em, n as eg, l as ey, b as ev, t as eb, h as ex, u as eO, i as eS, m as e$, k as ew, y as ek, o as e_, v as eP, x as eR, s as eC, d as eT } from "./vendor-innoai-tech-lodash.BKx2BmKI.chunk.js";
import { s as eX, B as eQ, b as ej, c as eI, e as eN, f as eV, g as eq, h as eW, i as ez, r as eA, j as eB, k as eL } from "./lib-nodepkg-vueuikit.L9PpP1Is.chunk.js";
import { M as eY } from "./lib-nodepkg-vuemarkdown.CcP2copX.chunk.js";
import { l as eD, i as eZ, F as eF } from "./lib-nodepkg-vueformdata.CbKWnzFx.chunk.js";
import { F as eH, m as eU, I as eE } from "./lib-nodepkg-vuematerial._AZlsOZw.chunk.js";
import { E as eM, c as eJ, l as eG, k as eK, d as e0, e as e1, f as e4, g as e2, h as e3, i as e5, j as e8, m as e9, n as e6, o as e7, p as te, q as tt, r as tr, u as ti, v as tn, s as ta, t as to, L as tl, w as ts, x as td, y as tu, z as tc, A as tp, B as th, C as tf, F as tm, G as tg, H as ty, J as tv, K as tb, M as tx } from "./lib-nodepkg-codemirror.D6AdZl-l.chunk.js";
import { L as tO } from "./vendor-lezer-lr.Cy1aIa5F.chunk.js";
import { J as tS } from "./lib-nodepkg-jsoncue._Ab8R8Z8.chunk.js";
const _t$ = class _t$ extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _t$_instances);
    __privateAdd(this, _e, E({ paramsSerializer: J, transformRequestBody: G }));
    __privateAdd(this, _t, new K(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _t$({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return t(__privateGet(this, _t), ee((t10) => {
      let r10 = t10.get(e10);
      return r10 ? er(r10, r10.error$) : ei;
    }));
  }
  requesting$(e10) {
    return t(__privateGet(this, _t), ee((t10) => {
      var r10, i2;
      return null !== (i2 = null === (r10 = t10.get(e10)) || void 0 === r10 ? void 0 : r10.requesting$) && void 0 !== i2 ? i2 : en(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var t10, r10;
    let i2 = __privateMethod(this, _t$_instances, i_fn).call(this, e10);
    if (!i2) return null;
    let n2 = Object.keys(null !== (r10 = null === (t10 = i2.requestBody) || void 0 === t10 ? void 0 : t10.content) && void 0 !== r10 ? r10 : {})[0];
    return (e11) => {
      var t11, r11;
      return { method: i2.method, url: __privateGet(this, _t$_instances, r_get) + tk(i2.path, e11), params: eu(e11, null === (t11 = i2.parameters) || void 0 === t11 ? void 0 : t11.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...eu(e11, null === (r11 = i2.parameters) || void 0 === r11 ? void 0 : r11.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...n2 ? { "Content-Type": n2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t10) {
    let r10 = __privateGet(this, _t).value.get(e10);
    if (!r10) {
      let t11 = this.asRequestConfigCreator(e10);
      if (!t11) return;
      r10 = M(Object.assign(t11, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r10), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r10.next(t10);
  }
  operation$(e10) {
    return t(this, ee((t10) => {
      for (let r10 of tw(t10, { operationId: e10 })) if (r10) return en(r10);
      return en(null);
    }));
  }
  operations$(e10) {
    return t(this, ee((t10) => en([...tw(t10, e10)])));
  }
  schema$(e10) {
    var r10, i2;
    let n2 = null !== (i2 = null === (r10 = e10.split("#/")[1]) || void 0 === r10 ? void 0 : r10.split("/")) && void 0 !== i2 ? i2 : [];
    return t(this, ee((e11) => {
      if (n2) {
        var t10;
        return en(null !== (t10 = ec(e11, n2)) && void 0 !== t10 ? t10 : null);
      }
      return en(null);
    }), et((e11) => e11 ? { ...e11, $id: n2[n2.length - 1] } : e11));
  }
  schema(e10) {
    var t10, r10, i2;
    let n2 = null !== (r10 = null === (t10 = e10.split("#/")[1]) || void 0 === t10 ? void 0 : t10.split("/")) && void 0 !== r10 ? r10 : [];
    if (n2) return null !== (i2 = ec(this.value, n2)) && void 0 !== i2 ? i2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_t$_instances = new WeakSet();
r_get = function() {
  var e10, t10, r10;
  return null !== (r10 = null === (t10 = this.value.servers) || void 0 === t10 ? void 0 : null === (e10 = t10[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== r10 ? r10 : "";
};
i_fn = function(e10) {
  for (let t10 of tw(this.value, { operationId: e10 })) if (t10) return t10;
  return null;
};
let t$ = _t$;
function* tw(e10, t10) {
  for (let [a2, o2] of Object.entries(e10.paths)) for (let [e11, l2] of Object.entries(o2)) {
    var r10, i2, n2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t10.tag || (null !== (i2 = l2.tags) && void 0 !== i2 ? i2 : []).includes(t10.tag))) {
      if (t10.operationId) {
        if (t10.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(t10.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t10.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e11, path: a2, group: null !== (n2 = null === (r10 = l2.tags) || void 0 === r10 ? void 0 : r10[0]) && void 0 !== n2 ? n2 : "" };
    }
  }
}
let tk = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r10) => [].concat(t10[r10] || e11).join(","));
}, t_ = r(() => t$.empty(), { name: "OpenAPI" }), tP = (e10) => (t10, r10) => t10[e10] == r10[e10] ? 0 : t10[e10] < r10[e10] ? -1 : 1, tR = i((r10, i2) => {
  let {} = r10, {} = i2, u2 = t_.use(), c2 = new e({ operationId: void 0 }), p2 = new ea();
  t(p2, el(200), eo((e10) => {
    c2.next((t10) => {
      t10.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), a());
  let h2 = t(c2, ee((e10) => u2.operations$(e10)), o((e10) => {
    let t10 = Object.groupBy(e10, (e11) => e11.group);
    return n(tT, { children: [l(tX, { children: l("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e11) => {
      p2.next(e11.target.value);
    } }) }), l(tQ, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(t10).toSorted().map((e11) => {
      let [t11, r11] = e11;
      return n("div", { "data-nav-group": true, children: [l("div", { "data-nav-group-heading": true, children: t11 }), l("div", { "data-nav-group-contents": true, children: null == r11 ? void 0 : r11.toSorted(tP("operationId")).map((e12) => {
        var t12;
        return n(tI, { component: s, to: `/operations/${e12.operationId}`, children: [l(eQ, { "data-operation-method": true, sx: { color: null !== (t12 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e12.method]) && void 0 !== t12 ? t12 : "sys.secondary" }, children: e12.method }), n("div", { "data-operation-desc": true, children: [l("div", { "data-operation-id": true, children: e12.operationId }), e12.summary ? l("div", { "data-operation-summary": true, children: e12.summary != e12.operationId ? e12.summary : l("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => n(tC, { children: [h2, l(tj, { children: l(d, {}) })] });
}, { displayName: "OpenAPIView" }), tC = eX("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), tT = eX("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), tX = eX("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), tQ = eX("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), tj = eX("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), tI = eX("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), tN = eX("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), tV = eX("div", { deprecated: A().optional(), optional: A().optional(), nullable: A().optional() }, { displayName: "PropName" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), tq = eX("div", { spacing: B().optional().default(0), $default: L().optional() }, (e10, t10) => {
  let { slots: r10 } = t10, i2 = tA.use();
  return (t11) => {
    var n2;
    return l(t11, { style: { paddingLeft: `${i2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (n2 = r10.default) || void 0 === n2 ? void 0 : n2.call(r10) });
  };
}, { displayName: "Line" })({ position: "relative", display: "block" }), tW = eX("div", { schema: L() }, (e10, t10) => {
  let {} = t10;
  return (t11) => {
    var r10;
    let i2 = null !== (r10 = e10.schema.getMeta("description")) && void 0 !== r10 ? r10 : "";
    return 0 == i2.length ? null : l(t11, { children: l(eY, { text: i2 }) });
  };
}, { displayName: "Description" })({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), tz = (e10) => {
  let { name: t10, value: r10, extra: i2 } = e10;
  return "" == r10 ? null : l(tq, { children: n(tN, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [l(tN, { sx: { color: "sys.primary" }, children: `@${t10}(` }), `${r10}`, Object.entries(null != i2 ? i2 : {}).map((e11) => {
    let [t11, r11] = e11;
    return n(c, { children: [n(tN, { sx: { opacity: 0.5 }, children: [",", " "] }), l(tN, { sx: { opacity: 0.5 }, children: t11 }), n(tN, { sx: { opacity: 0.5 }, children: [":", " "] }), l(tN, { sx: { opacity: 0.7 }, children: r11 })] });
  }), l(tN, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, tA = r(() => ({ indent: 0 }), { name: "IntentContext" }), tB = u({ $default: L().optional() }, (e10, t10) => {
  let {} = e10, { slots: r10 } = t10, i2 = tA.use();
  return () => {
    var e11;
    return l(tA, { value: { indent: i2.indent + 1 }, children: null === (e11 = r10.default) || void 0 === e11 ? void 0 : e11.call(r10) });
  };
}, { displayName: "Indent" });
class tL {
  constructor(e10, t10) {
    this.id = e10, this.parent = t10;
  }
  child(e10) {
    return new tL(e10, this);
  }
  safe(e10) {
    let t10 = this;
    for (; t10; ) {
      if (t10.id == e10) return false;
      t10 = t10.parent;
    }
    return true;
  }
}
let tY = r(() => new tL("")), tD = i({ schema: L() }, (e10) => {
  let t10 = tY.use();
  return () => {
    let r10 = e10.schema.getSchema("$ref"), i2 = e10.schema;
    for (; i2.getSchema("$ref"); ) i2 = i2.unwrap;
    let a2 = "intersection" == i2.type || "object" == i2.type || "union" == i2.type || "record" == i2.type || "array" == i2.type || "union" == i2.type;
    return n(tY, { value: t10.child(r10), children: [a2 && l(s, { to: `#${r10}`, children: n(tN, { id: r10, children: [r10, " "] }) }), t10.safe(r10) && l(tZ, { schema: i2 })] });
  };
}, { displayName: "SchemaViewLink" }), tZ = i({ schema: L() }, (e10) => {
  let t10 = e10.schema;
  return t10.getSchema("$ref") ? l(tD, { schema: t10 }) : () => {
    var e11, r10, i2, a2, o2, s2, d2, u2;
    switch (t10.type) {
      case "union":
        return l(c, { children: null === (e11 = t10.getSchema("oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t11) => n(c, { children: [t11 > 0 && n(tN, { children: [" ", " | ", " "] }), l(tZ, { schema: e12 })] })) });
      case "intersection":
        return l(tN, { children: null === (r10 = t10.getSchema("allOf")) || void 0 === r10 ? void 0 : r10.filter((e12) => !Object.keys(e12).length).map((e12, t11) => n(c, { children: [t11 > 0 && l(tN, { children: "&" }), l(tZ, { schema: e12 })] })) });
      case "array":
        return n(tN, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [l(tN, { children: "Array<" }), l(tZ, { schema: null !== (i2 = t10.getSchema("items")) && void 0 !== i2 ? i2 : D() }), l(tN, { children: ">" })] });
      case "object":
        return n(c, { children: [l(tN, { children: "{" }), l(tB, { children: l(c, { children: Object.entries(null !== (a2 = t10.getSchema("properties")) && void 0 !== a2 ? a2 : {}).map((e12) => {
          var r11;
          let [i3, a3] = e12;
          return a3 ? l(c, { children: n(tq, { spacing: 2, children: [l(tW, { schema: a3 }), n(tN, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [l(tV, { nullable: a3.getSchema("nullable"), deprecated: a3.getSchema("deprecated"), optional: !(null !== (r11 = t10.getSchema("required")) && void 0 !== r11 ? r11 : []).includes(i3), children: i3 }), l(tN, { sx: { mr: "1em" }, children: ":" }), l(tZ, { schema: a3 })] })] }) }) : null;
        }) }) }), l(tN, { children: "}" })] });
      case "record":
        return n(c, { children: [l(tN, { children: "{" }), t10.getSchema("additionalProperties") && l(c, { children: l(tB, { children: n(tq, { children: [n(tN, { sx: { mr: 1 }, children: ["[K:", " "] }), l(tZ, { schema: null !== (o2 = t10.getSchema("propertyNames")) && void 0 !== o2 ? o2 : Y() }), n(tN, { sx: { mr: 1 }, children: ["]:", " "] }), l(tZ, { schema: null !== (s2 = t10.getSchema("additionalProperties")) && void 0 !== s2 ? s2 : D() })] }) }) }), l(tN, { children: "}" })] });
      case "enums": {
        let e12 = null !== (d2 = t10.getSchema("enum")) && void 0 !== d2 ? d2 : [];
        if (1 == e12.length) return l(tN, { children: JSON.stringify(e12[0]) });
        let r11 = "any";
        return e12.length > 0 && (r11 = typeof e12[0]), n(c, { children: [l(tN, { sx: { fontWeight: "bold" }, children: r11 }), l(tB, { children: e12.map((e13, r12) => {
          var i3;
          return l(tz, { name: "enum", value: `${e13}`, extra: (null === (i3 = t10.getMeta("enumLabels")) || void 0 === i3 ? void 0 : i3[r12]) ? { label: JSON.stringify(t10.getMeta("enumLabels")[r12]) } : {} }, e13);
        }) })] });
      }
    }
    let [p2, h2, f2] = [t10.type, t10.getSchema("format"), t10.getSchema("default")];
    return n(c, { children: [l(tN, { sx: { fontWeight: "bold" }, children: p2 || "any" }), n(tB, { children: [h2 && l(tz, { name: "format", value: h2 }), !ep(f2) && l(tz, { name: "default", value: f2 }), !tF(t10) && l(tz, { name: "validate", value: (u2 = t10).getSchema("x-tag-validate") ? u2.getSchema("x-tag-validate") : tF(u2) ? u2.getSchema("pattern") ? `@r/${String(u2.getSchema("pattern"))}/` : `@${u2.getSchema("exclusiveMinimum")} ? "(" : "["}${u2.getSchema("minProperties") ? u2.getSchema("minProperties") : u2.getSchema("minItems") ? u2.getSchema("minItems") : u2.getSchema("minimum") ? u2.getSchema("minimum") : u2.getSchema("minLength") ? u2.getSchema("minLength") : "string" === u2.type ? "0" : ("number" === u2.type || "integer" === u2.type) && u2.getSchema("format") ? `${Math.pow(2, Number(u2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${u2.getSchema("maxProperties") ? u2.getSchema("maxProperties") : u2.getSchema("maxItems") ? u2.getSchema("maxItems") : u2.getSchema("maximum") ? u2.getSchema("maximum") : u2.getSchema("maxLength") ? u2.getSchema("maxLength") : "string" === u2.type && "uint64" === u2.getSchema("format") ? "19" : ("number" === u2.type || "integer" === u2.type) && u2.getSchema("format") ? `${Math.pow(2, Number(u2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${u2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView" });
function tF(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t10) => e10.getSchema(t10));
}
let tH = i({ code: L(), response: L() }, (e10) => {
  let t10 = t_.use();
  return () => {
    var r10, i2;
    return n(tU, { children: [l(tE, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), n(eQ, { sx: { pl: "4em" }, children: [l(c, { children: null === (r10 = e10.response["x-status-return-errors"]) || void 0 === r10 ? void 0 : r10.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t11) => {
        let [r11, i3] = t11.split("=", 2);
        return ep(r11) || ep(i3) ? e13 : { ...e13, [r11]: i3 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? l(eQ, { sx: { mb: 16 }, children: n(tq, { spacing: 0, children: [n(tN, { children: ["{", " "] }), l(tB, { children: Object.entries(e11).map((e12) => {
      let [t11, r11] = e12;
      return "code" === t11 ? null : n(tq, { children: [l(tV, { children: t11 }), l(tN, { children: ": " }), l(tN, { children: r11 })] });
    }) }), n(tN, { children: [" ", "}"] })] }) }) : null) }), l(c, { children: Object.entries(null !== (i2 = e10.response.content) && void 0 !== i2 ? i2 : {}).map((e11) => {
      let [r11, { schema: i3 }] = e11;
      return n(tM, { children: [l(tq, { spacing: 0, children: l(tZ, { schema: Z.decode(i3, (e12) => {
        var r12;
        return [null !== (r12 = t10.schema(e12)) && void 0 !== r12 ? r12 : {}, F(e12)];
      }) }) }), l("div", { "data-content-type": true, children: r11 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), tU = eX("section", { displayName: "ResponseSection" })({}), tE = eX("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), tM = eX("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), tJ = eX("div", { valued: A().optional(), focus: A().optional(), invalid: A().optional(), disabled: A().optional(), $label: L().optional(), $hint: L().optional(), $supporting: L().optional(), $leading: L().optional(), $trailing: L().optional(), $default: L() }, (e10, t10) => {
  let { slots: r10 } = t10;
  return (t11) => {
    var i2, a2, o2, s2;
    let d2 = e10.valued, u2 = e10.invalid, c2 = e10.disabled, h2 = (null !== (s2 = null === (i2 = r10.default) || void 0 === i2 ? void 0 : i2.call(r10)) && void 0 !== s2 ? s2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t12, r11, i3, n2, a3, o3;
        return d2 = !!(null !== (a3 = null !== (n2 = null === (t12 = e11.props) || void 0 === t12 ? void 0 : t12.value) && void 0 !== n2 ? n2 : null === (r11 = e11.props) || void 0 === r11 ? void 0 : r11.placeholder) && void 0 !== a3 ? a3 : d2), c2 = null !== (o3 = null === (i3 = e11.props) || void 0 === i3 ? void 0 : i3.disabled) && void 0 !== o3 ? o3 : c2, p(e11, { disabled: c2 });
      }
      return p(e11);
    });
    return n(t11, { "data-valued": d2, "data-invalid": u2, "data-disabled": c2, "data-focus-within": e10.focus, "data-has-leading": !!r10.leading, "data-has-trailing": !!r10.trailing, children: [n("div", { "data-input-container": true, children: [n("div", { "data-input-decorator-container": true, children: [l("div", { "data-input-decorator-leading": true }), l("div", { "data-input-decorator-label": true, children: l("div", { "data-input-label": true, children: null === (a2 = r10.label) || void 0 === a2 ? void 0 : a2.call(r10) }) }), l("div", { "data-input-decorator-trailing": true })] }), n("div", { "data-input-row": true, children: [r10.leading && l(tG, { role: "leading", children: r10.leading() }), h2, r10.trailing && l(tG, { role: "trailing", children: r10.trailing() })] })] }), r10.supporting && l("div", { "data-input-supporting": true, children: null === (o2 = r10.supporting) || void 0 === o2 ? void 0 : o2.call(r10) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), tG = eX("div", { role: H(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
function tK() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let t0 = tK(), t1 = { paddingX: [t0.paddingLeft, t0.paddingRight], paddingY: [t0.paddingTop, t0.paddingBottom], marginX: [t0.marginInlineStart, t0.marginInlineEnd], marginY: [t0.marginTop, t0.marginBottom], borderX: [t0.borderLeft, t0.borderRight], borderY: [t0.borderTop, t0.borderBottom], color: [t0.color, t0.fill], borderTopRadius: [t0.borderTopLeftRadius, t0.borderTopRightRadius], borderBottomRadius: [t0.borderBottomLeftRadius, t0.borderBottomRightRadius], borderRightRadius: [t0.borderTopRightRadius, t0.borderBottomRightRadius], borderLeftRadius: [t0.borderTopLeftRadius, t0.borderBottomLeftRadius], backgroundGradient: [t0.backgroundImage], boxSize: [t0.width, t0.height] }, t4 = tK(), t2 = { font: t4.fontFamily, shadow: t4.boxShadow, rounded: t4.borderRadius, roundedTop: t4.borderTopRadius, roundedBottom: t4.borderBottomRadius, roundedLeft: t4.borderLeftRadius, roundedRight: t4.borderRightRadius, bg: t4.background, bgImage: t4.backgroundImage, bgSize: t4.backgroundSize, bgPosition: t4.backgroundPosition, bgRepeat: t4.backgroundRepeat, bgAttachment: t4.backgroundAttachment, bgColor: t4.backgroundColor, bgGradient: t4.backgroundGradient, bgClip: t4.backgroundClip, pos: t4.position, p: t4.padding, pt: t4.paddingTop, pr: t4.paddingRight, pl: t4.paddingLeft, pb: t4.paddingBottom, ps: t4.paddingInlineStart, pe: t4.paddingInlineEnd, px: t4.paddingX, py: t4.paddingY, m: t4.margin, mt: t4.marginTop, mr: t4.marginRight, ml: t4.marginLeft, mb: t4.marginBottom, ms: t4.marginInlineStart, me: t4.marginInlineEnd, mx: t4.marginX, my: t4.marginY, w: t4.width, minW: t4.minWidth, maxW: t4.maxWidth, h: t4.height, minH: t4.minHeight, maxH: t4.maxHeight }, t3 = tK(), t5 = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  let i2 = [...t10];
  for (let e11 of t10) t2[e11] && i2.push(t2[e11]);
  return i2;
}, t8 = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _t9 = class _t9 {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: i2, extends: n2, ...a2 } = e10;
    if (n2) for (let e11 of n2) r10.push(...this.processAll(e11, t10));
    if (i2) {
      let e11 = {}, t11 = {};
      _t9.walkStateValues(i2, (r11, i3, n3) => {
        var a3;
        let o2 = `--${this.opt.varPrefix}-state-${i3.join("-")}`, l2 = null !== (a3 = ey(i3)) && void 0 !== a3 ? a3 : "", s2 = {};
        this.process(s2, l2, r11, false), e11[o2] = s2[l2], eh(t11, [...n3, l2], `var(${o2})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!ev(a2)) {
      let e11 = {};
      this.processTo(e11, a2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let i2 in t10) this.process(e10, i2, t10[i2], r10);
  }
  process(e10, t10, r10) {
    var i2, n2, a2, o2;
    let l2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let n3 = null === (i2 = this.opt.mixins[t10]) || void 0 === i2 ? void 0 : i2.get(r10);
      if (n3) for (let t11 in n3) this.process(e10, t11, n3[t11], l2);
      return;
    }
    let s2 = t10;
    if (eg(r10)) {
      e10[s2 = null !== (n2 = _t9.convertSelector(s2)) && void 0 !== n2 ? n2 : s2] = null !== (a2 = e10[s2]) && void 0 !== a2 ? a2 : {}, this.processTo(e10[s2], r10);
      return;
    }
    if (l2 && t1[s2 = null !== (o2 = t2[s2]) && void 0 !== o2 ? o2 : s2]) {
      for (let t11 of t1[s2]) e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[s2] = this.opt.processValue(s2, r10);
  }
};
__publicField(_t9, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_t9, "convertSelector", (e10) => {
  if (t8[e10]) return t8[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [i2, n2] = t10.split("__");
      return n2 ? `${e11}[${em(i2)}='${em(n2)}']${r10}` : `${e11}[${em(i2)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_t9.supportedPseudoClasses[t10]) {
        let r12 = _t9.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, i2] = t10.split("__"), n2 = em(r11);
      return i2 ? `${e11}[data-${n2}='${em(i2)}']` : `${e11}[data-${n2}]:not([data-${n2}='false'])`;
    }
  }
});
__publicField(_t9, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: i2, ...n2 } = e10;
  for (let e11 in n2) {
    var a2;
    let o2 = n2[e11], l2 = null !== (a2 = n2.default) && void 0 !== a2 ? a2 : r10.default, s2 = null != i2 ? i2 : ec(l2, [...r10.path.slice(1), "$"]), d2 = s2 ? [...r10.selectorPath, s2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (eg(o2)) {
      _t9.walkStateValues(o2, t10, { path: u2, selectorPath: d2, default: l2 });
      continue;
    }
    t10(o2, u2, d2);
  }
});
let t9 = _t9;
var t6, t7 = ((t6 = t7 || {}).var = "var", t6.mixin = "mixin", t6);
class re {
  static create(e10, t10) {
    let { value: r10, on: i2, transform: n2 } = t10;
    return { type: e10, value: r10, on: i2, transform: n2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return re.create("var", { value: e10, on: t5(t3.color, t3.bgColor, t3.outlineColor, t3.borderColor, t3.accentColor, t3.fill, t3.stroke), transform: (e11, t10) => eb(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return re.create("var", { value: e10, on: t5(t3.gap, t3.rowGap, t3.columnGap, t3.top, t3.right, t3.bottom, t3.left, t3.m, t3.ms, t3.me, t3.mt, t3.mr, t3.mb, t3.ml, t3.mx, t3.my, t3.p, t3.ps, t3.pe, t3.pt, t3.pr, t3.pb, t3.pl, t3.px, t3.py) });
  }
  static boxSize(e10) {
    return re.create("var", { value: e10, on: t5(t3.w, t3.minW, t3.maxW, t3.h, t3.minH, t3.maxH, t3.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return re.create("var", { value: e10, on: t5(t3.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return re.create("var", { value: e10, on: t5(t3.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return re.create("var", { value: e10, fallback: 0, on: t5(t3.rounded, t3.roundedTop, t3.roundedBottom, t3.roundedLeft, t3.roundedRight, t0.borderTopLeftRadius, t0.borderTopRightRadius, t0.borderBottomLeftRadius, t0.borderBottomRightRadius, t0.borderTopRightRadius, t0.borderBottomRightRadius, t0.borderTopLeftRadius, t0.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return re.create("var", { value: e10, on: t5(t3.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return re.create("var", { value: e10, on: t5(t3.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return re.create("var", { value: e10, on: t5(t3.font) });
  }
  static fontWeight(e10) {
    return re.create("var", { value: e10, on: t5(t3.fontWeight) });
  }
  static letterSpacing(e10) {
    return re.create("var", { value: e10, on: t5(t3.letterSpacing) });
  }
  static shadow(e10) {
    return re.create("var", { value: e10, on: t5(t3.shadow) });
  }
  static customMixin(e10, t10) {
    return re.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let rt = (e10, t10, r10) => {
  let i2 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var n2;
    let a2 = t10[e11];
    if (e11 === t10.length - 1) {
      i2[a2] = r10;
      continue;
    }
    i2[a2] = null !== (n2 = i2[a2]) && void 0 !== n2 ? n2 : {}, i2 = i2[a2];
  }
};
const _rr = class _rr {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _rr.walkValues(e10.value, (i2, n2) => {
      let a2 = n2.join("."), o2 = (i3, n3) => {
        let a3 = e10.transform ? e10.transform(i3, t10) : r10(i3);
        if (eS(a3)) for (let e11 in a3) n3(a3[e11], "default" === e11 ? "" : e11);
        else n3(a3, "");
      };
      if (eh(this._cssVarRefs, [a2], t10(a2)), eg(i2)) for (let e11 in i2) o2(i2[e11], (t11, r11) => {
        eh(this._values, [`${a2}${r11 ? `/${r11}` : ""}`, e11], t11);
      });
      else o2(i2, (e11, t11) => {
        eh(this._values, [`${a2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return eO(this._values);
  }
  get(e10, t10, r10) {
    let i2 = this._values[e10];
    if (eS(i2)) {
      var n2;
      return r10 ? i2[t10] : null !== (n2 = i2[t10]) && void 0 !== n2 ? n2 : i2[_rr.defaultMode];
    }
    return r10 ? t10 === _rr.defaultMode ? i2 : void 0 : i2;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_rr, "defaultMode", "_default");
__publicField(_rr, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let n2 = e10[i2];
    if (eg(n2)) {
      if (ex(n2, "_default")) {
        t10(n2, [...r10, i2]);
        continue;
      }
      _rr.walkValues(n2, t10, [...r10, i2]);
      continue;
    }
    t10(n2, [...r10, i2]);
  }
});
let rr = _rr;
const _ri = class _ri {
  constructor(e10) {
    __publicField(this, "_values", {});
    _ri.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      eh(this._values, [r10], e_(e11, "__mixin"));
    });
  }
  get tokens() {
    return eO(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_ri, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let n2 = e10[i2];
    if (eg(n2)) {
      if (ex(n2, "__mixin")) {
        t10(n2, [...r10, i2]);
        continue;
      }
      _ri.walkValue(n2, t10, [...r10, i2]);
      continue;
    }
    t10(n2, [...r10, i2]);
  }
});
let ri = _ri;
let rn = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, ra = (e10) => {
  let t10 = ec(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: e$(rn, (e11) => eP(t10, (t11, r10) => eC(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, ro = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, rl = (e10) => ew(e10) && ex(e10, "token");
function rs(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let rd = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _ru = class _ru {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _ru.propsCanBaseDp[e10] && ef(t10) ? _ru.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, i2;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (i2 = this.mixins[t10]) || void 0 === i2 ? void 0 : i2.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, i2, n2;
      if (rl(t10)) {
        let r11 = null === (i2 = this.propValues[e10]) || void 0 === i2 ? void 0 : i2.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (n2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== n2 ? n2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new t9({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, i2;
    for (let n2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (i2 = t10.mode) && void 0 !== i2 ? i2 : "light", eh(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[n2];
      if (t11) {
        if (t11.type === t7.var) {
          let e11 = new rr(t11, { cssVar: (e12) => this.cssVar(n2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[n2] = e11, t11.on)) this.propValues[r11] = e11;
          for (let t12 of e11.tokens) for (let r11 of ["light", "dark"]) {
            let i3 = r11 === this.mode ? "_default" : `_${r11}`, a2 = e11.get(t12, i3, true);
            ep(a2) || ("_default" === i3 ? eh(this.cssVars, [this.cssVar(n2, t12)], a2) : eh(this.cssVars, [i3, this.cssVar(n2, t12)], a2));
          }
          continue;
        }
        if (t11.type === t7.mixin) {
          let e11 = new ri(t11);
          for (let r11 of t11.on) this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _ru(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${em(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let i2 = null != t10 ? t10 : {};
    return i2.__emotion_styles = null !== (r10 = i2.__emotion_styles) && void 0 !== r10 ? r10 : ej(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), i2.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, i2 = (e11, t11) => eS(t11) ? { $type: e11, $value: e$(t11, (t12) => i2(e11, t12).$value) } : eb(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let i3 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? eR(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return i3.startsWith("sys.") ? `{${i3}}` : `{seed.${i3}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let n2 in this.tokens) {
      let a2 = this.tokens[n2], o2 = (o3) => {
        for (let l2 of a2.tokens) if (!l2.includes("/")) {
          if (l2.startsWith("sys.")) {
            let e11 = a2.get(l2, "_default"), s2 = a2.get(l2, "_dark");
            rt(t10, [n2, ...l2.split(".")], i2(o3, e11)), e11 !== s2 && rt(r10, [n2, ...l2.split(".")], i2(o3, s2));
          } else rt(e10, [n2, ...l2.split(".")], i2(o3, a2.get(l2, "_default")));
        }
      };
      switch (n2) {
        case "color":
          o2("color");
          break;
        case "rounded":
          o2("borderRadius");
          break;
        case "shadow":
          o2("boxShadow");
          break;
        case "font":
          o2("fontFamily");
          break;
        case "fontWeight":
          o2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11) continue;
      let n2 = (n3) => {
        for (let a2 of r11.tokens) {
          let o2 = r11.get(a2);
          if (!o2) continue;
          let l2 = this.unstable_sx(o2)[0];
          rt(t10, [e11, ...a2.split(".")], i2(n3, l2));
        }
      };
      "textStyle" === e11 && n2("typography");
    }
    return { seed: e10, base: ra(t10), dark: ra(r10) };
  }
};
__publicField(_ru, "propsCanPercent", rd([...re.boxSize({}).on]));
__publicField(_ru, "propsCanBaseDp", rd([...re.boxSize({}).on, ...re.space({}).on, ...re.fontSize({}).on, ...re.letterSpacing({}).on, ...re.lineHeight({}).on, ...re.rounded({}).on]));
let ru = _ru;
let rc = { shadow: re.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: re.customMixin("elevation", { 0: re.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: re.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: re.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: re.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: re.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, rp = (e10, t10, r10, i2) => Object.assign(eq(e10, t10, r10, i2), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${i2})` }), rh = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: rp(0, 0, 1, 1), standard: Object.assign(rp(0.2, 0, 0, 1), { accelerate: rp(0.3, 0, 1, 1), decelerate: rp(0, 0, 0, 1) }), emphasized: Object.assign(rp(0.2, 0, 0, 1), { accelerate: rp(0.3, 0, 0.8, 0.15), decelerate: rp(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(rp(0.4, 0, 0.2, 1), { decelerate: rp(0, 0, 0.2, 1), accelerate: rp(0.4, 0, 1, 1) }) } }, rf = { transitionDuration: re.transitionDuration(rh.duration), transitionTimingFunction: re.transitionTimingFunction({ linear: rh.easing.linear.toString(), standard: rh.easing.standard.toString(), "standard-accelerate": rh.easing.standard.accelerate.toString(), "standard-decelerate": rh.easing.standard.decelerate.toString(), emphasized: rh.easing.emphasized.toString(), "emphasized-decelerate": rh.easing.emphasized.decelerate.toString(), "emphasized-accelerate": rh.easing.emphasized.accelerate.toString(), legacy: rh.easing.legacy.toString(), "legacy-decelerate": rh.easing.legacy.decelerate.toString(), "legacy-accelerate": rh.easing.legacy.accelerate.toString() }) }, rm = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rg = (e10) => {
  let t10 = eA(e10);
  return [t10.r, t10.g, t10.b];
}, ry = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rv = class _rv {
  constructor(e10) {
    this.seeds = e10;
  }
  static createRoleColorRuleBuilder(e10) {
    let t10 = {}, r10 = new Proxy({}, { get: (i2, n2) => "build" == n2 ? () => t10 : (i3, n3) => (t10[`${i3}${e10 ? `:${e10}` : ""}`] = n3, r10) });
    return r10;
  }
  static createRoleColorSourcePicker() {
    return new Proxy({}, { get: (e10, t10) => (e11) => [t10, e11] });
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = _rv.createRoleColorSourcePicker(), r10 = _rv.createRoleColorRuleBuilder().rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(87)).rule("outline-variant", t10.neutralVariant(80)).rule("surface", t10.neutral(99)).rule("on-surface", t10.neutral(10)).rule("surface-variant", t10.neutralVariant(90)).rule("on-surface-variant", t10.neutralVariant(30)).rule("surface-dim", t10.neutral(87)).rule("surface-bright", t10.neutral(98)).rule("surface-container-lowest", t10.neutral(100)).rule("surface-container-low", t10.neutral(96)).rule("surface-container", t10.neutral(94)).rule("surface-container-high", t10.neutral(92)).rule("surface-container-highest", t10.neutral(90)).rule("inverse-surface", t10.neutral(20)).rule("inverse-on-surface", t10.neutral(95)).rule("inverse-primary", t10.primary(80)), i2 = _rv.createRoleColorRuleBuilder("dark").rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(60)).rule("outline-variant", t10.neutralVariant(30)).rule("surface", t10.neutral(10)).rule("on-surface", t10.neutral(90)).rule("surface-variant", t10.neutralVariant(30)).rule("on-surface-variant", t10.neutralVariant(80)).rule("surface-dim", t10.neutral(6)).rule("surface-bright", t10.neutral(24)).rule("surface-container-lowest", t10.neutral(4)).rule("surface-container-low", t10.neutral(10)).rule("surface-container", t10.neutral(12)).rule("surface-container-high", t10.neutral(17)).rule("surface-container-highest", t10.neutral(22)).rule("inverse-surface", t10.neutral(90)).rule("inverse-on-surface", t10.neutral(20)).rule("inverse-primary", t10.primary(40));
    for (let e11 in this.seeds) e11.startsWith("neutral") || (r10 = r10.rule(e11, t10[e11](40)).rule(`on-${e11}`, t10[e11](100)).rule(`${e11}-container`, t10[e11](90)).rule(`on-${e11}-container`, t10[e11](10)), i2 = i2.rule(e11, t10[e11](80)).rule(`on-${e11}`, t10[e11](20)).rule(`${e11}-container`, t10[e11](30)).rule(`on-${e11}-container`, t10[e11](90)));
    return { ...r10.build(), ...i2.build(), ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let [a2, [o2, l2]] of Object.entries(e10)) if (this.seeds[o2]) {
      var i2, n2;
      if (a2.endsWith(":dark")) {
        r10[a2.split(":")[0]] = rm[l2] ? `${String(o2)}.${l2}` : null === (n2 = this.seeds[o2]) || void 0 === n2 ? void 0 : n2.tone(l2);
        continue;
      }
      t10[a2] = rm[l2] ? `${String(o2)}.${l2}` : null === (i2 = this.seeds[o2]) || void 0 === i2 ? void 0 : i2.tone(l2);
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = this.normalizeRoleRules(e10), [r10, i2] = this.getThemeRoleColors(t10), n2 = {}, a2 = {};
    for (let e11 in r10) if (n2[`${e11}`] = { _default: ef(r10[e11]) ? rg(r10[e11]) : r10[e11], _dark: ef(i2[e11]) ? rg(i2[e11]) : i2[e11] }, ry(e11) && (a2[`${e11}`] = re.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = re.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        a2[`${e11}`] = re.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      a2[`${e11}`] = re.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = re.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let o2 = (e11) => Object.keys(rm).reduce((t11, r11) => Object.assign(t11, { [r11]: rg(e11.tone(parseInt(r11))) }), {});
    return { color: re.color({ ...e$(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n2 }), containerStyle: re.customMixin("containerStyle", { sys: a2 }) };
  }
};
__publicField(_rv, "toHEX", (e10) => `#${rg(e10).map((e11) => ek(e11.toString(16), 2, "0")).join("")}`);
__publicField(_rv, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: i2, neutral: n2, neutralVariant: a2, error: o2, ...l2 } = e10, s2 = eI.contentFromColors({ primary: eN(t10), secondary: r10 ? eN(r10) : void 0, tertiary: i2 ? eN(i2) : void 0, error: o2 ? eN(o2) : void 0 });
  return n2 && (s2.n1 = eV.fromHueAndChroma(eN(n2), 4)), a2 && (s2.n2 = eV.fromHueAndChroma(eN(a2), 8)), new _rv({ primary: s2.a1, secondary: s2.a2, tertiary: s2.a3, neutral: s2.n1, neutralVariant: s2.n2, error: s2.error, ...e$(l2, (e11) => eV.fromInt(eN(e11))) });
});
let rv = _rv;
let rb = re.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rx = { font: re.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: re.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: re.customMixin("textStyle", { sys: { "display-large": re.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": re.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": re.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": re.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": re.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": re.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": re.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": re.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": re.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": re.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": re.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": re.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": re.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": re.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": re.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rO = rv.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rS = { ...rx, ...rf, ...rc, rounded: rb, ...rO.toDesignTokens({}) }, r$ = ru.create(rS, { varPrefix: "vk" }), rw = x(() => r$, { name: "Theme" }), rk = x(() => eB({ key: "css" }), { name: "Cache" }), r_ = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping) e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      eL(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, rP = h({ sx: f.custom(), component: f.custom().optional().default("div") }, (e10, t10) => {
  var r10;
  let { slots: i2, expose: n2 } = t10, a2 = rw.use(), o2 = rk.use(), s2 = a2.unstable_css(o2, null !== (r10 = e10.sx) && void 0 !== r10 ? r10 : {}), d2 = () => "0" !== s2.name ? `${o2.key}-${s2.name}` : "", u2 = r_(o2);
  P(() => {
    u2({ serialized: s2, isStringTag: true });
  });
  let c2 = C();
  return n2({ $$forwardRef: c2 }), () => {
    var t11;
    return l(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: c2, class: d2(), children: i2 });
  };
}), rR = x(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), rC = x(() => new rT(m(null), m(null), () => false), { name: "Overlay" });
class rT {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = O(this.triggerRef), r10 = O(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let rX = h({ isOpen: f.boolean().optional(), style: f.custom().optional(), contentRef: f.custom().optional(), triggerRef: f.custom().optional(), onClickOutside: f.custom(), onEscKeydown: f.custom(), onContentBeforeMount: f.custom(), $transition: f.custom().optional(), $default: f.custom().optional() }, (e10, t10) => {
  var r10;
  let { slots: i2, attrs: n2, emit: a2 } = t10, o2 = e10.contentRef || m(null), s2 = new rT(null !== (r10 = e10.triggerRef) && void 0 !== r10 ? r10 : m(null), o2, () => !!e10.isOpen), d2 = rR.use();
  return g(rC.use().add(s2)), window && y(S(o2, "value"), $((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      s2.isClickInside(e12) || a2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), $((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && s2.topmost() && a2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), w()), () => {
    var t11;
    let r11 = e10.isOpen ? p(l("div", { ...n2, ref: o2, style: e10.style, children: l(rC, { value: s2, children: null === (t11 = i2.default) || void 0 === t11 ? void 0 : t11.call(i2) }) }), { onVnodeBeforeMount: () => {
      a2("content-before-mount");
    } }) : null;
    return l(v, { to: d2.mountPoint(), children: i2.transition ? i2.transition({ content: r11 }) : r11 });
  };
}, { inheritAttrs: false, name: "Overlay" }, { displayName: "Overlay" });
rX.propTypes.isOpen, rX.propTypes.onClickOutside, rX.propTypes.$transition, (e10, t10) => {
  let { slots: r10, emit: i2, attrs: a2 } = t10, o2 = m(null), s2 = m(null);
  return b(() => s2.value, (t11) => {
    if (t11 && o2.value) {
      var r11, i3;
      eW(o2.value, t11, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (i3 = e10.modifiers) && void 0 !== i3 ? i3 : [], ez] });
    }
  }), () => {
    var t11, d2;
    let u2 = null === (t11 = r10.default) || void 0 === t11 ? void 0 : t11.call(r10)[0];
    return u2 ? n(c, { children: [p(u2, { ...a2, onVnodeMounted: (e11) => {
      o2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), l(rX, { triggerRef: o2, contentRef: s2, isOpen: e10.isOpen, onClickOutside: (e11) => i2("click-outside", e11), style: { zIndex: 100 }, $transition: r10.transition, children: null === (d2 = r10.content) || void 0 === d2 ? void 0 : d2.call(r10) })] }) : null;
  };
};
let rQ = (e10) => {
  let t10 = () => [eG(), eK.of(e0), e1(), e4({ openText: String.fromCharCode(9662), closedText: String.fromCharCode(9656) }), eK.of(e2), e3(), e5(), eK.of(e8), e9(), e6(), e7(), te(), eK.of(tt), eK.of(tr)], r10 = T([]), i2 = T(e10 || ""), n2 = T(null), a2 = T(null), o2 = es([i2, r10]).pipe(et((e11) => {
    let [r11, i3] = e11;
    return eM.create({ doc: r11, extensions: [...i3, t10].map((e12) => e12()) });
  }));
  return { initial$: i2, state$: o2, dom$: n2, view$: a2, use: (e11) => (r10.next([...r10.value, e11]), () => {
    r10.next(r10.value.filter((t11) => t11 !== e11));
  }), serve: () => er(o2, es([n2, o2]).pipe(ee((e11) => {
    let [t11, r11] = e11;
    return null == t11 ? en(null) : en(new eJ({ parent: t11, state: r11 }));
  }), $((e11) => (a2.next(e11), () => null == e11 ? void 0 : e11.destroy())))) };
}, rj = x(() => rQ(), { name: "EditorContext" }), rI = (e10) => {
  let t10 = rj.use();
  y(t10.dom$, $(() => t10.use(() => e10())), w());
}, rN = function() {
  let e10;
  for (var t10 = arguments.length, r10 = Array(t10), i2 = 0; i2 < t10; i2++) r10[i2] = arguments[i2];
  let n2 = "div", a2 = {}, o2 = {};
  for (let t11 of r10) {
    if (ew(t11)) {
      e10 = t11;
      continue;
    }
    if (eb(t11) || k(t11)) {
      n2 = t11;
      continue;
    }
    ep(e10) && _(t11) ? a2 = t11 : o2 = t11;
  }
  return null != e10 || (e10 = (e11, t11) => (r11) => {
    let i3 = {};
    for (let t12 in e11) "component" !== t12 && "sx" !== t12 && e11[t12] && (i3[`data-${t12}`] = e11[t12]);
    return l(r11, { ...i3, children: t11.slots });
  }), (t11) => {
    let r11 = Object.assign(h({ ...a2, sx: f.custom().optional(), component: f.custom().optional() }, (i3, a3) => {
      let o3 = rw.use(), l2 = rk.use(), s2 = r_(l2), d2 = m(""), u2 = o3.unstable_css(l2, t11), c2 = () => ("0" !== u2.name ? `${l2.key}-${u2.name}${d2.value}` : `${d2.value}`) + (r11.name ? ` ${r11.name}` : "");
      if (n2.__styled) {
        var h2;
        let e11 = o3.unstable_css(l2, null !== (h2 = i3.sx) && void 0 !== h2 ? h2 : {});
        "0" !== e11.name && (d2.value = ` ${l2.key}-${e11.name}`), P(() => {
          s2({ serialized: u2, isStringTag: true }), s2({ serialized: e11, isStringTag: true });
        });
      } else R(() => {
        s2({ serialized: u2, isStringTag: true });
      });
      let f2 = e10(i3, a3);
      return () => {
        if (n2.__styled) {
          let e12 = f2(n2);
          return e12 ? p(e12, { component: i3.component, class: c2() }) : null;
        }
        let e11 = f2(rP);
        return e11 ? p(e11, { component: i3.component || n2, sx: i3.sx, class: c2() }) : null;
      };
    }, o2), { __styled: true });
    return r11.toString = () => `.${r11.name}`, r11;
  };
}("div", () => {
  let e10 = rj.use();
  return rI(() => ti(tn, { fallback: true })), y(e10.serve(), X()), (t10) => l(t10, { ref: e10.dom$ });
}, { displayName: "EditorContainer" })({ width: "100%", height: "100%", fontSize: 12, "& .cm-editor": { outline: "none", height: "100%", "& .cm-gutterElement": { color: "sys.secondary" }, "& [aria-readonly=true]": { opacity: 0.7 }, "& .cm-activeLineGutter": { backgroundColor: rs("sys.primary", ro(0.08)) }, "& .cm-activeLine": { backgroundColor: rs("sys.primary", ro(0.08)) }, "& .diffLineGutter": { backgroundColor: rs("sys.error", ro(0.08)) }, "& .diffLine": { backgroundColor: rs("sys.error", ro(0.08)) }, "& .cm-tooltip-autocomplete ul li[aria-selected]": { containerStyle: "sys.primary" }, "& .cm-gutters": { border: "none", containerStyle: "sys.surface-container-lowest" }, "& .cm-tooltip": { border: "none", boxShadow: "2", borderRadius: "xs", containerStyle: "sys.surface-container-lowest", fontFamily: "code" }, "& .cm-tooltip-lint": { overflow: "hidden" }, "& .cm-tooltip-hover": { overflow: "hidden" } }, "& .tok-propertyName": { color: "sys.primary" }, "& .tok-number": { color: "sys.error" }, "& .tok-keyword": { color: "sys.error" }, "& .tok-string": { color: "sys.tertiary" }, "& .cm-lint-marker": { width: "0.7em", height: "0.7em" }, "& .tok-punctuation": { color: rs("sys.primary", ro(0.38)) } }), rV = ta({ PropertyName: to.propertyName, String: to.string, Bytes: to.string, Number: to.number, "True False": to.bool, ",": to.separator, ":": to.separator, "[ ]": to.squareBracket, "{ }": to.brace }), rq = tO.deserialize({ version: 14, states: "&`Q}QPOOOOQO'#C`'#C`O!UQPO'#C`O!^QPO'#CcO#ZQPO'#CfOOQO'#Cg'#CgOOQO'#Ch'#ChOOQO'#Ci'#CiOOQO'#Cj'#CjOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Cw'#CwO#bQPO'#C_OOQO'#Cm'#CmQ!aQPOOQOQPOOOOQO,58},58}O#gQPO,58}OOQO,59Q,59QO#rQPO,59QO#zQPO,58yOOQO-E6k-E6kOOQO1G.i1G.iO$RQPO1G.lO$YQPO1G.lOOQO1G.l1G.lO$bQQO'#C`O$vQPO'#CnO#zQPO1G.eO${QQO1G.eOOQO,59Z,59ZOOQO7+$W7+$WO%^QPO7+$WOOQO-E6m-E6mOOQO,59Y,59YOOQO-E6l-E6lO%eQQO7+$POOQO7+$P7+$POOQO<<Gr<<GrP!iQPO'#CoOOQO<<Gk<<Gk", stateData: "&S~OfOSgOSPOS~OUROXSOhPOmTOnUOoVOpWOqWOrXOsYO~OiQO~P]Od]XjSX~OT`OhPOiPO~OUROXSOiVOmTOnUOoVOpWOqWOrXOsYO~OWbO~P!iOjdO~OTfOhPOiPO~OWiOlgO~OijO~P]OWoO~P!iOWoOlpO~Od]Xh]Xi]XjSXt]XT]X~OjrO~OtuOdRihRiiRiTRi~OWvO~P!iOtxOdRqhRqiRqTRq~Otgqpoimrshr~", goto: "#PlPPPmsPP}PP}}}}}}}!W!b!hPPPPPPP!nX]OR^aW[OR^aTkdl_ZOSdglpwQ^OQaRTe^aQldRslQhcRqhQ_OQcSQmdUngpwRtl", nodeNames: "⚠ Comment Document Property PropertyName } { Object ] [ Array Null Number String Bytes True False", maxTerm: 36, nodeProps: [["isolate", 1, ""], ["openedBy", 5, "{", 8, "["], ["closedBy", 6, "}", 9, "]"]], propSources: [rV], skippedNodes: [0, 1], repeatNodeCount: 3, tokenData: "C|~RiXY!pYZ!{]^!{pq!prs#Stu)`wx)t|}9w!O!P:O!P!Q;[!Q![;|![!]<b!c!})`!}#O<g#P#Q<l#R#S)`#T#Y)`#Y#Z<q#Z#b)`#b#c?b#c#h)`#h#iAj#i#o)`#o#pCr#q#rCw~!uQf~XY!ppq!p~#SOtQg~~#VWpq#oqr#ors&Xs#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~#rWpq#oqr#ors$[s#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~$aOi~~$dXrs#o!P!Q#o#O#P#o#U#V#o#Y#Z#o#b#c#o#f#g#o#h#i#o#i#j%P~%SR!Q![%]!c!i%]#T#Z%]~%`R!Q![%i!c!i%i#T#Z%i~%lR!Q![%u!c!i%u#T#Z%u~%xR!Q![#o!c!i#o#T#Z#o~&UP;=`<%l#o~&^Pi~rs&a~&dZXY&aYZ&a]^&apq&aqr&ars'Vs#O&a#O#P'h#P;'S&a;'S;=`)Y<%lO&a~'YPrs']~'`Prs'c~'hOo~~'kXrs&a!P!Q&a#O#P&a#U#V&a#Y#Z&a#b#c&a#f#g&a#h#i&a#i#j(W~(ZR!Q![(d!c!i(d#T#Z(d~(gR!Q![(p!c!i(p#T#Z(p~(sR!Q![(|!c!i(|#T#Z(|~)PR!Q![&a!c!i&a#T#Z&a~)]P;=`<%l&a~)eTh~tu)`!Q![)`!c!})`#R#S)`#T#o)`~)wXpq*dqr*dsw*dwx-lx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~*gXpq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+XXp~pq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+wXrs*d!P!Q*d#O#P*d#U#V*d#Y#Z*d#b#c*d#f#g*d#h#i*d#i#j,d~,gR!Q![,p!c!i,p#T#Z,p~,sR!Q![,|!c!i,|#T#Z,|~-PR!Q![-Y!c!i-Y#T#Z-Y~-]R!Q![*d!c!i*d#T#Z*d~-iP;=`<%l*d~-qXp~pq*dqr*dsw*dwx.^x#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~.c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~/[[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0Qx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0T[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0yx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0|[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~1w[q~XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~2pXrs/X!P!Q/X#O#P/X#U#V/X#Y#Z/X#b#c/X#f#g/X#h#i/X#i#j3]~3`R!Q![3i!c!i3i#T#Z3i~3lR!Q![3u!c!i3u#T#Z3u~3xR!Q![4R!c!i4R#T#Z4R~4UR!Q![/X!c!i/X#T#Z/X~4bP;=`<%l/X~4h[XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~5c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx6Xx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~6^[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~7Z[q~p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~8SXrs4e!P!Q4e#O#P4e#U#V4e#Y#Z4e#b#c4e#f#g4e#h#i4e#i#j8o~8rR!Q![8{!c!i8{#T#Z8{~9OR!Q![9X!c!i9X#T#Z9X~9[R!Q![9e!c!i9e#T#Z9e~9hR!Q![4e!c!i4e#T#Z4e~9tP;=`<%l4eR:OOlPtQ~:RP!Q![:U~:ZSn~!Q![:U!g!h:g#R#S:U#X#Y:g~:jS{|:v}!O:v!Q![;P#R#S;P~:yQ!Q![;P#R#S;P~;UQn~!Q![;P#R#S;P~;_P!P!Q;b~;gTP~OY;bZ];b^;'S;b;'S;=`;v<%lO;b~;yP;=`<%l;b~<RTn~!O!P:U!Q![;|!g!h:g#R#S;|#X#Y:g~<gOj~~<lOX~~<qOW~~<vUh~tu)`!Q![)`!c!})`#R#S)`#T#U=Y#U#o)`~=_Vh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a=t#a#o)`~=yVh~tu)`!Q![)`!c!})`#R#S)`#T#g)`#g#h>`#h#o)`~>eVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#Y>z#Y#o)`~?RTs~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~?gVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#j?|#j#o)`~@RVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a@h#a#o)`~@mVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#aAS#a#o)`~AZTm~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~AoVh~tu)`!Q![)`!c!})`#R#S)`#T#f)`#f#gBU#g#o)`~BZVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#jBp#j#o)`~BuVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#YC[#Y#o)`~CcTr~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~CwOU~~C|OT~", tokenizers: [0, 1], topRules: { Document: [0, 2] }, tokenPrec: 222 });
const _rW = class _rW {
  constructor(e10, t10) {
    this.tree = e10, this.code = t10;
  }
  sliceDoc(e10, t10) {
    return this.code.slice(e10, t10);
  }
  get topNode() {
    return this.tree.topNode;
  }
};
__publicField(_rW, "parse", (e10) => new _rW(rq.parse(e10), e10));
let rW = _rW;
class rz extends Error {
  constructor(e10, t10, r10 = "") {
    let i2 = eM.create({ doc: e10.sliceDoc(0) }), n2 = i2.doc.lineAt(t10.from), a2 = `${n2.number} | `;
    super(`SyntaxError${r10 ? `: ${r10}` : ""}
${a2}${i2.sliceDoc(n2.from, n2.to)}        
${Array(a2.length + (t10.from - n2.from - 1)).fill(" ").join("")} ^ at position ${t10.from}        
`), this.source = e10, this.node = t10, this.reason = r10;
  }
}
let rA = Array.isArray;
function rB(e10) {
  return !!e10 && e10.constructor === Object;
}
let rL = (e10) => "string" == typeof e10 || e10 instanceof String;
function rY(e10) {
  return void 0 === e10;
}
class rD {
  constructor() {
    __privateAdd(this, _n, []);
    __privateAdd(this, _a, 0);
  }
  get written() {
    return __privateGet(this, _n).length > 0;
  }
  withIdent(e10) {
    __privateWrapper(this, _a)._++, e10(), __privateWrapper(this, _a)._--;
  }
  tab() {
    this.space(__privateGet(this, _a), "  ");
  }
  space(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
    0 != e10 && this.write(Array(e10).fill(t10).join(""));
  }
  break() {
    this.write("\n");
  }
  write(e10) {
    __privateGet(this, _n).push(e10);
  }
  toString() {
    return __privateGet(this, _n).join("");
  }
}
_n = new WeakMap();
_a = new WeakMap();
function* rZ(e10) {
  for (let t10 = e10.firstChild; null != t10; t10 = t10.nextSibling) yield t10;
}
let rF = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return rH(e10, t10, [], r10);
}, rH = (e10, t10, r10, i2) => {
  if (!t10) return null;
  switch (i2.onValueNode && i2.onValueNode(t10, r10), t10.type.id) {
    case 2:
      let n2;
      for (let a3 of rZ(t10)) if (!a3.type.is(1)) {
        if (a3.type.is(3)) {
          n2 || (n2 = {});
          let [t11, o3] = rJ(e10, a3), l3 = rG(e10, t11);
          rK(n2, l3, rH(e10, o3, [...r10, ...l3], i2));
        } else {
          if (n2) {
            if (i2.invalidValueAsUndefined) return;
            throw new rz(e10, a3, "Property / Value could not in same scope");
          }
          return rH(e10, a3, r10, i2);
        }
      }
      return n2;
    case 7:
      let a2 = {};
      for (let n3 of rZ(t10)) if (!n3.type.is(1) && n3.type.is(3)) {
        let [t11, o3] = rJ(e10, n3), l3 = rG(e10, t11);
        rK(a2, l3, rH(e10, o3, [...r10, ...l3], i2));
      }
      return a2;
    case 10:
      let o2 = [];
      for (let n3 of rZ(t10)) {
        if ("[" == n3.name || "]" == n3.name) continue;
        let t11 = rH(e10, n3, [...r10, o2.length], i2);
        o2.push(t11);
      }
      return o2;
    case 14:
      if (t10.firstChild) throw new rz(e10, t10, "invalid bytes");
      let l2 = e10.sliceDoc(t10.from, t10.to);
      if (l2.startsWith("'''")) return rU(rM(l2.substring(3, l2.length - 3)));
      return rU(JSON.parse(l2.replaceAll("'", '"')));
    case 13:
      if (t10.firstChild) {
        if (i2.invalidValueAsUndefined) return;
        throw new rz(e10, t10, "invalid string");
      }
      let s2 = e10.sliceDoc(t10.from, t10.to);
      if (s2.startsWith('"""')) return rM(s2.substring(3, s2.length - 3));
      return JSON.parse(s2);
    case 12:
      if (t10.firstChild) {
        if (i2.invalidValueAsUndefined) return;
        throw new rz(e10, t10, "invalid number");
      }
      return parseFloat(e10.sliceDoc(t10.from, t10.to));
    case 15:
      return true;
    case 16:
      return false;
    case 11:
      return null;
    default:
      if (i2.invalidValueAsUndefined) return;
      throw new rz(e10, t10);
  }
};
function rU(e10) {
  return new rE(new TextEncoder().encode(e10));
}
class rE extends Uint8Array {
  toJSON() {
    return btoa(new TextDecoder().decode(this));
  }
}
function rM(e10) {
  let t10 = e10.match(/^(([\n\r]+)[\t ]+)/);
  return t10 ? e10.replaceAll(t10[1], t10[2]).trimStart() : e10;
}
function rJ(e10, t10) {
  let r10;
  let i2 = [];
  for (let n2 of rZ(t10)) {
    if (n2.type.is(4)) {
      i2.push(n2);
      continue;
    }
    if (!rY(r10)) throw new rz(e10, n2, "Property must only one value");
    r10 = n2;
  }
  if (0 == i2.length) throw new rz(e10, t10, "Property must have at least one PropertyName");
  if (rY(r10)) throw new rz(e10, t10, "Property must at least one value");
  return [i2, r10];
}
function rG(e10, t10) {
  return t10.map((t11) => function(e11) {
    try {
      return JSON.parse(e11);
    } catch (t12) {
      return e11;
    }
  }(e10.sliceDoc(t11.from, t11.to)));
}
function rK(e10, t10, r10) {
  if (0 === t10.length) return;
  if (1 === t10.length) {
    e10[t10[0]] = r10;
    return;
  }
  let [i2, ...n2] = t10;
  if (rY(e10[i2])) e10[i2] = {};
  else if (!rB(e10[i2])) throw Error(`o[${i2}] already have non-object value`);
  return rK(e10[i2], n2, r10);
}
class r0 {
  constructor() {
    __privateAdd(this, _r0_instances);
    __privateAdd(this, _o, new rD());
  }
  toString() {
    return __privateGet(this, _o).toString();
  }
  print(e10) {
    if (rA(e10)) {
      if (0 == e10.length) {
        __privateGet(this, _o).write("[]");
        return;
      }
      __privateGet(this, _o).write("["), __privateGet(this, _o).break(), __privateGet(this, _o).withIdent(() => {
        for (let t10 of e10) r4(t10) && (__privateGet(this, _o).tab(), this.print(t10), __privateGet(this, _o).write(","), __privateGet(this, _o).break());
      }), __privateGet(this, _o).tab(), __privateGet(this, _o).write("]");
      return;
    }
    if (rB(e10)) {
      let t10 = Object.entries(e10).filter((e11) => {
        let [t11, r11] = e11;
        return r4(r11);
      });
      if (0 == t10.length) {
        __privateGet(this, _o).write("{}");
        return;
      }
      if (1 == t10.length) {
        let [e11, r11] = t10[0], i2 = r1(e11);
        __privateGet(this, _o).write(i2), __privateGet(this, _o).write(": "), this.print(r11);
        return;
      }
      let r10 = () => {
        let e11 = {}, r11 = 0;
        for (let [i2, n2] of t10) {
          let t11 = `${r1(i2)}: `, a2 = n2;
          for (; rB(a2) && 1 == Object.keys(a2).length; ) {
            let [e12, r12] = Object.entries(a2)[0];
            t11 += `${r1(e12)}: `, a2 = r12;
          }
          e11[t11] = a2;
          let o2 = t11.length;
          o2 > r11 && (r11 = o2);
        }
        for (let [t11, i2] of Object.entries(e11)) __privateGet(this, _o).tab(), __privateGet(this, _o).write(t11), __privateGet(this, _o).space(r11 - t11.length), this.print(i2), __privateGet(this, _o).break();
      };
      if (!__privateGet(this, _o).written) {
        r10();
        return;
      }
      __privateGet(this, _o).write("{"), __privateGet(this, _o).break(), __privateGet(this, _o).withIdent(() => {
        r10();
      }), __privateGet(this, _o).tab(), __privateGet(this, _o).write("}");
      return;
    }
    if (rL(e10)) {
      if (/[\r\n]/.test(e10)) {
        __privateMethod(this, _r0_instances, l_fn).call(this, e10, '"""');
        return;
      }
      __privateGet(this, _o).write(`"${e10.split("").map((e11) => '"' == e11 ? '\\"' : e11).join("")}"`);
      return;
    }
    __privateGet(this, _o).write(JSON.stringify(e10));
  }
}
_o = new WeakMap();
_r0_instances = new WeakSet();
l_fn = function(e10, t10) {
  __privateGet(this, _o).write(t10), __privateGet(this, _o).break(), __privateGet(this, _o).withIdent(() => {
    for (let t11 of function* (e11) {
      let t12 = 0;
      for (let r10 = 0; r10 < e11.length; r10++) {
        let i2 = e11.charAt(r10);
        if ("\r\n".includes(i2)) {
          if (0 == r10) {
            yield "", t12 = r10 + 1;
            continue;
          }
          yield e11.slice(t12, r10), t12 = r10 + 1;
        }
      }
    }(e10)) __privateGet(this, _o).tab(), __privateGet(this, _o).write(t11), __privateGet(this, _o).break();
    __privateGet(this, _o).tab(), __privateGet(this, _o).write(t10);
  });
};
function r1(e10) {
  return /^[A-Za-z$_]([$_A-Za-z0-9]+)?$/.test(e10) ? e10 : JSON.stringify(e10);
}
function r4(e10) {
  return !(rY(e10) || e10 && e10.constructor && e10.call && e10.apply);
}
class r2 {
  static parse(e10) {
    let t10 = rW.parse(e10);
    return rF(t10, t10.topNode);
  }
  static stringify(e10) {
    return function(e11) {
      let t10 = new r0();
      return t10.print(e11), t10.toString();
    }(e10);
  }
  static asBytes(e10) {
    return rU(e10);
  }
  static stringifyPropertyName(e10) {
    return r1(e10);
  }
}
class r3 {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    return e10.substring(1).split(/\//).map(r3.unescape);
  }
  static compile(e10) {
    return 0 === e10.length ? "" : "/" + e10.map(r3.escape).join("/");
  }
  static unescape(e10) {
    return e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
}
let r5 = ts.define({ name: "jsoncue", parser: rq.configure({ props: [td.add({ Object: tu({ except: /^\s*\}/ }), Array: tu({ except: /^\s*\]/ }) }), tc.add({ "Object Array": tp })] }), languageData: { closeBrackets: { brackets: ["[", "{", '"""', "'''", '"', "'"] }, indentOnInput: /^\s*[\}\]]$/ } }), r8 = (e10, t10) => {
  let r10 = th(e10).topNode;
  t10 > 0 && e10.sliceDoc(t10 - 1, t10).endsWith("\n") && (t10 += 1);
  let i2 = function(r11) {
    let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (r11.type.id) {
      case 2:
        let a2 = false;
        for (let o3 of rZ(r11)) if (!o3.type.is(1)) {
          if (o3.type.is(3)) {
            if (a2 = true, o3.from <= t10 && t10 <= o3.to) {
              let t11;
              let r12 = [];
              for (let e11 of rZ(o3)) {
                if (e11.type.is(4)) {
                  r12.push(e11);
                  continue;
                }
                t11 = e11;
              }
              let a3 = [...n2, ...rG(e10, r12)];
              if (t11) return i2(t11, a3);
              return { path: a3, node: o3 };
            }
            continue;
          }
          if (!a2) return i2(o3);
        }
        break;
      case 7:
        for (let a3 of rZ(r11)) if (!a3.type.is(1) && a3.type.is(3) && a3.from <= t10 && t10 <= a3.to) {
          let t11;
          let r12 = [];
          for (let e11 of rZ(a3)) {
            if (e11.type.is(4)) {
              r12.push(e11);
              continue;
            }
            t11 = e11;
          }
          let o3 = [...n2, ...rG(e10, r12)];
          if (t11) return i2(t11, o3);
          return { path: o3, node: a3 };
        }
        break;
      case 10:
        let o2 = 0;
        for (let e11 of rZ(r11)) if (!("[" == e11.name || "]" == e11.name)) {
          if (e11.from <= t10 && t10 <= e11.to) return i2(e11, [...n2, o2]);
          o2++;
        }
    }
    return { node: r11, path: n2 };
  };
  return { ...i2(r10), root: r10, values: rF(e10, r10, { invalidValueAsUndefined: true }) };
};
function r9(e10) {
  switch (e10.type) {
    case "object":
    case "record":
      return "{${}}";
    case "array":
      return "[${}]";
    case "string":
      return '"${}"';
    case "binary":
      return "'${}'";
  }
  return "${}";
}
function r6(e10) {
  switch (e10.type) {
    case "object":
    case "record":
      return "{}";
    case "array":
      return "[]";
    case "binary":
      return "''";
    case "string":
      return '""';
  }
  return "";
}
let r7 = i({ field$: L(), readOnly: A().optional() }, (e10, t10) => {
  let {} = t10, r10 = rQ(ep(e10.field$.input) ? "" : tS.stringify(e10.field$.input));
  return () => l(eQ, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: l(rj, { value: r10, children: l(ie, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}, { displayName: "JSONCueEditorInput" }), ie = i({ field$: L(), schema: L() }, (e10) => {
  let r10 = rj.use();
  return t(e10.schema$, I((e11) => r10.use(() => {
    var t10;
    return t10 = e11, [new tl(r5), tm({ override: [/* @__PURE__ */ function(e12) {
      let t11 = (t12, r11) => {
        let i2 = r8(t12, r11), n2 = function e13(t13, r12, i3) {
          let n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Q;
          switch (t13.type) {
            case "array":
              if (0 === i3.length) break;
              let a2 = i3[0];
              if (rY(r12) && (r12 = []), !function(e14) {
                try {
                  return Number(e14) === e14;
                } catch {
                  return false;
                }
              }(a2) || !rA(r12)) return;
              for (let [o3, l2, s2] of t13.entries(Array(a2 + 1), n3)) if (o3 == a2) {
                let t14 = r12[a2];
                return e13(s2, t14, i3.slice(1), { path: [...n3.path, a2], branch: [...n3.branch, t14] });
              }
              break;
            case "record":
              if (0 === i3.length) break;
              if (rY(r12) && (r12 = {}), !rB(r12)) return;
              for (let [a3, o3, l2] of (0 == Object.keys(r12).length && i3.length > 0 && (r12[i3[0]] = void 0), t13.entries(r12, n3))) {
                if (a3 == j) continue;
                let t14 = r12[a3];
                return e13(l2, t14, i3.slice(1), { path: [...n3.path, String(a3)], branch: [...n3.branch, t14] });
              }
              break;
            case "union":
            case "object":
              if (rY(r12) && (r12 = {}), !rB(r12)) return;
              let o2 = {};
              for (let [a3, l2, s2] of t13.entries(r12, n3)) {
                let t14 = String(a3);
                if (t14 == i3[0]) {
                  let a4 = r12[t14];
                  return e13(s2, a4, i3.slice(1), { path: [...n3.path, t14], branch: [...n3.branch, a4] });
                }
                o2[t14] = s2;
              }
              return f.object(o2);
          }
          return t13;
        }(e12, i2.values, i2.path);
        return n2 ? function(e13, t13) {
          var r12, i3, n3, a2;
          let o2 = [];
          switch (e13.type) {
            case "array":
              if (t13.type.is(10)) {
                let t14 = e13.getSchema("items");
                o2.push(tf(r9(t14), { label: r6(t14) }));
                break;
              }
              o2.push(tf(r9(e13), { label: r6(e13) }));
              break;
            case "record":
              break;
            case "union":
            case "object":
              for (let [t14, a3, l2] of e13.entries({}, Q)) {
                let e14 = String(t14), a4 = { label: e14, info: null !== (n3 = null === (i3 = l2.getMeta("description")) || void 0 === i3 ? void 0 : null === (r12 = i3.split("\n")) || void 0 === r12 ? void 0 : r12[0]) && void 0 !== n3 ? n3 : "" };
                o2.push(tf(`${r2.stringifyPropertyName(e14)}: ${r9(l2)}`, a4));
              }
              break;
            case "boolean":
              o2.push({ label: "true", apply: "true" }, { label: "false", apply: "false" });
              break;
            case "enums":
              for (let t14 of null !== (a2 = e13.getSchema("enum")) && void 0 !== a2 ? a2 : []) o2.push({ label: `${t14}`, apply: JSON.stringify(t14) });
          }
          return o2;
        }(n2, i2.node) : [];
      };
      return (e13) => {
        let r11 = e13.matchBefore(/\w+/);
        return e13.explicit || r11 ? { from: (null == r11 ? void 0 : r11.text) ? null == r11 ? void 0 : r11.from : e13.pos, options: t11(e13.state, e13.pos), filter: true } : null;
      };
    }(t10)] }), eK.of([{ key: "Shift-Space", shift: tg }]), ty((e12) => {
      let r11 = th(e12.state).topNode, i2 = [...function* e13(t11) {
        yield t11;
        for (let r12 = t11.firstChild; null != r12; r12 = r12.nextSibling) yield* e13(r12);
      }(th(e12.state).topNode)].filter((e13) => e13.type.isError);
      if (i2.length > 0) return i2.map((e13) => ({ severity: "error", from: e13.from, to: e13.to, message: function(e14) {
        if (e14.parent) {
          if (e14.parent.type.is(4)) return "Invalid PropertyName`";
          if (e14.parent.type.is(7)) return "Object should have valid Property: `PropertyName: value`";
          if (e14.parent.type.is(2)) {
            if (e14.prevSibling && e14.prevSibling.type.is(3)) return "Document is already an Object with Properties, value is not allow to add`";
            if (e14.prevSibling && !e14.prevSibling.type.is(3)) return "Document is already a value, Property not allow to add`";
          }
          if (e14.parent.type.is(10) && e14.prevSibling && "," != e14.prevSibling.name) return "Array items need split by `,`";
        }
        return "Syntax Error";
      }(e13) }));
      let n2 = {}, a2 = rF(e12.state, r11, { onValueNode: (e13, t11) => {
        var r12;
        let i3 = r3.compile(t11);
        n2[i3] = [...null !== (r12 = n2[i3]) && void 0 !== r12 ? r12 : [], e13];
      }, invalidValueAsUndefined: true }), [o2] = t10.validate(a2);
      if (!o2) return [];
      let l2 = o2.failures(), s2 = [];
      for (let e13 of l2) {
        if ("never" === e13.type) continue;
        let t11 = r3.compile(e13.path);
        for (let r12 in n2) {
          let i3 = n2[r12];
          if (t11 == r12) for (let t12 of i3) s2.push({ from: t12.from, to: t12.to, severity: "error", message: e13.message });
          if ("/" != r12 && t11.startsWith(`${r12}/`) && ep(e13.value) && !t11.slice(`${r12}/`.length).includes("/")) for (let t12 of i3) s2.push({ from: t12.from, to: t12.to, severity: "error", message: `missing required field "${ey(e13.path)}"` });
        }
      }
      return s2;
    }), eK.of([tv])];
  })), a()), rI(() => eJ.updateListener.of((t10) => {
    if (t10.focusChanged) {
      tb(t10.view), e10.field$.next((e11) => {
        e11.error = 0 == tx(t10.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t10.docChanged) {
      if (tb(t10.view), tx(t10.state) > 0) e10.field$.next((e11) => {
        e11.error = ["配置有误"];
      });
      else try {
        let r11 = t10.state.doc.sliceString(0), i2 = tS.parse(r11);
        e10.field$.update(i2), e10.field$.next((e11) => {
          e11.error = null;
        });
      } catch (t11) {
        e10.field$.next((e11) => {
          e11.error = ["格式错误"];
        });
      }
    }
  })), () => l(rN, {});
}, { displayName: "Editor" }), it = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), ir = (e10) => {
  let { field: t10, value: r10 } = e10;
  return n(eQ, { component: "span", sx: { display: "block" }, children: [n(eQ, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t10, ":"] }), l("span", { children: r10 })] });
}, ii = (e10) => {
  let { method: t10, url: r10, params: i2 } = e10, a2 = J(i2);
  return n(eQ, { component: "span", sx: { fontWeight: "bold" }, children: [t10.toUpperCase(), n(eQ, { component: "span", sx: { fontWeight: "medium" }, children: [r10, a2 ? `?${a2}` : ""] }), "HTTP/*"] });
}, ia = (e10, t10) => {
  let r10 = (t11, i2) => i2 instanceof File || i2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t11}"${i2.name ? `; filename="${i2.name}"` : ""}
Content-Type: ${i2.type}

[File Content]
` : eT(i2) ? i2.map((e11) => r10(t11, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t11}"

${eS(i2) ? JSON.stringify(i2) : String(i2)}
`;
  return Object.entries(t10).map((e11) => {
    let [t11, i2] = e11;
    return r10(t11, i2);
  }).join("\n") + `${e10}--`;
}, io = u({ $default: L().optional() }, (e10, t10) => {
  let {} = e10, { slots: r10 } = t10;
  return () => {
    var e11;
    return l(eQ, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: l(eQ, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: l("code", { children: null === (e11 = r10.default) || void 0 === e11 ? void 0 : e11.call(r10) }) }) });
  };
}, { displayName: "CodeView" }), il = u({ request: L() }, (e10) => () => {
  let t10 = e10.request;
  return n(io, { children: [l(ii, { ...t10 }), l(c, { children: Object.entries({ ...it(), ...t10.headers }).toSorted().map((e11) => {
    let [t11, r10] = e11;
    return l(ir, { field: t11, value: r10 }, t11);
  }) }), t10.body && n(c, { children: [l("br", {}), function(e11) {
    if (iu(e11.headers).includes("multipart/form-data")) {
      let t11 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t11}` }, ia(t11, e11.body);
    }
    return iu(e11.headers).includes("application/x-www-form-urlencoded") ? J(e11.body) : ic(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t10)] })] });
}, { displayName: "HttpRequest" }), is = (e10, t10) => {
  let r10 = new Uint8Array(e10), i2 = "";
  for (let e11 = r10.byteLength, t11 = 0; t11 < e11; t11++) i2 += String.fromCharCode(r10[t11]);
  return `data:${t10};base64,${btoa(i2)}`;
}, id = u({ response: L() }, (e10, t10) => {
  let {} = t10;
  return () => {
    let t11 = e10.response;
    return iu(t11.headers).includes("image/") ? l("div", { children: l("img", { src: is(t11.body, iu(t11.headers)), alt: "" }) }) : n(io, { children: [n("span", { children: ["HTTP/* ", t11.status] }), l("br", {}), t11.headers && l(c, { children: Object.entries(t11.headers).map((e11) => {
      let [t12, r10] = e11;
      return l(ir, { field: t12, value: r10 }, t12);
    }) }), l("br", {}), t11.body ? ic(t11.headers) ? JSON.stringify(t11.body, null, 2) : `${t11.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function iu() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t10, r10] of Object.entries(e10)) if ("content-type" == t10.toLowerCase()) return r10;
  return "";
}
let ic = (e10) => iu(e10).includes("application/json"), ip = i({ operationID: Y() }, (e10) => t(t_.use().response$(e10.operationID), o((e11) => l(ih, { children: l(id, { response: e11 }) }))), { displayName: "ResponsePreview" }), ih = eX("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), im = i({ operation: L(), $default: L() }, (e10, r10) => {
  var i2, s2, d2, u2;
  let { slots: c2 } = r10, p2 = t_.use(), h2 = {};
  for (let t10 of null !== (i2 = e10.operation.parameters) && void 0 !== i2 ? i2 : []) {
    let e11 = Z.decode(t10.schema, (e12) => {
      var t11;
      return [null !== (t11 = p2.schema(e12)) && void 0 !== t11 ? t11 : {}, F(e12)];
    }).use(eD(`${t10.name}, in=${JSON.stringify(t10.in)}`));
    t10.required || (e11 = e11.optional()), ["object", "array"].includes(null !== (s2 = t10.schema.type) && void 0 !== s2 ? s2 : "") ? h2[t10.name] = e11.use(eZ(r7)) : h2[t10.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t10 = Object.entries(null !== (d2 = e10.operation.requestBody.content) && void 0 !== d2 ? d2 : {})[0];
    if (t10) {
      let [e11, r11] = t10, i3 = Z.decode(null !== (u2 = r11.schema) && void 0 !== u2 ? u2 : {}, (e12) => {
        var t11;
        return [null !== (t11 = p2.schema(e12)) && void 0 !== t11 ? t11 : {}, F(e12)];
      }).use(eD(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? h2.body = i3.use(eZ(r7)) : e11.includes("octet-stream") ? h2.body = i3.use(eZ(iv)) : h2.body = i3;
    }
  }
  let f2 = N(), m2 = V(), g2 = eF.of(U(h2), (() => {
    try {
      var e11;
      let t10 = m2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t10) ? t10[0] : t10) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  t(g2, eo((t10) => {
    p2.request(e10.operation.operationId, t10);
  }), eo((e11) => {
    f2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), a());
  let y2 = t(g2.inputs$, o((t10) => {
    let r11 = p2.asRequestConfigCreator(e10.operation.operationId);
    return r11 ? l(il, { request: r11(t10) }) : null;
  }));
  return () => {
    var t10;
    return n(eQ, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), g2.submit();
    }, children: [l(eQ, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...g2.fields(g2.typedef)].map((e11) => l(ig, { field$: e11 })) }), l(eQ, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: n(eQ, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [y2, l(eQ, { sx: { px: 8 }, children: l(eH, { type: "submit", children: "发起请求" }) }), l(ip, { operationID: e10.operation.operationId }), l(eQ, { sx: { flex: 1, overflow: "auto" }, children: null === (t10 = c2.default) || void 0 === t10 ? void 0 : t10.call(c2) })] }) })] }, e10.operation.operationId);
  };
}, { displayName: "RequestBuilder" }), ig = i({ field$: L() }, (e10, r10) => {
  let { field$: i2 } = e10, { render: a2 } = r10;
  return q(() => {
    i2.destroy();
  }), t(es([i2, i2.input$]), a2((e11) => {
    var t10, r11, a3, o2, s2;
    let [d2, u2] = e11, c2 = null !== (a3 = null === (t10 = i2.meta) || void 0 === t10 ? void 0 : t10.input) && void 0 !== a3 ? a3 : iy, p2 = null !== (o2 = null === (r11 = i2.meta) || void 0 === r11 ? void 0 : r11.readOnlyWhenInitialExist) && void 0 !== o2 && o2 && !!d2.initial;
    return l(tJ, { valued: !ep(null != u2 ? u2 : d2.initial), invalid: !!d2.error, focus: !!d2.focus, $label: n("span", { children: [null !== (s2 = i2.meta.label) && void 0 !== s2 ? s2 : i2.name, i2.optional ? "（非必填）" : ""] }), $supporting: n(tq, { children: [l(tW, { schema: i2.typedef }), l(tZ, { schema: i2.typedef })] }), $trailing: c2.$trailing, children: l(c2, { field$: i2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput" }), iy = u({ readOnly: A().optional(), field$: L() }, (e10) => () => {
  let { readOnly: t10, field$: r10, ...i2 } = e10;
  return l("input", { ...i2, "data-input": true, type: "text", readonly: t10, name: r10.name, value: r10.input, onChange: (e11) => {
    let t11 = e11.target.value;
    switch (r10.typedef.type) {
      case "number":
        try {
          r10.update(r10.typedef.create(parseFloat(t11)));
        } catch (e12) {
        }
        break;
      case "integer":
        try {
          r10.update(r10.typedef.create(parseInt(t11)));
        } catch (e12) {
        }
        break;
      case "boolean":
        try {
          r10.update(r10.typedef.create("false" !== t11 || !!t11));
        } catch (e12) {
        }
        break;
      default:
        r10.update(r10.typedef.create(t11));
    }
  }, onFocus: () => r10.focus(), onBlur: () => r10.blur() });
}, { displayName: "TextInput" }), iv = i({ field$: L(), readOnly: A().optional(), accept: Y().optional() }, (e10) => {
  let r10 = W(null);
  return t(r10, eo((t10) => {
    t10 && e10.field$.update(t10);
  }), z()), () => {
    var t10;
    let { readOnly: i2, accept: a2 } = e10;
    return n(eQ, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [l("input", { type: "file", name: e10.field$.name, readonly: i2, accept: a2, "data-file-input": true, onChange: (e11) => {
      var t11;
      let i3 = null === (t11 = e11.target.files) || void 0 === t11 ? void 0 : t11[0];
      i3 && (r10.value = i3);
    } }), l(eE, { path: eU }), l("span", { children: null === (t10 = r10.value) || void 0 === t10 ? void 0 : t10.name })] });
  };
}, { displayName: "FileSelectInput" }), ib = i({ operationId: Y() }, (e10, r10) => {
  let {} = r10, i2 = t_.use(), a2 = t(e10.operationId$, ee((e11) => i2.operation$(e11))), s2 = t(a2, ed((e11) => !!e11)), d2 = t(s2, o((e11) => {
    var t10;
    return n(iO, { sx: { containerStyle: null !== (t10 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t10 ? t10 : "sys.secondary-container" }, children: [l("div", { "data-operation-method": true, children: e11.method }), n("div", { "data-operation-desc": true, children: [l("div", { "data-operation-path": true, children: e11.path }), n("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), u2 = t(s2, o((e11) => {
    var t10;
    return l(eQ, { sx: { px: 24 }, children: l(eY, { text: null !== (t10 = e11.description) && void 0 !== t10 ? t10 : "" }) });
  })), p2 = t(s2, o((e11) => {
    var t10;
    return l(im, { operation: e11, children: l(c, { children: Object.entries(null !== (t10 = e11.responses) && void 0 !== t10 ? t10 : {}).map((e12) => {
      let [t11, r11] = e12;
      return l(tH, { code: t11, response: r11 }, t11);
    }) }) }, e11.operationId);
  }));
  return t(a2, o((e11) => e11 ? n(ix, { children: [d2, u2, l(eQ, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: l(eQ, { sx: { flex: 1, overflow: "auto" }, children: p2 }) })] }, e11.operationId) : null));
}, { displayName: "OperationView" }), ix = eX("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), iO = eX("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  t_ as O,
  ib as a,
  tR as b
};
