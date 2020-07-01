import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Colors from "../../config/Colors.js";
import Constants from "../../config/Constants.js";
import Question from "./Question.js";
import Answer from "./Answer.js";

const generateAnswers = (a, b) => {
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
    a = this.generateRandomNumber();
    b = this.generateRandomNumber();
    onCorrect = props.onCorrect;
    onIncorrect = props.onIncorrect;
    answer = generateAnswers(a, b);
  }

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  isCorrectAnswer = (index) => answer[index] === a + b;

  render() {
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
          dispatchCorrectness={
            this.isCorrectAnswer(0) ? onCorrect : onIncorrect
          }
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-up"
          style={styles.topAnswer}
          text={answer[1]}
          dispatchCorrectness={
            this.isCorrectAnswer(1) ? onCorrect : onIncorrect
          }
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-right"
          style={styles.rightAnswer}
          text={answer[2]}
          dispatchCorrectness={
            this.isCorrectAnswer(2) ? onCorrect : onIncorrect
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  problemContainer: {
    height: Constants.PROBLEM_CONTAINER_SIZE[1],
    width: Constants.PROBLEM_CONTAINER_SIZE[0],
    // backgroundColor: Colors.problemBackground,
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
    backgroundColor: Colors.answer,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
});

export default Problem;
