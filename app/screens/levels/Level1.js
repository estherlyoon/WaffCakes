import React, { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

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

let addProblem = () => {};
// testDispatch = () => console.log("button pressed");

export default function Level1({ navigation }) {
  const [engine, setEngine] = useState(null);
  let generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  testButton = () => console.log("button pressed");
  testDispatch = () => engine.dispatch("move-down");
  addEntities = () =>
    engine.swap({
      problem: {
        engine: engine,
        lvl1A: generateRandomNumber(),
        lvl1B: generateRandomNumber(),
        // testD: testDispatch(),
        renderer: <Problem />,
      },
      character: {
        x: 175,
        y: 150,
        xspeed: 0,
        yspeed: 0,
        backcolor: "blue",
        ref: (ref) => {
          this.character = ref;
        },
        // renderer: <Character conf={{ type: "idle", fps: 24 }} />,
        renderer: (
          <Character
            ref={(ref) => {
              this.character = ref;
            }}
          />
        ),
      },
    });

  return (
    <View style={styles.levelContainer}>
      <SettingsModal navigation={navigation} />
      <GameEngine
        //For assigning the engine to a class variable
        ref={(ref) => setEngine(ref)}
        style={styles.gameContainer}
        //For specifying what the game loop is going to be
        systems={[MoveCharacter]}
        //The new objects on the screen
        entities={{
          problem: {
            engine: engine,
            lvl1A: generateRandomNumber(),
            lvl1B: generateRandomNumber(),
            // testD: testDispatch(),
            renderer: <Problem />,
          },
          character: {
            x: 175,
            y: 150,
            xspeed: 0,
            yspeed: 0,
            backcolor: "blue",
            ref: (ref) => {
              this.character = ref;
            },
            // renderer: <Character conf={{ type: "idle", fps: 24 }} />,
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
            backgroundColor: "pink",
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
    backgroundColor: "#fff",
  },
  gameContainer: {
    flex: 1,
    backgroundColor: "#f00",
  },
});
