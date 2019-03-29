import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS } from "../AnimateCSS"

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


  animation-name: ${p => p.animate ? "shake" : "none"};
`;

const Shake: FunctionComponent = props => {

  const { children, ...others } = props;

  return (
    <ShakeStyled {...others}>
      {children}
    </ShakeStyled>
  );
}

export default Shake;
