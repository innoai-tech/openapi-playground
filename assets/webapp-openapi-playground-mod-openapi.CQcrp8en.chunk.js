const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~mermaid.esm.min.DZ_2iELU.chunk.js","assets/lib-nodepkg-typedef.wThrm2fx.chunk.js","assets/vendor-min-mermaid~chunk-6CAUGOKZ.CGKtefZU.chunk.js","assets/vendor-min-mermaid~chunk-3YFHLAX3.BuB3QxH5.chunk.js","assets/vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~chunk-7LIB5WBN.mzbHd62r.chunk.js","assets/vendor-min-mermaid~chunk-54VS5GG6.BwAH1iPT.chunk.js","assets/vendor-min-mermaid~chunk-ZUCAP7FR.6sCyN4jm.chunk.js","assets/vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js","assets/vendor-min-mermaid~chunk-D4BOYBYT.DSjM26Cl.chunk.js","assets/vendor-min-mermaid~chunk-AFC6EC46.CY61scRQ.chunk.js","assets/vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.C-4BwBYe.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.CV_wMLRV.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _ew_instances, a_get, r_fn;
import { S as e, s as t, b as a, e as r, f as i, h as n, j as o, k as l, o as s, _ as d } from "./lib-nodepkg-typedef.wThrm2fx.chunk.js";
import { I as p, r as c, c as m, a as u, o as h, e as y, s as f, v as b, h as g, j as x, A as v, R as w, d as $, F as _, b as N, B as S, C as I, D as P, k as O } from "./lib-nodepkg-vuekit.BOSnaom6.chunk.js";
import { c as k, a as C, p as j, t as D } from "./vendor-innoai-tech-fetcher.CtFGdZwe.chunk.js";
import { B as T, s as q, a as E, m as L, E as B, o as R, S as F, k as W, t as M, O as J, l as A, c as H, e as V, n as z } from "./vendor-rxjs.BHYITtPb.chunk.js";
import { w as U, g as K, a as G, x as Q, d as X, e as Y } from "./vendor-innoai-tech-lodash.BIpaKHXU.chunk.js";
import { s as Z, B as ee, v as et, a as ea } from "./lib-nodepkg-vueuikit.CfNSk5ff.chunk.js";
import { M as er } from "./lib-nodepkg-vuemarkdown.BDgwosmJ.chunk.js";
import { I as ei, D as en, m as eo, T as el, F as es, f as ed, g as ep, h as ec, i as em, a as eu } from "./lib-nodepkg-vuematerial.66s2WbJK.chunk.js";
import { l as eh, h as ey, i as ef, F as eb } from "./lib-nodepkg-vueformdata.r_-rYdFx.chunk.js";
import { J as eg, a as ex, b as ev } from "./lib-nodepkg-jsoneditor.t8cY6yGI.chunk.js";
const _ew = class _ew extends p {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ew_instances);
    __privateAdd(this, _e, k({ paramsSerializer: j, transformRequestBody: D }));
    __privateAdd(this, _t, new T(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _ew({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return c(__privateGet(this, _t), q((t2) => {
      let a2 = t2.get(e10);
      return a2 ? L(a2, a2.error$) : B;
    }));
  }
  requesting$(e10) {
    return c(__privateGet(this, _t), q((t2) => {
      var _a;
      return ((_a = t2.get(e10)) == null ? void 0 : _a.requesting$) ?? R(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var _a;
    let t2 = __privateMethod(this, _ew_instances, r_fn).call(this, e10);
    if (!t2) return null;
    let a2 = Object.keys(((_a = t2.requestBody) == null ? void 0 : _a.content) ?? {})[0];
    return (e11) => {
      var _a2, _b;
      return { method: t2.method, url: __privateGet(this, _ew_instances, a_get) + e_(t2.path, e11), params: U(e11, (_a2 = t2.parameters) == null ? void 0 : _a2.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...U(e11, (_b = t2.parameters) == null ? void 0 : _b.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...a2 ? { "Content-Type": a2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t2) {
    let a2 = __privateGet(this, _t).value.get(e10);
    if (!a2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3) return;
      a2 = C(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, a2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    a2.next(t2);
  }
  operation$(e10) {
    return c(this, q((t2) => {
      for (let a2 of e$(t2, { operationId: e10 })) if (a2) return R(a2);
      return R(null);
    }));
  }
  operations$(e10) {
    return c(this, q((t2) => R([...e$(t2, e10)])));
  }
  schema$(e10) {
    var _a;
    let t2 = ((_a = e10.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    return c(this, q((e11) => t2 ? R(K(e11, t2) ?? null) : R(null)), E((e11) => e11 ? { ...e11, $id: t2[t2.length - 1] } : e11));
  }
  schema(e10) {
    var _a;
    let t2 = ((_a = e10.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    if (t2) return K(this.value, t2) ?? void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_ew_instances = new WeakSet();
a_get = function() {
  var _a, _b;
  return ((_b = (_a = this.value.servers) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) ?? "";
};
r_fn = function(e10) {
  for (let t2 of e$(this.value, { operationId: e10 })) if (t2) return t2;
  return null;
};
let ew = _ew;
function* e$(e10, t2) {
  var _a;
  for (let [a2, r2] of Object.entries(e10.paths)) for (let [e11, i2] of Object.entries(r2)) if ("OpenAPI" != i2.operationId && "OpenAPIView" != i2.operationId && (!t2.tag || (i2.tags ?? []).includes(t2.tag))) {
    if (t2.operationId) {
      if (t2.operationId.startsWith("*")) {
        if (!i2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase())) continue;
      } else if (i2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
    }
    yield { ...i2, method: e11, path: a2, group: ((_a = i2.tags) == null ? void 0 : _a[0]) ?? "" };
  }
}
let e_ = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, a2) => [].concat(t2[a2] || e11).join(","));
}, eN = m(() => ew.empty(), { name: "OpenAPI" }), eS = (e10) => (t2, a2) => t2[e10] == a2[e10] ? 0 : t2[e10] < a2[e10] ? -1 : 1, eI = u((e10, t2) => {
  let a2 = eN.use(), r2 = new p({ operationId: void 0 }), i2 = new F();
  c(i2, W(200), M((e11) => {
    r2.next((t3) => {
      t3.operationId = `*${e11 ?? ""}`;
    });
  }), f());
  let n2 = h(null);
  c(n2, q((e11) => {
    if (e11) {
      let t3 = (t4) => {
        t4 && e11.scrollTo({ top: t4.offsetTop - e11.offsetTop });
      };
      return new J(() => {
        let a3 = new MutationObserver((e12) => {
          for (let a4 of e12) if ("attributes" === a4.type) {
            let e13 = a4.target;
            e13.classList.contains("router-link-active") && t3(e13);
          }
        });
        return a3.observe(e11, { attributes: true, subtree: true }), setTimeout(() => {
          t3(e11.querySelector(".router-link-active"));
        }, 100), () => {
          a3.disconnect();
        };
      });
    }
    return B;
  }), b());
  let o2 = c(r2, q((e11) => a2.operations$(e11)), g((e11) => {
    let t3 = Object.groupBy(e11, (e12) => e12.group);
    return y(eO, { children: [x(ek, { children: x("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e12) => {
      i2.next(e12.target.value);
    } }) }), x(eC, { sx: { flex: 1, overflow: "scroll" }, ref: n2, children: Object.entries(t3).toSorted().map((e12) => {
      let [t4, a3] = e12;
      return y("div", { "data-nav-group": true, children: [x("div", { "data-nav-group-heading": true, children: t4 }), x("div", { "data-nav-group-contents": true, children: a3 == null ? void 0 : a3.toSorted(eS("operationId")).map((e13) => y(eD, { component: v, to: `/operations/${e13.operationId}`, children: [x(ee, { "data-operation-method": true, sx: { color: { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e13.method] ?? "sys.secondary" }, children: e13.method }), y("div", { "data-operation-desc": true, children: [x("div", { "data-operation-id": true, children: e13.operationId }), e13.summary ? x("div", { "data-operation-summary": true, children: e13.summary != e13.operationId ? e13.summary : x("span", { children: " " }) }) : void 0] })] })) })] });
    }) })] });
  }));
  return () => y(eP, { children: [o2, x(ej, { children: x(w, {}) })] });
}, { displayName: "OpenAPIView" }), eP = Z("div", { displayName: "Container" })({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eO = Z("aside", { displayName: "NavContainer" })({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), ek = Z("div", { displayName: "NavSearchBox" })({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eC = Z("div", { displayName: "Nav" })({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), ej = Z("main", { displayName: "Main" })({ flex: 1, overflow: "hidden" }), eD = Z("a", { displayName: "OperationListItem" })({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eT = Z("div", { displayName: "Token" })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eq = Z("div", { displayName: "PropName", props: ["deprecated", "optional", "nullable"] })({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eE = Z("div", (e10, t2) => {
  let { slots: a2 } = t2, r2 = eF.use();
  return (t3) => {
    var _a;
    return x(t3, { style: { paddingLeft: `${r2.indent}em`, marginTop: (e10.spacing ?? 0) * 0.5 }, children: (_a = a2.default) == null ? void 0 : _a.call(a2) });
  };
}, { displayName: "Line", props: ["spacing"] })({ position: "relative", display: "block" }), eL = Z("div", (t2, a2) => (a3) => {
  let r2 = e.metaProp(t2.schema, "title") ?? "", i2 = e.metaProp(t2.schema, "description") ?? "";
  return y(a3, { children: [r2, " ", i2 ? x(el, { title: x(eB, { children: x(er, { text: i2 }) }), children: x(ei, { path: eo }) }) : null] });
}, { displayName: "Description", props: ["schema"] })({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ei}`]: { width: 12, height: 12, overflow: "hidden" } }), eB = Z("div", { displayName: "MarkdownContainer" })({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eR = (e10) => {
  let { name: t2, value: a2, extra: r2 } = e10;
  return "" == a2 ? null : x(eE, { children: y(eT, { sx: { opacity: 0.7, wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [x(eT, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${a2}`, Object.entries(r2 ?? {}).map((e11) => {
    let [t3, a3] = e11;
    return y(_, { children: [y(eT, { sx: { opacity: 0.5 }, children: [",", " "] }), x(eT, { sx: { opacity: 0.5 }, children: t3 }), y(eT, { sx: { opacity: 0.5 }, children: [":", " "] }), x(eT, { sx: { opacity: 0.7 }, children: a3 })] });
  }), x(eT, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eF = m(() => ({ indent: 0 }), { name: "IntentContext" }), eW = $((e10, t2) => {
  let { slots: a2 } = t2, r2 = eF.use();
  return () => {
    var _a;
    return x(eF, { value: { indent: r2.indent + 1 }, children: (_a = a2.default) == null ? void 0 : _a.call(a2) });
  };
}, { displayName: "Indent" });
class eM {
  constructor(e10, t2) {
    this.id = e10, this.parent = t2;
  }
  child(e10) {
    return new eM(e10, this);
  }
  safe(e10) {
    let t2 = this;
    for (; t2; ) {
      if (t2.id == e10) return false;
      t2 = t2.parent;
    }
    return true;
  }
}
let eJ = m(() => new eM("")), eA = u((t2) => {
  let a2 = eJ.use(), r2 = eF.use(), i2 = h(false);
  return () => {
    let n2 = t2.schema, o2 = e.schemaProp(t2.schema, "$ref"), l2 = "intersection" == (n2 = e.schemaProp(t2.schema, e.unwrap)()).type || "object" == n2.type || "union" == n2.type || "record" == n2.type || "array" == n2.type || "union" == n2.type, s2 = a2.safe(o2) && y(_, { children: [x("span", { children: " " }), x(eV, { schema: n2 })] });
    return x(eJ, { value: a2.child(o2), children: l2 ? r2.indent < 3 ? y(_, { children: [x(v, { to: `#${o2}`, children: x(eT, { id: o2, children: o2 }) }), r2.indent < 3 && s2] }) : y(_, { children: [x("a", { href: `#${o2}`, onClick: (e10) => {
      e10.preventDefault(), i2.next(true);
    }, children: x(eT, { id: o2, children: o2 }) }), a2.safe(o2) && x(en, { isOpen: i2.value, onClose: () => {
      i2.next(false);
    }, children: x(eH, { children: y(eE, { children: [x(eT, { children: o2 }), x(eF, { value: { indent: 0 }, children: s2 })] }) }) })] }) : s2 });
  };
}, { displayName: "SchemaViewLink", props: ["schema"] }), eH = Z("div", { displayName: "DialogContainer" })({ display: "flex", containerStyle: "sys.surface", height: "100vh", width: "36vw", roundedLeft: "sm", px: 16, py: 36, top: 0, right: 0, position: "absolute", overflow: "auto" }), eV = u((r2) => {
  let i2 = r2.schema;
  return e.schemaProp(i2, "$ref") ? x(eA, { schema: i2 }) : () => {
    var _a, _b;
    var r3;
    switch (i2.type) {
      case "union":
        return x(_, { children: (_a = e.schemaProp(i2, "oneOf")) == null ? void 0 : _a.map((e10, t2) => y(_, { children: [t2 > 0 && y(eT, { children: [" ", " | ", " "] }), x(eV, { schema: e10 })] })) });
      case "intersection":
        return x(eT, { children: (_b = e.schemaProp(i2, "allOf")) == null ? void 0 : _b.filter((e10) => !Object.keys(e10).length).map((e10, t2) => y(_, { children: [t2 > 0 && y(eT, { children: [" ", "&", " "] }), x(eV, { schema: e10 })] })) });
      case "array":
        return y(eT, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [x(eT, { children: "Array<" }), x(eV, { schema: e.schemaProp(i2, "items") ?? a() }), x(eT, { children: ">" })] });
      case "object":
        return y(_, { children: [x(eT, { children: "{" }), x(eW, { children: x(_, { children: Object.entries(e.schemaProp(i2, "properties") ?? {}).map((t2) => {
          let [a2, r4] = t2;
          return r4 ? x(_, { children: y(eE, { spacing: 2, children: [x(eL, { schema: r4 }), y(eT, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [x(eq, { nullable: e.schemaProp(i2, "nullable"), deprecated: e.schemaProp(i2, "deprecated"), optional: !(e.schemaProp(i2, "required") ?? []).includes(a2), children: a2 }), x(eT, { sx: { mr: "1em" }, children: ":" }), x(eV, { schema: r4 })] })] }) }) : null;
        }) }) }), x(eT, { children: "}" })] });
      case "record":
        return y(_, { children: [x(eT, { children: "{" }), e.schemaProp(i2, "additionalProperties") && x(_, { children: x(eW, { children: y(eE, { children: [y(eT, { sx: { mr: 1 }, children: ["[K:", " "] }), x(eV, { schema: e.schemaProp(i2, "propertyNames") ?? t() }), y(eT, { sx: { mr: 1 }, children: ["]:", " "] }), x(eV, { schema: e.schemaProp(i2, "additionalProperties") ?? a() })] }) }) }), x(eT, { children: "}" })] });
      case "enums": {
        let t2 = e.schemaProp(i2, "enum") ?? [];
        if (1 == t2.length) return x(eT, { children: JSON.stringify(t2[0]) });
        let a2 = "any";
        return t2.length > 0 && (a2 = typeof t2[0]), y(_, { children: [x(eT, { sx: { fontWeight: "bold" }, children: a2 }), x(eW, { children: t2.map((t3, a3) => {
          var _a2;
          return x(eR, { name: "enum", value: `${t3}`, extra: ((_a2 = e.metaProp(i2, "enumLabels")) == null ? void 0 : _a2[a3]) ? { label: JSON.stringify(e.metaProp(i2, "enumLabels")[a3]) } : {} }, t3);
        }) })] });
      }
    }
    let [n2, o2, l2] = [i2.type, e.schemaProp(i2, "format"), e.schemaProp(i2, "default")];
    return y(_, { children: [x(eT, { sx: { fontWeight: "bold" }, children: n2 || "any" }), y(eW, { children: [o2 && x(eR, { name: "format", value: o2 }), !G(l2) && x(eR, { name: "default", value: l2 }), !ez(i2) && x(eR, { name: "validate", value: ez(r3 = i2) ? e.schemaProp(r3, "pattern") ? `@r/${String(e.schemaProp(r3, "pattern"))}/` : `@${e.schemaProp(r3, "exclusiveMinimum")} ? "(" : "["}${e.schemaProp(r3, "minProperties") ? e.schemaProp(r3, "minProperties") : e.schemaProp(r3, "minItems") ? e.schemaProp(r3, "minItems") : e.schemaProp(r3, "minimum") ? e.schemaProp(r3, "minimum") : e.schemaProp(r3, "minLength") ? e.schemaProp(r3, "minLength") : "string" === r3.type ? "0" : ("number" === r3.type || "integer" === r3.type) && e.schemaProp(r3, "format") ? `${Math.pow(2, Number(e.schemaProp(r3, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "-∞"},${e.schemaProp(r3, "maxProperties") ? e.schemaProp(r3, "maxProperties") : e.schemaProp(r3, "maxItems") ? e.schemaProp(r3, "maxItems") : e.schemaProp(r3, "maximum") ? e.schemaProp(r3, "maximum") : e.schemaProp(r3, "maxLength") ? e.schemaProp(r3, "maxLength") : "string" === r3.type && "uint64" === e.schemaProp(r3, "format") ? "19" : ("number" === r3.type || "integer" === r3.type) && e.schemaProp(r3, "format") ? `${Math.pow(2, Number(e.schemaProp(r3, "format").replace(/[^0-9]/g, "")) - 1) - 1}` : "+∞"}${e.schemaProp(r3, "exclusiveMaximum") ? ")" : "]"}` : "" })] })] });
  };
}, { displayName: "SchemaView", props: ["schema"] });
function ez(t2) {
  return ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"].some((a2) => e.schemaProp(t2, a2));
}
let eU = u({ code: r(), response: r() }, (e10) => {
  let t2 = eN.use();
  return () => y(eK, { children: [x(eG, { "data-failed": function(e11) {
    try {
      return Number(e11) >= 400;
    } catch (e12) {
      return false;
    }
  }(e10.code), children: e10.code }), y(ee, { sx: { pl: "4em" }, children: [x(_, { children: Q(e10.response["x-status-return-errors"] ?? []).map((e11) => function() {
    let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = e12.indexOf("{");
    return t3 > -1 ? e12.slice(t3 + 1, e12.length - 1).split(",").reduce((e13, t4) => (e13.joining ? e13.values[e13.values.length - 1] += "," + t4 : e13.values.push(t4), t4.split('"').length % 2 == 0 && (e13.joining = !e13.joining), e13), { values: [], joining: false }).values.reduce((e13, t4) => {
      let a2 = t4.indexOf("=");
      if (a2 < 0) return e13;
      let r2 = t4.slice(0, a2), i2 = t4.slice(a2 + 1);
      return G(r2) || G(i2) ? e13 : { ...e13, [r2]: JSON.parse(i2) };
    }, { code: e12.slice(0, t3) }) : null;
  }(e11)).map((e11) => e11 ? x(ee, { sx: { mb: 16 }, children: y(eE, { spacing: 0, children: [y(eT, { children: ["{", " "] }), x(eW, { children: Object.entries(e11).map((e12) => {
    let [t3, a2] = e12;
    return y(eE, { children: [x(eq, { children: t3 }), x(eT, { children: ": " }), x(eT, { children: JSON.stringify(a2) })] });
  }) }), y(eT, { children: [" ", "}"] })] }) }) : null) }), x(_, { children: Object.entries(e10.response.content ?? {}).map((e11) => {
    let [a2, { schema: r2 }] = e11;
    return y(eQ, { children: [x(eE, { spacing: 0, children: x(eV, { schema: i.decode(r2, (e12) => [t2.schema(e12) ?? {}, n(e12)]) }) }), x("div", { "data-content-type": true, children: a2 })] });
  }) })] })] });
}, { displayName: "ResponseView" }), eK = Z("section", { displayName: "ResponseSection" })({}), eG = Z("div", { displayName: "ResponseStatusCode" })({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eQ = Z("section", { displayName: "ResponseSchema" })({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eX = Z("div", (e10, t2) => {
  let { slots: a2 } = t2;
  return (t3) => {
    var _a, _b, _c;
    let r2 = e10.valued, i2 = e10.invalid, n2 = e10.disabled, o2 = (((_a = a2.default) == null ? void 0 : _a.call(a2)) ?? []).map((e11) => {
      var _a2, _b2, _c2;
      return "input" === e11.type ? (r2 = !!(((_a2 = e11.props) == null ? void 0 : _a2.value) ?? ((_b2 = e11.props) == null ? void 0 : _b2.placeholder) ?? r2), n2 = ((_c2 = e11.props) == null ? void 0 : _c2.disabled) ?? n2, N(e11, { disabled: n2 })) : N(e11);
    });
    return y(t3, { "data-valued": r2, "data-invalid": i2, "data-disabled": n2, "data-focus-within": e10.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [y("div", { "data-input-container": true, children: [y("div", { "data-input-decorator-container": true, children: [x("div", { "data-input-decorator-leading": true }), x("div", { "data-input-decorator-label": true, children: x("div", { "data-input-label": true, children: (_b = a2.label) == null ? void 0 : _b.call(a2) }) }), x("div", { "data-input-decorator-trailing": true })] }), y("div", { "data-input-row": true, children: [a2.leading && x(eY, { role: "leading", children: a2.leading() }), o2, a2.trailing && x(eY, { role: "trailing", children: a2.trailing() })] })] }), a2.supporting && x("div", { "data-input-supporting": true, children: (_c = a2.supporting) == null ? void 0 : _c.call(a2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch", zIndex: 1 }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", pointerEvents: "none" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1, pointerEvents: "none" }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eY = Z("div", { role: o(["leading", "trailing"]) }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), eZ = u((e10, t2) => {
  let a2 = eg.of(e10.field$.typedef, G(e10.field$.input) ? void 0 : e10.field$.input);
  return c(a2, A(1), M((t3) => {
    e10.field$.update(t3);
  }), f()), () => x(e0, { children: x(ex, { value: a2, children: x(ev, {}) }) });
}, { displayName: "JSONEditorInput", props: ["field$", "readOnly"] }), e0 = Z("div", { displayName: "JSONInputContainer" })({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), e1 = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), e2 = (e10) => {
  let { field: t2, value: a2 } = e10;
  return y(ee, { component: "span", sx: { display: "block" }, children: [y(ee, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), x("span", { children: a2 })] });
}, e4 = (e10) => {
  let { method: t2, url: a2, params: r2 } = e10, i2 = j(r2);
  return y(ee, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, y(ee, { component: "span", sx: { fontWeight: "medium" }, children: [a2, i2 ? `?${i2}` : ""] }), " HTTP/*"] });
}, e6 = (e10, t2) => {
  let a2 = (t3, r2) => r2 instanceof File || r2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${r2.name ? `; filename="${r2.name}"` : ""}
Content-Type: ${r2.type}

[File Content]
` : X(r2) ? r2.map((e11) => a2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${Y(r2) ? JSON.stringify(r2) : String(r2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, r2] = e11;
    return a2(t3, r2);
  }).join("\n") + `${e10}--`;
}, e8 = $({ $default: r().optional() }, (e10, t2) => {
  let { slots: a2 } = t2;
  return () => {
    var _a;
    return x(ee, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: x(ee, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: x("code", { children: (_a = a2.default) == null ? void 0 : _a.call(a2) }) }) });
  };
}, { displayName: "CodeView" }), e3 = $({ request: r() }, (e10) => () => {
  let t2 = e10.request;
  return y(e8, { children: [x(e4, { ...t2 }), x(_, { children: Object.entries({ ...e1(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, a2] = e11;
    return x(e2, { field: t3, value: a2 }, t3);
  }) }), t2.body && y(_, { children: [x("br", {}), function(e11) {
    if (e7(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, e6(t3, e11.body);
    }
    return e7(e11.headers).includes("application/x-www-form-urlencoded") ? j(e11.body) : te(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}, { displayName: "HttpRequest" }), e5 = (e10, t2) => {
  let a2 = new Uint8Array(e10), r2 = "";
  for (let e11 = a2.byteLength, t3 = 0; t3 < e11; t3++) r2 += String.fromCharCode(a2[t3]);
  return `data:${t2};base64,${btoa(r2)}`;
}, e9 = $({ response: r() }, (e10, t2) => () => {
  let t3 = e10.response;
  return e7(t3.headers).includes("image/") ? x("div", { children: x("img", { src: e5(t3.body, e7(t3.headers)), alt: "" }) }) : y(e8, { children: [y("span", { children: ["HTTP/* ", t3.status] }), x("br", {}), t3.headers && x(_, { children: Object.entries(t3.headers).map((e11) => {
    let [t4, a2] = e11;
    return x(e2, { field: t4, value: a2 }, t4);
  }) }), x("br", {}), t3.body ? te(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
}, { displayName: "HTTPResponse" });
function e7() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, a2] of Object.entries(e10)) if ("content-type" == t2.toLowerCase()) return a2;
  return "";
}
let te = (e10) => e7(e10).includes("application/json"), tt = u({ operationID: t() }, (e10) => c(eN.use().response$(e10.operationID), g((e11) => x(ta, { children: x(e9, { response: e11 }) }))), { displayName: "ResponsePreview" }), ta = Z("section", { displayName: "ResponseSection" })({ maxHeight: "40vh", overflow: "auto" }), tr = u((e10, t2) => {
  let { slots: a2 } = t2, r2 = eN.use(), o2 = {};
  for (let t3 of e10.operation.parameters ?? []) {
    let e11 = i.decode(t3.schema, (e12) => [r2.schema(e12) ?? {}, n(e12)]).use(eh(`${t3.name}, in=${JSON.stringify(t3.in)}`));
    t3.required || (e11 = e11.optional()), e11.use(ey(t3.schema.title)), ["object", "array"].includes(t3.schema.type ?? "") ? o2[t3.name] = e11.use(ef(eZ)) : o2[t3.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t3 = Object.entries(e10.operation.requestBody.content ?? {})[0];
    if (t3) {
      let [e11, a3] = t3, l3 = i.decode(a3.schema ?? {}, (e12) => [r2.schema(e12) ?? {}, n(e12)]).use(eh(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("json") ? o2.body = l3.use(ef(eZ)) : e11.includes("octet-stream") ? o2.body = l3.use(ef(to)) : o2.body = l3;
    }
  }
  let l2 = I(), d2 = P(), p2 = eb.of(s(o2), (() => {
    try {
      let e11 = d2.query.params;
      return JSON.parse(atob((Array.isArray(e11) ? e11[0] : e11) ?? ""));
    } catch (e11) {
    }
    return {};
  })());
  c(p2, M((t3) => {
    r2.request(e10.operation.operationId, t3);
  }), M((e11) => {
    l2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), f());
  let m2 = c(p2.inputs$, g((t3) => {
    let a3 = r2.asRequestConfigCreator(e10.operation.operationId);
    return a3 ? x(e3, { request: a3(t3) }) : null;
  }));
  return () => {
    var _a;
    return y(ee, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), p2.submit();
    }, children: [x(ee, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: [...p2.fields(p2.typedef)].map((e11) => x(ti, { field$: e11 })) }), x(ee, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: y(ee, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [m2, x(ee, { sx: { px: 8 }, children: x(es, { type: "submit", children: "发起请求" }) }), x(tt, { operationID: e10.operation.operationId }), x(ee, { sx: { flex: 1, overflow: "auto" }, children: (_a = a2.default) == null ? void 0 : _a.call(a2) })] }) })] }, e10.operation.operationId);
  };
}, { displayName: "RequestBuilder", props: ["operation"] }), ti = u((t2, a2) => {
  let { field$: r2 } = t2, { render: i2 } = a2;
  return S(() => {
    r2.destroy();
  }), c(H([r2, r2.input$]), i2((t3) => {
    let [a3, i3] = t3, n2 = e.metaProp(r2.typedef, "inputBy") ?? tn, o2 = (e.metaProp(r2.typedef, "readOnlyWhenInitialExist") ?? false) && !!a3.initial;
    return x(eX, { valued: !G(i3 ?? a3.initial), invalid: !!a3.error, focus: !!a3.focus, $label: y("span", { children: [r2.meta.label ?? r2.name, r2.optional ? "（非必填）" : ""] }), $supporting: y(eE, { children: [x(eL, { schema: r2.typedef }), x(eV, { schema: r2.typedef })] }), $trailing: n2.$trailing, children: x(n2, { field$: r2, readOnly: o2 }) });
  }));
}, { displayName: "ParameterInput", props: ["field$"] }), tn = $({ readOnly: l().optional(), field$: r() }, (e10) => () => {
  let { readOnly: t2, field$: a2, ...r2 } = e10;
  return x("input", { ...r2, "data-input": true, type: "text", readonly: t2, name: a2.name, value: a2.input, onChange: (e11) => {
    let t3 = e11.target.value;
    switch (a2.typedef.type) {
      case "number":
        try {
          a2.update(a2.typedef.create(parseFloat(t3)));
        } catch (e12) {
        }
        break;
      case "integer":
        try {
          a2.update(a2.typedef.create(parseInt(t3)));
        } catch (e12) {
        }
        break;
      case "boolean":
        try {
          a2.update(a2.typedef.create("false" !== t3 || !!t3));
        } catch (e12) {
        }
        break;
      default:
        a2.update(a2.typedef.create(t3));
    }
  }, onFocus: () => a2.focus(), onBlur: () => a2.blur() });
}, { displayName: "TextInput" }), to = u((e10) => {
  let t2 = h(null);
  return c(t2, M((t3) => {
    t3 && e10.field$.update(t3);
  }), b()), () => {
    var _a;
    let { readOnly: a2, accept: r2 } = e10;
    return y(ee, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [x("input", { type: "file", name: e10.field$.name, readonly: a2, accept: r2, "data-file-input": true, onChange: (e11) => {
      var _a2;
      let a3 = (_a2 = e11.target.files) == null ? void 0 : _a2[0];
      a3 && (t2.value = a3);
    } }), x(ei, { path: ed }), x("span", { children: (_a = t2.value) == null ? void 0 : _a.name })] });
  };
}, { displayName: "FileSelectInput", props: ["field$", "readOnly", "accept"] }), tl = u((e10, t2) => {
  let { render: a2 } = t2, r2 = eN.use();
  return O(() => {
    r2.request(e10.op.operationId, {});
  }), c(r2.response$(e10.op.operationId), a2((e11) => x(ts, { database: e11.body })));
}, { displayName: "DatabaseErContainer", props: ["op"] }), ts = u((e10) => () => y(tc, { children: [x(tm, { children: e10.database.name }), Object.entries(e10.database.tables).map((t2) => {
  let [a2, r2] = t2;
  return x(td, { database: e10.database, table: r2, tableName: a2 });
})] }), { displayName: "DatabaseErView", props: ["database"] }), td = u((e10, t2) => {
  let { render: a2 } = t2, r2 = new p([]);
  return c(r2, a2((t3) => {
    let a3 = e10.table.columns, i2 = e10.table.constraints;
    return y(tu, { open: true, children: [y(th, { children: [x("span", { children: e10.tableName }), x(t_, {}), x(tv, { meta: e10.table })] }), Object.keys(a3).map((r3) => {
      let i3 = a3[r3];
      return y(ty, { "data-hover": t3.includes(r3), children: [x(tf, { children: r3 }), i3.of ? x(tp, { database: e10.database, of: i3.of }) : x(tx, { children: i3.type }), x(tb, { children: x(tv, { meta: i3 }) })] });
    }), Object.entries(i2).map((e11) => {
      let [t4, a4] = e11;
      return x(ty, { onMouseover: () => {
        r2.next(a4.columnNames.map((e12) => e12.name));
      }, onMouseleave: () => {
        r2.next([]);
      }, children: y(t$, { "data-primary": a4.primary, "data-unique": a4.unique, children: [x(ei, { path: a4.unique ? ep : ec }), x("span", { children: t4 }), y("span", { children: ["(", a4.columnNames.map((e12) => [e12.name, ...e12.options ?? []].join(" ")).join(","), ")"] })] }) });
    }), x(ee, { sx: { py: 4 } })] });
  }));
}, { displayName: "DatabaseErTableView", props: ["database", "table", "tableName"] }), tp = u((e10, t2) => {
  let { render: a2 } = t2, r2 = p.seed(false), i2 = c(r2, a2((t3) => {
    let a3 = e10.of.split(".")[0];
    return x(en, { isOpen: t3, onClose: () => {
      r2.next(false);
    }, children: x(tw, { children: x(td, { database: e10.database, tableName: a3, table: e10.database.tables[a3] }) }) });
  }));
  return () => y(tg, { onClick: () => {
    r2.next(true);
  }, children: [e10.of, i2] });
}, { displayName: "DatabaseErTableColumnOfView", props: ["of", "database"] }), tc = Z("div", { displayName: "DatabaseErMain" })({ py: 18, px: 24, flex: 1, overflow: "auto" }), tm = Z("div", { displayName: "DatabaseErHeader" })({ py: 8, px: 16, textStyle: "sys.label-large" }), tu = Z("details", { displayName: "DatabaseErTable" })({ "& + &": { mt: 16 }, rounded: "sm", border: "1px solid", borderColor: et("sys.outline-variant", ea(0.38)), overflow: "hidden", width: "100%" }), th = Z("summary", { displayName: "DatabaseErTableSummary" })({ textStyle: "sys.label-large", py: 8, px: 16, display: "flex", color: "sys.primary" }), ty = Z("div", { displayName: "DatabaseErTableDef" })({ px: 16, py: 4, display: "flex", _hover: { containerStyle: "sys.surface-container-low" } }), tf = Z("div", { displayName: "DatabaseErTableColumnName" })({ display: "flex", width: "20vw", textStyle: "sys.label-small", font: "code" }), tb = Z("div", { displayName: "DatabaseErTableColumnComment" })({ display: "flex", textStyle: "sys.label-small", width: "20vw", justifyContent: "end" }), tg = Z("div", { displayName: "DatabaseErTableColumnOf" })({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", color: "sys.primary", _hover: { cursor: "pointer" } }), tx = Z("div", { displayName: "DatabaseErTableColumnType" })({ flex: 1, textStyle: "sys.label-small" }), tv = Z("div", (e10, t2) => (t3) => y(t3, { children: [e10.meta.title, " ", e10.meta.description ? x(el, { title: x(eB, { children: x(er, { text: e10.meta.description }) }), children: x(ei, { path: eo }) }) : null] }), { displayName: "DatabaseDescription", props: ["meta"] })({ position: "relative", display: "flex", alignItems: "center", gap: 4, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ei}`]: { width: 12, height: 12, overflow: "hidden" } }), tw = Z("div", { displayName: "DialogContainer" })({ display: "flex", containerStyle: "sys.surface", width: "90vw", roundedBottom: "sm", px: 16, py: 36, top: 0, position: "absolute", overflow: "auto" }), t$ = Z("div", { displayName: "DatabaseErTableConstraintName" })({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", display: "flex", alignItems: "center", gap: "1em", _primary: { [`${ei}`]: { color: "sys.primary" } }, _unique: { [`${ei}`]: { position: "relative", "&::before": { content: JSON.stringify("1"), position: "absolute", right: -6, textStyle: "sys.label-small", fontSize: 8 } } } }), t_ = Z("div", { displayName: "Spacer" })({ flex: 1 }), tN = Z("pre", (e10, t2) => {
  let { slots: a2 } = t2;
  return (e11) => {
    var _a;
    let t3 = (_a = a2.default) == null ? void 0 : _a.call(a2), r2 = t3 == null ? void 0 : t3[0];
    return r2 && "language-mermaid" === r2.props.className ? x(tS, { code: r2.children }) : x(e11, { children: t3 });
  };
}, { displayName: "PreWithMermaid" })({}), tS = u((e10, t2) => {
  let a2 = h(null);
  return c(a2, q((e11) => e11 ? V((async () => {
    let { default: t3 } = await d(async () => {
      let { default: e12 } = await import("./vendor-min-mermaid~mermaid.esm.min.DZ_2iELU.chunk.js");
      return { default: e12 };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0);
    await t3.run({ nodes: [e11] });
  })()) : B), b()), () => x(tI, { ref: a2, class: "mermaid", children: e10.code });
}, { displayName: "Mermaid", props: ["code"] }), tI = Z("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), tP = u({ operationId: t() }, (e10, t2) => {
  let a2 = eN.use(), r2 = c(e10.operationId$, q((e11) => a2.operation$(e11))), i2 = c(r2, z((e11) => !!e11)), n2 = p.seed(false), o2 = c(i2, g((e11) => e11.description ? x(er, { text: e11.description, components: { pre: tN } }) : null)), l2 = c(n2, g((e11) => x(en, { isOpen: e11, onClose: () => {
    n2.next(false);
  }, children: x(s2, { children: x(eB, { children: o2 }) }) }))), s2 = Z("div", { displayName: "DialogContainer" })({ containerStyle: "sys.surface", width: "95vw", maxHeight: "98vh", roundedBottom: "sm", px: 32, pt: 16, py: 48, top: 0, position: "absolute", overflow: "auto", pre: { width: "100%" }, "svg,img": { display: "block", m: "0 auto" } }), d2 = c(i2, g((e11) => e11.description ? y(eu, { onClick: () => {
    n2.next(true);
  }, children: [x(ei, { path: em }), l2] }) : null)), m2 = c(i2, g((e11) => x(tr, { operation: e11, children: x(_, { children: Object.entries(e11.responses ?? {}).map((e12) => {
    let [t3, a3] = e12;
    return x(eU, { code: t3, response: a3 }, t3);
  }) }) }, e11.operationId))), u2 = c(i2, g((e11) => y(tC, { sx: { containerStyle: { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method] ?? "sys.secondary-container" }, children: [x("div", { "data-operation-method": true, children: e11.method }), y("div", { "data-operation-desc": true, children: [x("div", { "data-operation-path": true, children: e11.path }), y("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] }), x(ee, { sx: { flex: 1 } }), d2] })));
  return c(r2, g((e11) => e11 ? "SycDatabaseEr" == e11.operationId ? y(tO, { children: [u2, x(tk, { children: x(tl, { op: e11 }) })] }, e11.operationId) : y(tO, { children: [u2, x(tk, { children: x(ee, { sx: { flex: 1, overflow: "auto" }, children: m2 }) })] }, e11.operationId) : null));
}, { displayName: "OperationView" }), tO = Z("div", { displayName: "OperationContainer" })({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tk = Z("div", { displayName: "OperationMain" })({ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }), tC = Z("summary", { displayName: "OperationHeading" })({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  eN as O,
  tP as a,
  eI as b
};
