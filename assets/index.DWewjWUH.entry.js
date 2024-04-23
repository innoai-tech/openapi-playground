const __vite__fileDeps=["assets/webapp-openapi-playground-page.BKKAL7mr.chunk.js","assets/lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js","assets/vendor--vue-runtime-core.CdjcGpyV.chunk.js","assets/vendor--core-js.CysLPQih.chunk.js","assets/lib--nodepkg-vuemarkdown.Cjmx74zb.chunk.js","assets/lib--nodepkg-typedef.Bwrbe8Ho.chunk.js","assets/lib--nodepkg-vuekit.BRo0ZIlg.chunk.js","assets/vendor--vue-reactivity.BF2wQyBH.chunk.js","assets/vendor--vue-shared.DjBT002R.chunk.js","assets/vendor--rxjs.FN4n8WH4.chunk.js","assets/vendor--tslib.kWYf_5KY.chunk.js","assets/webapp--openapi-playground-mod-openapi.BqTiPNN1.chunk.js","assets/vendor--innoai-tech-fetcher.BaNq0A9a.chunk.js","assets/lib--nodepkg-vueuikit.WHW5k3l4.chunk.js","assets/vendor--vue-runtime-dom.BGUNeSGq.chunk.js","assets/lib--nodepkg-vueformdata.CJGs6zut.chunk.js","assets/lib--nodepkg-vuematerial.3DLfqTIZ.chunk.js","assets/lib--nodepkg-codemirror.BXZpTj89.chunk.js","assets/lib--nodepkg-jsoncue.BAzVouA8.chunk.js","assets/webapp-openapi-playground-page-operations.uw_oaylk.chunk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var e, r;
import { c as o } from "./vendor--vue-runtime-dom.BGUNeSGq.chunk.js";
import { e as n, r as t, a as i, h as s, j as a, k as l } from "./lib--nodepkg-vuekit.BRo0ZIlg.chunk.js";
import { a as p, j as c } from "./lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js";
import { C as u, G as d, T as m } from "./lib--nodepkg-vueuikit.WHW5k3l4.chunk.js";
import { n as h } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { c as f } from "./vendor--innoai-tech-config.fcWE7nre.chunk.js";
import { M as _ } from "./webapp-openapi-playground-common-manifest.CYRNFvcy.chunk.js";
import { O as g } from "./webapp--openapi-playground-mod-openapi.BqTiPNN1.chunk.js";
import { f as v, t as y } from "./vendor--rxjs.FN4n8WH4.chunk.js";
import { c as E, p as k, t as j } from "./vendor--innoai-tech-fetcher.BaNq0A9a.chunk.js";
import { _ as b } from "./webapp-openapi-playground-page.BKKAL7mr.chunk.js";
(function() {
  let e2 = document.createElement("link").relList;
  if (!(e2 && e2.supports && e2.supports("modulepreload"))) {
    for (let e3 of document.querySelectorAll('link[rel="modulepreload"]'))
      r2(e3);
    new MutationObserver((e3) => {
      for (let o2 of e3)
        if ("childList" === o2.type)
          for (let e4 of o2.addedNodes)
            "LINK" === e4.tagName && "modulepreload" === e4.rel && r2(e4);
    }).observe(document, { childList: true, subtree: true });
  }
  function r2(e3) {
    if (e3.ep)
      return;
    e3.ep = true;
    let r3 = function(e4) {
      let r4 = {};
      return e4.integrity && (r4.integrity = e4.integrity), e4.referrerPolicy && (r4.referrerPolicy = e4.referrerPolicy), "use-credentials" === e4.crossOrigin ? r4.credentials = "include" : "anonymous" === e4.crossOrigin ? r4.credentials = "omit" : r4.credentials = "same-origin", r4;
    }(e3);
    fetch(e3.href, r3);
  }
})();
let I = { crossorigin: "use-credentials" }, O = f(), P = (e2) => e2 ? e2.startsWith("//") ? `${location.protocol}${e2}` : e2.startsWith("/") ? `${location.origin}${e2}` : e2 : location.origin, w = Object.assign(n(() => {
  let e2 = O(), r2 = g.use(), o2 = E({ paramsSerializer: k, transformRequestBody: j });
  console.log(P(e2.OPENAPI));
  let n2 = new URL(P(e2.OPENAPI));
  return t(v(o2.request({ method: "GET", url: n2.toString(), inputs: null })), y((e3) => {
    r2.next((r3) => {
      Object.assign(r3, e3.body), r3.servers || (r3.servers = [{ url: n2.origin }]);
    });
  }), i()), () => p(m, { children: [c(u, {}), c(d, { styles: h }), p(_, { value: { name: e2.name, description: I.description }, children: [c(u, {}), c(d, { styles: h }), c(s, {})] })] });
}), { displayName: "App" }), S = {}, N = function(e2, r2, o2) {
  let n2 = Promise.resolve();
  if (r2 && r2.length > 0) {
    let e3 = document.getElementsByTagName("link"), t2 = document.querySelector("meta[property=csp-nonce]"), i2 = (null == t2 ? void 0 : t2.nonce) || (null == t2 ? void 0 : t2.getAttribute("nonce"));
    n2 = Promise.all(r2.map((r3) => {
      if ((r3 = "/__APP_BASE_HREF__/" + r3) in S)
        return;
      S[r3] = true;
      let n3 = r3.endsWith(".css");
      if (o2)
        for (let o3 = e3.length - 1; o3 >= 0; o3--) {
          let t4 = e3[o3];
          if (t4.href === r3 && (!n3 || "stylesheet" === t4.rel))
            return;
        }
      else if (document.querySelector(`link[href="${r3}"]${n3 ? '[rel="stylesheet"]' : ""}`))
        return;
      let t3 = document.createElement("link");
      if (t3.rel = n3 ? "stylesheet" : "modulepreload", n3 || (t3.as = "script", t3.crossOrigin = ""), t3.href = r3, i2 && t3.setAttribute("nonce", i2), document.head.appendChild(t3), n3)
        return new Promise((e4, o3) => {
          t3.addEventListener("load", e4), t3.addEventListener("error", () => o3(Error(`Unable to preload CSS for ${r3}`)));
        });
    }));
  }
  return n2.then(() => e2()).catch((e3) => {
    let r3 = new Event("vite:preloadError", { cancelable: true });
    if (r3.payload = e3, window.dispatchEvent(r3), !r3.defaultPrevented)
      throw e3;
  });
}, A = a({ history: l(new URL(null !== (r = null === (e = document.querySelector("base")) || void 0 === e ? void 0 : e.href) && void 0 !== r ? r : "/").pathname), routes: [{ name: "operations", path: "/operations", component: () => N(() => import("./webapp-openapi-playground-page.BKKAL7mr.chunk.js").then((e2) => e2.o), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]) : void 0), children: [{ name: "operations-operationId", path: ":operationId", component: () => N(() => import("./webapp-openapi-playground-page-operations.uw_oaylk.chunk.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]) : void 0), props: true }], props: true }, { name: "index", path: "/", component: b, props: true }] });
o(w).use(A).mount("#root");
