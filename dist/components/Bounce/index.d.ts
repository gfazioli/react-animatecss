import { FunctionComponent } from "react";
import { IAnimateCSS } from "../AnimateCSS";
interface Props extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default none
     */
    mode?: string;
    /**
     * Animation direction "up"|"left"|"down"|"right"
     *
     * @default none
     */
    direction?: string;
}
declare const Bounce: FunctionComponent<Props>;
export default Bounce;
