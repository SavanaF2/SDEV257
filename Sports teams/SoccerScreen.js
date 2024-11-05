import * as React from 'react';
import { Text, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BaseballScreen from './BaseballScreen';
import BasketballScreen from './BasketballScreen';

const SoccerScreen = ({navigation}) => {
  const teams = ['Team A', 'Team B', 'Team C'];
  return(
    <SafeAreaView style = {styles.container}>
    <Text style={styles.title}>Soccer Teams</Text>
    <FlatList
    data={teams}
    renderItem= {({ item}) => <Text>{item}</Text>}
    keyExtractor={(item) => item}
    />
    <Button title = "Go to Baseball Teams" onPress = {() => navigation.navigate("Baseball")} />
    <Button title = "Go to Basketball Teams" onPress = {() => navigation.navigate("Basketball")} />
    <Button title = "Go to Tennis Teams" onPress = {() => navigation.navigate("Tennis")} />
    <Button title = "Go to Football Teams" onPress = {() => navigation.navigate("Football")} />
    <Button title = "Go to Soccer Teams" onPress = {() => {} } />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    marginBottom: 20
  },
  team: {
    fontSize: 18,
    marginBottom: 10
  }

});
export default SoccerScreen;