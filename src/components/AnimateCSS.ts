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
   * @deprecated Use repeat instead
   */
  infinite?: boolean;
  /**
   * Repeat animation for count times or "infinite"
   */
  repeat?: number | "none" | "infinite";
  /**
   * Animation delay
   *
   * @default none
   */
  delay?: string;

  /**
   * Force the HTML div as display: block;
   */
  block?: boolean;

  /**
   * @inheritdoc
   */
  children?: any;

  /**
   * @inheritdoc
   */
  as?: any;
}

export const AnimateCSS = styled.span<IAnimateCSS>`
  position: relative;
  display: ${p => (p.block ? "block" : "inline-block")};
  animation-duration: ${p => p.duration || "1s"};
  animation-fill-mode: both;
  animation-iteration-count: ${p => p.repeat || (p.infinite ? "infinite" : "none")};
  animation-delay: ${p => p.delay || "none"};

  @media (print), (prefers-reduced-motion) {
    animation: unset !important;
    transition: none !important;
  }
`;

export const uc = (v?: string): string => (!!v && typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : "");

export const uppercase = (value = ""): string =>
  value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : "";

export const animateName = (type: string, p: any): string =>
  p.animate
    ? type + uppercase(p.mode || "") + uppercase(p.direction || "") + uppercase(p.axes || "") + uppercase(p.from || "")
    : "none";
