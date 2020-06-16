import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function SettingsModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="settings" style={styles.settings} size={50} />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button title="X" onPress={toggleModal} />
            <Text style={styles.modalText}>Restart</Text>
            <Button
              title="Exit"
              onPress={() => navigation.navigate("Home")}
            ></Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
  settings: {
    alignItems: "flex-start",
  },
});
