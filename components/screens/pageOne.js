import * as React from 'react';
import { View, Text, Button, Pressable,Image } from 'react-native';
import tw from "twrnc";


const pageOne = ({ navigation }) => {
  return (
    <View style={tw`flex-1  item-center`}>
<Image 
  source={require("../../assets/images/pageoneimg.png")}  style={[ { height: '344px',width:'100%' }]}
/>
<Text style={[tw`text-center text-4xl mb-8 mt-8 `,{fontWeight:'bold'}]}>
Instructions
        </Text>
            <View style={[tw`bg-purple-600 p-3 rounded`, {margin:'20px'}]}>
              <Text style={tw`text-white text-2xl text-center`}>
                Each Quiz Has Four Options Quiz
              </Text>
              <Text style={tw`text-white text-2xl text-center`}>
                Progress will be Shown At TOp
              </Text>
              <Text style={tw`text-white text-2xl text-center`}>
                Score Would Be Shown At The End
              </Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <Pressable 
    title="Go to Home" 
    onPress={() => navigation.navigate('Home')} 
    style={[tw`bg-orange-500 p-2  mt-4 rounded text-center`, { width: '100px' }]}
  >
    <Text style={tw`text-white text-lg text-center`}>
      START
    </Text>
  </Pressable>
</View>

       
    </View>
  );
};

export default pageOne;
