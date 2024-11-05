import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*Today's Tasks*/}
      <SafeAreaView style={styles.tasksWrapper}>
        <Text styles={styles.sectionTitle}> Todays tasks </Text>
        <SafeAreaView styles={styles.items}>
          {/*This is where the tasks will go!*/}
          <Task text={'Do dishes'}/>
          <Task text={'Finish homework'}/>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: { 
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
 items: {
   marginTop: 30,
 },

});
