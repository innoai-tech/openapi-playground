import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-7ON4XGU6.CvQ3UDwh.chunk.js';
import { d } from './vendor-min-mermaid~chunk-I2YQ4O7X.eSgKSoUq.chunk.js';
import { L as Le } from './vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { B as Bf, F as Ff, M as Mf, L as Lf, w as wf, v as vf, S as Sf, E as Er, p as pl, t as tt$1, X as hl } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
var f = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle"
}, P = {
    axes: [],
    curves: [],
    options: f
}, g = /*#__PURE__*/ structuredClone(P), q = pl.radar, z = /*#__PURE__*/ m$1(()=>Le({
        ...q,
        ...Er().radar
    }), "getConfig"), k = /*#__PURE__*/ m$1(()=>g.axes, "getAxes"), W = /*#__PURE__*/ m$1(()=>g.curves, "getCurves"), H = /*#__PURE__*/ m$1(()=>g.options, "getOptions"), N = /*#__PURE__*/ m$1((e)=>{
    g.axes = /*#__PURE__*/ e.map((t)=>({
            name: t.name,
            label: t.label ?? t.name
        }));
}, "setAxes"), U = /*#__PURE__*/ m$1((e)=>{
    g.curves = /*#__PURE__*/ e.map((t)=>({
            name: t.name,
            label: t.label ?? t.name,
            entries: /*#__PURE__*/ X(t.entries)
        }));
}, "setCurves"), X = /*#__PURE__*/ m$1((e)=>{
    if (e[0].axis == null) return e.map((r)=>r.value);
    let t = /*#__PURE__*/ k();
    if (t.length === 0) throw new Error("Axes must be populated before curves for reference entries");
    return t.map((r)=>{
        let a = /*#__PURE__*/ e.find((o)=>o.axis?.$refText === r.name);
        if (a === void 0) throw new Error("Missing entry for axis " + r.label);
        return a.value;
    });
}, "computeCurveEntries"), Y = /*#__PURE__*/ m$1((e)=>{
    let t = /*#__PURE__*/ e.reduce((r, a)=>(r[a.name] = a, r), {});
    g.options = {
        showLegend: t.showLegend?.value ?? f.showLegend,
        ticks: t.ticks?.value ?? f.ticks,
        max: t.max?.value ?? f.max,
        min: t.min?.value ?? f.min,
        graticule: t.graticule?.value ?? f.graticule
    };
}, "setOptions"), Z = /*#__PURE__*/ m$1(()=>{
    Sf(), g = /*#__PURE__*/ structuredClone(P);
}, "clear"), x = {
    getAxes: k,
    getCurves: W,
    getOptions: H,
    setAxes: N,
    setCurves: U,
    setOptions: Y,
    getConfig: z,
    clear: Z,
    setAccTitle: vf,
    getAccTitle: wf,
    setDiagramTitle: Lf,
    getDiagramTitle: Mf,
    getAccDescription: Ff,
    setAccDescription: Bf
};
var J = /*#__PURE__*/ m$1((e)=>{
    c(e, x);
    let { axes: t, curves: r, options: a } = e;
    x.setAxes(t), x.setCurves(r), x.setOptions(a);
}, "populate"), E = {
    parse: /*#__PURE__*/ m$1(async (e)=>{
        let t = await p("radar", e);
        tt$1.debug(t), J(t);
    }, "parse")
};
var K = /*#__PURE__*/ m$1((e, t, r, a)=>{
    let o = a.db, s = /*#__PURE__*/ o.getAxes(), m = /*#__PURE__*/ o.getCurves(), n = /*#__PURE__*/ o.getOptions(), l = /*#__PURE__*/ o.getConfig(), c = /*#__PURE__*/ o.getDiagramTitle(), p = /*#__PURE__*/ d(t), d$1 = /*#__PURE__*/ Q(p, l), u = n.max ?? Math.max(.../*#__PURE__*/ m.map((b)=>Math.max(...b.entries))), h = n.min, y = Math.min(l.width, l.height) / 2;
    tt(d$1, s, y, n.ticks, n.graticule), rt(d$1, s, y, l), et(d$1, s, m, h, u, n.graticule, l), nt(d$1, m, n.showLegend, l), d$1.append("text").attr("class", "radarTitle").text(c).attr("x", 0).attr("y", -l.height / 2 - l.marginTop);
}, "draw"), Q = /*#__PURE__*/ m$1((e, t)=>{
    let r = t.width + t.marginLeft + t.marginRight, a = t.height + t.marginTop + t.marginBottom, o = {
        x: t.marginLeft + t.width / 2,
        y: t.marginTop + t.height / 2
    };
    return e.attr("viewbox", `0 0 ${r} ${a}`).attr("width", r).attr("height", a), e.append("g").attr("transform", `translate(${o.x}, ${o.y})`);
}, "drawFrame"), tt = /*#__PURE__*/ m$1((e, t, r, a, o)=>{
    if (o === "circle") for(let s = 0; s < a; s++){
        let m = r * (s + 1) / a;
        e.append("circle").attr("r", m).attr("class", "radarGraticule");
    }
    else if (o === "polygon") {
        let s = t.length;
        for(let m = 0; m < a; m++){
            let n = r * (m + 1) / a, l = /*#__PURE__*/ t.map((c, p)=>{
                let d = 2 * p * Math.PI / s - Math.PI / 2, u = n * Math.cos(d), h = n * Math.sin(d);
                return `${u},${h}`;
            }).join(" ");
            e.append("polygon").attr("points", l).attr("class", "radarGraticule");
        }
    }
}, "drawGraticule"), rt = /*#__PURE__*/ m$1((e, t, r, a)=>{
    let o = t.length;
    for(let s = 0; s < o; s++){
        let m = t[s].label, n = 2 * s * Math.PI / o - Math.PI / 2;
        e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * a.axisScaleFactor * Math.cos(n)).attr("y2", r * a.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), e.append("text").text(m).attr("x", r * a.axisLabelFactor * Math.cos(n)).attr("y", r * a.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
    }
}, "drawAxes");
function et(e, t, r, a, o, s, m) {
    let n = t.length, l = Math.min(m.width, m.height) / 2;
    r.forEach((c, p)=>{
        if (c.entries.length !== n) return;
        let d = /*#__PURE__*/ c.entries.map((u, h)=>{
            let y = 2 * Math.PI * h / n - Math.PI / 2, b = /*#__PURE__*/ at(u, a, o, l), _ = b * Math.cos(y), B = b * Math.sin(y);
            return {
                x: _,
                y: B
            };
        });
        s === "circle" ? e.append("path").attr("d", /*#__PURE__*/ ot(d, m.curveTension)).attr("class", `radarCurve-${p}`) : s === "polygon" && e.append("polygon").attr("points", /*#__PURE__*/ d.map((u)=>`${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${p}`);
    });
}
m$1(et, "drawCurves");
function at(e, t, r, a) {
    let o = /*#__PURE__*/ Math.min(/*#__PURE__*/ Math.max(e, t), r);
    return a * (o - t) / (r - t);
}
m$1(at, "relativeRadius");
function ot(e, t) {
    let r = e.length, a = `M${e[0].x},${e[0].y}`;
    for(let o = 0; o < r; o++){
        let s = e[(o - 1 + r) % r], m = e[o], n = e[(o + 1) % r], l = e[(o + 2) % r], c = {
            x: m.x + (n.x - s.x) * t,
            y: m.y + (n.y - s.y) * t
        }, p = {
            x: n.x - (l.x - m.x) * t,
            y: n.y - (l.y - m.y) * t
        };
        a += ` C${c.x},${c.y} ${p.x},${p.y} ${n.x},${n.y}`;
    }
    return `${a} Z`;
}
m$1(ot, "closedRoundCurve");
function nt(e, t, r, a) {
    if (!r) return;
    let o = (a.width / 2 + a.marginRight) * 3 / 4, s = -(a.height / 2 + a.marginTop) * 3 / 4, m = 20;
    t.forEach((n, l)=>{
        let c = /*#__PURE__*/ e.append("g").attr("transform", `translate(${o}, ${s + l * m})`);
        c.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${l}`), c.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
    });
}
m$1(nt, "drawLegend");
var I = {
    draw: K
};
var it = /*#__PURE__*/ m$1((e, t)=>{
    let r = "";
    for(let a = 0; a < e.THEME_COLOR_LIMIT; a++){
        let o = e[`cScale${a}`];
        r += `
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`;
    }
    return r;
}, "genIndexStyles"), st = /*#__PURE__*/ m$1((e)=>{
    let t = /*#__PURE__*/ hl(), r = /*#__PURE__*/ Er(), a = /*#__PURE__*/ Le(t, r.themeVariables), o = /*#__PURE__*/ Le(a.radar, e);
    return {
        themeVariables: a,
        radarOptions: o
    };
}, "buildRadarStyleOptions"), F = /*#__PURE__*/ m$1(function() {
    let { radar: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let { themeVariables: t, radarOptions: r } = st(e);
    return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t, r)}
	`;
}, "styles");
var Tt = {
    parser: E,
    db: x,
    renderer: I,
    styles: F
};
export { Tt as diagram };
