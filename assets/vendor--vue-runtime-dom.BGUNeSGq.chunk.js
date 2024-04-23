let e;
import { h as t, B as n, g as l, j as r, k as i } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
import { g as a, q as o, r as s, a as u, b as c, F as f, k as m, D as p, A as v, z as d, G as g, H as h, I as S } from "./vendor--vue-shared.DjBT002R.chunk.js";
let b = "undefined" != typeof document ? document : null, C = b && b.createElement("template"), A = "transition", y = "animation", E = Symbol("_vtc"), T = (e2, l2) => {
  let { slots: r2 } = l2;
  return t(n, function(e3) {
    let t2 = {};
    for (let n3 in e3)
      n3 in L || (t2[n3] = e3[n3]);
    if (false === e3.css)
      return t2;
    let { name: n2 = "v", type: l3, duration: r3, enterFromClass: i2 = `${n2}-enter-from`, enterActiveClass: a2 = `${n2}-enter-active`, enterToClass: o2 = `${n2}-enter-to`, appearFromClass: c2 = i2, appearActiveClass: m2 = a2, appearToClass: p2 = o2, leaveFromClass: v2 = `${n2}-leave-from`, leaveActiveClass: d2 = `${n2}-leave-active`, leaveToClass: g2 = `${n2}-leave-to` } = e3, h2 = function(e4) {
      if (null == e4)
        return null;
      if (u(e4))
        return [f(e4.enter), f(e4.leave)];
      {
        let t3 = f(e4);
        return [t3, t3];
      }
    }(r3), S2 = h2 && h2[0], b2 = h2 && h2[1], { onBeforeEnter: C2, onEnter: A2, onEnterCancelled: y2, onLeave: E2, onLeaveCancelled: T2, onBeforeAppear: $2 = C2, onAppear: I2 = A2, onAppearCancelled: k2 = y2 } = t2, D2 = (e4, t3, n3) => {
      _(e4, t3 ? p2 : o2), _(e4, t3 ? m2 : a2), n3 && n3();
    }, O2 = (e4, t3) => {
      e4._isLeaving = false, _(e4, v2), _(e4, g2), _(e4, d2), t3 && t3();
    }, B2 = (e4) => (t3, n3) => {
      let r4 = e4 ? I2 : A2, a3 = () => D2(t3, e4, n3);
      N(r4, [t3, a3]), M(() => {
        _(t3, e4 ? c2 : i2), x(t3, e4 ? p2 : o2), w(r4) || P(t3, l3, S2, a3);
      });
    };
    return s(t2, { onBeforeEnter(e4) {
      N(C2, [e4]), x(e4, i2), x(e4, a2);
    }, onBeforeAppear(e4) {
      N($2, [e4]), x(e4, c2), x(e4, m2);
    }, onEnter: B2(false), onAppear: B2(true), onLeave(e4, t3) {
      e4._isLeaving = true;
      let n3 = () => O2(e4, t3);
      x(e4, v2), document.body.offsetHeight, x(e4, d2), M(() => {
        e4._isLeaving && (_(e4, v2), x(e4, g2), w(E2) || P(e4, l3, b2, n3));
      }), N(E2, [e4, n3]);
    }, onEnterCancelled(e4) {
      D2(e4, false), N(y2, [e4]);
    }, onAppearCancelled(e4) {
      D2(e4, true), N(k2, [e4]);
    }, onLeaveCancelled(e4) {
      O2(e4), N(T2, [e4]);
    } });
  }(e2), r2);
};
T.displayName = "Transition";
let L = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
T.props = s({}, l, L);
let N = function(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  c(e2) ? e2.forEach((e3) => e3(...t2)) : e2 && e2(...t2);
}, w = (e2) => !!e2 && (c(e2) ? e2.some((e3) => e3.length > 1) : e2.length > 1);
function x(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.add(t3)), (e2[E] || (e2[E] = /* @__PURE__ */ new Set())).add(t2);
}
function _(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.remove(t3));
  let n2 = e2[E];
  n2 && (n2.delete(t2), n2.size || (e2[E] = void 0));
}
function M(e2) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e2);
  });
}
let $ = 0;
function P(e2, t2, n2, l2) {
  let r2 = e2._endId = ++$, i2 = () => {
    r2 === e2._endId && l2();
  };
  if (n2)
    return setTimeout(i2, n2);
  let { type: a2, timeout: o2, propCount: s2 } = function(e3, t3) {
    let n3 = window.getComputedStyle(e3), l3 = (e4) => (n3[e4] || "").split(", "), r3 = l3(`${A}Delay`), i3 = l3(`${A}Duration`), a3 = I(r3, i3), o3 = l3(`${y}Delay`), s3 = l3(`${y}Duration`), u3 = I(o3, s3), c3 = null, f3 = 0, m3 = 0;
    t3 === A ? a3 > 0 && (c3 = A, f3 = a3, m3 = i3.length) : t3 === y ? u3 > 0 && (c3 = y, f3 = u3, m3 = s3.length) : m3 = (c3 = (f3 = Math.max(a3, u3)) > 0 ? a3 > u3 ? A : y : null) ? c3 === A ? i3.length : s3.length : 0;
    let p2 = c3 === A && /\b(transform|all)(,|$)/.test(l3(`${A}Property`).toString());
    return { type: c3, timeout: f3, propCount: m3, hasTransform: p2 };
  }(e2, t2);
  if (!a2)
    return l2();
  let u2 = a2 + "end", c2 = 0, f2 = () => {
    e2.removeEventListener(u2, m2), i2();
  }, m2 = (t3) => {
    t3.target === e2 && ++c2 >= s2 && f2();
  };
  setTimeout(() => {
    c2 < s2 && f2();
  }, o2 + 1), e2.addEventListener(u2, m2);
}
function I(e2, t2) {
  for (; e2.length < t2.length; )
    e2 = e2.concat(e2);
  return Math.max(...t2.map((t3, n2) => k(t3) + k(e2[n2])));
}
function k(e2) {
  return "auto" === e2 ? 0 : 1e3 * Number(e2.slice(0, -1).replace(",", "."));
}
let D = Symbol("_vod"), O = Symbol("_vsh"), B = Symbol(""), H = /(^|;)\s*display\s*:/, q = /\s*!important$/;
function F(e2, t2, n2) {
  if (c(n2))
    n2.forEach((n3) => F(e2, t2, n3));
  else if (null == n2 && (n2 = ""), t2.startsWith("--"))
    e2.setProperty(t2, n2);
  else {
    let l2 = function(e3, t3) {
      let n3 = j[t3];
      if (n3)
        return n3;
      let l3 = d(t3);
      if ("filter" !== l3 && l3 in e3)
        return j[t3] = l3;
      l3 = g(l3);
      for (let n4 = 0; n4 < V.length; n4++) {
        let r2 = V[n4] + l3;
        if (r2 in e3)
          return j[t3] = r2;
      }
      return t3;
    }(e2, t2);
    q.test(n2) ? e2.setProperty(v(l2), n2.replace(q, ""), "important") : e2[l2] = n2;
  }
}
let V = ["Webkit", "Moz", "ms"], j = {}, G = "http://www.w3.org/1999/xlink", R = Symbol("_vei"), z = /(?:Once|Passive|Capture)$/, W = 0, U = Promise.resolve(), X = () => W || (U.then(() => W = 0), W = Date.now()), J = (e2) => 111 === e2.charCodeAt(0) && 110 === e2.charCodeAt(1) && e2.charCodeAt(2) > 96 && 123 > e2.charCodeAt(2), K = s({ patchProp: (e2, t2, n2, l2, r2, s2, u2, f2, d2) => {
  let g2 = "svg" === r2;
  "class" === t2 ? function(e3, t3, n3) {
    let l3 = e3[E];
    l3 && (t3 = (t3 ? [t3, ...l3] : [...l3]).join(" ")), null == t3 ? e3.removeAttribute("class") : n3 ? e3.setAttribute("class", t3) : e3.className = t3;
  }(e2, l2, g2) : "style" === t2 ? function(e3, t3, n3) {
    let l3 = e3.style, r3 = o(n3), i2 = false;
    if (n3 && !r3) {
      if (t3) {
        if (o(t3))
          for (let e4 of t3.split(";")) {
            let t4 = e4.slice(0, e4.indexOf(":")).trim();
            null == n3[t4] && F(l3, t4, "");
          }
        else
          for (let e4 in t3)
            null == n3[e4] && F(l3, e4, "");
      }
      for (let e4 in n3)
        "display" === e4 && (i2 = true), F(l3, e4, n3[e4]);
    } else if (r3) {
      if (t3 !== n3) {
        let e4 = l3[B];
        e4 && (n3 += ";" + e4), l3.cssText = n3, i2 = H.test(n3);
      }
    } else
      t3 && e3.removeAttribute("style");
    D in e3 && (e3[D] = i2 ? l3.display : "", e3[O] && (l3.display = "none"));
  }(e2, n2, l2) : m(t2) ? p(t2) || function(e3, t3, n3, l3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a2 = e3[R] || (e3[R] = {}), o2 = a2[t3];
    if (l3 && o2)
      o2.value = l3;
    else {
      let [n4, s3] = function(e4) {
        let t4;
        if (z.test(e4)) {
          let n5;
          for (t4 = {}; n5 = e4.match(z); )
            e4 = e4.slice(0, e4.length - n5[0].length), t4[n5[0].toLowerCase()] = true;
        }
        return [":" === e4[2] ? e4.slice(3) : v(e4.slice(2)), t4];
      }(t3);
      l3 ? function(e4, t4, n5, l4) {
        e4.addEventListener(t4, n5, l4);
      }(e3, n4, a2[t3] = function(e4, t4) {
        let n5 = (e5) => {
          if (e5._vts) {
            if (e5._vts <= n5.attached)
              return;
          } else
            e5._vts = Date.now();
          i(function(e6, t5) {
            if (!c(t5))
              return t5;
            {
              let n6 = e6.stopImmediatePropagation;
              return e6.stopImmediatePropagation = () => {
                n6.call(e6), e6._stopped = true;
              }, t5.map((e7) => (t6) => !t6._stopped && e7 && e7(t6));
            }
          }(e5, n5.value), t4, 5, [e5]);
        };
        return n5.value = e4, n5.attached = X(), n5;
      }(l3, r3), s3) : o2 && (!function(e4, t4, n5, l4) {
        e4.removeEventListener(t4, n5, l4);
      }(e3, n4, o2, s3), a2[t3] = void 0);
    }
  }(e2, t2, n2, l2, u2) : ("." === t2[0] ? (t2 = t2.slice(1), 0) : "^" === t2[0] ? (t2 = t2.slice(1), 1) : !function(e3, t3, n3, l3) {
    if (l3)
      return !!("innerHTML" === t3 || "textContent" === t3 || t3 in e3 && J(t3) && a(n3));
    if ("spellcheck" === t3 || "draggable" === t3 || "translate" === t3 || "form" === t3 || "list" === t3 && "INPUT" === e3.tagName || "type" === t3 && "TEXTAREA" === e3.tagName)
      return false;
    if ("width" === t3 || "height" === t3) {
      let t4 = e3.tagName;
      if ("IMG" === t4 || "VIDEO" === t4 || "CANVAS" === t4 || "SOURCE" === t4)
        return false;
    }
    return !(J(t3) && o(n3)) && t3 in e3;
  }(e2, t2, l2, g2)) ? ("true-value" === t2 ? e2._trueValue = l2 : "false-value" === t2 && (e2._falseValue = l2), function(e3, t3, n3, l3, r3) {
    if (l3 && t3.startsWith("xlink:"))
      null == n3 ? e3.removeAttributeNS(G, t3.slice(6, t3.length)) : e3.setAttributeNS(G, t3, n3);
    else {
      let l4 = h(t3);
      null == n3 || l4 && !S(n3) ? e3.removeAttribute(t3) : e3.setAttribute(t3, l4 ? "" : n3);
    }
  }(e2, t2, l2, g2)) : function(e3, t3, n3, l3, r3, i2, a2) {
    if ("innerHTML" === t3 || "textContent" === t3) {
      l3 && a2(l3, r3, i2), e3[t3] = null == n3 ? "" : n3;
      return;
    }
    let o2 = e3.tagName;
    if ("value" === t3 && "PROGRESS" !== o2 && !o2.includes("-")) {
      let l4 = "OPTION" === o2 ? e3.getAttribute("value") || "" : e3.value, r4 = null == n3 ? "" : n3;
      l4 === r4 && "_value" in e3 || (e3.value = r4), null == n3 && e3.removeAttribute(t3), e3._value = n3;
      return;
    }
    let s3 = false;
    if ("" === n3 || null == n3) {
      let l4 = typeof e3[t3];
      "boolean" === l4 ? n3 = S(n3) : null == n3 && "string" === l4 ? (n3 = "", s3 = true) : "number" === l4 && (n3 = 0, s3 = true);
    }
    try {
      e3[t3] = n3;
    } catch (e4) {
    }
    s3 && e3.removeAttribute(t3);
  }(e2, t2, l2, s2, u2, f2, d2);
} }, { insert: (e2, t2, n2) => {
  t2.insertBefore(e2, n2 || null);
}, remove: (e2) => {
  let t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}, createElement: (e2, t2, n2, l2) => {
  let r2 = "svg" === t2 ? b.createElementNS("http://www.w3.org/2000/svg", e2) : "mathml" === t2 ? b.createElementNS("http://www.w3.org/1998/Math/MathML", e2) : b.createElement(e2, n2 ? { is: n2 } : void 0);
  return "select" === e2 && l2 && null != l2.multiple && r2.setAttribute("multiple", l2.multiple), r2;
}, createText: (e2) => b.createTextNode(e2), createComment: (e2) => b.createComment(e2), setText: (e2, t2) => {
  e2.nodeValue = t2;
}, setElementText: (e2, t2) => {
  e2.textContent = t2;
}, parentNode: (e2) => e2.parentNode, nextSibling: (e2) => e2.nextSibling, querySelector: (e2) => b.querySelector(e2), setScopeId(e2, t2) {
  e2.setAttribute(t2, "");
}, insertStaticContent(e2, t2, n2, l2, r2, i2) {
  let a2 = n2 ? n2.previousSibling : t2.lastChild;
  if (r2 && (r2 === i2 || r2.nextSibling))
    for (; t2.insertBefore(r2.cloneNode(true), n2), r2 !== i2 && (r2 = r2.nextSibling); )
      ;
  else {
    C.innerHTML = "svg" === l2 ? `<svg>${e2}</svg>` : "mathml" === l2 ? `<math>${e2}</math>` : e2;
    let r3 = C.content;
    if ("svg" === l2 || "mathml" === l2) {
      let e3 = r3.firstChild;
      for (; e3.firstChild; )
        r3.appendChild(e3.firstChild);
      r3.removeChild(e3);
    }
    t2.insertBefore(r3, n2);
  }
  return [a2 ? a2.nextSibling : t2.firstChild, n2 ? n2.previousSibling : t2.lastChild];
} }), Q = function() {
  for (var t2 = arguments.length, n2 = Array(t2), l2 = 0; l2 < t2; l2++)
    n2[l2] = arguments[l2];
  let i2 = (e || (e = r(K))).createApp(...n2), { mount: s2 } = i2;
  return i2.mount = (e2) => {
    let t3 = o(e2) ? document.querySelector(e2) : e2;
    if (!t3)
      return;
    let n3 = i2._component;
    a(n3) || n3.render || n3.template || (n3.template = t3.innerHTML), t3.innerHTML = "";
    let l3 = s2(t3, false, t3 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && t3 instanceof MathMLElement ? "mathml" : void 0);
    return t3 instanceof Element && (t3.removeAttribute("v-cloak"), t3.setAttribute("data-v-app", "")), l3;
  }, i2;
};
export {
  T,
  Q as c
};
