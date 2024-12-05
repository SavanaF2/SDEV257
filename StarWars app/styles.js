  import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textInputContainer: {
    alignSelf: "stretch",
    marginBottom: 30,
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
    height: 20,
    fontSize: 11,
    width:200,
    borderRadius:4,
    margin: "auto",
  },
  textOutput: {
    margin: "auto",
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

  name: {
    fontSize: 20,
    color: 'black'
  },
  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
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
  }
});
