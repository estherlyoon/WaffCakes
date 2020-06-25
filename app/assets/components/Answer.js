import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={this.props.style}>
        {/* <TouchableOpacity onPress={() => console.log(this.props.text)}> */}
        <TouchableOpacity
          onPress={() => this.props.engine.dispatch(this.props.dispatchMessage)}
        >
          <Image source={require("../images/door.png")} style={styles.door} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  door: {
    // position: "absolute",
    height: 100,
    width: 57,
    // backgroundColor: "green",
    // justifyContent: "center",
    // alignItems: "center",
    // scale: 2.0,
  },
});

export default Answer;
