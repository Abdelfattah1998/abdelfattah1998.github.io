(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),i=a.n(r),c=a("eNIv"),m=a("6uTu"),s=a("STHm");var o=e=>{let{about:t}=e;return i.a.createElement(s.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},i.a.createElement("p",null,t)))},d=(a("Wbzz"),a("hbLQ"));var p=e=>{let{experience:t}=e;return t.length?i.a.createElement(s.a,{title:"Experience"},t.map(e=>i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link}))):null};var u=e=>{let{projects:t}=e;return t.length?i.a.createElement(s.a,{title:"Projects"},t.map(e=>i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link}))):null};var E=e=>{let{skills:t}=e;return i.a.createElement(s.a,{title:"Skills"},t.map(e=>i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})))},k=a("ivnd");t.default=e=>{let{data:t}=e;const a=l()(t,"site.siteMetadata.about",!1),n=l()(t,"site.siteMetadata.projects",!1),r=t.allMarkdownRemark.edges,s=l()(t,"site.siteMetadata.experience",!1),d=l()(t,"site.siteMetadata.skills",!1),g=!r||!r.length;return i.a.createElement(m.a,null,i.a.createElement(k.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:g}),a&&i.a.createElement(o,{about:a}),n&&n.length&&i.a.createElement(u,{projects:n}),s&&s.length&&i.a.createElement(p,{experience:s}),d&&d.length&&i.a.createElement(E,{skills:d}))}},STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);const r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",m="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=e=>{let{title:t,children:a}=e;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:i},l.a.createElement("h2",{className:c},t)),l.a.createElement("div",{className:m},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l);const i="mb-6",c="font-semibold text-gray-900 pb-1",m="text-md text-gray-600 font-light";t.a=e=>{let t,{name:a,description:l,link:s=!1,internal:o=!1}=e;return t=o?r.a.createElement(n.Link,{to:s},a):r.a.createElement("a",{href:s},a),r.a.createElement("div",{className:i},r.a.createElement("h3",{className:`${c} ${s?"hover:underline hover:text-black":""}`},s?t:a),r.a.createElement("p",{className:m},l))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-5151357368059847b8c0.js.map