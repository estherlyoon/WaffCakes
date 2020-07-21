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
    this.state = {
      a: this.generateRandomNumber(),
      b: this.generateRandomNumber(),
      problem: this.generateProblem(),
    };
    // this.a = 1;
    // this.b = 3;
    // this.problem = this.generateProblem();
  }

  generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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

  changeProblem = () => {
    if (this.props.problemType == "addition") {
      this.setState({
        a: this.generateRandomNumber(),
        b: this.generateRandomNumber(),
        problem: this.generateProblem(),
      });
    }
  };

  generateProblem = () => {
    if (this.props.problemType == "addition") return a + " + " + b + " = ?";
  };

  componentDidUpdate(prevProps) {
    if (this.props.newProblem && !prevProps.newProblem) {
      //this.changeProblem();
      console.log("changing problem");
      this.setState({
        a: this.generateRandomNumber(),
        b: this.generateRandomNumber(),
        problem: this.generateProblem(),
      });
      this.props.newProblem = false;
    }
  }

  render() {
    // if (this.props.newProblem) {
    //console.log("changing problem");
    //   this.changeProblem;

    //   this.newProblem = false;
    // }
    //console.log(this.props.newProblem);

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
          {this.state.problem}
        </Text>
      </View>
    );
  }
}

export default Fireball;
