import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS } from "../AnimateCSS"

const HeadShakeStyled = styled(AnimateCSS)`
@keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}

  animation-name: ${p => p.animate ? "headShake" : "none"};
  animation-timing-function: ease-in-out;
`;

const HeadShake: FunctionComponent = props => {

  const { children, ...others } = props;

  return (
    <HeadShakeStyled {...others}>
      {children}
    </HeadShakeStyled>
  );
}

export default HeadShake;
