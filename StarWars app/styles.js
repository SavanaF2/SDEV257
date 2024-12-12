import { StyleSheet } from "react-native";
export default StyleSheet.create({
  textInputContainer: {
    alignSelf: "stretch",
  },

  textInputLabel: {
    marginBottom: 4,
  },
list: {
    flexGrow: 1,
    marginBottom: 16,
  },
 textInput: {
    backgroundColor: "white",
    height: 30,
    fontSize: 11,
    width:230,
    borderRadius:4,
    margin: "auto",
  },
  textOutput: {
    margin: "auto",
    paddingBottom:40,
  },
  event: {
    backgroundColor: '#e9ecef',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  eventName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
    scroll: {
    height: 1,
    alignSelf: "stretch",
  },

  scrollItem: {
    margin: 20,
    alignSelf: "center",
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   homeContainer: {
     flex:1,
      margin:"auto",
      backgroundColor: '#ecf0f1',
    padding: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  header: {

    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  homeHeader: {
    marginTop:8,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  name: {
    fontSize: 20,
    color: 'black'
  },
  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 40,
    justifyContent: "center",
    margin:'auto',
  },

  swipeItem: {
    width: 200,
    height: 25,
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },

  swipeItemText: {
    textAlign: "center",
    fontSize: 17,
    color: 'black'
  },

  swipeBlank: {
    width: 200,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    margin: 5,
    color: "slategrey",
  },
  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "slategrey",
  },
lazyImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor:"black",
  },
  loader: {
    position: 'absolute',
  },
  forwardArrow: {
    position: 'absolute',
    right:0,
  },
    backArrow: {
    position: 'absolute',
    left:0,
  },
  searchIcon: {
    position:"absolute",
    top:0,
    right:30,
},
  homeSearchIcon: {
    position:"absolute",
    top:8,
    right:28,
},
slideshowText: {
  
  textAlign:"center",
  left:20,
   fontSize: 18,
  color: 'white',
  postion:'absolute',
  top:-30,
  width:340,
},
homeText: {
marginTop: 10,
marginBottom: 20,
 fontSize: 14,
}
});
