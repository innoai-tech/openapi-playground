import { Z as e, a as r, d as s, g as n, i as a, n as t, r as o, s as i, t as c, u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var d = class extends u {
	static {
		e(this, "InfoTokenBuilder");
	}
	static {
		t(this, "InfoTokenBuilder");
	}
	constructor() {
		super(["info", "showInfo"]);
	}
}, f = { parser: {
	TokenBuilder: t(() => new d(), "TokenBuilder"),
	ValueConverter: t(() => new i(), "ValueConverter")
} };
function l(e = r) {
	let t = n(c(e), o), i = n(s({ shared: t }), a, f);
	return t.ServiceRegistry.register(i), {
		shared: t,
		Info: i
	};
}
e(l, "createInfoServices"), t(l, "createInfoServices");
export { l as n, f as t };
