import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Question from "./Question.js";
import Answer from "./Answer.js";

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("problem engine: " + Object.getOwnPropertyNames(props.engine));
    // a = this.generateRandomNumber();
    a = props.lvl1A;
    b = props.lvl1B;
    // this.testDispatch();
    console.log("problem engine: " + props.engine);
    // props.testD;
  }

  testDispatch = () => this.props.engine.dispatch("move-down");

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  render() {
    return (
      <View style={styles.problemContainer}>
        <Question
          style={{ top: 300 }}
          problem={this.props.lvl1A + " + " + this.props.lvl1B + "  = ?"}
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
    position: "absolute",
    top: 10,
    left: 10,
    height: 400,
    width: 400,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  leftAnswer: {
    position: "absolute",
    top: 140,
    left: 10,
    height: 100,
    width: 57,
    backgroundColor: "pink",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  topAnswer: {
    position: "absolute",
    top: 10,
    left: 150,
    height: 100,
    width: 57,
    backgroundColor: "pink",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  rightAnswer: {
    position: "absolute",
    top: 140,
    left: 300,
    height: 100,
    width: 57,
    backgroundColor: "pink",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
});

export default Problem;
