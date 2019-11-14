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
var ZoomStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes zoomIn {\n    from {\n      opacity: 0;\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    50% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes zoomInDown {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInLeft {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInRight {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInUp {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomOut {\n    from {\n      opacity: 1;\n    }\n\n    50% {\n      opacity: 0;\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n\n  @keyframes zoomOutDown {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomOutLeft {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(0.1) translate3d(-2000px, 0, 0);\n      transform-origin: left center;\n    }\n  }\n\n  @keyframes zoomOutRight {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(0.1) translate3d(2000px, 0, 0);\n      transform-origin: right center;\n    }\n  }\n\n  @keyframes zoomOutUp {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  animation-name: ", ";\n"], ["\n  @keyframes zoomIn {\n    from {\n      opacity: 0;\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    50% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes zoomInDown {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInLeft {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInRight {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomInUp {\n    from {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n\n    60% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomOut {\n    from {\n      opacity: 1;\n    }\n\n    50% {\n      opacity: 0;\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n\n  @keyframes zoomOutDown {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  @keyframes zoomOutLeft {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(0.1) translate3d(-2000px, 0, 0);\n      transform-origin: left center;\n    }\n  }\n\n  @keyframes zoomOutRight {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(0.1) translate3d(2000px, 0, 0);\n      transform-origin: right center;\n    }\n  }\n\n  @keyframes zoomOutUp {\n    40% {\n      opacity: 1;\n      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    }\n  }\n\n  animation-name: ", ";\n"])), function (p) { return p.animate ? "zoom" + AnimateCSS_1.uc(p.mode) + AnimateCSS_1.uc(p.direction) : "none"; });
var Zoom = function (props) {
    var children = props.children, _a = props.mode, mode = _a === void 0 ? "in" : _a, others = __rest(props, ["children", "mode"]);
    return (react_1.default.createElement(ZoomStyled, __assign({ mode: mode }, others), children));
};
exports.default = Zoom;
var templateObject_1;
//# sourceMappingURL=index.js.map