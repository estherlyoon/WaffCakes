import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SpriteSheet from "rn-sprite-sheet";

class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // pop = () => {
  //   this.character.play({
  //     type: "idle",
  //     fps: 24,
  //   });
  // };

  play = (config) => this.sprite.play(config);

  render() {
    // return <View style={this.characterStyle()} />;
    return (
      <View>
        <SpriteSheet
          ref={(ref) => (this.sprite = ref)}
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

export default Sprite;
