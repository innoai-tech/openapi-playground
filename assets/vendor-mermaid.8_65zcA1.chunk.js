import { Z as e, a as r, c as s, d as t, g as a, n as i, p as n, r as c, t as o, u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var l = class extends u {
	static {
		e(this, "PieTokenBuilder");
	}
	static {
		i(this, "PieTokenBuilder");
	}
	constructor() {
		super(["pie", "showData"]);
	}
}, d = class extends n {
	static {
		e(this, "PieValueConverter");
	}
	static {
		i(this, "PieValueConverter");
	}
	runCustomConverter(e, r, s) {
		if ("PIE_SECTION_LABEL" === e.name) return r.replace(/"/g, "").trim();
	}
}, v = { parser: {
	TokenBuilder: i(() => new l(), "TokenBuilder"),
	ValueConverter: i(() => new d(), "ValueConverter")
} };
function h(e = r) {
	let i = a(o(e), c), n = a(t({ shared: i }), s, v);
	return i.ServiceRegistry.register(n), {
		shared: i,
		Pie: n
	};
}
e(h, "createPieServices"), i(h, "createPieServices");
export { v as n, h as t };
