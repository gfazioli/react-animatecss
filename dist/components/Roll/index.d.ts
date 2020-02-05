/// <reference types="react" />
import { IAnimateCSS, Mode } from "../AnimateCSS";
interface RollProps extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
}
declare const Roll: (props: RollProps) => JSX.Element;
export default Roll;
