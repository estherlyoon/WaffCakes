import React, { Component } from "react";
import Constants from "../../config/Constants.js";

var i = 0;

//1 if correct, -1 if incorrect, 0 if not set, gets reset with new problem
var answerCorrect = 0;
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
      if (events[i] === "reset-user-answer") answerCorrect = 0;
      else if (events[i] === "correct-answer-touched")
        answerCorrect = answerCorrect === 0 ? 1 : answerCorrect;
      else if (events[i] === "incorrect-answer-touched")
        answerCorrect = answerCorrect === 0 ? -1 : answerCorrect;

      if (character.xspeed === 0 && character.yspeed === 0) {
        if (events[i] === "move-down") {
          character.xspeed = 0;
          character.yspeed = 5;
        } else if (events[i] === "move-up") {
          character.xspeed = 0;
          character.yspeed = -5;
        } else if (events[i] === "move-left") {
          character.xspeed = -5;
          character.yspeed = 0;
        } else if (events[i] === "move-right") {
          character.xspeed = 5;
          character.yspeed = 0;
        }
      }
    }
  }
  if (i % 6 === 0) {
    if (character != null) {
      if (character.x <= Constants.LEFT_ANSWER[0] + Constants.DOOR_WIDTH) {
        if (answerCorrect === 1) {
          dispatch("correct");
        } else if (answerCorrect === -1) {
          dispatch("incorrect");
        }
      } else if (
        character.x >=
        Constants.RIGHT_ANSWER[0] - Constants.DOOR_WIDTH
      ) {
        if (answerCorrect === 1) {
          dispatch("correct");
        } else if (answerCorrect === -1) {
          dispatch("incorrect");
        }
      } else if (
        character.y <=
        Constants.TOP_ANSWER[1] + Constants.DOOR_HEIGHT
      ) {
        if (answerCorrect === 1) dispatch("correct");
        else if (answerCorrect === -1) dispatch("incorrect");
      } else {
        character.x += character.xspeed * 6;
        character.y += character.yspeed * 6;
      }
    }
  }
  i++;
  return entities;
}
