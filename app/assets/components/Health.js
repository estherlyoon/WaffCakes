import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Sprite from "./Sprite.js";

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
            </View>
        )
      }
}

export default Health;
