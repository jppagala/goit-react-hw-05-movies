"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{557:function(t,n,e){e.d(n,{Z:function(){return f}});e(791);var r="MovieList_movieListContainer__Rv+1M",a="MovieList_movieList__uFrOZ",c=e(689),u=e(87),i="MoviesListItem_movieItem__lL9vW",o=e(184),s=function(t){var n=t.movie,e=n.title,r=(0,c.TH)();return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:r},children:e})})},f=function(t){var n=t.movies;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("ul",{className:a,children:n.map((function(t){return(0,o.jsx)(s,{movie:t},t.id)}))})})}},233:function(t,n,e){e.d(n,{Ch:function(){return v},Tg:function(){return p},Y5:function(){return d},bV:function(){return s},jC:function(){return f},r7:function(){return h},uV:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(340),i="https://api.themoviedb.org/3",o="a2c7d2d073818941fb1c125f7881370d",s="https://image.tmdb.org/t/p/w500",f="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7T4483J4CFpRqhM-R1dSiLGv-BwRSb_k7Mk3ESIY6DYfCt7kd",p=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},936:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o="Home_home__CMw1J",s=e(557),f=e(233),p=e(184),v=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),m=d[0],h=d[1],l=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,(0,f.Tg)();case 4:n=t.sent,c(n.results),h(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),h(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){l()}),[]),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("h2",{children:"Top 20 Trending Movies"}),m?(0,p.jsx)("div",{children:"Loading..."}):(0,p.jsx)(s.Z,{movies:e})]})}}}]);
//# sourceMappingURL=936.09754482.chunk.js.map