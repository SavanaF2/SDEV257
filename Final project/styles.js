    import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    flex:1,
    justifyContent: 'center',
  },

  scroll: {
    height: 1,
    alignSelf: "stretch",
  },

  scrollItem: {
    margin: 10,
    alignSelf: "center",
  },
  invisible:{
    width:0,
    color:"black",
  },

   modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

header:{
  alignSelf: "center",
     fontSize: 16,
     margin:3,
},

homeText:{
  margin:10,
  marginBottom:20,
  marginTop:5,
},

moreDetails:{
  color:"white",
},

  modalInner: {
    backgroundColor: "white",
    padding: 70,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
  },

  modalText: {
    fontSize: 16,
    margin: 5,
  },
  
close:{
   position: "absolute",
  top: 0, 
  right: 0, 
},

  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "slategrey",
  },
});