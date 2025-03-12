import { c } from "./vendor-min-mermaid~chunk-4KE642ED.C6bdL_Ha.chunk.js";
import { p } from "./vendor-min-mermaid~chunk-QTE35VYX.fmjZbY6j.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-3YFHLAX3.C4pQxDfi.chunk.js";
import { L as Le, S as S$1 } from "./vendor-min-mermaid~chunk-UENA7NWE.BvTIpTYh.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { v as vf, S as Sf, k as kf, T as Tf, B as Bf, w as wf, t as tt, W as Wl, ak as _c, aH as Vr, C as Cf, b as bf, aI as vc, d as dl } from "./vendor-min-mermaid~chunk-OR2G2HG5.CGE7obu6.chunk.js";
var K = dl.pie, A = {
  sections: /* @__PURE__ */ new Map(),
  showData: false
}, u = A.sections, w = A.showData, ce = /* @__PURE__ */ structuredClone(K), pe = /* @__PURE__ */ m$1(() => structuredClone(ce), "getConfig"), me = /* @__PURE__ */ m$1(() => {
  u = /* @__PURE__ */ new Map(), w = A.showData, bf();
}, "clear"), le = /* @__PURE__ */ m$1((param) => {
  let { label: e, value: i } = param;
  u.has(e) || (u.set(e, i), tt.debug(`added new section: ${e}, with value: ${i}`));
}, "addSection"), de = /* @__PURE__ */ m$1(() => u, "getSections"), fe = /* @__PURE__ */ m$1((e) => {
  w = e;
}, "setShowData"), ge = /* @__PURE__ */ m$1(() => w, "getShowData"), S = {
  getConfig: pe,
  clear: me,
  setDiagramTitle: wf,
  getDiagramTitle: Bf,
  setAccTitle: Tf,
  getAccTitle: kf,
  setAccDescription: Sf,
  getAccDescription: vf,
  addSection: le,
  getSections: de,
  setShowData: fe,
  getShowData: ge
};
var De = /* @__PURE__ */ m$1((e, i) => {
  c(e, i), i.setShowData(e.showData), e.sections.map(i.addSection);
}, "populateDb"), Q = {
  parse: /* @__PURE__ */ m$1(async (e) => {
    let i = await p("pie", e);
    tt.debug(i), De(i, S);
  }, "parse")
};
var ue = /* @__PURE__ */ m$1((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), X = ue;
var Se = /* @__PURE__ */ m$1((e) => {
  let i = /* @__PURE__ */ [
    .../* @__PURE__ */ e.entries()
  ].map((n) => ({
    label: n[0],
    value: n[1]
  })).sort((n, s) => s.value - n.value);
  return vc().value((n) => n.value)(i);
}, "createPieArcs"), ye = /* @__PURE__ */ m$1((e, i, ee, n) => {
  tt.debug(`rendering pie chart
` + e);
  let s = n.db, T = /* @__PURE__ */ Wl(), b = /* @__PURE__ */ Le(/* @__PURE__ */ s.getConfig(), T.pie), v = 40, a = 18, d$1 = 4, c2 = 450, y = c2, P = /* @__PURE__ */ d(i), p2 = /* @__PURE__ */ P.append("g");
  p2.attr("transform", "translate(" + y / 2 + "," + c2 / 2 + ")");
  let { themeVariables: r } = T, [$] = S$1(r.pieOuterStrokeWidth);
  $ ?? ($ = 2);
  let G = b.textPosition, f = Math.min(y, c2) / 2 - v, te = /* @__PURE__ */ _c().innerRadius(0).outerRadius(f), ie = /* @__PURE__ */ _c().innerRadius(f * G).outerRadius(f * G);
  p2.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + $ / 2).attr("class", "pieOuterCircle");
  let k = /* @__PURE__ */ s.getSections(), h = /* @__PURE__ */ Se(k), re = [
    r.pie1,
    r.pie2,
    r.pie3,
    r.pie4,
    r.pie5,
    r.pie6,
    r.pie7,
    r.pie8,
    r.pie9,
    r.pie10,
    r.pie11,
    r.pie12
  ], l = /* @__PURE__ */ Vr(re);
  p2.selectAll("mySlices").data(h).enter().append("path").attr("d", te).attr("fill", (o) => l(o.data.label)).attr("class", "pieCircle");
  let E = 0;
  k.forEach((o) => {
    E += o;
  }), p2.selectAll("mySlices").data(h).enter().append("text").text((o) => (o.data.value / E * 100).toFixed(0) + "%").attr("transform", (o) => "translate(" + ie.centroid(o) + ")").style("text-anchor", "middle").attr("class", "slice"), p2.append("text").text(/* @__PURE__ */ s.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  let x = /* @__PURE__ */ p2.selectAll(".legend").data(/* @__PURE__ */ l.domain()).enter().append("g").attr("class", "legend").attr("transform", (o, g) => {
    let D = a + d$1, ne = D * l.domain().length / 2, ae = 12 * a, se = g * D - ne;
    return "translate(" + ae + "," + se + ")";
  });
  x.append("rect").attr("width", a).attr("height", a).style("fill", l).style("stroke", l), x.data(h).append("text").attr("x", a + d$1).attr("y", a - d$1).text((o) => {
    let { label: g, value: D } = o.data;
    return s.getShowData() ? `${g} [${D}]` : g;
  });
  let oe = /* @__PURE__ */ Math.max(.../* @__PURE__ */ x.selectAll("text").nodes().map((o) => (o == null ? void 0 : o.getBoundingClientRect().width) ?? 0)), R = y + v + a + d$1 + oe;
  P.attr("viewBox", `0 0 ${R} ${c2}`), Cf(P, c2, R, b.useMaxWidth);
}, "draw"), Y = {
  draw: ye
};
var Ne = {
  parser: Q,
  db: S,
  renderer: Y,
  styles: X
};
export {
  Ne as diagram
};
