import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, g as za, l as iC, n as F, p as ny, r as JN, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var v = class extends iy {
	static {
		m(this, "TreemapTokenBuilder");
	}
	static {
		F(this, "TreemapTokenBuilder");
	}
	constructor() {
		super(["treemap"]);
	}
}, g = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, h = class extends ny {
	static {
		m(this, "TreemapValueConverter");
	}
	static {
		F(this, "TreemapValueConverter");
	}
	runCustomConverter(r, e, t) {
		if (r.name === "NUMBER2") return parseFloat(/* @__PURE__ */ e.replace(/,/g, ""));
		if (r.name === "SEPARATOR") return e.substring(1, e.length - 1);
		if (r.name === "STRING2") return e.substring(1, e.length - 1);
		if (r.name === "INDENTATION") return e.length;
		if (r.name === "ClassDef") {
			if (typeof e != "string") return e;
			let a = /* @__PURE__ */ g.exec(e);
			if (a) return {
				$type: "ClassDefStatement",
				className: a[1],
				styleText: a[2] || void 0
			};
		}
	}
};
function f(r) {
	let e = r.validation.TreemapValidator, t = r.validation.ValidationRegistry;
	if (t) {
		let a = { Treemap: /* @__PURE__ */ e.checkSingleRoot.bind(e) };
		t.register(a, e);
	}
}
m(f, "registerValidationChecks");
F(f, "registerValidationChecks");
var C = class {
	static {
		m(this, "TreemapValidator");
	}
	static {
		F(this, "TreemapValidator");
	}
	checkSingleRoot(r, e) {
		let t;
		for (let a of r.TreemapRows) a.item && (t === void 0 && a.indent === void 0 ? t = 0 : a.indent === void 0 ? e("error", "Multiple root nodes are not allowed in a treemap.", {
			node: a,
			property: "item"
		}) : t !== void 0 && t >= parseInt(a.indent, 10) && e("error", "Multiple root nodes are not allowed in a treemap.", {
			node: a,
			property: "item"
		}));
	}
}, V = {
	parser: {
		TokenBuilder: /* @__PURE__ */ F(() => new v(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ F(() => new h(), "ValueConverter")
	},
	validation: { TreemapValidator: /* @__PURE__ */ F(() => new C(), "TreemapValidator") }
};
function M(r = Su) {
	let e = /* @__PURE__ */ za(/* @__PURE__ */ $u(r), JN), t = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: e }), iC, V);
	return e.ServiceRegistry.register(t), f(t), {
		shared: e,
		Treemap: t
	};
}
m(M, "createTreemapServices");
F(M, "createTreemapServices");
export { V as n, M as t };
