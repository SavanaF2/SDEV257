import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, View, FlatList, Pressable, Modal,ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios'
import styles from "./styles";
import InfoModal from "./InfoModal"

export default function Characters() { 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemName, setItemName] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);

 function toggleModal() {
    setModalVisible(!modalVisible);
  }

   {/*Try getting API data and store it in setCharacters if successful else throw error. */}
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
     {/*Once a character name is pressed, store data about that character in setItemName and show a pop up modal which will display said data.  */}
        <Text style={styles.itemName}  onPress={() => { setModalVisible(true); const newArray = [item.name, item.house, item.patronus, item.dateOfBirth];
    setItemName(newArray);}}> {item.name}   </Text>
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
         message={ `Name: ${itemName?.[0]} \nHouse: ${itemName?.[1]} \nPatronus: ${itemName?.[2]} \nBirthday: ${itemName?.[3]}`}
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
      
     </ScrollView>
  </SafeAreaView>
    
  );
}