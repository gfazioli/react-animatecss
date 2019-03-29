import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS } from "../AnimateCSS"

interface Props extends IAnimateCSS { }

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

  animation-name: ${p => p.animate ? "bounce" : "none"};
  transform-origin: center bottom;
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
