import React from "react";
import styled from "styled-components";
import { AnimateCSS, animateName, IAnimateCSS, Mode } from "../AnimateCSS";

interface RotateProps extends IAnimateCSS {
  /**
   * Animate mode "in"|"out"
   *
   * @default "in"
   */
  mode?: Mode;
  /**
   * Animation direction "up"|"down". You should use `direction` alogn with `from`. Default value for `from` is `left`
   *
   * @default none
   */
  direction?: "" | "up" | "down";
  /**
   * Rotate from "left"|"right". You should use `from` alogn with `direction`. Default value for `direction` is `up`
   *
   * @default none
   */
  from?: "" | "left" | "right";
}

const RotateStyled = styled(AnimateCSS)<RotateProps>`
  @keyframes rotateIn {
    from {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    to {
      transform-origin: center;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInDownLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInDownRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInUpLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes rotateInUpRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }

    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes rotateOut {
    from {
      transform-origin: center;
      opacity: 1;
    }

    to {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutDownLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }

    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutDownRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }

    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutUpLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }

    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  @keyframes rotateOutUpRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }

    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  }

  animation-name: ${p =>
    animateName("rotate", {
      ...p,
      mode: p.mode || "in",
      direction: p.direction || (p.from ? "up" : ""),
      from: p.from || (p.direction ? "left" : ""),
    })};
`;

const Rotate = (props: RotateProps) => <RotateStyled {...props}>{props?.children}</RotateStyled>;

export default Rotate;
