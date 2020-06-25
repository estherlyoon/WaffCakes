import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.question}>
        <Text>{this.props.problem}</Text>
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
