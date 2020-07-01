import React, { Component } from "react";
import { Image, Dimensions, ImageBase } from "react-native";
import Images from "./Images.js";

const { width, height } = Image.resolveAssetSource(Images.door);
// [DOOR_WIDTH, DOOR_HEIGHT]: Image.resolveAssetSource(Images.door),
// Image.getSize(myUri, (width, height) => {this.setState({width, height})});
export default Constants = {
  DOOR_WIDTH: 60,
  DOOR_HEIGHT: 60,
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  BOARD_SIZE: 15,
  BLOCK_SIZE: 20,
  // (height and width)
  PROBLEM_CONTAINER_SIZE: [
    Dimensions.get("screen").width,
    Dimensions.get("screen").height,
  ],
  //locations of answer (top and left)
  // TOP_ANSWER: [Dimensions.get("screen").width / 2, DOOR_HEIGHT],
  TOP_ANSWER: [Dimensions.get("screen").width / 2, 0],
  LEFT_ANSWER: [0, Dimensions.get("screen").height / 4],
  // RIGHT_ANSWER: [Dimensions.get("screen").width - DOOR_WIDTH, Dimensions.get("screen").height / 4],
  RIGHT_ANSWER: [
    Dimensions.get("screen").width - 60,
    Dimensions.get("screen").height / 4,
  ],
};
