(this["webpackJsonphomework-tld"]=this["webpackJsonphomework-tld"]||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(16),i=n.n(a),o=(n(25),n(20)),s=n(7),u=n.n(s),l=n(17),j=n(5),b=(n(27),n(18));var d=n(19),f=n.n(d),h=n(0);var O=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],d=i[1],O=Object(c.useState)(),p=Object(j.a)(O,2),x=p[0],m=p[1];return Object(c.useEffect)(Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://nathans-backend-store.herokuapp.com/items").then((function(t){return t.data.items}));case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)}))),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Nathan's Amazing Web Store"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{"data-cy":"calculate-total",onClick:function(){m(function(t,e){var n,c=0,r=Object(b.a)(t);try{for(r.s();!(n=r.n()).done;)c+=n.value.price}catch(a){r.e(a)}finally{r.f()}return c}(s))},children:"Calculate total"}),x?Object(h.jsxs)("p",{children:["Total is: ",x]}):null,Object(h.jsx)("p",{children:"Cart: 0"}),Object(h.jsx)("ul",{children:s.map((function(t,e){return Object(h.jsxs)("li",{children:[t.name," \xa0",Object(h.jsx)("button",{onClick:function(e){return function(t){d((function(e){return e.filter((function(e){return e.name!==t.name}))}))}(t)},children:"Remove"})]},e)}))})]}),Object(h.jsx)("div",{className:"inventory-items",style:{display:"flex",flexWrap:"wrap"},children:n.map((function(t,e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:[t.name," | $",t.price]}),Object(h.jsx)("button",{onClick:function(e){return function(t){d((function(e){return[].concat(Object(o.a)(e),[t])}))}(t)},children:"Add to cart"})]},e)}))})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.44bfc024.chunk.js.map