import { FunctionComponent } from "react";
import { IAnimateCSS } from "../AnimateCSS";
interface Props extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: string;
    /**
     * Animation direction "up"|"down"|"left"|"right"
     *
     * @default "down"
     */
    direction?: string;
}
declare const Slide: FunctionComponent<Props>;
export default Slide;
