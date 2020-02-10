import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import {
  Bounce,
  Fade,
  Flash,
  Flip,
  HeadShake,
  HeartBeat,
  Hinge,
  JackInTheBox,
  Jello,
  LightSpeed,
  Pulse,
  Roll,
  Rotate,
  RubberBand,
  Shake,
  Slide,
  Swing,
  Tada,
  Wobble,
  Zoom,
} from "../../src";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
`;

const Tools = styled.div`
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 16px;
`;

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 3px;
  width: 200px;
`;

const Playground = styled.div`
  position: relative;
  padding: 32px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  background-color: #4497df;
  border-radius: 3px 3px 0 0;
  padding: 16px;
  color: white;
  margin: 0;
  font-size: 18px;
  a {
    color: white;
    text-decoration: none;
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: #708ba6;
  border: 1px solid #84a7ca;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;

export default () => {
  const [mode, setMode] = useState("in");

  const animations: any[] = [
    ["Bounce", Bounce, { mode }],
    ["Fade", Fade, { mode }],
    ["Flash", Flash],
    ["Flip", Flip, { mode }],
    ["HeadShake", HeadShake],
    ["HeartBeat", HeartBeat],
    ["Hinge", Hinge],
    ["JackInTheBox", JackInTheBox],
    ["Jello", Jello],
    ["LightSpeed", LightSpeed, { mode }],
    ["Pulse", Pulse],
    ["Roll", Roll, { mode }],
    ["Rotate", Rotate, { mode }],
    ["RubberBand", RubberBand],
    ["Shake", Shake],
    ["Slide", Slide, { mode }],
    ["Swing", Swing],
    ["Tada", Tada],
    ["Wobble", Wobble],
    ["Zoom", Zoom, { mode }],
  ];

  return (
    <>
      <Root>
        {animations.map((e, i) => {
          const title: string = e[0];
          const Component: any = e[1];
          const props = e[2] ? e[2] : {};
          return (
            <Container key={i}>
              <Title>
                <a href={`/components/${title.toLowerCase()}`}>{title}</a>
              </Title>
              <Playground>
                <Component as="div" {...props} block animate={true} repeat="infinite">
                  Animate CSS
                </Component>
              </Playground>
            </Container>
          );
        })}
      </Root>
      <Tools>
        <Button onClick={() => setMode(mode === "in" ? "out" : "in")}>
          Switch Mode {mode === "in" ? "out" : "in"}
        </Button>
      </Tools>
    </>
  );
};
