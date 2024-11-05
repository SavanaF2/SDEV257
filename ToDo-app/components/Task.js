import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Task = (props) => {
  return(
    <SafeAreaView style={styles.item}>
      <SafeAreaView style={styles.itemLeft}>
        <SafeAreaView style={styles.square}></SafeAreaView>
        <Text style={styles.itemText}>{props.text}</Text>
      </SafeAreaView>
      <SafeAreaView styles={styles.circular}></SafeAreaView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  itemLeft: {
    flexDirection:'row',
    alignItems: 'center',
    flexWrap: 'wrap,'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#558CF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,

  },
  itemText: {
    maxwidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#558CF6',
    borderWidth:2,
  borderRadius:5,
  },
});

export default Task;