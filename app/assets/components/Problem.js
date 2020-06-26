import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Colors from "../../config/Colors.js";
import Constants from "../../config/Constants.js";
import Question from "./Question.js";
import Answer from "./Answer.js";

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.difficulty = this.props.difficulty;
    a = [1, 2, 3, 4, 5, 6];
    b = [1, 2, 3, 4, 5, 6];
    leftAnswer = index = 0;
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
          text="3"
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-up"
          style={styles.topAnswer}
          text="4"
        />
        <Answer
          engine={this.props.engine}
          dispatchMessage="move-right"
          style={styles.rightAnswer}
          text="5"
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
