import { k as s, j as o } from "./lib--nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { j as e, r as n, u as i, f as a, p as r, R as t } from "./lib--nodepkg-vuekit.UMOgsAuw.chunk.js";
import { C as p, G as c, T as m } from "./lib--nodepkg-vueuikit.xfULGfyQ.chunk.js";
import { n as l } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { c as u, C as d } from "./webapp-openapi-playground-config_ts.CFSqJ3eU.chunk.js";
import { M as h } from "./webapp-openapi-playground-common-manifest-index_ts.D3nf2Mh2.chunk.js";
import { O as g } from "./webapp-openapi-playground-mod-openapi.--izJMSL.chunk.js";
import { c as f, p as k, t as j } from "./vendor--innoai-tech-fetcher.BT9C0Nu2.chunk.js";
let b = (s2) => s2 ? s2.startsWith("//") ? `${location.protocol}${s2}` : s2.startsWith("/") ? `${location.origin}${s2}` : s2 : location.origin, v = Object.assign(e(() => {
  let e2 = u(), v2 = g.use(), y = f({ paramsSerializer: k, transformRequestBody: j });
  console.log(b(e2.OPENAPI));
  let A = new URL(b(e2.OPENAPI));
  return n(i(y.request({ method: "GET", url: A.toString(), inputs: null })), r((s2) => {
    v2.next((o2) => {
      Object.assign(o2, s2.body), o2.servers || (o2.servers = [{ url: A.origin }]);
    });
  }), a()), () => s(m, { children: [o(p, {}), o(c, { styles: l }), s(h, { value: { name: e2.name, description: d.manifest.description }, children: [o(p, {}), o(c, { styles: l }), o(t, {})] })] });
}), { displayName: "App" });
export {
  v as A
};
