import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

import Sprite from "./Sprite.js";

//types of animation: idle, fight-stance
const idle = [
  { image: require("../images/lackey/idle/tile000.png") },
  { image: require("../images/lackey/idle/tile001.png") },
  { image: require("../images/lackey/idle/tile002.png") },
  { image: require("../images/lackey/idle/tile003.png") },
];

class Lackey extends Component {
  constructor(props) {
    super(props);
    this.lackey = null;
    this.state = {
      backcolor: this.props.backcolor,
      animation: this.props.animation,
    };
    this.lackey = null;
  }

  fireballs = [
    {
      x: 250,
      y: 50,
      problem: "9 + 10",
    },
    {
      x: 10,
      y: 300,
      problem: "6 + 8",
    },
  ];

  lackeyStyle = () => {
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
    switch (this.animation) {
      case "fight-stance":
      case "idle":
        frameLoop %= idle.length;
        return idle[frameLoop].image;
      default:
        frameLoop %= idle.length;
        return idle[frameLoop].image;
    }
  };

  render() {
    // return <View style={this.lackeyStyle()} />;
    return (
      <View style={this.lackeyStyle()}>
        {this.props.fireballs.map((fireball) => (
          <Fireball x={fireball.x} y={fireball.y} problem={fireball.problem} />
        ))}
        <Image
          style={{ width: 80, height: 80 }}
          source={this.getFrame()}
        ></Image>
      </View>
    );
  }
}

export default Character;
