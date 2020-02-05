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
var WobbleStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes wobble {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n\n    15% {\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    }\n\n    30% {\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    }\n\n    45% {\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    }\n\n    60% {\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    }\n\n    75% {\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    }\n\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  animation-name: ", ";\n"], ["\n  @keyframes wobble {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n\n    15% {\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    }\n\n    30% {\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    }\n\n    45% {\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    }\n\n    60% {\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    }\n\n    75% {\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    }\n\n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  animation-name: ", ";\n"])), function (p) { return AnimateCSS_1.animateName("wobble", p); });
var Wobble = function (props) { var _a; return react_1.default.createElement(WobbleStyled, __assign({}, props), (_a = props) === null || _a === void 0 ? void 0 : _a.children); };
exports.default = Wobble;
var templateObject_1;
//# sourceMappingURL=index.js.map