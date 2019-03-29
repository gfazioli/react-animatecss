import styled from "styled-components";

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

export const AnimateCSS = styled.span<IAnimateCSS>`
  display: inline-block;
  animation-duration: ${p => p.duration || "1s"};
  animation-fill-mode: both;
  animation-iteration-count: ${p => p.infinite ? "infinite" : "none"};
  animation-delay: ${p => p.delay || "none"};

  @media (print), (prefers-reduced-motion) {
    animation: unset !important;
    transition: none !important;
  }
`;

export function uc(v?: string): string {
  if (!!v && typeof v === "string") {
    return v.charAt(0).toUpperCase() + v.slice(1);
  }
  return "";
}