import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Colors from "../../config/Colors.js";
import Constants from "../../config/Constants.js";
import Question from "./Question.js";
import Answer from "./Answer.js";

const generateAnswers = () => {
  let answer = Array(3);
  shuffle = require("shuffle-array");
  answer[0] = a + b - 1;
  answer[1] = a + b;
  answer[2] = a + b + 1;
  return shuffle(answer);
};

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.difficulty = this.props.difficulty;
    a = props.a;
    b = props.b;
    onCorrect = props.onCorrect;
    onIncorrect = props.onIncorrect;
    leftAnswer = index = 0;
    answer = generateAnswers();
  }

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  render() {
    // these call infinitely

    return (
      <View style={styles.problemContainer}>
        <Question
          style={{ top: 300 }}
          problem={a + " + " + b + "  = ?"}
        ></Question>
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-left"
          style={styles.leftAnswer}
          text={answer[0]}
          onPress={answer[0] === a + b ? onCorrect : onIncorrect}
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-up"
          style={styles.topAnswer}
          text={answer[1]}
          onPress={answer[1] === a + b ? onCorrect : onIncorrect}
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-right"
          style={styles.rightAnswer}
          text={answer[2]}
          onPress={answer[2] === a + b ? onCorrect : onIncorrect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  problemContainer: {
    height: Constants.PROBLEM_CONTAINER_SIZE[1],
    width: Constants.PROBLEM_CONTAINER_SIZE[0],
    backgroundColor: Colors.problemBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  leftAnswer: {
    position: "absolute",
    top: Constants.LEFT_ANSWER[1],
    left: Constants.LEFT_ANSWER[0],
    height: 100,
    width: 57,
    backgroundColor: Colors.answer,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  topAnswer: {
    position: "absolute",
    top: Constants.TOP_ANSWER[1],
    left: Constants.TOP_ANSWER[0],
    height: 100,
    width: 57,
    backgroundColor: Colors.answer,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  rightAnswer: {
    position: "absolute",
    top: Constants.RIGHT_ANSWER[1],
    left: Constants.RIGHT_ANSWER[0],
    height: 100,
    width: 57,
    backgroundColor: Colors.anwer,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
});

export default Problem;
