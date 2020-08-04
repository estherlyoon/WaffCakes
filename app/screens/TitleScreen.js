import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native'

const screen = '../assets/images/titlescreen.png';
const button = '../assets/images/button.png';

const TitleScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground style = {styles.background} source = {require(screen)}>
                <View style={styles.innerContainer}>

                    <View>
                        <Text style={{fontSize:100, color:'white'}}>TITLE</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.navigate({ name: 'Home'})}>
                            <ImageBackground style={styles.button} source = {require(button)}>
                                <Text style={styles.buttonText}>START</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate({ name: 'Home'})}>
                            <ImageBackground style={styles.button} source = {require(button)}>
                                <Text style={styles.buttonText}>CREDITS</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        marginVertical: 10,
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 50,
    }
})


export default TitleScreen;