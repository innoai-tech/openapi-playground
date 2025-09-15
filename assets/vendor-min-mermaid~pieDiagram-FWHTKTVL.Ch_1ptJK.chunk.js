import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-NPRLVKJ3.0d4ampid.chunk.js';
import { d } from './vendor-min-mermaid~chunk-L2GBLFDY.bt0T5m3z.chunk.js';
import { L as Lt, $ } from './vendor-min-mermaid~chunk-RGZHNYJS.BZGdGDWl.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { G as Go, U as Uo, H as Ho, N as No, j as jo, $ as $o, u as ur, R as Ro, P as Po, a as Pi } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt, I as ks, g as He, N as Ds } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
var X = Pi.pie, w = {
    sections: new Map,
    showData: false
}, f = w.sections, A = w.showData, pe = /*#__PURE__*/ structuredClone(X), me = /*#__PURE__*/ m$1(()=>structuredClone(pe), "getConfig"), de = /*#__PURE__*/ m$1(()=>{
    f = new Map, A = w.showData, Po();
}, "clear"), fe = /*#__PURE__*/ m$1(({ label: e, value: i })=>{
    if (i < 0) throw new Error(`"${e}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
    f.has(e) || (f.set(e, i), pt.debug(`added new section: ${e}, with value: ${i}`));
}, "addSection"), ge = /*#__PURE__*/ m$1(()=>f, "getSections"), De = /*#__PURE__*/ m$1((e)=>{
    A = e;
}, "setShowData"), ue = /*#__PURE__*/ m$1(()=>A, "getShowData"), g = {
    getConfig: me,
    clear: de,
    setDiagramTitle: $o,
    getDiagramTitle: jo,
    setAccTitle: No,
    getAccTitle: Ho,
    setAccDescription: Uo,
    getAccDescription: Go,
    addSection: fe,
    getSections: ge,
    setShowData: De,
    getShowData: ue
};
var Se = /*#__PURE__*/ m$1((e, i)=>{
    c(e, i), i.setShowData(e.showData), e.sections.map(i.addSection);
}, "populateDb"), Y = {
    parse: /*#__PURE__*/ m$1(async (e)=>{
        let i = await p("pie", e);
        pt.debug(i), Se(i, g);
    }, "parse")
};
var ye = /*#__PURE__*/ m$1((e)=>`
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
`, "getStyles"), ee = ye;
var he = /*#__PURE__*/ m$1((e)=>{
    let i = /*#__PURE__*/ [
        .../*#__PURE__*/ e.values()
    ].reduce((o, n)=>o + n, 0), T = /*#__PURE__*/ [
        .../*#__PURE__*/ e.entries()
    ].map(([o, n])=>({
            label: o,
            value: n
        })).filter((o)=>o.value / i * 100 >= 1).sort((o, n)=>n.value - o.value);
    return Ds().value((o)=>o.value)(T);
}, "createPieArcs"), Pe = /*#__PURE__*/ m$1((e, i, T, v)=>{
    pt.debug(`rendering pie chart
` + e);
    let o = v.db, n = /*#__PURE__*/ ur(), $$1 = /*#__PURE__*/ Lt(/*#__PURE__*/ o.getConfig(), n.pie), b = 40, s = 18, m = 4, c = 450, D = c, u = /*#__PURE__*/ d(i), l = /*#__PURE__*/ u.append("g");
    l.attr("transform", "translate(" + D / 2 + "," + c / 2 + ")");
    let { themeVariables: a } = n, [E] = $(a.pieOuterStrokeWidth);
    E ??= 2;
    let G = $$1.textPosition, d$1 = Math.min(D, c) / 2 - b, ie = /*#__PURE__*/ ks().innerRadius(0).outerRadius(d$1), re = /*#__PURE__*/ ks().innerRadius(d$1 * G).outerRadius(d$1 * G);
    l.append("circle").attr("cx", 0).attr("cy", 0).attr("r", d$1 + E / 2).attr("class", "pieOuterCircle");
    let S = /*#__PURE__*/ o.getSections(), oe = /*#__PURE__*/ he(S), ae = [
        a.pie1,
        a.pie2,
        a.pie3,
        a.pie4,
        a.pie5,
        a.pie6,
        a.pie7,
        a.pie8,
        a.pie9,
        a.pie10,
        a.pie11,
        a.pie12
    ], y = 0;
    S.forEach((t)=>{
        y += t;
    });
    let k = /*#__PURE__*/ oe.filter((t)=>(t.data.value / y * 100).toFixed(0) !== "0"), h = /*#__PURE__*/ He(ae);
    l.selectAll("mySlices").data(k).enter().append("path").attr("d", ie).attr("fill", (t)=>h(t.data.label)).attr("class", "pieCircle"), l.selectAll("mySlices").data(k).enter().append("text").text((t)=>(t.data.value / y * 100).toFixed(0) + "%").attr("transform", (t)=>"translate(" + re.centroid(t) + ")").style("text-anchor", "middle").attr("class", "slice"), l.append("text").text(/*#__PURE__*/ o.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
    let F = /*#__PURE__*/ [
        .../*#__PURE__*/ S.entries()
    ].map(([t, x])=>({
            label: t,
            value: x
        })), P = /*#__PURE__*/ l.selectAll(".legend").data(F).enter().append("g").attr("class", "legend").attr("transform", (t, x)=>{
        let O = s + m, se = O * F.length / 2, ce = 12 * s, le = x * O - se;
        return "translate(" + ce + "," + le + ")";
    });
    P.append("rect").attr("width", s).attr("height", s).style("fill", (t)=>h(t.label)).style("stroke", (t)=>h(t.label)), P.append("text").attr("x", s + m).attr("y", s - m).text((t)=>o.getShowData() ? `${t.label} [${t.value}]` : t.label);
    let ne = /*#__PURE__*/ Math.max(.../*#__PURE__*/ P.selectAll("text").nodes().map((t)=>t?.getBoundingClientRect().width ?? 0)), R = D + b + s + m + ne;
    u.attr("viewBox", `0 0 ${R} ${c}`), Ro(u, c, R, $$1.useMaxWidth);
}, "draw"), te = {
    draw: Pe
};
var Ue = {
    parser: Y,
    db: g,
    renderer: te,
    styles: ee
};
export { Ue as diagram };
