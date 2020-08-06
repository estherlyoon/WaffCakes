import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";
import Constants from "../../config/Constants.js";

//types of animation: idle, fight-stance
const idle = [
  { image: require("../images/boss/tile000.png") },
  { image: require("../images/boss/tile001.png") },  
  { image: require("../images/boss/tile002.png") },
  { image: require("../images/boss/tile003.png") },
  { image: require("../images/boss/tile004.png") },  
  { image: require("../images/boss/tile005.png") }, 
];

class Boss extends Component {
  constructor(props) {
    super(props);
    this.boss = null;
    this.state = {
      backcolor: this.props.backcolor,
      //animation: this.props.animation,
    };
  }

  bossStyle = () => {
    return {
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 10,
      height: 10,
    };
  };

  getFrame = () => {
    let frameLoop = this.props.frame;
    switch (this.props.animation) {
      case "idle":
        frameLoop %= idle.length;
        return idle[frameLoop].image;
      default:
        frameLoop %= idle.length;
        return idle[frameLoop].image;
    }
  };

  render() {
    return (
      <View style={this.bossStyle()}>
        <Image
          style={{ width: 160, height: 160 }}
          source={this.getFrame()}
        ></Image>
      </View>
    );
  }
}

export default Boss;
