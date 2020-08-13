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
import Login from "../assets/components/Login";

import SignUp from "./SignUp";
import TutorialModal from "./tutorialModal";
import BossLevel from "./levels/BossLevel"

import firebase from 'firebase';
import 'firebase/database';
import Constants from "../config/Constants";

const Stack = createStackNavigator();

const levelmap = "../assets/images/levelmap.png";
const boss = "../assets/images/boss/bossicon.png";
const door = "../assets/images/door2.png";
const lock = "../assets/images/lock.png";


function LevelNavigation({ navigation }) {

  const [lock2, setLock2] = useState(true);
  const [lock3, setLock3] = useState(true);
  const [name, setName] = useState("");

  var user = firebase.auth().currentUser;

  const getName = () => {
    user = firebase.auth().currentUser;
    const reference = firebase.database().ref(user.uid + '/name');
    let value = "";
    reference.on('value',(snapshot) => snapshot.val() ? value = snapshot.val() : value = "Not Logged In");
    setName(value);
  }

  const setLock = (level) => {
    const ref = firebase.database().ref(user.uid + '/level' + level);
    let done = false;
    if (level == 2) {
      ref.on('value',(snapshot) => done = snapshot.val());
    } else if (level == 3) {
      ref.on('value',(snapshot) => done = snapshot.val());
    }
    return !done;
  };

  const enterLevel = (level) => {
    console.log("entering");
    let lastLevel = level - 1;
    const ref = firebase.database().ref(user.uid + '/level' + lastLevel);
    let done = false;
    if (level == 2) {
      ref.on('value',(snapshot) => done = snapshot.val());
    } else if (level = 3) {
      ref.on('value',(snapshot) => done = snapshot.val());
    }
    console.log('done: '+ done);
    return done ? navigation.navigate("Level" + level) : null; //TODO popup do other levels first
  };

 
  useFocusEffect(() => {
    setLock2(setLock(2));
    setLock3(setLock(3));
    console.log(setLock(3));
    getName();
  }, []);
    
  
  return (
    <View style={styles.container}>

        <FadeView initial = {0} final = {1}>
          <ImageBackground style = {styles.background} source = {require(levelmap)}>
          <View style = {{flex: 1, flexDirection: 'row', marginTop: 30, marginRight: 10, alignSelf: 'flex-end'}}>
              <Text style = {{fontSize: 20}}>{user.email}</Text>
            <TutorialModal />
          </View>

          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.hiTextView}>
              <Text style={styles.hiText}>Hi, {name}</Text>
            </View>
          </SafeAreaView>

          <View style = {styles.header}/>
             <TutorialModal />
            <View style={{margin:20}} />
              <Button 
                onPress={() =>  { firebase.auth().signOut(); navigation.navigate("Title"); }} //logout
                title="Logout"/>
             <Button
              title={"Back"}
              onPress={() => navigation.navigate("Title")}
            ></Button>

            
            <TouchableOpacity
            style={styles.level1}
            onPress={() => navigation.navigate("Level1")}
            >
              <Image source={require(door)} />
            </TouchableOpacity>

            <View style = {styles.level2} >
            <TouchableOpacity onPress={() => {enterLevel(2)}}>
                <ImageBackground style={styles.door} source={require(door)}>
                  <Image style={styles.lock} source={lock2 ? require(lock) : null}/>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style = {styles.level3} >
            <TouchableOpacity onPress={() => {enterLevel(3)}}>
                <ImageBackground style={styles.door} source={require(door)}>
                  <Image style={styles.lock} source={lock3 ? require(lock) : null}/>
                </ImageBackground>
              </TouchableOpacity>
            </View>

          <TouchableOpacity style={styles.boss}
          onPress={() => navigation.navigate("BossLevel")}>
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
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Level1"
          component={Level1}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
        <Stack.Screen name="BossLevel" component={BossLevel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flex: 1,
  },
  background: {
    width: Dimensions.get("window").width,
    flex: 1,
    //justifyContent: "center",
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
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  level2: {
    position: "absolute",
    top: 260,
    left: 200,
    width: 100,
    height: 100,
    alignItems: 'center',
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
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  hiTextView: {
    position: 'absolute',
    top: 10,
    // left: Constants.MAX_WIDTH / 2,
  },
  hiText: {
    fontSize: 30,
  },
  door: {
    flex: 1,
    height: 100,
    width: 100,
    alignContent: 'center',
    alignItems: 'center',
  },
  lock: {
    top: 20,
    width: 60,
    height: 60,
    overflow:"visible",
  }
});
