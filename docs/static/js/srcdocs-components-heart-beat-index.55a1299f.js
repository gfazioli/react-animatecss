(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./srcdocs/components/HeartBeat/index.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./src/components/AnimateCSS.tsx");function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n@keyframes heartBeat {\n  0% {\n    transform: scale(1);\n  }\n\n  14% {\n    transform: scale(1.3);\n  }\n\n  28% {\n    transform: scale(1);\n  }\n\n  42% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n}\n\n  animation-name: ",";\n  animation-timing-function: ease-in-out;\n"]);return l=function(){return e},e}var p=Object(i.a)(s.a)(l(),function(e){return e.animate?"heartBeat":"none"}),f=function(e){var n=e.children,t=(e.duration,u(e,["children","duration"]));return o.a.createElement(p,t,n)},m=f;try{f.displayName="HeartBeat",f.__docgenInfo={description:"",displayName:"HeartBeat",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeartBeat/index.tsx#HeartBeat"]={docgenInfo:f.__docgenInfo,name:"HeartBeat",path:"src/components/HeartBeat/index.tsx#HeartBeat"})}catch(g){}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,n){return(S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return _});var _=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=O(this,h(n).call(this,e))).layout=null,t}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=y(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"heartbeat"}},"HeartBeat"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),o.a.createElement(c.f,{of:m}),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"playground"}},"Playground"),o.a.createElement(c.e,{__position:1,__code:"<HeartBeat animate={true}>\n  <h1>Say Hello to React AnimateCSS</h1>\n</HeartBeat>",__scope:{props:this?this.props:t,HeartBeat:m}},o.a.createElement(m,{animate:!0},o.a.createElement("h1",null,"Say Hello to React AnimateCSS"))))}}])&&b(t.prototype,r),i&&b(t,i),n}()}}]);
//# sourceMappingURL=srcdocs-components-heart-beat-index.1dbc68b1fe5db3dd927f.js.map