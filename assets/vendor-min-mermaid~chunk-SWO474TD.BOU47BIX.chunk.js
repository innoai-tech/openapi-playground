import { z as za, A as Ac, E as Ec, U, K as KS, V as VS, N as Nc, J as JS, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.DXQY8UJ9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
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
        TokenBuilder: U(()=>new v, "TokenBuilder"),
        ValueConverter: U(()=>new JS, "ValueConverter")
    }
};
function M() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let r = za(Ac(f), VS), t = za(Ec({
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
