import React, { Component } from "react";
import Constants from "../../config/Constants.js";

var i = 0;

//1 if correct, -1 if incorrect, 0 if not set, gets reset with new problem
var answerCorrect = 0;
export default function MoveCharacter(entities, { touches, events, dispatch }) {
  let character = entities.character;
  let lackey = entities.lackey;
  let fireball = entities.fireball;

  //animation purposes
  if (i % 6 == 0) {
    if (typeof character !== "undefined") character.frame += 1;
    if (typeof lackey !== "undefined") lackey.frame += 1;
    if (typeof fireball !== "undefined") fireball.frame += 1;
  }

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i] === "reset-user-answer") answerCorrect = 0;
      else if (events[i] === "correct-answer-touched")
        answerCorrect = answerCorrect === 0 ? 1 : answerCorrect;
      else if (events[i] === "incorrect-answer-touched")
        answerCorrect = answerCorrect === 0 ? -1 : answerCorrect;

      if (
        typeof character !== "undefined" &&
        character.xspeed === 0 &&
        character.yspeed === 0
      ) {
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

  // moving character
  if (i % 6 === 0) {
    if (typeof character !== "undefined") {
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

  // moving fireball
  if (i % 10 === 0 && typeof fireball !== "undefined") {
    // if player types in correct answer, generate new fireball with new problem

    // when fireball reaches character, generate new fireball with new problem
    if (character.y - fireball.y < 15) {
      fireball.y = lackey.y + 10;
      fireball.newProblem = true;
      console.log(fireball.newProblem);
    } // otherwise, move towards character
    else {
      fireball.y += 10;
    }
  }

  i++;
  return entities;
}
