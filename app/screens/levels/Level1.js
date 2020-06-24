import React, { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import Character from "../../assets/components/Character.js";
import MoveCharacter from "../../assets/components/MoveCharacter.js";
import SwipeToMove from "../../assets/components/SwipeToMove.js";

import { GameEngine } from "react-native-game-engine";

export default function Level1({ navigation }) {
  const [engine, setEngine] = useState(null);
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
          character: { x: 2, y: 2, backcolor: "blue", renderer: <Character /> },
        }}
      >
        <StatusBar hidden={true} />
        <View
          style={{
            backgroundColor: "blue",
            width: 300,
            height: 300,
            border: "30px solid green",
            borderColor: "pink",
            overflow: "hidden",
            opacity: 0.5,
          }}
        >
          <SwipeToMove engine={engine} />
        </View>
      </GameEngine>
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
