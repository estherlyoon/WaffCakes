import React, { Component } from "react";
import Constants from "../../config/Constants.js";

var i = 0;

//1 if correct, -1 if incorrect, 0 if not set, gets reset with new problem
var answerCorrect = 0;
export default function GameLoop(entities, { touches, events, dispatch }) {
  let character = entities.character;
  let lackey = entities.lackey;
  let fireball = entities.fireball;
  let characterHealth = entities.characterHealth;
  let lackeyHealth = entities.lackeyHealth;
  let progressBar = entities.progressBar;
  let win = entities.win;

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
      // handle lackey battle
      if (typeof lackey !== "undefined") {

        if (events[i] === "lackey-incorrect") {
          characterHealth.health -= 1;
          if (characterHealth.health == 0) {
            dispatch("gameover"); // battleover instead? TODO-- gameover if out of lives?
          }
        }

        if (events[i] === "lackey-correct") {
          // lackey defeated
          if (lackeyHealth.health == 1) {
            if (lackey.isBoss)
              dispatch("boss-beaten");
            else
              dispatch("lackey-beaten");
          }
          else {
            lackeyHealth.health -= 1;
            fireball.y = lackey.y + 10;
            fireball.problemSeed += 1;
          }
        } 
      }
    }
  }

  //console.log(win);
  // moving character
  if (i % 6 === 0) {
    if (typeof character !== "undefined") {
        character.x += character.xspeed * 6;
        character.y += character.yspeed * 6;
        if(win == undefined){

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
          } 
        }
      }
  }

  // moving fireball
  if (i % 10 === 0 && typeof fireball !== "undefined") {
    // if player types in correct answer, generate new fireball with new problem and - lackey health

    // when fireball reaches character, generate new fireball with new problem and - character health
    if (character.y - fireball.y < 15 ){
      fireball.y = lackey.y + 10;
      fireball.problemSeed += 1;
      //handle game over
      characterHealth.health -= 1;
      if (characterHealth.health == 0) {
        dispatch("gameover"); // battleover instead? TODO-- gameover if out of lives?
      }
    } // otherwise, move towards character
    else {
      fireball.y += Constants.FIREBALL_SPEED;
    }
  }

  // going to boss battle
  if (typeof progressBar !== 'undefined' && progressBar.rooms == Constants.LEVEL_ROOMS) {
    dispatch("boss-battle");
  }

  //handling win animation
  if(character.y < 0){
    if(lackey != undefined && lackey.isBoss == true){
      dispatch("go-home")
    } else {
      //console.log(lackey)
      dispatch("correct")

    }
  }
  i++;
  return entities;
}
