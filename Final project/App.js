import * as React from 'react';
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from "./Characters";
import Spells from "./Spells";
import styles from "./styles"

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
  <Text style={styles.header}> Welcome to the Harry Potter info app. </Text>
  <Text style={styles.homeText}>Click on one of the options below to find out more about the Harry Potter characters or Spells.</Text>
<Button title="Characters" onPress={() => navigation.navigate('Characters') }/>
<Button title="Spells" onPress={() => navigation.navigate('Spells')}/>

 </SafeAreaView>
 );

 const App = () => {
   return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName = "Home">
     <Stack.Screen name = "Home" component={HomeScreen} />
     <Stack.Screen name = "Characters" component={Characters} />
    <Stack.Screen name = "Spells" component={Spells} />
     </Stack.Navigator>
     </NavigationContainer>

   );
 };

 export default App;
