import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS } from "../AnimateCSS"

const TadaStyled = styled(AnimateCSS)`
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  animation-name: ${p => p.animate ? "tada" : "none"};
`;

const Tada: FunctionComponent = props => {

  const { children, ...others } = props;

  return (
    <TadaStyled {...others}>
      {children}
    </TadaStyled>
  );
}

export default Tada;
