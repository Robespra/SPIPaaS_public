"use strict";(self.webpackChunksp_ipaasv18_0_4=self.webpackChunksp_ipaasv18_0_4||[]).push([[1407],{71407:(e,t,r)=>{t.yk=t.Sc=t.s3=t.zp=t.sx=t.fh=t.ks=t.$M=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var s=r(65043),i=l(s),o=(l(r(97950)),l(r(65173)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){var t=parseFloat(e,10),r=e.match(/[a-zA-Z]+/)[0];switch(r=r.toLowerCase()){case"b":return t;case"kb":return 1024*t;case"mb":return 1048576*t;case"gb":return 1073741824*t;default:throw new Error("Unknown unit "+r)}}r(35316);var h=t.$M=function(e){function t(e){c(this,t);var r=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.setError=function(e){r.getInputRef().setCustomValidity(e),r.setState({errorMessage:e})},r.clearError=function(){return r.setError("")},r.checkError=function(e){r.state.isPristine&&r.setDirty(),r.buildErrorMessage(),r.changeInputErrorClass()},r.handleBlur=function(e){r.context.validationForm.immediate||r.checkError()},r.handleChange=function(e){r.props.onChange&&r.props.onChange(e),r.context.validationForm.immediate&&r.checkError()},r.validateInput=function(){r.setDirty(),r.buildErrorMessage()},r.setDirty=function(){r.setState({isPristine:!1})},r.filterProps=function(){var e=r.props;e.errorMessage,e.successMessage,e.validator,e.defaultErrorMessage,e.attachToForm,e.detachFromForm,e.setFormDirty,e.label,e.immediate;return u(e,["errorMessage","successMessage","validator","defaultErrorMessage","attachToForm","detachFromForm","setFormDirty","label","immediate"])},r.state={isPristine:!0,errorMessage:""},i.default.createRef?r.inputRef=i.default.createRef():r.inputRef=function(e){r.inputRefLegacy=e},r}return f(t,e),n(t,[{key:"componentDidMount",value:function(){this.context.validationForm.attachToForm(this)}},{key:"componentWillUnmount",value:function(){this.context.validationForm.detachFromForm(this)}},{key:"getInputRef",value:function(){return this.inputRefLegacy||this.inputRef.current}},{key:"buildErrorMessage",value:function(){var e={valueMissing:"required",customError:"",stepMismatch:"step",patternMismatch:"pattern",rangeUnderflow:"min",rangeOverflow:"max",typeMismatch:"type"},t=this.props.errorMessage,r=this.context.validationForm.defaultErrorMessage||{};"string"===typeof t&&(t={required:t}),t=Object.assign({},E.defaultErrorMessage,r,t);var a=this.getInputRef();if(a){var n=a.validity,s="";for(var i in n)if(n[i]){s="customError"===i?a.validationMessage:t[e[i]];break}if(this.props.minLength&&(a.value.length<+this.props.minLength?(a.setCustomValidity(t.minLength),s=t.minLength.replace("{minLength}",this.props.minLength)):s===t.minLength&&(a.setCustomValidity(""),s="")),"function"===typeof this.props.validator)(0,this.props.validator)(a.value)?(a.setCustomValidity(""),s=""):(a.setCustomValidity(t.validator),s=t.validator);this.setState({errorMessage:s})}}},{key:"displayErrorMessage",value:function(){return this.state.errorMessage?i.default.createElement("div",{className:"invalid-feedback"},this.state.errorMessage):null}},{key:"displaySuccessMessage",value:function(e){return this.state.isPristine||this.state.errorMessage||!this.props.successMessage?null:i.default.createElement("div",{className:"valid-feedback"+(e?" d-block":"")},this.props.successMessage)}},{key:"changeInputErrorClass",value:function(){var e=this.getInputRef();"radio"!==e.type&&(e.validity.valid?(e.classList.remove("is-invalid"),e.classList.add("is-valid")):(e.classList.add("is-invalid"),e.classList.remove("is-valid")))}}]),t}(i.default.Component);h.propTypes={name:o.default.string.isRequired,errorMessage:o.default.oneOfType([o.default.object,o.default.string])},h.contextTypes={validationForm:o.default.object},(t.ks=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=e.multiline,r=(e.successMessage,e.validator,u(e,["multiline","successMessage","validator"]));return i.default.createElement(i.default.Fragment,null,t?i.default.createElement("textarea",a({className:this.props.className},r,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})):i.default.createElement("input",a({className:this.props.className},r,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(h)).defaultProps=a({},h.defaultProps,{className:"form-control",multiline:!1});var m=t.fh=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=e.prepend,r=e.append,n=e.inputGroupClassName,s=e.inputGroupStyle,o=u(e,["prepend","append","inputGroupClassName","inputGroupStyle"]);return i.default.createElement("div",{className:n,style:s},t&&i.default.createElement("div",{className:"input-group-prepend"},t),i.default.createElement("input",a({},o,{className:this.props.className,ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur})),r&&i.default.createElement("div",{className:"input-group-append"},r),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(h);m.defaultProps=a({},h.defaultProps,{className:"form-control",inputGroupClassName:"input-group"}),m.propTypes={className:o.default.string,inputGroupClassName:o.default.string,inputGroupStyle:o.default.object,prepend:o.default.element,append:o.default.element};var v=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),n(t,[{key:"getInputRef",value:function(){return window.document.querySelectorAll('[name="'+this.props.name+'"]')[0]}},{key:"mapRadioItems",value:function(){var e=this;return i.default.Children.map(this.props.children,(function(t){if("function"===typeof t.type&&t.type.name===g.name)return i.default.cloneElement(t,a({},t.props,{inline:e.props.inline,name:e.props.name,required:e.props.required,defaultValue:e.props.defaultValue,onChange:e.props.onChange,valueSelected:e.props.valueSelected,checkError:e.checkError}));console.warn("Only RadioItem is allowed inside RadioGroup")}))}},{key:"render",value:function(){var e=this.filterProps(),t=e.containerStyle,r=e.containerClassName;return i.default.createElement("div",{style:t,className:r},this.mapRadioItems(),this.state.errorMessage&&i.default.createElement("div",{className:"invalid-feedback d-block"},this.state.errorMessage),this.displaySuccessMessage(!0))}}]),t}(h);v.defaultProps={inline:!0,containerStyle:{}},v.propTypes={inline:o.default.bool,name:o.default.string.isRequired,containerStyle:o.default.object,containerClassName:o.default.string,defaultValue:o.default.string,valueSelected:o.default.string,onChange:o.default.func};var g=function(e){function t(){var e,r,a;c(this,t);for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return r=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.onChange=function(e){a.props.onChange&&a.props.onChange(e,e.target.value),a.props.checkError()},p(a,r)}return f(t,e),n(t,[{key:"render",value:function(){var e=this.props,t=(e.checkError,e.containerStyle),r=e.containerClassName,n=e.label,s=e.inline,o=e.defaultValue,l=e.valueSelected,c=e.onChange,p=u(e,["checkError","containerStyle","containerClassName","label","inline","defaultValue","valueSelected","onChange"]),f=void 0!==l&&c?{checked:this.props.value===l}:{defaultChecked:this.props.value===o};return i.default.createElement("div",{className:r+" form-check "+(s?"form-check-inline":""),style:t},i.default.createElement("input",a({className:"form-check-input",type:"radio"},f,{onChange:this.onChange},p)),i.default.createElement("label",{className:"form-check-label",htmlFor:this.props.id},n))}}]),t}(s.Component);g.defaultProps={containerStyle:{},containerClassName:""},g.propTypes={value:o.default.string.isRequired,id:o.default.string.isRequired,label:o.default.string.isRequired,containerStyle:o.default.object,containerClassName:o.default.string};t.sx={RadioGroup:v,RadioItem:g};var y=t.zp=function(e){function t(){var e,r,a;c(this,t);for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return r=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.checkFileError=function(e){var t=a.props,r=t.maxFileSize,n=t.fileType,s=t.errorMessage,i=void 0===s?{}:s;i=Object.assign({},E.defaultErrorMessage,i);var o=r?d(r):null,l="",u=e.name.slice(e.name.lastIndexOf(".")+1).toLowerCase().trim();l=(n=n.map((function(e){return e.toLowerCase().trim()}))).length>0&&!n.includes(u)?i.fileType:o&&e.size>o?i.maxFileSize:"",a.getInputRef().setCustomValidity(l)},a.handleChange=function(e){var t=a.getInputRef().files[0];if(a.props.onChange&&a.props.onChange(e,t),!t)return a.checkError();a.checkFileError(t),a.checkError()},p(a,r)}return f(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=(e.maxFileSize,e.fileType,u(e,["maxFileSize","fileType"]));return i.default.createElement("div",null,i.default.createElement("input",a({},t,{ref:this.inputRef,type:"file",onChange:this.handleChange})),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(h);y.propTypes={fileType:o.default.array,maxFileSize:o.default.string},y.defaultProps=a({},h.defaultProps,{className:"form-control"}),(t.s3=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps();return i.default.createElement("div",null,i.default.createElement("select",a({className:this.props.className},e,{ref:this.inputRef,onChange:this.handleChange,onBlur:this.handleBlur,value:this.props.value}),this.props.children),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(h)).defaultProps=a({},h.defaultProps,{className:"form-control"});var b=t.Sc=function(e){function t(){var e,r,a;c(this,t);for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return r=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.handleChange=function(e){var t=e.target.checked;a.props.onChange&&a.props.onChange(e,t),a.checkError()},p(a,r)}return f(t,e),n(t,[{key:"render",value:function(){var e=this.filterProps(),t=(e.label,e.inline),r=e.containerStyle,n=(e.className,e.checked,u(e,["label","inline","containerStyle","className","checked"]));return i.default.createElement("div",{className:"form-check "+(t?"form-check-inline":""),style:r},i.default.createElement("input",a({type:"checkbox",className:this.props.className},n,{ref:this.inputRef,onChange:this.handleChange,checked:this.props.value,defaultChecked:this.props.defaultChecked})),i.default.createElement("label",{className:"form-check-label",htmlFor:n.id},this.props.label),this.displayErrorMessage(),this.displaySuccessMessage())}}]),t}(h);b.defaultProps=a({},h.defaultProps,{className:"form-check-input",containerStyle:{},label:"",inline:!1}),b.propTypes={name:o.default.string.isRequired,label:o.default.string.isRequired,containerStyle:o.default.object,inline:o.default.bool,id:o.default.string.isRequired,value:o.default.bool,defaultChecked:o.default.bool};var E=t.yk=function(e){function t(){var e,r,a;c(this,t);for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return r=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.inputs={},a.attachToForm=function(e){a.inputs[e.props.name]=e},a.detachFromForm=function(e){delete a.inputs[e.props.name]},a.getChildContext=function(){return{validationForm:{attachToForm:a.attachToForm,detachFromForm:a.detachFromForm,immediate:a.props.immediate,defaultErrorMessage:a.props.defaultErrorMessage}}},a.setFormDiry=function(){var e=a.refs.form;e.classList.contains("was-validated")||e.classList.add("was-validated")},a.mapInputs=function(e){return Object.keys(e).map((function(t){return e[t]}))},a.findFirstErrorInput=function(e){return e.find((function(e){return!e.getInputRef().validity.valid}))},a.getErrorInputs=function(e){var t={};return e.forEach((function(e){var r=e.getInputRef();r.validity.valid||(t[r.name]=e)})),t},a.handleSubmit=function(e){var t=a.refs.form,r=a.getFormData(),n=a.mapInputs(a.inputs);(a.setFormDiry(),a.validateInputs(),!1===t.checkValidity())?(e.preventDefault(),e.stopPropagation(),a.props.onErrorSubmit&&a.props.onErrorSubmit(e,r,a.getErrorInputs(n)),a.props.setFocusOnError&&a.findFirstErrorInput(n).getInputRef().focus()):a.props.onSubmit&&a.props.onSubmit(e,r,n)},a.resetValidationState=function(e){for(var t in a.inputs){a.inputs[t].setState({errorMessage:"",isPristine:!0});var r=a.inputs[t].getInputRef();r.classList.remove("is-valid"),r.classList.remove("is-invalid"),r.setCustomValidity(""),e&&("checkbox"==r.type&&(r.checked=!1),r.value="")}a.refs.form.classList.remove("was-validated")},p(a,r)}return f(t,e),n(t,[{key:"isBaseFormControl",value:function(e){if("function"!==typeof e)return!1;for(;Object.getPrototypeOf(e)!==Object.prototype;){if(Object.getPrototypeOf(e)===h)return!0;e=Object.getPrototypeOf(e)}return!1}},{key:"validateInputs",value:function(){for(var e in this.inputs)this.inputs[e].validateInput()}},{key:"getFormData",value:function(){var e={};for(var t in this.inputs){var r=this.inputs[t].getInputRef(),a=null;switch(r.type){case"checkbox":a=r.checked;break;case"radio":for(var n=document.querySelectorAll('[name="'+this.props.name+'"]'),s=0;s<n.length;s++)if(n[s].checked){a=n[s].value;break}break;case"file":a=r.files[0];break;default:a=r.value}e[t]=a}return e}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.onErrorSubmit,e.immediate,e.setFocusOnError,e.defaultErrorMessage,u(e,["onSubmit","onErrorSubmit","immediate","setFocusOnError","defaultErrorMessage"]));return i.default.createElement("form",a({noValidate:!0,ref:"form"},t,{onSubmit:this.handleSubmit}),this.props.children)}}]),t}(i.default.Component);E.defaultProps={className:"needs-validation",setFocusOnError:!0,immediate:!0,defaultErrorMessage:{}},E.propTypes={className:o.default.string,defaultErrorMessage:o.default.object,setFocusOnError:o.default.bool,immediate:o.default.bool,onSubmit:o.default.func.isRequired,onErrorSubmit:o.default.func},E.childContextTypes={validationForm:o.default.object},E.defaultErrorMessage={required:"This field is required",pattern:"Input value does not match the pattern",type:"Input value does not match the type",step:"Step mismatch",minLength:"Please enter at least {minLength} characters",min:"Number is too low",max:"Number is too high",fileType:"File type mismatch",maxFileSize:"File size exceed limit",validator:"Validator check failed"}},35316:()=>{Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var a=arguments[1],n=0;n<r;){var s=t[n];if(e.call(a,s,n,t))return s;n++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),a=1;a<arguments.length;a++){var n=arguments[a];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},writable:!0,configurable:!0})}}]);
//# sourceMappingURL=1407.91f1fd69.chunk.js.map