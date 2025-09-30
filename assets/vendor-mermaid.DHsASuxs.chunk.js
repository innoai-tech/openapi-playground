import { Z as e, a as r, d as t, g as a, l as i, n as s, p as n, r as o, t as l, u as d } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var m = class extends d {
	static {
		e(this, "TreemapTokenBuilder");
	}
	static {
		s(this, "TreemapTokenBuilder");
	}
	constructor() {
		super(["treemap"]);
	}
}, p = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, c = class extends n {
	static {
		e(this, "TreemapValueConverter");
	}
	static {
		s(this, "TreemapValueConverter");
	}
	runCustomConverter(e, r, t) {
		if ("NUMBER2" === e.name) return parseFloat(r.replace(/,/g, ""));
		if ("SEPARATOR" === e.name || "STRING2" === e.name) return r.substring(1, r.length - 1);
		if ("INDENTATION" === e.name) return r.length;
		if ("ClassDef" === e.name) {
			if ("string" != typeof r) return r;
			let e = p.exec(r);
			if (e) return {
				$type: "ClassDefStatement",
				className: e[1],
				styleText: e[2] || void 0
			};
		}
	}
};
function u(e) {
	let r = e.validation.TreemapValidator, t = e.validation.ValidationRegistry;
	if (t) {
		let e = { Treemap: r.checkSingleRoot.bind(r) };
		t.register(e, r);
	}
}
e(u, "registerValidationChecks"), s(u, "registerValidationChecks");
var T = class {
	static {
		e(this, "TreemapValidator");
	}
	static {
		s(this, "TreemapValidator");
	}
	checkSingleRoot(e, r) {
		let t;
		for (let a of e.TreemapRows) a.item && (void 0 === t && void 0 === a.indent ? t = 0 : void 0 === a.indent ? r("error", "Multiple root nodes are not allowed in a treemap.", {
			node: a,
			property: "item"
		}) : void 0 !== t && t >= parseInt(a.indent, 10) && r("error", "Multiple root nodes are not allowed in a treemap.", {
			node: a,
			property: "item"
		}));
	}
}, v = {
	parser: {
		TokenBuilder: s(() => new m(), "TokenBuilder"),
		ValueConverter: s(() => new c(), "ValueConverter")
	},
	validation: { TreemapValidator: s(() => new T(), "TreemapValidator") }
};
function f(e = r) {
	let s = a(l(e), o), n = a(t({ shared: s }), i, v);
	return s.ServiceRegistry.register(n), u(n), {
		shared: s,
		Treemap: n
	};
}
e(f, "createTreemapServices"), s(f, "createTreemapServices");
export { v as n, f as t };
