var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
let e;
import { j as t, a as r } from "./lib--nodepkg-vue-jsx-runtime.B1nVnwQT.chunk.js";
import { e as n, c as a, f as o, r as i, g as s, s as l, t as c } from "./lib--nodepkg-vuekit.BRo0ZIlg.chunk.js";
import { k as u, g as d, b as f, l as h, s as p, e as m, m as g, n as v, q as b, t as y, u as x, v as w, w as k, x as M, i as C, a as P, y as _, z as S, c as O, A as D, h as T } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
import { b as $, f as R, e as A, o as I, T as L, w as F, F as B } from "./vendor--vue-runtime-core.CdjcGpyV.chunk.js";
import { b as j, u as V } from "./vendor--vue-reactivity.BF2wQyBH.chunk.js";
import { T as E } from "./vendor--vue-runtime-dom.BGUNeSGq.chunk.js";
import { _ as H } from "./vendor--tslib.kWYf_5KY.chunk.js";
var z, W, N, q, U, G, Y, X, K, J, Z, Q = function() {
};
let ee = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function et(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let er = ["duration", "bounce"], en = ["stiffness", "damping", "mass"];
function ea(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function eo(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n6 = 2, restDelta: a2 } = e10, o2 = H(e10, ["from", "to", "restSpeed", "restDelta"]);
  let i2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!ea(e11, en) && ea(e11, er)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n7 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e12, s3 = 1 - a3;
        s3 = ee(0.05, 1, s3), n7 = ee(0.01, 10, n7 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n7;
          return 1e-3 - (t13 - o3) / et(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n7, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n7, i4 = et(Math.pow(e13, 2), s3);
          return (r13 * o3 + o3 - a4) * Math.exp(-r13) * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / i4;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n7) * ((e13 - o3) * n7 + 1), r12 = (e13) => n7 * n7 * (o3 - e13) * Math.exp(-e13 * n7));
        let l3 = function(e13, t13, r13) {
          let n9 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n9 -= e13(n9) / t13(n9);
          return n9;
        }(t12, r12, 5 / n7);
        if (n7 *= 1e3, isNaN(l3))
          return { stiffness: 100, damping: 10, duration: n7 };
        {
          let e13 = Math.pow(l3, 2) * i3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(i3 * e13), duration: n7 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(o2), h2 = ei, p2 = ei;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n7 = r10 - t10, o3 = l2 / (2 * Math.sqrt(s2 * c2)), i3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), o3 < 1) {
      let t11 = et(i3, o3);
      h2 = (a3) => r10 - Math.exp(-o3 * i3 * a3) * ((e11 + o3 * i3 * n7) / t11 * Math.sin(t11 * a3) + n7 * Math.cos(t11 * a3)), p2 = (r11) => {
        let a3 = Math.exp(-o3 * i3 * r11);
        return o3 * i3 * a3 * (Math.sin(t11 * r11) * (e11 + o3 * i3 * n7) / t11 + n7 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + o3 * i3 * n7) - t11 * n7 * Math.sin(t11 * r11));
      };
    } else if (1 === o3)
      h2 = (t11) => r10 - Math.exp(-i3 * t11) * (n7 + (e11 + i3 * n7) * t11);
    else {
      let t11 = i3 * Math.sqrt(o3 * o3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + o3 * i3 * n7) * Math.sinh(l3) + t11 * n7 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e11) => {
    let t11 = h2(e11);
    if (f2)
      i2.done = e11 >= d2;
    else {
      let o3 = 1e3 * p2(e11), s3 = Math.abs(r10 - t11) <= a2;
      i2.done = Math.abs(o3) <= n6 && s3;
    }
    return i2.value = i2.done ? r10 : t11, i2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
eo.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let ei = (e10) => 0, es = (e10, t10, r10) => {
  let n6 = t10 - e10;
  return 0 === n6 ? 1 : (r10 - e10) / n6;
}, el = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, ec = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), eu = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, ed = /(-)?([\d]*\.?[\d])+/g, ef = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, eh = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ep(e10) {
  return "string" == typeof e10;
}
let em = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, eg = Object.assign(Object.assign({}, em), { transform: ec(0, 1) });
Object.assign(Object.assign({}, em), { default: 1 });
let ev = { test: (e10) => ep(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, ev), { parse: (e10) => ev.parse(e10) / 100, transform: (e10) => ev.transform(100 * e10) });
let eb = (e10, t10) => (r10) => !!(ep(r10) && eh.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ey = (e10, t10, r10) => (n6) => {
  if (!ep(n6))
    return n6;
  let [a2, o2, i2, s2] = n6.match(ed);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(o2), [r10]: parseFloat(i2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ex = { test: eb("hsl", "hue"), parse: ey("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + ev.transform(eu(r10)) + ", " + ev.transform(eu(n6)) + ", " + eu(eg.transform(a2)) + ")";
} }, ew = ec(0, 255), ek = Object.assign(Object.assign({}, em), { transform: (e10) => Math.round(ew(e10)) }), eM = { test: eb("rgb", "red"), parse: ey("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n6, alpha: a2 = 1 } = e10;
  return "rgba(" + ek.transform(t10) + ", " + ek.transform(r10) + ", " + ek.transform(n6) + ", " + eu(eg.transform(a2)) + ")";
} }, eC = { test: eb("#"), parse: function(e10) {
  let t10 = "", r10 = "", n6 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n6 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n6 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n6 += n6, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n6, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eM.transform }, eP = { test: (e10) => eM.test(e10) || eC.test(e10) || ex.test(e10), parse: (e10) => eM.test(e10) ? eM.parse(e10) : ex.test(e10) ? ex.parse(e10) : eC.parse(e10), transform: (e10) => ep(e10) ? e10 : e10.hasOwnProperty("red") ? eM.transform(e10) : ex.transform(e10) }, e_ = "${c}", eS = "${n}";
function eO(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n6 = e10.match(ef);
  n6 && (r10 = n6.length, e10 = e10.replace(ef, e_), t10.push(...n6.map(eP.parse)));
  let a2 = e10.match(ed);
  return a2 && (e10 = e10.replace(ed, eS), t10.push(...a2.map(em.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let eD = function(e10) {
  let { values: t10, numColors: r10, tokenised: n6 } = eO(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n6;
    for (let n7 = 0; n7 < a2; n7++)
      t11 = t11.replace(n7 < r10 ? e_ : eS, n7 < r10 ? eP.transform(e11[n7]) : eu(e11[n7]));
    return t11;
  };
};
function eT(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function e$(e10) {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 } = e10;
  t10 /= 360, n6 /= 100;
  let o2 = 0, i2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n6 < 0.5 ? n6 * (1 + r10) : n6 + r10 - n6 * r10, a3 = 2 * n6 - e11;
    o2 = eT(a3, e11, t10 + 1 / 3), i2 = eT(a3, e11, t10), s2 = eT(a3, e11, t10 - 1 / 3);
  } else
    o2 = i2 = s2 = n6;
  return { red: Math.round(255 * o2), green: Math.round(255 * i2), blue: Math.round(255 * s2), alpha: a2 };
}
let eR = (e10, t10, r10) => {
  let n6 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n6) + n6));
}, eA = [eC, eM, ex], eI = (e10) => eA.find((t10) => t10.test(e10)), eL = (e10, t10) => {
  let r10 = eI(e10), n6 = eI(t10), a2 = r10.parse(e10), o2 = n6.parse(t10);
  r10 === ex && (a2 = e$(a2), r10 = eM), n6 === ex && (o2 = e$(o2), n6 = eM);
  let i2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = eR(a2[t11], o2[t11], e11));
    return i2.alpha = el(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eF = (e10) => "number" == typeof e10, eB = (e10, t10) => (r10) => t10(e10(r10)), ej = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eB);
};
function eV(e10, t10) {
  return eF(e10) ? (r10) => el(e10, t10, r10) : eP.test(e10) ? eL(e10, t10) : eW(e10, t10);
}
let eE = (e10, t10) => {
  let r10 = [...e10], n6 = r10.length, a2 = e10.map((e11, r11) => eV(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n6; t11++)
      r10[t11] = a2[t11](e11);
    return r10;
  };
}, eH = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n6 = {};
  for (let a2 in r10)
    void 0 !== e10[a2] && void 0 !== t10[a2] && (n6[a2] = eV(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n6)
      r10[t11] = n6[t11](e11);
    return r10;
  };
};
function ez(e10) {
  let t10 = eO(e10).values, r10 = t10.length, n6 = 0, a2 = 0, o2 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n6 || "number" == typeof t10[e11] ? n6++ : void 0 !== t10[e11].hue ? o2++ : a2++;
  return { parsed: t10, numNumbers: n6, numRGB: a2, numHSL: o2 };
}
let eW = (e10, t10) => {
  let r10 = eD(t10), n6 = ez(e10), a2 = ez(t10);
  return n6.numHSL === a2.numHSL && n6.numRGB === a2.numRGB && n6.numNumbers >= a2.numNumbers ? ej(eE(n6.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eN = (e10, t10) => (r10) => el(e10, t10, r10);
function eq(e10, t10) {
  let { clamp: r10 = true, ease: n6, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  Q(o2 === t10.length), Q(!n6 || !Array.isArray(n6) || n6.length === o2 - 1), e10[0] > e10[o2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = function(e11, t11, r11) {
    var n7;
    let a3 = [], o3 = r11 || ("number" == typeof (n7 = e11[0]) ? eN : "string" == typeof n7 ? eP.test(n7) ? eL : eW : Array.isArray(n7) ? eE : "object" == typeof n7 ? eH : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n9 = o3(e11[r12], e11[r12 + 1]);
      t11 && (n9 = ej(Array.isArray(t11) ? t11[r12] : t11, n9)), a3.push(n9);
    }
    return a3;
  }(t10, n6, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n7] = e11, [a3] = t11;
    return (e12) => a3(es(r11, n7, e12));
  }(e10, i2) : function(e11, t11) {
    let r11 = e11.length, n7 = r11 - 1;
    return (a3) => {
      let o3 = 0, i3 = false;
      if (a3 <= e11[0] ? i3 = true : a3 >= e11[n7] && (o3 = n7 - 1, i3 = true), !i3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n7; t12++)
          ;
        o3 = t12 - 1;
      }
      let s3 = es(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(ee(e10[0], e10[o2 - 1], t11)) : s2;
}
let eU = (e10) => e10, eG = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eY(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n6, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return eq(l2, s2, { ease: Array.isArray(n6) ? n6 : s2.map(() => n6 || eG).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (i2.value = u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
let eX = { keyframes: eY, spring: eo, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n6 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n6 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eK = 1 / 60 * 1e3, eJ = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eZ = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eJ()), eK), eQ = true, e0 = false, e1 = false, e2 = { delta: 0, timestamp: 0 }, e4 = ["read", "update", "preRender", "render", "postRender"], e5 = e4.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n6 = 0, a2 = false, o2 = false, i2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let o3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return o3 && i2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n6 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), i2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      o2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n6 = t11.length)
      for (let r11 = 0; r11 < n6; r11++) {
        let n7 = t11[r11];
        n7(l2), i2.has(n7) && (s2.schedule(n7), e11());
      }
    a2 = false, o2 && (o2 = false, s2.process(l2));
  } };
  return s2;
}(() => e0 = true), e10), {}), e3 = e4.reduce((e10, t10) => {
  let r10 = e5[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e0 || e7(), r10.schedule(e11, t11, n6);
  }, e10;
}, {}), e8 = e4.reduce((e10, t10) => (e10[t10] = e5[t10].cancel, e10), {});
e4.reduce((e10, t10) => (e10[t10] = () => e5[t10].process(e2), e10), {});
let e6 = (e10) => e5[e10].process(e2), e9 = (e10) => {
  e0 = false, e2.delta = eQ ? eK : Math.max(Math.min(e10 - e2.timestamp, 40), 1), e2.timestamp = e10, e1 = true, e4.forEach(e6), e1 = false, e0 && (eQ = false, eZ(e9));
}, e7 = () => {
  e0 = true, eQ = true, e1 || eZ(e9);
};
function te(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let tt = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e3.update(t10, true), stop: () => e8.update(t10) };
};
function tr(e10) {
  let t10, r10, n6;
  var a2, { from: o2, autoplay: i2 = true, driver: s2 = tt, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, v2 = H(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: b2 } = v2, y2 = 0, x2 = v2.duration, w2 = false, k2 = true, M2 = function(e11) {
    if (Array.isArray(e11.to))
      return eY;
    if (eX[e11.type])
      return eX[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return eo;
    return eY;
  }(v2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, o2, b2)) && (n6 = eq([0, 100], [o2, b2], { clamp: false }), o2 = 0, b2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, v2), { from: o2, to: b2 }));
  return i2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = C2.next(Math.max(0, l2));
      r10 = e12.value, n6 && (r10 = n6(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === y2 && (null != x2 || (x2 = l2)), y2 < c2) {
        var a3, o3;
        a3 = l2, o3 = x2, (k2 ? a3 >= o3 + d2 : a3 <= -d2) && (y2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n7 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n7 ? te(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = te(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let tn = (e10, t10) => 1 - 3 * t10 + 3 * e10, ta = (e10, t10) => 3 * t10 - 6 * e10, to = (e10) => 3 * e10, ti = (e10, t10, r10) => ((tn(t10, r10) * e10 + ta(t10, r10)) * e10 + to(t10)) * e10, ts = (e10, t10, r10) => 3 * tn(t10, r10) * e10 * e10 + 2 * ta(t10, r10) * e10 + to(t10);
var tl = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tc = /[A-Z]|^ms/g, tu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, td = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tf = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, th = (z = function(e10) {
  return td(e10) ? e10 : e10.replace(tc, "-$&").toLowerCase();
}, W = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === W[e10] && (W[e10] = z(e10)), W[e10];
}), tp = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(tu, function(e11, t11, r10) {
          return J = { name: t11, styles: r10, next: J }, t11;
        });
  }
  return 1 === tl[e10] || td(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tm(e10, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles)
    return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim)
        return J = { name: r10.name, styles: r10.styles, next: J }, r10.name;
      if (void 0 !== r10.styles) {
        var n6 = r10.next;
        if (void 0 !== n6)
          for (; void 0 !== n6; )
            J = { name: n6.name, styles: n6.styles, next: J }, n6 = n6.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n7 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n7 += tm(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n7 += o3 + "{" + t11[i3] + "}" : tf(i3) && (n7 += th(o3) + ":" + tp(o3, i3) + ";");
            else if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
              for (var s2 = 0; s2 < i3.length; s2++)
                tf(i3[s2]) && (n7 += th(o3) + ":" + tp(o3, i3[s2]) + ";");
            else {
              var l2 = tm(e11, t11, i3);
              switch (o3) {
                case "animation":
                case "animationName":
                  n7 += th(o3) + ":" + l2 + ";";
                  break;
                default:
                  n7 += o3 + "{" + l2 + "}";
              }
            }
          }
        return n7;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = J, o2 = r10(e10);
        return J = a2, tm(e10, t10, o2);
      }
  }
  if (null == t10)
    return r10;
  var i2 = t10[r10];
  return void 0 !== i2 ? i2 : r10;
}
var tg = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tv = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n6, a2 = true, o2 = "";
  J = void 0;
  var i2 = e10[0];
  null == i2 || void 0 === i2.raw ? (a2 = false, o2 += tm(r10, t10, i2)) : o2 += i2[0];
  for (var s2 = 1; s2 < e10.length; s2++)
    o2 += tm(r10, t10, e10[s2]), a2 && (o2 += i2[s2]);
  tg.lastIndex = 0;
  for (var l2 = ""; null !== (n6 = tg.exec(o2)); )
    l2 += "-" + n6[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n7 = 0, a3 = e11.length; a3 >= 4; ++n7, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(n7) | (255 & e11.charCodeAt(++n7)) << 8 | (255 & e11.charCodeAt(++n7)) << 16 | (255 & e11.charCodeAt(++n7)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n7 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n7 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n7), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(o2) + l2, styles: o2, next: J };
};
function tb() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let ty = tb(), tx = { paddingX: [ty.paddingLeft, ty.paddingRight], paddingY: [ty.paddingTop, ty.paddingBottom], marginX: [ty.marginInlineStart, ty.marginInlineEnd], marginY: [ty.marginTop, ty.marginBottom], borderX: [ty.borderLeft, ty.borderRight], borderY: [ty.borderTop, ty.borderBottom], color: [ty.color, ty.fill], borderTopRadius: [ty.borderTopLeftRadius, ty.borderTopRightRadius], borderBottomRadius: [ty.borderBottomLeftRadius, ty.borderBottomRightRadius], borderRightRadius: [ty.borderTopRightRadius, ty.borderBottomRightRadius], borderLeftRadius: [ty.borderTopLeftRadius, ty.borderBottomLeftRadius], backgroundGradient: [ty.backgroundImage], boxSize: [ty.width, ty.height] }, tw = tb(), tk = { font: tw.fontFamily, shadow: tw.boxShadow, rounded: tw.borderRadius, roundedTop: tw.borderTopRadius, roundedBottom: tw.borderBottomRadius, roundedLeft: tw.borderLeftRadius, roundedRight: tw.borderRightRadius, bg: tw.background, bgImage: tw.backgroundImage, bgSize: tw.backgroundSize, bgPosition: tw.backgroundPosition, bgRepeat: tw.backgroundRepeat, bgAttachment: tw.backgroundAttachment, bgColor: tw.backgroundColor, bgGradient: tw.backgroundGradient, bgClip: tw.backgroundClip, pos: tw.position, p: tw.padding, pt: tw.paddingTop, pr: tw.paddingRight, pl: tw.paddingLeft, pb: tw.paddingBottom, ps: tw.paddingInlineStart, pe: tw.paddingInlineEnd, px: tw.paddingX, py: tw.paddingY, m: tw.margin, mt: tw.marginTop, mr: tw.marginRight, ml: tw.marginLeft, mb: tw.marginBottom, ms: tw.marginInlineStart, me: tw.marginInlineEnd, mx: tw.marginX, my: tw.marginY, w: tw.width, minW: tw.minWidth, maxW: tw.maxWidth, h: tw.height, minH: tw.minHeight, maxH: tw.maxHeight }, tM = tb(), tC = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n6 = [...t10];
  for (let e11 of t10)
    tk[e11] && n6.push(tk[e11]);
  return n6;
}, tP = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _t_ = class _t_ {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n6, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(...this.processAll(e11, t10));
    if (n6) {
      let e11 = {}, t11 = {};
      _t_.walkStateValues(n6, (r11, n7, a3) => {
        var o3;
        let i2 = `--${this.opt.varPrefix}-state-${n7.join("-")}`, s2 = null !== (o3 = h(n7)) && void 0 !== o3 ? o3 : "", l2 = {};
        this.process(l2, s2, r11, false), e11[i2] = l2[s2], p(t11, [...a3, s2], `var(${i2})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!m(o2)) {
      let e11 = {};
      this.processTo(e11, o2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n6 in t10)
      this.process(e10, n6, t10[n6], r10);
  }
  process(e10, t10, r10) {
    var n6, a2, o2, i2;
    let s2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (n6 = this.opt.mixins[t10]) || void 0 === n6 ? void 0 : n6.get(r10);
      if (a3)
        for (let t11 in a3)
          this.process(e10, t11, a3[t11], s2);
      return;
    }
    let l2 = t10;
    if (f(r10)) {
      e10[l2 = null !== (a2 = _t_.convertSelector(l2)) && void 0 !== a2 ? a2 : l2] = null !== (o2 = e10[l2]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[l2], r10);
      return;
    }
    if (s2 && tx[l2 = null !== (i2 = tk[l2]) && void 0 !== i2 ? i2 : l2]) {
      for (let t11 of tx[l2])
        e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[l2] = this.opt.processValue(l2, r10);
  }
};
__publicField(_t_, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_t_, "convertSelector", (e10) => {
  if (tP[e10])
    return tP[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n6, a2] = t10.split("__");
      return a2 ? `${e11}[${u(n6)}='${u(a2)}']${r10}` : `${e11}[${u(n6)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$"))
        return `${e11}::${t10.slice(1)}`;
      if (_t_.supportedPseudoClasses[t10]) {
        let r12 = _t_.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n6] = t10.split("__"), a2 = u(r11);
      return n6 ? `${e11}[data-${a2}='${u(n6)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_t_, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n6, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n6 ? n6 : d(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (f(i2)) {
      _t_.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
});
let t_ = _t_;
var tS = ((N = tS || {}).var = "var", N.mixin = "mixin", N);
class tO {
  static create(e10, t10) {
    let { value: r10, on: n6, transform: a2 } = t10;
    return { type: e10, value: r10, on: n6, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tO.create("var", { value: e10, on: tC(tM.color, tM.bgColor, tM.outlineColor, tM.borderColor, tM.accentColor, tM.fill, tM.stroke), transform: (e11, t10) => g(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tO.create("var", { value: e10, on: tC(tM.gap, tM.rowGap, tM.columnGap, tM.top, tM.right, tM.bottom, tM.left, tM.m, tM.ms, tM.me, tM.mt, tM.mr, tM.mb, tM.ml, tM.mx, tM.my, tM.p, tM.ps, tM.pe, tM.pt, tM.pr, tM.pb, tM.pl, tM.px, tM.py) });
  }
  static boxSize(e10) {
    return tO.create("var", { value: e10, on: tC(tM.w, tM.minW, tM.maxW, tM.h, tM.minH, tM.maxH, tM.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tO.create("var", { value: e10, on: tC(tM.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tO.create("var", { value: e10, on: tC(tM.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tO.create("var", { value: e10, fallback: 0, on: tC(tM.rounded, tM.roundedTop, tM.roundedBottom, tM.roundedLeft, tM.roundedRight, ty.borderTopLeftRadius, ty.borderTopRightRadius, ty.borderBottomLeftRadius, ty.borderBottomRightRadius, ty.borderTopRightRadius, ty.borderBottomRightRadius, ty.borderTopLeftRadius, ty.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tO.create("var", { value: e10, on: tC(tM.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tO.create("var", { value: e10, on: tC(tM.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tO.create("var", { value: e10, on: tC(tM.font) });
  }
  static fontWeight(e10) {
    return tO.create("var", { value: e10, on: tC(tM.fontWeight) });
  }
  static letterSpacing(e10) {
    return tO.create("var", { value: e10, on: tC(tM.letterSpacing) });
  }
  static shadow(e10) {
    return tO.create("var", { value: e10, on: tC(tM.shadow) });
  }
  static customMixin(e10, t10) {
    return tO.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tD = (e10, t10, r10) => {
  let n6 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let o2 = t10[e11];
    if (e11 === t10.length - 1) {
      n6[o2] = r10;
      continue;
    }
    n6[o2] = null !== (a2 = n6[o2]) && void 0 !== a2 ? a2 : {}, n6 = n6[o2];
  }
};
const _tT = class _tT {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tT.walkValues(e10.value, (n6, a2) => {
      let o2 = a2.join("."), i2 = (n7, a3) => {
        let o3 = e10.transform ? e10.transform(n7, t10) : r10(n7);
        if (y(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (p(this._cssVarRefs, [o2], t10(o2)), f(n6))
        for (let e11 in n6)
          i2(n6[e11], (t11, r11) => {
            p(this._values, [`${o2}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        i2(n6, (e11, t11) => {
          p(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return b(this._values);
  }
  get(e10, t10, r10) {
    let n6 = this._values[e10];
    if (y(n6)) {
      var a2;
      return r10 ? n6[t10] : null !== (a2 = n6[t10]) && void 0 !== a2 ? a2 : n6[_tT.defaultMode];
    }
    return r10 ? t10 === _tT.defaultMode ? n6 : void 0 : n6;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tT, "defaultMode", "_default");
__publicField(_tT, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e10) {
    let a2 = e10[n6];
    if (f(a2)) {
      if (v(a2, "_default")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      _tT.walkValues(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
});
let tT = _tT;
const _t$ = class _t$ {
  constructor(e10) {
    __publicField(this, "_values", {});
    _t$.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      p(this._values, [r10], x(e11, "__mixin"));
    });
  }
  get tokens() {
    return b(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_t$, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e10) {
    let a2 = e10[n6];
    if (f(a2)) {
      if (v(a2, "__mixin")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      _t$.walkValue(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
});
let t$ = _t$;
let tR = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, tA = (e10) => {
  let t10 = d(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: w(tR, (e11) => k(t10, (t11, r10) => M(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, tI = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tL = (e10) => C(e10) && v(e10, "token");
function tF(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let tB = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _tj = class _tj {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tj.propsCanBaseDp[e10] && _(t10) ? _tj.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n6;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n6 = this.mixins[t10]) || void 0 === n6 ? void 0 : n6.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n6, a2;
      if (tL(t10)) {
        let r11 = null === (n6 = this.propValues[e10]) || void 0 === n6 ? void 0 : n6.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new t_({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n6;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n6 = t10.mode) && void 0 !== n6 ? n6 : "light", p(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === tS.var) {
          let e11 = new tT(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a2] = e11, t11.on))
            this.propValues[r11] = e11;
          for (let t12 of e11.tokens)
            for (let r11 of ["light", "dark"]) {
              let n7 = r11 === this.mode ? "_default" : `_${r11}`, o2 = e11.get(t12, n7, true);
              P(o2) || ("_default" === n7 ? p(this.cssVars, [this.cssVar(a2, t12)], o2) : p(this.cssVars, [n7, this.cssVar(a2, t12)], o2));
            }
          continue;
        }
        if (t11.type === tS.mixin) {
          let e11 = new t$(t11);
          for (let r11 of t11.on)
            this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tj(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${u(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n6 = null != t10 ? t10 : {};
    return n6.__emotion_styles = null !== (r10 = n6.__emotion_styles) && void 0 !== r10 ? r10 : tv(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n6.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n6 = (e11, t11) => y(t11) ? { $type: e11, $value: w(t11, (t12) => n6(e11, t12).$value) } : g(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n7 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? S(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n7.startsWith("sys.") ? `{${n7}}` : `{seed.${n7}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let o2 = this.tokens[a2], i2 = (i3) => {
        for (let s2 of o2.tokens)
          if (!s2.includes("/")) {
            if (s2.startsWith("sys.")) {
              let e11 = o2.get(s2, "_default"), l2 = o2.get(s2, "_dark");
              tD(t10, [a2, ...s2.split(".")], n6(i3, e11)), e11 !== l2 && tD(r10, [a2, ...s2.split(".")], n6(i3, l2));
            } else
              tD(e10, [a2, ...s2.split(".")], n6(i3, o2.get(s2, "_default")));
          }
      };
      switch (a2) {
        case "color":
          i2("color");
          break;
        case "rounded":
          i2("borderRadius");
          break;
        case "shadow":
          i2("boxShadow");
          break;
        case "font":
          i2("fontFamily");
          break;
        case "fontWeight":
          i2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11)
        continue;
      let a2 = (a3) => {
        for (let o2 of r11.tokens) {
          let i2 = r11.get(o2);
          if (!i2)
            continue;
          let s2 = this.unstable_sx(i2)[0];
          tD(t10, [e11, ...o2.split(".")], n6(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: tA(t10), dark: tA(r10) };
  }
};
__publicField(_tj, "propsCanPercent", tB([...tO.boxSize({}).on]));
__publicField(_tj, "propsCanBaseDp", tB([...tO.boxSize({}).on, ...tO.space({}).on, ...tO.fontSize({}).on, ...tO.letterSpacing({}).on, ...tO.lineHeight({}).on, ...tO.rounded({}).on]));
let tj = _tj;
let tV = { shadow: tO.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tO.customMixin("elevation", { 0: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tE = (e10, t10, r10, n6) => Object.assign(function(e11, t11, r11, n7) {
  if (e11 === t11 && r11 === n7)
    return eU;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a2[t12] = ti(0.1 * t12, e11, r11);
  return (o2) => 0 === o2 || 1 === o2 ? o2 : ti(function(t12) {
    let n9 = 0, o3 = 1;
    for (; 10 !== o3 && a2[o3] <= t12; ++o3)
      n9 += 0.1;
    let i2 = n9 + (t12 - a2[--o3]) / (a2[o3 + 1] - a2[o3]) * 0.1, s2 = ts(i2, e11, r11);
    return s2 >= 1e-3 ? function(e12, t13, r12, n10) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = ts(t13, r12, n10);
        if (0 === a4)
          break;
        let o4 = ti(t13, r12, n10) - e12;
        t13 -= o4 / a4;
      }
      return t13;
    }(t12, i2, e11, r11) : 0 === s2 ? i2 : function(e12, t13, r12, n10, a3) {
      let o4, i3;
      let s3 = 0;
      do
        (o4 = ti(i3 = t13 + (r12 - t13) / 2, n10, a3) - e12) > 0 ? r12 = i3 : t13 = i3;
      while (Math.abs(o4) > 1e-7 && ++s3 < 10);
      return i3;
    }(t12, n9, n9 + 0.1, e11, r11);
  }(o2), t11, n7);
}(e10, t10, r10, n6), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n6})` }), tH = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tE(0, 0, 1, 1), standard: Object.assign(tE(0.2, 0, 0, 1), { accelerate: tE(0.3, 0, 1, 1), decelerate: tE(0, 0, 0, 1) }), emphasized: Object.assign(tE(0.2, 0, 0, 1), { accelerate: tE(0.3, 0, 0.8, 0.15), decelerate: tE(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tE(0.4, 0, 0.2, 1), { decelerate: tE(0, 0, 0.2, 1), accelerate: tE(0.4, 0, 1, 1) }) } }, tz = (e10, r10) => {
  let a2 = null != r10 ? r10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return n({ onComplete: O(), $default: O() }, (r11, n6) => {
    let o2, { slots: i2, emit: s2 } = n6, l2 = (t10, r12) => {
      o2 = tr({ ...e10, autoplay: true, onComplete: () => {
        r12(), s2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t10.style, e11);
      } });
    }, c2 = (e11, t10) => {
      o2 = tr({ ...a2, autoplay: true, onComplete: () => {
        t10(), s2("complete", "leave");
      }, onUpdate: (t11) => {
        Object.assign(e11.style, t11);
      } });
    }, u2 = () => {
      null == o2 || o2.stop();
    };
    return () => {
      var e11;
      return t(E, { css: false, onEnter: l2, onEnterCancelled: u2, onLeave: c2, onLeaveCancelled: u2, children: null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2) });
    };
  }, { name: "Transition" });
}, tW = { transitionDuration: tO.transitionDuration(tH.duration), transitionTimingFunction: tO.transitionTimingFunction({ linear: tH.easing.linear.toString(), standard: tH.easing.standard.toString(), "standard-accelerate": tH.easing.standard.accelerate.toString(), "standard-decelerate": tH.easing.standard.decelerate.toString(), emphasized: tH.easing.emphasized.toString(), "emphasized-decelerate": tH.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tH.easing.emphasized.accelerate.toString(), legacy: tH.easing.legacy.toString(), "legacy-decelerate": tH.easing.legacy.decelerate.toString(), "legacy-accelerate": tH.easing.legacy.accelerate.toString() }) };
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
function tN(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tq(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tU(e10, t10) {
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
let tG = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tY = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tX = [95.047, 100, 108.883];
function tK(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tJ(e10) {
  return tK(t2(e10[0]), t2(e10[1]), t2(e10[2]));
}
function tZ(e10) {
  var t10;
  return 116 * t4(tU([t1((t10 = e10) >> 16 & 255), t1(t10 >> 8 & 255), t1(255 & t10)], tG)[1] / 100) - 16;
}
function tQ(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function t0(e10) {
  return 116 * t4(e10 / 100) - 16;
}
function t1(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function t2(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function t4(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class t5 {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tX, n6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tQ(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n6 - 42) / 92)), h2 = [100 / s2 * (f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2) + 1 - f2, 100 / l2 * f2 + 1 - f2, 100 / c2 * f2 + 1 - f2], p2 = 1 / (5 * n6 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, v2 = m2 * n6 + 0.1 * g2 * g2 * Math.cbrt(5 * n6), b2 = tQ(a2) / r10[1], y2 = 1.48 + Math.sqrt(b2), x2 = 0.725 / Math.pow(b2, 0.2), w2 = [Math.pow(v2 * h2[0] * s2 / 100, 0.42), Math.pow(v2 * h2[1] * l2 / 100, 0.42), Math.pow(v2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)];
    return new t5(b2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2, x2, x2, d2, u2, h2, v2, Math.pow(v2, 0.25), y2);
  }
  constructor(e10, t10, r10, n6, a2, o2, i2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n6, this.c = a2, this.nc = o2, this.rgbD = i2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t5.DEFAULT = t5.make();
class t3 {
  constructor(e10, t10, r10, n6, a2, o2, i2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n6, this.m = a2, this.s = o2, this.jstar = i2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n6 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n6 * n6), 0.63);
  }
  static fromInt(e10) {
    return t3.fromIntInViewingConditions(e10, t5.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = t1((16711680 & e10) >> 16), n6 = t1((65280 & e10) >> 8), a2 = t1(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n6 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n6 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n6 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tN(l2) * d2 / (d2 + 27.13), m2 = 400 * tN(c2) * f2 / (f2 + 27.13), g2 = 400 * tN(u2) * h2 / (h2 + 27.13), v2 = (11 * p2 + -12 * m2 + g2) / 11, b2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(b2, v2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = 100 * Math.pow((40 * p2 + 20 * m2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), M2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, C2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x2 < 20.14 ? x2 + 360 : x2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(v2 * v2 + b2 * b2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = C2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(C2 * t10.c / (t10.aw + 4)), O2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new t3(x2, P2, k2, M2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), O2 * Math.cos(w2), O2 * Math.sin(w2));
  }
  static fromJch(e10, t10, r10) {
    return t3.fromJchInViewingConditions(e10, t10, r10, t5.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n6) {
    let a2 = 4 / n6.c * Math.sqrt(e10 / 100) * (n6.aw + 4) * n6.fLRoot, o2 = t10 * n6.fLRoot, i2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n6.c / (n6.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * o2);
    return new t3(r10, t10, e10, a2, o2, i2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return t3.fromUcsInViewingConditions(e10, t10, r10, t5.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n6) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n6.fLRoot, o2 = 180 / Math.PI * Math.atan2(r10, t10);
    return o2 < 0 && (o2 += 360), t3.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, o2, n6);
  }
  toInt() {
    return this.viewed(t5.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n6 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a2 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, o2 = n6 / e10.nbb, i2 = Math.sin(r10), s2 = Math.cos(r10), l2 = 23 * (o2 + 0.305) * t10 / (23 * a2 + 11 * t10 * s2 + 108 * t10 * i2), c2 = l2 * s2, u2 = l2 * i2, d2 = (460 * o2 + 451 * c2 + 288 * u2) / 1403, f2 = (460 * o2 - 891 * c2 - 261 * u2) / 1403, h2 = (460 * o2 - 220 * c2 - 6300 * u2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), m2 = tN(d2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), g2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), v2 = tN(f2) * (100 / e10.fl) * Math.pow(g2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), y2 = tN(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), x2 = m2 / e10.rgbD[0], w2 = v2 / e10.rgbD[1], k2 = y2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n7 = tY[0][0] * e11 + tY[0][1] * t11 + tY[0][2] * r11, a3 = tY[1][0] * e11 + tY[1][1] * t11 + tY[1][2] * r11, o3 = tY[2][0] * e11 + tY[2][1] * t11 + tY[2][2] * r11;
      return tK(t2(n7), t2(a3), t2(o3));
    }(1.86206786 * x2 - 1.01125463 * w2 + 0.14918677 * k2, 0.38752654 * x2 + 0.62144744 * w2 - 897398e-8 * k2, -0.0158415 * x2 - 0.03412294 * w2 + 1.04996444 * k2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n6) {
    let a2 = n6.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n6.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n6.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n6.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n6.fl * Math.abs(o2) / 100, 0.42), c2 = Math.pow(n6.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * tN(a2) * s2 / (s2 + 27.13), d2 = 400 * tN(o2) * l2 / (l2 + 27.13), f2 = 400 * tN(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, v2 = g2 * Math.PI / 180, b2 = 100 * Math.pow((40 * u2 + 20 * d2 + f2) / 20 * n6.nbb / n6.aw, n6.c * n6.z), y2 = 4 / n6.c * Math.sqrt(b2 / 100) * (n6.aw + 4) * n6.fLRoot, x2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n6.nc * n6.ncb * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n6.n), 0.73), w2 = x2 * Math.sqrt(b2 / 100), k2 = w2 * n6.fLRoot, M2 = 50 * Math.sqrt(x2 * n6.c / (n6.aw + 4)), C2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new t3(g2, w2, b2, y2, k2, M2, (1 + 100 * 7e-3) * b2 / (1 + 7e-3 * b2), C2 * Math.cos(v2), C2 * Math.sin(v2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n6 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a2 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, o2 = n6 / e10.nbb, i2 = Math.sin(r10), s2 = Math.cos(r10), l2 = 23 * (o2 + 0.305) * t10 / (23 * a2 + 11 * t10 * s2 + 108 * t10 * i2), c2 = l2 * s2, u2 = l2 * i2, d2 = (460 * o2 + 451 * c2 + 288 * u2) / 1403, f2 = (460 * o2 - 891 * c2 - 261 * u2) / 1403, h2 = (460 * o2 - 220 * c2 - 6300 * u2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), m2 = tN(d2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), g2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), v2 = tN(f2) * (100 / e10.fl) * Math.pow(g2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), y2 = tN(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), x2 = m2 / e10.rgbD[0], w2 = v2 / e10.rgbD[1], k2 = y2 / e10.rgbD[2];
    return [1.86206786 * x2 - 1.01125463 * w2 + 0.14918677 * k2, 0.38752654 * x2 + 0.62144744 * w2 - 897398e-8 * k2, -0.0158415 * x2 - 0.03412294 * w2 + 1.04996444 * k2];
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
class t8 {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tN(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tU(e10, t8.SCALED_DISCOUNT_FROM_LINRGB), r10 = t8.chromaticAdaptation(t10[0]), n6 = t8.chromaticAdaptation(t10[1]), a2 = t8.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n6 - 2 * a2) / 9, (11 * r10 + -12 * n6 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return t8.sanitizeRadians(t10 - e10) < t8.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n6) {
    let a2 = t8.intercept(e10[n6], t10, r10[n6]);
    return t8.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = t8.Y_FROM_LINRGB[0], n6 = t8.Y_FROM_LINRGB[1], a2 = t8.Y_FROM_LINRGB[2], o2 = t10 % 4 <= 1 ? 0 : 100, i2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - o2 * n6 - i2 * a2) / r10;
      return t8.isBounded(t11) ? [t11, o2, i2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - i2 * r10 - o2 * a2) / n6;
      return t8.isBounded(t11) ? [i2, t11, o2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - o2 * r10 - i2 * n6) / a2;
      return t8.isBounded(t11) ? [o2, i2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n6 = r10, a2 = 0, o2 = 0, i2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = t8.nthVertex(e10, l2);
      if (c2[0] < 0)
        continue;
      let u2 = t8.hueOf(c2);
      if (!i2) {
        r10 = c2, n6 = c2, a2 = u2, o2 = u2, i2 = true;
        continue;
      }
      (s2 || t8.areInCyclicOrder(a2, u2, o2)) && (s2 = false, t8.areInCyclicOrder(a2, t10, u2) ? (n6 = c2, o2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n6];
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
    let r10 = t8.bisectToSegment(e10, t10), n6 = r10[0], a2 = t8.hueOf(n6), o2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n6[e11] !== o2[e11]) {
        let r11 = -1, i2 = 255;
        n6[e11] < o2[e11] ? (r11 = t8.criticalPlaneBelow(t8.trueDelinearized(n6[e11])), i2 = t8.criticalPlaneAbove(t8.trueDelinearized(o2[e11]))) : (r11 = t8.criticalPlaneAbove(t8.trueDelinearized(n6[e11])), i2 = t8.criticalPlaneBelow(t8.trueDelinearized(o2[e11])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(i2 - r11)); s2++) {
          let s3 = Math.floor((r11 + i2) / 2), l2 = t8.CRITICAL_PLANES[s3], c2 = t8.setCoordinate(n6, l2, o2, e11), u2 = t8.hueOf(c2);
          t8.areInCyclicOrder(a2, t10, u2) ? (o2 = c2, i2 = s3) : (n6 = c2, a2 = u2, r11 = s3);
        }
      }
    return t8.midpoint(n6, o2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return tN(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n6 = 11 * Math.sqrt(r10), a2 = t5.DEFAULT, o2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), i2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n6 / 100, u2 = Math.pow((0 === t10 || 0 === n6 ? 0 : t10 / Math.sqrt(c2)) * o2, 1 / 0.9), d2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, f2 = 23 * (d2 + 0.305) * u2 / (23 * i2 + 11 * u2 * l2 + 108 * u2 * s2), h2 = f2 * l2, p2 = f2 * s2, m2 = (460 * d2 + 451 * h2 + 288 * p2) / 1403, g2 = (460 * d2 - 891 * h2 - 261 * p2) / 1403, v2 = (460 * d2 - 220 * h2 - 6300 * p2) / 1403, b2 = tU([t8.inverseChromaticAdaptation(m2), t8.inverseChromaticAdaptation(g2), t8.inverseChromaticAdaptation(v2)], t8.LINRGB_FROM_SCALED_DISCOUNT);
      if (b2[0] < 0 || b2[1] < 0 || b2[2] < 0)
        break;
      let y2 = t8.Y_FROM_LINRGB[0], x2 = t8.Y_FROM_LINRGB[1], w2 = t8.Y_FROM_LINRGB[2], k2 = y2 * b2[0] + x2 * b2[1] + w2 * b2[2];
      if (k2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (b2[0] > 100.01 || b2[1] > 100.01 || b2[2] > 100.01)
          return 0;
        return tJ(b2);
      }
      n6 -= (k2 - r10) * n6 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n6;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = t2(tQ(e11));
        return tK(t11, t11, t11);
      }(r10);
    (n6 = e10 % 360) < 0 && (n6 += 360);
    let a2 = (e10 = n6) / 180 * Math.PI, o2 = tQ(r10), i2 = t8.findResultByJ(a2, t10, o2);
    return 0 !== i2 ? i2 : tJ(t8.bisectToLimit(o2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return t3.fromInt(t8.solveToInt(e10, t10, r10));
  }
}
t8.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], t8.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], t8.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], t8.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class t6 {
  static from(e10, t10, r10) {
    return new t6(t8.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new t6(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(t8.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(t8.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(t8.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = t3.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tZ(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = t3.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tZ(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = t3.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = t3.fromXyzInViewingConditions(t10[0], t10[1], t10[2], t5.make());
    return t6.from(r10.hue, r10.chroma, t0(t10[1]));
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
class t9 {
  static ratioOfTones(e10, t10) {
    return e10 = tq(0, 100, e10), t10 = tq(0, 100, t10), t9.ratioOfYs(tQ(e10), tQ(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tQ(e10), n6 = t10 * (r10 + 5) - 5, a2 = t9.ratioOfYs(n6, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = t0(n6) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tQ(e10), n6 = (r10 + 5) / t10 - 5, a2 = t9.ratioOfYs(r10, n6);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = t0(n6) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = t9.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = t9.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class t7 {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n6 = 65 > Math.round(e10.tone);
    return t10 && r10 && n6;
  }
  static fixIfDisliked(e10) {
    return t7.isDisliked(e10) ? t6.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class re {
  static fromPalette(e10) {
    var t10, r10;
    return new re(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n6, a2, o2, i2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n6, this.background = a2, this.secondBackground = o2, this.contrastCurve = i2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && o2)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && i2)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !i2)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e10), n6 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n6), n6;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n6 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, u2 = c2 ? n6 : a2, d2 = c2 ? a2 : n6, f2 = this.name === u2.name, h2 = e10.isDark ? 1 : -1, p2 = u2.contrastCurve.getContrast(e10.contrastLevel), m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = u2.tone(e10), v2 = t9.ratioOfTones(l2, g2) >= p2 ? g2 : re.foregroundTone(l2, p2), b2 = d2.tone(e10), y2 = t9.ratioOfTones(l2, b2) >= m2 ? b2 : re.foregroundTone(l2, m2);
      return t10 && (v2 = re.foregroundTone(l2, p2), y2 = re.foregroundTone(l2, m2)), (y2 - v2) * h2 >= o2 || ((y2 = tq(0, 100, v2 + o2 * h2)) - v2) * h2 >= o2 || (v2 = tq(0, 100, y2 - o2 * h2)), 50 <= v2 && v2 < 60 ? y2 = h2 > 0 ? Math.max(y2, (v2 = 60) + o2 * h2) : Math.min(y2, (v2 = 49) + o2 * h2) : 50 <= y2 && y2 < 60 && (y2 = s2 ? h2 > 0 ? Math.max(y2, (v2 = 60) + o2 * h2) : Math.min(y2, (v2 = 49) + o2 * h2) : h2 > 0 ? 60 : 49), f2 ? v2 : y2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n6 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (t9.ratioOfTones(n6, r10) >= a2 || (r10 = re.foregroundTone(n6, a2)), t10 && (r10 = re.foregroundTone(n6, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = t9.ratioOfTones(49, n6) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n7] = [this.background, this.secondBackground], [o2, i2] = [t11(e10).getTone(e10), n7(e10).getTone(e10)], [s2, l2] = [Math.max(o2, i2), Math.min(o2, i2)];
        if (t9.ratioOfTones(s2, r10) >= a2 && t9.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = t9.lighter(s2, a2), u2 = t9.darker(l2, a2), d2 = [];
        return (-1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2), re.tonePrefersLightForeground(o2) || re.tonePrefersLightForeground(i2)) ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = t9.lighterUnsafe(e10, t10), n6 = t9.darkerUnsafe(e10, t10), a2 = t9.ratioOfTones(r10, e10), o2 = t9.ratioOfTones(n6, e10);
    if (!re.tonePrefersLightForeground(e10))
      return o2 >= t10 || o2 >= a2 ? n6 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - o2) && a2 < t10 && o2 < t10;
      return a2 >= t10 || a2 >= o2 || e11 ? r10 : n6;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return re.tonePrefersLightForeground(e10) && !re.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(q = Z || (Z = {}))[q.MONOCHROME = 0] = "MONOCHROME", q[q.NEUTRAL = 1] = "NEUTRAL", q[q.TONAL_SPOT = 2] = "TONAL_SPOT", q[q.VIBRANT = 3] = "VIBRANT", q[q.EXPRESSIVE = 4] = "EXPRESSIVE", q[q.FIDELITY = 5] = "FIDELITY", q[q.CONTENT = 6] = "CONTENT", q[q.RAINBOW = 7] = "RAINBOW", q[q.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class rt {
  constructor(e10, t10, r10, n6) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n6;
  }
  getContrast(e10) {
    var t10, r10, n6, a2, o2, i2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n6 = (e10 - -1) / 1)) * t10 + n6 * r10) : e10 < 0.5 ? (a2 = this.normal, o2 = this.medium, (1 - (i2 = (e10 - 0) / 0.5)) * a2 + i2 * o2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
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
class rr {
  constructor(e10, t10, r10, n6, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n6, this.stayTogether = a2;
  }
}
function rn(e10) {
  return e10.variant === Z.FIDELITY || e10.variant === Z.CONTENT;
}
function ra(e10) {
  return e10.variant === Z.MONOCHROME;
}
function ro(e10, t10) {
  let r10 = e10.inViewingConditions(t5.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return re.tonePrefersLightForeground(e10.tone) && !re.toneAllowsLightForeground(r10.tone) ? re.enableLightForeground(e10.tone) : re.enableLightForeground(r10.tone);
}
class ri {
  static highestSurface(e10) {
    return e10.isDark ? ri.surfaceBright : ri.surfaceDim;
  }
}
ri.contentAccentToneDelta = 15, ri.primaryPaletteKeyColor = re.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), ri.secondaryPaletteKeyColor = re.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), ri.tertiaryPaletteKeyColor = re.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), ri.neutralPaletteKeyColor = re.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), ri.neutralVariantPaletteKeyColor = re.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), ri.background = re.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ri.onBackground = re.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ri.background, contrastCurve: new rt(3, 3, 4.5, 7) }), ri.surface = re.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ri.surfaceDim = re.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), ri.surfaceBright = re.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), ri.surfaceContainerLowest = re.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), ri.surfaceContainerLow = re.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), ri.surfaceContainer = re.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), ri.surfaceContainerHigh = re.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), ri.surfaceContainerHighest = re.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), ri.onSurface = re.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(4.5, 7, 11, 21) }), ri.surfaceVariant = re.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), ri.onSurfaceVariant = re.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11) }), ri.inverseSurface = re.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), ri.inverseOnSurface = re.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => ri.inverseSurface, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.outline = re.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1.5, 3, 4.5, 7) }), ri.outlineVariant = re.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7) }), ri.shadow = re.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ri.scrim = re.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ri.surfaceTint = re.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), ri.primary = re.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ri.primaryContainer, ri.primary, 15, "nearer", false) }), ri.onPrimary = re.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ri.primary, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.primaryContainer = re.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? ro(e10.sourceColorHct, e10) : ra(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.primaryContainer, ri.primary, 15, "nearer", false) }), ri.onPrimaryContainer = re.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? re.foregroundTone(ri.primaryContainer.tone(e10), 4.5) : ra(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => ri.primaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.inversePrimary = re.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => ri.inverseSurface, contrastCurve: new rt(3, 4.5, 7, 11) }), ri.secondary = re.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ri.secondaryContainer, ri.secondary, 15, "nearer", false) }), ri.onSecondary = re.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => ri.secondary, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.secondaryContainer = re.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (ra(e10))
    return e10.isDark ? 30 : 85;
  if (!rn(e10))
    return t10;
  let r10 = function(e11, t11, r11, n6) {
    let a2 = r11, o2 = t6.from(e11, t11, r11);
    if (o2.chroma < t11) {
      let r12 = o2.chroma;
      for (; o2.chroma < t11; ) {
        a2 += n6 ? -1 : 1;
        let i2 = t6.from(e11, t11, a2);
        if (r12 > i2.chroma || 0.4 > Math.abs(i2.chroma - t11))
          break;
        Math.abs(i2.chroma - t11) < Math.abs(o2.chroma - t11) && (o2 = i2), r12 = Math.max(r12, i2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return ro(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.secondaryContainer, ri.secondary, 15, "nearer", false) }), ri.onSecondaryContainer = re.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? re.foregroundTone(ri.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ri.secondaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.tertiary = re.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ri.tertiaryContainer, ri.tertiary, 15, "nearer", false) }), ri.onTertiary = re.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ri.tertiary, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.tertiaryContainer = re.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (ra(e10))
    return e10.isDark ? 60 : 49;
  if (!rn(e10))
    return e10.isDark ? 30 : 90;
  let t10 = ro(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return t7.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.tertiaryContainer, ri.tertiary, 15, "nearer", false) }), ri.onTertiaryContainer = re.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 0 : 100 : rn(e10) ? re.foregroundTone(ri.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ri.tertiaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.error = re.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ri.errorContainer, ri.error, 15, "nearer", false) }), ri.onError = re.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => ri.error, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.errorContainer = re.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.errorContainer, ri.error, 15, "nearer", false) }), ri.onErrorContainer = re.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ri.errorContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.primaryFixed = re.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 40 : 90, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.primaryFixed, ri.primaryFixedDim, 10, "lighter", true) }), ri.primaryFixedDim = re.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 30 : 80, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.primaryFixed, ri.primaryFixedDim, 10, "lighter", true) }), ri.onPrimaryFixed = re.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 100 : 10, background: (e10) => ri.primaryFixedDim, secondBackground: (e10) => ri.primaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.onPrimaryFixedVariant = re.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 90 : 30, background: (e10) => ri.primaryFixedDim, secondBackground: (e10) => ri.primaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) }), ri.secondaryFixed = re.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 80 : 90, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.secondaryFixed, ri.secondaryFixedDim, 10, "lighter", true) }), ri.secondaryFixedDim = re.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 70 : 80, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.secondaryFixed, ri.secondaryFixedDim, 10, "lighter", true) }), ri.onSecondaryFixed = re.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => ri.secondaryFixedDim, secondBackground: (e10) => ri.secondaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.onSecondaryFixedVariant = re.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 25 : 30, background: (e10) => ri.secondaryFixedDim, secondBackground: (e10) => ri.secondaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) }), ri.tertiaryFixed = re.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 40 : 90, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.tertiaryFixed, ri.tertiaryFixedDim, 10, "lighter", true) }), ri.tertiaryFixedDim = re.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 30 : 80, isBackground: true, background: (e10) => ri.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ri.tertiaryFixed, ri.tertiaryFixedDim, 10, "lighter", true) }), ri.onTertiaryFixed = re.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 100 : 10, background: (e10) => ri.tertiaryFixedDim, secondBackground: (e10) => ri.tertiaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ri.onTertiaryFixedVariant = re.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 90 : 30, background: (e10) => ri.tertiaryFixedDim, secondBackground: (e10) => ri.tertiaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) });
class rs {
  static fromInt(e10) {
    let t10 = t6.fromInt(e10);
    return rs.fromHct(t10);
  }
  static fromHct(e10) {
    return new rs(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new rs(e10, t10, rs.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = t6.from(e10, t10, 50), n6 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let o2 = t6.from(e10, t10, 50 + a2), i2 = Math.abs(o2.chroma - t10);
      i2 < n6 && (n6 = i2, r10 = o2);
      let s2 = t6.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n6 && (n6 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = t6.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return t6.fromInt(this.tone(e10));
  }
}
class rl {
  static of(e10) {
    return new rl(e10, false);
  }
  static contentOf(e10) {
    return new rl(e10, true);
  }
  static fromColors(e10) {
    return rl.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return rl.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new rl(t10.primary, e10);
    if (t10.secondary) {
      let n6 = new rl(t10.secondary, e10);
      r10.a2 = n6.a1;
    }
    if (t10.tertiary) {
      let n6 = new rl(t10.tertiary, e10);
      r10.a3 = n6.a1;
    }
    if (t10.error) {
      let n6 = new rl(t10.error, e10);
      r10.error = n6.a1;
    }
    if (t10.neutral) {
      let n6 = new rl(t10.neutral, e10);
      r10.n1 = n6.n1;
    }
    if (t10.neutralVariant) {
      let n6 = new rl(t10.neutralVariant, e10);
      r10.n2 = n6.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = t6.fromInt(e10), n6 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = rs.fromHueAndChroma(n6, a2), this.a2 = rs.fromHueAndChroma(n6, a2 / 3), this.a3 = rs.fromHueAndChroma(n6 + 60, a2 / 2), this.n1 = rs.fromHueAndChroma(n6, Math.min(a2 / 12, 4)), this.n2 = rs.fromHueAndChroma(n6, Math.min(a2 / 6, 8))) : (this.a1 = rs.fromHueAndChroma(n6, Math.max(48, a2)), this.a2 = rs.fromHueAndChroma(n6, 16), this.a3 = rs.fromHueAndChroma(n6 + 60, 24), this.n1 = rs.fromHueAndChroma(n6, 4), this.n2 = rs.fromHueAndChroma(n6, 8)), this.error = rs.fromHueAndChroma(25, 84);
  }
}
function rc(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n6 = 8 === e10.length;
  if (!t10 && !r10 && !n6)
    throw Error("unexpected hex " + e10);
  let a2 = 0, o2 = 0, i2 = 0;
  return t10 ? (a2 = ru(e10.slice(0, 1).repeat(2)), o2 = ru(e10.slice(1, 2).repeat(2)), i2 = ru(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = ru(e10.slice(0, 2)), o2 = ru(e10.slice(2, 4)), i2 = ru(e10.slice(4, 6))) : n6 && (a2 = ru(e10.slice(2, 4)), o2 = ru(e10.slice(4, 6)), i2 = ru(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & o2) << 8 | 255 & i2) >>> 0;
}
function ru(e10) {
  return parseInt(e10, 16);
}
let rd = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rf = (e10) => {
  let t10 = { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10 };
  return [t10.r, t10.g, t10.b];
}, rh = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rp = class _rp {
  constructor(e10) {
    this.seeds = e10;
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 87], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds)
      e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let o2 in e10) {
      let [i2, s2, l2] = d(e10, [o2], []);
      if (this.seeds[i2]) {
        var n6, a2;
        r10[o2] = rd[s2] ? `${i2}.${s2}` : null === (n6 = this.seeds[i2]) || void 0 === n6 ? void 0 : n6.tone(s2), t10[o2] = rd[l2] ? `${i2}.${l2}` : null === (a2 = this.seeds[i2]) || void 0 === a2 ? void 0 : a2.tone(l2);
      }
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), n6 = {}, a2 = {};
    for (let e11 in t10)
      if (n6[`${e11}`] = { _default: _(t10[e11]) ? rf(t10[e11]) : t10[e11], _dark: _(r10[e11]) ? rf(r10[e11]) : r10[e11] }, rh(e11) && (a2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = tO.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = tO.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(rd).reduce((t11, r11) => Object.assign(t11, { [r11]: rf(e11.tone(parseInt(r11))) }), {});
    return { color: tO.color({ ...w(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n6 }), containerStyle: tO.customMixin("containerStyle", { sys: a2 }) };
  }
};
__publicField(_rp, "toHEX", (e10) => `#${rf(e10).map((e11) => D(e11.toString(16), 2, "0")).join("")}`);
__publicField(_rp, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n6, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = rl.contentFromColors({ primary: rc(t10), secondary: r10 ? rc(r10) : void 0, tertiary: n6 ? rc(n6) : void 0, error: i2 ? rc(i2) : void 0 });
  return a2 && (l2.n1 = rs.fromHueAndChroma(rc(a2), 4)), o2 && (l2.n2 = rs.fromHueAndChroma(rc(o2), 8)), new _rp({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...w(s2, (e11) => rs.fromInt(rc(e11))) });
});
let rp = _rp;
let rm = tO.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rg = { font: tO.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tO.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tO.customMixin("textStyle", { sys: { "display-large": tO.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tO.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tO.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tO.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tO.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tO.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tO.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tO.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tO.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tO.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tO.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tO.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rv = rp.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rb = { ...rg, ...tW, ...tV, rounded: rm, ...rv.toDesignTokens({ primary: ["primary", 80, 50] }) }, ry = tj.create(rb, { varPrefix: "vk" }), rx = a(() => ry, { name: "Theme" });
var rw = function() {
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
      var n6 = function(e12) {
        if (e12.sheet)
          return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e12)
            return document.styleSheets[t12];
      }(r10);
      try {
        n6.insertRule(e11, n6.cssRules.length);
      } catch (e12) {
      }
    } else
      r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), rk = "-ms-", rM = "-moz-", rC = "-webkit-", rP = "comm", r_ = "rule", rS = "decl", rO = "@keyframes", rD = Math.abs, rT = String.fromCharCode, r$ = Object.assign;
function rR(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rA(e10, t10) {
  return e10.indexOf(t10);
}
function rI(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rL(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rF(e10) {
  return e10.length;
}
function rB(e10, t10) {
  return t10.push(e10), e10;
}
var rj = 1, rV = 1, rE = 0, rH = 0, rz = 0, rW = "";
function rN(e10, t10, r10, n6, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n6, props: a2, children: o2, line: rj, column: rV, length: i2, return: "" };
}
function rq(e10, t10) {
  return r$(rN("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rU() {
  return rz = rH < rE ? rI(rW, rH++) : 0, rV++, 10 === rz && (rV = 1, rj++), rz;
}
function rG() {
  return rI(rW, rH);
}
function rY(e10) {
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
function rX(e10) {
  return rj = rV = 1, rE = rF(rW = e10), rH = 0, [];
}
function rK(e10) {
  var t10, r10;
  return (t10 = rH - 1, r10 = function e11(t11) {
    for (; rU(); )
      switch (rz) {
        case t11:
          return rH;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(rz);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          rU();
      }
    return rH;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rL(rW, t10, r10)).trim();
}
function rJ(e10, t10, r10, n6, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n6; ++p2)
    for (var v2 = 0, b2 = rL(e10, d2 + 1, d2 = rD(m2 = i2[p2])), y2 = e10; v2 < h2; ++v2)
      (y2 = (m2 > 0 ? f2[v2] + " " + b2 : rR(b2, /&\f/g, f2[v2])).trim()) && (l2[g2++] = y2);
  return rN(e10, t10, r10, 0 === a2 ? r_ : s2, l2, c2, u2);
}
function rZ(e10, t10, r10, n6) {
  return rN(e10, t10, r10, rS, rL(e10, 0, n6), rL(e10, n6 + 1, -1), n6);
}
function rQ(e10, t10) {
  for (var r10 = "", n6 = e10.length, a2 = 0; a2 < n6; a2++)
    r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function r0(e10, t10, r10, n6) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case rS:
      return e10.return = e10.return || e10.value;
    case rP:
      return "";
    case rO:
      return e10.return = e10.value + "{" + rQ(e10.children, n6) + "}";
    case r_:
      e10.value = e10.props.join(",");
  }
  return rF(r10 = rQ(e10.children, n6)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var r1 = function(e10, t10, r10) {
  for (var n6 = 0, a2 = 0; n6 = a2, a2 = rG(), 38 === n6 && 12 === a2 && (t10[r10] = 1), !rY(a2); )
    rU();
  return rL(rW, e10, rH);
}, r2 = function(e10, t10) {
  var r10 = -1, n6 = 44;
  do
    switch (rY(n6)) {
      case 0:
        38 === n6 && 12 === rG() && (t10[r10] = 1), e10[r10] += r1(rH - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rK(n6);
        break;
      case 4:
        if (44 === n6) {
          e10[++r10] = 58 === rG() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rT(n6);
    }
  while (n6 = rU());
  return e10;
}, r4 = function(e10, t10) {
  var r10;
  return r10 = r2(rX(e10), t10), rW = "", r10;
}, r5 = /* @__PURE__ */ new WeakMap(), r3 = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n6 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || r5.get(r10)) && !n6) {
      r5.set(e10, true);
      for (var a2 = [], o2 = r4(t10, a2), i2 = r10.props, s2 = 0, l2 = 0; s2 < o2.length; s2++)
        for (var c2 = 0; c2 < i2.length; c2++, l2++)
          e10.props[l2] = a2[s2] ? o2[s2].replace(/&\f/g, i2[c2]) : i2[c2] + " " + o2[s2];
    }
  }
}, r8 = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, r6 = [function(e10, t10, r10, n6) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case rS:
        e10.return = function e11(t11, r11) {
          switch (45 ^ rI(t11, 0) ? (((r11 << 2 ^ rI(t11, 0)) << 2 ^ rI(t11, 1)) << 2 ^ rI(t11, 2)) << 2 ^ rI(t11, 3) : 0) {
            case 5103:
              return rC + "print-" + t11 + t11;
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
              return rC + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return rC + t11 + rM + t11 + rk + t11 + t11;
            case 6828:
            case 4268:
              return rC + t11 + rk + t11 + t11;
            case 6165:
              return rC + t11 + rk + "flex-" + t11 + t11;
            case 5187:
              return rC + t11 + rR(t11, /(\w+).+(:[^]+)/, rC + "box-$1$2" + rk + "flex-$1$2") + t11;
            case 5443:
              return rC + t11 + rk + "flex-item-" + rR(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rC + t11 + rk + "flex-line-pack" + rR(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rC + t11 + rk + rR(t11, "shrink", "negative") + t11;
            case 5292:
              return rC + t11 + rk + rR(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rC + "box-" + rR(t11, "-grow", "") + rC + t11 + rk + rR(t11, "grow", "positive") + t11;
            case 4554:
              return rC + rR(t11, /([^-])(transform)/g, "$1" + rC + "$2") + t11;
            case 6187:
              return rR(rR(rR(t11, /(zoom-|grab)/, rC + "$1"), /(image-set)/, rC + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rR(t11, /(image-set\([^]*)/, rC + "$1$`$1");
            case 4968:
              return rR(rR(t11, /(.+:)(flex-)?(.*)/, rC + "box-pack:$3" + rk + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rC + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rR(t11, /(.+)-inline(.+)/, rC + "$1$2") + t11;
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
              if (rF(t11) - 1 - r11 > 6)
                switch (rI(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rI(t11, r11 + 4))
                      break;
                  case 102:
                    return rR(t11, /(.+:)(.+)-([^]+)/, "$1" + rC + "$2-$3$1" + rM + (108 == rI(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rA(t11, "stretch") ? e11(rR(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rI(t11, r11 + 1))
                break;
            case 6444:
              switch (rI(t11, rF(t11) - 3 - (~rA(t11, "!important") && 10))) {
                case 107:
                  return rR(t11, ":", ":" + rC) + t11;
                case 101:
                  return rR(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rC + (45 === rI(t11, 14) ? "inline-" : "") + "box$3$1" + rC + "$2$3$1" + rk + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rI(t11, r11 + 11)) {
                case 114:
                  return rC + t11 + rk + rR(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rC + t11 + rk + rR(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rC + t11 + rk + rR(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rC + t11 + rk + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case rO:
        return rQ([rq(e10, { value: rR(e10.value, "@", "@" + rC) })], n6);
      case r_:
        if (e10.length) {
          var a2, o2;
          return a2 = e10.props, o2 = function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return rQ([rq(e10, { props: [rR(t11, /:(read-\w+)/, ":" + rM + "$1")] })], n6);
              case "::placeholder":
                return rQ([rq(e10, { props: [rR(t11, /:(plac\w+)/, ":" + rC + "input-$1")] }), rq(e10, { props: [rR(t11, /:(plac\w+)/, ":" + rM + "$1")] }), rq(e10, { props: [rR(t11, /:(plac\w+)/, rk + "input-$1")] })], n6);
            }
            return "";
          }, a2.map(o2).join("");
        }
    }
}], r9 = function(e10) {
  var t10, r10, n6, a2, o2, i2, s2 = e10.key;
  if ("css" === s2) {
    var l2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c2 = e10.stylisPlugins || r6, u2 = {}, d2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      u2[t11[r11]] = true;
    d2.push(e11);
  });
  var f2 = (r10 = (t10 = [r3, r8].concat(c2, [r0, (n6 = function(e11) {
    i2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n6(e11);
  })])).length, function(e11, n7, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n7, a3, o3) || "";
    return i3;
  }), h2 = function(e11) {
    var t11, r11;
    return rQ((r11 = function e12(t12, r12, n7, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m2 = 0, g2 = 0, v2 = 1, b2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = o3, M2 = i3, C2 = a3, P2 = w2; b2; )
        switch (g2 = x2, x2 = rU()) {
          case 40:
            if (108 != g2 && 58 == rI(P2, h3 - 1)) {
              -1 != rA(P2 += rR(rK(x2), "&", "&\f"), "&\f") && (y2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rK(x2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e13) {
              for (; rz = rG(); )
                if (rz < 33)
                  rU();
                else
                  break;
              return rY(e13) > 2 || rY(rz) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e13, t13) {
              for (var r13; --t13 && rU() && !(rz < 48) && !(rz > 102) && (!(rz > 57) || !(rz < 65)) && (!(rz > 70) || !(rz < 97)); )
                ;
              return r13 = rH + (t13 < 6 && 32 == rG() && 32 == rU()), rL(rW, e13, r13);
            }(rH - 1, 7);
            continue;
          case 47:
            switch (rG()) {
              case 42:
              case 47:
                rB(rN(u3 = function(e13, t13) {
                  for (; rU(); )
                    if (e13 + rz === 57)
                      break;
                    else if (e13 + rz === 84 && 47 === rG())
                      break;
                  return "/*" + rL(rW, t13, rH - 1) + "*" + rT(47 === e13 ? e13 : rU());
                }(rU(), rH), r12, n7, rP, rT(rz), rL(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * v2:
            l3[d3++] = rF(P2) * y2;
          case 125 * v2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                b2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = rR(P2, /\f/g, "")), m2 > 0 && rF(P2) - h3 && rB(m2 > 32 ? rZ(P2 + ";", a3, n7, h3 - 1) : rZ(rR(P2, " ", "") + ";", a3, n7, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rB(C2 = rJ(P2, r12, n7, d3, f3, o3, l3, w2, k2 = [], M2 = [], h3), i3), 123 === x2) {
                  if (0 === f3)
                    e12(P2, r12, C2, C2, k2, i3, h3, l3, M2);
                  else
                    switch (99 === p3 && 110 === rI(P2, 3) ? 100 : p3) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, a3 && rB(rJ(t12, C2, C2, 0, 0, o3, l3, w2, o3, k2 = [], h3), M2), o3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, v2 = y2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rF(P2), m2 = g2;
          default:
            if (v2 < 1) {
              if (123 == x2)
                --v2;
              else if (125 == x2 && 0 == v2++ && 125 == (rz = rH > 0 ? rI(rW, --rH) : 0, rV--, 10 === rz && (rV = 1, rj--), rz))
                continue;
            }
            switch (P2 += rT(x2), x2 * v2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rF(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === rG() && (P2 += rK(rU())), p3 = rG(), f3 = h3 = rF(w2 = P2 += function(e13) {
                  for (; !rY(rG()); )
                    rU();
                  return rL(rW, e13, rH);
                }(rH)), x2++;
                break;
              case 45:
                45 === g2 && 2 == rF(P2) && (v2 = 0);
            }
        }
      return i3;
    }("", null, null, null, [""], t11 = rX(t11 = e11), 0, [0], t11), rW = "", r11), f2);
  };
  o2 = function(e11, t11, r11, n7) {
    i2 = r11, h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n7 && (p2.inserted[t11.name] = true);
  };
  var p2 = { key: s2, sheet: new rw({ key: s2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u2, registered: {}, insert: o2 };
  return p2.sheet.hydrate(d2), p2;
}, r7 = function(e10, t10, r10) {
  var n6 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n6] && (e10.registered[n6] = t10.styles);
}, ne = function(e10, t10, r10) {
  r7(e10, t10, r10);
  var n6 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n6 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let nt = a(() => r9({ key: "css" }), { name: "Cache" }), nr = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      ne(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, nn = Object.assign(n({ sx: O(), component: O().optional().default("div") }, (e10, r10) => {
  var n6;
  let { slots: a2, expose: i2 } = r10, s2 = rx.use(), l2 = nt.use(), c2 = s2.unstable_css(l2, null !== (n6 = e10.sx) && void 0 !== n6 ? n6 : {}), u2 = () => "0" !== c2.name ? `${l2.key}-${c2.name}` : "", d2 = nr(l2);
  $(() => {
    d2({ serialized: c2, isStringTag: true });
  });
  let f2 = o();
  return i2({ $$forwardRef: f2 }), () => {
    var r11;
    return t(null !== (r11 = e10.component) && void 0 !== r11 ? r11 : "div", { ref: f2, class: u2(), children: a2 });
  };
}), { displayName: "Box" }), na = (e10, r10) => (n6) => {
  let a2 = {};
  for (let t10 in e10)
    "component" !== t10 && "sx" !== t10 && e10[t10] && (a2[`data-${t10}`] = e10[t10]);
  return t(n6, { ...a2, children: r10.slots });
};
function no(e10, t10, r10) {
  var a2;
  let o2 = null !== (a2 = C(t10) ? t10 : r10) && void 0 !== a2 ? a2 : na, i2 = f(t10) ? t10 : {};
  return (t11) => {
    let r11 = n({ ...i2, sx: O().optional(), component: O().optional() }, (n6, a3) => {
      let i3 = rx.use(), s2 = nt.use(), l2 = nr(s2);
      t11.label = r11.name;
      let c2 = j(""), u2 = i3.unstable_css(s2, t11), d2 = () => "0" !== u2.name ? `${s2.key}-${u2.name}${c2.value}` : `${c2.value}`;
      if (e10.__styled) {
        var f2;
        let e11 = i3.unstable_css(s2, null !== (f2 = n6.sx) && void 0 !== f2 ? f2 : {});
        "0" !== e11.name && (c2.value = ` ${s2.key}-${e11.name}`), $(() => {
          l2({ serialized: u2, isStringTag: true }), l2({ serialized: e11, isStringTag: true });
        });
      } else
        R(() => {
          l2({ serialized: u2, isStringTag: true });
        });
      let h2 = o2(n6, a3);
      return () => {
        if (e10.__styled) {
          let t13 = h2(e10);
          return t13 ? A(t13, { component: n6.component, class: d2() }) : null;
        }
        let t12 = h2(nn);
        return t12 ? A(t12, { component: n6.component || e10, sx: n6.sx, class: d2() }) : null;
      };
    });
    return r11.__styled = true, r11;
  };
}
let ni = Object.assign(n({ styles: O() }, (e10) => {
  let { styles: t10 } = e10, r10 = rx.use(), n6 = nt.use(), a2 = nr(n6), o2 = r10.unstable_css(n6, g(t10) ? { "&": t10 } : t10);
  return R(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
}), { displayName: "GlobalStyle" }), ns = Object.assign(n(() => {
  let e10 = rx.use().rootCSSVars;
  return () => t(ni, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), { displayName: "CSSReset" }), nl = a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), nc = a(() => new nu(j(null), j(null), () => false), { name: "Overlay" });
class nu {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = V(this.triggerRef), r10 = V(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let nd = Object.assign(n({ isOpen: T().optional(), style: O().optional(), contentRef: O().optional(), triggerRef: O().optional(), onClickOutside: O(), onEscKeydown: O(), onContentBeforeMount: O(), $transition: O().optional(), $default: O().optional() }, (e10, r10) => {
  var n6;
  let { slots: a2, attrs: o2, emit: u2 } = r10, d2 = e10.contentRef || j(null), f2 = new nu(null !== (n6 = e10.triggerRef) && void 0 !== n6 ? n6 : j(null), d2, () => !!e10.isOpen), h2 = nl.use();
  return I(nc.use().add(f2)), window && i(s(d2, "value"), c((e11) => {
    if (!e11)
      return;
    let t10 = (e12) => {
      f2.isClickInside(e12) || u2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t10), () => {
      window.removeEventListener("pointerdown", t10);
    };
  }), c((e11) => {
    if (!e11)
      return;
    let t10 = (e12) => {
      "Escape" === e12.key && f2.topmost() && u2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t10), () => {
      window.removeEventListener("keydown", t10);
    };
  }), l()), () => {
    var r11;
    let n7 = e10.isOpen ? A(t("div", { ...o2, ref: d2, style: e10.style, children: t(nc, { value: f2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      u2("content-before-mount");
    } }) : null;
    return t(L, { to: h2.mountPoint(), children: a2.transition ? a2.transition({ content: n7 }) : n7 });
  };
}, { inheritAttrs: false, name: "Overlay" }), { displayName: "Overlay" });
var nf = "bottom", nh = "right", np = "left", nm = "auto", ng = ["top", nf, nh, np], nv = "start", nb = "viewport", ny = "popper", nx = ng.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nv, t10 + "-end"]);
}, []), nw = [].concat(ng, [nm]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nv, t10 + "-end"]);
}, []), nk = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nM(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nC(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nP(e10) {
  var t10 = nC(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function n_(e10) {
  var t10 = nC(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nS(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nC(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nO(e10) {
  return e10.split("-")[0];
}
var nD = Math.max, nT = Math.min, n$ = Math.round;
function nR() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nA() {
  return !/^((?!chrome|android).)*safari/i.test(nR());
}
function nI(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n6 = e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && n_(e10) && (a2 = e10.offsetWidth > 0 && n$(n6.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && n$(n6.height) / e10.offsetHeight || 1);
  var i2 = (nP(e10) ? nC(e10) : window).visualViewport, s2 = !nA() && r10, l2 = (n6.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n6.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n6.width / a2, d2 = n6.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nL(e10) {
  return nC(e10).getComputedStyle(e10);
}
function nF(e10) {
  return ((nP(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function nB(e10) {
  return "html" === nM(e10) ? e10 : e10.assignedSlot || e10.parentNode || (nS(e10) ? e10.host : null) || nF(e10);
}
function nj(e10) {
  return n_(e10) && "fixed" !== nL(e10).position ? e10.offsetParent : null;
}
function nV(e10) {
  for (var t10 = nC(e10), r10 = nj(e10); r10 && ["table", "td", "th"].indexOf(nM(r10)) >= 0 && "static" === nL(r10).position; )
    r10 = nj(r10);
  return r10 && ("html" === nM(r10) || "body" === nM(r10) && "static" === nL(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(nR());
    if (/Trident/i.test(nR()) && n_(e11) && "fixed" === nL(e11).position)
      return null;
    var r11 = nB(e11);
    for (nS(r11) && (r11 = r11.host); n_(r11) && 0 > ["html", "body"].indexOf(nM(r11)); ) {
      var n6 = nL(r11);
      if ("none" !== n6.transform || "none" !== n6.perspective || "paint" === n6.contain || -1 !== ["transform", "perspective"].indexOf(n6.willChange) || t11 && "filter" === n6.willChange || t11 && n6.filter && "none" !== n6.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nE(e10) {
  return e10.split("-")[1];
}
var nH = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nz(e10) {
  var t10, r10, n6, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, v2 = e10.isFixed, b2 = f2.x, y2 = void 0 === b2 ? 0 : b2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = np, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nV(l2), D2 = "clientHeight", T2 = "clientWidth";
    O2 === nC(l2) && "static" !== nL(O2 = nF(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u2 || (u2 === np || u2 === nh) && "end" === d2) && (_2 = nf, w2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === np || ("top" === u2 || u2 === nf) && "end" === d2) && (P2 = nh, y2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[T2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var $2 = Object.assign({ position: h2 }, m2 && nH), R2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nC(l2), n6 = t10.x, a2 = t10.y, { x: n$(n6 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: n$(a2 * o2) / o2 || 0 }) : { x: y2, y: w2 };
  return (y2 = R2.x, w2 = R2.y, p2) ? Object.assign({}, $2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, $2, ((i2 = {})[_2] = C2 ? w2 + "px" : "", i2[P2] = M2 ? y2 + "px" : "", i2.transform = "", i2));
}
var nW = { passive: true }, nN = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nq(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nN[e11];
  });
}
var nU = { start: "end", end: "start" };
function nG(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nU[e11];
  });
}
function nY(e10) {
  var t10 = nC(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nX(e10) {
  return nI(nF(e10)).left + nY(e10).scrollLeft;
}
function nK(e10) {
  var t10 = nL(e10), r10 = t10.overflow, n6 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n6);
}
function nJ(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n6 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(nM(t11)) >= 0 ? t11.ownerDocument.body : n_(t11) && nK(t11) ? t11 : e11(nB(t11));
  }(e10), a2 = n6 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = nC(n6), i2 = a2 ? [o2].concat(o2.visualViewport || [], nK(n6) ? n6 : []) : n6, s2 = t10.concat(i2);
  return a2 ? s2 : s2.concat(nJ(nB(i2)));
}
function nZ(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nQ(e10, t10, r10) {
  var n6, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === nb ? nZ(function(e11, t11) {
    var r11 = nC(e11), n7 = nF(e11), a3 = r11.visualViewport, o3 = n7.clientWidth, i3 = n7.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = nA();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + nX(e11), y: l3 };
  }(e10, r10)) : nP(t10) ? ((n6 = nI(t10, false, "fixed" === r10)).top = n6.top + t10.clientTop, n6.left = n6.left + t10.clientLeft, n6.bottom = n6.top + t10.clientHeight, n6.right = n6.left + t10.clientWidth, n6.width = t10.clientWidth, n6.height = t10.clientHeight, n6.x = n6.left, n6.y = n6.top, n6) : nZ((a2 = nF(e10), i2 = nF(a2), s2 = nY(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = nD(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nD(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nX(a2), f2 = -s2.scrollTop, "rtl" === nL(l2 || i2).direction && (d2 += nD(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function n0(e10) {
  var t10, r10 = e10.reference, n6 = e10.element, a2 = e10.placement, o2 = a2 ? nO(a2) : null, i2 = a2 ? nE(a2) : null, s2 = r10.x + r10.width / 2 - n6.width / 2, l2 = r10.y + r10.height / 2 - n6.height / 2;
  switch (o2) {
    case "top":
      t10 = { x: s2, y: r10.y - n6.height };
      break;
    case nf:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nh:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case np:
      t10 = { x: r10.x - n6.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = o2 ? ["top", "bottom"].indexOf(o2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (i2) {
      case nv:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n6[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n6[u2] / 2);
    }
  }
  return t10;
}
function n1(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n6, a2, o2, i2, s2, l2, c2, u2 = t10, d2 = u2.placement, f2 = void 0 === d2 ? e10.placement : d2, h2 = u2.strategy, p2 = void 0 === h2 ? e10.strategy : h2, m2 = u2.boundary, g2 = u2.rootBoundary, v2 = u2.elementContext, b2 = void 0 === v2 ? ny : v2, y2 = u2.altBoundary, x2 = u2.padding, w2 = void 0 === x2 ? 0 : x2, k2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof w2 ? w2 : ng.reduce(function(e11, t11) {
    return e11[t11] = w2, e11;
  }, {})), M2 = e10.rects.popper, C2 = e10.elements[void 0 !== y2 && y2 ? b2 === ny ? "reference" : ny : b2], P2 = (r10 = nP(C2) ? C2 : C2.contextElement || nF(e10.elements.popper), n6 = void 0 === m2 ? "clippingParents" : m2, a2 = void 0 === g2 ? nb : g2, l2 = (s2 = [].concat("clippingParents" === n6 ? (o2 = nJ(nB(r10)), nP(i2 = ["absolute", "fixed"].indexOf(nL(r10).position) >= 0 && n_(r10) ? nV(r10) : r10) ? o2.filter(function(e11) {
    return nP(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && nS(r11)) {
        var n7 = t11;
        do {
          if (n7 && e12.isSameNode(n7))
            return true;
          n7 = n7.parentNode || n7.host;
        } while (n7);
      }
      return false;
    }(e11, i2) && "body" !== nM(e11);
  }) : []) : [].concat(n6), [a2]))[0], (c2 = s2.reduce(function(e11, t11) {
    var n7 = nQ(r10, t11, p2);
    return e11.top = nD(n7.top, e11.top), e11.right = nT(n7.right, e11.right), e11.bottom = nT(n7.bottom, e11.bottom), e11.left = nD(n7.left, e11.left), e11;
  }, nQ(r10, l2, p2))).width = c2.right - c2.left, c2.height = c2.bottom - c2.top, c2.x = c2.left, c2.y = c2.top, c2), _2 = nI(e10.elements.reference), S2 = n0({ reference: _2, element: M2, strategy: "absolute", placement: f2 }), O2 = nZ(Object.assign({}, M2, S2)), D2 = b2 === ny ? O2 : _2, T2 = { top: P2.top - D2.top + k2.top, bottom: D2.bottom - P2.bottom + k2.bottom, left: P2.left - D2.left + k2.left, right: D2.right - P2.right + k2.right }, $2 = e10.modifiersData.offset;
  if (b2 === ny && $2) {
    var R2 = $2[f2];
    Object.keys(T2).forEach(function(e11) {
      var t11 = [nh, nf].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", nf].indexOf(e11) >= 0 ? "y" : "x";
      T2[e11] += R2[r11] * t11;
    });
  }
  return T2;
}
let n2 = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n6 = e10.name;
  if (!t10.modifiersData[n6]._skip) {
    for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, v2 = nO(g2) === g2, b2 = l2 || (v2 || !p2 ? [nq(g2)] : function(e11) {
      if (nO(e11) === nm)
        return [];
      var t11 = nq(e11);
      return [nG(e11), t11, nG(t11)];
    }(g2)), y2 = [g2].concat(b2).reduce(function(e11, r11) {
      var n7, a3, o3, i3, s3, l3, f3, h3, g3, v3, b3, y3;
      return e11.concat(nO(r11) === nm ? (a3 = (n7 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n7.boundary, i3 = n7.rootBoundary, s3 = n7.padding, l3 = n7.flipVariations, h3 = void 0 === (f3 = n7.allowedAutoPlacements) ? nw : f3, 0 === (b3 = (v3 = (g3 = nE(a3)) ? l3 ? nx : nx.filter(function(e12) {
        return nE(e12) === g3;
      }) : ng).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (b3 = v3), Object.keys(y3 = b3.reduce(function(e12, r12) {
        return e12[r12] = n1(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[nO(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return y3[e12] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nO(_2), O2 = nE(_2) === nv, D2 = ["top", nf].indexOf(S2) >= 0, T2 = D2 ? "width" : "height", $2 = n1(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), R2 = D2 ? O2 ? nh : np : O2 ? nf : "top";
      x2[T2] > w2[T2] && (R2 = nq(R2));
      var A2 = nq(R2), I2 = [];
      if (o2 && I2.push($2[S2] <= 0), s2 && I2.push($2[R2] <= 0, $2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2)
      for (var L2 = p2 ? 3 : 1, F2 = function(e11) {
        var t11 = y2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return C2 = t11, "break";
      }, B2 = L2; B2 > 0 && "break" !== F2(B2); B2--)
        ;
    t10.placement !== C2 && (t10.modifiersData[n6]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var n4 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n5() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var n3 = (Y = void 0 === (G = (U = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n6 = e10.options, a2 = n6.scroll, o2 = void 0 === a2 || a2, i2 = n6.resize, s2 = void 0 === i2 || i2, l2 = nC(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return o2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nW);
  }), s2 && l2.addEventListener("resize", r10.update, nW), function() {
    o2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nW);
    }), s2 && l2.removeEventListener("resize", r10.update, nW);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = n0({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n6 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: nO(t10.placement), variation: nE(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n6 || n6, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nz(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nz(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n6 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    n_(a2) && nM(a2) && (Object.assign(a2.style, r10), Object.keys(n6).forEach(function(e12) {
      var t11 = n6[e12];
      false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n6 = t10.elements[e11], a2 = t10.attributes[e11] || {}, o2 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      n_(n6) && nM(n6) && (Object.assign(n6.style, o2), Object.keys(a2).forEach(function(e12) {
        n6.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : G, K = void 0 === (X = U.defaultOptions) ? n4 : X, function(e10, t10, r10) {
  void 0 === r10 && (r10 = K);
  var n6, a2, o2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, n4, K), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, i2 = [], s2 = false, l2 = { state: o2, setOptions: function(r11) {
    var n7, a3, s3, u2, d2, f2 = "function" == typeof r11 ? r11(o2.options) : r11;
    c2(), o2.options = Object.assign({}, K, o2.options, f2), o2.scrollParents = { reference: nP(e10) ? nJ(e10) : e10.contextElement ? nJ(e10.contextElement) : [], popper: nJ(t10) };
    var h2 = (a3 = Object.keys(n7 = [].concat(Y, o2.options.modifiers).reduce(function(e11, t11) {
      var r12 = e11[t11.name];
      return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return n7[e11];
    }), s3 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set(), d2 = [], a3.forEach(function(e11) {
      s3.set(e11.name, e11);
    }), a3.forEach(function(e11) {
      u2.has(e11.name) || function e12(t11) {
        u2.add(t11.name), [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
          if (!u2.has(t12)) {
            var r12 = s3.get(t12);
            r12 && e12(r12);
          }
        }), d2.push(t11);
      }(e11);
    }), nk.reduce(function(e11, t11) {
      return e11.concat(d2.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return o2.orderedModifiers = h2.filter(function(e11) {
      return e11.enabled;
    }), o2.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r12 = e11.options, n9 = e11.effect;
      if ("function" == typeof n9) {
        var a4 = n9({ state: o2, name: t11, instance: l2, options: void 0 === r12 ? {} : r12 });
        i2.push(a4 || function() {
        });
      }
    }), l2.update();
  }, forceUpdate: function() {
    if (!s2) {
      var e11, t11, r11, n7, a3, i3, c3, u2, d2, f2, h2, p2, m2, g2, v2, b2 = o2.elements, y2 = b2.reference, x2 = b2.popper;
      if (n5(y2, x2)) {
        o2.rects = { reference: (t11 = nV(x2), r11 = "fixed" === o2.options.strategy, n7 = n_(t11), u2 = n_(t11) && (i3 = n$((a3 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c3 = n$(a3.height) / t11.offsetHeight || 1, 1 !== i3 || 1 !== c3), d2 = nF(t11), f2 = nI(y2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n7 || !n7 && !r11) && (("body" !== nM(t11) || nK(d2)) && (h2 = (e11 = t11) !== nC(e11) && n_(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : nY(e11)), n_(t11) ? (p2 = nI(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = nX(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nI(x2), g2 = x2.offsetWidth, v2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - v2) && (v2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: v2 }) }, o2.reset = false, o2.placement = o2.options.placement, o2.orderedModifiers.forEach(function(e12) {
          return o2.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var w2 = 0; w2 < o2.orderedModifiers.length; w2++) {
          if (true === o2.reset) {
            o2.reset = false, w2 = -1;
            continue;
          }
          var k2 = o2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
          "function" == typeof M2 && (o2 = M2({ state: o2, options: P2, name: _2, instance: l2 }) || o2);
        }
      }
    }
  }, update: (n6 = function() {
    return new Promise(function(e11) {
      l2.forceUpdate(), e11(o2);
    });
  }, function() {
    return a2 || (a2 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        a2 = void 0, e11(n6());
      });
    })), a2;
  }), destroy: function() {
    c2(), s2 = true;
  } };
  if (!n5(e10, t10))
    return l2;
  function c2() {
    i2.forEach(function(e11) {
      return e11();
    }), i2 = [];
  }
  return l2.setOptions(r10).then(function(e11) {
    !s2 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), l2;
});
let n8 = Object.assign(n({ isOpen: nd.propTypes.isOpen, onClickOutside: nd.propTypes.onClickOutside, placement: O().optional(), modifiers: O().optional(), $transition: nd.propTypes.$transition, $content: O(), $default: O() }, (e10, n6) => {
  let { slots: a2, emit: o2, attrs: i2 } = n6, s2 = j(null), l2 = j(null);
  return F(() => l2.value, (t10) => {
    if (t10 && s2.value) {
      var r10, n7;
      n3(s2.value, t10, { placement: null !== (r10 = e10.placement) && void 0 !== r10 ? r10 : "bottom", modifiers: [...null !== (n7 = e10.modifiers) && void 0 !== n7 ? n7 : [], n2] });
    }
  }), () => {
    var n7, c2;
    let u2 = null === (n7 = a2.default) || void 0 === n7 ? void 0 : n7.call(a2)[0];
    return u2 ? r(B, { children: [A(u2, { ...i2, onVnodeMounted: (e11) => {
      s2.value = function e12(t10) {
        if (t10) {
          if (t10 instanceof HTMLElement)
            return t10;
          if (t10 instanceof Text)
            return e12(t10.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), t(nd, { triggerRef: s2, contentRef: l2, isOpen: e10.isOpen, onClickOutside: (e11) => o2("click-outside", e11), style: { zIndex: 100 }, $transition: a2.transition, children: null === (c2 = a2.content) || void 0 === c2 ? void 0 : c2.call(a2) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), { displayName: "Popper" });
export {
  nn as B,
  ns as C,
  ni as G,
  nd as O,
  n8 as P,
  rx as T,
  tI as a,
  tz as d,
  no as s,
  tH as t,
  tF as v
};
