import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';


export default function InfoModal(props) {
  
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>
          {/*Shows item name */}
          {props.message}
          </Text>
            <TouchableOpacity style={styles.close} onPress={props.onPressCancel}>
               <Ionicons name="close" size={25} color="black" />
          </TouchableOpacity>
   
        </View>
      </View>
    </Modal>
  );
}

InfoModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};