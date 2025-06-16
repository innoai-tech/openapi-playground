import { z as za, A as Ac, E as Ec, U, K as KS, V as VS, N as Nc, J as JS, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.BvdmRkvX.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends Yg {
    static #_ = m$1(this, "InfoTokenBuilder");
    static #_2 = U(this, "InfoTokenBuilder");
    constructor(){
        super([
            "info",
            "showInfo"
        ]);
    }
}, I = {
    parser: {
        TokenBuilder: /*#__PURE__*/ U(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ U(()=>new JS, "ValueConverter")
    }
};
function M() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ac(f), VS), t = /*#__PURE__*/ za(/*#__PURE__*/ Ec({
        shared: r
    }), KS, I);
    return r.ServiceRegistry.register(t), {
        shared: r,
        Info: t
    };
}
m$1(M, "createInfoServices");
U(M, "createInfoServices");
export { I, M };
