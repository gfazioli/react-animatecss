import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { AnimateCSS, IAnimateCSS, uc } from "../AnimateCSS"

interface Props extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   * 
   * @default "in"
   */
  mode?: string;
}

const RollStyled = styled(AnimateCSS) <Props>`
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }

  animation-name: ${p => p.animate ? "roll" + uc(p.mode) : "none"};

`;

const Roll: FunctionComponent<Props> = props => {

  const { children, mode = "in", ...others } = props;

  return (
    <RollStyled mode={mode} {...others}>
      {children}
    </RollStyled>
  );
}

export default Roll;
