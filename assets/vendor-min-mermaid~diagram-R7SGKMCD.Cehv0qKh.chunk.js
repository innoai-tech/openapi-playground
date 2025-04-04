import { c } from "./vendor-min-mermaid~chunk-4KE642ED.BFCpHScK.chunk.js";
import { p } from "./vendor-min-mermaid~chunk-TYETAW3D.DPkD-c0C.chunk.js";
import "./vendor-min-mermaid~chunk-ZWYQHTDX.BfhYjC6o.chunk.js";
import "./vendor-min-mermaid~chunk-DDW4HWGY.ZoJLOt6K.chunk.js";
import "./vendor-min-mermaid~chunk-NA3436M7.DG84OIGm.chunk.js";
import "./vendor-min-mermaid~chunk-RRF4A5XS.CCpQ3CSD.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-MEBTFSOL.B7bUe0lZ.chunk.js";
import { L as Le } from "./vendor-min-mermaid~chunk-YM3XIQPS.DIMTnqRF.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
import { B as Bf, F as Ff, L as Lf, M as Mf, w as wf, v as vf, S as Sf, E as Er, p as pl, t as tt$1, W as hl } from "./vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js";
import "./vendor-min-mermaid~chunk-SWO474TD.DyTty_i1.chunk.js";
import "./vendor-min-mermaid~chunk-237OD7E6.DYMr3-lc.chunk.js";
import "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import "./vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js";
import "./vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js";
import "./vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js";
import "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
import "./vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js";
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
}, g = structuredClone(P), q = pl.radar, z = m$1(() => Le({
  ...q,
  ...Er().radar
}), "getConfig"), k = m$1(() => g.axes, "getAxes"), W = m$1(() => g.curves, "getCurves"), H = m$1(() => g.options, "getOptions"), N = m$1((e) => {
  g.axes = e.map((t) => ({
    name: t.name,
    label: t.label ?? t.name
  }));
}, "setAxes"), U = m$1((e) => {
  g.curves = e.map((t) => ({
    name: t.name,
    label: t.label ?? t.name,
    entries: X(t.entries)
  }));
}, "setCurves"), X = m$1((e) => {
  if (e[0].axis == null) return e.map((r) => r.value);
  let t = k();
  if (t.length === 0) throw new Error("Axes must be populated before curves for reference entries");
  return t.map((r) => {
    let a = e.find((o) => {
      var _a;
      return ((_a = o.axis) == null ? void 0 : _a.$refText) === r.name;
    });
    if (a === void 0) throw new Error("Missing entry for axis " + r.label);
    return a.value;
  });
}, "computeCurveEntries"), Y = m$1((e) => {
  var _a, _b, _c, _d, _e;
  let t = e.reduce((r, a) => (r[a.name] = a, r), {});
  g.options = {
    showLegend: ((_a = t.showLegend) == null ? void 0 : _a.value) ?? f.showLegend,
    ticks: ((_b = t.ticks) == null ? void 0 : _b.value) ?? f.ticks,
    max: ((_c = t.max) == null ? void 0 : _c.value) ?? f.max,
    min: ((_d = t.min) == null ? void 0 : _d.value) ?? f.min,
    graticule: ((_e = t.graticule) == null ? void 0 : _e.value) ?? f.graticule
  };
}, "setOptions"), Z = m$1(() => {
  Sf(), g = structuredClone(P);
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
  setDiagramTitle: Mf,
  getDiagramTitle: Lf,
  getAccDescription: Ff,
  setAccDescription: Bf
};
var J = m$1((e) => {
  c(e, x);
  let { axes: t, curves: r, options: a } = e;
  x.setAxes(t), x.setCurves(r), x.setOptions(a);
}, "populate"), E = {
  parse: m$1(async (e) => {
    let t = await p("radar", e);
    tt$1.debug(t), J(t);
  }, "parse")
};
var K = m$1((e, t, r, a) => {
  let o = a.db, s = o.getAxes(), m = o.getCurves(), n = o.getOptions(), l = o.getConfig(), c2 = o.getDiagramTitle(), p2 = d(t), d$1 = Q(p2, l), u = n.max ?? Math.max(...m.map((b) => Math.max(...b.entries))), h = n.min, y = Math.min(l.width, l.height) / 2;
  tt(d$1, s, y, n.ticks, n.graticule), rt(d$1, s, y, l), et(d$1, s, m, h, u, n.graticule, l), nt(d$1, m, n.showLegend, l), d$1.append("text").attr("class", "radarTitle").text(c2).attr("x", 0).attr("y", -l.height / 2 - l.marginTop);
}, "draw"), Q = m$1((e, t) => {
  let r = t.width + t.marginLeft + t.marginRight, a = t.height + t.marginTop + t.marginBottom, o = {
    x: t.marginLeft + t.width / 2,
    y: t.marginTop + t.height / 2
  };
  return e.attr("viewbox", `0 0 ${r} ${a}`).attr("width", r).attr("height", a), e.append("g").attr("transform", `translate(${o.x}, ${o.y})`);
}, "drawFrame"), tt = m$1((e, t, r, a, o) => {
  if (o === "circle") for (let s = 0; s < a; s++) {
    let m = r * (s + 1) / a;
    e.append("circle").attr("r", m).attr("class", "radarGraticule");
  }
  else if (o === "polygon") {
    let s = t.length;
    for (let m = 0; m < a; m++) {
      let n = r * (m + 1) / a, l = t.map((c2, p2) => {
        let d2 = 2 * p2 * Math.PI / s - Math.PI / 2, u = n * Math.cos(d2), h = n * Math.sin(d2);
        return `${u},${h}`;
      }).join(" ");
      e.append("polygon").attr("points", l).attr("class", "radarGraticule");
    }
  }
}, "drawGraticule"), rt = m$1((e, t, r, a) => {
  let o = t.length;
  for (let s = 0; s < o; s++) {
    let m = t[s].label, n = 2 * s * Math.PI / o - Math.PI / 2;
    e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * a.axisScaleFactor * Math.cos(n)).attr("y2", r * a.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), e.append("text").text(m).attr("x", r * a.axisLabelFactor * Math.cos(n)).attr("y", r * a.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
  }
}, "drawAxes");
function et(e, t, r, a, o, s, m) {
  let n = t.length, l = Math.min(m.width, m.height) / 2;
  r.forEach((c2, p2) => {
    if (c2.entries.length !== n) return;
    let d2 = c2.entries.map((u, h) => {
      let y = 2 * Math.PI * h / n - Math.PI / 2, b = at(u, a, o, l), _ = b * Math.cos(y), B = b * Math.sin(y);
      return {
        x: _,
        y: B
      };
    });
    s === "circle" ? e.append("path").attr("d", ot(d2, m.curveTension)).attr("class", `radarCurve-${p2}`) : s === "polygon" && e.append("polygon").attr("points", d2.map((u) => `${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${p2}`);
  });
}
m$1(et, "drawCurves");
function at(e, t, r, a) {
  let o = Math.min(Math.max(e, t), r);
  return a * (o - t) / (r - t);
}
m$1(at, "relativeRadius");
function ot(e, t) {
  let r = e.length, a = `M${e[0].x},${e[0].y}`;
  for (let o = 0; o < r; o++) {
    let s = e[(o - 1 + r) % r], m = e[o], n = e[(o + 1) % r], l = e[(o + 2) % r], c2 = {
      x: m.x + (n.x - s.x) * t,
      y: m.y + (n.y - s.y) * t
    }, p2 = {
      x: n.x - (l.x - m.x) * t,
      y: n.y - (l.y - m.y) * t
    };
    a += ` C${c2.x},${c2.y} ${p2.x},${p2.y} ${n.x},${n.y}`;
  }
  return `${a} Z`;
}
m$1(ot, "closedRoundCurve");
function nt(e, t, r, a) {
  if (!r) return;
  let o = (a.width / 2 + a.marginRight) * 3 / 4, s = -(a.height / 2 + a.marginTop) * 3 / 4, m = 20;
  t.forEach((n, l) => {
    let c2 = e.append("g").attr("transform", `translate(${o}, ${s + l * m})`);
    c2.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${l}`), c2.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
  });
}
m$1(nt, "drawLegend");
var I = {
  draw: K
};
var it = m$1((e, t) => {
  let r = "";
  for (let a = 0; a < e.THEME_COLOR_LIMIT; a++) {
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
}, "genIndexStyles"), st = m$1((e) => {
  let t = hl(), r = Er(), a = Le(t, r.themeVariables), o = Le(a.radar, e);
  return {
    themeVariables: a,
    radarOptions: o
  };
}, "buildRadarStyleOptions"), F = m$1(function() {
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
export {
  Tt as diagram
};
