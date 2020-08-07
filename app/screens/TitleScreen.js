import React from 'react'
import { View, 
        StyleSheet, 
        Text, 
        ImageBackground, 
        Dimensions, 
        TouchableOpacity, 
        TextInput,
        Button,
    } from 'react-native'

import FadeView from '../assets/components/FadeView';
import { ScrollView } from 'react-native-gesture-handler';

const screen = '../assets/images/titlescreen.png';
const button = '../assets/images/button.png';


const TitleScreen = ({navigation, onLoginPress}) => {
    return (

        <View style = {styles.container}>
            <FadeView initial = {0} final = {1}>

                <ImageBackground style = {styles.background} source = {require(screen)}>
                    <View style={styles.innerContainer}>
                        <View>   
                            <Text style={{fontSize: 27}}>
                                Login
                            </Text>
                            <TextInput placeholder='Username' />
                            <TextInput placeholder='Password' />
                            <View style={{margin:7}} />
                            <Button 
                                onPress={() => navigation.navigate({name:"Home"})}
                                title="Submit"
                            />    
                        </View>
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
            </FadeView>
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
        backgroundColor: 'black',
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