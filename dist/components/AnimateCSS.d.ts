export interface IAnimateCSS {
    /**
     * Set true to start the animation. If you want start the animation again, you have to set this props to false before, by using `onAnimationEnd` event
     *
     * @default false
     */
    animate?: boolean;
    /**
     * Animation duration
     *
     * @default "1s"
     */
    duration?: string;
    /**
     * Repeat the animation to infinite loop
     *
     * @default false
     */
    infinite?: boolean;
    /**
     * Animation delay
     *
     * @default none
     */
    delay?: string;
}
export declare const AnimateCSS: import("styled-components").StyledComponent<"span", any, IAnimateCSS, never>;
export declare function uc(v?: string): string;
