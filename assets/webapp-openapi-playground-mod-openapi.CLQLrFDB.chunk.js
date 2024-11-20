var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ed_instances, r_get, a_fn;
import { I as e, r as t, c as r, a, e as i, s as n, k as o, j as l, C as s, R as d, d as p, F as c, b as u, D as m, o as h, E as y, G as v, y as f } from "./lib-nodepkg-vuekit.DHDC8L6I.chunk.js";
import { S as g, s as x, a as b, c as $, e as _, f as w, g as P, h as I, o as S } from "./lib-nodepkg-typedef.CkKD1OsT.chunk.js";
import { c as k, a as N, p as O, t as C } from "./vendor-innoai-tech-fetcher.BjPWWl7O.chunk.js";
import { B as j, s as q, b as D, m as F, E as L, o as T, S as B, t as R, k as W, l as A, c as J, n as H } from "./vendor-rxjs.ByE15jUQ.chunk.js";
import { w as M, g as V, a as z, d as E, e as U } from "./vendor-innoai-tech-lodash.BmKfyDt9.chunk.js";
import { s as K, B as G } from "./lib-nodepkg-vueuikit.CCThKRrA.chunk.js";
import { M as Q } from "./lib-nodepkg-vuemarkdown.X7Cc-3M-.chunk.js";
import { I as X, m as Y, T as Z, F as ee, f as et } from "./lib-nodepkg-vuematerial.DDJXHnvP.chunk.js";
import { l as er, h as ea, i as ei, F as en } from "./lib-nodepkg-vueformdata.DfP9Ov9N.chunk.js";
import { J as eo, a as el, b as es } from "./lib-nodepkg-jsoneditor.BdaGVzjw.chunk.js";
const _ed = class _ed extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ed_instances);
    __privateAdd(this, _e, k({ paramsSerializer: O, transformRequestBody: C }));
    __privateAdd(this, _t, new j(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _ed({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e5) {
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      let r2 = /* @__PURE__ */ t2.get(e5);
      return r2 ? F(r2, r2.error$) : L;
    }));
  }
  requesting$(e5) {
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      var r2, a2;
      return null !== (a2 = null === (r2 = /* @__PURE__ */ t2.get(e5)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== a2 ? a2 : T(false);
    }));
  }
  asRequestConfigCreator(e5) {
    var t2, r2;
    let a2 = /* @__PURE__ */ __privateMethod(this, _ed_instances, a_fn).call(this, e5);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e7) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _ed_instances, r_get) + ec(a2.path, e7), params: /* @__PURE__ */ M(e7, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e9) => "query" == e9.in).map((e9) => e9.name)), headers: { ...M(e7, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e9) => "header" == e9.in).map((e9) => e9.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e7.body, inputs: e7 };
    };
  }
  request(e5, t2) {
    let r2 = /* @__PURE__ */ __privateGet(this, _t).value.get(e5);
    if (!r2) {
      let t3 = /* @__PURE__ */ this.asRequestConfigCreator(e5);
      if (!t3) return;
      r2 = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign(t3, { operationID: e5, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e5, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e5) {
    return t(this, /* @__PURE__ */ q((t2) => {
      for (let r2 of ep(t2, { operationId: e5 })) if (r2) return T(r2);
      return T(null);
    }));
  }
  operations$(e5) {
    return t(this, /* @__PURE__ */ q((t2) => T([.../* @__PURE__ */ ep(t2, e5)])));
  }
  schema$(e5) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e5.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, /* @__PURE__ */ q((e7) => {
      if (i2) {
        var t2;
        return T(null !== (t2 = /* @__PURE__ */ V(e7, i2)) && void 0 !== t2 ? t2 : null);
      }
      return T(null);
    }), /* @__PURE__ */ D((e7) => e7 ? { ...e7, $id: i2[i2.length - 1] } : e7));
  }
  schema(e5) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e5.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = /* @__PURE__ */ V(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_ed_instances = new WeakSet();
r_get = function() {
  var e5, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e5 = t2[0]) || void 0 === e5 ? void 0 : e5.url) && void 0 !== r2 ? r2 : "";
};
a_fn = function(e5) {
  for (let t2 of ep(this.value, { operationId: e5 })) if (t2) return t2;
  return null;
};
let ed = _ed;
function* ep(e5, t2) {
  for (let [n2, o2] of Object.entries(e5.paths)) for (let [e7, l2] of Object.entries(o2)) {
    var r2, a2, i2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (a2 = l2.tags) && void 0 !== a2 ? a2 : []).includes(t2.tag))) {
      if (t2.operationId) {
        if (t2.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(/* @__PURE__ */ t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e7, path: n2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let ec = function(e5) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e5.replace(/{([\s\S]+?)}/g, (e7, r2) => [].concat(t2[r2] || e7).join(","));
}, eu = /* @__PURE__ */ r(() => ed.empty(), { name: "OpenAPI" }), em = (e5) => (t2, r2) => t2[e5] == r2[e5] ? 0 : t2[e5] < r2[e5] ? -1 : 1, eh = /* @__PURE__ */ a((r2, a2) => {
  let {} = r2, {} = a2, p2 = /* @__PURE__ */ eu.use(), c2 = new e({ operationId: void 0 }), u2 = new B();
  t(u2, /* @__PURE__ */ W(200), /* @__PURE__ */ R((e5) => {
    c2.next((t2) => {
      t2.operationId = `*${null != e5 ? e5 : ""}`;
    });
  }), /* @__PURE__ */ n());
  let m2 = /* @__PURE__ */ t(c2, /* @__PURE__ */ q((e5) => p2.operations$(e5)), /* @__PURE__ */ o((e5) => {
    let t2 = /* @__PURE__ */ Object.groupBy(e5, (e7) => e7.group);
    return /* @__PURE__ */ i(ev, { children: [/* @__PURE__ */ l(ef, { children: /* @__PURE__ */ l("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e7) => {
      u2.next(e7.target.value);
    } }) }), /* @__PURE__ */ l(eg, { sx: { flex: 1, overflow: "scroll" }, children: /* @__PURE__ */ Object.entries(t2).toSorted().map((e7) => {
      let [t3, r3] = e7;
      return /* @__PURE__ */ i("div", { "data-nav-group": true, children: [/* @__PURE__ */ l("div", { "data-nav-group-heading": true, children: t3 }), /* @__PURE__ */ l("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(/* @__PURE__ */ em("operationId")).map((e9) => {
        var t4;
        return /* @__PURE__ */ i(eb, { component: s, to: `/operations/${e9.operationId}`, children: [/* @__PURE__ */ l(G, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e9.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e9.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-id": true, children: e9.operationId }), e9.summary ? /* @__PURE__ */ l("div", { "data-operation-summary": true, children: e9.summary != e9.operationId ? e9.summary : /* @__PURE__ */ l("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => /* @__PURE__ */ i(ey, { children: [m2, /* @__PURE__ */ l(ex, { children: /* @__PURE__ */ l(d, {}) })] });
}, { displayName: "OpenAPIView" }), ey = /* @__PURE__ */ K("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), ev = /* @__PURE__ */ K("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), ef = /* @__PURE__ */ K("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eg = /* @__PURE__ */ K("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ex = /* @__PURE__ */ K("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), eb = /* @__PURE__ */ K("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), e$ = /* @__PURE__ */ K("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), e_ = /* @__PURE__ */ K("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), ew = /* @__PURE__ */ K("div", (e5, t2) => {
  let { slots: r2 } = t2, a2 = /* @__PURE__ */ ek.use();
  return (t3) => {
    var i2, n2;
    return /* @__PURE__ */ l(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e5.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eP = /* @__PURE__ */ K("div", (e5, t2) => {
  let {} = t2;
  return (t3) => {
    var r2, a2;
    let n2 = null !== (r2 = /* @__PURE__ */ g.metaProp(e5.schema, "title")) && void 0 !== r2 ? r2 : "", o2 = null !== (a2 = /* @__PURE__ */ g.metaProp(e5.schema, "description")) && void 0 !== a2 ? a2 : "";
    return n2 || o2 ? /* @__PURE__ */ i(t3, { children: [n2, " ", o2 ? /* @__PURE__ */ l(Z, { title: /* @__PURE__ */ l(eI, { children: /* @__PURE__ */ l(Q, { text: o2 }) }), children: /* @__PURE__ */ l(X, { path: Y }) }) : null] }) : null;
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${X}`]: { width: 12, height: 12, overflow: "hidden" } }), eI = /* @__PURE__ */ K("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eS = (e5) => {
  let { name: t2, value: r2, extra: a2 } = e5;
  return "" == r2 ? null : /* @__PURE__ */ l(ew, { children: /* @__PURE__ */ i(e$, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(e$, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, /* @__PURE__ */ Object.entries(null != a2 ? a2 : {}).map((e7) => {
    let [t3, r3] = e7;
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ i(e$, { sx: { opacity: 0.5 }, children: [",", " "] }), /* @__PURE__ */ l(e$, { sx: { opacity: 0.5 }, children: t3 }), /* @__PURE__ */ i(e$, { sx: { opacity: 0.5 }, children: [":", " "] }), /* @__PURE__ */ l(e$, { sx: { opacity: 0.7 }, children: r3 })] });
  }), /* @__PURE__ */ l(e$, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, ek = /* @__PURE__ */ r(() => ({ indent: 0 }), { name: "IntentContext" }), eN = /* @__PURE__ */ p((e5, t2) => {
  let {} = e5, { slots: r2 } = t2, a2 = /* @__PURE__ */ ek.use();
  return () => {
    var e7;
    return /* @__PURE__ */ l(ek, { value: { indent: a2.indent + 1 }, children: null === (e7 = r2.default) || void 0 === e7 ? void 0 : e7.call(r2) });
  };
}, { displayName: "Indent" });
class eO {
  constructor(e5, t2) {
    this.id = e5, this.parent = t2;
  }
  child(e5) {
    return new eO(e5, this);
  }
  safe(e5) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e5) return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let eC = /* @__PURE__ */ r(() => new eO("")), ej = /* @__PURE__ */ a((e5) => {
  let t2 = /* @__PURE__ */ eC.use();
  return () => {
    let r2 = e5.schema, a2 = /* @__PURE__ */ g.schemaProp(e5.schema, "$ref"), n2 = "intersection" == (r2 = /* @__PURE__ */ g.schemaProp(e5.schema, g.unwrap)()).type || "object" == r2.type || "union" == r2.type || "record" == r2.type || "array" == r2.type || "union" == r2.type;
    return /* @__PURE__ */ i(eC, { value: /* @__PURE__ */ t2.child(a2), children: [n2 && /* @__PURE__ */ l(s, { to: `#${a2}`, children: /* @__PURE__ */ i(e$, { id: a2, children: [a2, " "] }) }), t2.safe(a2) && /* @__PURE__ */ l(eq, { schema: r2 })] });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eq = a((e5) => {
  let t2 = e5.schema;
  return g.schemaProp(t2, "$ref") ? /* @__PURE__ */ l(ej, { schema: t2 }) : () => {
    var e7, r2, a2, n2, o2, s2, d2, p2;
    switch (t2.type) {
      case "union":
        return /* @__PURE__ */ l(c, { children: null === (e7 = /* @__PURE__ */ g.schemaProp(t2, "oneOf")) || void 0 === e7 ? void 0 : e7.map((e9, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ i(e$, { children: [" ", " | ", " "] }), /* @__PURE__ */ l(eq, { schema: e9 })] })) });
      case "intersection":
        return /* @__PURE__ */ l(e$, { children: null === (r2 = /* @__PURE__ */ g.schemaProp(t2, "allOf")) || void 0 === r2 ? void 0 : r2.filter((e9) => !Object.keys(e9).length).map((e9, t3) => /* @__PURE__ */ i(c, { children: [t3 > 0 && /* @__PURE__ */ l(e$, { children: "&" }), /* @__PURE__ */ l(eq, { schema: e9 })] })) });
      case "array":
        return /* @__PURE__ */ i(e$, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(e$, { children: "Array<" }), /* @__PURE__ */ l(eq, { schema: null !== (a2 = /* @__PURE__ */ g.schemaProp(t2, "items")) && void 0 !== a2 ? a2 : b() }), /* @__PURE__ */ l(e$, { children: ">" })] });
      case "object":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(e$, { children: "{" }), /* @__PURE__ */ l(eN, { children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (n2 = /* @__PURE__ */ g.schemaProp(t2, "properties")) && void 0 !== n2 ? n2 : {}).map((e9) => {
          var r3;
          let [a3, n3] = e9;
          return n3 ? /* @__PURE__ */ l(c, { children: /* @__PURE__ */ i(ew, { spacing: 2, children: [/* @__PURE__ */ l(eP, { schema: n3 }), /* @__PURE__ */ i(e$, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ l(e_, { nullable: /* @__PURE__ */ g.schemaProp(t2, "nullable"), deprecated: /* @__PURE__ */ g.schemaProp(t2, "deprecated"), optional: !(null !== (r3 = /* @__PURE__ */ g.schemaProp(t2, "required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), /* @__PURE__ */ l(e$, { sx: { mr: "1em" }, children: ":" }), /* @__PURE__ */ l(eq, { schema: n3 })] })] }) }) : null;
        }) }) }), /* @__PURE__ */ l(e$, { children: "}" })] });
      case "record":
        return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(e$, { children: "{" }), g.schemaProp(t2, "additionalProperties") && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ l(eN, { children: /* @__PURE__ */ i(ew, { children: [/* @__PURE__ */ i(e$, { sx: { mr: 1 }, children: ["[K:", " "] }), /* @__PURE__ */ l(eq, { schema: null !== (o2 = /* @__PURE__ */ g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : x() }), /* @__PURE__ */ i(e$, { sx: { mr: 1 }, children: ["]:", " "] }), /* @__PURE__ */ l(eq, { schema: null !== (s2 = /* @__PURE__ */ g.schemaProp(t2, "additionalProperties")) && void 0 !== s2 ? s2 : b() })] }) }) }), /* @__PURE__ */ l(e$, { children: "}" })] });
      case "enums": {
        let e9 = null !== (d2 = /* @__PURE__ */ g.schemaProp(t2, "enum")) && void 0 !== d2 ? d2 : [];
        if (1 == e9.length) return /* @__PURE__ */ l(e$, { children: /* @__PURE__ */ JSON.stringify(e9[0]) });
        let r3 = "any";
        return e9.length > 0 && (r3 = typeof e9[0]), /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(e$, { sx: { fontWeight: "bold" }, children: r3 }), /* @__PURE__ */ l(eN, { children: /* @__PURE__ */ e9.map((e10, r4) => {
          var a3;
          return /* @__PURE__ */ l(eS, { name: "enum", value: `${e10}`, extra: (null === (a3 = /* @__PURE__ */ g.metaProp(t2, "enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: /* @__PURE__ */ JSON.stringify(g.metaProp(t2, "enumLabels")[r4]) } : {} }, e10);
        }) })] });
      }
    }
    let [u2, m2, h2] = [t2.type, /* @__PURE__ */ g.schemaProp(t2, "format"), /* @__PURE__ */ g.schemaProp(t2, "default")];
    return /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l(e$, { sx: { fontWeight: "bold" }, children: u2 || "any" }), /* @__PURE__ */ i(eN, { children: [m2 && /* @__PURE__ */ l(eS, { name: "format", value: m2 }), !z(h2) && /* @__PURE__ */ l(eS, { name: "default", value: h2 }), !eD(t2) && /* @__PURE__ */ l(eS, { name: "validate", value: eD(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(/* @__PURE__ */ g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eD(e5) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e5, t2));
}
let eF = /* @__PURE__ */ a({ code: /* @__PURE__ */ $(), response: /* @__PURE__ */ $() }, (e5) => {
  let t2 = /* @__PURE__ */ eu.use();
  return () => {
    var r2, a2;
    return /* @__PURE__ */ i(eL, { children: [/* @__PURE__ */ l(eT, { "data-failed": /* @__PURE__ */ function(e7) {
      try {
        return Number(e7) >= 400;
      } catch (e9) {
        return false;
      }
    }(e5.code), children: e5.code }), /* @__PURE__ */ i(G, { sx: { pl: "4em" }, children: [/* @__PURE__ */ l(c, { children: null === (r2 = e5.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e7) => function() {
      let e9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e9.startsWith("StatusError{") ? e9.slice(12, e9.length - 1).split(",").reduce((e10, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return z(r3) || z(a3) ? e10 : { ...e10, [r3]: a3 };
      }, {}) : null;
    }(e7)).map((e7) => e7 ? /* @__PURE__ */ l(G, { sx: { mb: 16 }, children: /* @__PURE__ */ i(ew, { spacing: 0, children: [/* @__PURE__ */ i(e$, { children: ["{", " "] }), /* @__PURE__ */ l(eN, { children: /* @__PURE__ */ Object.entries(e7).map((e9) => {
      let [t3, r3] = e9;
      return "code" === t3 ? null : /* @__PURE__ */ i(ew, { children: [/* @__PURE__ */ l(e_, { children: t3 }), /* @__PURE__ */ l(e$, { children: ": " }), /* @__PURE__ */ l(e$, { children: r3 })] });
    }) }), /* @__PURE__ */ i(e$, { children: [" ", "}"] })] }) }) : null) }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (a2 = e5.response.content) && void 0 !== a2 ? a2 : {}).map((e7) => {
      let [r3, { schema: a3 }] = e7;
      return /* @__PURE__ */ i(eB, { children: [/* @__PURE__ */ l(ew, { spacing: 0, children: /* @__PURE__ */ l(eq, { schema: /* @__PURE__ */ _.decode(a3, (e9) => {
        var r4;
        return [null !== (r4 = /* @__PURE__ */ t2.schema(e9)) && void 0 !== r4 ? r4 : {}, /* @__PURE__ */ w(e9)];
      }) }) }), /* @__PURE__ */ l("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), eL = /* @__PURE__ */ K("section", { displayName: "ResponseSection" })({}), eT = /* @__PURE__ */ K("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eB = /* @__PURE__ */ K("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eR = /* @__PURE__ */ K("div", (e5, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, n2, o2, s2;
    let d2 = e5.valued, p2 = e5.invalid, c2 = e5.disabled, m2 = /* @__PURE__ */ (null !== (s2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== s2 ? s2 : []).map((e7) => {
      if ("input" === e7.type) {
        var t4, r3, a3, i2, n3, o3;
        return d2 = !!(null !== (n3 = null !== (i2 = null === (t4 = e7.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i2 ? i2 : null === (r3 = e7.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n3 ? n3 : d2), c2 = null !== (o3 = null === (a3 = e7.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, u(e7, { disabled: c2 });
      }
      return u(e7);
    });
    return /* @__PURE__ */ i(t3, { "data-valued": d2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e5.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ i("div", { "data-input-container": true, children: [/* @__PURE__ */ i("div", { "data-input-decorator-container": true, children: [/* @__PURE__ */ l("div", { "data-input-decorator-leading": true }), /* @__PURE__ */ l("div", { "data-input-decorator-label": true, children: /* @__PURE__ */ l("div", { "data-input-label": true, children: null === (n2 = r2.label) || void 0 === n2 ? void 0 : n2.call(r2) }) }), /* @__PURE__ */ l("div", { "data-input-decorator-trailing": true })] }), /* @__PURE__ */ i("div", { "data-input-row": true, children: [r2.leading && /* @__PURE__ */ l(eW, { role: "leading", children: /* @__PURE__ */ r2.leading() }), m2, r2.trailing && /* @__PURE__ */ l(eW, { role: "trailing", children: /* @__PURE__ */ r2.trailing() })] })] }), r2.supporting && /* @__PURE__ */ l("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eW = /* @__PURE__ */ K("div", { role: /* @__PURE__ */ P(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eA = /* @__PURE__ */ a((e5, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ eo.of(e5.field$.typedef, z(e5.field$.input) ? void 0 : e5.field$.input);
  return t(a2, /* @__PURE__ */ A(1), /* @__PURE__ */ R((t2) => {
    e5.field$.update(t2);
  }), /* @__PURE__ */ n()), () => /* @__PURE__ */ l(eJ, { children: /* @__PURE__ */ l(el, { value: a2, children: /* @__PURE__ */ l(es, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eJ = /* @__PURE__ */ K("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eH = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eM = (e5) => {
  let { field: t2, value: r2 } = e5;
  return /* @__PURE__ */ i(G, { component: "span", sx: { display: "block" }, children: [/* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), /* @__PURE__ */ l("span", { children: r2 })] });
}, eV = (e5) => {
  let { method: t2, url: r2, params: a2 } = e5, n2 = /* @__PURE__ */ O(a2);
  return /* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "bold" }, children: [/* @__PURE__ */ t2.toUpperCase(), /* @__PURE__ */ i(G, { component: "span", sx: { fontWeight: "medium" }, children: [r2, n2 ? `?${n2}` : ""] }), "HTTP/*"] });
}, ez = (e5, t2) => {
  let r2 = (t3, a2) => a2 instanceof File || a2 instanceof Blob ? `${e5}
Content-Disposition: form-data; name="${t3}"${a2.name ? `; filename="${a2.name}"` : ""}
Content-Type: ${a2.type}

[File Content]
` : E(a2) ? a2.map((e7) => r2(t3, e7)).join("\n") : `${e5}
Content-Disposition: form-data; name="${t3}"

${U(a2) ? JSON.stringify(a2) : String(a2)}
`;
  return Object.entries(t2).map((e7) => {
    let [t3, a2] = e7;
    return r2(t3, a2);
  }).join("\n") + `${e5}--`;
}, eE = /* @__PURE__ */ p({ $default: /* @__PURE__ */ $().optional() }, (e5, t2) => {
  let {} = e5, { slots: r2 } = t2;
  return () => {
    var e7;
    return /* @__PURE__ */ l(G, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: /* @__PURE__ */ l(G, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: /* @__PURE__ */ l("code", { children: null === (e7 = r2.default) || void 0 === e7 ? void 0 : e7.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), eU = /* @__PURE__ */ p({ request: /* @__PURE__ */ $() }, (e5) => () => {
  let t2 = e5.request;
  return /* @__PURE__ */ i(eE, { children: [/* @__PURE__ */ l(eV, { ...t2 }), /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries({ ...eH(), ...t2.headers }).toSorted().map((e7) => {
    let [t3, r2] = e7;
    return /* @__PURE__ */ l(eM, { field: t3, value: r2 }, t3);
  }) }), t2.body && /* @__PURE__ */ i(c, { children: [/* @__PURE__ */ l("br", {}), /* @__PURE__ */ function(e7) {
    if (eQ(e7.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e7.headers = { ...e7.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, ez(t3, e7.body);
    }
    return eQ(e7.headers).includes("application/x-www-form-urlencoded") ? O(e7.body) : eX(e7.headers) ? JSON.stringify(e7.body, null, 2) : e7.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), eK = (e5, t2) => {
  let r2 = new Uint8Array(e5), a2 = "";
  for (let e7 = r2.byteLength, t3 = 0; t3 < e7; t3++) a2 += /* @__PURE__ */ String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, eG = /* @__PURE__ */ p({ response: /* @__PURE__ */ $() }, (e5, t2) => {
  let {} = t2;
  return () => {
    let t3 = e5.response;
    return eQ(t3.headers).includes("image/") ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("img", { src: /* @__PURE__ */ eK(t3.body, /* @__PURE__ */ eQ(t3.headers)), alt: "" }) }) : /* @__PURE__ */ i(eE, { children: [/* @__PURE__ */ i("span", { children: ["HTTP/* ", t3.status] }), /* @__PURE__ */ l("br", {}), t3.headers && /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(t3.headers).map((e7) => {
      let [t4, r2] = e7;
      return /* @__PURE__ */ l(eM, { field: t4, value: r2 }, t4);
    }) }), /* @__PURE__ */ l("br", {}), t3.body ? eX(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function eQ() {
  let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e5)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let eX = (e5) => eQ(e5).includes("application/json"), eY = /* @__PURE__ */ a({ operationID: /* @__PURE__ */ x() }, (e5) => t(/* @__PURE__ */ eu.use().response$(e5.operationID), /* @__PURE__ */ o((e7) => /* @__PURE__ */ l(eZ, { children: /* @__PURE__ */ l(eG, { response: e7 }) }))), { displayName: "ResponsePreview" }), eZ = /* @__PURE__ */ K("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), e0 = /* @__PURE__ */ a((e5, r2) => {
  var a2, s2, d2, p2;
  let { slots: c2 } = r2, u2 = /* @__PURE__ */ eu.use(), m2 = {};
  for (let t2 of null !== (a2 = e5.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e7 = /* @__PURE__ */ _.decode(t2.schema, (e9) => {
      var t3;
      return [null !== (t3 = /* @__PURE__ */ u2.schema(e9)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e9)];
    }).use(/* @__PURE__ */ er(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e7 = /* @__PURE__ */ e7.optional()), e7.use(/* @__PURE__ */ ea(t2.schema.title)), ["object", "array"].includes(null !== (s2 = t2.schema.type) && void 0 !== s2 ? s2 : "") ? m2[t2.name] = /* @__PURE__ */ e7.use(/* @__PURE__ */ ei(eA)) : m2[t2.name] = e7;
  }
  if (e5.operation.requestBody) {
    let t2 = Object.entries(null !== (d2 = e5.operation.requestBody.content) && void 0 !== d2 ? d2 : {})[0];
    if (t2) {
      let [e7, r3] = t2, a3 = /* @__PURE__ */ _.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e9) => {
        var t3;
        return [null !== (t3 = /* @__PURE__ */ u2.schema(e9)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e9)];
      }).use(/* @__PURE__ */ er(`body, content-type = ${JSON.stringify(e7)}`));
      e7.includes("json") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ ei(eA)) : e7.includes("octet-stream") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ ei(e4)) : m2.body = a3;
    }
  }
  let h2 = /* @__PURE__ */ y(), f2 = /* @__PURE__ */ v(), g2 = /* @__PURE__ */ en.of(/* @__PURE__ */ S(m2), /* @__PURE__ */ (() => {
    try {
      var e7;
      let t2 = f2.query.params;
      return JSON.parse(/* @__PURE__ */ atob(null !== (e7 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e7 ? e7 : ""));
    } catch (e9) {
    }
    return {};
  })());
  t(g2, /* @__PURE__ */ R((t2) => {
    u2.request(e5.operation.operationId, t2);
  }), /* @__PURE__ */ R((e7) => {
    h2.replace({ query: { params: /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(e7)) } });
  }), /* @__PURE__ */ n());
  let x2 = /* @__PURE__ */ t(g2.inputs$, /* @__PURE__ */ o((t2) => {
    let r3 = /* @__PURE__ */ u2.asRequestConfigCreator(e5.operation.operationId);
    return r3 ? /* @__PURE__ */ l(eU, { request: /* @__PURE__ */ r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return /* @__PURE__ */ i(G, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e7) => {
      e7.preventDefault(), g2.submit();
    }, children: [/* @__PURE__ */ l(G, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: /* @__PURE__ */ [.../* @__PURE__ */ g2.fields(g2.typedef)].map((e7) => /* @__PURE__ */ l(e1, { field$: e7 })) }), /* @__PURE__ */ l(G, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ i(G, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [x2, /* @__PURE__ */ l(G, { sx: { px: 8 }, children: /* @__PURE__ */ l(ee, { type: "submit", children: "发起请求" }) }), /* @__PURE__ */ l(eY, { operationID: e5.operation.operationId }), /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e5.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), e1 = /* @__PURE__ */ a((e5, r2) => {
  let { field$: a2 } = e5, { render: n2 } = r2;
  return m(() => {
    a2.destroy();
  }), t(/* @__PURE__ */ J([a2, a2.input$]), /* @__PURE__ */ n2((e7) => {
    var t2, r3, n3;
    let [o2, s2] = e7, d2 = null !== (t2 = /* @__PURE__ */ g.metaProp(a2.typedef, "inputBy")) && void 0 !== t2 ? t2 : e2, p2 = null !== (r3 = /* @__PURE__ */ g.metaProp(a2.typedef, "readOnlyWhenInitialExist")) && void 0 !== r3 && r3 && !!o2.initial;
    return /* @__PURE__ */ l(eR, { valued: !z(null != s2 ? s2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: /* @__PURE__ */ i("span", { children: [null !== (n3 = a2.meta.label) && void 0 !== n3 ? n3 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: /* @__PURE__ */ i(ew, { children: [/* @__PURE__ */ l(eP, { schema: a2.typedef }), /* @__PURE__ */ l(eq, { schema: a2.typedef })] }), $trailing: d2.$trailing, children: /* @__PURE__ */ l(d2, { field$: a2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), e2 = /* @__PURE__ */ p({ readOnly: /* @__PURE__ */ I().optional(), field$: /* @__PURE__ */ $() }, (e5) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e5;
  return /* @__PURE__ */ l("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e7) => {
    let t3 = e7.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseFloat(t3)));
        } catch (e9) {
        }
        break;
      case "integer":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseInt(t3)));
        } catch (e9) {
        }
        break;
      case "boolean":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create("false" !== t3 || !!t3));
        } catch (e9) {
        }
        break;
      default:
        r2.update(/* @__PURE__ */ r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), e4 = /* @__PURE__ */ a((e5) => {
  let r2 = /* @__PURE__ */ h(null);
  return t(r2, /* @__PURE__ */ R((t2) => {
    t2 && e5.field$.update(t2);
  }), /* @__PURE__ */ f()), () => {
    var t2;
    let { readOnly: a2, accept: n2 } = e5;
    return /* @__PURE__ */ i(G, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [/* @__PURE__ */ l("input", { type: "file", name: e5.field$.name, readonly: a2, accept: n2, "data-file-input": true, onChange: (e7) => {
      var t3;
      let a3 = null === (t3 = e7.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), /* @__PURE__ */ l(X, { path: et }), /* @__PURE__ */ l("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), e8 = /* @__PURE__ */ a({ operationId: /* @__PURE__ */ x() }, (e5, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ eu.use(), n2 = /* @__PURE__ */ t(e5.operationId$, /* @__PURE__ */ q((e7) => a2.operation$(e7))), s2 = /* @__PURE__ */ t(n2, /* @__PURE__ */ H((e7) => !!e7)), d2 = /* @__PURE__ */ t(s2, /* @__PURE__ */ o((e7) => {
    var t2;
    return /* @__PURE__ */ i(e3, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e7.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [/* @__PURE__ */ l("div", { "data-operation-method": true, children: e7.method }), /* @__PURE__ */ i("div", { "data-operation-desc": true, children: [/* @__PURE__ */ l("div", { "data-operation-path": true, children: e7.path }), /* @__PURE__ */ i("div", { "data-operation-summary": true, children: [e7.summary, " ", e7.operationId != e7.summary ? e7.operationId : ""] })] })] });
  })), p2 = /* @__PURE__ */ t(s2, /* @__PURE__ */ o((e7) => {
    var t2;
    return /* @__PURE__ */ l(G, { sx: { px: 24 }, children: /* @__PURE__ */ l(Q, { text: null !== (t2 = e7.description) && void 0 !== t2 ? t2 : "" }) });
  })), u2 = /* @__PURE__ */ t(s2, /* @__PURE__ */ o((e7) => {
    var t2;
    return /* @__PURE__ */ l(e0, { operation: e7, children: /* @__PURE__ */ l(c, { children: /* @__PURE__ */ Object.entries(null !== (t2 = e7.responses) && void 0 !== t2 ? t2 : {}).map((e9) => {
      let [t3, r3] = e9;
      return /* @__PURE__ */ l(eF, { code: t3, response: r3 }, t3);
    }) }) }, e7.operationId);
  }));
  return t(n2, /* @__PURE__ */ o((e7) => e7 ? /* @__PURE__ */ i(e6, { children: [d2, p2, /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: /* @__PURE__ */ l(G, { sx: { flex: 1, overflow: "auto" }, children: u2 }) })] }, e7.operationId) : null));
}, { displayName: "OperationView" }), e6 = /* @__PURE__ */ K("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), e3 = /* @__PURE__ */ K("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  eu as O,
  e8 as a,
  eh as b
};
