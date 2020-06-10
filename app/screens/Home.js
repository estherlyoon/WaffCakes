import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import GameManager from "./GameManager";

const Stack = createStackNavigator();
const handlePress = () => console.log("Image Pressed");

function PlayGame({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.button} source={require("../assets/icon.png")} />
      </TouchableOpacity>

      <Button
        title={"Play game"}
        onPress={() => navigation.navigate("Game", { nameParam: "Jane" })}
      ></Button>
    </View>
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
});
