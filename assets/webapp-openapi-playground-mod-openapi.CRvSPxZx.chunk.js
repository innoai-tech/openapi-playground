var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ep_instances, r_get, a_fn;
import { I as e, r as t, c as r, a, o as i, e as n, s as o, y as l, k as s, j as d, C as p, R as c, d as u, F as m, b as h, D as y, E as f, G as v } from "./lib-nodepkg-vuekit.DU46cpfI.chunk.js";
import { S as g, s as b, b as x, e as $, f as _, g as w, h as P, j as I, o as S } from "./lib-nodepkg-typedef.hihkfEx4.chunk.js";
import { c as k, a as N, p as O, t as C } from "./vendor-innoai-tech-fetcher.DBmb0ZVn.chunk.js";
import { B as j, s as q, b as T, m as D, E as L, o as F, S as B, t as R, k as W, O as A, l as J, c as M, n as H } from "./vendor-rxjs.BqYGlyAQ.chunk.js";
import { w as V, g as z, a as E, d as U, e as K } from "./vendor-innoai-tech-lodash.CzrXiiPp.chunk.js";
import { s as G, B as Q } from "./lib-nodepkg-vueuikit.C-j2znnl.chunk.js";
import { M as X } from "./lib-nodepkg-vuemarkdown.vAZSqjLs.chunk.js";
import { I as Y, m as Z, T as ee, F as et, f as er } from "./lib-nodepkg-vuematerial.pqLGbFuR.chunk.js";
import { l as ea, h as ei, i as en, F as eo } from "./lib-nodepkg-vueformdata.D3X_uvqF.chunk.js";
import { J as el, a as es, b as ed } from "./lib-nodepkg-jsoneditor.DvRDqApr.chunk.js";
const _ep = class _ep extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ep_instances);
    __privateAdd(this, _e, k({ paramsSerializer: O, transformRequestBody: C }));
    __privateAdd(this, _t, new j(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _ep({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e7) {
    return t(__privateGet(this, _t), q((t2) => {
      let r2 = t2.get(e7);
      return r2 ? D(r2, r2.error$) : L;
    }));
  }
  requesting$(e7) {
    return t(__privateGet(this, _t), q((t2) => {
      var r2, a2;
      return null !== (a2 = null === (r2 = t2.get(e7)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== a2 ? a2 : F(false);
    }));
  }
  asRequestConfigCreator(e7) {
    var t2, r2;
    let a2 = __privateMethod(this, _ep_instances, a_fn).call(this, e7);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e9) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _ep_instances, r_get) + eu(a2.path, e9), params: V(e9, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e10) => "query" == e10.in).map((e10) => e10.name)), headers: { ...V(e9, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e10) => "header" == e10.in).map((e10) => e10.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e9.body, inputs: e9 };
    };
  }
  request(e7, t2) {
    let r2 = __privateGet(this, _t).value.get(e7);
    if (!r2) {
      let t3 = this.asRequestConfigCreator(e7);
      if (!t3) return;
      r2 = N(Object.assign(t3, { operationID: e7, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e7, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e7) {
    return t(this, q((t2) => {
      for (let r2 of ec(t2, { operationId: e7 })) if (r2) return F(r2);
      return F(null);
    }));
  }
  operations$(e7) {
    return t(this, q((t2) => F([...ec(t2, e7)])));
  }
  schema$(e7) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e7.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, q((e9) => {
      if (i2) {
        var t2;
        return F(null !== (t2 = z(e9, i2)) && void 0 !== t2 ? t2 : null);
      }
      return F(null);
    }), T((e9) => e9 ? { ...e9, $id: i2[i2.length - 1] } : e9));
  }
  schema(e7) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e7.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = z(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_ep_instances = new WeakSet();
r_get = function() {
  var e7, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e7 = t2[0]) || void 0 === e7 ? void 0 : e7.url) && void 0 !== r2 ? r2 : "";
};
a_fn = function(e7) {
  for (let t2 of ec(this.value, { operationId: e7 })) if (t2) return t2;
  return null;
};
let ep = _ep;
function* ec(e7, t2) {
  for (let [n2, o2] of Object.entries(e7.paths)) for (let [e9, l2] of Object.entries(o2)) {
    var r2, a2, i2;
    if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (a2 = l2.tags) && void 0 !== a2 ? a2 : []).includes(t2.tag))) {
      if (t2.operationId) {
        if (t2.operationId.startsWith("*")) {
          if (!l2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e9, path: n2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let eu = function(e7) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e7.replace(/{([\s\S]+?)}/g, (e9, r2) => [].concat(t2[r2] || e9).join(","));
}, em = r(() => ep.empty(), { name: "OpenAPI" }), eh = (e7) => (t2, r2) => t2[e7] == r2[e7] ? 0 : t2[e7] < r2[e7] ? -1 : 1, ey = a((r2, a2) => {
  let {} = r2, {} = a2, u2 = em.use(), m2 = new e({ operationId: void 0 }), h2 = new B();
  t(h2, W(200), R((e7) => {
    m2.next((t2) => {
      t2.operationId = `*${null != e7 ? e7 : ""}`;
    });
  }), o());
  let y2 = i(null);
  t(y2, q((e7) => {
    if (e7) {
      let t2 = (t3) => {
        t3 && e7.scrollTo({ top: t3.offsetTop - e7.offsetTop });
      };
      return new A(() => {
        let r3 = new MutationObserver((e9) => {
          for (let r4 of e9) if ("attributes" === r4.type) {
            let e10 = r4.target;
            e10.classList.contains("router-link-active") && t2(e10);
          }
        });
        return r3.observe(e7, { attributes: true, subtree: true }), setTimeout(() => {
          t2(e7.querySelector(".router-link-active"));
        }, 100), () => {
          r3.disconnect();
        };
      });
    }
    return L;
  }), l());
  let f2 = t(m2, q((e7) => u2.operations$(e7)), s((e7) => {
    let t2 = Object.groupBy(e7, (e9) => e9.group);
    return n(ev, { children: [d(eg, { children: d("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e9) => {
      h2.next(e9.target.value);
    } }) }), d(eb, { sx: { flex: 1, overflow: "scroll" }, ref: y2, children: Object.entries(t2).toSorted().map((e9) => {
      let [t3, r3] = e9;
      return n("div", { "data-nav-group": true, children: [d("div", { "data-nav-group-heading": true, children: t3 }), d("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(eh("operationId")).map((e10) => {
        var t4;
        return n(e$, { component: p, to: `/operations/${e10.operationId}`, children: [d(Q, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e10.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e10.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-id": true, children: e10.operationId }), e10.summary ? d("div", { "data-operation-summary": true, children: e10.summary != e10.operationId ? e10.summary : d("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => n(ef, { children: [f2, d(ex, { children: d(c, {}) })] });
}, { displayName: "OpenAPIView" }), ef = G("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), ev = G("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eg = G("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eb = G("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ex = G("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), e$ = G("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), e_ = G("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), ew = G("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eP = G("div", (e7, t2) => {
  let { slots: r2 } = t2, a2 = eN.use();
  return (t3) => {
    var i2, n2;
    return d(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e7.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eI = G("div", (e7, t2) => {
  let {} = t2;
  return (t3) => {
    var r2, a2;
    let i2 = null !== (r2 = g.metaProp(e7.schema, "title")) && void 0 !== r2 ? r2 : "", o2 = null !== (a2 = g.metaProp(e7.schema, "description")) && void 0 !== a2 ? a2 : "";
    return i2 || o2 ? n(t3, { children: [i2, " ", o2 ? d(ee, { title: d(eS, { children: d(X, { text: o2 }) }), children: d(Y, { path: Z }) }) : null] }) : null;
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${Y}`]: { width: 12, height: 12, overflow: "hidden" } }), eS = G("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), ek = (e7) => {
  let { name: t2, value: r2, extra: a2 } = e7;
  return "" == r2 ? null : d(eP, { children: n(e_, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(e_, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, Object.entries(null != a2 ? a2 : {}).map((e9) => {
    let [t3, r3] = e9;
    return n(m, { children: [n(e_, { sx: { opacity: 0.5 }, children: [",", " "] }), d(e_, { sx: { opacity: 0.5 }, children: t3 }), n(e_, { sx: { opacity: 0.5 }, children: [":", " "] }), d(e_, { sx: { opacity: 0.7 }, children: r3 })] });
  }), d(e_, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eN = r(() => ({ indent: 0 }), { name: "IntentContext" }), eO = u((e7, t2) => {
  let {} = e7, { slots: r2 } = t2, a2 = eN.use();
  return () => {
    var e9;
    return d(eN, { value: { indent: a2.indent + 1 }, children: null === (e9 = r2.default) || void 0 === e9 ? void 0 : e9.call(r2) });
  };
}, { displayName: "Indent" });
class eC {
  constructor(e7, t2) {
    this.id = e7, this.parent = t2;
  }
  child(e7) {
    return new eC(e7, this);
  }
  safe(e7) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e7) return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let ej = r(() => new eC("")), eq = a((e7) => {
  let t2 = ej.use();
  return () => {
    let r2 = e7.schema, a2 = g.schemaProp(e7.schema, "$ref"), i2 = "intersection" == (r2 = g.schemaProp(e7.schema, g.unwrap)()).type || "object" == r2.type || "union" == r2.type || "record" == r2.type || "array" == r2.type || "union" == r2.type;
    return n(ej, { value: t2.child(a2), children: [i2 && d(p, { to: `#${a2}`, children: n(e_, { id: a2, children: [a2, " "] }) }), t2.safe(a2) && d(eT, { schema: r2 })] });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eT = a((e7) => {
  let t2 = e7.schema;
  return g.schemaProp(t2, "$ref") ? d(eq, { schema: t2 }) : () => {
    var e9, r2, a2, i2, o2, l2, s2, p2;
    switch (t2.type) {
      case "union":
        return d(m, { children: null === (e9 = g.schemaProp(t2, "oneOf")) || void 0 === e9 ? void 0 : e9.map((e10, t3) => n(m, { children: [t3 > 0 && n(e_, { children: [" ", " | ", " "] }), d(eT, { schema: e10 })] })) });
      case "intersection":
        return d(e_, { children: null === (r2 = g.schemaProp(t2, "allOf")) || void 0 === r2 ? void 0 : r2.filter((e10) => !Object.keys(e10).length).map((e10, t3) => n(m, { children: [t3 > 0 && n(e_, { children: [" ", "&", " "] }), d(eT, { schema: e10 })] })) });
      case "array":
        return n(e_, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(e_, { children: "Array<" }), d(eT, { schema: null !== (a2 = g.schemaProp(t2, "items")) && void 0 !== a2 ? a2 : x() }), d(e_, { children: ">" })] });
      case "object":
        return n(m, { children: [d(e_, { children: "{" }), d(eO, { children: d(m, { children: Object.entries(null !== (i2 = g.schemaProp(t2, "properties")) && void 0 !== i2 ? i2 : {}).map((e10) => {
          var r3;
          let [a3, i3] = e10;
          return i3 ? d(m, { children: n(eP, { spacing: 2, children: [d(eI, { schema: i3 }), n(e_, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [d(ew, { nullable: g.schemaProp(t2, "nullable"), deprecated: g.schemaProp(t2, "deprecated"), optional: !(null !== (r3 = g.schemaProp(t2, "required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), d(e_, { sx: { mr: "1em" }, children: ":" }), d(eT, { schema: i3 })] })] }) }) : null;
        }) }) }), d(e_, { children: "}" })] });
      case "record":
        return n(m, { children: [d(e_, { children: "{" }), g.schemaProp(t2, "additionalProperties") && d(m, { children: d(eO, { children: n(eP, { children: [n(e_, { sx: { mr: 1 }, children: ["[K:", " "] }), d(eT, { schema: null !== (o2 = g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : b() }), n(e_, { sx: { mr: 1 }, children: ["]:", " "] }), d(eT, { schema: null !== (l2 = g.schemaProp(t2, "additionalProperties")) && void 0 !== l2 ? l2 : x() })] }) }) }), d(e_, { children: "}" })] });
      case "enums": {
        let e10 = null !== (s2 = g.schemaProp(t2, "enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e10.length) return d(e_, { children: JSON.stringify(e10[0]) });
        let r3 = "any";
        return e10.length > 0 && (r3 = typeof e10[0]), n(m, { children: [d(e_, { sx: { fontWeight: "bold" }, children: r3 }), d(eO, { children: e10.map((e11, r4) => {
          var a3;
          return d(ek, { name: "enum", value: `${e11}`, extra: (null === (a3 = g.metaProp(t2, "enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: JSON.stringify(g.metaProp(t2, "enumLabels")[r4]) } : {} }, e11);
        }) })] });
      }
    }
    let [c2, u2, h2] = [t2.type, g.schemaProp(t2, "format"), g.schemaProp(t2, "default")];
    return n(m, { children: [d(e_, { sx: { fontWeight: "bold" }, children: c2 || "any" }), n(eO, { children: [u2 && d(ek, { name: "format", value: u2 }), !E(h2) && d(ek, { name: "default", value: h2 }), !eD(t2) && d(ek, { name: "validate", value: eD(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eD(e7) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e7, t2));
}
let eL = a({ code: $(), response: $() }, (e7) => {
  let t2 = em.use();
  return () => {
    var r2, a2;
    return n(eF, { children: [d(eB, { "data-failed": function(e9) {
      try {
        return Number(e9) >= 400;
      } catch (e10) {
        return false;
      }
    }(e7.code), children: e7.code }), n(Q, { sx: { pl: "4em" }, children: [d(m, { children: null === (r2 = e7.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e9) => function() {
      let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e10.startsWith("StatusError{") ? e10.slice(12, e10.length - 1).split(",").reduce((e11, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return E(r3) || E(a3) ? e11 : { ...e11, [r3]: a3 };
      }, {}) : null;
    }(e9)).map((e9) => e9 ? d(Q, { sx: { mb: 16 }, children: n(eP, { spacing: 0, children: [n(e_, { children: ["{", " "] }), d(eO, { children: Object.entries(e9).map((e10) => {
      let [t3, r3] = e10;
      return "code" === t3 ? null : n(eP, { children: [d(ew, { children: t3 }), d(e_, { children: ": " }), d(e_, { children: r3 })] });
    }) }), n(e_, { children: [" ", "}"] })] }) }) : null) }), d(m, { children: Object.entries(null !== (a2 = e7.response.content) && void 0 !== a2 ? a2 : {}).map((e9) => {
      let [r3, { schema: a3 }] = e9;
      return n(eR, { children: [d(eP, { spacing: 0, children: d(eT, { schema: _.decode(a3, (e10) => {
        var r4;
        return [null !== (r4 = t2.schema(e10)) && void 0 !== r4 ? r4 : {}, w(e10)];
      }) }) }), d("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), eF = G("section", { displayName: "ResponseSection" })({}), eB = G("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eR = G("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eW = G("div", (e7, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, i2, o2, l2;
    let s2 = e7.valued, p2 = e7.invalid, c2 = e7.disabled, u2 = (null !== (l2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== l2 ? l2 : []).map((e9) => {
      if ("input" === e9.type) {
        var t4, r3, a3, i3, n2, o3;
        return s2 = !!(null !== (n2 = null !== (i3 = null === (t4 = e9.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i3 ? i3 : null === (r3 = e9.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n2 ? n2 : s2), c2 = null !== (o3 = null === (a3 = e9.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, h(e9, { disabled: c2 });
      }
      return h(e9);
    });
    return n(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e7.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [n("div", { "data-input-container": true, children: [n("div", { "data-input-decorator-container": true, children: [d("div", { "data-input-decorator-leading": true }), d("div", { "data-input-decorator-label": true, children: d("div", { "data-input-label": true, children: null === (i2 = r2.label) || void 0 === i2 ? void 0 : i2.call(r2) }) }), d("div", { "data-input-decorator-trailing": true })] }), n("div", { "data-input-row": true, children: [r2.leading && d(eA, { role: "leading", children: r2.leading() }), u2, r2.trailing && d(eA, { role: "trailing", children: r2.trailing() })] })] }), r2.supporting && d("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eA = G("div", { role: P(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eJ = a((e7, r2) => {
  let {} = r2, a2 = el.of(e7.field$.typedef, E(e7.field$.input) ? void 0 : e7.field$.input);
  return t(a2, J(1), R((t2) => {
    e7.field$.update(t2);
  }), o()), () => d(eM, { children: d(es, { value: a2, children: d(ed, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eM = G("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eH = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eV = (e7) => {
  let { field: t2, value: r2 } = e7;
  return n(Q, { component: "span", sx: { display: "block" }, children: [n(Q, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), d("span", { children: r2 })] });
}, ez = (e7) => {
  let { method: t2, url: r2, params: a2 } = e7, i2 = O(a2);
  return n(Q, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, n(Q, { component: "span", sx: { fontWeight: "medium" }, children: [r2, i2 ? `?${i2}` : ""] }), " HTTP/*"] });
}, eE = (e7, t2) => {
  let r2 = (t3, a2) => a2 instanceof File || a2 instanceof Blob ? `${e7}
Content-Disposition: form-data; name="${t3}"${a2.name ? `; filename="${a2.name}"` : ""}
Content-Type: ${a2.type}

[File Content]
` : U(a2) ? a2.map((e9) => r2(t3, e9)).join("\n") : `${e7}
Content-Disposition: form-data; name="${t3}"

${K(a2) ? JSON.stringify(a2) : String(a2)}
`;
  return Object.entries(t2).map((e9) => {
    let [t3, a2] = e9;
    return r2(t3, a2);
  }).join("\n") + `${e7}--`;
}, eU = u({ $default: $().optional() }, (e7, t2) => {
  let {} = e7, { slots: r2 } = t2;
  return () => {
    var e9;
    return d(Q, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: d(Q, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: d("code", { children: null === (e9 = r2.default) || void 0 === e9 ? void 0 : e9.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), eK = u({ request: $() }, (e7) => () => {
  let t2 = e7.request;
  return n(eU, { children: [d(ez, { ...t2 }), d(m, { children: Object.entries({ ...eH(), ...t2.headers }).toSorted().map((e9) => {
    let [t3, r2] = e9;
    return d(eV, { field: t3, value: r2 }, t3);
  }) }), t2.body && n(m, { children: [d("br", {}), function(e9) {
    if (eX(e9.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e9.headers = { ...e9.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, eE(t3, e9.body);
    }
    return eX(e9.headers).includes("application/x-www-form-urlencoded") ? O(e9.body) : eY(e9.headers) ? JSON.stringify(e9.body, null, 2) : e9.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), eG = (e7, t2) => {
  let r2 = new Uint8Array(e7), a2 = "";
  for (let e9 = r2.byteLength, t3 = 0; t3 < e9; t3++) a2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, eQ = u({ response: $() }, (e7, t2) => {
  let {} = t2;
  return () => {
    let t3 = e7.response;
    return eX(t3.headers).includes("image/") ? d("div", { children: d("img", { src: eG(t3.body, eX(t3.headers)), alt: "" }) }) : n(eU, { children: [n("span", { children: ["HTTP/* ", t3.status] }), d("br", {}), t3.headers && d(m, { children: Object.entries(t3.headers).map((e9) => {
      let [t4, r2] = e9;
      return d(eV, { field: t4, value: r2 }, t4);
    }) }), d("br", {}), t3.body ? eY(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function eX() {
  let e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e7)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let eY = (e7) => eX(e7).includes("application/json"), eZ = a({ operationID: b() }, (e7) => t(em.use().response$(e7.operationID), s((e9) => d(e0, { children: d(eQ, { response: e9 }) }))), { displayName: "ResponsePreview" }), e0 = G("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), e1 = a((e7, r2) => {
  var a2, i2, l2, p2;
  let { slots: c2 } = r2, u2 = em.use(), m2 = {};
  for (let t2 of null !== (a2 = e7.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e9 = _.decode(t2.schema, (e10) => {
      var t3;
      return [null !== (t3 = u2.schema(e10)) && void 0 !== t3 ? t3 : {}, w(e10)];
    }).use(ea(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e9 = e9.optional()), e9.use(ei(t2.schema.title)), ["object", "array"].includes(null !== (i2 = t2.schema.type) && void 0 !== i2 ? i2 : "") ? m2[t2.name] = e9.use(en(eJ)) : m2[t2.name] = e9;
  }
  if (e7.operation.requestBody) {
    let t2 = Object.entries(null !== (l2 = e7.operation.requestBody.content) && void 0 !== l2 ? l2 : {})[0];
    if (t2) {
      let [e9, r3] = t2, a3 = _.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e10) => {
        var t3;
        return [null !== (t3 = u2.schema(e10)) && void 0 !== t3 ? t3 : {}, w(e10)];
      }).use(ea(`body, content-type = ${JSON.stringify(e9)}`));
      e9.includes("json") ? m2.body = a3.use(en(eJ)) : e9.includes("octet-stream") ? m2.body = a3.use(en(e8)) : m2.body = a3;
    }
  }
  let h2 = f(), y2 = v(), g2 = eo.of(S(m2), (() => {
    try {
      var e9;
      let t2 = y2.query.params;
      return JSON.parse(atob(null !== (e9 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e9 ? e9 : ""));
    } catch (e10) {
    }
    return {};
  })());
  t(g2, R((t2) => {
    u2.request(e7.operation.operationId, t2);
  }), R((e9) => {
    h2.replace({ query: { params: btoa(JSON.stringify(e9)) } });
  }), o());
  let b2 = t(g2.inputs$, s((t2) => {
    let r3 = u2.asRequestConfigCreator(e7.operation.operationId);
    return r3 ? d(eK, { request: r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return n(Q, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e9) => {
      e9.preventDefault(), g2.submit();
    }, children: [d(Q, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: [...g2.fields(g2.typedef)].map((e9) => d(e2, { field$: e9 })) }), d(Q, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: n(Q, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [b2, d(Q, { sx: { px: 8 }, children: d(et, { type: "submit", children: "发起请求" }) }), d(eZ, { operationID: e7.operation.operationId }), d(Q, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e7.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), e2 = a((e7, r2) => {
  let { field$: a2 } = e7, { render: i2 } = r2;
  return y(() => {
    a2.destroy();
  }), t(M([a2, a2.input$]), i2((e9) => {
    var t2, r3, i3;
    let [o2, l2] = e9, s2 = null !== (t2 = g.metaProp(a2.typedef, "inputBy")) && void 0 !== t2 ? t2 : e4, p2 = null !== (r3 = g.metaProp(a2.typedef, "readOnlyWhenInitialExist")) && void 0 !== r3 && r3 && !!o2.initial;
    return d(eW, { valued: !E(null != l2 ? l2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: n("span", { children: [null !== (i3 = a2.meta.label) && void 0 !== i3 ? i3 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: n(eP, { children: [d(eI, { schema: a2.typedef }), d(eT, { schema: a2.typedef })] }), $trailing: s2.$trailing, children: d(s2, { field$: a2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), e4 = u({ readOnly: I().optional(), field$: $() }, (e7) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e7;
  return d("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e9) => {
    let t3 = e9.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(r2.typedef.create(parseFloat(t3)));
        } catch (e10) {
        }
        break;
      case "integer":
        try {
          r2.update(r2.typedef.create(parseInt(t3)));
        } catch (e10) {
        }
        break;
      case "boolean":
        try {
          r2.update(r2.typedef.create("false" !== t3 || !!t3));
        } catch (e10) {
        }
        break;
      default:
        r2.update(r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), e8 = a((e7) => {
  let r2 = i(null);
  return t(r2, R((t2) => {
    t2 && e7.field$.update(t2);
  }), l()), () => {
    var t2;
    let { readOnly: a2, accept: i2 } = e7;
    return n(Q, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [d("input", { type: "file", name: e7.field$.name, readonly: a2, accept: i2, "data-file-input": true, onChange: (e9) => {
      var t3;
      let a3 = null === (t3 = e9.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), d(Y, { path: er }), d("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), e6 = a({ operationId: b() }, (e7, r2) => {
  let {} = r2, a2 = em.use(), i2 = t(e7.operationId$, q((e9) => a2.operation$(e9))), o2 = t(i2, H((e9) => !!e9)), l2 = t(o2, s((e9) => {
    var t2;
    return n(e5, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e9.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [d("div", { "data-operation-method": true, children: e9.method }), n("div", { "data-operation-desc": true, children: [d("div", { "data-operation-path": true, children: e9.path }), n("div", { "data-operation-summary": true, children: [e9.summary, " ", e9.operationId != e9.summary ? e9.operationId : ""] })] })] });
  })), p2 = t(o2, s((e9) => {
    var t2;
    return d(Q, { sx: { px: 24 }, children: d(X, { text: null !== (t2 = e9.description) && void 0 !== t2 ? t2 : "" }) });
  })), c2 = t(o2, s((e9) => {
    var t2;
    return d(e1, { operation: e9, children: d(m, { children: Object.entries(null !== (t2 = e9.responses) && void 0 !== t2 ? t2 : {}).map((e10) => {
      let [t3, r3] = e10;
      return d(eL, { code: t3, response: r3 }, t3);
    }) }) }, e9.operationId);
  }));
  return t(i2, s((e9) => e9 ? n(e3, { children: [l2, p2, d(Q, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: d(Q, { sx: { flex: 1, overflow: "auto" }, children: c2 }) })] }, e9.operationId) : null));
}, { displayName: "OperationView" }), e3 = G("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), e5 = G("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  em as O,
  e6 as a,
  ey as b
};
