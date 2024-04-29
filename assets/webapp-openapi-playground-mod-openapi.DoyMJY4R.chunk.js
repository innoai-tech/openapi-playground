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
import { O as e, K as t, S as r, L as n, D as i, M as a, C as o, N as l, e as s, I as d, r as c, s as p, m as u, b as h, P as m, c as f, k as y, d as g, Q as v, l as b, U as x, R as $, n as _, F as w, q as S, t as I, V as O, W as j, X as k, a as C, o as N, f as q, Y as D } from "./lib-nodepkg-vuekit.bjr0khy1.chunk.js";
import { i as F, B as T, d as L, t as P, a as B, C as W, g as R, h as J, D as H, c as A, f as M, F as z, J as V, G as U, j as E, o as K } from "./lib-nodepkg-typedef.C-lDlS3A.chunk.js";
import { a as G, j as Q } from "./lib-nodepkg-vue-jsx-runtime.DdlvtjR4.chunk.js";
import { s as X, B as Y } from "./lib-nodepkg-vueuikit.DCvHF0uy.chunk.js";
import { M as Z } from "./lib-nodepkg-vuemarkdown.CA4ML7vr.chunk.js";
import { l as ee, i as et, F as er } from "./lib-nodepkg-vueformdata.DKf0IOGh.chunk.js";
import { F as en, m as ei, I as ea } from "./lib-nodepkg-vuematerial.oIq545c9.chunk.js";
import { j as eo, k as el, u as es, l as ed, m as ec, n as ep, o as eu, p as eh, q as em, r as ef, v as ey, w as eg } from "./lib-nodepkg-codemirror.80zMB178.chunk.js";
import { J as ev, j as eb, a as ex, b as e$ } from "./lib-nodepkg-jsoncue.CdD9HWdW.chunk.js";
let e_ = (e10, t2) => new ew(e10, t2);
class ew extends e {
  constructor(e10, d2) {
    super((e11) => this._success$.subscribe(e11)), this.createConfig = e10, this.fetcher = d2, this.requesting$ = new t(false), this.error$ = new r(), this._success$ = new r(), this._input$ = new r(), this.unsubscribe = this._input$.pipe(n((e11) => (this.requesting$.next(true), o(this.fetcher.request(this.createConfig(e11))).pipe(i((e12) => this._success$.next(e12)), l((e12) => (this.error$.next(e12), s(e12)))))), i(() => {
      this.requesting$.next(false);
    }), a()).subscribe(), this.next = (e11) => {
      let t2 = F(e11) ? e11(this._prevInputs) : e11;
      this._prevInputs = t2, this._input$.next(t2);
    }, this.toHref = (e11) => this.fetcher.toHref(this.createConfig(e11));
  }
  get operationID() {
    return this.createConfig.operationID;
  }
}
let eS = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e10["Content-Type"] || e10["content-type"] || "";
}, eI = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  e10["Content-Type"] && (e10["Content-Type"] = void 0), e10["content-type"] && (e10["content-type"] = void 0);
}, eO = (e10) => eS(e10).includes("multipart/form-data"), ej = (e10) => eS(e10).includes("application/x-www-form-urlencoded"), ek = (e10) => {
  let t2 = new URLSearchParams(), r2 = (e11, n2) => {
    if (L(n2)) {
      T(n2, (t3) => {
        r2(e11, t3);
      });
      return;
    }
    if (P(n2)) {
      r2(e11, JSON.stringify(n2));
      return;
    }
    B(n2) || 0 === `${n2}`.length || t2.append(e11, `${n2}`);
  };
  return T(e10, (e11, t3) => {
    r2(t3, e11);
  }), t2.toString();
}, eC = (e10, t2) => {
  if (eO(t2)) {
    eI(t2);
    let r2 = new FormData(), n2 = (e11, t3) => {
      t3 instanceof File || t3 instanceof Blob ? r2.append(e11, t3) : L(t3) ? T(t3, (t4) => n2(e11, t4)) : P(t3) ? r2.append(e11, JSON.stringify(t3)) : r2.append(e11, t3);
    };
    return T(e10, (e11, t3) => n2(t3, e11)), r2;
  }
  return ej(t2) ? ek(e10) : L(e10) || P(e10) ? JSON.stringify(e10) : e10;
}, eN = (e10) => {
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
};
const _eq = class _eq extends d {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _n);
    __privateAdd(this, _e, eN({ paramsSerializer: ek, transformRequestBody: eC }));
    __privateAdd(this, _t, new t(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _eq({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return c(__privateGet(this, _t), p((t2) => {
      let r2 = t2.get(e10);
      return r2 ? h(r2, r2.error$) : m;
    }));
  }
  requesting$(e10) {
    return c(__privateGet(this, _t), p((t2) => {
      var r2, n2;
      return null !== (n2 = null === (r2 = t2.get(e10)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== n2 ? n2 : s(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var t2, r2;
    let n2 = __privateMethod(this, _n, n_fn).call(this, e10);
    if (!n2)
      return null;
    let i2 = Object.keys(null !== (r2 = null === (t2 = n2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
    return (e11) => {
      var t3, r3;
      return { method: n2.method, url: __privateGet(this, _r, r_get) + eF(n2.path, e11), params: W(e11, null === (t3 = n2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...W(e11, null === (r3 = n2.parameters) || void 0 === r3 ? void 0 : r3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t2) {
    let r2 = __privateGet(this, _t).value.get(e10);
    if (!r2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3)
        return;
      r2 = e_(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return c(this, p((t2) => {
      for (let r2 of eD(t2, { operationId: e10 }))
        if (r2)
          return s(r2);
      return s(null);
    }));
  }
  operations$(e10) {
    return c(this, p((t2) => s([...eD(t2, e10)])));
  }
  schema$(e10) {
    var t2, r2;
    let n2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    return c(this, p((e11) => {
      if (n2) {
        var t3;
        return s(null !== (t3 = R(e11, n2)) && void 0 !== t3 ? t3 : null);
      }
      return s(null);
    }), u((e11) => e11 ? { ...e11, $id: n2[n2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, r2, n2;
    let i2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2)
      return null !== (n2 = R(this.value, i2)) && void 0 !== n2 ? n2 : void 0;
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
  for (let t2 of eD(this.value, { operationId: e10 }))
    if (t2)
      return t2;
  return null;
};
let eq = _eq;
function* eD(e10, t2) {
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
let eF = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, eT = f(() => eq.empty(), { name: "OpenAPI" }), eL = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, eP = y((e10, t2) => {
  let {} = e10, {} = t2, n2 = eT.use(), a2 = new d({ operationId: void 0 }), o2 = new r();
  c(o2, v(200), i((e11) => {
    a2.next((t3) => {
      t3.operationId = `*${null != e11 ? e11 : ""}`;
    });
  }), g());
  let l2 = c(a2, p((e11) => n2.operations$(e11)), b((e11) => {
    let t3 = Object.groupBy(e11, (e12) => e12.group);
    return G(eW, { children: [Q(eR, { children: Q("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e12) => {
      o2.next(e12.target.value);
    } }) }), Q(eJ, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(t3).toSorted().map((e12) => {
      let [t4, r2] = e12;
      return G("div", { "data-nav-group": true, children: [Q("div", { "data-nav-group-heading": true, children: t4 }), Q("div", { "data-nav-group-contents": true, children: null == r2 ? void 0 : r2.toSorted(eL("operationId")).map((e13) => {
        var t5;
        return G(eA, { component: x, to: `/operations/${e13.operationId}`, children: [Q(Y, { "data-operation-method": true, sx: { color: null !== (t5 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e13.method]) && void 0 !== t5 ? t5 : "sys.secondary" }, children: e13.method }), G("div", { "data-operation-desc": true, children: [Q("div", { "data-operation-id": true, children: e13.operationId }), e13.summary ? Q("div", { "data-operation-summary": true, children: e13.summary != e13.operationId ? e13.summary : Q("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => G(eB, { children: [l2, Q(eH, { children: Q($, {}) })] });
}), eB = X("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eW = X("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eR = X("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eJ = X("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eH = X("main")({ flex: 1, overflow: "hidden" }), eA = X("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eM = Object.assign(eP, { displayName: "OpenAPIView" }), ez = X("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eV = X("div", { deprecated: J().optional(), optional: J().optional(), nullable: J().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eU = X("div", { spacing: H().optional().default(0), $default: A().optional() }, (e10, t2) => {
  let { slots: r2 } = t2, n2 = eG.use();
  return (t3) => {
    var i2;
    return Q(t3, { style: { paddingLeft: `${n2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2) });
  };
})({ position: "relative", display: "block" }), eE = X("div", { schema: A() }, (e10, t2) => {
  let {} = t2;
  return (t3) => {
    var r2;
    let n2 = null !== (r2 = e10.schema.getMeta("description")) && void 0 !== r2 ? r2 : "";
    return 0 == n2.length ? null : Q(t3, { children: Q(Z, { text: n2 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), eK = (e10) => {
  let { name: t2, value: r2, extra: n2 } = e10;
  return "" == r2 ? null : Q(e8, { children: G(e4, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [Q(e4, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, Object.entries(null != n2 ? n2 : {}).map((e11) => {
    let [t3, r3] = e11;
    return G(w, { children: [G(e4, { sx: { opacity: 0.5 }, children: [",", " "] }), Q(e4, { sx: { opacity: 0.5 }, children: t3 }), G(e4, { sx: { opacity: 0.5 }, children: [":", " "] }), Q(e4, { sx: { opacity: 0.7 }, children: r3 })] });
  }), Q(e4, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eG = f(() => ({ indent: 0 }), { name: "IntentContext" }), eQ = _({ $default: A().optional() }, (e10, t2) => {
  let {} = e10, { slots: r2 } = t2, n2 = eG.use();
  return () => {
    var e11;
    return Q(eG, { value: { indent: n2.indent + 1 }, children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) });
  };
});
class eX {
  constructor(e10, t2) {
    this.id = e10, this.parent = t2;
  }
  child(e10) {
    return new eX(e10, this);
  }
  safe(e10) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e10)
        return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let eY = f(() => new eX("")), eZ = y({ schema: A() }, (e10) => {
  let t2 = eY.use();
  return () => {
    let r2 = e10.schema.getSchema("$ref"), n2 = e10.schema;
    for (; n2.getSchema("$ref"); )
      n2 = n2.unwrap;
    let i2 = "intersection" == n2.type || "object" == n2.type || "union" == n2.type || "record" == n2.type || "array" == n2.type || "union" == n2.type;
    return G(eY, { value: t2.child(r2), children: [i2 && Q(x, { to: `#${r2}`, children: G(e4, { id: r2, children: [r2, " "] }) }), t2.safe(r2) && Q(e5, { schema: n2 })] });
  };
}), e0 = y({ schema: A() }, (e10) => {
  let t2 = e10.schema;
  return t2.getSchema("$ref") ? Q(eZ, { schema: t2 }) : () => {
    var e11, r2, n2, i2, a2, o2, l2, s2;
    switch (t2.type) {
      case "union":
        return Q(w, { children: null === (e11 = t2.getSchema("oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t3) => G(w, { children: [t3 > 0 && G(e4, { children: [" ", " | ", " "] }), Q(e5, { schema: e12 })] })) });
      case "intersection":
        return Q(e4, { children: null === (r2 = t2.getSchema("allOf")) || void 0 === r2 ? void 0 : r2.filter((e12) => !Object.keys(e12).length).map((e12, t3) => G(w, { children: [t3 > 0 && G(e4, { children: [" ", "&", " "] }), Q(e5, { schema: e12 })] })) });
      case "array":
        return G(e4, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [Q(e4, { children: "Array<" }), Q(e5, { schema: null !== (n2 = t2.getSchema("items")) && void 0 !== n2 ? n2 : z() }), Q(e4, { children: ">" })] });
      case "object":
        return G(w, { children: [Q(e4, { children: "{" }), Q(e3, { children: Q(w, { children: Object.entries(null !== (i2 = t2.getSchema("properties")) && void 0 !== i2 ? i2 : {}).map((e12) => {
          var r3;
          let [n3, i3] = e12;
          return i3 ? Q(w, { children: G(e8, { spacing: 2, children: [Q(e6, { schema: i3 }), G(e4, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [Q(e2, { nullable: i3.getSchema("nullable"), deprecated: i3.getSchema("deprecated"), optional: !(null !== (r3 = t2.getSchema("required")) && void 0 !== r3 ? r3 : []).includes(n3), children: n3 }), Q(e4, { sx: { mr: "1em" }, children: ":" }), Q(e5, { schema: i3 })] })] }) }) : null;
        }) }) }), Q(e4, { children: "}" })] });
      case "record":
        return G(w, { children: [Q(e4, { children: "{" }), t2.getSchema("additionalProperties") && Q(w, { children: Q(e3, { children: G(e8, { children: [G(e4, { sx: { mr: 1 }, children: ["[K:", " "] }), Q(e5, { schema: null !== (a2 = t2.getSchema("propertyNames")) && void 0 !== a2 ? a2 : M() }), G(e4, { sx: { mr: 1 }, children: ["]:", " "] }), Q(e5, { schema: null !== (o2 = t2.getSchema("additionalProperties")) && void 0 !== o2 ? o2 : z() })] }) }) }), Q(e4, { children: "}" })] });
      case "enums": {
        let e12 = null !== (l2 = t2.getSchema("enum")) && void 0 !== l2 ? l2 : [];
        if (1 == e12.length)
          return Q(e4, { children: JSON.stringify(e12[0]) });
        let r3 = "any";
        return e12.length > 0 && (r3 = typeof e12[0]), G(w, { children: [Q(e4, { sx: { fontWeight: "bold" }, children: r3 }), Q(e3, { children: e12.map((e13, r4) => {
          var n3;
          return Q(eK, { name: "enum", value: `${e13}`, extra: (null === (n3 = t2.getMeta("enumLabels")) || void 0 === n3 ? void 0 : n3[r4]) ? { label: JSON.stringify(t2.getMeta("enumLabels")[r4]) } : {} }, e13);
        }) })] });
      }
    }
    let [d2, c2, p2] = [t2.type, t2.getSchema("format"), t2.getSchema("default")];
    return G(w, { children: [Q(e4, { sx: { fontWeight: "bold" }, children: d2 || "any" }), G(e3, { children: [c2 && Q(eK, { name: "format", value: c2 }), !B(p2) && Q(eK, { name: "default", value: p2 }), !e1(t2) && Q(eK, { name: "validate", value: (s2 = t2).getSchema("x-tag-validate") ? s2.getSchema("x-tag-validate") : e1(s2) ? s2.getSchema("pattern") ? `@r/${String(s2.getSchema("pattern"))}/` : `@${s2.getSchema("exclusiveMinimum")} ? "(" : "["}${s2.getSchema("minProperties") ? s2.getSchema("minProperties") : s2.getSchema("minItems") ? s2.getSchema("minItems") : s2.getSchema("minimum") ? s2.getSchema("minimum") : s2.getSchema("minLength") ? s2.getSchema("minLength") : "string" === s2.type ? "0" : ("number" === s2.type || "integer" === s2.type) && s2.getSchema("format") ? `${Math.pow(2, Number(s2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${s2.getSchema("maxProperties") ? s2.getSchema("maxProperties") : s2.getSchema("maxItems") ? s2.getSchema("maxItems") : s2.getSchema("maximum") ? s2.getSchema("maximum") : s2.getSchema("maxLength") ? s2.getSchema("maxLength") : "string" === s2.type && "uint64" === s2.getSchema("format") ? "19" : ("number" === s2.type || "integer" === s2.type) && s2.getSchema("format") ? `${Math.pow(2, Number(s2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${s2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function e1(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e10.getSchema(t2));
}
let e4 = Object.assign(ez, { displayName: "Token" }), e2 = Object.assign(eV, { displayName: "PropName" }), e8 = Object.assign(eU, { displayName: "Line" }), e6 = Object.assign(eE, { displayName: "Description" }), e3 = Object.assign(eQ, { displayName: "Indent" }), e5 = Object.assign(e0, { displayName: "SchemaView" }), e7 = y({ code: A(), response: A() }, (e10) => {
  let t2 = eT.use();
  return () => {
    var r2, n2;
    return G(e9, { children: [Q(te, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), G(Y, { sx: { pl: "4em" }, children: [Q(w, { children: null === (r2 = e10.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t3) => {
        let [r3, n3] = t3.split("=", 2);
        return B(r3) || B(n3) ? e13 : { ...e13, [r3]: n3 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? Q(Y, { sx: { mb: 16 }, children: G(e8, { spacing: 0, children: [G(e4, { children: ["{", " "] }), Q(e3, { children: Object.entries(e11).map((e12) => {
      let [t3, r3] = e12;
      return "code" === t3 ? null : G(e8, { children: [Q(e2, { children: t3 }), Q(e4, { children: ": " }), Q(e4, { children: r3 })] });
    }) }), G(e4, { children: [" ", "}"] })] }) }) : null) }), Q(w, { children: Object.entries(null !== (n2 = e10.response.content) && void 0 !== n2 ? n2 : {}).map((e11) => {
      let [r3, { schema: n3 }] = e11;
      return G(tt, { children: [Q(e8, { spacing: 0, children: Q(e5, { schema: V.decode(n3, (e12) => {
        var r4;
        return [null !== (r4 = t2.schema(e12)) && void 0 !== r4 ? r4 : {}, U(e12)];
      }) }) }), Q("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}), e9 = X("section")({}), te = X("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), tt = X("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), tr = Object.assign(e7, { displayName: "ResponseView" }), tn = X("div", { valued: J().optional(), focus: J().optional(), invalid: J().optional(), disabled: J().optional(), $label: A().optional(), $hint: A().optional(), $supporting: A().optional(), $leading: A().optional(), $trailing: A().optional(), $default: A() }, (e10, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var n2, i2, a2, o2;
    let l2 = e10.valued, s2 = e10.invalid, d2 = e10.disabled, c2 = (null !== (o2 = null === (n2 = r2.default) || void 0 === n2 ? void 0 : n2.call(r2)) && void 0 !== o2 ? o2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t4, r3, n3, i3, a3, o3;
        return l2 = !!(null !== (a3 = null !== (i3 = null === (t4 = e11.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== i3 ? i3 : null === (r3 = e11.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== a3 ? a3 : l2), d2 = null !== (o3 = null === (n3 = e11.props) || void 0 === n3 ? void 0 : n3.disabled) && void 0 !== o3 ? o3 : d2, S(e11, { disabled: d2 });
      }
      return S(e11);
    });
    return G(t3, { "data-valued": l2, "data-invalid": s2, "data-disabled": d2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [G("div", { "data-input-container": true, children: [G("div", { "data-input-decorator-container": true, children: [Q("div", { "data-input-decorator-leading": true }), Q("div", { "data-input-decorator-label": true, children: Q("div", { "data-input-label": true, children: null === (i2 = r2.label) || void 0 === i2 ? void 0 : i2.call(r2) }) }), Q("div", { "data-input-decorator-trailing": true })] }), G("div", { "data-input-row": true, children: [r2.leading && Q(ti, { role: "leading", children: r2.leading() }), c2, r2.trailing && Q(ti, { role: "trailing", children: r2.trailing() })] })] }), r2.supporting && Q("div", { "data-input-supporting": true, children: null === (a2 = r2.supporting) || void 0 === a2 ? void 0 : a2.call(r2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), ti = X("div", { role: E(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), ta = Object.assign(tn, { displayName: "TextField" }), to = y({ field$: A(), readOnly: J().optional() }, (e10, t2) => {
  let {} = t2, r2 = eo(B(e10.field$.input) ? "" : ev.stringify(e10.field$.input));
  return () => Q(Y, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: Q(el, { value: r2, children: Q(tl, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), tl = y({ field$: A(), schema: A() }, (e10) => {
  let t2 = el.use();
  return c(e10.schema$, I((e11) => t2.use(() => [eb(), eh({ override: [ex(e11)] }), em.of([{ key: "Shift-Space", shift: ef }]), ey(e$(e11)), em.of([eg])])), g()), es(() => ec.updateListener.of((t3) => {
    if (t3.focusChanged) {
      ep(t3.view), e10.field$.next((e11) => {
        e11.error = 0 == eu(t3.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t3.docChanged) {
      if (ep(t3.view), eu(t3.state) > 0)
        e10.field$.next((e11) => {
          e11.error = ["配置有误"];
        });
      else
        try {
          let r2 = t3.state.doc.sliceString(0), n2 = ev.parse(r2);
          e10.field$.update(n2), e10.field$.next((e11) => {
            e11.error = null;
          });
        } catch (t4) {
          e10.field$.next((e11) => {
            e11.error = ["格式错误"];
          });
        }
    }
  })), () => Q(ed, {});
}), ts = Object.assign(to, { displayName: "JSONCueEditorInput" }), td = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), tc = (e10) => {
  let { field: t2, value: r2 } = e10;
  return G(Y, { component: "span", sx: { display: "block" }, children: [G(Y, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), Q("span", { children: r2 })] });
}, tp = (e10) => {
  let { method: t2, url: r2, params: n2 } = e10, i2 = ek(n2);
  return G(Y, { component: "span", sx: { fontWeight: "bold" }, children: [t2.toUpperCase(), " ", G(Y, { component: "span", sx: { fontWeight: "medium" }, children: [r2, i2 ? `?${i2}` : ""] }), "  HTTP/*"] });
}, tu = (e10, t2) => {
  let r2 = (t3, n2) => n2 instanceof File || n2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${n2.name ? `; filename="${n2.name}"` : ""}
Content-Type: ${n2.type}

[File Content]
` : L(n2) ? n2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${P(n2) ? JSON.stringify(n2) : String(n2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, n2] = e11;
    return r2(t3, n2);
  }).join("\n") + `${e10}--`;
}, th = _({ $default: A().optional() }, (e10, t2) => {
  let {} = e10, { slots: r2 } = t2;
  return () => {
    var e11;
    return Q(Y, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: Q(Y, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: Q("code", { children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) }) }) });
  };
}), tm = _({ request: A() }, (e10) => () => {
  let t2 = e10.request;
  return G(th, { children: [Q(tp, { ...t2 }), Q(w, { children: Object.entries({ ...td(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, r2] = e11;
    return Q(tc, { field: t3, value: r2 }, t3);
  }) }), t2.body && G(w, { children: [Q("br", {}), function(e11) {
    if (tg(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, tu(t3, e11.body);
    }
    return tg(e11.headers).includes("application/x-www-form-urlencoded") ? ek(e11.body) : tv(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}), tf = (e10, t2) => {
  let r2 = new Uint8Array(e10), n2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++)
    n2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(n2)}`;
}, ty = _({ response: A() }, (e10, t2) => {
  let {} = t2;
  return () => {
    let t3 = e10.response;
    return tg(t3.headers).includes("image/") ? Q("div", { children: Q("img", { src: tf(t3.body, tg(t3.headers)), alt: "" }) }) : G(th, { children: [G("span", { children: ["HTTP/* ", t3.status] }), Q("br", {}), t3.headers && Q(w, { children: Object.entries(t3.headers).map((e11) => {
      let [t4, r2] = e11;
      return Q(tc, { field: t4, value: r2 }, t4);
    }) }), Q("br", {}), t3.body ? tv(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
  };
});
function tg() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10))
    if ("content-type" == t2.toLowerCase())
      return r2;
  return "";
}
let tv = (e10) => tg(e10).includes("application/json"), tb = Object.assign(tm, { displayName: "HttpRequest" }), tx = Object.assign(ty, { displayName: "HTTPResponse" }), t$ = y({ operationID: M() }, (e10) => c(eT.use().response$(e10.operationID), b((e11) => Q(t_, { children: Q(tx, { response: e11 }) })))), t_ = X("section")({ maxHeight: "40vh", overflow: "auto" }), tw = Object.assign(t$, { displayName: "ResponsePreview" }), tS = y({ operation: A(), $default: A() }, (e10, t2) => {
  var r2, n2, a2, o2;
  let { slots: l2 } = t2, s2 = eT.use(), d2 = {};
  for (let t3 of null !== (r2 = e10.operation.parameters) && void 0 !== r2 ? r2 : []) {
    let e11 = V.decode(t3.schema, (e12) => {
      var t4;
      return [null !== (t4 = s2.schema(e12)) && void 0 !== t4 ? t4 : {}, U(e12)];
    }).use(ee(`${t3.name}, in=${JSON.stringify(t3.in)}`));
    t3.required || (e11 = e11.optional()), ["object", "array"].includes(null !== (n2 = t3.schema.type) && void 0 !== n2 ? n2 : "") ? d2[t3.name] = e11.use(et(ts)) : d2[t3.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t3 = Object.entries(null !== (a2 = e10.operation.requestBody.content) && void 0 !== a2 ? a2 : {})[0];
    if (t3) {
      let [e11, r3] = t3, n3 = V.decode(null !== (o2 = r3.schema) && void 0 !== o2 ? o2 : {}, (e12) => {
        var t4;
        return [null !== (t4 = s2.schema(e12)) && void 0 !== t4 ? t4 : {}, U(e12)];
      }).use(ee(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? d2.body = n3.use(et(ts)) : e11.includes("octet-stream") ? d2.body = n3.use(et(tN)) : d2.body = n3;
    }
  }
  let p2 = O(), u2 = j(), h2 = er.of(K(d2), (() => {
    try {
      var e11;
      let t3 = u2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t3) ? t3[0] : t3) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  c(h2, i((t3) => {
    s2.request(e10.operation.operationId, t3);
  }), i((e11) => {
    p2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), g());
  let m2 = c(h2.inputs$, b((t3) => {
    let r3 = s2.asRequestConfigCreator(e10.operation.operationId);
    return r3 ? Q(tb, { request: r3(t3) }) : null;
  }));
  return () => {
    var t3;
    return G(Y, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), h2.submit();
    }, children: [Q(Y, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...h2.fields(h2.typedef)].map((e11) => Q(tI, { field$: e11 })) }), Q(Y, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: G(Y, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [m2, Q(Y, { sx: { px: 8 }, children: Q(en, { type: "submit", children: "发起请求" }) }), Q(tw, { operationID: e10.operation.operationId }), Q(Y, { sx: { flex: 1, overflow: "auto" }, children: null === (t3 = l2.default) || void 0 === t3 ? void 0 : t3.call(l2) })] }) })] }, e10.operation.operationId);
  };
}), tI = y({ field$: A() }, (e10, t2) => {
  let { field$: r2 } = e10, { render: n2 } = t2;
  return k(() => {
    r2.destroy();
  }), c(C([r2, r2.input$]), n2((e11) => {
    var t3, n3, i2, a2, o2;
    let [l2, s2] = e11, d2 = null !== (i2 = null === (t3 = r2.meta) || void 0 === t3 ? void 0 : t3.input) && void 0 !== i2 ? i2 : tC, c2 = null !== (a2 = null === (n3 = r2.meta) || void 0 === n3 ? void 0 : n3.readOnlyWhenInitialExist) && void 0 !== a2 && a2 && !!l2.initial;
    return Q(ta, { valued: !B(null != s2 ? s2 : l2.initial), invalid: !!l2.error, focus: !!l2.focus, $label: G("span", { children: [null !== (o2 = r2.meta.label) && void 0 !== o2 ? o2 : r2.name, r2.optional ? "（非必填）" : ""] }), $supporting: G(e8, { children: [Q(e6, { schema: r2.typedef }), Q(e5, { schema: r2.typedef })] }), $trailing: d2.$trailing, children: Q(d2, { field$: r2, readOnly: c2 }) });
  }));
}), tO = _({ readOnly: J().optional(), field$: A() }, (e10) => () => {
  let { readOnly: t2, field$: r2, ...n2 } = e10;
  return Q("input", { ...n2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e11) => {
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
}), tj = y({ field$: A(), readOnly: J().optional(), accept: M().optional() }, (e10) => {
  let t2 = N(null);
  return c(t2, i((t3) => {
    t3 && e10.field$.update(t3);
  }), q()), () => {
    var r2;
    let { readOnly: n2, accept: i2 } = e10;
    return G(Y, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [Q("input", { type: "file", name: e10.field$.name, readonly: n2, accept: i2, "data-file-input": true, onChange: (e11) => {
      var r3;
      let n3 = null === (r3 = e11.target.files) || void 0 === r3 ? void 0 : r3[0];
      n3 && (t2.value = n3);
    } }), Q(ea, { path: ei }), Q("span", { children: null === (r2 = t2.value) || void 0 === r2 ? void 0 : r2.name })] });
  };
}), tk = Object.assign(tS, { displayName: "RequestBuilder" }), tC = Object.assign(tO, { displayName: "TextInput" }), tN = Object.assign(tj, { displayName: "FileSelectInput" }), tq = y({ operationId: M() }, (e10, t2) => {
  let {} = t2, r2 = eT.use(), n2 = c(e10.operationId$, p((e11) => r2.operation$(e11))), i2 = c(n2, D((e11) => !!e11)), a2 = c(i2, b((e11) => {
    var t3;
    return G(tF, { sx: { containerStyle: null !== (t3 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t3 ? t3 : "sys.secondary-container" }, children: [Q("div", { "data-operation-method": true, children: e11.method }), G("div", { "data-operation-desc": true, children: [Q("div", { "data-operation-path": true, children: e11.path }), G("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), o2 = c(i2, b((e11) => {
    var t3;
    return Q(Y, { sx: { px: 24 }, children: Q(Z, { text: null !== (t3 = e11.description) && void 0 !== t3 ? t3 : "" }) });
  })), l2 = c(i2, b((e11) => {
    var t3;
    return Q(tk, { operation: e11, children: Q(w, { children: Object.entries(null !== (t3 = e11.responses) && void 0 !== t3 ? t3 : {}).map((e12) => {
      let [t4, r3] = e12;
      return Q(tr, { code: t4, response: r3 }, t4);
    }) }) }, e11.operationId);
  }));
  return c(n2, b((e11) => e11 ? G(tD, { children: [a2, o2, Q(Y, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: Q(Y, { sx: { flex: 1, overflow: "auto" }, children: l2 }) })] }, e11.operationId) : null));
}), tD = X("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tF = X("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), tT = Object.assign(tq, { displayName: "OperationView" });
export {
  eT as O,
  tT as a,
  eM as b,
  eN as c,
  ek as p,
  eC as t
};
