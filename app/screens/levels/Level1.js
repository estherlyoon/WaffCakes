import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
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
import { add } from "react-native-reanimated";
import Images from "../../config/Images.js";
const onCorrect = (engine) => {
  engine.dispatch("correct-answer-touched");
};

const onIncorrect = (engine) => {
  engine.dispatch("incorrect-answer-touched");
};

export default function Level1({ navigation }) {
  let engine = null;
  const setEngine = (ref) => {
    engine = ref;
    console.log("set engine called");
    if (engine != null) addEntities();
  };

  const onEvent = (e) => {
    console.log(e);
    if (e === "correct") {
      console.log("onEvent correct answer found");
      removeProblem();
      addEntities();
    } else if (e === "incorrect") {
      console.log("onEvent incorrect answer found");
      removeProblem();
      addWrongEntities();
    }
  };
  let removeProblem = () => {
    engine.swap({
      character: {
        x: 175,
        y: 150,
        xspeed: 0,
        yspeed: 0,
        backcolor: "blue",
        renderer: <Character />,
      },
    });
    engine.dispatch("reset-user-answer");
  };
  let addEntities = () => {
    engine.swap({
      problem: {
        engine: engine,
        difficulty: "medium",
        onCorrect: () => onCorrect(engine),
        onIncorrect: () => onIncorrect(engine),
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
  };

  let addWrongEntities = () => {
    engine.swap({
      problem: {
        engine: engine,
        difficulty: "medium",
        onCorrect: () => onCorrect(engine),
        onIncorrect: () => onIncorrect(engine),
        renderer: <Problem />,
      },
      character: {
        x: 175,
        y: 250,
        xspeed: 0,
        yspeed: 0,
        backcolor: "pink",
        renderer: <Character />,
      },
    });
  };

  return (
    <View style={styles.levelContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={Images.paperBackground}
      ></ImageBackground>
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
        <SettingsModal navigation={navigation} />
        <StatusBar hidden={true} />
        {/* <View style={styles.swipeArea}>
          <SwipeToMove engine={engine} />
        </View> */}
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
  },
  backgroundImage: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  swipeArea: {
    left: 90,
    top: 300,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    backgroundColor: "pink",
  },
});
