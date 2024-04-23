let e;
/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function t(e2, t2) {
  let a2 = new Set(e2.split(","));
  return t2 ? (e3) => a2.has(e3.toLowerCase()) : (e3) => a2.has(e3);
}
let a = {}, o = [], n = () => {
}, s = () => false, r = (e2) => 111 === e2.charCodeAt(0) && 110 === e2.charCodeAt(1) && (e2.charCodeAt(2) > 122 || 97 > e2.charCodeAt(2)), l = (e2) => e2.startsWith("onUpdate:"), i = Object.assign, f = (e2, t2) => {
  let a2 = e2.indexOf(t2);
  a2 > -1 && e2.splice(a2, 1);
}, c = Object.prototype.hasOwnProperty, p = (e2, t2) => c.call(e2, t2), d = Array.isArray, u = (e2) => "[object Map]" === A(e2), y = (e2) => "[object Set]" === A(e2), b = (e2) => "function" == typeof e2, h = (e2) => "string" == typeof e2, m = (e2) => "symbol" == typeof e2, g = (e2) => null !== e2 && "object" == typeof e2, O = (e2) => (g(e2) || b(e2)) && b(e2.then) && b(e2.catch), j = Object.prototype.toString, A = (e2) => j.call(e2), N = (e2) => A(e2).slice(8, -1), w = (e2) => "[object Object]" === A(e2), C = (e2) => h(e2) && "NaN" !== e2 && "-" !== e2[0] && "" + parseInt(e2, 10) === e2, B = t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), M = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (a2) => t2[a2] || (t2[a2] = e2(a2));
}, P = /-(\w)/g, S = M((e2) => e2.replace(P, (e3, t2) => t2 ? t2.toUpperCase() : "")), T = /\B([A-Z])/g, U = M((e2) => e2.replace(T, "-$1").toLowerCase()), v = M((e2) => e2.charAt(0).toUpperCase() + e2.slice(1)), V = M((e2) => e2 ? `on${v(e2)}` : ""), k = (e2, t2) => !Object.is(e2, t2), z = (e2, t2) => {
  for (let a2 = 0; a2 < e2.length; a2++)
    e2[a2](t2);
}, x = (e2, t2, a2) => {
  Object.defineProperty(e2, t2, { configurable: true, enumerable: false, value: a2 });
}, E = (e2) => {
  let t2 = parseFloat(e2);
  return isNaN(t2) ? e2 : t2;
}, F = (e2) => {
  let t2 = h(e2) ? Number(e2) : NaN;
  return isNaN(t2) ? e2 : t2;
}, R = () => e || (e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function _(e2) {
  if (d(e2)) {
    let t2 = {};
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = e2[a2], n2 = h(o2) ? function(e3) {
        let t3 = {};
        return e3.replace(G, "").split(I).forEach((e4) => {
          if (e4) {
            let a3 = e4.split(L);
            a3.length > 1 && (t3[a3[0].trim()] = a3[1].trim());
          }
        }), t3;
      }(o2) : _(o2);
      if (n2)
        for (let e3 in n2)
          t2[e3] = n2[e3];
    }
    return t2;
  }
  if (h(e2) || g(e2))
    return e2;
}
let I = /;(?![^(]*\))/g, L = /:([^]+)/, G = /\/\*[^]*?\*\//g;
function H(e2) {
  let t2 = "";
  if (h(e2))
    t2 = e2;
  else if (d(e2))
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = H(e2[a2]);
      o2 && (t2 += o2 + " ");
    }
  else if (g(e2))
    for (let a2 in e2)
      e2[a2] && (t2 += a2 + " ");
  return t2.trim();
}
let K = t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function Y(e2) {
  return !!e2 || "" === e2;
}
export {
  U as A,
  f as B,
  s as C,
  l as D,
  a as E,
  F,
  v as G,
  K as H,
  Y as I,
  n as N,
  g as a,
  d as b,
  C as c,
  x as d,
  p as e,
  u as f,
  b as g,
  k as h,
  m as i,
  _ as j,
  r as k,
  O as l,
  t as m,
  H as n,
  y as o,
  w as p,
  h as q,
  i as r,
  R as s,
  N as t,
  B as u,
  o as v,
  z as w,
  E as x,
  V as y,
  S as z
};
