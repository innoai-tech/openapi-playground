import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var n = /*#__PURE__*/ m$1((param)=>{
    let { flowchart: r } = param;
    let t = r?.subGraphTitleMargin?.top ?? 0, a = r?.subGraphTitleMargin?.bottom ?? 0, o = t + a;
    return {
        subGraphTitleTopMargin: t,
        subGraphTitleBottomMargin: a,
        subGraphTitleTotalMargin: o
    };
}, "getSubGraphTitleMargins");
export { n };
