import { $ as $t$1, n as nr, v } from './vendor-min-mermaid~chunk-USR3SDWQ.vyM1OSdF.chunk.js';
import { d } from './vendor-min-mermaid~chunk-S67DUUA5.D3-Ci5Su.chunk.js';
import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.Cd9M_jtg.chunk.js';
import { Q as Qt } from './vendor-min-mermaid~chunk-HESFG3RP.EvsgN7RW.chunk.js';
import { I as Ie } from './vendor-min-mermaid~chunk-YM3XIQPS.CNQBySGW.chunk.js';
import { t as tt, H as Hl, m as mf, i as ih, c as vc, d as Bc, f as go, u as ug, h as fg, G as Gc, Y as Yc, j as cg, k as hg, s as sg, l as eg, n as tg, o as ig } from './vendor-min-mermaid~chunk-ZKYS2E5M.Dvid1YGB.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var st = /*#__PURE__*/ m$1((r, t, a, s, l, i)=>{
    t.arrowTypeStart && nt(r, "start", t.arrowTypeStart, a, s, l, i), t.arrowTypeEnd && nt(r, "end", t.arrowTypeEnd, a, s, l, i);
}, "addEdgeMarkers"), pt = {
    arrow_cross: {
        type: "cross",
        fill: false
    },
    arrow_point: {
        type: "point",
        fill: true
    },
    arrow_barb: {
        type: "barb",
        fill: true
    },
    arrow_circle: {
        type: "circle",
        fill: false
    },
    aggregation: {
        type: "aggregation",
        fill: false
    },
    extension: {
        type: "extension",
        fill: false
    },
    composition: {
        type: "composition",
        fill: true
    },
    dependency: {
        type: "dependency",
        fill: true
    },
    lollipop: {
        type: "lollipop",
        fill: false
    },
    only_one: {
        type: "onlyOne",
        fill: false
    },
    zero_or_one: {
        type: "zeroOrOne",
        fill: false
    },
    one_or_more: {
        type: "oneOrMore",
        fill: false
    },
    zero_or_more: {
        type: "zeroOrMore",
        fill: false
    },
    requirement_arrow: {
        type: "requirement_arrow",
        fill: false
    },
    requirement_contains: {
        type: "requirement_contains",
        fill: false
    }
}, nt = /*#__PURE__*/ m$1((r, t, a, s, l, i, n)=>{
    let o = pt[a];
    if (!o) {
        tt.warn(`Unknown arrow type: ${a}`);
        return;
    }
    let e = o.type, f = `${l}_${i}-${e}${t === "start" ? "Start" : "End"}`;
    if (n && n.trim() !== "") {
        let c = /*#__PURE__*/ n.replace(/[^\dA-Za-z]/g, "_"), m = `${f}_${c}`;
        if (!document.getElementById(m)) {
            let y = /*#__PURE__*/ document.getElementById(f);
            if (y) {
                let k = /*#__PURE__*/ y.cloneNode(true);
                k.id = m, k.querySelectorAll("path, circle, line").forEach((O)=>{
                    O.setAttribute("stroke", n), o.fill && O.setAttribute("fill", n);
                }), y.parentNode?.appendChild(k);
            }
        }
        r.attr(`marker-${t}`, `url(${s}#${m})`);
    } else r.attr(`marker-${t}`, `url(${s}#${f})`);
}, "addEdgeMarker");
var W = new Map, x = new Map, Gt = /*#__PURE__*/ m$1(()=>{
    W.clear(), x.clear();
}, "clear"), E = /*#__PURE__*/ m$1((r)=>r ? r.reduce((a, s)=>a + ";" + s, "") : "", "getLabelStyles"), Vt = /*#__PURE__*/ m$1(async (r, t)=>{
    let a = /*#__PURE__*/ mf(Hl().flowchart.htmlLabels), s = await Qt(r, t.label, {
        style: /*#__PURE__*/ E(t.labelStyle),
        useHtmlLabels: a,
        addSvgBackground: true,
        isNode: false
    });
    tt.info("abc82", t, t.labelType);
    let l = /*#__PURE__*/ r.insert("g").attr("class", "edgeLabel"), i = /*#__PURE__*/ l.insert("g").attr("class", "label");
    i.node().appendChild(s);
    let n = /*#__PURE__*/ s.getBBox();
    if (a) {
        let e = s.children[0], p = /*#__PURE__*/ ih(s);
        n = /*#__PURE__*/ e.getBoundingClientRect(), p.attr("width", n.width), p.attr("height", n.height);
    }
    i.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), W.set(t.id, l), t.width = n.width, t.height = n.height;
    let o;
    if (t.startLabelLeft) {
        let e = await $t$1(t.startLabelLeft, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startLeft = p, T(o, t.startLabelLeft);
    }
    if (t.startLabelRight) {
        let e = await $t$1(t.startLabelRight, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ p.node().appendChild(e), f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startRight = p, T(o, t.startLabelRight);
    }
    if (t.endLabelLeft) {
        let e = await $t$1(t.endLabelLeft, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endLeft = p, T(o, t.endLabelLeft);
    }
    if (t.endLabelRight) {
        let e = await $t$1(t.endLabelRight, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endRight = p, T(o, t.endLabelRight);
    }
    return s;
}, "insertEdgeLabel");
function T(r, t) {
    Hl().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
m$1(T, "setTerminalWidth");
var Ft = /*#__PURE__*/ m$1((r, t)=>{
    tt.debug("Moving label abc88 ", r.id, r.label, /*#__PURE__*/ W.get(r.id), t);
    let a = t.updatedPath ? t.updatedPath : t.originalPath, s = /*#__PURE__*/ Hl(), { subGraphTitleTotalMargin: l } = n(s);
    if (r.label) {
        let i = /*#__PURE__*/ W.get(r.id), n = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcLabelPosition(a);
            tt.debug("Moving label " + r.label + " from (", n, ",", o, ") to (", e.x, ",", e.y, ") abc88"), t.updatedPath && (n = e.x, o = e.y);
        }
        i.attr("transform", `translate(${n}, ${o + l / 2})`);
    }
    if (r.startLabelLeft) {
        let i = x.get(r.id).startLeft, n = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
            n = e.x, o = e.y;
        }
        i.attr("transform", `translate(${n}, ${o})`);
    }
    if (r.startLabelRight) {
        let i = x.get(r.id).startRight, n = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
            n = e.x, o = e.y;
        }
        i.attr("transform", `translate(${n}, ${o})`);
    }
    if (r.endLabelLeft) {
        let i = x.get(r.id).endLeft, n = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
            n = e.x, o = e.y;
        }
        i.attr("transform", `translate(${n}, ${o})`);
    }
    if (r.endLabelRight) {
        let i = x.get(r.id).endRight, n = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
            n = e.x, o = e.y;
        }
        i.attr("transform", `translate(${n}, ${o})`);
    }
}, "positionEdgeLabel"), dt = /*#__PURE__*/ m$1((r, t)=>{
    let a = r.x, s = r.y, l = /*#__PURE__*/ Math.abs(t.x - a), i = /*#__PURE__*/ Math.abs(t.y - s), n = r.width / 2, o = r.height / 2;
    return l >= n || i >= o;
}, "outsideNode"), ft = /*#__PURE__*/ m$1((r, t, a)=>{
    tt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
    let s = r.x, l = r.y, i = /*#__PURE__*/ Math.abs(s - a.x), n = r.width / 2, o = a.x < t.x ? n - i : n + i, e = r.height / 2, p = /*#__PURE__*/ Math.abs(t.y - a.y), f = /*#__PURE__*/ Math.abs(t.x - a.x);
    if (Math.abs(l - t.y) * n > Math.abs(s - t.x) * e) {
        let c = a.y < t.y ? t.y - e - l : l - e - t.y;
        o = f * c / p;
        let m = {
            x: a.x < t.x ? a.x + o : a.x - f + o,
            y: a.y < t.y ? a.y + p - c : a.y - p + c
        };
        return o === 0 && (m.x = t.x, m.y = t.y), f === 0 && (m.x = t.x), p === 0 && (m.y = t.y), tt.debug(`abc89 top/bottom calc, Q ${p}, q ${c}, R ${f}, r ${o}`, m), m;
    } else {
        a.x < t.x ? o = t.x - n - s : o = s - n - t.x;
        let c = p * o / f, m = a.x < t.x ? a.x + f - o : a.x - f + o, y = a.y < t.y ? a.y + c : a.y - c;
        return tt.debug(`sides calc abc89, Q ${p}, q ${c}, R ${f}, r ${o}`, {
            _x: m,
            _y: y
        }), o === 0 && (m = t.x, y = t.y), f === 0 && (m = t.x), p === 0 && (y = t.y), {
            x: m,
            y
        };
    }
}, "intersection"), ot = /*#__PURE__*/ m$1((r, t)=>{
    tt.warn("abc88 cutPathAtIntersect", r, t);
    let a = [], s = r[0], l = false;
    return r.forEach((i)=>{
        if (tt.info("abc88 checking point", i, t), !dt(t, i) && !l) {
            let n = /*#__PURE__*/ ft(t, s, i);
            tt.debug("abc88 inside", i, s, n), tt.debug("abc88 intersection", n, t);
            let o = false;
            a.forEach((e)=>{
                o = o || e.x === n.x && e.y === n.y;
            }), a.some((e)=>e.x === n.x && e.y === n.y) ? tt.warn("abc88 no intersect", n, a) : a.push(n), l = true;
        } else tt.warn("abc88 outside", i, s), s = i, l || a.push(i);
    }), tt.debug("returning points", a), a;
}, "cutPathAtIntersect");
function ht(r) {
    let t = [], a = [];
    for(let s = 1; s < r.length - 1; s++){
        let l = r[s - 1], i = r[s], n = r[s + 1];
        (l.x === i.x && i.y === n.y && Math.abs(i.x - n.x) > 5 && Math.abs(i.y - l.y) > 5 || l.y === i.y && i.x === n.x && Math.abs(i.x - l.x) > 5 && Math.abs(i.y - n.y) > 5) && (t.push(i), a.push(s));
    }
    return {
        cornerPoints: t,
        cornerPointPositions: a
    };
}
m$1(ht, "extractCornerPoints");
var it = /*#__PURE__*/ m$1(function(r, t, a) {
    let s = t.x - r.x, l = t.y - r.y, i = /*#__PURE__*/ Math.sqrt(s * s + l * l), n = a / i;
    return {
        x: t.x - n * s,
        y: t.y - n * l
    };
}, "findAdjacentPoint"), mt = /*#__PURE__*/ m$1(function(r) {
    let { cornerPointPositions: t } = ht(r), a = [];
    for(let s = 0; s < r.length; s++)if (t.includes(s)) {
        let l = r[s - 1], i = r[s + 1], n = r[s], o = /*#__PURE__*/ it(l, n, 5), e = /*#__PURE__*/ it(i, n, 5), p = e.x - o.x, f = e.y - o.y;
        a.push(o);
        let c = Math.sqrt(2) * 2, m = {
            x: n.x,
            y: n.y
        };
        if (Math.abs(i.x - l.x) > 10 && Math.abs(i.y - l.y) >= 10) {
            tt.debug("Corner point fixing", /*#__PURE__*/ Math.abs(i.x - l.x), /*#__PURE__*/ Math.abs(i.y - l.y));
            let y = 5;
            n.x === o.x ? m = {
                x: p < 0 ? o.x - y + c : o.x + y - c,
                y: f < 0 ? o.y - c : o.y + c
            } : m = {
                x: p < 0 ? o.x - c : o.x + c,
                y: f < 0 ? o.y - y + c : o.y + y - c
            };
        } else tt.debug("Corner point skipping fixing", /*#__PURE__*/ Math.abs(i.x - l.x), /*#__PURE__*/ Math.abs(i.y - l.y));
        a.push(m, e);
    } else a.push(r[s]);
    return a;
}, "fixCorners"), Jt = /*#__PURE__*/ m$1(function(r, t, a, s, l, i, n) {
    let { handDrawnSeed: o } = Hl(), e = t.points, p = false, f = l;
    var c = i;
    let m = [];
    for(let u in t.cssCompiledStyles)nr(u) || m.push(t.cssCompiledStyles[u]);
    c.intersect && f.intersect && (e = /*#__PURE__*/ e.slice(1, t.points.length - 1), e.unshift(/*#__PURE__*/ f.intersect(e[0])), tt.debug("Last point APA12", t.start, "-->", t.end, e[e.length - 1], c, /*#__PURE__*/ c.intersect(e[e.length - 1])), e.push(/*#__PURE__*/ c.intersect(e[e.length - 1]))), t.toCluster && (tt.info("to cluster abc88", /*#__PURE__*/ a.get(t.toCluster)), e = /*#__PURE__*/ ot(t.points, a.get(t.toCluster).node), p = true), t.fromCluster && (tt.debug("from cluster abc88", /*#__PURE__*/ a.get(t.fromCluster), /*#__PURE__*/ JSON.stringify(e, null, 2)), e = /*#__PURE__*/ ot(/*#__PURE__*/ e.reverse(), a.get(t.fromCluster).node).reverse(), p = true);
    let y = /*#__PURE__*/ e.filter((u)=>!Number.isNaN(u.y));
    y = /*#__PURE__*/ mt(y);
    let k = Bc;
    switch(k = go, t.curve){
        case "linear":
            k = go;
            break;
        case "basis":
            k = Bc;
            break;
        case "cardinal":
            k = ig;
            break;
        case "bumpX":
            k = tg;
            break;
        case "bumpY":
            k = eg;
            break;
        case "catmullRom":
            k = sg;
            break;
        case "monotoneX":
            k = hg;
            break;
        case "monotoneY":
            k = cg;
            break;
        case "natural":
            k = Yc;
            break;
        case "step":
            k = Gc;
            break;
        case "stepAfter":
            k = fg;
            break;
        case "stepBefore":
            k = ug;
            break;
        default:
            k = Bc;
    }
    let { x: z, y: O } = d(t), lt = /*#__PURE__*/ vc().x(z).y(O).curve(k), b;
    switch(t.thickness){
        case "normal":
            b = "edge-thickness-normal";
            break;
        case "thick":
            b = "edge-thickness-thick";
            break;
        case "invisible":
            b = "edge-thickness-invisible";
            break;
        default:
            b = "edge-thickness-normal";
    }
    switch(t.pattern){
        case "solid":
            b += " edge-pattern-solid";
            break;
        case "dotted":
            b += " edge-pattern-dotted";
            break;
        case "dashed":
            b += " edge-pattern-dashed";
            break;
        default:
            b += " edge-pattern-solid";
    }
    let w, q = /*#__PURE__*/ lt(y), M = Array.isArray(t.style) ? t.style : [
        t.style
    ], U = /*#__PURE__*/ M.find((u)=>u?.startsWith("stroke:"));
    if (t.look === "handDrawn") {
        let u = /*#__PURE__*/ v.svg(r);
        Object.assign([], y);
        let v$1 = /*#__PURE__*/ u.path(q, {
            roughness: .3,
            seed: o
        });
        b += " transition", w = /*#__PURE__*/ ih(v$1).select("path").attr("id", t.id).attr("class", " " + b + (t.classes ? " " + t.classes : "")).attr("style", M ? M.reduce((X, H)=>X + ";" + H, "") : "");
        let _ = /*#__PURE__*/ w.attr("d");
        w.attr("d", _), r.node().appendChild(/*#__PURE__*/ w.node());
    } else {
        let u = /*#__PURE__*/ m.join(";"), v = M ? M.reduce((H, ct)=>H + ct + ";", "") : "", _ = "";
        t.animate && (_ = " edge-animation-fast"), t.animation && (_ = " edge-animation-" + t.animation);
        let X = u ? u + ";" + v + ";" : v;
        w = /*#__PURE__*/ r.append("path").attr("d", q).attr("id", t.id).attr("class", " " + b + (t.classes ? " " + t.classes : "") + (_ ?? "")).attr("style", X), U = X.match(/stroke:([^;]+)/)?.[1];
    }
    let $ = "";
    (Hl().flowchart.arrowMarkerAbsolute || Hl().state.arrowMarkerAbsolute) && ($ = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, $ = /*#__PURE__*/ $.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), tt.info("arrowTypeStart", t.arrowTypeStart), tt.info("arrowTypeEnd", t.arrowTypeEnd), st(w, t, $, n, s, U);
    let C = {};
    return p && (C.updatedPath = e), C.originalPath = t.points, C;
}, "insertEdge");
var kt = /*#__PURE__*/ m$1((r, t, a, s)=>{
    t.forEach((l)=>{
        Yt[l](r, a, s);
    });
}, "insertMarkers"), yt = /*#__PURE__*/ m$1((r, t, a)=>{
    tt.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), xt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), bt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), ut = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), gt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), wt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), Lt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), Mt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), _t = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), St = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), Et = /*#__PURE__*/ m$1((r, t, a)=>{
    let s = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    s.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M9,0 L9,18");
    let l = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), Ot = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), $t = /*#__PURE__*/ m$1((r, t, a)=>{
    let s = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    s.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    let l = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), vt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
}, "requirement_arrow"), Xt = /*#__PURE__*/ m$1((r, t, a)=>{
    let s = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
    s.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), s.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), s.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), Yt = {
    extension: yt,
    composition: xt,
    aggregation: bt,
    dependency: ut,
    lollipop: gt,
    point: wt,
    circle: Lt,
    cross: Mt,
    barb: _t,
    only_one: St,
    zero_or_one: Et,
    one_or_more: Ot,
    zero_or_more: $t,
    requirement_arrow: vt,
    requirement_contains: Xt
}, tr = kt;
export { Ft as F, Gt as G, Jt as J, Vt as V, tr as t };
