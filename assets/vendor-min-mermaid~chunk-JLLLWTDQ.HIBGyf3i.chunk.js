import { d } from './vendor-min-mermaid~chunk-S67DUUA5.D3-Ci5Su.chunk.js';
import { T as Tt$1, v } from './vendor-min-mermaid~chunk-JD2HUS54.BfHD_CEM.chunk.js';
import { n } from './vendor-min-mermaid~chunk-LM6QDVU5.Cd9M_jtg.chunk.js';
import { g } from './vendor-min-mermaid~chunk-LMGRA235.BXx4trp1.chunk.js';
import { J as Jr } from './vendor-min-mermaid~chunk-TK7VX7YV.CPX48Ryn.chunk.js';
import { I as Ie } from './vendor-min-mermaid~chunk-CRSA2SMT.DrUenSi3.chunk.js';
import { t as tt, h as hh, R as Rf, k as kh, c as Xc, d as Zc, z as zf, g as bo, H as Hg, U as Ug, m as mu, p as pu, $ as $g, W as Wg, N as Ng, r as Dg, E as Eg, i as Ig } from './vendor-min-mermaid~chunk-63ZE7VZ5.CfadwiGU.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var ot = /*#__PURE__*/ m$1((r, t, a, n, l, i)=>{
    t.arrowTypeStart && nt(r, "start", t.arrowTypeStart, a, n, l, i), t.arrowTypeEnd && nt(r, "end", t.arrowTypeEnd, a, n, l, i);
}, "addEdgeMarkers"), dt = {
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
}, nt = /*#__PURE__*/ m$1((r, t, a, n, l, i, s)=>{
    let o = dt[a];
    if (!o) {
        tt.warn(`Unknown arrow type: ${a}`);
        return;
    }
    let e = o.type, f = `${l}_${i}-${e}${t === "start" ? "Start" : "End"}`;
    if (s && s.trim() !== "") {
        let c = /*#__PURE__*/ s.replace(/[^\dA-Za-z]/g, "_"), m = `${f}_${c}`;
        if (!document.getElementById(m)) {
            let y = /*#__PURE__*/ document.getElementById(f);
            if (y) {
                let k = /*#__PURE__*/ y.cloneNode(true);
                k.id = m, k.querySelectorAll("path, circle, line").forEach((O)=>{
                    O.setAttribute("stroke", s), o.fill && O.setAttribute("fill", s);
                }), y.parentNode?.appendChild(k);
            }
        }
        r.attr(`marker-${t}`, `url(${n}#${m})`);
    } else r.attr(`marker-${t}`, `url(${n}#${f})`);
}, "addEdgeMarker");
var T = new Map, x = new Map, Vt = /*#__PURE__*/ m$1(()=>{
    T.clear(), x.clear();
}, "clear"), E = /*#__PURE__*/ m$1((r)=>r ? r.reduce((a, n)=>a + ";" + n, "") : "", "getLabelStyles"), Ft = /*#__PURE__*/ m$1(async (r, t)=>{
    let a = /*#__PURE__*/ Rf(hh().flowchart.htmlLabels), n = await Jr(r, t.label, {
        style: /*#__PURE__*/ E(t.labelStyle),
        useHtmlLabels: a,
        addSvgBackground: true,
        isNode: false
    });
    tt.info("abc82", t, t.labelType);
    let l = /*#__PURE__*/ r.insert("g").attr("class", "edgeLabel"), i = /*#__PURE__*/ l.insert("g").attr("class", "label");
    i.node().appendChild(n);
    let s = /*#__PURE__*/ n.getBBox();
    if (a) {
        let e = n.children[0], p = /*#__PURE__*/ kh(n);
        s = /*#__PURE__*/ e.getBoundingClientRect(), p.attr("width", s.width), p.attr("height", s.height);
    }
    i.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), T.set(t.id, l), t.width = s.width, t.height = s.height;
    let o;
    if (t.startLabelLeft) {
        let e = await Tt$1(t.startLabelLeft, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startLeft = p, Y(o, t.startLabelLeft);
    }
    if (t.startLabelRight) {
        let e = await Tt$1(t.startLabelRight, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ p.node().appendChild(e), f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startRight = p, Y(o, t.startLabelRight);
    }
    if (t.endLabelLeft) {
        let e = await Tt$1(t.endLabelLeft, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endLeft = p, Y(o, t.endLabelLeft);
    }
    if (t.endLabelRight) {
        let e = await Tt$1(t.endLabelRight, /*#__PURE__*/ E(t.labelStyle)), p = /*#__PURE__*/ r.insert("g").attr("class", "edgeTerminals"), f = /*#__PURE__*/ p.insert("g").attr("class", "inner");
        o = /*#__PURE__*/ f.node().appendChild(e);
        let c = /*#__PURE__*/ e.getBBox();
        f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endRight = p, Y(o, t.endLabelRight);
    }
    return n;
}, "insertEdgeLabel");
function Y(r, t) {
    hh().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
m$1(Y, "setTerminalWidth");
var Jt = /*#__PURE__*/ m$1((r, t)=>{
    tt.debug("Moving label abc88 ", r.id, r.label, /*#__PURE__*/ T.get(r.id), t);
    let a = t.updatedPath ? t.updatedPath : t.originalPath, n$1 = /*#__PURE__*/ hh(), { subGraphTitleTotalMargin: l } = n(n$1);
    if (r.label) {
        let i = /*#__PURE__*/ T.get(r.id), s = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcLabelPosition(a);
            tt.debug("Moving label " + r.label + " from (", s, ",", o, ") to (", e.x, ",", e.y, ") abc88"), t.updatedPath && (s = e.x, o = e.y);
        }
        i.attr("transform", `translate(${s}, ${o + l / 2})`);
    }
    if (r.startLabelLeft) {
        let i = x.get(r.id).startLeft, s = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
            s = e.x, o = e.y;
        }
        i.attr("transform", `translate(${s}, ${o})`);
    }
    if (r.startLabelRight) {
        let i = x.get(r.id).startRight, s = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
            s = e.x, o = e.y;
        }
        i.attr("transform", `translate(${s}, ${o})`);
    }
    if (r.endLabelLeft) {
        let i = x.get(r.id).endLeft, s = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
            s = e.x, o = e.y;
        }
        i.attr("transform", `translate(${s}, ${o})`);
    }
    if (r.endLabelRight) {
        let i = x.get(r.id).endRight, s = r.x, o = r.y;
        if (a) {
            let e = /*#__PURE__*/ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
            s = e.x, o = e.y;
        }
        i.attr("transform", `translate(${s}, ${o})`);
    }
}, "positionEdgeLabel"), ft = /*#__PURE__*/ m$1((r, t)=>{
    let a = r.x, n = r.y, l = /*#__PURE__*/ Math.abs(t.x - a), i = /*#__PURE__*/ Math.abs(t.y - n), s = r.width / 2, o = r.height / 2;
    return l >= s || i >= o;
}, "outsideNode"), ht = /*#__PURE__*/ m$1((r, t, a)=>{
    tt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
    let n = r.x, l = r.y, i = /*#__PURE__*/ Math.abs(n - a.x), s = r.width / 2, o = a.x < t.x ? s - i : s + i, e = r.height / 2, p = /*#__PURE__*/ Math.abs(t.y - a.y), f = /*#__PURE__*/ Math.abs(t.x - a.x);
    if (Math.abs(l - t.y) * s > Math.abs(n - t.x) * e) {
        let c = a.y < t.y ? t.y - e - l : l - e - t.y;
        o = f * c / p;
        let m = {
            x: a.x < t.x ? a.x + o : a.x - f + o,
            y: a.y < t.y ? a.y + p - c : a.y - p + c
        };
        return o === 0 && (m.x = t.x, m.y = t.y), f === 0 && (m.x = t.x), p === 0 && (m.y = t.y), tt.debug(`abc89 top/bottom calc, Q ${p}, q ${c}, R ${f}, r ${o}`, m), m;
    } else {
        a.x < t.x ? o = t.x - s - n : o = n - s - t.x;
        let c = p * o / f, m = a.x < t.x ? a.x + f - o : a.x - f + o, y = a.y < t.y ? a.y + c : a.y - c;
        return tt.debug(`sides calc abc89, Q ${p}, q ${c}, R ${f}, r ${o}`, {
            _x: m,
            _y: y
        }), o === 0 && (m = t.x, y = t.y), f === 0 && (m = t.x), p === 0 && (y = t.y), {
            x: m,
            y
        };
    }
}, "intersection"), it = /*#__PURE__*/ m$1((r, t)=>{
    tt.warn("abc88 cutPathAtIntersect", r, t);
    let a = [], n = r[0], l = false;
    return r.forEach((i)=>{
        if (tt.info("abc88 checking point", i, t), !ft(t, i) && !l) {
            let s = /*#__PURE__*/ ht(t, n, i);
            tt.debug("abc88 inside", i, n, s), tt.debug("abc88 intersection", s, t);
            let o = false;
            a.forEach((e)=>{
                o = o || e.x === s.x && e.y === s.y;
            }), a.some((e)=>e.x === s.x && e.y === s.y) ? tt.warn("abc88 no intersect", s, a) : a.push(s), l = true;
        } else tt.warn("abc88 outside", i, n), n = i, l || a.push(i);
    }), tt.debug("returning points", a), a;
}, "cutPathAtIntersect");
function mt(r) {
    let t = [], a = [];
    for(let n = 1; n < r.length - 1; n++){
        let l = r[n - 1], i = r[n], s = r[n + 1];
        (l.x === i.x && i.y === s.y && Math.abs(i.x - s.x) > 5 && Math.abs(i.y - l.y) > 5 || l.y === i.y && i.x === s.x && Math.abs(i.x - l.x) > 5 && Math.abs(i.y - s.y) > 5) && (t.push(i), a.push(n));
    }
    return {
        cornerPoints: t,
        cornerPointPositions: a
    };
}
m$1(mt, "extractCornerPoints");
var lt = /*#__PURE__*/ m$1(function(r, t, a) {
    let n = t.x - r.x, l = t.y - r.y, i = /*#__PURE__*/ Math.sqrt(n * n + l * l), s = a / i;
    return {
        x: t.x - s * n,
        y: t.y - s * l
    };
}, "findAdjacentPoint"), kt = /*#__PURE__*/ m$1(function(r) {
    let { cornerPointPositions: t } = mt(r), a = [];
    for(let n = 0; n < r.length; n++)if (t.includes(n)) {
        let l = r[n - 1], i = r[n + 1], s = r[n], o = /*#__PURE__*/ lt(l, s, 5), e = /*#__PURE__*/ lt(i, s, 5), p = e.x - o.x, f = e.y - o.y;
        a.push(o);
        let c = Math.sqrt(2) * 2, m = {
            x: s.x,
            y: s.y
        };
        if (Math.abs(i.x - l.x) > 10 && Math.abs(i.y - l.y) >= 10) {
            tt.debug("Corner point fixing", /*#__PURE__*/ Math.abs(i.x - l.x), /*#__PURE__*/ Math.abs(i.y - l.y));
            let y = 5;
            s.x === o.x ? m = {
                x: p < 0 ? o.x - y + c : o.x + y - c,
                y: f < 0 ? o.y - c : o.y + c
            } : m = {
                x: p < 0 ? o.x - c : o.x + c,
                y: f < 0 ? o.y - y + c : o.y + y - c
            };
        } else tt.debug("Corner point skipping fixing", /*#__PURE__*/ Math.abs(i.x - l.x), /*#__PURE__*/ Math.abs(i.y - l.y));
        a.push(m, e);
    } else a.push(r[n]);
    return a;
}, "fixCorners"), Dt = /*#__PURE__*/ m$1(function(r, t, a, n, l, i, s) {
    let { handDrawnSeed: o } = hh(), e = t.points, p = false, f = l;
    var c = i;
    let m = [];
    for(let b in t.cssCompiledStyles)g(b) || m.push(t.cssCompiledStyles[b]);
    c.intersect && f.intersect && (e = /*#__PURE__*/ e.slice(1, t.points.length - 1), e.unshift(/*#__PURE__*/ f.intersect(e[0])), tt.debug("Last point APA12", t.start, "-->", t.end, e[e.length - 1], c, /*#__PURE__*/ c.intersect(e[e.length - 1])), e.push(/*#__PURE__*/ c.intersect(e[e.length - 1]))), t.toCluster && (tt.info("to cluster abc88", /*#__PURE__*/ a.get(t.toCluster)), e = /*#__PURE__*/ it(t.points, a.get(t.toCluster).node), p = true), t.fromCluster && (tt.debug("from cluster abc88", /*#__PURE__*/ a.get(t.fromCluster), /*#__PURE__*/ JSON.stringify(e, null, 2)), e = /*#__PURE__*/ it(/*#__PURE__*/ e.reverse(), a.get(t.fromCluster).node).reverse(), p = true);
    let y = /*#__PURE__*/ e.filter((b)=>!Number.isNaN(b.y));
    y = /*#__PURE__*/ kt(y);
    let k = Zc;
    switch(k = bo, t.curve){
        case "linear":
            k = bo;
            break;
        case "basis":
            k = Zc;
            break;
        case "cardinal":
            k = Ig;
            break;
        case "bumpX":
            k = Eg;
            break;
        case "bumpY":
            k = Dg;
            break;
        case "catmullRom":
            k = Ng;
            break;
        case "monotoneX":
            k = Wg;
            break;
        case "monotoneY":
            k = $g;
            break;
        case "natural":
            k = pu;
            break;
        case "step":
            k = mu;
            break;
        case "stepAfter":
            k = Ug;
            break;
        case "stepBefore":
            k = Hg;
            break;
        default:
            k = Zc;
    }
    let { x: R, y: O } = d(t), ct = /*#__PURE__*/ Xc().x(R).y(O).curve(k), u;
    switch(t.thickness){
        case "normal":
            u = "edge-thickness-normal";
            break;
        case "thick":
            u = "edge-thickness-thick";
            break;
        case "invisible":
            u = "edge-thickness-invisible";
            break;
        default:
            u = "edge-thickness-normal";
    }
    switch(t.pattern){
        case "solid":
            u += " edge-pattern-solid";
            break;
        case "dotted":
            u += " edge-pattern-dotted";
            break;
        case "dashed":
            u += " edge-pattern-dashed";
            break;
        default:
            u += " edge-pattern-solid";
    }
    let L, z = /*#__PURE__*/ ct(y), w = Array.isArray(t.style) ? t.style : t.style ? [
        t.style
    ] : [], U = /*#__PURE__*/ w.find((b)=>b?.startsWith("stroke:"));
    if (t.look === "handDrawn") {
        let b = /*#__PURE__*/ v.svg(r);
        Object.assign([], y);
        let $ = /*#__PURE__*/ b.path(z, {
            roughness: .3,
            seed: o
        });
        u += " transition", L = /*#__PURE__*/ kh($).select("path").attr("id", t.id).attr("class", " " + u + (t.classes ? " " + t.classes : "")).attr("style", w ? w.reduce((v, C)=>v + ";" + C, "") : "");
        let _ = /*#__PURE__*/ L.attr("d");
        L.attr("d", _), r.node().appendChild(/*#__PURE__*/ L.node());
    } else {
        let b = /*#__PURE__*/ m.join(";"), $ = w ? w.reduce((C, pt)=>C + pt + ";", "") : "", _ = "";
        t.animate && (_ = " edge-animation-fast"), t.animation && (_ = " edge-animation-" + t.animation);
        let v = b ? b + ";" + $ + ";" : $;
        L = /*#__PURE__*/ r.append("path").attr("d", z).attr("id", t.id).attr("class", " " + u + (t.classes ? " " + t.classes : "") + (_ ?? "")).attr("style", v), U = v.match(/stroke:([^;]+)/)?.[1];
    }
    let q = "";
    (hh().flowchart.arrowMarkerAbsolute || hh().state.arrowMarkerAbsolute) && (q = /*#__PURE__*/ zf(true)), tt.info("arrowTypeStart", t.arrowTypeStart), tt.info("arrowTypeEnd", t.arrowTypeEnd), ot(L, t, q, s, n, U);
    let W = {};
    return p && (W.updatedPath = e), W.originalPath = t.points, W;
}, "insertEdge");
var yt = /*#__PURE__*/ m$1((r, t, a, n)=>{
    t.forEach((l)=>{
        Tt[l](r, a, n);
    });
}, "insertMarkers"), xt = /*#__PURE__*/ m$1((r, t, a)=>{
    tt.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), ut = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), bt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), gt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Lt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), Mt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), wt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), _t = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), St = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), Et = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), Ot = /*#__PURE__*/ m$1((r, t, a)=>{
    let n = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18");
    let l = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), $t = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), vt = /*#__PURE__*/ m$1((r, t, a)=>{
    let n = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    let l = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), Xt = /*#__PURE__*/ m$1((r, t, a)=>{
    r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
}, "requirement_arrow"), Yt = /*#__PURE__*/ m$1((r, t, a)=>{
    let n = /*#__PURE__*/ r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
    n.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), n.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), n.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), Tt = {
    extension: xt,
    composition: ut,
    aggregation: bt,
    dependency: gt,
    lollipop: Lt,
    point: Mt,
    circle: wt,
    cross: _t,
    barb: St,
    only_one: Et,
    zero_or_one: Ot,
    one_or_more: $t,
    zero_or_more: vt,
    requirement_arrow: Xt,
    requirement_contains: Yt
}, rr = yt;
export { Dt as D, Ft as F, Jt as J, Vt as V, rr as r };
