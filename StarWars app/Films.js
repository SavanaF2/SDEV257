 import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView,  View, StyleSheet, FlatList,Modal, TouchableOpacity, ActivityIndicator, Linking, ScrollView, Image,}from 'react-native';
import Searchbar from "./search";
import axios from 'axios'
import styles from "./styles"
import Swipeable from "./Swipeable";
import ConfirmationModal from "./ConfirmationModal";
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        StarWars films
      </Text>

<ScrollView style={styles.scroll}>
      {/*Creates the searchbar*/}
      <Searchbar> </Searchbar>

{/*Loads image */}
 <LazyImage
          source={{
            //uri: 'https://placekitten.com/800/600',
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
        <Swipeable key={item.uid} onSwipe={onSwipe(item.uid, item.properties.title) } name={item.properties.title} />
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
