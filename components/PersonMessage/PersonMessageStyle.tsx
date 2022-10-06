import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
    width: "100%",
    height: 60,
    // border : '1px solid black'
  },
  imageContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    // border :'1px solid black'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
  },
  messageCountContainer: {
    backgroundColor: "#3a76f0",
    border: "2px solid white",
    height: 20,
    width: 20,
    borderRadius: 10,
    position: "absolute",
    top: 10,
    left: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  messageCount: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  messageBoxContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  messagePersonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messagePerson: {
    color: "Black",
    fontSize: 20,
    fontWeight: "bold",
  },
  messageTime: {
    color: "grey",
    fontSize: 15,
    fontWeight: "300",
  },
  messageContainer: {
    marginTop: 3,
  },
  message: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default styles;
