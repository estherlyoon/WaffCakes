import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import { Icon } from "react-native-elements";
import GameManager from "./GameManager";
import Settings from "./Settings";

//Ask Ashwin about importing all files from folder
// import Level1 from "./levels/Level1";

const Stack = createStackNavigator();
// const handlePress = () => console.log("Image Pressed");
const openSettings = () => {
  console.log("Open Settings");
};

export const SettingsPopup = ({ navigation }) => (
  <View>
    <Menu onSelect={(value) => alert(`Selected option: ${value}`)}>
      {/* <MenuTrigger text="Select option"> */}
      <MenuTrigger>
        <Icon
          name="settings"
          style={styles.settings}
          size={100}
          onPress={openSettings()}
        />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          value={1}
          text="One"
          onSelect={() => navigation.navigate("Game", { nameParam: "Jane" })}
        >
          {/* onPress={() => navigation.navigate("Game", { nameParam: "Jane" })} */}
        </MenuOption>
        <MenuOption value={2}>
          <Text style={{ color: "red" }}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text="Three" />
      </MenuOptions>
    </Menu>
  </View>
);

function PlayGame({ navigation }) {
  return (
    <MenuProvider>
      <SettingsPopup />
      <View>
        <Button
          title={"Play game"}
          onPress={() => navigation.navigate("Game", { nameParam: "Jane" })}
        ></Button>
      </View>
    </MenuProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={PlayGame}
          options={{ title: "Main Menu" }}
        />
        <Stack.Screen name="Game" component={GameManager} />
        {/* <Stack.Screen name="Level1" component={Level1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 200,
    width: 200,
  },
  settings: {
    alignItems: "flex-start",
  },
});
