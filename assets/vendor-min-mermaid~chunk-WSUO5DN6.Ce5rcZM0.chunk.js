import { S as Su, z as za, $ as $u, k as ku, F, Q as QN, J as JN, a as aC, i as iy } from './vendor-min-mermaid~chunk-L6MQJ2ZU.Dhxm8h8M.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends iy {
    static{
        m$1(this, "InfoTokenBuilder");
    }
    static{
        F(this, "InfoTokenBuilder");
    }
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
function M(f = Su) {
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
