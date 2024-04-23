var s, o;
import { x as e, C as n, G as r, T as i, y as t, z as a } from "./lib--nodepkg-vueuikit.Cwinxioe.chunk.js";
import { e as c, r as l, a as u, h as m, j as p, k as d } from "./lib--nodepkg-vuekit.GwyEMV02.chunk.js";
import { a as h, j as f } from "./lib--nodepkg-vue-jsx-runtime.CmBQ_T3E.chunk.js";
import { n as g } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { c as j } from "./vendor--innoai-tech-config.fcWE7nre.chunk.js";
import { M as k } from "./webapp-openapi-playground-common-manifest.CVi7pRYm.chunk.js";
import { f as v, t as b } from "./vendor--rxjs.D2Za7iWR.chunk.js";
import { c as y, p as x, t as O } from "./vendor--innoai-tech-fetcher.B3L5S2ar.chunk.js";
let P = { crossorigin: "use-credentials" }, $ = j(), w = (s2) => s2 ? s2.startsWith("//") ? `${location.protocol}${s2}` : s2.startsWith("/") ? `${location.origin}${s2}` : s2 : location.origin, A = Object.assign(c(() => {
  let s2 = $(), o2 = e.use(), t2 = y({ paramsSerializer: x, transformRequestBody: O });
  console.log(w(s2.OPENAPI));
  let a2 = new URL(w(s2.OPENAPI));
  return l(v(t2.request({ method: "GET", url: a2.toString(), inputs: null })), b((s3) => {
    o2.next((o3) => {
      Object.assign(o3, s3.body), o3.servers || (o3.servers = [{ url: a2.origin }]);
    });
  }), u()), () => h(i, { children: [f(n, {}), f(r, { styles: g }), h(k, { value: { name: s2.name, description: P.description }, children: [f(n, {}), f(r, { styles: g }), f(m, {})] })] });
}), { displayName: "App" }), E = p({ history: d(new URL(null !== (o = null === (s = document.querySelector("base")) || void 0 === s ? void 0 : s.href) && void 0 !== o ? o : "/").pathname), routes: t });
a(A).use(E).mount("#root");
