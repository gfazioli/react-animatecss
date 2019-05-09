(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/AnimateCSS.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function A(){var e=Object(o.a)(["\n  display: inline-block;\n  animation-duration: ",";\n  animation-fill-mode: both;\n  animation-iteration-count: ",";\n  animation-delay: ",";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"]);return A=function(){return e},e}"undefined"!==typeof IAnimateCSS&&IAnimateCSS&&IAnimateCSS===Object(IAnimateCSS)&&Object.isExtensible(IAnimateCSS)&&Object.defineProperty(IAnimateCSS,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IAnimateCSS",filename:"src/components/AnimateCSS.tsx"}});var i=a.d.span(A(),function(e){return e.duration||"1s"},function(e){return e.infinite?"infinite":"none"},function(e){return e.delay||"none"});function r(e){return e&&"string"===typeof e?e.charAt(0).toUpperCase()+e.slice(1):""}"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AnimateCSS",filename:"src/components/AnimateCSS.tsx"}}),r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"uc",filename:"src/components/AnimateCSS.tsx"}})},"./srcdocs/components/JackInTheBox/index.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),A=t.n(a),i=t("./node_modules/@mdx-js/react/dist/index.es.js"),r=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),c=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),m=t("./src/components/AnimateCSS.tsx");function d(){var e=Object(s.a)(["\n\n  @keyframes jackInTheBox {\n    from {\n      opacity: 0;\n      transform: scale(0.1) rotate(30deg);\n      transform-origin: center bottom;\n    }\n\n    50% {\n      transform: rotate(-10deg);\n    }\n\n    70% {\n      transform: rotate(3deg);\n    }\n\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  animation-name: ",";\n\n"]);return d=function(){return e},e}var l=Object(c.d)(m.a)(d(),function(e){return e.animate?"jackInTheBox":"none"}),p=function(e){var n=e.children,t=Object(o.a)(e,["children"]);return A.a.createElement(l,t,n)},g=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"JackInTheBox",filename:"src/components/JackInTheBox/index.tsx"}}),t.d(n,"default",function(){return b});var u={},B="wrapper";function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(B,Object.assign({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"jackinthebox"},"JackInTheBox"),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)(r.d,{of:g,mdxType:"Props"}),Object(i.b)("h2",{id:"playground"},"Playground"),Object(i.b)(r.c,{__position:1,__code:"<JackInTheBox animate={true}>\n  <h1>Say Hello to React AnimateCSS</h1>\n</JackInTheBox>",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,JackInTheBox:g},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYACkJW2BpUGsGBr28LDZXaD04AEcgAXTfQ4EkUidgoqiaKwAiIPYQNJTok1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGZ-L3asZg7FgZ10gAWYz2AANmM9pTIsMBgIAMW9aBEl0_hnEOBEHUwGChH4JYiGoSg4HMhFnPWNyaGcCBcMudgAEZrNM-RJOkqYAEE5hU9gIyg8gbCgdAw3YeQORUsRiujGR2BRJSYG4YA8IU1q4HkLca2AMroEq4IADIRvGRJ5koZpBoqqruAWuUwGQyUBlQdp2AAfg2IawwjWqrlm4bUGy6spBkKs3zMGF1WOGAwDCKApn2uqGrOgrl2rBNhIIHB3MyFIrwIPqa1rLjyMozY-JCVB-SydrUQZXqV1BxM0rENxkgACXnKBhwiITNXYPLYaiWh7GcZwK3RlHa04sieKh7wQbpn6_oBoG-qkD7LrML8QCYljPnXGgOPBxnqO8SRVGwHACDgLBAN0ECDDAwjbp-pYoPclbu1QNdqBdTCjVlfhTUlfgVVJojmsU2AchN9h-Ba-3zWFw3Rct21bqgkm4fJymlgaP2yZgCnnGq0T-BwD0Q6ycP-By6gZPFyHJawLr7aKl3sgjOOA-cDlikkiwAAFthgRJpW9eB2HUBm0-h9SvtE5vQYsSgYpeHz2D0q32_GTJUDgNyBCIK44DiWAIz0nA0tqoQCCyCMkz0zAUg_WnUXcEehSIc0hQgbTDv0DJ2C8G5In7mtTpXABWPSAFI1K3ofd7Hq5F-X800rXmAN-vhYW-LcADsT8X4twsNvYeo9x4ThEMvJM69N4t2AaDAmbd26dwlN3K4aVAE1mge_OBk94gwAjPPAhp0gElxhv7Na5pUA1yuAAEmADMV6MwcDuH9t0ba_B67cUbt4fg7Arj8FQIbfg8grZmGKLIqSycSIN14t4K4OspJ6wNhmAgjBg6k3jpTeqql-ydzsNweqzd1i5TUjtOadAlgxxwCITYAgMJFVMXcBRFgugED6OYKMLdGCp1URnO2uZgBOJcRkHqLMLADXKsdahNYpAhKZmE1q6A-ooOATde0mAHqhCeuwNJ6crb80FqxEW8tJD5zDpTOWCslbAX0AwdW9oc4OzdM7cJ6A3aOg9vLL2_pnRYBtmgWgAgHqBX0bw8OECLDGFMF9Iw7BnCjkHgyIcttXD2gmDSeh1B6gQlaFCEY7gpgol2VMfZdCyZrRCCkVwaAlinOmKwboBM4AbImLYPs6FtkPSgN88-90hQwCWB4ZIeQCjsGKNQfOa0zwYGKNCD5NB4yrMxewUuBTHpSniN8zFvJqw8NDptK4XhKDklQNfJZ2LEXMnQH0aIa1sXYtxfdfFTsQBpTgInFZJKLDMsyHrClttpwpDpSYbFYp5jRHxAc-5zICZoEgLDWg7A8ad3ZSsnFeKikEuBYyQV6w1VoBeDAcVVKaXSuWTWVZjLzCYDgokXVDr9VcsNewSRzpiXrBdfBcVKJJVW1yWM26Ni6nzNUp0nA0V3B6OjUY4u1YWDRVdVcNAUA0AwHNB4PGOxr5ktZdQS0LK9asPYZwnAIrS3mAAD4Np5Xy6RxaDF63NJABI5oIqYEpS49thzUDmktaKhhVBkIECrRwixfYcDmo1Xwnli7LWiPESAX1jIFBDuVSOwNPc2Gzvqlwg97Am08q3W22hpcjwsFcMVfsEyORLAjP2e6MTzRdGZQiPpEU9a1UwRYEtlbcjDw2QAQnaUvGgBCiEvDWlcLd7AoMQQudfU68jJJ5KlLrB5oRyARlYMG1EBQOQT1IzOBZnBmgRggxBjgY0JpTWaBwBaqkemSv4IBlcvj_HsFYB8PwAg8oEBnhyOWlAACqcwMj2ApC9AA1AJ-NOaEQUJQTQ6sfGBDmETiAMN_MYrbFcGkf8cBqDNL0KBEAmCJE134Bun4xZqgZHND-Mk26XI8o-W4tlSAeWzyC2FdY_ByjkH6DMPWjmeV5WaoRWA0IsDek83dMklBEi5hhVR82FpnN_FLCF6s_AohoBi_wGWGh-UgG82FmA8xwxSQgPAGLQGeV4XKyAAAemlHAAAmHAekiugzNpqTrPX7I4AABw4HssNmsPTMn9LYp7AL_AuvWX64N-bFhRtmktJEcbaVJszbmyAdYp15AVIK7gXQkAUjmcs9oZWrSwLqRALQH0WRHP8Ai-KWgX7NTmlmDMaRCh5DyCAA",mdxType:"Playground"},Object(i.b)(g,{animate:!0,mdxType:"JackInTheBox"},Object(i.b)("h1",null,"Say Hello to React AnimateCSS"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"srcdocs/components/JackInTheBox/index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=srcdocs-components-jack-in-the-box-index.e2940a9a9ab283118de0.js.map