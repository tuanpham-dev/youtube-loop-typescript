(this["webpackJsonpyoutube-loop-typescript"]=this["webpackJsonpyoutube-loop-typescript"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n(0),i=n.n(a),r=n(6),c=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,l=n(18),d=n(34),s=n(76),f=n(12),v=n(24),m={videos:[],playingVideo:null},p=(u={},Object(f.a)(u,"ADD_VIDEO_BY_YOUTUBE_ID",(function(e,t){var n=t.payload,a={id:Math.max.apply(Math,Object(v.a)(e.videos.map((function(e){return e.id}))).concat([0]))+1,youtubeId:n,volume:null,range:[null,null]};return Object(o.a)({},e,{videos:[].concat(Object(v.a)(e.videos),[a])})})),Object(f.a)(u,"ADD_VIDEO",(function(e,t){var n=t.payload,a=Math.max.apply(Math,Object(v.a)(e.videos.map((function(e){return e.id}))).concat([0]));return Object(o.a)({},e,{videos:[].concat(Object(v.a)(e.videos),[Object(o.a)({},n,{id:a+1})])})})),Object(f.a)(u,"REMOVE_VIDEO",(function(e,t){var n=t.payload,a=e.videos.findIndex((function(e){return e.id===n})),i=null;if(null!==a){e.playingVideo===n&&(i=e.videos.length<=1?null:e.videos[a===e.videos.length-1?0:a+1].id);var r=Object(v.a)(e.videos);return r.splice(a,1),null!==i?Object(o.a)({},e,{videos:r,playingVideo:i}):Object(o.a)({},e,{videos:r})}return e})),Object(f.a)(u,"EDIT_VIDEO",(function(e,t){var n=t.payload,a=e.videos.findIndex((function(e){return e.id===n.id}));if(null!==a){var i=Object(v.a)(e.videos);return i.splice(a,1,n),Object(o.a)({},e,{videos:i})}return e})),Object(f.a)(u,"UPDATE_VIDEOS",(function(e,t){var n=t.payload;return Object(o.a)({},e,{videos:n})})),Object(f.a)(u,"PLAY_VIDEO",(function(e,t){var n=t.payload;return e.playingVideo!==n?Object(o.a)({},e,{playingVideo:n}):e})),Object(f.a)(u,"PLAY_FIRST_VIDEO",(function(e){return e.videos.length>0?Object(o.a)({},e,{playingVideo:e.videos[0].id}):e})),Object(f.a)(u,"PLAY_PREVIOUS_VIDEO",(function(e){if(e.videos.length>0){var t,n=e.videos.findIndex((function(t){return t.id===e.playingVideo}));return t=0===n?e.videos.length-1:n-1,Object(o.a)({},e,{playingVideo:e.videos[t].id})}return e})),Object(f.a)(u,"PLAY_NEXT_VIDEO",(function(e){if(e.videos.length>0){var t,n=e.videos.findIndex((function(t){return t.id===e.playingVideo}));return t=n===e.videos.length-1?0:n+1,Object(o.a)({},e,{playingVideo:e.videos[t].id})}return e})),u),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if("function"===typeof p[t.type]){var n=p[t.type];return n(e,t)}return e},b=function(e){var t=Object(s.composeWithDevTools)();return Object(d.createStore)(y,e,t)},E=n(19),g=(n(91),function(e){var t=e.className,n=void 0===t?"":t,o=e.color,a=e.onClick,r=e.children,c=n?n+" button":"button";return o&&(c+=" button--".concat(o)),i.a.createElement("button",{className:c,onClick:a},r)}),O=function(e){var t="",n=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);void 0!==n[2]?t=n[2].split(/[^0-9a-z_-]/i)[0]:t=e;return t},V=(n(92),Object(l.b)((function(e){return{videos:e.videos,playingVideo:e.playingVideo}}),(function(e){return{onAddButtonClick:function(t){e({type:"ADD_VIDEO_BY_YOUTUBE_ID",payload:O(t)})},onPlayButtonClick:function(){e({type:"PLAY_FIRST_VIDEO"})},onStopButtonClick:function(){e({type:"PLAY_VIDEO",payload:null})},onNextButtonClick:function(){e({type:"PLAY_NEXT_VIDEO"})},onPreviousButtonClick:function(){e({type:"PLAY_PREVIOUS_VIDEO"})}}}))((function(e){var t=e.videos,n=e.playingVideo,o=e.onAddButtonClick,r=e.onPlayButtonClick,c=e.onStopButtonClick,u=e.onPreviousButtonClick,l=e.onNextButtonClick,d=Object(a.useState)(""),s=Object(E.a)(d,2),f=s[0],v=s[1],m=t.length,p=null!==n,y=p&&m>1;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"container"},i.a.createElement("a",{href:"/",className:"header__logo"},"YouTube Loop"),m>0&&i.a.createElement("div",{className:"header__controls"},p?i.a.createElement(g,{onClick:c},"Stop"):i.a.createElement(g,{onClick:r},"Play"),y&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{onClick:u},"Previous"),i.a.createElement(g,{onClick:l},"Next"))),i.a.createElement("div",{className:"header__input-group"},i.a.createElement("input",{type:"text",className:"header__input",placeholder:"Enter YouTube URL or Video ID",value:f,onChange:function(e){return v(e.target.value)}}),i.a.createElement("div",{className:"header__input-group-append"},i.a.createElement(g,{color:"blue",onClick:function(){return o(f)}},"Go Loop!")))))}))),_=n(81),j=(n(93),"YouTube Loop in TypeScript"),h=null,I=function(){return h||(h=function(){var e=window;return new Promise((function(t){if("object"!==typeof e.YT||"function"!==typeof e.YT.ready){var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",document.head.append(n),e.onYouTubeIframeAPIReady||(e.onYouTubeIframeAPIReady=function(){t(e.YT)})}else e.YT.ready((function(){t(e.YT)}))}))}()),h},D=function(e){var t=e.youtubeId,n=e.onReady,o=e.onPlaying,r=e.onPaused,c=e.onEnded,u=e.onError,l=Object(a.useRef)(null),d=function(e){"function"===typeof n&&n(e)},s=function(){"function"===typeof u&&u()};return Object(a.useEffect)((function(){I().then((function(e){if(l.current)var n=new e.Player(l.current,{videoId:t,events:{onReady:function(){return d(n)},onError:s,onStateChange:function(e){return function(e,t){1===e.data?"function"===typeof o&&o():2===e.data?"function"===typeof r&&r():0===e.data&&"function"===typeof c&&(t.stopVideo(),c())}(e,n)}}})}))})),i.a.createElement("div",{ref:l})},N=function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),o=e-3600*t-60*n;return t>0?"".concat(t,":").concat(n.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0")):"".concat(n,":").concat(o.toString().padStart(2,"0"))},S=n(61),P=(n(149),n(150),Object(l.b)((function(e){return{videos:e.videos,playingVideo:e.playingVideo}}),(function(e){return{removeVideo:function(t){e(function(e){return{type:"REMOVE_VIDEO",payload:e}}(t))},editVideo:function(t){e(function(e){return{type:"EDIT_VIDEO",payload:e}}(t))},playVideo:function(t){e(function(e){return{type:"PLAY_VIDEO",payload:e}}(t))},playNextVideo:function(){e({type:"PLAY_NEXT_VIDEO"})}}}))((function(e){var t=e.video,n=e.videos,r=e.playingVideo,c=e.removeVideo,u=e.editVideo,l=e.playVideo,d=e.playNextVideo,s=Object(a.useState)(null),f=Object(E.a)(s,2),v=f[0],m=f[1],p=Object(a.useState)(!1),y=Object(E.a)(p,2),b=y[0],O=y[1],V=Object(a.useState)(0),_=Object(E.a)(V,2),h=_[0],I=_[1],P=Object(a.useState)(""),T=Object(E.a)(P,2),k=T[0],C=T[1],Y=Object(a.useState)(!1),A=Object(E.a)(Y,2),w=A[0],B=A[1],R=n.length>1,L=r===t.id,x="video"+(L?" video--active":""),M=Object(a.useRef)(null),U=function(e){v&&v.setVolume(e),u(Object(o.a)({},t,{volume:e}))},F=function(){d(),B(!0)},J=function(){if(v){var e=v.getCurrentTime(),n=v.getPlayerState(),o=v.getVolume();o!==t.volume&&U(o),"number"===typeof t.range[1]&&1===n&&e>t.range[1]&&F()}};return Object(a.useEffect)((function(){var e=setInterval(J,500);return function(){return clearInterval(e)}})),Object(a.useEffect)((function(){return B(!0),function(){return B(!1)}}),[L]),Object(a.useEffect)((function(){v&&w&&(B(!1),L?(v.setVolume(t.volume),v.seekTo(t.range[0],!0),v.playVideo(),document.title=k+" - "+j,null!==M.current&&M.current.scrollIntoView({behavior:"smooth",block:"center"})):(v.pauseVideo(),document.title=j))}),[v,L,k,w,t.volume,t.range]),i.a.createElement("div",{ref:M,className:x},i.a.createElement("div",{className:"video__player"},i.a.createElement(D,{youtubeId:t.youtubeId,onReady:function(e){var n=e.getDuration();O(!1),n?(m(e),I(n),C(e.getVideoData().title),null!==t.volume&&null!==t.range[0]&&null!==t.range[1]||(u(Object(o.a)({},t,{volume:e.getVolume(),range:[0,n]})),L&&(e.setVolume(t.volume),e.seekTo(t.range[0],!0),e.playVideo(),document.title=k+" - "+j))):c(t.id),O(!0)},onPlaying:function(){L||l(t.id)},onEnded:F,onError:function(){c(t.id)}})),b&&i.a.createElement(i.a.Fragment,null,i.a.createElement(S.b,{className:"video__volume-slider",vertical:!0,value:Number(t.volume),onChange:U}),i.a.createElement(S.a,{className:"video__range-slider",max:h,value:[Number(t.range[0]),Number(t.range[1])],onChange:function(e){if(L&&v){var n=v.getCurrentTime();"number"===typeof e[0]&&e[0]>n&&v.seekTo(e[0])}u(Object(o.a)({},t,{range:e}))}}),i.a.createElement("div",{className:"video__info"},"Volume: ".concat(t.volume," \u2014 Range: ").concat(N(Number(t.range[0]))," \u2192 ").concat(N(Number(t.range[1]))))),i.a.createElement("div",{className:"video__buttons"},R&&i.a.createElement(g,{className:"video__move-handle"},"Move"),i.a.createElement(g,{color:"red",onClick:function(){return c(t.id)}},"Remove Video")))}))),T=Object(l.b)((function(e){return{videos:e.videos}}),(function(e){return{updateVideos:function(t){e(function(e){return{type:"UPDATE_VIDEOS",payload:e}}(t))}}}))((function(e){var t=e.videos,n=e.updateVideos;return t.length?i.a.createElement("div",null,i.a.createElement(_.a,{tag:"ul",list:t,setList:n,handle:".video__move-handle",className:"video-list"},t.map((function(e){return i.a.createElement("li",{key:e.id,className:"video-item"},i.a.createElement(P,{video:e}))})))):null})),k=function(){return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"container"},i.a.createElement(T,null)))},C=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(V,null),i.a.createElement(k,null))},Y=(n(151),n(80)),A=n.n(Y),w=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),B=b(Object(o.a)({videos:[],playingVideo:null},w));B.subscribe(A()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(B.getState())}),1e3)),c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.a,{store:B},i.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,n){e.exports=n(152)},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.19d8d49d.chunk.js.map