import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { reactQuestions } from '../config/quection';

const PageTwo = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleText = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate('Score', { score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === option;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <View style={tw`mt-6 p-4`}>
      <Text style={tw`text-2xl mb-4`}>
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map((option, index) => (
        <Pressable
          key={index}
          style={tw`border-2 p-4 my-2 rounded-md ${selectedOption === option ? isCorrect ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500" : "border-purple-500"}`}
          onPress={() => handleOptionPress(option)}
          disabled={!!selectedOption}
        >
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}
      <Pressable
        onPress={handleText}
        style={tw`bg-purple-600 p-4 rounded-md text-center mt-6`}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>
          {currentQuestionIndex === reactQuestions.length - 1 ? "Finish" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
};

export default PageTwo;
