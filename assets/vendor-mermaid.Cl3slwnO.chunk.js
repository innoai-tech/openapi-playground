import { Z as e, a as r, d as t, g as a, h as s, n as c, p as i, r as n, t as u, u as o } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var h = class extends o {
	static {
		e(this, "ArchitectureTokenBuilder");
	}
	static {
		c(this, "ArchitectureTokenBuilder");
	}
	constructor() {
		super(["architecture"]);
	}
}, l = class extends i {
	static {
		e(this, "ArchitectureValueConverter");
	}
	static {
		c(this, "ArchitectureValueConverter");
	}
	runCustomConverter(e, r, t) {
		return "ARCH_ICON" === e.name ? r.replace(/[()]/g, "").trim() : "ARCH_TEXT_ICON" === e.name ? r.replace(/["()]/g, "") : "ARCH_TITLE" === e.name ? r.replace(/[[\]]/g, "").trim() : void 0;
	}
}, d = { parser: {
	TokenBuilder: c(() => new h(), "TokenBuilder"),
	ValueConverter: c(() => new l(), "ValueConverter")
} };
function v(e = r) {
	let c = a(u(e), n), i = a(t({ shared: c }), s, d);
	return c.ServiceRegistry.register(i), {
		shared: c,
		Architecture: i
	};
}
e(v, "createArchitectureServices"), c(v, "createArchitectureServices");
export { d as n, v as t };
