var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _en_instances, r_get, a_fn;
import { I as e, r as t, c as r, a, e as i, s as n, i as o, j as l, C as d, R as s, d as p, F as c, b as u, D as h, x as m, E as y, G as v, y as f } from "./lib-nodepkg-vuekit.BVm_OvBH.chunk.js";
import { s as g, d as x, J as b, f as $, c as S, b as _, e as w, o as I } from "./lib-nodepkg-typedef.Bm5O1R9v.chunk.js";
import { c as k, a as N, p as O, t as C } from "./vendor-innoai-tech-fetcher.D0X3Ipz1.chunk.js";
import { B as j, s as q, m as D, g as F, E as L, o as B, S as P, t as R, h as T, j as W, c as J, k as M } from "./vendor-rxjs.BBfHJXPy.chunk.js";
import { B as A, g as H, a as V, j as z, e as E } from "./vendor-innoai-tech-lodash.3H0k6Xl3.chunk.js";
import { s as U, B as K } from "./lib-nodepkg-vueuikit.BdTmrO-g.chunk.js";
import { M as G } from "./lib-nodepkg-vuemarkdown.R0E-8OLi.chunk.js";
import { l as Q, i as X, F as Y } from "./lib-nodepkg-vueformdata.BCJwutcB.chunk.js";
import { F as Z, g as ee, I as et } from "./lib-nodepkg-vuematerial.GHLSZFRE.chunk.js";
import { J as er, a as ea, b as ei } from "./lib-nodepkg-jsoneditor.Bte-pz-R.chunk.js";
const _en = class _en extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _en_instances);
    __privateAdd(this, _e, k({ paramsSerializer: O, transformRequestBody: C }));
    __privateAdd(this, _t, new j(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _en({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
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
    let a2 = /* @__PURE__ */ __privateMethod(this, _en_instances, a_fn).call(this, e2);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e3) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _en_instances, r_get) + el(a2.path, e3), params: /* @__PURE__ */ A(e3, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e4) => "query" == e4.in).map((e4) => e4.name)), headers: { ...A(e3, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e4) => "header" == e4.in).map((e4) => e4.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e3.body, inputs: e3 };
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
      for (let r2 of eo(t2, { operationId: e2 })) if (r2) return B(r2);
      return B(null);
    }));
  }
  operations$(e2) {
    return t(this, /* @__PURE__ */ q((t2) => B([.../* @__PURE__ */ eo(t2, e2)])));
  }
  schema$(e2) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e2.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, /* @__PURE__ */ q((e3) => {
      if (i2) {
        var t2;
        return B(null !== (t2 = /* @__PURE__ */ H(e3, i2)) && void 0 !== t2 ? t2 : null);
      }
      return B(null);
    }), /* @__PURE__ */ D((e3) => e3 ? { ...e3, $id: i2[i2.length - 1] } : e3));
  }
  schema(e2) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e2.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = /* @__PURE__ */ H(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_en_instances = new WeakSet();
r_get = function() {
  var e2, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e2 = t2[0]) || void 0 === e2 ? void 0 : e2.url) && void 0 !== r2 ? r2 : "";
};
a_fn = function(e2) {
  for (let t2 of eo(this.value, { operationId: e2 })) if (t2) return t2;
  return null;
};
let en = _en;
function* eo(e2, t2) {
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
let el = function(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e2.replace(/{([\s\S]+?)}/g, (e3, r2) => [].concat(t2[r2] || e3).join(","));
}, ed = /* @__PURE__ */ r(() => en.empty(), { name: "OpenAPI" }), es = (e2) => (t2, r2) => t2[e2] == r2[e2] ? 0 : t2[e2] < r2[e2] ? -1 : 1, ep = /* @__PURE__ */ a((r2, a2) => {
  let {} = r2, {} = a2, p2 = /* @__PURE__ */ ed.use(), c2 = new e({ operationId: void 0 }), u2 = new P();
  t(u2, /* @__PURE__ */ T(200), /* @__PURE__ */ R((e2) => {
    c2.next((t2) => {
      t2.operationId = `*${null != e2 ? e2 : ""}`;
    });
  }), /* @__PURE__ */ n());
  let h2 = /* @__PURE__ */ t(c2, /* @__PURE__ */ q((e2) => p2.operations$(e2)), /* @__PURE__ */ o((e2) => {
    let t2 = /* @__PURE__ */ Object.groupBy(e2, (e3) => e3.group);
    return /* @__PURE__ */ i(eu, { children: [/* @__PURE__ */ l(eh, { children: /* @__PURE__ */ l("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e3) => {
      u2.next(e3.target.value);
    } }) }), /* @__PURE__ */ l(em, { sx: { flex: 1, overflow: "scroll" }, children: /* @__PURE__ */ Object.entries(t2).toSorted().map((e3) => {
      let [t3, r3] = e3;
      return /* @__PURE__ */ i("div", { "data-nav-group": true, children: [/* @__PURE__ */ l("div", { "data-nav-group-heading": true, children: t3 }), /* @__PURE__ */ l("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(/* @__PURE__ */ es("operationId")).map((e4) => {
        var t4;
        return /* @__PURE__ */ i(ev, { component: d, to: `/operations/${e4.operationId}`, children: [/* @__PURE__ */ l(K, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e4.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e4.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-id": true, children: e4.operationId }), e4.summary ? /* @__PURE__ */ l("div", { "data-operation-summary": true, children: e4.summary != e4.operationId ? e4.summary : /* @__PURE__ */ l("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => /* @__PURE__ */ i(ec, { children: [h2, /* @__PURE__ */ l(ey, { children: /* @__PURE__ */ l(s, {}) })] });
}, { displayName: "OpenAPIView" }), ec = /* @__PURE__ */ U("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eu = /* @__PURE__ */ U("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eh = /* @__PURE__ */ U("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), em = /* @__PURE__ */ U("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ey = /* @__PURE__ */ U("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), ev = /* @__PURE__ */ U("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), ef = /* @__PURE__ */ U("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eg = /* @__PURE__ */ U("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), ex = /* @__PURE__ */ U("div", (e2, t2) => {
  let { slots: r2 } = t2, a2 = /* @__PURE__ */ eS.use();
  return (t3) => {
    var i2, n2;
    return /* @__PURE__ */ l(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e2.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eb = /* @__PURE__ */ U("div", (e2, t2) => {
  let {} = t2;
  return (t3) => {
    var r2;
    let a2 = null !== (r2 = /* @__PURE__ */ e2.schema.getMeta("description")) && void 0 !== r2 ? r2 : "";
    return 0 == a2.length ? null : /* @__PURE__ */ l(t3, { children: /* @__PURE__ */ l(G, { text: a2 }) });
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), e$ = (e2) => {
  let { name: t2, value: r2, extra: a2 } = e2;
  return "" == r2 ? null : /* @__PURE__ */ l(ex, { children: /* @__PURE__ */ i(ef, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(ef, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, /* @__PURE__ */ Object.entries(null != a2 ? a2 : {}).map((e3) => {
    let [t3, r3] = e3;
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ i(ef, { sx: { opacity: 0.5 }, children: [",", " "] }), /* @__PURE__ */ l(ef, { sx: { opacity: 0.5 }, children: t3 }), /* @__PURE__ */ i(ef, { sx: { opacity: 0.5 }, children: [":", " "] }), /* @__PURE__ */ l(ef, { sx: { opacity: 0.7 }, children: r3 })] });
  }), /* @__PURE__ */ l(ef, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eS = /* @__PURE__ */ r(() => ({ indent: 0 }), { name: "IntentContext" }), e_ = /* @__PURE__ */ p((e2, t2) => {
  let {} = e2, { slots: r2 } = t2, a2 = /* @__PURE__ */ eS.use();
  return () => {
    var e3;
    return /* @__PURE__ */ l(eS, { value: { indent: a2.indent + 1 }, children: null === (e3 = r2.default) || void 0 === e3 ? void 0 : e3.call(r2) });
  };
}, { displayName: "Indent" });
class ew {
  constructor(e2, t2) {
    this.id = e2, this.parent = t2;
  }
  child(e2) {
    return new ew(e2, this);
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
let eI = /* @__PURE__ */ r(() => new ew("")), ek = /* @__PURE__ */ a((e2) => {
  let t2 = /* @__PURE__ */ eI.use();
  return () => {
    let r2 = /* @__PURE__ */ e2.schema.getSchema("$ref"), a2 = e2.schema;
    for (; a2.getSchema("$ref"); ) a2 = a2.unwrap;
    let n2 = "intersection" == a2.type || "object" == a2.type || "union" == a2.type || "record" == a2.type || "array" == a2.type || "union" == a2.type;
    return /* @__PURE__ */ i(eI, { value: /* @__PURE__ */ t2.child(r2), children: [n2 && /* @__PURE__ */ l(d, { to: `#${r2}`, children: /* @__PURE__ */ i(ef, { id: r2, children: [r2, " "] }) }), t2.safe(r2) && /* @__PURE__ */ l(eN, { schema: a2 })] });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eN = a((e2) => {
  let t2 = e2.schema;
  return t2.getSchema("$ref") ? /* @__PURE__ */ l(ek, { schema: t2 }) : () => {
    var e3, r2, a2, n2, o2, d2, s2, p2;
    switch (t2.type) {
      case "union":
        return /* @__PURE__ */ l(c, { children: null === (e3 = /* @__PURE__ */ t2.getSchema("oneOf")) || void 0 === e3 ? void 0 : e3.map((e4, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ i(ef, { children: [" ", " | ", " "] }), /* @__PURE__ */ l(eN, { schema: e4 })] })) });
      case "intersection":
        return /* @__PURE__ */ l(ef, { children: null === (r2 = /* @__PURE__ */ t2.getSchema("allOf")) || void 0 === r2 ? void 0 : r2.filter((e4) => !Object.keys(e4).length).map((e4, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ l(ef, { children: "&" }), /* @__PURE__ */ l(eN, { schema: e4 })] })) });
      case "array":
        return /* @__PURE__ */ i(ef, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(ef, { children: "Array<" }), /* @__PURE__ */ l(eN, { schema: null !== (a2 = /* @__PURE__ */ t2.getSchema("items")) && void 0 !== a2 ? a2 : x() }), /* @__PURE__ */ l(ef, { children: ">" })] });
      case "object":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(ef, { children: "{" }), /* @__PURE__ */ l(e_, { children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (n2 = /* @__PURE__ */ t2.getSchema("properties")) && void 0 !== n2 ? n2 : {}).map((e4) => {
          var r3;
          let [a3, n3] = e4;
          return n3 ? /* @__PURE__ */ l(c, { children: /* @__PURE__ */ i(ex, { spacing: 2, children: [/* @__PURE__ */ l(eb, { schema: n3 }), /* @__PURE__ */ i(ef, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(eg, { nullable: /* @__PURE__ */ n3.getSchema("nullable"), deprecated: /* @__PURE__ */ n3.getSchema("deprecated"), optional: !(null !== (r3 = /* @__PURE__ */ t2.getSchema("required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), /* @__PURE__ */ l(ef, { sx: { mr: "1em" }, children: ":" }), /* @__PURE__ */ l(eN, { schema: n3 })] })] }) }) : null;
        }) }) }), /* @__PURE__ */ l(ef, { children: "}" })] });
      case "record":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(ef, { children: "{" }), t2.getSchema("additionalProperties") && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ l(e_, { children: /* @__PURE__ */ i(ex, { children: [/* @__PURE__ */ i(ef, { sx: { mr: 1 }, children: ["[K:", " "] }), /* @__PURE__ */ l(eN, { schema: null !== (o2 = /* @__PURE__ */ t2.getSchema("propertyNames")) && void 0 !== o2 ? o2 : g() }), /* @__PURE__ */ i(ef, { sx: { mr: 1 }, children: ["]:", " "] }), /* @__PURE__ */ l(eN, { schema: null !== (d2 = /* @__PURE__ */ t2.getSchema("additionalProperties")) && void 0 !== d2 ? d2 : x() })] }) }) }), /* @__PURE__ */ l(ef, { children: "}" })] });
      case "enums": {
        let e4 = null !== (s2 = /* @__PURE__ */ t2.getSchema("enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e4.length) return /* @__PURE__ */ l(ef, { children: /* @__PURE__ */ JSON.stringify(e4[0]) });
        let r3 = "any";
        return e4.length > 0 && (r3 = typeof e4[0]), /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(ef, { sx: { fontWeight: "bold" }, children: r3 }), /* @__PURE__ */ l(e_, { children: /* @__PURE__ */ e4.map((e5, r4) => {
          var a3;
          return /* @__PURE__ */ l(e$, { name: "enum", value: `${e5}`, extra: (null === (a3 = /* @__PURE__ */ t2.getMeta("enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: /* @__PURE__ */ JSON.stringify(t2.getMeta("enumLabels")[r4]) } : {} }, e5);
        }) })] });
      }
    }
    let [u2, h2, m2] = [t2.type, /* @__PURE__ */ t2.getSchema("format"), /* @__PURE__ */ t2.getSchema("default")];
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(ef, { sx: { fontWeight: "bold" }, children: u2 || "any" }), /* @__PURE__ */ i(e_, { children: [h2 && /* @__PURE__ */ l(e$, { name: "format", value: h2 }), !V(m2) && /* @__PURE__ */ l(e$, { name: "default", value: m2 }), !eO(t2) && /* @__PURE__ */ l(e$, { name: "validate", value: (p2 = t2).getSchema("x-tag-validate") ? p2.getSchema("x-tag-validate") : eO(p2) ? p2.getSchema("pattern") ? `@r/${String(/* @__PURE__ */ p2.getSchema("pattern"))}/` : `@${p2.getSchema("exclusiveMinimum")} ? "(" : "["}${p2.getSchema("minProperties") ? p2.getSchema("minProperties") : p2.getSchema("minItems") ? p2.getSchema("minItems") : p2.getSchema("minimum") ? p2.getSchema("minimum") : p2.getSchema("minLength") ? p2.getSchema("minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(/* @__PURE__ */ p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${p2.getSchema("maxProperties") ? p2.getSchema("maxProperties") : p2.getSchema("maxItems") ? p2.getSchema("maxItems") : p2.getSchema("maximum") ? p2.getSchema("maximum") : p2.getSchema("maxLength") ? p2.getSchema("maxLength") : "string" === p2.type && "uint64" === p2.getSchema("format") ? "19" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(/* @__PURE__ */ p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${p2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eO(e2) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e2.getSchema(t2));
}
let eC = /* @__PURE__ */ a({ code: /* @__PURE__ */ S(), response: /* @__PURE__ */ S() }, (e2) => {
  let t2 = /* @__PURE__ */ ed.use();
  return () => {
    var r2, a2;
    return /* @__PURE__ */ i(ej, { children: [/* @__PURE__ */ l(eq, { "data-failed": /* @__PURE__ */ function(e3) {
      try {
        return Number(e3) >= 400;
      } catch (e4) {
        return false;
      }
    }(e2.code), children: e2.code }), /* @__PURE__ */ i(K, { sx: { pl: "4em" }, children: [/* @__PURE__ */ l(c, { children: null === (r2 = e2.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e3) => function() {
      let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e4.startsWith("StatusError{") ? e4.slice(12, e4.length - 1).split(",").reduce((e5, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return V(r3) || V(a3) ? e5 : { ...e5, [r3]: a3 };
      }, {}) : null;
    }(e3)).map((e3) => e3 ? /* @__PURE__ */ l(K, { sx: { mb: 16 }, children: /* @__PURE__ */ i(ex, { spacing: 0, children: [/* @__PURE__ */ i(ef, { children: ["{", " "] }), /* @__PURE__ */ l(e_, { children: /* @__PURE__ */ Object.entries(e3).map((e4) => {
      let [t3, r3] = e4;
      return "code" === t3 ? null : /* @__PURE__ */ i(ex, { children: [/* @__PURE__ */ l(eg, { children: t3 }), /* @__PURE__ */ l(ef, { children: ": " }), /* @__PURE__ */ l(ef, { children: r3 })] });
    }) }), /* @__PURE__ */ i(ef, { children: [" ", "}"] })] }) }) : null) }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (a2 = e2.response.content) && void 0 !== a2 ? a2 : {}).map((e3) => {
      let [r3, { schema: a3 }] = e3;
      return /* @__PURE__ */ i(eD, { children: [/* @__PURE__ */ l(ex, { spacing: 0, children: /* @__PURE__ */ l(eN, { schema: /* @__PURE__ */ b.decode(a3, (e4) => {
        var r4;
        return [null !== (r4 = /* @__PURE__ */ t2.schema(e4)) && void 0 !== r4 ? r4 : {}, /* @__PURE__ */ $(e4)];
      }) }) }), /* @__PURE__ */ l("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), ej = /* @__PURE__ */ U("section", { displayName: "ResponseSection" })({}), eq = /* @__PURE__ */ U("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eD = /* @__PURE__ */ U("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eF = /* @__PURE__ */ U("div", { valued: /* @__PURE__ */ _().optional(), focus: /* @__PURE__ */ _().optional(), invalid: /* @__PURE__ */ _().optional(), disabled: /* @__PURE__ */ _().optional(), $label: /* @__PURE__ */ S().optional(), $hint: /* @__PURE__ */ S().optional(), $supporting: /* @__PURE__ */ S().optional(), $leading: /* @__PURE__ */ S().optional(), $trailing: /* @__PURE__ */ S().optional(), $default: /* @__PURE__ */ S() }, (e2, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, n2, o2, d2;
    let s2 = e2.valued, p2 = e2.invalid, c2 = e2.disabled, h2 = /* @__PURE__ */ (null !== (d2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== d2 ? d2 : []).map((e3) => {
      if ("input" === e3.type) {
        var t4, r3, a3, i2, n3, o3;
        return s2 = !!(null !== (n3 = null !== (i2 = null === (t4 = e3.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i2 ? i2 : null === (r3 = e3.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n3 ? n3 : s2), c2 = null !== (o3 = null === (a3 = e3.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, u(e3, { disabled: c2 });
      }
      return u(e3);
    });
    return /* @__PURE__ */ i(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e2.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ i("div", { "data-input-container": true, children: [/* @__PURE__ */ i("div", { "data-input-decorator-container": true, children: [/* @__PURE__ */ l("div", { "data-input-decorator-leading": true }), /* @__PURE__ */ l("div", { "data-input-decorator-label": true, children: /* @__PURE__ */ l("div", { "data-input-label": true, children: null === (n2 = r2.label) || void 0 === n2 ? void 0 : n2.call(r2) }) }), /* @__PURE__ */ l("div", { "data-input-decorator-trailing": true })] }), /* @__PURE__ */ i("div", { "data-input-row": true, children: [r2.leading && /* @__PURE__ */ l(eL, { role: "leading", children: /* @__PURE__ */ r2.leading() }), h2, r2.trailing && /* @__PURE__ */ l(eL, { role: "trailing", children: /* @__PURE__ */ r2.trailing() })] })] }), r2.supporting && /* @__PURE__ */ l("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eL = /* @__PURE__ */ U("div", { role: /* @__PURE__ */ w(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eB = /* @__PURE__ */ a((e2, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ er.of(e2.field$.typedef, V(e2.field$.input) ? void 0 : e2.field$.input);
  return t(a2, /* @__PURE__ */ W(1), /* @__PURE__ */ R((t2) => {
    e2.field$.update(t2);
  }), /* @__PURE__ */ n()), () => /* @__PURE__ */ l(eP, { children: /* @__PURE__ */ l(ea, { value: a2, children: /* @__PURE__ */ l(ei, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eP = /* @__PURE__ */ U("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eR = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eT = (e2) => {
  let { field: t2, value: r2 } = e2;
  return /* @__PURE__ */ i(K, { component: "span", sx: { display: "block" }, children: [/* @__PURE__ */ i(K, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), /* @__PURE__ */ l("span", { children: r2 })] });
}, eW = (e2) => {
  let { method: t2, url: r2, params: a2 } = e2, n2 = /* @__PURE__ */ O(a2);
  return /* @__PURE__ */ i(K, { component: "span", sx: { fontWeight: "bold" }, children: [/* @__PURE__ */ t2.toUpperCase(), /* @__PURE__ */ i(K, { component: "span", sx: { fontWeight: "medium" }, children: [r2, n2 ? `?${n2}` : ""] }), "HTTP/*"] });
}, eJ = (e2, t2) => {
  let r2 = (t3, a2) => a2 instanceof File || a2 instanceof Blob ? `${e2}
Content-Disposition: form-data; name="${t3}"${a2.name ? `; filename="${a2.name}"` : ""}
Content-Type: ${a2.type}

[File Content]
` : z(a2) ? a2.map((e3) => r2(t3, e3)).join("\n") : `${e2}
Content-Disposition: form-data; name="${t3}"

${E(a2) ? JSON.stringify(a2) : String(a2)}
`;
  return Object.entries(t2).map((e3) => {
    let [t3, a2] = e3;
    return r2(t3, a2);
  }).join("\n") + `${e2}--`;
}, eM = /* @__PURE__ */ p({ $default: /* @__PURE__ */ S().optional() }, (e2, t2) => {
  let {} = e2, { slots: r2 } = t2;
  return () => {
    var e3;
    return /* @__PURE__ */ l(K, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: /* @__PURE__ */ l(K, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: /* @__PURE__ */ l("code", { children: null === (e3 = r2.default) || void 0 === e3 ? void 0 : e3.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), eA = /* @__PURE__ */ p({ request: /* @__PURE__ */ S() }, (e2) => () => {
  let t2 = e2.request;
  return /* @__PURE__ */ i(eM, { children: [/* @__PURE__ */ l(eW, { ...t2 }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries({ ...eR(), ...t2.headers }).toSorted().map((e3) => {
    let [t3, r2] = e3;
    return /* @__PURE__ */ l(eT, { field: t3, value: r2 }, t3);
  }) }), t2.body && /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l("br", {}), /* @__PURE__ */ function(e3) {
    if (ez(e3.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e3.headers = { ...e3.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, eJ(t3, e3.body);
    }
    return ez(e3.headers).includes("application/x-www-form-urlencoded") ? O(e3.body) : eE(e3.headers) ? JSON.stringify(e3.body, null, 2) : e3.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), eH = (e2, t2) => {
  let r2 = new Uint8Array(e2), a2 = "";
  for (let e3 = r2.byteLength, t3 = 0; t3 < e3; t3++) a2 += /* @__PURE__ */ String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, eV = /* @__PURE__ */ p({ response: /* @__PURE__ */ S() }, (e2, t2) => {
  let {} = t2;
  return () => {
    let t3 = e2.response;
    return ez(t3.headers).includes("image/") ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("img", { src: /* @__PURE__ */ eH(t3.body, /* @__PURE__ */ ez(t3.headers)), alt: "" }) }) : /* @__PURE__ */ i(eM, { children: [/* @__PURE__ */ i("span", { children: ["HTTP/* ", t3.status] }), /* @__PURE__ */ l("br", {}), t3.headers && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(t3.headers).map((e3) => {
      let [t4, r2] = e3;
      return /* @__PURE__ */ l(eT, { field: t4, value: r2 }, t4);
    }) }), /* @__PURE__ */ l("br", {}), t3.body ? eE(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function ez() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e2)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let eE = (e2) => ez(e2).includes("application/json"), eU = /* @__PURE__ */ a({ operationID: /* @__PURE__ */ g() }, (e2) => t(/* @__PURE__ */ ed.use().response$(e2.operationID), /* @__PURE__ */ o((e3) => /* @__PURE__ */ l(eK, { children: /* @__PURE__ */ l(eV, { response: e3 }) }))), { displayName: "ResponsePreview" }), eK = /* @__PURE__ */ U("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), eG = /* @__PURE__ */ a({ operation: /* @__PURE__ */ S(), $default: /* @__PURE__ */ S() }, (e2, r2) => {
  var a2, d2, s2, p2;
  let { slots: c2 } = r2, u2 = /* @__PURE__ */ ed.use(), h2 = {};
  for (let t2 of null !== (a2 = e2.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e3 = /* @__PURE__ */ b.decode(t2.schema, (e4) => {
      var t3;
      return [null !== (t3 = /* @__PURE__ */ u2.schema(e4)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ $(e4)];
    }).use(/* @__PURE__ */ Q(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e3 = /* @__PURE__ */ e3.optional()), ["object", "array"].includes(null !== (d2 = t2.schema.type) && void 0 !== d2 ? d2 : "") ? h2[t2.name] = /* @__PURE__ */ e3.use(/* @__PURE__ */ X(eB)) : h2[t2.name] = e3;
  }
  if (e2.operation.requestBody) {
    let t2 = Object.entries(null !== (s2 = e2.operation.requestBody.content) && void 0 !== s2 ? s2 : {})[0];
    if (t2) {
      let [e3, r3] = t2, a3 = /* @__PURE__ */ b.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e4) => {
        var t3;
        return [null !== (t3 = /* @__PURE__ */ u2.schema(e4)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ $(e4)];
      }).use(/* @__PURE__ */ Q(`body, content-type = ${JSON.stringify(e3)}`));
      e3.includes("json") ? h2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ X(eB)) : e3.includes("octet-stream") ? h2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ X(eY)) : h2.body = a3;
    }
  }
  let m2 = /* @__PURE__ */ y(), f2 = /* @__PURE__ */ v(), g2 = /* @__PURE__ */ Y.of(/* @__PURE__ */ I(h2), /* @__PURE__ */ (() => {
    try {
      var e3;
      let t2 = f2.query.params;
      return JSON.parse(/* @__PURE__ */ atob(null !== (e3 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e3 ? e3 : ""));
    } catch (e4) {
    }
    return {};
  })());
  t(g2, /* @__PURE__ */ R((t2) => {
    u2.request(e2.operation.operationId, t2);
  }), /* @__PURE__ */ R((e3) => {
    m2.replace({ query: { params: /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(e3)) } });
  }), /* @__PURE__ */ n());
  let x2 = /* @__PURE__ */ t(g2.inputs$, /* @__PURE__ */ o((t2) => {
    let r3 = /* @__PURE__ */ u2.asRequestConfigCreator(e2.operation.operationId);
    return r3 ? /* @__PURE__ */ l(eA, { request: /* @__PURE__ */ r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return /* @__PURE__ */ i(K, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e3) => {
      e3.preventDefault(), g2.submit();
    }, children: [/* @__PURE__ */ l(K, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: /* @__PURE__ */ [.../* @__PURE__ */ g2.fields(g2.typedef)].map((e3) => /* @__PURE__ */ l(eQ, { field$: e3 })) }), /* @__PURE__ */ l(K, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ i(K, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [x2, /* @__PURE__ */ l(K, { sx: { px: 8 }, children: /* @__PURE__ */ l(Z, { type: "submit", children: "发起请求" }) }), /* @__PURE__ */ l(eU, { operationID: e2.operation.operationId }), /* @__PURE__ */ l(K, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e2.operation.operationId);
  };
}, { displayName: "RequestBuilder" }), eQ = /* @__PURE__ */ a({ field$: /* @__PURE__ */ S() }, (e2, r2) => {
  let { field$: a2 } = e2, { render: n2 } = r2;
  return h(() => {
    a2.destroy();
  }), t(/* @__PURE__ */ J([a2, a2.input$]), /* @__PURE__ */ n2((e3) => {
    var t2, r3, n3, o2, d2;
    let [s2, p2] = e3, c2 = null !== (n3 = null === (t2 = a2.meta) || void 0 === t2 ? void 0 : t2.input) && void 0 !== n3 ? n3 : eX, u2 = null !== (o2 = null === (r3 = a2.meta) || void 0 === r3 ? void 0 : r3.readOnlyWhenInitialExist) && void 0 !== o2 && o2 && !!s2.initial;
    return /* @__PURE__ */ l(eF, { valued: !V(null != p2 ? p2 : s2.initial), invalid: !!s2.error, focus: !!s2.focus, $label: /* @__PURE__ */ i("span", { children: [null !== (d2 = a2.meta.label) && void 0 !== d2 ? d2 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: /* @__PURE__ */ i(ex, { children: [/* @__PURE__ */ l(eb, { schema: a2.typedef }), /* @__PURE__ */ l(eN, { schema: a2.typedef })] }), $trailing: c2.$trailing, children: /* @__PURE__ */ l(c2, { field$: a2, readOnly: u2 }) });
  }));
}, { displayName: "ParameterInput" }), eX = /* @__PURE__ */ p({ readOnly: /* @__PURE__ */ _().optional(), field$: /* @__PURE__ */ S() }, (e2) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e2;
  return /* @__PURE__ */ l("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e3) => {
    let t3 = e3.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseFloat(t3)));
        } catch (e4) {
        }
        break;
      case "integer":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseInt(t3)));
        } catch (e4) {
        }
        break;
      case "boolean":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create("false" !== t3 || !!t3));
        } catch (e4) {
        }
        break;
      default:
        r2.update(/* @__PURE__ */ r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), eY = /* @__PURE__ */ a({ field$: /* @__PURE__ */ S(), readOnly: /* @__PURE__ */ _().optional(), accept: /* @__PURE__ */ g().optional() }, (e2) => {
  let r2 = /* @__PURE__ */ m(null);
  return t(r2, /* @__PURE__ */ R((t2) => {
    t2 && e2.field$.update(t2);
  }), /* @__PURE__ */ f()), () => {
    var t2;
    let { readOnly: a2, accept: n2 } = e2;
    return /* @__PURE__ */ i(K, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [/* @__PURE__ */ l("input", { type: "file", name: e2.field$.name, readonly: a2, accept: n2, "data-file-input": true, onChange: (e3) => {
      var t3;
      let a3 = null === (t3 = e3.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), /* @__PURE__ */ l(et, { path: ee }), /* @__PURE__ */ l("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput" }), eZ = /* @__PURE__ */ a({ operationId: /* @__PURE__ */ g() }, (e2, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ ed.use(), n2 = /* @__PURE__ */ t(e2.operationId$, /* @__PURE__ */ q((e3) => a2.operation$(e3))), d2 = /* @__PURE__ */ t(n2, /* @__PURE__ */ M((e3) => !!e3)), s2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ i(e1, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e3.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [/* @__PURE__ */ l("div", { "data-operation-method": true, children: e3.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-path": true, children: e3.path }), /* @__PURE__ */ i("div", { "data-operation-summary": true, children: [e3.summary, " ", e3.operationId != e3.summary ? e3.operationId : ""] })] })] });
  })), p2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ l(K, { sx: { px: 24 }, children: /* @__PURE__ */ l(G, { text: null !== (t2 = e3.description) && void 0 !== t2 ? t2 : "" }) });
  })), u2 = /* @__PURE__ */ t(d2, /* @__PURE__ */ o((e3) => {
    var t2;
    return /* @__PURE__ */ l(eG, { operation: e3, children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (t2 = e3.responses) && void 0 !== t2 ? t2 : {}).map((e4) => {
      let [t3, r3] = e4;
      return /* @__PURE__ */ l(eC, { code: t3, response: r3 }, t3);
    }) }) }, e3.operationId);
  }));
  return t(n2, /* @__PURE__ */ o((e3) => e3 ? /* @__PURE__ */ i(e0, { children: [s2, p2, /* @__PURE__ */ l(K, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: /* @__PURE__ */ l(K, { sx: { flex: 1, overflow: "auto" }, children: u2 }) })] }, e3.operationId) : null));
}, { displayName: "OperationView" }), e0 = /* @__PURE__ */ U("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), e1 = /* @__PURE__ */ U("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  ed as O,
  eZ as a,
  ep as b
};
