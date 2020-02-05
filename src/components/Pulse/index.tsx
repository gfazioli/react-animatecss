import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName } from "../AnimateCSS";

const PulseStyled = styled(AnimateCSS)`
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  animation-name: ${p => animateName("pulse", p)};
`;

const Pulse = (props: IAnimateCSS) => <PulseStyled {...props}>{props?.children}</PulseStyled>;

export default Pulse;
