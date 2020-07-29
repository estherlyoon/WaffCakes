import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Sprite from "./Sprite.js";

const health = [
  { image: require("../images/health/heart_0.png") },
  { image: require("../images/health/heart_1.png") },
  { image: require("../images/health/heart_2.png") },
  { image: require("../images/health/heart_3.png") },
];

class Health extends Component {
    constructor(props) {
      super(props);
    console.log(this.props.health);
    }

    healthStyle = () => {
        return {
            position: 'absolute',
          top: this.props.y,
          left: this.props.x,
        };
      };

    render() {
        return (
            <View style = {this.healthStyle()}>
                <Text>{this.props.entity} Health: {this.props.health}</Text>
                <Image
                  style={{ width: 100}}
                  source={health[this.props.health].image}
                ></Image>
            </View>
        )
      }
}

export default Health;
