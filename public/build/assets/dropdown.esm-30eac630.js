import{r as i}from"./app-5ef925c1.js";import{C as Ft,P as Ge,O as d,d as X,i as Dt,D as N,f as Pt,g as pe,u as Lt,c as j,m as v,T as Rt,R as Tt,b as Nt,n as Te,Z as de,a as oe,l as Ne}from"./tooltip.esm-8c154d5b.js";import{T as Ve,a as xt,C as kt,O as Kt,S as Mt,V as Gt}from"./virtualscroller.esm-c62725ab.js";function te(){return te=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},te.apply(this,arguments)}function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},z(e)}function Vt(e,l){if(z(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,l||"default");if(z(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(e)}function jt(e){var l=Vt(e,"string");return z(l)==="symbol"?l:String(l)}function ge(e,l,r){return l=jt(l),l in e?Object.defineProperty(e,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[l]=r,e}function At(e){if(Array.isArray(e))return e}function Ht(e,l){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var t,h,T,g,y=[],w=!0,I=!1;try{if(T=(r=r.call(e)).next,l===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(t=T.call(r)).done)&&(y.push(t.value),y.length!==l);w=!0);}catch(H){I=!0,h=H}finally{try{if(!w&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(I)throw h}}return y}}function xe(e,l){(l==null||l>e.length)&&(l=e.length);for(var r=0,t=new Array(l);r<l;r++)t[r]=e[r];return t}function Bt(e,l){if(e){if(typeof e=="string")return xe(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,l)}}function $t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,l){return At(e)||Ht(e,l)||Bt(e,l)||$t()}var ve=Ft.extend({defaultProps:{__TYPE:"Dropdown",appendTo:null,ariaLabel:null,ariaLabelledBy:null,autoFocus:!1,children:void 0,className:null,clearIcon:null,dataKey:null,disabled:!1,dropdownIcon:null,editable:!1,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterBy:null,filterClearIcon:null,filterIcon:null,filterInputAutoFocus:!0,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,focusInputRef:null,id:null,inputId:null,inputRef:null,itemTemplate:null,maxLength:null,name:null,onBlur:null,onChange:null,onContextMenu:null,onFilter:null,onFocus:null,onHide:null,onMouseDown:null,onShow:null,optionDisabled:null,optionGroupChildren:"items",optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,panelClassName:null,panelFooterTemplate:null,panelStyle:null,placeholder:null,required:!1,resetFilterOnHide:!1,scrollHeight:"200px",showClear:!1,showFilterClear:!1,showOnFocus:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null,valueTemplate:null,virtualScrollerOptions:null}}),me=i.memo(function(e){var l=function(y){return e.ptm(y,{context:{selected:e.selected,disabled:e.disabled}})},r=function(y){e.onClick&&e.onClick({originalEvent:y,option:e.option})},t=j("p-dropdown-item",{"p-highlight":e.selected,"p-disabled":e.disabled,"p-dropdown-item-empty":!e.label||e.label.length===0},e.option&&e.option.className),h=e.template?d.getJSXElement(e.template,e.option):e.label,T=v({className:t,style:e.style,onClick:function(y){return r(y)},"aria-label":e.label,role:"option","aria-selected":e.selected,key:e.label},l("item"));return i.createElement("li",T,h,i.createElement(Tt,null))});me.displayName="DropdownItem";function ke(e,l){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),r.push.apply(r,t)}return r}function x(e){for(var l=1;l<arguments.length;l++){var r=arguments[l]!=null?arguments[l]:{};l%2?ke(Object(r),!0).forEach(function(t){ge(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var je=i.memo(i.forwardRef(function(e,l){var r=e.ptm,t=i.useContext(Ge);i.useRef(null);var h=i.useRef(null),T=!(e.visibleOptions&&e.visibleOptions.length)&&e.hasFilter,g={filter:function(c){return I(c)},reset:function(){return e.resetFilter()}},y=function(){e.onEnter(function(){if(e.virtualScrollerRef.current){var c=e.getSelectedOptionIndex();c!==-1&&setTimeout(function(){return e.virtualScrollerRef.current.scrollToIndex(c)},0)}})},w=function(){e.onEntered(function(){e.filter&&e.filterInputAutoFocus&&N.focus(h.current,!1)})},I=function(c){e.virtualScrollerRef.current&&e.virtualScrollerRef.current.scrollToIndex(0),e.onFilterInputChange&&e.onFilterInputChange(c)},H=function(){if(e.panelFooterTemplate){var c=d.getJSXElement(e.panelFooterTemplate,e,e.onOverlayHide),m=v({className:"p-dropdown-footer"},r("footer"));return i.createElement("div",m,c)}return null},q=function(c,m){var b=e.getOptionGroupChildren(c);return b.map(function(f,F){var O=e.getOptionLabel(f),P=F+"_"+e.getOptionRenderKey(f),k=e.isOptionDisabled(f);return i.createElement(me,{key:P,label:O,option:f,style:m,template:e.itemTemplate,selected:e.isSelected(f),disabled:k,onClick:e.onOptionClick,ptm:r})})},Z=function(c,m){var b=d.getJSXElement(c,e)||Ne(m?"emptyFilterMessage":"emptyMessage"),f=v({className:"p-dropdown-empty-message"},r("emptyMessage"));return i.createElement("li",f,b)},W=function(c,m){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f={height:b.props?b.props.itemSize:void 0};if(f=x(x({},f),c.style),e.optionGroupLabel){var F=e.optionGroupTemplate?d.getJSXElement(e.optionGroupTemplate,c,m):e.getOptionGroupLabel(c),O=q(c,f),P=m+"_"+e.getOptionGroupRenderKey(c),k=v({className:"p-dropdown-item-group",style:f},r("itemGroup"));return i.createElement(i.Fragment,{key:P},i.createElement("li",k,F),O)}else{var K=e.getOptionLabel(c),A=m+"_"+e.getOptionRenderKey(c),Y=e.isOptionDisabled(c);return i.createElement(me,{key:A,label:K,option:c,style:f,template:e.itemTemplate,selected:e.isSelected(c),disabled:Y,onClick:e.onOptionClick,ptm:r})}},E=function(){return d.isNotEmpty(e.visibleOptions)?e.visibleOptions.map(W):e.hasFilter?Z(e.emptyFilterMessage,!0):Z(e.emptyMessage)},ne=function(){if(e.showFilterClear&&e.filterValue){var c=Ne("clear"),m=v({className:"p-dropdown-filter-clear-icon","aria-label":c,onClick:function(){return e.onFilterClearIconClick(function(){return N.focus(h.current)})}},r("clearIcon")),b=e.filterClearIcon||i.createElement(Ve,m),f=oe.getJSXIcon(b,x({},m),{props:e});return f}return null},ie=function(){if(e.filter){var c=ne(),m=j("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!c}),b="p-dropdown-filter-icon",f=v({className:b},r("filterIcon")),F=e.filterIcon||i.createElement(Mt,f),O=oe.getJSXIcon(F,x({},f),{props:e}),P=v({className:m},r("filterContainer")),k=v({ref:h,type:"text",autoComplete:"off",className:"p-dropdown-filter p-inputtext p-component",placeholder:e.filterPlaceholder,onKeyDown:e.onFilterInputKeyDown,onChange:function(ue){return I(ue)},value:e.filterValue},r("filterInput")),K=i.createElement("div",P,i.createElement("input",k),c,O);if(e.filterTemplate){var A={className:m,element:K,filterOptions:g,filterInputKeyDown:e.onFilterInputKeyDown,filterInputChange:I,filterIconClassName:"p-dropdown-filter-icon",clearIcon:c,props:e};K=d.getJSXElement(e.filterTemplate,A)}var Y=v({className:"p-dropdown-header"},r("header"));return i.createElement("div",Y,K)}return null},C=function(){if(e.virtualScrollerOptions){var c=x(x({},e.virtualScrollerOptions),{style:x(x({},e.virtualScrollerOptions.style),{height:e.scrollHeight}),className:j("p-dropdown-items-wrapper",e.virtualScrollerOptions.className),items:e.visibleOptions,autoSize:!0,onLazyLoad:function(O){return e.virtualScrollerOptions.onLazyLoad(x(x({},O),{filter:e.filterValue}))},itemTemplate:function(O,P){return O&&W(O,P.index,P)},contentTemplate:function(O){var P=j("p-dropdown-items",O.className),k=e.hasFilter?e.emptyFilterMessage:e.emptyMessage,K=T?Z(k):O.children,A=v({ref:O.contentRef,style:O.style,className:P,role:"listbox"},r("list"));return i.createElement("ul",A,K)}});return i.createElement(Gt,te({ref:e.virtualScrollerRef},c,{pt:r("virtualScroller")}))}else{var m=E(),b=v({className:"p-dropdown-items-wrapper",style:{maxHeight:e.scrollHeight||"auto"}},r("wrapper")),f=v({className:"p-dropdown-items",role:"listbox"},r("list"));return i.createElement("div",b,i.createElement("ul",f,m))}},B=function(){var c=j("p-dropdown-panel p-component",e.panelClassName,{"p-input-filled":t&&t.inputStyle==="filled"||X.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||X.ripple===!1}),m=ie(),b=C(),f=H(),F=v({ref:l,className:c,style:e.panelStyle,onClick:e.onClick},r("panel"));return i.createElement(kt,{nodeRef:l,classNames:"p-connected-overlay",in:e.in,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:y,onEntering:e.onEntering,onEntered:w,onExit:e.onExit,onExited:e.onExited},i.createElement("div",F,m,b,f))},D=B();return i.createElement(Nt,{element:D,appendTo:e.appendTo})}));je.displayName="DropdownPanel";function Ke(e,l){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),r.push.apply(r,t)}return r}function J(e){for(var l=1;l<arguments.length;l++){var r=arguments[l]!=null?arguments[l]:{};l%2?Ke(Object(r),!0).forEach(function(t){ge(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ut(e,l){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_t(e))||l&&e&&typeof e.length=="number"){r&&(e=r);var t=0,h=function(){};return{s:h,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(I){throw I},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T=!0,g=!1,y;return{s:function(){r=r.call(e)},n:function(){var I=r.next();return T=I.done,I},e:function(I){g=!0,y=I},f:function(){try{!T&&r.return!=null&&r.return()}finally{if(g)throw y}}}}function _t(e,l){if(e){if(typeof e=="string")return Me(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Me(e,l)}}function Me(e,l){(l==null||l>e.length)&&(l=e.length);for(var r=0,t=new Array(l);r<l;r++)t[r]=e[r];return t}var Jt=i.memo(i.forwardRef(function(e,l){var r=i.useContext(Ge),t=ve.getProps(e,r),h=i.useState(""),T=le(h,2),g=T[0],y=T[1],w=i.useState(!1),I=le(w,2),H=I[0],q=I[1],Z=i.useState(!1),W=le(Z,2),E=W[0],ne=W[1],ie=ve.setMetaData({props:t,state:{filter:g,focused:H,overlayVisible:E}}),C=ie.ptm,B=i.useRef(null),D=i.useRef(null),p=i.useRef(t.inputRef),c=i.useRef(t.focusInputRef),m=i.useRef(null),b=i.useRef(null),f=i.useRef(null),F=i.useRef(null),O=t.virtualScrollerOptions&&t.virtualScrollerOptions.lazy,P=d.isNotEmpty(g),k=t.appendTo||r&&r.appendTo||X.appendTo,K=Dt({target:B,overlay:D,listener:function(n,a){var u=a.type,s=a.valid;s&&(u==="outside"?!Ae(n)&&M():M())},when:E}),A=le(K,2),Y=A[0],ye=A[1],ue=function(){if(P&&!O){var n=g.trim().toLocaleLowerCase(t.filterLocale),a=t.filterBy?t.filterBy.split(","):[t.optionLabel||"label"];if(t.optionGroupLabel){var u=[],s=Ut(t.options),L;try{for(s.s();!(L=s.n()).done;){var R=L.value,U=Te.filter(G(R),a,n,t.filterMatchMode,t.filterLocale);U&&U.length&&u.push(J(J({},R),ge({},"".concat(t.optionGroupChildren),U)))}}catch(_){s.e(_)}finally{s.f()}return u}else return Te.filter(t.options,a,n,t.filterMatchMode,t.filterLocale)}else return t.options},Ae=function(n){return N.hasClass(n.target,"p-dropdown-clear-icon")||N.hasClass(n.target,"p-dropdown-filter-clear-icon")},He=function(n){t.disabled||(t.onClick&&t.onClick(n),!n.defaultPrevented&&(N.hasClass(n.target,"p-dropdown-clear-icon")||n.target.tagName==="INPUT"||(!D.current||!(D.current&&D.current.contains(n.target)))&&(N.focus(c.current),E?M():ee())))},Be=function(n){t.showOnFocus&&!E&&ee(),q(!0),t.onFocus&&t.onFocus(n)},be=function(n){q(!1),t.onBlur&&setTimeout(function(){var a=p.current?p.current.value:void 0;t.onBlur({originalEvent:n.originalEvent,value:a,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:t.name,id:t.id,value:a}})},200)},$e=function(n){Kt.emit("overlay-click",{originalEvent:n,target:B.current})},Ue=function(n){switch(n.which){case 40:Oe(n);break;case 38:he(n);break;case 32:case 13:E?M():ee(),n.preventDefault();break;case 27:case 9:M();break;default:Xe(n);break}},_e=function(n){switch(n.which){case 40:Oe(n);break;case 38:he(n);break;case 13:case 27:M(),n.preventDefault();break}},he=function(n){if(S){var a=we(Q());a&&re({originalEvent:n,option:a})}n.preventDefault()},Oe=function(n){if(S)if(!E&&n.altKey)ee();else{var a=Je(Q());a&&re({originalEvent:n,option:a})}n.preventDefault()},Je=function o(n){if(t.optionGroupLabel){var a=n===-1?0:n.group,u=n===-1?-1:n.option,s=Ie(G(S[a]),u);return s||(a+1!==S.length?o({group:a+1,option:-1}):null)}return Ie(S,n)},Ie=function o(n,a){var u=a+1;if(u===n.length)return null;var s=n[u];return fe(s)?o(u):s},we=function o(n){if(n===-1)return null;if(t.optionGroupLabel){var a=n.group,u=n.option,s=Ee(G(S[a]),u);return s||(a>0?o({group:a-1,option:G(S[a-1]).length}):null)}return Ee(S,n)},Ee=function(n,a){var u=a-1;if(u<0)return null;var s=n[u];return fe(s)?we(u):s},Xe=function(n){b.current&&clearTimeout(b.current);var a=n.key;if(!(a==="Shift"||a==="Control"||a==="Alt")){if(F.current===a?f.current=a:f.current=f.current?f.current+a:a,F.current=a,f.current){var u=Q(),s=t.optionGroupLabel?qe(u):ze(u+1);s&&re({originalEvent:n,option:s})}b.current=setTimeout(function(){f.current=null},250)}},ze=function(n){return f.current?Ce(n,S.length)||Ce(0,n):null},Ce=function(n,a){for(var u=n;u<a;u++){var s=S[u];if(ce(s))return s}return null},qe=function(n){for(var a=n===-1?{group:0,option:-1}:n,u=a.group;u<S.length;u++)for(var s=G(S[u]),L=a.group===u?a.option+1:0;L<s.length;L++)if(ce(s[L]))return s[L];for(var R=0;R<=a.group;R++)for(var U=G(S[R]),_=0;_<(a.group===R?a.option:U.length);_++)if(ce(U[_]))return U[_];return null},ce=function(n){var a=$(n);return a?(a=a.toLocaleLowerCase(t.filterLocale),a.startsWith(f.current.toLocaleLowerCase(t.filterLocale))):!1},Ze=function(n){t.onChange&&t.onChange({originalEvent:n.originalEvent,value:n.target.value,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:t.name,id:t.id,value:n.target.value}})},We=function(n){q(!0),M(),t.onFocus&&t.onFocus(n)},Ye=function(n){var a=n.option;a.disabled||(re(n),N.focus(c.current)),M()},Qe=function(n){var a=n.target.value;y(a),t.onFilter&&t.onFilter({originalEvent:n,filter:a})},et=function(n){se(n)},se=function(n){y(""),t.onFilter&&t.onFilter({filter:""}),n&&n()},tt=function(n){t.onChange&&t.onChange({originalEvent:n,value:void 0,stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},target:{name:t.name,id:t.id,value:void 0}}),Pe()},re=function(n){if(V!==n.option){Pe(n.option);var a=ae(n.option);t.onChange&&t.onChange({originalEvent:n.originalEvent,value:a,stopPropagation:function(){n.originalEvent.stopPropagation()},preventDefault:function(){n.originalEvent.preventDefault()},target:{name:t.name,id:t.id,value:a}})}},Q=function(n){if(n=n||S,t.value!=null&&n)if(t.optionGroupLabel)for(var a=0;a<n.length;a++){var u=Fe(t.value,G(n[a]));if(u!==-1)return{group:a,option:u}}else return Fe(t.value,n);return-1},Se=function(){return t.optionValue?null:t.dataKey},Fe=function(n,a){var u=Se();return a.findIndex(function(s){return d.equals(n,ae(s),u)})},nt=function(n){return d.equals(t.value,ae(n),Se())},ee=function(){ne(!0)},M=function(){ne(!1)},rt=function(n){de.set("overlay",D.current,r&&r.autoZIndex||X.autoZIndex,r&&r.zIndex.overlay||X.zIndex.overlay),De(),n&&n()},at=function(n){n&&n(),Y(),t.onShow&&t.onShow()},lt=function(){ye()},ot=function(){t.filter&&t.resetFilterOnHide&&se(),de.clear(D.current),t.onHide&&t.onHide()},De=function(){N.alignOverlay(D.current,p.current.parentElement,t.appendTo||r&&r.appendTo||X.appendTo)},it=function(){var n=N.findSingle(D.current,"li.p-highlight");n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})},Pe=function(n){p.current&&(p.current.value=n?$(n):t.value||"")},$=function(n){return t.optionLabel?d.resolveFieldData(n,t.optionLabel):n&&n.label!==void 0?n.label:n},ae=function(n){return t.optionValue?d.resolveFieldData(n,t.optionValue):n&&n.value!==void 0?n.value:n},ut=function(n){return t.dataKey?d.resolveFieldData(n,t.dataKey):$(n)},fe=function(n){return t.optionDisabled?d.isFunction(t.optionDisabled)?t.optionDisabled(n):d.resolveFieldData(n,t.optionDisabled):n&&n.disabled!==void 0?n.disabled:!1},ct=function(n){return d.resolveFieldData(n,t.optionGroupLabel)},st=function(n){return d.resolveFieldData(n,t.optionGroupLabel)},G=function(n){return d.resolveFieldData(n,t.optionGroupChildren)},ft=function(){if(t.editable&&p.current){var n=V?$(V):null,a=n||t.value||"";p.current.value=a}},pt=function(){var n=Q(t.options);return n!==-1?t.optionGroupLabel?G(t.options[n.group])[n.option]:t.options[n]:null};i.useImperativeHandle(l,function(){return{props:t,show:ee,hide:M,focus:function(){return N.focus(c.current)},getElement:function(){return B.current},getOverlay:function(){return D.current},getInput:function(){return p.current},getFocusInput:function(){return c.current},getVirtualScroller:function(){return m.current}}}),i.useEffect(function(){d.combinedRefs(p,t.inputRef),d.combinedRefs(c,t.focusInputRef)},[p,t.inputRef,c,t.focusInputRef]),Pt(function(){t.autoFocus&&N.focus(c.current,t.autoFocus)}),pe(function(){E&&t.value&&it()},[E,t.value]),pe(function(){E&&g&&t.filter&&De()},[E,g,t.filter]),pe(function(){g&&(!t.options||t.options.length===0)&&y(""),ft(),p.current&&(p.current.selectedIndex=1)}),Lt(function(){de.clear(D.current)});var dt=function(){var n={value:"",label:t.placeholder};if(V){var a=ae(V);n={value:z(a)==="object"?t.options.findIndex(function(R){return R===a}):a,label:$(V)}}var u=v({className:"p-hidden-accessible p-dropdown-hidden-select"},C("hiddenSelectedMessage")),s=v({ref:p,required:t.required,defaultValue:n.value,name:t.name,tabIndex:-1,"aria-hidden":"true"},C("select")),L=v({value:n.value},C("option"));return i.createElement("div",u,i.createElement("select",s,i.createElement("option",L,n.label)))},vt=function(){var n=v({className:"p-hidden-accessible"},C("hiddenSelectedMessage")),a=v(J({ref:c,id:t.inputId,type:"text",readOnly:!0,"aria-haspopup":"listbox",onFocus:Be,onBlur:be,onKeyDown:Ue,disabled:t.disabled,tabIndex:t.tabIndex},Re),C("input"));return i.createElement("div",n,i.createElement("input",a))},mt=function(){var n=d.isNotEmpty(V)?$(V):null;if(t.editable){var a=n||t.value||"",u=v(J({ref:p,type:"text",defaultValue:a,className:"p-dropdown-label p-inputtext",disabled:t.disabled,placeholder:t.placeholder,maxLength:t.maxLength,onInput:Ze,onFocus:We,onBlur:be,"aria-haspopup":"listbox"},Re),C("input"));return i.createElement("input",u)}else{var s=j("p-dropdown-label p-inputtext",{"p-placeholder":n===null&&t.placeholder,"p-dropdown-label-empty":n===null&&!t.placeholder}),L=t.valueTemplate?d.getJSXElement(t.valueTemplate,V,t):n||t.placeholder||"empty",R=v({ref:p,className:s},C("input"));return i.createElement("span",R,L)}},gt=function(){if(t.value!=null&&t.showClear&&!t.disabled){var n=j("p-dropdown-clear-icon p-clickable"),a=v({className:n,onPointerUp:tt},C("clearIcon")),u=t.clearIcon||i.createElement(Ve,a);return oe.getJSXIcon(u,J({},a),{props:t})}return null},yt=function(){var n=j("p-dropdown-trigger-icon p-clickable"),a=v({className:n},C("dropdownIcon")),u=t.dropdownIcon||i.createElement(xt,a),s=oe.getJSXIcon(u,J({},a),{props:t}),L=t.placeholder||t.ariaLabel,R=v({className:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":E,"aria-label":L},C("trigger"));return i.createElement("div",R,s)},S=ue(),V=pt(),bt=d.isNotEmpty(t.tooltip),Le=ve.getOtherProps(t),Re=d.reduceKeys(Le,N.ARIA_PROPS),ht=j("p-dropdown p-component p-inputwrapper",{"p-disabled":t.disabled,"p-focus":H,"p-dropdown-clearable":t.showClear&&!t.disabled,"p-inputwrapper-filled":d.isNotEmpty(t.value),"p-inputwrapper-focus":H||E},t.className),Ot=dt(),It=vt(),wt=mt(),Et=yt(),Ct=gt(),St=v({id:t.id,ref:B,className:ht,style:t.style,onClick:function(n){return He(n)},onMouseDown:t.onMouseDown,onContextMenu:t.onContextMenu},Le,C("root"));return i.createElement(i.Fragment,null,i.createElement("div",St,It,Ot,wt,Ct,Et,i.createElement(je,te({ref:D,visibleOptions:S,virtualScrollerRef:m},t,{appendTo:k,onClick:$e,onOptionClick:Ye,filterValue:g,hasFilter:P,onFilterClearIconClick:et,resetFilter:se,onFilterInputKeyDown:_e,onFilterInputChange:Qe,getOptionLabel:$,getOptionRenderKey:ut,isOptionDisabled:fe,getOptionGroupChildren:G,getOptionGroupLabel:st,getOptionGroupRenderKey:ct,isSelected:nt,getSelectedOptionIndex:Q,in:E,onEnter:rt,onEntered:at,onExit:lt,onExited:ot,ptm:C}))),bt&&i.createElement(Rt,te({target:B,content:t.tooltip},t.tooltipOptions,{pt:C("tooltip")})))}));Jt.displayName="Dropdown";export{Jt as D};