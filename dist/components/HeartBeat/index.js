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
var HeartBeatStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes heartBeat {\n    0% {\n      transform: scale(1);\n    }\n\n    14% {\n      transform: scale(1.3);\n    }\n\n    28% {\n      transform: scale(1);\n    }\n\n    42% {\n      transform: scale(1.3);\n    }\n\n    70% {\n      transform: scale(1);\n    }\n  }\n\n  animation-name: ", ";\n  animation-timing-function: ease-in-out;\n"], ["\n  @keyframes heartBeat {\n    0% {\n      transform: scale(1);\n    }\n\n    14% {\n      transform: scale(1.3);\n    }\n\n    28% {\n      transform: scale(1);\n    }\n\n    42% {\n      transform: scale(1.3);\n    }\n\n    70% {\n      transform: scale(1);\n    }\n  }\n\n  animation-name: ", ";\n  animation-timing-function: ease-in-out;\n"])), function (p) { return AnimateCSS_1.animateName("heartBeat", p); });
var HeartBeat = function (props) { var _a; return react_1.default.createElement(HeartBeatStyled, __assign({}, props), (_a = props) === null || _a === void 0 ? void 0 : _a.children); };
exports.default = HeartBeat;
var templateObject_1;
//# sourceMappingURL=index.js.map