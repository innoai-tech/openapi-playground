import { O as e, B as t, S as s, n, p as r, q as i, u as a, v as o, e as u } from "./lib--nodepkg-vuekit.UMOgsAuw.chunk.js";
import { i as h, B as p, d as c, t as d, a as l } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
let f = (e2, t2) => new g(e2, t2);
class g extends e {
  constructor(e2, p2) {
    super((e3) => this._success$.subscribe(e3)), this.createConfig = e2, this.fetcher = p2, this.requesting$ = new t(false), this.error$ = new s(), this._success$ = new s(), this._input$ = new s(), this.unsubscribe = this._input$.pipe(n((e3) => (this.requesting$.next(true), a(this.fetcher.request(this.createConfig(e3))).pipe(r((e4) => this._success$.next(e4)), o((e4) => (this.error$.next(e4), u(e4)))))), r(() => {
      this.requesting$.next(false);
    }), i()).subscribe(), this.next = (e3) => {
      let t2 = h(e3) ? e3(this._prevInputs) : e3;
      this._prevInputs = t2, this._input$.next(t2);
    }, this.toHref = (e3) => this.fetcher.toHref(this.createConfig(e3));
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
}, b = (e2) => y(e2).includes("multipart/form-data"), m = (e2) => y(e2).includes("application/x-www-form-urlencoded"), w = (e2) => {
  let t2 = new URLSearchParams(), s2 = (e3, n2) => {
    if (c(n2)) {
      p(n2, (t3) => {
        s2(e3, t3);
      });
      return;
    }
    if (d(n2)) {
      s2(e3, JSON.stringify(n2));
      return;
    }
    l(n2) || 0 === `${n2}`.length || t2.append(e3, `${n2}`);
  };
  return p(e2, (e3, t3) => {
    s2(t3, e3);
  }), t2.toString();
}, v = (e2, t2) => {
  if (b(t2)) {
    $(t2);
    let s2 = new FormData(), n2 = (e3, t3) => {
      t3 instanceof File || t3 instanceof Blob ? s2.append(e3, t3) : c(t3) ? p(t3, (t4) => n2(e3, t4)) : d(t3) ? s2.append(e3, JSON.stringify(t3)) : s2.append(e3, t3);
    };
    return p(e2, (e3, t3) => n2(t3, e3)), s2;
  }
  return m(t2) ? w(e2) : c(e2) || d(e2) ? JSON.stringify(e2) : e2;
}, x = (e2) => {
  let { paramsSerializer: t2, transformRequestBody: s2 } = e2;
  return { toHref: (e3) => {
    let s3 = t2(e3.params);
    return s3.length && !s3.startsWith("?") && (s3 = "?" + s3), `${e3.url}${s3}`;
  }, request: (e3) => {
    let n2 = { method: e3.method, headers: e3.headers || {}, body: s2(e3.body, e3.headers || {}) };
    return fetch(`${e3.url}?${t2(e3.params)}`, n2).then(async (t3) => {
      var s3, n3;
      let r2;
      r2 = (null === (s3 = t3.headers.get("Content-Type")) || void 0 === s3 ? void 0 : s3.includes("application/json")) ? await t3.json() : (null === (n3 = t3.headers.get("Content-Type")) || void 0 === n3 ? void 0 : n3.includes("application/octet-stream")) ? await t3.blob() : await t3.text();
      let i2 = { config: e3, status: t3.status, headers: {} };
      for (let [e4, s4] of t3.headers)
        i2.headers[e4] = s4;
      return i2.body = r2, i2;
    }).then((e4) => {
      if (e4.status >= 400)
        throw e4.error = e4.body, e4;
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
