import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, g as za, i as QN, n as F, r as JN, s as aC, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var v = class extends iy {
	static {
		m(this, "InfoTokenBuilder");
	}
	static {
		F(this, "InfoTokenBuilder");
	}
	constructor() {
		super(["info", "showInfo"]);
	}
}, I = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new v(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new aC(), "ValueConverter")
} };
function M(f = Su) {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(f), JN), t = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), QN, I);
	return r.ServiceRegistry.register(t), {
		shared: r,
		Info: t
	};
}
m(M, "createInfoServices");
F(M, "createInfoServices");
export { M as n, I as t };
