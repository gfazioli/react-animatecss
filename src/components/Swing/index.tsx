import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, IAnimateCSS } from "../AnimateCSS";

const SwingStyled = styled(AnimateCSS)`
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  animation-name: ${p => animateName("swing", p)};
  transform-origin: top center;
`;

const Swing = (props: IAnimateCSS) => <SwingStyled {...props}>{props?.children}</SwingStyled>;

export default Swing;
