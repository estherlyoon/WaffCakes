import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backcolor: this.props.backcolor,
    };
  }

  characterStyle = () => {
    return {
      // backgroundColor: "blue",
      backgroundColor: this.props.backcolor,
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 100,
      height: 100,
    };
  };

  render() {
    return <View style={this.characterStyle()} />;
    // <View style={[styles.finger, { width: this.props.size, height: this.props.size, left: x * this.props.size, top: y * this.props.size }]} />
  }
}

export default Character;
