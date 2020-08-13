import React, { useState } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const LoginModal = ({isVisible, navigation, toggle}) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
        >
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <Text style = {styles.gameover}>WELCOME</Text>
                    <View>
                        <TouchableOpacity style = {styles.openButton}
                        onPress={()=>{
                            navigation.navigate("Login");
                            toggle(false);}
                            }
                        >
                            <Text style={styles.modalText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.openButton}
                         onPress={()=> {
                             navigation.navigate("SignUp");
                             toggle(false);}
                         }>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.openButton}
                         onPress={()=> {
                             navigation.navigate("SignUp");
                             toggle(false);}
                         }>
                            <Text style={styles.modalText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
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
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginVertical: 5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      textAlign: "center",
      fontSize: 20,
    },
    gameover: {
        fontSize: 30,
        fontWeight: '500',
    }
  });
  
export default LoginModal;