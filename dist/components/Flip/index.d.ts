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
     * Animation direction "x"|"y"
     *
     * @default none
     */
    axes?: string;
}
declare const Flip: FunctionComponent<Props>;
export default Flip;
