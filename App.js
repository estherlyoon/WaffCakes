import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./app/screens/Home";

import * as firebase from 'firebase';
import firebaseConfig from "./app/config/FirebaseConfig"

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
