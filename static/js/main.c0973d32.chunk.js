(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(8),r=a.n(l),c=(a(23),a(9)),d=a(10),u=a(15),s=a(11),o=a(16),p=(a(24),a(25),a(12)),m=a.n(p),h=function(e){var t="Clear"===e.children||"="===e.children?"button-double":"button",a="Del"===e.children?"button-delete":"",n=e.operator?"operator":"",l=m()(t,n,a);return i.a.createElement("div",{id:e.id,className:l,onClick:function(){return e.handleClick(e.operator?e.operator:e.children)}},e.children)},v=(a(26),function(e){return i.a.createElement("div",{id:e.id,className:"input"},e.children)}),I=a(30),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).addZeroToInput=function(e){"0"!==a.state.input&&a.setState({input:a.state.input+e,previousVal:e})},a.addToInput=function(e){var t=["+","-","*","/"],n=t.includes(e),i=a.state,l=i.decimalInNumber,r=i.input,c=i.evaluated,d=i.previousVal,u=i.negativeSignInNumber;if(l&&"."===e||u&&"-"===e)return null;if(("-"===e&&"0"===r||"-"===e&&t.includes(d))&&a.setState({negativeSignInNumber:!0}),c||"0"===r)c&&n?a.setState({input:r+e,evaluated:!1,previousVal:e,negativeSignInNumber:!1}):a.setState({input:e,evaluated:!1,previousVal:e,decimalInNumber:!1,negativeSignInNumber:!1});else{if("-"===e&&["+","*","/"].includes(d));else if(n&&t.includes(d))return a.clearLastOperator(e),null;a.setState({input:r+e,evaluated:!1,previousVal:e,negativeSignInNumber:!1})}"."===e&&a.setState({decimalInNumber:!0}),n&&a.setState({decimalInNumber:!1})},a.clearInput=function(){a.setState({input:"0",previousVal:"",previousAnswer:"",evaluated:!1,decimalInNumber:!1,negativeSignInNumber:!1})},a.clearLastOperator=function(e){var t=a.state,n=t.previousVal,i=t.input,l=["+","-","*","/"],r=(l.includes(e)&&"-"===n&&l.includes(i[i.length-1])?i.slice(0,-2):i.slice(0,-1))+e;a.setState({input:r||"0",previousVal:e})},a.clearLast=function(){var e=a.state.input.slice(0,-1);a.setState({previousVal:a.state.input.slice(a.state.input.length-2,a.state.input.length-1),input:e||"0"})},a.evaluate=function(){var e=Object(I.a)(a.state.input).toString();a.setState({input:e,evaluated:!0,previousAnswer:e})},a.state={input:"0",previousVal:"",previousAnswer:"",evaluated:!1,decimalInNumber:!1,negativeSignInNumber:!1},a}return Object(o.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"calc-wrapper"},i.a.createElement("div",{className:"row"},i.a.createElement(v,{id:"display"},this.state.input)),i.a.createElement("div",{className:"row"},i.a.createElement(h,{id:"clear",handleClick:this.clearInput},"Clear"),i.a.createElement(h,{id:"clearlast",handleClick:this.clearLast},"Del"),i.a.createElement(h,{id:"divide",operator:"/",handleClick:this.addToInput},"\xf7")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{id:"seven",handleClick:this.addToInput},"7"),i.a.createElement(h,{id:"eight",handleClick:this.addToInput},"8"),i.a.createElement(h,{id:"nine",handleClick:this.addToInput},"9"),i.a.createElement(h,{id:"multiply",operator:"*",handleClick:this.addToInput},"\xd7")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{id:"four",handleClick:this.addToInput},"4"),i.a.createElement(h,{id:"five",handleClick:this.addToInput},"5"),i.a.createElement(h,{id:"six",handleClick:this.addToInput},"6"),i.a.createElement(h,{id:"subtract",operator:"-",handleClick:this.addToInput},"\u2212")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{id:"one",handleClick:this.addToInput},"1"),i.a.createElement(h,{id:"two",handleClick:this.addToInput},"2"),i.a.createElement(h,{id:"three",handleClick:this.addToInput},"3"),i.a.createElement(h,{id:"add",operator:"+",handleClick:this.addToInput},"+")),i.a.createElement("div",{className:"row"},i.a.createElement(h,{id:"zero",handleClick:this.addZeroToInput},"0"),i.a.createElement(h,{id:"decimal",handleClick:this.addToInput},"."),i.a.createElement(h,{id:"equals",handleClick:this.evaluate},"="))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c0973d32.chunk.js.map