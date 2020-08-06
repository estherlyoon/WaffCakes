import React, { Component, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
} from "react-native";
import { render } from "react-dom";

class ProgressBar extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{position:'absolute', alignItems:'center', left:100, top:100}}>
                <Text >rooms: {this.props.rooms}</Text>
            </View>
        );
    }

}

export default ProgressBar; 