var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _eo_instances, r_get, a_fn;
import { I as e, e as t, c as r, a, d as i, s as n, k as o, j as l, C as d, R as s, b as p, F as c, f as u, D as m, o as h, E as y, G as f, y as v } from "./lib-nodepkg-vuekit.B9RHHubB.chunk.js";
import { S as g, s as x, b, c as $, e as _, r as w, f as P, g as I, o as S } from "./lib-nodepkg-typedef.B0hWBNEX.chunk.js";
import { c as k, a as N, p as O, t as C } from "./vendor-innoai-tech-fetcher.B-6FC7X5.chunk.js";
import { B as j, s as q, b as D, m as F, E as L, o as B, S as R, t as T, k as W, l as A, c as J, n as H } from "./vendor-rxjs.ByE15jUQ.chunk.js";
import { w as M, g as V, a as z, d as E, m as U } from "./vendor-innoai-tech-lodash.XmF8H4xo.chunk.js";
import { s as K, B as G } from "./lib-nodepkg-vueuikit.C-SQymNf.chunk.js";
import { M as Q } from "./lib-nodepkg-vuemarkdown.BcdfvqRe.chunk.js";
import { l as X, i as Y, F as Z } from "./lib-nodepkg-vueformdata.HuOk-IDi.chunk.js";
import { F as ee, e as et, I as er } from "./lib-nodepkg-vuematerial.mnV9EuoY.chunk.js";
import { J as ea, a as ei, b as en } from "./lib-nodepkg-jsoneditor.CER9-75V.chunk.js";
const _eo = class _eo extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _eo_instances);
    __privateAdd(this, _e, k({ paramsSerializer: O, transformRequestBody: C }));
    __privateAdd(this, _t, new j(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _eo({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e2) {
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      let r2 = /* @__PURE__ */ t2.get(e2);
      return r2 ? F(r2, r2.error$) : L;
    }));
  }
  requesting$(e2) {
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      var r2, a2;
      return null !== (a2 = null === (r2 = /* @__PURE__ */ t2.get(e2)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== a2 ? a2 : B(false);
    }));
  }
  asRequestConfigCreator(e2) {
    var t2, r2;
    let a2 = /* @__PURE__ */ __privateMethod(this, _eo_instances, a_fn).call(this, e2);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e3) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _eo_instances, r_get) + ed(a2.path, e3), params: /* @__PURE__ */ M(e3, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e5) => "query" == e5.in).map((e5) => e5.name)), headers: { ...M(e3, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e5) => "header" == e5.in).map((e5) => e5.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e3.body, inputs: e3 };
    };
  }
  request(e2, t2) {
    let r2 = /* @__PURE__ */ __privateGet(this, _t).value.get(e2);
    if (!r2) {
      let t3 = /* @__PURE__ */ this.asRequestConfigCreator(e2);
      if (!t3) return;
      r2 = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign(t3, { operationID: e2, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e2, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e2) {
    return t(this, /* @__PURE__ */ q((t2) => {
      for (let r2 of el(t2, { operationId: e2 })) if (r2) return B(r2);
      return B(null);
    }));
  }
  operations$(e2) {
    return t(this, /* @__PURE__ */ q((t2) => B([.../* @__PURE__ */ el(t2, e2)])));
  }
  schema$(e2) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e2.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, /* @__PURE__ */ q((e3) => {
      if (i2) {
        var t2;
        return B(null !== (t2 = /* @__PURE__ */ V(e3, i2)) && void 0 !== t2 ? t2 : null);
      }
      return B(null);
    }), /* @__PURE__ */ D((e3) => e3 ? { ...e3, $id: i2[i2.length - 1] } : e3));
  }
  schema(e2) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e2.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = /* @__PURE__ */ V(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_eo_instances = new WeakSet();
r_get = function() {
  var e2, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e2 = t2[0]) || void 0 === e2 ? void 0 : e2.url) && void 0 !== r2 ? r2 : "";
};
a_fn = function(e2) {
  for (let t2 of el(this.value, { operationId: e2 })) if (t2) return t2;
  return null;
};
let eo = _eo;
function* el(e2, t2) {
  for (let [n2, o2] of Object.entries(e2.paths)) for (let [e3, l2] of Object.entries(o2)) {
    var r2, a2, i2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (a2 = l2.tags) && void 0 !== a2 ? a2 : []).includes(t2.tag))) {
      if (t2.operationId) {
        if (t2.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(/* @__PURE__ */ t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e3, path: n2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let ed = function(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e2.replace(/{([\s\S]+?)}/g, (e3, r2) => [].concat(t2[r2] || e3).join(","));
}, es = /* @__PURE__ */ r(() => eo.empty(), { name: "OpenAPI" }), ep = (e2) => (t2, r2) => t2[e2] == r2[e2] ? 0 : t2[e2] < r2[e2] ? -1 : 1, ec = /* @__PURE__ */ a((r2, a2) => {
  let {} = r2, {} = a2, p2 = /* @__PURE__ */ es.use(), c2 = new e({ operationId: void 0 }), u2 = new R();
  t(u2, /* @__PURE__ */ W(200), /* @__PURE__ */ T((e2) => {
    c2.next((t2) => {
      t2.operationId = `*${null != e2 ? e2 : ""}`;
    });
  }), /* @__PURE__ */ n());
  let m2 = /* @__PURE__ */ t(c2, /* @__PURE__ */ q((e2) => p2.operations$(e2)), /* @__PURE__ */ o((e2) => {
    let t2 = /* @__PURE__ */ Object.groupBy(e2, (e3) => e3.group);
    return /* @__PURE__ */ i(em, { children: [/* @__PURE__ */ l(eh, { children: /* @__PURE__ */ l("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e3) => {
      u2.next(e3.target.value);
    } }) }), /* @__PURE__ */ l(ey, { sx: { flex: 1, overflow: "scroll" }, children: /* @__PURE__ */ Object.entries(t2).toSorted().map((e3) => {
      let [t3, r3] = e3;
      return /* @__PURE__ */ i("div", { "data-nav-group": true, children: [/* @__PURE__ */ l("div", { "data-nav-group-heading": true, children: t3 }), /* @__PURE__ */ l("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(/* @__PURE__ */ ep("operationId")).map((e5) => {
        var t4;
        return /* @__PURE__ */ i(ev, { component: d, to: `/operations/${e5.operationId}`, children: [/* @__PURE__ */ l(G, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e5.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e5.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-id": true, children: e5.operationId }), e5.summary ? /* @__PURE__ */ l("div", { "data-operation-summary": true, children: e5.summary != e5.operationId ? e5.summary : /* @__PURE__ */ l("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => /* @__PURE__ */ i(eu, { children: [m2, /* @__PURE__ */ l(ef, { children: /* @__PURE__ */ l(s, {}) })] });
}, { displayName: "OpenAPIView" }), eu = /* @__PURE__ */ K("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), em = /* @__PURE__ */ K("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eh = /* @__PURE__ */ K("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), ey = /* @__PURE__ */ K("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ef = /* @__PURE__ */ K("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), ev = /* @__PURE__ */ K("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eg = /* @__PURE__ */ K("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), ex = /* @__PURE__ */ K("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eb = /* @__PURE__ */ K("div", (e2, t2) => {
  let { slots: r2 } = t2, a2 = /* @__PURE__ */ ew.use();
  return (t3) => {
    var i2, n2;
    return /* @__PURE__ */ l(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e2.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), e$ = /* @__PURE__ */ K("div", (e2, t2) => {
  let {} = t2;
  return (t3) => {
    var r2;
    let a2 = null !== (r2 = /* @__PURE__ */ g.metaProp(e2.schema, "description")) && void 0 !== r2 ? r2 : "";
    return 0 == a2.length ? null : /* @__PURE__ */ l(t3, { children: /* @__PURE__ */ l(Q, { text: a2 }) });
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), e_ = (e2) => {
  let { name: t2, value: r2, extra: a2 } = e2;
  return "" == r2 ? null : /* @__PURE__ */ l(eb, { children: /* @__PURE__ */ i(eg, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(eg, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, /* @__PURE__ */ Object.entries(null != a2 ? a2 : {}).map((e3) => {
    let [t3, r3] = e3;
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ i(eg, { sx: { opacity: 0.5 }, children: [",", " "] }), /* @__PURE__ */ l(eg, { sx: { opacity: 0.5 }, children: t3 }), /* @__PURE__ */ i(eg, { sx: { opacity: 0.5 }, children: [":", " "] }), /* @__PURE__ */ l(eg, { sx: { opacity: 0.7 }, children: r3 })] });
  }), /* @__PURE__ */ l(eg, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, ew = /* @__PURE__ */ r(() => ({ indent: 0 }), { name: "IntentContext" }), eP = /* @__PURE__ */ p((e2, t2) => {
  let {} = e2, { slots: r2 } = t2, a2 = /* @__PURE__ */ ew.use();
  return () => {
    var e3;
    return /* @__PURE__ */ l(ew, { value: { indent: a2.indent + 1 }, children: null === (e3 = r2.default) || void 0 === e3 ? void 0 : e3.call(r2) });
  };
}, { displayName: "Indent" });
class eI {
  constructor(e2, t2) {
    this.id = e2, this.parent = t2;
  }
  child(e2) {
    return new eI(e2, this);
  }
  safe(e2) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e2) return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let eS = /* @__PURE__ */ r(() => new eI("")), ek = /* @__PURE__ */ a((e2) => {
  let t2 = /* @__PURE__ */ eS.use();
  return () => {
    let r2 = e2.schema, a2 = /* @__PURE__ */ g.schemaProp(e2.schema, "$ref"), n2 = "intersection" == (r2 = /* @__PURE__ */ g.schemaProp(e2.schema, g.unwrap)()).type || "object" == r2.type || "union" == r2.type || "record" == r2.type || "array" == r2.type || "union" == r2.type;
    return /* @__PURE__ */ i(eS, { value: /* @__PURE__ */ t2.child(a2), children: [n2 && /* @__PURE__ */ l(d, { to: `#${a2}`, children: /* @__PURE__ */ i(eg, { id: a2, children: [a2, " "] }) }), t2.safe(a2) && /* @__PURE__ */ l(eN, { schema: r2 })] });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eN = a((e2) => {
  let t2 = e2.schema;
  return g.schemaProp(t2, "$ref") ? /* @__PURE__ */ l(ek, { schema: t2 }) : () => {
    var e3, r2, a2, n2, o2, d2, s2, p2;
    switch (t2.type) {
      case "union":
        return /* @__PURE__ */ l(c, { children: null === (e3 = /* @__PURE__ */ g.schemaProp(t2, "oneOf")) || void 0 === e3 ? void 0 : e3.map((e5, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ i(eg, { children: [" ", " | ", " "] }), /* @__PURE__ */ l(eN, { schema: e5 })] })) });
      case "intersection":
        return /* @__PURE__ */ l(eg, { children: null === (r2 = /* @__PURE__ */ g.schemaProp(t2, "allOf")) || void 0 === r2 ? void 0 : r2.filter((e5) => !Object.keys(e5).length).map((e5, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ l(eg, { children: "&" }), /* @__PURE__ */ l(eN, { schema: e5 })] })) });
      case "array":
        return /* @__PURE__ */ i(eg, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(eg, { children: "Array<" }), /* @__PURE__ */ l(eN, { schema: null !== (a2 = /* @__PURE__ */ g.schemaProp(t2, "items")) && void 0 !== a2 ? a2 : b() }), /* @__PURE__ */ l(eg, { children: ">" })] });
      case "object":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(eg, { children: "{" }), /* @__PURE__ */ l(eP, { children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (n2 = /* @__PURE__ */ g.schemaProp(t2, "properties")) && void 0 !== n2 ? n2 : {}).map((e5) => {
          var r3;
          let [a3, n3] = e5;
          return n3 ? /* @__PURE__ */ l(c, { children: /* @__PURE__ */ i(eb, { spacing: 2, children: [/* @__PURE__ */ l(e$, { schema: n3 }), /* @__PURE__ */ i(eg, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(ex, { nullable: /* @__PURE__ */ g.schemaProp(t2, "nullable"), deprecated: /* @__PURE__ */ g.schemaProp(t2, "deprecated"), optional: !(null !== (r3 = /* @__PURE__ */ g.schemaProp(t2, "required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), /* @__PURE__ */ l(eg, { sx: { mr: "1em" }, children: ":" }), /* @__PURE__ */ l(eN, { schema: n3 })] })] }) }) : null;
        }) }) }), /* @__PURE__ */ l(eg, { children: "}" })] });
      case "record":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(eg, { children: "{" }), g.schemaProp(t2, "additionalProperties") && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ l(eP, { children: /* @__PURE__ */ i(eb, { children: [/* @__PURE__ */ i(eg, { sx: { mr: 1 }, children: ["[K:", " "] }), /* @__PURE__ */ l(eN, { schema: null !== (o2 = /* @__PURE__ */ g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : x() }), /* @__PURE__ */ i(eg, { sx: { mr: 1 }, children: ["]:", " "] }), /* @__PURE__ */ l(eN, { schema: null !== (d2 = /* @__PURE__ */ g.schemaProp(t2, "additionalProperties")) && void 0 !== d2 ? d2 : b() })] }) }) }), /* @__PURE__ */ l(eg, { children: "}" })] });
      case "enums": {
        let e5 = null !== (s2 = /* @__PURE__ */ g.schemaProp(t2, "enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e5.length) return /* @__PURE__ */ l(eg, { children: /* @__PURE__ */ JSON.stringify(e5[0]) });
        let r3 = "any";
        return e5.length > 0 && (r3 = typeof e5[0]), /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(eg, { sx: { fontWeight: "bold" }, children: r3 }), /* @__PURE__ */ l(eP, { children: /* @__PURE__ */ e5.map((e6, r4) => {
          var a3;
          return /* @__PURE__ */ l(e_, { name: "enum", value: `${e6}`, extra: (null === (a3 = /* @__PURE__ */ g.metaProp(t2, "enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: /* @__PURE__ */ JSON.stringify(g.metaProp(t2, "enumLabels")[r4]) } : {} }, e6);
        }) })] });
      }
    }
    let [u2, m2, h2] = [t2.type, /* @__PURE__ */ g.schemaProp(t2, "format"), /* @__PURE__ */ g.schemaProp(t2, "default")];
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(eg, { sx: { fontWeight: "bold" }, children: u2 || "any" }), /* @__PURE__ */ i(eP, { children: [m2 && /* @__PURE__ */ l(e_, { name: "format", value: m2 }), !z(h2) && /* @__PURE__ */ l(e_, { name: "default", value: h2 }), !eO(t2) && /* @__PURE__ */ l(e_, { name: "validate", value: eO(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(/* @__PURE__ */ g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eO(e2) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e2, t2));
}
let eC = /* @__PURE__ */ a({ code: /* @__PURE__ */ $(), response: /* @__PURE__ */ $() }, (e2) => {
  let t2 = /* @__PURE__ */ es.use();
  return () => {
    var r2, a2;
    return /* @__PURE__ */ i(ej, { children: [/* @__PURE__ */ l(eq, { "data-failed": /* @__PURE__ */ function(e3) {
      try {
        return Number(e3) >= 400;
      } catch (e5) {
        return false;
      }
    }(e2.code), children: e2.code }), /* @__PURE__ */ i(G, { sx: { pl: "4em" }, children: [/* @__PURE__ */ l(c, { children: null === (r2 = e2.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e3) => function() {
      let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e5.startsWith("StatusError{") ? e5.slice(12, e5.length - 1).split(",").reduce((e6, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return z(r3) || z(a3) ? e6 : { ...e6, [r3]: a3 };
      }, {}) : null;
    }(e3)).map((e3) => e3 ? /* @__PURE__ */ l(G, { sx: { mb: 16 }, children: /* @__PURE__ */ i(eb, { spacing: 0, children: [/* @__PURE__ */ i(eg, { children: ["{", " "] }), /* @__PURE__ */ l(eP, { children: /* @__PURE__ */ Object.entries(e3).map((e5) => {
      let [t3, r3] = e5;
      return "code" === t3 ? null : /* @__PURE__ */ i(eb, { children: [/* @__PURE__ */ l(ex, { children: t3 }), /* @__PURE__ */ l(eg, { children: ": " }), /* @__PURE__ */ l(eg, { children: r3 })] });
    }) }), /* @__PURE__ */ i(eg, { children: [" ", "}"] })] }) }) : null) }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (a2 = e2.response.content) && void 0 !== a2 ? a2 : {}).map((e3) => {
      let [r3, { schema: a3 }] = e3;
      return /* @__PURE__ */ i(eD, { children: [/* @__PURE__ */ l(eb, { spacing: 0, children: /* @__PURE__ */ l(eN, { schema: /* @__PURE__ */ _.decode(a3, (e5) => {
        var r4;
        return [null !== (r4 = /* @__PURE__ */ t2.schema(e5)) && void 0 !== r4 ? r4 : {}, /* @__PURE__ */ w(e5)];
      }) }) }), /* @__PURE__ */ l("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), ej = /* @__PURE__ */ K("section", { displayName: "ResponseSection" })({}), eq = /* @__PURE__ */ K("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eD = /* @__PURE__ */ K("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eF = /* @__PURE__ */ K("div", (e2, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, n2, o2, d2;
    let s2 = e2.valued, p2 = e2.invalid, c2 = e2.disabled, m2 = /* @__PURE__ */ (null !== (d2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== d2 ? d2 : []).map((e3) => {
      if ("input" === e3.type) {
        var t4, r3, a3, i2, n3, o3;
        return s2 = !!(null !== (n3 = null !== (i2 = null === (t4 = e3.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i2 ? i2 : null === (r3 = e3.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n3 ? n3 : s2), c2 = null !== (o3 = null === (a3 = e3.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, u(e3, { disabled: c2 });
      }
      return u(e3);
    });
    return /* @__PURE__ */ i(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e2.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ i("div", { "data-input-container": true, children: [/* @__PURE__ */ i("div", { "data-input-decorator-container": true, children: [/* @__PURE__ */ l("div", { "data-input-decorator-leading": true }), /* @__PURE__ */ l("div", { "data-input-decorator-label": true, children: /* @__PURE__ */ l("div", { "data-input-label": true, children: null === (n2 = r2.label) || void 0 === n2 ? void 0 : n2.call(r2) }) }), /* @__PURE__ */ l("div", { "data-input-decorator-trailing": true })] }), /* @__PURE__ */ i("div", { "data-input-row": true, children: [r2.leading && /* @__PURE__ */ l(eL, { role: "leading", children: /* @__PURE__ */ r2.leading() }), m2, r2.trailing && /* @__PURE__ */ l(eL, { role: "trailing", children: /* @__PURE__ */ r2.trailing() })] })] }), r2.supporting && /* @__PURE__ */ l("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eL = /* @__PURE__ */ K("div", { role: /* @__PURE__ */ P(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eB = /* @__PURE__ */ a((e2, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ ea.of(e2.field$.typedef, z(e2.field$.input) ? void 0 : e2.field$.input);
  return t(a2, /* @__PURE__ */ A(1), /* @__PURE__ */ T((t2) => {
    e2.field$.update(t2);
  }), /* @__PURE__ */ n()), () => /* @__PURE__ */ l(eR, { children: /* @__PURE__ */ l(ei, { value: a2, children: /* @__PURE__ */ l(en, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eR = /* @__PURE__ */ K("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eT = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eW = (e2) => {
  let { field: t2, value: r2 } = e2;
  return /* @__PURE__ */ i(G, { component: "span", sx: { display: "block" }, children: [/* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), /* @__PURE__ */ l("span", { children: r2 })] });
}, eA = (e2) => {
  let { method: t2, url: r2, params: a2 } = e2, n2 = /* @__PURE__ */ O(a2);
  return /* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "bold" }, children: [/* @__PURE__ */ t2.toUpperCase(), /* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "medium" }, children: [r2, n2 ? `?${n2}` : ""] }), "HTTP/*"] });
}, eJ = (e2, t2) => {
  let r2 = (t3, a2) => a2 instanceof File || a2 instanceof Blob ? `${e2}
Content-Disposition: form-data; name="${t3}"${a2.name ? `; filename="${a2.name}"` : ""}
Content-Type: ${a2.type}

[File Content]
` : E(a2) ? a2.map((e3) => r2(t3, e3)).join("\n") : `${e2}
Content-Disposition: form-data; name="${t3}"

${U(a2) ? JSON.stringify(a2) : String(a2)}
`;
  return Object.entries(t2).map((e3) => {
    let [t3, a2] = e3;
    return r2(t3, a2);
  }).join("\n") + `${e2}--`;
}, eH = /* @__PURE__ */ p({ $default: /* @__PURE__ */ $().optional() }, (e2, t2) => {
  let {} = e2, { slots: r2 } = t2;
  return () => {
    var e3;
    return /* @__PURE__ */ l(G, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: /* @__PURE__ */ l(G, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: /* @__PURE__ */ l("code", { children: null === (e3 = r2.default) || void 0 === e3 ? void 0 : e3.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), eM = /* @__PURE__ */ p({ request: /* @__PURE__ */ $() }, (e2) => () => {
  let t2 = e2.request;
  return /* @__PURE__ */ i(eH, { children: [/* @__PURE__ */ l(eA, { ...t2 }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries({ ...eT(), ...t2.headers }).toSorted().map((e3) => {
    let [t3, r2] = e3;
    return /* @__PURE__ */ l(eW, { field: t3, value: r2 }, t3);
  }) }), t2.body && /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l("br", {}), /* @__PURE__ */ function(e3) {
    if (eE(e3.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e3.headers = { ...e3.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, eJ(t3, e3.body);
    }
    return eE(e3.headers).includes("application/x-www-form-urlencoded") ? O(e3.body) : eU(e3.headers) ? JSON.stringify(e3.body, null, 2) : e3.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), eV = (e2, t2) => {
  let r2 = new Uint8Array(e2), a2 = "";
  for (let e3 = r2.byteLength, t3 = 0; t3 < e3; t3++) a2 += /* @__PURE__ */ String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, ez = /* @__PURE__ */ p({ response: /* @__PURE__ */ $() }, (e2, t2) => {
  let {} = t2;
  return () => {
    let t3 = e2.response;
    return eE(t3.headers).includes("image/") ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("img", { src: /* @__PURE__ */ eV(t3.body, /* @__PURE__ */ eE(t3.headers)), alt: "" }) }) : /* @__PURE__ */ i(eH, { children: [/* @__PURE__ */ i("span", { children: ["HTTP/* ", t3.status] }), /* @__PURE__ */ l("br", {}), t3.headers && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(t3.headers).map((e3) => {
      let [t4, r2] = e3;
      return /* @__PURE__ */ l(eW, { field: t4, value: r2 }, t4);
    }) }), /* @__PURE__ */ l("br", {}), t3.body ? eU(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function eE() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e2)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let eU = (e2) => eE(e2).includes("application/json"), eK = /* @__PURE__ */ a({ operationID: /* @__PURE__ */ x() }, (e2) => t(/* @__PURE__ */ es.use().response$(e2.operationID), /* @__PURE__ */ o((e3) => /* @__PURE__ */ l(eG, { children: /* @__PURE__ */ l(ez, { response: e3 }) }))), { displayName: "ResponsePreview" }), eG = /* @__PURE__ */ K("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), eQ = /* @__PURE__ */ a((e2, r2) => {
  var a2, d2, s2, p2;
  let { slots: c2 } = r2, u2 = /* @__PURE__ */ es.use(), m2 = {};
  for (let t2 of null !== (a2 = e2.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e3 = /* @__PURE__ */ _.decode(t2.schema, (e5) => {
      var t3;
      return [null !== (t3 = /* @__PURE__ */ u2.schema(e5)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e5)];
    }).use(/* @__PURE__ */ X(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e3 = /* @__PURE__ */ e3.optional()), ["object", "array"].includes(null !== (d2 = t2.schema.type) && void 0 !== d2 ? d2 : "") ? m2[t2.name] = /* @__PURE__ */ e3.use(/* @__PURE__ */ Y(eB)) : m2[t2.name] = e3;
  }
  if (e2.operation.requestBody) {
    let t2 = Object.entries(null !== (s2 = e2.operation.requestBody.content) && void 0 !== s2 ? s2 : {})[0];
    if (t2) {
      let [e3, r3] = t2, a3 = /* @__PURE__ */ _.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e5) => {
        var t3;
        return [null !== (t3 = /* @__PURE__ */ u2.schema(e5)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e5)];
      }).use(/* @__PURE__ */ X(`body, content-type = ${JSON.stringify(e3)}`));
      e3.includes("json") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ Y(eB)) : e3.includes("octet-stream") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ Y(eZ)) : m2.body = a3;
    }
  }
  let h2 = /* @__PURE__ */ y(), v2 = /* @__PURE__ */ f(), g2 = /* @__PURE__ */ Z.of(/* @__PURE__ */ S(m2), /* @__PURE__ */ (() => {
    try {
      var e3;
      let t2 = v2.query.params;
      return JSON.parse(/* @__PURE__ */ atob(null !== (e3 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e3 ? e3 : ""));
    } catch (e5) {
    }
    return {};
  })());
  t(g2, /* @__PURE__ */ T((t2) => {
    u2.request(e2.operation.operationId, t2);
  }), /* @__PURE__ */ T((e3) => {
    h2.replace({ query: { params: /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(e3)) } });
  }), /* @__PURE__ */ n());
  let x2 = /* @__PURE__ */ t(g2.inputs$, /* @__PURE__ */ o((t2) => {
    let r3 = /* @__PURE__ */ u2.asRequestConfigCreator(e2.operation.operationId);
    return r3 ? /* @__PURE__ */ l(eM, { request: /* @__PURE__ */ r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return /* @__PURE__ */ i(G, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e3) => {
      e3.preventDefault(), g2.submit();
    }, children: [/* @__PURE__ */ l(G, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: /* @__PURE__ */ [.../* @__PURE__ */ g2.fields(g2.typedef)].map((e3) => /* @__PURE__ */ l(eX, { field$: e3 })) }), /* @__PURE__ */ l(G, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ i(G, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [x2, /* @__PURE__ */ l(G, { sx: { px: 8 }, children: /* @__PURE__ */ l(ee, { type: "submit", children: "发起请求" }) }), /* @__PURE__ */ l(eK, { operationID: e2.operation.operationId }), /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e2.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), eX = /* @__PURE__ */ a((e2, r2) => {
  let { field$: a2 } = e2, { render: n2 } = r2;
  return m(() => {
    a2.destroy();
  }), t(/* @__PURE__ */ J([a2, a2.input$]), /* @__PURE__ */ n2((e3) => {
    var t2, r3, n3;
    let [o2, d2] = e3, s2 = null !== (t2 = /* @__PURE__ */ g.metaProp(a2.typedef, "inputBy")) && void 0 !== t2 ? t2 : eY, p2 = null !== (r3 = /* @__PURE__ */ g.metaProp(a2.typedef, "readOnlyWhenInitialExist")) && void 0 !== r3 && r3 && !!o2.initial;
    return /* @__PURE__ */ l(eF, { valued: !z(null != d2 ? d2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: /* @__PURE__ */ i("span", { children: [null !== (n3 = a2.meta.label) && void 0 !== n3 ? n3 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: /* @__PURE__ */ i(eb, { children: [/* @__PURE__ */ l(e$, { schema: a2.typedef }), /* @__PURE__ */ l(eN, { schema: a2.typedef })] }), $trailing: s2.$trailing, children: /* @__PURE__ */ l(s2, { field$: a2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), eY = /* @__PURE__ */ p({ readOnly: /* @__PURE__ */ I().optional(), field$: /* @__PURE__ */ $() }, (e2) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e2;
  return /* @__PURE__ */ l("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e3) => {
    let t3 = e3.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseFloat(t3)));
        } catch (e5) {
        }
        break;
      case "integer":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseInt(t3)));
        } catch (e5) {
        }
        break;
      case "boolean":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create("false" !== t3 || !!t3));
        } catch (e5) {
        }
        break;
      default:
        r2.update(/* @__PURE__ */ r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), eZ = /* @__PURE__ */ a((e2) => {
  let r2 = /* @__PURE__ */ h(null);
  return t(r2, /* @__PURE__ */ T((t2) => {
    t2 && e2.field$.update(t2);
  }), /* @__PURE__ */ v()), () => {
    var t2;
    let { readOnly: a2, accept: n2 } = e2;
    return /* @__PURE__ */ i(G, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [/* @__PURE__ */ l("input", { type: "file", name: e2.field$.name, readonly: a2, accept: n2, "data-file-input": true, onChange: (e3) => {
      var t3;
      let a3 = null === (t3 = e3.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), /* @__PURE__ */ l(er, { path: et }), /* @__PURE__ */ l("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), e0 = /* @__PURE__ */ a({ operationId: /* @__PURE__ */ x() }, (e2, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ es.use(), n2 = /* @__PURE__ */ t(e2.operationId$, /* @__PURE__ */ q((e3) => a2.operation$(e3))), d2 = /* @__PURE__ */ t(n2, /* @__PURE__ */ H((e3) => !!e3)), s2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ i(e4, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e3.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [/* @__PURE__ */ l("div", { "data-operation-method": true, children: e3.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-path": true, children: e3.path }), /* @__PURE__ */ i("div", { "data-operation-summary": true, children: [e3.summary, " ", e3.operationId != e3.summary ? e3.operationId : ""] })] })] });
  })), p2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ l(G, { sx: { px: 24 }, children: /* @__PURE__ */ l(Q, { text: null !== (t2 = e3.description) && void 0 !== t2 ? t2 : "" }) });
  })), u2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ l(eQ, { operation: e3, children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (t2 = e3.responses) && void 0 !== t2 ? t2 : {}).map((e5) => {
      let [t3, r3] = e5;
      return /* @__PURE__ */ l(eC, { code: t3, response: r3 }, t3);
    }) }) }, e3.operationId);
  }));
  return t(n2, /* @__PURE__ */ o((e3) => e3 ? /* @__PURE__ */ i(e1, { children: [s2, p2, /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "auto" }, children: u2 }) })] }, e3.operationId) : null));
}, { displayName: "OperationView" }), e1 = /* @__PURE__ */ K("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), e4 = /* @__PURE__ */ K("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  es as O,
  e0 as a,
  ec as b
};
