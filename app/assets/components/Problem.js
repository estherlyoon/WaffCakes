import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Question from "./Question.js";
import Answer from "./Answer.js";

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.problemContainer}>
        <Question problem="2 + 3 = ?"></Question>
        <Answer text="3" />
        <Answer text="4" />
        <Answer text="5" />
      </View>
    );
  }
}

export default Problem;

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
});
