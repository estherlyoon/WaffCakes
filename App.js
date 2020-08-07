import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./app/screens/Home";

import * as firebase from 'firebase';
//import firebaseConfig from "../config/FirebaseConfig"

const config = {
  apiKey: "AIzaSyDZtS3qg9-ybyIYTIuKsKAaCeSUXoCLWmg",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "waffcakes-df9fd",
  storageBucket: "waffcakes-df9fd.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};


//console.log(firebaseConfig.apiKey);
console.log(config.apiKey);
firebase.initializeApp(config);

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
