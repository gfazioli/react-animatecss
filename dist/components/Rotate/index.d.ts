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
     * Animation direction "up"|"down"
     *
     * @default none
     */
    direction?: string;
    /**
     * Rotate from "left"|"right"
     *
     * @default none
     */
    from?: string;
}
declare const Rotate: FunctionComponent<Props>;
export default Rotate;
