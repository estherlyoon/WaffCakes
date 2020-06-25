import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => console.log(this.props.text)}>
          <Icon name="settings" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Answer;
