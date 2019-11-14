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
var SlideStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes slideInDown {\n    from {\n      transform: translate3d(0, -100%, 0);\n      visibility: visible;\n    }\n\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInLeft {\n    from {\n      transform: translate3d(-100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInRight {\n    from {\n      transform: translate3d(100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInUp {\n    from {\n      transform: translate3d(0, 100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }  \n\n  @keyframes slideOutDown {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n  @keyframes slideOutLeft {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(-100%, 0, 0);\n    }\n  }\n  @keyframes slideOutRight {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(100%, 0, 0);\n    }\n  }\n  @keyframes slideOutUp {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, -100%, 0);\n    }\n  }  \n\n  animation-name: ", ";\n\n"], ["\n  @keyframes slideInDown {\n    from {\n      transform: translate3d(0, -100%, 0);\n      visibility: visible;\n    }\n\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInLeft {\n    from {\n      transform: translate3d(-100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInRight {\n    from {\n      transform: translate3d(100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  @keyframes slideInUp {\n    from {\n      transform: translate3d(0, 100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }  \n\n  @keyframes slideOutDown {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n  @keyframes slideOutLeft {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(-100%, 0, 0);\n    }\n  }\n  @keyframes slideOutRight {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(100%, 0, 0);\n    }\n  }\n  @keyframes slideOutUp {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, -100%, 0);\n    }\n  }  \n\n  animation-name: ", ";\n\n"])), function (p) { return p.animate ? "slide" + AnimateCSS_1.uc(p.mode) + AnimateCSS_1.uc(p.direction) : "none"; });
var Slide = function (props) {
    var children = props.children, _a = props.mode, mode = _a === void 0 ? "in" : _a, _b = props.direction, direction = _b === void 0 ? "down" : _b, others = __rest(props, ["children", "mode", "direction"]);
    return (react_1.default.createElement(SlideStyled, __assign({ mode: mode, direction: direction }, others), children));
};
exports.default = Slide;
var templateObject_1;
//# sourceMappingURL=index.js.map