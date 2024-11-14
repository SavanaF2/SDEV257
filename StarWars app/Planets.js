import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView,  View, StyleSheet, FlatList, ActivityIndicator, Linking } from 'react-native';

import axios from 'axios'

export default function PLanets() {
  


  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <FlatList
      data = {planets}
      keyExtractor = {(item) => item.name}
      renderItem={({ item }) => (
        <SafeAreaView style = {styles.item}>
        <Text style={styles.name} onPress={() => Linking.openURL(item.url)}> {item.name}</Text>
        
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
