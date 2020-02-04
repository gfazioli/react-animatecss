"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var GlobalAnimateCSS = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  animation-duration: ", ";\n  animation-fill-mode: both;\n  animation-iteration-count: ", ";\n  animation-delay: ", ";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"], ["\n  display: inline-block;\n  animation-duration: ", ";\n  animation-fill-mode: both;\n  animation-iteration-count: ", ";\n  animation-delay: ", ";\n\n  @media (print), (prefers-reduced-motion) {\n    animation: unset !important;\n    transition: none !important;\n  }\n"])), function (p) { return p.duration || "1s"; }, function (p) { return (p.infinite ? "infinite" : "none"); }, function (p) { return p.delay || "none"; });
exports.AnimateCSS = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), GlobalAnimateCSS);
exports.AnimateCSSModeDirection = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), GlobalAnimateCSS);
exports.uc = function (v) { return (!!v && typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : ""); };
exports.uppercase = function (value) {
    if (value === void 0) { value = ""; }
    return value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : "";
};
exports.animateName = function (type, p) {
    return p.animate ? type + exports.uppercase(p.mode || "") + exports.uppercase(p.direction || "") + exports.uppercase(p.axes || "") : "none";
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=AnimateCSS.js.map