import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, g as za, m as rC, n as F, r as JN, s as aC, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var h = class extends iy {
	static {
		m(this, "GitGraphTokenBuilder");
	}
	static {
		F(this, "GitGraphTokenBuilder");
	}
	constructor() {
		super(["gitGraph"]);
	}
}, m$1 = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new h(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new aC(), "ValueConverter")
} };
function v(c = Su) {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(c), JN), i = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), rC, m$1);
	return r.ServiceRegistry.register(i), {
		shared: r,
		GitGraph: i
	};
}
m(v, "createGitGraphServices");
F(v, "createGitGraphServices");
export { v as n, m$1 as t };
