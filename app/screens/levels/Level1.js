import * as React from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";

import AdditionFunction from "../../assets/components/AdditionFunction.js";
import { UserInput } from "../../assets/components/AdditionFunction.js";

import { GameEngine } from "react-native-game-engine";

export default function Level1({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Hey! U made it to Level 1!!</Text>
      <Text>time to learn the ropes...</Text>

      <AdditionFunction onCorrect={() => console.log("Yay")} />
      {/* <UserInput /> */}

      <GameEngine style={styles.container} entities={{}}>
        <StatusBar hidden={true} />
      </GameEngine>
    </View>
  );
}

// onCorrect = () => {
//   console.log("Yay");
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
