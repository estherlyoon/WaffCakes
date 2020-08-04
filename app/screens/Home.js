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
import { TouchableHighlight } from "react-native-gesture-handler";

import Settings from "./Settings";
import SettingsPopup from "./SettingsPopup";
import SettingsModal from "./SettingsModal";
import Level1 from "./levels/Level1.js";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import TitleScreen from "./TitleScreen";
import FadeView from "../assets/components/FadeView";

//Ask Ashwin about importing all files from folder
// import Level1 from "./levels/Level1";
// import {Level1, Level2, Level3}

const Stack = createStackNavigator();
// const handlePress = () => console.log("Image Pressed");
const openSettings = () => {
  console.log("Open Settings");
};

function LevelNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FadeView initial = {0} final = {1}>
          <Button
            title={"Back"}
            onPress={() => navigation.navigate("Title")}
          ></Button>
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
        </FadeView>
      </SafeAreaView>
    </View>
  );
}

export default function App() {

  return (
    <Home/>
  );
}

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen
          name="Title"
          component={TitleScreen}
        />
        <Stack.Screen
          name="Home"
          component={LevelNavigation}
          options={{ title: "Main Menu", gestureEnabled: false }}
        />
        <Stack.Screen name="Level1" component={Level1} options={{gestureEnabled: false }}/>
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
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
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    alignItems: "flex-start",
  },
});
