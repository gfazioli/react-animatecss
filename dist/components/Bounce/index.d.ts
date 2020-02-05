/// <reference types="react" />
import { Direction, IAnimateCSS, Mode } from "../AnimateCSS";
export interface BounceProps extends IAnimateCSS {
    /**
     * Animate mode "" | "in"|"out"
     *
     */
    mode?: Mode;
    /**
     * Animation direction ""| "up"|"left"|"down"|"right"
     *
     * @default none
     */
    direction?: Direction;
}
declare const Bounce: (props: BounceProps) => JSX.Element;
export default Bounce;
