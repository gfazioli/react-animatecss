import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS } from "../AnimateCSS"

const HeartBeatStyled = styled(AnimateCSS)`
@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

  animation-name: ${p => p.animate ? "heartBeat" : "none"};
  animation-timing-function: ease-in-out;
`;

const HeartBeat: FunctionComponent<IAnimateCSS> = props => {

  const { children, duration = "1.3s", ...others } = props;

  return (
    <HeartBeatStyled {...others}>
      {children}
    </HeartBeatStyled>
  );
}

export default HeartBeat;
