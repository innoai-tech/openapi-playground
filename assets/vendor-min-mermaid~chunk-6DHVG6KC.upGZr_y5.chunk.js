import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, c as eC, d as ku, g as za, n as F, p as ny, r as JN, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var C = class extends iy {
	static {
		m(this, "PieTokenBuilder");
	}
	static {
		F(this, "PieTokenBuilder");
	}
	constructor() {
		super(["pie", "showData"]);
	}
}, P = class extends ny {
	static {
		m(this, "PieValueConverter");
	}
	static {
		F(this, "PieValueConverter");
	}
	runCustomConverter(i, r, a) {
		if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
	}
}, p = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new C(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new P(), "ValueConverter")
} };
function M(i = Su) {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(i), JN), a = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), eC, p);
	return r.ServiceRegistry.register(a), {
		shared: r,
		Pie: a
	};
}
m(M, "createPieServices");
F(M, "createPieServices");
export { p as n, M as t };
