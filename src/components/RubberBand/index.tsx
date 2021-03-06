import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, IAnimateCSS } from "../AnimateCSS";

const RubberBandStyled = styled(AnimateCSS)`
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  animation-name: ${p => animateName("rubberBand", p)};
`;

const RubberBand = (props: IAnimateCSS) => <RubberBandStyled {...props}>{props?.children}</RubberBandStyled>;

export default RubberBand;
