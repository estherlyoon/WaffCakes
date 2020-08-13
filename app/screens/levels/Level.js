import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import SettingsModal from "../SettingsModal";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import Colors from "../../config/Colors.js";
import Character from "../../assets/components/Character.js";
import GameLoop from "../../assets/components/GameLoop.js";
import Problem from "../../assets/components/Problem.js";
import SwipeToMove from "../../assets/components/SwipeToMove.js";
import Lackey from "../../assets/components/Lackey.js";
import Health from "../../assets/components/Health.js";
import Boss from "../../assets/components/Boss.js";

import { GameEngine } from "react-native-game-engine";
import { add } from "react-native-reanimated";
import Images from "../../config/Images.js";
import Constants from "../../config/Constants";
import Fireball from "../../assets/components/Fireball";
import GameOverModal from "../../assets/components/GameOverModal";
import ProgressBar from "../../assets/components/ProgressBar";

import firebase from 'firebase';
import 'firebase/database';

const onCorrect = (engine) => {
  engine.dispatch("correct-answer-touched");
};

const onIncorrect = (engine) => {
  engine.dispatch("incorrect-answer-touched");
};

var rooms = 0;

export default function Level({ type, level, navigation }) {
  // changes to false when game is over
  const [running, setRunning] = useState(true);
  var user = firebase.auth().currentUser;

  let engine = null;
  const setEngine = (ref) => {
    engine = ref;
    console.log("set engine called");
    if (engine != null) addEntities();
  };

  const changeLevelData = (level) => {
    console.log("change level data for lev " + level);
    if (level == 1) {
      firebase.database().ref(user.uid + "/level1").set(
        true
      );
    } else if (level == 2) {
      firebase.database().ref(user.uid + "/level2").set(
        true
      );
    } else if (level == 3) {
      firebase.database().ref(user.uid + "/level3").set(
        true
      );
    }
  }

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
    } else if (e === "lackey-beaten") {
        //removeProblem();
        addWinEntities(false); //isBoss is false
    } else if (e === "boss-battle") {
        removeProblem();
        console.log("go boss");
        addBoss();
    } else if (e === "boss-beaten") {
      addWinEntities(true); //isBoss is true
      //navigation.navigate("Home");
    } else if (e === "gameover") {
      console.log("GAME OVER");
      setRunning(false);
      //navigation.navigate("Home")
    } else if(e === "go-home"){
        console.log("changing level data");
        changeLevelData(level);
        navigation.navigate("Home")
    }
  };

  let removeProblem = () => {
    engine.swap({
      character: {
        x: Constants.RIGHT_CHARACTER_X,
        y: Constants.RIGHT_CHARACTER_Y,
        xspeed: 0,
        yspeed: 0,
        frame: 0,
        animation: "idle",
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
        type: type,
        onCorrect: () => onCorrect(engine),
        onIncorrect: () => onIncorrect(engine),
        renderer: <Problem />,
      },
      character: {
        x: Constants.RIGHT_CHARACTER_X,
        y: Constants.RIGHT_CHARACTER_Y,
        xspeed: 0,
        yspeed: 0,
        animation: "idle",
        frame: 0,
        renderer: <Character />,
      },
      progressBar: {
          rooms: rooms++,
          renderer: <ProgressBar />
      }
    });
  };

  let addWinEntities = (isBoss) => {
    if(isBoss == true){
      engine.swap({
        character: {
          x: Constants.RIGHT_CHARACTER_X,
          y: Constants.RIGHT_CHARACTER_Y,
          xspeed: 0,
          yspeed: -5,
          animation: "idle",
          frame: 0,
          renderer: <Character />,
        },
        progressBar: {
            rooms: rooms,
            renderer: <ProgressBar />
        },
        win: {
          renderer: <View/>
        },
        lackey: {
          x: Constants.LACKEY_X,
          y: Constants.LACKEY_Y,
          isBoss: true,
          animation: "dead",
          frame: 0,
          renderer: <Boss />,
        }
      });
    } else {
      engine.swap({
        character: {
          x: Constants.RIGHT_CHARACTER_X,
          y: Constants.RIGHT_CHARACTER_Y,
          xspeed: 0,
          yspeed: -5,
          animation: "idle",
          frame: 0,
          renderer: <Character />,
        },
        progressBar: {
            rooms: rooms,
            renderer: <ProgressBar />
        },
        win: {
          renderer: <View/>
        },
        lackey: {
          x: Constants.LACKEY_X,
          y: Constants.LACKEY_Y,
          isBoss: false,
          animation: "idle",
          frame: 0,
          renderer: <Lackey />,
        }
      });
    }
  };

  let addWrongEntities = () => {
    engine.swap({
      character: {
        x: Constants.WRONG_CHARACTER_X,
        y: Constants.WRONG_CHARACTER_Y,
        xspeed: 0,
        yspeed: 0,
        animation: "idle",
        frame: 0,
        renderer: <Character />,
      },
      lackey: {
        x: Constants.LACKEY_X,
        y: Constants.LACKEY_Y,
        isBoss: false,
        animation: "idle",
        frame: 0,
        renderer: <Lackey />,
      },
      fireball: {
        engine: engine,
        x: Constants.LACKEY_X,
        y: Constants.LACKEY_Y,
        animation: "idle",
        frame: 0,
        problemSeed: 0,
        problemType: type,
        renderer: <Fireball />,
      },
      characterHealth: {
        entity: "Your",
        engine: engine,
        x: 50,
        y: 100,
        health: 3,
        renderer: <Health />,
      },
      lackeyHealth: {
        entity: "Enemy",
        x: 250,
        y: 100,
        health: 3,
        renderer: <Health />,
      },
    });
  };

  let addBoss = () => {
    engine.swap({
      character: {
        x: Constants.WRONG_CHARACTER_X,
        y: Constants.WRONG_CHARACTER_Y,
        xspeed: 0,
        yspeed: 0,
        animation: "idle",
        frame: 0,
        renderer: <Character />,
      },
      lackey: {
        x: Constants.LACKEY_X,
        y: Constants.LACKEY_Y,
        isBoss: true,
        animation: "idle",
        frame: 0,
        renderer: <Boss />,
      },
      fireball: {
        engine: engine,
        x: Constants.LACKEY_X,
        y: Constants.LACKEY_Y,
        animation: "idle",
        frame: 0,
        problemSeed: 0,
        problemType: "addition",
        renderer: <Fireball />,
      },
      characterHealth: {
        entity: "Your",
        engine: engine,
        x: 50,
        y: 100,
        health: 3,
        renderer: <Health />,
      },
      lackeyHealth: {
        entity: "Enemy",
        x: 250,
        y: 100,
        health: 3,
        renderer: <Health />,
      },
    });
  };

  return (
    <View style={styles.levelContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={Images.dungeonBackground}
      ></ImageBackground>
      <GameEngine
        //For assigning the engine to a class variable
        ref={setEngine}
        style={styles.gameContainer}
        //For specifying what the game loop is going to be
        systems={[GameLoop]}
        //The new objects on the screen
        entities={{
          character: {
            frame: 0,
            animation: "idle",
            renderer: <Character />,
          },
        }}
        //Sending events outs
        onEvent={onEvent}
        running={running}
      >
        <SettingsModal navigation={navigation} />
        <StatusBar hidden={true} />
        {/* <View style={styles.swipeArea}>
          <SwipeToMove engine={engine} />
        </View> */}
      </GameEngine>
      <GameOverModal isVisible = {!running} navigation = {navigation}/>
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
    // position: "absolute",
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    // flex: 1,
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
