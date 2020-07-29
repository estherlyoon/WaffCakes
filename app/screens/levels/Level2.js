import React, { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import Character from "../../assets/components/Character.js";
import GameLoop from "../../assets/components/GameLoop.js";
import Problem from "../../assets/components/Problem.js";
import SwipeToMove from "../../assets/components/SwipeToMove.js";

import { GameEngine } from "react-native-game-engine";

const onEvent = (e) => {
  console.log(e.type);
  if (e.type === "changeProblem") {
    console.log("Change problem");
  }
};

export default function Level2({ navigation }) {
  const [engine, setEngine] = useState(null);
  return (
    <View style={styles.levelContainer}>
      <SettingsModal navigation={navigation} />
      <GameEngine
        //For assigning the engine to a class variable
        ref={(ref) => setEngine(ref)}
        style={styles.gameContainer}
        //For specifying what the game loop is going to be
        systems={[GameLoop]}
        //The new objects on the screen
        entities={{
          character: {
            x: 2,
            y: 2,
            xspeed: 0,
            yspeed: 0,
            backcolor: "blue",
            renderer: <Character />,
          },
        }}
        //Sending events out
        onEvent={onEvent}
      >
        <StatusBar hidden={true} />
        <View style={{ width: 100, height: 100, backgroundColor: "pink" }}>
          <SwipeToMove engine={engine} />
        </View>
      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  levelContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  gameContainer: {
    flex: 1,
    backgroundColor: "red",
  },
});
