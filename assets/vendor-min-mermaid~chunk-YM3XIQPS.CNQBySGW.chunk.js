import { f } from './vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js';
import { e as Lt, t as tt, u as ug, h as fg, G as Gc, Y as Yc, j as cg, k as hg, x as Rc, f as go, s as sg, y as lg, z as ag, o as ig, A as ng, D as og, I as rg, l as eg, n as tg, J as Ac, K as Mc, d as Bc, Q as ja, U as Fi, V as dx, g as gC, i as ih } from './vendor-min-mermaid~chunk-ZKYS2E5M.Dvid1YGB.chunk.js';
import { k as ki, t as qs } from './vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js';
import { m as m$1, q } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var ne = /*#__PURE__*/ q(/*#__PURE__*/ f());
var ce = "\u200B", ue = {
    curveBasis: Bc,
    curveBasisClosed: Mc,
    curveBasisOpen: Ac,
    curveBumpX: tg,
    curveBumpY: eg,
    curveBundle: rg,
    curveCardinalClosed: og,
    curveCardinalOpen: ng,
    curveCardinal: ig,
    curveCatmullRomClosed: ag,
    curveCatmullRomOpen: lg,
    curveCatmullRom: sg,
    curveLinear: go,
    curveLinearClosed: Rc,
    curveMonotoneX: hg,
    curveMonotoneY: cg,
    curveNatural: Yc,
    curveStep: Gc,
    curveStepAfter: fg,
    curveStepBefore: ug
}, le = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, fe = /*#__PURE__*/ m$1(function(t, e) {
    let r = /*#__PURE__*/ re(t, /(?:init\b)|(?:initialize\b)/), n = {};
    if (Array.isArray(r)) {
        let s = /*#__PURE__*/ r.map((u)=>u.args);
        Fi(s), n = /*#__PURE__*/ Lt(n, [
            ...s
        ]);
    } else n = r.args;
    if (!n) return;
    let i = /*#__PURE__*/ dx(t, e), o = "config";
    return n[o] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), n[i] = n[o], delete n[o]), n;
}, "detectInit"), re = /*#__PURE__*/ m$1(function(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    try {
        let r = new RegExp(`[%]{2}(?![{]${le.source})(?=[}][%]{2}).*
`, "ig");
        t = /*#__PURE__*/ t.trim().replace(r, "").replace(/'/gm, '"'), tt.debug(`Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`);
        let n, i = [];
        for(; (n = /*#__PURE__*/ ja.exec(t)) !== null;)if (n.index === ja.lastIndex && ja.lastIndex++, n && !e || e && n[1]?.match(e) || e && n[2]?.match(e)) {
            let o = n[1] ? n[1] : n[2], s = n[3] ? n[3].trim() : n[4] ? JSON.parse(/*#__PURE__*/ n[4].trim()) : null;
            i.push({
                type: o,
                args: s
            });
        }
        return i.length === 0 ? {
            type: t,
            args: null
        } : i.length === 1 ? i[0] : i;
    } catch (r) {
        return tt.error(`ERROR: ${r.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`), {
            type: void 0,
            args: null
        };
    }
}, "detectDirective"), He = /*#__PURE__*/ m$1(function(t) {
    return t.replace(ja, "");
}, "removeDirectives"), ge = /*#__PURE__*/ m$1(function(t, e) {
    for (let [r, n] of e.entries())if (n.match(t)) return r;
    return -1;
}, "isSubstringInArray");
function de(t, e) {
    if (!t) return e;
    let r = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
    return ue[r] ?? e;
}
m$1(de, "interpolateToCurve");
function he(t, e) {
    let r = /*#__PURE__*/ t.trim();
    if (r) return e.securityLevel !== "loose" ? (0, ne.sanitizeUrl)(r) : r;
}
m$1(he, "formatUrl");
var me = /*#__PURE__*/ m$1(function(t) {
    for(var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        e[_key - 1] = arguments[_key];
    }
    let r = /*#__PURE__*/ t.split("."), n = r.length - 1, i = r[n], o = window;
    for(let s = 0; s < n; s++)if (o = o[r[s]], !o) {
        tt.error(`Function name: ${t} not found in window`);
        return;
    }
    o[i](...e);
}, "runFunc");
function ie(t, e) {
    return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
m$1(ie, "distance");
function pe(t) {
    let e, r = 0;
    t.forEach((i)=>{
        r += /*#__PURE__*/ ie(i, e), e = i;
    });
    let n = r / 2;
    return T(t, n);
}
m$1(pe, "traverseEdge");
function xe(t) {
    return t.length === 1 ? t[0] : pe(t);
}
m$1(xe, "calcLabelPosition");
var ee = /*#__PURE__*/ m$1(function(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    let r = /*#__PURE__*/ Math.pow(10, e);
    return Math.round(t * r) / r;
}, "roundNumber"), T = /*#__PURE__*/ m$1((t, e)=>{
    let r, n = e;
    for (let i of t){
        if (r) {
            let o = /*#__PURE__*/ ie(i, r);
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
                    x: /*#__PURE__*/ ee((1 - s) * r.x + s * i.x, 5),
                    y: /*#__PURE__*/ ee((1 - s) * r.y + s * i.y, 5)
                };
            }
        }
        r = i;
    }
    throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), ye = /*#__PURE__*/ m$1((t, e, r)=>{
    tt.info(`our points ${JSON.stringify(e)}`), e[0] !== r && (e = /*#__PURE__*/ e.reverse());
    let i = /*#__PURE__*/ T(e, 25), o = t ? 10 : 5, s = /*#__PURE__*/ Math.atan2(e[0].y - i.y, e[0].x - i.x), u = {
        x: 0,
        y: 0
    };
    return u.x = Math.sin(s) * o + (e[0].x + i.x) / 2, u.y = -Math.cos(s) * o + (e[0].y + i.y) / 2, u;
}, "calcCardinalityPosition");
function ve(t, e, r) {
    let n = /*#__PURE__*/ structuredClone(r);
    tt.info("our points", n), e !== "start_left" && e !== "start_right" && n.reverse();
    let i = 25 + t, o = /*#__PURE__*/ T(n, i), s = 10 + t * .5, u = /*#__PURE__*/ Math.atan2(n[0].y - o.y, n[0].x - o.x), c = {
        x: 0,
        y: 0
    };
    return e === "start_left" ? (c.x = Math.sin(u + Math.PI) * s + (n[0].x + o.x) / 2, c.y = -Math.cos(u + Math.PI) * s + (n[0].y + o.y) / 2) : e === "end_right" ? (c.x = Math.sin(u - Math.PI) * s + (n[0].x + o.x) / 2 - 5, c.y = -Math.cos(u - Math.PI) * s + (n[0].y + o.y) / 2 - 5) : e === "end_left" ? (c.x = Math.sin(u) * s + (n[0].x + o.x) / 2 - 5, c.y = -Math.cos(u) * s + (n[0].y + o.y) / 2 - 5) : (c.x = Math.sin(u) * s + (n[0].x + o.x) / 2, c.y = -Math.cos(u) * s + (n[0].y + o.y) / 2), c;
}
m$1(ve, "calcTerminalLabelPosition");
function be(t) {
    let e = "", r = "";
    for (let n of t)n !== void 0 && (n.startsWith("color:") || n.startsWith("text-align:") ? r = r + n + ";" : e = e + n + ";");
    return {
        style: e,
        labelStyle: r
    };
}
m$1(be, "getStylesFromArray");
var te = 0, Ce = /*#__PURE__*/ m$1(()=>(te++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + te), "generateId");
function Me(t) {
    let e = "", r = "0123456789abcdef", n = r.length;
    for(let i = 0; i < t; i++)e += /*#__PURE__*/ r.charAt(/*#__PURE__*/ Math.floor(Math.random() * n));
    return e;
}
m$1(Me, "makeRandomHex");
var we = /*#__PURE__*/ m$1((t)=>Me(t.length), "random"), Pe = /*#__PURE__*/ m$1(function() {
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
}, "getTextObj"), Te = /*#__PURE__*/ m$1(function(t, e) {
    let r = /*#__PURE__*/ e.text.replace(gC.lineBreakRegex, " "), [, n] = S(e.fontSize), i = /*#__PURE__*/ t.append("text");
    i.attr("x", e.x), i.attr("y", e.y), i.style("text-anchor", e.anchor), i.style("font-family", e.fontFamily), i.style("font-size", n), i.style("font-weight", e.fontWeight), i.attr("fill", e.fill), e.class !== void 0 && i.attr("class", e.class);
    let o = /*#__PURE__*/ i.append("tspan");
    return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(r), i;
}, "drawSimpleText"), $e = /*#__PURE__*/ ki((t, e, r)=>{
    if (!t || (r = /*#__PURE__*/ Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        joinWith: "<br/>"
    }, r), gC.lineBreakRegex.test(t))) return t;
    let n = /*#__PURE__*/ t.split(" ").filter(Boolean), i = [], o = "";
    return n.forEach((s, u)=>{
        let c = /*#__PURE__*/ M(`${s} `, r), l = /*#__PURE__*/ M(o, r);
        if (c > e) {
            let { hyphenatedStrings: h, remainingWord: f } = Se(s, e, "-", r);
            i.push(o, ...h), o = f;
        } else l + c >= e ? (i.push(o), o = s) : o = /*#__PURE__*/ [
            o,
            s
        ].filter(Boolean).join(" ");
        u + 1 === n.length && i.push(o);
    }), i.filter((s)=>s !== "").join(r.joinWith);
}, (t, e, r)=>`${t}${e}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`), Se = /*#__PURE__*/ ki(function(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "-", n = arguments.length > 3 ? arguments[3] : void 0;
    n = /*#__PURE__*/ Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 0
    }, n);
    let i = [
        ...t
    ], o = [], s = "";
    return i.forEach((u, c)=>{
        let l = `${s}${u}`;
        if (M(l, n) >= e) {
            let x = c + 1, h = i.length === x, f = `${l}${r}`;
            o.push(h ? l : f), s = "";
        } else s = l;
    }), {
        hyphenatedStrings: o,
        remainingWord: s
    };
}, function(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "-", n = arguments.length > 3 ? arguments[3] : void 0;
    return `${t}${e}${r}${n.fontSize}${n.fontWeight}${n.fontFamily}`;
});
function We(t, e) {
    return $(t, e).height;
}
m$1(We, "calculateTextHeight");
function M(t, e) {
    return $(t, e).width;
}
m$1(M, "calculateTextWidth");
var $ = /*#__PURE__*/ ki((t, e)=>{
    let { fontSize: r = 12, fontFamily: n = "Arial", fontWeight: i = 400 } = e;
    if (!t) return {
        width: 0,
        height: 0
    };
    let [, o] = S(r), s = [
        "sans-serif",
        n
    ], u = /*#__PURE__*/ t.split(gC.lineBreakRegex), c = [], l = /*#__PURE__*/ ih("body");
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
        for (let oe of u){
            let W = /*#__PURE__*/ Pe();
            W.text = oe || ce;
            let E = /*#__PURE__*/ Te(p, W).style("font-size", o).style("font-weight", i).style("font-family", h), y = /*#__PURE__*/ (E._groups || E)[0][0].getBBox();
            if (y.width === 0 && y.height === 0) throw new Error("svg element not in render tree");
            g.width = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(g.width, y.width)), f = /*#__PURE__*/ Math.round(y.height), g.height += f, g.lineHeight = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(g.lineHeight, f));
        }
        c.push(g);
    }
    p.remove();
    let x = isNaN(c[1].height) || isNaN(c[1].width) || isNaN(c[1].lineHeight) || c[0].height > c[1].height && c[0].width > c[1].width && c[0].lineHeight > c[1].lineHeight ? 0 : 1;
    return c[x];
}, (t, e)=>`${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`), P = class {
    constructor(e = false, r){
        this.count = 0;
        this.count = r ? r.length : 0, this.next = e ? ()=>this.count++ : ()=>Date.now();
    }
    static #_ = m$1(this, "InitIDGenerator");
}, C, Ee = /*#__PURE__*/ m$1(function(t) {
    return C = C || document.createElement("div"), t = /*#__PURE__*/ escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), C.innerHTML = t, unescape(C.textContent);
}, "entityDecode");
function ze(t) {
    return "str" in t;
}
m$1(ze, "isDetailedError");
var Be = /*#__PURE__*/ m$1((t, e, r, n)=>{
    if (!n) return;
    let i = t.node()?.getBBox();
    i && t.append("text").text(n).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -r).attr("class", e);
}, "insertTitle"), S = /*#__PURE__*/ m$1((t)=>{
    if (typeof t == "number") return [
        t,
        t + "px"
    ];
    let e = /*#__PURE__*/ parseInt(t ?? "", 10);
    return Number.isNaN(e) ? [
        void 0,
        void 0
    ] : t === String(e) ? [
        e,
        t + "px"
    ] : [
        e,
        t
    ];
}, "parseFontSize");
function Le(t, e) {
    return qs({}, t, e);
}
m$1(Le, "cleanAndMerge");
var Ie = {
    assignWithDepth: Lt,
    wrapLabel: $e,
    calculateTextHeight: We,
    calculateTextWidth: M,
    calculateTextDimensions: $,
    cleanAndMerge: Le,
    detectInit: fe,
    detectDirective: re,
    isSubstringInArray: ge,
    interpolateToCurve: de,
    calcLabelPosition: xe,
    calcCardinalityPosition: ye,
    calcTerminalLabelPosition: ve,
    formatUrl: he,
    getStylesFromArray: be,
    generateId: Ce,
    random: we,
    runFunc: me,
    entityDecode: Ee,
    insertTitle: Be,
    parseFontSize: S,
    InitIDGenerator: P
}, Ue = /*#__PURE__*/ m$1(function(t) {
    let e = t;
    return e = /*#__PURE__*/ e.replace(/style.*:\S*#.*;/g, function(r) {
        return r.substring(0, r.length - 1);
    }), e = /*#__PURE__*/ e.replace(/classDef.*:\S*#.*;/g, function(r) {
        return r.substring(0, r.length - 1);
    }), e = /*#__PURE__*/ e.replace(/#\w+;/g, function(r) {
        let n = /*#__PURE__*/ r.substring(1, r.length - 1);
        return /^\+?\d+$/.test(n) ? "\uFB02\xB0\xB0" + n + "\xB6\xDF" : "\uFB02\xB0" + n + "\xB6\xDF";
    }), e;
}, "encodeEntities"), Xe = /*#__PURE__*/ m$1(function(t) {
    return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var Ye = /*#__PURE__*/ m$1((t, e, param, o)=>{
    let { counter: r = 0, prefix: n, suffix: i } = param;
    return o || `${n ? `${n}_` : ""}${t}_${e}_${r}${i ? `_${i}` : ""}`;
}, "getEdgeId");
function Je(t) {
    return t ?? null;
}
m$1(Je, "handleUndefinedAttr");
export { $e as $, Ce as C, He as H, Ie as I, Je as J, Le as L, M, S, Ue as U, We as W, Xe as X, Ye as Y, be as b, ce as c, de as d, we as w, ze as z };
