import{$ as e,$t as t,A as n,D as r,F as i,Ft as a,G as o,I as s,Jt as c,Lt as l,Mt as u,Q as d,Ut as f,Xt as p,_ as m,_n as h,bn as g,cn as _,dn as v,dt as y,en as b,et as x,gn as S,gt as C,hn as w,in as T,ln as E,nn as D,on as O,pn as ee,pt as k,qt as te,rn as ne,un as re,vn as ie,zt as ae}from"./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BpJofp52.chunk.js";import{$ as A,Q as j,tt as M}from"./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.j2WEiM7o.chunk.js";var oe=A((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isoWeek=r()})(e,function(){var e=`day`;return function(t,n,r){var i=j(function(t){return t.add(4-t.isoWeekday(),e)},`a`),a=n.prototype;a.isoWeekYear=function(){return i(this).year()},a.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),e);var n,a,o,s,c=i(this),l=(n=this.isoWeekYear(),a=this.$u,o=(a?r.utc:r)().year(n).startOf(`year`),s=4-o.isoWeekday(),o.isoWeekday()>4&&(s+=7),o.add(s,e));return c.diff(l,`week`)+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return n.p(e)===`isoweek`?r?this.date(this.date()-(this.isoWeekday()-1)).startOf(`day`):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf(`day`):o.bind(this)(e,t)}}})}),N=A((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_customParseFormat=r()})(e,function(){var e={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=j(function(e){return(e=+e)+(e>68?1900:2e3)},`a`),c=j(function(e){return function(t){this[e]=+t}},`f`),l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n}(e)}],u=j(function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},`u`),d=j(function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},`d`),f={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*e}],SS:[r,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,c(`seconds`)],ss:[i,c(`seconds`)],m:[i,c(`minutes`)],mm:[i,c(`minutes`)],H:[i,c(`hours`)],h:[i,c(`hours`)],HH:[i,c(`hours`)],hh:[i,c(`hours`)],D:[i,c(`day`)],DD:[r,c(`day`)],Do:[a,function(e){var t=o.ordinal;if(this.day=e.match(/\d+/)[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,``)===e&&(this.day=n)}],w:[i,c(`week`)],ww:[r,c(`week`)],M:[i,c(`month`)],MM:[r,c(`month`)],MMM:[a,function(e){var t=u(`months`),n=(u(`monthsShort`)||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[a,function(e){var t=u(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,c(`year`)],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,c(`year`)],Z:l,ZZ:l};function p(n){for(var r=n,i=o&&o.formats,a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})})).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=f[l],d=u&&u[0],p=u&&u[1];a[c]=p?{regex:d,parser:p}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}}(t),t}}return j(p,`l`),function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if(typeof s==`string`){var c=a[2]===!0,l=a[3]===!0,u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=p(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,m=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,x=l||0,S=u||0,C=d||0;return f?new Date(Date.UTC(_,v,g,b,x,S,C+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,x,S,C)):(y=new Date(_,v,g,b,x,S,C),m&&(y=r(y).week(m).toDate()),y)}catch{return new Date(``)}}(t,s,r,n),this.init(),d&&d!==!0&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date(``)),o={}}else if(s instanceof Array)for(var f=s.length,m=1;m<=f;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===f&&(this.$d=new Date(``))}else i.call(this,e)}}})}),se=A((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_advancedFormat=r()})(e,function(){return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),a=(e||`YYYY-MM-DDTHH:mm:ssZ`).replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case`Q`:return Math.ceil((t.$M+1)/3);case`Do`:return n.ordinal(t.$D);case`gggg`:return t.weekYear();case`GGGG`:return t.isoWeekYear();case`wo`:return n.ordinal(t.week(),`W`);case`w`:case`ww`:return i.s(t.week(),e===`w`?1:2,`0`);case`W`:case`WW`:return i.s(t.isoWeek(),e===`W`?1:2,`0`);case`k`:case`kk`:return i.s(String(t.$H===0?24:t.$H),e===`k`?1:2,`0`);case`X`:return Math.floor(t.$d.getTime()/1e3);case`x`:return t.$d.getTime();case`z`:return`[`+t.offsetName()+`]`;case`zzz`:return`[`+t.offsetName(`long`)+`]`;default:return e}});return r.bind(this)(a)}}})}),ce=A((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_duration=r()})(e,function(){var e,t,n=1e3,r=6e4,i=36e5,a=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=31536e6,c=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:s,months:c,days:a,hours:i,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},d=j(function(e){return e instanceof v},`c`),f=j(function(e,t,n){return new v(e,n,t.$l)},`f`),p=j(function(e){return t.p(e)+`s`},`m`),m=j(function(e){return e<0},`l`),h=j(function(e){return m(e)?Math.ceil(e):Math.floor(e)},`$`),g=j(function(e){return Math.abs(e)},`y`),_=j(function(e,t){return e?m(e)?{negative:!0,format:``+g(e)+t}:{negative:!1,format:``+e+t}:{negative:!1,format:``}},`v`),v=function(){function m(e,t,n){var r=this;if(this.$d={},this.$l=n,e===void 0&&(this.$ms=0,this.parseFromMilliseconds()),t)return f(e*u[p(t)],this);if(typeof e==`number`)return this.$ms=e,this.parseFromMilliseconds(),this;if(typeof e==`object`)return Object.keys(e).forEach(function(t){r.$d[p(t)]=e[t]}),this.calMilliseconds(),this;if(typeof e==`string`){var i=e.match(l);if(i){var a=i.slice(2).map(function(e){return e==null?0:Number(e)});return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}j(m,`l`);var g=m.prototype;return g.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce(function(t,n){return t+(e.$d[n]||0)*u[n]},0)},g.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/s),e%=s,this.$d.months=h(e/c),e%=c,this.$d.days=h(e/a),e%=a,this.$d.hours=h(e/i),e%=i,this.$d.minutes=h(e/r),e%=r,this.$d.seconds=h(e/n),e%=n,this.$d.milliseconds=e},g.toISOString=function(){var e=_(this.$d.years,`Y`),t=_(this.$d.months,`M`),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=_(n,`D`),i=_(this.$d.hours,`H`),a=_(this.$d.minutes,`M`),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var s=_(o,`S`),c=e.negative||t.negative||r.negative||i.negative||a.negative||s.negative,l=i.format||a.format||s.format?`T`:``,u=(c?`-`:``)+`P`+e.format+t.format+r.format+l+i.format+a.format+s.format;return u===`P`||u===`-P`?`P0D`:u},g.toJSON=function(){return this.toISOString()},g.format=function(e){var n=e||`YYYY-MM-DDTHH:mm:ss`,r={Y:this.$d.years,YY:t.s(this.$d.years,2,`0`),YYYY:t.s(this.$d.years,4,`0`),M:this.$d.months,MM:t.s(this.$d.months,2,`0`),D:this.$d.days,DD:t.s(this.$d.days,2,`0`),H:this.$d.hours,HH:t.s(this.$d.hours,2,`0`),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,`0`),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,`0`),SSS:t.s(this.$d.milliseconds,3,`0`)};return n.replace(o,function(e,t){return t||String(r[e])})},g.as=function(e){return this.$ms/u[p(e)]},g.get=function(e){var t=this.$ms,n=p(e);return n===`milliseconds`?t%=1e3:t=n===`weeks`?h(t/u[n]):this.$d[n],t||0},g.add=function(e,t,n){var r;return r=t?e*u[p(t)]:d(e)?e.$ms:f(e,this).$ms,f(this.$ms+r*(n?-1:1),this)},g.subtract=function(e,t){return this.add(e,t,!0)},g.locale=function(e){var t=this.clone();return t.$l=e,t},g.clone=function(){return f(this.$ms,this)},g.humanize=function(t){return e().add(this.$ms,`ms`).locale(this.$l).fromNow(!t)},g.valueOf=function(){return this.asMilliseconds()},g.milliseconds=function(){return this.get(`milliseconds`)},g.asMilliseconds=function(){return this.as(`milliseconds`)},g.seconds=function(){return this.get(`seconds`)},g.asSeconds=function(){return this.as(`seconds`)},g.minutes=function(){return this.get(`minutes`)},g.asMinutes=function(){return this.as(`minutes`)},g.hours=function(){return this.get(`hours`)},g.asHours=function(){return this.as(`hours`)},g.days=function(){return this.get(`days`)},g.asDays=function(){return this.as(`days`)},g.weeks=function(){return this.get(`weeks`)},g.asWeeks=function(){return this.as(`weeks`)},g.months=function(){return this.get(`months`)},g.asMonths=function(){return this.as(`months`)},g.years=function(){return this.get(`years`)},g.asYears=function(){return this.as(`years`)},m}(),y=j(function(e,t,n){return e.add(t.years()*n,`y`).add(t.months()*n,`M`).add(t.days()*n,`d`).add(t.hours()*n,`h`).add(t.minutes()*n,`m`).add(t.seconds()*n,`s`).add(t.milliseconds()*n,`ms`)},`p`);return function(n,r,i){e=i,t=i().$utils(),i.duration=function(e,t){return f(e,{$l:i.locale()},t)},i.isDuration=d;var a=r.prototype.add,o=r.prototype.subtract;r.prototype.add=function(e,t){return d(e)?y(this,e,1):a.bind(this)(e,t)},r.prototype.subtract=function(e,t){return d(e)?y(this,e,-1):o.bind(this)(e,t)}}})}),P=function(){var e=j(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],r=[1,27],i=[1,28],a=[1,29],o=[1,30],s=[1,31],c=[1,32],l=[1,33],u=[1,34],d=[1,9],f=[1,10],p=[1,11],m=[1,12],h=[1,13],g=[1,14],_=[1,15],v=[1,16],y=[1,19],b=[1,20],x=[1,21],S=[1,22],C=[1,23],w=[1,25],T=[1,35],E={trace:j(function(){},`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:j(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s];break}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:d,23:f,24:p,25:m,26:h,27:g,28:_,29:v,30:y,31:b,33:x,35:S,36:C,37:24,38:w,40:T},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:d,23:f,24:p,25:m,26:h,27:g,28:_,29:v,30:y,31:b,33:x,35:S,36:C,37:24,38:w,40:T},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:j(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:j(function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=0,d=2,f=1,p=a.slice.call(arguments,1),m=Object.create(this.lexer),h={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(h.yy[g]=this.yy[g]);m.setInput(e,h.yy),h.yy.lexer=m,h.yy.parser=this,typeof m.yylloc>`u`&&(m.yylloc={});var _=m.yylloc;a.push(_);var v=m.options&&m.options.ranges;typeof h.yy.parseError==`function`?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function y(e){n.length-=2*e,i.length-=e,a.length-=e}j(y,`popStack`);function b(){var e;return e=r.pop()||m.lex()||f,typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}j(b,`lex`);for(var x,S,C,w,T,E={},D,O,ee,k;;){if(C=n[n.length-1],this.defaultActions[C]?w=this.defaultActions[C]:((x===null||typeof x>`u`)&&(x=b()),w=o[C]&&o[C][x]),typeof w>`u`||!w.length||!w[0]){var te=``;for(D in k=[],o[C])this.terminals_[D]&&D>d&&k.push(`'`+this.terminals_[D]+`'`);te=m.showPosition?`Parse error on line `+(c+1)+`:
`+m.showPosition()+`
Expecting `+k.join(`, `)+`, got '`+(this.terminals_[x]||x)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(x==f?`end of input`:`'`+(this.terminals_[x]||x)+`'`),this.parseError(te,{text:m.match,token:this.terminals_[x]||x,line:m.yylineno,loc:_,expected:k})}if(w[0]instanceof Array&&w.length>1)throw Error(`Parse Error: multiple actions possible at state: `+C+`, token: `+x);switch(w[0]){case 1:n.push(x),i.push(m.yytext),a.push(m.yylloc),n.push(w[1]),x=null,S?(x=S,S=null):(l=m.yyleng,s=m.yytext,c=m.yylineno,_=m.yylloc,u>0&&u--);break;case 2:if(O=this.productions_[w[1]][1],E.$=i[i.length-O],E._$={first_line:a[a.length-(O||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(O||1)].first_column,last_column:a[a.length-1].last_column},v&&(E._$.range=[a[a.length-(O||1)].range[0],a[a.length-1].range[1]]),T=this.performAction.apply(E,[s,l,c,h.yy,w[1],i,a].concat(p)),typeof T<`u`)return T;O&&(n=n.slice(0,-1*O*2),i=i.slice(0,-1*O),a=a.slice(0,-1*O)),n.push(this.productions_[w[1]][0]),i.push(E.$),a.push(E._$),ee=o[n[n.length-2]][n[n.length-1]],n.push(ee);break;case 3:return!0}}return!0},`parse`)};E.lexer=function(){return{EOF:1,parseError:j(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:j(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:j(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:j(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:j(function(){return this._more=!0,this},`more`),reject:j(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:j(function(e){this.unput(this.match.slice(e))},`less`),pastInput:j(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:j(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:j(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:j(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:j(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}else return!1}else if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e===!1?!1:e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:j(function(){return this.next()||this.lex()},`lex`),begin:j(function(e){this.conditionStack.push(e)},`begin`),popState:j(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:j(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:j(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:j(function(e){this.begin(e)},`pushState`),stateStackSize:j(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:j(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}}();function D(){this.yy={}}return j(D,`Parser`),D.prototype=E,E.Parser=D,new D}();P.parser=P;var le=P,ue=M(r(),1),F=M(a(),1),de=M(oe(),1),fe=M(N(),1),pe=M(se(),1);F.default.extend(de.default),F.default.extend(fe.default),F.default.extend(pe.default);var me={friday:5,saturday:6},I=``,he=``,ge,_e=``,L=[],R=[],z=new Map,B=[],V=[],H=``,U=``,ve=[`active`,`done`,`crit`,`milestone`,`vert`],ye=[],W=!1,be=!1,G=`sunday`,K=`saturday`,xe=0,Se=j(function(){B=[],V=[],H=``,ye=[],et=0,rt=void 0,J=void 0,Y=[],I=``,he=``,U=``,ge=void 0,_e=``,L=[],R=[],W=!1,be=!1,xe=0,z=new Map,o(),G=`sunday`,K=`saturday`},`clear`),Ce=j(function(e){he=e},`setAxisFormat`),we=j(function(){return he},`getAxisFormat`),Te=j(function(e){ge=e},`setTickInterval`),Ee=j(function(){return ge},`getTickInterval`),De=j(function(e){_e=e},`setTodayMarker`),Oe=j(function(){return _e},`getTodayMarker`),ke=j(function(e){I=e},`setDateFormat`),Ae=j(function(){W=!0},`enableInclusiveEndDates`),je=j(function(){return W},`endDatesAreInclusive`),Me=j(function(){be=!0},`enableTopAxis`),Ne=j(function(){return be},`topAxisEnabled`),Pe=j(function(e){U=e},`setDisplayMode`),Fe=j(function(){return U},`getDisplayMode`),Ie=j(function(){return I},`getDateFormat`),Le=j(function(e){L=e.toLowerCase().split(/[\s,]+/)},`setIncludes`),Re=j(function(){return L},`getIncludes`),ze=j(function(e){R=e.toLowerCase().split(/[\s,]+/)},`setExcludes`),Be=j(function(){return R},`getExcludes`),Ve=j(function(){return z},`getLinks`),He=j(function(e){H=e,B.push(e)},`addSection`),Ue=j(function(){return B},`getSections`),We=j(function(){let e=st(),t=0;for(;!e&&t<10;)e=st(),t++;return V=Y,V},`getTasks`),Ge=j(function(e,t,n,r){let i=e.format(t.trim()),a=e.format(`YYYY-MM-DD`);return r.includes(i)||r.includes(a)?!1:n.includes(`weekends`)&&(e.isoWeekday()===me[K]||e.isoWeekday()===me[K]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(i)||n.includes(a)},`isInvalidDate`),Ke=j(function(e){G=e},`setWeekday`),qe=j(function(){return G},`getWeekday`),Je=j(function(e){K=e},`setWeekend`),Ye=j(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,F.default)(e.startTime):(0,F.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,F.default)(e.endTime):(0,F.default)(e.endTime,t,!0);let[o,s]=Xe(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),Xe=j(function(e,t,n,r,i){let a=!1,o=null;for(;e<=t;)a||(o=t.toDate()),a=Ge(e,n,r,i),a&&(t=t.add(1,`d`)),e=e.add(1,`d`);return[t,o]},`fixTaskDates`),Ze=j(function(e,t,n){if(n=n.trim(),j(e=>{let t=e.trim();return t===`x`||t===`X`},`isTimestampFormat`)(t)&&/^\d+$/.test(n))return new Date(Number(n));let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let e=null;for(let t of r.groups.ids.split(` `)){let n=X(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let i=(0,F.default)(n,t.trim(),!0);if(i.isValid())return i.toDate();{w.debug(`Invalid date:`+n),w.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),Qe=j(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),$e=j(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=X(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,F.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,F.default)(e),[s,c]=Qe(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),et=0,q=j(function(e){return e===void 0?(et+=1,`task`+et):e},`parseId`),tt=j(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};pt(r,i,ve);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=q(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=q(),i.startTime=Ze(void 0,I,r[0]),a=r[1];break;case 3:i.id=q(r[0]),i.startTime=Ze(void 0,I,r[1]),a=r[2];break;default:}return a&&(i.endTime=$e(i.startTime,I,a,W),i.manualEndTime=(0,F.default)(a,`YYYY-MM-DD`,!0).isValid(),Ye(i,I,R,L)),i},`compileData`),nt=j(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};pt(r,i,ve);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=q(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=q(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=q(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]};break;default:}return i},`parseData`),rt,J,Y=[],it={},at=j(function(e,t){let n={section:H,type:H,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=nt(J,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=J,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,n.order=xe,xe++;let i=Y.push(n);J=n.id,it[n.id]=i-1},`addTask`),X=j(function(e){let t=it[e];return Y[t]},`findTaskById`),ot=j(function(e,t){let n={section:H,type:H,description:e,task:e,classes:[]},r=tt(rt,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,rt=n,V.push(n)},`addTaskOrg`),st=j(function(){let e=j(function(e){let t=Y[e],n=``;switch(Y[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=X(t.prevTaskId).endTime;break;case`getStartDate`:n=Ze(void 0,I,Y[e].raw.startTime.startData),n&&(Y[e].startTime=n);break}return Y[e].startTime&&(Y[e].endTime=$e(Y[e].startTime,I,Y[e].raw.endTime.data,W),Y[e].endTime&&(Y[e].processed=!0,Y[e].manualEndTime=(0,F.default)(Y[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),Ye(Y[e],I,R,L))),Y[e].processed},`compileTask`),t=!0;for(let[n,r]of Y.entries())e(n),t&&=r.processed;return t},`compileTasks`),ct=j(function(e,t){let n=t;C().securityLevel!==`loose`&&(n=(0,ue.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){X(e)!==void 0&&(dt(e,()=>{window.open(n,`_self`)}),z.set(e,n))}),lt(e,`clickable`)},`setLink`),lt=j(function(e,t){e.split(`,`).forEach(function(e){let n=X(e);n!==void 0&&n.classes.push(t)})},`setClass`),ut=j(function(e,t,n){if(C().securityLevel!==`loose`||t===void 0)return;let r=[];if(typeof n==`string`){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<r.length;e++){let t=r[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),r[e]=t}}r.length===0&&r.push(e),X(e)!==void 0&&dt(e,()=>{m.runFunc(t,...r)})},`setClickFun`),dt=j(function(e,t){ye.push(function(){let n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener(`click`,function(){t()})},function(){let n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener(`click`,function(){t()})})},`pushFun`),ft={getConfig:j(()=>C().gantt,`getConfig`),clear:Se,setDateFormat:ke,getDateFormat:Ie,enableInclusiveEndDates:Ae,endDatesAreInclusive:je,enableTopAxis:Me,topAxisEnabled:Ne,setAxisFormat:Ce,getAxisFormat:we,setTickInterval:Te,getTickInterval:Ee,setTodayMarker:De,getTodayMarker:Oe,setAccTitle:s,getAccTitle:d,setDiagramTitle:k,getDiagramTitle:e,setDisplayMode:Pe,getDisplayMode:Fe,setAccDescription:i,getAccDescription:n,addSection:He,getSections:Ue,getTasks:We,addTask:at,findTaskById:X,addTaskOrg:ot,setIncludes:Le,getIncludes:Re,setExcludes:ze,getExcludes:Be,setClickEvent:j(function(e,t,n){e.split(`,`).forEach(function(e){ut(e,t,n)}),lt(e,`clickable`)},`setClickEvent`),setLink:ct,getLinks:Ve,bindFunctions:j(function(e){ye.forEach(function(t){t(e)})},`bindFunctions`),parseDuration:Qe,isInvalidDate:Ge,setWeekday:Ke,getWeekday:qe,setWeekend:Je};function pt(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}j(pt,`getTaskTags`);var Z=M(a(),1),mt=M(ce(),1);Z.default.extend(mt.default);var ht=j(function(){w.debug(`Something is calling, setConf, remove the call`)},`setConf`),gt={monday:f,tuesday:S,wednesday:b,thursday:g,friday:p,saturday:ne,sunday:u},_t=j((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),Q,$=1e4,vt={parser:le,db:ft,renderer:{setConf:ht,draw:j(function(e,n,r,i){let a=C().gantt,o=C().securityLevel,s;o===`sandbox`&&(s=E(`#i`+n));let u=E(o===`sandbox`?s.nodes()[0].contentDocument.body:`body`),d=o===`sandbox`?s.nodes()[0].contentDocument:document,f=d.getElementById(n);Q=f.parentElement.offsetWidth,Q===void 0&&(Q=1200),a.useWidth!==void 0&&(Q=a.useWidth);let p=i.db.getTasks(),m=[];for(let e of p)m.push(e.type);m=le(m);let g={},b=2*a.topPadding;if(i.db.getDisplayMode()===`compact`||a.displayMode===`compact`){let e={};for(let t of p)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=_t(e[n],t)+1;t+=r,b+=r*(a.barHeight+a.barGap),g[n]=r}}else{b+=p.length*(a.barHeight+a.barGap);for(let e of m)g[e]=p.filter(t=>t.type===e).length}f.setAttribute(`viewBox`,`0 0 `+Q+` `+b);let S=u.select(`[id="${n}"]`),k=h().domain([t(p,function(e){return e.startTime}),D(p,function(e){return e.endTime})]).rangeRound([0,Q-a.leftPadding-a.rightPadding]);function ne(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}j(ne,`taskCompare`),p.sort(ne),A(p,Q,b),x(S,b,Q,a.useMaxWidth),S.append(`text`).text(i.db.getDiagramTitle()).attr(`x`,Q/2).attr(`y`,a.titleTopMargin).attr(`class`,`titleText`);function A(e,t,n){let r=a.barHeight,o=r+a.barGap,s=a.topPadding,c=a.leftPadding,l=O().domain([0,m.length]).range([`#00B9FA`,`#F95002`]).interpolate(T);oe(o,s,c,t,n,e,i.db.getExcludes(),i.db.getIncludes()),se(c,s,t,n),M(e,o,s,c,r,l,t,n),ce(o,s,c,r,l),P(c,s,t,n)}j(A,`makeGantt`);function M(e,t,r,o,s,c,l){e.sort((e,t)=>e.vert===t.vert?0:e.vert?1:-1);let u=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));S.append(`g`).selectAll(`rect`).data(u).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,n){return n=e.order,n*t+r-2}).attr(`width`,function(){return l-a.rightPadding/2}).attr(`height`,t).attr(`class`,function(e){for(let[t,n]of m.entries())if(e.type===n)return`section section`+t%a.numberSectionStyles;return`section section0`}).enter();let d=S.append(`g`).selectAll(`rect`).data(e).enter(),f=i.db.getLinks();if(d.append(`rect`).attr(`id`,function(e){return e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?k(e.startTime)+o+.5*(k(e.endTime)-k(e.startTime))-.5*s:k(e.startTime)+o}).attr(`y`,function(e,n){return n=e.order,e.vert?a.gridLineStartPadding:n*t+r}).attr(`width`,function(e){return e.milestone?s:e.vert?.08*s:k(e.renderEndTime||e.endTime)-k(e.startTime)}).attr(`height`,function(e){return e.vert?p.length*(a.barHeight+a.barGap)+a.barHeight*2:s}).attr(`transform-origin`,function(e,n){return n=e.order,(k(e.startTime)+o+.5*(k(e.endTime)-k(e.startTime))).toString()+`px `+(n*t+r+.5*s).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of m.entries())e.type===r&&(n=t%a.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),e.vert&&(r=` vert `+r),r+=n,r+=` `+t,`task`+r}),d.append(`text`).attr(`id`,function(e){return e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,a.fontSize).attr(`x`,function(e){let t=k(e.startTime),n=k(e.renderEndTime||e.endTime);if(e.milestone&&(t+=.5*(k(e.endTime)-k(e.startTime))-.5*s,n=t+s),e.vert)return k(e.startTime)+o;let r=this.getBBox().width;return r>n-t?n+r+1.5*a.leftPadding>l?t+o-5:n+o+5:(n-t)/2+t+o}).attr(`y`,function(e,n){return e.vert?a.gridLineStartPadding+p.length*(a.barHeight+a.barGap)+60:(n=e.order,n*t+a.barHeight/2+(a.fontSize/2-2)+r)}).attr(`text-height`,s).attr(`class`,function(e){let t=k(e.startTime),n=k(e.endTime);e.milestone&&(n=t+s);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let o=0;for(let[t,n]of m.entries())e.type===n&&(o=t%a.numberSectionStyles);let c=``;return e.active&&(c=e.crit?`activeCritText`+o:`activeText`+o),e.done?c=e.crit?c+` doneCritText`+o:c+` doneText`+o:e.crit&&(c=c+` critText`+o),e.milestone&&(c+=` milestoneText`),e.vert&&(c+=` vertText`),r>n-t?n+r+1.5*a.leftPadding>l?i+` taskTextOutsideLeft taskTextOutside`+o+` `+c:i+` taskTextOutsideRight taskTextOutside`+o+` `+c+` width-`+r:i+` taskText taskText`+o+` `+c+` width-`+r}),C().securityLevel===`sandbox`){let e;e=E(`#i`+n);let t=e.nodes()[0].contentDocument;d.filter(function(e){return f.has(e.id)}).each(function(e){var n=t.querySelector(`#`+e.id),r=t.querySelector(`#`+e.id+`-text`);let i=n.parentNode;var a=t.createElement(`a`);a.setAttribute(`xlink:href`,f.get(e.id)),a.setAttribute(`target`,`_top`),i.appendChild(a),a.appendChild(n),a.appendChild(r)})}}j(M,`drawRects`);function oe(e,t,n,r,o,s,c,l){if(c.length===0&&l.length===0)return;let u,d;for(let{startTime:e,endTime:t}of s)(u===void 0||e<u)&&(u=e),(d===void 0||t>d)&&(d=t);if(!u||!d)return;if((0,Z.default)(d).diff((0,Z.default)(u),`year`)>5){w.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let f=i.db.getDateFormat(),p=[],m=null,h=(0,Z.default)(u);for(;h.valueOf()<=d;)i.db.isInvalidDate(h,f,c,l)?m?m.end=h:m={start:h,end:h}:m&&=(p.push(m),null),h=h.add(1,`d`);S.append(`g`).selectAll(`rect`).data(p).enter().append(`rect`).attr(`id`,e=>`exclude-`+e.start.format(`YYYY-MM-DD`)).attr(`x`,e=>k(e.start.startOf(`day`))+n).attr(`y`,a.gridLineStartPadding).attr(`width`,e=>k(e.end.endOf(`day`))-k(e.start.startOf(`day`))).attr(`height`,o-t-a.gridLineStartPadding).attr(`transform-origin`,function(t,r){return(k(t.start)+n+.5*(k(t.end)-k(t.start))).toString()+`px `+(r*e+.5*o).toString()+`px`}).attr(`class`,`exclude-range`)}j(oe,`drawExcludeDays`);function N(e,t,n,r){if(n<=0||e>t)return 1/0;let i=t-e,a=Z.default.duration({[r??`day`]:n}).asMilliseconds();return a<=0?1/0:Math.ceil(i/a)}j(N,`getEstimatedTickCount`);function se(e,t,n,r){let o=i.db.getDateFormat(),s=i.db.getAxisFormat(),u;u=s||(o===`D`?`%d`:a.axisFormat??`%Y-%m-%d`);let d=te(k).tickSize(-r+t+a.gridLineStartPadding).tickFormat(ae(u)),f=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(f!==null){let e=parseInt(f[1],10);if(isNaN(e)||e<=0)w.warn(`Invalid tick interval value: "${f[1]}". Skipping custom tick interval.`);else{let t=f[2],n=i.db.getWeekday()||a.weekday,r=k.domain(),o=r[0],s=r[1],u=N(o,s,e,t);if(u>$)w.warn(`The tick interval "${e}${t}" would generate ${u} ticks, which exceeds the maximum allowed (${$}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(t){case`millisecond`:d.ticks(re.every(e));break;case`second`:d.ticks(c.every(e));break;case`minute`:d.ticks(ie.every(e));break;case`hour`:d.ticks(_.every(e));break;case`day`:d.ticks(l.every(e));break;case`week`:d.ticks(gt[n].every(e));break;case`month`:d.ticks(v.every(e));break}}}if(S.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(d).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),i.db.topAxisEnabled()||a.topAxis){let n=ee(k).tickSize(-r+t+a.gridLineStartPadding).tickFormat(ae(u));if(f!==null){let e=parseInt(f[1],10);if(isNaN(e)||e<=0)w.warn(`Invalid tick interval value: "${f[1]}". Skipping custom tick interval.`);else{let t=f[2],r=i.db.getWeekday()||a.weekday,o=k.domain(),s=o[0],u=o[1];if(N(s,u,e,t)<=$)switch(t){case`millisecond`:n.ticks(re.every(e));break;case`second`:n.ticks(c.every(e));break;case`minute`:n.ticks(ie.every(e));break;case`hour`:n.ticks(_.every(e));break;case`day`:n.ticks(l.every(e));break;case`week`:n.ticks(gt[r].every(e));break;case`month`:n.ticks(v.every(e));break}}}S.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}j(se,`makeGrid`);function ce(e,t){let n=0,r=Object.keys(g).map(e=>[e,g[e]]);S.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(y.lineBreakRegex),n=-(t.length-1)/2,r=d.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=d.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,a.sectionFontSize).attr(`class`,function(e){for(let[t,n]of m.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%a.numberSectionStyles;return`sectionTitle`})}j(ce,`vertLabels`);function P(e,t,n,r){let o=i.db.getTodayMarker();if(o===`off`)return;let s=S.append(`g`).attr(`class`,`today`),c=new Date,l=s.append(`line`);l.attr(`x1`,k(c)+e).attr(`x2`,k(c)+e).attr(`y1`,a.titleTopMargin).attr(`y2`,r-a.titleTopMargin).attr(`class`,`today`),o!==``&&l.attr(`style`,o.replace(/,/g,`;`))}j(P,`drawToday`);function le(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}j(le,`checkUnique`)},`draw`)},styles:j(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,`getStyles`)};export{vt as t};