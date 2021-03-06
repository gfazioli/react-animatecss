import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, Axes, IAnimateCSS, Mode } from "../AnimateCSS";

export interface FlipProps extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   *
   * @default none
   */
  mode?: Mode;
  /**
   * Animation direction "x"|"y". You have set the mode as well.
   *
   * @default none
   */
  axes?: Axes;
}

const FlipStyled = styled(AnimateCSS)<FlipProps>`
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }

    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }

    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }

    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }

    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }

  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }
  @keyframes flipInY {
    from {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }

  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }

    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }

    30% {
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  animation-name: ${p =>
    animateName("flip", { ...p, mode: p.mode || (p.axes ? "in" : ""), axes: p.axes || (p.mode ? "x" : "") })};
  backface-visibility: visible !important;
`;

const Flip = (props: FlipProps) => <FlipStyled {...props}>{props?.children}</FlipStyled>;

export default Flip;
