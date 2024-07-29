import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { useRoute, useNavigation } from '@react-navigation/native';

const Score = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { score } = route.params;

  return (
    <View style={tw`flex-1 items-center`}>
      <Image
        source={require("../../assets/images/pageoneimg.png")}
        style={{ height: 344, width: '100%' }}
      />
      <Text style={tw`font-bold text-xl text-center p-2 mt-8`}>
        Congratulations!! Your Score {score} Points
      </Text>
      <View style={tw`flex justify-center items-center w-full`}>
        <Pressable
          onPress={() => navigation.navigate('Splash')}
          style={tw`bg-orange-500 p-2 mt-4 rounded text-center w-30`}
        >
          <Text style={tw`text-white text-lg text-center`}>Play Again</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Score;
