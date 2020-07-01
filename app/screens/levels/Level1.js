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
import { add } from "react-native-reanimated";

const onCorrect = (engine) => {
  engine.dispatch("CorrectAnswer");
  console.log("correct! (spawn new room here)");
};

const onIncorrect = (engine) => {
  engine.dispatch("IncorrectAnswer");
  console.log("wrong! (spawn enemies here)");
};

export default function Level1({ navigation }) {
  let engine = null;
  let character = null;

  const setEngine = (ref) => {
    engine = ref;
    console.log("set engine called");
    if (engine != null) addEntities();
  };

  let generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const generateAnswers = (props) => {
    let answer = Array(3);
    shuffle = require("shuffle-array");
    answer[0] = props.a + props.b - 1;
    answer[1] = props.a + props.b;
    answer[2] = props.a + props.b + 1;
    return shuffle(answer);
  };

  const onEvent = (e) => {
    console.log(e);
    if (e === "correct") {
      console.log("onEvent correct answer found");
      addEntities();
    } else if (e === "incorrect") {
      console.log("onEvent incorrect answer found");
      addWrongEntities();
    }
  };
  //   };
  //
  let addEntities = () => {
    engine.swap({
      problem: {
        engine: engine,
        difficulty: "medium",
        a: generateRandomNumber(),
        b: generateRandomNumber(),
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
    engine.dispatch("resetProblem");
  };

  let addWrongEntities = () => {
    engine.swap({
      problem: {
        engine: engine,
        difficulty: "medium",
        a: generateRandomNumber(),
        b: generateRandomNumber(),
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
    engine.dispatch("resetProblem");
  };

  return (
    <View style={styles.levelContainer}>
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
    backgroundColor: "yellow",
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
