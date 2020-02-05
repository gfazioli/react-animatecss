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
var HeadShakeStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes headShake {\n    0% {\n      transform: translateX(0);\n    }\n\n    6.5% {\n      transform: translateX(-6px) rotateY(-9deg);\n    }\n\n    18.5% {\n      transform: translateX(5px) rotateY(7deg);\n    }\n\n    31.5% {\n      transform: translateX(-3px) rotateY(-5deg);\n    }\n\n    43.5% {\n      transform: translateX(2px) rotateY(3deg);\n    }\n\n    50% {\n      transform: translateX(0);\n    }\n  }\n\n  animation-name: ", ";\n  animation-timing-function: ease-in-out;\n"], ["\n  @keyframes headShake {\n    0% {\n      transform: translateX(0);\n    }\n\n    6.5% {\n      transform: translateX(-6px) rotateY(-9deg);\n    }\n\n    18.5% {\n      transform: translateX(5px) rotateY(7deg);\n    }\n\n    31.5% {\n      transform: translateX(-3px) rotateY(-5deg);\n    }\n\n    43.5% {\n      transform: translateX(2px) rotateY(3deg);\n    }\n\n    50% {\n      transform: translateX(0);\n    }\n  }\n\n  animation-name: ", ";\n  animation-timing-function: ease-in-out;\n"])), function (p) { return AnimateCSS_1.animateName("headShake", p); });
var HeadShake = function (props) { var _a; return react_1.default.createElement(HeadShakeStyled, __assign({}, props), (_a = props) === null || _a === void 0 ? void 0 : _a.children); };
exports.default = HeadShake;
var templateObject_1;
//# sourceMappingURL=index.js.map