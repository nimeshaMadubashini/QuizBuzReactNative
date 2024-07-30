import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pageOne from '@/components/screens/pageOne';
import pageTwo from '@/components/screens/pageTwo';
import score from '@/components/screens/score';
import { View, Text, Pressable, Image } from 'react-native';



function HeaderLogo() {
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/images/headIcon.png')}
      />
      <Text style={{color: 'white', padding: 5, fontSize: 26, fontWeight: 600}}>Quiz Buz</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Splash"  screenOptions={{contentStyle:{backgroundColor:'white'},headerTitleStyle:{
          color:'white'
        },headerStyle:{
          backgroundColor:"orange",
        },statusBarColor:'orange'}}  >
        <Stack.Screen name="Home" component={pageOne}  options={{ headerTitle: () => <HeaderLogo /> }} />
        <Stack.Screen name="Quections" component={pageTwo} options={{ headerTintColor: 'white'}}  />
        <Stack.Screen name="Score" component={score} options={{ headerTintColor: 'white'}}  />
      </Stack.Navigator>
    </NavigationContainer>
     
     
  );
}

export default App;
