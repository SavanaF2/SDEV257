
import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, View, Image, FlatList,ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios'
import styles from "./styles";
import InfoModal from "./InfoModal"

export default function Characters() { 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsWithBlanks, setItemsWithBlanks] = useState([]);
  {/*Replaces blank items with the word null */}
  const items = itemsWithBlanks.map(item => item === "" ? "Null" : item);
   const [modalVisible, setModalVisible] = useState(false);
   const itemCategory = ["Name", "House", "Patronous", "Birthday"]
 function toggleModal() {
    setModalVisible(!modalVisible);
  }

   {/*Try getting API data and store it in setCharacters if successful, else throw error. */}
  useEffect(() => {
  const fetchCharacters = async () => {
    try{
      const response = await axios.get("https://hp-api.herokuapp.com/api/characters");
      setCharacters(response.data);
    }
    catch (error) {
      console.error("Error fetching spaceship data: ", error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchCharacters();
  
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
     {/*Once a character name is pressed, store data about that character and show a pop up modal which will display said data.  */}
        <Text style={styles.itemName}  onPress={() => { setModalVisible(true); const infoArray = [item.name, item.house, item.patronus, item.dateOfBirth]; setItemsWithBlanks(infoArray); }}> {item.name}  </Text>
         </SafeAreaView > 
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Characters in Harry Potter
      </Text>
     <ScrollView style={styles.scroll}>
     {/*Shows list of characters */}
      <FlatList
      data = {characters}
      keyExtractor = {(item) => item.name}
      renderItem={renderItem}
      />
         <InfoModal
        animationType="fade"
        //Maps over the character information and gets called via the InfoModal page which displays it
        message={
          itemCategory.map((itemCategory, index) => (
          `${itemCategory}: ${items[index]}\n`
          ))
        }
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
     </ScrollView>
  </SafeAreaView>
  );
}
