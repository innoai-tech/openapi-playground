import { z as za, $ as $u, k as ku, F, c as nC, J as JN, S as Su, b as aC, a as iy } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var R = class extends iy {
    static #_ = m$1(this, "RadarTokenBuilder");
    static #_2 = F(this, "RadarTokenBuilder");
    constructor(){
        super([
            "radar-beta"
        ]);
    }
}, M = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new R, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new aC, "ValueConverter")
    }
};
function p() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ $u(m), JN), o = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: r
    }), nC, M);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Radar: o
    };
}
m$1(p, "createRadarServices");
F(p, "createRadarServices");
export { M, p };
