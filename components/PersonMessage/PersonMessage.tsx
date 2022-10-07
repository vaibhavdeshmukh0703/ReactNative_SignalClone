import * as React from "react";
import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import Navigation from "../../navigation";
import styles from "./PersonMessageStyle";
import { useNavigation } from "@react-navigation/core";
const PersonMessage = ({ ...props }): JSX.Element => {
  
  const user = props.data.users[1]; 
  const navigation = useNavigation();
  const onPress = () => {
    console.log("presed") 
    navigation.navigate("chats", { id: props.data.id });
    
  }
  return (
    <Pressable onPress={ onPress } style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}      
          source={{
            uri: user.imageUri  ,
          }}
        />
        {props.data.messageCount && <View style={styles.messageCountContainer}>
          <Text adjustsFontSizeToFit={true} style={styles.messageCount}>
            {props.data.messageCount}
          </Text>
        </View>}
      </View>
      <View style={styles.messageBoxContainer}>
        <View style={styles.messagePersonContainer}>
          <Text style={styles.messagePerson}>{user.name}</Text>
          <Text style={styles.messageTime}> {props.data.lastMessage.createdAt}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text numberOfLines={1} style={styles.message}>
            {props.data.lastMessage.content}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PersonMessage;
