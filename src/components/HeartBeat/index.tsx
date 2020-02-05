import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName } from "../AnimateCSS";

const HeartBeatStyled = styled(AnimateCSS)`
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.3);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.3);
    }

    70% {
      transform: scale(1);
    }
  }

  animation-name: ${p => animateName("heartBeat", p)};
  animation-timing-function: ease-in-out;
`;

const HeartBeat = (props: IAnimateCSS) => <HeartBeatStyled {...props}>{props?.children}</HeartBeatStyled>;

export default HeartBeat;
