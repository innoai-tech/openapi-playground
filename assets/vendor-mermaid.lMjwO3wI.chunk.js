import { Z as e, a as r, d as a, g as s, n as t, o as c, r as n, s as i, t as o, u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var k = class extends u {
	static {
		e(this, "PacketTokenBuilder");
	}
	static {
		t(this, "PacketTokenBuilder");
	}
	constructor() {
		super(["packet"]);
	}
}, d = { parser: {
	TokenBuilder: t(() => new k(), "TokenBuilder"),
	ValueConverter: t(() => new i(), "ValueConverter")
} };
function l(e = r) {
	let t = s(o(e), n), i = s(a({ shared: t }), c, d);
	return t.ServiceRegistry.register(i), {
		shared: t,
		Packet: i
	};
}
e(l, "createPacketServices"), t(l, "createPacketServices");
export { d as n, l as t };
