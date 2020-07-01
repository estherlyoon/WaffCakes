import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import Images from "../../config/Images.js";
import Constants from "../../config/Constants.js";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={this.props.style}>
        {/* <TouchableOpacity onPress={() => console.log(this.props.text)}> */}
        <TouchableOpacity
          onPress={() => {
            this.props.dispatchCorrectness();
            this.props.engine.dispatch(this.props.dispatchMessage);
          }}
        >
          <ImageBackground
            source={Images.door}
            style={styles.door}
          ></ImageBackground>

          <Text>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  door: {
    height: Constants.DOOR_HEIGHT,
    width: Constants.DOOR_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Answer;
