import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-UQ4X76PG.98_CU59b.chunk.js';
import { d } from './vendor-min-mermaid~chunk-HEMZA52I.BbSrfYwL.chunk.js';
import { y } from './vendor-min-mermaid~chunk-E7D3ZFYC.1rZa3AGR.chunk.js';
import { u, g } from './vendor-min-mermaid~chunk-BW63ANAF.CGrRDopa.chunk.js';
import { L as Le$1 } from './vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { O as Or, Y as Yf, L as no, t as tt, S as Zr, T as co, _ as oc, k as kh, X as Xf, j as jf, Q as Qf, J as Jf, K as Kf, Z as Zf, I as Il, V as Vf } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
var $ = class {
    constructor(){
        this.nodes = [];
        this.levels = new Map;
        this.outerNodes = [];
        this.classes = new Map;
        this.setAccTitle = Xf;
        this.getAccTitle = jf;
        this.setDiagramTitle = Qf;
        this.getDiagramTitle = Jf;
        this.getAccDescription = Kf;
        this.setAccDescription = Zf;
    }
    static{
        m$1(this, "TreeMapDB");
    }
    getNodes() {
        return this.nodes;
    }
    getConfig() {
        let a = Il, n = /*#__PURE__*/ Or();
        return Le$1({
            ...a.treemap,
            ...n.treemap ?? {}
        });
    }
    addNode(a, n) {
        this.nodes.push(a), this.levels.set(a, n), n === 0 && (this.outerNodes.push(a), this.root ??= a);
    }
    getRoot() {
        return {
            name: "",
            children: this.outerNodes
        };
    }
    addClass(a, n) {
        let o = this.classes.get(a) ?? {
            id: a,
            styles: [],
            textStyles: []
        }, c = /*#__PURE__*/ n.replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
        c && c.forEach((l)=>{
            g(l) && (o?.textStyles ? o.textStyles.push(l) : o.textStyles = [
                l
            ]), o?.styles ? o.styles.push(l) : o.styles = [
                l
            ];
        }), this.classes.set(a, o);
    }
    getClasses() {
        return this.classes;
    }
    getStylesForClass(a) {
        return this.classes.get(a)?.styles ?? [];
    }
    clear() {
        Vf(), this.nodes = [], this.levels = new Map, this.outerNodes = [], this.classes = new Map, this.root = void 0;
    }
};
function fe(m) {
    if (!m.length) return [];
    let a = [], n = [];
    return m.forEach((o)=>{
        let c = {
            name: o.name,
            children: o.type === "Leaf" ? void 0 : []
        };
        for(c.classSelector = o?.classSelector, o?.cssCompiledStyles && (c.cssCompiledStyles = [
            o.cssCompiledStyles
        ]), o.type === "Leaf" && o.value !== void 0 && (c.value = o.value); n.length > 0 && n[n.length - 1].level >= o.level;)n.pop();
        if (n.length === 0) a.push(c);
        else {
            let l = n[n.length - 1].node;
            l.children ? l.children.push(c) : l.children = [
                c
            ];
        }
        o.type !== "Leaf" && n.push({
            node: c,
            level: o.level
        });
    }), a;
}
m$1(fe, "buildHierarchy");
var De = /*#__PURE__*/ m$1((m, a)=>{
    c(m, a);
    let n = [];
    for (let l of m.TreemapRows ?? [])l.$type === "ClassDefStatement" && a.addClass(l.className ?? "", l.styleText ?? "");
    for (let l of m.TreemapRows ?? []){
        let d = l.item;
        if (!d) continue;
        let u = l.indent ? parseInt(l.indent) : 0, W = /*#__PURE__*/ ve(d), r = d.classSelector ? a.getStylesForClass(d.classSelector) : [], P = r.length > 0 ? r.join(";") : void 0, T = {
            level: u,
            name: W,
            type: d.$type,
            value: d.value,
            classSelector: d.classSelector,
            cssCompiledStyles: P
        };
        n.push(T);
    }
    let o = /*#__PURE__*/ fe(n), c$1 = m$1((l, d)=>{
        for (let u of l)a.addNode(u, d), u.children && u.children.length > 0 && c$1(u.children, d + 1);
    }, "addNodesRecursively");
    c$1(o, 0);
}, "populate"), ve = /*#__PURE__*/ m$1((m)=>m.name ? String(m.name) : "", "getItemName"), O = {
    parser: {
        yy: void 0
    },
    parse: /*#__PURE__*/ m$1(async (m)=>{
        try {
            let n = await p("treemap", m);
            tt.debug("Treemap AST:", n);
            let o = O.parser?.yy;
            if (!(o instanceof $)) throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
            De(n, o);
        } catch (a) {
            throw tt.error("Error parsing treemap:", a), a;
        }
    }, "parse")
};
var we = 10, F = 10, E = 25, Ne = /*#__PURE__*/ m$1((m, a, n, o)=>{
    let c = o.db, l = /*#__PURE__*/ c.getConfig(), d$1 = l.padding ?? we, u$1 = /*#__PURE__*/ c.getDiagramTitle(), W = /*#__PURE__*/ c.getRoot(), { themeVariables: r } = Or();
    if (!W) return;
    let P = u$1 ? 30 : 0, T = /*#__PURE__*/ d(a), X = l.nodeWidth ? l.nodeWidth * F : 960, Y = l.nodeHeight ? l.nodeHeight * F : 500, G = X, q = Y + P;
    T.attr("viewBox", `0 0 ${G} ${q}`), Yf(T, q, G, l.useMaxWidth);
    let C;
    try {
        let e = l.valueFormat || ",";
        if (e === "$0,0") C = /*#__PURE__*/ m$1((t)=>"$" + no(",")(t), "valueFormat");
        else if (e.startsWith("$") && e.includes(",")) {
            let t = /*#__PURE__*/ /\.\d+/.exec(e), s = t ? t[0] : "";
            C = /*#__PURE__*/ m$1((f)=>"$" + no("," + s)(f), "valueFormat");
        } else if (e.startsWith("$")) {
            let t = /*#__PURE__*/ e.substring(1);
            C = /*#__PURE__*/ m$1((s)=>"$" + no(t || "")(s), "valueFormat");
        } else C = /*#__PURE__*/ no(e);
    } catch (e) {
        tt.error("Error creating format function:", e), C = /*#__PURE__*/ no(",");
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
    ]), he = /*#__PURE__*/ Zr().range([
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
    u$1 && T.append("text").attr("x", G / 2).attr("y", P / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(u$1);
    let U = /*#__PURE__*/ T.append("g").attr("transform", `translate(0, ${P})`).attr("class", "treemapContainer"), ye = /*#__PURE__*/ co(W).sum((e)=>e.value ?? 0).sort((e, t)=>(t.value ?? 0) - (e.value ?? 0)), J = /*#__PURE__*/ oc().size([
        X,
        Y
    ]).paddingTop((e)=>e.children && e.children.length > 0 ? E + F : 0).paddingInner(d$1).paddingLeft((e)=>e.children && e.children.length > 0 ? F : 0).paddingRight((e)=>e.children && e.children.length > 0 ? F : 0).paddingBottom((e)=>e.children && e.children.length > 0 ? F : 0).round(true)(ye), Se = /*#__PURE__*/ J.descendants().filter((e)=>e.children && e.children.length > 0), k = /*#__PURE__*/ U.selectAll(".treemapSection").data(Se).enter().append("g").attr("class", "treemapSection").attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    k.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", E).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e)=>e.depth === 0 ? "display: none;" : ""), k.append("clipPath").attr("id", (e, t)=>`clip-section-${a}-${t}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 12)).attr("height", E), k.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", (e, t)=>`treemapSection section${t}`).attr("fill", (e)=>A(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e)=>he(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t.nodeStyles + ";" + t.borderStyles.join(";");
    }), k.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", E / 2).attr("dominant-baseline", "middle").text((e)=>e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = "dominant-baseline: middle; font-size: 12px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", s = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + s.labelStyles.replace("color:", "fill:");
    }).each(function(e) {
        if (e.depth === 0) return;
        let t = /*#__PURE__*/ kh(this), s = e.data.name;
        t.text(s);
        let f = e.x1 - e.x0, S = 6, b;
        l.showValues !== false && e.value ? b = f - 10 - 30 - 10 - S : b = f - S - 6;
        let h = /*#__PURE__*/ Math.max(15, b), i = /*#__PURE__*/ t.node();
        if (i.getComputedTextLength() > h) {
            let g = "...", y = s;
            for(; y.length > 0;){
                if (y = /*#__PURE__*/ s.substring(0, y.length - 1), y.length === 0) {
                    t.text(g), i.getComputedTextLength() > h && t.text("");
                    break;
                }
                if (t.text(y + g), i.getComputedTextLength() <= h) break;
            }
        }
    }), l.showValues !== false && k.append("text").attr("class", "treemapSectionValue").attr("x", (e)=>e.x1 - e.x0 - 10).attr("y", E / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e)=>e.value ? C(e.value) : "").attr("font-style", "italic").attr("style", (e)=>{
        if (e.depth === 0) return "display: none;";
        let t = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", s = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + s.labelStyles.replace("color:", "fill:");
    });
    let be = /*#__PURE__*/ J.leaves(), R = /*#__PURE__*/ U.selectAll(".treemapLeafGroup").data(be).enter().append("g").attr("class", (e, t)=>`treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e)=>`translate(${e.x0},${e.y0})`);
    R.append("rect").attr("width", (e)=>e.x1 - e.x0).attr("height", (e)=>e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e)=>e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("style", (e)=>u({
            cssCompiledStyles: e.data.cssCompiledStyles
        }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e)=>e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("stroke-width", 3), R.append("clipPath").attr("id", (e, t)=>`clip-${a}-${t}`).append("rect").attr("width", (e)=>Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e)=>Math.max(0, e.y1 - e.y0 - 4)), R.append("text").attr("class", "treemapLabel").attr("x", (e)=>(e.x1 - e.x0) / 2).attr("y", (e)=>(e.y1 - e.y0) / 2).attr("style", (e)=>{
        let t = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + B(e.data.name) + ";", s = /*#__PURE__*/ u({
            cssCompiledStyles: e.data.cssCompiledStyles
        });
        return t + s.labelStyles.replace("color:", "fill:");
    }).attr("clip-path", (e, t)=>`url(#clip-${a}-${t})`).text((e)=>e.data.name).each(function(e) {
        let t = /*#__PURE__*/ kh(this), s = e.x1 - e.x0, f = e.y1 - e.y0, S = /*#__PURE__*/ t.node(), b = 4, w = s - 2 * b, h = f - 2 * b;
        if (w < 10 || h < 10) {
            t.style("display", "none");
            return;
        }
        let i = /*#__PURE__*/ parseInt(/*#__PURE__*/ t.style("font-size"), 10), D = 8, g = 28, y = .6, x = 6, z = 2;
        for(; S.getComputedTextLength() > w && i > D;)i--, t.style("font-size", `${i}px`);
        let N = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.min(g, /*#__PURE__*/ Math.round(i * y))), j = i + z + N;
        for(; j > h && i > D && (i--, N = /*#__PURE__*/ Math.max(x, /*#__PURE__*/ Math.min(g, /*#__PURE__*/ Math.round(i * y))), !(N < x && i === D));)t.style("font-size", `${i}px`), j = i + z + N;
        t.style("font-size", `${i}px`), (S.getComputedTextLength() > w || i < D || h < i) && t.style("display", "none");
    }), l.showValues !== false && R.append("text").attr("class", "treemapValue").attr("x", (t)=>(t.x1 - t.x0) / 2).attr("y", function(t) {
        return (t.y1 - t.y0) / 2;
    }).attr("style", (t)=>{
        let s = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + B(t.data.name) + ";", f = /*#__PURE__*/ u({
            cssCompiledStyles: t.data.cssCompiledStyles
        });
        return s + f.labelStyles.replace("color:", "fill:");
    }).attr("clip-path", (t, s)=>`url(#clip-${a}-${s})`).text((t)=>t.value ? C(t.value) : "").each(function(t) {
        let s = /*#__PURE__*/ kh(this), f = this.parentNode;
        if (!f) {
            s.style("display", "none");
            return;
        }
        let S = /*#__PURE__*/ kh(f).select(".treemapLabel");
        if (S.empty() || S.style("display") === "none") {
            s.style("display", "none");
            return;
        }
        let b = /*#__PURE__*/ parseFloat(/*#__PURE__*/ S.style("font-size")), w = 28, h = .6, i = 6, D = 2, g = /*#__PURE__*/ Math.max(i, /*#__PURE__*/ Math.min(w, /*#__PURE__*/ Math.round(b * h)));
        s.style("font-size", `${g}px`);
        let x = (t.y1 - t.y0) / 2 + b / 2 + D;
        s.attr("y", x);
        let z = t.x1 - t.x0, Te = t.y1 - t.y0 - 4, Ce = z - 2 * 4;
        s.node().getComputedTextLength() > Ce || x + g > Te || g < i ? s.style("display", "none") : s.style("display", null);
    });
    let xe = l.diagramPadding ?? 8;
    y(T, xe, "flowchart", l?.useMaxWidth || false);
}, "draw"), Le = /*#__PURE__*/ m$1(function(m, a) {
    return a.db.getClasses();
}, "getClasses"), ge = {
    draw: Ne,
    getClasses: Le
};
var $e = {
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
}, Fe = /*#__PURE__*/ m$1(({ treemap: m } = {})=>{
    let a = /*#__PURE__*/ Le$1($e, m);
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
}, "getStyles"), ue = Fe;
var pt = {
    parser: O,
    get db () {
        return new $;
    },
    renderer: ge,
    styles: ue
};
export { pt as diagram };
