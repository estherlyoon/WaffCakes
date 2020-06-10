import "react-native-gesture-handler";
import React, { Component } from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App({ route, navigation }) {
  const { nameParam } = route.params;
  return (
    <View>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <ul>
        <li>Level 1</li>
        <li>Level 2 </li>
        <li>Level 3</li>
        <li>{JSON.stringify(nameParam)}</li>
        <li></li>
      </ul>
    </View>
  );
}
