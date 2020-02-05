/// <reference types="react" />
import { Axes, IAnimateCSS, Mode } from "../AnimateCSS";
export interface FlipProps extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default none
     */
    mode?: Mode;
    /**
     * Animation direction "x"|"y". You have set the mode as well.
     *
     * @default none
     */
    axes?: Axes;
}
declare const Flip: (props: FlipProps) => JSX.Element;
export default Flip;
