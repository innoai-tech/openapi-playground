import { z as za, $ as $u, k as ku, F, Q as QN, J as JN, S as Su, b as aC, a as iy } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends iy {
    static #_ = m$1(this, "InfoTokenBuilder");
    static #_2 = F(this, "InfoTokenBuilder");
    constructor(){
        super([
            "info",
            "showInfo"
        ]);
    }
}, I = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new aC, "ValueConverter")
    }
};
function M() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ $u(f), JN), t = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: r
    }), QN, I);
    return r.ServiceRegistry.register(t), {
        shared: r,
        Info: t
    };
}
m$1(M, "createInfoServices");
F(M, "createInfoServices");
export { I, M };
