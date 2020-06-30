import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { GameEngine } from "react-native-game-engine";

class SwipeToMove extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("swipe engine: " + props.engine);
  }

  onSwipeUp(gestureState) {
    this.props.engine.dispatch("move-up");
    console.log("console move-up");
  }

  onSwipeDown(gestureState) {
    this.props.engine.dispatch("move-down");
    console.log("console move-down");
  }

  onSwipeLeft(gestureState) {
    this.props.engine.dispatch("move-left");
    console.log("console move-left");
  }

  onSwipeRight(gestureState) {
    this.props.engine.dispatch("move-right");
    console.log("console move-right");
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: "red" });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: "green" });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: "blue" });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: "yellow" });
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 100,
      gestureIsClickThreshold: 5,
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}

export default SwipeToMove;
