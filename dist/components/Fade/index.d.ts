import { Direction, IAnimateCSS, Mode } from "../AnimateCSS";
interface Props extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
    /**
     * Animation direction "up"|"left"|"down"|"right"
     *
     * @default none
     */
    direction?: Direction;
    /**
     * Increase animation when direction is set
     *
     * @default false
     */
    big?: boolean;
}
declare const _default: import("styled-components").StyledComponent<"span", any, IAnimateCSS & Props, never>;
export default _default;
