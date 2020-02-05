import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, IAnimateCSS } from "../AnimateCSS";

const ShakeStyled = styled(AnimateCSS)`
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }

  animation-name: ${p => animateName("shake", p)};
`;

const Shake = (props: IAnimateCSS) => <ShakeStyled {...props}>{props?.children}</ShakeStyled>;

export default Shake;
