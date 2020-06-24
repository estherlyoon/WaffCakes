import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { GameEngine } from 'react-native-game-engine';

class Swipes extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

  onSwipeUp(gestureState) {
    this.props.engine.dispatch("move-up");
  }
 
  onSwipeDown(gestureState) {
    this.props.engine.dispatch("move-down");
  }
 
  onSwipeLeft(gestureState) {
    this.props.engine.dispatch("move-left");
  }
 
  onSwipeRight(gestureState) {
    this.props.engine.dispatch("move-right");
  }
    render()
}

export default Swipes;