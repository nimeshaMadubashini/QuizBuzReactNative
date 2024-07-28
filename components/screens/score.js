import React from 'react'
import {Text, View,Image,Pressable} from "react-native"
import tw from "twrnc";
import { useRoute } from '@react-navigation/native';

 const score = () => {
    const route=useRoute()
    const {score}=route.params;
  return (
    <View style={tw`flex-1  item-center`}>
        <Image 
    source={require("../../assets/images/pageoneimg.png")}  style={[ { height: '344px',width:'100%' }]}
  />
  <Text style={tw`flex-1  item-center font-bold text-xl text-center p-2 mt-8`} >
    Congartulations!! Your  Score {score} Points
  </Text>
  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <Pressable 
    title="Go to Home" 
    onPress={() => navigation.navigate('Splash')} 
    style={[tw`bg-orange-500 p-2  mt-4 rounded text-center`, { width: '80px' }]}
  >
    <Text style={tw`text-white text-lg text-center`}>
      Play Again
    </Text>
  </Pressable>
</View>
  </View>
  )
}
export default score
