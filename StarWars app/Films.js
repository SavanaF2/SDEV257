import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView,  View, FlatList,Modal, TouchableOpacity, ActivityIndicator, ScrollView, Image,}from 'react-native';
import Searchbar from "./search";
import axios from 'axios'
import styles from "./styles"
import Swipeable from "./Swipeable";
import ConfirmationModal from "./ConfirmationModal";
import Network from "./Network";
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

export default function Films() {
  const [imageSize, setImageSize] = useState(200);
  const [films, setFilms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [filmName, setFilmName] = useState([]);
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
      setFilmName(name);
      setFilms(films.filter((item) => item.uid !== uid));
      
    };
  }

  useEffect(() => {
  const fetchFilms = async () => {
    try{
      const response = await axios.get("https://www.swapi.tech/api/films");
      setFilms(response.data.result);
    }
    catch (error) {
      console.error("Error fetching film data: ", error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchFilms();

  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>Loading Films...</Text>
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
     {/*Displays error if the application is disconnected from the network*/}
    <Network> </Network>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll}>
      <Text style={styles.header}>
        StarWars films
      </Text>
      {/*When clicked toggles search bar visibility*/}
      <TouchableOpacity style={styles.searchIcon} onPress={() => setSearchbarVisible(!searchbarVisible)}>
         <Ionicons name="search" size={25} color="black" />
      </TouchableOpacity>

      {/*If search bar is set to visible, shows the search bar*/}
       {searchbarVisible && (
      <Searchbar> </Searchbar>
       )}

{/*Loads image */}
 <LazyImage
          source={{

            uri: 'https://th.bing.com/th/id/R.17230eb32e5978baee96bef9df901c4f?rik=WpYM8OWv7nvJdg&pid=ImgRaw&r=0',
          }}
          style={{
            width: 370,
            height: imageSize,
            borderRadius: 10,
          }}
        />

      <FlatList
      data = {films}
      keyExtractor = {(item) => item.properties.title}
      renderItem={({ item }) =>  (
         <SafeAreaView style={styles.swipeContainer}>
      <Text>
      {/*Sends the items name and url to the swipeble page. When swiped calls the onswipe function and passes the item's id and name to it.*/}
        <Swipeable key={item.uid} onSwipe={onSwipe(item.uid, item.properties.title) } name={item.properties.title} url={item.properties.url}/>
      </Text>
       <ConfirmationModal
       key={item.uid}
        animationType="fade"
         message={filmName}
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
