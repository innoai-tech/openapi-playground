import { S as Su, z as za, $ as $u, k as ku, F, r as rC, J as JN, a as aC, i as iy } from './vendor-min-mermaid~chunk-L6MQJ2ZU.DtxICVSY.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var h = class extends iy {
    static{
        m$1(this, "GitGraphTokenBuilder");
    }
    static{
        F(this, "GitGraphTokenBuilder");
    }
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
function v(c = Su) {
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
