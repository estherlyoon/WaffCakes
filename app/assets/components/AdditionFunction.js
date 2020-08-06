import React, { Component, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  TextInput,
} from "react-native";

// const AnswerContext = React.createContext(0);

export default function AdditionFunction(props) {
  // Declare a new state variable, which we'll call "count"
  const [num0, setNum0] = useState(0);
  const [num1, setNum1] = useState(1);
  return (
    <View>
      <Text>
        What is {num0} + {num1}
      </Text>
      <UserInput answer={num0 + num1} onCorrect={props.onCorrect} />
    </View>
  );
}
// [function] testAnswer

function UserInput(props) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{ height: 100 }}
        placeholder="Type your answer!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        keyboardType={"number-pad"}
      />
      <Button
        title="Enter"
        style={{ height: 40 }}
        onPress={() => console.log(verify(text, props.answer, props.onCorrect))}
      ></Button>
      <Text>user input here: {text}</Text>
    </View>
  );
}

let verify = (text, answer, onCorrect) => {
  console.log("VERIFY");
  if (text == answer) {
    console.log("correct");
    onCorrect();
    return true;
  }
  console.log("nooo");
  return false;
};
