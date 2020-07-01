import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Colors from "../../config/Colors.js";
import Constants from "../../config/Constants.js";
import Question from "./Question.js";
import Answer from "./Answer.js";

var oldA = -1;
var oldB = -1;
const generateAnswers = (props) => {
  if (props.a != oldA || props.b != oldB) {
    let answer = Array(3);
    shuffle = require("shuffle-array");
    answer[0] = props.a + props.b - 1;
    answer[1] = props.a + props.b;
    answer[2] = props.a + props.b + 1;
    oldA = props.a;
    oldB = props.b;
    return shuffle(answer);
  }
  return null;
};

class Problem extends Component {
  // only called once (so we know)
  constructor(props) {
    super(props);
    this.state = {};
    this.difficulty = this.props.difficulty;
    // a = props.a;
    // b = props.b;
    onCorrect = props.onCorrect;
    onIncorrect = props.onIncorrect;
    leftAnswer = index = 0;
    answer = generateAnswers(props);
  }

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  render() {
    // these call infinitely
    newAnswer = generateAnswers(this.props);
    if (newAnswer != null) answer = newAnswer;

    return (
      <View style={styles.problemContainer}>
        <Question
          style={{ top: 300 }}
          problem={this.props.a + " + " + this.props.b + "  = ?"}
        ></Question>
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-left"
          style={styles.leftAnswer}
          text={answer[0]}
          onPress={
            answer[0] === this.props.a + this.props.b ? onCorrect : onIncorrect
          }
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-up"
          style={styles.topAnswer}
          text={answer[1]}
          onPress={
            answer[1] === this.props.a + this.props.b ? onCorrect : onIncorrect
          }
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-right"
          style={styles.rightAnswer}
          text={answer[2]}
          onPress={
            answer[2] === this.props.a + this.props.b ? onCorrect : onIncorrect
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
