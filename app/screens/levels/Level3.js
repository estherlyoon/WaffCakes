import * as React from "react";
import { StyleSheet, StatusBar, Text, View, Button, Image } from "react-native";
import SettingsModal from "../SettingsModal";

import { GameEngine } from "react-native-game-engine";

export default function Level3({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Level3</Text>
    </View>
  );
}
