import { s as e, u as t, a as r, n as o, i, d as l, r as u, c as a, h as c, p as s, b as f, w as p, e as h, o as d, f as v, j as y } from "./lib--nodepkg-vue-jsx-runtime.BN22WHLF.chunk.js";
import { i as b, p as m, k as g, c as _, d as w, b as x, e as S, o as O } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
function P(e10, t10) {
  let r6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = null != r6 ? r6 : t10, i2 = null != t10 ? t10 : e10, l2 = b(e10) ? {} : e10, [u2, a2] = m(Object.keys(l2), (e11) => /^on[A-Z]/.test(e11)), c2 = { emits: u2.map((e11) => g(e11.slice(2))), props: a2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r7 = l2[t11];
    return { ...e11, [t11]: { default: () => {
      try {
        return r7.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r7.validate(e12) } };
  }, {}) }, { name: s2, inheritAttrs: f2, ...p2 } = o2;
  return { ...p2, get name() {
    var h2;
    return null !== (h2 = this.displayName) && void 0 !== h2 ? h2 : s2;
  }, set name(n) {
    o2.name = n;
  }, setup: (e11, t11) => i2(e11, t11), emits: c2.emits, props: c2.props, inheritAttrs: f2, propTypes: l2 };
}
let E = (e10, t10) => new Proxy(e10, { get(e11, r6) {
  var o2;
  return null !== (o2 = t10[r6]) && void 0 !== o2 ? o2 : e11[r6];
} }), j = "undefined" != typeof document, k = Object.assign;
function A(e10, t10) {
  let r6 = {};
  for (let o2 in t10) {
    let i2 = t10[o2];
    r6[o2] = C(i2) ? i2.map(e10) : e10(i2);
  }
  return r6;
}
let R = () => {
}, C = Array.isArray, I = /#/g, z = /&/g, $ = /\//g, F = /=/g, M = /\?/g, T = /\+/g, D = /%5B/g, U = /%5D/g, q = /%5E/g, L = /%60/g, B = /%7B/g, W = /%7C/g, G = /%7D/g, N = /%20/g;
function K(e10) {
  return encodeURI("" + e10).replace(W, "|").replace(D, "[").replace(U, "]");
}
function V(e10) {
  return K(e10).replace(T, "%2B").replace(N, "+").replace(I, "%23").replace(z, "%26").replace(L, "`").replace(B, "{").replace(G, "}").replace(q, "^");
}
function Y(e10) {
  return null == e10 ? "" : K(e10).replace(I, "%23").replace(M, "%3F").replace($, "%2F");
}
function H(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (e11) {
  }
  return "" + e10;
}
let X = /\/$/, Q = (e10) => e10.replace(X, "");
function Z(e10, t10) {
  let r6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", o2, i2 = {}, l2 = "", u2 = "", a2 = t10.indexOf("#"), c2 = t10.indexOf("?");
  return a2 < c2 && a2 >= 0 && (c2 = -1), c2 > -1 && (o2 = t10.slice(0, c2), i2 = e10(l2 = t10.slice(c2 + 1, a2 > -1 ? a2 : t10.length))), a2 > -1 && (o2 = o2 || t10.slice(0, a2), u2 = t10.slice(a2, t10.length)), { fullPath: (o2 = function(e11, t11) {
    let r7, o3;
    if (e11.startsWith("/"))
      return e11;
    if (!e11)
      return t11;
    let i3 = t11.split("/"), l3 = e11.split("/"), u3 = l3[l3.length - 1];
    (".." === u3 || "." === u3) && l3.push("");
    let a3 = i3.length - 1;
    for (r7 = 0; r7 < l3.length; r7++)
      if ("." !== (o3 = l3[r7])) {
        if (".." === o3)
          a3 > 1 && a3--;
        else
          break;
      }
    return i3.slice(0, a3).join("/") + "/" + l3.slice(r7).join("/");
  }(null != o2 ? o2 : t10, r6)) + (l2 && "?") + l2 + u2, path: o2, query: i2, hash: H(u2) };
}
function J(e10, t10) {
  return t10 && e10.toLowerCase().startsWith(t10.toLowerCase()) ? e10.slice(t10.length) || "/" : e10;
}
function ee(e10, t10) {
  return (e10.aliasOf || e10) === (t10.aliasOf || t10);
}
function et(e10, t10) {
  if (Object.keys(e10).length !== Object.keys(t10).length)
    return false;
  for (let i2 in e10) {
    var r6, o2;
    if (r6 = e10[i2], o2 = t10[i2], C(r6) ? !er(r6, o2) : C(o2) ? !er(o2, r6) : r6 !== o2)
      return false;
  }
  return true;
}
function er(e10, t10) {
  return C(t10) ? e10.length === t10.length && e10.every((e11, r6) => e11 === t10[r6]) : 1 === e10.length && e10[0] === t10;
}
(eV = eX || (eX = {})).pop = "pop", eV.push = "push", (eY = eQ || (eQ = {})).back = "back", eY.forward = "forward", eY.unknown = "";
let en = /^[^#]+#/;
function eo(e10, t10) {
  return e10.replace(en, "#") + t10;
}
let ei = () => ({ left: window.scrollX, top: window.scrollY });
function el(e10, t10) {
  return (history.state ? history.state.position - t10 : -1) + e10;
}
let eu = /* @__PURE__ */ new Map(), ea = () => location.protocol + "//" + location.host;
function ec(e10, t10) {
  let { pathname: r6, search: o2, hash: i2 } = t10, l2 = e10.indexOf("#");
  if (l2 > -1) {
    let t11 = i2.includes(e10.slice(l2)) ? e10.slice(l2).length : 1, r7 = i2.slice(t11);
    return "/" !== r7[0] && (r7 = "/" + r7), J(r7, "");
  }
  return J(r6, e10) + o2 + i2;
}
function es(e10, t10, r6) {
  let o2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t10, forward: r6, replaced: o2, position: window.history.length, scroll: i2 ? ei() : null };
}
function ef(e10) {
  let t10 = function(e11) {
    let { history: t11, location: r7 } = window, o3 = { value: ec(e11, r7) }, i2 = { value: t11.state };
    function l2(o4, l3, u2) {
      let a2 = e11.indexOf("#"), c2 = a2 > -1 ? (r7.host && document.querySelector("base") ? e11 : e11.slice(a2)) + o4 : ea() + e11 + o4;
      try {
        t11[u2 ? "replaceState" : "pushState"](l3, "", c2), i2.value = l3;
      } catch (e12) {
        console.error(e12), r7[u2 ? "replace" : "assign"](c2);
      }
    }
    return i2.value || l2(o3.value, { back: null, current: o3.value, forward: null, position: t11.length - 1, replaced: true, scroll: null }, true), { location: o3, state: i2, push: function(e12, r8) {
      let u2 = k({}, i2.value, t11.state, { forward: e12, scroll: ei() });
      l2(u2.current, u2, true);
      let a2 = k({}, es(o3.value, e12, null), { position: u2.position + 1 }, r8);
      l2(e12, a2, false), o3.value = e12;
    }, replace: function(e12, r8) {
      let u2 = k({}, t11.state, es(i2.value.back, e12, i2.value.forward, true), r8, { position: i2.value.position });
      l2(e12, u2, true), o3.value = e12;
    } };
  }(e10 = function(e11) {
    if (!e11) {
      if (j) {
        let t11 = document.querySelector("base");
        e11 = (e11 = t11 && t11.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), Q(e11);
  }(e10)), r6 = function(e11, t11, r7, o3) {
    let i2 = [], l2 = [], u2 = null, a2 = (l3) => {
      let { state: a3 } = l3, c3 = ec(e11, location), s2 = r7.value, f2 = t11.value, p2 = 0;
      if (a3) {
        if (r7.value = c3, t11.value = a3, u2 && u2 === s2) {
          u2 = null;
          return;
        }
        p2 = f2 ? a3.position - f2.position : 0;
      } else
        o3(c3);
      i2.forEach((e12) => {
        e12(r7.value, s2, { delta: p2, type: eX.pop, direction: p2 ? p2 > 0 ? eQ.forward : eQ.back : eQ.unknown });
      });
    };
    function c2() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(k({}, e12.state, { scroll: ei() }), "");
    }
    return window.addEventListener("popstate", a2), window.addEventListener("beforeunload", c2, { passive: true }), { pauseListeners: function() {
      u2 = r7.value;
    }, listen: function(e12) {
      i2.push(e12);
      let t12 = () => {
        let t13 = i2.indexOf(e12);
        t13 > -1 && i2.splice(t13, 1);
      };
      return l2.push(t12), t12;
    }, destroy: function() {
      for (let e12 of l2)
        e12();
      l2 = [], window.removeEventListener("popstate", a2), window.removeEventListener("beforeunload", c2);
    } };
  }(e10, t10.state, t10.location, t10.replace), o2 = k({ location: "", base: e10, go: function(e11) {
    let t11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t11 || r6.pauseListeners(), history.go(e11);
  }, createHref: eo.bind(null, e10) }, t10, r6);
  return Object.defineProperty(o2, "location", { enumerable: true, get: () => t10.location.value }), Object.defineProperty(o2, "state", { enumerable: true, get: () => t10.state.value }), o2;
}
function ep(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let eh = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, ed = Symbol("");
function ev(e10, t10) {
  return k(Error(), { type: e10, [ed]: true }, t10);
}
function ey(e10, t10) {
  return e10 instanceof Error && ed in e10 && (null == t10 || !!(e10.type & t10));
}
(eH = eZ || (eZ = {}))[eH.aborted = 4] = "aborted", eH[eH.cancelled = 8] = "cancelled", eH[eH.duplicated = 16] = "duplicated";
let eb = "[^/]+?", em = { sensitive: false, strict: false, start: true, end: true }, eg = /[.+*?^${}()[\]/\\]/g;
function e_(e10) {
  let t10 = e10[e10.length - 1];
  return e10.length > 0 && t10[t10.length - 1] < 0;
}
let ew = { type: 0, value: "" }, ex = /[a-zA-Z0-9_]/;
function eS(e10, t10) {
  let r6 = {};
  for (let o2 of t10)
    o2 in e10 && (r6[o2] = e10[o2]);
  return r6;
}
function eO(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function eP(e10, t10) {
  let r6 = {};
  for (let o2 in e10)
    r6[o2] = o2 in t10 ? t10[o2] : e10[o2];
  return r6;
}
function eE(e10) {
  let t10 = {};
  if ("" === e10 || "?" === e10)
    return t10;
  let r6 = ("?" === e10[0] ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < r6.length; ++e11) {
    let o2 = r6[e11].replace(T, " "), i2 = o2.indexOf("="), l2 = H(i2 < 0 ? o2 : o2.slice(0, i2)), u2 = i2 < 0 ? null : H(o2.slice(i2 + 1));
    if (l2 in t10) {
      let e12 = t10[l2];
      C(e12) || (e12 = t10[l2] = [e12]), e12.push(u2);
    } else
      t10[l2] = u2;
  }
  return t10;
}
function ej(e10) {
  let t10 = "";
  for (let r6 in e10) {
    let o2 = e10[r6];
    if (r6 = V(r6).replace(F, "%3D"), null == o2) {
      void 0 !== o2 && (t10 += (t10.length ? "&" : "") + r6);
      continue;
    }
    (C(o2) ? o2.map((e11) => e11 && V(e11)) : [o2 && V(o2)]).forEach((e11) => {
      void 0 !== e11 && (t10 += (t10.length ? "&" : "") + r6, null != e11 && (t10 += "=" + e11));
    });
  }
  return t10;
}
let ek = Symbol(""), eA = Symbol(""), eR = Symbol(""), eC = Symbol(""), eI = Symbol("");
function ez() {
  let e10 = [];
  return { add: function(t10) {
    return e10.push(t10), () => {
      let r6 = e10.indexOf(t10);
      r6 > -1 && e10.splice(r6, 1);
    };
  }, list: () => e10.slice(), reset: function() {
    e10 = [];
  } };
}
function e$(e10, t10, r6, o2, i2) {
  let l2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (e11) => e11(), u2 = o2 && (o2.enterCallbacks[i2] = o2.enterCallbacks[i2] || []);
  return () => new Promise((a2, c2) => {
    let s2 = (e11) => {
      false === e11 ? c2(ev(4, { from: r6, to: t10 })) : e11 instanceof Error ? c2(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? c2(ev(2, { from: t10, to: e11 })) : (u2 && o2.enterCallbacks[i2] === u2 && "function" == typeof e11 && u2.push(e11), a2());
    }, f2 = Promise.resolve(l2(() => e10.call(o2 && o2.instances[i2], t10, r6, s2)));
    e10.length < 3 && (f2 = f2.then(s2)), f2.catch((e11) => c2(e11));
  });
}
function eF(e10, t10, r6, o2) {
  let i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (e11) => e11(), l2 = [];
  for (let u2 of e10)
    for (let e11 in u2.components) {
      let a2 = u2.components[e11];
      if ("beforeRouteEnter" === t10 || u2.instances[e11]) {
        if ("object" == typeof a2 || "displayName" in a2 || "props" in a2 || "__vccOpts" in a2) {
          let c2 = (a2.__vccOpts || a2)[t10];
          c2 && l2.push(e$(c2, r6, o2, u2, e11, i2));
        } else {
          let c2 = a2();
          l2.push(() => c2.then((l3) => {
            if (!l3)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${u2.path}"`));
            let a3 = l3.__esModule || "Module" === l3[Symbol.toStringTag] ? l3.default : l3;
            u2.components[e11] = a3;
            let c3 = (a3.__vccOpts || a3)[t10];
            return c3 && e$(c3, r6, o2, u2, e11, i2)();
          }));
        }
      }
    }
  return l2;
}
function eM(e10) {
  let r6 = i(eR), o2 = i(eC), l2 = a(() => {
    let o3 = t(e10.to);
    return r6.resolve(o3);
  }), u2 = a(() => {
    let { matched: e11 } = l2.value, { length: t10 } = e11, r7 = e11[t10 - 1], i2 = o2.matched;
    if (!r7 || !i2.length)
      return -1;
    let u3 = i2.findIndex(ee.bind(null, r7));
    if (u3 > -1)
      return u3;
    let a2 = eD(e11[t10 - 2]);
    return t10 > 1 && eD(r7) === a2 && i2[i2.length - 1].path !== a2 ? i2.findIndex(ee.bind(null, e11[t10 - 2])) : u3;
  }), c2 = a(() => u2.value > -1 && function(e11, t10) {
    for (let r7 in t10) {
      let o3 = t10[r7], i2 = e11[r7];
      if ("string" == typeof o3) {
        if (o3 !== i2)
          return false;
      } else if (!C(i2) || i2.length !== o3.length || o3.some((e12, t11) => e12 !== i2[t11]))
        return false;
    }
    return true;
  }(o2.params, l2.value.params)), s2 = a(() => u2.value > -1 && u2.value === o2.matched.length - 1 && et(o2.params, l2.value.params));
  return { route: l2, href: a(() => l2.value.href), isActive: c2, isExactActive: s2, navigate: function() {
    let o3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !function(e11) {
      if (!e11.metaKey && !e11.altKey && !e11.ctrlKey && !e11.shiftKey && !e11.defaultPrevented && (void 0 === e11.button || 0 === e11.button)) {
        if (e11.currentTarget && e11.currentTarget.getAttribute) {
          let t10 = e11.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t10))
            return;
        }
        return e11.preventDefault && e11.preventDefault(), true;
      }
    }(o3) ? Promise.resolve() : r6[t(e10.replace) ? "replace" : "push"](t(e10.to)).catch(R);
  } };
}
let eT = l({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: eM, setup(e10, t10) {
  let { slots: r6 } = t10, o2 = u(eM(e10)), { options: l2 } = i(eR), s2 = a(() => ({ [eU(e10.activeClass, l2.linkActiveClass, "router-link-active")]: o2.isActive, [eU(e10.exactActiveClass, l2.linkExactActiveClass, "router-link-exact-active")]: o2.isExactActive }));
  return () => {
    let t11 = r6.default && r6.default(o2);
    return e10.custom ? t11 : c("a", { "aria-current": o2.isExactActive ? e10.ariaCurrentValue : null, href: o2.href, onClick: o2.navigate, class: s2.value }, t11);
  };
} });
function eD(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let eU = (e10, t10, r6) => null != e10 ? e10 : null != t10 ? t10 : r6, eq = l({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e10, r6) {
  let { attrs: o2, slots: l2 } = r6, u2 = i(eI), h2 = a(() => e10.route || u2.value), d2 = i(eA, 0), v2 = a(() => {
    let e11, r7 = t(d2), { matched: o3 } = h2.value;
    for (; (e11 = o3[r7]) && !e11.components; )
      r7++;
    return r7;
  }), y2 = a(() => h2.value.matched[v2.value]);
  s(eA, a(() => v2.value + 1)), s(ek, y2), s(eI, h2);
  let b2 = f();
  return p(() => [b2.value, y2.value, e10.name], (e11, t10) => {
    let [r7, o3, i2] = e11, [l3, u3, a2] = t10;
    o3 && (o3.instances[i2] = r7, u3 && u3 !== o3 && r7 && r7 === l3 && (o3.leaveGuards.size || (o3.leaveGuards = u3.leaveGuards), o3.updateGuards.size || (o3.updateGuards = u3.updateGuards))), !r7 || !o3 || u3 && ee(o3, u3) && l3 || (o3.enterCallbacks[i2] || []).forEach((e12) => e12(r7));
  }, { flush: "post" }), () => {
    let t10 = h2.value, r7 = e10.name, i2 = y2.value, u3 = i2 && i2.components[r7];
    if (!u3)
      return eL(l2.default, { Component: u3, route: t10 });
    let a2 = i2.props[r7], s2 = c(u3, k({}, a2 ? true === a2 ? t10.params : "function" == typeof a2 ? a2(t10) : a2 : null, o2, { onVnodeUnmounted: (e11) => {
      e11.component.isUnmounted && (i2.instances[r7] = null);
    }, ref: b2 }));
    return eL(l2.default, { Component: s2, route: t10 }) || s2;
  };
} });
function eL(e10, t10) {
  if (!e10)
    return null;
  let r6 = e10(t10);
  return 1 === r6.length ? r6[0] : r6;
}
function eB(i2) {
  let l2, u2, a2;
  let c2 = function(e10, t10) {
    let r6 = [], o2 = /* @__PURE__ */ new Map();
    function i3(e11, u3, a3) {
      let c3, s3;
      let f3 = !a3, p3 = { path: e11.path, redirect: e11.redirect, name: e11.name, meta: e11.meta || {}, aliasOf: void 0, beforeEnter: e11.beforeEnter, props: function(e12) {
        let t11 = {}, r7 = e12.props || false;
        if ("component" in e12)
          t11.default = r7;
        else
          for (let o3 in e12.components)
            t11[o3] = "object" == typeof r7 ? r7[o3] : r7;
        return t11;
      }(e11), children: e11.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e11 ? e11.components || null : e11.component && { default: e11.component } };
      p3.aliasOf = a3 && a3.record;
      let h3 = eP(t10, e11), d3 = [p3];
      if ("alias" in e11)
        for (let t11 of "string" == typeof e11.alias ? [e11.alias] : e11.alias)
          d3.push(k({}, p3, { components: a3 ? a3.record.components : p3.components, path: t11, aliasOf: a3 ? a3.record : p3 }));
      for (let t11 of d3) {
        let { path: d4 } = t11;
        if (u3 && "/" !== d4[0]) {
          let e12 = u3.record.path, r7 = "/" === e12[e12.length - 1] ? "" : "/";
          t11.path = u3.record.path + (d4 && r7 + d4);
        }
        if (c3 = function(e12, t12, r7) {
          let o3 = function(e13, t13) {
            let r8 = k({}, em, t13), o4 = [], i5 = r8.start ? "^" : "", l4 = [];
            for (let t14 of e13) {
              let e14 = t14.length ? [] : [90];
              r8.strict && !t14.length && (i5 += "/");
              for (let o5 = 0; o5 < t14.length; o5++) {
                let u5 = t14[o5], a4 = 40 + (r8.sensitive ? 0.25 : 0);
                if (0 === u5.type)
                  o5 || (i5 += "/"), i5 += u5.value.replace(eg, "\\$&"), a4 += 40;
                else if (1 === u5.type) {
                  let { value: e15, repeatable: r9, optional: c4, regexp: s4 } = u5;
                  l4.push({ name: e15, repeatable: r9, optional: c4 });
                  let f4 = s4 || eb;
                  if (f4 !== eb) {
                    a4 += 10;
                    try {
                      RegExp(`(${f4})`);
                    } catch (t15) {
                      throw Error(`Invalid custom RegExp for param "${e15}" (${f4}): ` + t15.message);
                    }
                  }
                  let p4 = r9 ? `((?:${f4})(?:/(?:${f4}))*)` : `(${f4})`;
                  o5 || (p4 = c4 && t14.length < 2 ? `(?:/${p4})` : "/" + p4), c4 && (p4 += "?"), i5 += p4, a4 += 20, c4 && (a4 += -8), r9 && (a4 += -20), ".*" === f4 && (a4 += -50);
                }
                e14.push(a4);
              }
              o4.push(e14);
            }
            if (r8.strict && r8.end) {
              let e14 = o4.length - 1;
              o4[e14][o4[e14].length - 1] += 0.7000000000000001;
            }
            r8.strict || (i5 += "/?"), r8.end ? i5 += "$" : r8.strict && (i5 += "(?:/|$)");
            let u4 = new RegExp(i5, r8.sensitive ? "" : "i");
            return { re: u4, score: o4, keys: l4, parse: function(e14) {
              let t14 = e14.match(u4), r9 = {};
              if (!t14)
                return null;
              for (let e15 = 1; e15 < t14.length; e15++) {
                let o5 = t14[e15] || "", i6 = l4[e15 - 1];
                r9[i6.name] = o5 && i6.repeatable ? o5.split("/") : o5;
              }
              return r9;
            }, stringify: function(t14) {
              let r9 = "", o5 = false;
              for (let i6 of e13)
                for (let e14 of (o5 && r9.endsWith("/") || (r9 += "/"), o5 = false, i6))
                  if (0 === e14.type)
                    r9 += e14.value;
                  else if (1 === e14.type) {
                    let { value: l5, repeatable: u5, optional: a4 } = e14, c4 = l5 in t14 ? t14[l5] : "";
                    if (C(c4) && !u5)
                      throw Error(`Provided param "${l5}" is an array but it is not repeatable (* or + modifiers)`);
                    let s4 = C(c4) ? c4.join("/") : c4;
                    if (!s4) {
                      if (a4)
                        i6.length < 2 && (r9.endsWith("/") ? r9 = r9.slice(0, -1) : o5 = true);
                      else
                        throw Error(`Missing required param "${l5}"`);
                    }
                    r9 += s4;
                  }
              return r9 || "/";
            } };
          }(function(e13) {
            let t13, r8;
            if (!e13)
              return [[]];
            if ("/" === e13)
              return [[ew]];
            if (!e13.startsWith("/"))
              throw Error(`Invalid path "${e13}"`);
            function o4(e14) {
              throw Error(`ERR (${i5})/"${s4}": ${e14}`);
            }
            let i5 = 0, l4 = 0, u4 = [];
            function a4() {
              t13 && u4.push(t13), t13 = [];
            }
            let c4 = 0, s4 = "", f4 = "";
            function p4() {
              s4 && (0 === i5 ? t13.push({ type: 0, value: s4 }) : 1 === i5 || 2 === i5 || 3 === i5 ? (t13.length > 1 && ("*" === r8 || "+" === r8) && o4(`A repeatable param (${s4}) must be alone in its segment. eg: '/:ids+.`), t13.push({ type: 1, value: s4, regexp: f4, repeatable: "*" === r8 || "+" === r8, optional: "*" === r8 || "?" === r8 })) : o4("Invalid state to consume buffer"), s4 = "");
            }
            for (; c4 < e13.length; ) {
              if ("\\" === (r8 = e13[c4++]) && 2 !== i5) {
                l4 = i5, i5 = 4;
                continue;
              }
              switch (i5) {
                case 0:
                  "/" === r8 ? (s4 && p4(), a4()) : ":" === r8 ? (p4(), i5 = 1) : s4 += r8;
                  break;
                case 4:
                  s4 += r8, i5 = l4;
                  break;
                case 1:
                  "(" === r8 ? i5 = 2 : ex.test(r8) ? s4 += r8 : (p4(), i5 = 0, "*" !== r8 && "?" !== r8 && "+" !== r8 && c4--);
                  break;
                case 2:
                  ")" === r8 ? "\\" == f4[f4.length - 1] ? f4 = f4.slice(0, -1) + r8 : i5 = 3 : f4 += r8;
                  break;
                case 3:
                  p4(), i5 = 0, "*" !== r8 && "?" !== r8 && "+" !== r8 && c4--, f4 = "";
                  break;
                default:
                  o4("Unknown state");
              }
            }
            return 2 === i5 && o4(`Unfinished custom RegExp for param "${s4}"`), p4(), a4(), u4;
          }(e12.path), r7), i4 = k(o3, { record: e12, parent: t12, children: [], alias: [] });
          return t12 && !i4.record.aliasOf == !t12.record.aliasOf && t12.children.push(i4), i4;
        }(t11, u3, h3), a3 ? a3.alias.push(c3) : ((s3 = s3 || c3) !== c3 && s3.alias.push(c3), f3 && e11.name && !eO(c3) && l3(e11.name)), p3.children) {
          let e12 = p3.children;
          for (let t12 = 0; t12 < e12.length; t12++)
            i3(e12[t12], c3, a3 && a3.children[t12]);
        }
        a3 = a3 || c3, (c3.record.components && Object.keys(c3.record.components).length || c3.record.name || c3.record.redirect) && function(e12) {
          let t12 = 0;
          for (; t12 < r6.length && function(e13, t13) {
            let r7 = 0, o3 = e13.score, i4 = t13.score;
            for (; r7 < o3.length && r7 < i4.length; ) {
              let e14 = function(e15, t14) {
                let r8 = 0;
                for (; r8 < e15.length && r8 < t14.length; ) {
                  let o4 = t14[r8] - e15[r8];
                  if (o4)
                    return o4;
                  r8++;
                }
                return e15.length < t14.length ? 1 === e15.length && 80 === e15[0] ? -1 : 1 : e15.length > t14.length ? 1 === t14.length && 80 === t14[0] ? 1 : -1 : 0;
              }(o3[r7], i4[r7]);
              if (e14)
                return e14;
              r7++;
            }
            if (1 === Math.abs(i4.length - o3.length)) {
              if (e_(o3))
                return 1;
              if (e_(i4))
                return -1;
            }
            return i4.length - o3.length;
          }(e12, r6[t12]) >= 0 && (e12.record.path !== r6[t12].record.path || !function e13(t13, r7) {
            return r7.children.some((r8) => r8 === t13 || e13(t13, r8));
          }(e12, r6[t12])); )
            t12++;
          r6.splice(t12, 0, e12), e12.record.name && !eO(e12) && o2.set(e12.record.name, e12);
        }(c3);
      }
      return s3 ? () => {
        l3(s3);
      } : R;
    }
    function l3(e11) {
      if (ep(e11)) {
        let t11 = o2.get(e11);
        t11 && (o2.delete(e11), r6.splice(r6.indexOf(t11), 1), t11.children.forEach(l3), t11.alias.forEach(l3));
      } else {
        let t11 = r6.indexOf(e11);
        t11 > -1 && (r6.splice(t11, 1), e11.record.name && o2.delete(e11.record.name), e11.children.forEach(l3), e11.alias.forEach(l3));
      }
    }
    return t10 = eP({ strict: false, end: true, sensitive: false }, t10), e10.forEach((e11) => i3(e11)), { addRoute: i3, resolve: function(e11, t11) {
      let i4, l4, u3;
      let a3 = {};
      if ("name" in e11 && e11.name) {
        if (!(i4 = o2.get(e11.name)))
          throw ev(1, { location: e11 });
        u3 = i4.record.name, a3 = k(eS(t11.params, i4.keys.filter((e12) => !e12.optional).concat(i4.parent ? i4.parent.keys.filter((e12) => e12.optional) : []).map((e12) => e12.name)), e11.params && eS(e11.params, i4.keys.map((e12) => e12.name))), l4 = i4.stringify(a3);
      } else if (null != e11.path)
        l4 = e11.path, (i4 = r6.find((e12) => e12.re.test(l4))) && (a3 = i4.parse(l4), u3 = i4.record.name);
      else {
        if (!(i4 = t11.name ? o2.get(t11.name) : r6.find((e12) => e12.re.test(t11.path))))
          throw ev(1, { location: e11, currentLocation: t11 });
        u3 = i4.record.name, a3 = k({}, t11.params, e11.params), l4 = i4.stringify(a3);
      }
      let c3 = [], s3 = i4;
      for (; s3; )
        c3.unshift(s3.record), s3 = s3.parent;
      return { name: u3, path: l4, params: a3, matched: c3, meta: c3.reduce((e12, t12) => k(e12, t12.meta), {}) };
    }, removeRoute: l3, getRoutes: function() {
      return r6;
    }, getRecordMatcher: function(e11) {
      return o2.get(e11);
    } };
  }(i2.routes, i2), s2 = i2.parseQuery || eE, f2 = i2.stringifyQuery || ej, p2 = i2.history, h2 = ez(), d2 = ez(), v2 = ez(), y2 = e(eh), b2 = eh;
  j && i2.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let m2 = A.bind(null, (e10) => "" + e10), g2 = A.bind(null, Y), _2 = A.bind(null, H);
  function w2(e10, t10) {
    let r6;
    if (t10 = k({}, t10 || y2.value), "string" == typeof e10) {
      let r7 = Z(s2, e10, t10.path), o3 = c2.resolve({ path: r7.path }, t10), i4 = p2.createHref(r7.fullPath);
      return k(r7, o3, { params: _2(o3.params), hash: H(r7.hash), redirectedFrom: void 0, href: i4 });
    }
    if (null != e10.path)
      r6 = k({}, e10, { path: Z(s2, e10.path, t10.path).path });
    else {
      let o3 = k({}, e10.params);
      for (let e11 in o3)
        null == o3[e11] && delete o3[e11];
      r6 = k({}, e10, { params: g2(o3) }), t10.params = g2(t10.params);
    }
    let o2 = c2.resolve(r6, t10), i3 = e10.hash || "";
    o2.params = m2(_2(o2.params));
    let l3 = function(e11, t11) {
      let r7 = t11.query ? e11(t11.query) : "";
      return t11.path + (r7 && "?") + r7 + (t11.hash || "");
    }(f2, k({}, e10, { hash: K(i3).replace(B, "{").replace(G, "}").replace(q, "^"), path: o2.path })), u3 = p2.createHref(l3);
    return k({ fullPath: l3, hash: i3, query: f2 === ej ? function(e11) {
      let t11 = {};
      for (let r7 in e11) {
        let o3 = e11[r7];
        void 0 !== o3 && (t11[r7] = C(o3) ? o3.map((e12) => null == e12 ? null : "" + e12) : null == o3 ? o3 : "" + o3);
      }
      return t11;
    }(e10.query) : e10.query || {} }, o2, { redirectedFrom: void 0, href: u3 });
  }
  function x2(e10) {
    return "string" == typeof e10 ? Z(s2, e10, y2.value.path) : k({}, e10);
  }
  function S2(e10, t10) {
    if (b2 !== e10)
      return ev(8, { from: t10, to: e10 });
  }
  function O2(e10) {
    let t10 = e10.matched[e10.matched.length - 1];
    if (t10 && t10.redirect) {
      let { redirect: r6 } = t10, o2 = "function" == typeof r6 ? r6(e10) : r6;
      return "string" == typeof o2 && ((o2 = o2.includes("?") || o2.includes("#") ? o2 = x2(o2) : { path: o2 }).params = {}), k({ query: e10.query, hash: e10.hash, params: null != o2.path ? {} : e10.params }, o2);
    }
  }
  function P2(e10, t10) {
    let r6;
    let o2 = b2 = w2(e10), i3 = y2.value, l3 = e10.state, u3 = e10.force, a3 = true === e10.replace, c3 = O2(o2);
    return c3 ? P2(k(x2(c3), { state: "object" == typeof c3 ? k({}, l3, c3.state) : l3, force: u3, replace: a3 }), t10 || o2) : (o2.redirectedFrom = t10, !u3 && function(e11, t11, r7) {
      let o3 = t11.matched.length - 1, i4 = r7.matched.length - 1;
      return o3 > -1 && o3 === i4 && ee(t11.matched[o3], r7.matched[i4]) && et(t11.params, r7.params) && e11(t11.query) === e11(r7.query) && t11.hash === r7.hash;
    }(f2, i3, o2) && (r6 = ev(16, { to: o2, from: i3 }), L2(i3, i3, true, false)), (r6 ? Promise.resolve(r6) : z2(o2, i3)).catch((e11) => ey(e11) ? ey(e11, 2) ? e11 : U2(e11) : D2(e11, o2, i3)).then((e11) => {
      if (e11) {
        if (ey(e11, 2))
          return P2(k({ replace: a3 }, x2(e11.to), { state: "object" == typeof e11.to ? k({}, l3, e11.to.state) : l3, force: u3 }), t10 || o2);
      } else
        e11 = F2(o2, i3, true, a3, l3);
      return $2(o2, i3, e11), e11;
    }));
  }
  function E2(e10, t10) {
    let r6 = S2(e10, t10);
    return r6 ? Promise.reject(r6) : Promise.resolve();
  }
  function I2(e10) {
    let t10 = N2.values().next().value;
    return t10 && "function" == typeof t10.runWithContext ? t10.runWithContext(e10) : e10();
  }
  function z2(e10, t10) {
    let r6;
    let [o2, i3, l3] = function(e11, t11) {
      let r7 = [], o3 = [], i4 = [], l4 = Math.max(t11.matched.length, e11.matched.length);
      for (let u4 = 0; u4 < l4; u4++) {
        let l5 = t11.matched[u4];
        l5 && (e11.matched.find((e12) => ee(e12, l5)) ? o3.push(l5) : r7.push(l5));
        let a3 = e11.matched[u4];
        a3 && !t11.matched.find((e12) => ee(e12, a3)) && i4.push(a3);
      }
      return [r7, o3, i4];
    }(e10, t10);
    for (let i4 of (r6 = eF(o2.reverse(), "beforeRouteLeave", e10, t10), o2))
      i4.leaveGuards.forEach((o3) => {
        r6.push(e$(o3, e10, t10));
      });
    let u3 = E2.bind(null, e10, t10);
    return r6.push(u3), X2(r6).then(() => {
      for (let o3 of (r6 = [], h2.list()))
        r6.push(e$(o3, e10, t10));
      return r6.push(u3), X2(r6);
    }).then(() => {
      for (let o3 of (r6 = eF(i3, "beforeRouteUpdate", e10, t10), i3))
        o3.updateGuards.forEach((o4) => {
          r6.push(e$(o4, e10, t10));
        });
      return r6.push(u3), X2(r6);
    }).then(() => {
      for (let o3 of (r6 = [], l3))
        if (o3.beforeEnter) {
          if (C(o3.beforeEnter))
            for (let i4 of o3.beforeEnter)
              r6.push(e$(i4, e10, t10));
          else
            r6.push(e$(o3.beforeEnter, e10, t10));
        }
      return r6.push(u3), X2(r6);
    }).then(() => (e10.matched.forEach((e11) => e11.enterCallbacks = {}), (r6 = eF(l3, "beforeRouteEnter", e10, t10, I2)).push(u3), X2(r6))).then(() => {
      for (let o3 of (r6 = [], d2.list()))
        r6.push(e$(o3, e10, t10));
      return r6.push(u3), X2(r6);
    }).catch((e11) => ey(e11, 8) ? e11 : Promise.reject(e11));
  }
  function $2(e10, t10, r6) {
    v2.list().forEach((o2) => I2(() => o2(e10, t10, r6)));
  }
  function F2(e10, t10, r6, o2, i3) {
    let l3 = S2(e10, t10);
    if (l3)
      return l3;
    let u3 = t10 === eh, a3 = j ? history.state : {};
    r6 && (o2 || u3 ? p2.replace(e10.fullPath, k({ scroll: u3 && a3 && a3.scroll }, i3)) : p2.push(e10.fullPath, i3)), y2.value = e10, L2(e10, t10, r6, u3), U2();
  }
  let M2 = ez(), T2 = ez();
  function D2(e10, t10, r6) {
    U2(e10);
    let o2 = T2.list();
    return o2.length ? o2.forEach((o3) => o3(e10, t10, r6)) : console.error(e10), Promise.reject(e10);
  }
  function U2(e10) {
    return u2 || (u2 = !e10, l2 || (l2 = p2.listen((e11, t10, r6) => {
      if (!V2.listening)
        return;
      let o2 = w2(e11), i3 = O2(o2);
      if (i3) {
        P2(k(i3, { replace: true }), o2).catch(R);
        return;
      }
      b2 = o2;
      let l3 = y2.value;
      if (j) {
        var u3, a3;
        u3 = el(l3.fullPath, r6.delta), a3 = ei(), eu.set(u3, a3);
      }
      z2(o2, l3).catch((e12) => ey(e12, 12) ? e12 : ey(e12, 2) ? (P2(e12.to, o2).then((e13) => {
        ey(e13, 20) && !r6.delta && r6.type === eX.pop && p2.go(-1, false);
      }).catch(R), Promise.reject()) : (r6.delta && p2.go(-r6.delta, false), D2(e12, o2, l3))).then((e12) => {
        (e12 = e12 || F2(o2, l3, false)) && (r6.delta && !ey(e12, 8) ? p2.go(-r6.delta, false) : r6.type === eX.pop && ey(e12, 20) && p2.go(-1, false)), $2(o2, l3, e12);
      }).catch(R);
    })), M2.list().forEach((t10) => {
      let [r6, o2] = t10;
      return e10 ? o2(e10) : r6();
    }), M2.reset()), e10;
  }
  function L2(e10, t10, r6, l3) {
    let { scrollBehavior: u3 } = i2;
    if (!j || !u3)
      return Promise.resolve();
    let a3 = !r6 && function(e11) {
      let t11 = eu.get(e11);
      return eu.delete(e11), t11;
    }(el(e10.fullPath, 0)) || (l3 || !r6) && history.state && history.state.scroll || null;
    return o().then(() => u3(e10, t10, a3)).then((e11) => e11 && function(e12) {
      let t11;
      if ("el" in e12) {
        let r7 = e12.el, o2 = "string" == typeof r7 && r7.startsWith("#"), i3 = "string" == typeof r7 ? o2 ? document.getElementById(r7.slice(1)) : document.querySelector(r7) : r7;
        if (!i3)
          return;
        t11 = function(e13, t12) {
          let r8 = document.documentElement.getBoundingClientRect(), o3 = e13.getBoundingClientRect();
          return { behavior: t12.behavior, left: o3.left - r8.left - (t12.left || 0), top: o3.top - r8.top - (t12.top || 0) };
        }(i3, e12);
      } else
        t11 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t11) : window.scrollTo(null != t11.left ? t11.left : window.scrollX, null != t11.top ? t11.top : window.scrollY);
    }(e11)).catch((r7) => D2(r7, e10, t10));
  }
  let W2 = (e10) => p2.go(e10), N2 = /* @__PURE__ */ new Set(), V2 = { currentRoute: y2, listening: true, addRoute: function(e10, t10) {
    let r6, o2;
    return ep(e10) ? (r6 = c2.getRecordMatcher(e10), o2 = t10) : o2 = e10, c2.addRoute(o2, r6);
  }, removeRoute: function(e10) {
    let t10 = c2.getRecordMatcher(e10);
    t10 && c2.removeRoute(t10);
  }, hasRoute: function(e10) {
    return !!c2.getRecordMatcher(e10);
  }, getRoutes: function() {
    return c2.getRoutes().map((e10) => e10.record);
  }, resolve: w2, options: i2, push: function(e10) {
    return P2(e10);
  }, replace: function(e10) {
    return P2(k(x2(e10), { replace: true }));
  }, go: W2, back: () => W2(-1), forward: () => W2(1), beforeEach: h2.add, beforeResolve: d2.add, afterEach: v2.add, onError: T2.add, isReady: function() {
    return u2 && y2.value !== eh ? Promise.resolve() : new Promise((e10, t10) => {
      M2.add([e10, t10]);
    });
  }, install(e10) {
    e10.component("RouterLink", eT), e10.component("RouterView", eq), e10.config.globalProperties.$router = this, Object.defineProperty(e10.config.globalProperties, "$route", { enumerable: true, get: () => t(y2) }), j && !a2 && y2.value === eh && (a2 = true, P2(p2.location).catch((e11) => {
    }));
    let o2 = {};
    for (let e11 in eh)
      Object.defineProperty(o2, e11, { get: () => y2.value[e11], enumerable: true });
    e10.provide(eR, this), e10.provide(eC, r(o2)), e10.provide(eI, y2);
    let i3 = e10.unmount;
    N2.add(e10), e10.unmount = function() {
      N2.delete(e10), N2.size < 1 && (b2 = eh, l2 && l2(), l2 = null, y2.value = eh, a2 = false, u2 = false), i3();
    };
  } };
  function X2(e10) {
    return e10.reduce((e11, t10) => e11.then(() => I2(t10)), Promise.resolve());
  }
  return V2;
}
function eW() {
  return i(eR);
}
function eG() {
  return i(eC);
}
let eN = eT, eK = eq;
var eV, eY, eH, eX, eQ, eZ, eJ, e0 = function(e10, t10) {
  return (e0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e11, t11) {
    e11.__proto__ = t11;
  } || function(e11, t11) {
    for (var r6 in t11)
      Object.prototype.hasOwnProperty.call(t11, r6) && (e11[r6] = t11[r6]);
  })(e10, t10);
};
function e1(e10, t10) {
  if ("function" != typeof t10 && null !== t10)
    throw TypeError("Class extends value " + String(t10) + " is not a constructor or null");
  function r6() {
    this.constructor = e10;
  }
  e0(e10, t10), e10.prototype = null === t10 ? Object.create(t10) : (r6.prototype = t10.prototype, new r6());
}
function e2(e10, t10) {
  var r6 = {};
  for (var o2 in e10)
    Object.prototype.hasOwnProperty.call(e10, o2) && 0 > t10.indexOf(o2) && (r6[o2] = e10[o2]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var i2 = 0, o2 = Object.getOwnPropertySymbols(e10); i2 < o2.length; i2++)
      0 > t10.indexOf(o2[i2]) && Object.prototype.propertyIsEnumerable.call(e10, o2[i2]) && (r6[o2[i2]] = e10[o2[i2]]);
  return r6;
}
function e3(e10, t10) {
  var r6, o2, i2, l2, u2 = { label: 0, sent: function() {
    if (1 & i2[0])
      throw i2[1];
    return i2[1];
  }, trys: [], ops: [] };
  return l2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (l2[Symbol.iterator] = function() {
    return this;
  }), l2;
  function a2(l3) {
    return function(a3) {
      return function(l4) {
        if (r6)
          throw TypeError("Generator is already executing.");
        for (; u2; )
          try {
            if (r6 = 1, o2 && (i2 = 2 & l4[0] ? o2.return : l4[0] ? o2.throw || ((i2 = o2.return) && i2.call(o2), 0) : o2.next) && !(i2 = i2.call(o2, l4[1])).done)
              return i2;
            switch (o2 = 0, i2 && (l4 = [2 & l4[0], i2.value]), l4[0]) {
              case 0:
              case 1:
                i2 = l4;
                break;
              case 4:
                return u2.label++, { value: l4[1], done: false };
              case 5:
                u2.label++, o2 = l4[1], l4 = [0];
                continue;
              case 7:
                l4 = u2.ops.pop(), u2.trys.pop();
                continue;
              default:
                if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === l4[0] || 2 === l4[0])) {
                  u2 = 0;
                  continue;
                }
                if (3 === l4[0] && (!i2 || l4[1] > i2[0] && l4[1] < i2[3])) {
                  u2.label = l4[1];
                  break;
                }
                if (6 === l4[0] && u2.label < i2[1]) {
                  u2.label = i2[1], i2 = l4;
                  break;
                }
                if (i2 && u2.label < i2[2]) {
                  u2.label = i2[2], u2.ops.push(l4);
                  break;
                }
                i2[2] && u2.ops.pop(), u2.trys.pop();
                continue;
            }
            l4 = t10.call(e10, u2);
          } catch (e11) {
            l4 = [6, e11], o2 = 0;
          } finally {
            r6 = i2 = 0;
          }
        if (5 & l4[0])
          throw l4[1];
        return { value: l4[0] ? l4[1] : void 0, done: true };
      }([l3, a3]);
    };
  }
}
function e4(e10) {
  var t10 = "function" == typeof Symbol && Symbol.iterator, r6 = t10 && e10[t10], o2 = 0;
  if (r6)
    return r6.call(e10);
  if (e10 && "number" == typeof e10.length)
    return { next: function() {
      return e10 && o2 >= e10.length && (e10 = void 0), { value: e10 && e10[o2++], done: !e10 };
    } };
  throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function e5(e10, t10) {
  var r6 = "function" == typeof Symbol && e10[Symbol.iterator];
  if (!r6)
    return e10;
  var o2, i2, l2 = r6.call(e10), u2 = [];
  try {
    for (; (void 0 === t10 || t10-- > 0) && !(o2 = l2.next()).done; )
      u2.push(o2.value);
  } catch (e11) {
    i2 = { error: e11 };
  } finally {
    try {
      o2 && !o2.done && (r6 = l2.return) && r6.call(l2);
    } finally {
      if (i2)
        throw i2.error;
    }
  }
  return u2;
}
function e6(e10, t10, r6) {
  if (r6 || 2 == arguments.length)
    for (var o2, i2 = 0, l2 = t10.length; i2 < l2; i2++)
      !o2 && i2 in t10 || (o2 || (o2 = Array.prototype.slice.call(t10, 0, i2)), o2[i2] = t10[i2]);
  return e10.concat(o2 || Array.prototype.slice.call(t10));
}
function e7(e10) {
  return this instanceof e7 ? (this.v = e10, this) : new e7(e10);
}
function e8(e10) {
  return "function" == typeof e10;
}
function e9(e10) {
  var t10 = e10(function(e11) {
    Error.call(e11), e11.stack = Error().stack;
  });
  return t10.prototype = Object.create(Error.prototype), t10.prototype.constructor = t10, t10;
}
var te = e9(function(e10) {
  return function(t10) {
    e10(this), this.message = t10 ? t10.length + " errors occurred during unsubscription:\n" + t10.map(function(e11, t11) {
      return t11 + 1 + ") " + e11.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t10;
  };
});
function tt(e10, t10) {
  if (e10) {
    var r6 = e10.indexOf(t10);
    0 <= r6 && e10.splice(r6, 1);
  }
}
var tr = function() {
  var e10;
  function t10(e11) {
    this.initialTeardown = e11, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e11, t11, r6, o2, i2, l2 = this._parentage;
      if (l2) {
        if (this._parentage = null, Array.isArray(l2))
          try {
            for (var u2 = e4(l2), a2 = u2.next(); !a2.done; a2 = u2.next())
              a2.value.remove(this);
          } catch (t12) {
            e11 = { error: t12 };
          } finally {
            try {
              a2 && !a2.done && (t11 = u2.return) && t11.call(u2);
            } finally {
              if (e11)
                throw e11.error;
            }
          }
        else
          l2.remove(this);
      }
      var c2 = this.initialTeardown;
      if (e8(c2))
        try {
          c2();
        } catch (e12) {
          i2 = e12 instanceof te ? e12.errors : [e12];
        }
      var s2 = this._finalizers;
      if (s2) {
        this._finalizers = null;
        try {
          for (var f2 = e4(s2), p2 = f2.next(); !p2.done; p2 = f2.next()) {
            var h2 = p2.value;
            try {
              ti(h2);
            } catch (e12) {
              i2 = null != i2 ? i2 : [], e12 instanceof te ? i2 = e6(e6([], e5(i2)), e5(e12.errors)) : i2.push(e12);
            }
          }
        } catch (e12) {
          r6 = { error: e12 };
        } finally {
          try {
            p2 && !p2.done && (o2 = f2.return) && o2.call(f2);
          } finally {
            if (r6)
              throw r6.error;
          }
        }
      }
      if (i2)
        throw new te(i2);
    }
  }, t10.prototype.add = function(e11) {
    var r6;
    if (e11 && e11 !== this) {
      if (this.closed)
        ti(e11);
      else {
        if (e11 instanceof t10) {
          if (e11.closed || e11._hasParent(this))
            return;
          e11._addParent(this);
        }
        (this._finalizers = null !== (r6 = this._finalizers) && void 0 !== r6 ? r6 : []).push(e11);
      }
    }
  }, t10.prototype._hasParent = function(e11) {
    var t11 = this._parentage;
    return t11 === e11 || Array.isArray(t11) && t11.includes(e11);
  }, t10.prototype._addParent = function(e11) {
    var t11 = this._parentage;
    this._parentage = Array.isArray(t11) ? (t11.push(e11), t11) : t11 ? [t11, e11] : e11;
  }, t10.prototype._removeParent = function(e11) {
    var t11 = this._parentage;
    t11 === e11 ? this._parentage = null : Array.isArray(t11) && tt(t11, e11);
  }, t10.prototype.remove = function(e11) {
    var r6 = this._finalizers;
    r6 && tt(r6, e11), e11 instanceof t10 && e11._removeParent(this);
  }, t10.EMPTY = ((e10 = new t10()).closed = true, e10), t10;
}(), tn = tr.EMPTY;
function to(e10) {
  return e10 instanceof tr || e10 && "closed" in e10 && e8(e10.remove) && e8(e10.add) && e8(e10.unsubscribe);
}
function ti(e10) {
  e8(e10) ? e10() : e10.unsubscribe();
}
var tl = { Promise: void 0, useDeprecatedNextContext: false }, tu = { setTimeout: function(e10, t10) {
  for (var r6 = [], o2 = 2; o2 < arguments.length; o2++)
    r6[o2 - 2] = arguments[o2];
  return setTimeout.apply(void 0, e6([e10, t10], e5(r6)));
}, clearTimeout: function(e10) {
  var t10 = tu.delegate;
  return ((null == t10 ? void 0 : t10.clearTimeout) || clearTimeout)(e10);
}, delegate: void 0 };
function ta(e10) {
  tu.setTimeout(function() {
    throw e10;
  });
}
function tc() {
}
var ts = function(e10) {
  function t10(t11) {
    var r6 = e10.call(this) || this;
    return r6.isStopped = false, t11 ? (r6.destination = t11, to(t11) && t11.add(r6)) : r6.destination = tv, r6;
  }
  return e1(t10, e10), t10.create = function(e11, t11, r6) {
    return new td(e11, t11, r6);
  }, t10.prototype.next = function(e11) {
    this.isStopped || this._next(e11);
  }, t10.prototype.error = function(e11) {
    this.isStopped || (this.isStopped = true, this._error(e11));
  }, t10.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t10.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e10.prototype.unsubscribe.call(this), this.destination = null);
  }, t10.prototype._next = function(e11) {
    this.destination.next(e11);
  }, t10.prototype._error = function(e11) {
    try {
      this.destination.error(e11);
    } finally {
      this.unsubscribe();
    }
  }, t10.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t10;
}(tr), tf = Function.prototype.bind;
function tp(e10, t10) {
  return tf.call(e10, t10);
}
var th = function() {
  function e10(e11) {
    this.partialObserver = e11;
  }
  return e10.prototype.next = function(e11) {
    var t10 = this.partialObserver;
    if (t10.next)
      try {
        t10.next(e11);
      } catch (e12) {
        ta(e12);
      }
  }, e10.prototype.error = function(e11) {
    var t10 = this.partialObserver;
    if (t10.error)
      try {
        t10.error(e11);
      } catch (e12) {
        ta(e12);
      }
    else
      ta(e11);
  }, e10.prototype.complete = function() {
    var e11 = this.partialObserver;
    if (e11.complete)
      try {
        e11.complete();
      } catch (e12) {
        ta(e12);
      }
  }, e10;
}(), td = function(e10) {
  function t10(t11, r6, o2) {
    var i2, l2, u2 = e10.call(this) || this;
    return e8(t11) || !t11 ? i2 = { next: null != t11 ? t11 : void 0, error: null != r6 ? r6 : void 0, complete: null != o2 ? o2 : void 0 } : u2 && tl.useDeprecatedNextContext ? ((l2 = Object.create(t11)).unsubscribe = function() {
      return u2.unsubscribe();
    }, i2 = { next: t11.next && tp(t11.next, l2), error: t11.error && tp(t11.error, l2), complete: t11.complete && tp(t11.complete, l2) }) : i2 = t11, u2.destination = new th(i2), u2;
  }
  return e1(t10, e10), t10;
}(ts), tv = { closed: true, next: tc, error: function(e10) {
  throw e10;
}, complete: tc }, ty = "function" == typeof Symbol && Symbol.observable || "@@observable";
function tb(e10) {
  return e10;
}
function tm(e10) {
  return 0 === e10.length ? tb : 1 === e10.length ? e10[0] : function(t10) {
    return e10.reduce(function(e11, t11) {
      return t11(e11);
    }, t10);
  };
}
var tg = function() {
  function e10(e11) {
    e11 && (this._subscribe = e11);
  }
  return e10.prototype.lift = function(t10) {
    var r6 = new e10();
    return r6.source = this, r6.operator = t10, r6;
  }, e10.prototype.subscribe = function(e11, t10, r6) {
    var o2, i2, l2, u2 = (o2 = e11) && o2 instanceof ts || o2 && e8(o2.next) && e8(o2.error) && e8(o2.complete) && to(o2) ? e11 : new td(e11, t10, r6);
    return i2 = this.operator, l2 = this.source, u2.add(i2 ? i2.call(u2, l2) : l2 ? this._subscribe(u2) : this._trySubscribe(u2)), u2;
  }, e10.prototype._trySubscribe = function(e11) {
    try {
      return this._subscribe(e11);
    } catch (t10) {
      e11.error(t10);
    }
  }, e10.prototype.forEach = function(e11, t10) {
    var r6 = this;
    return new (t10 = t_(t10))(function(t11, o2) {
      var i2 = new td({ next: function(t12) {
        try {
          e11(t12);
        } catch (e12) {
          o2(e12), i2.unsubscribe();
        }
      }, error: o2, complete: t11 });
      r6.subscribe(i2);
    });
  }, e10.prototype._subscribe = function(e11) {
    var t10;
    return null === (t10 = this.source) || void 0 === t10 ? void 0 : t10.subscribe(e11);
  }, e10.prototype[ty] = function() {
    return this;
  }, e10.prototype.pipe = function() {
    for (var e11 = [], t10 = 0; t10 < arguments.length; t10++)
      e11[t10] = arguments[t10];
    return tm(e11)(this);
  }, e10.prototype.toPromise = function(e11) {
    var t10 = this;
    return new (e11 = t_(e11))(function(e12, r6) {
      var o2;
      t10.subscribe(function(e13) {
        return o2 = e13;
      }, function(e13) {
        return r6(e13);
      }, function() {
        return e12(o2);
      });
    });
  }, e10.create = function(t10) {
    return new e10(t10);
  }, e10;
}();
function t_(e10) {
  var t10;
  return null !== (t10 = null != e10 ? e10 : tl.Promise) && void 0 !== t10 ? t10 : Promise;
}
function tw(e10) {
  return function(t10) {
    if (e8(null == t10 ? void 0 : t10.lift))
      return t10.lift(function(t11) {
        try {
          return e10(t11, this);
        } catch (e11) {
          this.error(e11);
        }
      });
    throw TypeError("Unable to lift unknown Observable type");
  };
}
function tx(e10, t10, r6, o2, i2) {
  return new tS(e10, t10, r6, o2, i2);
}
var tS = function(e10) {
  function t10(t11, r6, o2, i2, l2, u2) {
    var a2 = e10.call(this, t11) || this;
    return a2.onFinalize = l2, a2.shouldUnsubscribe = u2, a2._next = r6 ? function(e11) {
      try {
        r6(e11);
      } catch (e12) {
        t11.error(e12);
      }
    } : e10.prototype._next, a2._error = i2 ? function(e11) {
      try {
        i2(e11);
      } catch (e12) {
        t11.error(e12);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._error, a2._complete = o2 ? function() {
      try {
        o2();
      } catch (e11) {
        t11.error(e11);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._complete, a2;
  }
  return e1(t10, e10), t10.prototype.unsubscribe = function() {
    var t11;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r6 = this.closed;
      e10.prototype.unsubscribe.call(this), r6 || null === (t11 = this.onFinalize) || void 0 === t11 || t11.call(this);
    }
  }, t10;
}(ts), tO = e9(function(e10) {
  return function() {
    e10(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), tP = function(e10) {
  function t10() {
    var t11 = e10.call(this) || this;
    return t11.closed = false, t11.currentObservers = null, t11.observers = [], t11.isStopped = false, t11.hasError = false, t11.thrownError = null, t11;
  }
  return e1(t10, e10), t10.prototype.lift = function(e11) {
    var t11 = new tE(this, this);
    return t11.operator = e11, t11;
  }, t10.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new tO();
  }, t10.prototype.next = function(e11) {
    var t11 = this;
    (function() {
      var r6, o2;
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.currentObservers || (t11.currentObservers = Array.from(t11.observers));
        try {
          for (var i2 = e4(t11.currentObservers), l2 = i2.next(); !l2.done; l2 = i2.next())
            l2.value.next(e11);
        } catch (e12) {
          r6 = { error: e12 };
        } finally {
          try {
            l2 && !l2.done && (o2 = i2.return) && o2.call(i2);
          } finally {
            if (r6)
              throw r6.error;
          }
        }
      }
    })();
  }, t10.prototype.error = function(e11) {
    var t11 = this;
    (function() {
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.hasError = t11.isStopped = true, t11.thrownError = e11;
        for (var r6 = t11.observers; r6.length; )
          r6.shift().error(e11);
      }
    })();
  }, t10.prototype.complete = function() {
    var e11 = this;
    (function() {
      if (e11._throwIfClosed(), !e11.isStopped) {
        e11.isStopped = true;
        for (var t11 = e11.observers; t11.length; )
          t11.shift().complete();
      }
    })();
  }, t10.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t10.prototype, "observed", { get: function() {
    var e11;
    return (null === (e11 = this.observers) || void 0 === e11 ? void 0 : e11.length) > 0;
  }, enumerable: false, configurable: true }), t10.prototype._trySubscribe = function(t11) {
    return this._throwIfClosed(), e10.prototype._trySubscribe.call(this, t11);
  }, t10.prototype._subscribe = function(e11) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e11), this._innerSubscribe(e11);
  }, t10.prototype._innerSubscribe = function(e11) {
    var t11 = this, r6 = this.hasError, o2 = this.isStopped, i2 = this.observers;
    return r6 || o2 ? tn : (this.currentObservers = null, i2.push(e11), new tr(function() {
      t11.currentObservers = null, tt(i2, e11);
    }));
  }, t10.prototype._checkFinalizedStatuses = function(e11) {
    var t11 = this.hasError, r6 = this.thrownError, o2 = this.isStopped;
    t11 ? e11.error(r6) : o2 && e11.complete();
  }, t10.prototype.asObservable = function() {
    var e11 = new tg();
    return e11.source = this, e11;
  }, t10.create = function(e11, t11) {
    return new tE(e11, t11);
  }, t10;
}(tg), tE = function(e10) {
  function t10(t11, r6) {
    var o2 = e10.call(this) || this;
    return o2.destination = t11, o2.source = r6, o2;
  }
  return e1(t10, e10), t10.prototype.next = function(e11) {
    var t11, r6;
    null === (r6 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.next) || void 0 === r6 || r6.call(t11, e11);
  }, t10.prototype.error = function(e11) {
    var t11, r6;
    null === (r6 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.error) || void 0 === r6 || r6.call(t11, e11);
  }, t10.prototype.complete = function() {
    var e11, t11;
    null === (t11 = null === (e11 = this.destination) || void 0 === e11 ? void 0 : e11.complete) || void 0 === t11 || t11.call(e11);
  }, t10.prototype._subscribe = function(e11) {
    var t11, r6;
    return null !== (r6 = null === (t11 = this.source) || void 0 === t11 ? void 0 : t11.subscribe(e11)) && void 0 !== r6 ? r6 : tn;
  }, t10;
}(tP), tj = function(e10) {
  function t10(t11) {
    var r6 = e10.call(this) || this;
    return r6._value = t11, r6;
  }
  return e1(t10, e10), Object.defineProperty(t10.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), t10.prototype._subscribe = function(t11) {
    var r6 = e10.prototype._subscribe.call(this, t11);
    return r6.closed || t11.next(this._value), r6;
  }, t10.prototype.getValue = function() {
    var e11 = this.hasError, t11 = this.thrownError, r6 = this._value;
    if (e11)
      throw t11;
    return this._throwIfClosed(), r6;
  }, t10.prototype.next = function(t11) {
    e10.prototype.next.call(this, this._value = t11);
  }, t10;
}(tP), tk = function() {
  return Date.now();
}, tA = function(e10) {
  function t10(t11, r6) {
    return e10.call(this) || this;
  }
  return e1(t10, e10), t10.prototype.schedule = function(e11, t11) {
    return this;
  }, t10;
}(tr), tR = { setInterval: function(e10, t10) {
  for (var r6 = [], o2 = 2; o2 < arguments.length; o2++)
    r6[o2 - 2] = arguments[o2];
  return setInterval.apply(void 0, e6([e10, t10], e5(r6)));
}, clearInterval: function(e10) {
  var t10 = tR.delegate;
  return ((null == t10 ? void 0 : t10.clearInterval) || clearInterval)(e10);
}, delegate: void 0 }, tC = function(e10) {
  function t10(t11, r6) {
    var o2 = e10.call(this, t11, r6) || this;
    return o2.scheduler = t11, o2.work = r6, o2.pending = false, o2;
  }
  return e1(t10, e10), t10.prototype.schedule = function(e11, t11) {
    if (void 0 === t11 && (t11 = 0), this.closed)
      return this;
    this.state = e11;
    var r6, o2 = this.id, i2 = this.scheduler;
    return null != o2 && (this.id = this.recycleAsyncId(i2, o2, t11)), this.pending = true, this.delay = t11, this.id = null !== (r6 = this.id) && void 0 !== r6 ? r6 : this.requestAsyncId(i2, this.id, t11), this;
  }, t10.prototype.requestAsyncId = function(e11, t11, r6) {
    return void 0 === r6 && (r6 = 0), tR.setInterval(e11.flush.bind(e11, this), r6);
  }, t10.prototype.recycleAsyncId = function(e11, t11, r6) {
    if (void 0 === r6 && (r6 = 0), null != r6 && this.delay === r6 && false === this.pending)
      return t11;
    null != t11 && tR.clearInterval(t11);
  }, t10.prototype.execute = function(e11, t11) {
    if (this.closed)
      return Error("executing a cancelled action");
    this.pending = false;
    var r6 = this._execute(e11, t11);
    if (r6)
      return r6;
    false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t10.prototype._execute = function(e11, t11) {
    var r6, o2 = false;
    try {
      this.work(e11);
    } catch (e12) {
      o2 = true, r6 = e12 || Error("Scheduled action threw falsy error");
    }
    if (o2)
      return this.unsubscribe(), r6;
  }, t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t11 = this.id, r6 = this.scheduler, o2 = r6.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, tt(o2, this), null != t11 && (this.id = this.recycleAsyncId(r6, t11, null)), this.delay = null, e10.prototype.unsubscribe.call(this);
    }
  }, t10;
}(tA), tI = function() {
  function e10(t10, r6) {
    void 0 === r6 && (r6 = e10.now), this.schedulerActionCtor = t10, this.now = r6;
  }
  return e10.prototype.schedule = function(e11, t10, r6) {
    return void 0 === t10 && (t10 = 0), new this.schedulerActionCtor(this, e11).schedule(r6, t10);
  }, e10.now = tk, e10;
}(), tz = new (function(e10) {
  function t10(t11, r6) {
    void 0 === r6 && (r6 = tI.now);
    var o2 = e10.call(this, t11, r6) || this;
    return o2.actions = [], o2._active = false, o2;
  }
  return e1(t10, e10), t10.prototype.flush = function(e11) {
    var t11, r6 = this.actions;
    if (this._active) {
      r6.push(e11);
      return;
    }
    this._active = true;
    do
      if (t11 = e11.execute(e11.state, e11.delay))
        break;
    while (e11 = r6.shift());
    if (this._active = false, t11) {
      for (; e11 = r6.shift(); )
        e11.unsubscribe();
      throw t11;
    }
  }, t10;
}(tI))(tC), t$ = new tg(function(e10) {
  return e10.complete();
});
function tF(e10) {
  return e10[e10.length - 1];
}
function tM(e10) {
  var t10;
  return (t10 = tF(e10)) && e8(t10.schedule) ? e10.pop() : void 0;
}
var tT = function(e10) {
  return e10 && "number" == typeof e10.length && "function" != typeof e10;
};
function tD(e10) {
  return e8(null == e10 ? void 0 : e10.then);
}
function tU(e10) {
  return Symbol.asyncIterator && e8(null == e10 ? void 0 : e10[Symbol.asyncIterator]);
}
function tq(e10) {
  return TypeError("You provided " + (null !== e10 && "object" == typeof e10 ? "an invalid object" : "'" + e10 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var tL = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function tB(e10) {
  return e8(null == e10 ? void 0 : e10[tL]);
}
function tW(e10) {
  return function(e11, t10, r6) {
    if (!Symbol.asyncIterator)
      throw TypeError("Symbol.asyncIterator is not defined.");
    var o2, i2 = r6.apply(e11, t10 || []), l2 = [];
    return o2 = {}, u2("next"), u2("throw"), u2("return"), o2[Symbol.asyncIterator] = function() {
      return this;
    }, o2;
    function u2(e12) {
      i2[e12] && (o2[e12] = function(t11) {
        return new Promise(function(r7, o3) {
          l2.push([e12, t11, r7, o3]) > 1 || a2(e12, t11);
        });
      });
    }
    function a2(e12, t11) {
      try {
        var r7;
        (r7 = i2[e12](t11)).value instanceof e7 ? Promise.resolve(r7.value.v).then(c2, s2) : f2(l2[0][2], r7);
      } catch (e13) {
        f2(l2[0][3], e13);
      }
    }
    function c2(e12) {
      a2("next", e12);
    }
    function s2(e12) {
      a2("throw", e12);
    }
    function f2(e12, t11) {
      e12(t11), l2.shift(), l2.length && a2(l2[0][0], l2[0][1]);
    }
  }(this, arguments, function() {
    var t10, r6, o2;
    return e3(this, function(i2) {
      switch (i2.label) {
        case 0:
          t10 = e10.getReader(), i2.label = 1;
        case 1:
          i2.trys.push([1, , 9, 10]), i2.label = 2;
        case 2:
          return [4, e7(t10.read())];
        case 3:
          if (o2 = (r6 = i2.sent()).value, !r6.done)
            return [3, 5];
          return [4, e7(void 0)];
        case 4:
          return [2, i2.sent()];
        case 5:
          return [4, e7(o2)];
        case 6:
          return [4, i2.sent()];
        case 7:
          return i2.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t10.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function tG(e10) {
  return e8(null == e10 ? void 0 : e10.getReader);
}
function tN(e10) {
  if (e10 instanceof tg)
    return e10;
  if (null != e10) {
    if (e8(e10[ty]))
      return new tg(function(t10) {
        var r6 = e10[ty]();
        if (e8(r6.subscribe))
          return r6.subscribe(t10);
        throw TypeError("Provided object does not correctly implement Symbol.observable");
      });
    if (tT(e10))
      return new tg(function(t10) {
        for (var r6 = 0; r6 < e10.length && !t10.closed; r6++)
          t10.next(e10[r6]);
        t10.complete();
      });
    if (tD(e10))
      return new tg(function(t10) {
        e10.then(function(e11) {
          t10.closed || (t10.next(e11), t10.complete());
        }, function(e11) {
          return t10.error(e11);
        }).then(null, ta);
      });
    if (tU(e10))
      return tK(e10);
    if (tB(e10))
      return new tg(function(t10) {
        var r6, o2;
        try {
          for (var i2 = e4(e10), l2 = i2.next(); !l2.done; l2 = i2.next()) {
            var u2 = l2.value;
            if (t10.next(u2), t10.closed)
              return;
          }
        } catch (e11) {
          r6 = { error: e11 };
        } finally {
          try {
            l2 && !l2.done && (o2 = i2.return) && o2.call(i2);
          } finally {
            if (r6)
              throw r6.error;
          }
        }
        t10.complete();
      });
    if (tG(e10))
      return tK(tW(e10));
  }
  throw tq(e10);
}
function tK(e10) {
  return new tg(function(t10) {
    (function(e11, t11) {
      var r6, o2, i2, l2, u2, a2, c2, s2;
      return u2 = this, a2 = void 0, c2 = void 0, s2 = function() {
        var u3;
        return e3(this, function(a3) {
          switch (a3.label) {
            case 0:
              a3.trys.push([0, 5, 6, 11]), r6 = function(e12) {
                if (!Symbol.asyncIterator)
                  throw TypeError("Symbol.asyncIterator is not defined.");
                var t12, r7 = e12[Symbol.asyncIterator];
                return r7 ? r7.call(e12) : (e12 = e4(e12), t12 = {}, o3("next"), o3("throw"), o3("return"), t12[Symbol.asyncIterator] = function() {
                  return this;
                }, t12);
                function o3(r8) {
                  t12[r8] = e12[r8] && function(t13) {
                    return new Promise(function(o4, i3) {
                      (function(e13, t14, r9, o5) {
                        Promise.resolve(o5).then(function(t15) {
                          e13({ value: t15, done: r9 });
                        }, t14);
                      })(o4, i3, (t13 = e12[r8](t13)).done, t13.value);
                    });
                  };
                }
              }(e11), a3.label = 1;
            case 1:
              return [4, r6.next()];
            case 2:
              if ((o2 = a3.sent()).done)
                return [3, 4];
              if (u3 = o2.value, t11.next(u3), t11.closed)
                return [2];
              a3.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return i2 = { error: a3.sent() }, [3, 11];
            case 6:
              if (a3.trys.push([6, , 9, 10]), !(o2 && !o2.done && (l2 = r6.return)))
                return [3, 8];
              return [4, l2.call(r6)];
            case 7:
              a3.sent(), a3.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (i2)
                throw i2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return t11.complete(), [2];
          }
        });
      }, new (c2 || (c2 = Promise))(function(e12, t12) {
        function r7(e13) {
          try {
            i3(s2.next(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function o3(e13) {
          try {
            i3(s2.throw(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function i3(t13) {
          var i4;
          t13.done ? e12(t13.value) : ((i4 = t13.value) instanceof c2 ? i4 : new c2(function(e13) {
            e13(i4);
          })).then(r7, o3);
        }
        i3((s2 = s2.apply(u2, a2 || [])).next());
      });
    })(e10, t10).catch(function(e11) {
      return t10.error(e11);
    });
  });
}
function tV(e10, t10, r6, o2, i2) {
  void 0 === o2 && (o2 = 0), void 0 === i2 && (i2 = false);
  var l2 = t10.schedule(function() {
    r6(), i2 ? e10.add(this.schedule(null, o2)) : this.unsubscribe();
  }, o2);
  if (e10.add(l2), !i2)
    return l2;
}
function tY(e10, t10) {
  return void 0 === t10 && (t10 = 0), tw(function(r6, o2) {
    r6.subscribe(tx(o2, function(r7) {
      return tV(o2, e10, function() {
        return o2.next(r7);
      }, t10);
    }, function() {
      return tV(o2, e10, function() {
        return o2.complete();
      }, t10);
    }, function(r7) {
      return tV(o2, e10, function() {
        return o2.error(r7);
      }, t10);
    }));
  });
}
function tH(e10, t10) {
  return void 0 === t10 && (t10 = 0), tw(function(r6, o2) {
    o2.add(e10.schedule(function() {
      return r6.subscribe(o2);
    }, t10));
  });
}
function tX(e10, t10) {
  if (!e10)
    throw Error("Iterable cannot be null");
  return new tg(function(r6) {
    tV(r6, t10, function() {
      var o2 = e10[Symbol.asyncIterator]();
      tV(r6, t10, function() {
        o2.next().then(function(e11) {
          e11.done ? r6.complete() : r6.next(e11.value);
        });
      }, 0, true);
    });
  });
}
function tQ(e10, t10) {
  return t10 ? function(e11, t11) {
    if (null != e11) {
      if (e8(e11[ty]))
        return tN(e11).pipe(tH(t11), tY(t11));
      if (tT(e11))
        return new tg(function(r6) {
          var o2 = 0;
          return t11.schedule(function() {
            o2 === e11.length ? r6.complete() : (r6.next(e11[o2++]), r6.closed || this.schedule());
          });
        });
      if (tD(e11))
        return tN(e11).pipe(tH(t11), tY(t11));
      if (tU(e11))
        return tX(e11, t11);
      if (tB(e11))
        return new tg(function(r6) {
          var o2;
          return tV(r6, t11, function() {
            o2 = e11[tL](), tV(r6, t11, function() {
              var e12, t12, i2;
              try {
                t12 = (e12 = o2.next()).value, i2 = e12.done;
              } catch (e13) {
                r6.error(e13);
                return;
              }
              i2 ? r6.complete() : r6.next(t12);
            }, 0, true);
          }), function() {
            return e8(null == o2 ? void 0 : o2.return) && o2.return();
          };
        });
      if (tG(e11))
        return tX(tW(e11), t11);
    }
    throw tq(e11);
  }(e10, t10) : tN(e10);
}
function tZ() {
  for (var e10 = [], t10 = 0; t10 < arguments.length; t10++)
    e10[t10] = arguments[t10];
  var r6 = tM(e10);
  return tQ(e10, r6);
}
function tJ(e10, t10) {
  return tw(function(r6, o2) {
    var i2 = 0;
    r6.subscribe(tx(o2, function(r7) {
      o2.next(e10.call(t10, r7, i2++));
    }));
  });
}
var t0 = Array.isArray, t1 = Array.isArray, t2 = Object.getPrototypeOf, t3 = Object.prototype, t4 = Object.keys;
function t5() {
  for (var e10, t10 = [], r6 = 0; r6 < arguments.length; r6++)
    t10[r6] = arguments[r6];
  var o2 = tM(t10), i2 = e8(tF(t10)) ? t10.pop() : void 0, l2 = function(e11) {
    if (1 === e11.length) {
      var t11 = e11[0];
      if (t1(t11))
        return { args: t11, keys: null };
      if (t11 && "object" == typeof t11 && t2(t11) === t3) {
        var r7 = t4(t11);
        return { args: r7.map(function(e12) {
          return t11[e12];
        }), keys: r7 };
      }
    }
    return { args: e11, keys: null };
  }(t10), u2 = l2.args, a2 = l2.keys;
  if (0 === u2.length)
    return tQ([], o2);
  var c2 = new tg((void 0 === (e10 = a2 ? function(e11) {
    return a2.reduce(function(t11, r7, o3) {
      return t11[r7] = e11[o3], t11;
    }, {});
  } : tb) && (e10 = tb), function(t11) {
    var r7, i3, l3;
    r7 = o2, i3 = function() {
      for (var r8 = u2.length, i4 = Array(r8), l4 = r8, a3 = r8, c3 = function(r9) {
        var c4, s3, f2;
        c4 = o2, s3 = function() {
          var c5 = tQ(u2[r9], o2), s4 = false;
          c5.subscribe(tx(t11, function(o3) {
            i4[r9] = o3, !s4 && (s4 = true, a3--), a3 || t11.next(e10(i4.slice()));
          }, function() {
            --l4 || t11.complete();
          }));
        }, f2 = t11, c4 ? tV(f2, c4, s3) : s3();
      }, s2 = 0; s2 < r8; s2++)
        c3(s2);
    }, l3 = t11, r7 ? tV(l3, r7, i3) : i3();
  }));
  return i2 ? c2.pipe(tJ(function(e11) {
    return t0(e11) ? i2.apply(void 0, e6([], e5(e11))) : i2(e11);
  })) : c2;
}
function t6(e10, t10, r6) {
  return (void 0 === r6 && (r6 = 1 / 0), e8(t10)) ? t6(function(r7, o2) {
    return tJ(function(e11, i2) {
      return t10(r7, e11, o2, i2);
    })(tN(e10(r7, o2)));
  }, r6) : ("number" == typeof t10 && (r6 = t10), tw(function(t11, o2) {
    var i2, l2, u2, a2, c2, s2, f2, p2, h2;
    return i2 = r6, u2 = [], a2 = 0, c2 = 0, s2 = false, f2 = function() {
      !s2 || u2.length || a2 || o2.complete();
    }, p2 = function(e11) {
      return a2 < i2 ? h2(e11) : u2.push(e11);
    }, h2 = function(t12) {
      a2++;
      var r7 = false;
      tN(e10(t12, c2++)).subscribe(tx(o2, function(e11) {
        l2 ? p2(e11) : o2.next(e11);
      }, function() {
        r7 = true;
      }, void 0, function() {
        if (r7)
          try {
            for (a2--; u2.length && a2 < i2; )
              !function() {
                var e11 = u2.shift();
                h2(e11);
              }();
            f2();
          } catch (e11) {
            o2.error(e11);
          }
      }));
    }, t11.subscribe(tx(o2, p2, function() {
      s2 = true, f2();
    })), function() {
    };
  }));
}
function t7() {
  for (var e10, t10, r6 = [], o2 = 0; o2 < arguments.length; o2++)
    r6[o2] = arguments[o2];
  var i2 = tM(r6), l2 = (e10 = 1 / 0, "number" == typeof tF(r6) ? r6.pop() : e10);
  return r6.length ? 1 === r6.length ? tN(r6[0]) : (void 0 === (t10 = l2) && (t10 = 1 / 0), t6(tb, t10))(tQ(r6, i2)) : t$;
}
function t8(e10, t10) {
  return tw(function(r6, o2) {
    var i2 = 0;
    r6.subscribe(tx(o2, function(r7) {
      return e10.call(t10, r7, i2++) && o2.next(r7);
    }));
  });
}
function t9(e10) {
  return tw(function(t10, r6) {
    var o2, i2 = null, l2 = false;
    i2 = t10.subscribe(tx(r6, void 0, void 0, function(u2) {
      o2 = tN(e10(u2, t9(e10)(t10))), i2 ? (i2.unsubscribe(), i2 = null, o2.subscribe(r6)) : l2 = true;
    })), l2 && (i2.unsubscribe(), i2 = null, o2.subscribe(r6));
  });
}
function re(e10, t10) {
  return void 0 === t10 && (t10 = tz), tw(function(r6, o2) {
    var i2 = null, l2 = null, u2 = null, a2 = function() {
      if (i2) {
        i2.unsubscribe(), i2 = null;
        var e11 = l2;
        l2 = null, o2.next(e11);
      }
    };
    function c2() {
      var r7 = u2 + e10, l3 = t10.now();
      if (l3 < r7) {
        i2 = this.schedule(void 0, r7 - l3), o2.add(i2);
        return;
      }
      a2();
    }
    r6.subscribe(tx(o2, function(r7) {
      l2 = r7, u2 = t10.now(), i2 || (i2 = t10.schedule(c2, e10), o2.add(i2));
    }, function() {
      a2(), o2.complete();
    }, void 0, function() {
      l2 = i2 = null;
    }));
  });
}
function rt() {
  return tw(function(e10, t10) {
    e10.subscribe(tx(t10, tc));
  });
}
function rr(e10, t10) {
  return void 0 === t10 && (t10 = tb), e10 = null != e10 ? e10 : rn, tw(function(r6, o2) {
    var i2, l2 = true;
    r6.subscribe(tx(o2, function(r7) {
      var u2 = t10(r7);
      (l2 || !e10(i2, u2)) && (l2 = false, i2 = u2, o2.next(r7));
    }));
  });
}
function rn(e10, t10) {
  return e10 === t10;
}
function ro(e10, t10) {
  return tw(function(r6, o2) {
    var i2 = null, l2 = 0, u2 = false, a2 = function() {
      return u2 && !i2 && o2.complete();
    };
    r6.subscribe(tx(o2, function(r7) {
      null == i2 || i2.unsubscribe();
      var u3 = 0, c2 = l2++;
      tN(e10(r7, c2)).subscribe(i2 = tx(o2, function(e11) {
        return o2.next(t10 ? t10(r7, e11, c2, u3++) : e11);
      }, function() {
        i2 = null, a2();
      }));
    }, function() {
      u2 = true, a2();
    }));
  });
}
function ri(e10, t10, r6) {
  var o2 = e8(e10) || t10 || r6 ? { next: e10, error: t10, complete: r6 } : e10;
  return o2 ? tw(function(e11, t11) {
    null === (r7 = o2.subscribe) || void 0 === r7 || r7.call(o2);
    var r7, i2 = true;
    e11.subscribe(tx(t11, function(e12) {
      var r8;
      null === (r8 = o2.next) || void 0 === r8 || r8.call(o2, e12), t11.next(e12);
    }, function() {
      var e12;
      i2 = false, null === (e12 = o2.complete) || void 0 === e12 || e12.call(o2), t11.complete();
    }, function(e12) {
      var r8;
      i2 = false, null === (r8 = o2.error) || void 0 === r8 || r8.call(o2, e12), t11.error(e12);
    }, function() {
      var e12, t12;
      i2 && (null === (e12 = o2.unsubscribe) || void 0 === e12 || e12.call(o2)), null === (t12 = o2.finalize) || void 0 === t12 || t12.call(o2);
    }));
  }) : tb;
}
function rl(e10) {
  for (var t10 = arguments.length, r6 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    r6[o2 - 1] = arguments[o2];
  return function() {
    for (var e11 = [], t11 = 0; t11 < arguments.length; t11++)
      e11[t11] = arguments[t11];
    return tm(e11);
  }(...r6)(tQ(e10));
}
var ru = Symbol.for("immer-nothing"), ra = Symbol.for("immer-draftable"), rc = Symbol.for("immer-state");
function rs(e10) {
  for (var t10 = arguments.length, r6 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    r6[o2 - 1] = arguments[o2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var rf = Object.getPrototypeOf;
function rp(e10) {
  return !!e10 && !!e10[rc];
}
function rh(e10) {
  var t10;
  return !!e10 && (rv(e10) || Array.isArray(e10) || !!e10[ra] || !!(null === (t10 = e10.constructor) || void 0 === t10 ? void 0 : t10[ra]) || r_(e10) || rw(e10));
}
var rd = Object.prototype.constructor.toString();
function rv(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t10 = rf(e10);
  if (null === t10)
    return true;
  let r6 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  return r6 === Object || "function" == typeof r6 && Function.toString.call(r6) === rd;
}
function ry(e10, t10) {
  0 === rb(e10) ? Reflect.ownKeys(e10).forEach((r6) => {
    t10(r6, e10[r6], e10);
  }) : e10.forEach((r6, o2) => t10(o2, r6, e10));
}
function rb(e10) {
  let t10 = e10[rc];
  return t10 ? t10.type_ : Array.isArray(e10) ? 1 : r_(e10) ? 2 : rw(e10) ? 3 : 0;
}
function rm(e10, t10) {
  return 2 === rb(e10) ? e10.has(t10) : Object.prototype.hasOwnProperty.call(e10, t10);
}
function rg(e10, t10, r6) {
  let o2 = rb(e10);
  2 === o2 ? e10.set(t10, r6) : 3 === o2 ? e10.add(r6) : e10[t10] = r6;
}
function r_(e10) {
  return e10 instanceof Map;
}
function rw(e10) {
  return e10 instanceof Set;
}
function rx(e10) {
  return e10.copy_ || e10.base_;
}
function rS(e10, t10) {
  if (r_(e10))
    return new Map(e10);
  if (rw(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t10 && rv(e10))
    return rf(e10) ? { ...e10 } : Object.assign(/* @__PURE__ */ Object.create(null), e10);
  let r6 = Object.getOwnPropertyDescriptors(e10);
  delete r6[rc];
  let o2 = Reflect.ownKeys(r6);
  for (let t11 = 0; t11 < o2.length; t11++) {
    let i2 = o2[t11], l2 = r6[i2];
    false === l2.writable && (l2.writable = true, l2.configurable = true), (l2.get || l2.set) && (r6[i2] = { configurable: true, writable: true, enumerable: l2.enumerable, value: e10[i2] });
  }
  return Object.create(rf(e10), r6);
}
function rO(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return rE(e10) || rp(e10) || !rh(e10) || (rb(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = rP), Object.freeze(e10), t10 && Object.entries(e10).forEach((e11) => {
    let [t11, r6] = e11;
    return rO(r6, true);
  })), e10;
}
function rP() {
  rs(2);
}
function rE(e10) {
  return Object.isFrozen(e10);
}
var rj = {};
function rk(e10) {
  let t10 = rj[e10];
  return t10 || rs(0, e10), t10;
}
function rA(e10, t10) {
  t10 && (rk("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t10);
}
function rR(e10) {
  rC(e10), e10.drafts_.forEach(rz), e10.drafts_ = null;
}
function rC(e10) {
  e10 === eJ && (eJ = e10.parent_);
}
function rI(e10) {
  return eJ = { drafts_: [], parent_: eJ, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function rz(e10) {
  let t10 = e10[rc];
  0 === t10.type_ || 1 === t10.type_ ? t10.revoke_() : t10.revoked_ = true;
}
function r$(e10, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r6 = t10.drafts_[0];
  return void 0 !== e10 && e10 !== r6 ? (r6[rc].modified_ && (rR(t10), rs(4)), rh(e10) && (e10 = rF(t10, e10), t10.parent_ || rT(t10, e10)), t10.patches_ && rk("Patches").generateReplacementPatches_(r6[rc].base_, e10, t10.patches_, t10.inversePatches_)) : e10 = rF(t10, r6, []), rR(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e10 !== ru ? e10 : void 0;
}
function rF(e10, t10, r6) {
  if (rE(t10))
    return t10;
  let o2 = t10[rc];
  if (!o2)
    return ry(t10, (i2, l2) => rM(e10, o2, t10, i2, l2, r6)), t10;
  if (o2.scope_ !== e10)
    return t10;
  if (!o2.modified_)
    return rT(e10, o2.base_, true), o2.base_;
  if (!o2.finalized_) {
    o2.finalized_ = true, o2.scope_.unfinalizedDrafts_--;
    let t11 = o2.copy_, i2 = t11, l2 = false;
    3 === o2.type_ && (i2 = new Set(t11), t11.clear(), l2 = true), ry(i2, (i3, u2) => rM(e10, o2, t11, i3, u2, r6, l2)), rT(e10, t11, false), r6 && e10.patches_ && rk("Patches").generatePatches_(o2, r6, e10.patches_, e10.inversePatches_);
  }
  return o2.copy_;
}
function rM(e10, t10, r6, o2, i2, l2, u2) {
  if (rp(i2)) {
    let u3 = rF(e10, i2, l2 && t10 && 3 !== t10.type_ && !rm(t10.assigned_, o2) ? l2.concat(o2) : void 0);
    if (rg(r6, o2, u3), !rp(u3))
      return;
    e10.canAutoFreeze_ = false;
  } else
    u2 && r6.add(i2);
  if (rh(i2) && !rE(i2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    rF(e10, i2), (!t10 || !t10.scope_.parent_) && "symbol" != typeof o2 && Object.prototype.propertyIsEnumerable.call(r6, o2) && rT(e10, i2);
  }
}
function rT(e10, t10) {
  let r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && rO(t10, r6);
}
var rD = { get(e10, t10) {
  if (t10 === rc)
    return e10;
  let r6 = rx(e10);
  if (!rm(r6, t10))
    return function(e11, t11, r7) {
      var o3;
      let i2 = rL(t11, r7);
      return i2 ? "value" in i2 ? i2.value : null === (o3 = i2.get) || void 0 === o3 ? void 0 : o3.call(e11.draft_) : void 0;
    }(e10, r6, t10);
  let o2 = r6[t10];
  return e10.finalized_ || !rh(o2) ? o2 : o2 === rq(e10.base_, t10) ? (rW(e10), e10.copy_[t10] = rG(o2, e10)) : o2;
}, has: (e10, t10) => t10 in rx(e10), ownKeys: (e10) => Reflect.ownKeys(rx(e10)), set(e10, t10, r6) {
  let o2 = rL(rx(e10), t10);
  if (null == o2 ? void 0 : o2.set)
    return o2.set.call(e10.draft_, r6), true;
  if (!e10.modified_) {
    let o3 = rq(rx(e10), t10), i2 = null == o3 ? void 0 : o3[rc];
    if (i2 && i2.base_ === r6)
      return e10.copy_[t10] = r6, e10.assigned_[t10] = false, true;
    if ((r6 === o3 ? 0 !== r6 || 1 / r6 == 1 / o3 : r6 != r6 && o3 != o3) && (void 0 !== r6 || rm(e10.base_, t10)))
      return true;
    rW(e10), rB(e10);
  }
  return !!(e10.copy_[t10] === r6 && (void 0 !== r6 || t10 in e10.copy_) || Number.isNaN(r6) && Number.isNaN(e10.copy_[t10])) || (e10.copy_[t10] = r6, e10.assigned_[t10] = true, true);
}, deleteProperty: (e10, t10) => (void 0 !== rq(e10.base_, t10) || t10 in e10.base_ ? (e10.assigned_[t10] = false, rW(e10), rB(e10)) : delete e10.assigned_[t10], e10.copy_ && delete e10.copy_[t10], true), getOwnPropertyDescriptor(e10, t10) {
  let r6 = rx(e10), o2 = Reflect.getOwnPropertyDescriptor(r6, t10);
  return o2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t10, enumerable: o2.enumerable, value: r6[t10] } : o2;
}, defineProperty() {
  rs(11);
}, getPrototypeOf: (e10) => rf(e10.base_), setPrototypeOf() {
  rs(12);
} }, rU = {};
function rq(e10, t10) {
  let r6 = e10[rc];
  return (r6 ? rx(r6) : e10)[t10];
}
function rL(e10, t10) {
  if (!(t10 in e10))
    return;
  let r6 = rf(e10);
  for (; r6; ) {
    let e11 = Object.getOwnPropertyDescriptor(r6, t10);
    if (e11)
      return e11;
    r6 = rf(r6);
  }
}
function rB(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && rB(e10.parent_));
}
function rW(e10) {
  e10.copy_ || (e10.copy_ = rS(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function rG(e10, t10) {
  let r6 = r_(e10) ? rk("MapSet").proxyMap_(e10, t10) : rw(e10) ? rk("MapSet").proxySet_(e10, t10) : function(e11, t11) {
    let r7 = Array.isArray(e11), o2 = { type_: r7 ? 1 : 0, scope_: t11 ? t11.scope_ : eJ, modified_: false, finalized_: false, assigned_: {}, parent_: t11, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = o2, l2 = rD;
    r7 && (i2 = [o2], l2 = rU);
    let { revoke: u2, proxy: a2 } = Proxy.revocable(i2, l2);
    return o2.draft_ = a2, o2.revoke_ = u2, a2;
  }(e10, t10);
  return (t10 ? t10.scope_ : eJ).drafts_.push(r6), r6;
}
ry(rD, (e10, t10) => {
  rU[e10] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
}), rU.deleteProperty = function(e10, t10) {
  return rU.set.call(this, e10, t10, void 0);
}, rU.set = function(e10, t10, r6) {
  return rD.set.call(this, e10[0], t10, r6, e10[0]);
};
var rN = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t10, r6) => {
      let o2;
      if ("function" == typeof e11 && "function" != typeof t10) {
        let r7 = t10;
        t10 = e11;
        let o3 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r7;
          for (var i2 = arguments.length, l2 = Array(i2 > 1 ? i2 - 1 : 0), u2 = 1; u2 < i2; u2++)
            l2[u2 - 1] = arguments[u2];
          return o3.produce(e12, (e13) => t10.call(this, e13, ...l2));
        };
      }
      if ("function" != typeof t10 && rs(6), void 0 !== r6 && "function" != typeof r6 && rs(7), rh(e11)) {
        let i2 = rI(this), l2 = rG(e11, void 0), u2 = true;
        try {
          o2 = t10(l2), u2 = false;
        } finally {
          u2 ? rR(i2) : rC(i2);
        }
        return rA(i2, r6), r$(o2, i2);
      }
      if (e11 && "object" == typeof e11)
        rs(1, e11);
      else {
        if (void 0 === (o2 = t10(e11)) && (o2 = e11), o2 === ru && (o2 = void 0), this.autoFreeze_ && rO(o2, true), r6) {
          let t11 = [], i2 = [];
          rk("Patches").generateReplacementPatches_(e11, o2, t11, i2), r6(t11, i2);
        }
        return o2;
      }
    }, this.produceWithPatches = (e11, t10) => {
      let r6, o2;
      if ("function" == typeof e11) {
        var i2 = this;
        return function(t11) {
          for (var r7 = arguments.length, o3 = Array(r7 > 1 ? r7 - 1 : 0), l2 = 1; l2 < r7; l2++)
            o3[l2 - 1] = arguments[l2];
          return i2.produceWithPatches(t11, (t12) => e11(t12, ...o3));
        };
      }
      return [this.produce(e11, t10, (e12, t11) => {
        r6 = e12, o2 = t11;
      }), r6, o2];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t10;
    rh(e10) || rs(8), rp(e10) && (rp(t10 = e10) || rs(10, t10), e10 = function e11(t11) {
      let r7;
      if (!rh(t11) || rE(t11))
        return t11;
      let o3 = t11[rc];
      if (o3) {
        if (!o3.modified_)
          return o3.base_;
        o3.finalized_ = true, r7 = rS(t11, o3.scope_.immer_.useStrictShallowCopy_);
      } else
        r7 = rS(t11, true);
      return ry(r7, (t12, o4) => {
        rg(r7, t12, e11(o4));
      }), o3 && (o3.finalized_ = false), r7;
    }(t10));
    let r6 = rI(this), o2 = rG(e10, void 0);
    return o2[rc].isManual_ = true, rC(r6), o2;
  }
  finishDraft(e10, t10) {
    let r6 = e10 && e10[rc];
    r6 && r6.isManual_ || rs(9);
    let { scope_: o2 } = r6;
    return rA(o2, t10), r$(void 0, o2);
  }
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t10) {
    let r6;
    for (r6 = t10.length - 1; r6 >= 0; r6--) {
      let o3 = t10[r6];
      if (0 === o3.path.length && "replace" === o3.op) {
        e10 = o3.value;
        break;
      }
    }
    r6 > -1 && (t10 = t10.slice(r6 + 1));
    let o2 = rk("Patches").applyPatches_;
    return rp(e10) ? o2(e10, t10) : this.produce(e10, (e11) => o2(e11, t10));
  }
}(), rK = rN.produce;
rN.produceWithPatches.bind(rN), rN.setAutoFreeze.bind(rN), rN.setUseStrictShallowCopy.bind(rN), rN.applyPatches.bind(rN), rN.createDraft.bind(rN), rN.finishDraft.bind(rN);
class rV extends tj {
  next(e10) {
    let t10 = b(e10) ? rK(this.value, e10) : e10;
    Object.is(t10, this.value) || super.next(t10);
  }
}
function rY() {
  let e10;
  return h((t10, r6) => ({ get: () => (t10(), e10), set(t11) {
    var o2;
    let i2 = null !== (o2 = null == t11 ? void 0 : t11.$$forwardRef) && void 0 !== o2 ? o2 : t11;
    i2 !== e10 && (e10 = i2, r6());
  } }));
}
function rH(e10) {
  return (t10) => {
    let r6 = t10.subscribe(e10);
    d(() => r6.unsubscribe());
  };
}
function rX(e10) {
  return (t10) => {
    let r6;
    v(() => {
      r6 = t10.subscribe(e10);
    }), d(() => null == r6 ? void 0 : r6.unsubscribe());
  };
}
function rQ(e10) {
  return (t10) => y(rZ, { elem$: t10.pipe(tJ((t11) => () => e10(t11))), children: {} });
}
let rZ = P({ elem$: _(), $default: _() }, (t10, r6) => {
  let o2 = e(null);
  return rl(t10.elem$, ri((e10) => {
    o2.value = e10;
  }), rH()), () => {
    var e10;
    return null === (e10 = o2.value) || void 0 === e10 ? void 0 : e10.call(o2);
  };
}, { name: "RxSlot" }), rJ = (e10, t10) => {
  let r6 = new tj(e10[t10]);
  return p(() => e10[t10], (e11) => r6.next(e11)), r6;
}, r0 = (e10) => {
  let t10 = {};
  for (let o2 in e10) {
    var r6;
    if (b(e10[o2]) || (r6 = e10[o2]) && (r6 instanceof tg || e8(r6.lift) && e8(r6.subscribe))) {
      t10[o2] = e10[o2];
      continue;
    }
    t10[`${o2}$`] = rJ(e10, o2);
  }
  return t10;
};
function r1(e10, t10) {
  let r6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = null != t10 ? t10 : e10;
  return P(null != e10 ? e10 : {}, (e11, t11) => {
    let r7 = r0(e11), i2 = o2(new Proxy({}, { get(t12, o3) {
      var i3;
      return null !== (i3 = e11[o3]) && void 0 !== i3 ? i3 : r7[o3];
    } }), new Proxy({}, { get: (e12, r8) => "render" === r8 ? rQ : t11[r8] }));
    return b(i2) ? i2 : () => i2;
  }, null != r6 ? r6 : t10);
}
let r2 = (e10) => {
  let t10 = new rV(e10), r6 = h((e11, r7) => ({ get: () => (e11(), t10.value), set(e12) {
    var o2;
    let i2 = null !== (o2 = null == e12 ? void 0 : e12.$$forwardRef) && void 0 !== o2 ? o2 : e12;
    Object.is(i2, t10.value) || (t10.next(i2), r7());
  } }));
  return new Proxy(t10, { get(e11, o2) {
    var i2;
    return "next" === o2 ? (e12) => {
      r6.value = b(e12) ? rK(t10.value, e12) : e12;
    } : "value" === o2 ? r6.value : null !== (i2 = t10[o2]) && void 0 !== i2 ? i2 : r6[o2];
  }, set: (e11, t11, o2) => ("value" === t11 ? r6.value = o2 : e11[t11] = o2, true) });
}, r3 = (e10, t10) => {
  if (w(e10) && w(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r6 in e10)
      if (!Object.is(e10[r6], t10[r6]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, r4 = (e10) => {
  let t10;
  let r6 = null;
  return ri({ next: (o2) => {
    r3(o2, r6) || (null == t10 || t10(), t10 = e10(o2), r6 = o2);
  }, unsubscribe: () => {
    null == t10 || t10();
  } });
};
function r5(e10, t10, r6) {
  var o2, l2, u2, a2;
  let c2;
  let f2 = x(e10) ? e10 : {}, p2 = b(e10) ? e10 : t10, h2 = null !== (o2 = null != r6 ? r6 : t10) && void 0 !== o2 ? o2 : {}, d2 = Symbol(null !== (l2 = h2.name) && void 0 !== l2 ? l2 : "");
  if (S(f2)) {
    let e11;
    let t11 = () => (void 0 === e11 && (e11 = p2({})), e11);
    return E(P({ value: _().optional(), $default: _().optional() }, (e12, r7) => {
      var o3;
      let { slots: i2 } = r7;
      return s(d2, null !== (o3 = e12.value) && void 0 !== o3 ? o3 : t11()), () => {
        var e13;
        return null === (e13 = i2.default) || void 0 === e13 ? void 0 : e13.call(i2);
      };
    }, { ...h2, name: `Provide(${null !== (u2 = h2.name) && void 0 !== u2 ? u2 : ""})` }), { use: () => i(d2, t11, true) });
  }
  let v2 = O(f2), y2 = () => v2.create({}), m2 = () => (void 0 === c2 && (c2 = p2(y2())), c2);
  return E(P({ ...f2, $default: _().optional() }, (e11, t11) => {
    let { slots: r7 } = t11;
    return s(d2, p2(e11)), () => {
      var e12;
      return null === (e12 = r7.default) || void 0 === e12 ? void 0 : e12.call(r7);
    };
  }, { ...h2, name: `Provide(${null !== (a2 = h2.name) && void 0 !== a2 ? a2 : ""})` }), { use: () => i(d2, m2, true) });
}
export {
  eW as A,
  tj as B,
  eG as C,
  t8 as D,
  t$ as E,
  rV as I,
  tg as O,
  eK as R,
  tP as S,
  e2 as _,
  t5 as a,
  t7 as b,
  r5 as c,
  rH as d,
  tZ as e,
  rX as f,
  rr as g,
  r1 as h,
  rQ as i,
  P as j,
  rY as k,
  rJ as l,
  tJ as m,
  t6 as n,
  r2 as o,
  ri as p,
  rt as q,
  rl as r,
  ro as s,
  r4 as t,
  tQ as u,
  t9 as v,
  eB as w,
  ef as x,
  re as y,
  eN as z
};
