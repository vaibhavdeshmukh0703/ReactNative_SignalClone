import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import Message from "../components/MessageComponent/Message";
import MessageInput from "../components/MessageInputComponent/MessageInput";
import Chats from "../assets/dummy-data/Chats";
import {useRoute} from '@react-navigation/core'
console.log(Chats);
const ChatingScreen = () => {
  const route = useRoute();
  console.log("Displaying User id", route.params?.id);
  console.log(route.key)
  console.log(route.name)
  console.log(route.params)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={Chats.messages}
          renderItem={({ item }): JSX.Element => <Message message={item} />}
          
        />
        <MessageInput />
      </View>
    </SafeAreaView>
  );
};

export default ChatingScreen;

const styles = StyleSheet.create({
  container: {
   
     //height: Dimensions.get("window").height,
   // height: '100%', 
    backgroundColor: "white", 
   //justifyContent: "space-between"  
 }
});
