import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function TutorialModal() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let tutorialSteps = [];
  tutorialSteps.push("The first thing to note... ");
  tutorialSteps.push("You must also... ");
  tutorialSteps.push("finally... ");
  tutorialSteps.push("good luck");

  const [index, setIndex] = useState(0);

  const [buttonName, setButtonName] = useState("Next");

  const nextText = () => {
    setIndex(index + 1);
    if (index == tutorialSteps.length - 2) setButtonName("Done");
    else setButtonName("Next");
    if (index >= tutorialSteps.length - 1) {
      setModalVisible(false);
      setIndex(0);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={{ width: 50 }}>
        <Icon name="info" style={styles.tutorial} size={50} />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{tutorialSteps[index]}</Text>
            <Button title="Skip Tutorial" onPress={toggleModal} />
            <Button title={buttonName} onPress={nextText} />
          </View>
        </View>
      </Modal>
    </View>
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
  modalText: {
    marginBottom: 5,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tutorial: {
    alignItems: "flex-end",
  },
});
