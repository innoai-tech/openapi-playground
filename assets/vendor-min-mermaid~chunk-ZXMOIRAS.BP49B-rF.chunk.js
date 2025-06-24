import { z as za, E as Ec, R as Rc, B, H as HC, a as BC, I as Ic, X as XC, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var h = class extends qg {
    static #_ = m$1(this, "GitGraphTokenBuilder");
    static #_2 = B(this, "GitGraphTokenBuilder");
    constructor(){
        super([
            "gitGraph"
        ]);
    }
}, m = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new h, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new XC, "ValueConverter")
    }
};
function v() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(c), BC), i = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), HC, m);
    return r.ServiceRegistry.register(i), {
        shared: r,
        GitGraph: i
    };
}
m$1(v, "createGitGraphServices");
B(v, "createGitGraphServices");
export { m, v };
