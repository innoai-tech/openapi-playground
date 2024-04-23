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
import { k as e, j as t, F as r, l as i, v as n } from "./lib--nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { I as a, B as o, r as l, s as d, m as s, b as c, E as p, e as u, c as h, h as m, S as f, d as y, p as v, y as g, i as b, z as x, R as $, j as _, t as S, A as w, C as O, a as I, o as j, f as k, D as C } from "./lib--nodepkg-vuekit.UMOgsAuw.chunk.js";
import { c as N, a as q, p as D, t as F } from "./vendor--innoai-tech-fetcher.BT9C0Nu2.chunk.js";
import { s as T, B } from "./lib--nodepkg-vueuikit.xfULGfyQ.chunk.js";
import { h as P, C as W, c as L, f as R, D as A, a as J, J as M, F as H, j as z, d as V, t as E, o as U } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { M as K } from "./lib--nodepkg-vuemarkdown.Bq1qJEgm.chunk.js";
import { l as G, i as Q, F as X } from "./lib--nodepkg-vueformdata.B1KJA9Qs.chunk.js";
import { F as Y, m as Z, I as ee } from "./lib--nodepkg-vuematerial.BltOKROW.chunk.js";
import { j as et, k as er, u as ei, l as en, m as ea, n as eo, o as el, p as ed, q as es, r as ec, v as ep, w as eu } from "./lib--nodepkg-codemirror.C19z96lt.chunk.js";
import { J as eh, j as em, a as ef, b as ey } from "./lib--nodepkg-jsoncue.BIvroW3D.chunk.js";
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
const _e_ = class _e_ extends a {
  constructor() {
    super(...arguments);
    __privateAdd(this, _r);
    __privateAdd(this, _i);
    __privateAdd(this, _e, N({ paramsSerializer: D, transformRequestBody: F }));
    __privateAdd(this, _t, new o(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _e_({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return l(__privateGet(this, _t), d((t2) => {
      let r2 = t2.get(e10);
      return r2 ? c(r2, r2.error$) : p;
    }));
  }
  requesting$(e10) {
    return l(__privateGet(this, _t), d((t2) => {
      var r2, i2;
      return null !== (i2 = null === (r2 = t2.get(e10)) || void 0 === r2 ? void 0 : r2.requesting$) && void 0 !== i2 ? i2 : u(false);
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
      r2 = q(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return l(this, d((t2) => {
      for (let r2 of eS(t2, { operationId: e10 }))
        if (r2)
          return u(r2);
      return u(null);
    }));
  }
  operations$(e10) {
    return l(this, d((t2) => u([...eS(t2, e10)])));
  }
  schema$(e10) {
    var t2, r2;
    let i2 = null !== (r2 = null === (t2 = e10.split("#/")[1]) || void 0 === t2 ? void 0 : t2.split("/")) && void 0 !== r2 ? r2 : [];
    return l(this, d((e11) => {
      if (i2) {
        var t3;
        return u(null !== (t3 = ex(e11, i2)) && void 0 !== t3 ? t3 : null);
      }
      return u(null);
    }), s((e11) => e11 ? { ...e11, $id: i2[i2.length - 1] } : e11));
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
}, eO = h(() => e_.empty(), { name: "OpenAPI" }), eI = (e10) => (t2, r2) => t2[e10] == r2[e10] ? 0 : t2[e10] < r2[e10] ? -1 : 1, ej = m((r2, i2) => {
  let {} = r2, {} = i2, n2 = eO.use(), o2 = new a({ operationId: void 0 }), s2 = new f();
  l(s2, g(200), v((e10) => {
    o2.next((t2) => {
      t2.operationId = `*${null != e10 ? e10 : ""}`;
    });
  }), y());
  let c2 = l(o2, d((e10) => n2.operations$(e10)), b((r3) => {
    let i3 = Object.groupBy(r3, (e10) => e10.group);
    return e(eC, { children: [t(eN, { children: t("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e10) => {
      s2.next(e10.target.value);
    } }) }), t(eq, { sx: { flex: 1, overflow: "scroll" }, children: Object.entries(i3).toSorted().map((r4) => {
      let [i4, n3] = r4;
      return e("div", { "data-nav-group": true, children: [t("div", { "data-nav-group-heading": true, children: i4 }), t("div", { "data-nav-group-contents": true, children: null == n3 ? void 0 : n3.toSorted(eI("operationId")).map((r5) => {
        var i5;
        return e(eF, { component: x, to: `/operations/${r5.operationId}`, children: [t(B, { "data-operation-method": true, sx: { color: null !== (i5 = { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[r5.method]) && void 0 !== i5 ? i5 : "sys.secondary" }, children: r5.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-id": true, children: r5.operationId }), r5.summary ? t("div", { "data-operation-summary": true, children: r5.summary != r5.operationId ? r5.summary : t("span", { children: " " }) }) : void 0] })] });
      }) })] });
    }) })] });
  }));
  return () => e(ek, { children: [c2, t(eD, { children: t($, {}) })] });
}), ek = T("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eC = T("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), eN = T("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eq = T("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eD = T("main")({ flex: 1, overflow: "hidden" }), eF = T("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eT = Object.assign(ej, { displayName: "OpenAPIView" }), eB = T("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eP = T("div", { deprecated: P().optional(), optional: P().optional(), nullable: P().optional() })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eW = T("div", { spacing: W().optional().default(0), $default: L().optional() }, (e10, r2) => {
  let { slots: i2 } = r2, n2 = eA.use();
  return (r3) => {
    var a2;
    return t(r3, { style: { paddingLeft: `${n2.indent}em`, marginTop: 0.5 * e10.spacing }, children: null === (a2 = i2.default) || void 0 === a2 ? void 0 : a2.call(i2) });
  };
})({ position: "relative", display: "block" }), eL = T("div", { schema: L() }, (e10, r2) => {
  let {} = r2;
  return (r3) => {
    var i2;
    let n2 = null !== (i2 = e10.schema.getMeta("description")) && void 0 !== i2 ? i2 : "";
    return 0 == n2.length ? null : t(r3, { children: t(K, { text: n2 }) });
  };
})({ position: "relative", pt: 4, "& p": { my: 1, "&::before": { content: '"// "', fontFamily: "code" }, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12 }), eR = (i2) => {
  let { name: n2, value: a2, extra: o2 } = i2;
  return "" == a2 ? null : t(eU, { children: e(eV, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(eV, { sx: { color: "sys.primary" }, children: `@${n2}(` }), `${a2}`, Object.entries(null != o2 ? o2 : {}).map((i3) => {
    let [n3, a3] = i3;
    return e(r, { children: [e(eV, { sx: { opacity: 0.5 }, children: [",", " "] }), t(eV, { sx: { opacity: 0.5 }, children: n3 }), e(eV, { sx: { opacity: 0.5 }, children: [":", " "] }), t(eV, { sx: { opacity: 0.7 }, children: a3 })] });
  }), t(eV, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eA = h(() => ({ indent: 0 }), { name: "IntentContext" }), eJ = _({ $default: L().optional() }, (e10, r2) => {
  let {} = e10, { slots: i2 } = r2, n2 = eA.use();
  return () => {
    var e11;
    return t(eA, { value: { indent: n2.indent + 1 }, children: null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2) });
  };
}), eM = m({ schema: L() }, (e10) => () => t(r, { children: t(eQ, { schema: e10.schema }) })), eH = m({ schema: L() }, (i2) => {
  let n2 = i2.schema;
  return n2.getSchema("$ref") ? t(eM, { schema: n2.unwrap }) : () => {
    var i3, a2, o2, l2, d2, s2, c2, p2;
    switch (n2.type) {
      case "union":
        return t(r, { children: null === (i3 = n2.getSchema("oneOf")) || void 0 === i3 ? void 0 : i3.map((i4, n3) => e(r, { children: [n3 > 0 && e(eV, { children: [" ", " | ", " "] }), t(eQ, { schema: i4 })] })) });
      case "intersection":
        return t(eV, { children: null === (a2 = n2.getSchema("allOf")) || void 0 === a2 ? void 0 : a2.filter((e10) => !Object.keys(e10).length).map((i4, n3) => e(r, { children: [n3 > 0 && e(eV, { children: [" ", "&", " "] }), t(eQ, { schema: i4 })] })) });
      case "array":
        return e(eV, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(eV, { children: "Array<" }), t(eQ, { schema: null !== (o2 = n2.getSchema("items")) && void 0 !== o2 ? o2 : A() }), t(eV, { children: ">" })] });
      case "object":
        return e(r, { children: [t(eV, { children: "{" }), t(eG, { children: t(r, { children: Object.entries(null !== (l2 = n2.getSchema("properties")) && void 0 !== l2 ? l2 : {}).map((i4) => {
          var a3;
          let [o3, l3] = i4;
          return l3 ? t(r, { children: e(eU, { spacing: 2, children: [t(eK, { schema: l3 }), e(eV, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [t(eE, { nullable: l3.getSchema("nullable"), deprecated: l3.getSchema("deprecated"), optional: !(null !== (a3 = n2.getSchema("required")) && void 0 !== a3 ? a3 : []).includes(o3), children: o3 }), t(eV, { sx: { mr: "1em" }, children: ":" }), t(eQ, { schema: l3 })] })] }) }) : null;
        }) }) }), t(eV, { children: "}" })] });
      case "record":
        return e(r, { children: [t(eV, { children: "{" }), n2.getSchema("additionalProperties") && t(r, { children: t(eG, { children: e(eU, { children: [e(eV, { sx: { mr: 1 }, children: ["[K:", " "] }), t(eQ, { schema: null !== (d2 = n2.getSchema("propertyNames")) && void 0 !== d2 ? d2 : R() }), e(eV, { sx: { mr: 1 }, children: ["]:", " "] }), t(eQ, { schema: null !== (s2 = n2.getSchema("additionalProperties")) && void 0 !== s2 ? s2 : A() })] }) }) }), t(eV, { children: "}" })] });
      case "enums": {
        let i4 = null !== (c2 = n2.getSchema("enum")) && void 0 !== c2 ? c2 : [];
        if (1 == i4.length)
          return t(eV, { children: JSON.stringify(i4[0]) });
        let a3 = "any";
        return i4.length > 0 && (a3 = typeof i4[0]), e(r, { children: [t(eV, { sx: { fontWeight: "bold" }, children: a3 }), t(eG, { children: i4.map((e10, r2) => {
          var i5;
          return t(eR, { name: "enum", value: `${e10}`, extra: (null === (i5 = n2.getMeta("enumLabels")) || void 0 === i5 ? void 0 : i5[r2]) ? { label: JSON.stringify(n2.getMeta("enumLabels")[r2]) } : {} }, e10);
        }) })] });
      }
    }
    let [u2, h2, m2] = [n2.type, n2.getSchema("format"), n2.getSchema("default")];
    return e(r, { children: [t(eV, { sx: { fontWeight: "bold" }, children: u2 || "any" }), e(eG, { children: [h2 && t(eR, { name: "format", value: h2 }), !J(m2) && t(eR, { name: "default", value: m2 }), !ez(n2) && t(eR, { name: "validate", value: (p2 = n2).getSchema("x-tag-validate") ? p2.getSchema("x-tag-validate") : ez(p2) ? p2.getSchema("pattern") ? `@r/${String(p2.getSchema("pattern"))}/` : `@${p2.getSchema("exclusiveMinimum")} ? "(" : "["}${p2.getSchema("minProperties") ? p2.getSchema("minProperties") : p2.getSchema("minItems") ? p2.getSchema("minItems") : p2.getSchema("minimum") ? p2.getSchema("minimum") : p2.getSchema("minLength") ? p2.getSchema("minLength") : "string" === p2.type ? "0" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${p2.getSchema("maxProperties") ? p2.getSchema("maxProperties") : p2.getSchema("maxItems") ? p2.getSchema("maxItems") : p2.getSchema("maximum") ? p2.getSchema("maximum") : p2.getSchema("maxLength") ? p2.getSchema("maxLength") : "string" === p2.type && "uint64" === p2.getSchema("format") ? "19" : ("number" === p2.type || "integer" === p2.type) && p2.getSchema("format") ? `${Math.pow(2, Number(p2.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${p2.getSchema("exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
});
function ez(e10) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((t2) => e10.getSchema(t2));
}
let eV = Object.assign(eB, { displayName: "Token" }), eE = Object.assign(eP, { displayName: "PropName" }), eU = Object.assign(eW, { displayName: "Line" }), eK = Object.assign(eL, { displayName: "Description" }), eG = Object.assign(eJ, { displayName: "Indent" }), eQ = Object.assign(eH, { displayName: "SchemaView" }), eX = m({ code: L(), response: L() }, (i2) => {
  let n2 = eO.use();
  return () => {
    var a2, o2;
    return e(eY, { children: [t(eZ, { "data-failed": function(e10) {
      try {
        return Number(e10) >= 400;
      } catch (e11) {
        return false;
      }
    }(i2.code), children: i2.code }), e(B, { sx: { pl: "4em" }, children: [t(r, { children: null === (a2 = i2.response["x-status-return-errors"]) || void 0 === a2 ? void 0 : a2.map((e10) => function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e11.startsWith("StatusError{") ? e11.slice(12, e11.length - 1).split(",").reduce((e12, t2) => {
        let [r2, i3] = t2.split("=", 2);
        return eb(r2) || eb(i3) ? e12 : { ...e12, [r2]: i3 };
      }, {}) : null;
    }(e10)).map((r2) => r2 ? t(B, { sx: { mb: 16 }, children: e(eU, { spacing: 0, children: [e(eV, { children: ["{", " "] }), t(eG, { children: Object.entries(r2).map((r3) => {
      let [i3, n3] = r3;
      return "code" === i3 ? null : e(eU, { children: [t(eE, { children: i3 }), t(eV, { children: ": " }), t(eV, { children: n3 })] });
    }) }), e(eV, { children: [" ", "}"] })] }) }) : null) }), t(r, { children: Object.entries(null !== (o2 = i2.response.content) && void 0 !== o2 ? o2 : {}).map((r2) => {
      let [i3, { schema: a3 }] = r2;
      return e(e0, { children: [t(eU, { spacing: 0, children: t(eQ, { schema: M.decode(a3, (e10) => {
        var t2;
        return [null !== (t2 = n2.schema(e10)) && void 0 !== t2 ? t2 : {}, H(e10)];
      }) }) }), t("div", { "data-content-type": true, children: i3 })] });
    }) })] })] });
  };
}), eY = T("section")({}), eZ = T("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), e0 = T("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), e1 = Object.assign(eX, { displayName: "ResponseView" }), e4 = T("div", { valued: P().optional(), focus: P().optional(), invalid: P().optional(), disabled: P().optional(), $label: L().optional(), $hint: L().optional(), $supporting: L().optional(), $leading: L().optional(), $trailing: L().optional(), $default: L() }, (r2, n2) => {
  let { slots: a2 } = n2;
  return (n3) => {
    var o2, l2, d2, s2;
    let c2 = r2.valued, p2 = r2.invalid, u2 = r2.disabled, h2 = (null !== (s2 = null === (o2 = a2.default) || void 0 === o2 ? void 0 : o2.call(a2)) && void 0 !== s2 ? s2 : []).map((e10) => {
      if ("input" === e10.type) {
        var t2, r3, n4, a3, o3, l3;
        return c2 = !!(null !== (o3 = null !== (a3 = null === (t2 = e10.props) || void 0 === t2 ? void 0 : t2.value) && void 0 !== a3 ? a3 : null === (r3 = e10.props) || void 0 === r3 ? void 0 : r3.placeholder) && void 0 !== o3 ? o3 : c2), u2 = null !== (l3 = null === (n4 = e10.props) || void 0 === n4 ? void 0 : n4.disabled) && void 0 !== l3 ? l3 : u2, i(e10, { disabled: u2 });
      }
      return i(e10);
    });
    return e(n3, { "data-valued": c2, "data-invalid": p2, "data-disabled": u2, "data-focus-within": r2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [e("div", { "data-input-container": true, children: [e("div", { "data-input-decorator-container": true, children: [t("div", { "data-input-decorator-leading": true }), t("div", { "data-input-decorator-label": true, children: t("div", { "data-input-label": true, children: null === (l2 = a2.label) || void 0 === l2 ? void 0 : l2.call(a2) }) }), t("div", { "data-input-decorator-trailing": true })] }), e("div", { "data-input-row": true, children: [a2.leading && t(e2, { role: "leading", children: a2.leading() }), h2, a2.trailing && t(e2, { role: "trailing", children: a2.trailing() })] })] }), a2.supporting && t("div", { "data-input-supporting": true, children: null === (d2 = a2.supporting) || void 0 === d2 ? void 0 : d2.call(a2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch" }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, pointerEvents: "none", rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1 }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), e2 = T("div", { role: z(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), e8 = Object.assign(e4, { displayName: "TextField" }), e6 = m({ field$: L(), readOnly: P().optional() }, (e10, r2) => {
  let {} = r2, i2 = et(eb(e10.field$.input) ? "" : eh.stringify(e10.field$.input));
  return () => t(B, { sx: { position: "relative", width: "100%", minHeight: "8em", overflow: "hidden", py: 8 }, children: t(er, { value: i2, children: t(e3, { field$: e10.field$, schema: e10.field$.typedef }) }) });
}), e3 = m({ field$: L(), schema: L() }, (e10) => {
  let r2 = er.use();
  return l(e10.schema$, S((e11) => r2.use(() => [em(), ed({ override: [ef(e11)] }), es.of([{ key: "Shift-Space", shift: ec }]), ep(ey(e11)), es.of([eu])])), y()), ei(() => ea.updateListener.of((t2) => {
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
  })), () => t(en, {});
}), e5 = Object.assign(e6, { displayName: "JSONCueEditorInput" }), e7 = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), e9 = (r2) => {
  let { field: i2, value: n2 } = r2;
  return e(B, { component: "span", sx: { display: "block" }, children: [e(B, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [i2, ":"] }), t("span", { children: n2 })] });
}, te = (t2) => {
  let { method: r2, url: i2, params: n2 } = t2, a2 = D(n2);
  return e(B, { component: "span", sx: { fontWeight: "bold" }, children: [r2.toUpperCase(), " ", e(B, { component: "span", sx: { fontWeight: "medium" }, children: [i2, a2 ? `?${a2}` : ""] }), "  HTTP/*"] });
}, tt = (e10, t2) => {
  let r2 = (t3, i2) => i2 instanceof File || i2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${i2.name ? `; filename="${i2.name}"` : ""}
Content-Type: ${i2.type}

[File Content]
` : V(i2) ? i2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${E(i2) ? JSON.stringify(i2) : String(i2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, i2] = e11;
    return r2(t3, i2);
  }).join("\n") + `${e10}--`;
}, tr = _({ $default: L().optional() }, (e10, r2) => {
  let {} = e10, { slots: i2 } = r2;
  return () => {
    var e11;
    return t(B, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: t(B, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: t("code", { children: null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2) }) }) });
  };
}), ti = _({ request: L() }, (i2) => () => {
  let n2 = i2.request;
  return e(tr, { children: [t(te, { ...n2 }), t(r, { children: Object.entries({ ...e7(), ...n2.headers }).toSorted().map((e10) => {
    let [r2, i3] = e10;
    return t(e9, { field: r2, value: i3 }, r2);
  }) }), n2.body && e(r, { children: [t("br", {}), function(e10) {
    if (tl(e10.headers).includes("multipart/form-data")) {
      let t2 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e10.headers = { ...e10.headers, "Content-Type": `multipart/form-data; boundary=${t2}` }, tt(t2, e10.body);
    }
    return tl(e10.headers).includes("application/x-www-form-urlencoded") ? D(e10.body) : td(e10.headers) ? JSON.stringify(e10.body, null, 2) : e10.body;
  }(n2)] })] });
}), tn = (e10) => Buffer.from(e10).toString("utf8"), ta = (e10, t2) => {
  let r2 = new Uint8Array(e10), i2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++)
    i2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(i2)}`;
}, to = _({ response: L() }, (i2, n2) => {
  let {} = n2;
  return () => {
    let n3 = i2.response;
    return tl(n3.headers).includes("image/") ? t("div", { children: t("img", { src: ta(n3.body, tl(n3.headers)), alt: "" }) }) : e(tr, { children: [e("span", { children: ["HTTP/* ", n3.status] }), t("br", {}), n3.headers && t(r, { children: Object.entries(n3.headers).map((e10) => {
      let [r2, i3] = e10;
      return t(e9, { field: r2, value: i3 }, r2);
    }) }), t("br", {}), n3.body ? td(n3.headers) ? JSON.stringify(n3.body, null, 2) : `${tn(n3.body)}` : null] });
  };
});
function tl() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10))
    if ("content-type" == t2.toLowerCase())
      return r2;
  return "";
}
let td = (e10) => tl(e10).includes("application/json"), ts = Object.assign(ti, { displayName: "HttpRequest" }), tc = Object.assign(to, { displayName: "HTTPResponse" }), tp = m({ operationID: R() }, (e10) => l(eO.use().response$(e10.operationID), b((e11) => t(tu, { children: t(tc, { response: e11 }) })))), tu = T("section")({ maxHeight: "40vh", overflow: "auto" }), th = Object.assign(tp, { displayName: "ResponsePreview" }), tm = m({ operation: L(), $default: L() }, (r2, i2) => {
  var n2, a2, o2, d2;
  let { slots: s2 } = i2, c2 = eO.use(), p2 = {};
  for (let e10 of null !== (n2 = r2.operation.parameters) && void 0 !== n2 ? n2 : []) {
    let t2 = M.decode(e10.schema, (e11) => {
      var t3;
      return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, H(e11)];
    }).use(G(`${e10.name}, in=${JSON.stringify(e10.in)}`));
    e10.required || (t2 = t2.optional()), ["object", "array"].includes(null !== (a2 = e10.schema.type) && void 0 !== a2 ? a2 : "") ? p2[e10.name] = t2.use(Q(e5)) : p2[e10.name] = t2;
  }
  if (r2.operation.requestBody) {
    let e10 = Object.entries(null !== (o2 = r2.operation.requestBody.content) && void 0 !== o2 ? o2 : {})[0];
    if (e10) {
      let [t2, r3] = e10, i3 = M.decode(null !== (d2 = r3.schema) && void 0 !== d2 ? d2 : {}, (e11) => {
        var t3;
        return [null !== (t3 = c2.schema(e11)) && void 0 !== t3 ? t3 : {}, H(e11)];
      }).use(G(`body, content-type = ${JSON.stringify(t2)}`));
      t2.includes("json") ? p2.body = i3.use(Q(e5)) : t2.includes("octet-stream") ? p2.body = i3.use(Q(tx)) : p2.body = i3;
    }
  }
  let u2 = w(), h2 = O(), m2 = X.of(U(p2), (() => {
    try {
      var e10;
      let t2 = h2.query.params;
      return JSON.parse(atob(null !== (e10 = Array.isArray(t2) ? t2[0] : t2) && void 0 !== e10 ? e10 : ""));
    } catch (e11) {
    }
    return {};
  })());
  l(m2, v((e10) => {
    c2.request(r2.operation.operationId, e10);
  }), v((e10) => {
    u2.replace({ query: { params: btoa(JSON.stringify(e10)) } });
  }), y());
  let f2 = l(m2.inputs$, b((e10) => {
    let i3 = c2.asRequestConfigCreator(r2.operation.operationId);
    return i3 ? t(ts, { request: i3(e10) }) : null;
  }));
  return () => {
    var i3;
    return e(B, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e10) => {
      e10.preventDefault(), m2.submit();
    }, children: [t(B, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 16, height: "100%", overflow: "auto" }, children: [...m2.fields(m2.typedef)].map((e10) => t(tf, { field$: e10 })) }), t(B, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: e(B, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [f2, t(B, { sx: { px: 8 }, children: t(Y, { type: "submit", children: "发起请求" }) }), t(th, { operationID: r2.operation.operationId }), t(B, { sx: { flex: 1, overflow: "auto" }, children: null === (i3 = s2.default) || void 0 === i3 ? void 0 : i3.call(s2) })] }) })] }, r2.operation.operationId);
  };
}), tf = m({ field$: L() }, (r2, i2) => {
  let { field$: a2 } = r2, { render: o2 } = i2;
  return n(() => {
    a2.destroy();
  }), l(I([a2, a2.input$]), o2((r3) => {
    var i3, n2, o3, l2, d2;
    let [s2, c2] = r3, p2 = null !== (o3 = null === (i3 = a2.meta) || void 0 === i3 ? void 0 : i3.input) && void 0 !== o3 ? o3 : tb, u2 = null !== (l2 = null === (n2 = a2.meta) || void 0 === n2 ? void 0 : n2.readOnlyWhenInitialExist) && void 0 !== l2 && l2 && !!s2.initial;
    return t(e8, { valued: !eb(null != c2 ? c2 : s2.initial), invalid: !!s2.error, focus: !!s2.focus, $label: e("span", { children: [null !== (d2 = a2.meta.label) && void 0 !== d2 ? d2 : a2.name, a2.optional ? "（非必填）" : ""] }), $supporting: e(eU, { children: [t(eK, { schema: a2.typedef }), t(eQ, { schema: a2.typedef })] }), $trailing: p2.$trailing, children: t(p2, { field$: a2, readOnly: u2 }) });
  }));
}), ty = _({ readOnly: P().optional(), field$: L() }, (e10) => () => {
  let { readOnly: r2, field$: i2, ...n2 } = e10;
  return t("input", { ...n2, "data-input": true, type: "text", readonly: r2, name: i2.name, value: i2.input, onChange: (e11) => {
    i2.update(e11.target.value);
  }, onFocus: () => i2.focus(), onBlur: () => i2.blur() });
}), tv = m({ field$: L(), readOnly: P().optional(), accept: R().optional() }, (r2) => {
  let i2 = j(null);
  return l(i2, v((e10) => {
    e10 && r2.field$.update(e10);
  }), k()), () => {
    var n2;
    let { readOnly: a2, accept: o2 } = r2;
    return e(B, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [t("input", { type: "file", name: r2.field$.name, readonly: a2, accept: o2, "data-file-input": true, onChange: (e10) => {
      var t2;
      let r3 = null === (t2 = e10.target.files) || void 0 === t2 ? void 0 : t2[0];
      r3 && (i2.value = r3);
    } }), t(ee, { path: Z }), t("span", { children: null === (n2 = i2.value) || void 0 === n2 ? void 0 : n2.name })] });
  };
}), tg = Object.assign(tm, { displayName: "RequestBuilder" }), tb = Object.assign(ty, { displayName: "TextInput" }), tx = Object.assign(tv, { displayName: "FileSelectInput" }), t$ = m({ operationId: R() }, (i2, n2) => {
  let {} = n2, a2 = eO.use(), o2 = l(i2.operationId$, d((e10) => a2.operation$(e10))), s2 = l(o2, C((e10) => !!e10)), c2 = l(s2, b((r2) => {
    var i3;
    return e(tS, { sx: { containerStyle: null !== (i3 = { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[r2.method]) && void 0 !== i3 ? i3 : "sys.secondary-container" }, children: [t("div", { "data-operation-method": true, children: r2.method }), e("div", { "data-operation-desc": true, children: [t("div", { "data-operation-path": true, children: r2.path }), e("div", { "data-operation-summary": true, children: [r2.summary, " ", r2.operationId != r2.summary ? r2.operationId : ""] })] })] });
  })), p2 = l(s2, b((e10) => t("span", { children: e10.description }))), u2 = l(s2, b((e10) => {
    var i3;
    return t(tg, { operation: e10, children: t(r, { children: Object.entries(null !== (i3 = e10.responses) && void 0 !== i3 ? i3 : {}).map((e11) => {
      let [r2, i4] = e11;
      return t(e1, { code: r2, response: i4 }, r2);
    }) }) }, e10.operationId);
  }));
  return l(o2, b((r2) => r2 ? e(t_, { children: [c2, e(B, { sx: { flex: 1, overflow: "hidden", py: 24, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [p2, t(B, { sx: { flex: 1, overflow: "auto" }, children: u2 })] })] }, r2.operationId) : null));
}), t_ = T("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tS = T("div")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } }), tw = Object.assign(t$, { displayName: "OperationView" });
export {
  eO as O,
  eT as a,
  tw as b
};
