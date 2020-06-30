import React, { Component } from "react";
import Constants from "../../config/Constants.js";

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
      console.log("events: " + events[i]);
    }
  }

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i] === "move-down") {
        console.log("Down dispatch successful");
        // console.log(entities);
        character.xspeed = 0;
        character.yspeed = 5;
      } else if (events[i] === "move-up") {
        console.log("Up dispatch successful");
        character.xspeed = 0;
        character.yspeed = -5;
      } else if (events[i] === "move-left") {
        console.log("Left dispatch successful");
        character.xspeed = -5;
        character.yspeed = 0;
      } else if (events[i] === "move-right") {
        console.log("Right dispatch successful");
        character.xspeed = 5;
        character.yspeed = 0;
      }
    }
    // events = [];
  }
  if (i % 6 === 0) {
    if (character != null) {
      if (character.x <= Constants.LEFT_ANSWER[0] + Constants.DOOR_WIDTH) {
        //fade out
        //swap problem question and answers
        dispatch({ type: "answer-left" });
      } else if (
        character.x >=
        Constants.RIGHT_ANSWER[0] - Constants.DOOR_WIDTH
      ) {
        //fade out
        //swap problem question and answers
        dispatch({ type: "answer-right" });
      } else if (
        character.y <=
        Constants.TOP_ANSWER[1] + Constants.DOOR_HEIGHT
      ) {
        //fade out
        //swap problem question and answers
        dispatch({ type: "answer-top" });
      } else {
        character.x += character.xspeed * 6;
        character.y += character.yspeed * 6;
      }
    }
  }
  i++;
  return entities;
}
