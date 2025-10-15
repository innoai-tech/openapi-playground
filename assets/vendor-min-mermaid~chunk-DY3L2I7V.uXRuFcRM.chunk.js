import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { a as Su, d as ku, g as za, n as F, o as ZN, r as JN, s as aC, t as $u, u as iy } from "./vendor-min-mermaid~chunk-2XYWPRAO.CwFdIpEg.chunk.js";
var v = class extends iy {
	static {
		m(this, "PacketTokenBuilder");
	}
	static {
		F(this, "PacketTokenBuilder");
	}
	constructor() {
		super(["packet"]);
	}
}, p = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new v(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new aC(), "ValueConverter")
} };
function M(k = Su) {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(k), JN), o = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), ZN, p);
	return r.ServiceRegistry.register(o), {
		shared: r,
		Packet: o
	};
}
m(M, "createPacketServices");
F(M, "createPacketServices");
export { p as n, M as t };
