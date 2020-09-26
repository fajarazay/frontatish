(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(155)),c={id:"switch",title:"Switch",sidebar_label:"Switch"},i={id:"switch",isDocsHomePage:!1,title:"Switch",description:"Switch component gives an option to the user to toggle between two option to either pick one of the value base the switch value,this can be helpful when you are giving the user an option to choose between any two option.",source:"@site/docs/switch.md",permalink:"/viserion/docs/switch",editUrl:"https://github.com/Groww/viserion/edit/alpha/docs/documentation/docs/switch.md",sidebar_label:"Switch",sidebar:"someSidebar",previous:{title:"EmptyView",permalink:"/viserion/docs/emptyview"},next:{title:"Dropdown",permalink:"/viserion/docs/dropdown"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"isOn",id:"ison",children:[]},{value:"onColor",id:"oncolor",children:[]},{value:"offColor",id:"offcolor",children:[]},{value:"onToggle",id:"ontoggle",children:[]},{value:"size",id:"size",children:[]},{value:"icon",id:"icon",children:[]},{value:"disabled",id:"disabled",children:[]}]}],l={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Switch component gives an option to the user to toggle between two option to either pick one of the value base the switch value,this can be helpful when you are giving the user an option to choose between any two option."),Object(b.b)("div",{className:"image-horizontal-preview"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/viserion/img/switch.png",alt:"NumberPad",height:"50"})),Object(b.b)("figure",null,Object(b.b)("img",{src:"/viserion/img/switch_2.png",alt:"NumberPad",height:"50"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Switch\n  isOn={isOn}\n  onColor="#00D09C"\n  offColor="#E6E7E8"\n  // label="Example label"\n  // size="small"\n  onToggle={onThemeSwitch}\n/>\n')),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"ison"},"isOn"),Object(b.b)("p",null,"A boolean value to keep track whether the switch value is active or deactive."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"oncolor"},"onColor"),Object(b.b)("p",null,"color which you want to have as switch component's background when its ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"ON"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#00D09C",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"offcolor"},"offColor"),Object(b.b)("p",null,"color which you want to have as switch component's background when its ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"OFF"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#EBEBF5",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"ontoggle"},"onToggle"),Object(b.b)("p",null,"callback function that will be called to set ",Object(b.b)("inlineCode",{parentName:"p"},"isOn")," in your Parent component's state to control you ui with it."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"size"},"size"),Object(b.b)("p",null,"you can set this props to control your dimension of switch"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"enum('sm', 'md', 'lg') ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"md",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"icon"},"icon"),Object(b.b)("p",null,"You can pass custom icon for switch to make the ui more impressive,like if you are having light mode and dark mode then you can pass sunlight and moonlight icon into switch to make you switch to look much more good.\nyou can use ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-vector-icons"}),"react-native-vector-icons")," to send ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"ON"))," & ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"OFF"))," icons"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ReactNode ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"disabled"},"disabled"),Object(b.b)("p",null,"boolean to disable click event on the switch"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No",Object(b.b)("img",{width:"500"}))))))}O.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),O=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=O(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=O(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||j[m]||b;return a?r.a.createElement(d,i(i({ref:t},l),{},{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);