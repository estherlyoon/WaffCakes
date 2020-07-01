import React, { Component } from "react";
import Constants from "../../config/Constants.js";

var i = 0;

//1 if correct, -1 if incorrect, 0 if not set, gets reset w new problem
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
      if (events[i] === "resetProblem") answerCorrect = 0;
      else if (events[i] === "CorrectAnswer")
        answerCorrect = answerCorrect === 0 ? 1 : answerCorrect;
      else if (events[i] === "IncorrectAnswer")
        answerCorrect = answerCorrect === 0 ? -1 : answerCorrect;
      if (character.xspeed === 0 && character.yspeed === 0) {
        if (events[i] === "move-down") {
          // console.log("Down dispatch successful");
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
    }
    // events = [];
  }
  if (i % 6 === 0) {
    if (character != null) {
      if (character.x <= Constants.LEFT_ANSWER[0] + Constants.DOOR_WIDTH) {
        //fade out
        //swap problem question and answers
        // dispatch("answer-left");
        console.log("AnswerCorrect: " + answerCorrect);
        if (answerCorrect === 1) {
          console.log("dispatched correct");
          dispatch("correct");
        } else if (answerCorrect === -1) {
          console.log("dispatched incorrect");
          dispatch("incorrect");
        }
      } else if (
        character.x >=
        Constants.RIGHT_ANSWER[0] - Constants.DOOR_WIDTH
      ) {
        //fade out
        //swap problem question and answers
        // dispatch("answer-right");
        if (answerCorrect === 1) {
          dispatch("correct");
          console.log("dispatched correct");
        } else if (answerCorrect === -1) {
          dispatch("incorrect");
          console.log("dispatched incorrect");
        }
      } else if (
        character.y <=
        Constants.TOP_ANSWER[1] + Constants.DOOR_HEIGHT
      ) {
        //fade out
        //swap problem question and answers
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
