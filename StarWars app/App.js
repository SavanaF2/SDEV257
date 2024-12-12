import { NavigationContainer } from 
  "@react-navigation/native";
import { createDrawerNavigator } from 
  "@react-navigation/drawer";
import { createBottomTabNavigator } from 
  "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import { Platform } from "react-native";
import Home from "./Home";
import Planets from "./Planets";
import Films from "./Films";
import Spaceships from "./Spaceships";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Planets" component={Planets}/>
        <Tab.Screen name="Films" component={Films}/>
        <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>
      )}
      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />  
        </Drawer.Navigator>
      )}

     <Stack.Screen name = "Home" component={Home} />
     <Stack.Screen name = "Planets" component={Planets} />
     <Stack.Screen name = "Films" component={Films} />
      <Stack.Screen name = "Spaceships" component={Spaceships} />
    </NavigationContainer>
  );
}
