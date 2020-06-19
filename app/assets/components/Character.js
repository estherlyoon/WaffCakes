import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';



class Character extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           x: this.props.x,
           y: this.props.y,
         };
    }
    
    characterStyle = () => {
        return {
            backgroundColor: "blue",
                position: "absolute",
                left: this.state.x,
                top: this.state.y,
                width: 100,
                height: 100
        }
    }
    
    
    render() {
        return (
            <View style={this.characterStyle()}/>
        );
    }
}


export default Character;