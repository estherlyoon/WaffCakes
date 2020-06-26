import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
// import Images from "../components/Images.js";

export default Constants = {
  // [DOOR_WIDTH, DOOR_HEIGHT]: Image.resolveAssetSource(Images.door),
  // const {width, height} = Image.resolveAssetSource(picture);
  // Image.getSize(myUri, (width, height) => {this.setState({width, height})});

  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  BOARD_SIZE: 15,
  BLOCK_SIZE: 20,
  // (height and width)
  PROBLEM_CONTAINER_SIZE: [
    (Dimensions.get("screen").width * 7) / 8,
    (Dimensions.get("screen").height * 3) / 4,
  ],
  //locations of answer (top and left)
  // TOP_ANSWER: [Dimensions.get("screen").width / 2, DOOR_HEIGHT],
  TOP_ANSWER: [Dimensions.get("screen").width / 2, 0],
  LEFT_ANSWER: [0, Dimensions.get("screen").height / 4],
  // RIGHT_ANSWER: [Dimensions.get("screen").width - DOOR_WIDTH, Dimensions.get("screen").height / 4],
  RIGHT_ANSWER: [
    Dimensions.get("screen").width,
    Dimensions.get("screen").height / 4,
  ],
};
