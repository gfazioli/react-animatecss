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
var RubberBandStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rubberBand {\n    from {\n      transform: scale3d(1, 1, 1);\n    }\n\n    30% {\n      transform: scale3d(1.25, 0.75, 1);\n    }\n\n    40% {\n      transform: scale3d(0.75, 1.25, 1);\n    }\n\n    50% {\n      transform: scale3d(1.15, 0.85, 1);\n    }\n\n    65% {\n      transform: scale3d(0.95, 1.05, 1);\n    }\n\n    75% {\n      transform: scale3d(1.05, 0.95, 1);\n    }\n\n    to {\n      transform: scale3d(1, 1, 1);\n    }\n  }\n\n  animation-name: ", ";\n"], ["\n  @keyframes rubberBand {\n    from {\n      transform: scale3d(1, 1, 1);\n    }\n\n    30% {\n      transform: scale3d(1.25, 0.75, 1);\n    }\n\n    40% {\n      transform: scale3d(0.75, 1.25, 1);\n    }\n\n    50% {\n      transform: scale3d(1.15, 0.85, 1);\n    }\n\n    65% {\n      transform: scale3d(0.95, 1.05, 1);\n    }\n\n    75% {\n      transform: scale3d(1.05, 0.95, 1);\n    }\n\n    to {\n      transform: scale3d(1, 1, 1);\n    }\n  }\n\n  animation-name: ", ";\n"])), function (p) { return AnimateCSS_1.animateName("rubberBand", p); });
var RubberBand = function (props) { var _a; return react_1.default.createElement(RubberBandStyled, __assign({}, props), (_a = props) === null || _a === void 0 ? void 0 : _a.children); };
exports.default = RubberBand;
var templateObject_1;
//# sourceMappingURL=index.js.map