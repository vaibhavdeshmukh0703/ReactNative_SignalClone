import { View, Text } from "react-native";
import React from "react";
import styles from "./MessageStyle";
const Message = ({ ...message }): JSX.Element => {
  const isMe = message.message.user.id === "u1";

  return (
    <View
      style={[
        styles.component,
        isMe ? styles.rightMessageComponent : styles.leftMessageComponent,
      ]}
    >
      <Text style={[styles.message, { color: isMe ? "black" : "white" }]}>
        {message.message.content}
      </Text>
    </View>
  );
};

export default Message;
