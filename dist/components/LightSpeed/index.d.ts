import { FunctionComponent } from "react";
import { IAnimateCSS } from "../AnimateCSS";
interface Props extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: string;
}
declare const LightSpeed: FunctionComponent<Props>;
export default LightSpeed;
