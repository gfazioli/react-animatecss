"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
exports.AnimateCSS = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  animation-duration: ", ";\n  animation-fill-mode: both;\n  animation-iteration-count: ", ";\n  animation-delay: ", ";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"], ["\n  display: inline-block;\n  animation-duration: ", ";\n  animation-fill-mode: both;\n  animation-iteration-count: ", ";\n  animation-delay: ", ";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"])), function (p) { return p.duration || "1s"; }, function (p) { return (p.infinite ? "infinite" : "none"); }, function (p) { return p.delay || "none"; });
exports.uc = function (v) { return (!!v && typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : ""); };
var templateObject_1;
//# sourceMappingURL=AnimateCSS.js.map