import React from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const GameOverModal = ({isVisible, navigation}) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
        >
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <Text style = {styles.gameover}>GAME OVER</Text>
                    <View>
                        <TouchableOpacity style = {styles.openButton}
                        
                        >
                            <Text style={styles.modalText}>Retry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.openButton}
                         onPress={()=>navigation.navigate("Home")}>
                            <Text style={styles.modalText}>Quit</Text>
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
  
export default GameOverModal;