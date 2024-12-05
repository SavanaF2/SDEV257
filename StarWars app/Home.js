import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Searchbar from "./search";
export default function Home() {
  return (
  <View >
    <Text style={styles.header}>Home Content</Text>
    <Searchbar> </Searchbar>
  </View>
  );
}
