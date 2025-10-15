import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, f as nC, g as za, n as F, r as JN, s as aC, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var R = class extends iy {
	static {
		m(this, "RadarTokenBuilder");
	}
	static {
		F(this, "RadarTokenBuilder");
	}
	constructor() {
		super(["radar-beta"]);
	}
}, M = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new R(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new aC(), "ValueConverter")
} };
function p(m$1 = Su) {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(m$1), JN), o = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), nC, M);
	return r.ServiceRegistry.register(o), {
		shared: r,
		Radar: o
	};
}
m(p, "createRadarServices");
F(p, "createRadarServices");
export { p as n, M as t };
