import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, Direction, IAnimateCSS, Mode } from "../AnimateCSS";

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

const SlideStyled = styled(AnimateCSS)<SlideProps>`
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }

  animation-name: ${p => animateName("slide", { ...p, mode: p.mode || "in", direction: p.direction || "down" })};
`;

const Slide = (props: SlideProps) => <SlideStyled {...props}>{props?.children}</SlideStyled>;

export default Slide;
