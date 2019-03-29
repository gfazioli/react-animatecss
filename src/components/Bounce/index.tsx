import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS, uc } from "../AnimateCSS"

interface Props extends IAnimateCSS {
  /**
 * Animate mode "in"|"out"
 * 
 * @default none
 */
  mode?: string;
  /**
   * Animation direction "up"|"left"|"down"|"right"
   * 
   * @default none
   */
  direction?: string;
}

const BounceStyled = styled(AnimateCSS) <Props>`
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }

    75% {
      transform: translate3d(0, -10px, 0);
    }

    90% {
      transform: translate3d(0, 5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
      
  @keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }

    75% {
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      transform: translate3d(5px, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }

    75% {
      transform: translate3d(10px, 0, 0);
    }

    90% {
      transform: translate3d(-5px, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
  
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      transform: translate3d(0, -5px, 0);
    }
  
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }

    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
  
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
  
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }

  animation-name: ${p => p.animate ? "bounce" + uc(p.mode) + uc(p.direction) : "none"};

  ${p => !p.mode ? "transform-origin: center bottom;" : ""}
  ${p => p.mode ? "animation-duration: 0.75s;" : ""}
`;

const Bounce: FunctionComponent<Props> = props => {

  const { children, ...others } = props;

  return (
    <BounceStyled {...others}>
      {children}
    </BounceStyled>
  );
}

export default Bounce;
