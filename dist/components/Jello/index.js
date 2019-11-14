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
var JelloStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes jello {\n    from,\n    11.1%,\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n\n    22.2% {\n      transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n\n    33.3% {\n      transform: skewX(6.25deg) skewY(6.25deg);\n    }\n\n    44.4% {\n      transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n\n    55.5% {\n      transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n\n    66.6% {\n      transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n\n    77.7% {\n      transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n\n    88.8% {\n      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n\n  animation-name: ", ";\n  transform-origin: center;\n"], ["\n  @keyframes jello {\n    from,\n    11.1%,\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n\n    22.2% {\n      transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n\n    33.3% {\n      transform: skewX(6.25deg) skewY(6.25deg);\n    }\n\n    44.4% {\n      transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n\n    55.5% {\n      transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n\n    66.6% {\n      transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n\n    77.7% {\n      transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n\n    88.8% {\n      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n\n  animation-name: ", ";\n  transform-origin: center;\n"])), function (p) { return p.animate ? "jello" : "none"; });
var Jello = function (props) {
    var children = props.children, others = __rest(props, ["children"]);
    return (react_1.default.createElement(JelloStyled, __assign({}, others), children));
};
exports.default = Jello;
var templateObject_1;
//# sourceMappingURL=index.js.map