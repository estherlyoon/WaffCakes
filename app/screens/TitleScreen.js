import React, { useState } from 'react'
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
import firebase from 'firebase';
import "firebase/firestore";
import * as GoogleSignIn from 'expo-google-sign-in';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const screen = '../assets/images/titlescreen.png';
const button = '../assets/images/button.png';


const TitleScreen = ({navigation}) => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const signInWithEmail = async () => {
       let mount = true;
       if (mount) {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(onLoginSuccess.bind(this))
                .catch(error => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        onLoginFailure.bind(this)('Weak Password!');
                    } else {
                        onLoginFailure.bind(this)(errorMessage);
                    }
                });
       }
       return () => mount = false;
  }

  const onLoginSuccess = () => {
    navigation.navigate('Home');
  }

  const onLoginFailure = (errorMessage) => {
    setError(errorMessage);
    setLoading(false);
    console.log("failed to login");
  }

//   const renderLoading = () => {
//     if (loading) {
//       return (
//         <View>
//           <ActivityIndicator size={'large'} />
//         </View>
//       );
//     }
//   }

    return (

        <View style= {styles.container}>

            <View >
              <TextInput
                // style={styles.input}
                placeholder="Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                // style={styles.input}
                placeholder="Password"
                placeholderTextColor="#B1B1B1"
                returnKeyType="done"
                textContentType="newPassword"
                secureTextEntry={true}
                value={password}
                onChangeText={password => setPassword(password)}
              />
            </View>
            {/* {renderLoading} */}
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "red",
                width: "80%"
              }}
            >
              {error}
            </Text>
            <TouchableOpacity
              style={{ width: '86%', marginTop: 10 }}
              onPress={signInWithEmail}>
                  <Text>Sign In</Text>
            </TouchableOpacity>


            <FadeView initial = {0} final = {1}> 
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

                            <TouchableOpacity onPress={()=> navigation.navigate({ name: 'SignUp'})}>
                                <ImageBackground style={styles.button} source = {require(button)}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
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
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute'

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