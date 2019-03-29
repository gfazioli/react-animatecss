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

const JackInTheBoxStyled = styled(AnimateCSS) <Props>`
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

const JackInTheBox: FunctionComponent<Props> = props => {

  const { children, mode = "in", ...others } = props;

  return (
    <JackInTheBoxStyled mode={mode} {...others}>
      {children}
    </JackInTheBoxStyled>
  );
}

export default JackInTheBox;
