import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, uc } from "../AnimateCSS"

interface Props extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   * 
   * @default "in"
   */
  mode?: string;
  /**
   * Animation direction "up"|"down"
   * 
   * @default none
   */
  direction?: string;
  /**
   * Rotate from "left"|"right"
   * 
   * @default none
   */
  from?: string;
}

const RotateStyled = styled(AnimateCSS) <Props>`
  @keyframes rotateIn {
    from {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    to {
      transform-origin: center;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInDownLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  
    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInDownRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  
    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInUpLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  
    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInUpRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }

    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes rotateOut {
    from {
      transform-origin: center;
      opacity: 1;
    }
  
    to {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutDownLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }
  
    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutDownRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }
  
    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutUpLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }
  
    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutUpRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }
  
    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  }

  animation-name: ${p => p.animate ? "rotate" + uc(p.mode) + uc(p.direction) + uc(p.from) : "none"};

`;

const Rotate: FunctionComponent<Props> = props => {

  const { children, mode = "in", ...others } = props;

  return (
    <RotateStyled mode={mode} {...others}>
      {children}
    </RotateStyled>
  );
}

export default Rotate;
