import { S as Su, z as za, $ as $u, k as ku, F, e as eC, J as JN, n as ny, i as iy } from './vendor-min-mermaid~chunk-2XYWPRAO.BaNo2f37.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var C = class extends iy {
    static{
        m$1(this, "PieTokenBuilder");
    }
    static{
        F(this, "PieTokenBuilder");
    }
    constructor(){
        super([
            "pie",
            "showData"
        ]);
    }
}, P = class extends ny {
    static{
        m$1(this, "PieValueConverter");
    }
    static{
        F(this, "PieValueConverter");
    }
    runCustomConverter(i, r, a) {
        if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new C, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new P, "ValueConverter")
    }
};
function M(i = Su) {
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
