import * as React from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";

import { GameEngine } from "react-native-game-engine";
import { AdditionProblem } from "../../assets/components/AdditionProblem.js";

export default function Level1({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Hey! U made it to Level 1!!</Text>
      <Text>time to learn the ropes...</Text>

      <additionProblem />
      <GameEngine style={styles.container} entities={{}}>
        <StatusBar hidden={true} />
      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
