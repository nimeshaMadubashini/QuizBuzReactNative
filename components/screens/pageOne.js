import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import tw from 'twrnc';

const PageOne = ({ navigation }) => {
  return (
    <View style={tw`flex-1 items-center`}>
      <Image
        source={require("../../assets/images/pageoneimg.png")}
        style={{ height: 344, width: '100%' }}
      />
      <Text style={[tw`text-center text-4xl mb-8 mt-8`, { fontWeight: 'bold' }]}>
        Instructions
      </Text>
      <View style={tw`bg-purple-600 p-3 rounded mx-5`}>
        <Text style={tw`text-white text-2xl text-center`}>
          Each Quiz Has Four Options Quiz
        </Text>
        <Text style={tw`text-white text-2xl text-center`}>
          Progress will be Shown At Top
        </Text>
        <Text style={tw`text-white text-2xl text-center`}>
          Score Would Be Shown At The End
        </Text>
      </View>
      <View style={tw`flex justify-center items-center w-full`}>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={tw`bg-orange-500 p-2 mt-4 rounded text-center w-25`}
        >
          <Text style={tw`text-white text-lg text-center`}>START</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PageOne;
