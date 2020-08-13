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
  TouchableWithoutFeedback
} from 'react-native';
import 'firebase/firestore';
import 'firebase/database';
import firebase from 'firebase';

const SignUp = ({navigation}) => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onLoginSuccess = () => {
        var user = firebase.auth().currentUser;
        console.log('uid signup: ' + user.uid);
        firebase.database().ref(user.uid).set({
          "name": displayName,
          "level1": false,
          "level2": false,
          "level3": false,
        })
        navigation.navigate('Home');
    }
    
    const onLoginFailure = (errorMessage) => {
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
        let mount = true;
        if (mount) {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
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
            //onLoginSuccess();
        }
        return () => mount = false;
      }

      // React.useEffect(() => {
      //   firebase.auth().onAuthStateChanged((user) => {
      //     if (user != null) {
      //       setUser(user);
      //     }
      //   })
      // }, [user])

    return (

        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        >
        <SafeAreaView style={{ flex: 1 }}>
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
                  navigation.navigate('Title');
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