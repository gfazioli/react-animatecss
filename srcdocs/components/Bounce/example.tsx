import Bounce from "../../../src/components/Bounce";
import { Mode, Direction } from "../../../src/components/AnimateCSS";
import styled from "styled-components";
import React, { useState } from "react";

export const BounceAnimation = styled(Bounce).attrs({ as: "div" })`
  display: block;
`;

const Root = styled.div`
  border: 1px solid #ced4de;
  border-radius: 8px;
  padding: 8px;
  position: relative;
`;

const Button = styled.button<{ selected?: boolean }>`
  background-color: ${p => (p.selected ? "tomato" : "#eee")};
  color: ${p => (p.selected ? "white" : "#222")};
  margin: 0 3px;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid #aaa;
`;

const Input = styled.input`
  padding: 3px;
  border-radius: 3px;
  border: 1px solid #aaa;
`;

export default () => {
  const [mode, setMode] = useState<Mode>();
  const [direction, setDirection] = useState<Direction>();
  const [duration, setDuration] = useState();
  const [delay, setDelay] = useState();
  const [as, setAs] = useState();
  const [repeat, setRepeat] = useState();

  return (
    <Root>
      <h1>
        Say Hello to React{" "}
        <Bounce
          as={as}
          repeat={repeat}
          animate={true}
          delay={delay}
          duration={duration}
          direction={direction}
          mode={mode}>
          AnimateCSS
        </Bounce>
      </h1>

      <div>
        <label>Tag: </label>
        <Input placeholder="Eg: sup" type="text" value={as} onChange={(evt: any) => setAs(evt.target.value)} />
      </div>

      <div>
        <label>Repeat: </label>
        <Input
          placeholder="Eg: 1 or infinite"
          type="text"
          value={repeat}
          onChange={(evt: any) => setRepeat(evt.target.value)}
        />
      </div>

      <div>
        <label>Duration: </label>
        <Input
          placeholder="Eg: 1s"
          type="text"
          value={duration}
          onChange={(evt: any) => setDuration(evt.target.value)}
        />
      </div>

      <div>
        <label>Delay: </label>
        <Input placeholder="Eg: 1s" type="text" value={delay} onChange={(evt: any) => setDelay(evt.target.value)} />
      </div>

      <div>
        <label>Mode: </label>
        <Button selected={!mode} onClick={() => setMode(null)}>
          none
        </Button>
        <Button selected={mode === "in"} onClick={() => setMode("in")}>
          in
        </Button>
        <Button selected={mode === "out"} onClick={() => setMode("out")}>
          out
        </Button>
      </div>

      <div>
        <label>Direction: </label>
        <Button selected={!direction} onClick={() => setDirection(null)}>
          none
        </Button>
        <Button selected={direction === "down"} onClick={() => setDirection("down")}>
          Down
        </Button>
        <Button selected={direction === "left"} onClick={() => setDirection("left")}>
          Left
        </Button>
        <Button selected={direction === "right"} onClick={() => setDirection("right")}>
          Right
        </Button>
        <Button selected={direction === "up"} onClick={() => setDirection("up")}>
          Up
        </Button>
      </div>
    </Root>
  );
};
