import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js';
import { m, S, u, p } from './vendor-min-mermaid~chunk-5V7UUW6L.YtR0wuw9.chunk.js';
import { R as Rr$1, v as ve$1 } from './vendor-min-mermaid~chunk-GOL2OBWC.BUAjn2kC.chunk.js';
import { V as Vt$1, Y as Yt$1, $, M } from './vendor-min-mermaid~chunk-EFRVIJHI.wT3iKf0B.chunk.js';
import { M as Mo, m as mr$1, o as ot$1, a as Ni, O as Ot$1, n as nr$1, q as qo, h as hn, X as Xo, l as ln } from './vendor-min-mermaid~chunk-KXVH62NG.CUpUCMGK.chunk.js';
import { p as pt$1, i as ia } from './vendor-min-mermaid~chunk-63GW7ZVL.CUmzAGpZ.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = /*#__PURE__*/ m$1(async (c, t, i)=>{
    let r, e = t.useHtmlLabels || Mo(mr$1()?.htmlLabels);
    i ? r = i : r = "node default";
    let a = /*#__PURE__*/ c.insert("g").attr("class", r).attr("id", t.domId || t.id), h = /*#__PURE__*/ a.insert("g").attr("class", "label").attr("style", /*#__PURE__*/ Vt$1(t.labelStyle)), s;
    t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
    let l = await Rr$1(h, /*#__PURE__*/ ot$1(/*#__PURE__*/ Yt$1(s), /*#__PURE__*/ mr$1()), {
        useHtmlLabels: e,
        width: t.width || mr$1().flowchart?.wrappingWidth,
        cssClasses: "markdown-node-label",
        style: t.labelStyle,
        addSvgBackground: !!t.icon || !!t.img
    }), o = /*#__PURE__*/ l.getBBox(), n = (t?.padding ?? 0) / 2;
    if (e) {
        let p = l.children[0], f = /*#__PURE__*/ ia(l), m = /*#__PURE__*/ p.getElementsByTagName("img");
        if (m) {
            let d = s.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(/*#__PURE__*/ [
                ...m
            ].map((g)=>new Promise((y)=>{
                    function u() {
                        if (g.style.display = "flex", g.style.flexDirection = "column", d) {
                            let b = mr$1().fontSize ? mr$1().fontSize : window.getComputedStyle(document.body).fontSize, S = 5, [k = Ni.fontSize] = $(b), w = k * S + "px";
                            g.style.minWidth = w, g.style.maxWidth = w;
                        } else g.style.width = "100%";
                        y(g);
                    }
                    m$1(u, "setupImage"), setTimeout(()=>{
                        g.complete && u();
                    }), g.addEventListener("error", u), g.addEventListener("load", u);
                })));
        }
        o = /*#__PURE__*/ p.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
    }
    return e ? h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : h.attr("transform", "translate(0, " + -o.height / 2 + ")"), t.centerLabel && h.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), h.insert("rect", ":first-child"), {
        shapeSvg: a,
        bbox: o,
        halfPadding: n,
        label: h
    };
}, "labelHelper"), At = /*#__PURE__*/ m$1(async (c, t, i)=>{
    let r = i.useHtmlLabels || Mo(mr$1()?.flowchart?.htmlLabels), e = /*#__PURE__*/ c.insert("g").attr("class", "label").attr("style", i.labelStyle || ""), a = await Rr$1(e, /*#__PURE__*/ ot$1(/*#__PURE__*/ Yt$1(t), /*#__PURE__*/ mr$1()), {
        useHtmlLabels: r,
        width: i.width || mr$1()?.flowchart?.wrappingWidth,
        style: i.labelStyle,
        addSvgBackground: !!i.icon || !!i.img
    }), h = /*#__PURE__*/ a.getBBox(), s = i.padding / 2;
    if (Mo(mr$1()?.flowchart?.htmlLabels)) {
        let l = a.children[0], o = /*#__PURE__*/ ia(a);
        h = /*#__PURE__*/ l.getBoundingClientRect(), o.attr("width", h.width), o.attr("height", h.height);
    }
    return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), i.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
        shapeSvg: c,
        bbox: h,
        halfPadding: s,
        label: e
    };
}, "insertLabel"), D = /*#__PURE__*/ m$1((c, t)=>{
    let i = /*#__PURE__*/ t.node().getBBox();
    c.width = i.width, c.height = i.height;
}, "updateNodeBounds");
var P = /*#__PURE__*/ m$1((c, t)=>(c.look === "handDrawn" ? "rough-node" : "node") + " " + c.cssClasses + " " + (t || ""), "getNodeClasses");
function H(c) {
    let t = /*#__PURE__*/ c.map((i, r)=>`${r === 0 ? "M" : "L"}${i.x},${i.y}`);
    return t.push("Z"), t.join(" ");
}
m$1(H, "createPathFromPoints");
function lt(c, t, i, r, e, a) {
    let h = [], l = i - c, o = r - t, n = l / a, p = 2 * Math.PI / n, f = t + o / 2;
    for(let m = 0; m <= 50; m++){
        let d = m / 50, g = c + d * l, y = f + e * Math.sin(p * (g - c));
        h.push({
            x: g,
            y
        });
    }
    return h;
}
m$1(lt, "generateFullSineWavePoints");
function Nt(c, t, i, r, e, a) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let f = s + p * n, m = c + i * Math.cos(f), d = t + i * Math.sin(f);
        h.push({
            x: -m,
            y: -d
        });
    }
    return h;
}
m$1(Nt, "generateCirclePoints");
function te(c, t, i) {
    if (c && c.length) {
        let [r, e] = t, a = Math.PI / 180 * i, h = /*#__PURE__*/ Math.cos(a), s = /*#__PURE__*/ Math.sin(a);
        for (let l of c){
            let [o, n] = l;
            l[0] = (o - r) * h - (n - e) * s + r, l[1] = (o - r) * s + (n - e) * h + e;
        }
    }
}
m$1(te, "t");
function sr(c, t) {
    return c[0] === t[0] && c[1] === t[1];
}
m$1(sr, "e");
function rr(c, t, i, r = 1) {
    let e = i, a = /*#__PURE__*/ Math.max(t, .1), h = c[0] && c[0][0] && typeof c[0][0] == "number" ? [
        c
    ] : c, s = [
        0,
        0
    ];
    if (e) for (let o of h)te(o, s, e);
    let l = /*#__PURE__*/ function(o, n, p) {
        let f = [];
        for (let b of o){
            let S = [
                ...b
            ];
            sr(S[0], S[S.length - 1]) || S.push([
                S[0][0],
                S[0][1]
            ]), S.length > 2 && f.push(S);
        }
        let m = [];
        n = /*#__PURE__*/ Math.max(n, .1);
        let d = [];
        for (let b of f)for(let S = 0; S < b.length - 1; S++){
            let k = b[S], w = b[S + 1];
            if (k[1] !== w[1]) {
                let B = /*#__PURE__*/ Math.min(k[1], w[1]);
                d.push({
                    ymin: B,
                    ymax: /*#__PURE__*/ Math.max(k[1], w[1]),
                    x: B === k[1] ? k[0] : w[0],
                    islope: (w[0] - k[0]) / (w[1] - k[1])
                });
            }
        }
        if (d.sort((b, S)=>b.ymin < S.ymin ? -1 : b.ymin > S.ymin ? 1 : b.x < S.x ? -1 : b.x > S.x ? 1 : b.ymax === S.ymax ? 0 : (b.ymax - S.ymax) / Math.abs(b.ymax - S.ymax)), !d.length) return m;
        let g = [], y = d[0].ymin, u = 0;
        for(; g.length || d.length;){
            if (d.length) {
                let b = -1;
                for(let S = 0; S < d.length && !(d[S].ymin > y); S++)b = S;
                d.splice(0, b + 1).forEach((S)=>{
                    g.push({
                        s: y,
                        edge: S
                    });
                });
            }
            if (g = /*#__PURE__*/ g.filter((b)=>!(b.edge.ymax <= y)), g.sort((b, S)=>b.edge.x === S.edge.x ? 0 : (b.edge.x - S.edge.x) / Math.abs(b.edge.x - S.edge.x)), (p !== 1 || u % n == 0) && g.length > 1) for(let b = 0; b < g.length; b += 2){
                let S = b + 1;
                if (S >= g.length) break;
                let k = g[b].edge, w = g[S].edge;
                m.push([
                    [
                        /*#__PURE__*/ Math.round(k.x),
                        y
                    ],
                    [
                        /*#__PURE__*/ Math.round(w.x),
                        y
                    ]
                ]);
            }
            y += p, g.forEach((b)=>{
                b.edge.x = b.edge.x + p * b.edge.islope;
            }), u++;
        }
        return m;
    }(h, a, r);
    if (e) {
        for (let o of h)te(o, s, -e);
        (function(o, n, p) {
            let f = [];
            o.forEach((m)=>f.push(...m)), te(f, n, p);
        })(l, s, -e);
    }
    return l;
}
m$1(rr, "s");
function Tt(c, t) {
    var i;
    let r = t.hachureAngle + 90, e = t.hachureGap;
    e < 0 && (e = 4 * t.strokeWidth), e = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(e, .1));
    let a = 1;
    return t.roughness >= 1 && (((i = t.randomizer) === null || i === void 0 ? void 0 : i.next()) || Math.random()) > .7 && (a = e), rr(c, e, r, a || 1);
}
m$1(Tt, "n");
var Ct = class {
    static{
        m$1(this, "o");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, i) {
        return this._fillPolygons(t, i);
    }
    _fillPolygons(t, i) {
        let r = /*#__PURE__*/ Tt(t, i);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.renderLines(r, i)
        };
    }
    renderLines(t, i) {
        let r = [];
        for (let e of t)r.push(.../*#__PURE__*/ this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], i));
        return r;
    }
};
function zt(c) {
    let t = c[0], i = c[1];
    return Math.sqrt(Math.pow(t[0] - i[0], 2) + Math.pow(t[1] - i[1], 2));
}
m$1(zt, "a");
var oe = class extends Ct {
    static{
        m$1(this, "h");
    }
    fillPolygons(t, i) {
        let r = i.hachureGap;
        r < 0 && (r = 4 * i.strokeWidth), r = /*#__PURE__*/ Math.max(r, .1);
        let e = /*#__PURE__*/ Tt(t, /*#__PURE__*/ Object.assign({}, i, {
            hachureGap: r
        })), a = Math.PI / 180 * i.hachureAngle, h = [], s = .5 * r * Math.cos(a), l = .5 * r * Math.sin(a);
        for (let [o, n] of e)zt([
            o,
            n
        ]) && h.push([
            [
                o[0] - s,
                o[1] + l
            ],
            [
                ...n
            ]
        ], [
            [
                o[0] + s,
                o[1] - l
            ],
            [
                ...n
            ]
        ]);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.renderLines(h, i)
        };
    }
}, ie = class extends Ct {
    static{
        m$1(this, "r");
    }
    fillPolygons(t, i) {
        let r = /*#__PURE__*/ this._fillPolygons(t, i), e = /*#__PURE__*/ Object.assign({}, i, {
            hachureAngle: i.hachureAngle + 90
        }), a = /*#__PURE__*/ this._fillPolygons(t, e);
        return r.ops = /*#__PURE__*/ r.ops.concat(a.ops), r;
    }
}, ne = class {
    static{
        m$1(this, "i");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, i) {
        let r = /*#__PURE__*/ Tt(t, i = /*#__PURE__*/ Object.assign({}, i, {
            hachureAngle: 0
        }));
        return this.dotsOnLines(r, i);
    }
    dotsOnLines(t, i) {
        let r = [], e = i.hachureGap;
        e < 0 && (e = 4 * i.strokeWidth), e = /*#__PURE__*/ Math.max(e, .1);
        let a = i.fillWeight;
        a < 0 && (a = i.strokeWidth / 2);
        let h = e / 4;
        for (let s of t){
            let l = /*#__PURE__*/ zt(s), o = l / e, n = Math.ceil(o) - 1, p = l - n * e, f = (s[0][0] + s[1][0]) / 2 - e / 4, m = /*#__PURE__*/ Math.min(s[0][1], s[1][1]);
            for(let d = 0; d < n; d++){
                let g = m + p + d * e, y = f - h + 2 * Math.random() * h, u = g - h + 2 * Math.random() * h, b = /*#__PURE__*/ this.helper.ellipse(y, u, a, a, i);
                r.push(...b.ops);
            }
        }
        return {
            type: "fillSketch",
            ops: r
        };
    }
}, le = class {
    static{
        m$1(this, "c");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, i) {
        let r = /*#__PURE__*/ Tt(t, i);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.dashedLine(r, i)
        };
    }
    dashedLine(t, i) {
        let r = i.dashOffset < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashOffset, e = i.dashGap < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashGap, a = [];
        return t.forEach((h)=>{
            let s = /*#__PURE__*/ zt(h), l = /*#__PURE__*/ Math.floor(s / (r + e)), o = (s + e - l * (r + e)) / 2, n = h[0], p = h[1];
            n[0] > p[0] && (n = h[1], p = h[0]);
            let f = /*#__PURE__*/ Math.atan((p[1] - n[1]) / (p[0] - n[0]));
            for(let m = 0; m < l; m++){
                let d = m * (r + e), g = d + r, y = [
                    n[0] + d * Math.cos(f) + o * Math.cos(f),
                    n[1] + d * Math.sin(f) + o * Math.sin(f)
                ], u = [
                    n[0] + g * Math.cos(f) + o * Math.cos(f),
                    n[1] + g * Math.sin(f) + o * Math.sin(f)
                ];
                a.push(.../*#__PURE__*/ this.helper.doubleLineOps(y[0], y[1], u[0], u[1], i));
            }
        }), a;
    }
}, ce = class {
    static{
        m$1(this, "l");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, i) {
        let r = i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap, e = i.zigzagOffset < 0 ? r : i.zigzagOffset, a = /*#__PURE__*/ Tt(t, i = /*#__PURE__*/ Object.assign({}, i, {
            hachureGap: r + e
        }));
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.zigzagLines(a, e, i)
        };
    }
    zigzagLines(t, i, r) {
        let e = [];
        return t.forEach((a)=>{
            let h = /*#__PURE__*/ zt(a), s = /*#__PURE__*/ Math.round(h / (2 * i)), l = a[0], o = a[1];
            l[0] > o[0] && (l = a[1], o = a[0]);
            let n = /*#__PURE__*/ Math.atan((o[1] - l[1]) / (o[0] - l[0]));
            for(let p = 0; p < s; p++){
                let f = 2 * p * i, m = 2 * (p + 1) * i, d = /*#__PURE__*/ Math.sqrt(2 * Math.pow(i, 2)), g = [
                    l[0] + f * Math.cos(n),
                    l[1] + f * Math.sin(n)
                ], y = [
                    l[0] + m * Math.cos(n),
                    l[1] + m * Math.sin(n)
                ], u = [
                    g[0] + d * Math.cos(n + Math.PI / 4),
                    g[1] + d * Math.sin(n + Math.PI / 4)
                ];
                e.push(.../*#__PURE__*/ this.helper.doubleLineOps(g[0], g[1], u[0], u[1], r), .../*#__PURE__*/ this.helper.doubleLineOps(u[0], u[1], y[0], y[1], r));
            }
        }), e;
    }
}, et = {}, he = class {
    static{
        m$1(this, "p");
    }
    constructor(t){
        this.seed = t;
    }
    next() {
        return this.seed ? (2 ** 31 - 1 & (this.seed = /*#__PURE__*/ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
    }
}, ar = 0, ee = 1, ve = 2, Ot = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
};
function se(c, t) {
    return c.type === t;
}
m$1(se, "k");
function ue(c) {
    let t = [], i = /*#__PURE__*/ function(h) {
        let s = new Array;
        for(; h !== "";)if (h.match(/^([ \t\r\n,]+)/)) h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = {
            type: ar,
            text: RegExp.$1
        }, h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        else {
            if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
            s[s.length] = {
                type: ee,
                text: `${parseFloat(RegExp.$1)}`
            }, h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        }
        return s[s.length] = {
            type: ve,
            text: ""
        }, s;
    }(c), r = "BOD", e = 0, a = i[e];
    for(; !se(a, ve);){
        let h = 0, s = [];
        if (r === "BOD") {
            if (a.text !== "M" && a.text !== "m") return ue("M0,0" + c);
            e++, h = Ot[a.text], r = a.text;
        } else se(a, ee) ? h = Ot[r] : (e++, h = Ot[a.text], r = a.text);
        if (!(e + h < i.length)) throw new Error("Path data ended short");
        for(let l = e; l < e + h; l++){
            let o = i[l];
            if (!se(o, ee)) throw new Error("Param not a number: " + r + "," + o.text);
            s[s.length] = +o.text;
        }
        if (typeof Ot[r] != "number") throw new Error("Bad segment: " + r);
        {
            let l = {
                key: r,
                data: s
            };
            t.push(l), e += h, a = i[e], r === "M" && (r = "L"), r === "m" && (r = "l");
        }
    }
    return t;
}
m$1(ue, "b");
function Ge(c) {
    let t = 0, i = 0, r = 0, e = 0, a = [];
    for (let { key: h, data: s } of c)switch(h){
        case "M":
            a.push({
                key: "M",
                data: [
                    ...s
                ]
            }), [t, i] = s, [r, e] = s;
            break;
        case "m":
            t += s[0], i += s[1], a.push({
                key: "M",
                data: [
                    t,
                    i
                ]
            }), r = t, e = i;
            break;
        case "L":
            a.push({
                key: "L",
                data: [
                    ...s
                ]
            }), [t, i] = s;
            break;
        case "l":
            t += s[0], i += s[1], a.push({
                key: "L",
                data: [
                    t,
                    i
                ]
            });
            break;
        case "C":
            a.push({
                key: "C",
                data: [
                    ...s
                ]
            }), t = s[4], i = s[5];
            break;
        case "c":
            {
                let l = /*#__PURE__*/ s.map((o, n)=>n % 2 ? o + i : o + t);
                a.push({
                    key: "C",
                    data: l
                }), t = l[4], i = l[5];
                break;
            }
        case "Q":
            a.push({
                key: "Q",
                data: [
                    ...s
                ]
            }), t = s[2], i = s[3];
            break;
        case "q":
            {
                let l = /*#__PURE__*/ s.map((o, n)=>n % 2 ? o + i : o + t);
                a.push({
                    key: "Q",
                    data: l
                }), t = l[2], i = l[3];
                break;
            }
        case "A":
            a.push({
                key: "A",
                data: [
                    ...s
                ]
            }), t = s[5], i = s[6];
            break;
        case "a":
            t += s[5], i += s[6], a.push({
                key: "A",
                data: [
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    t,
                    i
                ]
            });
            break;
        case "H":
            a.push({
                key: "H",
                data: [
                    ...s
                ]
            }), t = s[0];
            break;
        case "h":
            t += s[0], a.push({
                key: "H",
                data: [
                    t
                ]
            });
            break;
        case "V":
            a.push({
                key: "V",
                data: [
                    ...s
                ]
            }), i = s[0];
            break;
        case "v":
            i += s[0], a.push({
                key: "V",
                data: [
                    i
                ]
            });
            break;
        case "S":
            a.push({
                key: "S",
                data: [
                    ...s
                ]
            }), t = s[2], i = s[3];
            break;
        case "s":
            {
                let l = /*#__PURE__*/ s.map((o, n)=>n % 2 ? o + i : o + t);
                a.push({
                    key: "S",
                    data: l
                }), t = l[2], i = l[3];
                break;
            }
        case "T":
            a.push({
                key: "T",
                data: [
                    ...s
                ]
            }), t = s[0], i = s[1];
            break;
        case "t":
            t += s[0], i += s[1], a.push({
                key: "T",
                data: [
                    t,
                    i
                ]
            });
            break;
        case "Z":
        case "z":
            a.push({
                key: "Z",
                data: []
            }), t = r, i = e;
    }
    return a;
}
m$1(Ge, "y");
function Ee(c) {
    let t = [], i = "", r = 0, e = 0, a = 0, h = 0, s = 0, l = 0;
    for (let { key: o, data: n } of c){
        switch(o){
            case "M":
                t.push({
                    key: "M",
                    data: [
                        ...n
                    ]
                }), [r, e] = n, [a, h] = n;
                break;
            case "C":
                t.push({
                    key: "C",
                    data: [
                        ...n
                    ]
                }), r = n[4], e = n[5], s = n[2], l = n[3];
                break;
            case "L":
                t.push({
                    key: "L",
                    data: [
                        ...n
                    ]
                }), [r, e] = n;
                break;
            case "H":
                r = n[0], t.push({
                    key: "L",
                    data: [
                        r,
                        e
                    ]
                });
                break;
            case "V":
                e = n[0], t.push({
                    key: "L",
                    data: [
                        r,
                        e
                    ]
                });
                break;
            case "S":
                {
                    let p = 0, f = 0;
                    i === "C" || i === "S" ? (p = r + (r - s), f = e + (e - l)) : (p = r, f = e), t.push({
                        key: "C",
                        data: [
                            p,
                            f,
                            ...n
                        ]
                    }), s = n[0], l = n[1], r = n[2], e = n[3];
                    break;
                }
            case "T":
                {
                    let [p, f] = n, m = 0, d = 0;
                    i === "Q" || i === "T" ? (m = r + (r - s), d = e + (e - l)) : (m = r, d = e);
                    let g = r + 2 * (m - r) / 3, y = e + 2 * (d - e) / 3, u = p + 2 * (m - p) / 3, b = f + 2 * (d - f) / 3;
                    t.push({
                        key: "C",
                        data: [
                            g,
                            y,
                            u,
                            b,
                            p,
                            f
                        ]
                    }), s = m, l = d, r = p, e = f;
                    break;
                }
            case "Q":
                {
                    let [p, f, m, d] = n, g = r + 2 * (p - r) / 3, y = e + 2 * (f - e) / 3, u = m + 2 * (p - m) / 3, b = d + 2 * (f - d) / 3;
                    t.push({
                        key: "C",
                        data: [
                            g,
                            y,
                            u,
                            b,
                            m,
                            d
                        ]
                    }), s = p, l = f, r = m, e = d;
                    break;
                }
            case "A":
                {
                    let p = /*#__PURE__*/ Math.abs(n[0]), f = /*#__PURE__*/ Math.abs(n[1]), m = n[2], d = n[3], g = n[4], y = n[5], u = n[6];
                    p === 0 || f === 0 ? (t.push({
                        key: "C",
                        data: [
                            r,
                            e,
                            y,
                            u,
                            y,
                            u
                        ]
                    }), r = y, e = u) : (r !== y || e !== u) && (je(r, e, y, u, p, f, m, d, g).forEach(function(b) {
                        t.push({
                            key: "C",
                            data: b
                        });
                    }), r = y, e = u);
                    break;
                }
            case "Z":
                t.push({
                    key: "Z",
                    data: []
                }), r = a, e = h;
        }
        i = o;
    }
    return t;
}
m$1(Ee, "m");
function Pt(c, t, i) {
    return [
        c * Math.cos(i) - t * Math.sin(i),
        c * Math.sin(i) + t * Math.cos(i)
    ];
}
m$1(Pt, "w");
function je(c, t, i, r, e, a, h, s, l, o) {
    let n = (p = h, Math.PI * p / 180);
    var p;
    let f = [], m = 0, d = 0, g = 0, y = 0;
    if (o) [m, d, g, y] = o;
    else {
        [c, t] = /*#__PURE__*/ Pt(c, t, -n), [i, r] = /*#__PURE__*/ Pt(i, r, -n);
        let G = (c - i) / 2, j = (t - r) / 2, W = G * G / (e * e) + j * j / (a * a);
        W > 1 && (W = /*#__PURE__*/ Math.sqrt(W), e *= W, a *= W);
        let A = e * e, I = a * a, F = A * I - A * j * j - I * G * G, Q = A * j * j + I * G * G, it = (s === l ? -1 : 1) * Math.sqrt(/*#__PURE__*/ Math.abs(F / Q));
        g = it * e * j / a + (c + i) / 2, y = it * -a * G / e + (t + r) / 2, m = /*#__PURE__*/ Math.asin(/*#__PURE__*/ parseFloat(/*#__PURE__*/ ((t - y) / a).toFixed(9))), d = /*#__PURE__*/ Math.asin(/*#__PURE__*/ parseFloat(/*#__PURE__*/ ((r - y) / a).toFixed(9))), c < g && (m = Math.PI - m), i < g && (d = Math.PI - d), m < 0 && (m = 2 * Math.PI + m), d < 0 && (d = 2 * Math.PI + d), l && m > d && (m -= 2 * Math.PI), !l && d > m && (d -= 2 * Math.PI);
    }
    let u = d - m;
    if (Math.abs(u) > 120 * Math.PI / 180) {
        let G = d, j = i, W = r;
        d = l && d > m ? m + 120 * Math.PI / 180 * 1 : m + 120 * Math.PI / 180 * -1, f = /*#__PURE__*/ je(i = g + e * Math.cos(d), r = y + a * Math.sin(d), j, W, e, a, h, 0, l, [
            d,
            G,
            g,
            y
        ]);
    }
    u = d - m;
    let b = /*#__PURE__*/ Math.cos(m), S = /*#__PURE__*/ Math.sin(m), k = /*#__PURE__*/ Math.cos(d), w = /*#__PURE__*/ Math.sin(d), B = /*#__PURE__*/ Math.tan(u / 4), T = 4 / 3 * e * B, R = 4 / 3 * a * B, E = [
        c,
        t
    ], L = [
        c + T * S,
        t - R * b
    ], O = [
        i + T * w,
        r - R * k
    ], V = [
        i,
        r
    ];
    if (L[0] = 2 * E[0] - L[0], L[1] = 2 * E[1] - L[1], o) return [
        L,
        O,
        V
    ].concat(f);
    {
        f = /*#__PURE__*/ [
            L,
            O,
            V
        ].concat(f);
        let G = [];
        for(let j = 0; j < f.length; j += 3){
            let W = /*#__PURE__*/ Pt(f[j][0], f[j][1], n), A = /*#__PURE__*/ Pt(f[j + 1][0], f[j + 1][1], n), I = /*#__PURE__*/ Pt(f[j + 2][0], f[j + 2][1], n);
            G.push([
                W[0],
                W[1],
                A[0],
                A[1],
                I[0],
                I[1]
            ]);
        }
        return G;
    }
}
m$1(je, "x");
var or = {
    randOffset: /*#__PURE__*/ m$1(function(c, t) {
        return _(c, t);
    }, "randOffset"),
    randOffsetWithRange: /*#__PURE__*/ m$1(function(c, t, i) {
        return It(c, t, i);
    }, "randOffsetWithRange"),
    ellipse: /*#__PURE__*/ m$1(function(c, t, i, r, e) {
        let a = /*#__PURE__*/ Oe(i, r, e);
        return pe(c, t, e, a).opset;
    }, "ellipse"),
    doubleLineOps: /*#__PURE__*/ m$1(function(c, t, i, r, e) {
        return ut(c, t, i, r, e, true);
    }, "doubleLineOps")
};
function Ae(c, t, i, r, e) {
    return {
        type: "path",
        ops: /*#__PURE__*/ ut(c, t, i, r, e)
    };
}
m$1(Ae, "v");
function Vt(c, t, i) {
    let r = (c || []).length;
    if (r > 2) {
        let e = [];
        for(let a = 0; a < r - 1; a++)e.push(.../*#__PURE__*/ ut(c[a][0], c[a][1], c[a + 1][0], c[a + 1][1], i));
        return t && e.push(.../*#__PURE__*/ ut(c[r - 1][0], c[r - 1][1], c[0][0], c[0][1], i)), {
            type: "path",
            ops: e
        };
    }
    return r === 2 ? Ae(c[0][0], c[0][1], c[1][0], c[1][1], i) : {
        type: "path",
        ops: []
    };
}
m$1(Vt, "S");
function ir(c, t, i, r, e) {
    return function(a, h) {
        return Vt(a, true, h);
    }([
        [
            c,
            t
        ],
        [
            c + i,
            t
        ],
        [
            c + i,
            t + r
        ],
        [
            c,
            t + r
        ]
    ], e);
}
m$1(ir, "O");
function Me(c, t) {
    if (c.length) {
        let i = typeof c[0][0] == "number" ? [
            c
        ] : c, r = /*#__PURE__*/ Lt(i[0], 1 * (1 + .2 * t.roughness), t), e = t.disableMultiStroke ? [] : Lt(i[0], 1.5 * (1 + .22 * t.roughness), /*#__PURE__*/ Be(t));
        for(let a = 1; a < i.length; a++){
            let h = i[a];
            if (h.length) {
                let s = /*#__PURE__*/ Lt(h, 1 * (1 + .2 * t.roughness), t), l = t.disableMultiStroke ? [] : Lt(h, 1.5 * (1 + .22 * t.roughness), /*#__PURE__*/ Be(t));
                for (let o of s)o.op !== "move" && r.push(o);
                for (let o of l)o.op !== "move" && e.push(o);
            }
        }
        return {
            type: "path",
            ops: /*#__PURE__*/ r.concat(e)
        };
    }
    return {
        type: "path",
        ops: []
    };
}
m$1(Me, "L");
function Oe(c, t, i) {
    let r = /*#__PURE__*/ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(c / 2, 2) + Math.pow(t / 2, 2)) / 2)), e = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.max(i.curveStepCount, i.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = /*#__PURE__*/ Math.abs(c / 2), s = /*#__PURE__*/ Math.abs(t / 2), l = 1 - i.curveFitting;
    return h += /*#__PURE__*/ _(h * l, i), s += /*#__PURE__*/ _(s * l, i), {
        increment: a,
        rx: h,
        ry: s
    };
}
m$1(Oe, "T");
function pe(c, t, i, r) {
    let [e, a] = Ce(r.increment, c, t, r.rx, r.ry, 1, r.increment * It(.1, /*#__PURE__*/ It(.4, 1, i), i), i), h = /*#__PURE__*/ Ft(e, null, i);
    if (!i.disableMultiStroke && i.roughness !== 0) {
        let [s] = Ce(r.increment, c, t, r.rx, r.ry, 1.5, 0, i), l = /*#__PURE__*/ Ft(s, null, i);
        h = /*#__PURE__*/ h.concat(l);
    }
    return {
        estimatedPoints: a,
        opset: {
            type: "path",
            ops: h
        }
    };
}
m$1(pe, "D");
function ke(c, t, i, r, e, a, h, s, l) {
    let o = c, n = t, p = /*#__PURE__*/ Math.abs(i / 2), f = /*#__PURE__*/ Math.abs(r / 2);
    p += /*#__PURE__*/ _(.01 * p, l), f += /*#__PURE__*/ _(.01 * f, l);
    let m = e, d = a;
    for(; m < 0;)m += 2 * Math.PI, d += 2 * Math.PI;
    d - m > 2 * Math.PI && (m = 0, d = 2 * Math.PI);
    let g = 2 * Math.PI / l.curveStepCount, y = /*#__PURE__*/ Math.min(g / 2, (d - m) / 2), u = /*#__PURE__*/ Te(y, o, n, p, f, m, d, 1, l);
    if (!l.disableMultiStroke) {
        let b = /*#__PURE__*/ Te(y, o, n, p, f, m, d, 1.5, l);
        u.push(...b);
    }
    return h && (s ? u.push(.../*#__PURE__*/ ut(o, n, o + p * Math.cos(m), n + f * Math.sin(m), l), .../*#__PURE__*/ ut(o, n, o + p * Math.cos(d), n + f * Math.sin(d), l)) : u.push({
        op: "lineTo",
        data: [
            o,
            n
        ]
    }, {
        op: "lineTo",
        data: [
            o + p * Math.cos(m),
            n + f * Math.sin(m)
        ]
    })), {
        type: "path",
        ops: u
    };
}
m$1(ke, "A");
function Pe(c, t) {
    let i = /*#__PURE__*/ Ee(/*#__PURE__*/ Ge(/*#__PURE__*/ ue(c))), r = [], e = [
        0,
        0
    ], a = [
        0,
        0
    ];
    for (let { key: h, data: s } of i)switch(h){
        case "M":
            a = [
                s[0],
                s[1]
            ], e = [
                s[0],
                s[1]
            ];
            break;
        case "L":
            r.push(.../*#__PURE__*/ ut(a[0], a[1], s[0], s[1], t)), a = [
                s[0],
                s[1]
            ];
            break;
        case "C":
            {
                let [l, o, n, p, f, m] = s;
                r.push(.../*#__PURE__*/ nr(l, o, n, p, f, m, a, t)), a = [
                    f,
                    m
                ];
                break;
            }
        case "Z":
            r.push(.../*#__PURE__*/ ut(a[0], a[1], e[0], e[1], t)), a = [
                e[0],
                e[1]
            ];
    }
    return {
        type: "path",
        ops: r
    };
}
m$1(Pe, "_");
function re(c, t) {
    let i = [];
    for (let r of c)if (r.length) {
        let e = t.maxRandomnessOffset || 0, a = r.length;
        if (a > 2) {
            i.push({
                op: "move",
                data: [
                    r[0][0] + _(e, t),
                    r[0][1] + _(e, t)
                ]
            });
            for(let h = 1; h < a; h++)i.push({
                op: "lineTo",
                data: [
                    r[h][0] + _(e, t),
                    r[h][1] + _(e, t)
                ]
            });
        }
    }
    return {
        type: "fillPath",
        ops: i
    };
}
m$1(re, "I");
function vt(c, t) {
    return (function(i, r) {
        let e = i.fillStyle || "hachure";
        if (!et[e]) switch(e){
            case "zigzag":
                et[e] || (et[e] = new oe(r));
                break;
            case "cross-hatch":
                et[e] || (et[e] = new ie(r));
                break;
            case "dots":
                et[e] || (et[e] = new ne(r));
                break;
            case "dashed":
                et[e] || (et[e] = new le(r));
                break;
            case "zigzag-line":
                et[e] || (et[e] = new ce(r));
                break;
            default:
                e = "hachure", et[e] || (et[e] = new Ct(r));
        }
        return et[e];
    })(t, or).fillPolygons(c, t);
}
m$1(vt, "C");
function Be(c) {
    let t = /*#__PURE__*/ Object.assign({}, c);
    return t.randomizer = void 0, c.seed && (t.seed = c.seed + 1), t;
}
m$1(Be, "z");
function Le(c) {
    return c.randomizer || (c.randomizer = new he(c.seed || 0)), c.randomizer.next();
}
m$1(Le, "W");
function It(c, t, i, r = 1) {
    return i.roughness * r * (Le(i) * (t - c) + c);
}
m$1(It, "E");
function _(c, t, i = 1) {
    return It(-c, c, t, i);
}
m$1(_, "G");
function ut(c, t, i, r, e, a = false) {
    let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s = /*#__PURE__*/ me(c, t, i, r, e, true, false);
    if (h) return s;
    let l = /*#__PURE__*/ me(c, t, i, r, e, true, true);
    return s.concat(l);
}
m$1(ut, "$");
function me(c, t, i, r, e, a, h) {
    let s = Math.pow(c - i, 2) + Math.pow(t - r, 2), l = /*#__PURE__*/ Math.sqrt(s), o = 1;
    o = l < 200 ? 1 : l > 500 ? .4 : -16668e-7 * l + 1.233334;
    let n = e.maxRandomnessOffset || 0;
    n * n * 100 > s && (n = l / 10);
    let p = n / 2, f = .2 + .2 * Le(e), m = e.bowing * e.maxRandomnessOffset * (r - t) / 200, d = e.bowing * e.maxRandomnessOffset * (c - i) / 200;
    m = /*#__PURE__*/ _(m, e, o), d = /*#__PURE__*/ _(d, e, o);
    let g = [], y = /*#__PURE__*/ m$1(()=>_(p, e, o), "M"), u = /*#__PURE__*/ m$1(()=>_(n, e, o), "k"), b = e.preserveVertices;
    return a && (h ? g.push({
        op: "move",
        data: [
            c + (b ? 0 : y()),
            t + (b ? 0 : y())
        ]
    }) : g.push({
        op: "move",
        data: [
            c + (b ? 0 : _(n, e, o)),
            t + (b ? 0 : _(n, e, o))
        ]
    })), h ? g.push({
        op: "bcurveTo",
        data: [
            m + c + (i - c) * f + y(),
            d + t + (r - t) * f + y(),
            m + c + 2 * (i - c) * f + y(),
            d + t + 2 * (r - t) * f + y(),
            i + (b ? 0 : y()),
            r + (b ? 0 : y())
        ]
    }) : g.push({
        op: "bcurveTo",
        data: [
            m + c + (i - c) * f + u(),
            d + t + (r - t) * f + u(),
            m + c + 2 * (i - c) * f + u(),
            d + t + 2 * (r - t) * f + u(),
            i + (b ? 0 : u()),
            r + (b ? 0 : u())
        ]
    }), g;
}
m$1(me, "R");
function Lt(c, t, i) {
    if (!c.length) return [];
    let r = [];
    r.push([
        c[0][0] + _(t, i),
        c[0][1] + _(t, i)
    ]), r.push([
        c[0][0] + _(t, i),
        c[0][1] + _(t, i)
    ]);
    for(let e = 1; e < c.length; e++)r.push([
        c[e][0] + _(t, i),
        c[e][1] + _(t, i)
    ]), e === c.length - 1 && r.push([
        c[e][0] + _(t, i),
        c[e][1] + _(t, i)
    ]);
    return Ft(r, null, i);
}
m$1(Lt, "j");
function Ft(c, t, i) {
    let r = c.length, e = [];
    if (r > 3) {
        let a = [], h = 1 - i.curveTightness;
        e.push({
            op: "move",
            data: [
                c[1][0],
                c[1][1]
            ]
        });
        for(let s = 1; s + 2 < r; s++){
            let l = c[s];
            a[0] = [
                l[0],
                l[1]
            ], a[1] = [
                l[0] + (h * c[s + 1][0] - h * c[s - 1][0]) / 6,
                l[1] + (h * c[s + 1][1] - h * c[s - 1][1]) / 6
            ], a[2] = [
                c[s + 1][0] + (h * c[s][0] - h * c[s + 2][0]) / 6,
                c[s + 1][1] + (h * c[s][1] - h * c[s + 2][1]) / 6
            ], a[3] = [
                c[s + 1][0],
                c[s + 1][1]
            ], e.push({
                op: "bcurveTo",
                data: [
                    a[1][0],
                    a[1][1],
                    a[2][0],
                    a[2][1],
                    a[3][0],
                    a[3][1]
                ]
            });
        }
        if (t && t.length === 2) {
            let s = i.maxRandomnessOffset;
            e.push({
                op: "lineTo",
                data: [
                    t[0] + _(s, i),
                    t[1] + _(s, i)
                ]
            });
        }
    } else r === 3 ? (e.push({
        op: "move",
        data: [
            c[1][0],
            c[1][1]
        ]
    }), e.push({
        op: "bcurveTo",
        data: [
            c[1][0],
            c[1][1],
            c[2][0],
            c[2][1],
            c[2][0],
            c[2][1]
        ]
    })) : r === 2 && e.push(.../*#__PURE__*/ me(c[0][0], c[0][1], c[1][0], c[1][1], i, true, true));
    return e;
}
m$1(Ft, "q");
function Ce(c, t, i, r, e, a, h, s) {
    let l = [], o = [];
    if (s.roughness === 0) {
        c /= 4, o.push([
            t + r * Math.cos(-c),
            i + e * Math.sin(-c)
        ]);
        for(let n = 0; n <= 2 * Math.PI; n += c){
            let p = [
                t + r * Math.cos(n),
                i + e * Math.sin(n)
            ];
            l.push(p), o.push(p);
        }
        o.push([
            t + r * Math.cos(0),
            i + e * Math.sin(0)
        ]), o.push([
            t + r * Math.cos(c),
            i + e * Math.sin(c)
        ]);
    } else {
        let n = _(.5, s) - Math.PI / 2;
        o.push([
            _(a, s) + t + .9 * r * Math.cos(n - c),
            _(a, s) + i + .9 * e * Math.sin(n - c)
        ]);
        let p = 2 * Math.PI + n - .01;
        for(let f = n; f < p; f += c){
            let m = [
                _(a, s) + t + r * Math.cos(f),
                _(a, s) + i + e * Math.sin(f)
            ];
            l.push(m), o.push(m);
        }
        o.push([
            _(a, s) + t + r * Math.cos(n + 2 * Math.PI + .5 * h),
            _(a, s) + i + e * Math.sin(n + 2 * Math.PI + .5 * h)
        ]), o.push([
            _(a, s) + t + .98 * r * Math.cos(n + h),
            _(a, s) + i + .98 * e * Math.sin(n + h)
        ]), o.push([
            _(a, s) + t + .9 * r * Math.cos(n + .5 * h),
            _(a, s) + i + .9 * e * Math.sin(n + .5 * h)
        ]);
    }
    return [
        o,
        l
    ];
}
m$1(Ce, "F");
function Te(c, t, i, r, e, a, h, s, l) {
    let o = a + _(.1, l), n = [];
    n.push([
        _(s, l) + t + .9 * r * Math.cos(o - c),
        _(s, l) + i + .9 * e * Math.sin(o - c)
    ]);
    for(let p = o; p <= h; p += c)n.push([
        _(s, l) + t + r * Math.cos(p),
        _(s, l) + i + e * Math.sin(p)
    ]);
    return n.push([
        t + r * Math.cos(h),
        i + e * Math.sin(h)
    ]), n.push([
        t + r * Math.cos(h),
        i + e * Math.sin(h)
    ]), Ft(n, null, l);
}
m$1(Te, "V");
function nr(c, t, i, r, e, a, h, s) {
    let l = [], o = [
        s.maxRandomnessOffset || 1,
        (s.maxRandomnessOffset || 1) + .3
    ], n = [
        0,
        0
    ], p = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
    for(let m = 0; m < p; m++)m === 0 ? l.push({
        op: "move",
        data: [
            h[0],
            h[1]
        ]
    }) : l.push({
        op: "move",
        data: [
            h[0] + (f ? 0 : _(o[0], s)),
            h[1] + (f ? 0 : _(o[0], s))
        ]
    }), n = f ? [
        e,
        a
    ] : [
        e + _(o[m], s),
        a + _(o[m], s)
    ], l.push({
        op: "bcurveTo",
        data: [
            c + _(o[m], s),
            t + _(o[m], s),
            i + _(o[m], s),
            r + _(o[m], s),
            n[0],
            n[1]
        ]
    });
    return l;
}
m$1(nr, "Z");
function Bt(c) {
    return [
        ...c
    ];
}
m$1(Bt, "Q");
function Re(c, t = 0) {
    let i = c.length;
    if (i < 3) throw new Error("A curve must have at least three points.");
    let r = [];
    if (i === 3) r.push(/*#__PURE__*/ Bt(c[0]), /*#__PURE__*/ Bt(c[1]), /*#__PURE__*/ Bt(c[2]), /*#__PURE__*/ Bt(c[2]));
    else {
        let e = [];
        e.push(c[0], c[0]);
        for(let s = 1; s < c.length; s++)e.push(c[s]), s === c.length - 1 && e.push(c[s]);
        let a = [], h = 1 - t;
        r.push(/*#__PURE__*/ Bt(e[0]));
        for(let s = 1; s + 2 < e.length; s++){
            let l = e[s];
            a[0] = [
                l[0],
                l[1]
            ], a[1] = [
                l[0] + (h * e[s + 1][0] - h * e[s - 1][0]) / 6,
                l[1] + (h * e[s + 1][1] - h * e[s - 1][1]) / 6
            ], a[2] = [
                e[s + 1][0] + (h * e[s][0] - h * e[s + 2][0]) / 6,
                e[s + 1][1] + (h * e[s][1] - h * e[s + 2][1]) / 6
            ], a[3] = [
                e[s + 1][0],
                e[s + 1][1]
            ], r.push(a[1], a[2], a[3]);
        }
    }
    return r;
}
m$1(Re, "H");
function Wt(c, t) {
    return Math.pow(c[0] - t[0], 2) + Math.pow(c[1] - t[1], 2);
}
m$1(Wt, "N");
function lr(c, t, i) {
    let r = /*#__PURE__*/ Wt(t, i);
    if (r === 0) return Wt(c, t);
    let e = ((c[0] - t[0]) * (i[0] - t[0]) + (c[1] - t[1]) * (i[1] - t[1])) / r;
    return e = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(1, e)), Wt(c, /*#__PURE__*/ $t(t, i, e));
}
m$1(lr, "B");
function $t(c, t, i) {
    return [
        c[0] + (t[0] - c[0]) * i,
        c[1] + (t[1] - c[1]) * i
    ];
}
m$1($t, "J");
function fe(c, t, i, r) {
    let e = r || [];
    if (function(s, l) {
        let o = s[l + 0], n = s[l + 1], p = s[l + 2], f = s[l + 3], m = 3 * n[0] - 2 * o[0] - f[0];
        m *= m;
        let d = 3 * n[1] - 2 * o[1] - f[1];
        d *= d;
        let g = 3 * p[0] - 2 * f[0] - o[0];
        g *= g;
        let y = 3 * p[1] - 2 * f[1] - o[1];
        return y *= y, m < g && (m = g), d < y && (d = y), m + d;
    }(c, t) < i) {
        let s = c[t + 0];
        e.length ? (a = e[e.length - 1], h = s, Math.sqrt(/*#__PURE__*/ Wt(a, h)) > 1 && e.push(s)) : e.push(s), e.push(c[t + 3]);
    } else {
        let l = c[t + 0], o = c[t + 1], n = c[t + 2], p = c[t + 3], f = /*#__PURE__*/ $t(l, o, .5), m = /*#__PURE__*/ $t(o, n, .5), d = /*#__PURE__*/ $t(n, p, .5), g = /*#__PURE__*/ $t(f, m, .5), y = /*#__PURE__*/ $t(m, d, .5), u = /*#__PURE__*/ $t(g, y, .5);
        fe([
            l,
            f,
            g,
            u
        ], 0, i, e), fe([
            u,
            y,
            d,
            p
        ], 0, i, e);
    }
    var a, h;
    return e;
}
m$1(fe, "K");
function cr(c, t) {
    return _t(c, 0, c.length, t);
}
m$1(cr, "U");
function _t(c, t, i, r, e) {
    let a = e || [], h = c[t], s = c[i - 1], l = 0, o = 1;
    for(let n = t + 1; n < i - 1; ++n){
        let p = /*#__PURE__*/ lr(c[n], h, s);
        p > l && (l = p, o = n);
    }
    return Math.sqrt(l) > r ? (_t(c, t, o + 1, r, a), _t(c, o, i, r, a)) : (a.length || a.push(h), a.push(s)), a;
}
m$1(_t, "X");
function ae(c, t = .15, i) {
    let r = [], e = (c.length - 1) / 3;
    for(let a = 0; a < e; a++)fe(c, 3 * a, t, r);
    return i && i > 0 ? _t(r, 0, r.length, i) : r;
}
m$1(ae, "Y");
var ot = "none", Mt = class {
    static{
        m$1(this, "et");
    }
    constructor(t){
        this.defaultOptions = {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: "#000",
            strokeWidth: 1,
            curveTightness: 0,
            curveFitting: .95,
            curveStepCount: 9,
            fillStyle: "hachure",
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1,
            dashOffset: -1,
            dashGap: -1,
            zigzagOffset: -1,
            seed: 0,
            disableMultiStroke: false,
            disableMultiStrokeFill: false,
            preserveVertices: false,
            fillShapeRoughnessGain: .8
        }, this.config = t || {}, this.config.options && (this.defaultOptions = /*#__PURE__*/ this._o(this.config.options));
    }
    static newSeed() {
        return Math.floor(Math.random() * 2 ** 31);
    }
    _o(t) {
        return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
    }
    _d(t, i, r) {
        return {
            shape: t,
            sets: i || [],
            options: r || this.defaultOptions
        };
    }
    line(t, i, r, e, a) {
        let h = /*#__PURE__*/ this._o(a);
        return this._d("line", [
            /*#__PURE__*/ Ae(t, i, r, e, h)
        ], h);
    }
    rectangle(t, i, r, e, a) {
        let h = /*#__PURE__*/ this._o(a), s = [], l = /*#__PURE__*/ ir(t, i, r, e, h);
        if (h.fill) {
            let o = [
                [
                    t,
                    i
                ],
                [
                    t + r,
                    i
                ],
                [
                    t + r,
                    i + e
                ],
                [
                    t,
                    i + e
                ]
            ];
            h.fillStyle === "solid" ? s.push(/*#__PURE__*/ re([
                o
            ], h)) : s.push(/*#__PURE__*/ vt([
                o
            ], h));
        }
        return h.stroke !== ot && s.push(l), this._d("rectangle", s, h);
    }
    ellipse(t, i, r, e, a) {
        let h = /*#__PURE__*/ this._o(a), s = [], l = /*#__PURE__*/ Oe(r, e, h), o = /*#__PURE__*/ pe(t, i, h, l);
        if (h.fill) if (h.fillStyle === "solid") {
            let n = pe(t, i, h, l).opset;
            n.type = "fillPath", s.push(n);
        } else s.push(/*#__PURE__*/ vt([
            o.estimatedPoints
        ], h));
        return h.stroke !== ot && s.push(o.opset), this._d("ellipse", s, h);
    }
    circle(t, i, r, e) {
        let a = /*#__PURE__*/ this.ellipse(t, i, r, r, e);
        return a.shape = "circle", a;
    }
    linearPath(t, i) {
        let r = /*#__PURE__*/ this._o(i);
        return this._d("linearPath", [
            /*#__PURE__*/ Vt(t, false, r)
        ], r);
    }
    arc(t, i, r, e, a, h, s = false, l) {
        let o = /*#__PURE__*/ this._o(l), n = [], p = /*#__PURE__*/ ke(t, i, r, e, a, h, s, true, o);
        if (s && o.fill) if (o.fillStyle === "solid") {
            let f = /*#__PURE__*/ Object.assign({}, o);
            f.disableMultiStroke = true;
            let m = /*#__PURE__*/ ke(t, i, r, e, a, h, true, false, f);
            m.type = "fillPath", n.push(m);
        } else n.push(/*#__PURE__*/ function(f, m, d, g, y, u, b) {
            let S = f, k = m, w = /*#__PURE__*/ Math.abs(d / 2), B = /*#__PURE__*/ Math.abs(g / 2);
            w += /*#__PURE__*/ _(.01 * w, b), B += /*#__PURE__*/ _(.01 * B, b);
            let T = y, R = u;
            for(; T < 0;)T += 2 * Math.PI, R += 2 * Math.PI;
            R - T > 2 * Math.PI && (T = 0, R = 2 * Math.PI);
            let E = (R - T) / b.curveStepCount, L = [];
            for(let O = T; O <= R; O += E)L.push([
                S + w * Math.cos(O),
                k + B * Math.sin(O)
            ]);
            return L.push([
                S + w * Math.cos(R),
                k + B * Math.sin(R)
            ]), L.push([
                S,
                k
            ]), vt([
                L
            ], b);
        }(t, i, r, e, a, h, o));
        return o.stroke !== ot && n.push(p), this._d("arc", n, o);
    }
    curve(t, i) {
        let r = /*#__PURE__*/ this._o(i), e = [], a = /*#__PURE__*/ Me(t, r);
        if (r.fill && r.fill !== ot) if (r.fillStyle === "solid") {
            let h = /*#__PURE__*/ Me(t, /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, r), {
                disableMultiStroke: true,
                roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
            }));
            e.push({
                type: "fillPath",
                ops: /*#__PURE__*/ this._mergedShape(h.ops)
            });
        } else {
            let h = [], s = t;
            if (s.length) {
                let l = typeof s[0][0] == "number" ? [
                    s
                ] : s;
                for (let o of l)o.length < 3 ? h.push(...o) : o.length === 3 ? h.push(.../*#__PURE__*/ ae(/*#__PURE__*/ Re([
                    o[0],
                    o[0],
                    o[1],
                    o[2]
                ]), 10, (1 + r.roughness) / 2)) : h.push(.../*#__PURE__*/ ae(/*#__PURE__*/ Re(o), 10, (1 + r.roughness) / 2));
            }
            h.length && e.push(/*#__PURE__*/ vt([
                h
            ], r));
        }
        return r.stroke !== ot && e.push(a), this._d("curve", e, r);
    }
    polygon(t, i) {
        let r = /*#__PURE__*/ this._o(i), e = [], a = /*#__PURE__*/ Vt(t, true, r);
        return r.fill && (r.fillStyle === "solid" ? e.push(/*#__PURE__*/ re([
            t
        ], r)) : e.push(/*#__PURE__*/ vt([
            t
        ], r))), r.stroke !== ot && e.push(a), this._d("polygon", e, r);
    }
    path(t, i) {
        let r = /*#__PURE__*/ this._o(i), e = [];
        if (!t) return this._d("path", e, r);
        t = /*#__PURE__*/ (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
        let a = r.fill && r.fill !== "transparent" && r.fill !== ot, h = r.stroke !== ot, s = !!(r.simplification && r.simplification < 1), l = /*#__PURE__*/ function(n, p, f) {
            let m = /*#__PURE__*/ Ee(/*#__PURE__*/ Ge(/*#__PURE__*/ ue(n))), d = [], g = [], y = [
                0,
                0
            ], u = [], b = /*#__PURE__*/ m$1(()=>{
                u.length >= 4 && g.push(.../*#__PURE__*/ ae(u, p)), u = [];
            }, "i"), S = /*#__PURE__*/ m$1(()=>{
                b(), g.length && (d.push(g), g = []);
            }, "c");
            for (let { key: w, data: B } of m)switch(w){
                case "M":
                    S(), y = [
                        B[0],
                        B[1]
                    ], g.push(y);
                    break;
                case "L":
                    b(), g.push([
                        B[0],
                        B[1]
                    ]);
                    break;
                case "C":
                    if (!u.length) {
                        let T = g.length ? g[g.length - 1] : y;
                        u.push([
                            T[0],
                            T[1]
                        ]);
                    }
                    u.push([
                        B[0],
                        B[1]
                    ]), u.push([
                        B[2],
                        B[3]
                    ]), u.push([
                        B[4],
                        B[5]
                    ]);
                    break;
                case "Z":
                    b(), g.push([
                        y[0],
                        y[1]
                    ]);
            }
            if (S(), !f) return d;
            let k = [];
            for (let w of d){
                let B = /*#__PURE__*/ cr(w, f);
                B.length && k.push(B);
            }
            return k;
        }(t, 1, s ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), o = /*#__PURE__*/ Pe(t, r);
        if (a) if (r.fillStyle === "solid") if (l.length === 1) {
            let n = /*#__PURE__*/ Pe(t, /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, r), {
                disableMultiStroke: true,
                roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
            }));
            e.push({
                type: "fillPath",
                ops: /*#__PURE__*/ this._mergedShape(n.ops)
            });
        } else e.push(/*#__PURE__*/ re(l, r));
        else e.push(/*#__PURE__*/ vt(l, r));
        return h && (s ? l.forEach((n)=>{
            e.push(/*#__PURE__*/ Vt(n, false, r));
        }) : e.push(o)), this._d("path", e, r);
    }
    opsToPath(t, i) {
        let r = "";
        for (let e of t.ops){
            let a = typeof i == "number" && i >= 0 ? e.data.map((h)=>+h.toFixed(i)) : e.data;
            switch(e.op){
                case "move":
                    r += `M${a[0]} ${a[1]} `;
                    break;
                case "bcurveTo":
                    r += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
                    break;
                case "lineTo":
                    r += `L${a[0]} ${a[1]} `;
            }
        }
        return r.trim();
    }
    toPaths(t) {
        let i = t.sets || [], r = t.options || this.defaultOptions, e = [];
        for (let a of i){
            let h = null;
            switch(a.type){
                case "path":
                    h = {
                        d: /*#__PURE__*/ this.opsToPath(a),
                        stroke: r.stroke,
                        strokeWidth: r.strokeWidth,
                        fill: ot
                    };
                    break;
                case "fillPath":
                    h = {
                        d: /*#__PURE__*/ this.opsToPath(a),
                        stroke: ot,
                        strokeWidth: 0,
                        fill: r.fill || ot
                    };
                    break;
                case "fillSketch":
                    h = /*#__PURE__*/ this.fillSketch(a, r);
            }
            h && e.push(h);
        }
        return e;
    }
    fillSketch(t, i) {
        let r = i.fillWeight;
        return r < 0 && (r = i.strokeWidth / 2), {
            d: /*#__PURE__*/ this.opsToPath(t),
            stroke: i.fill || ot,
            strokeWidth: r,
            fill: ot
        };
    }
    _mergedShape(t) {
        return t.filter((i, r)=>r === 0 || i.op !== "move");
    }
}, de = class {
    static{
        m$1(this, "st");
    }
    constructor(t, i){
        this.canvas = t, this.ctx = /*#__PURE__*/ this.canvas.getContext("2d"), this.gen = new Mt(i);
    }
    draw(t) {
        let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.ctx, a = t.options.fixedDecimalPlaceDigits;
        for (let h of i)switch(h.type){
            case "path":
                e.save(), e.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, e.lineWidth = r.strokeWidth, r.strokeLineDash && e.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (e.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(e, h, a), e.restore();
                break;
            case "fillPath":
                {
                    e.save(), e.fillStyle = r.fill || "";
                    let s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
                    this._drawToContext(e, h, a, s), e.restore();
                    break;
                }
            case "fillSketch":
                this.fillSketch(e, h, r);
        }
    }
    fillSketch(t, i, r) {
        let e = r.fillWeight;
        e < 0 && (e = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = e, this._drawToContext(t, i, r.fixedDecimalPlaceDigits), t.restore();
    }
    _drawToContext(t, i, r, e = "nonzero") {
        t.beginPath();
        for (let a of i.ops){
            let h = typeof r == "number" && r >= 0 ? a.data.map((s)=>+s.toFixed(r)) : a.data;
            switch(a.op){
                case "move":
                    t.moveTo(h[0], h[1]);
                    break;
                case "bcurveTo":
                    t.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
                    break;
                case "lineTo":
                    t.lineTo(h[0], h[1]);
            }
        }
        i.type === "fillPath" ? t.fill(e) : t.stroke();
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    line(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.line(t, i, r, e, a);
        return this.draw(h), h;
    }
    rectangle(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.rectangle(t, i, r, e, a);
        return this.draw(h), h;
    }
    ellipse(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.ellipse(t, i, r, e, a);
        return this.draw(h), h;
    }
    circle(t, i, r, e) {
        let a = /*#__PURE__*/ this.gen.circle(t, i, r, e);
        return this.draw(a), a;
    }
    linearPath(t, i) {
        let r = /*#__PURE__*/ this.gen.linearPath(t, i);
        return this.draw(r), r;
    }
    polygon(t, i) {
        let r = /*#__PURE__*/ this.gen.polygon(t, i);
        return this.draw(r), r;
    }
    arc(t, i, r, e, a, h, s = false, l) {
        let o = /*#__PURE__*/ this.gen.arc(t, i, r, e, a, h, s, l);
        return this.draw(o), o;
    }
    curve(t, i) {
        let r = /*#__PURE__*/ this.gen.curve(t, i);
        return this.draw(r), r;
    }
    path(t, i) {
        let r = /*#__PURE__*/ this.gen.path(t, i);
        return this.draw(r), r;
    }
}, Ht = "http://www.w3.org/2000/svg", ge = class {
    static{
        m$1(this, "ot");
    }
    constructor(t, i){
        this.svg = t, this.gen = new Mt(i);
    }
    draw(t) {
        let i = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = /*#__PURE__*/ e.createElementNS(Ht, "g"), h = t.options.fixedDecimalPlaceDigits;
        for (let s of i){
            let l = null;
            switch(s.type){
                case "path":
                    l = /*#__PURE__*/ e.createElementNS(Ht, "path"), l.setAttribute("d", /*#__PURE__*/ this.opsToPath(s, h)), l.setAttribute("stroke", r.stroke), l.setAttribute("stroke-width", r.strokeWidth + ""), l.setAttribute("fill", "none"), r.strokeLineDash && l.setAttribute("stroke-dasharray", /*#__PURE__*/ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
                    break;
                case "fillPath":
                    l = /*#__PURE__*/ e.createElementNS(Ht, "path"), l.setAttribute("d", /*#__PURE__*/ this.opsToPath(s, h)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
                    break;
                case "fillSketch":
                    l = /*#__PURE__*/ this.fillSketch(e, s, r);
            }
            l && a.appendChild(l);
        }
        return a;
    }
    fillSketch(t, i, r) {
        let e = r.fillWeight;
        e < 0 && (e = r.strokeWidth / 2);
        let a = /*#__PURE__*/ t.createElementNS(Ht, "path");
        return a.setAttribute("d", /*#__PURE__*/ this.opsToPath(i, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /*#__PURE__*/ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(t, i) {
        return this.gen.opsToPath(t, i);
    }
    line(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.line(t, i, r, e, a);
        return this.draw(h);
    }
    rectangle(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.rectangle(t, i, r, e, a);
        return this.draw(h);
    }
    ellipse(t, i, r, e, a) {
        let h = /*#__PURE__*/ this.gen.ellipse(t, i, r, e, a);
        return this.draw(h);
    }
    circle(t, i, r, e) {
        let a = /*#__PURE__*/ this.gen.circle(t, i, r, e);
        return this.draw(a);
    }
    linearPath(t, i) {
        let r = /*#__PURE__*/ this.gen.linearPath(t, i);
        return this.draw(r);
    }
    polygon(t, i) {
        let r = /*#__PURE__*/ this.gen.polygon(t, i);
        return this.draw(r);
    }
    arc(t, i, r, e, a, h, s = false, l) {
        let o = /*#__PURE__*/ this.gen.arc(t, i, r, e, a, h, s, l);
        return this.draw(o);
    }
    curve(t, i) {
        let r = /*#__PURE__*/ this.gen.curve(t, i);
        return this.draw(r);
    }
    path(t, i) {
        let r = /*#__PURE__*/ this.gen.path(t, i);
        return this.draw(r);
    }
}, v = {
    canvas: /*#__PURE__*/ m$1((c, t)=>new de(c, t), "canvas"),
    svg: /*#__PURE__*/ m$1((c, t)=>new ge(c, t), "svg"),
    generator: /*#__PURE__*/ m$1((c)=>new Mt(c), "generator"),
    newSeed: /*#__PURE__*/ m$1(()=>Mt.newSeed(), "newSeed")
};
var hr = /*#__PURE__*/ m$1((c, t)=>{
    var i = c.x, r = c.y, e = t.x - i, a = t.y - r, h = c.width / 2, s = c.height / 2, l, o;
    return Math.abs(a) * h > Math.abs(e) * s ? (a < 0 && (s = -s), l = a === 0 ? 0 : s * e / a, o = s) : (e < 0 && (h = -h), l = h, o = e === 0 ? 0 : h * a / e), {
        x: i + l,
        y: r + o
    };
}, "intersectRect"), yt = hr;
function pr(c, t) {
    t && c.attr("style", t);
}
m$1(pr, "applyStyle");
async function mr(c) {
    let t = /*#__PURE__*/ ia(/*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = /*#__PURE__*/ t.append("xhtml:div"), r = /*#__PURE__*/ mr$1(), e = c.label;
    c.label && nr$1(c.label) && (e = await qo(/*#__PURE__*/ c.label.replace(hn.lineBreakRegex, `
`), r));
    let h = '<span class="' + (c.isNode ? "nodeLabel" : "edgeLabel") + '" ' + (c.labelStyle ? 'style="' + c.labelStyle + '"' : "") + ">" + e + "</span>";
    return i.html(/*#__PURE__*/ ot$1(h, r)), pr(i, c.labelStyle), i.style("display", "inline-block"), i.style("padding-right", "1px"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(mr, "addHtmlLabel");
var fr = /*#__PURE__*/ m$1(async (c, t, i, r)=>{
    let e = c || "";
    if (typeof e == "object" && (e = e[0]), Mo(mr$1().flowchart.htmlLabels)) {
        e = /*#__PURE__*/ e.replace(/\\n|\n/g, "<br />"), pt$1.info("vertexText" + e);
        let a = {
            isNode: r,
            label: /*#__PURE__*/ Yt$1(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: t && t.replace("fill:", "color:")
        };
        return await mr(a);
    } else {
        let a = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "text");
        a.setAttribute("style", /*#__PURE__*/ t.replace("color:", "fill:"));
        let h = [];
        typeof e == "string" ? h = /*#__PURE__*/ e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
        for (let s of h){
            let l = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), i ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = /*#__PURE__*/ s.trim(), a.appendChild(l);
        }
        return a;
    }
}, "createLabel"), Rt = fr;
var st = /*#__PURE__*/ m$1((c, t, i, r, e)=>[
        "M",
        c + e,
        t,
        "H",
        c + i - e,
        "A",
        e,
        e,
        0,
        0,
        1,
        c + i,
        t + e,
        "V",
        t + r - e,
        "A",
        e,
        e,
        0,
        0,
        1,
        c + i - e,
        t + r,
        "H",
        c + e,
        "A",
        e,
        e,
        0,
        0,
        1,
        c,
        t + r - e,
        "V",
        t + e,
        "A",
        e,
        e,
        0,
        0,
        1,
        c + e,
        t,
        "Z"
    ].join(" "), "createRoundedRectPathD");
var He = /*#__PURE__*/ m$1(async (c, t)=>{
    pt$1.info("Creating subgraph rect for ", t.id, t);
    let i = /*#__PURE__*/ mr$1(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p = /*#__PURE__*/ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /*#__PURE__*/ Mo(i.flowchart.htmlLabels), m$1 = /*#__PURE__*/ p.insert("g").attr("class", "cluster-label "), d = await Rr$1(m$1, t.label, {
        style: t.labelStyle,
        useHtmlLabels: f,
        isNode: true
    }), g = /*#__PURE__*/ d.getBBox();
    if (Mo(i.flowchart.htmlLabels)) {
        let T = d.children[0], R = /*#__PURE__*/ ia(d);
        g = /*#__PURE__*/ T.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
    }
    let y = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
    t.width <= g.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    let u = t.height, b = t.x - y / 2, S$1 = t.y - u / 2;
    pt$1.trace("Data ", t, /*#__PURE__*/ JSON.stringify(t));
    let k;
    if (t.look === "handDrawn") {
        let T = /*#__PURE__*/ v.svg(p), R = /*#__PURE__*/ S(t, {
            roughness: .7,
            fill: a,
            stroke: h,
            fillWeight: 3,
            seed: e
        }), E = /*#__PURE__*/ T.path(/*#__PURE__*/ st(b, S$1, y, u, 0), R);
        k = /*#__PURE__*/ p.insert(()=>(pt$1.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /*#__PURE__*/ o.join(";")), k.select("path").attr("style", /*#__PURE__*/ n$1.join(";").replace("fill", "stroke"));
    } else k = /*#__PURE__*/ p.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u);
    let { subGraphTitleTopMargin: w } = n(i);
    if (m$1.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), s) {
        let T = /*#__PURE__*/ m$1.select("span");
        T && T.attr("style", s);
    }
    let B = /*#__PURE__*/ k.node().getBBox();
    return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(T) {
        return yt(t, T);
    }, {
        cluster: p,
        labelBBox: g
    };
}, "rect"), dr = /*#__PURE__*/ m$1((c, t)=>{
    let i = /*#__PURE__*/ c.insert("g").attr("class", "note-cluster").attr("id", t.id), r = /*#__PURE__*/ i.insert("rect", ":first-child"), e = 0 * t.padding, a = e / 2;
    r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + e).attr("height", t.height + e).attr("fill", "none");
    let h = /*#__PURE__*/ r.node().getBBox();
    return t.width = h.width, t.height = h.height, t.intersect = function(s) {
        return yt(t, s);
    }, {
        cluster: i,
        labelBBox: {
            width: 0,
            height: 0
        }
    };
}, "noteGroup"), gr = /*#__PURE__*/ m$1(async (c, t)=>{
    let i = /*#__PURE__*/ mr$1(), { themeVariables: r, handDrawnSeed: e } = i, { altBackground: a, compositeBackground: h, compositeTitleBackground: s, nodeBorder: l } = r, o = /*#__PURE__*/ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), n = /*#__PURE__*/ o.insert("g", ":first-child"), p = /*#__PURE__*/ o.insert("g").attr("class", "cluster-label"), f = /*#__PURE__*/ o.append("rect"), m = /*#__PURE__*/ p.node().appendChild(await Rt(t.label, t.labelStyle, void 0, true)), d = /*#__PURE__*/ m.getBBox();
    if (Mo(i.flowchart.htmlLabels)) {
        let E = m.children[0], L = /*#__PURE__*/ ia(m);
        d = /*#__PURE__*/ E.getBoundingClientRect(), L.attr("width", d.width), L.attr("height", d.height);
    }
    let g = 0 * t.padding, y = g / 2, u = (t.width <= d.width + t.padding ? d.width + t.padding : t.width) + g;
    t.width <= d.width + t.padding ? t.diff = (u - t.width) / 2 - t.padding : t.diff = -t.padding;
    let b = t.height + g, S = t.height + g - d.height - 6, k = t.x - u / 2, w = t.y - b / 2;
    t.width = u;
    let B = t.y - t.height / 2 - y + d.height + 2, T;
    if (t.look === "handDrawn") {
        let E = /*#__PURE__*/ t.cssClasses.includes("statediagram-cluster-alt"), L = /*#__PURE__*/ v.svg(o), O = t.rx || t.ry ? L.path(/*#__PURE__*/ st(k, w, u, b, 10), {
            roughness: .7,
            fill: s,
            fillStyle: "solid",
            stroke: l,
            seed: e
        }) : L.rectangle(k, w, u, b, {
            seed: e
        });
        T = /*#__PURE__*/ o.insert(()=>O, ":first-child");
        let V = /*#__PURE__*/ L.rectangle(k, B, u, S, {
            fill: E ? a : h,
            fillStyle: E ? "hachure" : "solid",
            stroke: l,
            seed: e
        });
        T = /*#__PURE__*/ o.insert(()=>O, ":first-child"), f = /*#__PURE__*/ o.insert(()=>V);
    } else T = /*#__PURE__*/ n.insert("rect", ":first-child"), T.attr("class", "outer").attr("x", k).attr("y", w).attr("width", u).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", k).attr("y", B).attr("width", u).attr("height", S);
    p.attr("transform", `translate(${t.x - d.width / 2}, ${w + 1 - (Mo(i.flowchart.htmlLabels) ? 0 : 3)})`);
    let R = /*#__PURE__*/ T.node().getBBox();
    return t.height = R.height, t.offsetX = 0, t.offsetY = d.height - t.padding / 2, t.labelBBox = d, t.intersect = function(E) {
        return yt(t, E);
    }, {
        cluster: o,
        labelBBox: d
    };
}, "roundedWithTitle"), ur = /*#__PURE__*/ m$1(async (c, t)=>{
    pt$1.info("Creating subgraph rect for ", t.id, t);
    let i = /*#__PURE__*/ mr$1(), { themeVariables: r, handDrawnSeed: e } = i, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: l, borderStyles: o, backgroundStyles: n$1 } = m(t), p = /*#__PURE__*/ c.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /*#__PURE__*/ Mo(i.flowchart.htmlLabels), m$1 = /*#__PURE__*/ p.insert("g").attr("class", "cluster-label "), d = await Rr$1(m$1, t.label, {
        style: t.labelStyle,
        useHtmlLabels: f,
        isNode: true,
        width: t.width
    }), g = /*#__PURE__*/ d.getBBox();
    if (Mo(i.flowchart.htmlLabels)) {
        let T = d.children[0], R = /*#__PURE__*/ ia(d);
        g = /*#__PURE__*/ T.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
    }
    let y = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
    t.width <= g.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    let u = t.height, b = t.x - y / 2, S$1 = t.y - u / 2;
    pt$1.trace("Data ", t, /*#__PURE__*/ JSON.stringify(t));
    let k;
    if (t.look === "handDrawn") {
        let T = /*#__PURE__*/ v.svg(p), R = /*#__PURE__*/ S(t, {
            roughness: .7,
            fill: a,
            stroke: h,
            fillWeight: 4,
            seed: e
        }), E = /*#__PURE__*/ T.path(/*#__PURE__*/ st(b, S$1, y, u, t.rx), R);
        k = /*#__PURE__*/ p.insert(()=>(pt$1.debug("Rough node insert CXC", E), E), ":first-child"), k.select("path:nth-child(2)").attr("style", /*#__PURE__*/ o.join(";")), k.select("path").attr("style", /*#__PURE__*/ n$1.join(";").replace("fill", "stroke"));
    } else k = /*#__PURE__*/ p.insert("rect", ":first-child"), k.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", y).attr("height", u);
    let { subGraphTitleTopMargin: w } = n(i);
    if (m$1.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), s) {
        let T = /*#__PURE__*/ m$1.select("span");
        T && T.attr("style", s);
    }
    let B = /*#__PURE__*/ k.node().getBBox();
    return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(T) {
        return yt(t, T);
    }, {
        cluster: p,
        labelBBox: g
    };
}, "kanbanSection"), yr = /*#__PURE__*/ m$1((c, t)=>{
    let i = /*#__PURE__*/ mr$1(), { themeVariables: r, handDrawnSeed: e } = i, { nodeBorder: a } = r, h = /*#__PURE__*/ c.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = /*#__PURE__*/ h.insert("g", ":first-child"), l = 0 * t.padding, o = t.width + l;
    t.diff = -t.padding;
    let n = t.height + l, p = t.x - o / 2, f = t.y - n / 2;
    t.width = o;
    let m;
    if (t.look === "handDrawn") {
        let y = /*#__PURE__*/ v.svg(h).rectangle(p, f, o, n, {
            fill: "lightgrey",
            roughness: .5,
            strokeLineDash: [
                5
            ],
            stroke: a,
            seed: e
        });
        m = /*#__PURE__*/ h.insert(()=>y, ":first-child");
    } else m = /*#__PURE__*/ s.insert("rect", ":first-child"), m.attr("class", "divider").attr("x", p).attr("y", f).attr("width", o).attr("height", n).attr("data-look", t.look);
    let d = /*#__PURE__*/ m.node().getBBox();
    return t.height = d.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(g) {
        return yt(t, g);
    }, {
        cluster: h,
        labelBBox: {}
    };
}, "divider"), xr = He, br = {
    rect: He,
    squareRect: xr,
    roundedWithTitle: gr,
    noteGroup: dr,
    divider: yr,
    kanbanSection: ur
}, Ve = new Map, xa = /*#__PURE__*/ m$1(async (c, t)=>{
    let i = t.shape || "rect", r = await br[i](c, t);
    return Ve.set(t.id, r), r;
}, "insertCluster");
var ba = /*#__PURE__*/ m$1(()=>{
    Ve = new Map;
}, "clear");
function Sr(c, t) {
    return c.intersect(t);
}
m$1(Sr, "intersectNode");
var We = Sr;
function wr(c, t, i, r) {
    var e = c.x, a = c.y, h = e - r.x, s = a - r.y, l = /*#__PURE__*/ Math.sqrt(t * t * s * s + i * i * h * h), o = /*#__PURE__*/ Math.abs(t * i * h / l);
    r.x < e && (o = -o);
    var n = /*#__PURE__*/ Math.abs(t * i * s / l);
    return r.y < a && (n = -n), {
        x: e + o,
        y: a + n
    };
}
m$1(wr, "intersectEllipse");
var qt = wr;
function Nr(c, t, i) {
    return qt(c, t, t, i);
}
m$1(Nr, "intersectCircle");
var Ie = Nr;
function $r(c, t, i, r) {
    {
        let e = t.y - c.y, a = c.x - t.x, h = t.x * c.y - c.x * t.y, s = e * i.x + a * i.y + h, l = e * r.x + a * r.y + h, o = 1e-6;
        if (s !== 0 && l !== 0 && Fe(s, l)) return;
        let n = r.y - i.y, p = i.x - r.x, f = r.x * i.y - i.x * r.y, m = n * c.x + p * c.y + f, d = n * t.x + p * t.y + f;
        if (Math.abs(m) < o && Math.abs(d) < o && Fe(m, d)) return;
        let g = e * p - n * a;
        if (g === 0) return;
        let y = /*#__PURE__*/ Math.abs(g / 2), u = a * f - p * h, b = u < 0 ? (u - y) / g : (u + y) / g;
        u = n * h - e * f;
        let S = u < 0 ? (u - y) / g : (u + y) / g;
        return {
            x: b,
            y: S
        };
    }
}
m$1($r, "intersectLine");
function Fe(c, t) {
    return c * t > 0;
}
m$1(Fe, "sameSign");
var _e = $r;
function Dr(c, t, i) {
    let r = c.x, e = c.y, a = [], h = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
    typeof t.forEach == "function" ? t.forEach(function(n) {
        h = /*#__PURE__*/ Math.min(h, n.x), s = /*#__PURE__*/ Math.min(s, n.y);
    }) : (h = /*#__PURE__*/ Math.min(h, t.x), s = /*#__PURE__*/ Math.min(s, t.y));
    let l = r - c.width / 2 - h, o = e - c.height / 2 - s;
    for(let n = 0; n < t.length; n++){
        let p = t[n], f = t[n < t.length - 1 ? n + 1 : 0], m = /*#__PURE__*/ _e(c, i, {
            x: l + p.x,
            y: o + p.y
        }, {
            x: l + f.x,
            y: o + f.y
        });
        m && a.push(m);
    }
    return a.length ? (a.length > 1 && a.sort(function(n, p) {
        let f = n.x - i.x, m = n.y - i.y, d = /*#__PURE__*/ Math.sqrt(f * f + m * m), g = p.x - i.x, y = p.y - i.y, u = /*#__PURE__*/ Math.sqrt(g * g + y * y);
        return d < u ? -1 : d === u ? 0 : 1;
    }), a[0]) : c;
}
m$1(Dr, "intersectPolygon");
var ze = Dr;
var N = {
    node: We,
    circle: Ie,
    ellipse: qt,
    polygon: ze,
    rect: yt
};
function qe(c, t) {
    let { labelStyles: i } = m(t);
    t.labelStyle = i;
    let r = /*#__PURE__*/ P(t), e = r;
    r || (e = "anchor");
    let a = /*#__PURE__*/ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = 1, { cssStyles: s } = t, l = /*#__PURE__*/ v.svg(a), o = /*#__PURE__*/ S(t, {
        fill: "black",
        stroke: "none",
        fillStyle: "solid"
    });
    t.look !== "handDrawn" && (o.roughness = 0);
    let n = /*#__PURE__*/ l.circle(0, 0, h * 2, o), p = /*#__PURE__*/ a.insert(()=>n, ":first-child");
    return p.attr("class", "anchor").attr("style", /*#__PURE__*/ Vt$1(s)), D(t, p), t.intersect = function(f) {
        return pt$1.info("Circle intersect", t, h, f), N.circle(t, h, f);
    }, a;
}
m$1(qe, "anchor");
function Xe(c, t, i, r, e, a, h) {
    let l = (c + i) / 2, o = (t + r) / 2, n = /*#__PURE__*/ Math.atan2(r - t, i - c), p = (i - c) / 2, f = (r - t) / 2, m = p / e, d = f / a, g = /*#__PURE__*/ Math.sqrt(m ** 2 + d ** 2);
    if (g > 1) throw new Error("The given radii are too small to create an arc between the points.");
    let y = /*#__PURE__*/ Math.sqrt(1 - g ** 2), u = l + y * a * Math.sin(n) * (h ? -1 : 1), b = o - y * e * Math.cos(n) * (h ? -1 : 1), S = /*#__PURE__*/ Math.atan2((t - b) / a, (c - u) / e), w = Math.atan2((r - b) / a, (i - u) / e) - S;
    h && w < 0 && (w += 2 * Math.PI), !h && w > 0 && (w -= 2 * Math.PI);
    let B = [];
    for(let T = 0; T < 20; T++){
        let R = T / 19, E = S + R * w, L = u + e * Math.cos(E), O = b + a * Math.sin(E);
        B.push({
            x: L,
            y: O
        });
    }
    return B;
}
m$1(Xe, "generateArcPoints");
async function Ye(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.width + t.padding + 20, s = a.height + t.padding, l = s / 2, o = l / (2.5 + s / 50), { cssStyles: n } = t, p = [
        {
            x: h / 2,
            y: -s / 2
        },
        {
            x: -h / 2,
            y: -s / 2
        },
        .../*#__PURE__*/ Xe(-h / 2, -s / 2, -h / 2, s / 2, o, l, false),
        {
            x: h / 2,
            y: s / 2
        },
        .../*#__PURE__*/ Xe(h / 2, s / 2, h / 2, -s / 2, o, l, true)
    ], f = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = /*#__PURE__*/ H(p), g = /*#__PURE__*/ f.path(d, m$1), y = /*#__PURE__*/ e.insert(()=>g, ":first-child");
    return y.attr("class", "basic label-container"), n && t.look !== "handDrawn" && y.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${o / 2}, 0)`), D(t, y), t.intersect = function(u) {
        return N.polygon(t, p, u);
    }, e;
}
m$1(Ye, "bowTieRect");
function rt(c, t, i, r) {
    return c.insert("polygon", ":first-child").attr("points", /*#__PURE__*/ r.map(function(e) {
        return e.x + "," + e.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + i / 2 + ")");
}
m$1(rt, "insertPolygonShape");
async function Ze(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.height + t.padding, s = 12, l = a.width + t.padding + s, o = 0, n = l, p = -h, f = 0, m$1 = [
        {
            x: o + s,
            y: p
        },
        {
            x: n,
            y: p
        },
        {
            x: n,
            y: f
        },
        {
            x: o,
            y: f
        },
        {
            x: o,
            y: p + s
        },
        {
            x: o + s,
            y: p
        }
    ], d, { cssStyles: g } = t;
    if (t.look === "handDrawn") {
        let y = /*#__PURE__*/ v.svg(e), u = /*#__PURE__*/ S(t, {}), b = /*#__PURE__*/ H(m$1), S$1 = /*#__PURE__*/ y.path(b, u);
        d = /*#__PURE__*/ e.insert(()=>S$1, ":first-child").attr("transform", `translate(${-l / 2}, ${h / 2})`), g && d.attr("style", g);
    } else d = /*#__PURE__*/ rt(e, l, h, m$1);
    return r && d.attr("style", r), D(t, d), t.intersect = function(y) {
        return N.polygon(t, m$1, y);
    }, e;
}
m$1(Ze, "card");
function Ue(c, t) {
    let { nodeStyles: i } = m(t);
    t.label = "";
    let r = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, a = /*#__PURE__*/ Math.max(28, t.width ?? 0), h = [
        {
            x: 0,
            y: a / 2
        },
        {
            x: a / 2,
            y: 0
        },
        {
            x: 0,
            y: -a / 2
        },
        {
            x: -a / 2,
            y: 0
        }
    ], s = /*#__PURE__*/ v.svg(r), l = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    let o = /*#__PURE__*/ H(h), n = /*#__PURE__*/ s.path(o, l), p = /*#__PURE__*/ r.insert(()=>n, ":first-child");
    return e && t.look !== "handDrawn" && p.selectAll("path").attr("style", e), i && t.look !== "handDrawn" && p.selectAll("path").attr("style", i), t.width = 28, t.height = 28, t.intersect = function(f) {
        return N.polygon(t, h, f);
    }, r;
}
m$1(Ue, "choice");
async function Xt(c, t, i) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.labelStyle = r;
    let { shapeSvg: a, bbox: h, halfPadding: s } = await C(c, t, /*#__PURE__*/ P(t)), l = i?.padding ?? s, o = h.width / 2 + l, n, { cssStyles: p } = t;
    if (t.look === "handDrawn") {
        let f = /*#__PURE__*/ v.svg(a), m = /*#__PURE__*/ S(t, {}), d = /*#__PURE__*/ f.circle(0, 0, o * 2, m);
        n = /*#__PURE__*/ a.insert(()=>d, ":first-child"), n.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(p));
    } else n = /*#__PURE__*/ a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", e).attr("r", o).attr("cx", 0).attr("cy", 0);
    return D(t, n), t.calcIntersect = function(f, m) {
        let d = f.width / 2;
        return N.circle(f, d, m);
    }, t.intersect = function(f) {
        return pt$1.info("Circle intersect", t, o, f), N.circle(t, o, f);
    }, a;
}
m$1(Xt, "circle");
function vr(c) {
    let t = /*#__PURE__*/ Math.cos(Math.PI / 4), i = /*#__PURE__*/ Math.sin(Math.PI / 4), r = c * 2, e = {
        x: r / 2 * t,
        y: r / 2 * i
    }, a = {
        x: -(r / 2) * t,
        y: r / 2 * i
    }, h = {
        x: -(r / 2) * t,
        y: -(r / 2) * i
    }, s = {
        x: r / 2 * t,
        y: -(r / 2) * i
    };
    return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m$1(vr, "createLine");
function Qe(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i, t.label = "";
    let e = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), a = /*#__PURE__*/ Math.max(30, t?.width ?? 0), { cssStyles: h } = t, s = /*#__PURE__*/ v.svg(e), l = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    let o = /*#__PURE__*/ s.circle(0, 0, a * 2, l), n = /*#__PURE__*/ vr(a), p = /*#__PURE__*/ s.path(n, l), f = /*#__PURE__*/ e.insert(()=>o, ":first-child");
    return f.insert(()=>p), h && t.look !== "handDrawn" && f.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), D(t, f), t.intersect = function(m) {
        return pt$1.info("crossedCircle intersect", t, {
            radius: a,
            point: m
        }), N.circle(t, a, m);
    }, e;
}
m$1(Qe, "crossedCircle");
function xt(c, t, i, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let f = s + p * n, m = c + i * Math.cos(f), d = t + i * Math.sin(f);
        h.push({
            x: -m,
            y: -d
        });
    }
    return h;
}
m$1(xt, "generateCirclePoints");
async function Je(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /*#__PURE__*/ Math.max(5, l * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ xt(s / 2, -l / 2, o, 30, -90, 0),
        {
            x: -s / 2 - o,
            y: o
        },
        .../*#__PURE__*/ xt(s / 2 + o * 2, -o, o, 20, -180, -270),
        .../*#__PURE__*/ xt(s / 2 + o * 2, o, o, 20, -90, -180),
        {
            x: -s / 2 - o,
            y: -l / 2
        },
        .../*#__PURE__*/ xt(s / 2, l / 2, o, 20, 0, 90)
    ], f = [
        {
            x: s / 2,
            y: -l / 2 - o
        },
        {
            x: -s / 2,
            y: -l / 2 - o
        },
        .../*#__PURE__*/ xt(s / 2, -l / 2, o, 20, -90, 0),
        {
            x: -s / 2 - o,
            y: -o
        },
        .../*#__PURE__*/ xt(s / 2 + s * .1, -o, o, 20, -180, -270),
        .../*#__PURE__*/ xt(s / 2 + s * .1, o, o, 20, -90, -180),
        {
            x: -s / 2 - o,
            y: l / 2
        },
        .../*#__PURE__*/ xt(s / 2, l / 2, o, 20, 0, 90),
        {
            x: -s / 2,
            y: l / 2 + o
        },
        {
            x: s / 2,
            y: l / 2 + o
        }
    ], m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let y = /*#__PURE__*/ H(p).replace("Z", ""), u = /*#__PURE__*/ m$1.path(y, d), b = /*#__PURE__*/ H(f), S$1 = /*#__PURE__*/ m$1.path(b, {
        ...d
    }), k = /*#__PURE__*/ e.insert("g", ":first-child");
    return k.insert(()=>S$1, ":first-child").attr("stroke-opacity", 0), k.insert(()=>u, ":first-child"), k.attr("class", "text"), n && t.look !== "handDrawn" && k.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${o}, 0)`), h.attr("transform", `translate(${-s / 2 + o - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
        return N.polygon(t, f, w);
    }, e;
}
m$1(Je, "curlyBraceLeft");
function bt(c, t, i, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let f = s + p * n, m = c + i * Math.cos(f), d = t + i * Math.sin(f);
        h.push({
            x: m,
            y: d
        });
    }
    return h;
}
m$1(bt, "generateCirclePoints");
async function Ke(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /*#__PURE__*/ Math.max(5, l * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ bt(s / 2, -l / 2, o, 20, -90, 0),
        {
            x: s / 2 + o,
            y: -o
        },
        .../*#__PURE__*/ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
        .../*#__PURE__*/ bt(s / 2 + o * 2, o, o, 20, -90, -180),
        {
            x: s / 2 + o,
            y: l / 2
        },
        .../*#__PURE__*/ bt(s / 2, l / 2, o, 20, 0, 90)
    ], f = [
        {
            x: -s / 2,
            y: -l / 2 - o
        },
        {
            x: s / 2,
            y: -l / 2 - o
        },
        .../*#__PURE__*/ bt(s / 2, -l / 2, o, 20, -90, 0),
        {
            x: s / 2 + o,
            y: -o
        },
        .../*#__PURE__*/ bt(s / 2 + o * 2, -o, o, 20, -180, -270),
        .../*#__PURE__*/ bt(s / 2 + o * 2, o, o, 20, -90, -180),
        {
            x: s / 2 + o,
            y: l / 2
        },
        .../*#__PURE__*/ bt(s / 2, l / 2, o, 20, 0, 90),
        {
            x: s / 2,
            y: l / 2 + o
        },
        {
            x: -s / 2,
            y: l / 2 + o
        }
    ], m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let y = /*#__PURE__*/ H(p).replace("Z", ""), u = /*#__PURE__*/ m$1.path(y, d), b = /*#__PURE__*/ H(f), S$1 = /*#__PURE__*/ m$1.path(b, {
        ...d
    }), k = /*#__PURE__*/ e.insert("g", ":first-child");
    return k.insert(()=>S$1, ":first-child").attr("stroke-opacity", 0), k.insert(()=>u, ":first-child"), k.attr("class", "text"), n && t.look !== "handDrawn" && k.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(${-o}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
        return N.polygon(t, f, w);
    }, e;
}
m$1(Ke, "curlyBraceRight");
function K(c, t, i, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let f = s + p * n, m = c + i * Math.cos(f), d = t + i * Math.sin(f);
        h.push({
            x: -m,
            y: -d
        });
    }
    return h;
}
m$1(K, "generateCirclePoints");
async function ts(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), o = /*#__PURE__*/ Math.max(5, l * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ K(s / 2, -l / 2, o, 30, -90, 0),
        {
            x: -s / 2 - o,
            y: o
        },
        .../*#__PURE__*/ K(s / 2 + o * 2, -o, o, 20, -180, -270),
        .../*#__PURE__*/ K(s / 2 + o * 2, o, o, 20, -90, -180),
        {
            x: -s / 2 - o,
            y: -l / 2
        },
        .../*#__PURE__*/ K(s / 2, l / 2, o, 20, 0, 90)
    ], f = [
        .../*#__PURE__*/ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
        {
            x: s / 2 - o / 2,
            y: o
        },
        .../*#__PURE__*/ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
        .../*#__PURE__*/ K(-s / 2 - o / 2, o, o, 20, -90, 0),
        {
            x: s / 2 - o / 2,
            y: -o
        },
        .../*#__PURE__*/ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
    ], m$1 = [
        {
            x: s / 2,
            y: -l / 2 - o
        },
        {
            x: -s / 2,
            y: -l / 2 - o
        },
        .../*#__PURE__*/ K(s / 2, -l / 2, o, 20, -90, 0),
        {
            x: -s / 2 - o,
            y: -o
        },
        .../*#__PURE__*/ K(s / 2 + o * 2, -o, o, 20, -180, -270),
        .../*#__PURE__*/ K(s / 2 + o * 2, o, o, 20, -90, -180),
        {
            x: -s / 2 - o,
            y: l / 2
        },
        .../*#__PURE__*/ K(s / 2, l / 2, o, 20, 0, 90),
        {
            x: -s / 2,
            y: l / 2 + o
        },
        {
            x: s / 2 - o - o / 2,
            y: l / 2 + o
        },
        .../*#__PURE__*/ K(-s / 2 + o + o / 2, -l / 2, o, 20, -90, -180),
        {
            x: s / 2 - o / 2,
            y: o
        },
        .../*#__PURE__*/ K(-s / 2 - o / 2, -o, o, 20, 0, 90),
        .../*#__PURE__*/ K(-s / 2 - o / 2, o, o, 20, -90, 0),
        {
            x: s / 2 - o / 2,
            y: -o
        },
        .../*#__PURE__*/ K(-s / 2 + o + o / 2, l / 2, o, 30, -180, -270)
    ], d = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ S(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let u = /*#__PURE__*/ H(p).replace("Z", ""), b = /*#__PURE__*/ d.path(u, g), k = /*#__PURE__*/ H(f).replace("Z", ""), w = /*#__PURE__*/ d.path(k, g), B = /*#__PURE__*/ H(m$1), T = /*#__PURE__*/ d.path(B, {
        ...g
    }), R = /*#__PURE__*/ e.insert("g", ":first-child");
    return R.insert(()=>T, ":first-child").attr("stroke-opacity", 0), R.insert(()=>b, ":first-child"), R.insert(()=>w, ":first-child"), R.attr("class", "text"), n && t.look !== "handDrawn" && R.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${o - o / 4}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, R), t.intersect = function(E) {
        return N.polygon(t, m$1, E);
    }, e;
}
m$1(ts, "curlyBraces");
async function es(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = 80, s = 20, l = /*#__PURE__*/ Math.max(h, (a.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), o = /*#__PURE__*/ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = o / 2, { cssStyles: p } = t, f = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = l, g = o, y = d - n, u = g / 4, b = [
        {
            x: y,
            y: 0
        },
        {
            x: u,
            y: 0
        },
        {
            x: 0,
            y: g / 2
        },
        {
            x: u,
            y: g
        },
        {
            x: y,
            y: g
        },
        .../*#__PURE__*/ Nt(-y, -g / 2, n, 50, 270, 90)
    ], S$1 = /*#__PURE__*/ H(b), k = /*#__PURE__*/ f.path(S$1, m$1), w = /*#__PURE__*/ e.insert(()=>k, ":first-child");
    return w.attr("class", "basic label-container"), p && t.look !== "handDrawn" && w.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && w.selectChildren("path").attr("style", r), w.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, w), t.intersect = function(B) {
        return N.polygon(t, b, B);
    }, e;
}
m$1(es, "curvedTrapezoid");
var Mr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c},${t + a}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `a${e},${a} 0,0,0 ${-i},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `l0,${-r}`
    ].join(" "), "createCylinderPathD"), kr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c},${t + a}`,
        `M${c + i},${t + a}`,
        `a${e},${a} 0,0,0 ${-i},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `l0,${-r}`
    ].join(" "), "createOuterCylinderPathD"), Pr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c - i / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 ${i},0`
    ].join(" "), "createInnerCylinderPathD");
async function ss(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + t.padding, t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n = /*#__PURE__*/ Math.max(a.height + o + t.padding, t.height ?? 0), p, { cssStyles: f } = t;
    if (t.look === "handDrawn") {
        let m = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ kr(0, 0, s, n, l, o), g = /*#__PURE__*/ Pr(0, o, s, n, l, o), y = /*#__PURE__*/ m.path(d, /*#__PURE__*/ S(t, {})), u = /*#__PURE__*/ m.path(g, /*#__PURE__*/ S(t, {
            fill: "none"
        }));
        p = /*#__PURE__*/ e.insert(()=>u, ":first-child"), p = /*#__PURE__*/ e.insert(()=>y, ":first-child"), p.attr("class", "basic label-container"), f && p.attr("style", f);
    } else {
        let m = /*#__PURE__*/ Mr(0, 0, s, n, l, o);
        p = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(f)).attr("style", r);
    }
    return p.attr("label-offset-y", o), p.attr("transform", `translate(${-s / 2}, ${-(n / 2 + o)})`), D(t, p), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(m) {
        let d = /*#__PURE__*/ N.rect(t, m), g = d.x - (t.x ?? 0);
        if (l != 0 && (Math.abs(g) < (t.width ?? 0) / 2 || Math.abs(g) == (t.width ?? 0) / 2 && Math.abs(d.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
            let y = o * o * (1 - g * g / (l * l));
            y > 0 && (y = /*#__PURE__*/ Math.sqrt(y)), y = o - y, m.y - (t.y ?? 0) > 0 && (y = -y), d.y += y;
        }
        return d;
    }, e;
}
m$1(ss, "cylinder");
async function rs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = a.width + t.padding, l = a.height + t.padding, o = l * .2, n = -s / 2, p = -l / 2 - o / 2, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let g = [
        {
            x: n,
            y: p + o
        },
        {
            x: -n,
            y: p + o
        },
        {
            x: -n,
            y: -p
        },
        {
            x: n,
            y: -p
        },
        {
            x: n,
            y: p
        },
        {
            x: -n,
            y: p
        },
        {
            x: -n,
            y: p + o
        }
    ], y = /*#__PURE__*/ m$1.polygon(/*#__PURE__*/ g.map((b)=>[
            b.x,
            b.y
        ]), d), u = /*#__PURE__*/ e.insert(()=>y, ":first-child");
    return u.attr("class", "basic label-container"), f && t.look !== "handDrawn" && u.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), h.attr("transform", `translate(${n + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p + o + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), D(t, u), t.intersect = function(b) {
        return N.rect(t, b);
    }, e;
}
m$1(rs, "dividedRectangle");
async function as(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, halfPadding: h } = await C(c, t, /*#__PURE__*/ P(t)), l = a.width / 2 + h + 5, o = a.width / 2 + h, n, { cssStyles: p } = t;
    if (t.look === "handDrawn") {
        let f = /*#__PURE__*/ v.svg(e), m = /*#__PURE__*/ S(t, {
            roughness: .2,
            strokeWidth: 2.5
        }), d = /*#__PURE__*/ S(t, {
            roughness: .2,
            strokeWidth: 1.5
        }), g = /*#__PURE__*/ f.circle(0, 0, l * 2, m), y = /*#__PURE__*/ f.circle(0, 0, o * 2, d);
        n = /*#__PURE__*/ e.insert("g", ":first-child"), n.attr("class", /*#__PURE__*/ Vt$1(t.cssClasses)).attr("style", /*#__PURE__*/ Vt$1(p)), n.node()?.appendChild(g), n.node()?.appendChild(y);
    } else {
        n = /*#__PURE__*/ e.insert("g", ":first-child");
        let f = /*#__PURE__*/ n.insert("circle", ":first-child"), m = /*#__PURE__*/ n.insert("circle");
        n.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", l).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", r).attr("r", o).attr("cx", 0).attr("cy", 0);
    }
    return D(t, n), t.intersect = function(f) {
        return pt$1.info("DoubleCircle intersect", t, l, f), N.circle(t, l, f);
    }, e;
}
m$1(as, "doublecircle");
function os(c, t, { config: { themeVariables: i } }) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.label = "", t.labelStyle = r;
    let a = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), h = 7, { cssStyles: s } = t, l = /*#__PURE__*/ v.svg(a), { nodeBorder: o } = i, n = /*#__PURE__*/ S(t, {
        fillStyle: "solid"
    });
    t.look !== "handDrawn" && (n.roughness = 0);
    let p = /*#__PURE__*/ l.circle(0, 0, h * 2, n), f = /*#__PURE__*/ a.insert(()=>p, ":first-child");
    return f.selectAll("path").attr("style", `fill: ${o} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), e && t.look !== "handDrawn" && f.selectAll("path").attr("style", e), D(t, f), t.intersect = function(m) {
        return pt$1.info("filledCircle intersect", t, {
            radius: h,
            point: m
        }), N.circle(t, h, m);
    }, a;
}
m$1(os, "filledCircle");
async function is(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), l = s + a.height, o = s + a.height, n = [
        {
            x: 0,
            y: -l
        },
        {
            x: o,
            y: -l
        },
        {
            x: o / 2,
            y: 0
        }
    ], { cssStyles: p } = t, f = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = /*#__PURE__*/ H(n), g = /*#__PURE__*/ f.path(d, m$1), y = /*#__PURE__*/ e.insert(()=>g, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
    return p && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = s, t.height = l, D(t, y), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(u) {
        return pt$1.info("Triangle intersect", t, n, u), N.polygon(t, n, u);
    }, e;
}
m$1(is, "flippedTriangle");
function ns(c, t, { dir: i, config: { state: r, themeVariables: e } }) {
    let { nodeStyles: a } = m(t);
    t.label = "";
    let h = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, l = /*#__PURE__*/ Math.max(70, t?.width ?? 0), o = /*#__PURE__*/ Math.max(10, t?.height ?? 0);
    i === "LR" && (l = /*#__PURE__*/ Math.max(10, t?.width ?? 0), o = /*#__PURE__*/ Math.max(70, t?.height ?? 0));
    let n = -1 * l / 2, p = -1 * o / 2, f = /*#__PURE__*/ v.svg(h), m$1 = /*#__PURE__*/ S(t, {
        stroke: e.lineColor,
        fill: e.lineColor
    });
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = /*#__PURE__*/ f.rectangle(n, p, l, o, m$1), g = /*#__PURE__*/ h.insert(()=>d, ":first-child");
    s && t.look !== "handDrawn" && g.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), D(t, g);
    let y = r?.padding ?? 0;
    return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(u) {
        return N.rect(t, u);
    }, h;
}
m$1(ns, "forkJoin");
async function ls(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let e = 80, a = 50, { shapeSvg: h, bbox: s } = await C(c, t, /*#__PURE__*/ P(t)), l = /*#__PURE__*/ Math.max(e, s.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /*#__PURE__*/ Math.max(a, s.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = o / 2, { cssStyles: p } = t, f = /*#__PURE__*/ v.svg(h), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = [
        {
            x: -l / 2,
            y: -o / 2
        },
        {
            x: l / 2 - n,
            y: -o / 2
        },
        .../*#__PURE__*/ Nt(-l / 2 + n, 0, n, 50, 90, 270),
        {
            x: l / 2 - n,
            y: o / 2
        },
        {
            x: -l / 2,
            y: o / 2
        }
    ], g = /*#__PURE__*/ H(d), y = /*#__PURE__*/ f.path(g, m$1), u = /*#__PURE__*/ h.insert(()=>y, ":first-child");
    return u.attr("class", "basic label-container"), p && t.look !== "handDrawn" && u.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && u.selectChildren("path").attr("style", r), D(t, u), t.intersect = function(b) {
        return pt$1.info("Pill intersect", t, {
            radius: n,
            point: b
        }), N.polygon(t, d, b);
    }, h;
}
m$1(ls, "halfRoundedRectangle");
async function cs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.height + (t.padding ?? 0), s = a.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, o = /*#__PURE__*/ v.svg(e), n = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (n.roughness = 0, n.fillStyle = "solid");
    let p = s / 2, f = p / 6;
    p = p + f;
    let m$1 = h / 2, d = m$1 / 2, g = p - d, y = [
        {
            x: -g,
            y: -m$1
        },
        {
            x: 0,
            y: -m$1
        },
        {
            x: g,
            y: -m$1
        },
        {
            x: p,
            y: 0
        },
        {
            x: g,
            y: m$1
        },
        {
            x: 0,
            y: m$1
        },
        {
            x: -g,
            y: m$1
        },
        {
            x: -p,
            y: 0
        }
    ], u = /*#__PURE__*/ H(y), b = /*#__PURE__*/ o.path(u, n), S$1 = /*#__PURE__*/ e.insert(()=>b, ":first-child");
    return S$1.attr("class", "basic label-container"), l && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", l), r && t.look !== "handDrawn" && S$1.selectChildren("path").attr("style", r), t.width = s, t.height = h, D(t, S$1), t.intersect = function(k) {
        return N.polygon(t, y, k);
    }, e;
}
m$1(cs, "hexagon");
async function hs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.label = "", t.labelStyle = i;
    let { shapeSvg: e } = await C(c, t, /*#__PURE__*/ P(t)), a = /*#__PURE__*/ Math.max(30, t?.width ?? 0), h = /*#__PURE__*/ Math.max(30, t?.height ?? 0), { cssStyles: s } = t, l = /*#__PURE__*/ v.svg(e), o = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (o.roughness = 0, o.fillStyle = "solid");
    let n = [
        {
            x: 0,
            y: 0
        },
        {
            x: a,
            y: 0
        },
        {
            x: 0,
            y: h
        },
        {
            x: a,
            y: h
        }
    ], p = /*#__PURE__*/ H(n), f = /*#__PURE__*/ l.path(p, o), m$1 = /*#__PURE__*/ e.insert(()=>f, ":first-child");
    return m$1.attr("class", "basic label-container"), s && t.look !== "handDrawn" && m$1.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && m$1.selectChildren("path").attr("style", r), m$1.attr("transform", `translate(${-a / 2}, ${-h / 2})`), D(t, m$1), t.intersect = function(d) {
        return pt$1.info("Pill intersect", t, {
            points: n
        }), N.polygon(t, n, d);
    }, e;
}
m$1(hs, "hourglass");
async function ps(c, t, { config: { themeVariables: i, flowchart: r } }) {
    let { labelStyles: e } = m(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), l = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, l ?? 0);
    let { shapeSvg: o, bbox: n, label: p$1 } = await C(c, t, "icon-shape default"), f = t.pos === "t", m$1 = s, d = s, { nodeBorder: g } = i, { stylesMap: y } = p(t), u = -d / 2, b = -m$1 / 2, S$1 = t.label ? 8 : 0, k = /*#__PURE__*/ v.svg(o), w = /*#__PURE__*/ S(t, {
        stroke: "none",
        fill: "none"
    });
    t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
    let B = /*#__PURE__*/ k.rectangle(u, b, d, m$1, w), T = /*#__PURE__*/ Math.max(d, n.width), R = m$1 + n.height + S$1, E = /*#__PURE__*/ k.rectangle(-T / 2, -R / 2, T, R, {
        ...w,
        fill: "transparent",
        stroke: "none"
    }), L = /*#__PURE__*/ o.insert(()=>B, ":first-child"), O = /*#__PURE__*/ o.insert(()=>E);
    if (t.icon) {
        let V = /*#__PURE__*/ o.append("g");
        V.html(`<g>${await ve$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let G = /*#__PURE__*/ V.node().getBBox(), j = G.width, W = G.height, A = G.x, I = G.y;
        V.attr("transform", `translate(${-j / 2 - A},${f ? n.height / 2 + S$1 / 2 - W / 2 - I : -n.height / 2 - S$1 / 2 - W / 2 - I})`), V.attr("style", `color: ${y.get("stroke") ?? g};`);
    }
    return p$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${f ? -R / 2 : R / 2 - n.height})`), L.attr("transform", `translate(0,${f ? n.height / 2 + S$1 / 2 : -n.height / 2 - S$1 / 2})`), D(t, O), t.intersect = function(V) {
        if (pt$1.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
        let G = t.x ?? 0, j = t.y ?? 0, W = t.height ?? 0, A = [];
        return f ? A = [
            {
                x: G - n.width / 2,
                y: j - W / 2
            },
            {
                x: G + n.width / 2,
                y: j - W / 2
            },
            {
                x: G + n.width / 2,
                y: j - W / 2 + n.height + S$1
            },
            {
                x: G + d / 2,
                y: j - W / 2 + n.height + S$1
            },
            {
                x: G + d / 2,
                y: j + W / 2
            },
            {
                x: G - d / 2,
                y: j + W / 2
            },
            {
                x: G - d / 2,
                y: j - W / 2 + n.height + S$1
            },
            {
                x: G - n.width / 2,
                y: j - W / 2 + n.height + S$1
            }
        ] : A = [
            {
                x: G - d / 2,
                y: j - W / 2
            },
            {
                x: G + d / 2,
                y: j - W / 2
            },
            {
                x: G + d / 2,
                y: j - W / 2 + m$1
            },
            {
                x: G + n.width / 2,
                y: j - W / 2 + m$1
            },
            {
                x: G + n.width / 2 / 2,
                y: j + W / 2
            },
            {
                x: G - n.width / 2,
                y: j + W / 2
            },
            {
                x: G - n.width / 2,
                y: j - W / 2 + m$1
            },
            {
                x: G - d / 2,
                y: j - W / 2 + m$1
            }
        ], N.polygon(t, A, V);
    }, o;
}
m$1(ps, "icon");
async function ms(c, t, { config: { themeVariables: i, flowchart: r } }) {
    let { labelStyles: e } = m(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), l = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, l ?? 0);
    let { shapeSvg: o, bbox: n, label: p$1 } = await C(c, t, "icon-shape default"), f = 20, m$1 = t.label ? 8 : 0, d = t.pos === "t", { nodeBorder: g, mainBkg: y } = i, { stylesMap: u } = p(t), b = /*#__PURE__*/ v.svg(o), S$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
    let k = /*#__PURE__*/ u.get("fill");
    S$1.stroke = k ?? y;
    let w = /*#__PURE__*/ o.append("g");
    t.icon && w.html(`<g>${await ve$1(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
    })}</g>`);
    let B = /*#__PURE__*/ w.node().getBBox(), T = B.width, R = B.height, E = B.x, L = B.y, O = Math.max(T, R) * Math.SQRT2 + f * 2, V = /*#__PURE__*/ b.circle(0, 0, O, S$1), G = /*#__PURE__*/ Math.max(O, n.width), j = O + n.height + m$1, W = /*#__PURE__*/ b.rectangle(-G / 2, -j / 2, G, j, {
        ...S$1,
        fill: "transparent",
        stroke: "none"
    }), A = /*#__PURE__*/ o.insert(()=>V, ":first-child"), I = /*#__PURE__*/ o.insert(()=>W);
    return w.attr("transform", `translate(${-T / 2 - E},${d ? n.height / 2 + m$1 / 2 - R / 2 - L : -n.height / 2 - m$1 / 2 - R / 2 - L})`), w.attr("style", `color: ${u.get("stroke") ?? g};`), p$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${d ? -j / 2 : j / 2 - n.height})`), A.attr("transform", `translate(0,${d ? n.height / 2 + m$1 / 2 : -n.height / 2 - m$1 / 2})`), D(t, I), t.intersect = function(F) {
        return pt$1.info("iconSquare intersect", t, F), N.rect(t, F);
    }, o;
}
m$1(ms, "iconCircle");
async function fs(c, t, { config: { themeVariables: i, flowchart: r } }) {
    let { labelStyles: e } = m(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), l = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, l ?? 0);
    let { shapeSvg: o, bbox: n, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$1 = t.pos === "t", d = s + p$1 * 2, g = s + p$1 * 2, { nodeBorder: y, mainBkg: u } = i, { stylesMap: b } = p(t), S$1 = -g / 2, k = -d / 2, w = t.label ? 8 : 0, B = /*#__PURE__*/ v.svg(o), T = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
    let R = /*#__PURE__*/ b.get("fill");
    T.stroke = R ?? u;
    let E = /*#__PURE__*/ B.path(/*#__PURE__*/ st(S$1, k, g, d, 5), T), L = /*#__PURE__*/ Math.max(g, n.width), O = d + n.height + w, V = /*#__PURE__*/ B.rectangle(-L / 2, -O / 2, L, O, {
        ...T,
        fill: "transparent",
        stroke: "none"
    }), G = /*#__PURE__*/ o.insert(()=>E, ":first-child").attr("class", "icon-shape2"), j = /*#__PURE__*/ o.insert(()=>V);
    if (t.icon) {
        let W = /*#__PURE__*/ o.append("g");
        W.html(`<g>${await ve$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let A = /*#__PURE__*/ W.node().getBBox(), I = A.width, F = A.height, Q = A.x, it = A.y;
        W.attr("transform", `translate(${-I / 2 - Q},${m$1 ? n.height / 2 + w / 2 - F / 2 - it : -n.height / 2 - w / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return f.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${m$1 ? -O / 2 : O / 2 - n.height})`), G.attr("transform", `translate(0,${m$1 ? n.height / 2 + w / 2 : -n.height / 2 - w / 2})`), D(t, j), t.intersect = function(W) {
        if (pt$1.info("iconSquare intersect", t, W), !t.label) return N.rect(t, W);
        let A = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
        return m$1 ? Q = [
            {
                x: A - n.width / 2,
                y: I - F / 2
            },
            {
                x: A + n.width / 2,
                y: I - F / 2
            },
            {
                x: A + n.width / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A + g / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A + g / 2,
                y: I + F / 2
            },
            {
                x: A - g / 2,
                y: I + F / 2
            },
            {
                x: A - g / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A - n.width / 2,
                y: I - F / 2 + n.height + w
            }
        ] : Q = [
            {
                x: A - g / 2,
                y: I - F / 2
            },
            {
                x: A + g / 2,
                y: I - F / 2
            },
            {
                x: A + g / 2,
                y: I - F / 2 + d
            },
            {
                x: A + n.width / 2,
                y: I - F / 2 + d
            },
            {
                x: A + n.width / 2 / 2,
                y: I + F / 2
            },
            {
                x: A - n.width / 2,
                y: I + F / 2
            },
            {
                x: A - n.width / 2,
                y: I - F / 2 + d
            },
            {
                x: A - g / 2,
                y: I - F / 2 + d
            }
        ], N.polygon(t, Q, W);
    }, o;
}
m$1(fs, "iconRounded");
async function ds(c, t, { config: { themeVariables: i, flowchart: r } }) {
    let { labelStyles: e } = m(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), l = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, l ?? 0);
    let { shapeSvg: o, bbox: n, halfPadding: p$1, label: f } = await C(c, t, "icon-shape default"), m$1 = t.pos === "t", d = s + p$1 * 2, g = s + p$1 * 2, { nodeBorder: y, mainBkg: u } = i, { stylesMap: b } = p(t), S$1 = -g / 2, k = -d / 2, w = t.label ? 8 : 0, B = /*#__PURE__*/ v.svg(o), T = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
    let R = /*#__PURE__*/ b.get("fill");
    T.stroke = R ?? u;
    let E = /*#__PURE__*/ B.path(/*#__PURE__*/ st(S$1, k, g, d, .1), T), L = /*#__PURE__*/ Math.max(g, n.width), O = d + n.height + w, V = /*#__PURE__*/ B.rectangle(-L / 2, -O / 2, L, O, {
        ...T,
        fill: "transparent",
        stroke: "none"
    }), G = /*#__PURE__*/ o.insert(()=>E, ":first-child"), j = /*#__PURE__*/ o.insert(()=>V);
    if (t.icon) {
        let W = /*#__PURE__*/ o.append("g");
        W.html(`<g>${await ve$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let A = /*#__PURE__*/ W.node().getBBox(), I = A.width, F = A.height, Q = A.x, it = A.y;
        W.attr("transform", `translate(${-I / 2 - Q},${m$1 ? n.height / 2 + w / 2 - F / 2 - it : -n.height / 2 - w / 2 - F / 2 - it})`), W.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return f.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${m$1 ? -O / 2 : O / 2 - n.height})`), G.attr("transform", `translate(0,${m$1 ? n.height / 2 + w / 2 : -n.height / 2 - w / 2})`), D(t, j), t.intersect = function(W) {
        if (pt$1.info("iconSquare intersect", t, W), !t.label) return N.rect(t, W);
        let A = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
        return m$1 ? Q = [
            {
                x: A - n.width / 2,
                y: I - F / 2
            },
            {
                x: A + n.width / 2,
                y: I - F / 2
            },
            {
                x: A + n.width / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A + g / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A + g / 2,
                y: I + F / 2
            },
            {
                x: A - g / 2,
                y: I + F / 2
            },
            {
                x: A - g / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: A - n.width / 2,
                y: I - F / 2 + n.height + w
            }
        ] : Q = [
            {
                x: A - g / 2,
                y: I - F / 2
            },
            {
                x: A + g / 2,
                y: I - F / 2
            },
            {
                x: A + g / 2,
                y: I - F / 2 + d
            },
            {
                x: A + n.width / 2,
                y: I - F / 2 + d
            },
            {
                x: A + n.width / 2 / 2,
                y: I + F / 2
            },
            {
                x: A - n.width / 2,
                y: I + F / 2
            },
            {
                x: A - n.width / 2,
                y: I - F / 2 + d
            },
            {
                x: A - g / 2,
                y: I - F / 2 + d
            }
        ], N.polygon(t, Q, W);
    }, o;
}
m$1(ds, "iconSquare");
async function gs(c, t, { config: { flowchart: i } }) {
    let r = new Image;
    r.src = t?.img ?? "", await r.decode();
    let e = /*#__PURE__*/ Number(/*#__PURE__*/ r.naturalWidth.toString().replace("px", "")), a = /*#__PURE__*/ Number(/*#__PURE__*/ r.naturalHeight.toString().replace("px", ""));
    t.imageAspectRatio = e / a;
    let { labelStyles: h } = m(t);
    t.labelStyle = h;
    let s = i?.wrappingWidth;
    t.defaultWidth = i?.wrappingWidth;
    let l = /*#__PURE__*/ Math.max(t.label ? s ?? 0 : 0, t?.assetWidth ?? e), o = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, n = t.constraint === "on" ? o / t.imageAspectRatio : t?.assetHeight ?? a;
    t.width = /*#__PURE__*/ Math.max(o, s ?? 0);
    let { shapeSvg: p, bbox: f, label: m$1 } = await C(c, t, "image-shape default"), d = t.pos === "t", g = -o / 2, y = -n / 2, u = t.label ? 8 : 0, b = /*#__PURE__*/ v.svg(p), S$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
    let k = /*#__PURE__*/ b.rectangle(g, y, o, n, S$1), w = /*#__PURE__*/ Math.max(o, f.width), B = n + f.height + u, T = /*#__PURE__*/ b.rectangle(-w / 2, -B / 2, w, B, {
        ...S$1,
        fill: "none",
        stroke: "none"
    }), R = /*#__PURE__*/ p.insert(()=>k, ":first-child"), E = /*#__PURE__*/ p.insert(()=>T);
    if (t.img) {
        let L = /*#__PURE__*/ p.append("image");
        L.attr("href", t.img), L.attr("width", o), L.attr("height", n), L.attr("preserveAspectRatio", "none"), L.attr("transform", `translate(${-o / 2},${d ? B / 2 - n : -B / 2})`);
    }
    return m$1.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${d ? -n / 2 - f.height / 2 - u / 2 : n / 2 - f.height / 2 + u / 2})`), R.attr("transform", `translate(0,${d ? f.height / 2 + u / 2 : -f.height / 2 - u / 2})`), D(t, E), t.intersect = function(L) {
        if (pt$1.info("iconSquare intersect", t, L), !t.label) return N.rect(t, L);
        let O = t.x ?? 0, V = t.y ?? 0, G = t.height ?? 0, j = [];
        return d ? j = [
            {
                x: O - f.width / 2,
                y: V - G / 2
            },
            {
                x: O + f.width / 2,
                y: V - G / 2
            },
            {
                x: O + f.width / 2,
                y: V - G / 2 + f.height + u
            },
            {
                x: O + o / 2,
                y: V - G / 2 + f.height + u
            },
            {
                x: O + o / 2,
                y: V + G / 2
            },
            {
                x: O - o / 2,
                y: V + G / 2
            },
            {
                x: O - o / 2,
                y: V - G / 2 + f.height + u
            },
            {
                x: O - f.width / 2,
                y: V - G / 2 + f.height + u
            }
        ] : j = [
            {
                x: O - o / 2,
                y: V - G / 2
            },
            {
                x: O + o / 2,
                y: V - G / 2
            },
            {
                x: O + o / 2,
                y: V - G / 2 + n
            },
            {
                x: O + f.width / 2,
                y: V - G / 2 + n
            },
            {
                x: O + f.width / 2 / 2,
                y: V + G / 2
            },
            {
                x: O - f.width / 2,
                y: V + G / 2
            },
            {
                x: O - f.width / 2,
                y: V - G / 2 + n
            },
            {
                x: O - o / 2,
                y: V - G / 2 + n
            }
        ], N.polygon(t, j, L);
    }, p;
}
m$1(gs, "imageSquare");
async function us(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = [
        {
            x: 0,
            y: 0
        },
        {
            x: h,
            y: 0
        },
        {
            x: h + 3 * s / 6,
            y: -s
        },
        {
            x: -3 * s / 6,
            y: -s
        }
    ], o, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ S(t, {}), m = /*#__PURE__*/ H(l), d = /*#__PURE__*/ p.path(m, f);
        o = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && o.attr("style", n);
    } else o = /*#__PURE__*/ rt(e, h, s, l);
    return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p) {
        return N.polygon(t, l, p);
    }, e;
}
m$1(us, "inv_trapezoid");
async function Dt(c, t, i) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.labelStyle = r;
    let { shapeSvg: a, bbox: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(h.width + i.labelPaddingX * 2, t?.width || 0), l = /*#__PURE__*/ Math.max(h.height + i.labelPaddingY * 2, t?.height || 0), o = -s / 2, n = -l / 2, p, { rx: f, ry: m$1 } = t, { cssStyles: d } = t;
    if (i?.rx && i.ry && (f = i.rx, m$1 = i.ry), t.look === "handDrawn") {
        let g = /*#__PURE__*/ v.svg(a), y = /*#__PURE__*/ S(t, {}), u = f || m$1 ? g.path(/*#__PURE__*/ st(o, n, s, l, f || 0), y) : g.rectangle(o, n, s, l, y);
        p = /*#__PURE__*/ a.insert(()=>u, ":first-child"), p.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(d));
    } else p = /*#__PURE__*/ a.insert("rect", ":first-child"), p.attr("class", "basic label-container").attr("style", e).attr("rx", /*#__PURE__*/ Vt$1(f)).attr("ry", /*#__PURE__*/ Vt$1(m$1)).attr("x", o).attr("y", n).attr("width", s).attr("height", l);
    return D(t, p), t.calcIntersect = function(g, y) {
        return N.rect(g, y);
    }, t.intersect = function(g) {
        return N.rect(t, g);
    }, a;
}
m$1(Dt, "drawRect");
async function ys(c, t) {
    let { shapeSvg: i, bbox: r, label: e } = await C(c, t, "label"), a = /*#__PURE__*/ i.insert("rect", ":first-child");
    return a.attr("width", .1).attr("height", .1), i.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), D(t, a), t.intersect = function(l) {
        return N.rect(t, l);
    }, i;
}
m$1(ys, "labelRect");
async function xs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
        {
            x: 0,
            y: 0
        },
        {
            x: h + 3 * s / 6,
            y: 0
        },
        {
            x: h,
            y: -s
        },
        {
            x: -(3 * s) / 6,
            y: -s
        }
    ], o, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ S(t, {}), m = /*#__PURE__*/ H(l), d = /*#__PURE__*/ p.path(m, f);
        o = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && o.attr("style", n);
    } else o = /*#__PURE__*/ rt(e, h, s, l);
    return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p) {
        return N.polygon(t, l, p);
    }, e;
}
m$1(xs, "lean_left");
async function bs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
        {
            x: -3 * s / 6,
            y: 0
        },
        {
            x: h,
            y: 0
        },
        {
            x: h + 3 * s / 6,
            y: -s
        },
        {
            x: 0,
            y: -s
        }
    ], o, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ S(t, {}), m = /*#__PURE__*/ H(l), d = /*#__PURE__*/ p.path(m, f);
        o = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && o.attr("style", n);
    } else o = /*#__PURE__*/ rt(e, h, s, l);
    return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p) {
        return N.polygon(t, l, p);
    }, e;
}
m$1(bs, "lean_right");
function Ss(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.label = "", t.labelStyle = i;
    let e = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, h = /*#__PURE__*/ Math.max(35, t?.width ?? 0), s = /*#__PURE__*/ Math.max(35, t?.height ?? 0), l = 7, o = [
        {
            x: h,
            y: 0
        },
        {
            x: 0,
            y: s + l / 2
        },
        {
            x: h - 2 * l,
            y: s + l / 2
        },
        {
            x: 0,
            y: 2 * s
        },
        {
            x: h,
            y: s - l / 2
        },
        {
            x: 2 * l,
            y: s - l / 2
        }
    ], n = /*#__PURE__*/ v.svg(e), p = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    let f = /*#__PURE__*/ H(o), m$1 = /*#__PURE__*/ n.path(f, p), d = /*#__PURE__*/ e.insert(()=>m$1, ":first-child");
    return a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && d.selectAll("path").attr("style", r), d.attr("transform", `translate(-${h / 2},${-s})`), D(t, d), t.intersect = function(g) {
        return pt$1.info("lightningBolt intersect", t, g), N.polygon(t, o, g);
    }, e;
}
m$1(Ss, "lightningBolt");
var Br = /*#__PURE__*/ m$1((c, t, i, r, e, a, h)=>[
        `M${c},${t + a}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `a${e},${a} 0,0,0 ${-i},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `l0,${-r}`,
        `M${c},${t + a + h}`,
        `a${e},${a} 0,0,0 ${i},0`
    ].join(" "), "createCylinderPathD"), Cr = /*#__PURE__*/ m$1((c, t, i, r, e, a, h)=>[
        `M${c},${t + a}`,
        `M${c + i},${t + a}`,
        `a${e},${a} 0,0,0 ${-i},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${i},0`,
        `l0,${-r}`,
        `M${c},${t + a + h}`,
        `a${e},${a} 0,0,0 ${i},0`
    ].join(" "), "createOuterCylinderPathD"), Tr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c - i / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 ${i},0`
    ].join(" "), "createInnerCylinderPathD");
async function ws(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, o = l / (2.5 + s / 50), n = /*#__PURE__*/ Math.max(a.height + o + (t.padding ?? 0), t.height ?? 0), p = n * .1, f, { cssStyles: m$1 } = t;
    if (t.look === "handDrawn") {
        let d = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ Cr(0, 0, s, n, l, o, p), y = /*#__PURE__*/ Tr(0, o, s, n, l, o), u = /*#__PURE__*/ S(t, {}), b = /*#__PURE__*/ d.path(g, u), S$1 = /*#__PURE__*/ d.path(y, u);
        e.insert(()=>S$1, ":first-child").attr("class", "line"), f = /*#__PURE__*/ e.insert(()=>b, ":first-child"), f.attr("class", "basic label-container"), m$1 && f.attr("style", m$1);
    } else {
        let d = /*#__PURE__*/ Br(0, 0, s, n, l, o, p);
        f = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(m$1)).attr("style", r);
    }
    return f.attr("label-offset-y", o), f.attr("transform", `translate(${-s / 2}, ${-(n / 2 + o)})`), D(t, f), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), t.intersect = function(d) {
        let g = /*#__PURE__*/ N.rect(t, d), y = g.x - (t.x ?? 0);
        if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - o)) {
            let u = o * o * (1 - y * y / (l * l));
            u > 0 && (u = /*#__PURE__*/ Math.sqrt(u)), u = o - u, d.y - (t.y ?? 0) > 0 && (u = -u), g.y += u;
        }
        return g;
    }, e;
}
m$1(ws, "linedCylinder");
async function Ns(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n = l + o, { cssStyles: p } = t, f = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = [
        {
            x: -s / 2 - s / 2 * .1,
            y: -n / 2
        },
        {
            x: -s / 2 - s / 2 * .1,
            y: n / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - s / 2 * .1, n / 2, s / 2 + s / 2 * .1, n / 2, o, .8),
        {
            x: s / 2 + s / 2 * .1,
            y: -n / 2
        },
        {
            x: -s / 2 - s / 2 * .1,
            y: -n / 2
        },
        {
            x: -s / 2,
            y: -n / 2
        },
        {
            x: -s / 2,
            y: n / 2 * 1.1
        },
        {
            x: -s / 2,
            y: -n / 2
        }
    ], g = /*#__PURE__*/ f.polygon(/*#__PURE__*/ d.map((u)=>[
            u.x,
            u.y
        ]), m$1), y = /*#__PURE__*/ e.insert(()=>g, ":first-child");
    return y.attr("class", "basic label-container"), p && t.look !== "handDrawn" && y.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * .1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, y), t.intersect = function(u) {
        return N.polygon(t, d, u);
    }, e;
}
m$1(Ns, "linedWaveEdgedRect");
async function $s(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n = -s / 2, p = -l / 2, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {}), g = [
        {
            x: n - o,
            y: p + o
        },
        {
            x: n - o,
            y: p + l + o
        },
        {
            x: n + s - o,
            y: p + l + o
        },
        {
            x: n + s - o,
            y: p + l
        },
        {
            x: n + s,
            y: p + l
        },
        {
            x: n + s,
            y: p + l - o
        },
        {
            x: n + s + o,
            y: p + l - o
        },
        {
            x: n + s + o,
            y: p - o
        },
        {
            x: n + o,
            y: p - o
        },
        {
            x: n + o,
            y: p
        },
        {
            x: n,
            y: p
        },
        {
            x: n,
            y: p + o
        }
    ], y = [
        {
            x: n,
            y: p + o
        },
        {
            x: n + s - o,
            y: p + o
        },
        {
            x: n + s - o,
            y: p + l
        },
        {
            x: n + s,
            y: p + l
        },
        {
            x: n + s,
            y: p
        },
        {
            x: n,
            y: p
        }
    ];
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let u = /*#__PURE__*/ H(g), b = /*#__PURE__*/ m$1.path(u, d), S$1 = /*#__PURE__*/ H(y), k = /*#__PURE__*/ m$1.path(S$1, {
        ...d,
        fill: "none"
    }), w = /*#__PURE__*/ e.insert(()=>k, ":first-child");
    return w.insert(()=>b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - o - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o - (a.y - (a.top ?? 0))})`), D(t, w), t.intersect = function(B) {
        return N.polygon(t, g, B);
    }, e;
}
m$1($s, "multiRect");
async function Ds(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n = l + o, p = -s / 2, f = -n / 2, m$1 = 5, { cssStyles: d } = t, g = /*#__PURE__*/ lt(p - m$1, f + n + m$1, p + s - m$1, f + n + m$1, o, .8), y = g?.[g.length - 1], u = [
        {
            x: p - m$1,
            y: f + m$1
        },
        {
            x: p - m$1,
            y: f + n + m$1
        },
        ...g,
        {
            x: p + s - m$1,
            y: y.y - m$1
        },
        {
            x: p + s,
            y: y.y - m$1
        },
        {
            x: p + s,
            y: y.y - 2 * m$1
        },
        {
            x: p + s + m$1,
            y: y.y - 2 * m$1
        },
        {
            x: p + s + m$1,
            y: f - m$1
        },
        {
            x: p + m$1,
            y: f - m$1
        },
        {
            x: p + m$1,
            y: f
        },
        {
            x: p,
            y: f
        },
        {
            x: p,
            y: f + m$1
        }
    ], b = [
        {
            x: p,
            y: f + m$1
        },
        {
            x: p + s - m$1,
            y: f + m$1
        },
        {
            x: p + s - m$1,
            y: y.y - m$1
        },
        {
            x: p + s,
            y: y.y - m$1
        },
        {
            x: p + s,
            y: f
        },
        {
            x: p,
            y: f
        }
    ], S$1 = /*#__PURE__*/ v.svg(e), k = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
    let w = /*#__PURE__*/ H(u), B = /*#__PURE__*/ S$1.path(w, k), T = /*#__PURE__*/ H(b), R = /*#__PURE__*/ S$1.path(T, k), E = /*#__PURE__*/ e.insert(()=>B, ":first-child");
    return E.insert(()=>R), E.attr("class", "basic label-container"), d && t.look !== "handDrawn" && E.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && E.selectAll("path").attr("style", r), E.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-(a.width / 2) - m$1 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m$1 - o / 2 - (a.y - (a.top ?? 0))})`), D(t, E), t.intersect = function(L) {
        return N.polygon(t, u, L);
    }, e;
}
m$1(Ds, "multiWaveEdgedRectangle");
async function vs(c, t, { config: { themeVariables: i } }) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.labelStyle = r, t.useHtmlLabels || Ot$1().flowchart?.htmlLabels !== false || (t.centerLabel = true);
    let { shapeSvg: h, bbox: s, label: l } = await C(c, t, /*#__PURE__*/ P(t)), o = /*#__PURE__*/ Math.max(s.width + (t.padding ?? 0) * 2, t?.width ?? 0), n = /*#__PURE__*/ Math.max(s.height + (t.padding ?? 0) * 2, t?.height ?? 0), p = -o / 2, f = -n / 2, { cssStyles: m$1 } = t, d = /*#__PURE__*/ v.svg(h), g = /*#__PURE__*/ S(t, {
        fill: i.noteBkgColor,
        stroke: i.noteBorderColor
    });
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let y = /*#__PURE__*/ d.rectangle(p, f, o, n, g), u = /*#__PURE__*/ h.insert(()=>y, ":first-child");
    return u.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && u.selectAll("path").attr("style", m$1), e && t.look !== "handDrawn" && u.selectAll("path").attr("style", e), l.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`), D(t, u), t.intersect = function(b) {
        return N.rect(t, b);
    }, h;
}
m$1(vs, "note");
var Rr = /*#__PURE__*/ m$1((c, t, i)=>[
        `M${c + i / 2},${t}`,
        `L${c + i},${t - i / 2}`,
        `L${c + i / 2},${t - i}`,
        `L${c},${t - i / 2}`,
        "Z"
    ].join(" "), "createDecisionBoxPathD");
async function Ms(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.width + t.padding, s = a.height + t.padding, l = h + s, o = .5, n = [
        {
            x: l / 2,
            y: 0
        },
        {
            x: l,
            y: -l / 2
        },
        {
            x: l / 2,
            y: -l
        },
        {
            x: 0,
            y: -l / 2
        }
    ], p, { cssStyles: f } = t;
    if (t.look === "handDrawn") {
        let m = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {}), g = /*#__PURE__*/ Rr(0, 0, l), y = /*#__PURE__*/ m.path(g, d);
        p = /*#__PURE__*/ e.insert(()=>y, ":first-child").attr("transform", `translate(${-l / 2 + o}, ${l / 2})`), f && p.attr("style", f);
    } else p = /*#__PURE__*/ rt(e, l, l, n), p.attr("transform", `translate(${-l / 2 + o}, ${l / 2})`);
    return r && p.attr("style", r), D(t, p), t.calcIntersect = function(m, d) {
        let g = m.width, y = [
            {
                x: g / 2,
                y: 0
            },
            {
                x: g,
                y: -g / 2
            },
            {
                x: g / 2,
                y: -g
            },
            {
                x: 0,
                y: -g / 2
            }
        ], u = /*#__PURE__*/ N.polygon(m, y, d);
        return {
            x: u.x - .5,
            y: u.y - .5
        };
    }, t.intersect = function(m) {
        return this.calcIntersect(t, m);
    }, e;
}
m$1(Ms, "question");
async function ks(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), o = -s / 2, n = -l / 2, p = n / 2, f = [
        {
            x: o + p,
            y: n
        },
        {
            x: o,
            y: 0
        },
        {
            x: o + p,
            y: -n
        },
        {
            x: -o,
            y: -n
        },
        {
            x: -o,
            y: n
        }
    ], { cssStyles: m$1 } = t, d = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let y = /*#__PURE__*/ H(f), u = /*#__PURE__*/ d.path(y, g), b = /*#__PURE__*/ e.insert(()=>u, ":first-child");
    return b.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && b.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p / 2},0)`), h.attr("transform", `translate(${-p / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S) {
        return N.polygon(t, f, S);
    }, e;
}
m$1(ks, "rect_left_inv_arrow");
async function Ps(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let e;
    t.cssClasses ? e = "node " + t.cssClasses : e = "node default";
    let a = /*#__PURE__*/ c.insert("g").attr("class", e).attr("id", t.domId || t.id), h = /*#__PURE__*/ a.insert("g"), s = /*#__PURE__*/ a.insert("g").attr("class", "label").attr("style", r), l = t.description, o = t.label, n = /*#__PURE__*/ s.node().appendChild(await Rt(o, t.labelStyle, true, true)), p = {
        width: 0,
        height: 0
    };
    if (Mo(mr$1()?.flowchart?.htmlLabels)) {
        let R = n.children[0], E = /*#__PURE__*/ ia(n);
        p = /*#__PURE__*/ R.getBoundingClientRect(), E.attr("width", p.width), E.attr("height", p.height);
    }
    pt$1.info("Text 2", l);
    let f = l || [], m$1 = /*#__PURE__*/ n.getBBox(), d = /*#__PURE__*/ s.node().appendChild(await Rt(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)), g = d.children[0], y = /*#__PURE__*/ ia(d);
    p = /*#__PURE__*/ g.getBoundingClientRect(), y.attr("width", p.width), y.attr("height", p.height);
    let u = (t.padding || 0) / 2;
    ia(d).attr("transform", "translate( " + (p.width > m$1.width ? 0 : (m$1.width - p.width) / 2) + ", " + (m$1.height + u + 5) + ")"), ia(n).attr("transform", "translate( " + (p.width < m$1.width ? 0 : -(m$1.width - p.width) / 2) + ", 0)"), p = /*#__PURE__*/ s.node().getBBox(), s.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - u + 3) + ")");
    let b = p.width + (t.padding || 0), S$1 = p.height + (t.padding || 0), k = -p.width / 2 - u, w = -p.height / 2 - u, B, T;
    if (t.look === "handDrawn") {
        let R = /*#__PURE__*/ v.svg(a), E = /*#__PURE__*/ S(t, {}), L = /*#__PURE__*/ R.path(/*#__PURE__*/ st(k, w, b, S$1, t.rx || 0), E), O = /*#__PURE__*/ R.line(-p.width / 2 - u, -p.height / 2 - u + m$1.height + u, p.width / 2 + u, -p.height / 2 - u + m$1.height + u, E);
        T = /*#__PURE__*/ a.insert(()=>(pt$1.debug("Rough node insert CXC", L), O), ":first-child"), B = /*#__PURE__*/ a.insert(()=>(pt$1.debug("Rough node insert CXC", L), L), ":first-child");
    } else B = /*#__PURE__*/ h.insert("rect", ":first-child"), T = /*#__PURE__*/ h.insert("line"), B.attr("class", "outer title-state").attr("style", r).attr("x", -p.width / 2 - u).attr("y", -p.height / 2 - u).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), T.attr("class", "divider").attr("x1", -p.width / 2 - u).attr("x2", p.width / 2 + u).attr("y1", -p.height / 2 - u + m$1.height + u).attr("y2", -p.height / 2 - u + m$1.height + u);
    return D(t, B), t.intersect = function(R) {
        return N.rect(t, R);
    }, a;
}
m$1(Ps, "rectWithTitle");
function Yt(c, t, i, r, e, a, h) {
    let l = (c + i) / 2, o = (t + r) / 2, n = /*#__PURE__*/ Math.atan2(r - t, i - c), p = (i - c) / 2, f = (r - t) / 2, m = p / e, d = f / a, g = /*#__PURE__*/ Math.sqrt(m ** 2 + d ** 2);
    if (g > 1) throw new Error("The given radii are too small to create an arc between the points.");
    let y = /*#__PURE__*/ Math.sqrt(1 - g ** 2), u = l + y * a * Math.sin(n) * (h ? -1 : 1), b = o - y * e * Math.cos(n) * (h ? -1 : 1), S = /*#__PURE__*/ Math.atan2((t - b) / a, (c - u) / e), w = Math.atan2((r - b) / a, (i - u) / e) - S;
    h && w < 0 && (w += 2 * Math.PI), !h && w > 0 && (w -= 2 * Math.PI);
    let B = [];
    for(let T = 0; T < 20; T++){
        let R = T / 19, E = S + R * w, L = u + e * Math.cos(E), O = b + a * Math.sin(E);
        B.push({
            x: L,
            y: O
        });
    }
    return B;
}
m$1(Yt, "generateArcPoints");
async function Bs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = t?.padding ?? 0, s = t?.padding ?? 0, l = (t?.width ? t?.width : a.width) + h * 2, o = (t?.height ? t?.height : a.height) + s * 2, n = t.radius || 5, p = t.taper || 5, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {});
    t.stroke && (d.stroke = t.stroke), t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let g = [
        {
            x: -l / 2 + p,
            y: -o / 2
        },
        {
            x: l / 2 - p,
            y: -o / 2
        },
        .../*#__PURE__*/ Yt(l / 2 - p, -o / 2, l / 2, -o / 2 + p, n, n, true),
        {
            x: l / 2,
            y: -o / 2 + p
        },
        {
            x: l / 2,
            y: o / 2 - p
        },
        .../*#__PURE__*/ Yt(l / 2, o / 2 - p, l / 2 - p, o / 2, n, n, true),
        {
            x: l / 2 - p,
            y: o / 2
        },
        {
            x: -l / 2 + p,
            y: o / 2
        },
        .../*#__PURE__*/ Yt(-l / 2 + p, o / 2, -l / 2, o / 2 - p, n, n, true),
        {
            x: -l / 2,
            y: o / 2 - p
        },
        {
            x: -l / 2,
            y: -o / 2 + p
        },
        .../*#__PURE__*/ Yt(-l / 2, -o / 2 + p, -l / 2 + p, -o / 2, n, n, true)
    ], y = /*#__PURE__*/ H(g), u = /*#__PURE__*/ m$1.path(y, d), b = /*#__PURE__*/ e.insert(()=>u, ":first-child");
    return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && b.selectChildren("path").attr("style", r), D(t, b), t.intersect = function(S) {
        return N.polygon(t, g, S);
    }, e;
}
m$1(Bs, "roundedRect");
async function Cs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = t?.padding ?? 0, l = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = -a.width / 2 - s, p = -a.height / 2 - s, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let g = [
        {
            x: n,
            y: p
        },
        {
            x: n + l + 8,
            y: p
        },
        {
            x: n + l + 8,
            y: p + o
        },
        {
            x: n - 8,
            y: p + o
        },
        {
            x: n - 8,
            y: p
        },
        {
            x: n,
            y: p
        },
        {
            x: n,
            y: p + o
        }
    ], y = /*#__PURE__*/ m$1.polygon(/*#__PURE__*/ g.map((b)=>[
            b.x,
            b.y
        ]), d), u = /*#__PURE__*/ e.insert(()=>y, ":first-child");
    return u.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(f)), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), f && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), h.attr("transform", `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-o / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u), t.intersect = function(b) {
        return N.rect(t, b);
    }, e;
}
m$1(Cs, "shadedProcess");
async function Ts(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = -s / 2, n = -l / 2, { cssStyles: p } = t, f = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let d = [
        {
            x: o,
            y: n
        },
        {
            x: o,
            y: n + l
        },
        {
            x: o + s,
            y: n + l
        },
        {
            x: o + s,
            y: n - l / 2
        }
    ], g = /*#__PURE__*/ H(d), y = /*#__PURE__*/ f.path(g, m$1), u = /*#__PURE__*/ e.insert(()=>y, ":first-child");
    return u.attr("class", "basic label-container"), p && t.look !== "handDrawn" && u.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && u.selectChildren("path").attr("style", r), u.attr("transform", `translate(0, ${l / 4})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), D(t, u), t.intersect = function(b) {
        return N.polygon(t, d, b);
    }, e;
}
m$1(Ts, "slopedRect");
async function Rs(c, t) {
    let i = {
        rx: 0,
        ry: 0,
        labelPaddingX: t.labelPaddingX ?? (t?.padding || 0) * 2,
        labelPaddingY: (t?.padding || 0) * 1
    };
    return Dt(c, t, i);
}
m$1(Rs, "squareRect");
async function Gs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.height + t.padding, s = a.width + h / 4 + t.padding, l = h / 2, { cssStyles: o } = t, n = /*#__PURE__*/ v.svg(e), p = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    let f = [
        {
            x: -s / 2 + l,
            y: -h / 2
        },
        {
            x: s / 2 - l,
            y: -h / 2
        },
        .../*#__PURE__*/ Nt(-s / 2 + l, 0, l, 50, 90, 270),
        {
            x: s / 2 - l,
            y: h / 2
        },
        .../*#__PURE__*/ Nt(s / 2 - l, 0, l, 50, 270, 450)
    ], m$1 = /*#__PURE__*/ H(f), d = /*#__PURE__*/ n.path(m$1, p), g = /*#__PURE__*/ e.insert(()=>d, ":first-child");
    return g.attr("class", "basic label-container outer-path"), o && t.look !== "handDrawn" && g.selectChildren("path").attr("style", o), r && t.look !== "handDrawn" && g.selectChildren("path").attr("style", r), D(t, g), t.intersect = function(y) {
        return N.polygon(t, f, y);
    }, e;
}
m$1(Gs, "stadium");
async function Es(c, t) {
    return Dt(c, t, {
        rx: 5,
        ry: 5
    });
}
m$1(Es, "state");
function js(c, t, { config: { themeVariables: i } }) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.labelStyle = r;
    let { cssStyles: a } = t, { lineColor: h, stateBorder: s, nodeBorder: l } = i, o = /*#__PURE__*/ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = /*#__PURE__*/ v.svg(o), p = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    let f = /*#__PURE__*/ n.circle(0, 0, 14, {
        ...p,
        stroke: h,
        strokeWidth: 2
    }), m$1 = s ?? l, d = /*#__PURE__*/ n.circle(0, 0, 5, {
        ...p,
        fill: m$1,
        stroke: m$1,
        strokeWidth: 2,
        fillStyle: "solid"
    }), g = /*#__PURE__*/ o.insert(()=>f, ":first-child");
    return g.insert(()=>d), a && g.selectAll("path").attr("style", a), e && g.selectAll("path").attr("style", e), D(t, g), t.intersect = function(y) {
        return N.circle(t, 7, y);
    }, o;
}
m$1(js, "stateEnd");
function As(c, t, { config: { themeVariables: i } }) {
    let { lineColor: r } = i, e = /*#__PURE__*/ c.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
    if (t.look === "handDrawn") {
        let s = /*#__PURE__*/ v.svg(e).circle(0, 0, 14, /*#__PURE__*/ u(r));
        a = /*#__PURE__*/ e.insert(()=>s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else a = /*#__PURE__*/ e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    return D(t, a), t.intersect = function(h) {
        return N.circle(t, 7, h);
    }, e;
}
m$1(As, "stateStart");
async function Os(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = (t?.padding || 0) / 2, s = a.width + t.padding, l = a.height + t.padding, o = -a.width / 2 - h, n = -a.height / 2 - h, p = [
        {
            x: 0,
            y: 0
        },
        {
            x: s,
            y: 0
        },
        {
            x: s,
            y: -l
        },
        {
            x: 0,
            y: -l
        },
        {
            x: 0,
            y: 0
        },
        {
            x: -8,
            y: 0
        },
        {
            x: s + 8,
            y: 0
        },
        {
            x: s + 8,
            y: -l
        },
        {
            x: -8,
            y: -l
        },
        {
            x: -8,
            y: 0
        }
    ];
    if (t.look === "handDrawn") {
        let f = /*#__PURE__*/ v.svg(e), m = /*#__PURE__*/ S(t, {}), d = /*#__PURE__*/ f.rectangle(o - 8, n, s + 16, l, m), g = /*#__PURE__*/ f.line(o, n, o, n + l, m), y = /*#__PURE__*/ f.line(o + s, n, o + s, n + l, m);
        e.insert(()=>g, ":first-child"), e.insert(()=>y, ":first-child");
        let u = /*#__PURE__*/ e.insert(()=>d, ":first-child"), { cssStyles: b } = t;
        u.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(b)), D(t, u);
    } else {
        let f = /*#__PURE__*/ rt(e, s, l, p);
        r && f.attr("style", r), D(t, f);
    }
    return t.intersect = function(f) {
        return N.polygon(t, p, f);
    }, e;
}
m$1(Os, "subroutine");
async function Ls(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = -h / 2, o = -s / 2, n = .2 * s, p = .2 * s, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {}), g = [
        {
            x: l - n / 2,
            y: o
        },
        {
            x: l + h + n / 2,
            y: o
        },
        {
            x: l + h + n / 2,
            y: o + s
        },
        {
            x: l - n / 2,
            y: o + s
        }
    ], y = [
        {
            x: l + h - n / 2,
            y: o + s
        },
        {
            x: l + h + n / 2,
            y: o + s
        },
        {
            x: l + h + n / 2,
            y: o + s - p
        }
    ];
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let u = /*#__PURE__*/ H(g), b = /*#__PURE__*/ m$1.path(u, d), S$1 = /*#__PURE__*/ H(y), k = /*#__PURE__*/ m$1.path(S$1, {
        ...d,
        fillStyle: "solid"
    }), w = /*#__PURE__*/ e.insert(()=>k, ":first-child");
    return w.insert(()=>b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), D(t, w), t.intersect = function(B) {
        return N.polygon(t, g, B);
    }, e;
}
m$1(Ls, "taggedRect");
async function Hs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 4, n = .2 * s, p = .2 * l, f = l + o, { cssStyles: m$1 } = t, d = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let y = [
        {
            x: -s / 2 - s / 2 * .1,
            y: f / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - s / 2 * .1, f / 2, s / 2 + s / 2 * .1, f / 2, o, .8),
        {
            x: s / 2 + s / 2 * .1,
            y: -f / 2
        },
        {
            x: -s / 2 - s / 2 * .1,
            y: -f / 2
        }
    ], u = -s / 2 + s / 2 * .1, b = -f / 2 - p * .4, S$1 = [
        {
            x: u + s - n,
            y: (b + l) * 1.4
        },
        {
            x: u + s,
            y: b + l - p
        },
        {
            x: u + s,
            y: (b + l) * .9
        },
        .../*#__PURE__*/ lt(u + s, (b + l) * 1.3, u + s - n, (b + l) * 1.5, -l * .03, .5)
    ], k = /*#__PURE__*/ H(y), w = /*#__PURE__*/ d.path(k, g), B = /*#__PURE__*/ H(S$1), T = /*#__PURE__*/ d.path(B, {
        ...g,
        fillStyle: "solid"
    }), R = /*#__PURE__*/ e.insert(()=>T, ":first-child");
    return R.insert(()=>w, ":first-child"), R.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && R.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o / 2 - (a.y - (a.top ?? 0))})`), D(t, R), t.intersect = function(E) {
        return N.polygon(t, y, E);
    }, e;
}
m$1(Hs, "taggedWaveEdgedRectangle");
async function Vs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + t.padding, t?.width || 0), s = /*#__PURE__*/ Math.max(a.height + t.padding, t?.height || 0), l = -h / 2, o = -s / 2, n = /*#__PURE__*/ e.insert("rect", ":first-child");
    return n.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", o).attr("width", h).attr("height", s), D(t, n), t.intersect = function(p) {
        return N.rect(t, p);
    }, e;
}
m$1(Vs, "text");
var Gr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>`M${c},${t}
    a${e},${a} 0,0,1 0,${-r}
    l${i},0
    a${e},${a} 0,0,1 0,${r}
    M${i},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-i},0`, "createCylinderPathD"), Er = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c},${t}`,
        `M${c + i},${t}`,
        `a${e},${a} 0,0,0 0,${-r}`,
        `l${-i},0`,
        `a${e},${a} 0,0,0 0,${r}`,
        `l${i},0`
    ].join(" "), "createOuterCylinderPathD"), jr = /*#__PURE__*/ m$1((c, t, i, r, e, a)=>[
        `M${c + i / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 0,${r}`
    ].join(" "), "createInnerCylinderPathD");
async function Ws(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h, halfPadding: s } = await C(c, t, /*#__PURE__*/ P(t)), l = t.look === "neo" ? s * 2 : s, o = a.height + l, n = o / 2, p = n / (2.5 + o / 50), f = a.width + p + l, { cssStyles: m$1 } = t, d;
    if (t.look === "handDrawn") {
        let g = /*#__PURE__*/ v.svg(e), y = /*#__PURE__*/ Er(0, 0, f, o, p, n), u = /*#__PURE__*/ jr(0, 0, f, o, p, n), b = /*#__PURE__*/ g.path(y, /*#__PURE__*/ S(t, {})), S$1 = /*#__PURE__*/ g.path(u, /*#__PURE__*/ S(t, {
            fill: "none"
        }));
        d = /*#__PURE__*/ e.insert(()=>S$1, ":first-child"), d = /*#__PURE__*/ e.insert(()=>b, ":first-child"), d.attr("class", "basic label-container"), m$1 && d.attr("style", m$1);
    } else {
        let g = /*#__PURE__*/ Gr(0, 0, f, o, p, n);
        d = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(m$1)).attr("style", r), d.attr("class", "basic label-container"), m$1 && d.selectAll("path").attr("style", m$1), r && d.selectAll("path").attr("style", r);
    }
    return d.attr("label-offset-x", p), d.attr("transform", `translate(${-f / 2}, ${o / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), D(t, d), t.intersect = function(g) {
        let y = /*#__PURE__*/ N.rect(t, g), u = y.y - (t.y ?? 0);
        if (n != 0 && (Math.abs(u) < (t.height ?? 0) / 2 || Math.abs(u) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p)) {
            let b = p * p * (1 - u * u / (n * n));
            b != 0 && (b = /*#__PURE__*/ Math.sqrt(/*#__PURE__*/ Math.abs(b))), b = p - b, g.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
        }
        return y;
    }, e;
}
m$1(Ws, "tiltedCylinder");
async function Is(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = a.width + t.padding, s = a.height + t.padding, l = [
        {
            x: -3 * s / 6,
            y: 0
        },
        {
            x: h + 3 * s / 6,
            y: 0
        },
        {
            x: h,
            y: -s
        },
        {
            x: 0,
            y: -s
        }
    ], o, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ S(t, {}), m = /*#__PURE__*/ H(l), d = /*#__PURE__*/ p.path(m, f);
        o = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && o.attr("style", n);
    } else o = /*#__PURE__*/ rt(e, h, s, l);
    return r && o.attr("style", r), t.width = h, t.height = s, D(t, o), t.intersect = function(p) {
        return N.polygon(t, l, p);
    }, e;
}
m$1(Is, "trapezoid");
async function Fs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = 60, s = 20, l = /*#__PURE__*/ Math.max(h, a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /*#__PURE__*/ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: n } = t, p = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let m$1 = [
        {
            x: -l / 2 * .8,
            y: -o / 2
        },
        {
            x: l / 2 * .8,
            y: -o / 2
        },
        {
            x: l / 2,
            y: -o / 2 * .6
        },
        {
            x: l / 2,
            y: o / 2
        },
        {
            x: -l / 2,
            y: o / 2
        },
        {
            x: -l / 2,
            y: -o / 2 * .6
        }
    ], d = /*#__PURE__*/ H(m$1), g = /*#__PURE__*/ p.path(d, f), y = /*#__PURE__*/ e.insert(()=>g, ":first-child");
    return y.attr("class", "basic label-container"), n && t.look !== "handDrawn" && y.selectChildren("path").attr("style", n), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), D(t, y), t.intersect = function(u) {
        return N.polygon(t, m$1, u);
    }, e;
}
m$1(Fs, "trapezoidalPentagon");
async function _s(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Mo(mr$1().flowchart?.htmlLabels), l = a.width + (t.padding ?? 0), o = l + a.height, n = l + a.height, p = [
        {
            x: 0,
            y: 0
        },
        {
            x: n,
            y: 0
        },
        {
            x: n / 2,
            y: -o
        }
    ], { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let g = /*#__PURE__*/ H(p), y = /*#__PURE__*/ m$1.path(g, d), u = /*#__PURE__*/ e.insert(()=>y, ":first-child").attr("transform", `translate(${-o / 2}, ${o / 2})`);
    return f && t.look !== "handDrawn" && u.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && u.selectChildren("path").attr("style", r), t.width = l, t.height = o, D(t, u), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${o / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
        return pt$1.info("Triangle intersect", t, p, b), N.polygon(t, p, b);
    }, e;
}
m$1(_s, "triangle");
async function zs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = l / 8, n = l + o, { cssStyles: p } = t, m$1 = 70 - s, d = m$1 > 0 ? m$1 / 2 : 0, g = /*#__PURE__*/ v.svg(e), y = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
    let u = [
        {
            x: -s / 2 - d,
            y: n / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - d, n / 2, s / 2 + d, n / 2, o, .8),
        {
            x: s / 2 + d,
            y: -n / 2
        },
        {
            x: -s / 2 - d,
            y: -n / 2
        }
    ], b = /*#__PURE__*/ H(u), S$1 = /*#__PURE__*/ g.path(b, y), k = /*#__PURE__*/ e.insert(()=>S$1, ":first-child");
    return k.attr("class", "basic label-container"), p && t.look !== "handDrawn" && k.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), k.attr("transform", `translate(0,${-o / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - o - (a.y - (a.top ?? 0))})`), D(t, k), t.intersect = function(w) {
        return N.polygon(t, u, w);
    }, e;
}
m$1(zs, "waveEdgedRectangle");
async function qs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a } = await C(c, t, /*#__PURE__*/ P(t)), h = 100, s = 50, l = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = l / o, p = l, f = o;
    p > f * n ? f = p / n : p = f * n, p = /*#__PURE__*/ Math.max(p, h), f = /*#__PURE__*/ Math.max(f, s);
    let m$1 = /*#__PURE__*/ Math.min(f * .2, f / 4), d = f + m$1 * 2, { cssStyles: g } = t, y = /*#__PURE__*/ v.svg(e), u = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
    let b = [
        {
            x: -p / 2,
            y: d / 2
        },
        .../*#__PURE__*/ lt(-p / 2, d / 2, p / 2, d / 2, m$1, 1),
        {
            x: p / 2,
            y: -d / 2
        },
        .../*#__PURE__*/ lt(p / 2, -d / 2, -p / 2, -d / 2, m$1, -1)
    ], S$1 = /*#__PURE__*/ H(b), k = /*#__PURE__*/ y.path(S$1, u), w = /*#__PURE__*/ e.insert(()=>k, ":first-child");
    return w.attr("class", "basic label-container"), g && t.look !== "handDrawn" && w.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), D(t, w), t.intersect = function(B) {
        return N.polygon(t, b, B);
    }, e;
}
m$1(qs, "waveRectangle");
async function Xs(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, label: h } = await C(c, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), o = 5, n = -s / 2, p = -l / 2, { cssStyles: f } = t, m$1 = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ S(t, {}), g = [
        {
            x: n - o,
            y: p - o
        },
        {
            x: n - o,
            y: p + l
        },
        {
            x: n + s,
            y: p + l
        },
        {
            x: n + s,
            y: p - o
        }
    ], y = `M${n - o},${p - o} L${n + s},${p - o} L${n + s},${p + l} L${n - o},${p + l} L${n - o},${p - o}
                M${n - o},${p} L${n + s},${p}
                M${n},${p - o} L${n},${p + l}`;
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let u = /*#__PURE__*/ m$1.path(y, d), b = /*#__PURE__*/ e.insert(()=>u, ":first-child");
    return b.attr("transform", `translate(${o / 2}, ${o / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + o / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + o / 2 - (a.y - (a.top ?? 0))})`), D(t, b), t.intersect = function(S) {
        return N.polygon(t, g, S);
    }, e;
}
m$1(Xs, "windowPane");
async function ye(c, t) {
    let i = t;
    if (i.alias && (t.label = i.alias), t.look === "handDrawn") {
        let { themeVariables: Y } = Ot$1(), { background: J } = Y, tt = {
            ...t,
            id: t.id + "-background",
            look: "default",
            cssStyles: [
                "stroke: none",
                `fill: ${J}`
            ]
        };
        await ye(c, tt);
    }
    let r = /*#__PURE__*/ Ot$1();
    t.useHtmlLabels = r.htmlLabels;
    let e = r.er?.diagramPadding ?? 10, a = r.er?.entityPadding ?? 6, { cssStyles: h } = t, { labelStyles: s, nodeStyles: l } = m(t);
    if (i.attributes.length === 0 && t.label) {
        let Y = {
            rx: 0,
            ry: 0,
            labelPaddingX: e,
            labelPaddingY: e * 1.5
        };
        M(t.label, r) + Y.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
        let J = await Dt(c, t, Y);
        if (!Mo(r.htmlLabels)) {
            let tt = /*#__PURE__*/ J.select("text"), at = tt.node()?.getBBox();
            tt.attr("transform", `translate(${-at.width / 2}, 0)`);
        }
        return J;
    }
    r.htmlLabels || (e *= 1.25, a *= 1.25);
    let o = /*#__PURE__*/ P(t);
    o || (o = "node default");
    let n = /*#__PURE__*/ c.insert("g").attr("class", o).attr("id", t.domId || t.id), p = await Gt(n, t.label ?? "", r, 0, 0, [
        "name"
    ], s);
    p.height += a;
    let f = 0, m$1 = [], d = [], g = 0, y = 0, u = 0, b = 0, S$1 = true, k = true;
    for (let Y of i.attributes){
        let J = await Gt(n, Y.type, r, 0, f, [
            "attribute-type"
        ], s);
        g = /*#__PURE__*/ Math.max(g, J.width + e);
        let tt = await Gt(n, Y.name, r, 0, f, [
            "attribute-name"
        ], s);
        y = /*#__PURE__*/ Math.max(y, tt.width + e);
        let at = await Gt(n, /*#__PURE__*/ Y.keys.join(), r, 0, f, [
            "attribute-keys"
        ], s);
        u = /*#__PURE__*/ Math.max(u, at.width + e);
        let St = await Gt(n, Y.comment, r, 0, f, [
            "attribute-comment"
        ], s);
        b = /*#__PURE__*/ Math.max(b, St.width + e);
        let mt = Math.max(J.height, tt.height, at.height, St.height) + a;
        d.push({
            yOffset: f,
            rowHeight: mt
        }), f += mt;
    }
    let w = 4;
    u <= e && (S$1 = false, u = 0, w--), b <= e && (k = false, b = 0, w--);
    let B = /*#__PURE__*/ n.node().getBBox();
    if (p.width + e * 2 - (g + y + u + b) > 0) {
        let Y = p.width + e * 2 - (g + y + u + b);
        g += Y / w, y += Y / w, u > 0 && (u += Y / w), b > 0 && (b += Y / w);
    }
    let T = g + y + u + b, R = /*#__PURE__*/ v.svg(n), E = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
    let L = 0;
    d.length > 0 && (L = /*#__PURE__*/ d.reduce((Y, J)=>Y + (J?.rowHeight ?? 0), 0));
    let O = /*#__PURE__*/ Math.max(B.width + e * 2, t?.width || 0, T), V = /*#__PURE__*/ Math.max((L ?? 0) + p.height, t?.height || 0), G = -O / 2, j = -V / 2;
    n.selectAll("g:not(:first-child)").each((Y, J, tt)=>{
        let at = /*#__PURE__*/ ia(tt[J]), St = /*#__PURE__*/ at.attr("transform"), mt = 0, be = 0;
        if (St) {
            let Qt = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(St);
            Qt && (mt = /*#__PURE__*/ parseFloat(Qt[1]), be = /*#__PURE__*/ parseFloat(Qt[2]), at.attr("class").includes("attribute-name") ? mt += g : at.attr("class").includes("attribute-keys") ? mt += g + y : at.attr("class").includes("attribute-comment") && (mt += g + y + u));
        }
        at.attr("transform", `translate(${G + e / 2 + mt}, ${be + j + p.height + a / 2})`);
    }), n.select(".name").attr("transform", "translate(" + -p.width / 2 + ", " + (j + a / 2) + ")");
    let W = /*#__PURE__*/ R.rectangle(G, j, O, V, E), A = /*#__PURE__*/ n.insert(()=>W, ":first-child").attr("style", /*#__PURE__*/ h.join("")), { themeVariables: I } = Ot$1(), { rowEven: F, rowOdd: Q, nodeBorder: it } = I;
    m$1.push(0);
    for (let [Y, J] of d.entries()){
        let at = (Y + 1) % 2 === 0 && J.yOffset !== 0, St = /*#__PURE__*/ R.rectangle(G, p.height + j + J?.yOffset, O, J?.rowHeight, {
            ...E,
            fill: at ? F : Q,
            stroke: it
        });
        n.insert(()=>St, "g.label").attr("style", /*#__PURE__*/ h.join("")).attr("class", `row-rect-${at ? "even" : "odd"}`);
    }
    let ct = /*#__PURE__*/ R.line(G, p.height + j, O + G, p.height + j, E);
    n.insert(()=>ct).attr("class", "divider"), ct = /*#__PURE__*/ R.line(g + G, p.height + j, g + G, V + j, E), n.insert(()=>ct).attr("class", "divider"), S$1 && (ct = /*#__PURE__*/ R.line(g + y + G, p.height + j, g + y + G, V + j, E), n.insert(()=>ct).attr("class", "divider")), k && (ct = /*#__PURE__*/ R.line(g + y + u + G, p.height + j, g + y + u + G, V + j, E), n.insert(()=>ct).attr("class", "divider"));
    for (let Y of m$1)ct = /*#__PURE__*/ R.line(G, p.height + j + Y, O + G, p.height + j + Y, E), n.insert(()=>ct).attr("class", "divider");
    if (D(t, A), l && t.look !== "handDrawn") {
        let J = l.split(";")?.filter((tt)=>tt.includes("stroke"))?.map((tt)=>`${tt}`).join("; ");
        n.selectAll("path").attr("style", J ?? ""), n.selectAll(".row-rect-even path").attr("style", l);
    }
    return t.intersect = function(Y) {
        return N.rect(t, Y);
    }, n;
}
m$1(ye, "erBox");
async function Gt(c, t, i, r = 0, e = 0, a = [], h = "") {
    let s = /*#__PURE__*/ c.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
    t !== ln(t) && (t = /*#__PURE__*/ ln(t), t = /*#__PURE__*/ t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
    let l = /*#__PURE__*/ s.node().appendChild(await Rr$1(s, t, {
        width: M(t, i) + 100,
        style: h,
        useHtmlLabels: i.htmlLabels
    }, i));
    if (t.includes("&lt;") || t.includes("&gt;")) {
        let n = l.children[0];
        for(n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); n.childNodes[0];)n = n.childNodes[0], n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }
    let o = /*#__PURE__*/ l.getBBox();
    if (Mo(i.htmlLabels)) {
        let n = l.children[0];
        n.style.textAlign = "start";
        let p = /*#__PURE__*/ ia(l);
        o = /*#__PURE__*/ n.getBoundingClientRect(), p.attr("width", o.width), p.attr("height", o.height);
    }
    return o;
}
m$1(Gt, "addText");
async function Ys(c, t, i, r, e = i.class.padding ?? 12) {
    let a = r ? 0 : 3, h = /*#__PURE__*/ c.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId || t.id), s = null, l = null, o = null, n = null, p = 0, f = 0, m = 0;
    if (s = /*#__PURE__*/ h.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
        let b = t.annotations[0];
        await Zt(s, {
            text: `\xAB${b}\xBB`
        }, 0), p = s.node().getBBox().height;
    }
    l = /*#__PURE__*/ h.insert("g").attr("class", "label-group text"), await Zt(l, t, 0, [
        "font-weight: bolder"
    ]);
    let d = /*#__PURE__*/ l.node().getBBox();
    f = d.height, o = /*#__PURE__*/ h.insert("g").attr("class", "members-group text");
    let g = 0;
    for (let b of t.members){
        let S = await Zt(o, b, g, [
            /*#__PURE__*/ b.parseClassifier()
        ]);
        g += S + a;
    }
    m = o.node().getBBox().height, m <= 0 && (m = e / 2), n = /*#__PURE__*/ h.insert("g").attr("class", "methods-group text");
    let y = 0;
    for (let b of t.methods){
        let S = await Zt(n, b, y, [
            /*#__PURE__*/ b.parseClassifier()
        ]);
        y += S + a;
    }
    let u = /*#__PURE__*/ h.node().getBBox();
    if (s !== null) {
        let b = /*#__PURE__*/ s.node().getBBox();
        s.attr("transform", `translate(${-b.width / 2})`);
    }
    return l.attr("transform", `translate(${-d.width / 2}, ${p})`), u = /*#__PURE__*/ h.node().getBBox(), o.attr("transform", `translate(0, ${p + f + e * 2})`), u = /*#__PURE__*/ h.node().getBBox(), n.attr("transform", `translate(0, ${p + f + (m ? m + e * 4 : e * 2)})`), u = /*#__PURE__*/ h.node().getBBox(), {
        shapeSvg: h,
        bbox: u
    };
}
m$1(Ys, "textHelper");
async function Zt(c, t, i, r = []) {
    let e = /*#__PURE__*/ c.insert("g").attr("class", "label").attr("style", /*#__PURE__*/ r.join("; ")), a = /*#__PURE__*/ Ot$1(), h = "useHtmlLabels" in t ? t.useHtmlLabels : Mo(a.htmlLabels) ?? true, s = "";
    "text" in t ? s = t.text : s = t.label, !h && s.startsWith("\\") && (s = /*#__PURE__*/ s.substring(1)), nr$1(s) && (h = true);
    let l = await Rr$1(e, /*#__PURE__*/ Xo(/*#__PURE__*/ Yt$1(s)), {
        width: M(s, a) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: h
    }, a), o, n = 1;
    if (h) {
        let p = l.children[0], f = /*#__PURE__*/ ia(l);
        n = p.innerHTML.split("<br>").length, p.innerHTML.includes("</math>") && (n += p.innerHTML.split("<mrow>").length - 1);
        let m = /*#__PURE__*/ p.getElementsByTagName("img");
        if (m) {
            let d = s.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(/*#__PURE__*/ [
                ...m
            ].map((g)=>new Promise((y)=>{
                    function u() {
                        if (g.style.display = "flex", g.style.flexDirection = "column", d) {
                            let b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, k = parseInt(b, 10) * 5 + "px";
                            g.style.minWidth = k, g.style.maxWidth = k;
                        } else g.style.width = "100%";
                        y(g);
                    }
                    m$1(u, "setupImage"), setTimeout(()=>{
                        g.complete && u();
                    }), g.addEventListener("error", u), g.addEventListener("load", u);
                })));
        }
        o = /*#__PURE__*/ p.getBoundingClientRect(), f.attr("width", o.width), f.attr("height", o.height);
    } else {
        r.includes("font-weight: bolder") && ia(l).selectAll("tspan").attr("font-weight", ""), n = l.children.length;
        let p = l.children[0];
        (l.textContent === "" || l.textContent.includes("&gt")) && (p.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (p.textContent = p.textContent[0] + " " + p.textContent.substring(1))), p.textContent === "undefined" && (p.textContent = ""), o = /*#__PURE__*/ l.getBBox();
    }
    return e.attr("transform", "translate(0," + (-o.height / (2 * n) + i) + ")"), o.height;
}
m$1(Zt, "addText");
async function Zs(c, t) {
    let i = /*#__PURE__*/ mr$1(), r = i.class.padding ?? 12, e = r, a = t.useHtmlLabels ?? Mo(i.htmlLabels) ?? true, h = t;
    h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
    let { shapeSvg: s, bbox: l } = await Ys(c, t, i, a, e), { labelStyles: o, nodeStyles: n } = m(t);
    t.labelStyle = o, t.cssStyles = h.styles || "";
    let p = h.styles?.join(";") || n || "";
    t.cssStyles || (t.cssStyles = /*#__PURE__*/ p.replaceAll("!important", "").split(";"));
    let f = h.members.length === 0 && h.methods.length === 0 && !i.class?.hideEmptyMembersBox, m$1 = /*#__PURE__*/ v.svg(s), d = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let g = l.width, y = l.height;
    h.members.length === 0 && h.methods.length === 0 ? y += e : h.members.length > 0 && h.methods.length === 0 && (y += e * 2);
    let u = -g / 2, b = -y / 2, S$1 = /*#__PURE__*/ m$1.rectangle(u - r, b - r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), g + 2 * r, y + 2 * r + (f ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), d), k = /*#__PURE__*/ s.insert(()=>S$1, ":first-child");
    k.attr("class", "basic label-container");
    let w = /*#__PURE__*/ k.node().getBBox();
    s.selectAll(".text").each((E, L, O)=>{
        let V = /*#__PURE__*/ ia(O[L]), G = /*#__PURE__*/ V.attr("transform"), j = 0;
        if (G) {
            let F = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
            F && (j = /*#__PURE__*/ parseFloat(F[2]));
        }
        let W = j + b + r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
        a || (W -= 4);
        let A = u;
        (V.attr("class").includes("label-group") || V.attr("class").includes("annotation-group")) && (A = -V.node()?.getBBox().width / 2 || 0, s.selectAll("text").each(function(I, F, Q) {
            window.getComputedStyle(Q[F]).textAnchor === "middle" && (A = 0);
        })), V.attr("transform", `translate(${A}, ${W})`);
    });
    let B = s.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, T = s.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R = s.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
    if (h.members.length > 0 || h.methods.length > 0 || f) {
        let E = /*#__PURE__*/ m$1.line(w.x, B + T + b + r, w.x + w.width, B + T + b + r, d);
        s.insert(()=>E).attr("class", "divider").attr("style", p);
    }
    if (f || h.members.length > 0 || h.methods.length > 0) {
        let E = /*#__PURE__*/ m$1.line(w.x, B + T + R + b + e * 2 + r, w.x + w.width, B + T + R + b + r + e * 2, d);
        s.insert(()=>E).attr("class", "divider").attr("style", p);
    }
    if (h.look !== "handDrawn" && s.selectAll("path").attr("style", p), k.select(":nth-child(2)").attr("style", p), s.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", p), !a) {
        let E = /*#__PURE__*/ RegExp(/color\s*:\s*([^;]*)/), L = /*#__PURE__*/ E.exec(p);
        if (L) {
            let O = /*#__PURE__*/ L[0].replace("color", "fill");
            s.selectAll("tspan").attr("style", O);
        } else if (o) {
            let O = /*#__PURE__*/ E.exec(o);
            if (O) {
                let V = /*#__PURE__*/ O[0].replace("color", "fill");
                s.selectAll("tspan").attr("style", V);
            }
        }
    }
    return D(t, k), t.intersect = function(E) {
        return N.rect(t, E);
    }, s;
}
m$1(Zs, "classBox");
async function Us(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let e = t, a = t, h = 20, s = 20, l = "verifyMethod" in t, o = /*#__PURE__*/ P(t), n = /*#__PURE__*/ c.insert("g").attr("class", o).attr("id", t.domId ?? t.id), p;
    l ? p = await pt(n, `&lt;&lt;${e.type}&gt;&gt;`, 0, t.labelStyle) : p = await pt(n, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
    let f = p, m$1 = await pt(n, e.name, f, t.labelStyle + "; font-weight: bold;");
    if (f += m$1 + s, l) {
        let B = await pt(n, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, f, t.labelStyle);
        f += B;
        let T = await pt(n, `${e.text ? `Text: ${e.text}` : ""}`, f, t.labelStyle);
        f += T;
        let R = await pt(n, `${e.risk ? `Risk: ${e.risk}` : ""}`, f, t.labelStyle);
        f += R, await pt(n, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, f, t.labelStyle);
    } else {
        let B = await pt(n, `${a.type ? `Type: ${a.type}` : ""}`, f, t.labelStyle);
        f += B, await pt(n, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t.labelStyle);
    }
    let d = (n.node()?.getBBox().width ?? 200) + h, g = (n.node()?.getBBox().height ?? 200) + h, y = -d / 2, u = -g / 2, b = /*#__PURE__*/ v.svg(n), S$1 = /*#__PURE__*/ S(t, {});
    t.look !== "handDrawn" && (S$1.roughness = 0, S$1.fillStyle = "solid");
    let k = /*#__PURE__*/ b.rectangle(y, u, d, g, S$1), w = /*#__PURE__*/ n.insert(()=>k, ":first-child");
    if (w.attr("class", "basic label-container").attr("style", r), n.selectAll(".label").each((B, T, R)=>{
        let E = /*#__PURE__*/ ia(R[T]), L = /*#__PURE__*/ E.attr("transform"), O = 0, V = 0;
        if (L) {
            let A = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L);
            A && (O = /*#__PURE__*/ parseFloat(A[1]), V = /*#__PURE__*/ parseFloat(A[2]));
        }
        let G = V - g / 2, j = y + h / 2;
        (T === 0 || T === 1) && (j = O), E.attr("transform", `translate(${j}, ${G + h})`);
    }), f > p + m$1 + s) {
        let B = /*#__PURE__*/ b.line(y, u + p + m$1 + s, y + d, u + p + m$1 + s, S$1);
        n.insert(()=>B).attr("style", r);
    }
    return D(t, w), t.intersect = function(B) {
        return N.rect(t, B);
    }, n;
}
m$1(Us, "requirementBox");
async function pt(c, t, i, r = "") {
    if (t === "") return 0;
    let e = /*#__PURE__*/ c.insert("g").attr("class", "label").attr("style", r), a = /*#__PURE__*/ mr$1(), h = a.htmlLabels ?? true, s = await Rr$1(e, /*#__PURE__*/ Xo(/*#__PURE__*/ Yt$1(t)), {
        width: M(t, a) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: h,
        style: r
    }, a), l;
    if (h) {
        let o = s.children[0], n = /*#__PURE__*/ ia(s);
        l = /*#__PURE__*/ o.getBoundingClientRect(), n.attr("width", l.width), n.attr("height", l.height);
    } else {
        let o = s.children[0];
        for (let n of o.children)n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n.setAttribute("style", r);
        l = /*#__PURE__*/ s.getBBox(), l.height += 6;
    }
    return e.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + i})`), l.height;
}
m$1(pt, "addText");
var Ar = /*#__PURE__*/ m$1((c)=>{
    switch(c){
        case "Very High":
            return "red";
        case "High":
            return "orange";
        case "Medium":
            return null;
        case "Low":
            return "blue";
        case "Very Low":
            return "lightblue";
    }
}, "colorFromPriority");
async function Qs(c, t, { config: i }) {
    let { labelStyles: r, nodeStyles: e } = m(t);
    t.labelStyle = r || "";
    let a = 10, h = t.width;
    t.width = (t.width ?? 200) - 10;
    let { shapeSvg: s, bbox: l, label: o } = await C(c, t, /*#__PURE__*/ P(t)), n = t.padding || 10, p = "", f;
    "ticket" in t && t.ticket && i?.kanban?.ticketBaseUrl && (p = i?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = /*#__PURE__*/ s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
    let m$1 = {
        useHtmlLabels: t.useHtmlLabels,
        labelStyle: t.labelStyle || "",
        width: t.width,
        img: t.img,
        padding: t.padding || 8,
        centerLabel: false
    }, d, g;
    f ? { label: d, bbox: g } = await At(f, "ticket" in t && t.ticket || "", m$1) : { label: d, bbox: g } = await At(s, "ticket" in t && t.ticket || "", m$1);
    let { label: y, bbox: u } = await At(s, "assigned" in t && t.assigned || "", m$1);
    t.width = h;
    let b = 10, S$1 = t?.width || 0, k = Math.max(g.height, u.height) / 2, w = Math.max(l.height + b * 2, t?.height || 0) + k, B = -S$1 / 2, T = -w / 2;
    o.attr("transform", "translate(" + (n - S$1 / 2) + ", " + (-k - l.height / 2) + ")"), d.attr("transform", "translate(" + (n - S$1 / 2) + ", " + (-k + l.height / 2) + ")"), y.attr("transform", "translate(" + (n + S$1 / 2 - u.width - 2 * a) + ", " + (-k + l.height / 2) + ")");
    let R, { rx: E, ry: L } = t, { cssStyles: O } = t;
    if (t.look === "handDrawn") {
        let V = /*#__PURE__*/ v.svg(s), G = /*#__PURE__*/ S(t, {}), j = E || L ? V.path(/*#__PURE__*/ st(B, T, S$1, w, E || 0), G) : V.rectangle(B, T, S$1, w, G);
        R = /*#__PURE__*/ s.insert(()=>j, ":first-child"), R.attr("class", "basic label-container").attr("style", O || null);
    } else {
        R = /*#__PURE__*/ s.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", E ?? 5).attr("ry", L ?? 5).attr("x", B).attr("y", T).attr("width", S$1).attr("height", w);
        let V = "priority" in t && t.priority;
        if (V) {
            let G = /*#__PURE__*/ s.append("line"), j = B + 2, W = T + Math.floor((E ?? 0) / 2), A = T + w - Math.floor((E ?? 0) / 2);
            G.attr("x1", j).attr("y1", W).attr("x2", j).attr("y2", A).attr("stroke-width", "4").attr("stroke", /*#__PURE__*/ Ar(V));
        }
    }
    return D(t, R), t.height = w, t.intersect = function(V) {
        return N.rect(t, V);
    }, s;
}
m$1(Qs, "kanbanItem");
async function Js(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /*#__PURE__*/ P(t)), l = a.width + 10 * h, o = a.height + 8 * h, n = .15 * l, { cssStyles: p } = t, f = a.width + 20, m$1 = a.height + 20, d = /*#__PURE__*/ Math.max(l, f), g = /*#__PURE__*/ Math.max(o, m$1);
    s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
    let y, u = `M0 0 
    a${n},${n} 1 0,0 ${d * .25},${-1 * g * .1}
    a${n},${n} 1 0,0 ${d * .25},0
    a${n},${n} 1 0,0 ${d * .25},0
    a${n},${n} 1 0,0 ${d * .25},${g * .1}

    a${n},${n} 1 0,0 ${d * .15},${g * .33}
    a${n * .8},${n * .8} 1 0,0 0,${g * .34}
    a${n},${n} 1 0,0 ${-1 * d * .15},${g * .33}

    a${n},${n} 1 0,0 ${-1 * d * .25},${g * .15}
    a${n},${n} 1 0,0 ${-1 * d * .25},0
    a${n},${n} 1 0,0 ${-1 * d * .25},0
    a${n},${n} 1 0,0 ${-1 * d * .25},${-1 * g * .15}

    a${n},${n} 1 0,0 ${-1 * d * .1},${-1 * g * .33}
    a${n * .8},${n * .8} 1 0,0 0,${-1 * g * .34}
    a${n},${n} 1 0,0 ${d * .1},${-1 * g * .33}
  H0 V0 Z`;
    if (t.look === "handDrawn") {
        let b = /*#__PURE__*/ v.svg(e), S$1 = /*#__PURE__*/ S(t, {}), k = /*#__PURE__*/ b.path(u, S$1);
        y = /*#__PURE__*/ e.insert(()=>k, ":first-child"), y.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(p));
    } else y = /*#__PURE__*/ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", u);
    return y.attr("transform", `translate(${-d / 2}, ${-g / 2})`), D(t, y), t.calcIntersect = function(b, S) {
        return N.rect(b, S);
    }, t.intersect = function(b) {
        return pt$1.info("Bang intersect", t, b), N.rect(t, b);
    }, e;
}
m$1(Js, "bang");
async function Ks(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /*#__PURE__*/ P(t)), l = a.width + 2 * h, o = a.height + 2 * h, n = .15 * l, p = .25 * l, f = .35 * l, m$1 = .2 * l, { cssStyles: d } = t, g, y = `M0 0 
    a${n},${n} 0 0,1 ${l * .25},${-1 * l * .1}
    a${f},${f} 1 0,1 ${l * .4},${-1 * l * .1}
    a${p},${p} 1 0,1 ${l * .35},${l * .2}

    a${n},${n} 1 0,1 ${l * .15},${o * .35}
    a${m$1},${m$1} 1 0,1 ${-1 * l * .15},${o * .65}

    a${p},${n} 1 0,1 ${-1 * l * .25},${l * .15}
    a${f},${f} 1 0,1 ${-1 * l * .5},0
    a${n},${n} 1 0,1 ${-1 * l * .25},${-1 * l * .15}

    a${n},${n} 1 0,1 ${-1 * l * .1},${-1 * o * .35}
    a${m$1},${m$1} 1 0,1 ${l * .1},${-1 * o * .65}
  H0 V0 Z`;
    if (t.look === "handDrawn") {
        let u = /*#__PURE__*/ v.svg(e), b = /*#__PURE__*/ S(t, {}), S$1 = /*#__PURE__*/ u.path(y, b);
        g = /*#__PURE__*/ e.insert(()=>S$1, ":first-child"), g.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Vt$1(d));
    } else g = /*#__PURE__*/ e.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", y);
    return s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), g.attr("transform", `translate(${-l / 2}, ${-o / 2})`), D(t, g), t.calcIntersect = function(u, b) {
        return N.rect(u, b);
    }, t.intersect = function(u) {
        return pt$1.info("Cloud intersect", t, u), N.rect(t, u);
    }, e;
}
m$1(Ks, "cloud");
async function tr(c, t) {
    let { labelStyles: i, nodeStyles: r } = m(t);
    t.labelStyle = i;
    let { shapeSvg: e, bbox: a, halfPadding: h, label: s } = await C(c, t, /*#__PURE__*/ P(t)), l = a.width + 8 * h, o = a.height + 2 * h, n = 5, p = `
    M${-l / 2} ${o / 2 - n}
    v${-o + 2 * n}
    q0,-${n} ${n},-${n}
    h${l - 2 * n}
    q${n},0 ${n},${n}
    v${o - 2 * n}
    q0,${n} -${n},${n}
    h${-l + 2 * n}
    q-${n},0 -${n},-${n}
    Z
  `, f = /*#__PURE__*/ e.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", r).attr("d", p);
    return e.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", o / 2).attr("x2", l / 2).attr("y2", o / 2), s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), e.append(()=>s.node()), D(t, f), t.calcIntersect = function(m, d) {
        return N.rect(m, d);
    }, t.intersect = function(m) {
        return N.rect(t, m);
    }, e;
}
m$1(tr, "defaultMindmapNode");
async function er(c, t) {
    let i = {
        padding: t.padding ?? 0
    };
    return Xt(c, t, i);
}
m$1(er, "mindmapCircle");
var Or = [
    {
        semanticName: "Process",
        name: "Rectangle",
        shortName: "rect",
        description: "Standard process shape",
        aliases: [
            "proc",
            "process",
            "rectangle"
        ],
        internalAliases: [
            "squareRect"
        ],
        handler: Rs
    },
    {
        semanticName: "Event",
        name: "Rounded Rectangle",
        shortName: "rounded",
        description: "Represents an event",
        aliases: [
            "event"
        ],
        internalAliases: [
            "roundedRect"
        ],
        handler: Bs
    },
    {
        semanticName: "Terminal Point",
        name: "Stadium",
        shortName: "stadium",
        description: "Terminal point",
        aliases: [
            "terminal",
            "pill"
        ],
        handler: Gs
    },
    {
        semanticName: "Subprocess",
        name: "Framed Rectangle",
        shortName: "fr-rect",
        description: "Subprocess",
        aliases: [
            "subprocess",
            "subproc",
            "framed-rectangle",
            "subroutine"
        ],
        handler: Os
    },
    {
        semanticName: "Database",
        name: "Cylinder",
        shortName: "cyl",
        description: "Database storage",
        aliases: [
            "db",
            "database",
            "cylinder"
        ],
        handler: ss
    },
    {
        semanticName: "Start",
        name: "Circle",
        shortName: "circle",
        description: "Starting point",
        aliases: [
            "circ"
        ],
        handler: Xt
    },
    {
        semanticName: "Bang",
        name: "Bang",
        shortName: "bang",
        description: "Bang",
        aliases: [
            "bang"
        ],
        handler: Js
    },
    {
        semanticName: "Cloud",
        name: "Cloud",
        shortName: "cloud",
        description: "cloud",
        aliases: [
            "cloud"
        ],
        handler: Ks
    },
    {
        semanticName: "Decision",
        name: "Diamond",
        shortName: "diam",
        description: "Decision-making step",
        aliases: [
            "decision",
            "diamond",
            "question"
        ],
        handler: Ms
    },
    {
        semanticName: "Prepare Conditional",
        name: "Hexagon",
        shortName: "hex",
        description: "Preparation or condition step",
        aliases: [
            "hexagon",
            "prepare"
        ],
        handler: cs
    },
    {
        semanticName: "Data Input/Output",
        name: "Lean Right",
        shortName: "lean-r",
        description: "Represents input or output",
        aliases: [
            "lean-right",
            "in-out"
        ],
        internalAliases: [
            "lean_right"
        ],
        handler: bs
    },
    {
        semanticName: "Data Input/Output",
        name: "Lean Left",
        shortName: "lean-l",
        description: "Represents output or input",
        aliases: [
            "lean-left",
            "out-in"
        ],
        internalAliases: [
            "lean_left"
        ],
        handler: xs
    },
    {
        semanticName: "Priority Action",
        name: "Trapezoid Base Bottom",
        shortName: "trap-b",
        description: "Priority action",
        aliases: [
            "priority",
            "trapezoid-bottom",
            "trapezoid"
        ],
        handler: Is
    },
    {
        semanticName: "Manual Operation",
        name: "Trapezoid Base Top",
        shortName: "trap-t",
        description: "Represents a manual task",
        aliases: [
            "manual",
            "trapezoid-top",
            "inv-trapezoid"
        ],
        internalAliases: [
            "inv_trapezoid"
        ],
        handler: us
    },
    {
        semanticName: "Stop",
        name: "Double Circle",
        shortName: "dbl-circ",
        description: "Represents a stop point",
        aliases: [
            "double-circle"
        ],
        internalAliases: [
            "doublecircle"
        ],
        handler: as
    },
    {
        semanticName: "Text Block",
        name: "Text Block",
        shortName: "text",
        description: "Text block",
        handler: Vs
    },
    {
        semanticName: "Card",
        name: "Notched Rectangle",
        shortName: "notch-rect",
        description: "Represents a card",
        aliases: [
            "card",
            "notched-rectangle"
        ],
        handler: Ze
    },
    {
        semanticName: "Lined/Shaded Process",
        name: "Lined Rectangle",
        shortName: "lin-rect",
        description: "Lined process shape",
        aliases: [
            "lined-rectangle",
            "lined-process",
            "lin-proc",
            "shaded-process"
        ],
        handler: Cs
    },
    {
        semanticName: "Start",
        name: "Small Circle",
        shortName: "sm-circ",
        description: "Small starting point",
        aliases: [
            "start",
            "small-circle"
        ],
        internalAliases: [
            "stateStart"
        ],
        handler: As
    },
    {
        semanticName: "Stop",
        name: "Framed Circle",
        shortName: "fr-circ",
        description: "Stop point",
        aliases: [
            "stop",
            "framed-circle"
        ],
        internalAliases: [
            "stateEnd"
        ],
        handler: js
    },
    {
        semanticName: "Fork/Join",
        name: "Filled Rectangle",
        shortName: "fork",
        description: "Fork or join in process flow",
        aliases: [
            "join"
        ],
        internalAliases: [
            "forkJoin"
        ],
        handler: ns
    },
    {
        semanticName: "Collate",
        name: "Hourglass",
        shortName: "hourglass",
        description: "Represents a collate operation",
        aliases: [
            "hourglass",
            "collate"
        ],
        handler: hs
    },
    {
        semanticName: "Comment",
        name: "Curly Brace",
        shortName: "brace",
        description: "Adds a comment",
        aliases: [
            "comment",
            "brace-l"
        ],
        handler: Je
    },
    {
        semanticName: "Comment Right",
        name: "Curly Brace",
        shortName: "brace-r",
        description: "Adds a comment",
        handler: Ke
    },
    {
        semanticName: "Comment with braces on both sides",
        name: "Curly Braces",
        shortName: "braces",
        description: "Adds a comment",
        handler: ts
    },
    {
        semanticName: "Com Link",
        name: "Lightning Bolt",
        shortName: "bolt",
        description: "Communication link",
        aliases: [
            "com-link",
            "lightning-bolt"
        ],
        handler: Ss
    },
    {
        semanticName: "Document",
        name: "Document",
        shortName: "doc",
        description: "Represents a document",
        aliases: [
            "doc",
            "document"
        ],
        handler: zs
    },
    {
        semanticName: "Delay",
        name: "Half-Rounded Rectangle",
        shortName: "delay",
        description: "Represents a delay",
        aliases: [
            "half-rounded-rectangle"
        ],
        handler: ls
    },
    {
        semanticName: "Direct Access Storage",
        name: "Horizontal Cylinder",
        shortName: "h-cyl",
        description: "Direct access storage",
        aliases: [
            "das",
            "horizontal-cylinder"
        ],
        handler: Ws
    },
    {
        semanticName: "Disk Storage",
        name: "Lined Cylinder",
        shortName: "lin-cyl",
        description: "Disk storage",
        aliases: [
            "disk",
            "lined-cylinder"
        ],
        handler: ws
    },
    {
        semanticName: "Display",
        name: "Curved Trapezoid",
        shortName: "curv-trap",
        description: "Represents a display",
        aliases: [
            "curved-trapezoid",
            "display"
        ],
        handler: es
    },
    {
        semanticName: "Divided Process",
        name: "Divided Rectangle",
        shortName: "div-rect",
        description: "Divided process shape",
        aliases: [
            "div-proc",
            "divided-rectangle",
            "divided-process"
        ],
        handler: rs
    },
    {
        semanticName: "Extract",
        name: "Triangle",
        shortName: "tri",
        description: "Extraction process",
        aliases: [
            "extract",
            "triangle"
        ],
        handler: _s
    },
    {
        semanticName: "Internal Storage",
        name: "Window Pane",
        shortName: "win-pane",
        description: "Internal storage",
        aliases: [
            "internal-storage",
            "window-pane"
        ],
        handler: Xs
    },
    {
        semanticName: "Junction",
        name: "Filled Circle",
        shortName: "f-circ",
        description: "Junction point",
        aliases: [
            "junction",
            "filled-circle"
        ],
        handler: os
    },
    {
        semanticName: "Loop Limit",
        name: "Trapezoidal Pentagon",
        shortName: "notch-pent",
        description: "Loop limit step",
        aliases: [
            "loop-limit",
            "notched-pentagon"
        ],
        handler: Fs
    },
    {
        semanticName: "Manual File",
        name: "Flipped Triangle",
        shortName: "flip-tri",
        description: "Manual file operation",
        aliases: [
            "manual-file",
            "flipped-triangle"
        ],
        handler: is
    },
    {
        semanticName: "Manual Input",
        name: "Sloped Rectangle",
        shortName: "sl-rect",
        description: "Manual input step",
        aliases: [
            "manual-input",
            "sloped-rectangle"
        ],
        handler: Ts
    },
    {
        semanticName: "Multi-Document",
        name: "Stacked Document",
        shortName: "docs",
        description: "Multiple documents",
        aliases: [
            "documents",
            "st-doc",
            "stacked-document"
        ],
        handler: Ds
    },
    {
        semanticName: "Multi-Process",
        name: "Stacked Rectangle",
        shortName: "st-rect",
        description: "Multiple processes",
        aliases: [
            "procs",
            "processes",
            "stacked-rectangle"
        ],
        handler: $s
    },
    {
        semanticName: "Stored Data",
        name: "Bow Tie Rectangle",
        shortName: "bow-rect",
        description: "Stored data",
        aliases: [
            "stored-data",
            "bow-tie-rectangle"
        ],
        handler: Ye
    },
    {
        semanticName: "Summary",
        name: "Crossed Circle",
        shortName: "cross-circ",
        description: "Summary",
        aliases: [
            "summary",
            "crossed-circle"
        ],
        handler: Qe
    },
    {
        semanticName: "Tagged Document",
        name: "Tagged Document",
        shortName: "tag-doc",
        description: "Tagged document",
        aliases: [
            "tag-doc",
            "tagged-document"
        ],
        handler: Hs
    },
    {
        semanticName: "Tagged Process",
        name: "Tagged Rectangle",
        shortName: "tag-rect",
        description: "Tagged process",
        aliases: [
            "tagged-rectangle",
            "tag-proc",
            "tagged-process"
        ],
        handler: Ls
    },
    {
        semanticName: "Paper Tape",
        name: "Flag",
        shortName: "flag",
        description: "Paper tape",
        aliases: [
            "paper-tape"
        ],
        handler: qs
    },
    {
        semanticName: "Odd",
        name: "Odd",
        shortName: "odd",
        description: "Odd shape",
        internalAliases: [
            "rect_left_inv_arrow"
        ],
        handler: ks
    },
    {
        semanticName: "Lined Document",
        name: "Lined Document",
        shortName: "lin-doc",
        description: "Lined document",
        aliases: [
            "lined-document"
        ],
        handler: Ns
    }
], Lr = /*#__PURE__*/ m$1(()=>{
    let t = [
        .../*#__PURE__*/ Object.entries({
            state: Es,
            choice: Ue,
            note: vs,
            rectWithTitle: Ps,
            labelRect: ys,
            iconSquare: ds,
            iconCircle: ms,
            icon: ps,
            iconRounded: fs,
            imageSquare: gs,
            anchor: qe,
            kanbanItem: Qs,
            mindmapCircle: er,
            defaultMindmapNode: tr,
            classBox: Zs,
            erBox: ye,
            requirementBox: Us
        }),
        .../*#__PURE__*/ Or.flatMap((i)=>[
                i.shortName,
                ..."aliases" in i ? i.aliases : [],
                ..."internalAliases" in i ? i.internalAliases : []
            ].map((e)=>[
                    e,
                    i.handler
                ]))
    ];
    return Object.fromEntries(t);
}, "generateShapeMap"), xe = /*#__PURE__*/ Lr();
function Md(c) {
    return c in xe;
}
m$1(Md, "isValidShape");
var Ut = new Map;
async function Td(c, t, i) {
    let r, e;
    t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
    let a = t.shape ? xe[t.shape] : void 0;
    if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
    if (t.link) {
        let h;
        i.config.securityLevel === "sandbox" ? h = "_top" : t.linkTarget && (h = t.linkTarget || "_blank"), r = /*#__PURE__*/ c.insert("svg:a").attr("xlink:href", t.link).attr("target", h ?? null), e = await a(r, t, i);
    } else e = await a(c, t, i), r = e;
    return t.tooltip && e.attr("title", t.tooltip), Ut.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(Td, "insertNode");
var Rd = /*#__PURE__*/ m$1((c, t)=>{
    Ut.set(t.id, c);
}, "setNodeElem"), Gd = /*#__PURE__*/ m$1(()=>{
    Ut.clear();
}, "clear"), Ed = /*#__PURE__*/ m$1((c)=>{
    let t = /*#__PURE__*/ Ut.get(c.id);
    pt$1.trace("Transforming node", c.diff, c, "translate(" + (c.x - c.width / 2 - 5) + ", " + c.width / 2 + ")");
    let i = 8, r = c.diff || 0;
    return c.clusterNode ? t.attr("transform", "translate(" + (c.x + r - c.width / 2) + ", " + (c.y - c.height / 2 - i) + ")") : t.attr("transform", "translate(" + c.x + ", " + c.y + ")"), r;
}, "positionNode");
export { C, D, Ed as E, Gd as G, Md as M, Rt as R, Td as T, Rd as a, ba as b, v, xa as x };
