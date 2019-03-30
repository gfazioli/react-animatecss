import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS } from "../AnimateCSS"

const PulseStyled = styled(AnimateCSS)`
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  animation-name: ${p => p.animate ? "pulse" : "none"};
`;

const Pulse: FunctionComponent<IAnimateCSS> = props => {

  const { children, ...others } = props;

  return (
    <PulseStyled {...others}>
      {children}
    </PulseStyled>
  );
}

export default Pulse;
