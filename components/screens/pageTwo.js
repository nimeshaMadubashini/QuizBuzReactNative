import * as React from 'react';
import { View, Text, Button, Pressable, Alert } from 'react-native';
import tw from "twrnc";
import { reactQuestions } from "../config/quection";
import { useState } from 'react';

const pageTwo = ({ navigation }) => {
  const [currentQuectionIndex, setCurrentQuectionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  console.log({ isCorrect });

  const handleText = () => {
    if (currentQuectionIndex === reactQuestions.length - 1) {
      navigation.navigate('Score',{score:score})
    }
    else{
      setCurrentQuectionIndex(currentQuectionIndex + 1);
setSelectedOption(null)
setIsCorrect(null)
    }
  };

  const handleOptionPress = (pressOption) => {
    setSelectedOption(pressOption);
    const isAnswerCorrect = reactQuestions[currentQuectionIndex].correctAnswer === pressOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <View style={tw`mt-6 p-4`}>
      {/* <Text>Splash Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Text style={tw`text-2xl mb-4`}>
        {reactQuestions[currentQuectionIndex].question}
      </Text>

      {reactQuestions[currentQuectionIndex].options.map((option, index) => (
        <Pressable
          key={index} // Add key prop here
          style={tw`border-2 border-purple-600 p-4 my-2 rounded-md ${
            selectOption === option ? isCorrect ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500" : "border-purple-500"
          }`}
          onPress={() => handleOptionPress(option)}
          disabled={selectOption}
        >
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}

      <Pressable 
        title="Go to Home" 
        onPress={handleText} 
        style={tw`bg-purple-600 p-4 rounded-md text-center mt-6`}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>
          {
            currentQuectionIndex === reactQuestions.length - 1 ? "Finish":"Next"
          }
        </Text>
      </Pressable>
    </View>
  );
};

export default pageTwo;
