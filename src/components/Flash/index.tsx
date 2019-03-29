import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS } from "../AnimateCSS"

interface Props extends IAnimateCSS { }

const FlashStyled = styled(AnimateCSS) <Props>`
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  animation-name: ${p => p.animate ? "flash" : "none"};

`;

const Flash: FunctionComponent<Props> = props => {

  const { children, ...others } = props;

  return (
    <FlashStyled {...others}>
      {children}
    </FlashStyled>
  );
}

export default Flash;
