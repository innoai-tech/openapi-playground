var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let e;
import { f as t, j as r, i as n, c as a, k as i, e as o, S as s, l, m as c, n as u, b as f, g as h, u as d, p as m, r as p, q as g, T as b, t as y, s as v, o as x, d as w, F as k } from "./lib-nodepkg-vuekit.BFTeRu50.chunk.js";
import { e as C } from "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
import { k as M, g as P, i as _, l as S, s as R, h as T, f as D, j as $, m as O, e as L, o as I, n as A, q as F, r as B, b as V, a as E, c as z, t as H, u as j } from "./vendor-innoai-tech-lodash.pIS0vKJX.chunk.js";
import { _ as W, c as N } from "./vendor-rxjs.CCKTxAfl.chunk.js";
var q, U, G, Y, X, J, K = function() {
};
let Z = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function Q(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let ee = ["duration", "bounce"], et = ["stiffness", "damping", "mass"];
function er(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function en(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n7 = 2, restDelta: a2 } = e10, i2 = W(e10, ["from", "to", "restSpeed", "restDelta"]);
  let o2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: f2, isResolvedFromDuration: h2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!er(e11, et) && er(e11, ee)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n10 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e12, s3 = 1 - a3;
        s3 = Z(0.05, 1, s3), n10 = Z(0.01, 10, n10 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n10;
          return 1e-3 - (t13 - i3) / Q(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n10, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n10, o4 = Math.exp(-r13), l4 = Q(Math.pow(e13, 2), s3);
          return (r13 * i3 + i3 - a4) * o4 * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / l4;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n10) * ((e13 - i3) * n10 + 1), r12 = (e13) => n10 * n10 * (i3 - e13) * Math.exp(-e13 * n10));
        let l3 = function(e13, t13, r13) {
          let n11 = r13;
          for (let r14 = 1; r14 < 12; r14++) n11 -= e13(n11) / t13(n11);
          return n11;
        }(t12, r12, 5 / n10);
        if (n10 *= 1e3, isNaN(l3)) return { stiffness: 100, damping: 10, duration: n10 };
        {
          let e13 = Math.pow(l3, 2) * o3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(o3 * e13), duration: n10 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), d2 = ea, m2 = ea;
  function p2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n10 = r10 - t10, i3 = l2 / (2 * Math.sqrt(s2 * c2)), o3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i3 < 1) {
      let t11 = Q(o3, i3);
      d2 = (a3) => r10 - Math.exp(-i3 * o3 * a3) * ((e11 + i3 * o3 * n10) / t11 * Math.sin(t11 * a3) + n10 * Math.cos(t11 * a3)), m2 = (r11) => {
        let a3 = Math.exp(-i3 * o3 * r11);
        return i3 * o3 * a3 * (Math.sin(t11 * r11) * (e11 + i3 * o3 * n10) / t11 + n10 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + i3 * o3 * n10) - t11 * n10 * Math.sin(t11 * r11));
      };
    } else if (1 === i3) d2 = (t11) => r10 - Math.exp(-o3 * t11) * (n10 + (e11 + o3 * n10) * t11);
    else {
      let t11 = o3 * Math.sqrt(i3 * i3 - 1);
      d2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + i3 * o3 * n10) * Math.sinh(l3) + t11 * n10 * Math.cosh(l3)) / t11;
      };
    }
  }
  return p2(), { next: (e11) => {
    let t11 = d2(e11);
    if (h2) o2.done = e11 >= f2;
    else {
      let i3 = Math.abs(1e3 * m2(e11)) <= n7, s3 = Math.abs(r10 - t11) <= a2;
      o2.done = i3 && s3;
    }
    return o2.value = o2.done ? r10 : t11, o2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], p2();
  } };
}
en.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let ea = (e10) => 0, ei = (e10, t10, r10) => {
  let n7 = t10 - e10;
  return 0 === n7 ? 1 : (r10 - e10) / n7;
}, eo = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, es = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), el = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, ec = /(-)?([\d]*\.?[\d])+/g, eu = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ef = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eh(e10) {
  return "string" == typeof e10;
}
let ed = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, em = Object.assign(Object.assign({}, ed), { transform: es(0, 1) });
Object.assign(Object.assign({}, ed), { default: 1 });
let ep = { test: (e10) => eh(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, ep), { parse: (e10) => ep.parse(e10) / 100, transform: (e10) => ep.transform(100 * e10) });
let eg = (e10, t10) => (r10) => !!(eh(r10) && ef.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), eb = (e10, t10, r10) => (n7) => {
  if (!eh(n7)) return n7;
  let [a2, i2, o2, s2] = n7.match(ec);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ey = { test: eg("hsl", "hue"), parse: eb("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n7, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + ep.transform(el(r10)) + ", " + ep.transform(el(n7)) + ", " + el(em.transform(a2)) + ")";
} }, ev = es(0, 255), ex = Object.assign(Object.assign({}, ed), { transform: (e10) => Math.round(ev(e10)) }), ew = { test: eg("rgb", "red"), parse: eb("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n7, alpha: a2 = 1 } = e10;
  return "rgba(" + ex.transform(t10) + ", " + ex.transform(r10) + ", " + ex.transform(n7) + ", " + el(em.transform(a2)) + ")";
} }, ek = { test: eg("#"), parse: function(e10) {
  let t10 = "", r10 = "", n7 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n7 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n7 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n7 += n7, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n7, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: ew.transform }, eC = { test: (e10) => ew.test(e10) || ek.test(e10) || ey.test(e10), parse: (e10) => ew.test(e10) ? ew.parse(e10) : ey.test(e10) ? ey.parse(e10) : ek.parse(e10), transform: (e10) => eh(e10) ? e10 : e10.hasOwnProperty("red") ? ew.transform(e10) : ey.transform(e10) }, eM = "${c}", eP = "${n}";
function e_(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n7 = e10.match(eu);
  n7 && (r10 = n7.length, e10 = e10.replace(eu, eM), t10.push(...n7.map(eC.parse)));
  let a2 = e10.match(ec);
  return a2 && (e10 = e10.replace(ec, eP), t10.push(...a2.map(ed.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let eS = function(e10) {
  let { values: t10, numColors: r10, tokenised: n7 } = e_(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n7;
    for (let n10 = 0; n10 < a2; n10++) t11 = t11.replace(n10 < r10 ? eM : eP, n10 < r10 ? eC.transform(e11[n10]) : el(e11[n10]));
    return t11;
  };
};
function eR(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eT(e10) {
  let { hue: t10, saturation: r10, lightness: n7, alpha: a2 } = e10;
  t10 /= 360, n7 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n7 < 0.5 ? n7 * (1 + r10) : n7 + r10 - n7 * r10, a3 = 2 * n7 - e11;
    i2 = eR(a3, e11, t10 + 1 / 3), o2 = eR(a3, e11, t10), s2 = eR(a3, e11, t10 - 1 / 3);
  } else i2 = o2 = s2 = n7;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let eD = (e10, t10, r10) => {
  let n7 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n7) + n7));
}, e$ = [ek, ew, ey], eO = (e10) => e$.find((t10) => t10.test(e10)), eL = (e10, t10) => {
  let r10 = eO(e10), n7 = eO(t10), a2 = r10.parse(e10), i2 = n7.parse(t10);
  r10 === ey && (a2 = eT(a2), r10 = ew), n7 === ey && (i2 = eT(i2), n7 = ew);
  let o2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in o2) "alpha" !== t11 && (o2[t11] = eD(a2[t11], i2[t11], e11));
    return o2.alpha = eo(a2.alpha, i2.alpha, e11), r10.transform(o2);
  };
}, eI = (e10) => "number" == typeof e10, eA = (e10, t10) => (r10) => t10(e10(r10)), eF = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return t10.reduce(eA);
};
function eB(e10, t10) {
  return eI(e10) ? (r10) => eo(e10, t10, r10) : eC.test(e10) ? eL(e10, t10) : eH(e10, t10);
}
let eV = (e10, t10) => {
  let r10 = [...e10], n7 = r10.length, a2 = e10.map((e11, r11) => eB(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n7; t11++) r10[t11] = a2[t11](e11);
    return r10;
  };
}, eE = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n7 = {};
  for (let a2 in r10) void 0 !== e10[a2] && void 0 !== t10[a2] && (n7[a2] = eB(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n7) r10[t11] = n7[t11](e11);
    return r10;
  };
};
function ez(e10) {
  let t10 = e_(e10).values, r10 = t10.length, n7 = 0, a2 = 0, i2 = 0;
  for (let e11 = 0; e11 < r10; e11++) n7 || "number" == typeof t10[e11] ? n7++ : void 0 !== t10[e11].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n7, numRGB: a2, numHSL: i2 };
}
let eH = (e10, t10) => {
  let r10 = eS(t10), n7 = ez(e10), a2 = ez(t10);
  return n7.numHSL === a2.numHSL && n7.numRGB === a2.numRGB && n7.numNumbers >= a2.numNumbers ? eF(eV(n7.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, ej = (e10, t10) => (r10) => eo(e10, t10, r10);
function eW(e10, t10) {
  let { clamp: r10 = true, ease: n7, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e10.length;
  K(i2 === t10.length), K(!n7 || !Array.isArray(n7) || n7.length === i2 - 1), e10[0] > e10[i2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let o2 = function(e11, t11, r11) {
    let n10 = [], a3 = r11 || function(e12) {
      if ("number" == typeof e12) return ej;
      if ("string" == typeof e12) if (eC.test(e12)) return eL;
      else return eH;
      return Array.isArray(e12) ? eV : "object" == typeof e12 ? eE : void 0;
    }(e11[0]), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let i4 = a3(e11[r12], e11[r12 + 1]);
      t11 && (i4 = eF(Array.isArray(t11) ? t11[r12] : t11, i4)), n10.push(i4);
    }
    return n10;
  }(t10, n7, a2), s2 = 2 === i2 ? function(e11, t11) {
    let [r11, n10] = e11, [a3] = t11;
    return (e12) => a3(ei(r11, n10, e12));
  }(e10, o2) : function(e11, t11) {
    let r11 = e11.length, n10 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e11[0] ? o3 = true : a3 >= e11[n10] && (i3 = n10 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n10; t12++) ;
        i3 = t12 - 1;
      }
      let s3 = ei(e11[i3], e11[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e10, o2);
  return r10 ? (t11) => s2(Z(e10[0], e10[i2 - 1], t11)) : s2;
}
let eN = (e10) => e10, eq = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eU(e10) {
  var t10;
  let { from: r10 = 0, to: n7 = 1, ease: a2, offset: i2, duration: o2 = 300 } = e10, s2 = { done: false, value: r10 }, l2 = Array.isArray(n7) ? n7 : [r10, n7], c2 = (t10 = i2 && i2.length === l2.length ? i2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(l2), t10.map((e11) => e11 * o2));
  function u2() {
    return eW(c2, l2, { ease: Array.isArray(a2) ? a2 : l2.map(() => a2 || eq).splice(0, l2.length - 1) });
  }
  let f2 = u2();
  return { next: (e11) => (s2.value = f2(e11), s2.done = e11 >= o2, s2), flipTarget: () => {
    l2.reverse(), f2 = u2();
  } };
}
let eG = { keyframes: eU, spring: en, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n7 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e10, s2 = { done: false, value: r10 }, l2 = n7 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eY = 1 / 60 * 1e3, eX = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eJ = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eX()), eY), eK = true, eZ = false, eQ = false, e0 = { delta: 0, timestamp: 0 }, e1 = ["read", "update", "preRender", "render", "postRender"], e2 = e1.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n7 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n7 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n7 = t11.length) for (let r11 = 0; r11 < n7; r11++) {
      let n10 = t11[r11];
      n10(l2), o2.has(n10) && (s2.schedule(n10), e11());
    }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => eZ = true), e10), {}), e4 = e1.reduce((e10, t10) => {
  let r10 = e2[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n7 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eZ || e9(), r10.schedule(e11, t11, n7);
  }, e10;
}, {}), e5 = e1.reduce((e10, t10) => (e10[t10] = e2[t10].cancel, e10), {});
e1.reduce((e10, t10) => (e10[t10] = () => e2[t10].process(e0), e10), {});
let e3 = (e10) => e2[e10].process(e0), e8 = (e10) => {
  eZ = false, e0.delta = eK ? eY : Math.max(Math.min(e10 - e0.timestamp, 40), 1), e0.timestamp = e10, eQ = true, e1.forEach(e3), eQ = false, eZ && (eK = false, eJ(e8));
}, e9 = () => {
  eZ = true, eK = true, eQ || eJ(e8);
};
function e6(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let e7 = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e4.update(t10, true), stop: () => e5.update(t10) };
};
function te(e10) {
  let t10, r10, n7;
  var a2, { from: i2, autoplay: o2 = true, driver: s2 = e7, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: f2 = 0, onPlay: h2, onStop: d2, onComplete: m2, onRepeat: p2, onUpdate: g2 } = e10, b2 = W(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: y2 } = b2, v2 = 0, x2 = b2.duration, w2 = false, k2 = true, C2 = function(e11) {
    if (Array.isArray(e11.to)) return eU;
    if (eG[e11.type]) return eG[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio")) ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta")) return en;
    return eU;
  }(b2);
  (null == (a2 = C2.needsInterpolation) ? void 0 : a2.call(C2, i2, y2)) && (n7 = eW([0, 100], [i2, y2], { clamp: false }), i2 = 0, y2 = 100);
  let M2 = C2(Object.assign(Object.assign({}, b2), { from: i2, to: y2 }));
  return o2 && (null == h2 || h2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = M2.next(Math.max(0, l2));
      r10 = e12.value, n7 && (r10 = n7(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) if (0 === v2 && (null != x2 || (x2 = l2)), v2 < c2) {
      var a3, i3;
      a3 = l2, i3 = x2, (k2 ? a3 >= i3 + f2 : a3 <= -f2) && (v2++, "reverse" === u2 ? l2 = function(e12, t11) {
        let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return n10 ? e6(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
      }(l2, x2, f2, k2 = v2 % 2 == 0) : (l2 = e6(l2, x2, f2), "mirror" === u2 && M2.flipTarget()), w2 = false, p2 && p2());
    } else t10.stop(), m2 && m2();
  })).start()), { stop: () => {
    null == d2 || d2(), t10.stop();
  } };
}
let tt = (e10, t10) => 1 - 3 * t10 + 3 * e10, tr = (e10, t10) => 3 * t10 - 6 * e10, tn = (e10) => 3 * e10, ta = (e10, t10, r10) => ((tt(t10, r10) * e10 + tr(t10, r10)) * e10 + tn(t10)) * e10, ti = (e10, t10, r10) => 3 * tt(t10, r10) * e10 * e10 + 2 * tr(t10, r10) * e10 + tn(t10);
var to = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, ts = /[A-Z]|^ms/g, tl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tc = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tu = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tf = (q = function(e10) {
  return tc(e10) ? e10 : e10.replace(ts, "-$&").toLowerCase();
}, U = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === U[e10] && (U[e10] = q(e10)), U[e10];
}), th = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10) return t10.replace(tl, function(e11, t11, r10) {
        return X = { name: t11, styles: r10, next: X }, t11;
      });
  }
  return 1 === to[e10] || tc(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function td(e10, t10, r10) {
  if (null == r10) return "";
  if (void 0 !== r10.__emotion_styles) return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim) return X = { name: r10.name, styles: r10.styles, next: X }, r10.name;
      if (void 0 !== r10.styles) {
        var n7 = r10.next;
        if (void 0 !== n7) for (; void 0 !== n7; ) X = { name: n7.name, styles: n7.styles, next: X }, n7 = n7.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n10 = "";
        if (Array.isArray(r11)) for (var a3 = 0; a3 < r11.length; a3++) n10 += td(e11, t11, r11[a3]) + ";";
        else for (var i3 in r11) {
          var o3 = r11[i3];
          if ("object" != typeof o3) null != t11 && void 0 !== t11[o3] ? n10 += i3 + "{" + t11[o3] + "}" : tu(o3) && (n10 += tf(i3) + ":" + th(i3, o3) + ";");
          else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]])) for (var s2 = 0; s2 < o3.length; s2++) tu(o3[s2]) && (n10 += tf(i3) + ":" + th(i3, o3[s2]) + ";");
          else {
            var l2 = td(e11, t11, o3);
            switch (i3) {
              case "animation":
              case "animationName":
                n10 += tf(i3) + ":" + l2 + ";";
                break;
              default:
                n10 += i3 + "{" + l2 + "}";
            }
          }
        }
        return n10;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = X, i2 = r10(e10);
        return X = a2, td(e10, t10, i2);
      }
  }
  if (null == t10) return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var tm = /label:\s*([^\s;{]+)\s*(;|$)/g;
function tp() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tg = tp(), tb = { paddingX: [tg.paddingLeft, tg.paddingRight], paddingY: [tg.paddingTop, tg.paddingBottom], marginX: [tg.marginInlineStart, tg.marginInlineEnd], marginY: [tg.marginTop, tg.marginBottom], borderX: [tg.borderLeft, tg.borderRight], borderY: [tg.borderTop, tg.borderBottom], color: [tg.color, tg.fill], borderTopRadius: [tg.borderTopLeftRadius, tg.borderTopRightRadius], borderBottomRadius: [tg.borderBottomLeftRadius, tg.borderBottomRightRadius], borderRightRadius: [tg.borderTopRightRadius, tg.borderBottomRightRadius], borderLeftRadius: [tg.borderTopLeftRadius, tg.borderBottomLeftRadius], backgroundGradient: [tg.backgroundImage], boxSize: [tg.width, tg.height] }, ty = tp(), tv = { font: ty.fontFamily, shadow: ty.boxShadow, rounded: ty.borderRadius, roundedTop: ty.borderTopRadius, roundedBottom: ty.borderBottomRadius, roundedLeft: ty.borderLeftRadius, roundedRight: ty.borderRightRadius, bg: ty.background, bgImage: ty.backgroundImage, bgSize: ty.backgroundSize, bgPosition: ty.backgroundPosition, bgRepeat: ty.backgroundRepeat, bgAttachment: ty.backgroundAttachment, bgColor: ty.backgroundColor, bgGradient: ty.backgroundGradient, bgClip: ty.backgroundClip, pos: ty.position, p: ty.padding, pt: ty.paddingTop, pr: ty.paddingRight, pl: ty.paddingLeft, pb: ty.paddingBottom, ps: ty.paddingInlineStart, pe: ty.paddingInlineEnd, px: ty.paddingX, py: ty.paddingY, m: ty.margin, mt: ty.marginTop, mr: ty.marginRight, ml: ty.marginLeft, mb: ty.marginBottom, ms: ty.marginInlineStart, me: ty.marginInlineEnd, mx: ty.marginX, my: ty.marginY, w: ty.width, minW: ty.minWidth, maxW: ty.maxWidth, h: ty.height, minH: ty.minHeight, maxH: ty.maxHeight }, tx = tp(), tw = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  let n7 = [...t10];
  for (let e11 of t10) tv[e11] && n7.push(tv[e11]);
  return n7;
}, tk = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _tC = class _tC {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n7, extends: a2, ...i2 } = e10;
    if (a2) for (let e11 of a2) r10.push(...this.processAll(e11, t10));
    if (n7) {
      let e11 = {}, t11 = {};
      _tC.walkStateValues(n7, (r11, n10, a3) => {
        let i3 = `--${this.opt.varPrefix}-state-${n10.join("-")}`, o2 = S(n10) ?? "", s2 = {};
        this.process(s2, o2, r11, false), e11[i3] = s2[o2], R(t11, [...a3, o2], `var(${i3})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!T(i2)) {
      let e11 = {};
      this.processTo(e11, i2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n7 in t10) this.process(e10, n7, t10[n7], r10);
  }
  process(e10, t10, r10) {
    var _a;
    let n7 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = (_a = this.opt.mixins[t10]) == null ? void 0 : _a.get(r10);
      if (a3) for (let t11 in a3) this.process(e10, t11, a3[t11], n7);
      return;
    }
    let a2 = t10;
    if (_(r10)) {
      e10[a2 = _tC.convertSelector(a2) ?? a2] = e10[a2] ?? {}, this.processTo(e10[a2], r10);
      return;
    }
    if (n7 && tb[a2 = tv[a2] ?? a2]) {
      for (let t11 of tb[a2]) e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[a2] = this.opt.processValue(a2, r10);
  }
};
__publicField(_tC, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_tC, "convertSelector", (e10) => {
  if (tk[e10]) return tk[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n7, a2] = t10.split("__");
      return a2 ? `${e11}[${M(n7)}='${M(a2)}']${r10}` : `${e11}[${M(n7)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_tC.supportedPseudoClasses[t10]) {
        let r12 = _tC.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n7] = t10.split("__"), a2 = M(r11);
      return n7 ? `${e11}[data-${a2}='${M(n7)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_tC, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n7, ...a2 } = e10;
  for (let e11 in a2) {
    let i2 = a2[e11], o2 = a2.default ?? r10.default, s2 = n7 ?? P(o2, [...r10.path.slice(1), "$"]), l2 = s2 ? [...r10.selectorPath, s2] : r10.selectorPath, c2 = [...r10.path, e11];
    if (_(i2)) {
      _tC.walkStateValues(i2, t10, { path: c2, selectorPath: l2, default: o2 });
      continue;
    }
    t10(i2, c2, l2);
  }
});
let tC = _tC;
var tM = ((G = tM || {}).var = "var", G.mixin = "mixin", G);
class tP {
  static create(e10, t10) {
    let { value: r10, on: n7, transform: a2 } = t10;
    return { type: e10, value: r10, on: n7, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tP.create("var", { value: e10, on: tw(tx.color, tx.bgColor, tx.outlineColor, tx.borderColor, tx.accentColor, tx.fill, tx.stroke), transform: (e11, t10) => D(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tP.create("var", { value: e10, on: tw(tx.gap, tx.rowGap, tx.columnGap, tx.top, tx.right, tx.bottom, tx.left, tx.m, tx.ms, tx.me, tx.mt, tx.mr, tx.mb, tx.ml, tx.mx, tx.my, tx.p, tx.ps, tx.pe, tx.pt, tx.pr, tx.pb, tx.pl, tx.px, tx.py) });
  }
  static boxSize(e10) {
    return tP.create("var", { value: e10, on: tw(tx.w, tx.minW, tx.maxW, tx.h, tx.minH, tx.maxH, tx.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tP.create("var", { value: e10, on: tw(tx.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tP.create("var", { value: e10, on: tw(tx.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tP.create("var", { value: e10, fallback: 0, on: tw(tx.rounded, tx.roundedTop, tx.roundedBottom, tx.roundedLeft, tx.roundedRight, tg.borderTopLeftRadius, tg.borderTopRightRadius, tg.borderBottomLeftRadius, tg.borderBottomRightRadius, tg.borderTopRightRadius, tg.borderBottomRightRadius, tg.borderTopLeftRadius, tg.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tP.create("var", { value: e10, on: tw(tx.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tP.create("var", { value: e10, on: tw(tx.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tP.create("var", { value: e10, on: tw(tx.font) });
  }
  static fontWeight(e10) {
    return tP.create("var", { value: e10, on: tw(tx.fontWeight) });
  }
  static letterSpacing(e10) {
    return tP.create("var", { value: e10, on: tw(tx.letterSpacing) });
  }
  static shadow(e10) {
    return tP.create("var", { value: e10, on: tw(tx.shadow) });
  }
  static customMixin(e10, t10) {
    return tP.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let t_ = (e10, t10, r10) => {
  let n7 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    let a2 = t10[e11];
    if (e11 === t10.length - 1) {
      n7[a2] = r10;
      continue;
    }
    n7[a2] = n7[a2] ?? {}, n7 = n7[a2];
  }
};
const _tS = class _tS {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tS.walkValues(e10.value, (n7, a2) => {
      let i2 = a2.join("."), o2 = (n10, a3) => {
        let i3 = e10.transform ? e10.transform(n10, t10) : r10(n10);
        if (L(i3)) for (let e11 in i3) a3(i3[e11], "default" === e11 ? "" : e11);
        else a3(i3, "");
      };
      if (R(this._cssVarRefs, [i2], t10(i2)), _(n7)) for (let e11 in n7) o2(n7[e11], (t11, r11) => {
        R(this._values, [`${i2}${r11 ? `/${r11}` : ""}`, e11], t11);
      });
      else o2(n7, (e11, t11) => {
        R(this._values, [`${i2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return O(this._values);
  }
  get(e10, t10, r10) {
    let n7 = this._values[e10];
    return L(n7) ? r10 ? n7[t10] : n7[t10] ?? n7[_tS.defaultMode] : r10 ? t10 === _tS.defaultMode ? n7 : void 0 : n7;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tS, "defaultMode", "_default");
__publicField(_tS, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n7 in e10) {
    let a2 = e10[n7];
    if (_(a2)) {
      if ($(a2, "_default")) {
        t10(a2, [...r10, n7]);
        continue;
      }
      _tS.walkValues(a2, t10, [...r10, n7]);
      continue;
    }
    t10(a2, [...r10, n7]);
  }
});
let tS = _tS;
const _tR = class _tR {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tR.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      R(this._values, [r10], I(e11, "__mixin"));
    });
  }
  get tokens() {
    return O(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tR, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n7 in e10) {
    let a2 = e10[n7];
    if (_(a2)) {
      if ($(a2, "__mixin")) {
        t10(a2, [...r10, n7]);
        continue;
      }
      _tR.walkValue(a2, t10, [...r10, n7]);
      continue;
    }
    t10(a2, [...r10, n7]);
  }
});
let tR = _tR;
let tT = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, tD = (e10) => {
  let t10 = P(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: A(tT, (e11) => F(t10, (t11, r10) => B(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, t$ = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tO = (e10) => V(e10) && $(e10, "token");
function tL(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let tI = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _tA = class _tA {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tA.propsCanBaseDp[e10] && z(t10) ? _tA.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var _a, _b;
      return this.tokens[t10] ? Object.assign((e11) => {
        var _a2;
        return (_a2 = this.tokens[t10]) == null ? void 0 : _a2.get(e11, `_${this.mode}`);
      }, { tokens: (_a = this.tokens[t10]) == null ? void 0 : _a.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var _a2;
        return (_a2 = this.mixins[t10]) == null ? void 0 : _a2.get(e11);
      }, { tokens: (_b = this.mixins[t10]) == null ? void 0 : _b.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var _a, _b;
      if (tO(t10)) {
        let r10 = (_a = this.propValues[e10]) == null ? void 0 : _a.use(t10.token, true);
        return r10 ? t10(r10) : void 0;
      }
      return ((_b = this.propValues[e10]) == null ? void 0 : _b.use(t10)) ?? this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new tC({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    for (let r10 in this.theme = e10, this.varPrefix = t10.varPrefix ?? "vk", this.mode = t10.mode ?? "light", R(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[r10];
      if (t11) {
        if (t11.type === tM.var) {
          let e11 = new tS(t11, { cssVar: (e12) => this.cssVar(r10, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let n7 of (this.tokens[r10] = e11, t11.on)) this.propValues[n7] = e11;
          for (let t12 of e11.tokens) for (let n7 of ["light", "dark"]) {
            let a2 = n7 === this.mode ? "_default" : `_${n7}`, i2 = e11.get(t12, a2, true);
            E(i2) || ("_default" === a2 ? R(this.cssVars, [this.cssVar(r10, t12)], i2) : R(this.cssVars, [a2, this.cssVar(r10, t12)], i2));
          }
          continue;
        }
        if (t11.type === tM.mixin) {
          let e11 = new tR(t11);
          for (let r11 of t11.on) this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tA(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${M(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    let r10 = t10 ?? {};
    return r10.__emotion_styles = r10.__emotion_styles ?? function(e11, t11, r11) {
      if (1 === e11.length && "object" == typeof e11[0] && null !== e11[0] && void 0 !== e11[0].styles) return e11[0];
      var n7, a2 = true, i2 = "";
      X = void 0;
      var o2 = e11[0];
      null == o2 || void 0 === o2.raw ? (a2 = false, i2 += td(r11, t11, o2)) : i2 += o2[0];
      for (var s2 = 1; s2 < e11.length; s2++) i2 += td(r11, t11, e11[s2]), a2 && (i2 += o2[s2]);
      tm.lastIndex = 0;
      for (var l2 = ""; null !== (n7 = tm.exec(i2)); ) l2 += "-" + n7[1];
      return { name: function(e12) {
        for (var t12, r12 = 0, n10 = 0, a3 = e12.length; a3 >= 4; ++n10, a3 -= 4) t12 = (65535 & (t12 = 255 & e12.charCodeAt(n10) | (255 & e12.charCodeAt(++n10)) << 8 | (255 & e12.charCodeAt(++n10)) << 16 | (255 & e12.charCodeAt(++n10)) << 24)) * 1540483477 + ((t12 >>> 16) * 59797 << 16), t12 ^= t12 >>> 24, r12 = (65535 & t12) * 1540483477 + ((t12 >>> 16) * 59797 << 16) ^ (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        switch (a3) {
          case 3:
            r12 ^= (255 & e12.charCodeAt(n10 + 2)) << 16;
          case 2:
            r12 ^= (255 & e12.charCodeAt(n10 + 1)) << 8;
          case 1:
            r12 ^= 255 & e12.charCodeAt(n10), r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        }
        return r12 ^= r12 >>> 13, (((r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16)) ^ r12 >>> 15) >>> 0).toString(36);
      }(i2) + l2, styles: i2, next: X };
    }(this.unstable_sx(t10), e10 == null ? void 0 : e10.registered, {}), r10.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n7 = (e11, t11) => L(t11) ? { $type: e11, $value: A(t11, (t12) => n7(e11, t12).$value) } : D(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var _a;
      let t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--"), r11 = ((_a = t12[0]) == null ? void 0 : _a.split("__").map((e13, t13) => 0 === t13 ? H(e13) : e13).join(".")) ?? "";
      return r11.startsWith("sys.") ? `{${r11}}` : `{seed.${r11}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let i2 = this.tokens[a2], o2 = (o3) => {
        for (let s2 of i2.tokens) if (!s2.includes("/")) if (s2.startsWith("sys.")) {
          let e11 = i2.get(s2, "_default"), l2 = i2.get(s2, "_dark");
          t_(t10, [a2, ...s2.split(".")], n7(o3, e11)), e11 !== l2 && t_(r10, [a2, ...s2.split(".")], n7(o3, l2));
        } else t_(e10, [a2, ...s2.split(".")], n7(o3, i2.get(s2, "_default")));
      };
      switch (a2) {
        case "color":
          o2("color");
          break;
        case "rounded":
          o2("borderRadius");
          break;
        case "shadow":
          o2("boxShadow");
          break;
        case "font":
          o2("fontFamily");
          break;
        case "fontWeight":
          o2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11) continue;
      let a2 = (a3) => {
        for (let i2 of r11.tokens) {
          let o2 = r11.get(i2);
          if (!o2) continue;
          let s2 = this.unstable_sx(o2)[0];
          t_(t10, [e11, ...i2.split(".")], n7(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: tD(t10), dark: tD(r10) };
  }
};
__publicField(_tA, "propsCanPercent", tI([...tP.boxSize({}).on]));
__publicField(_tA, "propsCanBaseDp", tI([...tP.boxSize({}).on, ...tP.space({}).on, ...tP.fontSize({}).on, ...tP.letterSpacing({}).on, ...tP.lineHeight({}).on, ...tP.rounded({}).on]));
let tA = _tA;
let tF = { shadow: tP.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tP.customMixin("elevation", { 0: tP.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tP.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tP.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tP.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tP.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tB = (e10, t10, r10, n7) => Object.assign(function(e11, t11, r11, n10) {
  if (e11 === t11 && r11 === n10) return eN;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12) a2[t12] = ta(0.1 * t12, e11, r11);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : ta(function(t12) {
    let n11 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t12; ++i3) n11 += 0.1;
    let o2 = n11 + (t12 - a2[--i3]) / (a2[i3 + 1] - a2[i3]) * 0.1, s2 = ti(o2, e11, r11);
    if (s2 >= 1e-3) {
      var l2 = o2;
      for (let n12 = 0; n12 < 8; ++n12) {
        let n13 = ti(l2, e11, r11);
        if (0 === n13) break;
        let a3 = ta(l2, e11, r11) - t12;
        l2 -= a3 / n13;
      }
      return l2;
    }
    return 0 === s2 ? o2 : function(e12, t13, r12, n12, a3) {
      let i4, o3, s3 = 0;
      do
        (i4 = ta(o3 = t13 + (r12 - t13) / 2, n12, a3) - e12) > 0 ? r12 = o3 : t13 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t12, n11, n11 + 0.1, e11, r11);
  }(i2), t11, n10);
}(e10, t10, r10, n7), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n7})` }), tV = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tB(0, 0, 1, 1), standard: Object.assign(tB(0.2, 0, 0, 1), { accelerate: tB(0.3, 0, 1, 1), decelerate: tB(0, 0, 0, 1) }), emphasized: Object.assign(tB(0.2, 0, 0, 1), { accelerate: tB(0.3, 0, 0.8, 0.15), decelerate: tB(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tB(0.4, 0, 0.2, 1), { decelerate: tB(0, 0, 0.2, 1), accelerate: tB(0.4, 0, 1, 1) }) } }, tE = (e10, a2) => {
  let i2 = a2 ?? { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return t({ onComplete: C(), $default: C() }, (t10, a3) => {
    let o2, { slots: s2, emit: l2 } = a3, c2 = (t11, r10) => {
      o2 = te({ ...e10, autoplay: true, onComplete: () => {
        r10(), l2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t11.style, e11);
      } });
    }, u2 = (e11, t11) => {
      o2 = te({ ...i2, autoplay: true, onComplete: () => {
        t11(), l2("complete", "leave");
      }, onUpdate: (t12) => {
        Object.assign(e11.style, t12);
      } });
    }, f2 = () => {
      o2 == null ? void 0 : o2.stop();
    };
    return () => {
      var _a;
      return r(n, { css: false, onEnter: c2, onEnterCancelled: f2, onLeave: u2, onLeaveCancelled: f2, children: (_a = s2.default) == null ? void 0 : _a.call(s2) });
    };
  }, { name: "Transition" });
}, tz = { transitionDuration: tP.transitionDuration(tV.duration), transitionTimingFunction: tP.transitionTimingFunction({ linear: tV.easing.linear.toString(), standard: tV.easing.standard.toString(), "standard-accelerate": tV.easing.standard.accelerate.toString(), "standard-decelerate": tV.easing.standard.decelerate.toString(), emphasized: tV.easing.emphasized.toString(), "emphasized-decelerate": tV.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tV.easing.emphasized.accelerate.toString(), legacy: tV.easing.legacy.toString(), "legacy-decelerate": tV.easing.legacy.decelerate.toString(), "legacy-accelerate": tV.easing.legacy.accelerate.toString() }) };
function tH(e10) {
  return e10 < 0 ? -1 : +(0 !== e10);
}
function tj(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tW(e10, t10) {
  let r10 = e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2];
  return [r10, e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2]];
}
let tN = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tq = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tU = [95.047, 100, 108.883];
function tG(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tY(e10) {
  let t10 = tQ(e10[0]);
  return tG(t10, tQ(e10[1]), tQ(e10[2]));
}
function tX(e10) {
  return 116 * t0(function(e11) {
    let t10 = tZ(e11 >> 16 & 255);
    return tW([t10, tZ(e11 >> 8 & 255), tZ(255 & e11)], tN);
  }(e10)[1] / 100) - 16;
}
function tJ(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tK(e10) {
  return 116 * t0(e10 / 100) - 16;
}
function tZ(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tQ(e10) {
  var t10;
  let r10 = e10 / 100, n7 = 0;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function t0(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class t1 {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tU, n7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tJ(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, f2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, h2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n7 - 42) / 92)), d2 = [100 / s2 * (h2 = h2 > 1 ? 1 : h2 < 0 ? 0 : h2) + 1 - h2, 100 / l2 * h2 + 1 - h2, 100 / c2 * h2 + 1 - h2], m2 = 1 / (5 * n7 + 1), p2 = m2 * m2 * m2 * m2, g2 = 1 - p2, b2 = p2 * n7 + 0.1 * g2 * g2 * Math.cbrt(5 * n7), y2 = tJ(a2) / r10[1], v2 = 1.48 + Math.sqrt(y2), x2 = 0.725 / Math.pow(y2, 0.2), w2 = [Math.pow(b2 * d2[0] * s2 / 100, 0.42), Math.pow(b2 * d2[1] * l2 / 100, 0.42), Math.pow(b2 * d2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)];
    return new t1(y2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2, x2, x2, f2, u2, d2, b2, Math.pow(b2, 0.25), v2);
  }
  constructor(e10, t10, r10, n7, a2, i2, o2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n7, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t1.DEFAULT = t1.make();
class t2 {
  constructor(e10, t10, r10, n7, a2, i2, o2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n7, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n7 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n7 * n7), 0.63);
  }
  static fromInt(e10) {
    return t2.fromIntInViewingConditions(e10, t1.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = tZ((16711680 & e10) >> 16), n7 = tZ((65280 & e10) >> 8), a2 = tZ(255 & e10), i2 = 0.41233895 * r10 + 0.35762064 * n7 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n7 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n7 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), f2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), d2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), m2 = 400 * tH(l2) * f2 / (f2 + 27.13), p2 = 400 * tH(c2) * h2 / (h2 + 27.13), g2 = 400 * tH(u2) * d2 / (d2 + 27.13), b2 = (11 * m2 + -12 * p2 + g2) / 11, y2 = (m2 + p2 - 2 * g2) / 9, v2 = 180 * Math.atan2(y2, b2) / Math.PI, x2 = v2 < 0 ? v2 + 360 : v2 >= 360 ? v2 - 360 : v2, w2 = x2 * Math.PI / 180, k2 = 100 * Math.pow((40 * m2 + 20 * p2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, M2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x2 < 20.14 ? x2 + 360 : x2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(b2 * b2 + y2 * y2) / ((20 * m2 + 20 * p2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = M2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(M2 * t10.c / (t10.aw + 4)), R2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new t2(x2, P2, k2, C2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), R2 * Math.cos(w2), R2 * Math.sin(w2));
  }
  static fromJch(e10, t10, r10) {
    return t2.fromJchInViewingConditions(e10, t10, r10, t1.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n7) {
    let a2 = 4 / n7.c * Math.sqrt(e10 / 100) * (n7.aw + 4) * n7.fLRoot, i2 = t10 * n7.fLRoot, o2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n7.c / (n7.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2);
    return new t2(r10, t10, e10, a2, i2, o2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return t2.fromUcsInViewingConditions(e10, t10, r10, t1.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n7) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n7.fLRoot, i2 = 180 / Math.PI * Math.atan2(r10, t10);
    return i2 < 0 && (i2 += 360), t2.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, i2, n7);
  }
  toInt() {
    return this.viewed(t1.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n7 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n7 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, f2 = c2 * s2, h2 = (460 * o2 + 451 * u2 + 288 * f2) / 1403, d2 = (460 * o2 - 891 * u2 - 261 * f2) / 1403, m2 = (460 * o2 - 220 * u2 - 6300 * f2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), g2 = tH(h2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), y2 = tH(d2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(m2) / (400 - Math.abs(m2))), x2 = tH(m2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = y2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n10 = tq[0][0] * e11 + tq[0][1] * t11 + tq[0][2] * r11, a3 = tq[1][0] * e11 + tq[1][1] * t11 + tq[1][2] * r11, i3 = tq[2][0] * e11 + tq[2][1] * t11 + tq[2][2] * r11, o3 = tQ(n10);
      return tG(o3, tQ(a3), tQ(i3));
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n7) {
    let a2 = n7.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), i2 = n7.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), o2 = n7.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n7.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n7.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n7.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tH(a2) * s2 / (s2 + 27.13), f2 = 400 * tH(i2) * l2 / (l2 + 27.13), h2 = 400 * tH(o2) * c2 / (c2 + 27.13), d2 = (11 * u2 + -12 * f2 + h2) / 11, m2 = (u2 + f2 - 2 * h2) / 9, p2 = 180 * Math.atan2(m2, d2) / Math.PI, g2 = p2 < 0 ? p2 + 360 : p2 >= 360 ? p2 - 360 : p2, b2 = g2 * Math.PI / 180, y2 = 100 * Math.pow((40 * u2 + 20 * f2 + h2) / 20 * n7.nbb / n7.aw, n7.c * n7.z), v2 = 4 / n7.c * Math.sqrt(y2 / 100) * (n7.aw + 4) * n7.fLRoot, x2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n7.nc * n7.ncb * Math.sqrt(d2 * d2 + m2 * m2) / ((20 * u2 + 20 * f2 + 21 * h2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n7.n), 0.73), w2 = x2 * Math.sqrt(y2 / 100), k2 = w2 * n7.fLRoot, C2 = 50 * Math.sqrt(x2 * n7.c / (n7.aw + 4)), M2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new t2(g2, w2, y2, v2, k2, C2, (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), M2 * Math.cos(b2), M2 * Math.sin(b2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n7 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n7 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, f2 = c2 * s2, h2 = (460 * o2 + 451 * u2 + 288 * f2) / 1403, d2 = (460 * o2 - 891 * u2 - 261 * f2) / 1403, m2 = (460 * o2 - 220 * u2 - 6300 * f2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), g2 = tH(h2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), y2 = tH(d2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(m2) / (400 - Math.abs(m2))), x2 = tH(m2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = y2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2];
  }
}
class t4 {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100, r10 = 0;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tH(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tW(e10, t4.SCALED_DISCOUNT_FROM_LINRGB), r10 = t4.chromaticAdaptation(t10[0]), n7 = t4.chromaticAdaptation(t10[1]), a2 = t4.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n7 - 2 * a2) / 9, (11 * r10 + -12 * n7 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return t4.sanitizeRadians(t10 - e10) < t4.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n7) {
    let a2 = t4.intercept(e10[n7], t10, r10[n7]);
    return t4.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = t4.Y_FROM_LINRGB[0], n7 = t4.Y_FROM_LINRGB[1], a2 = t4.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = 100 * (t10 % 2 != 0);
    if (t10 < 4) {
      let t11 = (e10 - i2 * n7 - o2 * a2) / r10;
      return t4.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - o2 * r10 - i2 * a2) / n7;
      return t4.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - i2 * r10 - o2 * n7) / a2;
      return t4.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n7 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = t4.nthVertex(e10, l2);
      if (c2[0] < 0) continue;
      let u2 = t4.hueOf(c2);
      if (!o2) {
        r10 = c2, n7 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || t4.areInCyclicOrder(a2, u2, i2)) && (s2 = false, t4.areInCyclicOrder(a2, t10, u2) ? (n7 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n7];
  }
  static midpoint(e10, t10) {
    return [(e10[0] + t10[0]) / 2, (e10[1] + t10[1]) / 2, (e10[2] + t10[2]) / 2];
  }
  static criticalPlaneBelow(e10) {
    return Math.floor(e10 - 0.5);
  }
  static criticalPlaneAbove(e10) {
    return Math.ceil(e10 - 0.5);
  }
  static bisectToLimit(e10, t10) {
    let r10 = t4.bisectToSegment(e10, t10), n7 = r10[0], a2 = t4.hueOf(n7), i2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++) if (n7[e11] !== i2[e11]) {
      let r11 = -1, o2 = 255;
      n7[e11] < i2[e11] ? (r11 = t4.criticalPlaneBelow(t4.trueDelinearized(n7[e11])), o2 = t4.criticalPlaneAbove(t4.trueDelinearized(i2[e11]))) : (r11 = t4.criticalPlaneAbove(t4.trueDelinearized(n7[e11])), o2 = t4.criticalPlaneBelow(t4.trueDelinearized(i2[e11])));
      for (let s2 = 0; s2 < 8; s2++) if (1 >= Math.abs(o2 - r11)) break;
      else {
        let s3 = Math.floor((r11 + o2) / 2), l2 = t4.CRITICAL_PLANES[s3], c2 = t4.setCoordinate(n7, l2, i2, e11), u2 = t4.hueOf(c2);
        t4.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n7 = c2, a2 = u2, r11 = s3);
      }
    }
    return t4.midpoint(n7, i2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10), r10 = Math.max(0, 27.13 * t10 / (400 - t10));
    return tH(e10) * Math.pow(r10, 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n7 = 11 * Math.sqrt(r10), a2 = t1.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n7 / 100, u2 = Math.pow((0 === t10 || 0 === n7 ? 0 : t10 / Math.sqrt(c2)) * i2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, h2 = 23 * (f2 + 0.305) * u2 / (23 * o2 + 11 * u2 * l2 + 108 * u2 * s2), d2 = h2 * l2, m2 = h2 * s2, p2 = (460 * f2 + 451 * d2 + 288 * m2) / 1403, g2 = (460 * f2 - 891 * d2 - 261 * m2) / 1403, b2 = (460 * f2 - 220 * d2 - 6300 * m2) / 1403, y2 = t4.inverseChromaticAdaptation(p2), v2 = tW([y2, t4.inverseChromaticAdaptation(g2), t4.inverseChromaticAdaptation(b2)], t4.LINRGB_FROM_SCALED_DISCOUNT);
      if (v2[0] < 0 || v2[1] < 0 || v2[2] < 0) break;
      let x2 = t4.Y_FROM_LINRGB[0], w2 = t4.Y_FROM_LINRGB[1], k2 = t4.Y_FROM_LINRGB[2], C2 = x2 * v2[0] + w2 * v2[1] + k2 * v2[2];
      if (C2 <= 0) break;
      if (4 === e11 || 2e-3 > Math.abs(C2 - r10)) {
        if (v2[0] > 100.01 || v2[1] > 100.01 || v2[2] > 100.01) return 0;
        return tY(v2);
      }
      n7 -= (C2 - r10) * n7 / (2 * C2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999) {
      var n7;
      let e11 = tQ(tJ(r10));
      return tG(e11, e11, e11);
    }
    (n7 = e10 % 360) < 0 && (n7 += 360);
    let a2 = (e10 = n7) / 180 * Math.PI, i2 = tJ(r10), o2 = t4.findResultByJ(a2, t10, i2);
    return 0 !== o2 ? o2 : tY(t4.bisectToLimit(i2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return t2.fromInt(t4.solveToInt(e10, t10, r10));
  }
}
t4.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], t4.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], t4.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], t4.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class t5 {
  static from(e10, t10, r10) {
    return new t5(t4.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new t5(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(t4.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(t4.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(t4.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = t2.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tX(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = t2.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tX(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = t2.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = t2.fromXyzInViewingConditions(t10[0], t10[1], t10[2], t1.make());
    return t5.from(r10.hue, r10.chroma, tK(t10[1]));
  }
}
class t3 {
  static ratioOfTones(e10, t10) {
    return e10 = tj(0, 100, e10), t10 = tj(0, 100, t10), t3.ratioOfYs(tJ(e10), tJ(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tJ(e10), n7 = t10 * (r10 + 5) - 5, a2 = t3.ratioOfYs(n7, r10), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = tK(n7) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tJ(e10), n7 = (r10 + 5) / t10 - 5, a2 = t3.ratioOfYs(r10, n7), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = tK(n7) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = t3.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = t3.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class t8 {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n7 = 65 > Math.round(e10.tone);
    return t10 && r10 && n7;
  }
  static fixIfDisliked(e10) {
    return t8.isDisliked(e10) ? t5.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class t9 {
  static fromPalette(e10) {
    return new t9(e10.name ?? "", e10.palette, e10.tone, e10.isBackground ?? false, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n7, a2, i2, o2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n7, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2) throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2) throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2) throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10) return t10;
    let r10 = this.getTone(e10), n7 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n7), n7;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n7 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === o2 || "lighter" === o2 && !e10.isDark || "darker" === o2 && e10.isDark, u2 = c2 ? n7 : a2, f2 = c2 ? a2 : n7, h2 = this.name === u2.name, d2 = e10.isDark ? 1 : -1, m2 = u2.contrastCurve.get(e10.contrastLevel), p2 = f2.contrastCurve.get(e10.contrastLevel), g2 = u2.tone(e10), b2 = t3.ratioOfTones(l2, g2) >= m2 ? g2 : t9.foregroundTone(l2, m2), y2 = f2.tone(e10), v2 = t3.ratioOfTones(l2, y2) >= p2 ? y2 : t9.foregroundTone(l2, p2);
      return t10 && (b2 = t9.foregroundTone(l2, m2), v2 = t9.foregroundTone(l2, p2)), (v2 - b2) * d2 >= i2 || ((v2 = tj(0, 100, b2 + i2 * d2)) - b2) * d2 >= i2 || (b2 = tj(0, 100, v2 - i2 * d2)), 50 <= b2 && b2 < 60 ? v2 = d2 > 0 ? Math.max(v2, (b2 = 60) + i2 * d2) : Math.min(v2, (b2 = 49) + i2 * d2) : 50 <= v2 && v2 < 60 && (v2 = s2 ? d2 > 0 ? Math.max(v2, (b2 = 60) + i2 * d2) : Math.min(v2, (b2 = 49) + i2 * d2) : d2 > 0 ? 60 : 49), h2 ? b2 : v2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background) return r10;
      let n7 = this.background(e10).getTone(e10), a2 = this.contrastCurve.get(e10.contrastLevel);
      if (t3.ratioOfTones(n7, r10) >= a2 || (r10 = t9.foregroundTone(n7, a2)), t10 && (r10 = t9.foregroundTone(n7, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = t3.ratioOfTones(49, n7) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n10] = [this.background, this.secondBackground], [i2, o2] = [t11(e10).getTone(e10), n10(e10).getTone(e10)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (t3.ratioOfTones(s2, r10) >= a2 && t3.ratioOfTones(l2, r10) >= a2) return r10;
        let c2 = t3.lighter(s2, a2), u2 = t3.darker(l2, a2), f2 = [];
        return (-1 !== c2 && f2.push(c2), -1 !== u2 && f2.push(u2), t9.tonePrefersLightForeground(i2) || t9.tonePrefersLightForeground(o2)) ? c2 < 0 ? 100 : c2 : 1 === f2.length ? f2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = t3.lighterUnsafe(e10, t10), n7 = t3.darkerUnsafe(e10, t10), a2 = t3.ratioOfTones(r10, e10), i2 = t3.ratioOfTones(n7, e10);
    if (!t9.tonePrefersLightForeground(e10)) return i2 >= t10 || i2 >= a2 ? n7 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e11 ? r10 : n7;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return t9.tonePrefersLightForeground(e10) && !t9.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
class t6 {
  static fromInt(e10) {
    let t10 = t5.fromInt(e10);
    return t6.fromHct(t10);
  }
  static fromHct(e10) {
    return new t6(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    let r10 = new t7(e10, t10).create();
    return new t6(e10, t10, r10);
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = t5.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return t5.fromInt(this.tone(e10));
  }
}
class t7 {
  constructor(e10, t10) {
    this.hue = e10, this.requestedChroma = t10, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
  }
  create() {
    let e10 = 0, t10 = 100;
    for (; e10 < t10; ) {
      let r10 = Math.floor((e10 + t10) / 2), n7 = this.maxChroma(r10) < this.maxChroma(r10 + 1);
      if (this.maxChroma(r10) >= this.requestedChroma - 0.01) if (Math.abs(e10 - 50) < Math.abs(t10 - 50)) t10 = r10;
      else {
        if (e10 === r10) return t5.from(this.hue, this.requestedChroma, e10);
        e10 = r10;
      }
      else n7 ? e10 = r10 + 1 : t10 = r10;
    }
    return t5.from(this.hue, this.requestedChroma, e10);
  }
  maxChroma(e10) {
    if (this.chromaCache.has(e10)) return this.chromaCache.get(e10);
    let t10 = t5.from(this.hue, this.maxChromaValue, e10).chroma;
    return this.chromaCache.set(e10, t10), t10;
  }
}
class re {
  constructor(e10, t10, r10, n7) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n7;
  }
  get(e10) {
    var t10, r10, n7, a2, i2, o2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n7 = (e10 - -1) / 1)) * t10 + n7 * r10) : e10 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e10 - 0) / 0.5)) * a2 + o2 * i2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
}
class rt {
  constructor(e10, t10, r10, n7, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n7, this.stayTogether = a2;
  }
}
function rr(e10) {
  return e10.variant === J.FIDELITY || e10.variant === J.CONTENT;
}
function rn(e10) {
  return e10.variant === J.MONOCHROME;
}
(Y = J || (J = {}))[Y.MONOCHROME = 0] = "MONOCHROME", Y[Y.NEUTRAL = 1] = "NEUTRAL", Y[Y.TONAL_SPOT = 2] = "TONAL_SPOT", Y[Y.VIBRANT = 3] = "VIBRANT", Y[Y.EXPRESSIVE = 4] = "EXPRESSIVE", Y[Y.FIDELITY = 5] = "FIDELITY", Y[Y.CONTENT = 6] = "CONTENT", Y[Y.RAINBOW = 7] = "RAINBOW", Y[Y.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class ra {
  static highestSurface(e10) {
    return e10.isDark ? ra.surfaceBright : ra.surfaceDim;
  }
}
ra.contentAccentToneDelta = 15, ra.primaryPaletteKeyColor = t9.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), ra.secondaryPaletteKeyColor = t9.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), ra.tertiaryPaletteKeyColor = t9.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), ra.neutralPaletteKeyColor = t9.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), ra.neutralVariantPaletteKeyColor = t9.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), ra.background = t9.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ra.onBackground = t9.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ra.background, contrastCurve: new re(3, 3, 4.5, 7) }), ra.surface = t9.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ra.surfaceDim = t9.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : new re(87, 87, 80, 75).get(e10.contrastLevel), isBackground: true }), ra.surfaceBright = t9.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(24, 24, 29, 34).get(e10.contrastLevel) : 98, isBackground: true }), ra.surfaceContainerLowest = t9.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(4, 4, 2, 0).get(e10.contrastLevel) : 100, isBackground: true }), ra.surfaceContainerLow = t9.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(10, 10, 11, 12).get(e10.contrastLevel) : new re(96, 96, 96, 95).get(e10.contrastLevel), isBackground: true }), ra.surfaceContainer = t9.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(12, 12, 16, 20).get(e10.contrastLevel) : new re(94, 94, 92, 90).get(e10.contrastLevel), isBackground: true }), ra.surfaceContainerHigh = t9.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(17, 17, 21, 25).get(e10.contrastLevel) : new re(92, 92, 88, 85).get(e10.contrastLevel), isBackground: true }), ra.surfaceContainerHighest = t9.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? new re(22, 22, 26, 30).get(e10.contrastLevel) : new re(90, 90, 84, 80).get(e10.contrastLevel), isBackground: true }), ra.onSurface = t9.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(4.5, 7, 11, 21) }), ra.surfaceVariant = t9.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), ra.onSurfaceVariant = t9.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(3, 4.5, 7, 11) }), ra.inverseSurface = t9.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), ra.inverseOnSurface = t9.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => ra.inverseSurface, contrastCurve: new re(4.5, 7, 11, 21) }), ra.outline = t9.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1.5, 3, 4.5, 7) }), ra.outlineVariant = t9.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5) }), ra.shadow = t9.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ra.scrim = t9.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ra.surfaceTint = t9.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), ra.primary = t9.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? 100 * !!e10.isDark : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(3, 4.5, 7, 7), toneDeltaPair: (e10) => new rt(ra.primaryContainer, ra.primary, 10, "nearer", false) }), ra.onPrimary = t9.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ra.primary, contrastCurve: new re(4.5, 7, 11, 21) }), ra.primaryContainer = t9.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rr(e10) ? e10.sourceColorHct.tone : rn(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.primaryContainer, ra.primary, 10, "nearer", false) }), ra.onPrimaryContainer = t9.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rr(e10) ? t9.foregroundTone(ra.primaryContainer.tone(e10), 4.5) : rn(e10) ? 100 * !e10.isDark : e10.isDark ? 90 : 30, background: (e10) => ra.primaryContainer, contrastCurve: new re(3, 4.5, 7, 11) }), ra.inversePrimary = t9.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => ra.inverseSurface, contrastCurve: new re(3, 4.5, 7, 7) }), ra.secondary = t9.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(3, 4.5, 7, 7), toneDeltaPair: (e10) => new rt(ra.secondaryContainer, ra.secondary, 10, "nearer", false) }), ra.onSecondary = t9.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => ra.secondary, contrastCurve: new re(4.5, 7, 11, 21) }), ra.secondaryContainer = t9.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  return rn(e10) ? e10.isDark ? 30 : 85 : rr(e10) ? function(e11, t11, r10, n7) {
    let a2 = r10, i2 = t5.from(e11, t11, r10);
    if (i2.chroma < t11) {
      let r11 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n7 ? -1 : 1;
        let o2 = t5.from(e11, t11, a2);
        if (r11 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11)) break;
        Math.abs(o2.chroma - t11) < Math.abs(i2.chroma - t11) && (i2 = o2), r11 = Math.max(r11, o2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark) : t10;
}, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.secondaryContainer, ra.secondary, 10, "nearer", false) }), ra.onSecondaryContainer = t9.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? e10.isDark ? 90 : 10 : rr(e10) ? t9.foregroundTone(ra.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 30, background: (e10) => ra.secondaryContainer, contrastCurve: new re(3, 4.5, 7, 11) }), ra.tertiary = t9.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(3, 4.5, 7, 7), toneDeltaPair: (e10) => new rt(ra.tertiaryContainer, ra.tertiary, 10, "nearer", false) }), ra.onTertiary = t9.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ra.tertiary, contrastCurve: new re(4.5, 7, 11, 21) }), ra.tertiaryContainer = t9.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (rn(e10)) return e10.isDark ? 60 : 49;
  if (!rr(e10)) return e10.isDark ? 30 : 90;
  let t10 = e10.tertiaryPalette.getHct(e10.sourceColorHct.tone);
  return t8.fixIfDisliked(t10).tone;
}, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.tertiaryContainer, ra.tertiary, 10, "nearer", false) }), ra.onTertiaryContainer = t9.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? 100 * !e10.isDark : rr(e10) ? t9.foregroundTone(ra.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 30, background: (e10) => ra.tertiaryContainer, contrastCurve: new re(3, 4.5, 7, 11) }), ra.error = t9.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(3, 4.5, 7, 7), toneDeltaPair: (e10) => new rt(ra.errorContainer, ra.error, 10, "nearer", false) }), ra.onError = t9.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => ra.error, contrastCurve: new re(4.5, 7, 11, 21) }), ra.errorContainer = t9.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.errorContainer, ra.error, 10, "nearer", false) }), ra.onErrorContainer = t9.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => rn(e10) ? e10.isDark ? 90 : 10 : e10.isDark ? 90 : 30, background: (e10) => ra.errorContainer, contrastCurve: new re(3, 4.5, 7, 11) }), ra.primaryFixed = t9.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? 40 : 90, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.primaryFixed, ra.primaryFixedDim, 10, "lighter", true) }), ra.primaryFixedDim = t9.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? 30 : 80, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.primaryFixed, ra.primaryFixedDim, 10, "lighter", true) }), ra.onPrimaryFixed = t9.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? 100 : 10, background: (e10) => ra.primaryFixedDim, secondBackground: (e10) => ra.primaryFixed, contrastCurve: new re(4.5, 7, 11, 21) }), ra.onPrimaryFixedVariant = t9.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? 90 : 30, background: (e10) => ra.primaryFixedDim, secondBackground: (e10) => ra.primaryFixed, contrastCurve: new re(3, 4.5, 7, 11) }), ra.secondaryFixed = t9.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? 80 : 90, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.secondaryFixed, ra.secondaryFixedDim, 10, "lighter", true) }), ra.secondaryFixedDim = t9.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? 70 : 80, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.secondaryFixed, ra.secondaryFixedDim, 10, "lighter", true) }), ra.onSecondaryFixed = t9.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => ra.secondaryFixedDim, secondBackground: (e10) => ra.secondaryFixed, contrastCurve: new re(4.5, 7, 11, 21) }), ra.onSecondaryFixedVariant = t9.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? 25 : 30, background: (e10) => ra.secondaryFixedDim, secondBackground: (e10) => ra.secondaryFixed, contrastCurve: new re(3, 4.5, 7, 11) }), ra.tertiaryFixed = t9.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? 40 : 90, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.tertiaryFixed, ra.tertiaryFixedDim, 10, "lighter", true) }), ra.tertiaryFixedDim = t9.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? 30 : 80, isBackground: true, background: (e10) => ra.highestSurface(e10), contrastCurve: new re(1, 1, 3, 4.5), toneDeltaPair: (e10) => new rt(ra.tertiaryFixed, ra.tertiaryFixedDim, 10, "lighter", true) }), ra.onTertiaryFixed = t9.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? 100 : 10, background: (e10) => ra.tertiaryFixedDim, secondBackground: (e10) => ra.tertiaryFixed, contrastCurve: new re(4.5, 7, 11, 21) }), ra.onTertiaryFixedVariant = t9.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rn(e10) ? 90 : 30, background: (e10) => ra.tertiaryFixedDim, secondBackground: (e10) => ra.tertiaryFixed, contrastCurve: new re(3, 4.5, 7, 11) });
class ri {
  static of(e10) {
    return new ri(e10, false);
  }
  static contentOf(e10) {
    return new ri(e10, true);
  }
  static fromColors(e10) {
    return ri.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return ri.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new ri(t10.primary, e10);
    return t10.secondary && (r10.a2 = new ri(t10.secondary, e10).a1), t10.tertiary && (r10.a3 = new ri(t10.tertiary, e10).a1), t10.error && (r10.error = new ri(t10.error, e10).a1), t10.neutral && (r10.n1 = new ri(t10.neutral, e10).n1), t10.neutralVariant && (r10.n2 = new ri(t10.neutralVariant, e10).n2), r10;
  }
  constructor(e10, t10) {
    let r10 = t5.fromInt(e10), n7 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = t6.fromHueAndChroma(n7, a2), this.a2 = t6.fromHueAndChroma(n7, a2 / 3), this.a3 = t6.fromHueAndChroma(n7 + 60, a2 / 2), this.n1 = t6.fromHueAndChroma(n7, Math.min(a2 / 12, 4)), this.n2 = t6.fromHueAndChroma(n7, Math.min(a2 / 6, 8))) : (this.a1 = t6.fromHueAndChroma(n7, Math.max(48, a2)), this.a2 = t6.fromHueAndChroma(n7, 16), this.a3 = t6.fromHueAndChroma(n7 + 60, 24), this.n1 = t6.fromHueAndChroma(n7, 4), this.n2 = t6.fromHueAndChroma(n7, 8)), this.error = t6.fromHueAndChroma(25, 84);
  }
}
function ro(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n7 = 8 === e10.length;
  if (!t10 && !r10 && !n7) throw Error("unexpected hex " + e10);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = rs(e10.slice(0, 1).repeat(2)), i2 = rs(e10.slice(1, 2).repeat(2)), o2 = rs(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = rs(e10.slice(0, 2)), i2 = rs(e10.slice(2, 4)), o2 = rs(e10.slice(4, 6))) : n7 && (a2 = rs(e10.slice(2, 4)), i2 = rs(e10.slice(4, 6)), o2 = rs(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function rs(e10) {
  return parseInt(e10, 16);
}
let rl = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rc = (e10) => {
  var t10;
  let r10 = { r: (t10 = e10) >> 16 & 255, g: t10 >> 8 & 255, b: 255 & t10, a: t10 >> 24 & 255 };
  return [r10.r, r10.g, r10.b];
}, ru = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rf = class _rf {
  constructor(e10) {
    this.seeds = e10;
  }
  static createRoleColorRuleBuilder(e10) {
    let t10 = {}, r10 = new Proxy({}, { get: (n7, a2) => "build" == a2 ? () => t10 : (n10, a3) => (t10[`${n10}${e10 ? `:${e10}` : ""}`] = a3, r10) });
    return r10;
  }
  static createRoleColorSourcePicker() {
    return new Proxy({}, { get: (e10, t10) => (e11) => [t10, e11] });
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = _rf.createRoleColorSourcePicker(), r10 = _rf.createRoleColorRuleBuilder().rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(87)).rule("outline-variant", t10.neutralVariant(80)).rule("surface", t10.neutral(99)).rule("on-surface", t10.neutral(10)).rule("surface-variant", t10.neutralVariant(90)).rule("on-surface-variant", t10.neutralVariant(30)).rule("surface-dim", t10.neutral(87)).rule("surface-bright", t10.neutral(98)).rule("surface-container-lowest", t10.neutral(100)).rule("surface-container-low", t10.neutral(96)).rule("surface-container", t10.neutral(94)).rule("surface-container-high", t10.neutral(92)).rule("surface-container-highest", t10.neutral(90)).rule("inverse-surface", t10.neutral(20)).rule("inverse-on-surface", t10.neutral(95)).rule("inverse-primary", t10.primary(80)), n7 = _rf.createRoleColorRuleBuilder("dark").rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(60)).rule("outline-variant", t10.neutralVariant(30)).rule("surface", t10.neutral(10)).rule("on-surface", t10.neutral(90)).rule("surface-variant", t10.neutralVariant(30)).rule("on-surface-variant", t10.neutralVariant(80)).rule("surface-dim", t10.neutral(6)).rule("surface-bright", t10.neutral(24)).rule("surface-container-lowest", t10.neutral(4)).rule("surface-container-low", t10.neutral(10)).rule("surface-container", t10.neutral(12)).rule("surface-container-high", t10.neutral(17)).rule("surface-container-highest", t10.neutral(22)).rule("inverse-surface", t10.neutral(90)).rule("inverse-on-surface", t10.neutral(20)).rule("inverse-primary", t10.primary(40));
    for (let e11 in this.seeds) e11.startsWith("neutral") || (r10 = r10.rule(e11, t10[e11](40)).rule(`on-${e11}`, t10[e11](100)).rule(`${e11}-container`, t10[e11](90)).rule(`on-${e11}-container`, t10[e11](10)), n7 = n7.rule(e11, t10[e11](80)).rule(`on-${e11}`, t10[e11](20)).rule(`${e11}-container`, t10[e11](30)).rule(`on-${e11}-container`, t10[e11](90)));
    return { ...r10.build(), ...n7.build(), ...e10 };
  }
  getThemeRoleColors(e10) {
    var _a, _b;
    let t10 = {}, r10 = {};
    for (let [n7, [a2, i2]] of Object.entries(e10)) if (this.seeds[a2]) {
      if (n7.endsWith(":dark")) {
        r10[n7.split(":")[0]] = rl[i2] ? `${String(a2)}.${i2}` : (_a = this.seeds[a2]) == null ? void 0 : _a.tone(i2);
        continue;
      }
      t10[n7] = rl[i2] ? `${String(a2)}.${i2}` : (_b = this.seeds[a2]) == null ? void 0 : _b.tone(i2);
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = this.normalizeRoleRules(e10), [r10, n7] = this.getThemeRoleColors(t10), a2 = {}, i2 = {};
    for (let e11 in r10) if (a2[`${e11}`] = { _default: z(r10[e11]) ? rc(r10[e11]) : r10[e11], _dark: z(n7[e11]) ? rc(n7[e11]) : n7[e11] }, ru(e11) && (i2[`${e11}`] = tP.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), i2[`${e11}-container`] = tP.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        i2[`${e11}`] = tP.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      i2[`${e11}`] = tP.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), i2[`on-${e11}`] = tP.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let o2 = (e11) => Object.keys(rl).reduce((t11, r11) => Object.assign(t11, { [r11]: rc(e11.tone(parseInt(r11))) }), {});
    return { color: tP.color({ ...A(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: a2 }), containerStyle: tP.customMixin("containerStyle", { sys: i2 }) };
  }
};
__publicField(_rf, "toHEX", (e10) => `#${rc(e10).map((e11) => j(e11.toString(16), 2, "0")).join("")}`);
__publicField(_rf, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n7, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e10, l2 = ri.contentFromColors({ primary: ro(t10), secondary: r10 ? ro(r10) : void 0, tertiary: n7 ? ro(n7) : void 0, error: o2 ? ro(o2) : void 0 });
  return a2 && (l2.n1 = t6.fromHueAndChroma(ro(a2), 4)), i2 && (l2.n2 = t6.fromHueAndChroma(ro(i2), 8)), new _rf({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...A(s2, (e11) => t6.fromInt(ro(e11))) });
});
let rf = _rf;
let rh = tP.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rd = { font: tP.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tP.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tP.customMixin("textStyle", { sys: { "display-large": tP.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tP.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tP.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tP.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tP.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tP.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tP.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tP.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tP.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tP.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tP.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tP.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tP.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tP.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tP.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rm = rf.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rp = { ...rd, ...tz, ...tF, rounded: rh, ...rm.toDesignTokens({}) }, rg = tA.create(rp, { varPrefix: "vk" }), rb = a(() => rg, { name: "Theme" });
var ry = function() {
  function e10(e11) {
    var t11 = this;
    this._insertTag = function(e12) {
      var r10;
      r10 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e12, r10), t11.tags.push(e12);
    }, this.isSpeedy = void 0 === e11.speedy || e11.speedy, this.tags = [], this.ctr = 0, this.nonce = e11.nonce, this.key = e11.key, this.container = e11.container, this.prepend = e11.prepend, this.insertionPoint = e11.insertionPoint, this.before = null;
  }
  var t10 = e10.prototype;
  return t10.hydrate = function(e11) {
    e11.forEach(this._insertTag);
  }, t10.insert = function(e11) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    var t11, r10 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n7 = function(e12) {
        if (e12.sheet) return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++) if (document.styleSheets[t12].ownerNode === e12) return document.styleSheets[t12];
      }(r10);
      try {
        n7.insertRule(e11, n7.cssRules.length);
      } catch (e12) {
      }
    } else r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      var t11;
      return null == (t11 = e11.parentNode) ? void 0 : t11.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), rv = "-ms-", rx = "-moz-", rw = "-webkit-", rk = "comm", rC = "rule", rM = "decl", rP = "@keyframes", r_ = Math.abs, rS = String.fromCharCode, rR = Object.assign;
function rT(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rD(e10, t10) {
  return e10.indexOf(t10);
}
function r$(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rO(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rL(e10) {
  return e10.length;
}
function rI(e10, t10) {
  return t10.push(e10), e10;
}
var rA = 1, rF = 1, rB = 0, rV = 0, rE = 0, rz = "";
function rH(e10, t10, r10, n7, a2, i2, o2) {
  return { value: e10, root: t10, parent: r10, type: n7, props: a2, children: i2, line: rA, column: rF, length: o2, return: "" };
}
function rj(e10, t10) {
  return rR(rH("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rW() {
  return rE = rV < rB ? r$(rz, rV++) : 0, rF++, 10 === rE && (rF = 1, rA++), rE;
}
function rN() {
  return r$(rz, rV);
}
function rq(e10) {
  switch (e10) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rU(e10) {
  return rA = rF = 1, rB = rL(rz = e10), rV = 0, [];
}
function rG(e10) {
  var t10, r10;
  return (t10 = rV - 1, r10 = function e11(t11) {
    for (; rW(); ) switch (rE) {
      case t11:
        return rV;
      case 34:
      case 39:
        34 !== t11 && 39 !== t11 && e11(rE);
        break;
      case 40:
        41 === t11 && e11(t11);
        break;
      case 92:
        rW();
    }
    return rV;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rO(rz, t10, r10)).trim();
}
function rY(e10, t10, r10, n7, a2, i2, o2, s2, l2, c2, u2) {
  for (var f2 = a2 - 1, h2 = 0 === a2 ? i2 : [""], d2 = h2.length, m2 = 0, p2 = 0, g2 = 0; m2 < n7; ++m2) for (var b2 = 0, y2 = rO(e10, f2 + 1, f2 = r_(p2 = o2[m2])), v2 = e10; b2 < d2; ++b2) (v2 = (p2 > 0 ? h2[b2] + " " + y2 : rT(y2, /&\f/g, h2[b2])).trim()) && (l2[g2++] = v2);
  return rH(e10, t10, r10, 0 === a2 ? rC : s2, l2, c2, u2);
}
function rX(e10, t10, r10, n7) {
  return rH(e10, t10, r10, rM, rO(e10, 0, n7), rO(e10, n7 + 1, -1), n7);
}
function rJ(e10, t10) {
  for (var r10 = "", n7 = e10.length, a2 = 0; a2 < n7; a2++) r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function rK(e10, t10, r10, n7) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length) break;
    case "@import":
    case rM:
      return e10.return = e10.return || e10.value;
    case rk:
      return "";
    case rP:
      return e10.return = e10.value + "{" + rJ(e10.children, n7) + "}";
    case rC:
      e10.value = e10.props.join(",");
  }
  return rL(r10 = rJ(e10.children, n7)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rZ = function(e10, t10, r10) {
  for (var n7 = 0, a2 = 0; n7 = a2, a2 = rN(), 38 === n7 && 12 === a2 && (t10[r10] = 1), !rq(a2); ) rW();
  return rO(rz, e10, rV);
}, rQ = function(e10, t10) {
  var r10 = -1, n7 = 44;
  do
    switch (rq(n7)) {
      case 0:
        38 === n7 && 12 === rN() && (t10[r10] = 1), e10[r10] += rZ(rV - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rG(n7);
        break;
      case 4:
        if (44 === n7) {
          e10[++r10] = 58 === rN() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rS(n7);
    }
  while (n7 = rW());
  return e10;
}, r0 = function(e10, t10) {
  var r10;
  return r10 = rQ(rU(e10), t10), rz = "", r10;
}, r1 = /* @__PURE__ */ new WeakMap(), r2 = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n7 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; ) if (!(r10 = r10.parent)) return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || r1.get(r10)) && !n7) {
      r1.set(e10, true);
      for (var a2 = [], i2 = r0(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++) for (var c2 = 0; c2 < o2.length; c2++, l2++) e10.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, r4 = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, r5 = [function(e10, t10, r10, n7) {
  if (e10.length > -1 && !e10.return) switch (e10.type) {
    case rM:
      e10.return = function e11(t11, r11) {
        switch (45 ^ r$(t11, 0) ? (((r11 << 2 ^ r$(t11, 0)) << 2 ^ r$(t11, 1)) << 2 ^ r$(t11, 2)) << 2 ^ r$(t11, 3) : 0) {
          case 5103:
            return rw + "print-" + t11 + t11;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return rw + t11 + t11;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return rw + t11 + rx + t11 + rv + t11 + t11;
          case 6828:
          case 4268:
            return rw + t11 + rv + t11 + t11;
          case 6165:
            return rw + t11 + rv + "flex-" + t11 + t11;
          case 5187:
            return rw + t11 + rT(t11, /(\w+).+(:[^]+)/, rw + "box-$1$2" + rv + "flex-$1$2") + t11;
          case 5443:
            return rw + t11 + rv + "flex-item-" + rT(t11, /flex-|-self/, "") + t11;
          case 4675:
            return rw + t11 + rv + "flex-line-pack" + rT(t11, /align-content|flex-|-self/, "") + t11;
          case 5548:
            return rw + t11 + rv + rT(t11, "shrink", "negative") + t11;
          case 5292:
            return rw + t11 + rv + rT(t11, "basis", "preferred-size") + t11;
          case 6060:
            return rw + "box-" + rT(t11, "-grow", "") + rw + t11 + rv + rT(t11, "grow", "positive") + t11;
          case 4554:
            return rw + rT(t11, /([^-])(transform)/g, "$1" + rw + "$2") + t11;
          case 6187:
            return rT(rT(rT(t11, /(zoom-|grab)/, rw + "$1"), /(image-set)/, rw + "$1"), t11, "") + t11;
          case 5495:
          case 3959:
            return rT(t11, /(image-set\([^]*)/, rw + "$1$`$1");
          case 4968:
            return rT(rT(t11, /(.+:)(flex-)?(.*)/, rw + "box-pack:$3" + rv + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rw + t11 + t11;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return rT(t11, /(.+)-inline(.+)/, rw + "$1$2") + t11;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (rL(t11) - 1 - r11 > 6) switch (r$(t11, r11 + 1)) {
              case 109:
                if (45 !== r$(t11, r11 + 4)) break;
              case 102:
                return rT(t11, /(.+:)(.+)-([^]+)/, "$1" + rw + "$2-$3$1" + rx + (108 == r$(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
              case 115:
                return ~rD(t11, "stretch") ? e11(rT(t11, "stretch", "fill-available"), r11) + t11 : t11;
            }
            break;
          case 4949:
            if (115 !== r$(t11, r11 + 1)) break;
          case 6444:
            switch (r$(t11, rL(t11) - 3 - (~rD(t11, "!important") && 10))) {
              case 107:
                return rT(t11, ":", ":" + rw) + t11;
              case 101:
                return rT(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rw + (45 === r$(t11, 14) ? "inline-" : "") + "box$3$1" + rw + "$2$3$1" + rv + "$2box$3") + t11;
            }
            break;
          case 5936:
            switch (r$(t11, r11 + 11)) {
              case 114:
                return rw + t11 + rv + rT(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
              case 108:
                return rw + t11 + rv + rT(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
              case 45:
                return rw + t11 + rv + rT(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
            }
            return rw + t11 + rv + t11 + t11;
        }
        return t11;
      }(e10.value, e10.length);
      break;
    case rP:
      return rJ([rj(e10, { value: rT(e10.value, "@", "@" + rw) })], n7);
    case rC:
      if (e10.length) {
        var a2, i2;
        return a2 = e10.props, i2 = function(t11) {
          var r11;
          switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
            case ":read-only":
            case ":read-write":
              return rJ([rj(e10, { props: [rT(t11, /:(read-\w+)/, ":" + rx + "$1")] })], n7);
            case "::placeholder":
              return rJ([rj(e10, { props: [rT(t11, /:(plac\w+)/, ":" + rw + "input-$1")] }), rj(e10, { props: [rT(t11, /:(plac\w+)/, ":" + rx + "$1")] }), rj(e10, { props: [rT(t11, /:(plac\w+)/, rv + "input-$1")] })], n7);
          }
          return "";
        }, a2.map(i2).join("");
      }
  }
}], r3 = function(e10) {
  var t10, r10, n7, a2, i2, o2 = e10.key;
  if ("css" === o2) {
    var s2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var l2 = e10.stylisPlugins || r5, c2 = {}, u2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++) c2[t11[r11]] = true;
    u2.push(e11);
  });
  var f2 = (r10 = (t10 = [r2, r4].concat(l2, [rK, (n7 = function(e11) {
    i2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n7(e11);
  })])).length, function(e11, n10, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++) o3 += t10[s3](e11, n10, a3, i3) || "";
    return o3;
  }), h2 = function(e11) {
    var t11, r11;
    return rJ((r11 = function e12(t12, r12, n10, a3, i3, o3, s3, l3, c3) {
      for (var u3, f3 = 0, h3 = 0, d3 = s3, m2 = 0, p2 = 0, g2 = 0, b2 = 1, y2 = 1, v2 = 1, x2 = 0, w2 = "", k2 = i3, C2 = o3, M2 = a3, P2 = w2; y2; ) switch (g2 = x2, x2 = rW()) {
        case 40:
          if (108 != g2 && 58 == r$(P2, d3 - 1)) {
            -1 != rD(P2 += rT(rG(x2), "&", "&\f"), "&\f") && (v2 = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          P2 += rG(x2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          P2 += function(e13) {
            for (; rE = rN(); ) if (rE < 33) rW();
            else break;
            return rq(e13) > 2 || rq(rE) > 3 ? "" : " ";
          }(g2);
          break;
        case 92:
          P2 += function(e13, t13) {
            for (var r13; --t13 && rW() && !(rE < 48) && !(rE > 102) && (!(rE > 57) || !(rE < 65)) && (!(rE > 70) || !(rE < 97)); ) ;
            return r13 = rV + (t13 < 6 && 32 == rN() && 32 == rW()), rO(rz, e13, r13);
          }(rV - 1, 7);
          continue;
        case 47:
          switch (rN()) {
            case 42:
            case 47:
              rI((u3 = function(e13, t13) {
                for (; rW(); ) if (e13 + rE === 57) break;
                else if (e13 + rE === 84 && 47 === rN()) break;
                return "/*" + rO(rz, t13, rV - 1) + "*" + rS(47 === e13 ? e13 : rW());
              }(rW(), rV), rH(u3, r12, n10, rk, rS(rE), rO(u3, 2, -2), 0)), c3);
              break;
            default:
              P2 += "/";
          }
          break;
        case 123 * b2:
          l3[f3++] = rL(P2) * v2;
        case 125 * b2:
        case 59:
        case 0:
          switch (x2) {
            case 0:
            case 125:
              y2 = 0;
            case 59 + h3:
              -1 == v2 && (P2 = rT(P2, /\f/g, "")), p2 > 0 && rL(P2) - d3 && rI(p2 > 32 ? rX(P2 + ";", a3, n10, d3 - 1) : rX(rT(P2, " ", "") + ";", a3, n10, d3 - 2), c3);
              break;
            case 59:
              P2 += ";";
            default:
              if (rI(M2 = rY(P2, r12, n10, f3, h3, i3, l3, w2, k2 = [], C2 = [], d3), o3), 123 === x2) if (0 === h3) e12(P2, r12, M2, M2, k2, o3, d3, l3, C2);
              else switch (99 === m2 && 110 === r$(P2, 3) ? 100 : m2) {
                case 100:
                case 108:
                case 109:
                case 115:
                  e12(t12, M2, M2, a3 && rI(rY(t12, M2, M2, 0, 0, i3, l3, w2, i3, k2 = [], d3), C2), i3, C2, d3, l3, a3 ? k2 : C2);
                  break;
                default:
                  e12(P2, M2, M2, M2, [""], C2, 0, l3, C2);
              }
          }
          f3 = h3 = p2 = 0, b2 = v2 = 1, w2 = P2 = "", d3 = s3;
          break;
        case 58:
          d3 = 1 + rL(P2), p2 = g2;
        default:
          if (b2 < 1) {
            if (123 == x2) --b2;
            else if (125 == x2 && 0 == b2++ && 125 == (rE = rV > 0 ? r$(rz, --rV) : 0, rF--, 10 === rE && (rF = 1, rA--), rE)) continue;
          }
          switch (P2 += rS(x2), x2 * b2) {
            case 38:
              v2 = h3 > 0 ? 1 : (P2 += "\f", -1);
              break;
            case 44:
              l3[f3++] = (rL(P2) - 1) * v2, v2 = 1;
              break;
            case 64:
              45 === rN() && (P2 += rG(rW())), m2 = rN(), h3 = d3 = rL(w2 = P2 += function(e13) {
                for (; !rq(rN()); ) rW();
                return rO(rz, e13, rV);
              }(rV)), x2++;
              break;
            case 45:
              45 === g2 && 2 == rL(P2) && (b2 = 0);
          }
      }
      return o3;
    }("", null, null, null, [""], t11 = rU(t11 = e11), 0, [0], t11), rz = "", r11), f2);
  }, d2 = { key: o2, sheet: new ry({ key: o2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: c2, registered: {}, insert: function(e11, t11, r11, n10) {
    i2 = r11, h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n10 && (d2.inserted[t11.name] = true);
  } };
  return d2.sheet.hydrate(u2), d2;
}, r8 = function(e10, t10, r10) {
  var n7 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n7] && (e10.registered[n7] = t10.styles);
}, r9 = function(e10, t10, r10) {
  r8(e10, t10, r10);
  var n7 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n7 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let r6 = a(() => r3({ key: "css" }), { name: "Cache" }), r7 = (e10) => (t10) => {
  t10.serialized && (t10.withoutScoping ? e10.insert("", t10.serialized, e10.sheet, true) : r9(e10, t10.serialized, t10.isStringTag ?? true));
}, ne = t({ sx: C(), component: C().optional().default("div") }, (e10, t10) => {
  let { slots: n7, expose: a2 } = t10, l2 = rb.use(), c2 = r6.use(), u2 = l2.unstable_css(c2, e10.sx ?? {}), f2 = () => "0" !== u2.name ? `${c2.key}-${u2.name}` : "", h2 = r7(c2);
  i(() => {
    h2({ serialized: u2, isStringTag: true });
  });
  let d2 = o(null);
  return a2({ [s]: d2 }), () => r(e10.component ?? "div", { ref: d2, class: f2(), children: n7 });
});
function nt() {
  let e10;
  for (var n7 = arguments.length, a2 = Array(n7), h2 = 0; h2 < n7; h2++) a2[h2] = arguments[h2];
  let d2 = "div", m2 = {}, p2 = {};
  for (let t10 of a2) {
    if (V(t10)) {
      e10 = t10;
      continue;
    }
    if (D(t10) || l(t10)) {
      d2 = t10;
      continue;
    }
    E(e10) && c(t10) ? m2 = t10 : p2 = t10;
  }
  return e10 ?? (e10 = (e11, t10) => (n10) => {
    let a3 = {};
    for (let t11 in e11) "component" !== t11 && "sx" !== t11 && e11[t11] && (a3[`data-${t11}`] = e11[t11]);
    return r(n10, { ...a3, children: t10.slots });
  }), (r10) => {
    let n10 = Object.assign(t({ ...m2, sx: C().optional(), component: C().optional() }, (t10, a3) => {
      let l2 = rb.use(), c2 = r6.use(), h3 = r7(c2), m3 = o(""), p3 = l2.unstable_css(c2, r10), g2 = () => ("0" !== p3.name ? `${c2.key}-${p3.name}${m3.value}` : `${m3.value}`) + (n10.name ? ` ${n10.name}` : "");
      if (d2.__styled) {
        let e11 = l2.unstable_css(c2, t10.sx ?? {});
        "0" !== e11.name && (m3.value = ` ${c2.key}-${e11.name}`), i(() => {
          h3({ serialized: p3, isStringTag: true }), h3({ serialized: e11, isStringTag: true });
        });
      } else u(() => {
        h3({ serialized: p3, isStringTag: true });
      });
      let b2 = e10(t10, a3), y2 = o(null);
      return a3.expose({ [s]: y2 }), () => {
        if (d2.__styled) {
          let e12 = b2(d2);
          return e12 ? f(e12, { component: t10.component, ref: y2, class: g2() }) : null;
        }
        let e11 = b2(ne);
        return e11 ? f(e11, { component: t10.component || d2, sx: t10.sx, ref: y2, class: g2() }) : null;
      };
    }, p2), { __styled: true });
    return n10.toString = () => `.${n10.name}`, n10;
  };
}
let nr = t((e10) => {
  let { styles: t10 } = e10, r10 = rb.use(), n7 = r6.use(), a2 = r7(n7), i2 = r10.unstable_css(n7, D(t10) ? { "&": t10 } : t10);
  return u(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}), nn = t(() => {
  let e10 = rb.use().rootCSSVars;
  return () => r(nr, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), na = a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), ni = a(() => new no(h(null), h(null), () => false), { name: "Overlay" });
class no {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = d(this.triggerRef), r10 = d(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let ns = t((e10, t10) => {
  let { slots: n7, attrs: a2, emit: i2 } = t10, o2 = e10.contentRef || h(null), s2 = new no(e10.triggerRef ?? h(null), o2, () => !!e10.isOpen), l2 = na.use();
  return m(ni.use().add(s2)), window && p(g(o2, "value"), y((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      s2.isClickInside(e12) || i2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), y((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && s2.topmost() && i2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), v()), () => {
    var _a;
    let t11 = e10.isOpen ? f(r("div", { ...a2, ref: o2, style: e10.style, children: r(ni, { value: s2, children: (_a = n7.default) == null ? void 0 : _a.call(n7) }) }), { onVnodeBeforeMount: () => {
      i2("content-before-mount");
    } }) : null;
    return r(b, { to: l2.mountPoint(), children: n7.transition ? n7.transition({ content: t11 }) : t11 });
  };
}, { name: "Overlay", inheritAttrs: false }), nl = Math.min, nc = Math.max, nu = Math.round, nf = Math.floor, nh = (e10) => ({ x: e10, y: e10 }), nd = { left: "right", right: "left", bottom: "top", top: "bottom" }, nm = { start: "end", end: "start" };
function np(e10, t10) {
  return "function" == typeof e10 ? e10(t10) : e10;
}
function ng(e10) {
  return e10.split("-")[0];
}
function nb(e10) {
  return e10.split("-")[1];
}
function ny(e10) {
  return "x" === e10 ? "y" : "x";
}
function nv(e10) {
  return "y" === e10 ? "height" : "width";
}
function nx(e10) {
  return ["top", "bottom"].includes(ng(e10)) ? "y" : "x";
}
function nw(e10) {
  return e10.replace(/start|end/g, (e11) => nm[e11]);
}
function nk(e10) {
  return e10.replace(/left|right|bottom|top/g, (e11) => nd[e11]);
}
function nC(e10) {
  let { x: t10, y: r10, width: n7, height: a2 } = e10;
  return { width: n7, height: a2, top: r10, left: t10, right: t10 + n7, bottom: r10 + a2, x: t10, y: r10 };
}
function nM(e10, t10, r10) {
  let n7, { reference: a2, floating: i2 } = e10, o2 = nx(t10), s2 = ny(nx(t10)), l2 = nv(s2), c2 = ng(t10), u2 = "y" === o2, f2 = a2.x + a2.width / 2 - i2.width / 2, h2 = a2.y + a2.height / 2 - i2.height / 2, d2 = a2[l2] / 2 - i2[l2] / 2;
  switch (c2) {
    case "top":
      n7 = { x: f2, y: a2.y - i2.height };
      break;
    case "bottom":
      n7 = { x: f2, y: a2.y + a2.height };
      break;
    case "right":
      n7 = { x: a2.x + a2.width, y: h2 };
      break;
    case "left":
      n7 = { x: a2.x - i2.width, y: h2 };
      break;
    default:
      n7 = { x: a2.x, y: a2.y };
  }
  switch (nb(t10)) {
    case "start":
      n7[s2] -= d2 * (r10 && u2 ? -1 : 1);
      break;
    case "end":
      n7[s2] += d2 * (r10 && u2 ? -1 : 1);
  }
  return n7;
}
let nP = async (e10, t10, r10) => {
  let { placement: n7 = "bottom", strategy: a2 = "absolute", middleware: i2 = [], platform: o2 } = r10, s2 = i2.filter(Boolean), l2 = await (null == o2.isRTL ? void 0 : o2.isRTL(t10)), c2 = await o2.getElementRects({ reference: e10, floating: t10, strategy: a2 }), { x: u2, y: f2 } = nM(c2, n7, l2), h2 = n7, d2 = {}, m2 = 0;
  for (let r11 = 0; r11 < s2.length; r11++) {
    let { name: i3, fn: p2 } = s2[r11], { x: g2, y: b2, data: y2, reset: v2 } = await p2({ x: u2, y: f2, initialPlacement: n7, placement: h2, strategy: a2, middlewareData: d2, rects: c2, platform: o2, elements: { reference: e10, floating: t10 } });
    u2 = null != g2 ? g2 : u2, f2 = null != b2 ? b2 : f2, d2 = { ...d2, [i3]: { ...d2[i3], ...y2 } }, v2 && m2 <= 50 && (m2++, "object" == typeof v2 && (v2.placement && (h2 = v2.placement), v2.rects && (c2 = true === v2.rects ? await o2.getElementRects({ reference: e10, floating: t10, strategy: a2 }) : v2.rects), { x: u2, y: f2 } = nM(c2, h2, l2)), r11 = -1);
  }
  return { x: u2, y: f2, placement: h2, strategy: a2, middlewareData: d2 };
};
async function n_(e10, t10) {
  var r10, n7;
  void 0 === t10 && (t10 = {});
  let { x: a2, y: i2, platform: o2, rects: s2, elements: l2, strategy: c2 } = e10, { boundary: u2 = "clippingAncestors", rootBoundary: f2 = "viewport", elementContext: h2 = "floating", altBoundary: d2 = false, padding: m2 = 0 } = np(t10, e10), p2 = "number" != typeof (n7 = m2) ? { top: 0, right: 0, bottom: 0, left: 0, ...n7 } : { top: n7, right: n7, bottom: n7, left: n7 }, g2 = l2[d2 ? "floating" === h2 ? "reference" : "floating" : h2], b2 = nC(await o2.getClippingRect({ element: null == (r10 = await (null == o2.isElement ? void 0 : o2.isElement(g2))) || r10 ? g2 : g2.contextElement || await (null == o2.getDocumentElement ? void 0 : o2.getDocumentElement(l2.floating)), boundary: u2, rootBoundary: f2, strategy: c2 })), y2 = "floating" === h2 ? { x: a2, y: i2, width: s2.floating.width, height: s2.floating.height } : s2.reference, v2 = await (null == o2.getOffsetParent ? void 0 : o2.getOffsetParent(l2.floating)), x2 = await (null == o2.isElement ? void 0 : o2.isElement(v2)) && await (null == o2.getScale ? void 0 : o2.getScale(v2)) || { x: 1, y: 1 }, w2 = nC(o2.convertOffsetParentRelativeRectToViewportRelativeRect ? await o2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l2, rect: y2, offsetParent: v2, strategy: c2 }) : y2);
  return { top: (b2.top - w2.top + p2.top) / x2.y, bottom: (w2.bottom - b2.bottom + p2.bottom) / x2.y, left: (b2.left - w2.left + p2.left) / x2.x, right: (w2.right - b2.right + p2.right) / x2.x };
}
function nS() {
  return "undefined" != typeof window;
}
function nR(e10) {
  return n$(e10) ? (e10.nodeName || "").toLowerCase() : "#document";
}
function nT(e10) {
  var t10;
  return (null == e10 || null == (t10 = e10.ownerDocument) ? void 0 : t10.defaultView) || window;
}
function nD(e10) {
  var t10;
  return null == (t10 = (n$(e10) ? e10.ownerDocument : e10.document) || window.document) ? void 0 : t10.documentElement;
}
function n$(e10) {
  return !!nS() && (e10 instanceof Node || e10 instanceof nT(e10).Node);
}
function nO(e10) {
  return !!nS() && (e10 instanceof Element || e10 instanceof nT(e10).Element);
}
function nL(e10) {
  return !!nS() && (e10 instanceof HTMLElement || e10 instanceof nT(e10).HTMLElement);
}
function nI(e10) {
  return !!nS() && "undefined" != typeof ShadowRoot && (e10 instanceof ShadowRoot || e10 instanceof nT(e10).ShadowRoot);
}
function nA(e10) {
  let { overflow: t10, overflowX: r10, overflowY: n7, display: a2 } = nz(e10);
  return /auto|scroll|overlay|hidden|clip/.test(t10 + n7 + r10) && !["inline", "contents"].includes(a2);
}
function nF(e10) {
  return [":popover-open", ":modal"].some((t10) => {
    try {
      return e10.matches(t10);
    } catch (e11) {
      return false;
    }
  });
}
function nB(e10) {
  let t10 = nV(), r10 = nO(e10) ? nz(e10) : e10;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((e11) => !!r10[e11] && "none" !== r10[e11]) || !!r10.containerType && "normal" !== r10.containerType || !t10 && !!r10.backdropFilter && "none" !== r10.backdropFilter || !t10 && !!r10.filter && "none" !== r10.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e11) => (r10.willChange || "").includes(e11)) || ["paint", "layout", "strict", "content"].some((e11) => (r10.contain || "").includes(e11));
}
function nV() {
  return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
function nE(e10) {
  return ["html", "body", "#document"].includes(nR(e10));
}
function nz(e10) {
  return nT(e10).getComputedStyle(e10);
}
function nH(e10) {
  return nO(e10) ? { scrollLeft: e10.scrollLeft, scrollTop: e10.scrollTop } : { scrollLeft: e10.scrollX, scrollTop: e10.scrollY };
}
function nj(e10) {
  if ("html" === nR(e10)) return e10;
  let t10 = e10.assignedSlot || e10.parentNode || nI(e10) && e10.host || nD(e10);
  return nI(t10) ? t10.host : t10;
}
function nW(e10, t10, r10) {
  var n7;
  void 0 === t10 && (t10 = []), void 0 === r10 && (r10 = true);
  let a2 = function e11(t11) {
    let r11 = nj(t11);
    return nE(r11) ? t11.ownerDocument ? t11.ownerDocument.body : t11.body : nL(r11) && nA(r11) ? r11 : e11(r11);
  }(e10), i2 = a2 === (null == (n7 = e10.ownerDocument) ? void 0 : n7.body), o2 = nT(a2);
  if (i2) {
    let e11 = nN(o2);
    return t10.concat(o2, o2.visualViewport || [], nA(a2) ? a2 : [], e11 && r10 ? nW(e11) : []);
  }
  return t10.concat(a2, nW(a2, [], r10));
}
function nN(e10) {
  return e10.parent && Object.getPrototypeOf(e10.parent) ? e10.frameElement : null;
}
function nq(e10) {
  let t10 = nz(e10), r10 = parseFloat(t10.width) || 0, n7 = parseFloat(t10.height) || 0, a2 = nL(e10), i2 = a2 ? e10.offsetWidth : r10, o2 = a2 ? e10.offsetHeight : n7, s2 = nu(r10) !== i2 || nu(n7) !== o2;
  return s2 && (r10 = i2, n7 = o2), { width: r10, height: n7, $: s2 };
}
function nU(e10) {
  return nO(e10) ? e10 : e10.contextElement;
}
function nG(e10) {
  let t10 = nU(e10);
  if (!nL(t10)) return nh(1);
  let r10 = t10.getBoundingClientRect(), { width: n7, height: a2, $: i2 } = nq(t10), o2 = (i2 ? nu(r10.width) : r10.width) / n7, s2 = (i2 ? nu(r10.height) : r10.height) / a2;
  return o2 && Number.isFinite(o2) || (o2 = 1), s2 && Number.isFinite(s2) || (s2 = 1), { x: o2, y: s2 };
}
let nY = nh(0);
function nX(e10) {
  let t10 = nT(e10);
  return nV() && t10.visualViewport ? { x: t10.visualViewport.offsetLeft, y: t10.visualViewport.offsetTop } : nY;
}
function nJ(e10, t10, r10, n7) {
  var a2;
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  let i2 = e10.getBoundingClientRect(), o2 = nU(e10), s2 = nh(1);
  t10 && (n7 ? nO(n7) && (s2 = nG(n7)) : s2 = nG(e10));
  let l2 = (void 0 === (a2 = r10) && (a2 = false), n7 && (!a2 || n7 === nT(o2)) && a2) ? nX(o2) : nh(0), c2 = (i2.left + l2.x) / s2.x, u2 = (i2.top + l2.y) / s2.y, f2 = i2.width / s2.x, h2 = i2.height / s2.y;
  if (o2) {
    let e11 = nT(o2), t11 = n7 && nO(n7) ? nT(n7) : n7, r11 = e11, a3 = nN(r11);
    for (; a3 && n7 && t11 !== r11; ) {
      let e12 = nG(a3), t12 = a3.getBoundingClientRect(), n10 = nz(a3), i3 = t12.left + (a3.clientLeft + parseFloat(n10.paddingLeft)) * e12.x, o3 = t12.top + (a3.clientTop + parseFloat(n10.paddingTop)) * e12.y;
      c2 *= e12.x, u2 *= e12.y, f2 *= e12.x, h2 *= e12.y, c2 += i3, u2 += o3, a3 = nN(r11 = nT(a3));
    }
  }
  return nC({ width: f2, height: h2, x: c2, y: u2 });
}
function nK(e10, t10) {
  let r10 = nH(e10).scrollLeft;
  return t10 ? t10.left + r10 : nJ(nD(e10)).left + r10;
}
function nZ(e10, t10, r10) {
  void 0 === r10 && (r10 = false);
  let n7 = e10.getBoundingClientRect();
  return { x: n7.left + t10.scrollLeft - (r10 ? 0 : nK(e10, n7)), y: n7.top + t10.scrollTop };
}
function nQ(e10, t10, r10) {
  let n7;
  if ("viewport" === t10) n7 = function(e11, t11) {
    let r11 = nT(e11), n10 = nD(e11), a2 = r11.visualViewport, i2 = n10.clientWidth, o2 = n10.clientHeight, s2 = 0, l2 = 0;
    if (a2) {
      i2 = a2.width, o2 = a2.height;
      let e12 = nV();
      (!e12 || e12 && "fixed" === t11) && (s2 = a2.offsetLeft, l2 = a2.offsetTop);
    }
    return { width: i2, height: o2, x: s2, y: l2 };
  }(e10, r10);
  else if ("document" === t10) n7 = function(e11) {
    let t11 = nD(e11), r11 = nH(e11), n10 = e11.ownerDocument.body, a2 = nc(t11.scrollWidth, t11.clientWidth, n10.scrollWidth, n10.clientWidth), i2 = nc(t11.scrollHeight, t11.clientHeight, n10.scrollHeight, n10.clientHeight), o2 = -r11.scrollLeft + nK(e11), s2 = -r11.scrollTop;
    return "rtl" === nz(n10).direction && (o2 += nc(t11.clientWidth, n10.clientWidth) - a2), { width: a2, height: i2, x: o2, y: s2 };
  }(nD(e10));
  else if (nO(t10)) n7 = function(e11, t11) {
    let r11 = nJ(e11, true, "fixed" === t11), n10 = r11.top + e11.clientTop, a2 = r11.left + e11.clientLeft, i2 = nL(e11) ? nG(e11) : nh(1), o2 = e11.clientWidth * i2.x, s2 = e11.clientHeight * i2.y;
    return { width: o2, height: s2, x: a2 * i2.x, y: n10 * i2.y };
  }(t10, r10);
  else {
    let r11 = nX(e10);
    n7 = { x: t10.x - r11.x, y: t10.y - r11.y, width: t10.width, height: t10.height };
  }
  return nC(n7);
}
function n0(e10) {
  return "static" === nz(e10).position;
}
function n1(e10, t10) {
  if (!nL(e10) || "fixed" === nz(e10).position) return null;
  if (t10) return t10(e10);
  let r10 = e10.offsetParent;
  return nD(e10) === r10 && (r10 = r10.ownerDocument.body), r10;
}
function n2(e10, t10) {
  let r10 = nT(e10);
  if (nF(e10)) return r10;
  if (!nL(e10)) {
    let t11 = nj(e10);
    for (; t11 && !nE(t11); ) {
      if (nO(t11) && !n0(t11)) return t11;
      t11 = nj(t11);
    }
    return r10;
  }
  let n7 = n1(e10, t10);
  for (; n7 && ["table", "td", "th"].includes(nR(n7)) && n0(n7); ) n7 = n1(n7, t10);
  return n7 && nE(n7) && n0(n7) && !nB(n7) ? r10 : n7 || function(e11) {
    let t11 = nj(e11);
    for (; nL(t11) && !nE(t11); ) {
      if (nB(t11)) return t11;
      if (nF(t11)) break;
      t11 = nj(t11);
    }
    return null;
  }(e10) || r10;
}
let n4 = async function(e10) {
  let t10 = this.getOffsetParent || n2, r10 = this.getDimensions, n7 = await r10(e10.floating);
  return { reference: function(e11, t11, r11) {
    let n10 = nL(t11), a2 = nD(t11), i2 = "fixed" === r11, o2 = nJ(e11, true, i2, t11), s2 = { scrollLeft: 0, scrollTop: 0 }, l2 = nh(0);
    if (n10 || !n10 && !i2) if (("body" !== nR(t11) || nA(a2)) && (s2 = nH(t11)), n10) {
      let e12 = nJ(t11, true, i2, t11);
      l2.x = e12.x + t11.clientLeft, l2.y = e12.y + t11.clientTop;
    } else a2 && (l2.x = nK(a2));
    let c2 = !a2 || n10 || i2 ? nh(0) : nZ(a2, s2);
    return { x: o2.left + s2.scrollLeft - l2.x - c2.x, y: o2.top + s2.scrollTop - l2.y - c2.y, width: o2.width, height: o2.height };
  }(e10.reference, await t10(e10.floating), e10.strategy), floating: { x: 0, y: 0, width: n7.width, height: n7.height } };
}, n5 = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e10) {
  let { elements: t10, rect: r10, offsetParent: n7, strategy: a2 } = e10, i2 = "fixed" === a2, o2 = nD(n7), s2 = !!t10 && nF(t10.floating);
  if (n7 === o2 || s2 && i2) return r10;
  let l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = nh(1), u2 = nh(0), f2 = nL(n7);
  if ((f2 || !f2 && !i2) && (("body" !== nR(n7) || nA(o2)) && (l2 = nH(n7)), nL(n7))) {
    let e11 = nJ(n7);
    c2 = nG(n7), u2.x = e11.x + n7.clientLeft, u2.y = e11.y + n7.clientTop;
  }
  let h2 = !o2 || f2 || i2 ? nh(0) : nZ(o2, l2, true);
  return { width: r10.width * c2.x, height: r10.height * c2.y, x: r10.x * c2.x - l2.scrollLeft * c2.x + u2.x + h2.x, y: r10.y * c2.y - l2.scrollTop * c2.y + u2.y + h2.y };
}, getDocumentElement: nD, getClippingRect: function(e10) {
  let { element: t10, boundary: r10, rootBoundary: n7, strategy: a2 } = e10, i2 = [..."clippingAncestors" === r10 ? nF(t10) ? [] : function(e11, t11) {
    let r11 = t11.get(e11);
    if (r11) return r11;
    let n10 = nW(e11, [], false).filter((e12) => nO(e12) && "body" !== nR(e12)), a3 = null, i3 = "fixed" === nz(e11).position, o3 = i3 ? nj(e11) : e11;
    for (; nO(o3) && !nE(o3); ) {
      let t12 = nz(o3), r12 = nB(o3);
      r12 || "fixed" !== t12.position || (a3 = null), (i3 ? !r12 && !a3 : !r12 && "static" === t12.position && !!a3 && ["absolute", "fixed"].includes(a3.position) || nA(o3) && !r12 && function e12(t13, r13) {
        let n11 = nj(t13);
        return !(n11 === r13 || !nO(n11) || nE(n11)) && ("fixed" === nz(n11).position || e12(n11, r13));
      }(e11, o3)) ? n10 = n10.filter((e12) => e12 !== o3) : a3 = t12, o3 = nj(o3);
    }
    return t11.set(e11, n10), n10;
  }(t10, this._c) : [].concat(r10), n7], o2 = i2[0], s2 = i2.reduce((e11, r11) => {
    let n10 = nQ(t10, r11, a2);
    return e11.top = nc(n10.top, e11.top), e11.right = nl(n10.right, e11.right), e11.bottom = nl(n10.bottom, e11.bottom), e11.left = nc(n10.left, e11.left), e11;
  }, nQ(t10, o2, a2));
  return { width: s2.right - s2.left, height: s2.bottom - s2.top, x: s2.left, y: s2.top };
}, getOffsetParent: n2, getElementRects: n4, getClientRects: function(e10) {
  return Array.from(e10.getClientRects());
}, getDimensions: function(e10) {
  let { width: t10, height: r10 } = nq(e10);
  return { width: t10, height: r10 };
}, getScale: nG, isElement: nO, isRTL: function(e10) {
  return "rtl" === nz(e10).direction;
} };
function n3(e10, t10) {
  return e10.x === t10.x && e10.y === t10.y && e10.width === t10.width && e10.height === t10.height;
}
let n8 = function(e10) {
  return void 0 === e10 && (e10 = {}), { name: "size", options: e10, async fn(t10) {
    var r10, n7;
    let a2, i2, { placement: o2, rects: s2, platform: l2, elements: c2 } = t10, { apply: u2 = () => {
    }, ...f2 } = np(e10, t10), h2 = await n_(t10, f2), d2 = ng(o2), m2 = nb(o2), p2 = "y" === nx(o2), { width: g2, height: b2 } = s2.floating;
    "top" === d2 || "bottom" === d2 ? (a2 = d2, i2 = m2 === (await (null == l2.isRTL ? void 0 : l2.isRTL(c2.floating)) ? "start" : "end") ? "left" : "right") : (i2 = d2, a2 = "end" === m2 ? "top" : "bottom");
    let y2 = b2 - h2.top - h2.bottom, v2 = g2 - h2.left - h2.right, x2 = nl(b2 - h2[a2], y2), w2 = nl(g2 - h2[i2], v2), k2 = !t10.middlewareData.shift, C2 = x2, M2 = w2;
    if (null != (r10 = t10.middlewareData.shift) && r10.enabled.x && (M2 = v2), null != (n7 = t10.middlewareData.shift) && n7.enabled.y && (C2 = y2), k2 && !m2) {
      let e11 = nc(h2.left, 0), t11 = nc(h2.right, 0), r11 = nc(h2.top, 0), n10 = nc(h2.bottom, 0);
      p2 ? M2 = g2 - 2 * (0 !== e11 || 0 !== t11 ? e11 + t11 : nc(h2.left, h2.right)) : C2 = b2 - 2 * (0 !== r11 || 0 !== n10 ? r11 + n10 : nc(h2.top, h2.bottom));
    }
    await u2({ ...t10, availableWidth: M2, availableHeight: C2 });
    let P2 = await l2.getDimensions(c2.floating);
    return g2 !== P2.width || b2 !== P2.height ? { reset: { rects: true } } : {};
  } };
}, n9 = (e10, t10, r10) => {
  let n7 = /* @__PURE__ */ new Map(), a2 = { platform: n5, ...r10 }, i2 = { ...a2.platform, _c: n7 };
  return nP(e10, t10, { ...a2, platform: i2 });
}, n6 = t((e10, t10) => {
  let { slots: n7, emit: a2, attrs: i2 } = t10, o2 = x(null), s2 = x(null);
  return p(N([o2, s2]), y((t11) => {
    let [r10, n10] = t11;
    if (n10 && r10) {
      let t12 = async () => {
        var t13, a4;
        n10.style.position = "absolute";
        let { x: i3, y: o3 } = await n9(r10, n10, { placement: e10.placement ?? "bottom", middleware: [...e10.modifiers ?? [], ...e10.middleware ?? [], (void 0 === t13 && (t13 = {}), { name: "flip", options: t13, async fn(e11) {
          var r11, n11, a5, i4, o4;
          let { placement: s3, middlewareData: l2, rects: c2, initialPlacement: u2, platform: f2, elements: h2 } = e11, { mainAxis: d2 = true, crossAxis: m2 = true, fallbackPlacements: p2, fallbackStrategy: g2 = "bestFit", fallbackAxisSideDirection: b2 = "none", flipAlignment: y2 = true, ...v2 } = np(t13, e11);
          if (null != (r11 = l2.arrow) && r11.alignmentOffset) return {};
          let x2 = ng(s3), w2 = nx(u2), k2 = ng(u2) === u2, C2 = await (null == f2.isRTL ? void 0 : f2.isRTL(h2.floating)), M2 = p2 || (k2 || !y2 ? [nk(u2)] : function(e12) {
            let t14 = nk(e12);
            return [nw(e12), t14, nw(t14)];
          }(u2)), P2 = "none" !== b2;
          !p2 && P2 && M2.push(...function(e12, t14, r12, n12) {
            let a6 = nb(e12), i5 = function(e13, t15, r13) {
              let n13 = ["left", "right"], a7 = ["right", "left"];
              switch (e13) {
                case "top":
                case "bottom":
                  if (r13) return t15 ? a7 : n13;
                  return t15 ? n13 : a7;
                case "left":
                case "right":
                  return t15 ? ["top", "bottom"] : ["bottom", "top"];
                default:
                  return [];
              }
            }(ng(e12), "start" === r12, n12);
            return a6 && (i5 = i5.map((e13) => e13 + "-" + a6), t14 && (i5 = i5.concat(i5.map(nw)))), i5;
          }(u2, y2, b2, C2));
          let _2 = [u2, ...M2], S2 = await n_(e11, v2), R2 = [], T2 = (null == (n11 = l2.flip) ? void 0 : n11.overflows) || [];
          if (d2 && R2.push(S2[x2]), m2) {
            let e12 = function(e13, t14, r12) {
              void 0 === r12 && (r12 = false);
              let n12 = nb(e13), a6 = ny(nx(e13)), i5 = nv(a6), o5 = "x" === a6 ? n12 === (r12 ? "end" : "start") ? "right" : "left" : "start" === n12 ? "bottom" : "top";
              return t14.reference[i5] > t14.floating[i5] && (o5 = nk(o5)), [o5, nk(o5)];
            }(s3, c2, C2);
            R2.push(S2[e12[0]], S2[e12[1]]);
          }
          if (T2 = [...T2, { placement: s3, overflows: R2 }], !R2.every((e12) => e12 <= 0)) {
            let e12 = ((null == (a5 = l2.flip) ? void 0 : a5.index) || 0) + 1, t14 = _2[e12];
            if (t14) return { data: { index: e12, overflows: T2 }, reset: { placement: t14 } };
            let r12 = null == (i4 = T2.filter((e13) => e13.overflows[0] <= 0).sort((e13, t15) => e13.overflows[1] - t15.overflows[1])[0]) ? void 0 : i4.placement;
            if (!r12) switch (g2) {
              case "bestFit": {
                let e13 = null == (o4 = T2.filter((e14) => {
                  if (P2) {
                    let t15 = nx(e14.placement);
                    return t15 === w2 || "y" === t15;
                  }
                  return true;
                }).map((e14) => [e14.placement, e14.overflows.filter((e15) => e15 > 0).reduce((e15, t15) => e15 + t15, 0)]).sort((e14, t15) => e14[1] - t15[1])[0]) ? void 0 : o4[0];
                e13 && (r12 = e13);
                break;
              }
              case "initialPlacement":
                r12 = u2;
            }
            if (s3 !== r12) return { reset: { placement: r12 } };
          }
          return {};
        } }), (void 0 === a4 && (a4 = {}), { name: "shift", options: a4, async fn(e11) {
          let { x: t14, y: r11, placement: n11 } = e11, { mainAxis: i4 = true, crossAxis: o4 = false, limiter: s3 = { fn: (e12) => {
            let { x: t15, y: r12 } = e12;
            return { x: t15, y: r12 };
          } }, ...l2 } = np(a4, e11), c2 = { x: t14, y: r11 }, u2 = await n_(e11, l2), f2 = nx(ng(n11)), h2 = ny(f2), d2 = c2[h2], m2 = c2[f2];
          if (i4) {
            let e12 = "y" === h2 ? "top" : "left", t15 = "y" === h2 ? "bottom" : "right", r12 = d2 + u2[e12], n12 = d2 - u2[t15];
            d2 = nc(r12, nl(d2, n12));
          }
          if (o4) {
            let e12 = "y" === f2 ? "top" : "left", t15 = "y" === f2 ? "bottom" : "right", r12 = m2 + u2[e12], n12 = m2 - u2[t15];
            m2 = nc(r12, nl(m2, n12));
          }
          let p2 = s3.fn({ ...e11, [h2]: d2, [f2]: m2 });
          return { ...p2, data: { x: p2.x - t14, y: p2.y - r11, enabled: { [h2]: i4, [f2]: o4 } } };
        } })] });
        Object.assign(n10.style, { left: `${i3}px`, top: `${o3}px` });
      }, a3 = function(e11, t13, r11, n11) {
        let a4;
        void 0 === n11 && (n11 = {});
        let { ancestorScroll: i3 = true, ancestorResize: o3 = true, elementResize: s3 = "function" == typeof ResizeObserver, layoutShift: l2 = "function" == typeof IntersectionObserver, animationFrame: c2 = false } = n11, u2 = nU(e11), f2 = i3 || o3 ? [...u2 ? nW(u2) : [], ...nW(t13)] : [];
        f2.forEach((e12) => {
          i3 && e12.addEventListener("scroll", r11, { passive: true }), o3 && e12.addEventListener("resize", r11);
        });
        let h2 = u2 && l2 ? function(e12, t14) {
          let r12, n12 = null, a5 = nD(e12);
          function i4() {
            var e13;
            clearTimeout(r12), null == (e13 = n12) || e13.disconnect(), n12 = null;
          }
          return !function o4(s4, l3) {
            void 0 === s4 && (s4 = false), void 0 === l3 && (l3 = 1), i4();
            let c3 = e12.getBoundingClientRect(), { left: u3, top: f3, width: h3, height: d3 } = c3;
            if (s4 || t14(), !h3 || !d3) return;
            let m3 = nf(f3), p3 = nf(a5.clientWidth - (u3 + h3)), g2 = { rootMargin: -m3 + "px " + -p3 + "px " + -nf(a5.clientHeight - (f3 + d3)) + "px " + -nf(u3) + "px", threshold: nc(0, nl(1, l3)) || 1 }, b2 = true;
            function y2(t15) {
              let n13 = t15[0].intersectionRatio;
              if (n13 !== l3) {
                if (!b2) return o4();
                n13 ? o4(false, n13) : r12 = setTimeout(() => {
                  o4(false, 1e-7);
                }, 1e3);
              }
              1 !== n13 || n3(c3, e12.getBoundingClientRect()) || o4(), b2 = false;
            }
            try {
              n12 = new IntersectionObserver(y2, { ...g2, root: a5.ownerDocument });
            } catch (e13) {
              n12 = new IntersectionObserver(y2, g2);
            }
            n12.observe(e12);
          }(true), i4;
        }(u2, r11) : null, d2 = -1, m2 = null;
        s3 && (m2 = new ResizeObserver((e12) => {
          let [n12] = e12;
          n12 && n12.target === u2 && m2 && (m2.unobserve(t13), cancelAnimationFrame(d2), d2 = requestAnimationFrame(() => {
            var e13;
            null == (e13 = m2) || e13.observe(t13);
          })), r11();
        }), u2 && !c2 && m2.observe(u2), m2.observe(t13));
        let p2 = c2 ? nJ(e11) : null;
        return c2 && function t14() {
          let n12 = nJ(e11);
          p2 && !n3(p2, n12) && r11(), p2 = n12, a4 = requestAnimationFrame(t14);
        }(), r11(), () => {
          var e12;
          f2.forEach((e13) => {
            i3 && e13.removeEventListener("scroll", r11), o3 && e13.removeEventListener("resize", r11);
          }), null == h2 || h2(), null == (e12 = m2) || e12.disconnect(), m2 = null, c2 && cancelAnimationFrame(a4);
        };
      }(r10, n10, t12);
      return () => {
        a3();
      };
    }
    return () => {
    };
  }), v()), () => {
    var _a, _b;
    let t11 = (_a = n7.default) == null ? void 0 : _a.call(n7)[0];
    return t11 ? w(k, { children: [f(t11, { ...i2, onVnodeMounted: (e11) => {
      o2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), r(ns, { triggerRef: o2, contentRef: s2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n7.transition, children: (_b = n7.content) == null ? void 0 : _b.call(n7) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false });
export {
  ne as B,
  nn as C,
  nr as G,
  ns as O,
  n6 as P,
  rb as T,
  n8 as a,
  t$ as b,
  tE as d,
  nt as s,
  tV as t,
  tL as v
};
