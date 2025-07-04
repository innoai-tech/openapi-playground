import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { s } from './vendor-min-mermaid~chunk-VSLJSFIP.SXF1Vz2p.chunk.js';
import { p } from './vendor-min-mermaid~chunk-VXOIP5OY.BXgSrDug.chunk.js';
import { d } from './vendor-min-mermaid~chunk-ZKOTWRZ5.C1eh_0yz.chunk.js';
import { y } from './vendor-min-mermaid~chunk-R4PCWW2Q.2ongM6eO.chunk.js';
import { u, g } from './vendor-min-mermaid~chunk-LMGRA235.BXx4trp1.chunk.js';
import { L as Le$1 } from './vendor-min-mermaid~chunk-CRSA2SMT.DrUenSi3.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { Z as Zf, K as Kf, J as Jf, Q as Qf, j as jf, X as Xf, O as Or, Y as Yf, S as no, t as tt, T as Zr, _ as co, a0 as oc, k as kh, V as Vf, I as Il } from './vendor-min-mermaid~chunk-63ZE7VZ5.CfadwiGU.chunk.js';
var we = {
    nodes: [],
    levels: new Map,
    outerNodes: [],
    classes: new Map
}, D = new s(()=>structuredClone(we)), Ne = /*#__PURE__*/ m$1(()=>{
    let s = Il, a = /*#__PURE__*/ Or();
    return Le$1({
        ...s.treemap,
        ...a.treemap ?? {}
    });
}, "getConfig"), Le = /*#__PURE__*/ m$1(()=>D.records.nodes, "getNodes"), $e = /*#__PURE__*/ m$1((s, a)=>{
    let i = D.records;
    i.nodes.push(s), i.levels.set(s, a), a === 0 && i.outerNodes.push(s), a === 0 && !i.root && (i.root = s);
}, "addNode"), Fe = /*#__PURE__*/ m$1(()=>({
        name: "",
        children: D.records.outerNodes
    }), "getRoot"), Pe = /*#__PURE__*/ m$1((s, a)=>{
    let i = D.records.classes, n = i.get(s) ?? {
        id: s,
        styles: [],
        textStyles: []
    };
    i.set(s, n);
    let c = /*#__PURE__*/ a.replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    c && c.forEach((l)=>{
        g(l) && (n?.textStyles ? n.textStyles.push(l) : n.textStyles = [
            l
        ]), n?.styles ? n.styles.push(l) : n.styles = [
            l
        ];
    }), i.set(s, n);
}, "addClass"), ke = /*#__PURE__*/ m$1(()=>D.records.classes, "getClasses"), ze = /*#__PURE__*/ m$1((s)=>D.records.classes.get(s)?.styles ?? [], "getStylesForClass"), Ae = /*#__PURE__*/ m$1(()=>{
    Vf(), D.reset();
}, "clear"), v = {
    getNodes: Le,
    addNode: $e,
    getRoot: Fe,
    getConfig: Ne,
    clear: Ae,
    setAccTitle: Xf,
    getAccTitle: jf,
    setDiagramTitle: Qf,
    getDiagramTitle: Jf,
    getAccDescription: Kf,
    setAccDescription: Zf,
    addClass: Pe,
    getClasses: ke,
    getStylesForClass: ze
};
function ge(s) {
    if (!s.length) return [];
    let a = [], i = [];
    return s.forEach((n)=>{
        let c = {
            name: n.name,
            children: n.type === "Leaf" ? void 0 : []
        };
        for(c.classSelector = n?.classSelector, n?.cssCompiledStyles && (c.cssCompiledStyles = [
            n.cssCompiledStyles
        ]), n.type === "Leaf" && n.value !== void 0 && (c.value = n.value); i.length > 0 && i[i.length - 1].level >= n.level;)i.pop();
        if (i.length === 0) a.push(c);
        else {
            let l = i[i.length - 1].node;
            l.children ? l.children.push(c) : l.children = [
                c
            ];
        }
        n.type !== "Leaf" && i.push({
            node: c,
            level: n.level
        });
    }), a;
}
m$1(ge, "buildHierarchy");
var Ve = /*#__PURE__*/ m$1((s)=>{
    c(s, v);
    let a = [];
    for (let c of s.TreemapRows ?? [])c.$type === "ClassDefStatement" && v.addClass(c.className ?? "", c.styleText ?? "");
    for (let c of s.TreemapRows ?? []){
        let l = c.item;
        if (!l) continue;
        let S = c.indent ? parseInt(c.indent) : 0, F = /*#__PURE__*/ Me(l), P = l.classSelector ? v.getStylesForClass(l.classSelector) : [], r = P.length > 0 ? P.join(";") : void 0, k = {
            level: S,
            name: F,
            type: l.$type,
            value: l.value,
            classSelector: l.classSelector,
            cssCompiledStyles: r
        };
        a.push(k);
    }
    let i = /*#__PURE__*/ ge(a), n = m$1((c, l)=>{
        for (let S of c)v.addNode(S, l), S.children && S.children.length > 0 && n(S.children, l + 1);
    }, "addNodesRecursively");
    n(i, 0);
}, "populate"), Me = /*#__PURE__*/ m$1((s)=>s.name ? String(s.name) : "", "getItemName"), ue = {
    parse: /*#__PURE__*/ m$1(async (s)=>{
        try {
            let i = await p("treemap", s);
            tt.debug("Treemap AST:", i), Ve(i);
        } catch (a) {
            throw tt.error("Error parsing treemap:", a), a;
        }
    }, "parse")
};
var Ee = 10, $ = 10, R = 25, We = /*#__PURE__*/ m$1((s, a, i, n)=>{
    let c = n.db, l = /*#__PURE__*/ c.getConfig(), S = l.padding ?? Ee, F = /*#__PURE__*/ c.getDiagramTitle(), P = /*#__PURE__*/ c.getRoot(), { themeVariables: r } = Or();
    if (!P) return;
    let k = F ? 30 : 0, z = /*#__PURE__*/ d(a), X = l.nodeWidth ? l.nodeWidth * $ : 960, Y = l.nodeHeight ? l.nodeHeight * $ : 500, O = X, q = Y + k;
    z.attr("viewBox", `0 0 ${O} ${q}`), Yf(z, q, O, l.useMaxWidth);
    let b;
    try {
        let e = l.valueFormat || ",";
        if (e === "$0,0") b = /*#__PURE__*/ m$1((t)=>"$" + no(",")(t), "valueFormat");
        else if (e.startsWith("$") && e.includes(",")) {
            let t = /*#__PURE__*/ /\.\d+/.exec(e), o = t ? t[0] : "";
            b = /*#__PURE__*/ m$1((d)=>"$" + no("," + o)(d), "valueFormat");
        } else if (e.startsWith("$")) {
            let t = /*#__PURE__*/ e.substring(1);
            b = /*#__PURE__*/ m$1((o)=>"$" + no(t || "")(o), "valueFormat");
        } else b = /*#__PURE__*/ no(e);
    } catch (e) {
        tt.error("Error creating format function:", e), b = /*#__PURE__*/ no(",");
    }
    let A = /*#__PURE__*/ Zr().range([
        "transparent",
        r.cScale0,
        r.cScale1,
        r.cScale2,
        r.cScale3,
        r.cScale4,
        r.cScale5,
        r.cScale6,
        r.cScale7,
        r.cScale8,
        r.cScale9,
        r.cScale10,
        r.cScale11
    ]), Se = /*#__PURE__*/ Zr().range([
        "transparent",
        r.cScalePeer0,
        r.cScalePeer1,
        r.cScalePeer2,
        r.cScalePeer3,
        r.cScalePeer4,
        r.cScalePeer5,
        r.cScalePeer6,
        r.cScalePeer7,
        r.cScalePeer8,
        r.cScalePeer9,
        r.cScalePeer10,
        r.cScalePeer11
    ]), B = /*#__PURE__*/ Zr().range([
        r.cScaleLabel0,
        r.cScaleLabel1,
        r.cScaleLabel2,
        r.cScaleLabel3,
        r.cScaleLabel4,
        r.cScaleLabel5,
        r.cScaleLabel6,
        r.cScaleLabel7,
        r.cScaleLabel8,
        r.cScaleLabel9,
        r.cScaleLabel10,
        r.cScaleLabel11
    ]);
    F && z.append("text").attr("x", O / 2).attr("y", k / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(F);
    let U = /*#__PURE__*/ z.append("g").attr("transform", `translate(0, ${k})`).attr("class", "treemapContainer"), xe = /*#__PURE__*/ co(P).sum((e)=>e.value ?? 0).sort((e, t)=>(t.value ?? 0) - (e.value ?? 0)), J = /*#__PURE__*/ oc().size([
        X,
        Y
    ]).paddingTop((e)=>e.children && e.children.length > 0 ? R + $ : 0).paddingInner(S).paddingLeft((e)=>e.children && e.children.length > 0 ? $ : 0).paddingRight((e)=>e.children && e.children.length > 0 ? $ : 0).paddingBottom((e)=>e.children && e.children.length > 0 ? $ : 0).round(true)(xe), be = /*#__PURE__*/ J.descendants().filter((e)=>e.children && e.children.length > 0), V = /*#__PURE__*/ U.selectAll(".treemapSection").data(be).enter().append("g").attr("class", "treemapSection").attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    V.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", R).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e)=>e.depth === 0 ? "display: none;" : ""), V.append("clipPath").attr("id", (e, t)=>`clip-section-${a}-${t}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 12)).attr("height", R), V.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", (e, t)=>`treemapSection section${t}`).attr("fill", (e)=>A(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e)=>Se(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t.nodeStyles + ";" + t.borderStyles.join(";");
    }), V.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", R / 2).attr("dominant-baseline", "middle").text((e)=>e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = "dominant-baseline: middle; font-size: 12px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", o = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + o.labelStyles.replace("color:", "fill:");
    }).each(function(e) {
        if (e.depth === 0) return;
        let t = /*#__PURE__*/ kh(this), o = e.data.name;
        t.text(o);
        let d = e.x1 - e.x0, y = 6, h;
        l.showValues !== false && e.value ? h = d - 10 - 30 - 10 - y : h = d - y - 6;
        let g = /*#__PURE__*/ Math.max(15, h), m = /*#__PURE__*/ t.node();
        if (m.getComputedTextLength() > g) {
            let f = "...", u = o;
            for(; u.length > 0;){
                if (u = /*#__PURE__*/ o.substring(0, u.length - 1), u.length === 0) {
                    t.text(f), m.getComputedTextLength() > g && t.text("");
                    break;
                }
                if (t.text(u + f), m.getComputedTextLength() <= g) break;
            }
        }
    }), l.showValues !== false && V.append("text").attr("class", "treemapSectionValue").attr("x", (e)=>e.x1 - e.x0 - 10).attr("y", R / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e)=>e.value ? b(e.value) : "").attr("font-style", "italic").attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", o = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + o.labelStyles.replace("color:", "fill:");
    });
    let Ce = /*#__PURE__*/ J.leaves(), H = /*#__PURE__*/ U.selectAll(".treemapLeafGroup").data(Ce).enter().append("g").attr("class", (e, t)=>`treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    H.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e)=>e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("style", (e)=>u({
            cssCompiledStyles: e.data.cssCompiledStyles
        }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e)=>e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("stroke-width", 3), H.append("clipPath").attr("id", (e, t)=>`clip-${a}-${t}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e)=>Math.max(0, e.y1 - e.y0 - 4)), H.append("text").attr("class", "treemapLabel").attr("x", (e)=>(e.x1 - e.x0) / 2).attr("y", (e)=>(e.y1 - e.y0) / 2).attr("style", (e)=>{
        let t = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + B(e.data.name) + ";", o = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + o.labelStyles.replace("color:", "fill:");
    }).attr("clip-path", (e, t)=>`url(#clip-${a}-${t})`).text((e)=>e.data.name).each(function(e) {
        let t = /*#__PURE__*/ kh(this), o = e.x1 - e.x0, d = e.y1 - e.y0, y = /*#__PURE__*/ t.node(), h = 4, w = o - 2 * h, g = d - 2 * h;
        if (w < 10 || g < 10) {
            t.style("display", "none");
            return;
        }
        let m = /*#__PURE__*/ parseInt(/*#__PURE__*/ t.style("font-size"), 10), C = 8, f = 28, u = .6, x = 6, M = 2;
        for(; y.getComputedTextLength() > w && m > C;)m--, t.style("font-size", `${m}px`);
        let N = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.min(f, /*#__PURE__*/ Math.round(m * u))), _ = m + M + N;
        for(; _ > g && m > C && (m--, N = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.min(f, /*#__PURE__*/ Math.round(m * u))), !(N < x && m === C));)t.style("font-size", `${m}px`), _ = m + M + N;
        t.style("font-size", `${m}px`), (y.getComputedTextLength() > w || m < C || g < m) && t.style("display", "none");
    }), l.showValues !== false && H.append("text").attr("class", "treemapValue").attr("x", (t)=>(t.x1 - t.x0) / 2).attr("y", function(t) {
        return (t.y1 - t.y0) / 2;
    }).attr("style", (t)=>{
        let o = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + B(t.data.name) + ";", d = /*#__PURE__*/ u({
            cssCompiledStyles: t.data.cssCompiledStyles
        });
        return o + d.labelStyles.replace("color:", "fill:");
    }).attr("clip-path", (t, o)=>`url(#clip-${a}-${o})`).text((t)=>t.value ? b(t.value) : "").each(function(t) {
        let o = /*#__PURE__*/ kh(this), d = this.parentNode;
        if (!d) {
            o.style("display", "none");
            return;
        }
        let y = /*#__PURE__*/ kh(d).select(".treemapLabel");
        if (y.empty() || y.style("display") === "none") {
            o.style("display", "none");
            return;
        }
        let h = /*#__PURE__*/ parseFloat(/*#__PURE__*/ y.style("font-size")), w = 28, g = .6, m = 6, C = 2, f = /*#__PURE__*/ Math.max(m, /*#__PURE__*/ Math.min(w, /*#__PURE__*/ Math.round(h * g)));
        o.style("font-size", `${f}px`);
        let x = (t.y1 - t.y0) / 2 + h / 2 + C;
        o.attr("y", x);
        let M = t.x1 - t.x0, De = t.y1 - t.y0 - 4, ve = M - 2 * 4;
        o.node().getComputedTextLength() > ve || x + f > De || f < m ? o.style("display", "none") : o.style("display", null);
    });
    let Te = l.diagramPadding ?? 8;
    y(z, Te, "flowchart", l?.useMaxWidth || false);
}, "draw"), Re = /*#__PURE__*/ m$1(function(s, a) {
    return a.db.getClasses();
}, "getClasses"), ye = {
    draw: We,
    getClasses: Re
};
var Be = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelColor: "black",
    labelFontSize: "12px",
    valueFontSize: "10px",
    valueColor: "black",
    titleColor: "black",
    titleFontSize: "14px"
}, He = /*#__PURE__*/ m$1(function() {
    let { treemap: s } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let a = /*#__PURE__*/ Le$1(Be, s);
    return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
}, "getStyles"), he = He;
var Tt = {
    parser: ue,
    db: v,
    renderer: ye,
    styles: he
};
export { Tt as diagram };
