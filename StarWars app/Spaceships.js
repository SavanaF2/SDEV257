import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView,  View, TouchableOpacity, StyleSheet, Image,FlatList, ActivityIndicator, Linking, ScrollView } from 'react-native';
import Searchbar from "./search";
import ConfirmationModal from "./ConfirmationModal";
import Swipeable from "./Swipeable";
import Network from "./Network";
import axios from 'axios'
import styles from "./styles"
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const LazyImage = ({ source, style }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[style, styles.lazyImageContainer]}>
      {loading && (
        <ActivityIndicator size="large" color="#6200ea" style={styles.loader} />
      )}
      <Image
        source={source}
        style={style}
        onLoad={() => setLoading(false)}
        resizeMode="contain"
      />
    </View>
  );
};
export default function Spaceships() {
  
   const [imageSize, setImageSize] = useState(200);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [spaceshipName, setSpaceshipName] = useState([]);
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);

{/*When triggered toggles modal visibility to visable or unvisable */}
   function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function onSwipe(uid, name) {
    return () => {
      {/*Calls function which toggles modal visibility */}
      toggleModal()
      {/*Stores name of item that was swiped */}
      setSpaceshipName(name);
    setSpaceships(spaceships.filter((item) => item.uid !== uid));
    };
  }

  useEffect(() => {
  const fetchSpaceships = async () => {
    try{
      const response = await axios.get("https://www.swapi.tech/api/starships");
      setSpaceships(response.data.results);
    }
    catch (error) {
      console.error("Error fetching spaceship data: ", error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchSpaceships();

  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>Loading Spaceships...</Text>
      </SafeAreaView>
    );
  }

const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const renderSwipeable = (item) => (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteEvent(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}>
      <SafeAreaView style={styles.event}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text>{item.date.toLocaleString()}</Text>
      </SafeAreaView>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
     {/*Displays error if the application is disconnected from the network*/}
    <Network> </Network>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll}>
      <Text style={styles.header}>
        Spaceships in StarWars
      </Text>

        {/*When clicked toggles search bar visibility*/}
      <TouchableOpacity style={styles.searchIcon} onPress={() => setSearchbarVisible(!searchbarVisible)}>
         <Ionicons name="search" size={25} color="black" />
      </TouchableOpacity>

       {/*If search bar is set to visible, shows the search bar*/}
       {searchbarVisible && (
      <Searchbar> </Searchbar>
       )}
     
        <LazyImage
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LzGKW0JU9NjQCiosZXF7owHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7',
          }}
          style={{
            width: 370,
            height: imageSize,
            borderRadius: 10,
          }}
        />

      <FlatList
      data = {spaceships}
      keyExtractor = {(item) => item.name}
      renderItem={({ item }) => (
          <SafeAreaView style={styles.swipeContainer}>
      <Text>
         {/*Sends the items name and url to the swipeable page. When swiped calls the onswipe function and passes the item's id and name to it.*/}
        <Swipeable key={item.uid} onSwipe={onSwipe(item.uid, item.name) } name={item.name} url={item.url} />
      </Text>
       <ConfirmationModal
       key={item.uid}
        animationType="fade"
         message={spaceshipName}
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
      </SafeAreaView>
      )}
      />
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}
