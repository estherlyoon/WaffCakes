import React, { Component } from "react";
import { Image, Dimensions, ImageBase } from "react-native";
import Images from "./Images.js";

const { width, height } = Image.resolveAssetSource(Images.door);
// [DOOR_WIDTH, DOOR_HEIGHT]: Image.resolveAssetSource(Images.door),
// Image.getSize(myUri, (width, height) => {this.setState({width, height})});
export default Constants = {
  WRONG_CHARACTER_X: Dimensions.get("window").width / 2,
  WRONG_CHARACTER_Y: Dimensions.get("window").height * (1 / 2),
  RIGHT_CHARACTER_X: Dimensions.get("window").width / 2,
  RIGHT_CHARACTER_Y: Dimensions.get("window").height / 4,
  LACKEY_X: Dimensions.get("window").width / 2,
  LACKEY_Y: Dimensions.get("window").height / 6,
  DOOR_WIDTH: 60,
  DOOR_HEIGHT: 60,
  MAX_WIDTH: Dimensions.get("window").width,
  MAX_HEIGHT: Dimensions.get("window").height,
  BOARD_SIZE: 15,
  BLOCK_SIZE: 20,
  // (height and width)
  PROBLEM_CONTAINER_SIZE: [
    Dimensions.get("window").width,
    Dimensions.get("window").height,
  ],
  //locations of answer (top and left)
  TOP_ANSWER: [Dimensions.get("window").width / 2, 0],
  LEFT_ANSWER: [0, Dimensions.get("window").height / 4],
  RIGHT_ANSWER: [
    Dimensions.get("window").width - 60,
    Dimensions.get("window").height / 4,
  ],
  LEVEL_ROOMS: 3,
  FIREBALL_SPEED: 1,
};
