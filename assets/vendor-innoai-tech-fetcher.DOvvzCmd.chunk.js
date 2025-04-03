var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { O as e, B as t, S as s, g as n, t as r, h as a, e as i, j as o, o as u } from "./vendor-rxjs.CCKTxAfl.chunk.js";
import { b as c, v as p, d as h, e as d, a as l } from "./vendor-innoai-tech-lodash.pIS0vKJX.chunk.js";
let f = (e2, t2) => new g(e2, t2);
class g extends e {
  constructor(e2, t2) {
    super((e3) => this._success$.subscribe(e3));
    __publicField(this, "requesting$", new t(false));
    __publicField(this, "error$", new s());
    __publicField(this, "_success$", new s());
    __publicField(this, "_input$", new s());
    __publicField(this, "unsubscribe", this._input$.pipe(n((e2) => (this.requesting$.next(true), i(this.fetcher.request(this.createConfig(e2))).pipe(r((e3) => this._success$.next(e3)), o((e3) => (this.error$.next(e3), u(e3)))))), r(() => {
      this.requesting$.next(false);
    }), a()).subscribe());
    __publicField(this, "_prevInputs");
    __publicField(this, "next", (e2) => {
      let t2 = c(e2) ? e2(this._prevInputs) : e2;
      this._prevInputs = t2, this._input$.next(t2);
    });
    __publicField(this, "toHref", (e2) => this.fetcher.toHref(this.createConfig(e2)));
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
}, m = (e2) => y(e2).includes("multipart/form-data"), b = (e2) => y(e2).includes("application/x-www-form-urlencoded"), w = (e2) => {
  let t2 = new URLSearchParams(), s2 = (e3, n2) => h(n2) ? void p(n2, (t3) => {
    s2(e3, t3);
  }) : d(n2) ? void s2(e3, JSON.stringify(n2)) : void (!l(n2) && 0 !== `${n2}`.length && t2.append(e3, `${n2}`));
  return p(e2, (e3, t3) => {
    s2(t3, e3);
  }), t2.toString();
}, v = (e2, t2) => {
  if (m(t2)) {
    $(t2);
    let s2 = new FormData(), n2 = (e3, t3) => {
      t3 instanceof File || t3 instanceof Blob ? s2.append(e3, t3) : h(t3) ? p(t3, (t4) => n2(e3, t4)) : d(t3) ? s2.append(e3, JSON.stringify(t3)) : s2.append(e3, t3);
    };
    return p(e2, (e3, t3) => n2(t3, e3)), s2;
  }
  return b(t2) ? w(e2) : h(e2) || d(e2) ? JSON.stringify(e2) : e2;
}, x = (e2) => {
  let { paramsSerializer: t2, transformRequestBody: s2 } = e2;
  return { toHref: (e3) => {
    let s3 = t2(e3.params);
    return s3.length && !s3.startsWith("?") && (s3 = "?" + s3), `${e3.url}${s3}`;
  }, request: (e3) => {
    let n2 = { method: e3.method, headers: e3.headers || {}, body: s2(e3.body, e3.headers || {}) };
    return fetch(`${e3.url}?${t2(e3.params)}`, n2).then(async (t3) => {
      var _a, _b;
      let s3;
      s3 = ((_a = t3.headers.get("Content-Type")) == null ? void 0 : _a.includes("application/json")) ? await t3.json() : ((_b = t3.headers.get("Content-Type")) == null ? void 0 : _b.includes("application/octet-stream")) ? await t3.blob() : await t3.text();
      let n3 = { config: e3, status: t3.status, headers: {} };
      for (let [e4, s4] of t3.headers) n3.headers[e4] = s4;
      return n3.body = s3, n3;
    }).then((e4) => {
      if (e4.status >= 400) throw e4.error = e4.body, e4;
      return e4;
    });
  } };
};
export {
  f as a,
  x as c,
  w as p,
  v as t
};
