import { z as za, $ as $u, k as ku, F, r as rC, J as JN, S as Su, b as aC, a as iy } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var h = class extends iy {
    static #_ = m$1(this, "GitGraphTokenBuilder");
    static #_2 = F(this, "GitGraphTokenBuilder");
    constructor(){
        super([
            "gitGraph"
        ]);
    }
}, m = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new h, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new aC, "ValueConverter")
    }
};
function v() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ $u(c), JN), i = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: r
    }), rC, m);
    return r.ServiceRegistry.register(i), {
        shared: r,
        GitGraph: i
    };
}
m$1(v, "createGitGraphServices");
F(v, "createGitGraphServices");
export { m, v };
