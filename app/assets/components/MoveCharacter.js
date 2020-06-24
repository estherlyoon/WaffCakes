import React, { Component } from "react";

export default function MoveCharacter(entities, { touches, events, dispatch }) {
  let character = entities.character;
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      console.log(events[i]);
      console.log(entities);
      if (events[i] === "move-down") {
        console.log("Down dispatch successful");
        console.log(entities);
        character.y += 10;
        character.color = "black";
      }
      if (events[i] === "move-up") {
        console.log("Up dispatch successful");
        character.y -= 10;
        character.color = "yellow";
      }
      if (events[i] === "move-left") {
        console.log("Left dispatch successful");
        character.x -= 10;
        character.color = "orange";
      }
      if (events[i] === "move-right") {
        console.log("Right dispatch successful");
        character.x += 10;
        character.color = "pink";
      }
    }
    // events = [];
  }
  return entities;
}
