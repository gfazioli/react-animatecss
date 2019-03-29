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
   * Animation direction "up"|"left"|"down"|"right"
   * 
   * @default none
   */
  direction?: string;
  /**
   * Increase animation when direction is set
   * 
   * @default false
   */
  big?: boolean;
}

const FadeStyled = styled(AnimateCSS) <Props>`
 
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
      transform: translate3d(0, -${p => p.big ? "2000px" : "100%"}, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-${p => p.big ? "2000px" : "100%"}, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(${p => p.big ? "2000px" : "100%"}, 0, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, ${p => p.big ? "2000px" : "100%"}, 0);
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
      transform: translate3d(0, ${p => p.big ? "2000px" : "100%"}, 0);
    }
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate3d(-${p => p.big ? "2000px" : "100%"}, 0, 0);
    }
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate3d(${p => p.big ? "2000px" : "100%"}, 0, 0);
    }
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate3d(0, -${p => p.big ? "2000px" : "100%"}, 0);
    }
  }

  animation-name: ${p => p.animate ? "fade" + uc(p.mode) + uc(p.direction) : "none"};

`;

const Fade: FunctionComponent<Props> = props => {

  const { children, mode = "in", ...others } = props;

  return (
    <FadeStyled mode={mode} {...others}>
      {children}
    </FadeStyled>
  );
}

export default Fade;
