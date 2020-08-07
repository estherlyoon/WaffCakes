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

const screen = '../assets/images/titlescreen.png';
const button = '../assets/images/button.png';






const TitleScreen = ({navigation, onLoginPress}) => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const signInWithEmail = async () => {
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

        <View>

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

                        


                        {/* <View>   
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
                        </View> */}
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