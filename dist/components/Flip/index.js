"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var AnimateCSS_1 = require("../AnimateCSS");
var FlipStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes flip {\n    from {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n      animation-timing-function: ease-out;\n    }\n\n    40% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -190deg);\n      animation-timing-function: ease-out;\n    }\n\n    50% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -170deg);\n      animation-timing-function: ease-in;\n    }\n\n    80% {\n      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n        rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n\n    to {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n  }\n\n  @keyframes flipInX {\n    from {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n  @keyframes flipInY {\n    from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n\n  @keyframes flipOutX {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      opacity: 0;\n    }\n  }\n  @keyframes flipOutY {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      opacity: 0;\n    }\n  }\n\n  animation-name: ", ";\n  backface-visibility: visible !important;\n  ", "\n\n"], ["\n  @keyframes flip {\n    from {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n      animation-timing-function: ease-out;\n    }\n\n    40% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -190deg);\n      animation-timing-function: ease-out;\n    }\n\n    50% {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -170deg);\n      animation-timing-function: ease-in;\n    }\n\n    80% {\n      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n        rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n\n    to {\n      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n      animation-timing-function: ease-in;\n    }\n  }\n\n  @keyframes flipInX {\n    from {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n  @keyframes flipInY {\n    from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n\n  @keyframes flipOutX {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      opacity: 0;\n    }\n  }\n  @keyframes flipOutY {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      opacity: 0;\n    }\n  }\n\n  animation-name: ", ";\n  backface-visibility: visible !important;\n  ", "\n\n"])), function (p) { return p.animate ? "flip" + AnimateCSS_1.uc(p.mode) + AnimateCSS_1.uc(p.axes) : "none"; }, function (p) { return p.mode === "out" ? "animation-duration: 0.75s;" : ""; });
var Flip = function (props) {
    var children = props.children, others = __rest(props, ["children"]);
    return (react_1.default.createElement(FlipStyled, __assign({}, others), children));
};
exports.default = Flip;
var templateObject_1;
//# sourceMappingURL=index.js.map