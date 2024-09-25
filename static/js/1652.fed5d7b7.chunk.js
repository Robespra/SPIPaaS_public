"use strict";(self.webpackChunksp_ipaasv18_0_4=self.webpackChunksp_ipaasv18_0_4||[]).push([[1652],{23240:(e,n,r)=>{r.d(n,{A:()=>s});var o=r(65043),t=r(36723),a=r(59109),i=Math.pow(2,31)-1;function l(e,n,r){var o=r-Date.now();e.current=o<=i?setTimeout(n,o):setTimeout((function(){return l(e,n,r)}),i)}function s(){var e=(0,t.A)(),n=(0,o.useRef)();return(0,a.A)((function(){return clearTimeout(n.current)})),(0,o.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(o,t){void 0===t&&(t=0),e()&&(r(),t<=i?n.current=setTimeout(o,t):l(n,o,Date.now()+t))},clear:r}}),[])}},33044:(e,n,r)=>{r.d(n,{A:()=>P});var o=r(58168),t=r(98587),a=r(64600),i=r.n(a),l=r(65043),s=r(67852),c=r(3343),p=r(4488),u=r(14785),f=l.forwardRef((function(e,n){var r=e.bsPrefix,a=e.className,c=e.variant,p=e.as,u=void 0===p?"img":p,f=(0,t.A)(e,["bsPrefix","className","variant","as"]),d=(0,s.oU)(r,"card-img");return l.createElement(u,(0,o.A)({ref:n,className:i()(c?d+"-"+c:d,a)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};const d=f;var m=(0,p.A)("h5"),v=(0,p.A)("h6"),h=(0,c.A)("card-body"),A=(0,c.A)("card-title",{Component:m}),w=(0,c.A)("card-subtitle",{Component:v}),g=(0,c.A)("card-link",{Component:"a"}),y=(0,c.A)("card-text",{Component:"p"}),E=(0,c.A)("card-header"),b=(0,c.A)("card-footer"),C=(0,c.A)("card-img-overlay"),x=l.forwardRef((function(e,n){var r=e.bsPrefix,a=e.className,c=e.bg,p=e.text,f=e.border,d=e.body,m=e.children,v=e.as,A=void 0===v?"div":v,w=(0,t.A)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=(0,s.oU)(r,"card"),y=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.createElement(u.A.Provider,{value:y},l.createElement(A,(0,o.A)({ref:n},w,{className:i()(a,g,c&&"bg-"+c,p&&"text-"+p,f&&"border-"+f)}),d?l.createElement(h,null,m):m))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=d,x.Title=A,x.Subtitle=w,x.Body=h,x.Link=g,x.Text=y,x.Header=E,x.Footer=b,x.ImgOverlay=C;const P=x},18072:(e,n,r)=>{r.d(n,{A:()=>m});var o,t=r(58168),a=r(98587),i=r(64600),l=r.n(i),s=r(67813),c=r(65043),p=r(34140),u=r(92643),f=((o={})[p.ns]="show",o[p._K]="show",o),d=c.forwardRef((function(e,n){var r=e.className,o=e.children,i=(0,a.A)(e,["className","children"]),d=(0,c.useCallback)((function(e){(0,u.A)(e),i.onEnter&&i.onEnter(e)}),[i]);return c.createElement(p.Ay,(0,t.A)({ref:n,addEndListener:s.A},i,{onEnter:d}),(function(e,n){return c.cloneElement(o,(0,t.A)({},n,{className:l()("fade",r,o.props.className,f[e])}))}))}));d.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},d.displayName="Fade";const m=d},38867:(e,n,r)=>{r.d(n,{A:()=>D});var o=r(58168),t=r(98587),a=r(77387);var i=r(65043),l=r(23240),s=r(29905),c=(r(96440),r(19837)),p=r(64600),u=r.n(p),f=r(65173),d=r.n(f),m=r(97950),v=r(92667),h=r(38293),A=r(27840),w=r(20614),g=r(967),y=r(76115),E=r(98577),b=i.forwardRef((function(e,n){var r=e.flip,a=e.offset,l=e.placement,s=e.containerPadding,c=void 0===s?5:s,p=e.popperConfig,u=void 0===p?{}:p,f=e.transition,d=(0,v.A)(),A=d[0],b=d[1],C=(0,v.A)(),x=C[0],P=C[1],N=(0,h.A)(b,n),k=(0,y.A)(e.container),T=(0,y.A)(e.target),_=(0,i.useState)(!e.show),O=_[0],R=_[1],D=(0,w.A)(T,A,(0,E.Ay)({placement:l,enableEvents:!!e.show,containerPadding:c||5,flip:r,offset:a,arrowElement:x,popperConfig:u})),H=D.styles,U=D.attributes,B=(0,t.A)(D,["styles","attributes"]);e.show?O&&R(!1):e.transition||O||R(!0);var F=e.show||f&&!O;if((0,g.A)(A,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!F)return null;var M=e.children((0,o.A)({},B,{show:!!e.show,props:(0,o.A)({},U.popper,{style:H.popper,ref:N}),arrowProps:(0,o.A)({},U.arrow,{style:H.arrow,ref:P})}));if(f){var S=e.onExit,j=e.onExiting,I=e.onEnter,q=e.onEntering,L=e.onEntered;M=i.createElement(f,{in:e.show,appear:!0,onExit:S,onExiting:j,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:I,onEntering:q,onEntered:L},M)}return k?m.createPortal(M,k):null}));b.displayName="Overlay",b.propTypes={show:d().bool,placement:d().oneOf(A.D),target:d().any,container:d().any,flip:d().bool,children:d().func.isRequired,containerPadding:d().number,popperConfig:d().object,rootClose:d().bool,rootCloseEvent:d().oneOf(["click","mousedown"]),rootCloseDisabled:d().bool,onHide:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var t;return e.rootClose?(t=d().func).isRequired.apply(t,[e].concat(r)):d().func.apply(d(),[e].concat(r))},transition:d().elementType,onEnter:d().func,onEntering:d().func,onEntered:d().func,onExit:d().func,onExiting:d().func,onExited:d().func};const C=b;var x=r(29516),P=r(18072),N={transition:P.A,rootClose:!1,show:!1,placement:"top"};function k(e){var n=e.children,r=e.transition,a=e.popperConfig,l=void 0===a?{}:a,c=(0,t.A)(e,["children","transition","popperConfig"]),p=(0,i.useRef)({}),f=(0,x.A)(),d=f[0],m=f[1],v=!0===r?P.A:r||null;return i.createElement(C,(0,o.A)({},c,{ref:d,popperConfig:(0,o.A)({},l,{modifiers:m.concat(l.modifiers||[])}),transition:v}),(function(e){var a,l=e.props,c=e.arrowProps,f=e.show,d=e.update,m=(e.forceUpdate,e.placement),v=e.state,h=(0,t.A)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,n){var r=e.ref,o=n.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,s.A)(e))}),n.ref=o.__wrapped||(o.__wrapped=function(e){return o((0,s.A)(e))})}(l,c);var A=Object.assign(p.current,{state:v,scheduleUpdate:d,placement:m,outOfBoundaries:(null==v||null==(a=v.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof n?n((0,o.A)({},h,{},l,{placement:m,show:f,popper:A,arrowProps:c})):i.cloneElement(n,(0,o.A)({},h,{},l,{placement:m,arrowProps:c,popper:A,className:u()(n.props.className,!r&&f&&"show"),style:(0,o.A)({},n.props.style,{},l.style)}))}))}k.defaultProps=N;const T=k;var _=function(e){function n(){return e.apply(this,arguments)||this}return(0,a.A)(n,e),n.prototype.render=function(){return this.props.children},n}(i.Component);function O(e,n,r){var o,t,a=n[0],i=a.currentTarget,l=a.relatedTarget||a.nativeEvent[r];l&&l===i||(t=l,(o=i).contains?o.contains(t):o.compareDocumentPosition?o===t||16&o.compareDocumentPosition(t):void 0)||e.apply(void 0,n)}function R(e){var n=e.trigger,r=e.overlay,a=e.children,p=e.popperConfig,u=void 0===p?{}:p,f=e.show,d=e.defaultShow,m=void 0!==d&&d,v=e.onToggle,h=e.delay,A=e.placement,w=e.flip,g=void 0===w?A&&-1!==A.indexOf("auto"):w,y=(0,t.A)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),E=(0,i.useRef)(null),b=(0,l.A)(),C=(0,i.useRef)(""),x=(0,c.iC)(f,m,v),P=x[0],N=x[1],k=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(h),R="function"!==typeof a?i.Children.only(a).props:{},D=R.onFocus,H=R.onBlur,U=R.onClick,B=(0,i.useCallback)((function(){return(0,s.A)(E.current)}),[]),F=(0,i.useCallback)((function(){b.clear(),C.current="show",k.show?b.set((function(){"show"===C.current&&N(!0)}),k.show):N(!0)}),[k.show,N,b]),M=(0,i.useCallback)((function(){b.clear(),C.current="hide",k.hide?b.set((function(){"hide"===C.current&&N(!1)}),k.hide):N(!1)}),[k.hide,N,b]),S=(0,i.useCallback)((function(){F();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==D||D.apply(void 0,n)}),[F,D]),j=(0,i.useCallback)((function(){M();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==H||H.apply(void 0,n)}),[M,H]),I=(0,i.useCallback)((function(){N(!P),U&&U.apply(void 0,arguments)}),[U,N,P]),q=(0,i.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];O(F,n,"fromElement")}),[F]),L=(0,i.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];O(M,n,"toElement")}),[M]),K=null==n?[]:[].concat(n),z={};return-1!==K.indexOf("click")&&(z.onClick=I),-1!==K.indexOf("focus")&&(z.onFocus=S,z.onBlur=j),-1!==K.indexOf("hover")&&(z.onMouseOver=q,z.onMouseOut=L),i.createElement(i.Fragment,null,"function"===typeof a?a((0,o.A)({},z,{ref:E})):i.createElement(_,{ref:E},(0,i.cloneElement)(a,z)),i.createElement(T,(0,o.A)({},y,{show:P,onHide:M,flip:g,placement:A,popperConfig:u,target:B}),r))}R.defaultProps={defaultShow:!1,trigger:["hover","focus"]};const D=R},10615:(e,n,r)=>{r.d(n,{A:()=>p});var o=r(58168),t=r(98587),a=r(64600),i=r.n(a),l=r(65043),s=(r(48890),r(67852)),c=l.forwardRef((function(e,n){var r=e.bsPrefix,a=e.placement,c=e.className,p=e.style,u=e.children,f=e.arrowProps,d=(e.popper,e.show,(0,t.A)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));r=(0,s.oU)(r,"tooltip");var m=((null==a?void 0:a.split("-"))||[])[0];return l.createElement("div",(0,o.A)({ref:n,style:p,role:"tooltip","x-placement":m,className:i()(c,r,"bs-tooltip-"+m)},d),l.createElement("div",(0,o.A)({className:"arrow"},f)),l.createElement("div",{className:r+"-inner"},u))}));c.defaultProps={placement:"right"},c.displayName="Tooltip";const p=c},4488:(e,n,r)=>{r.d(n,{A:()=>l});var o=r(58168),t=r(65043),a=r(64600),i=r.n(a);const l=function(e){return t.forwardRef((function(n,r){return t.createElement("div",(0,o.A)({},n,{ref:r,className:i()(n.className,e)}))}))}}}]);
//# sourceMappingURL=1652.fed5d7b7.chunk.js.map