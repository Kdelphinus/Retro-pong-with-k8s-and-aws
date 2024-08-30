var Xu=Object.defineProperty;var Yo=i=>{throw TypeError(i)};var qu=(i,t,e)=>t in i?Xu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Xe=(i,t,e)=>qu(i,typeof t!="symbol"?t+"":t,e),jo=(i,t,e)=>t.has(i)||Yo("Cannot "+e);var ae=(i,t,e)=>(jo(i,t,"read from private field"),e?e.call(i):t.get(i)),Qe=(i,t,e)=>t.has(i)?Yo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Qr=(i,t,e,n)=>(jo(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yu=()=>{const i=document.getElementById("background"),t=["1","6","6-5","12","3","9","10","1","8","11"],e=["98","93","93-5","87","96","90","89","98","91","88"],n=["10","5","65","76","35","60","1","75","20","50"],s=["30","25","85","76","35","60","20","75","40","50"],r=["50","20","75","1","60","35","76","65","5","10"],a=["50","40","75","20","60","35","76","85","25","30"],o=["w h-xxxs","w h-xs","w h-xs","w h-xs","w h-xxxs","w h-xxxs","w h-xs","w h-m","w h-xxxs","w h-xxxs"],l=["c-mint","c-mint","c-mint","c-mint","c-pink","c-pink","c-pink","c-white","c-white","c-white"];for(let c=0;c<10;c+=1){const d=document.createElement("div"),h=document.createElement("div"),f=document.createElement("div"),m=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div");d.className=`ele l${t[c]} t${n[c]} ${o[c]} ${l[c]}`,h.className=`ele l${t[c]} t${s[c]} ${o[c]} ${l[c]} d1`,f.className=`ele l${t[c]} t${s[c]} ${o[c]} ${l[c]} d2`,d.appendChild(m),h.appendChild(g),f.appendChild(v),i.appendChild(d),i.appendChild(h),i.appendChild(f);const p=document.createElement("div"),u=document.createElement("div"),b=document.createElement("div"),y=document.createElement("div"),M=document.createElement("div"),L=document.createElement("div");p.className=`ele l${e[c]} t${r[c]} ${o[c]} ${l[c]}`,u.className=`ele l${e[c]} t${a[c]} ${o[c]} ${l[c]} d1`,b.className=`ele l${e[c]} t${a[c]} ${o[c]} ${l[c]} d2`,p.appendChild(y),u.appendChild(M),b.appendChild(L),i.appendChild(p),i.appendChild(u),i.appendChild(b)}};var ji,Un,Ki,Zi,Ur;class Jt{static init(){const t=Me.getAccessToken();t?ae(this,Un).set("Authorization",`Bearer ${t}`):ae(this,Un).delete("Authorization")}static showLoading(){return setTimeout(()=>{document.getElementById("loading").classList.remove("d-none")},ae(this,Ur))}static hideLoading(t){clearTimeout(t),document.getElementById("loading").classList.add("d-none")}static isAuth(t){return!t.startsWith("/login")||t==="/login/logout/"}static async get(t,e=1){const n=this.showLoading(),s=await fetch(`${ae(this,ji)}${t}`,{method:"GET",headers:ae(this,Un),credentials:ae(this,Ki)});return this.hideLoading(n),s.ok?s.json():this.isAuth(t)&&s.status===401&&e<=ae(this,Zi)?(await Me.reissueAccessToken(),this.get(t,e+1)):s.json().then(r=>{throw new Error(r.error||r.detail||"")})}static async post(t,e={},n=1){const s=this.showLoading(),r=await fetch(`${ae(this,ji)}${t}`,{method:"POST",headers:ae(this,Un),credentials:ae(this,Ki),body:JSON.stringify(e)});return this.hideLoading(s),r.ok?r.json().catch(()=>""):this.isAuth(t)&&r.status===401&&n<=ae(this,Zi)?(await Me.reissueAccessToken(),this.post(t,e,n+1)):r.json().then(a=>{throw new Error(a.error||a.detail||"")})}static async patch(t,e={},n="",s=1){const r=this.showLoading(),a=n!=="image"?ae(this,Un):{Authorization:`Bearer ${Me.getAccessToken()}`},o=n==="image"?e:JSON.stringify(e),l=await fetch(`${ae(this,ji)}${t}`,{method:"PATCH",headers:a,credentials:ae(this,Ki),body:o});if(this.hideLoading(r),!l.ok)return this.isAuth(t)&&l.status===401&&s<=ae(this,Zi)?(await Me.reissueAccessToken(),this.patch(t,e,n,s+1)):l.json().then(d=>{throw new Error(d.error||d.detail||"")});const c=await l.json().catch(()=>"");return{status:l.status,data:c}}}ji=new WeakMap,Un=new WeakMap,Ki=new WeakMap,Zi=new WeakMap,Ur=new WeakMap,Qe(Jt,ji,"https://127.0.0.1/api/v1"),Qe(Jt,Un,new Headers({"Content-Type":"application/json"})),Qe(Jt,Ki,"include"),Qe(Jt,Zi,1),Qe(Jt,Ur,150);var be="top",Oe="bottom",Ue="right",Te="left",kr="auto",us=[be,Oe,Ue,Te],gi="start",Qi="end",ld="clippingParents",fo="viewport",zi="popper",cd="reference",ja=us.reduce(function(i,t){return i.concat([t+"-"+gi,t+"-"+Qi])},[]),po=[].concat(us,[kr]).reduce(function(i,t){return i.concat([t,t+"-"+gi,t+"-"+Qi])},[]),dd="beforeRead",ud="read",hd="afterRead",fd="beforeMain",pd="main",md="afterMain",gd="beforeWrite",_d="write",vd="afterWrite",xd=[dd,ud,hd,fd,pd,md,gd,_d,vd];function un(i){return i?(i.nodeName||"").toLowerCase():null}function Fe(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var t=i.ownerDocument;return t&&t.defaultView||window}return i}function _i(i){var t=Fe(i).Element;return i instanceof t||i instanceof Element}function Ve(i){var t=Fe(i).HTMLElement;return i instanceof t||i instanceof HTMLElement}function mo(i){if(typeof ShadowRoot>"u")return!1;var t=Fe(i).ShadowRoot;return i instanceof t||i instanceof ShadowRoot}function ju(i){var t=i.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},s=t.attributes[e]||{},r=t.elements[e];!Ve(r)||!un(r)||(Object.assign(r.style,n),Object.keys(s).forEach(function(a){var o=s[a];o===!1?r.removeAttribute(a):r.setAttribute(a,o===!0?"":o)}))})}function Ku(i){var t=i.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(n){var s=t.elements[n],r=t.attributes[n]||{},a=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:e[n]),o=a.reduce(function(l,c){return l[c]="",l},{});!Ve(s)||!un(s)||(Object.assign(s.style,o),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}const go={name:"applyStyles",enabled:!0,phase:"write",fn:ju,effect:Ku,requires:["computeStyles"]};function an(i){return i.split("-")[0]}var mi=Math.max,wr=Math.min,ts=Math.round;function Ka(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ed(){return!/^((?!chrome|android).)*safari/i.test(Ka())}function es(i,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var n=i.getBoundingClientRect(),s=1,r=1;t&&Ve(i)&&(s=i.offsetWidth>0&&ts(n.width)/i.offsetWidth||1,r=i.offsetHeight>0&&ts(n.height)/i.offsetHeight||1);var a=_i(i)?Fe(i):window,o=a.visualViewport,l=!Ed()&&e,c=(n.left+(l&&o?o.offsetLeft:0))/s,d=(n.top+(l&&o?o.offsetTop:0))/r,h=n.width/s,f=n.height/r;return{width:h,height:f,top:d,right:c+h,bottom:d+f,left:c,x:c,y:d}}function _o(i){var t=es(i),e=i.offsetWidth,n=i.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:i.offsetLeft,y:i.offsetTop,width:e,height:n}}function Sd(i,t){var e=t.getRootNode&&t.getRootNode();if(i.contains(t))return!0;if(e&&mo(e)){var n=t;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function bn(i){return Fe(i).getComputedStyle(i)}function Zu(i){return["table","td","th"].indexOf(un(i))>=0}function Yn(i){return((_i(i)?i.ownerDocument:i.document)||window.document).documentElement}function Hr(i){return un(i)==="html"?i:i.assignedSlot||i.parentNode||(mo(i)?i.host:null)||Yn(i)}function Ko(i){return!Ve(i)||bn(i).position==="fixed"?null:i.offsetParent}function Ju(i){var t=/firefox/i.test(Ka()),e=/Trident/i.test(Ka());if(e&&Ve(i)){var n=bn(i);if(n.position==="fixed")return null}var s=Hr(i);for(mo(s)&&(s=s.host);Ve(s)&&["html","body"].indexOf(un(s))<0;){var r=bn(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Us(i){for(var t=Fe(i),e=Ko(i);e&&Zu(e)&&bn(e).position==="static";)e=Ko(e);return e&&(un(e)==="html"||un(e)==="body"&&bn(e).position==="static")?t:e||Ju(i)||t}function vo(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Cs(i,t,e){return mi(i,wr(t,e))}function Qu(i,t,e){var n=Cs(i,t,e);return n>e?e:n}function yd(){return{top:0,right:0,bottom:0,left:0}}function Md(i){return Object.assign({},yd(),i)}function bd(i,t){return t.reduce(function(e,n){return e[n]=i,e},{})}var th=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Md(typeof t!="number"?t:bd(t,us))};function eh(i){var t,e=i.state,n=i.name,s=i.options,r=e.elements.arrow,a=e.modifiersData.popperOffsets,o=an(e.placement),l=vo(o),c=[Te,Ue].indexOf(o)>=0,d=c?"height":"width";if(!(!r||!a)){var h=th(s.padding,e),f=_o(r),m=l==="y"?be:Te,g=l==="y"?Oe:Ue,v=e.rects.reference[d]+e.rects.reference[l]-a[l]-e.rects.popper[d],p=a[l]-e.rects.reference[l],u=Us(r),b=u?l==="y"?u.clientHeight||0:u.clientWidth||0:0,y=v/2-p/2,M=h[m],L=b-f[d]-h[g],T=b/2-f[d]/2+y,A=Cs(M,T,L),F=l;e.modifiersData[n]=(t={},t[F]=A,t.centerOffset=A-T,t)}}function nh(i){var t=i.state,e=i.options,n=e.element,s=n===void 0?"[data-popper-arrow]":n;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||Sd(t.elements.popper,s)&&(t.elements.arrow=s))}const Td={name:"arrow",enabled:!0,phase:"main",fn:eh,effect:nh,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ns(i){return i.split("-")[1]}var ih={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sh(i,t){var e=i.x,n=i.y,s=t.devicePixelRatio||1;return{x:ts(e*s)/s||0,y:ts(n*s)/s||0}}function Zo(i){var t,e=i.popper,n=i.popperRect,s=i.placement,r=i.variation,a=i.offsets,o=i.position,l=i.gpuAcceleration,c=i.adaptive,d=i.roundOffsets,h=i.isFixed,f=a.x,m=f===void 0?0:f,g=a.y,v=g===void 0?0:g,p=typeof d=="function"?d({x:m,y:v}):{x:m,y:v};m=p.x,v=p.y;var u=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=Te,M=be,L=window;if(c){var T=Us(e),A="clientHeight",F="clientWidth";if(T===Fe(e)&&(T=Yn(e),bn(T).position!=="static"&&o==="absolute"&&(A="scrollHeight",F="scrollWidth")),T=T,s===be||(s===Te||s===Ue)&&r===Qi){M=Oe;var E=h&&T===L&&L.visualViewport?L.visualViewport.height:T[A];v-=E-n.height,v*=l?1:-1}if(s===Te||(s===be||s===Oe)&&r===Qi){y=Ue;var _=h&&T===L&&L.visualViewport?L.visualViewport.width:T[F];m-=_-n.width,m*=l?1:-1}}var I=Object.assign({position:o},c&&ih),V=d===!0?sh({x:m,y:v},Fe(e)):{x:m,y:v};if(m=V.x,v=V.y,l){var C;return Object.assign({},I,(C={},C[M]=b?"0":"",C[y]=u?"0":"",C.transform=(L.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",C))}return Object.assign({},I,(t={},t[M]=b?v+"px":"",t[y]=u?m+"px":"",t.transform="",t))}function rh(i){var t=i.state,e=i.options,n=e.gpuAcceleration,s=n===void 0?!0:n,r=e.adaptive,a=r===void 0?!0:r,o=e.roundOffsets,l=o===void 0?!0:o,c={placement:an(t.placement),variation:ns(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Zo(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Zo(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rh,data:{}};var Ys={passive:!0};function ah(i){var t=i.state,e=i.instance,n=i.options,s=n.scroll,r=s===void 0?!0:s,a=n.resize,o=a===void 0?!0:a,l=Fe(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(d){d.addEventListener("scroll",e.update,Ys)}),o&&l.addEventListener("resize",e.update,Ys),function(){r&&c.forEach(function(d){d.removeEventListener("scroll",e.update,Ys)}),o&&l.removeEventListener("resize",e.update,Ys)}}const Eo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ah,data:{}};var oh={left:"right",right:"left",bottom:"top",top:"bottom"};function Mr(i){return i.replace(/left|right|bottom|top/g,function(t){return oh[t]})}var lh={start:"end",end:"start"};function Jo(i){return i.replace(/start|end/g,function(t){return lh[t]})}function So(i){var t=Fe(i),e=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:e,scrollTop:n}}function yo(i){return es(Yn(i)).left+So(i).scrollLeft}function ch(i,t){var e=Fe(i),n=Yn(i),s=e.visualViewport,r=n.clientWidth,a=n.clientHeight,o=0,l=0;if(s){r=s.width,a=s.height;var c=Ed();(c||!c&&t==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:r,height:a,x:o+yo(i),y:l}}function dh(i){var t,e=Yn(i),n=So(i),s=(t=i.ownerDocument)==null?void 0:t.body,r=mi(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=mi(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),o=-n.scrollLeft+yo(i),l=-n.scrollTop;return bn(s||e).direction==="rtl"&&(o+=mi(e.clientWidth,s?s.clientWidth:0)-r),{width:r,height:a,x:o,y:l}}function Mo(i){var t=bn(i),e=t.overflow,n=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+n)}function Ad(i){return["html","body","#document"].indexOf(un(i))>=0?i.ownerDocument.body:Ve(i)&&Mo(i)?i:Ad(Hr(i))}function Rs(i,t){var e;t===void 0&&(t=[]);var n=Ad(i),s=n===((e=i.ownerDocument)==null?void 0:e.body),r=Fe(n),a=s?[r].concat(r.visualViewport||[],Mo(n)?n:[]):n,o=t.concat(a);return s?o:o.concat(Rs(Hr(a)))}function Za(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function uh(i,t){var e=es(i,!1,t==="fixed");return e.top=e.top+i.clientTop,e.left=e.left+i.clientLeft,e.bottom=e.top+i.clientHeight,e.right=e.left+i.clientWidth,e.width=i.clientWidth,e.height=i.clientHeight,e.x=e.left,e.y=e.top,e}function Qo(i,t,e){return t===fo?Za(ch(i,e)):_i(t)?uh(t,e):Za(dh(Yn(i)))}function hh(i){var t=Rs(Hr(i)),e=["absolute","fixed"].indexOf(bn(i).position)>=0,n=e&&Ve(i)?Us(i):i;return _i(n)?t.filter(function(s){return _i(s)&&Sd(s,n)&&un(s)!=="body"}):[]}function fh(i,t,e,n){var s=t==="clippingParents"?hh(i):[].concat(t),r=[].concat(s,[e]),a=r[0],o=r.reduce(function(l,c){var d=Qo(i,c,n);return l.top=mi(d.top,l.top),l.right=wr(d.right,l.right),l.bottom=wr(d.bottom,l.bottom),l.left=mi(d.left,l.left),l},Qo(i,a,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function wd(i){var t=i.reference,e=i.element,n=i.placement,s=n?an(n):null,r=n?ns(n):null,a=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l;switch(s){case be:l={x:a,y:t.y-e.height};break;case Oe:l={x:a,y:t.y+t.height};break;case Ue:l={x:t.x+t.width,y:o};break;case Te:l={x:t.x-e.width,y:o};break;default:l={x:t.x,y:t.y}}var c=s?vo(s):null;if(c!=null){var d=c==="y"?"height":"width";switch(r){case gi:l[c]=l[c]-(t[d]/2-e[d]/2);break;case Qi:l[c]=l[c]+(t[d]/2-e[d]/2);break}}return l}function is(i,t){t===void 0&&(t={});var e=t,n=e.placement,s=n===void 0?i.placement:n,r=e.strategy,a=r===void 0?i.strategy:r,o=e.boundary,l=o===void 0?ld:o,c=e.rootBoundary,d=c===void 0?fo:c,h=e.elementContext,f=h===void 0?zi:h,m=e.altBoundary,g=m===void 0?!1:m,v=e.padding,p=v===void 0?0:v,u=Md(typeof p!="number"?p:bd(p,us)),b=f===zi?cd:zi,y=i.rects.popper,M=i.elements[g?b:f],L=fh(_i(M)?M:M.contextElement||Yn(i.elements.popper),l,d,a),T=es(i.elements.reference),A=wd({reference:T,element:y,strategy:"absolute",placement:s}),F=Za(Object.assign({},y,A)),E=f===zi?F:T,_={top:L.top-E.top+u.top,bottom:E.bottom-L.bottom+u.bottom,left:L.left-E.left+u.left,right:E.right-L.right+u.right},I=i.modifiersData.offset;if(f===zi&&I){var V=I[s];Object.keys(_).forEach(function(C){var W=[Ue,Oe].indexOf(C)>=0?1:-1,G=[be,Oe].indexOf(C)>=0?"y":"x";_[C]+=V[G]*W})}return _}function ph(i,t){t===void 0&&(t={});var e=t,n=e.placement,s=e.boundary,r=e.rootBoundary,a=e.padding,o=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?po:l,d=ns(n),h=d?o?ja:ja.filter(function(g){return ns(g)===d}):us,f=h.filter(function(g){return c.indexOf(g)>=0});f.length===0&&(f=h);var m=f.reduce(function(g,v){return g[v]=is(i,{placement:v,boundary:s,rootBoundary:r,padding:a})[an(v)],g},{});return Object.keys(m).sort(function(g,v){return m[g]-m[v]})}function mh(i){if(an(i)===kr)return[];var t=Mr(i);return[Jo(i),t,Jo(t)]}function gh(i){var t=i.state,e=i.options,n=i.name;if(!t.modifiersData[n]._skip){for(var s=e.mainAxis,r=s===void 0?!0:s,a=e.altAxis,o=a===void 0?!0:a,l=e.fallbackPlacements,c=e.padding,d=e.boundary,h=e.rootBoundary,f=e.altBoundary,m=e.flipVariations,g=m===void 0?!0:m,v=e.allowedAutoPlacements,p=t.options.placement,u=an(p),b=u===p,y=l||(b||!g?[Mr(p)]:mh(p)),M=[p].concat(y).reduce(function(z,Q){return z.concat(an(Q)===kr?ph(t,{placement:Q,boundary:d,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:v}):Q)},[]),L=t.rects.reference,T=t.rects.popper,A=new Map,F=!0,E=M[0],_=0;_<M.length;_++){var I=M[_],V=an(I),C=ns(I)===gi,W=[be,Oe].indexOf(V)>=0,G=W?"width":"height",K=is(t,{placement:I,boundary:d,rootBoundary:h,altBoundary:f,padding:c}),Z=W?C?Ue:Te:C?Oe:be;L[G]>T[G]&&(Z=Mr(Z));var H=Mr(Z),tt=[];if(r&&tt.push(K[V]<=0),o&&tt.push(K[Z]<=0,K[H]<=0),tt.every(function(z){return z})){E=I,F=!1;break}A.set(I,tt)}if(F)for(var et=g?3:1,ft=function(Q){var dt=M.find(function(nt){var bt=A.get(nt);if(bt)return bt.slice(0,Q).every(function(Dt){return Dt})});if(dt)return E=dt,"break"},Ct=et;Ct>0;Ct--){var $t=ft(Ct);if($t==="break")break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}}const Cd={name:"flip",enabled:!0,phase:"main",fn:gh,requiresIfExists:["offset"],data:{_skip:!1}};function tl(i,t,e){return e===void 0&&(e={x:0,y:0}),{top:i.top-t.height-e.y,right:i.right-t.width+e.x,bottom:i.bottom-t.height+e.y,left:i.left-t.width-e.x}}function el(i){return[be,Ue,Oe,Te].some(function(t){return i[t]>=0})}function _h(i){var t=i.state,e=i.name,n=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,a=is(t,{elementContext:"reference"}),o=is(t,{altBoundary:!0}),l=tl(a,n),c=tl(o,s,r),d=el(l),h=el(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}const Rd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_h};function vh(i,t,e){var n=an(i),s=[Te,be].indexOf(n)>=0?-1:1,r=typeof e=="function"?e(Object.assign({},t,{placement:i})):e,a=r[0],o=r[1];return a=a||0,o=(o||0)*s,[Te,Ue].indexOf(n)>=0?{x:o,y:a}:{x:a,y:o}}function xh(i){var t=i.state,e=i.options,n=i.name,s=e.offset,r=s===void 0?[0,0]:s,a=po.reduce(function(d,h){return d[h]=vh(h,t.rects,r),d},{}),o=a[t.placement],l=o.x,c=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}const Ld={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xh};function Eh(i){var t=i.state,e=i.name;t.modifiersData[e]=wd({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const bo={name:"popperOffsets",enabled:!0,phase:"read",fn:Eh,data:{}};function Sh(i){return i==="x"?"y":"x"}function yh(i){var t=i.state,e=i.options,n=i.name,s=e.mainAxis,r=s===void 0?!0:s,a=e.altAxis,o=a===void 0?!1:a,l=e.boundary,c=e.rootBoundary,d=e.altBoundary,h=e.padding,f=e.tether,m=f===void 0?!0:f,g=e.tetherOffset,v=g===void 0?0:g,p=is(t,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),u=an(t.placement),b=ns(t.placement),y=!b,M=vo(u),L=Sh(M),T=t.modifiersData.popperOffsets,A=t.rects.reference,F=t.rects.popper,E=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,_=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(T){if(r){var C,W=M==="y"?be:Te,G=M==="y"?Oe:Ue,K=M==="y"?"height":"width",Z=T[M],H=Z+p[W],tt=Z-p[G],et=m?-F[K]/2:0,ft=b===gi?A[K]:F[K],Ct=b===gi?-F[K]:-A[K],$t=t.elements.arrow,z=m&&$t?_o($t):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:yd(),dt=Q[W],nt=Q[G],bt=Cs(0,A[K],z[K]),Dt=y?A[K]/2-et-bt-dt-_.mainAxis:ft-bt-dt-_.mainAxis,D=y?-A[K]/2+et+bt+nt+_.mainAxis:Ct+bt+nt+_.mainAxis,Yt=t.elements.arrow&&Us(t.elements.arrow),Et=Yt?M==="y"?Yt.clientTop||0:Yt.clientLeft||0:0,jt=(C=I==null?void 0:I[M])!=null?C:0,St=Z+Dt-jt-Et,Bt=Z+D-jt,Rt=Cs(m?wr(H,St):H,Z,m?mi(tt,Bt):tt);T[M]=Rt,V[M]=Rt-Z}if(o){var Ft,ee=M==="x"?be:Te,w=M==="x"?Oe:Ue,x=T[L],k=L==="y"?"height":"width",X=x+p[ee],j=x-p[w],J=[be,Te].indexOf(u)!==-1,_t=(Ft=I==null?void 0:I[L])!=null?Ft:0,at=J?X:x-A[k]-F[k]-_t+_.altAxis,rt=J?x+A[k]+F[k]-_t-_.altAxis:j,Tt=m&&J?Qu(at,x,rt):Cs(m?at:X,x,m?rt:j);T[L]=Tt,V[L]=Tt-x}t.modifiersData[n]=V}}const Pd={name:"preventOverflow",enabled:!0,phase:"main",fn:yh,requiresIfExists:["offset"]};function Mh(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function bh(i){return i===Fe(i)||!Ve(i)?So(i):Mh(i)}function Th(i){var t=i.getBoundingClientRect(),e=ts(t.width)/i.offsetWidth||1,n=ts(t.height)/i.offsetHeight||1;return e!==1||n!==1}function Ah(i,t,e){e===void 0&&(e=!1);var n=Ve(t),s=Ve(t)&&Th(t),r=Yn(t),a=es(i,s,e),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!e)&&((un(t)!=="body"||Mo(r))&&(o=bh(t)),Ve(t)?(l=es(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=yo(r))),{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function wh(i){var t=new Map,e=new Set,n=[];i.forEach(function(r){t.set(r.name,r)});function s(r){e.add(r.name);var a=[].concat(r.requires||[],r.requiresIfExists||[]);a.forEach(function(o){if(!e.has(o)){var l=t.get(o);l&&s(l)}}),n.push(r)}return i.forEach(function(r){e.has(r.name)||s(r)}),n}function Ch(i){var t=wh(i);return xd.reduce(function(e,n){return e.concat(t.filter(function(s){return s.phase===n}))},[])}function Rh(i){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(i())})})),t}}function Lh(i){var t=i.reduce(function(e,n){var s=e[n.name];return e[n.name]=s?Object.assign({},s,n,{options:Object.assign({},s.options,n.options),data:Object.assign({},s.data,n.data)}):n,e},{});return Object.keys(t).map(function(e){return t[e]})}var nl={placement:"bottom",modifiers:[],strategy:"absolute"};function il(){for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function zr(i){i===void 0&&(i={});var t=i,e=t.defaultModifiers,n=e===void 0?[]:e,s=t.defaultOptions,r=s===void 0?nl:s;return function(o,l,c){c===void 0&&(c=r);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},nl,r),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},h=[],f=!1,m={state:d,setOptions:function(u){var b=typeof u=="function"?u(d.options):u;v(),d.options=Object.assign({},r,d.options,b),d.scrollParents={reference:_i(o)?Rs(o):o.contextElement?Rs(o.contextElement):[],popper:Rs(l)};var y=Ch(Lh([].concat(n,d.options.modifiers)));return d.orderedModifiers=y.filter(function(M){return M.enabled}),g(),m.update()},forceUpdate:function(){if(!f){var u=d.elements,b=u.reference,y=u.popper;if(il(b,y)){d.rects={reference:Ah(b,Us(y),d.options.strategy==="fixed"),popper:_o(y)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(_){return d.modifiersData[_.name]=Object.assign({},_.data)});for(var M=0;M<d.orderedModifiers.length;M++){if(d.reset===!0){d.reset=!1,M=-1;continue}var L=d.orderedModifiers[M],T=L.fn,A=L.options,F=A===void 0?{}:A,E=L.name;typeof T=="function"&&(d=T({state:d,options:F,name:E,instance:m})||d)}}}},update:Rh(function(){return new Promise(function(p){m.forceUpdate(),p(d)})}),destroy:function(){v(),f=!0}};if(!il(o,l))return m;m.setOptions(c).then(function(p){!f&&c.onFirstUpdate&&c.onFirstUpdate(p)});function g(){d.orderedModifiers.forEach(function(p){var u=p.name,b=p.options,y=b===void 0?{}:b,M=p.effect;if(typeof M=="function"){var L=M({state:d,name:u,instance:m,options:y}),T=function(){};h.push(L||T)}})}function v(){h.forEach(function(p){return p()}),h=[]}return m}}var Ph=zr(),Ih=[Eo,bo,xo,go],Dh=zr({defaultModifiers:Ih}),Nh=[Eo,bo,xo,go,Ld,Cd,Pd,Td,Rd],To=zr({defaultModifiers:Nh});const Id=Object.freeze(Object.defineProperty({__proto__:null,afterMain:md,afterRead:hd,afterWrite:vd,applyStyles:go,arrow:Td,auto:kr,basePlacements:us,beforeMain:fd,beforeRead:dd,beforeWrite:gd,bottom:Oe,clippingParents:ld,computeStyles:xo,createPopper:To,createPopperBase:Ph,createPopperLite:Dh,detectOverflow:is,end:Qi,eventListeners:Eo,flip:Cd,hide:Rd,left:Te,main:pd,modifierPhases:xd,offset:Ld,placements:po,popper:zi,popperGenerator:zr,popperOffsets:bo,preventOverflow:Pd,read:ud,reference:cd,right:Ue,start:gi,top:be,variationPlacements:ja,viewport:fo,write:_d},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Cn=new Map,ta={set(i,t,e){Cn.has(i)||Cn.set(i,new Map);const n=Cn.get(i);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(i,t){return Cn.has(i)&&Cn.get(i).get(t)||null},remove(i,t){if(!Cn.has(i))return;const e=Cn.get(i);e.delete(t),e.size===0&&Cn.delete(i)}},Oh=1e6,Uh=1e3,Ja="transitionend",Dd=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),i),Fh=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),Bh=i=>{do i+=Math.floor(Math.random()*Oh);while(document.getElementById(i));return i},kh=i=>{if(!i)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(i);const n=Number.parseFloat(t),s=Number.parseFloat(e);return!n&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*Uh)},Nd=i=>{i.dispatchEvent(new Event(Ja))},yn=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),Vn=i=>yn(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(Dd(i)):null,hs=i=>{if(!yn(i)||i.getClientRects().length===0)return!1;const t=getComputedStyle(i).getPropertyValue("visibility")==="visible",e=i.closest("details:not([open])");if(!e)return t;if(e!==i){const n=i.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},Gn=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",Od=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const t=i.getRootNode();return t instanceof ShadowRoot?t:null}return i instanceof ShadowRoot?i:i.parentNode?Od(i.parentNode):null},Cr=()=>{},Fs=i=>{i.offsetHeight},Ud=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ea=[],Hh=i=>{document.readyState==="loading"?(ea.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of ea)t()}),ea.push(i)):i()},Ge=()=>document.documentElement.dir==="rtl",$e=i=>{Hh(()=>{const t=Ud();if(t){const e=i.NAME,n=t.fn[e];t.fn[e]=i.jQueryInterface,t.fn[e].Constructor=i,t.fn[e].noConflict=()=>(t.fn[e]=n,i.jQueryInterface)}})},Le=(i,t=[],e=i)=>typeof i=="function"?i(...t):e,Fd=(i,t,e=!0)=>{if(!e){Le(i);return}const s=kh(t)+5;let r=!1;const a=({target:o})=>{o===t&&(r=!0,t.removeEventListener(Ja,a),Le(i))};t.addEventListener(Ja,a),setTimeout(()=>{r||Nd(t)},s)},Ao=(i,t,e,n)=>{const s=i.length;let r=i.indexOf(t);return r===-1?!e&&n?i[s-1]:i[0]:(r+=e?1:-1,n&&(r=(r+s)%s),i[Math.max(0,Math.min(r,s-1))])},zh=/[^.]*(?=\..*)\.|.*/,Vh=/\..*/,Gh=/::\d+$/,na={};let sl=1;const Bd={mouseenter:"mouseover",mouseleave:"mouseout"},Wh=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function kd(i,t){return t&&`${t}::${sl++}`||i.uidEvent||sl++}function Hd(i){const t=kd(i);return i.uidEvent=t,na[t]=na[t]||{},na[t]}function $h(i,t){return function e(n){return wo(n,{delegateTarget:i}),e.oneOff&&Y.off(i,n.type,t),t.apply(i,[n])}}function Xh(i,t,e){return function n(s){const r=i.querySelectorAll(t);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const o of r)if(o===a)return wo(s,{delegateTarget:a}),n.oneOff&&Y.off(i,s.type,t,e),e.apply(a,[s])}}function zd(i,t,e=null){return Object.values(i).find(n=>n.callable===t&&n.delegationSelector===e)}function Vd(i,t,e){const n=typeof t=="string",s=n?e:t||e;let r=Gd(i);return Wh.has(r)||(r=i),[n,s,r]}function rl(i,t,e,n,s){if(typeof t!="string"||!i)return;let[r,a,o]=Vd(t,e,n);t in Bd&&(a=(g=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return g.call(this,v)})(a));const l=Hd(i),c=l[o]||(l[o]={}),d=zd(c,a,r?e:null);if(d){d.oneOff=d.oneOff&&s;return}const h=kd(a,t.replace(zh,"")),f=r?Xh(i,e,a):$h(i,a);f.delegationSelector=r?e:null,f.callable=a,f.oneOff=s,f.uidEvent=h,c[h]=f,i.addEventListener(o,f,r)}function Qa(i,t,e,n,s){const r=zd(t[e],n,s);r&&(i.removeEventListener(e,r,!!s),delete t[e][r.uidEvent])}function qh(i,t,e,n){const s=t[e]||{};for(const[r,a]of Object.entries(s))r.includes(n)&&Qa(i,t,e,a.callable,a.delegationSelector)}function Gd(i){return i=i.replace(Vh,""),Bd[i]||i}const Y={on(i,t,e,n){rl(i,t,e,n,!1)},one(i,t,e,n){rl(i,t,e,n,!0)},off(i,t,e,n){if(typeof t!="string"||!i)return;const[s,r,a]=Vd(t,e,n),o=a!==t,l=Hd(i),c=l[a]||{},d=t.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;Qa(i,l,a,r,s?e:null);return}if(d)for(const h of Object.keys(l))qh(i,l,h,t.slice(1));for(const[h,f]of Object.entries(c)){const m=h.replace(Gh,"");(!o||t.includes(m))&&Qa(i,l,a,f.callable,f.delegationSelector)}},trigger(i,t,e){if(typeof t!="string"||!i)return null;const n=Ud(),s=Gd(t),r=t!==s;let a=null,o=!0,l=!0,c=!1;r&&n&&(a=n.Event(t,e),n(i).trigger(a),o=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented());const d=wo(new Event(t,{bubbles:o,cancelable:!0}),e);return c&&d.preventDefault(),l&&i.dispatchEvent(d),d.defaultPrevented&&a&&a.preventDefault(),d}};function wo(i,t={}){for(const[e,n]of Object.entries(t))try{i[e]=n}catch{Object.defineProperty(i,e,{configurable:!0,get(){return n}})}return i}function al(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function ia(i){return i.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Mn={setDataAttribute(i,t,e){i.setAttribute(`data-bs-${ia(t)}`,e)},removeDataAttribute(i,t){i.removeAttribute(`data-bs-${ia(t)}`)},getDataAttributes(i){if(!i)return{};const t={},e=Object.keys(i.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=al(i.dataset[n])}return t},getDataAttribute(i,t){return al(i.getAttribute(`data-bs-${ia(t)}`))}};class Bs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=yn(e)?Mn.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...yn(e)?Mn.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const r=t[n],a=yn(r)?"element":Fh(r);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}}}const Yh="5.3.3";class Ze extends Bs{constructor(t,e){super(),t=Vn(t),t&&(this._element=t,this._config=this._getConfig(e),ta.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ta.remove(this._element,this.constructor.DATA_KEY),Y.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){Fd(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return ta.get(Vn(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Yh}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const sa=i=>{let t=i.getAttribute("data-bs-target");if(!t||t==="#"){let e=i.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Dd(e)).join(","):null},vt={find(i,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,i))},findOne(i,t=document.documentElement){return Element.prototype.querySelector.call(t,i)},children(i,t){return[].concat(...i.children).filter(e=>e.matches(t))},parents(i,t){const e=[];let n=i.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(i,t){let e=i.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(i,t){let e=i.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(i){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,i).filter(e=>!Gn(e)&&hs(e))},getSelectorFromElement(i){const t=sa(i);return t&&vt.findOne(t)?t:null},getElementFromSelector(i){const t=sa(i);return t?vt.findOne(t):null},getMultipleElementsFromSelector(i){const t=sa(i);return t?vt.find(t):[]}},Vr=(i,t="hide")=>{const e=`click.dismiss${i.EVENT_KEY}`,n=i.NAME;Y.on(document,e,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Gn(this))return;const r=vt.getElementFromSelector(this)||this.closest(`.${n}`);i.getOrCreateInstance(r)[t]()})},jh="alert",Kh="bs.alert",Wd=`.${Kh}`,Zh=`close${Wd}`,Jh=`closed${Wd}`,Qh="fade",tf="show";class Gr extends Ze{static get NAME(){return jh}close(){if(Y.trigger(this._element,Zh).defaultPrevented)return;this._element.classList.remove(tf);const e=this._element.classList.contains(Qh);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),Y.trigger(this._element,Jh),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Gr.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Vr(Gr,"close");$e(Gr);const ef="button",nf="bs.button",sf=`.${nf}`,rf=".data-api",af="active",ol='[data-bs-toggle="button"]',of=`click${sf}${rf}`;class Wr extends Ze{static get NAME(){return ef}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(af))}static jQueryInterface(t){return this.each(function(){const e=Wr.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}Y.on(document,of,ol,i=>{i.preventDefault();const t=i.target.closest(ol);Wr.getOrCreateInstance(t).toggle()});$e(Wr);const lf="swipe",fs=".bs.swipe",cf=`touchstart${fs}`,df=`touchmove${fs}`,uf=`touchend${fs}`,hf=`pointerdown${fs}`,ff=`pointerup${fs}`,pf="touch",mf="pen",gf="pointer-event",_f=40,vf={endCallback:null,leftCallback:null,rightCallback:null},xf={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Rr extends Bs{constructor(t,e){super(),this._element=t,!(!t||!Rr.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return vf}static get DefaultType(){return xf}static get NAME(){return lf}dispose(){Y.off(this._element,fs)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Le(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=_f)return;const e=t/this._deltaX;this._deltaX=0,e&&Le(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Y.on(this._element,hf,t=>this._start(t)),Y.on(this._element,ff,t=>this._end(t)),this._element.classList.add(gf)):(Y.on(this._element,cf,t=>this._start(t)),Y.on(this._element,df,t=>this._move(t)),Y.on(this._element,uf,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===mf||t.pointerType===pf)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ef="carousel",Sf="bs.carousel",jn=`.${Sf}`,$d=".data-api",yf="ArrowLeft",Mf="ArrowRight",bf=500,xs="next",yi="prev",Vi="left",br="right",Tf=`slide${jn}`,ra=`slid${jn}`,Af=`keydown${jn}`,wf=`mouseenter${jn}`,Cf=`mouseleave${jn}`,Rf=`dragstart${jn}`,Lf=`load${jn}${$d}`,Pf=`click${jn}${$d}`,Xd="carousel",js="active",If="slide",Df="carousel-item-end",Nf="carousel-item-start",Of="carousel-item-next",Uf="carousel-item-prev",qd=".active",Yd=".carousel-item",Ff=qd+Yd,Bf=".carousel-item img",kf=".carousel-indicators",Hf="[data-bs-slide], [data-bs-slide-to]",zf='[data-bs-ride="carousel"]',Vf={[yf]:br,[Mf]:Vi},Gf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Wf={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ks extends Ze{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=vt.findOne(kf,this._element),this._addEventListeners(),this._config.ride===Xd&&this.cycle()}static get Default(){return Gf}static get DefaultType(){return Wf}static get NAME(){return Ef}next(){this._slide(xs)}nextWhenVisible(){!document.hidden&&hs(this._element)&&this.next()}prev(){this._slide(yi)}pause(){this._isSliding&&Nd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Y.one(this._element,ra,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){Y.one(this._element,ra,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const s=t>n?xs:yi;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&Y.on(this._element,Af,t=>this._keydown(t)),this._config.pause==="hover"&&(Y.on(this._element,wf,()=>this.pause()),Y.on(this._element,Cf,()=>this._maybeEnableCycle())),this._config.touch&&Rr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of vt.find(Bf,this._element))Y.on(n,Rf,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Vi)),rightCallback:()=>this._slide(this._directionToOrder(br)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),bf+this._config.interval))}};this._swipeHelper=new Rr(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Vf[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=vt.findOne(qd,this._indicatorsElement);e.classList.remove(js),e.removeAttribute("aria-current");const n=vt.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(js),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),s=t===xs,r=e||Ao(this._getItems(),n,s,this._config.wrap);if(r===n)return;const a=this._getItemIndex(r),o=m=>Y.trigger(this._element,m,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:a});if(o(Tf).defaultPrevented||!n||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=r;const d=s?Nf:Df,h=s?Of:Uf;r.classList.add(h),Fs(r),n.classList.add(d),r.classList.add(d);const f=()=>{r.classList.remove(d,h),r.classList.add(js),n.classList.remove(js,h,d),this._isSliding=!1,o(ra)};this._queueCallback(f,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(If)}_getActive(){return vt.findOne(Ff,this._element)}_getItems(){return vt.find(Yd,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ge()?t===Vi?yi:xs:t===Vi?xs:yi}_orderToDirection(t){return Ge()?t===yi?Vi:br:t===yi?br:Vi}static jQueryInterface(t){return this.each(function(){const e=ks.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(document,Pf,Hf,function(i){const t=vt.getElementFromSelector(this);if(!t||!t.classList.contains(Xd))return;i.preventDefault();const e=ks.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){e.to(n),e._maybeEnableCycle();return}if(Mn.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});Y.on(window,Lf,()=>{const i=vt.find(zf);for(const t of i)ks.getOrCreateInstance(t)});$e(ks);const $f="collapse",Xf="bs.collapse",Hs=`.${Xf}`,qf=".data-api",Yf=`show${Hs}`,jf=`shown${Hs}`,Kf=`hide${Hs}`,Zf=`hidden${Hs}`,Jf=`click${Hs}${qf}`,aa="show",Wi="collapse",Ks="collapsing",Qf="collapsed",tp=`:scope .${Wi} .${Wi}`,ep="collapse-horizontal",np="width",ip="height",sp=".collapse.show, .collapse.collapsing",to='[data-bs-toggle="collapse"]',rp={parent:null,toggle:!0},ap={parent:"(null|element)",toggle:"boolean"};class Ps extends Ze{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=vt.find(to);for(const s of n){const r=vt.getSelectorFromElement(s),a=vt.find(r).filter(o=>o===this._element);r!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rp}static get DefaultType(){return ap}static get NAME(){return $f}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(sp).filter(o=>o!==this._element).map(o=>Ps.getOrCreateInstance(o,{toggle:!1}))),t.length&&t[0]._isTransitioning||Y.trigger(this._element,Yf).defaultPrevented)return;for(const o of t)o.hide();const n=this._getDimension();this._element.classList.remove(Wi),this._element.classList.add(Ks),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ks),this._element.classList.add(Wi,aa),this._element.style[n]="",Y.trigger(this._element,jf)},a=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[n]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||Y.trigger(this._element,Kf).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Fs(this._element),this._element.classList.add(Ks),this._element.classList.remove(Wi,aa);for(const s of this._triggerArray){const r=vt.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Ks),this._element.classList.add(Wi),Y.trigger(this._element,Zf)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(aa)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Vn(t.parent),t}_getDimension(){return this._element.classList.contains(ep)?np:ip}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(to);for(const e of t){const n=vt.getElementFromSelector(e);n&&this._addAriaAndCollapsedClass([e],this._isShown(n))}}_getFirstLevelChildren(t){const e=vt.find(tp,this._config.parent);return vt.find(t,this._config.parent).filter(n=>!e.includes(n))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(Qf,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const n=Ps.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Y.on(document,Jf,to,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const t of vt.getMultipleElementsFromSelector(this))Ps.getOrCreateInstance(t,{toggle:!1}).toggle()});$e(Ps);const ll="dropdown",op="bs.dropdown",xi=`.${op}`,Co=".data-api",lp="Escape",cl="Tab",cp="ArrowUp",dl="ArrowDown",dp=2,up=`hide${xi}`,hp=`hidden${xi}`,fp=`show${xi}`,pp=`shown${xi}`,jd=`click${xi}${Co}`,Kd=`keydown${xi}${Co}`,mp=`keyup${xi}${Co}`,Gi="show",gp="dropup",_p="dropend",vp="dropstart",xp="dropup-center",Ep="dropdown-center",di='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Sp=`${di}.${Gi}`,Tr=".dropdown-menu",yp=".navbar",Mp=".navbar-nav",bp=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Tp=Ge()?"top-end":"top-start",Ap=Ge()?"top-start":"top-end",wp=Ge()?"bottom-end":"bottom-start",Cp=Ge()?"bottom-start":"bottom-end",Rp=Ge()?"left-start":"right-start",Lp=Ge()?"right-start":"left-start",Pp="top",Ip="bottom",Dp={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Np={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class on extends Ze{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=vt.next(this._element,Tr)[0]||vt.prev(this._element,Tr)[0]||vt.findOne(Tr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Dp}static get DefaultType(){return Np}static get NAME(){return ll}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Gn(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!Y.trigger(this._element,fp,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Mp))for(const n of[].concat(...document.body.children))Y.on(n,"mouseover",Cr);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Gi),this._element.classList.add(Gi),Y.trigger(this._element,pp,t)}}hide(){if(Gn(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!Y.trigger(this._element,up,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))Y.off(n,"mouseover",Cr);this._popper&&this._popper.destroy(),this._menu.classList.remove(Gi),this._element.classList.remove(Gi),this._element.setAttribute("aria-expanded","false"),Mn.removeDataAttribute(this._menu,"popper"),Y.trigger(this._element,hp,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!yn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ll.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Id>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:yn(this._config.reference)?t=Vn(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=To(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Gi)}_getPlacement(){const t=this._parent;if(t.classList.contains(_p))return Rp;if(t.classList.contains(vp))return Lp;if(t.classList.contains(xp))return Pp;if(t.classList.contains(Ep))return Ip;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(gp)?e?Ap:Tp:e?Cp:wp}_detectNavbar(){return this._element.closest(yp)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Mn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...Le(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const n=vt.find(bp,this._menu).filter(s=>hs(s));n.length&&Ao(n,e,t===dl,!n.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=on.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===dp||t.type==="keyup"&&t.key!==cl)return;const e=vt.find(Sp);for(const n of e){const s=on.getInstance(n);if(!s||s._config.autoClose===!1)continue;const r=t.composedPath(),a=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===cl||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:s._element};t.type==="click"&&(o.clickEvent=t),s._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===lp,s=[cp,dl].includes(t.key);if(!s&&!n||e&&!n)return;t.preventDefault();const r=this.matches(di)?this:vt.prev(this,di)[0]||vt.next(this,di)[0]||vt.findOne(di,t.delegateTarget.parentNode),a=on.getOrCreateInstance(r);if(s){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),r.focus())}}Y.on(document,Kd,di,on.dataApiKeydownHandler);Y.on(document,Kd,Tr,on.dataApiKeydownHandler);Y.on(document,jd,on.clearMenus);Y.on(document,mp,on.clearMenus);Y.on(document,jd,di,function(i){i.preventDefault(),on.getOrCreateInstance(this).toggle()});$e(on);const Zd="backdrop",Op="fade",ul="show",hl=`mousedown.bs.${Zd}`,Up={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fp={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Jd extends Bs{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Up}static get DefaultType(){return Fp}static get NAME(){return Zd}show(t){if(!this._config.isVisible){Le(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Fs(e),e.classList.add(ul),this._emulateAnimation(()=>{Le(t)})}hide(t){if(!this._config.isVisible){Le(t);return}this._getElement().classList.remove(ul),this._emulateAnimation(()=>{this.dispose(),Le(t)})}dispose(){this._isAppended&&(Y.off(this._element,hl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Op),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Vn(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),Y.on(t,hl,()=>{Le(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Fd(t,this._getElement(),this._config.isAnimated)}}const Bp="focustrap",kp="bs.focustrap",Lr=`.${kp}`,Hp=`focusin${Lr}`,zp=`keydown.tab${Lr}`,Vp="Tab",Gp="forward",fl="backward",Wp={autofocus:!0,trapElement:null},$p={autofocus:"boolean",trapElement:"element"};class Qd extends Bs{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Wp}static get DefaultType(){return $p}static get NAME(){return Bp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Y.off(document,Lr),Y.on(document,Hp,t=>this._handleFocusin(t)),Y.on(document,zp,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Y.off(document,Lr))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=vt.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===fl?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===Vp&&(this._lastTabNavDirection=t.shiftKey?fl:Gp)}}const pl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ml=".sticky-top",Zs="padding-right",gl="margin-right";class eo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zs,e=>e+t),this._setElementAttributes(pl,Zs,e=>e+t),this._setElementAttributes(ml,gl,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zs),this._resetElementAttributes(pl,Zs),this._resetElementAttributes(ml,gl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const s=this.getWidth(),r=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,e);const o=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,r)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&Mn.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=s=>{const r=Mn.getDataAttribute(s,e);if(r===null){s.style.removeProperty(e);return}Mn.removeDataAttribute(s,e),s.style.setProperty(e,r)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(yn(t)){e(t);return}for(const n of vt.find(t,this._element))e(n)}}const Xp="modal",qp="bs.modal",We=`.${qp}`,Yp=".data-api",jp="Escape",Kp=`hide${We}`,Zp=`hidePrevented${We}`,tu=`hidden${We}`,eu=`show${We}`,Jp=`shown${We}`,Qp=`resize${We}`,tm=`click.dismiss${We}`,em=`mousedown.dismiss${We}`,nm=`keydown.dismiss${We}`,im=`click${We}${Yp}`,_l="modal-open",sm="fade",vl="show",oa="modal-static",rm=".modal.show",am=".modal-dialog",om=".modal-body",lm='[data-bs-toggle="modal"]',cm={backdrop:!0,focus:!0,keyboard:!0},dm={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ye extends Ze{constructor(t,e){super(t,e),this._dialog=vt.findOne(am,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new eo,this._addEventListeners()}static get Default(){return cm}static get DefaultType(){return dm}static get NAME(){return Xp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||Y.trigger(this._element,eu,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_l),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||Y.trigger(this._element,Kp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(vl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){Y.off(window,We),Y.off(this._dialog,We),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Jd({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Qd({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=vt.findOne(om,this._dialog);e&&(e.scrollTop=0),Fs(this._element),this._element.classList.add(vl);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Y.trigger(this._element,Jp,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){Y.on(this._element,nm,t=>{if(t.key===jp){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),Y.on(window,Qp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Y.on(this._element,em,t=>{Y.one(this._element,tm,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_l),this._resetAdjustments(),this._scrollBar.reset(),Y.trigger(this._element,tu)})}_isAnimated(){return this._element.classList.contains(sm)}_triggerBackdropTransition(){if(Y.trigger(this._element,Zp).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(oa)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(oa),this._queueCallback(()=>{this._element.classList.remove(oa),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const s=Ge()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!n&&t){const s=Ge()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=ye.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}Y.on(document,im,lm,function(i){const t=vt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),Y.one(t,eu,s=>{s.defaultPrevented||Y.one(t,tu,()=>{hs(this)&&this.focus()})});const e=vt.findOne(rm);e&&ye.getInstance(e).hide(),ye.getOrCreateInstance(t).toggle(this)});Vr(ye);$e(ye);const um="offcanvas",hm="bs.offcanvas",Tn=`.${hm}`,nu=".data-api",fm=`load${Tn}${nu}`,pm="Escape",xl="show",El="showing",Sl="hiding",mm="offcanvas-backdrop",iu=".offcanvas.show",gm=`show${Tn}`,_m=`shown${Tn}`,vm=`hide${Tn}`,yl=`hidePrevented${Tn}`,su=`hidden${Tn}`,xm=`resize${Tn}`,Em=`click${Tn}${nu}`,Sm=`keydown.dismiss${Tn}`,ym='[data-bs-toggle="offcanvas"]',Mm={backdrop:!0,keyboard:!0,scroll:!1},bm={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wn extends Ze{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Mm}static get DefaultType(){return bm}static get NAME(){return um}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||Y.trigger(this._element,gm,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new eo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(El);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(xl),this._element.classList.remove(El),Y.trigger(this._element,_m,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||Y.trigger(this._element,vm).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Sl),this._backdrop.hide();const e=()=>{this._element.classList.remove(xl,Sl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new eo().reset(),Y.trigger(this._element,su)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){Y.trigger(this._element,yl);return}this.hide()},e=!!this._config.backdrop;return new Jd({className:mm,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Qd({trapElement:this._element})}_addEventListeners(){Y.on(this._element,Sm,t=>{if(t.key===pm){if(this._config.keyboard){this.hide();return}Y.trigger(this._element,yl)}})}static jQueryInterface(t){return this.each(function(){const e=Wn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Y.on(document,Em,ym,function(i){const t=vt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Gn(this))return;Y.one(t,su,()=>{hs(this)&&this.focus()});const e=vt.findOne(iu);e&&e!==t&&Wn.getInstance(e).hide(),Wn.getOrCreateInstance(t).toggle(this)});Y.on(window,fm,()=>{for(const i of vt.find(iu))Wn.getOrCreateInstance(i).show()});Y.on(window,xm,()=>{for(const i of vt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Wn.getOrCreateInstance(i).hide()});Vr(Wn);$e(Wn);const Tm=/^aria-[\w-]*$/i,ru={"*":["class","dir","id","lang","role",Tm],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Am=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),wm=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Cm=(i,t)=>{const e=i.nodeName.toLowerCase();return t.includes(e)?Am.has(e)?!!wm.test(i.nodeValue):!0:t.filter(n=>n instanceof RegExp).some(n=>n.test(e))};function Rm(i,t,e){if(!i.length)return i;if(e&&typeof e=="function")return e(i);const s=new window.DOMParser().parseFromString(i,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const a of r){const o=a.nodeName.toLowerCase();if(!Object.keys(t).includes(o)){a.remove();continue}const l=[].concat(...a.attributes),c=[].concat(t["*"]||[],t[o]||[]);for(const d of l)Cm(d,c)||a.removeAttribute(d.nodeName)}return s.body.innerHTML}const Lm="TemplateFactory",Pm={allowList:ru,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Im={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Dm={entry:"(string|element|function|null)",selector:"(string|element)"};class Nm extends Bs{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Pm}static get DefaultType(){return Im}static get NAME(){return Lm}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(t,r,s);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},Dm)}_setContent(t,e,n){const s=vt.findOne(n,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(yn(e)){this._putElementInTemplate(Vn(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Rm(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return Le(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Om="tooltip",Um=new Set(["sanitize","allowList","sanitizeFn"]),la="fade",Fm="modal",Js="show",Bm=".tooltip-inner",Ml=`.${Fm}`,bl="hide.bs.modal",Es="hover",ca="focus",km="click",Hm="manual",zm="hide",Vm="hidden",Gm="show",Wm="shown",$m="inserted",Xm="click",qm="focusin",Ym="focusout",jm="mouseenter",Km="mouseleave",Zm={AUTO:"auto",TOP:"top",RIGHT:Ge()?"left":"right",BOTTOM:"bottom",LEFT:Ge()?"right":"left"},Jm={allowList:ru,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Qm={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ei extends Ze{constructor(t,e){if(typeof Id>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Jm}static get DefaultType(){return Qm}static get NAME(){return Om}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Y.off(this._element.closest(Ml),bl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=Y.trigger(this._element,this.constructor.eventName(Gm)),n=(Od(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),Y.trigger(this._element,this.constructor.eventName($m))),this._popper=this._createPopper(s),s.classList.add(Js),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))Y.on(o,"mouseover",Cr);const a=()=>{Y.trigger(this._element,this.constructor.eventName(Wm)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Y.trigger(this._element,this.constructor.eventName(zm)).defaultPrevented)return;if(this._getTipElement().classList.remove(Js),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))Y.off(s,"mouseover",Cr);this._activeTrigger[km]=!1,this._activeTrigger[ca]=!1,this._activeTrigger[Es]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Y.trigger(this._element,this.constructor.eventName(Vm)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(la,Js),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=Bh(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(la),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Nm({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Bm]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(la)}_isShown(){return this.tip&&this.tip.classList.contains(Js)}_createPopper(t){const e=Le(this._config.placement,[this,t,this._element]),n=Zm[e.toUpperCase()];return To(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return Le(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...e,...Le(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")Y.on(this._element,this.constructor.eventName(Xm),this._config.selector,n=>{this._initializeOnDelegatedTarget(n).toggle()});else if(e!==Hm){const n=e===Es?this.constructor.eventName(jm):this.constructor.eventName(qm),s=e===Es?this.constructor.eventName(Km):this.constructor.eventName(Ym);Y.on(this._element,n,this._config.selector,r=>{const a=this._initializeOnDelegatedTarget(r);a._activeTrigger[r.type==="focusin"?ca:Es]=!0,a._enter()}),Y.on(this._element,s,this._config.selector,r=>{const a=this._initializeOnDelegatedTarget(r);a._activeTrigger[r.type==="focusout"?ca:Es]=a._element.contains(r.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Y.on(this._element.closest(Ml),bl,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Mn.getDataAttributes(this._element);for(const n of Object.keys(e))Um.has(n)&&delete e[n];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Vn(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,n]of Object.entries(this._config))this.constructor.Default[e]!==n&&(t[e]=n);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Ei.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}$e(Ei);const tg="popover",eg=".popover-header",ng=".popover-body",ig={...Ei.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},sg={...Ei.DefaultType,content:"(null|string|element|function)"};class Ro extends Ei{static get Default(){return ig}static get DefaultType(){return sg}static get NAME(){return tg}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[eg]:this._getTitle(),[ng]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ro.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}$e(Ro);const rg="scrollspy",ag="bs.scrollspy",Lo=`.${ag}`,og=".data-api",lg=`activate${Lo}`,Tl=`click${Lo}`,cg=`load${Lo}${og}`,dg="dropdown-item",Mi="active",ug='[data-bs-spy="scroll"]',da="[href]",hg=".nav, .list-group",Al=".nav-link",fg=".nav-item",pg=".list-group-item",mg=`${Al}, ${fg} > ${Al}, ${pg}`,gg=".dropdown",_g=".dropdown-toggle",vg={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},xg={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $r extends Ze{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return vg}static get DefaultType(){return xg}static get NAME(){return rg}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Vn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Y.off(this._config.target,Tl),Y.on(this._config.target,Tl,da,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),n=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const o=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&o){if(n(a),!s)return;continue}!r&&!o&&n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=vt.find(da,this._config.target);for(const e of t){if(!e.hash||Gn(e))continue;const n=vt.findOne(decodeURI(e.hash),this._element);hs(n)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,n))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Mi),this._activateParents(t),Y.trigger(this._element,lg,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(dg)){vt.findOne(_g,t.closest(gg)).classList.add(Mi);return}for(const e of vt.parents(t,hg))for(const n of vt.prev(e,mg))n.classList.add(Mi)}_clearActiveClass(t){t.classList.remove(Mi);const e=vt.find(`${da}.${Mi}`,t);for(const n of e)n.classList.remove(Mi)}static jQueryInterface(t){return this.each(function(){const e=$r.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(window,cg,()=>{for(const i of vt.find(ug))$r.getOrCreateInstance(i)});$e($r);const Eg="tab",Sg="bs.tab",Si=`.${Sg}`,yg=`hide${Si}`,Mg=`hidden${Si}`,bg=`show${Si}`,Tg=`shown${Si}`,Ag=`click${Si}`,wg=`keydown${Si}`,Cg=`load${Si}`,Rg="ArrowLeft",wl="ArrowRight",Lg="ArrowUp",Cl="ArrowDown",ua="Home",Rl="End",ui="active",Ll="fade",ha="show",Pg="dropdown",au=".dropdown-toggle",Ig=".dropdown-menu",fa=`:not(${au})`,Dg='.list-group, .nav, [role="tablist"]',Ng=".nav-item, .list-group-item",Og=`.nav-link${fa}, .list-group-item${fa}, [role="tab"]${fa}`,ou='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',pa=`${Og}, ${ou}`,Ug=`.${ui}[data-bs-toggle="tab"], .${ui}[data-bs-toggle="pill"], .${ui}[data-bs-toggle="list"]`;class ss extends Ze{constructor(t){super(t),this._parent=this._element.closest(Dg),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Y.on(this._element,wg,e=>this._keydown(e)))}static get NAME(){return Eg}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?Y.trigger(e,yg,{relatedTarget:t}):null;Y.trigger(t,bg,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(ui),this._activate(vt.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(ha);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),Y.trigger(t,Tg,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(Ll))}_deactivate(t,e){if(!t)return;t.classList.remove(ui),t.blur(),this._deactivate(vt.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(ha);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),Y.trigger(t,Mg,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(Ll))}_keydown(t){if(![Rg,wl,Lg,Cl,ua,Rl].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!Gn(s));let n;if([ua,Rl].includes(t.key))n=e[t.key===ua?0:e.length-1];else{const s=[wl,Cl].includes(t.key);n=Ao(e,t.target,s,!0)}n&&(n.focus({preventScroll:!0}),ss.getOrCreateInstance(n).show())}_getChildren(){return vt.find(pa,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=vt.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(Pg))return;const s=(r,a)=>{const o=vt.findOne(r,n);o&&o.classList.toggle(a,e)};s(au,ui),s(Ig,ha),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(ui)}_getInnerElement(t){return t.matches(pa)?t:vt.findOne(pa,t)}_getOuterElement(t){return t.closest(Ng)||t}static jQueryInterface(t){return this.each(function(){const e=ss.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(document,Ag,ou,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!Gn(this)&&ss.getOrCreateInstance(this).show()});Y.on(window,Cg,()=>{for(const i of vt.find(Ug))ss.getOrCreateInstance(i)});$e(ss);const Fg="toast",Bg="bs.toast",Kn=`.${Bg}`,kg=`mouseover${Kn}`,Hg=`mouseout${Kn}`,zg=`focusin${Kn}`,Vg=`focusout${Kn}`,Gg=`hide${Kn}`,Wg=`hidden${Kn}`,$g=`show${Kn}`,Xg=`shown${Kn}`,qg="fade",Pl="hide",Qs="show",tr="showing",Yg={animation:"boolean",autohide:"boolean",delay:"number"},jg={animation:!0,autohide:!0,delay:5e3};class zs extends Ze{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return jg}static get DefaultType(){return Yg}static get NAME(){return Fg}show(){if(Y.trigger(this._element,$g).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qg);const e=()=>{this._element.classList.remove(tr),Y.trigger(this._element,Xg),this._maybeScheduleHide()};this._element.classList.remove(Pl),Fs(this._element),this._element.classList.add(Qs,tr),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||Y.trigger(this._element,Gg).defaultPrevented)return;const e=()=>{this._element.classList.add(Pl),this._element.classList.remove(tr,Qs),Y.trigger(this._element,Wg)};this._element.classList.add(tr),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Qs),super.dispose()}isShown(){return this._element.classList.contains(Qs)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){Y.on(this._element,kg,t=>this._onInteraction(t,!0)),Y.on(this._element,Hg,t=>this._onInteraction(t,!1)),Y.on(this._element,zg,t=>this._onInteraction(t,!0)),Y.on(this._element,Vg,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=zs.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Vr(zs);$e(zs);var Os,Fr;class ut{static setToast(t){ae(this,Fr).innerText=t,ae(this,Os).show()}static hideToast(){ae(this,Os).hide()}}Os=new WeakMap,Fr=new WeakMap,Qe(ut,Os,zs.getOrCreateInstance("#toast")),Qe(ut,Fr,document.getElementById("toast-message"));class An{constructor(){this.state=null,this.currPage=1,this.totalPage=1,this.limit=6,this.offset=0,this.pathname=qt.getPathname()}setTitle(t){document.title=t}getOffset(){return this.limit*(this.currPage-1)}async render(){return""}async afterRender(){}async getPageData(){return""}initTooltip(){[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(e=>new Ei(e))}initEvent(){}setPaginationStyle(){const t=document.getElementById("prevBtn"),e=document.getElementById("nextBtn"),n=document.getElementById("currPage"),s=document.getElementById("totalPage");s.innerHTML=this.totalPage,n.innerHTML=this.currPage,this.currPage===1?t.setAttribute("disabled","true"):t.removeAttribute("disabled"),this.currPage===this.totalPage?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}onPaginationClick(t){const e=document.getElementById("prevBtn"),n=document.getElementById("nextBtn"),s=document.getElementById("pageBody");e.addEventListener("click",async()=>{this.currPage!==1&&(this.currPage-=1,this.offset=this.getOffset(),s.innerHTML=await t.getPageData(),this.setPaginationStyle(),t.initEvent())}),n.addEventListener("click",async()=>{this.currPage!==this.totalPage&&(this.currPage+=1,this.offset=this.getOffset(),s.innerHTML=await t.getPageData(),this.setPaginationStyle(),t.initEvent())})}async initPageData(t){const e=document.getElementById("pageBody");this.currPage=1,this.offset=0,e.innerHTML=await t.getPageData(),this.setPaginationStyle(),t.initEvent()}onReloadButtonClick(t){document.getElementById("reloadBtn").addEventListener("click",async()=>{await this.initPageData(t)})}onNavButtonClick(){document.querySelectorAll('[data-nav="true"]').forEach(e=>{e.addEventListener("click",async n=>{n.preventDefault(),await qt.navigateTo(e.href)})})}onPopstate(){}}const Ls=({text:i,path:t,classList:e="nav-link fs-13"})=>{const n=document.createElement("a");return n.href=t,n.className=e,n.innerHTML=i,n.dataset.nav="true",n};class Kg extends An{constructor(){super(),this.setTitle("RETRO PONG!")}async render(){return`
      <div class="d-grid gap-4">
        <div class="row py-4">
          <h1 class="text-center title">PONG!</h1>
        </div>
        <div class="row py-4">
          ${Ls({text:">> Press Start! <<",path:"/game",classList:"btn btn-outline-light fs-13"}).outerHTML}
        </div>
      </div>
      `}async afterRender(){this.onNavButtonClick()}}const hi=(i,t,e,n,s,r="on")=>{const a=t.startsWith("email")?"code-input":"";return`
    <div class="${i}">
      <div class="col-md-6 d-flex align-items-center justify-content-start fs-7">
        <div class="col-9 d-flex align-items-center justify-content-start fs-7">
          <label for="${t}" class="form-label mb-0">${e}</label>
        </div>
        <div class="col-3 d-flex align-items-center fs-7 d-none d-md-block">:</div>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center fs-7">
        <input type="${n}" id="${t}" class="form-control h-100 fs-7 bg-transparent ${a}" placeholder="${s}" autocomplete="${r}" />
      </div>
    </div>
  `},lu=({title:i,subtitle:t=""})=>`
      <div class="col-md-auto display-1 top-0">
        ${i}
        <span class="fs-7">
          ${t}
        </span>
      </div>
  `,Is=({text:i,classList:t,modalId:e})=>`
    <button type="button" class="${t}" data-bs-toggle="modal" data-bs-target="${e}">
      ${i}
    </button>
  `,ln=({borderColor:i,title:t,modalId:e,content:n,buttonList:s})=>{const r={registerBtn:'<button id="registerBtn" type="submit" class="btn btn-outline-light w-100 fs-12" form="registerForm" > >> REGISTER << </button>',submitBtn:'<button id="twoFactorLoginBtn" type="submit" class="btn btn-outline-light w-100 fs-12" form="login-code-form"> >> SUBMIT << </button>',emailVerifyBtn:'<button id="emailVerifyBtn" type="submit" class="btn btn-outline-light w-100 fs-12" form="emailVerifyForm"> >> VERIFY << </button>',profileEditBtn:'<button id="profileEditBtn" type="submit" class="btn btn-outline-light w-100 fs-12" form="editProfileForm"> >> EDIT << </button>',gameResultBtn:'<button id="gameResultBtn" type="button" class="btn btn-outline-light w-100 fs-12" data-bs-dismiss="modal"> >> CLOSE << </button>'};return`
  <div class="modal fade modal-lg" id="${e}" tabindex="-1" aria-labelledby="${e}Label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-black border-10 modal-border-${i}">
        <div class="modal-header pt-2 m-0 d-flex flex-column rounded-top-5 border-0 bg-black">
          <button type="button" class="btn-close p-0 border-0 d-flex align-items-center justify-content-center fs-15" data-bs-dismiss="modal" aria-label="Close">X</button>
          <h1 class="modal-title fs-16" id="${e}Label">${t}</h1>
        </div>
        <div class="modal-body">
          ${n}
        </div>
          <div class="modal-footer border-0 bg-black rounded-bottom-5 d-flex justify-content-center align-items-center">
            ${s.map(a=>r[a]).join("")}
          </div>
        </div>
      </div>
    </div>`},Zg=()=>`
    <form id="registerForm" class="form">
      <div class="container">
        ${hi("row my-5 mx-3","email","EMAIL","text","email","email")}
        ${hi("row mb-5 mx-3","nick","NICK","text","nickname")}
        ${hi("row mb-5 mx-3","password","PASS","password","PASSWORD","new-password")}
        ${hi("row mb-5 mx-3","passwordRe","PASS(re)","password","PASSWORD","new-password")}
      </div>
    </form>
  `,Jg=()=>`
		<form id="emailVerifyForm" class="form">
			<div class="container">
				${hi("row mb-5 mx-3","emailCode","MAILCODE","text","MAILCODE","one-time-code")}
			</div>
		</form>
	`,Qg=()=>{const i=`<a id='42LoginBtn' href="https://127.0.0.1/api/v1/login/intra/login/" class="btn btn-no-outline-hover fs-7">> 42 Login <</a>`,t=Is({text:"> Register <",classList:"btn btn-no-outline-hover fs-7",modalId:"#registerModal"}),e=ln({borderColor:"mint",title:"WELCOME!",modalId:"registerModal",content:Zg(),buttonList:["registerBtn"]}),n=ln({borderColor:"pink",title:"MAIL CODE",modalId:"emailVerifyModal",content:Jg(),buttonList:["emailVerifyBtn"]});return[i,`${t} ${e} ${n}`].map(r=>`
        <div class="row justify-content-md-center">
            <div class="col-md-auto text-center">
              ${r}
            </div>
          </div>
        `).join("")},rs=({id:i,text:t,classList:e="",disabled:n=!1,type:s="button",form:r="form"})=>n?`
    <button type=${s} id=${i} class="${e}" form=${r} disabled> ${t} </button>
  `:`<button type=${s} id=${i} class="${e}" form=${r}> ${t} </button>`,t_=()=>`
    <div class="container">
      <div class="fs-2 text-start">We've sent a passcode to your email!<br>Please verify your passcode.</div>
      <form id="login-code-form" class="form-floating p-4">
        <div class="row justify-content-center">
          <div class="col-6">
            <input type="text" minlength="6" maxlength="6" id="passcode" class="form-control text-center fs-8 bg-transparent code-input" placeholder="passcode" autocomplete="one-time-code"/>
          </div>
        </div>
      </form>
    </>
  `,Fn={email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}(\.[a-z]{2,4})?$/,nickname:/^[\w가-힣]{1,10}$/,password:/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,128}$/,passcode:/[a-zA-Z0-9]{6}$/,gameTitle:/^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',. /]{1,12}$/,comment:/^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',.~ /]{0,20}$/};class e_ extends An{constructor(){super();Xe(this,"handleTwoFactorSubmitEvent",async e=>{e.preventDefault(),await this.getAccessToken()});Xe(this,"handleLoginSubmitEvent",async e=>{e.preventDefault(),await this.get2FACode()});this.setTitle("Login"),this.email="",this.code=new URLSearchParams(window.location.search).get("code")}async render(){const e=lu({title:"PONG!",subtitle:"- The World's best retro pong game"}),n=ln({borderColor:"mint",title:"WAIT!",modalId:"loginModal",content:t_(),buttonList:["submitBtn"]}),s=rs({id:"loginBtn",text:"Login",classList:"btn btn-outline-light fs-13 px-5",type:"submit",form:"login-form"});return`
      ${e}
      <div class="d-flex justify-content-center align-items-center h-85">
        <div class="d-flex flex-column justify-content-around align-items-center h-90 py-3">
          <div class="d-flex flex-column justify-content-center align-content-center">
            <form id="login-form" class="mb-5">
              ${hi("row py-3","email-login","EMAIL","text","name @ mail","email")}
              ${hi("row py-3","password-login","PASSWORD","password","PASSWORD","current-password")}
            </form>
              ${s}
          </div>
          <div>
            ${Qg()}
          </div>
        </div>
          ${n}
      </div>
      `}async get2FACode(){const e=document.getElementById("email-login").value,n=document.getElementById("password-login").value,s=ye.getOrCreateInstance("#loginModal");if(!e||!n){ut.setToast("Please enter your email and password");return}if(Fn.email.test(e)===!1){ut.setToast("Invalid Email Address");return}await Jt.post("/login/email/login/",{email:e,password:n}).then(r=>{s.show(),ut.setToast(r.message||"Verification code Sent")}).catch(r=>{ut.setToast(`${r.message||"Login Failed"}`)})}async getAccessToken(){const e=ye.getOrCreateInstance("#loginModal"),n=document.getElementById("email-login").value,s=document.getElementById("passcode").value;if(!s){ut.setToast("Please enter your passcode");return}if(Fn.passcode.test(s)===!1){ut.setToast("Invalid Passcode");return}await Jt.post("/login/email/login/verify/",{email:n,code:s}).then(r=>{Me.storeToken(r.access_token),e.hide(),qt.navigateTo("/"),ut.setToast(r.message||"Login Successful")}).catch(r=>{ut.setToast(`${r.message||"Verification Failed"}`)})}addLoginSubmitEvent(){document.getElementById("login-form").addEventListener("submit",this.handleLoginSubmitEvent)}removeLoginSubmitEvent(){document.getElementById("login-form").removeEventListener("submit",this.handleLoginSubmitEvent)}add2FASubmitEvent(){document.getElementById("login-code-form").addEventListener("submit",this.handleTwoFactorSubmitEvent)}remove2FASubmitEvent(){document.getElementById("login-code-form").removeEventListener("submit",this.handleTwoFactorSubmitEvent)}handle2FALogin(){const e=document.getElementById("loginModal");this.addLoginSubmitEvent(),e.addEventListener("show.bs.modal",()=>{this.removeLoginSubmitEvent(),this.add2FASubmitEvent()}),e.addEventListener("hide.bs.modal",()=>{this.remove2FASubmitEvent(),this.addLoginSubmitEvent()})}submitRegisterForm(){document.getElementById("registerForm").addEventListener("submit",async e=>{e.preventDefault();const n=e.target.elements,s=n.email.value,r=n.nick.value,a=n.password.value,o=n.passwordRe.value;if(!s||!r||!a||!o){ut.setToast("Please fill in all fields");return}if(Fn.email.test(s)===!1||s.length>200){ut.setToast("Invalid Email Address");return}if(Fn.nickname.test(r)===!1){ut.setToast("Nickname must be 2-10 characters");return}if(a.length<8){ut.setToast("Password must be at least 8 characters");return}if(a.search(/[a-zA-Z]/)===-1){ut.setToast("Password must contain at least one letter");return}if(a.search(/[0-9]/)===-1){ut.setToast("Password must contain at least one number");return}if(a!==o){ut.setToast("Password does not match");return}const l=ye.getOrCreateInstance("#registerModal"),c=ye.getOrCreateInstance("#emailVerifyModal");await Jt.post("/login/email/register/",{email:s,username:r.toLowerCase(),password:a}).then(()=>{this.email=s,ut.setToast("Registration Successful"),document.getElementById("registerForm").reset(),l.hide(),c.show()}).catch(d=>{this.email="",ut.setToast(`${d.message||"Registration Failed"}`)})})}submitEmailVerifyForm(){document.getElementById("emailVerifyForm").addEventListener("submit",async e=>{e.preventDefault();const{email:n}=this,s=document.getElementById("emailCode").value,r=ye.getOrCreateInstance("#emailVerifyModal");await Jt.post("/login/email/register/verify/",{email:n,code:s}).then(a=>{ut.setToast(a.message||"Email Verification Successful"),document.getElementById("emailVerifyForm").reset(),r.hide(),this.email=""}).catch(a=>{ut.setToast(`${a.message||"Verification Failed"}`)})})}async handle42Login(){await Jt.get(`/login/intra/callback/?code=${this.code}`).then(e=>{Me.storeToken(e.access_token),qt.navigateTo("/"),ut.setToast(e.message||"42 Login Successful")}).catch(e=>{ut.setToast("42 Login Failed"),Me.clearToken(),qt.navigateTo("/login"),ut.setToast(`${e.message||"42 Login Failed"}`)})}async afterRender(){if(this.code){await this.handle42Login();return}this.handle2FALogin(),this.submitRegisterForm(),this.submitEmailVerifyForm()}}const n_=({nick:i,comment:t})=>`
	<form id="editProfileForm" class="container-fluid px-5" >
		<div class="row d-flex flex-row mb-5 px-2 fs-8">
			<div class="col-5 d-flex align-items-center justify-content-start">
				<label for="editNickname" class="form-label">NICK</label>
			</div>
			<div class="col-1 d-flex align-items-center">:</div>
			<div class="col-6 d-flex align-items-center justify-content-center">
				<input type="text" id="editNickname" class="form-control h-100 bg-transparent text-white fs-8" value=${i} />
			</div>
		</div>
		
		<div class="row d-flex flex-row px-2 fs-8">
			<div class="col-5 d-flex align-items-center justify-content-start">
				<label for="editComment" class="form-label">COMMENT</label>
			</div>
			<div class="col-1 d-flex align-items-center">:</div>
			<div class="col-6 d-flex align-items-center justify-content-center">
				<textarea type="text" id="editComment" class="form-control bg-transparent fs-8">${t}</textarea>
			</div>
		</div>
		
	</form>
	`,i_=({type:i,content:t})=>{const e=`profile-${i}`,n=i==="comment"?`<textarea id=${e} class="col-7 bg-transparent border-0 text-white" style="resize: none" disabled>${t}</textarea>`:`<div id=${e} class="col-7 overflow-y-scroll overflow-scrollbar-x">${t}</div>`;return`
	<div class="row">
		 	<div class="col-4 overflow-y-scroll overflow-scrollbar-x text-white-50">${i==="username"?"nick":i}</div>
	  	<div class="col-1 text-white-50"></div>
	  	${n}
	</div>
	
	`},cu=(i="",t=[])=>t.length===0?`
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="p-5"> No Battle History :( </div>
      </div>
    `:`
    <table class="table table-borderless text-center">
      <thead>
        <tr>
          <th scope="col" class="text-warning fs-2">DATE</th>
          <th scope="col" class="text-warning fs-2">PLAYER1</th>
          <th scope="col" class="text-warning fs-2"></th>
          <th scope="col" class="text-warning fs-2">PLAYER2</th>
        </tr>
      </thead>
      <tbody>
        ${t.map(n=>{const s=n.player1_username,r=n.player2_username,a=i===s?"text-success":"text-success-emphasis",o=i===r?"text-success":"text-success-emphasis",l=n.player1_score,c=n.player2_score,d=new Date(n.start_time),h=(d.getMonth()+1).toString().padStart(2,"0"),f=d.getDate().toString().padStart(2,"0"),m=d.getHours().toString().padStart(2,"0"),g=d.getMinutes().toString().padStart(2,"0");return`
      <tr>
        <td>${h}/${f}<br/>${m}:${g}</td>
        <td><span class="${a}">${s}</span><br/>${l}</td>
        <td>:<br/><span class="text-light-emphasis fs-2">:</span></td>
        <td><span class="${o}">${r}</span><br/>${c}</td>
      </tr>
    `}).join("")}
      </tbody>
    </table>
  `;function s_(i){return new Promise((t,e)=>{const n=new FileReader;n.onload=s=>{const r=new Image;r.onload=()=>{const a=document.createElement("canvas"),o=a.getContext("2d"),l=800,c=600;let{width:d}=r,{height:h}=r;d>h?d>l&&(h*=l/d,d=l):h>c&&(d*=c/h,h=c),a.width=d,a.height=h,o.drawImage(r,0,0,d,h),a.toBlob(f=>{t(f)},i.type)},r.src=s.target.result},n.onerror=()=>{e(new Error("Failed to read file"))},n.readAsDataURL(i)})}class r_ extends An{constructor(){super(),this.setTitle("Profile"),this.hasError=!1}async getProfile(){return Jt.get("/users/profile/").catch(()=>(this.hasError=!0,ut.setToast("Failed to get user info"),[]))}async getPageData(){const t=await this.getProfile();if(t.length===0)return`
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="fs-11"> No User Profile :( </div>
        </div>
      `;const e=Object.keys(t).map(r=>r==="image"||r==="history"||r==="is_active"?"":`${i_({type:r,content:t[r]??""})}`).join(""),n=Is({text:">> EDIT PROFILE <<",classList:"btn btn-no-outline-hover fs-8",modalId:"#editProfileModal"}),s=ln({borderColor:"pink",title:"EDIT PROFILE",modalId:"editProfileModal",content:n_({nick:t.username,comment:t.comment??"Please write a comment"}),buttonList:["profileEditBtn"]});return`
        <div class="row d-flex justify-content-center">
          <div class="row d-flex flex-row mt-4">
            <div class="col-9 px-4 fs-7">
              ${e}
            </div>
            <div class="col-3 p-2 h-90">
              <label for="profileImg" class="ratio ratio-3x4">
                <img id="profileImgSrc" src=${t.image} onerror="this.src='/img/profile_fallback.jpg';" class="img-fluid border border-2 border-light rounded profile-hover" alt="PROFILE IMAGE" style="object-fit: cover;"/>
              </label>
              <input type="file" accept="image/jpg, image/png" id="profileImg" class="d-none border-0">
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            ${n}
            ${s}
          </div>
        </div>
        <div class="row text-center fs-7">BATTLE HISTORY</div>
        <div class="row h-70">
          <div class="d-flex flex-column fs-7 border border-light overflow-auto h-80">
            <div class="d-flex">
              ${cu(t.username,t.history)}
            </div>
          </div>
        </div>
    `}async render(){return`
      ${lu({title:"PLAYER PROFILE"})}
      <div id="pageBody" class="container h-75 w-80">
      </div>
    `}async initPageData(){const t=document.getElementById("pageBody");t.innerHTML=await this.getPageData()}onEditClick(){const t=ye.getOrCreateInstance("#editProfileModal");document.getElementById("editProfileForm").addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("editNickname").value,r=document.getElementById("editComment").value;if(s===document.getElementById("profile-username").innerText&&r===document.getElementById("profile-comment").value){ut.setToast("No changes made");return}if(Fn.nickname.test(s)===!1){ut.setToast("Invalid nickname");return}if(Fn.comment.test(r)===!1){ut.setToast("Invalid comment");return}await Jt.patch("/users/profile/edit/",{username:s.toLowerCase(),comment:r}).then(a=>{ut.setToast(a.message||"Profile Update Successful"),t.hide(),this.afterRender()}).catch(a=>ut.setToast(`${a.message||"Profile Update Failed"}`))})}onProfileImgClick(){document.getElementById("profileImg").addEventListener("change",async t=>{const e=t.target.files[0];let n;if(!e){ut.setToast("No file selected");return}try{n=await s_(e)}catch{ut.setToast("Image Upload Failed");return}const s=new FormData;s.append("image",n),await Jt.patch("/users/profile/upload/",s,"image").then(r=>{ut.setToast(r.message||"Profile Image Update Successful"),this.afterRender()}).catch(r=>ut.setToast(`${r.message||"Profile Image Update Failed"}`))})}onEditProfileClick(){const t=document.getElementById("editProfileModal"),e=document.getElementById("editNickname"),n=document.getElementById("editComment");t.addEventListener("show.bs.modal",()=>{e.value=document.getElementById("profile-username").innerText,n.value=document.getElementById("profile-comment").value})}async afterRender(){await this.initPageData(),!this.hasError&&(this.onEditClick(),this.onProfileImgClick(),this.onEditProfileClick())}}const a_=()=>{const i=t=>`<span class="text-info">${t}</span>`;return`
    <div class="container-fluid">
      <div class="d-flex flex-column justify-content-center px-3">
        <h1 class="fs-11 text-success">Remote Play</h1>
        <p class="fs-8 text-break">
         ${i("mouse")} control
        </p>
        <h1 class="fs-11 text-success">Local Play</h1>
        <p class="fs-8 text-break">
          Player 1 key
          <br />
          ${i("[ W / S / A / D ]")}
          <br />
          Player 2 key
          <br />
          ${i("[ Up / Down / Left / Right ]")}
        </p>
      </div>
    </div>
  `};class o_ extends An{constructor(){super(),this.setTitle("Game")}async render(){const t=Ls({text:"Create Room",path:"/game/create",classList:"btn btn-no-outline-hover fs-15 btn-arrow"}).outerHTML,e=Ls({text:"Join Room",path:"/game/join",classList:"btn btn-no-outline-hover fs-15 btn-arrow"}).outerHTML,n=Ls({text:"Local Play",path:"/game/play",classList:"btn btn-no-outline-hover fs-15 btn-arrow"}).outerHTML,s=Is({text:"[ How To Play ]",classList:"btn btn-no-outline-hover fs-10 manualBtn",modalId:"#gameManualModal"});return`
    ${ln({borderColor:"mint",title:"How To Play",modalId:"gameManualModal",content:a_(),buttonList:[]})}
    <div class="d-flex flex-column justify-content-around align-items-center h-90">
      <h1 class="text-center fs-18">Get ready for the next battle!</h1>
      <div class="d-flex flex-column">
        ${s}
        ${t}
        ${e}
        ${n}
      </div>
    </div>
    `}async afterRender(){this.onNavButtonClick()}}const Ss=({titleId:i,title:t,content:e,label:n=!1,contentCustom:s=!1})=>{const r=n?`<label for=${i} class="form-label">${t}:</label>`:`<div id=${i}>${t}:</div>`,a=s?`${e}`:`<div class="col-md-8 h-100 d-flex flex-row justify-content-center align-items-center overflow-scroll">
				${e}
			</div>`;return`
		<div class="row h-25 w-100 fs-13 pt-4 d-flex justify-content-center align-items-center">
			<div class="col-md-4 h-100 fs-13 d-flex justify-content-center align-items-center">
				${r}
			</div>
			${a}
		</div>
	`},l_=()=>{const t=`room-${new Date().getTime().toString(16).slice(-4)}`;return`
		<form id="createRoomForm" class="form">
			<div class="container">
					${Ss({titleId:"gameTitle",title:"TITLE",content:`<span class="fs-13">[</span>
											<input type="text" id="gameTitle" class="form-control w-75 fs-10 bg-transparent" placeholder="title" value="${t}"/>
											<span class="fs-13">]</span>`,label:!0})}
					${Ss({titleId:"gameBall",title:"BALL",content:`<input type="color" id="gameBall" class="form-control form-control-color p-1 border-1 border-light rounded" value="#e66465"/>
											<span id="gameBallValue" class="px-4">#e66565</span>`,label:!0})}
					${Ss({titleId:"gameSpeed",title:"SPEED",content:`<input type="range" id="gameSpeed" class="form-range w-50 border-1 border-light rounded" min="1" max="5" step="1"/>
											<span id="gameSpeedValue" class="px-4">3</span>`,label:!0})}
					${Ss({titleId:"gameMap",title:"MAP",content:`<input type="radio" class="btn-check d-none" name="mapOptions" id="gameMap1" data-map="Futuristic Horizon" autocomplete="off" checked/>
											<label class="btn btn-outline-light mx-2 fs-9" for="gameMap1">
												<img src="/img/map_futuristic_horizon.jpg" class="img-fluid" alt="wow"/>
											</label>
											<input type="radio" class="btn-check d-none" name="mapOptions" id="gameMap2" data-map="Mountain" autocomplete="off"/>
											<label class="btn btn-outline-light mx-2 fs-9" for="gameMap2">
												<img src="/img/map_mountain.jpg" class="img-fluid" alt="wow"/>
											</label>
											<input type="radio" class="btn-check d-none" name="mapOptions" id="gameMap3" data-map="Pixel Rain" autocomplete="off"/>
											<label class="btn btn-outline-light mx-2 fs-9" for="gameMap3">
												<img src="/img/map_pixel_rain.jpg" class="img-fluid" alt="wow"/>
											</label>`})}
					${Ss({titleId:"gameMode",title:"MODE",content:`<div class="col-md-8 h-100 d-flex flex-column flex-xl-row flex-xxl-row justify-content-center align-items-center overflow-scroll">
												<span class="px-3 d-none d-xl-block d-xxl-block">[</span>
												<input type="radio" class="btn-check d-none" name="modeOptions" id="normal" autocomplete="off" checked/>
												<label class="btn btn-outline-light fs-9" for="normal">NORMAL</label>
												<span class="px-3 d-none d-xl-block d-xxl-block">/</span>
												<input type="radio" class="btn-check d-none" name="modeOptions" id="tournament" autocomplete="off"/>
												<label class="btn btn-outline-light fs-9" for="tournament">TOURNAMENT</label>
												<span class="px-3 d-none d-xl-block d-xxl-block">]</span>
											</div>`,contentCustom:!0})}
			</div>
		</form>
	`};class c_ extends An{constructor(){super(),this.setTitle("Create Room"),this.titleState=!0,this.ballState=!0,this.speedState=!0,this.mapState=!0,this.modeState=!0,this.progressState=100}async render(){const t=rs({id:"createRoomBtn",text:"<< Create Room >>",classList:"btn btn-outline-light mt-3 fs-10",type:"submit",form:"createRoomForm"});return`
      <div class="container position-relative h-100 p-3 game-room-border">
        <div class="position-absolute">
          <button id="backBtn" class="btn btn-no-outline-hover fs-2"><< Back</button>
        </div>
        <h1 class="fs-15 text-center">ROOM SETTING</h1>
        <div class="container h-75 w-100 d-flex flex-column mt-3 justify-content-between align-items-center">
          <div class="row game-setting-container h-75 w-100 mb-4 overflow-y-scroll">
            ${l_()}
          </div>
          <div class="row h-25 w-75 pt-4">
            <div id="progressBar" class="progress h-25 p-0" role="progressbar" aria-label="Animated striped progress" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div id="progressBarNow" class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div>
            </div>
            ${t}
          </div>
        </div>
      </div>
      `}handleBackBtnClick(){document.getElementById("backBtn").addEventListener("click",()=>{history.back()})}async submitGameForm(t){var o,l;const e=t.gameTitle.value.toLowerCase(),n=t.gameBall.value,s=t.gameSpeed.value,r=(o=[...t.mapOptions].filter(c=>c.checked===!0)[0])==null?void 0:o.dataset.map,a=(l=[...t.modeOptions].filter(c=>c.checked===!0)[0])==null?void 0:l.id;await Jt.post("/rooms/create/",{room_name:e,game_ball:n,game_speed:s,game_map:r,game_mode:a}).then(c=>{const d=c.id.toString();document.getElementById("createRoomForm").reset(),ut.setToast("Room created successfully"),qt.replaceState("/game/join"),qt.navigateTo(`/game/waiting?id=${d}&mode=${a}`)}).catch(c=>{if(c.message==="UNIQUE constraint failed: room.room_name"){ut.setToast("Room name already exists"),this.titleState=!1,this.progressBar();const d=document.getElementById("gameTitle");d.focus(),d.select()}else ut.setToast("Failed to create room")})}progressBar(){this.progressState=(this.titleState+this.ballState+this.speedState+this.mapState+this.modeState)*20,document.getElementById("progressBarNow").style.width=`${this.progressState}%`,document.getElementById("createRoomBtn").disabled=this.progressState!==100,document.getElementById("progressBar").setAttribute("aria-valuenow",this.progressState)}addInputEvents(){document.getElementById("gameBall").addEventListener("input",t=>{document.getElementById("gameBallValue").innerText=t.target.value}),document.getElementById("gameSpeed").addEventListener("input",t=>{document.getElementById("gameSpeedValue").innerText=t.target.value}),document.getElementById("gameTitle").addEventListener("input",t=>{t.preventDefault(),this.titleState=t.target.value!==""&&Fn.gameTitle.test(t.target.value),this.progressBar()}),document.getElementsByName("mapOptions").forEach(t=>{t.addEventListener("input",()=>{this.mapState=!0,this.progressBar()})}),document.getElementsByName("modeOptions").forEach(t=>{t.addEventListener("input",()=>{this.modeState=!0,this.progressBar()})})}async afterRender(){this.handleBackBtnClick(),document.getElementById("createRoomForm").addEventListener("submit",t=>{t.preventDefault(),this.submitGameForm(t.target.elements)}),this.addInputEvents()}}const d_=({title:i,map:t,speed:e,ball:n})=>`
<div class="container">
  <div class="d-flex justify-content-center align-items-center carousel">
      <img src="${{"Futuristic Horizon":"/img/map_futuristic_horizon.jpg",Mountain:"/img/map_mountain.jpg","Pixel Rain":"/img/map_pixel_rain.jpg"}[t]}" onerror="this.src='/img/profile_fallback.jpg';" class="img-thumbnail w-75 h-75" alt="${t}"/>
      <div class="carousel-caption fs-3">
        ${t}
      </div>
  </div>
  <div class="d-flex justify-content-center align-items-center pt-3">
     <table class="table table-borderless fs-11">
      <tbody>
        <tr>
          <th scope="row">Title</th>
          <td>:</td>
          <td colspan="5">[${i}]</td>
        </tr>
        <tr>
          <th scope="row">Speed</th>
          <td>:</td>
          <td colspan="4">
            <input type="range" class="form-range" id="gameSpeedRange" min="0" max="5" step="1" value="${e}" style="border: 0 !important;" disabled>
          </td>
          <td colspan="1">
            <span>X${e}</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Ball</th>
          <td>:</td>
          <td colspan="1" class="pt-4">
              <div class="border border-light rounded-2" style="background-color: ${n}; width: 3rem; height: 3rem;"/>
          </td>
          <td colspan="3">${n}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;class u_ extends An{constructor(){super(),this.mode="normal",this.setTitle("Join Room"),this.roomMap=new Map}async getRoomList(){return Jt.get(`/rooms/join/${this.mode}/`).catch(()=>(ut.setToast("Failed to get room list"),[]))}async getPageData(){const t=await this.getRoomList();if(this.roomMap.clear(),t.length===0)return`
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="fs-11 align-self-center"> No Rooms :( </div>
      </div>`;const e=n=>{this.roomMap.set(`room${n.id}`,{id:n.id.toString(),title:n.room_name,map:n.game_map,speed:n.game_speed,ball:n.ball_color});const s=this.mode==="normal"?`[ ${n.room_name} ]`:`[ ${n.room_name} ] (${n.current_players}/4)`;return`
        <button id="room${n.id}" type="button" class="btn btn-no-outline-hover fs-11 btn-arrow" data-bs-toggle="modal" data-bs-target="#roomInfoModal">
          ${s}
        </button>`};return t.map(e).join("")}onModalOpen(){const t=document.getElementById("roomInfoModal");t.addEventListener("show.bs.modal",e=>{const n=e.relatedTarget.id,s=this.roomMap.get(n),r=document.querySelector("#roomInfoModal .modal-body"),a=document.querySelector("#roomInfoModal .modal-footer");a.innerHTML=Ls({text:">> ENTER <<",path:`/game/waiting?id=${s.id}&mode=${this.mode}`,classList:"btn btn-outline-light w-100 fs-12"}).outerHTML;const o=document.querySelector("#roomInfoModal .modal-footer a");o.addEventListener("click",async l=>{l.preventDefault(),ye.getInstance(t).hide(),await qt.navigateTo(o.href)}),r.innerHTML=d_(s)})}async render(){const t=rs({id:"reloadBtn",text:"> Reload",classList:"btn fs-2 position-absolute top-0 end-0 mt-2 me-2 btn-no-outline-hover"});return`
      ${ln({borderColor:"pink",title:"Room Info",modalId:"roomInfoModal",content:"",buttonList:["joinRoomBtn"]})}
      <div class="container h-100 p-3 game-room-border overflow-hidden">
        <div class="d-flex justify-content-center position-relative">
          <h1 class="display-1 text-center">[ Room List ]</h1>
          ${t}
        </div>
        <nav class="nav nav-tabs">
          <button class="col btn btn-outline-light fs-1 active" id="normalTab" data-bs-toggle="tab" type="button">Normal</button>
          <button class="col btn btn-outline-light fs-1" id="tournamentTab" data-bs-toggle="tab" type="button" >Tournament</button>
        </nav>
        <div class="d-flex flex-column h-75 justify-content-center">
          <div id="pageBody" class="tab-pane active d-flex flex-column flex-column overflow-auto h-100 my-3 px-3">
          </div>
        </div>
      </div>
      `}async initPageData(){const t=document.getElementById("pageBody");t.innerHTML=await this.getPageData()}onTabClick(){document.querySelectorAll('[data-bs-toggle="tab"]').forEach(e=>{e.addEventListener("click",async n=>{this.mode=n.target.id==="normalTab"?"normal":"tournament",await this.initPageData()})})}onReloadButtonClick(){document.getElementById("reloadBtn").addEventListener("click",async()=>{await this.initPageData()})}async afterRender(){await this.initPageData(),this.onTabClick(),this.onReloadButtonClick(),this.onModalOpen()}}const h_=({id:i,name:t,profileImg:e,win:n,lose:s})=>{const r=t?`${n}W/${s}L`:"...";return`
      <div class="row game-player-card-border g-3">
        <div class="col-md-8 align-self-center text-start fs-7">
          <div class="text-break">
            <div class="row">
              <span id='player${i}-id' class="text-info text-opacity-75">Player ${i}</span>
            </div>
            <div class="row">
              <span id='player${i}-name' >${t||"waiting..."}</span>
            </div>
            <div class="row">
              <span id='player${i}-score' >${r}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 align-content-center">
          <div id='player${i}-img' class="ratio ratio-1x1">
            ${e?`<img src="${e}" onerror="this.src='/img/profile_fallback.jpg';" class="img-fluid" alt="profile" style="object-fit: cover;" />`:""}
          </div>
        </div>
      </div>
  `};var Br;class kt{static getAccessMessage(){const t={type:"access",token:Me.getAccessToken()};return JSON.stringify(t)}static createSocket(t){return new WebSocket(`${ae(this,Br)}${t}`)}static closeRoomSocket(){this.roomSocket&&(this.roomSocket.close(),this.roomSocket=null)}static closeGameSocket(){this.gameSocket&&(this.gameSocket.close(),this.gameSocket=null)}static closeSockets(){this.closeRoomSocket(),this.closeGameSocket()}static popstateEvent(t){return async()=>{const e=t==="room"?this.roomSocket:this.gameSocket;!e||e.readyState===WebSocket.CLOSING||(ut.setToast("You left the game"),e.close())}}static handlePopstate(t){window.addEventListener("popstate",this.popstateEvent(t),{once:!0})}static setRoomSocket(){const t=new URLSearchParams(document.location.search),e=t.get("id"),n=t.get("mode");if(isNaN(parseInt(e,10))||n!=="normal"&&n!=="tournament"){ut.setToast("Invalid Access to the Room"),qt.replaceState("/");return}this.roomSocket=this.createSocket(`/${n}_room/${e}/`),this.handlePopstate("room"),this.roomSocket.onopen=()=>{this.roomSocket&&this.roomSocket.send(this.getAccessMessage())},this.roomSocket.onclose=async s=>{s.code!==1e3&&await qt.navigateTo("/game"),this.roomSocket=null},this.roomSocket.onerror=()=>{ut.setToast("Cannot join the room")}}static setOffline(){this.closeSockets(),this.onlineSocket&&(this.onlineSocket.close(),this.onlineSocket=null)}static setOnline(){(!this.onlineSocket||this.onlineSocket.readyState===WebSocket.CLOSED)&&(this.onlineSocket=this.createSocket("/login/")),this.onlineSocket.onopen=()=>{this.onlineSocket.send(this.getAccessMessage())},this.onlineSocket.onclose=()=>{this.onlineSocket=null}}}Br=new WeakMap,Qe(kt,Br,"ws://127.0.0.1/ws"),Xe(kt,"onlineSocket",null),Xe(kt,"roomSocket",null),Xe(kt,"gameSocket",null);class f_ extends An{constructor(){super(),this.setTitle("Waiting Room");const t=new URLSearchParams(document.location.search);this.roomTitle="",this.roomMode=t.get("mode"),this.players=this.roomMode==="normal"?[{id:1},{id:2}]:[{id:1},{id:2},{id:3},{id:4}]}async render(){return`
      <div class="container h-100 p-3 game-room-border">
        <div class="d-flex flex-column h-100 position-relative">
          <div class="position-absolute top-0 start-0">
            <button id="backBtn" class="btn btn-no-outline-hover fs-2"><< Back</button>
          </div>
          <h1 id="room-title" class="fs-15 text-center">Welcome to<br />[ ${this.roomTitle} ]</h1>
          <div class="container overflow-auto h-100">
            <div id="player-container" class="row row-cols-1 row-cols-md-2 g-1">
              ${this.players.map(t=>h_(t)).join("")}
            </div>
          </div>
        </div>
      </div>
      `}addRoomTitle(){if(!this.roomTitle)return;const t=document.getElementById("room-title");t.innerHTML=`Welcome to<br />[ ${this.roomTitle} ]`}addPlayers(){this.players.forEach(t=>{const e=document.getElementById(`player${t.id}-id`),n=document.getElementById(`player${t.id}-name`),s=document.getElementById(`player${t.id}-score`),r=document.getElementById(`player${t.id}-img`);e.innerHTML=`Player ${t.id}`,n.innerHTML=t.name||"waiting...",s.innerHTML=t.name?`${t.win}W/${t.lose}L`:"...",r.innerHTML=t.profileImg?`<img src="${t.profileImg}" onerror="this.src='/img/profile_fallback.jpg';" class="img-fluid" alt="profile" style="object-fit: cover;" />`:""})}makePlayerList(t){const e=this.roomMode==="normal"?2:4,n=[];for(let s=0;s<e;s+=1)n.push({id:s+1,name:t[`user${s}`],profileImg:t[`user${s}_image`],win:t[`user${s}_win`],lose:t[`user${s}_lose`]});this.players=n}handleBackBtnClick(){document.getElementById("backBtn").addEventListener("click",async()=>{window.removeEventListener("popstate",kt.popstateEvent),ut.setToast("You left the room"),kt.roomSocket.close(),history.back()},{once:!0})}async afterRender(){this.handleBackBtnClick(),kt.roomSocket.onmessage=t=>{const e=JSON.parse(t.data);switch(this.roomTitle=e.room_name,this.addRoomTitle(),e.type){case"users":this.makePlayerList(e),this.addPlayers();break;case"start_game":kt.roomSocket.close(),qt.replaceState("/game"),this.roomMode==="normal"?qt.navigateTo(`/game/play?id=${e.room_id}&mode=${this.roomMode}`):qt.navigateTo(`/game/play?semi_1=${e.room_id_semi_1}&semi_2=${e.room_id_semi_2}&final=${e.room_id_final}&mode=semi-final`);break;case"error":ut.setToast(e.message),kt.roomSocket.close(),history.back();break}}}}const p_=({id:i,name:t,win:e,lose:n,comment:s,isActive:r,profileImg:a})=>{const o=r?{color:"bg-success",text:"online"}:{color:"bg-danger",text:"offline"},l=s||"...";return`
  <div class="col d-flex justify-content-center align-self-center">
    <div class="card text-bg-dark border-5 border-light justify-content-center rounded-5 p-3 pt-0 my-1 position-relative friend-hover" style="width: 33rem; min-width: 33rem;">
      <div class="row g-0 align-self-end">
        <button class="btn-close fs-4 pt-1" data-nick="${t}" data-id="friend${i}">x</button>
      </div>
      <div id="friend${i}" class="row g-0" data-bs-toggle="modal" data-bs-target="#friendDetailModal">
        <div class="col-md-8 align-self-center">
          <div class="card-body fs-4 text-break">
            <div class="row">
              <p class="card-text ">name: ${t}</p>
            </div>
            <div class="row">
              <p class="card-text ">win/lose: ${e}/${n}</p>
            </div>
            <div class="row">
              <p class="card-text text-truncate">comment: ${s}</p>
            </div>
            <div class="row">
              <p class="card-text position-relative">status: ${o.text} <span class="position-absolute p-2 text-bg-secondary rounded-circle ${o.color} ms-1" style="top: 27%;" /></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 align-content-center">
          <div class="ratio ratio-1x1">
            <img src=${a} onerror="this.src='/img/profile_fallback.jpg';" class="rounded-3" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-comment" data-bs-title="${l}" alt="profile" style="object-fit: cover;" />
          </div>
        </div>
      </div>
    </div>
  </div>
  `},m_=()=>{const i=Is({text:"> WAITING",classList:"btn btn-no-outline-hover fs-7",modalId:"#friendWaitModal"}),t=Is({text:"> ADD",classList:"btn btn-no-outline-hover fs-7",modalId:"#friendAddModal"});return`
  	${[`${rs({id:"reloadBtn",text:"> Reload",classList:"btn btn-no-outline-hover fs-7"})}`,`${i}`,`${t}`].join("")}
	`},g_=({nick:i})=>`
    <div class="row my-2" data-wait-item=${i}>
      <div class="col-8 d-flex align-items-center justify-content-start fs-8">${i}</div>
        <div class="col-2 d-flex align-items-center justify-content-center">
          <button class="friend-accept-btn btn btn-friend-accept rounded-5 fs-8" data-nick=${i}>OK</button>
        </div>
      <div class="col-2 d-flex align-items-center justify-content-center">
        <button class="friend-reject-btn btn btn-friend-reject rounded-5 fs-8" data-nick=${i}>NO</button>
      </div>
    </div>`,__=({nick:i})=>`
  <div class="row my-2 px-4 d-flex justify-content-center align-items-center">
    <div class="col-10 fs-10 text-wrap text-break" data-add-btn-target=${i}>${i}</div>
    <button class="col-2 friend-request-btn btn btn-no-outline-hover fs-8" data-nick=${i}>+</button>
  </div>
  `,v_=()=>`
    <div class="container p-3">
      <div id="friendWaitListContainer" class="inner-container vh-50 px-5 py-3 border border-9 border-light rounded">
      </div>
    </div>
  `,x_=()=>`
    <div class="container px-5 w-100 h-100 d-flex flex-column align-items-center">
      <div class="row w-100 h-25 px-3 border border-9 border-light rounded">
        <span class="col-2 fs-8 text-center">-></span>
        <input id="searchFriend" type="text" class="col-10 text-light bg-transparent fs-8 border-0 px-5"/>
      </div>
      <div id="friendSearchListContainer" class="row row-cols-1 d-flex flex-column flex-nowrap w-100 vh-50 overflow-y-scroll my-5 px-3 py-3 border border-9 border-light rounded">
      </div>
    </div>
  `,E_=({currPage:i,totalPage:t})=>{const e=rs({id:"prevBtn",text:"<",classList:"fs-7 btn btn-no-outline-hover",disabled:i===1}),n=rs({id:"nextBtn",text:">",classList:"fs-7 btn btn-no-outline-hover",disabled:t===i});return`
    <div id="pagination" class="d-flex justify-content-center position-sticky bottom-0">
      ${e}
      <div class="fs-7 align-self-center">
        <span id="currPage">${i}</span> / <span id="totalPage">${t}</span>
      </div>
      ${n}
    </div>
    `};function S_(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{i.apply(this,n)},t)}}class y_ extends An{constructor(){super(),this.setTitle("Friends"),this.friendDetailMap=new Map}async getFriends(){const t=`/friends/friend_list/?limit=${this.limit}&offset=${this.offset}`;try{const e=await Jt.get(t);return this.totalPage=e.total,e.friends}catch{return document.getElementById("pagination").classList.add("d-none"),ut.setToast("Failed to get friends list"),[]}}async getPageData(){const t=await this.getFriends();return this.friendDetailMap.clear(),t.length===0?(document.getElementById("pagination").classList.add("d-none"),'<div class="fs-15 align-self-center"> No Friends :( </div>'):(document.getElementById("pagination").classList.remove("d-none"),`
      <div class="row row-cols-lg-2 w-100">
        ${t.map(n=>(this.friendDetailMap.set(`friend${n.friend_user}`,{username:n.friend_info.username,history:n.friend_info.history}),p_({id:n.friend_user,name:n.friend_info.username,win:n.friend_info.win,lose:n.friend_info.lose,comment:n.friend_info.comment,isActive:n.friend_info.is_active,profileImg:n.friend_info.image}))).join("")}
      </div>
    `)}onFriendAcceptBtnClick(){document.querySelectorAll(".friend-accept-btn").forEach(t=>{t.addEventListener("click",async e=>{const n=e.target.dataset.nick;await Jt.patch("/friends/waiting/",{friend_name:n,request_patch:"1"}).then(async s=>{s.status===201&&(await this.initPageData(this),this.onReloadButtonClick(this),this.onPaginationClick(this),ut.setToast("Friend accepted"))}).catch(s=>{ut.setToast(`${s.message||"Failed to accept friend"}`)}).finally(()=>{document.querySelector(`[data-wait-item="${n}"]`).remove()})})})}onFriendRejectBtnClick(){document.querySelectorAll(".friend-reject-btn").forEach(t=>{t.addEventListener("click",async e=>{const n=e.target.dataset.nick;await Jt.patch("/friends/waiting/",{friend_name:n,request_patch:"0"}).then(s=>{s.status===200&&ut.setToast("Friend rejected")}).catch(s=>{ut.setToast(`${s.message||"Failed to reject friend"}`)}).finally(()=>{document.querySelector(`[data-wait-item="${n}"]`).remove()})})})}onFriendRequestBtnClick(){document.querySelectorAll(".friend-request-btn").forEach(t=>{t.addEventListener("click",async e=>{const n=e.target.dataset.nick;await Jt.patch("/friends/add/",{friend_name:n}).then(s=>{s.status===200&&ut.setToast(s.data.error||"Already a friend"),s.status===201&&ut.setToast(`sent a friend request to ${n}`)}).catch(s=>{ut.setToast(`${s.message||"Failed to send friend request"}`)})}),t.addEventListener("mouseover",e=>{const n=e.target.dataset.nick;document.querySelector(`[data-add-btn-target="${n}"]`).classList.add("text-success")}),t.addEventListener("mouseout",e=>{const n=e.target.dataset.nick;document.querySelector(`[data-add-btn-target="${n}"]`).classList.remove("text-success")})})}onFriendWaitModalEvent(){const t=document.getElementById("friendWaitModal"),e=document.getElementById("friendWaitListContainer");t.addEventListener("hide.bs.modal",()=>{for(;e.firstChild;)e.removeChild(e.firstChild)}),t.addEventListener("show.bs.modal",async()=>{await Jt.get("/friends/waiting/").then(n=>{e.innerHTML=n.map(s=>g_({nick:s.friend_name})).join("")||"No waiting list",this.onFriendAcceptBtnClick(),this.onFriendRejectBtnClick()}).catch(()=>{ut.setToast("Failed to get waiting list")})})}onFriendAddModalEvent(){const t=document.getElementById("friendAddModal"),e=document.getElementById("searchFriend"),n=document.getElementById("friendSearchListContainer");t.addEventListener("hide.bs.modal",()=>{for(e.value="";n.firstChild;)n.removeChild(n.firstChild)}),e.addEventListener("input",S_(async s=>{const r=s.target.value;if(Fn.nickname.test(r)===!1){ut.setToast("Invalid nickname");return}await Jt.get(`/friends/add/?search_name=${r.toLowerCase()}`).then(a=>{n.innerHTML=a.map(o=>__({nick:o.username})).join("")||"No search results",this.onFriendRequestBtnClick(),n.scrollIntoView({behavior:"smooth"})}).catch(a=>{ut.setToast(`${a.message||"Search Failed"}`)})},1e3))}onFriendDeleteBtnClick(){document.querySelectorAll(".card .btn-close").forEach(t=>{t.addEventListener("click",async e=>{const n=e.target.dataset.nick;Jt.patch("/friends/friend_list/",{friend_name:n}).then(s=>{ut.setToast(s.message||`Friend ${n} deleted`),this.initPageData(this)}).catch(s=>{ut.setToast(`${s.message||"Failed to delete friend"}`)})})})}onFriendDetailModalEvent(){document.getElementById("friendDetailModal").addEventListener("show.bs.modal",async e=>{const n=e.relatedTarget.id,s=this.friendDetailMap.get(n),r=document.querySelector("#friendDetailModal .modal-body");r.innerHTML=`
    <div class="border border-light overflow-y-scroll" style="max-height: 45rem;">
      ${cu(s.username,s.history)}
    </div>
      `})}async render(){const t=ln({borderColor:"mint",title:"WAITING",modalId:"friendWaitModal",content:v_(),buttonList:[]}),e=ln({borderColor:"pink",title:"ADD FRIEND",modalId:"friendAddModal",content:x_(),buttonList:[]}),n=ln({borderColor:"pink",title:"BATTLE HISTORY",modalId:"friendDetailModal",content:"",buttonList:[]});return`
      ${t}
      ${e}
      ${n}
      <div class="d-md-flex justify-content-between top-0 z-1">
        <h1 class="fs-14">Friends</h1>
        <div class="d-flex flex-row pe-5">
          ${m_()}
        </div>
      </div>
      <div id="pageBody" class="d-flex flex-wrap justify-content-evenly overflow-auto h-75">
      </div>
      ${E_({currPage:this.currPage,totalPage:this.totalPage})}
      `}initEvent(){this.initTooltip(),this.onFriendDeleteBtnClick()}async afterRender(){await this.initPageData(this),this.onReloadButtonClick(this),this.onPaginationClick(this),this.onFriendWaitModalEvent(),this.onFriendAddModalEvent(),this.onFriendDetailModalEvent()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="164",M_=0,Il=1,b_=2,du=1,T_=2,xn=3,$n=0,Pe=1,nn=2,kn=0,Xi=1,Dl=2,Nl=3,Ol=4,A_=5,li=100,w_=101,C_=102,R_=103,L_=104,P_=200,I_=201,D_=202,N_=203,no=204,io=205,O_=206,U_=207,F_=208,B_=209,k_=210,H_=211,z_=212,V_=213,G_=214,W_=0,$_=1,X_=2,Pr=3,q_=4,Y_=5,j_=6,K_=7,Io=0,Z_=1,J_=2,Hn=0,Q_=1,tv=2,ev=3,nv=4,iv=5,sv=6,rv=7,uu=300,as=301,os=302,so=303,ro=304,Xr=306,ao=1e3,fi=1001,oo=1002,He=1003,av=1004,er=1005,Ke=1006,ma=1007,pi=1008,Xn=1009,ov=1010,lv=1011,hu=1012,fu=1013,ls=1014,Bn=1015,qr=1016,pu=1017,mu=1018,Vs=1020,cv=35902,dv=1021,uv=1022,rn=1023,hv=1024,fv=1025,qi=1026,Ds=1027,pv=1028,gu=1029,mv=1030,_u=1031,vu=1033,ga=33776,_a=33777,va=33778,xa=33779,Ul=35840,Fl=35841,Bl=35842,kl=35843,Hl=36196,zl=37492,Vl=37496,Gl=37808,Wl=37809,$l=37810,Xl=37811,ql=37812,Yl=37813,jl=37814,Kl=37815,Zl=37816,Jl=37817,Ql=37818,tc=37819,ec=37820,nc=37821,Ea=36492,ic=36494,sc=36495,gv=36283,rc=36284,ac=36285,oc=36286,_v=3200,vv=3201,xu=0,xv=1,On="",tn="srgb",Zn="srgb-linear",Do="display-p3",Yr="display-p3-linear",Ir="linear",te="srgb",Dr="rec709",Nr="p3",bi=7680,lc=519,Ev=512,Sv=513,yv=514,Eu=515,Mv=516,bv=517,Tv=518,Av=519,cc=35044,dc="300 es",En=2e3,Or=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,lo=180/Math.PI;function Gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function wv(i,t){return(i%t+t)%t}function ya(i,t,e){return(1-e)*i+e*t}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],u=s[6],b=s[1],y=s[4],M=s[7],L=s[2],T=s[5],A=s[8];return r[0]=a*v+o*b+l*L,r[3]=a*p+o*y+l*T,r[6]=a*u+o*M+l*A,r[1]=c*v+d*b+h*L,r[4]=c*p+d*y+h*T,r[7]=c*u+d*M+h*A,r[2]=f*v+m*b+g*L,r[5]=f*p+m*y+g*T,r[8]=f*u+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,m=c*r-a*l,g=e*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-d*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(d*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new It;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cv(){const i=Ns("canvas");return i.style.display="block",i}const uc={};function Rv(i){i in uc||(uc[i]=!0,console.warn(i))}const hc=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fc=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nr={[Zn]:{transfer:Ir,primaries:Dr,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:te,primaries:Dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yr]:{transfer:Ir,primaries:Nr,toReference:i=>i.applyMatrix3(fc),fromReference:i=>i.applyMatrix3(hc)},[Do]:{transfer:te,primaries:Nr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fc),fromReference:i=>i.applyMatrix3(hc).convertLinearToSRGB()}},Lv=new Set([Zn,Yr]),Zt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=nr[t].toReference,s=nr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return nr[i].primaries},getTransfer:function(i){return i===On?Ir:nr[i].transfer}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Pv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Ns("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iv=0;class yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dv=0;class Ae extends ps{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=fi,s=fi,r=Ke,a=pi,o=rn,l=Xn,c=Ae.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Gs(),this.name="",this.source=new yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=uu;Ae.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(m+1)/2,L=(u+1)/2,T=(d+f)/4,A=(h+v)/4,F=(g+p)/4;return y>M&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=F/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=F/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-v)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nv extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Nv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mu extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ov extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==m||d!==g){let p=1-o;const u=l*f+c*m+d*g+h*v,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,u*b);p=Math.sin(p*T)/L,o=Math.sin(o*T)/L}const M=o*b;if(l=l*p+f*M,c=c*p+m*M,d=d*p+g*M,h=h*p+v*M,p===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+d*h+l*m-c*f,t[e+1]=l*g+d*f+c*h-o*m,t[e+2]=c*g+d*m+o*f-l*h,t[e+3]=d*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new U,pc=new Ws;class ms{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),sr.subVectors(this.max,Ms),Ai.subVectors(t.a,Ms),wi.subVectors(t.b,Ms),Ci.subVectors(t.c,Ms),Rn.subVectors(wi,Ai),Ln.subVectors(Ci,wi),ti.subVectors(Ai,Ci);let e=[0,-Rn.z,Rn.y,0,-Ln.z,Ln.y,0,-ti.z,ti.y,Rn.z,0,-Rn.x,Ln.z,0,-Ln.x,ti.z,0,-ti.x,-Rn.y,Rn.x,0,-Ln.y,Ln.x,0,-ti.y,ti.x,0];return!wa(e,Ai,wi,Ci,sr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Ai,wi,Ci,sr))?!1:(rr.crossVectors(Rn,Ln),e=[rr.x,rr.y,rr.z],wa(e,Ai,wi,Ci,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new U,new U,new U,new U,new U,new U,new U,new U],qe=new U,ir=new ms,Ai=new U,wi=new U,Ci=new U,Rn=new U,Ln=new U,ti=new U,Ms=new U,sr=new U,rr=new U,ei=new U;function wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),d=n.dot(ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Uv=new ms,bs=new U,Ca=new U;class No{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Ca)),this.expandByPoint(bs.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new U,Ra=new U,ar=new U,Pn=new U,La=new U,or=new U,Pa=new U;class bu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=Pn.dot(this.direction),l=-Pn.dot(ar),c=Pn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,g;if(d>0)if(h=a*l-o,f=a*o-l,g=r*d,h>=0)if(f>=-g)if(f<=g){const v=1/d;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ra).addScaledVector(ar,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){La.subVectors(e,t),or.subVectors(n,t),Pa.crossVectors(La,or);let a=this.direction.dot(Pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(or.crossVectors(Pn,or));if(l<0)return null;const c=o*this.direction.dot(La.cross(Pn));if(c<0||l+c>a)return null;const d=-o*Pn.dot(Pa);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,l,c,d,h,f,m,g,v,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,m,g,v,p)}set(t,e,n,s,r,a,o,l,c,d,h,f,m,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*h,g=o*d,v=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,g=c*d,v=c*h;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,g=c*d,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*d,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,m=a*h,g=o*d,v=o*h;e[0]=l*d,e[4]=g*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*d,e[4]=v-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+v,e[5]=a*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*d,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fv,t,Bv)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),In.crossVectors(n,De),In.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),In.crossVectors(n,De)),In.normalize(),lr.crossVectors(De,In),s[0]=In.x,s[4]=lr.x,s[8]=De.x,s[1]=In.y,s[5]=lr.y,s[9]=De.y,s[2]=In.z,s[6]=lr.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],b=n[3],y=n[7],M=n[11],L=n[15],T=s[0],A=s[4],F=s[8],E=s[12],_=s[1],I=s[5],V=s[9],C=s[13],W=s[2],G=s[6],K=s[10],Z=s[14],H=s[3],tt=s[7],et=s[11],ft=s[15];return r[0]=a*T+o*_+l*W+c*H,r[4]=a*A+o*I+l*G+c*tt,r[8]=a*F+o*V+l*K+c*et,r[12]=a*E+o*C+l*Z+c*ft,r[1]=d*T+h*_+f*W+m*H,r[5]=d*A+h*I+f*G+m*tt,r[9]=d*F+h*V+f*K+m*et,r[13]=d*E+h*C+f*Z+m*ft,r[2]=g*T+v*_+p*W+u*H,r[6]=g*A+v*I+p*G+u*tt,r[10]=g*F+v*V+p*K+u*et,r[14]=g*E+v*C+p*Z+u*ft,r[3]=b*T+y*_+M*W+L*H,r[7]=b*A+y*I+M*G+L*tt,r[11]=b*F+y*V+M*K+L*et,r[15]=b*E+y*C+M*Z+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*d-r*l*d)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],b=h*p*c-v*f*c+v*l*m-o*p*m-h*l*u+o*f*u,y=g*f*c-d*p*c-g*l*m+a*p*m+d*l*u-a*f*u,M=d*v*c-g*h*c+g*o*m-a*v*m-d*o*u+a*h*u,L=g*h*l-d*v*l-g*o*f+a*v*f+d*o*p-a*h*p,T=e*b+n*y+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=b*A,t[1]=(v*f*r-h*p*r-v*s*m+n*p*m+h*s*u-n*f*u)*A,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*u+n*l*u)*A,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*A,t[4]=y*A,t[5]=(d*p*r-g*f*r+g*s*m-e*p*m-d*s*u+e*f*u)*A,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*u-e*l*u)*A,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*m+e*l*m)*A,t[8]=M*A,t[9]=(g*h*r-d*v*r-g*n*m+e*v*m+d*n*u-e*h*u)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*u+e*o*u)*A,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=L*A,t[13]=(d*v*s-g*h*s+g*n*f-e*v*f-d*n*p+e*h*p)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*A,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,m=r*d,g=r*h,v=a*d,p=a*h,u=o*h,b=l*c,y=l*d,M=l*h,L=n.x,T=n.y,A=n.z;return s[0]=(1-(v+u))*L,s[1]=(m+M)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(f+u))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(p-b)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);const c=1/r,d=1/a,h=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=En){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===En)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Or)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*c,m=(n+s)*d;let g,v;if(o===En)g=(a+r)*h,v=-2*h;else if(o===Or)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new U,Ye=new se,Fv=new U(0,0,0),Bv=new U(1,1,1),In=new U,lr=new U,De=new U,mc=new se,gc=new Ws;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kv=0;const _c=new U,Li=new Ws,gn=new se,cr=new U,Ts=new U,Hv=new U,zv=new Ws,vc=new U(1,0,0),xc=new U(0,1,0),Ec=new U(0,0,1),Sc={type:"added"},Vv={type:"removed"},Pi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class pe extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new U,e=new hn,n=new Ws,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new It}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ts,cr,this.up):gn.lookAt(cr,Ts,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(gn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vv),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Hv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,zv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new U(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new U,_n=new U,Da=new U,vn=new U,Ii=new U,Di=new U,yc=new U,Na=new U,Oa=new U,Ua=new U;class sn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),_n.subVectors(n,e),Da.subVectors(t,e);const a=je.dot(je),o=je.dot(_n),l=je.dot(Da),c=_n.dot(_n),d=_n.dot(Da),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,g=(a*d-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),_n.subVectors(t,e),je.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,n),Di.subVectors(r,n),Na.subVectors(t,n);const l=Ii.dot(Na),c=Di.dot(Na);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,s);const d=Ii.dot(Oa),h=Di.dot(Oa);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Ii,a);Ua.subVectors(t,r);const m=Ii.dot(Ua),g=Di.dot(Ua);if(g>=0&&m<=g)return e.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Di,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return yc.subVectors(r,s),o=(h-d)/(h-d+(m-g)),e.copy(s).addScaledVector(yc,o);const u=1/(p+v+f);return a=v*u,o=f*u,e.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=wv(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fa(a,r,t+1/3),this.g=Fa(a,r,t),this.b=Fa(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Zt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ce(xe.r*255,0,255))*65536+Math.round(Ce(xe.g*255,0,255))*256+Math.round(Ce(xe.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=tn){Zt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(dr);const n=ya(Dn.h,dr.h,e),s=ya(Dn.s,dr.s,e),r=ya(Dn.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Vt;Vt.NAMES=Tu;let Gv=0;class $s extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Xi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zn extends $s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new U,ur=new Gt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Rv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Au extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wv=0;const ke=new se,Ba=new pe,Ni=new U,Ne=new ms,As=new ms,he=new U;class Jn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?wu:Au)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Ne.min,As.min),Ne.expandByPoint(he),he.addVectors(Ne.max,As.max),Ne.expandByPoint(he)):(Ne.expandByPoint(As.min),Ne.expandByPoint(As.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)he.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),he.add(Ni)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,d=new U,h=new U,f=new Gt,m=new Gt,g=new Gt,v=new U,p=new U;function u(F,E,_){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,_),d.sub(c),h.sub(c),m.sub(f),g.sub(f);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(I),o[F].add(v),o[E].add(v),o[_].add(v),l[F].add(p),l[E].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,E=b.length;F<E;++F){const _=b[F],I=_.start,V=_.count;for(let C=I,W=I+V;C<W;C+=3)u(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const y=new U,M=new U,L=new U,T=new U;function A(F){L.fromBufferAttribute(s,F),T.copy(L);const E=o[F];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),M.crossVectors(T,E);const I=M.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,I)}for(let F=0,E=b.length;F<E;++F){const _=b[F],I=_.start,V=_.count;for(let C=I,W=I+V;C<W;C+=3)A(t.getX(C+0)),A(t.getX(C+1)),A(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,h=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new cn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new se,ni=new bu,hr=new No,bc=new U,Oi=new U,Ui=new U,Fi=new U,ka=new U,fr=new U,pr=new Gt,mr=new Gt,gr=new Gt,Tc=new U,Ac=new U,wc=new U,_r=new U,vr=new U;class ce extends pe{constructor(t=new Jn,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(ka.fromBufferAttribute(h,t),a?fr.addScaledVector(ka,d):fr.addScaledVector(ka.sub(e),d))}e.add(fr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(hr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(hr,bc)===null||ni.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,L=y;M<L;M+=3){const T=o.getX(M),A=o.getX(M+1),F=o.getX(M+2);s=xr(this,u,t,n,c,d,h,T,A,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);s=xr(this,a,t,n,c,d,h,b,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,L=y;M<L;M+=3){const T=M,A=M+1,F=M+2;s=xr(this,u,t,n,c,d,h,T,A,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=p,y=p+1,M=p+2;s=xr(this,a,t,n,c,d,h,b,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function $v(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:i}}function xr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Oi),i.getVertexPosition(l,Ui),i.getVertexPosition(c,Fi);const d=$v(i,t,e,n,Oi,Ui,Fi,_r);if(d){s&&(pr.fromBufferAttribute(s,o),mr.fromBufferAttribute(s,l),gr.fromBufferAttribute(s,c),d.uv=sn.getInterpolation(_r,Oi,Ui,Fi,pr,mr,gr,new Gt)),r&&(pr.fromBufferAttribute(r,o),mr.fromBufferAttribute(r,l),gr.fromBufferAttribute(r,c),d.uv1=sn.getInterpolation(_r,Oi,Ui,Fi,pr,mr,gr,new Gt)),a&&(Tc.fromBufferAttribute(a,o),Ac.fromBufferAttribute(a,l),wc.fromBufferAttribute(a,c),d.normal=sn.getInterpolation(_r,Oi,Ui,Fi,Tc,Ac,wc,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};sn.getNormal(Oi,Ui,Fi,h.normal),d.face=h}return d}class ze extends Jn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(h,2));function g(v,p,u,b,y,M,L,T,A,F,E){const _=M/A,I=L/F,V=M/2,C=L/2,W=T/2,G=A+1,K=F+1;let Z=0,H=0;const tt=new U;for(let et=0;et<K;et++){const ft=et*I-C;for(let Ct=0;Ct<G;Ct++){const $t=Ct*_-V;tt[v]=$t*b,tt[p]=ft*y,tt[u]=W,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[p]=0,tt[u]=T>0?1:-1,d.push(tt.x,tt.y,tt.z),h.push(Ct/A),h.push(1-et/F),Z+=1}}for(let et=0;et<F;et++)for(let ft=0;ft<A;ft++){const Ct=f+ft+G*et,$t=f+ft+G*(et+1),z=f+(ft+1)+G*(et+1),Q=f+(ft+1)+G*et;l.push(Ct,$t,Q),l.push($t,z,Q),H+=6}o.addGroup(m,H,E),m+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function Xv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const qv={clone:cs,merge:Se};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends $s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Xv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new U,Cc=new Gt,Rc=new Gt;class Re extends Ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,ki=1;class Kv extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Re(Bi,ki,t,e);s.layers=this.layers,this.add(s);const r=new Re(Bi,ki,t,e);r.layers=this.layers,this.add(r);const a=new Re(Bi,ki,t,e);a.layers=this.layers,this.add(a);const o=new Re(Bi,ki,t,e);o.layers=this.layers,this.add(o);const l=new Re(Bi,ki,t,e);l.layers=this.layers,this.add(l);const c=new Re(Bi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lu extends Ae{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zv extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ze(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:kn});r.uniforms.tEquirect.value=e;const a=new ce(s,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=Ke),new Kv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ha=new U,Jv=new U,Qv=new It;class ai{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ha.subVectors(n,e).cross(Jv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qv.getNormalMatrix(t),s=this.coplanarPoint(Ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new No,Er=new U;class Uo{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],b=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,p-m,M-u).normalize(),n[1].setComponents(l+r,f+c,p+m,M+u).normalize(),n[2].setComponents(l+a,f+d,p+g,M+b).normalize(),n[3].setComponents(l-a,f-d,p-g,M-b).normalize(),n[4].setComponents(l-o,f-h,p-v,M-y).normalize(),e===En)n[5].setComponents(l+o,f+h,p+v,M+y).normalize();else if(e===Or)n[5].setComponents(o,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function t0(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,o),h.count===-1&&f.length===0&&i.bufferSubData(c,0,d),f.length!==0){for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ds extends Jn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,m=[],g=[],v=[],p=[];for(let u=0;u<d;u++){const b=u*f-a;for(let y=0;y<c;y++){const M=y*h-r;g.push(M,-b,0),v.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const y=b+c*u,M=b+c*(u+1),L=b+1+c*(u+1),T=b+1+c*u;m.push(y,M,T),m.push(M,L,T)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:e0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:d0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:x0,color_fragment:E0,color_pars_fragment:S0,color_pars_vertex:y0,color_vertex:M0,common:b0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:w0,displacementmap_vertex:C0,emissivemap_fragment:R0,emissivemap_pars_fragment:L0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:D0,envmap_common_pars_fragment:N0,envmap_pars_fragment:O0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:z0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:G0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:$0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:j0,lights_phong_fragment:K0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:tx,lights_fragment_maps:ex,lights_fragment_end:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:ax,map_fragment:ox,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:dx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:hx,morphinstance_vertex:fx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:Ex,normal_pars_vertex:Sx,normal_vertex:yx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:wx,opaque_fragment:Cx,packing:Rx,premultiplied_alpha_fragment:Lx,project_vertex:Px,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Fx,shadowmap_vertex:Bx,shadowmask_pars_fragment:kx,skinbase_vertex:Hx,skinning_pars_vertex:zx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:$x,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:jx,uv_pars_fragment:Kx,uv_pars_vertex:Zx,uv_vertex:Jx,worldpos_vertex:Qx,background_vert:tE,background_frag:eE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:sE,cube_frag:rE,depth_vert:aE,depth_frag:oE,distanceRGBA_vert:lE,distanceRGBA_frag:cE,equirect_vert:dE,equirect_frag:uE,linedashed_vert:hE,linedashed_frag:fE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:_E,meshmatcap_vert:vE,meshmatcap_frag:xE,meshnormal_vert:EE,meshnormal_frag:SE,meshphong_vert:yE,meshphong_frag:ME,meshphysical_vert:bE,meshphysical_frag:TE,meshtoon_vert:AE,meshtoon_frag:wE,points_vert:CE,points_frag:RE,shadow_vert:LE,shadow_frag:PE,sprite_vert:IE,sprite_frag:DE},st={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},en={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};en.physical={uniforms:Se([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Sr={r:0,b:0,g:0},si=new hn,NE=new se;function OE(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const M=g(b);M===null?u(o,l):M&&M.isColor&&(u(M,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(b,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Xr)?(d===void 0&&(d=new ce(new ze(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:cs(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),si.copy(y.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(si)),d.material.toneMapped=Zt.getTransfer(M.colorSpace)!==te,(h!==M||f!==M.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ce(new ds(2,2),new qn({name:"BackgroundMaterial",uniforms:cs(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,y){b.getRGB(Sr,Cu(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:p}}function UE(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,I,V,C,W){let G=!1;const K=h(C,V,I);r!==K&&(r=K,c(r.object)),G=m(_,C,V,W),G&&g(_,C,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(_,I,V,C),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function h(_,I,V){const C=V.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let G=W[I.id];G===void 0&&(G={},W[I.id]=G);let K=G[C];return K===void 0&&(K=f(l()),G[C]=K),K}function f(_){const I=[],V=[],C=[];for(let W=0;W<e;W++)I[W]=0,V[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:C,object:_,attributes:{},index:null}}function m(_,I,V,C){const W=r.attributes,G=I.attributes;let K=0;const Z=V.getAttributes();for(const H in Z)if(Z[H].location>=0){const et=W[H];let ft=G[H];if(ft===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;K++}return r.attributesNum!==K||r.index!==C}function g(_,I,V,C){const W={},G=I.attributes;let K=0;const Z=V.getAttributes();for(const H in Z)if(Z[H].location>=0){let et=G[H];et===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(et=_.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),W[H]=ft,K++}r.attributes=W,r.attributesNum=K,r.index=C}function v(){const _=r.newAttributes;for(let I=0,V=_.length;I<V;I++)_[I]=0}function p(_){u(_,0)}function u(_,I){const V=r.newAttributes,C=r.enabledAttributes,W=r.attributeDivisors;V[_]=1,C[_]===0&&(i.enableVertexAttribArray(_),C[_]=1),W[_]!==I&&(i.vertexAttribDivisor(_,I),W[_]=I)}function b(){const _=r.newAttributes,I=r.enabledAttributes;for(let V=0,C=I.length;V<C;V++)I[V]!==_[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function y(_,I,V,C,W,G,K){K===!0?i.vertexAttribIPointer(_,I,V,W,G):i.vertexAttribPointer(_,I,V,C,W,G)}function M(_,I,V,C){v();const W=C.attributes,G=V.getAttributes(),K=I.defaultAttributeValues;for(const Z in G){const H=G[Z];if(H.location>=0){let tt=W[Z];if(tt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),tt!==void 0){const et=tt.normalized,ft=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const $t=Ct.buffer,z=Ct.type,Q=Ct.bytesPerElement,dt=z===i.INT||z===i.UNSIGNED_INT||tt.gpuType===fu;if(tt.isInterleavedBufferAttribute){const nt=tt.data,bt=nt.stride,Dt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let D=0;D<H.locationSize;D++)u(H.location+D,nt.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let D=0;D<H.locationSize;D++)p(H.location+D);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let D=0;D<H.locationSize;D++)y(H.location+D,ft/H.locationSize,z,et,bt*Q,(Dt+ft/H.locationSize*D)*Q,dt)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)u(H.location+nt,tt.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let nt=0;nt<H.locationSize;nt++)y(H.location+nt,ft/H.locationSize,z,et,ft*Q,ft/H.locationSize*nt*Q,dt)}}else if(K!==void 0){const et=K[Z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}b()}function L(){F();for(const _ in n){const I=n[_];for(const V in I){const C=I[V];for(const W in C)d(C[W].object),delete C[W];delete I[V]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const I=n[_.id];for(const V in I){const C=I[V];for(const W in C)d(C[W].object),delete C[W];delete I[V]}delete n[_.id]}function A(_){for(const I in n){const V=n[I];if(V[_.id]===void 0)continue;const C=V[_.id];for(const W in C)d(C[W].object),delete C[W];delete V[_.id]}}function F(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function FE(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(c[m],d[m]);else{f.multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];e.update(m,n,1)}}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];for(let v=0;v<f.length;v++)e.update(g,n,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function BE(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:u,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:M,maxSamples:L}}function kE(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const b=r?0:n,y=b*4;let M=u.clippingState||null;l.value=M,M=d(g,f,y,m);for(let L=0;L!==y;++L)M[L]=e[L];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,M=m;y!==v;++y,M+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function HE(i){let t=new WeakMap;function e(a,o){return o===so?a.mapping=as:o===ro&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===so||o===ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zv(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Iu extends Ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Lc=[.125,.215,.35,.446,.526,.582],ci=20,za=new Iu,Pc=new Vt;let Va=null,Ga=0,Wa=0,$a=!1;const oi=(1+Math.sqrt(5))/2,Hi=1/oi,Ic=[new U(-oi,Hi,0),new U(oi,Hi,0),new U(-Hi,0,oi),new U(Hi,0,oi),new U(0,oi,-Hi),new U(0,oi,Hi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ga,Wa),this._renderer.xr.enabled=$a,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:qr,format:rn,colorSpace:Zn,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zE(r)),this._blurMaterial=VE(r,t,e)}return s}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){const o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pc),d.toneMapping=Hn,d.autoClear=!1;const m=new zn({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new ce(new ze,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Pc),v=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;yr(s,b*y,u>2?y:0,y,y),d.setRenderTarget(s),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===as||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ce(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),v=r/g,p=isFinite(r)?1+Math.floor(d*v):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const u=[];let b=0;for(let A=0;A<ci;++A){const F=A/v,E=Math.exp(-F*F/2);u.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[s],L=3*M*(s>y-$i?s-y+$i:0),T=4*(this._cubeSize-M);yr(e,L,T,3*M,2*M),l.setRenderTarget(e),l.render(h,za)}}function zE(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+Lc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$i?l=Lc[a-i+$i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,p=2,u=1,b=new Float32Array(v*g*m),y=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,F=T>2?0:-1,E=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];b.set(E,v*g*T),y.set(f,p*g*T);const _=[T,T,T,T,T,T];M.set(_,u*g*T)}const L=new Jn;L.setAttribute("position",new cn(b,v)),L.setAttribute("uv",new cn(y,p)),L.setAttribute("faceIndex",new cn(M,u)),t.push(L),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function VE(i,t,e){const n=new Float32Array(ci),s=new U(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Oc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Uc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GE(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===so||l===ro,d=l===as||l===os;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Dc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new Dc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function WE(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $E(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,u=v.length;p<u;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,M=b.length;y<M;y+=3){const L=b[y+0],T=b[y+1],A=b[y+2];f.push(L,T,T,A,A,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const L=y+0,T=y+1,A=y+2;f.push(L,T,T,A,A,L)}}else return;const p=new(Su(f)?wu:Au)(f,1);p.version=v;const u=r.get(h);u&&t.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function XE(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function d(f,m,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(f[p]/a,m[p]);else{v.multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}}function h(f,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b];for(let b=0;b<v.length;b++)e.update(u,n,v[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function qE(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function YE(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let _=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let L=o.attributes.position.count*M,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*h),F=new Mu(A,L,T,h);F.type=Bn,F.needsUpdate=!0;const E=M*4;for(let I=0;I<h;I++){const V=u[I],C=b[I],W=y[I],G=L*T*4*I;for(let K=0;K<V.count;K++){const Z=K*E;g===!0&&(s.fromBufferAttribute(V,K),A[G+Z+0]=s.x,A[G+Z+1]=s.y,A[G+Z+2]=s.z,A[G+Z+3]=0),v===!0&&(s.fromBufferAttribute(C,K),A[G+Z+4]=s.x,A[G+Z+5]=s.y,A[G+Z+6]=s.z,A[G+Z+7]=0),p===!0&&(s.fromBufferAttribute(W,K),A[G+Z+8]=s.x,A[G+Z+9]=s.y,A[G+Z+10]=s.z,A[G+Z+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new Gt(L,T)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jE(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Du extends Ae{constructor(t,e,n,s,r,a,o,l,c,d){if(d=d!==void 0?d:qi,d!==qi&&d!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===qi&&(n=ls),n===void 0&&d===Ds&&(n=Vs),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nu=new Ae,Ou=new Du(1,1);Ou.compareFunction=Eu;const Uu=new Mu,Fu=new Ov,Bu=new Lu,Fc=[],Bc=[],kc=new Float32Array(16),Hc=new Float32Array(9),zc=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jr(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function KE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ZE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function JE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function QE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function tS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),ue(e,n)}}function eS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),ue(e,n)}}function nS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),ue(e,n)}}function iS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function rS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function aS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function oS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function cS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function dS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function uS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ou:Nu;e.setTexture2D(t||r,s)}function hS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fu,s)}function fS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bu,s)}function pS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function mS(i){switch(i){case 5126:return KE;case 35664:return ZE;case 35665:return JE;case 35666:return QE;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return aS;case 5125:return oS;case 36294:return lS;case 36295:return cS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}function gS(i,t){i.uniform1fv(this.addr,t)}function _S(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function vS(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function xS(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function ES(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function SS(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yS(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function MS(i,t){i.uniform1iv(this.addr,t)}function bS(i,t){i.uniform2iv(this.addr,t)}function TS(i,t){i.uniform3iv(this.addr,t)}function AS(i,t){i.uniform4iv(this.addr,t)}function wS(i,t){i.uniform1uiv(this.addr,t)}function CS(i,t){i.uniform2uiv(this.addr,t)}function RS(i,t){i.uniform3uiv(this.addr,t)}function LS(i,t){i.uniform4uiv(this.addr,t)}function PS(i,t,e){const n=this.cache,s=t.length,r=jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nu,r[a])}function IS(i,t,e){const n=this.cache,s=t.length,r=jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fu,r[a])}function DS(i,t,e){const n=this.cache,s=t.length,r=jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bu,r[a])}function NS(i,t,e){const n=this.cache,s=t.length,r=jr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uu,r[a])}function OS(i){switch(i){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return ES;case 35675:return SS;case 35676:return yS;case 5124:case 35670:return MS;case 35667:case 35671:return bS;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return CS;case 36295:return RS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return NS}}class US{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mS(e.type)}}class FS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=OS(e.type)}}class BS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function kS(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),a=Xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vc(e,c===void 0?new US(o,i,t):new FS(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new BS(o),Vc(e,h)),e=h}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kS(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const HS=37297;let zS=0;function VS(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function GS(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===Nr&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Nr&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case Yr:return[n,"LinearTransferOETF"];case tn:case Do:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+VS(i.getShaderSource(t),a)}else return s}function WS(i,t){const e=GS(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $S(i,t){let e;switch(t){case Q_:e="Linear";break;case tv:e="Reinhard";break;case ev:e="OptimizedCineon";break;case nv:e="ACESFilmic";break;case sv:e="AgX";break;case rv:e="Neutral";break;case iv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function XS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function qS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function YS(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ws(i){return i!==""}function $c(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(jS,ZS)}const KS=new Map;function ZS(i,t){let e=Pt[t];if(e===void 0){const n=KS.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(JS,QS)}function QS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ty(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===du?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===T_?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function ey(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ny(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function iy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Io:t="ENVMAP_BLENDING_MULTIPLY";break;case Z_:t="ENVMAP_BLENDING_MIX";break;case J_:t="ENVMAP_BLENDING_ADD";break}return t}function sy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ry(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ty(e),c=ey(e),d=ny(e),h=iy(e),f=sy(e),m=XS(e),g=qS(r),v=s.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),u.length>0&&(u+=`
`)):(p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),u=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?$S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,WS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=co(a),a=$c(a,e),a=Xc(a,e),o=co(o),o=$c(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+p+a,M=b+u+o,L=Gc(s,s.VERTEX_SHADER,y),T=Gc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,L),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(T).trim();let G=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{const Z=Wc(s,L,"vertex"),H=Wc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Z+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(C===""||W==="")&&(K=!1);K&&(I.diagnostics={runnable:G,programLog:V,vertexShader:{log:C,prefix:p},fragmentShader:{log:W,prefix:u}})}s.deleteShader(L),s.deleteShader(T),F=new Ar(s,v),E=YS(s,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,HS)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let ay=0;class oy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ly(t),e.set(t,n)),n}}class ly{constructor(t){this.id=ay++,this.code=t,this.usedTimes=0}}function cy(i,t,e,n,s,r,a){const o=new Oo,l=new oy,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,_,I,V,C){const W=V.fog,G=C.geometry,K=E.isMeshStandardMaterial?V.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||K),H=Z&&Z.mapping===Xr?Z.image.height:null,tt=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=et!==void 0?et.length:0;let Ct=0;G.morphAttributes.position!==void 0&&(Ct=1),G.morphAttributes.normal!==void 0&&(Ct=2),G.morphAttributes.color!==void 0&&(Ct=3);let $t,z,Q,dt;if(tt){const Kt=en[tt];$t=Kt.vertexShader,z=Kt.fragmentShader}else $t=E.vertexShader,z=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),dt=l.getFragmentShaderID(E);const nt=i.getRenderTarget(),bt=C.isInstancedMesh===!0,Dt=C.isBatchedMesh===!0,D=!!E.map,Yt=!!E.matcap,Et=!!Z,jt=!!E.aoMap,St=!!E.lightMap,Bt=!!E.bumpMap,Rt=!!E.normalMap,Ft=!!E.displacementMap,ee=!!E.emissiveMap,w=!!E.metalnessMap,x=!!E.roughnessMap,k=E.anisotropy>0,X=E.clearcoat>0,j=E.dispersion>0,J=E.iridescence>0,_t=E.sheen>0,at=E.transmission>0,rt=k&&!!E.anisotropyMap,Tt=X&&!!E.clearcoatMap,it=X&&!!E.clearcoatNormalMap,xt=X&&!!E.clearcoatRoughnessMap,zt=J&&!!E.iridescenceMap,yt=J&&!!E.iridescenceThicknessMap,ht=_t&&!!E.sheenColorMap,Nt=_t&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,re=!!E.specularColorMap,Ot=!!E.specularIntensityMap,R=at&&!!E.transmissionMap,q=at&&!!E.thicknessMap,$=!!E.gradientMap,ot=!!E.alphaMap,ct=E.alphaTest>0,Wt=!!E.alphaHash,Qt=!!E.extensions;let ie=Hn;E.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ie=i.toneMapping);const me={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:z,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Dt,instancing:bt,instancingColor:bt&&C.instanceColor!==null,instancingMorph:bt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zn,alphaToCoverage:!!E.alphaToCoverage,map:D,matcap:Yt,envMap:Et,envMapMode:Et&&Z.mapping,envMapCubeUVHeight:H,aoMap:jt,lightMap:St,bumpMap:Bt,normalMap:Rt,displacementMap:f&&Ft,emissiveMap:ee,normalMapObjectSpace:Rt&&E.normalMapType===xv,normalMapTangentSpace:Rt&&E.normalMapType===xu,metalnessMap:w,roughnessMap:x,anisotropy:k,anisotropyMap:rt,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:it,clearcoatRoughnessMap:xt,dispersion:j,iridescence:J,iridescenceMap:zt,iridescenceThicknessMap:yt,sheen:_t,sheenColorMap:ht,sheenRoughnessMap:Nt,specularMap:Ht,specularColorMap:re,specularIntensityMap:Ot,transmission:at,transmissionMap:R,thicknessMap:q,gradientMap:$,opaque:E.transparent===!1&&E.blending===Xi&&E.alphaToCoverage===!1,alphaMap:ot,alphaTest:ct,alphaHash:Wt,combine:E.combine,mapUv:D&&v(E.map.channel),aoMapUv:jt&&v(E.aoMap.channel),lightMapUv:St&&v(E.lightMap.channel),bumpMapUv:Bt&&v(E.bumpMap.channel),normalMapUv:Rt&&v(E.normalMap.channel),displacementMapUv:Ft&&v(E.displacementMap.channel),emissiveMapUv:ee&&v(E.emissiveMap.channel),metalnessMapUv:w&&v(E.metalnessMap.channel),roughnessMapUv:x&&v(E.roughnessMap.channel),anisotropyMapUv:rt&&v(E.anisotropyMap.channel),clearcoatMapUv:Tt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(E.sheenRoughnessMap.channel),specularMapUv:Ht&&v(E.specularMap.channel),specularColorMapUv:re&&v(E.specularColorMap.channel),specularIntensityMapUv:Ot&&v(E.specularIntensityMap.channel),transmissionMapUv:R&&v(E.transmissionMap.channel),thicknessMapUv:q&&v(E.thicknessMap.channel),alphaMapUv:ot&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Rt||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!G.attributes.uv&&(D||ot),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:C.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,useLegacyLights:i._useLegacyLights,decodeVideoTexture:D&&E.map.isVideoTexture===!0&&Zt.getTransfer(E.map.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)_.push(I),_.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(b(_,E),y(_,E),_.push(i.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function b(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function y(E,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),E.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.alphaToCoverage&&o.enable(20),E.push(o.mask)}function M(E){const _=g[E.type];let I;if(_){const V=en[_];I=qv.clone(V.uniforms)}else I=E.uniforms;return I}function L(E,_){let I;for(let V=0,C=d.length;V<C;V++){const W=d[V];if(W.cacheKey===_){I=W,++I.usedTimes;break}}return I===void 0&&(I=new ry(i,_,E,r),d.push(I)),I}function T(E){if(--E.usedTimes===0){const _=d.indexOf(E);d[_]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:F}}function dy(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,g,v,p){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=p),t++,u}function o(h,f,m,g,v,p){const u=a(h,f,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,f,m,g,v,p){const u=a(h,f,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||uy),n.length>1&&n.sort(f||jc),s.length>1&&s.sort(f||jc)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function hy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function py(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let my=0;function gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _y(i){const t=new fy,e=py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new se,a=new se;function o(c,d){let h=0,f=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,v=0,p=0,u=0,b=0,y=0,M=0,L=0,T=0,A=0,F=0;c.sort(gy);const E=d===!0?Math.PI:1;for(let I=0,V=c.length;I<V;I++){const C=c[I],W=C.color,G=C.intensity,K=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*G*E,f+=W.g*G*E,m+=W.b*G*E;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],G);F++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const tt=C.shadow,et=e.get(C);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=C.shadow.matrix,y++}n.directional[g]=H,g++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(W).multiplyScalar(G*E),H.distance=K,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[p]=H;const tt=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,tt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[p]=tt.matrix,C.castShadow){const et=e.get(C);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[p]=et,n.spotShadowMap[p]=Z,L++}p++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(W).multiplyScalar(G),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[u]=H,u++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),H.distance=C.distance,H.decay=C.decay,C.castShadow){const tt=C.shadow,et=e.get(C);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[v]=et,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=C.shadow.matrix,M++}n.point[v]=H,v++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(G*E),H.groundColor.copy(C.groundColor).multiplyScalar(G*E),n.hemi[b]=H,b++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;const _=n.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==p||_.rectAreaLength!==u||_.hemiLength!==b||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==L||_.numSpotMaps!==T||_.numLightProbes!==F)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=u,n.point.length=v,n.hemi.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=L+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,_.directionalLength=g,_.pointLength=v,_.spotLength=p,_.rectAreaLength=u,_.hemiLength=b,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=L,_.numSpotMaps=T,_.numLightProbes=F,n.version=my++)}function l(c,d){let h=0,f=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const y=c[u];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Zc(i){const t=new _y(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(d){t.setup(e,d)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vy(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class xy extends $s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ey extends $s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function My(i,t,e){let n=new Uo;const s=new Gt,r=new Gt,a=new fe,o=new xy({depthPacking:vv}),l=new Ey,c={},d=e.maxTextureSize,h={[$n]:Pe,[Pe]:$n,[nn]:nn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Sy,fragmentShader:yy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ce(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let u=this.type;this.render=function(T,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(kn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const C=u!==xn&&this.type===xn,W=u===xn&&this.type!==xn;for(let G=0,K=T.length;G<K;G++){const Z=T[G],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const tt=H.getFrameExtents();if(s.multiply(tt),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/tt.x),s.x=r.x*tt.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/tt.y),s.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||C===!0||W===!0){const ft=this.type!==xn?{minFilter:He,magFilter:He}:{};H.map!==null&&H.map.dispose(),H.map=new vi(s.x,s.y,ft),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const et=H.getViewportCount();for(let ft=0;ft<et;ft++){const Ct=H.getViewport(ft);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),V.viewport(a),H.updateMatrices(Z,ft),n=H.getFrustum(),M(A,F,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===xn&&b(H,F),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(E,_,I)};function b(T,A){const F=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,F,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,F,m,v,null)}function y(T,A,F,E){let _=null;const I=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)_=I;else if(_=F.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=_.uuid,C=A.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let G=W[C];G===void 0&&(G=_.clone(),W[C]=G,A.addEventListener("dispose",L)),_=G}if(_.visible=A.visible,_.wireframe=A.wireframe,E===xn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=F}return _}function M(T,A,F,E,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const C=t.update(T),W=T.material;if(Array.isArray(W)){const G=C.groups;for(let K=0,Z=G.length;K<Z;K++){const H=G[K],tt=W[H.materialIndex];if(tt&&tt.visible){const et=y(T,tt,E,_);T.onBeforeShadow(i,T,A,F,C,et,H),i.renderBufferDirect(F,null,C,et,T,H),T.onAfterShadow(i,T,A,F,C,et,H)}}}else if(W.visible){const G=y(T,W,E,_);T.onBeforeShadow(i,T,A,F,C,G,null),i.renderBufferDirect(F,null,C,G,T,null),T.onAfterShadow(i,T,A,F,C,G,null)}}const V=T.children;for(let C=0,W=V.length;C<W;C++)M(V[C],A,F,E,_)}function L(T){T.target.removeEventListener("dispose",L);for(const F in c){const E=c[F],_=T.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function by(i){function t(){let R=!1;const q=new fe;let $=null;const ot=new fe(0,0,0,0);return{setMask:function(ct){$!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),$=ct)},setLocked:function(ct){R=ct},setClear:function(ct,Wt,Qt,ie,me){me===!0&&(ct*=ie,Wt*=ie,Qt*=ie),q.set(ct,Wt,Qt,ie),ot.equals(q)===!1&&(i.clearColor(ct,Wt,Qt,ie),ot.copy(q))},reset:function(){R=!1,$=null,ot.set(-1,0,0,0)}}}function e(){let R=!1,q=null,$=null,ot=null;return{setTest:function(ct){ct?dt(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(ct){q!==ct&&!R&&(i.depthMask(ct),q=ct)},setFunc:function(ct){if($!==ct){switch(ct){case W_:i.depthFunc(i.NEVER);break;case $_:i.depthFunc(i.ALWAYS);break;case X_:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case q_:i.depthFunc(i.EQUAL);break;case Y_:i.depthFunc(i.GEQUAL);break;case j_:i.depthFunc(i.GREATER);break;case K_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){R=ct},setClear:function(ct){ot!==ct&&(i.clearDepth(ct),ot=ct)},reset:function(){R=!1,q=null,$=null,ot=null}}}function n(){let R=!1,q=null,$=null,ot=null,ct=null,Wt=null,Qt=null,ie=null,me=null;return{setTest:function(Kt){R||(Kt?dt(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(Kt){q!==Kt&&!R&&(i.stencilMask(Kt),q=Kt)},setFunc:function(Kt,Je,Ee){($!==Kt||ot!==Je||ct!==Ee)&&(i.stencilFunc(Kt,Je,Ee),$=Kt,ot=Je,ct=Ee)},setOp:function(Kt,Je,Ee){(Wt!==Kt||Qt!==Je||ie!==Ee)&&(i.stencilOp(Kt,Je,Ee),Wt=Kt,Qt=Je,ie=Ee)},setLocked:function(Kt){R=Kt},setClear:function(Kt){me!==Kt&&(i.clearStencil(Kt),me=Kt)},reset:function(){R=!1,q=null,$=null,ot=null,ct=null,Wt=null,Qt=null,ie=null,me=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,g=!1,v=null,p=null,u=null,b=null,y=null,M=null,L=null,T=new Vt(0,0,0),A=0,F=!1,E=null,_=null,I=null,V=null,C=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=K>=2);let H=null,tt={};const et=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Ct=new fe().fromArray(et),$t=new fe().fromArray(ft);function z(R,q,$,ot){const ct=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(R,Wt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<$;Qt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(q+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return Wt}const Q={};Q[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Pr),Bt(!1),Rt(Il),dt(i.CULL_FACE),jt(kn);function dt(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function nt(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function bt(R,q){return d[R]!==q?(i.bindFramebuffer(R,q),d[R]=q,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=q),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Dt(R,q){let $=f,ot=!1;if(R){$=h.get(q),$===void 0&&($=[],h.set(q,$));const ct=R.textures;if($.length!==ct.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Qt=ct.length;Wt<Qt;Wt++)$[Wt]=i.COLOR_ATTACHMENT0+Wt;$.length=ct.length,ot=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ot=!0);ot&&i.drawBuffers($)}function D(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const Yt={[li]:i.FUNC_ADD,[w_]:i.FUNC_SUBTRACT,[C_]:i.FUNC_REVERSE_SUBTRACT};Yt[R_]=i.MIN,Yt[L_]=i.MAX;const Et={[P_]:i.ZERO,[I_]:i.ONE,[D_]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[k_]:i.SRC_ALPHA_SATURATE,[F_]:i.DST_COLOR,[O_]:i.DST_ALPHA,[N_]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[B_]:i.ONE_MINUS_DST_COLOR,[U_]:i.ONE_MINUS_DST_ALPHA,[H_]:i.CONSTANT_COLOR,[z_]:i.ONE_MINUS_CONSTANT_COLOR,[V_]:i.CONSTANT_ALPHA,[G_]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(R,q,$,ot,ct,Wt,Qt,ie,me,Kt){if(R===kn){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),R!==A_){if(R!==v||Kt!==F){if((p!==li||y!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,y=li),Kt)switch(R){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}u=null,b=null,M=null,L=null,T.set(0,0,0),A=0,v=R,F=Kt}return}ct=ct||q,Wt=Wt||$,Qt=Qt||ot,(q!==p||ct!==y)&&(i.blendEquationSeparate(Yt[q],Yt[ct]),p=q,y=ct),($!==u||ot!==b||Wt!==M||Qt!==L)&&(i.blendFuncSeparate(Et[$],Et[ot],Et[Wt],Et[Qt]),u=$,b=ot,M=Wt,L=Qt),(ie.equals(T)===!1||me!==A)&&(i.blendColor(ie.r,ie.g,ie.b,me),T.copy(ie),A=me),v=R,F=!1}function St(R,q){R.side===nn?nt(i.CULL_FACE):dt(i.CULL_FACE);let $=R.side===Pe;q&&($=!$),Bt($),R.blending===Xi&&R.transparent===!1?jt(kn):jt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const ot=R.stencilWrite;a.setTest(ot),ot&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ee(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){E!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),E=R)}function Rt(R){R!==M_?(dt(i.CULL_FACE),R!==_&&(R===Il?i.cullFace(i.BACK):R===b_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),_=R}function Ft(R){R!==I&&(G&&i.lineWidth(R),I=R)}function ee(R,q,$){R?(dt(i.POLYGON_OFFSET_FILL),(V!==q||C!==$)&&(i.polygonOffset(q,$),V=q,C=$)):nt(i.POLYGON_OFFSET_FILL)}function w(R){R?dt(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function x(R){R===void 0&&(R=i.TEXTURE0+W-1),H!==R&&(i.activeTexture(R),H=R)}function k(R,q,$){$===void 0&&(H===null?$=i.TEXTURE0+W-1:$=H);let ot=tt[$];ot===void 0&&(ot={type:void 0,texture:void 0},tt[$]=ot),(ot.type!==R||ot.texture!==q)&&(H!==$&&(i.activeTexture($),H=$),i.bindTexture(R,q||Q[R]),ot.type=R,ot.texture=q)}function X(){const R=tt[H];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function zt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(R){Ct.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ct.copy(R))}function Nt(R){$t.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),$t.copy(R))}function Ht(R,q){let $=l.get(q);$===void 0&&($=new WeakMap,l.set(q,$));let ot=$.get(R);ot===void 0&&(ot=i.getUniformBlockIndex(q,R.name),$.set(R,ot))}function re(R,q){const ot=l.get(q).get(R);o.get(q)!==ot&&(i.uniformBlockBinding(q,ot,R.__bindingPointIndex),o.set(q,ot))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,tt={},d={},h=new WeakMap,f=[],m=null,g=!1,v=null,p=null,u=null,b=null,y=null,M=null,L=null,T=new Vt(0,0,0),A=0,F=!1,E=null,_=null,I=null,V=null,C=null,Ct.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:nt,bindFramebuffer:bt,drawBuffers:Dt,useProgram:D,setBlending:jt,setMaterial:St,setFlipSided:Bt,setCullFace:Rt,setLineWidth:Ft,setPolygonOffset:ee,setScissorTest:w,activeTexture:x,bindTexture:k,unbindTexture:X,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:zt,texImage3D:yt,updateUBOMapping:Ht,uniformBlockBinding:re,texStorage2D:it,texStorage3D:xt,texSubImage2D:_t,texSubImage3D:at,compressedTexSubImage2D:rt,compressedTexSubImage3D:Tt,scissor:ht,viewport:Nt,reset:Ot}}function Ty(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return m?new OffscreenCanvas(w,x):Ns("canvas")}function v(w,x,k){let X=1;const j=ee(w);if((j.width>k||j.height>k)&&(X=k/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(X*j.width),_t=Math.floor(X*j.height);h===void 0&&(h=g(J,_t));const at=x?g(J,_t):h;return at.width=J,at.height=_t,at.getContext("2d").drawImage(w,0,0,J,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+_t+")."),at}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==He&&w.minFilter!==Ke}function u(w){i.generateMipmap(w)}function b(w,x,k,X,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const _t=j?Ir:Zt.getTransfer(X);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=_t===te?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function M(w){const x=w.target;x.removeEventListener("dispose",M),T(x),x.isVideoTexture&&d.delete(x)}function L(w){const x=w.target;x.removeEventListener("dispose",L),F(x)}function T(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,X=f.get(k);if(X){const j=X[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(w),Object.keys(X).length===0&&f.delete(k)}n.remove(w)}function A(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const k=w.source,X=f.get(k);delete X[x.__cacheKey],a.memory.textures--}function F(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let j=0;j<x.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[X][j]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let X=0,j=k.length;X<j;X++){const J=n.get(k[X]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(w)}let E=0;function _(){E=0}function I(){const w=E;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),E+=1,w}function V(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function C(w,x){const k=n.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,w,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function W(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Ct(k,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function G(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Ct(k,w,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function K(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){$t(k,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const Z={[ao]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},H={[He]:i.NEAREST,[av]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},tt={[Ev]:i.NEVER,[Av]:i.ALWAYS,[Sv]:i.LESS,[Eu]:i.LEQUAL,[yv]:i.EQUAL,[Tv]:i.GEQUAL,[Mv]:i.GREATER,[bv]:i.NOTEQUAL};function et(w,x){if(x.type===Bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===ma||x.magFilter===er||x.magFilter===pi||x.minFilter===Ke||x.minFilter===ma||x.minFilter===er||x.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Z[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,H[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,tt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==er&&x.minFilter!==pi||x.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ft(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",M));const X=x.source;let j=f.get(X);j===void 0&&(j={},f.set(X,j));const J=V(x);if(J!==w.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[J].usedTimes++;const _t=j[w.__cacheKey];_t!==void 0&&(j[w.__cacheKey].usedTimes--,_t.usedTimes===0&&A(x)),w.__cacheKey=J,w.__webglTexture=j[J].texture}return k}function Ct(w,x,k){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const j=ft(w,x),J=x.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+k);const _t=n.get(J);if(J.version!==_t.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const at=Zt.getPrimaries(Zt.workingColorSpace),rt=x.colorSpace===On?null:Zt.getPrimaries(x.colorSpace),Tt=x.colorSpace===On||at===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let it=v(x.image,!1,s.maxTextureSize);it=Ft(x,it);const xt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type);let yt=b(x.internalFormat,xt,zt,x.colorSpace,x.isVideoTexture);et(X,x);let ht;const Nt=x.mipmaps,Ht=x.isVideoTexture!==!0,re=_t.__version===void 0||j===!0,Ot=J.dataReady,R=y(x,it);if(x.isDepthTexture)yt=i.DEPTH_COMPONENT16,x.type===Bn?yt=i.DEPTH_COMPONENT32F:x.type===ls?yt=i.DEPTH_COMPONENT24:x.type===Vs&&(yt=i.DEPTH24_STENCIL8),re&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,xt,zt,null));else if(x.isDataTexture)if(Nt.length>0){Ht&&re&&e.texStorage2D(i.TEXTURE_2D,R,yt,Nt[0].width,Nt[0].height);for(let q=0,$=Nt.length;q<$;q++)ht=Nt[q],Ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,xt,zt,ht.data):e.texImage2D(i.TEXTURE_2D,q,yt,ht.width,ht.height,0,xt,zt,ht.data);x.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(i.TEXTURE_2D,R,yt,it.width,it.height),Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,xt,zt,it.data)):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,xt,zt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,R,yt,Nt[0].width,Nt[0].height,it.depth);for(let q=0,$=Nt.length;q<$;q++)ht=Nt[q],x.format!==rn?xt!==null?Ht?Ot&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,it.depth,xt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,yt,ht.width,ht.height,it.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,it.depth,xt,zt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,yt,ht.width,ht.height,it.depth,0,xt,zt,ht.data)}else{Ht&&re&&e.texStorage2D(i.TEXTURE_2D,R,yt,Nt[0].width,Nt[0].height);for(let q=0,$=Nt.length;q<$;q++)ht=Nt[q],x.format!==rn?xt!==null?Ht?Ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,xt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,q,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,xt,zt,ht.data):e.texImage2D(i.TEXTURE_2D,q,yt,ht.width,ht.height,0,xt,zt,ht.data)}else if(x.isDataArrayTexture)Ht?(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,R,yt,it.width,it.height,it.depth),Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,zt,it.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,xt,zt,it.data);else if(x.isData3DTexture)Ht?(re&&e.texStorage3D(i.TEXTURE_3D,R,yt,it.width,it.height,it.depth),Ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,zt,it.data)):e.texImage3D(i.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,xt,zt,it.data);else if(x.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(i.TEXTURE_2D,R,yt,it.width,it.height);else{let q=it.width,$=it.height;for(let ot=0;ot<R;ot++)e.texImage2D(i.TEXTURE_2D,ot,yt,q,$,0,xt,zt,null),q>>=1,$>>=1}}else if(Nt.length>0){if(Ht&&re){const q=ee(Nt[0]);e.texStorage2D(i.TEXTURE_2D,R,yt,q.width,q.height)}for(let q=0,$=Nt.length;q<$;q++)ht=Nt[q],Ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt,zt,ht):e.texImage2D(i.TEXTURE_2D,q,yt,xt,zt,ht);x.generateMipmaps=!1}else if(Ht){if(re){const q=ee(it);e.texStorage2D(i.TEXTURE_2D,R,yt,q.width,q.height)}Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,zt,it)}else e.texImage2D(i.TEXTURE_2D,0,yt,xt,zt,it);p(x)&&u(X),_t.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function $t(w,x,k){if(x.image.length!==6)return;const X=ft(w,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const J=n.get(j);if(j.version!==J.__version||X===!0){e.activeTexture(i.TEXTURE0+k);const _t=Zt.getPrimaries(Zt.workingColorSpace),at=x.colorSpace===On?null:Zt.getPrimaries(x.colorSpace),rt=x.colorSpace===On||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let $=0;$<6;$++)!Tt&&!it?xt[$]=v(x.image[$],!0,s.maxCubemapSize):xt[$]=it?x.image[$].image:x.image[$],xt[$]=Ft(x,xt[$]);const zt=xt[0],yt=r.convert(x.format,x.colorSpace),ht=r.convert(x.type),Nt=b(x.internalFormat,yt,ht,x.colorSpace),Ht=x.isVideoTexture!==!0,re=J.__version===void 0||X===!0,Ot=j.dataReady;let R=y(x,zt);et(i.TEXTURE_CUBE_MAP,x);let q;if(Tt){Ht&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,R,Nt,zt.width,zt.height);for(let $=0;$<6;$++){q=xt[$].mipmaps;for(let ot=0;ot<q.length;ot++){const ct=q[ot];x.format!==rn?yt!==null?Ht?Ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,ct.width,ct.height,yt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,Nt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?Ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,ct.width,ct.height,yt,ht,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,Nt,ct.width,ct.height,0,yt,ht,ct.data)}}}else{if(q=x.mipmaps,Ht&&re){q.length>0&&R++;const $=ee(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,R,Nt,$.width,$.height)}for(let $=0;$<6;$++)if(it){Ht?Ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xt[$].width,xt[$].height,yt,ht,xt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,xt[$].width,xt[$].height,0,yt,ht,xt[$].data);for(let ot=0;ot<q.length;ot++){const Wt=q[ot].image[$].image;Ht?Ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,Wt.width,Wt.height,yt,ht,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,Nt,Wt.width,Wt.height,0,yt,ht,Wt.data)}}else{Ht?Ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,yt,ht,xt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Nt,yt,ht,xt[$]);for(let ot=0;ot<q.length;ot++){const ct=q[ot];Ht?Ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,yt,ht,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,Nt,yt,ht,ct.image[$])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),J.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function z(w,x,k,X,j,J){const _t=r.convert(k.format,k.colorSpace),at=r.convert(k.type),rt=b(k.internalFormat,_t,at,k.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>J),xt=Math.max(1,x.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,J,rt,it,xt,x.depth,0,_t,at,null):e.texImage2D(j,J,rt,it,xt,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,n.get(k).__webglTexture,0,St(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,n.get(k).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(w,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let X=i.DEPTH_COMPONENT24;if(k||Bt(x)){const j=x.depthTexture;j&&j.isDepthTexture&&(j.type===Bn?X=i.DEPTH_COMPONENT32F:j.type===ls&&(X=i.DEPTH_COMPONENT24));const J=St(x);Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,X,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,X,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){const X=St(x);k&&Bt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,x.width,x.height):Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const X=x.textures;for(let j=0;j<X.length;j++){const J=X[j],_t=r.convert(J.format,J.colorSpace),at=r.convert(J.type),rt=b(J.internalFormat,_t,at,J.colorSpace),Tt=St(x);k&&Bt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,rt,x.width,x.height):Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),C(x.depthTexture,0);const X=n.get(x.depthTexture).__webglTexture,j=St(x);if(x.depthTexture.format===qi)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(x.depthTexture.format===Ds)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function nt(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]=i.createRenderbuffer(),Q(x.__webglDepthbuffer[X],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Q(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,x,k){const X=n.get(w);x!==void 0&&z(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(w)}function Dt(w){const x=w.texture,k=n.get(w),X=n.get(x);w.addEventListener("dispose",L);const j=w.textures,J=w.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let rt=0;rt<x.mipmaps.length;rt++)k.__webglFramebuffer[at][rt]=i.createFramebuffer()}else k.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)k.__webglFramebuffer[at]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,rt=j.length;at<rt;at++){const Tt=n.get(j[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Bt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const rt=j[at];k.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Tt=r.convert(rt.format,rt.colorSpace),it=r.convert(rt.type),xt=b(rt.internalFormat,Tt,it,rt.colorSpace,w.isXRRenderTarget===!0),zt=St(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,xt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),et(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)z(k.__webglFramebuffer[at][rt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,rt);else z(k.__webglFramebuffer[at],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,rt=j.length;at<rt;at++){const Tt=j[at],it=n.get(Tt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),et(i.TEXTURE_2D,Tt),z(k.__webglFramebuffer,w,Tt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Tt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,X.__webglTexture),et(at,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)z(k.__webglFramebuffer[rt],w,x,i.COLOR_ATTACHMENT0,at,rt);else z(k.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,at,0);p(x)&&u(at),e.unbindTexture()}w.depthBuffer&&nt(w)}function D(w){const x=w.textures;for(let k=0,X=x.length;k<X;k++){const j=x[k];if(p(j)){const J=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(j).__webglTexture;e.bindTexture(J,_t),u(J),e.unbindTexture()}}}const Yt=[],Et=[];function jt(w){if(w.samples>0){if(Bt(w)===!1){const x=w.textures,k=w.width,X=w.height;let j=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(w),at=x.length>1;if(at)for(let rt=0;rt<x.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[rt]);const Tt=n.get(x[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,j,i.NEAREST),l===!0&&(Yt.length=0,Et.length=0,Yt.push(i.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Yt.push(J),Et.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let rt=0;rt<x.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[rt]);const Tt=n.get(x[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function St(w){return Math.min(s.maxSamples,w.samples)}function Bt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(w){const x=a.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function Ft(w,x){const k=w.colorSpace,X=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Zn&&k!==On&&(Zt.getTransfer(k)===te?(X!==rn||j!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=_,this.setTexture2D=C,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=bt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Bt}function Ay(i,t){function e(n,s=On){let r;const a=Zt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ov)return i.BYTE;if(n===lv)return i.SHORT;if(n===hu)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===dv)return i.ALPHA;if(n===uv)return i.RGB;if(n===rn)return i.RGBA;if(n===hv)return i.LUMINANCE;if(n===fv)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===pv)return i.RED;if(n===gu)return i.RED_INTEGER;if(n===mv)return i.RG;if(n===_u)return i.RG_INTEGER;if(n===vu)return i.RGBA_INTEGER;if(n===ga||n===_a||n===va||n===xa)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Fl||n===Bl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===zl||n===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===zl)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Wl||n===$l||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gv||n===rc||n===ac||n===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class wy extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new qn({vertexShader:Ry,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ce(new ds(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Iy extends ps{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const v=new Py,p=e.getContextAttributes();let u=null,b=null;const y=[],M=[],L=new Gt;let T=null;const A=new Re;A.layers.enable(1),A.viewport=new fe;const F=new Re;F.layers.enable(2),F.viewport=new fe;const E=[A,F],_=new wy;_.layers.enable(1),_.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=y[z];return Q===void 0&&(Q=new qa,y[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=y[z];return Q===void 0&&(Q=new qa,y[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=y[z];return Q===void 0&&(Q=new qa,y[z]=Q),Q.getHandSpace()};function C(z){const Q=M.indexOf(z.inputSource);if(Q===-1)return;const dt=y[Q];dt!==void 0&&(dt.update(z.inputSource,z.frame,c||a),dt.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",G);for(let z=0;z<y.length;z++){const Q=M[z];Q!==null&&(M[z]=null,y[z].disconnect(Q))}I=null,V=null,v.reset(),t.setRenderTarget(u),m=null,f=null,h=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",W),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new vi(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,dt=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Ds:qi,dt=p.stencil?Vs:ls);const bt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new vi(f.textureWidth,f.textureHeight,{format:rn,type:Xn,depthTexture:new Du(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function G(z){for(let Q=0;Q<z.removed.length;Q++){const dt=z.removed[Q],nt=M.indexOf(dt);nt>=0&&(M[nt]=null,y[nt].disconnect(dt))}for(let Q=0;Q<z.added.length;Q++){const dt=z.added[Q];let nt=M.indexOf(dt);if(nt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=M.length){M.push(dt),nt=Dt;break}else if(M[Dt]===null){M[Dt]=dt,nt=Dt;break}if(nt===-1)break}const bt=y[nt];bt&&bt.connect(dt)}}const K=new U,Z=new U;function H(z,Q,dt){K.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(dt.matrixWorld);const nt=K.distanceTo(Z),bt=Q.projectionMatrix.elements,Dt=dt.projectionMatrix.elements,D=bt[14]/(bt[10]-1),Yt=bt[14]/(bt[10]+1),Et=(bt[9]+1)/bt[5],jt=(bt[9]-1)/bt[5],St=(bt[8]-1)/bt[0],Bt=(Dt[8]+1)/Dt[0],Rt=D*St,Ft=D*Bt,ee=nt/(-St+Bt),w=ee*-St;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(w),z.translateZ(ee),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const x=D+ee,k=Yt+ee,X=Rt-w,j=Ft+(nt-w),J=Et*Yt/k*x,_t=jt*Yt/k*x;z.projectionMatrix.makePerspective(X,j,J,_t,x,k),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function tt(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;v.texture!==null&&(z.near=v.depthNear,z.far=v.depthFar),_.near=F.near=A.near=z.near,_.far=F.far=A.far=z.far,(I!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,V=_.far,A.near=I,A.far=V,F.near=I,F.far=V,A.updateProjectionMatrix(),F.updateProjectionMatrix(),z.updateProjectionMatrix());const Q=z.parent,dt=_.cameras;tt(_,Q);for(let nt=0;nt<dt.length;nt++)tt(dt[nt],Q);dt.length===2?H(_,A,F):_.projectionMatrix.copy(A.projectionMatrix),et(z,_,Q)};function et(z,Q,dt){dt===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(dt.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=lo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null};let ft=null;function Ct(z,Q){if(d=Q.getViewerPose(c||a),g=Q,d!==null){const dt=d.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let nt=!1;dt.length!==_.cameras.length&&(_.cameras.length=0,nt=!0);for(let Dt=0;Dt<dt.length;Dt++){const D=dt[Dt];let Yt=null;if(m!==null)Yt=m.getViewport(D);else{const jt=h.getViewSubImage(f,D);Yt=jt.viewport,Dt===0&&(t.setRenderTargetTextures(b,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(b))}let Et=E[Dt];Et===void 0&&(Et=new Re,Et.layers.enable(Dt),Et.viewport=new fe,E[Dt]=Et),Et.matrix.fromArray(D.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(D.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Dt===0&&(_.matrix.copy(Et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),nt===!0&&_.cameras.push(Et)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Dt=h.getDepthInformation(dt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,s.renderState)}}for(let dt=0;dt<y.length;dt++){const nt=M[dt],bt=y[dt];nt!==null&&bt!==void 0&&bt.update(nt,Q,c||a)}v.render(t,_),ft&&ft(z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const $t=new Pu;$t.setAnimationLoop(Ct),this.setAnimationLoop=function(z){ft=z},this.dispose=function(){}}}const ri=new hn,Dy=new se;function Ny(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Cu(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pe&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pe&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),y=b.envMap,M=b.envMapRotation;if(y&&(p.envMap.value=y,ri.copy(M),ri.x*=-1,ri.y*=-1,ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(ri)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const L=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*L,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=y*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pe&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Oy(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=s[b.id];M===void 0&&(g(b),M=d(b),s[b.id]=M,b.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(b,L);const T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function d(b){const y=h();b.__bindingPointIndex=y;const M=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=s[b.id],M=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=M.length;T<A;T++){const F=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,_=F.length;E<_;E++){const I=F[E];if(m(I,T,E,L)===!0){const V=I.__offset,C=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let G=0;G<C.length;G++){const K=C[G],Z=v(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,V+W,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,y,M,L){const T=b.value,A=y+"_"+M;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const F=L[A];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return L[A]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(b){const y=b.uniforms;let M=0;const L=16;for(let A=0,F=y.length;A<F;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,I=E.length;_<I;_++){const V=E[_],C=Array.isArray(V.value)?V.value:[V.value];for(let W=0,G=C.length;W<G;W++){const K=C[W],Z=v(K),H=M%L;H!==0&&L-H<Z.boundary&&(M+=L-H),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=Z.storage}}}const T=M%L;return T>0&&(M+=L-T),b.__size=M,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Uy{constructor(t={}){const{canvas:e=Cv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const u=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const y=this;let M=!1,L=0,T=0,A=null,F=-1,E=null;const _=new fe,I=new fe;let V=null;const C=new Vt(0);let W=0,G=e.width,K=e.height,Z=1,H=null,tt=null;const et=new fe(0,0,G,K),ft=new fe(0,0,G,K);let Ct=!1;const $t=new Uo;let z=!1,Q=!1;const dt=new se,nt=new U,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return A===null?Z:1}let D=n;function Yt(S,P){return e.getContext(S,P)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",$,!1),D===null){const P="webgl2";if(D=Yt(P,S),D===null)throw Yt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Et,jt,St,Bt,Rt,Ft,ee,w,x,k,X,j,J,_t,at,rt,Tt,it,xt,zt,yt,ht,Nt,Ht;function re(){Et=new WE(D),Et.init(),ht=new Ay(D,Et),jt=new BE(D,Et,t,ht),St=new by(D),Bt=new qE(D),Rt=new dy,Ft=new Ty(D,Et,St,Rt,jt,ht,Bt),ee=new HE(y),w=new GE(y),x=new t0(D),Nt=new UE(D,x),k=new $E(D,x,Bt,Nt),X=new jE(D,k,x,Bt),xt=new YE(D,jt,Ft),rt=new kE(Rt),j=new cy(y,ee,w,Et,jt,Nt,rt),J=new Ny(y,Rt),_t=new hy,at=new vy(Et),it=new OE(y,ee,w,St,X,f,l),Tt=new My(y,X,jt),Ht=new Oy(D,Bt,jt,St),zt=new FE(D,Et,Bt),yt=new XE(D,Et,Bt),Bt.programs=j.programs,y.capabilities=jt,y.extensions=Et,y.properties=Rt,y.renderLists=_t,y.shadowMap=Tt,y.state=St,y.info=Bt}re();const Ot=new Iy(y,D);this.xr=Ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(G,K,!1))},this.getSize=function(S){return S.set(G,K)},this.setSize=function(S,P,B=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,K=P,e.width=Math.floor(S*Z),e.height=Math.floor(P*Z),B===!0&&(e.style.width=S+"px",e.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(G*Z,K*Z).floor()},this.setDrawingBufferSize=function(S,P,B){G=S,K=P,Z=B,e.width=Math.floor(S*B),e.height=Math.floor(P*B),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(et)},this.setViewport=function(S,P,B,N){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,P,B,N),St.viewport(_.copy(et).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ft)},this.setScissor=function(S,P,B,N){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,P,B,N),St.scissor(I.copy(ft).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(S){St.setScissorTest(Ct=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(S=!0,P=!0,B=!0){let N=0;if(S){let O=!1;if(A!==null){const lt=A.texture.format;O=lt===vu||lt===_u||lt===gu}if(O){const lt=A.texture.type,pt=lt===Xn||lt===ls||lt===hu||lt===Vs||lt===pu||lt===mu,mt=it.getClearColor(),Mt=it.getClearAlpha(),At=mt.r,Lt=mt.g,Ut=mt.b;pt?(m[0]=At,m[1]=Lt,m[2]=Ut,m[3]=Mt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=At,g[1]=Lt,g[2]=Ut,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else N|=D.COLOR_BUFFER_BIT}P&&(N|=D.DEPTH_BUFFER_BIT),B&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",$,!1),_t.dispose(),at.dispose(),Rt.dispose(),ee.dispose(),w.dispose(),X.dispose(),Nt.dispose(),Ht.dispose(),j.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Kt),Ot.removeEventListener("sessionend",Je),Ee.stop()};function R(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=Bt.autoReset,P=Tt.enabled,B=Tt.autoUpdate,N=Tt.needsUpdate,O=Tt.type;re(),Bt.autoReset=S,Tt.enabled=P,Tt.autoUpdate=B,Tt.needsUpdate=N,Tt.type=O}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ot(S){const P=S.target;P.removeEventListener("dispose",ot),ct(P)}function ct(S){Wt(S),Rt.remove(S)}function Wt(S){const P=Rt.get(S).programs;P!==void 0&&(P.forEach(function(B){j.releaseProgram(B)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,B,N,O,lt){P===null&&(P=bt);const pt=O.isMesh&&O.matrixWorld.determinant()<0,mt=Vu(S,P,B,N,O);St.setMaterial(N,pt);let Mt=B.index,At=1;if(N.wireframe===!0){if(Mt=k.getWireframeAttribute(B),Mt===void 0)return;At=2}const Lt=B.drawRange,Ut=B.attributes.position;let oe=Lt.start*At,ge=(Lt.start+Lt.count)*At;lt!==null&&(oe=Math.max(oe,lt.start*At),ge=Math.min(ge,(lt.start+lt.count)*At)),Mt!==null?(oe=Math.max(oe,0),ge=Math.min(ge,Mt.count)):Ut!=null&&(oe=Math.max(oe,0),ge=Math.min(ge,Ut.count));const Ie=ge-oe;if(Ie<0||Ie===1/0)return;Nt.setup(O,N,mt,B,Mt);let fn,Xt=zt;if(Mt!==null&&(fn=x.get(Mt),Xt=yt,Xt.setIndex(fn)),O.isMesh)N.wireframe===!0?(St.setLineWidth(N.wireframeLinewidth*Dt()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(O.isLine){let wt=N.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*Dt()),O.isLineSegments?Xt.setMode(D.LINES):O.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else O.isPoints?Xt.setMode(D.POINTS):O.isSprite&&Xt.setMode(D.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Xt.renderInstances(oe,Ie,O.count);else if(B.isInstancedBufferGeometry){const wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_s=Math.min(B.instanceCount,wt);Xt.renderInstances(oe,Ie,_s)}else Xt.render(oe,Ie)};function Qt(S,P,B){S.transparent===!0&&S.side===nn&&S.forceSinglePass===!1?(S.side=Pe,S.needsUpdate=!0,qs(S,P,B),S.side=$n,S.needsUpdate=!0,qs(S,P,B),S.side=nn):qs(S,P,B)}this.compile=function(S,P,B=null){B===null&&(B=S),p=at.get(B),p.init(P),b.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(y._useLegacyLights);const N=new Set;return S.traverse(function(O){const lt=O.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const mt=lt[pt];Qt(mt,B,O),N.add(mt)}else Qt(lt,B,O),N.add(lt)}),b.pop(),p=null,N},this.compileAsync=function(S,P,B=null){const N=this.compile(S,P,B);return new Promise(O=>{function lt(){if(N.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&N.delete(pt)}),N.size===0){O(S);return}setTimeout(lt,10)}Et.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ie=null;function me(S){ie&&ie(S)}function Kt(){Ee.stop()}function Je(){Ee.start()}const Ee=new Pu;Ee.setAnimationLoop(me),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(S){ie=S,Ot.setAnimationLoop(S),S===null?Ee.stop():Ee.start()},Ot.addEventListener("sessionstart",Kt),Ot.addEventListener("sessionend",Je),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(P),P=Ot.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,P,A),p=at.get(S,b.length),p.init(P),b.push(p),dt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$t.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,z=rt.init(this.clippingPlanes,Q),v=_t.get(S,u.length),v.init(),u.push(v),Ho(S,P,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(H,tt);const B=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1;B&&it.addToRenderList(v,S),this.info.render.frame++,z===!0&&rt.beginShadows();const N=p.state.shadowsArray;Tt.render(N,S,P),z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=v.opaque,lt=v.transmissive;if(p.setupLights(y._useLegacyLights),P.isArrayCamera){const pt=P.cameras;if(lt.length>0)for(let mt=0,Mt=pt.length;mt<Mt;mt++){const At=pt[mt];Vo(O,lt,S,At)}B&&it.render(S);for(let mt=0,Mt=pt.length;mt<Mt;mt++){const At=pt[mt];zo(v,S,At,At.viewport)}}else lt.length>0&&Vo(O,lt,S,P),B&&it.render(S),zo(v,S,P);A!==null&&(Ft.updateMultisampleRenderTarget(A),Ft.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,P),Nt.resetDefaultState(),F=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],z===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Ho(S,P,B,N){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$t.intersectsSprite(S)){N&&nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const pt=X.update(S),mt=S.material;mt.visible&&v.push(S,pt,mt,B,nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$t.intersectsObject(S))){const pt=X.update(S),mt=S.material;if(N&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),nt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),nt.copy(pt.boundingSphere.center)),nt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(mt)){const Mt=pt.groups;for(let At=0,Lt=Mt.length;At<Lt;At++){const Ut=Mt[At],oe=mt[Ut.materialIndex];oe&&oe.visible&&v.push(S,pt,oe,B,nt.z,Ut)}}else mt.visible&&v.push(S,pt,mt,B,nt.z,null)}}const lt=S.children;for(let pt=0,mt=lt.length;pt<mt;pt++)Ho(lt[pt],P,B,N)}function zo(S,P,B,N){const O=S.opaque,lt=S.transmissive,pt=S.transparent;p.setupLightsView(B),z===!0&&rt.setGlobalState(y.clippingPlanes,B),N&&St.viewport(_.copy(N)),O.length>0&&Xs(O,P,B),lt.length>0&&Xs(lt,P,B),pt.length>0&&Xs(pt,P,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Vo(S,P,B,N){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new vi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?qr:Xn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const lt=p.state.transmissionRenderTarget[N.id],pt=N.viewport||_;lt.setSize(pt.z,pt.w);const mt=y.getRenderTarget();y.setRenderTarget(lt),y.getClearColor(C),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const Mt=y.toneMapping;y.toneMapping=Hn;const At=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),z===!0&&rt.setGlobalState(y.clippingPlanes,N),Xs(S,B,N),Ft.updateMultisampleRenderTarget(lt),Ft.updateRenderTargetMipmap(lt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Ut=0,oe=P.length;Ut<oe;Ut++){const ge=P[Ut],Ie=ge.object,fn=ge.geometry,Xt=ge.material,wt=ge.group;if(Xt.side===nn&&Ie.layers.test(N.layers)){const _s=Xt.side;Xt.side=Pe,Xt.needsUpdate=!0,Go(Ie,B,N,fn,Xt,wt),Xt.side=_s,Xt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ft.updateMultisampleRenderTarget(lt),Ft.updateRenderTargetMipmap(lt))}y.setRenderTarget(mt),y.setClearColor(C,W),At!==void 0&&(N.viewport=At),y.toneMapping=Mt}function Xs(S,P,B){const N=P.isScene===!0?P.overrideMaterial:null;for(let O=0,lt=S.length;O<lt;O++){const pt=S[O],mt=pt.object,Mt=pt.geometry,At=N===null?pt.material:N,Lt=pt.group;mt.layers.test(B.layers)&&Go(mt,P,B,Mt,At,Lt)}}function Go(S,P,B,N,O,lt){S.onBeforeRender(y,P,B,N,O,lt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,P,B,N,S,lt),O.transparent===!0&&O.side===nn&&O.forceSinglePass===!1?(O.side=Pe,O.needsUpdate=!0,y.renderBufferDirect(B,P,N,O,S,lt),O.side=$n,O.needsUpdate=!0,y.renderBufferDirect(B,P,N,O,S,lt),O.side=nn):y.renderBufferDirect(B,P,N,O,S,lt),S.onAfterRender(y,P,B,N,O,lt)}function qs(S,P,B){P.isScene!==!0&&(P=bt);const N=Rt.get(S),O=p.state.lights,lt=p.state.shadowsArray,pt=O.state.version,mt=j.getParameters(S,O.state,lt,P,B),Mt=j.getProgramCacheKey(mt);let At=N.programs;N.environment=S.isMeshStandardMaterial?P.environment:null,N.fog=P.fog,N.envMap=(S.isMeshStandardMaterial?w:ee).get(S.envMap||N.environment),N.envMapRotation=N.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",ot),At=new Map,N.programs=At);let Lt=At.get(Mt);if(Lt!==void 0){if(N.currentProgram===Lt&&N.lightsStateVersion===pt)return $o(S,mt),Lt}else mt.uniforms=j.getUniforms(S),S.onBuild(B,mt,y),S.onBeforeCompile(mt,y),Lt=j.acquireProgram(mt,Mt),At.set(Mt,Lt),N.uniforms=mt.uniforms;const Ut=N.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=rt.uniform),$o(S,mt),N.needsLights=Wu(S),N.lightsStateVersion=pt,N.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),N.currentProgram=Lt,N.uniformsList=null,Lt}function Wo(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function $o(S,P){const B=Rt.get(S);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Vu(S,P,B,N,O){P.isScene!==!0&&(P=bt),Ft.resetTextureUnits();const lt=P.fog,pt=N.isMeshStandardMaterial?P.environment:null,mt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,Mt=(N.isMeshStandardMaterial?w:ee).get(N.envMap||pt),At=N.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ut=!!B.morphAttributes.position,oe=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let Ie=Hn;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=y.toneMapping);const fn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xt=fn!==void 0?fn.length:0,wt=Rt.get(N),_s=p.state.lights;if(z===!0&&(Q===!0||S!==E)){const Be=S===E&&N.id===F;rt.setState(N,S,Be)}let ne=!1;N.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==_s.state.version||wt.outputColorSpace!==mt||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==Mt||N.fog===!0&&wt.fog!==lt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==At||wt.vertexTangents!==Lt||wt.morphTargets!==Ut||wt.morphNormals!==oe||wt.morphColors!==ge||wt.toneMapping!==Ie||wt.morphTargetsCount!==Xt)&&(ne=!0):(ne=!0,wt.__version=N.version);let Qn=wt.currentProgram;ne===!0&&(Qn=qs(N,P,O));let Xo=!1,vs=!1,Kr=!1;const _e=Qn.getUniforms(),wn=wt.uniforms;if(St.useProgram(Qn.program)&&(Xo=!0,vs=!0,Kr=!0),N.id!==F&&(F=N.id,vs=!0),Xo||E!==S){_e.setValue(D,"projectionMatrix",S.projectionMatrix),_e.setValue(D,"viewMatrix",S.matrixWorldInverse);const Be=_e.map.cameraPosition;Be!==void 0&&Be.setValue(D,nt.setFromMatrixPosition(S.matrixWorld)),jt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&_e.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,vs=!0,Kr=!0)}if(O.isSkinnedMesh){_e.setOptional(D,O,"bindMatrix"),_e.setOptional(D,O,"bindMatrixInverse");const Be=O.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),_e.setValue(D,"boneTexture",Be.boneTexture,Ft))}O.isBatchedMesh&&(_e.setOptional(D,O,"batchingTexture"),_e.setValue(D,"batchingTexture",O._matricesTexture,Ft));const Zr=B.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&xt.update(O,B,Qn),(vs||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,_e.setValue(D,"receiveShadow",O.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(wn.envMap.value=Mt,wn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&P.environment!==null&&(wn.envMapIntensity.value=P.environmentIntensity),vs&&(_e.setValue(D,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&Gu(wn,Kr),lt&&N.fog===!0&&J.refreshFogUniforms(wn,lt),J.refreshMaterialUniforms(wn,N,Z,K,p.state.transmissionRenderTarget[S.id]),Ar.upload(D,Wo(wt),wn,Ft)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ar.upload(D,Wo(wt),wn,Ft),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&_e.setValue(D,"center",O.center),_e.setValue(D,"modelViewMatrix",O.modelViewMatrix),_e.setValue(D,"normalMatrix",O.normalMatrix),_e.setValue(D,"modelMatrix",O.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Be=N.uniformsGroups;for(let Jr=0,$u=Be.length;Jr<$u;Jr++){const qo=Be[Jr];Ht.update(qo,Qn),Ht.bind(qo,Qn)}}return Qn}function Gu(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Wu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,P,B){Rt.get(S.texture).__webglTexture=P,Rt.get(S.depthTexture).__webglTexture=B;const N=Rt.get(S);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=B===void 0,N.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const B=Rt.get(S);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,B=0){A=S,L=P,T=B;let N=!0,O=null,lt=!1,pt=!1;if(S){const Mt=Rt.get(S);Mt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(D.FRAMEBUFFER,null),N=!1):Mt.__webglFramebuffer===void 0?Ft.setupRenderTarget(S):Mt.__hasExternalTextures&&Ft.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(pt=!0);const Lt=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[P])?O=Lt[P][B]:O=Lt[P],lt=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?O=Rt.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?O=Lt[B]:O=Lt,_.copy(S.viewport),I.copy(S.scissor),V=S.scissorTest}else _.copy(et).multiplyScalar(Z).floor(),I.copy(ft).multiplyScalar(Z).floor(),V=Ct;if(St.bindFramebuffer(D.FRAMEBUFFER,O)&&N&&St.drawBuffers(S,O),St.viewport(_),St.scissor(I),St.setScissorTest(V),lt){const Mt=Rt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,Mt.__webglTexture,B)}else if(pt){const Mt=Rt.get(S.texture),At=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,B||0,At)}F=-1},this.readRenderTargetPixels=function(S,P,B,N,O,lt,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(mt=mt[pt]),mt){St.bindFramebuffer(D.FRAMEBUFFER,mt);try{const Mt=S.texture,At=Mt.format,Lt=Mt.type;if(!jt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-N&&B>=0&&B<=S.height-O&&D.readPixels(P,B,N,O,ht.convert(At),ht.convert(Lt),lt)}finally{const Mt=A!==null?Rt.get(A).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(S,P,B=0){const N=Math.pow(2,-B),O=Math.floor(P.image.width*N),lt=Math.floor(P.image.height*N);Ft.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,S.x,S.y,O,lt),St.unbindTexture()},this.copyTextureToTexture=function(S,P,B,N=0){const O=P.image.width,lt=P.image.height,pt=ht.convert(B.format),mt=ht.convert(B.type);Ft.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,S.x,S.y,O,lt,pt,mt,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,pt,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,N,S.x,S.y,pt,mt,P.image),N===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(S,P,B,N,O=0){const lt=S.max.x-S.min.x,pt=S.max.y-S.min.y,mt=S.max.z-S.min.z,Mt=ht.convert(N.format),At=ht.convert(N.type);let Lt;if(N.isData3DTexture)Ft.setTexture3D(N,0),Lt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ft.setTexture2DArray(N,0),Lt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ge=D.getParameter(D.UNPACK_SKIP_PIXELS),Ie=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),Xt=B.isCompressedTexture?B.mipmaps[O]:B.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?D.texSubImage3D(Lt,O,P.x,P.y,P.z,lt,pt,mt,Mt,At,Xt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,O,P.x,P.y,P.z,lt,pt,mt,Mt,Xt.data):D.texSubImage3D(Lt,O,P.x,P.y,P.z,lt,pt,mt,Mt,At,Xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),O===0&&N.generateMipmaps&&D.generateMipmap(Lt),St.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),St.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,St.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Do?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Yr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fy extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bo extends Jn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new U,f=new U,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){const b=[],y=u/n;let M=0;u===0&&a===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(T+M,1-y),b.push(c++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const y=d[u][b+1],M=d[u][b],L=d[u+1][b],T=d[u+1][b+1];(u!==0||a>0)&&m.push(y,M,T),(u!==n-1||l<Math.PI)&&m.push(M,L,T)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class By extends $s{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Jc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ky{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Hy=new ky;class ko{constructor(t){this.manager=t!==void 0?t:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";class zy extends ko{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Jc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ns("img");function l(){d(),Jc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){d(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Vy extends ko{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,a=new zy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ku extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Gy extends ku{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ya=new se,Qc=new U,td=new U;class Wy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $y extends Wy{constructor(){super(new Iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ed extends ku{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new $y}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nd=new se;class Xy{constructor(t,e,n=0,s=1/0){this.ray=new bu(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(t,e=!0,n=[]){return uo(t,this,n,e),n.sort(id),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uo(t[s],this,n,e);return n.sort(id),n}}function id(i,t){return i.distance-t.distance}function uo(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)uo(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);function sd(i,t){const e=i==="local"?65:45,n=2,s=.1,r=1e3,a={multi:null,red:null,blue:null};if(i==="local"){const o=new Re(e,n,s,r),l=new Re(e,n,s,r);o.position.set(-33,0,0),l.position.set(33,0,0),o.lookAt(0,0,0),l.lookAt(0,0,0),a.blue=o,a.red=l}if(i==="multi"){const o=new Re(e,n,s,r);o.position.set(t==="red"?33:-33,0,0),o.lookAt(0,0,0),a.multi=o}return a}function qy(i){{const s=new Gy(11657727,12155424,2);i.add(s)}{const n=new ed(16777215,2.5),s=new ed(16777215,2.5);n.position.set(-40,0,0),s.position.set(40,0,0),i.add(n),i.add(s),i.add(n.target),i.add(s.target)}}function Yy(i){const t=new Sn,e=40,n=10,s=15,r=new ds(n,s),a=new zn({color:255,side:nn,transparent:!0,opacity:0}),o=new ce(r,a),l=new ce(r,a);o.rotation.x=Math.PI/2,o.rotation.y=Math.PI/2,l.rotation.x=Math.PI/2,l.rotation.y=Math.PI/2,o.position.set(e/2,0,0),l.position.set(-e/2,0,0),t.add(o),t.add(l);const c=new Sn,d=.3,h=new zn({color:0}),f=new ze(e,d,d),m=new ze(d,n,d),g=new ze(d,d,s),v=[{y:n/2,z:-s/2},{y:n/2,z:s/2},{y:-n/2,z:-s/2},{y:-n/2,z:s/2}],p=[{x:-e/2,z:-s/2},{x:-e/3,z:-s/2},{x:-e/6,z:-s/2},{x:-e/2,z:s/2},{x:-e/3,z:s/2},{x:-e/6,z:s/2},{x:0,z:-s/2},{x:0,z:s/2},{x:e/2,z:-s/2},{x:e/3,z:-s/2},{x:e/6,z:-s/2},{x:e/2,z:s/2},{x:e/3,z:s/2},{x:e/6,z:s/2}],u=[{x:-e/2,y:-n/2},{x:-e/3,y:-n/2},{x:-e/6,y:-n/2},{x:-e/2,y:n/2},{x:-e/3,y:n/2},{x:-e/6,y:n/2},{x:0,y:-n/2},{x:0,y:n/2},{x:e/2,y:-n/2},{x:e/3,y:-n/2},{x:e/6,y:-n/2},{x:e/2,y:n/2},{x:e/3,y:n/2},{x:e/6,y:n/2}];for(let T=0;T<4;T+=1){const A=new ce(f,h);A.position.set(0,v[T].y,v[T].z),c.add(A)}for(let T=0;T<14;T+=1){const A=new ce(m,h),F=new ce(g,h);A.position.set(p[T].x,0,p[T].z),F.position.set(u[T].x,u[T].y,0),c.add(A),c.add(F)}t.add(c);const b=new zn({color:2032188,transparent:!0,opacity:.7});[{name:"topPlane",h:s,rotation:{x:Math.PI/2,y:0,z:0},position:{x:0,y:n/2+d/2,z:0}},{name:"bottomPlane",h:s,rotation:{x:-Math.PI/2,y:0,z:0},position:{x:0,y:-n/2-d/2,z:0}},{name:"rightPlane",h:n,rotation:{x:Math.PI,y:0,z:0},position:{x:0,y:0,z:s/2+d/2}},{name:"leftPlane",h:n,rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:-s/2-d/2}}].forEach(T=>{const A=new ce(new ds(e,T.h),b.clone());A.position.set(T.position.x,T.position.y,T.position.z),A.rotation.set(T.rotation.x,T.rotation.y,T.rotation.z),A.name=T.name,t.add(A)}),t.position.set(0,0,0),t.name="map",i.add(t);const M=new ms().setFromObject(t),L=new U;M.getCenter(L)}function jy(i,t){const e=new pe;i.add(e);const n=new Bo(1,32,16),s=new By({color:t,shininess:100}),r=new ce(n,s);r.position.set(0,0,0),r.name="ball",e.add(r);const a=new Sn,o=10,l=15,c=.5,d=new zn({color:10222262,transparent:!0,opacity:.6});[{w:c,h:o+c,d:c,position:{x:0,y:0,z:l/2},rotation:{x:0,y:0,z:0}},{w:c,h:o+c,d:c,position:{x:0,y:0,z:-l/2},rotation:{x:0,y:0,z:0}},{w:c,h:c,d:l+c,position:{x:0,y:o/2,z:0},rotation:{x:0,y:0,z:0}},{w:c,h:c,d:l+c,position:{x:0,y:-o/2,z:0},rotation:{x:0,y:0,z:0}}].forEach(E=>{const _=new ce(new ze(E.w,E.h,E.d),d);_.position.set(E.position.x,E.position.y,E.position.z),_.rotation.set(E.rotation.x,E.rotation.y,E.rotation.z),a.add(_)}),a.position.set(0,0,0),a.name="ballPlane",i.getObjectByName("map").add(a);const f=.5,m=3,g=m*1.5,v=new ze(f,m,g),p=new zn({color:10526880,transparent:!0,opacity:.5}),u=new ce(v,p),b=new ce(v,p);u.position.set(20,0,0),b.position.set(-20,0,0);const y=new Sn,M=new Sn,L=E=>new ze(f+.05,E==="horizontal"?f-f+.8/2:m+.05,E==="horizontal"?g+.05:f-f/2+.05),T=E=>new ze(f+.05,E==="horizontal"?f/2+.05:m/3+.05,E==="horizontal"?g/3+.05:f/2+.05),A=E=>new zn({color:E==="blue"?255:16711680,opacity:1});[{name:"top",mesh:L("horizontal"),position:{x:0,y:m/2-f/4,z:0}},{name:"bottom",mesh:L("horizontal"),position:{x:0,y:-m/2+f/4,z:0}},{name:"left",mesh:L("vertical"),position:{x:0,y:0,z:g/2-f/4}},{name:"right",mesh:L("vertical"),position:{x:0,y:0,z:-g/2+f/4}},{name:"innerTop",mesh:T("vertical"),position:{x:0,y:m/3,z:0}},{name:"innerBottom",mesh:T("vertical"),position:{x:0,y:-m/3,z:0}},{name:"innerLeft",mesh:T("horizontal"),position:{x:0,y:0,z:g/3}},{name:"innerRight",mesh:T("horizontal"),position:{x:0,y:0,z:-g/3}},{name:"boxTop",mesh:T("horizontal"),position:{x:0,y:m/6,z:0}},{name:"boxBottom",mesh:T("horizontal"),position:{x:0,y:-m/6,z:0}},{name:"boxLeft",mesh:T("vertical"),position:{x:0,y:0,z:g/6}},{name:"boxRight",mesh:T("vertical"),position:{x:0,y:0,z:-g/6}}].forEach(E=>{const _=new ce(E.mesh,A("blue"));_.position.set(E.position.x,E.position.y,E.position.z),y.add(_)}),M.copy(y);for(let E=0;E<M.children.length;E+=1)M.children[E].material=A("red");y.name="bluePaddleBox",M.name="redPaddleBox",b.add(y),u.add(M),u.name="redPaddle",b.name="bluePaddle",e.add(u),e.add(b)}function Ky(i,t){const e=t.getObjectByName("redPaddle"),n=t.getObjectByName("bluePaddle"),s={w:!1,s:!1,a:!1,d:!1,up:!1,down:!1,left:!1,right:!1};function r(c){switch(c.code){case"KeyW":s.w=!0;break;case"KeyS":s.s=!0;break;case"KeyA":s.a=!0;break;case"KeyD":s.d=!0;break;case"ArrowUp":s.up=!0;break;case"ArrowDown":s.down=!0;break;case"ArrowLeft":s.left=!0;break;case"ArrowRight":s.right=!0;break}}function a(c){switch(c.code){case"KeyW":s.w=!1;break;case"KeyS":s.s=!1;break;case"KeyA":s.a=!1;break;case"KeyD":s.d=!1;break;case"ArrowUp":s.up=!1;break;case"ArrowDown":s.down=!1;break;case"ArrowLeft":s.left=!1;break;case"ArrowRight":s.right=!1;break}}function o(){s.w&&e.position.y<5&&(e.position.y+=.2),s.s&&e.position.y>-5&&(e.position.y-=.2),s.a&&e.position.z<7.5&&(e.position.z+=.2),s.d&&e.position.z>-7.5&&(e.position.z-=.2),s.up&&n.position.y<5&&(n.position.y+=.2),s.down&&n.position.y>-5&&(n.position.y-=.2),s.left&&n.position.z>-7.5&&(n.position.z-=.2),s.right&&n.position.z<7.5&&(n.position.z+=.2)}i.focus(),i.addEventListener("keydown",r,!1),i.addEventListener("keyup",a,!1),setInterval(o,10);function l(){i.removeEventListener("keydown",r,!1),i.removeEventListener("keyup",a,!1)}return l}function rd(i){if(!i)return!1;const t=i.domElement,e=t.clientWidth,n=t.clientHeight,s=t.width!==e||t.height!==n;return i.setPixelRatio(window.devicePixelRatio),s&&i.setSize(e,n,!1),s}function Hu(i,t){if(t===null)return i;const e=t.getObjectByName("redPaddleBox"),n=t.getObjectByName("bluePaddleBox"),s=t.getObjectByName("topPlane"),r=t.getObjectByName("bottomPlane"),a=t.getObjectByName("rightPlane"),o=t.getObjectByName("leftPlane"),l={...i};if(l.redPaddleHit===1){for(let c=0;c<e.children.length;c+=1)e.children[c].material.color.set(65535);l.redPaddleHit=2}else if(l.redPaddleHit>=2&&l.redPaddleHit<10)l.redPaddleHit+=1;else if(l.redPaddleHit===10){for(let c=0;c<e.children.length;c+=1)e.children[c].material.color.set(16711680);l.redPaddleHit=0}if(l.bluePaddleHit===1){for(let c=0;c<n.children.length;c+=1)n.children[c].material.color.set(65535);l.bluePaddleHit=2}else if(l.bluePaddleHit>=2&&l.bluePaddleHit<10)l.bluePaddleHit+=1;else if(l.bluePaddleHit===10){for(let c=0;c<n.children.length;c+=1)n.children[c].material.color.set(255);l.bluePaddleHit=0}return l.topWallHit===1?(s.material.color.set(7964363),l.topWallHit=2):l.topWallHit>=2&&l.topWallHit<10?l.topWallHit+=1:l.topWallHit===10&&(s.material.color.set(2032188),l.topWallHit=0),l.bottomWallHit===1?(r.material.color.set(7964363),l.bottomWallHit=2):l.bottomWallHit>=2&&l.bottomWallHit<10?l.bottomWallHit+=1:l.bottomWallHit===10&&(r.material.color.set(2032188),l.bottomWallHit=0),l.rightWallHit===1?(a.material.color.set(7964363),l.rightWallHit=2):l.rightWallHit>=2&&l.rightWallHit<10?l.rightWallHit+=1:l.rightWallHit===10&&(a.material.color.set(2032188),l.rightWallHit=0),l.leftWallHit===1?(o.material.color.set(7964363),l.leftWallHit=2):l.leftWallHit>=2&&l.leftWallHit<10?l.leftWallHit+=1:l.leftWallHit===10&&(o.material.color.set(2032188),l.leftWallHit=0),l}function ad(i,t){if(t===null)return 0;const e=t.getObjectByName("ball"),n=t.getObjectByName("redPaddle"),s=t.getObjectByName("bluePaddle");let r,a;i==="red"?(r=n.position.y,a=n.position.z):(r=s.position.y,a=s.position.z);const o=e.position.y,l=e.position.z;return(o-1>r-1.5&&o-1<r+1.5||o+1>r-1.5&&o+1<r+1.5)&&(l-1>a-1.5&&l-1<a+1.5||l+1>a-1.5&&l+1<a+1.5)?1:0}function Zy(i,t){const e={...i};return e.a=e.start==="blue"?.2:-.2,e.b=.1,e.c=.1,t.position.set(e.start==="blue"?-18:18,Math.random()*8-4,Math.random()*12-6),e.start="off",e.hitStatus={redPaddleHit:10,bluePaddleHit:10,topWallHit:10,bottomWallHit:10,rightWallHit:10,leftWallHit:10},e}function Jy(i,t,e,n,s,r){let a={...e};a.hitStatus={...e.hitStatus};const o=parseInt(t.redPlayerScore.innerText,10),l=parseInt(t.bluePlayerScore.innerText,10);if(o>=5||l>=5){cancelAnimationFrame(s);const c=ye.getOrCreateInstance("#gameResultModal"),d=document.querySelector("#gameResult"),h=o>l?"red":"blue";return d.innerText=`${h} Win!`,d.classList.add(h==="red"?"text-danger":"text-primary"),c.show(),a}return t.ball&&(a.start!=="off"?a=Zy(a,t.ball):(t.ball.position.set(t.ball.position.x+a.a*a.v,t.ball.position.y+a.b*a.v,t.ball.position.z+a.c*a.v),t.ball.rotation.set(t.ball.rotation.x+.1,t.ball.rotation.y+.1,t.ball.rotation.z+.1),t.ballPlane.position.set(t.ball.position.x,t.ballPlane.position.y,t.ballPlane.position.z),t.ball.position.x>19.5&&t.ball.position.x<20.5&&(ad("red",i)?(a.a*=-1,a.hitStatus.redPaddleHit=1):(document.getElementById("player2Score").innerText=(parseInt(t.bluePlayerScore.innerText,10)+1).toString(),a.start="blue",r.localGameScoreSettingTime())),t.ball.position.x<-19.5&&t.ball.position.x>-20.5&&(ad("blue",i)?(a.a*=-1,a.hitStatus.bluePaddleHit=1):(document.getElementById("player1Score").innerText=(parseInt(t.redPlayerScore.innerText,10)+1).toString(),a.start="red",r.localGameScoreSettingTime())),(a.hitStatus.redPaddleHit||a.hitStatus.bluePaddleHit)&&(a.v=3),!a.hitStatus.redPaddleHit&&!a.hitStatus.bluePaddleHit&&(a.v=1.2+.3*n),t.ball.position.z<-7.2&&t.ball.position.z>-7.8&&(a.c*=-1,a.hitStatus.leftWallHit=1),t.ball.position.z>7.2&&t.ball.position.z<7.8&&(a.c*=-1,a.hitStatus.rightWallHit=1),t.ball.position.y>4.7&&t.ball.position.y<5.3&&(a.b*=-1,a.hitStatus.topWallHit=1),t.ball.position.y<-4.7&&t.ball.position.y>-5.3&&(a.b*=-1,a.hitStatus.bottomWallHit=1),a.hitStatus=Hu(a.hitStatus,i))),a}function od(i,t,e,n){i&&(n==="multi"&&(i.setViewport(0,0,window.innerWidth,window.innerHeight),i.setScissor(0,0,window.innerWidth,window.innerHeight),i.setScissorTest(!0),e.multi&&i.render(t,e.multi)),n==="local"&&(i.setViewport(0,0,window.innerWidth/2,window.innerHeight),i.setScissor(0,0,window.innerWidth/2,window.innerHeight),i.setScissorTest(!0),e.red&&i.render(t,e.red),i.setViewport(window.innerWidth/2,0,window.innerWidth/2,window.innerHeight),i.setScissor(window.innerWidth/2,0,window.innerWidth/2,window.innerHeight),i.setScissorTest(!0),e.blue&&i.render(t,e.blue)))}class Qy{static getAbsolutePosition(t){const e=new U;return t.getWorldPosition(e),e}static getMouseWorldPositionInObject(t,e,n,s){const r=new U(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1,.5);r.unproject(n);const o=new Xy(n.position,r.sub(n.position).normalize()).intersectObject(s,!0);return o.length>0?o[0].point:null}}function tM(i,t,e){const n=t.getObjectByName("map");i.focus();function s(a){const o=a.clientX,l=a.clientY,c=Qy.getMouseWorldPositionInObject(o,l,e.multi,n);if(!c)return;const d={type:"move",y:c.y,z:c.z};kt.gameSocket.readyState===WebSocket.OPEN&&kt.gameSocket.send(JSON.stringify(d))}i.focus(),i.addEventListener("mousemove",s);function r(){i.removeEventListener("mousemove",s)}return r}const eM=i=>{const t=document.getElementById("scoreContainer"),e=document.createElement("button");e.id="openSettingButton",e.className="btn btn-outline-light w-100 my-1 fs-3",e.innerText="Open Setting - Pause Game",e.addEventListener("click",()=>{const o=document.getElementById("buttonContainer");e.innerText==="Open Setting - Pause Game"?(e.innerText="Close Setting - Restart Game",o.classList.remove("d-none"),i.localStopRendering()):(e.innerText="Open Setting - Pause Game",o.classList.add("d-none"),document.getElementById("gameCanvas").focus(),i.resetGameScore(),i.localStartRendering())});const n=document.createElement("div");n.id="buttonContainer",n.className="d-flex flex-column align-items-center w-100 fs-10 d-none border border-success border-5 rounded bg-dark my-3";const s=document.createElement("button"),r=document.createElement("button"),a=document.createElement("button");n.append(a),n.append(r),n.append(s),s.id="localMapButton",r.id="localBallColorButton",a.id="localSpeedButton",s.className="btn btn-outline-light fs-8 w-100",r.className="btn btn-outline-light fs-8 w-100",a.className="btn btn-outline-light fs-8 w-100",s.innerText="Mountain",r.innerText="BALL COLOR",a.innerText="speed X3",r.style.color="#0000ff",s.addEventListener("click",()=>{s.innerText==="Mountain"?s.innerText="Futuristic Horizon":s.innerText==="Futuristic Horizon"?s.innerText="Pixel Rain":s.innerText="Mountain",i.setLocalGameMap(s.innerText)}),r.addEventListener("click",()=>{const o=Math.floor(Math.random()*16777215).toString(16),l=parseInt(`0x${o.padStart(6,"0")}`,16);r.innerText="BALL COLOR",r.style.color=`#${o}`,i.setLocalGameBallColor(l)}),a.addEventListener("click",()=>{const o=parseInt(a.innerText.at(-1),10);a.innerText=`speed x${o%5+1}`,i.setLocalGameSpeed(parseInt(a.innerText.at(-1),10)),i.resetLocalGameInfo()}),t.append(e),t.append(n)};class nM{constructor(){this.scene=new Fy,this.canvas=document.getElementById("gameCanvas"),this.renderer=new Uy({antialias:!0,canvas:this.canvas}),this.camera=null,this.mapList={"Futuristic Horizon":"/img/map_futuristic_horizon.jpg",Mountain:"/img/map_mountain.jpg","Pixel Rain":"/img/map_pixel_rain.jpg"},this.loader=new Vy,this.currentBackgroundTexture=null,qy(this.scene),Yy(this.scene),jy(this.scene,255),this.objects={ball:this.scene.getObjectByName("ball"),ballPlane:this.scene.getObjectByName("ballPlane"),redPaddle:this.scene.getObjectByName("redPaddle"),bluePaddle:this.scene.getObjectByName("bluePaddle"),redPlayerScore:document.getElementById("player1Score"),bluePlayerScore:document.getElementById("player2Score"),map:this.scene.getObjectByName("map")},this.localGameInfo=null,this.multiGameInfo=null,this.localEventHandler=null,this.multiEventHandler=null,this.localGameRender=this.localGameRender.bind(this),this.isRendering=!1,this.renderRequestId=null,this.localGameSpped=3,this.localTimeout={1:null,2:null,3:null,4:null,score:null}}disposeAll(){this.localEventHandler&&this.localEventHandler(),this.multiEventHandler&&this.multiEventHandler(),this.objects&&Object.values(this.objects).forEach(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}):typeof t.material.dispose=="function"&&t.material.dispose()),this.scene.remove(t)}),this.camera&&Object.values(this.camera).forEach(t=>{t&&this.scene.remove(t)}),this.camera=null,this.currentBackgroundTexture&&this.currentBackgroundTexture.dispose(),this.renderer&&this.renderer.dispose(),this.currentBackgroundTexture=null,this.loader=null,this.renderer=null,this.scene=null,cancelAnimationFrame(this.renderRequestId),this.renderRequestId=null}setLocalGameSpeed(t){this.localGameSpped=t}resetLocalGameInfo(){this.localGameInfo={a:0,b:0,c:0,v:1.2+.3*this.localGameSpped,start:"blue",hitStatus:{redPaddleHit:10,bluePaddleHit:10,topWallHit:10,bottomWallHit:10,rightWallHit:10,leftWallHit:10}}}setLocalGameBallColor(t){this.objects.ball.material.color.set(t)}setLocalGameMap(t){this.loader.load(this.mapList[t],e=>{this.scene.background=e,this.currentBackgroundTexture=e})}resetGameScore(){this.objects.redPlayerScore.innerText="0",this.objects.bluePlayerScore.innerText="0"}localGameScoreSettingTime(){const t=document.querySelector("#gameWaitingText");this.localStopRendering(),t.classList.remove("d-none"),t.innerText="Scoring...",this.localTimeout.score=setTimeout(()=>{t.classList.add("d-none"),this.isRendering=!0,this.localGameRender()},1e3)}localGameSetting(){this.setLocalGameMap("Mountain"),this.camera=sd("local",""),this.localEventHandler=Ky(this.canvas,this.scene,this.camera),this.resetGameScore(),this.resetLocalGameInfo(),eM(this)}multiGameSetting(t){this.camera=sd("multi",t.color),this.multiEventHandler=tM(this.canvas,this.scene,this.camera),this.loader.load(this.mapList[t.map.toString()],e=>{this.scene.background=e,this.currentBackgroundTexture=e}),this.objects.ball.material.color.set(t.ball_color),this.objects.ball.position.set(t.ball.x,t.ball.y,t.ball.z),this.objects.redPaddle.position.set(20,t.redY,t.redZ),this.objects.bluePaddle.position.set(-20,t.blueY,t.blueZ),this.multiGameInfo={redPaddleHit:10,bluePaddleHit:10,topWallHit:10,bottomWallHit:10,rightWallHit:10,leftWallHit:10}}localGameRender(){if(rd(this.renderer)){const t=this.renderer.domElement;let e;this.camera.red&&this.camera.blue&&(e=t.clientWidth/2/t.clientHeight,this.camera.blue.aspect=e,this.camera.blue.updateProjectionMatrix(),this.camera.red.aspect=e,this.camera.red.updateProjectionMatrix())}this.localGameInfo=Jy(this.scene,this.objects,this.localGameInfo,this.localGameSpped,this.renderRequestId,this),od(this.renderer,this.scene,this.camera,"local"),this.isRendering&&(this.renderRequestId=requestAnimationFrame(this.localGameRender))}resetLocalTimeOut(){Object.values(this.localTimeout).forEach(t=>{clearTimeout(t)})}localStartRendering(){const t=document.querySelector("#gameWaitingText");this.isRendering||(this.resetLocalTimeOut(),t.innerText="3",t.classList.remove("d-none"),this.localTimeout[1]=setTimeout(()=>{t.innerText="2"},1e3),this.localTimeout[2]=setTimeout(()=>{t.innerText="1"},2e3),this.localTimeout[3]=setTimeout(()=>{t.innerText="Start!"},3e3),this.localTimeout[4]=setTimeout(()=>{t.classList.add("d-none"),this.canvas.focus(),this.isRendering=!0,this.localGameRender()},4e3))}localStopRendering(){this.isRendering&&(this.isRendering=!1,cancelAnimationFrame(this.renderRequestId))}multiGameStart(){const t=()=>{if(rd(this.renderer)){const e=this.renderer.domElement;let n;this.camera.multi&&(n=e.clientWidth/e.clientHeight,this.camera.multi.aspect=n,this.camera.multi.updateProjectionMatrix())}od(this.renderer,this.scene,this.camera,"multi"),this.renderRequestId=requestAnimationFrame(t)};this.renderRequestId=requestAnimationFrame(t)}multiGameUpdateObjects(t){switch(parseInt(t.redScore,10).toString()!==this.objects.redPlayerScore.innerText&&(document.getElementById("player1Score").innerText=parseInt(t.redScore,10).toString()),parseInt(t.blueScore,10).toString()!==this.objects.bluePlayerScore.innerText&&(document.getElementById("player2Score").innerText=parseInt(t.blueScore,10).toString()),this.objects.redPaddle.position.set(20,t.redY,t.redZ),this.objects.bluePaddle.position.set(-20,t.blueY,t.blueZ),this.objects.ball.position.set(t.ballX,t.ballY,t.ballZ),this.objects.ballPlane.position.set(t.ballX,this.objects.ballPlane.position.y,this.objects.ballPlane.position.z),parseInt(t.ballHit,10)){case 1:this.multiGameInfo.redPaddleHit=1;break;case 2:this.multiGameInfo.bluePaddleHit=1;break;case 3:this.multiGameInfo.leftWallHit=1;break;case 4:this.multiGameInfo.rightWallHit=1;break;case 5:this.multiGameInfo.topWallHit=1;break;case 6:this.multiGameInfo.bottomWallHit=1;break}this.multiGameInfo=Hu(this.multiGameInfo,this.scene)}}class iM extends An{constructor(){super(),this.setTitle("Play Game");const t=new URLSearchParams(document.location.search);switch(this.gameId=t.get("id"),this.semiOneId=t.get("semi_1"),this.semiTwoId=t.get("semi_2"),this.finalId=t.get("final"),this.gameMode=t.get("mode"),this.isFinal=!1,this.isFinalUser=!1,this.gameMode){case"normal":kt.gameSocket=kt.createSocket(`/${this.gameMode}_game/${this.gameId}/`);break;case"semi-final":kt.gameSocket=kt.createSocket(`/semi_final_game/${this.semiOneId}/${this.semiTwoId}/${this.finalId}/`);break;case"final":kt.gameSocket=kt.createSocket(`/final_game/${this.finalId}/`);break}kt.handlePopstate("game"),this.gameManger=null,this.side="",this.blueScore="",this.redScore="",this.start=!1,this.gameEnd=!1,this.gameError=!1,this.gameErrorMsg="Game Error. Please try again later.",this.redNick="",this.blueNick=""}getGameManager(){return this.gameManger}setDisposeAll(){this.gameManger.resetLocalTimeOut(),this.gameManger.disposeAll(),this.gameManger=null,kt.gameSocket=null}async render(){return`${ln({borderColor:"pink",title:"Game Result",modalId:"gameResultModal",content:`
        <div class="d-flex flex-column justify-content-center align-items-center h-50">
          <div id="crownImage" class="h-25 w-25 text-center d-none">
            <img src="/img/crown.png" class="img-fluid crown-animation" alt="Crown"/>
          </div>
          <div id="gameResult" class="fs-15 w-100 text-center"></div>
          <div id="finalText" class="fs-13 w-100 text-center text-success d-none"></div>
          <div class="w-75 row d-flex align-items-center">
            <div id="modalRedNick" class="text-danger col-10 fs-11 text-break"></div>
            <div id="redScore" class="text-danger col-2 text-end fs-13"></div>
          </div>          
          <div class="w-75 row d-flex align-items-center">
            <div id="modalBlueNick" class="text-primary col-10 fs-11 text-break"></div>
            <div id="blueScore" class="text-primary col-2 text-end fs-13"></div>
          </div>
        </div>
      `,buttonList:["gameResultBtn"]})}
    <div id="gameCanvasContainer" class="position-absolute vh-100 vw-100">
      <canvas id="gameCanvas" tabindex="0" class="vh-100 vw-100"></canvas>
      <div id="gameWaitingText" class="position-absolute w-50 h-25 top-50 start-50 translate-middle fs-15 text-center rounded d-none">
      Waiting for opponent...
      </div>
      <div id="scoreContainer"
           class="position-absolute top-0 start-50 translate-middle-x px-3 w-40 text-white d-flex flex-column align-items-center border border-5 rounded">
        <span class="fs-6">score</span>
        <div class="d-flex w-100 fs-6">
          <span id="player1Nick" class="w-50 d-flex justify-content-center text-danger text-break">RED</span>
          <span id="player2Nick" class="w-50 d-flex justify-content-center text-primary text-break">BLUE</span>
        </div>
        <div class="d-flex w-100 fs-8">
          <span id="player1Score" class="w-50 d-flex justify-content-center text-danger" data-score="0">0</span>
          <span id="player2Score" class="w-50 d-flex justify-content-center text-primary" data-score="0">0</span>
        </div>
      </div>
    </div>
    `}async afterRender(){const t=ye.getOrCreateInstance("#gameResultModal"),e=document.querySelector("#gameResultModal"),n=document.querySelector("#gameResultBtn"),s=document.querySelector("#gameResult"),r=document.querySelector("#finalText"),a=document.querySelector("#crownImage"),o=document.querySelector("#modalRedNick"),l=document.querySelector("#modalBlueNick"),c=document.querySelector("#redScore"),d=document.querySelector("#blueScore"),h=document.querySelector("#gameWaitingText");n.addEventListener("click",async()=>{t.hide()});const f=()=>{const m=this.redScore>this.blueScore?"red":"blue";o.innerText=this.gameEnd?this.redNick:"",l.innerText=this.gameEnd?this.blueNick:"",c.innerText=this.gameEnd?this.redScore:"",d.innerText=this.gameEnd?this.blueScore:"",this.gameEnd?(s.innerText=this.side===m||this.isFinalUser?"You Win!":"You Lose!",this.gameMode==="semi-final"&&this.isFinalUser&&(r.innerText=this.isFinal?`You have
Final Game!`:`The opponent
has left!`,r.classList.remove("d-none")),this.gameMode==="final"&&this.side===m&&(r.innerText="Final Winner!",r.classList.remove("d-none"),a.classList.remove("d-none"))):s.innerText=`Game End!
User Disconnected!`,s.classList.add(this.side==="red"?"text-danger":"text-primary")};e.addEventListener("hidden.bs.modal",async()=>{c.innerText="",d.innerText="",this.gameMode||(qt.replaceState("/game"),await qt.navigateTo("/game")),this.isFinalUser&&this.isFinal&&await qt.navigateTo(`/game/play?final=${this.finalId}&mode=final`)}),this.gameManger=new nM,this.gameMode?(kt.gameSocket.onopen=()=>{const m={type:"access",token:Me.getAccessToken()};kt.gameSocket.send(JSON.stringify(m))},kt.gameSocket.onmessage=m=>{const g=JSON.parse(m.data);switch(g.type){case"start":this.side=g.color,this.gameManger.multiGameSetting(g),this.gameManger.multiGameStart(),kt.gameSocket.send(JSON.stringify({type:"ready"})),qt.showElement(h);break;case"render":this.start||(this.start=!0,qt.hideElement(h)),parseInt(g.ballHit,10)===7?(h.innerText="Scoring...",qt.showElement(h)):qt.hideElement(h),(!this.redNick||!this.blueNick)&&(this.redNick=g.redNick,this.blueNick=g.blueNick,document.getElementById("player1Nick").innerText=this.redNick,document.getElementById("player2Nick").innerText=this.blueNick),this.redScore=g.redScore,this.blueScore=g.blueScore,this.gameManger.multiGameUpdateObjects(g);break;case"result":this.gameEnd=g.winner!=="None",this.gameMode==="semi-final"?(h.innerText="Waiting for other players...",qt.showElement(h)):kt.gameSocket.close(1e3,"Game End");break;case"final":qt.hideElement(h),this.isFinal=g.isFinal,this.isFinalUser=g.isFinalUser===!0,this.isFinal&&this.isFinalUser&&(this.gameEnd=!0),kt.gameSocket.close(1e3,"Game End");break;case"exit":kt.gameSocket.close(1e3,"Opponent Exit");break;case"error":this.gameError=!0,g.message&&(this.gameErrorMsg=g.message),kt.gameSocket.close(1e3,"Game Error");break}},kt.gameSocket.onclose=async()=>{this.gameEnd===!1&&ut.setToast(this.gameError?this.gameErrorMsg:"User Exit"),f(),t.show(),kt.gameSocket=null,qt.replaceState("/game"),await qt.navigateTo("/game")},kt.gameSocket.onerror=()=>{ut.setToast("Game Error! Please try again later"),kt.gameSocket=null}):(this.gameManger.localGameSetting(),this.gameManger.localGameRender(),this.gameManger.localStartRendering())}}const gt=class gt{static async navigateTo(t){t===gt.getPageHistory()?gt.replaceState(t):gt.pushState(t),await gt.render()}static getPathname(){return location.pathname}static pushState(t){history.pushState(null,"",t)}static replaceState(t){history.replaceState(null,"",t)}static getPageHistory(){return sessionStorage.getItem("curPage")||"/"}static setPageHistory(t){sessionStorage.setItem("curPage",t)}static getPageToRender(){return new gt.routes[gt.getPathname()]}static hideElement(t){t.classList.add("d-none")}static showElement(t){t.classList.remove("d-none")}static setGamePageApp(){gt.app.classList.contains("container-fluid")&&(gt.app.className="")}static resetPageApp(){gt.app.classList.contains("container-fluid p-5 min-vh-100 overflow-auto")||(gt.app.classList.add("container-fluid"),gt.app.classList.add("p-5"),gt.app.classList.add("min-vh-100"),gt.app.classList.add("overflow-auto"))}static onRefresh(t){t.preventDefault(),ut.setToast("Refreshing is not allowed here!")}static async render(){const t=gt.getPathname(),e=Me.getLoginStatus();if(!(t in gt.routes))ut.setToast("Page not found! [404]"),gt.replaceState(gt.getPageHistory());else if(t==="/login"&&e){ut.setToast("You are already logged in!");const r=gt.getPageHistory();r==="/login"?gt.replaceState("/"):gt.replaceState(r)}else t!=="/login"&&!e?(ut.setToast("You need to login!"),gt.replaceState("/login")):t==="/game/waiting"?kt.setRoomSocket():gt.setPageHistory(t);document.title="";const n=gt.getPageToRender();gt.getPathname()==="/game/play"?(gt.hideElement(gt.background),gt.hideElement(gt.navBar),gt.setGamePageApp(),window.addEventListener("beforeunload",gt.onRefresh)):gt.getPathname()==="/game/waiting"?(gt.hideElement(gt.navBar),window.addEventListener("beforeunload",gt.onRefresh)):(gt.before&&typeof gt.before.getGameManager=="function"&&gt.before.getGameManager()&&(kt.closeGameSocket(),gt.before.setDisposeAll()),window.removeEventListener("beforeunload",gt.onRefresh),gt.showElement(gt.background),gt.resetPageApp(),gt.getPathname()!=="/login"?gt.showElement(gt.navBar):gt.hideElement(gt.navBar));const s=document.getElementsByClassName("modal-backdrop");Array.prototype.forEach.call(s,r=>{r.remove()}),document.body.className="",document.body.style="",gt.app.innerHTML=await n.render(),await n.afterRender(),gt.before=n}};Xe(gt,"routes",{"/":Kg,"/login":e_,"/profile":r_,"/game":o_,"/game/create":c_,"/game/join":u_,"/game/waiting":f_,"/game/play":iM,"/friends":y_}),Xe(gt,"before",null),Xe(gt,"app",document.getElementById("app")),Xe(gt,"background",document.getElementById("background")),Xe(gt,"navBar",document.getElementById("navBar"));let ho=gt;const qt=ho;var Ji;class zu{static setAccessToken(t){Qr(this,Ji,t),localStorage.setItem("login","true")}static getAccessToken(){return ae(this,Ji)}static deleteAccessToken(){Qr(this,Ji,null),localStorage.removeItem("login")}static getLoginStatus(){return!!localStorage.getItem("login")}static storeToken(t){this.setAccessToken(t),kt.setOnline(),Jt.init()}static clearToken(){this.deleteAccessToken(),kt.setOffline(),Jt.init()}static async reissueAccessToken(){await Jt.post("/login/token/refresh/").then(t=>{this.storeToken(t.access_token)}).catch(t=>{ut.setToast(`${t.message||"You need to login"}`),this.clearToken(),qt.navigateTo("/login")})}static async logout(){await Jt.post("/login/logout/").then(t=>{ut.setToast(t.message||"Logout Successful"),this.clearToken()}).catch(()=>{this.clearToken()})}}Ji=new WeakMap,Qe(zu,Ji,null);const Me=zu,sM=()=>{const i=document.getElementById("bgm"),t=document.getElementById("musicBtn"),e='<img id="musicIcon" src="/icons/volume-up.svg" alt="music-on" width="32" height="32"/>',n='<img id="muteIcon" src="/icons/volume-mute.svg" alt="music-off" width="32" height="32"/>';t.addEventListener("click",()=>{i.paused?(i.play(),t.innerHTML=e):(i.pause(),t.innerHTML=n)})};Jt.init();window.addEventListener("popstate",qt.render);document.addEventListener("DOMContentLoaded",async()=>{(window.location.pathname==="/game/play"||window.location.pathname==="/game/waiting")&&(kt.closeSockets(),await qt.navigateTo("/")),!Me.getAccessToken()&&Me.getLoginStatus()&&await Me.reissueAccessToken();const i=document.getElementsByTagName("a");Array.prototype.forEach.call(i,e=>{e.addEventListener("click",async n=>{n.preventDefault(),await qt.navigateTo(e.pathname)})}),sM(),document.getElementById("logoutBtn").addEventListener("click",async()=>{await Me.logout(),await qt.navigateTo("/login")}),await qt.render()});document.addEventListener("click",i=>{const t=i.target||null,e=document.querySelector(".collapse");e&&!e.contains(t)&&e.classList.remove("show")});Yu();
