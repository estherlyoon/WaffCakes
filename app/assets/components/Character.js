import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

import Sprite from "./Sprite.js";

class Character extends Component {
  constructor(props) {
    super(props);
    this.character = null;
    this.state = {
      backcolor: this.props.backcolor,
    };
    this.character = null;
  }

  idle = () => {
    this.character.play({
      type: "idle",
      fps: 24,
      resetAfterFinish: true,
    });
  };
  print = () => console.log("print test");
  play = (config) => this.character.play(config);

  characterStyle = () => {
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

  render() {
    // return <View style={this.characterStyle()} />;
    return (
      <View style={this.characterStyle()}>
        <SpriteSheet
          ref={(ref) => (this.character = ref)}
          source={require("../images/adventurer-Sheet.png")}
          columns={7}
          rows={11}
          // height={200} // set either, none, but not both
          width={100}
          // imageStyle={{ marginTop: -1 }}
          animations={{
            appear: Array.from({ length: 15 }, (v, i) => i + 18),
            die: Array.from({ length: 21 }, (v, i) => i + 33),
            idle: [0, 1, 2, 3],
          }}
        />
      </View>
    );
  }
}

export default Character;
