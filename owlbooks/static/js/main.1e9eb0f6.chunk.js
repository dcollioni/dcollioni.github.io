(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t){e.exports={apiUrl:"http://localhost:3001/api",encryptKey:">9=V8dA2tZR4B,"}},28:function(e,t){e.exports={apiUrl:"",encryptKey:">9=V8dA2tZR4B,"}},29:function(e,t){e.exports={apiUrl:"",encryptKey:">9=V8dA2tZR4B,"}},38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},60:function(e,t,a){var n={"./":9,"./dev":22,"./dev.js":22,"./index":9,"./index.js":9,"./production":28,"./production.js":28,"./staging":29,"./staging.js":29};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=60},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a.n(n),c=(a(43),a(0)),l=a.n(c),o=a(16),s=a(32),i=a(70),u=a(71),p=a(68),d=a(69),m=a(5),E=a(33),O=a(34),f=a(8),b=a(19),h="LOGIN",j="LOGOUT";var v={user:null};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)({},e,{user:t.user});case j:return Object(b.a)({},e,{user:null});case f.REHYDRATE:return t.payload?Object(b.a)({},e,{user:t.payload.user}):e;default:return e}},w=a(35),N=a.n(w),g=a(36),_=a.n(g),k=a(9),R=_()({secretKey:k.default.encryptKey}),D={key:"root",storage:N.a,whitelist:["user"],transforms:[R]},U=Object(f.persistReducer)(D,y),x=[E.a,Object(O.createLogger)()],A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,L=Object(m.e)(U,A(m.a.apply(void 0,x))),P=Object(f.persistStore)(L),V=a(10),B=a(11),C=a(17),K=a(12),T=a(18),F=a(72),I=a(67),S=(a(61),function(e){var t=e.children;return l.a.createElement("main",{className:"app"},l.a.createElement("header",{className:"app-header"},l.a.createElement("h1",{className:"app-title"},l.a.createElement(I.a,{to:"/"},"owlbooks"))),l.a.createElement("section",{className:"content"},t),l.a.createElement("footer",null))}),G=function(e){function t(){return Object(V.a)(this,t),Object(C.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return l.a.createElement(S,{children:this.props.children})}}]),t}(c.Component),J=Object(F.a)(Object(o.b)(function(e){return{user:e.user}})(G)),M=(a(64),function(){return l.a.createElement("div",{id:"home"},l.a.createElement("header",null,l.a.createElement("h2",null,"My books")),l.a.createElement("div",{className:"list"},l.a.createElement(I.a,{className:"item",to:""},l.a.createElement("span",null,"Harry Potter e a Pedra Filosofal"),l.a.createElement("span",null,"JK Rowling"),l.a.createElement("span",null,"Fic\xe7\xe3o"),l.a.createElement("span",null,"240")),l.a.createElement(I.a,{className:"item",to:""},l.a.createElement("span",null,"Fortaleza Digital"),l.a.createElement("span",null,"Dan Brown"),l.a.createElement("span",null,"Fic\xe7\xe3o"),l.a.createElement("span",null,"520"))),l.a.createElement(I.a,{className:"floating-button add",to:"/",title:"Add book"}))}),Z=function(e){function t(){return Object(V.a)(this,t),Object(C.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return l.a.createElement(M,null)}}]),t}(c.Component),H=l.a.createElement(o.a,{store:L},l.a.createElement(s.PersistGate,{loading:null,persistor:P},l.a.createElement(i.a,null,l.a.createElement(J,null,l.a.createElement(u.a,null,l.a.createElement(p.a,{path:"/",component:Z,exact:!0}),l.a.createElement(d.a,{from:"*",to:"/"}))))));r.a.render(H,document.getElementById("root"))},9:function(e,t,a){"use strict";a.r(t);var n,r=Object({NODE_ENV:"production",PUBLIC_URL:"/owlbooks"}).REACT_APP_ENV||"production";switch(r){case"production":case"staging":case"dev":n=a(60)("./".concat(r));break;case"development":n=a(22);break;default:throw new Error("Invalid NODE_ENV value: ".concat(r))}var c=Object.assign({},n);t.default=c}},[[38,2,1]]]);
//# sourceMappingURL=main.1e9eb0f6.chunk.js.map