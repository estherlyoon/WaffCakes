import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

import Sprite from "./Sprite.js";

//types of animation: idle, fight-stance
const idle = [
  {image: require("../images/character/idle/tile000.png")},
  {image: require("../images/character/idle/tile001.png")},
  {image: require("../images/character/idle/tile002.png")},
  {image: require("../images/character/idle/tile003.png")},
]


class Character extends Component {
  constructor(props) {
    super(props);
    this.character = null;
    this.state = {
      backcolor: this.props.backcolor,
      animation: this.props.animation,
    };
    this.character = null;
  }


  characterStyle = () => {
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
    let frameLoop = this.props.frame;
    switch(this.animation) {
        case "fight-stance":
        case "idle": 
            frameLoop = this.props.frame % idle.length;
            return (idle[frameLoop].image); //kinda inefficient, numbers could get big
        default: 
            frameLoop = this.props.frame % idle.length;
            return (idle[frameLoop].image);
    }
  }

  render() {
    // return <View style={this.characterStyle()} />;
    return (
      <View style={this.characterStyle()}>
        <Image style = {{width: 80, height: 80,}} source = {this.getFrame()}></Image>
      </View>
    );
  }
}

export default Character;
