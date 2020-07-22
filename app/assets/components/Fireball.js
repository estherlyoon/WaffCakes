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

class Fireball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //a: this.generateRandomNumber(),
      b: this.generateRandomNumber(),
      prob: this.generateProblem(),
    };
  }

  fireballStyle = () => {
    return {
      position: "absolute",
      left: this.props.x,
      top: this.props.y,
      width: 100,
      height: 100,
      //backgroundColor: "pink",
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

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  generateProblem = () => {
    if (this.props.problemType == "addition")
      return "" + a + " + " + b + " = ?";
  };

  // changeProblem = () => {
  //   if (this.props.problemType == "addition") {
  //     this.setState({
  //       a: this.generateRandomNumber(),
  //       b: this.generateRandomNumber(),
  //       problem: this.generateRandomNumber(), //this.generateProblem(),
  //     });
  //   }
  // };

  // changes problem when newProblem boolean is set to true in MoveCharacter
  componentDidUpdate(prevProps, prevState) {
    if (this.props.problemSeed != prevProps.problemSeed) {
      //this.changeProblem();
      console.log("changing problem");

      this.setState({
        a: this.generateRandomNumber(),
        b: this.generateRandomNumber(),
        prob: this.state.a + " + " + this.state.b + " = ?",
      });
      //this.props.newProblem = false;
    }
  }

  render() {
    //console.log("problemSeed: " + this.props.problemSeed);
    //console.log("prob: " + this.state.prob);
    return (
      <View style={this.fireballStyle()}>
        <Image
          style={{
            transform: [{ rotate: "90deg" }],
            width: 50,
            height: 50,
            alignSelf: "center",
          }}
          source={this.getFrame()}
        ></Image>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {this.state.prob}
        </Text>
      </View>
    );
  }
}

export default Fireball;
