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
     * Animation direction "up"|"left"|"down"|"right"
     *
     * @default none
     */
    direction?: string;
    /**
     * Increase animation when direction is set
     *
     * @default false
     */
    big?: boolean;
}
declare const Fade: FunctionComponent<Props>;
export default Fade;
