import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS } from "../AnimateCSS"

interface Props extends IAnimateCSS { }

const PulseStyled = styled(AnimateCSS) <Props>`
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

const Pulse: FunctionComponent<Props> = props => {

  const { children, ...others } = props;

  return (
    <PulseStyled {...others}>
      {children}
    </PulseStyled>
  );
}

export default Pulse;
