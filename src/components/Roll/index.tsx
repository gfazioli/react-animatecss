import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, IAnimateCSS, Mode } from "../AnimateCSS";

interface RollProps extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   *
   * @default "in"
   */
  mode?: Mode;
}

const RollStyled = styled(AnimateCSS)<RollProps>`
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

  animation-name: ${p => animateName("roll", { ...p, mode: p.mode || "in" })};
`;

const Roll = (props: RollProps) => <RollStyled {...props}>{props?.children}</RollStyled>;

export default Roll;
