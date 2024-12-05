import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, Image, View, StyleSheet, FlatList, ActivityIndicator, Linking, ScrollView } from 'react-native';
import Searchbar from "./search";
import axios from 'axios';
import Swipeable from "./Swipeable";
import ConfirmationModal from "./ConfirmationModal";
import styles from "./styles";

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

export default function PLanets() {
  
const [imageSize, setImageSize] = useState(200);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [planetName, setPlanetName] = useState([]);

{/*When triggered toggles modal visibility to visable or unvisable */}
  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function onSwipe(uid, name) {
     
    return () => {
      {/*Calls function which toggles modal visibility */}
      toggleModal()
      {/*Stores name of item that was swiped */}
      setPlanetName(name);
      setPlanets(planets.filter((item) => item.uid !== uid));
    };
  }

  useEffect(() => {
  const fetchPlanets = async () => {
    try{
      const response = await axios.get("https://www.swapi.tech/api/planets");
      setPlanets(response.data.results);
    }
    catch (error) {
      console.error("Error fetching planet data: ", error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchPlanets();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>Loading Planets...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Planets in StarWars
      </Text>

       <ScrollView style={styles.scroll}>
      <Searchbar></Searchbar>
      
       <LazyImage
          source={{
            //uri: 'https://placekitten.com/800/600',
            uri: 'https://th.bing.com/th/id/OIP.Xc2UiXCI3LcLE0tY64Oj_AHaDt?w=315&h=175&c=7&r=0&o=5&dpr=1.2&pid=1.7',
          }}
          style={{
            width: 370,
            height: imageSize,
            borderRadius: 10,
          }}
        />
     
      <FlatList
      data = {planets}
      keyExtractor = {(item) => item.name}
      renderItem={({ item }) => (
         <SafeAreaView style={styles.swipeContainer}>
      <Text>
        <Swipeable key={item.uid} onSwipe={onSwipe(item.uid, item.name) } name={item.name} />
      </Text>
       <ConfirmationModal
       key={item.uid}
        animationType="fade"
         message={planetName}
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
      </SafeAreaView>
      )}
      /> 
      </ScrollView>
    </SafeAreaView>
  );
}
