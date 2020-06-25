import React, { Component } from "react";

var i = 0;
export default function MoveCharacter(entities, { touches, events, dispatch }) {
  let character = entities.character;
  // if (i === 100) {
  //   entities.character.props.ref.idle({
  //     type: "idle",
  //     fps: 24,
  //     resetAfterFinish: true,
  //   });
  // }

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      console.log(events[i]);
    }
    // events = [];
  }
  // dispatch({ type: "changeProblem" });

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      // console.log(events[i]);
      // console.log(entities);
      if (events[i] === "move-down") {
        console.log("Down dispatch successful");
        console.log(entities);
        // character.y += 10;
        character.xspeed = 0;
        character.yspeed = 5;
        character.backcolor = "black";
      }
      if (events[i] === "move-up") {
        console.log("Up dispatch successful");
        character.xspeed = 0;
        character.yspeed = -5;
        character.backcolor = "yellow";
      }
      if (events[i] === "move-left") {
        console.log("Left dispatch successful");
        character.xspeed = -5;
        character.yspeed = 0;
        character.backcolor = "orange";
      }
      if (events[i] === "move-right") {
        console.log("Right dispatch successful");
        character.xspeed = 5;
        character.yspeed = 0;
        character.backcolor = "pink";
      }
    }
    // events = [];
  }
  if (i % 6 === 0) {
    character.x += character.xspeed * 6;
    character.y += character.yspeed * 6;
    // console.log("fdsf");
  }
  i++;

  // if (i % 100 === 0) {
  //   console.log("hi");
  // }
  return entities;
}
