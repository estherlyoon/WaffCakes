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

import FadeView from './FadeView';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import "firebase/firestore";
import * as GoogleSignIn from 'expo-google-sign-in';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


const Login = ({navigation}) => {

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


    return(
        <View style={{backgroundColor:'white', flex:1, justifyContent: 'center'}}>
            <Button title = "Back" onPress={()=> navigation.goBack()}/>
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
            <Text style={{fontSize: 18, textAlign: "center", color: "red", width: "80%"}}>
            {/* {error} */}
            </Text>
            <TouchableOpacity style={{ width: '86%', marginTop: 10 }} onPress={signInWithEmail}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>

    );
}

export default Login;

