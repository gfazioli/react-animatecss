import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS } from "../AnimateCSS"

interface Props extends IAnimateCSS { }

const WobbleStyled = styled(AnimateCSS) <Props>`
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }

    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  animation-name: ${p => p.animate ? "wobble" : "none"};
`;

const Wobble: FunctionComponent<Props> = props => {

  const { children, ...others } = props;

  return (
    <WobbleStyled {...others}>
      {children}
    </WobbleStyled>
  );
}

export default Wobble;
