(self.webpackChunksp_ipaasv18_0_4=self.webpackChunksp_ipaasv18_0_4||[]).push([[5734],{33044:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(58168),a=n(98587),o=n(64600),i=n.n(o),s=n(65043),u=n(67852),l=n(3343),c=n(4488),f=n(14785),p=s.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.variant,c=e.as,f=void 0===c?"img":c,p=(0,a.A)(e,["bsPrefix","className","variant","as"]),h=(0,u.oU)(n,"card-img");return s.createElement(f,(0,r.A)({ref:t,className:i()(l?h+"-"+l:h,o)},p))}));p.displayName="CardImg",p.defaultProps={variant:null};const h=p;var d=(0,c.A)("h5"),m=(0,c.A)("h6"),v=(0,l.A)("card-body"),g=(0,l.A)("card-title",{Component:d}),k=(0,l.A)("card-subtitle",{Component:m}),y=(0,l.A)("card-link",{Component:"a"}),S=(0,l.A)("card-text",{Component:"p"}),w=(0,l.A)("card-header"),b=(0,l.A)("card-footer"),O=(0,l.A)("card-img-overlay"),C=s.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.bg,c=e.text,p=e.border,h=e.body,d=e.children,m=e.as,g=void 0===m?"div":m,k=(0,a.A)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,u.oU)(n,"card"),S=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.createElement(f.A.Provider,{value:S},s.createElement(g,(0,r.A)({ref:t},k,{className:i()(o,y,l&&"bg-"+l,c&&"text-"+c,p&&"border-"+p)}),h?s.createElement(v,null,d):d))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=h,C.Title=g,C.Subtitle=k,C.Body=v,C.Link=y,C.Text=S,C.Header=w,C.Footer=b,C.ImgOverlay=O;const x=C},4488:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(58168),a=n(65043),o=n(64600),i=n.n(o);const s=function(e){return a.forwardRef((function(t,n){return a.createElement("div",(0,r.A)({},t,{ref:n,className:i()(t.className,e)}))}))}},14457:(e,t,n)=>{e.exports=n(94085)},94085:(e,t,n)=>{"use strict";var r,a=(r=n(65043))&&"object"==typeof r&&"default"in r?r.default:r,o=n(97950);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var a=n[r],o=Object.getOwnPropertyDescriptor(t,a);o&&o.configurable&&void 0===e[a]&&Object.defineProperty(e,a,o)}}(e.prototype.constructor=e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,t,n,r,a,o,i,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,s],c=0;(u=new Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}var f={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,t,n){var r="",a="",o=null,i=[];if(void 0===t&&(t="_"),null==n&&(n=f),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!n[e]?(i.push(r.length),r.length===i.length-1&&(a+=e)):o=r.length+1,r+=e,!1)})),{maskChar:t,formatChars:n,prefix:a,mask:r,lastEditablePosition:o,permanents:i}}function h(e,t){return-1!==e.permanents.indexOf(t)}function d(e,t,n){var r=e.mask,a=e.formatChars;if(!n)return!1;if(h(e,t))return r[t]===n;var o=a[r[t]];return new RegExp(o).test(n)}function m(e,t){return t.split("").every((function(t,n){return h(e,n)||!d(e,n,t)}))}function v(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&h(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var a=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!h(e,o)&&d(e,o,i)){a=o+1;break}}return a}function g(e,t){return v(e,t)===e.mask.length}function k(e,t){var n=e.maskChar,r=e.mask,a=e.prefix;if(!n){for((t=y(e,"",t,0)).length<a.length&&(t=a);t.length<r.length&&h(e,t.length);)t+=r[t.length];return t}if(t)return y(e,k(e,""),t,0);for(var o=0;o<r.length;o++)h(e,o)?t+=r[o]:t+=n;return t}function y(e,t,n,r){var a=e.mask,o=e.maskChar,i=e.prefix,s=n.split(""),u=g(e,t);return!o&&r>t.length&&(t+=a.slice(t.length,r)),s.every((function(n){for(;c=n,h(e,l=r)&&c!==a[l];){if(r>=t.length&&(t+=a[r]),s=n,o&&h(e,r)&&s===o)return!0;if(++r>=a.length)return!1}var s,l,c;return!d(e,r,n)&&n!==o||(r<t.length?t=o||u||r<i.length?t.slice(0,r)+n+t.slice(r+1):(t=t.slice(0,r)+n+t.slice(r),k(e,t)):o||(t+=n),++r<a.length)})),t}function S(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!h(e,r))return r;return null}function w(e){return e||0===e?e+"":""}function b(e,t,n,r,a){var o=e.mask,i=e.prefix,s=e.lastEditablePosition,u=t,l="",c=0,f=0,p=Math.min(a.start,n.start);return n.end>a.start?f=(c=function(e,t,n,r){var a=e.mask,o=e.maskChar,i=n.split(""),s=r;return i.every((function(t){for(;i=t,h(e,n=r)&&i!==a[n];)if(++r>=a.length)return!1;var n,i;return(d(e,r,t)||t===o)&&r++,r<a.length})),r-s}(e,0,l=u.slice(a.start,n.end),p))?a.length:0:u.length<r.length&&(f=r.length-u.length),u=r,f&&(1!==f||a.length||(p=a.start===n.start?S(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!h(e,n))return n;return null}(e,n.start)),u=function(e,t,n,r){var a=n+r,o=e.maskChar,i=e.mask,s=e.prefix,u=t.split("");if(o)return u.map((function(t,r){return r<n||a<=r?t:h(e,r)?i[r]:o})).join("");for(var l=a;l<u.length;l++)h(e,l)&&(u[l]="");return n=Math.max(s.length,n),u.splice(n,a-n),t=u.join(""),k(e,t)}(e,u,p,f)),u=y(e,u,l,p),(p+=c)>=o.length?p=o.length:p<i.length&&!c?p=i.length:p>=i.length&&p<s&&c&&(p=S(e,p)),l||(l=null),{value:u=k(e,u),enteredString:l,selection:{start:p,end:p}}}function O(e){return"function"==typeof e}function C(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function x(e){return(C()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function P(e){(C()||clearTimeout)(e)}var D=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=x(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(P(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=o.findDOMNode(u(u(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=v(n.maskOptions,n.value),t=S(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,r){void 0===r&&(r={});var a=n.getInputDOMNode(),o=n.isFocused();a&&o&&(r.deferred||c(a,e,t),null!==n.selectionDeferId&&P(n.selectionDeferId),n.selectionDeferId=x((function(){n.selectionDeferId=null,c(a,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,r=e.maskChar,a=e.permanents,o=e.formatChars;return{mask:t,maskChar:r,permanents:a,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:o}},n.isInputAutofilled=function(e,t,r,a){var o=n.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(l){}return!n.focused||a.end<r.length&&t.end===e.length},n.onChange=function(e){var t=u(u(n)).beforePasteState,r=u(u(n)).previousSelection,a=n.props.beforeMaskedValueChange,o=n.getInputValue(),i=n.value,s=n.getSelection();n.isInputAutofilled(o,s,i,r)&&(i=k(n.maskOptions,""),r={start:0,end:0,length:0}),t&&(r=t.selection,i=t.value,s={start:r.start+o.length,end:r.start+o.length,length:0},o=i.slice(0,r.start)+o+i.slice(r.end),n.beforePasteState=null);var l=b(n.maskOptions,o,s,i,r),c=l.enteredString,f=l.selection,p=l.value;if(O(a)){var h=a({value:p,selection:f},{value:i,selection:r},c,n.getBeforeMaskedValueChangeConfig());p=h.value,f=h.selection}n.setInputValue(p),O(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(f.start,f.end,{deferred:!0}):n.setSelection(f.start,f.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,r=n.maskOptions,a=r.mask,o=r.prefix;if(n.focused=!0,n.mounted=!0,a){if(n.value)v(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var i=k(n.maskOptions,o),s=k(n.maskOptions,i),u=v(n.maskOptions,s),l=S(n.maskOptions,u),c={start:l,end:l};if(O(t)){var f=t({value:s,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());s=f.value,c=f.selection}var p=s!==n.getInputValue();p&&n.setInputValue(s),p&&O(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}O(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,r=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,r&&!n.props.alwaysShowMask&&m(n.maskOptions,n.value)){var a="";O(t)&&(a=t({value:a,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var o=a!==n.getInputValue();o&&n.setInputValue(a),o&&O(n.props.onChange)&&n.props.onChange(e)}O(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var r=Math.abs(t.clientX-n.mouseDownX),a=Math.abs(t.clientY-n.mouseDownY),o=Math.max(r,a),i=(new Date).getTime()-n.mouseDownTime;(o<=10&&i<=200||o<=5&&i<=300)&&n.setCursorToEnd()}}))}O(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){O(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&O(n.props.inputRef)&&n.props.inputRef(e)};var r=t.mask,a=t.maskChar,i=t.formatChars,s=t.alwaysShowMask,l=t.beforeMaskedValueChange,f=t.defaultValue,h=t.value;n.maskOptions=p(r,a,i),null==f&&(f=""),null==h&&(h=f);var d=w(h);if(n.maskOptions.mask&&(s||d)&&(d=k(n.maskOptions,d),O(l))){var g=t.value;null==t.value&&(g=f),d=l({value:d,selection:null},{value:g=w(g),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=d,n}s(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,r=t.alwaysShowMask,a=t.mask,o=t.maskChar,i=t.formatChars,s=this.maskOptions,u=r||this.isFocused(),l=null!=this.props.value,c=l?w(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(a,o,i),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||l||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||u))&&(c=k(this.maskOptions,c)),h){var d=v(this.maskOptions,c);(null===f||d<f)&&(f=g(this.maskOptions,c)?d:S(this.maskOptions,d))}!this.maskOptions.mask||!m(this.maskOptions,c)||u||l&&this.props.value||(c="");var y={start:f,end:f};if(O(n)){var b=n({value:c,selection:y},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=b.value,y=b.selection}this.value=c;var C=this.getInputValue()!==this.value;C?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var x=!1;null!=y.start&&null!=y.end&&(x=!e||e.start!==y.start||e.end!==y.end),(x||C)&&this.setSelection(y.start,y.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&P(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){O(n)||l(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=i({},r);o.forEach((function(e){return delete s[e]})),e=n(s),o.filter((function(t){return null!=e.props[t]&&e.props[t]!==r[t]})).length&&l(!1)}else e=a.createElement("input",i({ref:this.handleRef},r));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=r.value&&(u.value=this.value)),e=a.cloneElement(e,u)},t}(a.Component);e.exports=D},89577:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(65043);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){}function c(){}c.resetWarningCache=l;var f,p,h=(f=function(e){e.exports=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:l};return n.PropTypes=n,n}()},f(p={exports:{}},p.exports),p.exports);function d(){}function m(e){return!!(e||"").match(/\d/)}function v(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function g(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="-"===e[0],r=n&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNagation:n,addNegation:r}}function k(e,t,n){for(var r="",a=n?"0":"",o=0;o<=t-1;o++)r+=e[o]||a;return r}function y(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function S(e,t,n){return Math.min(Math.max(e,t),n)}function w(e){return Math.max(e.selectionStart,e.selectionEnd)}var b={thousandSeparator:h.oneOfType([h.string,h.oneOf([!0])]),decimalSeparator:h.string,allowedDecimalSeparators:h.arrayOf(h.string),thousandsGroupStyle:h.oneOf(["thousand","lakh","wan"]),decimalScale:h.number,fixedDecimalScale:h.bool,displayType:h.oneOf(["input","text"]),prefix:h.string,suffix:h.string,format:h.oneOfType([h.string,h.func]),removeFormatting:h.func,mask:h.oneOfType([h.string,h.arrayOf(h.string)]),value:h.oneOfType([h.number,h.string]),defaultValue:h.oneOfType([h.number,h.string]),isNumericString:h.bool,customInput:h.elementType,allowNegative:h.bool,allowEmptyFormatting:h.bool,allowLeadingZeros:h.bool,onValueChange:h.func,onKeyDown:h.func,onMouseUp:h.func,onChange:h.func,onFocus:h.func,onBlur:h.func,type:h.oneOf(["text","tel","password"]),isAllowed:h.func,renderText:h.func,getInputRef:h.oneOfType([h.func,h.shape({current:h.any})])},O={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:d,onChange:d,onKeyDown:d,onMouseUp:d,onFocus:d,onBlur:d,isAllowed:function(){return!0}},C=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?u(e):t}(this,i(t).call(this,e));var r=e.defaultValue;n.validateProps();var a=n.formatValueProp(r);return n.state={value:a,numAsString:n.removeFormatting(a)},n.selectionBeforeInput={selectionStart:0,selectionEnd:0},n.onChange=n.onChange.bind(u(n)),n.onKeyDown=n.onKeyDown.bind(u(n)),n.onMouseUp=n.onMouseUp.bind(u(n)),n.onFocus=n.onFocus.bind(u(n)),n.onBlur=n.onBlur.bind(u(n)),n}var n,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,l=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,n=this.state,r=this.focusedElm,a=n.value,o=n.numAsString,i=void 0===o?"":o;if(e!==t){this.validateProps();var s=this.formatNumString(i),u=void 0===t.value?s:this.formatValueProp(),l=this.removeFormatting(u),c=parseFloat(l),f=parseFloat(i);(isNaN(c)&&isNaN(f)||c===f)&&s===a&&(null!==r||u===a)||this.updateValue({formattedValue:u,numAsString:l,input:r})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,n=this.getSeparators().decimalSeparator,r=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var o=(e=(e.match(r)||[]).join("").replace(n,".")).indexOf(".");return-1!==o&&(e="".concat(e.substring(0,o),".").concat(e.substring(o+1,e.length).replace(new RegExp(v(n),"g"),""))),a&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var n=this.props,r=n.format,a=n.decimalScale,o=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!o||0===a||t||r?"":"|"+v(o)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props,n=t.thousandSeparator,r=t.allowedDecimalSeparators;return!0===n&&(n=","),r||(r=[e,"."]),{decimalSeparator:e,thousandSeparator:n,allowedDecimalSeparators:r}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,n=void 0===t?" ":t;return"string"===typeof n?n:n[e]||" "}},{key:"getValueObject",value:function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),n=t.decimalSeparator,r=t.thousandSeparator;if(n===r)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(r,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(n," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,n){y(e,t),setTimeout((function(){e.value===n&&y(e,t)}),0)}},{key:"correctCaretPosition",value:function(e,t,n){var r=this.props,a=r.prefix,o=r.suffix,i=r.format;if(""===e)return 0;if(t=S(t,0,e.length),!i){var s="-"===e[0];return S(t,a.length+(s?1:0),e.length-o.length)}if("function"===typeof i)return t;if("#"===i[t]&&m(e[t]))return t;if("#"===i[t-1]&&m(e[t-1]))return t;var u=i.indexOf("#");t=S(t,u,i.lastIndexOf("#")+1);for(var l=i.substring(t,i.length).indexOf("#"),c=t,f=t+(-1===l?0:l);c>u&&("#"!==i[c]||!m(e[c]));)c-=1;return!m(e[f])||"left"===n&&t!==u||t-c<f-t?m(e[c])?c+1:c:f}},{key:"getCaretPosition",value:function(e,t,n){var r,a,o=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),u=(e.match(s)||[]).join(""),l=(t.match(s)||[]).join("");for(r=0,a=0;a<n;a++){var c=e[a]||"",f=t[r]||"";if((c.match(s)||c===f)&&("0"!==c||!f.match(s)||"0"===f||u.length===l.length)){for(;c!==t[r]&&r<t.length;)r++;r++}}return"string"!==typeof o||i||(r=t.length),r=this.correctCaretPosition(t,r)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,n=t.format,r=t.prefix,a=t.suffix;if(!n&&e){var o="-"===e[0];o&&(e=e.substring(1,e.length));var i=(e=r&&0===e.indexOf(r)?e.substring(r.length,e.length):e).lastIndexOf(a);e=a&&-1!==i&&i===e.length-a.length?e.substring(0,i):e,o&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),n=0,r="",a=0,o=t.length;a<=o;a++){var i=t[a]||"",s=a===o?e.length:e.indexOf(i,n);if(-1===s){r=e;break}r+=e.substring(n,s),n=s+i.length}return(r.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,n=t.format,r=t.removeFormatting;return e?(n?e="string"===typeof n?this.removePatternFormatting(e):"function"===typeof r?r(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,n=0,r=t.split(""),a=0,o=t.length;a<o;a++)"#"===t[a]&&(r[a]=e[n]||this.getMaskAtIndex(n),n+=1);return r.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,n=t.decimalScale,r=t.fixedDecimalScale,a=t.prefix,o=t.suffix,i=t.allowNegative,s=t.thousandsGroupStyle,u=this.getSeparators(),l=u.thousandSeparator,c=u.decimalSeparator,f=-1!==e.indexOf(".")||n&&r,p=g(e,i),h=p.beforeDecimal,d=p.afterDecimal,m=p.addNegation;return void 0!==n&&(d=k(d,n,r)),l&&(h=function(e,t,n){var r=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(n),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(r,"$1"+t)}(h,l,s)),a&&(h=a+h),o&&(d+=o),m&&(h="-"+h),e=h+(f&&c||"")+d}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,n=t.format,r=t.allowEmptyFormatting,a=e;return a=""!==e||r?"-"!==e||n?"string"===typeof n?this.formatWithPattern(a):"function"===typeof n?n(a):this.formatAsNumber(a):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,n=t.format,r=t.decimalScale,a=t.fixedDecimalScale,o=t.allowEmptyFormatting,i=this.props,s=i.value,u=void 0===s?e:s,l=i.isNumericString,c=!u&&0!==u;return c&&o&&(u=""),c&&!o?"":("number"===typeof u&&(u=u.toString(),l=!0),"Infinity"===u&&l&&(u=""),l&&!n&&"number"===typeof r&&(u=function(e,t,n){if(-1!==["","-"].indexOf(e))return e;var r=-1!==e.indexOf(".")&&t,a=g(e),o=a.beforeDecimal,i=a.afterDecimal,s=a.hasNagation,u=parseFloat("0.".concat(i||"0")).toFixed(t).split("."),l=o.split("").reverse().reduce((function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),u[0]),c=k(u[1]||"",Math.min(t,i.length),n),f=r?".":"";return"".concat(s?"-":"").concat(l).concat(f).concat(c)}(u,r,a)),l?this.formatNumString(u):this.formatInput(u))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),a=n.test(e),o=r.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.props.format||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var n=this.props,r=n.format,a=n.prefix,o=n.suffix,i=n.decimalScale,s=n.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof r&&"#"!==r[e]||!(r||!(e<a.length||e>=t.length-o.length||i&&s&&t[e]===u))}},{key:"checkIfFormatGotDeleted",value:function(e,t,n){for(var r=e;r<t;r++)if(this.isCharacterAFormat(r,n))return!0;return!1}},{key:"correctInputValue",value:function(e,t,n){var r=this.props,a=r.format,o=r.allowNegative,i=r.prefix,s=r.suffix,u=r.decimalScale,l=this.getSeparators(),c=l.allowedDecimalSeparators,f=l.decimalSeparator,p=this.state.numAsString||"",h=this.selectionBeforeInput,d=h.selectionStart,m=h.selectionEnd,v=function(e,t){for(var n=0,r=0,a=e.length,o=t.length;e[n]===t[n]&&n<a;)n++;for(;e[a-1-r]===t[o-1-r]&&o-r>n&&a-r>n;)r++;return{start:n,end:a-r}}(t,n),k=v.start,y=v.end;if(!a&&k===y&&-1!==c.indexOf(n[d])){var S=0===u?"":f;return n.substr(0,d)+S+n.substr(d+1,n.length)}var w=a?0:i.length,b=t.length-(a?0:s.length);if(n.length>t.length||!n.length||k===y||0===d&&m===t.length||d===w&&m===b)return n;if(this.checkIfFormatGotDeleted(k,y,t)&&(n=t),!a){var O=this.removeFormatting(n),C=g(O,o),x=C.beforeDecimal,P=C.afterDecimal,D=C.addNegation,I=e<n.indexOf(f)+1;if(O.length<p.length&&I&&""===x&&!parseFloat(P))return D?"-":""}return n}},{key:"updateValue",value:function(e){var t=e.formattedValue,n=e.input,r=e.setCaretPosition,a=void 0===r||r,o=e.numAsString,i=e.caretPos,s=this.props.onValueChange,u=this.state.value;if(n)if(a){if(!i){var l=e.inputValue||n.value,c=w(n);n.value=t,i=this.getCaretPosition(l,t,c)}this.setPatchedCaretPosition(n,i,t)}else n.value=t;void 0===o&&(o=this.removeFormatting(t)),t!==u&&(this.setState({value:t,numAsString:o}),s(this.getValueObject(t,o)))}},{key:"onChange",value:function(e){var t=e.target,n=t.value,r=this.state,a=this.props,o=a.isAllowed,i=r.value||"",s=w(t);n=this.correctInputValue(s,i,n);var u=this.formatInput(n)||"",l=this.removeFormatting(u);o(this.getValueObject(u,l))||(u=i),this.updateValue({formattedValue:u,numAsString:l,inputValue:n,input:t}),a.onChange(e)}},{key:"onBlur",value:function(e){var t=this.props,n=this.state,r=t.format,a=t.onBlur,o=t.allowLeadingZeros,i=n.numAsString,s=n.value;if(this.focusedElm=null,this.focusTimeout&&clearTimeout(this.focusTimeout),!r){isNaN(parseFloat(i))&&(i=""),o||(i=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",a=n[1]||"";return"".concat(t?"-":"").concat(r).concat(a?".".concat(a):"")}(i));var u=this.formatNumString(i);if(u!==s)return this.updateValue({formattedValue:u,numAsString:i,input:e.target,setCaretPosition:!1}),void a(e)}a(e)}},{key:"onKeyDown",value:function(e){var t,n=e.target,r=e.key,a=n.selectionStart,o=n.selectionEnd,i=n.value,s=void 0===i?"":i,u=this.props,l=u.decimalScale,c=u.fixedDecimalScale,f=u.prefix,p=u.suffix,h=u.format,d=u.onKeyDown,m=void 0!==l&&c,v=this.getNumberRegex(!1,m),g=new RegExp("-"),k="string"===typeof h;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:o},"ArrowLeft"===r||"Backspace"===r?t=a-1:"ArrowRight"===r?t=a+1:"Delete"===r&&(t=a),void 0!==t&&a===o){var y=t,S=k?h.indexOf("#"):f.length,w=k?h.lastIndexOf("#")+1:s.length-p.length;if("ArrowLeft"===r||"ArrowRight"===r){var b="ArrowLeft"===r?"left":"right";y=this.correctCaretPosition(s,t,b)}else if("Delete"!==r||v.test(s[t])||g.test(s[t])){if("Backspace"===r&&!v.test(s[t]))if(a<=S+1&&"-"===s[0]&&"undefined"===typeof h){var O=s.substring(1);this.updateValue({formattedValue:O,caretPos:y,input:n})}else if(!g.test(s[t])){for(;!v.test(s[y-1])&&y>S;)y--;y=this.correctCaretPosition(s,y,"left")}}else for(;!v.test(s[y])&&y<w;)y++;(y!==t||t<S||t>w)&&(e.preventDefault(),this.setPatchedCaretPosition(n,y,s)),e.isUnitTestRun&&this.setPatchedCaretPosition(n,y,s),d(e)}else d(e)}},{key:"onMouseUp",value:function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,a=t.value,o=void 0===a?"":a;if(n===r){var i=this.correctCaretPosition(o,n);i!==n&&this.setPatchedCaretPosition(t,i,o)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var n=e.target,r=n.selectionStart,a=n.selectionEnd,o=n.value,i=void 0===o?"":o,s=t.correctCaretPosition(i,r);s===r||0===r&&a===i.length||t.setPatchedCaretPosition(n,s,i),t.props.onFocus(e)}),0)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.displayType,a=e.customInput,i=e.renderText,s=e.getInputRef,u=this.state.value,l=function(e,t){var n={};return Object.keys(e).forEach((function(r){t[r]||(n[r]=e[r])})),n}(this.props,b),c=o({inputMode:"numeric"},l,{type:t,value:u,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return i?i(u)||null:r.createElement("span",o({},l,{ref:s}),u);if(a){var f=a;return r.createElement(f,o({},c,{ref:s}))}return r.createElement("input",o({},c,{ref:s}))}}],l&&a(n.prototype,l),c&&a(n,c),t}(r.Component);C.propTypes=b,C.defaultProps=O;const x=C}}]);
//# sourceMappingURL=5734.942f0dc6.chunk.js.map