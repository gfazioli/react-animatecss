(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/AnimateCSS.tsx":function(n,e,A){"use strict";A.d(e,"a",function(){return a}),A.d(e,"b",function(){return r});var t=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=A("./node_modules/styled-components/dist/styled-components.browser.esm.js");function i(){var n=Object(t.a)(["\n  display: inline-block;\n  animation-duration: ",";\n  animation-fill-mode: both;\n  animation-iteration-count: ",";\n  animation-delay: ",";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"]);return i=function(){return n},n}"undefined"!==typeof IAnimateCSS&&IAnimateCSS&&IAnimateCSS===Object(IAnimateCSS)&&Object.isExtensible(IAnimateCSS)&&Object.defineProperty(IAnimateCSS,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IAnimateCSS",filename:"src/components/AnimateCSS.tsx"}});var a=o.d.span(i(),function(n){return n.duration||"1s"},function(n){return n.infinite?"infinite":"none"},function(n){return n.delay||"none"});function r(n){return n&&"string"===typeof n?n.charAt(0).toUpperCase()+n.slice(1):""}"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AnimateCSS",filename:"src/components/AnimateCSS.tsx"}}),r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"uc",filename:"src/components/AnimateCSS.tsx"}})},"./srcdocs/components/Flip/index.mdx":function(n,e,A){"use strict";A.r(e);var t=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=A("./node_modules/react/index.js"),i=A.n(o),a=A("./node_modules/@mdx-js/react/dist/index.es.js"),r=A("./node_modules/docz/dist/index.esm.js"),s=A("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),m=A("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=A("./src/components/AnimateCSS.tsx");function p(){var n=Object(s.a)(["\n  @keyframes flip {\n    from {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n      animation-timing-function: ease-out;\n    }\n\n    40% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -190deg);\n      animation-timing-function: ease-out;\n    }\n\n    50% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -170deg);\n      animation-timing-function: ease-in;\n    }\n\n    80% {\n      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n        rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n\n    to {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n  }\n\n  @keyframes flipInX {\n    from {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n  @keyframes flipInY {\n    from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n\n  @keyframes flipOutX {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      opacity: 0;\n    }\n  }\n  @keyframes flipOutY {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      opacity: 0;\n    }\n  }\n\n  animation-name: ",";\n  backface-visibility: visible !important;\n  ","\n\n"]);return p=function(){return n},n}var g=Object(m.d)(c.a)(p(),function(n){return n.animate?"flip"+Object(c.b)(n.mode)+Object(c.b)(n.axes):"none"},function(n){return"out"===n.mode?"animation-duration: 0.75s;":""}),d=function(n){var e=n.children,A=Object(t.a)(n,["children"]);return i.a.createElement(g,A,e)},B=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flip",filename:"src/components/Flip/index.tsx"}}),A.d(e,"default",function(){return E});var l={},u="wrapper";function E(n){var e=n.components,A=Object(t.a)(n,["components"]);return Object(a.b)(u,Object.assign({},l,A,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"flip"},"Flip"),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(r.d,{of:B,mdxType:"Props"}),Object(a.b)("h2",{id:"playground"},"Playground"),Object(a.b)(r.c,{__position:1,__code:"<Flip animate={true}>\n  <h1>Say Hello to React AnimateCSS</h1>\n</Flip>",__scope:{props:this?this.props:A,Playground:r.c,Props:r.d,Flip:B},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYADEoAgGYsNldoPTgARyABdN9DgSRSPIgiIPYQNJUok1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnFSABYtPYAA2LSdPWMBgOI71oESFT-GcQ4EQdTAYKEfgliIahKDgfSEWs6tbJoZwIFwy52AARmM3T5AEoSpgAQTmaT2AjKDyBsKB0DDdh5A5aSxEy6MZHYFFJJgbhgDw8TqrgeQtxrYAcugfLggAMi68ZEnmShmnavKCu4Ma5TAZDJQGVB2nYAB-DYOrDCNiquYbOtQRLqykGQqzfMwYXVY4YDAMIoCmVaSrKna0uXasEy4ggcGIzIUivAgWprWtWIo9x-SyWrUQZZqV2-xMYrENxkgACXnKBhwiTjNXYFLUAB2h7GcZwK0hsHaxYsj7vByQnpet6PpaqQ7v2swvxAWj6M-dcaGY37JFUbAcAIOAsEA3QQIMMDCOOp6lig4ipu7VA12oF1MKNWV-FNSV-BVdGOKq2AckV9h-C17JzWZuXWbV21jqgtGMZgLHnCWBoraiTHsaWUJyEKnj-BwD1HayW3-AEtBaAEM73LQyhB2wED0DsB2Nb97HZPWYxTAeoxUfj2h2D8zz-DQfgAB9-H2AO071suAAFMDO0ILvYVA5fjHl5MBearhRacUnViwU6bjOMZm44IC6abmX4LBC_4RJS5rdO-6r07zqmBvnSb3lq1cGo4DbyrUQKdXtrMZL2F-hrtYyg2H1953nGKxhw7uMRinWCvthgRJpW9eBDSJpOHp4uS_8LConcHAWyAgiBXFhIFLYMRWAwAjMZVSqktLFTgHEWASYHwxSWDg2KxUQGoDgHBWgWCIyqSWBQ9gqlipCAIFkMhVC8FUPNEmcyqlMApA_Pjf6TsZrmhiEQAo5pJqCWllccUcAYDmn2N3Gsh9_5IIAKR_2-sAzIRDwGQL7BkGB014GIOQagyqGCYBkLwRYghGjiEMIfFQphABWFBWA3xqJrHQ2x5DcGUKWOaGKABODhMAuFyO-rw6I_DBHCNEaPZS0IKQyPCKEwqAlvpOJUYAtxhCwFCm0dA-Y-iEFIOcWg0x5jvH4PGNYkhZi7E-Nik41B-MLAeNIXU2K9S_EAHYgkhJ4ZnSJ_JolSxmhIhJaBkkKO-gADlUhk_G2StFQN0QUuBRSjEuJMfEWp5CcD-IcZQvZBzqFHKsaAmpjD6k0OaROEQnimFXM4dwoBIQBnUAEUMmcIiRnUDGVI80EyVxTJrEjTJajFm5OWQIPRazDElK2Zg7BFSYpnKIRc9p9jaF3LaV4jp1DKFPOSRYcJ0sPlCK-TE8R8T_mAv_ttCwwLX7v0_keOwYAiYNFQAADVUTWXWYLvoQogVCmFbB1nwtaTs5h9TAmEv6QPd5USKU_LiZI6RtK3ERwlC8Jy1DJnrBXMo3lgrrFLJ0dC1ZYq4XGMleU_F9rzQACZenPLcSSwZ5KUjfLEaM6l6rUD6urCudh8yXlCrySs2BVrik2uxVKq5uCXVEr2EFHVVwYqBosCuWZoasmmshea0VBiY2bNtUi-1LCHFyrpQa_-oKFn5uFYWy1xaNmuvkesel7AmUf0yKyn-5FOUAE1jUAIbaAs1-So2tolXGy5eKqGyuCe2sJbzUBkuGT635fqAUBvxlq8gaa9VAtrd9I1AqQWNojRa6d4rY30JxQ8h1zrq1urXRu5VW7VXjL3TWoN_8Q2jvUROgtU7CnWtLXO9p0rYpJv3amiS6bM3lxmXMoDVSQNNrA7CktWKH07KfZW19Hb_2CuHBe4DmjQORvA7h5DjK369q_myomOpwg8ovfy8dVGsM0Zw225DK4kxoYoxhnj16i13sg_hu19jfEvuXcmg9R6M0ntIyC8j3Gcm8ZvbRtttyZPlrk-wJdfSXnKcQ8ev9DKX6MZZd_dl5E2MEBHZxt0onw0ipbVJldKT1MWGE7m8FV6vO3og3h-5FSWExSrYp-D2rLOqesyhjT6HPPNrC7hgzkWF1LFM75iwFndWqXo6k15Cr12oC_lcAAJMACi3BSozBwCS7oi1-COZmPwdgABqXI5AIzNZzjAYqfW3aDZa1vNaesQAr0ZAoORHgJTbFDtI1gtgIAeGgEe9b-QPCwHYAAQhFsKdwBA5F1Ya01nAw3pLjWLuEbr7WQDuveegPoETt2qRwF0hxcAVQgHYFcAOCgBLFHVkfagwlfpXEll-2WGYCD33QqVGS_YI52Ea3_dYx9sq5U2ksb2OARCbGhR7NH6EIfVi6AQPo5goz_0YKfCS59gBE5J7o0GLy2r47DF27czPqroBas8hRR17TVyXifIm6t6aMwYizHmkhr422xtzXm_NgL6AYCdqYl9PYMxZ4bY2iO4Bm39M6LARFOB6BDhKbocdra215b3MuzhRxVIZEOXerh7QTBpBV-oEJWhQhGGdn3fvNjlb4cyVwKRXBoCWCH6Y8DvdSKmBMWwfZ0Le7OlAKR7BAjgJgEsDwyQ8gFHYMUag18ZpngwMUaE8CaB93npL2uUp4hSLXusVrO8vCUHJL-nuJg-61-ZO9zI0tW-V3b3XfgMUzcgB79WSfn3UA7w7vvZOo-y5inmNEfEAeY_mCRmgSA6Ms4IwjjP2e3a5-d_z4yNO68LDn7QC8GA_fhBD7ka7u_4-5gmAcE08Zcbei8He9cjcL-6wwB8Em-e8M4B8Ak4uUwx8KuzuMkl8OAgU7gjAjuTsquzgT8sBtgZI8EVwaAZEzo5o-2pw2wcir266a-VKl210zWLBg8BcBcM2i-_A8gjB76kACQ5ow2VwXgEwghFWAKwc6-RsbQNAtW9W7BOA7-l-bWM2ahn-3WwOs2jcC2ve76cBuqbBWOHB848E7A3BM2c2_BVOFgFcR4LArgmU_YQcHISwg2XQYAui5oXQ72CI6AohIgM0xUF6TBVwyE6eR2uuZ2yS2SLwvqc2MREEcRnaZg4OKBVux0lKg842rACBncHI7ciBs4YKEAzQEYh2h2HAPUfUA0zQHAY0Mk-spR_AYRK4NOdO7ArAHwfgAgKUBA5CHI3MlAAAqnMBkPYBSFdH1r0cQrEAgiinIl2l0QIOYCDgfPTEFNsHHn-JoNQJrnoKBCAGCvwFVkePwLoT8MWNUBkOaD-GSPNrpFmiAPAtCjNFcTNt9j8T5AaiAOUOQP0DMNPkgDNilJVIRAdo8QdpgGSJQIkLmBXjOBOJqPIeUH8KWH8UGiAFEPnGCXnOGBoEvi8TNnCXQJgIJBAPAF8RevwHhF8fwAAHoxQ4COo4CqTYnfTKyaiMkgAsnmQ4DTI4DmRck1itFC7yGMSmwEn8nGRskclimvEqwWhWh8kClCkikzx-byBy6Ym4C6CQApD_hwCHHaACza5gRyQgC0A-hZBXH8BAnii0B-FomzBdYKAKDyDyBAA",mdxType:"Playground"},Object(a.b)(B,{animate:!0,mdxType:"Flip"},Object(a.b)("h1",null,"Say Hello to React AnimateCSS"))),Object(a.b)(r.c,{__position:2,__code:'<Flip animate={true} axes="x" mode="in">\n  <h1>Say Hello to React AnimateCSS</h1>\n</Flip>',__scope:{props:this?this.props:A,Playground:r.c,Props:r.d,Flip:B},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYADEoAgGYsNldoPTgARyABdN9DgSRSPIgiIPYQNJUok1NXaMFUF0FFjlOXDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnFSABYtPYAA2LSdPWMBgOI71oESFT-GcQ4EQdTAYKEfgliIahKDgfSEWs6tbJoZwIFwy52AARmM3T5AEoSpgAQTmaT2AjKDyBsKB0DDdh5A5aSxEy6MZHYFFJJgbhgDw8TqrgeQtxrYAcugfLggAMi68ZEnmShmnavKCu4Ma5TAZDJQGVB2nYAB-DYOrDCNiquYbOtQRLqykGQqzfMwYXVY4YDAMIoCmVaSrKna0uXasEy4ggcGIzIUivAgWprWtWIo9x-SyWrUQZTDXBqOA-BALB-HYPzMEhtBxBXb7ExisQ3GSAAJecoGHCJOM1dgUtQAHaHsZxnArNHkdrFiyPulHJCel63o-lqpDu_azC_EBaPoz51xoZjfskVRsBwAg4CwQDdBAgwwMI46nqWKDiKm7tUDXagXUwo1ZX4U1JX4FUSY4qrYByPX2H4c3snNAXtaF43bWOqDidJmByecJYGndqIyYppZQnIQqeP4HAPT9rIvf4AS0FoAQzvctDKEHbAQPQOxfdN6OKdk9ZjFMB6jCJnPaFhwFrZUf0QAAH34fZY-L63m4AAUwM7Qgu9hUG1-MeXkwF5quFFpxSE2LEL_vS9JmbjggLppuZfhobr_hEibmsS-n9vTvOqZe-dfveWrMH4GHyrUQKE3trMZL2F-hqLYy22HyjgPnGKxgU7uMRinWVu2wYCJGlN6eAhp6b5wejxOS0CLConcHAWyAgiBXFhIFLYMRWAwAjMZVSqktLFTgHEWASYHwxSWBQ2KxUEGoDgHBWgZCIyqSWCw9gqlipCAIFkJhbCqFsPNEmcyqlMApA_DTf6_sZrmhiEQAo5pJqCQ1lccUcAYDmn2BPGst9oF4IAKRQO-vAzIdDkGoL7BkDB01sG4PwYQyqJCYBMKoS4mhJj6E8IfGwvhABWAhWA3xGJrFwzxzDKGsKWOaGKABOERMAxFaO-pI6I0jZHyMUUvZS0IKQaPCIkwqAlvp-IMbAoJtCkFCnMeg-Y1icF4P8UQxxzjwnUPGO4hhTivERNin4whNMLAhMYV02K3SokAHY4kJIkWXVJ_J0nqxmionJaB8k6O-gADlUiUmm5SzFoMsTUrBdS7EBIcfETpzCcDRJ8awq5Nz2F3LcYgjpvDukcP6ROEQoS-FvNEeIuBIQZnUBkXMmcCiFnUCWWo80KyVxrJrPjUpRjdmVP2QIKxRzbENLOaQ8hLSYpPLoS84Z3jOFfKGWEkZ7DWF_PyRYZJGsQVyLBRk5R2ToWwugdtCw8LAHANAUeOwYB6YNFQAADUMTWK2SLvoopQWijFbBjnYsGRc_h3TYm0umbPYFaSWUQqyao9RnKgmpwlC8Jy7DVnrBXPoyVsr3F7Iseiw5SqsX2NVc06l3rzQACZJn_KCQy2ZzKUjgqUYs9lxrUDWurCuYR2yAVyqqQczBbr6kevJWqt5lCA10r2EFC1VwYqxosCuTZiaymOtRc6xVNiM2nM9Xi71AifFaq5Ta6BiKdnVvlbW119aTmBu0esbl7A-UgMyIKiB5FRUAE17UwJ7Ygp11S02DpVVm15VK2GavicOpJQLUBMvmRGyFUaYUxppma8gRarVws7d9O1MqEW9pTS69dyrM3cIpT8n1_r21BqPSe_VZ7DXLKvR2uN0CE2LuMSumta7anusbVu4Z6rYp5uvYWiSxbS0tw2VsuDbSEN9qQ5ihtZKf0XL_a2wDI7oOyuHC--DpjEOpuQ5R_DvKgGTrAUK-mOpwgSpfdK5dbGyMcYo0O_DK4kxEZYyRiT7661ftQ9Rr13jIkAf3fmm9d6S0PsYwi5j4mKmSY_ZxodnyNPNq0-wPdUyAX6dw_eqDPKAG8YFeA4V5EhMEAXaJt0ink0KoHWpg9BTjMWHk5W5Fb6wufpQ1R75LSBExTbbp7D5rXOGfcwRkzxHQv9qS5RmzqWd1LEc5FiwLnLWqW44UwFOrj2oDAVcAAJMACi3BSozBwAy7oi1-C-ZmDDAA1LkcgEZ-twxgMVSbwcZsDfBmtKuh9GQKC0R4CU2wk7qNYLYCAHhoB3sO_kDwsB2AAEJFbCncAQLRXWet9ZwHN6S40G7hBhsNkAwbgXoD6Ck89qkcBjJ8XAFUIB2BXFjgoASxQTZ32oMJX6Vw1Zga1hmAg390KlRkv2VOdhetQPWPfbKuVNpLAjjgEQmx0WhwJ-hJH1YugED6OYKM0DGCPwks_YANO6eWOajTNqlOwxju3Lz6q6AWr_J0Ude0Hd94P3pibHmfMGKC0lpId-nsKYSyljLYC-gGB3amK_MOvM-d2wdtjuAzt_TOiwERTgehE4Sm6NnD2XtJVT2bs4UcbSGRDkvq4e0EwaQtfqBCVoUIRgPbDxHzYzWpHMlcCkVwaAlhx-mNg0PaipgTFsH2dCoezpQDUewQIyCYBLA8MkPIBR2DFGoO_GaZ4MDFGhNgmg08d7K67lKeIajj7rEGxfLwlBySQcniYae7fmSA8yBrfvbdB_d34DFB3IAx_VmX8D1AF9R7XwLvP5uYp5jRHxFHtP5h8ZoEgCTcuuNU5r63uOjfw_K-MmLifCwj-aALwMAk-wgM-Wi_uH-i-5gmAcEG8zcA-e8Q-Pcfcf-6wsB8Ex-V8M4N8AkiuUw98euvuMkr8OAgU7gjA3u_s-uzgf86BtgZI8EVwaAZEzo5ol2pw2wWi_2x6B-bKz210_WfBc8tctcVc2-_A8g3BwGkACQ5oc2VwXgEw0hLWMKCch-9sbQNAnW3WghOAgBz-Q2VcBhwBMMsOIAG2khKhd-lo84TB7AAhJOQhdhyQoh62fcW2TWrcR4LArgmU_Y8cHISwM2XQYAli5oXQgOCI6A8hIgM0xUL6PBVwyEheN25uD2-S5SLwkaG2aREEGRo6ZgiOeBLux0rKc8S2rAWBY8HII82Bs4SKEAzQEY1212HAPUfUA0zQHAY0MkNs9R_ACRK4bOHO7ArAHwfgAgKUBAzCHIEslAAAqnMBkPYBSFdJNuMfQrEDggSlomOiMQIOYHDjfDzEFNsBnn-JoNQMbnoKBCAEivwG1kePwOYT8MWNUBkOaD-GSJtrpGWiANguijNC8VXKDmCT5DaiAOUOQP0DMKvkgFXClJVIRFdt8VdpgGSJQIkLmE3jOBOJqJoeUH8KWBCXGiAFEIjAifwGLBoDvn8VXBiXQJgIJBAPACCS-vwHhCCfwAAHoxQ4C-o4CqSknfQGyajckgB8nmQ4DrI4DmQik1j9Ey6aGMROxUmSnGQClCkKn_GGwWhWgSlSkylymbxRbyAa7Em4C6CQApD_hwDXHaCyym5gRyQgC0A-hZAvH8Awnii0AREEmzBjYKAKDyDyBAA",mdxType:"Playground"},Object(a.b)(B,{animate:!0,axes:"x",mode:"in",mdxType:"Flip"},Object(a.b)("h1",null,"Say Hello to React AnimateCSS"))))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"srcdocs/components/Flip/index.mdx"}}),E.isMDXComponent=!0}}]);
//# sourceMappingURL=srcdocs-components-flip-index.a87f0d209adc8fb9e687.js.map