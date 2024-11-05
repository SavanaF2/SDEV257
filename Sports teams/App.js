{/* 
  Savana Fallen
  This program lists teams for different types of sports.
 */}

import * as React from 'react';
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BaseballScreen from "./BaseballScreen";
import BasketballScreen from "./BasketballScreen";
import SoccerScreen from "./SoccerScreen";
import TennisScreen from "./TennisScreen";
import FootballScreen from "./FootballScreen";

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => (
  <SafeAreaView>
  <Text> Welcome to the Sports App!!!</Text>
<Button title="Go to Basketball Teams" onPress={() => navigation.navigate('Basketball')}/>
<Button title="Go to Baseball Teams" onPress={() => navigation.navigate('Baseball')}/>
<Button title="Go to Soccer Teams" onPress={() => navigation.navigate('Soccer')}/>
<Button title="Go to Tennis Teams" onPress={() => navigation.navigate('Tennis')}/>
<Button title="Go to Football Teams" onPress={() => navigation.navigate('Football')}/>

 </SafeAreaView>
 );

 const App = () => {
   return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName = "Home">
     <Stack.Screen name = "Home" component={HomeScreen} />
     <Stack.Screen name = "Baseball" component={BaseballScreen} />
    <Stack.Screen name = "Basketball" component={BasketballScreen} />
    <Stack.Screen name = "Soccer" component={SoccerScreen} />
    <Stack.Screen name = "Tennis" component={TennisScreen} />
    <Stack.Screen name = "Football" component={FootballScreen} />

     </Stack.Navigator>
     </NavigationContainer>

   );
 };

 export default App;