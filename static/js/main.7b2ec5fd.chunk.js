(this["webpackJsonp20-react-portfolio"]=this["webpackJsonp20-react-portfolio"]||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/allan-heroImg.cd22da85.jpg"},132:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/stack-tracker.02dfe12b.png"},133:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/celiac.0728ee4e.png"},134:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/budget-tracker.32c38cd2.png"},135:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/on-hand-cooking.b697851c.png"},136:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/weather-dashboard.794c64b7.png"},163:function(e,t){},164:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),n=a(85),c=a.n(n),r=(a(94),a(6)),l=(a(95),a(3)),o=function(e){var t=e.navOptions,a=e.currentOption,i=e.setCurrentOption;return Object(l.jsx)("nav",{className:"navbar is-justify-content-space-evenly is-transparent",role:"navigation","aria-label":"main navigation",children:Object(l.jsxs)("div",{className:"navbar-menu is-active",children:[Object(l.jsx)("div",{className:"navbar-start",children:Object(l.jsx)("p",{className:" is-large is-size-2 has-text-info-dark is-centered m-4 allan-user",children:"Allan Pirillis"})}),Object(l.jsx)("div",{id:"navbarHamburger",className:"navbar-end has-text-dark ",children:t.map((function(e){return Object(l.jsx)("a",{className:"navbar-item has-text-info-dark is-size-4 is-family-sans-serif ".concat(a===e.name&&" has-text-weight-bold is-underlined is-family-code"),href:"#".concat("About Me"===e.name?"About":e.name),onClick:function(){return i(e.name)},children:e.name},e.name)}))})]})})};var d=function(e){var t=e.navOptions,a=e.currentOption,i=e.setCurrentOption;return Object(l.jsx)(o,{navOptions:t,currentOption:a,setCurrentOption:i})},j=a(89);var b=function(){return Object(l.jsx)("section",{className:"hero is-small notification",children:Object(l.jsxs)("div",{className:"hero-body ",children:[Object(l.jsx)("h1",{className:"is-size-2 ml-2 mb-5 has-text-grey is-family-code ",children:"About Me"}),Object(l.jsx)(j.a,{name:"Allan",size:"250",src:a(131).default,round:!0}),Object(l.jsx)("span",{className:"is-size-3 is-flex mt-6",children:'"\u03a6\u03b1\u03af \u03c6\u03cd\u03bb\u03b1\u03be\u03b5 \u03b1\u03bb\u03bb\u03ac \u03b4\u03bf\u03c5\u03bb\u03b5\u03af\u03b1 \u03bc\u03b5\u03bd \u03c6\u03c5\u03bb\u03ac\u03be\u03b5\u03b9\u03c2"'}),Object(l.jsxs)("div",{className:"mt-6",children:["A bilingual Individual that graduated with a B.S in Computer Science from NDSU that aspires to continuously learn. Growing up with family on both sides of an ocean has taught me the importance of engaging in relationships but also the value of maintaining them. With constant growth and fluent communication I am eager to apply my skills as a Software Developer in our fast paced technological world."," ",Object(l.jsx)("span",{className:"content is-small",children:'quote: "Save food but don\'t save any work"'})]})]})})},u=a(4),m=a(51);var h=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(i.useState)({name:"",email:"",message:""}),c=Object(r.a)(n,2),o=c[0],d=c[1];function j(e){if("email"===e.target.name){var t=(i=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(i).toLowerCase()));s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));var i;a||d(Object(m.a)(Object(m.a)({},o),{},Object(u.a)({},e.target.name,e.target.value))),console.log("errorMessage",a)}return Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"container is-fluid",children:Object(l.jsxs)("div",{className:"notification has-background-light",children:[Object(l.jsx)("h1",{className:"is-size-2 ml-2 mb-5 has-text-grey is-family-code",children:"Contact Me"}),Object(l.jsxs)("div",{className:"field",onSubmit:function(e){e.preventDefault(),console.log(o)},children:[Object(l.jsx)("label",{className:"label is-family-code",children:"Name"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Text input",onBlur:j,name:"name"})})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label is-family-code",children:"Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{className:"input",type:"email",placeholder:"@gmail.com",onBlur:j,name:"email"}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),Object(l.jsx)("span",{className:"icon is-small is-right",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label is-family-code",children:"Message"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{className:"textarea",placeholder:"Textarea",onBlur:j,name:"message"})})]}),a&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{classNameName:"is-danger",children:a})}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{className:"button is-link is-family-code",type:"submit",children:"Submit"})})})]})})})},f=a(27),O=function(e){var t=e.projects;return Object(l.jsx)("div",{className:"container is-centered",children:Object(l.jsx)("div",{className:"notification has-background-light",children:Object(l.jsx)("div",{className:"tile is-ancestor is-flex-wrap-wrap is-justify-content-space-between",children:t.map((function(e){return Object(l.jsx)("div",{className:"tile is-5 is-parent m-2 img-container",children:Object(l.jsxs)("div",{className:"tile is-child",children:[Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"project-img",children:Object(l.jsx)("img",{src:e.image,className:"project-img",alt:e.title})}),Object(l.jsx)("nav",{className:"level is-block img-icon ",children:Object(l.jsxs)("div",{className:"level-item is-block has-text-centered",children:[Object(l.jsx)("a",{className:"is-size-5 ",href:e.link,rel:"noreferrer",target:"_blank",children:e.title}),Object(l.jsx)("a",{className:"ml-5 is-size-2",href:e.githubLink,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(f.a,{})})]})})]})},e.title)}))})})})},p=function(){var e=[{title:"Stack Tracker",link:"https://sleepy-thicket-12395.herokuapp.com/",githubLink:"https://github.com/stack-tracker/stack-tracker",image:a(132).default},{title:"Celiac Tackboard",link:"https://polar-brook-06864.herokuapp.com/",githubLink:"https://github.com/celiac-tackboard/celiac-tackboard",image:a(133).default},{title:"Budget Tracker",link:"https://budget-tracker34.herokuapp.com/",githubLink:"https://github.com/allanp94/19-pwa-budget-tracker",image:a(134).default},{title:"On Hand Cooking",link:"https://cookitanddontburnit.github.io/onHandCooking/",githubLink:"https://github.com/cookItAndDontBurnIt/onHandCooking",image:a(135).default},{title:"Weather Dashboard",link:"https://allanp94.github.io/06-weather-dashboard/",githubLink:"https://github.com/allanp94/06-weather-dashboard",image:a(136).default}];return Object(l.jsx)("section",{className:"hero is-small notification",children:Object(l.jsxs)("div",{className:"hero-body",children:[Object(l.jsx)("h1",{className:"title has-text-grey is-family-code",children:"Projects"}),Object(l.jsx)(O,{projects:e})]})})},x=function(){return Object(l.jsx)("footer",{class:"footer notification",children:Object(l.jsx)("div",{class:"content has-text-centered",children:Object(l.jsxs)("div",{class:"level is-mobile",children:[Object(l.jsx)("div",{class:"level-item has-text-centered",children:Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://github.com/allanp94",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(f.a,{className:"is-size-3"})})})}),Object(l.jsx)("div",{class:"level-item has-text-centered",children:Object(l.jsx)("div",{children:Object(l.jsxs)("span",{className:"content is-small",children:["Created and Designed by"," ",Object(l.jsx)("span",{className:"allan-user is-small",children:"Allan Pirillis"})]})})}),Object(l.jsx)("div",{class:"level-item has-text-centered",children:Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/allan-pirillis/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(f.b,{className:"is-size-3"})})})})]})})})},g=a(28),v=a(88),k=a.p+"static/media/resumeAPirillis.761fc9cb.pdf";g.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(g.c.version,"/pdf.worker.js");var N=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),a=(t[0],t[1]),s=Object(i.useState)(1),n=Object(r.a)(s,2),c=n[0];n[1];var o=function(){var e="undefined"!==typeof window;function t(){return{width:e?window.innerWidth:null,height:e?window.innerHeight:null}}var a=Object(i.useState)(t()),s=Object(r.a)(a,2),n=s[0],c=s[1];return Object(i.useEffect)((function(){if(e){var a=function(){c(t())};return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}}),[e]),n}(),d=o.width,j=o.height;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("a",{href:k,target:"_blank",rel:"noopener noreferrer",download:!0,className:"is-size-3",children:[Object(l.jsx)(v.a,{}),"Download File"]}),Object(l.jsx)(g.a,{file:k,onLoadSuccess:function(e){var t=e.numPages;a(t)},children:Object(l.jsx)(g.b,{pageNumber:c,width:d,height:j})})]})};var w=function(){var e=[{name:"About Me"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}],t=Object(i.useState)(e[0]),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{navOptions:e,currentOption:s,setCurrentOption:n}),function(e){switch(e){case"About Me":return Object(l.jsx)(b,{});case"Portfolio":return Object(l.jsx)(p,{});case"Contact":return Object(l.jsx)(h,{});case"Resume":return Object(l.jsx)(N,{});default:return Object(l.jsx)(b,{})}}(s),Object(l.jsx)(x,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),s(e),n(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),y()},84:function(e,t){},94:function(e,t,a){},95:function(e,t,a){}},[[168,1,2]]]);
//# sourceMappingURL=main.7b2ec5fd.chunk.js.map