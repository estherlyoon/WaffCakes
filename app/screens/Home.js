import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import GameManager from "./GameManager";
import Settings from "./Settings";
import SettingsPopup from "./SettingsPopup";
import SettingsModal from "./SettingsModal";
import { TouchableHighlight } from "react-native-gesture-handler";

//Ask Ashwin about importing all files from folder
// import Level1 from "./levels/Level1";

const Stack = createStackNavigator();
// const handlePress = () => console.log("Image Pressed");
const openSettings = () => {
  console.log("Open Settings");
};

function Level1({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Hey! U made it to Level 1!!</Text>
      <Text>time to learn the ropes...</Text>
    </View>
  );
}
function Level2({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Level 2 here</Text>
    </View>
  );
}
function Level3({ navigation }) {
  return (
    <View>
      <SettingsModal navigation={navigation} />
      <Text>Level 3</Text>
    </View>
  );
}

function LevelNavigation({ navigation }) {
  return (
    <SafeAreaView>
      <Text>YAAARR ThIS BE THe HOmE SCREeN MaTEY!!!1!!</Text>
      <Button
        title={"Level 1 B)"}
        onPress={() => navigation.navigate("Level1", { nameParam: "Jane" })}
      ></Button>
      <Button
        title={"Level 2 :P"}
        onPress={() => navigation.navigate("Level2", { nameParam: "Jane" })}
      ></Button>
      <Button
        title={"Level 3 >:)"}
        onPress={() => navigation.navigate("Level3", { nameParam: "Jane" })}
      ></Button>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={LevelNavigation}
          options={{ title: "Main Menu" }}
        />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
        <Stack.Screen name="Game" component={GameManager} />
        {/* <Stack.Screen name="Level1" component={Level1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 200,
    width: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    alignItems: "flex-start",
  },
});
