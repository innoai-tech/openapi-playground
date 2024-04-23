let t = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, e = (e2) => "" !== e2 && t.test(e2), o = (t2) => {
  let o2 = t2.split(","), l2 = {};
  for (let t3 of o2) {
    if ("" === t3)
      continue;
    let [o3, ...n2] = t3.split("="), r = n2.join("=");
    e(r) ? l2[o3] = atob(r) : l2[o3] = r;
  }
  return l2;
}, l = (t2) => {
  var e2, o2;
  return (null === (o2 = globalThis.document) || void 0 === o2 ? void 0 : null === (e2 = o2.querySelector(`meta[name="webapp:${t2}"]`)) || void 0 === e2 ? void 0 : e2.getAttribute("content")) || "";
}, n = () => {
  let t2 = o(l("base")), e2 = o(l("config"));
  return () => ({ ...t2, ...e2 });
};
export {
  n as c
};
