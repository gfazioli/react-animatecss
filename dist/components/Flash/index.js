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
var FlashStyled = styled_components_1.default(AnimateCSS_1.AnimateCSS)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes flash {\n    from,\n    50%,\n    to {\n      opacity: 1;\n    }\n\n    25%,\n    75% {\n      opacity: 0;\n    }\n  }\n\n  animation-name: ", ";\n"], ["\n  @keyframes flash {\n    from,\n    50%,\n    to {\n      opacity: 1;\n    }\n\n    25%,\n    75% {\n      opacity: 0;\n    }\n  }\n\n  animation-name: ", ";\n"])), function (p) { return (p.animate ? "flash" : "none"); });
var Flash = function (props) {
    var children = props.children, others = __rest(props, ["children"]);
    return react_1.default.createElement(FlashStyled, __assign({}, others), children);
};
exports.default = Flash;
var templateObject_1;
//# sourceMappingURL=index.js.map