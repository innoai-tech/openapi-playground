import { S as Su, z as za, $ as $u, k as ku, F, b as nC, J as JN, a as aC, i as iy } from './vendor-min-mermaid~chunk-L6MQJ2ZU.Dhxm8h8M.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var R = class extends iy {
    static{
        m$1(this, "RadarTokenBuilder");
    }
    static{
        F(this, "RadarTokenBuilder");
    }
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
function p(m = Su) {
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
