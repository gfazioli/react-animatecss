import styled, { css } from "styled-components";

export type Direction = "" | "up" | "left" | "down" | "right";
export type Mode = "" | "in" | "out";
export type Axes = "" | "x" | "y";

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

const GlobalAnimateCSS = css<IAnimateCSS>`
  display: inline-block;
  animation-duration: ${p => p.duration || "1s"};
  animation-fill-mode: both;
  animation-iteration-count: ${p => (p.infinite ? "infinite" : "none")};
  animation-delay: ${p => p.delay || "none"};

  @media (print), (prefers-reduced-motion) {
    animation: unset !important;
    transition: none !important;
  }
`;

export const AnimateCSS = styled.span<IAnimateCSS>`
  ${GlobalAnimateCSS}
`;

export const AnimateCSSModeDirection = styled.span<IAnimateCSSModeDirection>`
  ${GlobalAnimateCSS}
`;

export const uc = (v?: string): string => (!!v && typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : "");

export const uppercase = (value = ""): string =>
  value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : "";

export const animateName = (type: string, p: any): string =>
  p.animate ? type + uppercase(p.mode || "") + uppercase(p.direction || "") + uppercase(p.axes || "") : "none";
