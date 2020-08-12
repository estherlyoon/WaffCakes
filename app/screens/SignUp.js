import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  Button
} from 'react-native';import 'firebase/firestore';
import firebase from 'firebase';
import database from '@react-native-firebase/database';

const SignUp = ({navigation}) => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onRegisterSuccess = () => {
        const reference = database().ref('users/').push();
        console.log("reference: " + reference);
        reference.set({
            user: displayName,
        })
        .then(() => console.log('user registered'))
        navigation.navigate('Home');
    }
    
    const onRegisterFailure = (errorMessage) => {
        setError(errorMessage);
        setLoading(false);
        console.log("failed to login");
    }

    const renderLoading = () => {
        if (loading) {
          return (
            <View>
              <ActivityIndicator size={'large'} />
            </View>
          );
        }
    }

    const signInWithEmail = async () => {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(onRegisterSuccess.bind(this))
          .catch(error => {
              let errorCode = error.code;
              let errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                  onRegisterFailure.bind(this)('Weak Password!');
              } else {
                  onRegisterFailure.bind(this)(errorMessage);
              }
          });
      }

    return (

        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        >
        <SafeAreaView style={{ flex: 1 }}>
          <Button title = "Back" onPress={()=> navigation.goBack()}/>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={{ fontSize: 32, fontWeight: '700', color: 'gray' }}>
              Sign Up Her!!
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                textContentType="name"
                value={displayName}
                onChangeText={displayName => setDisplayName(displayName)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                style={styles.input}
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
                textAlign: 'center',
                color: 'red',
                width: '80%'
              }}
            >
              {error}
            </Text>
            <TouchableOpacity
              style={{ width: '86%', marginTop: 10 }}
              onPress={signInWithEmail}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ fontWeight: '200', fontSize: 17, textAlign: 'center' }}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                Already have an account?
              </Text>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderColor: '#707070',
        borderBottomWidth: 1,
        paddingBottom: 1.5,
        marginTop: 25.5
    },
    form: {
        width: '86%',
        marginTop: 15
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
});

export default SignUp;