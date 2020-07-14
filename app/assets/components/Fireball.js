import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

import Sprite from "./Sprite.js";

// animation
const animate = [
  { image: require("../images/fireball/FB001.png") },
  { image: require("../images/fireball/FB002.png") },
  { image: require("../images/fireball/FB003.png") },
  { image: require("../images/fireball/FB004.png") },
  { image: require("../images/fireball/FB005.png") },
];

//props: x, y, problem
class Fireball extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   animation: this.props.animation,
    // };
    this.problem = 1;
  }

  fireballStyle = () => {
    return {
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 50,
      height: 50,
    };
  };

  getFrame = () => {
    let frameLoop = this.props.frame;
    switch (this.props.animation) {
      case "idle":
        frameLoop %= animate.length;
        return animate[frameLoop].image;
    }
  };

  render() {
    // return <View style={this.fireballStyle()} />;
    return (
      <View style={this.fireballStyle()}>
        <Image
          style={{
            width: 80,
            height: 80,
            transform: [{ rotate: "90deg" }],
          }}
          source={this.getFrame()}
        ></Image>
        <Text>{this.problem}</Text>
      </View>
    );
  }
}

export default Fireball;
