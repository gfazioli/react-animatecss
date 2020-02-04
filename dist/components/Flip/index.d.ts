import { Axes, IAnimateCSS, Mode } from "../AnimateCSS";
interface Props extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default none
     */
    mode?: Mode;
    /**
     * Animation direction "x"|"y"
     *
     * @default none
     */
    axes?: Axes;
}
declare const _default: import("styled-components").StyledComponent<"span", any, IAnimateCSS & Props, never>;
export default _default;
