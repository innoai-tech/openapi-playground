import { z as za, E as Ec, R as Rc, B, W as WC, a as BC, I as Ic, X as XC, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends qg {
    static #_ = m$1(this, "InfoTokenBuilder");
    static #_2 = B(this, "InfoTokenBuilder");
    constructor(){
        super([
            "info",
            "showInfo"
        ]);
    }
}, I = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new XC, "ValueConverter")
    }
};
function M() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(f), BC), t = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), WC, I);
    return r.ServiceRegistry.register(t), {
        shared: r,
        Info: t
    };
}
m$1(M, "createInfoServices");
B(M, "createInfoServices");
export { I, M };
