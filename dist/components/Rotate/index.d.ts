/// <reference types="react" />
import { IAnimateCSS, Mode } from "../AnimateCSS";
interface RotateProps extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
    /**
     * Animation direction "up"|"down". You should use `direction` alogn with `from`. Default value for `from` is `left`
     *
     * @default none
     */
    direction?: "" | "up" | "down";
    /**
     * Rotate from "left"|"right". You should use `from` alogn with `direction`. Default value for `direction` is `up`
     *
     * @default none
     */
    from?: "" | "left" | "right";
}
declare const Rotate: (props: RotateProps) => JSX.Element;
export default Rotate;
