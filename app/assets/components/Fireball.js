import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AnswerInput from "./AnswerInput";

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
    };
    this.a = this.generateRandomNumber();
    this.b = this.generateRandomNumber();
    this.answer = this.getAnswer();
    this.prob = this.generateProblem();
  }

  getAnswer = () => {
    let ans;
    if(this.props.problemType == 'addition')

      ans = this.a + this.b;
    else if(this.props.problemType == 'multiplication')
      ans = this.a * this.b;
    else if(this.props.problemType == 'division')
      ans = this.a / this.b;

    return ans;
  };

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

  generateRandomNumber = () => Math.floor(Math.random() * 12) + 1;

  generateProblem = () => {
    if (this.props.problemType == "addition")
      return "" + this.a + " + " + this.b + " = ?";
    else if (this.props.problemType == "multiplication")
      return "" + this.a + " x " + this.b + " = ?";
    if (this.props.problemType == "division")
      return "" + this.a + " / " + this.b + " = ?";
  };

  // changes problem when newProblem boolean is set to true in GameLoop
  componentDidUpdate(prevProps, prevState) {
    if (this.props.problemSeed != prevProps.problemSeed) {
      //this.changeProblem();
      console.log("changing problem");
      this.a = this.generateRandomNumber();
      this.b = this.generateRandomNumber();
      this.answer = this.getAnswer();
      this.prob = this.generateProblem();
      //this.props.newProblem = false;
    }
  }

  render() {
    //console.log("problemSeed: " + this.props.problemSeed);
    //console.log("prob: " + this.state.prob);
    return (
      <View>
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
            {this.prob}
          </Text>
        </View>
        <View style={{ position: "absolute", top: 700, left: 100 }}>
          <AnswerInput engine={this.props.engine} answer={this.answer} />
        </View>
      </View>
    );
  }
}

export default Fireball;
