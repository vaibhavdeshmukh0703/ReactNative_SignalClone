import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./PersonMessageStyle";

const PersonMessage = ({ ...props }): JSX.Element => {
  console.log(props);
   // const { personName, imageUrl, messageCount = 2, message, messageTime } = props.data;
    const user = props.data.users[1]; 
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default PersonMessage;
