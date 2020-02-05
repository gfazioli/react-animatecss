/// <reference types="react" />
import { Direction, IAnimateCSS, Mode } from "../AnimateCSS";
export interface ZoomProps extends IAnimateCSS {
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
}
declare const Zoom: (props: ZoomProps) => JSX.Element;
export default Zoom;
