export declare type Direction = "" | "up" | "left" | "down" | "right";
export declare type Mode = "" | "in" | "out";
export declare type Axes = "" | "x" | "y";
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
export interface IAnimateCSSModeDirection extends IAnimateCSS {
    /**
     * Animate mode "" | "in"|"out"
     *
     * @default "in"
     */
    mode?: Mode;
    /**
     * Animation direction ""| "up"|"left"|"down"|"right"
     *
     * @default none
     */
    direction?: Direction;
}
export declare const AnimateCSS: import("styled-components").StyledComponent<"span", any, IAnimateCSS, never>;
export declare const AnimateCSSModeDirection: import("styled-components").StyledComponent<"span", any, IAnimateCSSModeDirection, never>;
export declare const uc: (v?: string | undefined) => string;
export declare const uppercase: (value?: string) => string;
export declare const animateName: (type: string, p: any) => string;
