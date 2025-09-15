import { u as ur } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var u = /*#__PURE__*/ m$1((t)=>{
    let { handDrawnSeed: s } = ur();
    return {
        fill: t,
        hachureAngle: 120,
        hachureGap: 4,
        fillWeight: 2,
        roughness: .7,
        stroke: t,
        seed: s
    };
}, "solidStateFill"), p = /*#__PURE__*/ m$1((t)=>{
    let s = /*#__PURE__*/ h([
        ...t.cssCompiledStyles || [],
        ...t.cssStyles || []
    ]);
    return {
        stylesMap: s,
        stylesArray: [
            ...s
        ]
    };
}, "compileStyles"), h = /*#__PURE__*/ m$1((t)=>{
    let s = new Map;
    return t.forEach((o)=>{
        let [n, r] = o.split(":");
        s.set(/*#__PURE__*/ n.trim(), r?.trim());
    }), s;
}, "styles2Map"), g = /*#__PURE__*/ m$1((t)=>t === "color" || t === "font-size" || t === "font-family" || t === "font-weight" || t === "font-style" || t === "text-decoration" || t === "text-align" || t === "text-transform" || t === "line-height" || t === "letter-spacing" || t === "word-spacing" || t === "text-shadow" || t === "text-overflow" || t === "white-space" || t === "word-wrap" || t === "word-break" || t === "overflow-wrap" || t === "hyphens", "isLabelStyle"), m = /*#__PURE__*/ m$1((t)=>{
    let { stylesArray: s } = p(t), o = [], n = [], r = [], l = [];
    return s.forEach((e)=>{
        let a = e[0];
        g(a) ? o.push(e.join(":") + " !important") : (n.push(e.join(":") + " !important"), a.includes("stroke") && r.push(e.join(":") + " !important"), a === "fill" && l.push(e.join(":") + " !important"));
    }), {
        labelStyles: /*#__PURE__*/ o.join(";"),
        nodeStyles: /*#__PURE__*/ n.join(";"),
        stylesArray: s,
        borderStyles: r,
        backgroundStyles: l
    };
}, "styles2String"), S = /*#__PURE__*/ m$1((t, s)=>{
    let { themeVariables: o, handDrawnSeed: n } = ur(), { nodeBorder: r, mainBkg: l } = o, { stylesMap: e } = p(t);
    return Object.assign({
        roughness: .7,
        fill: e.get("fill") || l,
        fillStyle: "hachure",
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: e.get("stroke") || r,
        seed: n,
        strokeWidth: e.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [
            0,
            0
        ],
        strokeLineDash: /*#__PURE__*/ d(/*#__PURE__*/ e.get("stroke-dasharray"))
    }, s);
}, "userNodeOverrides"), d = /*#__PURE__*/ m$1((t)=>{
    if (!t) return [
        0,
        0
    ];
    let s = /*#__PURE__*/ t.trim().split(/\s+/).map(Number);
    if (s.length === 1) {
        let r = isNaN(s[0]) ? 0 : s[0];
        return [
            r,
            r
        ];
    }
    let o = isNaN(s[0]) ? 0 : s[0], n = isNaN(s[1]) ? 0 : s[1];
    return [
        o,
        n
    ];
}, "getStrokeDashArray");
export { S, g, m, p, u };
