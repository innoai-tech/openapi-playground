import { Z as e, a as r, d as a, f as s, g as t, n, r as i, s as d, t as c, u as o } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var u = class extends o {
	static {
		e(this, "RadarTokenBuilder");
	}
	static {
		n(this, "RadarTokenBuilder");
	}
	constructor() {
		super(["radar-beta"]);
	}
}, l = { parser: {
	TokenBuilder: n(() => new u(), "TokenBuilder"),
	ValueConverter: n(() => new d(), "ValueConverter")
} };
function v(e = r) {
	let n = t(c(e), i), d = t(a({ shared: n }), s, l);
	return n.ServiceRegistry.register(d), {
		shared: n,
		Radar: d
	};
}
e(v, "createRadarServices"), n(v, "createRadarServices");
export { v as n, l as t };
