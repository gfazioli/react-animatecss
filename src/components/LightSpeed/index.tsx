import React from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, animateName, Mode } from "../AnimateCSS";

export interface LightSpeedProps extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   *
   * @default "in"
   */
  mode?: Mode;
}

const LightSpeedStyled = styled(AnimateCSS)<LightSpeedProps>`
  @keyframes lightSpeedIn {
    from {
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }

    60% {
      transform: skewX(20deg);
      opacity: 1;
    }

    80% {
      transform: skewX(-5deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }

    to {
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }

  animation-name: ${p => animateName("lightSpeed", { ...p, mode: p.mode || "in" })};
  animation-timing-function: ${p => "ease" + p.mode || "in"};
`;

const LightSpeed = (props: LightSpeedProps) => <LightSpeedStyled {...props}>{props?.children}</LightSpeedStyled>;

export default LightSpeed;
