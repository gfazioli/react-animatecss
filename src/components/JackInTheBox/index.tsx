import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS } from "../AnimateCSS"

const JackInTheBoxStyled = styled(AnimateCSS)`

  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }

    50% {
      transform: rotate(-10deg);
    }

    70% {
      transform: rotate(3deg);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation-name: ${p => p.animate ? "jackInTheBox" : "none"};

`;

const JackInTheBox: FunctionComponent<IAnimateCSS> = props => {

  const { children, ...others } = props;

  return (
    <JackInTheBoxStyled {...others}>
      {children}
    </JackInTheBoxStyled>
  );
}

export default JackInTheBox;
