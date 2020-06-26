import React, { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import Colors from "../../config/Colors.js";
import Character from "../../assets/components/Character.js";
import MoveCharacter from "../../assets/components/MoveCharacter.js";
import Problem from "../../assets/components/Problem.js";
import SwipeToMove from "../../assets/components/SwipeToMove.js";

import { GameEngine } from "react-native-game-engine";

const onEvent = (e) => {
  console.log(e.type);
  if (e.type === "changeProblem") {
    console.log("Change problem");
  }
};

export default function Level1({ navigation }) {
  let engine = null;
  let character = null;

  const setEngine = (ref) => {
    engine = ref;
    console.log("set engine called");
    if (engine != null) addEntities();
  };

  addEntities = () =>
    engine.swap({
      problem: {
        engine: engine,
        difficulty: "medium",
        renderer: <Problem />,
      },
      character: {
        x: 175,
        y: 150,
        xspeed: 0,
        yspeed: 0,
        backcolor: "blue",
        renderer: <Character />,
      },
    });

  return (
    <View style={styles.levelContainer}>
      <SettingsModal navigation={navigation} />
      <GameEngine
        //For assigning the engine to a class variable
        ref={setEngine}
        style={styles.gameContainer}
        //For specifying what the game loop is going to be
        systems={[MoveCharacter]}
        //The new objects on the screen
        entities={{
          character: {
            renderer: <Character />,
          },
        }}
        //Sending events outs
        onEvent={onEvent}
      >
        <StatusBar hidden={true} />
        <View
          style={{
            left: 90,
            top: 300,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 200,
            backgroundColor: Colors.swipeToMove,
          }}
        >
          <SwipeToMove engine={engine} />
        </View>
      </GameEngine>
      <Button title="LOAD ROOM" onPress={addEntities} />
      {/* <Button title="Play Animation" onPress={this.character.play} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  levelContainer: {
    flex: 1,
    backgroundColor: Colors.levelContainer,
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gameCountainer,
  },
});
