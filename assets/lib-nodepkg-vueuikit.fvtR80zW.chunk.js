var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let e;
import { _ as t, D as r, g as n, n as a, l as i, p as o, b as s, E as l, h as c, G as u, i as d, o as f, m as h, H as p, s as m, k as g, a as v, J as b, K as y, z as x, v as w, T as k, L as M, M as C, N as P, O as _, P as S, Q as O, A as $, R as D, B as T, U as R, V as A, r as I, W as L, X as B, Y as F, Z as V, C as j, w as E, F as H } from "./lib-nodepkg-vuekit.BrSJ_ipC.chunk.js";
import { c as z, b as W } from "./lib-nodepkg-typedef.D2OyHZDO.chunk.js";
var N, U, q, G, Y, X, K, J, Z, Q, ee, et = function() {
};
let er = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function en(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let ea = ["duration", "bounce"], ei = ["stiffness", "damping", "mass"];
function eo(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function es(e10) {
  var { from: r10 = 0, to: n10 = 1, restSpeed: a2 = 2, restDelta: i2 } = e10, o2 = t(e10, ["from", "to", "restSpeed", "restDelta"]);
  let s2 = { done: false, value: r10 }, { stiffness: l2, damping: c2, mass: u2, velocity: d2, duration: f2, isResolvedFromDuration: h2 } = function(e11) {
    let t10 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!eo(e11, ei) && eo(e11, ea)) {
      let r11 = function(e12) {
        let t11, r12, { duration: n11 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e12, s3 = 1 - a3;
        s3 = er(0.05, 1, s3), n11 = er(0.01, 10, n11 / 1e3), s3 < 1 ? (t11 = (e13) => {
          let t12 = e13 * s3, r13 = t12 * n11;
          return 1e-3 - (t12 - i3) / en(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n11, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n11, o4 = Math.exp(-r13), l4 = en(Math.pow(e13, 2), s3);
          return (r13 * i3 + i3 - a4) * o4 * (-t11(e13) + 1e-3 > 0 ? -1 : 1) / l4;
        }) : (t11 = (e13) => -1e-3 + Math.exp(-e13 * n11) * ((e13 - i3) * n11 + 1), r12 = (e13) => n11 * n11 * (i3 - e13) * Math.exp(-e13 * n11));
        let l3 = function(e13, t12, r13) {
          let n12 = r13;
          for (let r14 = 1; r14 < 12; r14++) n12 -= e13(n12) / t12(n12);
          return n12;
        }(t11, r12, 5 / n11);
        if (n11 *= 1e3, isNaN(l3)) return { stiffness: 100, damping: 10, duration: n11 };
        {
          let e13 = Math.pow(l3, 2) * o3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(o3 * e13), duration: n11 };
        }
      }(e11);
      (t10 = Object.assign(Object.assign(Object.assign({}, t10), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t10;
  }(o2), p2 = el, m2 = el;
  function g2() {
    let e11 = d2 ? -(d2 / 1e3) : 0, t10 = n10 - r10, a3 = c2 / (2 * Math.sqrt(l2 * u2)), o3 = Math.sqrt(l2 / u2) / 1e3;
    if (void 0 === i2 && (i2 = Math.min(Math.abs(n10 - r10) / 100, 0.4)), a3 < 1) {
      let r11 = en(o3, a3);
      p2 = (i3) => n10 - Math.exp(-a3 * o3 * i3) * ((e11 + a3 * o3 * t10) / r11 * Math.sin(r11 * i3) + t10 * Math.cos(r11 * i3)), m2 = (n11) => {
        let i3 = Math.exp(-a3 * o3 * n11);
        return a3 * o3 * i3 * (Math.sin(r11 * n11) * (e11 + a3 * o3 * t10) / r11 + t10 * Math.cos(r11 * n11)) - i3 * (Math.cos(r11 * n11) * (e11 + a3 * o3 * t10) - r11 * t10 * Math.sin(r11 * n11));
      };
    } else if (1 === a3) p2 = (r11) => n10 - Math.exp(-o3 * r11) * (t10 + (e11 + o3 * t10) * r11);
    else {
      let r11 = o3 * Math.sqrt(a3 * a3 - 1);
      p2 = (i3) => {
        let s3 = Math.exp(-a3 * o3 * i3), l3 = Math.min(r11 * i3, 300);
        return n10 - s3 * ((e11 + a3 * o3 * t10) * Math.sinh(l3) + r11 * t10 * Math.cosh(l3)) / r11;
      };
    }
  }
  return g2(), { next: (e11) => {
    let t10 = p2(e11);
    if (h2) s2.done = e11 >= f2;
    else {
      let r11 = Math.abs(1e3 * m2(e11)) <= a2, o3 = Math.abs(n10 - t10) <= i2;
      s2.done = r11 && o3;
    }
    return s2.value = s2.done ? n10 : t10, s2;
  }, flipTarget: () => {
    d2 = -d2, [r10, n10] = [n10, r10], g2();
  } };
}
es.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let el = (e10) => 0, ec = (e10, t10, r10) => {
  let n10 = t10 - e10;
  return 0 === n10 ? 1 : (r10 - e10) / n10;
}, eu = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, ed = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), ef = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, eh = /(-)?([\d]*\.?[\d])+/g, ep = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, em = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eg(e10) {
  return "string" == typeof e10;
}
let ev = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, eb = Object.assign(Object.assign({}, ev), { transform: ed(0, 1) });
Object.assign(Object.assign({}, ev), { default: 1 });
let ey = { test: (e10) => eg(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, ey), { parse: (e10) => ey.parse(e10) / 100, transform: (e10) => ey.transform(100 * e10) });
let ex = (e10, t10) => (r10) => !!(eg(r10) && em.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ew = (e10, t10, r10) => (n10) => {
  if (!eg(n10)) return n10;
  let [a2, i2, o2, s2] = n10.match(eh);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ek = { test: ex("hsl", "hue"), parse: ew("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + ey.transform(ef(r10)) + ", " + ey.transform(ef(n10)) + ", " + ef(eb.transform(a2)) + ")";
} }, eM = ed(0, 255), eC = Object.assign(Object.assign({}, ev), { transform: (e10) => Math.round(eM(e10)) }), eP = { test: ex("rgb", "red"), parse: ew("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n10, alpha: a2 = 1 } = e10;
  return "rgba(" + eC.transform(t10) + ", " + eC.transform(r10) + ", " + eC.transform(n10) + ", " + ef(eb.transform(a2)) + ")";
} }, e_ = { test: ex("#"), parse: function(e10) {
  let t10 = "", r10 = "", n10 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n10 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n10 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n10 += n10, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n10, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eP.transform }, eS = { test: (e10) => eP.test(e10) || e_.test(e10) || ek.test(e10), parse: (e10) => eP.test(e10) ? eP.parse(e10) : ek.test(e10) ? ek.parse(e10) : e_.parse(e10), transform: (e10) => eg(e10) ? e10 : e10.hasOwnProperty("red") ? eP.transform(e10) : ek.transform(e10) }, eO = "${c}", e$ = "${n}";
function eD(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n10 = e10.match(ep);
  n10 && (r10 = n10.length, e10 = e10.replace(ep, eO), t10.push(...n10.map(eS.parse)));
  let a2 = e10.match(eh);
  return a2 && (e10 = e10.replace(eh, e$), t10.push(...a2.map(ev.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let eT = function(e10) {
  let { values: t10, numColors: r10, tokenised: n10 } = eD(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n10;
    for (let n11 = 0; n11 < a2; n11++) t11 = t11.replace(n11 < r10 ? eO : e$, n11 < r10 ? eS.transform(e11[n11]) : ef(e11[n11]));
    return t11;
  };
};
function eR(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eA(e10) {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 } = e10;
  t10 /= 360, n10 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n10 < 0.5 ? n10 * (1 + r10) : n10 + r10 - n10 * r10, a3 = 2 * n10 - e11;
    i2 = eR(a3, e11, t10 + 1 / 3), o2 = eR(a3, e11, t10), s2 = eR(a3, e11, t10 - 1 / 3);
  } else i2 = o2 = s2 = n10;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let eI = (e10, t10, r10) => {
  let n10 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n10) + n10));
}, eL = [e_, eP, ek], eB = (e10) => eL.find((t10) => t10.test(e10)), eF = (e10, t10) => {
  let r10 = eB(e10), n10 = eB(t10), a2 = r10.parse(e10), i2 = n10.parse(t10);
  r10 === ek && (a2 = eA(a2), r10 = eP), n10 === ek && (i2 = eA(i2), n10 = eP);
  let o2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in o2) "alpha" !== t11 && (o2[t11] = eI(a2[t11], i2[t11], e11));
    return o2.alpha = eu(a2.alpha, i2.alpha, e11), r10.transform(o2);
  };
}, eV = (e10) => "number" == typeof e10, ej = (e10, t10) => (r10) => t10(e10(r10)), eE = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return t10.reduce(ej);
};
function eH(e10, t10) {
  return eV(e10) ? (r10) => eu(e10, t10, r10) : eS.test(e10) ? eF(e10, t10) : eU(e10, t10);
}
let ez = (e10, t10) => {
  let r10 = [...e10], n10 = r10.length, a2 = e10.map((e11, r11) => eH(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n10; t11++) r10[t11] = a2[t11](e11);
    return r10;
  };
}, eW = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n10 = {};
  for (let a2 in r10) void 0 !== e10[a2] && void 0 !== t10[a2] && (n10[a2] = eH(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n10) r10[t11] = n10[t11](e11);
    return r10;
  };
};
function eN(e10) {
  let t10 = eD(e10).values, r10 = t10.length, n10 = 0, a2 = 0, i2 = 0;
  for (let e11 = 0; e11 < r10; e11++) n10 || "number" == typeof t10[e11] ? n10++ : void 0 !== t10[e11].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n10, numRGB: a2, numHSL: i2 };
}
let eU = (e10, t10) => {
  let r10 = eT(t10), n10 = eN(e10), a2 = eN(t10);
  return n10.numHSL === a2.numHSL && n10.numRGB === a2.numRGB && n10.numNumbers >= a2.numNumbers ? eE(ez(n10.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eq = (e10, t10) => (r10) => eu(e10, t10, r10);
function eG(e10, t10) {
  let { clamp: r10 = true, ease: n10, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e10.length;
  et(i2 === t10.length), et(!n10 || !Array.isArray(n10) || n10.length === i2 - 1), e10[0] > e10[i2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let o2 = function(e11, t11, r11) {
    var n11;
    let a3 = [], i3 = r11 || ("number" == typeof (n11 = e11[0]) ? eq : "string" == typeof n11 ? eS.test(n11) ? eF : eU : Array.isArray(n11) ? ez : "object" == typeof n11 ? eW : void 0), o3 = e11.length - 1;
    for (let r12 = 0; r12 < o3; r12++) {
      let n12 = i3(e11[r12], e11[r12 + 1]);
      t11 && (n12 = eE(Array.isArray(t11) ? t11[r12] : t11, n12)), a3.push(n12);
    }
    return a3;
  }(t10, n10, a2), s2 = 2 === i2 ? function(e11, t11) {
    let [r11, n11] = e11, [a3] = t11;
    return (e12) => a3(ec(r11, n11, e12));
  }(e10, o2) : function(e11, t11) {
    let r11 = e11.length, n11 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e11[0] ? o3 = true : a3 >= e11[n11] && (i3 = n11 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n11; t12++) ;
        i3 = t12 - 1;
      }
      let s3 = ec(e11[i3], e11[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e10, o2);
  return r10 ? (t11) => s2(er(e10[0], e10[i2 - 1], t11)) : s2;
}
let eY = (e10) => e10, eX = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eK(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n10, offset: a2, duration: i2 = 300 } = e10, o2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * i2);
  function c2() {
    return eG(l2, s2, { ease: Array.isArray(n10) ? n10 : s2.map(() => n10 || eX).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (o2.value = u2(e11), o2.done = e11 >= i2, o2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
let eJ = { keyframes: eK, spring: es, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n10 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e10, s2 = { done: false, value: r10 }, l2 = n10 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eZ = 1 / 60 * 1e3, eQ = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), e0 = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eQ()), eZ), e1 = true, e2 = false, e4 = false, e5 = { delta: 0, timestamp: 0 }, e3 = ["read", "update", "preRender", "render", "postRender"], e8 = e3.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n10 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n10 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n10 = t11.length) for (let r11 = 0; r11 < n10; r11++) {
      let n11 = t11[r11];
      n11(l2), o2.has(n11) && (s2.schedule(n11), e11());
    }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => e2 = true), e10), {}), e6 = e3.reduce((e10, t10) => {
  let r10 = e8[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e2 || tt(), r10.schedule(e11, t11, n10);
  }, e10;
}, {}), e9 = e3.reduce((e10, t10) => (e10[t10] = e8[t10].cancel, e10), {});
e3.reduce((e10, t10) => (e10[t10] = () => e8[t10].process(e5), e10), {});
let e7 = (e10) => e8[e10].process(e5), te = (e10) => {
  e2 = false, e5.delta = e1 ? eZ : Math.max(Math.min(e10 - e5.timestamp, 40), 1), e5.timestamp = e10, e4 = true, e3.forEach(e7), e4 = false, e2 && (e1 = false, e0(te));
}, tt = () => {
  e2 = true, e1 = true, e4 || e0(te);
};
function tr(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let tn = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e6.update(t10, true), stop: () => e9.update(t10) };
};
function ta(e10) {
  let r10, n10, a2;
  var i2, { from: o2, autoplay: s2 = true, driver: l2 = tn, elapsed: c2 = 0, repeat: u2 = 0, repeatType: d2 = "loop", repeatDelay: f2 = 0, onPlay: h2, onStop: p2, onComplete: m2, onRepeat: g2, onUpdate: v2 } = e10, b2 = t(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: y2 } = b2, x2 = 0, w2 = b2.duration, k2 = false, M2 = true, C2 = function(e11) {
    if (Array.isArray(e11.to)) return eK;
    if (eJ[e11.type]) return eJ[e11.type];
    let t10 = new Set(Object.keys(e11));
    if (t10.has("ease") || t10.has("duration") && !t10.has("dampingRatio")) ;
    else if (t10.has("dampingRatio") || t10.has("stiffness") || t10.has("mass") || t10.has("damping") || t10.has("restSpeed") || t10.has("restDelta")) return es;
    return eK;
  }(b2);
  (null === (i2 = C2.needsInterpolation) || void 0 === i2 ? void 0 : i2.call(C2, o2, y2)) && (a2 = eG([0, 100], [o2, y2], { clamp: false }), o2 = 0, y2 = 100);
  let P2 = C2(Object.assign(Object.assign({}, b2), { from: o2, to: y2 }));
  return s2 && (null == h2 || h2(), (r10 = l2(function(e11) {
    if (M2 || (e11 = -e11), c2 += e11, !k2) {
      let e12 = P2.next(Math.max(0, c2));
      n10 = e12.value, a2 && (n10 = a2(n10)), k2 = M2 ? e12.done : c2 <= 0;
    }
    if (null == v2 || v2(n10), k2) {
      if (0 === x2 && (null != w2 || (w2 = c2)), x2 < u2) {
        var t10, i3;
        t10 = c2, i3 = w2, (M2 ? t10 >= i3 + f2 : t10 <= -f2) && (x2++, "reverse" === d2 ? c2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n11 ? tr(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(c2, w2, f2, M2 = x2 % 2 == 0) : (c2 = tr(c2, w2, f2), "mirror" === d2 && P2.flipTarget()), k2 = false, g2 && g2());
      } else r10.stop(), m2 && m2();
    }
  })).start()), { stop: () => {
    null == p2 || p2(), r10.stop();
  } };
}
let ti = (e10, t10) => 1 - 3 * t10 + 3 * e10, to = (e10, t10) => 3 * t10 - 6 * e10, ts = (e10) => 3 * e10, tl = (e10, t10, r10) => ((ti(t10, r10) * e10 + to(t10, r10)) * e10 + ts(t10)) * e10, tc = (e10, t10, r10) => 3 * ti(t10, r10) * e10 * e10 + 2 * to(t10, r10) * e10 + ts(t10);
function tu(e10, t10, r10, n10) {
  if (e10 === t10 && r10 === n10) return eY;
  let a2 = new Float32Array(11);
  for (let t11 = 0; t11 < 11; ++t11) a2[t11] = tl(0.1 * t11, e10, r10);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : tl(function(t11) {
    let n11 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t11; ++i3) n11 += 0.1;
    let o2 = n11 + (t11 - a2[--i3]) / (a2[i3 + 1] - a2[i3]) * 0.1, s2 = tc(o2, e10, r10);
    return s2 >= 1e-3 ? function(e11, t12, r11, n12) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tc(t12, r11, n12);
        if (0 === a4) break;
        let i4 = tl(t12, r11, n12) - e11;
        t12 -= i4 / a4;
      }
      return t12;
    }(t11, o2, e10, r10) : 0 === s2 ? o2 : function(e11, t12, r11, n12, a3) {
      let i4, o3;
      let s3 = 0;
      do
        (i4 = tl(o3 = t12 + (r11 - t12) / 2, n12, a3) - e11) > 0 ? r11 = o3 : t12 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t11, n11, n11 + 0.1, e10, r10);
  }(i2), t10, n10);
}
var td = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tf = /[A-Z]|^ms/g, th = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tp = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tm = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tg = (N = function(e10) {
  return tp(e10) ? e10 : e10.replace(tf, "-$&").toLowerCase();
}, U = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === U[e10] && (U[e10] = N(e10)), U[e10];
}), tv = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10) return t10.replace(th, function(e11, t11, r10) {
        return Q = { name: t11, styles: r10, next: Q }, t11;
      });
  }
  return 1 === td[e10] || tp(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tb(e10, t10, r10) {
  if (null == r10) return "";
  if (void 0 !== r10.__emotion_styles) return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim) return Q = { name: r10.name, styles: r10.styles, next: Q }, r10.name;
      if (void 0 !== r10.styles) {
        var n10 = r10.next;
        if (void 0 !== n10) for (; void 0 !== n10; ) Q = { name: n10.name, styles: n10.styles, next: Q }, n10 = n10.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n11 = "";
        if (Array.isArray(r11)) for (var a3 = 0; a3 < r11.length; a3++) n11 += tb(e11, t11, r11[a3]) + ";";
        else for (var i3 in r11) {
          var o3 = r11[i3];
          if ("object" != typeof o3) null != t11 && void 0 !== t11[o3] ? n11 += i3 + "{" + t11[o3] + "}" : tm(o3) && (n11 += tg(i3) + ":" + tv(i3, o3) + ";");
          else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]])) for (var s2 = 0; s2 < o3.length; s2++) tm(o3[s2]) && (n11 += tg(i3) + ":" + tv(i3, o3[s2]) + ";");
          else {
            var l2 = tb(e11, t11, o3);
            switch (i3) {
              case "animation":
              case "animationName":
                n11 += tg(i3) + ":" + l2 + ";";
                break;
              default:
                n11 += i3 + "{" + l2 + "}";
            }
          }
        }
        return n11;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = Q, i2 = r10(e10);
        return Q = a2, tb(e10, t10, i2);
      }
  }
  if (null == t10) return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var ty = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
function tx(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles) return e10[0];
  var n10, a2 = true, i2 = "";
  Q = void 0;
  var o2 = e10[0];
  null == o2 || void 0 === o2.raw ? (a2 = false, i2 += tb(r10, t10, o2)) : i2 += o2[0];
  for (var s2 = 1; s2 < e10.length; s2++) i2 += tb(r10, t10, e10[s2]), a2 && (i2 += o2[s2]);
  ty.lastIndex = 0;
  for (var l2 = ""; null !== (n10 = ty.exec(i2)); ) l2 += "-" + n10[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n11 = 0, a3 = e11.length; a3 >= 4; ++n11, a3 -= 4) t11 = (65535 & (t11 = 255 & e11.charCodeAt(n11) | (255 & e11.charCodeAt(++n11)) << 8 | (255 & e11.charCodeAt(++n11)) << 16 | (255 & e11.charCodeAt(++n11)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n11 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n11 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n11), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(i2) + l2, styles: i2, next: Q };
}
function tw() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tk = tw(), tM = { paddingX: [tk.paddingLeft, tk.paddingRight], paddingY: [tk.paddingTop, tk.paddingBottom], marginX: [tk.marginInlineStart, tk.marginInlineEnd], marginY: [tk.marginTop, tk.marginBottom], borderX: [tk.borderLeft, tk.borderRight], borderY: [tk.borderTop, tk.borderBottom], color: [tk.color, tk.fill], borderTopRadius: [tk.borderTopLeftRadius, tk.borderTopRightRadius], borderBottomRadius: [tk.borderBottomLeftRadius, tk.borderBottomRightRadius], borderRightRadius: [tk.borderTopRightRadius, tk.borderBottomRightRadius], borderLeftRadius: [tk.borderTopLeftRadius, tk.borderBottomLeftRadius], backgroundGradient: [tk.backgroundImage], boxSize: [tk.width, tk.height] }, tC = tw(), tP = { font: tC.fontFamily, shadow: tC.boxShadow, rounded: tC.borderRadius, roundedTop: tC.borderTopRadius, roundedBottom: tC.borderBottomRadius, roundedLeft: tC.borderLeftRadius, roundedRight: tC.borderRightRadius, bg: tC.background, bgImage: tC.backgroundImage, bgSize: tC.backgroundSize, bgPosition: tC.backgroundPosition, bgRepeat: tC.backgroundRepeat, bgAttachment: tC.backgroundAttachment, bgColor: tC.backgroundColor, bgGradient: tC.backgroundGradient, bgClip: tC.backgroundClip, pos: tC.position, p: tC.padding, pt: tC.paddingTop, pr: tC.paddingRight, pl: tC.paddingLeft, pb: tC.paddingBottom, ps: tC.paddingInlineStart, pe: tC.paddingInlineEnd, px: tC.paddingX, py: tC.paddingY, m: tC.margin, mt: tC.marginTop, mr: tC.marginRight, ml: tC.marginLeft, mb: tC.marginBottom, ms: tC.marginInlineStart, me: tC.marginInlineEnd, mx: tC.marginX, my: tC.marginY, w: tC.width, minW: tC.minWidth, maxW: tC.maxWidth, h: tC.height, minH: tC.minHeight, maxH: tC.maxHeight }, t_ = tw(), tS = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  let n10 = [...t10];
  for (let e11 of t10) tP[e11] && n10.push(tP[e11]);
  return n10;
}, tO = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _t$ = class _t$ {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n10, extends: a2, ...l2 } = e10;
    if (a2) for (let e11 of a2) r10.push(...this.processAll(e11, t10));
    if (n10) {
      let e11 = {}, t11 = {};
      _t$.walkStateValues(n10, (r11, n11, a3) => {
        var s2;
        let l3 = `--${this.opt.varPrefix}-state-${n11.join("-")}`, c2 = null !== (s2 = i(n11)) && void 0 !== s2 ? s2 : "", u2 = {};
        this.process(u2, c2, r11, false), e11[l3] = u2[c2], o(t11, [...a3, c2], `var(${l3})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!s(l2)) {
      let e11 = {};
      this.processTo(e11, l2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n10 in t10) this.process(e10, n10, t10[n10], r10);
  }
  process(e10, t10, r10) {
    var n10, i2, o2, s2;
    let l2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a2 = null === (n10 = this.opt.mixins[t10]) || void 0 === n10 ? void 0 : n10.get(r10);
      if (a2) for (let t11 in a2) this.process(e10, t11, a2[t11], l2);
      return;
    }
    let c2 = t10;
    if (a(r10)) {
      e10[c2 = null !== (i2 = _t$.convertSelector(c2)) && void 0 !== i2 ? i2 : c2] = null !== (o2 = e10[c2]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[c2], r10);
      return;
    }
    if (l2 && tM[c2 = null !== (s2 = tP[c2]) && void 0 !== s2 ? s2 : c2]) {
      for (let t11 of tM[c2]) e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[c2] = this.opt.processValue(c2, r10);
  }
};
__publicField(_t$, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_t$, "convertSelector", (e10) => {
  if (tO[e10]) return tO[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", n10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (n10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [a2, i2] = t10.split("__");
      return i2 ? `${e11}[${r(a2)}='${r(i2)}']${n10}` : `${e11}[${r(a2)}]${n10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_t$.supportedPseudoClasses[t10]) {
        let r10 = _t$.supportedPseudoClasses[t10];
        return `${e11}:${r10}, ${e11}[data-${r10}]:not([data-${r10}='false']), ${e11}.${r10}`;
      }
      let [n11, a2] = t10.split("__"), i2 = r(n11);
      return a2 ? `${e11}[data-${i2}='${r(a2)}']` : `${e11}[data-${i2}]:not([data-${i2}='false'])`;
    }
  }
});
__publicField(_t$, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: i2, ...o2 } = e10;
  for (let e11 in o2) {
    var s2;
    let l2 = o2[e11], c2 = null !== (s2 = o2.default) && void 0 !== s2 ? s2 : r10.default, u2 = null != i2 ? i2 : n(c2, [...r10.path.slice(1), "$"]), d2 = u2 ? [...r10.selectorPath, u2] : r10.selectorPath, f2 = [...r10.path, e11];
    if (a(l2)) {
      _t$.walkStateValues(l2, t10, { path: f2, selectorPath: d2, default: c2 });
      continue;
    }
    t10(l2, f2, d2);
  }
});
let t$ = _t$;
var tD = ((q = tD || {}).var = "var", q.mixin = "mixin", q);
class tT {
  static create(e10, t10) {
    let { value: r10, on: n10, transform: a2 } = t10;
    return { type: e10, value: r10, on: n10, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tT.create("var", { value: e10, on: tS(t_.color, t_.bgColor, t_.outlineColor, t_.borderColor, t_.accentColor, t_.fill, t_.stroke), transform: (e11, t10) => l(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tT.create("var", { value: e10, on: tS(t_.gap, t_.rowGap, t_.columnGap, t_.top, t_.right, t_.bottom, t_.left, t_.m, t_.ms, t_.me, t_.mt, t_.mr, t_.mb, t_.ml, t_.mx, t_.my, t_.p, t_.ps, t_.pe, t_.pt, t_.pr, t_.pb, t_.pl, t_.px, t_.py) });
  }
  static boxSize(e10) {
    return tT.create("var", { value: e10, on: tS(t_.w, t_.minW, t_.maxW, t_.h, t_.minH, t_.maxH, t_.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tT.create("var", { value: e10, on: tS(t_.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tT.create("var", { value: e10, on: tS(t_.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tT.create("var", { value: e10, fallback: 0, on: tS(t_.rounded, t_.roundedTop, t_.roundedBottom, t_.roundedLeft, t_.roundedRight, tk.borderTopLeftRadius, tk.borderTopRightRadius, tk.borderBottomLeftRadius, tk.borderBottomRightRadius, tk.borderTopRightRadius, tk.borderBottomRightRadius, tk.borderTopLeftRadius, tk.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tT.create("var", { value: e10, on: tS(t_.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tT.create("var", { value: e10, on: tS(t_.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tT.create("var", { value: e10, on: tS(t_.font) });
  }
  static fontWeight(e10) {
    return tT.create("var", { value: e10, on: tS(t_.fontWeight) });
  }
  static letterSpacing(e10) {
    return tT.create("var", { value: e10, on: tS(t_.letterSpacing) });
  }
  static shadow(e10) {
    return tT.create("var", { value: e10, on: tS(t_.shadow) });
  }
  static customMixin(e10, t10) {
    return tT.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tR = (e10, t10, r10) => {
  let n10 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let i2 = t10[e11];
    if (e11 === t10.length - 1) {
      n10[i2] = r10;
      continue;
    }
    n10[i2] = null !== (a2 = n10[i2]) && void 0 !== a2 ? a2 : {}, n10 = n10[i2];
  }
};
const _tA = class _tA {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tA.walkValues(e10.value, (n10, i2) => {
      let s2 = i2.join("."), l2 = (n11, a2) => {
        let i3 = e10.transform ? e10.transform(n11, t10) : r10(n11);
        if (d(i3)) for (let e11 in i3) a2(i3[e11], "default" === e11 ? "" : e11);
        else a2(i3, "");
      };
      if (o(this._cssVarRefs, [s2], t10(s2)), a(n10)) for (let e11 in n10) l2(n10[e11], (t11, r11) => {
        o(this._values, [`${s2}${r11 ? `/${r11}` : ""}`, e11], t11);
      });
      else l2(n10, (e11, t11) => {
        o(this._values, [`${s2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return u(this._values);
  }
  get(e10, t10, r10) {
    let n10 = this._values[e10];
    if (d(n10)) {
      var a2;
      return r10 ? n10[t10] : null !== (a2 = n10[t10]) && void 0 !== a2 ? a2 : n10[_tA.defaultMode];
    }
    return r10 ? t10 === _tA.defaultMode ? n10 : void 0 : n10;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tA, "defaultMode", "_default");
__publicField(_tA, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let i2 = e10[n10];
    if (a(i2)) {
      if (c(i2, "_default")) {
        t10(i2, [...r10, n10]);
        continue;
      }
      _tA.walkValues(i2, t10, [...r10, n10]);
      continue;
    }
    t10(i2, [...r10, n10]);
  }
});
let tA = _tA;
const _tI = class _tI {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tI.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      o(this._values, [r10], f(e11, "__mixin"));
    });
  }
  get tokens() {
    return u(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tI, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let i2 = e10[n10];
    if (a(i2)) {
      if (c(i2, "__mixin")) {
        t10(i2, [...r10, n10]);
        continue;
      }
      _tI.walkValue(i2, t10, [...r10, n10]);
      continue;
    }
    t10(i2, [...r10, n10]);
  }
});
let tI = _tI;
let tL = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, tB = (e10) => {
  let t10 = n(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: h(tL, (e11) => p(t10, (t11, r10) => m(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, tF = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tV = (e10) => g(e10) && c(e10, "token");
function tj(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let tE = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _tH = class _tH {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tH.propsCanBaseDp[e10] && b(t10) ? _tH.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n10;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n10 = this.mixins[t10]) || void 0 === n10 ? void 0 : n10.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n10, a2;
      if (tV(t10)) {
        let r11 = null === (n10 = this.propValues[e10]) || void 0 === n10 ? void 0 : n10.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new t$({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n10;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n10 = t10.mode) && void 0 !== n10 ? n10 : "light", o(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === tD.var) {
          let e11 = new tA(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a2] = e11, t11.on)) this.propValues[r11] = e11;
          for (let t12 of e11.tokens) for (let r11 of ["light", "dark"]) {
            let n11 = r11 === this.mode ? "_default" : `_${r11}`, i2 = e11.get(t12, n11, true);
            v(i2) || ("_default" === n11 ? o(this.cssVars, [this.cssVar(a2, t12)], i2) : o(this.cssVars, [n11, this.cssVar(a2, t12)], i2));
          }
          continue;
        }
        if (t11.type === tD.mixin) {
          let e11 = new tI(t11);
          for (let r11 of t11.on) this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tH(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${r(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n10 = null != t10 ? t10 : {};
    return n10.__emotion_styles = null !== (r10 = n10.__emotion_styles) && void 0 !== r10 ? r10 : tx(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n10.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n10 = (e11, t11) => d(t11) ? { $type: e11, $value: h(t11, (t12) => n10(e11, t12).$value) } : l(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n11 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? y(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n11.startsWith("sys.") ? `{${n11}}` : `{seed.${n11}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let i2 = this.tokens[a2], o2 = (o3) => {
        for (let s2 of i2.tokens) if (!s2.includes("/")) {
          if (s2.startsWith("sys.")) {
            let e11 = i2.get(s2, "_default"), l2 = i2.get(s2, "_dark");
            tR(t10, [a2, ...s2.split(".")], n10(o3, e11)), e11 !== l2 && tR(r10, [a2, ...s2.split(".")], n10(o3, l2));
          } else tR(e10, [a2, ...s2.split(".")], n10(o3, i2.get(s2, "_default")));
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
          tR(t10, [e11, ...i2.split(".")], n10(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: tB(t10), dark: tB(r10) };
  }
};
__publicField(_tH, "propsCanPercent", tE([...tT.boxSize({}).on]));
__publicField(_tH, "propsCanBaseDp", tE([...tT.boxSize({}).on, ...tT.space({}).on, ...tT.fontSize({}).on, ...tT.letterSpacing({}).on, ...tT.lineHeight({}).on, ...tT.rounded({}).on]));
let tH = _tH;
let tz = { shadow: tT.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tT.customMixin("elevation", { 0: tT.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tT.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tT.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tT.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tT.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tW = (e10, t10, r10, n10) => Object.assign(tu(e10, t10, r10, n10), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n10})` }), tN = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tW(0, 0, 1, 1), standard: Object.assign(tW(0.2, 0, 0, 1), { accelerate: tW(0.3, 0, 1, 1), decelerate: tW(0, 0, 0, 1) }), emphasized: Object.assign(tW(0.2, 0, 0, 1), { accelerate: tW(0.3, 0, 0.8, 0.15), decelerate: tW(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tW(0.4, 0, 0.2, 1), { decelerate: tW(0, 0, 0.2, 1), accelerate: tW(0.4, 0, 1, 1) }) } }, tU = (e10, t10) => {
  let r10 = null != t10 ? t10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return x({ onComplete: z(), $default: z() }, (t11, n10) => {
    let a2, { slots: i2, emit: o2 } = n10, s2 = (t12, r11) => {
      a2 = ta({ ...e10, autoplay: true, onComplete: () => {
        r11(), o2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t12.style, e11);
      } });
    }, l2 = (e11, t12) => {
      a2 = ta({ ...r10, autoplay: true, onComplete: () => {
        t12(), o2("complete", "leave");
      }, onUpdate: (t13) => {
        Object.assign(e11.style, t13);
      } });
    }, c2 = () => {
      null == a2 || a2.stop();
    };
    return () => {
      var e11;
      return w(k, { css: false, onEnter: s2, onEnterCancelled: c2, onLeave: l2, onLeaveCancelled: c2, children: null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2) });
    };
  }, { name: "Transition" });
}, tq = { transitionDuration: tT.transitionDuration(tN.duration), transitionTimingFunction: tT.transitionTimingFunction({ linear: tN.easing.linear.toString(), standard: tN.easing.standard.toString(), "standard-accelerate": tN.easing.standard.accelerate.toString(), "standard-decelerate": tN.easing.standard.decelerate.toString(), emphasized: tN.easing.emphasized.toString(), "emphasized-decelerate": tN.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tN.easing.emphasized.accelerate.toString(), legacy: tN.easing.legacy.toString(), "legacy-decelerate": tN.easing.legacy.decelerate.toString(), "legacy-accelerate": tN.easing.legacy.accelerate.toString() }) };
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
function tG(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tY(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tX(e10, t10) {
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
let tK = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tJ = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tZ = [95.047, 100, 108.883];
function tQ(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function t0(e10) {
  return tQ(t3(e10[0]), t3(e10[1]), t3(e10[2]));
}
function t1(e10) {
  var t10;
  return 116 * t6(tX([t5((t10 = e10) >> 16 & 255), t5(t10 >> 8 & 255), t5(255 & t10)], tK)[1] / 100) - 16;
}
function t2(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function t4(e10) {
  return 116 * t6(e10 / 100) - 16;
}
function t5(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function t3(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function t8(e10) {
  return { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10, a: e10 >> 24 & 255 };
}
function t6(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class t9 {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tZ, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * t2(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n10 - 42) / 92)), h2 = [100 / s2 * (f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2) + 1 - f2, 100 / l2 * f2 + 1 - f2, 100 / c2 * f2 + 1 - f2], p2 = 1 / (5 * n10 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, v2 = m2 * n10 + 0.1 * g2 * g2 * Math.cbrt(5 * n10), b2 = t2(a2) / r10[1], y2 = 1.48 + Math.sqrt(b2), x2 = 0.725 / Math.pow(b2, 0.2), w2 = [Math.pow(v2 * h2[0] * s2 / 100, 0.42), Math.pow(v2 * h2[1] * l2 / 100, 0.42), Math.pow(v2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)];
    return new t9(b2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2, x2, x2, d2, u2, h2, v2, Math.pow(v2, 0.25), y2);
  }
  constructor(e10, t10, r10, n10, a2, i2, o2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n10, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t9.DEFAULT = t9.make();
class t7 {
  constructor(e10, t10, r10, n10, a2, i2, o2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n10, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n10 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n10 * n10), 0.63);
  }
  static fromInt(e10) {
    return t7.fromIntInViewingConditions(e10, t9.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = t5((16711680 & e10) >> 16), n10 = t5((65280 & e10) >> 8), a2 = t5(255 & e10), i2 = 0.41233895 * r10 + 0.35762064 * n10 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n10 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n10 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tG(l2) * d2 / (d2 + 27.13), m2 = 400 * tG(c2) * f2 / (f2 + 27.13), g2 = 400 * tG(u2) * h2 / (h2 + 27.13), v2 = (11 * p2 + -12 * m2 + g2) / 11, b2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(b2, v2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = 100 * Math.pow((40 * p2 + 20 * m2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), M2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, C2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x2 < 20.14 ? x2 + 360 : x2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(v2 * v2 + b2 * b2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = C2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(C2 * t10.c / (t10.aw + 4)), O2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new t7(x2, P2, k2, M2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), O2 * Math.cos(w2), O2 * Math.sin(w2));
  }
  static fromJch(e10, t10, r10) {
    return t7.fromJchInViewingConditions(e10, t10, r10, t9.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n10) {
    let a2 = 4 / n10.c * Math.sqrt(e10 / 100) * (n10.aw + 4) * n10.fLRoot, i2 = t10 * n10.fLRoot, o2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n10.c / (n10.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2);
    return new t7(r10, t10, e10, a2, i2, o2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return t7.fromUcsInViewingConditions(e10, t10, r10, t9.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n10) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n10.fLRoot, i2 = 180 / Math.PI * Math.atan2(r10, t10);
    return i2 < 0 && (i2 += 360), t7.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, i2, n10);
  }
  toInt() {
    return this.viewed(t9.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n10 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n10 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tG(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tG(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tG(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n11 = tJ[0][0] * e11 + tJ[0][1] * t11 + tJ[0][2] * r11, a3 = tJ[1][0] * e11 + tJ[1][1] * t11 + tJ[1][2] * r11, i3 = tJ[2][0] * e11 + tJ[2][1] * t11 + tJ[2][2] * r11;
      return tQ(t3(n11), t3(a3), t3(i3));
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n10) {
    let a2 = n10.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), i2 = n10.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), o2 = n10.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n10.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n10.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n10.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tG(a2) * s2 / (s2 + 27.13), d2 = 400 * tG(i2) * l2 / (l2 + 27.13), f2 = 400 * tG(o2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, v2 = g2 * Math.PI / 180, b2 = 100 * Math.pow((40 * u2 + 20 * d2 + f2) / 20 * n10.nbb / n10.aw, n10.c * n10.z), y2 = 4 / n10.c * Math.sqrt(b2 / 100) * (n10.aw + 4) * n10.fLRoot, x2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n10.nc * n10.ncb * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n10.n), 0.73), w2 = x2 * Math.sqrt(b2 / 100), k2 = w2 * n10.fLRoot, M2 = 50 * Math.sqrt(x2 * n10.c / (n10.aw + 4)), C2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new t7(g2, w2, b2, y2, k2, M2, (1 + 100 * 7e-3) * b2 / (1 + 7e-3 * b2), C2 * Math.cos(v2), C2 * Math.sin(v2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n10 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n10 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tG(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tG(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tG(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
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
class re {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tG(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tX(e10, re.SCALED_DISCOUNT_FROM_LINRGB), r10 = re.chromaticAdaptation(t10[0]), n10 = re.chromaticAdaptation(t10[1]), a2 = re.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n10 - 2 * a2) / 9, (11 * r10 + -12 * n10 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return re.sanitizeRadians(t10 - e10) < re.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n10) {
    let a2 = re.intercept(e10[n10], t10, r10[n10]);
    return re.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = re.Y_FROM_LINRGB[0], n10 = re.Y_FROM_LINRGB[1], a2 = re.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - i2 * n10 - o2 * a2) / r10;
      return re.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - o2 * r10 - i2 * a2) / n10;
      return re.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - i2 * r10 - o2 * n10) / a2;
      return re.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n10 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = re.nthVertex(e10, l2);
      if (c2[0] < 0) continue;
      let u2 = re.hueOf(c2);
      if (!o2) {
        r10 = c2, n10 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || re.areInCyclicOrder(a2, u2, i2)) && (s2 = false, re.areInCyclicOrder(a2, t10, u2) ? (n10 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n10];
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
    let r10 = re.bisectToSegment(e10, t10), n10 = r10[0], a2 = re.hueOf(n10), i2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++) if (n10[e11] !== i2[e11]) {
      let r11 = -1, o2 = 255;
      n10[e11] < i2[e11] ? (r11 = re.criticalPlaneBelow(re.trueDelinearized(n10[e11])), o2 = re.criticalPlaneAbove(re.trueDelinearized(i2[e11]))) : (r11 = re.criticalPlaneAbove(re.trueDelinearized(n10[e11])), o2 = re.criticalPlaneBelow(re.trueDelinearized(i2[e11])));
      for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(o2 - r11)); s2++) {
        let s3 = Math.floor((r11 + o2) / 2), l2 = re.CRITICAL_PLANES[s3], c2 = re.setCoordinate(n10, l2, i2, e11), u2 = re.hueOf(c2);
        re.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n10 = c2, a2 = u2, r11 = s3);
      }
    }
    return re.midpoint(n10, i2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10), r10 = Math.max(0, 27.13 * t10 / (400 - t10));
    return tG(e10) * Math.pow(r10, 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n10 = 11 * Math.sqrt(r10), a2 = t9.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n10 / 100, u2 = Math.pow((0 === t10 || 0 === n10 ? 0 : t10 / Math.sqrt(c2)) * i2, 1 / 0.9), d2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, f2 = 23 * (d2 + 0.305) * u2 / (23 * o2 + 11 * u2 * l2 + 108 * u2 * s2), h2 = f2 * l2, p2 = f2 * s2, m2 = (460 * d2 + 451 * h2 + 288 * p2) / 1403, g2 = (460 * d2 - 891 * h2 - 261 * p2) / 1403, v2 = (460 * d2 - 220 * h2 - 6300 * p2) / 1403, b2 = tX([re.inverseChromaticAdaptation(m2), re.inverseChromaticAdaptation(g2), re.inverseChromaticAdaptation(v2)], re.LINRGB_FROM_SCALED_DISCOUNT);
      if (b2[0] < 0 || b2[1] < 0 || b2[2] < 0) break;
      let y2 = re.Y_FROM_LINRGB[0], x2 = re.Y_FROM_LINRGB[1], w2 = re.Y_FROM_LINRGB[2], k2 = y2 * b2[0] + x2 * b2[1] + w2 * b2[2];
      if (k2 <= 0) break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (b2[0] > 100.01 || b2[1] > 100.01 || b2[2] > 100.01) return 0;
        return t0(b2);
      }
      n10 -= (k2 - r10) * n10 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n10;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999) return function(e11) {
      let t11 = t3(t2(e11));
      return tQ(t11, t11, t11);
    }(r10);
    (n10 = e10 % 360) < 0 && (n10 += 360);
    let a2 = (e10 = n10) / 180 * Math.PI, i2 = t2(r10), o2 = re.findResultByJ(a2, t10, i2);
    return 0 !== o2 ? o2 : t0(re.bisectToLimit(i2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return t7.fromInt(re.solveToInt(e10, t10, r10));
  }
}
re.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], re.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], re.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], re.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class rt {
  static from(e10, t10, r10) {
    return new rt(re.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new rt(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(re.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(re.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(re.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = t7.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = t1(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = t7.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = t1(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = t7.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = t7.fromXyzInViewingConditions(t10[0], t10[1], t10[2], t9.make());
    return rt.from(r10.hue, r10.chroma, t4(t10[1]));
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
class rr {
  static ratioOfTones(e10, t10) {
    return e10 = tY(0, 100, e10), t10 = tY(0, 100, t10), rr.ratioOfYs(t2(e10), t2(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = t2(e10), n10 = t10 * (r10 + 5) - 5, a2 = rr.ratioOfYs(n10, r10), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = t4(n10) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = t2(e10), n10 = (r10 + 5) / t10 - 5, a2 = rr.ratioOfYs(r10, n10), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = t4(n10) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = rr.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = rr.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class rn {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n10 = 65 > Math.round(e10.tone);
    return t10 && r10 && n10;
  }
  static fixIfDisliked(e10) {
    return rn.isDisliked(e10) ? rt.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class ra {
  static fromPalette(e10) {
    var t10, r10;
    return new ra(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n10, a2, i2, o2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n10, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2) throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2) throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2) throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10) return t10;
    let r10 = this.getTone(e10), n10 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n10), n10;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n10 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === o2 || "lighter" === o2 && !e10.isDark || "darker" === o2 && e10.isDark, u2 = c2 ? n10 : a2, d2 = c2 ? a2 : n10, f2 = this.name === u2.name, h2 = e10.isDark ? 1 : -1, p2 = u2.contrastCurve.getContrast(e10.contrastLevel), m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = u2.tone(e10), v2 = rr.ratioOfTones(l2, g2) >= p2 ? g2 : ra.foregroundTone(l2, p2), b2 = d2.tone(e10), y2 = rr.ratioOfTones(l2, b2) >= m2 ? b2 : ra.foregroundTone(l2, m2);
      return t10 && (v2 = ra.foregroundTone(l2, p2), y2 = ra.foregroundTone(l2, m2)), (y2 - v2) * h2 >= i2 || ((y2 = tY(0, 100, v2 + i2 * h2)) - v2) * h2 >= i2 || (v2 = tY(0, 100, y2 - i2 * h2)), 50 <= v2 && v2 < 60 ? y2 = h2 > 0 ? Math.max(y2, (v2 = 60) + i2 * h2) : Math.min(y2, (v2 = 49) + i2 * h2) : 50 <= y2 && y2 < 60 && (y2 = s2 ? h2 > 0 ? Math.max(y2, (v2 = 60) + i2 * h2) : Math.min(y2, (v2 = 49) + i2 * h2) : h2 > 0 ? 60 : 49), f2 ? v2 : y2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background) return r10;
      let n10 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (rr.ratioOfTones(n10, r10) >= a2 || (r10 = ra.foregroundTone(n10, a2)), t10 && (r10 = ra.foregroundTone(n10, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = rr.ratioOfTones(49, n10) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n11] = [this.background, this.secondBackground], [i2, o2] = [t11(e10).getTone(e10), n11(e10).getTone(e10)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (rr.ratioOfTones(s2, r10) >= a2 && rr.ratioOfTones(l2, r10) >= a2) return r10;
        let c2 = rr.lighter(s2, a2), u2 = rr.darker(l2, a2), d2 = [];
        return (-1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2), ra.tonePrefersLightForeground(i2) || ra.tonePrefersLightForeground(o2)) ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = rr.lighterUnsafe(e10, t10), n10 = rr.darkerUnsafe(e10, t10), a2 = rr.ratioOfTones(r10, e10), i2 = rr.ratioOfTones(n10, e10);
    if (!ra.tonePrefersLightForeground(e10)) return i2 >= t10 || i2 >= a2 ? n10 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e11 ? r10 : n10;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return ra.tonePrefersLightForeground(e10) && !ra.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(G = ee || (ee = {}))[G.MONOCHROME = 0] = "MONOCHROME", G[G.NEUTRAL = 1] = "NEUTRAL", G[G.TONAL_SPOT = 2] = "TONAL_SPOT", G[G.VIBRANT = 3] = "VIBRANT", G[G.EXPRESSIVE = 4] = "EXPRESSIVE", G[G.FIDELITY = 5] = "FIDELITY", G[G.CONTENT = 6] = "CONTENT", G[G.RAINBOW = 7] = "RAINBOW", G[G.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class ri {
  constructor(e10, t10, r10, n10) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n10;
  }
  getContrast(e10) {
    var t10, r10, n10, a2, i2, o2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n10 = (e10 - -1) / 1)) * t10 + n10 * r10) : e10 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e10 - 0) / 0.5)) * a2 + o2 * i2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
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
class ro {
  constructor(e10, t10, r10, n10, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n10, this.stayTogether = a2;
  }
}
function rs(e10) {
  return e10.variant === ee.FIDELITY || e10.variant === ee.CONTENT;
}
function rl(e10) {
  return e10.variant === ee.MONOCHROME;
}
function rc(e10, t10) {
  let r10 = e10.inViewingConditions(t9.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return ra.tonePrefersLightForeground(e10.tone) && !ra.toneAllowsLightForeground(r10.tone) ? ra.enableLightForeground(e10.tone) : ra.enableLightForeground(r10.tone);
}
class ru {
  static highestSurface(e10) {
    return e10.isDark ? ru.surfaceBright : ru.surfaceDim;
  }
}
ru.contentAccentToneDelta = 15, ru.primaryPaletteKeyColor = ra.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), ru.secondaryPaletteKeyColor = ra.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), ru.tertiaryPaletteKeyColor = ra.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), ru.neutralPaletteKeyColor = ra.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), ru.neutralVariantPaletteKeyColor = ra.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), ru.background = ra.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ru.onBackground = ra.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ru.background, contrastCurve: new ri(3, 3, 4.5, 7) }), ru.surface = ra.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ru.surfaceDim = ra.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), ru.surfaceBright = ra.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), ru.surfaceContainerLowest = ra.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), ru.surfaceContainerLow = ra.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), ru.surfaceContainer = ra.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), ru.surfaceContainerHigh = ra.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), ru.surfaceContainerHighest = ra.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), ru.onSurface = ra.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(4.5, 7, 11, 21) }), ru.surfaceVariant = ra.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), ru.onSurfaceVariant = ra.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(3, 4.5, 7, 11) }), ru.inverseSurface = ra.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), ru.inverseOnSurface = ra.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => ru.inverseSurface, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.outline = ra.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1.5, 3, 4.5, 7) }), ru.outlineVariant = ra.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7) }), ru.shadow = ra.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ru.scrim = ra.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ru.surfaceTint = ra.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), ru.primary = ra.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(3, 4.5, 7, 11), toneDeltaPair: (e10) => new ro(ru.primaryContainer, ru.primary, 15, "nearer", false) }), ru.onPrimary = ra.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ru.primary, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.primaryContainer = ra.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rs(e10) ? rc(e10.sourceColorHct, e10) : rl(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.primaryContainer, ru.primary, 15, "nearer", false) }), ru.onPrimaryContainer = ra.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rs(e10) ? ra.foregroundTone(ru.primaryContainer.tone(e10), 4.5) : rl(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => ru.primaryContainer, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.inversePrimary = ra.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => ru.inverseSurface, contrastCurve: new ri(3, 4.5, 7, 11) }), ru.secondary = ra.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(3, 4.5, 7, 11), toneDeltaPair: (e10) => new ro(ru.secondaryContainer, ru.secondary, 15, "nearer", false) }), ru.onSecondary = ra.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => ru.secondary, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.secondaryContainer = ra.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (rl(e10)) return e10.isDark ? 30 : 85;
  if (!rs(e10)) return t10;
  let r10 = function(e11, t11, r11, n10) {
    let a2 = r11, i2 = rt.from(e11, t11, r11);
    if (i2.chroma < t11) {
      let r12 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n10 ? -1 : 1;
        let o2 = rt.from(e11, t11, a2);
        if (r12 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11)) break;
        Math.abs(o2.chroma - t11) < Math.abs(i2.chroma - t11) && (i2 = o2), r12 = Math.max(r12, o2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return rc(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.secondaryContainer, ru.secondary, 15, "nearer", false) }), ru.onSecondaryContainer = ra.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => rs(e10) ? ra.foregroundTone(ru.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ru.secondaryContainer, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.tertiary = ra.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(3, 4.5, 7, 11), toneDeltaPair: (e10) => new ro(ru.tertiaryContainer, ru.tertiary, 15, "nearer", false) }), ru.onTertiary = ra.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ru.tertiary, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.tertiaryContainer = ra.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (rl(e10)) return e10.isDark ? 60 : 49;
  if (!rs(e10)) return e10.isDark ? 30 : 90;
  let t10 = rc(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return rn.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.tertiaryContainer, ru.tertiary, 15, "nearer", false) }), ru.onTertiaryContainer = ra.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? e10.isDark ? 0 : 100 : rs(e10) ? ra.foregroundTone(ru.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ru.tertiaryContainer, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.error = ra.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(3, 4.5, 7, 11), toneDeltaPair: (e10) => new ro(ru.errorContainer, ru.error, 15, "nearer", false) }), ru.onError = ra.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => ru.error, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.errorContainer = ra.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.errorContainer, ru.error, 15, "nearer", false) }), ru.onErrorContainer = ra.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ru.errorContainer, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.primaryFixed = ra.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? 40 : 90, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.primaryFixed, ru.primaryFixedDim, 10, "lighter", true) }), ru.primaryFixedDim = ra.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? 30 : 80, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.primaryFixed, ru.primaryFixedDim, 10, "lighter", true) }), ru.onPrimaryFixed = ra.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? 100 : 10, background: (e10) => ru.primaryFixedDim, secondBackground: (e10) => ru.primaryFixed, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.onPrimaryFixedVariant = ra.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => rl(e10) ? 90 : 30, background: (e10) => ru.primaryFixedDim, secondBackground: (e10) => ru.primaryFixed, contrastCurve: new ri(3, 4.5, 7, 11) }), ru.secondaryFixed = ra.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => rl(e10) ? 80 : 90, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.secondaryFixed, ru.secondaryFixedDim, 10, "lighter", true) }), ru.secondaryFixedDim = ra.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => rl(e10) ? 70 : 80, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.secondaryFixed, ru.secondaryFixedDim, 10, "lighter", true) }), ru.onSecondaryFixed = ra.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => ru.secondaryFixedDim, secondBackground: (e10) => ru.secondaryFixed, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.onSecondaryFixedVariant = ra.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => rl(e10) ? 25 : 30, background: (e10) => ru.secondaryFixedDim, secondBackground: (e10) => ru.secondaryFixed, contrastCurve: new ri(3, 4.5, 7, 11) }), ru.tertiaryFixed = ra.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? 40 : 90, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.tertiaryFixed, ru.tertiaryFixedDim, 10, "lighter", true) }), ru.tertiaryFixedDim = ra.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? 30 : 80, isBackground: true, background: (e10) => ru.highestSurface(e10), contrastCurve: new ri(1, 1, 3, 7), toneDeltaPair: (e10) => new ro(ru.tertiaryFixed, ru.tertiaryFixedDim, 10, "lighter", true) }), ru.onTertiaryFixed = ra.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? 100 : 10, background: (e10) => ru.tertiaryFixedDim, secondBackground: (e10) => ru.tertiaryFixed, contrastCurve: new ri(4.5, 7, 11, 21) }), ru.onTertiaryFixedVariant = ra.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rl(e10) ? 90 : 30, background: (e10) => ru.tertiaryFixedDim, secondBackground: (e10) => ru.tertiaryFixed, contrastCurve: new ri(3, 4.5, 7, 11) });
class rd {
  static fromInt(e10) {
    let t10 = rt.fromInt(e10);
    return rd.fromHct(t10);
  }
  static fromHct(e10) {
    return new rd(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new rd(e10, t10, rd.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = rt.from(e10, t10, 50), n10 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let i2 = rt.from(e10, t10, 50 + a2), o2 = Math.abs(i2.chroma - t10);
      o2 < n10 && (n10 = o2, r10 = i2);
      let s2 = rt.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n10 && (n10 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = rt.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return rt.fromInt(this.tone(e10));
  }
}
class rf {
  static of(e10) {
    return new rf(e10, false);
  }
  static contentOf(e10) {
    return new rf(e10, true);
  }
  static fromColors(e10) {
    return rf.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return rf.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new rf(t10.primary, e10);
    if (t10.secondary) {
      let n10 = new rf(t10.secondary, e10);
      r10.a2 = n10.a1;
    }
    if (t10.tertiary) {
      let n10 = new rf(t10.tertiary, e10);
      r10.a3 = n10.a1;
    }
    if (t10.error) {
      let n10 = new rf(t10.error, e10);
      r10.error = n10.a1;
    }
    if (t10.neutral) {
      let n10 = new rf(t10.neutral, e10);
      r10.n1 = n10.n1;
    }
    if (t10.neutralVariant) {
      let n10 = new rf(t10.neutralVariant, e10);
      r10.n2 = n10.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = rt.fromInt(e10), n10 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = rd.fromHueAndChroma(n10, a2), this.a2 = rd.fromHueAndChroma(n10, a2 / 3), this.a3 = rd.fromHueAndChroma(n10 + 60, a2 / 2), this.n1 = rd.fromHueAndChroma(n10, Math.min(a2 / 12, 4)), this.n2 = rd.fromHueAndChroma(n10, Math.min(a2 / 6, 8))) : (this.a1 = rd.fromHueAndChroma(n10, Math.max(48, a2)), this.a2 = rd.fromHueAndChroma(n10, 16), this.a3 = rd.fromHueAndChroma(n10 + 60, 24), this.n1 = rd.fromHueAndChroma(n10, 4), this.n2 = rd.fromHueAndChroma(n10, 8)), this.error = rd.fromHueAndChroma(25, 84);
  }
}
function rh(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n10 = 8 === e10.length;
  if (!t10 && !r10 && !n10) throw Error("unexpected hex " + e10);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = rp(e10.slice(0, 1).repeat(2)), i2 = rp(e10.slice(1, 2).repeat(2)), o2 = rp(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = rp(e10.slice(0, 2)), i2 = rp(e10.slice(2, 4)), o2 = rp(e10.slice(4, 6))) : n10 && (a2 = rp(e10.slice(2, 4)), i2 = rp(e10.slice(4, 6)), o2 = rp(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function rp(e10) {
  return parseInt(e10, 16);
}
let rm = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rg = (e10) => {
  let t10 = t8(e10);
  return [t10.r, t10.g, t10.b];
}, rv = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rb = class _rb {
  constructor(e10) {
    this.seeds = e10;
  }
  static createRoleColorRuleBuilder(e10) {
    let t10 = {}, r10 = new Proxy({}, { get: (n10, a2) => "build" == a2 ? () => t10 : (n11, a3) => (t10[`${n11}${e10 ? `:${e10}` : ""}`] = a3, r10) });
    return r10;
  }
  static createRoleColorSourcePicker() {
    return new Proxy({}, { get: (e10, t10) => (e11) => [t10, e11] });
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = _rb.createRoleColorSourcePicker(), r10 = _rb.createRoleColorRuleBuilder().rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(87)).rule("outline-variant", t10.neutralVariant(80)).rule("surface", t10.neutral(99)).rule("on-surface", t10.neutral(10)).rule("surface-variant", t10.neutralVariant(90)).rule("on-surface-variant", t10.neutralVariant(30)).rule("surface-dim", t10.neutral(87)).rule("surface-bright", t10.neutral(98)).rule("surface-container-lowest", t10.neutral(100)).rule("surface-container-low", t10.neutral(96)).rule("surface-container", t10.neutral(94)).rule("surface-container-high", t10.neutral(92)).rule("surface-container-highest", t10.neutral(90)).rule("inverse-surface", t10.neutral(20)).rule("inverse-on-surface", t10.neutral(95)).rule("inverse-primary", t10.primary(80)), n10 = _rb.createRoleColorRuleBuilder("dark").rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(60)).rule("outline-variant", t10.neutralVariant(30)).rule("surface", t10.neutral(10)).rule("on-surface", t10.neutral(90)).rule("surface-variant", t10.neutralVariant(30)).rule("on-surface-variant", t10.neutralVariant(80)).rule("surface-dim", t10.neutral(6)).rule("surface-bright", t10.neutral(24)).rule("surface-container-lowest", t10.neutral(4)).rule("surface-container-low", t10.neutral(10)).rule("surface-container", t10.neutral(12)).rule("surface-container-high", t10.neutral(17)).rule("surface-container-highest", t10.neutral(22)).rule("inverse-surface", t10.neutral(90)).rule("inverse-on-surface", t10.neutral(20)).rule("inverse-primary", t10.primary(40));
    for (let e11 in this.seeds) e11.startsWith("neutral") || (r10 = r10.rule(e11, t10[e11](40)).rule(`on-${e11}`, t10[e11](100)).rule(`${e11}-container`, t10[e11](90)).rule(`on-${e11}-container`, t10[e11](10)), n10 = n10.rule(e11, t10[e11](80)).rule(`on-${e11}`, t10[e11](20)).rule(`${e11}-container`, t10[e11](30)).rule(`on-${e11}-container`, t10[e11](90)));
    return { ...r10.build(), ...n10.build(), ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let [i2, [o2, s2]] of Object.entries(e10)) if (this.seeds[o2]) {
      var n10, a2;
      if (i2.endsWith(":dark")) {
        r10[i2.split(":")[0]] = rm[s2] ? `${String(o2)}.${s2}` : null === (a2 = this.seeds[o2]) || void 0 === a2 ? void 0 : a2.tone(s2);
        continue;
      }
      t10[i2] = rm[s2] ? `${String(o2)}.${s2}` : null === (n10 = this.seeds[o2]) || void 0 === n10 ? void 0 : n10.tone(s2);
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = this.normalizeRoleRules(e10), [r10, n10] = this.getThemeRoleColors(t10), a2 = {}, i2 = {};
    for (let e11 in r10) if (a2[`${e11}`] = { _default: b(r10[e11]) ? rg(r10[e11]) : r10[e11], _dark: b(n10[e11]) ? rg(n10[e11]) : n10[e11] }, rv(e11) && (i2[`${e11}`] = tT.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), i2[`${e11}-container`] = tT.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        i2[`${e11}`] = tT.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      i2[`${e11}`] = tT.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), i2[`on-${e11}`] = tT.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let o2 = (e11) => Object.keys(rm).reduce((t11, r11) => Object.assign(t11, { [r11]: rg(e11.tone(parseInt(r11))) }), {});
    return { color: tT.color({ ...h(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: a2 }), containerStyle: tT.customMixin("containerStyle", { sys: i2 }) };
  }
};
__publicField(_rb, "toHEX", (e10) => `#${rg(e10).map((e11) => M(e11.toString(16), 2, "0")).join("")}`);
__publicField(_rb, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n10, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e10, l2 = rf.contentFromColors({ primary: rh(t10), secondary: r10 ? rh(r10) : void 0, tertiary: n10 ? rh(n10) : void 0, error: o2 ? rh(o2) : void 0 });
  return a2 && (l2.n1 = rd.fromHueAndChroma(rh(a2), 4)), i2 && (l2.n2 = rd.fromHueAndChroma(rh(i2), 8)), new _rb({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...h(s2, (e11) => rd.fromInt(rh(e11))) });
});
let rb = _rb;
let ry = tT.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rx = { font: tT.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tT.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tT.customMixin("textStyle", { sys: { "display-large": tT.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tT.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tT.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tT.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tT.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tT.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tT.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tT.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tT.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tT.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tT.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tT.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tT.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tT.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tT.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rw = rb.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rk = { ...rx, ...tq, ...tz, rounded: ry, ...rw.toDesignTokens({}) }, rM = tH.create(rk, { varPrefix: "vk" }), rC = C(() => rM, { name: "Theme" });
var rP = function() {
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
      var n10 = function(e12) {
        if (e12.sheet) return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++) if (document.styleSheets[t12].ownerNode === e12) return document.styleSheets[t12];
      }(r10);
      try {
        n10.insertRule(e11, n10.cssRules.length);
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
}(), r_ = "-ms-", rS = "-moz-", rO = "-webkit-", r$ = "comm", rD = "rule", rT = "decl", rR = "@keyframes", rA = Math.abs, rI = String.fromCharCode, rL = Object.assign;
function rB(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rF(e10, t10) {
  return e10.indexOf(t10);
}
function rV(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rj(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rE(e10) {
  return e10.length;
}
function rH(e10, t10) {
  return t10.push(e10), e10;
}
var rz = 1, rW = 1, rN = 0, rU = 0, rq = 0, rG = "";
function rY(e10, t10, r10, n10, a2, i2, o2) {
  return { value: e10, root: t10, parent: r10, type: n10, props: a2, children: i2, line: rz, column: rW, length: o2, return: "" };
}
function rX(e10, t10) {
  return rL(rY("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rK() {
  return rq = rU < rN ? rV(rG, rU++) : 0, rW++, 10 === rq && (rW = 1, rz++), rq;
}
function rJ() {
  return rV(rG, rU);
}
function rZ(e10) {
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
function rQ(e10) {
  return rz = rW = 1, rN = rE(rG = e10), rU = 0, [];
}
function r0(e10) {
  var t10, r10;
  return (t10 = rU - 1, r10 = function e11(t11) {
    for (; rK(); ) switch (rq) {
      case t11:
        return rU;
      case 34:
      case 39:
        34 !== t11 && 39 !== t11 && e11(rq);
        break;
      case 40:
        41 === t11 && e11(t11);
        break;
      case 92:
        rK();
    }
    return rU;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rj(rG, t10, r10)).trim();
}
function r1(e10, t10, r10, n10, a2, i2, o2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? i2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n10; ++p2) for (var v2 = 0, b2 = rj(e10, d2 + 1, d2 = rA(m2 = o2[p2])), y2 = e10; v2 < h2; ++v2) (y2 = (m2 > 0 ? f2[v2] + " " + b2 : rB(b2, /&\f/g, f2[v2])).trim()) && (l2[g2++] = y2);
  return rY(e10, t10, r10, 0 === a2 ? rD : s2, l2, c2, u2);
}
function r2(e10, t10, r10, n10) {
  return rY(e10, t10, r10, rT, rj(e10, 0, n10), rj(e10, n10 + 1, -1), n10);
}
function r4(e10, t10) {
  for (var r10 = "", n10 = e10.length, a2 = 0; a2 < n10; a2++) r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function r5(e10, t10, r10, n10) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length) break;
    case "@import":
    case rT:
      return e10.return = e10.return || e10.value;
    case r$:
      return "";
    case rR:
      return e10.return = e10.value + "{" + r4(e10.children, n10) + "}";
    case rD:
      e10.value = e10.props.join(",");
  }
  return rE(r10 = r4(e10.children, n10)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var r3 = function(e10, t10, r10) {
  for (var n10 = 0, a2 = 0; n10 = a2, a2 = rJ(), 38 === n10 && 12 === a2 && (t10[r10] = 1), !rZ(a2); ) rK();
  return rj(rG, e10, rU);
}, r8 = function(e10, t10) {
  var r10 = -1, n10 = 44;
  do
    switch (rZ(n10)) {
      case 0:
        38 === n10 && 12 === rJ() && (t10[r10] = 1), e10[r10] += r3(rU - 1, t10, r10);
        break;
      case 2:
        e10[r10] += r0(n10);
        break;
      case 4:
        if (44 === n10) {
          e10[++r10] = 58 === rJ() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rI(n10);
    }
  while (n10 = rK());
  return e10;
}, r6 = function(e10, t10) {
  var r10;
  return r10 = r8(rQ(e10), t10), rG = "", r10;
}, r9 = /* @__PURE__ */ new WeakMap(), r7 = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n10 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; ) if (!(r10 = r10.parent)) return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || r9.get(r10)) && !n10) {
      r9.set(e10, true);
      for (var a2 = [], i2 = r6(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++) for (var c2 = 0; c2 < o2.length; c2++, l2++) e10.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, ne = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, nt = [function(e10, t10, r10, n10) {
  if (e10.length > -1 && !e10.return) switch (e10.type) {
    case rT:
      e10.return = function e11(t11, r11) {
        switch (45 ^ rV(t11, 0) ? (((r11 << 2 ^ rV(t11, 0)) << 2 ^ rV(t11, 1)) << 2 ^ rV(t11, 2)) << 2 ^ rV(t11, 3) : 0) {
          case 5103:
            return rO + "print-" + t11 + t11;
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
            return rO + t11 + t11;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return rO + t11 + rS + t11 + r_ + t11 + t11;
          case 6828:
          case 4268:
            return rO + t11 + r_ + t11 + t11;
          case 6165:
            return rO + t11 + r_ + "flex-" + t11 + t11;
          case 5187:
            return rO + t11 + rB(t11, /(\w+).+(:[^]+)/, rO + "box-$1$2" + r_ + "flex-$1$2") + t11;
          case 5443:
            return rO + t11 + r_ + "flex-item-" + rB(t11, /flex-|-self/, "") + t11;
          case 4675:
            return rO + t11 + r_ + "flex-line-pack" + rB(t11, /align-content|flex-|-self/, "") + t11;
          case 5548:
            return rO + t11 + r_ + rB(t11, "shrink", "negative") + t11;
          case 5292:
            return rO + t11 + r_ + rB(t11, "basis", "preferred-size") + t11;
          case 6060:
            return rO + "box-" + rB(t11, "-grow", "") + rO + t11 + r_ + rB(t11, "grow", "positive") + t11;
          case 4554:
            return rO + rB(t11, /([^-])(transform)/g, "$1" + rO + "$2") + t11;
          case 6187:
            return rB(rB(rB(t11, /(zoom-|grab)/, rO + "$1"), /(image-set)/, rO + "$1"), t11, "") + t11;
          case 5495:
          case 3959:
            return rB(t11, /(image-set\([^]*)/, rO + "$1$`$1");
          case 4968:
            return rB(rB(t11, /(.+:)(flex-)?(.*)/, rO + "box-pack:$3" + r_ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rO + t11 + t11;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return rB(t11, /(.+)-inline(.+)/, rO + "$1$2") + t11;
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
            if (rE(t11) - 1 - r11 > 6) switch (rV(t11, r11 + 1)) {
              case 109:
                if (45 !== rV(t11, r11 + 4)) break;
              case 102:
                return rB(t11, /(.+:)(.+)-([^]+)/, "$1" + rO + "$2-$3$1" + rS + (108 == rV(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
              case 115:
                return ~rF(t11, "stretch") ? e11(rB(t11, "stretch", "fill-available"), r11) + t11 : t11;
            }
            break;
          case 4949:
            if (115 !== rV(t11, r11 + 1)) break;
          case 6444:
            switch (rV(t11, rE(t11) - 3 - (~rF(t11, "!important") && 10))) {
              case 107:
                return rB(t11, ":", ":" + rO) + t11;
              case 101:
                return rB(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rO + (45 === rV(t11, 14) ? "inline-" : "") + "box$3$1" + rO + "$2$3$1" + r_ + "$2box$3") + t11;
            }
            break;
          case 5936:
            switch (rV(t11, r11 + 11)) {
              case 114:
                return rO + t11 + r_ + rB(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
              case 108:
                return rO + t11 + r_ + rB(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
              case 45:
                return rO + t11 + r_ + rB(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
            }
            return rO + t11 + r_ + t11 + t11;
        }
        return t11;
      }(e10.value, e10.length);
      break;
    case rR:
      return r4([rX(e10, { value: rB(e10.value, "@", "@" + rO) })], n10);
    case rD:
      if (e10.length) {
        var a2, i2;
        return a2 = e10.props, i2 = function(t11) {
          var r11;
          switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
            case ":read-only":
            case ":read-write":
              return r4([rX(e10, { props: [rB(t11, /:(read-\w+)/, ":" + rS + "$1")] })], n10);
            case "::placeholder":
              return r4([rX(e10, { props: [rB(t11, /:(plac\w+)/, ":" + rO + "input-$1")] }), rX(e10, { props: [rB(t11, /:(plac\w+)/, ":" + rS + "$1")] }), rX(e10, { props: [rB(t11, /:(plac\w+)/, r_ + "input-$1")] })], n10);
          }
          return "";
        }, a2.map(i2).join("");
      }
  }
}], nr = function(e10) {
  var t10, r10, n10, a2, i2, o2, s2 = e10.key;
  if ("css" === s2) {
    var l2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c2 = e10.stylisPlugins || nt, u2 = {}, d2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++) u2[t11[r11]] = true;
    d2.push(e11);
  });
  var f2 = (r10 = (t10 = [r7, ne].concat(c2, [r5, (n10 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n10(e11);
  })])).length, function(e11, n11, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++) o3 += t10[s3](e11, n11, a3, i3) || "";
    return o3;
  }), h2 = function(e11) {
    var t11, r11;
    return r4((r11 = function e12(t12, r12, n11, a3, i3, o3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m2 = 0, g2 = 0, v2 = 1, b2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = i3, M2 = o3, C2 = a3, P2 = w2; b2; ) switch (g2 = x2, x2 = rK()) {
        case 40:
          if (108 != g2 && 58 == rV(P2, h3 - 1)) {
            -1 != rF(P2 += rB(r0(x2), "&", "&\f"), "&\f") && (y2 = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          P2 += r0(x2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          P2 += function(e13) {
            for (; rq = rJ(); ) if (rq < 33) rK();
            else break;
            return rZ(e13) > 2 || rZ(rq) > 3 ? "" : " ";
          }(g2);
          break;
        case 92:
          P2 += function(e13, t13) {
            for (var r13; --t13 && rK() && !(rq < 48) && !(rq > 102) && (!(rq > 57) || !(rq < 65)) && (!(rq > 70) || !(rq < 97)); ) ;
            return r13 = rU + (t13 < 6 && 32 == rJ() && 32 == rK()), rj(rG, e13, r13);
          }(rU - 1, 7);
          continue;
        case 47:
          switch (rJ()) {
            case 42:
            case 47:
              rH(rY(u3 = function(e13, t13) {
                for (; rK(); ) if (e13 + rq === 57) break;
                else if (e13 + rq === 84 && 47 === rJ()) break;
                return "/*" + rj(rG, t13, rU - 1) + "*" + rI(47 === e13 ? e13 : rK());
              }(rK(), rU), r12, n11, r$, rI(rq), rj(u3, 2, -2), 0), c3);
              break;
            default:
              P2 += "/";
          }
          break;
        case 123 * v2:
          l3[d3++] = rE(P2) * y2;
        case 125 * v2:
        case 59:
        case 0:
          switch (x2) {
            case 0:
            case 125:
              b2 = 0;
            case 59 + f3:
              -1 == y2 && (P2 = rB(P2, /\f/g, "")), m2 > 0 && rE(P2) - h3 && rH(m2 > 32 ? r2(P2 + ";", a3, n11, h3 - 1) : r2(rB(P2, " ", "") + ";", a3, n11, h3 - 2), c3);
              break;
            case 59:
              P2 += ";";
            default:
              if (rH(C2 = r1(P2, r12, n11, d3, f3, i3, l3, w2, k2 = [], M2 = [], h3), o3), 123 === x2) {
                if (0 === f3) e12(P2, r12, C2, C2, k2, o3, h3, l3, M2);
                else switch (99 === p3 && 110 === rV(P2, 3) ? 100 : p3) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    e12(t12, C2, C2, a3 && rH(r1(t12, C2, C2, 0, 0, i3, l3, w2, i3, k2 = [], h3), M2), i3, M2, h3, l3, a3 ? k2 : M2);
                    break;
                  default:
                    e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                }
              }
          }
          d3 = f3 = m2 = 0, v2 = y2 = 1, w2 = P2 = "", h3 = s3;
          break;
        case 58:
          h3 = 1 + rE(P2), m2 = g2;
        default:
          if (v2 < 1) {
            if (123 == x2) --v2;
            else if (125 == x2 && 0 == v2++ && 125 == (rq = rU > 0 ? rV(rG, --rU) : 0, rW--, 10 === rq && (rW = 1, rz--), rq)) continue;
          }
          switch (P2 += rI(x2), x2 * v2) {
            case 38:
              y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
              break;
            case 44:
              l3[d3++] = (rE(P2) - 1) * y2, y2 = 1;
              break;
            case 64:
              45 === rJ() && (P2 += r0(rK())), p3 = rJ(), f3 = h3 = rE(w2 = P2 += function(e13) {
                for (; !rZ(rJ()); ) rK();
                return rj(rG, e13, rU);
              }(rU)), x2++;
              break;
            case 45:
              45 === g2 && 2 == rE(P2) && (v2 = 0);
          }
      }
      return o3;
    }("", null, null, null, [""], t11 = rQ(t11 = e11), 0, [0], t11), rG = "", r11), f2);
  };
  i2 = function(e11, t11, r11, n11) {
    o2 = r11, h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n11 && (p2.inserted[t11.name] = true);
  };
  var p2 = { key: s2, sheet: new rP({ key: s2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u2, registered: {}, insert: i2 };
  return p2.sheet.hydrate(d2), p2;
}, nn = function(e10, t10, r10) {
  var n10 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n10] && (e10.registered[n10] = t10.styles);
}, na = function(e10, t10, r10) {
  nn(e10, t10, r10);
  var n10 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n10 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let ni = C(() => nr({ key: "css" }), { name: "Cache" }), no = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping) e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      na(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, ns = x({ sx: z(), component: z().optional().default("div") }, (e10, t10) => {
  var r10;
  let { slots: n10, expose: a2 } = t10, i2 = rC.use(), o2 = ni.use(), s2 = i2.unstable_css(o2, null !== (r10 = e10.sx) && void 0 !== r10 ? r10 : {}), l2 = () => "0" !== s2.name ? `${o2.key}-${s2.name}` : "", c2 = no(o2);
  P(() => {
    c2({ serialized: s2, isStringTag: true });
  });
  let u2 = _();
  return a2({ $$forwardRef: u2 }), () => {
    var t11;
    return w(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: u2, class: l2(), children: n10 });
  };
});
function nl() {
  let e10;
  for (var t10 = arguments.length, r10 = Array(t10), n10 = 0; n10 < t10; n10++) r10[n10] = arguments[n10];
  let a2 = "div", i2 = {}, o2 = {};
  for (let t11 of r10) {
    if (g(t11)) {
      e10 = t11;
      continue;
    }
    if (l(t11) || S(t11)) {
      a2 = t11;
      continue;
    }
    v(e10) && O(t11) ? i2 = t11 : o2 = t11;
  }
  return null != e10 || (e10 = (e11, t11) => (r11) => {
    let n11 = {};
    for (let t12 in e11) "component" !== t12 && "sx" !== t12 && e11[t12] && (n11[`data-${t12}`] = e11[t12]);
    return w(r11, { ...n11, children: t11.slots });
  }), (t11) => {
    let r11 = Object.assign(x({ ...i2, sx: z().optional(), component: z().optional() }, (n11, i3) => {
      let o3 = rC.use(), s2 = ni.use(), l2 = no(s2), c2 = $(""), u2 = o3.unstable_css(s2, t11), d2 = () => ("0" !== u2.name ? `${s2.key}-${u2.name}${c2.value}` : `${c2.value}`) + (r11.name ? ` ${r11.name}` : "");
      if (a2.__styled) {
        var f2;
        let e11 = o3.unstable_css(s2, null !== (f2 = n11.sx) && void 0 !== f2 ? f2 : {});
        "0" !== e11.name && (c2.value = ` ${s2.key}-${e11.name}`), P(() => {
          l2({ serialized: u2, isStringTag: true }), l2({ serialized: e11, isStringTag: true });
        });
      } else D(() => {
        l2({ serialized: u2, isStringTag: true });
      });
      let h2 = e10(n11, i3);
      return () => {
        if (a2.__styled) {
          let e12 = h2(a2);
          return e12 ? T(e12, { component: n11.component, class: d2() }) : null;
        }
        let e11 = h2(ns);
        return e11 ? T(e11, { component: n11.component || a2, sx: n11.sx, class: d2() }) : null;
      };
    }, o2), { __styled: true });
    return r11.toString = () => `.${r11.name}`, r11;
  };
}
let nc = x({ styles: z() }, (e10) => {
  let { styles: t10 } = e10, r10 = rC.use(), n10 = ni.use(), a2 = no(n10), i2 = r10.unstable_css(n10, l(t10) ? { "&": t10 } : t10);
  return D(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}, { displayName: "GlobalStyle" }), nu = x(() => {
  let e10 = rC.use().rootCSSVars;
  return () => w(nc, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}, { displayName: "CSSReset" }), nd = C(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), nf = C(() => new nh($(null), $(null), () => false), { name: "Overlay" });
class nh {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = R(this.triggerRef), r10 = R(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let np = x({ isOpen: W().optional(), style: z().optional(), contentRef: z().optional(), triggerRef: z().optional(), onClickOutside: z(), onEscKeydown: z(), onContentBeforeMount: z(), $transition: z().optional(), $default: z().optional() }, (e10, t10) => {
  var r10;
  let { slots: n10, attrs: a2, emit: i2 } = t10, o2 = e10.contentRef || $(null), s2 = new nh(null !== (r10 = e10.triggerRef) && void 0 !== r10 ? r10 : $(null), o2, () => !!e10.isOpen), l2 = nd.use();
  return A(nf.use().add(s2)), window && I(L(o2, "value"), V((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      s2.isClickInside(e12) || i2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), V((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && s2.topmost() && i2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), F()), () => {
    var t11;
    let r11 = e10.isOpen ? T(w("div", { ...a2, ref: o2, style: e10.style, children: w(nf, { value: s2, children: null === (t11 = n10.default) || void 0 === t11 ? void 0 : t11.call(n10) }) }), { onVnodeBeforeMount: () => {
      i2("content-before-mount");
    } }) : null;
    return w(B, { to: l2.mountPoint(), children: n10.transition ? n10.transition({ content: r11 }) : r11 });
  };
}, { inheritAttrs: false, name: "Overlay" }, { displayName: "Overlay" });
var nm = "bottom", ng = "right", nv = "left", nb = "auto", ny = ["top", nm, ng, nv], nx = "start", nw = "viewport", nk = "popper", nM = ny.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nx, t10 + "-end"]);
}, []), nC = [].concat(ny, [nb]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nx, t10 + "-end"]);
}, []), nP = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function n_(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nS(e10) {
  if (null == e10) return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nO(e10) {
  var t10 = nS(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function n$(e10) {
  var t10 = nS(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nD(e10) {
  if ("undefined" == typeof ShadowRoot) return false;
  var t10 = nS(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nT(e10) {
  return e10.split("-")[0];
}
var nR = Math.max, nA = Math.min, nI = Math.round;
function nL() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nB() {
  return !/^((?!chrome|android).)*safari/i.test(nL());
}
function nF(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n10 = e10.getBoundingClientRect(), a2 = 1, i2 = 1;
  t10 && n$(e10) && (a2 = e10.offsetWidth > 0 && nI(n10.width) / e10.offsetWidth || 1, i2 = e10.offsetHeight > 0 && nI(n10.height) / e10.offsetHeight || 1);
  var o2 = (nO(e10) ? nS(e10) : window).visualViewport, s2 = !nB() && r10, l2 = (n10.left + (s2 && o2 ? o2.offsetLeft : 0)) / a2, c2 = (n10.top + (s2 && o2 ? o2.offsetTop : 0)) / i2, u2 = n10.width / a2, d2 = n10.height / i2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nV(e10) {
  return nS(e10).getComputedStyle(e10);
}
function nj(e10) {
  return ((nO(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function nE(e10) {
  return "html" === n_(e10) ? e10 : e10.assignedSlot || e10.parentNode || (nD(e10) ? e10.host : null) || nj(e10);
}
function nH(e10) {
  return n$(e10) && "fixed" !== nV(e10).position ? e10.offsetParent : null;
}
function nz(e10) {
  for (var t10 = nS(e10), r10 = nH(e10); r10 && ["table", "td", "th"].indexOf(n_(r10)) >= 0 && "static" === nV(r10).position; ) r10 = nH(r10);
  return r10 && ("html" === n_(r10) || "body" === n_(r10) && "static" === nV(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(nL());
    if (/Trident/i.test(nL()) && n$(e11) && "fixed" === nV(e11).position) return null;
    var r11 = nE(e11);
    for (nD(r11) && (r11 = r11.host); n$(r11) && 0 > ["html", "body"].indexOf(n_(r11)); ) {
      var n10 = nV(r11);
      if ("none" !== n10.transform || "none" !== n10.perspective || "paint" === n10.contain || -1 !== ["transform", "perspective"].indexOf(n10.willChange) || t11 && "filter" === n10.willChange || t11 && n10.filter && "none" !== n10.filter) return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nW(e10) {
  return e10.split("-")[1];
}
var nN = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nU(e10) {
  var t10, r10, n10, a2, i2, o2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, v2 = e10.isFixed, b2 = f2.x, y2 = void 0 === b2 ? 0 : b2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nv, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nz(l2), $2 = "clientHeight", D2 = "clientWidth";
    O2 === nS(l2) && "static" !== nV(O2 = nj(l2)).position && "absolute" === h2 && ($2 = "scrollHeight", D2 = "scrollWidth"), ("top" === u2 || (u2 === nv || u2 === ng) && "end" === d2) && (_2 = nm, w2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[$2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nv || ("top" === u2 || u2 === nm) && "end" === d2) && (P2 = ng, y2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[D2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var T2 = Object.assign({ position: h2 }, m2 && nN), R2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nS(l2), n10 = t10.x, a2 = t10.y, { x: nI(n10 * (i2 = r10.devicePixelRatio || 1)) / i2 || 0, y: nI(a2 * i2) / i2 || 0 }) : { x: y2, y: w2 };
  return (y2 = R2.x, w2 = R2.y, p2) ? Object.assign({}, T2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, T2, ((o2 = {})[_2] = C2 ? w2 + "px" : "", o2[P2] = M2 ? y2 + "px" : "", o2.transform = "", o2));
}
var nq = { passive: true }, nG = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nY(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nG[e11];
  });
}
var nX = { start: "end", end: "start" };
function nK(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nX[e11];
  });
}
function nJ(e10) {
  var t10 = nS(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nZ(e10) {
  return nF(nj(e10)).left + nJ(e10).scrollLeft;
}
function nQ(e10) {
  var t10 = nV(e10), r10 = t10.overflow, n10 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n10);
}
function n0(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n10 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(n_(t11)) >= 0 ? t11.ownerDocument.body : n$(t11) && nQ(t11) ? t11 : e11(nE(t11));
  }(e10), a2 = n10 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), i2 = nS(n10), o2 = a2 ? [i2].concat(i2.visualViewport || [], nQ(n10) ? n10 : []) : n10, s2 = t10.concat(o2);
  return a2 ? s2 : s2.concat(n0(nE(o2)));
}
function n1(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function n2(e10, t10, r10) {
  var n10, a2, i2, o2, s2, l2, c2, u2, d2, f2;
  return t10 === nw ? n1(function(e11, t11) {
    var r11 = nS(e11), n11 = nj(e11), a3 = r11.visualViewport, i3 = n11.clientWidth, o3 = n11.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      i3 = a3.width, o3 = a3.height;
      var c3 = nB();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: i3, height: o3, x: s3 + nZ(e11), y: l3 };
  }(e10, r10)) : nO(t10) ? ((n10 = nF(t10, false, "fixed" === r10)).top = n10.top + t10.clientTop, n10.left = n10.left + t10.clientLeft, n10.bottom = n10.top + t10.clientHeight, n10.right = n10.left + t10.clientWidth, n10.width = t10.clientWidth, n10.height = t10.clientHeight, n10.x = n10.left, n10.y = n10.top, n10) : n1((a2 = nj(e10), o2 = nj(a2), s2 = nJ(a2), l2 = null == (i2 = a2.ownerDocument) ? void 0 : i2.body, c2 = nR(o2.scrollWidth, o2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nR(o2.scrollHeight, o2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nZ(a2), f2 = -s2.scrollTop, "rtl" === nV(l2 || o2).direction && (d2 += nR(o2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function n4(e10) {
  var t10, r10 = e10.reference, n10 = e10.element, a2 = e10.placement, i2 = a2 ? nT(a2) : null, o2 = a2 ? nW(a2) : null, s2 = r10.x + r10.width / 2 - n10.width / 2, l2 = r10.y + r10.height / 2 - n10.height / 2;
  switch (i2) {
    case "top":
      t10 = { x: s2, y: r10.y - n10.height };
      break;
    case nm:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case ng:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nv:
      t10 = { x: r10.x - n10.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = i2 ? ["top", "bottom"].indexOf(i2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (o2) {
      case nx:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n10[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n10[u2] / 2);
    }
  }
  return t10;
}
function n5(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n10, a2, i2, o2, s2, l2, c2, u2 = t10, d2 = u2.placement, f2 = void 0 === d2 ? e10.placement : d2, h2 = u2.strategy, p2 = void 0 === h2 ? e10.strategy : h2, m2 = u2.boundary, g2 = u2.rootBoundary, v2 = u2.elementContext, b2 = void 0 === v2 ? nk : v2, y2 = u2.altBoundary, x2 = u2.padding, w2 = void 0 === x2 ? 0 : x2, k2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof w2 ? w2 : ny.reduce(function(e11, t11) {
    return e11[t11] = w2, e11;
  }, {})), M2 = e10.rects.popper, C2 = e10.elements[void 0 !== y2 && y2 ? b2 === nk ? "reference" : nk : b2], P2 = (r10 = nO(C2) ? C2 : C2.contextElement || nj(e10.elements.popper), n10 = void 0 === m2 ? "clippingParents" : m2, a2 = void 0 === g2 ? nw : g2, l2 = (s2 = [].concat("clippingParents" === n10 ? (i2 = n0(nE(r10)), nO(o2 = ["absolute", "fixed"].indexOf(nV(r10).position) >= 0 && n$(r10) ? nz(r10) : r10) ? i2.filter(function(e11) {
    return nO(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11)) return true;
      if (r11 && nD(r11)) {
        var n11 = t11;
        do {
          if (n11 && e12.isSameNode(n11)) return true;
          n11 = n11.parentNode || n11.host;
        } while (n11);
      }
      return false;
    }(e11, o2) && "body" !== n_(e11);
  }) : []) : [].concat(n10), [a2]))[0], (c2 = s2.reduce(function(e11, t11) {
    var n11 = n2(r10, t11, p2);
    return e11.top = nR(n11.top, e11.top), e11.right = nA(n11.right, e11.right), e11.bottom = nA(n11.bottom, e11.bottom), e11.left = nR(n11.left, e11.left), e11;
  }, n2(r10, l2, p2))).width = c2.right - c2.left, c2.height = c2.bottom - c2.top, c2.x = c2.left, c2.y = c2.top, c2), _2 = nF(e10.elements.reference), S2 = n4({ reference: _2, element: M2, strategy: "absolute", placement: f2 }), O2 = n1(Object.assign({}, M2, S2)), $2 = b2 === nk ? O2 : _2, D2 = { top: P2.top - $2.top + k2.top, bottom: $2.bottom - P2.bottom + k2.bottom, left: P2.left - $2.left + k2.left, right: $2.right - P2.right + k2.right }, T2 = e10.modifiersData.offset;
  if (b2 === nk && T2) {
    var R2 = T2[f2];
    Object.keys(D2).forEach(function(e11) {
      var t11 = [ng, nm].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", nm].indexOf(e11) >= 0 ? "y" : "x";
      D2[e11] += R2[r11] * t11;
    });
  }
  return D2;
}
let n3 = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n10 = e10.name;
  if (!t10.modifiersData[n10]._skip) {
    for (var a2 = r10.mainAxis, i2 = void 0 === a2 || a2, o2 = r10.altAxis, s2 = void 0 === o2 || o2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, v2 = nT(g2) === g2, b2 = l2 || (v2 || !p2 ? [nY(g2)] : function(e11) {
      if (nT(e11) === nb) return [];
      var t11 = nY(e11);
      return [nK(e11), t11, nK(t11)];
    }(g2)), y2 = [g2].concat(b2).reduce(function(e11, r11) {
      var n11, a3, i3, o3, s3, l3, f3, h3, g3, v3, b3, y3;
      return e11.concat(nT(r11) === nb ? (a3 = (n11 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, i3 = n11.boundary, o3 = n11.rootBoundary, s3 = n11.padding, l3 = n11.flipVariations, h3 = void 0 === (f3 = n11.allowedAutoPlacements) ? nC : f3, 0 === (b3 = (v3 = (g3 = nW(a3)) ? l3 ? nM : nM.filter(function(e12) {
        return nW(e12) === g3;
      }) : ny).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (b3 = v3), Object.keys(y3 = b3.reduce(function(e12, r12) {
        return e12[r12] = n5(t10, { placement: r12, boundary: i3, rootBoundary: o3, padding: s3 })[nT(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return y3[e12] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nT(_2), O2 = nW(_2) === nx, $2 = ["top", nm].indexOf(S2) >= 0, D2 = $2 ? "width" : "height", T2 = n5(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), R2 = $2 ? O2 ? ng : nv : O2 ? nm : "top";
      x2[D2] > w2[D2] && (R2 = nY(R2));
      var A2 = nY(R2), I2 = [];
      if (i2 && I2.push(T2[S2] <= 0), s2 && I2.push(T2[R2] <= 0, T2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2) for (var L2 = p2 ? 3 : 1, B2 = function(e11) {
      var t11 = y2.find(function(t12) {
        var r11 = k2.get(t12);
        if (r11) return r11.slice(0, e11).every(function(e12) {
          return e12;
        });
      });
      if (t11) return C2 = t11, "break";
    }, F2 = L2; F2 > 0 && "break" !== B2(F2); F2--) ;
    t10.placement !== C2 && (t10.modifiersData[n10]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var n8 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n6() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var n9 = (K = void 0 === (X = (Y = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n10 = e10.options, a2 = n10.scroll, i2 = void 0 === a2 || a2, o2 = n10.resize, s2 = void 0 === o2 || o2, l2 = nS(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return i2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nq);
  }), s2 && l2.addEventListener("resize", r10.update, nq), function() {
    i2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nq);
    }), s2 && l2.removeEventListener("resize", r10.update, nq);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = n4({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n10 = r10.gpuAcceleration, a2 = r10.adaptive, i2 = r10.roundOffsets, o2 = void 0 === i2 || i2, s2 = { placement: nT(t10.placement), variation: nW(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n10 || n10, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nU(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: o2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nU(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: o2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n10 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    n$(a2) && n_(a2) && (Object.assign(a2.style, r10), Object.keys(n10).forEach(function(e12) {
      var t11 = n10[e12];
      false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n10 = t10.elements[e11], a2 = t10.attributes[e11] || {}, i2 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      n$(n10) && n_(n10) && (Object.assign(n10.style, i2), Object.keys(a2).forEach(function(e12) {
        n10.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : X, Z = void 0 === (J = Y.defaultOptions) ? n8 : J, function(e10, t10, r10) {
  void 0 === r10 && (r10 = Z);
  var n10, a2, i2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, n8, Z), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, o2 = [], s2 = false, l2 = { state: i2, setOptions: function(r11) {
    var n11, a3, s3, u2, d2, f2 = "function" == typeof r11 ? r11(i2.options) : r11;
    c2(), i2.options = Object.assign({}, Z, i2.options, f2), i2.scrollParents = { reference: nO(e10) ? n0(e10) : e10.contextElement ? n0(e10.contextElement) : [], popper: n0(t10) };
    var h2 = (a3 = Object.keys(n11 = [].concat(K, i2.options.modifiers).reduce(function(e11, t11) {
      var r12 = e11[t11.name];
      return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return n11[e11];
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
    }), nP.reduce(function(e11, t11) {
      return e11.concat(d2.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return i2.orderedModifiers = h2.filter(function(e11) {
      return e11.enabled;
    }), i2.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r12 = e11.options, n12 = e11.effect;
      if ("function" == typeof n12) {
        var a4 = n12({ state: i2, name: t11, instance: l2, options: void 0 === r12 ? {} : r12 });
        o2.push(a4 || function() {
        });
      }
    }), l2.update();
  }, forceUpdate: function() {
    if (!s2) {
      var e11, t11, r11, n11, a3, o3, c3, u2, d2, f2, h2, p2, m2, g2, v2, b2 = i2.elements, y2 = b2.reference, x2 = b2.popper;
      if (n6(y2, x2)) {
        i2.rects = { reference: (t11 = nz(x2), r11 = "fixed" === i2.options.strategy, n11 = n$(t11), u2 = n$(t11) && (o3 = nI((a3 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c3 = nI(a3.height) / t11.offsetHeight || 1, 1 !== o3 || 1 !== c3), d2 = nj(t11), f2 = nF(y2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n11 || !n11 && !r11) && (("body" !== n_(t11) || nQ(d2)) && (h2 = (e11 = t11) !== nS(e11) && n$(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : nJ(e11)), n$(t11) ? (p2 = nF(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = nZ(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nF(x2), g2 = x2.offsetWidth, v2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - v2) && (v2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: v2 }) }, i2.reset = false, i2.placement = i2.options.placement, i2.orderedModifiers.forEach(function(e12) {
          return i2.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var w2 = 0; w2 < i2.orderedModifiers.length; w2++) {
          if (true === i2.reset) {
            i2.reset = false, w2 = -1;
            continue;
          }
          var k2 = i2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
          "function" == typeof M2 && (i2 = M2({ state: i2, options: P2, name: _2, instance: l2 }) || i2);
        }
      }
    }
  }, update: (n10 = function() {
    return new Promise(function(e11) {
      l2.forceUpdate(), e11(i2);
    });
  }, function() {
    return a2 || (a2 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        a2 = void 0, e11(n10());
      });
    })), a2;
  }), destroy: function() {
    c2(), s2 = true;
  } };
  if (!n6(e10, t10)) return l2;
  function c2() {
    o2.forEach(function(e11) {
      return e11();
    }), o2 = [];
  }
  return l2.setOptions(r10).then(function(e11) {
    !s2 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), l2;
});
let n7 = x({ isOpen: np.propTypes.isOpen, onClickOutside: np.propTypes.onClickOutside, placement: z().optional(), modifiers: z().optional(), $transition: np.propTypes.$transition, $content: z(), $default: z() }, (e10, t10) => {
  let { slots: r10, emit: n10, attrs: a2 } = t10, i2 = $(null), o2 = $(null);
  return j(() => o2.value, (t11) => {
    if (t11 && i2.value) {
      var r11, n11;
      n9(i2.value, t11, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n11 = e10.modifiers) && void 0 !== n11 ? n11 : [], n3] });
    }
  }), () => {
    var t11, s2;
    let l2 = null === (t11 = r10.default) || void 0 === t11 ? void 0 : t11.call(r10)[0];
    return l2 ? E(H, { children: [T(l2, { ...a2, onVnodeMounted: (e11) => {
      i2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), w(np, { triggerRef: i2, contentRef: o2, isOpen: e10.isOpen, onClickOutside: (e11) => n10("click-outside", e11), style: { zIndex: 100 }, $transition: r10.transition, children: null === (s2 = r10.content) || void 0 === s2 ? void 0 : s2.call(r10) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }, { displayName: "Popper" });
export {
  ns as B,
  nu as C,
  nc as G,
  np as O,
  n7 as P,
  rC as T,
  tF as a,
  tx as b,
  rf as c,
  tU as d,
  rh as e,
  rd as f,
  tu as g,
  n9 as h,
  n3 as i,
  nr as j,
  na as k,
  t8 as r,
  nl as s,
  tN as t,
  tj as v
};
