import { TextInput, View, Text } from 'react-native'
import React, {useState} from 'react'

const AnswerInput = ({engine, answer}) => {
    const [input, setInput] = useState("");

    const checkAnswer = (text) => {
        setInput(""); //clears textbox
        if(text.nativeEvent.text == answer){
            engine.dispatch("correct");
            console.log("YATY")
        } else {
            engine.dispatch("incorrect");
            console.log("NO")
        }
    }

    return (
        <TextInput style={{fontSize: 40}} 
        placeholder = "Answer"
        placeholderTextColor="blue" 
         onChangeText = {text => setInput(text)} 
         onSubmitEditing = {checkAnswer}
        value={input}/>
    )
}

export default AnswerInput;