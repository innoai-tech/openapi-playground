var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _e, _t, _r, r_get, _n, n_fn;
import { k as e, j as t, F as r, l as n, v as i } from "./lib-nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { O as a, B as o, S as l, v as s, p as d, w as c, n as p, x as u, e as h, I as m, r as f, s as y, m as g, b as v, E as b, c as x, h as $, d as _, y as w, i as S, z as O, R as I, j, t as k, A as C, C as N, a as q, o as D, f as T, D as F } from "./lib-nodepkg-vuekit.CaGE9cHH.chunk.js";
import { i as B, B as L, d as P, t as W, a as R, h as A, C as J, c as H, f as M, D as z, J as V, F as E, j as U, o as K } from "./lib-nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { s as G, B as Q } from "./lib-nodepkg-vueuikit.DFV9rQh5.chunk.js";
import { M as X } from "./lib-nodepkg-vuemarkdown.BLON6V_u.chunk.js";
import { l as Y, i as Z, F as ee } from "./lib-nodepkg-vueformdata.Dng-mErD.chunk.js";
import { F as et, m as er, I as en } from "./lib-nodepkg-vuematerial.B-Jdu3S4.chunk.js";
import { j as ei, k as ea, u as eo, l as el, m as es, n as ed, o as ec, p as ep, q as eu, r as eh, v as em, w as ef } from "./lib-nodepkg-codemirror.DSkWOytj.chunk.js";
import { J as ey, j as eg, a as ev, b as eb } from "./lib-nodepkg-jsoncue.Bviw8PPL.chunk.js";
let ex = (e10, t2) => new e$(e10, t2);
class e$ extends a {
  constructor(e10, t2) {
    super((e11) => this._success$.subscribe(e11)), this.createConfig = e10, this.fetcher = t2, this.requesting$ = new o(false), this.error$ = new l(), this._success$ = new l(), this._input$ = new l(), this.unsubscribe = this._input$.pipe(s((e11) => (this.requesting$.next(true), p(this.fetcher.request(this.createConfig(e11))).pipe(d((e12) => this._success$.next(e12)), u((e12) => (this.error$.next(e12), h(e12)))))), d(() => {
      this.requesting$.next(false);
    }), c()).subscribe(), this.next = (e11) => {
      let t3 = B(e11) ? e11(this._prevInputs) : e11;
      this._prevInputs = t3, this._input$.next(t3);
    }, this.toHref = (e11) => this.fetcher.toHref(this.createConfig(e11));
  }
  get operationID() {
    return this.createConfig.operationID;
  }
}
let e_ = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e10["Content-Type"] || e10["content-type"] || "";
}, ew = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  e10["Content-Type"] && (e10["Content-Type"] = void 0), e10["content-type"] && (e10["content-type"] = void 0);
}, eS = (e10) => e_(e10).includes("multipart/form-data"), eO = (e10) => e_(e10).includes("application/x-www-form-urlencoded"), eI = (e10) => {
  let t2 = new URLSearchParams(), r2 = (e11, n2) => {
    if (P(n2)) {
      L(n2, (t3) => {
        r2(e11, t3);
      });
      return;
    }
    if (W(n2)) {
      r2(e11, JSON.stringify(n2));
      return;
    }
    R(n2) || 0 === `${n2}`.length || t2.append(e11, `${n2}`);
  };
  return L(e10, (e11, t3) => {
    r2(t3, e11);
  }), t2.toString();
}, ej = (e10, t2) => {
  if (eS(t2)) {
    ew(t2);
    let r2 = new FormData(), n2 = (e11, t3) => {
      t3 instanceof File || t3 instanceof Blob ? r2.append(e11, t3) : P(t3) ? L(t3, (t4) => n2(e11, t4)) : W(t3) ? r2.append(e11, JSON.stringify(t3)) : r2.append(e11, t3);
    };
    return L(e10, (e11, t3) => n2(t3, e11)), r2;
  }
  return eO(t2) ? eI(e10) : P(e10) || W(e10) ? JSON.stringify(e10) : e10;
}, ek = (e10) => {
  let { paramsSerializer: t2, transformRequestBody: r2 } = e10;
  return { toHref: (e11) => {
    let r3 = t2(e11.params);
    return r3.length && !r3.startsWith("?") && (r3 = "?" + r3), `${e11.url}${r3}`;
  }, request: (e11) => {
    let n2 = { method: e11.method, headers: e11.headers || {}, body: r2(e11.body, e11.headers || {}) };
    return fetch(`${e11.url}?${t2(e11.params)}`, n2).then(async (t3) => {
      var r3, n3;
      let i2;
      i2 = (null === (r3 = t3.headers.get("Content-Type")) || void 0 === r3 ? void 0 : r3.includes("application/json")) ? await t3.json() : (null === (n3 = t3.headers.get("Content-Type")) || void 0 === n3 ? void 0 : n3.includes("application/octet-stream")) ? await t3.blob() : await t3.text();
      let a2 = { config: e11, status: t3.status, headers: {} };
      for (let [e12, r4] of t3.headers)
        a2.headers[e12] = r4;
      return a2.body = i2, a2;
    }).then((e12) => {
      if (e12.status >= 400)
        throw e12.error = e12.body, e12;
      return e12;
    });
  } };
}, eC = (e10) => !!e10 && e10.constructor === Object, eN = (e10) => {
  try {
    return Number(e10) === e10;
  } catch {
    return false;
  }
}, eq = (e10) => void 0 === e10;
function eD(e10, t2) {
  if (0 == t2.length)
    return e10;
  if (Array.isArray(e10)) {
    let [r2, ...n2] = t2;
    return eN(r2) ? eD(e10[r2], n2) : void 0;
  }
  if (eC(e10)) {
    let [r2, ...n2] = t2;
    return eD(e10[r2], n2);
  }
}
let eT = (e10, t2) => {
  let r2 = {};
  for (let [n2, i2] of Object.entries(e10))
    t2.includes(n2) && (r2[n2] = i2);
  return r2;
};
const _eF = class _eF extends m {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _n);
    __privateAdd(this, _e, ek({ paramsSerializer: eI, transformRequestBody: ej }));
    __privateAdd(this, _t, new o(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _eF({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return f(__privateGet(this, _t), y((t2) => {
      let r2 = t2.get(e10);
      return r2 ? v(r2, r2.error$) : b;
    }));
  }
  requesting$(e10) {
    return f(__privateGet(this, _t), y((t2) => {
      var r2, n2;
      return null !== (n2 = null === (r2 = t2.get(e10)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== n2 ? n2 : h(false);
    }));
  }
  asRequestConfigCreator(e10) {
    if (!__privateGet(this, _t).value.get(e10)) {
      var t2, r2;
      let n2 = __privateMethod(this, _n, n_fn).call(this, e10);
      if (!n2)
        return null;
      let i2 = Object.keys(null !== (r2 = null === (t2 = n2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
      return (e11) => {
        var t3, r3;
        return { method: n2.method, url: __privateGet(this, _r, r_get) + eL(n2.path, e11), params: eT(e11, null === (t3 = n2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...eT(e11, null === (r3 = n2.parameters) || void 0 === r3 ? void 0 : r3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e11.body, inputs: e11 };
      };
    }
    return null;
  }
  request(e10, t2) {
    let r2 = __privateGet(this, _t).value.get(e10);
    if (!r2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3)
        return;
      r2 = ex(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return f(this, y((t2) => {
      for (let r2 of eB(t2, { operationId: e10 }))
        if (r2)
          return h(r2);
      return h(null);
    }));
  }
  operations$(e10) {
    return f(this, y((t2) => h([...eB(t2, e10)])));
  }
  schema$(e10) {
    var t2, r2;
    let n2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    return f(this, y((e11) => {
      if (n2) {
        var t3;
        return h(null !== (t3 = eD(e11, n2)) && void 0 !== t3 ? t3 : null);
      }
      return h(null);
    }), g((e11) => e11 ? { ...e11, $id: n2[n2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, r2, n2;
    let i2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2)
      return null !== (n2 = eD(this.value, i2)) && void 0 !== n2 ? n2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_r = new WeakSet();
r_get = function() {
  var e10, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e10 = t2[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== r2 ? r2 : "";
};
_n = new WeakSet();
n_fn = function(e10) {
  for (let t2 of eB(this.value, { operationId: e10 }))
    if (t2)
      return t2;
  return null;
};
let eF = _eF;
function* eB(e10, t2) {
  for (let [a2, o2] of Object.entries(e10.paths))
    for (let [e11, l2] of Object.entries(o2)) {
      var r2, n2, i2;
      if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (n2 = l2.tags) && void 0 !== n2 ? n2 : []).includes(t2.tag))) {
        if (t2.operationId) {
          if (t2.operationId.startsWith("*")) {
            if (!l2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase()))
              continue;
          } else if (l2.operationId.toLowerCase() != t2.operationId.toLowerCase())
            continue;
        }
        yield { ...l2, method: e11, path: a2, group: null !== (i2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== i2 ? i2 : "" };
      }
    }
}
let eL = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, eP = x(() => eF.empty(), { name: "OpenAPI" }), eW = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, eR = $((r2, n2) => {
  let {} = r2, {} = n2, i2 = eP.use(), a2 = new m({ operationId: void 0 }), o2 = new l();
  f(o2, w(200), d((e10) => {
    a2.next((t2) => {
      t2.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), _());
  let s2 = f(a2, y((e10) => i2.operations$(e10)), S((r3) => {
    let n3 = Object.groupBy(r3, (e10) => e10.group);
    return e(eJ, { children: [t(eH, { children: t("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e10) => {
      o2.next(e10.target.value);
    } }) }), t(eM, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(n3).toSorted().map((r4) => {
      let [n4, i3] = r4;
      return e("div", { "data-nav-group": true, children: [t("div", { "data-nav-group-heading": true, children: n4 }), t("div", { "data-nav-group-contents": true, children: null == i3 ? void 0 : i3.toSorted(eW("operationId")).map((r5) => {
        var n5;
        return e(eV, { component: O, to: `/operations/${r5.operationId}`, children: [t(Q, { "data-operation-method": true, sx: { color: null !== (n5 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[r5.method]) && void 0 !== n5 ? n5 : "sys.secondary" }, children: r5.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-id": true, children: r5.operationId }), r5.summary ? t("div", { "data-operation-summary": true, children: r5.summary != r5.operationId ? r5.summary : t("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => e(eA, { children: [s2, t(ez, { children: t(I, {}) })] });
}), eA = G("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eJ = G("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eH = G("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eM = G("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ez = G("main")({ flex: 1, overflow: "hidden" }), eV = G("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eE = Object.assign(eR, { displayName: "OpenAPIView" }), eU = G("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eK = G("div", { deprecated: A().optional(), optional: A().optional(), nullable: A().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eG = G("div", { spacing: J().optional().default(0), $default: H().optional() }, (e10, r2) => {
  let { slots: n2 } = r2, i2 = eY.use();
  return (r3) => {
    var a2;
    return t(r3, { style: { paddingLeft: `${i2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (a2 = n2.default) || void 0 === a2 ? void 0 : a2.call(n2) });
  };
})({ position: "relative", display: "block" }), eQ = G("div", { schema: H() }, (e10, r2) => {
  let {} = r2;
  return (r3) => {
    var n2;
    let i2 = null !== (n2 = e10.schema.getMeta("description")) && void 0 !== n2 ? n2 : "";
    return 0 == i2.length ? null : t(r3, { children: t(X, { text: i2 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), eX = (n2) => {
  let { name: i2, value: a2, extra: o2 } = n2;
  return "" == a2 ? null : t(e6, { children: e(e2, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e2, { sx: { color: "sys.primary" }, children: `@${i2}(` }), `${a2}`, Object.entries(null != o2 ? o2 : {}).map((n3) => {
    let [i3, a3] = n3;
    return e(r, { children: [e(e2, { sx: { opacity: 0.5 }, children: [",", " "] }), t(e2, { sx: { opacity: 0.5 }, children: i3 }), e(e2, { sx: { opacity: 0.5 }, children: [":", " "] }), t(e2, { sx: { opacity: 0.7 }, children: a3 })] });
  }), t(e2, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eY = x(() => ({ indent: 0 }), { name: "IntentContext" }), eZ = j({ $default: H().optional() }, (e10, r2) => {
  let {} = e10, { slots: n2 } = r2, i2 = eY.use();
  return () => {
    var e11;
    return t(eY, { value: { indent: i2.indent + 1 }, children: null === (e11 = n2.default) || void 0 === e11 ? void 0 : e11.call(n2) });
  };
}), e0 = $({ schema: H() }, (e10) => () => t(r, { children: t(e7, { schema: e10.schema }) })), e1 = $({ schema: H() }, (n2) => {
  let i2 = n2.schema;
  return i2.getSchema("$ref") ? t(e0, { schema: i2.unwrap }) : () => {
    var n3, a2, o2, l2, s2, d2, c2, p2;
    switch (i2.type) {
      case "union":
        return t(r, { children: null === (n3 = i2.getSchema("oneOf")) || void 0 === n3 ? void 0 : n3.map((n4, i3) => e(r, { children: [i3 > 0 && e(e2, { children: [" ", " | ", " "] }), t(e7, { schema: n4 })] })) });
      case "intersection":
        return t(e2, { children: null === (a2 = i2.getSchema("allOf")) || void 0 === a2 ? void 0 : a2.filter((e10) => !Object.keys(e10).length).map((n4, i3) => e(r, { children: [i3 > 0 && e(e2, { children: [" ", "&", " "] }), t(e7, { schema: n4 })] })) });
      case "array":
        return e(e2, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e2, { children: "Array<" }), t(e7, { schema: null !== (o2 = i2.getSchema("items")) && void 0 !== o2 ? o2 : z() }), t(e2, { children: ">" })] });
      case "object":
        return e(r, { children: [t(e2, { children: "{" }), t(e5, { children: t(r, { children: Object.entries(null !== (l2 = i2.getSchema("properties")) && void 0 !== l2 ? l2 : {}).map((n4) => {
          var a3;
          let [o3, l3] = n4;
          return l3 ? t(r, { children: e(e6, { spacing: 2, children: [t(e3, { schema: l3 }), e(e2, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e8, { nullable: l3.getSchema("nullable"), deprecated: l3.getSchema("deprecated"), optional: !(null !== (a3 = i2.getSchema("required")) && void 0 !== a3 ? a3 : []).includes(o3), children: o3 }), t(e2, { sx: { mr: "1em" }, children: ":" }), t(e7, { schema: l3 })] })] }) }) : null;
        }) }) }), t(e2, { children: "}" })] });
      case "record":
        return e(r, { children: [t(e2, { children: "{" }), i2.getSchema("additionalProperties") && t(r, { children: t(e5, { children: e(e6, { children: [e(e2, { sx: { mr: 1 }, children: ["[K:", " "] }), t(e7, { schema: null !== (s2 = i2.getSchema("propertyNames")) && void 0 !== s2 ? s2 : M() }), e(e2, { sx: { mr: 1 }, children: ["]:", " "] }), t(e7, { schema: null !== (d2 = i2.getSchema("additionalProperties")) && void 0 !== d2 ? d2 : z() })] }) }) }), t(e2, { children: "}" })] });
      case "enums": {
        let n4 = null !== (c2 = i2.getSchema("enum")) && void 0 !== c2 ? c2 : [];
        if (1 == n4.length)
          return t(e2, { children: JSON.stringify(n4[0]) });
        let a3 = "any";
        return n4.length > 0 && (a3 = typeof n4[0]), e(r, { children: [t(e2, { sx: { fontWeight: "bold" }, children: a3 }), t(e5, { children: n4.map((e10, r2) => {
          var n5;
          return t(eX, { name: "enum", value: `${e10}`, extra: (null === (n5 = i2.getMeta("enumLabels")) || void 0 === n5 ? void 0 : n5[r2]) ? { label: JSON.stringify(i2.getMeta("enumLabels")[r2]) } : {} }, e10);
        }) })] });
      }
    }
    let [u2, h2, m2] = [i2.type, i2.getSchema("format"), i2.getSchema("default")];
    return e(r, { children: [t(e2, { sx: { fontWeight: "bold" }, children: u2 || "any" }), e(e5, { children: [h2 && t(eX, { name: "format", value: h2 }), !R(m2) && t(eX, { name: "default", value: m2 }), !e4(i2) && t(eX, { name: "validate", value: (p2 = i2).getSchema("x-tag-validate") ? p2.getSchema("x-tag-validate") : e4(p2) ? p2.getSchema("pattern") ? `@r/${String(p2.getSchema("pattern"))}/` : `@${p2.getSchema("exclusiveMinimum")} ? "(" : "["}${p2.getSchema("minProperties") ? p2.getSchema("minProperties") : p2.getSchema("minItems") ? p2.getSchema("minItems") : p2.getSchema("minimum") ? p2.getSchema("minimum") : p2.getSchema("minLength") ? p2.getSchema("minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${p2.getSchema("maxProperties") ? p2.getSchema("maxProperties") : p2.getSchema("maxItems") ? p2.getSchema("maxItems") : p2.getSchema("maximum") ? p2.getSchema("maximum") : p2.getSchema("maxLength") ? p2.getSchema("maxLength") : "string" === p2.type && "uint64" === p2.getSchema("format") ? "19" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${p2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function e4(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e10.getSchema(t2));
}
let e2 = Object.assign(eU, { displayName: "Token" }), e8 = Object.assign(eK, { displayName: "PropName" }), e6 = Object.assign(eG, { displayName: "Line" }), e3 = Object.assign(eQ, { displayName: "Description" }), e5 = Object.assign(eZ, { displayName: "Indent" }), e7 = Object.assign(e1, { displayName: "SchemaView" }), e9 = $({ code: H(), response: H() }, (n2) => {
  let i2 = eP.use();
  return () => {
    var a2, o2;
    return e(te, { children: [t(tt, { "data-failed": function(e10) {
      try {
        return Number(e10) >= 400;
      } catch (e11) {
        return false;
      }
    }(n2.code), children: n2.code }), e(Q, { sx: { pl: "4em" }, children: [t(r, { children: null === (a2 = n2.response["x-status-return-errors"]) || void 0 === a2 ? void 0 : a2.map((e10) => function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e11.startsWith("StatusError{") ? e11.slice(12, e11.length - 1).split(",").reduce((e12, t2) => {
        let [r2, n3] = t2.split("=", 2);
        return eq(r2) || eq(n3) ? e12 : { ...e12, [r2]: n3 };
      }, {}) : null;
    }(e10)).map((r2) => r2 ? t(Q, { sx: { mb: 16 }, children: e(e6, { spacing: 0, children: [e(e2, { children: ["{", " "] }), t(e5, { children: Object.entries(r2).map((r3) => {
      let [n3, i3] = r3;
      return "code" === n3 ? null : e(e6, { children: [t(e8, { children: n3 }), t(e2, { children: ": " }), t(e2, { children: i3 })] });
    }) }), e(e2, { children: [" ", "}"] })] }) }) : null) }), t(r, { children: Object.entries(null !== (o2 = n2.response.content) && void 0 !== o2 ? o2 : {}).map((r2) => {
      let [n3, { schema: a3 }] = r2;
      return e(tr, { children: [t(e6, { spacing: 0, children: t(e7, { schema: V.decode(a3, (e10) => {
        var t2;
        return [null !== (t2 = i2.schema(e10)) && void 0 !== t2 ? t2 : {}, E(e10)];
      }) }) }), t("div", { "data-content-type": true, children: n3 })] });
    }) })] })] });
  };
}), te = G("section")({}), tt = G("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), tr = G("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), tn = Object.assign(e9, { displayName: "ResponseView" }), ti = G("div", { valued: A().optional(), focus: A().optional(), invalid: A().optional(), disabled: A().optional(), $label: H().optional(), $hint: H().optional(), $supporting: H().optional(), $leading: H().optional(), $trailing: H().optional(), $default: H() }, (r2, i2) => {
  let { slots: a2 } = i2;
  return (i3) => {
    var o2, l2, s2, d2;
    let c2 = r2.valued, p2 = r2.invalid, u2 = r2.disabled, h2 = (null !== (d2 = null === (o2 = a2.default) || void 0 === o2 ? void 0 : o2.call(a2)) && void 0 !== d2 ? d2 : []).map((e10) => {
      if ("input" === e10.type) {
        var t2, r3, i4, a3, o3, l3;
        return c2 = !!(null !== (o3 = null !== (a3 = null === (t2 = e10.props) || void 0 === t2 ? void 0 : t2.value) && void 0 !== a3 ? a3 : null === (r3 = e10.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== o3 ? o3 : c2), u2 = null !== (l3 = null === (i4 = e10.props) || void 0 === i4 ? void 0 : i4.disabled) && void 0 !== l3 ? l3 : u2, n(e10, { disabled: u2 });
      }
      return n(e10);
    });
    return e(i3, { "data-valued": c2, "data-invalid": p2, "data-disabled": u2, "data-focus-within": r2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [e("div", { "data-input-container": true, children: [e("div", { "data-input-decorator-container": true, children: [t("div", { "data-input-decorator-leading": true }), t("div", { "data-input-decorator-label": true, children: t("div", { "data-input-label": true, children: null === (l2 = a2.label) || void 0 === l2 ? void 0 : l2.call(a2) }) }), t("div", { "data-input-decorator-trailing": true })] }), e("div", { "data-input-row": true, children: [a2.leading && t(ta, { role: "leading", children: a2.leading() }), h2, a2.trailing && t(ta, { role: "trailing", children: a2.trailing() })] })] }), a2.supporting && t("div", { "data-input-supporting": true, children: null === (s2 = a2.supporting) || void 0 === s2 ? void 0 : s2.call(a2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), ta = G("div", { role: U(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), to = Object.assign(ti, { displayName: "TextField" }), tl = $({ field$: H(), readOnly: A().optional() }, (e10, r2) => {
  let {} = r2, n2 = ei(eq(e10.field$.input) ? "" : ey.stringify(e10.field$.input));
  return () => t(Q, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: t(ea, { value: n2, children: t(ts, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), ts = $({ field$: H(), schema: H() }, (e10) => {
  let r2 = ea.use();
  return f(e10.schema$, k((e11) => r2.use(() => [eg(), ep({ override: [ev(e11)] }), eu.of([{ key: "Shift-Space", shift: eh }]), em(eb(e11)), eu.of([ef])])), _()), eo(() => es.updateListener.of((t2) => {
    if (t2.focusChanged) {
      ed(t2.view), e10.field$.next((e11) => {
        e11.error = 0 == ec(t2.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t2.docChanged) {
      if (ed(t2.view), ec(t2.state) > 0)
        e10.field$.next((e11) => {
          e11.error = ["配置有误"];
        });
      else
        try {
          let r3 = t2.state.doc.sliceString(0), n2 = ey.parse(r3);
          e10.field$.update(n2), e10.field$.next((e11) => {
            e11.error = null;
          });
        } catch (t3) {
          e10.field$.next((e11) => {
            e11.error = ["格式错误"];
          });
        }
    }
  })), () => t(el, {});
}), td = Object.assign(tl, { displayName: "JSONCueEditorInput" }), tc = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), tp = (r2) => {
  let { field: n2, value: i2 } = r2;
  return e(Q, { component: "span", sx: { display: "block" }, children: [e(Q, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [n2, ":"] }), t("span", { children: i2 })] });
}, tu = (t2) => {
  let { method: r2, url: n2, params: i2 } = t2, a2 = eI(i2);
  return e(Q, { component: "span", sx: { fontWeight: "bold" }, children: [r2.toUpperCase(), " ", e(Q, { component: "span", sx: { fontWeight: "medium" }, children: [n2, a2 ? `?${a2}` : ""] }), "  HTTP/*"] });
}, th = (e10, t2) => {
  let r2 = (t3, n2) => n2 instanceof File || n2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${n2.name ? `; filename="${n2.name}"` : ""}
Content-Type: ${n2.type}

[File Content]
` : P(n2) ? n2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${W(n2) ? JSON.stringify(n2) : String(n2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, n2] = e11;
    return r2(t3, n2);
  }).join("\n") + `${e10}--`;
}, tm = j({ $default: H().optional() }, (e10, r2) => {
  let {} = e10, { slots: n2 } = r2;
  return () => {
    var e11;
    return t(Q, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: t(Q, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: t("code", { children: null === (e11 = n2.default) || void 0 === e11 ? void 0 : e11.call(n2) }) }) });
  };
}), tf = j({ request: H() }, (n2) => () => {
  let i2 = n2.request;
  return e(tm, { children: [t(tu, { ...i2 }), t(r, { children: Object.entries({ ...tc(), ...i2.headers }).toSorted().map((e10) => {
    let [r2, n3] = e10;
    return t(tp, { field: r2, value: n3 }, r2);
  }) }), i2.body && e(r, { children: [t("br", {}), function(e10) {
    if (tb(e10.headers).includes("multipart/form-data")) {
      let t2 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e10.headers = { ...e10.headers, "Content-Type": `multipart/form-data; boundary=${t2}` }, th(t2, e10.body);
    }
    return tb(e10.headers).includes("application/x-www-form-urlencoded") ? eI(e10.body) : tx(e10.headers) ? JSON.stringify(e10.body, null, 2) : e10.body;
  }(i2)] })] });
}), ty = (e10) => Buffer.from(e10).toString("utf8"), tg = (e10, t2) => {
  let r2 = new Uint8Array(e10), n2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++)
    n2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(n2)}`;
}, tv = j({ response: H() }, (n2, i2) => {
  let {} = i2;
  return () => {
    let i3 = n2.response;
    return tb(i3.headers).includes("image/") ? t("div", { children: t("img", { src: tg(i3.body, tb(i3.headers)), alt: "" }) }) : e(tm, { children: [e("span", { children: ["HTTP/* ", i3.status] }), t("br", {}), i3.headers && t(r, { children: Object.entries(i3.headers).map((e10) => {
      let [r2, n3] = e10;
      return t(tp, { field: r2, value: n3 }, r2);
    }) }), t("br", {}), i3.body ? tx(i3.headers) ? JSON.stringify(i3.body, null, 2) : `${ty(i3.body)}` : null] });
  };
});
function tb() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10))
    if ("content-type" == t2.toLowerCase())
      return r2;
  return "";
}
let tx = (e10) => tb(e10).includes("application/json"), t$ = Object.assign(tf, { displayName: "HttpRequest" }), t_ = Object.assign(tv, { displayName: "HTTPResponse" }), tw = $({ operationID: M() }, (e10) => f(eP.use().response$(e10.operationID), S((e11) => t(tS, { children: t(t_, { response: e11 }) })))), tS = G("section")({ maxHeight: "40vh", overflow: "auto" }), tO = Object.assign(tw, { displayName: "ResponsePreview" }), tI = $({ operation: H(), $default: H() }, (r2, n2) => {
  var i2, a2, o2, l2;
  let { slots: s2 } = n2, c2 = eP.use(), p2 = {};
  for (let e10 of null !== (i2 = r2.operation.parameters) && void 0 !== i2 ? i2 : []) {
    let t2 = V.decode(e10.schema, (e11) => {
      var t3;
      return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, E(e11)];
    }).use(Y(`${e10.name}, in=${JSON.stringify(e10.in)}`));
    e10.required || (t2 = t2.optional()), ["object", "array"].includes(null !== (a2 = e10.schema.type) && void 0 !== a2 ? a2 : "") ? p2[e10.name] = t2.use(Z(td)) : p2[e10.name] = t2;
  }
  if (r2.operation.requestBody) {
    let e10 = Object.entries(null !== (o2 = r2.operation.requestBody.content) && void 0 !== o2 ? o2 : {})[0];
    if (e10) {
      let [t2, r3] = e10, n3 = V.decode(null !== (l2 = r3.schema) && void 0 !== l2 ? l2 : {}, (e11) => {
        var t3;
        return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, E(e11)];
      }).use(Y(`body, content-type = ${JSON.stringify(t2)}`));
      t2.includes("json") ? p2.body = n3.use(Z(td)) : t2.includes("octet-stream") ? p2.body = n3.use(Z(tD)) : p2.body = n3;
    }
  }
  let u2 = C(), h2 = N(), m2 = ee.of(K(p2), (() => {
    try {
      var e10;
      let t2 = h2.query.params;
      return JSON.parse(atob(null !== (e10 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e10 ? e10 : ""));
    } catch (e11) {
    }
    return {};
  })());
  f(m2, d((e10) => {
    c2.request(r2.operation.operationId, e10);
  }), d((e10) => {
    u2.replace({ query: { params: btoa(JSON.stringify(e10)) } });
  }), _());
  let y2 = f(m2.inputs$, S((e10) => {
    let n3 = c2.asRequestConfigCreator(r2.operation.operationId);
    return n3 ? t(t$, { request: n3(e10) }) : null;
  }));
  return () => {
    var n3;
    return e(Q, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e10) => {
      e10.preventDefault(), m2.submit();
    }, children: [t(Q, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...m2.fields(m2.typedef)].map((e10) => t(tj, { field$: e10 })) }), t(Q, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: e(Q, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [y2, t(Q, { sx: { px: 8 }, children: t(et, { type: "submit", children: "发起请求" }) }), t(tO, { operationID: r2.operation.operationId }), t(Q, { sx: { flex: 1, overflow: "auto" }, children: null === (n3 = s2.default) || void 0 === n3 ? void 0 : n3.call(s2) })] }) })] }, r2.operation.operationId);
  };
}), tj = $({ field$: H() }, (r2, n2) => {
  let { field$: a2 } = r2, { render: o2 } = n2;
  return i(() => {
    a2.destroy();
  }), f(q([a2, a2.input$]), o2((r3) => {
    var n3, i2, o3, l2, s2;
    let [d2, c2] = r3, p2 = null !== (o3 = null === (n3 = a2.meta) || void 0 === n3 ? void 0 : n3.input) && void 0 !== o3 ? o3 : tq, u2 = null !== (l2 = null === (i2 = a2.meta) || void 0 === i2 ? void 0 : i2.readOnlyWhenInitialExist) && void 0 !== l2 && l2 && !!d2.initial;
    return t(to, { valued: !eq(null != c2 ? c2 : d2.initial), invalid: !!d2.error, focus: !!d2.focus, $label: e("span", { children: [null !== (s2 = a2.meta.label) && void 0 !== s2 ? s2 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: e(e6, { children: [t(e3, { schema: a2.typedef }), t(e7, { schema: a2.typedef })] }), $trailing: p2.$trailing, children: t(p2, { field$: a2, readOnly: u2 }) });
  }));
}), tk = j({ readOnly: A().optional(), field$: H() }, (e10) => () => {
  let { readOnly: r2, field$: n2, ...i2 } = e10;
  return t("input", { ...i2, "data-input": true, type: "text", readonly: r2, name: n2.name, value: n2.input, onChange: (e11) => {
    n2.update(e11.target.value);
  }, onFocus: () => n2.focus(), onBlur: () => n2.blur() });
}), tC = $({ field$: H(), readOnly: A().optional(), accept: M().optional() }, (r2) => {
  let n2 = D(null);
  return f(n2, d((e10) => {
    e10 && r2.field$.update(e10);
  }), T()), () => {
    var i2;
    let { readOnly: a2, accept: o2 } = r2;
    return e(Q, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [t("input", { type: "file", name: r2.field$.name, readonly: a2, accept: o2, "data-file-input": true, onChange: (e10) => {
      var t2;
      let r3 = null === (t2 = e10.target.files) || void 0 === t2 ? void 0 : t2[0];
      r3 && (n2.value = r3);
    } }), t(en, { path: er }), t("span", { children: null === (i2 = n2.value) || void 0 === i2 ? void 0 : i2.name })] });
  };
}), tN = Object.assign(tI, { displayName: "RequestBuilder" }), tq = Object.assign(tk, { displayName: "TextInput" }), tD = Object.assign(tC, { displayName: "FileSelectInput" }), tT = $({ operationId: M() }, (n2, i2) => {
  let {} = i2, a2 = eP.use(), o2 = f(n2.operationId$, y((e10) => a2.operation$(e10))), l2 = f(o2, F((e10) => !!e10)), s2 = f(l2, S((r2) => {
    var n3;
    return e(tB, { sx: { containerStyle: null !== (n3 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[r2.method]) && void 0 !== n3 ? n3 : "sys.secondary-container" }, children: [t("div", { "data-operation-method": true, children: r2.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-path": true, children: r2.path }), e("div", { "data-operation-summary": true, children: [r2.summary, " ", r2.operationId != r2.summary ? r2.operationId : ""] })] })] });
  })), d2 = f(l2, S((e10) => t("span", { children: e10.description }))), c2 = f(l2, S((e10) => {
    var n3;
    return t(tN, { operation: e10, children: t(r, { children: Object.entries(null !== (n3 = e10.responses) && void 0 !== n3 ? n3 : {}).map((e11) => {
      let [r2, n4] = e11;
      return t(tn, { code: r2, response: n4 }, r2);
    }) }) }, e10.operationId);
  }));
  return f(o2, S((r2) => r2 ? e(tF, { children: [s2, e(Q, { sx: { flex: 1, overflow: "hidden", py: 24, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [d2, t(Q, { sx: { flex: 1, overflow: "auto" }, children: c2 })] })] }, r2.operationId) : null));
}), tF = G("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tB = G("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), tL = Object.assign(tT, { displayName: "OperationView" });
export {
  eP as O,
  tL as a,
  eE as b,
  ek as c,
  eI as p,
  ej as t
};
