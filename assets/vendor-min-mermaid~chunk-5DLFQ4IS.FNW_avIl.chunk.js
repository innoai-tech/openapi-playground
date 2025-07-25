import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js';
import { u, m, f, p } from './vendor-min-mermaid~chunk-BW63ANAF.CGrRDopa.chunk.js';
import { r as rs$1, H as He$1 } from './vendor-min-mermaid~chunk-3GKE4KUU.C-fENmn_.chunk.js';
import { J as Je$1, X as Xe$1, S, M as M$1 } from './vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js';
import { t as tt$1, R as Rf, h as hh, D as De$1, k as kh, I as Il, O as Or, i as ih, $ as $f, e as XC, f as ed, G as GC } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = /*#__PURE__*/ m$1(async (l, t, o)=>{
    let r, e = t.useHtmlLabels || Rf(hh()?.htmlLabels);
    o ? r = o : r = "node default";
    let a = /*#__PURE__*/ l.insert("g").attr("class", r).attr("id", t.domId || t.id), h = /*#__PURE__*/ a.insert("g").attr("class", "label").attr("style", /*#__PURE__*/ Je$1(t.labelStyle)), s;
    t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
    let c = await rs$1(h, /*#__PURE__*/ De$1(/*#__PURE__*/ Xe$1(s), /*#__PURE__*/ hh()), {
        useHtmlLabels: e,
        width: t.width || hh().flowchart?.wrappingWidth,
        cssClasses: "markdown-node-label",
        style: t.labelStyle,
        addSvgBackground: !!t.icon || !!t.img
    }), i = /*#__PURE__*/ c.getBBox(), n = (t?.padding ?? 0) / 2;
    if (e) {
        let p = c.children[0], m = /*#__PURE__*/ kh(c), f = /*#__PURE__*/ p.getElementsByTagName("img");
        if (f) {
            let g = s.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(/*#__PURE__*/ [
                ...f
            ].map((d)=>new Promise((x)=>{
                    function u() {
                        if (d.style.display = "flex", d.style.flexDirection = "column", g) {
                            let b = hh().fontSize ? hh().fontSize : window.getComputedStyle(document.body).fontSize, S$1 = 5, [$ = Il.fontSize] = S(b), w = $ * S$1 + "px";
                            d.style.minWidth = w, d.style.maxWidth = w;
                        } else d.style.width = "100%";
                        x(d);
                    }
                    m$1(u, "setupImage"), setTimeout(()=>{
                        d.complete && u();
                    }), d.addEventListener("error", u), d.addEventListener("load", u);
                })));
        }
        i = /*#__PURE__*/ p.getBoundingClientRect(), m.attr("width", i.width), m.attr("height", i.height);
    }
    return e ? h.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")") : h.attr("transform", "translate(0, " + -i.height / 2 + ")"), t.centerLabel && h.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")"), h.insert("rect", ":first-child"), {
        shapeSvg: a,
        bbox: i,
        halfPadding: n,
        label: h
    };
}, "labelHelper"), Et = /*#__PURE__*/ m$1(async (l, t, o)=>{
    let r = o.useHtmlLabels || Rf(hh()?.flowchart?.htmlLabels), e = /*#__PURE__*/ l.insert("g").attr("class", "label").attr("style", o.labelStyle || ""), a = await rs$1(e, /*#__PURE__*/ De$1(/*#__PURE__*/ Xe$1(t), /*#__PURE__*/ hh()), {
        useHtmlLabels: r,
        width: o.width || hh()?.flowchart?.wrappingWidth,
        style: o.labelStyle,
        addSvgBackground: !!o.icon || !!o.img
    }), h = /*#__PURE__*/ a.getBBox(), s = o.padding / 2;
    if (Rf(hh()?.flowchart?.htmlLabels)) {
        let c = a.children[0], i = /*#__PURE__*/ kh(a);
        h = /*#__PURE__*/ c.getBoundingClientRect(), i.attr("width", h.width), i.attr("height", h.height);
    }
    return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), o.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
        shapeSvg: l,
        bbox: h,
        halfPadding: s,
        label: e
    };
}, "insertLabel"), M = /*#__PURE__*/ m$1((l, t)=>{
    let o = /*#__PURE__*/ t.node().getBBox();
    l.width = o.width, l.height = o.height;
}, "updateNodeBounds");
var P = /*#__PURE__*/ m$1((l, t)=>(l.look === "handDrawn" ? "rough-node" : "node") + " " + l.cssClasses + " " + (t || ""), "getNodeClasses");
function W(l) {
    let t = /*#__PURE__*/ l.map((o, r)=>`${r === 0 ? "M" : "L"}${o.x},${o.y}`);
    return t.push("Z"), t.join(" ");
}
m$1(W, "createPathFromPoints");
function lt(l, t, o, r, e, a) {
    let h = [], c = o - l, i = r - t, n = c / a, p = 2 * Math.PI / n, m = t + i / 2;
    for(let f = 0; f <= 50; f++){
        let g = f / 50, d = l + g * c, x = m + e * Math.sin(p * (d - l));
        h.push({
            x: d,
            y: x
        });
    }
    return h;
}
m$1(lt, "generateFullSineWavePoints");
function At(l, t, o, r, e, a) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let m = s + p * n, f = l + o * Math.cos(m), g = t + o * Math.sin(m);
        h.push({
            x: -f,
            y: -g
        });
    }
    return h;
}
m$1(At, "generateCirclePoints");
function Jt(l, t, o) {
    if (l && l.length) {
        let [r, e] = t, a = Math.PI / 180 * o, h = /*#__PURE__*/ Math.cos(a), s = /*#__PURE__*/ Math.sin(a);
        for (let c of l){
            let [i, n] = c;
            c[0] = (i - r) * h - (n - e) * s + r, c[1] = (i - r) * s + (n - e) * h + e;
        }
    }
}
m$1(Jt, "t");
function Qs(l, t) {
    return l[0] === t[0] && l[1] === t[1];
}
m$1(Qs, "e");
function Js(l, t, o, r = 1) {
    let e = o, a = /*#__PURE__*/ Math.max(t, .1), h = l[0] && l[0][0] && typeof l[0][0] == "number" ? [
        l
    ] : l, s = [
        0,
        0
    ];
    if (e) for (let i of h)Jt(i, s, e);
    let c = /*#__PURE__*/ function(i, n, p) {
        let m = [];
        for (let b of i){
            let S = [
                ...b
            ];
            Qs(S[0], S[S.length - 1]) || S.push([
                S[0][0],
                S[0][1]
            ]), S.length > 2 && m.push(S);
        }
        let f = [];
        n = /*#__PURE__*/ Math.max(n, .1);
        let g = [];
        for (let b of m)for(let S = 0; S < b.length - 1; S++){
            let $ = b[S], w = b[S + 1];
            if ($[1] !== w[1]) {
                let B = /*#__PURE__*/ Math.min($[1], w[1]);
                g.push({
                    ymin: B,
                    ymax: /*#__PURE__*/ Math.max($[1], w[1]),
                    x: B === $[1] ? $[0] : w[0],
                    islope: (w[0] - $[0]) / (w[1] - $[1])
                });
            }
        }
        if (g.sort((b, S)=>b.ymin < S.ymin ? -1 : b.ymin > S.ymin ? 1 : b.x < S.x ? -1 : b.x > S.x ? 1 : b.ymax === S.ymax ? 0 : (b.ymax - S.ymax) / Math.abs(b.ymax - S.ymax)), !g.length) return f;
        let d = [], x = g[0].ymin, u = 0;
        for(; d.length || g.length;){
            if (g.length) {
                let b = -1;
                for(let S = 0; S < g.length && !(g[S].ymin > x); S++)b = S;
                g.splice(0, b + 1).forEach((S)=>{
                    d.push({
                        s: x,
                        edge: S
                    });
                });
            }
            if (d = /*#__PURE__*/ d.filter((b)=>!(b.edge.ymax <= x)), d.sort((b, S)=>b.edge.x === S.edge.x ? 0 : (b.edge.x - S.edge.x) / Math.abs(b.edge.x - S.edge.x)), (p !== 1 || u % n == 0) && d.length > 1) for(let b = 0; b < d.length; b += 2){
                let S = b + 1;
                if (S >= d.length) break;
                let $ = d[b].edge, w = d[S].edge;
                f.push([
                    [
                        /*#__PURE__*/ Math.round($.x),
                        x
                    ],
                    [
                        /*#__PURE__*/ Math.round(w.x),
                        x
                    ]
                ]);
            }
            x += p, d.forEach((b)=>{
                b.edge.x = b.edge.x + p * b.edge.islope;
            }), u++;
        }
        return f;
    }(h, a, r);
    if (e) {
        for (let i of h)Jt(i, s, -e);
        (function(i, n, p) {
            let m = [];
            i.forEach((f)=>m.push(...f)), Jt(m, n, p);
        })(c, s, -e);
    }
    return c;
}
m$1(Js, "s");
function Bt(l, t) {
    var o;
    let r = t.hachureAngle + 90, e = t.hachureGap;
    e < 0 && (e = 4 * t.strokeWidth), e = /*#__PURE__*/ Math.round(/*#__PURE__*/ Math.max(e, .1));
    let a = 1;
    return t.roughness >= 1 && (((o = t.randomizer) === null || o === void 0 ? void 0 : o.next()) || Math.random()) > .7 && (a = e), Js(l, e, r, a || 1);
}
m$1(Bt, "n");
var Pt = class {
    static{
        m$1(this, "o");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, o) {
        return this._fillPolygons(t, o);
    }
    _fillPolygons(t, o) {
        let r = /*#__PURE__*/ Bt(t, o);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.renderLines(r, o)
        };
    }
    renderLines(t, o) {
        let r = [];
        for (let e of t)r.push(.../*#__PURE__*/ this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], o));
        return r;
    }
};
function _t(l) {
    let t = l[0], o = l[1];
    return Math.sqrt(Math.pow(t[0] - o[0], 2) + Math.pow(t[1] - o[1], 2));
}
m$1(_t, "a");
var re = class extends Pt {
    static{
        m$1(this, "h");
    }
    fillPolygons(t, o) {
        let r = o.hachureGap;
        r < 0 && (r = 4 * o.strokeWidth), r = /*#__PURE__*/ Math.max(r, .1);
        let e = /*#__PURE__*/ Bt(t, /*#__PURE__*/ Object.assign({}, o, {
            hachureGap: r
        })), a = Math.PI / 180 * o.hachureAngle, h = [], s = .5 * r * Math.cos(a), c = .5 * r * Math.sin(a);
        for (let [i, n] of e)_t([
            i,
            n
        ]) && h.push([
            [
                i[0] - s,
                i[1] + c
            ],
            [
                ...n
            ]
        ], [
            [
                i[0] + s,
                i[1] - c
            ],
            [
                ...n
            ]
        ]);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.renderLines(h, o)
        };
    }
}, ae = class extends Pt {
    static{
        m$1(this, "r");
    }
    fillPolygons(t, o) {
        let r = /*#__PURE__*/ this._fillPolygons(t, o), e = /*#__PURE__*/ Object.assign({}, o, {
            hachureAngle: o.hachureAngle + 90
        }), a = /*#__PURE__*/ this._fillPolygons(t, e);
        return r.ops = /*#__PURE__*/ r.ops.concat(a.ops), r;
    }
}, oe = class {
    static{
        m$1(this, "i");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, o) {
        let r = /*#__PURE__*/ Bt(t, o = /*#__PURE__*/ Object.assign({}, o, {
            hachureAngle: 0
        }));
        return this.dotsOnLines(r, o);
    }
    dotsOnLines(t, o) {
        let r = [], e = o.hachureGap;
        e < 0 && (e = 4 * o.strokeWidth), e = /*#__PURE__*/ Math.max(e, .1);
        let a = o.fillWeight;
        a < 0 && (a = o.strokeWidth / 2);
        let h = e / 4;
        for (let s of t){
            let c = /*#__PURE__*/ _t(s), i = c / e, n = Math.ceil(i) - 1, p = c - n * e, m = (s[0][0] + s[1][0]) / 2 - e / 4, f = /*#__PURE__*/ Math.min(s[0][1], s[1][1]);
            for(let g = 0; g < n; g++){
                let d = f + p + g * e, x = m - h + 2 * Math.random() * h, u = d - h + 2 * Math.random() * h, b = /*#__PURE__*/ this.helper.ellipse(x, u, a, a, o);
                r.push(...b.ops);
            }
        }
        return {
            type: "fillSketch",
            ops: r
        };
    }
}, ie = class {
    static{
        m$1(this, "c");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, o) {
        let r = /*#__PURE__*/ Bt(t, o);
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.dashedLine(r, o)
        };
    }
    dashedLine(t, o) {
        let r = o.dashOffset < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashOffset, e = o.dashGap < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashGap, a = [];
        return t.forEach((h)=>{
            let s = /*#__PURE__*/ _t(h), c = /*#__PURE__*/ Math.floor(s / (r + e)), i = (s + e - c * (r + e)) / 2, n = h[0], p = h[1];
            n[0] > p[0] && (n = h[1], p = h[0]);
            let m = /*#__PURE__*/ Math.atan((p[1] - n[1]) / (p[0] - n[0]));
            for(let f = 0; f < c; f++){
                let g = f * (r + e), d = g + r, x = [
                    n[0] + g * Math.cos(m) + i * Math.cos(m),
                    n[1] + g * Math.sin(m) + i * Math.sin(m)
                ], u = [
                    n[0] + d * Math.cos(m) + i * Math.cos(m),
                    n[1] + d * Math.sin(m) + i * Math.sin(m)
                ];
                a.push(.../*#__PURE__*/ this.helper.doubleLineOps(x[0], x[1], u[0], u[1], o));
            }
        }), a;
    }
}, ne = class {
    static{
        m$1(this, "l");
    }
    constructor(t){
        this.helper = t;
    }
    fillPolygons(t, o) {
        let r = o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap, e = o.zigzagOffset < 0 ? r : o.zigzagOffset, a = /*#__PURE__*/ Bt(t, o = /*#__PURE__*/ Object.assign({}, o, {
            hachureGap: r + e
        }));
        return {
            type: "fillSketch",
            ops: /*#__PURE__*/ this.zigzagLines(a, e, o)
        };
    }
    zigzagLines(t, o, r) {
        let e = [];
        return t.forEach((a)=>{
            let h = /*#__PURE__*/ _t(a), s = /*#__PURE__*/ Math.round(h / (2 * o)), c = a[0], i = a[1];
            c[0] > i[0] && (c = a[1], i = a[0]);
            let n = /*#__PURE__*/ Math.atan((i[1] - c[1]) / (i[0] - c[0]));
            for(let p = 0; p < s; p++){
                let m = 2 * p * o, f = 2 * (p + 1) * o, g = /*#__PURE__*/ Math.sqrt(2 * Math.pow(o, 2)), d = [
                    c[0] + m * Math.cos(n),
                    c[1] + m * Math.sin(n)
                ], x = [
                    c[0] + f * Math.cos(n),
                    c[1] + f * Math.sin(n)
                ], u = [
                    d[0] + g * Math.cos(n + Math.PI / 4),
                    d[1] + g * Math.sin(n + Math.PI / 4)
                ];
                e.push(.../*#__PURE__*/ this.helper.doubleLineOps(d[0], d[1], u[0], u[1], r), .../*#__PURE__*/ this.helper.doubleLineOps(u[0], u[1], x[0], x[1], r));
            }
        }), e;
    }
}, rt = {}, le = class {
    static{
        m$1(this, "p");
    }
    constructor(t){
        this.seed = t;
    }
    next() {
        return this.seed ? (2 ** 31 - 1 & (this.seed = /*#__PURE__*/ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
    }
}, Ks = 0, Kt = 1, ve = 2, jt = {
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
function te(l, t) {
    return l.type === t;
}
m$1(te, "k");
function ge(l) {
    let t = [], o = /*#__PURE__*/ function(h) {
        let s = new Array;
        for(; h !== "";)if (h.match(/^([ \t\r\n,]+)/)) h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = {
            type: Ks,
            text: RegExp.$1
        }, h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        else {
            if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
            s[s.length] = {
                type: Kt,
                text: `${parseFloat(RegExp.$1)}`
            }, h = /*#__PURE__*/ h.substr(RegExp.$1.length);
        }
        return s[s.length] = {
            type: ve,
            text: ""
        }, s;
    }(l), r = "BOD", e = 0, a = o[e];
    for(; !te(a, ve);){
        let h = 0, s = [];
        if (r === "BOD") {
            if (a.text !== "M" && a.text !== "m") return ge("M0,0" + l);
            e++, h = jt[a.text], r = a.text;
        } else te(a, Kt) ? h = jt[r] : (e++, h = jt[a.text], r = a.text);
        if (!(e + h < o.length)) throw new Error("Path data ended short");
        for(let c = e; c < e + h; c++){
            let i = o[c];
            if (!te(i, Kt)) throw new Error("Param not a number: " + r + "," + i.text);
            s[s.length] = +i.text;
        }
        if (typeof jt[r] != "number") throw new Error("Bad segment: " + r);
        {
            let c = {
                key: r,
                data: s
            };
            t.push(c), e += h, a = o[e], r === "M" && (r = "L"), r === "m" && (r = "l");
        }
    }
    return t;
}
m$1(ge, "b");
function Ce(l) {
    let t = 0, o = 0, r = 0, e = 0, a = [];
    for (let { key: h, data: s } of l)switch(h){
        case "M":
            a.push({
                key: "M",
                data: [
                    ...s
                ]
            }), [t, o] = s, [r, e] = s;
            break;
        case "m":
            t += s[0], o += s[1], a.push({
                key: "M",
                data: [
                    t,
                    o
                ]
            }), r = t, e = o;
            break;
        case "L":
            a.push({
                key: "L",
                data: [
                    ...s
                ]
            }), [t, o] = s;
            break;
        case "l":
            t += s[0], o += s[1], a.push({
                key: "L",
                data: [
                    t,
                    o
                ]
            });
            break;
        case "C":
            a.push({
                key: "C",
                data: [
                    ...s
                ]
            }), t = s[4], o = s[5];
            break;
        case "c":
            {
                let c = /*#__PURE__*/ s.map((i, n)=>n % 2 ? i + o : i + t);
                a.push({
                    key: "C",
                    data: c
                }), t = c[4], o = c[5];
                break;
            }
        case "Q":
            a.push({
                key: "Q",
                data: [
                    ...s
                ]
            }), t = s[2], o = s[3];
            break;
        case "q":
            {
                let c = /*#__PURE__*/ s.map((i, n)=>n % 2 ? i + o : i + t);
                a.push({
                    key: "Q",
                    data: c
                }), t = c[2], o = c[3];
                break;
            }
        case "A":
            a.push({
                key: "A",
                data: [
                    ...s
                ]
            }), t = s[5], o = s[6];
            break;
        case "a":
            t += s[5], o += s[6], a.push({
                key: "A",
                data: [
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    t,
                    o
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
            }), o = s[0];
            break;
        case "v":
            o += s[0], a.push({
                key: "V",
                data: [
                    o
                ]
            });
            break;
        case "S":
            a.push({
                key: "S",
                data: [
                    ...s
                ]
            }), t = s[2], o = s[3];
            break;
        case "s":
            {
                let c = /*#__PURE__*/ s.map((i, n)=>n % 2 ? i + o : i + t);
                a.push({
                    key: "S",
                    data: c
                }), t = c[2], o = c[3];
                break;
            }
        case "T":
            a.push({
                key: "T",
                data: [
                    ...s
                ]
            }), t = s[0], o = s[1];
            break;
        case "t":
            t += s[0], o += s[1], a.push({
                key: "T",
                data: [
                    t,
                    o
                ]
            });
            break;
        case "Z":
        case "z":
            a.push({
                key: "Z",
                data: []
            }), t = r, o = e;
    }
    return a;
}
m$1(Ce, "y");
function Re(l) {
    let t = [], o = "", r = 0, e = 0, a = 0, h = 0, s = 0, c = 0;
    for (let { key: i, data: n } of l){
        switch(i){
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
                }), r = n[4], e = n[5], s = n[2], c = n[3];
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
                    let p = 0, m = 0;
                    o === "C" || o === "S" ? (p = r + (r - s), m = e + (e - c)) : (p = r, m = e), t.push({
                        key: "C",
                        data: [
                            p,
                            m,
                            ...n
                        ]
                    }), s = n[0], c = n[1], r = n[2], e = n[3];
                    break;
                }
            case "T":
                {
                    let [p, m] = n, f = 0, g = 0;
                    o === "Q" || o === "T" ? (f = r + (r - s), g = e + (e - c)) : (f = r, g = e);
                    let d = r + 2 * (f - r) / 3, x = e + 2 * (g - e) / 3, u = p + 2 * (f - p) / 3, b = m + 2 * (g - m) / 3;
                    t.push({
                        key: "C",
                        data: [
                            d,
                            x,
                            u,
                            b,
                            p,
                            m
                        ]
                    }), s = f, c = g, r = p, e = m;
                    break;
                }
            case "Q":
                {
                    let [p, m, f, g] = n, d = r + 2 * (p - r) / 3, x = e + 2 * (m - e) / 3, u = f + 2 * (p - f) / 3, b = g + 2 * (m - g) / 3;
                    t.push({
                        key: "C",
                        data: [
                            d,
                            x,
                            u,
                            b,
                            f,
                            g
                        ]
                    }), s = p, c = m, r = f, e = g;
                    break;
                }
            case "A":
                {
                    let p = /*#__PURE__*/ Math.abs(n[0]), m = /*#__PURE__*/ Math.abs(n[1]), f = n[2], g = n[3], d = n[4], x = n[5], u = n[6];
                    p === 0 || m === 0 ? (t.push({
                        key: "C",
                        data: [
                            r,
                            e,
                            x,
                            u,
                            x,
                            u
                        ]
                    }), r = x, e = u) : (r !== x || e !== u) && (Ge(r, e, x, u, p, m, f, g, d).forEach(function(b) {
                        t.push({
                            key: "C",
                            data: b
                        });
                    }), r = x, e = u);
                    break;
                }
            case "Z":
                t.push({
                    key: "Z",
                    data: []
                }), r = a, e = h;
        }
        o = i;
    }
    return t;
}
m$1(Re, "m");
function Mt(l, t, o) {
    return [
        l * Math.cos(o) - t * Math.sin(o),
        l * Math.sin(o) + t * Math.cos(o)
    ];
}
m$1(Mt, "w");
function Ge(l, t, o, r, e, a, h, s, c, i) {
    let n = (p = h, Math.PI * p / 180);
    var p;
    let m = [], f = 0, g = 0, d = 0, x = 0;
    if (i) [f, g, d, x] = i;
    else {
        [l, t] = /*#__PURE__*/ Mt(l, t, -n), [o, r] = /*#__PURE__*/ Mt(o, r, -n);
        let G = (l - o) / 2, A = (t - r) / 2, V = G * G / (e * e) + A * A / (a * a);
        V > 1 && (V = /*#__PURE__*/ Math.sqrt(V), e *= V, a *= V);
        let j = e * e, I = a * a, F = j * I - j * A * A - I * G * G, Q = j * A * A + I * G * G, it = (s === c ? -1 : 1) * Math.sqrt(/*#__PURE__*/ Math.abs(F / Q));
        d = it * e * A / a + (l + o) / 2, x = it * -a * G / e + (t + r) / 2, f = /*#__PURE__*/ Math.asin(/*#__PURE__*/ parseFloat(/*#__PURE__*/ ((t - x) / a).toFixed(9))), g = /*#__PURE__*/ Math.asin(/*#__PURE__*/ parseFloat(/*#__PURE__*/ ((r - x) / a).toFixed(9))), l < d && (f = Math.PI - f), o < d && (g = Math.PI - g), f < 0 && (f = 2 * Math.PI + f), g < 0 && (g = 2 * Math.PI + g), c && f > g && (f -= 2 * Math.PI), !c && g > f && (g -= 2 * Math.PI);
    }
    let u = g - f;
    if (Math.abs(u) > 120 * Math.PI / 180) {
        let G = g, A = o, V = r;
        g = c && g > f ? f + 120 * Math.PI / 180 * 1 : f + 120 * Math.PI / 180 * -1, m = /*#__PURE__*/ Ge(o = d + e * Math.cos(g), r = x + a * Math.sin(g), A, V, e, a, h, 0, c, [
            g,
            G,
            d,
            x
        ]);
    }
    u = g - f;
    let b = /*#__PURE__*/ Math.cos(f), S = /*#__PURE__*/ Math.sin(f), $ = /*#__PURE__*/ Math.cos(g), w = /*#__PURE__*/ Math.sin(g), B = /*#__PURE__*/ Math.tan(u / 4), T = 4 / 3 * e * B, R = 4 / 3 * a * B, E = [
        l,
        t
    ], L = [
        l + T * S,
        t - R * b
    ], O = [
        o + T * w,
        r - R * $
    ], H = [
        o,
        r
    ];
    if (L[0] = 2 * E[0] - L[0], L[1] = 2 * E[1] - L[1], i) return [
        L,
        O,
        H
    ].concat(m);
    {
        m = /*#__PURE__*/ [
            L,
            O,
            H
        ].concat(m);
        let G = [];
        for(let A = 0; A < m.length; A += 3){
            let V = /*#__PURE__*/ Mt(m[A][0], m[A][1], n), j = /*#__PURE__*/ Mt(m[A + 1][0], m[A + 1][1], n), I = /*#__PURE__*/ Mt(m[A + 2][0], m[A + 2][1], n);
            G.push([
                V[0],
                V[1],
                j[0],
                j[1],
                I[0],
                I[1]
            ]);
        }
        return G;
    }
}
m$1(Ge, "x");
var tr = {
    randOffset: /*#__PURE__*/ m$1(function(l, t) {
        return _(l, t);
    }, "randOffset"),
    randOffsetWithRange: /*#__PURE__*/ m$1(function(l, t, o) {
        return Wt(l, t, o);
    }, "randOffsetWithRange"),
    ellipse: /*#__PURE__*/ m$1(function(l, t, o, r, e) {
        let a = /*#__PURE__*/ Ae(o, r, e);
        return ce(l, t, e, a).opset;
    }, "ellipse"),
    doubleLineOps: /*#__PURE__*/ m$1(function(l, t, o, r, e) {
        return yt(l, t, o, r, e, true);
    }, "doubleLineOps")
};
function Ee(l, t, o, r, e) {
    return {
        type: "path",
        ops: /*#__PURE__*/ yt(l, t, o, r, e)
    };
}
m$1(Ee, "v");
function Ht(l, t, o) {
    let r = (l || []).length;
    if (r > 2) {
        let e = [];
        for(let a = 0; a < r - 1; a++)e.push(.../*#__PURE__*/ yt(l[a][0], l[a][1], l[a + 1][0], l[a + 1][1], o));
        return t && e.push(.../*#__PURE__*/ yt(l[r - 1][0], l[r - 1][1], l[0][0], l[0][1], o)), {
            type: "path",
            ops: e
        };
    }
    return r === 2 ? Ee(l[0][0], l[0][1], l[1][0], l[1][1], o) : {
        type: "path",
        ops: []
    };
}
m$1(Ht, "S");
function er(l, t, o, r, e) {
    return function(a, h) {
        return Ht(a, true, h);
    }([
        [
            l,
            t
        ],
        [
            l + o,
            t
        ],
        [
            l + o,
            t + r
        ],
        [
            l,
            t + r
        ]
    ], e);
}
m$1(er, "O");
function De(l, t) {
    if (l.length) {
        let o = typeof l[0][0] == "number" ? [
            l
        ] : l, r = /*#__PURE__*/ Ot(o[0], 1 * (1 + .2 * t.roughness), t), e = t.disableMultiStroke ? [] : Ot(o[0], 1.5 * (1 + .22 * t.roughness), /*#__PURE__*/ $e(t));
        for(let a = 1; a < o.length; a++){
            let h = o[a];
            if (h.length) {
                let s = /*#__PURE__*/ Ot(h, 1 * (1 + .2 * t.roughness), t), c = t.disableMultiStroke ? [] : Ot(h, 1.5 * (1 + .22 * t.roughness), /*#__PURE__*/ $e(t));
                for (let i of s)i.op !== "move" && r.push(i);
                for (let i of c)i.op !== "move" && e.push(i);
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
m$1(De, "L");
function Ae(l, t, o) {
    let r = /*#__PURE__*/ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(l / 2, 2) + Math.pow(t / 2, 2)) / 2)), e = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = /*#__PURE__*/ Math.abs(l / 2), s = /*#__PURE__*/ Math.abs(t / 2), c = 1 - o.curveFitting;
    return h += /*#__PURE__*/ _(h * c, o), s += /*#__PURE__*/ _(s * c, o), {
        increment: a,
        rx: h,
        ry: s
    };
}
m$1(Ae, "T");
function ce(l, t, o, r) {
    let [e, a] = Pe(r.increment, l, t, r.rx, r.ry, 1, r.increment * Wt(.1, /*#__PURE__*/ Wt(.4, 1, o), o), o), h = /*#__PURE__*/ It(e, null, o);
    if (!o.disableMultiStroke && o.roughness !== 0) {
        let [s] = Pe(r.increment, l, t, r.rx, r.ry, 1.5, 0, o), c = /*#__PURE__*/ It(s, null, o);
        h = /*#__PURE__*/ h.concat(c);
    }
    return {
        estimatedPoints: a,
        opset: {
            type: "path",
            ops: h
        }
    };
}
m$1(ce, "D");
function ke(l, t, o, r, e, a, h, s, c) {
    let i = l, n = t, p = /*#__PURE__*/ Math.abs(o / 2), m = /*#__PURE__*/ Math.abs(r / 2);
    p += /*#__PURE__*/ _(.01 * p, c), m += /*#__PURE__*/ _(.01 * m, c);
    let f = e, g = a;
    for(; f < 0;)f += 2 * Math.PI, g += 2 * Math.PI;
    g - f > 2 * Math.PI && (f = 0, g = 2 * Math.PI);
    let d = 2 * Math.PI / c.curveStepCount, x = /*#__PURE__*/ Math.min(d / 2, (g - f) / 2), u = /*#__PURE__*/ Be(x, i, n, p, m, f, g, 1, c);
    if (!c.disableMultiStroke) {
        let b = /*#__PURE__*/ Be(x, i, n, p, m, f, g, 1.5, c);
        u.push(...b);
    }
    return h && (s ? u.push(.../*#__PURE__*/ yt(i, n, i + p * Math.cos(f), n + m * Math.sin(f), c), .../*#__PURE__*/ yt(i, n, i + p * Math.cos(g), n + m * Math.sin(g), c)) : u.push({
        op: "lineTo",
        data: [
            i,
            n
        ]
    }, {
        op: "lineTo",
        data: [
            i + p * Math.cos(f),
            n + m * Math.sin(f)
        ]
    })), {
        type: "path",
        ops: u
    };
}
m$1(ke, "A");
function Me(l, t) {
    let o = /*#__PURE__*/ Re(/*#__PURE__*/ Ce(/*#__PURE__*/ ge(l))), r = [], e = [
        0,
        0
    ], a = [
        0,
        0
    ];
    for (let { key: h, data: s } of o)switch(h){
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
            r.push(.../*#__PURE__*/ yt(a[0], a[1], s[0], s[1], t)), a = [
                s[0],
                s[1]
            ];
            break;
        case "C":
            {
                let [c, i, n, p, m, f] = s;
                r.push(.../*#__PURE__*/ sr(c, i, n, p, m, f, a, t)), a = [
                    m,
                    f
                ];
                break;
            }
        case "Z":
            r.push(.../*#__PURE__*/ yt(a[0], a[1], e[0], e[1], t)), a = [
                e[0],
                e[1]
            ];
    }
    return {
        type: "path",
        ops: r
    };
}
m$1(Me, "_");
function ee(l, t) {
    let o = [];
    for (let r of l)if (r.length) {
        let e = t.maxRandomnessOffset || 0, a = r.length;
        if (a > 2) {
            o.push({
                op: "move",
                data: [
                    r[0][0] + _(e, t),
                    r[0][1] + _(e, t)
                ]
            });
            for(let h = 1; h < a; h++)o.push({
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
        ops: o
    };
}
m$1(ee, "I");
function Dt(l, t) {
    return (function(o, r) {
        let e = o.fillStyle || "hachure";
        if (!rt[e]) switch(e){
            case "zigzag":
                rt[e] || (rt[e] = new re(r));
                break;
            case "cross-hatch":
                rt[e] || (rt[e] = new ae(r));
                break;
            case "dots":
                rt[e] || (rt[e] = new oe(r));
                break;
            case "dashed":
                rt[e] || (rt[e] = new ie(r));
                break;
            case "zigzag-line":
                rt[e] || (rt[e] = new ne(r));
                break;
            default:
                e = "hachure", rt[e] || (rt[e] = new Pt(r));
        }
        return rt[e];
    })(t, tr).fillPolygons(l, t);
}
m$1(Dt, "C");
function $e(l) {
    let t = /*#__PURE__*/ Object.assign({}, l);
    return t.randomizer = void 0, l.seed && (t.seed = l.seed + 1), t;
}
m$1($e, "z");
function je(l) {
    return l.randomizer || (l.randomizer = new le(l.seed || 0)), l.randomizer.next();
}
m$1(je, "W");
function Wt(l, t, o, r = 1) {
    return o.roughness * r * (je(o) * (t - l) + l);
}
m$1(Wt, "E");
function _(l, t, o = 1) {
    return Wt(-l, l, t, o);
}
m$1(_, "G");
function yt(l, t, o, r, e, a = false) {
    let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s = /*#__PURE__*/ he(l, t, o, r, e, true, false);
    if (h) return s;
    let c = /*#__PURE__*/ he(l, t, o, r, e, true, true);
    return s.concat(c);
}
m$1(yt, "$");
function he(l, t, o, r, e, a, h) {
    let s = Math.pow(l - o, 2) + Math.pow(t - r, 2), c = /*#__PURE__*/ Math.sqrt(s), i = 1;
    i = c < 200 ? 1 : c > 500 ? .4 : -16668e-7 * c + 1.233334;
    let n = e.maxRandomnessOffset || 0;
    n * n * 100 > s && (n = c / 10);
    let p = n / 2, m = .2 + .2 * je(e), f = e.bowing * e.maxRandomnessOffset * (r - t) / 200, g = e.bowing * e.maxRandomnessOffset * (l - o) / 200;
    f = /*#__PURE__*/ _(f, e, i), g = /*#__PURE__*/ _(g, e, i);
    let d = [], x = /*#__PURE__*/ m$1(()=>_(p, e, i), "M"), u = /*#__PURE__*/ m$1(()=>_(n, e, i), "k"), b = e.preserveVertices;
    return a && (h ? d.push({
        op: "move",
        data: [
            l + (b ? 0 : x()),
            t + (b ? 0 : x())
        ]
    }) : d.push({
        op: "move",
        data: [
            l + (b ? 0 : _(n, e, i)),
            t + (b ? 0 : _(n, e, i))
        ]
    })), h ? d.push({
        op: "bcurveTo",
        data: [
            f + l + (o - l) * m + x(),
            g + t + (r - t) * m + x(),
            f + l + 2 * (o - l) * m + x(),
            g + t + 2 * (r - t) * m + x(),
            o + (b ? 0 : x()),
            r + (b ? 0 : x())
        ]
    }) : d.push({
        op: "bcurveTo",
        data: [
            f + l + (o - l) * m + u(),
            g + t + (r - t) * m + u(),
            f + l + 2 * (o - l) * m + u(),
            g + t + 2 * (r - t) * m + u(),
            o + (b ? 0 : u()),
            r + (b ? 0 : u())
        ]
    }), d;
}
m$1(he, "R");
function Ot(l, t, o) {
    if (!l.length) return [];
    let r = [];
    r.push([
        l[0][0] + _(t, o),
        l[0][1] + _(t, o)
    ]), r.push([
        l[0][0] + _(t, o),
        l[0][1] + _(t, o)
    ]);
    for(let e = 1; e < l.length; e++)r.push([
        l[e][0] + _(t, o),
        l[e][1] + _(t, o)
    ]), e === l.length - 1 && r.push([
        l[e][0] + _(t, o),
        l[e][1] + _(t, o)
    ]);
    return It(r, null, o);
}
m$1(Ot, "j");
function It(l, t, o) {
    let r = l.length, e = [];
    if (r > 3) {
        let a = [], h = 1 - o.curveTightness;
        e.push({
            op: "move",
            data: [
                l[1][0],
                l[1][1]
            ]
        });
        for(let s = 1; s + 2 < r; s++){
            let c = l[s];
            a[0] = [
                c[0],
                c[1]
            ], a[1] = [
                c[0] + (h * l[s + 1][0] - h * l[s - 1][0]) / 6,
                c[1] + (h * l[s + 1][1] - h * l[s - 1][1]) / 6
            ], a[2] = [
                l[s + 1][0] + (h * l[s][0] - h * l[s + 2][0]) / 6,
                l[s + 1][1] + (h * l[s][1] - h * l[s + 2][1]) / 6
            ], a[3] = [
                l[s + 1][0],
                l[s + 1][1]
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
            let s = o.maxRandomnessOffset;
            e.push({
                op: "lineTo",
                data: [
                    t[0] + _(s, o),
                    t[1] + _(s, o)
                ]
            });
        }
    } else r === 3 ? (e.push({
        op: "move",
        data: [
            l[1][0],
            l[1][1]
        ]
    }), e.push({
        op: "bcurveTo",
        data: [
            l[1][0],
            l[1][1],
            l[2][0],
            l[2][1],
            l[2][0],
            l[2][1]
        ]
    })) : r === 2 && e.push(.../*#__PURE__*/ he(l[0][0], l[0][1], l[1][0], l[1][1], o, true, true));
    return e;
}
m$1(It, "q");
function Pe(l, t, o, r, e, a, h, s) {
    let c = [], i = [];
    if (s.roughness === 0) {
        l /= 4, i.push([
            t + r * Math.cos(-l),
            o + e * Math.sin(-l)
        ]);
        for(let n = 0; n <= 2 * Math.PI; n += l){
            let p = [
                t + r * Math.cos(n),
                o + e * Math.sin(n)
            ];
            c.push(p), i.push(p);
        }
        i.push([
            t + r * Math.cos(0),
            o + e * Math.sin(0)
        ]), i.push([
            t + r * Math.cos(l),
            o + e * Math.sin(l)
        ]);
    } else {
        let n = _(.5, s) - Math.PI / 2;
        i.push([
            _(a, s) + t + .9 * r * Math.cos(n - l),
            _(a, s) + o + .9 * e * Math.sin(n - l)
        ]);
        let p = 2 * Math.PI + n - .01;
        for(let m = n; m < p; m += l){
            let f = [
                _(a, s) + t + r * Math.cos(m),
                _(a, s) + o + e * Math.sin(m)
            ];
            c.push(f), i.push(f);
        }
        i.push([
            _(a, s) + t + r * Math.cos(n + 2 * Math.PI + .5 * h),
            _(a, s) + o + e * Math.sin(n + 2 * Math.PI + .5 * h)
        ]), i.push([
            _(a, s) + t + .98 * r * Math.cos(n + h),
            _(a, s) + o + .98 * e * Math.sin(n + h)
        ]), i.push([
            _(a, s) + t + .9 * r * Math.cos(n + .5 * h),
            _(a, s) + o + .9 * e * Math.sin(n + .5 * h)
        ]);
    }
    return [
        i,
        c
    ];
}
m$1(Pe, "F");
function Be(l, t, o, r, e, a, h, s, c) {
    let i = a + _(.1, c), n = [];
    n.push([
        _(s, c) + t + .9 * r * Math.cos(i - l),
        _(s, c) + o + .9 * e * Math.sin(i - l)
    ]);
    for(let p = i; p <= h; p += l)n.push([
        _(s, c) + t + r * Math.cos(p),
        _(s, c) + o + e * Math.sin(p)
    ]);
    return n.push([
        t + r * Math.cos(h),
        o + e * Math.sin(h)
    ]), n.push([
        t + r * Math.cos(h),
        o + e * Math.sin(h)
    ]), It(n, null, c);
}
m$1(Be, "V");
function sr(l, t, o, r, e, a, h, s) {
    let c = [], i = [
        s.maxRandomnessOffset || 1,
        (s.maxRandomnessOffset || 1) + .3
    ], n = [
        0,
        0
    ], p = s.disableMultiStroke ? 1 : 2, m = s.preserveVertices;
    for(let f = 0; f < p; f++)f === 0 ? c.push({
        op: "move",
        data: [
            h[0],
            h[1]
        ]
    }) : c.push({
        op: "move",
        data: [
            h[0] + (m ? 0 : _(i[0], s)),
            h[1] + (m ? 0 : _(i[0], s))
        ]
    }), n = m ? [
        e,
        a
    ] : [
        e + _(i[f], s),
        a + _(i[f], s)
    ], c.push({
        op: "bcurveTo",
        data: [
            l + _(i[f], s),
            t + _(i[f], s),
            o + _(i[f], s),
            r + _(i[f], s),
            n[0],
            n[1]
        ]
    });
    return c;
}
m$1(sr, "Z");
function $t(l) {
    return [
        ...l
    ];
}
m$1($t, "Q");
function Te(l, t = 0) {
    let o = l.length;
    if (o < 3) throw new Error("A curve must have at least three points.");
    let r = [];
    if (o === 3) r.push(/*#__PURE__*/ $t(l[0]), /*#__PURE__*/ $t(l[1]), /*#__PURE__*/ $t(l[2]), /*#__PURE__*/ $t(l[2]));
    else {
        let e = [];
        e.push(l[0], l[0]);
        for(let s = 1; s < l.length; s++)e.push(l[s]), s === l.length - 1 && e.push(l[s]);
        let a = [], h = 1 - t;
        r.push(/*#__PURE__*/ $t(e[0]));
        for(let s = 1; s + 2 < e.length; s++){
            let c = e[s];
            a[0] = [
                c[0],
                c[1]
            ], a[1] = [
                c[0] + (h * e[s + 1][0] - h * e[s - 1][0]) / 6,
                c[1] + (h * e[s + 1][1] - h * e[s - 1][1]) / 6
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
m$1(Te, "H");
function Vt(l, t) {
    return Math.pow(l[0] - t[0], 2) + Math.pow(l[1] - t[1], 2);
}
m$1(Vt, "N");
function rr(l, t, o) {
    let r = /*#__PURE__*/ Vt(t, o);
    if (r === 0) return Vt(l, t);
    let e = ((l[0] - t[0]) * (o[0] - t[0]) + (l[1] - t[1]) * (o[1] - t[1])) / r;
    return e = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(1, e)), Vt(l, /*#__PURE__*/ vt(t, o, e));
}
m$1(rr, "B");
function vt(l, t, o) {
    return [
        l[0] + (t[0] - l[0]) * o,
        l[1] + (t[1] - l[1]) * o
    ];
}
m$1(vt, "J");
function pe(l, t, o, r) {
    let e = r || [];
    if (function(s, c) {
        let i = s[c + 0], n = s[c + 1], p = s[c + 2], m = s[c + 3], f = 3 * n[0] - 2 * i[0] - m[0];
        f *= f;
        let g = 3 * n[1] - 2 * i[1] - m[1];
        g *= g;
        let d = 3 * p[0] - 2 * m[0] - i[0];
        d *= d;
        let x = 3 * p[1] - 2 * m[1] - i[1];
        return x *= x, f < d && (f = d), g < x && (g = x), f + g;
    }(l, t) < o) {
        let s = l[t + 0];
        e.length ? (a = e[e.length - 1], h = s, Math.sqrt(/*#__PURE__*/ Vt(a, h)) > 1 && e.push(s)) : e.push(s), e.push(l[t + 3]);
    } else {
        let c = l[t + 0], i = l[t + 1], n = l[t + 2], p = l[t + 3], m = /*#__PURE__*/ vt(c, i, .5), f = /*#__PURE__*/ vt(i, n, .5), g = /*#__PURE__*/ vt(n, p, .5), d = /*#__PURE__*/ vt(m, f, .5), x = /*#__PURE__*/ vt(f, g, .5), u = /*#__PURE__*/ vt(d, x, .5);
        pe([
            c,
            m,
            d,
            u
        ], 0, o, e), pe([
            u,
            x,
            g,
            p
        ], 0, o, e);
    }
    var a, h;
    return e;
}
m$1(pe, "K");
function ar(l, t) {
    return Ft(l, 0, l.length, t);
}
m$1(ar, "U");
function Ft(l, t, o, r, e) {
    let a = e || [], h = l[t], s = l[o - 1], c = 0, i = 1;
    for(let n = t + 1; n < o - 1; ++n){
        let p = /*#__PURE__*/ rr(l[n], h, s);
        p > c && (c = p, i = n);
    }
    return Math.sqrt(c) > r ? (Ft(l, t, i + 1, r, a), Ft(l, i, o, r, a)) : (a.length || a.push(h), a.push(s)), a;
}
m$1(Ft, "X");
function se(l, t = .15, o) {
    let r = [], e = (l.length - 1) / 3;
    for(let a = 0; a < e; a++)pe(l, 3 * a, t, r);
    return o && o > 0 ? Ft(r, 0, r.length, o) : r;
}
m$1(se, "Y");
var ot = "none", kt = class {
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
    _d(t, o, r) {
        return {
            shape: t,
            sets: o || [],
            options: r || this.defaultOptions
        };
    }
    line(t, o, r, e, a) {
        let h = /*#__PURE__*/ this._o(a);
        return this._d("line", [
            /*#__PURE__*/ Ee(t, o, r, e, h)
        ], h);
    }
    rectangle(t, o, r, e, a) {
        let h = /*#__PURE__*/ this._o(a), s = [], c = /*#__PURE__*/ er(t, o, r, e, h);
        if (h.fill) {
            let i = [
                [
                    t,
                    o
                ],
                [
                    t + r,
                    o
                ],
                [
                    t + r,
                    o + e
                ],
                [
                    t,
                    o + e
                ]
            ];
            h.fillStyle === "solid" ? s.push(/*#__PURE__*/ ee([
                i
            ], h)) : s.push(/*#__PURE__*/ Dt([
                i
            ], h));
        }
        return h.stroke !== ot && s.push(c), this._d("rectangle", s, h);
    }
    ellipse(t, o, r, e, a) {
        let h = /*#__PURE__*/ this._o(a), s = [], c = /*#__PURE__*/ Ae(r, e, h), i = /*#__PURE__*/ ce(t, o, h, c);
        if (h.fill) if (h.fillStyle === "solid") {
            let n = ce(t, o, h, c).opset;
            n.type = "fillPath", s.push(n);
        } else s.push(/*#__PURE__*/ Dt([
            i.estimatedPoints
        ], h));
        return h.stroke !== ot && s.push(i.opset), this._d("ellipse", s, h);
    }
    circle(t, o, r, e) {
        let a = /*#__PURE__*/ this.ellipse(t, o, r, r, e);
        return a.shape = "circle", a;
    }
    linearPath(t, o) {
        let r = /*#__PURE__*/ this._o(o);
        return this._d("linearPath", [
            /*#__PURE__*/ Ht(t, false, r)
        ], r);
    }
    arc(t, o, r, e, a, h, s = false, c) {
        let i = /*#__PURE__*/ this._o(c), n = [], p = /*#__PURE__*/ ke(t, o, r, e, a, h, s, true, i);
        if (s && i.fill) if (i.fillStyle === "solid") {
            let m = /*#__PURE__*/ Object.assign({}, i);
            m.disableMultiStroke = true;
            let f = /*#__PURE__*/ ke(t, o, r, e, a, h, true, false, m);
            f.type = "fillPath", n.push(f);
        } else n.push(/*#__PURE__*/ function(m, f, g, d, x, u, b) {
            let S = m, $ = f, w = /*#__PURE__*/ Math.abs(g / 2), B = /*#__PURE__*/ Math.abs(d / 2);
            w += /*#__PURE__*/ _(.01 * w, b), B += /*#__PURE__*/ _(.01 * B, b);
            let T = x, R = u;
            for(; T < 0;)T += 2 * Math.PI, R += 2 * Math.PI;
            R - T > 2 * Math.PI && (T = 0, R = 2 * Math.PI);
            let E = (R - T) / b.curveStepCount, L = [];
            for(let O = T; O <= R; O += E)L.push([
                S + w * Math.cos(O),
                $ + B * Math.sin(O)
            ]);
            return L.push([
                S + w * Math.cos(R),
                $ + B * Math.sin(R)
            ]), L.push([
                S,
                $
            ]), Dt([
                L
            ], b);
        }(t, o, r, e, a, h, i));
        return i.stroke !== ot && n.push(p), this._d("arc", n, i);
    }
    curve(t, o) {
        let r = /*#__PURE__*/ this._o(o), e = [], a = /*#__PURE__*/ De(t, r);
        if (r.fill && r.fill !== ot) if (r.fillStyle === "solid") {
            let h = /*#__PURE__*/ De(t, /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, r), {
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
                let c = typeof s[0][0] == "number" ? [
                    s
                ] : s;
                for (let i of c)i.length < 3 ? h.push(...i) : i.length === 3 ? h.push(.../*#__PURE__*/ se(/*#__PURE__*/ Te([
                    i[0],
                    i[0],
                    i[1],
                    i[2]
                ]), 10, (1 + r.roughness) / 2)) : h.push(.../*#__PURE__*/ se(/*#__PURE__*/ Te(i), 10, (1 + r.roughness) / 2));
            }
            h.length && e.push(/*#__PURE__*/ Dt([
                h
            ], r));
        }
        return r.stroke !== ot && e.push(a), this._d("curve", e, r);
    }
    polygon(t, o) {
        let r = /*#__PURE__*/ this._o(o), e = [], a = /*#__PURE__*/ Ht(t, true, r);
        return r.fill && (r.fillStyle === "solid" ? e.push(/*#__PURE__*/ ee([
            t
        ], r)) : e.push(/*#__PURE__*/ Dt([
            t
        ], r))), r.stroke !== ot && e.push(a), this._d("polygon", e, r);
    }
    path(t, o) {
        let r = /*#__PURE__*/ this._o(o), e = [];
        if (!t) return this._d("path", e, r);
        t = /*#__PURE__*/ (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
        let a = r.fill && r.fill !== "transparent" && r.fill !== ot, h = r.stroke !== ot, s = !!(r.simplification && r.simplification < 1), c = /*#__PURE__*/ function(n, p, m) {
            let f = /*#__PURE__*/ Re(/*#__PURE__*/ Ce(/*#__PURE__*/ ge(n))), g = [], d = [], x = [
                0,
                0
            ], u = [], b = /*#__PURE__*/ m$1(()=>{
                u.length >= 4 && d.push(.../*#__PURE__*/ se(u, p)), u = [];
            }, "i"), S = /*#__PURE__*/ m$1(()=>{
                b(), d.length && (g.push(d), d = []);
            }, "c");
            for (let { key: w, data: B } of f)switch(w){
                case "M":
                    S(), x = [
                        B[0],
                        B[1]
                    ], d.push(x);
                    break;
                case "L":
                    b(), d.push([
                        B[0],
                        B[1]
                    ]);
                    break;
                case "C":
                    if (!u.length) {
                        let T = d.length ? d[d.length - 1] : x;
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
                    b(), d.push([
                        x[0],
                        x[1]
                    ]);
            }
            if (S(), !m) return g;
            let $ = [];
            for (let w of g){
                let B = /*#__PURE__*/ ar(w, m);
                B.length && $.push(B);
            }
            return $;
        }(t, 1, s ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), i = /*#__PURE__*/ Me(t, r);
        if (a) if (r.fillStyle === "solid") if (c.length === 1) {
            let n = /*#__PURE__*/ Me(t, /*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.assign({}, r), {
                disableMultiStroke: true,
                roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
            }));
            e.push({
                type: "fillPath",
                ops: /*#__PURE__*/ this._mergedShape(n.ops)
            });
        } else e.push(/*#__PURE__*/ ee(c, r));
        else e.push(/*#__PURE__*/ Dt(c, r));
        return h && (s ? c.forEach((n)=>{
            e.push(/*#__PURE__*/ Ht(n, false, r));
        }) : e.push(i)), this._d("path", e, r);
    }
    opsToPath(t, o) {
        let r = "";
        for (let e of t.ops){
            let a = typeof o == "number" && o >= 0 ? e.data.map((h)=>+h.toFixed(o)) : e.data;
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
        let o = t.sets || [], r = t.options || this.defaultOptions, e = [];
        for (let a of o){
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
    fillSketch(t, o) {
        let r = o.fillWeight;
        return r < 0 && (r = o.strokeWidth / 2), {
            d: /*#__PURE__*/ this.opsToPath(t),
            stroke: o.fill || ot,
            strokeWidth: r,
            fill: ot
        };
    }
    _mergedShape(t) {
        return t.filter((o, r)=>r === 0 || o.op !== "move");
    }
}, me = class {
    static{
        m$1(this, "st");
    }
    constructor(t, o){
        this.canvas = t, this.ctx = /*#__PURE__*/ this.canvas.getContext("2d"), this.gen = new kt(o);
    }
    draw(t) {
        let o = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.ctx, a = t.options.fixedDecimalPlaceDigits;
        for (let h of o)switch(h.type){
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
    fillSketch(t, o, r) {
        let e = r.fillWeight;
        e < 0 && (e = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = e, this._drawToContext(t, o, r.fixedDecimalPlaceDigits), t.restore();
    }
    _drawToContext(t, o, r, e = "nonzero") {
        t.beginPath();
        for (let a of o.ops){
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
        o.type === "fillPath" ? t.fill(e) : t.stroke();
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    line(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.line(t, o, r, e, a);
        return this.draw(h), h;
    }
    rectangle(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.rectangle(t, o, r, e, a);
        return this.draw(h), h;
    }
    ellipse(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.ellipse(t, o, r, e, a);
        return this.draw(h), h;
    }
    circle(t, o, r, e) {
        let a = /*#__PURE__*/ this.gen.circle(t, o, r, e);
        return this.draw(a), a;
    }
    linearPath(t, o) {
        let r = /*#__PURE__*/ this.gen.linearPath(t, o);
        return this.draw(r), r;
    }
    polygon(t, o) {
        let r = /*#__PURE__*/ this.gen.polygon(t, o);
        return this.draw(r), r;
    }
    arc(t, o, r, e, a, h, s = false, c) {
        let i = /*#__PURE__*/ this.gen.arc(t, o, r, e, a, h, s, c);
        return this.draw(i), i;
    }
    curve(t, o) {
        let r = /*#__PURE__*/ this.gen.curve(t, o);
        return this.draw(r), r;
    }
    path(t, o) {
        let r = /*#__PURE__*/ this.gen.path(t, o);
        return this.draw(r), r;
    }
}, Lt = "http://www.w3.org/2000/svg", fe = class {
    static{
        m$1(this, "ot");
    }
    constructor(t, o){
        this.svg = t, this.gen = new kt(o);
    }
    draw(t) {
        let o = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = /*#__PURE__*/ e.createElementNS(Lt, "g"), h = t.options.fixedDecimalPlaceDigits;
        for (let s of o){
            let c = null;
            switch(s.type){
                case "path":
                    c = /*#__PURE__*/ e.createElementNS(Lt, "path"), c.setAttribute("d", /*#__PURE__*/ this.opsToPath(s, h)), c.setAttribute("stroke", r.stroke), c.setAttribute("stroke-width", r.strokeWidth + ""), c.setAttribute("fill", "none"), r.strokeLineDash && c.setAttribute("stroke-dasharray", /*#__PURE__*/ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && c.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
                    break;
                case "fillPath":
                    c = /*#__PURE__*/ e.createElementNS(Lt, "path"), c.setAttribute("d", /*#__PURE__*/ this.opsToPath(s, h)), c.setAttribute("stroke", "none"), c.setAttribute("stroke-width", "0"), c.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || c.setAttribute("fill-rule", "evenodd");
                    break;
                case "fillSketch":
                    c = /*#__PURE__*/ this.fillSketch(e, s, r);
            }
            c && a.appendChild(c);
        }
        return a;
    }
    fillSketch(t, o, r) {
        let e = r.fillWeight;
        e < 0 && (e = r.strokeWidth / 2);
        let a = /*#__PURE__*/ t.createElementNS(Lt, "path");
        return a.setAttribute("d", /*#__PURE__*/ this.opsToPath(o, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /*#__PURE__*/ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(t, o) {
        return this.gen.opsToPath(t, o);
    }
    line(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.line(t, o, r, e, a);
        return this.draw(h);
    }
    rectangle(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.rectangle(t, o, r, e, a);
        return this.draw(h);
    }
    ellipse(t, o, r, e, a) {
        let h = /*#__PURE__*/ this.gen.ellipse(t, o, r, e, a);
        return this.draw(h);
    }
    circle(t, o, r, e) {
        let a = /*#__PURE__*/ this.gen.circle(t, o, r, e);
        return this.draw(a);
    }
    linearPath(t, o) {
        let r = /*#__PURE__*/ this.gen.linearPath(t, o);
        return this.draw(r);
    }
    polygon(t, o) {
        let r = /*#__PURE__*/ this.gen.polygon(t, o);
        return this.draw(r);
    }
    arc(t, o, r, e, a, h, s = false, c) {
        let i = /*#__PURE__*/ this.gen.arc(t, o, r, e, a, h, s, c);
        return this.draw(i);
    }
    curve(t, o) {
        let r = /*#__PURE__*/ this.gen.curve(t, o);
        return this.draw(r);
    }
    path(t, o) {
        let r = /*#__PURE__*/ this.gen.path(t, o);
        return this.draw(r);
    }
}, v = {
    canvas: /*#__PURE__*/ m$1((l, t)=>new me(l, t), "canvas"),
    svg: /*#__PURE__*/ m$1((l, t)=>new fe(l, t), "svg"),
    generator: /*#__PURE__*/ m$1((l)=>new kt(l), "generator"),
    newSeed: /*#__PURE__*/ m$1(()=>kt.newSeed(), "newSeed")
};
var or = /*#__PURE__*/ m$1((l, t)=>{
    var o = l.x, r = l.y, e = t.x - o, a = t.y - r, h = l.width / 2, s = l.height / 2, c, i;
    return Math.abs(a) * h > Math.abs(e) * s ? (a < 0 && (s = -s), c = a === 0 ? 0 : s * e / a, i = s) : (e < 0 && (h = -h), c = h, i = e === 0 ? 0 : h * a / e), {
        x: o + c,
        y: r + i
    };
}, "intersectRect"), xt = or;
function ir(l, t) {
    t && l.attr("style", t);
}
m$1(ir, "applyStyle");
async function nr(l) {
    let t = /*#__PURE__*/ kh(/*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), o = /*#__PURE__*/ t.append("xhtml:div"), r = l.label;
    l.label && ih(l.label) && (r = await $f(/*#__PURE__*/ l.label.replace(XC.lineBreakRegex, `
`), /*#__PURE__*/ hh()));
    let e = l.isNode ? "nodeLabel" : "edgeLabel";
    return o.html('<span class="' + e + '" ' + (l.labelStyle ? 'style="' + l.labelStyle + '"' : "") + ">" + r + "</span>"), ir(o, l.labelStyle), o.style("display", "inline-block"), o.style("padding-right", "1px"), o.style("white-space", "nowrap"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(nr, "addHtmlLabel");
var lr = /*#__PURE__*/ m$1(async (l, t, o, r)=>{
    let e = l || "";
    if (typeof e == "object" && (e = e[0]), Rf(hh().flowchart.htmlLabels)) {
        e = /*#__PURE__*/ e.replace(/\\n|\n/g, "<br />"), tt$1.info("vertexText" + e);
        let a = {
            isNode: r,
            label: /*#__PURE__*/ Xe$1(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: t && t.replace("fill:", "color:")
        };
        return await nr(a);
    } else {
        let a = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "text");
        a.setAttribute("style", /*#__PURE__*/ t.replace("color:", "fill:"));
        let h = [];
        typeof e == "string" ? h = /*#__PURE__*/ e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
        for (let s of h){
            let c = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), c.setAttribute("dy", "1em"), c.setAttribute("x", "0"), o ? c.setAttribute("class", "title-row") : c.setAttribute("class", "row"), c.textContent = /*#__PURE__*/ s.trim(), a.appendChild(c);
        }
        return a;
    }
}, "createLabel"), Tt = lr;
var K = /*#__PURE__*/ m$1((l, t, o, r, e)=>[
        "M",
        l + e,
        t,
        "H",
        l + o - e,
        "A",
        e,
        e,
        0,
        0,
        1,
        l + o,
        t + e,
        "V",
        t + r - e,
        "A",
        e,
        e,
        0,
        0,
        1,
        l + o - e,
        t + r,
        "H",
        l + e,
        "A",
        e,
        e,
        0,
        0,
        1,
        l,
        t + r - e,
        "V",
        t + e,
        "A",
        e,
        e,
        0,
        0,
        1,
        l + e,
        t,
        "Z"
    ].join(" "), "createRoundedRectPathD");
var Oe = /*#__PURE__*/ m$1(async (l, t)=>{
    tt$1.info("Creating subgraph rect for ", t.id, t);
    let o = /*#__PURE__*/ hh(), { themeVariables: r, handDrawnSeed: e } = o, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: c, borderStyles: i, backgroundStyles: n$1 } = u(t), p = /*#__PURE__*/ l.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), m$1 = /*#__PURE__*/ Rf(o.flowchart.htmlLabels), f = /*#__PURE__*/ p.insert("g").attr("class", "cluster-label "), g = await rs$1(f, t.label, {
        style: t.labelStyle,
        useHtmlLabels: m$1,
        isNode: true
    }), d = /*#__PURE__*/ g.getBBox();
    if (Rf(o.flowchart.htmlLabels)) {
        let T = g.children[0], R = /*#__PURE__*/ kh(g);
        d = /*#__PURE__*/ T.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
    }
    let x = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
    t.width <= d.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
    let u$1 = t.height, b = t.x - x / 2, S = t.y - u$1 / 2;
    tt$1.trace("Data ", t, /*#__PURE__*/ JSON.stringify(t));
    let $;
    if (t.look === "handDrawn") {
        let T = /*#__PURE__*/ v.svg(p), R = /*#__PURE__*/ m(t, {
            roughness: .7,
            fill: a,
            stroke: h,
            fillWeight: 3,
            seed: e
        }), E = /*#__PURE__*/ T.path(/*#__PURE__*/ K(b, S, x, u$1, 0), R);
        $ = /*#__PURE__*/ p.insert(()=>(tt$1.debug("Rough node insert CXC", E), E), ":first-child"), $.select("path:nth-child(2)").attr("style", /*#__PURE__*/ i.join(";")), $.select("path").attr("style", /*#__PURE__*/ n$1.join(";").replace("fill", "stroke"));
    } else $ = /*#__PURE__*/ p.insert("rect", ":first-child"), $.attr("style", c).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S).attr("width", x).attr("height", u$1);
    let { subGraphTitleTopMargin: w } = n(o);
    if (f.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), s) {
        let T = /*#__PURE__*/ f.select("span");
        T && T.attr("style", s);
    }
    let B = /*#__PURE__*/ $.node().getBBox();
    return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(T) {
        return xt(t, T);
    }, {
        cluster: p,
        labelBBox: d
    };
}, "rect"), cr = /*#__PURE__*/ m$1((l, t)=>{
    let o = /*#__PURE__*/ l.insert("g").attr("class", "note-cluster").attr("id", t.id), r = /*#__PURE__*/ o.insert("rect", ":first-child"), e = 0 * t.padding, a = e / 2;
    r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + e).attr("height", t.height + e).attr("fill", "none");
    let h = /*#__PURE__*/ r.node().getBBox();
    return t.width = h.width, t.height = h.height, t.intersect = function(s) {
        return xt(t, s);
    }, {
        cluster: o,
        labelBBox: {
            width: 0,
            height: 0
        }
    };
}, "noteGroup"), hr = /*#__PURE__*/ m$1(async (l, t)=>{
    let o = /*#__PURE__*/ hh(), { themeVariables: r, handDrawnSeed: e } = o, { altBackground: a, compositeBackground: h, compositeTitleBackground: s, nodeBorder: c } = r, i = /*#__PURE__*/ l.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), n = /*#__PURE__*/ i.insert("g", ":first-child"), p = /*#__PURE__*/ i.insert("g").attr("class", "cluster-label"), m = /*#__PURE__*/ i.append("rect"), f = /*#__PURE__*/ p.node().appendChild(await Tt(t.label, t.labelStyle, void 0, true)), g = /*#__PURE__*/ f.getBBox();
    if (Rf(o.flowchart.htmlLabels)) {
        let E = f.children[0], L = /*#__PURE__*/ kh(f);
        g = /*#__PURE__*/ E.getBoundingClientRect(), L.attr("width", g.width), L.attr("height", g.height);
    }
    let d = 0 * t.padding, x = d / 2, u = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + d;
    t.width <= g.width + t.padding ? t.diff = (u - t.width) / 2 - t.padding : t.diff = -t.padding;
    let b = t.height + d, S = t.height + d - g.height - 6, $ = t.x - u / 2, w = t.y - b / 2;
    t.width = u;
    let B = t.y - t.height / 2 - x + g.height + 2, T;
    if (t.look === "handDrawn") {
        let E = /*#__PURE__*/ t.cssClasses.includes("statediagram-cluster-alt"), L = /*#__PURE__*/ v.svg(i), O = t.rx || t.ry ? L.path(/*#__PURE__*/ K($, w, u, b, 10), {
            roughness: .7,
            fill: s,
            fillStyle: "solid",
            stroke: c,
            seed: e
        }) : L.rectangle($, w, u, b, {
            seed: e
        });
        T = /*#__PURE__*/ i.insert(()=>O, ":first-child");
        let H = /*#__PURE__*/ L.rectangle($, B, u, S, {
            fill: E ? a : h,
            fillStyle: E ? "hachure" : "solid",
            stroke: c,
            seed: e
        });
        T = /*#__PURE__*/ i.insert(()=>O, ":first-child"), m = /*#__PURE__*/ i.insert(()=>H);
    } else T = /*#__PURE__*/ n.insert("rect", ":first-child"), T.attr("class", "outer").attr("x", $).attr("y", w).attr("width", u).attr("height", b).attr("data-look", t.look), m.attr("class", "inner").attr("x", $).attr("y", B).attr("width", u).attr("height", S);
    p.attr("transform", `translate(${t.x - g.width / 2}, ${w + 1 - (Rf(o.flowchart.htmlLabels) ? 0 : 3)})`);
    let R = /*#__PURE__*/ T.node().getBBox();
    return t.height = R.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(E) {
        return xt(t, E);
    }, {
        cluster: i,
        labelBBox: g
    };
}, "roundedWithTitle"), pr = /*#__PURE__*/ m$1(async (l, t)=>{
    tt$1.info("Creating subgraph rect for ", t.id, t);
    let o = /*#__PURE__*/ hh(), { themeVariables: r, handDrawnSeed: e } = o, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: c, borderStyles: i, backgroundStyles: n$1 } = u(t), p = /*#__PURE__*/ l.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), m$1 = /*#__PURE__*/ Rf(o.flowchart.htmlLabels), f = /*#__PURE__*/ p.insert("g").attr("class", "cluster-label "), g = await rs$1(f, t.label, {
        style: t.labelStyle,
        useHtmlLabels: m$1,
        isNode: true,
        width: t.width
    }), d = /*#__PURE__*/ g.getBBox();
    if (Rf(o.flowchart.htmlLabels)) {
        let T = g.children[0], R = /*#__PURE__*/ kh(g);
        d = /*#__PURE__*/ T.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
    }
    let x = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
    t.width <= d.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
    let u$1 = t.height, b = t.x - x / 2, S = t.y - u$1 / 2;
    tt$1.trace("Data ", t, /*#__PURE__*/ JSON.stringify(t));
    let $;
    if (t.look === "handDrawn") {
        let T = /*#__PURE__*/ v.svg(p), R = /*#__PURE__*/ m(t, {
            roughness: .7,
            fill: a,
            stroke: h,
            fillWeight: 4,
            seed: e
        }), E = /*#__PURE__*/ T.path(/*#__PURE__*/ K(b, S, x, u$1, t.rx), R);
        $ = /*#__PURE__*/ p.insert(()=>(tt$1.debug("Rough node insert CXC", E), E), ":first-child"), $.select("path:nth-child(2)").attr("style", /*#__PURE__*/ i.join(";")), $.select("path").attr("style", /*#__PURE__*/ n$1.join(";").replace("fill", "stroke"));
    } else $ = /*#__PURE__*/ p.insert("rect", ":first-child"), $.attr("style", c).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S).attr("width", x).attr("height", u$1);
    let { subGraphTitleTopMargin: w } = n(o);
    if (f.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), s) {
        let T = /*#__PURE__*/ f.select("span");
        T && T.attr("style", s);
    }
    let B = /*#__PURE__*/ $.node().getBBox();
    return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(T) {
        return xt(t, T);
    }, {
        cluster: p,
        labelBBox: d
    };
}, "kanbanSection"), mr = /*#__PURE__*/ m$1((l, t)=>{
    let o = /*#__PURE__*/ hh(), { themeVariables: r, handDrawnSeed: e } = o, { nodeBorder: a } = r, h = /*#__PURE__*/ l.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = /*#__PURE__*/ h.insert("g", ":first-child"), c = 0 * t.padding, i = t.width + c;
    t.diff = -t.padding;
    let n = t.height + c, p = t.x - i / 2, m = t.y - n / 2;
    t.width = i;
    let f;
    if (t.look === "handDrawn") {
        let x = /*#__PURE__*/ v.svg(h).rectangle(p, m, i, n, {
            fill: "lightgrey",
            roughness: .5,
            strokeLineDash: [
                5
            ],
            stroke: a,
            seed: e
        });
        f = /*#__PURE__*/ h.insert(()=>x, ":first-child");
    } else f = /*#__PURE__*/ s.insert("rect", ":first-child"), f.attr("class", "divider").attr("x", p).attr("y", m).attr("width", i).attr("height", n).attr("data-look", t.look);
    let g = /*#__PURE__*/ f.node().getBBox();
    return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(d) {
        return xt(t, d);
    }, {
        cluster: h,
        labelBBox: {}
    };
}, "divider"), fr = Oe, gr = {
    rect: Oe,
    squareRect: fr,
    roundedWithTitle: hr,
    noteGroup: cr,
    divider: mr,
    kanbanSection: pr
}, Le = new Map, ga = /*#__PURE__*/ m$1(async (l, t)=>{
    let o = t.shape || "rect", r = await gr[o](l, t);
    return Le.set(t.id, r), r;
}, "insertCluster");
var da = /*#__PURE__*/ m$1(()=>{
    Le = new Map;
}, "clear");
function dr(l, t) {
    return l.intersect(t);
}
m$1(dr, "intersectNode");
var He = dr;
function ur(l, t, o, r) {
    var e = l.x, a = l.y, h = e - r.x, s = a - r.y, c = /*#__PURE__*/ Math.sqrt(t * t * s * s + o * o * h * h), i = /*#__PURE__*/ Math.abs(t * o * h / c);
    r.x < e && (i = -i);
    var n = /*#__PURE__*/ Math.abs(t * o * s / c);
    return r.y < a && (n = -n), {
        x: e + i,
        y: a + n
    };
}
m$1(ur, "intersectEllipse");
var zt = ur;
function yr(l, t, o) {
    return zt(l, t, t, o);
}
m$1(yr, "intersectCircle");
var Ve = yr;
function xr(l, t, o, r) {
    var e, a, h, s, c, i, n, p, m, f, g, d, x, u, b;
    if (e = t.y - l.y, h = l.x - t.x, c = t.x * l.y - l.x * t.y, m = e * o.x + h * o.y + c, f = e * r.x + h * r.y + c, !(m !== 0 && f !== 0 && We(m, f)) && (a = r.y - o.y, s = o.x - r.x, i = r.x * o.y - o.x * r.y, n = a * l.x + s * l.y + i, p = a * t.x + s * t.y + i, !(n !== 0 && p !== 0 && We(n, p)) && (g = e * s - a * h, g !== 0))) return d = /*#__PURE__*/ Math.abs(g / 2), x = h * i - s * c, u = x < 0 ? (x - d) / g : (x + d) / g, x = a * c - e * i, b = x < 0 ? (x - d) / g : (x + d) / g, {
        x: u,
        y: b
    };
}
m$1(xr, "intersectLine");
function We(l, t) {
    return l * t > 0;
}
m$1(We, "sameSign");
var Ie = xr;
function br(l, t, o) {
    let r = l.x, e = l.y, a = [], h = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
    typeof t.forEach == "function" ? t.forEach(function(n) {
        h = /*#__PURE__*/ Math.min(h, n.x), s = /*#__PURE__*/ Math.min(s, n.y);
    }) : (h = /*#__PURE__*/ Math.min(h, t.x), s = /*#__PURE__*/ Math.min(s, t.y));
    let c = r - l.width / 2 - h, i = e - l.height / 2 - s;
    for(let n = 0; n < t.length; n++){
        let p = t[n], m = t[n < t.length - 1 ? n + 1 : 0], f = /*#__PURE__*/ Ie(l, o, {
            x: c + p.x,
            y: i + p.y
        }, {
            x: c + m.x,
            y: i + m.y
        });
        f && a.push(f);
    }
    return a.length ? (a.length > 1 && a.sort(function(n, p) {
        let m = n.x - o.x, f = n.y - o.y, g = /*#__PURE__*/ Math.sqrt(m * m + f * f), d = p.x - o.x, x = p.y - o.y, u = /*#__PURE__*/ Math.sqrt(d * d + x * x);
        return g < u ? -1 : g === u ? 0 : 1;
    }), a[0]) : l;
}
m$1(br, "intersectPolygon");
var Fe = br;
var N = {
    node: He,
    circle: Ve,
    ellipse: zt,
    polygon: Fe,
    rect: xt
};
function _e(l, t) {
    let { labelStyles: o } = u(t);
    t.labelStyle = o;
    let r = /*#__PURE__*/ P(t), e = r;
    r || (e = "anchor");
    let a = /*#__PURE__*/ l.insert("g").attr("class", e).attr("id", t.domId || t.id), h = 1, { cssStyles: s } = t, c = /*#__PURE__*/ v.svg(a), i = /*#__PURE__*/ m(t, {
        fill: "black",
        stroke: "none",
        fillStyle: "solid"
    });
    t.look !== "handDrawn" && (i.roughness = 0);
    let n = /*#__PURE__*/ c.circle(0, 0, h * 2, i), p = /*#__PURE__*/ a.insert(()=>n, ":first-child");
    return p.attr("class", "anchor").attr("style", /*#__PURE__*/ Je$1(s)), M(t, p), t.intersect = function(m) {
        return tt$1.info("Circle intersect", t, h, m), N.circle(t, h, m);
    }, a;
}
m$1(_e, "anchor");
function ze(l, t, o, r, e, a, h) {
    let c = (l + o) / 2, i = (t + r) / 2, n = /*#__PURE__*/ Math.atan2(r - t, o - l), p = (o - l) / 2, m = (r - t) / 2, f = p / e, g = m / a, d = /*#__PURE__*/ Math.sqrt(f ** 2 + g ** 2);
    if (d > 1) throw new Error("The given radii are too small to create an arc between the points.");
    let x = /*#__PURE__*/ Math.sqrt(1 - d ** 2), u = c + x * a * Math.sin(n) * (h ? -1 : 1), b = i - x * e * Math.cos(n) * (h ? -1 : 1), S = /*#__PURE__*/ Math.atan2((t - b) / a, (l - u) / e), w = Math.atan2((r - b) / a, (o - u) / e) - S;
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
m$1(ze, "generateArcPoints");
async function qe(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = a.width + t.padding + 20, s = a.height + t.padding, c = s / 2, i = c / (2.5 + s / 50), { cssStyles: n } = t, p = [
        {
            x: h / 2,
            y: -s / 2
        },
        {
            x: -h / 2,
            y: -s / 2
        },
        .../*#__PURE__*/ ze(-h / 2, -s / 2, -h / 2, s / 2, i, c, false),
        {
            x: h / 2,
            y: s / 2
        },
        .../*#__PURE__*/ ze(h / 2, s / 2, h / 2, -s / 2, i, c, true)
    ], m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = /*#__PURE__*/ W(p), d = /*#__PURE__*/ m$1.path(g, f), x = /*#__PURE__*/ e.insert(()=>d, ":first-child");
    return x.attr("class", "basic label-container"), n && t.look !== "handDrawn" && x.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(${i / 2}, 0)`), M(t, x), t.intersect = function(u) {
        return N.polygon(t, p, u);
    }, e;
}
m$1(qe, "bowTieRect");
function tt(l, t, o, r) {
    return l.insert("polygon", ":first-child").attr("points", /*#__PURE__*/ r.map(function(e) {
        return e.x + "," + e.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + o / 2 + ")");
}
m$1(tt, "insertPolygonShape");
async function Xe(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = a.height + t.padding, s = 12, c = a.width + t.padding + s, i = 0, n = c, p = -h, m$1 = 0, f = [
        {
            x: i + s,
            y: p
        },
        {
            x: n,
            y: p
        },
        {
            x: n,
            y: m$1
        },
        {
            x: i,
            y: m$1
        },
        {
            x: i,
            y: p + s
        },
        {
            x: i + s,
            y: p
        }
    ], g, { cssStyles: d } = t;
    if (t.look === "handDrawn") {
        let x = /*#__PURE__*/ v.svg(e), u = /*#__PURE__*/ m(t, {}), b = /*#__PURE__*/ W(f), S = /*#__PURE__*/ x.path(b, u);
        g = /*#__PURE__*/ e.insert(()=>S, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && g.attr("style", d);
    } else g = /*#__PURE__*/ tt(e, c, h, f);
    return r && g.attr("style", r), M(t, g), t.intersect = function(x) {
        return N.polygon(t, f, x);
    }, e;
}
m$1(Xe, "card");
function Ye(l, t) {
    let { nodeStyles: o } = u(t);
    t.label = "";
    let r = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, a = /*#__PURE__*/ Math.max(28, t.width ?? 0), h = [
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
    ], s = /*#__PURE__*/ v.svg(r), c = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
    let i = /*#__PURE__*/ W(h), n = /*#__PURE__*/ s.path(i, c), p = /*#__PURE__*/ r.insert(()=>n, ":first-child");
    return e && t.look !== "handDrawn" && p.selectAll("path").attr("style", e), o && t.look !== "handDrawn" && p.selectAll("path").attr("style", o), t.width = 28, t.height = 28, t.intersect = function(m) {
        return N.polygon(t, h, m);
    }, r;
}
m$1(Ye, "choice");
async function Ze(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, halfPadding: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width / 2 + h, c, { cssStyles: i } = t;
    if (t.look === "handDrawn") {
        let n = /*#__PURE__*/ v.svg(e), p = /*#__PURE__*/ m(t, {}), m$1 = /*#__PURE__*/ n.circle(0, 0, s * 2, p);
        c = /*#__PURE__*/ e.insert(()=>m$1, ":first-child"), c.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(i));
    } else c = /*#__PURE__*/ e.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", r).attr("r", s).attr("cx", 0).attr("cy", 0);
    return M(t, c), t.intersect = function(n) {
        return tt$1.info("Circle intersect", t, s, n), N.circle(t, s, n);
    }, e;
}
m$1(Ze, "circle");
function Sr(l) {
    let t = /*#__PURE__*/ Math.cos(Math.PI / 4), o = /*#__PURE__*/ Math.sin(Math.PI / 4), r = l * 2, e = {
        x: r / 2 * t,
        y: r / 2 * o
    }, a = {
        x: -(r / 2) * t,
        y: r / 2 * o
    }, h = {
        x: -(r / 2) * t,
        y: -(r / 2) * o
    }, s = {
        x: r / 2 * t,
        y: -(r / 2) * o
    };
    return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m$1(Sr, "createLine");
function Ue(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o, t.label = "";
    let e = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), a = /*#__PURE__*/ Math.max(30, t?.width ?? 0), { cssStyles: h } = t, s = /*#__PURE__*/ v.svg(e), c = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
    let i = /*#__PURE__*/ s.circle(0, 0, a * 2, c), n = /*#__PURE__*/ Sr(a), p = /*#__PURE__*/ s.path(n, c), m$1 = /*#__PURE__*/ e.insert(()=>i, ":first-child");
    return m$1.insert(()=>p), h && t.look !== "handDrawn" && m$1.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && m$1.selectAll("path").attr("style", r), M(t, m$1), t.intersect = function(f) {
        return tt$1.info("crossedCircle intersect", t, {
            radius: a,
            point: f
        }), N.circle(t, a, f);
    }, e;
}
m$1(Ue, "crossedCircle");
function bt(l, t, o, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let m = s + p * n, f = l + o * Math.cos(m), g = t + o * Math.sin(m);
        h.push({
            x: -f,
            y: -g
        });
    }
    return h;
}
m$1(bt, "generateCirclePoints");
async function Qe(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = /*#__PURE__*/ Math.max(5, c * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ bt(s / 2, -c / 2, i, 30, -90, 0),
        {
            x: -s / 2 - i,
            y: i
        },
        .../*#__PURE__*/ bt(s / 2 + i * 2, -i, i, 20, -180, -270),
        .../*#__PURE__*/ bt(s / 2 + i * 2, i, i, 20, -90, -180),
        {
            x: -s / 2 - i,
            y: -c / 2
        },
        .../*#__PURE__*/ bt(s / 2, c / 2, i, 20, 0, 90)
    ], m$1 = [
        {
            x: s / 2,
            y: -c / 2 - i
        },
        {
            x: -s / 2,
            y: -c / 2 - i
        },
        .../*#__PURE__*/ bt(s / 2, -c / 2, i, 20, -90, 0),
        {
            x: -s / 2 - i,
            y: -i
        },
        .../*#__PURE__*/ bt(s / 2 + s * .1, -i, i, 20, -180, -270),
        .../*#__PURE__*/ bt(s / 2 + s * .1, i, i, 20, -90, -180),
        {
            x: -s / 2 - i,
            y: c / 2
        },
        .../*#__PURE__*/ bt(s / 2, c / 2, i, 20, 0, 90),
        {
            x: -s / 2,
            y: c / 2 + i
        },
        {
            x: s / 2,
            y: c / 2 + i
        }
    ], f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let x = /*#__PURE__*/ W(p).replace("Z", ""), u$1 = /*#__PURE__*/ f.path(x, g), b = /*#__PURE__*/ W(m$1), S = /*#__PURE__*/ f.path(b, {
        ...g
    }), $ = /*#__PURE__*/ e.insert("g", ":first-child");
    return $.insert(()=>S, ":first-child").attr("stroke-opacity", 0), $.insert(()=>u$1, ":first-child"), $.attr("class", "text"), n && t.look !== "handDrawn" && $.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${i}, 0)`), h.attr("transform", `translate(${-s / 2 + i - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
        return N.polygon(t, m$1, w);
    }, e;
}
m$1(Qe, "curlyBraceLeft");
function St(l, t, o, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let m = s + p * n, f = l + o * Math.cos(m), g = t + o * Math.sin(m);
        h.push({
            x: f,
            y: g
        });
    }
    return h;
}
m$1(St, "generateCirclePoints");
async function Je(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = /*#__PURE__*/ Math.max(5, c * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ St(s / 2, -c / 2, i, 20, -90, 0),
        {
            x: s / 2 + i,
            y: -i
        },
        .../*#__PURE__*/ St(s / 2 + i * 2, -i, i, 20, -180, -270),
        .../*#__PURE__*/ St(s / 2 + i * 2, i, i, 20, -90, -180),
        {
            x: s / 2 + i,
            y: c / 2
        },
        .../*#__PURE__*/ St(s / 2, c / 2, i, 20, 0, 90)
    ], m$1 = [
        {
            x: -s / 2,
            y: -c / 2 - i
        },
        {
            x: s / 2,
            y: -c / 2 - i
        },
        .../*#__PURE__*/ St(s / 2, -c / 2, i, 20, -90, 0),
        {
            x: s / 2 + i,
            y: -i
        },
        .../*#__PURE__*/ St(s / 2 + i * 2, -i, i, 20, -180, -270),
        .../*#__PURE__*/ St(s / 2 + i * 2, i, i, 20, -90, -180),
        {
            x: s / 2 + i,
            y: c / 2
        },
        .../*#__PURE__*/ St(s / 2, c / 2, i, 20, 0, 90),
        {
            x: s / 2,
            y: c / 2 + i
        },
        {
            x: -s / 2,
            y: c / 2 + i
        }
    ], f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let x = /*#__PURE__*/ W(p).replace("Z", ""), u$1 = /*#__PURE__*/ f.path(x, g), b = /*#__PURE__*/ W(m$1), S = /*#__PURE__*/ f.path(b, {
        ...g
    }), $ = /*#__PURE__*/ e.insert("g", ":first-child");
    return $.insert(()=>S, ":first-child").attr("stroke-opacity", 0), $.insert(()=>u$1, ":first-child"), $.attr("class", "text"), n && t.look !== "handDrawn" && $.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${-i}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
        return N.polygon(t, m$1, w);
    }, e;
}
m$1(Je, "curlyBraceRight");
function et(l, t, o, r = 100, e = 0, a = 180) {
    let h = [], s = e * Math.PI / 180, n = (a * Math.PI / 180 - s) / (r - 1);
    for(let p = 0; p < r; p++){
        let m = s + p * n, f = l + o * Math.cos(m), g = t + o * Math.sin(m);
        h.push({
            x: -f,
            y: -g
        });
    }
    return h;
}
m$1(et, "generateCirclePoints");
async function Ke(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = /*#__PURE__*/ Math.max(5, c * .1), { cssStyles: n } = t, p = [
        .../*#__PURE__*/ et(s / 2, -c / 2, i, 30, -90, 0),
        {
            x: -s / 2 - i,
            y: i
        },
        .../*#__PURE__*/ et(s / 2 + i * 2, -i, i, 20, -180, -270),
        .../*#__PURE__*/ et(s / 2 + i * 2, i, i, 20, -90, -180),
        {
            x: -s / 2 - i,
            y: -c / 2
        },
        .../*#__PURE__*/ et(s / 2, c / 2, i, 20, 0, 90)
    ], m$1 = [
        .../*#__PURE__*/ et(-s / 2 + i + i / 2, -c / 2, i, 20, -90, -180),
        {
            x: s / 2 - i / 2,
            y: i
        },
        .../*#__PURE__*/ et(-s / 2 - i / 2, -i, i, 20, 0, 90),
        .../*#__PURE__*/ et(-s / 2 - i / 2, i, i, 20, -90, 0),
        {
            x: s / 2 - i / 2,
            y: -i
        },
        .../*#__PURE__*/ et(-s / 2 + i + i / 2, c / 2, i, 30, -180, -270)
    ], f = [
        {
            x: s / 2,
            y: -c / 2 - i
        },
        {
            x: -s / 2,
            y: -c / 2 - i
        },
        .../*#__PURE__*/ et(s / 2, -c / 2, i, 20, -90, 0),
        {
            x: -s / 2 - i,
            y: -i
        },
        .../*#__PURE__*/ et(s / 2 + i * 2, -i, i, 20, -180, -270),
        .../*#__PURE__*/ et(s / 2 + i * 2, i, i, 20, -90, -180),
        {
            x: -s / 2 - i,
            y: c / 2
        },
        .../*#__PURE__*/ et(s / 2, c / 2, i, 20, 0, 90),
        {
            x: -s / 2,
            y: c / 2 + i
        },
        {
            x: s / 2 - i - i / 2,
            y: c / 2 + i
        },
        .../*#__PURE__*/ et(-s / 2 + i + i / 2, -c / 2, i, 20, -90, -180),
        {
            x: s / 2 - i / 2,
            y: i
        },
        .../*#__PURE__*/ et(-s / 2 - i / 2, -i, i, 20, 0, 90),
        .../*#__PURE__*/ et(-s / 2 - i / 2, i, i, 20, -90, 0),
        {
            x: s / 2 - i / 2,
            y: -i
        },
        .../*#__PURE__*/ et(-s / 2 + i + i / 2, c / 2, i, 30, -180, -270)
    ], g = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ m(t, {
        fill: "none"
    });
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let u$1 = /*#__PURE__*/ W(p).replace("Z", ""), b = /*#__PURE__*/ g.path(u$1, d), $ = /*#__PURE__*/ W(m$1).replace("Z", ""), w = /*#__PURE__*/ g.path($, d), B = /*#__PURE__*/ W(f), T = /*#__PURE__*/ g.path(B, {
        ...d
    }), R = /*#__PURE__*/ e.insert("g", ":first-child");
    return R.insert(()=>T, ":first-child").attr("stroke-opacity", 0), R.insert(()=>b, ":first-child"), R.insert(()=>w, ":first-child"), R.attr("class", "text"), n && t.look !== "handDrawn" && R.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${i - i / 4}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, R), t.intersect = function(E) {
        return N.polygon(t, f, E);
    }, e;
}
m$1(Ke, "curlyBraces");
async function ts(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = 80, s = 20, c = /*#__PURE__*/ Math.max(h, (a.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), i = /*#__PURE__*/ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = i / 2, { cssStyles: p } = t, m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = c, d = i, x = g - n, u$1 = d / 4, b = [
        {
            x,
            y: 0
        },
        {
            x: u$1,
            y: 0
        },
        {
            x: 0,
            y: d / 2
        },
        {
            x: u$1,
            y: d
        },
        {
            x,
            y: d
        },
        .../*#__PURE__*/ At(-x, -d / 2, n, 50, 270, 90)
    ], S = /*#__PURE__*/ W(b), $ = /*#__PURE__*/ m$1.path(S, f), w = /*#__PURE__*/ e.insert(()=>$, ":first-child");
    return w.attr("class", "basic label-container"), p && t.look !== "handDrawn" && w.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && w.selectChildren("path").attr("style", r), w.attr("transform", `translate(${-c / 2}, ${-i / 2})`), M(t, w), t.intersect = function(B) {
        return N.polygon(t, b, B);
    }, e;
}
m$1(ts, "curvedTrapezoid");
var wr = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l},${t + a}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `a${e},${a} 0,0,0 ${-o},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `l0,${-r}`
    ].join(" "), "createCylinderPathD"), Nr = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l},${t + a}`,
        `M${l + o},${t + a}`,
        `a${e},${a} 0,0,0 ${-o},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `l0,${-r}`
    ].join(" "), "createOuterCylinderPathD"), vr = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l - o / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 ${o},0`
    ].join(" "), "createInnerCylinderPathD");
async function es(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + t.padding, t.width ?? 0), c = s / 2, i = c / (2.5 + s / 50), n = /*#__PURE__*/ Math.max(a.height + i + t.padding, t.height ?? 0), p, { cssStyles: m$1 } = t;
    if (t.look === "handDrawn") {
        let f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ Nr(0, 0, s, n, c, i), d = /*#__PURE__*/ vr(0, i, s, n, c, i), x = /*#__PURE__*/ f.path(g, /*#__PURE__*/ m(t, {})), u = /*#__PURE__*/ f.path(d, /*#__PURE__*/ m(t, {
            fill: "none"
        }));
        p = /*#__PURE__*/ e.insert(()=>u, ":first-child"), p = /*#__PURE__*/ e.insert(()=>x, ":first-child"), p.attr("class", "basic label-container"), m$1 && p.attr("style", m$1);
    } else {
        let f = /*#__PURE__*/ wr(0, 0, s, n, c, i);
        p = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", f).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(m$1)).attr("style", r);
    }
    return p.attr("label-offset-y", i), p.attr("transform", `translate(${-s / 2}, ${-(n / 2 + i)})`), M(t, p), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(f) {
        let g = /*#__PURE__*/ N.rect(t, f), d = g.x - (t.x ?? 0);
        if (c != 0 && (Math.abs(d) < (t.width ?? 0) / 2 || Math.abs(d) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
            let x = i * i * (1 - d * d / (c * c));
            x > 0 && (x = /*#__PURE__*/ Math.sqrt(x)), x = i - x, f.y - (t.y ?? 0) > 0 && (x = -x), g.y += x;
        }
        return g;
    }, e;
}
m$1(es, "cylinder");
async function ss(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width + t.padding, c = a.height + t.padding, i = c * .2, n = -s / 2, p = -c / 2 - i / 2, { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let d = [
        {
            x: n,
            y: p + i
        },
        {
            x: -n,
            y: p + i
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
            y: p + i
        }
    ], x = /*#__PURE__*/ f.polygon(/*#__PURE__*/ d.map((b)=>[
            b.x,
            b.y
        ]), g), u$1 = /*#__PURE__*/ e.insert(()=>x, ":first-child");
    return u$1.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${n + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p + i + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, u$1), t.intersect = function(b) {
        return N.rect(t, b);
    }, e;
}
m$1(ss, "dividedRectangle");
async function rs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, halfPadding: h } = await C(l, t, /*#__PURE__*/ P(t)), c = a.width / 2 + h + 5, i = a.width / 2 + h, n, { cssStyles: p } = t;
    if (t.look === "handDrawn") {
        let m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {
            roughness: .2,
            strokeWidth: 2.5
        }), g = /*#__PURE__*/ m(t, {
            roughness: .2,
            strokeWidth: 1.5
        }), d = /*#__PURE__*/ m$1.circle(0, 0, c * 2, f), x = /*#__PURE__*/ m$1.circle(0, 0, i * 2, g);
        n = /*#__PURE__*/ e.insert("g", ":first-child"), n.attr("class", /*#__PURE__*/ Je$1(t.cssClasses)).attr("style", /*#__PURE__*/ Je$1(p)), n.node()?.appendChild(d), n.node()?.appendChild(x);
    } else {
        n = /*#__PURE__*/ e.insert("g", ":first-child");
        let m = /*#__PURE__*/ n.insert("circle", ":first-child"), f = /*#__PURE__*/ n.insert("circle");
        n.attr("class", "basic label-container").attr("style", r), m.attr("class", "outer-circle").attr("style", r).attr("r", c).attr("cx", 0).attr("cy", 0), f.attr("class", "inner-circle").attr("style", r).attr("r", i).attr("cx", 0).attr("cy", 0);
    }
    return M(t, n), t.intersect = function(m) {
        return tt$1.info("DoubleCircle intersect", t, c, m), N.circle(t, c, m);
    }, e;
}
m$1(rs, "doublecircle");
function as(l, t, { config: { themeVariables: o } }) {
    let { labelStyles: r, nodeStyles: e } = u(t);
    t.label = "", t.labelStyle = r;
    let a = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), h = 7, { cssStyles: s } = t, c = /*#__PURE__*/ v.svg(a), { nodeBorder: i } = o, n = /*#__PURE__*/ m(t, {
        fillStyle: "solid"
    });
    t.look !== "handDrawn" && (n.roughness = 0);
    let p = /*#__PURE__*/ c.circle(0, 0, h * 2, n), m$1 = /*#__PURE__*/ a.insert(()=>p, ":first-child");
    return m$1.selectAll("path").attr("style", `fill: ${i} !important;`), s && s.length > 0 && t.look !== "handDrawn" && m$1.selectAll("path").attr("style", s), e && t.look !== "handDrawn" && m$1.selectAll("path").attr("style", e), M(t, m$1), t.intersect = function(f) {
        return tt$1.info("filledCircle intersect", t, {
            radius: h,
            point: f
        }), N.circle(t, h, f);
    }, a;
}
m$1(as, "filledCircle");
async function os(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = a.width + (t.padding ?? 0), c = s + a.height, i = s + a.height, n = [
        {
            x: 0,
            y: -c
        },
        {
            x: i,
            y: -c
        },
        {
            x: i / 2,
            y: 0
        }
    ], { cssStyles: p } = t, m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = /*#__PURE__*/ W(n), d = /*#__PURE__*/ m$1.path(g, f), x = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
    return p && t.look !== "handDrawn" && x.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), t.width = s, t.height = c, M(t, x), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-c / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(u) {
        return tt$1.info("Triangle intersect", t, n, u), N.polygon(t, n, u);
    }, e;
}
m$1(os, "flippedTriangle");
function is(l, t, { dir: o, config: { state: r, themeVariables: e } }) {
    let { nodeStyles: a } = u(t);
    t.label = "";
    let h = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, c = /*#__PURE__*/ Math.max(70, t?.width ?? 0), i = /*#__PURE__*/ Math.max(10, t?.height ?? 0);
    o === "LR" && (c = /*#__PURE__*/ Math.max(10, t?.width ?? 0), i = /*#__PURE__*/ Math.max(70, t?.height ?? 0));
    let n = -1 * c / 2, p = -1 * i / 2, m$1 = /*#__PURE__*/ v.svg(h), f = /*#__PURE__*/ m(t, {
        stroke: e.lineColor,
        fill: e.lineColor
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = /*#__PURE__*/ m$1.rectangle(n, p, c, i, f), d = /*#__PURE__*/ h.insert(()=>g, ":first-child");
    s && t.look !== "handDrawn" && d.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), M(t, d);
    let x = r?.padding ?? 0;
    return t.width && t.height && (t.width += x / 2 || 0, t.height += x / 2 || 0), t.intersect = function(u) {
        return N.rect(t, u);
    }, h;
}
m$1(is, "forkJoin");
async function ns(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let e = 80, a = 50, { shapeSvg: h, bbox: s } = await C(l, t, /*#__PURE__*/ P(t)), c = /*#__PURE__*/ Math.max(e, s.width + (t.padding ?? 0) * 2, t?.width ?? 0), i = /*#__PURE__*/ Math.max(a, s.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = i / 2, { cssStyles: p } = t, m$1 = /*#__PURE__*/ v.svg(h), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = [
        {
            x: -c / 2,
            y: -i / 2
        },
        {
            x: c / 2 - n,
            y: -i / 2
        },
        .../*#__PURE__*/ At(-c / 2 + n, 0, n, 50, 90, 270),
        {
            x: c / 2 - n,
            y: i / 2
        },
        {
            x: -c / 2,
            y: i / 2
        }
    ], d = /*#__PURE__*/ W(g), x = /*#__PURE__*/ m$1.path(d, f), u$1 = /*#__PURE__*/ h.insert(()=>x, ":first-child");
    return u$1.attr("class", "basic label-container"), p && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), M(t, u$1), t.intersect = function(b) {
        return tt$1.info("Pill intersect", t, {
            radius: n,
            point: b
        }), N.polygon(t, g, b);
    }, h;
}
m$1(ns, "halfRoundedRectangle");
var Dr = /*#__PURE__*/ m$1((l, t, o, r, e)=>[
        `M${l + e},${t}`,
        `L${l + o - e},${t}`,
        `L${l + o},${t - r / 2}`,
        `L${l + o - e},${t - r}`,
        `L${l + e},${t - r}`,
        `L${l},${t - r / 2}`,
        "Z"
    ].join(" "), "createHexagonPathD");
async function ls(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = 4, s = a.height + t.padding, c = s / h, i = a.width + 2 * c + t.padding, n = [
        {
            x: c,
            y: 0
        },
        {
            x: i - c,
            y: 0
        },
        {
            x: i,
            y: -s / 2
        },
        {
            x: i - c,
            y: -s
        },
        {
            x: c,
            y: -s
        },
        {
            x: 0,
            y: -s / 2
        }
    ], p, { cssStyles: m$1 } = t;
    if (t.look === "handDrawn") {
        let f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {}), d = /*#__PURE__*/ Dr(0, 0, i, s, c), x = /*#__PURE__*/ f.path(d, g);
        p = /*#__PURE__*/ e.insert(()=>x, ":first-child").attr("transform", `translate(${-i / 2}, ${s / 2})`), m$1 && p.attr("style", m$1);
    } else p = /*#__PURE__*/ tt(e, i, s, n);
    return r && p.attr("style", r), t.width = i, t.height = s, M(t, p), t.intersect = function(f) {
        return N.polygon(t, n, f);
    }, e;
}
m$1(ls, "hexagon");
async function cs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.label = "", t.labelStyle = o;
    let { shapeSvg: e } = await C(l, t, /*#__PURE__*/ P(t)), a = /*#__PURE__*/ Math.max(30, t?.width ?? 0), h = /*#__PURE__*/ Math.max(30, t?.height ?? 0), { cssStyles: s } = t, c = /*#__PURE__*/ v.svg(e), i = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (i.roughness = 0, i.fillStyle = "solid");
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
    ], p = /*#__PURE__*/ W(n), m$1 = /*#__PURE__*/ c.path(p, i), f = /*#__PURE__*/ e.insert(()=>m$1, ":first-child");
    return f.attr("class", "basic label-container"), s && t.look !== "handDrawn" && f.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && f.selectChildren("path").attr("style", r), f.attr("transform", `translate(${-a / 2}, ${-h / 2})`), M(t, f), t.intersect = function(g) {
        return tt$1.info("Pill intersect", t, {
            points: n
        }), N.polygon(t, n, g);
    }, e;
}
m$1(cs, "hourglass");
async function hs(l, t, { config: { themeVariables: o, flowchart: r } }) {
    let { labelStyles: e } = u(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), c = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, c ?? 0);
    let { shapeSvg: i, bbox: n, label: p$1 } = await C(l, t, "icon-shape default"), m$1 = t.pos === "t", f = s, g = s, { nodeBorder: d } = o, { stylesMap: x } = p(t), u$1 = -g / 2, b = -f / 2, S = t.label ? 8 : 0, $ = /*#__PURE__*/ v.svg(i), w = /*#__PURE__*/ m(t, {
        stroke: "none",
        fill: "none"
    });
    t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
    let B = /*#__PURE__*/ $.rectangle(u$1, b, g, f, w), T = /*#__PURE__*/ Math.max(g, n.width), R = f + n.height + S, E = /*#__PURE__*/ $.rectangle(-T / 2, -R / 2, T, R, {
        ...w,
        fill: "transparent",
        stroke: "none"
    }), L = /*#__PURE__*/ i.insert(()=>B, ":first-child"), O = /*#__PURE__*/ i.insert(()=>E);
    if (t.icon) {
        let H = /*#__PURE__*/ i.append("g");
        H.html(`<g>${await He$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let G = /*#__PURE__*/ H.node().getBBox(), A = G.width, V = G.height, j = G.x, I = G.y;
        H.attr("transform", `translate(${-A / 2 - j},${m$1 ? n.height / 2 + S / 2 - V / 2 - I : -n.height / 2 - S / 2 - V / 2 - I})`), H.attr("style", `color: ${x.get("stroke") ?? d};`);
    }
    return p$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${m$1 ? -R / 2 : R / 2 - n.height})`), L.attr("transform", `translate(0,${m$1 ? n.height / 2 + S / 2 : -n.height / 2 - S / 2})`), M(t, O), t.intersect = function(H) {
        if (tt$1.info("iconSquare intersect", t, H), !t.label) return N.rect(t, H);
        let G = t.x ?? 0, A = t.y ?? 0, V = t.height ?? 0, j = [];
        return m$1 ? j = [
            {
                x: G - n.width / 2,
                y: A - V / 2
            },
            {
                x: G + n.width / 2,
                y: A - V / 2
            },
            {
                x: G + n.width / 2,
                y: A - V / 2 + n.height + S
            },
            {
                x: G + g / 2,
                y: A - V / 2 + n.height + S
            },
            {
                x: G + g / 2,
                y: A + V / 2
            },
            {
                x: G - g / 2,
                y: A + V / 2
            },
            {
                x: G - g / 2,
                y: A - V / 2 + n.height + S
            },
            {
                x: G - n.width / 2,
                y: A - V / 2 + n.height + S
            }
        ] : j = [
            {
                x: G - g / 2,
                y: A - V / 2
            },
            {
                x: G + g / 2,
                y: A - V / 2
            },
            {
                x: G + g / 2,
                y: A - V / 2 + f
            },
            {
                x: G + n.width / 2,
                y: A - V / 2 + f
            },
            {
                x: G + n.width / 2 / 2,
                y: A + V / 2
            },
            {
                x: G - n.width / 2,
                y: A + V / 2
            },
            {
                x: G - n.width / 2,
                y: A - V / 2 + f
            },
            {
                x: G - g / 2,
                y: A - V / 2 + f
            }
        ], N.polygon(t, j, H);
    }, i;
}
m$1(hs, "icon");
async function ps(l, t, { config: { themeVariables: o, flowchart: r } }) {
    let { labelStyles: e } = u(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), c = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, c ?? 0);
    let { shapeSvg: i, bbox: n, label: p$1 } = await C(l, t, "icon-shape default"), m$1 = 20, f = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: d, mainBkg: x } = o, { stylesMap: u$1 } = p(t), b = /*#__PURE__*/ v.svg(i), S = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
    let $ = /*#__PURE__*/ u$1.get("fill");
    S.stroke = $ ?? x;
    let w = /*#__PURE__*/ i.append("g");
    t.icon && w.html(`<g>${await He$1(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
    })}</g>`);
    let B = /*#__PURE__*/ w.node().getBBox(), T = B.width, R = B.height, E = B.x, L = B.y, O = Math.max(T, R) * Math.SQRT2 + m$1 * 2, H = /*#__PURE__*/ b.circle(0, 0, O, S), G = /*#__PURE__*/ Math.max(O, n.width), A = O + n.height + f, V = /*#__PURE__*/ b.rectangle(-G / 2, -A / 2, G, A, {
        ...S,
        fill: "transparent",
        stroke: "none"
    }), j = /*#__PURE__*/ i.insert(()=>H, ":first-child"), I = /*#__PURE__*/ i.insert(()=>V);
    return w.attr("transform", `translate(${-T / 2 - E},${g ? n.height / 2 + f / 2 - R / 2 - L : -n.height / 2 - f / 2 - R / 2 - L})`), w.attr("style", `color: ${u$1.get("stroke") ?? d};`), p$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${g ? -A / 2 : A / 2 - n.height})`), j.attr("transform", `translate(0,${g ? n.height / 2 + f / 2 : -n.height / 2 - f / 2})`), M(t, I), t.intersect = function(F) {
        return tt$1.info("iconSquare intersect", t, F), N.rect(t, F);
    }, i;
}
m$1(ps, "iconCircle");
async function ms(l, t, { config: { themeVariables: o, flowchart: r } }) {
    let { labelStyles: e } = u(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), c = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, c ?? 0);
    let { shapeSvg: i, bbox: n, halfPadding: p$1, label: m$1 } = await C(l, t, "icon-shape default"), f = t.pos === "t", g = s + p$1 * 2, d = s + p$1 * 2, { nodeBorder: x, mainBkg: u$1 } = o, { stylesMap: b } = p(t), S = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, B = /*#__PURE__*/ v.svg(i), T = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
    let R = /*#__PURE__*/ b.get("fill");
    T.stroke = R ?? u$1;
    let E = /*#__PURE__*/ B.path(/*#__PURE__*/ K(S, $, d, g, 5), T), L = /*#__PURE__*/ Math.max(d, n.width), O = g + n.height + w, H = /*#__PURE__*/ B.rectangle(-L / 2, -O / 2, L, O, {
        ...T,
        fill: "transparent",
        stroke: "none"
    }), G = /*#__PURE__*/ i.insert(()=>E, ":first-child").attr("class", "icon-shape2"), A = /*#__PURE__*/ i.insert(()=>H);
    if (t.icon) {
        let V = /*#__PURE__*/ i.append("g");
        V.html(`<g>${await He$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let j = /*#__PURE__*/ V.node().getBBox(), I = j.width, F = j.height, Q = j.x, it = j.y;
        V.attr("transform", `translate(${-I / 2 - Q},${f ? n.height / 2 + w / 2 - F / 2 - it : -n.height / 2 - w / 2 - F / 2 - it})`), V.attr("style", `color: ${b.get("stroke") ?? x};`);
    }
    return m$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${f ? -O / 2 : O / 2 - n.height})`), G.attr("transform", `translate(0,${f ? n.height / 2 + w / 2 : -n.height / 2 - w / 2})`), M(t, A), t.intersect = function(V) {
        if (tt$1.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
        let j = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
        return f ? Q = [
            {
                x: j - n.width / 2,
                y: I - F / 2
            },
            {
                x: j + n.width / 2,
                y: I - F / 2
            },
            {
                x: j + n.width / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j + d / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j + d / 2,
                y: I + F / 2
            },
            {
                x: j - d / 2,
                y: I + F / 2
            },
            {
                x: j - d / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j - n.width / 2,
                y: I - F / 2 + n.height + w
            }
        ] : Q = [
            {
                x: j - d / 2,
                y: I - F / 2
            },
            {
                x: j + d / 2,
                y: I - F / 2
            },
            {
                x: j + d / 2,
                y: I - F / 2 + g
            },
            {
                x: j + n.width / 2,
                y: I - F / 2 + g
            },
            {
                x: j + n.width / 2 / 2,
                y: I + F / 2
            },
            {
                x: j - n.width / 2,
                y: I + F / 2
            },
            {
                x: j - n.width / 2,
                y: I - F / 2 + g
            },
            {
                x: j - d / 2,
                y: I - F / 2 + g
            }
        ], N.polygon(t, Q, V);
    }, i;
}
m$1(ms, "iconRounded");
async function fs(l, t, { config: { themeVariables: o, flowchart: r } }) {
    let { labelStyles: e } = u(t);
    t.labelStyle = e;
    let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = /*#__PURE__*/ Math.max(a, h), c = r?.wrappingWidth;
    t.width = /*#__PURE__*/ Math.max(s, c ?? 0);
    let { shapeSvg: i, bbox: n, halfPadding: p$1, label: m$1 } = await C(l, t, "icon-shape default"), f = t.pos === "t", g = s + p$1 * 2, d = s + p$1 * 2, { nodeBorder: x, mainBkg: u$1 } = o, { stylesMap: b } = p(t), S = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, B = /*#__PURE__*/ v.svg(i), T = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
    let R = /*#__PURE__*/ b.get("fill");
    T.stroke = R ?? u$1;
    let E = /*#__PURE__*/ B.path(/*#__PURE__*/ K(S, $, d, g, .1), T), L = /*#__PURE__*/ Math.max(d, n.width), O = g + n.height + w, H = /*#__PURE__*/ B.rectangle(-L / 2, -O / 2, L, O, {
        ...T,
        fill: "transparent",
        stroke: "none"
    }), G = /*#__PURE__*/ i.insert(()=>E, ":first-child"), A = /*#__PURE__*/ i.insert(()=>H);
    if (t.icon) {
        let V = /*#__PURE__*/ i.append("g");
        V.html(`<g>${await He$1(t.icon, {
            height: s,
            width: s,
            fallbackPrefix: ""
        })}</g>`);
        let j = /*#__PURE__*/ V.node().getBBox(), I = j.width, F = j.height, Q = j.x, it = j.y;
        V.attr("transform", `translate(${-I / 2 - Q},${f ? n.height / 2 + w / 2 - F / 2 - it : -n.height / 2 - w / 2 - F / 2 - it})`), V.attr("style", `color: ${b.get("stroke") ?? x};`);
    }
    return m$1.attr("transform", `translate(${-n.width / 2 - (n.x - (n.left ?? 0))},${f ? -O / 2 : O / 2 - n.height})`), G.attr("transform", `translate(0,${f ? n.height / 2 + w / 2 : -n.height / 2 - w / 2})`), M(t, A), t.intersect = function(V) {
        if (tt$1.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
        let j = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0, Q = [];
        return f ? Q = [
            {
                x: j - n.width / 2,
                y: I - F / 2
            },
            {
                x: j + n.width / 2,
                y: I - F / 2
            },
            {
                x: j + n.width / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j + d / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j + d / 2,
                y: I + F / 2
            },
            {
                x: j - d / 2,
                y: I + F / 2
            },
            {
                x: j - d / 2,
                y: I - F / 2 + n.height + w
            },
            {
                x: j - n.width / 2,
                y: I - F / 2 + n.height + w
            }
        ] : Q = [
            {
                x: j - d / 2,
                y: I - F / 2
            },
            {
                x: j + d / 2,
                y: I - F / 2
            },
            {
                x: j + d / 2,
                y: I - F / 2 + g
            },
            {
                x: j + n.width / 2,
                y: I - F / 2 + g
            },
            {
                x: j + n.width / 2 / 2,
                y: I + F / 2
            },
            {
                x: j - n.width / 2,
                y: I + F / 2
            },
            {
                x: j - n.width / 2,
                y: I - F / 2 + g
            },
            {
                x: j - d / 2,
                y: I - F / 2 + g
            }
        ], N.polygon(t, Q, V);
    }, i;
}
m$1(fs, "iconSquare");
async function gs(l, t, { config: { flowchart: o } }) {
    let r = new Image;
    r.src = t?.img ?? "", await r.decode();
    let e = /*#__PURE__*/ Number(/*#__PURE__*/ r.naturalWidth.toString().replace("px", "")), a = /*#__PURE__*/ Number(/*#__PURE__*/ r.naturalHeight.toString().replace("px", ""));
    t.imageAspectRatio = e / a;
    let { labelStyles: h } = u(t);
    t.labelStyle = h;
    let s = o?.wrappingWidth;
    t.defaultWidth = o?.wrappingWidth;
    let c = /*#__PURE__*/ Math.max(t.label ? s ?? 0 : 0, t?.assetWidth ?? e), i = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : c, n = t.constraint === "on" ? i / t.imageAspectRatio : t?.assetHeight ?? a;
    t.width = /*#__PURE__*/ Math.max(i, s ?? 0);
    let { shapeSvg: p, bbox: m$1, label: f } = await C(l, t, "image-shape default"), g = t.pos === "t", d = -i / 2, x = -n / 2, u$1 = t.label ? 8 : 0, b = /*#__PURE__*/ v.svg(p), S = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
    let $ = /*#__PURE__*/ b.rectangle(d, x, i, n, S), w = /*#__PURE__*/ Math.max(i, m$1.width), B = n + m$1.height + u$1, T = /*#__PURE__*/ b.rectangle(-w / 2, -B / 2, w, B, {
        ...S,
        fill: "none",
        stroke: "none"
    }), R = /*#__PURE__*/ p.insert(()=>$, ":first-child"), E = /*#__PURE__*/ p.insert(()=>T);
    if (t.img) {
        let L = /*#__PURE__*/ p.append("image");
        L.attr("href", t.img), L.attr("width", i), L.attr("height", n), L.attr("preserveAspectRatio", "none"), L.attr("transform", `translate(${-i / 2},${g ? B / 2 - n : -B / 2})`);
    }
    return f.attr("transform", `translate(${-m$1.width / 2 - (m$1.x - (m$1.left ?? 0))},${g ? -n / 2 - m$1.height / 2 - u$1 / 2 : n / 2 - m$1.height / 2 + u$1 / 2})`), R.attr("transform", `translate(0,${g ? m$1.height / 2 + u$1 / 2 : -m$1.height / 2 - u$1 / 2})`), M(t, E), t.intersect = function(L) {
        if (tt$1.info("iconSquare intersect", t, L), !t.label) return N.rect(t, L);
        let O = t.x ?? 0, H = t.y ?? 0, G = t.height ?? 0, A = [];
        return g ? A = [
            {
                x: O - m$1.width / 2,
                y: H - G / 2
            },
            {
                x: O + m$1.width / 2,
                y: H - G / 2
            },
            {
                x: O + m$1.width / 2,
                y: H - G / 2 + m$1.height + u$1
            },
            {
                x: O + i / 2,
                y: H - G / 2 + m$1.height + u$1
            },
            {
                x: O + i / 2,
                y: H + G / 2
            },
            {
                x: O - i / 2,
                y: H + G / 2
            },
            {
                x: O - i / 2,
                y: H - G / 2 + m$1.height + u$1
            },
            {
                x: O - m$1.width / 2,
                y: H - G / 2 + m$1.height + u$1
            }
        ] : A = [
            {
                x: O - i / 2,
                y: H - G / 2
            },
            {
                x: O + i / 2,
                y: H - G / 2
            },
            {
                x: O + i / 2,
                y: H - G / 2 + n
            },
            {
                x: O + m$1.width / 2,
                y: H - G / 2 + n
            },
            {
                x: O + m$1.width / 2 / 2,
                y: H + G / 2
            },
            {
                x: O - m$1.width / 2,
                y: H + G / 2
            },
            {
                x: O - m$1.width / 2,
                y: H - G / 2 + n
            },
            {
                x: O - i / 2,
                y: H - G / 2 + n
            }
        ], N.polygon(t, A, L);
    }, p;
}
m$1(gs, "imageSquare");
async function ds(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = [
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
    ], i, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ m(t, {}), f = /*#__PURE__*/ W(c), g = /*#__PURE__*/ p.path(f, m$1);
        i = /*#__PURE__*/ e.insert(()=>g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && i.attr("style", n);
    } else i = /*#__PURE__*/ tt(e, h, s, c);
    return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
        return N.polygon(t, c, p);
    }, e;
}
m$1(ds, "inv_trapezoid");
async function pt(l, t, o) {
    let { labelStyles: r, nodeStyles: e } = u(t);
    t.labelStyle = r;
    let { shapeSvg: a, bbox: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(h.width + o.labelPaddingX * 2, t?.width || 0), c = /*#__PURE__*/ Math.max(h.height + o.labelPaddingY * 2, t?.height || 0), i = -s / 2, n = -c / 2, p, { rx: m$1, ry: f } = t, { cssStyles: g } = t;
    if (o?.rx && o.ry && (m$1 = o.rx, f = o.ry), t.look === "handDrawn") {
        let d = /*#__PURE__*/ v.svg(a), x = /*#__PURE__*/ m(t, {}), u = m$1 || f ? d.path(/*#__PURE__*/ K(i, n, s, c, m$1 || 0), x) : d.rectangle(i, n, s, c, x);
        p = /*#__PURE__*/ a.insert(()=>u, ":first-child"), p.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(g));
    } else p = /*#__PURE__*/ a.insert("rect", ":first-child"), p.attr("class", "basic label-container").attr("style", e).attr("rx", /*#__PURE__*/ Je$1(m$1)).attr("ry", /*#__PURE__*/ Je$1(f)).attr("x", i).attr("y", n).attr("width", s).attr("height", c);
    return M(t, p), t.intersect = function(d) {
        return N.rect(t, d);
    }, a;
}
m$1(pt, "drawRect");
async function us(l, t) {
    let { shapeSvg: o, bbox: r, label: e } = await C(l, t, "label"), a = /*#__PURE__*/ o.insert("rect", ":first-child");
    return a.attr("width", .1).attr("height", .1), o.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), M(t, a), t.intersect = function(c) {
        return N.rect(t, c);
    }, o;
}
m$1(us, "labelRect");
async function ys(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), c = [
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
    ], i, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ m(t, {}), f = /*#__PURE__*/ W(c), g = /*#__PURE__*/ p.path(f, m$1);
        i = /*#__PURE__*/ e.insert(()=>g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && i.attr("style", n);
    } else i = /*#__PURE__*/ tt(e, h, s, c);
    return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
        return N.polygon(t, c, p);
    }, e;
}
m$1(ys, "lean_left");
async function xs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), c = [
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
    ], i, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ m(t, {}), f = /*#__PURE__*/ W(c), g = /*#__PURE__*/ p.path(f, m$1);
        i = /*#__PURE__*/ e.insert(()=>g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && i.attr("style", n);
    } else i = /*#__PURE__*/ tt(e, h, s, c);
    return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
        return N.polygon(t, c, p);
    }, e;
}
m$1(xs, "lean_right");
function bs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.label = "", t.labelStyle = o;
    let e = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, h = /*#__PURE__*/ Math.max(35, t?.width ?? 0), s = /*#__PURE__*/ Math.max(35, t?.height ?? 0), c = 7, i = [
        {
            x: h,
            y: 0
        },
        {
            x: 0,
            y: s + c / 2
        },
        {
            x: h - 2 * c,
            y: s + c / 2
        },
        {
            x: 0,
            y: 2 * s
        },
        {
            x: h,
            y: s - c / 2
        },
        {
            x: 2 * c,
            y: s - c / 2
        }
    ], n = /*#__PURE__*/ v.svg(e), p = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    let m$1 = /*#__PURE__*/ W(i), f = /*#__PURE__*/ n.path(m$1, p), g = /*#__PURE__*/ e.insert(()=>f, ":first-child");
    return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && g.selectAll("path").attr("style", r), g.attr("transform", `translate(-${h / 2},${-s})`), M(t, g), t.intersect = function(d) {
        return tt$1.info("lightningBolt intersect", t, d), N.polygon(t, i, d);
    }, e;
}
m$1(bs, "lightningBolt");
var kr = /*#__PURE__*/ m$1((l, t, o, r, e, a, h)=>[
        `M${l},${t + a}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `a${e},${a} 0,0,0 ${-o},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `l0,${-r}`,
        `M${l},${t + a + h}`,
        `a${e},${a} 0,0,0 ${o},0`
    ].join(" "), "createCylinderPathD"), Mr = /*#__PURE__*/ m$1((l, t, o, r, e, a, h)=>[
        `M${l},${t + a}`,
        `M${l + o},${t + a}`,
        `a${e},${a} 0,0,0 ${-o},0`,
        `l0,${r}`,
        `a${e},${a} 0,0,0 ${o},0`,
        `l0,${-r}`,
        `M${l},${t + a + h}`,
        `a${e},${a} 0,0,0 ${o},0`
    ].join(" "), "createOuterCylinderPathD"), $r = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l - o / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 ${o},0`
    ].join(" "), "createInnerCylinderPathD");
async function Ss(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t.width ?? 0), c = s / 2, i = c / (2.5 + s / 50), n = /*#__PURE__*/ Math.max(a.height + i + (t.padding ?? 0), t.height ?? 0), p = n * .1, m$1, { cssStyles: f } = t;
    if (t.look === "handDrawn") {
        let g = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ Mr(0, 0, s, n, c, i, p), x = /*#__PURE__*/ $r(0, i, s, n, c, i), u = /*#__PURE__*/ m(t, {}), b = /*#__PURE__*/ g.path(d, u), S = /*#__PURE__*/ g.path(x, u);
        e.insert(()=>S, ":first-child").attr("class", "line"), m$1 = /*#__PURE__*/ e.insert(()=>b, ":first-child"), m$1.attr("class", "basic label-container"), f && m$1.attr("style", f);
    } else {
        let g = /*#__PURE__*/ kr(0, 0, s, n, c, i, p);
        m$1 = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(f)).attr("style", r);
    }
    return m$1.attr("label-offset-y", i), m$1.attr("transform", `translate(${-s / 2}, ${-(n / 2 + i)})`), M(t, m$1), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), t.intersect = function(g) {
        let d = /*#__PURE__*/ N.rect(t, g), x = d.x - (t.x ?? 0);
        if (c != 0 && (Math.abs(x) < (t.width ?? 0) / 2 || Math.abs(x) == (t.width ?? 0) / 2 && Math.abs(d.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
            let u = i * i * (1 - x * x / (c * c));
            u > 0 && (u = /*#__PURE__*/ Math.sqrt(u)), u = i - u, g.y - (t.y ?? 0) > 0 && (u = -u), d.y += u;
        }
        return d;
    }, e;
}
m$1(Ss, "linedCylinder");
async function ws(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = c / 4, n = c + i, { cssStyles: p } = t, m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = [
        {
            x: -s / 2 - s / 2 * .1,
            y: -n / 2
        },
        {
            x: -s / 2 - s / 2 * .1,
            y: n / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - s / 2 * .1, n / 2, s / 2 + s / 2 * .1, n / 2, i, .8),
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
    ], d = /*#__PURE__*/ m$1.polygon(/*#__PURE__*/ g.map((u)=>[
            u.x,
            u.y
        ]), f), x = /*#__PURE__*/ e.insert(()=>d, ":first-child");
    return x.attr("class", "basic label-container"), p && t.look !== "handDrawn" && x.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * .1 / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), M(t, x), t.intersect = function(u) {
        return N.polygon(t, g, u);
    }, e;
}
m$1(ws, "linedWaveEdgedRect");
async function Ns(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = 5, n = -s / 2, p = -c / 2, { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {}), d = [
        {
            x: n - i,
            y: p + i
        },
        {
            x: n - i,
            y: p + c + i
        },
        {
            x: n + s - i,
            y: p + c + i
        },
        {
            x: n + s - i,
            y: p + c
        },
        {
            x: n + s,
            y: p + c
        },
        {
            x: n + s,
            y: p + c - i
        },
        {
            x: n + s + i,
            y: p + c - i
        },
        {
            x: n + s + i,
            y: p - i
        },
        {
            x: n + i,
            y: p - i
        },
        {
            x: n + i,
            y: p
        },
        {
            x: n,
            y: p
        },
        {
            x: n,
            y: p + i
        }
    ], x = [
        {
            x: n,
            y: p + i
        },
        {
            x: n + s - i,
            y: p + i
        },
        {
            x: n + s - i,
            y: p + c
        },
        {
            x: n + s,
            y: p + c
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
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let u$1 = /*#__PURE__*/ W(d), b = /*#__PURE__*/ f.path(u$1, g), S = /*#__PURE__*/ W(x), $ = /*#__PURE__*/ f.path(S, {
        ...g,
        fill: "none"
    }), w = /*#__PURE__*/ e.insert(()=>$, ":first-child");
    return w.insert(()=>b, ":first-child"), w.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && w.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - i - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), M(t, w), t.intersect = function(B) {
        return N.polygon(t, d, B);
    }, e;
}
m$1(Ns, "multiRect");
async function vs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = c / 4, n = c + i, p = -s / 2, m$1 = -n / 2, f = 5, { cssStyles: g } = t, d = /*#__PURE__*/ lt(p - f, m$1 + n + f, p + s - f, m$1 + n + f, i, .8), x = d?.[d.length - 1], u$1 = [
        {
            x: p - f,
            y: m$1 + f
        },
        {
            x: p - f,
            y: m$1 + n + f
        },
        ...d,
        {
            x: p + s - f,
            y: x.y - f
        },
        {
            x: p + s,
            y: x.y - f
        },
        {
            x: p + s,
            y: x.y - 2 * f
        },
        {
            x: p + s + f,
            y: x.y - 2 * f
        },
        {
            x: p + s + f,
            y: m$1 - f
        },
        {
            x: p + f,
            y: m$1 - f
        },
        {
            x: p + f,
            y: m$1
        },
        {
            x: p,
            y: m$1
        },
        {
            x: p,
            y: m$1 + f
        }
    ], b = [
        {
            x: p,
            y: m$1 + f
        },
        {
            x: p + s - f,
            y: m$1 + f
        },
        {
            x: p + s - f,
            y: x.y - f
        },
        {
            x: p + s,
            y: x.y - f
        },
        {
            x: p + s,
            y: m$1
        },
        {
            x: p,
            y: m$1
        }
    ], S = /*#__PURE__*/ v.svg(e), $ = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && ($.roughness = 0, $.fillStyle = "solid");
    let w = /*#__PURE__*/ W(u$1), B = /*#__PURE__*/ S.path(w, $), T = /*#__PURE__*/ W(b), R = /*#__PURE__*/ S.path(T, $), E = /*#__PURE__*/ e.insert(()=>B, ":first-child");
    return E.insert(()=>R), E.attr("class", "basic label-container"), g && t.look !== "handDrawn" && E.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && E.selectAll("path").attr("style", r), E.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-(a.width / 2) - f - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + f - i / 2 - (a.y - (a.top ?? 0))})`), M(t, E), t.intersect = function(L) {
        return N.polygon(t, u$1, L);
    }, e;
}
m$1(vs, "multiWaveEdgedRectangle");
async function Ds(l, t, { config: { themeVariables: o } }) {
    let { labelStyles: r, nodeStyles: e } = u(t);
    t.labelStyle = r, t.useHtmlLabels || Or().flowchart?.htmlLabels !== false || (t.centerLabel = true);
    let { shapeSvg: h, bbox: s, label: c } = await C(l, t, /*#__PURE__*/ P(t)), i = /*#__PURE__*/ Math.max(s.width + (t.padding ?? 0) * 2, t?.width ?? 0), n = /*#__PURE__*/ Math.max(s.height + (t.padding ?? 0) * 2, t?.height ?? 0), p = -i / 2, m$1 = -n / 2, { cssStyles: f } = t, g = /*#__PURE__*/ v.svg(h), d = /*#__PURE__*/ m(t, {
        fill: o.noteBkgColor,
        stroke: o.noteBorderColor
    });
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let x = /*#__PURE__*/ g.rectangle(p, m$1, i, n, d), u$1 = /*#__PURE__*/ h.insert(()=>x, ":first-child");
    return u$1.attr("class", "basic label-container"), f && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", f), e && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", e), c.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`), M(t, u$1), t.intersect = function(b) {
        return N.rect(t, b);
    }, h;
}
m$1(Ds, "note");
var Pr = /*#__PURE__*/ m$1((l, t, o)=>[
        `M${l + o / 2},${t}`,
        `L${l + o},${t - o / 2}`,
        `L${l + o / 2},${t - o}`,
        `L${l},${t - o / 2}`,
        "Z"
    ].join(" "), "createDecisionBoxPathD");
async function ks(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = a.width + t.padding, s = a.height + t.padding, c = h + s, i = [
        {
            x: c / 2,
            y: 0
        },
        {
            x: c,
            y: -c / 2
        },
        {
            x: c / 2,
            y: -c
        },
        {
            x: 0,
            y: -c / 2
        }
    ], n, { cssStyles: p } = t;
    if (t.look === "handDrawn") {
        let m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {}), g = /*#__PURE__*/ Pr(0, 0, c), d = /*#__PURE__*/ m$1.path(g, f);
        n = /*#__PURE__*/ e.insert(()=>d, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`), p && n.attr("style", p);
    } else n = /*#__PURE__*/ tt(e, c, c, i);
    return r && n.attr("style", r), M(t, n), t.intersect = function(m) {
        return tt$1.debug(`APA12 Intersect called SPLIT
point:`, m, `
node:
`, t, `
res:`, /*#__PURE__*/ N.polygon(t, i, m)), N.polygon(t, i, m);
    }, e;
}
m$1(ks, "question");
async function Ms(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), i = -s / 2, n = -c / 2, p = n / 2, m$1 = [
        {
            x: i + p,
            y: n
        },
        {
            x: i,
            y: 0
        },
        {
            x: i + p,
            y: -n
        },
        {
            x: -i,
            y: -n
        },
        {
            x: -i,
            y: n
        }
    ], { cssStyles: f } = t, g = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let x = /*#__PURE__*/ W(m$1), u$1 = /*#__PURE__*/ g.path(x, d), b = /*#__PURE__*/ e.insert(()=>u$1, ":first-child");
    return b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p / 2},0)`), h.attr("transform", `translate(${-p / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), M(t, b), t.intersect = function(S) {
        return N.polygon(t, m$1, S);
    }, e;
}
m$1(Ms, "rect_left_inv_arrow");
async function $s(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let e;
    t.cssClasses ? e = "node " + t.cssClasses : e = "node default";
    let a = /*#__PURE__*/ l.insert("g").attr("class", e).attr("id", t.domId || t.id), h = /*#__PURE__*/ a.insert("g"), s = /*#__PURE__*/ a.insert("g").attr("class", "label").attr("style", r), c = t.description, i = t.label, n = /*#__PURE__*/ s.node().appendChild(await Tt(i, t.labelStyle, true, true)), p = {
        width: 0,
        height: 0
    };
    if (Rf(hh()?.flowchart?.htmlLabels)) {
        let R = n.children[0], E = /*#__PURE__*/ kh(n);
        p = /*#__PURE__*/ R.getBoundingClientRect(), E.attr("width", p.width), E.attr("height", p.height);
    }
    tt$1.info("Text 2", c);
    let m$1 = c || [], f = /*#__PURE__*/ n.getBBox(), g = /*#__PURE__*/ s.node().appendChild(await Tt(m$1.join ? m$1.join("<br/>") : m$1, t.labelStyle, true, true)), d = g.children[0], x = /*#__PURE__*/ kh(g);
    p = /*#__PURE__*/ d.getBoundingClientRect(), x.attr("width", p.width), x.attr("height", p.height);
    let u$1 = (t.padding || 0) / 2;
    kh(g).attr("transform", "translate( " + (p.width > f.width ? 0 : (f.width - p.width) / 2) + ", " + (f.height + u$1 + 5) + ")"), kh(n).attr("transform", "translate( " + (p.width < f.width ? 0 : -(f.width - p.width) / 2) + ", 0)"), p = /*#__PURE__*/ s.node().getBBox(), s.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - u$1 + 3) + ")");
    let b = p.width + (t.padding || 0), S = p.height + (t.padding || 0), $ = -p.width / 2 - u$1, w = -p.height / 2 - u$1, B, T;
    if (t.look === "handDrawn") {
        let R = /*#__PURE__*/ v.svg(a), E = /*#__PURE__*/ m(t, {}), L = /*#__PURE__*/ R.path(/*#__PURE__*/ K($, w, b, S, t.rx || 0), E), O = /*#__PURE__*/ R.line(-p.width / 2 - u$1, -p.height / 2 - u$1 + f.height + u$1, p.width / 2 + u$1, -p.height / 2 - u$1 + f.height + u$1, E);
        T = /*#__PURE__*/ a.insert(()=>(tt$1.debug("Rough node insert CXC", L), O), ":first-child"), B = /*#__PURE__*/ a.insert(()=>(tt$1.debug("Rough node insert CXC", L), L), ":first-child");
    } else B = /*#__PURE__*/ h.insert("rect", ":first-child"), T = /*#__PURE__*/ h.insert("line"), B.attr("class", "outer title-state").attr("style", r).attr("x", -p.width / 2 - u$1).attr("y", -p.height / 2 - u$1).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), T.attr("class", "divider").attr("x1", -p.width / 2 - u$1).attr("x2", p.width / 2 + u$1).attr("y1", -p.height / 2 - u$1 + f.height + u$1).attr("y2", -p.height / 2 - u$1 + f.height + u$1);
    return M(t, B), t.intersect = function(R) {
        return N.rect(t, R);
    }, a;
}
m$1($s, "rectWithTitle");
async function Ps(l, t) {
    let o = {
        rx: 5,
        ry: 5,
        labelPaddingX: (t?.padding || 0) * 1,
        labelPaddingY: (t?.padding || 0) * 1
    };
    return pt(l, t, o);
}
m$1(Ps, "roundedRect");
async function Bs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = t?.padding ?? 0, c = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), i = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = -a.width / 2 - s, p = -a.height / 2 - s, { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let d = [
        {
            x: n,
            y: p
        },
        {
            x: n + c + 8,
            y: p
        },
        {
            x: n + c + 8,
            y: p + i
        },
        {
            x: n - 8,
            y: p + i
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
            y: p + i
        }
    ], x = /*#__PURE__*/ f.polygon(/*#__PURE__*/ d.map((b)=>[
            b.x,
            b.y
        ]), g), u$1 = /*#__PURE__*/ e.insert(()=>x, ":first-child");
    return u$1.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(m$1)), r && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), m$1 && t.look !== "handDrawn" && u$1.selectAll("path").attr("style", r), h.attr("transform", `translate(${-c / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-i / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), M(t, u$1), t.intersect = function(b) {
        return N.rect(t, b);
    }, e;
}
m$1(Bs, "shadedProcess");
async function Ts(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = -s / 2, n = -c / 2, { cssStyles: p } = t, m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    let g = [
        {
            x: i,
            y: n
        },
        {
            x: i,
            y: n + c
        },
        {
            x: i + s,
            y: n + c
        },
        {
            x: i + s,
            y: n - c / 2
        }
    ], d = /*#__PURE__*/ W(g), x = /*#__PURE__*/ m$1.path(d, f), u$1 = /*#__PURE__*/ e.insert(()=>x, ":first-child");
    return u$1.attr("class", "basic label-container"), p && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), u$1.attr("transform", `translate(0, ${c / 4})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-c / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), M(t, u$1), t.intersect = function(b) {
        return N.polygon(t, g, b);
    }, e;
}
m$1(Ts, "slopedRect");
async function Cs(l, t) {
    let o = {
        rx: 0,
        ry: 0,
        labelPaddingX: (t?.padding || 0) * 2,
        labelPaddingY: (t?.padding || 0) * 1
    };
    return pt(l, t, o);
}
m$1(Cs, "squareRect");
async function Rs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = a.height + t.padding, s = a.width + h / 4 + t.padding, c, { cssStyles: i } = t;
    if (t.look === "handDrawn") {
        let n = /*#__PURE__*/ v.svg(e), p = /*#__PURE__*/ m(t, {}), m$1 = /*#__PURE__*/ K(-s / 2, -h / 2, s, h, h / 2), f = /*#__PURE__*/ n.path(m$1, p);
        c = /*#__PURE__*/ e.insert(()=>f, ":first-child"), c.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(i));
    } else c = /*#__PURE__*/ e.insert("rect", ":first-child"), c.attr("class", "basic label-container").attr("style", r).attr("rx", h / 2).attr("ry", h / 2).attr("x", -s / 2).attr("y", -h / 2).attr("width", s).attr("height", h);
    return M(t, c), t.intersect = function(n) {
        return N.rect(t, n);
    }, e;
}
m$1(Rs, "stadium");
async function Gs(l, t) {
    return pt(l, t, {
        rx: 5,
        ry: 5
    });
}
m$1(Gs, "state");
function Es(l, t, { config: { themeVariables: o } }) {
    let { labelStyles: r, nodeStyles: e } = u(t);
    t.labelStyle = r;
    let { cssStyles: a } = t, { lineColor: h, stateBorder: s, nodeBorder: c } = o, i = /*#__PURE__*/ l.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = /*#__PURE__*/ v.svg(i), p = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    let m$1 = /*#__PURE__*/ n.circle(0, 0, 14, {
        ...p,
        stroke: h,
        strokeWidth: 2
    }), f = s ?? c, g = /*#__PURE__*/ n.circle(0, 0, 5, {
        ...p,
        fill: f,
        stroke: f,
        strokeWidth: 2,
        fillStyle: "solid"
    }), d = /*#__PURE__*/ i.insert(()=>m$1, ":first-child");
    return d.insert(()=>g), a && d.selectAll("path").attr("style", a), e && d.selectAll("path").attr("style", e), M(t, d), t.intersect = function(x) {
        return N.circle(t, 7, x);
    }, i;
}
m$1(Es, "stateEnd");
function As(l, t, { config: { themeVariables: o } }) {
    let { lineColor: r } = o, e = /*#__PURE__*/ l.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
    if (t.look === "handDrawn") {
        let s = /*#__PURE__*/ v.svg(e).circle(0, 0, 14, /*#__PURE__*/ f(r));
        a = /*#__PURE__*/ e.insert(()=>s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else a = /*#__PURE__*/ e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    return M(t, a), t.intersect = function(h) {
        return N.circle(t, 7, h);
    }, e;
}
m$1(As, "stateStart");
async function js(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = (t?.padding || 0) / 2, s = a.width + t.padding, c = a.height + t.padding, i = -a.width / 2 - h, n = -a.height / 2 - h, p = [
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
            y: -c
        },
        {
            x: 0,
            y: -c
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
            y: -c
        },
        {
            x: -8,
            y: -c
        },
        {
            x: -8,
            y: 0
        }
    ];
    if (t.look === "handDrawn") {
        let m$1 = /*#__PURE__*/ v.svg(e), f = /*#__PURE__*/ m(t, {}), g = /*#__PURE__*/ m$1.rectangle(i - 8, n, s + 16, c, f), d = /*#__PURE__*/ m$1.line(i, n, i, n + c, f), x = /*#__PURE__*/ m$1.line(i + s, n, i + s, n + c, f);
        e.insert(()=>d, ":first-child"), e.insert(()=>x, ":first-child");
        let u = /*#__PURE__*/ e.insert(()=>g, ":first-child"), { cssStyles: b } = t;
        u.attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(b)), M(t, u);
    } else {
        let m = /*#__PURE__*/ tt(e, s, c, p);
        r && m.attr("style", r), M(t, m);
    }
    return t.intersect = function(m) {
        return N.polygon(t, p, m);
    }, e;
}
m$1(js, "subroutine");
async function Os(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), s = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = -h / 2, i = -s / 2, n = .2 * s, p = .2 * s, { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {}), d = [
        {
            x: c - n / 2,
            y: i
        },
        {
            x: c + h + n / 2,
            y: i
        },
        {
            x: c + h + n / 2,
            y: i + s
        },
        {
            x: c - n / 2,
            y: i + s
        }
    ], x = [
        {
            x: c + h - n / 2,
            y: i + s
        },
        {
            x: c + h + n / 2,
            y: i + s
        },
        {
            x: c + h + n / 2,
            y: i + s - p
        }
    ];
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let u$1 = /*#__PURE__*/ W(d), b = /*#__PURE__*/ f.path(u$1, g), S = /*#__PURE__*/ W(x), $ = /*#__PURE__*/ f.path(S, {
        ...g,
        fillStyle: "solid"
    }), w = /*#__PURE__*/ e.insert(()=>$, ":first-child");
    return w.insert(()=>b, ":first-child"), w.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && w.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), M(t, w), t.intersect = function(B) {
        return N.polygon(t, d, B);
    }, e;
}
m$1(Os, "taggedRect");
async function Ls(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = c / 4, n = .2 * s, p = .2 * c, m$1 = c + i, { cssStyles: f } = t, g = /*#__PURE__*/ v.svg(e), d = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    let x = [
        {
            x: -s / 2 - s / 2 * .1,
            y: m$1 / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - s / 2 * .1, m$1 / 2, s / 2 + s / 2 * .1, m$1 / 2, i, .8),
        {
            x: s / 2 + s / 2 * .1,
            y: -m$1 / 2
        },
        {
            x: -s / 2 - s / 2 * .1,
            y: -m$1 / 2
        }
    ], u$1 = -s / 2 + s / 2 * .1, b = -m$1 / 2 - p * .4, S = [
        {
            x: u$1 + s - n,
            y: (b + c) * 1.4
        },
        {
            x: u$1 + s,
            y: b + c - p
        },
        {
            x: u$1 + s,
            y: (b + c) * .9
        },
        .../*#__PURE__*/ lt(u$1 + s, (b + c) * 1.3, u$1 + s - n, (b + c) * 1.5, -c * .03, .5)
    ], $ = /*#__PURE__*/ W(x), w = /*#__PURE__*/ g.path($, d), B = /*#__PURE__*/ W(S), T = /*#__PURE__*/ g.path(B, {
        ...d,
        fillStyle: "solid"
    }), R = /*#__PURE__*/ e.insert(()=>T, ":first-child");
    return R.insert(()=>w, ":first-child"), R.attr("class", "basic label-container"), f && t.look !== "handDrawn" && R.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), M(t, R), t.intersect = function(E) {
        return N.polygon(t, x, E);
    }, e;
}
m$1(Ls, "taggedWaveEdgedRectangle");
async function Hs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = /*#__PURE__*/ Math.max(a.width + t.padding, t?.width || 0), s = /*#__PURE__*/ Math.max(a.height + t.padding, t?.height || 0), c = -h / 2, i = -s / 2, n = /*#__PURE__*/ e.insert("rect", ":first-child");
    return n.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", c).attr("y", i).attr("width", h).attr("height", s), M(t, n), t.intersect = function(p) {
        return N.rect(t, p);
    }, e;
}
m$1(Hs, "text");
var Br = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>`M${l},${t}
    a${e},${a} 0,0,1 0,${-r}
    l${o},0
    a${e},${a} 0,0,1 0,${r}
    M${o},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-o},0`, "createCylinderPathD"), Tr = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l},${t}`,
        `M${l + o},${t}`,
        `a${e},${a} 0,0,0 0,${-r}`,
        `l${-o},0`,
        `a${e},${a} 0,0,0 0,${r}`,
        `l${o},0`
    ].join(" "), "createOuterCylinderPathD"), Cr = /*#__PURE__*/ m$1((l, t, o, r, e, a)=>[
        `M${l + o / 2},${-r / 2}`,
        `a${e},${a} 0,0,0 0,${r}`
    ].join(" "), "createInnerCylinderPathD");
async function Vs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h, halfPadding: s } = await C(l, t, /*#__PURE__*/ P(t)), c = t.look === "neo" ? s * 2 : s, i = a.height + c, n = i / 2, p = n / (2.5 + i / 50), m$1 = a.width + p + c, { cssStyles: f } = t, g;
    if (t.look === "handDrawn") {
        let d = /*#__PURE__*/ v.svg(e), x = /*#__PURE__*/ Tr(0, 0, m$1, i, p, n), u = /*#__PURE__*/ Cr(0, 0, m$1, i, p, n), b = /*#__PURE__*/ d.path(x, /*#__PURE__*/ m(t, {})), S = /*#__PURE__*/ d.path(u, /*#__PURE__*/ m(t, {
            fill: "none"
        }));
        g = /*#__PURE__*/ e.insert(()=>S, ":first-child"), g = /*#__PURE__*/ e.insert(()=>b, ":first-child"), g.attr("class", "basic label-container"), f && g.attr("style", f);
    } else {
        let d = /*#__PURE__*/ Br(0, 0, m$1, i, p, n);
        g = /*#__PURE__*/ e.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", /*#__PURE__*/ Je$1(f)).attr("style", r), g.attr("class", "basic label-container"), f && g.selectAll("path").attr("style", f), r && g.selectAll("path").attr("style", r);
    }
    return g.attr("label-offset-x", p), g.attr("transform", `translate(${-m$1 / 2}, ${i / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), M(t, g), t.intersect = function(d) {
        let x = /*#__PURE__*/ N.rect(t, d), u = x.y - (t.y ?? 0);
        if (n != 0 && (Math.abs(u) < (t.height ?? 0) / 2 || Math.abs(u) == (t.height ?? 0) / 2 && Math.abs(x.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p)) {
            let b = p * p * (1 - u * u / (n * n));
            b != 0 && (b = /*#__PURE__*/ Math.sqrt(/*#__PURE__*/ Math.abs(b))), b = p - b, d.x - (t.x ?? 0) > 0 && (b = -b), x.x += b;
        }
        return x;
    }, e;
}
m$1(Vs, "tiltedCylinder");
async function Ws(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = a.width + t.padding, s = a.height + t.padding, c = [
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
    ], i, { cssStyles: n } = t;
    if (t.look === "handDrawn") {
        let p = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ m(t, {}), f = /*#__PURE__*/ W(c), g = /*#__PURE__*/ p.path(f, m$1);
        i = /*#__PURE__*/ e.insert(()=>g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n && i.attr("style", n);
    } else i = /*#__PURE__*/ tt(e, h, s, c);
    return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
        return N.polygon(t, c, p);
    }, e;
}
m$1(Ws, "trapezoid");
async function Is(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = 60, s = 20, c = /*#__PURE__*/ Math.max(h, a.width + (t.padding ?? 0) * 2, t?.width ?? 0), i = /*#__PURE__*/ Math.max(s, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: n } = t, p = /*#__PURE__*/ v.svg(e), m$1 = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (m$1.roughness = 0, m$1.fillStyle = "solid");
    let f = [
        {
            x: -c / 2 * .8,
            y: -i / 2
        },
        {
            x: c / 2 * .8,
            y: -i / 2
        },
        {
            x: c / 2,
            y: -i / 2 * .6
        },
        {
            x: c / 2,
            y: i / 2
        },
        {
            x: -c / 2,
            y: i / 2
        },
        {
            x: -c / 2,
            y: -i / 2 * .6
        }
    ], g = /*#__PURE__*/ W(f), d = /*#__PURE__*/ p.path(g, m$1), x = /*#__PURE__*/ e.insert(()=>d, ":first-child");
    return x.attr("class", "basic label-container"), n && t.look !== "handDrawn" && x.selectChildren("path").attr("style", n), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), M(t, x), t.intersect = function(u) {
        return N.polygon(t, f, u);
    }, e;
}
m$1(Is, "trapezoidalPentagon");
async function Fs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Rf(hh().flowchart?.htmlLabels), c = a.width + (t.padding ?? 0), i = c + a.height, n = c + a.height, p = [
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
            y: -i
        }
    ], { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let d = /*#__PURE__*/ W(p), x = /*#__PURE__*/ f.path(d, g), u$1 = /*#__PURE__*/ e.insert(()=>x, ":first-child").attr("transform", `translate(${-i / 2}, ${i / 2})`);
    return m$1 && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", m$1), r && t.look !== "handDrawn" && u$1.selectChildren("path").attr("style", r), t.width = c, t.height = i, M(t, u$1), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${i / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
        return tt$1.info("Triangle intersect", t, p, b), N.polygon(t, p, b);
    }, e;
}
m$1(Fs, "triangle");
async function _s(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = c / 8, n = c + i, { cssStyles: p } = t, f = 70 - s, g = f > 0 ? f / 2 : 0, d = /*#__PURE__*/ v.svg(e), x = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
    let u$1 = [
        {
            x: -s / 2 - g,
            y: n / 2
        },
        .../*#__PURE__*/ lt(-s / 2 - g, n / 2, s / 2 + g, n / 2, i, .8),
        {
            x: s / 2 + g,
            y: -n / 2
        },
        {
            x: -s / 2 - g,
            y: -n / 2
        }
    ], b = /*#__PURE__*/ W(u$1), S = /*#__PURE__*/ d.path(b, x), $ = /*#__PURE__*/ e.insert(()=>S, ":first-child");
    return $.attr("class", "basic label-container"), p && t.look !== "handDrawn" && $.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
        return N.polygon(t, u$1, w);
    }, e;
}
m$1(_s, "waveEdgedRectangle");
async function zs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a } = await C(l, t, /*#__PURE__*/ P(t)), h = 100, s = 50, c = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), i = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), n = c / i, p = c, m$1 = i;
    p > m$1 * n ? m$1 = p / n : p = m$1 * n, p = /*#__PURE__*/ Math.max(p, h), m$1 = /*#__PURE__*/ Math.max(m$1, s);
    let f = /*#__PURE__*/ Math.min(m$1 * .2, m$1 / 4), g = m$1 + f * 2, { cssStyles: d } = t, x = /*#__PURE__*/ v.svg(e), u$1 = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (u$1.roughness = 0, u$1.fillStyle = "solid");
    let b = [
        {
            x: -p / 2,
            y: g / 2
        },
        .../*#__PURE__*/ lt(-p / 2, g / 2, p / 2, g / 2, f, 1),
        {
            x: p / 2,
            y: -g / 2
        },
        .../*#__PURE__*/ lt(p / 2, -g / 2, -p / 2, -g / 2, f, -1)
    ], S = /*#__PURE__*/ W(b), $ = /*#__PURE__*/ x.path(S, u$1), w = /*#__PURE__*/ e.insert(()=>$, ":first-child");
    return w.attr("class", "basic label-container"), d && t.look !== "handDrawn" && w.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), M(t, w), t.intersect = function(B) {
        return N.polygon(t, b, B);
    }, e;
}
m$1(zs, "waveRectangle");
async function qs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let { shapeSvg: e, bbox: a, label: h } = await C(l, t, /*#__PURE__*/ P(t)), s = /*#__PURE__*/ Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = /*#__PURE__*/ Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), i = 5, n = -s / 2, p = -c / 2, { cssStyles: m$1 } = t, f = /*#__PURE__*/ v.svg(e), g = /*#__PURE__*/ m(t, {}), d = [
        {
            x: n - i,
            y: p - i
        },
        {
            x: n - i,
            y: p + c
        },
        {
            x: n + s,
            y: p + c
        },
        {
            x: n + s,
            y: p - i
        }
    ], x = `M${n - i},${p - i} L${n + s},${p - i} L${n + s},${p + c} L${n - i},${p + c} L${n - i},${p - i}
                M${n - i},${p} L${n + s},${p}
                M${n},${p - i} L${n},${p + c}`;
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let u$1 = /*#__PURE__*/ f.path(x, g), b = /*#__PURE__*/ e.insert(()=>u$1, ":first-child");
    return b.attr("transform", `translate(${i / 2}, ${i / 2})`), b.attr("class", "basic label-container"), m$1 && t.look !== "handDrawn" && b.selectAll("path").attr("style", m$1), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + i / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i / 2 - (a.y - (a.top ?? 0))})`), M(t, b), t.intersect = function(S) {
        return N.polygon(t, d, S);
    }, e;
}
m$1(qs, "windowPane");
async function de(l, t) {
    let o = t;
    if (o.alias && (t.label = o.alias), t.look === "handDrawn") {
        let { themeVariables: X } = Or(), { background: J } = X, st = {
            ...t,
            id: t.id + "-background",
            look: "default",
            cssStyles: [
                "stroke: none",
                `fill: ${J}`
            ]
        };
        await de(l, st);
    }
    let r = /*#__PURE__*/ Or();
    t.useHtmlLabels = r.htmlLabels;
    let e = r.er?.diagramPadding ?? 10, a = r.er?.entityPadding ?? 6, { cssStyles: h } = t, { labelStyles: s, nodeStyles: c } = u(t);
    if (o.attributes.length === 0 && t.label) {
        let X = {
            rx: 0,
            ry: 0,
            labelPaddingX: e,
            labelPaddingY: e * 1.5
        };
        M$1(t.label, r) + X.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
        let J = await pt(l, t, X);
        if (!Rf(r.htmlLabels)) {
            let st = /*#__PURE__*/ J.select("text"), at = st.node()?.getBBox();
            st.attr("transform", `translate(${-at.width / 2}, 0)`);
        }
        return J;
    }
    r.htmlLabels || (e *= 1.25, a *= 1.25);
    let i = /*#__PURE__*/ P(t);
    i || (i = "node default");
    let n = /*#__PURE__*/ l.insert("g").attr("class", i).attr("id", t.domId || t.id), p = await Ct(n, t.label ?? "", r, 0, 0, [
        "name"
    ], s);
    p.height += a;
    let m$1 = 0, f = [], g = [], d = 0, x = 0, u$1 = 0, b = 0, S = true, $ = true;
    for (let X of o.attributes){
        let J = await Ct(n, X.type, r, 0, m$1, [
            "attribute-type"
        ], s);
        d = /*#__PURE__*/ Math.max(d, J.width + e);
        let st = await Ct(n, X.name, r, 0, m$1, [
            "attribute-name"
        ], s);
        x = /*#__PURE__*/ Math.max(x, st.width + e);
        let at = await Ct(n, /*#__PURE__*/ X.keys.join(), r, 0, m$1, [
            "attribute-keys"
        ], s);
        u$1 = /*#__PURE__*/ Math.max(u$1, at.width + e);
        let wt = await Ct(n, X.comment, r, 0, m$1, [
            "attribute-comment"
        ], s);
        b = /*#__PURE__*/ Math.max(b, wt.width + e);
        let ft = Math.max(J.height, st.height, at.height, wt.height) + a;
        g.push({
            yOffset: m$1,
            rowHeight: ft
        }), m$1 += ft;
    }
    let w = 4;
    u$1 <= e && (S = false, u$1 = 0, w--), b <= e && ($ = false, b = 0, w--);
    let B = /*#__PURE__*/ n.node().getBBox();
    if (p.width + e * 2 - (d + x + u$1 + b) > 0) {
        let X = p.width + e * 2 - (d + x + u$1 + b);
        d += X / w, x += X / w, u$1 > 0 && (u$1 += X / w), b > 0 && (b += X / w);
    }
    let T = d + x + u$1 + b, R = /*#__PURE__*/ v.svg(n), E = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
    let L = 0;
    g.length > 0 && (L = /*#__PURE__*/ g.reduce((X, J)=>X + (J?.rowHeight ?? 0), 0));
    let O = /*#__PURE__*/ Math.max(B.width + e * 2, t?.width || 0, T), H = /*#__PURE__*/ Math.max((L ?? 0) + p.height, t?.height || 0), G = -O / 2, A = -H / 2;
    n.selectAll("g:not(:first-child)").each((X, J, st)=>{
        let at = /*#__PURE__*/ kh(st[J]), wt = /*#__PURE__*/ at.attr("transform"), ft = 0, ye = 0;
        if (wt) {
            let Yt = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(wt);
            Yt && (ft = /*#__PURE__*/ parseFloat(Yt[1]), ye = /*#__PURE__*/ parseFloat(Yt[2]), at.attr("class").includes("attribute-name") ? ft += d : at.attr("class").includes("attribute-keys") ? ft += d + x : at.attr("class").includes("attribute-comment") && (ft += d + x + u$1));
        }
        at.attr("transform", `translate(${G + e / 2 + ft}, ${ye + A + p.height + a / 2})`);
    }), n.select(".name").attr("transform", "translate(" + -p.width / 2 + ", " + (A + a / 2) + ")");
    let V = /*#__PURE__*/ R.rectangle(G, A, O, H, E), j = /*#__PURE__*/ n.insert(()=>V, ":first-child").attr("style", /*#__PURE__*/ h.join("")), { themeVariables: I } = Or(), { rowEven: F, rowOdd: Q, nodeBorder: it } = I;
    f.push(0);
    for (let [X, J] of g.entries()){
        let at = (X + 1) % 2 === 0 && J.yOffset !== 0, wt = /*#__PURE__*/ R.rectangle(G, p.height + A + J?.yOffset, O, J?.rowHeight, {
            ...E,
            fill: at ? F : Q,
            stroke: it
        });
        n.insert(()=>wt, "g.label").attr("style", /*#__PURE__*/ h.join("")).attr("class", `row-rect-${at ? "even" : "odd"}`);
    }
    let ct = /*#__PURE__*/ R.line(G, p.height + A, O + G, p.height + A, E);
    n.insert(()=>ct).attr("class", "divider"), ct = /*#__PURE__*/ R.line(d + G, p.height + A, d + G, H + A, E), n.insert(()=>ct).attr("class", "divider"), S && (ct = /*#__PURE__*/ R.line(d + x + G, p.height + A, d + x + G, H + A, E), n.insert(()=>ct).attr("class", "divider")), $ && (ct = /*#__PURE__*/ R.line(d + x + u$1 + G, p.height + A, d + x + u$1 + G, H + A, E), n.insert(()=>ct).attr("class", "divider"));
    for (let X of f)ct = /*#__PURE__*/ R.line(G, p.height + A + X, O + G, p.height + A + X, E), n.insert(()=>ct).attr("class", "divider");
    if (M(t, j), c && t.look !== "handDrawn") {
        let J = c.split(";")?.filter((st)=>st.includes("stroke"))?.map((st)=>`${st}`).join("; ");
        n.selectAll("path").attr("style", J ?? ""), n.selectAll(".row-rect-even path").attr("style", c);
    }
    return t.intersect = function(X) {
        return N.rect(t, X);
    }, n;
}
m$1(de, "erBox");
async function Ct(l, t, o, r = 0, e = 0, a = [], h = "") {
    let s = /*#__PURE__*/ l.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
    t !== GC(t) && (t = /*#__PURE__*/ GC(t), t = /*#__PURE__*/ t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
    let c = /*#__PURE__*/ s.node().appendChild(await rs$1(s, t, {
        width: M$1(t, o) + 100,
        style: h,
        useHtmlLabels: o.htmlLabels
    }, o));
    if (t.includes("&lt;") || t.includes("&gt;")) {
        let n = c.children[0];
        for(n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); n.childNodes[0];)n = n.childNodes[0], n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }
    let i = /*#__PURE__*/ c.getBBox();
    if (Rf(o.htmlLabels)) {
        let n = c.children[0];
        n.style.textAlign = "start";
        let p = /*#__PURE__*/ kh(c);
        i = /*#__PURE__*/ n.getBoundingClientRect(), p.attr("width", i.width), p.attr("height", i.height);
    }
    return i;
}
m$1(Ct, "addText");
async function Xs(l, t, o, r, e = o.class.padding ?? 12) {
    let a = r ? 0 : 3, h = /*#__PURE__*/ l.insert("g").attr("class", /*#__PURE__*/ P(t)).attr("id", t.domId || t.id), s = null, c = null, i = null, n = null, p = 0, m = 0, f = 0;
    if (s = /*#__PURE__*/ h.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
        let b = t.annotations[0];
        await qt(s, {
            text: `\xAB${b}\xBB`
        }, 0), p = s.node().getBBox().height;
    }
    c = /*#__PURE__*/ h.insert("g").attr("class", "label-group text"), await qt(c, t, 0, [
        "font-weight: bolder"
    ]);
    let g = /*#__PURE__*/ c.node().getBBox();
    m = g.height, i = /*#__PURE__*/ h.insert("g").attr("class", "members-group text");
    let d = 0;
    for (let b of t.members){
        let S = await qt(i, b, d, [
            /*#__PURE__*/ b.parseClassifier()
        ]);
        d += S + a;
    }
    f = i.node().getBBox().height, f <= 0 && (f = e / 2), n = /*#__PURE__*/ h.insert("g").attr("class", "methods-group text");
    let x = 0;
    for (let b of t.methods){
        let S = await qt(n, b, x, [
            /*#__PURE__*/ b.parseClassifier()
        ]);
        x += S + a;
    }
    let u = /*#__PURE__*/ h.node().getBBox();
    if (s !== null) {
        let b = /*#__PURE__*/ s.node().getBBox();
        s.attr("transform", `translate(${-b.width / 2})`);
    }
    return c.attr("transform", `translate(${-g.width / 2}, ${p})`), u = /*#__PURE__*/ h.node().getBBox(), i.attr("transform", `translate(0, ${p + m + e * 2})`), u = /*#__PURE__*/ h.node().getBBox(), n.attr("transform", `translate(0, ${p + m + (f ? f + e * 4 : e * 2)})`), u = /*#__PURE__*/ h.node().getBBox(), {
        shapeSvg: h,
        bbox: u
    };
}
m$1(Xs, "textHelper");
async function qt(l, t, o, r = []) {
    let e = /*#__PURE__*/ l.insert("g").attr("class", "label").attr("style", /*#__PURE__*/ r.join("; ")), a = /*#__PURE__*/ Or(), h = "useHtmlLabels" in t ? t.useHtmlLabels : Rf(a.htmlLabels) ?? true, s = "";
    "text" in t ? s = t.text : s = t.label, !h && s.startsWith("\\") && (s = /*#__PURE__*/ s.substring(1)), ih(s) && (h = true);
    let c = await rs$1(e, /*#__PURE__*/ ed(/*#__PURE__*/ Xe$1(s)), {
        width: M$1(s, a) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: h
    }, a), i, n = 1;
    if (h) {
        let p = c.children[0], m = /*#__PURE__*/ kh(c);
        n = p.innerHTML.split("<br>").length, p.innerHTML.includes("</math>") && (n += p.innerHTML.split("<mrow>").length - 1);
        let f = /*#__PURE__*/ p.getElementsByTagName("img");
        if (f) {
            let g = s.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(/*#__PURE__*/ [
                ...f
            ].map((d)=>new Promise((x)=>{
                    function u() {
                        if (d.style.display = "flex", d.style.flexDirection = "column", g) {
                            let b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, $ = parseInt(b, 10) * 5 + "px";
                            d.style.minWidth = $, d.style.maxWidth = $;
                        } else d.style.width = "100%";
                        x(d);
                    }
                    m$1(u, "setupImage"), setTimeout(()=>{
                        d.complete && u();
                    }), d.addEventListener("error", u), d.addEventListener("load", u);
                })));
        }
        i = /*#__PURE__*/ p.getBoundingClientRect(), m.attr("width", i.width), m.attr("height", i.height);
    } else {
        r.includes("font-weight: bolder") && kh(c).selectAll("tspan").attr("font-weight", ""), n = c.children.length;
        let p = c.children[0];
        (c.textContent === "" || c.textContent.includes("&gt")) && (p.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (p.textContent = p.textContent[0] + " " + p.textContent.substring(1))), p.textContent === "undefined" && (p.textContent = ""), i = /*#__PURE__*/ c.getBBox();
    }
    return e.attr("transform", "translate(0," + (-i.height / (2 * n) + o) + ")"), i.height;
}
m$1(qt, "addText");
async function Ys(l, t) {
    let o = /*#__PURE__*/ hh(), r = o.class.padding ?? 12, e = r, a = t.useHtmlLabels ?? Rf(o.htmlLabels) ?? true, h = t;
    h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
    let { shapeSvg: s, bbox: c } = await Xs(l, t, o, a, e), { labelStyles: i, nodeStyles: n } = u(t);
    t.labelStyle = i, t.cssStyles = h.styles || "";
    let p = h.styles?.join(";") || n || "";
    t.cssStyles || (t.cssStyles = /*#__PURE__*/ p.replaceAll("!important", "").split(";"));
    let m$1 = h.members.length === 0 && h.methods.length === 0 && !o.class?.hideEmptyMembersBox, f = /*#__PURE__*/ v.svg(s), g = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
    let d = c.width, x = c.height;
    h.members.length === 0 && h.methods.length === 0 ? x += e : h.members.length > 0 && h.methods.length === 0 && (x += e * 2);
    let u$1 = -d / 2, b = -x / 2, S = /*#__PURE__*/ f.rectangle(u$1 - r, b - r - (m$1 ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), d + 2 * r, x + 2 * r + (m$1 ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), g), $ = /*#__PURE__*/ s.insert(()=>S, ":first-child");
    $.attr("class", "basic label-container");
    let w = /*#__PURE__*/ $.node().getBBox();
    s.selectAll(".text").each((E, L, O)=>{
        let H = /*#__PURE__*/ kh(O[L]), G = /*#__PURE__*/ H.attr("transform"), A = 0;
        if (G) {
            let F = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
            F && (A = /*#__PURE__*/ parseFloat(F[2]));
        }
        let V = A + b + r - (m$1 ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
        a || (V -= 4);
        let j = u$1;
        (H.attr("class").includes("label-group") || H.attr("class").includes("annotation-group")) && (j = -H.node()?.getBBox().width / 2 || 0, s.selectAll("text").each(function(I, F, Q) {
            window.getComputedStyle(Q[F]).textAnchor === "middle" && (j = 0);
        })), H.attr("transform", `translate(${j}, ${V})`);
    });
    let B = s.select(".annotation-group").node().getBBox().height - (m$1 ? r / 2 : 0) || 0, T = s.select(".label-group").node().getBBox().height - (m$1 ? r / 2 : 0) || 0, R = s.select(".members-group").node().getBBox().height - (m$1 ? r / 2 : 0) || 0;
    if (h.members.length > 0 || h.methods.length > 0 || m$1) {
        let E = /*#__PURE__*/ f.line(w.x, B + T + b + r, w.x + w.width, B + T + b + r, g);
        s.insert(()=>E).attr("class", "divider").attr("style", p);
    }
    if (m$1 || h.members.length > 0 || h.methods.length > 0) {
        let E = /*#__PURE__*/ f.line(w.x, B + T + R + b + e * 2 + r, w.x + w.width, B + T + R + b + r + e * 2, g);
        s.insert(()=>E).attr("class", "divider").attr("style", p);
    }
    if (h.look !== "handDrawn" && s.selectAll("path").attr("style", p), $.select(":nth-child(2)").attr("style", p), s.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", p), !a) {
        let E = /*#__PURE__*/ RegExp(/color\s*:\s*([^;]*)/), L = /*#__PURE__*/ E.exec(p);
        if (L) {
            let O = /*#__PURE__*/ L[0].replace("color", "fill");
            s.selectAll("tspan").attr("style", O);
        } else if (i) {
            let O = /*#__PURE__*/ E.exec(i);
            if (O) {
                let H = /*#__PURE__*/ O[0].replace("color", "fill");
                s.selectAll("tspan").attr("style", H);
            }
        }
    }
    return M(t, $), t.intersect = function(E) {
        return N.rect(t, E);
    }, s;
}
m$1(Ys, "classBox");
async function Zs(l, t) {
    let { labelStyles: o, nodeStyles: r } = u(t);
    t.labelStyle = o;
    let e = t, a = t, h = 20, s = 20, c = "verifyMethod" in t, i = /*#__PURE__*/ P(t), n = /*#__PURE__*/ l.insert("g").attr("class", i).attr("id", t.domId ?? t.id), p;
    c ? p = await mt(n, `&lt;&lt;${e.type}&gt;&gt;`, 0, t.labelStyle) : p = await mt(n, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
    let m$1 = p, f = await mt(n, e.name, m$1, t.labelStyle + "; font-weight: bold;");
    if (m$1 += f + s, c) {
        let B = await mt(n, `${e.requirementId ? `id: ${e.requirementId}` : ""}`, m$1, t.labelStyle);
        m$1 += B;
        let T = await mt(n, `${e.text ? `Text: ${e.text}` : ""}`, m$1, t.labelStyle);
        m$1 += T;
        let R = await mt(n, `${e.risk ? `Risk: ${e.risk}` : ""}`, m$1, t.labelStyle);
        m$1 += R, await mt(n, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, m$1, t.labelStyle);
    } else {
        let B = await mt(n, `${a.type ? `Type: ${a.type}` : ""}`, m$1, t.labelStyle);
        m$1 += B, await mt(n, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, m$1, t.labelStyle);
    }
    let g = (n.node()?.getBBox().width ?? 200) + h, d = (n.node()?.getBBox().height ?? 200) + h, x = -g / 2, u$1 = -d / 2, b = /*#__PURE__*/ v.svg(n), S = /*#__PURE__*/ m(t, {});
    t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
    let $ = /*#__PURE__*/ b.rectangle(x, u$1, g, d, S), w = /*#__PURE__*/ n.insert(()=>$, ":first-child");
    if (w.attr("class", "basic label-container").attr("style", r), n.selectAll(".label").each((B, T, R)=>{
        let E = /*#__PURE__*/ kh(R[T]), L = /*#__PURE__*/ E.attr("transform"), O = 0, H = 0;
        if (L) {
            let j = /*#__PURE__*/ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(L);
            j && (O = /*#__PURE__*/ parseFloat(j[1]), H = /*#__PURE__*/ parseFloat(j[2]));
        }
        let G = H - d / 2, A = x + h / 2;
        (T === 0 || T === 1) && (A = O), E.attr("transform", `translate(${A}, ${G + h})`);
    }), m$1 > p + f + s) {
        let B = /*#__PURE__*/ b.line(x, u$1 + p + f + s, x + g, u$1 + p + f + s, S);
        n.insert(()=>B).attr("style", r);
    }
    return M(t, w), t.intersect = function(B) {
        return N.rect(t, B);
    }, n;
}
m$1(Zs, "requirementBox");
async function mt(l, t, o, r = "") {
    if (t === "") return 0;
    let e = /*#__PURE__*/ l.insert("g").attr("class", "label").attr("style", r), a = /*#__PURE__*/ hh(), h = a.htmlLabels ?? true, s = await rs$1(e, /*#__PURE__*/ ed(/*#__PURE__*/ Xe$1(t)), {
        width: M$1(t, a) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: h,
        style: r
    }, a), c;
    if (h) {
        let i = s.children[0], n = /*#__PURE__*/ kh(s);
        c = /*#__PURE__*/ i.getBoundingClientRect(), n.attr("width", c.width), n.attr("height", c.height);
    } else {
        let i = s.children[0];
        for (let n of i.children)n.textContent = /*#__PURE__*/ n.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n.setAttribute("style", r);
        c = /*#__PURE__*/ s.getBBox(), c.height += 6;
    }
    return e.attr("transform", `translate(${-c.width / 2},${-c.height / 2 + o})`), c.height;
}
m$1(mt, "addText");
var Rr = /*#__PURE__*/ m$1((l)=>{
    switch(l){
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
async function Us(l, t, { config: o }) {
    let { labelStyles: r, nodeStyles: e } = u(t);
    t.labelStyle = r || "";
    let a = 10, h = t.width;
    t.width = (t.width ?? 200) - 10;
    let { shapeSvg: s, bbox: c, label: i } = await C(l, t, /*#__PURE__*/ P(t)), n = t.padding || 10, p = "", m$1;
    "ticket" in t && t.ticket && o?.kanban?.ticketBaseUrl && (p = o?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), m$1 = /*#__PURE__*/ s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
    let f = {
        useHtmlLabels: t.useHtmlLabels,
        labelStyle: t.labelStyle || "",
        width: t.width,
        img: t.img,
        padding: t.padding || 8,
        centerLabel: false
    }, g, d;
    m$1 ? { label: g, bbox: d } = await Et(m$1, "ticket" in t && t.ticket || "", f) : { label: g, bbox: d } = await Et(s, "ticket" in t && t.ticket || "", f);
    let { label: x, bbox: u$1 } = await Et(s, "assigned" in t && t.assigned || "", f);
    t.width = h;
    let b = 10, S = t?.width || 0, $ = Math.max(d.height, u$1.height) / 2, w = Math.max(c.height + b * 2, t?.height || 0) + $, B = -S / 2, T = -w / 2;
    i.attr("transform", "translate(" + (n - S / 2) + ", " + (-$ - c.height / 2) + ")"), g.attr("transform", "translate(" + (n - S / 2) + ", " + (-$ + c.height / 2) + ")"), x.attr("transform", "translate(" + (n + S / 2 - u$1.width - 2 * a) + ", " + (-$ + c.height / 2) + ")");
    let R, { rx: E, ry: L } = t, { cssStyles: O } = t;
    if (t.look === "handDrawn") {
        let H = /*#__PURE__*/ v.svg(s), G = /*#__PURE__*/ m(t, {}), A = E || L ? H.path(/*#__PURE__*/ K(B, T, S, w, E || 0), G) : H.rectangle(B, T, S, w, G);
        R = /*#__PURE__*/ s.insert(()=>A, ":first-child"), R.attr("class", "basic label-container").attr("style", O || null);
    } else {
        R = /*#__PURE__*/ s.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", E ?? 5).attr("ry", L ?? 5).attr("x", B).attr("y", T).attr("width", S).attr("height", w);
        let H = "priority" in t && t.priority;
        if (H) {
            let G = /*#__PURE__*/ s.append("line"), A = B + 2, V = T + Math.floor((E ?? 0) / 2), j = T + w - Math.floor((E ?? 0) / 2);
            G.attr("x1", A).attr("y1", V).attr("x2", A).attr("y2", j).attr("stroke-width", "4").attr("stroke", /*#__PURE__*/ Rr(H));
        }
    }
    return M(t, R), t.height = w, t.intersect = function(H) {
        return N.rect(t, H);
    }, s;
}
m$1(Us, "kanbanItem");
var Gr = [
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
        handler: Cs
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
        handler: Ps
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
        handler: Rs
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
        handler: js
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
        handler: es
    },
    {
        semanticName: "Start",
        name: "Circle",
        shortName: "circle",
        description: "Starting point",
        aliases: [
            "circ"
        ],
        handler: Ze
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
        handler: ks
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
        handler: ls
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
        handler: xs
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
        handler: ys
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
        handler: Ws
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
        handler: ds
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
        handler: rs
    },
    {
        semanticName: "Text Block",
        name: "Text Block",
        shortName: "text",
        description: "Text block",
        handler: Hs
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
        handler: Xe
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
        handler: Bs
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
        handler: Es
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
        handler: is
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
        handler: cs
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
        handler: Qe
    },
    {
        semanticName: "Comment Right",
        name: "Curly Brace",
        shortName: "brace-r",
        description: "Adds a comment",
        handler: Je
    },
    {
        semanticName: "Comment with braces on both sides",
        name: "Curly Braces",
        shortName: "braces",
        description: "Adds a comment",
        handler: Ke
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
        handler: bs
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
        handler: _s
    },
    {
        semanticName: "Delay",
        name: "Half-Rounded Rectangle",
        shortName: "delay",
        description: "Represents a delay",
        aliases: [
            "half-rounded-rectangle"
        ],
        handler: ns
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
        handler: Vs
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
        handler: Ss
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
        handler: ts
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
        handler: ss
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
        handler: Fs
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
        handler: qs
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
        handler: as
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
        handler: Is
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
        handler: os
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
        handler: vs
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
        handler: Ns
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
        handler: qe
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
        handler: Ue
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
        handler: Ls
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
        handler: Os
    },
    {
        semanticName: "Paper Tape",
        name: "Flag",
        shortName: "flag",
        description: "Paper tape",
        aliases: [
            "paper-tape"
        ],
        handler: zs
    },
    {
        semanticName: "Odd",
        name: "Odd",
        shortName: "odd",
        description: "Odd shape",
        internalAliases: [
            "rect_left_inv_arrow"
        ],
        handler: Ms
    },
    {
        semanticName: "Lined Document",
        name: "Lined Document",
        shortName: "lin-doc",
        description: "Lined document",
        aliases: [
            "lined-document"
        ],
        handler: ws
    }
], Er = /*#__PURE__*/ m$1(()=>{
    let t = [
        .../*#__PURE__*/ Object.entries({
            state: Gs,
            choice: Ye,
            note: Ds,
            rectWithTitle: $s,
            labelRect: us,
            iconSquare: fs,
            iconCircle: ps,
            icon: hs,
            iconRounded: ms,
            imageSquare: gs,
            anchor: _e,
            kanbanItem: Us,
            classBox: Ys,
            erBox: de,
            requirementBox: Zs
        }),
        .../*#__PURE__*/ Gr.flatMap((o)=>[
                o.shortName,
                ..."aliases" in o ? o.aliases : [],
                ..."internalAliases" in o ? o.internalAliases : []
            ].map((e)=>[
                    e,
                    o.handler
                ]))
    ];
    return Object.fromEntries(t);
}, "generateShapeMap"), ue = /*#__PURE__*/ Er();
function Zf(l) {
    return l in ue;
}
m$1(Zf, "isValidShape");
var Xt = new Map;
async function tg(l, t, o) {
    let r, e;
    t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
    let a = t.shape ? ue[t.shape] : void 0;
    if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
    if (t.link) {
        let h;
        o.config.securityLevel === "sandbox" ? h = "_top" : t.linkTarget && (h = t.linkTarget || "_blank"), r = /*#__PURE__*/ l.insert("svg:a").attr("xlink:href", t.link).attr("target", h ?? null), e = await a(r, t, o);
    } else e = await a(l, t, o), r = e;
    return t.tooltip && e.attr("title", t.tooltip), Xt.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(tg, "insertNode");
var eg = /*#__PURE__*/ m$1((l, t)=>{
    Xt.set(t.id, l);
}, "setNodeElem"), sg = /*#__PURE__*/ m$1(()=>{
    Xt.clear();
}, "clear"), rg = /*#__PURE__*/ m$1((l)=>{
    let t = /*#__PURE__*/ Xt.get(l.id);
    tt$1.trace("Transforming node", l.diff, l, "translate(" + (l.x - l.width / 2 - 5) + ", " + l.width / 2 + ")");
    let o = 8, r = l.diff || 0;
    return l.clusterNode ? t.attr("transform", "translate(" + (l.x + r - l.width / 2) + ", " + (l.y - l.height / 2 - o) + ")") : t.attr("transform", "translate(" + l.x + ", " + l.y + ")"), r;
}, "positionNode");
export { C, M, Tt as T, Zf as Z, da as d, eg as e, ga as g, rg as r, sg as s, tg as t, v };
