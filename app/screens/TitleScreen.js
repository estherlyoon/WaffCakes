import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

import FadeView from "../assets/components/FadeView";
import { ScrollView } from "react-native-gesture-handler";
import Login from "../assets/components/Login";
import firebase from "firebase";
import "firebase/firestore";
import * as GoogleSignIn from "expo-google-sign-in";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import LoginModal from "./LoginModal";

const screen = "../assets/images/titlescreen.png";
const button = "../assets/images/button.png";

const TitleScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onStartPress = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) navigation.navigate("Home");
      else setModalVisible(true);
    });
  };

  return (
    <View style={styles.container}>
      <FadeView initial={0} final={1}>
        <ImageBackground style={styles.background} source={require(screen)}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={{ fontSize: 100, color: "white" }}>TITLE</Text>
            </View>
            <View>
              <TouchableOpacity onPress={onStartPress}>
                <ImageBackground style={styles.button} source={require(button)}>
                  <Text style={styles.buttonText}>START</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate({ name: "Home" })}
              >
                <ImageBackground style={styles.button} source={require(button)}>
                  <Text style={styles.buttonText}>CREDITS</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <LoginModal
              isVisible={modalVisible}
              navigation={navigation}
              toggle={setModalVisible}
            />
          </View>
        </ImageBackground>
      </FadeView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
  },
  button: {
    marginVertical: 10,
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 50,
  },
});

export default TitleScreen;
