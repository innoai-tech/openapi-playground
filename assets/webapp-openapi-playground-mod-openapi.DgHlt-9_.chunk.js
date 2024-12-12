var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ep_instances, r_get, a_fn;
import { I as e, r as t, c as r, a, o as i, e as n, s as o, y as l, k as s, j as d, C as p, R as c, d as u, F as m, b as h, D as y, E as f, G as v } from "./lib-nodepkg-vuekit.CJr2PA1p.chunk.js";
import { S as g, s as b, a as x, c as $, e as _, f as w, g as P, h as I, o as S } from "./lib-nodepkg-typedef.S8A8zKcZ.chunk.js";
import { c as k, a as N, p as O, t as C } from "./vendor-innoai-tech-fetcher.Cqb_7ot-.chunk.js";
import { B as j, s as q, b as T, m as D, E as L, o as F, S as B, t as R, k as W, O as A, l as J, c as M, n as H } from "./vendor-rxjs.ByE15jUQ.chunk.js";
import { w as V, g as z, a as E, d as U, e as K } from "./vendor-innoai-tech-lodash.BIXzStxr.chunk.js";
import { s as G, B as Q } from "./lib-nodepkg-vueuikit.D8fdV20v.chunk.js";
import { M as X } from "./lib-nodepkg-vuemarkdown.BI8o8P3U.chunk.js";
import { I as Y, m as Z, T as ee, F as et, f as er } from "./lib-nodepkg-vuematerial.CyRJIG2i.chunk.js";
import { l as ea, h as ei, i as en, F as eo } from "./lib-nodepkg-vueformdata.SkfFHvId.chunk.js";
import { J as el, a as es, b as ed } from "./lib-nodepkg-jsoneditor.BQ4o8X9R.chunk.js";
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
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      let r2 = /* @__PURE__ */ t2.get(e7);
      return r2 ? D(r2, r2.error$) : L;
    }));
  }
  requesting$(e7) {
    return t(__privateGet(this, _t), /* @__PURE__ */ q((t2) => {
      var r2, a2;
      return null !== (a2 = null === (r2 = /* @__PURE__ */ t2.get(e7)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== a2 ? a2 : F(false);
    }));
  }
  asRequestConfigCreator(e7) {
    var t2, r2;
    let a2 = /* @__PURE__ */ __privateMethod(this, _ep_instances, a_fn).call(this, e7);
    if (!a2) return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = a2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e9) => {
      var t3, r3;
      return { method: a2.method, url: __privateGet(this, _ep_instances, r_get) + eu(a2.path, e9), params: /* @__PURE__ */ V(e9, null === (t3 = a2.parameters) || void 0 === t3 ? void 0 : t3.filter((e10) => "query" == e10.in).map((e10) => e10.name)), headers: { ...V(e9, null === (r3 = a2.parameters) || void 0 === r3 ? void 0 : r3.filter((e10) => "header" == e10.in).map((e10) => e10.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e9.body, inputs: e9 };
    };
  }
  request(e7, t2) {
    let r2 = /* @__PURE__ */ __privateGet(this, _t).value.get(e7);
    if (!r2) {
      let t3 = /* @__PURE__ */ this.asRequestConfigCreator(e7);
      if (!t3) return;
      r2 = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign(t3, { operationID: e7, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e7, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e7) {
    return t(this, /* @__PURE__ */ q((t2) => {
      for (let r2 of ec(t2, { operationId: e7 })) if (r2) return F(r2);
      return F(null);
    }));
  }
  operations$(e7) {
    return t(this, /* @__PURE__ */ q((t2) => F([.../* @__PURE__ */ ec(t2, e7)])));
  }
  schema$(e7) {
    var r2, a2;
    let i2 = null !== (a2 = null === (r2 = e7.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== a2 ? a2 : [];
    return t(this, /* @__PURE__ */ q((e9) => {
      if (i2) {
        var t2;
        return F(null !== (t2 = /* @__PURE__ */ z(e9, i2)) && void 0 !== t2 ? t2 : null);
      }
      return F(null);
    }), /* @__PURE__ */ T((e9) => e9 ? { ...e9, $id: i2[i2.length - 1] } : e9));
  }
  schema(e7) {
    var t2, r2, a2;
    let i2 = null !== (r2 = null === (t2 = e7.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2) return null !== (a2 = /* @__PURE__ */ z(this.value, i2)) && void 0 !== a2 ? a2 : void 0;
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
          if (!l2.operationId.toLowerCase().includes(/* @__PURE__ */ t2.operationId.slice(1).toLowerCase())) continue;
        } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
      }
      yield { ...l2, method: e9, path: n2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
    }
  }
}
let eu = function(e7) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e7.replace(/{([\s\S]+?)}/g, (e9, r2) => [].concat(t2[r2] || e9).join(","));
}, em = /* @__PURE__ */ r(() => ep.empty(), { name: "OpenAPI" }), eh = (e7) => (t2, r2) => t2[e7] == r2[e7] ? 0 : t2[e7] < r2[e7] ? -1 : 1, ey = /* @__PURE__ */ a((r2, a2) => {
  let {} = r2, {} = a2, u2 = /* @__PURE__ */ em.use(), m2 = new e({ operationId: void 0 }), h2 = new B();
  t(h2, /* @__PURE__ */ W(200), /* @__PURE__ */ R((e7) => {
    m2.next((t2) => {
      t2.operationId = `*${null != e7 ? e7 : ""}`;
    });
  }), /* @__PURE__ */ o());
  let y2 = /* @__PURE__ */ i(null);
  t(y2, /* @__PURE__ */ q((e7) => {
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
          t2(/* @__PURE__ */ e7.querySelector(".router-link-active"));
        }, 100), () => {
          r3.disconnect();
        };
      });
    }
    return L;
  }), /* @__PURE__ */ l());
  let f2 = /* @__PURE__ */ t(m2, /* @__PURE__ */ q((e7) => u2.operations$(e7)), /* @__PURE__ */ s((e7) => {
    let t2 = /* @__PURE__ */ Object.groupBy(e7, (e9) => e9.group);
    return /* @__PURE__ */ n(ev, { children: [/* @__PURE__ */ d(eg, { children: /* @__PURE__ */ d("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e9) => {
      h2.next(e9.target.value);
    } }) }), /* @__PURE__ */ d(eb, { sx: { flex: 1, overflow: "scroll" }, ref: y2, children: /* @__PURE__ */ Object.entries(t2).toSorted().map((e9) => {
      let [t3, r3] = e9;
      return /* @__PURE__ */ n("div", { "data-nav-group": true, children: [/* @__PURE__ */ d("div", { "data-nav-group-heading": true, children: t3 }), /* @__PURE__ */ d("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(/* @__PURE__ */ eh("operationId")).map((e10) => {
        var t4;
        return /* @__PURE__ */ n(e$, { component: p, to: `/operations/${e10.operationId}`, children: [/* @__PURE__ */ d(Q, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e10.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e10.method }), /* @__PURE__ */ n("div", { "data-operation-desc": true, children: [/* @__PURE__ */ d("div", { "data-operation-id": true, children: e10.operationId }), e10.summary ? /* @__PURE__ */ d("div", { "data-operation-summary": true, children: e10.summary != e10.operationId ? e10.summary : /* @__PURE__ */ d("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => /* @__PURE__ */ n(ef, { children: [f2, /* @__PURE__ */ d(ex, { children: /* @__PURE__ */ d(c, {}) })] });
}, { displayName: "OpenAPIView" }), ef = /* @__PURE__ */ G("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), ev = /* @__PURE__ */ G("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eg = /* @__PURE__ */ G("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eb = /* @__PURE__ */ G("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ex = /* @__PURE__ */ G("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), e$ = /* @__PURE__ */ G("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), e_ = /* @__PURE__ */ G("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), ew = /* @__PURE__ */ G("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eP = /* @__PURE__ */ G("div", (e7, t2) => {
  let { slots: r2 } = t2, a2 = /* @__PURE__ */ eN.use();
  return (t3) => {
    var i2, n2;
    return /* @__PURE__ */ d(t3, { style: { paddingLeft: `${a2.indent}em`, marginTop: (null !== (n2 = e7.spacing) && void 0 !== n2 ? n2 : 0) * 0.5 }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eI = /* @__PURE__ */ G("div", (e7, t2) => {
  let {} = t2;
  return (t3) => {
    var r2, a2;
    let i2 = null !== (r2 = /* @__PURE__ */ g.metaProp(e7.schema, "title")) && void 0 !== r2 ? r2 : "", o2 = null !== (a2 = /* @__PURE__ */ g.metaProp(e7.schema, "description")) && void 0 !== a2 ? a2 : "";
    return i2 || o2 ? /* @__PURE__ */ n(t3, { children: [i2, " ", o2 ? /* @__PURE__ */ d(ee, { title: /* @__PURE__ */ d(eS, { children: /* @__PURE__ */ d(X, { text: o2 }) }), children: /* @__PURE__ */ d(Y, { path: Z }) }) : null] }) : null;
  };
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${Y}`]: { width: 12, height: 12, overflow: "hidden" } }), eS = /* @__PURE__ */ G("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), ek = (e7) => {
  let { name: t2, value: r2, extra: a2 } = e7;
  return "" == r2 ? null : /* @__PURE__ */ d(eP, { children: /* @__PURE__ */ n(e_, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ d(e_, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, /* @__PURE__ */ Object.entries(null != a2 ? a2 : {}).map((e9) => {
    let [t3, r3] = e9;
    return /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ n(e_, { sx: { opacity: 0.5 }, children: [",", " "] }), /* @__PURE__ */ d(e_, { sx: { opacity: 0.5 }, children: t3 }), /* @__PURE__ */ n(e_, { sx: { opacity: 0.5 }, children: [":", " "] }), /* @__PURE__ */ d(e_, { sx: { opacity: 0.7 }, children: r3 })] });
  }), /* @__PURE__ */ d(e_, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eN = /* @__PURE__ */ r(() => ({ indent: 0 }), { name: "IntentContext" }), eO = /* @__PURE__ */ u((e7, t2) => {
  let {} = e7, { slots: r2 } = t2, a2 = /* @__PURE__ */ eN.use();
  return () => {
    var e9;
    return /* @__PURE__ */ d(eN, { value: { indent: a2.indent + 1 }, children: null === (e9 = r2.default) || void 0 === e9 ? void 0 : e9.call(r2) });
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
let ej = /* @__PURE__ */ r(() => new eC("")), eq = /* @__PURE__ */ a((e7) => {
  let t2 = /* @__PURE__ */ ej.use();
  return () => {
    let r2 = e7.schema, a2 = /* @__PURE__ */ g.schemaProp(e7.schema, "$ref"), i2 = "intersection" == (r2 = /* @__PURE__ */ g.schemaProp(e7.schema, g.unwrap)()).type || "object" == r2.type || "union" == r2.type || "record" == r2.type || "array" == r2.type || "union" == r2.type;
    return /* @__PURE__ */ n(ej, { value: /* @__PURE__ */ t2.child(a2), children: [i2 && /* @__PURE__ */ d(p, { to: `#${a2}`, children: /* @__PURE__ */ n(e_, { id: a2, children: [a2, " "] }) }), t2.safe(a2) && /* @__PURE__ */ d(eT, { schema: r2 })] });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eT = a((e7) => {
  let t2 = e7.schema;
  return g.schemaProp(t2, "$ref") ? /* @__PURE__ */ d(eq, { schema: t2 }) : () => {
    var e9, r2, a2, i2, o2, l2, s2, p2;
    switch (t2.type) {
      case "union":
        return /* @__PURE__ */ d(m, { children: null === (e9 = /* @__PURE__ */ g.schemaProp(t2, "oneOf")) || void 0 === e9 ? void 0 : e9.map((e10, t3) => /* @__PURE__ */ n(m, { children: [t3 > 0 && /* @__PURE__ */ n(e_, { children: [" ", " | ", " "] }), /* @__PURE__ */ d(eT, { schema: e10 })] })) });
      case "intersection":
        return /* @__PURE__ */ d(e_, { children: null === (r2 = /* @__PURE__ */ g.schemaProp(t2, "allOf")) || void 0 === r2 ? void 0 : r2.filter((e10) => !Object.keys(e10).length).map((e10, t3) => /* @__PURE__ */ n(m, { children: [t3 > 0 && /* @__PURE__ */ d(e_, { children: "&" }), /* @__PURE__ */ d(eT, { schema: e10 })] })) });
      case "array":
        return /* @__PURE__ */ n(e_, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ d(e_, { children: "Array<" }), /* @__PURE__ */ d(eT, { schema: null !== (a2 = /* @__PURE__ */ g.schemaProp(t2, "items")) && void 0 !== a2 ? a2 : x() }), /* @__PURE__ */ d(e_, { children: ">" })] });
      case "object":
        return /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ d(e_, { children: "{" }), /* @__PURE__ */ d(eO, { children: /* @__PURE__ */ d(m, { children: /* @__PURE__ */ Object.entries(null !== (i2 = /* @__PURE__ */ g.schemaProp(t2, "properties")) && void 0 !== i2 ? i2 : {}).map((e10) => {
          var r3;
          let [a3, i3] = e10;
          return i3 ? /* @__PURE__ */ d(m, { children: /* @__PURE__ */ n(eP, { spacing: 2, children: [/* @__PURE__ */ d(eI, { schema: i3 }), /* @__PURE__ */ n(e_, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [/* @__PURE__ */ d(ew, { nullable: /* @__PURE__ */ g.schemaProp(t2, "nullable"), deprecated: /* @__PURE__ */ g.schemaProp(t2, "deprecated"), optional: !(null !== (r3 = /* @__PURE__ */ g.schemaProp(t2, "required")) && void 0 !== r3 ? r3 : []).includes(a3), children: a3 }), /* @__PURE__ */ d(e_, { sx: { mr: "1em" }, children: ":" }), /* @__PURE__ */ d(eT, { schema: i3 })] })] }) }) : null;
        }) }) }), /* @__PURE__ */ d(e_, { children: "}" })] });
      case "record":
        return /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ d(e_, { children: "{" }), g.schemaProp(t2, "additionalProperties") && /* @__PURE__ */ d(m, { children: /* @__PURE__ */ d(eO, { children: /* @__PURE__ */ n(eP, { children: [/* @__PURE__ */ n(e_, { sx: { mr: 1 }, children: ["[K:", " "] }), /* @__PURE__ */ d(eT, { schema: null !== (o2 = /* @__PURE__ */ g.schemaProp(t2, "propertyNames")) && void 0 !== o2 ? o2 : b() }), /* @__PURE__ */ n(e_, { sx: { mr: 1 }, children: ["]:", " "] }), /* @__PURE__ */ d(eT, { schema: null !== (l2 = /* @__PURE__ */ g.schemaProp(t2, "additionalProperties")) && void 0 !== l2 ? l2 : x() })] }) }) }), /* @__PURE__ */ d(e_, { children: "}" })] });
      case "enums": {
        let e10 = null !== (s2 = /* @__PURE__ */ g.schemaProp(t2, "enum")) && void 0 !== s2 ? s2 : [];
        if (1 == e10.length) return /* @__PURE__ */ d(e_, { children: /* @__PURE__ */ JSON.stringify(e10[0]) });
        let r3 = "any";
        return e10.length > 0 && (r3 = typeof e10[0]), /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ d(e_, { sx: { fontWeight: "bold" }, children: r3 }), /* @__PURE__ */ d(eO, { children: /* @__PURE__ */ e10.map((e11, r4) => {
          var a3;
          return /* @__PURE__ */ d(ek, { name: "enum", value: `${e11}`, extra: (null === (a3 = /* @__PURE__ */ g.metaProp(t2, "enumLabels")) || void 0 === a3 ? void 0 : a3[r4]) ? { label: /* @__PURE__ */ JSON.stringify(g.metaProp(t2, "enumLabels")[r4]) } : {} }, e11);
        }) })] });
      }
    }
    let [c2, u2, h2] = [t2.type, /* @__PURE__ */ g.schemaProp(t2, "format"), /* @__PURE__ */ g.schemaProp(t2, "default")];
    return /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ d(e_, { sx: { fontWeight: "bold" }, children: c2 || "any" }), /* @__PURE__ */ n(eO, { children: [u2 && /* @__PURE__ */ d(ek, { name: "format", value: u2 }), !E(h2) && /* @__PURE__ */ d(ek, { name: "default", value: h2 }), !eD(t2) && /* @__PURE__ */ d(ek, { name: "validate", value: eD(p2 = t2) ? g.schemaProp(p2, "pattern") ? `@r/${String(/* @__PURE__ */ g.schemaProp(p2, "pattern"))}/` : `@${g.schemaProp(p2, "exclusiveMinimum")} ? "(" : "["}${g.schemaProp(p2, "minProperties") ? g.schemaProp(p2, "minProperties") : g.schemaProp(p2, "minItems") ? g.schemaProp(p2, "minItems") : g.schemaProp(p2, "minimum") ? g.schemaProp(p2, "minimum") : g.schemaProp(p2, "minLength") ? g.schemaProp(p2, "minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${g.schemaProp(p2, "maxProperties") ? g.schemaProp(p2, "maxProperties") : g.schemaProp(p2, "maxItems") ? g.schemaProp(p2, "maxItems") : g.schemaProp(p2, "maximum") ? g.schemaProp(p2, "maximum") : g.schemaProp(p2, "maxLength") ? g.schemaProp(p2, "maxLength") : "string" === p2.type && "uint64" === g.schemaProp(p2, "format") ? "19" : ("number" === p2.type || "integer" === p2.type) && g.schemaProp(p2, "format") ? `${Math.pow(2, Number(/* @__PURE__ */ g.schemaProp(p2, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${g.schemaProp(p2, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function eD(e7) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => g.schemaProp(e7, t2));
}
let eL = /* @__PURE__ */ a({ code: /* @__PURE__ */ $(), response: /* @__PURE__ */ $() }, (e7) => {
  let t2 = /* @__PURE__ */ em.use();
  return () => {
    var r2, a2;
    return /* @__PURE__ */ n(eF, { children: [/* @__PURE__ */ d(eB, { "data-failed": /* @__PURE__ */ function(e9) {
      try {
        return Number(e9) >= 400;
      } catch (e10) {
        return false;
      }
    }(e7.code), children: e7.code }), /* @__PURE__ */ n(Q, { sx: { pl: "4em" }, children: [/* @__PURE__ */ d(m, { children: null === (r2 = e7.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e9) => function() {
      let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e10.startsWith("StatusError{") ? e10.slice(12, e10.length - 1).split(",").reduce((e11, t3) => {
        let [r3, a3] = t3.split("=", 2);
        return E(r3) || E(a3) ? e11 : { ...e11, [r3]: a3 };
      }, {}) : null;
    }(e9)).map((e9) => e9 ? /* @__PURE__ */ d(Q, { sx: { mb: 16 }, children: /* @__PURE__ */ n(eP, { spacing: 0, children: [/* @__PURE__ */ n(e_, { children: ["{", " "] }), /* @__PURE__ */ d(eO, { children: /* @__PURE__ */ Object.entries(e9).map((e10) => {
      let [t3, r3] = e10;
      return "code" === t3 ? null : /* @__PURE__ */ n(eP, { children: [/* @__PURE__ */ d(ew, { children: t3 }), /* @__PURE__ */ d(e_, { children: ": " }), /* @__PURE__ */ d(e_, { children: r3 })] });
    }) }), /* @__PURE__ */ n(e_, { children: [" ", "}"] })] }) }) : null) }), /* @__PURE__ */ d(m, { children: /* @__PURE__ */ Object.entries(null !== (a2 = e7.response.content) && void 0 !== a2 ? a2 : {}).map((e9) => {
      let [r3, { schema: a3 }] = e9;
      return /* @__PURE__ */ n(eR, { children: [/* @__PURE__ */ d(eP, { spacing: 0, children: /* @__PURE__ */ d(eT, { schema: /* @__PURE__ */ _.decode(a3, (e10) => {
        var r4;
        return [null !== (r4 = /* @__PURE__ */ t2.schema(e10)) && void 0 !== r4 ? r4 : {}, /* @__PURE__ */ w(e10)];
      }) }) }), /* @__PURE__ */ d("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), eF = /* @__PURE__ */ G("section", { displayName: "ResponseSection" })({}), eB = /* @__PURE__ */ G("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eR = /* @__PURE__ */ G("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eW = /* @__PURE__ */ G("div", (e7, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var a2, i2, o2, l2;
    let s2 = e7.valued, p2 = e7.invalid, c2 = e7.disabled, u2 = /* @__PURE__ */ (null !== (l2 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : a2.call(r2)) && void 0 !== l2 ? l2 : []).map((e9) => {
      if ("input" === e9.type) {
        var t4, r3, a3, i3, n2, o3;
        return s2 = !!(null !== (n2 = null !== (i3 = null === (t4 = e9.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i3 ? i3 : null === (r3 = e9.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== n2 ? n2 : s2), c2 = null !== (o3 = null === (a3 = e9.props) || void 0 === a3 ? void 0 : a3.disabled) && void 0 !== o3 ? o3 : c2, h(e9, { disabled: c2 });
      }
      return h(e9);
    });
    return /* @__PURE__ */ n(t3, { "data-valued": s2, "data-invalid": p2, "data-disabled": c2, "data-focus-within": e7.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ n("div", { "data-input-container": true, children: [/* @__PURE__ */ n("div", { "data-input-decorator-container": true, children: [/* @__PURE__ */ d("div", { "data-input-decorator-leading": true }), /* @__PURE__ */ d("div", { "data-input-decorator-label": true, children: /* @__PURE__ */ d("div", { "data-input-label": true, children: null === (i2 = r2.label) || void 0 === i2 ? void 0 : i2.call(r2) }) }), /* @__PURE__ */ d("div", { "data-input-decorator-trailing": true })] }), /* @__PURE__ */ n("div", { "data-input-row": true, children: [r2.leading && /* @__PURE__ */ d(eA, { role: "leading", children: /* @__PURE__ */ r2.leading() }), u2, r2.trailing && /* @__PURE__ */ d(eA, { role: "trailing", children: /* @__PURE__ */ r2.trailing() })] })] }), r2.supporting && /* @__PURE__ */ d("div", { "data-input-supporting": true, children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eA = /* @__PURE__ */ G("div", { role: /* @__PURE__ */ P(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eJ = /* @__PURE__ */ a((e7, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ el.of(e7.field$.typedef, E(e7.field$.input) ? void 0 : e7.field$.input);
  return t(a2, /* @__PURE__ */ J(1), /* @__PURE__ */ R((t2) => {
    e7.field$.update(t2);
  }), /* @__PURE__ */ o()), () => /* @__PURE__ */ d(eM, { children: /* @__PURE__ */ d(es, { value: a2, children: /* @__PURE__ */ d(ed, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), eM = /* @__PURE__ */ G("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), eH = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), eV = (e7) => {
  let { field: t2, value: r2 } = e7;
  return /* @__PURE__ */ n(Q, { component: "span", sx: { display: "block" }, children: [/* @__PURE__ */ n(Q, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), /* @__PURE__ */ d("span", { children: r2 })] });
}, ez = (e7) => {
  let { method: t2, url: r2, params: a2 } = e7, i2 = /* @__PURE__ */ O(a2);
  return /* @__PURE__ */ n(Q, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, /* @__PURE__ */ n(Q, { component: "span", sx: { fontWeight: "medium" }, children: [r2, i2 ? `?${i2}` : ""] }), " HTTP/*"] });
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
}, eU = /* @__PURE__ */ u({ $default: /* @__PURE__ */ $().optional() }, (e7, t2) => {
  let {} = e7, { slots: r2 } = t2;
  return () => {
    var e9;
    return /* @__PURE__ */ d(Q, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: /* @__PURE__ */ d(Q, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: /* @__PURE__ */ d("code", { children: null === (e9 = r2.default) || void 0 === e9 ? void 0 : e9.call(r2) }) }) });
  };
}, { displayName: "CodeView" }), eK = /* @__PURE__ */ u({ request: /* @__PURE__ */ $() }, (e7) => () => {
  let t2 = e7.request;
  return /* @__PURE__ */ n(eU, { children: [/* @__PURE__ */ d(ez, { ...t2 }), /* @__PURE__ */ d(m, { children: /* @__PURE__ */ Object.entries({ ...eH(), ...t2.headers }).toSorted().map((e9) => {
    let [t3, r2] = e9;
    return /* @__PURE__ */ d(eV, { field: t3, value: r2 }, t3);
  }) }), t2.body && /* @__PURE__ */ n(m, { children: [/* @__PURE__ */ d("br", {}), /* @__PURE__ */ function(e9) {
    if (eX(e9.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e9.headers = { ...e9.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, eE(t3, e9.body);
    }
    return eX(e9.headers).includes("application/x-www-form-urlencoded") ? O(e9.body) : eY(e9.headers) ? JSON.stringify(e9.body, null, 2) : e9.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), eG = (e7, t2) => {
  let r2 = new Uint8Array(e7), a2 = "";
  for (let e9 = r2.byteLength, t3 = 0; t3 < e9; t3++) a2 += /* @__PURE__ */ String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(a2)}`;
}, eQ = /* @__PURE__ */ u({ response: /* @__PURE__ */ $() }, (e7, t2) => {
  let {} = t2;
  return () => {
    let t3 = e7.response;
    return eX(t3.headers).includes("image/") ? /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d("img", { src: /* @__PURE__ */ eG(t3.body, /* @__PURE__ */ eX(t3.headers)), alt: "" }) }) : /* @__PURE__ */ n(eU, { children: [/* @__PURE__ */ n("span", { children: ["HTTP/* ", t3.status] }), /* @__PURE__ */ d("br", {}), t3.headers && /* @__PURE__ */ d(m, { children: /* @__PURE__ */ Object.entries(t3.headers).map((e9) => {
      let [t4, r2] = e9;
      return /* @__PURE__ */ d(eV, { field: t4, value: r2 }, t4);
    }) }), /* @__PURE__ */ d("br", {}), t3.body ? eY(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function eX() {
  let e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e7)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let eY = (e7) => eX(e7).includes("application/json"), eZ = /* @__PURE__ */ a({ operationID: /* @__PURE__ */ b() }, (e7) => t(/* @__PURE__ */ em.use().response$(e7.operationID), /* @__PURE__ */ s((e9) => /* @__PURE__ */ d(e0, { children: /* @__PURE__ */ d(eQ, { response: e9 }) }))), { displayName: "ResponsePreview" }), e0 = /* @__PURE__ */ G("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), e1 = /* @__PURE__ */ a((e7, r2) => {
  var a2, i2, l2, p2;
  let { slots: c2 } = r2, u2 = /* @__PURE__ */ em.use(), m2 = {};
  for (let t2 of null !== (a2 = e7.operation.parameters) && void 0 !== a2 ? a2 : []) {
    let e9 = /* @__PURE__ */ _.decode(t2.schema, (e10) => {
      var t3;
      return [null !== (t3 = /* @__PURE__ */ u2.schema(e10)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e10)];
    }).use(/* @__PURE__ */ ea(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e9 = /* @__PURE__ */ e9.optional()), e9.use(/* @__PURE__ */ ei(t2.schema.title)), ["object", "array"].includes(null !== (i2 = t2.schema.type) && void 0 !== i2 ? i2 : "") ? m2[t2.name] = /* @__PURE__ */ e9.use(/* @__PURE__ */ en(eJ)) : m2[t2.name] = e9;
  }
  if (e7.operation.requestBody) {
    let t2 = Object.entries(null !== (l2 = e7.operation.requestBody.content) && void 0 !== l2 ? l2 : {})[0];
    if (t2) {
      let [e9, r3] = t2, a3 = /* @__PURE__ */ _.decode(null !== (p2 = r3.schema) && void 0 !== p2 ? p2 : {}, (e10) => {
        var t3;
        return [null !== (t3 = /* @__PURE__ */ u2.schema(e10)) && void 0 !== t3 ? t3 : {}, /* @__PURE__ */ w(e10)];
      }).use(/* @__PURE__ */ ea(`body, content-type = ${JSON.stringify(e9)}`));
      e9.includes("json") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ en(eJ)) : e9.includes("octet-stream") ? m2.body = /* @__PURE__ */ a3.use(/* @__PURE__ */ en(e8)) : m2.body = a3;
    }
  }
  let h2 = /* @__PURE__ */ f(), y2 = /* @__PURE__ */ v(), g2 = /* @__PURE__ */ eo.of(/* @__PURE__ */ S(m2), /* @__PURE__ */ (() => {
    try {
      var e9;
      let t2 = y2.query.params;
      return JSON.parse(/* @__PURE__ */ atob(null !== (e9 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e9 ? e9 : ""));
    } catch (e10) {
    }
    return {};
  })());
  t(g2, /* @__PURE__ */ R((t2) => {
    u2.request(e7.operation.operationId, t2);
  }), /* @__PURE__ */ R((e9) => {
    h2.replace({ query: { params: /* @__PURE__ */ btoa(/* @__PURE__ */ JSON.stringify(e9)) } });
  }), /* @__PURE__ */ o());
  let b2 = /* @__PURE__ */ t(g2.inputs$, /* @__PURE__ */ s((t2) => {
    let r3 = /* @__PURE__ */ u2.asRequestConfigCreator(e7.operation.operationId);
    return r3 ? /* @__PURE__ */ d(eK, { request: /* @__PURE__ */ r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return /* @__PURE__ */ n(Q, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e9) => {
      e9.preventDefault(), g2.submit();
    }, children: [/* @__PURE__ */ d(Q, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: /* @__PURE__ */ [.../* @__PURE__ */ g2.fields(g2.typedef)].map((e9) => /* @__PURE__ */ d(e2, { field$: e9 })) }), /* @__PURE__ */ d(Q, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ n(Q, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [b2, /* @__PURE__ */ d(Q, { sx: { px: 8 }, children: /* @__PURE__ */ d(et, { type: "submit", children: "发起请求" }) }), /* @__PURE__ */ d(eZ, { operationID: e7.operation.operationId }), /* @__PURE__ */ d(Q, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = c2.default) || void 0 === t2 ? void 0 : t2.call(c2) })] }) })] }, e7.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), e2 = /* @__PURE__ */ a((e7, r2) => {
  let { field$: a2 } = e7, { render: i2 } = r2;
  return y(() => {
    a2.destroy();
  }), t(/* @__PURE__ */ M([a2, a2.input$]), /* @__PURE__ */ i2((e9) => {
    var t2, r3, i3;
    let [o2, l2] = e9, s2 = null !== (t2 = /* @__PURE__ */ g.metaProp(a2.typedef, "inputBy")) && void 0 !== t2 ? t2 : e4, p2 = null !== (r3 = /* @__PURE__ */ g.metaProp(a2.typedef, "readOnlyWhenInitialExist")) && void 0 !== r3 && r3 && !!o2.initial;
    return /* @__PURE__ */ d(eW, { valued: !E(null != l2 ? l2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: /* @__PURE__ */ n("span", { children: [null !== (i3 = a2.meta.label) && void 0 !== i3 ? i3 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: /* @__PURE__ */ n(eP, { children: [/* @__PURE__ */ d(eI, { schema: a2.typedef }), /* @__PURE__ */ d(eT, { schema: a2.typedef })] }), $trailing: s2.$trailing, children: /* @__PURE__ */ d(s2, { field$: a2, readOnly: p2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), e4 = /* @__PURE__ */ u({ readOnly: /* @__PURE__ */ I().optional(), field$: /* @__PURE__ */ $() }, (e7) => () => {
  let { readOnly: t2, field$: r2, ...a2 } = e7;
  return /* @__PURE__ */ d("input", { ...a2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e9) => {
    let t3 = e9.target.value;
    switch (r2.typedef.type) {
      case "number":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseFloat(t3)));
        } catch (e10) {
        }
        break;
      case "integer":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create(/* @__PURE__ */ parseInt(t3)));
        } catch (e10) {
        }
        break;
      case "boolean":
        try {
          r2.update(/* @__PURE__ */ r2.typedef.create("false" !== t3 || !!t3));
        } catch (e10) {
        }
        break;
      default:
        r2.update(/* @__PURE__ */ r2.typedef.create(t3));
    }
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}, { displayName: "TextInput" }), e8 = /* @__PURE__ */ a((e7) => {
  let r2 = /* @__PURE__ */ i(null);
  return t(r2, /* @__PURE__ */ R((t2) => {
    t2 && e7.field$.update(t2);
  }), /* @__PURE__ */ l()), () => {
    var t2;
    let { readOnly: a2, accept: i2 } = e7;
    return /* @__PURE__ */ n(Q, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [/* @__PURE__ */ d("input", { type: "file", name: e7.field$.name, readonly: a2, accept: i2, "data-file-input": true, onChange: (e9) => {
      var t3;
      let a3 = null === (t3 = e9.target.files) || void 0 === t3 ? void 0 : t3[0];
      a3 && (r2.value = a3);
    } }), /* @__PURE__ */ d(Y, { path: er }), /* @__PURE__ */ d("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), e6 = /* @__PURE__ */ a({ operationId: /* @__PURE__ */ b() }, (e7, r2) => {
  let {} = r2, a2 = /* @__PURE__ */ em.use(), i2 = /* @__PURE__ */ t(e7.operationId$, /* @__PURE__ */ q((e9) => a2.operation$(e9))), o2 = /* @__PURE__ */ t(i2, /* @__PURE__ */ H((e9) => !!e9)), l2 = /* @__PURE__ */ t(o2, /* @__PURE__ */ s((e9) => {
    var t2;
    return /* @__PURE__ */ n(e5, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e9.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [/* @__PURE__ */ d("div", { "data-operation-method": true, children: e9.method }), /* @__PURE__ */ n("div", { "data-operation-desc": true, children: [/* @__PURE__ */ d("div", { "data-operation-path": true, children: e9.path }), /* @__PURE__ */ n("div", { "data-operation-summary": true, children: [e9.summary, " ", e9.operationId != e9.summary ? e9.operationId : ""] })] })] });
  })), p2 = /* @__PURE__ */ t(o2, /* @__PURE__ */ s((e9) => {
    var t2;
    return /* @__PURE__ */ d(Q, { sx: { px: 24 }, children: /* @__PURE__ */ d(X, { text: null !== (t2 = e9.description) && void 0 !== t2 ? t2 : "" }) });
  })), c2 = /* @__PURE__ */ t(o2, /* @__PURE__ */ s((e9) => {
    var t2;
    return /* @__PURE__ */ d(e1, { operation: e9, children: /* @__PURE__ */ d(m, { children: /* @__PURE__ */ Object.entries(null !== (t2 = e9.responses) && void 0 !== t2 ? t2 : {}).map((e10) => {
      let [t3, r3] = e10;
      return /* @__PURE__ */ d(eL, { code: t3, response: r3 }, t3);
    }) }) }, e9.operationId);
  }));
  return t(i2, /* @__PURE__ */ s((e9) => e9 ? /* @__PURE__ */ n(e3, { children: [l2, p2, /* @__PURE__ */ d(Q, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: /* @__PURE__ */ d(Q, { sx: { flex: 1, overflow: "auto" }, children: c2 }) })] }, e9.operationId) : null));
}, { displayName: "OperationView" }), e3 = /* @__PURE__ */ G("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), e5 = /* @__PURE__ */ G("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  em as O,
  e6 as a,
  ey as b
};
