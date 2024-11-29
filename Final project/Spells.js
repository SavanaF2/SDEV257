import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, Button, FlatList, ActivityIndicator, ScrollView, Linking } from 'react-native';
import axios from 'axios'
import styles from "./styles"

export default function Spells() {

  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

{/*Try getting API data and store it in setSpells if successful else throw error. */}
  useEffect(() => {
  const fetchSpells = async () => {
    try{
      const response = await axios.get("https://hp-api.herokuapp.com/api/spells");
      setSpells(response.data);
    }
    catch (error) {
      console.error("Error fetching spell data: ", error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchSpells();

  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
      <ActivityIndicator size="large" color="0000ff" />
      <Text>Loading Characters...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Spells in Harry Potter <Button title="More details" style={styles.moreDetails} onPress={() => Linking.openURL("https://hp-api.herokuapp.com/api/spells") }/> 
      </Text>
      
     <ScrollView style={styles.scroll}>
        {/*Display list of spells */}
        <FlatList
          data = {spells}
          keyExtractor = {(item) => item.name}
          renderItem={({ item }) => (
          <SafeAreaView style={styles.scrollItem}>
          <Text style={styles.name} > {item.name}</Text>
          </SafeAreaView>
        )}
        />
    </ScrollView>
      </SafeAreaView>
  );
}