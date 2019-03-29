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
   * Animation direction "up"|"down"|"left"|"right"
   * 
   * @default "down"
   */
  direction?: string;
}

const SlideStyled = styled(AnimateCSS) <Props>`
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

  animation-name: ${p => p.animate ? "slide" + uc(p.mode) + uc(p.direction) : "none"};

`;

const Slide: FunctionComponent<Props> = props => {

  const { children, mode = "in", direction = "down", ...others } = props;

  return (
    <SlideStyled mode={mode} direction={direction} {...others}>
      {children}
    </SlideStyled>
  );
}

export default Slide;
