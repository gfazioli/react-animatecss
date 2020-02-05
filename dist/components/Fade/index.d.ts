/// <reference types="react" />
import { Direction, IAnimateCSS, Mode } from "../AnimateCSS";
export interface FadeProps extends IAnimateCSS {
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
declare const Fade: (props: FadeProps) => JSX.Element;
export default Fade;
