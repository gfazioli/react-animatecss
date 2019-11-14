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
}
declare const Zoom: FunctionComponent<Props>;
export default Zoom;
