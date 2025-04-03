const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~mermaid.esm.min.-BlwMtJu.chunk.js","assets/lib-nodepkg-typedef.zwRRER3a.chunk.js","assets/vendor-min-mermaid~chunk-HQLFZTFY.B_Iiq6uF.chunk.js","assets/vendor-min-mermaid~chunk-MEBTFSOL.B7bUe0lZ.chunk.js","assets/vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js","assets/vendor-min-mermaid~chunk-7LIB5WBN.VCeBPxAO.chunk.js","assets/vendor-min-mermaid~chunk-L736DJ4U.gIFBZtPm.chunk.js","assets/vendor-min-mermaid~chunk-QTJCGBHB.D4GRlI_F.chunk.js","assets/vendor-min-mermaid~chunk-USR3SDWQ.BYUbwKxP.chunk.js","assets/vendor-min-mermaid~chunk-2VPXETT4.BF22TMdS.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.CCcUlC7q.chunk.js","assets/vendor-min-mermaid~chunk-HESFG3RP.Dj2hmxyj.chunk.js","assets/vendor-min-mermaid~chunk-YM3XIQPS.DIMTnqRF.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.By2qN2hC.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e, _t, _e__instances, r_get, n_fn;
import { S as e, s as t, b as r, f as n, h as a, j as i, e as o, o as l, k as s, _ as d } from "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
import { I as p, r as c, c as u, a as h, s as m, o as y, v as f, h as g, d as x, j as b, A as v, R as _, f as w, F as $, b as S, B as I, C as k, D as O, k as j } from "./lib-nodepkg-vuekit.BFTeRu50.chunk.js";
import { c as C, a as P, t as q, p as D } from "./vendor-innoai-tech-fetcher.DOvvzCmd.chunk.js";
import { B as T, s as B, b as W, m as F, E as N, o as L, S as A, k as R, t as J, O as z, l as E, c as H, e as M, n as U } from "./vendor-rxjs.CCKTxAfl.chunk.js";
import { w as V, g as K, a as G, x as Q, d as X, e as Y } from "./vendor-innoai-tech-lodash.pIS0vKJX.chunk.js";
import { s as Z, B as ee, v as et, b as er } from "./lib-nodepkg-vueuikit.tUPupWmb.chunk.js";
import { M as en } from "./lib-nodepkg-vuemarkdown.Cag4Km6K.chunk.js";
import { a as ea, m as ei, T as eo, D as el, F as es, f as ed, g as ep, h as ec, i as eu, I as eh } from "./lib-nodepkg-vuematerial.QqnuItX3.chunk.js";
import { l as em, h as ey, i as ef, F as eg } from "./lib-nodepkg-vueformdata.ROBbS5R-.chunk.js";
import { J as ex, a as eb, b as ev } from "./lib-nodepkg-jsoneditor.Caih46bS.chunk.js";
const _e_ = class _e_ extends p {
  constructor() {
    super(...arguments);
    __privateAdd(this, _e__instances);
    __privateAdd(this, _e, C({ paramsSerializer: D, transformRequestBody: q }));
    __privateAdd(this, _t, new T(/* @__PURE__ */ new Map()));
  }
  static empty() {
    return new _e_({ openapi: "3.1.0", components: { schemas: {} }, paths: {} });
  }
  response$(e10) {
    return c(__privateGet(this, _t), B((t2) => {
      let r2 = t2.get(e10);
      return r2 ? F(r2, r2.error$) : N;
    }));
  }
  requesting$(e10) {
    return c(__privateGet(this, _t), B((t2) => {
      var _a;
      return ((_a = t2.get(e10)) == null ? void 0 : _a.requesting$) ?? L(false);
    }));
  }
  asRequestConfigCreator(e10) {
    var _a;
    let t2 = __privateMethod(this, _e__instances, n_fn).call(this, e10);
    if (!t2) return null;
    let r2 = Object.keys(((_a = t2.requestBody) == null ? void 0 : _a.content) ?? {})[0];
    return (e11) => {
      var _a2, _b;
      return { method: t2.method, url: __privateGet(this, _e__instances, r_get) + e$(t2.path, e11), params: V(e11, (_a2 = t2.parameters) == null ? void 0 : _a2.filter((e12) => "query" == e12.in).map((e12) => e12.name)), headers: { ...V(e11, (_b = t2.parameters) == null ? void 0 : _b.filter((e12) => "header" == e12.in).map((e12) => e12.name)), ...r2 ? { "Content-Type": r2 } : {} }, body: e11.body, inputs: e11 };
    };
  }
  request(e10, t2) {
    let r2 = __privateGet(this, _t).value.get(e10);
    if (!r2) {
      let t3 = this.asRequestConfigCreator(e10);
      if (!t3) return;
      r2 = P(Object.assign(t3, { operationID: e10, TRespData: {} }), __privateGet(this, _e)), __privateGet(this, _t).value.set(e10, r2), __privateGet(this, _t).next(__privateGet(this, _t).value);
    }
    r2.next(t2);
  }
  operation$(e10) {
    return c(this, B((t2) => {
      for (let r2 of ew(t2, { operationId: e10 })) if (r2) return L(r2);
      return L(null);
    }));
  }
  operations$(e10) {
    return c(this, B((t2) => L([...ew(t2, e10)])));
  }
  schema$(e10) {
    var _a;
    let t2 = ((_a = e10.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    return c(this, B((e11) => t2 ? L(K(e11, t2) ?? null) : L(null)), W((e11) => e11 ? { ...e11, $id: t2[t2.length - 1] } : e11));
  }
  schema(e10) {
    var _a;
    let t2 = ((_a = e10.split("#/")[1]) == null ? void 0 : _a.split("/")) ?? [];
    if (t2) return K(this.value, t2) ?? void 0;
  }
};
_e = new WeakMap();
_t = new WeakMap();
_e__instances = new WeakSet();
r_get = function() {
  var _a, _b;
  return ((_b = (_a = this.value.servers) == null ? void 0 : _a[0]) == null ? void 0 : _b.url) ?? "";
};
n_fn = function(e10) {
  for (let t2 of ew(this.value, { operationId: e10 })) if (t2) return t2;
  return null;
};
let e_ = _e_;
function* ew(e10, t2) {
  var _a;
  for (let [r2, n2] of Object.entries(e10.paths)) for (let [e11, a2] of Object.entries(n2)) if ("OpenAPI" != a2.operationId && "OpenAPIView" != a2.operationId && (!t2.tag || (a2.tags ?? []).includes(t2.tag))) {
    if (t2.operationId) {
      if (t2.operationId.startsWith("*")) {
        if (!a2.operationId.toLowerCase().includes(t2.operationId.slice(1).toLowerCase())) continue;
      } else if (a2.operationId.toLowerCase() != t2.operationId.toLowerCase()) continue;
    }
    yield { ...a2, method: e11, path: r2, group: ((_a = a2.tags) == null ? void 0 : _a[0]) ?? "" };
  }
}
let e$ = function(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return e10.replace(/{([\s\S]+?)}/g, (e11, r2) => [].concat(t2[r2] || e11).join(","));
}, eS = u(() => e_.empty(), { name: "OpenAPI" }), eI = h((e10, t2) => {
  let r2 = eS.use(), n2 = new p({ operationId: void 0 }), a2 = new A();
  c(a2, R(200), J((e11) => {
    n2.next((t3) => {
      t3.operationId = `*${e11 ?? ""}`;
    });
  }), m());
  let i2 = y(null);
  c(i2, B((e11) => {
    if (e11) {
      let t3 = (t4) => {
        t4 && e11.scrollTo({ top: t4.offsetTop - e11.offsetTop });
      };
      return new z(() => {
        let r3 = new MutationObserver((e12) => {
          for (let r4 of e12) if ("attributes" === r4.type) {
            let e13 = r4.target;
            e13.classList.contains("router-link-active") && t3(e13);
          }
        });
        return r3.observe(e11, { attributes: true, subtree: true }), setTimeout(() => {
          t3(e11.querySelector(".router-link-active"));
        }, 100), () => {
          r3.disconnect();
        };
      });
    }
    return N;
  }), f());
  let o2 = c(n2, B((e11) => r2.operations$(e11)), g((e11) => {
    let t3 = Object.groupBy(e11, (e12) => e12.group);
    return x(eO, { children: [b(ej, { children: b("input", { type: "text", placeholder: "请输入 operationId 查询", onInput: (e12) => {
      a2.next(e12.target.value);
    } }) }), b(eC, { sx: { flex: 1, overflow: "scroll" }, ref: i2, children: Object.entries(t3).toSorted().map((e12) => {
      let [t4, r3] = e12;
      return x("div", { "data-nav-group": true, children: [b("div", { "data-nav-group-heading": true, children: t4 }), b("div", { "data-nav-group-contents": true, children: r3 == null ? void 0 : r3.map((e13) => x(eq, { component: v, to: `/operations/${e13.operationId}`, children: [b(ee, { "data-operation-method": true, sx: { color: { get: "sys.primary", post: "sys.success", put: "sys.warning", delete: "sys.error" }[e13.method] ?? "sys.secondary" }, children: e13.method }), x("div", { "data-operation-desc": true, children: [b("div", { "data-operation-id": true, children: e13.operationId }), e13.summary ? b("div", { "data-operation-summary": true, children: e13.summary != e13.operationId ? e13.summary : b("span", { children: " " }) }) : void 0] })] })) })] });
    }) })] });
  }));
  return () => x(ek, { children: [o2, b(eP, { children: b(_, {}) })] });
}), ek = Z("div")({ width: "100vw", height: "100vh", overflow: "hidden", display: "flex" }), eO = Z("aside")({ width: 240, py: 4, display: "flex", flexDirection: "column", gap: 4, height: "100%", overflow: "hidden", borderRight: "1px solid", borderColor: "sys.outline" }), ej = Z("div")({ input: { py: 10, px: 12, border: "none", width: "100%", outline: 0 }, borderBottom: "1px solid", borderColor: "sys.outline" }), eC = Z("div")({ display: "flex", flexDirection: "column", gap: 4, $data_nav_group_heading: { px: 12, py: 4, textStyle: "sys.label-small", containerStyle: "sys.secondary-container" } }), eP = Z("main")({ flex: 1, overflow: "hidden" }), eq = Z("a")({ px: 12, py: 8, pos: "relative", overflow: "hidden", width: 240, display: "flex", alignItems: "center", gap: 8, flexDirection: "row-reverse", textDecoration: "none", $data_operation_method: { textTransform: "uppercase", fontSize: 18, fontFamily: "code", display: "flex", alignItems: "center", pointerEvents: "none" }, $data_operation_desc: { flex: 1, overflow: "hidden" }, $data_operation_id: { textStyle: "sys.label-large", textOverflow: "ellipsis", overflow: "hidden" }, $data_operation_summary: { opacity: 0.7, textStyle: "sys.body-small", textOverflow: "ellipsis", overflow: "hidden" }, "&.router-link-active": { containerStyle: "sys.surface-container" } }), eD = Z("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14 }), eT = Z("div")({ display: "inline-table", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 11, lineHeight: 14, color: "sys.primary", _deprecated: { textDecoration: "line-through" }, _nullable: { "&:after": { content: '"??"', color: "sys.error" } }, _optional: { "&:after": { content: '"?"', color: "sys.secondary" } } }), eB = Z("div", (e10, t2) => {
  let { slots: r2 } = t2, n2 = eL.use();
  return (t3) => {
    var _a;
    return b(t3, { style: { paddingLeft: `${n2.indent}em`, marginTop: (e10.spacing ?? 0) * 0.5 }, children: (_a = r2.default) == null ? void 0 : _a.call(r2) });
  };
})({ position: "relative", display: "block" }), eW = Z("div", (t2, r2) => (r3) => {
  let n2 = e.metaProp(t2.schema, "title") ?? "", a2 = e.metaProp(t2.schema, "description") ?? "";
  return x(r3, { children: [n2, " ", a2 ? b(eo, { title: b(eF, { children: b(en, { text: a2 }) }), children: b(ea, { path: ei }) }) : null] });
})({ position: "relative", pt: 8, display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', fontFamily: "code" }, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ea}`]: { width: 12, height: 12, overflow: "hidden" } }), eF = Z("div")({ textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eN = (e10) => {
  let { name: t2, value: r2, extra: n2 } = e10;
  return "" == r2 ? null : b(eB, { children: x(eD, { sx: { opacity: 0.7, fontSize: "0.9em", wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [b(eD, { sx: { color: "sys.primary" }, children: `@${t2}(` }), `${r2}`, Object.entries(n2 ?? {}).map((e11) => {
    let [t3, r3] = e11;
    return G(r3) ? null : x($, { children: [x(eD, { sx: { opacity: 0.5 }, children: [",", " "] }), b(eD, { sx: { opacity: 0.5 }, children: t3 }), x(eD, { sx: { opacity: 0.5 }, children: [":", " "] }), b(eD, { sx: { opacity: 0.7 }, children: r3 })] });
  }), b(eD, { sx: { color: "sys.primary" }, children: ")" })] }) });
}, eL = u(() => ({ indent: 0 }), { name: "IntentContext" }), eA = w((e10, t2) => {
  let { slots: r2 } = t2, n2 = eL.use();
  return () => {
    var _a;
    return b(eL, { value: { indent: n2.indent + 1 }, children: (_a = r2.default) == null ? void 0 : _a.call(r2) });
  };
});
class eR {
  constructor(e10, t2) {
    this.id = e10, this.parent = t2;
  }
  child(e10) {
    return new eR(e10, this);
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
let eJ = u(() => new eR("")), ez = h((t2) => {
  let r2 = eJ.use(), n2 = eL.use(), a2 = y(false);
  return () => {
    let i2 = t2.schema, o2 = e.schemaProp(t2.schema, "$ref"), l2 = "intersection" == (i2 = e.schemaProp(t2.schema, e.unwrap)()).type || "object" == i2.type || "union" == i2.type || "record" == i2.type || "array" == i2.type || "union" == i2.type, s2 = r2.safe(o2) && x($, { children: [b("span", { children: " " }), b(eH, { schema: i2 })] });
    return b(eJ, { value: r2.child(o2), children: l2 ? n2.indent < 3 ? x($, { children: [b(v, { to: `#${o2}`, "data-index": n2.indent, children: b(eD, { id: o2, children: o2 }) }), s2] }) : x($, { children: [b(ee, { component: v, sx: {}, to: `#${o2}`, "data-index": n2.indent, onClick: (e10) => {
      r2.safe(o2) && (e10.preventDefault(), e10.stopPropagation(), a2.next(true));
    }, children: b(eD, { id: o2, children: o2 }) }), r2.safe(o2) && b(el, { isOpen: a2.value, onClose: () => {
      a2.next(false);
    }, children: b(eE, { children: x(eB, { children: [b(eD, { children: o2 }), b(eL, { value: { indent: 0 }, children: s2 })] }) }) })] }) : s2 });
  };
}), eE = Z("div")({ display: "flex", containerStyle: "sys.surface", height: "100vh", width: "36vw", roundedLeft: "sm", px: 16, py: 36, top: 0, right: 0, position: "absolute", overflow: "auto" }), eH = h((n2) => {
  let a2 = n2.schema;
  return e.schemaProp(a2, "$ref") ? b(ez, { schema: a2 }) : () => {
    var _a, _b;
    switch (a2.type) {
      case "union":
        return b($, { children: (_a = e.schemaProp(a2, "oneOf")) == null ? void 0 : _a.map((e10, t2) => x($, { children: [t2 > 0 && x(eD, { children: [" ", " | ", " "] }), b(eH, { schema: e10 })] })) });
      case "intersection":
        return b(eD, { children: (_b = e.schemaProp(a2, "allOf")) == null ? void 0 : _b.filter((e10) => !Object.keys(e10).length).map((e10, t2) => x($, { children: [t2 > 0 && x(eD, { children: [" ", "&", " "] }), b(eH, { schema: e10 })] })) });
      case "array":
        return x(eD, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [b(eD, { children: "Array<" }), b(eH, { schema: e.schemaProp(a2, "items") ?? r() }), b(eD, { children: ">" })] });
      case "object":
        return x($, { children: [b(eD, { children: "{" }), b(eA, { children: b($, { children: Object.entries(e.schemaProp(a2, "properties") ?? {}).map((t2) => {
          let [r2, n4] = t2;
          return n4 ? b($, { children: x(eB, { spacing: 2, children: [b(eW, { schema: n4 }), x(eD, { sx: { wordBreak: "keep-all", whiteSpace: "nowrap" }, children: [b(eT, { nullable: e.schemaProp(a2, "nullable"), deprecated: e.schemaProp(a2, "deprecated"), optional: !(e.schemaProp(a2, "required") ?? []).includes(r2), children: r2 }), b(eD, { sx: { mr: "1em" }, children: ":" }), b(eH, { schema: n4 })] })] }) }) : null;
        }) }) }), b(eD, { children: "}" })] });
      case "record":
        return x($, { children: [b(eD, { children: "{" }), e.schemaProp(a2, "additionalProperties") && b($, { children: b(eA, { children: x(eB, { children: [x(eD, { sx: { mr: 1 }, children: ["[K:", " "] }), b(eH, { schema: e.schemaProp(a2, "propertyNames") ?? t() }), x(eD, { sx: { mr: 1 }, children: ["]:", " "] }), b(eH, { schema: e.schemaProp(a2, "additionalProperties") ?? r() })] }) }) }), b(eD, { children: "}" })] });
      case "enums": {
        let t2 = e.schemaProp(a2, "enum") ?? [];
        if (1 == t2.length) return b(eD, { children: JSON.stringify(t2[0]) });
        let r2 = "any";
        return t2.length > 0 && (r2 = typeof t2[0]), x($, { children: [b(eD, { sx: { fontWeight: "bold" }, children: r2 }), b(eA, { children: t2.map((t3, r3) => {
          var _a2;
          return b(eN, { name: "enum", value: `${t3}`, extra: ((_a2 = e.metaProp(a2, "enumLabels")) == null ? void 0 : _a2[r3]) ? { label: JSON.stringify(e.metaProp(a2, "enumLabels")[r3]) } : {} }, t3);
        }) })] });
      }
    }
    let [n3, i2, o2] = [a2.type, e.metaProp(a2, "format"), e.metaProp(a2, "default")];
    return x($, { children: [b(eD, { sx: { fontWeight: "bold" }, children: n3 || "any" }), x(eA, { children: [i2 && b(eN, { name: "format", value: i2 }), !G(o2) && b(eN, { name: "default", value: o2 }), eM.map((t2) => {
      let r2 = e.schemaProp(a2, t2);
      return G(r2) ? null : "pattern" == t2 ? b(eN, { name: t2, value: r2, extra: { errMsg: e.metaProp(a2, "x-pattern-err-msg") } }) : b(eN, { name: t2, value: r2 });
    })] })] });
  };
}), eM = ["enum", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "maxItems", "minItems", "maxProperties", "minProperties"], eU = h((e10) => {
  let t2 = eS.use();
  return () => {
    let r2 = Q(e10.response["x-status-return-errors"] ?? []).map((e11) => function() {
      let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = e12.indexOf("{");
      return t3 > -1 ? e12.slice(t3 + 1, e12.length - 1).split(",").reduce((e13, t4) => (e13.joining ? e13.values[e13.values.length - 1] += "," + t4 : e13.values.push(t4), t4.split('"').length % 2 == 0 && (e13.joining = !e13.joining), e13), { values: [], joining: false }).values.reduce((e13, t4) => {
        let r3 = t4.indexOf("=");
        if (r3 < 0) return e13;
        let n2 = t4.slice(0, r3), a2 = t4.slice(r3 + 1);
        return G(n2) || G(a2) ? e13 : { ...e13, [n2]: JSON.parse(a2) };
      }, { code: e12.slice(0, t3) }) : null;
    }(e11));
    return x(eG, { children: [b(eQ, { "data-failed": function(e11) {
      try {
        return Number(e11) >= 400;
      } catch (e12) {
        return false;
      }
    }(e10.code), children: e10.code }), x(ee, { sx: { pl: "4em" }, children: [b($, { children: Object.entries(e10.response.content ?? {}).map((e11) => {
      let [r3, { schema: i2 }] = e11;
      return x(eX, { children: [b(eB, { spacing: 0, children: b(eH, { schema: n.decode(i2, (e12) => [t2.schema(e12) ?? {}, a(e12)]) }) }), b("div", { "data-content-type": true, children: r3 })] });
    }) }), b($, { children: r2.length > 0 ? x(ee, { sx: { mt: 16, containerStyle: "sys.surface-container", px: 12, py: 16, rounded: "xs" }, children: [b(ee, { sx: { pb: 8 }, children: x("b", { children: [b("small", { children: "可能错误码" }), ":"] }) }), x(eV, { children: [b(eK, { sx: { textStyle: "sys.label-small" }, children: b("code", { children: "errors[*].code" }) }), b(eK, { sx: { textStyle: "sys.label-small" }, children: b("code", { children: "errors[*].message" }) }), r2.map((e11) => e11 ? x($, { children: [b(eK, { sx: { color: "sys.primary", textStyle: "sys.label-small", fontWeight: "bold" }, children: b("code", { children: JSON.stringify(e11.code) }) }), b(eK, { children: e11.message })] }) : null)] })] }) : null })] })] });
  };
}), eV = Z("div")({ textStyle: "sys.label-medium", display: "grid", gap: 8, width: "100%", gridTemplateColumns: "min-content 1fr", gridAutoColumns: "auto" }), eK = Z("div")({}), eG = Z("section")({}), eQ = Z("div")({ fontSize: 18, fontFamily: "code", color: "sys.success", py: 12, pos: "sticky", top: 0, _data_failed__true: { color: "sys.error" } }), eX = Z("section")({ pos: "relative", $data_content_type: { pos: "absolute", right: 0, top: 0, fontFamily: "code", opacity: 0.3 } }), eY = Z("div", (e10, t2) => {
  let { slots: r2 } = t2;
  return (t3) => {
    var _a, _b, _c;
    let n2 = e10.valued, a2 = e10.invalid, i2 = e10.disabled, o2 = (((_a = r2.default) == null ? void 0 : _a.call(r2)) ?? []).map((e11) => {
      var _a2, _b2, _c2;
      return "input" === e11.type ? (n2 = !!(((_a2 = e11.props) == null ? void 0 : _a2.value) ?? ((_b2 = e11.props) == null ? void 0 : _b2.placeholder) ?? n2), i2 = ((_c2 = e11.props) == null ? void 0 : _c2.disabled) ?? i2, S(e11, { disabled: i2 })) : S(e11);
    });
    return x(t3, { "data-valued": n2, "data-invalid": a2, "data-disabled": i2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [x("div", { "data-input-container": true, children: [x("div", { "data-input-decorator-container": true, children: [b("div", { "data-input-decorator-leading": true }), b("div", { "data-input-decorator-label": true, children: b("div", { "data-input-label": true, children: (_b = r2.label) == null ? void 0 : _b.call(r2) }) }), b("div", { "data-input-decorator-trailing": true })] }), x("div", { "data-input-row": true, children: [r2.leading && b(eZ, { role: "leading", children: r2.leading() }), o2, r2.trailing && b(eZ, { role: "trailing", children: r2.trailing() })] })] }), r2.supporting && b("div", { "data-input-supporting": true, children: (_c = r2.supporting) == null ? void 0 : _c.call(r2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-medium", $data_input_container: { pos: "relative", zIndex: 1 }, $data_input_row: { pos: "relative", rounded: "xs", overflow: "hidden", minHeight: 40, display: "flex", alignItems: "stretch", zIndex: 1 }, $data_input_decorator_container: { pos: "absolute", left: 0, top: 0, bottom: 0, right: 0, display: "flex", zIndex: 1, rounded: "xs" }, $data_input_decorator_leading: { roundedLeft: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", width: 16, borderLeft: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", pointerEvents: "none" }, $data_input_decorator_label: { transitionDuration: "sm1", transitionTimingFunction: "standard", borderBottom: "1px solid", borderColor: "sys.outline" }, $data_input_decorator_trailing: { borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "sys.outline", roundedRight: "xs", transitionDuration: "sm1", transitionTimingFunction: "standard", flex: 1, pointerEvents: "none" }, $data_input_label: { position: "relative", top: -12, padding: 4, textStyle: "sys.body-small", color: "sys.on-surface-variant", display: "flex", alignItems: "center" }, $data_input: { flex: 1, w: "100%", m: 0, px: 16, py: 4, cursor: "text", "&[readonly]": { cursor: "pointer" }, bg: "inherit", color: "sys.on-surface", outline: "none", border: "none", textStyle: "sys.body-medium", _disabled: { cursor: "not-allowed" } }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, width: "100%", overflow: "auto", color: "sys.on-surface-variant" }, $data_icon: { color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: {} }, _focusWithin: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.primary" }, $data_input_label: { color: "sys.primary" } }, _invalid: { $data_input_decorator_leading: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_label: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_decorator_trailing: { borderWidth: "2px", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" }, $data_icon: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), eZ = Z("div", { role: i(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), e0 = h((e10, t2) => {
  let r2 = ex.of(e10.field$.typedef, G(e10.field$.input) ? void 0 : e10.field$.input);
  return c(r2, E(1), J((t3) => {
    e10.field$.update(t3);
  }), m()), () => b(e1, { children: b(eb, { value: r2, children: b(ev, {}) }) });
}), e1 = Z("div")({ position: "relative", width: "100%", minHeight: "40em", py: 8, px: 12, overflow: "hidden" }), e2 = () => ({ "User-Agent": navigator.userAgent, Origin: location.origin, Referer: `${location.origin}${location.pathname}` }), e4 = (e10) => {
  let { field: t2, value: r2 } = e10;
  return x(ee, { component: "span", sx: { display: "block" }, children: [x(ee, { component: "span", sx: { fontWeight: "bold", marginRight: "0.5em" }, children: [t2, ":"] }), b("span", { children: r2 })] });
}, e8 = (e10) => {
  let { method: t2, url: r2, params: n2 } = e10, a2 = D(n2);
  return x(ee, { component: "span", sx: { fontWeight: "bold" }, children: [`${t2.toUpperCase()} `, x(ee, { component: "span", sx: { fontWeight: "medium" }, children: [r2, a2 ? `?${a2}` : ""] }), " HTTP/*"] });
}, e6 = (e10, t2) => {
  let r2 = (t3, n2) => n2 instanceof File || n2 instanceof Blob ? `${e10}
Content-Disposition: form-data; name="${t3}"${n2.name ? `; filename="${n2.name}"` : ""}
Content-Type: ${n2.type}

[File Content]
` : X(n2) ? n2.map((e11) => r2(t3, e11)).join("\n") : `${e10}
Content-Disposition: form-data; name="${t3}"

${Y(n2) ? JSON.stringify(n2) : String(n2)}
`;
  return Object.entries(t2).map((e11) => {
    let [t3, n2] = e11;
    return r2(t3, n2);
  }).join("\n") + `${e10}--`;
}, e3 = w({ $default: o().optional() }, (e10, t2) => {
  let { slots: r2 } = t2;
  return () => {
    var _a;
    return b(ee, { sx: { containerStyle: "sys.surface-container", rounded: "xs", width: "100%", overflow: "auto", py: 4, px: 8 }, children: b(ee, { component: "pre", sx: { padding: 4, margin: 0, textStyle: "sys.body-small", fontFamily: "code" }, children: b("code", { children: (_a = r2.default) == null ? void 0 : _a.call(r2) }) }) });
  };
}), e5 = w({ request: o() }, (e10) => () => {
  let t2 = e10.request;
  return x(e3, { children: [b(e8, { ...t2 }), b($, { children: Object.entries({ ...e2(), ...t2.headers }).toSorted().map((e11) => {
    let [t3, r2] = e11;
    return b(e4, { field: t3, value: r2 }, t3);
  }) }), t2.body && x($, { children: [b("br", {}), function(e11) {
    if (te(e11.headers).includes("multipart/form-data")) {
      let t3 = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
      return e11.headers = { ...e11.headers, "Content-Type": `multipart/form-data; boundary=${t3}` }, e6(t3, e11.body);
    }
    return te(e11.headers).includes("application/x-www-form-urlencoded") ? D(e11.body) : tt(e11.headers) ? JSON.stringify(e11.body, null, 2) : e11.body;
  }(t2)] })] });
}), e7 = (e10, t2) => {
  let r2 = new Uint8Array(e10), n2 = "";
  for (let e11 = r2.byteLength, t3 = 0; t3 < e11; t3++) n2 += String.fromCharCode(r2[t3]);
  return `data:${t2};base64,${btoa(n2)}`;
}, e9 = w({ response: o() }, (e10, t2) => () => {
  let t3 = e10.response;
  return te(t3.headers).includes("image/") ? b("div", { children: b("img", { src: e7(t3.body, te(t3.headers)), alt: "" }) }) : x(e3, { children: [x("span", { children: ["HTTP/* ", t3.status] }), b("br", {}), t3.headers && b($, { children: Object.entries(t3.headers).map((e11) => {
    let [t4, r2] = e11;
    return b(e4, { field: t4, value: r2 }, t4);
  }) }), b("br", {}), t3.body ? tt(t3.headers) ? JSON.stringify(t3.body, null, 2) : `${t3.body}` : null] });
});
function te() {
  let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  for (let [t2, r2] of Object.entries(e10)) if ("content-type" == t2.toLowerCase()) return r2;
  return "";
}
let tt = (e10) => te(e10).includes("application/json"), tr = h((e10) => c(eS.use().response$(e10.operationID), g((e11) => b(tn, { children: b(e9, { response: e11 }) })))), tn = Z("section")({ maxHeight: "40vh", overflow: "auto" }), ta = h((e10, t2) => {
  let { slots: r2 } = t2, i2 = eS.use(), o2 = {};
  for (let t3 of e10.operation.parameters ?? []) {
    let e11 = n.decode(t3.schema, (e12) => [i2.schema(e12) ?? {}, a(e12)]).use(em(`${t3.name}, in=${JSON.stringify(t3.in)}`));
    t3.required || (e11 = e11.optional()), e11.use(ey(t3.schema.title)), ["object", "array"].includes(t3.schema.type ?? "") ? o2[t3.name] = e11.use(ef(e0)) : o2[t3.name] = e11;
  }
  if (e10.operation.requestBody) {
    let t3 = Object.entries(e10.operation.requestBody.content ?? {})[0];
    if (t3) {
      let [e11, r3] = t3, l2 = n.decode(r3.schema ?? {}, (e12) => [i2.schema(e12) ?? {}, a(e12)]).use(em(`body, content-type = ${JSON.stringify(e11)}`));
      e11.includes("text/") ? o2.body = l2 : e11.includes("octet-stream") || e11.includes("image/") ? o2.body = l2.use(ef(tl)) : o2.body = l2.use(ef(e0));
    }
  }
  let s2 = I(), d2 = O(), p2 = eg.of(l(o2), (() => {
    try {
      let e11 = d2.query.params;
      return JSON.parse(atob((Array.isArray(e11) ? e11[0] : e11) ?? ""));
    } catch (e11) {
    }
    return {};
  })());
  c(p2, J((t3) => {
    i2.request(e10.operation.operationId, t3);
  }), J((e11) => {
    s2.replace({ query: { params: btoa(JSON.stringify(e11)) } });
  }), m());
  let u2 = c(p2.inputs$, g((t3) => {
    let r3 = i2.asRequestConfigCreator(e10.operation.operationId);
    return r3 ? b(e5, { request: r3(t3) }) : null;
  }));
  return () => {
    var _a;
    return x(ee, { sx: { py: 24, px: 24, gap: 24, width: "100%", height: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }, component: "form", onSubmit: (e11) => {
      e11.preventDefault(), p2.submit();
    }, children: [b(ee, { sx: { flex: 2, py: 24, display: "flex", flexDirection: "column", gap: 32, height: "100%", overflow: "auto" }, children: [...p2.fields(p2.typedef)].map((e11) => b(ti, { field$: e11 })) }), b(ee, { sx: { flex: 3, gap: 24, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }, children: x(ee, { sx: { display: "flex", flexDirection: "column", gap: 24, height: "100%", overflow: "hidden" }, children: [u2, b(ee, { sx: { px: 8 }, children: b(es, { type: "submit", children: "发起请求" }) }), b(tr, { operationID: e10.operation.operationId }), b(ee, { sx: { flex: 1, overflow: "auto" }, children: (_a = r2.default) == null ? void 0 : _a.call(r2) })] }) })] }, e10.operation.operationId);
  };
}), ti = h((t2, r2) => {
  let { field$: n2 } = t2, { render: a2 } = r2;
  return k(() => {
    n2.destroy();
  }), c(H([n2, n2.input$]), a2((t3) => {
    var r3;
    let [a3, i2] = t3, o2 = e.metaProp(n2.typedef, "inputBy") ?? to, l2 = (e.metaProp(n2.typedef, "readOnlyWhenInitialExist") ?? false) && !!a3.initial;
    return b(eY, { valued: !G(i2 ?? a3.initial), invalid: !!a3.error, focus: !!a3.focus, $label: x("span", { children: [(r3 = n2).meta.label ?? r3.name, n2.optional ? "（非必填）" : ""] }), $supporting: x(eB, { children: [b(eW, { schema: n2.typedef }), b(eH, { schema: n2.typedef })] }), $trailing: o2.$trailing, children: b(o2, { field$: n2, readOnly: l2 }) });
  }));
}), to = w({ readOnly: s().optional(), field$: o() }, (e10) => () => {
  let { readOnly: t2, field$: r2, ...n2 } = e10;
  return b("input", { ...n2, "data-input": true, type: "text", readonly: t2, name: r2.name, value: r2.input, onChange: (e11) => {
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
}), tl = h((e10) => {
  let t2 = y(null);
  return c(t2, J((t3) => {
    t3 && e10.field$.update(t3);
  }), f()), () => {
    var _a;
    let { readOnly: r2, accept: n2 } = e10;
    return x(ee, { component: "label", "data-input": true, sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, $data_file_input: { display: "none" }, $data_icon: { width: 40, height: 40, my: 40 } }, children: [b("input", { type: "file", name: e10.field$.name, readonly: r2, accept: n2, "data-file-input": true, onChange: (e11) => {
      var _a2;
      let r3 = (_a2 = e11.target.files) == null ? void 0 : _a2[0];
      r3 && (t2.value = r3);
    } }), b(ea, { path: ed }), b("span", { children: (_a = t2.value) == null ? void 0 : _a.name })] });
  };
}), ts = h((e10, t2) => {
  let { render: r2 } = t2, n2 = eS.use();
  return j(() => {
    n2.request(e10.op.operationId, {});
  }), c(n2.response$(e10.op.operationId), r2((e11) => b(td, { database: e11.body })));
}), td = h((e10) => () => x(tu, { children: [b(th, { children: e10.database.name }), Object.entries(e10.database.tables).map((t2) => {
  let [r2, n2] = t2;
  return b(tp, { database: e10.database, table: n2, tableName: r2 });
})] })), tp = h((e10, t2) => {
  let { render: r2 } = t2, n2 = new p([]);
  return c(n2, r2((t3) => {
    let r3 = e10.table.columns, a2 = e10.table.constraints;
    return x(tm, { open: true, children: [x(ty, { children: [b("span", { children: e10.tableName }), b(tS, {}), b(t_, { meta: e10.table })] }), Object.keys(r3).map((n3) => {
      let a3 = r3[n3];
      return x(tf, { "data-hover": t3.includes(n3), children: [b(tg, { children: n3 }), a3.of ? b(tc, { database: e10.database, of: a3.of }) : b(tv, { children: a3.type }), b(tx, { children: b(t_, { meta: a3 }) })] });
    }), Object.entries(a2).map((e11) => {
      let [t4, r4] = e11;
      return b(tf, { onMouseover: () => {
        n2.next(r4.columnNames.map((e12) => e12.name));
      }, onMouseleave: () => {
        n2.next([]);
      }, children: x(t$, { "data-primary": r4.primary, "data-unique": r4.unique, children: [b(ea, { path: r4.unique ? ep : ec }), b("span", { children: t4 }), x("span", { children: ["(", r4.columnNames.map((e12) => [e12.name, ...e12.options ?? []].join(" ")).join(","), ")"] })] }) });
    }), b(ee, { sx: { py: 4 } })] });
  }));
}), tc = h((e10, t2) => {
  let { render: r2 } = t2, n2 = p.seed(false), a2 = c(n2, r2((t3) => {
    let r3 = e10.of.split(".")[0];
    return b(el, { isOpen: t3, onClose: () => {
      n2.next(false);
    }, children: b(tw, { children: b(tp, { database: e10.database, tableName: r3, table: e10.database.tables[r3] }) }) });
  }));
  return () => x(tb, { onClick: () => {
    n2.next(true);
  }, children: [e10.of, a2] });
}), tu = Z("div")({ py: 18, px: 24, flex: 1, overflow: "auto" }), th = Z("div")({ py: 8, px: 16, textStyle: "sys.label-large" }), tm = Z("details")({ "& + &": { mt: 16 }, rounded: "sm", border: "1px solid", borderColor: et("sys.outline-variant", er(0.38)), overflow: "hidden", width: "100%" }), ty = Z("summary")({ textStyle: "sys.label-large", py: 8, px: 16, display: "flex", color: "sys.primary" }), tf = Z("div")({ px: 16, py: 4, display: "flex", _hover: { containerStyle: "sys.surface-container-low" } }), tg = Z("div")({ display: "flex", width: "20vw", textStyle: "sys.label-small", font: "code" }), tx = Z("div")({ display: "flex", textStyle: "sys.label-small", width: "20vw", justifyContent: "end" }), tb = Z("div")({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", color: "sys.primary", _hover: { cursor: "pointer" } }), tv = Z("div")({ flex: 1, textStyle: "sys.label-small" }), t_ = Z("div", (e10, t2) => (t3) => x(t3, { children: [e10.meta.title, " ", e10.meta.description ? b(eo, { title: b(eF, { children: b(en, { text: e10.meta.description }) }), children: b(ea, { path: ei }) }) : null] }))({ position: "relative", display: "flex", alignItems: "center", gap: 4, textStyle: "sys.body-small", fontSize: 10, lineHeight: 12, [`${ea}`]: { width: 12, height: 12, overflow: "hidden" } }), tw = Z("div")({ display: "flex", containerStyle: "sys.surface", width: "90vw", roundedBottom: "sm", px: 16, py: 36, top: 0, position: "absolute", overflow: "auto" }), t$ = Z("div")({ flex: 1, textStyle: "sys.label-small", font: "code", fontWeight: "bold", display: "flex", alignItems: "center", gap: "1em", _primary: { [`${ea}`]: { color: "sys.primary" } }, _unique: { [`${ea}`]: { position: "relative", "&::before": { content: JSON.stringify("1"), position: "absolute", right: -6, textStyle: "sys.label-small", fontSize: 8 } } } }), tS = Z("div")({ flex: 1 }), tI = Z("pre", (e10, t2) => {
  let { slots: r2 } = t2;
  return (e11) => {
    var _a;
    let t3 = (_a = r2.default) == null ? void 0 : _a.call(r2), n2 = t3 == null ? void 0 : t3[0];
    return n2 && "language-mermaid" === n2.props.className ? b(tk, { code: n2.children }) : b(e11, { children: t3 });
  };
})({}), tk = h((e10, t2) => {
  let r2 = y(null);
  return c(r2, B((e11) => e11 ? M((async () => {
    let { default: t3 } = await d(async () => {
      let { default: e12 } = await import("./vendor-min-mermaid~mermaid.esm.min.-BlwMtJu.chunk.js");
      return { default: e12 };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0);
    await t3.run({ nodes: [e11] });
  })()) : N), f()), () => b(tO, { ref: r2, class: "mermaid", children: e10.code });
}), tO = Z("div")({ "& > svg": { minWidth: "80%" } }), tj = h((e10, t2) => {
  let r2 = eS.use(), n2 = c(e10.operationId$, B((e11) => r2.operation$(e11))), a2 = c(n2, U((e11) => !!e11)), i2 = p.seed(false), o2 = c(a2, g((e11) => e11.description ? b(en, { text: e11.description, components: { pre: tI } }) : null)), l2 = c(i2, g((e11) => b(el, { isOpen: e11, onClose: () => {
    i2.next(false);
  }, children: b(s2, { children: b(eF, { children: o2 }) }) }))), s2 = Z("div")({ containerStyle: "sys.surface", width: "95vw", maxHeight: "98vh", roundedBottom: "sm", px: 32, pt: 16, py: 48, top: 0, position: "absolute", overflow: "auto", pre: { width: "100%" }, "svg,img": { display: "block", m: "0 auto" } }), d2 = c(a2, g((e11) => e11.description ? x(eh, { onClick: () => {
    i2.next(true);
  }, children: [b(ea, { path: eu }), l2] }) : null)), u2 = c(a2, g((e11) => b(ta, { operation: e11, children: b($, { children: Object.entries(e11.responses ?? {}).map((e12) => {
    let [t3, r3] = e12;
    return b(eU, { code: t3, response: r3 }, t3);
  }) }) }, e11.operationId))), h2 = c(a2, g((e11) => x(tq, { sx: { containerStyle: { get: "sys.primary-container", post: "sys.success-container", put: "sys.warning-container", delete: "sys.error-container" }[e11.method] ?? "sys.secondary-container" }, children: [b("div", { "data-operation-method": true, children: e11.method }), x("div", { "data-operation-desc": true, children: [b("div", { "data-operation-path": true, children: e11.path }), x("div", { "data-operation-summary": true, children: [e11.summary, " ", e11.operationId != e11.summary ? e11.operationId : ""] })] }), b(ee, { sx: { flex: 1 } }), d2] })));
  return c(n2, g((e11) => e11 ? "SycDatabaseEr" == e11.operationId ? x(tC, { children: [h2, b(tP, { children: b(ts, { op: e11 }) })] }, e11.operationId) : x(tC, { children: [h2, b(tP, { children: b(ee, { sx: { flex: 1, overflow: "auto" }, children: u2 }) })] }, e11.operationId) : null));
}), tC = Z("div")({ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }), tP = Z("div")({ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "stretch" }), tq = Z("summary")({ display: "flex", alignItems: "center", width: "100%", px: 16, py: 8, gap: 16, $data_operation_method: { textTransform: "uppercase", fontSize: 24, fontFamily: "code" }, $data_operation_path: { fontFamily: "code" }, $data_operation_summary: { opacity: 0.8, textStyle: "sys.body-small" } });
export {
  eS as O,
  tj as a,
  eI as b
};
