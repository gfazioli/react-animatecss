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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var AnimateCSS_1 = require("../AnimateCSS");
var RotateStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rotateIn {\n    from {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, -200deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: center;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInDownLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInDownRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInUpLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInUpRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -90deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes rotateOut {\n    from {\n      transform-origin: center;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, 200deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutDownLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutDownRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutUpLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutUpRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 90deg);\n      opacity: 0;\n    }\n  }\n\n  animation-name: ", ";\n"], ["\n  @keyframes rotateIn {\n    from {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, -200deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: center;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInDownLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInDownRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInUpLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes rotateInUpRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -90deg);\n      opacity: 0;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: translate3d(0, 0, 0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes rotateOut {\n    from {\n      transform-origin: center;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, 200deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutDownLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutDownRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutUpLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  @keyframes rotateOutUpRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n\n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 90deg);\n      opacity: 0;\n    }\n  }\n\n  animation-name: ",
    ";\n"])), function (p) {
    return AnimateCSS_1.animateName("rotate", __assign(__assign({}, p), { mode: p.mode || "in", direction: p.direction || (p.from ? "up" : ""), from: p.from || (p.direction ? "left" : "") }));
});
var Rotate = function (props) { var _a; return react_1.default.createElement(RotateStyled, __assign({}, props), (_a = props) === null || _a === void 0 ? void 0 : _a.children); };
exports.default = Rotate;
var templateObject_1;
//# sourceMappingURL=index.js.map