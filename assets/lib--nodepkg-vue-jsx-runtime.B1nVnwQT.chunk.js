import { h as t, F as e, i as r } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
let i = (t2) => "function" == typeof t2, o = (t2) => void 0 === t2, l = (t2) => t2 === e, n = (t2) => !!l(t2) || "string" == typeof t2 || "object" == typeof t2 && !!t2.__isTeleport, a = (t2) => t2 && !Array.isArray(t2) && !r(t2) && "object" == typeof t2, s = (t2) => i(t2) ? t2 : Array.isArray(t2) ? () => t2 : o(t2) ? t2 : () => t2, u = (t2, e2) => {
  let { children: r2, ...i2 } = t2;
  if (a(r2))
    return [e2 ? { ...i2, key: e2 } : i2, r2];
  let o2 = {}, l2 = {}, n2 = false;
  for (let t3 in i2) {
    let e3 = i2[t3];
    if (t3.startsWith("$")) {
      l2[t3.slice(1)] = s(e3), n2 = true;
      continue;
    }
    o2[t3] = e3;
  }
  let u2 = s(r2);
  return u2 && (l2.default = u2, n2 = true), [e2 ? { ...o2, key: e2 } : o2, n2 ? l2 : void 0];
}, f = (t2, e2, r2) => d(t2, e2, r2), d = (e2, r2, i2) => {
  let [o2, a2] = u(r2, i2);
  if (n(e2)) {
    var s2, f2;
    let r3 = null !== (f2 = null == a2 ? void 0 : null === (s2 = a2.default) || void 0 === s2 ? void 0 : s2.call(a2)) && void 0 !== f2 ? f2 : l(e2) ? [] : void 0;
    return t(e2, o2, r3);
  }
  return t(e2, o2, a2);
};
export {
  f as a,
  d as j
};
