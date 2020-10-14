(this["webpackJsonpboxnovel-scraper"]=this["webpackJsonpboxnovel-scraper"]||[]).push([[0],{163:function(e,t,a){e.exports=a(378)},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},195:function(e,t){},209:function(e,t){},211:function(e,t){},378:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(160),c=a.n(o),l=(a(168),a(12)),s=a(13),i=a(7),u=a(15),m=a(14),g=(a(169),a(170),a(37)),d=a.n(g),h=a(92),f=a(161),v=a.n(f),p={Light:{foreground:"text-gray-800",background:"bg-gray-200"},Dark:{foreground:"text-gray-400",background:"bg-gray-800"}},b=r.a.createContext({theme:p.Dark,toggleTheme:function(){}}),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selectedTheme:p.Dark},n.toggleTheme=n.toggleTheme.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"toggleTheme",value:function(){this.setState((function(e){return{selectedTheme:e.selectedTheme===p.Dark?p.Light:p.Dark}}))}},{key:"render",value:function(){var e=this.props.children,t=this.state.selectedTheme;return r.a.createElement(b.Provider,{value:{theme:t,toggleTheme:this.toggleTheme}},e)}}]),a}(r.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentItems,a=e.totalItems;return console.log(a),r.a.createElement("div",{className:"w-full bg-gray-400"},r.a.createElement("div",{className:"h-6 bg-blue-500",style:{width:"".concat(t/a*100,"%")}}),r.a.createElement("div",{className:"flex justify-center items-center",style:{marginTop:"-1.5rem"}},r.a.createElement("span",{className:"font-medium mr-2"},"".concat(t,"/").concat(a)),r.a.createElement("span",null,"".concat(t/a*100,"%"))))}}]),a}(r.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={elements:[],pagesLoaded:0,totalPages:0,isLoading:!1},n.loadSinglePage=n.loadSinglePage.bind(Object(i.a)(n)),n.loadPages=n.loadPages.bind(Object(i.a)(n)),n.clearPage=n.clearPage.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.loadPage(this.loadPages),this.props.clearPage(this.clearPage)}},{key:"loadSinglePage",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.novelId,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://boxnovel.com/novel/".concat(a,"/chapter-").concat(t,"/")).then((function(e){return e.text()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadPages",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,n,r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,a=t.chapterFrom,n=t.chapterTo,r=[],this.setState({isLoading:!0,pagesLoaded:0,totalPages:n-a+1}),o=a;case 4:if(!(o<=n)){e.next=13;break}return e.next=7,this.loadSinglePage(o);case 7:(c=e.sent)&&function(){var e=v.a.load(c),t=!1,a=e("div.text-left");a.find("h1, h2, h3, h4, h5, h6").each((function(a,n){r.push({isTitle:!0,value:e(n).text()}),t=!0})),a.find("p").each((function(a,n){r.push({isTitle:!t&&0===a,value:e(n).text()})}))}(),this.setState((function(e){return{pagesLoaded:e.pagesLoaded+1}}));case 10:o++,e.next=4;break;case 13:this.setState({elements:r,isLoading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearPage",value:function(){this.setState({elements:[]})}},{key:"render",value:function(){var e=this.state,t=e.pagesLoaded,a=e.totalPages,n=e.isLoading,o=e.elements;return r.a.createElement(b.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("div",{className:"".concat(n?"":"hidden")},r.a.createElement(x,{currentItems:t,totalItems:a}))),r.a.createElement("article",{className:"px-4 ".concat(e.theme.background," ").concat(e.theme.foreground)},r.a.createElement("section",null,o.map((function(e,t){return e.isTitle&&r.a.createElement("h3",{key:t,className:"text-xl font-medium mt-6 mb-4"},e.value)||!e.isTitle&&r.a.createElement("p",{key:t,className:"pb-2"},e.value)})))))}))}}]),a}(r.a.Component),N=a(36),k=a(162),w=a(93);N.b.add(k.a);var O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={website:"BoxNovel",novelId:"super-gene-webnovel",chapterFrom:1,chapterTo:1,isNavOpen:!0,loadPage:function(){},clearPage:function(){}},n.toggleNav=n.toggleNav.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.state.isNavOpen?this.setState({isNavOpen:!1}):this.setState({isNavOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.website,n=t.novelId,o=t.chapterFrom,c=t.chapterTo,l=t.isNavOpen,s=t.loadPage,i=t.clearPage;return r.a.createElement(y,null,r.a.createElement(b.Consumer,null,(function(t){return r.a.createElement("div",{className:"".concat(t.theme.background)},r.a.createElement("nav",{className:"".concat(l?"":"hidden"," options p-4 bg-gray-800")},r.a.createElement("div",{className:"flex flex-col mb-4"},r.a.createElement("label",{className:"mb-1 font-medium text-gray-100"},"Website"),r.a.createElement("select",{className:"px-1 rounded text-lg border-2 border-gray-500 bg-gray-300",disabled:!0,value:a,onChange:function(t){return e.setState({website:t.target.value})}},r.a.createElement("option",{value:"BoxNovel"},"Box Novel (boxnovel.com)"))),r.a.createElement("div",{className:"flex flex-col mb-4"},r.a.createElement("label",{className:"mb-1 font-medium text-gray-100",htmlFor:""},"Novel Id"),r.a.createElement("input",{className:"px-2 rounded text-lg border-2 border-gray-500 bg-gray-300",type:"text",value:n,onChange:function(t){return e.setState({novelId:t.target.value})}})),r.a.createElement("label",{className:"font-medium text-gray-100",htmlFor:""},"Chapters"),r.a.createElement("div",{className:"flex flex-row mb-4"},r.a.createElement("div",{className:"flex flex-col mr-4"},r.a.createElement("label",{className:"mb-1 text-gray-100",htmlFor:""},"From"),r.a.createElement("input",{className:"px-2 rounded text-lg border-2 border-gray-500 bg-gray-300",type:"number",value:o,onChange:function(t){return e.setState({chapterFrom:parseInt(t.target.value)})}})),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("label",{className:"mb-1 text-gray-100",htmlFor:""},"To"),r.a.createElement("input",{className:"px-2 rounded text-lg border-2 border-gray-500 bg-gray-300",type:"number",value:c,onChange:function(t){return e.setState({chapterTo:parseInt(t.target.value)})}}))),r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("div",{className:"mb-1"},r.a.createElement("button",{className:"px-3 py-1 mr-4 rounded bg-blue-500 text-gray-100 hover:bg-blue-400",onClick:function(){i(),s()}},"Generate"),r.a.createElement("button",{className:"px-3 py-1 rounded bg-gray-600 text-gray-100 hover:bg-gray-500",onClick:function(){return i()}},"Clear")),r.a.createElement("button",{className:"px-3 py-1 mb-1 rounded bg-green-500 text-gray-100 hover:bg-green-400",onClick:function(){return t.toggleTheme()}},"Toggle Theme"))),r.a.createElement("button",{className:"w-full py-2 flex justify-center items-center rounded-b-lg bg-gray-700 text-gray-100 hover:bg-gray-600",onClick:function(){return e.toggleNav()}},l&&r.a.createElement(w.a,{icon:"chevron-up"})||!l&&r.a.createElement(w.a,{icon:"chevron-down"})),r.a.createElement("main",{className:"reading-content"},r.a.createElement(E,{novelId:n,chapterFrom:o,chapterTo:c,loadPage:function(t){return e.setState({loadPage:t})},clearPage:function(t){return e.setState({clearPage:t})}})))})))}}]),a}(r.a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/boxnovel-scraper",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/boxnovel-scraper","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}},[[163,1,2]]]);
//# sourceMappingURL=main.c4fabbb6.chunk.js.map