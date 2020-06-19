import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";


class Character extends PureComponent {
    render() {
        const x = this.props.position[0] - RADIUS/2;
        const y = this.props.position[1] - RADIUS/2;
        return <View style={[styles.character, {left: x, top: y}]} />
    }
}

const styles = StyleSheet.create({
    character: {
        borderColor: "#CCC",
        borderWidth: 4,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "green",
        position: "absolute",
    }
})

export {Character}