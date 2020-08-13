import "react-native-gesture-handler";
import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight, ScrollView } from "react-native-gesture-handler";

import Level1 from "./levels/Level1.js";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import TitleScreen from "./TitleScreen";
import FadeView from "../assets/components/FadeView";

import firebase from 'firebase';
import SignUp from "./SignUp";
import TutorialModal from "./tutorialModal";
import 'firebase/database';


const Stack = createStackNavigator();
// const handlePress = () => console.log("Image Pressed");
const openSettings = () => {
  console.log("Open Settings");
};
const levelmap = "../assets/images/levelmap.png";
const boss = "../assets/images/boss/bossicon.png";
const door = "../assets/images/door2.png";


function LevelNavigation({ navigation }) {

  // const [user, setUser] = useState({});
  var user = firebase.auth().currentUser;

  const getName = () => {
    console.log(user.uid);
    const reference = firebase.database().ref(user.uid + '/name');
    const value = reference.on('value',(snapshot) => console.log(snapshot.val()));
    console.log(value);
    // return reference.once("value");
  }

  // React.useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user != null) {
  //       setUser(user);
  //     }
  //   })
  // }, [user])

  return (
    <View style={styles.container}>

        <FadeView initial = {0} final = {1}>
          <ImageBackground style = {styles.background} source = {require(levelmap)}>

          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Text>{getName()}</Text>
            </View>
          </SafeAreaView>

          <View style = {styles.header}/>
             <TutorialModal />
            <Text style={{fontSize: 27}}>
                Welcome
            </Text>
            <View style={{margin:20}} />
              <Button 
                onPress={() =>  { firebase.auth().signOut(); navigation.navigate("Title"); }} //logout
                title="Logout"/>
            <Button
              title={"Back"}
              onPress={() => navigation.navigate("Title")}
            ></Button>
            <Text>YAAARR ThIS BE THe HOmE SCREeN MaTEY!!!1!!</Text>
            
            <TouchableOpacity
            style = {styles.level1}
            onPress={() => navigation.navigate("Level1")}>
              <Image source = {require(door)}/>
            </TouchableOpacity>

          <TouchableOpacity
            style={styles.level2}
            onPress={() => navigation.navigate("Level2")}
          >
            <Image source={require(door)} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.level3}
            onPress={() => navigation.navigate("Level3")}
          >
            <Image source={require(door)} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.boss}>
            <Image source={require(boss)} />
          </TouchableOpacity>
        </ImageBackground>
      </FadeView>
    </View>
  );
}

export default function App() {
  return <Home />;
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
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          component={LevelNavigation}
          options={{ title: "Main Menu", gestureEnabled: false }}
        />
        <Stack.Screen
          name="Level1"
          component={Level1}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
  },
  background: {
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  level1: {
    position: "absolute",
    top: 70,
    left: 100,
  },
  level2: {
    position: "absolute",
    top: 260,
    left: 200,
  },
  level3: {
    position: "absolute",
    top: 480,
    left: 100,
  },
  boss: {
    position: "absolute",
    top: 750,
    left: 190,
  },
});
