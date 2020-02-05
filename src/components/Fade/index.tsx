import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, Direction, IAnimateCSS, Mode } from "../AnimateCSS";

export interface FadeProps extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   *
   * @default "in"
   */
  mode?: Mode;
  /**
   * Animation direction "up"|"left"|"down"|"right"
   *
   * @default none
   */
  direction?: Direction;
  /**
   * Increase animation when direction is set
   *
   * @default false
   */
  big?: boolean;
}

const FadeStyled = styled(AnimateCSS)<FadeProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -${p => (p.big ? "2000px" : "100%")}, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-${p => (p.big ? "2000px" : "100%")}, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(${p => (p.big ? "2000px" : "100%")}, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, ${p => (p.big ? "2000px" : "100%")}, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, ${p => (p.big ? "2000px" : "100%")}, 0);
    }
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(-${p => (p.big ? "2000px" : "100%")}, 0, 0);
    }
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(${p => (p.big ? "2000px" : "100%")}, 0, 0);
    }
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -${p => (p.big ? "2000px" : "100%")}, 0);
    }
  }

  animation-name: ${p => animateName("fade", { ...p, mode: p.mode || "in" })};
`;

const Fade = (props: FadeProps) => <FadeStyled {...props}>{props?.children}</FadeStyled>;

export default Fade;
