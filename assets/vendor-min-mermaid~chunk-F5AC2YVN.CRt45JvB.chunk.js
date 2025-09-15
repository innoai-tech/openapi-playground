import { R as Ro } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var y = /*#__PURE__*/ m$1((t, e, o, n)=>{
    t.attr("class", o);
    let { width: r, height: m, x: s, y: b } = w(t, e);
    Ro(t, m, r, n);
    let u = /*#__PURE__*/ x(s, b, r, m, e);
    t.attr("viewBox", u), pt.debug(`viewBox configured: ${u} with padding: ${e}`);
}, "setupViewPortForSVG"), w = /*#__PURE__*/ m$1((t, e)=>{
    let o = t.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    };
    return {
        width: o.width + e * 2,
        height: o.height + e * 2,
        x: o.x,
        y: o.y
    };
}, "calculateDimensionsWithPadding"), x = /*#__PURE__*/ m$1((t, e, o, n, r)=>`${t - r} ${e - r} ${o} ${n}`, "createViewBox");
export { y };
