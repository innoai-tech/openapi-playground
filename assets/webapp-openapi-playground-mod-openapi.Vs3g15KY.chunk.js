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
var _e, _t, _tV_instances, i_get, r_fn, _s, _n, _a, _rN_instances, o_fn;
import { a7 as e, a8 as t, S as i, a9 as r, a1 as s, aa as n, k as a, ab as o, $ as l, ac as h, d, i as c, ad as u, a as p, I as f, r as m, ae as g, af as y, t as v, g as b, ag as x, ah as k, M as S, x as O, w, Y as $, ai as P, y as _, v as C, aj as R, a2 as T, z as N, F as I, B as A, p as X, J as Q, D as j, ak as z, al as q, n as B, l as V, b as W, E as D, h as L, G as F, m as Y, A as Z, V as E, am as M, X as U, C as H, L as G, an as J, U as K, ao as ee, ap as et, aq as ei, o as er, H as es, K as en, s as ea, ar as eo, as as el, N as eh, R as ed, at as ec, au as eu, av as ep, aw as ef, ax as em, ay as eg, Z as ey, az as ev, aA as eb, aB as ex, aC as ek, a0 as eS, aD as eO } from "./lib-nodepkg-vuekit.BrSJ_ipC.chunk.js";
import { b as ew, n as e$, c as eP, s as e_, d as eC, J as eR, f as eT, e as eN, o as eI } from "./lib-nodepkg-typedef.D2OyHZDO.chunk.js";
import { s as eA, B as eX, b as eQ, c as ej, e as ez, f as eq, g as eB, h as eV, i as eW, r as eD, j as eL, k as eF } from "./lib-nodepkg-vueuikit.Dlfi0pab.chunk.js";
import { M as eY } from "./lib-nodepkg-vuemarkdown.CKQcTMKp.chunk.js";
import { l as eZ, i as eE, F as eM } from "./lib-nodepkg-vueformdata.Cynm5gqo.chunk.js";
import { F as eU, m as eH, I as eG } from "./lib-nodepkg-vuematerial.Dk4YsxV5.chunk.js";
import { E as eJ, a as eK, l as e0, k as e1, b as e2, c as e4, f as e3, d as e5, e as e6, g as e8, h as e9, i as e7, j as te, m as tt, n as ti, o as tr, p as ts, q as tn, r as ta, P as to, N as tl, u as th, D as td, v as tc, T as tu, I as tp, s as tf, t as tm, L as tg, w as ty, x as tv, y as tb, z as tx, A as tk, B as tS, C as tO, F as tw, G as t$, H as tP, J as t_, K as tC, M as tR } from "./lib-nodepkg-codemirror.C1lpJ55M.chunk.js";
import { J as tT } from "./lib-nodepkg-jsoncue.DtYvz5Ng.chunk.js";
let tN = (e10, t10) => new tI(e10, t10);
class tI extends e {
  constructor(e10, t10) {
    super((e11) => this._success$.subscribe(e11));
    __publicField(this, "requesting$", new t(false));
    __publicField(this, "error$", new i());
    __publicField(this, "_success$", new i());
    __publicField(this, "_input$", new i());
    __publicField(this, "unsubscribe", this._input$.pipe(r((e10) => (this.requesting$.next(true), l(this.fetcher.request(this.createConfig(e10))).pipe(s((e11) => this._success$.next(e11)), h((e11) => (this.error$.next(e11), u(e11)))))), s(() => {
      this.requesting$.next(false);
    }), n()).subscribe());
    __publicField(this, "_prevInputs");
    __publicField(this, "next", (e10) => {
      let t10 = a(e10) ? e10(this._prevInputs) : e10;
      this._prevInputs = t10, this._input$.next(t10);
    });
    __publicField(this, "toHref", (e10) => this.fetcher.toHref(this.createConfig(e10)));
    this.createConfig = e10, this.fetcher = t10;
  }
  get operationID() {
    return this.createConfig.operationID;
  }
}
let tA = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e10["Content-Type"] || e10["content-type"] || "";
}, tX = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  e10["Content-Type"] && (e10["Content-Type"] = void 0), e10["content-type"] && (e10["content-type"] = void 0);
}, tQ = (e10) => tA(e10).includes("multipart/form-data"), tj = (e10) => tA(e10).includes("application/x-www-form-urlencoded"), tz = (e10) => {
  let t10 = new URLSearchParams(), i10 = (e11, r7) => {
    if (d(r7)) {
      o(r7, (t11) => {
        i10(e11, t11);
      });
      return;
    }
    if (c(r7)) {
      i10(e11, JSON.stringify(r7));
      return;
    }
    p(r7) || 0 === `${r7}`.length || t10.append(e11, `${r7}`);
  };
  return o(e10, (e11, t11) => {
    i10(t11, e11);
  }), t10.toString();
}, tq = (e10, t10) => {
  if (tQ(t10)) {
    tX(t10);
    let i10 = new FormData(), r7 = (e11, t11) => {
      t11 instanceof File || t11 instanceof Blob ? i10.append(e11, t11) : d(t11) ? o(t11, (t12) => r7(e11, t12)) : c(t11) ? i10.append(e11, JSON.stringify(t11)) : i10.append(e11, t11);
    };
    return o(e10, (e11, t11) => r7(t11, e11)), i10;
  }
  return tj(t10) ? tz(e10) : d(e10) || c(e10) ? JSON.stringify(e10) : e10;
}, tB = (e10) => {
  let { paramsSerializer: t10, transformRequestBody: i10 } = e10;
  return { toHref: (e11) => {
    let i11 = t10(e11.params);
    return i11.length && !i11.startsWith("?") && (i11 = "?" + i11), `${e11.url}${i11}`;
  }, request: (e11) => {
    let r7 = { method: e11.method, headers: e11.headers || {}, body: i10(e11.body, e11.headers || {}) };
    return fetch(`${e11.url}?${t10(e11.params)}`, r7).then(async (t11) => {
      var i11, r8;
      let s2;
      s2 = (null === (i11 = t11.headers.get("Content-Type")) || void 0 === i11 ? void 0 : i11.includes("application/json")) ? await t11.json() : (null === (r8 = t11.headers.get("Content-Type")) || void 0 === r8 ? void 0 : r8.includes("application/octet-stream")) ? await t11.blob() : await t11.text();
      let n2 = { config: e11, status: t11.status, headers: {} };
      for (let [e12, i12] of t11.headers) n2.headers[e12] = i12;
      return n2.body = s2, n2;
    }).then((e12) => {
      if (e12.status >= 400) throw e12.error = e12.body, e12;
      return e12;
    });
  } };
};
const _tV = class _tV extends f {
  constructor() {
    super(...arguments);
    __privateAdd(this, _tV_instances);
    __privateAdd(this, _e, tB({ paramsSerializer: tz, transformRequestBody: tq }));
    __privateAdd(this, _t, new t(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _tV({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return m(__privateGet(this, _t), g((t10) => {
      let i10 = t10.get(e10);
      return i10 ? x(i10, i10.error$) : k;
    }));
  }
  requesting$(e10) {
    return m(__privateGet(this, _t), g((t10) => {
      var i10, r7;
      return null !== (r7 = null === (i10 = t10.get(e10)) || void 0 === i10 ? void 0 : i10.requesting$) && void 0 !== r7 ? r7 : u(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var t10, i10;
    let r7 = __privateMethod(this, _tV_instances, r_fn).call(this, e10);
    if (!r7) return null;
    let s2 = Object.keys(null !== (i10 = null === (t10 = r7.requestBody) || void 0 === t10 ? void 0 : t10.content) && void 0 !== i10 ? i10 : {})[0];
    return (e11) => {
      var t11, i11;
      return { method: r7.method, url: __privateGet(this, _tV_instances, i_get) + tD(r7.path, e11), params: y(e11, null === (t11 = r7.parameters) || void 0 === t11 ? void 0 : t11.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...y(e11, null === (i11 = r7.parameters) || void 0 === i11 ? void 0 : i11.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...s2 ? { "Content-Type": s2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t10) {
    let i10 = __privateGet(this, _t).value.get(e10);
    if (!i10) {
      let t11 = this.asRequestConfigCreator(e10);
      if (!t11) return;
      i10 = tN(Object.assign(t11, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, i10), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    i10.next(t10);
  }
  operation$(e10) {
    return m(this, g((t10) => {
      for (let i10 of tW(t10, { operationId: e10 })) if (i10) return u(i10);
      return u(null);
    }));
  }
  operations$(e10) {
    return m(this, g((t10) => u([...tW(t10, e10)])));
  }
  schema$(e10) {
    var t10, i10;
    let r7 = null !== (i10 = null === (t10 = e10.split("#/")[1]) || void 0 === t10 ? void 0 : t10.split("/")) && void 0 !== i10 ? i10 : [];
    return m(this, g((e11) => {
      if (r7) {
        var t11;
        return u(null !== (t11 = b(e11, r7)) && void 0 !== t11 ? t11 : null);
      }
      return u(null);
    }), v((e11) => e11 ? { ...e11, $id: r7[r7.length - 1] } : e11));
  }
  schema(e10) {
    var t10, i10, r7;
    let s2 = null !== (i10 = null === (t10 = e10.split("#/")[1]) || void 0 === t10 ? void 0 : t10.split("/")) && void 0 !== i10 ? i10 : [];
    if (s2) return null !== (r7 = b(this.value, s2)) && void 0 !== r7 ? r7 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_tV_instances = new WeakSet();
i_get = function() {
  var e10, t10, i10;
  return null !== (i10 = null === (t10 = this.value.servers) || void 0 === t10 ? void 0 : null === (e10 = t10[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== i10 ? i10 : "";
};
r_fn = function(e10) {
  for (let t10 of tW(this.value, { operationId: e10 })) if (t10) return t10;
  return null;
};
let tV = _tV;
function* tW(e10, t10) {
  for (let [n2, a2] of Object.entries(e10.paths)) for (let [e11, o2] of Object.entries(a2)) {
    var i10, r7, s2;
    if ("OpenAPI" != o2.operationId && "OpenAPIView" != o2.operationId && (!t10.tag || (null !== (r7 = o2.tags) && void 0 !== r7 ? r7 : []).includes(t10.tag))) {
      if (t10.operationId) {
        if (t10.operationId.startsWith("*")) {
          if (!o2.operationId.toLowerCase().includes(t10.operationId.slice(1).toLowerCase())) continue;
        } else if (o2.operationId.toLowerCase() != t10.operationId.toLowerCase()) continue;
      }
      yield { ...o2, method: e11, path: n2, group: null !== (s2 = null === (i10 = o2.tags) || void 0 === i10 ? void 0 : i10[0]) && void 0 !== s2 ? s2 : "" };
    }
  }
}
let tD = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, i10) => [].concat(t10[i10] || e11).join(","));
}, tL = S(() => tV.empty(), { name: "OpenAPI" }), tF = (e10) => (t10, i10) => t10[e10] == i10[e10] ? 0 : t10[e10] < i10[e10] ? -1 : 1, tY = O((e10, t10) => {
  let {} = e10, {} = t10, r7 = tL.use(), n2 = new f({ operationId: void 0 }), a2 = new i();
  m(a2, P(200), s((e11) => {
    n2.next((t11) => {
      t11.operationId = `*${null != e11 ? e11 : ""}`;
    });
  }), $());
  let o2 = m(n2, g((e11) => r7.operations$(e11)), _((e11) => {
    let t11 = Object.groupBy(e11, (e12) => e12.group);
    return w(tE, { children: [C(tM, { children: C("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e12) => {
      a2.next(e12.target.value);
    } }) }), C(tU, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(t11).toSorted().map((e12) => {
      let [t12, i10] = e12;
      return w("div", { "data-nav-group": true, children: [C("div", { "data-nav-group-heading": true, children: t12 }), C("div", { "data-nav-group-contents": true, children: null == i10 ? void 0 : i10.toSorted(tF("operationId")).map((e13) => {
        var t13;
        return w(tG, { component: R, to: `/operations/${e13.operationId}`, children: [C(eX, { "data-operation-method": true, sx: { color: null !== (t13 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e13.method]) && void 0 !== t13 ? t13 : "sys.secondary" }, children: e13.method }), w("div", { "data-operation-desc": true, children: [C("div", { "data-operation-id": true, children: e13.operationId }), e13.summary ? C("div", { "data-operation-summary": true, children: e13.summary != e13.operationId ? e13.summary : C("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => w(tZ, { children: [o2, C(tH, { children: C(T, {}) })] });
}, { displayName: "OpenAPIView" }), tZ = eA("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), tE = eA("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), tM = eA("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), tU = eA("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), tH = eA("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), tG = eA("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), tJ = eA("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), tK = eA("div", { deprecated: ew().optional(), optional: ew().optional(), nullable: ew().optional() }, { displayName: "PropName" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), t0 = eA("div", { spacing: e$().optional().default(0), $default: eP().optional() }, (e10, t10) => {
  let { slots: i10 } = t10, r7 = t4.use();
  return (t11) => {
    var s2;
    return C(t11, { style: { paddingLeft: `${r7.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (s2 = i10.default) || void 0 === s2 ? void 0 : s2.call(i10) });
  };
}, { displayName: "Line" })({ position: "relative", display: "block" }), t1 = eA("div", { schema: eP() }, (e10, t10) => {
  let {} = t10;
  return (t11) => {
    var i10;
    let r7 = null !== (i10 = e10.schema.getMeta("description")) && void 0 !== i10 ? i10 : "";
    return 0 == r7.length ? null : C(t11, { children: C(eY, { text: r7 }) });
  };
}, { displayName: "Description" })({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), t2 = (e10) => {
  let { name: t10, value: i10, extra: r7 } = e10;
  return "" == i10 ? null : C(t0, { children: w(tJ, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [C(tJ, { sx: { color: "sys.primary" }, children: `@${t10}(` }), `${i10}`, Object.entries(null != r7 ? r7 : {}).map((e11) => {
    let [t11, i11] = e11;
    return w(I, { children: [w(tJ, { sx: { opacity: 0.5 }, children: [",", " "] }), C(tJ, { sx: { opacity: 0.5 }, children: t11 }), w(tJ, { sx: { opacity: 0.5 }, children: [":", " "] }), C(tJ, { sx: { opacity: 0.7 }, children: i11 })] });
  }), C(tJ, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, t4 = S(() => ({ indent: 0 }), { name: "IntentContext" }), t3 = N({ $default: eP().optional() }, (e10, t10) => {
  let {} = e10, { slots: i10 } = t10, r7 = t4.use();
  return () => {
    var e11;
    return C(t4, { value: { indent: r7.indent + 1 }, children: null === (e11 = i10.default) || void 0 === e11 ? void 0 : e11.call(i10) });
  };
}, { displayName: "Indent" });
class t5 {
  constructor(e10, t10) {
    this.id = e10, this.parent = t10;
  }
  child(e10) {
    return new t5(e10, this);
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
let t6 = S(() => new t5("")), t8 = O({ schema: eP() }, (e10) => {
  let t10 = t6.use();
  return () => {
    let i10 = e10.schema.getSchema("$ref"), r7 = e10.schema;
    for (; r7.getSchema("$ref"); ) r7 = r7.unwrap;
    let s2 = "intersection" == r7.type || "object" == r7.type || "union" == r7.type || "record" == r7.type || "array" == r7.type || "union" == r7.type;
    return w(t6, { value: t10.child(i10), children: [s2 && C(R, { to: `#${i10}`, children: w(tJ, { id: i10, children: [i10, " "] }) }), t10.safe(i10) && C(t9, { schema: r7 })] });
  };
}, { displayName: "SchemaViewLink" }), t9 = O({ schema: eP() }, (e10) => {
  let t10 = e10.schema;
  return t10.getSchema("$ref") ? C(t8, { schema: t10 }) : () => {
    var e11, i10, r7, s2, n2, a2, o2, l2;
    switch (t10.type) {
      case "union":
        return C(I, { children: null === (e11 = t10.getSchema("oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t11) => w(I, { children: [t11 > 0 && w(tJ, { children: [" ", " | ", " "] }), C(t9, { schema: e12 })] })) });
      case "intersection":
        return C(tJ, { children: null === (i10 = t10.getSchema("allOf")) || void 0 === i10 ? void 0 : i10.filter((e12) => !Object.keys(e12).length).map((e12, t11) => w(I, { children: [t11 > 0 && C(tJ, { children: "&" }), C(t9, { schema: e12 })] })) });
      case "array":
        return w(tJ, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [C(tJ, { children: "Array<" }), C(t9, { schema: null !== (r7 = t10.getSchema("items")) && void 0 !== r7 ? r7 : eC() }), C(tJ, { children: ">" })] });
      case "object":
        return w(I, { children: [C(tJ, { children: "{" }), C(t3, { children: C(I, { children: Object.entries(null !== (s2 = t10.getSchema("properties")) && void 0 !== s2 ? s2 : {}).map((e12) => {
          var i11;
          let [r8, s3] = e12;
          return s3 ? C(I, { children: w(t0, { spacing: 2, children: [C(t1, { schema: s3 }), w(tJ, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [C(tK, { nullable: s3.getSchema("nullable"), deprecated: s3.getSchema("deprecated"), optional: !(null !== (i11 = t10.getSchema("required")) && void 0 !== i11 ? i11 : []).includes(r8), children: r8 }), C(tJ, { sx: { mr: "1em" }, children: ":" }), C(t9, { schema: s3 })] })] }) }) : null;
        }) }) }), C(tJ, { children: "}" })] });
      case "record":
        return w(I, { children: [C(tJ, { children: "{" }), t10.getSchema("additionalProperties") && C(I, { children: C(t3, { children: w(t0, { children: [w(tJ, { sx: { mr: 1 }, children: ["[K:", " "] }), C(t9, { schema: null !== (n2 = t10.getSchema("propertyNames")) && void 0 !== n2 ? n2 : e_() }), w(tJ, { sx: { mr: 1 }, children: ["]:", " "] }), C(t9, { schema: null !== (a2 = t10.getSchema("additionalProperties")) && void 0 !== a2 ? a2 : eC() })] }) }) }), C(tJ, { children: "}" })] });
      case "enums": {
        let e12 = null !== (o2 = t10.getSchema("enum")) && void 0 !== o2 ? o2 : [];
        if (1 == e12.length) return C(tJ, { children: JSON.stringify(e12[0]) });
        let i11 = "any";
        return e12.length > 0 && (i11 = typeof e12[0]), w(I, { children: [C(tJ, { sx: { fontWeight: "bold" }, children: i11 }), C(t3, { children: e12.map((e13, i12) => {
          var r8;
          return C(t2, { name: "enum", value: `${e13}`, extra: (null === (r8 = t10.getMeta("enumLabels")) || void 0 === r8 ? void 0 : r8[i12]) ? { label: JSON.stringify(t10.getMeta("enumLabels")[i12]) } : {} }, e13);
        }) })] });
      }
    }
    let [h2, d2, c2] = [t10.type, t10.getSchema("format"), t10.getSchema("default")];
    return w(I, { children: [C(tJ, { sx: { fontWeight: "bold" }, children: h2 || "any" }), w(t3, { children: [d2 && C(t2, { name: "format", value: d2 }), !p(c2) && C(t2, { name: "default", value: c2 }), !t7(t10) && C(t2, { name: "validate", value: (l2 = t10).getSchema("x-tag-validate") ? l2.getSchema("x-tag-validate") : t7(l2) ? l2.getSchema("pattern") ? `@r/${String(l2.getSchema("pattern"))}/` : `@${l2.getSchema("exclusiveMinimum")} ? "(" : "["}${l2.getSchema("minProperties") ? l2.getSchema("minProperties") : l2.getSchema("minItems") ? l2.getSchema("minItems") : l2.getSchema("minimum") ? l2.getSchema("minimum") : l2.getSchema("minLength") ? l2.getSchema("minLength") : "string" === l2.type ? "0" : ("number" === l2.type || "integer" === l2.type) && l2.getSchema("format") ? `${Math.pow(2, Number(l2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${l2.getSchema("maxProperties") ? l2.getSchema("maxProperties") : l2.getSchema("maxItems") ? l2.getSchema("maxItems") : l2.getSchema("maximum") ? l2.getSchema("maximum") : l2.getSchema("maxLength") ? l2.getSchema("maxLength") : "string" === l2.type && "uint64" === l2.getSchema("format") ? "19" : ("number" === l2.type || "integer" === l2.type) && l2.getSchema("format") ? `${Math.pow(2, Number(l2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${l2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView" });
function t7(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t10) => e10.getSchema(t10));
}
let ie = O({ code: eP(), response: eP() }, (e10) => {
  let t10 = tL.use();
  return () => {
    var i10, r7;
    return w(it, { children: [C(ii, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), w(eX, { sx: { pl: "4em" }, children: [C(I, { children: null === (i10 = e10.response["x-status-return-errors"]) || void 0 === i10 ? void 0 : i10.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t11) => {
        let [i11, r8] = t11.split("=", 2);
        return p(i11) || p(r8) ? e13 : { ...e13, [i11]: r8 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? C(eX, { sx: { mb: 16 }, children: w(t0, { spacing: 0, children: [w(tJ, { children: ["{", " "] }), C(t3, { children: Object.entries(e11).map((e12) => {
      let [t11, i11] = e12;
      return "code" === t11 ? null : w(t0, { children: [C(tK, { children: t11 }), C(tJ, { children: ": " }), C(tJ, { children: i11 })] });
    }) }), w(tJ, { children: [" ", "}"] })] }) }) : null) }), C(I, { children: Object.entries(null !== (r7 = e10.response.content) && void 0 !== r7 ? r7 : {}).map((e11) => {
      let [i11, { schema: r8 }] = e11;
      return w(ir, { children: [C(t0, { spacing: 0, children: C(t9, { schema: eR.decode(r8, (e12) => {
        var i12;
        return [null !== (i12 = t10.schema(e12)) && void 0 !== i12 ? i12 : {}, eT(e12)];
      }) }) }), C("div", { "data-content-type": true, children: i11 })] });
    }) })] })] });
  };
}, { displayName: "ResponseView" }), it = eA("section", { displayName: "ResponseSection" })({}), ii = eA("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), ir = eA("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), is = eA("div", { valued: ew().optional(), focus: ew().optional(), invalid: ew().optional(), disabled: ew().optional(), $label: eP().optional(), $hint: eP().optional(), $supporting: eP().optional(), $leading: eP().optional(), $trailing: eP().optional(), $default: eP() }, (e10, t10) => {
  let { slots: i10 } = t10;
  return (t11) => {
    var r7, s2, n2, a2;
    let o2 = e10.valued, l2 = e10.invalid, h2 = e10.disabled, d2 = (null !== (a2 = null === (r7 = i10.default) || void 0 === r7 ? void 0 : r7.call(i10)) && void 0 !== a2 ? a2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t12, i11, r8, s3, n3, a3;
        return o2 = !!(null !== (n3 = null !== (s3 = null === (t12 = e11.props) || void 0 === t12 ? void 0 : t12.value) && void 0 !== s3 ? s3 : null === (i11 = e11.props) || void 0 === i11 ? void 0 : i11.placeholder) && void 0 !== n3 ? n3 : o2), h2 = null !== (a3 = null === (r8 = e11.props) || void 0 === r8 ? void 0 : r8.disabled) && void 0 !== a3 ? a3 : h2, A(e11, { disabled: h2 });
      }
      return A(e11);
    });
    return w(t11, { "data-valued": o2, "data-invalid": l2, "data-disabled": h2, "data-focus-within": e10.focus, "data-has-leading": !!i10.leading, "data-has-trailing": !!i10.trailing, children: [w("div", { "data-input-container": true, children: [w("div", { "data-input-decorator-container": true, children: [C("div", { "data-input-decorator-leading": true }), C("div", { "data-input-decorator-label": true, children: C("div", { "data-input-label": true, children: null === (s2 = i10.label) || void 0 === s2 ? void 0 : s2.call(i10) }) }), C("div", { "data-input-decorator-trailing": true })] }), w("div", { "data-input-row": true, children: [i10.leading && C(ia, { role: "leading", children: i10.leading() }), d2, i10.trailing && C(ia, { role: "trailing", children: i10.trailing() })] })] }), i10.supporting && C("div", { "data-input-supporting": true, children: null === (n2 = i10.supporting) || void 0 === n2 ? void 0 : n2.call(i10) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), ia = eA("div", { role: eN(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
function io() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let il = io(), ih = { paddingX: [il.paddingLeft, il.paddingRight], paddingY: [il.paddingTop, il.paddingBottom], marginX: [il.marginInlineStart, il.marginInlineEnd], marginY: [il.marginTop, il.marginBottom], borderX: [il.borderLeft, il.borderRight], borderY: [il.borderTop, il.borderBottom], color: [il.color, il.fill], borderTopRadius: [il.borderTopLeftRadius, il.borderTopRightRadius], borderBottomRadius: [il.borderBottomLeftRadius, il.borderBottomRightRadius], borderRightRadius: [il.borderTopRightRadius, il.borderBottomRightRadius], borderLeftRadius: [il.borderTopLeftRadius, il.borderBottomLeftRadius], backgroundGradient: [il.backgroundImage], boxSize: [il.width, il.height] }, id = io(), ic = { font: id.fontFamily, shadow: id.boxShadow, rounded: id.borderRadius, roundedTop: id.borderTopRadius, roundedBottom: id.borderBottomRadius, roundedLeft: id.borderLeftRadius, roundedRight: id.borderRightRadius, bg: id.background, bgImage: id.backgroundImage, bgSize: id.backgroundSize, bgPosition: id.backgroundPosition, bgRepeat: id.backgroundRepeat, bgAttachment: id.backgroundAttachment, bgColor: id.backgroundColor, bgGradient: id.backgroundGradient, bgClip: id.backgroundClip, pos: id.position, p: id.padding, pt: id.paddingTop, pr: id.paddingRight, pl: id.paddingLeft, pb: id.paddingBottom, ps: id.paddingInlineStart, pe: id.paddingInlineEnd, px: id.paddingX, py: id.paddingY, m: id.margin, mt: id.marginTop, mr: id.marginRight, ml: id.marginLeft, mb: id.marginBottom, ms: id.marginInlineStart, me: id.marginInlineEnd, mx: id.marginX, my: id.marginY, w: id.width, minW: id.minWidth, maxW: id.maxWidth, h: id.height, minH: id.minHeight, maxH: id.maxHeight }, iu = io(), ip = function() {
  for (var e10 = arguments.length, t10 = Array(e10), i10 = 0; i10 < e10; i10++) t10[i10] = arguments[i10];
  let r7 = [...t10];
  for (let e11 of t10) ic[e11] && r7.push(ic[e11]);
  return r7;
}, im = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _ig = class _ig {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], i10 = [], { state: r7, extends: s2, ...n2 } = e10;
    if (s2) for (let e11 of s2) i10.push(...this.processAll(e11, t10));
    if (r7) {
      let e11 = {}, t11 = {};
      _ig.walkStateValues(r7, (i11, r8, s3) => {
        var n3;
        let a2 = `--${this.opt.varPrefix}-state-${r8.join("-")}`, o2 = null !== (n3 = V(r8)) && void 0 !== n3 ? n3 : "", l2 = {};
        this.process(l2, o2, i11, false), e11[a2] = l2[o2], X(t11, [...s3, o2], `var(${a2})`);
      }), i10.push(e11), i10.push(...this.processAll(t11));
    }
    if (!W(n2)) {
      let e11 = {};
      this.processTo(e11, n2, t10), i10.push(e11);
    }
    return i10;
  }
  processTo(e10, t10) {
    let i10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let r7 in t10) this.process(e10, r7, t10[r7], i10);
  }
  process(e10, t10, i10) {
    var r7, s2, n2, a2;
    let o2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let s3 = null === (r7 = this.opt.mixins[t10]) || void 0 === r7 ? void 0 : r7.get(i10);
      if (s3) for (let t11 in s3) this.process(e10, t11, s3[t11], o2);
      return;
    }
    let l2 = t10;
    if (B(i10)) {
      e10[l2 = null !== (s2 = _ig.convertSelector(l2)) && void 0 !== s2 ? s2 : l2] = null !== (n2 = e10[l2]) && void 0 !== n2 ? n2 : {}, this.processTo(e10[l2], i10);
      return;
    }
    if (o2 && ih[l2 = null !== (a2 = ic[l2]) && void 0 !== a2 ? a2 : l2]) {
      for (let t11 of ih[l2]) e10[t11] = this.opt.processValue(t11, i10);
      return;
    }
    e10[l2] = this.opt.processValue(l2, i10);
  }
};
__publicField(_ig, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_ig, "convertSelector", (e10) => {
  if (im[e10]) return im[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", i10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (i10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [r7, s2] = t10.split("__");
      return s2 ? `${e11}[${j(r7)}='${j(s2)}']${i10}` : `${e11}[${j(r7)}]${i10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_ig.supportedPseudoClasses[t10]) {
        let i12 = _ig.supportedPseudoClasses[t10];
        return `${e11}:${i12}, ${e11}[data-${i12}]:not([data-${i12}='false']), ${e11}.${i12}`;
      }
      let [i11, r7] = t10.split("__"), s2 = j(i11);
      return r7 ? `${e11}[data-${s2}='${j(r7)}']` : `${e11}[data-${s2}]:not([data-${s2}='false'])`;
    }
  }
});
__publicField(_ig, "walkStateValues", function(e10, t10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: r7, ...s2 } = e10;
  for (let e11 in s2) {
    var n2;
    let a2 = s2[e11], o2 = null !== (n2 = s2.default) && void 0 !== n2 ? n2 : i10.default, l2 = null != r7 ? r7 : b(o2, [...i10.path.slice(1), "$"]), h2 = l2 ? [...i10.selectorPath, l2] : i10.selectorPath, d2 = [...i10.path, e11];
    if (B(a2)) {
      _ig.walkStateValues(a2, t10, { path: d2, selectorPath: h2, default: o2 });
      continue;
    }
    t10(a2, d2, h2);
  }
});
let ig = _ig;
var iy, iv = ((iy = iv || {}).var = "var", iy.mixin = "mixin", iy);
class ib {
  static create(e10, t10) {
    let { value: i10, on: r7, transform: s2 } = t10;
    return { type: e10, value: i10, on: r7, transform: s2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return ib.create("var", { value: e10, on: ip(iu.color, iu.bgColor, iu.outlineColor, iu.borderColor, iu.accentColor, iu.fill, iu.stroke), transform: (e11, t10) => D(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return ib.create("var", { value: e10, on: ip(iu.gap, iu.rowGap, iu.columnGap, iu.top, iu.right, iu.bottom, iu.left, iu.m, iu.ms, iu.me, iu.mt, iu.mr, iu.mb, iu.ml, iu.mx, iu.my, iu.p, iu.ps, iu.pe, iu.pt, iu.pr, iu.pb, iu.pl, iu.px, iu.py) });
  }
  static boxSize(e10) {
    return ib.create("var", { value: e10, on: ip(iu.w, iu.minW, iu.maxW, iu.h, iu.minH, iu.maxH, iu.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return ib.create("var", { value: e10, on: ip(iu.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return ib.create("var", { value: e10, on: ip(iu.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return ib.create("var", { value: e10, fallback: 0, on: ip(iu.rounded, iu.roundedTop, iu.roundedBottom, iu.roundedLeft, iu.roundedRight, il.borderTopLeftRadius, il.borderTopRightRadius, il.borderBottomLeftRadius, il.borderBottomRightRadius, il.borderTopRightRadius, il.borderBottomRightRadius, il.borderTopLeftRadius, il.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return ib.create("var", { value: e10, on: ip(iu.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return ib.create("var", { value: e10, on: ip(iu.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return ib.create("var", { value: e10, on: ip(iu.font) });
  }
  static fontWeight(e10) {
    return ib.create("var", { value: e10, on: ip(iu.fontWeight) });
  }
  static letterSpacing(e10) {
    return ib.create("var", { value: e10, on: ip(iu.letterSpacing) });
  }
  static shadow(e10) {
    return ib.create("var", { value: e10, on: ip(iu.shadow) });
  }
  static customMixin(e10, t10) {
    return ib.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let ix = (e10, t10, i10) => {
  let r7 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var s2;
    let n2 = t10[e11];
    if (e11 === t10.length - 1) {
      r7[n2] = i10;
      continue;
    }
    r7[n2] = null !== (s2 = r7[n2]) && void 0 !== s2 ? s2 : {}, r7 = r7[n2];
  }
};
const _ik = class _ik {
  constructor(e10, { cssVar: t10, transformFallback: i10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _ik.walkValues(e10.value, (r7, s2) => {
      let n2 = s2.join("."), a2 = (r8, s3) => {
        let n3 = e10.transform ? e10.transform(r8, t10) : i10(r8);
        if (c(n3)) for (let e11 in n3) s3(n3[e11], "default" === e11 ? "" : e11);
        else s3(n3, "");
      };
      if (X(this._cssVarRefs, [n2], t10(n2)), B(r7)) for (let e11 in r7) a2(r7[e11], (t11, i11) => {
        X(this._values, [`${n2}${i11 ? `/${i11}` : ""}`, e11], t11);
      });
      else a2(r7, (e11, t11) => {
        X(this._values, [`${n2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return F(this._values);
  }
  get(e10, t10, i10) {
    let r7 = this._values[e10];
    if (c(r7)) {
      var s2;
      return i10 ? r7[t10] : null !== (s2 = r7[t10]) && void 0 !== s2 ? s2 : r7[_ik.defaultMode];
    }
    return i10 ? t10 === _ik.defaultMode ? r7 : void 0 : r7;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_ik, "defaultMode", "_default");
__publicField(_ik, "walkValues", function(e10, t10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let r7 in e10) {
    let s2 = e10[r7];
    if (B(s2)) {
      if (L(s2, "_default")) {
        t10(s2, [...i10, r7]);
        continue;
      }
      _ik.walkValues(s2, t10, [...i10, r7]);
      continue;
    }
    t10(s2, [...i10, r7]);
  }
});
let ik = _ik;
const _iS = class _iS {
  constructor(e10) {
    __publicField(this, "_values", {});
    _iS.walkValue(e10.value, (e11, t10) => {
      let i10 = t10.join(".");
      X(this._values, [i10], er(e11, "__mixin"));
    });
  }
  get tokens() {
    return F(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_iS, "walkValue", function(e10, t10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let r7 in e10) {
    let s2 = e10[r7];
    if (B(s2)) {
      if (L(s2, "__mixin")) {
        t10(s2, [...i10, r7]);
        continue;
      }
      _iS.walkValue(s2, t10, [...i10, r7]);
      continue;
    }
    t10(s2, [...i10, r7]);
  }
});
let iS = _iS;
let iO = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, iw = (e10) => {
  let t10 = b(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: Y(iO, (e11) => es(t10, (t11, i10) => ea(e11, (e12) => i10.indexOf(e12) > -1))) } };
}, i$ = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, iP = (e10) => a(e10) && L(e10, "token");
function i_(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let iC = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _iR = class _iR {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _iR.propsCanBaseDp[e10] && Q(t10) ? _iR.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var i10, r7;
      return this.tokens[t10] ? Object.assign((e11) => {
        var i11;
        return null === (i11 = this.tokens[t10]) || void 0 === i11 ? void 0 : i11.get(e11, `_${this.mode}`);
      }, { tokens: null === (i10 = this.tokens[t10]) || void 0 === i10 ? void 0 : i10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var i11;
        return null === (i11 = this.mixins[t10]) || void 0 === i11 ? void 0 : i11.get(e11);
      }, { tokens: null === (r7 = this.mixins[t10]) || void 0 === r7 ? void 0 : r7.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var i10, r7, s2;
      if (iP(t10)) {
        let i11 = null === (r7 = this.propValues[e10]) || void 0 === r7 ? void 0 : r7.use(t10.token, true);
        return i11 ? t10(i11) : void 0;
      }
      return null !== (s2 = null === (i10 = this.propValues[e10]) || void 0 === i10 ? void 0 : i10.use(t10)) && void 0 !== s2 ? s2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new ig({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var i10, r7;
    for (let s2 in this.theme = e10, this.varPrefix = null !== (i10 = t10.varPrefix) && void 0 !== i10 ? i10 : "vk", this.mode = null !== (r7 = t10.mode) && void 0 !== r7 ? r7 : "light", X(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[s2];
      if (t11) {
        if (t11.type === iv.var) {
          let e11 = new ik(t11, { cssVar: (e12) => this.cssVar(s2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let i11 of (this.tokens[s2] = e11, t11.on)) this.propValues[i11] = e11;
          for (let t12 of e11.tokens) for (let i11 of ["light", "dark"]) {
            let r8 = i11 === this.mode ? "_default" : `_${i11}`, n2 = e11.get(t12, r8, true);
            p(n2) || ("_default" === r8 ? X(this.cssVars, [this.cssVar(s2, t12)], n2) : X(this.cssVars, [r8, this.cssVar(s2, t12)], n2));
          }
          continue;
        }
        if (t11.type === iv.mixin) {
          let e11 = new iS(t11);
          for (let i11 of t11.on) this.mixins[i11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _iR(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${j(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var i10;
    let r7 = null != t10 ? t10 : {};
    return r7.__emotion_styles = null !== (i10 = r7.__emotion_styles) && void 0 !== i10 ? i10 : eQ(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), r7.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, i10 = {}, r7 = (e11, t11) => c(t11) ? { $type: e11, $value: Y(t11, (t12) => r7(e11, t12).$value) } : D(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, i11;
      let r8 = null !== (i11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? en(e13) : e13).join(".")) && void 0 !== i11 ? i11 : "";
      return r8.startsWith("sys.") ? `{${r8}}` : `{seed.${r8}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let s2 in this.tokens) {
      let n2 = this.tokens[s2], a2 = (a3) => {
        for (let o2 of n2.tokens) if (!o2.includes("/")) {
          if (o2.startsWith("sys.")) {
            let e11 = n2.get(o2, "_default"), l2 = n2.get(o2, "_dark");
            ix(t10, [s2, ...o2.split(".")], r7(a3, e11)), e11 !== l2 && ix(i10, [s2, ...o2.split(".")], r7(a3, l2));
          } else ix(e10, [s2, ...o2.split(".")], r7(a3, n2.get(o2, "_default")));
        }
      };
      switch (s2) {
        case "color":
          a2("color");
          break;
        case "rounded":
          a2("borderRadius");
          break;
        case "shadow":
          a2("boxShadow");
          break;
        case "font":
          a2("fontFamily");
          break;
        case "fontWeight":
          a2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let i11 = this.mixins[e11];
      if (!i11) continue;
      let s2 = (s3) => {
        for (let n2 of i11.tokens) {
          let a2 = i11.get(n2);
          if (!a2) continue;
          let o2 = this.unstable_sx(a2)[0];
          ix(t10, [e11, ...n2.split(".")], r7(s3, o2));
        }
      };
      "textStyle" === e11 && s2("typography");
    }
    return { seed: e10, base: iw(t10), dark: iw(i10) };
  }
};
__publicField(_iR, "propsCanPercent", iC([...ib.boxSize({}).on]));
__publicField(_iR, "propsCanBaseDp", iC([...ib.boxSize({}).on, ...ib.space({}).on, ...ib.fontSize({}).on, ...ib.letterSpacing({}).on, ...ib.lineHeight({}).on, ...ib.rounded({}).on]));
let iR = _iR;
let iT = { shadow: ib.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: ib.customMixin("elevation", { 0: ib.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: ib.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: ib.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: ib.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: ib.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, iN = (e10, t10, i10, r7) => Object.assign(eB(e10, t10, i10, r7), { toString: () => `cubic-bezier(${e10}, ${t10}, ${i10}, ${r7})` }), iI = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: iN(0, 0, 1, 1), standard: Object.assign(iN(0.2, 0, 0, 1), { accelerate: iN(0.3, 0, 1, 1), decelerate: iN(0, 0, 0, 1) }), emphasized: Object.assign(iN(0.2, 0, 0, 1), { accelerate: iN(0.3, 0, 0.8, 0.15), decelerate: iN(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(iN(0.4, 0, 0.2, 1), { decelerate: iN(0, 0, 0.2, 1), accelerate: iN(0.4, 0, 1, 1) }) } }, iA = { transitionDuration: ib.transitionDuration(iI.duration), transitionTimingFunction: ib.transitionTimingFunction({ linear: iI.easing.linear.toString(), standard: iI.easing.standard.toString(), "standard-accelerate": iI.easing.standard.accelerate.toString(), "standard-decelerate": iI.easing.standard.decelerate.toString(), emphasized: iI.easing.emphasized.toString(), "emphasized-decelerate": iI.easing.emphasized.decelerate.toString(), "emphasized-accelerate": iI.easing.emphasized.accelerate.toString(), legacy: iI.easing.legacy.toString(), "legacy-decelerate": iI.easing.legacy.decelerate.toString(), "legacy-accelerate": iI.easing.legacy.accelerate.toString() }) }, iX = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, iQ = (e10) => {
  let t10 = eD(e10);
  return [t10.r, t10.g, t10.b];
}, ij = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _iz = class _iz {
  constructor(e10) {
    this.seeds = e10;
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 87], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds) e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, i10 = {};
    for (let n2 in e10) {
      let [a2, o2, l2] = b(e10, [n2], []);
      if (this.seeds[a2]) {
        var r7, s2;
        i10[n2] = iX[o2] ? `${a2}.${o2}` : null === (r7 = this.seeds[a2]) || void 0 === r7 ? void 0 : r7.tone(o2), t10[n2] = iX[l2] ? `${a2}.${l2}` : null === (s2 = this.seeds[a2]) || void 0 === s2 ? void 0 : s2.tone(l2);
      }
    }
    return [t10, i10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, i10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), r7 = {}, s2 = {};
    for (let e11 in t10) if (r7[`${e11}`] = { _default: Q(t10[e11]) ? iQ(t10[e11]) : t10[e11], _dark: Q(i10[e11]) ? iQ(i10[e11]) : i10[e11] }, ij(e11) && (s2[`${e11}`] = ib.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), s2[`${e11}-container`] = ib.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        s2[`${e11}`] = ib.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      s2[`${e11}`] = ib.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), s2[`on-${e11}`] = ib.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let n2 = (e11) => Object.keys(iX).reduce((t11, i11) => Object.assign(t11, { [i11]: iQ(e11.tone(parseInt(i11))) }), {});
    return { color: ib.color({ ...Y(this.seeds, (e11) => n2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: r7 }), containerStyle: ib.customMixin("containerStyle", { sys: s2 }) };
  }
};
__publicField(_iz, "toHEX", (e10) => `#${iQ(e10).map((e11) => G(e11.toString(16), 2, "0")).join("")}`);
__publicField(_iz, "fromColors", (e10) => {
  let { primary: t10, secondary: i10, tertiary: r7, neutral: s2, neutralVariant: n2, error: a2, ...o2 } = e10, l2 = ej.contentFromColors({ primary: ez(t10), secondary: i10 ? ez(i10) : void 0, tertiary: r7 ? ez(r7) : void 0, error: a2 ? ez(a2) : void 0 });
  return s2 && (l2.n1 = eq.fromHueAndChroma(ez(s2), 4)), n2 && (l2.n2 = eq.fromHueAndChroma(ez(n2), 8)), new _iz({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...Y(o2, (e11) => eq.fromInt(ez(e11))) });
});
let iz = _iz;
let iq = ib.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), iB = { font: ib.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: ib.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: ib.customMixin("textStyle", { sys: { "display-large": ib.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": ib.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": ib.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": ib.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": ib.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": ib.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": ib.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": ib.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": ib.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": ib.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": ib.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": ib.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": ib.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": ib.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": ib.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, iV = iz.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), iW = { ...iB, ...iA, ...iT, rounded: iq, ...iV.toDesignTokens({ primary: ["primary", 80, 50] }) }, iD = iR.create(iW, { varPrefix: "vk" }), iL = J(() => iD, { name: "Theme" }), iF = J(() => eL({ key: "css" }), { name: "Cache" }), iY = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping) e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var i10;
      eF(e10, t10.serialized, null === (i10 = t10.isStringTag) || void 0 === i10 || i10);
    }
  }
}, iZ = z({ sx: q.custom(), component: q.custom().optional().default("div") }, (e10, t10) => {
  var i10;
  let { slots: r7, expose: s2 } = t10, n2 = iL.use(), a2 = iF.use(), o2 = n2.unstable_css(a2, null !== (i10 = e10.sx) && void 0 !== i10 ? i10 : {}), l2 = () => "0" !== o2.name ? `${a2.key}-${o2.name}` : "", h2 = iY(a2);
  eh(() => {
    h2({ serialized: o2, isStringTag: true });
  });
  let d2 = ec();
  return s2({ $$forwardRef: d2 }), () => {
    var t11;
    return C(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: d2, class: l2(), children: r7 });
  };
}), iE = J(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), iM = J(() => new iU(Z(null), Z(null), () => false), { name: "Overlay" });
class iU {
  constructor(e10, t10, i10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = K(this.triggerRef), i10 = K(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || i10 && (i10 === e10.target || e10.composedPath().includes(i10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = i10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let iH = z({ isOpen: q.boolean().optional(), style: q.custom().optional(), contentRef: q.custom().optional(), triggerRef: q.custom().optional(), onClickOutside: q.custom(), onEscKeydown: q.custom(), onContentBeforeMount: q.custom(), $transition: q.custom().optional(), $default: q.custom().optional() }, (e10, t10) => {
  var i10;
  let { slots: r7, attrs: s2, emit: n2 } = t10, a2 = e10.contentRef || Z(null), o2 = new iU(null !== (i10 = e10.triggerRef) && void 0 !== i10 ? i10 : Z(null), a2, () => !!e10.isOpen), l2 = iE.use();
  return E(iM.use().add(o2)), window && M(ee(a2, "value"), et((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      o2.isClickInside(e12) || n2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), et((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && o2.topmost() && n2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), ei()), () => {
    var t11;
    let i11 = e10.isOpen ? A(C("div", { ...s2, ref: a2, style: e10.style, children: C(iM, { value: o2, children: null === (t11 = r7.default) || void 0 === t11 ? void 0 : t11.call(r7) }) }), { onVnodeBeforeMount: () => {
      n2("content-before-mount");
    } }) : null;
    return C(U, { to: l2.mountPoint(), children: r7.transition ? r7.transition({ content: i11 }) : i11 });
  };
}, { inheritAttrs: false, name: "Overlay" }, { displayName: "Overlay" });
iH.propTypes.isOpen, iH.propTypes.onClickOutside, iH.propTypes.$transition, (e10, t10) => {
  let { slots: i10, emit: r7, attrs: s2 } = t10, n2 = Z(null), a2 = Z(null);
  return H(() => a2.value, (t11) => {
    if (t11 && n2.value) {
      var i11, r8;
      eV(n2.value, t11, { placement: null !== (i11 = e10.placement) && void 0 !== i11 ? i11 : "bottom", modifiers: [...null !== (r8 = e10.modifiers) && void 0 !== r8 ? r8 : [], eW] });
    }
  }), () => {
    var t11, o2;
    let l2 = null === (t11 = i10.default) || void 0 === t11 ? void 0 : t11.call(i10)[0];
    return l2 ? w(I, { children: [A(l2, { ...s2, onVnodeMounted: (e11) => {
      n2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), C(iH, { triggerRef: n2, contentRef: a2, isOpen: e10.isOpen, onClickOutside: (e11) => r7("click-outside", e11), style: { zIndex: 100 }, $transition: i10.transition, children: null === (o2 = i10.content) || void 0 === o2 ? void 0 : o2.call(i10) })] }) : null;
  };
};
let iG = (e10) => {
  let t10 = () => [e0(), e1.of(e2), e4(), e3({ openText: String.fromCharCode(9662), closedText: String.fromCharCode(9656) }), e1.of(e5), e6(), e8(), e1.of(e9), e7(), te(), tt(), ti(), e1.of(tr), e1.of(ts)], i10 = eu([]), r7 = eu(e10 || ""), s2 = eu(null), n2 = eu(null), a2 = ep([r7, i10]).pipe(v((e11) => {
    let [i11, r8] = e11;
    return eJ.create({ doc: i11, extensions: [...r8, t10].map((e12) => e12()) });
  }));
  return { initial$: r7, state$: a2, dom$: s2, view$: n2, use: (e11) => (i10.next([...i10.value, e11]), () => {
    i10.next(i10.value.filter((t11) => t11 !== e11));
  }), serve: () => x(a2, ep([s2, a2]).pipe(g((e11) => {
    let [t11, i11] = e11;
    return null == t11 ? u(null) : u(new eK({ parent: t11, state: i11 }));
  }), et((e11) => (n2.next(e11), () => null == e11 ? void 0 : e11.destroy())))) };
}, iJ = J(() => iG(), { name: "EditorContext" }), iK = (e10) => {
  let t10 = iJ.use();
  M(t10.dom$, et(() => t10.use(() => e10())), ei());
}, i0 = function() {
  let e10;
  for (var t10 = arguments.length, i10 = Array(t10), r7 = 0; r7 < t10; r7++) i10[r7] = arguments[r7];
  let s2 = "div", n2 = {}, o2 = {};
  for (let t11 of i10) {
    if (a(t11)) {
      e10 = t11;
      continue;
    }
    if (D(t11) || eo(t11)) {
      s2 = t11;
      continue;
    }
    p(e10) && el(t11) ? n2 = t11 : o2 = t11;
  }
  return null != e10 || (e10 = (e11, t11) => (i11) => {
    let r8 = {};
    for (let t12 in e11) "component" !== t12 && "sx" !== t12 && e11[t12] && (r8[`data-${t12}`] = e11[t12]);
    return C(i11, { ...r8, children: t11.slots });
  }), (t11) => {
    let i11 = Object.assign(z({ ...n2, sx: q.custom().optional(), component: q.custom().optional() }, (r8, n3) => {
      let a2 = iL.use(), o3 = iF.use(), l2 = iY(o3), h2 = Z(""), d2 = a2.unstable_css(o3, t11), c2 = () => ("0" !== d2.name ? `${o3.key}-${d2.name}${h2.value}` : `${h2.value}`) + (i11.name ? ` ${i11.name}` : "");
      if (s2.__styled) {
        var u2;
        let e11 = a2.unstable_css(o3, null !== (u2 = r8.sx) && void 0 !== u2 ? u2 : {});
        "0" !== e11.name && (h2.value = ` ${o3.key}-${e11.name}`), eh(() => {
          l2({ serialized: d2, isStringTag: true }), l2({ serialized: e11, isStringTag: true });
        });
      } else ed(() => {
        l2({ serialized: d2, isStringTag: true });
      });
      let p2 = e10(r8, n3);
      return () => {
        if (s2.__styled) {
          let e12 = p2(s2);
          return e12 ? A(e12, { component: r8.component, class: c2() }) : null;
        }
        let e11 = p2(iZ);
        return e11 ? A(e11, { component: r8.component || s2, sx: r8.sx, class: c2() }) : null;
      };
    }, o2), { __styled: true });
    return i11.toString = () => `.${i11.name}`, i11;
  };
}("div", () => {
  let e10 = iJ.use();
  return iK(() => tn(ta, { fallback: true })), M(e10.serve(), ef()), (t10) => C(t10, { ref: e10.dom$ });
}, { displayName: "EditorContainer" })({ width: "100%", height: "100%", fontSize: 12, "& .cm-editor": { outline: "none", height: "100%", "& .cm-gutterElement": { color: "sys.secondary" }, "& [aria-readonly=true]": { opacity: 0.7 }, "& .cm-activeLineGutter": { backgroundColor: i_("sys.primary", i$(0.08)) }, "& .cm-activeLine": { backgroundColor: i_("sys.primary", i$(0.08)) }, "& .diffLineGutter": { backgroundColor: i_("sys.error", i$(0.08)) }, "& .diffLine": { backgroundColor: i_("sys.error", i$(0.08)) }, "& .cm-tooltip-autocomplete ul li[aria-selected]": { containerStyle: "sys.primary" }, "& .cm-gutters": { border: "none", containerStyle: "sys.surface-container-lowest" }, "& .cm-tooltip": { border: "none", boxShadow: "2", borderRadius: "xs", containerStyle: "sys.surface-container-lowest", fontFamily: "code" }, "& .cm-tooltip-lint": { overflow: "hidden" }, "& .cm-tooltip-hover": { overflow: "hidden" } }, "& .tok-propertyName": { color: "sys.primary" }, "& .tok-number": { color: "sys.error" }, "& .tok-keyword": { color: "sys.error" }, "& .tok-string": { color: "sys.tertiary" }, "& .cm-lint-marker": { width: "0.7em", height: "0.7em" }, "& .tok-punctuation": { color: i_("sys.primary", i$(0.38)) } });
var i1 = {};
class i2 {
  constructor(e10, t10, i10, r7, s2, n2, a2, o2, l2, h2 = 0, d2) {
    this.p = e10, this.stack = t10, this.state = i10, this.reducePos = r7, this.pos = s2, this.score = n2, this.buffer = a2, this.bufferBase = o2, this.curContext = l2, this.lookAhead = h2, this.parent = d2;
  }
  toString() {
    return `[${this.stack.filter((e10, t10) => t10 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(e10, t10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r7 = e10.parser.context;
    return new i2(e10, [], t10, i10, i10, 0, [], 0, r7 ? new i4(r7, r7.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e10, t10) {
    this.stack.push(this.state, t10, this.bufferBase + this.buffer.length), this.state = e10;
  }
  reduce(e10) {
    var t10;
    let i10 = e10 >> 19, r7 = 65535 & e10, { parser: s2 } = this.p;
    this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
    let n2 = s2.dynamicPrecedence(r7);
    if (n2 && (this.score += n2), 0 == i10) {
      this.pushState(s2.getGoto(this.state, r7, true), this.reducePos), r7 < s2.minRepeatTerm && this.storeNode(r7, this.reducePos, this.reducePos, 4, true), this.reduceContext(r7, this.reducePos);
      return;
    }
    let a2 = this.stack.length - (i10 - 1) * 3 - (262144 & e10 ? 6 : 0), o2 = a2 ? this.stack[a2 - 2] : this.p.ranges[0].from, l2 = this.reducePos - o2;
    l2 >= 2e3 && !(null === (t10 = this.p.parser.nodeSet.types[r7]) || void 0 === t10 ? void 0 : t10.isAnonymous) && (o2 == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = l2) : this.p.lastBigReductionSize < l2 && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = o2, this.p.lastBigReductionSize = l2));
    let h2 = a2 ? this.stack[a2 - 1] : 0, d2 = this.bufferBase + this.buffer.length - h2;
    if (r7 < s2.minRepeatTerm || 131072 & e10) {
      let e11 = s2.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(r7, o2, e11, d2 + 4, true);
    }
    if (262144 & e10) this.state = this.stack[a2];
    else {
      let e11 = this.stack[a2 - 3];
      this.state = s2.getGoto(e11, r7, true);
    }
    for (; this.stack.length > a2; ) this.stack.pop();
    this.reduceContext(r7, o2);
  }
  storeNode(e10, t10, i10) {
    let r7 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4, s2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (0 == e10 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let e11 = this, r8 = this.buffer.length;
      if (0 == r8 && e11.parent && (r8 = e11.bufferBase - e11.parent.bufferBase, e11 = e11.parent), r8 > 0 && 0 == e11.buffer[r8 - 4] && e11.buffer[r8 - 1] > -1) {
        if (t10 == i10) return;
        if (e11.buffer[r8 - 2] >= t10) {
          e11.buffer[r8 - 2] = i10;
          return;
        }
      }
    }
    if (s2 && this.pos != i10) {
      let s3 = this.buffer.length;
      if (s3 > 0 && 0 != this.buffer[s3 - 4]) for (; s3 > 0 && this.buffer[s3 - 2] > i10; ) this.buffer[s3] = this.buffer[s3 - 4], this.buffer[s3 + 1] = this.buffer[s3 - 3], this.buffer[s3 + 2] = this.buffer[s3 - 2], this.buffer[s3 + 3] = this.buffer[s3 - 1], s3 -= 4, r7 > 4 && (r7 -= 4);
      this.buffer[s3] = e10, this.buffer[s3 + 1] = t10, this.buffer[s3 + 2] = i10, this.buffer[s3 + 3] = r7;
    } else this.buffer.push(e10, t10, i10, r7);
  }
  shift(e10, t10, i10, r7) {
    if (131072 & e10) this.pushState(65535 & e10, this.pos);
    else if ((262144 & e10) == 0) {
      let { parser: s2 } = this.p;
      (r7 > this.pos || t10 <= s2.maxNode) && (this.pos = r7, s2.stateFlag(e10, 1) || (this.reducePos = r7)), this.pushState(e10, i10), this.shiftContext(t10, i10), t10 <= s2.maxNode && this.buffer.push(t10, i10, r7, 4);
    } else this.pos = r7, this.shiftContext(t10, i10), t10 <= this.p.parser.maxNode && this.buffer.push(t10, i10, r7, 4);
  }
  apply(e10, t10, i10, r7) {
    65536 & e10 ? this.reduce(e10) : this.shift(e10, t10, i10, r7);
  }
  useNode(e10, t10) {
    let i10 = this.p.reused.length - 1;
    (i10 < 0 || this.p.reused[i10] != e10) && (this.p.reused.push(e10), i10++);
    let r7 = this.pos;
    this.reducePos = this.pos = r7 + e10.length, this.pushState(t10, r7), this.buffer.push(i10, r7, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e10, this, this.p.stream.reset(this.pos - e10.length)));
  }
  split() {
    let e10 = this, t10 = e10.buffer.length;
    for (; t10 > 0 && e10.buffer[t10 - 2] > e10.reducePos; ) t10 -= 4;
    let i10 = e10.buffer.slice(t10), r7 = e10.bufferBase + t10;
    for (; e10 && r7 == e10.bufferBase; ) e10 = e10.parent;
    return new i2(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i10, r7, this.curContext, this.lookAhead, e10);
  }
  recoverByDelete(e10, t10) {
    let i10 = e10 <= this.p.parser.maxNode;
    i10 && this.storeNode(e10, this.pos, t10, 4), this.storeNode(0, this.pos, t10, i10 ? 8 : 4), this.pos = this.reducePos = t10, this.score -= 190;
  }
  canShift(e10) {
    for (let t10 = new i3(this); ; ) {
      let i10 = this.p.parser.stateSlot(t10.state, 4) || this.p.parser.hasAction(t10.state, e10);
      if (0 == i10) return false;
      if ((65536 & i10) == 0) return true;
      t10.reduce(i10);
    }
  }
  recoverByInsert(e10) {
    if (this.stack.length >= 300) return [];
    let t10 = this.p.parser.nextStates(this.state);
    if (t10.length > 8 || this.stack.length >= 120) {
      let i11 = [];
      for (let r7 = 0, s2; r7 < t10.length; r7 += 2) (s2 = t10[r7 + 1]) != this.state && this.p.parser.hasAction(s2, e10) && i11.push(t10[r7], s2);
      if (this.stack.length < 120) for (let e11 = 0; i11.length < 8 && e11 < t10.length; e11 += 2) {
        let r7 = t10[e11 + 1];
        i11.some((e12, t11) => 1 & t11 && e12 == r7) || i11.push(t10[e11], r7);
      }
      t10 = i11;
    }
    let i10 = [];
    for (let e11 = 0; e11 < t10.length && i10.length < 4; e11 += 2) {
      let r7 = t10[e11 + 1];
      if (r7 == this.state) continue;
      let s2 = this.split();
      s2.pushState(r7, this.pos), s2.storeNode(0, s2.pos, s2.pos, 4, true), s2.shiftContext(t10[e11], this.pos), s2.reducePos = this.pos, s2.score -= 200, i10.push(s2);
    }
    return i10;
  }
  forceReduce() {
    let { parser: e10 } = this.p, t10 = e10.stateSlot(this.state, 5);
    if ((65536 & t10) == 0) return false;
    if (!e10.validAction(this.state, t10)) {
      let i10 = t10 >> 19, r7 = 65535 & t10, s2 = this.stack.length - 3 * i10;
      if (s2 < 0 || 0 > e10.getGoto(this.stack[s2], r7, false)) {
        let e11 = this.findForcedReduction();
        if (null == e11) return false;
        t10 = e11;
      }
      this.storeNode(0, this.pos, this.pos, 4, true), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t10), true;
  }
  findForcedReduction() {
    let { parser: e10 } = this.p, t10 = [], i10 = (r7, s2) => {
      if (!t10.includes(r7)) return t10.push(r7), e10.allActions(r7, (t11) => {
        if (393216 & t11) ;
        else if (65536 & t11) {
          let i11 = (t11 >> 19) - s2;
          if (i11 > 1) {
            let r8 = 65535 & t11, s3 = this.stack.length - 3 * i11;
            if (s3 >= 0 && e10.getGoto(this.stack[s3], r8, false) >= 0) return i11 << 19 | 65536 | r8;
          }
        } else {
          let e11 = i10(t11, s2 + 1);
          if (null != e11) return e11;
        }
      });
    };
    return i10(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); ) if (!this.forceReduce()) {
      this.storeNode(0, this.pos, this.pos, 4, true);
      break;
    }
    return this;
  }
  get deadEnd() {
    if (3 != this.stack.length) return false;
    let { parser: e10 } = this.p;
    return 65535 == e10.data[e10.stateSlot(this.state, 1)] && !e10.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(e10) {
    if (this.state != e10.state || this.stack.length != e10.stack.length) return false;
    for (let t10 = 0; t10 < this.stack.length; t10 += 3) if (this.stack[t10] != e10.stack[t10]) return false;
    return true;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e10) {
    return this.p.parser.dialect.flags[e10];
  }
  shiftContext(e10, t10) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e10, this, this.p.stream.reset(t10)));
  }
  reduceContext(e10, t10) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e10, this, this.p.stream.reset(t10)));
  }
  emitContext() {
    let e10 = this.buffer.length - 1;
    (e10 < 0 || -3 != this.buffer[e10]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e10 = this.buffer.length - 1;
    (e10 < 0 || -4 != this.buffer[e10]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e10) {
    if (e10 != this.curContext.context) {
      let t10 = new i4(this.curContext.tracker, e10);
      t10.hash != this.curContext.hash && this.emitContext(), this.curContext = t10;
    }
  }
  setLookAhead(e10) {
    e10 > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e10);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class i4 {
  constructor(e10, t10) {
    this.tracker = e10, this.context = t10, this.hash = e10.strict ? e10.hash(t10) : 0;
  }
}
class i3 {
  constructor(e10) {
    this.start = e10, this.state = e10.state, this.stack = e10.stack, this.base = this.stack.length;
  }
  reduce(e10) {
    let t10 = e10 >> 19;
    0 == t10 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (t10 - 1) * 3;
    let i10 = this.start.p.parser.getGoto(this.stack[this.base - 3], 65535 & e10, true);
    this.state = i10;
  }
}
class i5 {
  constructor(e10, t10, i10) {
    this.stack = e10, this.pos = t10, this.index = i10, this.buffer = e10.buffer, 0 == this.index && this.maybeNext();
  }
  static create(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e10.bufferBase + e10.buffer.length;
    return new i5(e10, t10, t10 - e10.bufferBase);
  }
  maybeNext() {
    let e10 = this.stack.parent;
    null != e10 && (this.index = this.stack.bufferBase - e10.bufferBase, this.stack = e10, this.buffer = e10.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext();
  }
  fork() {
    return new i5(this.stack, this.pos, this.index);
  }
}
function i6(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
  if ("string" != typeof e10) return e10;
  let i10 = null;
  for (let r7 = 0, s2 = 0; r7 < e10.length; ) {
    let n2 = 0;
    for (; ; ) {
      let t11 = e10.charCodeAt(r7++), i11 = false;
      if (126 == t11) {
        n2 = 65535;
        break;
      }
      t11 >= 92 && t11--, t11 >= 34 && t11--;
      let s3 = t11 - 32;
      if (s3 >= 46 && (s3 -= 46, i11 = true), n2 += s3, i11) break;
      n2 *= 46;
    }
    i10 ? i10[s2++] = n2 : i10 = new t10(n2);
  }
  return i10;
}
class i8 {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
let i9 = new i8();
class i7 {
  constructor(e10, t10) {
    this.input = e10, this.ranges = t10, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = i9, this.rangeIndex = 0, this.pos = this.chunkPos = t10[0].from, this.range = t10[0], this.end = t10[t10.length - 1].to, this.readNext();
  }
  resolveOffset(e10, t10) {
    let i10 = this.range, r7 = this.rangeIndex, s2 = this.pos + e10;
    for (; s2 < i10.from; ) {
      if (!r7) return null;
      let e11 = this.ranges[--r7];
      s2 -= i10.from - e11.to, i10 = e11;
    }
    for (; t10 < 0 ? s2 > i10.to : s2 >= i10.to; ) {
      if (r7 == this.ranges.length - 1) return null;
      let e11 = this.ranges[++r7];
      s2 += e11.from - i10.to, i10 = e11;
    }
    return s2;
  }
  clipPos(e10) {
    if (e10 >= this.range.from && e10 < this.range.to) return e10;
    for (let t10 of this.ranges) if (t10.to > e10) return Math.max(e10, t10.from);
    return this.end;
  }
  peek(e10) {
    let t10 = this.chunkOff + e10, i10, r7;
    if (t10 >= 0 && t10 < this.chunk.length) i10 = this.pos + e10, r7 = this.chunk.charCodeAt(t10);
    else {
      let t11 = this.resolveOffset(e10, 1);
      if (null == t11) return -1;
      if ((i10 = t11) >= this.chunk2Pos && i10 < this.chunk2Pos + this.chunk2.length) r7 = this.chunk2.charCodeAt(i10 - this.chunk2Pos);
      else {
        let e11 = this.rangeIndex, t12 = this.range;
        for (; t12.to <= i10; ) t12 = this.ranges[++e11];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i10), i10 + this.chunk2.length > t12.to && (this.chunk2 = this.chunk2.slice(0, t12.to - i10)), r7 = this.chunk2.charCodeAt(0);
      }
    }
    return i10 >= this.token.lookAhead && (this.token.lookAhead = i10 + 1), r7;
  }
  acceptToken(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = t10 ? this.resolveOffset(t10, -1) : this.pos;
    if (null == i10 || i10 < this.token.start) throw RangeError("Token end out of bounds");
    this.token.value = e10, this.token.end = i10;
  }
  acceptTokenTo(e10, t10) {
    this.token.value = e10, this.token.end = t10;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e10, chunkPos: t10 } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e10, this.chunk2Pos = t10, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e10 = this.input.chunk(this.pos), t10 = this.pos + e10.length;
      this.chunk = t10 > this.range.to ? e10.slice(0, this.range.to - this.pos) : e10, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    for (this.chunkOff += e10; this.pos + e10 >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      e10 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e10, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(e10, t10) {
    if (t10 ? (this.token = t10, t10.start = e10, t10.lookAhead = e10 + 1, t10.value = t10.extended = -1) : this.token = i9, this.pos != e10) {
      if (this.pos = e10, e10 == this.end) return this.setDone(), this;
      for (; e10 < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e10 >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e10 >= this.chunkPos && e10 < this.chunkPos + this.chunk.length ? this.chunkOff = e10 - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(e10, t10) {
    if (e10 >= this.chunkPos && t10 <= this.chunkPos + this.chunk.length) return this.chunk.slice(e10 - this.chunkPos, t10 - this.chunkPos);
    if (e10 >= this.chunk2Pos && t10 <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(e10 - this.chunk2Pos, t10 - this.chunk2Pos);
    if (e10 >= this.range.from && t10 <= this.range.to) return this.input.read(e10, t10);
    let i10 = "";
    for (let r7 of this.ranges) {
      if (r7.from >= t10) break;
      r7.to > e10 && (i10 += this.input.read(Math.max(r7.from, e10), Math.min(r7.to, t10)));
    }
    return i10;
  }
}
class re {
  constructor(e10, t10) {
    this.data = e10, this.id = t10;
  }
  token(e10, t10) {
    let { parser: i10 } = t10.p;
    !function(e11, t11, i11, r7, s2, n2) {
      let a2 = 0, o2 = 1 << r7, { dialect: l2 } = i11.p.parser;
      e: for (; (o2 & e11[a2]) != 0; ) {
        let i12 = e11[a2 + 1];
        for (let r9 = a2 + 3; r9 < i12; r9 += 2) if ((e11[r9 + 1] & o2) > 0) {
          let i13 = e11[r9];
          if (l2.allows(i13) && (-1 == t11.token.value || t11.token.value == i13 || function(e12, t12, i14, r10) {
            let s3 = rt(i14, r10, t12);
            return s3 < 0 || rt(i14, r10, e12) < s3;
          }(i13, t11.token.value, s2, n2))) {
            t11.acceptToken(i13);
            break;
          }
        }
        let r8 = t11.next, h2 = 0, d2 = e11[a2 + 2];
        if (t11.next < 0 && d2 > h2 && 65535 == e11[i12 + 3 * d2 - 3]) {
          a2 = e11[i12 + 3 * d2 - 1];
          continue;
        }
        for (; h2 < d2; ) {
          let s3 = h2 + d2 >> 1, n3 = i12 + s3 + (s3 << 1), o3 = e11[n3], l3 = e11[n3 + 1] || 65536;
          if (r8 < o3) d2 = s3;
          else if (r8 >= l3) h2 = s3 + 1;
          else {
            a2 = e11[n3 + 2], t11.advance();
            continue e;
          }
        }
        break;
      }
    }(this.data, e10, t10, this.id, i10.data, i10.tokenPrecTable);
  }
}
function rt(e10, t10, i10) {
  for (let r7 = t10, s2; 65535 != (s2 = e10[r7]); r7++) if (s2 == i10) return r7 - t10;
  return -1;
}
re.prototype.contextual = re.prototype.fallback = re.prototype.extend = false, re.prototype.fallback = re.prototype.extend = false;
let ri = "undefined" != typeof process && i1 && /\bparse\b/.test(i1.LOG), rr = null;
function rs(e10, t10, i10) {
  let r7 = e10.cursor(tp.IncludeAnonymous);
  for (r7.moveTo(t10); ; ) if (!(i10 < 0 ? r7.childBefore(t10) : r7.childAfter(t10))) for (; ; ) {
    if ((i10 < 0 ? r7.to < t10 : r7.from > t10) && !r7.type.isError) return i10 < 0 ? Math.max(0, Math.min(r7.to - 1, t10 - 25)) : Math.min(e10.length, Math.max(r7.from + 1, t10 + 25));
    if (i10 < 0 ? r7.prevSibling() : r7.nextSibling()) break;
    if (!r7.parent()) return i10 < 0 ? 0 : e10.length;
  }
}
class rn {
  constructor(e10, t10) {
    this.fragments = e10, this.nodeSet = t10, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e10 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e10) {
      for (this.safeFrom = e10.openStart ? rs(e10.tree, e10.from + e10.offset, 1) - e10.offset : e10.from, this.safeTo = e10.openEnd ? rs(e10.tree, e10.to + e10.offset, -1) - e10.offset : e10.to; this.trees.length; ) this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e10.tree), this.start.push(-e10.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else this.nextStart = 1e9;
  }
  nodeAt(e10) {
    if (e10 < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e10; ) this.nextFragment();
    if (!this.fragment) return null;
    for (; ; ) {
      let t10 = this.trees.length - 1;
      if (t10 < 0) return this.nextFragment(), null;
      let i10 = this.trees[t10], r7 = this.index[t10];
      if (r7 == i10.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s2 = i10.children[r7], n2 = this.start[t10] + i10.positions[r7];
      if (n2 > e10) return this.nextStart = n2, null;
      if (s2 instanceof tu) {
        if (n2 == e10) {
          if (n2 < this.safeFrom) return null;
          let e11 = n2 + s2.length;
          if (e11 <= this.safeTo) {
            let t11 = s2.prop(tc.lookAhead);
            if (!t11 || e11 + t11 < this.fragment.to) return s2;
          }
        }
        this.index[t10]++, n2 + s2.length >= Math.max(this.safeFrom, e10) && (this.trees.push(s2), this.start.push(n2), this.index.push(0));
      } else this.index[t10]++, this.nextStart = n2 + s2.length;
    }
  }
}
class ra {
  constructor(e10, t10) {
    this.stream = t10, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e10.tokenizers.map((e11) => new i8());
  }
  getActions(e10) {
    let t10 = 0, i10 = null, { parser: r7 } = e10.p, { tokenizers: s2 } = r7, n2 = r7.stateSlot(e10.state, 3), a2 = e10.curContext ? e10.curContext.hash : 0, o2 = 0;
    for (let r8 = 0; r8 < s2.length; r8++) {
      if ((1 << r8 & n2) == 0) continue;
      let l2 = s2[r8], h2 = this.tokens[r8];
      if ((!i10 || l2.fallback) && ((l2.contextual || h2.start != e10.pos || h2.mask != n2 || h2.context != a2) && (this.updateCachedToken(h2, l2, e10), h2.mask = n2, h2.context = a2), h2.lookAhead > h2.end + 25 && (o2 = Math.max(h2.lookAhead, o2)), 0 != h2.value)) {
        let r9 = t10;
        if (h2.extended > -1 && (t10 = this.addActions(e10, h2.extended, h2.end, t10)), t10 = this.addActions(e10, h2.value, h2.end, t10), !l2.extend && (i10 = h2, t10 > r9)) break;
      }
    }
    for (; this.actions.length > t10; ) this.actions.pop();
    return o2 && e10.setLookAhead(o2), i10 || e10.pos != this.stream.end || ((i10 = new i8()).value = e10.p.parser.eofTerm, i10.start = i10.end = e10.pos, t10 = this.addActions(e10, i10.value, i10.end, t10)), this.mainToken = i10, this.actions;
  }
  getMainToken(e10) {
    if (this.mainToken) return this.mainToken;
    let t10 = new i8(), { pos: i10, p: r7 } = e10;
    return t10.start = i10, t10.end = Math.min(i10 + 1, r7.stream.end), t10.value = i10 == r7.stream.end ? r7.parser.eofTerm : 0, t10;
  }
  updateCachedToken(e10, t10, i10) {
    let r7 = this.stream.clipPos(i10.pos);
    if (t10.token(this.stream.reset(r7, e10), i10), e10.value > -1) {
      let { parser: t11 } = i10.p;
      for (let r8 = 0; r8 < t11.specialized.length; r8++) if (t11.specialized[r8] == e10.value) {
        let s2 = t11.specializers[r8](this.stream.read(e10.start, e10.end), i10);
        if (s2 >= 0 && i10.p.parser.dialect.allows(s2 >> 1)) {
          (1 & s2) == 0 ? e10.value = s2 >> 1 : e10.extended = s2 >> 1;
          break;
        }
      }
    } else e10.value = 0, e10.end = this.stream.clipPos(r7 + 1);
  }
  putAction(e10, t10, i10, r7) {
    for (let t11 = 0; t11 < r7; t11 += 3) if (this.actions[t11] == e10) return r7;
    return this.actions[r7++] = e10, this.actions[r7++] = t10, this.actions[r7++] = i10, r7;
  }
  addActions(e10, t10, i10, r7) {
    let { state: s2 } = e10, { parser: n2 } = e10.p, { data: a2 } = n2;
    for (let e11 = 0; e11 < 2; e11++) for (let o2 = n2.stateSlot(s2, e11 ? 2 : 1); ; o2 += 3) {
      if (65535 == a2[o2]) {
        if (1 == a2[o2 + 1]) o2 = rc(a2, o2 + 2);
        else {
          0 == r7 && 2 == a2[o2 + 1] && (r7 = this.putAction(rc(a2, o2 + 2), t10, i10, r7));
          break;
        }
      }
      a2[o2] == t10 && (r7 = this.putAction(rc(a2, o2 + 1), t10, i10, r7));
    }
    return r7;
  }
}
class ro {
  constructor(e10, t10, i10, r7) {
    this.parser = e10, this.input = t10, this.ranges = r7, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new i7(t10, r7), this.tokens = new ra(e10, this.stream), this.topTerm = e10.top[1];
    let { from: s2 } = r7[0];
    this.stacks = [i2.start(this, e10.top[0], s2)], this.fragments = i10.length && this.stream.end - s2 > 4 * e10.bufferLength ? new rn(i10, e10.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e10, t10, i10 = this.stacks, r7 = this.minStackPos, s2 = this.stacks = [];
    if (this.bigReductionCount > 300 && 1 == i10.length) {
      let [e11] = i10;
      for (; e11.forceReduce() && e11.stack.length && e11.stack[e11.stack.length - 2] >= this.lastBigReductionStart; ) ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let n2 = 0; n2 < i10.length; n2++) {
      let a2 = i10[n2];
      for (; ; ) {
        if (this.tokens.mainToken = null, a2.pos > r7) s2.push(a2);
        else {
          if (this.advanceStack(a2, s2, i10)) continue;
          e10 || (e10 = [], t10 = []), e10.push(a2);
          let r8 = this.tokens.getMainToken(a2);
          t10.push(r8.value, r8.end);
        }
        break;
      }
    }
    if (!s2.length) {
      let t11 = e10 && function(e11) {
        let t12 = null;
        for (let i11 of e11) {
          let e12 = i11.p.stoppedAt;
          (i11.pos == i11.p.stream.end || null != e12 && i11.pos > e12) && i11.p.parser.stateFlag(i11.state, 2) && (!t12 || t12.score < i11.score) && (t12 = i11);
        }
        return t12;
      }(e10);
      if (t11) return ri && console.log("Finish with " + this.stackID(t11)), this.stackToTree(t11);
      if (this.parser.strict) throw ri && e10 && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), SyntaxError("No parse at " + r7);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && e10) {
      let i11 = null != this.stoppedAt && e10[0].pos > this.stoppedAt ? e10[0] : this.runRecovery(e10, t10, s2);
      if (i11) return ri && console.log("Force-finish " + this.stackID(i11)), this.stackToTree(i11.forceAll());
    }
    if (this.recovering) {
      let e11 = 1 == this.recovering ? 1 : 3 * this.recovering;
      if (s2.length > e11) for (s2.sort((e12, t11) => t11.score - e12.score); s2.length > e11; ) s2.pop();
      s2.some((e12) => e12.reducePos > r7) && this.recovering--;
    } else if (s2.length > 1) {
      t: for (let e11 = 0; e11 < s2.length - 1; e11++) {
        let t11 = s2[e11];
        for (let i11 = e11 + 1; i11 < s2.length; i11++) {
          let r8 = s2[i11];
          if (t11.sameState(r8) || t11.buffer.length > 500 && r8.buffer.length > 500) {
            if ((t11.score - r8.score || t11.buffer.length - r8.buffer.length) > 0) s2.splice(i11--, 1);
            else {
              s2.splice(e11--, 1);
              continue t;
            }
          }
        }
      }
      s2.length > 12 && s2.splice(12, s2.length - 12);
    }
    this.minStackPos = s2[0].pos;
    for (let e11 = 1; e11 < s2.length; e11++) s2[e11].pos < this.minStackPos && (this.minStackPos = s2[e11].pos);
    return null;
  }
  stopAt(e10) {
    if (null != this.stoppedAt && this.stoppedAt < e10) throw RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e10;
  }
  advanceStack(e10, t10, i10) {
    let r7 = e10.pos, { parser: s2 } = this, n2 = ri ? this.stackID(e10) + " -> " : "";
    if (null != this.stoppedAt && r7 > this.stoppedAt) return e10.forceReduce() ? e10 : null;
    if (this.fragments) {
      let t11 = e10.curContext && e10.curContext.tracker.strict, i11 = t11 ? e10.curContext.hash : 0;
      for (let a3 = this.fragments.nodeAt(r7); a3; ) {
        let r8 = this.parser.nodeSet.types[a3.type.id] == a3.type ? s2.getGoto(e10.state, a3.type.id) : -1;
        if (r8 > -1 && a3.length && (!t11 || (a3.prop(tc.contextHash) || 0) == i11)) return e10.useNode(a3, r8), ri && console.log(n2 + this.stackID(e10) + ` (via reuse of ${s2.getName(a3.type.id)})`), true;
        if (!(a3 instanceof tu) || 0 == a3.children.length || a3.positions[0] > 0) break;
        let o3 = a3.children[0];
        if (o3 instanceof tu && 0 == a3.positions[0]) a3 = o3;
        else break;
      }
    }
    let a2 = s2.stateSlot(e10.state, 4);
    if (a2 > 0) return e10.reduce(a2), ri && console.log(n2 + this.stackID(e10) + ` (via always-reduce ${s2.getName(65535 & a2)})`), true;
    if (e10.stack.length >= 8400) for (; e10.stack.length > 6e3 && e10.forceReduce(); ) ;
    let o2 = this.tokens.getActions(e10);
    for (let a3 = 0; a3 < o2.length; ) {
      let l2 = o2[a3++], h2 = o2[a3++], d2 = o2[a3++], c2 = a3 == o2.length || !i10, u2 = c2 ? e10 : e10.split(), p2 = this.tokens.mainToken;
      if (u2.apply(l2, h2, p2 ? p2.start : u2.pos, d2), ri && console.log(n2 + this.stackID(u2) + ` (via ${(65536 & l2) == 0 ? "shift" : `reduce of ${s2.getName(65535 & l2)}`} for ${s2.getName(h2)} @ ${r7}${u2 == e10 ? "" : ", split"})`), c2) return true;
      u2.pos > r7 ? t10.push(u2) : i10.push(u2);
    }
    return false;
  }
  advanceFully(e10, t10) {
    let i10 = e10.pos;
    for (; ; ) {
      if (!this.advanceStack(e10, null, null)) return false;
      if (e10.pos > i10) return rl(e10, t10), true;
    }
  }
  runRecovery(e10, t10, i10) {
    let r7 = null, s2 = false;
    for (let n2 = 0; n2 < e10.length; n2++) {
      let a2 = e10[n2], o2 = t10[n2 << 1], l2 = t10[(n2 << 1) + 1], h2 = ri ? this.stackID(a2) + " -> " : "";
      if (a2.deadEnd && (s2 || (s2 = true, a2.restart(), ri && console.log(h2 + this.stackID(a2) + " (restarted)"), this.advanceFully(a2, i10)))) continue;
      let d2 = a2.split(), c2 = h2;
      for (let e11 = 0; d2.forceReduce() && e11 < 10 && (ri && console.log(c2 + this.stackID(d2) + " (via force-reduce)"), !this.advanceFully(d2, i10)); e11++) ri && (c2 = this.stackID(d2) + " -> ");
      for (let e11 of a2.recoverByInsert(o2)) ri && console.log(h2 + this.stackID(e11) + " (via recover-insert)"), this.advanceFully(e11, i10);
      this.stream.end > a2.pos ? (l2 == a2.pos && (l2++, o2 = 0), a2.recoverByDelete(o2, l2), ri && console.log(h2 + this.stackID(a2) + ` (via recover-delete ${this.parser.getName(o2)})`), rl(a2, i10)) : (!r7 || r7.score < a2.score) && (r7 = a2);
    }
    return r7;
  }
  stackToTree(e10) {
    return e10.close(), tu.build({ buffer: i5.create(e10), nodeSet: this.parser.nodeSet, topID: this.topTerm, maxBufferLength: this.parser.bufferLength, reused: this.reused, start: this.ranges[0].from, length: e10.pos - this.ranges[0].from, minRepeatType: this.parser.minRepeatTerm });
  }
  stackID(e10) {
    let t10 = (rr || (rr = /* @__PURE__ */ new WeakMap())).get(e10);
    return t10 || rr.set(e10, t10 = String.fromCodePoint(this.nextStackID++)), t10 + e10;
  }
}
function rl(e10, t10) {
  for (let i10 = 0; i10 < t10.length; i10++) {
    let r7 = t10[i10];
    if (r7.pos == e10.pos && r7.sameState(e10)) {
      t10[i10].score < e10.score && (t10[i10] = e10);
      return;
    }
  }
  t10.push(e10);
}
class rh {
  constructor(e10, t10, i10) {
    this.source = e10, this.flags = t10, this.disabled = i10;
  }
  allows(e10) {
    return !this.disabled || 0 == this.disabled[e10];
  }
}
class rd extends to {
  constructor(e10) {
    if (super(), this.wrappers = [], 14 != e10.version) throw RangeError(`Parser version (${e10.version}) doesn't match runtime version (14)`);
    let t10 = e10.nodeNames.split(" ");
    this.minRepeatTerm = t10.length;
    for (let i11 = 0; i11 < e10.repeatNodeCount; i11++) t10.push("");
    let i10 = Object.keys(e10.topRules).map((t11) => e10.topRules[t11][1]), r7 = [];
    for (let e11 = 0; e11 < t10.length; e11++) r7.push([]);
    function s2(e11, t11, i11) {
      r7[e11].push([t11, t11.deserialize(String(i11))]);
    }
    if (e10.nodeProps) for (let t11 of e10.nodeProps) {
      let e11 = t11[0];
      "string" == typeof e11 && (e11 = tc[e11]);
      for (let i11 = 1; i11 < t11.length; ) {
        let r8 = t11[i11++];
        if (r8 >= 0) s2(r8, e11, t11[i11++]);
        else {
          let n3 = t11[i11 + -r8];
          for (let a2 = -r8; a2 > 0; a2--) s2(t11[i11++], e11, n3);
          i11++;
        }
      }
    }
    this.nodeSet = new tl(t10.map((t11, s3) => th.define({ name: s3 >= this.minRepeatTerm ? void 0 : t11, id: s3, props: r7[s3], top: i10.indexOf(s3) > -1, error: 0 == s3, skipped: e10.skippedNodes && e10.skippedNodes.indexOf(s3) > -1 }))), e10.propSources && (this.nodeSet = this.nodeSet.extend(...e10.propSources)), this.strict = false, this.bufferLength = td;
    let n2 = i6(e10.tokenData);
    this.context = e10.context, this.specializerSpecs = e10.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let e11 = 0; e11 < this.specializerSpecs.length; e11++) this.specialized[e11] = this.specializerSpecs[e11].term;
    this.specializers = this.specializerSpecs.map(ru), this.states = i6(e10.states, Uint32Array), this.data = i6(e10.stateData), this.goto = i6(e10.goto), this.maxTerm = e10.maxTerm, this.tokenizers = e10.tokenizers.map((e11) => "number" == typeof e11 ? new re(n2, e11) : e11), this.topRules = e10.topRules, this.dialects = e10.dialects || {}, this.dynamicPrecedences = e10.dynamicPrecedences || null, this.tokenPrecTable = e10.tokenPrec, this.termNames = e10.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e10, t10, i10) {
    let r7 = new ro(this, e10, t10, i10);
    for (let s2 of this.wrappers) r7 = s2(r7, e10, t10, i10);
    return r7;
  }
  getGoto(e10, t10) {
    let i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r7 = this.goto;
    if (t10 >= r7[0]) return -1;
    for (let s2 = r7[t10 + 1]; ; ) {
      let t11 = r7[s2++], n2 = 1 & t11, a2 = r7[s2++];
      if (n2 && i10) return a2;
      for (let i11 = s2 + (t11 >> 1); s2 < i11; s2++) if (r7[s2] == e10) return a2;
      if (n2) return -1;
    }
  }
  hasAction(e10, t10) {
    let i10 = this.data;
    for (let r7 = 0; r7 < 2; r7++) for (let s2 = this.stateSlot(e10, r7 ? 2 : 1), n2; ; s2 += 3) {
      if (65535 == (n2 = i10[s2])) {
        if (1 == i10[s2 + 1]) n2 = i10[s2 = rc(i10, s2 + 2)];
        else if (2 == i10[s2 + 1]) return rc(i10, s2 + 2);
        else break;
      }
      if (n2 == t10 || 0 == n2) return rc(i10, s2 + 1);
    }
    return 0;
  }
  stateSlot(e10, t10) {
    return this.states[6 * e10 + t10];
  }
  stateFlag(e10, t10) {
    return (this.stateSlot(e10, 0) & t10) > 0;
  }
  validAction(e10, t10) {
    return !!this.allActions(e10, (e11) => e11 == t10 || null);
  }
  allActions(e10, t10) {
    let i10 = this.stateSlot(e10, 4), r7 = i10 ? t10(i10) : void 0;
    for (let i11 = this.stateSlot(e10, 1); null == r7; i11 += 3) {
      if (65535 == this.data[i11]) {
        if (1 == this.data[i11 + 1]) i11 = rc(this.data, i11 + 2);
        else break;
      }
      r7 = t10(rc(this.data, i11 + 1));
    }
    return r7;
  }
  nextStates(e10) {
    let t10 = [];
    for (let i10 = this.stateSlot(e10, 1); ; i10 += 3) {
      if (65535 == this.data[i10]) {
        if (1 == this.data[i10 + 1]) i10 = rc(this.data, i10 + 2);
        else break;
      }
      if ((1 & this.data[i10 + 2]) == 0) {
        let e11 = this.data[i10 + 1];
        t10.some((t11, i11) => 1 & i11 && t11 == e11) || t10.push(this.data[i10], e11);
      }
    }
    return t10;
  }
  configure(e10) {
    let t10 = Object.assign(Object.create(rd.prototype), this);
    if (e10.props && (t10.nodeSet = this.nodeSet.extend(...e10.props)), e10.top) {
      let i10 = this.topRules[e10.top];
      if (!i10) throw RangeError(`Invalid top rule name ${e10.top}`);
      t10.top = i10;
    }
    return e10.tokenizers && (t10.tokenizers = this.tokenizers.map((t11) => {
      let i10 = e10.tokenizers.find((e11) => e11.from == t11);
      return i10 ? i10.to : t11;
    })), e10.specializers && (t10.specializers = this.specializers.slice(), t10.specializerSpecs = this.specializerSpecs.map((i10, r7) => {
      let s2 = e10.specializers.find((e11) => e11.from == i10.external);
      if (!s2) return i10;
      let n2 = Object.assign(Object.assign({}, i10), { external: s2.to });
      return t10.specializers[r7] = ru(n2), n2;
    })), e10.contextTracker && (t10.context = e10.contextTracker), e10.dialect && (t10.dialect = this.parseDialect(e10.dialect)), null != e10.strict && (t10.strict = e10.strict), e10.wrap && (t10.wrappers = t10.wrappers.concat(e10.wrap)), null != e10.bufferLength && (t10.bufferLength = e10.bufferLength), t10;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e10) {
    return this.termNames ? this.termNames[e10] : String(e10 <= this.maxNode && this.nodeSet.types[e10].name || e10);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e10) {
    let t10 = this.dynamicPrecedences;
    return null == t10 ? 0 : t10[e10] || 0;
  }
  parseDialect(e10) {
    let t10 = Object.keys(this.dialects), i10 = t10.map(() => false);
    if (e10) for (let r8 of e10.split(" ")) {
      let e11 = t10.indexOf(r8);
      e11 >= 0 && (i10[e11] = true);
    }
    let r7 = null;
    for (let e11 = 0; e11 < t10.length; e11++) if (!i10[e11]) for (let i11 = this.dialects[t10[e11]], s2; 65535 != (s2 = this.data[i11++]); ) (r7 || (r7 = new Uint8Array(this.maxTerm + 1)))[s2] = 1;
    return new rh(e10, i10, r7);
  }
  static deserialize(e10) {
    return new rd(e10);
  }
}
function rc(e10, t10) {
  return e10[t10] | e10[t10 + 1] << 16;
}
function ru(e10) {
  if (e10.external) {
    let t10 = e10.extend ? 1 : 0;
    return (i10, r7) => e10.external(i10, r7) << 1 | t10;
  }
  return e10.get;
}
let rp = tf({ PropertyName: tm.propertyName, String: tm.string, Bytes: tm.string, Number: tm.number, "True False": tm.bool, ",": tm.separator, ":": tm.separator, "[ ]": tm.squareBracket, "{ }": tm.brace }), rf = rd.deserialize({ version: 14, states: "&`Q}QPOOOOQO'#C`'#C`O!UQPO'#C`O!^QPO'#CcO#ZQPO'#CfOOQO'#Cg'#CgOOQO'#Ch'#ChOOQO'#Ci'#CiOOQO'#Cj'#CjOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Cw'#CwO#bQPO'#C_OOQO'#Cm'#CmQ!aQPOOQOQPOOOOQO,58},58}O#gQPO,58}OOQO,59Q,59QO#rQPO,59QO#zQPO,58yOOQO-E6k-E6kOOQO1G.i1G.iO$RQPO1G.lO$YQPO1G.lOOQO1G.l1G.lO$bQQO'#C`O$vQPO'#CnO#zQPO1G.eO${QQO1G.eOOQO,59Z,59ZOOQO7+$W7+$WO%^QPO7+$WOOQO-E6m-E6mOOQO,59Y,59YOOQO-E6l-E6lO%eQQO7+$POOQO7+$P7+$POOQO<<Gr<<GrP!iQPO'#CoOOQO<<Gk<<Gk", stateData: "&S~OfOSgOSPOS~OUROXSOhPOmTOnUOoVOpWOqWOrXOsYO~OiQO~P]Od]XjSX~OT`OhPOiPO~OUROXSOiVOmTOnUOoVOpWOqWOrXOsYO~OWbO~P!iOjdO~OTfOhPOiPO~OWiOlgO~OijO~P]OWoO~P!iOWoOlpO~Od]Xh]Xi]XjSXt]XT]X~OjrO~OtuOdRihRiiRiTRi~OWvO~P!iOtxOdRqhRqiRqTRq~Otgqpoimrshr~", goto: "#PlPPPmsPP}PP}}}}}}}!W!b!hPPPPPPP!nX]OR^aW[OR^aTkdl_ZOSdglpwQ^OQaRTe^aQldRslQhcRqhQ_OQcSQmdUngpwRtl", nodeNames: "⚠ Comment Document Property PropertyName } { Object ] [ Array Null Number String Bytes True False", maxTerm: 36, nodeProps: [["isolate", 1, ""], ["openedBy", 5, "{", 8, "["], ["closedBy", 6, "}", 9, "]"]], propSources: [rp], skippedNodes: [0, 1], repeatNodeCount: 3, tokenData: "C|~RiXY!pYZ!{]^!{pq!prs#Stu)`wx)t|}9w!O!P:O!P!Q;[!Q![;|![!]<b!c!})`!}#O<g#P#Q<l#R#S)`#T#Y)`#Y#Z<q#Z#b)`#b#c?b#c#h)`#h#iAj#i#o)`#o#pCr#q#rCw~!uQf~XY!ppq!p~#SOtQg~~#VWpq#oqr#ors&Xs#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~#rWpq#oqr#ors$[s#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~$aOi~~$dXrs#o!P!Q#o#O#P#o#U#V#o#Y#Z#o#b#c#o#f#g#o#h#i#o#i#j%P~%SR!Q![%]!c!i%]#T#Z%]~%`R!Q![%i!c!i%i#T#Z%i~%lR!Q![%u!c!i%u#T#Z%u~%xR!Q![#o!c!i#o#T#Z#o~&UP;=`<%l#o~&^Pi~rs&a~&dZXY&aYZ&a]^&apq&aqr&ars'Vs#O&a#O#P'h#P;'S&a;'S;=`)Y<%lO&a~'YPrs']~'`Prs'c~'hOo~~'kXrs&a!P!Q&a#O#P&a#U#V&a#Y#Z&a#b#c&a#f#g&a#h#i&a#i#j(W~(ZR!Q![(d!c!i(d#T#Z(d~(gR!Q![(p!c!i(p#T#Z(p~(sR!Q![(|!c!i(|#T#Z(|~)PR!Q![&a!c!i&a#T#Z&a~)]P;=`<%l&a~)eTh~tu)`!Q![)`!c!})`#R#S)`#T#o)`~)wXpq*dqr*dsw*dwx-lx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~*gXpq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+XXp~pq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+wXrs*d!P!Q*d#O#P*d#U#V*d#Y#Z*d#b#c*d#f#g*d#h#i*d#i#j,d~,gR!Q![,p!c!i,p#T#Z,p~,sR!Q![,|!c!i,|#T#Z,|~-PR!Q![-Y!c!i-Y#T#Z-Y~-]R!Q![*d!c!i*d#T#Z*d~-iP;=`<%l*d~-qXp~pq*dqr*dsw*dwx.^x#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~.c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~/[[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0Qx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0T[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0yx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0|[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~1w[q~XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~2pXrs/X!P!Q/X#O#P/X#U#V/X#Y#Z/X#b#c/X#f#g/X#h#i/X#i#j3]~3`R!Q![3i!c!i3i#T#Z3i~3lR!Q![3u!c!i3u#T#Z3u~3xR!Q![4R!c!i4R#T#Z4R~4UR!Q![/X!c!i/X#T#Z/X~4bP;=`<%l/X~4h[XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~5c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx6Xx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~6^[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~7Z[q~p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~8SXrs4e!P!Q4e#O#P4e#U#V4e#Y#Z4e#b#c4e#f#g4e#h#i4e#i#j8o~8rR!Q![8{!c!i8{#T#Z8{~9OR!Q![9X!c!i9X#T#Z9X~9[R!Q![9e!c!i9e#T#Z9e~9hR!Q![4e!c!i4e#T#Z4e~9tP;=`<%l4eR:OOlPtQ~:RP!Q![:U~:ZSn~!Q![:U!g!h:g#R#S:U#X#Y:g~:jS{|:v}!O:v!Q![;P#R#S;P~:yQ!Q![;P#R#S;P~;UQn~!Q![;P#R#S;P~;_P!P!Q;b~;gTP~OY;bZ];b^;'S;b;'S;=`;v<%lO;b~;yP;=`<%l;b~<RTn~!O!P:U!Q![;|!g!h:g#R#S;|#X#Y:g~<gOj~~<lOX~~<qOW~~<vUh~tu)`!Q![)`!c!})`#R#S)`#T#U=Y#U#o)`~=_Vh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a=t#a#o)`~=yVh~tu)`!Q![)`!c!})`#R#S)`#T#g)`#g#h>`#h#o)`~>eVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#Y>z#Y#o)`~?RTs~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~?gVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#j?|#j#o)`~@RVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a@h#a#o)`~@mVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#aAS#a#o)`~AZTm~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~AoVh~tu)`!Q![)`!c!})`#R#S)`#T#f)`#f#gBU#g#o)`~BZVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#jBp#j#o)`~BuVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#YC[#Y#o)`~CcTr~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~CwOU~~C|OT~", tokenizers: [0, 1], topRules: { Document: [0, 2] }, tokenPrec: 222 });
const _rm = class _rm {
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
__publicField(_rm, "parse", (e10) => new _rm(rf.parse(e10), e10));
let rm = _rm;
let rg = class extends Error {
  constructor(e10, t10, i10 = "") {
    let r7 = eJ.create({ doc: e10.sliceDoc(0) }), s2 = r7.doc.lineAt(t10.from), n2 = `${s2.number} | `;
    super(`SyntaxError${i10 ? `: ${i10}` : ""}
${n2}${r7.sliceDoc(s2.from, s2.to)}        
${Array(n2.length + (t10.from - s2.from - 1)).fill(" ").join("")} ^ at position ${t10.from}        
`), this.source = e10, this.node = t10, this.reason = i10;
  }
}, ry = Array.isArray;
function rv(e10) {
  return !!e10 && e10.constructor === Object;
}
let rb = (e10) => "string" == typeof e10 || e10 instanceof String;
function rx(e10) {
  return void 0 === e10;
}
class rk {
  constructor() {
    __privateAdd(this, _s, []);
    __privateAdd(this, _n, 0);
  }
  get written() {
    return __privateGet(this, _s).length > 0;
  }
  withIdent(e10) {
    __privateWrapper(this, _n)._++, e10(), __privateWrapper(this, _n)._--;
  }
  tab() {
    this.space(__privateGet(this, _n), "  ");
  }
  space(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
    0 != e10 && this.write(Array(e10).fill(t10).join(""));
  }
  break() {
    this.write("\n");
  }
  write(e10) {
    __privateGet(this, _s).push(e10);
  }
  toString() {
    return __privateGet(this, _s).join("");
  }
}
_s = new WeakMap();
_n = new WeakMap();
function* rS(e10) {
  for (let t10 = e10.firstChild; null != t10; t10 = t10.nextSibling) yield t10;
}
let rO = function(e10, t10) {
  let i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return rw(e10, t10, [], i10);
}, rw = (e10, t10, i10, r7) => {
  if (!t10) return null;
  switch (r7.onValueNode && r7.onValueNode(t10, i10), t10.type.id) {
    case 2:
      let s2;
      for (let n3 of rS(t10)) if (!n3.type.is(1)) {
        if (n3.type.is(3)) {
          s2 || (s2 = {});
          let [t11, a3] = rC(e10, n3), o3 = rR(e10, t11);
          rT(s2, o3, rw(e10, a3, [...i10, ...o3], r7));
        } else {
          if (s2) {
            if (r7.invalidValueAsUndefined) return;
            throw new rg(e10, n3, "Property / Value could not in same scope");
          }
          return rw(e10, n3, i10, r7);
        }
      }
      return s2;
    case 7:
      let n2 = {};
      for (let s3 of rS(t10)) if (!s3.type.is(1) && s3.type.is(3)) {
        let [t11, a3] = rC(e10, s3), o3 = rR(e10, t11);
        rT(n2, o3, rw(e10, a3, [...i10, ...o3], r7));
      }
      return n2;
    case 10:
      let a2 = [];
      for (let s3 of rS(t10)) {
        if ("[" == s3.name || "]" == s3.name) continue;
        let t11 = rw(e10, s3, [...i10, a2.length], r7);
        a2.push(t11);
      }
      return a2;
    case 14:
      if (t10.firstChild) throw new rg(e10, t10, "invalid bytes");
      let o2 = e10.sliceDoc(t10.from, t10.to);
      if (o2.startsWith("'''")) return r$(r_(o2.substring(3, o2.length - 3)));
      return r$(JSON.parse(o2.replaceAll("'", '"')));
    case 13:
      if (t10.firstChild) {
        if (r7.invalidValueAsUndefined) return;
        throw new rg(e10, t10, "invalid string");
      }
      let l2 = e10.sliceDoc(t10.from, t10.to);
      if (l2.startsWith('"""')) return r_(l2.substring(3, l2.length - 3));
      return JSON.parse(l2);
    case 12:
      if (t10.firstChild) {
        if (r7.invalidValueAsUndefined) return;
        throw new rg(e10, t10, "invalid number");
      }
      return parseFloat(e10.sliceDoc(t10.from, t10.to));
    case 15:
      return true;
    case 16:
      return false;
    case 11:
      return null;
    default:
      if (r7.invalidValueAsUndefined) return;
      throw new rg(e10, t10);
  }
};
function r$(e10) {
  return new rP(new TextEncoder().encode(e10));
}
class rP extends Uint8Array {
  toJSON() {
    return btoa(new TextDecoder().decode(this));
  }
}
function r_(e10) {
  let t10 = e10.match(/^(([\n\r]+)[\t ]+)/);
  return t10 ? e10.replaceAll(t10[1], t10[2]).trimStart() : e10;
}
function rC(e10, t10) {
  let i10;
  let r7 = [];
  for (let s2 of rS(t10)) {
    if (s2.type.is(4)) {
      r7.push(s2);
      continue;
    }
    if (!rx(i10)) throw new rg(e10, s2, "Property must only one value");
    i10 = s2;
  }
  if (0 == r7.length) throw new rg(e10, t10, "Property must have at least one PropertyName");
  if (rx(i10)) throw new rg(e10, t10, "Property must at least one value");
  return [r7, i10];
}
function rR(e10, t10) {
  return t10.map((t11) => function(e11) {
    try {
      return JSON.parse(e11);
    } catch (t12) {
      return e11;
    }
  }(e10.sliceDoc(t11.from, t11.to)));
}
function rT(e10, t10, i10) {
  if (0 === t10.length) return;
  if (1 === t10.length) {
    e10[t10[0]] = i10;
    return;
  }
  let [r7, ...s2] = t10;
  if (rx(e10[r7])) e10[r7] = {};
  else if (!rv(e10[r7])) throw Error(`o[${r7}] already have non-object value`);
  return rT(e10[r7], s2, i10);
}
class rN {
  constructor() {
    __privateAdd(this, _rN_instances);
    __privateAdd(this, _a, new rk());
  }
  toString() {
    return __privateGet(this, _a).toString();
  }
  print(e10) {
    if (ry(e10)) {
      if (0 == e10.length) {
        __privateGet(this, _a).write("[]");
        return;
      }
      __privateGet(this, _a).write("["), __privateGet(this, _a).break(), __privateGet(this, _a).withIdent(() => {
        for (let t10 of e10) rA(t10) && (__privateGet(this, _a).tab(), this.print(t10), __privateGet(this, _a).write(","), __privateGet(this, _a).break());
      }), __privateGet(this, _a).tab(), __privateGet(this, _a).write("]");
      return;
    }
    if (rv(e10)) {
      let t10 = Object.entries(e10).filter((e11) => {
        let [t11, i11] = e11;
        return rA(i11);
      });
      if (0 == t10.length) {
        __privateGet(this, _a).write("{}");
        return;
      }
      if (1 == t10.length) {
        let [e11, i11] = t10[0], r7 = rI(e11);
        __privateGet(this, _a).write(r7), __privateGet(this, _a).write(": "), this.print(i11);
        return;
      }
      let i10 = () => {
        let e11 = {}, i11 = 0;
        for (let [r7, s2] of t10) {
          let t11 = `${rI(r7)}: `, n2 = s2;
          for (; rv(n2) && 1 == Object.keys(n2).length; ) {
            let [e12, i12] = Object.entries(n2)[0];
            t11 += `${rI(e12)}: `, n2 = i12;
          }
          e11[t11] = n2;
          let a2 = t11.length;
          a2 > i11 && (i11 = a2);
        }
        for (let [t11, r7] of Object.entries(e11)) __privateGet(this, _a).tab(), __privateGet(this, _a).write(t11), __privateGet(this, _a).space(i11 - t11.length), this.print(r7), __privateGet(this, _a).break();
      };
      if (!__privateGet(this, _a).written) {
        i10();
        return;
      }
      __privateGet(this, _a).write("{"), __privateGet(this, _a).break(), __privateGet(this, _a).withIdent(() => {
        i10();
      }), __privateGet(this, _a).tab(), __privateGet(this, _a).write("}");
      return;
    }
    if (rb(e10)) {
      if (/[\r\n]/.test(e10)) {
        __privateMethod(this, _rN_instances, o_fn).call(this, e10, '"""');
        return;
      }
      __privateGet(this, _a).write(`"${e10.split("").map((e11) => '"' == e11 ? '\\"' : e11).join("")}"`);
      return;
    }
    __privateGet(this, _a).write(JSON.stringify(e10));
  }
}
_a = new WeakMap();
_rN_instances = new WeakSet();
o_fn = function(e10, t10) {
  __privateGet(this, _a).write(t10), __privateGet(this, _a).break(), __privateGet(this, _a).withIdent(() => {
    for (let t11 of function* (e11) {
      let t12 = 0;
      for (let i10 = 0; i10 < e11.length; i10++) {
        let r7 = e11.charAt(i10);
        if ("\r\n".includes(r7)) {
          if (0 == i10) {
            yield "", t12 = i10 + 1;
            continue;
          }
          yield e11.slice(t12, i10), t12 = i10 + 1;
        }
      }
    }(e10)) __privateGet(this, _a).tab(), __privateGet(this, _a).write(t11), __privateGet(this, _a).break();
    __privateGet(this, _a).tab(), __privateGet(this, _a).write(t10);
  });
};
function rI(e10) {
  return /^[A-Za-z$_]([$_A-Za-z0-9]+)?$/.test(e10) ? e10 : JSON.stringify(e10);
}
function rA(e10) {
  return !(rx(e10) || e10 && e10.constructor && e10.call && e10.apply);
}
class rX {
  static parse(e10) {
    let t10 = rm.parse(e10);
    return rO(t10, t10.topNode);
  }
  static stringify(e10) {
    return function(e11) {
      let t10 = new rN();
      return t10.print(e11), t10.toString();
    }(e10);
  }
  static asBytes(e10) {
    return r$(e10);
  }
  static stringifyPropertyName(e10) {
    return rI(e10);
  }
}
class rQ {
  static parse(e10) {
    if ("" === e10) return [];
    if ("/" !== e10.charAt(0)) throw Error("Invalid JSON pointer: " + e10);
    return e10.substring(1).split(/\//).map(rQ.unescape);
  }
  static compile(e10) {
    return 0 === e10.length ? "" : "/" + e10.map(rQ.escape).join("/");
  }
  static unescape(e10) {
    return e10.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e10) {
    return e10.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
}
let rj = ty.define({ name: "jsoncue", parser: rf.configure({ props: [tv.add({ Object: tb({ except: /^\s*\}/ }), Array: tb({ except: /^\s*\]/ }) }), tx.add({ "Object Array": tk })] }), languageData: { closeBrackets: { brackets: ["[", "{", '"""', "'''", '"', "'"] }, indentOnInput: /^\s*[\}\]]$/ } }), rz = (e10, t10) => {
  let i10 = tS(e10).topNode;
  t10 > 0 && e10.sliceDoc(t10 - 1, t10).endsWith("\n") && (t10 += 1);
  let r7 = function(i11) {
    let s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (i11.type.id) {
      case 2:
        let n2 = false;
        for (let a3 of rS(i11)) if (!a3.type.is(1)) {
          if (a3.type.is(3)) {
            if (n2 = true, a3.from <= t10 && t10 <= a3.to) {
              let t11;
              let i12 = [];
              for (let e11 of rS(a3)) {
                if (e11.type.is(4)) {
                  i12.push(e11);
                  continue;
                }
                t11 = e11;
              }
              let n3 = [...s2, ...rR(e10, i12)];
              if (t11) return r7(t11, n3);
              return { path: n3, node: a3 };
            }
            continue;
          }
          if (!n2) return r7(a3);
        }
        break;
      case 7:
        for (let n3 of rS(i11)) if (!n3.type.is(1) && n3.type.is(3) && n3.from <= t10 && t10 <= n3.to) {
          let t11;
          let i12 = [];
          for (let e11 of rS(n3)) {
            if (e11.type.is(4)) {
              i12.push(e11);
              continue;
            }
            t11 = e11;
          }
          let a3 = [...s2, ...rR(e10, i12)];
          if (t11) return r7(t11, a3);
          return { path: a3, node: n3 };
        }
        break;
      case 10:
        let a2 = 0;
        for (let e11 of rS(i11)) if (!("[" == e11.name || "]" == e11.name)) {
          if (e11.from <= t10 && t10 <= e11.to) return r7(e11, [...s2, a2]);
          a2++;
        }
    }
    return { node: i11, path: s2 };
  };
  return { ...r7(i10), root: i10, values: rO(e10, i10, { invalidValueAsUndefined: true }) };
};
function rq(e10) {
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
function rB(e10) {
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
let rV = O({ field$: eP(), readOnly: ew().optional() }, (e10, t10) => {
  let {} = t10, i10 = iG(p(e10.field$.input) ? "" : tT.stringify(e10.field$.input));
  return () => C(eX, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: C(iJ, { value: i10, children: C(rW, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}, { displayName: "JSONCueEditorInput" }), rW = O({ field$: eP(), schema: eP() }, (e10) => {
  let t10 = iJ.use();
  return m(e10.schema$, ey((e11) => t10.use(() => {
    var t11;
    return t11 = e11, [new tg(rj), tw({ override: [/* @__PURE__ */ function(e12) {
      let t12 = (t13, i10) => {
        let r7 = rz(t13, i10), s2 = function e13(t14, i11, r8) {
          let s3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : em;
          switch (t14.type) {
            case "array":
              if (0 === r8.length) break;
              let n2 = r8[0];
              if (rx(i11) && (i11 = []), !function(e14) {
                try {
                  return Number(e14) === e14;
                } catch {
                  return false;
                }
              }(n2) || !ry(i11)) return;
              for (let [a3, o2, l2] of t14.entries(Array(n2 + 1), s3)) if (a3 == n2) {
                let t15 = i11[n2];
                return e13(l2, t15, r8.slice(1), { path: [...s3.path, n2], branch: [...s3.branch, t15] });
              }
              break;
            case "record":
              if (0 === r8.length) break;
              if (rx(i11) && (i11 = {}), !rv(i11)) return;
              for (let [n3, a3, o2] of (0 == Object.keys(i11).length && r8.length > 0 && (i11[r8[0]] = void 0), t14.entries(i11, s3))) {
                if (n3 == eg) continue;
                let t15 = i11[n3];
                return e13(o2, t15, r8.slice(1), { path: [...s3.path, String(n3)], branch: [...s3.branch, t15] });
              }
              break;
            case "union":
            case "object":
              if (rx(i11) && (i11 = {}), !rv(i11)) return;
              let a2 = {};
              for (let [n3, o2, l2] of t14.entries(i11, s3)) {
                let t15 = String(n3);
                if (t15 == r8[0]) {
                  let n4 = i11[t15];
                  return e13(l2, n4, r8.slice(1), { path: [...s3.path, t15], branch: [...s3.branch, n4] });
                }
                a2[t15] = l2;
              }
              return q.object(a2);
          }
          return t14;
        }(e12, r7.values, r7.path);
        return s2 ? function(e13, t14) {
          var i11, r8, s3, n2;
          let a2 = [];
          switch (e13.type) {
            case "array":
              if (t14.type.is(10)) {
                let t15 = e13.getSchema("items");
                a2.push(tO(rq(t15), { label: rB(t15) }));
                break;
              }
              a2.push(tO(rq(e13), { label: rB(e13) }));
              break;
            case "record":
              break;
            case "union":
            case "object":
              for (let [t15, n3, o2] of e13.entries({}, em)) {
                let e14 = String(t15), n4 = { label: e14, info: null !== (s3 = null === (r8 = o2.getMeta("description")) || void 0 === r8 ? void 0 : null === (i11 = r8.split("\n")) || void 0 === i11 ? void 0 : i11[0]) && void 0 !== s3 ? s3 : "" };
                a2.push(tO(`${rX.stringifyPropertyName(e14)}: ${rq(o2)}`, n4));
              }
              break;
            case "boolean":
              a2.push({ label: "true", apply: "true" }, { label: "false", apply: "false" });
              break;
            case "enums":
              for (let t15 of null !== (n2 = e13.getSchema("enum")) && void 0 !== n2 ? n2 : []) a2.push({ label: `${t15}`, apply: JSON.stringify(t15) });
          }
          return a2;
        }(s2, r7.node) : [];
      };
      return (e13) => {
        let i10 = e13.matchBefore(/\w+/);
        return e13.explicit || i10 ? { from: (null == i10 ? void 0 : i10.text) ? null == i10 ? void 0 : i10.from : e13.pos, options: t12(e13.state, e13.pos), filter: true } : null;
      };
    }(t11)] }), e1.of([{ key: "Shift-Space", shift: t$ }]), tP((e12) => {
      let i10 = tS(e12.state).topNode, r7 = [...function* e13(t12) {
        yield t12;
        for (let i11 = t12.firstChild; null != i11; i11 = i11.nextSibling) yield* e13(i11);
      }(tS(e12.state).topNode)].filter((e13) => e13.type.isError);
      if (r7.length > 0) return r7.map((e13) => ({ severity: "error", from: e13.from, to: e13.to, message: function(e14) {
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
      let s2 = {}, n2 = rO(e12.state, i10, { onValueNode: (e13, t12) => {
        var i11;
        let r8 = rQ.compile(t12);
        s2[r8] = [...null !== (i11 = s2[r8]) && void 0 !== i11 ? i11 : [], e13];
      }, invalidValueAsUndefined: true }), [a2] = t11.validate(n2);
      if (!a2) return [];
      let o2 = a2.failures(), l2 = [];
      for (let e13 of o2) {
        if ("never" === e13.type) continue;
        let t12 = rQ.compile(e13.path);
        for (let i11 in s2) {
          let r8 = s2[i11];
          if (t12 == i11) for (let t13 of r8) l2.push({ from: t13.from, to: t13.to, severity: "error", message: e13.message });
          if ("/" != i11 && t12.startsWith(`${i11}/`) && p(e13.value) && !t12.slice(`${i11}/`.length).includes("/")) for (let t13 of r8) l2.push({ from: t13.from, to: t13.to, severity: "error", message: `missing required field "${V(e13.path)}"` });
        }
      }
      return l2;
    }), e1.of([t_])];
  })), $()), iK(() => eK.updateListener.of((t11) => {
    if (t11.focusChanged) {
      tC(t11.view), e10.field$.next((e11) => {
        e11.error = 0 == tR(t11.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t11.docChanged) {
      if (tC(t11.view), tR(t11.state) > 0) e10.field$.next((e11) => {
        e11.error = ["配置有误"];
      });
      else try {
        let i10 = t11.state.doc.sliceString(0), r7 = tT.parse(i10);
        e10.field$.update(r7), e10.field$.next((e11) => {
          e11.error = null;
        });
      } catch (t12) {
        e10.field$.next((e11) => {
          e11.error = ["格式错误"];
        });
      }
    }
  })), () => C(i0, {});
}, { displayName: "Editor" }), rD = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), rL = (e10) => {
  let { field: t10, value: i10 } = e10;
  return w(eX, { component: "span", sx: { display: "block" }, children: [w(eX, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t10, ":"] }), C("span", { children: i10 })] });
}, rF = (e10) => {
  let { method: t10, url: i10, params: r7 } = e10, s2 = tz(r7);
  return w(eX, { component: "span", sx: { fontWeight: "bold" }, children: [t10.toUpperCase(), w(eX, { component: "span", sx: { fontWeight: "medium" }, children: [i10, s2 ? `?${s2}` : ""] }), "HTTP/*"] });
}, rY = (e10, t10) => {
  let i10 = (t11, r7) => r7 instanceof File || r7 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t11}"${r7.name ? `; filename="${r7.name}"` : ""}
Content-Type: ${r7.type}

[File Content]
` : d(r7) ? r7.map((e11) => i10(t11, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t11}"

${c(r7) ? JSON.stringify(r7) : String(r7)}
`;
  return Object.entries(t10).map((e11) => {
    let [t11, r7] = e11;
    return i10(t11, r7);
  }).join("\n") + `${e10}--`;
}, rZ = N({ $default: eP().optional() }, (e10, t10) => {
  let {} = e10, { slots: i10 } = t10;
  return () => {
    var e11;
    return C(eX, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: C(eX, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: C("code", { children: null === (e11 = i10.default) || void 0 === e11 ? void 0 : e11.call(i10) }) }) });
  };
}, { displayName: "CodeView" }), rE = N({ request: eP() }, (e10) => () => {
  let t10 = e10.request;
  return w(rZ, { children: [C(rF, { ...t10 }), C(I, { children: Object.entries({ ...rD(), ...t10.headers }).toSorted().map((e11) => {
    let [t11, i10] = e11;
    return C(rL, { field: t11, value: i10 }, t11);
  }) }), t10.body && w(I, { children: [C("br", {}), function(e11) {
    if (rH(e11.headers).includes("multipart/form-data")) {
      let t11 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t11}` }, rY(t11, e11.body);
    }
    return rH(e11.headers).includes("application/x-www-form-urlencoded") ? tz(e11.body) : rG(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t10)] })] });
}, { displayName: "HttpRequest" }), rM = (e10, t10) => {
  let i10 = new Uint8Array(e10), r7 = "";
  for (let e11 = i10.byteLength, t11 = 0; t11 < e11; t11++) r7 += String.fromCharCode(i10[t11]);
  return `data:${t10};base64,${btoa(r7)}`;
}, rU = N({ response: eP() }, (e10, t10) => {
  let {} = t10;
  return () => {
    let t11 = e10.response;
    return rH(t11.headers).includes("image/") ? C("div", { children: C("img", { src: rM(t11.body, rH(t11.headers)), alt: "" }) }) : w(rZ, { children: [w("span", { children: ["HTTP/* ", t11.status] }), C("br", {}), t11.headers && C(I, { children: Object.entries(t11.headers).map((e11) => {
      let [t12, i10] = e11;
      return C(rL, { field: t12, value: i10 }, t12);
    }) }), C("br", {}), t11.body ? rG(t11.headers) ? JSON.stringify(t11.body, null, 2) : `${t11.body}` : null] });
  };
}, { displayName: "HTTPResponse" });
function rH() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t10, i10] of Object.entries(e10)) if ("content-type" == t10.toLowerCase()) return i10;
  return "";
}
let rG = (e10) => rH(e10).includes("application/json"), rJ = O({ operationID: e_() }, (e10) => m(tL.use().response$(e10.operationID), _((e11) => C(rK, { children: C(rU, { response: e11 }) }))), { displayName: "ResponsePreview" }), rK = eA("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), r0 = O({ operation: eP(), $default: eP() }, (e10, t10) => {
  var i10, r7, n2, a2;
  let { slots: o2 } = t10, l2 = tL.use(), h2 = {};
  for (let t11 of null !== (i10 = e10.operation.parameters) && void 0 !== i10 ? i10 : []) {
    let e11 = eR.decode(t11.schema, (e12) => {
      var t12;
      return [null !== (t12 = l2.schema(e12)) && void 0 !== t12 ? t12 : {}, eT(e12)];
    }).use(eZ(`${t11.name}, in=${JSON.stringify(t11.in)}`));
    t11.required || (e11 = e11.optional()), ["object", "array"].includes(null !== (r7 = t11.schema.type) && void 0 !== r7 ? r7 : "") ? h2[t11.name] = e11.use(eE(rV)) : h2[t11.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t11 = Object.entries(null !== (n2 = e10.operation.requestBody.content) && void 0 !== n2 ? n2 : {})[0];
    if (t11) {
      let [e11, i11] = t11, r8 = eR.decode(null !== (a2 = i11.schema) && void 0 !== a2 ? a2 : {}, (e12) => {
        var t12;
        return [null !== (t12 = l2.schema(e12)) && void 0 !== t12 ? t12 : {}, eT(e12)];
      }).use(eZ(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? h2.body = r8.use(eE(rV)) : e11.includes("octet-stream") ? h2.body = r8.use(eE(r4)) : h2.body = r8;
    }
  }
  let d2 = ev(), c2 = eb(), u2 = eM.of(eI(h2), (() => {
    try {
      var e11;
      let t11 = c2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t11) ? t11[0] : t11) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  m(u2, s((t11) => {
    l2.request(e10.operation.operationId, t11);
  }), s((e11) => {
    d2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), $());
  let p2 = m(u2.inputs$, _((t11) => {
    let i11 = l2.asRequestConfigCreator(e10.operation.operationId);
    return i11 ? C(rE, { request: i11(t11) }) : null;
  }));
  return () => {
    var t11;
    return w(eX, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), u2.submit();
    }, children: [C(eX, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...u2.fields(u2.typedef)].map((e11) => C(r1, { field$: e11 })) }), C(eX, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: w(eX, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [p2, C(eX, { sx: { px: 8 }, children: C(eU, { type: "submit", children: "发起请求" }) }), C(rJ, { operationID: e10.operation.operationId }), C(eX, { sx: { flex: 1, overflow: "auto" }, children: null === (t11 = o2.default) || void 0 === t11 ? void 0 : t11.call(o2) })] }) })] }, e10.operation.operationId);
  };
}, { displayName: "RequestBuilder" }), r1 = O({ field$: eP() }, (e10, t10) => {
  let { field$: i10 } = e10, { render: r7 } = t10;
  return ex(() => {
    i10.destroy();
  }), m(ep([i10, i10.input$]), r7((e11) => {
    var t11, r8, s2, n2, a2;
    let [o2, l2] = e11, h2 = null !== (s2 = null === (t11 = i10.meta) || void 0 === t11 ? void 0 : t11.input) && void 0 !== s2 ? s2 : r2, d2 = null !== (n2 = null === (r8 = i10.meta) || void 0 === r8 ? void 0 : r8.readOnlyWhenInitialExist) && void 0 !== n2 && n2 && !!o2.initial;
    return C(is, { valued: !p(null != l2 ? l2 : o2.initial), invalid: !!o2.error, focus: !!o2.focus, $label: w("span", { children: [null !== (a2 = i10.meta.label) && void 0 !== a2 ? a2 : i10.name, i10.optional ? "（非必填）" : ""] }), $supporting: w(t0, { children: [C(t1, { schema: i10.typedef }), C(t9, { schema: i10.typedef })] }), $trailing: h2.$trailing, children: C(h2, { field$: i10, readOnly: d2 }) });
  }));
}, { displayName: "ParameterInput" }), r2 = N({ readOnly: ew().optional(), field$: eP() }, (e10) => () => {
  let { readOnly: t10, field$: i10, ...r7 } = e10;
  return C("input", { ...r7, "data-input": true, type: "text", readonly: t10, name: i10.name, value: i10.input, onChange: (e11) => {
    let t11 = e11.target.value;
    switch (i10.typedef.type) {
      case "number":
        try {
          i10.update(i10.typedef.create(parseFloat(t11)));
        } catch (e12) {
        }
        break;
      case "integer":
        try {
          i10.update(i10.typedef.create(parseInt(t11)));
        } catch (e12) {
        }
        break;
      case "boolean":
        try {
          i10.update(i10.typedef.create("false" !== t11 || !!t11));
        } catch (e12) {
        }
        break;
      default:
        i10.update(i10.typedef.create(t11));
    }
  }, onFocus: () => i10.focus(), onBlur: () => i10.blur() });
}, { displayName: "TextInput" }), r4 = O({ field$: eP(), readOnly: ew().optional(), accept: e_().optional() }, (e10) => {
  let t10 = ek(null);
  return m(t10, s((t11) => {
    t11 && e10.field$.update(t11);
  }), eS()), () => {
    var i10;
    let { readOnly: r7, accept: s2 } = e10;
    return w(eX, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [C("input", { type: "file", name: e10.field$.name, readonly: r7, accept: s2, "data-file-input": true, onChange: (e11) => {
      var i11;
      let r8 = null === (i11 = e11.target.files) || void 0 === i11 ? void 0 : i11[0];
      r8 && (t10.value = r8);
    } }), C(eG, { path: eH }), C("span", { children: null === (i10 = t10.value) || void 0 === i10 ? void 0 : i10.name })] });
  };
}, { displayName: "FileSelectInput" }), r3 = O({ operationId: e_() }, (e10, t10) => {
  let {} = t10, i10 = tL.use(), r7 = m(e10.operationId$, g((e11) => i10.operation$(e11))), s2 = m(r7, eO((e11) => !!e11)), n2 = m(s2, _((e11) => {
    var t11;
    return w(r6, { sx: { containerStyle: null !== (t11 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t11 ? t11 : "sys.secondary-container" }, children: [C("div", { "data-operation-method": true, children: e11.method }), w("div", { "data-operation-desc": true, children: [C("div", { "data-operation-path": true, children: e11.path }), w("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), a2 = m(s2, _((e11) => {
    var t11;
    return C(eX, { sx: { px: 24 }, children: C(eY, { text: null !== (t11 = e11.description) && void 0 !== t11 ? t11 : "" }) });
  })), o2 = m(s2, _((e11) => {
    var t11;
    return C(r0, { operation: e11, children: C(I, { children: Object.entries(null !== (t11 = e11.responses) && void 0 !== t11 ? t11 : {}).map((e12) => {
      let [t12, i11] = e12;
      return C(ie, { code: t12, response: i11 }, t12);
    }) }) }, e11.operationId);
  }));
  return m(r7, _((e11) => e11 ? w(r5, { children: [n2, a2, C(eX, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: C(eX, { sx: { flex: 1, overflow: "auto" }, children: o2 }) })] }, e11.operationId) : null));
}, { displayName: "OperationView" }), r5 = eA("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), r6 = eA("div", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  rd as L,
  tL as O,
  r3 as a,
  tY as b,
  tB as c,
  tz as p,
  tq as t
};
