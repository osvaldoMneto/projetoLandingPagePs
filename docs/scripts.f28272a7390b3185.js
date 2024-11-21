!function(E,j){"object"==typeof exports&&typeof module<"u"?j(exports):"function"==typeof define&&define.amd?define(["exports"],j):j((E=typeof globalThis<"u"?globalThis:E||self).Popper={})}(this,function(E){"use strict";function j(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function I(e){return e instanceof j(e).Element||e instanceof Element}function k(e){return e instanceof j(e).HTMLElement||e instanceof HTMLElement}function we(e){return!(typeof ShadowRoot>"u")&&(e instanceof j(e).ShadowRoot||e instanceof ShadowRoot)}var Y=Math.max,ue=Math.min,Q=Math.round;function Oe(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function He(){return!/^((?!chrome|android).)*safari/i.test(Oe())}function Z(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var a=e.getBoundingClientRect(),n=1,i=1;t&&k(e)&&(n=e.offsetWidth>0&&Q(a.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Q(a.height)/e.offsetHeight||1);var s=(I(e)?j(e):window).visualViewport,o=!He()&&r,c=(a.left+(o&&s?s.offsetLeft:0))/n,f=(a.top+(o&&s?s.offsetTop:0))/i,h=a.width/n,y=a.height/i;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function xe(e){var t=j(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){return((I(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return Z(q(e)).left+xe(e).scrollLeft}function F(e){return j(e).getComputedStyle(e)}function Ee(e){var t=F(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function wt(e,t,r){void 0===r&&(r=!1);var a=k(t),n=k(t)&&function bt(e){var t=e.getBoundingClientRect(),r=Q(t.width)/e.offsetWidth||1,a=Q(t.height)/e.offsetHeight||1;return 1!==r||1!==a}(t),i=q(t),p=Z(e,n,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(a||!a&&!r)&&(("body"!==V(t)||Ee(i))&&(s=function yt(e){return e!==j(e)&&k(e)?function gt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):xe(e)}(t)),k(t)?((o=Z(t,!0)).x+=t.clientLeft,o.y+=t.clientTop):i&&(o.x=Ae(i))),{x:p.left+s.scrollLeft-o.x,y:p.top+s.scrollTop-o.y,width:p.width,height:p.height}}function Pe(e){var t=Z(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function le(e){return"html"===V(e)?e:e.assignedSlot||e.parentNode||(we(e)?e.host:null)||q(e)}function Ve(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:k(e)&&Ee(e)?e:Ve(le(e))}function ae(e,t){var r;void 0===t&&(t=[]);var a=Ve(e),n=a===(null==(r=e.ownerDocument)?void 0:r.body),i=j(a),p=n?[i].concat(i.visualViewport||[],Ee(a)?a:[]):a,s=t.concat(p);return n?s:s.concat(ae(le(p)))}function Ot(e){return["table","td","th"].indexOf(V(e))>=0}function Ne(e){return k(e)&&"fixed"!==F(e).position?e.offsetParent:null}function ne(e){for(var t=j(e),r=Ne(e);r&&Ot(r)&&"static"===F(r).position;)r=Ne(r);return r&&("html"===V(r)||"body"===V(r)&&"static"===F(r).position)?t:r||function xt(e){var t=/firefox/i.test(Oe());if(/Trident/i.test(Oe())&&k(e)&&"fixed"===F(e).position)return null;var n=le(e);for(we(n)&&(n=n.host);k(n)&&["html","body"].indexOf(V(n))<0;){var i=F(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}var C="top",M="bottom",L="right",T="left",De="auto",ie=[C,M,L,T],_="start",oe="end",At="clippingParents",Fe="viewport",se="popper",Et="reference",qe=ie.reduce(function(e,t){return e.concat([t+"-"+_,t+"-"+oe])},[]),Xe=[].concat(ie,[De]).reduce(function(e,t){return e.concat([t,t+"-"+_,t+"-"+oe])},[]),kt=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Mt(e){var t=new Map,r=new Set,a=[];function n(i){r.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach(function(s){if(!r.has(s)){var o=t.get(s);o&&n(o)}}),a.push(i)}return e.forEach(function(i){t.set(i.name,i)}),e.forEach(function(i){r.has(i.name)||n(i)}),a}function Wt(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ie(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&we(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ye(e,t,r){return t===Fe?je(function Vt(e,t){var r=j(e),a=q(e),n=r.visualViewport,i=a.clientWidth,p=a.clientHeight,s=0,o=0;if(n){i=n.width,p=n.height;var c=He();(c||!c&&"fixed"===t)&&(s=n.offsetLeft,o=n.offsetTop)}return{width:i,height:p,x:s+Ae(e),y:o}}(e,r)):I(t)?function Ft(e,t){var r=Z(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):je(function Nt(e){var t,r=q(e),a=xe(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=Y(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Y(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-a.scrollLeft+Ae(e),o=-a.scrollTop;return"rtl"===F(n||r).direction&&(s+=Y(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:p,x:s,y:o}}(q(e)))}function N(e){return e.split("-")[0]}function ee(e){return e.split("-")[1]}function Re(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ze(e){var o,t=e.reference,r=e.element,a=e.placement,n=a?N(a):null,i=a?ee(a):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2;switch(n){case C:o={x:p,y:t.y-r.height};break;case M:o={x:p,y:t.y+t.height};break;case L:o={x:t.x+t.width,y:s};break;case T:o={x:t.x-r.width,y:s};break;default:o={x:t.x,y:t.y}}var c=n?Re(n):null;if(null!=c){var f="y"===c?"height":"width";switch(i){case _:o[c]=o[c]-(t[f]/2-r[f]/2);break;case oe:o[c]=o[c]+(t[f]/2-r[f]/2)}}return o}function Ge(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Je(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}function te(e,t){void 0===t&&(t={});var a=t.placement,n=void 0===a?e.placement:a,i=t.strategy,p=void 0===i?e.strategy:i,s=t.boundary,o=void 0===s?At:s,c=t.rootBoundary,f=void 0===c?Fe:c,h=t.elementContext,y=void 0===h?se:h,u=t.altBoundary,w=void 0!==u&&u,d=t.padding,v=void 0===d?0:d,b=Ge("number"!=typeof v?v:Je(v,ie)),A=e.rects.popper,l=e.elements[w?y===se?Et:se:y],m=function Xt(e,t,r,a){var n="clippingParents"===t?function qt(e){var t=ae(le(e)),a=["absolute","fixed"].indexOf(F(e).position)>=0&&k(e)?ne(e):e;return I(a)?t.filter(function(n){return I(n)&&Ie(n,a)&&"body"!==V(n)}):[]}(e):[].concat(t),i=[].concat(n,[r]),s=i.reduce(function(o,c){var f=Ye(e,c,a);return o.top=Y(f.top,o.top),o.right=ue(f.right,o.right),o.bottom=ue(f.bottom,o.bottom),o.left=Y(f.left,o.left),o},Ye(e,i[0],a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(I(l)?l:l.contextElement||q(e.elements.popper),o,f,p),g=Z(e.elements.reference),O=ze({reference:g,element:A,strategy:"absolute",placement:n}),R=je(Object.assign({},A,O)),D=y===se?R:g,P={top:m.top-D.top+b.top,bottom:D.bottom-m.bottom+b.bottom,left:m.left-D.left+b.left,right:D.right-m.right+b.right},$=e.modifiersData.offset;if(y===se&&$){var W=$[n];Object.keys(P).forEach(function(B){var z=[L,M].indexOf(B)>=0?1:-1,U=[C,M].indexOf(B)>=0?"y":"x";P[B]+=W[U]*z})}return P}var Ke={placement:"bottom",modifiers:[],strategy:"absolute"};function Qe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&"function"==typeof a.getBoundingClientRect)})}function $e(e){void 0===e&&(e={});var r=e.defaultModifiers,a=void 0===r?[]:r,n=e.defaultOptions,i=void 0===n?Ke:n;return function(s,o,c){void 0===c&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ke,i),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},h=[],y=!1,u={state:f,setOptions:function(b){var x="function"==typeof b?b(f.options):b;d(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:I(s)?ae(s):s.contextElement?ae(s.contextElement):[],popper:ae(o)};var A=function Lt(e){var t=Mt(e);return kt.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}(function Ht(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(a,f.options.modifiers)));return f.orderedModifiers=A.filter(function(l){return l.enabled}),function w(){f.orderedModifiers.forEach(function(v){var x=v.options,l=v.effect;if("function"==typeof l){var m=l({state:f,name:v.name,instance:u,options:void 0===x?{}:x});h.push(m||function(){})}})}(),u.update()},forceUpdate:function(){if(!y){var b=f.elements,x=b.reference,A=b.popper;if(Qe(x,A)){f.rects={reference:wt(x,ne(A),"fixed"===f.options.strategy),popper:Pe(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(P){return f.modifiersData[P.name]=Object.assign({},P.data)});for(var l=0;l<f.orderedModifiers.length;l++)if(!0!==f.reset){var m=f.orderedModifiers[l],g=m.fn,O=m.options;"function"==typeof g&&(f=g({state:f,options:void 0===O?{}:O,name:m.name,instance:u})||f)}else f.reset=!1,l=-1}}},update:Wt(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){d(),y=!0}};if(!Qe(s,o))return u;function d(){h.forEach(function(v){return v()}),h=[]}return u.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)}),u}}var ve={passive:!0},Be={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function It(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,i=void 0===n||n,p=a.resize,s=void 0===p||p,o=j(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",r.update,ve)}),s&&o.addEventListener("resize",r.update,ve),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ve)}),s&&o.removeEventListener("resize",r.update,ve)}},data:{}},Ce={name:"popperOffsets",enabled:!0,phase:"read",fn:function Yt(e){var t=e.state;t.modifiersData[e.name]=ze({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ze(e){var t,r=e.popper,a=e.popperRect,n=e.placement,i=e.variation,p=e.offsets,s=e.position,o=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=p.x,u=void 0===y?0:y,w=p.y,d=void 0===w?0:w,v="function"==typeof f?f({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=p.hasOwnProperty("x"),x=p.hasOwnProperty("y"),A=T,l=C,m=window;if(c){var g=ne(r),O="clientHeight",R="clientWidth";g===j(r)&&"static"!==F(g=q(r)).position&&"absolute"===s&&(O="scrollHeight",R="scrollWidth"),(n===C||(n===T||n===L)&&i===oe)&&(l=M,d-=(h&&g===m&&m.visualViewport?m.visualViewport.height:g[O])-a.height,d*=o?1:-1),n!==T&&(n!==C&&n!==M||i!==oe)||(A=L,u-=(h&&g===m&&m.visualViewport?m.visualViewport.width:g[R])-a.width,u*=o?1:-1)}var B,$=Object.assign({position:s},c&&zt),W=!0===f?function Ut(e,t){var a=e.y,n=t.devicePixelRatio||1;return{x:Q(e.x*n)/n||0,y:Q(a*n)/n||0}}({x:u,y:d},j(r)):{x:u,y:d};return u=W.x,d=W.y,Object.assign({},$,o?((B={})[l]=x?"0":"",B[A]=b?"0":"",B.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",B):((t={})[l]=x?d+"px":"",t[A]=b?u+"px":"",t.transform="",t))}var Te={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Gt(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=void 0===a||a,i=r.adaptive,p=void 0===i||i,s=r.roundOffsets,o=void 0===s||s,c={placement:N(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ze(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ze(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Se={name:"applyStyles",enabled:!0,phase:"write",fn:function Jt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!k(i)||!V(i)||(Object.assign(i.style,a),Object.keys(n).forEach(function(p){var s=n[p];!1===s?i.removeAttribute(p):i.setAttribute(p,!0===s?"":s)}))})},effect:function Kt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],i=t.attributes[a]||{},s=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]).reduce(function(o,c){return o[c]="",o},{});!k(n)||!V(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(o){n.removeAttribute(o)}))})}},requires:["computeStyles"]},_e={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Zt(e){var t=e.state,a=e.name,n=e.options.offset,i=void 0===n?[0,0]:n,p=Xe.reduce(function(f,h){return f[h]=function Qt(e,t,r){var a=N(e),n=[T,C].indexOf(a)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*n,[T,L].indexOf(a)>=0?{x:s,y:p}:{x:p,y:s}}(h,t.rects,i),f},{}),s=p[t.placement],c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s.x,t.modifiersData.popperOffsets.y+=c),t.modifiersData[a]=p}},_t={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,function(t){return _t[t]})}var er={start:"end",end:"start"};function et(e){return e.replace(/start|end/g,function(t){return er[t]})}var tt={name:"flip",enabled:!0,phase:"main",fn:function ar(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0===p||p,o=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=void 0===u||u,d=r.allowedAutoPlacements,v=t.options.placement,b=N(v),A=o||(b!==v&&w?function rr(e){if(N(e)===De)return[];var t=de(e);return[et(e),t,et(t)]}(v):[de(v)]),l=[v].concat(A).reduce(function(re,X){return re.concat(N(X)===De?function tr(e,t){void 0===t&&(t={});var n=t.boundary,i=t.rootBoundary,p=t.padding,s=t.flipVariations,o=t.allowedAutoPlacements,c=void 0===o?Xe:o,f=ee(t.placement),h=f?s?qe:qe.filter(function(w){return ee(w)===f}):ie,y=h.filter(function(w){return c.indexOf(w)>=0});0===y.length&&(y=h);var u=y.reduce(function(w,d){return w[d]=te(e,{placement:d,boundary:n,rootBoundary:i,padding:p})[N(d)],w},{});return Object.keys(u).sort(function(w,d){return u[w]-u[d]})}(t,{placement:X,boundary:f,rootBoundary:h,padding:c,flipVariations:w,allowedAutoPlacements:d}):X)},[]),m=t.rects.reference,g=t.rects.popper,O=new Map,R=!0,D=l[0],P=0;P<l.length;P++){var $=l[P],W=N($),B=ee($)===_,z=[C,M].indexOf(W)>=0,U=z?"width":"height",S=te(t,{placement:$,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),H=z?B?L:T:B?M:C;m[U]>g[U]&&(H=de(H));var he=de(H),G=[];if(i&&G.push(S[W]<=0),s&&G.push(S[H]<=0,S[he]<=0),G.every(function(re){return re})){D=$,R=!1;break}O.set($,G)}if(R)for(var ke=function(X){var ce=l.find(function(ye){var J=O.get(ye);if(J)return J.slice(0,X).every(function(Me){return Me})});if(ce)return D=ce,"break"},pe=w?3:1;pe>0&&"break"!==ke(pe);pe--);t.placement!==D&&(t.modifiersData[a]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function fe(e,t,r){return Y(e,ue(t,r))}var rt={name:"preventOverflow",enabled:!0,phase:"main",fn:function or(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0!==p&&p,y=r.tether,u=void 0===y||y,w=r.tetherOffset,d=void 0===w?0:w,v=te(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),b=N(t.placement),x=ee(t.placement),A=!x,l=Re(b),m=function nr(e){return"x"===e?"y":"x"}(l),g=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,D="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,P="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(g){if(i){var B,z="y"===l?C:T,U="y"===l?M:L,S="y"===l?"height":"width",H=g[l],he=H+v[z],G=H-v[U],me=u?-R[S]/2:0,ke=x===_?O[S]:R[S],pe=x===_?-R[S]:-O[S],ge=t.elements.arrow,re=u&&ge?Pe(ge):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ce=X[z],ye=X[U],J=fe(0,O[S],re[S]),Me=A?O[S]/2-me-J-ce-P.mainAxis:ke-J-ce-P.mainAxis,dr=A?-O[S]/2+me+J+ye+P.mainAxis:pe+J+ye+P.mainAxis,Le=t.elements.arrow&&ne(t.elements.arrow),ft=null!=(B=$?.[l])?B:0,gr=H+dr-ft,pt=fe(u?ue(he,H+Me-ft-(Le?"y"===l?Le.clientTop||0:Le.clientLeft||0:0)):he,H,u?Y(G,gr):G);g[l]=pt,W[l]=pt-H}if(s){var ct,K=g[m],be="y"===m?"height":"width",ut=K+v["x"===l?C:T],lt=K-v["x"===l?M:L],We=-1!==[C,T].indexOf(b),vt=null!=(ct=$?.[m])?ct:0,dt=We?ut:K-O[be]-R[be]-vt+P.altAxis,ht=We?K+O[be]+R[be]-vt-P.altAxis:lt,mt=u&&We?function ir(e,t,r){var a=fe(e,t,r);return a>r?r:a}(dt,K,ht):fe(u?dt:ut,K,u?ht:lt);g[m]=mt,W[m]=mt-K}t.modifiersData[a]=W}},requiresIfExists:["offset"]},at={name:"arrow",enabled:!0,phase:"main",fn:function fr(e){var t,r=e.state,a=e.name,n=e.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=N(r.placement),o=Re(s),f=[T,L].indexOf(s)>=0?"height":"width";if(i&&p){var h=function(t,r){return Ge("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:Je(t,ie))}(n.padding,r),y=Pe(i),u="y"===o?C:T,w="y"===o?M:L,d=r.rects.reference[f]+r.rects.reference[o]-p[o]-r.rects.popper[f],v=p[o]-r.rects.reference[o],b=ne(i),x=b?"y"===o?b.clientHeight||0:b.clientWidth||0:0,g=x/2-y[f]/2+(d/2-v/2),O=fe(h[u],g,x-y[f]-h[w]);r.modifiersData[a]=((t={})[o]=O,t.centerOffset=O-g,t)}},effect:function pr(e){var t=e.state,a=e.options.element,n=void 0===a?"[data-popper-arrow]":a;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||Ie(t.elements.popper,n)&&(t.elements.arrow=n))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function nt(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function it(e){return[C,L,M,T].some(function(t){return e[t]>=0})}var ot={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function cr(e){var t=e.state,r=e.name,a=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,p=te(t,{elementContext:"reference"}),s=te(t,{altBoundary:!0}),o=nt(p,a),c=nt(s,n,i),f=it(o),h=it(c);t.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}},lr=$e({defaultModifiers:[Be,Ce,Te,Se]}),st=[Be,Ce,Te,Se,_e,tt,rt,at,ot],vr=$e({defaultModifiers:st});E.applyStyles=Se,E.arrow=at,E.computeStyles=Te,E.createPopper=vr,E.createPopperLite=lr,E.defaultModifiers=st,E.detectOverflow=te,E.eventListeners=Be,E.flip=tt,E.hide=ot,E.offset=_e,E.popperGenerator=$e,E.popperOffsets=Ce,E.preventOverflow=rt,Object.defineProperty(E,"__esModule",{value:!0})});