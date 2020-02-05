import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName } from "../AnimateCSS";

const FlashStyled = styled(AnimateCSS)`
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

  animation-name: ${p => animateName("flash", p)};
`;

const Flash = (props: IAnimateCSS) => <FlashStyled {...props}>{props?.children}</FlashStyled>;

export default Flash;
