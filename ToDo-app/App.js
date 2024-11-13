
import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Task from './components/Task';


export default function App() {
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  setTaskItems([...taskItems, task])
  setTask(null);
}
const completeTask = (index) =>{
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}
  return (
    <SafeAreaView style={styles.container}>
      {/*Today's Tasks*/}
      <SafeAreaView style={styles.tasksWrapper}>
        <Text styles={styles.sectionTitle}> Todays tasks </Text>
        <SafeAreaView styles={styles.items}>

          {/*This is where the tasks will go!*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
              
            })
          }
         
        </SafeAreaView>
      </SafeAreaView>

      {/* Write a task */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <SafeAreaView style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </SafeAreaView>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
 writeTaskWrapper: {
   position: 'absolute',
   bottom: 60,
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',

 },
 input:{
   paddingVertical: 15,
   paddingHorizontal: 15,
   backgroundColor:'#FFF',
   borderRadius: 60,
   borderColor: '#C0C0C0',
   borderWidth: 1,
   width: 250,
 },
 addWrapper: {
   width: 60,
   heigth: 60,
   backgroundColor: '#FFF',
   borderRadius: 60,
   justifyContent: 'center',
   alignItems: 'center',
   borderColor: '#C0C0C0',
   borderWidth:1,
 },
 addText:{},

});
