import { z as za, E as Ec, R as Rc, B, b as zC, a as BC, I as Ic, X as XC, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var R = class extends qg {
    static #_ = m$1(this, "RadarTokenBuilder");
    static #_2 = B(this, "RadarTokenBuilder");
    constructor(){
        super([
            "radar-beta"
        ]);
    }
}, M = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new R, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new XC, "ValueConverter")
    }
};
function p() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(m), BC), o = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), zC, M);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Radar: o
    };
}
m$1(p, "createRadarServices");
B(p, "createRadarServices");
export { M, p };
