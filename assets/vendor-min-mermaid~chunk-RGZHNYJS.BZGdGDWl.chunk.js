import { f } from './vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js';
import { v, d as bi, e as Zt, f as rs, n as nn } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt$1, K as Kc, J as Jc, Q as Qs, Z as Zs, a as Qc, b as Zc, z as zs, V as Vn, c as Vc, G as Gc, X as Xc, B as Bc, d as Wc, q as qc, H as Hc, e as zc, L as Lc, R as Rs, E as Es, $ as $s, i as ia } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { k as ki, t as qs } from './vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js';
import { m as m$1, q } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var nt = /*#__PURE__*/ q(/*#__PURE__*/ f());
var ct = "\u200B", ut = {
    curveBasis: $s,
    curveBasisClosed: Es,
    curveBasisOpen: Rs,
    curveBumpX: Lc,
    curveBumpY: zc,
    curveBundle: Hc,
    curveCardinalClosed: qc,
    curveCardinalOpen: Wc,
    curveCardinal: Bc,
    curveCatmullRomClosed: Xc,
    curveCatmullRomOpen: Gc,
    curveCatmullRom: Vc,
    curveLinear: Vn,
    curveLinearClosed: zs,
    curveMonotoneX: Zc,
    curveMonotoneY: Qc,
    curveNatural: Zs,
    curveStep: Qs,
    curveStepAfter: Jc,
    curveStepBefore: Kc
}, lt = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ft = /*#__PURE__*/ m$1(function(e, t) {
    let r = /*#__PURE__*/ rt(e, /(?:init\b)|(?:initialize\b)/), n = {};
    if (Array.isArray(r)) {
        let s = /*#__PURE__*/ r.map((u)=>u.args);
        Zt(s), n = /*#__PURE__*/ v(n, [
            ...s
        ]);
    } else n = r.args;
    if (!n) return;
    let i = /*#__PURE__*/ rs(e, t), o = "config";
    return n[o] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), n[i] = n[o], delete n[o]), n;
}, "detectInit"), rt = /*#__PURE__*/ m$1(function(e, t = null) {
    try {
        let r = new RegExp(`[%]{2}(?![{]${lt.source})(?=[}][%]{2}).*
`, "ig");
        e = /*#__PURE__*/ e.trim().replace(r, "").replace(/'/gm, '"'), pt$1.debug(`Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`);
        let n, i = [];
        for(; (n = /*#__PURE__*/ bi.exec(e)) !== null;)if (n.index === bi.lastIndex && bi.lastIndex++, n && !t || t && n[1]?.match(t) || t && n[2]?.match(t)) {
            let o = n[1] ? n[1] : n[2], s = n[3] ? n[3].trim() : n[4] ? JSON.parse(/*#__PURE__*/ n[4].trim()) : null;
            i.push({
                type: o,
                args: s
            });
        }
        return i.length === 0 ? {
            type: e,
            args: null
        } : i.length === 1 ? i[0] : i;
    } catch (r) {
        return pt$1.error(`ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
            type: void 0,
            args: null
        };
    }
}, "detectDirective"), zt = /*#__PURE__*/ m$1(function(e) {
    return e.replace(bi, "");
}, "removeDirectives"), gt = /*#__PURE__*/ m$1(function(e, t) {
    for (let [r, n] of t.entries())if (n.match(e)) return r;
    return -1;
}, "isSubstringInArray");
function dt(e, t) {
    if (!e) return t;
    let r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
    return ut[r] ?? t;
}
m$1(dt, "interpolateToCurve");
function ht(e, t) {
    let r = /*#__PURE__*/ e.trim();
    if (r) return t.securityLevel !== "loose" ? (0, nt.sanitizeUrl)(r) : r;
}
m$1(ht, "formatUrl");
var mt = /*#__PURE__*/ m$1((e, ...t)=>{
    let r = /*#__PURE__*/ e.split("."), n = r.length - 1, i = r[n], o = window;
    for(let s = 0; s < n; s++)if (o = o[r[s]], !o) {
        pt$1.error(`Function name: ${e} not found in window`);
        return;
    }
    o[i](...t);
}, "runFunc");
function it(e, t) {
    return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
m$1(it, "distance");
function pt(e) {
    let t, r = 0;
    e.forEach((i)=>{
        r += /*#__PURE__*/ it(i, t), t = i;
    });
    let n = r / 2;
    return T(e, n);
}
m$1(pt, "traverseEdge");
function xt(e) {
    return e.length === 1 ? e[0] : pt(e);
}
m$1(xt, "calcLabelPosition");
var tt = /*#__PURE__*/ m$1((e, t = 2)=>{
    let r = /*#__PURE__*/ Math.pow(10, t);
    return Math.round(e * r) / r;
}, "roundNumber"), T = /*#__PURE__*/ m$1((e, t)=>{
    let r, n = t;
    for (let i of e){
        if (r) {
            let o = /*#__PURE__*/ it(i, r);
            if (o === 0) return r;
            if (o < n) n -= o;
            else {
                let s = n / o;
                if (s <= 0) return r;
                if (s >= 1) return {
                    x: i.x,
                    y: i.y
                };
                if (s > 0 && s < 1) return {
                    x: /*#__PURE__*/ tt((1 - s) * r.x + s * i.x, 5),
                    y: /*#__PURE__*/ tt((1 - s) * r.y + s * i.y, 5)
                };
            }
        }
        r = i;
    }
    throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), yt = /*#__PURE__*/ m$1((e, t, r)=>{
    pt$1.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = /*#__PURE__*/ t.reverse());
    let i = /*#__PURE__*/ T(t, 25), o = e ? 10 : 5, s = /*#__PURE__*/ Math.atan2(t[0].y - i.y, t[0].x - i.x), u = {
        x: 0,
        y: 0
    };
    return u.x = Math.sin(s) * o + (t[0].x + i.x) / 2, u.y = -Math.cos(s) * o + (t[0].y + i.y) / 2, u;
}, "calcCardinalityPosition");
function vt(e, t, r) {
    let n = /*#__PURE__*/ structuredClone(r);
    pt$1.info("our points", n), t !== "start_left" && t !== "start_right" && n.reverse();
    let i = 25 + e, o = /*#__PURE__*/ T(n, i), s = 10 + e * .5, u = /*#__PURE__*/ Math.atan2(n[0].y - o.y, n[0].x - o.x), c = {
        x: 0,
        y: 0
    };
    return t === "start_left" ? (c.x = Math.sin(u + Math.PI) * s + (n[0].x + o.x) / 2, c.y = -Math.cos(u + Math.PI) * s + (n[0].y + o.y) / 2) : t === "end_right" ? (c.x = Math.sin(u - Math.PI) * s + (n[0].x + o.x) / 2 - 5, c.y = -Math.cos(u - Math.PI) * s + (n[0].y + o.y) / 2 - 5) : t === "end_left" ? (c.x = Math.sin(u) * s + (n[0].x + o.x) / 2 - 5, c.y = -Math.cos(u) * s + (n[0].y + o.y) / 2 - 5) : (c.x = Math.sin(u) * s + (n[0].x + o.x) / 2, c.y = -Math.cos(u) * s + (n[0].y + o.y) / 2), c;
}
m$1(vt, "calcTerminalLabelPosition");
function bt(e) {
    let t = "", r = "";
    for (let n of e)n !== void 0 && (n.startsWith("color:") || n.startsWith("text-align:") ? r = r + n + ";" : t = t + n + ";");
    return {
        style: t,
        labelStyle: r
    };
}
m$1(bt, "getStylesFromArray");
var et = 0, Ct = /*#__PURE__*/ m$1(()=>(et++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + et), "generateId");
function Mt(e) {
    let t = "", r = "0123456789abcdef", n = r.length;
    for(let i = 0; i < e; i++)t += /*#__PURE__*/ r.charAt(/*#__PURE__*/ Math.floor(Math.random() * n));
    return t;
}
m$1(Mt, "makeRandomHex");
var wt = /*#__PURE__*/ m$1((e)=>Mt(e.length), "random"), Pt = /*#__PURE__*/ m$1(function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        anchor: "start",
        style: "#666",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0,
        valign: void 0,
        text: ""
    };
}, "getTextObj"), Tt = /*#__PURE__*/ m$1(function(e, t) {
    let r = /*#__PURE__*/ t.text.replace(nn.lineBreakRegex, " "), [, n] = $(t.fontSize), i = /*#__PURE__*/ e.append("text");
    i.attr("x", t.x), i.attr("y", t.y), i.style("text-anchor", t.anchor), i.style("font-family", t.fontFamily), i.style("font-size", n), i.style("font-weight", t.fontWeight), i.attr("fill", t.fill), t.class !== void 0 && i.attr("class", t.class);
    let o = /*#__PURE__*/ i.append("tspan");
    return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), i;
}, "drawSimpleText"), St = /*#__PURE__*/ ki((e, t, r)=>{
    if (!e || (r = /*#__PURE__*/ Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        joinWith: "<br/>"
    }, r), nn.lineBreakRegex.test(e))) return e;
    let n = /*#__PURE__*/ e.split(" ").filter(Boolean), i = [], o = "";
    return n.forEach((s, u)=>{
        let c = /*#__PURE__*/ M(`${s} `, r), l = /*#__PURE__*/ M(o, r);
        if (c > t) {
            let { hyphenatedStrings: h, remainingWord: f } = $t(s, t, "-", r);
            i.push(o, ...h), o = f;
        } else l + c >= t ? (i.push(o), o = s) : o = /*#__PURE__*/ [
            o,
            s
        ].filter(Boolean).join(" ");
        u + 1 === n.length && i.push(o);
    }), i.filter((s)=>s !== "").join(r.joinWith);
}, (e, t, r)=>`${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`), $t = /*#__PURE__*/ ki((e, t, r = "-", n)=>{
    n = /*#__PURE__*/ Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 0
    }, n);
    let i = [
        ...e
    ], o = [], s = "";
    return i.forEach((u, c)=>{
        let l = `${s}${u}`;
        if (M(l, n) >= t) {
            let x = c + 1, h = i.length === x, f = `${l}${r}`;
            o.push(h ? l : f), s = "";
        } else s = l;
    }), {
        hyphenatedStrings: o,
        remainingWord: s
    };
}, (e, t, r = "-", n)=>`${e}${t}${r}${n.fontSize}${n.fontWeight}${n.fontFamily}`);
function Wt(e, t) {
    return S(e, t).height;
}
m$1(Wt, "calculateTextHeight");
function M(e, t) {
    return S(e, t).width;
}
m$1(M, "calculateTextWidth");
var S = /*#__PURE__*/ ki((e, t)=>{
    let { fontSize: r = 12, fontFamily: n = "Arial", fontWeight: i = 400 } = t;
    if (!e) return {
        width: 0,
        height: 0
    };
    let [, o] = $(r), s = [
        "sans-serif",
        n
    ], u = /*#__PURE__*/ e.split(nn.lineBreakRegex), c = [], l = /*#__PURE__*/ ia("body");
    if (!l.remove) return {
        width: 0,
        height: 0,
        lineHeight: 0
    };
    let p = /*#__PURE__*/ l.append("svg");
    for (let h of s){
        let f = 0, g = {
            width: 0,
            height: 0,
            lineHeight: 0
        };
        for (let ot of u){
            let W = /*#__PURE__*/ Pt();
            W.text = ot || ct;
            let E = /*#__PURE__*/ Tt(p, W).style("font-size", o).style("font-weight", i).style("font-family", h), y = /*#__PURE__*/ (E._groups || E)[0][0].getBBox();
            if (y.width === 0 && y.height === 0) throw new Error("svg element not in render tree");
            g.width = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(g.width, y.width)), f = /*#__PURE__*/ Math.round(y.height), g.height += f, g.lineHeight = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(g.lineHeight, f));
        }
        c.push(g);
    }
    p.remove();
    let x = isNaN(c[1].height) || isNaN(c[1].width) || isNaN(c[1].lineHeight) || c[0].height > c[1].height && c[0].width > c[1].width && c[0].lineHeight > c[1].lineHeight ? 0 : 1;
    return c[x];
}, (e, t)=>`${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), P = class {
    constructor(t = false, r){
        this.count = 0;
        this.count = r ? r.length : 0, this.next = t ? ()=>this.count++ : ()=>Date.now();
    }
    static{
        m$1(this, "InitIDGenerator");
    }
}, C, Et = /*#__PURE__*/ m$1(function(e) {
    return C = C || document.createElement("div"), e = /*#__PURE__*/ escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), C.innerHTML = e, unescape(C.textContent);
}, "entityDecode");
function It(e) {
    return "str" in e;
}
m$1(It, "isDetailedError");
var Bt = /*#__PURE__*/ m$1((e, t, r, n)=>{
    if (!n) return;
    let i = e.node()?.getBBox();
    i && e.append("text").text(n).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), $ = /*#__PURE__*/ m$1((e)=>{
    if (typeof e == "number") return [
        e,
        e + "px"
    ];
    let t = /*#__PURE__*/ parseInt(e ?? "", 10);
    return Number.isNaN(t) ? [
        void 0,
        void 0
    ] : e === String(t) ? [
        t,
        e + "px"
    ] : [
        t,
        e
    ];
}, "parseFontSize");
function Lt(e, t) {
    return qs({}, e, t);
}
m$1(Lt, "cleanAndMerge");
var Ut = {
    assignWithDepth: v,
    wrapLabel: St,
    calculateTextHeight: Wt,
    calculateTextWidth: M,
    calculateTextDimensions: S,
    cleanAndMerge: Lt,
    detectInit: ft,
    detectDirective: rt,
    isSubstringInArray: gt,
    interpolateToCurve: dt,
    calcLabelPosition: xt,
    calcCardinalityPosition: yt,
    calcTerminalLabelPosition: vt,
    formatUrl: ht,
    getStylesFromArray: bt,
    generateId: Ct,
    random: wt,
    runFunc: mt,
    entityDecode: Et,
    insertTitle: Bt,
    isLabelCoordinateInPath: Dt,
    parseFontSize: $,
    InitIDGenerator: P
}, Xt = /*#__PURE__*/ m$1(function(e) {
    let t = e;
    return t = /*#__PURE__*/ t.replace(/style.*:\S*#.*;/g, function(r) {
        return r.substring(0, r.length - 1);
    }), t = /*#__PURE__*/ t.replace(/classDef.*:\S*#.*;/g, function(r) {
        return r.substring(0, r.length - 1);
    }), t = /*#__PURE__*/ t.replace(/#\w+;/g, function(r) {
        let n = /*#__PURE__*/ r.substring(1, r.length - 1);
        return /^\+?\d+$/.test(n) ? "\uFB02\xB0\xB0" + n + "\xB6\xDF" : "\uFB02\xB0" + n + "\xB6\xDF";
    }), t;
}, "encodeEntities"), Yt = /*#__PURE__*/ m$1(function(e) {
    return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var Jt = /*#__PURE__*/ m$1((e, t, { counter: r = 0, prefix: n, suffix: i }, o)=>o || `${n ? `${n}_` : ""}${e}_${t}_${r}${i ? `_${i}` : ""}`, "getEdgeId");
function Vt(e) {
    return e ?? null;
}
m$1(Vt, "handleUndefinedAttr");
function Dt(e, t) {
    let r = /*#__PURE__*/ Math.round(e.x), n = /*#__PURE__*/ Math.round(e.y), i = /*#__PURE__*/ t.replace(/(\d+\.\d+)/g, (o)=>Math.round(/*#__PURE__*/ parseFloat(o)).toString());
    return i.includes(/*#__PURE__*/ r.toString()) || i.includes(/*#__PURE__*/ n.toString());
}
m$1(Dt, "isLabelCoordinateInPath");
export { $, Ct as C, It as I, Jt as J, Lt as L, M, St as S, Ut as U, Vt as V, Wt as W, Xt as X, Yt as Y, bt as b, ct as c, dt as d, wt as w, zt as z };
