(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(3),o=(c(9),c(10),c(1)),l=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var e=Object(o.useState)(8),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)("Jam"),r=Object(a.a)(n,2),d=r[0],u=r[1];return Object(l.jsxs)("main",{className:"section container",children:[null===c?Object(l.jsx)("h1",{className:"title is-flex is-align-items-center",children:"No goods selected"}):Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(d," is selected"),Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return s(null)}})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:i.map((function(e,t){return Object(l.jsxs)("tr",{"data-cy":"Good",className:"".concat(c===t&&"has-background-success-light"),children:[Object(l.jsx)("td",{children:Object(l.jsx)("button",{"data-cy":"".concat(c===t?"RemoveButton":"AddButton"),type:"button",className:"button ".concat(c===t&&"is-info"),onClick:c===t?function(t){s(null),u(e)}:function(c){s(t),u(e)},children:c===t?"-":"+"})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},i[t])}))})})]})};n.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9906728a.chunk.js.map