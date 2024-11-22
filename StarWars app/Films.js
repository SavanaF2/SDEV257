import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView,  View, StyleSheet, FlatList, ActivityIndicator, Linking } from 'react-native';
import Searchbar from "./search";
import axios from 'axios'

export default function Films() {
  

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        StarWars films
      </Text>
      
      <Searchbar> </Searchbar>

      <FlatList
      data = {films}
      keyExtractor = {(item) => item.properties.title}
      renderItem={({ item }) => (
        <SafeAreaView style = {styles.item}>
        <Text style={styles.name} onPress={() => Linking.openURL(item.properties.url)}> {item.properties.title}</Text>
        
        </SafeAreaView>
      )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  header: {
    fontsize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  name: {
    fontSize: 10,
    color: 'gray'
  }
});
