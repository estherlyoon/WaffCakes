import { TextInput, View, Text, Platform} from "react-native";
import React, { useState } from "react";

const AnswerInput = ({ engine, answer }) => {
  const [input, setInput] = useState("");

  const checkAnswer = (text) => {
    setInput(""); //clears textbox
    if (text.nativeEvent.text == answer) {
      engine.dispatch("lackey-correct");
      console.log("YATY");
      setInput("");
    } else {
      engine.dispatch("lackey-incorrect");
      console.log(text.nativeEvent.text) + " " + answer;
    }
  };

  return (
    <TextInput
      keyboardType={Platform.OS == 'android' ? "numeric" : "default"}
      style={{ fontSize: 40 }}
      placeholder="Answer"
      placeholderTextColor="blue"
      onChangeText={(text) => setInput(text)}
      onSubmitEditing={checkAnswer}
      blurOnSubmit={false}
      value={input}
    />
  );
};

export default AnswerInput;
