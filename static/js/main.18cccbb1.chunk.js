(this.webpackJsonptetredux=this.webpackJsonptetredux||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(6),a=n.n(i),o=(n(18),n(2)),u=n(8),s=n(3),j="GAME/START",O="GAME/PAUSE",d="GAME/RESUME",b="GAME/OVER",l="GAME/UPDATE_FIELD",f=0,p=1,A=2,v=3,h=4,E=5,g=6,x=7,m=[[[f,f,f,f],[f,f,f,f],[f,f,f,f],[f,f,f,f]]],w={O:[[[f,f,f,f],[f,p,p,f],[f,p,p,f],[f,f,f,f]]],I:[[[f,f,f,f],[A,A,A,A],[f,f,f,f],[f,f,f,f]],[[f,f,A,f],[f,f,A,f],[f,f,A,f],[f,f,A,f]],[[f,f,f,f],[f,f,f,f],[A,A,A,A],[f,f,f,f]],[[f,A,f,f],[f,A,f,f],[f,A,f,f],[f,A,f,f]]],T:[[[f,f,f,f],[v,v,v,f],[f,v,f,f],[f,f,f,f]],[[f,v,f,f],[v,v,f,f],[f,v,f,f],[f,f,f,f]],[[f,v,f,f],[v,v,v,f],[f,f,f,f],[f,f,f,f]],[[f,v,f,f],[f,v,v,f],[f,v,f,f],[f,f,f,f]]],S:[[[f,f,f,f],[f,h,h,f],[h,h,f,f],[f,f,f,f]],[[f,h,f,f],[f,h,h,f],[f,f,h,f],[f,f,f,f]]],Z:[[[f,f,f,f],[E,E,f,f],[f,E,E,f],[f,f,f,f]],[[f,f,E,f],[f,E,E,f],[f,E,f,f],[f,f,f,f]]],J:[[[g,f,f,f],[g,g,g,f],[f,f,f,f],[f,f,f,f]],[[f,g,g,f],[f,g,f,f],[f,g,f,f],[f,f,f,f]],[[f,f,f,f],[g,g,g,f],[f,f,g,f],[f,f,f,f]],[[f,g,f,f],[f,g,f,f],[g,g,f,f],[f,f,f,f]]],L:[[[f,f,f,f],[x,x,x,f],[x,f,f,f],[f,f,f,f]],[[x,x,f,f],[f,x,f,f],[f,x,f,f],[f,f,f,f]],[[f,f,x,f],[x,x,x,f],[f,f,f,f],[f,f,f,f]],[[f,x,f,f],[f,x,f,f],[f,x,x,f],[f,f,f,f]]]},y=function(){return m},S=function(){var e=Object.keys(w),t=e[Math.floor(Math.random()*e.length)];return w[t]},T=function(){return new Array(20).fill().map((function(){return new Array(10).fill(f)}))},I={started:!1,paused:!0,score:0,field:T()};var R="TETROMINO/NEXT",D="TETROMINO/MOVE_DOWN",N="TETROMINO/MOVE_LEFT",M="TETROMINO/MOVE_RIGHT",k="TETROMINO/DROP",B="TETROMINO/ROTATE",U={currentShape:y(),nextShape:y(),x:3,y:-3,rotation:0};var L=Object(u.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case j:return Object(s.a)(Object(s.a)({},e),{},{started:!0,paused:!1,score:0,field:T()});case O:return Object(s.a)(Object(s.a)({},e),{},{paused:!0});case d:return Object(s.a)(Object(s.a)({},e),{},{paused:!1});case b:return Object(s.a)(Object(s.a)({},e),{},{started:!1,paused:!1});case l:return Object(s.a)(Object(s.a)({},e),{},{field:c.updatedField,score:e.score+c.scoreToAdd});default:return e}},tetromino:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case R:return Object(s.a)(Object(s.a)({},e),{},{currentShape:c.startShape?c.startShape:e.nextShape,nextShape:c.newShape,x:3,y:-3,rotation:0});case D:return Object(s.a)(Object(s.a)({},e),{},{y:e.y+1});case N:return Object(s.a)(Object(s.a)({},e),{},{x:e.x-1});case M:return Object(s.a)(Object(s.a)({},e),{},{x:e.x+1});case k:return Object(s.a)(Object(s.a)({},e),{},{y:c.y});case B:return Object(s.a)(Object(s.a)({},e),{},{rotation:c.rotation});default:return e}}}),J=Object(u.b)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),G=(n(25),n(1));function Y(){return Object(G.jsxs)("div",{className:"app-header",children:[Object(G.jsx)("h1",{children:"TETREDUX"}),Object(G.jsxs)("h2",{children:["A ",Object(G.jsx)("i",{children:"match-falling-blocks"})," clone, created with react & redux"]})]})}n(27);function Q(e){var t=e.colorIndex;return Object(G.jsx)("div",{className:"block color-".concat(t)})}function P(){return{type:b,payload:null}}function W(e){return{type:l,payload:e}}function V(e){return{type:R,payload:e}}var Z=n(13),F=function(e,t,n,c){for(var r=e[0].length-1,i=e.length-1,a=!0,o=0;o<t.length;o++)for(var u=0;u<t[o].length;u++)if(0!==t[o][u]){var s=u+n,j=o+c,O=null;if(null!=e[j]&&(O=e[j][s]),s<0||s>r||j>i||O>0){a=!1;break}}return a},X=function(e,t,n,c){var r=Object(Z.a)(e),i=!1;t.forEach((function(e,t){e.forEach((function(e,a){if(0!==e){var o=a+n,u=t+c;if(u<0)return void(i=!0);r[u][o]=e}}))}));var a=0;if(!i){for(var o=0;o<r.length;o++)-1===r[o].indexOf(0)&&(a++,r.splice(o,1),r.unshift(Array(10).fill(0)));a>4&&(a=4)}return{updatedField:r,score:[0,40,100,300,1200][a],gameOver:i}};n(28);function C(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.game.started})),n=Object(o.c)((function(e){return e.game.paused})),r=Object(o.c)((function(e){return e.game.field})),i=Object(o.c)((function(e){return e.tetromino.currentShape})),a=Object(o.c)((function(e){return e.tetromino.x})),u=Object(o.c)((function(e){return e.tetromino.y})),s=Object(o.c)((function(e){return e.tetromino.rotation}));return function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(t&&!n)if(F(r,i[s],a,u+1))e({type:D,payload:null});else{var c=X(r,i[s],a,u),o=c.updatedField,j=c.score,O=c.gameOver;if(e(W({updatedField:o,scoreToAdd:j})),O)e(P());else{var d=S();e(V({newShape:d}))}}}),400),Object(G.jsx)("div",{className:"game-field",children:r.map((function(e,t){return e.map((function(e,n){var c=i[s],r=n-a,o=t-u,j=e;return r>=0&&r<4&&o>=0&&o<4&&(j=0===c[o][r]?e:c[o][r]),Object(G.jsx)(Q,{colorIndex:j},"field-".concat(t).concat(n))}))}))})}n(29);function H(){var e=Object(o.c)((function(e){return e.tetromino.nextShape}));return Object(G.jsxs)("div",{className:"preview-field",children:[Object(G.jsx)("h1",{children:"PREVIEW"}),Object(G.jsx)("div",{className:"preview",children:e&&e[0].map((function(e,t){return e.map((function(e,n){return Object(G.jsx)(Q,{colorIndex:e},"preview-".concat(t).concat(n))}))}))})]})}n(30);function K(){var e=Object(o.c)((function(e){return e.game.score}));return Object(G.jsxs)("div",{className:"scoreboard",children:[Object(G.jsx)("h1",{children:"SCORE"}),Object(G.jsx)("h2",{children:e})]})}var z=n(4),q=n(12),_=n.n(q),$=(n(31),"Start Game");function ee(){var e=Object(c.useState)($),t=Object(z.a)(e,2),n=t[0],r=t[1],i=Object(o.c)((function(e){return e.game.started})),a=Object(o.c)((function(e){return e.game.paused}));return Object(c.useEffect)((function(){r(i?a?"Game Paused":"":a?$:"Game Over")}),[n,i,a]),Object(G.jsx)("div",{className:_()("message-popup",{show:!i||a}),children:Object(G.jsx)("h1",{children:n})})}n(32);function te(e){var t=e.title,n=e.description;return Object(G.jsxs)("div",{className:"shortcut",children:[Object(G.jsx)("kbd",{children:t}),Object(G.jsx)("span",{children:n})]})}n(33);function ne(){return Object(G.jsxs)("div",{className:"instructions",children:[Object(G.jsx)("h1",{children:"Instructions"}),Object(G.jsx)(te,{title:"Space",description:"Start Game"}),Object(G.jsx)(te,{title:"P",description:"Pause / Resume"}),Object(G.jsx)(te,{title:"\u2190",description:"Move Left"}),Object(G.jsx)(te,{title:"\u2192",description:"Move Right"}),Object(G.jsx)(te,{title:"\u2193",description:"Drop"}),Object(G.jsx)(te,{title:"\u2191",description:"Rotate"})]})}n(34);function ce(){return Object(G.jsxs)("div",{className:"app-body",children:[Object(G.jsxs)("div",{className:"game-field",children:[Object(G.jsx)(C,{}),Object(G.jsx)(ee,{})]}),Object(G.jsxs)("div",{className:"stats",children:[Object(G.jsx)(H,{}),Object(G.jsx)(K,{}),Object(G.jsx)(ne,{})]})]})}n(35);function re(){return Object(G.jsxs)("div",{className:"app-footer",children:[Object(G.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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",width:"20px",alt:"Github Logo"}),Object(G.jsx)("a",{className:"github",href:"https://github.com/bilakispa/tetredux",children:"Github Repo"})]})}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=Object(c.useState)(!1),i=Object(z.a)(r,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){var c=function(n){n.key===e&&(o(!0),t())},r=function(t){t.key===e&&(o(!1),n())};return window.addEventListener("keydown",c),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",r)}}),[e,t,n]),a}function ae(){var e=Object(c.useState)(!1),t=Object(z.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(z.a)(i,2),u=a[0],s=a[1],b=Object(c.useState)(!1),l=Object(z.a)(b,2),f=l[0],p=l[1],A=Object(c.useState)(!1),v=Object(z.a)(A,2),h=v[0],E=v[1],g=Object(c.useState)(!1),x=Object(z.a)(g,2),m=x[0],w=x[1],y=ie(" "),T=ie("p",(function(){return r(!0)}),(function(){return r(!1)})),I=ie("ArrowLeft",(function(){return s(!0)}),(function(){return s(!1)})),R=ie("ArrowRight",(function(){return p(!0)}),(function(){return p(!1)})),D=ie("ArrowDown",(function(){return E(!0)}),(function(){return E(!1)})),U=ie("ArrowUp",(function(){return w(!0)}),(function(){return w(!1)})),L=Object(o.b)(),J=Object(o.c)((function(e){return e.game.started})),G=Object(o.c)((function(e){return e.game.paused})),Y=Object(o.c)((function(e){return e.game.field})),Q=Object(o.c)((function(e){return e.tetromino.currentShape})),Z=Object(o.c)((function(e){return e.tetromino.x})),C=Object(o.c)((function(e){return e.tetromino.y})),H=Object(o.c)((function(e){return e.tetromino.rotation})),K=function(){if(!J){var e=S(),t=S();L(V({startShape:e,newShape:t})),L({type:j,payload:null})}},q=function(){J&&L(G?{type:d,payload:null}:{type:O,payload:null})},_=function(){J&&!G&&F(Y,Q[H],Z-1,C)&&L({type:N,payload:null})},$=function(){J&&!G&&F(Y,Q[H],Z+1,C)&&L({type:M,payload:null})},ee=function(){if(J&&!G){for(var e=C+1;F(Y,Q[H],Z,e);)e++;L({type:k,payload:{y:e-1}});var t=X(Y,Q[H],Z,e-1),n=t.updatedField,c=t.score,r=t.gameOver;if(L(W({updatedField:n,scoreToAdd:c})),r)L(P());else{var i=S();L(V({newShape:i}))}}},te=function(){if(J&&!G){var e=(H+1)%Q.length;F(Y,Q[e],Z,C)&&L({type:B,payload:{rotation:e}})}};return Object(c.useEffect)((function(){y?K():T&&!n?q():I&&!u?_():R&&!f?$():D&&!h?ee():U&&!m&&te()})),null}n(36);var oe=function(){return ae(),Object(G.jsxs)("div",{className:"app",children:[Object(G.jsx)(Y,{}),Object(G.jsx)(ce,{}),Object(G.jsx)(re,{})]})};a.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(o.a,{store:J,children:Object(G.jsx)(oe,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.18cccbb1.chunk.js.map