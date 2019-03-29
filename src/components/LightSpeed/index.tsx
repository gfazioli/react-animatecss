import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IAnimateCSS, AnimateCSS, uc } from "../AnimateCSS"

interface Props extends IAnimateCSS {
  /**
 * Animate mode "in"|"out"
 * 
 * @default "in"
 */
  mode?: string;
}

const LightSpeedStyled = styled(AnimateCSS) <Props>`
  
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

  animation-name: ${p => p.animate ? "lightSpeed" + uc(p.mode) : "none"};
  animation-timing-function: ${p => "ease" + p.mode};
`;

const LightSpeed: FunctionComponent<Props> = props => {

  const { children, mode = "in", ...others } = props;

  return (
    <LightSpeedStyled mode={mode} {...others}>
      {children}
    </LightSpeedStyled>
  );
}

export default LightSpeed;
