var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let e;
import { d as t, j as r, k as n, c as a, o as i, l as o, m as s, n as l, f as c, p as u, b as d, u as f, q as h, r as p, t as m, T as g, s as y, v, x as b, e as x, F as w } from "./lib-nodepkg-vuekit.BHx9vJzz.chunk.js";
import { c as k } from "./lib-nodepkg-typedef.CZTserIo.chunk.js";
import { u as C, g as M, i as P, l as _, s as S, f as R, c as T, p as $, v as D, e as O, o as I, m as A, w as L, k as F, r as B, a as V, x as E, y as H, z } from "./vendor-innoai-tech-lodash.DaXqQgFo.chunk.js";
import { _ as j, c as W } from "./vendor-rxjs.BlC8C2kN.chunk.js";
var N, q, U, G, Y, X, K = function() {
};
let J = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function Z(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let Q = ["duration", "bounce"], ee = ["stiffness", "damping", "mass"];
function et(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function er(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n3 = 2, restDelta: a2 } = e10, i2 = j(e10, ["from", "to", "restSpeed", "restDelta"]);
  let o2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!et(e11, ee) && et(e11, Q)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n6 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e12, s3 = 1 - a3;
        s3 = J(0.05, 1, s3), n6 = J(0.01, 10, n6 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n6;
          return 1e-3 - (t13 - i3) / Z(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n6, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n6, o4 = Math.exp(-r13), l4 = Z(Math.pow(e13, 2), s3);
          return (r13 * i3 + i3 - a4) * o4 * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / l4;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n6) * ((e13 - i3) * n6 + 1), r12 = (e13) => n6 * n6 * (i3 - e13) * Math.exp(-e13 * n6));
        let l3 = function(e13, t13, r13) {
          let n7 = r13;
          for (let r14 = 1; r14 < 12; r14++) n7 -= e13(n7) / t13(n7);
          return n7;
        }(t12, r12, 5 / n6);
        if (n6 *= 1e3, isNaN(l3)) return { stiffness: 100, damping: 10, duration: n6 };
        {
          let e13 = Math.pow(l3, 2) * o3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(o3 * e13), duration: n6 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), h2 = en, p2 = en;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n6 = r10 - t10, i3 = l2 / (2 * Math.sqrt(s2 * c2)), o3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i3 < 1) {
      let t11 = Z(o3, i3);
      h2 = (a3) => r10 - Math.exp(-i3 * o3 * a3) * ((e11 + i3 * o3 * n6) / t11 * Math.sin(t11 * a3) + n6 * Math.cos(t11 * a3)), p2 = (r11) => {
        let a3 = Math.exp(-i3 * o3 * r11);
        return i3 * o3 * a3 * (Math.sin(t11 * r11) * (e11 + i3 * o3 * n6) / t11 + n6 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + i3 * o3 * n6) - t11 * n6 * Math.sin(t11 * r11));
      };
    } else if (1 === i3) h2 = (t11) => r10 - Math.exp(-o3 * t11) * (n6 + (e11 + o3 * n6) * t11);
    else {
      let t11 = o3 * Math.sqrt(i3 * i3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + i3 * o3 * n6) * Math.sinh(l3) + t11 * n6 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e11) => {
    let t11 = h2(e11);
    if (f2) o2.done = e11 >= d2;
    else {
      let i3 = Math.abs(1e3 * p2(e11)) <= n3, s3 = Math.abs(r10 - t11) <= a2;
      o2.done = i3 && s3;
    }
    return o2.value = o2.done ? r10 : t11, o2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
er.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let en = (e10) => 0, ea = (e10, t10, r10) => {
  let n3 = t10 - e10;
  return 0 === n3 ? 1 : (r10 - e10) / n3;
}, ei = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, eo = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), es = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, el = /(-)?([\d]*\.?[\d])+/g, ec = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, eu = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ed(e10) {
  return "string" == typeof e10;
}
let ef = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, eh = Object.assign(Object.assign({}, ef), { transform: eo(0, 1) });
Object.assign(Object.assign({}, ef), { default: 1 });
let ep = { test: (e10) => ed(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, ep), { parse: (e10) => ep.parse(e10) / 100, transform: (e10) => ep.transform(100 * e10) });
let em = (e10, t10) => (r10) => !!(ed(r10) && eu.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), eg = (e10, t10, r10) => (n3) => {
  if (!ed(n3)) return n3;
  let [a2, i2, o2, s2] = n3.match(el);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ey = { test: em("hsl", "hue"), parse: eg("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + ep.transform(es(r10)) + ", " + ep.transform(es(n3)) + ", " + es(eh.transform(a2)) + ")";
} }, ev = eo(0, 255), eb = Object.assign(Object.assign({}, ef), { transform: (e10) => Math.round(ev(e10)) }), ex = { test: em("rgb", "red"), parse: eg("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n3, alpha: a2 = 1 } = e10;
  return "rgba(" + eb.transform(t10) + ", " + eb.transform(r10) + ", " + eb.transform(n3) + ", " + es(eh.transform(a2)) + ")";
} }, ew = { test: em("#"), parse: function(e10) {
  let t10 = "", r10 = "", n3 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n3 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n3 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n3 += n3, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n3, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: ex.transform }, ek = { test: (e10) => ex.test(e10) || ew.test(e10) || ey.test(e10), parse: (e10) => ex.test(e10) ? ex.parse(e10) : ey.test(e10) ? ey.parse(e10) : ew.parse(e10), transform: (e10) => ed(e10) ? e10 : e10.hasOwnProperty("red") ? ex.transform(e10) : ey.transform(e10) }, eC = "${c}", eM = "${n}";
function eP(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n3 = e10.match(ec);
  n3 && (r10 = n3.length, e10 = e10.replace(ec, eC), t10.push(...n3.map(ek.parse)));
  let a2 = e10.match(el);
  return a2 && (e10 = e10.replace(el, eM), t10.push(...a2.map(ef.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let e_ = function(e10) {
  let { values: t10, numColors: r10, tokenised: n3 } = eP(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n3;
    for (let n6 = 0; n6 < a2; n6++) t11 = t11.replace(n6 < r10 ? eC : eM, n6 < r10 ? ek.transform(e11[n6]) : es(e11[n6]));
    return t11;
  };
};
function eS(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eR(e10) {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 } = e10;
  t10 /= 360, n3 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n3 < 0.5 ? n3 * (1 + r10) : n3 + r10 - n3 * r10, a3 = 2 * n3 - e11;
    i2 = eS(a3, e11, t10 + 1 / 3), o2 = eS(a3, e11, t10), s2 = eS(a3, e11, t10 - 1 / 3);
  } else i2 = o2 = s2 = n3;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let eT = (e10, t10, r10) => {
  let n3 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n3) + n3));
}, e$ = [ew, ex, ey], eD = (e10) => e$.find((t10) => t10.test(e10)), eO = (e10, t10) => {
  let r10 = eD(e10), n3 = eD(t10), a2 = r10.parse(e10), i2 = n3.parse(t10);
  r10 === ey && (a2 = eR(a2), r10 = ex), n3 === ey && (i2 = eR(i2), n3 = ex);
  let o2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in o2) "alpha" !== t11 && (o2[t11] = eT(a2[t11], i2[t11], e11));
    return o2.alpha = ei(a2.alpha, i2.alpha, e11), r10.transform(o2);
  };
}, eI = (e10) => "number" == typeof e10, eA = (e10, t10) => (r10) => t10(e10(r10)), eL = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return t10.reduce(eA);
};
function eF(e10, t10) {
  return eI(e10) ? (r10) => ei(e10, t10, r10) : ek.test(e10) ? eO(e10, t10) : eH(e10, t10);
}
let eB = (e10, t10) => {
  let r10 = [...e10], n3 = r10.length, a2 = e10.map((e11, r11) => eF(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n3; t11++) r10[t11] = a2[t11](e11);
    return r10;
  };
}, eV = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n3 = {};
  for (let a2 in r10) void 0 !== e10[a2] && void 0 !== t10[a2] && (n3[a2] = eF(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n3) r10[t11] = n3[t11](e11);
    return r10;
  };
};
function eE(e10) {
  let t10 = eP(e10).values, r10 = t10.length, n3 = 0, a2 = 0, i2 = 0;
  for (let e11 = 0; e11 < r10; e11++) n3 || "number" == typeof t10[e11] ? n3++ : void 0 !== t10[e11].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n3, numRGB: a2, numHSL: i2 };
}
let eH = (e10, t10) => {
  let r10 = e_(t10), n3 = eE(e10), a2 = eE(t10);
  return n3.numHSL === a2.numHSL && n3.numRGB === a2.numRGB && n3.numNumbers >= a2.numNumbers ? eL(eB(n3.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, ez = (e10, t10) => (r10) => ei(e10, t10, r10);
function ej(e10, t10) {
  let { clamp: r10 = true, ease: n3, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e10.length;
  K(i2 === t10.length), K(!n3 || !Array.isArray(n3) || n3.length === i2 - 1), e10[0] > e10[i2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let o2 = function(e11, t11, r11) {
    var n6;
    let a3 = [], i3 = r11 || ("number" == typeof (n6 = e11[0]) ? ez : "string" == typeof n6 ? ek.test(n6) ? eO : eH : Array.isArray(n6) ? eB : "object" == typeof n6 ? eV : void 0), o3 = e11.length - 1;
    for (let r12 = 0; r12 < o3; r12++) {
      let n7 = i3(e11[r12], e11[r12 + 1]);
      t11 && (n7 = eL(Array.isArray(t11) ? t11[r12] : t11, n7)), a3.push(n7);
    }
    return a3;
  }(t10, n3, a2), s2 = 2 === i2 ? function(e11, t11) {
    let [r11, n6] = e11, [a3] = t11;
    return (e12) => a3(ea(r11, n6, e12));
  }(e10, o2) : function(e11, t11) {
    let r11 = e11.length, n6 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e11[0] ? o3 = true : a3 >= e11[n6] && (i3 = n6 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n6; t12++) ;
        i3 = t12 - 1;
      }
      let s3 = ea(e11[i3], e11[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e10, o2);
  return r10 ? (t11) => s2(J(e10[0], e10[i2 - 1], t11)) : s2;
}
let eW = (e10) => e10, eN = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eq(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n3, offset: a2, duration: i2 = 300 } = e10, o2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * i2);
  function c2() {
    return ej(l2, s2, { ease: Array.isArray(n3) ? n3 : s2.map(() => n3 || eN).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (o2.value = u2(e11), o2.done = e11 >= i2, o2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
let eU = { keyframes: eq, spring: er, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n3 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e10, s2 = { done: false, value: r10 }, l2 = n3 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eG = 1 / 60 * 1e3, eY = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eX = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eY()), eG), eK = true, eJ = false, eZ = false, eQ = { delta: 0, timestamp: 0 }, e0 = ["read", "update", "preRender", "render", "postRender"], e1 = e0.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n3 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n3 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n3 = t11.length) for (let r11 = 0; r11 < n3; r11++) {
      let n6 = t11[r11];
      n6(l2), o2.has(n6) && (s2.schedule(n6), e11());
    }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => eJ = true), e10), {}), e2 = e0.reduce((e10, t10) => {
  let r10 = e1[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eJ || e8(), r10.schedule(e11, t11, n3);
  }, e10;
}, {}), e4 = e0.reduce((e10, t10) => (e10[t10] = e1[t10].cancel, e10), {});
e0.reduce((e10, t10) => (e10[t10] = () => e1[t10].process(eQ), e10), {});
let e5 = (e10) => e1[e10].process(eQ), e3 = (e10) => {
  eJ = false, eQ.delta = eK ? eG : Math.max(Math.min(e10 - eQ.timestamp, 40), 1), eQ.timestamp = e10, eZ = true, e0.forEach(e5), eZ = false, eJ && (eK = false, eX(e3));
}, e8 = () => {
  eJ = true, eK = true, eZ || eX(e3);
};
function e6(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let e9 = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e2.update(t10, true), stop: () => e4.update(t10) };
};
function e7(e10) {
  let t10, r10, n3;
  var a2, { from: i2, autoplay: o2 = true, driver: s2 = e9, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, y2 = j(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: v2 } = y2, b2 = 0, x2 = y2.duration, w2 = false, k2 = true, C2 = function(e11) {
    if (Array.isArray(e11.to)) return eq;
    if (eU[e11.type]) return eU[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio")) ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta")) return er;
    return eq;
  }(y2);
  (null === (a2 = C2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(C2, i2, v2)) && (n3 = ej([0, 100], [i2, v2], { clamp: false }), i2 = 0, v2 = 100);
  let M2 = C2(Object.assign(Object.assign({}, y2), { from: i2, to: v2 }));
  return o2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = M2.next(Math.max(0, l2));
      r10 = e12.value, n3 && (r10 = n3(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === b2 && (null != x2 || (x2 = l2)), b2 < c2) {
        var a3, i3;
        a3 = l2, i3 = x2, (k2 ? a3 >= i3 + d2 : a3 <= -d2) && (b2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n6 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n6 ? e6(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = b2 % 2 == 0) : (l2 = e6(l2, x2, d2), "mirror" === u2 && M2.flipTarget()), w2 = false, m2 && m2());
      } else t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let te = (e10, t10) => 1 - 3 * t10 + 3 * e10, tt = (e10, t10) => 3 * t10 - 6 * e10, tr = (e10) => 3 * e10, tn = (e10, t10, r10) => ((te(t10, r10) * e10 + tt(t10, r10)) * e10 + tr(t10)) * e10, ta = (e10, t10, r10) => 3 * te(t10, r10) * e10 * e10 + 2 * tt(t10, r10) * e10 + tr(t10);
var ti = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, to = /[A-Z]|^ms/g, ts = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tl = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tc = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tu = (N = function(e10) {
  return tl(e10) ? e10 : e10.replace(to, "-$&").toLowerCase();
}, q = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === q[e10] && (q[e10] = N(e10)), q[e10];
}), td = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10) return t10.replace(ts, function(e11, t11, r10) {
        return Y = { name: t11, styles: r10, next: Y }, t11;
      });
  }
  return 1 === ti[e10] || tl(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tf(e10, t10, r10) {
  if (null == r10) return "";
  if (void 0 !== r10.__emotion_styles) return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim) return Y = { name: r10.name, styles: r10.styles, next: Y }, r10.name;
      if (void 0 !== r10.styles) {
        var n3 = r10.next;
        if (void 0 !== n3) for (; void 0 !== n3; ) Y = { name: n3.name, styles: n3.styles, next: Y }, n3 = n3.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n6 = "";
        if (Array.isArray(r11)) for (var a3 = 0; a3 < r11.length; a3++) n6 += tf(e11, t11, r11[a3]) + ";";
        else for (var i3 in r11) {
          var o3 = r11[i3];
          if ("object" != typeof o3) null != t11 && void 0 !== t11[o3] ? n6 += i3 + "{" + t11[o3] + "}" : tc(o3) && (n6 += tu(i3) + ":" + td(i3, o3) + ";");
          else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]])) for (var s2 = 0; s2 < o3.length; s2++) tc(o3[s2]) && (n6 += tu(i3) + ":" + td(i3, o3[s2]) + ";");
          else {
            var l2 = tf(e11, t11, o3);
            switch (i3) {
              case "animation":
              case "animationName":
                n6 += tu(i3) + ":" + l2 + ";";
                break;
              default:
                n6 += i3 + "{" + l2 + "}";
            }
          }
        }
        return n6;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = Y, i2 = r10(e10);
        return Y = a2, tf(e10, t10, i2);
      }
  }
  if (null == t10) return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var th = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
function tp() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tm = tp(), tg = { paddingX: [tm.paddingLeft, tm.paddingRight], paddingY: [tm.paddingTop, tm.paddingBottom], marginX: [tm.marginInlineStart, tm.marginInlineEnd], marginY: [tm.marginTop, tm.marginBottom], borderX: [tm.borderLeft, tm.borderRight], borderY: [tm.borderTop, tm.borderBottom], color: [tm.color, tm.fill], borderTopRadius: [tm.borderTopLeftRadius, tm.borderTopRightRadius], borderBottomRadius: [tm.borderBottomLeftRadius, tm.borderBottomRightRadius], borderRightRadius: [tm.borderTopRightRadius, tm.borderBottomRightRadius], borderLeftRadius: [tm.borderTopLeftRadius, tm.borderBottomLeftRadius], backgroundGradient: [tm.backgroundImage], boxSize: [tm.width, tm.height] }, ty = tp(), tv = { font: ty.fontFamily, shadow: ty.boxShadow, rounded: ty.borderRadius, roundedTop: ty.borderTopRadius, roundedBottom: ty.borderBottomRadius, roundedLeft: ty.borderLeftRadius, roundedRight: ty.borderRightRadius, bg: ty.background, bgImage: ty.backgroundImage, bgSize: ty.backgroundSize, bgPosition: ty.backgroundPosition, bgRepeat: ty.backgroundRepeat, bgAttachment: ty.backgroundAttachment, bgColor: ty.backgroundColor, bgGradient: ty.backgroundGradient, bgClip: ty.backgroundClip, pos: ty.position, p: ty.padding, pt: ty.paddingTop, pr: ty.paddingRight, pl: ty.paddingLeft, pb: ty.paddingBottom, ps: ty.paddingInlineStart, pe: ty.paddingInlineEnd, px: ty.paddingX, py: ty.paddingY, m: ty.margin, mt: ty.marginTop, mr: ty.marginRight, ml: ty.marginLeft, mb: ty.marginBottom, ms: ty.marginInlineStart, me: ty.marginInlineEnd, mx: ty.marginX, my: ty.marginY, w: ty.width, minW: ty.minWidth, maxW: ty.maxWidth, h: ty.height, minH: ty.minHeight, maxH: ty.maxHeight }, tb = tp(), tx = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  let n3 = [...t10];
  for (let e11 of t10) tv[e11] && n3.push(tv[e11]);
  return n3;
}, tw = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _tk = class _tk {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n3, extends: a2, ...i2 } = e10;
    if (a2) for (let e11 of a2) r10.push(...this.processAll(e11, t10));
    if (n3) {
      let e11 = {}, t11 = {};
      _tk.walkStateValues(n3, (r11, n6, a3) => {
        var i3;
        let o2 = `--${this.opt.varPrefix}-state-${n6.join("-")}`, s2 = null !== (i3 = _(n6)) && void 0 !== i3 ? i3 : "", l2 = {};
        this.process(l2, s2, r11, false), e11[o2] = l2[s2], S(t11, [...a3, s2], `var(${o2})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!R(i2)) {
      let e11 = {};
      this.processTo(e11, i2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n3 in t10) this.process(e10, n3, t10[n3], r10);
  }
  process(e10, t10, r10) {
    var n3, a2, i2, o2;
    let s2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (n3 = this.opt.mixins[t10]) || void 0 === n3 ? void 0 : n3.get(r10);
      if (a3) for (let t11 in a3) this.process(e10, t11, a3[t11], s2);
      return;
    }
    let l2 = t10;
    if (P(r10)) {
      e10[l2 = null !== (a2 = _tk.convertSelector(l2)) && void 0 !== a2 ? a2 : l2] = null !== (i2 = e10[l2]) && void 0 !== i2 ? i2 : {}, this.processTo(e10[l2], r10);
      return;
    }
    if (s2 && tg[l2 = null !== (o2 = tv[l2]) && void 0 !== o2 ? o2 : l2]) {
      for (let t11 of tg[l2]) e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[l2] = this.opt.processValue(l2, r10);
  }
};
__publicField(_tk, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_tk, "convertSelector", (e10) => {
  if (tw[e10]) return tw[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n3, a2] = t10.split("__");
      return a2 ? `${e11}[${C(n3)}='${C(a2)}']${r10}` : `${e11}[${C(n3)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_tk.supportedPseudoClasses[t10]) {
        let r12 = _tk.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n3] = t10.split("__"), a2 = C(r11);
      return n3 ? `${e11}[data-${a2}='${C(n3)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_tk, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n3, ...a2 } = e10;
  for (let e11 in a2) {
    var i2;
    let o2 = a2[e11], s2 = null !== (i2 = a2.default) && void 0 !== i2 ? i2 : r10.default, l2 = null != n3 ? n3 : M(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (P(o2)) {
      _tk.walkStateValues(o2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(o2, u2, c2);
  }
});
let tk = _tk;
var tC = ((U = tC || {}).var = "var", U.mixin = "mixin", U);
class tM {
  static create(e10, t10) {
    let { value: r10, on: n3, transform: a2 } = t10;
    return { type: e10, value: r10, on: n3, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tM.create("var", { value: e10, on: tx(tb.color, tb.bgColor, tb.outlineColor, tb.borderColor, tb.accentColor, tb.fill, tb.stroke), transform: (e11, t10) => T(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tM.create("var", { value: e10, on: tx(tb.gap, tb.rowGap, tb.columnGap, tb.top, tb.right, tb.bottom, tb.left, tb.m, tb.ms, tb.me, tb.mt, tb.mr, tb.mb, tb.ml, tb.mx, tb.my, tb.p, tb.ps, tb.pe, tb.pt, tb.pr, tb.pb, tb.pl, tb.px, tb.py) });
  }
  static boxSize(e10) {
    return tM.create("var", { value: e10, on: tx(tb.w, tb.minW, tb.maxW, tb.h, tb.minH, tb.maxH, tb.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tM.create("var", { value: e10, on: tx(tb.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tM.create("var", { value: e10, on: tx(tb.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tM.create("var", { value: e10, fallback: 0, on: tx(tb.rounded, tb.roundedTop, tb.roundedBottom, tb.roundedLeft, tb.roundedRight, tm.borderTopLeftRadius, tm.borderTopRightRadius, tm.borderBottomLeftRadius, tm.borderBottomRightRadius, tm.borderTopRightRadius, tm.borderBottomRightRadius, tm.borderTopLeftRadius, tm.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tM.create("var", { value: e10, on: tx(tb.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tM.create("var", { value: e10, on: tx(tb.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tM.create("var", { value: e10, on: tx(tb.font) });
  }
  static fontWeight(e10) {
    return tM.create("var", { value: e10, on: tx(tb.fontWeight) });
  }
  static letterSpacing(e10) {
    return tM.create("var", { value: e10, on: tx(tb.letterSpacing) });
  }
  static shadow(e10) {
    return tM.create("var", { value: e10, on: tx(tb.shadow) });
  }
  static customMixin(e10, t10) {
    return tM.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tP = (e10, t10, r10) => {
  let n3 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let i2 = t10[e11];
    if (e11 === t10.length - 1) {
      n3[i2] = r10;
      continue;
    }
    n3[i2] = null !== (a2 = n3[i2]) && void 0 !== a2 ? a2 : {}, n3 = n3[i2];
  }
};
const _t_ = class _t_ {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _t_.walkValues(e10.value, (n3, a2) => {
      let i2 = a2.join("."), o2 = (n6, a3) => {
        let i3 = e10.transform ? e10.transform(n6, t10) : r10(n6);
        if (O(i3)) for (let e11 in i3) a3(i3[e11], "default" === e11 ? "" : e11);
        else a3(i3, "");
      };
      if (S(this._cssVarRefs, [i2], t10(i2)), P(n3)) for (let e11 in n3) o2(n3[e11], (t11, r11) => {
        S(this._values, [`${i2}${r11 ? `/${r11}` : ""}`, e11], t11);
      });
      else o2(n3, (e11, t11) => {
        S(this._values, [`${i2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return D(this._values);
  }
  get(e10, t10, r10) {
    let n3 = this._values[e10];
    if (O(n3)) {
      var a2;
      return r10 ? n3[t10] : null !== (a2 = n3[t10]) && void 0 !== a2 ? a2 : n3[_t_.defaultMode];
    }
    return r10 ? t10 === _t_.defaultMode ? n3 : void 0 : n3;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_t_, "defaultMode", "_default");
__publicField(_t_, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (P(a2)) {
      if ($(a2, "_default")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      _t_.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
});
let t_ = _t_;
const _tS = class _tS {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tS.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      S(this._values, [r10], I(e11, "__mixin"));
    });
  }
  get tokens() {
    return D(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tS, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (P(a2)) {
      if ($(a2, "__mixin")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      _tS.walkValue(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
});
let tS = _tS;
let tR = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, tT = (e10) => {
  let t10 = M(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: A(tR, (e11) => L(t10, (t11, r10) => F(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, t$ = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tD = (e10) => B(e10) && $(e10, "token");
function tO(e10, t10) {
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
    __publicField(this, "transformFallback", (e10, t10) => _tA.propsCanBaseDp[e10] && E(t10) ? _tA.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n3;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n3 = this.mixins[t10]) || void 0 === n3 ? void 0 : n3.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n3, a2;
      if (tD(t10)) {
        let r11 = null === (n3 = this.propValues[e10]) || void 0 === n3 ? void 0 : n3.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new tk({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n3;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n3 = t10.mode) && void 0 !== n3 ? n3 : "light", S(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === tC.var) {
          let e11 = new t_(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a2] = e11, t11.on)) this.propValues[r11] = e11;
          for (let t12 of e11.tokens) for (let r11 of ["light", "dark"]) {
            let n6 = r11 === this.mode ? "_default" : `_${r11}`, i2 = e11.get(t12, n6, true);
            V(i2) || ("_default" === n6 ? S(this.cssVars, [this.cssVar(a2, t12)], i2) : S(this.cssVars, [n6, this.cssVar(a2, t12)], i2));
          }
          continue;
        }
        if (t11.type === tC.mixin) {
          let e11 = new tS(t11);
          for (let r11 of t11.on) this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tA(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${C(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n3 = null != t10 ? t10 : {};
    return n3.__emotion_styles = null !== (r10 = n3.__emotion_styles) && void 0 !== r10 ? r10 : function(e11, t11, r11) {
      if (1 === e11.length && "object" == typeof e11[0] && null !== e11[0] && void 0 !== e11[0].styles) return e11[0];
      var n6, a2 = true, i2 = "";
      Y = void 0;
      var o2 = e11[0];
      null == o2 || void 0 === o2.raw ? (a2 = false, i2 += tf(r11, t11, o2)) : i2 += o2[0];
      for (var s2 = 1; s2 < e11.length; s2++) i2 += tf(r11, t11, e11[s2]), a2 && (i2 += o2[s2]);
      th.lastIndex = 0;
      for (var l2 = ""; null !== (n6 = th.exec(i2)); ) l2 += "-" + n6[1];
      return { name: function(e12) {
        for (var t12, r12 = 0, n7 = 0, a3 = e12.length; a3 >= 4; ++n7, a3 -= 4) t12 = (65535 & (t12 = 255 & e12.charCodeAt(n7) | (255 & e12.charCodeAt(++n7)) << 8 | (255 & e12.charCodeAt(++n7)) << 16 | (255 & e12.charCodeAt(++n7)) << 24)) * 1540483477 + ((t12 >>> 16) * 59797 << 16), t12 ^= t12 >>> 24, r12 = (65535 & t12) * 1540483477 + ((t12 >>> 16) * 59797 << 16) ^ (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        switch (a3) {
          case 3:
            r12 ^= (255 & e12.charCodeAt(n7 + 2)) << 16;
          case 2:
            r12 ^= (255 & e12.charCodeAt(n7 + 1)) << 8;
          case 1:
            r12 ^= 255 & e12.charCodeAt(n7), r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        }
        return r12 ^= r12 >>> 13, (((r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16)) ^ r12 >>> 15) >>> 0).toString(36);
      }(i2) + l2, styles: i2, next: Y };
    }(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n3.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n3 = (e11, t11) => O(t11) ? { $type: e11, $value: A(t11, (t12) => n3(e11, t12).$value) } : T(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n6 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? H(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n6.startsWith("sys.") ? `{${n6}}` : `{seed.${n6}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let i2 = this.tokens[a2], o2 = (o3) => {
        for (let s2 of i2.tokens) if (!s2.includes("/")) {
          if (s2.startsWith("sys.")) {
            let e11 = i2.get(s2, "_default"), l2 = i2.get(s2, "_dark");
            tP(t10, [a2, ...s2.split(".")], n3(o3, e11)), e11 !== l2 && tP(r10, [a2, ...s2.split(".")], n3(o3, l2));
          } else tP(e10, [a2, ...s2.split(".")], n3(o3, i2.get(s2, "_default")));
        }
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
          tP(t10, [e11, ...i2.split(".")], n3(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: tT(t10), dark: tT(r10) };
  }
};
__publicField(_tA, "propsCanPercent", tI([...tM.boxSize({}).on]));
__publicField(_tA, "propsCanBaseDp", tI([...tM.boxSize({}).on, ...tM.space({}).on, ...tM.fontSize({}).on, ...tM.letterSpacing({}).on, ...tM.lineHeight({}).on, ...tM.rounded({}).on]));
let tA = _tA;
let tL = { shadow: tM.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tM.customMixin("elevation", { 0: tM.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tM.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tM.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tM.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tM.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tF = (e10, t10, r10, n3) => Object.assign(function(e11, t11, r11, n6) {
  if (e11 === t11 && r11 === n6) return eW;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12) a2[t12] = tn(0.1 * t12, e11, r11);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : tn(function(t12) {
    let n7 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t12; ++i3) n7 += 0.1;
    let o2 = n7 + (t12 - a2[--i3]) / (a2[i3 + 1] - a2[i3]) * 0.1, s2 = ta(o2, e11, r11);
    return s2 >= 1e-3 ? function(e12, t13, r12, n8) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = ta(t13, r12, n8);
        if (0 === a4) break;
        let i4 = tn(t13, r12, n8) - e12;
        t13 -= i4 / a4;
      }
      return t13;
    }(t12, o2, e11, r11) : 0 === s2 ? o2 : function(e12, t13, r12, n8, a3) {
      let i4, o3;
      let s3 = 0;
      do
        (i4 = tn(o3 = t13 + (r12 - t13) / 2, n8, a3) - e12) > 0 ? r12 = o3 : t13 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t12, n7, n7 + 0.1, e11, r11);
  }(i2), t11, n6);
}(e10, t10, r10, n3), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n3})` }), tB = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tF(0, 0, 1, 1), standard: Object.assign(tF(0.2, 0, 0, 1), { accelerate: tF(0.3, 0, 1, 1), decelerate: tF(0, 0, 0, 1) }), emphasized: Object.assign(tF(0.2, 0, 0, 1), { accelerate: tF(0.3, 0, 0.8, 0.15), decelerate: tF(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tF(0.4, 0, 0.2, 1), { decelerate: tF(0, 0, 0.2, 1), accelerate: tF(0.4, 0, 1, 1) }) } }, tV = (e10, a2) => {
  let i2 = null != a2 ? a2 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return t({ onComplete: k(), $default: k() }, (t10, a3) => {
    let o2, { slots: s2, emit: l2 } = a3, c2 = (t11, r10) => {
      o2 = e7({ ...e10, autoplay: true, onComplete: () => {
        r10(), l2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t11.style, e11);
      } });
    }, u2 = (e11, t11) => {
      o2 = e7({ ...i2, autoplay: true, onComplete: () => {
        t11(), l2("complete", "leave");
      }, onUpdate: (t12) => {
        Object.assign(e11.style, t12);
      } });
    }, d2 = () => {
      null == o2 || o2.stop();
    };
    return () => {
      var e11;
      return r(n, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e11 = s2.default) || void 0 === e11 ? void 0 : e11.call(s2) });
    };
  }, { name: "Transition" });
}, tE = { transitionDuration: tM.transitionDuration(tB.duration), transitionTimingFunction: tM.transitionTimingFunction({ linear: tB.easing.linear.toString(), standard: tB.easing.standard.toString(), "standard-accelerate": tB.easing.standard.accelerate.toString(), "standard-decelerate": tB.easing.standard.decelerate.toString(), emphasized: tB.easing.emphasized.toString(), "emphasized-decelerate": tB.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tB.easing.emphasized.accelerate.toString(), legacy: tB.easing.legacy.toString(), "legacy-decelerate": tB.easing.legacy.decelerate.toString(), "legacy-accelerate": tB.easing.legacy.accelerate.toString() }) };
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function tH(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tz(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tj(e10, t10) {
  return [e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2]];
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let tW = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tN = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tq = [95.047, 100, 108.883];
function tU(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tG(e10) {
  return tU(tZ(e10[0]), tZ(e10[1]), tZ(e10[2]));
}
function tY(e10) {
  var t10;
  return 116 * tQ(tj([tJ((t10 = e10) >> 16 & 255), tJ(t10 >> 8 & 255), tJ(255 & t10)], tW)[1] / 100) - 16;
}
function tX(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tK(e10) {
  return 116 * tQ(e10 / 100) - 16;
}
function tJ(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tZ(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tQ(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class t0 {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tq, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tX(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n3 - 42) / 92)), h2 = [100 / s2 * (f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2) + 1 - f2, 100 / l2 * f2 + 1 - f2, 100 / c2 * f2 + 1 - f2], p2 = 1 / (5 * n3 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, y2 = m2 * n3 + 0.1 * g2 * g2 * Math.cbrt(5 * n3), v2 = tX(a2) / r10[1], b2 = 1.48 + Math.sqrt(v2), x2 = 0.725 / Math.pow(v2, 0.2), w2 = [Math.pow(y2 * h2[0] * s2 / 100, 0.42), Math.pow(y2 * h2[1] * l2 / 100, 0.42), Math.pow(y2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)];
    return new t0(v2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2, x2, x2, d2, u2, h2, y2, Math.pow(y2, 0.25), b2);
  }
  constructor(e10, t10, r10, n3, a2, i2, o2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n3, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t0.DEFAULT = t0.make();
class t1 {
  constructor(e10, t10, r10, n3, a2, i2, o2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n3, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n3 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n3 * n3), 0.63);
  }
  static fromInt(e10) {
    return t1.fromIntInViewingConditions(e10, t0.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = tJ((16711680 & e10) >> 16), n3 = tJ((65280 & e10) >> 8), a2 = tJ(255 & e10), i2 = 0.41233895 * r10 + 0.35762064 * n3 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n3 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n3 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tH(l2) * d2 / (d2 + 27.13), m2 = 400 * tH(c2) * f2 / (f2 + 27.13), g2 = 400 * tH(u2) * h2 / (h2 + 27.13), y2 = (11 * p2 + -12 * m2 + g2) / 11, v2 = (p2 + m2 - 2 * g2) / 9, b2 = 180 * Math.atan2(v2, y2) / Math.PI, x2 = b2 < 0 ? b2 + 360 : b2 >= 360 ? b2 - 360 : b2, w2 = x2 * Math.PI / 180, k2 = 100 * Math.pow((40 * p2 + 20 * m2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, M2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x2 < 20.14 ? x2 + 360 : x2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(y2 * y2 + v2 * v2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = M2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(M2 * t10.c / (t10.aw + 4)), R2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new t1(x2, P2, k2, C2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), R2 * Math.cos(w2), R2 * Math.sin(w2));
  }
  static fromJch(e10, t10, r10) {
    return t1.fromJchInViewingConditions(e10, t10, r10, t0.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n3) {
    let a2 = 4 / n3.c * Math.sqrt(e10 / 100) * (n3.aw + 4) * n3.fLRoot, i2 = t10 * n3.fLRoot, o2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n3.c / (n3.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2);
    return new t1(r10, t10, e10, a2, i2, o2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return t1.fromUcsInViewingConditions(e10, t10, r10, t0.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n3) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n3.fLRoot, i2 = 180 / Math.PI * Math.atan2(r10, t10);
    return i2 < 0 && (i2 += 360), t1.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, i2, n3);
  }
  toInt() {
    return this.viewed(t0.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n3 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n3 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tH(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tH(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tH(p2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n6 = tN[0][0] * e11 + tN[0][1] * t11 + tN[0][2] * r11, a3 = tN[1][0] * e11 + tN[1][1] * t11 + tN[1][2] * r11, i3 = tN[2][0] * e11 + tN[2][1] * t11 + tN[2][2] * r11;
      return tU(tZ(n6), tZ(a3), tZ(i3));
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n3) {
    let a2 = n3.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), i2 = n3.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), o2 = n3.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n3.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n3.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n3.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tH(a2) * s2 / (s2 + 27.13), d2 = 400 * tH(i2) * l2 / (l2 + 27.13), f2 = 400 * tH(o2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, y2 = g2 * Math.PI / 180, v2 = 100 * Math.pow((40 * u2 + 20 * d2 + f2) / 20 * n3.nbb / n3.aw, n3.c * n3.z), b2 = 4 / n3.c * Math.sqrt(v2 / 100) * (n3.aw + 4) * n3.fLRoot, x2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n3.nc * n3.ncb * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n3.n), 0.73), w2 = x2 * Math.sqrt(v2 / 100), k2 = w2 * n3.fLRoot, C2 = 50 * Math.sqrt(x2 * n3.c / (n3.aw + 4)), M2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new t1(g2, w2, v2, b2, k2, C2, (1 + 100 * 7e-3) * v2 / (1 + 7e-3 * v2), M2 * Math.cos(y2), M2 * Math.sin(y2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n3 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n3 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tH(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tH(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tH(p2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2];
  }
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class t2 {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tH(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tj(e10, t2.SCALED_DISCOUNT_FROM_LINRGB), r10 = t2.chromaticAdaptation(t10[0]), n3 = t2.chromaticAdaptation(t10[1]), a2 = t2.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n3 - 2 * a2) / 9, (11 * r10 + -12 * n3 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return t2.sanitizeRadians(t10 - e10) < t2.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n3) {
    let a2 = t2.intercept(e10[n3], t10, r10[n3]);
    return t2.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = t2.Y_FROM_LINRGB[0], n3 = t2.Y_FROM_LINRGB[1], a2 = t2.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - i2 * n3 - o2 * a2) / r10;
      return t2.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - o2 * r10 - i2 * a2) / n3;
      return t2.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - i2 * r10 - o2 * n3) / a2;
      return t2.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n3 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = t2.nthVertex(e10, l2);
      if (c2[0] < 0) continue;
      let u2 = t2.hueOf(c2);
      if (!o2) {
        r10 = c2, n3 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || t2.areInCyclicOrder(a2, u2, i2)) && (s2 = false, t2.areInCyclicOrder(a2, t10, u2) ? (n3 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n3];
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
    let r10 = t2.bisectToSegment(e10, t10), n3 = r10[0], a2 = t2.hueOf(n3), i2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++) if (n3[e11] !== i2[e11]) {
      let r11 = -1, o2 = 255;
      n3[e11] < i2[e11] ? (r11 = t2.criticalPlaneBelow(t2.trueDelinearized(n3[e11])), o2 = t2.criticalPlaneAbove(t2.trueDelinearized(i2[e11]))) : (r11 = t2.criticalPlaneAbove(t2.trueDelinearized(n3[e11])), o2 = t2.criticalPlaneBelow(t2.trueDelinearized(i2[e11])));
      for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(o2 - r11)); s2++) {
        let s3 = Math.floor((r11 + o2) / 2), l2 = t2.CRITICAL_PLANES[s3], c2 = t2.setCoordinate(n3, l2, i2, e11), u2 = t2.hueOf(c2);
        t2.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n3 = c2, a2 = u2, r11 = s3);
      }
    }
    return t2.midpoint(n3, i2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10), r10 = Math.max(0, 27.13 * t10 / (400 - t10));
    return tH(e10) * Math.pow(r10, 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n3 = 11 * Math.sqrt(r10), a2 = t0.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n3 / 100, u2 = Math.pow((0 === t10 || 0 === n3 ? 0 : t10 / Math.sqrt(c2)) * i2, 1 / 0.9), d2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, f2 = 23 * (d2 + 0.305) * u2 / (23 * o2 + 11 * u2 * l2 + 108 * u2 * s2), h2 = f2 * l2, p2 = f2 * s2, m2 = (460 * d2 + 451 * h2 + 288 * p2) / 1403, g2 = (460 * d2 - 891 * h2 - 261 * p2) / 1403, y2 = (460 * d2 - 220 * h2 - 6300 * p2) / 1403, v2 = tj([t2.inverseChromaticAdaptation(m2), t2.inverseChromaticAdaptation(g2), t2.inverseChromaticAdaptation(y2)], t2.LINRGB_FROM_SCALED_DISCOUNT);
      if (v2[0] < 0 || v2[1] < 0 || v2[2] < 0) break;
      let b2 = t2.Y_FROM_LINRGB[0], x2 = t2.Y_FROM_LINRGB[1], w2 = t2.Y_FROM_LINRGB[2], k2 = b2 * v2[0] + x2 * v2[1] + w2 * v2[2];
      if (k2 <= 0) break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (v2[0] > 100.01 || v2[1] > 100.01 || v2[2] > 100.01) return 0;
        return tG(v2);
      }
      n3 -= (k2 - r10) * n3 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n3;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999) return function(e11) {
      let t11 = tZ(tX(e11));
      return tU(t11, t11, t11);
    }(r10);
    (n3 = e10 % 360) < 0 && (n3 += 360);
    let a2 = (e10 = n3) / 180 * Math.PI, i2 = tX(r10), o2 = t2.findResultByJ(a2, t10, i2);
    return 0 !== o2 ? o2 : tG(t2.bisectToLimit(i2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return t1.fromInt(t2.solveToInt(e10, t10, r10));
  }
}
t2.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], t2.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], t2.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], t2.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class t4 {
  static from(e10, t10, r10) {
    return new t4(t2.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new t4(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(t2.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(t2.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(t2.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = t1.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tY(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = t1.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tY(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = t1.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = t1.fromXyzInViewingConditions(t10[0], t10[1], t10[2], t0.make());
    return t4.from(r10.hue, r10.chroma, tK(t10[1]));
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class t5 {
  static ratioOfTones(e10, t10) {
    return e10 = tz(0, 100, e10), t10 = tz(0, 100, t10), t5.ratioOfYs(tX(e10), tX(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tX(e10), n3 = t10 * (r10 + 5) - 5, a2 = t5.ratioOfYs(n3, r10), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = tK(n3) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tX(e10), n3 = (r10 + 5) / t10 - 5, a2 = t5.ratioOfYs(r10, n3), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = tK(n3) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = t5.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = t5.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class t3 {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n3 = 65 > Math.round(e10.tone);
    return t10 && r10 && n3;
  }
  static fixIfDisliked(e10) {
    return t3.isDisliked(e10) ? t4.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class t8 {
  static fromPalette(e10) {
    var t10, r10;
    return new t8(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n3, a2, i2, o2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n3, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2) throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2) throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2) throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10) return t10;
    let r10 = this.getTone(e10), n3 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n3), n3;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n3 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === o2 || "lighter" === o2 && !e10.isDark || "darker" === o2 && e10.isDark, u2 = c2 ? n3 : a2, d2 = c2 ? a2 : n3, f2 = this.name === u2.name, h2 = e10.isDark ? 1 : -1, p2 = u2.contrastCurve.getContrast(e10.contrastLevel), m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = u2.tone(e10), y2 = t5.ratioOfTones(l2, g2) >= p2 ? g2 : t8.foregroundTone(l2, p2), v2 = d2.tone(e10), b2 = t5.ratioOfTones(l2, v2) >= m2 ? v2 : t8.foregroundTone(l2, m2);
      return t10 && (y2 = t8.foregroundTone(l2, p2), b2 = t8.foregroundTone(l2, m2)), (b2 - y2) * h2 >= i2 || ((b2 = tz(0, 100, y2 + i2 * h2)) - y2) * h2 >= i2 || (y2 = tz(0, 100, b2 - i2 * h2)), 50 <= y2 && y2 < 60 ? b2 = h2 > 0 ? Math.max(b2, (y2 = 60) + i2 * h2) : Math.min(b2, (y2 = 49) + i2 * h2) : 50 <= b2 && b2 < 60 && (b2 = s2 ? h2 > 0 ? Math.max(b2, (y2 = 60) + i2 * h2) : Math.min(b2, (y2 = 49) + i2 * h2) : h2 > 0 ? 60 : 49), f2 ? y2 : b2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background) return r10;
      let n3 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (t5.ratioOfTones(n3, r10) >= a2 || (r10 = t8.foregroundTone(n3, a2)), t10 && (r10 = t8.foregroundTone(n3, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = t5.ratioOfTones(49, n3) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n6] = [this.background, this.secondBackground], [i2, o2] = [t11(e10).getTone(e10), n6(e10).getTone(e10)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (t5.ratioOfTones(s2, r10) >= a2 && t5.ratioOfTones(l2, r10) >= a2) return r10;
        let c2 = t5.lighter(s2, a2), u2 = t5.darker(l2, a2), d2 = [];
        return (-1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2), t8.tonePrefersLightForeground(i2) || t8.tonePrefersLightForeground(o2)) ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = t5.lighterUnsafe(e10, t10), n3 = t5.darkerUnsafe(e10, t10), a2 = t5.ratioOfTones(r10, e10), i2 = t5.ratioOfTones(n3, e10);
    if (!t8.tonePrefersLightForeground(e10)) return i2 >= t10 || i2 >= a2 ? n3 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e11 ? r10 : n3;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return t8.tonePrefersLightForeground(e10) && !t8.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(G = X || (X = {}))[G.MONOCHROME = 0] = "MONOCHROME", G[G.NEUTRAL = 1] = "NEUTRAL", G[G.TONAL_SPOT = 2] = "TONAL_SPOT", G[G.VIBRANT = 3] = "VIBRANT", G[G.EXPRESSIVE = 4] = "EXPRESSIVE", G[G.FIDELITY = 5] = "FIDELITY", G[G.CONTENT = 6] = "CONTENT", G[G.RAINBOW = 7] = "RAINBOW", G[G.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class t6 {
  constructor(e10, t10, r10, n3) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n3;
  }
  getContrast(e10) {
    var t10, r10, n3, a2, i2, o2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n3 = (e10 - -1) / 1)) * t10 + n3 * r10) : e10 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e10 - 0) / 0.5)) * a2 + o2 * i2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class t9 {
  constructor(e10, t10, r10, n3, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n3, this.stayTogether = a2;
  }
}
function t7(e10) {
  return e10.variant === X.FIDELITY || e10.variant === X.CONTENT;
}
function re(e10) {
  return e10.variant === X.MONOCHROME;
}
function rt(e10, t10) {
  let r10 = e10.inViewingConditions(t0.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return t8.tonePrefersLightForeground(e10.tone) && !t8.toneAllowsLightForeground(r10.tone) ? t8.enableLightForeground(e10.tone) : t8.enableLightForeground(r10.tone);
}
class rr {
  static highestSurface(e10) {
    return e10.isDark ? rr.surfaceBright : rr.surfaceDim;
  }
}
rr.contentAccentToneDelta = 15, rr.primaryPaletteKeyColor = t8.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), rr.secondaryPaletteKeyColor = t8.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), rr.tertiaryPaletteKeyColor = t8.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), rr.neutralPaletteKeyColor = t8.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), rr.neutralVariantPaletteKeyColor = t8.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), rr.background = t8.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), rr.onBackground = t8.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rr.background, contrastCurve: new t6(3, 3, 4.5, 7) }), rr.surface = t8.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), rr.surfaceDim = t8.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), rr.surfaceBright = t8.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), rr.surfaceContainerLowest = t8.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), rr.surfaceContainerLow = t8.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), rr.surfaceContainer = t8.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), rr.surfaceContainerHigh = t8.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), rr.surfaceContainerHighest = t8.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), rr.onSurface = t8.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(4.5, 7, 11, 21) }), rr.surfaceVariant = t8.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), rr.onSurfaceVariant = t8.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(3, 4.5, 7, 11) }), rr.inverseSurface = t8.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), rr.inverseOnSurface = t8.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => rr.inverseSurface, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.outline = t8.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1.5, 3, 4.5, 7) }), rr.outlineVariant = t8.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7) }), rr.shadow = t8.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), rr.scrim = t8.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), rr.surfaceTint = t8.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), rr.primary = t8.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t9(rr.primaryContainer, rr.primary, 15, "nearer", false) }), rr.onPrimary = t8.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => rr.primary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.primaryContainer = t8.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t7(e10) ? rt(e10.sourceColorHct, e10) : re(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.primaryContainer, rr.primary, 15, "nearer", false) }), rr.onPrimaryContainer = t8.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t7(e10) ? t8.foregroundTone(rr.primaryContainer.tone(e10), 4.5) : re(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => rr.primaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.inversePrimary = t8.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => rr.inverseSurface, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.secondary = t8.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t9(rr.secondaryContainer, rr.secondary, 15, "nearer", false) }), rr.onSecondary = t8.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => rr.secondary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.secondaryContainer = t8.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (re(e10)) return e10.isDark ? 30 : 85;
  if (!t7(e10)) return t10;
  let r10 = function(e11, t11, r11, n3) {
    let a2 = r11, i2 = t4.from(e11, t11, r11);
    if (i2.chroma < t11) {
      let r12 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n3 ? -1 : 1;
        let o2 = t4.from(e11, t11, a2);
        if (r12 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11)) break;
        Math.abs(o2.chroma - t11) < Math.abs(i2.chroma - t11) && (i2 = o2), r12 = Math.max(r12, o2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return rt(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.secondaryContainer, rr.secondary, 15, "nearer", false) }), rr.onSecondaryContainer = t8.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => t7(e10) ? t8.foregroundTone(rr.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => rr.secondaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.tertiary = t8.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t9(rr.tertiaryContainer, rr.tertiary, 15, "nearer", false) }), rr.onTertiary = t8.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => rr.tertiary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.tertiaryContainer = t8.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (re(e10)) return e10.isDark ? 60 : 49;
  if (!t7(e10)) return e10.isDark ? 30 : 90;
  let t10 = rt(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return t3.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.tertiaryContainer, rr.tertiary, 15, "nearer", false) }), rr.onTertiaryContainer = t8.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? e10.isDark ? 0 : 100 : t7(e10) ? t8.foregroundTone(rr.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => rr.tertiaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.error = t8.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t9(rr.errorContainer, rr.error, 15, "nearer", false) }), rr.onError = t8.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => rr.error, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.errorContainer = t8.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.errorContainer, rr.error, 15, "nearer", false) }), rr.onErrorContainer = t8.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rr.errorContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.primaryFixed = t8.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? 40 : 90, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.primaryFixed, rr.primaryFixedDim, 10, "lighter", true) }), rr.primaryFixedDim = t8.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? 30 : 80, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.primaryFixed, rr.primaryFixedDim, 10, "lighter", true) }), rr.onPrimaryFixed = t8.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? 100 : 10, background: (e10) => rr.primaryFixedDim, secondBackground: (e10) => rr.primaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onPrimaryFixedVariant = t8.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => re(e10) ? 90 : 30, background: (e10) => rr.primaryFixedDim, secondBackground: (e10) => rr.primaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.secondaryFixed = t8.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => re(e10) ? 80 : 90, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.secondaryFixed, rr.secondaryFixedDim, 10, "lighter", true) }), rr.secondaryFixedDim = t8.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => re(e10) ? 70 : 80, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.secondaryFixed, rr.secondaryFixedDim, 10, "lighter", true) }), rr.onSecondaryFixed = t8.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => rr.secondaryFixedDim, secondBackground: (e10) => rr.secondaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onSecondaryFixedVariant = t8.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => re(e10) ? 25 : 30, background: (e10) => rr.secondaryFixedDim, secondBackground: (e10) => rr.secondaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.tertiaryFixed = t8.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? 40 : 90, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.tertiaryFixed, rr.tertiaryFixedDim, 10, "lighter", true) }), rr.tertiaryFixedDim = t8.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? 30 : 80, isBackground: true, background: (e10) => rr.highestSurface(e10), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e10) => new t9(rr.tertiaryFixed, rr.tertiaryFixedDim, 10, "lighter", true) }), rr.onTertiaryFixed = t8.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? 100 : 10, background: (e10) => rr.tertiaryFixedDim, secondBackground: (e10) => rr.tertiaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onTertiaryFixedVariant = t8.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => re(e10) ? 90 : 30, background: (e10) => rr.tertiaryFixedDim, secondBackground: (e10) => rr.tertiaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) });
class rn {
  static fromInt(e10) {
    let t10 = t4.fromInt(e10);
    return rn.fromHct(t10);
  }
  static fromHct(e10) {
    return new rn(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new rn(e10, t10, rn.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = t4.from(e10, t10, 50), n3 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let i2 = t4.from(e10, t10, 50 + a2), o2 = Math.abs(i2.chroma - t10);
      o2 < n3 && (n3 = o2, r10 = i2);
      let s2 = t4.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n3 && (n3 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = t4.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return t4.fromInt(this.tone(e10));
  }
}
class ra {
  static of(e10) {
    return new ra(e10, false);
  }
  static contentOf(e10) {
    return new ra(e10, true);
  }
  static fromColors(e10) {
    return ra.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return ra.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new ra(t10.primary, e10);
    if (t10.secondary) {
      let n3 = new ra(t10.secondary, e10);
      r10.a2 = n3.a1;
    }
    if (t10.tertiary) {
      let n3 = new ra(t10.tertiary, e10);
      r10.a3 = n3.a1;
    }
    if (t10.error) {
      let n3 = new ra(t10.error, e10);
      r10.error = n3.a1;
    }
    if (t10.neutral) {
      let n3 = new ra(t10.neutral, e10);
      r10.n1 = n3.n1;
    }
    if (t10.neutralVariant) {
      let n3 = new ra(t10.neutralVariant, e10);
      r10.n2 = n3.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = t4.fromInt(e10), n3 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = rn.fromHueAndChroma(n3, a2), this.a2 = rn.fromHueAndChroma(n3, a2 / 3), this.a3 = rn.fromHueAndChroma(n3 + 60, a2 / 2), this.n1 = rn.fromHueAndChroma(n3, Math.min(a2 / 12, 4)), this.n2 = rn.fromHueAndChroma(n3, Math.min(a2 / 6, 8))) : (this.a1 = rn.fromHueAndChroma(n3, Math.max(48, a2)), this.a2 = rn.fromHueAndChroma(n3, 16), this.a3 = rn.fromHueAndChroma(n3 + 60, 24), this.n1 = rn.fromHueAndChroma(n3, 4), this.n2 = rn.fromHueAndChroma(n3, 8)), this.error = rn.fromHueAndChroma(25, 84);
  }
}
function ri(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n3 = 8 === e10.length;
  if (!t10 && !r10 && !n3) throw Error("unexpected hex " + e10);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = ro(e10.slice(0, 1).repeat(2)), i2 = ro(e10.slice(1, 2).repeat(2)), o2 = ro(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = ro(e10.slice(0, 2)), i2 = ro(e10.slice(2, 4)), o2 = ro(e10.slice(4, 6))) : n3 && (a2 = ro(e10.slice(2, 4)), i2 = ro(e10.slice(4, 6)), o2 = ro(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function ro(e10) {
  return parseInt(e10, 16);
}
let rs = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rl = (e10) => {
  let t10 = { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10 };
  return [t10.r, t10.g, t10.b];
}, rc = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _ru = class _ru {
  constructor(e10) {
    this.seeds = e10;
  }
  static createRoleColorRuleBuilder(e10) {
    let t10 = {}, r10 = new Proxy({}, { get: (n3, a2) => "build" == a2 ? () => t10 : (n6, a3) => (t10[`${n6}${e10 ? `:${e10}` : ""}`] = a3, r10) });
    return r10;
  }
  static createRoleColorSourcePicker() {
    return new Proxy({}, { get: (e10, t10) => (e11) => [t10, e11] });
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = _ru.createRoleColorSourcePicker(), r10 = _ru.createRoleColorRuleBuilder().rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(87)).rule("outline-variant", t10.neutralVariant(80)).rule("surface", t10.neutral(99)).rule("on-surface", t10.neutral(10)).rule("surface-variant", t10.neutralVariant(90)).rule("on-surface-variant", t10.neutralVariant(30)).rule("surface-dim", t10.neutral(87)).rule("surface-bright", t10.neutral(98)).rule("surface-container-lowest", t10.neutral(100)).rule("surface-container-low", t10.neutral(96)).rule("surface-container", t10.neutral(94)).rule("surface-container-high", t10.neutral(92)).rule("surface-container-highest", t10.neutral(90)).rule("inverse-surface", t10.neutral(20)).rule("inverse-on-surface", t10.neutral(95)).rule("inverse-primary", t10.primary(80)), n3 = _ru.createRoleColorRuleBuilder("dark").rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(60)).rule("outline-variant", t10.neutralVariant(30)).rule("surface", t10.neutral(10)).rule("on-surface", t10.neutral(90)).rule("surface-variant", t10.neutralVariant(30)).rule("on-surface-variant", t10.neutralVariant(80)).rule("surface-dim", t10.neutral(6)).rule("surface-bright", t10.neutral(24)).rule("surface-container-lowest", t10.neutral(4)).rule("surface-container-low", t10.neutral(10)).rule("surface-container", t10.neutral(12)).rule("surface-container-high", t10.neutral(17)).rule("surface-container-highest", t10.neutral(22)).rule("inverse-surface", t10.neutral(90)).rule("inverse-on-surface", t10.neutral(20)).rule("inverse-primary", t10.primary(40));
    for (let e11 in this.seeds) e11.startsWith("neutral") || (r10 = r10.rule(e11, t10[e11](40)).rule(`on-${e11}`, t10[e11](100)).rule(`${e11}-container`, t10[e11](90)).rule(`on-${e11}-container`, t10[e11](10)), n3 = n3.rule(e11, t10[e11](80)).rule(`on-${e11}`, t10[e11](20)).rule(`${e11}-container`, t10[e11](30)).rule(`on-${e11}-container`, t10[e11](90)));
    return { ...r10.build(), ...n3.build(), ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let [i2, [o2, s2]] of Object.entries(e10)) if (this.seeds[o2]) {
      var n3, a2;
      if (i2.endsWith(":dark")) {
        r10[i2.split(":")[0]] = rs[s2] ? `${String(o2)}.${s2}` : null === (a2 = this.seeds[o2]) || void 0 === a2 ? void 0 : a2.tone(s2);
        continue;
      }
      t10[i2] = rs[s2] ? `${String(o2)}.${s2}` : null === (n3 = this.seeds[o2]) || void 0 === n3 ? void 0 : n3.tone(s2);
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = this.normalizeRoleRules(e10), [r10, n3] = this.getThemeRoleColors(t10), a2 = {}, i2 = {};
    for (let e11 in r10) if (a2[`${e11}`] = { _default: E(r10[e11]) ? rl(r10[e11]) : r10[e11], _dark: E(n3[e11]) ? rl(n3[e11]) : n3[e11] }, rc(e11) && (i2[`${e11}`] = tM.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), i2[`${e11}-container`] = tM.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        i2[`${e11}`] = tM.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      i2[`${e11}`] = tM.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), i2[`on-${e11}`] = tM.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let o2 = (e11) => Object.keys(rs).reduce((t11, r11) => Object.assign(t11, { [r11]: rl(e11.tone(parseInt(r11))) }), {});
    return { color: tM.color({ ...A(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: a2 }), containerStyle: tM.customMixin("containerStyle", { sys: i2 }) };
  }
};
__publicField(_ru, "toHEX", (e10) => `#${rl(e10).map((e11) => z(e11.toString(16), 2, "0")).join("")}`);
__publicField(_ru, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n3, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e10, l2 = ra.contentFromColors({ primary: ri(t10), secondary: r10 ? ri(r10) : void 0, tertiary: n3 ? ri(n3) : void 0, error: o2 ? ri(o2) : void 0 });
  return a2 && (l2.n1 = rn.fromHueAndChroma(ri(a2), 4)), i2 && (l2.n2 = rn.fromHueAndChroma(ri(i2), 8)), new _ru({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...A(s2, (e11) => rn.fromInt(ri(e11))) });
});
let ru = _ru;
let rd = tM.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rf = { font: tM.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tM.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tM.customMixin("textStyle", { sys: { "display-large": tM.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tM.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tM.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tM.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tM.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tM.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tM.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tM.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tM.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tM.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tM.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tM.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tM.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tM.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tM.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rh = ru.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rp = { ...rf, ...tE, ...tL, rounded: rd, ...rh.toDesignTokens({}) }, rm = tA.create(rp, { varPrefix: "vk" }), rg = a(() => rm, { name: "Theme" });
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
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var t11;
      this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r10 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n3 = function(e12) {
        if (e12.sheet) return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++) if (document.styleSheets[t12].ownerNode === e12) return document.styleSheets[t12];
      }(r10);
      try {
        n3.insertRule(e11, n3.cssRules.length);
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
}(), rv = "-ms-", rb = "-moz-", rx = "-webkit-", rw = "comm", rk = "rule", rC = "decl", rM = "@keyframes", rP = Math.abs, r_ = String.fromCharCode, rS = Object.assign;
function rR(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rT(e10, t10) {
  return e10.indexOf(t10);
}
function r$(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rD(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rO(e10) {
  return e10.length;
}
function rI(e10, t10) {
  return t10.push(e10), e10;
}
var rA = 1, rL = 1, rF = 0, rB = 0, rV = 0, rE = "";
function rH(e10, t10, r10, n3, a2, i2, o2) {
  return { value: e10, root: t10, parent: r10, type: n3, props: a2, children: i2, line: rA, column: rL, length: o2, return: "" };
}
function rz(e10, t10) {
  return rS(rH("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rj() {
  return rV = rB < rF ? r$(rE, rB++) : 0, rL++, 10 === rV && (rL = 1, rA++), rV;
}
function rW() {
  return r$(rE, rB);
}
function rN(e10) {
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
function rq(e10) {
  return rA = rL = 1, rF = rO(rE = e10), rB = 0, [];
}
function rU(e10) {
  var t10, r10;
  return (t10 = rB - 1, r10 = function e11(t11) {
    for (; rj(); ) switch (rV) {
      case t11:
        return rB;
      case 34:
      case 39:
        34 !== t11 && 39 !== t11 && e11(rV);
        break;
      case 40:
        41 === t11 && e11(t11);
        break;
      case 92:
        rj();
    }
    return rB;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rD(rE, t10, r10)).trim();
}
function rG(e10, t10, r10, n3, a2, i2, o2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? i2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n3; ++p2) for (var y2 = 0, v2 = rD(e10, d2 + 1, d2 = rP(m2 = o2[p2])), b2 = e10; y2 < h2; ++y2) (b2 = (m2 > 0 ? f2[y2] + " " + v2 : rR(v2, /&\f/g, f2[y2])).trim()) && (l2[g2++] = b2);
  return rH(e10, t10, r10, 0 === a2 ? rk : s2, l2, c2, u2);
}
function rY(e10, t10, r10, n3) {
  return rH(e10, t10, r10, rC, rD(e10, 0, n3), rD(e10, n3 + 1, -1), n3);
}
function rX(e10, t10) {
  for (var r10 = "", n3 = e10.length, a2 = 0; a2 < n3; a2++) r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function rK(e10, t10, r10, n3) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length) break;
    case "@import":
    case rC:
      return e10.return = e10.return || e10.value;
    case rw:
      return "";
    case rM:
      return e10.return = e10.value + "{" + rX(e10.children, n3) + "}";
    case rk:
      e10.value = e10.props.join(",");
  }
  return rO(r10 = rX(e10.children, n3)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rJ = function(e10, t10, r10) {
  for (var n3 = 0, a2 = 0; n3 = a2, a2 = rW(), 38 === n3 && 12 === a2 && (t10[r10] = 1), !rN(a2); ) rj();
  return rD(rE, e10, rB);
}, rZ = function(e10, t10) {
  var r10 = -1, n3 = 44;
  do
    switch (rN(n3)) {
      case 0:
        38 === n3 && 12 === rW() && (t10[r10] = 1), e10[r10] += rJ(rB - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rU(n3);
        break;
      case 4:
        if (44 === n3) {
          e10[++r10] = 58 === rW() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += r_(n3);
    }
  while (n3 = rj());
  return e10;
}, rQ = function(e10, t10) {
  var r10;
  return r10 = rZ(rq(e10), t10), rE = "", r10;
}, r0 = /* @__PURE__ */ new WeakMap(), r1 = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n3 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; ) if (!(r10 = r10.parent)) return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || r0.get(r10)) && !n3) {
      r0.set(e10, true);
      for (var a2 = [], i2 = rQ(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++) for (var c2 = 0; c2 < o2.length; c2++, l2++) e10.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, r2 = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, r4 = [function(e10, t10, r10, n3) {
  if (e10.length > -1 && !e10.return) switch (e10.type) {
    case rC:
      e10.return = function e11(t11, r11) {
        switch (45 ^ r$(t11, 0) ? (((r11 << 2 ^ r$(t11, 0)) << 2 ^ r$(t11, 1)) << 2 ^ r$(t11, 2)) << 2 ^ r$(t11, 3) : 0) {
          case 5103:
            return rx + "print-" + t11 + t11;
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
            return rx + t11 + t11;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return rx + t11 + rb + t11 + rv + t11 + t11;
          case 6828:
          case 4268:
            return rx + t11 + rv + t11 + t11;
          case 6165:
            return rx + t11 + rv + "flex-" + t11 + t11;
          case 5187:
            return rx + t11 + rR(t11, /(\w+).+(:[^]+)/, rx + "box-$1$2" + rv + "flex-$1$2") + t11;
          case 5443:
            return rx + t11 + rv + "flex-item-" + rR(t11, /flex-|-self/, "") + t11;
          case 4675:
            return rx + t11 + rv + "flex-line-pack" + rR(t11, /align-content|flex-|-self/, "") + t11;
          case 5548:
            return rx + t11 + rv + rR(t11, "shrink", "negative") + t11;
          case 5292:
            return rx + t11 + rv + rR(t11, "basis", "preferred-size") + t11;
          case 6060:
            return rx + "box-" + rR(t11, "-grow", "") + rx + t11 + rv + rR(t11, "grow", "positive") + t11;
          case 4554:
            return rx + rR(t11, /([^-])(transform)/g, "$1" + rx + "$2") + t11;
          case 6187:
            return rR(rR(rR(t11, /(zoom-|grab)/, rx + "$1"), /(image-set)/, rx + "$1"), t11, "") + t11;
          case 5495:
          case 3959:
            return rR(t11, /(image-set\([^]*)/, rx + "$1$`$1");
          case 4968:
            return rR(rR(t11, /(.+:)(flex-)?(.*)/, rx + "box-pack:$3" + rv + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rx + t11 + t11;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return rR(t11, /(.+)-inline(.+)/, rx + "$1$2") + t11;
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
            if (rO(t11) - 1 - r11 > 6) switch (r$(t11, r11 + 1)) {
              case 109:
                if (45 !== r$(t11, r11 + 4)) break;
              case 102:
                return rR(t11, /(.+:)(.+)-([^]+)/, "$1" + rx + "$2-$3$1" + rb + (108 == r$(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
              case 115:
                return ~rT(t11, "stretch") ? e11(rR(t11, "stretch", "fill-available"), r11) + t11 : t11;
            }
            break;
          case 4949:
            if (115 !== r$(t11, r11 + 1)) break;
          case 6444:
            switch (r$(t11, rO(t11) - 3 - (~rT(t11, "!important") && 10))) {
              case 107:
                return rR(t11, ":", ":" + rx) + t11;
              case 101:
                return rR(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rx + (45 === r$(t11, 14) ? "inline-" : "") + "box$3$1" + rx + "$2$3$1" + rv + "$2box$3") + t11;
            }
            break;
          case 5936:
            switch (r$(t11, r11 + 11)) {
              case 114:
                return rx + t11 + rv + rR(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
              case 108:
                return rx + t11 + rv + rR(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
              case 45:
                return rx + t11 + rv + rR(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
            }
            return rx + t11 + rv + t11 + t11;
        }
        return t11;
      }(e10.value, e10.length);
      break;
    case rM:
      return rX([rz(e10, { value: rR(e10.value, "@", "@" + rx) })], n3);
    case rk:
      if (e10.length) {
        var a2, i2;
        return a2 = e10.props, i2 = function(t11) {
          var r11;
          switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
            case ":read-only":
            case ":read-write":
              return rX([rz(e10, { props: [rR(t11, /:(read-\w+)/, ":" + rb + "$1")] })], n3);
            case "::placeholder":
              return rX([rz(e10, { props: [rR(t11, /:(plac\w+)/, ":" + rx + "input-$1")] }), rz(e10, { props: [rR(t11, /:(plac\w+)/, ":" + rb + "$1")] }), rz(e10, { props: [rR(t11, /:(plac\w+)/, rv + "input-$1")] })], n3);
          }
          return "";
        }, a2.map(i2).join("");
      }
  }
}], r5 = function(e10) {
  var t10, r10, n3, a2, i2, o2, s2 = e10.key;
  if ("css" === s2) {
    var l2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c2 = e10.stylisPlugins || r4, u2 = {}, d2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++) u2[t11[r11]] = true;
    d2.push(e11);
  });
  var f2 = (r10 = (t10 = [r1, r2].concat(c2, [rK, (n3 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n3(e11);
  })])).length, function(e11, n6, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++) o3 += t10[s3](e11, n6, a3, i3) || "";
    return o3;
  }), h2 = function(e11) {
    var t11, r11;
    return rX((r11 = function e12(t12, r12, n6, a3, i3, o3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m2 = 0, g2 = 0, y2 = 1, v2 = 1, b2 = 1, x2 = 0, w2 = "", k2 = i3, C2 = o3, M2 = a3, P2 = w2; v2; ) switch (g2 = x2, x2 = rj()) {
        case 40:
          if (108 != g2 && 58 == r$(P2, h3 - 1)) {
            -1 != rT(P2 += rR(rU(x2), "&", "&\f"), "&\f") && (b2 = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          P2 += rU(x2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          P2 += function(e13) {
            for (; rV = rW(); ) if (rV < 33) rj();
            else break;
            return rN(e13) > 2 || rN(rV) > 3 ? "" : " ";
          }(g2);
          break;
        case 92:
          P2 += function(e13, t13) {
            for (var r13; --t13 && rj() && !(rV < 48) && !(rV > 102) && (!(rV > 57) || !(rV < 65)) && (!(rV > 70) || !(rV < 97)); ) ;
            return r13 = rB + (t13 < 6 && 32 == rW() && 32 == rj()), rD(rE, e13, r13);
          }(rB - 1, 7);
          continue;
        case 47:
          switch (rW()) {
            case 42:
            case 47:
              rI(rH(u3 = function(e13, t13) {
                for (; rj(); ) if (e13 + rV === 57) break;
                else if (e13 + rV === 84 && 47 === rW()) break;
                return "/*" + rD(rE, t13, rB - 1) + "*" + r_(47 === e13 ? e13 : rj());
              }(rj(), rB), r12, n6, rw, r_(rV), rD(u3, 2, -2), 0), c3);
              break;
            default:
              P2 += "/";
          }
          break;
        case 123 * y2:
          l3[d3++] = rO(P2) * b2;
        case 125 * y2:
        case 59:
        case 0:
          switch (x2) {
            case 0:
            case 125:
              v2 = 0;
            case 59 + f3:
              -1 == b2 && (P2 = rR(P2, /\f/g, "")), m2 > 0 && rO(P2) - h3 && rI(m2 > 32 ? rY(P2 + ";", a3, n6, h3 - 1) : rY(rR(P2, " ", "") + ";", a3, n6, h3 - 2), c3);
              break;
            case 59:
              P2 += ";";
            default:
              if (rI(M2 = rG(P2, r12, n6, d3, f3, i3, l3, w2, k2 = [], C2 = [], h3), o3), 123 === x2) {
                if (0 === f3) e12(P2, r12, M2, M2, k2, o3, h3, l3, C2);
                else switch (99 === p3 && 110 === r$(P2, 3) ? 100 : p3) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    e12(t12, M2, M2, a3 && rI(rG(t12, M2, M2, 0, 0, i3, l3, w2, i3, k2 = [], h3), C2), i3, C2, h3, l3, a3 ? k2 : C2);
                    break;
                  default:
                    e12(P2, M2, M2, M2, [""], C2, 0, l3, C2);
                }
              }
          }
          d3 = f3 = m2 = 0, y2 = b2 = 1, w2 = P2 = "", h3 = s3;
          break;
        case 58:
          h3 = 1 + rO(P2), m2 = g2;
        default:
          if (y2 < 1) {
            if (123 == x2) --y2;
            else if (125 == x2 && 0 == y2++ && 125 == (rV = rB > 0 ? r$(rE, --rB) : 0, rL--, 10 === rV && (rL = 1, rA--), rV)) continue;
          }
          switch (P2 += r_(x2), x2 * y2) {
            case 38:
              b2 = f3 > 0 ? 1 : (P2 += "\f", -1);
              break;
            case 44:
              l3[d3++] = (rO(P2) - 1) * b2, b2 = 1;
              break;
            case 64:
              45 === rW() && (P2 += rU(rj())), p3 = rW(), f3 = h3 = rO(w2 = P2 += function(e13) {
                for (; !rN(rW()); ) rj();
                return rD(rE, e13, rB);
              }(rB)), x2++;
              break;
            case 45:
              45 === g2 && 2 == rO(P2) && (y2 = 0);
          }
      }
      return o3;
    }("", null, null, null, [""], t11 = rq(t11 = e11), 0, [0], t11), rE = "", r11), f2);
  };
  i2 = function(e11, t11, r11, n6) {
    o2 = r11, h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n6 && (p2.inserted[t11.name] = true);
  };
  var p2 = { key: s2, sheet: new ry({ key: s2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u2, registered: {}, insert: i2 };
  return p2.sheet.hydrate(d2), p2;
}, r3 = function(e10, t10, r10) {
  var n3 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n3] && (e10.registered[n3] = t10.styles);
}, r8 = function(e10, t10, r10) {
  r3(e10, t10, r10);
  var n3 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n3 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let r6 = a(() => r5({ key: "css" }), { name: "Cache" }), r9 = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping) e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      r8(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, r7 = t({ sx: k(), component: k().optional().default("div") }, (e10, t10) => {
  var n3;
  let { slots: a2, expose: s2 } = t10, l2 = rg.use(), c2 = r6.use(), u2 = l2.unstable_css(c2, null !== (n3 = e10.sx) && void 0 !== n3 ? n3 : {}), d2 = () => "0" !== u2.name ? `${c2.key}-${u2.name}` : "", f2 = r9(c2);
  i(() => {
    f2({ serialized: u2, isStringTag: true });
  });
  let h2 = o();
  return s2({ $$forwardRef: h2 }), () => {
    var t11;
    return r(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: h2, class: d2(), children: a2 });
  };
});
function ne() {
  let e10;
  for (var n3 = arguments.length, a2 = Array(n3), o2 = 0; o2 < n3; o2++) a2[o2] = arguments[o2];
  let f2 = "div", h2 = {}, p2 = {};
  for (let t10 of a2) {
    if (B(t10)) {
      e10 = t10;
      continue;
    }
    if (T(t10) || s(t10)) {
      f2 = t10;
      continue;
    }
    V(e10) && l(t10) ? h2 = t10 : p2 = t10;
  }
  return null != e10 || (e10 = (e11, t10) => (n6) => {
    let a3 = {};
    for (let t11 in e11) "component" !== t11 && "sx" !== t11 && e11[t11] && (a3[`data-${t11}`] = e11[t11]);
    return r(n6, { ...a3, children: t10.slots });
  }), (r10) => {
    let n6 = Object.assign(t({ ...h2, sx: k().optional(), component: k().optional() }, (t10, a3) => {
      let o3 = rg.use(), s2 = r6.use(), l2 = r9(s2), h3 = c(""), p3 = o3.unstable_css(s2, r10), m2 = () => ("0" !== p3.name ? `${s2.key}-${p3.name}${h3.value}` : `${h3.value}`) + (n6.name ? ` ${n6.name}` : "");
      if (f2.__styled) {
        var g2;
        let e11 = o3.unstable_css(s2, null !== (g2 = t10.sx) && void 0 !== g2 ? g2 : {});
        "0" !== e11.name && (h3.value = ` ${s2.key}-${e11.name}`), i(() => {
          l2({ serialized: p3, isStringTag: true }), l2({ serialized: e11, isStringTag: true });
        });
      } else u(() => {
        l2({ serialized: p3, isStringTag: true });
      });
      let y2 = e10(t10, a3);
      return () => {
        if (f2.__styled) {
          let e12 = y2(f2);
          return e12 ? d(e12, { component: t10.component, class: m2() }) : null;
        }
        let e11 = y2(r7);
        return e11 ? d(e11, { component: t10.component || f2, sx: t10.sx, class: m2() }) : null;
      };
    }, p2), { __styled: true });
    return n6.toString = () => `.${n6.name}`, n6;
  };
}
let nt = t((e10) => {
  let { styles: t10 } = e10, r10 = rg.use(), n3 = r6.use(), a2 = r9(n3), i2 = r10.unstable_css(n3, T(t10) ? { "&": t10 } : t10);
  return u(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}, { displayName: "GlobalStyle", props: ["styles"] }), nr = t(() => {
  let e10 = rg.use().rootCSSVars;
  return () => r(nt, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}, { displayName: "CSSReset" }), nn = a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), na = a(() => new ni(c(null), c(null), () => false), { name: "Overlay" });
class ni {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = f(this.triggerRef), r10 = f(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let no = t((e10, t10) => {
  var n3;
  let { slots: a2, attrs: i2, emit: o2 } = t10, s2 = e10.contentRef || c(null), l2 = new ni(null !== (n3 = e10.triggerRef) && void 0 !== n3 ? n3 : c(null), s2, () => !!e10.isOpen), u2 = nn.use();
  return h(na.use().add(l2)), window && p(m(s2, "value"), v((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      l2.isClickInside(e12) || o2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), v((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && l2.topmost() && o2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), y()), () => {
    var t11;
    let n6 = e10.isOpen ? d(r("div", { ...i2, ref: s2, style: e10.style, children: r(na, { value: l2, children: null === (t11 = a2.default) || void 0 === t11 ? void 0 : t11.call(a2) }) }), { onVnodeBeforeMount: () => {
      o2("content-before-mount");
    } }) : null;
    return r(g, { to: u2.mountPoint(), children: a2.transition ? a2.transition({ content: n6 }) : n6 });
  };
}, { name: "Overlay", inheritAttrs: false }, { displayName: "Overlay", props: ["isOpen", "style", "contentRef", "triggerRef"], emits: ["click-outside", "esc-keydown", "content-before-mount"] }), ns = Math.min, nl = Math.max, nc = Math.round, nu = Math.floor, nd = (e10) => ({ x: e10, y: e10 }), nf = { left: "right", right: "left", bottom: "top", top: "bottom" }, nh = { start: "end", end: "start" };
function np(e10, t10) {
  return "function" == typeof e10 ? e10(t10) : e10;
}
function nm(e10) {
  return e10.split("-")[0];
}
function ng(e10) {
  return e10.split("-")[1];
}
function ny(e10) {
  return "x" === e10 ? "y" : "x";
}
function nv(e10) {
  return "y" === e10 ? "height" : "width";
}
function nb(e10) {
  return ["top", "bottom"].includes(nm(e10)) ? "y" : "x";
}
function nx(e10) {
  return e10.replace(/start|end/g, (e11) => nh[e11]);
}
function nw(e10) {
  return e10.replace(/left|right|bottom|top/g, (e11) => nf[e11]);
}
function nk(e10) {
  let { x: t10, y: r10, width: n3, height: a2 } = e10;
  return { width: n3, height: a2, top: r10, left: t10, right: t10 + n3, bottom: r10 + a2, x: t10, y: r10 };
}
function nC(e10, t10, r10) {
  let n3, { reference: a2, floating: i2 } = e10, o2 = nb(t10), s2 = ny(nb(t10)), l2 = nv(s2), c2 = nm(t10), u2 = "y" === o2, d2 = a2.x + a2.width / 2 - i2.width / 2, f2 = a2.y + a2.height / 2 - i2.height / 2, h2 = a2[l2] / 2 - i2[l2] / 2;
  switch (c2) {
    case "top":
      n3 = { x: d2, y: a2.y - i2.height };
      break;
    case "bottom":
      n3 = { x: d2, y: a2.y + a2.height };
      break;
    case "right":
      n3 = { x: a2.x + a2.width, y: f2 };
      break;
    case "left":
      n3 = { x: a2.x - i2.width, y: f2 };
      break;
    default:
      n3 = { x: a2.x, y: a2.y };
  }
  switch (ng(t10)) {
    case "start":
      n3[s2] -= h2 * (r10 && u2 ? -1 : 1);
      break;
    case "end":
      n3[s2] += h2 * (r10 && u2 ? -1 : 1);
  }
  return n3;
}
let nM = async (e10, t10, r10) => {
  let { placement: n3 = "bottom", strategy: a2 = "absolute", middleware: i2 = [], platform: o2 } = r10, s2 = i2.filter(Boolean), l2 = await (null == o2.isRTL ? void 0 : o2.isRTL(t10)), c2 = await o2.getElementRects({ reference: e10, floating: t10, strategy: a2 }), { x: u2, y: d2 } = nC(c2, n3, l2), f2 = n3, h2 = {}, p2 = 0;
  for (let r11 = 0; r11 < s2.length; r11++) {
    let { name: i3, fn: m2 } = s2[r11], { x: g2, y: y2, data: v2, reset: b2 } = await m2({ x: u2, y: d2, initialPlacement: n3, placement: f2, strategy: a2, middlewareData: h2, rects: c2, platform: o2, elements: { reference: e10, floating: t10 } });
    u2 = null != g2 ? g2 : u2, d2 = null != y2 ? y2 : d2, h2 = { ...h2, [i3]: { ...h2[i3], ...v2 } }, b2 && p2 <= 50 && (p2++, "object" == typeof b2 && (b2.placement && (f2 = b2.placement), b2.rects && (c2 = true === b2.rects ? await o2.getElementRects({ reference: e10, floating: t10, strategy: a2 }) : b2.rects), { x: u2, y: d2 } = nC(c2, f2, l2)), r11 = -1);
  }
  return { x: u2, y: d2, placement: f2, strategy: a2, middlewareData: h2 };
};
async function nP(e10, t10) {
  var r10;
  void 0 === t10 && (t10 = {});
  let { x: n3, y: a2, platform: i2, rects: o2, elements: s2, strategy: l2 } = e10, { boundary: c2 = "clippingAncestors", rootBoundary: u2 = "viewport", elementContext: d2 = "floating", altBoundary: f2 = false, padding: h2 = 0 } = np(t10, e10), p2 = "number" != typeof h2 ? { top: 0, right: 0, bottom: 0, left: 0, ...h2 } : { top: h2, right: h2, bottom: h2, left: h2 }, m2 = s2[f2 ? "floating" === d2 ? "reference" : "floating" : d2], g2 = nk(await i2.getClippingRect({ element: null == (r10 = await (null == i2.isElement ? void 0 : i2.isElement(m2))) || r10 ? m2 : m2.contextElement || await (null == i2.getDocumentElement ? void 0 : i2.getDocumentElement(s2.floating)), boundary: c2, rootBoundary: u2, strategy: l2 })), y2 = "floating" === d2 ? { x: n3, y: a2, width: o2.floating.width, height: o2.floating.height } : o2.reference, v2 = await (null == i2.getOffsetParent ? void 0 : i2.getOffsetParent(s2.floating)), b2 = await (null == i2.isElement ? void 0 : i2.isElement(v2)) && await (null == i2.getScale ? void 0 : i2.getScale(v2)) || { x: 1, y: 1 }, x2 = nk(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s2, rect: y2, offsetParent: v2, strategy: l2 }) : y2);
  return { top: (g2.top - x2.top + p2.top) / b2.y, bottom: (x2.bottom - g2.bottom + p2.bottom) / b2.y, left: (g2.left - x2.left + p2.left) / b2.x, right: (x2.right - g2.right + p2.right) / b2.x };
}
function n_() {
  return "undefined" != typeof window;
}
function nS(e10) {
  return n$(e10) ? (e10.nodeName || "").toLowerCase() : "#document";
}
function nR(e10) {
  var t10;
  return (null == e10 || null == (t10 = e10.ownerDocument) ? void 0 : t10.defaultView) || window;
}
function nT(e10) {
  var t10;
  return null == (t10 = (n$(e10) ? e10.ownerDocument : e10.document) || window.document) ? void 0 : t10.documentElement;
}
function n$(e10) {
  return !!n_() && (e10 instanceof Node || e10 instanceof nR(e10).Node);
}
function nD(e10) {
  return !!n_() && (e10 instanceof Element || e10 instanceof nR(e10).Element);
}
function nO(e10) {
  return !!n_() && (e10 instanceof HTMLElement || e10 instanceof nR(e10).HTMLElement);
}
function nI(e10) {
  return !!n_() && "undefined" != typeof ShadowRoot && (e10 instanceof ShadowRoot || e10 instanceof nR(e10).ShadowRoot);
}
function nA(e10) {
  let { overflow: t10, overflowX: r10, overflowY: n3, display: a2 } = nE(e10);
  return /auto|scroll|overlay|hidden|clip/.test(t10 + n3 + r10) && !["inline", "contents"].includes(a2);
}
function nL(e10) {
  return [":popover-open", ":modal"].some((t10) => {
    try {
      return e10.matches(t10);
    } catch (e11) {
      return false;
    }
  });
}
function nF(e10) {
  let t10 = nB(), r10 = nD(e10) ? nE(e10) : e10;
  return "none" !== r10.transform || "none" !== r10.perspective || !!r10.containerType && "normal" !== r10.containerType || !t10 && !!r10.backdropFilter && "none" !== r10.backdropFilter || !t10 && !!r10.filter && "none" !== r10.filter || ["transform", "perspective", "filter"].some((e11) => (r10.willChange || "").includes(e11)) || ["paint", "layout", "strict", "content"].some((e11) => (r10.contain || "").includes(e11));
}
function nB() {
  return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
function nV(e10) {
  return ["html", "body", "#document"].includes(nS(e10));
}
function nE(e10) {
  return nR(e10).getComputedStyle(e10);
}
function nH(e10) {
  return nD(e10) ? { scrollLeft: e10.scrollLeft, scrollTop: e10.scrollTop } : { scrollLeft: e10.scrollX, scrollTop: e10.scrollY };
}
function nz(e10) {
  if ("html" === nS(e10)) return e10;
  let t10 = e10.assignedSlot || e10.parentNode || nI(e10) && e10.host || nT(e10);
  return nI(t10) ? t10.host : t10;
}
function nj(e10, t10, r10) {
  var n3;
  void 0 === t10 && (t10 = []), void 0 === r10 && (r10 = true);
  let a2 = function e11(t11) {
    let r11 = nz(t11);
    return nV(r11) ? t11.ownerDocument ? t11.ownerDocument.body : t11.body : nO(r11) && nA(r11) ? r11 : e11(r11);
  }(e10), i2 = a2 === (null == (n3 = e10.ownerDocument) ? void 0 : n3.body), o2 = nR(a2);
  if (i2) {
    let e11 = nW(o2);
    return t10.concat(o2, o2.visualViewport || [], nA(a2) ? a2 : [], e11 && r10 ? nj(e11) : []);
  }
  return t10.concat(a2, nj(a2, [], r10));
}
function nW(e10) {
  return e10.parent && Object.getPrototypeOf(e10.parent) ? e10.frameElement : null;
}
function nN(e10) {
  let t10 = nE(e10), r10 = parseFloat(t10.width) || 0, n3 = parseFloat(t10.height) || 0, a2 = nO(e10), i2 = a2 ? e10.offsetWidth : r10, o2 = a2 ? e10.offsetHeight : n3, s2 = nc(r10) !== i2 || nc(n3) !== o2;
  return s2 && (r10 = i2, n3 = o2), { width: r10, height: n3, $: s2 };
}
function nq(e10) {
  return nD(e10) ? e10 : e10.contextElement;
}
function nU(e10) {
  let t10 = nq(e10);
  if (!nO(t10)) return nd(1);
  let r10 = t10.getBoundingClientRect(), { width: n3, height: a2, $: i2 } = nN(t10), o2 = (i2 ? nc(r10.width) : r10.width) / n3, s2 = (i2 ? nc(r10.height) : r10.height) / a2;
  return o2 && Number.isFinite(o2) || (o2 = 1), s2 && Number.isFinite(s2) || (s2 = 1), { x: o2, y: s2 };
}
let nG = nd(0);
function nY(e10) {
  let t10 = nR(e10);
  return nB() && t10.visualViewport ? { x: t10.visualViewport.offsetLeft, y: t10.visualViewport.offsetTop } : nG;
}
function nX(e10, t10, r10, n3) {
  var a2;
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  let i2 = e10.getBoundingClientRect(), o2 = nq(e10), s2 = nd(1);
  t10 && (n3 ? nD(n3) && (s2 = nU(n3)) : s2 = nU(e10));
  let l2 = (void 0 === (a2 = r10) && (a2 = false), n3 && (!a2 || n3 === nR(o2)) && a2) ? nY(o2) : nd(0), c2 = (i2.left + l2.x) / s2.x, u2 = (i2.top + l2.y) / s2.y, d2 = i2.width / s2.x, f2 = i2.height / s2.y;
  if (o2) {
    let e11 = nR(o2), t11 = n3 && nD(n3) ? nR(n3) : n3, r11 = e11, a3 = nW(r11);
    for (; a3 && n3 && t11 !== r11; ) {
      let e12 = nU(a3), t12 = a3.getBoundingClientRect(), n6 = nE(a3), i3 = t12.left + (a3.clientLeft + parseFloat(n6.paddingLeft)) * e12.x, o3 = t12.top + (a3.clientTop + parseFloat(n6.paddingTop)) * e12.y;
      c2 *= e12.x, u2 *= e12.y, d2 *= e12.x, f2 *= e12.y, c2 += i3, u2 += o3, a3 = nW(r11 = nR(a3));
    }
  }
  return nk({ width: d2, height: f2, x: c2, y: u2 });
}
function nK(e10, t10) {
  let r10 = nH(e10).scrollLeft;
  return t10 ? t10.left + r10 : nX(nT(e10)).left + r10;
}
function nJ(e10, t10, r10) {
  let n3;
  if ("viewport" === t10) n3 = function(e11, t11) {
    let r11 = nR(e11), n6 = nT(e11), a2 = r11.visualViewport, i2 = n6.clientWidth, o2 = n6.clientHeight, s2 = 0, l2 = 0;
    if (a2) {
      i2 = a2.width, o2 = a2.height;
      let e12 = nB();
      (!e12 || e12 && "fixed" === t11) && (s2 = a2.offsetLeft, l2 = a2.offsetTop);
    }
    return { width: i2, height: o2, x: s2, y: l2 };
  }(e10, r10);
  else if ("document" === t10) n3 = function(e11) {
    let t11 = nT(e11), r11 = nH(e11), n6 = e11.ownerDocument.body, a2 = nl(t11.scrollWidth, t11.clientWidth, n6.scrollWidth, n6.clientWidth), i2 = nl(t11.scrollHeight, t11.clientHeight, n6.scrollHeight, n6.clientHeight), o2 = -r11.scrollLeft + nK(e11), s2 = -r11.scrollTop;
    return "rtl" === nE(n6).direction && (o2 += nl(t11.clientWidth, n6.clientWidth) - a2), { width: a2, height: i2, x: o2, y: s2 };
  }(nT(e10));
  else if (nD(t10)) n3 = function(e11, t11) {
    let r11 = nX(e11, true, "fixed" === t11), n6 = r11.top + e11.clientTop, a2 = r11.left + e11.clientLeft, i2 = nO(e11) ? nU(e11) : nd(1), o2 = e11.clientWidth * i2.x;
    return { width: o2, height: e11.clientHeight * i2.y, x: a2 * i2.x, y: n6 * i2.y };
  }(t10, r10);
  else {
    let r11 = nY(e10);
    n3 = { ...t10, x: t10.x - r11.x, y: t10.y - r11.y };
  }
  return nk(n3);
}
function nZ(e10) {
  return "static" === nE(e10).position;
}
function nQ(e10, t10) {
  if (!nO(e10) || "fixed" === nE(e10).position) return null;
  if (t10) return t10(e10);
  let r10 = e10.offsetParent;
  return nT(e10) === r10 && (r10 = r10.ownerDocument.body), r10;
}
function n0(e10, t10) {
  let r10 = nR(e10);
  if (nL(e10)) return r10;
  if (!nO(e10)) {
    let t11 = nz(e10);
    for (; t11 && !nV(t11); ) {
      if (nD(t11) && !nZ(t11)) return t11;
      t11 = nz(t11);
    }
    return r10;
  }
  let n3 = nQ(e10, t10);
  for (; n3 && ["table", "td", "th"].includes(nS(n3)) && nZ(n3); ) n3 = nQ(n3, t10);
  return n3 && nV(n3) && nZ(n3) && !nF(n3) ? r10 : n3 || function(e11) {
    let t11 = nz(e11);
    for (; nO(t11) && !nV(t11); ) {
      if (nF(t11)) return t11;
      if (nL(t11)) break;
      t11 = nz(t11);
    }
    return null;
  }(e10) || r10;
}
let n1 = async function(e10) {
  let t10 = this.getOffsetParent || n0, r10 = this.getDimensions, n3 = await r10(e10.floating);
  return { reference: function(e11, t11, r11) {
    let n6 = nO(t11), a2 = nT(t11), i2 = "fixed" === r11, o2 = nX(e11, true, i2, t11), s2 = { scrollLeft: 0, scrollTop: 0 }, l2 = nd(0);
    if (n6 || !n6 && !i2) {
      if (("body" !== nS(t11) || nA(a2)) && (s2 = nH(t11)), n6) {
        let e12 = nX(t11, true, i2, t11);
        l2.x = e12.x + t11.clientLeft, l2.y = e12.y + t11.clientTop;
      } else a2 && (l2.x = nK(a2));
    }
    let c2 = 0, u2 = 0;
    if (a2 && !n6 && !i2) {
      let e12 = a2.getBoundingClientRect();
      u2 = e12.top + s2.scrollTop, c2 = e12.left + s2.scrollLeft - nK(a2, e12);
    }
    return { x: o2.left + s2.scrollLeft - l2.x - c2, y: o2.top + s2.scrollTop - l2.y - u2, width: o2.width, height: o2.height };
  }(e10.reference, await t10(e10.floating), e10.strategy), floating: { x: 0, y: 0, width: n3.width, height: n3.height } };
}, n2 = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e10) {
  let { elements: t10, rect: r10, offsetParent: n3, strategy: a2 } = e10, i2 = "fixed" === a2, o2 = nT(n3), s2 = !!t10 && nL(t10.floating);
  if (n3 === o2 || s2 && i2) return r10;
  let l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = nd(1), u2 = nd(0), d2 = nO(n3);
  if ((d2 || !d2 && !i2) && (("body" !== nS(n3) || nA(o2)) && (l2 = nH(n3)), nO(n3))) {
    let e11 = nX(n3);
    c2 = nU(n3), u2.x = e11.x + n3.clientLeft, u2.y = e11.y + n3.clientTop;
  }
  return { width: r10.width * c2.x, height: r10.height * c2.y, x: r10.x * c2.x - l2.scrollLeft * c2.x + u2.x, y: r10.y * c2.y - l2.scrollTop * c2.y + u2.y };
}, getDocumentElement: nT, getClippingRect: function(e10) {
  let { element: t10, boundary: r10, rootBoundary: n3, strategy: a2 } = e10, i2 = [..."clippingAncestors" === r10 ? nL(t10) ? [] : function(e11, t11) {
    let r11 = t11.get(e11);
    if (r11) return r11;
    let n6 = nj(e11, [], false).filter((e12) => nD(e12) && "body" !== nS(e12)), a3 = null, i3 = "fixed" === nE(e11).position, o3 = i3 ? nz(e11) : e11;
    for (; nD(o3) && !nV(o3); ) {
      let t12 = nE(o3), r12 = nF(o3);
      r12 || "fixed" !== t12.position || (a3 = null), (i3 ? !r12 && !a3 : !r12 && "static" === t12.position && !!a3 && ["absolute", "fixed"].includes(a3.position) || nA(o3) && !r12 && function e12(t13, r13) {
        let n7 = nz(t13);
        return !(n7 === r13 || !nD(n7) || nV(n7)) && ("fixed" === nE(n7).position || e12(n7, r13));
      }(e11, o3)) ? n6 = n6.filter((e12) => e12 !== o3) : a3 = t12, o3 = nz(o3);
    }
    return t11.set(e11, n6), n6;
  }(t10, this._c) : [].concat(r10), n3], o2 = i2[0], s2 = i2.reduce((e11, r11) => {
    let n6 = nJ(t10, r11, a2);
    return e11.top = nl(n6.top, e11.top), e11.right = ns(n6.right, e11.right), e11.bottom = ns(n6.bottom, e11.bottom), e11.left = nl(n6.left, e11.left), e11;
  }, nJ(t10, o2, a2));
  return { width: s2.right - s2.left, height: s2.bottom - s2.top, x: s2.left, y: s2.top };
}, getOffsetParent: n0, getElementRects: n1, getClientRects: function(e10) {
  return Array.from(e10.getClientRects());
}, getDimensions: function(e10) {
  let { width: t10, height: r10 } = nN(e10);
  return { width: t10, height: r10 };
}, getScale: nU, isElement: nD, isRTL: function(e10) {
  return "rtl" === nE(e10).direction;
} }, n4 = (e10, t10, r10) => {
  let n3 = /* @__PURE__ */ new Map(), a2 = { platform: n2, ...r10 }, i2 = { ...a2.platform, _c: n3 };
  return nM(e10, t10, { ...a2, platform: i2 });
}, n5 = t((e10, t10) => {
  let { slots: n3, emit: a2, attrs: i2 } = t10, o2 = b(null), s2 = b(null);
  return p(W([o2, s2]), v((t11) => {
    let [r10, n6] = t11;
    if (n6 && r10) {
      let t12 = async () => {
        var t13, a4, i3, o3, s3;
        n6.style.position = "absolute";
        let { x: l2, y: c2 } = await n4(r10, n6, { placement: null !== (t13 = e10.placement) && void 0 !== t13 ? t13 : "bottom", middleware: [...null !== (a4 = e10.modifiers) && void 0 !== a4 ? a4 : [], ...null !== (i3 = e10.middleware) && void 0 !== i3 ? i3 : [], (void 0 === o3 && (o3 = {}), { name: "flip", options: o3, async fn(e11) {
          var t14, r11, n7, a5, i4;
          let { placement: s4, middlewareData: l3, rects: c3, initialPlacement: u2, platform: d2, elements: f2 } = e11, { mainAxis: h2 = true, crossAxis: p2 = true, fallbackPlacements: m2, fallbackStrategy: g2 = "bestFit", fallbackAxisSideDirection: y2 = "none", flipAlignment: v2 = true, ...b2 } = np(o3, e11);
          if (null != (t14 = l3.arrow) && t14.alignmentOffset) return {};
          let x2 = nm(s4), w2 = nb(u2), k2 = nm(u2) === u2, C2 = await (null == d2.isRTL ? void 0 : d2.isRTL(f2.floating)), M2 = m2 || (k2 || !v2 ? [nw(u2)] : function(e12) {
            let t15 = nw(e12);
            return [nx(e12), t15, nx(t15)];
          }(u2)), P2 = "none" !== y2;
          !m2 && P2 && M2.push(...function(e12, t15, r12, n8) {
            let a6 = ng(e12), i5 = function(e13, t16, r13) {
              let n9 = ["left", "right"], a7 = ["right", "left"];
              switch (e13) {
                case "top":
                case "bottom":
                  if (r13) return t16 ? a7 : n9;
                  return t16 ? n9 : a7;
                case "left":
                case "right":
                  return t16 ? ["top", "bottom"] : ["bottom", "top"];
                default:
                  return [];
              }
            }(nm(e12), "start" === r12, n8);
            return a6 && (i5 = i5.map((e13) => e13 + "-" + a6), t15 && (i5 = i5.concat(i5.map(nx)))), i5;
          }(u2, v2, y2, C2));
          let _2 = [u2, ...M2], S2 = await nP(e11, b2), R2 = [], T2 = (null == (r11 = l3.flip) ? void 0 : r11.overflows) || [];
          if (h2 && R2.push(S2[x2]), p2) {
            let e12 = function(e13, t15, r12) {
              void 0 === r12 && (r12 = false);
              let n8 = ng(e13), a6 = ny(nb(e13)), i5 = nv(a6), o4 = "x" === a6 ? n8 === (r12 ? "end" : "start") ? "right" : "left" : "start" === n8 ? "bottom" : "top";
              return t15.reference[i5] > t15.floating[i5] && (o4 = nw(o4)), [o4, nw(o4)];
            }(s4, c3, C2);
            R2.push(S2[e12[0]], S2[e12[1]]);
          }
          if (T2 = [...T2, { placement: s4, overflows: R2 }], !R2.every((e12) => e12 <= 0)) {
            let e12 = ((null == (n7 = l3.flip) ? void 0 : n7.index) || 0) + 1, t15 = _2[e12];
            if (t15) return { data: { index: e12, overflows: T2 }, reset: { placement: t15 } };
            let r12 = null == (a5 = T2.filter((e13) => e13.overflows[0] <= 0).sort((e13, t16) => e13.overflows[1] - t16.overflows[1])[0]) ? void 0 : a5.placement;
            if (!r12) switch (g2) {
              case "bestFit": {
                let e13 = null == (i4 = T2.filter((e14) => {
                  if (P2) {
                    let t16 = nb(e14.placement);
                    return t16 === w2 || "y" === t16;
                  }
                  return true;
                }).map((e14) => [e14.placement, e14.overflows.filter((e15) => e15 > 0).reduce((e15, t16) => e15 + t16, 0)]).sort((e14, t16) => e14[1] - t16[1])[0]) ? void 0 : i4[0];
                e13 && (r12 = e13);
                break;
              }
              case "initialPlacement":
                r12 = u2;
            }
            if (s4 !== r12) return { reset: { placement: r12 } };
          }
          return {};
        } }), (void 0 === s3 && (s3 = {}), { name: "shift", options: s3, async fn(e11) {
          let { x: t14, y: r11, placement: n7 } = e11, { mainAxis: a5 = true, crossAxis: i4 = false, limiter: o4 = { fn: (e12) => {
            let { x: t15, y: r12 } = e12;
            return { x: t15, y: r12 };
          } }, ...l3 } = np(s3, e11), c3 = { x: t14, y: r11 }, u2 = await nP(e11, l3), d2 = nb(nm(n7)), f2 = ny(d2), h2 = c3[f2], p2 = c3[d2];
          if (a5) {
            let e12 = "y" === f2 ? "top" : "left", t15 = "y" === f2 ? "bottom" : "right", r12 = h2 + u2[e12], n8 = h2 - u2[t15];
            h2 = nl(r12, ns(h2, n8));
          }
          if (i4) {
            let e12 = "y" === d2 ? "top" : "left", t15 = "y" === d2 ? "bottom" : "right", r12 = p2 + u2[e12], n8 = p2 - u2[t15];
            p2 = nl(r12, ns(p2, n8));
          }
          let m2 = o4.fn({ ...e11, [f2]: h2, [d2]: p2 });
          return { ...m2, data: { x: m2.x - t14, y: m2.y - r11, enabled: { [f2]: a5, [d2]: i4 } } };
        } })] });
        Object.assign(n6.style, { left: `${l2}px`, top: `${c2}px` });
      }, a3 = function(e11, t13, r11, n7) {
        let a4;
        void 0 === n7 && (n7 = {});
        let { ancestorScroll: i3 = true, ancestorResize: o3 = true, elementResize: s3 = "function" == typeof ResizeObserver, layoutShift: l2 = "function" == typeof IntersectionObserver, animationFrame: c2 = false } = n7, u2 = nq(e11), d2 = i3 || o3 ? [...u2 ? nj(u2) : [], ...nj(t13)] : [];
        d2.forEach((e12) => {
          i3 && e12.addEventListener("scroll", r11, { passive: true }), o3 && e12.addEventListener("resize", r11);
        });
        let f2 = u2 && l2 ? function(e12, t14) {
          let r12, n8 = null, a5 = nT(e12);
          function i4() {
            var e13;
            clearTimeout(r12), null == (e13 = n8) || e13.disconnect(), n8 = null;
          }
          return function o4(s4, l3) {
            void 0 === s4 && (s4 = false), void 0 === l3 && (l3 = 1), i4();
            let { left: c3, top: u3, width: d3, height: f3 } = e12.getBoundingClientRect();
            if (s4 || t14(), !d3 || !f3) return;
            let h3 = nu(u3), p3 = nu(a5.clientWidth - (c3 + d3)), m3 = { rootMargin: -h3 + "px " + -p3 + "px " + -nu(a5.clientHeight - (u3 + f3)) + "px " + -nu(c3) + "px", threshold: nl(0, ns(1, l3)) || 1 }, g2 = true;
            function y2(e13) {
              let t15 = e13[0].intersectionRatio;
              if (t15 !== l3) {
                if (!g2) return o4();
                t15 ? o4(false, t15) : r12 = setTimeout(() => {
                  o4(false, 1e-7);
                }, 1e3);
              }
              g2 = false;
            }
            try {
              n8 = new IntersectionObserver(y2, { ...m3, root: a5.ownerDocument });
            } catch (e13) {
              n8 = new IntersectionObserver(y2, m3);
            }
            n8.observe(e12);
          }(true), i4;
        }(u2, r11) : null, h2 = -1, p2 = null;
        s3 && (p2 = new ResizeObserver((e12) => {
          let [n8] = e12;
          n8 && n8.target === u2 && p2 && (p2.unobserve(t13), cancelAnimationFrame(h2), h2 = requestAnimationFrame(() => {
            var e13;
            null == (e13 = p2) || e13.observe(t13);
          })), r11();
        }), u2 && !c2 && p2.observe(u2), p2.observe(t13));
        let m2 = c2 ? nX(e11) : null;
        return c2 && function t14() {
          let n8 = nX(e11);
          m2 && (n8.x !== m2.x || n8.y !== m2.y || n8.width !== m2.width || n8.height !== m2.height) && r11(), m2 = n8, a4 = requestAnimationFrame(t14);
        }(), r11(), () => {
          var e12;
          d2.forEach((e13) => {
            i3 && e13.removeEventListener("scroll", r11), o3 && e13.removeEventListener("resize", r11);
          }), null == f2 || f2(), null == (e12 = p2) || e12.disconnect(), p2 = null, c2 && cancelAnimationFrame(a4);
        };
      }(r10, n6, t12);
      return () => {
        a3();
      };
    }
    return () => {
    };
  }), y()), () => {
    var t11, l2;
    let c2 = null === (t11 = n3.default) || void 0 === t11 ? void 0 : t11.call(n3)[0];
    return c2 ? x(w, { children: [d(c2, { ...i2, onVnodeMounted: (e11) => {
      o2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), r(no, { triggerRef: o2, contentRef: s2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n3.transition, children: null === (l2 = n3.content) || void 0 === l2 ? void 0 : l2.call(n3) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }, { displayName: "Popper", props: ["isOpen", "style", "contentRef", "triggerRef", "placement", "middleware", "modifiers"], emits: ["click-outside", "esc-keydown", "content-before-mount"] });
export {
  r7 as B,
  nr as C,
  nt as G,
  no as O,
  n5 as P,
  rg as T,
  t$ as a,
  tV as d,
  ne as s,
  tB as t,
  tO as v
};
