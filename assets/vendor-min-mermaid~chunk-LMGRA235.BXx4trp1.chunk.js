import { h as hh } from './vendor-min-mermaid~chunk-63ZE7VZ5.CfadwiGU.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var f = /*#__PURE__*/ m$1((t)=>{
    let { handDrawnSeed: e } = hh();
    return {
        fill: t,
        hachureAngle: 120,
        hachureGap: 4,
        fillWeight: 2,
        roughness: .7,
        stroke: t,
        seed: e
    };
}, "solidStateFill"), p = /*#__PURE__*/ m$1((t)=>{
    let e = /*#__PURE__*/ h([
        ...t.cssCompiledStyles || [],
        ...t.cssStyles || []
    ]);
    return {
        stylesMap: e,
        stylesArray: [
            ...e
        ]
    };
}, "compileStyles"), h = /*#__PURE__*/ m$1((t)=>{
    let e = new Map;
    return t.forEach((o)=>{
        let [n, i] = o.split(":");
        e.set(/*#__PURE__*/ n.trim(), i?.trim());
    }), e;
}, "styles2Map"), g = /*#__PURE__*/ m$1((t)=>t === "color" || t === "font-size" || t === "font-family" || t === "font-weight" || t === "font-style" || t === "text-decoration" || t === "text-align" || t === "text-transform" || t === "line-height" || t === "letter-spacing" || t === "word-spacing" || t === "text-shadow" || t === "text-overflow" || t === "white-space" || t === "word-wrap" || t === "word-break" || t === "overflow-wrap" || t === "hyphens", "isLabelStyle"), u = /*#__PURE__*/ m$1((t)=>{
    let { stylesArray: e } = p(t), o = [], n = [], i = [], l = [];
    return e.forEach((s)=>{
        let a = s[0];
        g(a) ? o.push(s.join(":") + " !important") : (n.push(s.join(":") + " !important"), a.includes("stroke") && i.push(s.join(":") + " !important"), a === "fill" && l.push(s.join(":") + " !important"));
    }), {
        labelStyles: /*#__PURE__*/ o.join(";"),
        nodeStyles: /*#__PURE__*/ n.join(";"),
        stylesArray: e,
        borderStyles: i,
        backgroundStyles: l
    };
}, "styles2String"), m = /*#__PURE__*/ m$1((t, e)=>{
    let { themeVariables: o, handDrawnSeed: n } = hh(), { nodeBorder: i, mainBkg: l } = o, { stylesMap: s } = p(t);
    return Object.assign({
        roughness: .7,
        fill: s.get("fill") || l,
        fillStyle: "hachure",
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: s.get("stroke") || i,
        seed: n,
        strokeWidth: s.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [
            0,
            0
        ]
    }, e);
}, "userNodeOverrides");
export { f, g, m, p, u };
