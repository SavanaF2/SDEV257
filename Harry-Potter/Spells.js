import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, Button, FlatList, ActivityIndicator, ScrollView, Linking } from 'react-native';
import axios from 'axios'
import styles from "./styles"
import InfoModal from "./InfoModal"

export default function Spells() {

  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemName, setItemName] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

function toggleModal() {
    setModalVisible(!modalVisible);
  }
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
{/*Goes into the flatlist. */}
   const renderItem = ({ item }) => (
     <SafeAreaView style={styles.scrollItem}>
     {/*Once a character name is pressed, store data about that character in setItemName and show a pop up modal which will display said data.  */}
        <Text style={styles.itemName}  onPress={() => { setModalVisible(true); const newArray = [item.name, item.description,];
    setItemName(newArray);}}> {item.name}   </Text>
         </SafeAreaView > 
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Spells in Harry Potter 
      </Text>
      
     <ScrollView style={styles.scroll}>
        {/*Display list of spells */}
        <FlatList
          data = {spells}
           keyExtractor = {(item) => item.name}
      renderItem={renderItem}
      
        />

        <InfoModal
        animationType="fade"
         message={ `Spell: ${itemName?.[0]}\n\nDescription: ${itemName?.[1]}`}
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
    </ScrollView>
      </SafeAreaView>
  );
}