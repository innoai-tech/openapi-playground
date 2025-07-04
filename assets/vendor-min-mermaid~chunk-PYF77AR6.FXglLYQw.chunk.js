import { z as za, $ as $u, k as ku, F, e as eC, J as JN, S as Su, n as ny, a as iy } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = class extends iy {
    static #_ = m$1(this, "PieTokenBuilder");
    static #_2 = F(this, "PieTokenBuilder");
    constructor(){
        super([
            "pie",
            "showData"
        ]);
    }
}, P = class extends ny {
    static #_ = m$1(this, "PieValueConverter");
    static #_2 = F(this, "PieValueConverter");
    runCustomConverter(i, r, a) {
        if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new C, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new P, "ValueConverter")
    }
};
function M() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ $u(i), JN), a = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: r
    }), eC, p);
    return r.ServiceRegistry.register(a), {
        shared: r,
        Pie: a
    };
}
m$1(M, "createPieServices");
F(M, "createPieServices");
export { M, p };
