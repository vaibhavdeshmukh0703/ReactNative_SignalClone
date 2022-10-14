import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Message from "../components/MessageComponent/Message";
import MessageInput from "../components/MessageInputComponent/MessageInput";
import Chats from "../assets/dummy-data/Chats";
import ChatRooms from "../assets/dummy-data/ChatRooms";
import { useRoute, useNavigation } from "@react-navigation/core";
console.log(Chats);
const ChatingScreen = () => {
  const [nameOfPerson, SetNameOfPersson] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  const userIdOfClickedPerson = route.params?.id;

  function findNameOfClickedPerson(listOfUser: any[]) {
    let nameOfPerson;
    listOfUser.forEach((element) => {
      if (element.id == userIdOfClickedPerson) {
        nameOfPerson = element.users[1].name;
        return;
      }
    });
    return nameOfPerson;
  }
  useEffect(() => {
    let isEffect = true;
    if (isEffect) {
      let name = findNameOfClickedPerson(ChatRooms);
      console.log("Name of Clicked Person", name);
      navigation.setOptions({ title: name,image:'vaibhav' });
    }
    return () => {
      isEffect = false;
      console.log(isEffect);
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={Chats.messages}
          renderItem={({ item }): JSX.Element => <Message message={item} />}
          inverted
          style={{marginBottom:20}}
        />
        <MessageInput />
      </View>
    </SafeAreaView>
  );
};

export default ChatingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent:"space-between",
    height: Dimensions.get("window").height - 70,
    backgroundColor: "white",
  },
});
