import { z as za, E as Ec, R as Rc, B, V as VC, a as BC, I as Ic, c as zg, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = class extends qg {
    static #_ = m$1(this, "PieTokenBuilder");
    static #_2 = B(this, "PieTokenBuilder");
    constructor(){
        super([
            "pie",
            "showData"
        ]);
    }
}, P = class extends zg {
    static #_ = m$1(this, "PieValueConverter");
    static #_2 = B(this, "PieValueConverter");
    runCustomConverter(i, r, a) {
        if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new C, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new P, "ValueConverter")
    }
};
function M() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(i), BC), a = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), VC, p);
    return r.ServiceRegistry.register(a), {
        shared: r,
        Pie: a
    };
}
m$1(M, "createPieServices");
B(M, "createPieServices");
export { M, p };
