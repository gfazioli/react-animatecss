/// <reference types="react" />
import { IAnimateCSS, Mode } from "../AnimateCSS";
export interface LightSpeedProps extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
}
declare const LightSpeed: (props: LightSpeedProps) => JSX.Element;
export default LightSpeed;
