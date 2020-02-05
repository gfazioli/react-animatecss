import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName } from "../AnimateCSS";

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

  animation-name: ${p => animateName("jackInTheBox", p)};
`;

const JackInTheBox = (props: IAnimateCSS) => <JackInTheBoxStyled {...props}>{props?.children}</JackInTheBoxStyled>;

export default JackInTheBox;
