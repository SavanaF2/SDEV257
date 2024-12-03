import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import * as Location from "expo-location";

StatusBar.setBarStyle("dark-content");

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // Request permission
      let { status }  = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location denied!!!');
        return;
      }

      // Get initial location
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
   
   //set up location watcher
   const watcher = await Location.watchPositionAsync(
     {
       timeInterval: 1000,
       distanceInterval: 1,
     },
     (newLocation) => {
       setLocation(newLocation);
     }
     );
    })();
  },[]);
 


  return (
  <View style={styles.container}>
    <MapView style={styles.mapView} showsUserLocation={true}
      followUserLocation = {true}
      showsPointsOfInterest={false}
      initialRegion={location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      } : null }
      
   >
     //Markers for restaurants near me
    <Marker
          title="Arni's restaurant"
          description="A family restaurant"
          coordinate={{
            latitude: 40.28176,
            longitude: -86.51142,
          }}
        />
         <Marker
          title="Colfax Pizza King"
          description="A local restaurant known for their pizza."
          coordinate={{
            latitude: 40.19435,
            longitude: -86.66783,
          }}
        /> 
        </MapView>

     
      
  </View>
);
}