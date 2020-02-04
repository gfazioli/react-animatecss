import Bounce from "../../../src/components/Bounce";
import styled from "styled-components";

const BounceAnimation = styled(Bounce).attrs({ as: "div" })`
  display: block;
`;

export default () => (
  <BounceAnimation animate={true} duration="5s" direction="left" mode="in">
    <h1>Say Hello to React AnimateCSS</h1>
  </BounceAnimation>
);
