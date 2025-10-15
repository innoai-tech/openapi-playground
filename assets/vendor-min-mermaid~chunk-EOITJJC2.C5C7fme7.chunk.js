import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, g as za, h as tC, n as F, p as ny, r as JN, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var A = class extends iy {
	static {
		m(this, "ArchitectureTokenBuilder");
	}
	static {
		F(this, "ArchitectureTokenBuilder");
	}
	constructor() {
		super(["architecture"]);
	}
}, C = class extends ny {
	static {
		m(this, "ArchitectureValueConverter");
	}
	static {
		F(this, "ArchitectureValueConverter");
	}
	runCustomConverter(t, e, a) {
		if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
		if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
		if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
	}
}, v = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new A(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new C(), "ValueConverter")
} };
function T(t = Su) {
	let e = /* @__PURE__ */ za(/* @__PURE__ */ $u(t), JN), a = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: e }), tC, v);
	return e.ServiceRegistry.register(a), {
		shared: e,
		Architecture: a
	};
}
m(T, "createArchitectureServices");
F(T, "createArchitectureServices");
export { v as n, T as t };
