import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS } from "../AnimateCSS"

interface Props extends IAnimateCSS { }

const HeartBeatStyled = styled(AnimateCSS) <Props>`
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

const HeartBeat: FunctionComponent<Props> = props => {

  const { children, duration = "1.3s", ...others } = props;

  return (
    <HeartBeatStyled {...others}>
      {children}
    </HeartBeatStyled>
  );
}

export default HeartBeat;
