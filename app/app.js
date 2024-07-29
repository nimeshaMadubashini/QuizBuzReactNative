import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pageOne from '@/components/screens/pageOne';
import pageTwo from '@/components/screens/pageTwo';
import score from '@/components/screens/score';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{contentStyle:{backgroundColor:'white'}}} >
        <Stack.Screen name="Splash" component={pageOne} />
        <Stack.Screen name="Home" component={pageTwo} />
        <Stack.Screen name="Score" component={score} />
      </Stack.Navigator>
    </NavigationContainer>
     
     
  );
}

export default App;
