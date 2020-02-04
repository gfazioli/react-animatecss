import styled from "styled-components";
import { AnimateCSS, animateName } from "../AnimateCSS";

export default styled(AnimateCSS)`
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  animation-name: ${p => animateName("flash", p)};
`;
