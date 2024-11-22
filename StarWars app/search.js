import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default function Searchbar() {
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search: "
        onChangeText={(e) => {
          setChangedText(e);
        }}
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
        }}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
      />
      <Text style={styles.textOutput}>Searched: {submittedText}</Text>
    </View> 
  );
}
