import React, { Component } from "react";

export default function MoveCharacter(entities, { touches, events, dispatch }) {
  let character = entities.character;
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      // console.log(events[i]);
    }
    // events = [];
  }
  // dispatch({ type: "changeProblem" });
  return entities;
}
