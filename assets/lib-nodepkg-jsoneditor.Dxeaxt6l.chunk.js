var e,t,n,r;import{c as i,I as a,j as l,a as o,r as s,s as d,b as c,d as p,e as u,f as h,T as y,F as f,o as x,t as v,g as m}from"./lib-nodepkg-vuekit.DYhStJ_e.chunk.js";import{o as g,J as b,g as w,S as $,a as k,b as S,r as C,s as O,E as E}from"./lib-nodepkg-typedef.BeCvLH0i.chunk.js";import{s as N,a as T,P as D,v as A,b as I,B as J}from"./lib-nodepkg-vueuikit.DD7Si8f3.chunk.js";import{I as R,a as _,m as M,b as L,c as P,d as W,e as j}from"./lib-nodepkg-vuematerial.mrNo1wrj.chunk.js";import{O as B,s as z,m as H,f as U,d as F,t as K,E as V,c as X,B as q,S as G}from"./vendor-rxjs.5nMifnmB.chunk.js";import{i as Q,g as Y,a as Z,b as ee,s as et,l as en,c as er,d as ei,e as ea}from"./vendor-innoai-tech-lodash.CuH5DnrJ.chunk.js";import{M as el}from"./lib-nodepkg-vuemarkdown.BcWj9JD_.chunk.js";class eo extends B{constructor(e,t){super(e=>{let t=this.#e.subscribe(e);return()=>{t.unsubscribe()}}),this.typedef=e,this.initials=t,this.#e.next(t)}static of(e,t){return new eo(e,t??("array"==e.type?[]:{}))}#e=new a({});isDirty(e,t){if(!Q(e)){let n=Y(this.initials,t);return Z(n)||n!==e}return!1}update(e,t,n){if(this.#t.next({}),0==e.length){this.#e.next(t);return}ee(t)?this.#e.next(r=>{let i=Y(r,e,n);t(i),et(r,e,i)}):this.#e.next(n=>{et(n,e,t)})}delete(e){0!=e.length&&this.#e.next(t=>{let n=en(e);if(er(n)){let r=e.slice(0,e.length-1),i=r.length>0?Y(t,r):t;if(ei(i)){i.splice(n,1);return}}let r=e.slice(0,e.length-1),i=r.length>0?Y(t,r):t;delete i[n]})}#t=new a({});get error$(){return this.#t}setError(e,t){let n=b.create(e);this.#t.next(e=>{null===t?delete e[n]:e[n]=t})}}let es=i(()=>new eo(g(),{})),ed=i(()=>({})),ec=N("span")({px:2,pos:"relative",display:"flex",alignItems:"center",gap:8,visibility:"hidden"}),ep=N("span",(e,t)=>{let{slots:n}=t;return e=>l(e,{children:l(ec,{"data-visible-on-hover":!0,children:n.default?.()})})})({display:"flex"}),eu=N(R)({transition:"none",width:24,height:24,rounded:12,[`& ${_}`]:{svg:{width:18,height:18}}});class eh extends a{static from(e){let t=new eh(!1);return s(e,z(e=>e?H(s(U(e,"focus"),K(()=>{t.show()})),s(U(e,"blur"),F(200),K(()=>{t.value&&t.hide()}))):V),d()),t}show(){this.next(!0)}hide(){this.next(!1)}}let ey=T({apply(e){let{elements:t,rects:n}=e;Object.assign(t.floating.style,{width:`${n.reference.width}px`})}}),ef=o((e,t)=>{let{emit:n,slots:r,render:i}=t,a=e.open$??new eh(!1),o=e=>{let t=[e.target,...e.composedPath()].find(e=>e?.hasAttribute?.("data-value"));if(t){let e=t.getAttribute("data-value");Z(e)||(n("selected",e),a.hide())}};return s(a,i(e=>l(D,{isOpen:e,onClickOutside:()=>a.hide(),onEscKeydown:()=>a.hide(),placement:"bottom-start",middleware:[ey],$content:l(ex,{onClick:o,children:r.content?.()}),children:r.default?.()?.[0]??null})))});o((e,t)=>{let{slots:n,render:r}=t,i=e.open$??new eh(!1);return s(i,r(e=>l(D,{isOpen:e,onClickOutside:()=>i.hide(),placement:"bottom-start",$content:l(ex,{children:n.content?.()}),children:n.default?.()?.[0]??null})))});let ex=N("div")({textStyle:"sys.body-small",pos:"relative",roundedBottom:"sm",containerStyle:"sys.surface-container-lowest",borderBottom:"1px solid",borderRight:"1px solid",borderLeft:"1px solid",borderColor:A("sys.outline-variant",I(.38))}),ev=N("div")({px:8,py:2,gap:8,display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"right",textStyle:"sys.body-small",cursor:"pointer",_hover:{containerStyle:"sys.surface-container"},_focus:{containerStyle:"sys.surface-container",outline:0}}),em=o((e,t)=>{let{slots:n,render:r}=t,i=new eh(!1);return s(i,r(t=>{let r=n.default?.()[0];return l(D,{isOpen:t,placement:e.placement??"left",$content:l(eb,{children:l(eg,{children:n.title()})}),children:r?c(r,{onMouseover:()=>{i.show()},onMouseout:()=>{i.hide()}}):null})}))}),eg=N("div")({py:4,px:12,rounded:"xs",shadow:"3",textStyle:"sys.body-small",containerStyle:"sys.on-surface",pos:"relative",zIndex:100}),eb=N("div")({px:8}),ew=N("span")({textStyle:"sys.label-small",fontWeight:"bold",fontFamily:"inherit",fontSize:12,lineHeight:24,wordBreak:"keep-all",whiteSpace:"nowrap",font:"code",opacity:.3}),e$=o((e,t)=>{let{slots:n}=t;return()=>p(eS,{"data-deprecated":e.deprecated,"data-optional":e.optional,"data-nullable":e.nullable,children:[n.leading&&l(ek,{"data-visible-on-hover":!0,children:n.leading()}),n.default?.()]})}),ek=N(ec)({position:"absolute",ml:-28}),eS=N("div")({position:"relative",display:"flex",alignItems:"center",textStyle:"sys.label-small",fontWeight:"bold",fontFamily:"inherit",wordBreak:"keep-all",whiteSpace:"nowrap",border:"1px solid",borderColor:"rgba(0,0,0,0)",fontSize:12,lineHeight:24,_deprecated:{textDecoration:"line-through"},_optional:{"&:after":{content:'"?"',color:"sys.secondary",opacity:.58}}}),eC=N("div")({position:"absolute",zIndex:1,left:0,opacity:.58,fontSize:10,lineHeight:10,top:0,"& > *":{display:"flex",alignItems:"center",gap:4,"&::before":{content:'"// "',font:"code"}}}),eO=N("div")({display:"block",fontSize:10,lineHeight:14,color:"sys.error"}),eE=N("div")({position:"relative",py:4,_hover:{containerStyle:"sys.surface-container","& [data-visible-on-hover]":{visibility:"visible"}},"&:focus-within":{containerStyle:"sys.surface-container"},_dirty:{bgColor:A("sys.warning-container",I(.38))},_error:{bgColor:"sys.error-container"},[`&:has(${ep})`]:{[`& > ${eO}`]:{display:"none"},_error:{bgColor:"inherit"}}}),eN=i(()=>({indent:0,$container:u(null)}),{name:"IntentContext"}),eT=h((e,t)=>{let{slots:n}=t,r=eN.use(),i=u(null),a=u(null);return()=>p(f,{children:[l(ew,{children:e.openToken}),n.leading?.(),p(y,{to:r.$container.value,children:[p(eI,{"data-indent":r.indent,children:[l(eA,{ref:i}),l(eJ,{ref:a}),a.value&&l(eN,{value:{$container:a,indent:1+(r.indent??0)},children:n.trailing?.()})]}),l(eR,{style:{paddingLeft:`${32*r.indent}px`,display:"flex"},children:l(ew,{children:e.closeToken})})]}),i.value&&l(eN,{value:{$container:i,indent:1+(r.indent??0)},children:n.default?.()})]})}),eD=o((e,t)=>{let{slots:n,render:r}=t,i=eN.use(),a=s(es.use().error$,r(t=>{let r=b.create(e.path),a=!e.viewOnly&&!!t[r];return p(eE,{"data-error":a,"data-dirty":e.dirty,style:{paddingLeft:`${32*i.indent}px`},children:[(e.title||e.description)&&l(eC,{style:{paddingLeft:`${32*i.indent}px`},children:e.description?l(em,{$title:l(e_,{children:l(el,{text:e.description})}),children:p("div",{children:[e.title," ",l(_,{path:M})]})}):l("span",{children:e.title})}),l(eR,{children:n.default?.()}),a&&l(eO,{children:`${t[r]}`})]})}));return()=>l(y,{to:i.$container.value,children:a})}),eA=N("div")({}),eI=N("section")({}),eJ=N("div")({}),eR=N("div")({display:"flex",alignItems:"start",pr:10}),e_=N("span")({display:"block",textStyle:"sys.body-small","& p":{my:1,wordBreak:"keep-all",whiteSpace:"nowrap",opacity:.7},"& code":{wordBreak:"keep-all",whiteSpace:"nowrap"}}),eM=N("form")({display:"flex",pos:"absolute",right:0,bottom:0,px:8});N("div")({display:"flex",flexDirection:"column",pos:"relative",textarea:{minW:400,outline:"none",border:"none",bg:"none",py:8,px:12}}),N("div")({display:"flex",alignItems:"center",gap:8,pos:"relative",px:8,input:{outline:"none",border:"none",bg:"none",minWidth:"10vw",py:8,px:12},[`& ${eM}`]:{pos:"relative",px:0}});let eL=w(function(){if(r)return n;r=1;var i=t?e:(t=1,e=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}),a={"text/plain":"Text","text/html":"Url",default:"Text"};return n=function(e,t){var n,r,l,o,s,d,c,p,u=!1;t||(t={}),l=t.debug||!1;try{if(s=i(),d=document.createRange(),c=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(p),d.selectNodeContents(p),c.addRange(d),!document.execCommand("copy"))throw Error("copy command was unsuccessful");u=!0}catch(i){l&&console.error("unable to copy using execCommand: ",i),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(i){l&&console.error("unable to copy using clipboardData: ",i),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,r),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(d):c.removeAllRanges()),p&&document.body.removeChild(p),s()}return u}}()),eP=o((e,t)=>()=>l(em,{$title:"复制当前节点为 JSON 字符串",children:l(eu,{type:"button",onClick:()=>eL(JSON.stringify(e.value,null,2)),children:l(_,{path:L})})}));class eW extends q{static from(e){let t=new eW("");return s(e,z(e=>e?s(U(e,"input"),K(e=>{t.next(e.target.value.trim())})):V),d()),t}}class ej extends G{static from(e){let t=new ej;return s(e,z(e=>e?H(s(U(e,"keypress"),K(e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),t.next({type:"COMMIT"}))})),s(U(e,"keydown"),K(e=>{switch(e.key){case"Tab":case"ArrowDown":e.target.getAttribute("data-options")&&(e.preventDefault(),t.next({type:"SELECT",direction:1}));break;case"ArrowUp":e.target.getAttribute("data-options")&&(e.preventDefault(),t.next({type:"SELECT",direction:-1}))}})),s(U(e,"keyup"),K(e=>{"Escape"===e.key&&t.next({type:"CANCEL"})}))):V),d()),t}}class eB extends B{static sync(e,t){return s(H(s(e,K(e=>{e&&e==b.create(t.path())&&t.editing$.show()})),s(t.editing$,F(1),K(n=>{n||e.disable(t.path())})),s(X([t.value$,e]),F(1),K(n=>{let[r,i]=n;Z(r)&&!i&&e.enable(t.path())}))),d())}#n=new q(null);constructor(){super(e=>{let t=this.#n.subscribe(e);return()=>t.unsubscribe()})}enable(e){this.#n.value||this.#n.next(b.create(e))}disable(e){this.#n.value===b.create(e)&&this.#n.next(null)}}let ez=i(()=>new eB),eH=o((e,t)=>{let n,{render:r}=t,i=x(null),o=x(null),c=x(null),u=ej.from(c),h=eW.from(c),y=ez.use(),f=eh.from(c),m=es.use();eB.sync(y,{editing$:f,value$:e.value$,path:()=>e.ctx.path});let g=()=>{if("enums"===e.typedef.type){let t=($.schemaProp(e.typedef,"enum")??[]).indexOf(e.value);if(t>-1)return t}return 0},b=new a({index:g()}),w=()=>{h.next(""),f.hide()},k=()=>{w(),b.next({index:g()}),Z(e.value)&&m.delete(e.ctx.path)},S=t=>{if("enums"===e.typedef.type){let n=$.schemaProp(e.typedef,"enum")??[];t??=n[b.value.index%n.length]}else t??=c.value?.value?c.value?.value:void 0;if(Z(t)){m.delete(e.ctx.path);return}let[n,r]=e.typedef.validate(t,{coerce:!0});if(n){m.setError(e.ctx.path,n.message);return}m.update(e.ctx.path,r),w()};return(e.allowRawJSON&&s(h,K(t=>{let n=t.trim();if(n.startsWith("{")&&n.endsWith("}")||n.startsWith("[")&&n.endsWith("]"))try{let t=JSON.parse(n);m.update(e.ctx.path,t),w()}catch(t){m.setError(e.ctx.path,"无效的 JSON 字符串")}}),d()),s(u,K(e=>{switch(e.type){case"SELECT":b.next(t=>{t.index+=e.direction});break;case"COMMIT":S();break;case"CANCEL":k()}}),d()),s(H(s(o,v(e=>{if(e){let t=new ResizeObserver(e=>{for(let t of e)t.contentBoxSize&&(n=t.contentBoxSize[0]?.blockSize)});return t.observe(e),()=>{t.disconnect()}}return()=>{}})),s(c,F(1),K(e=>{e&&(e?.focus(),e.value&&(e.selectionStart=0,e.selectionEnd=e.value.length))})),s(c,z(e=>{if(e){let t=n?n-2:e.getBoundingClientRect().height,r=e=>{e.style.height=`${t??0}px`,e.style.height=`${e.scrollHeight}px`};return setTimeout(()=>r(e)),H(s(U(e,"blur"),K(t=>{t.relatedTarget&&(o.value?.contains(t.relatedTarget)||i.value?.contains(t.relatedTarget))||(t.preventDefault(),S(e.value))})),s(U(e,"input"),K(e=>{r(e.target),h.next(e.target.value)})))}return V}))),d()),"enums"==e.typedef.type)?s(X([e.value$,f,b]),r(t=>{let[n,r,{index:a}]=t,s=$.schemaProp(e.typedef,"enum")??[],d=$.metaProp(e.typedef,"enumLabels")??[];return l(eV,{ref:o,onClick:()=>{f.show()},"data-type":typeof n,tabindex:0,children:r?l(ef,{onSelected:e=>{S(e)},open$:f,$content:l("div",{ref:i,children:s.map((e,t)=>l(eq,{"data-focus":a%s.length===t,value:e,label:d[t]}))}),children:l(eF,{children:l("input",{value:void 0==n?"":`${n}`,ref:c,"data-options":!0})})}):l(eK,{children:JSON.stringify(n)??"undefined"})})})):s(X([e.value$,f]),r(e=>{let[t,n]=e;return l(eV,{ref:o,onClick:()=>{f.show()},"data-type":typeof t,tabindex:0,onFocus:()=>{f.show()},children:n?l(D,{isOpen:!0,placement:"right-start",$content:p(eU,{ref:i,children:[l(eu,{type:"button",onClick:()=>u.next({type:"CANCEL"}),children:l(_,{path:P})}),l(eu,{type:"button",onClick:()=>u.next({type:"COMMIT"}),children:l(_,{path:W})})]}),children:l(eF,{children:l("textarea",{ref:c,rows:1,value:void 0==t?"":`${t}`})})}):l(eK,{children:JSON.stringify(t)??"undefined"})})}))}),eU=N("div")({borderRight:"1px solid",borderTop:"1px solid",borderBottom:"1px solid",borderColor:A("sys.outline-variant",I(.38)),containerStyle:"sys.surface-container-lowest",roundedRight:"sm",display:"flex",px:2,py:0,ml:-4}),eF=N("div")({width:"100%",maxWidth:"40vw",display:"flex",alignItems:"center",border:"1px solid",overflow:"hidden",borderColor:A("sys.outline-variant",I(.38)),opacity:.38,"&:hover":{opacity:1},"&:focus-within":{opacity:1},"& > textarea,input":{flex:1,rounded:"xs",containerStyle:"sys.surface-container-lowest",width:"100%",outline:"none",border:"none",px:8,py:0,m:0,fontSize:"inherit",color:"inherit",lineHeight:"inherit",overflow:"hidden",resize:"none","&[data-options]:focus":{roundedBottom:0}}}),eK=N("div")({border:"1px solid",borderColor:"rgba(0,0,0,0)",maxWidth:"40vw",width:"100%",overflow:"hidden",textOverflow:"ellipsis",_hover:{textOverflow:"clip",whiteSpace:"normal",wordBreak:"break-all"}}),eV=N("div")({wordBreak:"keep-all",whiteSpace:"nowrap",cursor:"pointer",display:"flex",alignItems:"center",font:"code",width:"100%",textStyle:"sys.label-small",fontSize:12,lineHeight:24,gap:8,_type__string:{color:"sys.primary"},_type__number:{color:"sys.primary"},_type__boolean:{color:"sys.warning"},_type__undefined:{color:"sys.error"}}),eX=N(ev)({[`& ${e$}`]:{textAlign:"left"}}),eq=h(e=>()=>p(eX,{"data-value":e.value,tabindex:0,children:[l(e$,{children:e.value}),e.label&&l(e_,{children:e.label})]})),eG=o((e,t)=>{let{emit:n}=t;return()=>l(em,{$title:"删除属性",children:l(eu,{type:"button",onClick:()=>n("remove"),children:l(_,{path:j})})})}),eQ=o((e,t)=>{let{render:n}=t,r=es.use(),i=ed.use();return s(e.value$,n(t=>l(eT,{openToken:"{",closeToken:"}",$leading:l(ep,{children:l(eP,{value:t})}),$trailing:l(eY,{ctx:e.ctx,onAdd:t=>{r.update([...e.ctx.path,t],void 0)},options:[...e.typedef.entries(t,e.ctx)].filter(e=>{let[n]=e;return!Object.hasOwn(t,n)}).map(e=>{let[t,n,r]=e;return{propName:String(t),typedef:r}})},"prop-input"),children:[...e.typedef.entries(t,e.ctx)].map(n=>{let[a,o,s]=n;if(!Object.hasOwn(t,a))return null;let d=[...e.ctx.path,a];return p(eD,{path:d,dirty:r.isDirty(o,d),title:$.metaProp(s,"title"),description:$.metaProp(s,"description"),children:[l(e$,{deprecated:$.schemaProp(s,"deprecated"),$leading:l(eG,{onRemove:()=>{r.delete(d)}}),children:String(a)}),p(ew,{children:[":","\xa0"]}),i.$value?.(s,o,{...e.ctx,path:d,branch:[...e.ctx.branch,o]})]})})})))}),eY=o((e,t)=>{let{emit:n,render:r}=t,i=x(null),o=ej.from(i),c=eW.from(i),u=eh.from(i),h=es.use(),y=new a({index:0}),f=()=>{u.hide(),c.next(""),i.value&&(i.value.value="",i.value.blur()),y.next({index:0})};s(c,K(t=>{let n=t.trim();if(n.startsWith("{")&&n.endsWith("}"))try{let t=JSON.parse(n);h.update(e.ctx.path,t),f()}catch(t){h.setError(e.ctx.path,"无效的 JSON 字符串")}}),d());let v=t=>{e.options?t??=e.options[y.value.index%e.options.length]?.propName:t??=c.value,t?(n("add",t),f()):h.setError([...e.ctx.path,$.RecordKey],"无效的属性值")};s(o,K(e=>{switch(e.type){case"SELECT":y.next(t=>{t.index+=e.direction});break;case"COMMIT":v();break;case"CANCEL":f()}}),d());let m=s(u,r(e=>l(eF,{children:l("input",{ref:i,type:"text",placeholder:"添加属性 (可粘贴 JSON 字符串)","data-options":e})})));return s(X([c,u,y,e.options$]),r(t=>{let[n,r,a,s]=t;return s?s.length>0?l(eD,{path:e.ctx.path,children:l(eV,{sx:{mx:-4},children:l(ef,{onSelected:e=>{v(e)},open$:u,$content:l("div",{children:s.map((e,t)=>n&&!e.propName.includes(n)?null:l(eZ,{propName:e.propName,typedef:e.typedef,"data-focus":t===a.index%s.length}))}),children:m})})}):null:l(eD,{path:[...e.ctx.path,$.RecordKey],children:l(eV,{sx:{mx:-4},children:l(D,{isOpen:r,placement:"right-start",$content:p(eU,{children:[l(eu,{type:"button",onClick:()=>o.next({type:"CANCEL"}),children:l(_,{path:P})}),l(eu,{type:"button",onClick:()=>o.next({type:"COMMIT"}),children:l(_,{path:W})})]}),children:l(eF,{children:l("input",{ref:i,type:"text",placeholder:"添加属性 (可粘贴 JSON 字符串)"})})})})})}))}),eZ=h(e=>()=>p(e0,{"data-value":e.propName,tabindex:0,children:[l(e$,{optional:$.schemaProp(e.typedef,$.optional),children:e.propName}),l(e_,{children:$.metaProp(e.typedef,"title")})]})),e0=N(ev)({[`& ${e$}`]:{textAlign:"left"}}),e1=o((e,t)=>{let{render:n}=t,r=es.use(),i=ed.use();return s(e.value$,n(t=>l(eT,{openToken:"[",closeToken:"]",$leading:l(ep,{children:l(eP,{value:t})}),$trailing:l(e2,{ctx:e.ctx,typedef:e.typedef,onAdd:t=>{r.update(e.ctx.path,e=>{e.push(t)},[])}}),children:[...e.typedef.entries(t,e.ctx)].map(t=>{let[n,a,o]=t,s=[...e.ctx.path,n];return p(eD,{path:s,dirty:r.isDirty(a,s),children:[l(e$,{$leading:l(e8,{onRemove:()=>{r.delete(s)}}),children:l(J,{sx:{opacity:.3,mr:"0.5em"},children:String(n)})}),i.$value?.(o,a,{...e.ctx,path:s,branch:[...e.ctx.branch,a]})]})})})))}),e2=o((e,t)=>{let{emit:n,render:r}=t,i=x(null),a=eW.from(i),o=ej.from(i),c=eh.from(i),u=es.use(),h=()=>{i.value&&(i.value.value="",i.value.blur())},y=t=>{if(t??=a.value){let[r,i]=$.schemaProp(e.typedef,"items").validate(t,{coerce:!0});if(r){u.setError(e.ctx.path,r);return}n("add",i)}else n("add",void 0);h()};s(a,K(t=>{let n=t.trim();if(n.startsWith("[")&&n.endsWith("]"))try{let t=JSON.parse(n);u.update(e.ctx.path,t),h()}catch(t){u.setError(e.ctx.path,"无效的 JSON 字符串")}if(n.startsWith("{")&&n.endsWith("}"))try{y(JSON.parse(n))}catch(t){u.setError(e.ctx.path,"无效的 JSON 字符串")}}),d()),s(o,K(e=>{switch(e.type){case"COMMIT":y();break;case"CANCEL":h()}}),d());let f=s(c,r(e=>l(D,{isOpen:e,placement:"right-start",$content:p(eU,{children:[l(eu,{type:"button",onClick:()=>o.next({type:"CANCEL"}),children:l(_,{path:P})}),l(eu,{type:"button",onClick:()=>o.next({type:"COMMIT"}),children:l(_,{path:W})})]}),children:l(eF,{children:l("input",{ref:i,type:"text",placeholder:"添加数组项 (可粘贴 JSON 字符串)"})})})));return()=>l(eD,{path:e.ctx.path,children:l(eV,{sx:{mx:-4},children:f})})}),e8=o((e,t)=>{let{emit:n}=t;return()=>l(em,{$title:"移除项",children:l(eu,{type:"button",onClick:()=>n("remove"),children:l(_,{path:j})})})}),e4=o((e,t)=>{let{render:n}=t,r=es.use(),i=ed.use();return s(e.value$,n(t=>l(eT,{openToken:"{",closeToken:"}",$leading:l(ep,{children:l(eP,{value:t})}),$trailing:l(eY,{ctx:e.ctx,onAdd:t=>{r.update([...e.ctx.path,t],void 0)}},"prop-input"),children:[...e.typedef.entries((()=>{let e={};for(let n of Object.keys(t??{}).toSorted())e[n]=t?.[n];return e})(),e.ctx)].map(n=>{let[a,o,s]=n;if(!Object.hasOwn(t,a))return null;let d=[...e.ctx.path,a];return p(eD,{path:d,dirty:r.isDirty(o,d),children:[l(e$,{$leading:l(eG,{onRemove:()=>{r.delete(d)}}),children:String(a)}),p(ew,{children:[":","\xa0"]}),i.$value?.(s,o,{...e.ctx,path:d,branch:[...e.ctx.branch,o]})]})})})))}),e3=o((e,t)=>{let{render:n}=t;return s(e.value$,n(t=>ei(t)?l(e1,{value:t,typedef:k(S()),ctx:e.ctx}):ea(t)?l(e4,{value:t,typedef:C(O(),S()),ctx:e.ctx}):l(eH,{value:t,typedef:S(),ctx:e.ctx,allowRawJSON:!0})))}),e5=(e,t,n)=>"object"==e.type||"intersection"==e.type||"union"==e.type&&$.schemaProp(e,"discriminator")?l(eQ,{typedef:e,value:t??{},ctx:n}):"union"==e.type&&Z($.schemaProp(e,"discriminator"))?l(eH,{typedef:e,value:t,ctx:n}):"record"==e.type?l(e4,{typedef:e,value:t,ctx:n}):"array"==e.type?l(e1,{typedef:e,value:t,ctx:n}):"any"==e.type||"unknown"==e.type?l(e3,{typedef:e,value:t,ctx:n}):l(eH,{typedef:e,value:t,ctx:n}),e7=o((e,t)=>{let{render:n}=t,r=es.use(),i=ed.use(),a=m(null);return s(r,n(e=>{let t=i.$value??e5;return l(ez,{children:l(ed,{value:{$value:i.$value??e5},children:p(e6,{children:[l("section",{ref:a}),a.value&&l(eN,{value:{indent:0,$container:a},children:l(eD,{path:[],viewOnly:!0,children:t(r.typedef,e,E)})})]})})})}))}),e6=N("div")({width:"100%",height:"100%",overflow:"auto",section:{display:"flex",flexDirection:"column",minWidth:"max-content"}});export{eo as J,es as a,e7 as b};
