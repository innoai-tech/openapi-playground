var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { O as e, B as t, S as r, a as n, t as s, b as a, f as i, e as o, o as u } from "./vendor-rxjs.BBfHJXPy.chunk.js";
import { r as c, A as p, j as h, e as d, a as l } from "./vendor-innoai-tech-lodash.3H0k6Xl3.chunk.js";
let f = (e2, t2) => new g(e2, t2);
class g extends e {
  constructor(e2, t2) {
    super((e3) => this._success$.subscribe(e3));
    __publicField(this, "requesting$", new t(false));
    __publicField(this, "error$", new r());
    __publicField(this, "_success$", new r());
    __publicField(this, "_input$", new r());
    __publicField(this, "unsubscribe", this._input$.pipe(/* @__PURE__ */ n((e2) => (this.requesting$.next(true), i(/* @__PURE__ */ this.fetcher.request(/* @__PURE__ */ this.createConfig(e2))).pipe(/* @__PURE__ */ s((e3) => this._success$.next(e3)), /* @__PURE__ */ o((e3) => (this.error$.next(e3), u(e3)))))), /* @__PURE__ */ s(() => {
      this.requesting$.next(false);
    }), /* @__PURE__ */ a()).subscribe());
    __publicField(this, "_prevInputs");
    __publicField(this, "next", (e2) => {
      let t2 = c(e2) ? e2(this._prevInputs) : e2;
      this._prevInputs = t2, this._input$.next(t2);
    });
    __publicField(this, "toHref", (e2) => this.fetcher.toHref(/* @__PURE__ */ this.createConfig(e2)));
    this.createConfig = e2, this.fetcher = t2;
  }
  get operationID() {
    return this.createConfig.operationID;
  }
}
let y = function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e2["Content-Type"] || e2["content-type"] || "";
}, $ = function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  e2["Content-Type"] && (e2["Content-Type"] = void 0), e2["content-type"] && (e2["content-type"] = void 0);
}, m = (e2) => y(e2).includes("multipart/form-data"), b = (e2) => y(e2).includes("application/x-www-form-urlencoded"), v = (e2) => {
  let t2 = new URLSearchParams(), r2 = (e3, n2) => {
    if (h(n2)) {
      p(n2, (t3) => {
        r2(e3, t3);
      });
      return;
    }
    if (d(n2)) {
      r2(e3, /* @__PURE__ */ JSON.stringify(n2));
      return;
    }
    l(n2) || 0 === `${n2}`.length || t2.append(e3, `${n2}`);
  };
  return p(e2, (e3, t3) => {
    r2(t3, e3);
  }), t2.toString();
}, w = (e2, t2) => {
  if (m(t2)) {
    $(t2);
    let r2 = new FormData(), n2 = (e3, t3) => {
      t3 instanceof File || t3 instanceof Blob ? r2.append(e3, t3) : h(t3) ? p(t3, (t4) => n2(e3, t4)) : d(t3) ? r2.append(e3, /* @__PURE__ */ JSON.stringify(t3)) : r2.append(e3, t3);
    };
    return p(e2, (e3, t3) => n2(t3, e3)), r2;
  }
  return b(t2) ? v(e2) : h(e2) || d(e2) ? JSON.stringify(e2) : e2;
}, x = (e2) => {
  let { paramsSerializer: t2, transformRequestBody: r2 } = e2;
  return { toHref: (e3) => {
    let r3 = /* @__PURE__ */ t2(e3.params);
    return r3.length && !r3.startsWith("?") && (r3 = "?" + r3), `${e3.url}${r3}`;
  }, request: (e3) => {
    let n2 = { method: e3.method, headers: e3.headers || {}, body: /* @__PURE__ */ r2(e3.body, e3.headers || {}) };
    return fetch(`${e3.url}?${t2(e3.params)}`, n2).then(async (t3) => {
      var r3, n3;
      let s2;
      s2 = (null === (r3 = /* @__PURE__ */ t3.headers.get("Content-Type")) || void 0 === r3 ? void 0 : r3.includes("application/json")) ? await t3.json() : (null === (n3 = /* @__PURE__ */ t3.headers.get("Content-Type")) || void 0 === n3 ? void 0 : n3.includes("application/octet-stream")) ? await t3.blob() : await t3.text();
      let a2 = { config: e3, status: t3.status, headers: {} };
      for (let [e4, r4] of t3.headers) a2.headers[e4] = r4;
      return a2.body = s2, a2;
    }).then((e4) => {
      if (e4.status >= 400) throw e4.error = e4.body, e4;
      return e4;
    });
  } };
};
export {
  f as a,
  x as c,
  v as p,
  w as t
};
