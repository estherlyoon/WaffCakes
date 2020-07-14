import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SpriteSheet from "rn-sprite-sheet";
import Constants from "../../config/Constants.js";

//types of animation: idle, fight-stance
const idle = [
  { image: require("../images/lackey/bat0.png") },
  { image: require("../images/lackey/bat1.png") },
  { image: require("../images/lackey/bat2.png") },
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
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 10,
      height: 10,
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
    return (
      <View style={this.lackeyStyle()}>
        {/* {this.fireballs.map((fireball) => (
          <Fireball x={fireball.x} y={fireball.y} problem={fireball.problem} />
        ))} */}
        <Image
          style={{ width: 80, height: 80 }}
          source={this.getFrame()}
        ></Image>
      </View>
    );
  }
}

export default Lackey;
