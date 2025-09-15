import { S as Su, z as za, $ as $u, k as ku, F, t as tC, J as JN, n as ny, i as iy } from './vendor-min-mermaid~chunk-L6MQJ2ZU.Dhxm8h8M.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var A = class extends iy {
    static{
        m$1(this, "ArchitectureTokenBuilder");
    }
    static{
        F(this, "ArchitectureTokenBuilder");
    }
    constructor(){
        super([
            "architecture"
        ]);
    }
}, C = class extends ny {
    static{
        m$1(this, "ArchitectureValueConverter");
    }
    static{
        F(this, "ArchitectureValueConverter");
    }
    runCustomConverter(t, e, a) {
        if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
        if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
        if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
    }
}, v = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new A, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new C, "ValueConverter")
    }
};
function T(t = Su) {
    let e = /*#__PURE__*/ za(/*#__PURE__*/ $u(t), JN), a = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: e
    }), tC, v);
    return e.ServiceRegistry.register(a), {
        shared: e,
        Architecture: a
    };
}
m$1(T, "createArchitectureServices");
F(T, "createArchitectureServices");
export { T, v };
