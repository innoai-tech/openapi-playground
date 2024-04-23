import { s as e, u as t, a as r, r as l, b as o, c as a } from "./vendor--vue-reactivity.BF2wQyBH.chunk.js";
import { n as i, a as u, d as s, c, h as f, p, w as d, o as h, b as v } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
import { p as m, f as g, B as y, m as b, t as _, i as w } from "./vendor--rxjs.FN4n8WH4.chunk.js";
import { i as P, p as O, k as E, c as j, d as S, b as k, e as R, o as x } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { j as $ } from "./lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js";
function C(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l2 = null != r2 ? r2 : t2, o2 = null != t2 ? t2 : e10, a2 = P(e10) ? {} : e10, [i2, u2] = O(Object.keys(a2), (e11) => /^on[A-Z]/.test(e11)), s2 = { emits: i2.map((e11) => E(e11.slice(2))), props: u2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t3) => {
    let r3 = a2[t3];
    return { ...e11, [t3]: { default: () => {
      try {
        return r3.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r3.validate(e12) } };
  }, {}) }, { name: c2, inheritAttrs: f2, ...p2 } = l2;
  return { ...p2, get name() {
    var d2;
    return null !== (d2 = this.displayName) && void 0 !== d2 ? d2 : c2;
  }, set name(n) {
    l2.name = n;
  }, setup: (e11, t3) => o2(e11, t3), emits: s2.emits, props: s2.props, inheritAttrs: f2, propTypes: a2 };
}
let A = (e10, t2) => new Proxy(e10, { get(e11, r2) {
  var l2;
  return null !== (l2 = t2[r2]) && void 0 !== l2 ? l2 : e11[r2];
} }), z = "undefined" != typeof document, F = Object.assign;
function M(e10, t2) {
  let r2 = {};
  for (let l2 in t2) {
    let o2 = t2[l2];
    r2[l2] = q(o2) ? o2.map(e10) : e10(o2);
  }
  return r2;
}
let D = () => {
}, q = Array.isArray, L = /#/g, U = /&/g, W = /\//g, B = /=/g, I = /\?/g, G = /\+/g, K = /%5B/g, N = /%5D/g, T = /%5E/g, V = /%60/g, H = /%7B/g, X = /%7C/g, Q = /%7D/g, Y = /%20/g;
function Z(e10) {
  return encodeURI("" + e10).replace(X, "|").replace(K, "[").replace(N, "]");
}
function J(e10) {
  return Z(e10).replace(G, "%2B").replace(Y, "+").replace(L, "%23").replace(U, "%26").replace(V, "`").replace(H, "{").replace(Q, "}").replace(T, "^");
}
function ee(e10) {
  return null == e10 ? "" : Z(e10).replace(L, "%23").replace(I, "%3F").replace(W, "%2F");
}
function et(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (e11) {
  }
  return "" + e10;
}
let er = /\/$/, en = (e10) => e10.replace(er, "");
function el(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", l2, o2 = {}, a2 = "", i2 = "", u2 = t2.indexOf("#"), s2 = t2.indexOf("?");
  return u2 < s2 && u2 >= 0 && (s2 = -1), s2 > -1 && (l2 = t2.slice(0, s2), o2 = e10(a2 = t2.slice(s2 + 1, u2 > -1 ? u2 : t2.length))), u2 > -1 && (l2 = l2 || t2.slice(0, u2), i2 = t2.slice(u2, t2.length)), { fullPath: (l2 = function(e11, t3) {
    let r3, l3;
    if (e11.startsWith("/"))
      return e11;
    if (!e11)
      return t3;
    let o3 = t3.split("/"), a3 = e11.split("/"), i3 = a3[a3.length - 1];
    (".." === i3 || "." === i3) && a3.push("");
    let u3 = o3.length - 1;
    for (r3 = 0; r3 < a3.length; r3++)
      if ("." !== (l3 = a3[r3])) {
        if (".." === l3)
          u3 > 1 && u3--;
        else
          break;
      }
    return o3.slice(0, u3).join("/") + "/" + a3.slice(r3).join("/");
  }(null != l2 ? l2 : t2, r2)) + (a2 && "?") + a2 + i2, path: l2, query: o2, hash: et(i2) };
}
function eo(e10, t2) {
  return t2 && e10.toLowerCase().startsWith(t2.toLowerCase()) ? e10.slice(t2.length) || "/" : e10;
}
function ea(e10, t2) {
  return (e10.aliasOf || e10) === (t2.aliasOf || t2);
}
function ei(e10, t2) {
  if (Object.keys(e10).length !== Object.keys(t2).length)
    return false;
  for (let o2 in e10) {
    var r2, l2;
    if (r2 = e10[o2], l2 = t2[o2], q(r2) ? !eu(r2, l2) : q(l2) ? !eu(l2, r2) : r2 !== l2)
      return false;
  }
  return true;
}
function eu(e10, t2) {
  return q(t2) ? e10.length === t2.length && e10.every((e11, r2) => e11 === t2[r2]) : 1 === e10.length && e10[0] === t2;
}
(e0 = e3 || (e3 = {})).pop = "pop", e0.push = "push", (e1 = e4 || (e4 = {})).back = "back", e1.forward = "forward", e1.unknown = "";
let es = /^[^#]+#/;
function ec(e10, t2) {
  return e10.replace(es, "#") + t2;
}
let ef = () => ({ left: window.scrollX, top: window.scrollY });
function ep(e10, t2) {
  return (history.state ? history.state.position - t2 : -1) + e10;
}
let ed = /* @__PURE__ */ new Map(), eh = () => location.protocol + "//" + location.host;
function ev(e10, t2) {
  let { pathname: r2, search: l2, hash: o2 } = t2, a2 = e10.indexOf("#");
  if (a2 > -1) {
    let t3 = o2.includes(e10.slice(a2)) ? e10.slice(a2).length : 1, r3 = o2.slice(t3);
    return "/" !== r3[0] && (r3 = "/" + r3), eo(r3, "");
  }
  return eo(r2, e10) + l2 + o2;
}
function em(e10, t2, r2) {
  let l2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t2, forward: r2, replaced: l2, position: window.history.length, scroll: o2 ? ef() : null };
}
function eg(e10) {
  let t2 = function(e11) {
    let { history: t3, location: r3 } = window, l3 = { value: ev(e11, r3) }, o2 = { value: t3.state };
    function a2(l4, a3, i2) {
      let u2 = e11.indexOf("#"), s2 = u2 > -1 ? (r3.host && document.querySelector("base") ? e11 : e11.slice(u2)) + l4 : eh() + e11 + l4;
      try {
        t3[i2 ? "replaceState" : "pushState"](a3, "", s2), o2.value = a3;
      } catch (e12) {
        console.error(e12), r3[i2 ? "replace" : "assign"](s2);
      }
    }
    return o2.value || a2(l3.value, { back: null, current: l3.value, forward: null, position: t3.length - 1, replaced: true, scroll: null }, true), { location: l3, state: o2, push: function(e12, r4) {
      let i2 = F({}, o2.value, t3.state, { forward: e12, scroll: ef() });
      a2(i2.current, i2, true);
      let u2 = F({}, em(l3.value, e12, null), { position: i2.position + 1 }, r4);
      a2(e12, u2, false), l3.value = e12;
    }, replace: function(e12, r4) {
      let i2 = F({}, t3.state, em(o2.value.back, e12, o2.value.forward, true), r4, { position: o2.value.position });
      a2(e12, i2, true), l3.value = e12;
    } };
  }(e10 = function(e11) {
    if (!e11) {
      if (z) {
        let t3 = document.querySelector("base");
        e11 = (e11 = t3 && t3.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), en(e11);
  }(e10)), r2 = function(e11, t3, r3, l3) {
    let o2 = [], a2 = [], i2 = null, u2 = (a3) => {
      let { state: u3 } = a3, s3 = ev(e11, location), c2 = r3.value, f2 = t3.value, p2 = 0;
      if (u3) {
        if (r3.value = s3, t3.value = u3, i2 && i2 === c2) {
          i2 = null;
          return;
        }
        p2 = f2 ? u3.position - f2.position : 0;
      } else
        l3(s3);
      o2.forEach((e12) => {
        e12(r3.value, c2, { delta: p2, type: e3.pop, direction: p2 ? p2 > 0 ? e4.forward : e4.back : e4.unknown });
      });
    };
    function s2() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(F({}, e12.state, { scroll: ef() }), "");
    }
    return window.addEventListener("popstate", u2), window.addEventListener("beforeunload", s2, { passive: true }), { pauseListeners: function() {
      i2 = r3.value;
    }, listen: function(e12) {
      o2.push(e12);
      let t4 = () => {
        let t5 = o2.indexOf(e12);
        t5 > -1 && o2.splice(t5, 1);
      };
      return a2.push(t4), t4;
    }, destroy: function() {
      for (let e12 of a2)
        e12();
      a2 = [], window.removeEventListener("popstate", u2), window.removeEventListener("beforeunload", s2);
    } };
  }(e10, t2.state, t2.location, t2.replace), l2 = F({ location: "", base: e10, go: function(e11) {
    let t3 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t3 || r2.pauseListeners(), history.go(e11);
  }, createHref: ec.bind(null, e10) }, t2, r2);
  return Object.defineProperty(l2, "location", { enumerable: true, get: () => t2.location.value }), Object.defineProperty(l2, "state", { enumerable: true, get: () => t2.state.value }), l2;
}
function ey(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let eb = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, e_ = Symbol("");
function ew(e10, t2) {
  return F(Error(), { type: e10, [e_]: true }, t2);
}
function eP(e10, t2) {
  return e10 instanceof Error && e_ in e10 && (null == t2 || !!(e10.type & t2));
}
(e2 = e5 || (e5 = {}))[e2.aborted = 4] = "aborted", e2[e2.cancelled = 8] = "cancelled", e2[e2.duplicated = 16] = "duplicated";
let eO = "[^/]+?", eE = { sensitive: false, strict: false, start: true, end: true }, ej = /[.+*?^${}()[\]/\\]/g;
function eS(e10) {
  let t2 = e10[e10.length - 1];
  return e10.length > 0 && t2[t2.length - 1] < 0;
}
let ek = { type: 0, value: "" }, eR = /[a-zA-Z0-9_]/;
function ex(e10, t2) {
  let r2 = {};
  for (let l2 of t2)
    l2 in e10 && (r2[l2] = e10[l2]);
  return r2;
}
function e$(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function eC(e10, t2) {
  let r2 = {};
  for (let l2 in e10)
    r2[l2] = l2 in t2 ? t2[l2] : e10[l2];
  return r2;
}
function eA(e10) {
  let t2 = {};
  if ("" === e10 || "?" === e10)
    return t2;
  let r2 = ("?" === e10[0] ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < r2.length; ++e11) {
    let l2 = r2[e11].replace(G, " "), o2 = l2.indexOf("="), a2 = et(o2 < 0 ? l2 : l2.slice(0, o2)), i2 = o2 < 0 ? null : et(l2.slice(o2 + 1));
    if (a2 in t2) {
      let e12 = t2[a2];
      q(e12) || (e12 = t2[a2] = [e12]), e12.push(i2);
    } else
      t2[a2] = i2;
  }
  return t2;
}
function ez(e10) {
  let t2 = "";
  for (let r2 in e10) {
    let l2 = e10[r2];
    if (r2 = J(r2).replace(B, "%3D"), null == l2) {
      void 0 !== l2 && (t2 += (t2.length ? "&" : "") + r2);
      continue;
    }
    (q(l2) ? l2.map((e11) => e11 && J(e11)) : [l2 && J(l2)]).forEach((e11) => {
      void 0 !== e11 && (t2 += (t2.length ? "&" : "") + r2, null != e11 && (t2 += "=" + e11));
    });
  }
  return t2;
}
let eF = Symbol(""), eM = Symbol(""), eD = Symbol(""), eq = Symbol(""), eL = Symbol("");
function eU() {
  let e10 = [];
  return { add: function(t2) {
    return e10.push(t2), () => {
      let r2 = e10.indexOf(t2);
      r2 > -1 && e10.splice(r2, 1);
    };
  }, list: () => e10.slice(), reset: function() {
    e10 = [];
  } };
}
function eW(e10, t2, r2, l2, o2) {
  let a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (e11) => e11(), i2 = l2 && (l2.enterCallbacks[o2] = l2.enterCallbacks[o2] || []);
  return () => new Promise((u2, s2) => {
    let c2 = (e11) => {
      false === e11 ? s2(ew(4, { from: r2, to: t2 })) : e11 instanceof Error ? s2(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? s2(ew(2, { from: t2, to: e11 })) : (i2 && l2.enterCallbacks[o2] === i2 && "function" == typeof e11 && i2.push(e11), u2());
    }, f2 = Promise.resolve(a2(() => e10.call(l2 && l2.instances[o2], t2, r2, c2)));
    e10.length < 3 && (f2 = f2.then(c2)), f2.catch((e11) => s2(e11));
  });
}
function eB(e10, t2, r2, l2) {
  let o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (e11) => e11(), a2 = [];
  for (let i2 of e10)
    for (let e11 in i2.components) {
      let u2 = i2.components[e11];
      if ("beforeRouteEnter" === t2 || i2.instances[e11]) {
        if ("object" == typeof u2 || "displayName" in u2 || "props" in u2 || "__vccOpts" in u2) {
          let s2 = (u2.__vccOpts || u2)[t2];
          s2 && a2.push(eW(s2, r2, l2, i2, e11, o2));
        } else {
          let s2 = u2();
          a2.push(() => s2.then((a3) => {
            if (!a3)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${i2.path}"`));
            let u3 = a3.__esModule || "Module" === a3[Symbol.toStringTag] ? a3.default : a3;
            i2.components[e11] = u3;
            let s3 = (u3.__vccOpts || u3)[t2];
            return s3 && eW(s3, r2, l2, i2, e11, o2)();
          }));
        }
      }
    }
  return a2;
}
function eI(e10) {
  let r2 = u(eD), l2 = u(eq), o2 = c(() => {
    let l3 = t(e10.to);
    return r2.resolve(l3);
  }), a2 = c(() => {
    let { matched: e11 } = o2.value, { length: t2 } = e11, r3 = e11[t2 - 1], a3 = l2.matched;
    if (!r3 || !a3.length)
      return -1;
    let i3 = a3.findIndex(ea.bind(null, r3));
    if (i3 > -1)
      return i3;
    let u2 = eK(e11[t2 - 2]);
    return t2 > 1 && eK(r3) === u2 && a3[a3.length - 1].path !== u2 ? a3.findIndex(ea.bind(null, e11[t2 - 2])) : i3;
  }), i2 = c(() => a2.value > -1 && function(e11, t2) {
    for (let r3 in t2) {
      let l3 = t2[r3], o3 = e11[r3];
      if ("string" == typeof l3) {
        if (l3 !== o3)
          return false;
      } else if (!q(o3) || o3.length !== l3.length || l3.some((e12, t3) => e12 !== o3[t3]))
        return false;
    }
    return true;
  }(l2.params, o2.value.params)), s2 = c(() => a2.value > -1 && a2.value === l2.matched.length - 1 && ei(l2.params, o2.value.params));
  return { route: o2, href: c(() => o2.value.href), isActive: i2, isExactActive: s2, navigate: function() {
    let l3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !function(e11) {
      if (!e11.metaKey && !e11.altKey && !e11.ctrlKey && !e11.shiftKey && !e11.defaultPrevented && (void 0 === e11.button || 0 === e11.button)) {
        if (e11.currentTarget && e11.currentTarget.getAttribute) {
          let t2 = e11.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t2))
            return;
        }
        return e11.preventDefault && e11.preventDefault(), true;
      }
    }(l3) ? Promise.resolve() : r2[t(e10.replace) ? "replace" : "push"](t(e10.to)).catch(D);
  } };
}
let eG = s({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: eI, setup(e10, t2) {
  let { slots: r2 } = t2, o2 = l(eI(e10)), { options: a2 } = u(eD), i2 = c(() => ({ [eN(e10.activeClass, a2.linkActiveClass, "router-link-active")]: o2.isActive, [eN(e10.exactActiveClass, a2.linkExactActiveClass, "router-link-exact-active")]: o2.isExactActive }));
  return () => {
    let t3 = r2.default && r2.default(o2);
    return e10.custom ? t3 : f("a", { "aria-current": o2.isExactActive ? e10.ariaCurrentValue : null, href: o2.href, onClick: o2.navigate, class: i2.value }, t3);
  };
} });
function eK(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let eN = (e10, t2, r2) => null != e10 ? e10 : null != t2 ? t2 : r2, eT = s({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e10, r2) {
  let { attrs: l2, slots: a2 } = r2, i2 = u(eL), s2 = c(() => e10.route || i2.value), h2 = u(eM, 0), v2 = c(() => {
    let e11, r3 = t(h2), { matched: l3 } = s2.value;
    for (; (e11 = l3[r3]) && !e11.components; )
      r3++;
    return r3;
  }), m2 = c(() => s2.value.matched[v2.value]);
  p(eM, c(() => v2.value + 1)), p(eF, m2), p(eL, s2);
  let g2 = o();
  return d(() => [g2.value, m2.value, e10.name], (e11, t2) => {
    let [r3, l3, o2] = e11, [a3, i3, u2] = t2;
    l3 && (l3.instances[o2] = r3, i3 && i3 !== l3 && r3 && r3 === a3 && (l3.leaveGuards.size || (l3.leaveGuards = i3.leaveGuards), l3.updateGuards.size || (l3.updateGuards = i3.updateGuards))), !r3 || !l3 || i3 && ea(l3, i3) && a3 || (l3.enterCallbacks[o2] || []).forEach((e12) => e12(r3));
  }, { flush: "post" }), () => {
    let t2 = s2.value, r3 = e10.name, o2 = m2.value, i3 = o2 && o2.components[r3];
    if (!i3)
      return eV(a2.default, { Component: i3, route: t2 });
    let u2 = o2.props[r3], c2 = f(i3, F({}, u2 ? true === u2 ? t2.params : "function" == typeof u2 ? u2(t2) : u2 : null, l2, { onVnodeUnmounted: (e11) => {
      e11.component.isUnmounted && (o2.instances[r3] = null);
    }, ref: g2 }));
    return eV(a2.default, { Component: c2, route: t2 }) || c2;
  };
} });
function eV(e10, t2) {
  if (!e10)
    return null;
  let r2 = e10(t2);
  return 1 === r2.length ? r2[0] : r2;
}
function eH(l2) {
  let o2, a2, u2;
  let s2 = function(e10, t2) {
    let r2 = [], l3 = /* @__PURE__ */ new Map();
    function o3(e11, i2, u3) {
      let s3, c3;
      let f3 = !u3, p3 = { path: e11.path, redirect: e11.redirect, name: e11.name, meta: e11.meta || {}, aliasOf: void 0, beforeEnter: e11.beforeEnter, props: function(e12) {
        let t3 = {}, r3 = e12.props || false;
        if ("component" in e12)
          t3.default = r3;
        else
          for (let l4 in e12.components)
            t3[l4] = "object" == typeof r3 ? r3[l4] : r3;
        return t3;
      }(e11), children: e11.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e11 ? e11.components || null : e11.component && { default: e11.component } };
      p3.aliasOf = u3 && u3.record;
      let d3 = eC(t2, e11), h3 = [p3];
      if ("alias" in e11)
        for (let t3 of "string" == typeof e11.alias ? [e11.alias] : e11.alias)
          h3.push(F({}, p3, { components: u3 ? u3.record.components : p3.components, path: t3, aliasOf: u3 ? u3.record : p3 }));
      for (let t3 of h3) {
        let { path: h4 } = t3;
        if (i2 && "/" !== h4[0]) {
          let e12 = i2.record.path, r3 = "/" === e12[e12.length - 1] ? "" : "/";
          t3.path = i2.record.path + (h4 && r3 + h4);
        }
        if (s3 = function(e12, t4, r3) {
          let l4 = function(e13, t5) {
            let r4 = F({}, eE, t5), l5 = [], o5 = r4.start ? "^" : "", a4 = [];
            for (let t6 of e13) {
              let e14 = t6.length ? [] : [90];
              r4.strict && !t6.length && (o5 += "/");
              for (let l6 = 0; l6 < t6.length; l6++) {
                let i4 = t6[l6], u4 = 40 + (r4.sensitive ? 0.25 : 0);
                if (0 === i4.type)
                  l6 || (o5 += "/"), o5 += i4.value.replace(ej, "\\$&"), u4 += 40;
                else if (1 === i4.type) {
                  let { value: e15, repeatable: r5, optional: s4, regexp: c4 } = i4;
                  a4.push({ name: e15, repeatable: r5, optional: s4 });
                  let f4 = c4 || eO;
                  if (f4 !== eO) {
                    u4 += 10;
                    try {
                      RegExp(`(${f4})`);
                    } catch (t7) {
                      throw Error(`Invalid custom RegExp for param "${e15}" (${f4}): ` + t7.message);
                    }
                  }
                  let p4 = r5 ? `((?:${f4})(?:/(?:${f4}))*)` : `(${f4})`;
                  l6 || (p4 = s4 && t6.length < 2 ? `(?:/${p4})` : "/" + p4), s4 && (p4 += "?"), o5 += p4, u4 += 20, s4 && (u4 += -8), r5 && (u4 += -20), ".*" === f4 && (u4 += -50);
                }
                e14.push(u4);
              }
              l5.push(e14);
            }
            if (r4.strict && r4.end) {
              let e14 = l5.length - 1;
              l5[e14][l5[e14].length - 1] += 0.7000000000000001;
            }
            r4.strict || (o5 += "/?"), r4.end ? o5 += "$" : r4.strict && (o5 += "(?:/|$)");
            let i3 = new RegExp(o5, r4.sensitive ? "" : "i");
            return { re: i3, score: l5, keys: a4, parse: function(e14) {
              let t6 = e14.match(i3), r5 = {};
              if (!t6)
                return null;
              for (let e15 = 1; e15 < t6.length; e15++) {
                let l6 = t6[e15] || "", o6 = a4[e15 - 1];
                r5[o6.name] = l6 && o6.repeatable ? l6.split("/") : l6;
              }
              return r5;
            }, stringify: function(t6) {
              let r5 = "", l6 = false;
              for (let o6 of e13)
                for (let e14 of (l6 && r5.endsWith("/") || (r5 += "/"), l6 = false, o6))
                  if (0 === e14.type)
                    r5 += e14.value;
                  else if (1 === e14.type) {
                    let { value: a5, repeatable: i4, optional: u4 } = e14, s4 = a5 in t6 ? t6[a5] : "";
                    if (q(s4) && !i4)
                      throw Error(`Provided param "${a5}" is an array but it is not repeatable (* or + modifiers)`);
                    let c4 = q(s4) ? s4.join("/") : s4;
                    if (!c4) {
                      if (u4)
                        o6.length < 2 && (r5.endsWith("/") ? r5 = r5.slice(0, -1) : l6 = true);
                      else
                        throw Error(`Missing required param "${a5}"`);
                    }
                    r5 += c4;
                  }
              return r5 || "/";
            } };
          }(function(e13) {
            let t5, r4;
            if (!e13)
              return [[]];
            if ("/" === e13)
              return [[ek]];
            if (!e13.startsWith("/"))
              throw Error(`Invalid path "${e13}"`);
            function l5(e14) {
              throw Error(`ERR (${o5})/"${c4}": ${e14}`);
            }
            let o5 = 0, a4 = 0, i3 = [];
            function u4() {
              t5 && i3.push(t5), t5 = [];
            }
            let s4 = 0, c4 = "", f4 = "";
            function p4() {
              c4 && (0 === o5 ? t5.push({ type: 0, value: c4 }) : 1 === o5 || 2 === o5 || 3 === o5 ? (t5.length > 1 && ("*" === r4 || "+" === r4) && l5(`A repeatable param (${c4}) must be alone in its segment. eg: '/:ids+.`), t5.push({ type: 1, value: c4, regexp: f4, repeatable: "*" === r4 || "+" === r4, optional: "*" === r4 || "?" === r4 })) : l5("Invalid state to consume buffer"), c4 = "");
            }
            for (; s4 < e13.length; ) {
              if ("\\" === (r4 = e13[s4++]) && 2 !== o5) {
                a4 = o5, o5 = 4;
                continue;
              }
              switch (o5) {
                case 0:
                  "/" === r4 ? (c4 && p4(), u4()) : ":" === r4 ? (p4(), o5 = 1) : c4 += r4;
                  break;
                case 4:
                  c4 += r4, o5 = a4;
                  break;
                case 1:
                  "(" === r4 ? o5 = 2 : eR.test(r4) ? c4 += r4 : (p4(), o5 = 0, "*" !== r4 && "?" !== r4 && "+" !== r4 && s4--);
                  break;
                case 2:
                  ")" === r4 ? "\\" == f4[f4.length - 1] ? f4 = f4.slice(0, -1) + r4 : o5 = 3 : f4 += r4;
                  break;
                case 3:
                  p4(), o5 = 0, "*" !== r4 && "?" !== r4 && "+" !== r4 && s4--, f4 = "";
                  break;
                default:
                  l5("Unknown state");
              }
            }
            return 2 === o5 && l5(`Unfinished custom RegExp for param "${c4}"`), p4(), u4(), i3;
          }(e12.path), r3), o4 = F(l4, { record: e12, parent: t4, children: [], alias: [] });
          return t4 && !o4.record.aliasOf == !t4.record.aliasOf && t4.children.push(o4), o4;
        }(t3, i2, d3), u3 ? u3.alias.push(s3) : ((c3 = c3 || s3) !== s3 && c3.alias.push(s3), f3 && e11.name && !e$(s3) && a3(e11.name)), p3.children) {
          let e12 = p3.children;
          for (let t4 = 0; t4 < e12.length; t4++)
            o3(e12[t4], s3, u3 && u3.children[t4]);
        }
        u3 = u3 || s3, (s3.record.components && Object.keys(s3.record.components).length || s3.record.name || s3.record.redirect) && function(e12) {
          let t4 = 0;
          for (; t4 < r2.length && function(e13, t5) {
            let r3 = 0, l4 = e13.score, o4 = t5.score;
            for (; r3 < l4.length && r3 < o4.length; ) {
              let e14 = function(e15, t6) {
                let r4 = 0;
                for (; r4 < e15.length && r4 < t6.length; ) {
                  let l5 = t6[r4] - e15[r4];
                  if (l5)
                    return l5;
                  r4++;
                }
                return e15.length < t6.length ? 1 === e15.length && 80 === e15[0] ? -1 : 1 : e15.length > t6.length ? 1 === t6.length && 80 === t6[0] ? 1 : -1 : 0;
              }(l4[r3], o4[r3]);
              if (e14)
                return e14;
              r3++;
            }
            if (1 === Math.abs(o4.length - l4.length)) {
              if (eS(l4))
                return 1;
              if (eS(o4))
                return -1;
            }
            return o4.length - l4.length;
          }(e12, r2[t4]) >= 0 && (e12.record.path !== r2[t4].record.path || !function e13(t5, r3) {
            return r3.children.some((r4) => r4 === t5 || e13(t5, r4));
          }(e12, r2[t4])); )
            t4++;
          r2.splice(t4, 0, e12), e12.record.name && !e$(e12) && l3.set(e12.record.name, e12);
        }(s3);
      }
      return c3 ? () => {
        a3(c3);
      } : D;
    }
    function a3(e11) {
      if (ey(e11)) {
        let t3 = l3.get(e11);
        t3 && (l3.delete(e11), r2.splice(r2.indexOf(t3), 1), t3.children.forEach(a3), t3.alias.forEach(a3));
      } else {
        let t3 = r2.indexOf(e11);
        t3 > -1 && (r2.splice(t3, 1), e11.record.name && l3.delete(e11.record.name), e11.children.forEach(a3), e11.alias.forEach(a3));
      }
    }
    return t2 = eC({ strict: false, end: true, sensitive: false }, t2), e10.forEach((e11) => o3(e11)), { addRoute: o3, resolve: function(e11, t3) {
      let o4, a4, i2;
      let u3 = {};
      if ("name" in e11 && e11.name) {
        if (!(o4 = l3.get(e11.name)))
          throw ew(1, { location: e11 });
        i2 = o4.record.name, u3 = F(ex(t3.params, o4.keys.filter((e12) => !e12.optional).concat(o4.parent ? o4.parent.keys.filter((e12) => e12.optional) : []).map((e12) => e12.name)), e11.params && ex(e11.params, o4.keys.map((e12) => e12.name))), a4 = o4.stringify(u3);
      } else if (null != e11.path)
        a4 = e11.path, (o4 = r2.find((e12) => e12.re.test(a4))) && (u3 = o4.parse(a4), i2 = o4.record.name);
      else {
        if (!(o4 = t3.name ? l3.get(t3.name) : r2.find((e12) => e12.re.test(t3.path))))
          throw ew(1, { location: e11, currentLocation: t3 });
        i2 = o4.record.name, u3 = F({}, t3.params, e11.params), a4 = o4.stringify(u3);
      }
      let s3 = [], c3 = o4;
      for (; c3; )
        s3.unshift(c3.record), c3 = c3.parent;
      return { name: i2, path: a4, params: u3, matched: s3, meta: s3.reduce((e12, t4) => F(e12, t4.meta), {}) };
    }, removeRoute: a3, getRoutes: function() {
      return r2;
    }, getRecordMatcher: function(e11) {
      return l3.get(e11);
    } };
  }(l2.routes, l2), c2 = l2.parseQuery || eA, f2 = l2.stringifyQuery || ez, p2 = l2.history, d2 = eU(), h2 = eU(), v2 = eU(), m2 = e(eb), g2 = eb;
  z && l2.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let y2 = M.bind(null, (e10) => "" + e10), b2 = M.bind(null, ee), _2 = M.bind(null, et);
  function w2(e10, t2) {
    let r2;
    if (t2 = F({}, t2 || m2.value), "string" == typeof e10) {
      let r3 = el(c2, e10, t2.path), l4 = s2.resolve({ path: r3.path }, t2), o4 = p2.createHref(r3.fullPath);
      return F(r3, l4, { params: _2(l4.params), hash: et(r3.hash), redirectedFrom: void 0, href: o4 });
    }
    if (null != e10.path)
      r2 = F({}, e10, { path: el(c2, e10.path, t2.path).path });
    else {
      let l4 = F({}, e10.params);
      for (let e11 in l4)
        null == l4[e11] && delete l4[e11];
      r2 = F({}, e10, { params: b2(l4) }), t2.params = b2(t2.params);
    }
    let l3 = s2.resolve(r2, t2), o3 = e10.hash || "";
    l3.params = y2(_2(l3.params));
    let a3 = function(e11, t3) {
      let r3 = t3.query ? e11(t3.query) : "";
      return t3.path + (r3 && "?") + r3 + (t3.hash || "");
    }(f2, F({}, e10, { hash: Z(o3).replace(H, "{").replace(Q, "}").replace(T, "^"), path: l3.path })), i2 = p2.createHref(a3);
    return F({ fullPath: a3, hash: o3, query: f2 === ez ? function(e11) {
      let t3 = {};
      for (let r3 in e11) {
        let l4 = e11[r3];
        void 0 !== l4 && (t3[r3] = q(l4) ? l4.map((e12) => null == e12 ? null : "" + e12) : null == l4 ? l4 : "" + l4);
      }
      return t3;
    }(e10.query) : e10.query || {} }, l3, { redirectedFrom: void 0, href: i2 });
  }
  function P2(e10) {
    return "string" == typeof e10 ? el(c2, e10, m2.value.path) : F({}, e10);
  }
  function O2(e10, t2) {
    if (g2 !== e10)
      return ew(8, { from: t2, to: e10 });
  }
  function E2(e10) {
    let t2 = e10.matched[e10.matched.length - 1];
    if (t2 && t2.redirect) {
      let { redirect: r2 } = t2, l3 = "function" == typeof r2 ? r2(e10) : r2;
      return "string" == typeof l3 && ((l3 = l3.includes("?") || l3.includes("#") ? l3 = P2(l3) : { path: l3 }).params = {}), F({ query: e10.query, hash: e10.hash, params: null != l3.path ? {} : e10.params }, l3);
    }
  }
  function j2(e10, t2) {
    let r2;
    let l3 = g2 = w2(e10), o3 = m2.value, a3 = e10.state, i2 = e10.force, u3 = true === e10.replace, s3 = E2(l3);
    return s3 ? j2(F(P2(s3), { state: "object" == typeof s3 ? F({}, a3, s3.state) : a3, force: i2, replace: u3 }), t2 || l3) : (l3.redirectedFrom = t2, !i2 && function(e11, t3, r3) {
      let l4 = t3.matched.length - 1, o4 = r3.matched.length - 1;
      return l4 > -1 && l4 === o4 && ea(t3.matched[l4], r3.matched[o4]) && ei(t3.params, r3.params) && e11(t3.query) === e11(r3.query) && t3.hash === r3.hash;
    }(f2, o3, l3) && (r2 = ew(16, { to: l3, from: o3 }), W2(o3, o3, true, false)), (r2 ? Promise.resolve(r2) : R2(l3, o3)).catch((e11) => eP(e11) ? eP(e11, 2) ? e11 : U2(e11) : L2(e11, l3, o3)).then((e11) => {
      if (e11) {
        if (eP(e11, 2))
          return j2(F({ replace: u3 }, P2(e11.to), { state: "object" == typeof e11.to ? F({}, a3, e11.to.state) : a3, force: i2 }), t2 || l3);
      } else
        e11 = $2(l3, o3, true, u3, a3);
      return x2(l3, o3, e11), e11;
    }));
  }
  function S2(e10, t2) {
    let r2 = O2(e10, t2);
    return r2 ? Promise.reject(r2) : Promise.resolve();
  }
  function k2(e10) {
    let t2 = I2.values().next().value;
    return t2 && "function" == typeof t2.runWithContext ? t2.runWithContext(e10) : e10();
  }
  function R2(e10, t2) {
    let r2;
    let [l3, o3, a3] = function(e11, t3) {
      let r3 = [], l4 = [], o4 = [], a4 = Math.max(t3.matched.length, e11.matched.length);
      for (let i3 = 0; i3 < a4; i3++) {
        let a5 = t3.matched[i3];
        a5 && (e11.matched.find((e12) => ea(e12, a5)) ? l4.push(a5) : r3.push(a5));
        let u3 = e11.matched[i3];
        u3 && !t3.matched.find((e12) => ea(e12, u3)) && o4.push(u3);
      }
      return [r3, l4, o4];
    }(e10, t2);
    for (let o4 of (r2 = eB(l3.reverse(), "beforeRouteLeave", e10, t2), l3))
      o4.leaveGuards.forEach((l4) => {
        r2.push(eW(l4, e10, t2));
      });
    let i2 = S2.bind(null, e10, t2);
    return r2.push(i2), K2(r2).then(() => {
      for (let l4 of (r2 = [], d2.list()))
        r2.push(eW(l4, e10, t2));
      return r2.push(i2), K2(r2);
    }).then(() => {
      for (let l4 of (r2 = eB(o3, "beforeRouteUpdate", e10, t2), o3))
        l4.updateGuards.forEach((l5) => {
          r2.push(eW(l5, e10, t2));
        });
      return r2.push(i2), K2(r2);
    }).then(() => {
      for (let l4 of (r2 = [], a3))
        if (l4.beforeEnter) {
          if (q(l4.beforeEnter))
            for (let o4 of l4.beforeEnter)
              r2.push(eW(o4, e10, t2));
          else
            r2.push(eW(l4.beforeEnter, e10, t2));
        }
      return r2.push(i2), K2(r2);
    }).then(() => (e10.matched.forEach((e11) => e11.enterCallbacks = {}), (r2 = eB(a3, "beforeRouteEnter", e10, t2, k2)).push(i2), K2(r2))).then(() => {
      for (let l4 of (r2 = [], h2.list()))
        r2.push(eW(l4, e10, t2));
      return r2.push(i2), K2(r2);
    }).catch((e11) => eP(e11, 8) ? e11 : Promise.reject(e11));
  }
  function x2(e10, t2, r2) {
    v2.list().forEach((l3) => k2(() => l3(e10, t2, r2)));
  }
  function $2(e10, t2, r2, l3, o3) {
    let a3 = O2(e10, t2);
    if (a3)
      return a3;
    let i2 = t2 === eb, u3 = z ? history.state : {};
    r2 && (l3 || i2 ? p2.replace(e10.fullPath, F({ scroll: i2 && u3 && u3.scroll }, o3)) : p2.push(e10.fullPath, o3)), m2.value = e10, W2(e10, t2, r2, i2), U2();
  }
  let C2 = eU(), A2 = eU();
  function L2(e10, t2, r2) {
    U2(e10);
    let l3 = A2.list();
    return l3.length ? l3.forEach((l4) => l4(e10, t2, r2)) : console.error(e10), Promise.reject(e10);
  }
  function U2(e10) {
    return a2 || (a2 = !e10, o2 || (o2 = p2.listen((e11, t2, r2) => {
      if (!G2.listening)
        return;
      let l3 = w2(e11), o3 = E2(l3);
      if (o3) {
        j2(F(o3, { replace: true }), l3).catch(D);
        return;
      }
      g2 = l3;
      let a3 = m2.value;
      if (z) {
        var i2, u3;
        i2 = ep(a3.fullPath, r2.delta), u3 = ef(), ed.set(i2, u3);
      }
      R2(l3, a3).catch((e12) => eP(e12, 12) ? e12 : eP(e12, 2) ? (j2(e12.to, l3).then((e13) => {
        eP(e13, 20) && !r2.delta && r2.type === e3.pop && p2.go(-1, false);
      }).catch(D), Promise.reject()) : (r2.delta && p2.go(-r2.delta, false), L2(e12, l3, a3))).then((e12) => {
        (e12 = e12 || $2(l3, a3, false)) && (r2.delta && !eP(e12, 8) ? p2.go(-r2.delta, false) : r2.type === e3.pop && eP(e12, 20) && p2.go(-1, false)), x2(l3, a3, e12);
      }).catch(D);
    })), C2.list().forEach((t2) => {
      let [r2, l3] = t2;
      return e10 ? l3(e10) : r2();
    }), C2.reset()), e10;
  }
  function W2(e10, t2, r2, o3) {
    let { scrollBehavior: a3 } = l2;
    if (!z || !a3)
      return Promise.resolve();
    let u3 = !r2 && function(e11) {
      let t3 = ed.get(e11);
      return ed.delete(e11), t3;
    }(ep(e10.fullPath, 0)) || (o3 || !r2) && history.state && history.state.scroll || null;
    return i().then(() => a3(e10, t2, u3)).then((e11) => e11 && function(e12) {
      let t3;
      if ("el" in e12) {
        let r3 = e12.el, l3 = "string" == typeof r3 && r3.startsWith("#"), o4 = "string" == typeof r3 ? l3 ? document.getElementById(r3.slice(1)) : document.querySelector(r3) : r3;
        if (!o4)
          return;
        t3 = function(e13, t4) {
          let r4 = document.documentElement.getBoundingClientRect(), l4 = e13.getBoundingClientRect();
          return { behavior: t4.behavior, left: l4.left - r4.left - (t4.left || 0), top: l4.top - r4.top - (t4.top || 0) };
        }(o4, e12);
      } else
        t3 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t3) : window.scrollTo(null != t3.left ? t3.left : window.scrollX, null != t3.top ? t3.top : window.scrollY);
    }(e11)).catch((r3) => L2(r3, e10, t2));
  }
  let B2 = (e10) => p2.go(e10), I2 = /* @__PURE__ */ new Set(), G2 = { currentRoute: m2, listening: true, addRoute: function(e10, t2) {
    let r2, l3;
    return ey(e10) ? (r2 = s2.getRecordMatcher(e10), l3 = t2) : l3 = e10, s2.addRoute(l3, r2);
  }, removeRoute: function(e10) {
    let t2 = s2.getRecordMatcher(e10);
    t2 && s2.removeRoute(t2);
  }, hasRoute: function(e10) {
    return !!s2.getRecordMatcher(e10);
  }, getRoutes: function() {
    return s2.getRoutes().map((e10) => e10.record);
  }, resolve: w2, options: l2, push: function(e10) {
    return j2(e10);
  }, replace: function(e10) {
    return j2(F(P2(e10), { replace: true }));
  }, go: B2, back: () => B2(-1), forward: () => B2(1), beforeEach: d2.add, beforeResolve: h2.add, afterEach: v2.add, onError: A2.add, isReady: function() {
    return a2 && m2.value !== eb ? Promise.resolve() : new Promise((e10, t2) => {
      C2.add([e10, t2]);
    });
  }, install(e10) {
    e10.component("RouterLink", eG), e10.component("RouterView", eT), e10.config.globalProperties.$router = this, Object.defineProperty(e10.config.globalProperties, "$route", { enumerable: true, get: () => t(m2) }), z && !u2 && m2.value === eb && (u2 = true, j2(p2.location).catch((e11) => {
    }));
    let l3 = {};
    for (let e11 in eb)
      Object.defineProperty(l3, e11, { get: () => m2.value[e11], enumerable: true });
    e10.provide(eD, this), e10.provide(eq, r(l3)), e10.provide(eL, m2);
    let i2 = e10.unmount;
    I2.add(e10), e10.unmount = function() {
      I2.delete(e10), I2.size < 1 && (g2 = eb, o2 && o2(), o2 = null, m2.value = eb, u2 = false, a2 = false), i2();
    };
  } };
  function K2(e10) {
    return e10.reduce((e11, t2) => e11.then(() => k2(t2)), Promise.resolve());
  }
  return G2;
}
function eX() {
  return u(eD);
}
function eQ() {
  return u(eq);
}
let eY = eG, eZ = eT;
function eJ(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), l2 = 1; l2 < t2; l2++)
    r2[l2 - 1] = arguments[l2];
  return m(...r2)(g(e10));
}
var e0, e1, e2, e3, e4, e5, e8, e7 = Symbol.for("immer-nothing"), e6 = Symbol.for("immer-draftable"), e9 = Symbol.for("immer-state");
function te(e10) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), l2 = 1; l2 < t2; l2++)
    r2[l2 - 1] = arguments[l2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var tt = Object.getPrototypeOf;
function tr(e10) {
  return !!e10 && !!e10[e9];
}
function tn(e10) {
  var t2;
  return !!e10 && (to(e10) || Array.isArray(e10) || !!e10[e6] || !!(null === (t2 = e10.constructor) || void 0 === t2 ? void 0 : t2[e6]) || tc(e10) || tf(e10));
}
var tl = Object.prototype.constructor.toString();
function to(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t2 = tt(e10);
  if (null === t2)
    return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === tl;
}
function ta(e10, t2) {
  0 === ti(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t2(r2, e10[r2], e10);
  }) : e10.forEach((r2, l2) => t2(l2, r2, e10));
}
function ti(e10) {
  let t2 = e10[e9];
  return t2 ? t2.type_ : Array.isArray(e10) ? 1 : tc(e10) ? 2 : tf(e10) ? 3 : 0;
}
function tu(e10, t2) {
  return 2 === ti(e10) ? e10.has(t2) : Object.prototype.hasOwnProperty.call(e10, t2);
}
function ts(e10, t2, r2) {
  let l2 = ti(e10);
  2 === l2 ? e10.set(t2, r2) : 3 === l2 ? e10.add(r2) : e10[t2] = r2;
}
function tc(e10) {
  return e10 instanceof Map;
}
function tf(e10) {
  return e10 instanceof Set;
}
function tp(e10) {
  return e10.copy_ || e10.base_;
}
function td(e10, t2) {
  if (tc(e10))
    return new Map(e10);
  if (tf(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t2 && to(e10))
    return tt(e10) ? { ...e10 } : Object.assign(/* @__PURE__ */ Object.create(null), e10);
  let r2 = Object.getOwnPropertyDescriptors(e10);
  delete r2[e9];
  let l2 = Reflect.ownKeys(r2);
  for (let t3 = 0; t3 < l2.length; t3++) {
    let o2 = l2[t3], a2 = r2[o2];
    false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (r2[o2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e10[o2] });
  }
  return Object.create(tt(e10), r2);
}
function th(e10) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return tm(e10) || tr(e10) || !tn(e10) || (ti(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = tv), Object.freeze(e10), t2 && Object.entries(e10).forEach((e11) => {
    let [t3, r2] = e11;
    return th(r2, true);
  })), e10;
}
function tv() {
  te(2);
}
function tm(e10) {
  return Object.isFrozen(e10);
}
var tg = {};
function ty(e10) {
  let t2 = tg[e10];
  return t2 || te(0, e10), t2;
}
function tb(e10, t2) {
  t2 && (ty("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t2);
}
function t_(e10) {
  tw(e10), e10.drafts_.forEach(tO), e10.drafts_ = null;
}
function tw(e10) {
  e10 === e8 && (e8 = e10.parent_);
}
function tP(e10) {
  return e8 = { drafts_: [], parent_: e8, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function tO(e10) {
  let t2 = e10[e9];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function tE(e10, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[e9].modified_ && (t_(t2), te(4)), tn(e10) && (e10 = tj(t2, e10), t2.parent_ || tk(t2, e10)), t2.patches_ && ty("Patches").generateReplacementPatches_(r2[e9].base_, e10, t2.patches_, t2.inversePatches_)) : e10 = tj(t2, r2, []), t_(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e10 !== e7 ? e10 : void 0;
}
function tj(e10, t2, r2) {
  if (tm(t2))
    return t2;
  let l2 = t2[e9];
  if (!l2)
    return ta(t2, (o2, a2) => tS(e10, l2, t2, o2, a2, r2)), t2;
  if (l2.scope_ !== e10)
    return t2;
  if (!l2.modified_)
    return tk(e10, l2.base_, true), l2.base_;
  if (!l2.finalized_) {
    l2.finalized_ = true, l2.scope_.unfinalizedDrafts_--;
    let t3 = l2.copy_, o2 = t3, a2 = false;
    3 === l2.type_ && (o2 = new Set(t3), t3.clear(), a2 = true), ta(o2, (o3, i2) => tS(e10, l2, t3, o3, i2, r2, a2)), tk(e10, t3, false), r2 && e10.patches_ && ty("Patches").generatePatches_(l2, r2, e10.patches_, e10.inversePatches_);
  }
  return l2.copy_;
}
function tS(e10, t2, r2, l2, o2, a2, i2) {
  if (tr(o2)) {
    let i3 = tj(e10, o2, a2 && t2 && 3 !== t2.type_ && !tu(t2.assigned_, l2) ? a2.concat(l2) : void 0);
    if (ts(r2, l2, i3), !tr(i3))
      return;
    e10.canAutoFreeze_ = false;
  } else
    i2 && r2.add(o2);
  if (tn(o2) && !tm(o2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    tj(e10, o2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof l2 && Object.prototype.propertyIsEnumerable.call(r2, l2) && tk(e10, o2);
  }
}
function tk(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && th(t2, r2);
}
var tR = { get(e10, t2) {
  if (t2 === e9)
    return e10;
  let r2 = tp(e10);
  if (!tu(r2, t2))
    return function(e11, t3, r3) {
      var l3;
      let o2 = tC(t3, r3);
      return o2 ? "value" in o2 ? o2.value : null === (l3 = o2.get) || void 0 === l3 ? void 0 : l3.call(e11.draft_) : void 0;
    }(e10, r2, t2);
  let l2 = r2[t2];
  return e10.finalized_ || !tn(l2) ? l2 : l2 === t$(e10.base_, t2) ? (tz(e10), e10.copy_[t2] = tF(l2, e10)) : l2;
}, has: (e10, t2) => t2 in tp(e10), ownKeys: (e10) => Reflect.ownKeys(tp(e10)), set(e10, t2, r2) {
  let l2 = tC(tp(e10), t2);
  if (null == l2 ? void 0 : l2.set)
    return l2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let l3 = t$(tp(e10), t2), o2 = null == l3 ? void 0 : l3[e9];
    if (o2 && o2.base_ === r2)
      return e10.copy_[t2] = r2, e10.assigned_[t2] = false, true;
    if ((r2 === l3 ? 0 !== r2 || 1 / r2 == 1 / l3 : r2 != r2 && l3 != l3) && (void 0 !== r2 || tu(e10.base_, t2)))
      return true;
    tz(e10), tA(e10);
  }
  return !!(e10.copy_[t2] === r2 && (void 0 !== r2 || t2 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t2])) || (e10.copy_[t2] = r2, e10.assigned_[t2] = true, true);
}, deleteProperty: (e10, t2) => (void 0 !== t$(e10.base_, t2) || t2 in e10.base_ ? (e10.assigned_[t2] = false, tz(e10), tA(e10)) : delete e10.assigned_[t2], e10.copy_ && delete e10.copy_[t2], true), getOwnPropertyDescriptor(e10, t2) {
  let r2 = tp(e10), l2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return l2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t2, enumerable: l2.enumerable, value: r2[t2] } : l2;
}, defineProperty() {
  te(11);
}, getPrototypeOf: (e10) => tt(e10.base_), setPrototypeOf() {
  te(12);
} }, tx = {};
function t$(e10, t2) {
  let r2 = e10[e9];
  return (r2 ? tp(r2) : e10)[t2];
}
function tC(e10, t2) {
  if (!(t2 in e10))
    return;
  let r2 = tt(e10);
  for (; r2; ) {
    let e11 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e11)
      return e11;
    r2 = tt(r2);
  }
}
function tA(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && tA(e10.parent_));
}
function tz(e10) {
  e10.copy_ || (e10.copy_ = td(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function tF(e10, t2) {
  let r2 = tc(e10) ? ty("MapSet").proxyMap_(e10, t2) : tf(e10) ? ty("MapSet").proxySet_(e10, t2) : function(e11, t3) {
    let r3 = Array.isArray(e11), l2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : e8, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, o2 = l2, a2 = tR;
    r3 && (o2 = [l2], a2 = tx);
    let { revoke: i2, proxy: u2 } = Proxy.revocable(o2, a2);
    return l2.draft_ = u2, l2.revoke_ = i2, u2;
  }(e10, t2);
  return (t2 ? t2.scope_ : e8).drafts_.push(r2), r2;
}
ta(tR, (e10, t2) => {
  tx[e10] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), tx.deleteProperty = function(e10, t2) {
  return tx.set.call(this, e10, t2, void 0);
}, tx.set = function(e10, t2, r2) {
  return tR.set.call(this, e10[0], t2, r2, e10[0]);
};
var tM = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t2, r2) => {
      let l2;
      if ("function" == typeof e11 && "function" != typeof t2) {
        let r3 = t2;
        t2 = e11;
        let l3 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var o2 = arguments.length, a2 = Array(o2 > 1 ? o2 - 1 : 0), i2 = 1; i2 < o2; i2++)
            a2[i2 - 1] = arguments[i2];
          return l3.produce(e12, (e13) => t2.call(this, e13, ...a2));
        };
      }
      if ("function" != typeof t2 && te(6), void 0 !== r2 && "function" != typeof r2 && te(7), tn(e11)) {
        let o2 = tP(this), a2 = tF(e11, void 0), i2 = true;
        try {
          l2 = t2(a2), i2 = false;
        } finally {
          i2 ? t_(o2) : tw(o2);
        }
        return tb(o2, r2), tE(l2, o2);
      }
      if (e11 && "object" == typeof e11)
        te(1, e11);
      else {
        if (void 0 === (l2 = t2(e11)) && (l2 = e11), l2 === e7 && (l2 = void 0), this.autoFreeze_ && th(l2, true), r2) {
          let t3 = [], o2 = [];
          ty("Patches").generateReplacementPatches_(e11, l2, t3, o2), r2(t3, o2);
        }
        return l2;
      }
    }, this.produceWithPatches = (e11, t2) => {
      let r2, l2;
      if ("function" == typeof e11) {
        var o2 = this;
        return function(t3) {
          for (var r3 = arguments.length, l3 = Array(r3 > 1 ? r3 - 1 : 0), a2 = 1; a2 < r3; a2++)
            l3[a2 - 1] = arguments[a2];
          return o2.produceWithPatches(t3, (t4) => e11(t4, ...l3));
        };
      }
      return [this.produce(e11, t2, (e12, t3) => {
        r2 = e12, l2 = t3;
      }), r2, l2];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t2;
    tn(e10) || te(8), tr(e10) && (tr(t2 = e10) || te(10, t2), e10 = function e11(t3) {
      let r3;
      if (!tn(t3) || tm(t3))
        return t3;
      let l3 = t3[e9];
      if (l3) {
        if (!l3.modified_)
          return l3.base_;
        l3.finalized_ = true, r3 = td(t3, l3.scope_.immer_.useStrictShallowCopy_);
      } else
        r3 = td(t3, true);
      return ta(r3, (t4, l4) => {
        ts(r3, t4, e11(l4));
      }), l3 && (l3.finalized_ = false), r3;
    }(t2));
    let r2 = tP(this), l2 = tF(e10, void 0);
    return l2[e9].isManual_ = true, tw(r2), l2;
  }
  finishDraft(e10, t2) {
    let r2 = e10 && e10[e9];
    r2 && r2.isManual_ || te(9);
    let { scope_: l2 } = r2;
    return tb(l2, t2), tE(void 0, l2);
  }
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t2) {
    let r2;
    for (r2 = t2.length - 1; r2 >= 0; r2--) {
      let l3 = t2[r2];
      if (0 === l3.path.length && "replace" === l3.op) {
        e10 = l3.value;
        break;
      }
    }
    r2 > -1 && (t2 = t2.slice(r2 + 1));
    let l2 = ty("Patches").applyPatches_;
    return tr(e10) ? l2(e10, t2) : this.produce(e10, (e11) => l2(e11, t2));
  }
}(), tD = tM.produce;
tM.produceWithPatches.bind(tM), tM.setAutoFreeze.bind(tM), tM.setUseStrictShallowCopy.bind(tM), tM.applyPatches.bind(tM), tM.createDraft.bind(tM), tM.finishDraft.bind(tM);
class tq extends y {
  next(e10) {
    let t2 = P(e10) ? tD(this.value, e10) : e10;
    Object.is(t2, this.value) || super.next(t2);
  }
}
function tL() {
  let e10;
  return a((t2, r2) => ({ get: () => (t2(), e10), set(t3) {
    var l2;
    let o2 = null !== (l2 = null == t3 ? void 0 : t3.$$forwardRef) && void 0 !== l2 ? l2 : t3;
    o2 !== e10 && (e10 = o2, r2());
  } }));
}
function tU(e10) {
  return (t2) => {
    let r2 = t2.subscribe(e10);
    h(() => r2.unsubscribe());
  };
}
function tW(e10) {
  return (t2) => {
    let r2;
    v(() => {
      r2 = t2.subscribe(e10);
    }), h(() => null == r2 ? void 0 : r2.unsubscribe());
  };
}
function tB(e10) {
  return (t2) => $(tI, { elem$: t2.pipe(b((t3) => () => e10(t3))), children: {} });
}
let tI = C({ elem$: j(), $default: j() }, (t2, r2) => {
  let l2 = e(null);
  return eJ(t2.elem$, _((e10) => {
    l2.value = e10;
  }), tU()), () => {
    var e10;
    return null === (e10 = l2.value) || void 0 === e10 ? void 0 : e10.call(l2);
  };
}, { name: "RxSlot" }), tG = (e10, t2) => {
  let r2 = new y(e10[t2]);
  return d(() => e10[t2], (e11) => r2.next(e11)), r2;
}, tK = (e10) => {
  let t2 = {};
  for (let r2 in e10) {
    if (P(e10[r2]) || w(e10[r2])) {
      t2[r2] = e10[r2];
      continue;
    }
    t2[`${r2}$`] = tG(e10, r2);
  }
  return t2;
};
function tN(e10, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l2 = null != t2 ? t2 : e10;
  return C(null != e10 ? e10 : {}, (e11, t3) => {
    let r3 = tK(e11), o2 = l2(new Proxy({}, { get(t4, l3) {
      var o3;
      return null !== (o3 = e11[l3]) && void 0 !== o3 ? o3 : r3[l3];
    } }), new Proxy({}, { get: (e12, r4) => "render" === r4 ? tB : t3[r4] }));
    return P(o2) ? o2 : () => o2;
  }, null != r2 ? r2 : t2);
}
let tT = (e10) => {
  let t2 = new tq(e10), r2 = a((e11, r3) => ({ get: () => (e11(), t2.value), set(e12) {
    var l2;
    let o2 = null !== (l2 = null == e12 ? void 0 : e12.$$forwardRef) && void 0 !== l2 ? l2 : e12;
    Object.is(o2, t2.value) || (t2.next(o2), r3());
  } }));
  return new Proxy(t2, { get(e11, l2) {
    var o2;
    return "next" === l2 ? (e12) => {
      r2.value = P(e12) ? tD(t2.value, e12) : e12;
    } : "value" === l2 ? r2.value : null !== (o2 = t2[l2]) && void 0 !== o2 ? o2 : r2[l2];
  }, set: (e11, t3, l2) => ("value" === t3 ? r2.value = l2 : e11[t3] = l2, true) });
}, tV = (e10, t2) => {
  if (S(e10) && S(t2)) {
    if (e10.length !== t2.length)
      return false;
    for (let r2 in e10)
      if (!Object.is(e10[r2], t2[r2]))
        return false;
    return true;
  }
  return Object.is(e10, t2);
}, tH = (e10) => {
  let t2;
  let r2 = null;
  return _({ next: (l2) => {
    tV(l2, r2) || (null == t2 || t2(), t2 = e10(l2), r2 = l2);
  }, unsubscribe: () => {
    null == t2 || t2();
  } });
};
function tX(e10, t2, r2) {
  var l2, o2, a2, i2;
  let s2;
  let c2 = k(e10) ? e10 : {}, f2 = P(e10) ? e10 : t2, d2 = null !== (l2 = null != r2 ? r2 : t2) && void 0 !== l2 ? l2 : {}, h2 = Symbol(null !== (o2 = d2.name) && void 0 !== o2 ? o2 : "");
  if (R(c2)) {
    let e11;
    let t3 = () => (void 0 === e11 && (e11 = f2({})), e11);
    return A(C({ value: j().optional(), $default: j().optional() }, (e12, r3) => {
      var l3;
      let { slots: o3 } = r3;
      return p(h2, null !== (l3 = e12.value) && void 0 !== l3 ? l3 : t3()), () => {
        var e13;
        return null === (e13 = o3.default) || void 0 === e13 ? void 0 : e13.call(o3);
      };
    }, { ...d2, name: `Provide(${null !== (a2 = d2.name) && void 0 !== a2 ? a2 : ""})` }), { use: () => u(h2, t3, true) });
  }
  let v2 = x(c2), m2 = () => v2.create({}), g2 = () => (void 0 === s2 && (s2 = f2(m2())), s2);
  return A(C({ ...c2, $default: j().optional() }, (e11, t3) => {
    let { slots: r3 } = t3;
    return p(h2, f2(e11)), () => {
      var e12;
      return null === (e12 = r3.default) || void 0 === e12 ? void 0 : e12.call(r3);
    };
  }, { ...d2, name: `Provide(${null !== (i2 = d2.name) && void 0 !== i2 ? i2 : ""})` }), { use: () => u(h2, g2, true) });
}
export {
  tq as I,
  eY as R,
  tW as a,
  tN as b,
  tX as c,
  tB as d,
  C as e,
  tL as f,
  tG as g,
  eZ as h,
  eQ as i,
  eH as j,
  eg as k,
  tT as o,
  eJ as r,
  tU as s,
  tH as t,
  eX as u
};
