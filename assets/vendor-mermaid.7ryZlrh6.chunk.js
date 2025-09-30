import { Z as e, a as r, d as a, g as s, m as t, n as i, r as n, s as c, t as o, u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var h = class extends u {
	static {
		e(this, "GitGraphTokenBuilder");
	}
	static {
		i(this, "GitGraphTokenBuilder");
	}
	constructor() {
		super(["gitGraph"]);
	}
}, G = { parser: {
	TokenBuilder: i(() => new h(), "TokenBuilder"),
	ValueConverter: i(() => new c(), "ValueConverter")
} };
function d(e = r) {
	let i = s(o(e), n), c = s(a({ shared: i }), t, G);
	return i.ServiceRegistry.register(c), {
		shared: i,
		GitGraph: c
	};
}
e(d, "createGitGraphServices"), i(d, "createGitGraphServices");
export { d as n, G as t };
