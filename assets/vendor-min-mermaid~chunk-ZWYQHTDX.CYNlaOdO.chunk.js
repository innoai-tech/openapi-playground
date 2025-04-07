import { z as za, A as Ac, E as Ec, U, H as HS, V as VS, N as Nc, X as Xg, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.DIxodtGj.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = class extends Yg {
    static #_ = m$1(this, "PieTokenBuilder");
    static #_2 = U(this, "PieTokenBuilder");
    constructor(){
        super([
            "pie",
            "showData"
        ]);
    }
}, P = class extends Xg {
    static #_ = m$1(this, "PieValueConverter");
    static #_2 = U(this, "PieValueConverter");
    runCustomConverter(i, r, a) {
        if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ U(()=>new C, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ U(()=>new P, "ValueConverter")
    }
};
function M() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ac(i), VS), a = /*#__PURE__*/ za(/*#__PURE__*/ Ec({
        shared: r
    }), HS, p);
    return r.ServiceRegistry.register(a), {
        shared: r,
        Pie: a
    };
}
m$1(M, "createPieServices");
U(M, "createPieServices");
export { M, p };
