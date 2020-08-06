import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

const generateProblem = (problem, a, b) => {
  if (problem == "addition") 
    return a + " + " + b + " = ?";
  else if (problem == "multiplication")
    return a + " x " + b + " = ?";
  else if (problem == "division")
    return a + " / " + b + " = ?";
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.question}>
        <Text>{generateProblem(this.props.problem, this.props.a, this.props.b)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    justifyContent: "center",
  },
});

export default Question;
