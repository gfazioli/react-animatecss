/// <reference types="react" />
import { Direction, IAnimateCSS, Mode } from "../AnimateCSS";
export interface SlideProps extends IAnimateCSS {
    /**
     * Animate mode "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
    /**
     * Animation direction "up"|"down"|"left"|"right"
     *
     * @default "down"
     */
    direction?: Direction;
}
declare const Slide: (props: SlideProps) => JSX.Element;
export default Slide;
