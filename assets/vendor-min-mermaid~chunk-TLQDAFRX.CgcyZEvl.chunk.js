import { f as f$1 } from './vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js';
import { q as qt } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { m as m$1, q } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var i = /*#__PURE__*/ q(/*#__PURE__*/ f$1());
var x = /*#__PURE__*/ m$1((n, t)=>{
    let e = /*#__PURE__*/ n.append("rect");
    if (e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), t.name && e.attr("name", t.name), t.rx && e.attr("rx", t.rx), t.ry && e.attr("ry", t.ry), t.attrs !== void 0) for(let r in t.attrs)e.attr(r, t.attrs[r]);
    return t.class && e.attr("class", t.class), e;
}, "drawRect"), g = /*#__PURE__*/ m$1((n, t)=>{
    let e = {
        x: t.startx,
        y: t.starty,
        width: t.stopx - t.startx,
        height: t.stopy - t.starty,
        fill: t.fill,
        stroke: t.stroke,
        class: "rect"
    };
    x(n, e).lower();
}, "drawBackgroundRect"), y = /*#__PURE__*/ m$1((n, t)=>{
    let e = /*#__PURE__*/ t.text.replace(qt, " "), r = /*#__PURE__*/ n.append("text");
    r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class && r.attr("class", t.class);
    let s = /*#__PURE__*/ r.append("tspan");
    return s.attr("x", t.x + t.textMargin * 2), s.text(e), r;
}, "drawText"), d = /*#__PURE__*/ m$1((n, t, e, r)=>{
    let s = /*#__PURE__*/ n.append("image");
    s.attr("x", t), s.attr("y", e);
    let a = /*#__PURE__*/ (0, i.sanitizeUrl)(r);
    s.attr("xlink:href", a);
}, "drawImage"), E = /*#__PURE__*/ m$1((n, t, e, r)=>{
    let s = /*#__PURE__*/ n.append("use");
    s.attr("x", t), s.attr("y", e);
    let a = /*#__PURE__*/ (0, i.sanitizeUrl)(r);
    s.attr("xlink:href", `#${a}`);
}, "drawEmbeddedImage"), h = /*#__PURE__*/ m$1(()=>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fill: "#EDF2AE",
        stroke: "#666",
        anchor: "start",
        rx: 0,
        ry: 0
    }), "getNoteRect"), f = /*#__PURE__*/ m$1(()=>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        "text-anchor": "start",
        style: "#666",
        textMargin: 0,
        rx: 0,
        ry: 0,
        tspan: true
    }), "getTextObj");
export { E, d, f, g, h, x, y };
