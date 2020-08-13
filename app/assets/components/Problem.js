import React, { Component, useState } from "react";
import { View, StyleSheet, ImagePropTypes, Text } from "react-native";
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
    this.type = this.props.type;
    a = this.generateRandomNumber();
    b = this.generateRandomNumber();
    onCorrect = props.onCorrect;
    onIncorrect = props.onIncorrect;
    answer = this.generateAnswers(a, b);
  }

  generateAnswers = (a, b) => {
    let answer = Array(3);
    shuffle = require("shuffle-array");
    if(this.type == 'addition'){
      answer[0] = a + b - 1;
      answer[1] = a + b;
      answer[2] = a + b + 1;
    }
    else if(this.type == 'multiplication'){
      answer[0] = a * b - 1;
      answer[1] = a * b;
      answer[2] = a * b + 1;
    }
    else if(this.type == 'division'){
      answer[0] = a / b - 1;
      answer[1] = a / b;
      answer[2] = a / b + 1;
    }
    this.correctAnswer = answer[1];
    return shuffle(answer);
  };

  generateRandomNumber = () => Math.floor(Math.random() * 12) + 1;
  getAnswer = () => {
    let ans;
    if(this.type == 'addition')
      ans = a + b;
    else if(this.type == 'multiplication')
      ans = a * b;
    else if(this.type == 'division')
      ans = a / b;
    return ans;
  }
  isCorrectAnswer = (index) => answer[index] === this.correctAnswer;


  render() {
    return (
      <View style={styles.problemContainer}>
        <Question
          style={{ top: 300 }}
          problem={this.props.type} 
          a={a}
          b={b}
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
    // backgroundColor: Colors.answer,
  },
  topAnswer: {
    position: "absolute",
    top: Constants.TOP_ANSWER[1],
    left: Constants.TOP_ANSWER[0],
    height: 100,
    width: 57,
    // backgroundColor: Colors.answer,
  },
  rightAnswer: {
    position: "absolute",
    top: Constants.RIGHT_ANSWER[1],
    left: Constants.RIGHT_ANSWER[0],
    height: 100,
    width: 57,
    // backgroundColor: Colors.answer,
  },
});

export default Problem;
