import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName } from "../AnimateCSS";

const HingeStyled = styled(AnimateCSS)`
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }

    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }

    40%,
    80% {
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }

    to {
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  }

  animation-name: ${p => animateName("hinge", p)};
  animation-duration: ${p => p.duration || "2s"};
`;

const Hinge = (props: IAnimateCSS) => <HingeStyled {...props}>{props?.children}</HingeStyled>;

export default Hinge;
