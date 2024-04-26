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
import { O as a, B as o, S as l, v as s, p as d, w as c, n as p, x as u, e as h, I as m, r as f, s as y, m as g, b as v, E as b, c as x, h as $, d as _, y as w, i as S, z as I, R as O, j, t as k, A as C, C as N, a as q, o as D, f as T, D as F } from "./lib-nodepkg-vuekit.BFRuxpnB.chunk.js";
import { i as B, B as L, d as P, t as W, a as R, C as J, g as A, h as H, D as M, c as z, f as V, F as E, J as U, G as K, j as G, o as Q } from "./lib-nodepkg-typedef.C-lDlS3A.chunk.js";
import { s as X, B as Y } from "./lib-nodepkg-vueuikit.0WAVmc9Z.chunk.js";
import { M as Z } from "./lib-nodepkg-vuemarkdown.B4OM2ZVG.chunk.js";
import { l as ee, i as et, F as er } from "./lib-nodepkg-vueformdata.DM474siA.chunk.js";
import { F as en, m as ei, I as ea } from "./lib-nodepkg-vuematerial.DEB6yj2h.chunk.js";
import { j as eo, k as el, u as es, l as ed, m as ec, n as ep, o as eu, p as eh, q as em, r as ef, v as ey, w as eg } from "./lib-nodepkg-codemirror.DL3xZr6w.chunk.js";
import { J as ev, j as eb, a as ex, b as e$ } from "./lib-nodepkg-jsoncue.B6_Gclq2.chunk.js";
let e_ = (e10, t2) => new ew(e10, t2);
class ew extends a {
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
let eS = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e10["Content-Type"] || e10["content-type"] || "";
}, eI = function() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  e10["Content-Type"] && (e10["Content-Type"] = void 0), e10["content-type"] && (e10["content-type"] = void 0);
}, eO = (e10) => eS(e10).includes("multipart/form-data"), ej = (e10) => eS(e10).includes("application/x-www-form-urlencoded"), ek = (e10) => {
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
}, eC = (e10, t2) => {
  if (eO(t2)) {
    eI(t2);
    let r2 = new FormData(), n2 = (e11, t3) => {
      t3 instanceof File || t3 instanceof Blob ? r2.append(e11, t3) : P(t3) ? L(t3, (t4) => n2(e11, t4)) : W(t3) ? r2.append(e11, JSON.stringify(t3)) : r2.append(e11, t3);
    };
    return L(e10, (e11, t3) => n2(t3, e11)), r2;
  }
  return ej(t2) ? ek(e10) : P(e10) || W(e10) ? JSON.stringify(e10) : e10;
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
const _eq = class _eq extends m {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _n);
    __privateAdd(this, _e, eN({ paramsSerializer: ek, transformRequestBody: eC }));
    __privateAdd(this, _t, new o(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _eq({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
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
        return { method: n2.method, url: __privateGet(this, _r, r_get) + eT(n2.path, e11), params: J(e11, null === (t3 = n2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...J(e11, null === (r3 = n2.parameters) || void 0 === r3 ? void 0 : r3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...i2 ? { "Content-Type": i2 } : {} }, body: e11.body, inputs: e11 };
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
      r2 = e_(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return f(this, y((t2) => {
      for (let r2 of eD(t2, { operationId: e10 }))
        if (r2)
          return h(r2);
      return h(null);
    }));
  }
  operations$(e10) {
    return f(this, y((t2) => h([...eD(t2, e10)])));
  }
  schema$(e10) {
    var t2, r2;
    let n2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    return f(this, y((e11) => {
      if (n2) {
        var t3;
        return h(null !== (t3 = A(e11, n2)) && void 0 !== t3 ? t3 : null);
      }
      return h(null);
    }), g((e11) => e11 ? { ...e11, $id: n2[n2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, r2, n2;
    let i2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (i2)
      return null !== (n2 = A(this.value, i2)) && void 0 !== n2 ? n2 : void 0;
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
let eT = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, eF = x(() => eq.empty(), { name: "OpenAPI" }), eB = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, eL = $((r2, n2) => {
  let {} = r2, {} = n2, i2 = eF.use(), a2 = new m({ operationId: void 0 }), o2 = new l();
  f(o2, w(200), d((e10) => {
    a2.next((t2) => {
      t2.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), _());
  let s2 = f(a2, y((e10) => i2.operations$(e10)), S((r3) => {
    let n3 = Object.groupBy(r3, (e10) => e10.group);
    return e(eW, { children: [t(eR, { children: t("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e10) => {
      o2.next(e10.target.value);
    } }) }), t(eJ, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(n3).toSorted().map((r4) => {
      let [n4, i3] = r4;
      return e("div", { "data-nav-group": true, children: [t("div", { "data-nav-group-heading": true, children: n4 }), t("div", { "data-nav-group-contents": true, children: null == i3 ? void 0 : i3.toSorted(eB("operationId")).map((r5) => {
        var n5;
        return e(eH, { component: I, to: `/operations/${r5.operationId}`, children: [t(Y, { "data-operation-method": true, sx: { color: null !== (n5 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[r5.method]) && void 0 !== n5 ? n5 : "sys.secondary" }, children: r5.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-id": true, children: r5.operationId }), r5.summary ? t("div", { "data-operation-summary": true, children: r5.summary != r5.operationId ? r5.summary : t("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => e(eP, { children: [s2, t(eA, { children: t(O, {}) })] });
}), eP = X("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eW = X("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eR = X("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eJ = X("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eA = X("main")({ flex: 1, overflow: "hidden" }), eH = X("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eM = Object.assign(eL, { displayName: "OpenAPIView" }), ez = X("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eV = X("div", { deprecated: H().optional(), optional: H().optional(), nullable: H().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eE = X("div", { spacing: M().optional().default(0), $default: z().optional() }, (e10, r2) => {
  let { slots: n2 } = r2, i2 = eG.use();
  return (r3) => {
    var a2;
    return t(r3, { style: { paddingLeft: `${i2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (a2 = n2.default) || void 0 === a2 ? void 0 : a2.call(n2) });
  };
})({ position: "relative", display: "block" }), eU = X("div", { schema: z() }, (e10, r2) => {
  let {} = r2;
  return (r3) => {
    var n2;
    let i2 = null !== (n2 = e10.schema.getMeta("description")) && void 0 !== n2 ? n2 : "";
    return 0 == i2.length ? null : t(r3, { children: t(Z, { text: i2 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), eK = (n2) => {
  let { name: i2, value: a2, extra: o2 } = n2;
  return "" == a2 ? null : t(e8, { children: e(e4, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e4, { sx: { color: "sys.primary" }, children: `@${i2}(` }), `${a2}`, Object.entries(null != o2 ? o2 : {}).map((n3) => {
    let [i3, a3] = n3;
    return e(r, { children: [e(e4, { sx: { opacity: 0.5 }, children: [",", " "] }), t(e4, { sx: { opacity: 0.5 }, children: i3 }), e(e4, { sx: { opacity: 0.5 }, children: [":", " "] }), t(e4, { sx: { opacity: 0.7 }, children: a3 })] });
  }), t(e4, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eG = x(() => ({ indent: 0 }), { name: "IntentContext" }), eQ = j({ $default: z().optional() }, (e10, r2) => {
  let {} = e10, { slots: n2 } = r2, i2 = eG.use();
  return () => {
    var e11;
    return t(eG, { value: { indent: i2.indent + 1 }, children: null === (e11 = n2.default) || void 0 === e11 ? void 0 : e11.call(n2) });
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
let eY = x(() => new eX("")), eZ = $({ schema: z() }, (r2) => {
  let n2 = eY.use();
  return () => {
    let i2 = r2.schema.getSchema("$ref"), a2 = r2.schema;
    for (; a2.getSchema("$ref"); )
      a2 = a2.unwrap;
    let o2 = "intersection" == a2.type || "object" == a2.type || "union" == a2.type || "record" == a2.type || "array" == a2.type || "union" == a2.type;
    return e(eY, { value: n2.child(i2), children: [o2 && t(I, { to: `#${i2}`, children: e(e4, { id: i2, children: [i2, " "] }) }), n2.safe(i2) && t(e5, { schema: a2 })] });
  };
}), e0 = $({ schema: z() }, (n2) => {
  let i2 = n2.schema;
  return i2.getSchema("$ref") ? t(eZ, { schema: i2 }) : () => {
    var n3, a2, o2, l2, s2, d2, c2, p2;
    switch (i2.type) {
      case "union":
        return t(r, { children: null === (n3 = i2.getSchema("oneOf")) || void 0 === n3 ? void 0 : n3.map((n4, i3) => e(r, { children: [i3 > 0 && e(e4, { children: [" ", " | ", " "] }), t(e5, { schema: n4 })] })) });
      case "intersection":
        return t(e4, { children: null === (a2 = i2.getSchema("allOf")) || void 0 === a2 ? void 0 : a2.filter((e10) => !Object.keys(e10).length).map((n4, i3) => e(r, { children: [i3 > 0 && e(e4, { children: [" ", "&", " "] }), t(e5, { schema: n4 })] })) });
      case "array":
        return e(e4, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e4, { children: "Array<" }), t(e5, { schema: null !== (o2 = i2.getSchema("items")) && void 0 !== o2 ? o2 : E() }), t(e4, { children: ">" })] });
      case "object":
        return e(r, { children: [t(e4, { children: "{" }), t(e3, { children: t(r, { children: Object.entries(null !== (l2 = i2.getSchema("properties")) && void 0 !== l2 ? l2 : {}).map((n4) => {
          var a3;
          let [o3, l3] = n4;
          return l3 ? t(r, { children: e(e8, { spacing: 2, children: [t(e6, { schema: l3 }), e(e4, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(e2, { nullable: l3.getSchema("nullable"), deprecated: l3.getSchema("deprecated"), optional: !(null !== (a3 = i2.getSchema("required")) && void 0 !== a3 ? a3 : []).includes(o3), children: o3 }), t(e4, { sx: { mr: "1em" }, children: ":" }), t(e5, { schema: l3 })] })] }) }) : null;
        }) }) }), t(e4, { children: "}" })] });
      case "record":
        return e(r, { children: [t(e4, { children: "{" }), i2.getSchema("additionalProperties") && t(r, { children: t(e3, { children: e(e8, { children: [e(e4, { sx: { mr: 1 }, children: ["[K:", " "] }), t(e5, { schema: null !== (s2 = i2.getSchema("propertyNames")) && void 0 !== s2 ? s2 : V() }), e(e4, { sx: { mr: 1 }, children: ["]:", " "] }), t(e5, { schema: null !== (d2 = i2.getSchema("additionalProperties")) && void 0 !== d2 ? d2 : E() })] }) }) }), t(e4, { children: "}" })] });
      case "enums": {
        let n4 = null !== (c2 = i2.getSchema("enum")) && void 0 !== c2 ? c2 : [];
        if (1 == n4.length)
          return t(e4, { children: JSON.stringify(n4[0]) });
        let a3 = "any";
        return n4.length > 0 && (a3 = typeof n4[0]), e(r, { children: [t(e4, { sx: { fontWeight: "bold" }, children: a3 }), t(e3, { children: n4.map((e10, r2) => {
          var n5;
          return t(eK, { name: "enum", value: `${e10}`, extra: (null === (n5 = i2.getMeta("enumLabels")) || void 0 === n5 ? void 0 : n5[r2]) ? { label: JSON.stringify(i2.getMeta("enumLabels")[r2]) } : {} }, e10);
        }) })] });
      }
    }
    let [u2, h2, m2] = [i2.type, i2.getSchema("format"), i2.getSchema("default")];
    return e(r, { children: [t(e4, { sx: { fontWeight: "bold" }, children: u2 || "any" }), e(e3, { children: [h2 && t(eK, { name: "format", value: h2 }), !R(m2) && t(eK, { name: "default", value: m2 }), !e1(i2) && t(eK, { name: "validate", value: (p2 = i2).getSchema("x-tag-validate") ? p2.getSchema("x-tag-validate") : e1(p2) ? p2.getSchema("pattern") ? `@r/${String(p2.getSchema("pattern"))}/` : `@${p2.getSchema("exclusiveMinimum")} ? "(" : "["}${p2.getSchema("minProperties") ? p2.getSchema("minProperties") : p2.getSchema("minItems") ? p2.getSchema("minItems") : p2.getSchema("minimum") ? p2.getSchema("minimum") : p2.getSchema("minLength") ? p2.getSchema("minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${p2.getSchema("maxProperties") ? p2.getSchema("maxProperties") : p2.getSchema("maxItems") ? p2.getSchema("maxItems") : p2.getSchema("maximum") ? p2.getSchema("maximum") : p2.getSchema("maxLength") ? p2.getSchema("maxLength") : "string" === p2.type && "uint64" === p2.getSchema("format") ? "19" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${p2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function e1(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e10.getSchema(t2));
}
let e4 = Object.assign(ez, { displayName: "Token" }), e2 = Object.assign(eV, { displayName: "PropName" }), e8 = Object.assign(eE, { displayName: "Line" }), e6 = Object.assign(eU, { displayName: "Description" }), e3 = Object.assign(eQ, { displayName: "Indent" }), e5 = Object.assign(e0, { displayName: "SchemaView" }), e7 = $({ code: z(), response: z() }, (n2) => {
  let i2 = eF.use();
  return () => {
    var a2, o2;
    return e(e9, { children: [t(te, { "data-failed": function(e10) {
      try {
        return Number(e10) >= 400;
      } catch (e11) {
        return false;
      }
    }(n2.code), children: n2.code }), e(Y, { sx: { pl: "4em" }, children: [t(r, { children: null === (a2 = n2.response["x-status-return-errors"]) || void 0 === a2 ? void 0 : a2.map((e10) => function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e11.startsWith("StatusError{") ? e11.slice(12, e11.length - 1).split(",").reduce((e12, t2) => {
        let [r2, n3] = t2.split("=", 2);
        return R(r2) || R(n3) ? e12 : { ...e12, [r2]: n3 };
      }, {}) : null;
    }(e10)).map((r2) => r2 ? t(Y, { sx: { mb: 16 }, children: e(e8, { spacing: 0, children: [e(e4, { children: ["{", " "] }), t(e3, { children: Object.entries(r2).map((r3) => {
      let [n3, i3] = r3;
      return "code" === n3 ? null : e(e8, { children: [t(e2, { children: n3 }), t(e4, { children: ": " }), t(e4, { children: i3 })] });
    }) }), e(e4, { children: [" ", "}"] })] }) }) : null) }), t(r, { children: Object.entries(null !== (o2 = n2.response.content) && void 0 !== o2 ? o2 : {}).map((r2) => {
      let [n3, { schema: a3 }] = r2;
      return e(tt, { children: [t(e8, { spacing: 0, children: t(e5, { schema: U.decode(a3, (e10) => {
        var t2;
        return [null !== (t2 = i2.schema(e10)) && void 0 !== t2 ? t2 : {}, K(e10)];
      }) }) }), t("div", { "data-content-type": true, children: n3 })] });
    }) })] })] });
  };
}), e9 = X("section")({}), te = X("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), tt = X("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), tr = Object.assign(e7, { displayName: "ResponseView" }), tn = X("div", { valued: H().optional(), focus: H().optional(), invalid: H().optional(), disabled: H().optional(), $label: z().optional(), $hint: z().optional(), $supporting: z().optional(), $leading: z().optional(), $trailing: z().optional(), $default: z() }, (r2, i2) => {
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
    return e(i3, { "data-valued": c2, "data-invalid": p2, "data-disabled": u2, "data-focus-within": r2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [e("div", { "data-input-container": true, children: [e("div", { "data-input-decorator-container": true, children: [t("div", { "data-input-decorator-leading": true }), t("div", { "data-input-decorator-label": true, children: t("div", { "data-input-label": true, children: null === (l2 = a2.label) || void 0 === l2 ? void 0 : l2.call(a2) }) }), t("div", { "data-input-decorator-trailing": true })] }), e("div", { "data-input-row": true, children: [a2.leading && t(ti, { role: "leading", children: a2.leading() }), h2, a2.trailing && t(ti, { role: "trailing", children: a2.trailing() })] })] }), a2.supporting && t("div", { "data-input-supporting": true, children: null === (s2 = a2.supporting) || void 0 === s2 ? void 0 : s2.call(a2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), ti = X("div", { role: G(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), ta = Object.assign(tn, { displayName: "TextField" }), to = $({ field$: z(), readOnly: H().optional() }, (e10, r2) => {
  let {} = r2, n2 = eo(R(e10.field$.input) ? "" : ev.stringify(e10.field$.input));
  return () => t(Y, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: t(el, { value: n2, children: t(tl, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), tl = $({ field$: z(), schema: z() }, (e10) => {
  let r2 = el.use();
  return f(e10.schema$, k((e11) => r2.use(() => [eb(), eh({ override: [ex(e11)] }), em.of([{ key: "Shift-Space", shift: ef }]), ey(e$(e11)), em.of([eg])])), _()), es(() => ec.updateListener.of((t2) => {
    if (t2.focusChanged) {
      ep(t2.view), e10.field$.next((e11) => {
        e11.error = 0 == eu(t2.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t2.docChanged) {
      if (ep(t2.view), eu(t2.state) > 0)
        e10.field$.next((e11) => {
          e11.error = ["配置有误"];
        });
      else
        try {
          let r3 = t2.state.doc.sliceString(0), n2 = ev.parse(r3);
          e10.field$.update(n2), e10.field$.next((e11) => {
            e11.error = null;
          });
        } catch (t3) {
          e10.field$.next((e11) => {
            e11.error = ["格式错误"];
          });
        }
    }
  })), () => t(ed, {});
}), ts = Object.assign(to, { displayName: "JSONCueEditorInput" }), td = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), tc = (r2) => {
  let { field: n2, value: i2 } = r2;
  return e(Y, { component: "span", sx: { display: "block" }, children: [e(Y, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [n2, ":"] }), t("span", { children: i2 })] });
}, tp = (t2) => {
  let { method: r2, url: n2, params: i2 } = t2, a2 = ek(i2);
  return e(Y, { component: "span", sx: { fontWeight: "bold" }, children: [r2.toUpperCase(), " ", e(Y, { component: "span", sx: { fontWeight: "medium" }, children: [n2, a2 ? `?${a2}` : ""] }), "  HTTP/*"] });
}, tu = (e10, t2) => {
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
}, th = j({ $default: z().optional() }, (e10, r2) => {
  let {} = e10, { slots: n2 } = r2;
  return () => {
    var e11;
    return t(Y, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: t(Y, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: t("code", { children: null === (e11 = n2.default) || void 0 === e11 ? void 0 : e11.call(n2) }) }) });
  };
}), tm = j({ request: z() }, (n2) => () => {
  let i2 = n2.request;
  return e(th, { children: [t(tp, { ...i2 }), t(r, { children: Object.entries({ ...td(), ...i2.headers }).toSorted().map((e10) => {
    let [r2, n3] = e10;
    return t(tc, { field: r2, value: n3 }, r2);
  }) }), i2.body && e(r, { children: [t("br", {}), function(e10) {
    if (tg(e10.headers).includes("multipart/form-data")) {
      let t2 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e10.headers = { ...e10.headers, "Content-Type": `multipart/form-data; boundary=${t2}` }, tu(t2, e10.body);
    }
    return tg(e10.headers).includes("application/x-www-form-urlencoded") ? ek(e10.body) : tv(e10.headers) ? JSON.stringify(e10.body, null, 2) : e10.body;
  }(i2)] })] });
}), tf = (e10, t2) => {
  let r2 = new Uint8Array(e10), n2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++)
    n2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(n2)}`;
}, ty = j({ response: z() }, (n2, i2) => {
  let {} = i2;
  return () => {
    let i3 = n2.response;
    return tg(i3.headers).includes("image/") ? t("div", { children: t("img", { src: tf(i3.body, tg(i3.headers)), alt: "" }) }) : e(th, { children: [e("span", { children: ["HTTP/* ", i3.status] }), t("br", {}), i3.headers && t(r, { children: Object.entries(i3.headers).map((e10) => {
      let [r2, n3] = e10;
      return t(tc, { field: r2, value: n3 }, r2);
    }) }), t("br", {}), i3.body ? tv(i3.headers) ? JSON.stringify(i3.body, null, 2) : `${i3.body}` : null] });
  };
});
function tg() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10))
    if ("content-type" == t2.toLowerCase())
      return r2;
  return "";
}
let tv = (e10) => tg(e10).includes("application/json"), tb = Object.assign(tm, { displayName: "HttpRequest" }), tx = Object.assign(ty, { displayName: "HTTPResponse" }), t$ = $({ operationID: V() }, (e10) => f(eF.use().response$(e10.operationID), S((e11) => t(t_, { children: t(tx, { response: e11 }) })))), t_ = X("section")({ maxHeight: "40vh", overflow: "auto" }), tw = Object.assign(t$, { displayName: "ResponsePreview" }), tS = $({ operation: z(), $default: z() }, (r2, n2) => {
  var i2, a2, o2, l2;
  let { slots: s2 } = n2, c2 = eF.use(), p2 = {};
  for (let e10 of null !== (i2 = r2.operation.parameters) && void 0 !== i2 ? i2 : []) {
    let t2 = U.decode(e10.schema, (e11) => {
      var t3;
      return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, K(e11)];
    }).use(ee(`${e10.name}, in=${JSON.stringify(e10.in)}`));
    e10.required || (t2 = t2.optional()), ["object", "array"].includes(null !== (a2 = e10.schema.type) && void 0 !== a2 ? a2 : "") ? p2[e10.name] = t2.use(et(ts)) : p2[e10.name] = t2;
  }
  if (r2.operation.requestBody) {
    let e10 = Object.entries(null !== (o2 = r2.operation.requestBody.content) && void 0 !== o2 ? o2 : {})[0];
    if (e10) {
      let [t2, r3] = e10, n3 = U.decode(null !== (l2 = r3.schema) && void 0 !== l2 ? l2 : {}, (e11) => {
        var t3;
        return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, K(e11)];
      }).use(ee(`body, content-type = ${JSON.stringify(t2)}`));
      t2.includes("json") ? p2.body = n3.use(et(ts)) : t2.includes("octet-stream") ? p2.body = n3.use(et(tN)) : p2.body = n3;
    }
  }
  let u2 = C(), h2 = N(), m2 = er.of(Q(p2), (() => {
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
    return n3 ? t(tb, { request: n3(e10) }) : null;
  }));
  return () => {
    var n3;
    return e(Y, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e10) => {
      e10.preventDefault(), m2.submit();
    }, children: [t(Y, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...m2.fields(m2.typedef)].map((e10) => t(tI, { field$: e10 })) }), t(Y, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: e(Y, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [y2, t(Y, { sx: { px: 8 }, children: t(en, { type: "submit", children: "发起请求" }) }), t(tw, { operationID: r2.operation.operationId }), t(Y, { sx: { flex: 1, overflow: "auto" }, children: null === (n3 = s2.default) || void 0 === n3 ? void 0 : n3.call(s2) })] }) })] }, r2.operation.operationId);
  };
}), tI = $({ field$: z() }, (r2, n2) => {
  let { field$: a2 } = r2, { render: o2 } = n2;
  return i(() => {
    a2.destroy();
  }), f(q([a2, a2.input$]), o2((r3) => {
    var n3, i2, o3, l2, s2;
    let [d2, c2] = r3, p2 = null !== (o3 = null === (n3 = a2.meta) || void 0 === n3 ? void 0 : n3.input) && void 0 !== o3 ? o3 : tC, u2 = null !== (l2 = null === (i2 = a2.meta) || void 0 === i2 ? void 0 : i2.readOnlyWhenInitialExist) && void 0 !== l2 && l2 && !!d2.initial;
    return t(ta, { valued: !R(null != c2 ? c2 : d2.initial), invalid: !!d2.error, focus: !!d2.focus, $label: e("span", { children: [null !== (s2 = a2.meta.label) && void 0 !== s2 ? s2 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: e(e8, { children: [t(e6, { schema: a2.typedef }), t(e5, { schema: a2.typedef })] }), $trailing: p2.$trailing, children: t(p2, { field$: a2, readOnly: u2 }) });
  }));
}), tO = j({ readOnly: H().optional(), field$: z() }, (e10) => () => {
  let { readOnly: r2, field$: n2, ...i2 } = e10;
  return t("input", { ...i2, "data-input": true, type: "text", readonly: r2, name: n2.name, value: n2.input, onChange: (e11) => {
    n2.update(e11.target.value);
  }, onFocus: () => n2.focus(), onBlur: () => n2.blur() });
}), tj = $({ field$: z(), readOnly: H().optional(), accept: V().optional() }, (r2) => {
  let n2 = D(null);
  return f(n2, d((e10) => {
    e10 && r2.field$.update(e10);
  }), T()), () => {
    var i2;
    let { readOnly: a2, accept: o2 } = r2;
    return e(Y, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [t("input", { type: "file", name: r2.field$.name, readonly: a2, accept: o2, "data-file-input": true, onChange: (e10) => {
      var t2;
      let r3 = null === (t2 = e10.target.files) || void 0 === t2 ? void 0 : t2[0];
      r3 && (n2.value = r3);
    } }), t(ea, { path: ei }), t("span", { children: null === (i2 = n2.value) || void 0 === i2 ? void 0 : i2.name })] });
  };
}), tk = Object.assign(tS, { displayName: "RequestBuilder" }), tC = Object.assign(tO, { displayName: "TextInput" }), tN = Object.assign(tj, { displayName: "FileSelectInput" }), tq = $({ operationId: V() }, (n2, i2) => {
  let {} = i2, a2 = eF.use(), o2 = f(n2.operationId$, y((e10) => a2.operation$(e10))), l2 = f(o2, F((e10) => !!e10)), s2 = f(l2, S((r2) => {
    var n3;
    return e(tT, { sx: { containerStyle: null !== (n3 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[r2.method]) && void 0 !== n3 ? n3 : "sys.secondary-container" }, children: [t("div", { "data-operation-method": true, children: r2.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-path": true, children: r2.path }), e("div", { "data-operation-summary": true, children: [r2.summary, " ", r2.operationId != r2.summary ? r2.operationId : ""] })] })] });
  })), d2 = f(l2, S((e10) => {
    var r2;
    return t(Y, { sx: { px: 24 }, children: t(Z, { text: null !== (r2 = e10.description) && void 0 !== r2 ? r2 : "" }) });
  })), c2 = f(l2, S((e10) => {
    var n3;
    return t(tk, { operation: e10, children: t(r, { children: Object.entries(null !== (n3 = e10.responses) && void 0 !== n3 ? n3 : {}).map((e11) => {
      let [r2, n4] = e11;
      return t(tr, { code: r2, response: n4 }, r2);
    }) }) }, e10.operationId);
  }));
  return f(o2, S((r2) => r2 ? e(tD, { children: [s2, d2, t(Y, { sx: { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }, children: t(Y, { sx: { flex: 1, overflow: "auto" }, children: c2 }) })] }, r2.operationId) : null));
}), tD = X("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tT = X("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), tF = Object.assign(tq, { displayName: "OperationView" });
export {
  eF as O,
  tF as a,
  eM as b,
  eN as c,
  ek as p,
  eC as t
};
