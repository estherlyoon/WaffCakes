import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

import Sprite from "./Sprite.js";
import Images from "./Images.js";

//types of animation: idle, fight-stance
// const idle = [
//   {image: require("../images/fireball/idle/tile000.png")},
//   {image: require("../images/fireball/idle/tile001.png")},
//   {image: require("../images/fireball/idle/tile002.png")},
//   {image: require("../images/fireball/idle/tile003.png")},
// ]

//props: x, y, problem
class Fireball extends Component {
  constructor(props) {
    super(props);
    this.fireball = null;
    this.state = {
      backcolor: this.props.backcolor,
      animation: this.props.animation,
    };
    this.fireball = null;
  }

  fireballStyle = () => {
    return {
      // backgroundColor: "blue",
      backgroundColor: this.props.backcolor,
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 30,
      height: 30,
      // opacity: 0.5,
    };
  };

  getFrame = () => {
    // let frameLoop = this.props.frame;
    // switch(this.animation) {
    //     case "fight-stance":
    //     case "idle":
    //         frameLoop %= idle.length;
    //         return (idle[frameLoop].image);
    //     default:
    //         frameLoop %= idle.length;
    //         return (idle[frameLoop].image);
    // }
  };

  render() {
    // return <View style={this.fireballStyle()} />;
    return (
      <View style={this.fireballStyle()}>
        <Image
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            top: this.props.y,
            left: this.props.x,
          }}
          source={Images.fireball}
        ></Image>
        <Text>{this.problem}</Text>
      </View>
    );
  }
}

export default Character;
