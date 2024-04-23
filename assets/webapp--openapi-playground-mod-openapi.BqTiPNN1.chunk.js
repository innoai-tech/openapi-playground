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
var _e, _t, _r, r_get, _i, i_fn;
import { I as e, r as t, c as r, b as i, s as n, d as a, R as o, h as l, e as d, t as s, u as c, i as p, o as u, a as h } from "./lib--nodepkg-vuekit.BRo0ZIlg.chunk.js";
import { c as m, a as f, p as y, t as v } from "./vendor--innoai-tech-fetcher.BaNq0A9a.chunk.js";
import { B as g, s as b, m as x, a as $, E as _, o as S, S as w, t as j, h as O, c as I, j as k } from "./vendor--rxjs.FN4n8WH4.chunk.js";
import { a as C, j as N } from "./lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js";
import { s as q, B as D } from "./lib--nodepkg-vueuikit.WHW5k3l4.chunk.js";
import { h as F, C as T, c as B, f as P, D as W, a as L, J as R, F as A, j as J, d as M, t as H, o as z } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { M as V } from "./lib--nodepkg-vuemarkdown.Cjmx74zb.chunk.js";
import { F as E, e as U, l as K } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
import { l as G, i as Q, F as X } from "./lib--nodepkg-vueformdata.CJGs6zut.chunk.js";
import { F as Y, m as Z, I as ee } from "./lib--nodepkg-vuematerial.3DLfqTIZ.chunk.js";
import { j as et, k as er, u as ei, l as en, m as ea, n as eo, o as el, p as ed, q as es, r as ec, v as ep, w as eu } from "./lib--nodepkg-codemirror.BXZpTj89.chunk.js";
import { J as eh, j as em, a as ef, b as ey } from "./lib--nodepkg-jsoncue.BAzVouA8.chunk.js";
let ev = (e10) => !!e10 && e10.constructor === Object, eg = (e10) => {
  try {
    return Number(e10) === e10;
  } catch {
    return false;
  }
}, eb = (e10) => void 0 === e10;
function ex(e10, t2) {
  if (0 == t2.length)
    return e10;
  if (Array.isArray(e10)) {
    let [r2, ...i2] = t2;
    return eg(r2) ? ex(e10[r2], i2) : void 0;
  }
  if (ev(e10)) {
    let [r2, ...i2] = t2;
    return ex(e10[r2], i2);
  }
}
let e$ = (e10, t2) => {
  let r2 = {};
  for (let [i2, n2] of Object.entries(e10))
    t2.includes(i2) && (r2[i2] = n2);
  return r2;
};
const _e_ = class _e_ extends e {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _i);
    __privateAdd(this, _e, m({ paramsSerializer: y, transformRequestBody: v }));
    __privateAdd(this, _t, new g(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _e_({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return t(__privateGet(this, _t), b((t2) => {
      let r2 = t2.get(e10);
      return r2 ? $(r2, r2.error$) : _;
    }));
  }
  requesting$(e10) {
    return t(__privateGet(this, _t), b((t2) => {
      var r2, i2;
      return null !== (i2 = null === (r2 = t2.get(e10)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== i2 ? i2 : S(false);
    }));
  }
  asRequestConfigCreator(e10) {
    if (!__privateGet(this, _t).value.get(e10)) {
      var t2, r2;
      let i2 = __privateMethod(this, _i, i_fn).call(this, e10);
      if (!i2)
        return null;
      let n2 = Object.keys(null !== (r2 = null === (t2 = i2.requestBody) || void 0 === t2 ? void 0 : t2.content) && void 0 !== r2 ? r2 : {})[0];
      return (e11) => {
        var t3, r3;
        return { method: i2.method, url: __privateGet(this, _r, r_get) + ew(i2.path, e11), params: e$(e11, null === (t3 = i2.parameters) || void 0 === t3 ? void 0 : t3.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...e$(e11, null === (r3 = i2.parameters) || void 0 === r3 ? void 0 : r3.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...n2 ? { "Content-Type": n2 } : {} }, body: e11.body, inputs: e11 };
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
      r2 = f(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return t(this, b((t2) => {
      for (let r2 of eS(t2, { operationId: e10 }))
        if (r2)
          return S(r2);
      return S(null);
    }));
  }
  operations$(e10) {
    return t(this, b((t2) => S([...eS(t2, e10)])));
  }
  schema$(e10) {
    var r2, i2;
    let n2 = null !== (i2 = null === (r2 = e10.split("#/")[1]) || void 0 === r2 ? void 0 : r2.split("/")) && void 0 !== i2 ? i2 : [];
    return t(this, b((e11) => {
      if (n2) {
        var t2;
        return S(null !== (t2 = ex(e11, n2)) && void 0 !== t2 ? t2 : null);
      }
      return S(null);
    }), x((e11) => e11 ? { ...e11, $id: n2[n2.length - 1] } : e11));
  }
  schema(e10) {
    var t2, r2, i2;
    let n2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    if (n2)
      return null !== (i2 = ex(this.value, n2)) && void 0 !== i2 ? i2 : void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_r = new WeakSet();
r_get = function() {
  var e10, t2, r2;
  return null !== (r2 = null === (t2 = this.value.servers) || void 0 === t2 ? void 0 : null === (e10 = t2[0]) || void 0 === e10 ? void 0 : e10.url) && void 0 !== r2 ? r2 : "";
};
_i = new WeakSet();
i_fn = function(e10) {
  for (let t2 of eS(this.value, { operationId: e10 }))
    if (t2)
      return t2;
  return null;
};
let e_ = _e_;
function* eS(e10, t2) {
  for (let [a2, o2] of Object.entries(e10.paths))
    for (let [e11, l2] of Object.entries(o2)) {
      var r2, i2, n2;
      if ("OpenAPI" != l2.operationId && "OpenAPIView" != l2.operationId && (!t2.tag || (null !== (i2 = l2.tags) && void 0 !== i2 ? i2 : []).includes(t2.tag))) {
        if (t2.operationId) {
          if (t2.operationId.startsWith("*")) {
            if (!l2.operationId.includes(t2.operationId.slice(1)))
              continue;
          } else if (l2.operationId != t2.operationId)
            continue;
        }
        yield { ...l2, method: e11, path: a2, group: null !== (n2 = null === (r2 = l2.tags) || void 0 === r2 ? void 0 : r2[0]) && void 0 !== n2 ? n2 : "" };
      }
    }
}
let ew = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, ej = r(() => e_.empty(), { name: "OpenAPI" }), eO = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, eI = i((r2, i2) => {
  let {} = r2, {} = i2, d2 = ej.use(), s2 = new e({ operationId: void 0 }), c2 = new w();
  t(c2, O(200), j((e10) => {
    s2.next((t2) => {
      t2.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), n());
  let p2 = t(s2, b((e10) => d2.operations$(e10)), a((e10) => {
    let t2 = Object.groupBy(e10, (e11) => e11.group);
    return C(eC, { children: [N(eN, { children: N("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e11) => {
      c2.next(e11.target.value);
    } }) }), N(eq, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(t2).toSorted().map((e11) => {
      let [t3, r3] = e11;
      return C("div", { "data-nav-group": true, children: [N("div", { "data-nav-group-heading": true, children: t3 }), N("div", { "data-nav-group-contents": true, children: null == r3 ? void 0 : r3.toSorted(eO("operationId")).map((e12) => {
        var t4;
        return C(eF, { component: o, to: `/operations/${e12.operationId}`, children: [N(D, { "data-operation-method": true, sx: { color: null !== (t4 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e12.method]) && void 0 !== t4 ? t4 : "sys.secondary" }, children: e12.method }), C("div", { "data-operation-desc": true, children: [N("div", { "data-operation-id": true, children: e12.operationId }), e12.summary ? N("div", { "data-operation-summary": true, children: e12.summary != e12.operationId ? e12.summary : N("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => C(ek, { children: [p2, N(eD, { children: N(l, {}) })] });
}), ek = q("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eC = q("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eN = q("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eq = q("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eD = q("main")({ flex: 1, overflow: "hidden" }), eF = q("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eT = Object.assign(eI, { displayName: "OpenAPIView" }), eB = q("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eP = q("div", { deprecated: F().optional(), optional: F().optional(), nullable: F().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eW = q("div", { spacing: T().optional().default(0), $default: B().optional() }, (e10, t2) => {
  let { slots: r2 } = t2, i2 = eA.use();
  return (t3) => {
    var n2;
    return N(t3, { style: { paddingLeft: `${i2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (n2 = r2.default) || void 0 === n2 ? void 0 : n2.call(r2) });
  };
})({ position: "relative", display: "block" }), eL = q("div", { schema: B() }, (e10, t2) => {
  let {} = t2;
  return (t3) => {
    var r2;
    let i2 = null !== (r2 = e10.schema.getMeta("description")) && void 0 !== r2 ? r2 : "";
    return 0 == i2.length ? null : N(t3, { children: N(V, { text: i2 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), eR = (e10) => {
  let { name: t2, value: r2, extra: i2 } = e10;
  return "" == r2 ? null : N(eU, { children: C(eV, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [N(eV, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, Object.entries(null != i2 ? i2 : {}).map((e11) => {
    let [t3, r3] = e11;
    return C(E, { children: [C(eV, { sx: { opacity: 0.5 }, children: [",", " "] }), N(eV, { sx: { opacity: 0.5 }, children: t3 }), C(eV, { sx: { opacity: 0.5 }, children: [":", " "] }), N(eV, { sx: { opacity: 0.7 }, children: r3 })] });
  }), N(eV, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eA = r(() => ({ indent: 0 }), { name: "IntentContext" }), eJ = d({ $default: B().optional() }, (e10, t2) => {
  let {} = e10, { slots: r2 } = t2, i2 = eA.use();
  return () => {
    var e11;
    return N(eA, { value: { indent: i2.indent + 1 }, children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) });
  };
}), eM = i({ schema: B() }, (e10) => () => N(E, { children: N(eQ, { schema: e10.schema }) })), eH = i({ schema: B() }, (e10) => {
  let t2 = e10.schema;
  return t2.getSchema("$ref") ? N(eM, { schema: t2.unwrap }) : () => {
    var e11, r2, i2, n2, a2, o2, l2, d2;
    switch (t2.type) {
      case "union":
        return N(E, { children: null === (e11 = t2.getSchema("oneOf")) || void 0 === e11 ? void 0 : e11.map((e12, t3) => C(E, { children: [t3 > 0 && C(eV, { children: [" ", " | ", " "] }), N(eQ, { schema: e12 })] })) });
      case "intersection":
        return N(eV, { children: null === (r2 = t2.getSchema("allOf")) || void 0 === r2 ? void 0 : r2.filter((e12) => !Object.keys(e12).length).map((e12, t3) => C(E, { children: [t3 > 0 && C(eV, { children: [" ", "&", " "] }), N(eQ, { schema: e12 })] })) });
      case "array":
        return C(eV, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [N(eV, { children: "Array<" }), N(eQ, { schema: null !== (i2 = t2.getSchema("items")) && void 0 !== i2 ? i2 : W() }), N(eV, { children: ">" })] });
      case "object":
        return C(E, { children: [N(eV, { children: "{" }), N(eG, { children: N(E, { children: Object.entries(null !== (n2 = t2.getSchema("properties")) && void 0 !== n2 ? n2 : {}).map((e12) => {
          var r3;
          let [i3, n3] = e12;
          return n3 ? N(E, { children: C(eU, { spacing: 2, children: [N(eK, { schema: n3 }), C(eV, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [N(eE, { nullable: n3.getSchema("nullable"), deprecated: n3.getSchema("deprecated"), optional: !(null !== (r3 = t2.getSchema("required")) && void 0 !== r3 ? r3 : []).includes(i3), children: i3 }), N(eV, { sx: { mr: "1em" }, children: ":" }), N(eQ, { schema: n3 })] })] }) }) : null;
        }) }) }), N(eV, { children: "}" })] });
      case "record":
        return C(E, { children: [N(eV, { children: "{" }), t2.getSchema("additionalProperties") && N(E, { children: N(eG, { children: C(eU, { children: [C(eV, { sx: { mr: 1 }, children: ["[K:", " "] }), N(eQ, { schema: null !== (a2 = t2.getSchema("propertyNames")) && void 0 !== a2 ? a2 : P() }), C(eV, { sx: { mr: 1 }, children: ["]:", " "] }), N(eQ, { schema: null !== (o2 = t2.getSchema("additionalProperties")) && void 0 !== o2 ? o2 : W() })] }) }) }), N(eV, { children: "}" })] });
      case "enums": {
        let e12 = null !== (l2 = t2.getSchema("enum")) && void 0 !== l2 ? l2 : [];
        if (1 == e12.length)
          return N(eV, { children: JSON.stringify(e12[0]) });
        let r3 = "any";
        return e12.length > 0 && (r3 = typeof e12[0]), C(E, { children: [N(eV, { sx: { fontWeight: "bold" }, children: r3 }), N(eG, { children: e12.map((e13, r4) => {
          var i3;
          return N(eR, { name: "enum", value: `${e13}`, extra: (null === (i3 = t2.getMeta("enumLabels")) || void 0 === i3 ? void 0 : i3[r4]) ? { label: JSON.stringify(t2.getMeta("enumLabels")[r4]) } : {} }, e13);
        }) })] });
      }
    }
    let [s2, c2, p2] = [t2.type, t2.getSchema("format"), t2.getSchema("default")];
    return C(E, { children: [N(eV, { sx: { fontWeight: "bold" }, children: s2 || "any" }), C(eG, { children: [c2 && N(eR, { name: "format", value: c2 }), !L(p2) && N(eR, { name: "default", value: p2 }), !ez(t2) && N(eR, { name: "validate", value: (d2 = t2).getSchema("x-tag-validate") ? d2.getSchema("x-tag-validate") : ez(d2) ? d2.getSchema("pattern") ? `@r/${String(d2.getSchema("pattern"))}/` : `@${d2.getSchema("exclusiveMinimum")} ? "(" : "["}${d2.getSchema("minProperties") ? d2.getSchema("minProperties") : d2.getSchema("minItems") ? d2.getSchema("minItems") : d2.getSchema("minimum") ? d2.getSchema("minimum") : d2.getSchema("minLength") ? d2.getSchema("minLength") : "string" === d2.type ? "0" : ("number" === d2.type || "integer" === d2.type) && d2.getSchema("format") ? `${Math.pow(2, Number(d2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${d2.getSchema("maxProperties") ? d2.getSchema("maxProperties") : d2.getSchema("maxItems") ? d2.getSchema("maxItems") : d2.getSchema("maximum") ? d2.getSchema("maximum") : d2.getSchema("maxLength") ? d2.getSchema("maxLength") : "string" === d2.type && "uint64" === d2.getSchema("format") ? "19" : ("number" === d2.type || "integer" === d2.type) && d2.getSchema("format") ? `${Math.pow(2, Number(d2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${d2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function ez(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e10.getSchema(t2));
}
let eV = Object.assign(eB, { displayName: "Token" }), eE = Object.assign(eP, { displayName: "PropName" }), eU = Object.assign(eW, { displayName: "Line" }), eK = Object.assign(eL, { displayName: "Description" }), eG = Object.assign(eJ, { displayName: "Indent" }), eQ = Object.assign(eH, { displayName: "SchemaView" }), eX = i({ code: B(), response: B() }, (e10) => {
  let t2 = ej.use();
  return () => {
    var r2, i2;
    return C(eY, { children: [N(eZ, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), C(D, { sx: { pl: "4em" }, children: [N(E, { children: null === (r2 = e10.response["x-status-return-errors"]) || void 0 === r2 ? void 0 : r2.map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e12.startsWith("StatusError{") ? e12.slice(12, e12.length - 1).split(",").reduce((e13, t3) => {
        let [r3, i3] = t3.split("=", 2);
        return eb(r3) || eb(i3) ? e13 : { ...e13, [r3]: i3 };
      }, {}) : null;
    }(e11)).map((e11) => e11 ? N(D, { sx: { mb: 16 }, children: C(eU, { spacing: 0, children: [C(eV, { children: ["{", " "] }), N(eG, { children: Object.entries(e11).map((e12) => {
      let [t3, r3] = e12;
      return "code" === t3 ? null : C(eU, { children: [N(eE, { children: t3 }), N(eV, { children: ": " }), N(eV, { children: r3 })] });
    }) }), C(eV, { children: [" ", "}"] })] }) }) : null) }), N(E, { children: Object.entries(null !== (i2 = e10.response.content) && void 0 !== i2 ? i2 : {}).map((e11) => {
      let [r3, { schema: i3 }] = e11;
      return C(e0, { children: [N(eU, { spacing: 0, children: N(eQ, { schema: R.decode(i3, (e12) => {
        var r4;
        return [null !== (r4 = t2.schema(e12)) && void 0 !== r4 ? r4 : {}, A(e12)];
      }) }) }), N("div", { "data-content-type": true, children: r3 })] });
    }) })] })] });
  };
}), eY = q("section")({}), eZ = q("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), e0 = q("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), e1 = Object.assign(eX, { displayName: "ResponseView" }), e2 = q("div", { valued: F().optional(), focus: F().optional(), invalid: F().optional(), disabled: F().optional(), $label: B().optional(), $hint: B().optional(), $supporting: B().optional(), $leading: B().optional(), $trailing: B().optional(), $default: B() }, (e10, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var i2, n2, a2, o2;
    let l2 = e10.valued, d2 = e10.invalid, s2 = e10.disabled, c2 = (null !== (o2 = null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2)) && void 0 !== o2 ? o2 : []).map((e11) => {
      if ("input" === e11.type) {
        var t4, r3, i3, n3, a3, o3;
        return l2 = !!(null !== (a3 = null !== (n3 = null === (t4 = e11.props) || void 0 === t4 ? void 0 : t4.value) && void 0 !== n3 ? n3 : null === (r3 = e11.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== a3 ? a3 : l2), s2 = null !== (o3 = null === (i3 = e11.props) || void 0 === i3 ? void 0 : i3.disabled) && void 0 !== o3 ? o3 : s2, U(e11, { disabled: s2 });
      }
      return U(e11);
    });
    return C(t3, { "data-valued": l2, "data-invalid": d2, "data-disabled": s2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [C("div", { "data-input-container": true, children: [C("div", { "data-input-decorator-container": true, children: [N("div", { "data-input-decorator-leading": true }), N("div", { "data-input-decorator-label": true, children: N("div", { "data-input-label": true, children: null === (n2 = r2.label) || void 0 === n2 ? void 0 : n2.call(r2) }) }), N("div", { "data-input-decorator-trailing": true })] }), C("div", { "data-input-row": true, children: [r2.leading && N(e4, { role: "leading", children: r2.leading() }), c2, r2.trailing && N(e4, { role: "trailing", children: r2.trailing() })] })] }), r2.supporting && N("div", { "data-input-supporting": true, children: null === (a2 = r2.supporting) || void 0 === a2 ? void 0 : a2.call(r2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), e4 = q("div", { role: J(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), e8 = Object.assign(e2, { displayName: "TextField" }), e6 = i({ field$: B(), readOnly: F().optional() }, (e10, t2) => {
  let {} = t2, r2 = et(eb(e10.field$.input) ? "" : eh.stringify(e10.field$.input));
  return () => N(D, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: N(er, { value: r2, children: N(e3, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), e3 = i({ field$: B(), schema: B() }, (e10) => {
  let r2 = er.use();
  return t(e10.schema$, s((e11) => r2.use(() => [em(), ed({ override: [ef(e11)] }), es.of([{ key: "Shift-Space", shift: ec }]), ep(ey(e11)), es.of([eu])])), n()), ei(() => ea.updateListener.of((t2) => {
    if (t2.focusChanged) {
      eo(t2.view), e10.field$.next((e11) => {
        e11.error = 0 == el(t2.state) ? null : ["配置有误"];
      });
      return;
    }
    if (t2.docChanged) {
      if (eo(t2.view), el(t2.state) > 0)
        e10.field$.next((e11) => {
          e11.error = ["配置有误"];
        });
      else
        try {
          let r3 = t2.state.doc.sliceString(0), i2 = eh.parse(r3);
          e10.field$.update(i2), e10.field$.next((e11) => {
            e11.error = null;
          });
        } catch (t3) {
          e10.field$.next((e11) => {
            e11.error = ["格式错误"];
          });
        }
    }
  })), () => N(en, {});
}), e5 = Object.assign(e6, { displayName: "JSONCueEditorInput" }), e7 = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), e9 = (e10) => {
  let { field: t2, value: r2 } = e10;
  return C(D, { component: "span", sx: { display: "block" }, children: [C(D, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), N("span", { children: r2 })] });
}, te = (e10) => {
  let { method: t2, url: r2, params: i2 } = e10, n2 = y(i2);
  return C(D, { component: "span", sx: { fontWeight: "bold" }, children: [t2.toUpperCase(), " ", C(D, { component: "span", sx: { fontWeight: "medium" }, children: [r2, n2 ? `?${n2}` : ""] }), "  HTTP/*"] });
}, tt = (e10, t2) => {
  let r2 = (t3, i2) => i2 instanceof File || i2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${i2.name ? `; filename="${i2.name}"` : ""}
Content-Type: ${i2.type}

[File Content]
` : M(i2) ? i2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${H(i2) ? JSON.stringify(i2) : String(i2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, i2] = e11;
    return r2(t3, i2);
  }).join("\n") + `${e10}--`;
}, tr = d({ $default: B().optional() }, (e10, t2) => {
  let {} = e10, { slots: r2 } = t2;
  return () => {
    var e11;
    return N(D, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: N(D, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: N("code", { children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) }) }) });
  };
}), ti = d({ request: B() }, (e10) => () => {
  let t2 = e10.request;
  return C(tr, { children: [N(te, { ...t2 }), N(E, { children: Object.entries({ ...e7(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, r2] = e11;
    return N(e9, { field: t3, value: r2 }, t3);
  }) }), t2.body && C(E, { children: [N("br", {}), function(e11) {
    if (tl(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, tt(t3, e11.body);
    }
    return tl(e11.headers).includes("application/x-www-form-urlencoded") ? y(e11.body) : td(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}), tn = (e10) => Buffer.from(e10).toString("utf8"), ta = (e10, t2) => {
  let r2 = new Uint8Array(e10), i2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++)
    i2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(i2)}`;
}, to = d({ response: B() }, (e10, t2) => {
  let {} = t2;
  return () => {
    let t3 = e10.response;
    return tl(t3.headers).includes("image/") ? N("div", { children: N("img", { src: ta(t3.body, tl(t3.headers)), alt: "" }) }) : C(tr, { children: [C("span", { children: ["HTTP/* ", t3.status] }), N("br", {}), t3.headers && N(E, { children: Object.entries(t3.headers).map((e11) => {
      let [t4, r2] = e11;
      return N(e9, { field: t4, value: r2 }, t4);
    }) }), N("br", {}), t3.body ? td(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${tn(t3.body)}` : null] });
  };
});
function tl() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10))
    if ("content-type" == t2.toLowerCase())
      return r2;
  return "";
}
let td = (e10) => tl(e10).includes("application/json"), ts = Object.assign(ti, { displayName: "HttpRequest" }), tc = Object.assign(to, { displayName: "HTTPResponse" }), tp = i({ operationID: P() }, (e10) => t(ej.use().response$(e10.operationID), a((e11) => N(tu, { children: N(tc, { response: e11 }) })))), tu = q("section")({ maxHeight: "40vh", overflow: "auto" }), th = Object.assign(tp, { displayName: "ResponsePreview" }), tm = i({ operation: B(), $default: B() }, (e10, r2) => {
  var i2, o2, l2, d2;
  let { slots: s2 } = r2, u2 = ej.use(), h2 = {};
  for (let t2 of null !== (i2 = e10.operation.parameters) && void 0 !== i2 ? i2 : []) {
    let e11 = R.decode(t2.schema, (e12) => {
      var t3;
      return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, A(e12)];
    }).use(G(`${t2.name}, in=${JSON.stringify(t2.in)}`));
    t2.required || (e11 = e11.optional()), ["object", "array"].includes(null !== (o2 = t2.schema.type) && void 0 !== o2 ? o2 : "") ? h2[t2.name] = e11.use(Q(e5)) : h2[t2.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t2 = Object.entries(null !== (l2 = e10.operation.requestBody.content) && void 0 !== l2 ? l2 : {})[0];
    if (t2) {
      let [e11, r3] = t2, i3 = R.decode(null !== (d2 = r3.schema) && void 0 !== d2 ? d2 : {}, (e12) => {
        var t3;
        return [null !== (t3 = u2.schema(e12)) && void 0 !== t3 ? t3 : {}, A(e12)];
      }).use(G(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? h2.body = i3.use(Q(e5)) : e11.includes("octet-stream") ? h2.body = i3.use(Q(tx)) : h2.body = i3;
    }
  }
  let m2 = c(), f2 = p(), y2 = X.of(z(h2), (() => {
    try {
      var e11;
      let t2 = f2.query.params;
      return JSON.parse(atob(null !== (e11 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e11 ? e11 : ""));
    } catch (e12) {
    }
    return {};
  })());
  t(y2, j((t2) => {
    u2.request(e10.operation.operationId, t2);
  }), j((e11) => {
    m2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), n());
  let v2 = t(y2.inputs$, a((t2) => {
    let r3 = u2.asRequestConfigCreator(e10.operation.operationId);
    return r3 ? N(ts, { request: r3(t2) }) : null;
  }));
  return () => {
    var t2;
    return C(D, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), y2.submit();
    }, children: [N(D, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...y2.fields(y2.typedef)].map((e11) => N(tf, { field$: e11 })) }), N(D, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: C(D, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [v2, N(D, { sx: { px: 8 }, children: N(Y, { type: "submit", children: "发起请求" }) }), N(th, { operationID: e10.operation.operationId }), N(D, { sx: { flex: 1, overflow: "auto" }, children: null === (t2 = s2.default) || void 0 === t2 ? void 0 : t2.call(s2) })] }) })] }, e10.operation.operationId);
  };
}), tf = i({ field$: B() }, (e10, r2) => {
  let { field$: i2 } = e10, { render: n2 } = r2;
  return K(() => {
    i2.destroy();
  }), t(I([i2, i2.input$]), n2((e11) => {
    var t2, r3, n3, a2, o2;
    let [l2, d2] = e11, s2 = null !== (n3 = null === (t2 = i2.meta) || void 0 === t2 ? void 0 : t2.input) && void 0 !== n3 ? n3 : tb, c2 = null !== (a2 = null === (r3 = i2.meta) || void 0 === r3 ? void 0 : r3.readOnlyWhenInitialExist) && void 0 !== a2 && a2 && !!l2.initial;
    return N(e8, { valued: !eb(null != d2 ? d2 : l2.initial), invalid: !!l2.error, focus: !!l2.focus, $label: C("span", { children: [null !== (o2 = i2.meta.label) && void 0 !== o2 ? o2 : i2.name, i2.optional ? "（非必填）" : ""] }), $supporting: C(eU, { children: [N(eK, { schema: i2.typedef }), N(eQ, { schema: i2.typedef })] }), $trailing: s2.$trailing, children: N(s2, { field$: i2, readOnly: c2 }) });
  }));
}), ty = d({ readOnly: F().optional(), field$: B() }, (e10) => () => {
  let { readOnly: t2, field$: r2, ...i2 } = e10;
  return N("input", { ...i2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e11) => {
    r2.update(e11.target.value);
  }, onFocus: () => r2.focus(), onBlur: () => r2.blur() });
}), tv = i({ field$: B(), readOnly: F().optional(), accept: P().optional() }, (e10) => {
  let r2 = u(null);
  return t(r2, j((t2) => {
    t2 && e10.field$.update(t2);
  }), h()), () => {
    var t2;
    let { readOnly: i2, accept: n2 } = e10;
    return C(D, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [N("input", { type: "file", name: e10.field$.name, readonly: i2, accept: n2, "data-file-input": true, onChange: (e11) => {
      var t3;
      let i3 = null === (t3 = e11.target.files) || void 0 === t3 ? void 0 : t3[0];
      i3 && (r2.value = i3);
    } }), N(ee, { path: Z }), N("span", { children: null === (t2 = r2.value) || void 0 === t2 ? void 0 : t2.name })] });
  };
}), tg = Object.assign(tm, { displayName: "RequestBuilder" }), tb = Object.assign(ty, { displayName: "TextInput" }), tx = Object.assign(tv, { displayName: "FileSelectInput" }), t$ = i({ operationId: P() }, (e10, r2) => {
  let {} = r2, i2 = ej.use(), n2 = t(e10.operationId$, b((e11) => i2.operation$(e11))), o2 = t(n2, k((e11) => !!e11)), l2 = t(o2, a((e11) => {
    var t2;
    return C(tS, { sx: { containerStyle: null !== (t2 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method]) && void 0 !== t2 ? t2 : "sys.secondary-container" }, children: [N("div", { "data-operation-method": true, children: e11.method }), C("div", { "data-operation-desc": true, children: [N("div", { "data-operation-path": true, children: e11.path }), C("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] })] });
  })), d2 = t(o2, a((e11) => N("span", { children: e11.description }))), s2 = t(o2, a((e11) => {
    var t2;
    return N(tg, { operation: e11, children: N(E, { children: Object.entries(null !== (t2 = e11.responses) && void 0 !== t2 ? t2 : {}).map((e12) => {
      let [t3, r3] = e12;
      return N(e1, { code: t3, response: r3 }, t3);
    }) }) }, e11.operationId);
  }));
  return t(n2, a((e11) => e11 ? C(t_, { children: [l2, C(D, { sx: { flex: 1, overflow: "hidden", py: 24, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [d2, N(D, { sx: { flex: 1, overflow: "auto" }, children: s2 })] })] }, e11.operationId) : null));
}), t_ = q("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tS = q("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), tw = Object.assign(t$, { displayName: "OperationView" });
export {
  ej as O,
  eT as a,
  tw as b
};
